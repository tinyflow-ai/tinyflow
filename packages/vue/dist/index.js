import { defineComponent as Xg, ref as Yg, onMounted as Ug, onUnmounted as Gg, createElementBlock as Qg, openBlock as Jg, normalizeStyle as ev, normalizeClass as tv } from "vue";
const nv = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(nv);
const ld = 1, ud = 2, cd = 4, rv = 8, ov = 16, iv = 1, sv = 2, dd = 4, av = 8, lv = 16, hd = 1, uv = 2, pd = "[", Ns = "[!", vl = "]", Ir = {}, $t = Symbol(), cv = "http://www.w3.org/1999/xhtml", dv = "http://www.w3.org/2000/svg", fd = "@attach", hv = !1;
var Ts = Array.isArray, pv = Array.prototype.indexOf, ml = Array.from, Yi = Object.keys, Ui = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, gd = Object.getOwnPropertyDescriptors, vd = Object.prototype, fv = Array.prototype, Ds = Object.getPrototypeOf, Eu = Object.isExtensible;
function So(t) {
  return typeof t == "function";
}
const He = () => {
};
function gv(t) {
  return t();
}
function Sa(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function md() {
  var t, e, n = new Promise((r, o) => {
    t = r, e = o;
  });
  return { promise: n, resolve: t, reject: e };
}
function At(t, e, n = !1) {
  return t === void 0 ? n ? (
    /** @type {() => V} */
    e()
  ) : (
    /** @type {V} */
    e
  ) : t;
}
function mo(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const St = 2, yl = 4, As = 8, yd = 1 << 24, rr = 16, or = 32, xr = 64, Ls = 128, fn = 512, Nt = 1024, Ft = 2048, ir = 4096, Xt = 8192, Yn = 16384, Is = 32768, Qn = 65536, Pu = 1 << 17, wl = 1 << 18, Kr = 1 << 19, wd = 1 << 20, Bo = 32768, _a = 1 << 21, bl = 1 << 22, pr = 1 << 23, Nn = Symbol("$state"), xl = Symbol("legacy props"), vv = Symbol(""), Qr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), mv = 1, Ms = 3, sr = 8;
function Cl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function yv() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function wv(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function bv() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xv(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Cv() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function kv() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $v(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Sv() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _v() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ev() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Pv() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ri(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ov() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Nv() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ce = !1;
function It(t) {
  Ce = t;
}
let De;
function ut(t) {
  if (t === null)
    throw ri(), Ir;
  return De = t;
}
function gn() {
  return ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(De)
  );
}
function F(t) {
  if (Ce) {
    if (/* @__PURE__ */ Ut(De) !== null)
      throw ri(), Ir;
    De = t;
  }
}
function $e(t = 1) {
  if (Ce) {
    for (var e = t, n = De; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n);
    De = n;
  }
}
function Gi(t = !0) {
  for (var e = 0, n = De; ; ) {
    if (n.nodeType === sr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === vl) {
        if (e === 0) return n;
        e -= 1;
      } else (r === pd || r === Ns) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n)
    );
    t && n.remove(), n = o;
  }
}
function bd(t) {
  if (!t || t.nodeType !== sr)
    throw ri(), Ir;
  return (
    /** @type {Comment} */
    t.data
  );
}
function xd(t) {
  return t === this.v;
}
function Cd(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function kd(t) {
  return !Cd(t, this.v);
}
let yo = !1, Tv = !1;
function Dv() {
  yo = !0;
}
const Av = [];
function kl(t, e = !1, n = !1) {
  return Mi(t, /* @__PURE__ */ new Map(), "", Av, null, n);
}
function Mi(t, e, n, r, o = null, i = !1) {
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
    if (Ts(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = Mi(u, e, n, r, null, i));
      }
      return a;
    }
    if (Ds(t) === vd) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = Mi(
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
      return Mi(
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
function oo(t) {
  nt = t;
}
function vn(t) {
  return (
    /** @type {T} */
    zs().get(t)
  );
}
function Mr(t, e) {
  return zs().set(t, e), e;
}
function Lv(t) {
  return zs().has(t);
}
function Iv() {
  return zs();
}
function ae(t, e = !1, n) {
  nt = {
    p: nt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: yo && !e ? { s: null, u: null, $: [] } : null
  };
}
function le(t) {
  var e = (
    /** @type {ComponentContext} */
    nt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Kd(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, nt = e.p, t ?? /** @type {T} */
  {};
}
function wo() {
  return !yo || nt !== null && nt.l === null;
}
function zs(t) {
  return nt === null && Cl(), nt.c ??= new Map(Mv(nt) || void 0);
}
function Mv(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Pr = [];
function $d() {
  var t = Pr;
  Pr = [], Sa(t);
}
function Cr(t) {
  if (Pr.length === 0 && !Mo) {
    var e = Pr;
    queueMicrotask(() => {
      e === Pr && $d();
    });
  }
  Pr.push(t);
}
function zv() {
  for (; Pr.length > 0; )
    $d();
}
function Sd(t) {
  var e = Re;
  if (e === null)
    return We.f |= pr, t;
  if ((e.f & Is) === 0) {
    if ((e.f & Ls) === 0)
      throw t;
    e.b.error(t);
  } else
    io(t, e);
}
function io(t, e) {
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
const $i = /* @__PURE__ */ new Set();
let Qe = null, zi = null, en = null, Jt = [], Vs = null, Ea = !1, Mo = !1;
class dn {
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
    Jt = [], zi = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (zi = this, Qe = null, Ou(n.render_effects), Ou(n.effects), zi = null, this.#o?.resolve()), en = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(e, n) {
    e.f ^= Nt;
    for (var r = e.first; r !== null; ) {
      var o = r.f, i = (o & (or | xr)) !== 0, s = i && (o & Nt) !== 0, a = s || (o & Xt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Ls) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Nt : (o & yl) !== 0 ? n.effects.push(r) : ii(r) && ((r.f & rr) !== 0 && n.block_effects.push(r), Fo(r));
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
      ((n.f & Ft) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), Tt(n, Nt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & St) === 0 || (n.f & Bo) === 0 || (n.f ^= Bo, this.#u(
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & pr) === 0 && (this.current.set(e, e.v), en?.set(e, e.v));
  }
  activate() {
    Qe = this, this.apply();
  }
  deactivate() {
    Qe === this && (Qe = null, en = null);
  }
  flush() {
    if (this.activate(), Jt.length > 0) {
      if (_d(), Qe !== null && Qe !== this)
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
    if ($i.size > 1) {
      this.previous.clear();
      var e = en, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of $i) {
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
          var o = Jt;
          Jt = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Ed(d, a, l, u);
          if (Jt.length > 0) {
            Qe = i, i.apply();
            for (const d of Jt)
              i.#s(d, r);
            i.deactivate();
          }
          Jt = o;
        }
      }
      Qe = null, en = e;
    }
    this.committed = !0, $i.delete(this);
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
      Tt(e, Ft), zr(e);
    for (const e of this.#a)
      Tt(e, ir), zr(e);
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
    return (this.#o ??= md()).promise;
  }
  static ensure() {
    if (Qe === null) {
      const e = Qe = new dn();
      $i.add(Qe), Mo || dn.enqueue(() => {
        Qe === e && e.flush();
      });
    }
    return Qe;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Cr(e);
  }
  apply() {
  }
}
function f(t) {
  var e = Mo;
  Mo = !0;
  try {
    for (var n; ; ) {
      if (zv(), Jt.length === 0 && (Qe?.flush(), Jt.length === 0))
        return Vs = null, /** @type {T} */
        n;
      _d();
    }
  } finally {
    Mo = e;
  }
}
function _d() {
  var t = gr;
  Ea = !0;
  try {
    var e = 0;
    for (Ji(!0); Jt.length > 0; ) {
      var n = dn.ensure();
      if (e++ > 1e3) {
        var r, o;
        Vv();
      }
      n.process(Jt), fr.clear();
    }
  } finally {
    Ea = !1, Ji(t), Vs = null;
  }
}
function Vv() {
  try {
    Cv();
  } catch (t) {
    io(t, Vs);
  }
}
let Kn = null;
function Ou(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Yn | Xt)) === 0 && ii(r) && (Kn = /* @__PURE__ */ new Set(), Fo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? qd(r) : r.fn = null), Kn?.size > 0)) {
        fr.clear();
        for (const o of Kn) {
          if ((o.f & (Yn | Xt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Kn.has(s) && (Kn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Yn | Xt)) === 0 && Fo(l);
          }
        }
        Kn.clear();
      }
    }
    Kn = null;
  }
}
function Ed(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & St) !== 0 ? Ed(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (bl | rr)) !== 0 && (i & Ft) === 0 && Pd(o, e, r) && (Tt(o, Ft), zr(
        /** @type {Effect} */
        o
      ));
    }
}
function Pd(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & St) !== 0 && Pd(
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
function zr(t) {
  for (var e = Vs = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ea && e === Re && (n & rr) !== 0 && (n & wl) === 0)
      return;
    if ((n & (xr | or)) !== 0) {
      if ((n & Nt) === 0) return;
      e.f ^= Nt;
    }
  }
  Jt.push(e);
}
function Fr(t) {
  let e = 0, n = Jn(0), r;
  return () => {
    Ro() && (c(n), Zr(() => (e === 0 && (r = st(() => t(() => Sn(n)))), e += 1, () => {
      Cr(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, Sn(n));
      });
    })));
  };
}
var Hv = Qn | Kr | Ls;
function Bv(t, e, n) {
  new Rv(t, e, n);
}
class Rv {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = Ce ? De : null;
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
  #y = Fr(() => (this.#p = Jn(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    Re.b, this.#e = !!this.#r.pending, this.#i = kr(() => {
      if (Re.b = this, Ce) {
        const i = this.#n;
        gn(), /** @type {Comment} */
        i.nodeType === sr && /** @type {Comment} */
        i.data === Ns ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = Wt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Hv), Ce && (this.#t = De);
  }
  #v() {
    try {
      this.#a = Wt(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = Wt(() => e(this.#t)), dn.enqueue(() => {
      var n = this.#m();
      this.#a = this.#g(() => (dn.ensure(), Wt(() => this.#o(n)))), this.#h > 0 ? this.#b() : (eo(
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
    return this.#e && (this.#c = zt(), this.#t.before(this.#c), e = this.#c), e;
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
    var n = Re, r = We, o = nt;
    nn(this.#i), Bt(this.#i), oo(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return Sd(i), null;
    } finally {
      nn(n), Bt(r), oo(o);
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
    ), Ud(this.#a, this.#u)), this.#s === null && (this.#s = Wt(() => e(this.#t)));
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
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#s && eo(this.#s, () => {
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
    this.#x(e), this.#d += e, this.#p && ao(this.#p, this.#d);
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
    this.#a && (kt(this.#a), this.#a = null), this.#s && (kt(this.#s), this.#s = null), this.#l && (kt(this.#l), this.#l = null), Ce && (ut(
      /** @type {TemplateNode} */
      this.#n
    ), $e(), ut(Gi()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Nv();
        return;
      }
      o = !0, i && Pv(), dn.ensure(), this.#d = 0, this.#l !== null && eo(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#g(() => (this.#f = !1, Wt(() => this.#o(this.#t)))), this.#h > 0 ? this.#b() : this.#e = !1;
    };
    var a = We;
    try {
      Bt(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      io(l, this.#i && this.#i.parent);
    } finally {
      Bt(a);
    }
    r && Cr(() => {
      this.#l = this.#g(() => {
        dn.ensure(), this.#f = !0;
        try {
          return Wt(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (l) {
          return io(
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
function so(t, e) {
  return e;
}
function Kv(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    El(e[i].e, r, !0);
  Xd(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      _l(l), l.append(a), t.items.clear(), ln(t, e[0].prev, e[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = e[u];
      s || (t.items.delete(d.k), ln(t, d.prev, d.next)), kt(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function Ct(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & cd) !== 0, d = (e & ld) !== 0, h = (e & ud) !== 0;
  if (u) {
    var p = (
      /** @type {Element} */
      t
    );
    s = Ce ? ut(
      /** @type {Comment | Text} */
      /* @__PURE__ */ vt(p)
    ) : p.appendChild(zt());
  }
  Ce && gn();
  var v = null, m = /* @__PURE__ */ $l(() => {
    var k = n();
    return Ts(k) ? k : k == null ? [] : ml(k);
  }), y, w = !0;
  function b() {
    Fv(E, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : Pl(v.effect), C.first = v.effect) : eo(v.effect, () => {
      v = null;
    }));
  }
  var C = kr(() => {
    y = /** @type {V[]} */
    c(m);
    var k = y.length;
    let x = !1;
    if (Ce) {
      var N = bd(s) === Ns;
      N !== (k === 0) && (s = Gi(), ut(s), It(!1), x = !0);
    }
    for (var M = /* @__PURE__ */ new Set(), j = (
      /** @type {Batch} */
      Qe
    ), H = null, T = Vd(), _ = 0; _ < k; _ += 1) {
      Ce && De.nodeType === sr && /** @type {Comment} */
      De.data === vl && (s = /** @type {Comment} */
      De, x = !0, It(!1));
      var S = y[_], z = r(S, _), P = w ? null : a.get(z);
      P ? (d && ao(P.v, S), h ? ao(
        /** @type {Value<number>} */
        P.i,
        _
      ) : P.i = _, T && j.skipped_effects.delete(P.e)) : (P = jv(
        w ? s : null,
        H,
        S,
        z,
        _,
        o,
        e,
        n
      ), w && (P.o = !0, H === null ? l = P : H.next = P, H = P), a.set(z, P)), M.add(z);
    }
    if (k === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: Wt(() => i(s))
        };
      else {
        var A = document.createDocumentFragment(), D = zt();
        A.append(D), v = {
          fragment: A,
          effect: Wt(() => i(D))
        };
      }
    if (Ce && k > 0 && ut(Gi()), !w)
      if (T) {
        for (const [B, X] of a)
          M.has(B) || j.skipped_effects.add(X.e);
        j.oncommit(b), j.ondiscard(() => {
        });
      } else
        b();
    x && It(!0), c(m);
  }), E = { effect: C, items: a, first: l };
  w = !1, Ce && (s = De);
}
function Fv(t, e, n, r, o) {
  var i = (r & rv) !== 0, s = e.length, a = t.items, l = t.first, u, d = null, h, p = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var C = d ? d.next : l;
      ln(t, d, w), ln(t, w, C), ia(w, C, n), d = w, p = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & Xt) !== 0 && (Pl(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (p.length < v.length) {
          var E = v[0], k;
          d = E.prev;
          var x = p[0], N = p[p.length - 1];
          for (k = 0; k < p.length; k += 1)
            ia(p[k], E, n);
          for (k = 0; k < v.length; k += 1)
            u.delete(v[k]);
          ln(t, x.prev, N.next), ln(t, d, x), ln(t, N, E), l = E, d = N, b -= 1, p = [], v = [];
        } else
          u.delete(w), ia(w, l, n), ln(t, w.prev, w.next), ln(t, w, d === null ? t.first : d.next), ln(t, d, w), d = w;
        continue;
      }
      for (p = [], v = []; l !== null && l.k !== y; )
        (l.e.f & Xt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    p.push(w), d = w, l = w.next;
  }
  let M = a.size > s;
  if (l !== null || u !== void 0) {
    for (var j = u === void 0 ? [] : ml(u); l !== null; )
      (l.e.f & Xt) === 0 && j.push(l), l = l.next;
    var H = j.length;
    if (M = a.size - H > s, H > 0) {
      var T = (r & cd) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < H; b += 1)
          j[b].a?.measure();
        for (b = 0; b < H; b += 1)
          j[b].a?.fix();
      }
      Kv(t, j, T);
    }
  }
  if (M)
    for (const _ of a.values())
      _.o || (ln(t, d, _), d = _);
  t.effect.last = d && d.e, i && Cr(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function jv(t, e, n, r, o, i, s, a) {
  var l = (s & ld) !== 0, u = (s & ov) === 0, d = l ? u ? /* @__PURE__ */ Ad(n, !1, !1) : Jn(n) : n, h = (s & ud) === 0 ? o : Jn(o), p = {
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
      v.append(t = zt());
    }
    return p.e = Wt(() => i(
      /** @type {Node} */
      t,
      d,
      h,
      a
    )), e !== null && (e.next = p), p;
  } finally {
  }
}
function ia(t, e, n) {
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
      /* @__PURE__ */ Ut(i)
    );
    o.before(i), i = s;
  }
}
function ln(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function Od(t, e, n, r) {
  const o = wo() ? oi : $l;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = Qe, s = (
    /** @type {Effect} */
    Re
  ), a = Zv();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Wv(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & Yn) === 0 && io(d, s);
      }
      i?.deactivate(), Qi();
    }).catch((u) => {
      io(u, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Qi();
    }
  }) : l();
}
function Zv() {
  var t = Re, e = We, n = nt, r = Qe;
  return function(o = !0) {
    nn(t), Bt(e), oo(n), o && r?.activate();
  };
}
function Qi() {
  nn(null), Bt(null), oo(null);
}
// @__NO_SIDE_EFFECTS__
function oi(t) {
  var e = St | Ft, n = We !== null && (We.f & St) !== 0 ? (
    /** @type {Derived} */
    We
  ) : null;
  return Re !== null && (Re.f |= Kr), {
    ctx: nt,
    deps: null,
    effects: null,
    equals: xd,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      $t
    ),
    wv: 0,
    parent: n ?? Re,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Wv(t, e) {
  let n = (
    /** @type {Effect | null} */
    Re
  );
  n === null && yv();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Jn(
    /** @type {V} */
    $t
  ), s = !We, a = /* @__PURE__ */ new Map();
  return e1(() => {
    var l = md();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === Qe && u.committed && u.deactivate(), Qi();
      });
    } catch (p) {
      l.reject(p), Qi();
    }
    var u = (
      /** @type {Batch} */
      Qe
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(Qr), a.delete(u), a.set(u, l);
    }
    const h = (p, v = void 0) => {
      if (u.activate(), v)
        v !== Qr && (i.f |= pr, ao(i, v));
      else {
        (i.f & pr) !== 0 && (i.f ^= pr), ao(i, p);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(Qr);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), Bs(() => {
    for (const l of a.values())
      l.reject(Qr);
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
  const e = /* @__PURE__ */ oi(t);
  return Gd(e), e;
}
// @__NO_SIDE_EFFECTS__
function $l(t) {
  const e = /* @__PURE__ */ oi(t);
  return e.equals = kd, e;
}
function Nd(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      kt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function qv(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & St) === 0)
      return (e.f & Yn) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Sl(t) {
  var e, n = Re;
  nn(qv(t));
  try {
    t.f &= ~Bo, Nd(t), e = th(t);
  } finally {
    nn(n);
  }
  return e;
}
function Td(t) {
  var e = Sl(t);
  if (t.equals(e) || (Qe?.is_fork || (t.v = e), t.wv = Jd()), !Wr)
    if (en !== null)
      (Ro() || Qe?.is_fork) && en.set(t, e);
    else {
      var n = (t.f & fn) === 0 ? ir : Nt;
      Tt(t, n);
    }
}
let Pa = /* @__PURE__ */ new Set();
const fr = /* @__PURE__ */ new Map();
let Dd = !1;
function Jn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: xd,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(t, e) {
  const n = Jn(t);
  return Gd(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ad(t, e = !1, n = !0) {
  const r = Jn(t);
  return e || (r.equals = kd), yo && n && nt !== null && nt.l !== null && (nt.l.s ??= []).push(r), r;
}
function K(t, e, n = !1) {
  We !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!En || (We.f & Pu) !== 0) && wo() && (We.f & (St | rr | bl | Pu)) !== 0 && !Un?.includes(t) && Ev();
  let r = n ? ht(e) : e;
  return ao(t, r);
}
function ao(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Wr ? fr.set(t, e) : fr.set(t, n), t.v = e;
    var r = dn.ensure();
    r.capture(t, n), (t.f & St) !== 0 && ((t.f & Ft) !== 0 && Sl(
      /** @type {Derived} */
      t
    ), Tt(t, (t.f & fn) !== 0 ? Nt : ir)), t.wv = Jd(), Ld(t, Ft), wo() && Re !== null && (Re.f & Nt) !== 0 && (Re.f & (or | xr)) === 0 && (Qt === null ? n1([t]) : Qt.push(t)), !r.is_fork && Pa.size > 0 && !Dd && Xv();
  }
  return e;
}
function Xv() {
  Dd = !1;
  var t = gr;
  Ji(!0);
  const e = Array.from(Pa);
  try {
    for (const n of e)
      (n.f & Nt) !== 0 && Tt(n, ir), ii(n) && Fo(n);
  } finally {
    Ji(t);
  }
  Pa.clear();
}
function Nu(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return K(t, n), r;
}
function Sn(t) {
  K(t, t.v + 1);
}
function Ld(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = wo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Re)) {
        var l = (a & Ft) === 0;
        if (l && Tt(s, e), (a & St) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          en?.delete(u), (a & Bo) === 0 && (a & fn && (s.f |= Bo), Ld(u, ir));
        } else l && ((a & rr) !== 0 && Kn !== null && Kn.add(
          /** @type {Effect} */
          s
        ), zr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function ht(t) {
  if (typeof t != "object" || t === null || Nn in t)
    return t;
  const e = Ds(t);
  if (e !== vd && e !== fv)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ts(t), o = /* @__PURE__ */ me(0), i = Gn, s = (a) => {
    if (Gn === i)
      return a();
    var l = We, u = Gn;
    Bt(null), Lu(i);
    var d = a();
    return Bt(l), Lu(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Sv();
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
            const d = s(() => /* @__PURE__ */ me($t));
            n.set(l, d), Sn(o);
          }
        } else
          K(u, $t), Sn(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Nn)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Xn(a, l)?.writable) && (d = s(() => {
          var v = ht(h ? a[l] : $t), m = /* @__PURE__ */ me(v);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === $t ? void 0 : p;
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
          if (h !== void 0 && p !== $t)
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
        if (l === Nn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== $t || Reflect.has(a, l);
        if (u !== void 0 || Re !== null && (!d || Xn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? ht(a[l]) : $t, v = /* @__PURE__ */ me(p);
            return v;
          }), n.set(l, u));
          var h = c(u);
          if (h === $t)
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
            m !== void 0 ? K(m, $t) : v in a && (m = s(() => /* @__PURE__ */ me($t)), n.set(v + "", m));
          }
        if (h === void 0)
          (!p || Xn(a, l)?.writable) && (h = s(() => /* @__PURE__ */ me(void 0)), K(h, ht(u)), n.set(l, h));
        else {
          p = h.v !== $t;
          var y = s(() => ht(u));
          K(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= b.v && K(b, C + 1);
          }
          Sn(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var p = n.get(h);
          return p === void 0 || p.v !== $t;
        });
        for (var [u, d] of n)
          d.v !== $t && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        _v();
      }
    }
  );
}
function Tu(t) {
  try {
    if (t !== null && typeof t == "object" && Nn in t)
      return t[Nn];
  } catch {
  }
  return t;
}
function Yv(t, e) {
  return Object.is(Tu(t), Tu(e));
}
var Vt, Id, Md, zd;
function Oa() {
  if (Vt === void 0) {
    Vt = window, Id = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Md = Xn(e, "firstChild").get, zd = Xn(e, "nextSibling").get, Eu(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Eu(n) && (n.__t = void 0);
  }
}
function zt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function vt(t) {
  return Md.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ut(t) {
  return zd.call(t);
}
function Z(t, e) {
  if (!Ce)
    return /* @__PURE__ */ vt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(De)
  );
  if (n === null)
    n = De.appendChild(zt());
  else if (e && n.nodeType !== Ms) {
    var r = zt();
    return n?.before(r), ut(r), r;
  }
  return ut(n), n;
}
function Q(t, e = !1) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ vt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ut(n) : n;
  }
  if (e && De?.nodeType !== Ms) {
    var r = zt();
    return De?.before(r), ut(r), r;
  }
  return De;
}
function V(t, e = 1, n = !1) {
  let r = Ce ? De : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== Ms) {
    var i = zt();
    return r === null ? o?.after(i) : r.before(i), ut(i), i;
  }
  return ut(r), /** @type {TemplateNode} */
  r;
}
function _l(t) {
  t.textContent = "";
}
function Vd() {
  return !1;
}
function Uv(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Cr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function Gv(t) {
  Ce && /* @__PURE__ */ vt(t) !== null && _l(t);
}
let Du = !1;
function Hd() {
  Du || (Du = !0, document.addEventListener(
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
function Hs(t) {
  var e = We, n = Re;
  Bt(null), nn(null);
  try {
    return t();
  } finally {
    Bt(e), nn(n);
  }
}
function Bd(t, e, n, r = n) {
  t.addEventListener(e, () => Hs(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), Hd();
}
function Rd(t) {
  Re === null && (We === null && xv(), bv()), Wr && wv();
}
function Qv(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function rn(t, e, n) {
  var r = Re;
  r !== null && (r.f & Xt) !== 0 && (t |= Xt);
  var o = {
    ctx: nt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Ft | fn,
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
      Fo(o), o.f |= Is;
    } catch (a) {
      throw kt(o), a;
    }
  else e !== null && zr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Kr) === 0 && (i = i.first, (t & rr) !== 0 && (t & Qn) !== 0 && i !== null && (i.f |= Qn)), i !== null && (i.parent = r, r !== null && Qv(i, r), We !== null && (We.f & St) !== 0 && (t & xr) === 0)) {
    var s = (
      /** @type {Derived} */
      We
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Ro() {
  return We !== null && !En;
}
function Bs(t) {
  const e = rn(As, null, !1);
  return Tt(e, Nt), e.teardown = t, e;
}
function Ie(t) {
  Rd();
  var e = (
    /** @type {Effect} */
    Re.f
  ), n = !We && (e & or) !== 0 && (e & Is) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      nt
    );
    (r.e ??= []).push(t);
  } else
    return Kd(t);
}
function Kd(t) {
  return rn(yl | wd, t, !1);
}
function Ht(t) {
  return Rd(), rn(As | wd, t, !0);
}
function jr(t) {
  dn.ensure();
  const e = rn(xr | Kr, t, !0);
  return () => {
    kt(e);
  };
}
function Jv(t) {
  dn.ensure();
  const e = rn(xr | Kr, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? eo(e, () => {
      kt(e), r(void 0);
    }) : (kt(e), r(void 0));
  });
}
function bo(t) {
  return rn(yl, t, !1);
}
function e1(t) {
  return rn(bl | Kr, t, !0);
}
function Zr(t, e = 0) {
  return rn(As | e, t, !0);
}
function Pe(t, e = [], n = [], r = []) {
  Od(r, e, n, (o) => {
    rn(As, () => t(...o.map(c)), !0);
  });
}
function kr(t, e = 0) {
  var n = rn(rr | e, t, !0);
  return n;
}
function Fd(t, e = 0) {
  var n = rn(yd | e, t, !0);
  return n;
}
function Wt(t) {
  return rn(or | Kr, t, !0);
}
function jd(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Wr, r = We;
    Au(!0), Bt(null);
    try {
      e.call(null);
    } finally {
      Au(n), Bt(r);
    }
  }
}
function Zd(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Hs(() => {
      o.abort(Qr);
    });
    var r = n.next;
    (n.f & xr) !== 0 ? n.parent = null : kt(n, e), n = r;
  }
}
function t1(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & or) === 0 && kt(e), e = n;
  }
}
function kt(t, e = !0) {
  var n = !1;
  (e || (t.f & wl) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Wd(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Zd(t, e && !n), es(t, 0), Tt(t, Yn);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  jd(t);
  var o = t.parent;
  o !== null && o.first !== null && qd(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Wd(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(t)
    );
    t.remove(), t = n;
  }
}
function qd(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function eo(t, e, n = !0) {
  var r = [];
  El(t, r, !0), Xd(r, () => {
    n && kt(t), e && e();
  });
}
function Xd(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function El(t, e, n) {
  if ((t.f & Xt) === 0) {
    if (t.f ^= Xt, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & Qn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & or) !== 0 && (t.f & rr) !== 0;
      El(r, e, i ? n : !1), r = o;
    }
  }
}
function Pl(t) {
  Yd(t, !0);
}
function Yd(t, e) {
  if ((t.f & Xt) !== 0) {
    t.f ^= Xt, (t.f & Nt) === 0 && (Tt(t, Ft), zr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & Qn) !== 0 || (n.f & or) !== 0;
      Yd(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function Ud(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n)
    );
    e.append(n), n = o;
  }
}
let gr = !1;
function Ji(t) {
  gr = t;
}
let Wr = !1;
function Au(t) {
  Wr = t;
}
let We = null, En = !1;
function Bt(t) {
  We = t;
}
let Re = null;
function nn(t) {
  Re = t;
}
let Un = null;
function Gd(t) {
  We !== null && (Un === null ? Un = [t] : Un.push(t));
}
let Lt = null, Zt = 0, Qt = null;
function n1(t) {
  Qt = t;
}
let Qd = 1, Ko = 0, Gn = Ko;
function Lu(t) {
  Gn = t;
}
function Jd() {
  return ++Qd;
}
function ii(t) {
  var e = t.f;
  if ((e & Ft) !== 0)
    return !0;
  if (e & St && (t.f &= -32769), (e & ir) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (ii(
          /** @type {Derived} */
          i
        ) && Td(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & fn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    en === null && Tt(t, Nt);
  }
  return !1;
}
function eh(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !Un?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & St) !== 0 ? eh(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? Tt(i, Ft) : (i.f & Nt) !== 0 && Tt(i, ir), zr(
        /** @type {Effect} */
        i
      ));
    }
}
function th(t) {
  var e = Lt, n = Zt, r = Qt, o = We, i = Un, s = nt, a = En, l = Gn, u = t.f;
  Lt = /** @type {null | Value[]} */
  null, Zt = 0, Qt = null, We = (u & (or | xr)) === 0 ? t : null, Un = null, oo(t.ctx), En = !1, Gn = ++Ko, t.ac !== null && (Hs(() => {
    t.ac.abort(Qr);
  }), t.ac = null);
  try {
    t.f |= _a;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), p = t.deps;
    if (Lt !== null) {
      var v;
      if (es(t, Zt), p !== null && Zt > 0)
        for (p.length = Zt + Lt.length, v = 0; v < Lt.length; v++)
          p[Zt + v] = Lt[v];
      else
        t.deps = p = Lt;
      if (gr && Ro() && (t.f & fn) !== 0)
        for (v = Zt; v < p.length; v++)
          (p[v].reactions ??= []).push(t);
    } else p !== null && Zt < p.length && (es(t, Zt), p.length = Zt);
    if (wo() && Qt !== null && !En && p !== null && (t.f & (St | ir | Ft)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Qt.length; v++)
        eh(
          Qt[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (Ko++, Qt !== null && (r === null ? r = Qt : r.push(.../** @type {Source[]} */
    Qt))), (t.f & pr) !== 0 && (t.f ^= pr), h;
  } catch (m) {
    return Sd(m);
  } finally {
    t.f ^= _a, Lt = e, Zt = n, Qt = r, We = o, Un = i, oo(s), En = a, Gn = l;
  }
}
function r1(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = pv.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & St) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Lt === null || !Lt.includes(e)) && (Tt(e, ir), (e.f & fn) !== 0 && (e.f ^= fn, e.f &= -32769), Nd(
    /** @type {Derived} **/
    e
  ), es(
    /** @type {Derived} **/
    e,
    0
  ));
}
function es(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      r1(t, n[r]);
}
function Fo(t) {
  var e = t.f;
  if ((e & Yn) === 0) {
    Tt(t, Nt);
    var n = Re, r = gr;
    Re = t, gr = !0;
    try {
      (e & (rr | yd)) !== 0 ? t1(t) : Zd(t), jd(t);
      var o = th(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Qd;
      var i;
      hv && Tv && (t.f & Ft) !== 0 && t.deps;
    } finally {
      gr = r, Re = n;
    }
  }
}
async function nh() {
  await Promise.resolve(), f();
}
function c(t) {
  var e = t.f, n = (e & St) !== 0;
  if (We !== null && !En) {
    var r = Re !== null && (Re.f & Yn) !== 0;
    if (!r && !Un?.includes(t)) {
      var o = We.deps;
      if ((We.f & _a) !== 0)
        t.rv < Ko && (t.rv = Ko, Lt === null && o !== null && o[Zt] === t ? Zt++ : Lt === null ? Lt = [t] : Lt.includes(t) || Lt.push(t));
      else {
        (We.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [We] : i.includes(We) || i.push(We);
      }
    }
  }
  if (Wr) {
    if (fr.has(t))
      return fr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Nt) === 0 && s.reactions !== null || oh(s)) && (a = Sl(s)), fr.set(s, a), a;
    }
  } else n && (!en?.has(t) || Qe?.is_fork && !Ro()) && (s = /** @type {Derived} */
  t, ii(s) && Td(s), gr && Ro() && (s.f & fn) === 0 && rh(s));
  if (en?.has(t))
    return en.get(t);
  if ((t.f & pr) !== 0)
    throw t.v;
  return t.v;
}
function rh(t) {
  if (t.deps !== null) {
    t.f ^= fn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & St) !== 0 && (e.f & fn) === 0 && rh(
        /** @type {Derived} */
        e
      );
  }
}
function oh(t) {
  if (t.v === $t) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (fr.has(e) || (e.f & St) !== 0 && oh(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function st(t) {
  var e = En;
  try {
    return En = !0, t();
  } finally {
    En = e;
  }
}
const o1 = -7169;
function Tt(t, e) {
  t.f = t.f & o1 | e;
}
function i1(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function Ol(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Nn in t)
      Na(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Nn in n && Na(n);
      }
  }
}
function Na(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Na(t[r], e);
      } catch {
      }
    const n = Ds(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = gd(n);
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
const ih = /* @__PURE__ */ new Set(), Ta = /* @__PURE__ */ new Set();
function Nl(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || No.call(e, i), !i.cancelBubble)
      return Hs(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Cr(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function pt(t, e, n, r = {}) {
  var o = Nl(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function ts(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = Nl(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Bs(() => {
    e.removeEventListener(t, s, i);
  });
}
function qr(t) {
  for (var e = 0; e < t.length; e++)
    ih.add(t[e]);
  for (var n of Ta)
    n(t);
}
let Iu = null;
function No(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  Iu = t;
  var s = 0, a = Iu === t && t.__root;
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
    Ui(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = We, h = Re;
    Bt(null), nn(null);
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
      t.__root = e, delete t.currentTarget, Bt(d), nn(h);
    }
  }
}
function Tl(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Kt(t, e) {
  var n = (
    /** @type {Effect} */
    Re
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ee(t, e) {
  var n = (e & hd) !== 0, r = (e & uv) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (Ce)
      return Kt(De, null), De;
    o === void 0 && (o = Tl(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ vt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Id ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Kt(a, l);
    } else
      Kt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function s1(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & hd) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Ce)
      return Kt(De, null), De;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Tl(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ vt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ vt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ vt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ vt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Kt(d, h);
    } else
      Kt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function xe(t, e) {
  return /* @__PURE__ */ s1(t, e, "svg");
}
function Ae(t = "") {
  if (!Ce) {
    var e = zt(t + "");
    return Kt(e, e), e;
  }
  var n = De;
  return n.nodeType !== Ms && (n.before(n = zt()), ut(n)), Kt(n, n), n;
}
function ce() {
  if (Ce)
    return Kt(De, null), De;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = zt();
  return t.append(e, n), Kt(e, n), t;
}
function O(t, e) {
  if (Ce) {
    var n = (
      /** @type {Effect} */
      Re
    );
    ((n.f & Is) === 0 || n.nodes_end === null) && (n.nodes_end = De), gn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function si() {
  if (Ce && De && De.nodeType === sr && De.textContent?.startsWith("$")) {
    const t = De.textContent.substring(1);
    return gn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function a1(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const l1 = [
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
function u1(t) {
  return l1.includes(t);
}
const c1 = {
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
function d1(t) {
  return t = t.toLowerCase(), c1[t] ?? t;
}
const h1 = ["touchstart", "touchmove"];
function p1(t) {
  return h1.includes(t);
}
const f1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function g1(t) {
  return f1.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function Je(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Dl(t, e) {
  return sh(t, e);
}
function v1(t, e) {
  Oa(), e.intro = e.intro ?? !1;
  const n = e.target, r = Ce, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(n)
    ); i && (i.nodeType !== sr || /** @type {Comment} */
    i.data !== pd); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(i);
    if (!i)
      throw Ir;
    It(!0), ut(
      /** @type {Comment} */
      i
    );
    const s = sh(t, { ...e, anchor: i });
    return It(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Ir && console.warn("Failed to hydrate: ", s), e.recover === !1 && kv(), Oa(), _l(n), It(!1), Dl(t, e);
  } finally {
    It(r), ut(o);
  }
}
const Yr = /* @__PURE__ */ new Map();
function sh(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Oa();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var p = 0; p < h.length; p++) {
      var v = h[p];
      if (!a.has(v)) {
        a.add(v);
        var m = p1(v);
        e.addEventListener(v, No, { passive: m });
        var y = Yr.get(v);
        y === void 0 ? (document.addEventListener(v, No, { passive: m }), Yr.set(v, 1)) : Yr.set(v, y + 1);
      }
    }
  };
  l(ml(ih)), Ta.add(l);
  var u = void 0, d = Jv(() => {
    var h = n ?? e.appendChild(zt());
    return Bv(
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
            nt
          );
          v.c = i;
        }
        if (o && (r.$$events = o), Ce && Kt(
          /** @type {TemplateNode} */
          p,
          null
        ), u = t(p, r) || {}, Ce && (Re.nodes_end = De, De === null || De.nodeType !== sr || /** @type {Comment} */
        De.data !== vl))
          throw ri(), Ir;
        i && le();
      }
    ), () => {
      for (var p of a) {
        e.removeEventListener(p, No);
        var v = (
          /** @type {number} */
          Yr.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, No), Yr.delete(p)) : Yr.set(p, v);
      }
      Ta.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Da.set(u, d), u;
}
let Da = /* @__PURE__ */ new WeakMap();
function ah(t, e) {
  const n = Da.get(t);
  return n ? (Da.delete(t), n(e)) : Promise.resolve();
}
class ai {
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
        Pl(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === e)
          break;
        const a = this.#n.get(s);
        a && (kt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Ud(s, l), l.append(zt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            kt(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), eo(s, a, !1)) : a();
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
      n.includes(r) || (kt(o.effect), this.#n.delete(r));
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
    ), o = Vd();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      Wt(() => n(this.anchor))
    ), this.#e.set(r, e), o || (Ce && (this.anchor = De), this.#i());
  }
}
function Ee(t, e, ...n) {
  var r = new ai(t);
  kr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Qn);
}
function wn(t) {
  nt === null && Cl(), yo && nt.l !== null ? m1(nt).m.push(t) : Ie(() => {
    const e = st(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function li(t) {
  nt === null && Cl(), wn(() => () => st(t));
}
function m1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function y1() {
  return Symbol(fd);
}
function ie(t, e, n = !1) {
  Ce && gn();
  var r = new ai(t), o = n ? Qn : 0;
  function i(s, a) {
    if (Ce) {
      const u = bd(t) === Ns;
      if (s === u) {
        var l = Gi();
        ut(l), r.anchor = l, It(!1), r.ensure(s, a), It(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  kr(() => {
    var s = !1;
    e((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function w1(t, e, n) {
  Ce && gn();
  var r = new ai(t), o = !wo();
  kr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function b1(t, e) {
  Ce && ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(t)
  ), Zr(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function Rs(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Pe(() => {
    var a = (
      /** @type {Effect} */
      Re
    );
    if (s === (s = e() ?? "")) {
      Ce && gn();
      return;
    }
    if (a.nodes_start !== null && (Wd(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        De.data;
        for (var l = gn(), u = l; l !== null && (l.nodeType !== sr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Ut(l);
        if (l === null)
          throw ri(), Ir;
        Kt(De, u), i = ut(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Tl(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ vt(h)), Kt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ vt(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ vt(h)
          );
      else
        i.before(h);
    }
  });
}
function bt(t, e, n) {
  Ce && gn();
  var r = new ai(t);
  kr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Qn);
}
function lh(t, e, n, r, o, i) {
  let s = Ce;
  Ce && gn();
  var a = null;
  Ce && De.nodeType === mv && (a = /** @type {Element} */
  De, gn());
  var l = (
    /** @type {TemplateNode} */
    Ce ? De : t
  ), u = new ai(l, !1);
  kr(() => {
    const d = e() || null;
    var h = n || d === "svg" ? dv : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = Ce ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), Kt(a, a), r) {
          Ce && g1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            Ce ? /* @__PURE__ */ vt(a) : a.appendChild(zt())
          );
          Ce && (v === null ? It(!1) : ut(v)), r(a, v);
        }
        Re.nodes_end = a, p.before(a);
      }
      Ce && ut(p);
    }), () => {
    };
  }, Qn), Bs(() => {
  }), s && (It(!0), ut(l));
}
function x1(t, e) {
  let n = null, r = Ce;
  var o;
  if (Ce) {
    n = De;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(document.head)
    ); i !== null && (i.nodeType !== sr || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(i);
    if (i === null)
      It(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ut(i)
      );
      i.remove(), ut(s);
    }
  }
  Ce || (o = document.head.appendChild(zt()));
  try {
    kr(() => e(o), wl);
  } finally {
    r && (It(!0), ut(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Ue(t, e) {
  bo(() => {
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
function Ot(t, e, n) {
  bo(() => {
    var r = st(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Zr(() => {
        var s = n();
        Ol(s), o && Cd(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function C1(t, e) {
  var n = void 0, r;
  Fd(() => {
    n !== (n = e()) && (r && (kt(r), r = null), n && (r = Wt(() => {
      bo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function uh(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = uh(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function zo() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = uh(t)) && (r && (r += " "), r += e);
  return r;
}
function ar(t) {
  return typeof t == "object" ? zo(t) : t ?? "";
}
const Mu = [...` 	
\r\f \v\uFEFF`];
function k1(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Mu.includes(r[s - 1])) && (a === r.length || Mu.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function zu(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var o in t) {
    var i = t[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function sa(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function $1(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(sa)), o && l.push(...Object.keys(o).map(sa));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var p = t[h];
        if (a ? p === "/" && t[h - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && t[h + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = h;
          else if (p === ";" || h === y - 1) {
            if (d !== -1) {
              var v = sa(t.substring(u, d).trim());
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
    return r && (n += zu(r)), o && (n += zu(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function jt(t, e, n, r, o, i) {
  var s = t.__className;
  if (Ce || s !== n || s === void 0) {
    var a = k1(n, r, i);
    (!Ce || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function aa(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function _t(t, e, n, r) {
  var o = t.__style;
  if (Ce || o !== e) {
    var i = $1(e, r);
    (!Ce || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (aa(t, n?.[0], r[0]), aa(t, n?.[1], r[1], "important")) : aa(t, n, r));
  return r;
}
function Aa(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ts(e))
      return Ov();
    for (var r of t.options)
      r.selected = e.includes(Vu(r));
    return;
  }
  for (r of t.options) {
    var o = Vu(r);
    if (Yv(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function S1(t) {
  var e = new MutationObserver(() => {
    Aa(t, t.__value);
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
function Vu(t) {
  return "__value" in t ? t.__value : t.value;
}
const dr = Symbol("class"), _n = Symbol("style"), ch = Symbol("is custom element"), dh = Symbol("is html");
function vr(t) {
  if (Ce) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          _e(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          _e(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, Cr(n), Hd();
  }
}
function Vi(t, e) {
  var n = Ks(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function la(t, e) {
  var n = Ks(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function _1(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function _e(t, e, n, r) {
  var o = Ks(t);
  Ce && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[vv] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && hh(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function E1(t, e, n, r, o = !1, i = !1) {
  if (Ce && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || vr(s);
  }
  var l = Ks(t), u = l[ch], d = !l[dh];
  let h = Ce && u;
  h && It(!1);
  var p = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = ar(n.class) : (r || n[dr]) && (n.class = null), n[_n] && (n.style ??= null);
  var y = hh(t);
  for (const N in n) {
    let M = n[N];
    if (v && N === "value" && M == null) {
      t.value = t.__value = "", p[N] = M;
      continue;
    }
    if (N === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      jt(t, w, M, r, e?.[dr], n[dr]), p[N] = M, p[dr] = n[dr];
      continue;
    }
    if (N === "style") {
      _t(t, M, e?.[_n], n[_n]), p[N] = M, p[_n] = n[_n];
      continue;
    }
    var b = p[N];
    if (!(M === b && !(M === void 0 && t.hasAttribute(N)))) {
      p[N] = M;
      var C = N[0] + N[1];
      if (C !== "$$")
        if (C === "on") {
          const j = {}, H = "$$" + N;
          let T = N.slice(2);
          var E = u1(T);
          if (a1(T) && (T = T.slice(0, -7), j.capture = !0), !E && b) {
            if (M != null) continue;
            t.removeEventListener(T, p[H], j), p[H] = null;
          }
          if (M != null)
            if (E)
              t[`__${T}`] = M, qr([T]);
            else {
              let _ = function(S) {
                p[N].call(this, S);
              };
              p[H] = Nl(T, t, _, j);
            }
          else E && (t[`__${T}`] = void 0);
        } else if (N === "style")
          _e(t, N, M);
        else if (N === "autofocus")
          Uv(
            /** @type {HTMLElement} */
            t,
            !!M
          );
        else if (!u && (N === "__value" || N === "value" && M != null))
          t.value = t.__value = M;
        else if (N === "selected" && v)
          _1(
            /** @type {HTMLOptionElement} */
            t,
            M
          );
        else {
          var k = N;
          d || (k = d1(k));
          var x = k === "defaultValue" || k === "defaultChecked";
          if (M == null && !u && !x)
            if (l[N] = null, k === "value" || k === "checked") {
              let j = (
                /** @type {HTMLInputElement} */
                t
              );
              const H = e === void 0;
              if (k === "value") {
                let T = j.defaultValue;
                j.removeAttribute(k), j.defaultValue = T, j.value = j.__value = H ? T : null;
              } else {
                let T = j.defaultChecked;
                j.removeAttribute(k), j.defaultChecked = T, j.checked = H ? T : !1;
              }
            } else
              t.removeAttribute(N);
          else x || y.includes(k) && (u || typeof M != "string") ? (t[k] = M, k in l && (l[k] = $t)) : typeof M != "function" && _e(t, k, M);
        }
    }
  }
  return h && It(!0), p;
}
function Ye(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  Od(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", p = !1;
    if (Fd(() => {
      var m = e(...l.map(c)), y = E1(
        t,
        u,
        m,
        i,
        s,
        a
      );
      p && h && "value" in m && Aa(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || kt(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === fd && (!u || w !== u[b]) && (d[b] && kt(d[b]), d[b] = Wt(() => C1(t, () => w))), y[b] = w;
      }
      u = y;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      bo(() => {
        Aa(
          v,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), S1(v);
      });
    }
    p = !0;
  });
}
function Ks(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [ch]: t.nodeName.includes("-"),
      [dh]: t.namespaceURI === cv
    }
  );
}
var Hu = /* @__PURE__ */ new Map();
function hh(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Hu.get(e);
  if (n) return n;
  Hu.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = gd(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Ds(o);
  }
  return n;
}
function ns(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Bd(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = ua(t) ? ca(i) : i, n(i), Qe !== null && r.add(Qe), await nh(), i !== (i = e())) {
      var s = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = i ?? "", a !== null) {
        var u = t.value.length;
        s === a && a === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Ce && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  st(e) == null && t.value) && (n(ua(t) ? ca(t.value) : t.value), Qe !== null && r.add(Qe)), Zr(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        zi ?? Qe
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
function P1(t, e, n = e) {
  Bd(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  Ce && t.files && n(t.files), Zr(() => {
    t.files = e();
  });
}
class Al {
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
          Al.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var O1 = /* @__PURE__ */ new Al({
  box: "border-box"
});
function Bu(t, e, n) {
  var r = O1.observe(t, () => n(t[e]));
  bo(() => (st(() => n(t[e])), r));
}
function Ru(t, e) {
  return t === e || t?.[Nn] === e;
}
function Et(t = {}, e, n, r) {
  return bo(() => {
    var o, i;
    return Zr(() => {
      o = i, i = [], st(() => {
        t !== n(...i) && (e(t, ...i), o && Ru(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Cr(() => {
        i && Ru(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function Ll(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    nt
  ), n = e.l.u;
  if (!n) return;
  let r = () => Ol(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ oi(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && Ht(() => {
    Ku(e, r), Sa(n.b);
  }), Ie(() => {
    const o = st(() => n.m.map(gv));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ie(() => {
    Ku(e, r), Sa(n.a);
  });
}
function Ku(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let Si = !1;
function N1(t) {
  var e = Si;
  try {
    return Si = !1, [t(), Si];
  } finally {
    Si = e;
  }
}
const T1 = {
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
    T1
  );
}
const D1 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = Re;
      try {
        nn(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          dd
        );
      } finally {
        nn(r);
      }
    }
    return t.special[e](n), Nu(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), Nu(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Fu(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: Jn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Re
      )
    },
    D1
  );
}
const A1 = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (So(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      So(o) && (o = o());
      const i = Xn(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (So(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = Xn(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === Nn || e === xl) return !1;
    for (let n of t.props)
      if (So(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (So(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ve(...t) {
  return new Proxy({ props: t }, A1);
}
function g(t, e, n, r) {
  var o = !yo || (n & sv) !== 0, i = (n & av) !== 0, s = (n & lv) !== 0, a = (
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
    var h = Nn in t || xl in t;
    d = Xn(t, e)?.set ?? (h && e in t ? (E) => t[e] = E : void 0);
  }
  var p, v = !1;
  i ? [p, v] = N1(() => (
    /** @type {V} */
    t[e]
  )) : p = /** @type {V} */
  t[e], p === void 0 && r !== void 0 && (p = u(), d && (o && $v(), d(p)));
  var m;
  if (o ? m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E === void 0 ? u() : (l = !0, E);
  } : m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & dd) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(E, k) {
        return arguments.length > 0 ? ((!o || !k || y || v) && d(k ? m() : E), E) : m();
      }
    );
  }
  var w = !1, b = ((n & iv) !== 0 ? oi : $l)(() => (w = !1, m()));
  i && c(b);
  var C = (
    /** @type {Effect} */
    Re
  );
  return (
    /** @type {() => V} */
    function(E, k) {
      if (arguments.length > 0) {
        const x = k ? c(b) : o && i ? ht(E) : E;
        return K(b, x), w = !0, a !== void 0 && (a = x), E;
      }
      return Wr && w || (C.f & Yn) !== 0 ? b.v : c(b);
    }
  );
}
function L1(t) {
  return new I1(t);
}
class I1 {
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
      var a = /* @__PURE__ */ Ad(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === xl ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return K(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? v1 : Dl)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && f(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Ui(this, i, {
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
      ah(this.#t);
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
let ph;
typeof HTMLElement == "function" && (ph = class extends HTMLElement {
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
      const e = {}, n = M1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Hi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = L1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = jr(() => {
        Zr(() => {
          this.$$r = !0;
          for (const r of Yi(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Hi(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Hi(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return Yi(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Hi(t, e, n, r) {
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
function se(t, e, n, r, o, i) {
  let s = class extends ph {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Yi(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Yi(e).forEach((a) => {
    Ui(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Hi(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Xn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Ui(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var z1 = { value: () => {
} };
function Fs() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Bi(n);
}
function Bi(t) {
  this._ = t;
}
function V1(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Bi.prototype = Fs.prototype = {
  constructor: Bi,
  on: function(t, e) {
    var n = this._, r = V1(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = H1(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = ju(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = ju(n[o], t.name, null);
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
function H1(t, e) {
  for (var n = 0, r = t.length, o; n < r; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function ju(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = z1, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var La = "http://www.w3.org/1999/xhtml";
const Zu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: La,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function js(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Zu.hasOwnProperty(e) ? { space: Zu[e], local: t } : t;
}
function B1(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === La && e.documentElement.namespaceURI === La ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function R1(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function fh(t) {
  var e = js(t);
  return (e.local ? R1 : B1)(e);
}
function K1() {
}
function Il(t) {
  return t == null ? K1 : function() {
    return this.querySelector(t);
  };
}
function F1(t) {
  typeof t != "function" && (t = Il(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Gt(r, this._parents);
}
function j1(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Z1() {
  return [];
}
function gh(t) {
  return t == null ? Z1 : function() {
    return this.querySelectorAll(t);
  };
}
function W1(t) {
  return function() {
    return j1(t.apply(this, arguments));
  };
}
function q1(t) {
  typeof t == "function" ? t = W1(t) : t = gh(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new Gt(r, o);
}
function vh(t) {
  return function() {
    return this.matches(t);
  };
}
function mh(t) {
  return function(e) {
    return e.matches(t);
  };
}
var X1 = Array.prototype.find;
function Y1(t) {
  return function() {
    return X1.call(this.children, t);
  };
}
function U1() {
  return this.firstElementChild;
}
function G1(t) {
  return this.select(t == null ? U1 : Y1(typeof t == "function" ? t : mh(t)));
}
var Q1 = Array.prototype.filter;
function J1() {
  return Array.from(this.children);
}
function em(t) {
  return function() {
    return Q1.call(this.children, t);
  };
}
function tm(t) {
  return this.selectAll(t == null ? J1 : em(typeof t == "function" ? t : mh(t)));
}
function nm(t) {
  typeof t != "function" && (t = vh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new Gt(r, this._parents);
}
function yh(t) {
  return new Array(t.length);
}
function rm() {
  return new Gt(this._enter || this._groups.map(yh), this._parents);
}
function rs(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
rs.prototype = {
  constructor: rs,
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
function om(t) {
  return function() {
    return t;
  };
}
function im(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, u = i.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new rs(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function sm(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, p = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (p[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new rs(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(p[a]) === l && (o[a] = l);
}
function am(t) {
  return t.__data__;
}
function lm(t, e) {
  if (!arguments.length) return Array.from(this, am);
  var n = e ? sm : im, r = this._parents, o = this._groups;
  typeof t != "function" && (t = om(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], p = h.length, v = um(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(p);
    n(d, h, y, w, b, v, e);
    for (var C = 0, E = 0, k, x; C < m; ++C)
      if (k = y[C]) {
        for (C >= E && (E = C + 1); !(x = w[E]) && ++E < m; ) ;
        k._next = x || null;
      }
  }
  return s = new Gt(s, r), s._enter = a, s._exit = l, s;
}
function um(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function cm() {
  return new Gt(this._exit || this._groups.map(yh), this._parents);
}
function dm(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function hm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, p = a[l] = new Array(h), v, m = 0; m < h; ++m)
      (v = u[m] || d[m]) && (p[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Gt(a, this._parents);
}
function pm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function fm(t) {
  t || (t = gm);
  function e(h, p) {
    return h && p ? t(h.__data__, p.__data__) : !h - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(e);
  }
  return new Gt(o, this._parents).order();
}
function gm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function vm() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function mm() {
  return Array.from(this);
}
function ym() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function wm() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function bm() {
  return !this.node();
}
function xm(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function Cm(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function km(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function $m(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Sm(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function _m(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Em(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Pm(t, e) {
  var n = js(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? km : Cm : typeof e == "function" ? n.local ? Em : _m : n.local ? Sm : $m)(n, e));
}
function wh(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Om(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Nm(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Tm(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Dm(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Om : typeof e == "function" ? Tm : Nm)(t, e, n ?? "")) : lo(this.node(), t);
}
function lo(t, e) {
  return t.style.getPropertyValue(e) || wh(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Am(t) {
  return function() {
    delete this[t];
  };
}
function Lm(t, e) {
  return function() {
    this[t] = e;
  };
}
function Im(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Mm(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Am : typeof e == "function" ? Im : Lm)(t, e)) : this.node()[t];
}
function bh(t) {
  return t.trim().split(/^|\s+/);
}
function Ml(t) {
  return t.classList || new xh(t);
}
function xh(t) {
  this._node = t, this._names = bh(t.getAttribute("class") || "");
}
xh.prototype = {
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
function Ch(t, e) {
  for (var n = Ml(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function kh(t, e) {
  for (var n = Ml(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function zm(t) {
  return function() {
    Ch(this, t);
  };
}
function Vm(t) {
  return function() {
    kh(this, t);
  };
}
function Hm(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ch : kh)(this, t);
  };
}
function Bm(t, e) {
  var n = bh(t + "");
  if (arguments.length < 2) {
    for (var r = Ml(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Hm : e ? zm : Vm)(n, e));
}
function Rm() {
  this.textContent = "";
}
function Km(t) {
  return function() {
    this.textContent = t;
  };
}
function Fm(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function jm(t) {
  return arguments.length ? this.each(t == null ? Rm : (typeof t == "function" ? Fm : Km)(t)) : this.node().textContent;
}
function Zm() {
  this.innerHTML = "";
}
function Wm(t) {
  return function() {
    this.innerHTML = t;
  };
}
function qm(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Xm(t) {
  return arguments.length ? this.each(t == null ? Zm : (typeof t == "function" ? qm : Wm)(t)) : this.node().innerHTML;
}
function Ym() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Um() {
  return this.each(Ym);
}
function Gm() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qm() {
  return this.each(Gm);
}
function Jm(t) {
  var e = typeof t == "function" ? t : fh(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function e0() {
  return null;
}
function t0(t, e) {
  var n = typeof t == "function" ? t : fh(t), r = e == null ? e0 : typeof e == "function" ? e : Il(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function n0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function r0() {
  return this.each(n0);
}
function o0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function i0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function s0(t) {
  return this.select(t ? i0 : o0);
}
function a0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function l0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function u0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function c0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function d0(t, e, n) {
  return function() {
    var r = this.__on, o, i = l0(e);
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
function h0(t, e, n) {
  var r = u0(t + ""), o, i = r.length, s;
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
  for (a = e ? d0 : c0, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function $h(t, e, n) {
  var r = wh(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function p0(t, e) {
  return function() {
    return $h(this, t, e);
  };
}
function f0(t, e) {
  return function() {
    return $h(this, t, e.apply(this, arguments));
  };
}
function g0(t, e) {
  return this.each((typeof e == "function" ? f0 : p0)(t, e));
}
function* v0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Sh = [null];
function Gt(t, e) {
  this._groups = t, this._parents = e;
}
function ui() {
  return new Gt([[document.documentElement]], Sh);
}
function m0() {
  return this;
}
Gt.prototype = ui.prototype = {
  constructor: Gt,
  select: F1,
  selectAll: q1,
  selectChild: G1,
  selectChildren: tm,
  filter: nm,
  data: lm,
  enter: rm,
  exit: cm,
  join: dm,
  merge: hm,
  selection: m0,
  order: pm,
  sort: fm,
  call: vm,
  nodes: mm,
  node: ym,
  size: wm,
  empty: bm,
  each: xm,
  attr: Pm,
  style: Dm,
  property: Mm,
  classed: Bm,
  text: jm,
  html: Xm,
  raise: Um,
  lower: Qm,
  append: Jm,
  insert: t0,
  remove: r0,
  clone: s0,
  datum: a0,
  on: h0,
  dispatch: g0,
  [Symbol.iterator]: v0
};
function tn(t) {
  return typeof t == "string" ? new Gt([[document.querySelector(t)]], [document.documentElement]) : new Gt([[t]], Sh);
}
function y0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function un(t, e) {
  if (t = y0(t), e === void 0 && (e = t.currentTarget), e) {
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
const w0 = { passive: !1 }, jo = { capture: !0, passive: !1 };
function da(t) {
  t.stopImmediatePropagation();
}
function to(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function _h(t) {
  var e = t.document.documentElement, n = tn(t).on("dragstart.drag", to, jo);
  "onselectstart" in e ? n.on("selectstart.drag", to, jo) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Eh(t, e) {
  var n = t.document.documentElement, r = tn(t).on("dragstart.drag", null);
  e && (r.on("click.drag", to, jo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const _i = (t) => () => t;
function Ia(t, {
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
Ia.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function b0(t) {
  return !t.ctrlKey && !t.button;
}
function x0() {
  return this.parentNode;
}
function C0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function k0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $0() {
  var t = b0, e = x0, n = C0, r = k0, o = {}, i = Fs("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function p(k) {
    k.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, w0).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(k, x) {
    if (!(d || !t.call(this, k, x))) {
      var N = E(this, e.call(this, k, x), k, x, "mouse");
      N && (tn(k.view).on("mousemove.drag", m, jo).on("mouseup.drag", y, jo), _h(k.view), da(k), u = !1, a = k.clientX, l = k.clientY, N("start", k));
    }
  }
  function m(k) {
    if (to(k), !u) {
      var x = k.clientX - a, N = k.clientY - l;
      u = x * x + N * N > h;
    }
    o.mouse("drag", k);
  }
  function y(k) {
    tn(k.view).on("mousemove.drag mouseup.drag", null), Eh(k.view, u), to(k), o.mouse("end", k);
  }
  function w(k, x) {
    if (t.call(this, k, x)) {
      var N = k.changedTouches, M = e.call(this, k, x), j = N.length, H, T;
      for (H = 0; H < j; ++H)
        (T = E(this, M, k, x, N[H].identifier, N[H])) && (da(k), T("start", k, N[H]));
    }
  }
  function b(k) {
    var x = k.changedTouches, N = x.length, M, j;
    for (M = 0; M < N; ++M)
      (j = o[x[M].identifier]) && (to(k), j("drag", k, x[M]));
  }
  function C(k) {
    var x = k.changedTouches, N = x.length, M, j;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), M = 0; M < N; ++M)
      (j = o[x[M].identifier]) && (da(k), j("end", k, x[M]));
  }
  function E(k, x, N, M, j, H) {
    var T = i.copy(), _ = un(H || N, x), S, z, P;
    if ((P = n.call(k, new Ia("beforestart", {
      sourceEvent: N,
      target: p,
      identifier: j,
      active: s,
      x: _[0],
      y: _[1],
      dx: 0,
      dy: 0,
      dispatch: T
    }), M)) != null)
      return S = P.x - _[0] || 0, z = P.y - _[1] || 0, function A(D, B, X) {
        var U = _, I;
        switch (D) {
          case "start":
            o[j] = A, I = s++;
            break;
          case "end":
            delete o[j], --s;
          // falls through
          case "drag":
            _ = un(X || B, x), I = s;
            break;
        }
        T.call(
          D,
          k,
          new Ia(D, {
            sourceEvent: B,
            subject: P,
            target: p,
            identifier: j,
            active: I,
            x: _[0] + S,
            y: _[1] + z,
            dx: _[0] - U[0],
            dy: _[1] - U[1],
            dispatch: T
          }),
          M
        );
      };
  }
  return p.filter = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : _i(!!k), p) : t;
  }, p.container = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : _i(k), p) : e;
  }, p.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : _i(k), p) : n;
  }, p.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : _i(!!k), p) : r;
  }, p.on = function() {
    var k = i.on.apply(i, arguments);
    return k === i ? p : k;
  }, p.clickDistance = function(k) {
    return arguments.length ? (h = (k = +k) * k, p) : Math.sqrt(h);
  }, p;
}
function zl(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Ph(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function ci() {
}
var Zo = 0.7, os = 1 / Zo, no = "\\s*([+-]?\\d+)\\s*", Wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", S0 = /^#([0-9a-f]{3,8})$/, _0 = new RegExp(`^rgb\\(${no},${no},${no}\\)$`), E0 = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), P0 = new RegExp(`^rgba\\(${no},${no},${no},${Wo}\\)$`), O0 = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${Wo}\\)$`), N0 = new RegExp(`^hsl\\(${Wo},${Tn},${Tn}\\)$`), T0 = new RegExp(`^hsla\\(${Wo},${Tn},${Tn},${Wo}\\)$`), Wu = {
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
zl(ci, Vr, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: qu,
  // Deprecated! Use color.formatHex.
  formatHex: qu,
  formatHex8: D0,
  formatHsl: A0,
  formatRgb: Xu,
  toString: Xu
});
function qu() {
  return this.rgb().formatHex();
}
function D0() {
  return this.rgb().formatHex8();
}
function A0() {
  return Oh(this).formatHsl();
}
function Xu() {
  return this.rgb().formatRgb();
}
function Vr(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = S0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Yu(e) : n === 3 ? new Rt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ei(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ei(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = _0.exec(t)) ? new Rt(e[1], e[2], e[3], 1) : (e = E0.exec(t)) ? new Rt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = P0.exec(t)) ? Ei(e[1], e[2], e[3], e[4]) : (e = O0.exec(t)) ? Ei(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = N0.exec(t)) ? Qu(e[1], e[2] / 100, e[3] / 100, 1) : (e = T0.exec(t)) ? Qu(e[1], e[2] / 100, e[3] / 100, e[4]) : Wu.hasOwnProperty(t) ? Yu(Wu[t]) : t === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function Yu(t) {
  return new Rt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ei(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Rt(t, e, n, r);
}
function L0(t) {
  return t instanceof ci || (t = Vr(t)), t ? (t = t.rgb(), new Rt(t.r, t.g, t.b, t.opacity)) : new Rt();
}
function Ma(t, e, n, r) {
  return arguments.length === 1 ? L0(t) : new Rt(t, e, n, r ?? 1);
}
function Rt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
zl(Rt, Ma, Ph(ci, {
  brighter(t) {
    return t = t == null ? os : Math.pow(os, t), new Rt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zo : Math.pow(Zo, t), new Rt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rt(Ar(this.r), Ar(this.g), Ar(this.b), is(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Uu,
  // Deprecated! Use color.formatHex.
  formatHex: Uu,
  formatHex8: I0,
  formatRgb: Gu,
  toString: Gu
}));
function Uu() {
  return `#${Or(this.r)}${Or(this.g)}${Or(this.b)}`;
}
function I0() {
  return `#${Or(this.r)}${Or(this.g)}${Or(this.b)}${Or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gu() {
  const t = is(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ar(this.r)}, ${Ar(this.g)}, ${Ar(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function is(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ar(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Or(t) {
  return t = Ar(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Qu(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new cn(t, e, n, r);
}
function Oh(t) {
  if (t instanceof cn) return new cn(t.h, t.s, t.l, t.opacity);
  if (t instanceof ci || (t = Vr(t)), !t) return new cn();
  if (t instanceof cn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new cn(s, a, l, t.opacity);
}
function M0(t, e, n, r) {
  return arguments.length === 1 ? Oh(t) : new cn(t, e, n, r ?? 1);
}
function cn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
zl(cn, M0, Ph(ci, {
  brighter(t) {
    return t = t == null ? os : Math.pow(os, t), new cn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zo : Math.pow(Zo, t), new cn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new Rt(
      ha(t >= 240 ? t - 240 : t + 120, o, r),
      ha(t, o, r),
      ha(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new cn(Ju(this.h), Pi(this.s), Pi(this.l), is(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = is(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ju(this.h)}, ${Pi(this.s) * 100}%, ${Pi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ju(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Pi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ha(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Vl = (t) => () => t;
function z0(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function V0(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function H0(t) {
  return (t = +t) == 1 ? Nh : function(e, n) {
    return n - e ? V0(e, n, t) : Vl(isNaN(e) ? n : e);
  };
}
function Nh(t, e) {
  var n = e - t;
  return n ? z0(t, n) : Vl(isNaN(t) ? e : t);
}
const ss = function t(e) {
  var n = H0(e);
  function r(o, i) {
    var s = n((o = Ma(o)).r, (i = Ma(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Nh(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function B0(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - i) + e[o] * i;
    return r;
  };
}
function R0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function K0(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Vo(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function F0(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function $n(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function j0(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = Vo(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var za = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pa = new RegExp(za.source, "g");
function Z0(t) {
  return function() {
    return t;
  };
}
function W0(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Th(t, e) {
  var n = za.lastIndex = pa.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = za.exec(t)) && (o = pa.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: $n(r, o) })), n = pa.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? W0(l[0].x) : Z0(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function Vo(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Vl(e) : (n === "number" ? $n : n === "string" ? (r = Vr(e)) ? (e = r, ss) : Th : e instanceof Vr ? ss : e instanceof Date ? F0 : R0(e) ? B0 : Array.isArray(e) ? K0 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? j0 : $n)(t, e);
}
var ec = 180 / Math.PI, Dh = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ah(t, e, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * ec,
    skewX: Math.atan(l) * ec,
    scaleX: s,
    scaleY: a
  };
}
var Oi;
function q0(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Dh : Ah(e.a, e.b, e.c, e.d, e.e, e.f);
}
function X0(t) {
  return t == null || (Oi || (Oi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Oi.setAttribute("transform", t), !(t = Oi.transform.baseVal.consolidate())) ? Dh : (t = t.matrix, Ah(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Lh(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: $n(u, h) }, { i: y - 2, x: $n(d, p) });
    } else (h || p) && v.push("translate(" + h + e + p + n);
  }
  function s(u, d, h, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: $n(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, p) {
    u !== d ? p.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: $n(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: $n(u, h) }, { i: y - 2, x: $n(d, p) });
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
var Y0 = Lh(q0, "px, ", "px)", "deg)"), U0 = Lh(X0, ", ", ")", ")"), G0 = 1e-12;
function tc(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Q0(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function J0(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Ri = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], p = s[2], v = d - a, m = h - l, y = v * v + m * m, w, b;
    if (y < G0)
      b = Math.log(p / u) / e, w = function(M) {
        return [
          a + M * v,
          l + M * m,
          u * Math.exp(e * M * b)
        ];
      };
    else {
      var C = Math.sqrt(y), E = (p * p - u * u + r * y) / (2 * u * n * C), k = (p * p - u * u - r * y) / (2 * p * n * C), x = Math.log(Math.sqrt(E * E + 1) - E), N = Math.log(Math.sqrt(k * k + 1) - k);
      b = (N - x) / e, w = function(M) {
        var j = M * b, H = tc(x), T = u / (n * C) * (H * J0(e * j + x) - Q0(x));
        return [
          a + T * v,
          l + T * m,
          u * H / tc(e * j + x)
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
var uo = 0, To = 0, _o = 0, Ih = 1e3, as, Do, ls = 0, Hr = 0, Zs = 0, qo = typeof performance == "object" && performance.now ? performance : Date, Mh = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Hl() {
  return Hr || (Mh(ey), Hr = qo.now() + Zs);
}
function ey() {
  Hr = 0;
}
function us() {
  this._call = this._time = this._next = null;
}
us.prototype = zh.prototype = {
  constructor: us,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Hl() : +n) + (e == null ? 0 : +e), !this._next && Do !== this && (Do ? Do._next = this : as = this, Do = this), this._call = t, this._time = n, Va();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Va());
  }
};
function zh(t, e, n) {
  var r = new us();
  return r.restart(t, e, n), r;
}
function ty() {
  Hl(), ++uo;
  for (var t = as, e; t; )
    (e = Hr - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --uo;
}
function nc() {
  Hr = (ls = qo.now()) + Zs, uo = To = 0;
  try {
    ty();
  } finally {
    uo = 0, ry(), Hr = 0;
  }
}
function ny() {
  var t = qo.now(), e = t - ls;
  e > Ih && (Zs -= e, ls = t);
}
function ry() {
  for (var t, e = as, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : as = n);
  Do = t, Va(r);
}
function Va(t) {
  if (!uo) {
    To && (To = clearTimeout(To));
    var e = t - Hr;
    e > 24 ? (t < 1 / 0 && (To = setTimeout(nc, t - qo.now() - Zs)), _o && (_o = clearInterval(_o))) : (_o || (ls = qo.now(), _o = setInterval(ny, Ih)), uo = 1, Mh(nc));
  }
}
function rc(t, e, n) {
  var r = new us();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var oy = Fs("start", "end", "cancel", "interrupt"), iy = [], Vh = 0, oc = 1, Ha = 2, Ki = 3, ic = 4, Ba = 5, Fi = 6;
function Ws(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  sy(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: oy,
    tween: iy,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Vh
  });
}
function Bl(t, e) {
  var n = bn(t, e);
  if (n.state > Vh) throw new Error("too late; already scheduled");
  return n;
}
function Hn(t, e) {
  var n = bn(t, e);
  if (n.state > Ki) throw new Error("too late; already running");
  return n;
}
function bn(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function sy(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = zh(i, 0, n.time);
  function i(u) {
    n.state = oc, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, p, v;
    if (n.state !== oc) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === Ki) return rc(s);
        v.state === ic ? (v.state = Fi, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = Fi, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (rc(function() {
      n.state === Ki && (n.state = ic, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ha, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ha) {
      for (n.state = Ki, o = new Array(p = n.tween.length), d = 0, h = -1; d < p; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ba, 1), h = -1, p = o.length; ++h < p; )
      o[h].call(t, d);
    n.state === Ba && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Fi, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function ji(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > Ha && r.state < Ba, r.state = Fi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function ay(t) {
  return this.each(function() {
    ji(this, t);
  });
}
function ly(t, e) {
  var n, r;
  return function() {
    var o = Hn(this, t), i = o.tween;
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
function uy(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Hn(this, t), s = i.tween;
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
function cy(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = bn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? ly : uy)(n, t, e));
}
function Rl(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = Hn(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return bn(o, r).value[e];
  };
}
function Hh(t, e) {
  var n;
  return (typeof e == "number" ? $n : e instanceof Vr ? ss : (n = Vr(e)) ? (e = n, ss) : Th)(t, e);
}
function dy(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function hy(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function py(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function fy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function gy(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function vy(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function my(t, e) {
  var n = js(t), r = n === "transform" ? U0 : Hh;
  return this.attrTween(t, typeof e == "function" ? (n.local ? vy : gy)(n, r, Rl(this, "attr." + t, e)) : e == null ? (n.local ? hy : dy)(n) : (n.local ? fy : py)(n, r, e));
}
function yy(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function wy(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function by(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && wy(t, i)), n;
  }
  return o._value = e, o;
}
function xy(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && yy(t, i)), n;
  }
  return o._value = e, o;
}
function Cy(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = js(t);
  return this.tween(n, (r.local ? by : xy)(r, e));
}
function ky(t, e) {
  return function() {
    Bl(this, t).delay = +e.apply(this, arguments);
  };
}
function $y(t, e) {
  return e = +e, function() {
    Bl(this, t).delay = e;
  };
}
function Sy(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ky : $y)(e, t)) : bn(this.node(), e).delay;
}
function _y(t, e) {
  return function() {
    Hn(this, t).duration = +e.apply(this, arguments);
  };
}
function Ey(t, e) {
  return e = +e, function() {
    Hn(this, t).duration = e;
  };
}
function Py(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? _y : Ey)(e, t)) : bn(this.node(), e).duration;
}
function Oy(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Hn(this, t).ease = e;
  };
}
function Ny(t) {
  var e = this._id;
  return arguments.length ? this.each(Oy(e, t)) : bn(this.node(), e).ease;
}
function Ty(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Hn(this, t).ease = n;
  };
}
function Dy(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Ty(this._id, t));
}
function Ay(t) {
  typeof t != "function" && (t = vh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new er(r, this._parents, this._name, this._id);
}
function Ly(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), p, v = 0; v < d; ++v)
      (p = l[v] || u[v]) && (h[v] = p);
  for (; a < r; ++a)
    s[a] = e[a];
  return new er(s, this._parents, this._name, this._id);
}
function Iy(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function My(t, e, n) {
  var r, o, i = Iy(e) ? Bl : Hn;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function zy(t, e) {
  var n = this._id;
  return arguments.length < 2 ? bn(this.node(), n).on.on(t) : this.each(My(n, t, e));
}
function Vy(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Hy() {
  return this.on("end.remove", Vy(this._id));
}
function By(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Il(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, p = 0; p < l; ++p)
      (d = a[p]) && (h = t.call(d, d.__data__, p, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[p] = h, Ws(u[p], e, n, p, u, bn(d, n)));
  return new er(i, this._parents, e, n);
}
function Ry(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = gh(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var p = t.call(d, d.__data__, h, l), v, m = bn(d, n), y = 0, w = p.length; y < w; ++y)
          (v = p[y]) && Ws(v, e, n, y, p, m);
        i.push(p), s.push(d);
      }
  return new er(i, s, e, n);
}
var Ky = ui.prototype.constructor;
function Fy() {
  return new Ky(this._groups, this._parents);
}
function jy(t, e) {
  var n, r, o;
  return function() {
    var i = lo(this, t), s = (this.style.removeProperty(t), lo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function Bh(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Zy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = lo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Wy(t, e, n) {
  var r, o, i;
  return function() {
    var s = lo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), lo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function qy(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = Hn(this, t), u = l.on, d = l.value[i] == null ? a || (a = Bh(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Xy(t, e, n) {
  var r = (t += "") == "transform" ? Y0 : Hh;
  return e == null ? this.styleTween(t, jy(t, r)).on("end.style." + t, Bh(t)) : typeof e == "function" ? this.styleTween(t, Wy(t, r, Rl(this, "style." + t, e))).each(qy(this._id, t)) : this.styleTween(t, Zy(t, r, e), n).on("end.style." + t, null);
}
function Yy(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Uy(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && Yy(t, s, n)), r;
  }
  return i._value = e, i;
}
function Gy(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Uy(t, e, n ?? ""));
}
function Qy(t) {
  return function() {
    this.textContent = t;
  };
}
function Jy(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function ew(t) {
  return this.tween("text", typeof t == "function" ? Jy(Rl(this, "text", t)) : Qy(t == null ? "" : t + ""));
}
function tw(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function nw(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && tw(o)), e;
  }
  return r._value = t, r;
}
function rw(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, nw(t));
}
function ow() {
  for (var t = this._name, e = this._id, n = Rh(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = bn(l, e);
        Ws(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new er(r, this._parents, t, n);
}
function iw() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Hn(this, r), d = u.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), u.on = e;
    }), o === 0 && i();
  });
}
var sw = 0;
function er(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Rh() {
  return ++sw;
}
var Rn = ui.prototype;
er.prototype = {
  constructor: er,
  select: By,
  selectAll: Ry,
  selectChild: Rn.selectChild,
  selectChildren: Rn.selectChildren,
  filter: Ay,
  merge: Ly,
  selection: Fy,
  transition: ow,
  call: Rn.call,
  nodes: Rn.nodes,
  node: Rn.node,
  size: Rn.size,
  empty: Rn.empty,
  each: Rn.each,
  on: zy,
  attr: my,
  attrTween: Cy,
  style: Xy,
  styleTween: Gy,
  text: ew,
  textTween: rw,
  remove: Hy,
  tween: cy,
  delay: Sy,
  duration: Py,
  ease: Ny,
  easeVarying: Dy,
  end: iw,
  [Symbol.iterator]: Rn[Symbol.iterator]
};
function aw(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var lw = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: aw
};
function uw(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function cw(t) {
  var e, n;
  t instanceof er ? (e = t._id, t = t._name) : (e = Rh(), (n = lw).time = Hl(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ws(l, t, e, u, s, n || uw(l, e));
  return new er(r, this._parents, t, e);
}
ui.prototype.interrupt = ay;
ui.prototype.transition = cw;
const Ni = (t) => () => t;
function dw(t, {
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
function jn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
jn.prototype = {
  constructor: jn,
  scale: function(t) {
    return t === 1 ? this : new jn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new jn(this.k, this.x + this.k * t, this.y + this.k * e);
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
var qs = new jn(1, 0, 0);
Kh.prototype = jn.prototype;
function Kh(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return qs;
  return t.__zoom;
}
function fa(t) {
  t.stopImmediatePropagation();
}
function Eo(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function hw(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function pw() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function sc() {
  return this.__zoom || qs;
}
function fw(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function gw() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function vw(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Fh() {
  var t = hw, e = pw, n = vw, r = fw, o = gw, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Ri, u = Fs("start", "zoom", "end"), d, h, p, v = 500, m = 150, y = 0, w = 10;
  function b(P) {
    P.property("__zoom", sc).on("wheel.zoom", j, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", T).filter(o).on("touchstart.zoom", _).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(P, A, D, B) {
    var X = P.selection ? P.selection() : P;
    X.property("__zoom", sc), P !== X ? x(P, A, D, B) : X.interrupt().each(function() {
      N(this, arguments).event(B).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, b.scaleBy = function(P, A, D, B) {
    b.scaleTo(P, function() {
      var X = this.__zoom.k, U = typeof A == "function" ? A.apply(this, arguments) : A;
      return X * U;
    }, D, B);
  }, b.scaleTo = function(P, A, D, B) {
    b.transform(P, function() {
      var X = e.apply(this, arguments), U = this.__zoom, I = D == null ? k(X) : typeof D == "function" ? D.apply(this, arguments) : D, Y = U.invert(I), q = typeof A == "function" ? A.apply(this, arguments) : A;
      return n(E(C(U, q), I, Y), X, s);
    }, D, B);
  }, b.translateBy = function(P, A, D, B) {
    b.transform(P, function() {
      return n(this.__zoom.translate(
        typeof A == "function" ? A.apply(this, arguments) : A,
        typeof D == "function" ? D.apply(this, arguments) : D
      ), e.apply(this, arguments), s);
    }, null, B);
  }, b.translateTo = function(P, A, D, B, X) {
    b.transform(P, function() {
      var U = e.apply(this, arguments), I = this.__zoom, Y = B == null ? k(U) : typeof B == "function" ? B.apply(this, arguments) : B;
      return n(qs.translate(Y[0], Y[1]).scale(I.k).translate(
        typeof A == "function" ? -A.apply(this, arguments) : -A,
        typeof D == "function" ? -D.apply(this, arguments) : -D
      ), U, s);
    }, B, X);
  };
  function C(P, A) {
    return A = Math.max(i[0], Math.min(i[1], A)), A === P.k ? P : new jn(A, P.x, P.y);
  }
  function E(P, A, D) {
    var B = A[0] - D[0] * P.k, X = A[1] - D[1] * P.k;
    return B === P.x && X === P.y ? P : new jn(P.k, B, X);
  }
  function k(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function x(P, A, D, B) {
    P.on("start.zoom", function() {
      N(this, arguments).event(B).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(B).end();
    }).tween("zoom", function() {
      var X = this, U = arguments, I = N(X, U).event(B), Y = e.apply(X, U), q = D == null ? k(Y) : typeof D == "function" ? D.apply(X, U) : D, R = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), W = X.__zoom, J = typeof A == "function" ? A.apply(X, U) : A, te = l(W.invert(q).concat(R / W.k), J.invert(q).concat(R / J.k));
      return function(oe) {
        if (oe === 1) oe = J;
        else {
          var L = te(oe), ne = R / L[2];
          oe = new jn(ne, q[0] - L[0] * ne, q[1] - L[1] * ne);
        }
        I.zoom(null, oe);
      };
    });
  }
  function N(P, A, D) {
    return !D && P.__zooming || new M(P, A);
  }
  function M(P, A) {
    this.that = P, this.args = A, this.active = 0, this.sourceEvent = null, this.extent = e.apply(P, A), this.taps = 0;
  }
  M.prototype = {
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
      var A = tn(this.that).datum();
      u.call(
        P,
        this.that,
        new dw(P, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        A
      );
    }
  };
  function j(P, ...A) {
    if (!t.apply(this, arguments)) return;
    var D = N(this, A).event(P), B = this.__zoom, X = Math.max(i[0], Math.min(i[1], B.k * Math.pow(2, r.apply(this, arguments)))), U = un(P);
    if (D.wheel)
      (D.mouse[0][0] !== U[0] || D.mouse[0][1] !== U[1]) && (D.mouse[1] = B.invert(D.mouse[0] = U)), clearTimeout(D.wheel);
    else {
      if (B.k === X) return;
      D.mouse = [U, B.invert(U)], ji(this), D.start();
    }
    Eo(P), D.wheel = setTimeout(I, m), D.zoom("mouse", n(E(C(B, X), D.mouse[0], D.mouse[1]), D.extent, s));
    function I() {
      D.wheel = null, D.end();
    }
  }
  function H(P, ...A) {
    if (p || !t.apply(this, arguments)) return;
    var D = P.currentTarget, B = N(this, A, !0).event(P), X = tn(P.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", R, !0), U = un(P, D), I = P.clientX, Y = P.clientY;
    _h(P.view), fa(P), B.mouse = [U, this.__zoom.invert(U)], ji(this), B.start();
    function q(W) {
      if (Eo(W), !B.moved) {
        var J = W.clientX - I, te = W.clientY - Y;
        B.moved = J * J + te * te > y;
      }
      B.event(W).zoom("mouse", n(E(B.that.__zoom, B.mouse[0] = un(W, D), B.mouse[1]), B.extent, s));
    }
    function R(W) {
      X.on("mousemove.zoom mouseup.zoom", null), Eh(W.view, B.moved), Eo(W), B.event(W).end();
    }
  }
  function T(P, ...A) {
    if (t.apply(this, arguments)) {
      var D = this.__zoom, B = un(P.changedTouches ? P.changedTouches[0] : P, this), X = D.invert(B), U = D.k * (P.shiftKey ? 0.5 : 2), I = n(E(C(D, U), B, X), e.apply(this, A), s);
      Eo(P), a > 0 ? tn(this).transition().duration(a).call(x, I, B, P) : tn(this).call(b.transform, I, B, P);
    }
  }
  function _(P, ...A) {
    if (t.apply(this, arguments)) {
      var D = P.touches, B = D.length, X = N(this, A, P.changedTouches.length === B).event(P), U, I, Y, q;
      for (fa(P), I = 0; I < B; ++I)
        Y = D[I], q = un(Y, this), q = [q, this.__zoom.invert(q), Y.identifier], X.touch0 ? !X.touch1 && X.touch0[2] !== q[2] && (X.touch1 = q, X.taps = 0) : (X.touch0 = q, U = !0, X.taps = 1 + !!d);
      d && (d = clearTimeout(d)), U && (X.taps < 2 && (h = q[0], d = setTimeout(function() {
        d = null;
      }, v)), ji(this), X.start());
    }
  }
  function S(P, ...A) {
    if (this.__zooming) {
      var D = N(this, A).event(P), B = P.changedTouches, X = B.length, U, I, Y, q;
      for (Eo(P), U = 0; U < X; ++U)
        I = B[U], Y = un(I, this), D.touch0 && D.touch0[2] === I.identifier ? D.touch0[0] = Y : D.touch1 && D.touch1[2] === I.identifier && (D.touch1[0] = Y);
      if (I = D.that.__zoom, D.touch1) {
        var R = D.touch0[0], W = D.touch0[1], J = D.touch1[0], te = D.touch1[1], oe = (oe = J[0] - R[0]) * oe + (oe = J[1] - R[1]) * oe, L = (L = te[0] - W[0]) * L + (L = te[1] - W[1]) * L;
        I = C(I, Math.sqrt(oe / L)), Y = [(R[0] + J[0]) / 2, (R[1] + J[1]) / 2], q = [(W[0] + te[0]) / 2, (W[1] + te[1]) / 2];
      } else if (D.touch0) Y = D.touch0[0], q = D.touch0[1];
      else return;
      D.zoom("touch", n(E(I, Y, q), D.extent, s));
    }
  }
  function z(P, ...A) {
    if (this.__zooming) {
      var D = N(this, A).event(P), B = P.changedTouches, X = B.length, U, I;
      for (fa(P), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, v), U = 0; U < X; ++U)
        I = B[U], D.touch0 && D.touch0[2] === I.identifier ? delete D.touch0 : D.touch1 && D.touch1[2] === I.identifier && delete D.touch1;
      if (D.touch1 && !D.touch0 && (D.touch0 = D.touch1, delete D.touch1), D.touch0) D.touch0[1] = this.__zoom.invert(D.touch0[0]);
      else if (D.end(), D.taps === 2 && (I = un(I, this), Math.hypot(h[0] - I[0], h[1] - I[1]) < w)) {
        var Y = tn(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : Ni(+P), b) : r;
  }, b.filter = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : Ni(!!P), b) : t;
  }, b.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : Ni(!!P), b) : o;
  }, b.extent = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : Ni([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), b) : e;
  }, b.scaleExtent = function(P) {
    return arguments.length ? (i[0] = +P[0], i[1] = +P[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(P) {
    return arguments.length ? (s[0][0] = +P[0][0], s[1][0] = +P[1][0], s[0][1] = +P[0][1], s[1][1] = +P[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(P) {
    return arguments.length ? (n = P, b) : n;
  }, b.duration = function(P) {
    return arguments.length ? (a = +P, b) : a;
  }, b.interpolate = function(P) {
    return arguments.length ? (l = P, b) : l;
  }, b.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? b : P;
  }, b.clickDistance = function(P) {
    return arguments.length ? (y = (P = +P) * P, b) : Math.sqrt(y);
  }, b.tapDistance = function(P) {
    return arguments.length ? (w = +P, b) : w;
  }, b;
}
const Xo = {
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
}, Ra = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], jh = ["Enter", " ", "Escape"], mw = {
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
var co;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(co || (co = {}));
var Lr;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(Lr || (Lr = {}));
var cs;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(cs || (cs = {}));
const Ka = {
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
var Fn;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(Fn || (Fn = {}));
var Yo;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(Yo || (Yo = {}));
var Se;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(Se || (Se = {}));
const ac = {
  [Se.Left]: Se.Right,
  [Se.Right]: Se.Left,
  [Se.Top]: Se.Bottom,
  [Se.Bottom]: Se.Top
};
function yw(t, e) {
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
function lc(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function ww(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const Zh = (t) => "id" in t && "source" in t && "target" in t, bw = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), Kl = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), di = (t, e = [0, 0]) => {
  const { width: n, height: r } = $r(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, xw = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : Kl(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? ds(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Xs(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ys(n);
}, hi = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = Xs(n, ds(o)), r = !0);
  }), r ? Ys(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Fl = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...fi(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const u of t.values()) {
    const { measured: d, selectable: h = !0, hidden: p = !1 } = u;
    if (s && !h || p)
      continue;
    const v = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, y = Uo(a, po(u)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
    (!u.internals.handleBounds || b || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, Cw = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function kw(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function $w({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = kw(t, s), l = hi(a), u = jl(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Wh({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Xo.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (h = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else a && fo(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = fo(h) ? Br(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Xo.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function Sw({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const p = i.has(h.id), v = !p && h.parentId && s.find((m) => m.id === h.parentId);
    (p || v) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), u = Cw(s, l);
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
const ho = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), Br = (t = { x: 0, y: 0 }, e, n) => ({
  x: ho(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: ho(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function qh(t, e, n) {
  const { width: r, height: o } = $r(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Br(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const uc = (t, e, n) => t < e ? ho(Math.abs(t - e), 1, e) / e : t > n ? -ho(Math.abs(t - n), 1, e) / e : 0, Xh = (t, e, n = 15, r = 40) => {
  const o = uc(t.x, r, e.width - r) * n, i = uc(t.y, r, e.height - r) * n;
  return [o, i];
}, Xs = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), Fa = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), Ys = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), po = (t, e = [0, 0]) => {
  const { x: n, y: r } = Kl(t) ? t.internals.positionAbsolute : di(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, ds = (t, e = [0, 0]) => {
  const { x: n, y: r } = Kl(t) ? t.internals.positionAbsolute : di(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, Yh = (t, e) => Ys(Xs(Fa(t), Fa(e))), Uo = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, cc = (t) => Zn(t.width) && Zn(t.height) && Zn(t.x) && Zn(t.y), Zn = (t) => !isNaN(t) && isFinite(t), _w = (t, e) => {
}, pi = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), fi = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? pi(a, s) : a;
}, hs = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function Ur(t, e) {
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
function Ew(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = Ur(t, n), o = Ur(t, e);
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
    const r = Ur(t.top ?? t.y ?? 0, n), o = Ur(t.bottom ?? t.y ?? 0, n), i = Ur(t.left ?? t.x ?? 0, e), s = Ur(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Pw(t, e, n, r, o, i) {
  const { x: s, y: a } = hs(t, [e, n, r]), { x: l, y: u } = hs({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const jl = (t, e, n, r, o, i) => {
  const s = Ew(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = ho(u, r, o), h = t.x + t.width / 2, p = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - p * d, y = Pw(t, v, m, d, e, n), w = {
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
}, Nr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function fo(t) {
  return t != null && t !== "parent";
}
function $r(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function Uh(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function Ow(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function Nw(t) {
  return { ...mw, ...t || {} };
}
function ga(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = hn(t), a = fi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? pi(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Gh = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), Qh = (t) => t?.getRootNode?.() || window?.document, Tw = ["INPUT", "SELECT", "TEXTAREA"];
function Jh(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : Tw.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const ep = (t) => "clientX" in t, hn = (t, e) => {
  const n = ep(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, dc = (t, e, n, r, o) => {
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
      ...Gh(s)
    };
  });
};
function Dw({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function Ti(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function hc({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case Se.Left:
      return [e - Ti(e - r, i), n];
    case Se.Right:
      return [e + Ti(r - e, i), n];
    case Se.Top:
      return [e, n - Ti(n - o, i)];
    case Se.Bottom:
      return [e, n + Ti(o - n, i)];
  }
}
function tp({ sourceX: t, sourceY: e, sourcePosition: n = Se.Bottom, targetX: r, targetY: o, targetPosition: i = Se.Top, curvature: s = 0.25 }) {
  const [a, l] = hc({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = hc({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [h, p, v, m] = Dw({
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
function np({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function Aw({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function Lw({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = Xs(ds(t), ds(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Uo(s, Ys(i)) > 0;
}
const Iw = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, Mw = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), zw = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return Zh(t) ? n = { ...t } : n = {
    ...t,
    id: Iw(t)
  }, Mw(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function rp({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = np({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const pc = {
  [Se.Left]: { x: -1, y: 0 },
  [Se.Right]: { x: 1, y: 0 },
  [Se.Top]: { x: 0, y: -1 },
  [Se.Bottom]: { x: 0, y: 1 }
}, Vw = ({ source: t, sourcePosition: e = Se.Bottom, target: n }) => e === Se.Left || e === Se.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, fc = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function Hw({ source: t, sourcePosition: e = Se.Bottom, target: n, targetPosition: r = Se.Top, center: o, offset: i, stepPosition: s }) {
  const a = pc[e], l = pc[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Vw({
    source: u,
    sourcePosition: e,
    target: d
  }), p = h.x !== 0 ? "x" : "y", v = h[p];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , E, k] = np({
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
      const _ = Math.abs(t[p] - n[p]);
      if (_ <= i) {
        const S = Math.min(i - 1, i - _);
        a[p] === v ? b[p] = (u[p] > t[p] ? -1 : 1) * S : C[p] = (d[p] > n[p] ? -1 : 1) * S;
      }
    }
    if (e !== r) {
      const _ = p === "x" ? "y" : "x", S = a[p] === l[_], z = u[_] > d[_], P = u[_] < d[_];
      (a[p] === 1 && (!S && z || S && P) || a[p] !== 1 && (!S && P || S && z)) && (m = p === "x" ? x : N);
    }
    const M = { x: u.x + b.x, y: u.y + b.y }, j = { x: d.x + C.x, y: d.y + C.y }, H = Math.max(Math.abs(M.x - m[0].x), Math.abs(j.x - m[0].x)), T = Math.max(Math.abs(M.y - m[0].y), Math.abs(j.y - m[0].y));
    H >= T ? (y = (M.x + j.x) / 2, w = m[0].y) : (y = m[0].x, w = (M.y + j.y) / 2);
  }
  return [[
    t,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + C.x, y: d.y + C.y },
    n
  ], y, w, E, k];
}
function Bw(t, e, n, r) {
  const o = Math.min(fc(t, e) / 2, fc(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const u = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, l = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Zl({ sourceX: t, sourceY: e, sourcePosition: n = Se.Bottom, targetX: r, targetY: o, targetPosition: i = Se.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, p, v, m, y] = Hw({
    source: { x: t, y: e },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, b, C) => {
    let E = "";
    return C > 0 && C < h.length - 1 ? E = Bw(h[C - 1], b, h[C + 1], s) : E = `${C === 0 ? "M" : "L"}${b.x} ${b.y}`, w += E, w;
  }, ""), p, v, m, y];
}
function gc(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function Rw(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!gc(e) || !gc(n))
    return null;
  const r = e.internals.handleBounds || vc(e.handles), o = n.internals.handleBounds || vc(n.handles), i = mc(r?.source ?? [], t.sourceHandle), s = mc(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === co.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", Xo.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || Se.Bottom, l = s?.position || Se.Top, u = Go(e, i, a), d = Go(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function vc(t) {
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
function Go(t, e, n = Se.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? $r(t);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (e?.position ?? n) {
    case Se.Top:
      return { x: o + s / 2, y: i };
    case Se.Right:
      return { x: o + s, y: i + a / 2 };
    case Se.Bottom:
      return { x: o + s / 2, y: i + a };
    case Se.Left:
      return { x: o, y: i + a / 2 };
  }
}
function mc(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function ja(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((n) => `${n}=${t[n]}`).join("&")}` : "";
}
function Kw(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ja(l, e);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Fw(t, e, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (t.x + t.width * i) * e.zoom + e.x,
    t.y * e.zoom + e.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Se.Right:
      s = [
        (t.x + t.width) * e.zoom + e.x + r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [0, -100 * i];
      break;
    case Se.Bottom:
      s[1] = (t.y + t.height) * e.zoom + e.y + r, a[1] = 0;
      break;
    case Se.Left:
      s = [
        t.x * e.zoom + e.x - r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const op = 1e3, jw = 10, Wl = {
  nodeOrigin: [0, 0],
  nodeExtent: Ra,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Zw = {
  ...Wl,
  checkEquality: !0
};
function ql(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function Ww(t, e, n) {
  const r = ql(Wl, n);
  for (const o of t.values())
    if (o.parentId)
      Xl(o, t, e, r);
    else {
      const i = di(o, r.nodeOrigin), s = fo(o.extent) ? o.extent : r.nodeExtent, a = Br(i, s, $r(o));
      o.internals.positionAbsolute = a;
    }
}
function qw(t, e) {
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
function Xw(t, e, n, r) {
  const o = ql(Zw, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? op : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = di(u, o.nodeOrigin), p = fo(u.extent) ? u.extent : o.nodeExtent, v = Br(h, p, $r(u));
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
          handleBounds: qw(u, d),
          z: ip(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Xl(d, e, n, r, i);
  }
  return s;
}
function Yw(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function Xl(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = ql(Wl, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Yw(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * jw), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? op : 0, { x: h, y: p, z: v } = Uw(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || p !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: p } : m,
      z: v
    }
  });
}
function ip(t, e) {
  return (Zn(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function Uw(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = $r(t), l = di(t, n), u = fo(t.extent) ? Br(l, t.extent, a) : l;
  let d = Br({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = qh(d, a, e));
  const h = ip(t, o), p = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= h ? p + 1 : h
  };
}
function Gw(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? po(a), u = Yh(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = $r(a), h = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
    (p > 0 || v > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + w,
        y: a.position.y - v + b
      }
    }), n.get(l)?.forEach((C) => {
      t.some((E) => E.id === C.id) || o.push({
        id: C.id,
        type: "position",
        position: {
          x: C.position.x + p,
          y: C.position.y + v
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
function Qw(t, e, n, r, o, i) {
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
    const m = Gh(p.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), b = fo(v.extent) ? v.extent : i;
      let { positionAbsolute: C } = v.internals;
      v.parentId && v.extent === "parent" ? C = qh(C, m, e.get(v.parentId)) : b && (C = Br(C, b, m));
      const E = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: C,
          handleBounds: {
            source: dc("source", p.nodeElement, w, d, v.id),
            target: dc("target", p.nodeElement, w, d, v.id)
          }
        }
      };
      e.set(v.id, E), v.parentId && Xl(E, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && h.push({
        id: v.id,
        parentId: v.parentId,
        rect: po(E, o)
      }));
    }
  }
  if (h.length > 0) {
    const p = Gw(h, e, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function Jw({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
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
function yc(t, e, n, r, o, i) {
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
function e2(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    yc("source", l, d, t, o, s), yc("target", l, u, t, i, a), e.set(r.id, r);
  }
}
function t2(t, e) {
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
function sp(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : sp(n, e) : !1;
}
function wc(t, e, n) {
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
function n2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !sp(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function va({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
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
function r2({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = pi(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function o2({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, p = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: C, handleSelector: E, domNode: k, isSelectable: x, nodeId: N, nodeClickDistance: M = 0 }) {
    p = tn(k);
    function j({ x: S, y: z }) {
      const { nodeLookup: P, nodeExtent: A, snapGrid: D, snapToGrid: B, nodeOrigin: X, onNodeDrag: U, onSelectionDrag: I, onError: Y, updateNodePositions: q } = e();
      i = { x: S, y: z };
      let R = !1;
      const W = a.size > 1, J = W && A ? Fa(hi(a)) : null, te = W && B ? r2({
        dragItems: a,
        snapGrid: D,
        x: S,
        y: z
      }) : null;
      for (const [oe, L] of a) {
        if (!P.has(oe))
          continue;
        let ne = { x: S - L.distance.x, y: z - L.distance.y };
        B && (ne = te ? {
          x: Math.round(ne.x + te.x),
          y: Math.round(ne.y + te.y)
        } : pi(ne, D));
        let fe = null;
        if (W && A && !L.extent && J) {
          const { positionAbsolute: ue } = L.internals, ge = ue.x - J.x + A[0][0], ye = ue.x + L.measured.width - J.x2 + A[1][0], be = ue.y - J.y + A[0][1], de = ue.y + L.measured.height - J.y2 + A[1][1];
          fe = [
            [ge, be],
            [ye, de]
          ];
        }
        const { position: he, positionAbsolute: re } = Wh({
          nodeId: oe,
          nextPosition: ne,
          nodeLookup: P,
          nodeExtent: fe || A,
          nodeOrigin: X,
          onError: Y
        });
        R = R || L.position.x !== he.x || L.position.y !== he.y, L.position = he, L.internals.positionAbsolute = re;
      }
      if (m = m || R, !!R && (q(a, !0), y && (r || U || !N && I))) {
        const [oe, L] = va({
          nodeId: N,
          dragItems: a,
          nodeLookup: P
        });
        r?.(y, a, oe, L), U?.(y, oe, L), N || I?.(y, L);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: S, panBy: z, autoPanSpeed: P, autoPanOnNodeDrag: A } = e();
      if (!A) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [D, B] = Xh(u, d, P);
      (D !== 0 || B !== 0) && (i.x = (i.x ?? 0) - D / S[2], i.y = (i.y ?? 0) - B / S[2], await z({ x: D, y: B }) && j(i)), s = requestAnimationFrame(H);
    }
    function T(S) {
      const { nodeLookup: z, multiSelectionActive: P, nodesDraggable: A, transform: D, snapGrid: B, snapToGrid: X, selectNodesOnDrag: U, onNodeDragStart: I, onSelectionDragStart: Y, unselectNodesAndEdges: q } = e();
      h = !0, (!U || !x) && !P && N && (z.get(N)?.selected || q()), x && U && N && t?.(N);
      const R = ga(S.sourceEvent, { transform: D, snapGrid: B, snapToGrid: X, containerBounds: d });
      if (i = R, a = n2(z, A, R, N), a.size > 0 && (n || I || !N && Y)) {
        const [W, J] = va({
          nodeId: N,
          dragItems: a,
          nodeLookup: z
        });
        n?.(S.sourceEvent, a, W, J), I?.(S.sourceEvent, W, J), N || Y?.(S.sourceEvent, J);
      }
    }
    const _ = $0().clickDistance(M).on("start", (S) => {
      const { domNode: z, nodeDragThreshold: P, transform: A, snapGrid: D, snapToGrid: B } = e();
      d = z?.getBoundingClientRect() || null, v = !1, m = !1, y = S.sourceEvent, P === 0 && T(S), i = ga(S.sourceEvent, { transform: A, snapGrid: D, snapToGrid: B, containerBounds: d }), u = hn(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: z, transform: P, snapGrid: A, snapToGrid: D, nodeDragThreshold: B, nodeLookup: X } = e(), U = ga(S.sourceEvent, { transform: P, snapGrid: A, snapToGrid: D, containerBounds: d });
      if (y = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      N && !X.has(N)) && (v = !0), !v) {
        if (!l && z && h && (l = !0, H()), !h) {
          const I = hn(S.sourceEvent, d), Y = I.x - u.x, q = I.y - u.y;
          Math.sqrt(Y * Y + q * q) > B && T(S);
        }
        (i.x !== U.xSnapped || i.y !== U.ySnapped) && a && h && (u = hn(S.sourceEvent, d), j(U));
      }
    }).on("end", (S) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: z, updateNodePositions: P, onNodeDragStop: A, onSelectionDragStop: D } = e();
        if (m && (P(a, !1), m = !1), o || A || !N && D) {
          const [B, X] = va({
            nodeId: N,
            dragItems: a,
            nodeLookup: z,
            dragging: !1
          });
          o?.(S.sourceEvent, a, B, X), A?.(S.sourceEvent, B, X), N || D?.(S.sourceEvent, X);
        }
      }
    }).filter((S) => {
      const z = S.target;
      return !S.button && (!C || !wc(z, `.${C}`, k)) && (!E || wc(z, E, k));
    });
    p.call(_);
  }
  function b() {
    p?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function i2(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    Uo(o, po(i)) > 0 && r.push(i);
  return r;
}
const s2 = 250;
function a2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = i2(t, n, e + s2);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = Go(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(h - t.y, 2));
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
function ap(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Go(s, l, l.position, !0) } : l;
}
function lp(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function l2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const up = () => !0;
function u2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: p, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = up, onReconnectEnd: C, updateConnection: E, getTransform: k, getFromHandle: x, autoPanSpeed: N, dragThreshold: M = 1, handleDomNode: j }) {
  const H = Qh(t.target);
  let T = 0, _;
  const { x: S, y: z } = hn(t), P = lp(i, j), A = a?.getBoundingClientRect();
  let D = !1;
  if (!A || !P)
    return;
  const B = ap(o, P, r, l, e);
  if (!B)
    return;
  let X = hn(t, A), U = !1, I = null, Y = !1, q = null;
  function R() {
    if (!d || !A)
      return;
    const [fe, he] = Xh(X, A, N);
    p({ x: fe, y: he }), T = requestAnimationFrame(R);
  }
  const W = {
    ...B,
    nodeId: o,
    type: P,
    position: B.position
  }, J = l.get(o);
  let te = {
    inProgress: !0,
    isValid: null,
    from: Go(J, W, Se.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: J,
    to: X,
    toHandle: null,
    toPosition: ac[W.position],
    toNode: null,
    pointer: X
  };
  function oe() {
    D = !0, E(te), m?.(t, { nodeId: o, handleId: r, handleType: P });
  }
  M === 0 && oe();
  function L(fe) {
    if (!D) {
      const { x: ge, y: ye } = hn(fe), be = ge - S, de = ye - z;
      if (!(be * be + de * de > M * M))
        return;
      oe();
    }
    if (!x() || !W) {
      ne(fe);
      return;
    }
    const he = k();
    X = hn(fe, A), _ = a2(fi(X, he, !1, [1, 1]), n, l, W), U || (R(), U = !0);
    const re = cp(fe, {
      handle: _,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: H,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    q = re.handleDomNode, I = re.connection, Y = l2(!!_, re.isValid);
    const ue = {
      // from stays the same
      ...te,
      isValid: Y,
      to: re.toHandle && Y ? hs({ x: re.toHandle.x, y: re.toHandle.y }, he) : X,
      toHandle: re.toHandle,
      toPosition: Y && re.toHandle ? re.toHandle.position : ac[W.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: X
    };
    E(ue), te = ue;
  }
  function ne(fe) {
    if (!("touches" in fe && fe.touches.length > 0)) {
      if (D) {
        (_ || q) && I && Y && y?.(I);
        const { inProgress: he, ...re } = te, ue = {
          ...re,
          toPosition: te.toHandle ? te.toPosition : null
        };
        w?.(fe, ue), i && C?.(fe, ue);
      }
      v(), cancelAnimationFrame(T), U = !1, Y = !1, I = null, q = null, H.removeEventListener("mousemove", L), H.removeEventListener("mouseup", ne), H.removeEventListener("touchmove", L), H.removeEventListener("touchend", ne);
    }
  }
  H.addEventListener("mousemove", L), H.addEventListener("mouseup", ne), H.addEventListener("touchmove", L), H.addEventListener("touchend", ne);
}
function cp(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = up, nodeLookup: d }) {
  const h = i === "target", p = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = hn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const C = lp(void 0, w), E = w.getAttribute("data-nodeid"), k = w.getAttribute("data-handleid"), x = w.classList.contains("connectable"), N = w.classList.contains("connectableend");
    if (!E || !C)
      return b;
    const M = {
      source: h ? E : r,
      sourceHandle: h ? k : o,
      target: h ? r : E,
      targetHandle: h ? o : k
    };
    b.connection = M;
    const j = x && N && (n === co.Strict ? h && C === "source" || !h && C === "target" : E !== r || k !== o);
    b.isValid = j && u(M), b.toHandle = ap(E, C, k, d, n, !0);
  }
  return b;
}
const bc = {
  onPointerDown: u2,
  isValid: cp
};
function c2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = tn(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: p = !0, inversePan: v = !1 }) {
    const m = (E) => {
      if (E.sourceEvent.type !== "wheel" || !e)
        return;
      const k = n(), x = E.sourceEvent.ctrlKey && Nr() ? 10 : 1, N = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = k[2] * Math.pow(2, N * x);
      e.scaleTo(M);
    };
    let y = [0, 0];
    const w = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (y = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, b = (E) => {
      const k = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !e)
        return;
      const x = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], N = [x[0] - y[0], x[1] - y[1]];
      y = x;
      const M = r() * Math.max(k[2], Math.log(k[2])) * (v ? -1 : 1), j = {
        x: k[0] - N[0] * M,
        y: k[1] - N[1] * M
      }, H = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: j.x,
        y: j.y,
        zoom: k[2]
      }, H, a);
    }, C = Fh().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", p ? m : null);
    o.call(C, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: un
  };
}
const Us = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), ma = ({ x: t, y: e, zoom: n }) => qs.translate(t, e).scale(n), Jr = (t, e) => t.target.closest(`.${e}`), dp = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), d2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, ya = (t, e = 0, n = d2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, hp = (t) => {
  const e = t.ctrlKey && Nr() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function h2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Jr(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = un(d), b = hp(d), C = h * Math.pow(2, b);
      r.scaleTo(n, C, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let v = o === Lr.Vertical ? 0 : d.deltaX * p, m = o === Lr.Horizontal ? 0 : d.deltaY * p;
    !Nr() && d.shiftKey && o !== Lr.Vertical && (v = d.deltaY * p, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Us(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function p2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = Jr(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function f2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Us(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function g2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && dp(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Us(i.transform));
  };
}
function v2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && dp(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = Us(s.transform);
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
function m2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const p = t || e, v = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (Jr(h, `${u}-flow__node`) || Jr(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !m || Jr(h, a) && m || Jr(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!p && !o && !v && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function y2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), h = Fh().scaleExtent([e, n]).translateExtent(r), p = tn(t).call(h);
  C({
    x: o.x,
    y: o.y,
    zoom: ho(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = p.on("wheel.zoom"), m = p.on("dblclick.zoom");
  h.wheelDelta(hp);
  function y(_, S) {
    return p ? new Promise((z) => {
      h?.interpolate(S?.interpolate === "linear" ? Vo : Ri).transform(ya(p, S?.duration, S?.ease, () => z(!0)), _);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: _, noPanClassName: S, onPaneContextMenu: z, userSelectionActive: P, panOnScroll: A, panOnDrag: D, panOnScrollMode: B, panOnScrollSpeed: X, preventScrolling: U, zoomOnPinch: I, zoomOnScroll: Y, zoomOnDoubleClick: q, zoomActivationKeyPressed: R, lib: W, onTransformChange: J, connectionInProgress: te, paneClickDistance: oe, selectionOnDrag: L }) {
    P && !u.isZoomingOrPanning && b();
    const ne = A && !R && !P;
    h.clickDistance(L ? 1 / 0 : !Zn(oe) || oe < 0 ? 0 : oe);
    const fe = ne ? h2({
      zoomPanValues: u,
      noWheelClassName: _,
      d3Selection: p,
      d3Zoom: h,
      panOnScrollMode: B,
      panOnScrollSpeed: X,
      zoomOnPinch: I,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : p2({
      noWheelClassName: _,
      preventScrolling: U,
      d3ZoomHandler: v
    });
    if (p.on("wheel.zoom", fe, { passive: !1 }), !P) {
      const re = f2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", re);
      const ue = g2({
        zoomPanValues: u,
        panOnDrag: D,
        onPaneContextMenu: !!z,
        onPanZoom: i,
        onTransformChange: J
      });
      h.on("zoom", ue);
      const ge = v2({
        zoomPanValues: u,
        panOnDrag: D,
        panOnScroll: A,
        onPaneContextMenu: z,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", ge);
    }
    const he = m2({
      zoomActivationKeyPressed: R,
      panOnDrag: D,
      zoomOnScroll: Y,
      panOnScroll: A,
      zoomOnDoubleClick: q,
      zoomOnPinch: I,
      userSelectionActive: P,
      noPanClassName: S,
      noWheelClassName: _,
      lib: W,
      connectionInProgress: te
    });
    h.filter(he), q ? p.on("dblclick.zoom", m) : p.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function C(_, S, z) {
    const P = ma(_), A = h?.constrain()(P, S, z);
    return A && await y(A), new Promise((D) => D(A));
  }
  async function E(_, S) {
    const z = ma(_);
    return await y(z, S), new Promise((P) => P(z));
  }
  function k(_) {
    if (p) {
      const S = ma(_), z = p.property("__zoom");
      (z.k !== _.zoom || z.x !== _.x || z.y !== _.y) && h?.transform(p, S, null, { sync: !0 });
    }
  }
  function x() {
    const _ = p ? Kh(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function N(_, S) {
    return p ? new Promise((z) => {
      h?.interpolate(S?.interpolate === "linear" ? Vo : Ri).scaleTo(ya(p, S?.duration, S?.ease, () => z(!0)), _);
    }) : Promise.resolve(!1);
  }
  function M(_, S) {
    return p ? new Promise((z) => {
      h?.interpolate(S?.interpolate === "linear" ? Vo : Ri).scaleBy(ya(p, S?.duration, S?.ease, () => z(!0)), _);
    }) : Promise.resolve(!1);
  }
  function j(_) {
    h?.scaleExtent(_);
  }
  function H(_) {
    h?.translateExtent(_);
  }
  function T(_) {
    const S = !Zn(_) || _ < 0 ? 0 : _;
    h?.clickDistance(S);
  }
  return {
    update: w,
    destroy: b,
    setViewport: E,
    setViewportConstrained: C,
    getViewport: x,
    scaleTo: N,
    scaleBy: M,
    setScaleExtent: j,
    setTranslateExtent: H,
    syncViewport: k,
    setClickDistance: T
  };
}
var xc;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(xc || (xc = {}));
var w2 = /* @__PURE__ */ ee("<div><!></div>");
function yr(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7, null), r = g(e, "type", 7, "source"), o = g(e, "position", 23, () => Se.Top), i = g(e, "style", 7), s = g(e, "class", 7), a = g(e, "isConnectable", 7), l = g(e, "isConnectableStart", 7, !0), u = g(e, "isConnectableEnd", 7, !0), d = g(e, "isValidConnection", 7), h = g(e, "onconnect", 7), p = g(e, "ondisconnect", 7), v = g(e, "children", 7), m = /* @__PURE__ */ Le(e, [
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
  const y = vn("svelteflow__node_id"), w = vn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ $(() => r() === "target"), C = /* @__PURE__ */ $(() => a() !== void 0 ? a() : w.value), E = xn(), k = /* @__PURE__ */ $(() => E.ariaLabelConfig), x = null;
  Ht(() => {
    if (h() || p()) {
      E.edges;
      let I = E.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (x && !yw(I, x)) {
        const Y = I ?? /* @__PURE__ */ new Map();
        lc(x, Y, p()), lc(Y, x, h());
      }
      x = new Map(I);
    }
  });
  let N = /* @__PURE__ */ $(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: I, toHandle: Y, isValid: q } = E.connection, R = I && I.nodeId === y && I.type === r() && I.id === n(), W = Y && Y.nodeId === y && Y.type === r() && Y.id === n(), J = E.connectionMode === co.Strict ? I?.type !== r() : y !== I?.nodeId || n() !== I?.id;
    return [
      !0,
      R,
      W,
      J,
      W && q
    ];
  }), M = /* @__PURE__ */ $(() => mo(c(N), 5)), j = /* @__PURE__ */ $(() => c(M)[0]), H = /* @__PURE__ */ $(() => c(M)[1]), T = /* @__PURE__ */ $(() => c(M)[2]), _ = /* @__PURE__ */ $(() => c(M)[3]), S = /* @__PURE__ */ $(() => c(M)[4]);
  function z(I) {
    const Y = E.onbeforeconnect ? E.onbeforeconnect(I) : I;
    Y && (E.addEdge(Y), E.onconnect?.(I));
  }
  function P(I) {
    const Y = ep(I);
    I.currentTarget && (Y && I.button === 0 || !Y) && bc.onPointerDown(I, {
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
      onConnect: z,
      onConnectStart: (q, R) => {
        E.onconnectstart?.(q, {
          nodeId: R.nodeId,
          handleId: R.handleId,
          handleType: R.handleType
        });
      },
      onConnectEnd: (q, R) => {
        E.onconnectend?.(q, R);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: I.currentTarget
    });
  }
  function A(I) {
    if (!y || !E.clickConnectStartHandle && !l())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.(I, { nodeId: y, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const Y = Qh(I.target), q = d() ?? E.isValidConnection, { connectionMode: R, clickConnectStartHandle: W, flowId: J, nodeLookup: te } = E, { connection: oe, isValid: L } = bc.isValid(I, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: R,
      fromNodeId: W.nodeId,
      fromHandleId: W.id ?? null,
      fromType: W.type,
      isValidConnection: q,
      flowId: J,
      doc: Y,
      lib: "svelte",
      nodeLookup: te
    });
    L && oe && z(oe);
    const ne = structuredClone(kl(E.connection));
    delete ne.inProgress, ne.toPosition = ne.toHandle ? ne.toHandle.position : null, E.onclickconnectend?.(I, ne), E.clickConnectStartHandle = null;
  }
  var D = {
    get id() {
      return n();
    },
    set id(I = null) {
      n(I), f();
    },
    get type() {
      return r();
    },
    set type(I = "source") {
      r(I), f();
    },
    get position() {
      return o();
    },
    set position(I = Se.Top) {
      o(I), f();
    },
    get style() {
      return i();
    },
    set style(I) {
      i(I), f();
    },
    get class() {
      return s();
    },
    set class(I) {
      s(I), f();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(I) {
      a(I), f();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(I = !0) {
      l(I), f();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(I = !0) {
      u(I), f();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(I) {
      d(I), f();
    },
    get onconnect() {
      return h();
    },
    set onconnect(I) {
      h(I), f();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(I) {
      p(I), f();
    },
    get children() {
      return v();
    },
    set children(I) {
      v(I), f();
    }
  }, B = w2(), X = () => {
  };
  Ye(B, () => ({
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
    onkeypress: X,
    style: i(),
    role: "button",
    "aria-label": c(k)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [dr]: {
      valid: c(S),
      connectingto: c(T),
      connectingfrom: c(H),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(C),
      connectionindicator: c(C) && (!c(j) || c(_)) && (c(j) || E.clickConnectStartHandle ? u() : l())
    }
  }));
  var U = Z(B);
  return Ee(U, () => v() ?? He), F(B), O(t, B), le(D);
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
var b2 = /* @__PURE__ */ ee("<!> <!>", 1);
function Yl(t, e) {
  ae(e, !0);
  let n = g(e, "data", 7), r = g(e, "targetPosition", 23, () => Se.Top), o = g(e, "sourcePosition", 23, () => Se.Bottom);
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
    set targetPosition(d = Se.Top) {
      r(d), f();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = Se.Bottom) {
      o(d), f();
    }
  }, s = b2(), a = Q(s);
  yr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = V(a), u = V(l);
  return yr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Pe(() => Je(l, ` ${n()?.label ?? ""} `)), O(t, s), le(i);
}
se(Yl, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var x2 = /* @__PURE__ */ ee(" <!>", 1);
function pp(t, e) {
  ae(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "sourcePosition", 23, () => Se.Bottom);
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
    set sourcePosition(l = Se.Bottom) {
      r(l), f();
    }
  };
  $e();
  var i = x2(), s = Q(i), a = V(s);
  return yr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Pe(() => Je(s, `${n()?.label ?? ""} `)), O(t, i), le(o);
}
se(pp, { data: {}, sourcePosition: {} }, [], [], !0);
var C2 = /* @__PURE__ */ ee(" <!>", 1);
function fp(t, e) {
  ae(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "targetPosition", 23, () => Se.Top);
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
    set targetPosition(l = Se.Top) {
      r(l), f();
    }
  };
  $e();
  var i = C2(), s = Q(i), a = V(s);
  return yr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Pe(() => Je(s, `${n()?.label ?? ""} `)), O(t, i), le(o);
}
se(fp, { data: {}, targetPosition: {} }, [], [], !0);
function gp(t, e) {
}
se(gp, {}, [], [], !0);
function wa(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function vp(t, e) {
  const n = /* @__PURE__ */ $(xn), r = /* @__PURE__ */ $(() => c(n).domNode);
  let o;
  return c(r) ? wa(t, c(r), e) : o = jr(() => {
    Ie(() => {
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
function mp() {
  let t = /* @__PURE__ */ me(typeof window > "u");
  if (c(t)) {
    const e = jr(() => {
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
const Cc = (t) => bw(t), k2 = (t) => Zh(t);
function In(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const ps = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var $2 = /* @__PURE__ */ ee("<div><!></div>");
const S2 = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function yp(t, e) {
  ae(e, !0), Ue(t, S2);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7), i = g(e, "height", 7), s = g(e, "selectEdgeOnClick", 7, !1), a = g(e, "transparent", 7, !1), l = g(e, "class", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
  const h = xn(), p = vn("svelteflow__edge_id");
  if (!p)
    throw new Error("EdgeLabel must be used within an edge");
  let v = /* @__PURE__ */ $(() => h.visible.edges.get(p)?.zIndex);
  var m = {
    get x() {
      return n();
    },
    set x(C = 0) {
      n(C), f();
    },
    get y() {
      return r();
    },
    set y(C = 0) {
      r(C), f();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), f();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), f();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(C = !1) {
      s(C), f();
    },
    get transparent() {
      return a();
    },
    set transparent(C = !1) {
      a(C), f();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), f();
    },
    get children() {
      return u();
    },
    set children(C) {
      u(C), f();
    }
  }, y = $2(), w = () => {
    s() && h.handleEdgeSelection(p);
  };
  Ye(
    y,
    (C) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [_n]: C
    }),
    [
      () => ({
        display: mp().value ? "none" : void 0,
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
  var b = Z(y);
  return Ee(b, () => u() ?? He), F(y), Ot(y, (C, E) => vp?.(C, E), () => "edge-labels"), O(t, y), le(m);
}
se(
  yp,
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
var _2 = /* @__PURE__ */ xe("<path></path>"), E2 = /* @__PURE__ */ xe('<path fill="none"></path><!><!>', 1);
function gi(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "path", 7), o = g(e, "label", 7), i = g(e, "labelX", 7), s = g(e, "labelY", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "style", 7), h = g(e, "interactionWidth", 7, 20), p = g(e, "class", 7), v = /* @__PURE__ */ Le(e, [
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
  }, y = E2(), w = Q(y), b = V(w);
  {
    var C = (x) => {
      var N = _2();
      Ye(N, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), O(x, N);
    };
    ie(b, (x) => {
      h() > 0 && x(C);
    });
  }
  var E = V(b);
  {
    var k = (x) => {
      yp(x, {
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
        children: (N, M) => {
          $e();
          var j = Ae();
          Pe(() => Je(j, o())), O(N, j);
        },
        $$slots: { default: !0 }
      });
    };
    ie(E, (x) => {
      o() && x(k);
    });
  }
  return Pe(() => {
    _e(w, "id", n()), _e(w, "d", r()), jt(w, 0, ar(["svelte-flow__edge-path", p()])), _e(w, "marker-start", l()), _e(w, "marker-end", u()), _t(w, d());
  }), O(t, y), le(m);
}
se(
  gi,
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
function Ul(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), p = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ $(() => tp({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ $(() => mo(c(w), 3)), C = /* @__PURE__ */ $(() => c(b)[0]), E = /* @__PURE__ */ $(() => c(b)[1]), k = /* @__PURE__ */ $(() => c(b)[2]);
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
  return gi(t, {
    get id() {
      return n();
    },
    get path() {
      return c(C);
    },
    get labelX() {
      return c(E);
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
  }), le(x);
}
se(
  Ul,
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
function wp(t, e) {
  ae(e, !0);
  let n = g(e, "interactionWidth", 7), r = g(e, "label", 7), o = g(e, "labelStyle", 7), i = g(e, "style", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "sourcePosition", 7), u = g(e, "sourceX", 7), d = g(e, "sourceY", 7), h = g(e, "targetPosition", 7), p = g(e, "targetX", 7), v = g(e, "targetY", 7), m = /* @__PURE__ */ $(() => Zl({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ $(() => mo(c(m), 3)), w = /* @__PURE__ */ $(() => c(y)[0]), b = /* @__PURE__ */ $(() => c(y)[1]), C = /* @__PURE__ */ $(() => c(y)[2]);
  var E = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(k) {
      n(k), f();
    },
    get label() {
      return r();
    },
    set label(k) {
      r(k), f();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(k) {
      o(k), f();
    },
    get style() {
      return i();
    },
    set style(k) {
      i(k), f();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), f();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), f();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(k) {
      l(k), f();
    },
    get sourceX() {
      return u();
    },
    set sourceX(k) {
      u(k), f();
    },
    get sourceY() {
      return d();
    },
    set sourceY(k) {
      d(k), f();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(k) {
      h(k), f();
    },
    get targetX() {
      return p();
    },
    set targetX(k) {
      p(k), f();
    },
    get targetY() {
      return v();
    },
    set targetY(k) {
      v(k), f();
    }
  };
  return gi(t, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(C);
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
  }), le(E);
}
se(
  wp,
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
function bp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), p = /* @__PURE__ */ $(() => rp({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ $(() => mo(c(p), 3)), m = /* @__PURE__ */ $(() => c(v)[0]), y = /* @__PURE__ */ $(() => c(v)[1]), w = /* @__PURE__ */ $(() => c(v)[2]);
  var b = {
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
    get targetX() {
      return o();
    },
    set targetX(C) {
      o(C), f();
    },
    get targetY() {
      return i();
    },
    set targetY(C) {
      i(C), f();
    },
    get label() {
      return s();
    },
    set label(C) {
      s(C), f();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), f();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), f();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), f();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), f();
    },
    get style() {
      return h();
    },
    set style(C) {
      h(C), f();
    }
  };
  return gi(t, {
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
se(
  bp,
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
function xp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "sourcePosition", 7), i = g(e, "targetX", 7), s = g(e, "targetY", 7), a = g(e, "targetPosition", 7), l = g(e, "label", 7), u = g(e, "labelStyle", 7), d = g(e, "markerStart", 7), h = g(e, "markerEnd", 7), p = g(e, "interactionWidth", 7), v = g(e, "style", 7), m = /* @__PURE__ */ $(() => Zl({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ $(() => mo(c(m), 3)), w = /* @__PURE__ */ $(() => c(y)[0]), b = /* @__PURE__ */ $(() => c(y)[1]), C = /* @__PURE__ */ $(() => c(y)[2]);
  var E = {
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
    get sourcePosition() {
      return o();
    },
    set sourcePosition(k) {
      o(k), f();
    },
    get targetX() {
      return i();
    },
    set targetX(k) {
      i(k), f();
    },
    get targetY() {
      return s();
    },
    set targetY(k) {
      s(k), f();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(k) {
      a(k), f();
    },
    get label() {
      return l();
    },
    set label(k) {
      l(k), f();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(k) {
      u(k), f();
    },
    get markerStart() {
      return d();
    },
    set markerStart(k) {
      d(k), f();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(k) {
      h(k), f();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(k) {
      p(k), f();
    },
    get style() {
      return v();
    },
    set style(k) {
      v(k), f();
    }
  };
  return gi(t, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(C);
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
  }), le(E);
}
se(
  xp,
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
class P2 extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ me(0);
  #n = /* @__PURE__ */ me(0);
  #r = Gn || -1;
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
    return Gn === this.#r ? /* @__PURE__ */ me(e) : Jn(e);
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
      o = this.#o(0), r.set(e, o), K(this.#n, super.size), Sn(a);
    else if (i !== n) {
      Sn(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && Sn(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), K(this.#n, super.size), K(r, -1), Sn(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      K(this.#n, 0);
      for (var n of e.values())
        K(n, -1);
      Sn(this.#t), e.clear();
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
class O2 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = Fr(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const N2 = /\(.+\)/, T2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Cp extends O2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = N2.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => T2.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => pt(o, "change", i)
    );
  }
}
function D2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Fl(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function kc(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = t, u = /* @__PURE__ */ new Map();
  for (const d of e) {
    const h = r.get(d.source), p = r.get(d.target);
    if (!h || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: C } = t;
      if (Lw({
        sourceNode: h,
        targetNode: p,
        width: b,
        height: C,
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
    const m = Rw({
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
      zIndex: Aw({
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
const kp = {
  input: pp,
  output: fp,
  default: Yl,
  group: gp
}, $p = {
  straight: bp,
  smoothstep: wp,
  default: Ul,
  step: xp
};
function A2(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = hi(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return jl(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function L2(t) {
  class e {
    #e = /* @__PURE__ */ $(() => t.props.id ?? "1");
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
    #i = /* @__PURE__ */ $(() => {
      const r = Xw(t.nodes, this.nodeLookup, this.parentLookup, {
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
    #a = /* @__PURE__ */ $(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      K(this.#a, r);
    }
    #s = /* @__PURE__ */ $(() => (e2(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
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
    #l = /* @__PURE__ */ $(() => {
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
    #u = /* @__PURE__ */ $(() => {
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
        h = D2(s, b, y, w), p = kc({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, p = kc(v);
      return { nodes: h, edges: p };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      K(this.#c, r);
    }
    #d = /* @__PURE__ */ $(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      K(this.#d, r);
    }
    #h = /* @__PURE__ */ $(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#h);
    }
    set nodesConnectable(r) {
      K(this.#h, r);
    }
    #f = /* @__PURE__ */ $(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#f);
    }
    set elementsSelectable(r) {
      K(this.#f, r);
    }
    #p = /* @__PURE__ */ $(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      K(this.#p, r);
    }
    #y = /* @__PURE__ */ $(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      K(this.#y, r);
    }
    #v = /* @__PURE__ */ $(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      K(this.#v, r);
    }
    #w = /* @__PURE__ */ $(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      K(this.#w, r);
    }
    #m = /* @__PURE__ */ $(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      K(this.#m, r);
    }
    #g = /* @__PURE__ */ $(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      K(this.#g, r);
    }
    #b = /* @__PURE__ */ $(() => t.props.nodeExtent ?? Ra);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      K(this.#b, r);
    }
    #x = /* @__PURE__ */ $(() => t.props.translateExtent ?? Ra);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      K(this.#x, r);
    }
    #C = /* @__PURE__ */ $(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      K(this.#C, r);
    }
    #k = /* @__PURE__ */ $(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#k);
    }
    set nodeDragThreshold(r) {
      K(this.#k, r);
    }
    #$ = /* @__PURE__ */ $(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      K(this.#$, r);
    }
    #S = /* @__PURE__ */ $(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#S);
    }
    set autoPanOnConnect(r) {
      K(this.#S, r);
    }
    #_ = /* @__PURE__ */ $(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#_);
    }
    set autoPanOnNodeFocus(r) {
      K(this.#_, r);
    }
    #E = /* @__PURE__ */ $(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      K(this.#E, r);
    }
    #P = /* @__PURE__ */ $(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      K(this.#P, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #O = /* @__PURE__ */ $(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#O);
    }
    set snapGrid(r) {
      K(this.#O, r);
    }
    #N = /* @__PURE__ */ me(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      K(this.#N, r);
    }
    #T = /* @__PURE__ */ me(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      K(this.#T, r);
    }
    #D = /* @__PURE__ */ me(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      K(this.#D, r);
    }
    #A = /* @__PURE__ */ me(!1);
    get multiselectionKeyPressed() {
      return c(this.#A);
    }
    set multiselectionKeyPressed(r) {
      K(this.#A, r);
    }
    #L = /* @__PURE__ */ me(!1);
    get deleteKeyPressed() {
      return c(this.#L);
    }
    set deleteKeyPressed(r) {
      K(this.#L, r);
    }
    #I = /* @__PURE__ */ me(!1);
    get panActivationKeyPressed() {
      return c(this.#I);
    }
    set panActivationKeyPressed(r) {
      K(this.#I, r);
    }
    #M = /* @__PURE__ */ me(!1);
    get zoomActivationKeyPressed() {
      return c(this.#M);
    }
    set zoomActivationKeyPressed(r) {
      K(this.#M, r);
    }
    #z = /* @__PURE__ */ me(null);
    get selectionRectMode() {
      return c(this.#z);
    }
    set selectionRectMode(r) {
      K(this.#z, r);
    }
    #V = /* @__PURE__ */ me("");
    get ariaLiveMessage() {
      return c(this.#V);
    }
    set ariaLiveMessage(r) {
      K(this.#V, r);
    }
    #H = /* @__PURE__ */ $(() => t.props.selectionMode ?? cs.Partial);
    get selectionMode() {
      return c(this.#H);
    }
    set selectionMode(r) {
      K(this.#H, r);
    }
    #B = /* @__PURE__ */ $(() => ({ ...kp, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#B);
    }
    set nodeTypes(r) {
      K(this.#B, r);
    }
    #R = /* @__PURE__ */ $(() => ({ ...$p, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      K(this.#R, r);
    }
    #K = /* @__PURE__ */ $(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#K);
    }
    set noPanClass(r) {
      K(this.#K, r);
    }
    #F = /* @__PURE__ */ $(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#F);
    }
    set noDragClass(r) {
      K(this.#F, r);
    }
    #j = /* @__PURE__ */ $(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#j);
    }
    set noWheelClass(r) {
      K(this.#j, r);
    }
    #Z = /* @__PURE__ */ $(() => Nw(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Z);
    }
    set ariaLabelConfig(r) {
      K(this.#Z, r);
    }
    #W = /* @__PURE__ */ me(A2(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
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
    #q = /* @__PURE__ */ me(
      // _connection is viewport independent and originating from XYHandle
      Ka
    );
    get _connection() {
      return c(this.#q);
    }
    set _connection(r) {
      K(this.#q, r);
    }
    #X = /* @__PURE__ */ $(() => this._connection.inProgress ? {
      ...this._connection,
      to: fi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#X);
    }
    set connection(r) {
      K(this.#X, r);
    }
    #Y = /* @__PURE__ */ $(() => t.props.connectionMode ?? co.Strict);
    get connectionMode() {
      return c(this.#Y);
    }
    set connectionMode(r) {
      K(this.#Y, r);
    }
    #U = /* @__PURE__ */ $(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      K(this.#U, r);
    }
    #G = /* @__PURE__ */ $(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      K(this.#G, r);
    }
    #Q = /* @__PURE__ */ $(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#Q);
    }
    set selectNodesOnDrag(r) {
      K(this.#Q, r);
    }
    #J = /* @__PURE__ */ $(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      K(this.#J, r);
    }
    #ee = /* @__PURE__ */ $(() => Kw(t.edges, {
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
    #te = /* @__PURE__ */ $(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      K(this.#te, r);
    }
    #ne = /* @__PURE__ */ $(() => t.props.onflowerror ?? _w);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      K(this.#ne, r);
    }
    #re = /* @__PURE__ */ $(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      K(this.#re, r);
    }
    #oe = /* @__PURE__ */ $(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      K(this.#oe, r);
    }
    #ie = /* @__PURE__ */ $(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      K(this.#ie, r);
    }
    #se = /* @__PURE__ */ $(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      K(this.#se, r);
    }
    #ae = /* @__PURE__ */ $(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      K(this.#ae, r);
    }
    #le = /* @__PURE__ */ $(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      K(this.#le, r);
    }
    #ue = /* @__PURE__ */ $(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      K(this.#ue, r);
    }
    #ce = /* @__PURE__ */ $(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      K(this.#ce, r);
    }
    #de = /* @__PURE__ */ $(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      K(this.#de, r);
    }
    #he = /* @__PURE__ */ $(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      K(this.#he, r);
    }
    #pe = /* @__PURE__ */ $(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      K(this.#pe, r);
    }
    #fe = /* @__PURE__ */ $(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#fe);
    }
    set onclickconnectstart(r) {
      K(this.#fe, r);
    }
    #ge = /* @__PURE__ */ $(() => t.props.onclickconnectend);
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
    #me = /* @__PURE__ */ $(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      K(this.#me, r);
    }
    #ye = /* @__PURE__ */ $(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      K(this.#ye, r);
    }
    #we = /* @__PURE__ */ $(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      K(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await $w(
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
    _prefersDark = new Cp("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ $(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      K(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ka, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function xn() {
  const t = vn(fs);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const fs = Symbol();
function Sp(t) {
  const e = L2(t);
  function n(T) {
    e.nodeTypes = {
      ...kp,
      ...T
    };
  }
  function r(T) {
    e.edgeTypes = {
      ...$p,
      ...T
    };
  }
  function o(T) {
    e.edges = zw(T, e.edges);
  }
  const i = (T, _ = !1) => {
    e.nodes = e.nodes.map((S) => {
      const z = T.get(S.id);
      return z ? { ...S, position: z.position, dragging: _ } : S;
    });
  };
  function s(T) {
    const { changes: _, updatedInternals: S } = Qw(T, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!S)
      return;
    Ww(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const z = /* @__PURE__ */ new Map();
    for (const P of _) {
      const A = e.nodeLookup.get(P.id)?.internals.userNode;
      if (!A)
        continue;
      const D = { ...A };
      switch (P.type) {
        case "dimensions": {
          const B = { ...D.measured, ...P.dimensions };
          P.setAttributes && (D.width = P.dimensions?.width ?? D.width, D.height = P.dimensions?.height ?? D.height), D.measured = B;
          break;
        }
        case "position":
          D.position = P.position ?? D.position;
          break;
      }
      z.set(P.id, D);
    }
    e.nodes = e.nodes.map((P) => z.get(P.id) ?? P);
  }
  function a(T) {
    const _ = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = T, e.fitViewResolver = _, e.nodes = [...e.nodes], _.promise;
  }
  async function l(T, _, S) {
    const z = typeof S?.zoom < "u" ? S.zoom : e.maxZoom, P = e.panZoom;
    return P ? (await P.setViewport({
      x: e.width / 2 - T * z,
      y: e.height / 2 - _ * z,
      zoom: z
    }, { duration: S?.duration, ease: S?.ease, interpolate: S?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(T, _) {
    const S = e.panZoom;
    return S ? S.scaleBy(T, _) : Promise.resolve(!1);
  }
  function d(T) {
    return u(1.2, T);
  }
  function h(T) {
    return u(1 / 1.2, T);
  }
  function p(T) {
    const _ = e.panZoom;
    _ && (_.setScaleExtent([T, e.maxZoom]), e.minZoom = T);
  }
  function v(T) {
    const _ = e.panZoom;
    _ && (_.setScaleExtent([e.minZoom, T]), e.maxZoom = T);
  }
  function m(T) {
    const _ = e.panZoom;
    _ && (_.setTranslateExtent(T), e.translateExtent = T);
  }
  function y(T, _ = null) {
    let S = !1;
    const z = T.map((P) => (!_ || _.has(P.id)) && P.selected ? (S = !0, { ...P, selected: !1 }) : P);
    return [S, z];
  }
  function w(T) {
    const _ = T?.nodes ? new Set(T.nodes.map((B) => B.id)) : null, [S, z] = y(e.nodes, _);
    S && (e.nodes = z);
    const P = T?.edges ? new Set(T.edges.map((B) => B.id)) : null, [A, D] = y(e.edges, P);
    A && (e.edges = D);
  }
  function b(T) {
    const _ = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((S) => {
      const z = T.includes(S.id), P = _ && S.selected || z;
      return !!S.selected !== P ? { ...S, selected: P } : S;
    }), _ || w({ nodes: [] });
  }
  function C(T) {
    const _ = e.multiselectionKeyPressed;
    e.edges = e.edges.map((S) => {
      const z = T.includes(S.id), P = _ && S.selected || z;
      return !!S.selected !== P ? { ...S, selected: P } : S;
    }), _ || w({ edges: [] });
  }
  function E(T, _, S) {
    const z = e.nodeLookup.get(T);
    if (!z) {
      console.warn("012", Xo.error012(T));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, z.selected ? (_ || z.selected && e.multiselectionKeyPressed) && (w({ nodes: [z], edges: [] }), requestAnimationFrame(() => S?.blur())) : b([T]);
  }
  function k(T) {
    const _ = e.edgeLookup.get(T);
    if (!_) {
      console.warn("012", Xo.error012(T));
      return;
    }
    (_.selectable || e.elementsSelectable && typeof _.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, _.selected ? _.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [_] }) : C([T]));
  }
  function x(T, _) {
    const { nodeExtent: S, snapGrid: z, nodeOrigin: P, nodeLookup: A, nodesDraggable: D, onerror: B } = e, X = /* @__PURE__ */ new Map(), U = z?.[0] ?? 5, I = z?.[1] ?? 5, Y = T.x * U * _, q = T.y * I * _;
    for (const R of A.values()) {
      if (!(R.selected && (R.draggable || D && typeof R.draggable > "u")))
        continue;
      let W = {
        x: R.internals.positionAbsolute.x + Y,
        y: R.internals.positionAbsolute.y + q
      };
      z && (W = pi(W, z));
      const { position: J, positionAbsolute: te } = Wh({
        nodeId: R.id,
        nextPosition: W,
        nodeLookup: A,
        nodeExtent: S,
        nodeOrigin: P,
        onError: B
      });
      R.position = J, R.internals.positionAbsolute = te, X.set(R.id, R);
    }
    i(X);
  }
  function N(T) {
    return Jw({
      delta: T,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const M = (T) => {
    e._connection = { ...T };
  };
  function j() {
    e._connection = Ka;
  }
  function H() {
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
    addSelectedEdges: C,
    handleNodeSelection: E,
    handleEdgeSelection: k,
    moveSelectedNodes: x,
    panBy: N,
    updateConnection: M,
    cancelConnection: j,
    reset: H
  });
}
function I2(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = e, p = y2({
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
var M2 = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function _p(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), p = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), C = /* @__PURE__ */ $(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ $(() => n().panActivationKeyPressed || u());
  const { viewport: k } = n();
  let x = !1;
  Ie(() => {
    !x && n().viewportInitialized && (w()?.(), x = !0);
  });
  var N = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), f();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H) {
      r(H), f();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H) {
      o(H), f();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H) {
      i(H), f();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H) {
      s(H), f();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H) {
      a(H), f();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H) {
      l(H), f();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(H) {
      u(H), f();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(H) {
      d(H), f();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(H) {
      h(H), f();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(H) {
      p(H), f();
    },
    get onmovestart() {
      return v();
    },
    set onmovestart(H) {
      v(H), f();
    },
    get onmove() {
      return m();
    },
    set onmove(H) {
      m(H), f();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(H) {
      y(H), f();
    },
    get oninit() {
      return w();
    },
    set oninit(H) {
      w(H), f();
    },
    get children() {
      return b();
    },
    set children(H) {
      b(H), f();
    }
  }, M = M2(), j = Z(M);
  return Ee(j, b), F(M), Ot(M, (H, T) => I2?.(H, T), () => ({
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
    onPanZoomStart: v(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(E),
    panOnDrag: c(C),
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
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), O(t, M), le(N);
}
se(
  _p,
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
function $c(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function Sc(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function _c(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var z2 = /* @__PURE__ */ ee("<div><!></div>");
function Ep(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, p = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ $(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ $(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ $(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), C = !1;
  function E(A) {
    if (p = h?.getBoundingClientRect(), !p) return;
    const D = A.target === h, B = !D && !!A.target.closest(".nokey"), X = i() && D || n().selectionKeyPressed;
    if (B || !c(w) || !X || A.button !== 0 || !A.isPrimary)
      return;
    A.target?.setPointerCapture?.(A.pointerId), C = !1;
    const { x: U, y: I } = hn(A, p);
    n(n().selectionRect = { width: 0, height: 0, startX: U, startY: I, x: U, y: I }, !0), D || (A.stopPropagation(), A.preventDefault());
  }
  function k(A) {
    if (!c(w) || !p || !n().selectionRect)
      return;
    const D = hn(A, p), { startX: B = 0, startY: X = 0 } = n().selectionRect;
    if (!C) {
      const R = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(D.x - B, D.y - X) <= R)
        return;
      n().unselectNodesAndEdges(), l()?.(A);
    }
    C = !0;
    const U = {
      ...n().selectionRect,
      x: D.x < B ? D.x : B,
      y: D.y < X ? D.y : X,
      width: Math.abs(D.x - B),
      height: Math.abs(D.y - X)
    }, I = v, Y = m;
    v = new Set(Fl(
      n().nodeLookup,
      U,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === cs.Partial,
      !0
    ).map((R) => R.id));
    const q = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const R of v) {
      const W = n().connectionLookup.get(R);
      if (W)
        for (const { edgeId: J } of W.values()) {
          const te = n().edgeLookup.get(J);
          te && (te.selectable ?? q) && m.add(J);
        }
    }
    _c(I, v) || n(n().nodes = n().nodes.map(Sc(v)), !0), _c(Y, m) || n(n().edges = n().edges.map(Sc(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = U, !0);
  }
  function x(A) {
    A.button === 0 && (A.target?.releasePointerCapture?.(A.pointerId), !C && A.target === h && j?.(A), n(n().selectionRect = null, !0), C && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), C && u()?.(A));
  }
  const N = (A) => {
    if (Array.isArray(c(y)) && c(y).includes(2)) {
      A.preventDefault();
      return;
    }
    a()?.({ event: A });
  }, M = (A) => {
    C && (A.stopPropagation(), C = !1);
  };
  function j(A) {
    if (C || n().connection.inProgress) {
      C = !1;
      return;
    }
    s()?.({ event: A }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var H = {
    get store() {
      return n();
    },
    set store(A) {
      n(A), f();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(A = !0) {
      r(A), f();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(A = 1) {
      o(A), f();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(A) {
      i(A), f();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(A) {
      s(A), f();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(A) {
      a(A), f();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(A) {
      l(A), f();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(A) {
      u(A), f();
    },
    get children() {
      return d();
    },
    set children(A) {
      d(A), f();
    }
  }, T = z2();
  let _;
  var S = /* @__PURE__ */ $(() => c(b) ? void 0 : $c(j, h));
  T.__click = function(...A) {
    c(S)?.apply(this, A);
  }, T.__pointermove = function(...A) {
    (c(b) ? k : void 0)?.apply(this, A);
  }, T.__pointerup = function(...A) {
    (c(b) ? x : void 0)?.apply(this, A);
  };
  var z = /* @__PURE__ */ $(() => $c(N, h));
  T.__contextmenu = function(...A) {
    c(z)?.apply(this, A);
  };
  var P = Z(T);
  return Ee(P, d), F(T), Et(T, (A) => h = A, () => h), Pe((A) => _ = jt(T, 1, "svelte-flow__pane svelte-flow__container", null, _, A), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), ts(
    "pointerdown",
    T,
    function(...A) {
      (c(b) ? E : void 0)?.apply(this, A);
    },
    !0
  ), ts(
    "click",
    T,
    function(...A) {
      (c(b) ? M : void 0)?.apply(this, A);
    },
    !0
  ), O(t, T), le(H);
}
qr(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  Ep,
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
var V2 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Pp(t, e) {
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
  }, i = V2();
  let s;
  var a = Z(i);
  return Ee(a, r), F(i), Pe(() => s = _t(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), O(t, i), le(o);
}
se(Pp, { store: {}, children: {} }, [], [], !0);
function Op(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = o2({
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
var H2 = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), B2 = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const R2 = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Np(t, e) {
  ae(e, !0), Ue(t, R2);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), f();
    }
  }, o = B2(), i = Q(o), s = Z(i, !0);
  F(i);
  var a = V(i, 2), l = Z(a, !0);
  F(a);
  var u = V(a, 2);
  {
    var d = (h) => {
      var p = H2(), v = Z(p, !0);
      F(p), Pe(() => {
        _e(p, "id", `${K2}-${n().flowId}`), Je(v, n().ariaLiveMessage);
      }), O(h, p);
    };
    ie(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Pe(() => {
    _e(i, "id", `${Tp}-${n().flowId}`), Je(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), _e(a, "id", `${Dp}-${n().flowId}`), Je(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(t, o), le(r);
}
se(Np, { store: {} }, [], [], !0);
const Tp = "svelte-flow__node-desc", Dp = "svelte-flow__edge-desc", K2 = "svelte-flow__aria-live";
var F2 = /* @__PURE__ */ ee("<div><!></div>");
function Ap(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), p = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ $(() => At(r().data, () => ({}), !0)), y = /* @__PURE__ */ $(() => At(r().selected, !1)), w = /* @__PURE__ */ $(() => r().draggable), b = /* @__PURE__ */ $(() => r().selectable), C = /* @__PURE__ */ $(() => At(r().deletable, !0)), E = /* @__PURE__ */ $(() => r().connectable), k = /* @__PURE__ */ $(() => r().focusable), x = /* @__PURE__ */ $(() => At(r().hidden, !1)), N = /* @__PURE__ */ $(() => At(r().dragging, !1)), M = /* @__PURE__ */ $(() => At(r().style, "")), j = /* @__PURE__ */ $(() => r().class), H = /* @__PURE__ */ $(() => At(r().type, "default")), T = /* @__PURE__ */ $(() => r().parentId), _ = /* @__PURE__ */ $(() => r().sourcePosition), S = /* @__PURE__ */ $(() => r().targetPosition), z = /* @__PURE__ */ $(() => At(r().measured, () => ({ width: 0, height: 0 }), !0).width), P = /* @__PURE__ */ $(() => At(r().measured, () => ({ width: 0, height: 0 }), !0).height), A = /* @__PURE__ */ $(() => r().initialWidth), D = /* @__PURE__ */ $(() => r().initialHeight), B = /* @__PURE__ */ $(() => r().width), X = /* @__PURE__ */ $(() => r().height), U = /* @__PURE__ */ $(() => r().dragHandle), I = /* @__PURE__ */ $(() => At(r().internals.z, 0)), Y = /* @__PURE__ */ $(() => r().internals.positionAbsolute.x), q = /* @__PURE__ */ $(() => r().internals.positionAbsolute.y), R = /* @__PURE__ */ $(() => r().internals.userNode), { id: W } = r(), J = /* @__PURE__ */ $(() => c(w) ?? n().nodesDraggable), te = /* @__PURE__ */ $(() => c(b) ?? n().elementsSelectable), oe = /* @__PURE__ */ $(() => c(E) ?? n().nodesConnectable), L = /* @__PURE__ */ $(() => Uh(r())), ne = /* @__PURE__ */ $(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ $(() => c(L) && c(ne)), he = /* @__PURE__ */ $(() => c(k) ?? n().nodesFocusable);
  function re(ve) {
    return n().parentLookup.has(ve);
  }
  let ue = /* @__PURE__ */ $(() => re(W)), ge = /* @__PURE__ */ me(null), ye = null, be = c(H), de = c(_), we = c(S), Te = /* @__PURE__ */ $(() => n().nodeTypes[c(H)] ?? Yl), G = /* @__PURE__ */ $(() => n().ariaLabelConfig);
  Mr("svelteflow__node_connectable", {
    get value() {
      return c(oe);
    }
  }), Mr("svelteflow__node_id", W);
  let Me = /* @__PURE__ */ $(() => {
    const ve = c(z) === void 0 ? c(B) ?? c(A) : c(B), Oe = c(P) === void 0 ? c(X) ?? c(D) : c(X);
    if (!(ve === void 0 && Oe === void 0 && c(M) === void 0))
      return `${c(M)};${ve ? `width:${In(ve)};` : ""}${Oe ? `height:${In(Oe)};` : ""}`;
  });
  Ie(() => {
    (c(H) !== be || c(_) !== de || c(S) !== we) && c(ge) !== null && requestAnimationFrame(() => {
      c(ge) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[W, { id: W, nodeElement: c(ge), force: !0 }]]));
    }), be = c(H), de = c(_), we = c(S);
  }), Ie(() => {
    o() && (!c(fe) || c(ge) !== ye) && (ye && o().unobserve(ye), c(ge) && o().observe(c(ge)), ye = c(ge));
  }), li(() => {
    ye && o()?.unobserve(ye);
  });
  function ke(ve) {
    c(te) && (!n().selectNodesOnDrag || !c(J) || n().nodeDragThreshold > 0) && n().handleNodeSelection(W), s()?.({ node: c(R), event: ve });
  }
  function Ne(ve) {
    if (!(Jh(ve) || n().disableKeyboardA11y))
      if (jh.includes(ve.key) && c(te)) {
        const Oe = ve.key === "Escape";
        n().handleNodeSelection(W, Oe, c(ge));
      } else c(J) && r().selected && Object.prototype.hasOwnProperty.call(ps, ve.key) && (ve.preventDefault(), n(
        n().ariaLiveMessage = c(G)["node.a11yDescription.ariaLiveMessage"]({
          direction: ve.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(ps[ve.key], ve.shiftKey ? 4 : 1));
  }
  const ze = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ge)?.matches(":focus-visible"))
      return;
    const { width: ve, height: Oe, viewport: et } = n();
    Fl(/* @__PURE__ */ new Map([[W, r()]]), { x: 0, y: 0, width: ve, height: Oe }, [et.x, et.y, et.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: et.zoom });
  };
  var Xe = {
    get store() {
      return n();
    },
    set store(ve) {
      n(ve), f();
    },
    get node() {
      return r();
    },
    set node(ve) {
      r(ve), f();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ve) {
      o(ve), f();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ve) {
      i(ve), f();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ve) {
      s(ve), f();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ve) {
      a(ve), f();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ve) {
      l(ve), f();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ve) {
      u(ve), f();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ve) {
      d(ve), f();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(ve) {
      h(ve), f();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(ve) {
      p(ve), f();
    },
    get onnodecontextmenu() {
      return v();
    },
    set onnodecontextmenu(ve) {
      v(ve), f();
    }
  }, rt = ce(), Ge = Q(rt);
  {
    var ot = (ve) => {
      var Oe = F2();
      Ye(Oe, () => ({
        "data-id": W,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(H)}`,
          c(j)
        ],
        style: c(Me),
        onclick: ke,
        onpointerenter: d() ? (je) => d()({ node: c(R), event: je }) : void 0,
        onpointerleave: h() ? (je) => h()({ node: c(R), event: je }) : void 0,
        onpointermove: p() ? (je) => p()({ node: c(R), event: je }) : void 0,
        oncontextmenu: v() ? (je) => v()({ node: c(R), event: je }) : void 0,
        onkeydown: c(he) ? Ne : void 0,
        onfocus: c(he) ? ze : void 0,
        tabIndex: c(he) ? 0 : void 0,
        role: r().ariaRole ?? (c(he) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Tp}-${n().flowId}`,
        ...r().domAttributes,
        [dr]: {
          dragging: c(N),
          selected: c(y),
          draggable: c(J),
          connectable: c(oe),
          selectable: c(te),
          nopan: c(J),
          parent: c(ue)
        },
        [_n]: {
          "z-index": c(I),
          transform: `translate(${c(Y) ?? ""}px, ${c(q) ?? ""}px)`,
          visibility: c(L) ? "visible" : "hidden"
        }
      }));
      var et = Z(Oe);
      bt(et, () => c(Te), (je, at) => {
        at(je, {
          get data() {
            return c(m);
          },
          get id() {
            return W;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(te);
          },
          get deletable() {
            return c(C);
          },
          get sourcePosition() {
            return c(_);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(I);
          },
          get dragging() {
            return c(N);
          },
          get draggable() {
            return c(J);
          },
          get dragHandle() {
            return c(U);
          },
          get parentId() {
            return c(T);
          },
          get type() {
            return c(H);
          },
          get isConnectable() {
            return c(oe);
          },
          get positionAbsoluteX() {
            return c(Y);
          },
          get positionAbsoluteY() {
            return c(q);
          },
          get width() {
            return c(B);
          },
          get height() {
            return c(X);
          }
        });
      }), F(Oe), Ot(Oe, (je, at) => Op?.(je, at), () => ({
        nodeId: W,
        isSelectable: c(te),
        disabled: !c(J),
        handleSelector: c(U),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (je, at, Dt, tt) => {
          a()?.({ event: je, targetNode: Dt, nodes: tt });
        },
        onDragStart: (je, at, Dt, tt) => {
          l()?.({ event: je, targetNode: Dt, nodes: tt });
        },
        onDragStop: (je, at, Dt, tt) => {
          u()?.({ event: je, targetNode: Dt, nodes: tt });
        },
        store: n()
      })), Et(Oe, (je) => K(ge, je), () => c(ge)), O(ve, Oe);
    };
    ie(Ge, (ve) => {
      c(x) || ve(ot);
    });
  }
  return O(t, rt), le(Xe);
}
se(
  Ap,
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
var j2 = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function Lp(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "nodeClickDistance", 7), o = g(e, "onnodeclick", 7), i = g(e, "onnodecontextmenu", 7), s = g(e, "onnodepointerenter", 7), a = g(e, "onnodepointermove", 7), l = g(e, "onnodepointerleave", 7), u = g(e, "onnodedrag", 7), d = g(e, "onnodedragstart", 7), h = g(e, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const C = b.target.getAttribute("data-id");
      w.set(C, { id: C, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  li(() => {
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
  }, m = j2();
  return Ct(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    Ap(y, {
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
  }), F(m), O(t, m), le(v);
}
se(
  Lp,
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
var Z2 = /* @__PURE__ */ xe('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Ip(t, e) {
  ae(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ $(() => n().source), u = /* @__PURE__ */ $(() => n().target), d = /* @__PURE__ */ $(() => n().sourceX), h = /* @__PURE__ */ $(() => n().sourceY), p = /* @__PURE__ */ $(() => n().targetX), v = /* @__PURE__ */ $(() => n().targetY), m = /* @__PURE__ */ $(() => n().sourcePosition), y = /* @__PURE__ */ $(() => n().targetPosition), w = /* @__PURE__ */ $(() => At(n().animated, !1)), b = /* @__PURE__ */ $(() => At(n().selected, !1)), C = /* @__PURE__ */ $(() => n().label), E = /* @__PURE__ */ $(() => n().labelStyle), k = /* @__PURE__ */ $(() => At(n().data, () => ({}), !0)), x = /* @__PURE__ */ $(() => n().style), N = /* @__PURE__ */ $(() => n().interactionWidth), M = /* @__PURE__ */ $(() => At(n().type, "default")), j = /* @__PURE__ */ $(() => n().sourceHandle), H = /* @__PURE__ */ $(() => n().targetHandle), T = /* @__PURE__ */ $(() => n().markerStart), _ = /* @__PURE__ */ $(() => n().markerEnd), S = /* @__PURE__ */ $(() => n().selectable), z = /* @__PURE__ */ $(() => n().focusable), P = /* @__PURE__ */ $(() => At(n().deletable, !0)), A = /* @__PURE__ */ $(() => n().hidden), D = /* @__PURE__ */ $(() => n().zIndex), B = /* @__PURE__ */ $(() => n().class), X = /* @__PURE__ */ $(() => n().ariaLabel), U = null;
  const { id: I } = n();
  Mr("svelteflow__edge_id", I);
  let Y = /* @__PURE__ */ $(() => c(S) ?? r().elementsSelectable), q = /* @__PURE__ */ $(() => c(z) ?? r().edgesFocusable), R = /* @__PURE__ */ $(() => r().edgeTypes[c(M)] ?? Ul), W = /* @__PURE__ */ $(() => c(T) ? `url('#${ja(c(T), r().flowId)}')` : void 0), J = /* @__PURE__ */ $(() => c(_) ? `url('#${ja(c(_), r().flowId)}')` : void 0);
  function te(ue) {
    const ge = r().edgeLookup.get(I);
    ge && (c(Y) && r().handleEdgeSelection(I), o()?.({ event: ue, edge: ge }));
  }
  function oe(ue, ge) {
    const ye = r().edgeLookup.get(I);
    ye && ge({ event: ue, edge: ye });
  }
  function L(ue) {
    if (!r().disableKeyboardA11y && jh.includes(ue.key) && c(Y)) {
      const { unselectNodesAndEdges: ge, addSelectedEdges: ye } = r();
      ue.key === "Escape" ? (U?.blur(), ge({ edges: [n()] })) : ye([I]);
    }
  }
  var ne = {
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
  }, fe = ce(), he = Q(fe);
  {
    var re = (ue) => {
      var ge = Z2();
      let ye;
      var be = Z(ge);
      Ye(be, () => ({
        class: ["svelte-flow__edge", c(B)],
        "data-id": I,
        onclick: te,
        oncontextmenu: i() ? (we) => {
          oe(we, i());
        } : void 0,
        onpointerenter: s() ? (we) => {
          oe(we, s());
        } : void 0,
        onpointerleave: a() ? (we) => {
          oe(we, a());
        } : void 0,
        "aria-label": c(X) === null ? void 0 : c(X) ? c(X) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(q) ? `${Dp}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(q) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(q) ? L : void 0,
        tabindex: c(q) ? 0 : void 0,
        ...n().domAttributes,
        [dr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(Y)
        }
      }));
      var de = Z(be);
      bt(de, () => c(R), (we, Te) => {
        Te(we, {
          get id() {
            return I;
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
            return c(C);
          },
          get labelStyle() {
            return c(E);
          },
          get data() {
            return c(k);
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
            return c(P);
          },
          get type() {
            return c(M);
          },
          get sourceHandleId() {
            return c(j);
          },
          get targetHandleId() {
            return c(H);
          },
          get markerStart() {
            return c(W);
          },
          get markerEnd() {
            return c(J);
          }
        });
      }), F(be), Et(be, (we) => U = we, () => U), F(ge), Pe(() => ye = _t(ge, "", ye, { "z-index": c(D) })), O(ue, ge);
    };
    ie(he, (ue) => {
      c(A) || ue(re);
    });
  }
  return O(t, fe), le(ne);
}
se(
  Ip,
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
Dv();
var W2 = /* @__PURE__ */ xe("<defs></defs>");
function Mp(t, e) {
  ae(e, !1);
  const n = xn();
  Ll();
  var r = W2();
  Ct(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    zp(o, Ve(() => c(i)));
  }), F(r), O(t, r), le();
}
se(Mp, {}, [], [], !0);
var q2 = /* @__PURE__ */ xe('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), X2 = /* @__PURE__ */ xe('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Y2 = /* @__PURE__ */ xe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function zp(t, e) {
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
  }, h = Y2(), p = Z(h);
  {
    var v = (y) => {
      var w = q2();
      let b;
      Pe(() => {
        _e(w, "stroke-width", u()), b = _t(w, "", b, { stroke: l() });
      }), O(y, w);
    }, m = (y) => {
      var w = ce(), b = Q(w);
      {
        var C = (E) => {
          var k = X2();
          let x;
          Pe(() => {
            _e(k, "stroke-width", u()), x = _t(k, "", x, { stroke: l(), fill: l() });
          }), O(E, k);
        };
        ie(
          b,
          (E) => {
            r() === Yo.ArrowClosed && E(C);
          },
          !0
        );
      }
      O(y, w);
    };
    ie(p, (y) => {
      r() === Yo.Arrow ? y(v) : y(m, !1);
    });
  }
  return F(h), Pe(() => {
    _e(h, "id", n()), _e(h, "markerWidth", `${o()}`), _e(h, "markerHeight", `${i()}`), _e(h, "markerUnits", s()), _e(h, "orient", a());
  }), O(t, h), le(d);
}
se(
  zp,
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
var U2 = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Vp(t, e) {
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
  }, l = U2(), u = Z(l), d = Z(u);
  Mp(d, {}), F(u);
  var h = V(u, 2);
  return Ct(h, 17, () => n().visible.edges.values(), (p) => p.id, (p, v) => {
    Ip(p, {
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
  }), F(l), O(t, l), le(a);
}
se(
  Vp,
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
var G2 = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const Q2 = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function Gl(t, e) {
  ae(e, !0), Ue(t, Q2);
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
  }, l = ce(), u = Q(l);
  {
    var d = (h) => {
      var p = G2();
      let v;
      Pe((m) => v = _t(p, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : In(o()),
          height: typeof i() == "string" ? i() : In(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(h, p);
    };
    ie(u, (h) => {
      s() && h(d);
    });
  }
  return O(t, l), le(a);
}
se(Gl, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var J2 = /* @__PURE__ */ ee("<div><!></div>");
const eb = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function Hp(t, e) {
  ae(e, !0), Ue(t, eb);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ me(void 0);
  Ie(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ $(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = hi(n().nodeLookup, { filter: (C) => !!C.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const C = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: C, event: b });
  }
  function h(b) {
    const C = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: C, event: b });
  }
  function p(b) {
    Object.prototype.hasOwnProperty.call(ps, b.key) && (b.preventDefault(), n().moveSelectedNodes(ps[b.key], b.shiftKey ? 4 : 1));
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
  }, m = ce(), y = Q(m);
  {
    var w = (b) => {
      var C = J2();
      C.__contextmenu = d, C.__click = h, C.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : p)?.apply(this, x);
      };
      let E;
      var k = Z(C);
      Gl(k, { width: "100%", height: "100%", x: 0, y: 0 }), F(C), Ot(C, (x, N) => Op?.(x, N), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, N, M, j) => {
          r()?.({ event: x, targetNode: null, nodes: j });
        },
        onDragStart: (x, N, M, j) => {
          o()?.({ event: x, targetNode: null, nodes: j });
        },
        onDragStop: (x, N, M, j) => {
          i()?.({ event: x, targetNode: null, nodes: j });
        }
      })), Et(C, (x) => K(l, x), () => c(l)), Pe(
        (x) => {
          jt(C, 1, ar(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), _e(C, "role", n().disableKeyboardA11y ? void 0 : "button"), _e(C, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = _t(C, "", E, x);
        },
        [
          () => ({
            width: In(c(u).width),
            height: In(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), O(b, C);
    };
    ie(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && Zn(c(u).x) && Zn(c(u).y) && b(w);
    });
  }
  return O(t, m), le(v);
}
qr(["contextmenu", "click", "keydown"]);
se(
  Hp,
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
function tb(t) {
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
          const C = Array.isArray(p) ? p : [p];
          let E = !1;
          for (const k of C)
            if ((Array.isArray(k) ? k : [k]).reduce(
              (x, N) => x | tb(N),
              0
            ) === u) {
              E = !0;
              break;
            }
          if (!E) continue;
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
function wt() {
  const t = /* @__PURE__ */ $(xn), e = (i) => {
    const s = Cc(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? Ow(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return po(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = st(() => c(t).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Cc(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(t).edges = st(() => c(t).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && k2(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(t).nodes : Ec(c(t).nodeLookup, i),
    getEdge: (i) => c(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(t).edges : Ec(c(t).edgeLookup, i),
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
      const a = jl(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
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
      const l = cc(i), u = l ? i : e(i);
      return u ? (a || c(t).nodes).filter((d) => {
        const h = c(t).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const p = po(h), v = Uo(p, u);
        return s && v > 0 || v >= p.width * p.height || v >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = cc(i) ? i : e(i);
      if (!l)
        return !1;
      const u = Uo(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Sw({
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
      return fi(v, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = hs(i, [s, a, l]);
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
    getNodesBounds: (i) => xw(i, {
      nodeLookup: c(t).nodeLookup,
      nodeOrigin: c(t).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(t).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Ec(t, e) {
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
function Bp(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => Nr() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => Nr() ? "Meta" : "Control"), { deleteElements: l } = wt();
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
    return (Array.isArray(w) ? w : [w]).map((C) => {
      const E = h(C);
      return {
        key: E,
        modifier: d(C),
        enabled: E !== null,
        callback: b
      };
    });
  }
  function v() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const w = n().nodes.filter((C) => C.selected), b = n().edges.filter((C) => C.selected);
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
    set multiSelectionKey(w = Nr() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Nr() ? "Meta" : "Control") {
      a(w), f();
    }
  };
  return ts("blur", Vt, v), ts("contextmenu", Vt, v), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Jh(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ot(Vt, (w, b) => kn?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), le(y);
}
se(
  Bp,
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
var nb = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__connection-path"></path>'), rb = /* @__PURE__ */ xe('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Rp(t, e) {
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
      case Fn.Bezier: {
        const [v] = tp(p);
        return v;
      }
      case Fn.Straight: {
        const [v] = rp(p);
        return v;
      }
      case Fn.Step:
      case Fn.SmoothStep: {
        const [v] = Zl({
          ...p,
          borderRadius: r() === Fn.Step ? 0 : void 0
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
  }, u = ce(), d = Q(u);
  {
    var h = (p) => {
      var v = rb(), m = Z(v), y = Z(m);
      {
        var w = (C) => {
          var E = ce(), k = Q(E);
          bt(k, s, (x, N) => {
            N(x, {});
          }), O(C, E);
        }, b = (C) => {
          var E = nb();
          Pe(() => {
            _e(E, "d", c(a)), _t(E, i());
          }), O(C, E);
        };
        ie(y, (C) => {
          s() ? C(w) : C(b, !1);
        });
      }
      F(m), F(v), Pe(
        (C) => {
          _e(v, "width", n().width), _e(v, "height", n().height), _t(v, o()), jt(m, 0, C);
        },
        [
          () => ar([
            "svelte-flow__connection",
            ww(n().connection.isValid)
          ])
        ]
      ), O(p, v);
    };
    ie(d, (p) => {
      n().connection.inProgress && p(h);
    });
  }
  return O(t, u), le(l);
}
se(
  Rp,
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
var ob = /* @__PURE__ */ ee("<div><!></div>");
function vi(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "top-right"), r = g(e, "style", 7), o = g(e, "class", 7), i = g(e, "children", 7), s = /* @__PURE__ */ Le(e, [
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
  }, u = ob();
  Ye(u, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = Z(u);
  return Ee(d, () => i() ?? He), F(u), O(t, u), le(l);
}
se(vi, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var ib = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Kp(t, e) {
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
  }, i = ce(), s = Q(i);
  {
    var a = (l) => {
      vi(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = ib();
          O(u, h);
        },
        $$slots: { default: !0 }
      });
    };
    ie(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return O(t, i), le(o);
}
se(Kp, { proOptions: {}, position: {} }, [], [], !0);
var sb = /* @__PURE__ */ ee("<div><!></div>");
const ab = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Fp(t, e) {
  ae(e, !0), Ue(t, ab);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ $(() => u().class), h = /* @__PURE__ */ $(() => i1(u(), [
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
  }, m = sb();
  Ye(
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
      [_n]: w
    }),
    [
      () => ({ width: In(n()), height: In(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var y = Z(m);
  return Ee(y, () => l() ?? He), F(m), Et(m, (w) => i(w), () => i()), Bu(m, "clientHeight", a), Bu(m, "clientWidth", s), O(t, m), le(v);
}
se(
  Fp,
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
var lb = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), ub = /* @__PURE__ */ ee("<!> <!>", 1), cb = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function jp(t, e) {
  ae(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), p = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), C = g(e, "onnodedrag", 7), E = g(e, "onnodedragstart", 7), k = g(e, "onnodedragstop", 7), x = g(e, "onnodepointerenter", 7), N = g(e, "onnodepointermove", 7), M = g(e, "onnodepointerleave", 7), j = g(e, "onselectionclick", 7), H = g(e, "onselectioncontextmenu", 7), T = g(e, "onselectionstart", 7), _ = g(e, "onselectionend", 7), S = g(e, "onedgeclick", 7), z = g(e, "onedgecontextmenu", 7), P = g(e, "onedgepointerenter", 7), A = g(e, "onedgepointerleave", 7), D = g(e, "onpaneclick", 7), B = g(e, "onpanecontextmenu", 7), X = g(e, "panOnScrollMode", 23, () => Lr.Free), U = g(e, "preventScrolling", 7, !0), I = g(e, "zoomOnScroll", 7, !0), Y = g(e, "zoomOnDoubleClick", 7, !0), q = g(e, "zoomOnPinch", 7, !0), R = g(e, "panOnScroll", 7, !1), W = g(e, "panOnScrollSpeed", 7, 0.5), J = g(e, "panOnDrag", 7, !0), te = g(e, "selectionOnDrag", 7, !1), oe = g(e, "connectionLineComponent", 7), L = g(e, "connectionLineStyle", 7), ne = g(e, "connectionLineContainerStyle", 7), fe = g(e, "connectionLineType", 23, () => Fn.Bezier), he = g(e, "attributionPosition", 7), re = g(e, "children", 7), ue = g(e, "nodes", 31, () => ht([])), ge = g(e, "edges", 31, () => ht([])), ye = g(e, "viewport", 31, () => {
  }), be = /* @__PURE__ */ Le(e, [
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
  ]), de = Sp({
    props: be,
    width: n(),
    height: r(),
    get nodes() {
      return ue();
    },
    set nodes(G) {
      ue(G);
    },
    get edges() {
      return ge();
    },
    set edges(G) {
      ge(G);
    },
    get viewport() {
      return ye();
    },
    set viewport(G) {
      ye(G);
    }
  });
  const we = vn(fs);
  we && we.setStore && we.setStore(de), Mr(fs, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Ie(() => {
    const G = { nodes: de.selectedNodes, edges: de.selectedEdges };
    st(() => e.onselectionchange)?.(G);
    for (const Me of de.selectionChangeHandlers.values())
      Me(G);
  }), li(() => {
    de.reset();
  });
  var Te = {
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
      return C();
    },
    set onnodedrag(G) {
      C(G), f();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(G) {
      E(G), f();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(G) {
      k(G), f();
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
      return M();
    },
    set onnodepointerleave(G) {
      M(G), f();
    },
    get onselectionclick() {
      return j();
    },
    set onselectionclick(G) {
      j(G), f();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(G) {
      H(G), f();
    },
    get onselectionstart() {
      return T();
    },
    set onselectionstart(G) {
      T(G), f();
    },
    get onselectionend() {
      return _();
    },
    set onselectionend(G) {
      _(G), f();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(G) {
      S(G), f();
    },
    get onedgecontextmenu() {
      return z();
    },
    set onedgecontextmenu(G) {
      z(G), f();
    },
    get onedgepointerenter() {
      return P();
    },
    set onedgepointerenter(G) {
      P(G), f();
    },
    get onedgepointerleave() {
      return A();
    },
    set onedgepointerleave(G) {
      A(G), f();
    },
    get onpaneclick() {
      return D();
    },
    set onpaneclick(G) {
      D(G), f();
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
    set panOnScrollMode(G = Lr.Free) {
      X(G), f();
    },
    get preventScrolling() {
      return U();
    },
    set preventScrolling(G = !0) {
      U(G), f();
    },
    get zoomOnScroll() {
      return I();
    },
    set zoomOnScroll(G = !0) {
      I(G), f();
    },
    get zoomOnDoubleClick() {
      return Y();
    },
    set zoomOnDoubleClick(G = !0) {
      Y(G), f();
    },
    get zoomOnPinch() {
      return q();
    },
    set zoomOnPinch(G = !0) {
      q(G), f();
    },
    get panOnScroll() {
      return R();
    },
    set panOnScroll(G = !1) {
      R(G), f();
    },
    get panOnScrollSpeed() {
      return W();
    },
    set panOnScrollSpeed(G = 0.5) {
      W(G), f();
    },
    get panOnDrag() {
      return J();
    },
    set panOnDrag(G = !0) {
      J(G), f();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(G = !1) {
      te(G), f();
    },
    get connectionLineComponent() {
      return oe();
    },
    set connectionLineComponent(G) {
      oe(G), f();
    },
    get connectionLineStyle() {
      return L();
    },
    set connectionLineStyle(G) {
      L(G), f();
    },
    get connectionLineContainerStyle() {
      return ne();
    },
    set connectionLineContainerStyle(G) {
      ne(G), f();
    },
    get connectionLineType() {
      return fe();
    },
    set connectionLineType(G = Fn.Bezier) {
      fe(G), f();
    },
    get attributionPosition() {
      return he();
    },
    set attributionPosition(G) {
      he(G), f();
    },
    get children() {
      return re();
    },
    set children(G) {
      re(G), f();
    },
    get nodes() {
      return ue();
    },
    set nodes(G = []) {
      ue(G), f();
    },
    get edges() {
      return ge();
    },
    set edges(G = []) {
      ge(G), f();
    },
    get viewport() {
      return ye();
    },
    set viewport(G = void 0) {
      ye(G), f();
    }
  };
  return Fp(t, {
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
      return be;
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
    children: (G, Me) => {
      var ke = cb(), Ne = Q(ke);
      Bp(Ne, {
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
        set store(ot) {
          de = ot;
        }
      });
      var ze = V(Ne, 2);
      _p(ze, {
        get panOnScrollMode() {
          return X();
        },
        get preventScrolling() {
          return U();
        },
        get zoomOnScroll() {
          return I();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return q();
        },
        get panOnScroll() {
          return R();
        },
        get panOnScrollSpeed() {
          return W();
        },
        get panOnDrag() {
          return J();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return te();
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
        set store(ot) {
          de = ot;
        },
        children: (ot, ve) => {
          Ep(ot, {
            get onpaneclick() {
              return D();
            },
            get onpanecontextmenu() {
              return B();
            },
            get onselectionstart() {
              return T();
            },
            get onselectionend() {
              return _();
            },
            get panOnDrag() {
              return J();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return te();
            },
            get store() {
              return de;
            },
            set store(Oe) {
              de = Oe;
            },
            children: (Oe, et) => {
              var je = ub(), at = Q(je);
              Pp(at, {
                get store() {
                  return de;
                },
                set store(tt) {
                  de = tt;
                },
                children: (tt, Pt) => {
                  var it = lb(), lt = V(Q(it), 2);
                  Vp(lt, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return z();
                    },
                    get onedgepointerenter() {
                      return P();
                    },
                    get onedgepointerleave() {
                      return A();
                    },
                    get store() {
                      return de;
                    },
                    set store(sn) {
                      de = sn;
                    }
                  });
                  var gt = V(lt, 4);
                  Rp(gt, {
                    get type() {
                      return fe();
                    },
                    get LineComponent() {
                      return oe();
                    },
                    get containerStyle() {
                      return ne();
                    },
                    get style() {
                      return L();
                    },
                    get store() {
                      return de;
                    },
                    set store(sn) {
                      de = sn;
                    }
                  });
                  var cr = V(gt, 2);
                  Lp(cr, {
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
                      return M();
                    },
                    get onnodedrag() {
                      return C();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return de;
                    },
                    set store(sn) {
                      de = sn;
                    }
                  });
                  var $o = V(cr, 2);
                  Hp($o, {
                    get onselectionclick() {
                      return j();
                    },
                    get onselectioncontextmenu() {
                      return H();
                    },
                    get onnodedrag() {
                      return C();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return de;
                    },
                    set store(sn) {
                      de = sn;
                    }
                  }), $e(2), O(tt, it);
                },
                $$slots: { default: !0 }
              });
              var Dt = V(at, 2);
              {
                let tt = /* @__PURE__ */ $(() => !!(de.selectionRect && de.selectionRectMode === "user")), Pt = /* @__PURE__ */ $(() => de.selectionRect?.width), it = /* @__PURE__ */ $(() => de.selectionRect?.height), lt = /* @__PURE__ */ $(() => de.selectionRect?.x), gt = /* @__PURE__ */ $(() => de.selectionRect?.y);
                Gl(Dt, {
                  get isVisible() {
                    return c(tt);
                  },
                  get width() {
                    return c(Pt);
                  },
                  get height() {
                    return c(it);
                  },
                  get x() {
                    return c(lt);
                  },
                  get y() {
                    return c(gt);
                  }
                });
              }
              O(Oe, je);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Xe = V(ze, 2);
      Kp(Xe, {
        get proOptions() {
          return o();
        },
        get position() {
          return he();
        }
      });
      var rt = V(Xe, 2);
      Np(rt, {
        get store() {
          return de;
        }
      });
      var Ge = V(rt, 2);
      Ee(Ge, () => re() ?? He), O(G, ke);
    },
    $$slots: { default: !0 }
  }), le(Te);
}
se(
  jp,
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
function Zp(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ me(Sp({ props: {}, nodes: [], edges: [] }));
  Mr(fs, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      K(r, a);
    }
  }), li(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), f();
    }
  }, i = ce(), s = Q(i);
  return Ee(s, () => n() ?? He), O(t, i), le(o);
}
se(Zp, { children: {} }, [], [], !0);
var db = /* @__PURE__ */ ee("<button><!></button>");
function Ao(t, e) {
  ae(e, !0);
  let n = g(e, "class", 7), r = g(e, "bgColor", 7), o = g(e, "bgColorHover", 7), i = g(e, "color", 7), s = g(e, "colorHover", 7), a = g(e, "borderColor", 7), l = g(e, "onclick", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
  }, p = db();
  Ye(p, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [_n]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = Z(p);
  return Ee(v, () => u() ?? He), F(p), O(t, p), le(h);
}
se(
  Ao,
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
var hb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Wp(t) {
  var e = hb();
  O(t, e);
}
se(Wp, {}, [], [], !0);
var pb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function qp(t) {
  var e = pb();
  O(t, e);
}
se(qp, {}, [], [], !0);
var fb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Xp(t) {
  var e = fb();
  O(t, e);
}
se(Xp, {}, [], [], !0);
var gb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Yp(t) {
  var e = gb();
  O(t, e);
}
se(Yp, {}, [], [], !0);
var vb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Up(t) {
  var e = vb();
  O(t, e);
}
se(Up, {}, [], [], !0);
var mb = /* @__PURE__ */ ee("<!> <!>", 1), yb = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function Gp(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "bottom-left"), r = g(e, "orientation", 7, "vertical"), o = g(e, "showZoom", 7, !0), i = g(e, "showFitView", 7, !0), s = g(e, "showLock", 7, !0), a = g(e, "style", 7), l = g(e, "class", 7), u = g(e, "buttonBgColor", 7), d = g(e, "buttonBgColorHover", 7), h = g(e, "buttonColor", 7), p = g(e, "buttonColorHover", 7), v = g(e, "buttonBorderColor", 7), m = g(e, "fitViewOptions", 7), y = g(e, "children", 7), w = g(e, "before", 7), b = g(e, "after", 7), C = /* @__PURE__ */ Le(e, [
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
  ]), E = /* @__PURE__ */ $(xn);
  const k = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: p(),
    borderColor: v()
  };
  let x = /* @__PURE__ */ $(() => c(E).nodesDraggable || c(E).nodesConnectable || c(E).elementsSelectable), N = /* @__PURE__ */ $(() => c(E).viewport.zoom <= c(E).minZoom), M = /* @__PURE__ */ $(() => c(E).viewport.zoom >= c(E).maxZoom), j = /* @__PURE__ */ $(() => c(E).ariaLabelConfig), H = /* @__PURE__ */ $(() => r() === "horizontal" ? "horizontal" : "vertical");
  const T = () => {
    c(E).zoomIn();
  }, _ = () => {
    c(E).zoomOut();
  }, S = () => {
    c(E).fitView(m());
  }, z = () => {
    let A = !c(x);
    c(E).nodesDraggable = A, c(E).nodesConnectable = A, c(E).elementsSelectable = A;
  };
  var P = {
    get position() {
      return n();
    },
    set position(A = "bottom-left") {
      n(A), f();
    },
    get orientation() {
      return r();
    },
    set orientation(A = "vertical") {
      r(A), f();
    },
    get showZoom() {
      return o();
    },
    set showZoom(A = !0) {
      o(A), f();
    },
    get showFitView() {
      return i();
    },
    set showFitView(A = !0) {
      i(A), f();
    },
    get showLock() {
      return s();
    },
    set showLock(A = !0) {
      s(A), f();
    },
    get style() {
      return a();
    },
    set style(A) {
      a(A), f();
    },
    get class() {
      return l();
    },
    set class(A) {
      l(A), f();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(A) {
      u(A), f();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(A) {
      d(A), f();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(A) {
      h(A), f();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(A) {
      p(A), f();
    },
    get buttonBorderColor() {
      return v();
    },
    set buttonBorderColor(A) {
      v(A), f();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(A) {
      m(A), f();
    },
    get children() {
      return y();
    },
    set children(A) {
      y(A), f();
    },
    get before() {
      return w();
    },
    set before(A) {
      w(A), f();
    },
    get after() {
      return b();
    },
    set after(A) {
      b(A), f();
    }
  };
  {
    let A = /* @__PURE__ */ $(() => [
      "svelte-flow__controls",
      c(H),
      l()
    ]);
    vi(t, Ve(
      {
        get class() {
          return c(A);
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
      () => C,
      {
        children: (D, B) => {
          var X = yb(), U = Q(X);
          {
            var I = (he) => {
              var re = ce(), ue = Q(re);
              Ee(ue, w), O(he, re);
            };
            ie(U, (he) => {
              w() && he(I);
            });
          }
          var Y = V(U, 2);
          {
            var q = (he) => {
              var re = mb(), ue = Q(re);
              Ao(ue, Ve(
                {
                  onclick: T,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(j)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(M);
                  }
                },
                () => k,
                {
                  children: (ye, be) => {
                    Wp(ye);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ge = V(ue, 2);
              Ao(ge, Ve(
                {
                  onclick: _,
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
                () => k,
                {
                  children: (ye, be) => {
                    qp(ye);
                  },
                  $$slots: { default: !0 }
                }
              )), O(he, re);
            };
            ie(Y, (he) => {
              o() && he(q);
            });
          }
          var R = V(Y, 2);
          {
            var W = (he) => {
              Ao(he, Ve(
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
                () => k,
                {
                  children: (re, ue) => {
                    Xp(re);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ie(R, (he) => {
              i() && he(W);
            });
          }
          var J = V(R, 2);
          {
            var te = (he) => {
              Ao(he, Ve(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: z,
                  get title() {
                    return c(j)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.interactive.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (re, ue) => {
                    var ge = ce(), ye = Q(ge);
                    {
                      var be = (we) => {
                        Up(we);
                      }, de = (we) => {
                        Yp(we);
                      };
                      ie(ye, (we) => {
                        c(x) ? we(be) : we(de, !1);
                      });
                    }
                    O(re, ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ie(J, (he) => {
              s() && he(te);
            });
          }
          var oe = V(J, 2);
          {
            var L = (he) => {
              var re = ce(), ue = Q(re);
              Ee(ue, y), O(he, re);
            };
            ie(oe, (he) => {
              y() && he(L);
            });
          }
          var ne = V(oe, 2);
          {
            var fe = (he) => {
              var re = ce(), ue = Q(re);
              Ee(ue, b), O(he, re);
            };
            ie(ne, (he) => {
              b() && he(fe);
            });
          }
          O(D, X);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return le(P);
}
se(
  Gp,
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
var Wn;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(Wn || (Wn = {}));
var wb = /* @__PURE__ */ xe("<circle></circle>");
function Qp(t, e) {
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
  }, i = wb();
  return Pe(() => {
    _e(i, "cx", n()), _e(i, "cy", n()), _e(i, "r", n()), jt(i, 0, ar(["svelte-flow__background-pattern", "dots", r()]));
  }), O(t, i), le(o);
}
se(Qp, { radius: {}, class: {} }, [], [], !0);
var bb = /* @__PURE__ */ xe("<path></path>");
function Jp(t, e) {
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
  }, a = bb();
  return Pe(() => {
    _e(a, "stroke-width", n()), _e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), jt(a, 0, ar(["svelte-flow__background-pattern", o(), i()]));
  }), O(t, a), le(s);
}
se(Jp, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const xb = {
  [Wn.Dots]: 1,
  [Wn.Lines]: 1,
  [Wn.Cross]: 6
};
var Cb = /* @__PURE__ */ xe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function ef(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => Wn.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ $(xn), p = /* @__PURE__ */ $(() => r() === Wn.Dots), v = /* @__PURE__ */ $(() => r() === Wn.Cross), m = /* @__PURE__ */ $(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ $(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ $(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ $(() => (i() ?? xb[r()]) * c(h).viewport.zoom), C = /* @__PURE__ */ $(() => c(v) ? [c(b), c(b)] : c(w)), E = /* @__PURE__ */ $(() => c(p) ? [c(b) / 2, c(b) / 2] : [
    c(C)[0] / 2,
    c(C)[1] / 2
  ]);
  var k = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), f();
    },
    get variant() {
      return r();
    },
    set variant(S = Wn.Dots) {
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
  }, x = Cb();
  let N;
  var M = Z(x), j = Z(M);
  {
    var H = (S) => {
      {
        let z = /* @__PURE__ */ $(() => c(b) / 2);
        Qp(S, {
          get radius() {
            return c(z);
          },
          get class() {
            return u();
          }
        });
      }
    }, T = (S) => {
      Jp(S, {
        get dimensions() {
          return c(C);
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
    ie(j, (S) => {
      c(p) ? S(H) : S(T, !1);
    });
  }
  F(M);
  var _ = V(M);
  return F(x), Pe(() => {
    jt(x, 0, ar([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), N = _t(x, "", N, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), _e(M, "id", c(y)), _e(M, "x", c(h).viewport.x % c(w)[0]), _e(M, "y", c(h).viewport.y % c(w)[1]), _e(M, "width", c(w)[0]), _e(M, "height", c(w)[1]), _e(M, "patternTransform", `translate(-${c(E)[0]},-${c(E)[1]})`), _e(_, "fill", `url(#${c(y)})`);
  }), O(t, x), le(k);
}
se(
  ef,
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
var kb = /* @__PURE__ */ xe("<rect></rect>");
function tf(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "x", 7), o = g(e, "y", 7), i = g(e, "width", 7), s = g(e, "height", 7), a = g(e, "borderRadius", 7, 5), l = g(e, "color", 7), u = g(e, "shapeRendering", 7), d = g(e, "strokeColor", 7), h = g(e, "strokeWidth", 7, 2), p = g(e, "selected", 7), v = g(e, "class", 7), m = g(e, "nodeComponent", 7);
  var y = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), f();
    },
    get x() {
      return r();
    },
    set x(k) {
      r(k), f();
    },
    get y() {
      return o();
    },
    set y(k) {
      o(k), f();
    },
    get width() {
      return i();
    },
    set width(k) {
      i(k), f();
    },
    get height() {
      return s();
    },
    set height(k) {
      s(k), f();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(k = 5) {
      a(k), f();
    },
    get color() {
      return l();
    },
    set color(k) {
      l(k), f();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(k) {
      u(k), f();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(k) {
      d(k), f();
    },
    get strokeWidth() {
      return h();
    },
    set strokeWidth(k = 2) {
      h(k), f();
    },
    get selected() {
      return p();
    },
    set selected(k) {
      p(k), f();
    },
    get class() {
      return v();
    },
    set class(k) {
      v(k), f();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(k) {
      m(k), f();
    }
  }, w = ce(), b = Q(w);
  {
    var C = (k) => {
      const x = /* @__PURE__ */ $(m);
      var N = ce(), M = Q(N);
      bt(M, () => c(x), (j, H) => {
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
      }), O(k, N);
    }, E = (k) => {
      var x = kb();
      let N, M;
      Pe(() => {
        N = jt(x, 0, ar(["svelte-flow__minimap-node", v()]), null, N, { selected: p() }), _e(x, "x", r()), _e(x, "y", o()), _e(x, "rx", a()), _e(x, "ry", a()), _e(x, "width", i()), _e(x, "height", s()), _e(x, "shape-rendering", u()), M = _t(x, "", M, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), O(k, x);
    };
    ie(b, (k) => {
      m() ? k(C) : k(E, !1);
    });
  }
  return O(t, w), le(y);
}
se(
  tf,
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
function $b(t, e) {
  const n = c2({
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
var Sb = /* @__PURE__ */ xe("<title> </title>"), _b = /* @__PURE__ */ xe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Eb = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function nf(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "bottom-right"), r = g(e, "ariaLabel", 7), o = g(e, "nodeStrokeColor", 7, "transparent"), i = g(e, "nodeColor", 7), s = g(e, "nodeClass", 7, ""), a = g(e, "nodeBorderRadius", 7, 5), l = g(e, "nodeStrokeWidth", 7, 2), u = g(e, "nodeComponent", 7), d = g(e, "bgColor", 7), h = g(e, "maskColor", 7), p = g(e, "maskStrokeColor", 7), v = g(e, "maskStrokeWidth", 7), m = g(e, "width", 7, 200), y = g(e, "height", 7, 150), w = g(e, "pannable", 7, !0), b = g(e, "zoomable", 7, !0), C = g(e, "inversePan", 7), E = g(e, "zoomStep", 7), k = g(e, "class", 7), x = /* @__PURE__ */ Le(e, [
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
  ]), N = /* @__PURE__ */ $(xn), M = /* @__PURE__ */ $(() => c(N).ariaLabelConfig);
  const j = i() === void 0 ? void 0 : ba(i()), H = ba(o()), T = ba(s()), _ = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ $(() => `svelte-flow__minimap-desc-${c(N).flowId}`), z = /* @__PURE__ */ $(() => ({
    x: -c(N).viewport.x / c(N).viewport.zoom,
    y: -c(N).viewport.y / c(N).viewport.zoom,
    width: c(N).width / c(N).viewport.zoom,
    height: c(N).height / c(N).viewport.zoom
  })), P = /* @__PURE__ */ $(() => Yh(hi(c(N).nodeLookup, { filter: (ne) => !ne.hidden }), c(z))), A = /* @__PURE__ */ $(() => c(P).width / m()), D = /* @__PURE__ */ $(() => c(P).height / y()), B = /* @__PURE__ */ $(() => Math.max(c(A), c(D))), X = /* @__PURE__ */ $(() => c(B) * m()), U = /* @__PURE__ */ $(() => c(B) * y()), I = /* @__PURE__ */ $(() => 5 * c(B)), Y = /* @__PURE__ */ $(() => c(P).x - (c(X) - c(P).width) / 2 - c(I)), q = /* @__PURE__ */ $(() => c(P).y - (c(U) - c(P).height) / 2 - c(I)), R = /* @__PURE__ */ $(() => c(X) + c(I) * 2), W = /* @__PURE__ */ $(() => c(U) + c(I) * 2);
  const J = () => c(B);
  var te = {
    get position() {
      return n();
    },
    set position(ne = "bottom-right") {
      n(ne), f();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ne) {
      r(ne), f();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ne = "transparent") {
      o(ne), f();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ne) {
      i(ne), f();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ne = "") {
      s(ne), f();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ne = 5) {
      a(ne), f();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ne = 2) {
      l(ne), f();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(ne) {
      u(ne), f();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ne) {
      d(ne), f();
    },
    get maskColor() {
      return h();
    },
    set maskColor(ne) {
      h(ne), f();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(ne) {
      p(ne), f();
    },
    get maskStrokeWidth() {
      return v();
    },
    set maskStrokeWidth(ne) {
      v(ne), f();
    },
    get width() {
      return m();
    },
    set width(ne = 200) {
      m(ne), f();
    },
    get height() {
      return y();
    },
    set height(ne = 150) {
      y(ne), f();
    },
    get pannable() {
      return w();
    },
    set pannable(ne = !0) {
      w(ne), f();
    },
    get zoomable() {
      return b();
    },
    set zoomable(ne = !0) {
      b(ne), f();
    },
    get inversePan() {
      return C();
    },
    set inversePan(ne) {
      C(ne), f();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(ne) {
      E(ne), f();
    },
    get class() {
      return k();
    },
    set class(ne) {
      k(ne), f();
    }
  }, oe = Eb(), L = Q(oe);
  {
    let ne = /* @__PURE__ */ $(() => ["svelte-flow__minimap", k()]);
    b1(L, () => ({ "--xy-minimap-background-color-props": d() })), vi(L.lastChild, Ve(
      {
        get position() {
          return n();
        },
        get class() {
          return c(ne);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => x,
      {
        children: (fe, he) => {
          var re = ce(), ue = Q(re);
          {
            var ge = (ye) => {
              var be = _b();
              let de;
              var we = Z(be);
              {
                var Te = (ke) => {
                  var Ne = Sb(), ze = Z(Ne, !0);
                  F(Ne), Pe(() => {
                    _e(Ne, "id", c(S)), Je(ze, r() ?? c(M)["minimap.ariaLabel"]);
                  }), O(ke, Ne);
                };
                ie(we, (ke) => {
                  (r() ?? c(M)["minimap.ariaLabel"]) && ke(Te);
                });
              }
              var G = V(we);
              Ct(G, 17, () => c(N).nodes, (ke) => ke.id, (ke, Ne) => {
                const ze = /* @__PURE__ */ $(() => c(N).nodeLookup.get(c(Ne).id));
                var Xe = ce(), rt = Q(Xe);
                {
                  var Ge = (ot) => {
                    const ve = /* @__PURE__ */ $(() => $r(c(ze)));
                    {
                      let Oe = /* @__PURE__ */ $(() => j?.(c(ze))), et = /* @__PURE__ */ $(() => H(c(ze))), je = /* @__PURE__ */ $(() => T(c(ze)));
                      tf(ot, Ve(
                        {
                          get id() {
                            return c(ze).id;
                          },
                          get x() {
                            return c(ze).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(ze).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ve),
                        {
                          get selected() {
                            return c(ze).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Oe);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(et);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return _;
                          },
                          get class() {
                            return c(je);
                          }
                        }
                      ));
                    }
                  };
                  ie(rt, (ot) => {
                    c(ze) && Uh(c(ze)) && !c(ze).hidden && ot(Ge);
                  });
                }
                O(ke, Xe);
              });
              var Me = V(G);
              F(be), Ot(be, (ke, Ne) => $b?.(ke, Ne), () => ({
                store: c(N),
                panZoom: c(N).panZoom,
                getViewScale: J,
                translateExtent: c(N).translateExtent,
                width: c(N).width,
                height: c(N).height,
                inversePan: C(),
                zoomStep: E(),
                pannable: w(),
                zoomable: b()
              })), Pe(() => {
                _e(be, "width", m()), _e(be, "height", y()), _e(be, "viewBox", `${c(Y) ?? ""} ${c(q) ?? ""} ${c(R) ?? ""} ${c(W) ?? ""}`), _e(be, "aria-labelledby", c(S)), de = _t(be, "", de, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(B) : void 0
                }), _e(Me, "d", `M${c(Y) - c(I)},${c(q) - c(I)}h${c(R) + c(I) * 2}v${c(W) + c(I) * 2}h${-c(R) - c(I) * 2}z
      M${c(z).x ?? ""},${c(z).y ?? ""}h${c(z).width ?? ""}v${c(z).height ?? ""}h${-c(z).width}z`);
              }), O(ye, be);
            };
            ie(ue, (ye) => {
              c(N).panZoom && ye(ge);
            });
          }
          O(fe, re);
        },
        $$slots: { default: !0 }
      }
    )), F(L);
  }
  return O(t, oe), le(te);
}
se(
  nf,
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
var Pb = /* @__PURE__ */ ee("<div><!></div>");
function rf(t, e) {
  ae(e, !0);
  let n = g(e, "nodeId", 7), r = g(e, "position", 23, () => Se.Top), o = g(e, "align", 7, "center"), i = g(e, "offset", 7, 10), s = g(e, "isVisible", 7), a = g(e, "children", 7), l = /* @__PURE__ */ Le(e, [
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
  const u = xn(), { getNodesBounds: d } = wt(), h = vn("svelteflow__node_id");
  let p = /* @__PURE__ */ $(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (x, N) => {
      const M = u.nodeLookup.get(N);
      return M && x.push(M), x;
    },
    []
  ))), v = /* @__PURE__ */ $(() => {
    const x = d(c(p));
    return x ? Fw(x, u.viewport, r(), i(), o()) : "";
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
    set position(x = Se.Top) {
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
  }, C = ce(), E = Q(C);
  {
    var k = (x) => {
      var N = Pb();
      Ye(
        N,
        (j, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": j,
          ...l,
          [_n]: H
        }),
        [
          () => c(p).reduce((j, H) => `${j}${H.id} `, "").trim(),
          () => ({
            display: mp().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var M = Z(N);
      Ee(M, () => a() ?? He), F(N), Ot(N, (j, H) => vp?.(j, H), () => "root"), O(x, N);
    };
    ie(E, (x) => {
      u.domNode && c(w) && c(p) && x(k);
    });
  }
  return O(t, C), le(b);
}
se(
  rf,
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
function lr(t) {
  const e = /* @__PURE__ */ $(xn), n = /* @__PURE__ */ $(() => c(e).nodes), r = /* @__PURE__ */ $(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ $(() => {
    c(n);
    const a = [], l = Array.isArray(t), u = l ? t : [t];
    for (const d of u) {
      const h = c(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!t2(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Pc = "tinyflow-component", Ob = [
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
], Nb = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "fixed",
    label: "固定值"
  },
  {
    value: "input",
    label: "输入"
  }
], Ql = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], of = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], sf = [
  // { label: '单行输入框', value: 'input' },
  // { label: '多行输入框', value: 'textarea' },
  // { label: '下拉菜单', value: 'select' },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Tb = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], af = typeof window < "u" ? window : void 0;
function Db(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let Ab = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = af, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = Fr((r) => {
      const o = pt(e, "focusin", r), i = pt(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? Db(this.#e) : null;
  }
};
new Ab();
function Lb(t, e) {
  switch (t) {
    case "post":
      Ie(e);
      break;
    case "pre":
      Ht(e);
      break;
  }
}
function lf(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Lb(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = st(() => n(a, s));
    return s = a, l;
  });
}
function Jl(t, e, n) {
  lf(t, "post", e, n);
}
function Ib(t, e, n) {
  lf(t, "pre", e, n);
}
Jl.pre = Ib;
function Mb(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class uf {
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
      window: a = af
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = Mb(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = Fr(() => pt(a, "storage", this.#a)));
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
function Oc(t) {
  return t.filter((e) => e.length > 0);
}
const cf = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, mi = typeof document < "u";
function zb(t) {
  return typeof t == "function";
}
function Vb(t) {
  return t !== null && typeof t == "object";
}
const Qo = Symbol("box"), eu = Symbol("is-writable");
function Hb(t) {
  return Vb(t) && Qo in t;
}
function Bb(t) {
  return mt.isBox(t) && eu in t;
}
function mt(t) {
  let e = /* @__PURE__ */ me(ht(t));
  return {
    [Qo]: !0,
    [eu]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function Rb(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [Qo]: !0,
    [eu]: !0,
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
function Kb(t) {
  return mt.isBox(t) ? t : zb(t) ? mt.with(t) : mt(t);
}
function Fb(t) {
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
function jb(t) {
  return mt.isWritableBox(t) ? {
    [Qo]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
mt.from = Kb;
mt.with = Rb;
mt.flatten = Fb;
mt.readonly = jb;
mt.isBox = Hb;
mt.isWritableBox = Bb;
var Nc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Zb = /\n/g, Wb = /^\s*/, qb = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Xb = /^:\s*/, Yb = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Ub = /^[;\s]*/, Gb = /^\s+|\s+$/g, Qb = `
`, Tc = "/", Dc = "*", Er = "", Jb = "comment", ex = "declaration";
function tx(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(Zb);
    y && (n += y.length);
    var w = m.lastIndexOf(Qb);
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
    l(Wb);
  }
  function d(m) {
    var y;
    for (m = m || []; y = h(); )
      y !== !1 && m.push(y);
    return m;
  }
  function h() {
    var m = i();
    if (!(Tc != t.charAt(0) || Dc != t.charAt(1))) {
      for (var y = 2; Er != t.charAt(y) && (Dc != t.charAt(y) || Tc != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Er === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: Jb,
        comment: w
      });
    }
  }
  function p() {
    var m = i(), y = l(qb);
    if (y) {
      if (h(), !l(Xb)) return a("property missing ':'");
      var w = l(Yb), b = m({
        type: ex,
        property: Ac(y[0].replace(Nc, Er)),
        value: w ? Ac(w[0].replace(Nc, Er)) : Er
      });
      return l(Ub), b;
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
function Ac(t) {
  return t ? t.replace(Gb, Er) : Er;
}
function nx(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = tx(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
function rx(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const ox = rx(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function ix(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${ox(e)}: ${t[e]};`).join(`
`);
}
function sx(t = {}) {
  return ix(t).replace(`
`, " ");
}
const ax = {
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
sx(ax);
const lx = typeof window < "u" ? window : void 0;
function ux(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let cx = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = lx, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = Fr((r) => {
      const o = pt(e, "focusin", r), i = pt(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? ux(this.#e) : null;
  }
};
new cx();
const Tr = mt("mode-watcher-mode"), Dr = mt("mode-watcher-theme"), dx = ["dark", "light", "system"];
function Za(t) {
  return typeof t != "string" ? !1 : dx.includes(t);
}
class hx {
  #e = "system";
  #t = mi ? localStorage : cf;
  #n = this.#t.getItem(Tr.current);
  #r = Za(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ me(ht(this.#i()));
  #i(e = this.#r) {
    return new uf(Tr.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => Za(n) ? n : this.#e
      }
    });
  }
  constructor() {
    jr(() => Jl.pre(() => Tr.current, (e, n) => {
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
class px {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ me(ht(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Cp("prefers-color-scheme: light") : { current: !1 };
  query() {
    mi && K(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    jr(() => {
      Ht(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Wa = new hx(), Jo = new px();
class fx {
  #e = mi ? localStorage : cf;
  #t = this.#e.getItem(Dr.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ me(ht(this.#o()));
  #o(e = this.#n) {
    return new uf(Dr.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    jr(() => Jl.pre(() => Dr.current, (e, n) => {
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
const Zi = new fx();
let Lc, Ic, Mc = !1, Di = null;
function gx() {
  return Di || (Di = document.createElement("style"), Di.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), Di);
}
function df(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!Mc) {
    Mc = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(Lc), clearTimeout(Ic);
  const n = gx(), r = () => document.head.appendChild(n), o = () => {
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
  r(), Lc = window.setTimeout(() => {
    t(), Ic = window.setTimeout(o, 16);
  }, 16);
}
const hr = mt(void 0), gs = mt(!0), vs = mt(!1), qa = mt([]), Xa = mt([]);
function vx() {
  const t = /* @__PURE__ */ $(() => {
    if (!mi) return;
    const e = Wa.current === "system" ? Jo.current : Wa.current, n = Oc(qa.current), r = Oc(Xa.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && hr.current && s.setAttribute("content", hr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && hr.current && s.setAttribute("content", hr.current.dark));
    }
    return gs.current ? df(o, vs.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function mx() {
  const t = /* @__PURE__ */ $(() => {
    if (Zi.current, !mi) return;
    function e() {
      document.documentElement.setAttribute("data-theme", Zi.current);
    }
    return gs.current ? df(e, st(() => vs.current)) : e(), Zi.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const yx = vx(), wx = mx();
function bx(t) {
  Wa.current = t;
}
function xx(t) {
  Zi.current = t;
}
function Cx({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var kx = /* @__PURE__ */ ee('<meta name="theme-color"/>');
function hf(t, e) {
  ae(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), f();
    }
  }, o = ce(), i = Q(o);
  {
    var s = (a) => {
      var l = kx();
      Pe(() => _e(l, "content", n().dark)), O(a, l);
    };
    ie(i, (a) => {
      n() && a(s);
    });
  }
  return O(t, o), le(r);
}
se(hf, { themeColors: {} }, [], [], !0);
var $x = /* @__PURE__ */ ee('<meta name="theme-color"/>'), Sx = /* @__PURE__ */ ee("<!> <!>", 1);
function pf(t, e) {
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
  return x1("1lz8xnp", (s) => {
    var a = Sx(), l = Q(a);
    {
      var u = (h) => {
        var p = $x();
        Pe(() => _e(p, "content", o().dark)), O(h, p);
      };
      ie(l, (h) => {
        o() && h(u);
      });
    }
    var d = V(l, 2);
    Rs(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + Cx.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), O(s, a);
  }), le(i);
}
se(pf, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function _x(t, e) {
  ae(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), p = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  Tr.current = h(), Dr.current = d(), qa.current = s(), Xa.current = a(), gs.current = i(), hr.current = o(), vs.current = v(), Ht(() => {
    vs.current = v();
  }), Ht(() => {
    gs.current = i();
  }), Ht(() => {
    hr.current = o();
  }), Ht(() => {
    qa.current = s();
  }), Ht(() => {
    Xa.current = a();
  }), Ht(() => {
    Tr.current = h();
  }), Ht(() => {
    Dr.current = d();
  }), Ht(() => {
    yx.current, Tr.current, Dr.current, wx.current;
  }), wn(() => {
    Jo.tracking(n()), Jo.query();
    const x = localStorage.getItem(Tr.current);
    bx(Za(x) ? x : r());
    const N = localStorage.getItem(Dr.current);
    xx(N || l());
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
  }, b = ce(), C = Q(b);
  {
    var E = (x) => {
      hf(x, {
        get themeColors() {
          return hr.current;
        }
      });
    }, k = (x) => {
      pf(x, {
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
    ie(C, (x) => {
      p() ? x(E) : x(k, !1);
    });
  }
  return O(t, b), le(w);
}
se(
  _x,
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
class Ex {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(e) {
    if (typeof e.element != "string" && !(e.element instanceof Element))
      throw new Error("element must be a string or Element");
    (!e.defaultTheme || e.defaultTheme === "system") && (e.defaultTheme = Jo.current), this._setOptions(e), this._init();
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
    const e = document.createElement(Pc);
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
    const n = document.createElement(Pc);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add(
      ...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]
    ), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  setTheme(e) {
    e === "system" ? this.options.defaultTheme = Jo.current : this.options.defaultTheme = e, this.destroy(), this._init();
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Px = () => {
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
}, Ke = Px();
function pn(...t) {
  return zo(t);
}
const zc = {
  default: "tf-btn-default",
  outline: "tf-btn-outline",
  secondary: "tf-btn-secondary",
  ghost: "tf-btn-ghost",
  destructive: "tf-btn-destructive",
  link: "tf-btn-link"
}, Vc = {
  default: "tf-btn-size-default",
  xs: "tf-btn-xs",
  sm: "tf-btn-sm",
  lg: "tf-btn-lg",
  icon: "tf-btn-icon",
  "icon-xs": "tf-btn-icon-xs",
  "icon-sm": "tf-btn-icon-sm",
  "icon-lg": "tf-btn-icon-lg"
};
var Ox = /* @__PURE__ */ ee("<a><!></a>"), Nx = /* @__PURE__ */ ee("<button><!></button>");
function Fe(t, e) {
  ae(e, !0);
  let n = g(e, "class", 7), r = g(e, "variant", 7, "outline"), o = g(e, "size", 7, "default"), i = g(e, "ref", 15, null), s = g(e, "href", 23, () => {
  }), a = g(e, "type", 7, "button"), l = g(e, "disabled", 7), u = g(e, "children", 7), d = g(e, "primary", 7), h = /* @__PURE__ */ Le(e, [
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
  }, v = ce(), m = Q(v);
  {
    var y = (b) => {
      var C = Ox();
      Ye(
        C,
        (k) => ({
          "data-slot": "button",
          class: k,
          href: l() ? void 0 : s(),
          "aria-disabled": l(),
          role: l() ? "link" : void 0,
          tabindex: l() ? -1 : void 0,
          ...h
        }),
        [
          () => pn("nopan nodrag tf-btn", zc[r()], Vc[o()], n())
        ]
      );
      var E = Z(C);
      Ee(E, () => u() ?? He), F(C), Et(C, (k) => i(k), () => i()), O(b, C);
    }, w = (b) => {
      var C = Nx();
      Ye(
        C,
        (k) => ({
          "data-slot": "button",
          class: k,
          type: a(),
          disabled: l(),
          ...h
        }),
        [
          () => pn("nopan nodrag tf-btn", zc[r()], Vc[o()], n())
        ]
      );
      var E = Z(C);
      Ee(E, () => u() ?? He), F(C), Et(C, (k) => i(k), () => i()), O(b, C);
    };
    ie(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return O(t, v), le(p);
}
se(
  Fe,
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
function Tx(t) {
  return typeof t == "function";
}
function yi(t) {
  return t !== null && typeof t == "object";
}
const Dx = ["string", "number", "bigint", "boolean"];
function Ya(t) {
  return t == null || Dx.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => Ya(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const ms = Symbol("box"), ff = Symbol("is-writable");
function pe(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [ms]: !0,
    [ff]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [ms]: !0,
    get current() {
      return t();
    }
  };
}
function gf(t) {
  return yi(t) && ms in t;
}
function Ax(t) {
  return gf(t) ? t : Tx(t) ? pe(t) : Pn(t);
}
function Pn(t) {
  let e = /* @__PURE__ */ me(ht(t));
  return {
    [ms]: !0,
    [ff]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      K(e, n, !0);
    }
  };
}
function vf(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
const Lx = /\d/, Ix = ["-", "_", "/", "."];
function Mx(t = "") {
  if (!Lx.test(t))
    return t !== t.toLowerCase();
}
function zx(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = Ix.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = Mx(i);
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
function mf(t) {
  return t ? zx(t).map((e) => Hx(e)).join("") : "";
}
function Vx(t) {
  return Bx(mf(t || ""));
}
function Hx(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function Bx(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function Lo(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[mf(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[Vx(r)] = o;
  }
  return nx(t, n), e;
}
function Ho(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function Rx(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const Kx = Rx(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function Fx(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${Kx(e)}: ${t[e]};`).join(`
`);
}
function tu(t = {}) {
  return Fx(t).replace(`
`, " ");
}
const jx = [
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
], Zx = new Set(jx);
function Wx(t) {
  return Zx.has(t);
}
function Dn(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && Wx(o)) {
          const u = i, d = s;
          e[o] = vf(u, d);
        } else if (a && l)
          e[o] = Ho(i, s);
        else if (o === "class") {
          const u = Ya(i), d = Ya(s);
          u && d ? e[o] = zo(i, s) : u ? e[o] = zo(i) : d && (e[o] = zo(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", h = typeof i == "string", p = typeof s == "string";
          if (u && d)
            e[o] = { ...i, ...s };
          else if (u && p) {
            const v = Lo(s);
            e[o] = { ...i, ...v };
          } else if (h && d) {
            const v = Lo(i);
            e[o] = { ...v, ...s };
          } else if (h && p) {
            const v = Lo(i), m = Lo(s);
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
  return typeof e.style == "object" && (e.style = tu(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const qx = {
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
}, Xx = tu(qx), yf = typeof window < "u" ? window : void 0;
function Yx(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class Ux {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = yf, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = Fr((o) => {
      const i = pt(n, "focusin", o), s = pt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? Yx(this.#e) : null;
  }
}
new Ux();
function Gx(t) {
  return typeof t == "function";
}
class Sr {
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
    return Lv(this.#t);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const e = vn(this.#t);
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
    const n = vn(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return Mr(this.#t, e);
  }
}
function Qx(t, e) {
  switch (t) {
    case "post":
      Ie(e);
      break;
    case "pre":
      Ht(e);
      break;
  }
}
function wf(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Qx(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = st(() => n(a, s));
    return s = a, l;
  });
}
function yt(t, e, n) {
  wf(t, "post", e, n);
}
function Jx(t, e, n) {
  wf(t, "pre", e, n);
}
yt.pre = Jx;
function Hc(t) {
  return Gx(t) ? t() : t;
}
class e7 {
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
    const e = Hc(this.#r);
    if (e)
      return Fr((n) => {
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
    this.#o = n.window ?? yf, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = Hc(this.#r);
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
class t7 {
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
function xo(t) {
  Ie(() => () => {
    t();
  });
}
function n7(t) {
  Ie(() => st(() => t()));
}
function r7(t, e) {
  return setTimeout(e, t);
}
function wi(t) {
  nh().then(t);
}
const o7 = 1, i7 = 9, s7 = 11;
function Ua(t) {
  return yi(t) && t.nodeType === o7 && typeof t.nodeName == "string";
}
function bf(t) {
  return yi(t) && t.nodeType === i7;
}
function a7(t) {
  return yi(t) && t.constructor?.name === "VisualViewport";
}
function l7(t) {
  return yi(t) && t.nodeType !== void 0;
}
function xf(t) {
  return l7(t) && t.nodeType === s7 && "host" in t;
}
function u7(t, e) {
  if (!t || !e || !Ua(t) || !Ua(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && xf(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function c7(t) {
  return bf(t) ? t : a7(t) ? t.document : t?.ownerDocument ?? document;
}
function Cf(t) {
  return xf(t) ? Cf(t.host) : bf(t) ? t.defaultView ?? window : Ua(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function d7(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class bi {
  element;
  #e = /* @__PURE__ */ $(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    K(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = pe(e) : this.element = e;
  }
  getDocument = () => c7(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => d7(this.root);
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
    [y1()]: (n) => gf(t) ? (t.current = n, st(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), st(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function Ga(t) {
  return t ? "true" : "false";
}
function ys(t) {
  return t ? "" : void 0;
}
function Bc(t) {
  return t ? !0 : void 0;
}
function kf(t) {
  return t ? "open" : "closed";
}
function h7(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class p7 {
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
function nu(t) {
  const e = new p7(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const Io = "ArrowDown", Gr = "ArrowUp", $f = "End", Qa = "Enter", f7 = "Escape", Sf = "Home", _f = "PageDown", Ef = "PageUp", Wi = " ", Rc = "Tab", Pf = typeof document < "u", Ja = g7();
function g7() {
  return Pf && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function el(t) {
  return t instanceof HTMLElement;
}
function v7(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function m7(t) {
  return t !== null;
}
class y7 {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, xo(() => this.#n());
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
    this.#e.afterTick ? wi(n) : n();
  }
}
class w7 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ me(!1);
  constructor(e) {
    this.#e = e, K(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new y7({ ref: this.#e.ref, afterTick: this.#e.open }), yt(() => this.#e.open.current, (n) => {
      n && K(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || K(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function Be() {
}
function Mn(t, e) {
  return `bits-${t}`;
}
function Of(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), f();
    }
  }, o = ce(), i = Q(o);
  return w1(i, n, (s) => {
    var a = ce(), l = Q(a);
    Ee(l, () => n() ?? He), O(s, a);
  }), O(t, o), le(r);
}
se(Of, { children: {} }, [], [], !0);
const b7 = new Sr("BitsConfig");
function x7() {
  const t = new C7(null, {});
  return b7.getOr(t).opts;
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
  return (n) => pe(() => {
    const r = n(e)?.current;
    if (r !== void 0)
      return r;
    if (t !== null)
      return n(t.opts)?.current;
  });
}
function $7(t, e) {
  return (n) => {
    const r = x7();
    return pe(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const S7 = $7((t) => t.defaultPortalTo, "body");
function tl(t, e) {
  ae(e, !0);
  let n = g(e, "to", 7), r = g(e, "children", 7), o = g(e, "disabled", 7);
  const i = S7(() => n()), s = Iv();
  let a = /* @__PURE__ */ $(l);
  function l() {
    if (!Pf || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (ah(u), u = null);
  }
  yt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = Dl(Of, { target: y, props: { children: r() }, context: s }), () => {
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
  }, p = ce(), v = Q(p);
  {
    var m = (y) => {
      var w = ce(), b = Q(w);
      Ee(b, () => r() ?? He), O(y, w);
    };
    ie(v, (y) => {
      o() && y(m);
    });
  }
  return O(t, p), le(h);
}
se(tl, { to: {}, children: {}, disabled: {} }, [], [], !0);
function Kc(t, e = 500) {
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
function Nf(t, e) {
  return t === e || t.contains(e);
}
function Tf(t) {
  return t?.ownerDocument ?? document;
}
function _7(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var Df = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], nl = /* @__PURE__ */ Df.join(","), Af = typeof Element > "u", go = Af ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ws = !Af && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, bs = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : bs(t.parentNode));
  return i;
}, E7 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, Lf = function(t, e, n) {
  if (bs(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(nl));
  return e && go.call(t, nl) && r.unshift(t), r = r.filter(n), r;
}, xs = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!bs(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = xs(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = go.call(i, nl);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !bs(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (d && h) {
          var p = xs(d === !0 ? i.children : d.children, !0, n);
          n.flatten ? r.push.apply(r, p) : r.push({
            scopeParent: i,
            candidates: p
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return r;
}, If = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Mf = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || E7(t)) && !If(t) ? 0 : t.tabIndex;
}, P7 = function(t, e) {
  var n = Mf(t);
  return n < 0 && e && !If(t) ? 0 : n;
}, O7 = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, zf = function(t) {
  return t.tagName === "INPUT";
}, N7 = function(t) {
  return zf(t) && t.type === "hidden";
}, T7 = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return e;
}, D7 = function(t, e) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === e)
      return t[n];
}, A7 = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || ws(t), n = function(i) {
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
  var o = D7(r, t.form);
  return !o || o === t;
}, L7 = function(t) {
  return zf(t) && t.type === "radio";
}, I7 = function(t) {
  return L7(t) && !A7(t);
}, M7 = function(t) {
  var e, n = t && ws(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = ws(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, Fc = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, z7 = function(t, e) {
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
  var i = go.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (go.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var l = t.parentElement, u = ws(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return Fc(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (M7(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Fc(t);
  return !1;
}, V7 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children.item(n);
          if (r.tagName === "LEGEND")
            return go.call(e, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, Cs = function(t, e) {
  return !(e.disabled || N7(e) || z7(e, t) || // For a details element with a summary, the summary element gets the focus
  T7(e) || V7(e));
}, jc = function(t, e) {
  return !(I7(e) || Mf(e) < 0 || !Cs(t, e));
}, H7 = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, Vf = function(t) {
  var e = [], n = [];
  return t.forEach(function(r, o) {
    var i = !!r.scopeParent, s = i ? r.scopeParent : r, a = P7(s, i), l = i ? Vf(r.candidates) : s;
    a === 0 ? i ? e.push.apply(e, l) : e.push(s) : n.push({
      documentOrder: o,
      tabIndex: a,
      item: r,
      isScope: i,
      content: l
    });
  }), n.sort(O7).reduce(function(r, o) {
    return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
  }, []).concat(e);
}, B7 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = xs([t], e.includeContainer, {
    filter: jc.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: H7
  }) : n = Lf(t, e.includeContainer, jc.bind(null, e)), Vf(n);
}, R7 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = xs([t], e.includeContainer, {
    filter: Cs.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = Lf(t, e.includeContainer, Cs.bind(null, e)), n;
}, K7 = /* @__PURE__ */ Df.concat("iframe:not([inert]):not([inert] *)").join(","), F7 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return go.call(t, K7) === !1 ? !1 : Cs(e, t);
};
function j7(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function Z7(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function W7(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function q7(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function ru(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (t.filter((p) => p.toLowerCase().startsWith(u)).length <= 1)
      return ru(t, u, n);
    const d = n?.toLowerCase();
    if (d && d.startsWith(u) && d.charAt(u.length) === " " && e.trim() === u)
      return n;
    const h = t.filter((p) => p.toLowerCase().startsWith(r));
    if (h.length > 0) {
      const p = n ? t.indexOf(n) : -1;
      return Zc(h, Math.max(p, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = Zc(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function Zc(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const X7 = { afterMs: 1e4, onChange: Be };
function Hf(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...X7, ...e };
  let i = null, s = /* @__PURE__ */ me(ht(t));
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
class Y7 {
  #e;
  #t;
  #n = /* @__PURE__ */ $(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ $(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = Hf("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = ru(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
    return a && c(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const U7 = "data-context-menu-trigger", G7 = "data-context-menu-content";
nu({
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
class ou {
  static create(e) {
    return new ou(e);
  }
  opts;
  #e;
  #t;
  #n = { pointerdown: !1 };
  #r = !1;
  #o = !1;
  #i = void 0;
  #a;
  #s = Be;
  constructor(e) {
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, Ie(() => {
      this.#i = Tf(this.opts.ref.current);
    });
    let n = Be;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    yt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return r7(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), xo(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && wi(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return Ho(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      pt(this.#i, "pointerdown", Ho(this.#h, this.#p), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      pt(this.#i, "pointerdown", Ho(this.#f, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      pt(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = Wc(e)), this.#e.current(e);
  };
  #d = Kc(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || e5(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = Wc(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
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
    this.opts.ref.current && (this.#r = J7(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? Nf(this.opts.ref.current, e) : !1;
  #v = Kc(
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
function Q7(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function J7(t) {
  const e = [...globalThis.bitsDismissableLayers], n = Q7(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function e5(t, e) {
  const n = t.target;
  if (!v7(n)) return !1;
  const r = !!n.closest(`[${U7}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${G7}]`);
  return r && o ? !1 : Tf(n).documentElement.contains(n) && !Nf(e, n) && _7(t, e);
}
function Wc(t) {
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
function Bf(t, e) {
  ae(e, !0);
  let n = g(e, "interactOutsideBehavior", 7, "close"), r = g(e, "onInteractOutside", 7, Be), o = g(e, "onFocusOutside", 7, Be), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "isValidEvent", 7, () => !1), u = g(e, "ref", 7);
  const d = ou.create({
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
    set onInteractOutside(m = Be) {
      r(m), f();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = Be) {
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
  }, p = ce(), v = Q(p);
  return Ee(v, () => s() ?? He, () => ({ props: d.props })), O(t, p), le(h);
}
se(
  Bf,
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
class iu {
  static create(e) {
    return new iu(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new bi(this.opts.ref);
    let n = Be;
    yt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => pt(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== f7 || !t5(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function t5(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function Rf(t, e) {
  ae(e, !0);
  let n = g(e, "escapeKeydownBehavior", 7, "close"), r = g(e, "onEscapeKeydown", 7, Be), o = g(e, "children", 7), i = g(e, "enabled", 7), s = g(e, "ref", 7);
  iu.create({
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
    set onEscapeKeydown(d = Be) {
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
  }, l = ce(), u = Q(l);
  return Ee(u, () => o() ?? He), O(t, l), le(a);
}
se(
  Rf,
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
class su {
  static instance;
  #e = Pn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new su()), this.instance;
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
class au {
  #e = !1;
  #t = null;
  #n = su.getInstance();
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
          if (l && e.contains(l) && F7(l))
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
    return this.#t ? B7(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  #c() {
    return this.#u()[0] || null;
  }
  #d() {
    return this.#t ? R7(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  static use(e) {
    let n = null;
    return yt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new au(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), xo(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function Kf(t, e) {
  ae(e, !0);
  let n = g(e, "enabled", 7, !1), r = g(e, "trapFocus", 7, !1), o = g(e, "loop", 7, !1), i = g(e, "onCloseAutoFocus", 7, Be), s = g(e, "onOpenAutoFocus", 7, Be), a = g(e, "focusScope", 7), l = g(e, "ref", 7);
  const u = au.use({
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
    set onCloseAutoFocus(v = Be) {
      i(v), f();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = Be) {
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
  }, h = ce(), p = Q(h);
  return Ee(p, () => a() ?? He, () => ({ props: u.props })), O(t, h), le(d);
}
se(
  Kf,
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
class lu {
  static create(e) {
    return new lu(e);
  }
  opts;
  domContext;
  #e = Be;
  constructor(e) {
    this.opts = e, this.domContext = new bi(e.ref);
    let n = Be;
    yt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return Ho(pt(this.domContext.getDocument(), "pointerdown", this.#n), pt(this.domContext.getDocument(), "pointerup", vf(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !el(n) || !el(r) || !this.opts.enabled.current || !r5(this) || !u7(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = n5(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Be;
  };
}
const qc = (t) => t.style.userSelect || t.style.webkitUserSelect;
function n5(t, e) {
  const n = qc(e), r = qc(t);
  return Ai(e, "none"), Ai(t, "text"), () => {
    Ai(e, n), Ai(t, r);
  };
}
function Ai(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function r5(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function Ff(t, e) {
  ae(e, !0);
  let n = g(e, "preventOverflowTextSelection", 7, !0), r = g(e, "onPointerDown", 7, Be), o = g(e, "onPointerUp", 7, Be), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "ref", 7);
  lu.create({
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
    set onPointerDown(p = Be) {
      r(p), f();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(p = Be) {
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
  }, d = ce(), h = Q(d);
  return Ee(h, () => s() ?? He), O(t, d), le(u);
}
se(
  Ff,
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
function ks(t = "bits") {
  return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
class o5 {
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
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = jr(() => {
      K(this.#n, this.#e(...e), !0);
    })), Ie(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const qi = new P2();
let Li = /* @__PURE__ */ me(null), xa = null, Po = null, Oo = !1;
const Xc = pe(() => {
  for (const t of qi.values())
    if (t) return !0;
  return !1;
});
let Ca = null;
const i5 = new o5(() => {
  function t() {
    document.body.setAttribute("style", c(Li) ?? ""), document.body.style.removeProperty("--scrollbar-width"), Ja && xa?.(), K(Li, null);
  }
  function e() {
    Po !== null && (window.clearTimeout(Po), Po = null);
  }
  function n(o, i) {
    e(), Oo = !0, Ca = Date.now();
    const s = Ca, a = () => {
      Po = null, Ca === s && (jf(qi) ? Oo = !1 : (Oo = !1, i()));
    }, l = o === null ? 24 : o;
    Po = window.setTimeout(a, l);
  }
  function r() {
    c(Li) === null && qi.size === 0 && !Oo && K(Li, document.body.getAttribute("style"), !0);
  }
  return yt(() => Xc.current, () => {
    if (!Xc.current) return;
    r(), Oo = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", Ja && (xa = pt(
      document,
      "touchmove",
      (u) => {
        u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
      },
      { passive: !1 }
    )), wi(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), xo(() => () => {
    xa?.();
  }), {
    get lockMap() {
      return qi;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class s5 {
  #e = ks();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = i5.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = pe(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), xo(() => {
      if (this.#r.lockMap.delete(this.#e), jf(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function jf(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function rl(t, e) {
  ae(e, !0);
  let n = g(e, "preventScroll", 7, !0), r = g(e, "restoreScrollDelay", 7, null);
  n() && new s5(n(), () => r());
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
se(rl, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const a5 = nu({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), l5 = new Sr("Checkbox.Group"), Zf = new Sr("Checkbox.Root");
class uu {
  static create(e, n = null) {
    return Zf.set(new uu(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ $(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ $(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
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
      if (e.key === Qa) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === Wi && (e.preventDefault(), this.#o());
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
    K(this.#i, e);
  }
  #a = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": h7(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": Ga(this.trueRequired),
    "aria-readonly": Ga(this.trueReadonly),
    "data-disabled": ys(this.trueDisabled),
    "data-readonly": ys(this.trueReadonly),
    "data-state": u5(this.opts.checked.current, this.opts.indeterminate.current),
    [a5.root]: "",
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
class cu {
  static create() {
    return new cu(Zf.get());
  }
  root;
  #e = /* @__PURE__ */ $(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => !!this.root.trueName);
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
    el(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
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
    K(this.#n, e);
  }
}
function u5(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var c5 = /* @__PURE__ */ ee("<input/>"), d5 = /* @__PURE__ */ ee("<input/>");
function du(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ $(() => Dn(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: Xx
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), f();
    }
  }, s = ce(), a = Q(s);
  {
    var l = (d) => {
      var h = c5();
      Ye(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), O(d, h);
    }, u = (d) => {
      var h = d5();
      Ye(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), ns(h, n), O(d, h);
    };
    ie(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return O(t, s), le(i);
}
se(du, { value: {} }, [], [], !0);
function Wf(t, e) {
  ae(e, !1);
  const n = cu.create();
  Ll();
  var r = ce(), o = Q(r);
  {
    var i = (s) => {
      du(s, Ve(() => n.props));
    };
    ie(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  O(t, r), le();
}
se(Wf, {}, [], [], !0);
var h5 = /* @__PURE__ */ ee("<button><!></button>"), p5 = /* @__PURE__ */ ee("<!> <!>", 1);
function qf(t, e) {
  const n = si();
  ae(e, !0);
  let r = g(e, "checked", 15, !1), o = g(e, "ref", 15, null), i = g(e, "onCheckedChange", 7), s = g(e, "children", 7), a = g(e, "disabled", 7, !1), l = g(e, "required", 7, !1), u = g(e, "name", 23, () => {
  }), d = g(e, "value", 7, "on"), h = g(e, "id", 23, () => Mn(n)), p = g(e, "indeterminate", 15, !1), v = g(e, "onIndeterminateChange", 7), m = g(e, "child", 7), y = g(e, "type", 7, "button"), w = g(e, "readonly", 7), b = /* @__PURE__ */ Le(e, [
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
  const C = l5.getOr(null);
  C && d() && (C.opts.value.current.includes(d()) ? r(!0) : r(!1)), yt.pre(() => d(), () => {
    C && d() && (C.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const E = uu.create(
    {
      checked: pe(() => r(), (_) => {
        r(_), i()?.(_);
      }),
      disabled: pe(() => a() ?? !1),
      required: pe(() => l()),
      name: pe(() => u()),
      value: pe(() => d()),
      id: pe(() => h()),
      ref: pe(() => o(), (_) => o(_)),
      indeterminate: pe(() => p(), (_) => {
        p(_), v()?.(_);
      }),
      type: pe(() => y()),
      readonly: pe(() => !!w())
    },
    C
  ), k = /* @__PURE__ */ $(() => Dn({ ...b }, E.props));
  var x = {
    get checked() {
      return r();
    },
    set checked(_ = !1) {
      r(_), f();
    },
    get ref() {
      return o();
    },
    set ref(_ = null) {
      o(_), f();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(_) {
      i(_), f();
    },
    get children() {
      return s();
    },
    set children(_) {
      s(_), f();
    },
    get disabled() {
      return a();
    },
    set disabled(_ = !1) {
      a(_), f();
    },
    get required() {
      return l();
    },
    set required(_ = !1) {
      l(_), f();
    },
    get name() {
      return u();
    },
    set name(_ = void 0) {
      u(_), f();
    },
    get value() {
      return d();
    },
    set value(_ = "on") {
      d(_), f();
    },
    get id() {
      return h();
    },
    set id(_ = Mn(n)) {
      h(_), f();
    },
    get indeterminate() {
      return p();
    },
    set indeterminate(_ = !1) {
      p(_), f();
    },
    get onIndeterminateChange() {
      return v();
    },
    set onIndeterminateChange(_) {
      v(_), f();
    },
    get child() {
      return m();
    },
    set child(_) {
      m(_), f();
    },
    get type() {
      return y();
    },
    set type(_ = "button") {
      y(_), f();
    },
    get readonly() {
      return w();
    },
    set readonly(_) {
      w(_), f();
    }
  }, N = p5(), M = Q(N);
  {
    var j = (_) => {
      var S = ce(), z = Q(S);
      {
        let P = /* @__PURE__ */ $(() => ({ props: c(k), ...E.snippetProps }));
        Ee(z, m, () => c(P));
      }
      O(_, S);
    }, H = (_) => {
      var S = h5();
      Ye(S, () => ({ ...c(k) }));
      var z = Z(S);
      Ee(z, () => s() ?? He, () => E.snippetProps), F(S), O(_, S);
    };
    ie(M, (_) => {
      m() ? _(j) : _(H, !1);
    });
  }
  var T = V(M, 2);
  return Wf(T, {}), O(t, N), le(x);
}
se(
  qf,
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
const f5 = ["top", "right", "bottom", "left"], wr = Math.min, qt = Math.max, $s = Math.round, Ii = Math.floor, An = (t) => ({
  x: t,
  y: t
}), g5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, v5 = {
  start: "end",
  end: "start"
};
function ol(t, e, n) {
  return qt(t, wr(e, n));
}
function tr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function nr(t) {
  return t.split("-")[0];
}
function Co(t) {
  return t.split("-")[1];
}
function hu(t) {
  return t === "x" ? "y" : "x";
}
function pu(t) {
  return t === "y" ? "height" : "width";
}
const m5 = /* @__PURE__ */ new Set(["top", "bottom"]);
function On(t) {
  return m5.has(nr(t)) ? "y" : "x";
}
function fu(t) {
  return hu(On(t));
}
function y5(t, e, n) {
  n === void 0 && (n = !1);
  const r = Co(t), o = fu(t), i = pu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Ss(s)), [s, Ss(s)];
}
function w5(t) {
  const e = Ss(t);
  return [il(t), e, il(e)];
}
function il(t) {
  return t.replace(/start|end/g, (e) => v5[e]);
}
const Yc = ["left", "right"], Uc = ["right", "left"], b5 = ["top", "bottom"], x5 = ["bottom", "top"];
function C5(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Uc : Yc : e ? Yc : Uc;
    case "left":
    case "right":
      return e ? b5 : x5;
    default:
      return [];
  }
}
function k5(t, e, n, r) {
  const o = Co(t);
  let i = C5(nr(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(il)))), i;
}
function Ss(t) {
  return t.replace(/left|right|bottom|top/g, (e) => g5[e]);
}
function $5(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Xf(t) {
  return typeof t != "number" ? $5(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function _s(t) {
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
function Gc(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = On(e), s = fu(e), a = pu(s), l = nr(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  switch (Co(e)) {
    case "start":
      v[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const S5 = async (t, e, n) => {
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
  } = Gc(u, r, l), p = r, v = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x: C,
      y: E,
      data: k,
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
    d = C ?? d, h = E ?? h, v = {
      ...v,
      [w]: {
        ...v[w],
        ...k
      }
    }, x && m <= 50 && (m++, typeof x == "object" && (x.placement && (p = x.placement), x.rects && (u = x.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : x.rects), {
      x: d,
      y: h
    } = Gc(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function ei(t, e) {
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
  } = tr(e, t), m = Xf(v), y = a[p ? h === "floating" ? "reference" : "floating" : h], w = _s(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), E = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = _s(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: C,
    strategy: l
  }) : b);
  return {
    top: (w.top - k.top + m.top) / E.y,
    bottom: (k.bottom - w.bottom + m.bottom) / E.y,
    left: (w.left - k.left + m.left) / E.x,
    right: (k.right - w.right + m.right) / E.x
  };
}
const _5 = (t) => ({
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
    } = tr(t, e) || {};
    if (u == null)
      return {};
    const h = Xf(d), p = {
      x: n,
      y: r
    }, v = fu(o), m = pu(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", C = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", k = i.reference[m] + i.reference[v] - p[v] - i.floating[m], x = p[v] - i.reference[v], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let M = N ? N[E] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(N))) && (M = a.floating[E] || i.floating[m]);
    const j = k / 2 - x / 2, H = M / 2 - y[m] / 2 - 1, T = wr(h[b], H), _ = wr(h[C], H), S = T, z = M - y[m] - _, P = M / 2 - y[m] / 2 + j, A = ol(S, P, z), D = !l.arrow && Co(o) != null && P !== A && i.reference[m] / 2 - (P < S ? T : _) - y[m] / 2 < 0, B = D ? P < S ? P - S : P - z : 0;
    return {
      [v]: p[v] + B,
      data: {
        [v]: A,
        centerOffset: P - A - B,
        ...D && {
          alignmentOffset: B
        }
      },
      reset: D
    };
  }
}), E5 = function(t) {
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
      } = tr(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = nr(o), C = On(a), E = nr(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = p || (E || !y ? [Ss(a)] : w5(a)), N = m !== "none";
      !p && N && x.push(...k5(a, y, m, k));
      const M = [a, ...x], j = await ei(e, w), H = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(j[b]), h) {
        const P = y5(o, s, k);
        H.push(j[P[0]], j[P[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: H
      }], !H.every((P) => P <= 0)) {
        var _, S;
        const P = (((_ = i.flip) == null ? void 0 : _.index) || 0) + 1, A = M[P];
        if (A && (!(h === "alignment" && C !== On(A)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((B) => On(B.placement) === C ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: T
            },
            reset: {
              placement: A
            }
          };
        let D = (S = T.filter((B) => B.overflows[0] <= 0).sort((B, X) => B.overflows[1] - X.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!D)
          switch (v) {
            case "bestFit": {
              var z;
              const B = (z = T.filter((X) => {
                if (N) {
                  const U = On(X.placement);
                  return U === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((U) => U > 0).reduce((U, I) => U + I, 0)]).sort((X, U) => X[1] - U[1])[0]) == null ? void 0 : z[0];
              B && (D = B);
              break;
            }
            case "initialPlacement":
              D = a;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function Qc(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Jc(t) {
  return f5.some((e) => t[e] >= 0);
}
const P5 = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = tr(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await ei(e, {
            ...o,
            elementContext: "reference"
          }), s = Qc(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Jc(s)
            }
          };
        }
        case "escaped": {
          const i = await ei(e, {
            ...o,
            altBoundary: !0
          }), s = Qc(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Jc(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Yf = /* @__PURE__ */ new Set(["left", "top"]);
async function O5(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = nr(n), a = Co(n), l = On(n) === "y", u = Yf.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = tr(e, t);
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
const N5 = function(t) {
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
      } = e, l = await O5(e, t);
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
}, T5 = function(t) {
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
              y: C
            } = w;
            return {
              x: b,
              y: C
            };
          }
        },
        ...l
      } = tr(t, e), u = {
        x: n,
        y: r
      }, d = await ei(e, l), h = On(nr(o)), p = hu(h);
      let v = u[p], m = u[h];
      if (i) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", C = v + d[w], E = v - d[b];
        v = ol(C, v, E);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", C = m + d[w], E = m - d[b];
        m = ol(C, m, E);
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
}, D5 = function(t) {
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
      } = tr(t, e), d = {
        x: n,
        y: r
      }, h = On(o), p = hu(h);
      let v = d[p], m = d[h];
      const y = tr(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const E = p === "y" ? "height" : "width", k = i.reference[p] - i.floating[E] + w.mainAxis, x = i.reference[p] + i.reference[E] - w.mainAxis;
        v < k ? v = k : v > x && (v = x);
      }
      if (u) {
        var b, C;
        const E = p === "y" ? "width" : "height", k = Yf.has(nr(o)), x = i.reference[h] - i.floating[E] + (k && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (k ? 0 : w.crossAxis), N = i.reference[h] + i.reference[E] + (k ? 0 : ((C = s.offset) == null ? void 0 : C[h]) || 0) - (k ? w.crossAxis : 0);
        m < x ? m = x : m > N && (m = N);
      }
      return {
        [p]: v,
        [h]: m
      };
    }
  };
}, A5 = function(t) {
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
      } = tr(t, e), d = await ei(e, u), h = nr(o), p = Co(o), v = On(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = p === "end" ? "top" : "bottom");
      const C = y - d.top - d.bottom, E = m - d.left - d.right, k = wr(y - d[w], C), x = wr(m - d[b], E), N = !e.middlewareData.shift;
      let M = k, j = x;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (j = E), (r = e.middlewareData.shift) != null && r.enabled.y && (M = C), N && !p) {
        const T = qt(d.left, 0), _ = qt(d.right, 0), S = qt(d.top, 0), z = qt(d.bottom, 0);
        v ? j = m - 2 * (T !== 0 || _ !== 0 ? T + _ : qt(d.left, d.right)) : M = y - 2 * (S !== 0 || z !== 0 ? S + z : qt(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: j,
        availableHeight: M
      });
      const H = await s.getDimensions(a.floating);
      return m !== H.width || y !== H.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Gs() {
  return typeof window < "u";
}
function ko(t) {
  return Uf(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Yt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Bn(t) {
  var e;
  return (e = (Uf(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Uf(t) {
  return Gs() ? t instanceof Node || t instanceof Yt(t).Node : !1;
}
function mn(t) {
  return Gs() ? t instanceof Element || t instanceof Yt(t).Element : !1;
}
function zn(t) {
  return Gs() ? t instanceof HTMLElement || t instanceof Yt(t).HTMLElement : !1;
}
function ed(t) {
  return !Gs() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Yt(t).ShadowRoot;
}
const L5 = /* @__PURE__ */ new Set(["inline", "contents"]);
function xi(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = yn(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !L5.has(o);
}
const I5 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function M5(t) {
  return I5.has(ko(t));
}
const z5 = [":popover-open", ":modal"];
function Qs(t) {
  return z5.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const V5 = ["transform", "translate", "scale", "rotate", "perspective"], H5 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], B5 = ["paint", "layout", "strict", "content"];
function gu(t) {
  const e = vu(), n = mn(t) ? yn(t) : t;
  return V5.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || H5.some((r) => (n.willChange || "").includes(r)) || B5.some((r) => (n.contain || "").includes(r));
}
function R5(t) {
  let e = br(t);
  for (; zn(e) && !vo(e); ) {
    if (gu(e))
      return e;
    if (Qs(e))
      return null;
    e = br(e);
  }
  return null;
}
function vu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const K5 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function vo(t) {
  return K5.has(ko(t));
}
function yn(t) {
  return Yt(t).getComputedStyle(t);
}
function Js(t) {
  return mn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function br(t) {
  if (ko(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    ed(t) && t.host || // Fallback.
    Bn(t)
  );
  return ed(e) ? e.host : e;
}
function Gf(t) {
  const e = br(t);
  return vo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : zn(e) && xi(e) ? e : Gf(e);
}
function ti(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = Gf(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = Yt(o);
  if (i) {
    const a = sl(s);
    return e.concat(s, s.visualViewport || [], xi(o) ? o : [], a && n ? ti(a) : []);
  }
  return e.concat(o, ti(o, [], n));
}
function sl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Qf(t) {
  const e = yn(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = zn(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = $s(n) !== i || $s(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function mu(t) {
  return mn(t) ? t : t.contextElement;
}
function ro(t) {
  const e = mu(t);
  if (!zn(e))
    return An(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Qf(e);
  let s = (i ? $s(n.width) : n.width) / r, a = (i ? $s(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const F5 = /* @__PURE__ */ An(0);
function Jf(t) {
  const e = Yt(t);
  return !vu() || !e.visualViewport ? F5 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function j5(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== Yt(t) ? !1 : e;
}
function Rr(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = mu(t);
  let s = An(1);
  e && (r ? mn(r) && (s = ro(r)) : s = ro(t));
  const a = j5(i, n, r) ? Jf(i) : An(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const p = Yt(i), v = r && mn(r) ? Yt(r) : r;
    let m = p, y = sl(m);
    for (; y && r && v !== m; ) {
      const w = ro(y), b = y.getBoundingClientRect(), C = yn(y), E = b.left + (y.clientLeft + parseFloat(C.paddingLeft)) * w.x, k = b.top + (y.clientTop + parseFloat(C.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += E, u += k, m = Yt(y), y = sl(m);
    }
  }
  return _s({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function ea(t, e) {
  const n = Js(t).scrollLeft;
  return e ? e.left + n : Rr(Bn(t)).left + n;
}
function eg(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - ea(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Z5(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = Bn(r), a = e ? Qs(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = An(1);
  const d = An(0), h = zn(r);
  if ((h || !h && !i) && ((ko(r) !== "body" || xi(s)) && (l = Js(r)), zn(r))) {
    const v = Rr(r);
    u = ro(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const p = s && !h && !i ? eg(s, l) : An(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function W5(t) {
  return Array.from(t.getClientRects());
}
function q5(t) {
  const e = Bn(t), n = Js(t), r = t.ownerDocument.body, o = qt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = qt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ea(t);
  const a = -n.scrollTop;
  return yn(r).direction === "rtl" && (s += qt(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const td = 25;
function X5(t, e) {
  const n = Yt(t), r = Bn(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = vu();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = ea(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, p = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= td && (i -= m);
  } else u <= td && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Y5 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function U5(t, e) {
  const n = Rr(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = zn(t) ? ro(t) : An(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function nd(t, e, n) {
  let r;
  if (e === "viewport")
    r = X5(t, n);
  else if (e === "document")
    r = q5(Bn(t));
  else if (mn(e))
    r = U5(e, n);
  else {
    const o = Jf(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return _s(r);
}
function tg(t, e) {
  const n = br(t);
  return n === e || !mn(n) || vo(n) ? !1 : yn(n).position === "fixed" || tg(n, e);
}
function G5(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ti(t, [], !1).filter((a) => mn(a) && ko(a) !== "body"), o = null;
  const i = yn(t).position === "fixed";
  let s = i ? br(t) : t;
  for (; mn(s) && !vo(s); ) {
    const a = yn(s), l = gu(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && Y5.has(o.position) || xi(s) && !l && tg(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = br(s);
  }
  return e.set(t, r), r;
}
function Q5(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? Qs(e) ? [] : G5(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = nd(e, u, o);
    return l.top = qt(d.top, l.top), l.right = wr(d.right, l.right), l.bottom = wr(d.bottom, l.bottom), l.left = qt(d.left, l.left), l;
  }, nd(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function J5(t) {
  const {
    width: e,
    height: n
  } = Qf(t);
  return {
    width: e,
    height: n
  };
}
function e3(t, e, n) {
  const r = zn(e), o = Bn(e), i = n === "fixed", s = Rr(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = An(0);
  function u() {
    l.x = ea(o);
  }
  if (r || !r && !i)
    if ((ko(e) !== "body" || xi(o)) && (a = Js(e)), r) {
      const v = Rr(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? eg(o, a) : An(0), h = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: p,
    width: s.width,
    height: s.height
  };
}
function ka(t) {
  return yn(t).position === "static";
}
function rd(t, e) {
  if (!zn(t) || yn(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Bn(t) === n && (n = n.ownerDocument.body), n;
}
function ng(t, e) {
  const n = Yt(t);
  if (Qs(t))
    return n;
  if (!zn(t)) {
    let o = br(t);
    for (; o && !vo(o); ) {
      if (mn(o) && !ka(o))
        return o;
      o = br(o);
    }
    return n;
  }
  let r = rd(t, e);
  for (; r && M5(r) && ka(r); )
    r = rd(r, e);
  return r && vo(r) && ka(r) && !gu(r) ? n : r || R5(t) || n;
}
const t3 = async function(t) {
  const e = this.getOffsetParent || ng, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: e3(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function n3(t) {
  return yn(t).direction === "rtl";
}
const r3 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Z5,
  getDocumentElement: Bn,
  getClippingRect: Q5,
  getOffsetParent: ng,
  getElementRects: t3,
  getClientRects: W5,
  getDimensions: J5,
  getScale: ro,
  isElement: mn,
  isRTL: n3
};
function rg(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function o3(t, e) {
  let n = null, r;
  const o = Bn(t);
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
    const m = Ii(h), y = Ii(o.clientWidth - (d + p)), w = Ii(o.clientHeight - (h + v)), b = Ii(d), C = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: qt(0, wr(1, l)) || 1
    };
    let E = !0;
    function k(x) {
      const N = x[0].intersectionRatio;
      if (N !== l) {
        if (!E)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !rg(u, t.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, C);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function i3(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = mu(t), d = o || i ? [...u ? ti(u) : [], ...ti(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const h = u && a ? o3(u, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === u && v && (v.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var E;
      (E = v) == null || E.observe(e);
    })), n();
  }), u && !l && v.observe(u), v.observe(e));
  let m, y = l ? Rr(t) : null;
  l && w();
  function w() {
    const b = Rr(t);
    y && !rg(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((C) => {
      o && C.removeEventListener("scroll", n), i && C.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const og = N5, ig = T5, sg = E5, s3 = A5, a3 = P5, ag = _5, l3 = D5, lg = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: r3,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return S5(t, e, {
    ...o,
    platform: i
  });
};
function _r(t) {
  return typeof t == "function" ? t() : t;
}
function ug(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function od(t, e) {
  const n = ug(t);
  return Math.round(e * n) / n;
}
function u3(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function c3(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ $(() => _r(t.open) ?? !0), r = /* @__PURE__ */ $(() => _r(t.middleware)), o = /* @__PURE__ */ $(() => _r(t.transform) ?? !0), i = /* @__PURE__ */ $(() => _r(t.placement) ?? "bottom"), s = /* @__PURE__ */ $(() => _r(t.strategy) ?? "absolute"), a = /* @__PURE__ */ $(() => _r(t.sideOffset) ?? 0), l = /* @__PURE__ */ $(() => _r(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ me(0), h = /* @__PURE__ */ me(0);
  const p = Pn(null);
  let v = /* @__PURE__ */ me(ht(c(s))), m = /* @__PURE__ */ me(ht(c(i))), y = /* @__PURE__ */ me(ht({})), w = /* @__PURE__ */ me(!1), b = !1, C = 0;
  const E = /* @__PURE__ */ $(() => {
    const T = p.current ? od(p.current, c(d)) : c(d), _ = p.current ? od(p.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${T}px, ${_}px)`,
      ...p.current && ug(p.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: c(v),
      left: `${T}px`,
      top: `${_}px`
    };
  });
  let k;
  function x() {
    if (u.current === null || p.current === null) return;
    const T = u.current, _ = p.current, S = ++C;
    lg(T, _, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((z) => {
      if (!(S !== C || u.current !== T || p.current !== _)) {
        if (d3(T)) {
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
          const P = Math.max(Math.abs(c(a)), Math.abs(c(l)), 15);
          if (z.x <= P && z.y <= P) return;
        }
        K(d, z.x, !0), K(h, z.y, !0), K(v, z.strategy, !0), K(m, z.placement, !0), K(y, z.middlewareData, !0), K(w, !0);
      }
    });
  }
  function N() {
    typeof k == "function" && (k(), k = void 0), C++;
  }
  function M() {
    if (N(), e === void 0) {
      x();
      return;
    }
    c(n) && (u.current === null || p.current === null || (k = e(u.current, p.current, x)));
  }
  function j() {
    !c(n) && p.current === null && K(w, !1);
  }
  function H() {
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
  }), Ie(M), Ie(() => {
    if (e !== void 0) {
      if (H(), !c(n)) {
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
  }), Ie(j), Ie(() => N), {
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
      return c(E);
    },
    get update() {
      return x;
    }
  };
}
function d3(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const h3 = { top: "bottom", right: "left", bottom: "top", left: "right" }, yu = new Sr("Floating.Root"), id = new Sr("Floating.Content"), wu = new Sr("Floating.Root");
class Es {
  static create(e = !1) {
    return e ? wu.set(new Es()) : yu.set(new Es());
  }
  anchorNode = Pn(null);
  customAnchorNode = Pn(null);
  triggerNode = Pn(null);
  constructor() {
    Ie(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class Ps {
  static create(e, n = !1) {
    return n ? id.set(new Ps(e, wu.get())) : id.set(new Ps(e, yu.get()));
  }
  opts;
  root;
  // nodes
  contentRef = Pn(null);
  wrapperRef = Pn(null);
  arrowRef = Pn(null);
  contentAttachment = mr(this.contentRef);
  wrapperAttachment = mr(this.wrapperRef);
  arrowAttachment = mr(this.arrowRef);
  // ids
  arrowId = Pn(ks());
  #e = /* @__PURE__ */ $(() => {
    if (typeof this.opts.style == "string") return Lo(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new e7(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ $(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ $(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ $(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ $(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ $(() => c(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return c(this.#s);
  }
  set hasExplicitBoundaries(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ $(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: c(this.#a).filter(m7),
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
  #f = /* @__PURE__ */ $(() => [
    og({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && ig({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? l3() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && sg({ ...this.detectOverflowOptions }),
    s3({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        K(this.#u, n, !0), K(this.#c, r, !0), K(this.#d, o, !0), K(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && ag({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    p3({
      arrowWidth: c(this.#r),
      arrowHeight: c(this.#o)
    }),
    this.opts.hideWhenDetached.current && a3({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return c(this.#f);
  }
  set middleware(e) {
    K(this.#f, e);
  }
  floating;
  #p = /* @__PURE__ */ $(() => f3(this.floating.placement));
  get placedSide() {
    return c(this.#p);
  }
  set placedSide(e) {
    K(this.#p, e);
  }
  #y = /* @__PURE__ */ $(() => g3(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    K(this.#y, e);
  }
  #v = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#v);
  }
  set arrowX(e) {
    K(this.#v, e);
  }
  #w = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    K(this.#w, e);
  }
  #m = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
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
  #b = /* @__PURE__ */ $(() => h3[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    K(this.#b, e);
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
    K(this.#x, e);
  }
  #C = /* @__PURE__ */ $(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: tu({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#C);
  }
  set props(e) {
    K(this.#C, e);
  }
  #k = /* @__PURE__ */ $(() => ({
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
    return c(this.#k);
  }
  set arrowStyle(e) {
    K(this.#k, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), yt(() => e.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = c3({
      strategy: () => this.opts.strategy.current,
      placement: () => c(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => i3(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), Ie(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), yt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = Cf(r), i = o.requestAnimationFrame(() => {
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
class Os {
  static create(e, n = !1) {
    return n ? new Os(e, wu.get()) : new Os(e, yu.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = Ax(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function p3(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, i = o.arrow?.centerOffset !== 0, s = i ? 0 : t.arrowWidth, a = i ? 0 : t.arrowHeight, [l, u] = bu(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + s / 2, p = (o.arrow?.y ?? 0) + a / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = i ? d : `${h}px`, m = `${-a}px`) : l === "top" ? (v = i ? d : `${h}px`, m = `${r.floating.height + a}px`) : l === "right" ? (v = `${-a}px`, m = i ? d : `${p}px`) : l === "left" && (v = `${r.floating.width + a}px`, m = i ? d : `${p}px`), { data: { x: v, y: m } };
    }
  };
}
function bu(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function f3(t) {
  return bu(t)[0];
}
function g3(t) {
  return bu(t)[1];
}
function cg(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  Es.create(r());
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
  }, i = ce(), s = Q(i);
  return Ee(s, () => n() ?? He), O(t, i), le(o);
}
se(cg, { children: {}, tooltip: {} }, [], [], !0);
class v3 {
  #e;
  #t = /* @__PURE__ */ $(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = Hf("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = ru(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const m3 = [Io, Ef, Sf], y3 = [Gr, _f, $f], w3 = [...m3, ...y3], b3 = nu({
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
}), Ci = new Sr("Select.Root | Combobox.Root"), dg = new Sr("Select.Content | Combobox.Content");
class hg {
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
  #s = /* @__PURE__ */ $(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    K(this.#s, e);
  }
  #l = /* @__PURE__ */ $(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    K(this.#l, e);
  }
  #u = /* @__PURE__ */ $(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
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
  domContext = new bi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new w7({
      ref: pe(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    }), Ht(() => {
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
  getBitsAttr = (e) => b3.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class x3 extends hg {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ $(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    K(this.#t, e);
  }
  #n = /* @__PURE__ */ $(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    K(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, Ie(() => {
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
    wi(() => {
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
class C3 extends hg {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ $(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    K(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, Ie(() => {
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
    wi(() => {
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
class k3 {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new x3(r) : new C3(r);
    return Ci.set(o);
  }
}
class xu {
  static create(e) {
    return new xu(e, Ci.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = mr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new bi(e.ref), this.#e = new Y7({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new v3({
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
    if (this.root.isUsingKeyboard = !0, (e.key === Gr || e.key === Io) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === Qa || e.key === Wi || e.key === Io || e.key === Gr)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === Io) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === Gr) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === Rc) {
      this.root.handleClose();
      return;
    }
    if ((e.key === Qa || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === Wi && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === Gr && e.altKey && this.root.handleClose(), w3.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === Io ? d = j7(s, l, u) : e.key === Gr ? d = Z7(s, l, u) : e.key === _f ? d = W7(s, l, 10, u) : e.key === Ef ? d = q7(s, l, 10, u) : e.key === Sf ? d = s[0] : e.key === $f && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === Wi, i = this.root.getCandidateNodes();
    if (e.key !== Rc) {
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
    "aria-expanded": Ga(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": kf(this.root.opts.open.current),
    "data-disabled": ys(this.root.opts.disabled.current),
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
class Cu {
  static create(e) {
    return dg.set(new Cu(e, Ci.get()));
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
    this.opts = e, this.root = n, this.attachment = mr(e.ref, (r) => this.root.contentNode = r), this.domContext = new bi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), xo(() => {
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
  #t = /* @__PURE__ */ $(() => u3(this.root.isCombobox ? "combobox" : "select"));
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
    K(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": kf(this.root.opts.open.current),
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
  #e = /* @__PURE__ */ $(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return c(this.#e);
  }
  set isSelected(e) {
    K(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return c(this.#t);
  }
  set isHighlighted(e) {
    K(this.#t, e);
  }
  prevHighlighted = new t7(() => this.isHighlighted);
  #n = /* @__PURE__ */ me(!1);
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
  #r = /* @__PURE__ */ $(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
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
      if (e.pointerType === "touch" && !Ja) {
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
    "data-disabled": ys(this.opts.disabled.current),
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
class $u {
  static create(e) {
    return new $u(e, Ci.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ $(() => this.root.opts.name.current !== "");
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
  #t = /* @__PURE__ */ $(() => ({
    disabled: Bc(this.root.opts.disabled.current),
    required: Bc(this.root.opts.required.current),
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
class Su {
  static create(e) {
    return new Su(e, dg.get());
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
    this.opts = e, this.content = n, this.root = n.root, this.attachment = mr(e.ref, (r) => {
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
    K(this.#t, e);
  }
}
function Xi(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = g(e, "autocomplete", 7);
  const o = $u.create({ value: pe(() => n()) });
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
  }, s = ce(), a = Q(s);
  {
    var l = (u) => {
      du(u, Ve(() => o.props, {
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
    ie(a, (u) => {
      o.shouldRender && u(l);
    });
  }
  return O(t, s), le(i);
}
se(Xi, { value: {}, autocomplete: {} }, [], [], !0);
function pg(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  Os.create(
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
  }, l = ce(), u = Q(l);
  return Ee(u, () => r() ?? He), O(t, l), le(a);
}
se(pg, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function fg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), p = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), C = g(e, "style", 23, () => ({})), E = g(e, "wrapperId", 23, ks), k = g(e, "customAnchor", 7, null), x = g(e, "enabled", 7), N = g(e, "tooltip", 7, !1);
  const M = Ps.create(
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
      style: pe(() => C()),
      enabled: pe(() => x()),
      wrapperId: pe(() => E()),
      customAnchor: pe(() => k())
    },
    N()
  ), j = /* @__PURE__ */ $(() => Dn(M.wrapperProps, { style: { pointerEvents: "auto" } }));
  var H = {
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
      return C();
    },
    set style(S = {}) {
      C(S), f();
    },
    get wrapperId() {
      return E();
    },
    set wrapperId(S = ks()) {
      E(S), f();
    },
    get customAnchor() {
      return k();
    },
    set customAnchor(S = null) {
      k(S), f();
    },
    get enabled() {
      return x();
    },
    set enabled(S) {
      x(S), f();
    },
    get tooltip() {
      return N();
    },
    set tooltip(S = !1) {
      N(S), f();
    }
  }, T = ce(), _ = Q(T);
  return Ee(_, () => n() ?? He, () => ({ props: M.props, wrapperProps: c(j) })), O(t, T), le(H);
}
se(
  fg,
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
function gg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "onPlaced", 7);
  wn(() => {
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
  }, i = ce(), s = Q(i);
  return Ee(s, () => n() ?? He, () => ({ props: {}, wrapperProps: {} })), O(t, i), le(o);
}
se(gg, { content: {}, onPlaced: {} }, [], [], !0);
function vg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "isStatic", 7, !1), o = g(e, "onPlaced", 7), i = /* @__PURE__ */ Le(e, [
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
  }, a = ce(), l = Q(a);
  {
    var u = (h) => {
      gg(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      fg(h, Ve(
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
    ie(l, (h) => {
      r() ? h(u) : h(d, !1);
    });
  }
  return O(t, a), le(s);
}
se(vg, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var $3 = /* @__PURE__ */ ee("<!> <!>", 1);
function _u(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), C = g(e, "hideWhenDetached", 7), E = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), x = g(e, "dir", 7), N = g(e, "preventScroll", 7), M = g(e, "wrapperId", 7), j = g(e, "style", 7), H = g(e, "onPlaced", 7), T = g(e, "onInteractOutside", 7), _ = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), z = g(e, "onFocusOutside", 7), P = g(e, "interactOutsideBehavior", 7, "close"), A = g(e, "loop", 7), D = g(e, "trapFocus", 7, !0), B = g(e, "isValidEvent", 7, () => !1), X = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), I = g(e, "enabled", 7), Y = g(e, "ref", 7), q = g(e, "tooltip", 7, !1), R = g(e, "contentPointerEvents", 7, "auto"), W = /* @__PURE__ */ Le(e, [
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
  const J = /* @__PURE__ */ $(() => N() ?? !0), te = /* @__PURE__ */ $(() => k() ?? (c(J) ? "fixed" : "absolute"));
  var oe = {
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
      return C();
    },
    set hideWhenDetached(L) {
      C(L), f();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(L) {
      E(L), f();
    },
    get strategy() {
      return k();
    },
    set strategy(L) {
      k(L), f();
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
      return M();
    },
    set wrapperId(L) {
      M(L), f();
    },
    get style() {
      return j();
    },
    set style(L) {
      j(L), f();
    },
    get onPlaced() {
      return H();
    },
    set onPlaced(L) {
      H(L), f();
    },
    get onInteractOutside() {
      return T();
    },
    set onInteractOutside(L) {
      T(L), f();
    },
    get onCloseAutoFocus() {
      return _();
    },
    set onCloseAutoFocus(L) {
      _(L), f();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(L) {
      S(L), f();
    },
    get onFocusOutside() {
      return z();
    },
    set onFocusOutside(L) {
      z(L), f();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(L = "close") {
      P(L), f();
    },
    get loop() {
      return A();
    },
    set loop(L) {
      A(L), f();
    },
    get trapFocus() {
      return D();
    },
    set trapFocus(L = !0) {
      D(L), f();
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
      return I();
    },
    set enabled(L) {
      I(L), f();
    },
    get ref() {
      return Y();
    },
    set ref(L) {
      Y(L), f();
    },
    get tooltip() {
      return q();
    },
    set tooltip(L = !1) {
      q(L), f();
    },
    get contentPointerEvents() {
      return R();
    },
    set contentPointerEvents(L = "auto") {
      R(L), f();
    }
  };
  return vg(t, {
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
      return C();
    },
    get updatePositionStrategy() {
      return E();
    },
    get strategy() {
      return c(te);
    },
    get dir() {
      return x();
    },
    get wrapperId() {
      return M();
    },
    get style() {
      return j();
    },
    get onPlaced() {
      return H();
    },
    get customAnchor() {
      return X();
    },
    get enabled() {
      return I();
    },
    get tooltip() {
      return q();
    },
    content: (L, ne) => {
      let fe = () => ne?.().props, he = () => ne?.().wrapperProps;
      var re = $3(), ue = Q(re);
      {
        var ge = (de) => {
          rl(de, {
            get preventScroll() {
              return c(J);
            }
          });
        }, ye = (de) => {
          var we = ce(), Te = Q(we);
          {
            var G = (Me) => {
              rl(Me, {
                get preventScroll() {
                  return c(J);
                }
              });
            };
            ie(
              Te,
              (Me) => {
                e.forceMount || Me(G);
              },
              !0
            );
          }
          O(de, we);
        };
        ie(ue, (de) => {
          e.forceMount && I() ? de(ge) : de(ye, !1);
        });
      }
      var be = V(ue, 2);
      Kf(be, {
        get onOpenAutoFocus() {
          return S();
        },
        get onCloseAutoFocus() {
          return _();
        },
        get loop() {
          return A();
        },
        get enabled() {
          return I();
        },
        get trapFocus() {
          return D();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return Y();
        },
        focusScope: (de, we) => {
          let Te = () => we?.().props;
          Rf(de, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return I();
            },
            get ref() {
              return Y();
            },
            children: (G, Me) => {
              Bf(G, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return T();
                },
                get onFocusOutside() {
                  return z();
                },
                get interactOutsideBehavior() {
                  return P();
                },
                get isValidEvent() {
                  return B();
                },
                get enabled() {
                  return I();
                },
                get ref() {
                  return Y();
                },
                children: (ke, Ne) => {
                  let ze = () => Ne?.().props;
                  Ff(ke, {
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
                      return I();
                    },
                    get ref() {
                      return Y();
                    },
                    children: (Xe, rt) => {
                      var Ge = ce(), ot = Q(Ge);
                      {
                        let ve = /* @__PURE__ */ $(() => ({
                          props: Dn(W, fe(), ze(), Te(), { style: { pointerEvents: R() } }),
                          wrapperProps: he()
                        }));
                        Ee(ot, () => n() ?? He, () => c(ve));
                      }
                      O(Xe, Ge);
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
      }), O(L, re);
    },
    $$slots: { content: !0 }
  }), le(oe);
}
se(
  _u,
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
function mg(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), p = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), C = g(e, "sticky", 7), E = g(e, "hideWhenDetached", 7), k = g(e, "updatePositionStrategy", 7), x = g(e, "strategy", 7), N = g(e, "dir", 7), M = g(e, "preventScroll", 7), j = g(e, "wrapperId", 7), H = g(e, "style", 7), T = g(e, "onPlaced", 7), _ = g(e, "onInteractOutside", 7), S = g(e, "onCloseAutoFocus", 7), z = g(e, "onOpenAutoFocus", 7), P = g(e, "onFocusOutside", 7), A = g(e, "interactOutsideBehavior", 7, "close"), D = g(e, "loop", 7), B = g(e, "trapFocus", 7, !0), X = g(e, "isValidEvent", 7, () => !1), U = g(e, "customAnchor", 7, null), I = g(e, "isStatic", 7, !1), Y = g(e, "ref", 7), q = g(e, "shouldRender", 7), R = /* @__PURE__ */ Le(e, [
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
  var W = {
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
      return C();
    },
    set sticky(L) {
      C(L), f();
    },
    get hideWhenDetached() {
      return E();
    },
    set hideWhenDetached(L) {
      E(L), f();
    },
    get updatePositionStrategy() {
      return k();
    },
    set updatePositionStrategy(L) {
      k(L), f();
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
      return M();
    },
    set preventScroll(L) {
      M(L), f();
    },
    get wrapperId() {
      return j();
    },
    set wrapperId(L) {
      j(L), f();
    },
    get style() {
      return H();
    },
    set style(L) {
      H(L), f();
    },
    get onPlaced() {
      return T();
    },
    set onPlaced(L) {
      T(L), f();
    },
    get onInteractOutside() {
      return _();
    },
    set onInteractOutside(L) {
      _(L), f();
    },
    get onCloseAutoFocus() {
      return S();
    },
    set onCloseAutoFocus(L) {
      S(L), f();
    },
    get onOpenAutoFocus() {
      return z();
    },
    set onOpenAutoFocus(L) {
      z(L), f();
    },
    get onFocusOutside() {
      return P();
    },
    set onFocusOutside(L) {
      P(L), f();
    },
    get interactOutsideBehavior() {
      return A();
    },
    set interactOutsideBehavior(L = "close") {
      A(L), f();
    },
    get loop() {
      return D();
    },
    set loop(L) {
      D(L), f();
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
      return I();
    },
    set isStatic(L = !1) {
      I(L), f();
    },
    get ref() {
      return Y();
    },
    set ref(L) {
      Y(L), f();
    },
    get shouldRender() {
      return q();
    },
    set shouldRender(L) {
      q(L), f();
    }
  }, J = ce(), te = Q(J);
  {
    var oe = (L) => {
      _u(L, Ve(
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
            return C();
          },
          get hideWhenDetached() {
            return E();
          },
          get updatePositionStrategy() {
            return k();
          },
          get strategy() {
            return x();
          },
          get dir() {
            return N();
          },
          get preventScroll() {
            return M();
          },
          get wrapperId() {
            return j();
          },
          get style() {
            return H();
          },
          get onPlaced() {
            return T();
          },
          get customAnchor() {
            return U();
          },
          get isStatic() {
            return I();
          },
          get enabled() {
            return r();
          },
          get onInteractOutside() {
            return _();
          },
          get onCloseAutoFocus() {
            return S();
          },
          get onOpenAutoFocus() {
            return z();
          },
          get interactOutsideBehavior() {
            return A();
          },
          get loop() {
            return D();
          },
          get trapFocus() {
            return B();
          },
          get isValidEvent() {
            return X();
          },
          get onFocusOutside() {
            return P();
          },
          forceMount: !1,
          get ref() {
            return Y();
          }
        },
        () => R
      ));
    };
    ie(te, (L) => {
      q() && L(oe);
    });
  }
  return O(t, J), le(W);
}
se(
  mg,
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
function yg(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), C = g(e, "hideWhenDetached", 7), E = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), x = g(e, "dir", 7), N = g(e, "preventScroll", 7), M = g(e, "wrapperId", 7), j = g(e, "style", 7), H = g(e, "onPlaced", 7), T = g(e, "onInteractOutside", 7), _ = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), z = g(e, "onFocusOutside", 7), P = g(e, "interactOutsideBehavior", 7, "close"), A = g(e, "loop", 7), D = g(e, "trapFocus", 7, !0), B = g(e, "isValidEvent", 7, () => !1), X = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), I = g(e, "enabled", 7), Y = /* @__PURE__ */ Le(e, [
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
      return C();
    },
    set hideWhenDetached(R) {
      C(R), f();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(R) {
      E(R), f();
    },
    get strategy() {
      return k();
    },
    set strategy(R) {
      k(R), f();
    },
    get dir() {
      return x();
    },
    set dir(R) {
      x(R), f();
    },
    get preventScroll() {
      return N();
    },
    set preventScroll(R) {
      N(R), f();
    },
    get wrapperId() {
      return M();
    },
    set wrapperId(R) {
      M(R), f();
    },
    get style() {
      return j();
    },
    set style(R) {
      j(R), f();
    },
    get onPlaced() {
      return H();
    },
    set onPlaced(R) {
      H(R), f();
    },
    get onInteractOutside() {
      return T();
    },
    set onInteractOutside(R) {
      T(R), f();
    },
    get onCloseAutoFocus() {
      return _();
    },
    set onCloseAutoFocus(R) {
      _(R), f();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(R) {
      S(R), f();
    },
    get onFocusOutside() {
      return z();
    },
    set onFocusOutside(R) {
      z(R), f();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(R = "close") {
      P(R), f();
    },
    get loop() {
      return A();
    },
    set loop(R) {
      A(R), f();
    },
    get trapFocus() {
      return D();
    },
    set trapFocus(R = !0) {
      D(R), f();
    },
    get isValidEvent() {
      return B();
    },
    set isValidEvent(R = () => !1) {
      B(R), f();
    },
    get customAnchor() {
      return X();
    },
    set customAnchor(R = null) {
      X(R), f();
    },
    get isStatic() {
      return U();
    },
    set isStatic(R = !1) {
      U(R), f();
    },
    get enabled() {
      return I();
    },
    set enabled(R) {
      I(R), f();
    }
  };
  return _u(t, Ve(
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
        return C();
      },
      get updatePositionStrategy() {
        return E();
      },
      get strategy() {
        return k();
      },
      get dir() {
        return x();
      },
      get preventScroll() {
        return N();
      },
      get wrapperId() {
        return M();
      },
      get style() {
        return j();
      },
      get onPlaced() {
        return H();
      },
      get customAnchor() {
        return X();
      },
      get isStatic() {
        return U();
      },
      get enabled() {
        return I();
      },
      get onInteractOutside() {
        return T();
      },
      get onCloseAutoFocus() {
        return _();
      },
      get onOpenAutoFocus() {
        return S();
      },
      get interactOutsideBehavior() {
        return P();
      },
      get loop() {
        return A();
      },
      get trapFocus() {
        return D();
      },
      get isValidEvent() {
        return B();
      },
      get onFocusOutside() {
        return z();
      }
    },
    () => Y,
    { forceMount: !0 }
  )), le(q);
}
se(
  yg,
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
var S3 = /* @__PURE__ */ ee("<div><div><!></div></div>"), _3 = /* @__PURE__ */ ee("<div><div><!></div></div>");
function al(t, e) {
  const n = si();
  ae(e, !0);
  let r = g(e, "id", 23, () => Mn(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, Be), l = g(e, "onEscapeKeydown", 7, Be), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), p = g(e, "style", 7), v = /* @__PURE__ */ Le(e, [
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
  const m = Cu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (x) => o(x)),
    onInteractOutside: pe(() => a()),
    onEscapeKeydown: pe(() => l())
  }), y = /* @__PURE__ */ $(() => Dn(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(x = Mn(n)) {
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
    set onInteractOutside(x = Be) {
      a(x), f();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(x = Be) {
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
  }, b = ce(), C = Q(b);
  {
    var E = (x) => {
      yg(x, Ve(() => c(y), () => m.popperProps, {
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
        popper: (N, M) => {
          let j = () => M?.().props, H = () => M?.().wrapperProps;
          const T = /* @__PURE__ */ $(() => Dn(j(), { style: m.props.style }, { style: p() }));
          var _ = ce(), S = Q(_);
          {
            var z = (A) => {
              var D = ce(), B = Q(D);
              {
                let X = /* @__PURE__ */ $(() => ({
                  props: c(T),
                  wrapperProps: H(),
                  ...m.snippetProps
                }));
                Ee(B, d, () => c(X));
              }
              O(A, D);
            }, P = (A) => {
              var D = S3();
              Ye(D, () => ({ ...H() }));
              var B = Z(D);
              Ye(B, () => ({ ...c(T) }));
              var X = Z(B);
              Ee(X, () => u() ?? He), F(B), F(D), O(A, D);
            };
            ie(S, (A) => {
              d() ? A(z) : A(P, !1);
            });
          }
          O(N, _);
        },
        $$slots: { popper: !0 }
      }));
    }, k = (x) => {
      var N = ce(), M = Q(N);
      {
        var j = (H) => {
          mg(H, Ve(() => c(y), () => m.popperProps, {
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
            popper: (T, _) => {
              let S = () => _?.().props, z = () => _?.().wrapperProps;
              const P = /* @__PURE__ */ $(() => Dn(S(), { style: m.props.style }, { style: p() }));
              var A = ce(), D = Q(A);
              {
                var B = (U) => {
                  var I = ce(), Y = Q(I);
                  {
                    let q = /* @__PURE__ */ $(() => ({
                      props: c(P),
                      wrapperProps: z(),
                      ...m.snippetProps
                    }));
                    Ee(Y, d, () => c(q));
                  }
                  O(U, I);
                }, X = (U) => {
                  var I = _3();
                  Ye(I, () => ({ ...z() }));
                  var Y = Z(I);
                  Ye(Y, () => ({ ...c(P) }));
                  var q = Z(Y);
                  Ee(q, () => u() ?? He), F(Y), F(I), O(U, I);
                };
                ie(D, (U) => {
                  d() ? U(B) : U(X, !1);
                });
              }
              O(T, A);
            },
            $$slots: { popper: !0 }
          }));
        };
        ie(
          M,
          (H) => {
            i() || H(j);
          },
          !0
        );
      }
      O(x, N);
    };
    ie(C, (x) => {
      i() ? x(E) : x(k, !1);
    });
  }
  return O(t, b), le(w);
}
se(
  al,
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
function wg(t, e) {
  ae(e, !0);
  let n = g(e, "mounted", 15, !1), r = g(e, "onMountedChange", 7, Be);
  n7(() => (n(!0), r()(!0), () => {
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
    set onMountedChange(i = Be) {
      r(i), f();
    }
  };
  return le(o);
}
se(wg, { mounted: {}, onMountedChange: {} }, [], [], !0);
var E3 = /* @__PURE__ */ ee("<div><!></div>"), P3 = /* @__PURE__ */ ee("<!> <!>", 1);
function ll(t, e) {
  const n = si();
  ae(e, !0);
  let r = g(e, "id", 23, () => Mn(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, Be), h = g(e, "onUnhighlight", 7, Be), p = /* @__PURE__ */ Le(e, [
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
  const v = ku.create({
    id: pe(() => r()),
    ref: pe(() => o(), (x) => o(x)),
    value: pe(() => i()),
    disabled: pe(() => a()),
    label: pe(() => s()),
    onHighlight: pe(() => d()),
    onUnhighlight: pe(() => h())
  }), m = /* @__PURE__ */ $(() => Dn(p, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(x = Mn(n)) {
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
    set onHighlight(x = Be) {
      d(x), f();
    },
    get onUnhighlight() {
      return h();
    },
    set onUnhighlight(x = Be) {
      h(x), f();
    }
  }, w = P3(), b = Q(w);
  {
    var C = (x) => {
      var N = ce(), M = Q(N);
      {
        let j = /* @__PURE__ */ $(() => ({ props: c(m), ...v.snippetProps }));
        Ee(M, u, () => c(j));
      }
      O(x, N);
    }, E = (x) => {
      var N = E3();
      Ye(N, () => ({ ...c(m) }));
      var M = Z(N);
      Ee(M, () => l() ?? He, () => v.snippetProps), F(N), O(x, N);
    };
    ie(b, (x) => {
      u() ? x(C) : x(E, !1);
    });
  }
  var k = V(b, 2);
  return wg(k, {
    get mounted() {
      return v.mounted;
    },
    set mounted(x) {
      v.mounted = x;
    }
  }), O(t, w), le(y);
}
se(
  ll,
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
var O3 = /* @__PURE__ */ ee("<div><!></div>");
const N3 = {
  hash: "svelte-z03me6",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function ul(t, e) {
  const n = si();
  ae(e, !0), Ue(t, N3);
  let r = g(e, "id", 23, () => Mn(n)), o = g(e, "ref", 15, null), i = g(e, "children", 7), s = g(e, "child", 7), a = /* @__PURE__ */ Le(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "children",
    "child"
  ]);
  const l = Su.create({
    id: pe(() => r()),
    ref: pe(() => o(), (y) => o(y))
  }), u = /* @__PURE__ */ $(() => Dn(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Mn(n)) {
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
  }, h = ce(), p = Q(h);
  {
    var v = (y) => {
      var w = ce(), b = Q(w);
      Ee(b, s, () => ({ props: c(u) })), O(y, w);
    }, m = (y) => {
      var w = O3();
      Ye(w, () => ({ ...c(u) }));
      var b = Z(w);
      Ee(b, () => i() ?? He), F(w), O(y, w);
    };
    ie(p, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return O(t, h), le(d);
}
se(ul, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var T3 = /* @__PURE__ */ ee("<!> <!>", 1);
function cl(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = g(e, "onValueChange", 7, Be), o = g(e, "name", 7, ""), i = g(e, "disabled", 7, !1), s = g(e, "type", 7), a = g(e, "open", 15, !1), l = g(e, "onOpenChange", 7, Be), u = g(e, "onOpenChangeComplete", 7, Be), d = g(e, "loop", 7, !1), h = g(e, "scrollAlignment", 7, "nearest"), p = g(e, "required", 7, !1), v = g(e, "items", 23, () => []), m = g(e, "allowDeselect", 7, !1), y = g(e, "autocomplete", 7), w = g(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), yt.pre(() => n(), () => {
    b();
  });
  let C = /* @__PURE__ */ me("");
  const E = k3.create({
    type: s(),
    value: pe(() => n(), (T) => {
      n(T), r()(T);
    }),
    disabled: pe(() => i()),
    required: pe(() => p()),
    open: pe(() => a(), (T) => {
      a(T), l()(T);
    }),
    loop: pe(() => d()),
    scrollAlignment: pe(() => h()),
    name: pe(() => o()),
    isCombobox: !1,
    items: pe(() => v()),
    allowDeselect: pe(() => m()),
    inputValue: pe(() => c(C), (T) => K(C, T, !0)),
    onOpenChangeComplete: pe(() => u())
  });
  var k = {
    get value() {
      return n();
    },
    set value(T) {
      n(T), f();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange(T = Be) {
      r(T), f();
    },
    get name() {
      return o();
    },
    set name(T = "") {
      o(T), f();
    },
    get disabled() {
      return i();
    },
    set disabled(T = !1) {
      i(T), f();
    },
    get type() {
      return s();
    },
    set type(T) {
      s(T), f();
    },
    get open() {
      return a();
    },
    set open(T = !1) {
      a(T), f();
    },
    get onOpenChange() {
      return l();
    },
    set onOpenChange(T = Be) {
      l(T), f();
    },
    get onOpenChangeComplete() {
      return u();
    },
    set onOpenChangeComplete(T = Be) {
      u(T), f();
    },
    get loop() {
      return d();
    },
    set loop(T = !1) {
      d(T), f();
    },
    get scrollAlignment() {
      return h();
    },
    set scrollAlignment(T = "nearest") {
      h(T), f();
    },
    get required() {
      return p();
    },
    set required(T = !1) {
      p(T), f();
    },
    get items() {
      return v();
    },
    set items(T = []) {
      v(T), f();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect(T = !1) {
      m(T), f();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete(T) {
      y(T), f();
    },
    get children() {
      return w();
    },
    set children(T) {
      w(T), f();
    }
  }, x = T3(), N = Q(x);
  cg(N, {
    children: (T, _) => {
      var S = ce(), z = Q(S);
      Ee(z, () => w() ?? He), O(T, S);
    },
    $$slots: { default: !0 }
  });
  var M = V(N, 2);
  {
    var j = (T) => {
      var _ = ce(), S = Q(_);
      {
        var z = (A) => {
          Xi(A, {
            get autocomplete() {
              return y();
            }
          });
        }, P = (A) => {
          var D = ce(), B = Q(D);
          Ct(B, 16, () => E.opts.value.current, (X) => X, (X, U) => {
            Xi(X, {
              get value() {
                return U;
              },
              get autocomplete() {
                return y();
              }
            });
          }), O(A, D);
        };
        ie(S, (A) => {
          E.opts.value.current.length === 0 ? A(z) : A(P, !1);
        });
      }
      O(T, _);
    }, H = (T) => {
      Xi(T, {
        get autocomplete() {
          return y();
        },
        get value() {
          return E.opts.value.current;
        },
        set value(_) {
          E.opts.value.current = _;
        }
      });
    };
    ie(M, (T) => {
      Array.isArray(E.opts.value.current) ? T(j) : T(H, !1);
    });
  }
  return O(t, x), le(k);
}
se(
  cl,
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
var D3 = /* @__PURE__ */ ee("<button><!></button>");
function dl(t, e) {
  const n = si();
  ae(e, !0);
  let r = g(e, "id", 23, () => Mn(n)), o = g(e, "ref", 15, null), i = g(e, "child", 7), s = g(e, "children", 7), a = g(e, "type", 7, "button"), l = /* @__PURE__ */ Le(e, [
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
  const u = xu.create({
    id: pe(() => r()),
    ref: pe(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ $(() => Dn(l, u.props, { type: a() }));
  var h = {
    get id() {
      return r();
    },
    set id(m = Mn(n)) {
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
  }, p = ce(), v = Q(p);
  return bt(v, () => pg, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var C = ce(), E = Q(C);
        {
          var k = (N) => {
            var M = ce(), j = Q(M);
            Ee(j, i, () => ({ props: c(d) })), O(N, M);
          }, x = (N) => {
            var M = D3();
            Ye(M, () => ({ ...c(d) }));
            var j = Z(M);
            Ee(j, () => s() ?? He), F(M), O(N, M);
          };
          ie(E, (N) => {
            i() ? N(k) : N(x, !1);
          });
        }
        O(w, C);
      },
      $$slots: { default: !0 }
    });
  }), O(t, p), le(h);
}
se(dl, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const A3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, L3 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, I3 = Symbol("lucide-context"), M3 = () => vn(I3);
var z3 = /* @__PURE__ */ xe("<svg><!><!></svg>");
function ta(t, e) {
  ae(e, !0);
  const n = M3() ?? {}, r = g(e, "name", 7), o = g(e, "color", 23, () => n.color ?? "currentColor"), i = g(e, "size", 23, () => n.size ?? 24), s = g(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = g(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = g(e, "iconNode", 23, () => []), u = g(e, "children", 7), d = /* @__PURE__ */ Le(e, [
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
  }, v = z3();
  Ye(
    v,
    (w) => ({
      ...A3,
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
      () => !u() && !L3(d) && { "aria-hidden": "true" }
    ]
  );
  var m = Z(v);
  Ct(m, 17, l, so, (w, b) => {
    var C = /* @__PURE__ */ $(() => mo(c(b), 2));
    let E = () => c(C)[0], k = () => c(C)[1];
    var x = ce(), N = Q(x);
    lh(N, E, !0, (M, j) => {
      Ye(M, () => ({ ...k() }));
    }), O(w, x);
  });
  var y = V(m);
  return Ee(y, () => u() ?? He), F(v), O(t, v), le(p);
}
se(
  ta,
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
function bg(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  ta(t, Ve({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = Q(s);
      Ee(a, () => e.children ?? He), O(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
se(bg, {}, [], [], !0);
function xg(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  ta(t, Ve({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = Q(s);
      Ee(a, () => e.children ?? He), O(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
se(xg, {}, [], [], !0);
var V3 = /* @__PURE__ */ ee('<div data-slot="checkbox-indicator" class="tf-checkbox-indicator"><!></div>');
function Cg(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "checked", 15, !1), o = g(e, "indeterminate", 15, !1), i = g(e, "class", 7), s = /* @__PURE__ */ Le(e, [
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
  }, l = ce(), u = Q(l);
  {
    const d = (p, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = V3(), b = Z(w);
      {
        var C = (k) => {
          bg(k, {});
        }, E = (k) => {
          var x = ce(), N = Q(x);
          {
            var M = (j) => {
              xg(j, {});
            };
            ie(
              N,
              (j) => {
                y() && j(M);
              },
              !0
            );
          }
          O(k, x);
        };
        ie(b, (k) => {
          m() ? k(C) : k(E, !1);
        });
      }
      F(w), O(p, w);
    };
    let h = /* @__PURE__ */ $(() => pn("nopan nodrag tf-checkbox peer", i()));
    bt(u, () => qf, (p, v) => {
      v(p, Ve(
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
  return O(t, l), le(a);
}
se(Cg, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var H3 = /* @__PURE__ */ ee('<div><input type="hidden"/> <!> <!></div>');
const B3 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function kg(t, e) {
  ae(e, !0), Ue(t, B3);
  const n = g(e, "placeholder", 7), r = g(e, "label", 7), o = g(e, "value", 7), i = g(e, "buttonText", 7, "选择..."), s = g(e, "onChosen", 7), a = /* @__PURE__ */ Le(e, [
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
  }, u = H3();
  Ye(
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
  var d = Z(u);
  vr(d);
  var h = V(d, 2);
  dt(h, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = V(h, 2);
  return Fe(p, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      $e();
      var y = Ae();
      Pe(() => Je(y, i())), O(v, y);
    },
    $$slots: { default: !0 }
  }), F(u), Pe(() => Vi(d, o())), O(t, u), le(l);
}
se(
  kg,
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
var R3 = /* @__PURE__ */ ee("<input/>"), K3 = /* @__PURE__ */ ee("<input/>");
function dt(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "type", 7), i = g(e, "files", 15), s = g(e, "class", 7), a = g(e, "data-slot", 7, "input"), l = /* @__PURE__ */ Le(e, [
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
  }, d = ce(), h = Q(d);
  {
    var p = (m) => {
      var y = R3();
      Ye(
        y,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...l
        }),
        [() => pn("nopan nodrag tf-input", s())],
        void 0,
        void 0,
        void 0,
        !0
      ), Et(y, (w) => n(w), () => n()), P1(y, i), ns(y, r), O(m, y);
    }, v = (m) => {
      var y = K3();
      Ye(
        y,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...l
        }),
        [() => pn("nopan nodrag tf-input", s())],
        void 0,
        void 0,
        void 0,
        !0
      ), Et(y, (w) => n(w), () => n()), ns(y, r), O(m, y);
    };
    ie(h, (m) => {
      o() === "file" ? m(p) : m(v, !1);
    });
  }
  return O(t, d), le(u);
}
se(
  dt,
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
var F3 = /* @__PURE__ */ ee("<textarea></textarea>");
function qe(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "class", 7), i = g(e, "data-slot", 7, "textarea"), s = g(e, "height", 7), a = g(e, "autoHeight", 7, !0), l = g(e, "maxHeight", 7), u = g(e, "onHeightChange", 7), d = /* @__PURE__ */ Le(e, [
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
        const E = typeof s() == "number" ? `${s()}px` : s();
        h.style.height = E, h.style.overflowY = "hidden", u()?.(E);
        return;
      }
      h.style.height = "auto", h.style.overflowY = "hidden";
      let C = h.scrollHeight;
      if (!p) {
        const E = e.rows || 1, k = getComputedStyle(h);
        p = parseFloat(k.fontSize) * 1.2 * E + parseFloat(k.paddingTop) + parseFloat(k.paddingBottom) + parseFloat(k.borderTopWidth);
      }
      if (C < p && (C = p), l()) {
        const E = typeof l() == "number" ? `${l()}px` : l();
        C > parseInt(E) ? (h.style.height = E, h.style.overflowY = "auto") : h.style.height = `${C}px`;
      } else
        h.style.height = `${C}px`;
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
    set ref(C = null) {
      n(C), f();
    },
    get value() {
      return r();
    },
    set value(C) {
      r(C), f();
    },
    get class() {
      return o();
    },
    set class(C) {
      o(C), f();
    },
    get "data-slot"() {
      return i();
    },
    set "data-slot"(C = "textarea") {
      i(C), f();
    },
    get height() {
      return s();
    },
    set height(C) {
      s(C), f();
    },
    get autoHeight() {
      return a();
    },
    set autoHeight(C = !0) {
      a(C), f();
    },
    get maxHeight() {
      return l();
    },
    set maxHeight(C) {
      l(C), f();
    },
    get onHeightChange() {
      return u();
    },
    set onHeightChange(C) {
      u(C), f();
    }
  }, y = F3();
  Gv(y);
  var w = (C) => {
    v(), e.oninput?.(C);
  }, b = (C) => {
    v(), e.onchange?.(C);
  };
  return Ye(
    y,
    (C) => ({
      spellcheck: "false",
      ...d,
      "data-slot": i(),
      oninput: w,
      onchange: b,
      class: C
    }),
    [() => pn("nodrag nowheel tf-textarea", o())]
  ), Et(y, (C) => h = C, () => h), ns(y, r), O(t, y), le(m);
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
var j3 = /* @__PURE__ */ ee('<div role="button"><!></div>'), Z3 = /* @__PURE__ */ ee("<div></div>");
function $g(t, e) {
  const n = Fu(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Fu(n, ["items", "onChange", "activeIndex"]);
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
  Ll();
  var u = Z3();
  return Ye(u, () => ({
    ...r,
    class: `tf-tabs ${Ol(r), st(() => r.class) ?? ""}`
  })), Ct(u, 5, o, so, (d, h, p) => {
    var v = j3();
    _e(v, "tabindex", p), v.__click = () => a(c(h), p), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), p));
    };
    var m = Z(v);
    {
      var y = (b) => {
        var C = Ae();
        Pe(() => Je(C, (c(h), st(() => c(h).label)))), O(b, C);
      }, w = (b) => {
        var C = ce(), E = Q(C);
        Ee(E, () => (c(h), st(() => c(h).label) ?? He)), O(b, C);
      };
      ie(m, (b) => {
        c(h), st(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    F(v), Pe(() => jt(v, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), O(d, v);
  }), F(u), O(t, u), le(l);
}
qr(["click", "keydown"]);
se($g, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var W3 = /* @__PURE__ */ ee('<span class="tf-collapse-item-title-icon"><!></span>'), q3 = /* @__PURE__ */ ee('<div class="tf-collapse-item-description"><!></div>'), X3 = /* @__PURE__ */ ee('<div class="tf-collapse-item-content"><!></div>'), Y3 = /* @__PURE__ */ ee('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), U3 = /* @__PURE__ */ ee("<div></div>");
const G3 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Sg(t, e) {
  ae(e, !0), Ue(t, G3);
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
  }, a = U3();
  return Ct(a, 21, n, so, (l, u, d) => {
    var h = Y3(), p = Z(h);
    _e(p, "tabindex", d), p.__click = () => i(c(u)), p.__keydown = (x) => {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), i(c(u)));
    };
    var v = Z(p);
    {
      var m = (x) => {
        var N = W3(), M = Z(N);
        qn(M, {
          get target() {
            return c(u).icon;
          }
        }), F(N), O(x, N);
      };
      ie(v, (x) => {
        c(u).icon && x(m);
      });
    }
    var y = V(v, 2);
    qn(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = V(y, 2);
    F(p);
    var b = V(p, 2);
    {
      var C = (x) => {
        var N = q3(), M = Z(N);
        qn(M, {
          get target() {
            return c(u).description;
          }
        }), F(N), O(x, N);
      };
      ie(b, (x) => {
        c(u).description && x(C);
      });
    }
    var E = V(b, 2);
    {
      var k = (x) => {
        var N = X3(), M = Z(N);
        qn(M, {
          get target() {
            return c(u).content;
          }
        }), F(N), O(x, N);
      };
      ie(E, (x) => {
        o().includes(c(u).key) && x(k);
      });
    }
    F(h), Pe((x) => jt(w, 1, `tf-collapse-item-title-arrow ${x ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), O(l, h);
  }), F(a), Pe(() => {
    _t(a, e.style), jt(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), O(t, a), le(s);
}
qr(["click", "keydown"]);
se(Sg, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function qn(t, e) {
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
  }, o = ce(), i = Q(o);
  {
    var s = (l) => {
      var u = ce(), d = Q(u);
      Ee(d, () => n() ?? He), O(l, u);
    }, a = (l) => {
      var u = ce(), d = Q(u);
      Rs(d, n), O(l, u);
    };
    ie(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return O(t, o), le(r);
}
se(qn, { target: {} }, [], [], !0);
function hl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  ta(t, Ve({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = Q(s);
      Ee(a, () => e.children ?? He), O(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
se(hl, {}, [], [], !0);
const ft = () => vn("svelteflow__node_id"), Ln = () => vn("tinyflow_options");
var Q3 = /* @__PURE__ */ ee('<span class="tf-select-heading-item">,</span>'), J3 = /* @__PURE__ */ ee("<!> <!>", 1), e4 = /* @__PURE__ */ ee('<span class="tf-select-heading-span"> </span>'), t4 = /* @__PURE__ */ ee('<span class="tf-select-heading"><!></span> <!>', 1), n4 = /* @__PURE__ */ ee('<div class="tf-select-empty">暂无数据</div>'), r4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), o4 = /* @__PURE__ */ ee('<span style="width: 16px;height: 16px;"></span>'), i4 = /* @__PURE__ */ ee('<span class="tf-select-option-selected"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), s4 = /* @__PURE__ */ ee('<span class="tf-select-option-content"><!> <!></span> <!>', 1), a4 = /* @__PURE__ */ ee("<!> <!>", 1), l4 = /* @__PURE__ */ ee('<span class="tf-select-heading-span"> </span>'), u4 = /* @__PURE__ */ ee('<span class="tf-select-heading"><!></span> <!>', 1), c4 = /* @__PURE__ */ ee('<div class="tf-select-empty">暂无数据</div>'), d4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), h4 = /* @__PURE__ */ ee('<span style="width: 16px;height: 16px;"></span>'), p4 = /* @__PURE__ */ ee('<span class="tf-select-option-selected"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), f4 = /* @__PURE__ */ ee('<span class="tf-select-option-content"><!> <!></span> <!>', 1), g4 = /* @__PURE__ */ ee("<!> <!>", 1);
function xt(t, e) {
  ae(e, !0);
  let n = g(e, "items", 7), r = g(e, "onSelect", 7), o = g(e, "value", 23, () => []), i = g(e, "defaultValue", 23, () => []), s = g(e, "expandAll", 7, !0), a = g(e, "multiple", 7, !1), l = g(e, "expandValue", 23, () => []), u = g(e, "placeholder", 7), d = g(e, "disabled", 7, !1), h = g(e, "class", 7), p = /* @__PURE__ */ Le(e, [
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
  ]), v = Ln().defaultTheme, m = /* @__PURE__ */ $(() => {
    const _ = [], S = (z) => {
      for (const P of z)
        _.push(P), P.children?.length && S(P.children);
    };
    return S(n()), _;
  }), y = /* @__PURE__ */ $(() => {
    const _ = [], S = o().length > 0 ? o() : i();
    for (const z of S) {
      if (z == null) continue;
      const P = c(m).find((A) => A.value === z);
      P && _.push(P);
    }
    return _;
  }), w = /* @__PURE__ */ $(() => !a() && c(y).length > 0 ? String(c(y)[0].value) : ""), b = /* @__PURE__ */ $(() => a() ? c(y).map((_) => String(_.value)) : []);
  function C(_, S) {
    _.stopPropagation(), r()?.(S);
  }
  function E(_, S = 0) {
    const z = [];
    if (_)
      for (const P of _) {
        z.push({ item: P, level: S });
        const A = s() || l().includes(P.value);
        P.children?.length && A && z.push(...E(P.children, S + 1));
      }
    return z;
  }
  let k = /* @__PURE__ */ $(() => E(n()));
  function x(_) {
    return {
      value: String(_.value),
      label: typeof _.label == "string" ? _.label : String(_.value),
      disabled: !1
    };
  }
  var N = {
    get items() {
      return n();
    },
    set items(_) {
      n(_), f();
    },
    get onSelect() {
      return r();
    },
    set onSelect(_) {
      r(_), f();
    },
    get value() {
      return o();
    },
    set value(_ = []) {
      o(_), f();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(_ = []) {
      i(_), f();
    },
    get expandAll() {
      return s();
    },
    set expandAll(_ = !0) {
      s(_), f();
    },
    get multiple() {
      return a();
    },
    set multiple(_ = !1) {
      a(_), f();
    },
    get expandValue() {
      return l();
    },
    set expandValue(_ = []) {
      l(_), f();
    },
    get placeholder() {
      return u();
    },
    set placeholder(_) {
      u(_), f();
    },
    get disabled() {
      return d();
    },
    set disabled(_ = !1) {
      d(_), f();
    },
    get class() {
      return h();
    },
    set class(_) {
      h(_), f();
    }
  }, M = ce(), j = Q(M);
  {
    var H = (_) => {
      var S = ce(), z = Q(S);
      bt(z, () => cl, (P, A) => {
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
          () => p,
          {
            children: (D, B) => {
              var X = a4(), U = Q(X);
              {
                let Y = /* @__PURE__ */ $(() => pn("nopan nodrag tf-select", d() && "tf-select-disabled", h()));
                bt(U, () => dl, (q, R) => {
                  R(q, {
                    get class() {
                      return c(Y);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (W, J) => {
                      var te = t4(), oe = Q(te), L = Z(oe);
                      {
                        var ne = (re) => {
                          var ue = ce(), ge = Q(ue);
                          Ct(ge, 19, () => c(y), (ye) => ye.value, (ye, be, de) => {
                            var we = J3(), Te = Q(we);
                            qn(Te, {
                              get target() {
                                return c(be).label;
                              }
                            });
                            var G = V(Te, 2);
                            {
                              var Me = (ke) => {
                                var Ne = Q3();
                                O(ke, Ne);
                              };
                              ie(G, (ke) => {
                                c(de) < c(y).length - 1 && ke(Me);
                              });
                            }
                            O(ye, we);
                          }), O(re, ue);
                        }, fe = (re) => {
                          var ue = e4(), ge = Z(ue, !0);
                          F(ue), Pe(() => Je(ge, u() ?? "")), O(re, ue);
                        };
                        ie(L, (re) => {
                          c(y).length > 0 ? re(ne) : re(fe, !1);
                        });
                      }
                      F(oe);
                      var he = V(oe, 2);
                      hl(he, { class: "tf-select-heading-icon" }), O(W, te);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var I = V(U, 2);
              bt(I, () => tl, (Y, q) => {
                q(Y, {
                  children: (R, W) => {
                    var J = ce(), te = Q(J);
                    {
                      let oe = /* @__PURE__ */ $(() => pn("nopan nodrag nowheel tf-root tf-select-content", v === "dark" && "dark"));
                      bt(te, () => al, (L, ne) => {
                        ne(L, {
                          get class() {
                            return c(oe);
                          },
                          children: (fe, he) => {
                            var re = ce(), ue = Q(re);
                            bt(ue, () => ul, (ge, ye) => {
                              ye(ge, {
                                style: "padding: 4px;",
                                children: (be, de) => {
                                  var we = ce(), Te = Q(we);
                                  {
                                    var G = (ke) => {
                                      var Ne = n4();
                                      O(ke, Ne);
                                    }, Me = (ke) => {
                                      var Ne = ce(), ze = Q(Ne);
                                      Ct(ze, 19, () => c(k), ({ item: Xe, level: rt }, Ge) => `${Ge}_${Xe.value}`, (Xe, rt) => {
                                        let Ge = () => c(rt).item, ot = () => c(rt).level;
                                        const ve = /* @__PURE__ */ $(() => Ge().children && Ge().children.length > 0), Oe = /* @__PURE__ */ $(() => x(Ge()));
                                        var et = ce(), je = Q(et);
                                        {
                                          const at = (tt, Pt) => {
                                            let it = () => Pt?.().selected;
                                            var lt = s4(), gt = Q(lt), cr = Z(gt);
                                            {
                                              var $o = (ct) => {
                                                var an = r4();
                                                O(ct, an);
                                              }, sn = (ct) => {
                                                var an = o4();
                                                O(ct, an);
                                              };
                                              ie(cr, (ct) => {
                                                c(ve) ? ct($o) : ct(sn, !1);
                                              });
                                            }
                                            var na = V(cr, 2);
                                            qn(na, {
                                              get target() {
                                                return Ge().label;
                                              }
                                            }), F(gt);
                                            var ra = V(gt, 2);
                                            {
                                              var oa = (ct) => {
                                                var an = i4();
                                                O(ct, an);
                                              };
                                              ie(ra, (ct) => {
                                                it() && ct(oa);
                                              });
                                            }
                                            O(tt, lt);
                                          };
                                          let Dt = /* @__PURE__ */ $(() => ot() * 10);
                                          bt(je, () => ll, (tt, Pt) => {
                                            Pt(tt, {
                                              get value() {
                                                return c(Oe).value;
                                              },
                                              get label() {
                                                return c(Oe).label;
                                              },
                                              class: "tf-select-option",
                                              get style() {
                                                return `padding-left: ${c(Dt) ?? ""}px`;
                                              },
                                              onclick: (it) => C(it, Ge()),
                                              children: at,
                                              $$slots: { default: !0 }
                                            });
                                          });
                                        }
                                        O(Xe, et);
                                      }), O(ke, Ne);
                                    };
                                    ie(Te, (ke) => {
                                      c(k).length === 0 ? ke(G) : ke(Me, !1);
                                    });
                                  }
                                  O(be, we);
                                },
                                $$slots: { default: !0 }
                              });
                            }), O(fe, re);
                          },
                          $$slots: { default: !0 }
                        });
                      });
                    }
                    O(R, J);
                  },
                  $$slots: { default: !0 }
                });
              }), O(D, X);
            },
            $$slots: { default: !0 }
          }
        ));
      }), O(_, S);
    }, T = (_) => {
      var S = ce(), z = Q(S);
      bt(z, () => cl, (P, A) => {
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
          () => p,
          {
            children: (D, B) => {
              var X = g4(), U = Q(X);
              {
                let Y = /* @__PURE__ */ $(() => pn("nopan nodrag tf-select", d() && " tf-select-disabled", h()));
                bt(U, () => dl, (q, R) => {
                  R(q, {
                    get class() {
                      return c(Y);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (W, J) => {
                      var te = u4(), oe = Q(te), L = Z(oe);
                      {
                        var ne = (re) => {
                          qn(re, {
                            get target() {
                              return c(y)[0].label;
                            }
                          });
                        }, fe = (re) => {
                          var ue = l4(), ge = Z(ue, !0);
                          F(ue), Pe(() => Je(ge, u() ?? "")), O(re, ue);
                        };
                        ie(L, (re) => {
                          c(y).length > 0 ? re(ne) : re(fe, !1);
                        });
                      }
                      F(oe);
                      var he = V(oe, 2);
                      hl(he, { class: "tf-select-icon" }), O(W, te);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var I = V(U, 2);
              bt(I, () => tl, (Y, q) => {
                q(Y, {
                  children: (R, W) => {
                    var J = ce(), te = Q(J);
                    {
                      let oe = /* @__PURE__ */ $(() => pn("nopan nodrag nowheel tf-root tf-select-content", v === "dark" && "dark"));
                      bt(te, () => al, (L, ne) => {
                        ne(L, {
                          get class() {
                            return c(oe);
                          },
                          children: (fe, he) => {
                            var re = ce(), ue = Q(re);
                            bt(ue, () => ul, (ge, ye) => {
                              ye(ge, {
                                style: "padding: 4px;",
                                children: (be, de) => {
                                  var we = ce(), Te = Q(we);
                                  {
                                    var G = (ke) => {
                                      var Ne = c4();
                                      O(ke, Ne);
                                    }, Me = (ke) => {
                                      var Ne = ce(), ze = Q(Ne);
                                      Ct(ze, 19, () => c(k), ({ item: Xe, level: rt }, Ge) => `${Ge}_${Xe.value}`, (Xe, rt) => {
                                        let Ge = () => c(rt).item, ot = () => c(rt).level;
                                        const ve = /* @__PURE__ */ $(() => Ge().children && Ge().children.length > 0), Oe = /* @__PURE__ */ $(() => x(Ge()));
                                        var et = ce(), je = Q(et);
                                        {
                                          const at = (tt, Pt) => {
                                            let it = () => Pt?.().selected;
                                            var lt = f4(), gt = Q(lt), cr = Z(gt);
                                            {
                                              var $o = (ct) => {
                                                var an = d4();
                                                O(ct, an);
                                              }, sn = (ct) => {
                                                var an = h4();
                                                O(ct, an);
                                              };
                                              ie(cr, (ct) => {
                                                c(ve) ? ct($o) : ct(sn, !1);
                                              });
                                            }
                                            var na = V(cr, 2);
                                            qn(na, {
                                              get target() {
                                                return Ge().label;
                                              }
                                            }), F(gt);
                                            var ra = V(gt, 2);
                                            {
                                              var oa = (ct) => {
                                                var an = p4();
                                                O(ct, an);
                                              };
                                              ie(ra, (ct) => {
                                                it() && ct(oa);
                                              });
                                            }
                                            O(tt, lt);
                                          };
                                          let Dt = /* @__PURE__ */ $(() => ot() * 10);
                                          bt(je, () => ll, (tt, Pt) => {
                                            Pt(tt, {
                                              get value() {
                                                return c(Oe).value;
                                              },
                                              get label() {
                                                return c(Oe).label;
                                              },
                                              class: "tf-select-option",
                                              get style() {
                                                return `padding-left: ${c(Dt) ?? ""}px`;
                                              },
                                              onclick: (it) => C(it, Ge()),
                                              children: at,
                                              $$slots: { default: !0 }
                                            });
                                          });
                                        }
                                        O(Xe, et);
                                      }), O(ke, Ne);
                                    };
                                    ie(Te, (ke) => {
                                      c(k).length === 0 ? ke(G) : ke(Me, !1);
                                    });
                                  }
                                  O(be, we);
                                },
                                $$slots: { default: !0 }
                              });
                            }), O(fe, re);
                          },
                          $$slots: { default: !0 }
                        });
                      });
                    }
                    O(R, J);
                  },
                  $$slots: { default: !0 }
                });
              }), O(D, X);
            },
            $$slots: { default: !0 }
          }
        ));
      }), O(_, S);
    };
    ie(j, (_) => {
      a() ? _(H) : _(T, !1);
    });
  }
  return O(t, M), le(N);
}
se(
  xt,
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
const v4 = ({
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
    lg(t, u, {
      placement: r,
      middleware: [
        og(o),
        // 手动偏移配置
        sg(i),
        //自动翻转
        ig(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [ag({ element: d })] : []
      ]
    }).then(({ x: b, y: C, placement: E, middlewareData: k }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${C}px`
      }), l) {
        const { x, y: N } = k.arrow, M = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: x != null ? `${x}px` : "",
          top: N != null ? `${N}px` : "",
          right: "",
          bottom: "",
          [M]: "2px"
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
var m4 = /* @__PURE__ */ ee('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Xr(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  wn(() => (a = v4({
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
  }, d = m4(), h = Z(d), p = Z(h);
  Ee(p, n), F(h), Et(h, (y) => i = y, () => i);
  var v = V(h, 2), m = Z(v);
  return Ee(m, r), F(v), Et(v, (y) => s = y, () => s), F(d), O(t, d), le(u);
}
se(Xr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ze(t, e) {
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
  }, a = ce(), l = Q(a);
  return lh(l, () => `h${r()}`, !1, (u, d) => {
    Ye(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = ce(), p = Q(h);
    Ee(p, () => n() ?? He), O(d, h);
  }), O(t, a), le(s);
}
se(Ze, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var y4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const w4 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--tf-input);border:1px solid transparent;}}"
};
function ki(t, e) {
  ae(e, !0), Ue(t, w4);
  const n = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ $(() => pn("input-btn-more", e.class));
    Fe(t, Ve(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = y4();
          O(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  le();
}
se(ki, {}, [], [], !0);
const b4 = () => ({ deleteNode: (t) => {
  Ke.removeNode(t), Ke.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), Vn = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, x4 = () => ({ copyNode: (t) => {
  const e = Ke.getNode(t);
  if (e) {
    const n = Vn(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    Ke.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} });
var C4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), k4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), $4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), S4 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), _4 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), E4 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), P4 = /* @__PURE__ */ ee('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), O4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), N4 = /* @__PURE__ */ ee('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), T4 = /* @__PURE__ */ ee('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const D4 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--tf-background);border:1px solid var(--tf-border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--tf-muted-foreground);}"
};
function on(t, e) {
  ae(e, !0), Ue(t, D4);
  const n = g(e, "data", 7), r = g(e, "id", 7, ""), o = g(e, "icon", 7), i = g(e, "handle", 7), s = g(e, "children", 7), a = g(e, "allowExecute", 7, !0), l = g(e, "allowCopy", 7, !0), u = g(e, "allowDelete", 7, !0), d = g(e, "allowSetting", 7, !0), h = g(e, "allowSettingOfCondition", 7, !0), p = g(e, "showSourceHandle", 7, !0), v = g(e, "showTargetHandle", 7, !0), m = g(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = wt(), C = /* @__PURE__ */ $(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = b4(), { copyNode: k } = x4(), x = Ln(), N = () => {
    x.onNodeExecute?.(b(r()));
  };
  let M = ft();
  var j = {
    get data() {
      return n();
    },
    set data(I) {
      n(I), f();
    },
    get id() {
      return r();
    },
    set id(I = "") {
      r(I), f();
    },
    get icon() {
      return o();
    },
    set icon(I) {
      o(I), f();
    },
    get handle() {
      return i();
    },
    set handle(I) {
      i(I), f();
    },
    get children() {
      return s();
    },
    set children(I) {
      s(I), f();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(I = !0) {
      a(I), f();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(I = !0) {
      l(I), f();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(I = !0) {
      u(I), f();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(I = !0) {
      d(I), f();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(I = !0) {
      h(I), f();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(I = !0) {
      p(I), f();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(I = !0) {
      v(I), f();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(I) {
      m(I), f();
    }
  }, H = T4(), T = Q(H);
  {
    var _ = (I) => {
      rf(I, {
        get position() {
          return Se.Top;
        },
        align: "start",
        children: (Y, q) => {
          var R = N4(), W = Z(R);
          {
            var J = (re) => {
              Fe(re, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (ue, ge) => {
                  var ye = C4();
                  O(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ie(W, (re) => {
              u() && re(J);
            });
          }
          var te = V(W, 2);
          {
            var oe = (re) => {
              Fe(re, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (ue, ge) => {
                  var ye = k4();
                  O(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ie(te, (re) => {
              l() && re(oe);
            });
          }
          var L = V(te, 2);
          {
            var ne = (re) => {
              Fe(re, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: N,
                children: (ue, ge) => {
                  var ye = $4();
                  O(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ie(L, (re) => {
              a() && re(ne);
            });
          }
          var fe = V(L, 2);
          {
            var he = (re) => {
              Xr(re, {
                placement: "bottom",
                floating: (ue) => {
                  var ge = P4(), ye = Z(ge), be = V(Z(ye));
                  dt(be, {
                    style: "width: 100%;",
                    onchange: (ve) => {
                      const Oe = ve.target.value;
                      w(M, { title: Oe });
                    },
                    get value() {
                      return n().title;
                    }
                  }), F(ye);
                  var de = V(ye, 2), we = V(Z(de));
                  qe(we, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ve) => {
                      const Oe = ve.target.value;
                      w(M, { description: Oe });
                    },
                    get value() {
                      return n().description;
                    }
                  }), F(de);
                  var Te = V(de, 2);
                  {
                    var G = (ve) => {
                      var Oe = S4(), et = V(Z(Oe));
                      qe(et, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (je) => {
                          const at = je.target.value;
                          w(M, { condition: at });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), F(Oe), O(ve, Oe);
                    };
                    ie(Te, (ve) => {
                      h() && ve(G);
                    });
                  }
                  var Me = V(Te, 2), ke = V(Z(Me), 2);
                  vr(ke), ke.__change = (ve) => {
                    const Oe = ve.target.checked;
                    w(M, { loopEnable: Oe });
                  }, F(Me);
                  var Ne = V(Me, 2);
                  {
                    var ze = (ve) => {
                      var Oe = _4(), et = Q(Oe), je = V(Z(et));
                      {
                        let it = /* @__PURE__ */ $(() => n().loopIntervalMs || "1000");
                        qe(je, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const gt = lt.target.value;
                            w(M, { loopIntervalMs: gt });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      F(et);
                      var at = V(et, 2), Dt = V(Z(at));
                      {
                        let it = /* @__PURE__ */ $(() => n().maxLoopCount || "0");
                        qe(Dt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const gt = lt.target.value;
                            w(M, { maxLoopCount: gt });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      F(at);
                      var tt = V(at, 2), Pt = V(Z(tt));
                      qe(Pt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (it) => {
                          const lt = it.target.value;
                          w(M, { loopBreakCondition: lt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), F(tt), O(ve, Oe);
                    };
                    ie(Ne, (ve) => {
                      n().loopEnable && ve(ze);
                    });
                  }
                  var Xe = V(Ne, 2), rt = V(Z(Xe), 2);
                  vr(rt), rt.__change = (ve) => {
                    const Oe = ve.target.checked;
                    w(M, { retryEnable: Oe });
                  }, F(Xe);
                  var Ge = V(Xe, 2);
                  {
                    var ot = (ve) => {
                      var Oe = E4(), et = Q(Oe), je = V(Z(et));
                      {
                        let it = /* @__PURE__ */ $(() => n().retryIntervalMs || "1000");
                        qe(je, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const gt = lt.target.value;
                            w(M, { retryIntervalMs: gt });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      F(et);
                      var at = V(et, 2), Dt = V(Z(at));
                      {
                        let it = /* @__PURE__ */ $(() => n().maxRetryCount || "3");
                        qe(Dt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const gt = lt.target.value;
                            w(M, { maxRetryCount: gt });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      F(at);
                      var tt = V(at, 2), Pt = V(Z(tt), 2);
                      vr(Pt), Pt.__change = (it) => {
                        const lt = it.target.checked;
                        w(M, { resetRetryCountAfterNormal: lt });
                      }, F(tt), Pe(() => la(Pt, !!n().resetRetryCountAfterNormal)), O(ve, Oe);
                    };
                    ie(Ge, (ve) => {
                      n().retryEnable && ve(ot);
                    });
                  }
                  F(ge), Pe(() => {
                    la(ke, !!n().loopEnable), la(rt, !!n().retryEnable);
                  }), O(ue, ge);
                },
                children: (ue, ge) => {
                  Fe(ue, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (ye, be) => {
                      var de = O4();
                      O(ye, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ie(fe, (re) => {
              d() && re(he);
            });
          }
          F(R), O(Y, R);
        },
        $$slots: { default: !0 }
      });
    };
    ie(T, (I) => {
      (a() || l() || u()) && I(_);
    });
  }
  var S = V(T, 2), z = V(Z(S), 2), P = Z(z);
  Sg(P, {
    get items() {
      return c(C);
    },
    get activeKeys() {
      return y;
    },
    onChange: (I, Y) => {
      w(r(), { expand: Y?.includes("key") }), m()?.(Y?.includes("key") ? "key" : "");
    }
  }), F(z), F(S);
  var A = V(S, 2);
  {
    var D = (I) => {
      yr(I, {
        type: "target",
        get position() {
          return Se.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ie(A, (I) => {
      v() && I(D);
    });
  }
  var B = V(A, 2);
  {
    var X = (I) => {
      yr(I, {
        type: "source",
        get position() {
          return Se.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ie(B, (I) => {
      p() && I(X);
    });
  }
  var U = V(B, 2);
  return Ee(U, () => i() ?? He), O(t, H), le(j);
}
qr(["change"]);
se(
  on,
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
var A4 = /* @__PURE__ */ ee('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), L4 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj">参数描述： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), I4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), M4 = /* @__PURE__ */ ee('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const z4 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function _g(t, e) {
  ae(e, !0), Ue(t, z4);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = ft(), i = lr(o), s = /* @__PURE__ */ $(() => ({ ...n(), ...i?.current?.data?.parameters[r()] })), a = /* @__PURE__ */ $(() => ["text", "other"].includes(c(s).contentType || "text") ? of : sf), l = /* @__PURE__ */ $(() => c(s).contentType === "text" || !c(s).contentType);
  const { updateNodeData: u } = wt(), d = (T, _) => {
    u(o, (S) => {
      let z = S.data.parameters;
      return z[r()][T] = _, { parameters: z };
    });
  }, h = (T, _) => {
    const S = _.target.value;
    d(T, S);
  }, p = (T) => {
    const _ = T.target.value;
    d("name", _);
  }, v = (T) => {
    d("required", T);
  }, m = (T) => {
    const _ = T.value;
    d("formType", _);
  }, y = (T) => {
    const _ = T.value;
    d("contentType", _);
  };
  let w;
  const b = () => {
    u(o, (T) => {
      let _ = T.data.parameters;
      return _.splice(r(), 1), { parameters: [..._] };
    }), w?.hide();
  };
  var C = {
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
    }
  }, E = M4(), k = Q(E), x = Z(k);
  dt(x, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: p
  }), F(k);
  var N = V(k, 2), M = Z(N);
  Cg(M, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: v
  }), F(N);
  var j = V(N, 2), H = Z(j);
  return Et(
    Xr(H, {
      placement: "bottom",
      floating: (T) => {
        var _ = L4(), S = Z(_), z = V(Z(S));
        {
          let L = /* @__PURE__ */ $(() => c(s).contentType ? [c(s).contentType] : []);
          xt(z, {
            get items() {
              return Ql;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(L);
            },
            onSelect: y
          });
        }
        F(S);
        var P = V(S, 2), A = V(Z(P));
        {
          let L = /* @__PURE__ */ $(() => c(s).formType ? [c(s).formType] : []);
          xt(A, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(L);
            },
            onSelect: m
          });
        }
        F(P);
        var D = V(P, 2);
        {
          var B = (L) => {
            var ne = A4(), fe = V(Z(ne));
            {
              let he = /* @__PURE__ */ $(() => c(s).enums?.join(`
`));
              qe(fe, {
                rows: 3,
                style: "width: 100%;",
                onchange: (re) => {
                  d("enums", re.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(he);
                },
                placeholder: "一行一个选项"
              });
            }
            F(ne), O(L, ne);
          };
          ie(D, (L) => {
            c(l) && (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && L(B);
          });
        }
        var X = V(D, 2), U = V(Z(X));
        qe(U, {
          rows: 1,
          style: "width: 100%;",
          onchange: (L) => {
            h("formLabel", L);
          },
          get value() {
            return c(s).formLabel;
          },
          placeholder: "请输入数据标题"
        }), F(X);
        var I = V(X, 2), Y = V(Z(I));
        qe(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (L) => {
            h("formDescription", L);
          },
          get value() {
            return c(s).formDescription;
          },
          placeholder: "请输入数据描述"
        }), F(I);
        var q = V(I, 2), R = V(Z(q));
        qe(R, {
          rows: 2,
          style: "width: 100%;",
          onchange: (L) => {
            h("formPlaceholder", L);
          },
          get value() {
            return c(s).formPlaceholder;
          },
          placeholder: "请输入占位符"
        }), F(q);
        var W = V(q, 2), J = V(Z(W));
        qe(J, {
          rows: 3,
          style: "width: 100%;",
          onchange: (L) => {
            h("description", L);
          },
          get value() {
            return c(s).description;
          },
          placeholder: "请输入参数描述"
        }), F(W);
        var te = V(W, 2), oe = Z(te);
        Fe(oe, {
          variant: "destructive",
          onclick: b,
          children: (L, ne) => {
            $e();
            var fe = Ae("删除");
            O(L, fe);
          },
          $$slots: { default: !0 }
        }), F(te), F(_), O(T, _);
      },
      children: (T, _) => {
        Fe(T, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (S, z) => {
            var P = I4();
            O(S, P);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => w = T,
    () => w
  ), F(j), O(t, E), le(C);
}
se(_g, { parameter: {}, index: {} }, [], [], !0);
var V4 = /* @__PURE__ */ ee('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), H4 = /* @__PURE__ */ ee('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), B4 = /* @__PURE__ */ ee('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const R4 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function Eg(t, e) {
  ae(e, !0), Ue(t, R4);
  let n = ft(), r = lr(n), o = /* @__PURE__ */ $(() => [...r?.current?.data?.parameters || []]);
  var i = B4(), s = Z(i);
  {
    var a = (u) => {
      var d = V4();
      $e(4), O(u, d);
    };
    ie(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = V(s, 2);
  Ct(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, h) => {
      _g(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(h);
        }
      });
    },
    (u) => {
      var d = H4();
      O(u, d);
    }
  ), F(i), O(t, i), le();
}
se(Eg, {}, [], [], !0);
const ni = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = Vn()), ni(e.children);
}), t), Cn = () => {
  const { updateNodeData: t } = wt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => ni(s?.children)) : ni(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Vn()
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
var K4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), F4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), j4 = /* @__PURE__ */ ee('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Z4 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--tf-muted);border:1px solid transparent;}"
};
function Pg(t, e) {
  ae(e, !0), Ue(t, Z4);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return on(t, Ve(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = K4();
      O(a, l);
    },
    children: (a, l) => {
      var u = j4(), d = Q(u), h = Z(d);
      Ze(h, {
        level: 3,
        children: (m, y) => {
          $e();
          var w = Ae("输入参数");
          O(m, w);
        },
        $$slots: { default: !0 }
      });
      var p = V(h, 2);
      Fe(p, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, y) => {
          var w = F4();
          O(m, w);
        },
        $$slots: { default: !0 }
      }), F(d);
      var v = V(d, 2);
      Eg(v, {}), O(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), le(s);
}
se(Pg, { data: {} }, [], [], !0);
const Og = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), Og(t, r.source, n));
}, Ng = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: Ng(r.children, e + "." + r.name, n)
})), sd = (t, e, n) => {
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
          children: Ng(r, t.id, e)
        };
    }
  }
}, Tg = (t = !1) => {
  const e = ft(), n = lr(e), r = /* @__PURE__ */ $(xn), o = /* @__PURE__ */ $(() => c(r).nodes), i = /* @__PURE__ */ $(() => c(r).edges), s = /* @__PURE__ */ $(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ $(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e);
    if (t)
      for (const d of c(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const p = sd(d, h, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      Og(d, e, c(i));
      for (const h of c(o))
        if (d.includes(h.id)) {
          const p = h.parentId === n.current.id, v = sd(h, p, u);
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
var W4 = /* @__PURE__ */ ee('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), q4 = /* @__PURE__ */ ee('<div class="input-more-item svelte-jmeys3">数据选项： <!></div>'), X4 = /* @__PURE__ */ ee('<div class="input-more-item svelte-jmeys3">输入方式： <!></div> <!> <div class="input-more-item svelte-jmeys3">数据标题： <!></div> <div class="input-more-item svelte-jmeys3">数据描述： <!></div> <div class="input-more-item svelte-jmeys3">占位符： <!></div>', 1), Y4 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), U4 = /* @__PURE__ */ ee('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const G4 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Dg(t, e) {
  ae(e, !0), Ue(t, G4), wn(() => {
    c(u).refType || w({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = ft(), l = lr(a), u = /* @__PURE__ */ $(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  })), d = /* @__PURE__ */ $(() => ["text", "other"].includes(c(u).contentType || "text") ? of : sf), h = /* @__PURE__ */ $(() => c(u).contentType === "text" || !c(u).contentType);
  const { updateNodeData: p } = wt(), v = (D, B) => {
    p(a, (X) => {
      let U = X.data?.[o()];
      return U[r()] = { ...U[r()], [D]: B }, { [o()]: U };
    });
  }, m = (D, B) => {
    const X = B.target.value;
    v(D, X);
  }, y = (D) => {
    const B = D.value;
    v("ref", B);
  }, w = (D) => {
    const B = D.value;
    v("refType", B);
  }, b = (D) => {
    const B = D.value;
    v("contentType", B);
  }, C = (D) => {
    const B = D.value;
    v("formType", B);
  };
  let E;
  const k = () => {
    p(a, (D) => {
      let B = D.data?.[o()];
      return B.splice(r(), 1), { [o()]: [...B] };
    }), E?.hide();
  };
  let x = Tg(i());
  var N = {
    get parameter() {
      return n();
    },
    set parameter(D) {
      n(D), f();
    },
    get index() {
      return r();
    },
    set index(D) {
      r(D), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(D) {
      o(D), f();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(D) {
      i(D), f();
    },
    get showContentType() {
      return s();
    },
    set showContentType(D = !1) {
      s(D), f();
    }
  }, M = U4(), j = Q(M), H = Z(j);
  {
    let D = /* @__PURE__ */ $(() => c(u).nameDisabled === !0);
    dt(H, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(D);
      },
      oninput: (B) => m("name", B)
    });
  }
  F(j);
  var T = V(j, 2), _ = Z(T);
  {
    var S = (D) => {
      dt(D, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (B) => m("value", B)
      });
    }, z = (D) => {
      var B = ce(), X = Q(B);
      {
        var U = (Y) => {
          {
            let q = /* @__PURE__ */ $(() => [c(u).ref]);
            xt(Y, {
              get items() {
                return x.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(q);
              },
              expandAll: !0,
              onSelect: y
            });
          }
        }, I = (Y) => {
          var q = ce(), R = Q(q);
          {
            var W = (J) => {
              dt(J, { placeholder: "在执行期间，由用户输入", disabled: !0 });
            };
            ie(
              R,
              (J) => {
                c(u).refType === "input" && J(W);
              },
              !0
            );
          }
          O(Y, q);
        };
        ie(
          X,
          (Y) => {
            c(u).refType === "ref" ? Y(U) : Y(I, !1);
          },
          !0
        );
      }
      O(D, B);
    };
    ie(_, (D) => {
      c(u).refType === "fixed" ? D(S) : D(z, !1);
    });
  }
  F(T);
  var P = V(T, 2), A = Z(P);
  return Et(
    Xr(A, {
      placement: "bottom",
      floating: (D) => {
        var B = Y4(), X = Z(B), U = V(Z(X));
        {
          let L = /* @__PURE__ */ $(() => c(u).refType ? [c(u).refType] : []);
          xt(U, {
            get items() {
              return Nb;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(L);
            },
            onSelect: w
          });
        }
        F(X);
        var I = V(X, 2);
        {
          var Y = (L) => {
            var ne = W4(), fe = V(Z(ne));
            {
              let he = /* @__PURE__ */ $(() => c(u).contentType ? [c(u).contentType] : []);
              xt(fe, {
                get items() {
                  return Ql;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(he);
                },
                onSelect: b
              });
            }
            F(ne), O(L, ne);
          };
          ie(I, (L) => {
            (s() || c(u).refType === "input") && L(Y);
          });
        }
        var q = V(I, 2);
        {
          var R = (L) => {
            var ne = X4(), fe = Q(ne), he = V(Z(fe));
            {
              let G = /* @__PURE__ */ $(() => c(u).formType ? [c(u).formType] : []);
              xt(he, {
                get items() {
                  return c(d);
                },
                style: "width: 100%",
                defaultValue: ["input"],
                get value() {
                  return c(G);
                },
                onSelect: C
              });
            }
            F(fe);
            var re = V(fe, 2);
            {
              var ue = (G) => {
                var Me = q4(), ke = V(Z(Me));
                {
                  let Ne = /* @__PURE__ */ $(() => c(u).enums?.join(`
`));
                  qe(ke, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ze) => {
                      v("enums", ze.target?.value.trim().split(`
`));
                    },
                    get value() {
                      return c(Ne);
                    },
                    placeholder: "一行一个选项"
                  });
                }
                F(Me), O(G, Me);
              };
              ie(re, (G) => {
                c(h) && (c(u).formType === "radio" || c(u).formType === "checkbox" || c(u).formType === "select") && G(ue);
              });
            }
            var ge = V(re, 2), ye = V(Z(ge));
            qe(ye, {
              rows: 1,
              placeholder: "请输入数据标题",
              style: "width: 100%;",
              onchange: (G) => {
                m("formLabel", G);
              },
              get value() {
                return c(u).formLabel;
              }
            }), F(ge);
            var be = V(ge, 2), de = V(Z(be));
            qe(de, {
              rows: 2,
              placeholder: "请输入数据描述",
              style: "width: 100%;",
              onchange: (G) => {
                m("formDescription", G);
              },
              get value() {
                return c(u).formDescription;
              }
            }), F(be);
            var we = V(be, 2), Te = V(Z(we));
            qe(Te, {
              rows: 2,
              placeholder: "请输入占位符内容",
              style: "width: 100%;",
              onchange: (G) => {
                m("formPlaceholder", G);
              },
              get value() {
                return c(u).formPlaceholder;
              }
            }), F(we), O(L, ne);
          };
          ie(q, (L) => {
            c(u).refType === "input" && L(R);
          });
        }
        var W = V(q, 2), J = V(Z(W));
        qe(J, {
          rows: 1,
          style: "width: 100%;",
          onchange: (L) => {
            m("defaultValue", L);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), F(W);
        var te = V(W, 2), oe = Z(te);
        Fe(oe, {
          variant: "destructive",
          onclick: k,
          children: (L, ne) => {
            $e();
            var fe = Ae("删除");
            O(L, fe);
          },
          $$slots: { default: !0 }
        }), F(te), F(B), O(D, B);
      },
      children: (D, B) => {
        ki(D, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => E = D,
    () => E
  ), F(P), O(t, M), le(N);
}
se(
  Dg,
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
var Q4 = /* @__PURE__ */ ee('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), J4 = /* @__PURE__ */ ee('<div class="none-params svelte-32f1pk"> </div>'), eC = /* @__PURE__ */ ee('<div class="input-container svelte-32f1pk"><!> <!></div>');
const tC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function Mt(t, e) {
  ae(e, !0), Ue(t, tC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = ft(), a = lr(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = eC(), h = Z(d);
  {
    var p = (m) => {
      var y = Q4();
      $e(4), O(m, y);
    };
    ie(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = V(h, 2);
  return Ct(
    v,
    19,
    () => c(l),
    (m) => m.id,
    (m, y, w) => {
      Dg(m, {
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
      var y = J4(), w = Z(y, !0);
      F(y), Pe(() => Je(w, n())), O(m, y);
    }
  ), F(d), O(t, d), le(u);
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
var nC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), rC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), oC = /* @__PURE__ */ ee('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const iC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Ag(t, e) {
  ae(e, !0), Ue(t, iC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return on(t, Ve(
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
        var l = nC();
        O(a, l);
      },
      children: (a, l) => {
        var u = oC(), d = Q(u), h = Z(d);
        Ze(h, {
          level: 3,
          children: (m, y) => {
            $e();
            var w = Ae("输出参数");
            O(m, w);
          },
          $$slots: { default: !0 }
        });
        var p = V(h, 2);
        Fe(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, y) => {
            var w = rC();
            O(m, w);
          },
          $$slots: { default: !0 }
        }), F(d);
        var v = V(d, 2);
        Mt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), O(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(s);
}
se(Ag, { data: {} }, [], [], !0);
const $a = (t) => JSON.parse(JSON.stringify(t));
var sC = /* @__PURE__ */ xe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), aC = /* @__PURE__ */ ee('<div class="input-more-item svelte-hwmib9"><!></div>'), lC = /* @__PURE__ */ ee('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), uC = /* @__PURE__ */ ee('<div class="input-item svelte-hwmib9"><!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const cC = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Lg(t, e) {
  ae(e, !0), Ue(t, cC);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = ft(), a = lr(s), l = /* @__PURE__ */ $(() => {
    let T = a?.current?.data?.[o()], _;
    if (T && r().length > 0) {
      let S = T;
      for (let z = 0; z < r().length; z++) {
        const P = r()[z];
        z == r().length - 1 ? _ = S[P] : S = S[P].children;
      }
    }
    return { ...n(), ..._ };
  });
  const { updateNodeData: u } = wt(), d = (T, _) => {
    u(s, (S) => {
      const z = S.data?.[o()];
      if (z && r().length > 0) {
        let P = z;
        for (let A = 0; A < r().length; A++) {
          const D = r()[A];
          A == r().length - 1 ? P[D] = { ...P[D], [T]: _ } : P = P[D].children;
        }
      }
      return { [o()]: [...$a(z)] };
    });
  }, h = (T, _) => {
    const S = _.target.value;
    d(T, S);
  }, p = (T) => {
    const _ = T.value;
    d("dataType", _);
  };
  let v;
  const m = () => {
    u(s, (T) => {
      let _ = T.data?.[o()];
      if (_ && r().length > 0) {
        let S = _;
        for (let z = 0; z < r().length; z++) {
          const P = r()[z];
          z == r().length - 1 ? S.splice(P, 1) : S = S[P].children;
        }
      }
      return { [o()]: [...$a(_)] };
    }), v?.hide();
  }, y = () => {
    u(s, (T) => {
      let _ = T.data?.[o()];
      if (_ && r().length > 0) {
        let S = _;
        for (let z = 0; z < r().length; z++) {
          const P = r()[z];
          z == r().length - 1 ? S[P].children ? S[P].children.push({ id: Vn(), name: "newParam", dataType: "String" }) : S[P].children = [{ id: Vn(), name: "newParam", dataType: "String" }] : S = S[P].children;
        }
      }
      return { [o()]: [...$a(_)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), f();
    },
    get position() {
      return r();
    },
    set position(T) {
      r(T), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), f();
    },
    get placeholder() {
      return i();
    },
    set placeholder(T = "请输入参数值") {
      i(T), f();
    }
  }, b = uC(), C = Q(b), E = Z(C);
  {
    let T = /* @__PURE__ */ $(() => r().length * 12), _ = /* @__PURE__ */ $(() => c(l).nameDisabled === !0);
    dt(E, {
      get style() {
        return `width: 100%; margin-left: ${c(T) ?? ""}px;`;
      },
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (S) => {
        h("name", S);
      },
      get disabled() {
        return c(_);
      }
    });
  }
  F(C);
  var k = V(C, 2), x = Z(k);
  {
    let T = /* @__PURE__ */ $(() => c(l).dataTypeItems || Ob), _ = /* @__PURE__ */ $(() => c(l).dataType ? [c(l).dataType] : []), S = /* @__PURE__ */ $(() => c(l).dataTypeDisabled === !0);
    xt(x, {
      get items() {
        return c(T);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(_);
      },
      get disabled() {
        return c(S);
      },
      onSelect: p
    });
  }
  var N = V(x, 2);
  {
    var M = (T) => {
      Fe(T, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (_, S) => {
          var z = sC();
          O(_, z);
        },
        $$slots: { default: !0 }
      });
    };
    ie(N, (T) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && T(M);
    });
  }
  F(k);
  var j = V(k, 2), H = Z(j);
  return Et(
    Xr(H, {
      placement: "bottom",
      floating: (T) => {
        var _ = lC(), S = Z(_), z = V(Z(S));
        {
          let X = /* @__PURE__ */ $(() => c(l).defaultValue || "");
          qe(z, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(X);
            },
            onchange: (U) => {
              h("defaultValue", U);
            }
          });
        }
        F(S);
        var P = V(S, 2), A = V(Z(P));
        {
          let X = /* @__PURE__ */ $(() => c(l).description || "");
          qe(A, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(X);
            },
            onchange: (U) => {
              h("description", U);
            }
          });
        }
        F(P);
        var D = V(P, 2);
        {
          var B = (X) => {
            var U = aC(), I = Z(U);
            Fe(I, {
              variant: "destructive",
              onclick: m,
              children: (Y, q) => {
                $e();
                var R = Ae("删除");
                O(Y, R);
              },
              $$slots: { default: !0 }
            }), F(U), O(X, U);
          };
          ie(D, (X) => {
            c(l).deleteDisabled !== !0 && X(B);
          });
        }
        F(_), O(T, _);
      },
      children: (T, _) => {
        ki(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => v = T,
    () => v
  ), F(j), O(t, b), le(w);
}
se(
  Lg,
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
var dC = /* @__PURE__ */ ee("<!> <!>", 1), hC = /* @__PURE__ */ ee('<div class="none-params svelte-1oz5kx0"> </div>'), pC = /* @__PURE__ */ ee('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), fC = /* @__PURE__ */ ee('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const gC = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function ur(t, e) {
  ae(e, !0), Ue(t, gC);
  const n = (m, y = He, w = He) => {
    var b = ce(), C = Q(b);
    Ct(
      C,
      19,
      y,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, k, x) => {
        var N = dC(), M = Q(N);
        {
          let T = /* @__PURE__ */ $(() => [...w(), c(x)]);
          Lg(M, {
            get parameter() {
              return c(k);
            },
            get position() {
              return c(T);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var j = V(M, 2);
        {
          var H = (T) => {
            {
              let _ = /* @__PURE__ */ $(() => [...w(), c(x)]);
              n(T, () => c(k).children, () => c(_));
            }
          };
          ie(j, (T) => {
            c(k).children && T(H);
          });
        }
        O(E, N);
      },
      (E) => {
        var k = ce(), x = Q(k);
        {
          var N = (M) => {
            var j = hC(), H = Z(j, !0);
            F(j), Pe(() => Je(H, r())), O(M, j);
          };
          ie(x, (M) => {
            w().length === 0 && M(N);
          });
        }
        O(E, k);
      }
    ), O(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数名称");
  let s = ft(), a = lr(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = fC(), h = Z(d);
  {
    var p = (m) => {
      var y = pC();
      $e(4), O(m, y);
    };
    ie(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = V(h, 2);
  return n(v, () => c(l) || [], () => []), F(d), O(t, d), le(u);
}
se(ur, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var vC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), mC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wC = /* @__PURE__ */ ee('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), bC = /* @__PURE__ */ ee('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), xC = /* @__PURE__ */ ee('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const CC = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--tf-background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--tf-border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}`
};
function Ig(t, e) {
  ae(e, !0), Ue(t, CC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn(), s = Ln();
  let a = /* @__PURE__ */ me(ht([]));
  wn(async () => {
    const h = await s.provider?.llm?.();
    c(a).push(...h || []);
  });
  const { updateNodeData: l } = wt(), u = (h) => {
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
  return on(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var p = vC();
        O(h, p);
      },
      children: (h, p) => {
        var v = xC(), m = Q(v), y = Z(m);
        Ze(y, {
          level: 3,
          children: (I, Y) => {
            $e();
            var q = Ae("输入参数");
            O(I, q);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 2);
        Fe(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, Y) => {
            var q = mC();
            O(I, q);
          },
          $$slots: { default: !0 }
        }), F(m);
        var b = V(m, 2);
        Mt(b, {});
        var C = V(b, 2), E = Z(C);
        Ze(E, {
          level: 3,
          children: (I, Y) => {
            $e();
            var q = Ae("图片识别");
            O(I, q);
          },
          $$slots: { default: !0 }
        });
        var k = V(E, 2);
        Fe(k, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (I, Y) => {
            var q = yC();
            O(I, q);
          },
          $$slots: { default: !0 }
        }), F(C);
        var x = V(C, 2);
        Mt(x, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var N = V(x, 2);
        Ze(N, {
          level: 3,
          mt: "10px",
          children: (I, Y) => {
            $e();
            var q = Ae("模型设置");
            O(I, q);
          },
          $$slots: { default: !0 }
        });
        var M = V(N, 4), j = Z(M);
        {
          let I = /* @__PURE__ */ $(() => n().llmId ? [n().llmId] : []);
          xt(j, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (Y) => {
              const q = Y.value;
              l(o, () => ({ llmId: q }));
            },
            get value() {
              return c(I);
            }
          });
        }
        var H = V(j, 2);
        Xr(H, {
          placement: "bottom",
          floating: (I) => {
            var Y = wC(), q = V(Z(Y), 2), R = Z(q), W = Z(R), J = Z(W);
            F(W);
            var te = V(W, 2);
            vr(te), te.__input = (de) => l(o, { temperature: parseFloat(de.target.value) }), F(R), F(q);
            var oe = V(q, 2), L = Z(oe), ne = Z(L), fe = Z(ne);
            F(ne);
            var he = V(ne, 2);
            vr(he), he.__input = (de) => l(o, { topP: parseFloat(de.target.value) }), F(L), F(oe);
            var re = V(oe, 2), ue = Z(re), ge = Z(ue), ye = Z(ge);
            F(ge);
            var be = V(ge, 2);
            vr(be), be.__input = (de) => l(o, { topK: parseInt(de.target.value) }), F(ue), F(re), F(Y), Pe(() => {
              Je(J, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Vi(te, n().temperature ?? 0.5), Je(fe, `Top P: ${n().topP ?? 0.9 ?? ""}`), Vi(he, n().topP ?? 0.9), Je(ye, `Top K: ${n().topK ?? 50 ?? ""}`), Vi(be, n().topK ?? 50);
            }), O(I, Y);
          },
          children: (I, Y) => {
            ki(I, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), F(M);
        var T = V(M, 4), _ = Z(T);
        {
          let I = /* @__PURE__ */ $(() => n().systemPrompt || "");
          qe(_, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(I);
            },
            oninput: (Y) => {
              l(o, { systemPrompt: Y.target.value });
            }
          });
        }
        F(T);
        var S = V(T, 4), z = Z(S);
        {
          let I = /* @__PURE__ */ $(() => n().userPrompt || "");
          qe(z, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(I);
            },
            oninput: (Y) => {
              l(o, { userPrompt: Y.target.value });
            }
          });
        }
        F(S);
        var P = V(S, 2);
        {
          var A = (I) => {
            var Y = bC(), q = V(Q(Y), 2), R = Z(q);
            {
              let W = /* @__PURE__ */ $(() => n().jsonSchema || "");
              qe(R, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(W);
                },
                oninput: (J) => {
                  l(o, { jsonSchema: J.target.value });
                }
              });
            }
            F(q), O(I, Y);
          };
          ie(P, (I) => {
            n().outType === "json" && I(A);
          });
        }
        var D = V(P, 2), B = Z(D);
        Ze(B, {
          level: 3,
          children: (I, Y) => {
            $e();
            var q = Ae("输出参数");
            O(I, q);
          },
          $$slots: { default: !0 }
        });
        var X = V(B, 2);
        {
          let I = /* @__PURE__ */ $(() => n().outType ? [n().outType] : []);
          xt(X, {
            class: "tf-select-xs",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (Y) => {
              u(Y.value);
            },
            get value() {
              return c(I);
            }
          });
        }
        F(D);
        var U = V(D, 2);
        ur(U, {}), O(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(d);
}
qr(["input"]);
se(Ig, { data: {} }, [], [], !0);
var kC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), $C = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), SC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _C = /* @__PURE__ */ ee('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const EC = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Mg(t, e) {
  ae(e, !0), Ue(t, EC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  wn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ft(), { addParameter: i } = Cn(), { updateNodeData: s } = wt(), a = [
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
  return on(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = kC();
        O(u, d);
      },
      children: (u, d) => {
        var h = _C(), p = Q(h), v = Z(p);
        Ze(v, {
          level: 3,
          children: (H, T) => {
            $e();
            var _ = Ae("输入参数");
            O(H, _);
          },
          $$slots: { default: !0 }
        });
        var m = V(v, 2);
        Fe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, T) => {
            var _ = $C();
            O(H, _);
          },
          $$slots: { default: !0 }
        }), F(p);
        var y = V(p, 2);
        Mt(y, {});
        var w = V(y, 2);
        Ze(w, {
          level: 3,
          mt: "10px",
          children: (H, T) => {
            $e();
            var _ = Ae("代码");
            O(H, _);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 4), C = Z(b);
        {
          let H = /* @__PURE__ */ $(() => n().engine ? [n().engine] : ["qlexpress"]);
          xt(C, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (T) => {
              const _ = T.value;
              s(o, () => ({ engine: _ }));
            },
            get value() {
              return c(H);
            }
          });
        }
        F(b);
        var E = V(b, 4), k = Z(E);
        {
          let H = /* @__PURE__ */ $(() => n().code || "");
          qe(k, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (T) => {
              s(o, () => ({ code: T.target.value }));
            },
            get value() {
              return c(H);
            }
          });
        }
        F(E);
        var x = V(E, 2), N = Z(x);
        Ze(N, {
          level: 3,
          mt: "10px",
          children: (H, T) => {
            $e();
            var _ = Ae("输出参数");
            O(H, _);
          },
          $$slots: { default: !0 }
        });
        var M = V(N, 2);
        Fe(M, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, T) => {
            var _ = SC();
            O(H, _);
          },
          $$slots: { default: !0 }
        }), F(x);
        var j = V(x, 2);
        ur(j, {}), O(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
se(Mg, { data: {} }, [], [], !0);
var PC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), OC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), NC = /* @__PURE__ */ ee('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const TC = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function zg(t, e) {
  ae(e, !0), Ue(t, TC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn(), { updateNodeData: s } = wt();
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
  return on(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = PC();
        O(l, u);
      },
      children: (l, u) => {
        var d = NC(), h = Q(d), p = Z(h);
        Ze(p, {
          level: 3,
          children: (x, N) => {
            $e();
            var M = Ae("输入参数");
            O(x, M);
          },
          $$slots: { default: !0 }
        });
        var v = V(p, 2);
        Fe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, N) => {
            var M = OC();
            O(x, M);
          },
          $$slots: { default: !0 }
        }), F(h);
        var m = V(h, 2);
        Mt(m, {});
        var y = V(m, 2);
        Ze(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (x, N) => {
            $e();
            var M = Ae("模板内容");
            O(x, M);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 2), b = Z(w);
        {
          let x = /* @__PURE__ */ $(() => n().template || "");
          qe(b, {
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
        F(w);
        var C = V(w, 2), E = Z(C);
        Ze(E, {
          level: 3,
          mt: "10px",
          children: (x, N) => {
            $e();
            var M = Ae("输出参数");
            O(x, M);
          },
          $$slots: { default: !0 }
        }), F(C);
        var k = V(C, 2);
        ur(k, {}), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
se(zg, { data: {} }, [], [], !0);
var DC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), AC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), LC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), IC = /* @__PURE__ */ ee('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), MC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zC = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), VC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), HC = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), BC = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), RC = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), KC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), FC = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const jC = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;gap:8px;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;gap:4px;}"
};
function Vg(t, e) {
  ae(e, !0), Ue(t, jC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  wn(() => {
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
  ], i = ft(), { addParameter: s } = Cn(), { updateNodeData: a } = wt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), f();
    }
  };
  return on(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = DC();
        O(u, d);
      },
      children: (u, d) => {
        var h = FC(), p = Q(h), v = Z(p);
        Ze(v, {
          level: 3,
          children: (W, J) => {
            $e();
            var te = Ae("输入参数");
            O(W, te);
          },
          $$slots: { default: !0 }
        });
        var m = V(v, 2);
        Fe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (W, J) => {
            var te = AC();
            O(W, te);
          },
          $$slots: { default: !0 }
        }), F(p);
        var y = V(p, 2);
        Mt(y, {});
        var w = V(y, 2);
        Ze(w, {
          level: 3,
          mt: "10px",
          children: (W, J) => {
            $e();
            var te = Ae("URL 地址");
            O(W, te);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 2), C = Z(b), E = Z(C);
        {
          let W = /* @__PURE__ */ $(() => n().method ? [n().method] : ["get"]);
          xt(E, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (J) => {
              const te = J.value;
              a(i, () => ({ method: te }));
            },
            get value() {
              return c(W);
            }
          });
        }
        F(C);
        var k = V(C, 2), x = Z(k);
        {
          let W = /* @__PURE__ */ $(() => n().url || "");
          dt(x, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (J) => {
              a(i, () => ({ url: J.target.value }));
            },
            get value() {
              return c(W);
            }
          });
        }
        F(k), F(b);
        var N = V(b, 2), M = Z(N);
        Ze(M, {
          level: 3,
          children: (W, J) => {
            $e();
            var te = Ae("Http 头信息");
            O(W, te);
          },
          $$slots: { default: !0 }
        });
        var j = V(M, 2);
        Fe(j, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (W, J) => {
            var te = LC();
            O(W, te);
          },
          $$slots: { default: !0 }
        }), F(N);
        var H = V(N, 2);
        Mt(H, { dataKeyName: "headers" });
        var T = V(H, 2);
        {
          var _ = (W) => {
            var J = IC(), te = Q(J);
            Ze(te, {
              level: 3,
              mt: "10px",
              children: (we, Te) => {
                $e();
                var G = Ae("Body");
                O(we, G);
              },
              $$slots: { default: !0 }
            });
            var oe = V(te, 2), L = Z(oe), ne = Z(L);
            {
              let we = /* @__PURE__ */ $(() => !n().bodyType || n().bodyType === "");
              dt(ne, {
                type: "radio",
                value: "",
                get checked() {
                  return c(we);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            $e(), F(L);
            var fe = V(L, 2), he = Z(fe);
            {
              let we = /* @__PURE__ */ $(() => n().bodyType === "form-data");
              dt(he, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(we);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            $e(), F(fe);
            var re = V(fe, 2), ue = Z(re);
            {
              let we = /* @__PURE__ */ $(() => n().bodyType === "x-www-form-urlencoded");
              dt(ue, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(we);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            $e(), F(re);
            var ge = V(re, 2), ye = Z(ge);
            {
              let we = /* @__PURE__ */ $(() => n().bodyType === "json");
              dt(ye, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(we);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            $e(), F(ge);
            var be = V(ge, 2), de = Z(be);
            {
              let we = /* @__PURE__ */ $(() => n().bodyType === "raw");
              dt(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(we);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            $e(), F(be), F(oe), O(W, J);
          };
          ie(T, (W) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && W(_);
          });
        }
        var S = V(T, 2);
        {
          var z = (W) => {
            var J = zC(), te = Q(J), oe = Z(te);
            Ze(oe, {
              level: 3,
              children: (fe, he) => {
                $e();
                var re = Ae("参数");
                O(fe, re);
              },
              $$slots: { default: !0 }
            });
            var L = V(oe, 2);
            Fe(L, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (fe, he) => {
                var re = MC();
                O(fe, re);
              },
              $$slots: { default: !0 }
            }), F(te);
            var ne = V(te, 2);
            Mt(ne, { dataKeyName: "formData" }), O(W, J);
          };
          ie(S, (W) => {
            n().bodyType === "form-data" && W(z);
          });
        }
        var P = V(S, 2);
        {
          var A = (W) => {
            var J = HC(), te = Q(J), oe = Z(te);
            Ze(oe, {
              level: 3,
              children: (fe, he) => {
                $e();
                var re = Ae("Body 参数");
                O(fe, re);
              },
              $$slots: { default: !0 }
            });
            var L = V(oe, 2);
            Fe(L, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (fe, he) => {
                var re = VC();
                O(fe, re);
              },
              $$slots: { default: !0 }
            }), F(te);
            var ne = V(te, 2);
            Mt(ne, { dataKeyName: "formUrlencoded" }), O(W, J);
          };
          ie(P, (W) => {
            n().bodyType === "x-www-form-urlencoded" && W(A);
          });
        }
        var D = V(P, 2);
        {
          var B = (W) => {
            var J = BC(), te = Z(J);
            qe(te, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (oe) => {
                a(i, { bodyJson: oe.target.value });
              }
            }), F(J), O(W, J);
          };
          ie(D, (W) => {
            n().bodyType === "json" && W(B);
          });
        }
        var X = V(D, 2);
        {
          var U = (W) => {
            var J = RC(), te = Z(J);
            qe(te, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (oe) => {
                a(i, { bodyRaw: oe.target.value });
              }
            }), F(J), O(W, J);
          };
          ie(X, (W) => {
            n().bodyType === "raw" && W(U);
          });
        }
        var I = V(X, 2), Y = Z(I);
        Ze(Y, {
          level: 3,
          mt: "10px",
          children: (W, J) => {
            $e();
            var te = Ae("输出参数");
            O(W, te);
          },
          $$slots: { default: !0 }
        });
        var q = V(Y, 2);
        Fe(q, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (W, J) => {
            var te = KC();
            O(W, te);
          },
          $$slots: { default: !0 }
        }), F(I);
        var R = V(I, 2);
        ur(R, {}), O(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
se(Vg, { data: {} }, [], [], !0);
var ZC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), WC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qC = /* @__PURE__ */ ee('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const XC = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hg(t, e) {
  ae(e, !0), Ue(t, XC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn(), s = Ln();
  let a = /* @__PURE__ */ me(ht([]));
  wn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = wt();
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
  return on(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = ZC();
        O(d, h);
      },
      children: (d, h) => {
        var p = qC(), v = Q(p), m = Z(v);
        Ze(m, {
          level: 3,
          children: (_, S) => {
            $e();
            var z = Ae("输入参数");
            O(_, z);
          },
          $$slots: { default: !0 }
        });
        var y = V(m, 2);
        Fe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, S) => {
            var z = WC();
            O(_, z);
          },
          $$slots: { default: !0 }
        }), F(v);
        var w = V(v, 2);
        Mt(w, {});
        var b = V(w, 2);
        Ze(b, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            $e();
            var z = Ae("知识库设置");
            O(_, z);
          },
          $$slots: { default: !0 }
        });
        var C = V(b, 4), E = Z(C);
        {
          let _ = /* @__PURE__ */ $(() => n().knowledgeId ? [n().knowledgeId] : []);
          xt(E, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (S) => {
              const z = S.value;
              l(o, () => ({ knowledgeId: z }));
            },
            get value() {
              return c(_);
            }
          });
        }
        F(C);
        var k = V(C, 4), x = Z(k);
        dt(x, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (_) => {
            const S = _.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), F(k);
        var N = V(k, 4), M = Z(N);
        {
          let _ = /* @__PURE__ */ $(() => n().limit || "");
          dt(M, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (S) => {
              const z = S.target.value;
              l(o, () => ({ limit: z }));
            },
            get value() {
              return c(_);
            }
          });
        }
        F(N);
        var j = V(N, 2), H = Z(j);
        Ze(H, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            $e();
            var z = Ae("输出参数");
            O(_, z);
          },
          $$slots: { default: !0 }
        }), F(j);
        var T = V(j, 2);
        ur(T, {}), O(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
se(Hg, { data: {} }, [], [], !0);
var YC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), UC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), GC = /* @__PURE__ */ ee('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const QC = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bg(t, e) {
  ae(e, !0), Ue(t, QC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn(), s = Ln();
  let a = /* @__PURE__ */ me(ht([]));
  wn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = wt();
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
  return on(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = YC();
        O(d, h);
      },
      children: (d, h) => {
        var p = GC(), v = Q(p), m = Z(v);
        Ze(m, {
          level: 3,
          children: (_, S) => {
            $e();
            var z = Ae("输入参数");
            O(_, z);
          },
          $$slots: { default: !0 }
        });
        var y = V(m, 2);
        Fe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, S) => {
            var z = UC();
            O(_, z);
          },
          $$slots: { default: !0 }
        }), F(v);
        var w = V(v, 2);
        Mt(w, {});
        var b = V(w, 2);
        Ze(b, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            $e();
            var z = Ae("搜索引擎设置");
            O(_, z);
          },
          $$slots: { default: !0 }
        });
        var C = V(b, 4), E = Z(C);
        {
          let _ = /* @__PURE__ */ $(() => n().engine ? [n().engine] : []);
          xt(E, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (S) => {
              const z = S.value;
              l(o, () => ({ engine: z }));
            },
            get value() {
              return c(_);
            }
          });
        }
        F(C);
        var k = V(C, 4), x = Z(k);
        dt(x, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (_) => {
            const S = _.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), F(k);
        var N = V(k, 4), M = Z(N);
        dt(M, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (_) => {
            const S = _.target.value;
            l(o, () => ({ limit: S }));
          }
        }), F(N);
        var j = V(N, 2), H = Z(j);
        Ze(H, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            $e();
            var z = Ae("输出参数");
            O(_, z);
          },
          $$slots: { default: !0 }
        }), F(j);
        var T = V(j, 2);
        ur(T, {}), O(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
se(Bg, { data: {} }, [], [], !0);
var JC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), e6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), t6 = /* @__PURE__ */ ee('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const n6 = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--tf-primary);color:var(--tf-primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Rg(t, e) {
  ae(e, !0), Ue(t, n6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn();
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
  return on(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = JC();
        O(a, l);
      },
      handle: (a) => {
        yr(a, {
          type: "source",
          get position() {
            return Se.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = t6(), d = Q(u), h = Z(d);
        Ze(h, {
          level: 3,
          children: (b, C) => {
            $e();
            var E = Ae("循环变量");
            O(b, E);
          },
          $$slots: { default: !0 }
        }), F(d);
        var p = V(d, 2);
        Mt(p, { dataKeyName: "loopVars" });
        var v = V(p, 2), m = Z(v);
        Ze(m, {
          level: 3,
          children: (b, C) => {
            $e();
            var E = Ae("输出参数");
            O(b, E);
          },
          $$slots: { default: !0 }
        });
        var y = V(m, 2);
        Fe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, C) => {
            var E = e6();
            O(b, E);
          },
          $$slots: { default: !0 }
        }), F(v);
        var w = V(v, 2);
        Mt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), le(s);
}
se(Rg, { data: {} }, [], [], !0);
var r6 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), o6 = /* @__PURE__ */ ee('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const i6 = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Kg(t, e) {
  ae(e, !0), Ue(t, i6);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = ft(), a = lr(s), l = /* @__PURE__ */ $(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = wt(), d = (S, z) => {
    u(s, (P) => {
      let A = P.data?.[o()];
      return A[r()] = { ...A[r()], [S]: z }, { [o()]: A };
    });
  }, h = (S, z) => {
    const P = z.target.value;
    d(S, P);
  }, p = (S) => {
    const z = S.value;
    d("ref", z);
  }, v = (S) => {
    const z = S.value;
    d("formType", z);
  }, m = (S) => {
    const z = S.value;
    d("contentType", z);
  };
  let y;
  const w = () => {
    u(s, (S) => {
      let z = S.data?.[o()];
      return z.splice(r(), 1), { [o()]: [...z] };
    }), y?.hide();
  };
  let b = Tg(i());
  var C = {
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
  }, E = o6(), k = Q(E), x = Z(k);
  {
    let S = /* @__PURE__ */ $(() => c(l).nameDisabled === !0);
    dt(x, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(S);
      },
      oninput: (z) => h("name", z)
    });
  }
  F(k);
  var N = V(k, 2), M = Z(N);
  {
    var j = (S) => {
      dt(S, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (z) => h("value", z)
      });
    }, H = (S) => {
      var z = ce(), P = Q(z);
      {
        var A = (D) => {
          {
            let B = /* @__PURE__ */ $(() => [c(l).ref]);
            xt(D, {
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
        ie(
          P,
          (D) => {
            c(l).refType !== "input" && D(A);
          },
          !0
        );
      }
      O(S, z);
    };
    ie(M, (S) => {
      c(l).refType === "fixed" ? S(j) : S(H, !1);
    });
  }
  F(N);
  var T = V(N, 2), _ = Z(T);
  return Et(
    Xr(_, {
      placement: "bottom",
      floating: (S) => {
        var z = r6(), P = Z(z), A = V(Z(P));
        {
          let W = /* @__PURE__ */ $(() => c(l).contentType ? [c(l).contentType] : []);
          xt(A, {
            get items() {
              return Ql;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(W);
            },
            onSelect: m
          });
        }
        F(P);
        var D = V(P, 2), B = V(Z(D));
        {
          let W = /* @__PURE__ */ $(() => c(l).formType ? [c(l).formType] : []);
          xt(B, {
            get items() {
              return Tb;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(W);
            },
            onSelect: v
          });
        }
        F(D);
        var X = V(D, 2), U = V(Z(X));
        qe(U, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            h("formLabel", W);
          },
          get value() {
            return c(l).formLabel;
          }
        }), F(X);
        var I = V(X, 2), Y = V(Z(I));
        qe(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (W) => {
            h("formDescription", W);
          },
          get value() {
            return c(l).formDescription;
          }
        }), F(I);
        var q = V(I, 2), R = Z(q);
        Fe(R, {
          variant: "destructive",
          onclick: w,
          children: (W, J) => {
            $e();
            var te = Ae("删除");
            O(W, te);
          },
          $$slots: { default: !0 }
        }), F(q), F(z), O(S, z);
      },
      children: (S, z) => {
        ki(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => y = S,
    () => y
  ), F(T), O(t, E), le(C);
}
se(
  Kg,
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
var s6 = /* @__PURE__ */ ee('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), a6 = /* @__PURE__ */ ee('<div class="none-params svelte-1fllp9b"> </div>'), l6 = /* @__PURE__ */ ee('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const u6 = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function Fg(t, e) {
  ae(e, !0), Ue(t, u6);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = ft(), s = lr(i), a = /* @__PURE__ */ $(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = l6(), d = Z(u);
  {
    var h = (v) => {
      var m = s6();
      $e(4), O(v, m);
    };
    ie(d, (v) => {
      c(a).length !== 0 && v(h);
    });
  }
  var p = V(d, 2);
  return Ct(
    p,
    19,
    () => c(a),
    (v) => v.id,
    (v, m, y) => {
      Kg(v, {
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
      var m = a6(), y = Z(m, !0);
      F(m), Pe(() => Je(y, n())), O(v, m);
    }
  ), F(u), O(t, u), le(l);
}
se(Fg, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const pl = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!pl(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !pl(t[s], e[s])) return !1;
    return !0;
  }
};
var c6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), d6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), h6 = /* @__PURE__ */ ee('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const p6 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function jg(t, e) {
  ae(e, !0), Ue(t, p6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn(), { updateNodeData: s } = wt();
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
      pl(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return on(t, Ve(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = c6();
        O(l, u);
      },
      children: (l, u) => {
        var d = h6(), h = Q(d), p = Z(h);
        Ze(p, {
          level: 3,
          children: (x, N) => {
            $e();
            var M = Ae("确认数据");
            O(x, M);
          },
          $$slots: { default: !0 }
        });
        var v = V(p, 2);
        Fe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (x, N) => {
            var M = d6();
            O(x, M);
          },
          $$slots: { default: !0 }
        }), F(h);
        var m = V(h, 2);
        Fg(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = V(m, 2);
        Ze(y, {
          level: 3,
          mt: "10px",
          children: (x, N) => {
            $e();
            var M = Ae("确认消息");
            O(x, M);
          },
          $$slots: { default: !0 }
        });
        var w = V(y, 4), b = Z(w);
        {
          let x = /* @__PURE__ */ $(() => n().message || "");
          qe(b, {
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
        F(w);
        var C = V(w, 2), E = Z(C);
        Ze(E, {
          level: 3,
          mt: "10px",
          children: (x, N) => {
            $e();
            var M = Ae("输出参数");
            O(x, M);
          },
          $$slots: { default: !0 }
        }), F(C);
        var k = V(C, 2);
        ur(k, { placeholder: "" }), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
se(jg, { data: {} }, [], [], !0);
const f6 = {
  startNode: Pg,
  codeNode: Mg,
  confirmNode: jg,
  llmNode: Ig,
  templateNode: zg,
  httpNode: Vg,
  knowledgeNode: Hg,
  searchEngineNode: Bg,
  loopNode: Rg,
  endNode: Ag
};
var g6 = /* @__PURE__ */ ee("<!> ", 1);
function fl(t, e) {
  ae(e, !0);
  const n = g(e, "icon", 7), r = g(e, "title", 7), o = g(e, "type", 7), i = g(e, "description", 7), s = g(e, "extra", 7), a = wt(), l = (h) => {
    if (!h.dataTransfer)
      return null;
    const p = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    h.dataTransfer.setData("application/tinyflow", JSON.stringify(p)), h.dataTransfer.effectAllowed = "move";
  }, u = () => {
    const h = window.innerWidth, p = window.innerHeight, v = a.screenToFlowPosition({ x: h / 2, y: p / 2 }), m = {
      id: `node_${Vn()}`,
      type: o(),
      position: v,
      data: { title: r(), description: i(), ...s() }
    };
    Ke.addNode(m), Ke.selectNodeOnly(m.id);
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
  return Fe(t, {
    draggable: !0,
    ondragstart: l,
    onclick: u,
    get "data-node-type"() {
      return o();
    },
    children: (h, p) => {
      var v = g6(), m = Q(v);
      Rs(m, n);
      var y = V(m);
      Pe(() => Je(y, ` ${r() ?? ""}`)), O(h, v);
    },
    $$slots: { default: !0 }
  }), le(d);
}
se(fl, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var v6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), m6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), y6 = /* @__PURE__ */ ee('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Zg(t, e) {
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
  ], s = [], a = Ln(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((C, E) => (l[C].sortNo || 0) - (l[E].sortNo || 0));
    for (let C of b)
      l[C].group === "base" ? o.push({ type: C, ...l[C] }) : s.push({
        icon: l[C].icon,
        title: l[C].title,
        type: C
      });
    o.sort((C, E) => (C.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let C of b)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === C) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var u = y6(), d = Z(u), h = Z(d), p = Z(h);
  $g(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      K(n, b.value.toString(), !0);
    }
  }), F(h);
  var v = V(h, 2), m = Z(v);
  Ct(m, 21, () => o, so, (b, C) => {
    fl(b, Ve(() => c(C)));
  }), F(m);
  var y = V(m, 2);
  Ct(y, 21, () => s, so, (b, C) => {
    fl(b, Ve(() => c(C)));
  }), F(y), F(v), F(d);
  var w = V(d, 2);
  Fe(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      K(r, c(r) ? "" : "show", !0);
    },
    children: (b, C) => {
      var E = ce(), k = Q(E);
      {
        var x = (M) => {
          var j = v6();
          O(M, j);
        }, N = (M) => {
          var j = m6();
          O(M, j);
        };
        ie(k, (M) => {
          c(r) === "show" ? M(x) : M(N, !1);
        });
      }
      O(b, E);
    },
    $$slots: { default: !0 }
  }), F(u), Pe(() => {
    jt(u, 1, `tf-toolbar ${c(r) ?? ""}`), _t(m, `display: ${c(n) === "base" ? "flex" : "none"}`), _t(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), O(t, u), le();
}
se(Zg, {}, [], [], !0);
const w6 = () => ({ getNode: (t) => Ke.getNode(t) }), b6 = () => ({ ensureParentInNodesBefore: (t, e) => {
  Ke.updateNodes((n) => {
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
} }), x6 = () => ({ getEdgesByTarget: (t) => Ke.getEdges().filter((e) => e.target === t) });
var C6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), k6 = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), $6 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), S6 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), _6 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), E6 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), P6 = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), O6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), N6 = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), T6 = /* @__PURE__ */ ee("<!> <!> <div></div> <!>", 1);
const D6 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}`
};
function Wg(t, e) {
  ae(e, !0), Ue(t, D6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = Cn(), s = wt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), p = Ln().customNodes[e.type];
  p.render?.(h, d, s);
  const v = p.forms;
  let m;
  Ie(() => {
    n().expand && m && m.append(h);
  }), Ie(() => {
    n() && p.onUpdate?.(h, { ...d, data: n() });
  }), Ie(() => {
    !n().parameters && p.parameters && l({
      parameters: ni(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), Ie(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: ni(JSON.parse(JSON.stringify(p.outputDefs)))
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
    const w = (C) => {
      var E = ce(), k = Q(E);
      Rs(k, () => p.icon), O(C, E);
    };
    let b = /* @__PURE__ */ $(() => ({ ...n(), description: p.description }));
    on(t, Ve(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (C, E) => {
          var k = T6(), x = Q(k);
          {
            var N = (S) => {
              var z = k6(), P = Q(z), A = Z(P);
              Ze(A, {
                level: 3,
                children: (U, I) => {
                  $e();
                  var Y = Ae("输入参数");
                  O(U, Y);
                },
                $$slots: { default: !0 }
              });
              var D = V(A, 2);
              {
                var B = (U) => {
                  Fe(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (I, Y) => {
                      var q = C6();
                      O(I, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(D, (U) => {
                  p.parametersAddEnable !== !1 && U(B);
                });
              }
              F(P);
              var X = V(P, 2);
              Mt(X, {}), O(S, z);
            };
            ie(x, (S) => {
              p.parametersEnable !== !1 && S(N);
            });
          }
          var M = V(x, 2);
          {
            var j = (S) => {
              var z = ce(), P = Q(z);
              Ct(P, 17, () => v, so, (A, D) => {
                var B = ce(), X = Q(B);
                {
                  var U = (Y) => {
                    var q = $6(), R = Q(q), W = Z(R, !0);
                    F(R);
                    var J = V(R, 2), te = Z(J);
                    {
                      let oe = /* @__PURE__ */ $(() => n()[c(D).name] || c(D).defaultValue);
                      dt(te, Ve(
                        {
                          get placeholder() {
                            return c(D).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(oe);
                          }
                        },
                        () => c(D).attrs,
                        {
                          onchange: (L) => {
                            u(c(D).name, L);
                          }
                        }
                      ));
                    }
                    F(J), Pe(() => Je(W, c(D).label)), O(Y, q);
                  }, I = (Y) => {
                    var q = ce(), R = Q(q);
                    {
                      var W = (te) => {
                        var oe = S6(), L = Q(oe), ne = Z(L, !0);
                        F(L);
                        var fe = V(L, 2), he = Z(fe);
                        {
                          let re = /* @__PURE__ */ $(() => n()[c(D).name] || c(D).defaultValue);
                          qe(he, Ve(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(D).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(re);
                              }
                            },
                            () => c(D).attrs,
                            {
                              onchange: (ue) => {
                                u(c(D).name, ue);
                              }
                            }
                          ));
                        }
                        F(fe), Pe(() => Je(ne, c(D).label)), O(te, oe);
                      }, J = (te) => {
                        var oe = ce(), L = Q(oe);
                        {
                          var ne = (he) => {
                            var re = _6(), ue = Q(re), ge = Z(ue, !0);
                            F(ue);
                            var ye = V(ue, 2), be = Z(ye), de = Z(be), we = Z(de);
                            F(de);
                            var Te = V(de, 2), G = (Me) => l({ [c(D).name]: parseFloat(Me.target.value) });
                            Ye(
                              Te,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(D).attrs,
                                value: n()[c(D).name] ?? c(D).defaultValue,
                                oninput: G
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), F(be), F(ye), Pe(() => {
                              Je(ge, c(D).label), Je(we, `${c(D).description ?? ""}: ${n()[c(D).name] ?? c(D).defaultValue ?? ""}`);
                            }), O(he, re);
                          }, fe = (he) => {
                            var re = ce(), ue = Q(re);
                            {
                              var ge = (be) => {
                                var de = E6(), we = Q(de), Te = Z(we, !0);
                                F(we);
                                var G = V(we, 2), Me = Z(G);
                                {
                                  let ke = /* @__PURE__ */ $(() => c(D).options || []), Ne = /* @__PURE__ */ $(() => n()[c(D).name] ? [n()[c(D).name]] : [c(D).defaultValue]);
                                  xt(Me, {
                                    get items() {
                                      return c(ke);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(D).placeholder;
                                    },
                                    onSelect: (ze) => {
                                      const Xe = ze.value;
                                      l({ [c(D).name]: Xe });
                                    },
                                    get value() {
                                      return c(Ne);
                                    }
                                  });
                                }
                                F(G), Pe(() => Je(Te, c(D).label)), O(be, de);
                              }, ye = (be) => {
                                var de = ce(), we = Q(de);
                                {
                                  var Te = (Me) => {
                                    var ke = P6(), Ne = Q(ke), ze = Z(Ne, !0);
                                    F(Ne);
                                    var Xe = V(Ne, 2), rt = Z(Xe);
                                    {
                                      let Ge = /* @__PURE__ */ $(() => c(D).chosen?.buttonText);
                                      kg(rt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(D).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Ge);
                                        },
                                        onChosen: (ot, ve, Oe) => {
                                          c(D).chosen?.onChosen?.(l, ot, ve, Oe);
                                        },
                                        get value() {
                                          return n()[c(D).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(D).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    F(Xe), Pe(() => Je(ze, c(D).label)), O(Me, ke);
                                  }, G = (Me) => {
                                    var ke = ce(), Ne = Q(ke);
                                    {
                                      var ze = (Xe) => {
                                        Ze(Xe, Ve({ level: 3, mt: "10px" }, () => c(D).attrs, {
                                          children: (rt, Ge) => {
                                            $e();
                                            var ot = Ae();
                                            Pe(() => Je(ot, c(D).label)), O(rt, ot);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ie(
                                        Ne,
                                        (Xe) => {
                                          c(D).type === "heading" && Xe(ze);
                                        },
                                        !0
                                      );
                                    }
                                    O(Me, ke);
                                  };
                                  ie(
                                    we,
                                    (Me) => {
                                      c(D).type === "chosen" ? Me(Te) : Me(G, !1);
                                    },
                                    !0
                                  );
                                }
                                O(be, de);
                              };
                              ie(
                                ue,
                                (be) => {
                                  c(D).type === "select" ? be(ge) : be(ye, !1);
                                },
                                !0
                              );
                            }
                            O(he, re);
                          };
                          ie(
                            L,
                            (he) => {
                              c(D).type === "slider" ? he(ne) : he(fe, !1);
                            },
                            !0
                          );
                        }
                        O(te, oe);
                      };
                      ie(
                        R,
                        (te) => {
                          c(D).type === "textarea" ? te(W) : te(J, !1);
                        },
                        !0
                      );
                    }
                    O(Y, q);
                  };
                  ie(X, (Y) => {
                    c(D).type === "input" ? Y(U) : Y(I, !1);
                  });
                }
                O(A, B);
              }), O(S, z);
            };
            ie(M, (S) => {
              v && S(j);
            });
          }
          var H = V(M, 2);
          Et(H, (S) => m = S, () => m);
          var T = V(H, 2);
          {
            var _ = (S) => {
              var z = N6(), P = Q(z), A = Z(P);
              Ze(A, {
                level: 3,
                mt: "10px",
                children: (U, I) => {
                  $e();
                  var Y = Ae("输出参数");
                  O(U, Y);
                },
                $$slots: { default: !0 }
              });
              var D = V(A, 2);
              {
                var B = (U) => {
                  Fe(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (I, Y) => {
                      var q = O6();
                      O(I, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(D, (U) => {
                  p.outputDefsAddEnable !== !1 && U(B);
                });
              }
              F(P);
              var X = V(P, 2);
              ur(X, {}), O(S, z);
            };
            ie(T, (S) => {
              p.outputDefsEnable !== !1 && S(_);
            });
          }
          Pe(() => {
            _t(H, p.rootStyle || ""), jt(H, 1, ar(p.rootClass), "svelte-qt4m0r");
          }), O(C, k);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return le(y);
}
se(Wg, { data: {} }, [], [], !0);
const A6 = () => ({ updateEdgeData: (t, e, n) => {
  const r = Ke.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ke.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), L6 = () => ({ deleteEdge: (t) => {
  Ke.removeEdge(t);
} }), I6 = () => {
  const t = (e, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === e && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (e) => {
    const n = Ke.getEdges(), r = [];
    let o = t(e, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Ke.getNode(s.target)), i.push(...t(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, M6 = () => ({ getNodeRelativePosition: (t) => {
  let e = Ke.getNode(t);
  const n = { x: 0, y: 0 };
  for (; e; )
    n.x += e.position.x, n.y += e.position.y, e.parentId ? e = Ke.getNode(e.parentId) : e = void 0;
  return n;
} });
function z6(t) {
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
function V6(t) {
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
function H6(t) {
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
function gl(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => gl(n, e));
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
      Object.hasOwn(t, r) && (n[r] = gl(t[r], e));
    return n;
  }
  return t;
}
const B6 = () => (wt(), { copyHandler: async (t) => {
  const e = Ke.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = Ke.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(z6), o = n.map(H6), i = JSON.stringify({
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
  const r = V6(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Vn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, h = gl(l.data, i);
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
      id: `edge_${Vn()}`,
      source: u,
      target: d
    });
  }
  Ke.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Ke.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), ad = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var R6 = /* @__PURE__ */ ee('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), K6 = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), F6 = /* @__PURE__ */ ee('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const j6 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--tf-background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--tf-border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--tf-muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function qg(t, e) {
  ae(e, !0), Ue(t, j6);
  const n = g(e, "onInit", 7), r = /* @__PURE__ */ Le(e, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = wt();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ me(!1), s = /* @__PURE__ */ me(null);
  const { updateEdgeData: a } = A6(), l = (q) => {
    q.preventDefault(), q.dataTransfer && (q.dataTransfer.dropEffect = "move");
  }, u = (q) => {
    q.preventDefault();
    const R = o.screenToFlowPosition({ x: q.clientX - 250, y: q.clientY - 100 }), W = q.dataTransfer?.getData("application/tinyflow");
    if (!W)
      return;
    const J = JSON.parse(W), te = { id: `node_${Vn()}`, position: R, data: {}, ...J };
    Ke.addNode(te), Ke.selectNodeOnly(te.id);
  }, { getNode: d } = w6(), h = (q) => {
    const R = d(q.source), W = d(q.target);
    if (q.sourceHandle === "loop_handle" || R.parentId) {
      const J = o.getEdges();
      for (let te of J)
        if (te.target === q.target) {
          const oe = d(te.source);
          if (q.sourceHandle === "loop_handle" && oe.parentId !== R.id || R.parentId && oe.parentId !== R.parentId)
            return !1;
        }
    }
    return !(!R.parentId && W.parentId && W.parentId !== R.id);
  }, { getNodesFromSource: p } = I6(), { getNodeRelativePosition: v } = M6(), { ensureParentInNodesBefore: m } = b6(), y = (q, R) => {
    if (!R.isValid)
      return;
    const W = R.toNode;
    if (W.parentId)
      return;
    const J = R.fromNode, te = R.fromHandle, oe = { position: { ...W.position } };
    if (te.id === "loop_handle" ? oe.parentId = J.id : J.parentId && (oe.parentId = J.parentId), oe.parentId) {
      const { x: L, y: ne } = v(oe.parentId);
      oe.position = { x: W.position.x - L, y: W.position.y - ne }, o.updateNode(W.id, oe), p(W.id).forEach((fe) => {
        o.updateNode(fe.id, {
          parentId: oe.parentId,
          position: { x: fe.position.x - L, y: fe.position.y - ne }
        });
      }), m(oe.parentId, W.id);
    }
    setTimeout(() => {
      Ke.getEdges().forEach((L) => {
        L.target === W.id && L.source == J.id && (K(i, !0), K(s, L, !0));
      });
    });
  }, { getEdgesByTarget: w } = x6(), b = (q) => {
    q.edges.forEach((R) => {
      R.id === c(s)?.id && (K(s, null), K(i, !1));
      const W = d(R.target);
      if (W && W.parentId) {
        const J = w(R.target), { x: te, y: oe } = v(W.parentId);
        if (J.length === 0)
          o.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + te, y: W.position.y + oe }
          }), p(W.id).forEach((L) => {
            o.updateNode(L.id, {
              parentId: void 0,
              position: { x: L.position.x + te, y: L.position.y + oe }
            });
          });
        else {
          let L = !1;
          for (let ne = 0; ne < J.length; ne++) {
            const fe = J[ne], he = d(fe.source);
            if (he.parentId || he.type === "loopNode") {
              L = !0;
              break;
            }
          }
          L || (o.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + te, y: W.position.y + oe }
          }), p(W.id).forEach((ne) => {
            o.updateNode(ne.id, {
              parentId: void 0,
              position: { x: ne.position.x + te, y: ne.position.y + oe }
            });
          }));
        }
      }
    });
  }, { deleteEdge: C } = L6(), E = (q, R) => {
  }, k = (q) => {
  }, { copyHandler: x, pasteHandler: N } = B6(), M = (q) => {
    ad() || ((q.ctrlKey || q.metaKey) && q.key === "c" && (q.preventDefault(), x(q)), (q.ctrlKey || q.metaKey) && q.key === "a" && (q.preventDefault(), Ke.updateNodes((R) => R.map((W) => ({ ...W, selected: !0 }))), Ke.updateEdges((R) => R.map((W) => ({ ...W, selected: !0 })))));
  }, j = async (q) => {
    ad() || N(q);
  };
  wn(() => {
    window.addEventListener("keydown", M), window.addEventListener("paste", j);
  }), li(() => {
    window.removeEventListener("keydown", M), window.removeEventListener("paste", j);
  });
  const H = {
    // ...nodeTypes
  }, T = Ln().customNodes;
  if (T)
    for (let q of Object.keys(T))
      H[q] = Wg;
  const _ = Ln().onDataChange;
  Ie(() => {
    _?.({
      nodes: Ke.getNodes(),
      edges: Ke.getEdges(),
      viewport: Ke.getViewport()
    });
  });
  var S = {
    get onInit() {
      return n();
    },
    set onInit(q) {
      n(q), f();
    }
  }, z = F6(), P = Z(z), A = Ke.getNodes, D = Ke.setNodes, B = Ke.getEdges, X = Ke.setEdges, U = Ke.getViewport, I = Ke.setViewport;
  {
    let q = /* @__PURE__ */ $(() => Ln().defaultTheme ?? "system"), R = /* @__PURE__ */ $(() => ({ ...f6, ...H })), W = /* @__PURE__ */ $(() => ({
      markerEnd: { type: Yo.ArrowClosed, width: 20, height: 20 }
    }));
    jp(P, {
      get colorMode() {
        return c(q);
      },
      get nodeTypes() {
        return c(R);
      },
      get nodes() {
        return A();
      },
      set nodes(J) {
        D(J);
      },
      get edges() {
        return B();
      },
      set edges(J) {
        X(J);
      },
      get viewport() {
        return U();
      },
      set viewport(J) {
        I(J);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: h,
      onconnectend: y,
      onconnectstart: E,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (J) => {
        K(i, !0), K(s, J.edge, !0);
      },
      onbeforeconnect: (J) => ({ ...J, id: Vn() }),
      ondelete: b,
      onclick: (J) => {
        const te = J.target;
        te.classList.contains("svelte-flow__edge-interaction") || te.classList.contains("panel-content") || te.closest(".panel-content") || (K(i, !1), K(s, null));
      },
      get defaultEdgeOptions() {
        return c(W);
      },
      children: (J, te) => {
        var oe = K6(), L = Q(oe);
        ef(L, {});
        var ne = V(L, 2);
        Gp(ne, {});
        var fe = V(ne, 2);
        nf(fe, {});
        var he = V(fe, 2);
        {
          var re = (ue) => {
            vi(ue, {
              children: (ge, ye) => {
                var be = R6(), de = V(Z(be), 4), we = Z(de);
                {
                  let ke = /* @__PURE__ */ $(() => c(s)?.data?.condition);
                  qe(we, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(ke);
                    },
                    onchange: (Ne) => {
                      c(s) && a(c(s).id, { condition: Ne.target?.value });
                    }
                  });
                }
                F(de);
                var Te = V(de, 2), G = Z(Te);
                Fe(G, {
                  variant: "destructive",
                  onclick: () => {
                    C(c(s)?.id), K(i, !1);
                  },
                  children: (ke, Ne) => {
                    $e();
                    var ze = Ae("删除");
                    O(ke, ze);
                  },
                  $$slots: { default: !0 }
                });
                var Me = V(G, 2);
                Fe(Me, {
                  variant: "default",
                  onclick: () => {
                    K(i, !1);
                  },
                  children: (ke, Ne) => {
                    $e();
                    var ze = Ae("保存");
                    O(ke, ze);
                  },
                  $$slots: { default: !0 }
                }), F(Te), F(be), O(ge, be);
              },
              $$slots: { default: !0 }
            });
          };
          ie(he, (ue) => {
            c(i) && ue(re);
          });
        }
        O(J, oe);
      },
      $$slots: { default: !0 }
    });
  }
  var Y = V(P, 2);
  return Zg(Y, {}), F(z), O(t, z), le(S);
}
se(qg, { onInit: {} }, [], [], !0);
function Z6(t, e) {
  ae(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ke.init(o?.nodes || [], o?.edges || []), Mr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), f();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), f();
    }
  };
  return Zp(t, {
    children: (s, a) => {
      qg(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), le(i);
}
customElements.define("tinyflow-component", se(Z6, { options: {}, onInit: {} }, [], [], !1));
const q6 = /* @__PURE__ */ Xg({
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
    defaultTheme: {}
  },
  setup(t, { expose: e }) {
    const n = t, r = Yg(null);
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
    return Ug(() => {
      if (r.value) {
        const l = { ...n };
        "data" in l && l.data != null && (l.data = i(l.data)), o = new Ex({
          ...l,
          element: r.value
        });
      }
    }), Gg(() => {
      o && (o.destroy(), o = null);
    }), e({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null),
      getInstance: () => o || (console.warn("Tinyflow instance is not initialized"), null)
    }), (l, u) => (Jg(), Qg("div", {
      ref_key: "divRef",
      ref: r,
      class: tv(["tinyflow", l.className]),
      style: ev(l.style)
    }, null, 6));
  }
});
export {
  q6 as Tinyflow
};
//# sourceMappingURL=index.js.map
