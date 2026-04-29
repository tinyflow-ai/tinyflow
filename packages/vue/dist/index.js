import { defineComponent as Xg, ref as Ug, onMounted as Gg, onUnmounted as Jg, createElementBlock as Qg, openBlock as ev, normalizeStyle as tv, normalizeClass as nv } from "vue";
const rv = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(rv);
const ud = 1, cd = 2, dd = 4, ov = 8, iv = 16, sv = 1, av = 2, hd = 4, lv = 8, uv = 16, pd = 1, cv = 2, fd = "[", Ts = "[!", vl = "]", Lr = {}, $t = Symbol(), dv = "http://www.w3.org/1999/xhtml", hv = "http://www.w3.org/2000/svg", gd = "@attach", pv = !1;
var Ds = Array.isArray, fv = Array.prototype.indexOf, ml = Array.from, Ui = Object.keys, Gi = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, vd = Object.getOwnPropertyDescriptors, md = Object.prototype, gv = Array.prototype, As = Object.getPrototypeOf, Eu = Object.isExtensible;
function So(t) {
  return typeof t == "function";
}
const ze = () => {
};
function vv(t) {
  return t();
}
function Sa(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function yd() {
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
const St = 2, yl = 4, Ms = 8, wd = 1 << 24, or = 16, ir = 32, xr = 64, Is = 128, gn = 512, Nt = 1024, Kt = 2048, sr = 4096, Yt = 8192, Xn = 16384, Ls = 32768, Qn = 65536, Pu = 1 << 17, wl = 1 << 18, Kr = 1 << 19, bd = 1 << 20, Bo = 32768, _a = 1 << 21, bl = 1 << 22, fr = 1 << 23, Tn = Symbol("$state"), xl = Symbol("legacy props"), mv = Symbol(""), Jr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), yv = 1, Hs = 3, ar = 8;
function Cl(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function wv() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function bv(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function xv() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Cv(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kv() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $v() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Sv(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function _v() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ev() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pv() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ov() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ri(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Nv() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Tv() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ce = !1;
function It(t) {
  Ce = t;
}
let De;
function ut(t) {
  if (t === null)
    throw ri(), Lr;
  return De = t;
}
function vn() {
  return ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(De)
  );
}
function K(t) {
  if (Ce) {
    if (/* @__PURE__ */ Ut(De) !== null)
      throw ri(), Lr;
    De = t;
  }
}
function Se(t = 1) {
  if (Ce) {
    for (var e = t, n = De; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n);
    De = n;
  }
}
function Ji(t = !0) {
  for (var e = 0, n = De; ; ) {
    if (n.nodeType === ar) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === vl) {
        if (e === 0) return n;
        e -= 1;
      } else (r === fd || r === Ts) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n)
    );
    t && n.remove(), n = o;
  }
}
function xd(t) {
  if (!t || t.nodeType !== ar)
    throw ri(), Lr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Cd(t) {
  return t === this.v;
}
function kd(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function $d(t) {
  return !kd(t, this.v);
}
let yo = !1, Dv = !1;
function Av() {
  yo = !0;
}
const Mv = [];
function kl(t, e = !1, n = !1) {
  return Li(t, /* @__PURE__ */ new Map(), "", Mv, null, n);
}
function Li(t, e, n, r, o = null, i = !1) {
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
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = Li(u, e, n, r, null, i));
      }
      return a;
    }
    if (As(t) === md) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = Li(
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
      return Li(
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
let rt = null;
function oo(t) {
  rt = t;
}
function mn(t) {
  return (
    /** @type {T} */
    zs().get(t)
  );
}
function Hr(t, e) {
  return zs().set(t, e), e;
}
function Iv(t) {
  return zs().has(t);
}
function Lv() {
  return zs();
}
function ae(t, e = !1, n) {
  rt = {
    p: rt,
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
    rt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Kd(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, rt = e.p, t ?? /** @type {T} */
  {};
}
function wo() {
  return !yo || rt !== null && rt.l === null;
}
function zs(t) {
  return rt === null && Cl(), rt.c ??= new Map(Hv(rt) || void 0);
}
function Hv(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Or = [];
function Sd() {
  var t = Or;
  Or = [], Sa(t);
}
function Cr(t) {
  if (Or.length === 0 && !Lo) {
    var e = Or;
    queueMicrotask(() => {
      e === Or && Sd();
    });
  }
  Or.push(t);
}
function zv() {
  for (; Or.length > 0; )
    Sd();
}
function _d(t) {
  var e = Fe;
  if (e === null)
    return We.f |= fr, t;
  if ((e.f & Ls) === 0) {
    if ((e.f & Is) === 0)
      throw t;
    e.b.error(t);
  } else
    io(t, e);
}
function io(t, e) {
  for (; e !== null; ) {
    if ((e.f & Is) !== 0)
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
let Je = null, Hi = null, en = null, Qt = [], Vs = null, Ea = !1, Lo = !1;
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
    Qt = [], Hi = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (Hi = this, Je = null, Ou(n.render_effects), Ou(n.effects), Hi = null, this.#o?.resolve()), en = null;
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
      var o = r.f, i = (o & (ir | xr)) !== 0, s = i && (o & Nt) !== 0, a = s || (o & Yt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Is) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Nt : (o & yl) !== 0 ? n.effects.push(r) : ii(r) && ((r.f & or) !== 0 && n.block_effects.push(r), Ko(r));
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
      ((n.f & Kt) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), Tt(n, Nt);
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & fr) === 0 && (this.current.set(e, e.v), en?.set(e, e.v));
  }
  activate() {
    Je = this, this.apply();
  }
  deactivate() {
    Je === this && (Je = null, en = null);
  }
  flush() {
    if (this.activate(), Qt.length > 0) {
      if (Ed(), Je !== null && Je !== this)
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
          var o = Qt;
          Qt = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Pd(d, a, l, u);
          if (Qt.length > 0) {
            Je = i, i.apply();
            for (const d of Qt)
              i.#s(d, r);
            i.deactivate();
          }
          Qt = o;
        }
      }
      Je = null, en = e;
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
      Tt(e, Kt), zr(e);
    for (const e of this.#a)
      Tt(e, sr), zr(e);
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
    return (this.#o ??= yd()).promise;
  }
  static ensure() {
    if (Je === null) {
      const e = Je = new dn();
      $i.add(Je), Lo || dn.enqueue(() => {
        Je === e && e.flush();
      });
    }
    return Je;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Cr(e);
  }
  apply() {
  }
}
function f(t) {
  var e = Lo;
  Lo = !0;
  try {
    for (var n; ; ) {
      if (zv(), Qt.length === 0 && (Je?.flush(), Qt.length === 0))
        return Vs = null, /** @type {T} */
        n;
      Ed();
    }
  } finally {
    Lo = e;
  }
}
function Ed() {
  var t = vr;
  Ea = !0;
  try {
    var e = 0;
    for (es(!0); Qt.length > 0; ) {
      var n = dn.ensure();
      if (e++ > 1e3) {
        var r, o;
        Vv();
      }
      n.process(Qt), gr.clear();
    }
  } finally {
    Ea = !1, es(t), Vs = null;
  }
}
function Vv() {
  try {
    kv();
  } catch (t) {
    io(t, Vs);
  }
}
let Rn = null;
function Ou(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Xn | Yt)) === 0 && ii(r) && (Rn = /* @__PURE__ */ new Set(), Ko(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Yd(r) : r.fn = null), Rn?.size > 0)) {
        gr.clear();
        for (const o of Rn) {
          if ((o.f & (Xn | Yt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Rn.has(s) && (Rn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Xn | Yt)) === 0 && Ko(l);
          }
        }
        Rn.clear();
      }
    }
    Rn = null;
  }
}
function Pd(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & St) !== 0 ? Pd(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (bl | or)) !== 0 && (i & Kt) === 0 && Od(o, e, r) && (Tt(o, Kt), zr(
        /** @type {Effect} */
        o
      ));
    }
}
function Od(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & St) !== 0 && Od(
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
    if (Ea && e === Fe && (n & or) !== 0 && (n & wl) === 0)
      return;
    if ((n & (xr | ir)) !== 0) {
      if ((n & Nt) === 0) return;
      e.f ^= Nt;
    }
  }
  Qt.push(e);
}
function jr(t) {
  let e = 0, n = er(0), r;
  return () => {
    Fo() && (c(n), Wr(() => (e === 0 && (r = st(() => t(() => _n(n)))), e += 1, () => {
      Cr(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, _n(n));
      });
    })));
  };
}
var Bv = Qn | Kr | Is;
function Fv(t, e, n) {
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
  #y = jr(() => (this.#p = er(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    Fe.b, this.#e = !!this.#r.pending, this.#i = kr(() => {
      if (Fe.b = this, Ce) {
        const i = this.#n;
        vn(), /** @type {Comment} */
        i.nodeType === ar && /** @type {Comment} */
        i.data === Ts ? this.#w() : this.#v();
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
    }, Bv), Ce && (this.#t = De);
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
    return this.#e && (this.#c = Ht(), this.#t.before(this.#c), e = this.#c), e;
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
    var n = Fe, r = We, o = rt;
    nn(this.#i), Bt(this.#i), oo(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return _d(i), null;
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
    ), Gd(this.#a, this.#u)), this.#s === null && (this.#s = Wt(() => e(this.#t)));
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
    ), Se(), ut(Ji()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Tv();
        return;
      }
      o = !0, i && Ov(), dn.ensure(), this.#d = 0, this.#l !== null && eo(this.#l, () => {
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
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & dd) !== 0, d = (e & ud) !== 0, h = (e & cd) !== 0;
  if (u) {
    var p = (
      /** @type {Element} */
      t
    );
    s = Ce ? ut(
      /** @type {Comment | Text} */
      /* @__PURE__ */ vt(p)
    ) : p.appendChild(Ht());
  }
  Ce && vn();
  var v = null, m = /* @__PURE__ */ $l(() => {
    var k = n();
    return Ds(k) ? k : k == null ? [] : ml(k);
  }), y, w = !0;
  function b() {
    jv(E, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : Pl(v.effect), C.first = v.effect) : eo(v.effect, () => {
      v = null;
    }));
  }
  var C = kr(() => {
    y = /** @type {V[]} */
    c(m);
    var k = y.length;
    let x = !1;
    if (Ce) {
      var O = xd(s) === Ts;
      O !== (k === 0) && (s = Ji(), ut(s), It(!1), x = !0);
    }
    for (var L = /* @__PURE__ */ new Set(), j = (
      /** @type {Batch} */
      Je
    ), B = null, T = Vd(), _ = 0; _ < k; _ += 1) {
      Ce && De.nodeType === ar && /** @type {Comment} */
      De.data === vl && (s = /** @type {Comment} */
      De, x = !0, It(!1));
      var S = y[_], H = r(S, _), P = w ? null : a.get(H);
      P ? (d && ao(P.v, S), h ? ao(
        /** @type {Value<number>} */
        P.i,
        _
      ) : P.i = _, T && j.skipped_effects.delete(P.e)) : (P = Zv(
        w ? s : null,
        B,
        S,
        H,
        _,
        o,
        e,
        n
      ), w && (P.o = !0, B === null ? l = P : B.next = P, B = P), a.set(H, P)), L.add(H);
    }
    if (k === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: Wt(() => i(s))
        };
      else {
        var D = document.createDocumentFragment(), A = Ht();
        D.append(A), v = {
          fragment: D,
          effect: Wt(() => i(A))
        };
      }
    if (Ce && k > 0 && ut(Ji()), !w)
      if (T) {
        for (const [V, W] of a)
          L.has(V) || j.skipped_effects.add(W.e);
        j.oncommit(b), j.ondiscard(() => {
        });
      } else
        b();
    x && It(!0), c(m);
  }), E = { effect: C, items: a, first: l };
  w = !1, Ce && (s = De);
}
function jv(t, e, n, r, o) {
  var i = (r & ov) !== 0, s = e.length, a = t.items, l = t.first, u, d = null, h, p = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var C = d ? d.next : l;
      ln(t, d, w), ln(t, w, C), sa(w, C, n), d = w, p = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & Yt) !== 0 && (Pl(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (p.length < v.length) {
          var E = v[0], k;
          d = E.prev;
          var x = p[0], O = p[p.length - 1];
          for (k = 0; k < p.length; k += 1)
            sa(p[k], E, n);
          for (k = 0; k < v.length; k += 1)
            u.delete(v[k]);
          ln(t, x.prev, O.next), ln(t, d, x), ln(t, O, E), l = E, d = O, b -= 1, p = [], v = [];
        } else
          u.delete(w), sa(w, l, n), ln(t, w.prev, w.next), ln(t, w, d === null ? t.first : d.next), ln(t, d, w), d = w;
        continue;
      }
      for (p = [], v = []; l !== null && l.k !== y; )
        (l.e.f & Yt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    p.push(w), d = w, l = w.next;
  }
  let L = a.size > s;
  if (l !== null || u !== void 0) {
    for (var j = u === void 0 ? [] : ml(u); l !== null; )
      (l.e.f & Yt) === 0 && j.push(l), l = l.next;
    var B = j.length;
    if (L = a.size - B > s, B > 0) {
      var T = (r & dd) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < B; b += 1)
          j[b].a?.measure();
        for (b = 0; b < B; b += 1)
          j[b].a?.fix();
      }
      Kv(t, j, T);
    }
  }
  if (L)
    for (const _ of a.values())
      _.o || (ln(t, d, _), d = _);
  t.effect.last = d && d.e, i && Cr(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function Zv(t, e, n, r, o, i, s, a) {
  var l = (s & ud) !== 0, u = (s & iv) === 0, d = l ? u ? /* @__PURE__ */ Md(n, !1, !1) : er(n) : n, h = (s & cd) === 0 ? o : er(o), p = {
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
      v.append(t = Ht());
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
      /* @__PURE__ */ Ut(i)
    );
    o.before(i), i = s;
  }
}
function ln(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function Nd(t, e, n, r) {
  const o = wo() ? oi : $l;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = Je, s = (
    /** @type {Effect} */
    Fe
  ), a = Wv();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ qv(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & Xn) === 0 && io(d, s);
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
function Wv() {
  var t = Fe, e = We, n = rt, r = Je;
  return function(o = !0) {
    nn(t), Bt(e), oo(n), o && r?.activate();
  };
}
function Qi() {
  nn(null), Bt(null), oo(null);
}
// @__NO_SIDE_EFFECTS__
function oi(t) {
  var e = St | Kt, n = We !== null && (We.f & St) !== 0 ? (
    /** @type {Derived} */
    We
  ) : null;
  return Fe !== null && (Fe.f |= Kr), {
    ctx: rt,
    deps: null,
    effects: null,
    equals: Cd,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      $t
    ),
    wv: 0,
    parent: n ?? Fe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function qv(t, e) {
  let n = (
    /** @type {Effect | null} */
    Fe
  );
  n === null && wv();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = er(
    /** @type {V} */
    $t
  ), s = !We, a = /* @__PURE__ */ new Map();
  return t1(() => {
    var l = yd();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === Je && u.committed && u.deactivate(), Qi();
      });
    } catch (p) {
      l.reject(p), Qi();
    }
    var u = (
      /** @type {Batch} */
      Je
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(Jr), a.delete(u), a.set(u, l);
    }
    const h = (p, v = void 0) => {
      if (u.activate(), v)
        v !== Jr && (i.f |= fr, ao(i, v));
      else {
        (i.f & fr) !== 0 && (i.f ^= fr), ao(i, p);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(Jr);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), Fs(() => {
    for (const l of a.values())
      l.reject(Jr);
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
  return Jd(e), e;
}
// @__NO_SIDE_EFFECTS__
function $l(t) {
  const e = /* @__PURE__ */ oi(t);
  return e.equals = $d, e;
}
function Td(t) {
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
function Yv(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & St) === 0)
      return (e.f & Xn) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Sl(t) {
  var e, n = Fe;
  nn(Yv(t));
  try {
    t.f &= ~Bo, Td(t), e = nh(t);
  } finally {
    nn(n);
  }
  return e;
}
function Dd(t) {
  var e = Sl(t);
  if (t.equals(e) || (Je?.is_fork || (t.v = e), t.wv = eh()), !qr)
    if (en !== null)
      (Fo() || Je?.is_fork) && en.set(t, e);
    else {
      var n = (t.f & gn) === 0 ? sr : Nt;
      Tt(t, n);
    }
}
let Pa = /* @__PURE__ */ new Set();
const gr = /* @__PURE__ */ new Map();
let Ad = !1;
function er(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Cd,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(t, e) {
  const n = er(t);
  return Jd(n), n;
}
// @__NO_SIDE_EFFECTS__
function Md(t, e = !1, n = !0) {
  const r = er(t);
  return e || (r.equals = $d), yo && n && rt !== null && rt.l !== null && (rt.l.s ??= []).push(r), r;
}
function R(t, e, n = !1) {
  We !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pn || (We.f & Pu) !== 0) && wo() && (We.f & (St | or | bl | Pu)) !== 0 && !Un?.includes(t) && Pv();
  let r = n ? ht(e) : e;
  return ao(t, r);
}
function ao(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    qr ? gr.set(t, e) : gr.set(t, n), t.v = e;
    var r = dn.ensure();
    r.capture(t, n), (t.f & St) !== 0 && ((t.f & Kt) !== 0 && Sl(
      /** @type {Derived} */
      t
    ), Tt(t, (t.f & gn) !== 0 ? Nt : sr)), t.wv = eh(), Id(t, Kt), wo() && Fe !== null && (Fe.f & Nt) !== 0 && (Fe.f & (ir | xr)) === 0 && (Jt === null ? r1([t]) : Jt.push(t)), !r.is_fork && Pa.size > 0 && !Ad && Xv();
  }
  return e;
}
function Xv() {
  Ad = !1;
  var t = vr;
  es(!0);
  const e = Array.from(Pa);
  try {
    for (const n of e)
      (n.f & Nt) !== 0 && Tt(n, sr), ii(n) && Ko(n);
  } finally {
    es(t);
  }
  Pa.clear();
}
function Nu(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return R(t, n), r;
}
function _n(t) {
  R(t, t.v + 1);
}
function Id(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = wo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Fe)) {
        var l = (a & Kt) === 0;
        if (l && Tt(s, e), (a & St) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          en?.delete(u), (a & Bo) === 0 && (a & gn && (s.f |= Bo), Id(u, sr));
        } else l && ((a & or) !== 0 && Rn !== null && Rn.add(
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
  if (typeof t != "object" || t === null || Tn in t)
    return t;
  const e = As(t);
  if (e !== md && e !== gv)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ds(t), o = /* @__PURE__ */ me(0), i = Gn, s = (a) => {
    if (Gn === i)
      return a();
    var l = We, u = Gn;
    Bt(null), Mu(i);
    var d = a();
    return Bt(l), Mu(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && _v();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ me(u.value);
          return n.set(l, h), h;
        }) : R(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ me($t));
            n.set(l, d), _n(o);
          }
        } else
          R(u, $t), _n(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Tn)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Yn(a, l)?.writable) && (d = s(() => {
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
        if (l === Tn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== $t || Reflect.has(a, l);
        if (u !== void 0 || Fe !== null && (!d || Yn(a, l)?.writable)) {
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
            m !== void 0 ? R(m, $t) : v in a && (m = s(() => /* @__PURE__ */ me($t)), n.set(v + "", m));
          }
        if (h === void 0)
          (!p || Yn(a, l)?.writable) && (h = s(() => /* @__PURE__ */ me(void 0)), R(h, ht(u)), n.set(l, h));
        else {
          p = h.v !== $t;
          var y = s(() => ht(u));
          R(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= b.v && R(b, C + 1);
          }
          _n(o);
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
        Ev();
      }
    }
  );
}
function Tu(t) {
  try {
    if (t !== null && typeof t == "object" && Tn in t)
      return t[Tn];
  } catch {
  }
  return t;
}
function Uv(t, e) {
  return Object.is(Tu(t), Tu(e));
}
var zt, Ld, Hd, zd;
function Oa() {
  if (zt === void 0) {
    zt = window, Ld = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Hd = Yn(e, "firstChild").get, zd = Yn(e, "nextSibling").get, Eu(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Eu(n) && (n.__t = void 0);
  }
}
function Ht(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function vt(t) {
  return Hd.call(t);
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
    n = De.appendChild(Ht());
  else if (e && n.nodeType !== Hs) {
    var r = Ht();
    return n?.before(r), ut(r), r;
  }
  return ut(n), n;
}
function G(t, e = !1) {
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
  if (e && De?.nodeType !== Hs) {
    var r = Ht();
    return De?.before(r), ut(r), r;
  }
  return De;
}
function z(t, e = 1, n = !1) {
  let r = Ce ? De : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== Hs) {
    var i = Ht();
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
function Gv(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Cr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function Jv(t) {
  Ce && /* @__PURE__ */ vt(t) !== null && _l(t);
}
let Du = !1;
function Bd() {
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
function Bs(t) {
  var e = We, n = Fe;
  Bt(null), nn(null);
  try {
    return t();
  } finally {
    Bt(e), nn(n);
  }
}
function Fd(t, e, n, r = n) {
  t.addEventListener(e, () => Bs(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), Bd();
}
function Rd(t) {
  Fe === null && (We === null && Cv(), xv()), qr && bv();
}
function Qv(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function rn(t, e, n) {
  var r = Fe;
  r !== null && (r.f & Yt) !== 0 && (t |= Yt);
  var o = {
    ctx: rt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Kt | gn,
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
      Ko(o), o.f |= Ls;
    } catch (a) {
      throw kt(o), a;
    }
  else e !== null && zr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Kr) === 0 && (i = i.first, (t & or) !== 0 && (t & Qn) !== 0 && i !== null && (i.f |= Qn)), i !== null && (i.parent = r, r !== null && Qv(i, r), We !== null && (We.f & St) !== 0 && (t & xr) === 0)) {
    var s = (
      /** @type {Derived} */
      We
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Fo() {
  return We !== null && !Pn;
}
function Fs(t) {
  const e = rn(Ms, null, !1);
  return Tt(e, Nt), e.teardown = t, e;
}
function Le(t) {
  Rd();
  var e = (
    /** @type {Effect} */
    Fe.f
  ), n = !We && (e & ir) !== 0 && (e & Ls) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      rt
    );
    (r.e ??= []).push(t);
  } else
    return Kd(t);
}
function Kd(t) {
  return rn(yl | bd, t, !1);
}
function Vt(t) {
  return Rd(), rn(Ms | bd, t, !0);
}
function Zr(t) {
  dn.ensure();
  const e = rn(xr | Kr, t, !0);
  return () => {
    kt(e);
  };
}
function e1(t) {
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
function t1(t) {
  return rn(bl | Kr, t, !0);
}
function Wr(t, e = 0) {
  return rn(Ms | e, t, !0);
}
function Pe(t, e = [], n = [], r = []) {
  Nd(r, e, n, (o) => {
    rn(Ms, () => t(...o.map(c)), !0);
  });
}
function kr(t, e = 0) {
  var n = rn(or | e, t, !0);
  return n;
}
function jd(t, e = 0) {
  var n = rn(wd | e, t, !0);
  return n;
}
function Wt(t) {
  return rn(ir | Kr, t, !0);
}
function Zd(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = qr, r = We;
    Au(!0), Bt(null);
    try {
      e.call(null);
    } finally {
      Au(n), Bt(r);
    }
  }
}
function Wd(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Bs(() => {
      o.abort(Jr);
    });
    var r = n.next;
    (n.f & xr) !== 0 ? n.parent = null : kt(n, e), n = r;
  }
}
function n1(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & ir) === 0 && kt(e), e = n;
  }
}
function kt(t, e = !0) {
  var n = !1;
  (e || (t.f & wl) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (qd(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Wd(t, e && !n), ts(t, 0), Tt(t, Xn);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Zd(t);
  var o = t.parent;
  o !== null && o.first !== null && Yd(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function qd(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(t)
    );
    t.remove(), t = n;
  }
}
function Yd(t) {
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
  if ((t.f & Yt) === 0) {
    if (t.f ^= Yt, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & Qn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & ir) !== 0 && (t.f & or) !== 0;
      El(r, e, i ? n : !1), r = o;
    }
  }
}
function Pl(t) {
  Ud(t, !0);
}
function Ud(t, e) {
  if ((t.f & Yt) !== 0) {
    t.f ^= Yt, (t.f & Nt) === 0 && (Tt(t, Kt), zr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & Qn) !== 0 || (n.f & ir) !== 0;
      Ud(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function Gd(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n)
    );
    e.append(n), n = o;
  }
}
let vr = !1;
function es(t) {
  vr = t;
}
let qr = !1;
function Au(t) {
  qr = t;
}
let We = null, Pn = !1;
function Bt(t) {
  We = t;
}
let Fe = null;
function nn(t) {
  Fe = t;
}
let Un = null;
function Jd(t) {
  We !== null && (Un === null ? Un = [t] : Un.push(t));
}
let Mt = null, Zt = 0, Jt = null;
function r1(t) {
  Jt = t;
}
let Qd = 1, Ro = 0, Gn = Ro;
function Mu(t) {
  Gn = t;
}
function eh() {
  return ++Qd;
}
function ii(t) {
  var e = t.f;
  if ((e & Kt) !== 0)
    return !0;
  if (e & St && (t.f &= -32769), (e & sr) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (ii(
          /** @type {Derived} */
          i
        ) && Dd(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & gn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    en === null && Tt(t, Nt);
  }
  return !1;
}
function th(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !Un?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & St) !== 0 ? th(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? Tt(i, Kt) : (i.f & Nt) !== 0 && Tt(i, sr), zr(
        /** @type {Effect} */
        i
      ));
    }
}
function nh(t) {
  var e = Mt, n = Zt, r = Jt, o = We, i = Un, s = rt, a = Pn, l = Gn, u = t.f;
  Mt = /** @type {null | Value[]} */
  null, Zt = 0, Jt = null, We = (u & (ir | xr)) === 0 ? t : null, Un = null, oo(t.ctx), Pn = !1, Gn = ++Ro, t.ac !== null && (Bs(() => {
    t.ac.abort(Jr);
  }), t.ac = null);
  try {
    t.f |= _a;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), p = t.deps;
    if (Mt !== null) {
      var v;
      if (ts(t, Zt), p !== null && Zt > 0)
        for (p.length = Zt + Mt.length, v = 0; v < Mt.length; v++)
          p[Zt + v] = Mt[v];
      else
        t.deps = p = Mt;
      if (vr && Fo() && (t.f & gn) !== 0)
        for (v = Zt; v < p.length; v++)
          (p[v].reactions ??= []).push(t);
    } else p !== null && Zt < p.length && (ts(t, Zt), p.length = Zt);
    if (wo() && Jt !== null && !Pn && p !== null && (t.f & (St | sr | Kt)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Jt.length; v++)
        th(
          Jt[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (Ro++, Jt !== null && (r === null ? r = Jt : r.push(.../** @type {Source[]} */
    Jt))), (t.f & fr) !== 0 && (t.f ^= fr), h;
  } catch (m) {
    return _d(m);
  } finally {
    t.f ^= _a, Mt = e, Zt = n, Jt = r, We = o, Un = i, oo(s), Pn = a, Gn = l;
  }
}
function o1(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = fv.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & St) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Mt === null || !Mt.includes(e)) && (Tt(e, sr), (e.f & gn) !== 0 && (e.f ^= gn, e.f &= -32769), Td(
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
      o1(t, n[r]);
}
function Ko(t) {
  var e = t.f;
  if ((e & Xn) === 0) {
    Tt(t, Nt);
    var n = Fe, r = vr;
    Fe = t, vr = !0;
    try {
      (e & (or | wd)) !== 0 ? n1(t) : Wd(t), Zd(t);
      var o = nh(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Qd;
      var i;
      pv && Dv && (t.f & Kt) !== 0 && t.deps;
    } finally {
      vr = r, Fe = n;
    }
  }
}
async function rh() {
  await Promise.resolve(), f();
}
function c(t) {
  var e = t.f, n = (e & St) !== 0;
  if (We !== null && !Pn) {
    var r = Fe !== null && (Fe.f & Xn) !== 0;
    if (!r && !Un?.includes(t)) {
      var o = We.deps;
      if ((We.f & _a) !== 0)
        t.rv < Ro && (t.rv = Ro, Mt === null && o !== null && o[Zt] === t ? Zt++ : Mt === null ? Mt = [t] : Mt.includes(t) || Mt.push(t));
      else {
        (We.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [We] : i.includes(We) || i.push(We);
      }
    }
  }
  if (qr) {
    if (gr.has(t))
      return gr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Nt) === 0 && s.reactions !== null || ih(s)) && (a = Sl(s)), gr.set(s, a), a;
    }
  } else n && (!en?.has(t) || Je?.is_fork && !Fo()) && (s = /** @type {Derived} */
  t, ii(s) && Dd(s), vr && Fo() && (s.f & gn) === 0 && oh(s));
  if (en?.has(t))
    return en.get(t);
  if ((t.f & fr) !== 0)
    throw t.v;
  return t.v;
}
function oh(t) {
  if (t.deps !== null) {
    t.f ^= gn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & St) !== 0 && (e.f & gn) === 0 && oh(
        /** @type {Derived} */
        e
      );
  }
}
function ih(t) {
  if (t.v === $t) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (gr.has(e) || (e.f & St) !== 0 && ih(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function st(t) {
  var e = Pn;
  try {
    return Pn = !0, t();
  } finally {
    Pn = e;
  }
}
const i1 = -7169;
function Tt(t, e) {
  t.f = t.f & i1 | e;
}
function s1(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function Ol(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Tn in t)
      Na(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Tn in n && Na(n);
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
    const n = As(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = vd(n);
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
const sh = /* @__PURE__ */ new Set(), Ta = /* @__PURE__ */ new Set();
function Nl(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || No.call(e, i), !i.cancelBubble)
      return Bs(() => n?.call(this, i));
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
function ns(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = Nl(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Fs(() => {
    e.removeEventListener(t, s, i);
  });
}
function $r(t) {
  for (var e = 0; e < t.length; e++)
    sh.add(t[e]);
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
    Gi(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = We, h = Fe;
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
function Rt(t, e) {
  var n = (
    /** @type {Effect} */
    Fe
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ne(t, e) {
  var n = (e & pd) !== 0, r = (e & cv) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (Ce)
      return Rt(De, null), De;
    o === void 0 && (o = Tl(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ vt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ld ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Rt(a, l);
    } else
      Rt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function a1(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & pd) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Ce)
      return Rt(De, null), De;
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
      Rt(d, h);
    } else
      Rt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function xe(t, e) {
  return /* @__PURE__ */ a1(t, e, "svg");
}
function Me(t = "") {
  if (!Ce) {
    var e = Ht(t + "");
    return Rt(e, e), e;
  }
  var n = De;
  return n.nodeType !== Hs && (n.before(n = Ht()), ut(n)), Rt(n, n), n;
}
function ce() {
  if (Ce)
    return Rt(De, null), De;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ht();
  return t.append(e, n), Rt(e, n), t;
}
function N(t, e) {
  if (Ce) {
    var n = (
      /** @type {Effect} */
      Fe
    );
    ((n.f & Ls) === 0 || n.nodes_end === null) && (n.nodes_end = De), vn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function si() {
  if (Ce && De && De.nodeType === ar && De.textContent?.startsWith("$")) {
    const t = De.textContent.substring(1);
    return vn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function l1(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const u1 = [
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
function c1(t) {
  return u1.includes(t);
}
const d1 = {
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
function h1(t) {
  return t = t.toLowerCase(), d1[t] ?? t;
}
const p1 = ["touchstart", "touchmove"];
function f1(t) {
  return p1.includes(t);
}
const g1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function v1(t) {
  return g1.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function et(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Dl(t, e) {
  return ah(t, e);
}
function m1(t, e) {
  Oa(), e.intro = e.intro ?? !1;
  const n = e.target, r = Ce, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(n)
    ); i && (i.nodeType !== ar || /** @type {Comment} */
    i.data !== fd); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(i);
    if (!i)
      throw Lr;
    It(!0), ut(
      /** @type {Comment} */
      i
    );
    const s = ah(t, { ...e, anchor: i });
    return It(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Lr && console.warn("Failed to hydrate: ", s), e.recover === !1 && $v(), Oa(), _l(n), It(!1), Dl(t, e);
  } finally {
    It(r), ut(o);
  }
}
const Xr = /* @__PURE__ */ new Map();
function ah(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Oa();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var p = 0; p < h.length; p++) {
      var v = h[p];
      if (!a.has(v)) {
        a.add(v);
        var m = f1(v);
        e.addEventListener(v, No, { passive: m });
        var y = Xr.get(v);
        y === void 0 ? (document.addEventListener(v, No, { passive: m }), Xr.set(v, 1)) : Xr.set(v, y + 1);
      }
    }
  };
  l(ml(sh)), Ta.add(l);
  var u = void 0, d = e1(() => {
    var h = n ?? e.appendChild(Ht());
    return Fv(
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
            rt
          );
          v.c = i;
        }
        if (o && (r.$$events = o), Ce && Rt(
          /** @type {TemplateNode} */
          p,
          null
        ), u = t(p, r) || {}, Ce && (Fe.nodes_end = De, De === null || De.nodeType !== ar || /** @type {Comment} */
        De.data !== vl))
          throw ri(), Lr;
        i && le();
      }
    ), () => {
      for (var p of a) {
        e.removeEventListener(p, No);
        var v = (
          /** @type {number} */
          Xr.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, No), Xr.delete(p)) : Xr.set(p, v);
      }
      Ta.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Da.set(u, d), u;
}
let Da = /* @__PURE__ */ new WeakMap();
function lh(t, e) {
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
      Je
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
            Gd(s, l), l.append(Ht()), this.#n.set(i, { effect: s, fragment: l });
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
      Je
    ), o = Vd();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      Wt(() => n(this.anchor))
    ), this.#e.set(r, e), o || (Ce && (this.anchor = De), this.#i());
  }
}
function Oe(t, e, ...n) {
  var r = new ai(t);
  kr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Qn);
}
function bn(t) {
  rt === null && Cl(), yo && rt.l !== null ? y1(rt).m.push(t) : Le(() => {
    const e = st(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function li(t) {
  rt === null && Cl(), bn(() => () => st(t));
}
function y1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function w1() {
  return Symbol(gd);
}
function ie(t, e, n = !1) {
  Ce && vn();
  var r = new ai(t), o = n ? Qn : 0;
  function i(s, a) {
    if (Ce) {
      const u = xd(t) === Ts;
      if (s === u) {
        var l = Ji();
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
function b1(t, e, n) {
  Ce && vn();
  var r = new ai(t), o = !wo();
  kr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function x1(t, e) {
  Ce && ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(t)
  ), Wr(() => {
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
      Fe
    );
    if (s === (s = e() ?? "")) {
      Ce && vn();
      return;
    }
    if (a.nodes_start !== null && (qd(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        De.data;
        for (var l = vn(), u = l; l !== null && (l.nodeType !== ar || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Ut(l);
        if (l === null)
          throw ri(), Lr;
        Rt(De, u), i = ut(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Tl(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ vt(h)), Rt(
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
  Ce && vn();
  var r = new ai(t);
  kr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Qn);
}
function uh(t, e, n, r, o, i) {
  let s = Ce;
  Ce && vn();
  var a = null;
  Ce && De.nodeType === yv && (a = /** @type {Element} */
  De, vn());
  var l = (
    /** @type {TemplateNode} */
    Ce ? De : t
  ), u = new ai(l, !1);
  kr(() => {
    const d = e() || null;
    var h = n || d === "svg" ? hv : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = Ce ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), Rt(a, a), r) {
          Ce && v1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            Ce ? /* @__PURE__ */ vt(a) : a.appendChild(Ht())
          );
          Ce && (v === null ? It(!1) : ut(v)), r(a, v);
        }
        Fe.nodes_end = a, p.before(a);
      }
      Ce && ut(p);
    }), () => {
    };
  }, Qn), Fs(() => {
  }), s && (It(!0), ut(l));
}
function C1(t, e) {
  let n = null, r = Ce;
  var o;
  if (Ce) {
    n = De;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(document.head)
    ); i !== null && (i.nodeType !== ar || /** @type {Comment} */
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
  Ce || (o = document.head.appendChild(Ht()));
  try {
    kr(() => e(o), wl);
  } finally {
    r && (It(!0), ut(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function Ge(t, e) {
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
      Wr(() => {
        var s = n();
        Ol(s), o && kd(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function k1(t, e) {
  var n = void 0, r;
  jd(() => {
    n !== (n = e()) && (r && (kt(r), r = null), n && (r = Wt(() => {
      bo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function ch(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = ch(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Ho() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = ch(t)) && (r && (r += " "), r += e);
  return r;
}
function lr(t) {
  return typeof t == "object" ? Ho(t) : t ?? "";
}
const Lu = [...` 	
\r\f \v\uFEFF`];
function $1(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Lu.includes(r[s - 1])) && (a === r.length || Lu.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Hu(t, e = !1) {
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
function S1(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(aa)), o && l.push(...Object.keys(o).map(aa));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var p = t[h];
        if (a ? p === "/" && t[h - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && t[h + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = h;
          else if (p === ";" || h === y - 1) {
            if (d !== -1) {
              var v = aa(t.substring(u, d).trim());
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
    return r && (n += Hu(r)), o && (n += Hu(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function jt(t, e, n, r, o, i) {
  var s = t.__className;
  if (Ce || s !== n || s === void 0) {
    var a = $1(n, r, i);
    (!Ce || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function la(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function _t(t, e, n, r) {
  var o = t.__style;
  if (Ce || o !== e) {
    var i = S1(e, r);
    (!Ce || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (la(t, n?.[0], r[0]), la(t, n?.[1], r[1], "important")) : la(t, n, r));
  return r;
}
function Aa(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ds(e))
      return Nv();
    for (var r of t.options)
      r.selected = e.includes(zu(r));
    return;
  }
  for (r of t.options) {
    var o = zu(r);
    if (Uv(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function _1(t) {
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
  }), Fs(() => {
    e.disconnect();
  });
}
function zu(t) {
  return "__value" in t ? t.__value : t.value;
}
const hr = Symbol("class"), En = Symbol("style"), dh = Symbol("is custom element"), hh = Symbol("is html");
function Jn(t) {
  if (Ce) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Ee(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          Ee(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, Cr(n), Bd();
  }
}
function zi(t, e) {
  var n = Ks(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Vi(t, e) {
  var n = Ks(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function E1(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ee(t, e, n, r) {
  var o = Ks(t);
  Ce && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[mv] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && ph(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function P1(t, e, n, r, o = !1, i = !1) {
  if (Ce && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Jn(s);
  }
  var l = Ks(t), u = l[dh], d = !l[hh];
  let h = Ce && u;
  h && It(!1);
  var p = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = lr(n.class) : (r || n[hr]) && (n.class = null), n[En] && (n.style ??= null);
  var y = ph(t);
  for (const O in n) {
    let L = n[O];
    if (v && O === "value" && L == null) {
      t.value = t.__value = "", p[O] = L;
      continue;
    }
    if (O === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      jt(t, w, L, r, e?.[hr], n[hr]), p[O] = L, p[hr] = n[hr];
      continue;
    }
    if (O === "style") {
      _t(t, L, e?.[En], n[En]), p[O] = L, p[En] = n[En];
      continue;
    }
    var b = p[O];
    if (!(L === b && !(L === void 0 && t.hasAttribute(O)))) {
      p[O] = L;
      var C = O[0] + O[1];
      if (C !== "$$")
        if (C === "on") {
          const j = {}, B = "$$" + O;
          let T = O.slice(2);
          var E = c1(T);
          if (l1(T) && (T = T.slice(0, -7), j.capture = !0), !E && b) {
            if (L != null) continue;
            t.removeEventListener(T, p[B], j), p[B] = null;
          }
          if (L != null)
            if (E)
              t[`__${T}`] = L, $r([T]);
            else {
              let _ = function(S) {
                p[O].call(this, S);
              };
              p[B] = Nl(T, t, _, j);
            }
          else E && (t[`__${T}`] = void 0);
        } else if (O === "style")
          Ee(t, O, L);
        else if (O === "autofocus")
          Gv(
            /** @type {HTMLElement} */
            t,
            !!L
          );
        else if (!u && (O === "__value" || O === "value" && L != null))
          t.value = t.__value = L;
        else if (O === "selected" && v)
          E1(
            /** @type {HTMLOptionElement} */
            t,
            L
          );
        else {
          var k = O;
          d || (k = h1(k));
          var x = k === "defaultValue" || k === "defaultChecked";
          if (L == null && !u && !x)
            if (l[O] = null, k === "value" || k === "checked") {
              let j = (
                /** @type {HTMLInputElement} */
                t
              );
              const B = e === void 0;
              if (k === "value") {
                let T = j.defaultValue;
                j.removeAttribute(k), j.defaultValue = T, j.value = j.__value = B ? T : null;
              } else {
                let T = j.defaultChecked;
                j.removeAttribute(k), j.defaultChecked = T, j.checked = B ? T : !1;
              }
            } else
              t.removeAttribute(O);
          else x || y.includes(k) && (u || typeof L != "string") ? (t[k] = L, k in l && (l[k] = $t)) : typeof L != "function" && Ee(t, k, L);
        }
    }
  }
  return h && It(!0), p;
}
function Ue(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  Nd(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", p = !1;
    if (jd(() => {
      var m = e(...l.map(c)), y = P1(
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
        b.description === gd && (!u || w !== u[b]) && (d[b] && kt(d[b]), d[b] = Wt(() => k1(t, () => w))), y[b] = w;
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
        ), _1(v);
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
      [dh]: t.nodeName.includes("-"),
      [hh]: t.namespaceURI === dv
    }
  );
}
var Vu = /* @__PURE__ */ new Map();
function ph(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Vu.get(e);
  if (n) return n;
  Vu.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = vd(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = As(o);
  }
  return n;
}
function rs(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Fd(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = ua(t) ? ca(i) : i, n(i), Je !== null && r.add(Je), await rh(), i !== (i = e())) {
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
  st(e) == null && t.value) && (n(ua(t) ? ca(t.value) : t.value), Je !== null && r.add(Je)), Wr(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Hi ?? Je
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
function O1(t, e, n = e) {
  Fd(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  Ce && t.files && n(t.files), Wr(() => {
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
var N1 = /* @__PURE__ */ new Al({
  box: "border-box"
});
function Bu(t, e, n) {
  var r = N1.observe(t, () => n(t[e]));
  bo(() => (st(() => n(t[e])), r));
}
function Fu(t, e) {
  return t === e || t?.[Tn] === e;
}
function Et(t = {}, e, n, r) {
  return bo(() => {
    var o, i;
    return Wr(() => {
      o = i, i = [], st(() => {
        t !== n(...i) && (e(t, ...i), o && Fu(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Cr(() => {
        i && Fu(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function Ml(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    rt
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
  n.b.length && Vt(() => {
    Ru(e, r), Sa(n.b);
  }), Le(() => {
    const o = st(() => n.m.map(vv));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Le(() => {
    Ru(e, r), Sa(n.a);
  });
}
function Ru(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let Si = !1;
function T1(t) {
  var e = Si;
  try {
    return Si = !1, [t(), Si];
  } finally {
    Si = e;
  }
}
const D1 = {
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
function Ie(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    D1
  );
}
const A1 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = Fe;
      try {
        nn(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          hd
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
function Ku(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: er(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Fe
      )
    },
    A1
  );
}
const M1 = {
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
      const i = Yn(o, e);
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
        const o = Yn(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === Tn || e === xl) return !1;
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
function He(...t) {
  return new Proxy({ props: t }, M1);
}
function g(t, e, n, r) {
  var o = !yo || (n & av) !== 0, i = (n & lv) !== 0, s = (n & uv) !== 0, a = (
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
    var h = Tn in t || xl in t;
    d = Yn(t, e)?.set ?? (h && e in t ? (E) => t[e] = E : void 0);
  }
  var p, v = !1;
  i ? [p, v] = T1(() => (
    /** @type {V} */
    t[e]
  )) : p = /** @type {V} */
  t[e], p === void 0 && r !== void 0 && (p = u(), d && (o && Sv(), d(p)));
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
  }, o && (n & hd) === 0)
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
  var w = !1, b = ((n & sv) !== 0 ? oi : $l)(() => (w = !1, m()));
  i && c(b);
  var C = (
    /** @type {Effect} */
    Fe
  );
  return (
    /** @type {() => V} */
    function(E, k) {
      if (arguments.length > 0) {
        const x = k ? c(b) : o && i ? ht(E) : E;
        return R(b, x), w = !0, a !== void 0 && (a = x), E;
      }
      return qr && w || (C.f & Xn) !== 0 ? b.v : c(b);
    }
  );
}
function I1(t) {
  return new L1(t);
}
class L1 {
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
      var a = /* @__PURE__ */ Md(s, !1, !1);
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
          return R(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? m1 : Dl)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && f(), this.#e = o.$$events;
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
      lh(this.#t);
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
let fh;
typeof HTMLElement == "function" && (fh = class extends HTMLElement {
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
          r !== "default" && (i.name = r), N(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = H1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Bi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = I1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Zr(() => {
        Wr(() => {
          this.$$r = !0;
          for (const r of Ui(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Bi(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Bi(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
function Bi(t, e, n, r) {
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
function H1(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function se(t, e, n, r, o, i) {
  let s = class extends fh {
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
      set(l) {
        l = Bi(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Yn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
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
var z1 = { value: () => {
} };
function js() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Fi(n);
}
function Fi(t) {
  this._ = t;
}
function V1(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Fi.prototype = js.prototype = {
  constructor: Fi,
  on: function(t, e) {
    var n = this._, r = V1(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = B1(n[o], t.name))) return o;
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
    return new Fi(t);
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
function B1(t, e) {
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
var Ma = "http://www.w3.org/1999/xhtml";
const Zu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ma,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zs(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Zu.hasOwnProperty(e) ? { space: Zu[e], local: t } : t;
}
function F1(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ma && e.documentElement.namespaceURI === Ma ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function R1(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function gh(t) {
  var e = Zs(t);
  return (e.local ? R1 : F1)(e);
}
function K1() {
}
function Il(t) {
  return t == null ? K1 : function() {
    return this.querySelector(t);
  };
}
function j1(t) {
  typeof t != "function" && (t = Il(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Gt(r, this._parents);
}
function Z1(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function W1() {
  return [];
}
function vh(t) {
  return t == null ? W1 : function() {
    return this.querySelectorAll(t);
  };
}
function q1(t) {
  return function() {
    return Z1(t.apply(this, arguments));
  };
}
function Y1(t) {
  typeof t == "function" ? t = q1(t) : t = vh(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new Gt(r, o);
}
function mh(t) {
  return function() {
    return this.matches(t);
  };
}
function yh(t) {
  return function(e) {
    return e.matches(t);
  };
}
var X1 = Array.prototype.find;
function U1(t) {
  return function() {
    return X1.call(this.children, t);
  };
}
function G1() {
  return this.firstElementChild;
}
function J1(t) {
  return this.select(t == null ? G1 : U1(typeof t == "function" ? t : yh(t)));
}
var Q1 = Array.prototype.filter;
function em() {
  return Array.from(this.children);
}
function tm(t) {
  return function() {
    return Q1.call(this.children, t);
  };
}
function nm(t) {
  return this.selectAll(t == null ? em : tm(typeof t == "function" ? t : yh(t)));
}
function rm(t) {
  typeof t != "function" && (t = mh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new Gt(r, this._parents);
}
function wh(t) {
  return new Array(t.length);
}
function om() {
  return new Gt(this._enter || this._groups.map(wh), this._parents);
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
function im(t) {
  return function() {
    return t;
  };
}
function sm(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, u = i.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new os(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function am(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, p = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (p[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new os(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(p[a]) === l && (o[a] = l);
}
function lm(t) {
  return t.__data__;
}
function um(t, e) {
  if (!arguments.length) return Array.from(this, lm);
  var n = e ? am : sm, r = this._parents, o = this._groups;
  typeof t != "function" && (t = im(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], p = h.length, v = cm(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(p);
    n(d, h, y, w, b, v, e);
    for (var C = 0, E = 0, k, x; C < m; ++C)
      if (k = y[C]) {
        for (C >= E && (E = C + 1); !(x = w[E]) && ++E < m; ) ;
        k._next = x || null;
      }
  }
  return s = new Gt(s, r), s._enter = a, s._exit = l, s;
}
function cm(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function dm() {
  return new Gt(this._exit || this._groups.map(wh), this._parents);
}
function hm(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function pm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, p = a[l] = new Array(h), v, m = 0; m < h; ++m)
      (v = u[m] || d[m]) && (p[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Gt(a, this._parents);
}
function fm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function gm(t) {
  t || (t = vm);
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
function vm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function mm() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ym() {
  return Array.from(this);
}
function wm() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function bm() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function xm() {
  return !this.node();
}
function Cm(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function km(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $m(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Sm(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function _m(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Em(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Pm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Om(t, e) {
  var n = Zs(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? $m : km : typeof e == "function" ? n.local ? Pm : Em : n.local ? _m : Sm)(n, e));
}
function bh(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Nm(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Tm(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Dm(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Am(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Nm : typeof e == "function" ? Dm : Tm)(t, e, n ?? "")) : lo(this.node(), t);
}
function lo(t, e) {
  return t.style.getPropertyValue(e) || bh(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Mm(t) {
  return function() {
    delete this[t];
  };
}
function Im(t, e) {
  return function() {
    this[t] = e;
  };
}
function Lm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Hm(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Mm : typeof e == "function" ? Lm : Im)(t, e)) : this.node()[t];
}
function xh(t) {
  return t.trim().split(/^|\s+/);
}
function Ll(t) {
  return t.classList || new Ch(t);
}
function Ch(t) {
  this._node = t, this._names = xh(t.getAttribute("class") || "");
}
Ch.prototype = {
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
function kh(t, e) {
  for (var n = Ll(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function $h(t, e) {
  for (var n = Ll(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function zm(t) {
  return function() {
    kh(this, t);
  };
}
function Vm(t) {
  return function() {
    $h(this, t);
  };
}
function Bm(t, e) {
  return function() {
    (e.apply(this, arguments) ? kh : $h)(this, t);
  };
}
function Fm(t, e) {
  var n = xh(t + "");
  if (arguments.length < 2) {
    for (var r = Ll(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Bm : e ? zm : Vm)(n, e));
}
function Rm() {
  this.textContent = "";
}
function Km(t) {
  return function() {
    this.textContent = t;
  };
}
function jm(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Zm(t) {
  return arguments.length ? this.each(t == null ? Rm : (typeof t == "function" ? jm : Km)(t)) : this.node().textContent;
}
function Wm() {
  this.innerHTML = "";
}
function qm(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ym(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Xm(t) {
  return arguments.length ? this.each(t == null ? Wm : (typeof t == "function" ? Ym : qm)(t)) : this.node().innerHTML;
}
function Um() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Gm() {
  return this.each(Um);
}
function Jm() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qm() {
  return this.each(Jm);
}
function e0(t) {
  var e = typeof t == "function" ? t : gh(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function t0() {
  return null;
}
function n0(t, e) {
  var n = typeof t == "function" ? t : gh(t), r = e == null ? t0 : typeof e == "function" ? e : Il(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function r0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function o0() {
  return this.each(r0);
}
function i0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function s0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function a0(t) {
  return this.select(t ? s0 : i0);
}
function l0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function u0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function c0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function d0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function h0(t, e, n) {
  return function() {
    var r = this.__on, o, i = u0(e);
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
function p0(t, e, n) {
  var r = c0(t + ""), o, i = r.length, s;
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
  for (a = e ? h0 : d0, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function Sh(t, e, n) {
  var r = bh(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function f0(t, e) {
  return function() {
    return Sh(this, t, e);
  };
}
function g0(t, e) {
  return function() {
    return Sh(this, t, e.apply(this, arguments));
  };
}
function v0(t, e) {
  return this.each((typeof e == "function" ? g0 : f0)(t, e));
}
function* m0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var _h = [null];
function Gt(t, e) {
  this._groups = t, this._parents = e;
}
function ui() {
  return new Gt([[document.documentElement]], _h);
}
function y0() {
  return this;
}
Gt.prototype = ui.prototype = {
  constructor: Gt,
  select: j1,
  selectAll: Y1,
  selectChild: J1,
  selectChildren: nm,
  filter: rm,
  data: um,
  enter: om,
  exit: dm,
  join: hm,
  merge: pm,
  selection: y0,
  order: fm,
  sort: gm,
  call: mm,
  nodes: ym,
  node: wm,
  size: bm,
  empty: xm,
  each: Cm,
  attr: Om,
  style: Am,
  property: Hm,
  classed: Fm,
  text: Zm,
  html: Xm,
  raise: Gm,
  lower: Qm,
  append: e0,
  insert: n0,
  remove: o0,
  clone: a0,
  datum: l0,
  on: p0,
  dispatch: v0,
  [Symbol.iterator]: m0
};
function tn(t) {
  return typeof t == "string" ? new Gt([[document.querySelector(t)]], [document.documentElement]) : new Gt([[t]], _h);
}
function w0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function un(t, e) {
  if (t = w0(t), e === void 0 && (e = t.currentTarget), e) {
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
const b0 = { passive: !1 }, jo = { capture: !0, passive: !1 };
function da(t) {
  t.stopImmediatePropagation();
}
function to(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Eh(t) {
  var e = t.document.documentElement, n = tn(t).on("dragstart.drag", to, jo);
  "onselectstart" in e ? n.on("selectstart.drag", to, jo) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Ph(t, e) {
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
function x0(t) {
  return !t.ctrlKey && !t.button;
}
function C0() {
  return this.parentNode;
}
function k0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function $0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function S0() {
  var t = x0, e = C0, n = k0, r = $0, o = {}, i = js("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function p(k) {
    k.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, b0).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(k, x) {
    if (!(d || !t.call(this, k, x))) {
      var O = E(this, e.call(this, k, x), k, x, "mouse");
      O && (tn(k.view).on("mousemove.drag", m, jo).on("mouseup.drag", y, jo), Eh(k.view), da(k), u = !1, a = k.clientX, l = k.clientY, O("start", k));
    }
  }
  function m(k) {
    if (to(k), !u) {
      var x = k.clientX - a, O = k.clientY - l;
      u = x * x + O * O > h;
    }
    o.mouse("drag", k);
  }
  function y(k) {
    tn(k.view).on("mousemove.drag mouseup.drag", null), Ph(k.view, u), to(k), o.mouse("end", k);
  }
  function w(k, x) {
    if (t.call(this, k, x)) {
      var O = k.changedTouches, L = e.call(this, k, x), j = O.length, B, T;
      for (B = 0; B < j; ++B)
        (T = E(this, L, k, x, O[B].identifier, O[B])) && (da(k), T("start", k, O[B]));
    }
  }
  function b(k) {
    var x = k.changedTouches, O = x.length, L, j;
    for (L = 0; L < O; ++L)
      (j = o[x[L].identifier]) && (to(k), j("drag", k, x[L]));
  }
  function C(k) {
    var x = k.changedTouches, O = x.length, L, j;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), L = 0; L < O; ++L)
      (j = o[x[L].identifier]) && (da(k), j("end", k, x[L]));
  }
  function E(k, x, O, L, j, B) {
    var T = i.copy(), _ = un(B || O, x), S, H, P;
    if ((P = n.call(k, new Ia("beforestart", {
      sourceEvent: O,
      target: p,
      identifier: j,
      active: s,
      x: _[0],
      y: _[1],
      dx: 0,
      dy: 0,
      dispatch: T
    }), L)) != null)
      return S = P.x - _[0] || 0, H = P.y - _[1] || 0, function D(A, V, W) {
        var U = _, M;
        switch (A) {
          case "start":
            o[j] = D, M = s++;
            break;
          case "end":
            delete o[j], --s;
          // falls through
          case "drag":
            _ = un(W || V, x), M = s;
            break;
        }
        T.call(
          A,
          k,
          new Ia(A, {
            sourceEvent: V,
            subject: P,
            target: p,
            identifier: j,
            active: M,
            x: _[0] + S,
            y: _[1] + H,
            dx: _[0] - U[0],
            dy: _[1] - U[1],
            dispatch: T
          }),
          L
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
function Hl(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Oh(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function ci() {
}
var Zo = 0.7, is = 1 / Zo, no = "\\s*([+-]?\\d+)\\s*", Wo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Dn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _0 = /^#([0-9a-f]{3,8})$/, E0 = new RegExp(`^rgb\\(${no},${no},${no}\\)$`), P0 = new RegExp(`^rgb\\(${Dn},${Dn},${Dn}\\)$`), O0 = new RegExp(`^rgba\\(${no},${no},${no},${Wo}\\)$`), N0 = new RegExp(`^rgba\\(${Dn},${Dn},${Dn},${Wo}\\)$`), T0 = new RegExp(`^hsl\\(${Wo},${Dn},${Dn}\\)$`), D0 = new RegExp(`^hsla\\(${Wo},${Dn},${Dn},${Wo}\\)$`), Wu = {
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
Hl(ci, Vr, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: qu,
  // Deprecated! Use color.formatHex.
  formatHex: qu,
  formatHex8: A0,
  formatHsl: M0,
  formatRgb: Yu,
  toString: Yu
});
function qu() {
  return this.rgb().formatHex();
}
function A0() {
  return this.rgb().formatHex8();
}
function M0() {
  return Nh(this).formatHsl();
}
function Yu() {
  return this.rgb().formatRgb();
}
function Vr(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = _0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Xu(e) : n === 3 ? new Ft(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ei(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ei(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = E0.exec(t)) ? new Ft(e[1], e[2], e[3], 1) : (e = P0.exec(t)) ? new Ft(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = O0.exec(t)) ? Ei(e[1], e[2], e[3], e[4]) : (e = N0.exec(t)) ? Ei(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = T0.exec(t)) ? Ju(e[1], e[2] / 100, e[3] / 100, 1) : (e = D0.exec(t)) ? Ju(e[1], e[2] / 100, e[3] / 100, e[4]) : Wu.hasOwnProperty(t) ? Xu(Wu[t]) : t === "transparent" ? new Ft(NaN, NaN, NaN, 0) : null;
}
function Xu(t) {
  return new Ft(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ei(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Ft(t, e, n, r);
}
function I0(t) {
  return t instanceof ci || (t = Vr(t)), t ? (t = t.rgb(), new Ft(t.r, t.g, t.b, t.opacity)) : new Ft();
}
function La(t, e, n, r) {
  return arguments.length === 1 ? I0(t) : new Ft(t, e, n, r ?? 1);
}
function Ft(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Hl(Ft, La, Oh(ci, {
  brighter(t) {
    return t = t == null ? is : Math.pow(is, t), new Ft(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zo : Math.pow(Zo, t), new Ft(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ft(Mr(this.r), Mr(this.g), Mr(this.b), ss(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Uu,
  // Deprecated! Use color.formatHex.
  formatHex: Uu,
  formatHex8: L0,
  formatRgb: Gu,
  toString: Gu
}));
function Uu() {
  return `#${Nr(this.r)}${Nr(this.g)}${Nr(this.b)}`;
}
function L0() {
  return `#${Nr(this.r)}${Nr(this.g)}${Nr(this.b)}${Nr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gu() {
  const t = ss(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Mr(this.r)}, ${Mr(this.g)}, ${Mr(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ss(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Mr(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Nr(t) {
  return t = Mr(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ju(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new cn(t, e, n, r);
}
function Nh(t) {
  if (t instanceof cn) return new cn(t.h, t.s, t.l, t.opacity);
  if (t instanceof ci || (t = Vr(t)), !t) return new cn();
  if (t instanceof cn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new cn(s, a, l, t.opacity);
}
function H0(t, e, n, r) {
  return arguments.length === 1 ? Nh(t) : new cn(t, e, n, r ?? 1);
}
function cn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Hl(cn, H0, Oh(ci, {
  brighter(t) {
    return t = t == null ? is : Math.pow(is, t), new cn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zo : Math.pow(Zo, t), new cn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new Ft(
      ha(t >= 240 ? t - 240 : t + 120, o, r),
      ha(t, o, r),
      ha(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new cn(Qu(this.h), Pi(this.s), Pi(this.l), ss(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ss(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Qu(this.h)}, ${Pi(this.s) * 100}%, ${Pi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Qu(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Pi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ha(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const zl = (t) => () => t;
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
function B0(t) {
  return (t = +t) == 1 ? Th : function(e, n) {
    return n - e ? V0(e, n, t) : zl(isNaN(e) ? n : e);
  };
}
function Th(t, e) {
  var n = e - t;
  return n ? z0(t, n) : zl(isNaN(t) ? e : t);
}
const as = function t(e) {
  var n = B0(e);
  function r(o, i) {
    var s = n((o = La(o)).r, (i = La(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Th(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function F0(t, e) {
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
  for (s = 0; s < r; ++s) o[s] = zo(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function j0(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Sn(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Z0(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = zo(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Ha = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pa = new RegExp(Ha.source, "g");
function W0(t) {
  return function() {
    return t;
  };
}
function q0(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Dh(t, e) {
  var n = Ha.lastIndex = pa.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = Ha.exec(t)) && (o = pa.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Sn(r, o) })), n = pa.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? q0(l[0].x) : W0(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function zo(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? zl(e) : (n === "number" ? Sn : n === "string" ? (r = Vr(e)) ? (e = r, as) : Dh : e instanceof Vr ? as : e instanceof Date ? j0 : R0(e) ? F0 : Array.isArray(e) ? K0 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Z0 : Sn)(t, e);
}
var ec = 180 / Math.PI, Ah = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Mh(t, e, n, r, o, i) {
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
function Y0(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ah : Mh(e.a, e.b, e.c, e.d, e.e, e.f);
}
function X0(t) {
  return t == null || (Oi || (Oi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Oi.setAttribute("transform", t), !(t = Oi.transform.baseVal.consolidate())) ? Ah : (t = t.matrix, Mh(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ih(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: Sn(u, h) }, { i: y - 2, x: Sn(d, p) });
    } else (h || p) && v.push("translate(" + h + e + p + n);
  }
  function s(u, d, h, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: Sn(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, p) {
    u !== d ? p.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: Sn(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, p, v, m) {
    if (u !== h || d !== p) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: Sn(u, h) }, { i: y - 2, x: Sn(d, p) });
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
var U0 = Ih(Y0, "px, ", "px)", "deg)"), G0 = Ih(X0, ", ", ")", ")"), J0 = 1e-12;
function tc(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Q0(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function ey(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Ri = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], p = s[2], v = d - a, m = h - l, y = v * v + m * m, w, b;
    if (y < J0)
      b = Math.log(p / u) / e, w = function(L) {
        return [
          a + L * v,
          l + L * m,
          u * Math.exp(e * L * b)
        ];
      };
    else {
      var C = Math.sqrt(y), E = (p * p - u * u + r * y) / (2 * u * n * C), k = (p * p - u * u - r * y) / (2 * p * n * C), x = Math.log(Math.sqrt(E * E + 1) - E), O = Math.log(Math.sqrt(k * k + 1) - k);
      b = (O - x) / e, w = function(L) {
        var j = L * b, B = tc(x), T = u / (n * C) * (B * ey(e * j + x) - Q0(x));
        return [
          a + T * v,
          l + T * m,
          u * B / tc(e * j + x)
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
var uo = 0, To = 0, _o = 0, Lh = 1e3, ls, Do, us = 0, Br = 0, Ws = 0, qo = typeof performance == "object" && performance.now ? performance : Date, Hh = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Vl() {
  return Br || (Hh(ty), Br = qo.now() + Ws);
}
function ty() {
  Br = 0;
}
function cs() {
  this._call = this._time = this._next = null;
}
cs.prototype = zh.prototype = {
  constructor: cs,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Vl() : +n) + (e == null ? 0 : +e), !this._next && Do !== this && (Do ? Do._next = this : ls = this, Do = this), this._call = t, this._time = n, za();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, za());
  }
};
function zh(t, e, n) {
  var r = new cs();
  return r.restart(t, e, n), r;
}
function ny() {
  Vl(), ++uo;
  for (var t = ls, e; t; )
    (e = Br - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --uo;
}
function nc() {
  Br = (us = qo.now()) + Ws, uo = To = 0;
  try {
    ny();
  } finally {
    uo = 0, oy(), Br = 0;
  }
}
function ry() {
  var t = qo.now(), e = t - us;
  e > Lh && (Ws -= e, us = t);
}
function oy() {
  for (var t, e = ls, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ls = n);
  Do = t, za(r);
}
function za(t) {
  if (!uo) {
    To && (To = clearTimeout(To));
    var e = t - Br;
    e > 24 ? (t < 1 / 0 && (To = setTimeout(nc, t - qo.now() - Ws)), _o && (_o = clearInterval(_o))) : (_o || (us = qo.now(), _o = setInterval(ry, Lh)), uo = 1, Hh(nc));
  }
}
function rc(t, e, n) {
  var r = new cs();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var iy = js("start", "end", "cancel", "interrupt"), sy = [], Vh = 0, oc = 1, Va = 2, Ki = 3, ic = 4, Ba = 5, ji = 6;
function qs(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  ay(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: iy,
    tween: sy,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Vh
  });
}
function Bl(t, e) {
  var n = xn(t, e);
  if (n.state > Vh) throw new Error("too late; already scheduled");
  return n;
}
function Vn(t, e) {
  var n = xn(t, e);
  if (n.state > Ki) throw new Error("too late; already running");
  return n;
}
function xn(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function ay(t, e, n) {
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
        v.state === ic ? (v.state = ji, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = ji, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (rc(function() {
      n.state === Ki && (n.state = ic, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Va, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Va) {
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
    n.state = ji, n.timer.stop(), delete r[e];
    for (var u in r) return;
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
      o = r.state > Va && r.state < Ba, r.state = ji, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function ly(t) {
  return this.each(function() {
    Zi(this, t);
  });
}
function uy(t, e) {
  var n, r;
  return function() {
    var o = Vn(this, t), i = o.tween;
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
function cy(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Vn(this, t), s = i.tween;
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
function dy(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = xn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? uy : cy)(n, t, e));
}
function Fl(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = Vn(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return xn(o, r).value[e];
  };
}
function Bh(t, e) {
  var n;
  return (typeof e == "number" ? Sn : e instanceof Vr ? as : (n = Vr(e)) ? (e = n, as) : Dh)(t, e);
}
function hy(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function py(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function fy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function gy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function vy(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function my(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function yy(t, e) {
  var n = Zs(t), r = n === "transform" ? G0 : Bh;
  return this.attrTween(t, typeof e == "function" ? (n.local ? my : vy)(n, r, Fl(this, "attr." + t, e)) : e == null ? (n.local ? py : hy)(n) : (n.local ? gy : fy)(n, r, e));
}
function wy(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function by(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function xy(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && by(t, i)), n;
  }
  return o._value = e, o;
}
function Cy(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && wy(t, i)), n;
  }
  return o._value = e, o;
}
function ky(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Zs(t);
  return this.tween(n, (r.local ? xy : Cy)(r, e));
}
function $y(t, e) {
  return function() {
    Bl(this, t).delay = +e.apply(this, arguments);
  };
}
function Sy(t, e) {
  return e = +e, function() {
    Bl(this, t).delay = e;
  };
}
function _y(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? $y : Sy)(e, t)) : xn(this.node(), e).delay;
}
function Ey(t, e) {
  return function() {
    Vn(this, t).duration = +e.apply(this, arguments);
  };
}
function Py(t, e) {
  return e = +e, function() {
    Vn(this, t).duration = e;
  };
}
function Oy(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ey : Py)(e, t)) : xn(this.node(), e).duration;
}
function Ny(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Vn(this, t).ease = e;
  };
}
function Ty(t) {
  var e = this._id;
  return arguments.length ? this.each(Ny(e, t)) : xn(this.node(), e).ease;
}
function Dy(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Vn(this, t).ease = n;
  };
}
function Ay(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Dy(this._id, t));
}
function My(t) {
  typeof t != "function" && (t = mh(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new tr(r, this._parents, this._name, this._id);
}
function Iy(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), p, v = 0; v < d; ++v)
      (p = l[v] || u[v]) && (h[v] = p);
  for (; a < r; ++a)
    s[a] = e[a];
  return new tr(s, this._parents, this._name, this._id);
}
function Ly(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Hy(t, e, n) {
  var r, o, i = Ly(e) ? Bl : Vn;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function zy(t, e) {
  var n = this._id;
  return arguments.length < 2 ? xn(this.node(), n).on.on(t) : this.each(Hy(n, t, e));
}
function Vy(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function By() {
  return this.on("end.remove", Vy(this._id));
}
function Fy(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Il(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, p = 0; p < l; ++p)
      (d = a[p]) && (h = t.call(d, d.__data__, p, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[p] = h, qs(u[p], e, n, p, u, xn(d, n)));
  return new tr(i, this._parents, e, n);
}
function Ry(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = vh(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var p = t.call(d, d.__data__, h, l), v, m = xn(d, n), y = 0, w = p.length; y < w; ++y)
          (v = p[y]) && qs(v, e, n, y, p, m);
        i.push(p), s.push(d);
      }
  return new tr(i, s, e, n);
}
var Ky = ui.prototype.constructor;
function jy() {
  return new Ky(this._groups, this._parents);
}
function Zy(t, e) {
  var n, r, o;
  return function() {
    var i = lo(this, t), s = (this.style.removeProperty(t), lo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function Fh(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Wy(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = lo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function qy(t, e, n) {
  var r, o, i;
  return function() {
    var s = lo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), lo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function Yy(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = Vn(this, t), u = l.on, d = l.value[i] == null ? a || (a = Fh(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Xy(t, e, n) {
  var r = (t += "") == "transform" ? U0 : Bh;
  return e == null ? this.styleTween(t, Zy(t, r)).on("end.style." + t, Fh(t)) : typeof e == "function" ? this.styleTween(t, qy(t, r, Fl(this, "style." + t, e))).each(Yy(this._id, t)) : this.styleTween(t, Wy(t, r, e), n).on("end.style." + t, null);
}
function Uy(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Gy(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && Uy(t, s, n)), r;
  }
  return i._value = e, i;
}
function Jy(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Gy(t, e, n ?? ""));
}
function Qy(t) {
  return function() {
    this.textContent = t;
  };
}
function ew(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function tw(t) {
  return this.tween("text", typeof t == "function" ? ew(Fl(this, "text", t)) : Qy(t == null ? "" : t + ""));
}
function nw(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function rw(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && nw(o)), e;
  }
  return r._value = t, r;
}
function ow(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, rw(t));
}
function iw() {
  for (var t = this._name, e = this._id, n = Rh(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = xn(l, e);
        qs(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new tr(r, this._parents, t, n);
}
function sw() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Vn(this, r), d = u.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), u.on = e;
    }), o === 0 && i();
  });
}
var aw = 0;
function tr(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Rh() {
  return ++aw;
}
var Fn = ui.prototype;
tr.prototype = {
  constructor: tr,
  select: Fy,
  selectAll: Ry,
  selectChild: Fn.selectChild,
  selectChildren: Fn.selectChildren,
  filter: My,
  merge: Iy,
  selection: jy,
  transition: iw,
  call: Fn.call,
  nodes: Fn.nodes,
  node: Fn.node,
  size: Fn.size,
  empty: Fn.empty,
  each: Fn.each,
  on: zy,
  attr: yy,
  attrTween: ky,
  style: Xy,
  styleTween: Jy,
  text: tw,
  textTween: ow,
  remove: By,
  tween: dy,
  delay: _y,
  duration: Oy,
  ease: Ty,
  easeVarying: Ay,
  end: sw,
  [Symbol.iterator]: Fn[Symbol.iterator]
};
function lw(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var uw = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: lw
};
function cw(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function dw(t) {
  var e, n;
  t instanceof tr ? (e = t._id, t = t._name) : (e = Rh(), (n = uw).time = Vl(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && qs(l, t, e, u, s, n || cw(l, e));
  return new tr(r, this._parents, t, e);
}
ui.prototype.interrupt = ly;
ui.prototype.transition = dw;
const Ni = (t) => () => t;
function hw(t, {
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
var Ys = new jn(1, 0, 0);
Kh.prototype = jn.prototype;
function Kh(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return Ys;
  return t.__zoom;
}
function fa(t) {
  t.stopImmediatePropagation();
}
function Eo(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function pw(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function fw() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function sc() {
  return this.__zoom || Ys;
}
function gw(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function vw() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function mw(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function jh() {
  var t = pw, e = fw, n = mw, r = gw, o = vw, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Ri, u = js("start", "zoom", "end"), d, h, p, v = 500, m = 150, y = 0, w = 10;
  function b(P) {
    P.property("__zoom", sc).on("wheel.zoom", j, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", T).filter(o).on("touchstart.zoom", _).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(P, D, A, V) {
    var W = P.selection ? P.selection() : P;
    W.property("__zoom", sc), P !== W ? x(P, D, A, V) : W.interrupt().each(function() {
      O(this, arguments).event(V).start().zoom(null, typeof D == "function" ? D.apply(this, arguments) : D).end();
    });
  }, b.scaleBy = function(P, D, A, V) {
    b.scaleTo(P, function() {
      var W = this.__zoom.k, U = typeof D == "function" ? D.apply(this, arguments) : D;
      return W * U;
    }, A, V);
  }, b.scaleTo = function(P, D, A, V) {
    b.transform(P, function() {
      var W = e.apply(this, arguments), U = this.__zoom, M = A == null ? k(W) : typeof A == "function" ? A.apply(this, arguments) : A, X = U.invert(M), Y = typeof D == "function" ? D.apply(this, arguments) : D;
      return n(E(C(U, Y), M, X), W, s);
    }, A, V);
  }, b.translateBy = function(P, D, A, V) {
    b.transform(P, function() {
      return n(this.__zoom.translate(
        typeof D == "function" ? D.apply(this, arguments) : D,
        typeof A == "function" ? A.apply(this, arguments) : A
      ), e.apply(this, arguments), s);
    }, null, V);
  }, b.translateTo = function(P, D, A, V, W) {
    b.transform(P, function() {
      var U = e.apply(this, arguments), M = this.__zoom, X = V == null ? k(U) : typeof V == "function" ? V.apply(this, arguments) : V;
      return n(Ys.translate(X[0], X[1]).scale(M.k).translate(
        typeof D == "function" ? -D.apply(this, arguments) : -D,
        typeof A == "function" ? -A.apply(this, arguments) : -A
      ), U, s);
    }, V, W);
  };
  function C(P, D) {
    return D = Math.max(i[0], Math.min(i[1], D)), D === P.k ? P : new jn(D, P.x, P.y);
  }
  function E(P, D, A) {
    var V = D[0] - A[0] * P.k, W = D[1] - A[1] * P.k;
    return V === P.x && W === P.y ? P : new jn(P.k, V, W);
  }
  function k(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function x(P, D, A, V) {
    P.on("start.zoom", function() {
      O(this, arguments).event(V).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(V).end();
    }).tween("zoom", function() {
      var W = this, U = arguments, M = O(W, U).event(V), X = e.apply(W, U), Y = A == null ? k(X) : typeof A == "function" ? A.apply(W, U) : A, F = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), q = W.__zoom, Q = typeof D == "function" ? D.apply(W, U) : D, ee = l(q.invert(Y).concat(F / q.k), Q.invert(Y).concat(F / Q.k));
      return function(oe) {
        if (oe === 1) oe = Q;
        else {
          var I = ee(oe), te = F / I[2];
          oe = new jn(te, Y[0] - I[0] * te, Y[1] - I[1] * te);
        }
        M.zoom(null, oe);
      };
    });
  }
  function O(P, D, A) {
    return !A && P.__zooming || new L(P, D);
  }
  function L(P, D) {
    this.that = P, this.args = D, this.active = 0, this.sourceEvent = null, this.extent = e.apply(P, D), this.taps = 0;
  }
  L.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, D) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = D.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = D.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = D.invert(this.touch1[0])), this.that.__zoom = D, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var D = tn(this.that).datum();
      u.call(
        P,
        this.that,
        new hw(P, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        D
      );
    }
  };
  function j(P, ...D) {
    if (!t.apply(this, arguments)) return;
    var A = O(this, D).event(P), V = this.__zoom, W = Math.max(i[0], Math.min(i[1], V.k * Math.pow(2, r.apply(this, arguments)))), U = un(P);
    if (A.wheel)
      (A.mouse[0][0] !== U[0] || A.mouse[0][1] !== U[1]) && (A.mouse[1] = V.invert(A.mouse[0] = U)), clearTimeout(A.wheel);
    else {
      if (V.k === W) return;
      A.mouse = [U, V.invert(U)], Zi(this), A.start();
    }
    Eo(P), A.wheel = setTimeout(M, m), A.zoom("mouse", n(E(C(V, W), A.mouse[0], A.mouse[1]), A.extent, s));
    function M() {
      A.wheel = null, A.end();
    }
  }
  function B(P, ...D) {
    if (p || !t.apply(this, arguments)) return;
    var A = P.currentTarget, V = O(this, D, !0).event(P), W = tn(P.view).on("mousemove.zoom", Y, !0).on("mouseup.zoom", F, !0), U = un(P, A), M = P.clientX, X = P.clientY;
    Eh(P.view), fa(P), V.mouse = [U, this.__zoom.invert(U)], Zi(this), V.start();
    function Y(q) {
      if (Eo(q), !V.moved) {
        var Q = q.clientX - M, ee = q.clientY - X;
        V.moved = Q * Q + ee * ee > y;
      }
      V.event(q).zoom("mouse", n(E(V.that.__zoom, V.mouse[0] = un(q, A), V.mouse[1]), V.extent, s));
    }
    function F(q) {
      W.on("mousemove.zoom mouseup.zoom", null), Ph(q.view, V.moved), Eo(q), V.event(q).end();
    }
  }
  function T(P, ...D) {
    if (t.apply(this, arguments)) {
      var A = this.__zoom, V = un(P.changedTouches ? P.changedTouches[0] : P, this), W = A.invert(V), U = A.k * (P.shiftKey ? 0.5 : 2), M = n(E(C(A, U), V, W), e.apply(this, D), s);
      Eo(P), a > 0 ? tn(this).transition().duration(a).call(x, M, V, P) : tn(this).call(b.transform, M, V, P);
    }
  }
  function _(P, ...D) {
    if (t.apply(this, arguments)) {
      var A = P.touches, V = A.length, W = O(this, D, P.changedTouches.length === V).event(P), U, M, X, Y;
      for (fa(P), M = 0; M < V; ++M)
        X = A[M], Y = un(X, this), Y = [Y, this.__zoom.invert(Y), X.identifier], W.touch0 ? !W.touch1 && W.touch0[2] !== Y[2] && (W.touch1 = Y, W.taps = 0) : (W.touch0 = Y, U = !0, W.taps = 1 + !!d);
      d && (d = clearTimeout(d)), U && (W.taps < 2 && (h = Y[0], d = setTimeout(function() {
        d = null;
      }, v)), Zi(this), W.start());
    }
  }
  function S(P, ...D) {
    if (this.__zooming) {
      var A = O(this, D).event(P), V = P.changedTouches, W = V.length, U, M, X, Y;
      for (Eo(P), U = 0; U < W; ++U)
        M = V[U], X = un(M, this), A.touch0 && A.touch0[2] === M.identifier ? A.touch0[0] = X : A.touch1 && A.touch1[2] === M.identifier && (A.touch1[0] = X);
      if (M = A.that.__zoom, A.touch1) {
        var F = A.touch0[0], q = A.touch0[1], Q = A.touch1[0], ee = A.touch1[1], oe = (oe = Q[0] - F[0]) * oe + (oe = Q[1] - F[1]) * oe, I = (I = ee[0] - q[0]) * I + (I = ee[1] - q[1]) * I;
        M = C(M, Math.sqrt(oe / I)), X = [(F[0] + Q[0]) / 2, (F[1] + Q[1]) / 2], Y = [(q[0] + ee[0]) / 2, (q[1] + ee[1]) / 2];
      } else if (A.touch0) X = A.touch0[0], Y = A.touch0[1];
      else return;
      A.zoom("touch", n(E(M, X, Y), A.extent, s));
    }
  }
  function H(P, ...D) {
    if (this.__zooming) {
      var A = O(this, D).event(P), V = P.changedTouches, W = V.length, U, M;
      for (fa(P), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, v), U = 0; U < W; ++U)
        M = V[U], A.touch0 && A.touch0[2] === M.identifier ? delete A.touch0 : A.touch1 && A.touch1[2] === M.identifier && delete A.touch1;
      if (A.touch1 && !A.touch0 && (A.touch0 = A.touch1, delete A.touch1), A.touch0) A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      else if (A.end(), A.taps === 2 && (M = un(M, this), Math.hypot(h[0] - M[0], h[1] - M[1]) < w)) {
        var X = tn(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
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
const Yo = {
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
}, Fa = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Zh = ["Enter", " ", "Escape"], yw = {
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
var Ir;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(Ir || (Ir = {}));
var ds;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(ds || (ds = {}));
const Ra = {
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
var Kn;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(Kn || (Kn = {}));
var Xo;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(Xo || (Xo = {}));
var _e;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(_e || (_e = {}));
const ac = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function ww(t, e) {
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
function bw(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const Wh = (t) => "id" in t && "source" in t && "target" in t, xw = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), Rl = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), di = (t, e = [0, 0]) => {
  const { width: n, height: r } = Sr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, Cw = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : Rl(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? hs(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Xs(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Us(n);
}, hi = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = Xs(n, hs(o)), r = !0);
  }), r ? Us(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Kl = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
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
}, kw = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function $w(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Sw({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = $w(t, s), l = hi(a), u = jl(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function qh({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Yo.error005());
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
  const p = fo(h) ? Fr(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Yo.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function _w({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const p = i.has(h.id), v = !p && h.parentId && s.find((m) => m.id === h.parentId);
    (p || v) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), u = kw(s, l);
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
const ho = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), Fr = (t = { x: 0, y: 0 }, e, n) => ({
  x: ho(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: ho(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function Yh(t, e, n) {
  const { width: r, height: o } = Sr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Fr(t, [
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
}), Ka = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), Us = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), po = (t, e = [0, 0]) => {
  const { x: n, y: r } = Rl(t) ? t.internals.positionAbsolute : di(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, hs = (t, e = [0, 0]) => {
  const { x: n, y: r } = Rl(t) ? t.internals.positionAbsolute : di(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, Uh = (t, e) => Us(Xs(Ka(t), Ka(e))), Uo = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, cc = (t) => Zn(t.width) && Zn(t.height) && Zn(t.x) && Zn(t.y), Zn = (t) => !isNaN(t) && isFinite(t), Ew = (t, e) => {
}, pi = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), fi = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? pi(a, s) : a;
}, ps = ({ x: t, y: e }, [n, r, o]) => ({
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
function Pw(t, e, n) {
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
function Ow(t, e, n, r, o, i) {
  const { x: s, y: a } = ps(t, [e, n, r]), { x: l, y: u } = ps({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const jl = (t, e, n, r, o, i) => {
  const s = Pw(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = ho(u, r, o), h = t.x + t.width / 2, p = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - p * d, y = Ow(t, v, m, d, e, n), w = {
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
}, Tr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function fo(t) {
  return t != null && t !== "parent";
}
function Sr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function Gh(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function Nw(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function Tw(t) {
  return { ...yw, ...t || {} };
}
function ga(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = hn(t), a = fi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? pi(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Jh = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), Qh = (t) => t?.getRootNode?.() || window?.document, Dw = ["INPUT", "SELECT", "TEXTAREA"];
function ep(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : Dw.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const tp = (t) => "clientX" in t, hn = (t, e) => {
  const n = tp(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
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
      ...Jh(s)
    };
  });
};
function Aw({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function Ti(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function hc({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case _e.Left:
      return [e - Ti(e - r, i), n];
    case _e.Right:
      return [e + Ti(r - e, i), n];
    case _e.Top:
      return [e, n - Ti(n - o, i)];
    case _e.Bottom:
      return [e, n + Ti(o - n, i)];
  }
}
function np({ sourceX: t, sourceY: e, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: s = 0.25 }) {
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
  }), [h, p, v, m] = Aw({
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
function rp({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function Mw({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function Iw({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = Xs(hs(t), hs(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Uo(s, Us(i)) > 0;
}
const Lw = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, Hw = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), zw = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return Wh(t) ? n = { ...t } : n = {
    ...t,
    id: Lw(t)
  }, Hw(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function op({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = rp({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const pc = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, Vw = ({ source: t, sourcePosition: e = _e.Bottom, target: n }) => e === _e.Left || e === _e.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, fc = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function Bw({ source: t, sourcePosition: e = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i, stepPosition: s }) {
  const a = pc[e], l = pc[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Vw({
    source: u,
    sourcePosition: e,
    target: d
  }), p = h.x !== 0 ? "x" : "y", v = h[p];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , E, k] = rp({
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
    ], O = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[p] === v ? m = p === "x" ? x : O : m = p === "x" ? O : x;
  } else {
    const x = [{ x: u.x, y: d.y }], O = [{ x: d.x, y: u.y }];
    if (p === "x" ? m = a.x === v ? O : x : m = a.y === v ? x : O, e === r) {
      const _ = Math.abs(t[p] - n[p]);
      if (_ <= i) {
        const S = Math.min(i - 1, i - _);
        a[p] === v ? b[p] = (u[p] > t[p] ? -1 : 1) * S : C[p] = (d[p] > n[p] ? -1 : 1) * S;
      }
    }
    if (e !== r) {
      const _ = p === "x" ? "y" : "x", S = a[p] === l[_], H = u[_] > d[_], P = u[_] < d[_];
      (a[p] === 1 && (!S && H || S && P) || a[p] !== 1 && (!S && P || S && H)) && (m = p === "x" ? x : O);
    }
    const L = { x: u.x + b.x, y: u.y + b.y }, j = { x: d.x + C.x, y: d.y + C.y }, B = Math.max(Math.abs(L.x - m[0].x), Math.abs(j.x - m[0].x)), T = Math.max(Math.abs(L.y - m[0].y), Math.abs(j.y - m[0].y));
    B >= T ? (y = (L.x + j.x) / 2, w = m[0].y) : (y = m[0].x, w = (L.y + j.y) / 2);
  }
  return [[
    t,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + C.x, y: d.y + C.y },
    n
  ], y, w, E, k];
}
function Fw(t, e, n, r) {
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
function Zl({ sourceX: t, sourceY: e, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, p, v, m, y] = Bw({
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
    return C > 0 && C < h.length - 1 ? E = Fw(h[C - 1], b, h[C + 1], s) : E = `${C === 0 ? "M" : "L"}${b.x} ${b.y}`, w += E, w;
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
    return t.onError?.("008", Yo.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || _e.Bottom, l = s?.position || _e.Top, u = Go(e, i, a), d = Go(n, s, l);
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
function Go(t, e, n = _e.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Sr(t);
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
function jw(t, e, n, r, o) {
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
const ip = 1e3, Zw = 10, Wl = {
  nodeOrigin: [0, 0],
  nodeExtent: Fa,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Ww = {
  ...Wl,
  checkEquality: !0
};
function ql(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function qw(t, e, n) {
  const r = ql(Wl, n);
  for (const o of t.values())
    if (o.parentId)
      Yl(o, t, e, r);
    else {
      const i = di(o, r.nodeOrigin), s = fo(o.extent) ? o.extent : r.nodeExtent, a = Fr(i, s, Sr(o));
      o.internals.positionAbsolute = a;
    }
}
function Yw(t, e) {
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
  const o = ql(Ww, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? ip : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = di(u, o.nodeOrigin), p = fo(u.extent) ? u.extent : o.nodeExtent, v = Fr(h, p, Sr(u));
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
          handleBounds: Yw(u, d),
          z: sp(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Yl(d, e, n, r, i);
  }
  return s;
}
function Uw(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function Yl(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = ql(Wl, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Uw(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * Zw), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? ip : 0, { x: h, y: p, z: v } = Gw(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || p !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: p } : m,
      z: v
    }
  });
}
function sp(t, e) {
  return (Zn(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function Gw(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Sr(t), l = di(t, n), u = fo(t.extent) ? Fr(l, t.extent, a) : l;
  let d = Fr({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = Yh(d, a, e));
  const h = sp(t, o), p = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= h ? p + 1 : h
  };
}
function Jw(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? po(a), u = Uh(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Sr(a), h = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
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
    const m = Jh(p.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), b = fo(v.extent) ? v.extent : i;
      let { positionAbsolute: C } = v.internals;
      v.parentId && v.extent === "parent" ? C = Yh(C, m, e.get(v.parentId)) : b && (C = Fr(C, b, m));
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
      e.set(v.id, E), v.parentId && Yl(E, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
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
    const p = Jw(h, e, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function e2({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
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
function t2(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    yc("source", l, d, t, o, s), yc("target", l, u, t, i, a), e.set(r.id, r);
  }
}
function n2(t, e) {
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
function ap(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : ap(n, e) : !1;
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
function r2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !ap(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function o2({ dragItems: t, snapGrid: e, x: n, y: r }) {
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
function i2({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, p = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: C, handleSelector: E, domNode: k, isSelectable: x, nodeId: O, nodeClickDistance: L = 0 }) {
    p = tn(k);
    function j({ x: S, y: H }) {
      const { nodeLookup: P, nodeExtent: D, snapGrid: A, snapToGrid: V, nodeOrigin: W, onNodeDrag: U, onSelectionDrag: M, onError: X, updateNodePositions: Y } = e();
      i = { x: S, y: H };
      let F = !1;
      const q = a.size > 1, Q = q && D ? Ka(hi(a)) : null, ee = q && V ? o2({
        dragItems: a,
        snapGrid: A,
        x: S,
        y: H
      }) : null;
      for (const [oe, I] of a) {
        if (!P.has(oe))
          continue;
        let te = { x: S - I.distance.x, y: H - I.distance.y };
        V && (te = ee ? {
          x: Math.round(te.x + ee.x),
          y: Math.round(te.y + ee.y)
        } : pi(te, A));
        let fe = null;
        if (q && D && !I.extent && Q) {
          const { positionAbsolute: ue } = I.internals, ge = ue.x - Q.x + D[0][0], ye = ue.x + I.measured.width - Q.x2 + D[1][0], be = ue.y - Q.y + D[0][1], de = ue.y + I.measured.height - Q.y2 + D[1][1];
          fe = [
            [ge, be],
            [ye, de]
          ];
        }
        const { position: he, positionAbsolute: re } = qh({
          nodeId: oe,
          nextPosition: te,
          nodeLookup: P,
          nodeExtent: fe || D,
          nodeOrigin: W,
          onError: X
        });
        F = F || I.position.x !== he.x || I.position.y !== he.y, I.position = he, I.internals.positionAbsolute = re;
      }
      if (m = m || F, !!F && (Y(a, !0), y && (r || U || !O && M))) {
        const [oe, I] = va({
          nodeId: O,
          dragItems: a,
          nodeLookup: P
        });
        r?.(y, a, oe, I), U?.(y, oe, I), O || M?.(y, I);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: S, panBy: H, autoPanSpeed: P, autoPanOnNodeDrag: D } = e();
      if (!D) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [A, V] = Xh(u, d, P);
      (A !== 0 || V !== 0) && (i.x = (i.x ?? 0) - A / S[2], i.y = (i.y ?? 0) - V / S[2], await H({ x: A, y: V }) && j(i)), s = requestAnimationFrame(B);
    }
    function T(S) {
      const { nodeLookup: H, multiSelectionActive: P, nodesDraggable: D, transform: A, snapGrid: V, snapToGrid: W, selectNodesOnDrag: U, onNodeDragStart: M, onSelectionDragStart: X, unselectNodesAndEdges: Y } = e();
      h = !0, (!U || !x) && !P && O && (H.get(O)?.selected || Y()), x && U && O && t?.(O);
      const F = ga(S.sourceEvent, { transform: A, snapGrid: V, snapToGrid: W, containerBounds: d });
      if (i = F, a = r2(H, D, F, O), a.size > 0 && (n || M || !O && X)) {
        const [q, Q] = va({
          nodeId: O,
          dragItems: a,
          nodeLookup: H
        });
        n?.(S.sourceEvent, a, q, Q), M?.(S.sourceEvent, q, Q), O || X?.(S.sourceEvent, Q);
      }
    }
    const _ = S0().clickDistance(L).on("start", (S) => {
      const { domNode: H, nodeDragThreshold: P, transform: D, snapGrid: A, snapToGrid: V } = e();
      d = H?.getBoundingClientRect() || null, v = !1, m = !1, y = S.sourceEvent, P === 0 && T(S), i = ga(S.sourceEvent, { transform: D, snapGrid: A, snapToGrid: V, containerBounds: d }), u = hn(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: H, transform: P, snapGrid: D, snapToGrid: A, nodeDragThreshold: V, nodeLookup: W } = e(), U = ga(S.sourceEvent, { transform: P, snapGrid: D, snapToGrid: A, containerBounds: d });
      if (y = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      O && !W.has(O)) && (v = !0), !v) {
        if (!l && H && h && (l = !0, B()), !h) {
          const M = hn(S.sourceEvent, d), X = M.x - u.x, Y = M.y - u.y;
          Math.sqrt(X * X + Y * Y) > V && T(S);
        }
        (i.x !== U.xSnapped || i.y !== U.ySnapped) && a && h && (u = hn(S.sourceEvent, d), j(U));
      }
    }).on("end", (S) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: H, updateNodePositions: P, onNodeDragStop: D, onSelectionDragStop: A } = e();
        if (m && (P(a, !1), m = !1), o || D || !O && A) {
          const [V, W] = va({
            nodeId: O,
            dragItems: a,
            nodeLookup: H,
            dragging: !1
          });
          o?.(S.sourceEvent, a, V, W), D?.(S.sourceEvent, V, W), O || A?.(S.sourceEvent, W);
        }
      }
    }).filter((S) => {
      const H = S.target;
      return !S.button && (!C || !wc(H, `.${C}`, k)) && (!E || wc(H, E, k));
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
function s2(t, e, n) {
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
const a2 = 250;
function l2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = s2(t, n, e + a2);
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
function lp(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Go(s, l, l.position, !0) } : l;
}
function up(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function u2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const cp = () => !0;
function c2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: p, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = cp, onReconnectEnd: C, updateConnection: E, getTransform: k, getFromHandle: x, autoPanSpeed: O, dragThreshold: L = 1, handleDomNode: j }) {
  const B = Qh(t.target);
  let T = 0, _;
  const { x: S, y: H } = hn(t), P = up(i, j), D = a?.getBoundingClientRect();
  let A = !1;
  if (!D || !P)
    return;
  const V = lp(o, P, r, l, e);
  if (!V)
    return;
  let W = hn(t, D), U = !1, M = null, X = !1, Y = null;
  function F() {
    if (!d || !D)
      return;
    const [fe, he] = Xh(W, D, O);
    p({ x: fe, y: he }), T = requestAnimationFrame(F);
  }
  const q = {
    ...V,
    nodeId: o,
    type: P,
    position: V.position
  }, Q = l.get(o);
  let ee = {
    inProgress: !0,
    isValid: null,
    from: Go(Q, q, _e.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: Q,
    to: W,
    toHandle: null,
    toPosition: ac[q.position],
    toNode: null,
    pointer: W
  };
  function oe() {
    A = !0, E(ee), m?.(t, { nodeId: o, handleId: r, handleType: P });
  }
  L === 0 && oe();
  function I(fe) {
    if (!A) {
      const { x: ge, y: ye } = hn(fe), be = ge - S, de = ye - H;
      if (!(be * be + de * de > L * L))
        return;
      oe();
    }
    if (!x() || !q) {
      te(fe);
      return;
    }
    const he = k();
    W = hn(fe, D), _ = l2(fi(W, he, !1, [1, 1]), n, l, q), U || (F(), U = !0);
    const re = dp(fe, {
      handle: _,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: B,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    Y = re.handleDomNode, M = re.connection, X = u2(!!_, re.isValid);
    const ue = {
      // from stays the same
      ...ee,
      isValid: X,
      to: re.toHandle && X ? ps({ x: re.toHandle.x, y: re.toHandle.y }, he) : W,
      toHandle: re.toHandle,
      toPosition: X && re.toHandle ? re.toHandle.position : ac[q.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: W
    };
    E(ue), ee = ue;
  }
  function te(fe) {
    if (!("touches" in fe && fe.touches.length > 0)) {
      if (A) {
        (_ || Y) && M && X && y?.(M);
        const { inProgress: he, ...re } = ee, ue = {
          ...re,
          toPosition: ee.toHandle ? ee.toPosition : null
        };
        w?.(fe, ue), i && C?.(fe, ue);
      }
      v(), cancelAnimationFrame(T), U = !1, X = !1, M = null, Y = null, B.removeEventListener("mousemove", I), B.removeEventListener("mouseup", te), B.removeEventListener("touchmove", I), B.removeEventListener("touchend", te);
    }
  }
  B.addEventListener("mousemove", I), B.addEventListener("mouseup", te), B.addEventListener("touchmove", I), B.addEventListener("touchend", te);
}
function dp(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = cp, nodeLookup: d }) {
  const h = i === "target", p = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = hn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const C = up(void 0, w), E = w.getAttribute("data-nodeid"), k = w.getAttribute("data-handleid"), x = w.classList.contains("connectable"), O = w.classList.contains("connectableend");
    if (!E || !C)
      return b;
    const L = {
      source: h ? E : r,
      sourceHandle: h ? k : o,
      target: h ? r : E,
      targetHandle: h ? o : k
    };
    b.connection = L;
    const j = x && O && (n === co.Strict ? h && C === "source" || !h && C === "target" : E !== r || k !== o);
    b.isValid = j && u(L), b.toHandle = lp(E, C, k, d, n, !0);
  }
  return b;
}
const bc = {
  onPointerDown: c2,
  isValid: dp
};
function d2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = tn(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: p = !0, inversePan: v = !1 }) {
    const m = (E) => {
      if (E.sourceEvent.type !== "wheel" || !e)
        return;
      const k = n(), x = E.sourceEvent.ctrlKey && Tr() ? 10 : 1, O = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, L = k[2] * Math.pow(2, O * x);
      e.scaleTo(L);
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
      ], O = [x[0] - y[0], x[1] - y[1]];
      y = x;
      const L = r() * Math.max(k[2], Math.log(k[2])) * (v ? -1 : 1), j = {
        x: k[0] - O[0] * L,
        y: k[1] - O[1] * L
      }, B = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: j.x,
        y: j.y,
        zoom: k[2]
      }, B, a);
    }, C = jh().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", p ? m : null);
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
const Gs = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), ma = ({ x: t, y: e, zoom: n }) => Ys.translate(t, e).scale(n), Qr = (t, e) => t.target.closest(`.${e}`), hp = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), h2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, ya = (t, e = 0, n = h2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, pp = (t) => {
  const e = t.ctrlKey && Tr() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function p2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Qr(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = un(d), b = pp(d), C = h * Math.pow(2, b);
      r.scaleTo(n, C, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let v = o === Ir.Vertical ? 0 : d.deltaX * p, m = o === Ir.Horizontal ? 0 : d.deltaY * p;
    !Tr() && d.shiftKey && o !== Ir.Vertical && (v = d.deltaY * p, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Gs(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function f2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = Qr(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function g2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Gs(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function v2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && hp(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Gs(i.transform));
  };
}
function m2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && hp(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
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
function y2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const p = t || e, v = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (Qr(h, `${u}-flow__node`) || Qr(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !m || Qr(h, a) && m || Qr(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!p && !o && !v && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function w2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), h = jh().scaleExtent([e, n]).translateExtent(r), p = tn(t).call(h);
  C({
    x: o.x,
    y: o.y,
    zoom: ho(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = p.on("wheel.zoom"), m = p.on("dblclick.zoom");
  h.wheelDelta(pp);
  function y(_, S) {
    return p ? new Promise((H) => {
      h?.interpolate(S?.interpolate === "linear" ? zo : Ri).transform(ya(p, S?.duration, S?.ease, () => H(!0)), _);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: _, noPanClassName: S, onPaneContextMenu: H, userSelectionActive: P, panOnScroll: D, panOnDrag: A, panOnScrollMode: V, panOnScrollSpeed: W, preventScrolling: U, zoomOnPinch: M, zoomOnScroll: X, zoomOnDoubleClick: Y, zoomActivationKeyPressed: F, lib: q, onTransformChange: Q, connectionInProgress: ee, paneClickDistance: oe, selectionOnDrag: I }) {
    P && !u.isZoomingOrPanning && b();
    const te = D && !F && !P;
    h.clickDistance(I ? 1 / 0 : !Zn(oe) || oe < 0 ? 0 : oe);
    const fe = te ? p2({
      zoomPanValues: u,
      noWheelClassName: _,
      d3Selection: p,
      d3Zoom: h,
      panOnScrollMode: V,
      panOnScrollSpeed: W,
      zoomOnPinch: M,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : f2({
      noWheelClassName: _,
      preventScrolling: U,
      d3ZoomHandler: v
    });
    if (p.on("wheel.zoom", fe, { passive: !1 }), !P) {
      const re = g2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", re);
      const ue = v2({
        zoomPanValues: u,
        panOnDrag: A,
        onPaneContextMenu: !!H,
        onPanZoom: i,
        onTransformChange: Q
      });
      h.on("zoom", ue);
      const ge = m2({
        zoomPanValues: u,
        panOnDrag: A,
        panOnScroll: D,
        onPaneContextMenu: H,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", ge);
    }
    const he = y2({
      zoomActivationKeyPressed: F,
      panOnDrag: A,
      zoomOnScroll: X,
      panOnScroll: D,
      zoomOnDoubleClick: Y,
      zoomOnPinch: M,
      userSelectionActive: P,
      noPanClassName: S,
      noWheelClassName: _,
      lib: q,
      connectionInProgress: ee
    });
    h.filter(he), Y ? p.on("dblclick.zoom", m) : p.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function C(_, S, H) {
    const P = ma(_), D = h?.constrain()(P, S, H);
    return D && await y(D), new Promise((A) => A(D));
  }
  async function E(_, S) {
    const H = ma(_);
    return await y(H, S), new Promise((P) => P(H));
  }
  function k(_) {
    if (p) {
      const S = ma(_), H = p.property("__zoom");
      (H.k !== _.zoom || H.x !== _.x || H.y !== _.y) && h?.transform(p, S, null, { sync: !0 });
    }
  }
  function x() {
    const _ = p ? Kh(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function O(_, S) {
    return p ? new Promise((H) => {
      h?.interpolate(S?.interpolate === "linear" ? zo : Ri).scaleTo(ya(p, S?.duration, S?.ease, () => H(!0)), _);
    }) : Promise.resolve(!1);
  }
  function L(_, S) {
    return p ? new Promise((H) => {
      h?.interpolate(S?.interpolate === "linear" ? zo : Ri).scaleBy(ya(p, S?.duration, S?.ease, () => H(!0)), _);
    }) : Promise.resolve(!1);
  }
  function j(_) {
    h?.scaleExtent(_);
  }
  function B(_) {
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
    scaleTo: O,
    scaleBy: L,
    setScaleExtent: j,
    setTranslateExtent: B,
    syncViewport: k,
    setClickDistance: T
  };
}
var xc;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(xc || (xc = {}));
var b2 = /* @__PURE__ */ ne("<div><!></div>");
function yr(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7, null), r = g(e, "type", 7, "source"), o = g(e, "position", 23, () => _e.Top), i = g(e, "style", 7), s = g(e, "class", 7), a = g(e, "isConnectable", 7), l = g(e, "isConnectableStart", 7, !0), u = g(e, "isConnectableEnd", 7, !0), d = g(e, "isValidConnection", 7), h = g(e, "onconnect", 7), p = g(e, "ondisconnect", 7), v = g(e, "children", 7), m = /* @__PURE__ */ Ie(e, [
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
  const y = mn("svelteflow__node_id"), w = mn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ $(() => r() === "target"), C = /* @__PURE__ */ $(() => a() !== void 0 ? a() : w.value), E = Cn(), k = /* @__PURE__ */ $(() => E.ariaLabelConfig), x = null;
  Vt(() => {
    if (h() || p()) {
      E.edges;
      let M = E.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (x && !ww(M, x)) {
        const X = M ?? /* @__PURE__ */ new Map();
        lc(x, X, p()), lc(X, x, h());
      }
      x = new Map(M);
    }
  });
  let O = /* @__PURE__ */ $(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: M, toHandle: X, isValid: Y } = E.connection, F = M && M.nodeId === y && M.type === r() && M.id === n(), q = X && X.nodeId === y && X.type === r() && X.id === n(), Q = E.connectionMode === co.Strict ? M?.type !== r() : y !== M?.nodeId || n() !== M?.id;
    return [
      !0,
      F,
      q,
      Q,
      q && Y
    ];
  }), L = /* @__PURE__ */ $(() => mo(c(O), 5)), j = /* @__PURE__ */ $(() => c(L)[0]), B = /* @__PURE__ */ $(() => c(L)[1]), T = /* @__PURE__ */ $(() => c(L)[2]), _ = /* @__PURE__ */ $(() => c(L)[3]), S = /* @__PURE__ */ $(() => c(L)[4]);
  function H(M) {
    const X = E.onbeforeconnect ? E.onbeforeconnect(M) : M;
    X && (E.addEdge(X), E.onconnect?.(M));
  }
  function P(M) {
    const X = tp(M);
    M.currentTarget && (X && M.button === 0 || !X) && bc.onPointerDown(M, {
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
      onConnect: H,
      onConnectStart: (Y, F) => {
        E.onconnectstart?.(Y, {
          nodeId: F.nodeId,
          handleId: F.handleId,
          handleType: F.handleType
        });
      },
      onConnectEnd: (Y, F) => {
        E.onconnectend?.(Y, F);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: M.currentTarget
    });
  }
  function D(M) {
    if (!y || !E.clickConnectStartHandle && !l())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.(M, { nodeId: y, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const X = Qh(M.target), Y = d() ?? E.isValidConnection, { connectionMode: F, clickConnectStartHandle: q, flowId: Q, nodeLookup: ee } = E, { connection: oe, isValid: I } = bc.isValid(M, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: F,
      fromNodeId: q.nodeId,
      fromHandleId: q.id ?? null,
      fromType: q.type,
      isValidConnection: Y,
      flowId: Q,
      doc: X,
      lib: "svelte",
      nodeLookup: ee
    });
    I && oe && H(oe);
    const te = structuredClone(kl(E.connection));
    delete te.inProgress, te.toPosition = te.toHandle ? te.toHandle.position : null, E.onclickconnectend?.(M, te), E.clickConnectStartHandle = null;
  }
  var A = {
    get id() {
      return n();
    },
    set id(M = null) {
      n(M), f();
    },
    get type() {
      return r();
    },
    set type(M = "source") {
      r(M), f();
    },
    get position() {
      return o();
    },
    set position(M = _e.Top) {
      o(M), f();
    },
    get style() {
      return i();
    },
    set style(M) {
      i(M), f();
    },
    get class() {
      return s();
    },
    set class(M) {
      s(M), f();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(M) {
      a(M), f();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(M = !0) {
      l(M), f();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(M = !0) {
      u(M), f();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(M) {
      d(M), f();
    },
    get onconnect() {
      return h();
    },
    set onconnect(M) {
      h(M), f();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(M) {
      p(M), f();
    },
    get children() {
      return v();
    },
    set children(M) {
      v(M), f();
    }
  }, V = b2(), W = () => {
  };
  Ue(V, () => ({
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
    onclick: E.clickConnect ? D : void 0,
    onkeypress: W,
    style: i(),
    role: "button",
    "aria-label": c(k)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [hr]: {
      valid: c(S),
      connectingto: c(T),
      connectingfrom: c(B),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(C),
      connectionindicator: c(C) && (!c(j) || c(_)) && (c(j) || E.clickConnectStartHandle ? u() : l())
    }
  }));
  var U = Z(V);
  return Oe(U, () => v() ?? ze), K(V), N(t, V), le(A);
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
var x2 = /* @__PURE__ */ ne("<!> <!>", 1);
function Xl(t, e) {
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
  }, s = x2(), a = G(s);
  yr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = z(a), u = z(l);
  return yr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Pe(() => et(l, ` ${n()?.label ?? ""} `)), N(t, s), le(i);
}
se(Xl, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var C2 = /* @__PURE__ */ ne(" <!>", 1);
function fp(t, e) {
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
  var i = C2(), s = G(i), a = z(s);
  return yr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Pe(() => et(s, `${n()?.label ?? ""} `)), N(t, i), le(o);
}
se(fp, { data: {}, sourcePosition: {} }, [], [], !0);
var k2 = /* @__PURE__ */ ne(" <!>", 1);
function gp(t, e) {
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
  var i = k2(), s = G(i), a = z(s);
  return yr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Pe(() => et(s, `${n()?.label ?? ""} `)), N(t, i), le(o);
}
se(gp, { data: {}, targetPosition: {} }, [], [], !0);
function vp(t, e) {
}
se(vp, {}, [], [], !0);
function wa(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function mp(t, e) {
  const n = /* @__PURE__ */ $(Cn), r = /* @__PURE__ */ $(() => c(n).domNode);
  let o;
  return c(r) ? wa(t, c(r), e) : o = Zr(() => {
    Le(() => {
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
function yp() {
  let t = /* @__PURE__ */ me(typeof window > "u");
  if (c(t)) {
    const e = Zr(() => {
      Le(() => {
        R(t, !1), e?.();
      });
    });
  }
  return {
    get value() {
      return c(t);
    }
  };
}
const Cc = (t) => xw(t), $2 = (t) => Wh(t);
function In(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const fs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var S2 = /* @__PURE__ */ ne("<div><!></div>");
const _2 = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function wp(t, e) {
  ae(e, !0), Ge(t, _2);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7), i = g(e, "height", 7), s = g(e, "selectEdgeOnClick", 7, !1), a = g(e, "transparent", 7, !1), l = g(e, "class", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Ie(e, [
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
  const h = Cn(), p = mn("svelteflow__edge_id");
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
  }, y = S2(), w = () => {
    s() && h.handleEdgeSelection(p);
  };
  Ue(
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
      [En]: C
    }),
    [
      () => ({
        display: yp().value ? "none" : void 0,
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
  return Oe(b, () => u() ?? ze), K(y), Ot(y, (C, E) => mp?.(C, E), () => "edge-labels"), N(t, y), le(m);
}
se(
  wp,
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
var E2 = /* @__PURE__ */ xe("<path></path>"), P2 = /* @__PURE__ */ xe('<path fill="none"></path><!><!>', 1);
function gi(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "path", 7), o = g(e, "label", 7), i = g(e, "labelX", 7), s = g(e, "labelY", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "style", 7), h = g(e, "interactionWidth", 7, 20), p = g(e, "class", 7), v = /* @__PURE__ */ Ie(e, [
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
  }, y = P2(), w = G(y), b = z(w);
  {
    var C = (x) => {
      var O = E2();
      Ue(O, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), N(x, O);
    };
    ie(b, (x) => {
      h() > 0 && x(C);
    });
  }
  var E = z(b);
  {
    var k = (x) => {
      wp(x, {
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
        children: (O, L) => {
          Se();
          var j = Me();
          Pe(() => et(j, o())), N(O, j);
        },
        $$slots: { default: !0 }
      });
    };
    ie(E, (x) => {
      o() && x(k);
    });
  }
  return Pe(() => {
    Ee(w, "id", n()), Ee(w, "d", r()), jt(w, 0, lr(["svelte-flow__edge-path", p()])), Ee(w, "marker-start", l()), Ee(w, "marker-end", u()), _t(w, d());
  }), N(t, y), le(m);
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
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), p = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ $(() => np({
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
    set id(O) {
      n(O), f();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(O) {
      r(O), f();
    },
    get label() {
      return o();
    },
    set label(O) {
      o(O), f();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(O) {
      i(O), f();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(O) {
      s(O), f();
    },
    get markerStart() {
      return a();
    },
    set markerStart(O) {
      a(O), f();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(O) {
      l(O), f();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(O) {
      u(O), f();
    },
    get sourceX() {
      return d();
    },
    set sourceX(O) {
      d(O), f();
    },
    get sourceY() {
      return h();
    },
    set sourceY(O) {
      h(O), f();
    },
    get style() {
      return p();
    },
    set style(O) {
      p(O), f();
    },
    get targetPosition() {
      return v();
    },
    set targetPosition(O) {
      v(O), f();
    },
    get targetX() {
      return m();
    },
    set targetX(O) {
      m(O), f();
    },
    get targetY() {
      return y();
    },
    set targetY(O) {
      y(O), f();
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
function bp(t, e) {
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
  bp,
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
function xp(t, e) {
  ae(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), p = /* @__PURE__ */ $(() => op({
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
  xp,
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
function Cp(t, e) {
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
  Cp,
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
class O2 extends Map {
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
    return Gn === this.#r ? /* @__PURE__ */ me(e) : er(e);
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
      o = this.#o(0), r.set(e, o), R(this.#n, super.size), _n(a);
    else if (i !== n) {
      _n(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && _n(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), R(this.#n, super.size), R(r, -1), _n(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      R(this.#n, 0);
      for (var n of e.values())
        R(n, -1);
      _n(this.#t), e.clear();
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
class N2 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = jr(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const T2 = /\(.+\)/, D2 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class kp extends N2 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = T2.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => D2.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => pt(o, "change", i)
    );
  }
}
function A2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Kl(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
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
      if (Iw({
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
      zIndex: Mw({
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
const $p = {
  input: fp,
  output: gp,
  default: Xl,
  group: vp
}, Sp = {
  straight: xp,
  smoothstep: bp,
  default: Ul,
  step: Cp
};
function M2(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = hi(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return jl(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function I2(t) {
  class e {
    #e = /* @__PURE__ */ $(() => t.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      R(this.#e, r);
    }
    #t = /* @__PURE__ */ me(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      R(this.#t, r);
    }
    #n = /* @__PURE__ */ me(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      R(this.#n, r);
    }
    #r = /* @__PURE__ */ me(t.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      R(this.#r, r);
    }
    #o = /* @__PURE__ */ me(t.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      R(this.#o, r);
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
      R(this.#i, r);
    }
    #a = /* @__PURE__ */ $(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      R(this.#a, r);
    }
    #s = /* @__PURE__ */ $(() => (t2(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
    get _edges() {
      return c(this.#s);
    }
    set _edges(r) {
      R(this.#s, r);
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
      R(this.#l, r);
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
      R(this.#u, r);
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
        h = A2(s, b, y, w), p = kc({
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
      R(this.#c, r);
    }
    #d = /* @__PURE__ */ $(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      R(this.#d, r);
    }
    #h = /* @__PURE__ */ $(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#h);
    }
    set nodesConnectable(r) {
      R(this.#h, r);
    }
    #f = /* @__PURE__ */ $(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#f);
    }
    set elementsSelectable(r) {
      R(this.#f, r);
    }
    #p = /* @__PURE__ */ $(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      R(this.#p, r);
    }
    #y = /* @__PURE__ */ $(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      R(this.#y, r);
    }
    #v = /* @__PURE__ */ $(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      R(this.#v, r);
    }
    #w = /* @__PURE__ */ $(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      R(this.#w, r);
    }
    #m = /* @__PURE__ */ $(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      R(this.#m, r);
    }
    #g = /* @__PURE__ */ $(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      R(this.#g, r);
    }
    #b = /* @__PURE__ */ $(() => t.props.nodeExtent ?? Fa);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      R(this.#b, r);
    }
    #x = /* @__PURE__ */ $(() => t.props.translateExtent ?? Fa);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      R(this.#x, r);
    }
    #C = /* @__PURE__ */ $(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      R(this.#C, r);
    }
    #k = /* @__PURE__ */ $(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#k);
    }
    set nodeDragThreshold(r) {
      R(this.#k, r);
    }
    #$ = /* @__PURE__ */ $(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      R(this.#$, r);
    }
    #S = /* @__PURE__ */ $(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#S);
    }
    set autoPanOnConnect(r) {
      R(this.#S, r);
    }
    #_ = /* @__PURE__ */ $(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#_);
    }
    set autoPanOnNodeFocus(r) {
      R(this.#_, r);
    }
    #E = /* @__PURE__ */ $(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      R(this.#E, r);
    }
    #P = /* @__PURE__ */ $(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      R(this.#P, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #O = /* @__PURE__ */ $(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#O);
    }
    set snapGrid(r) {
      R(this.#O, r);
    }
    #N = /* @__PURE__ */ me(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      R(this.#N, r);
    }
    #T = /* @__PURE__ */ me(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      R(this.#T, r);
    }
    #D = /* @__PURE__ */ me(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      R(this.#D, r);
    }
    #A = /* @__PURE__ */ me(!1);
    get multiselectionKeyPressed() {
      return c(this.#A);
    }
    set multiselectionKeyPressed(r) {
      R(this.#A, r);
    }
    #M = /* @__PURE__ */ me(!1);
    get deleteKeyPressed() {
      return c(this.#M);
    }
    set deleteKeyPressed(r) {
      R(this.#M, r);
    }
    #I = /* @__PURE__ */ me(!1);
    get panActivationKeyPressed() {
      return c(this.#I);
    }
    set panActivationKeyPressed(r) {
      R(this.#I, r);
    }
    #L = /* @__PURE__ */ me(!1);
    get zoomActivationKeyPressed() {
      return c(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      R(this.#L, r);
    }
    #H = /* @__PURE__ */ me(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      R(this.#H, r);
    }
    #z = /* @__PURE__ */ me("");
    get ariaLiveMessage() {
      return c(this.#z);
    }
    set ariaLiveMessage(r) {
      R(this.#z, r);
    }
    #V = /* @__PURE__ */ $(() => t.props.selectionMode ?? ds.Partial);
    get selectionMode() {
      return c(this.#V);
    }
    set selectionMode(r) {
      R(this.#V, r);
    }
    #B = /* @__PURE__ */ $(() => ({ ...$p, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#B);
    }
    set nodeTypes(r) {
      R(this.#B, r);
    }
    #F = /* @__PURE__ */ $(() => ({ ...Sp, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#F);
    }
    set edgeTypes(r) {
      R(this.#F, r);
    }
    #R = /* @__PURE__ */ $(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#R);
    }
    set noPanClass(r) {
      R(this.#R, r);
    }
    #K = /* @__PURE__ */ $(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      R(this.#K, r);
    }
    #j = /* @__PURE__ */ $(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#j);
    }
    set noWheelClass(r) {
      R(this.#j, r);
    }
    #Z = /* @__PURE__ */ $(() => Tw(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Z);
    }
    set ariaLabelConfig(r) {
      R(this.#Z, r);
    }
    #W = /* @__PURE__ */ me(M2(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#W);
    }
    set _viewport(r) {
      R(this.#W, r);
    }
    get viewport() {
      return t.viewport ?? this._viewport;
    }
    set viewport(r) {
      t.viewport && (t.viewport = r), this._viewport = r;
    }
    #q = /* @__PURE__ */ me(
      // _connection is viewport independent and originating from XYHandle
      Ra
    );
    get _connection() {
      return c(this.#q);
    }
    set _connection(r) {
      R(this.#q, r);
    }
    #Y = /* @__PURE__ */ $(() => this._connection.inProgress ? {
      ...this._connection,
      to: fi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#Y);
    }
    set connection(r) {
      R(this.#Y, r);
    }
    #X = /* @__PURE__ */ $(() => t.props.connectionMode ?? co.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      R(this.#X, r);
    }
    #U = /* @__PURE__ */ $(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      R(this.#U, r);
    }
    #G = /* @__PURE__ */ $(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      R(this.#G, r);
    }
    #J = /* @__PURE__ */ $(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      R(this.#J, r);
    }
    #Q = /* @__PURE__ */ $(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      R(this.#Q, r);
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
      R(this.#ee, r);
    }
    #te = /* @__PURE__ */ $(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      R(this.#te, r);
    }
    #ne = /* @__PURE__ */ $(() => t.props.onflowerror ?? Ew);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      R(this.#ne, r);
    }
    #re = /* @__PURE__ */ $(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      R(this.#re, r);
    }
    #oe = /* @__PURE__ */ $(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      R(this.#oe, r);
    }
    #ie = /* @__PURE__ */ $(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      R(this.#ie, r);
    }
    #se = /* @__PURE__ */ $(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      R(this.#se, r);
    }
    #ae = /* @__PURE__ */ $(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      R(this.#ae, r);
    }
    #le = /* @__PURE__ */ $(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      R(this.#le, r);
    }
    #ue = /* @__PURE__ */ $(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      R(this.#ue, r);
    }
    #ce = /* @__PURE__ */ $(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      R(this.#ce, r);
    }
    #de = /* @__PURE__ */ $(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      R(this.#de, r);
    }
    #he = /* @__PURE__ */ $(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      R(this.#he, r);
    }
    #pe = /* @__PURE__ */ $(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      R(this.#pe, r);
    }
    #fe = /* @__PURE__ */ $(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#fe);
    }
    set onclickconnectstart(r) {
      R(this.#fe, r);
    }
    #ge = /* @__PURE__ */ $(() => t.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      R(this.#ge, r);
    }
    #ve = /* @__PURE__ */ me(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      R(this.#ve, r);
    }
    #me = /* @__PURE__ */ $(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      R(this.#me, r);
    }
    #ye = /* @__PURE__ */ $(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      R(this.#ye, r);
    }
    #we = /* @__PURE__ */ $(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      R(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Sw(
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
    _prefersDark = new kp("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ $(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      R(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ra, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function Cn() {
  const t = mn(gs);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const gs = Symbol();
function _p(t) {
  const e = I2(t);
  function n(T) {
    e.nodeTypes = {
      ...$p,
      ...T
    };
  }
  function r(T) {
    e.edgeTypes = {
      ...Sp,
      ...T
    };
  }
  function o(T) {
    e.edges = zw(T, e.edges);
  }
  const i = (T, _ = !1) => {
    e.nodes = e.nodes.map((S) => {
      const H = T.get(S.id);
      return H ? { ...S, position: H.position, dragging: _ } : S;
    });
  };
  function s(T) {
    const { changes: _, updatedInternals: S } = Qw(T, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!S)
      return;
    qw(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const H = /* @__PURE__ */ new Map();
    for (const P of _) {
      const D = e.nodeLookup.get(P.id)?.internals.userNode;
      if (!D)
        continue;
      const A = { ...D };
      switch (P.type) {
        case "dimensions": {
          const V = { ...A.measured, ...P.dimensions };
          P.setAttributes && (A.width = P.dimensions?.width ?? A.width, A.height = P.dimensions?.height ?? A.height), A.measured = V;
          break;
        }
        case "position":
          A.position = P.position ?? A.position;
          break;
      }
      H.set(P.id, A);
    }
    e.nodes = e.nodes.map((P) => H.get(P.id) ?? P);
  }
  function a(T) {
    const _ = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = T, e.fitViewResolver = _, e.nodes = [...e.nodes], _.promise;
  }
  async function l(T, _, S) {
    const H = typeof S?.zoom < "u" ? S.zoom : e.maxZoom, P = e.panZoom;
    return P ? (await P.setViewport({
      x: e.width / 2 - T * H,
      y: e.height / 2 - _ * H,
      zoom: H
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
    const H = T.map((P) => (!_ || _.has(P.id)) && P.selected ? (S = !0, { ...P, selected: !1 }) : P);
    return [S, H];
  }
  function w(T) {
    const _ = T?.nodes ? new Set(T.nodes.map((V) => V.id)) : null, [S, H] = y(e.nodes, _);
    S && (e.nodes = H);
    const P = T?.edges ? new Set(T.edges.map((V) => V.id)) : null, [D, A] = y(e.edges, P);
    D && (e.edges = A);
  }
  function b(T) {
    const _ = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((S) => {
      const H = T.includes(S.id), P = _ && S.selected || H;
      return !!S.selected !== P ? { ...S, selected: P } : S;
    }), _ || w({ nodes: [] });
  }
  function C(T) {
    const _ = e.multiselectionKeyPressed;
    e.edges = e.edges.map((S) => {
      const H = T.includes(S.id), P = _ && S.selected || H;
      return !!S.selected !== P ? { ...S, selected: P } : S;
    }), _ || w({ edges: [] });
  }
  function E(T, _, S) {
    const H = e.nodeLookup.get(T);
    if (!H) {
      console.warn("012", Yo.error012(T));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, H.selected ? (_ || H.selected && e.multiselectionKeyPressed) && (w({ nodes: [H], edges: [] }), requestAnimationFrame(() => S?.blur())) : b([T]);
  }
  function k(T) {
    const _ = e.edgeLookup.get(T);
    if (!_) {
      console.warn("012", Yo.error012(T));
      return;
    }
    (_.selectable || e.elementsSelectable && typeof _.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, _.selected ? _.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [_] }) : C([T]));
  }
  function x(T, _) {
    const { nodeExtent: S, snapGrid: H, nodeOrigin: P, nodeLookup: D, nodesDraggable: A, onerror: V } = e, W = /* @__PURE__ */ new Map(), U = H?.[0] ?? 5, M = H?.[1] ?? 5, X = T.x * U * _, Y = T.y * M * _;
    for (const F of D.values()) {
      if (!(F.selected && (F.draggable || A && typeof F.draggable > "u")))
        continue;
      let q = {
        x: F.internals.positionAbsolute.x + X,
        y: F.internals.positionAbsolute.y + Y
      };
      H && (q = pi(q, H));
      const { position: Q, positionAbsolute: ee } = qh({
        nodeId: F.id,
        nextPosition: q,
        nodeLookup: D,
        nodeExtent: S,
        nodeOrigin: P,
        onError: V
      });
      F.position = Q, F.internals.positionAbsolute = ee, W.set(F.id, F);
    }
    i(W);
  }
  function O(T) {
    return e2({
      delta: T,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const L = (T) => {
    e._connection = { ...T };
  };
  function j() {
    e._connection = Ra;
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
    panBy: O,
    updateConnection: L,
    cancelConnection: j,
    reset: B
  });
}
function L2(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = e, p = w2({
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
var H2 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Ep(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), p = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), C = /* @__PURE__ */ $(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ $(() => n().panActivationKeyPressed || u());
  const { viewport: k } = n();
  let x = !1;
  Le(() => {
    !x && n().viewportInitialized && (w()?.(), x = !0);
  });
  var O = {
    get store() {
      return n();
    },
    set store(B) {
      n(B), f();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(B) {
      r(B), f();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(B) {
      o(B), f();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(B) {
      i(B), f();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(B) {
      s(B), f();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(B) {
      a(B), f();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(B) {
      l(B), f();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(B) {
      u(B), f();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(B) {
      d(B), f();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(B) {
      h(B), f();
    },
    get selectionOnDrag() {
      return p();
    },
    set selectionOnDrag(B) {
      p(B), f();
    },
    get onmovestart() {
      return v();
    },
    set onmovestart(B) {
      v(B), f();
    },
    get onmove() {
      return m();
    },
    set onmove(B) {
      m(B), f();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(B) {
      y(B), f();
    },
    get oninit() {
      return w();
    },
    set oninit(B) {
      w(B), f();
    },
    get children() {
      return b();
    },
    set children(B) {
      b(B), f();
    }
  }, L = H2(), j = Z(L);
  return Oe(j, b), K(L), Ot(L, (B, T) => L2?.(B, T), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: k,
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
    onTransformChange: (B) => {
      n(n().viewport = { x: B[0], y: B[1], zoom: B[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), N(t, L), le(O);
}
se(
  Ep,
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
var z2 = /* @__PURE__ */ ne("<div><!></div>");
function Pp(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, p = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ $(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ $(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ $(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), C = !1;
  function E(D) {
    if (p = h?.getBoundingClientRect(), !p) return;
    const A = D.target === h, V = !A && !!D.target.closest(".nokey"), W = i() && A || n().selectionKeyPressed;
    if (V || !c(w) || !W || D.button !== 0 || !D.isPrimary)
      return;
    D.target?.setPointerCapture?.(D.pointerId), C = !1;
    const { x: U, y: M } = hn(D, p);
    n(n().selectionRect = { width: 0, height: 0, startX: U, startY: M, x: U, y: M }, !0), A || (D.stopPropagation(), D.preventDefault());
  }
  function k(D) {
    if (!c(w) || !p || !n().selectionRect)
      return;
    const A = hn(D, p), { startX: V = 0, startY: W = 0 } = n().selectionRect;
    if (!C) {
      const F = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(A.x - V, A.y - W) <= F)
        return;
      n().unselectNodesAndEdges(), l()?.(D);
    }
    C = !0;
    const U = {
      ...n().selectionRect,
      x: A.x < V ? A.x : V,
      y: A.y < W ? A.y : W,
      width: Math.abs(A.x - V),
      height: Math.abs(A.y - W)
    }, M = v, X = m;
    v = new Set(Kl(
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
    const Y = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const F of v) {
      const q = n().connectionLookup.get(F);
      if (q)
        for (const { edgeId: Q } of q.values()) {
          const ee = n().edgeLookup.get(Q);
          ee && (ee.selectable ?? Y) && m.add(Q);
        }
    }
    _c(M, v) || n(n().nodes = n().nodes.map(Sc(v)), !0), _c(X, m) || n(n().edges = n().edges.map(Sc(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = U, !0);
  }
  function x(D) {
    D.button === 0 && (D.target?.releasePointerCapture?.(D.pointerId), !C && D.target === h && j?.(D), n(n().selectionRect = null, !0), C && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), C && u()?.(D));
  }
  const O = (D) => {
    if (Array.isArray(c(y)) && c(y).includes(2)) {
      D.preventDefault();
      return;
    }
    a()?.({ event: D });
  }, L = (D) => {
    C && (D.stopPropagation(), C = !1);
  };
  function j(D) {
    if (C || n().connection.inProgress) {
      C = !1;
      return;
    }
    s()?.({ event: D }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var B = {
    get store() {
      return n();
    },
    set store(D) {
      n(D), f();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(D = !0) {
      r(D), f();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(D = 1) {
      o(D), f();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(D) {
      i(D), f();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(D) {
      s(D), f();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(D) {
      a(D), f();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(D) {
      l(D), f();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(D) {
      u(D), f();
    },
    get children() {
      return d();
    },
    set children(D) {
      d(D), f();
    }
  }, T = z2();
  let _;
  var S = /* @__PURE__ */ $(() => c(b) ? void 0 : $c(j, h));
  T.__click = function(...D) {
    c(S)?.apply(this, D);
  }, T.__pointermove = function(...D) {
    (c(b) ? k : void 0)?.apply(this, D);
  }, T.__pointerup = function(...D) {
    (c(b) ? x : void 0)?.apply(this, D);
  };
  var H = /* @__PURE__ */ $(() => $c(O, h));
  T.__contextmenu = function(...D) {
    c(H)?.apply(this, D);
  };
  var P = Z(T);
  return Oe(P, d), K(T), Et(T, (D) => h = D, () => h), Pe((D) => _ = jt(T, 1, "svelte-flow__pane svelte-flow__container", null, _, D), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), ns(
    "pointerdown",
    T,
    function(...D) {
      (c(b) ? E : void 0)?.apply(this, D);
    },
    !0
  ), ns(
    "click",
    T,
    function(...D) {
      (c(b) ? L : void 0)?.apply(this, D);
    },
    !0
  ), N(t, T), le(B);
}
$r(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  Pp,
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
var V2 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Op(t, e) {
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
  return Oe(a, r), K(i), Pe(() => s = _t(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), N(t, i), le(o);
}
se(Op, { store: {}, children: {} }, [], [], !0);
function Np(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = i2({
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
var B2 = /* @__PURE__ */ ne('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), F2 = /* @__PURE__ */ ne('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const R2 = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Tp(t, e) {
  ae(e, !0), Ge(t, R2);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), f();
    }
  }, o = F2(), i = G(o), s = Z(i, !0);
  K(i);
  var a = z(i, 2), l = Z(a, !0);
  K(a);
  var u = z(a, 2);
  {
    var d = (h) => {
      var p = B2(), v = Z(p, !0);
      K(p), Pe(() => {
        Ee(p, "id", `${K2}-${n().flowId}`), et(v, n().ariaLiveMessage);
      }), N(h, p);
    };
    ie(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Pe(() => {
    Ee(i, "id", `${Dp}-${n().flowId}`), et(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Ee(a, "id", `${Ap}-${n().flowId}`), et(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), N(t, o), le(r);
}
se(Tp, { store: {} }, [], [], !0);
const Dp = "svelte-flow__node-desc", Ap = "svelte-flow__edge-desc", K2 = "svelte-flow__aria-live";
var j2 = /* @__PURE__ */ ne("<div><!></div>");
function Mp(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), p = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ $(() => At(r().data, () => ({}), !0)), y = /* @__PURE__ */ $(() => At(r().selected, !1)), w = /* @__PURE__ */ $(() => r().draggable), b = /* @__PURE__ */ $(() => r().selectable), C = /* @__PURE__ */ $(() => At(r().deletable, !0)), E = /* @__PURE__ */ $(() => r().connectable), k = /* @__PURE__ */ $(() => r().focusable), x = /* @__PURE__ */ $(() => At(r().hidden, !1)), O = /* @__PURE__ */ $(() => At(r().dragging, !1)), L = /* @__PURE__ */ $(() => At(r().style, "")), j = /* @__PURE__ */ $(() => r().class), B = /* @__PURE__ */ $(() => At(r().type, "default")), T = /* @__PURE__ */ $(() => r().parentId), _ = /* @__PURE__ */ $(() => r().sourcePosition), S = /* @__PURE__ */ $(() => r().targetPosition), H = /* @__PURE__ */ $(() => At(r().measured, () => ({ width: 0, height: 0 }), !0).width), P = /* @__PURE__ */ $(() => At(r().measured, () => ({ width: 0, height: 0 }), !0).height), D = /* @__PURE__ */ $(() => r().initialWidth), A = /* @__PURE__ */ $(() => r().initialHeight), V = /* @__PURE__ */ $(() => r().width), W = /* @__PURE__ */ $(() => r().height), U = /* @__PURE__ */ $(() => r().dragHandle), M = /* @__PURE__ */ $(() => At(r().internals.z, 0)), X = /* @__PURE__ */ $(() => r().internals.positionAbsolute.x), Y = /* @__PURE__ */ $(() => r().internals.positionAbsolute.y), F = /* @__PURE__ */ $(() => r().internals.userNode), { id: q } = r(), Q = /* @__PURE__ */ $(() => c(w) ?? n().nodesDraggable), ee = /* @__PURE__ */ $(() => c(b) ?? n().elementsSelectable), oe = /* @__PURE__ */ $(() => c(E) ?? n().nodesConnectable), I = /* @__PURE__ */ $(() => Gh(r())), te = /* @__PURE__ */ $(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ $(() => c(I) && c(te)), he = /* @__PURE__ */ $(() => c(k) ?? n().nodesFocusable);
  function re(ve) {
    return n().parentLookup.has(ve);
  }
  let ue = /* @__PURE__ */ $(() => re(q)), ge = /* @__PURE__ */ me(null), ye = null, be = c(B), de = c(_), we = c(S), Te = /* @__PURE__ */ $(() => n().nodeTypes[c(B)] ?? Xl), J = /* @__PURE__ */ $(() => n().ariaLabelConfig);
  Hr("svelteflow__node_connectable", {
    get value() {
      return c(oe);
    }
  }), Hr("svelteflow__node_id", q);
  let Ve = /* @__PURE__ */ $(() => {
    const ve = c(H) === void 0 ? c(V) ?? c(D) : c(V), Ne = c(P) === void 0 ? c(W) ?? c(A) : c(W);
    if (!(ve === void 0 && Ne === void 0 && c(L) === void 0))
      return `${c(L)};${ve ? `width:${In(ve)};` : ""}${Ne ? `height:${In(Ne)};` : ""}`;
  });
  Le(() => {
    (c(B) !== be || c(_) !== de || c(S) !== we) && c(ge) !== null && requestAnimationFrame(() => {
      c(ge) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[q, { id: q, nodeElement: c(ge), force: !0 }]]));
    }), be = c(B), de = c(_), we = c(S);
  }), Le(() => {
    o() && (!c(fe) || c(ge) !== ye) && (ye && o().unobserve(ye), c(ge) && o().observe(c(ge)), ye = c(ge));
  }), li(() => {
    ye && o()?.unobserve(ye);
  });
  function $e(ve) {
    c(ee) && (!n().selectNodesOnDrag || !c(Q) || n().nodeDragThreshold > 0) && n().handleNodeSelection(q), s()?.({ node: c(F), event: ve });
  }
  function ke(ve) {
    if (!(ep(ve) || n().disableKeyboardA11y))
      if (Zh.includes(ve.key) && c(ee)) {
        const Ne = ve.key === "Escape";
        n().handleNodeSelection(q, Ne, c(ge));
      } else c(Q) && r().selected && Object.prototype.hasOwnProperty.call(fs, ve.key) && (ve.preventDefault(), n(
        n().ariaLiveMessage = c(J)["node.a11yDescription.ariaLiveMessage"]({
          direction: ve.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(fs[ve.key], ve.shiftKey ? 4 : 1));
  }
  const Ae = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ge)?.matches(":focus-visible"))
      return;
    const { width: ve, height: Ne, viewport: tt } = n();
    Kl(/* @__PURE__ */ new Map([[q, r()]]), { x: 0, y: 0, width: ve, height: Ne }, [tt.x, tt.y, tt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: tt.zoom });
  };
  var qe = {
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
  }, Qe = ce(), Xe = G(Qe);
  {
    var ot = (ve) => {
      var Ne = j2();
      Ue(Ne, () => ({
        "data-id": q,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(B)}`,
          c(j)
        ],
        style: c(Ve),
        onclick: $e,
        onpointerenter: d() ? (je) => d()({ node: c(F), event: je }) : void 0,
        onpointerleave: h() ? (je) => h()({ node: c(F), event: je }) : void 0,
        onpointermove: p() ? (je) => p()({ node: c(F), event: je }) : void 0,
        oncontextmenu: v() ? (je) => v()({ node: c(F), event: je }) : void 0,
        onkeydown: c(he) ? ke : void 0,
        onfocus: c(he) ? Ae : void 0,
        tabIndex: c(he) ? 0 : void 0,
        role: r().ariaRole ?? (c(he) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Dp}-${n().flowId}`,
        ...r().domAttributes,
        [hr]: {
          dragging: c(O),
          selected: c(y),
          draggable: c(Q),
          connectable: c(oe),
          selectable: c(ee),
          nopan: c(Q),
          parent: c(ue)
        },
        [En]: {
          "z-index": c(M),
          transform: `translate(${c(X) ?? ""}px, ${c(Y) ?? ""}px)`,
          visibility: c(I) ? "visible" : "hidden"
        }
      }));
      var tt = Z(Ne);
      bt(tt, () => c(Te), (je, at) => {
        at(je, {
          get data() {
            return c(m);
          },
          get id() {
            return q;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(ee);
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
            return c(M);
          },
          get dragging() {
            return c(O);
          },
          get draggable() {
            return c(Q);
          },
          get dragHandle() {
            return c(U);
          },
          get parentId() {
            return c(T);
          },
          get type() {
            return c(B);
          },
          get isConnectable() {
            return c(oe);
          },
          get positionAbsoluteX() {
            return c(X);
          },
          get positionAbsoluteY() {
            return c(Y);
          },
          get width() {
            return c(V);
          },
          get height() {
            return c(W);
          }
        });
      }), K(Ne), Ot(Ne, (je, at) => Np?.(je, at), () => ({
        nodeId: q,
        isSelectable: c(ee),
        disabled: !c(Q),
        handleSelector: c(U),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (je, at, Dt, nt) => {
          a()?.({ event: je, targetNode: Dt, nodes: nt });
        },
        onDragStart: (je, at, Dt, nt) => {
          l()?.({ event: je, targetNode: Dt, nodes: nt });
        },
        onDragStop: (je, at, Dt, nt) => {
          u()?.({ event: je, targetNode: Dt, nodes: nt });
        },
        store: n()
      })), Et(Ne, (je) => R(ge, je), () => c(ge)), N(ve, Ne);
    };
    ie(Xe, (ve) => {
      c(x) || ve(ot);
    });
  }
  return N(t, Qe), le(qe);
}
se(
  Mp,
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
var Z2 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes"></div>');
function Ip(t, e) {
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
  }, m = Z2();
  return Ct(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    Mp(y, {
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
  }), K(m), N(t, m), le(v);
}
se(
  Ip,
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
var W2 = /* @__PURE__ */ xe('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Lp(t, e) {
  ae(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ $(() => n().source), u = /* @__PURE__ */ $(() => n().target), d = /* @__PURE__ */ $(() => n().sourceX), h = /* @__PURE__ */ $(() => n().sourceY), p = /* @__PURE__ */ $(() => n().targetX), v = /* @__PURE__ */ $(() => n().targetY), m = /* @__PURE__ */ $(() => n().sourcePosition), y = /* @__PURE__ */ $(() => n().targetPosition), w = /* @__PURE__ */ $(() => At(n().animated, !1)), b = /* @__PURE__ */ $(() => At(n().selected, !1)), C = /* @__PURE__ */ $(() => n().label), E = /* @__PURE__ */ $(() => n().labelStyle), k = /* @__PURE__ */ $(() => At(n().data, () => ({}), !0)), x = /* @__PURE__ */ $(() => n().style), O = /* @__PURE__ */ $(() => n().interactionWidth), L = /* @__PURE__ */ $(() => At(n().type, "default")), j = /* @__PURE__ */ $(() => n().sourceHandle), B = /* @__PURE__ */ $(() => n().targetHandle), T = /* @__PURE__ */ $(() => n().markerStart), _ = /* @__PURE__ */ $(() => n().markerEnd), S = /* @__PURE__ */ $(() => n().selectable), H = /* @__PURE__ */ $(() => n().focusable), P = /* @__PURE__ */ $(() => At(n().deletable, !0)), D = /* @__PURE__ */ $(() => n().hidden), A = /* @__PURE__ */ $(() => n().zIndex), V = /* @__PURE__ */ $(() => n().class), W = /* @__PURE__ */ $(() => n().ariaLabel), U = null;
  const { id: M } = n();
  Hr("svelteflow__edge_id", M);
  let X = /* @__PURE__ */ $(() => c(S) ?? r().elementsSelectable), Y = /* @__PURE__ */ $(() => c(H) ?? r().edgesFocusable), F = /* @__PURE__ */ $(() => r().edgeTypes[c(L)] ?? Ul), q = /* @__PURE__ */ $(() => c(T) ? `url('#${ja(c(T), r().flowId)}')` : void 0), Q = /* @__PURE__ */ $(() => c(_) ? `url('#${ja(c(_), r().flowId)}')` : void 0);
  function ee(ue) {
    const ge = r().edgeLookup.get(M);
    ge && (c(X) && r().handleEdgeSelection(M), o()?.({ event: ue, edge: ge }));
  }
  function oe(ue, ge) {
    const ye = r().edgeLookup.get(M);
    ye && ge({ event: ue, edge: ye });
  }
  function I(ue) {
    if (!r().disableKeyboardA11y && Zh.includes(ue.key) && c(X)) {
      const { unselectNodesAndEdges: ge, addSelectedEdges: ye } = r();
      ue.key === "Escape" ? (U?.blur(), ge({ edges: [n()] })) : ye([M]);
    }
  }
  var te = {
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
  }, fe = ce(), he = G(fe);
  {
    var re = (ue) => {
      var ge = W2();
      let ye;
      var be = Z(ge);
      Ue(be, () => ({
        class: ["svelte-flow__edge", c(V)],
        "data-id": M,
        onclick: ee,
        oncontextmenu: i() ? (we) => {
          oe(we, i());
        } : void 0,
        onpointerenter: s() ? (we) => {
          oe(we, s());
        } : void 0,
        onpointerleave: a() ? (we) => {
          oe(we, a());
        } : void 0,
        "aria-label": c(W) === null ? void 0 : c(W) ? c(W) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(Y) ? `${Ap}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(Y) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(Y) ? I : void 0,
        tabindex: c(Y) ? 0 : void 0,
        ...n().domAttributes,
        [hr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(X)
        }
      }));
      var de = Z(be);
      bt(de, () => c(F), (we, Te) => {
        Te(we, {
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
            return c(O);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(P);
          },
          get type() {
            return c(L);
          },
          get sourceHandleId() {
            return c(j);
          },
          get targetHandleId() {
            return c(B);
          },
          get markerStart() {
            return c(q);
          },
          get markerEnd() {
            return c(Q);
          }
        });
      }), K(be), Et(be, (we) => U = we, () => U), K(ge), Pe(() => ye = _t(ge, "", ye, { "z-index": c(A) })), N(ue, ge);
    };
    ie(he, (ue) => {
      c(D) || ue(re);
    });
  }
  return N(t, fe), le(te);
}
se(
  Lp,
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
Av();
var q2 = /* @__PURE__ */ xe("<defs></defs>");
function Hp(t, e) {
  ae(e, !1);
  const n = Cn();
  Ml();
  var r = q2();
  Ct(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    zp(o, He(() => c(i)));
  }), K(r), N(t, r), le();
}
se(Hp, {}, [], [], !0);
var Y2 = /* @__PURE__ */ xe('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), X2 = /* @__PURE__ */ xe('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), U2 = /* @__PURE__ */ xe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
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
  }, h = U2(), p = Z(h);
  {
    var v = (y) => {
      var w = Y2();
      let b;
      Pe(() => {
        Ee(w, "stroke-width", u()), b = _t(w, "", b, { stroke: l() });
      }), N(y, w);
    }, m = (y) => {
      var w = ce(), b = G(w);
      {
        var C = (E) => {
          var k = X2();
          let x;
          Pe(() => {
            Ee(k, "stroke-width", u()), x = _t(k, "", x, { stroke: l(), fill: l() });
          }), N(E, k);
        };
        ie(
          b,
          (E) => {
            r() === Xo.ArrowClosed && E(C);
          },
          !0
        );
      }
      N(y, w);
    };
    ie(p, (y) => {
      r() === Xo.Arrow ? y(v) : y(m, !1);
    });
  }
  return K(h), Pe(() => {
    Ee(h, "id", n()), Ee(h, "markerWidth", `${o()}`), Ee(h, "markerHeight", `${i()}`), Ee(h, "markerUnits", s()), Ee(h, "orient", a());
  }), N(t, h), le(d);
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
var G2 = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
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
  }, l = G2(), u = Z(l), d = Z(u);
  Hp(d, {}), K(u);
  var h = z(u, 2);
  return Ct(h, 17, () => n().visible.edges.values(), (p) => p.id, (p, v) => {
    Lp(p, {
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
  }), K(l), N(t, l), le(a);
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
var J2 = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const Q2 = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function Gl(t, e) {
  ae(e, !0), Ge(t, Q2);
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
  }, l = ce(), u = G(l);
  {
    var d = (h) => {
      var p = J2();
      let v;
      Pe((m) => v = _t(p, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : In(o()),
          height: typeof i() == "string" ? i() : In(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), N(h, p);
    };
    ie(u, (h) => {
      s() && h(d);
    });
  }
  return N(t, l), le(a);
}
se(Gl, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var eb = /* @__PURE__ */ ne("<div><!></div>");
const tb = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function Bp(t, e) {
  ae(e, !0), Ge(t, tb);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ me(void 0);
  Le(() => {
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
    Object.prototype.hasOwnProperty.call(fs, b.key) && (b.preventDefault(), n().moveSelectedNodes(fs[b.key], b.shiftKey ? 4 : 1));
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
  }, m = ce(), y = G(m);
  {
    var w = (b) => {
      var C = eb();
      C.__contextmenu = d, C.__click = h, C.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : p)?.apply(this, x);
      };
      let E;
      var k = Z(C);
      Gl(k, { width: "100%", height: "100%", x: 0, y: 0 }), K(C), Ot(C, (x, O) => Np?.(x, O), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, O, L, j) => {
          r()?.({ event: x, targetNode: null, nodes: j });
        },
        onDragStart: (x, O, L, j) => {
          o()?.({ event: x, targetNode: null, nodes: j });
        },
        onDragStop: (x, O, L, j) => {
          i()?.({ event: x, targetNode: null, nodes: j });
        }
      })), Et(C, (x) => R(l, x), () => c(l)), Pe(
        (x) => {
          jt(C, 1, lr(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), Ee(C, "role", n().disableKeyboardA11y ? void 0 : "button"), Ee(C, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = _t(C, "", E, x);
        },
        [
          () => ({
            width: In(c(u).width),
            height: In(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), N(b, C);
    };
    ie(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && Zn(c(u).x) && Zn(c(u).y) && b(w);
    });
  }
  return N(t, m), le(v);
}
$r(["contextmenu", "click", "keydown"]);
se(
  Bp,
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
function nb(t) {
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
function $n(t, e) {
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
              (x, O) => x | nb(O),
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
  const t = /* @__PURE__ */ $(Cn), e = (i) => {
    const s = Cc(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? Nw(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
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
        return a.replace && $2(u) ? u : { ...l, ...u };
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
      const { nodes: a, edges: l } = await _w({
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
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = ps(i, [s, a, l]);
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
    getNodesBounds: (i) => Cw(i, {
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
function Fp(t, e) {
  ae(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => Tr() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => Tr() ? "Meta" : "Control"), { deleteElements: l } = wt();
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
    set multiSelectionKey(w = Tr() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Tr() ? "Meta" : "Control") {
      a(w), f();
    }
  };
  return ns("blur", zt, v), ns("contextmenu", zt, v), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !ep(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ot(zt, (w, b) => $n?.(w, b), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), le(y);
}
se(
  Fp,
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
var rb = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__connection-path"></path>'), ob = /* @__PURE__ */ xe('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
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
      case Kn.Bezier: {
        const [v] = np(p);
        return v;
      }
      case Kn.Straight: {
        const [v] = op(p);
        return v;
      }
      case Kn.Step:
      case Kn.SmoothStep: {
        const [v] = Zl({
          ...p,
          borderRadius: r() === Kn.Step ? 0 : void 0
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
  }, u = ce(), d = G(u);
  {
    var h = (p) => {
      var v = ob(), m = Z(v), y = Z(m);
      {
        var w = (C) => {
          var E = ce(), k = G(E);
          bt(k, s, (x, O) => {
            O(x, {});
          }), N(C, E);
        }, b = (C) => {
          var E = rb();
          Pe(() => {
            Ee(E, "d", c(a)), _t(E, i());
          }), N(C, E);
        };
        ie(y, (C) => {
          s() ? C(w) : C(b, !1);
        });
      }
      K(m), K(v), Pe(
        (C) => {
          Ee(v, "width", n().width), Ee(v, "height", n().height), _t(v, o()), jt(m, 0, C);
        },
        [
          () => lr([
            "svelte-flow__connection",
            bw(n().connection.isValid)
          ])
        ]
      ), N(p, v);
    };
    ie(d, (p) => {
      n().connection.inProgress && p(h);
    });
  }
  return N(t, u), le(l);
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
var ib = /* @__PURE__ */ ne("<div><!></div>");
function vi(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "top-right"), r = g(e, "style", 7), o = g(e, "class", 7), i = g(e, "children", 7), s = /* @__PURE__ */ Ie(e, [
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
  }, u = ib();
  Ue(u, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = Z(u);
  return Oe(d, () => i() ?? ze), K(u), N(t, u), le(l);
}
se(vi, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var sb = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
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
  }, i = ce(), s = G(i);
  {
    var a = (l) => {
      vi(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = sb();
          N(u, h);
        },
        $$slots: { default: !0 }
      });
    };
    ie(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return N(t, i), le(o);
}
se(Kp, { proOptions: {}, position: {} }, [], [], !0);
var ab = /* @__PURE__ */ ne("<div><!></div>");
const lb = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function jp(t, e) {
  ae(e, !0), Ge(t, lb);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ $(() => u().class), h = /* @__PURE__ */ $(() => s1(u(), [
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
  }, m = ab();
  Ue(
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
      [En]: w
    }),
    [
      () => ({ width: In(n()), height: In(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var y = Z(m);
  return Oe(y, () => l() ?? ze), K(m), Et(m, (w) => i(w), () => i()), Bu(m, "clientHeight", a), Bu(m, "clientWidth", s), N(t, m), le(v);
}
se(
  jp,
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
var ub = /* @__PURE__ */ ne('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), cb = /* @__PURE__ */ ne("<!> <!>", 1), db = /* @__PURE__ */ ne("<!> <!> <!> <!> <!>", 1);
function Zp(t, e) {
  ae(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), p = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), C = g(e, "onnodedrag", 7), E = g(e, "onnodedragstart", 7), k = g(e, "onnodedragstop", 7), x = g(e, "onnodepointerenter", 7), O = g(e, "onnodepointermove", 7), L = g(e, "onnodepointerleave", 7), j = g(e, "onselectionclick", 7), B = g(e, "onselectioncontextmenu", 7), T = g(e, "onselectionstart", 7), _ = g(e, "onselectionend", 7), S = g(e, "onedgeclick", 7), H = g(e, "onedgecontextmenu", 7), P = g(e, "onedgepointerenter", 7), D = g(e, "onedgepointerleave", 7), A = g(e, "onpaneclick", 7), V = g(e, "onpanecontextmenu", 7), W = g(e, "panOnScrollMode", 23, () => Ir.Free), U = g(e, "preventScrolling", 7, !0), M = g(e, "zoomOnScroll", 7, !0), X = g(e, "zoomOnDoubleClick", 7, !0), Y = g(e, "zoomOnPinch", 7, !0), F = g(e, "panOnScroll", 7, !1), q = g(e, "panOnScrollSpeed", 7, 0.5), Q = g(e, "panOnDrag", 7, !0), ee = g(e, "selectionOnDrag", 7, !1), oe = g(e, "connectionLineComponent", 7), I = g(e, "connectionLineStyle", 7), te = g(e, "connectionLineContainerStyle", 7), fe = g(e, "connectionLineType", 23, () => Kn.Bezier), he = g(e, "attributionPosition", 7), re = g(e, "children", 7), ue = g(e, "nodes", 31, () => ht([])), ge = g(e, "edges", 31, () => ht([])), ye = g(e, "viewport", 31, () => {
  }), be = /* @__PURE__ */ Ie(e, [
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
  ]), de = _p({
    props: be,
    width: n(),
    height: r(),
    get nodes() {
      return ue();
    },
    set nodes(J) {
      ue(J);
    },
    get edges() {
      return ge();
    },
    set edges(J) {
      ge(J);
    },
    get viewport() {
      return ye();
    },
    set viewport(J) {
      ye(J);
    }
  });
  const we = mn(gs);
  we && we.setStore && we.setStore(de), Hr(gs, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Le(() => {
    const J = { nodes: de.selectedNodes, edges: de.selectedEdges };
    st(() => e.onselectionchange)?.(J);
    for (const Ve of de.selectionChangeHandlers.values())
      Ve(J);
  }), li(() => {
    de.reset();
  });
  var Te = {
    get width() {
      return n();
    },
    set width(J) {
      n(J), f();
    },
    get height() {
      return r();
    },
    set height(J) {
      r(J), f();
    },
    get proOptions() {
      return o();
    },
    set proOptions(J) {
      o(J), f();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(J) {
      i(J), f();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(J) {
      s(J), f();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(J) {
      a(J), f();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(J) {
      l(J), f();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(J) {
      u(J), f();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(J = 1) {
      d(J), f();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(J = 1) {
      h(J), f();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(J) {
      p(J), f();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(J) {
      v(J), f();
    },
    get onmove() {
      return m();
    },
    set onmove(J) {
      m(J), f();
    },
    get oninit() {
      return y();
    },
    set oninit(J) {
      y(J), f();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(J) {
      w(J), f();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(J) {
      b(J), f();
    },
    get onnodedrag() {
      return C();
    },
    set onnodedrag(J) {
      C(J), f();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(J) {
      E(J), f();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(J) {
      k(J), f();
    },
    get onnodepointerenter() {
      return x();
    },
    set onnodepointerenter(J) {
      x(J), f();
    },
    get onnodepointermove() {
      return O();
    },
    set onnodepointermove(J) {
      O(J), f();
    },
    get onnodepointerleave() {
      return L();
    },
    set onnodepointerleave(J) {
      L(J), f();
    },
    get onselectionclick() {
      return j();
    },
    set onselectionclick(J) {
      j(J), f();
    },
    get onselectioncontextmenu() {
      return B();
    },
    set onselectioncontextmenu(J) {
      B(J), f();
    },
    get onselectionstart() {
      return T();
    },
    set onselectionstart(J) {
      T(J), f();
    },
    get onselectionend() {
      return _();
    },
    set onselectionend(J) {
      _(J), f();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(J) {
      S(J), f();
    },
    get onedgecontextmenu() {
      return H();
    },
    set onedgecontextmenu(J) {
      H(J), f();
    },
    get onedgepointerenter() {
      return P();
    },
    set onedgepointerenter(J) {
      P(J), f();
    },
    get onedgepointerleave() {
      return D();
    },
    set onedgepointerleave(J) {
      D(J), f();
    },
    get onpaneclick() {
      return A();
    },
    set onpaneclick(J) {
      A(J), f();
    },
    get onpanecontextmenu() {
      return V();
    },
    set onpanecontextmenu(J) {
      V(J), f();
    },
    get panOnScrollMode() {
      return W();
    },
    set panOnScrollMode(J = Ir.Free) {
      W(J), f();
    },
    get preventScrolling() {
      return U();
    },
    set preventScrolling(J = !0) {
      U(J), f();
    },
    get zoomOnScroll() {
      return M();
    },
    set zoomOnScroll(J = !0) {
      M(J), f();
    },
    get zoomOnDoubleClick() {
      return X();
    },
    set zoomOnDoubleClick(J = !0) {
      X(J), f();
    },
    get zoomOnPinch() {
      return Y();
    },
    set zoomOnPinch(J = !0) {
      Y(J), f();
    },
    get panOnScroll() {
      return F();
    },
    set panOnScroll(J = !1) {
      F(J), f();
    },
    get panOnScrollSpeed() {
      return q();
    },
    set panOnScrollSpeed(J = 0.5) {
      q(J), f();
    },
    get panOnDrag() {
      return Q();
    },
    set panOnDrag(J = !0) {
      Q(J), f();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(J = !1) {
      ee(J), f();
    },
    get connectionLineComponent() {
      return oe();
    },
    set connectionLineComponent(J) {
      oe(J), f();
    },
    get connectionLineStyle() {
      return I();
    },
    set connectionLineStyle(J) {
      I(J), f();
    },
    get connectionLineContainerStyle() {
      return te();
    },
    set connectionLineContainerStyle(J) {
      te(J), f();
    },
    get connectionLineType() {
      return fe();
    },
    set connectionLineType(J = Kn.Bezier) {
      fe(J), f();
    },
    get attributionPosition() {
      return he();
    },
    set attributionPosition(J) {
      he(J), f();
    },
    get children() {
      return re();
    },
    set children(J) {
      re(J), f();
    },
    get nodes() {
      return ue();
    },
    set nodes(J = []) {
      ue(J), f();
    },
    get edges() {
      return ge();
    },
    set edges(J = []) {
      ge(J), f();
    },
    get viewport() {
      return ye();
    },
    set viewport(J = void 0) {
      ye(J), f();
    }
  };
  return jp(t, {
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
    set domNode(J) {
      de.domNode = J;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(J) {
      de.width = J;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(J) {
      de.height = J;
    },
    children: (J, Ve) => {
      var $e = db(), ke = G($e);
      Fp(ke, {
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
      var Ae = z(ke, 2);
      Ep(Ae, {
        get panOnScrollMode() {
          return W();
        },
        get preventScrolling() {
          return U();
        },
        get zoomOnScroll() {
          return M();
        },
        get zoomOnDoubleClick() {
          return X();
        },
        get zoomOnPinch() {
          return Y();
        },
        get panOnScroll() {
          return F();
        },
        get panOnScrollSpeed() {
          return q();
        },
        get panOnDrag() {
          return Q();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return ee();
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
          Pp(ot, {
            get onpaneclick() {
              return A();
            },
            get onpanecontextmenu() {
              return V();
            },
            get onselectionstart() {
              return T();
            },
            get onselectionend() {
              return _();
            },
            get panOnDrag() {
              return Q();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return ee();
            },
            get store() {
              return de;
            },
            set store(Ne) {
              de = Ne;
            },
            children: (Ne, tt) => {
              var je = cb(), at = G(je);
              Op(at, {
                get store() {
                  return de;
                },
                set store(nt) {
                  de = nt;
                },
                children: (nt, Pt) => {
                  var it = ub(), lt = z(G(it), 2);
                  Vp(lt, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return H();
                    },
                    get onedgepointerenter() {
                      return P();
                    },
                    get onedgepointerleave() {
                      return D();
                    },
                    get store() {
                      return de;
                    },
                    set store(sn) {
                      de = sn;
                    }
                  });
                  var gt = z(lt, 4);
                  Rp(gt, {
                    get type() {
                      return fe();
                    },
                    get LineComponent() {
                      return oe();
                    },
                    get containerStyle() {
                      return te();
                    },
                    get style() {
                      return I();
                    },
                    get store() {
                      return de;
                    },
                    set store(sn) {
                      de = sn;
                    }
                  });
                  var dr = z(gt, 2);
                  Ip(dr, {
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
                      return O();
                    },
                    get onnodepointerleave() {
                      return L();
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
                  var $o = z(dr, 2);
                  Bp($o, {
                    get onselectionclick() {
                      return j();
                    },
                    get onselectioncontextmenu() {
                      return B();
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
                  }), Se(2), N(nt, it);
                },
                $$slots: { default: !0 }
              });
              var Dt = z(at, 2);
              {
                let nt = /* @__PURE__ */ $(() => !!(de.selectionRect && de.selectionRectMode === "user")), Pt = /* @__PURE__ */ $(() => de.selectionRect?.width), it = /* @__PURE__ */ $(() => de.selectionRect?.height), lt = /* @__PURE__ */ $(() => de.selectionRect?.x), gt = /* @__PURE__ */ $(() => de.selectionRect?.y);
                Gl(Dt, {
                  get isVisible() {
                    return c(nt);
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
              N(Ne, je);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var qe = z(Ae, 2);
      Kp(qe, {
        get proOptions() {
          return o();
        },
        get position() {
          return he();
        }
      });
      var Qe = z(qe, 2);
      Tp(Qe, {
        get store() {
          return de;
        }
      });
      var Xe = z(Qe, 2);
      Oe(Xe, () => re() ?? ze), N(J, $e);
    },
    $$slots: { default: !0 }
  }), le(Te);
}
se(
  Zp,
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
function Wp(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ me(_p({ props: {}, nodes: [], edges: [] }));
  Hr(gs, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      R(r, a);
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
  }, i = ce(), s = G(i);
  return Oe(s, () => n() ?? ze), N(t, i), le(o);
}
se(Wp, { children: {} }, [], [], !0);
var hb = /* @__PURE__ */ ne("<button><!></button>");
function Ao(t, e) {
  ae(e, !0);
  let n = g(e, "class", 7), r = g(e, "bgColor", 7), o = g(e, "bgColorHover", 7), i = g(e, "color", 7), s = g(e, "colorHover", 7), a = g(e, "borderColor", 7), l = g(e, "onclick", 7), u = g(e, "children", 7), d = /* @__PURE__ */ Ie(e, [
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
  }, p = hb();
  Ue(p, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [En]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = Z(p);
  return Oe(v, () => u() ?? ze), K(p), N(t, p), le(h);
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
var pb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function qp(t) {
  var e = pb();
  N(t, e);
}
se(qp, {}, [], [], !0);
var fb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Yp(t) {
  var e = fb();
  N(t, e);
}
se(Yp, {}, [], [], !0);
var gb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Xp(t) {
  var e = gb();
  N(t, e);
}
se(Xp, {}, [], [], !0);
var vb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Up(t) {
  var e = vb();
  N(t, e);
}
se(Up, {}, [], [], !0);
var mb = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Gp(t) {
  var e = mb();
  N(t, e);
}
se(Gp, {}, [], [], !0);
var yb = /* @__PURE__ */ ne("<!> <!>", 1), wb = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function Jp(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "bottom-left"), r = g(e, "orientation", 7, "vertical"), o = g(e, "showZoom", 7, !0), i = g(e, "showFitView", 7, !0), s = g(e, "showLock", 7, !0), a = g(e, "style", 7), l = g(e, "class", 7), u = g(e, "buttonBgColor", 7), d = g(e, "buttonBgColorHover", 7), h = g(e, "buttonColor", 7), p = g(e, "buttonColorHover", 7), v = g(e, "buttonBorderColor", 7), m = g(e, "fitViewOptions", 7), y = g(e, "children", 7), w = g(e, "before", 7), b = g(e, "after", 7), C = /* @__PURE__ */ Ie(e, [
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
  ]), E = /* @__PURE__ */ $(Cn);
  const k = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: p(),
    borderColor: v()
  };
  let x = /* @__PURE__ */ $(() => c(E).nodesDraggable || c(E).nodesConnectable || c(E).elementsSelectable), O = /* @__PURE__ */ $(() => c(E).viewport.zoom <= c(E).minZoom), L = /* @__PURE__ */ $(() => c(E).viewport.zoom >= c(E).maxZoom), j = /* @__PURE__ */ $(() => c(E).ariaLabelConfig), B = /* @__PURE__ */ $(() => r() === "horizontal" ? "horizontal" : "vertical");
  const T = () => {
    c(E).zoomIn();
  }, _ = () => {
    c(E).zoomOut();
  }, S = () => {
    c(E).fitView(m());
  }, H = () => {
    let D = !c(x);
    c(E).nodesDraggable = D, c(E).nodesConnectable = D, c(E).elementsSelectable = D;
  };
  var P = {
    get position() {
      return n();
    },
    set position(D = "bottom-left") {
      n(D), f();
    },
    get orientation() {
      return r();
    },
    set orientation(D = "vertical") {
      r(D), f();
    },
    get showZoom() {
      return o();
    },
    set showZoom(D = !0) {
      o(D), f();
    },
    get showFitView() {
      return i();
    },
    set showFitView(D = !0) {
      i(D), f();
    },
    get showLock() {
      return s();
    },
    set showLock(D = !0) {
      s(D), f();
    },
    get style() {
      return a();
    },
    set style(D) {
      a(D), f();
    },
    get class() {
      return l();
    },
    set class(D) {
      l(D), f();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(D) {
      u(D), f();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(D) {
      d(D), f();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(D) {
      h(D), f();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(D) {
      p(D), f();
    },
    get buttonBorderColor() {
      return v();
    },
    set buttonBorderColor(D) {
      v(D), f();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(D) {
      m(D), f();
    },
    get children() {
      return y();
    },
    set children(D) {
      y(D), f();
    },
    get before() {
      return w();
    },
    set before(D) {
      w(D), f();
    },
    get after() {
      return b();
    },
    set after(D) {
      b(D), f();
    }
  };
  {
    let D = /* @__PURE__ */ $(() => [
      "svelte-flow__controls",
      c(B),
      l()
    ]);
    vi(t, He(
      {
        get class() {
          return c(D);
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
        children: (A, V) => {
          var W = wb(), U = G(W);
          {
            var M = (he) => {
              var re = ce(), ue = G(re);
              Oe(ue, w), N(he, re);
            };
            ie(U, (he) => {
              w() && he(M);
            });
          }
          var X = z(U, 2);
          {
            var Y = (he) => {
              var re = yb(), ue = G(re);
              Ao(ue, He(
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
                    return c(L);
                  }
                },
                () => k,
                {
                  children: (ye, be) => {
                    qp(ye);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ge = z(ue, 2);
              Ao(ge, He(
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
                    return c(O);
                  }
                },
                () => k,
                {
                  children: (ye, be) => {
                    Yp(ye);
                  },
                  $$slots: { default: !0 }
                }
              )), N(he, re);
            };
            ie(X, (he) => {
              o() && he(Y);
            });
          }
          var F = z(X, 2);
          {
            var q = (he) => {
              Ao(he, He(
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
            ie(F, (he) => {
              i() && he(q);
            });
          }
          var Q = z(F, 2);
          {
            var ee = (he) => {
              Ao(he, He(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: H,
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
                    var ge = ce(), ye = G(ge);
                    {
                      var be = (we) => {
                        Gp(we);
                      }, de = (we) => {
                        Up(we);
                      };
                      ie(ye, (we) => {
                        c(x) ? we(be) : we(de, !1);
                      });
                    }
                    N(re, ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ie(Q, (he) => {
              s() && he(ee);
            });
          }
          var oe = z(Q, 2);
          {
            var I = (he) => {
              var re = ce(), ue = G(re);
              Oe(ue, y), N(he, re);
            };
            ie(oe, (he) => {
              y() && he(I);
            });
          }
          var te = z(oe, 2);
          {
            var fe = (he) => {
              var re = ce(), ue = G(re);
              Oe(ue, b), N(he, re);
            };
            ie(te, (he) => {
              b() && he(fe);
            });
          }
          N(A, W);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return le(P);
}
se(
  Jp,
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
var bb = /* @__PURE__ */ xe("<circle></circle>");
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
  }, i = bb();
  return Pe(() => {
    Ee(i, "cx", n()), Ee(i, "cy", n()), Ee(i, "r", n()), jt(i, 0, lr(["svelte-flow__background-pattern", "dots", r()]));
  }), N(t, i), le(o);
}
se(Qp, { radius: {}, class: {} }, [], [], !0);
var xb = /* @__PURE__ */ xe("<path></path>");
function ef(t, e) {
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
  }, a = xb();
  return Pe(() => {
    Ee(a, "stroke-width", n()), Ee(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), jt(a, 0, lr(["svelte-flow__background-pattern", o(), i()]));
  }), N(t, a), le(s);
}
se(ef, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Cb = {
  [Wn.Dots]: 1,
  [Wn.Lines]: 1,
  [Wn.Cross]: 6
};
var kb = /* @__PURE__ */ xe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function tf(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => Wn.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ $(Cn), p = /* @__PURE__ */ $(() => r() === Wn.Dots), v = /* @__PURE__ */ $(() => r() === Wn.Cross), m = /* @__PURE__ */ $(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ $(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ $(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ $(() => (i() ?? Cb[r()]) * c(h).viewport.zoom), C = /* @__PURE__ */ $(() => c(v) ? [c(b), c(b)] : c(w)), E = /* @__PURE__ */ $(() => c(p) ? [c(b) / 2, c(b) / 2] : [
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
  }, x = kb();
  let O;
  var L = Z(x), j = Z(L);
  {
    var B = (S) => {
      {
        let H = /* @__PURE__ */ $(() => c(b) / 2);
        Qp(S, {
          get radius() {
            return c(H);
          },
          get class() {
            return u();
          }
        });
      }
    }, T = (S) => {
      ef(S, {
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
      c(p) ? S(B) : S(T, !1);
    });
  }
  K(L);
  var _ = z(L);
  return K(x), Pe(() => {
    jt(x, 0, lr([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), O = _t(x, "", O, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Ee(L, "id", c(y)), Ee(L, "x", c(h).viewport.x % c(w)[0]), Ee(L, "y", c(h).viewport.y % c(w)[1]), Ee(L, "width", c(w)[0]), Ee(L, "height", c(w)[1]), Ee(L, "patternTransform", `translate(-${c(E)[0]},-${c(E)[1]})`), Ee(_, "fill", `url(#${c(y)})`);
  }), N(t, x), le(k);
}
se(
  tf,
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
var $b = /* @__PURE__ */ xe("<rect></rect>");
function nf(t, e) {
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
  }, w = ce(), b = G(w);
  {
    var C = (k) => {
      const x = /* @__PURE__ */ $(m);
      var O = ce(), L = G(O);
      bt(L, () => c(x), (j, B) => {
        B(j, {
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
      }), N(k, O);
    }, E = (k) => {
      var x = $b();
      let O, L;
      Pe(() => {
        O = jt(x, 0, lr(["svelte-flow__minimap-node", v()]), null, O, { selected: p() }), Ee(x, "x", r()), Ee(x, "y", o()), Ee(x, "rx", a()), Ee(x, "ry", a()), Ee(x, "width", i()), Ee(x, "height", s()), Ee(x, "shape-rendering", u()), L = _t(x, "", L, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), N(k, x);
    };
    ie(b, (k) => {
      m() ? k(C) : k(E, !1);
    });
  }
  return N(t, w), le(y);
}
se(
  nf,
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
function Sb(t, e) {
  const n = d2({
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
var _b = /* @__PURE__ */ xe("<title> </title>"), Eb = /* @__PURE__ */ xe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Pb = /* @__PURE__ */ ne('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function rf(t, e) {
  ae(e, !0);
  let n = g(e, "position", 7, "bottom-right"), r = g(e, "ariaLabel", 7), o = g(e, "nodeStrokeColor", 7, "transparent"), i = g(e, "nodeColor", 7), s = g(e, "nodeClass", 7, ""), a = g(e, "nodeBorderRadius", 7, 5), l = g(e, "nodeStrokeWidth", 7, 2), u = g(e, "nodeComponent", 7), d = g(e, "bgColor", 7), h = g(e, "maskColor", 7), p = g(e, "maskStrokeColor", 7), v = g(e, "maskStrokeWidth", 7), m = g(e, "width", 7, 200), y = g(e, "height", 7, 150), w = g(e, "pannable", 7, !0), b = g(e, "zoomable", 7, !0), C = g(e, "inversePan", 7), E = g(e, "zoomStep", 7), k = g(e, "class", 7), x = /* @__PURE__ */ Ie(e, [
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
  ]), O = /* @__PURE__ */ $(Cn), L = /* @__PURE__ */ $(() => c(O).ariaLabelConfig);
  const j = i() === void 0 ? void 0 : ba(i()), B = ba(o()), T = ba(s()), _ = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ $(() => `svelte-flow__minimap-desc-${c(O).flowId}`), H = /* @__PURE__ */ $(() => ({
    x: -c(O).viewport.x / c(O).viewport.zoom,
    y: -c(O).viewport.y / c(O).viewport.zoom,
    width: c(O).width / c(O).viewport.zoom,
    height: c(O).height / c(O).viewport.zoom
  })), P = /* @__PURE__ */ $(() => Uh(hi(c(O).nodeLookup, { filter: (te) => !te.hidden }), c(H))), D = /* @__PURE__ */ $(() => c(P).width / m()), A = /* @__PURE__ */ $(() => c(P).height / y()), V = /* @__PURE__ */ $(() => Math.max(c(D), c(A))), W = /* @__PURE__ */ $(() => c(V) * m()), U = /* @__PURE__ */ $(() => c(V) * y()), M = /* @__PURE__ */ $(() => 5 * c(V)), X = /* @__PURE__ */ $(() => c(P).x - (c(W) - c(P).width) / 2 - c(M)), Y = /* @__PURE__ */ $(() => c(P).y - (c(U) - c(P).height) / 2 - c(M)), F = /* @__PURE__ */ $(() => c(W) + c(M) * 2), q = /* @__PURE__ */ $(() => c(U) + c(M) * 2);
  const Q = () => c(V);
  var ee = {
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
      return C();
    },
    set inversePan(te) {
      C(te), f();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(te) {
      E(te), f();
    },
    get class() {
      return k();
    },
    set class(te) {
      k(te), f();
    }
  }, oe = Pb(), I = G(oe);
  {
    let te = /* @__PURE__ */ $(() => ["svelte-flow__minimap", k()]);
    x1(I, () => ({ "--xy-minimap-background-color-props": d() })), vi(I.lastChild, He(
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
        children: (fe, he) => {
          var re = ce(), ue = G(re);
          {
            var ge = (ye) => {
              var be = Eb();
              let de;
              var we = Z(be);
              {
                var Te = ($e) => {
                  var ke = _b(), Ae = Z(ke, !0);
                  K(ke), Pe(() => {
                    Ee(ke, "id", c(S)), et(Ae, r() ?? c(L)["minimap.ariaLabel"]);
                  }), N($e, ke);
                };
                ie(we, ($e) => {
                  (r() ?? c(L)["minimap.ariaLabel"]) && $e(Te);
                });
              }
              var J = z(we);
              Ct(J, 17, () => c(O).nodes, ($e) => $e.id, ($e, ke) => {
                const Ae = /* @__PURE__ */ $(() => c(O).nodeLookup.get(c(ke).id));
                var qe = ce(), Qe = G(qe);
                {
                  var Xe = (ot) => {
                    const ve = /* @__PURE__ */ $(() => Sr(c(Ae)));
                    {
                      let Ne = /* @__PURE__ */ $(() => j?.(c(Ae))), tt = /* @__PURE__ */ $(() => B(c(Ae))), je = /* @__PURE__ */ $(() => T(c(Ae)));
                      nf(ot, He(
                        {
                          get id() {
                            return c(Ae).id;
                          },
                          get x() {
                            return c(Ae).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ae).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ve),
                        {
                          get selected() {
                            return c(Ae).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ne);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(tt);
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
                  ie(Qe, (ot) => {
                    c(Ae) && Gh(c(Ae)) && !c(Ae).hidden && ot(Xe);
                  });
                }
                N($e, qe);
              });
              var Ve = z(J);
              K(be), Ot(be, ($e, ke) => Sb?.($e, ke), () => ({
                store: c(O),
                panZoom: c(O).panZoom,
                getViewScale: Q,
                translateExtent: c(O).translateExtent,
                width: c(O).width,
                height: c(O).height,
                inversePan: C(),
                zoomStep: E(),
                pannable: w(),
                zoomable: b()
              })), Pe(() => {
                Ee(be, "width", m()), Ee(be, "height", y()), Ee(be, "viewBox", `${c(X) ?? ""} ${c(Y) ?? ""} ${c(F) ?? ""} ${c(q) ?? ""}`), Ee(be, "aria-labelledby", c(S)), de = _t(be, "", de, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(V) : void 0
                }), Ee(Ve, "d", `M${c(X) - c(M)},${c(Y) - c(M)}h${c(F) + c(M) * 2}v${c(q) + c(M) * 2}h${-c(F) - c(M) * 2}z
      M${c(H).x ?? ""},${c(H).y ?? ""}h${c(H).width ?? ""}v${c(H).height ?? ""}h${-c(H).width}z`);
              }), N(ye, be);
            };
            ie(ue, (ye) => {
              c(O).panZoom && ye(ge);
            });
          }
          N(fe, re);
        },
        $$slots: { default: !0 }
      }
    )), K(I);
  }
  return N(t, oe), le(ee);
}
se(
  rf,
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
var Ob = /* @__PURE__ */ ne("<div><!></div>");
function of(t, e) {
  ae(e, !0);
  let n = g(e, "nodeId", 7), r = g(e, "position", 23, () => _e.Top), o = g(e, "align", 7, "center"), i = g(e, "offset", 7, 10), s = g(e, "isVisible", 7), a = g(e, "children", 7), l = /* @__PURE__ */ Ie(e, [
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
  const u = Cn(), { getNodesBounds: d } = wt(), h = mn("svelteflow__node_id");
  let p = /* @__PURE__ */ $(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (x, O) => {
      const L = u.nodeLookup.get(O);
      return L && x.push(L), x;
    },
    []
  ))), v = /* @__PURE__ */ $(() => {
    const x = d(c(p));
    return x ? jw(x, u.viewport, r(), i(), o()) : "";
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
  }, C = ce(), E = G(C);
  {
    var k = (x) => {
      var O = Ob();
      Ue(
        O,
        (j, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": j,
          ...l,
          [En]: B
        }),
        [
          () => c(p).reduce((j, B) => `${j}${B.id} `, "").trim(),
          () => ({
            display: yp().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var L = Z(O);
      Oe(L, () => a() ?? ze), K(O), Ot(O, (j, B) => mp?.(j, B), () => "root"), N(x, O);
    };
    ie(E, (x) => {
      u.domNode && c(w) && c(p) && x(k);
    });
  }
  return N(t, C), le(b);
}
se(
  of,
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
function ur(t) {
  const e = /* @__PURE__ */ $(Cn), n = /* @__PURE__ */ $(() => c(e).nodes), r = /* @__PURE__ */ $(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ $(() => {
    c(n);
    const a = [], l = Array.isArray(t), u = l ? t : [t];
    for (const d of u) {
      const h = c(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!n2(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Pc = "tinyflow-component", Nb = [
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
], Oc = [
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
], Jl = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], sf = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], af = [
  // { label: '单行输入框', value: 'input' },
  // { label: '多行输入框', value: 'textarea' },
  // { label: '下拉菜单', value: 'select' },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Tb = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], lf = typeof window < "u" ? window : void 0;
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
    const { window: e = lf, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = jr((r) => {
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
function Mb(t, e) {
  switch (t) {
    case "post":
      Le(e);
      break;
    case "pre":
      Vt(e);
      break;
  }
}
function uf(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Mb(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = st(() => n(a, s));
    return s = a, l;
  });
}
function Ql(t, e, n) {
  uf(t, "post", e, n);
}
function Ib(t, e, n) {
  uf(t, "pre", e, n);
}
Ql.pre = Ib;
function Lb(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class cf {
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
      window: a = lf
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = Lb(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = jr(() => pt(a, "storage", this.#a)));
  }
  get current() {
    this.#o?.(), c(this.#i);
    const e = this.#s(this.#r?.getItem(this.#t)) ?? this.#e, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (c(this.#i), r(Reflect.get(s, a))),
        set: (s, a, l) => (R(this.#i, c(this.#i) + 1), Reflect.set(s, a, l), this.#l(e), !0)
      }), n.set(o, i)), i;
    };
    return r(e);
  }
  set current(e) {
    this.#l(e), R(this.#i, c(this.#i) + 1);
  }
  #a = (e) => {
    e.key !== this.#t || e.newValue === null || (this.#e = this.#s(e.newValue), R(this.#i, c(this.#i) + 1));
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
function Nc(t) {
  return t.filter((e) => e.length > 0);
}
const df = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, mi = typeof document < "u";
function Hb(t) {
  return typeof t == "function";
}
function zb(t) {
  return t !== null && typeof t == "object";
}
const Jo = Symbol("box"), eu = Symbol("is-writable");
function Vb(t) {
  return zb(t) && Jo in t;
}
function Bb(t) {
  return mt.isBox(t) && eu in t;
}
function mt(t) {
  let e = /* @__PURE__ */ me(ht(t));
  return {
    [Jo]: !0,
    [eu]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      R(e, n, !0);
    }
  };
}
function Fb(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [Jo]: !0,
    [eu]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Jo]: !0,
    get current() {
      return t();
    }
  };
}
function Rb(t) {
  return mt.isBox(t) ? t : Hb(t) ? mt.with(t) : mt(t);
}
function Kb(t) {
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
    [Jo]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
mt.from = Rb;
mt.with = Fb;
mt.flatten = Kb;
mt.readonly = jb;
mt.isBox = Vb;
mt.isWritableBox = Bb;
var Tc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Zb = /\n/g, Wb = /^\s*/, qb = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Yb = /^:\s*/, Xb = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Ub = /^[;\s]*/, Gb = /^\s+|\s+$/g, Jb = `
`, Dc = "/", Ac = "*", Pr = "", Qb = "comment", ex = "declaration";
function tx(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(Zb);
    y && (n += y.length);
    var w = m.lastIndexOf(Jb);
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
    if (!(Dc != t.charAt(0) || Ac != t.charAt(1))) {
      for (var y = 2; Pr != t.charAt(y) && (Ac != t.charAt(y) || Dc != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Pr === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: Qb,
        comment: w
      });
    }
  }
  function p() {
    var m = i(), y = l(qb);
    if (y) {
      if (h(), !l(Yb)) return a("property missing ':'");
      var w = l(Xb), b = m({
        type: ex,
        property: Mc(y[0].replace(Tc, Pr)),
        value: w ? Mc(w[0].replace(Tc, Pr)) : Pr
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
function Mc(t) {
  return t ? t.replace(Gb, Pr) : Pr;
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
    e !== void 0 && (this.#e = n, this.#t = jr((r) => {
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
const Dr = mt("mode-watcher-mode"), Ar = mt("mode-watcher-theme"), dx = ["dark", "light", "system"];
function Za(t) {
  return typeof t != "string" ? !1 : dx.includes(t);
}
class hx {
  #e = "system";
  #t = mi ? localStorage : df;
  #n = this.#t.getItem(Dr.current);
  #r = Za(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ me(ht(this.#i()));
  #i(e = this.#r) {
    return new cf(Dr.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => Za(n) ? n : this.#e
      }
    });
  }
  constructor() {
    Zr(() => Ql.pre(() => Dr.current, (e, n) => {
      const r = c(this.#o).current;
      R(this.#o, this.#i(r), !0), n && localStorage.removeItem(n);
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
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new kp("prefers-color-scheme: light") : { current: !1 };
  query() {
    mi && R(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    Zr(() => {
      Vt(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Wa = new hx(), Qo = new px();
class fx {
  #e = mi ? localStorage : df;
  #t = this.#e.getItem(Ar.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ me(ht(this.#o()));
  #o(e = this.#n) {
    return new cf(Ar.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    Zr(() => Ql.pre(() => Ar.current, (e, n) => {
      const r = c(this.#r).current;
      R(this.#r, this.#o(r), !0), n && localStorage.removeItem(n);
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
const Wi = new fx();
let Ic, Lc, Hc = !1, Di = null;
function gx() {
  return Di || (Di = document.createElement("style"), Di.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), Di);
}
function hf(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!Hc) {
    Hc = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(Ic), clearTimeout(Lc);
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
  r(), Ic = window.setTimeout(() => {
    t(), Lc = window.setTimeout(o, 16);
  }, 16);
}
const pr = mt(void 0), vs = mt(!0), ms = mt(!1), qa = mt([]), Ya = mt([]);
function vx() {
  const t = /* @__PURE__ */ $(() => {
    if (!mi) return;
    const e = Wa.current === "system" ? Qo.current : Wa.current, n = Nc(qa.current), r = Nc(Ya.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && pr.current && s.setAttribute("content", pr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && pr.current && s.setAttribute("content", pr.current.dark));
    }
    return vs.current ? hf(o, ms.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function mx() {
  const t = /* @__PURE__ */ $(() => {
    if (Wi.current, !mi) return;
    function e() {
      document.documentElement.setAttribute("data-theme", Wi.current);
    }
    return vs.current ? hf(e, st(() => ms.current)) : e(), Wi.current;
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
  Wi.current = t;
}
function Cx({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var kx = /* @__PURE__ */ ne('<meta name="theme-color"/>');
function pf(t, e) {
  ae(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), f();
    }
  }, o = ce(), i = G(o);
  {
    var s = (a) => {
      var l = kx();
      Pe(() => Ee(l, "content", n().dark)), N(a, l);
    };
    ie(i, (a) => {
      n() && a(s);
    });
  }
  return N(t, o), le(r);
}
se(pf, { themeColors: {} }, [], [], !0);
var $x = /* @__PURE__ */ ne('<meta name="theme-color"/>'), Sx = /* @__PURE__ */ ne("<!> <!>", 1);
function ff(t, e) {
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
  return C1("1lz8xnp", (s) => {
    var a = Sx(), l = G(a);
    {
      var u = (h) => {
        var p = $x();
        Pe(() => Ee(p, "content", o().dark)), N(h, p);
      };
      ie(l, (h) => {
        o() && h(u);
      });
    }
    var d = z(l, 2);
    Rs(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + Cx.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), N(s, a);
  }), le(i);
}
se(ff, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function _x(t, e) {
  ae(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), p = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  Dr.current = h(), Ar.current = d(), qa.current = s(), Ya.current = a(), vs.current = i(), pr.current = o(), ms.current = v(), Vt(() => {
    ms.current = v();
  }), Vt(() => {
    vs.current = i();
  }), Vt(() => {
    pr.current = o();
  }), Vt(() => {
    qa.current = s();
  }), Vt(() => {
    Ya.current = a();
  }), Vt(() => {
    Dr.current = h();
  }), Vt(() => {
    Ar.current = d();
  }), Vt(() => {
    yx.current, Dr.current, Ar.current, wx.current;
  }), bn(() => {
    Qo.tracking(n()), Qo.query();
    const x = localStorage.getItem(Dr.current);
    bx(Za(x) ? x : r());
    const O = localStorage.getItem(Ar.current);
    xx(O || l());
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
  }, b = ce(), C = G(b);
  {
    var E = (x) => {
      pf(x, {
        get themeColors() {
          return pr.current;
        }
      });
    }, k = (x) => {
      ff(x, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return pr.current;
        }
      });
    };
    ie(C, (x) => {
      p() ? x(E) : x(k, !1);
    });
  }
  return N(t, b), le(w);
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
    (!e.defaultTheme || e.defaultTheme === "system") && (e.defaultTheme = Qo.current), this._setOptions(e), this._init();
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
    e === "system" ? this.options.defaultTheme = Qo.current : this.options.defaultTheme = e, this.destroy(), this._init();
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
      R(t, r), R(e, o);
    },
    getNodes: () => c(t),
    setNodes: (r) => {
      R(t, r);
    },
    getEdges: () => c(e),
    setEdges: (r) => {
      R(e, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      R(n, r);
    },
    getNode: (r) => c(t).find((o) => o.id === r),
    addNode: (r) => {
      R(t, [...c(t), r]);
    },
    removeNode: (r) => {
      R(t, c(t).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      R(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      R(t, r(c(t)));
    },
    updateNodeData: (r, o) => {
      R(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      R(t, c(t).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(e).find((o) => o.id === r),
    addEdge: (r) => {
      R(e, [...c(e), r]);
    },
    removeEdge: (r) => {
      R(e, c(e).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      R(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      R(e, r(c(e)));
    },
    updateEdgeData: (r, o) => {
      R(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Re = Px();
function pn(...t) {
  return Ho(t);
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
var Ox = /* @__PURE__ */ ne("<a><!></a>"), Nx = /* @__PURE__ */ ne("<button><!></button>");
function Ke(t, e) {
  ae(e, !0);
  let n = g(e, "class", 7), r = g(e, "variant", 7, "outline"), o = g(e, "size", 7, "default"), i = g(e, "ref", 15, null), s = g(e, "href", 23, () => {
  }), a = g(e, "type", 7, "button"), l = g(e, "disabled", 7), u = g(e, "children", 7), d = g(e, "primary", 7), h = /* @__PURE__ */ Ie(e, [
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
  }, v = ce(), m = G(v);
  {
    var y = (b) => {
      var C = Ox();
      Ue(
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
      Oe(E, () => u() ?? ze), K(C), Et(C, (k) => i(k), () => i()), N(b, C);
    }, w = (b) => {
      var C = Nx();
      Ue(
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
      Oe(E, () => u() ?? ze), K(C), Et(C, (k) => i(k), () => i()), N(b, C);
    };
    ie(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return N(t, v), le(p);
}
se(
  Ke,
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
function Xa(t) {
  return t == null || Dx.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => Xa(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const ys = Symbol("box"), gf = Symbol("is-writable");
function pe(t, e) {
  const n = /* @__PURE__ */ $(t);
  return e ? {
    [ys]: !0,
    [gf]: !0,
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
function vf(t) {
  return yi(t) && ys in t;
}
function Ax(t) {
  return vf(t) ? t : Tx(t) ? pe(t) : On(t);
}
function On(t) {
  let e = /* @__PURE__ */ me(ht(t));
  return {
    [ys]: !0,
    [gf]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      R(e, n, !0);
    }
  };
}
function mf(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
const Mx = /\d/, Ix = ["-", "_", "/", "."];
function Lx(t = "") {
  if (!Mx.test(t))
    return t !== t.toLowerCase();
}
function Hx(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = Ix.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = Lx(i);
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
function yf(t) {
  return t ? Hx(t).map((e) => Vx(e)).join("") : "";
}
function zx(t) {
  return Bx(yf(t || ""));
}
function Vx(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function Bx(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function Mo(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[yf(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[zx(r)] = o;
  }
  return nx(t, n), e;
}
function Vo(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function Fx(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const Rx = Fx(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function Kx(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${Rx(e)}: ${t[e]};`).join(`
`);
}
function tu(t = {}) {
  return Kx(t).replace(`
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
function An(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && Wx(o)) {
          const u = i, d = s;
          e[o] = mf(u, d);
        } else if (a && l)
          e[o] = Vo(i, s);
        else if (o === "class") {
          const u = Xa(i), d = Xa(s);
          u && d ? e[o] = Ho(i, s) : u ? e[o] = Ho(i) : d && (e[o] = Ho(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", h = typeof i == "string", p = typeof s == "string";
          if (u && d)
            e[o] = { ...i, ...s };
          else if (u && p) {
            const v = Mo(s);
            e[o] = { ...i, ...v };
          } else if (h && d) {
            const v = Mo(i);
            e[o] = { ...v, ...s };
          } else if (h && p) {
            const v = Mo(i), m = Mo(s);
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
}, Yx = tu(qx), wf = typeof window < "u" ? window : void 0;
function Xx(t) {
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
    const { window: n = wf, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = jr((o) => {
      const i = pt(n, "focusin", o), s = pt(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? Xx(this.#e) : null;
  }
}
new Ux();
function Gx(t) {
  return typeof t == "function";
}
class _r {
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
    return Iv(this.#t);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const e = mn(this.#t);
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
    const n = mn(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return Hr(this.#t, e);
  }
}
function Jx(t, e) {
  switch (t) {
    case "post":
      Le(e);
      break;
    case "pre":
      Vt(e);
      break;
  }
}
function bf(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  Jx(e, () => {
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
  bf(t, "post", e, n);
}
function Qx(t, e, n) {
  bf(t, "pre", e, n);
}
yt.pre = Qx;
function Bc(t) {
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
    const e = Bc(this.#r);
    if (e)
      return jr((n) => {
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
    this.#o = n.window ?? wf, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = Bc(this.#r);
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
  Le(() => () => {
    t();
  });
}
function n7(t) {
  Le(() => st(() => t()));
}
function r7(t, e) {
  return setTimeout(e, t);
}
function wi(t) {
  rh().then(t);
}
const o7 = 1, i7 = 9, s7 = 11;
function Ua(t) {
  return yi(t) && t.nodeType === o7 && typeof t.nodeName == "string";
}
function xf(t) {
  return yi(t) && t.nodeType === i7;
}
function a7(t) {
  return yi(t) && t.constructor?.name === "VisualViewport";
}
function l7(t) {
  return yi(t) && t.nodeType !== void 0;
}
function Cf(t) {
  return l7(t) && t.nodeType === s7 && "host" in t;
}
function u7(t, e) {
  if (!t || !e || !Ua(t) || !Ua(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && Cf(n)) {
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
  return xf(t) ? t : a7(t) ? t.document : t?.ownerDocument ?? document;
}
function kf(t) {
  return Cf(t) ? kf(t.host) : xf(t) ? t.defaultView ?? window : Ua(t) ? t.ownerDocument?.defaultView ?? window : window;
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
    R(this.#e, e);
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
    [w1()]: (n) => vf(t) ? (t.current = n, st(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), st(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function Ga(t) {
  return t ? "true" : "false";
}
function ws(t) {
  return t ? "" : void 0;
}
function Fc(t) {
  return t ? !0 : void 0;
}
function $f(t) {
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
const Io = "ArrowDown", Gr = "ArrowUp", Sf = "End", Ja = "Enter", f7 = "Escape", _f = "Home", Ef = "PageDown", Pf = "PageUp", qi = " ", Rc = "Tab", Of = typeof document < "u", Qa = g7();
function g7() {
  return Of && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
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
    this.#e = e, R(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new y7({ ref: this.#e.ref, afterTick: this.#e.open }), yt(() => this.#e.open.current, (n) => {
      n && R(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || R(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function Be() {
}
function Ln(t, e) {
  return `bits-${t}`;
}
function Nf(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), f();
    }
  }, o = ce(), i = G(o);
  return b1(i, n, (s) => {
    var a = ce(), l = G(a);
    Oe(l, () => n() ?? ze), N(s, a);
  }), N(t, o), le(r);
}
se(Nf, { children: {} }, [], [], !0);
const b7 = new _r("BitsConfig");
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
  const i = S7(() => n()), s = Lv();
  let a = /* @__PURE__ */ $(l);
  function l() {
    if (!Of || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (lh(u), u = null);
  }
  yt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = Dl(Nf, { target: y, props: { children: r() }, context: s }), () => {
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
  }, p = ce(), v = G(p);
  {
    var m = (y) => {
      var w = ce(), b = G(w);
      Oe(b, () => r() ?? ze), N(y, w);
    };
    ie(v, (y) => {
      o() && y(m);
    });
  }
  return N(t, p), le(h);
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
function Tf(t, e) {
  return t === e || t.contains(e);
}
function Df(t) {
  return t?.ownerDocument ?? document;
}
function _7(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var Af = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], nl = /* @__PURE__ */ Af.join(","), Mf = typeof Element > "u", go = Mf ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, bs = !Mf && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, xs = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : xs(t.parentNode));
  return i;
}, E7 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, If = function(t, e, n) {
  if (xs(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(nl));
  return e && go.call(t, nl) && r.unshift(t), r = r.filter(n), r;
}, Cs = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!xs(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = Cs(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = go.call(i, nl);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !xs(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (d && h) {
          var p = Cs(d === !0 ? i.children : d.children, !0, n);
          n.flatten ? r.push.apply(r, p) : r.push({
            scopeParent: i,
            candidates: p
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return r;
}, Lf = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Hf = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || E7(t)) && !Lf(t) ? 0 : t.tabIndex;
}, P7 = function(t, e) {
  var n = Hf(t);
  return n < 0 && e && !Lf(t) ? 0 : n;
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
  var e = t.form || bs(t), n = function(i) {
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
}, M7 = function(t) {
  return zf(t) && t.type === "radio";
}, I7 = function(t) {
  return M7(t) && !A7(t);
}, L7 = function(t) {
  var e, n = t && bs(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = bs(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, jc = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, H7 = function(t, e) {
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
        var l = t.parentElement, u = bs(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return jc(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (L7(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return jc(t);
  return !1;
}, z7 = function(t) {
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
}, ks = function(t, e) {
  return !(e.disabled || N7(e) || H7(e, t) || // For a details element with a summary, the summary element gets the focus
  T7(e) || z7(e));
}, Zc = function(t, e) {
  return !(I7(e) || Hf(e) < 0 || !ks(t, e));
}, V7 = function(t) {
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
  return e.getShadowRoot ? n = Cs([t], e.includeContainer, {
    filter: Zc.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: V7
  }) : n = If(t, e.includeContainer, Zc.bind(null, e)), Vf(n);
}, F7 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = Cs([t], e.includeContainer, {
    filter: ks.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = If(t, e.includeContainer, ks.bind(null, e)), n;
}, R7 = /* @__PURE__ */ Af.concat("iframe:not([inert]):not([inert] *)").join(","), K7 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return go.call(t, R7) === !1 ? !1 : ks(e, t);
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
      return Wc(h, Math.max(p, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = Wc(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function Wc(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const Y7 = { afterMs: 1e4, onChange: Be };
function Bf(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...Y7, ...e };
  let i = null, s = /* @__PURE__ */ me(ht(t));
  function a() {
    return o().setTimeout(
      () => {
        R(s, t, !0), r?.(t);
      },
      n
    );
  }
  return Le(() => () => {
    i && o().clearTimeout(i);
  }), pe(() => c(s), (l) => {
    R(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class X7 {
  #e;
  #t;
  #n = /* @__PURE__ */ $(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ $(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = Bf("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
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
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, Le(() => {
      this.#i = Df(this.opts.ref.current);
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
    return Vo(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      pt(this.#i, "pointerdown", Vo(this.#h, this.#p), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      pt(this.#i, "pointerdown", Vo(this.#f, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      pt(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = qc(e)), this.#e.current(e);
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
      if (r.defaultPrevented && (r = qc(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
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
    this.opts.ref.current && (this.#r = Q7(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? Tf(this.opts.ref.current, e) : !1;
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
function J7(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function Q7(t) {
  const e = [...globalThis.bitsDismissableLayers], n = J7(e);
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
  return r && o ? !1 : Df(n).documentElement.contains(n) && !Tf(e, n) && _7(t, e);
}
function qc(t) {
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
function Ff(t, e) {
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
  }, p = ce(), v = G(p);
  return Oe(v, () => s() ?? ze, () => ({ props: d.props })), N(t, p), le(h);
}
se(
  Ff,
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
  }, l = ce(), u = G(l);
  return Oe(u, () => o() ?? ze), N(t, l), le(a);
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
  #e = On([]);
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
          if (l && e.contains(l) && K7(l))
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
    return this.#t ? F7(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
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
  }, h = ce(), p = G(h);
  return Oe(p, () => a() ?? ze, () => ({ props: u.props })), N(t, h), le(d);
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
    return Vo(pt(this.domContext.getDocument(), "pointerdown", this.#n), pt(this.domContext.getDocument(), "pointerup", mf(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !el(n) || !el(r) || !this.opts.enabled.current || !r5(this) || !u7(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = n5(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Be;
  };
}
const Yc = (t) => t.style.userSelect || t.style.webkitUserSelect;
function n5(t, e) {
  const n = Yc(e), r = Yc(t);
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
function jf(t, e) {
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
  }, d = ce(), h = G(d);
  return Oe(h, () => s() ?? ze), N(t, d), le(u);
}
se(
  jf,
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
function $s(t = "bits") {
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
    this.#t -= 1, this.#r && this.#t <= 0 && (this.#r(), R(this.#n, void 0), this.#r = void 0);
  }
  get(...e) {
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = Zr(() => {
      R(this.#n, this.#e(...e), !0);
    })), Le(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const Yi = new O2();
let Mi = /* @__PURE__ */ me(null), xa = null, Po = null, Oo = !1;
const Xc = pe(() => {
  for (const t of Yi.values())
    if (t) return !0;
  return !1;
});
let Ca = null;
const i5 = new o5(() => {
  function t() {
    document.body.setAttribute("style", c(Mi) ?? ""), document.body.style.removeProperty("--scrollbar-width"), Qa && xa?.(), R(Mi, null);
  }
  function e() {
    Po !== null && (window.clearTimeout(Po), Po = null);
  }
  function n(o, i) {
    e(), Oo = !0, Ca = Date.now();
    const s = Ca, a = () => {
      Po = null, Ca === s && (Zf(Yi) ? Oo = !1 : (Oo = !1, i()));
    }, l = o === null ? 24 : o;
    Po = window.setTimeout(a, l);
  }
  function r() {
    c(Mi) === null && Yi.size === 0 && !Oo && R(Mi, document.body.getAttribute("style"), !0);
  }
  return yt(() => Xc.current, () => {
    if (!Xc.current) return;
    r(), Oo = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", Qa && (xa = pt(
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
      return Yi;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class s5 {
  #e = $s();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = i5.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = pe(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), xo(() => {
      if (this.#r.lockMap.delete(this.#e), Zf(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function Zf(t) {
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
}), l5 = new _r("Checkbox.Group"), Wf = new _r("Checkbox.Root");
class uu {
  static create(e, n = null) {
    return Wf.set(new uu(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ $(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    R(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    R(this.#t, e);
  }
  #n = /* @__PURE__ */ $(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    R(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(e) {
    R(this.#r, e);
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
      if (e.key === Ja) {
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
  #i = /* @__PURE__ */ $(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#i);
  }
  set snippetProps(e) {
    R(this.#i, e);
  }
  #a = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": h7(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": Ga(this.trueRequired),
    "aria-readonly": Ga(this.trueReadonly),
    "data-disabled": ws(this.trueDisabled),
    "data-readonly": ws(this.trueReadonly),
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
    R(this.#a, e);
  }
}
class cu {
  static create() {
    return new cu(Wf.get());
  }
  root;
  #e = /* @__PURE__ */ $(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    R(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => !!this.root.trueName);
  get shouldRender() {
    return c(this.#t);
  }
  set shouldRender(e) {
    R(this.#t, e);
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
    R(this.#n, e);
  }
}
function u5(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var c5 = /* @__PURE__ */ ne("<input/>"), d5 = /* @__PURE__ */ ne("<input/>");
function du(t, e) {
  ae(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ $(() => An(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: Yx
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), f();
    }
  }, s = ce(), a = G(s);
  {
    var l = (d) => {
      var h = c5();
      Ue(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), N(d, h);
    }, u = (d) => {
      var h = d5();
      Ue(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), rs(h, n), N(d, h);
    };
    ie(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return N(t, s), le(i);
}
se(du, { value: {} }, [], [], !0);
function qf(t, e) {
  ae(e, !1);
  const n = cu.create();
  Ml();
  var r = ce(), o = G(r);
  {
    var i = (s) => {
      du(s, He(() => n.props));
    };
    ie(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  N(t, r), le();
}
se(qf, {}, [], [], !0);
var h5 = /* @__PURE__ */ ne("<button><!></button>"), p5 = /* @__PURE__ */ ne("<!> <!>", 1);
function Yf(t, e) {
  const n = si();
  ae(e, !0);
  let r = g(e, "checked", 15, !1), o = g(e, "ref", 15, null), i = g(e, "onCheckedChange", 7), s = g(e, "children", 7), a = g(e, "disabled", 7, !1), l = g(e, "required", 7, !1), u = g(e, "name", 23, () => {
  }), d = g(e, "value", 7, "on"), h = g(e, "id", 23, () => Ln(n)), p = g(e, "indeterminate", 15, !1), v = g(e, "onIndeterminateChange", 7), m = g(e, "child", 7), y = g(e, "type", 7, "button"), w = g(e, "readonly", 7), b = /* @__PURE__ */ Ie(e, [
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
  ), k = /* @__PURE__ */ $(() => An({ ...b }, E.props));
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
    set id(_ = Ln(n)) {
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
  }, O = p5(), L = G(O);
  {
    var j = (_) => {
      var S = ce(), H = G(S);
      {
        let P = /* @__PURE__ */ $(() => ({ props: c(k), ...E.snippetProps }));
        Oe(H, m, () => c(P));
      }
      N(_, S);
    }, B = (_) => {
      var S = h5();
      Ue(S, () => ({ ...c(k) }));
      var H = Z(S);
      Oe(H, () => s() ?? ze, () => E.snippetProps), K(S), N(_, S);
    };
    ie(L, (_) => {
      m() ? _(j) : _(B, !1);
    });
  }
  var T = z(L, 2);
  return qf(T, {}), N(t, O), le(x);
}
se(
  Yf,
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
const f5 = ["top", "right", "bottom", "left"], wr = Math.min, qt = Math.max, Ss = Math.round, Ii = Math.floor, Mn = (t) => ({
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
function nr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function rr(t) {
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
function Nn(t) {
  return m5.has(rr(t)) ? "y" : "x";
}
function fu(t) {
  return hu(Nn(t));
}
function y5(t, e, n) {
  n === void 0 && (n = !1);
  const r = Co(t), o = fu(t), i = pu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = _s(s)), [s, _s(s)];
}
function w5(t) {
  const e = _s(t);
  return [il(t), e, il(e)];
}
function il(t) {
  return t.replace(/start|end/g, (e) => v5[e]);
}
const Uc = ["left", "right"], Gc = ["right", "left"], b5 = ["top", "bottom"], x5 = ["bottom", "top"];
function C5(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Gc : Uc : e ? Uc : Gc;
    case "left":
    case "right":
      return e ? b5 : x5;
    default:
      return [];
  }
}
function k5(t, e, n, r) {
  const o = Co(t);
  let i = C5(rr(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(il)))), i;
}
function _s(t) {
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
function Es(t) {
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
function Jc(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = Nn(e), s = fu(e), a = pu(s), l = rr(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  } = Jc(u, r, l), p = r, v = {}, m = 0;
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
    } = Jc(u, p, l)), y = -1);
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
  } = nr(e, t), m = Xf(v), y = a[p ? h === "floating" ? "reference" : "floating" : h], w = Es(await i.getClippingRect({
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
  }, k = Es(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
    } = nr(t, e) || {};
    if (u == null)
      return {};
    const h = Xf(d), p = {
      x: n,
      y: r
    }, v = fu(o), m = pu(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", C = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", k = i.reference[m] + i.reference[v] - p[v] - i.floating[m], x = p[v] - i.reference[v], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let L = O ? O[E] : 0;
    (!L || !await (s.isElement == null ? void 0 : s.isElement(O))) && (L = a.floating[E] || i.floating[m]);
    const j = k / 2 - x / 2, B = L / 2 - y[m] / 2 - 1, T = wr(h[b], B), _ = wr(h[C], B), S = T, H = L - y[m] - _, P = L / 2 - y[m] / 2 + j, D = ol(S, P, H), A = !l.arrow && Co(o) != null && P !== D && i.reference[m] / 2 - (P < S ? T : _) - y[m] / 2 < 0, V = A ? P < S ? P - S : P - H : 0;
    return {
      [v]: p[v] + V,
      data: {
        [v]: D,
        centerOffset: P - D - V,
        ...A && {
          alignmentOffset: V
        }
      },
      reset: A
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
      } = nr(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = rr(o), C = Nn(a), E = rr(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = p || (E || !y ? [_s(a)] : w5(a)), O = m !== "none";
      !p && O && x.push(...k5(a, y, m, k));
      const L = [a, ...x], j = await ei(e, w), B = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && B.push(j[b]), h) {
        const P = y5(o, s, k);
        B.push(j[P[0]], j[P[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: B
      }], !B.every((P) => P <= 0)) {
        var _, S;
        const P = (((_ = i.flip) == null ? void 0 : _.index) || 0) + 1, D = L[P];
        if (D && (!(h === "alignment" && C !== Nn(D)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((V) => Nn(V.placement) === C ? V.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: T
            },
            reset: {
              placement: D
            }
          };
        let A = (S = T.filter((V) => V.overflows[0] <= 0).sort((V, W) => V.overflows[1] - W.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!A)
          switch (v) {
            case "bestFit": {
              var H;
              const V = (H = T.filter((W) => {
                if (O) {
                  const U = Nn(W.placement);
                  return U === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((U) => U > 0).reduce((U, M) => U + M, 0)]).sort((W, U) => W[1] - U[1])[0]) == null ? void 0 : H[0];
              V && (A = V);
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
};
function Qc(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function ed(t) {
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
      } = nr(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await ei(e, {
            ...o,
            elementContext: "reference"
          }), s = Qc(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: ed(s)
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
              escaped: ed(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Uf = /* @__PURE__ */ new Set(["left", "top"]);
async function O5(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = rr(n), a = Co(n), l = Nn(n) === "y", u = Uf.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = nr(e, t);
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
      } = nr(t, e), u = {
        x: n,
        y: r
      }, d = await ei(e, l), h = Nn(rr(o)), p = hu(h);
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
      } = nr(t, e), d = {
        x: n,
        y: r
      }, h = Nn(o), p = hu(h);
      let v = d[p], m = d[h];
      const y = nr(a, e), w = typeof y == "number" ? {
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
        const E = p === "y" ? "width" : "height", k = Uf.has(rr(o)), x = i.reference[h] - i.floating[E] + (k && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (k ? 0 : w.crossAxis), O = i.reference[h] + i.reference[E] + (k ? 0 : ((C = s.offset) == null ? void 0 : C[h]) || 0) - (k ? w.crossAxis : 0);
        m < x ? m = x : m > O && (m = O);
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
      } = nr(t, e), d = await ei(e, u), h = rr(o), p = Co(o), v = Nn(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = p === "end" ? "top" : "bottom");
      const C = y - d.top - d.bottom, E = m - d.left - d.right, k = wr(y - d[w], C), x = wr(m - d[b], E), O = !e.middlewareData.shift;
      let L = k, j = x;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (j = E), (r = e.middlewareData.shift) != null && r.enabled.y && (L = C), O && !p) {
        const T = qt(d.left, 0), _ = qt(d.right, 0), S = qt(d.top, 0), H = qt(d.bottom, 0);
        v ? j = m - 2 * (T !== 0 || _ !== 0 ? T + _ : qt(d.left, d.right)) : L = y - 2 * (S !== 0 || H !== 0 ? S + H : qt(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: j,
        availableHeight: L
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
function Js() {
  return typeof window < "u";
}
function ko(t) {
  return Gf(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Xt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Bn(t) {
  var e;
  return (e = (Gf(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Gf(t) {
  return Js() ? t instanceof Node || t instanceof Xt(t).Node : !1;
}
function yn(t) {
  return Js() ? t instanceof Element || t instanceof Xt(t).Element : !1;
}
function Hn(t) {
  return Js() ? t instanceof HTMLElement || t instanceof Xt(t).HTMLElement : !1;
}
function td(t) {
  return !Js() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Xt(t).ShadowRoot;
}
const M5 = /* @__PURE__ */ new Set(["inline", "contents"]);
function xi(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = wn(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !M5.has(o);
}
const I5 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function L5(t) {
  return I5.has(ko(t));
}
const H5 = [":popover-open", ":modal"];
function Qs(t) {
  return H5.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const z5 = ["transform", "translate", "scale", "rotate", "perspective"], V5 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], B5 = ["paint", "layout", "strict", "content"];
function gu(t) {
  const e = vu(), n = yn(t) ? wn(t) : t;
  return z5.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || V5.some((r) => (n.willChange || "").includes(r)) || B5.some((r) => (n.contain || "").includes(r));
}
function F5(t) {
  let e = br(t);
  for (; Hn(e) && !vo(e); ) {
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
const R5 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function vo(t) {
  return R5.has(ko(t));
}
function wn(t) {
  return Xt(t).getComputedStyle(t);
}
function ea(t) {
  return yn(t) ? {
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
    td(t) && t.host || // Fallback.
    Bn(t)
  );
  return td(e) ? e.host : e;
}
function Jf(t) {
  const e = br(t);
  return vo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Hn(e) && xi(e) ? e : Jf(e);
}
function ti(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = Jf(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = Xt(o);
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
  const e = wn(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Hn(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = Ss(n) !== i || Ss(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function mu(t) {
  return yn(t) ? t : t.contextElement;
}
function ro(t) {
  const e = mu(t);
  if (!Hn(e))
    return Mn(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Qf(e);
  let s = (i ? Ss(n.width) : n.width) / r, a = (i ? Ss(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const K5 = /* @__PURE__ */ Mn(0);
function eg(t) {
  const e = Xt(t);
  return !vu() || !e.visualViewport ? K5 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function j5(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== Xt(t) ? !1 : e;
}
function Rr(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = mu(t);
  let s = Mn(1);
  e && (r ? yn(r) && (s = ro(r)) : s = ro(t));
  const a = j5(i, n, r) ? eg(i) : Mn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const p = Xt(i), v = r && yn(r) ? Xt(r) : r;
    let m = p, y = sl(m);
    for (; y && r && v !== m; ) {
      const w = ro(y), b = y.getBoundingClientRect(), C = wn(y), E = b.left + (y.clientLeft + parseFloat(C.paddingLeft)) * w.x, k = b.top + (y.clientTop + parseFloat(C.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += E, u += k, m = Xt(y), y = sl(m);
    }
  }
  return Es({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function ta(t, e) {
  const n = ea(t).scrollLeft;
  return e ? e.left + n : Rr(Bn(t)).left + n;
}
function tg(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - ta(t, n), o = n.top + e.scrollTop;
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
  }, u = Mn(1);
  const d = Mn(0), h = Hn(r);
  if ((h || !h && !i) && ((ko(r) !== "body" || xi(s)) && (l = ea(r)), Hn(r))) {
    const v = Rr(r);
    u = ro(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const p = s && !h && !i ? tg(s, l) : Mn(0);
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
  const e = Bn(t), n = ea(t), r = t.ownerDocument.body, o = qt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = qt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ta(t);
  const a = -n.scrollTop;
  return wn(r).direction === "rtl" && (s += qt(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const nd = 25;
function Y5(t, e) {
  const n = Xt(t), r = Bn(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = vu();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = ta(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, p = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= nd && (i -= m);
  } else u <= nd && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const X5 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function U5(t, e) {
  const n = Rr(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = Hn(t) ? ro(t) : Mn(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function rd(t, e, n) {
  let r;
  if (e === "viewport")
    r = Y5(t, n);
  else if (e === "document")
    r = q5(Bn(t));
  else if (yn(e))
    r = U5(e, n);
  else {
    const o = eg(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return Es(r);
}
function ng(t, e) {
  const n = br(t);
  return n === e || !yn(n) || vo(n) ? !1 : wn(n).position === "fixed" || ng(n, e);
}
function G5(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ti(t, [], !1).filter((a) => yn(a) && ko(a) !== "body"), o = null;
  const i = wn(t).position === "fixed";
  let s = i ? br(t) : t;
  for (; yn(s) && !vo(s); ) {
    const a = wn(s), l = gu(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && X5.has(o.position) || xi(s) && !l && ng(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = br(s);
  }
  return e.set(t, r), r;
}
function J5(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? Qs(e) ? [] : G5(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = rd(e, u, o);
    return l.top = qt(d.top, l.top), l.right = wr(d.right, l.right), l.bottom = wr(d.bottom, l.bottom), l.left = qt(d.left, l.left), l;
  }, rd(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Q5(t) {
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
  const r = Hn(e), o = Bn(e), i = n === "fixed", s = Rr(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Mn(0);
  function u() {
    l.x = ta(o);
  }
  if (r || !r && !i)
    if ((ko(e) !== "body" || xi(o)) && (a = ea(e)), r) {
      const v = Rr(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? tg(o, a) : Mn(0), h = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: p,
    width: s.width,
    height: s.height
  };
}
function ka(t) {
  return wn(t).position === "static";
}
function od(t, e) {
  if (!Hn(t) || wn(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Bn(t) === n && (n = n.ownerDocument.body), n;
}
function rg(t, e) {
  const n = Xt(t);
  if (Qs(t))
    return n;
  if (!Hn(t)) {
    let o = br(t);
    for (; o && !vo(o); ) {
      if (yn(o) && !ka(o))
        return o;
      o = br(o);
    }
    return n;
  }
  let r = od(t, e);
  for (; r && L5(r) && ka(r); )
    r = od(r, e);
  return r && vo(r) && ka(r) && !gu(r) ? n : r || F5(t) || n;
}
const t3 = async function(t) {
  const e = this.getOffsetParent || rg, n = this.getDimensions, r = await n(t.floating);
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
  return wn(t).direction === "rtl";
}
const r3 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Z5,
  getDocumentElement: Bn,
  getClippingRect: J5,
  getOffsetParent: rg,
  getElementRects: t3,
  getClientRects: W5,
  getDimensions: Q5,
  getScale: ro,
  isElement: yn,
  isRTL: n3
};
function og(t, e) {
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
      const O = x[0].intersectionRatio;
      if (O !== l) {
        if (!E)
          return s();
        O ? s(!1, O) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !og(u, t.getBoundingClientRect()) && s(), E = !1;
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
    y && !og(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((C) => {
      o && C.removeEventListener("scroll", n), i && C.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const ig = N5, sg = T5, ag = E5, s3 = A5, a3 = P5, lg = _5, l3 = D5, ug = (t, e, n) => {
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
function Er(t) {
  return typeof t == "function" ? t() : t;
}
function cg(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function id(t, e) {
  const n = cg(t);
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
  const e = t.whileElementsMounted, n = /* @__PURE__ */ $(() => Er(t.open) ?? !0), r = /* @__PURE__ */ $(() => Er(t.middleware)), o = /* @__PURE__ */ $(() => Er(t.transform) ?? !0), i = /* @__PURE__ */ $(() => Er(t.placement) ?? "bottom"), s = /* @__PURE__ */ $(() => Er(t.strategy) ?? "absolute"), a = /* @__PURE__ */ $(() => Er(t.sideOffset) ?? 0), l = /* @__PURE__ */ $(() => Er(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ me(0), h = /* @__PURE__ */ me(0);
  const p = On(null);
  let v = /* @__PURE__ */ me(ht(c(s))), m = /* @__PURE__ */ me(ht(c(i))), y = /* @__PURE__ */ me(ht({})), w = /* @__PURE__ */ me(!1), b = !1, C = 0;
  const E = /* @__PURE__ */ $(() => {
    const T = p.current ? id(p.current, c(d)) : c(d), _ = p.current ? id(p.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${T}px, ${_}px)`,
      ...p.current && cg(p.current) >= 1.5 && { willChange: "transform" }
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
    ug(T, _, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((H) => {
      if (!(S !== C || u.current !== T || p.current !== _)) {
        if (d3(T)) {
          R(
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
          if (H.x <= P && H.y <= P) return;
        }
        R(d, H.x, !0), R(h, H.y, !0), R(v, H.strategy, !0), R(m, H.placement, !0), R(y, H.middlewareData, !0), R(w, !0);
      }
    });
  }
  function O() {
    typeof k == "function" && (k(), k = void 0), C++;
  }
  function L() {
    if (O(), e === void 0) {
      x();
      return;
    }
    c(n) && (u.current === null || p.current === null || (k = e(u.current, p.current, x)));
  }
  function j() {
    !c(n) && p.current === null && R(w, !1);
  }
  function B() {
    return [
      c(r),
      c(i),
      c(s),
      c(a),
      c(l),
      c(n)
    ];
  }
  return Le(() => {
    e === void 0 && c(n) && x();
  }), Le(L), Le(() => {
    if (e !== void 0) {
      if (B(), !c(n)) {
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
  }), Le(j), Le(() => O), {
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
const h3 = { top: "bottom", right: "left", bottom: "top", left: "right" }, yu = new _r("Floating.Root"), sd = new _r("Floating.Content"), wu = new _r("Floating.Root");
class Ps {
  static create(e = !1) {
    return e ? wu.set(new Ps()) : yu.set(new Ps());
  }
  anchorNode = On(null);
  customAnchorNode = On(null);
  triggerNode = On(null);
  constructor() {
    Le(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class Os {
  static create(e, n = !1) {
    return n ? sd.set(new Os(e, wu.get())) : sd.set(new Os(e, yu.get()));
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
  arrowId = On($s());
  #e = /* @__PURE__ */ $(() => {
    if (typeof this.opts.style == "string") return Mo(this.opts.style);
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
    R(this.#s, e);
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
    R(this.#l, e);
  }
  #u = /* @__PURE__ */ me(void 0);
  #c = /* @__PURE__ */ me(void 0);
  #d = /* @__PURE__ */ me(void 0);
  #h = /* @__PURE__ */ me(void 0);
  #f = /* @__PURE__ */ $(() => [
    ig({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && sg({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? l3() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && ag({ ...this.detectOverflowOptions }),
    s3({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        R(this.#u, n, !0), R(this.#c, r, !0), R(this.#d, o, !0), R(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && lg({
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
    R(this.#f, e);
  }
  floating;
  #p = /* @__PURE__ */ $(() => f3(this.floating.placement));
  get placedSide() {
    return c(this.#p);
  }
  set placedSide(e) {
    R(this.#p, e);
  }
  #y = /* @__PURE__ */ $(() => g3(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    R(this.#y, e);
  }
  #v = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#v);
  }
  set arrowX(e) {
    R(this.#v, e);
  }
  #w = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    R(this.#w, e);
  }
  #m = /* @__PURE__ */ $(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return c(this.#m);
  }
  set cannotCenterArrow(e) {
    R(this.#m, e);
  }
  #g = /* @__PURE__ */ me();
  get contentZIndex() {
    return c(this.#g);
  }
  set contentZIndex(e) {
    R(this.#g, e, !0);
  }
  #b = /* @__PURE__ */ $(() => h3[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    R(this.#b, e);
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
    R(this.#x, e);
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
    R(this.#C, e);
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
    R(this.#k, e);
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
    }), Le(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), yt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = kf(r), i = o.requestAnimationFrame(() => {
        if (this.contentRef.current !== r || !this.opts.enabled.current) return;
        const s = o.getComputedStyle(r).zIndex;
        s !== this.contentZIndex && (this.contentZIndex = s);
      });
      return () => {
        o.cancelAnimationFrame(i);
      };
    }), Le(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
}
class Ns {
  static create(e, n = !1) {
    return n ? new Ns(e, wu.get()) : new Ns(e, yu.get());
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
function dg(t, e) {
  ae(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  Ps.create(r());
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
  }, i = ce(), s = G(i);
  return Oe(s, () => n() ?? ze), N(t, i), le(o);
}
se(dg, { children: {}, tooltip: {} }, [], [], !0);
class v3 {
  #e;
  #t = /* @__PURE__ */ $(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = Bf("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
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
const m3 = [Io, Pf, _f], y3 = [Gr, Ef, Sf], w3 = [...m3, ...y3], b3 = nu({
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
}), Ci = new _r("Select.Root | Combobox.Root"), hg = new _r("Select.Content | Combobox.Content");
class pg {
  opts;
  #e = /* @__PURE__ */ me(!1);
  get touchedInput() {
    return c(this.#e);
  }
  set touchedInput(e) {
    R(this.#e, e, !0);
  }
  #t = /* @__PURE__ */ me(null);
  get inputNode() {
    return c(this.#t);
  }
  set inputNode(e) {
    R(this.#t, e, !0);
  }
  #n = /* @__PURE__ */ me(null);
  get contentNode() {
    return c(this.#n);
  }
  set contentNode(e) {
    R(this.#n, e, !0);
  }
  contentPresence;
  #r = /* @__PURE__ */ me(null);
  get viewportNode() {
    return c(this.#r);
  }
  set viewportNode(e) {
    R(this.#r, e, !0);
  }
  #o = /* @__PURE__ */ me(null);
  get triggerNode() {
    return c(this.#o);
  }
  set triggerNode(e) {
    R(this.#o, e, !0);
  }
  #i = /* @__PURE__ */ me("");
  get valueId() {
    return c(this.#i);
  }
  set valueId(e) {
    R(this.#i, e, !0);
  }
  #a = /* @__PURE__ */ me(null);
  get highlightedNode() {
    return c(this.#a);
  }
  set highlightedNode(e) {
    R(this.#a, e, !0);
  }
  #s = /* @__PURE__ */ $(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    R(this.#s, e);
  }
  #l = /* @__PURE__ */ $(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    R(this.#l, e);
  }
  #u = /* @__PURE__ */ $(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
  get highlightedLabel() {
    return c(this.#u);
  }
  set highlightedLabel(e) {
    R(this.#u, e);
  }
  #c = /* @__PURE__ */ me(!1);
  get contentIsPositioned() {
    return c(this.#c);
  }
  set contentIsPositioned(e) {
    R(this.#c, e, !0);
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
    }), Vt(() => {
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
class x3 extends pg {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ $(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    R(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    R(this.#t, e);
  }
  #n = /* @__PURE__ */ $(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    R(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    R(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, Le(() => {
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
class C3 extends pg {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ $(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    R(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, Le(() => {
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
    this.opts = e, this.root = n, this.attachment = mr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new bi(e.ref), this.#e = new X7({
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
      if (e.key === Ja || e.key === qi || e.key === Io || e.key === Gr)
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
    if ((e.key === Ja || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === qi && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === Gr && e.altKey && this.root.handleClose(), w3.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === Io ? d = j7(s, l, u) : e.key === Gr ? d = Z7(s, l, u) : e.key === Ef ? d = W7(s, l, 10, u) : e.key === Pf ? d = q7(s, l, 10, u) : e.key === _f ? d = s[0] : e.key === Sf && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === qi, i = this.root.getCandidateNodes();
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
    "data-state": $f(this.root.opts.open.current),
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
    R(this.#i, e);
  }
}
class Cu {
  static create(e) {
    return hg.set(new Cu(e, Ci.get()));
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ me(!1);
  get isPositioned() {
    return c(this.#e);
  }
  set isPositioned(e) {
    R(this.#e, e, !0);
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
    R(this.#n, e);
  }
  #r = /* @__PURE__ */ $(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": $f(this.root.opts.open.current),
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
    R(this.#r, e);
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
    R(this.#e, e);
  }
  #t = /* @__PURE__ */ $(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return c(this.#t);
  }
  set isHighlighted(e) {
    R(this.#t, e);
  }
  prevHighlighted = new t7(() => this.isHighlighted);
  #n = /* @__PURE__ */ me(!1);
  get mounted() {
    return c(this.#n);
  }
  set mounted(e) {
    R(this.#n, e, !0);
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
    R(this.#r, e);
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
      if (e.pointerType === "touch" && !Qa) {
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
    R(this.#o, e);
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
    R(this.#e, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    e.preventDefault(), this.root.isCombobox ? this.root.inputNode?.focus() : this.root.triggerNode?.focus();
  }
  #t = /* @__PURE__ */ $(() => ({
    disabled: Fc(this.root.opts.disabled.current),
    required: Fc(this.root.opts.required.current),
    name: this.root.opts.name.current,
    value: this.opts.value.current,
    onfocus: this.onfocus
  }));
  get props() {
    return c(this.#t);
  }
  set props(e) {
    R(this.#t, e);
  }
}
class Su {
  static create(e) {
    return new Su(e, hg.get());
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
    R(this.#e, e, !0);
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
    R(this.#t, e);
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
  }, s = ce(), a = G(s);
  {
    var l = (u) => {
      du(u, He(() => o.props, {
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
  return N(t, s), le(i);
}
se(Xi, { value: {}, autocomplete: {} }, [], [], !0);
function fg(t, e) {
  ae(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  Ns.create(
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
  }, l = ce(), u = G(l);
  return Oe(u, () => r() ?? ze), N(t, l), le(a);
}
se(fg, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function gg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), p = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), C = g(e, "style", 23, () => ({})), E = g(e, "wrapperId", 23, $s), k = g(e, "customAnchor", 7, null), x = g(e, "enabled", 7), O = g(e, "tooltip", 7, !1);
  const L = Os.create(
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
    O()
  ), j = /* @__PURE__ */ $(() => An(L.wrapperProps, { style: { pointerEvents: "auto" } }));
  var B = {
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
    set wrapperId(S = $s()) {
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
      return O();
    },
    set tooltip(S = !1) {
      O(S), f();
    }
  }, T = ce(), _ = G(T);
  return Oe(_, () => n() ?? ze, () => ({ props: L.props, wrapperProps: c(j) })), N(t, T), le(B);
}
se(
  gg,
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
function vg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "onPlaced", 7);
  bn(() => {
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
  }, i = ce(), s = G(i);
  return Oe(s, () => n() ?? ze, () => ({ props: {}, wrapperProps: {} })), N(t, i), le(o);
}
se(vg, { content: {}, onPlaced: {} }, [], [], !0);
function mg(t, e) {
  ae(e, !0);
  let n = g(e, "content", 7), r = g(e, "isStatic", 7, !1), o = g(e, "onPlaced", 7), i = /* @__PURE__ */ Ie(e, [
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
  }, a = ce(), l = G(a);
  {
    var u = (h) => {
      vg(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      gg(h, He(
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
  return N(t, a), le(s);
}
se(mg, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var $3 = /* @__PURE__ */ ne("<!> <!>", 1);
function _u(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), C = g(e, "hideWhenDetached", 7), E = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), x = g(e, "dir", 7), O = g(e, "preventScroll", 7), L = g(e, "wrapperId", 7), j = g(e, "style", 7), B = g(e, "onPlaced", 7), T = g(e, "onInteractOutside", 7), _ = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), H = g(e, "onFocusOutside", 7), P = g(e, "interactOutsideBehavior", 7, "close"), D = g(e, "loop", 7), A = g(e, "trapFocus", 7, !0), V = g(e, "isValidEvent", 7, () => !1), W = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), M = g(e, "enabled", 7), X = g(e, "ref", 7), Y = g(e, "tooltip", 7, !1), F = g(e, "contentPointerEvents", 7, "auto"), q = /* @__PURE__ */ Ie(e, [
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
  const Q = /* @__PURE__ */ $(() => O() ?? !0), ee = /* @__PURE__ */ $(() => k() ?? (c(Q) ? "fixed" : "absolute"));
  var oe = {
    get popper() {
      return n();
    },
    set popper(I) {
      n(I), f();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(I) {
      r(I), f();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(I) {
      o(I), f();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(I) {
      i(I), f();
    },
    get id() {
      return s();
    },
    set id(I) {
      s(I), f();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(I) {
      a(I), f();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(I) {
      l(I), f();
    },
    get side() {
      return u();
    },
    set side(I) {
      u(I), f();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(I) {
      d(I), f();
    },
    get align() {
      return h();
    },
    set align(I) {
      h(I), f();
    },
    get alignOffset() {
      return p();
    },
    set alignOffset(I) {
      p(I), f();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(I) {
      v(I), f();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(I) {
      m(I), f();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(I) {
      y(I), f();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(I) {
      w(I), f();
    },
    get sticky() {
      return b();
    },
    set sticky(I) {
      b(I), f();
    },
    get hideWhenDetached() {
      return C();
    },
    set hideWhenDetached(I) {
      C(I), f();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(I) {
      E(I), f();
    },
    get strategy() {
      return k();
    },
    set strategy(I) {
      k(I), f();
    },
    get dir() {
      return x();
    },
    set dir(I) {
      x(I), f();
    },
    get preventScroll() {
      return O();
    },
    set preventScroll(I) {
      O(I), f();
    },
    get wrapperId() {
      return L();
    },
    set wrapperId(I) {
      L(I), f();
    },
    get style() {
      return j();
    },
    set style(I) {
      j(I), f();
    },
    get onPlaced() {
      return B();
    },
    set onPlaced(I) {
      B(I), f();
    },
    get onInteractOutside() {
      return T();
    },
    set onInteractOutside(I) {
      T(I), f();
    },
    get onCloseAutoFocus() {
      return _();
    },
    set onCloseAutoFocus(I) {
      _(I), f();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(I) {
      S(I), f();
    },
    get onFocusOutside() {
      return H();
    },
    set onFocusOutside(I) {
      H(I), f();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(I = "close") {
      P(I), f();
    },
    get loop() {
      return D();
    },
    set loop(I) {
      D(I), f();
    },
    get trapFocus() {
      return A();
    },
    set trapFocus(I = !0) {
      A(I), f();
    },
    get isValidEvent() {
      return V();
    },
    set isValidEvent(I = () => !1) {
      V(I), f();
    },
    get customAnchor() {
      return W();
    },
    set customAnchor(I = null) {
      W(I), f();
    },
    get isStatic() {
      return U();
    },
    set isStatic(I = !1) {
      U(I), f();
    },
    get enabled() {
      return M();
    },
    set enabled(I) {
      M(I), f();
    },
    get ref() {
      return X();
    },
    set ref(I) {
      X(I), f();
    },
    get tooltip() {
      return Y();
    },
    set tooltip(I = !1) {
      Y(I), f();
    },
    get contentPointerEvents() {
      return F();
    },
    set contentPointerEvents(I = "auto") {
      F(I), f();
    }
  };
  return mg(t, {
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
      return c(ee);
    },
    get dir() {
      return x();
    },
    get wrapperId() {
      return L();
    },
    get style() {
      return j();
    },
    get onPlaced() {
      return B();
    },
    get customAnchor() {
      return W();
    },
    get enabled() {
      return M();
    },
    get tooltip() {
      return Y();
    },
    content: (I, te) => {
      let fe = () => te?.().props, he = () => te?.().wrapperProps;
      var re = $3(), ue = G(re);
      {
        var ge = (de) => {
          rl(de, {
            get preventScroll() {
              return c(Q);
            }
          });
        }, ye = (de) => {
          var we = ce(), Te = G(we);
          {
            var J = (Ve) => {
              rl(Ve, {
                get preventScroll() {
                  return c(Q);
                }
              });
            };
            ie(
              Te,
              (Ve) => {
                e.forceMount || Ve(J);
              },
              !0
            );
          }
          N(de, we);
        };
        ie(ue, (de) => {
          e.forceMount && M() ? de(ge) : de(ye, !1);
        });
      }
      var be = z(ue, 2);
      Kf(be, {
        get onOpenAutoFocus() {
          return S();
        },
        get onCloseAutoFocus() {
          return _();
        },
        get loop() {
          return D();
        },
        get enabled() {
          return M();
        },
        get trapFocus() {
          return A();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return X();
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
              return M();
            },
            get ref() {
              return X();
            },
            children: (J, Ve) => {
              Ff(J, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return T();
                },
                get onFocusOutside() {
                  return H();
                },
                get interactOutsideBehavior() {
                  return P();
                },
                get isValidEvent() {
                  return V();
                },
                get enabled() {
                  return M();
                },
                get ref() {
                  return X();
                },
                children: ($e, ke) => {
                  let Ae = () => ke?.().props;
                  jf($e, {
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
                      return M();
                    },
                    get ref() {
                      return X();
                    },
                    children: (qe, Qe) => {
                      var Xe = ce(), ot = G(Xe);
                      {
                        let ve = /* @__PURE__ */ $(() => ({
                          props: An(q, fe(), Ae(), Te(), { style: { pointerEvents: F() } }),
                          wrapperProps: he()
                        }));
                        Oe(ot, () => n() ?? ze, () => c(ve));
                      }
                      N(qe, Xe);
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
      }), N(I, re);
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
function yg(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), p = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), C = g(e, "sticky", 7), E = g(e, "hideWhenDetached", 7), k = g(e, "updatePositionStrategy", 7), x = g(e, "strategy", 7), O = g(e, "dir", 7), L = g(e, "preventScroll", 7), j = g(e, "wrapperId", 7), B = g(e, "style", 7), T = g(e, "onPlaced", 7), _ = g(e, "onInteractOutside", 7), S = g(e, "onCloseAutoFocus", 7), H = g(e, "onOpenAutoFocus", 7), P = g(e, "onFocusOutside", 7), D = g(e, "interactOutsideBehavior", 7, "close"), A = g(e, "loop", 7), V = g(e, "trapFocus", 7, !0), W = g(e, "isValidEvent", 7, () => !1), U = g(e, "customAnchor", 7, null), M = g(e, "isStatic", 7, !1), X = g(e, "ref", 7), Y = g(e, "shouldRender", 7), F = /* @__PURE__ */ Ie(e, [
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
  var q = {
    get popper() {
      return n();
    },
    set popper(I) {
      n(I), f();
    },
    get open() {
      return r();
    },
    set open(I) {
      r(I), f();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(I) {
      o(I), f();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(I) {
      i(I), f();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(I) {
      s(I), f();
    },
    get id() {
      return a();
    },
    set id(I) {
      a(I), f();
    },
    get onPointerDown() {
      return l();
    },
    set onPointerDown(I) {
      l(I), f();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(I) {
      u(I), f();
    },
    get side() {
      return d();
    },
    set side(I) {
      d(I), f();
    },
    get sideOffset() {
      return h();
    },
    set sideOffset(I) {
      h(I), f();
    },
    get align() {
      return p();
    },
    set align(I) {
      p(I), f();
    },
    get alignOffset() {
      return v();
    },
    set alignOffset(I) {
      v(I), f();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(I) {
      m(I), f();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(I) {
      y(I), f();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(I) {
      w(I), f();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(I) {
      b(I), f();
    },
    get sticky() {
      return C();
    },
    set sticky(I) {
      C(I), f();
    },
    get hideWhenDetached() {
      return E();
    },
    set hideWhenDetached(I) {
      E(I), f();
    },
    get updatePositionStrategy() {
      return k();
    },
    set updatePositionStrategy(I) {
      k(I), f();
    },
    get strategy() {
      return x();
    },
    set strategy(I) {
      x(I), f();
    },
    get dir() {
      return O();
    },
    set dir(I) {
      O(I), f();
    },
    get preventScroll() {
      return L();
    },
    set preventScroll(I) {
      L(I), f();
    },
    get wrapperId() {
      return j();
    },
    set wrapperId(I) {
      j(I), f();
    },
    get style() {
      return B();
    },
    set style(I) {
      B(I), f();
    },
    get onPlaced() {
      return T();
    },
    set onPlaced(I) {
      T(I), f();
    },
    get onInteractOutside() {
      return _();
    },
    set onInteractOutside(I) {
      _(I), f();
    },
    get onCloseAutoFocus() {
      return S();
    },
    set onCloseAutoFocus(I) {
      S(I), f();
    },
    get onOpenAutoFocus() {
      return H();
    },
    set onOpenAutoFocus(I) {
      H(I), f();
    },
    get onFocusOutside() {
      return P();
    },
    set onFocusOutside(I) {
      P(I), f();
    },
    get interactOutsideBehavior() {
      return D();
    },
    set interactOutsideBehavior(I = "close") {
      D(I), f();
    },
    get loop() {
      return A();
    },
    set loop(I) {
      A(I), f();
    },
    get trapFocus() {
      return V();
    },
    set trapFocus(I = !0) {
      V(I), f();
    },
    get isValidEvent() {
      return W();
    },
    set isValidEvent(I = () => !1) {
      W(I), f();
    },
    get customAnchor() {
      return U();
    },
    set customAnchor(I = null) {
      U(I), f();
    },
    get isStatic() {
      return M();
    },
    set isStatic(I = !1) {
      M(I), f();
    },
    get ref() {
      return X();
    },
    set ref(I) {
      X(I), f();
    },
    get shouldRender() {
      return Y();
    },
    set shouldRender(I) {
      Y(I), f();
    }
  }, Q = ce(), ee = G(Q);
  {
    var oe = (I) => {
      _u(I, He(
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
            return O();
          },
          get preventScroll() {
            return L();
          },
          get wrapperId() {
            return j();
          },
          get style() {
            return B();
          },
          get onPlaced() {
            return T();
          },
          get customAnchor() {
            return U();
          },
          get isStatic() {
            return M();
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
            return H();
          },
          get interactOutsideBehavior() {
            return D();
          },
          get loop() {
            return A();
          },
          get trapFocus() {
            return V();
          },
          get isValidEvent() {
            return W();
          },
          get onFocusOutside() {
            return P();
          },
          forceMount: !1,
          get ref() {
            return X();
          }
        },
        () => F
      ));
    };
    ie(ee, (I) => {
      Y() && I(oe);
    });
  }
  return N(t, Q), le(q);
}
se(
  yg,
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
function wg(t, e) {
  ae(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), p = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), C = g(e, "hideWhenDetached", 7), E = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), x = g(e, "dir", 7), O = g(e, "preventScroll", 7), L = g(e, "wrapperId", 7), j = g(e, "style", 7), B = g(e, "onPlaced", 7), T = g(e, "onInteractOutside", 7), _ = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), H = g(e, "onFocusOutside", 7), P = g(e, "interactOutsideBehavior", 7, "close"), D = g(e, "loop", 7), A = g(e, "trapFocus", 7, !0), V = g(e, "isValidEvent", 7, () => !1), W = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), M = g(e, "enabled", 7), X = /* @__PURE__ */ Ie(e, [
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
  var Y = {
    get popper() {
      return n();
    },
    set popper(F) {
      n(F), f();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(F) {
      r(F), f();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(F) {
      o(F), f();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(F) {
      i(F), f();
    },
    get id() {
      return s();
    },
    set id(F) {
      s(F), f();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(F) {
      a(F), f();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(F) {
      l(F), f();
    },
    get side() {
      return u();
    },
    set side(F) {
      u(F), f();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(F) {
      d(F), f();
    },
    get align() {
      return h();
    },
    set align(F) {
      h(F), f();
    },
    get alignOffset() {
      return p();
    },
    set alignOffset(F) {
      p(F), f();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(F) {
      v(F), f();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(F) {
      m(F), f();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(F) {
      y(F), f();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(F) {
      w(F), f();
    },
    get sticky() {
      return b();
    },
    set sticky(F) {
      b(F), f();
    },
    get hideWhenDetached() {
      return C();
    },
    set hideWhenDetached(F) {
      C(F), f();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(F) {
      E(F), f();
    },
    get strategy() {
      return k();
    },
    set strategy(F) {
      k(F), f();
    },
    get dir() {
      return x();
    },
    set dir(F) {
      x(F), f();
    },
    get preventScroll() {
      return O();
    },
    set preventScroll(F) {
      O(F), f();
    },
    get wrapperId() {
      return L();
    },
    set wrapperId(F) {
      L(F), f();
    },
    get style() {
      return j();
    },
    set style(F) {
      j(F), f();
    },
    get onPlaced() {
      return B();
    },
    set onPlaced(F) {
      B(F), f();
    },
    get onInteractOutside() {
      return T();
    },
    set onInteractOutside(F) {
      T(F), f();
    },
    get onCloseAutoFocus() {
      return _();
    },
    set onCloseAutoFocus(F) {
      _(F), f();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(F) {
      S(F), f();
    },
    get onFocusOutside() {
      return H();
    },
    set onFocusOutside(F) {
      H(F), f();
    },
    get interactOutsideBehavior() {
      return P();
    },
    set interactOutsideBehavior(F = "close") {
      P(F), f();
    },
    get loop() {
      return D();
    },
    set loop(F) {
      D(F), f();
    },
    get trapFocus() {
      return A();
    },
    set trapFocus(F = !0) {
      A(F), f();
    },
    get isValidEvent() {
      return V();
    },
    set isValidEvent(F = () => !1) {
      V(F), f();
    },
    get customAnchor() {
      return W();
    },
    set customAnchor(F = null) {
      W(F), f();
    },
    get isStatic() {
      return U();
    },
    set isStatic(F = !1) {
      U(F), f();
    },
    get enabled() {
      return M();
    },
    set enabled(F) {
      M(F), f();
    }
  };
  return _u(t, He(
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
        return O();
      },
      get wrapperId() {
        return L();
      },
      get style() {
        return j();
      },
      get onPlaced() {
        return B();
      },
      get customAnchor() {
        return W();
      },
      get isStatic() {
        return U();
      },
      get enabled() {
        return M();
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
        return D();
      },
      get trapFocus() {
        return A();
      },
      get isValidEvent() {
        return V();
      },
      get onFocusOutside() {
        return H();
      }
    },
    () => X,
    { forceMount: !0 }
  )), le(Y);
}
se(
  wg,
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
var S3 = /* @__PURE__ */ ne("<div><div><!></div></div>"), _3 = /* @__PURE__ */ ne("<div><div><!></div></div>");
function al(t, e) {
  const n = si();
  ae(e, !0);
  let r = g(e, "id", 23, () => Ln(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, Be), l = g(e, "onEscapeKeydown", 7, Be), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), p = g(e, "style", 7), v = /* @__PURE__ */ Ie(e, [
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
  }), y = /* @__PURE__ */ $(() => An(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(x = Ln(n)) {
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
  }, b = ce(), C = G(b);
  {
    var E = (x) => {
      wg(x, He(() => c(y), () => m.popperProps, {
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
        popper: (O, L) => {
          let j = () => L?.().props, B = () => L?.().wrapperProps;
          const T = /* @__PURE__ */ $(() => An(j(), { style: m.props.style }, { style: p() }));
          var _ = ce(), S = G(_);
          {
            var H = (D) => {
              var A = ce(), V = G(A);
              {
                let W = /* @__PURE__ */ $(() => ({
                  props: c(T),
                  wrapperProps: B(),
                  ...m.snippetProps
                }));
                Oe(V, d, () => c(W));
              }
              N(D, A);
            }, P = (D) => {
              var A = S3();
              Ue(A, () => ({ ...B() }));
              var V = Z(A);
              Ue(V, () => ({ ...c(T) }));
              var W = Z(V);
              Oe(W, () => u() ?? ze), K(V), K(A), N(D, A);
            };
            ie(S, (D) => {
              d() ? D(H) : D(P, !1);
            });
          }
          N(O, _);
        },
        $$slots: { popper: !0 }
      }));
    }, k = (x) => {
      var O = ce(), L = G(O);
      {
        var j = (B) => {
          yg(B, He(() => c(y), () => m.popperProps, {
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
              let S = () => _?.().props, H = () => _?.().wrapperProps;
              const P = /* @__PURE__ */ $(() => An(S(), { style: m.props.style }, { style: p() }));
              var D = ce(), A = G(D);
              {
                var V = (U) => {
                  var M = ce(), X = G(M);
                  {
                    let Y = /* @__PURE__ */ $(() => ({
                      props: c(P),
                      wrapperProps: H(),
                      ...m.snippetProps
                    }));
                    Oe(X, d, () => c(Y));
                  }
                  N(U, M);
                }, W = (U) => {
                  var M = _3();
                  Ue(M, () => ({ ...H() }));
                  var X = Z(M);
                  Ue(X, () => ({ ...c(P) }));
                  var Y = Z(X);
                  Oe(Y, () => u() ?? ze), K(X), K(M), N(U, M);
                };
                ie(A, (U) => {
                  d() ? U(V) : U(W, !1);
                });
              }
              N(T, D);
            },
            $$slots: { popper: !0 }
          }));
        };
        ie(
          L,
          (B) => {
            i() || B(j);
          },
          !0
        );
      }
      N(x, O);
    };
    ie(C, (x) => {
      i() ? x(E) : x(k, !1);
    });
  }
  return N(t, b), le(w);
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
function bg(t, e) {
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
se(bg, { mounted: {}, onMountedChange: {} }, [], [], !0);
var E3 = /* @__PURE__ */ ne("<div><!></div>"), P3 = /* @__PURE__ */ ne("<!> <!>", 1);
function ll(t, e) {
  const n = si();
  ae(e, !0);
  let r = g(e, "id", 23, () => Ln(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, Be), h = g(e, "onUnhighlight", 7, Be), p = /* @__PURE__ */ Ie(e, [
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
  }), m = /* @__PURE__ */ $(() => An(p, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(x = Ln(n)) {
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
  }, w = P3(), b = G(w);
  {
    var C = (x) => {
      var O = ce(), L = G(O);
      {
        let j = /* @__PURE__ */ $(() => ({ props: c(m), ...v.snippetProps }));
        Oe(L, u, () => c(j));
      }
      N(x, O);
    }, E = (x) => {
      var O = E3();
      Ue(O, () => ({ ...c(m) }));
      var L = Z(O);
      Oe(L, () => l() ?? ze, () => v.snippetProps), K(O), N(x, O);
    };
    ie(b, (x) => {
      u() ? x(C) : x(E, !1);
    });
  }
  var k = z(b, 2);
  return bg(k, {
    get mounted() {
      return v.mounted;
    },
    set mounted(x) {
      v.mounted = x;
    }
  }), N(t, w), le(y);
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
var O3 = /* @__PURE__ */ ne("<div><!></div>");
const N3 = {
  hash: "svelte-z03me6",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function ul(t, e) {
  const n = si();
  ae(e, !0), Ge(t, N3);
  let r = g(e, "id", 23, () => Ln(n)), o = g(e, "ref", 15, null), i = g(e, "children", 7), s = g(e, "child", 7), a = /* @__PURE__ */ Ie(e, [
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
  }), u = /* @__PURE__ */ $(() => An(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Ln(n)) {
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
  }, h = ce(), p = G(h);
  {
    var v = (y) => {
      var w = ce(), b = G(w);
      Oe(b, s, () => ({ props: c(u) })), N(y, w);
    }, m = (y) => {
      var w = O3();
      Ue(w, () => ({ ...c(u) }));
      var b = Z(w);
      Oe(b, () => i() ?? ze), K(w), N(y, w);
    };
    ie(p, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return N(t, h), le(d);
}
se(ul, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var T3 = /* @__PURE__ */ ne("<!> <!>", 1);
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
    inputValue: pe(() => c(C), (T) => R(C, T, !0)),
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
  }, x = T3(), O = G(x);
  dg(O, {
    children: (T, _) => {
      var S = ce(), H = G(S);
      Oe(H, () => w() ?? ze), N(T, S);
    },
    $$slots: { default: !0 }
  });
  var L = z(O, 2);
  {
    var j = (T) => {
      var _ = ce(), S = G(_);
      {
        var H = (D) => {
          Xi(D, {
            get autocomplete() {
              return y();
            }
          });
        }, P = (D) => {
          var A = ce(), V = G(A);
          Ct(V, 16, () => E.opts.value.current, (W) => W, (W, U) => {
            Xi(W, {
              get value() {
                return U;
              },
              get autocomplete() {
                return y();
              }
            });
          }), N(D, A);
        };
        ie(S, (D) => {
          E.opts.value.current.length === 0 ? D(H) : D(P, !1);
        });
      }
      N(T, _);
    }, B = (T) => {
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
    ie(L, (T) => {
      Array.isArray(E.opts.value.current) ? T(j) : T(B, !1);
    });
  }
  return N(t, x), le(k);
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
var D3 = /* @__PURE__ */ ne("<button><!></button>");
function dl(t, e) {
  const n = si();
  ae(e, !0);
  let r = g(e, "id", 23, () => Ln(n)), o = g(e, "ref", 15, null), i = g(e, "child", 7), s = g(e, "children", 7), a = g(e, "type", 7, "button"), l = /* @__PURE__ */ Ie(e, [
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
  }), d = /* @__PURE__ */ $(() => An(l, u.props, { type: a() }));
  var h = {
    get id() {
      return r();
    },
    set id(m = Ln(n)) {
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
  }, p = ce(), v = G(p);
  return bt(v, () => fg, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var C = ce(), E = G(C);
        {
          var k = (O) => {
            var L = ce(), j = G(L);
            Oe(j, i, () => ({ props: c(d) })), N(O, L);
          }, x = (O) => {
            var L = D3();
            Ue(L, () => ({ ...c(d) }));
            var j = Z(L);
            Oe(j, () => s() ?? ze), K(L), N(O, L);
          };
          ie(E, (O) => {
            i() ? O(k) : O(x, !1);
          });
        }
        N(w, C);
      },
      $$slots: { default: !0 }
    });
  }), N(t, p), le(h);
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
}, M3 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, I3 = Symbol("lucide-context"), L3 = () => mn(I3);
var H3 = /* @__PURE__ */ xe("<svg><!><!></svg>");
function na(t, e) {
  ae(e, !0);
  const n = L3() ?? {}, r = g(e, "name", 7), o = g(e, "color", 23, () => n.color ?? "currentColor"), i = g(e, "size", 23, () => n.size ?? 24), s = g(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = g(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = g(e, "iconNode", 23, () => []), u = g(e, "children", 7), d = /* @__PURE__ */ Ie(e, [
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
  }, v = H3();
  Ue(
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
      () => !u() && !M3(d) && { "aria-hidden": "true" }
    ]
  );
  var m = Z(v);
  Ct(m, 17, l, so, (w, b) => {
    var C = /* @__PURE__ */ $(() => mo(c(b), 2));
    let E = () => c(C)[0], k = () => c(C)[1];
    var x = ce(), O = G(x);
    uh(O, E, !0, (L, j) => {
      Ue(L, () => ({ ...k() }));
    }), N(w, x);
  });
  var y = z(m);
  return Oe(y, () => u() ?? ze), K(v), N(t, v), le(p);
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
function xg(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  na(t, He({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = G(s);
      Oe(a, () => e.children ?? ze), N(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
se(xg, {}, [], [], !0);
function Cg(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  na(t, He({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = G(s);
      Oe(a, () => e.children ?? ze), N(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
se(Cg, {}, [], [], !0);
var z3 = /* @__PURE__ */ ne('<div data-slot="checkbox-indicator" class="tf-checkbox-indicator"><!></div>');
function kg(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "checked", 15, !1), o = g(e, "indeterminate", 15, !1), i = g(e, "class", 7), s = /* @__PURE__ */ Ie(e, [
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
  }, l = ce(), u = G(l);
  {
    const d = (p, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = z3(), b = Z(w);
      {
        var C = (k) => {
          xg(k, {});
        }, E = (k) => {
          var x = ce(), O = G(x);
          {
            var L = (j) => {
              Cg(j, {});
            };
            ie(
              O,
              (j) => {
                y() && j(L);
              },
              !0
            );
          }
          N(k, x);
        };
        ie(b, (k) => {
          m() ? k(C) : k(E, !1);
        });
      }
      K(w), N(p, w);
    };
    let h = /* @__PURE__ */ $(() => pn("nopan nodrag tf-checkbox peer", i()));
    bt(u, () => Yf, (p, v) => {
      v(p, He(
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
  return N(t, l), le(a);
}
se(kg, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var V3 = /* @__PURE__ */ ne('<div><input type="hidden"/> <!> <!></div>');
const B3 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function $g(t, e) {
  ae(e, !0), Ge(t, B3);
  const n = g(e, "placeholder", 7), r = g(e, "label", 7), o = g(e, "value", 7), i = g(e, "buttonText", 7, "选择..."), s = g(e, "onChosen", 7), a = /* @__PURE__ */ Ie(e, [
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
  }, u = V3();
  Ue(
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
  Jn(d);
  var h = z(d, 2);
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
  var p = z(h, 2);
  return Ke(p, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      Se();
      var y = Me();
      Pe(() => et(y, i())), N(v, y);
    },
    $$slots: { default: !0 }
  }), K(u), Pe(() => zi(d, o())), N(t, u), le(l);
}
se(
  $g,
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
var F3 = /* @__PURE__ */ ne("<input/>"), R3 = /* @__PURE__ */ ne("<input/>");
function dt(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "type", 7), i = g(e, "files", 15), s = g(e, "class", 7), a = g(e, "data-slot", 7, "input"), l = /* @__PURE__ */ Ie(e, [
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
  }, d = ce(), h = G(d);
  {
    var p = (m) => {
      var y = F3();
      Ue(
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
      ), Et(y, (w) => n(w), () => n()), O1(y, i), rs(y, r), N(m, y);
    }, v = (m) => {
      var y = R3();
      Ue(
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
      ), Et(y, (w) => n(w), () => n()), rs(y, r), N(m, y);
    };
    ie(h, (m) => {
      o() === "file" ? m(p) : m(v, !1);
    });
  }
  return N(t, d), le(u);
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
var K3 = /* @__PURE__ */ ne("<textarea></textarea>");
function Ye(t, e) {
  ae(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "class", 7), i = g(e, "data-slot", 7, "textarea"), s = g(e, "height", 7), a = g(e, "autoHeight", 7, !0), l = g(e, "maxHeight", 7), u = g(e, "onHeightChange", 7), d = /* @__PURE__ */ Ie(e, [
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
  Le(() => {
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
  }, y = K3();
  Jv(y);
  var w = (C) => {
    v(), e.oninput?.(C);
  }, b = (C) => {
    v(), e.onchange?.(C);
  };
  return Ue(
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
  ), Et(y, (C) => h = C, () => h), rs(y, r), N(t, y), le(m);
}
se(
  Ye,
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
var j3 = /* @__PURE__ */ ne('<div role="button"><!></div>'), Z3 = /* @__PURE__ */ ne("<div></div>");
function Sg(t, e) {
  const n = Ku(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Ku(n, ["items", "onChange", "activeIndex"]);
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
  Ml();
  var u = Z3();
  return Ue(u, () => ({
    ...r,
    class: `tf-tabs ${Ol(r), st(() => r.class) ?? ""}`
  })), Ct(u, 5, o, so, (d, h, p) => {
    var v = j3();
    Ee(v, "tabindex", p), v.__click = () => a(c(h), p), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), p));
    };
    var m = Z(v);
    {
      var y = (b) => {
        var C = Me();
        Pe(() => et(C, (c(h), st(() => c(h).label)))), N(b, C);
      }, w = (b) => {
        var C = ce(), E = G(C);
        Oe(E, () => (c(h), st(() => c(h).label) ?? ze)), N(b, C);
      };
      ie(m, (b) => {
        c(h), st(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    K(v), Pe(() => jt(v, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), N(d, v);
  }), K(u), N(t, u), le(l);
}
$r(["click", "keydown"]);
se(Sg, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var W3 = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), q3 = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), Y3 = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), X3 = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), U3 = /* @__PURE__ */ ne("<div></div>");
const G3 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function _g(t, e) {
  ae(e, !0), Ge(t, G3);
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
    var h = X3(), p = Z(h);
    Ee(p, "tabindex", d), p.__click = () => i(c(u)), p.__keydown = (x) => {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), i(c(u)));
    };
    var v = Z(p);
    {
      var m = (x) => {
        var O = W3(), L = Z(O);
        qn(L, {
          get target() {
            return c(u).icon;
          }
        }), K(O), N(x, O);
      };
      ie(v, (x) => {
        c(u).icon && x(m);
      });
    }
    var y = z(v, 2);
    qn(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = z(y, 2);
    K(p);
    var b = z(p, 2);
    {
      var C = (x) => {
        var O = q3(), L = Z(O);
        qn(L, {
          get target() {
            return c(u).description;
          }
        }), K(O), N(x, O);
      };
      ie(b, (x) => {
        c(u).description && x(C);
      });
    }
    var E = z(b, 2);
    {
      var k = (x) => {
        var O = Y3(), L = Z(O);
        qn(L, {
          get target() {
            return c(u).content;
          }
        }), K(O), N(x, O);
      };
      ie(E, (x) => {
        o().includes(c(u).key) && x(k);
      });
    }
    K(h), Pe((x) => jt(w, 1, `tf-collapse-item-title-arrow ${x ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), N(l, h);
  }), K(a), Pe(() => {
    _t(a, e.style), jt(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), N(t, a), le(s);
}
$r(["click", "keydown"]);
se(_g, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
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
  }, o = ce(), i = G(o);
  {
    var s = (l) => {
      var u = ce(), d = G(u);
      Oe(d, () => n() ?? ze), N(l, u);
    }, a = (l) => {
      var u = ce(), d = G(u);
      Rs(d, n), N(l, u);
    };
    ie(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return N(t, o), le(r);
}
se(qn, { target: {} }, [], [], !0);
function hl(t, e) {
  ae(e, !0);
  let n = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  na(t, He({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = G(s);
      Oe(a, () => e.children ?? ze), N(o, s);
    },
    $$slots: { default: !0 }
  })), le();
}
se(hl, {}, [], [], !0);
const ft = () => mn("svelteflow__node_id"), fn = () => mn("tinyflow_options");
var J3 = /* @__PURE__ */ ne('<span class="tf-select-heading-item">,</span>'), Q3 = /* @__PURE__ */ ne("<!> <!>", 1), e4 = /* @__PURE__ */ ne('<span class="tf-select-heading-span"> </span>'), t4 = /* @__PURE__ */ ne('<span class="tf-select-heading"><!></span> <!>', 1), n4 = /* @__PURE__ */ ne('<div class="tf-select-empty">暂无数据</div>'), r4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), o4 = /* @__PURE__ */ ne('<span style="width: 16px;height: 16px;"></span>'), i4 = /* @__PURE__ */ ne('<span class="tf-select-option-selected"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), s4 = /* @__PURE__ */ ne('<span class="tf-select-option-content"><!> <!></span> <!>', 1), a4 = /* @__PURE__ */ ne("<!> <!>", 1), l4 = /* @__PURE__ */ ne('<span class="tf-select-heading-span"> </span>'), u4 = /* @__PURE__ */ ne('<span class="tf-select-heading"><!></span> <!>', 1), c4 = /* @__PURE__ */ ne('<div class="tf-select-empty">暂无数据</div>'), d4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), h4 = /* @__PURE__ */ ne('<span style="width: 16px;height: 16px;"></span>'), p4 = /* @__PURE__ */ ne('<span class="tf-select-option-selected"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px;height: 16px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), f4 = /* @__PURE__ */ ne('<span class="tf-select-option-content"><!> <!></span> <!>', 1), g4 = /* @__PURE__ */ ne("<!> <!>", 1);
function xt(t, e) {
  ae(e, !0);
  let n = g(e, "items", 7), r = g(e, "onSelect", 7), o = g(e, "value", 23, () => []), i = g(e, "defaultValue", 23, () => []), s = g(e, "expandAll", 7, !0), a = g(e, "multiple", 7, !1), l = g(e, "expandValue", 23, () => []), u = g(e, "placeholder", 7), d = g(e, "disabled", 7, !1), h = g(e, "class", 7), p = /* @__PURE__ */ Ie(e, [
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
  ]), v = fn().defaultTheme, m = /* @__PURE__ */ $(() => {
    const _ = [], S = (H) => {
      for (const P of H)
        _.push(P), P.children?.length && S(P.children);
    };
    return S(n()), _;
  }), y = /* @__PURE__ */ $(() => {
    const _ = [], S = o().length > 0 ? o() : i();
    for (const H of S) {
      if (H == null) continue;
      const P = c(m).find((D) => D.value === H);
      P && _.push(P);
    }
    return _;
  }), w = /* @__PURE__ */ $(() => !a() && c(y).length > 0 ? String(c(y)[0].value) : ""), b = /* @__PURE__ */ $(() => a() ? c(y).map((_) => String(_.value)) : []);
  function C(_, S) {
    _.stopPropagation(), r()?.(S);
  }
  function E(_, S = 0) {
    const H = [];
    if (_)
      for (const P of _) {
        H.push({ item: P, level: S });
        const D = s() || l().includes(P.value);
        P.children?.length && D && H.push(...E(P.children, S + 1));
      }
    return H;
  }
  let k = /* @__PURE__ */ $(() => E(n()));
  function x(_) {
    return {
      value: String(_.value),
      label: typeof _.label == "string" ? _.label : String(_.value),
      disabled: !1
    };
  }
  var O = {
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
  }, L = ce(), j = G(L);
  {
    var B = (_) => {
      var S = ce(), H = G(S);
      bt(H, () => cl, (P, D) => {
        D(P, He(
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
            children: (A, V) => {
              var W = a4(), U = G(W);
              {
                let X = /* @__PURE__ */ $(() => pn("nopan nodrag tf-select", d() && "tf-select-disabled", h()));
                bt(U, () => dl, (Y, F) => {
                  F(Y, {
                    get class() {
                      return c(X);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (q, Q) => {
                      var ee = t4(), oe = G(ee), I = Z(oe);
                      {
                        var te = (re) => {
                          var ue = ce(), ge = G(ue);
                          Ct(ge, 19, () => c(y), (ye) => ye.value, (ye, be, de) => {
                            var we = Q3(), Te = G(we);
                            qn(Te, {
                              get target() {
                                return c(be).label;
                              }
                            });
                            var J = z(Te, 2);
                            {
                              var Ve = ($e) => {
                                var ke = J3();
                                N($e, ke);
                              };
                              ie(J, ($e) => {
                                c(de) < c(y).length - 1 && $e(Ve);
                              });
                            }
                            N(ye, we);
                          }), N(re, ue);
                        }, fe = (re) => {
                          var ue = e4(), ge = Z(ue, !0);
                          K(ue), Pe(() => et(ge, u() ?? "")), N(re, ue);
                        };
                        ie(I, (re) => {
                          c(y).length > 0 ? re(te) : re(fe, !1);
                        });
                      }
                      K(oe);
                      var he = z(oe, 2);
                      hl(he, { class: "tf-select-heading-icon" }), N(q, ee);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var M = z(U, 2);
              bt(M, () => tl, (X, Y) => {
                Y(X, {
                  children: (F, q) => {
                    var Q = ce(), ee = G(Q);
                    {
                      let oe = /* @__PURE__ */ $(() => pn("nopan nodrag nowheel tf-root tf-select-content", v === "dark" && "dark"));
                      bt(ee, () => al, (I, te) => {
                        te(I, {
                          get class() {
                            return c(oe);
                          },
                          children: (fe, he) => {
                            var re = ce(), ue = G(re);
                            bt(ue, () => ul, (ge, ye) => {
                              ye(ge, {
                                style: "padding: 4px;",
                                children: (be, de) => {
                                  var we = ce(), Te = G(we);
                                  {
                                    var J = ($e) => {
                                      var ke = n4();
                                      N($e, ke);
                                    }, Ve = ($e) => {
                                      var ke = ce(), Ae = G(ke);
                                      Ct(Ae, 19, () => c(k), ({ item: qe, level: Qe }, Xe) => `${Xe}_${qe.value}`, (qe, Qe) => {
                                        let Xe = () => c(Qe).item, ot = () => c(Qe).level;
                                        const ve = /* @__PURE__ */ $(() => Xe().children && Xe().children.length > 0), Ne = /* @__PURE__ */ $(() => x(Xe()));
                                        var tt = ce(), je = G(tt);
                                        {
                                          const at = (nt, Pt) => {
                                            let it = () => Pt?.().selected;
                                            var lt = s4(), gt = G(lt), dr = Z(gt);
                                            {
                                              var $o = (ct) => {
                                                var an = r4();
                                                N(ct, an);
                                              }, sn = (ct) => {
                                                var an = o4();
                                                N(ct, an);
                                              };
                                              ie(dr, (ct) => {
                                                c(ve) ? ct($o) : ct(sn, !1);
                                              });
                                            }
                                            var ra = z(dr, 2);
                                            qn(ra, {
                                              get target() {
                                                return Xe().label;
                                              }
                                            }), K(gt);
                                            var oa = z(gt, 2);
                                            {
                                              var ia = (ct) => {
                                                var an = i4();
                                                N(ct, an);
                                              };
                                              ie(oa, (ct) => {
                                                it() && ct(ia);
                                              });
                                            }
                                            N(nt, lt);
                                          };
                                          let Dt = /* @__PURE__ */ $(() => ot() * 12);
                                          bt(je, () => ll, (nt, Pt) => {
                                            Pt(nt, {
                                              get value() {
                                                return c(Ne).value;
                                              },
                                              get label() {
                                                return c(Ne).label;
                                              },
                                              class: "tf-select-option",
                                              get style() {
                                                return `padding-left: ${c(Dt) ?? ""}px`;
                                              },
                                              onclick: (it) => C(it, Xe()),
                                              children: at,
                                              $$slots: { default: !0 }
                                            });
                                          });
                                        }
                                        N(qe, tt);
                                      }), N($e, ke);
                                    };
                                    ie(Te, ($e) => {
                                      c(k).length === 0 ? $e(J) : $e(Ve, !1);
                                    });
                                  }
                                  N(be, we);
                                },
                                $$slots: { default: !0 }
                              });
                            }), N(fe, re);
                          },
                          $$slots: { default: !0 }
                        });
                      });
                    }
                    N(F, Q);
                  },
                  $$slots: { default: !0 }
                });
              }), N(A, W);
            },
            $$slots: { default: !0 }
          }
        ));
      }), N(_, S);
    }, T = (_) => {
      var S = ce(), H = G(S);
      bt(H, () => cl, (P, D) => {
        D(P, He(
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
            children: (A, V) => {
              var W = g4(), U = G(W);
              {
                let X = /* @__PURE__ */ $(() => pn("nopan nodrag tf-select", d() && " tf-select-disabled", h()));
                bt(U, () => dl, (Y, F) => {
                  F(Y, {
                    get class() {
                      return c(X);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (q, Q) => {
                      var ee = u4(), oe = G(ee), I = Z(oe);
                      {
                        var te = (re) => {
                          qn(re, {
                            get target() {
                              return c(y)[0].label;
                            }
                          });
                        }, fe = (re) => {
                          var ue = l4(), ge = Z(ue, !0);
                          K(ue), Pe(() => et(ge, u() ?? "")), N(re, ue);
                        };
                        ie(I, (re) => {
                          c(y).length > 0 ? re(te) : re(fe, !1);
                        });
                      }
                      K(oe);
                      var he = z(oe, 2);
                      hl(he, { class: "tf-select-icon" }), N(q, ee);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var M = z(U, 2);
              bt(M, () => tl, (X, Y) => {
                Y(X, {
                  children: (F, q) => {
                    var Q = ce(), ee = G(Q);
                    {
                      let oe = /* @__PURE__ */ $(() => pn("nopan nodrag nowheel tf-root tf-select-content", v === "dark" && "dark"));
                      bt(ee, () => al, (I, te) => {
                        te(I, {
                          get class() {
                            return c(oe);
                          },
                          children: (fe, he) => {
                            var re = ce(), ue = G(re);
                            bt(ue, () => ul, (ge, ye) => {
                              ye(ge, {
                                style: "padding: 4px;",
                                children: (be, de) => {
                                  var we = ce(), Te = G(we);
                                  {
                                    var J = ($e) => {
                                      var ke = c4();
                                      N($e, ke);
                                    }, Ve = ($e) => {
                                      var ke = ce(), Ae = G(ke);
                                      Ct(Ae, 19, () => c(k), ({ item: qe, level: Qe }, Xe) => `${Xe}_${qe.value}`, (qe, Qe) => {
                                        let Xe = () => c(Qe).item, ot = () => c(Qe).level;
                                        const ve = /* @__PURE__ */ $(() => Xe().children && Xe().children.length > 0), Ne = /* @__PURE__ */ $(() => x(Xe()));
                                        var tt = ce(), je = G(tt);
                                        {
                                          const at = (nt, Pt) => {
                                            let it = () => Pt?.().selected;
                                            var lt = f4(), gt = G(lt), dr = Z(gt);
                                            {
                                              var $o = (ct) => {
                                                var an = d4();
                                                N(ct, an);
                                              }, sn = (ct) => {
                                                var an = h4();
                                                N(ct, an);
                                              };
                                              ie(dr, (ct) => {
                                                c(ve) ? ct($o) : ct(sn, !1);
                                              });
                                            }
                                            var ra = z(dr, 2);
                                            qn(ra, {
                                              get target() {
                                                return Xe().label;
                                              }
                                            }), K(gt);
                                            var oa = z(gt, 2);
                                            {
                                              var ia = (ct) => {
                                                var an = p4();
                                                N(ct, an);
                                              };
                                              ie(oa, (ct) => {
                                                it() && ct(ia);
                                              });
                                            }
                                            N(nt, lt);
                                          };
                                          let Dt = /* @__PURE__ */ $(() => ot() * 12);
                                          bt(je, () => ll, (nt, Pt) => {
                                            Pt(nt, {
                                              get value() {
                                                return c(Ne).value;
                                              },
                                              get label() {
                                                return c(Ne).label;
                                              },
                                              class: "tf-select-option",
                                              get style() {
                                                return `padding-left: ${c(Dt) ?? ""}px`;
                                              },
                                              onclick: (it) => C(it, Xe()),
                                              children: at,
                                              $$slots: { default: !0 }
                                            });
                                          });
                                        }
                                        N(qe, tt);
                                      }), N($e, ke);
                                    };
                                    ie(Te, ($e) => {
                                      c(k).length === 0 ? $e(J) : $e(Ve, !1);
                                    });
                                  }
                                  N(be, we);
                                },
                                $$slots: { default: !0 }
                              });
                            }), N(fe, re);
                          },
                          $$slots: { default: !0 }
                        });
                      });
                    }
                    N(F, Q);
                  },
                  $$slots: { default: !0 }
                });
              }), N(A, W);
            },
            $$slots: { default: !0 }
          }
        ));
      }), N(_, S);
    };
    ie(j, (_) => {
      a() ? _(B) : _(T, !1);
    });
  }
  return N(t, L), le(O);
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
    ug(t, u, {
      placement: r,
      middleware: [
        ig(o),
        // 手动偏移配置
        ag(i),
        //自动翻转
        sg(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [lg({ element: d })] : []
      ]
    }).then(({ x: b, y: C, placement: E, middlewareData: k }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${C}px`
      }), l) {
        const { x, y: O } = k.arrow, L = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: x != null ? `${x}px` : "",
          top: O != null ? `${O}px` : "",
          right: "",
          bottom: "",
          [L]: "2px"
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
var m4 = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Yr(t, e) {
  ae(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  bn(() => (a = v4({
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
  Oe(p, n), K(h), Et(h, (y) => i = y, () => i);
  var v = z(h, 2), m = Z(v);
  return Oe(m, r), K(v), Et(v, (y) => s = y, () => s), K(d), N(t, d), le(u);
}
se(Yr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
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
  }, a = ce(), l = G(a);
  return uh(l, () => `h${r()}`, !1, (u, d) => {
    Ue(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = ce(), p = G(h);
    Oe(p, () => n() ?? ze), N(d, h);
  }), N(t, a), le(s);
}
se(Ze, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var y4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const w4 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--tf-input);border:1px solid transparent;}}"
};
function ki(t, e) {
  ae(e, !0), Ge(t, w4);
  const n = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ $(() => pn("input-btn-more", e.class));
    Ke(t, He(
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
          N(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  le();
}
se(ki, {}, [], [], !0);
const b4 = () => ({ deleteNode: (t) => {
  Re.removeNode(t), Re.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), zn = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, x4 = () => ({ copyNode: (t) => {
  const e = Re.getNode(t);
  if (e) {
    const n = zn(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    Re.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} });
var C4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), k4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), $4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), S4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), _4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), E4 = /* @__PURE__ */ ne('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), P4 = /* @__PURE__ */ ne('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), O4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), N4 = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), T4 = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const D4 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--tf-background);border:1px solid var(--tf-border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--tf-muted-foreground);}"
};
function on(t, e) {
  ae(e, !0), Ge(t, D4);
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
  ]), { deleteNode: E } = b4(), { copyNode: k } = x4(), x = fn(), O = () => {
    x.onNodeExecute?.(b(r()));
  };
  let L = ft();
  var j = {
    get data() {
      return n();
    },
    set data(M) {
      n(M), f();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), f();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), f();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), f();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), f();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), f();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), f();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), f();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(M = !0) {
      d(M), f();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(M = !0) {
      h(M), f();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(M = !0) {
      p(M), f();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(M = !0) {
      v(M), f();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(M) {
      m(M), f();
    }
  }, B = T4(), T = G(B);
  {
    var _ = (M) => {
      of(M, {
        get position() {
          return _e.Top;
        },
        align: "start",
        children: (X, Y) => {
          var F = N4(), q = Z(F);
          {
            var Q = (re) => {
              Ke(re, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (ue, ge) => {
                  var ye = C4();
                  N(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ie(q, (re) => {
              u() && re(Q);
            });
          }
          var ee = z(q, 2);
          {
            var oe = (re) => {
              Ke(re, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (ue, ge) => {
                  var ye = k4();
                  N(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ie(ee, (re) => {
              l() && re(oe);
            });
          }
          var I = z(ee, 2);
          {
            var te = (re) => {
              Ke(re, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: O,
                children: (ue, ge) => {
                  var ye = $4();
                  N(ue, ye);
                },
                $$slots: { default: !0 }
              });
            };
            ie(I, (re) => {
              a() && re(te);
            });
          }
          var fe = z(I, 2);
          {
            var he = (re) => {
              Yr(re, {
                placement: "bottom",
                floating: (ue) => {
                  var ge = P4(), ye = Z(ge), be = z(Z(ye));
                  dt(be, {
                    style: "width: 100%;",
                    onchange: (ve) => {
                      const Ne = ve.target.value;
                      w(L, { title: Ne });
                    },
                    get value() {
                      return n().title;
                    }
                  }), K(ye);
                  var de = z(ye, 2), we = z(Z(de));
                  Ye(we, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ve) => {
                      const Ne = ve.target.value;
                      w(L, { description: Ne });
                    },
                    get value() {
                      return n().description;
                    }
                  }), K(de);
                  var Te = z(de, 2);
                  {
                    var J = (ve) => {
                      var Ne = S4(), tt = z(Z(Ne));
                      Ye(tt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (je) => {
                          const at = je.target.value;
                          w(L, { condition: at });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), K(Ne), N(ve, Ne);
                    };
                    ie(Te, (ve) => {
                      h() && ve(J);
                    });
                  }
                  var Ve = z(Te, 2), $e = z(Z(Ve), 2);
                  Jn($e), $e.__change = (ve) => {
                    const Ne = ve.target.checked;
                    w(L, { loopEnable: Ne });
                  }, K(Ve);
                  var ke = z(Ve, 2);
                  {
                    var Ae = (ve) => {
                      var Ne = _4(), tt = G(Ne), je = z(Z(tt));
                      {
                        let it = /* @__PURE__ */ $(() => n().loopIntervalMs || "1000");
                        Ye(je, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const gt = lt.target.value;
                            w(L, { loopIntervalMs: gt });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      K(tt);
                      var at = z(tt, 2), Dt = z(Z(at));
                      {
                        let it = /* @__PURE__ */ $(() => n().maxLoopCount || "0");
                        Ye(Dt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const gt = lt.target.value;
                            w(L, { maxLoopCount: gt });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      K(at);
                      var nt = z(at, 2), Pt = z(Z(nt));
                      Ye(Pt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (it) => {
                          const lt = it.target.value;
                          w(L, { loopBreakCondition: lt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), K(nt), N(ve, Ne);
                    };
                    ie(ke, (ve) => {
                      n().loopEnable && ve(Ae);
                    });
                  }
                  var qe = z(ke, 2), Qe = z(Z(qe), 2);
                  Jn(Qe), Qe.__change = (ve) => {
                    const Ne = ve.target.checked;
                    w(L, { retryEnable: Ne });
                  }, K(qe);
                  var Xe = z(qe, 2);
                  {
                    var ot = (ve) => {
                      var Ne = E4(), tt = G(Ne), je = z(Z(tt));
                      {
                        let it = /* @__PURE__ */ $(() => n().retryIntervalMs || "1000");
                        Ye(je, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const gt = lt.target.value;
                            w(L, { retryIntervalMs: gt });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      K(tt);
                      var at = z(tt, 2), Dt = z(Z(at));
                      {
                        let it = /* @__PURE__ */ $(() => n().maxRetryCount || "3");
                        Ye(Dt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const gt = lt.target.value;
                            w(L, { maxRetryCount: gt });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      K(at);
                      var nt = z(at, 2), Pt = z(Z(nt), 2);
                      Jn(Pt), Pt.__change = (it) => {
                        const lt = it.target.checked;
                        w(L, { resetRetryCountAfterNormal: lt });
                      }, K(nt), Pe(() => Vi(Pt, !!n().resetRetryCountAfterNormal)), N(ve, Ne);
                    };
                    ie(Xe, (ve) => {
                      n().retryEnable && ve(ot);
                    });
                  }
                  K(ge), Pe(() => {
                    Vi($e, !!n().loopEnable), Vi(Qe, !!n().retryEnable);
                  }), N(ue, ge);
                },
                children: (ue, ge) => {
                  Ke(ue, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (ye, be) => {
                      var de = O4();
                      N(ye, de);
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
          K(F), N(X, F);
        },
        $$slots: { default: !0 }
      });
    };
    ie(T, (M) => {
      (a() || l() || u()) && M(_);
    });
  }
  var S = z(T, 2), H = z(Z(S), 2), P = Z(H);
  _g(P, {
    get items() {
      return c(C);
    },
    get activeKeys() {
      return y;
    },
    onChange: (M, X) => {
      w(r(), { expand: X?.includes("key") }), m()?.(X?.includes("key") ? "key" : "");
    }
  }), K(H), K(S);
  var D = z(S, 2);
  {
    var A = (M) => {
      yr(M, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ie(D, (M) => {
      v() && M(A);
    });
  }
  var V = z(D, 2);
  {
    var W = (M) => {
      yr(M, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ie(V, (M) => {
      p() && M(W);
    });
  }
  var U = z(V, 2);
  return Oe(U, () => i() ?? ze), N(t, B), le(j);
}
$r(["change"]);
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
var A4 = /* @__PURE__ */ ne('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), M4 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据类型： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj">参数描述： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), I4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), L4 = /* @__PURE__ */ ne('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const H4 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Eg(t, e) {
  ae(e, !0), Ge(t, H4);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = ft(), i = ur(o), s = /* @__PURE__ */ $(() => ({ ...n(), ...i?.current?.data?.parameters[r()] })), a = /* @__PURE__ */ $(() => ["text", "other"].includes(c(s).contentType || "text") ? sf : af), l = /* @__PURE__ */ $(() => c(s).contentType === "text" || !c(s).contentType);
  const { updateNodeData: u } = wt(), d = (T, _) => {
    u(o, (S) => {
      let H = S.data.parameters;
      return H[r()][T] = _, { parameters: H };
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
  }, E = L4(), k = G(E), x = Z(k);
  dt(x, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数",
    oninput: p
  }), K(k);
  var O = z(k, 2), L = Z(O);
  kg(L, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: v
  }), K(O);
  var j = z(O, 2), B = Z(j);
  return Et(
    Yr(B, {
      placement: "bottom",
      floating: (T) => {
        var _ = M4(), S = Z(_), H = z(Z(S));
        {
          let I = /* @__PURE__ */ $(() => c(s).contentType ? [c(s).contentType] : []);
          xt(H, {
            get items() {
              return Jl;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(I);
            },
            onSelect: y
          });
        }
        K(S);
        var P = z(S, 2), D = z(Z(P));
        {
          let I = /* @__PURE__ */ $(() => c(s).formType ? [c(s).formType] : []);
          xt(D, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(I);
            },
            onSelect: m
          });
        }
        K(P);
        var A = z(P, 2);
        {
          var V = (I) => {
            var te = A4(), fe = z(Z(te));
            {
              let he = /* @__PURE__ */ $(() => c(s).enums?.join(`
`));
              Ye(fe, {
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
            K(te), N(I, te);
          };
          ie(A, (I) => {
            c(l) && (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && I(V);
          });
        }
        var W = z(A, 2), U = z(Z(W));
        Ye(U, {
          rows: 1,
          style: "width: 100%;",
          onchange: (I) => {
            h("formLabel", I);
          },
          get value() {
            return c(s).formLabel;
          },
          placeholder: "请输入数据标题"
        }), K(W);
        var M = z(W, 2), X = z(Z(M));
        Ye(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (I) => {
            h("formDescription", I);
          },
          get value() {
            return c(s).formDescription;
          },
          placeholder: "请输入数据描述"
        }), K(M);
        var Y = z(M, 2), F = z(Z(Y));
        Ye(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (I) => {
            h("formPlaceholder", I);
          },
          get value() {
            return c(s).formPlaceholder;
          },
          placeholder: "请输入占位符"
        }), K(Y);
        var q = z(Y, 2), Q = z(Z(q));
        Ye(Q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (I) => {
            h("description", I);
          },
          get value() {
            return c(s).description;
          },
          placeholder: "请输入参数描述"
        }), K(q);
        var ee = z(q, 2), oe = Z(ee);
        Ke(oe, {
          variant: "destructive",
          onclick: b,
          children: (I, te) => {
            Se();
            var fe = Me("删除");
            N(I, fe);
          },
          $$slots: { default: !0 }
        }), K(ee), K(_), N(T, _);
      },
      children: (T, _) => {
        Ke(T, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (S, H) => {
            var P = I4();
            N(S, P);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => w = T,
    () => w
  ), K(j), N(t, E), le(C);
}
se(Eg, { parameter: {}, index: {} }, [], [], !0);
var z4 = /* @__PURE__ */ ne('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), V4 = /* @__PURE__ */ ne('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), B4 = /* @__PURE__ */ ne('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const F4 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function Pg(t, e) {
  ae(e, !0), Ge(t, F4);
  let n = ft(), r = ur(n), o = /* @__PURE__ */ $(() => [...r?.current?.data?.parameters || []]);
  var i = B4(), s = Z(i);
  {
    var a = (u) => {
      var d = z4();
      Se(4), N(u, d);
    };
    ie(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = z(s, 2);
  Ct(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, h) => {
      Eg(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(h);
        }
      });
    },
    (u) => {
      var d = V4();
      N(u, d);
    }
  ), K(i), N(t, i), le();
}
se(Pg, {}, [], [], !0);
const ni = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = zn()), ni(e.children);
}), t), kn = () => {
  const { updateNodeData: t } = wt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => ni(s?.children)) : ni(r?.children);
      function o(s) {
        return {
          name: "",
          // dataType: 'String',
          refType: "ref",
          ...s,
          id: zn()
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
var R4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), K4 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), j4 = /* @__PURE__ */ ne('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Z4 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--tf-muted);border:1px solid transparent;}"
};
function Og(t, e) {
  ae(e, !0), Ge(t, Z4);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return on(t, He(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = R4();
      N(a, l);
    },
    children: (a, l) => {
      var u = j4(), d = G(u), h = Z(d);
      Ze(h, {
        level: 3,
        children: (m, y) => {
          Se();
          var w = Me("输入参数");
          N(m, w);
        },
        $$slots: { default: !0 }
      });
      var p = z(h, 2);
      Ke(p, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, y) => {
          var w = K4();
          N(m, w);
        },
        $$slots: { default: !0 }
      }), K(d);
      var v = z(d, 2);
      Pg(v, {}), N(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), le(s);
}
se(Og, { data: {} }, [], [], !0);
const Ng = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && !t.includes(r.source) && (t.push(r.source), Ng(t, r.source, n));
}, Tg = (t, e, n, r) => !t || t.length === 0 ? [] : t.map((o) => ({
  label: o.name + r(o, n),
  value: e + "." + o.name,
  children: Tg(o.children, e + "." + o.name, n, r)
})), W4 = (t) => t.contentType === "text" || !t.contentType, ad = (t, e, n, r) => {
  if (t.type === "startNode") {
    const o = t.data.parameters, i = [];
    if (o) for (const s of o)
      i.push({
        label: s.name + r(s, e || !W4(s) && s.formType === "checkbox"),
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
          children: Tg(o, t.id, e || t.type === "loopNode", r)
        };
    }
  }
}, Dg = (t = !1) => {
  const e = ft(), n = ur(e), r = /* @__PURE__ */ $(Cn), o = /* @__PURE__ */ $(() => c(r).nodes), i = /* @__PURE__ */ $(() => c(r).edges), s = /* @__PURE__ */ $(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ $(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e), d = (p, v) => {
      if (p?.dataType)
        return h(p.dataType, v);
      if (p?.ref) {
        const m = p?.ref?.split(".");
        for (const y of c(o))
          if (y.id === m[0]) {
            if (y.data.parameters) {
              for (let w of y.data.parameters)
                if (w.name === m[1]) {
                  if (w.dataType)
                    return h(w.dataType, v);
                  if (!w.ref)
                    return d(w, v);
                }
            }
            if (y.data.outputDefs) {
              for (let w of y.data.outputDefs)
                if (w.name === m[1]) {
                  if (w.dataType)
                    return h(w.dataType, v);
                  if (!w.ref)
                    return d(w, v);
                }
            }
          }
      }
      return h("", v);
    }, h = (p, v) => (console.log("dataType", p), v ? p ? ` (Array&lt;${p}&gt;)` : " (Array&lt;&gt;)" : ` (${p})`);
    if (t)
      for (const p of c(o)) {
        const v = p.parentId === n.current.id;
        if (v) {
          const m = ad(p, v, u, d);
          m && l.push(m);
        }
      }
    else {
      const p = [];
      Ng(p, e, c(i));
      for (const v of c(o))
        if (p.includes(v.id)) {
          const m = v.parentId === n.current.id, y = ad(v, m, u, d);
          y && l.push(y);
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
var q4 = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据类型： <!></div>'), Y4 = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">数据选项： <!></div>'), X4 = /* @__PURE__ */ ne('<div class="input-more-item svelte-jmeys3">输入方式： <!></div> <label class="input-more-item svelte-jmeys3" style="display: flex;flex-direction: row;align-items: center">是否必填: <input type="checkbox"/></label> <!> <div class="input-more-item svelte-jmeys3">数据标题： <!></div> <div class="input-more-item svelte-jmeys3">数据描述： <!></div> <div class="input-more-item svelte-jmeys3">占位符： <!></div>', 1), U4 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), G4 = /* @__PURE__ */ ne('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const J4 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Ag(t, e) {
  ae(e, !0), Ge(t, J4), bn(() => {
    c(u).refType || w({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = ft(), l = ur(a), u = /* @__PURE__ */ $(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  })), d = /* @__PURE__ */ $(() => ["text", "other"].includes(c(u).contentType || "text") ? sf : af), h = /* @__PURE__ */ $(() => c(u).contentType === "text" || !c(u).contentType);
  const { updateNodeData: p } = wt(), v = (V, W) => {
    p(a, (U) => {
      let M = U.data?.[o()];
      return M[r()] = { ...M[r()], [V]: W }, { [o()]: M };
    });
  }, m = (V, W) => {
    const U = W.target.value;
    v(V, U);
  }, y = (V) => {
    const W = V.value;
    v("ref", W);
  }, w = (V) => {
    const W = V.value;
    v("refType", W), W === "form" && (v("contentType", c(u).contentType || "text"), v("formType", c(u).formType || "input"));
  }, b = (V) => {
    const W = V.value;
    v("contentType", W);
  }, C = (V) => {
    const W = V.value;
    v("formType", W);
  };
  let E;
  const k = () => {
    p(a, (V) => {
      let W = V.data?.[o()];
      return W.splice(r(), 1), { [o()]: [...W] };
    }), E?.hide();
  };
  let x = Dg(i());
  const O = fn().formRefTypeEnable ? Oc : Oc.filter((V) => V.value !== "form");
  var L = {
    get parameter() {
      return n();
    },
    set parameter(V) {
      n(V), f();
    },
    get index() {
      return r();
    },
    set index(V) {
      r(V), f();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(V) {
      o(V), f();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(V) {
      i(V), f();
    },
    get showContentType() {
      return s();
    },
    set showContentType(V = !1) {
      s(V), f();
    }
  }, j = G4(), B = G(j), T = Z(B);
  {
    let V = /* @__PURE__ */ $(() => c(u).nameDisabled === !0);
    dt(T, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数",
      get disabled() {
        return c(V);
      },
      oninput: (W) => m("name", W)
    });
  }
  K(B);
  var _ = z(B, 2), S = Z(_);
  {
    var H = (V) => {
      dt(V, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (W) => m("value", W)
      });
    }, P = (V) => {
      var W = ce(), U = G(W);
      {
        var M = (Y) => {
          {
            let F = /* @__PURE__ */ $(() => [c(u).ref]);
            xt(Y, {
              get items() {
                return x.current;
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
        }, X = (Y) => {
          var F = ce(), q = G(F);
          {
            var Q = (ee) => {
              dt(ee, { placeholder: "在执行期间，由用户输入", disabled: !0 });
            };
            ie(
              q,
              (ee) => {
                c(u).refType === "form" && ee(Q);
              },
              !0
            );
          }
          N(Y, F);
        };
        ie(
          U,
          (Y) => {
            c(u).refType === "ref" ? Y(M) : Y(X, !1);
          },
          !0
        );
      }
      N(V, W);
    };
    ie(S, (V) => {
      c(u).refType === "fixed" ? V(H) : V(P, !1);
    });
  }
  K(_);
  var D = z(_, 2), A = Z(D);
  return Et(
    Yr(A, {
      placement: "bottom",
      floating: (V) => {
        var W = U4(), U = Z(W), M = z(Z(U));
        {
          let te = /* @__PURE__ */ $(() => c(u).refType ? [c(u).refType] : []);
          xt(M, {
            get items() {
              return O;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(te);
            },
            onSelect: w
          });
        }
        K(U);
        var X = z(U, 2);
        {
          var Y = (te) => {
            var fe = q4(), he = z(Z(fe));
            {
              let re = /* @__PURE__ */ $(() => c(u).contentType ? [c(u).contentType] : []);
              xt(he, {
                get items() {
                  return Jl;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(re);
                },
                onSelect: b
              });
            }
            K(fe), N(te, fe);
          };
          ie(X, (te) => {
            (s() || c(u).refType === "form") && te(Y);
          });
        }
        var F = z(X, 2);
        {
          var q = (te) => {
            var fe = X4(), he = G(fe), re = z(Z(he));
            {
              let ke = /* @__PURE__ */ $(() => c(u).formType ? [c(u).formType] : []);
              xt(re, {
                get items() {
                  return c(d);
                },
                style: "width: 100%",
                defaultValue: ["input"],
                get value() {
                  return c(ke);
                },
                onSelect: C
              });
            }
            K(he);
            var ue = z(he, 2), ge = z(Z(ue));
            Jn(ge), ge.__change = (ke) => {
              const Ae = ke.target.checked;
              v("required", Ae);
            }, K(ue);
            var ye = z(ue, 2);
            {
              var be = (ke) => {
                var Ae = Y4(), qe = z(Z(Ae));
                {
                  let Qe = /* @__PURE__ */ $(() => c(u).enums?.join(`
`));
                  Ye(qe, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Xe) => {
                      v("enums", Xe.target?.value.trim().split(`
`));
                    },
                    get value() {
                      return c(Qe);
                    },
                    placeholder: "一行一个选项"
                  });
                }
                K(Ae), N(ke, Ae);
              };
              ie(ye, (ke) => {
                c(h) && (c(u).formType === "radio" || c(u).formType === "checkbox" || c(u).formType === "select") && ke(be);
              });
            }
            var de = z(ye, 2), we = z(Z(de));
            Ye(we, {
              rows: 1,
              placeholder: "请输入数据标题",
              style: "width: 100%;",
              onchange: (ke) => {
                m("formLabel", ke);
              },
              get value() {
                return c(u).formLabel;
              }
            }), K(de);
            var Te = z(de, 2), J = z(Z(Te));
            Ye(J, {
              rows: 2,
              placeholder: "请输入数据描述",
              style: "width: 100%;",
              onchange: (ke) => {
                m("formDescription", ke);
              },
              get value() {
                return c(u).formDescription;
              }
            }), K(Te);
            var Ve = z(Te, 2), $e = z(Z(Ve));
            Ye($e, {
              rows: 2,
              placeholder: "请输入占位符内容",
              style: "width: 100%;",
              onchange: (ke) => {
                m("formPlaceholder", ke);
              },
              get value() {
                return c(u).formPlaceholder;
              }
            }), K(Ve), Pe(() => Vi(ge, !!c(u).required)), N(te, fe);
          };
          ie(F, (te) => {
            c(u).refType === "form" && te(q);
          });
        }
        var Q = z(F, 2), ee = z(Z(Q));
        Ye(ee, {
          rows: 1,
          style: "width: 100%;",
          onchange: (te) => {
            m("defaultValue", te);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), K(Q);
        var oe = z(Q, 2), I = Z(oe);
        Ke(I, {
          variant: "destructive",
          onclick: k,
          children: (te, fe) => {
            Se();
            var he = Me("删除");
            N(te, he);
          },
          $$slots: { default: !0 }
        }), K(oe), K(W), N(V, W);
      },
      children: (V, W) => {
        ki(V, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => E = V,
    () => E
  ), K(D), N(t, j), le(L);
}
$r(["change"]);
se(
  Ag,
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
var Q4 = /* @__PURE__ */ ne('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), eC = /* @__PURE__ */ ne('<div class="none-params svelte-32f1pk"> </div>'), tC = /* @__PURE__ */ ne('<div class="input-container svelte-32f1pk"><!> <!></div>');
const nC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function Lt(t, e) {
  ae(e, !0), Ge(t, nC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = ft(), a = ur(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = tC(), h = Z(d);
  {
    var p = (m) => {
      var y = Q4();
      Se(4), N(m, y);
    };
    ie(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = z(h, 2);
  return Ct(
    v,
    19,
    () => c(l),
    (m) => m.id,
    (m, y, w) => {
      Ag(m, {
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
      var y = eC(), w = Z(y, !0);
      K(y), Pe(() => et(w, n())), N(m, y);
    }
  ), K(d), N(t, d), le(u);
}
se(
  Lt,
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
var rC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), oC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iC = /* @__PURE__ */ ne('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const sC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Mg(t, e) {
  ae(e, !0), Ge(t, sC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), f();
    }
  };
  return on(t, He(
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
        var l = rC();
        N(a, l);
      },
      children: (a, l) => {
        var u = iC(), d = G(u), h = Z(d);
        Ze(h, {
          level: 3,
          children: (m, y) => {
            Se();
            var w = Me("输出参数");
            N(m, w);
          },
          $$slots: { default: !0 }
        });
        var p = z(h, 2);
        Ke(p, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, y) => {
            var w = oC();
            N(m, w);
          },
          $$slots: { default: !0 }
        }), K(d);
        var v = z(d, 2);
        Lt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), N(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(s);
}
se(Mg, { data: {} }, [], [], !0);
const $a = (t) => JSON.parse(JSON.stringify(t));
var aC = /* @__PURE__ */ xe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), lC = /* @__PURE__ */ ne('<div class="input-more-item svelte-hwmib9"><!></div>'), uC = /* @__PURE__ */ ne('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), cC = /* @__PURE__ */ ne('<div class="input-item svelte-hwmib9"><!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const dC = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Ig(t, e) {
  ae(e, !0), Ge(t, dC);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = ft(), a = ur(s), l = /* @__PURE__ */ $(() => {
    let T = a?.current?.data?.[o()], _;
    if (T && r().length > 0) {
      let S = T;
      for (let H = 0; H < r().length; H++) {
        const P = r()[H];
        H == r().length - 1 ? _ = S[P] : S = S[P].children;
      }
    }
    return { ...n(), ..._ };
  });
  const { updateNodeData: u } = wt(), d = (T, _) => {
    u(s, (S) => {
      const H = S.data?.[o()];
      if (H && r().length > 0) {
        let P = H;
        for (let D = 0; D < r().length; D++) {
          const A = r()[D];
          D == r().length - 1 ? P[A] = { ...P[A], [T]: _ } : P = P[A].children;
        }
      }
      return { [o()]: [...$a(H)] };
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
        for (let H = 0; H < r().length; H++) {
          const P = r()[H];
          H == r().length - 1 ? S.splice(P, 1) : S = S[P].children;
        }
      }
      return { [o()]: [...$a(_)] };
    }), v?.hide();
  }, y = () => {
    u(s, (T) => {
      let _ = T.data?.[o()];
      if (_ && r().length > 0) {
        let S = _;
        for (let H = 0; H < r().length; H++) {
          const P = r()[H];
          H == r().length - 1 ? S[P].children ? S[P].children.push({ id: zn(), name: "newParam", dataType: "String" }) : S[P].children = [{ id: zn(), name: "newParam", dataType: "String" }] : S = S[P].children;
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
  }, b = cC(), C = G(b), E = Z(C);
  {
    let T = /* @__PURE__ */ $(() => (r().length - 1) * 12), _ = /* @__PURE__ */ $(() => c(l).nameDisabled === !0);
    dt(E, {
      get style() {
        return `width: 100%;  margin-left: ${c(T) ?? ""}px;`;
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
  K(C);
  var k = z(C, 2), x = Z(k);
  {
    let T = /* @__PURE__ */ $(() => c(l).dataTypeItems || Nb), _ = /* @__PURE__ */ $(() => c(l).dataType ? [c(l).dataType] : []), S = /* @__PURE__ */ $(() => c(l).dataTypeDisabled === !0);
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
  var O = z(x, 2);
  {
    var L = (T) => {
      Ke(T, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (_, S) => {
          var H = aC();
          N(_, H);
        },
        $$slots: { default: !0 }
      });
    };
    ie(O, (T) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && T(L);
    });
  }
  K(k);
  var j = z(k, 2), B = Z(j);
  return Et(
    Yr(B, {
      placement: "bottom",
      floating: (T) => {
        var _ = uC(), S = Z(_), H = z(Z(S));
        {
          let W = /* @__PURE__ */ $(() => c(l).defaultValue || "");
          Ye(H, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(W);
            },
            onchange: (U) => {
              h("defaultValue", U);
            }
          });
        }
        K(S);
        var P = z(S, 2), D = z(Z(P));
        {
          let W = /* @__PURE__ */ $(() => c(l).description || "");
          Ye(D, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(W);
            },
            onchange: (U) => {
              h("description", U);
            }
          });
        }
        K(P);
        var A = z(P, 2);
        {
          var V = (W) => {
            var U = lC(), M = Z(U);
            Ke(M, {
              variant: "destructive",
              onclick: m,
              children: (X, Y) => {
                Se();
                var F = Me("删除");
                N(X, F);
              },
              $$slots: { default: !0 }
            }), K(U), N(W, U);
          };
          ie(A, (W) => {
            c(l).deleteDisabled !== !0 && W(V);
          });
        }
        K(_), N(T, _);
      },
      children: (T, _) => {
        ki(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => v = T,
    () => v
  ), K(j), N(t, b), le(w);
}
se(
  Ig,
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
var hC = /* @__PURE__ */ ne("<!> <!>", 1), pC = /* @__PURE__ */ ne('<div class="none-params svelte-1oz5kx0"> </div>'), fC = /* @__PURE__ */ ne('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), gC = /* @__PURE__ */ ne('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const vC = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function cr(t, e) {
  ae(e, !0), Ge(t, vC);
  const n = (m, y = ze, w = ze) => {
    var b = ce(), C = G(b);
    Ct(
      C,
      19,
      y,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, k, x) => {
        var O = hC(), L = G(O);
        {
          let T = /* @__PURE__ */ $(() => [...w(), c(x)]);
          Ig(L, {
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
        var j = z(L, 2);
        {
          var B = (T) => {
            {
              let _ = /* @__PURE__ */ $(() => [...w(), c(x)]);
              n(T, () => c(k).children, () => c(_));
            }
          };
          ie(j, (T) => {
            c(k).children && T(B);
          });
        }
        N(E, O);
      },
      (E) => {
        var k = ce(), x = G(k);
        {
          var O = (L) => {
            var j = pC(), B = Z(j, !0);
            K(j), Pe(() => et(B, r())), N(L, j);
          };
          ie(x, (L) => {
            w().length === 0 && L(O);
          });
        }
        N(E, k);
      }
    ), N(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数");
  let s = ft(), a = ur(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[o()] || []]);
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
    set placeholder(m = "请输入参数") {
      i(m), f();
    }
  }, d = gC(), h = Z(d);
  {
    var p = (m) => {
      var y = fC();
      Se(4), N(m, y);
    };
    ie(h, (m) => {
      c(l).length !== 0 && m(p);
    });
  }
  var v = z(h, 2);
  return n(v, () => c(l) || [], () => []), K(d), N(t, d), le(u);
}
se(cr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var mC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), yC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bC = /* @__PURE__ */ ne('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), xC = /* @__PURE__ */ ne('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), CC = /* @__PURE__ */ ne('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const kC = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--tf-background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--tf-border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}`
};
function Lg(t, e) {
  ae(e, !0), Ge(t, kC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn(), s = fn();
  let a = /* @__PURE__ */ me(ht([]));
  bn(async () => {
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
  Le(() => {
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
  return on(t, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var p = mC();
        N(h, p);
      },
      children: (h, p) => {
        var v = CC(), m = G(v), y = Z(m);
        Ze(y, {
          level: 3,
          children: (M, X) => {
            Se();
            var Y = Me("输入参数");
            N(M, Y);
          },
          $$slots: { default: !0 }
        });
        var w = z(y, 2);
        Ke(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (M, X) => {
            var Y = yC();
            N(M, Y);
          },
          $$slots: { default: !0 }
        }), K(m);
        var b = z(m, 2);
        Lt(b, {});
        var C = z(b, 2), E = Z(C);
        Ze(E, {
          level: 3,
          children: (M, X) => {
            Se();
            var Y = Me("图片识别");
            N(M, Y);
          },
          $$slots: { default: !0 }
        });
        var k = z(E, 2);
        Ke(k, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (M, X) => {
            var Y = wC();
            N(M, Y);
          },
          $$slots: { default: !0 }
        }), K(C);
        var x = z(C, 2);
        Lt(x, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var O = z(x, 2);
        Ze(O, {
          level: 3,
          mt: "10px",
          children: (M, X) => {
            Se();
            var Y = Me("模型设置");
            N(M, Y);
          },
          $$slots: { default: !0 }
        });
        var L = z(O, 4), j = Z(L);
        {
          let M = /* @__PURE__ */ $(() => n().llmId ? [n().llmId] : []);
          xt(j, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (X) => {
              const Y = X.value;
              l(o, () => ({ llmId: Y }));
            },
            get value() {
              return c(M);
            }
          });
        }
        var B = z(j, 2);
        Yr(B, {
          placement: "bottom",
          floating: (M) => {
            var X = bC(), Y = z(Z(X), 2), F = Z(Y), q = Z(F), Q = Z(q);
            K(q);
            var ee = z(q, 2);
            Jn(ee), ee.__input = (de) => l(o, { temperature: parseFloat(de.target.value) }), K(F), K(Y);
            var oe = z(Y, 2), I = Z(oe), te = Z(I), fe = Z(te);
            K(te);
            var he = z(te, 2);
            Jn(he), he.__input = (de) => l(o, { topP: parseFloat(de.target.value) }), K(I), K(oe);
            var re = z(oe, 2), ue = Z(re), ge = Z(ue), ye = Z(ge);
            K(ge);
            var be = z(ge, 2);
            Jn(be), be.__input = (de) => l(o, { topK: parseInt(de.target.value) }), K(ue), K(re), K(X), Pe(() => {
              et(Q, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), zi(ee, n().temperature ?? 0.5), et(fe, `Top P: ${n().topP ?? 0.9 ?? ""}`), zi(he, n().topP ?? 0.9), et(ye, `Top K: ${n().topK ?? 50 ?? ""}`), zi(be, n().topK ?? 50);
            }), N(M, X);
          },
          children: (M, X) => {
            ki(M, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), K(L);
        var T = z(L, 4), _ = Z(T);
        {
          let M = /* @__PURE__ */ $(() => n().systemPrompt || "");
          Ye(_, {
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
        K(T);
        var S = z(T, 4), H = Z(S);
        {
          let M = /* @__PURE__ */ $(() => n().userPrompt || "");
          Ye(H, {
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
        K(S);
        var P = z(S, 2);
        {
          var D = (M) => {
            var X = xC(), Y = z(G(X), 2), F = Z(Y);
            {
              let q = /* @__PURE__ */ $(() => n().jsonSchema || "");
              Ye(F, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(q);
                },
                oninput: (Q) => {
                  l(o, { jsonSchema: Q.target.value });
                }
              });
            }
            K(Y), N(M, X);
          };
          ie(P, (M) => {
            n().outType === "json" && M(D);
          });
        }
        var A = z(P, 2), V = Z(A);
        Ze(V, {
          level: 3,
          children: (M, X) => {
            Se();
            var Y = Me("输出参数");
            N(M, Y);
          },
          $$slots: { default: !0 }
        });
        var W = z(V, 2);
        {
          let M = /* @__PURE__ */ $(() => n().outType ? [n().outType] : []);
          xt(W, {
            class: "tf-select-xs",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (X) => {
              u(X.value);
            },
            get value() {
              return c(M);
            }
          });
        }
        K(A);
        var U = z(A, 2);
        cr(U, {}), N(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(d);
}
$r(["input"]);
se(Lg, { data: {} }, [], [], !0);
var $C = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), SC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _C = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), EC = /* @__PURE__ */ ne('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const PC = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hg(t, e) {
  ae(e, !0), Ge(t, PC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  bn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ft(), { addParameter: i } = kn(), { updateNodeData: s } = wt(), a = [
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
  return on(t, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = $C();
        N(u, d);
      },
      children: (u, d) => {
        var h = EC(), p = G(h), v = Z(p);
        Ze(v, {
          level: 3,
          children: (B, T) => {
            Se();
            var _ = Me("输入参数");
            N(B, _);
          },
          $$slots: { default: !0 }
        });
        var m = z(v, 2);
        Ke(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, T) => {
            var _ = SC();
            N(B, _);
          },
          $$slots: { default: !0 }
        }), K(p);
        var y = z(p, 2);
        Lt(y, {});
        var w = z(y, 2);
        Ze(w, {
          level: 3,
          mt: "10px",
          children: (B, T) => {
            Se();
            var _ = Me("代码");
            N(B, _);
          },
          $$slots: { default: !0 }
        });
        var b = z(w, 4), C = Z(b);
        {
          let B = /* @__PURE__ */ $(() => n().engine ? [n().engine] : ["qlexpress"]);
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
              return c(B);
            }
          });
        }
        K(b);
        var E = z(b, 4), k = Z(E);
        {
          let B = /* @__PURE__ */ $(() => n().code || "");
          Ye(k, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (T) => {
              s(o, () => ({ code: T.target.value }));
            },
            get value() {
              return c(B);
            }
          });
        }
        K(E);
        var x = z(E, 2), O = Z(x);
        Ze(O, {
          level: 3,
          mt: "10px",
          children: (B, T) => {
            Se();
            var _ = Me("输出参数");
            N(B, _);
          },
          $$slots: { default: !0 }
        });
        var L = z(O, 2);
        Ke(L, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (B, T) => {
            var _ = _C();
            N(B, _);
          },
          $$slots: { default: !0 }
        }), K(x);
        var j = z(x, 2);
        cr(j, {}), N(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
se(Hg, { data: {} }, [], [], !0);
var OC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), NC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), TC = /* @__PURE__ */ ne('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const DC = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function zg(t, e) {
  ae(e, !0), Ge(t, DC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn(), { updateNodeData: s } = wt();
  Le(() => {
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
  return on(t, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = OC();
        N(l, u);
      },
      children: (l, u) => {
        var d = TC(), h = G(d), p = Z(h);
        Ze(p, {
          level: 3,
          children: (x, O) => {
            Se();
            var L = Me("输入参数");
            N(x, L);
          },
          $$slots: { default: !0 }
        });
        var v = z(p, 2);
        Ke(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, O) => {
            var L = NC();
            N(x, L);
          },
          $$slots: { default: !0 }
        }), K(h);
        var m = z(h, 2);
        Lt(m, {});
        var y = z(m, 2);
        Ze(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (x, O) => {
            Se();
            var L = Me("模板内容");
            N(x, L);
          },
          $$slots: { default: !0 }
        });
        var w = z(y, 2), b = Z(w);
        {
          let x = /* @__PURE__ */ $(() => n().template || "");
          Ye(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (O) => {
              s(o, () => ({ template: O.target.value }));
            },
            get value() {
              return c(x);
            }
          });
        }
        K(w);
        var C = z(w, 2), E = Z(C);
        Ze(E, {
          level: 3,
          mt: "10px",
          children: (x, O) => {
            Se();
            var L = Me("输出参数");
            N(x, L);
          },
          $$slots: { default: !0 }
        }), K(C);
        var k = z(C, 2);
        cr(k, {}), N(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
se(zg, { data: {} }, [], [], !0);
var AC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), MC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), IC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), LC = /* @__PURE__ */ ne('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), HC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), VC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), BC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), FC = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), RC = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), KC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jC = /* @__PURE__ */ ne('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const ZC = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;gap:8px;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;gap:4px;}"
};
function Vg(t, e) {
  ae(e, !0), Ge(t, ZC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  bn(() => {
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
  ], i = ft(), { addParameter: s } = kn(), { updateNodeData: a } = wt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), f();
    }
  };
  return on(t, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = AC();
        N(u, d);
      },
      children: (u, d) => {
        var h = jC(), p = G(h), v = Z(p);
        Ze(v, {
          level: 3,
          children: (q, Q) => {
            Se();
            var ee = Me("输入参数");
            N(q, ee);
          },
          $$slots: { default: !0 }
        });
        var m = z(v, 2);
        Ke(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (q, Q) => {
            var ee = MC();
            N(q, ee);
          },
          $$slots: { default: !0 }
        }), K(p);
        var y = z(p, 2);
        Lt(y, {});
        var w = z(y, 2);
        Ze(w, {
          level: 3,
          mt: "10px",
          children: (q, Q) => {
            Se();
            var ee = Me("URL 地址");
            N(q, ee);
          },
          $$slots: { default: !0 }
        });
        var b = z(w, 2), C = Z(b), E = Z(C);
        {
          let q = /* @__PURE__ */ $(() => n().method ? [n().method] : ["get"]);
          xt(E, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (Q) => {
              const ee = Q.value;
              a(i, () => ({ method: ee }));
            },
            get value() {
              return c(q);
            }
          });
        }
        K(C);
        var k = z(C, 2), x = Z(k);
        {
          let q = /* @__PURE__ */ $(() => n().url || "");
          dt(x, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (Q) => {
              a(i, () => ({ url: Q.target.value }));
            },
            get value() {
              return c(q);
            }
          });
        }
        K(k), K(b);
        var O = z(b, 2), L = Z(O);
        Ze(L, {
          level: 3,
          children: (q, Q) => {
            Se();
            var ee = Me("Http 头信息");
            N(q, ee);
          },
          $$slots: { default: !0 }
        });
        var j = z(L, 2);
        Ke(j, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (q, Q) => {
            var ee = IC();
            N(q, ee);
          },
          $$slots: { default: !0 }
        }), K(O);
        var B = z(O, 2);
        Lt(B, { dataKeyName: "headers" });
        var T = z(B, 2);
        {
          var _ = (q) => {
            var Q = LC(), ee = G(Q);
            Ze(ee, {
              level: 3,
              mt: "10px",
              children: (we, Te) => {
                Se();
                var J = Me("Body");
                N(we, J);
              },
              $$slots: { default: !0 }
            });
            var oe = z(ee, 2), I = Z(oe), te = Z(I);
            {
              let we = /* @__PURE__ */ $(() => !n().bodyType || n().bodyType === "");
              dt(te, {
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
            Se(), K(I);
            var fe = z(I, 2), he = Z(fe);
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
            Se(), K(fe);
            var re = z(fe, 2), ue = Z(re);
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
            Se(), K(re);
            var ge = z(re, 2), ye = Z(ge);
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
            Se(), K(ge);
            var be = z(ge, 2), de = Z(be);
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
            Se(), K(be), K(oe), N(q, Q);
          };
          ie(T, (q) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && q(_);
          });
        }
        var S = z(T, 2);
        {
          var H = (q) => {
            var Q = zC(), ee = G(Q), oe = Z(ee);
            Ze(oe, {
              level: 3,
              children: (fe, he) => {
                Se();
                var re = Me("参数");
                N(fe, re);
              },
              $$slots: { default: !0 }
            });
            var I = z(oe, 2);
            Ke(I, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (fe, he) => {
                var re = HC();
                N(fe, re);
              },
              $$slots: { default: !0 }
            }), K(ee);
            var te = z(ee, 2);
            Lt(te, { dataKeyName: "formData" }), N(q, Q);
          };
          ie(S, (q) => {
            n().bodyType === "form-data" && q(H);
          });
        }
        var P = z(S, 2);
        {
          var D = (q) => {
            var Q = BC(), ee = G(Q), oe = Z(ee);
            Ze(oe, {
              level: 3,
              children: (fe, he) => {
                Se();
                var re = Me("Body 参数");
                N(fe, re);
              },
              $$slots: { default: !0 }
            });
            var I = z(oe, 2);
            Ke(I, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (fe, he) => {
                var re = VC();
                N(fe, re);
              },
              $$slots: { default: !0 }
            }), K(ee);
            var te = z(ee, 2);
            Lt(te, { dataKeyName: "formUrlencoded" }), N(q, Q);
          };
          ie(P, (q) => {
            n().bodyType === "x-www-form-urlencoded" && q(D);
          });
        }
        var A = z(P, 2);
        {
          var V = (q) => {
            var Q = FC(), ee = Z(Q);
            Ye(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (oe) => {
                a(i, { bodyJson: oe.target.value });
              }
            }), K(Q), N(q, Q);
          };
          ie(A, (q) => {
            n().bodyType === "json" && q(V);
          });
        }
        var W = z(A, 2);
        {
          var U = (q) => {
            var Q = RC(), ee = Z(Q);
            Ye(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (oe) => {
                a(i, { bodyRaw: oe.target.value });
              }
            }), K(Q), N(q, Q);
          };
          ie(W, (q) => {
            n().bodyType === "raw" && q(U);
          });
        }
        var M = z(W, 2), X = Z(M);
        Ze(X, {
          level: 3,
          mt: "10px",
          children: (q, Q) => {
            Se();
            var ee = Me("输出参数");
            N(q, ee);
          },
          $$slots: { default: !0 }
        });
        var Y = z(X, 2);
        Ke(Y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (q, Q) => {
            var ee = KC();
            N(q, ee);
          },
          $$slots: { default: !0 }
        }), K(M);
        var F = z(M, 2);
        cr(F, {}), N(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(l);
}
se(Vg, { data: {} }, [], [], !0);
var WC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), qC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), YC = /* @__PURE__ */ ne('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const XC = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bg(t, e) {
  ae(e, !0), Ge(t, XC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn(), s = fn();
  let a = /* @__PURE__ */ me(ht([]));
  bn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = wt();
  Le(() => {
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
  return on(t, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = WC();
        N(d, h);
      },
      children: (d, h) => {
        var p = YC(), v = G(p), m = Z(v);
        Ze(m, {
          level: 3,
          children: (_, S) => {
            Se();
            var H = Me("输入参数");
            N(_, H);
          },
          $$slots: { default: !0 }
        });
        var y = z(m, 2);
        Ke(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, S) => {
            var H = qC();
            N(_, H);
          },
          $$slots: { default: !0 }
        }), K(v);
        var w = z(v, 2);
        Lt(w, {});
        var b = z(w, 2);
        Ze(b, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            Se();
            var H = Me("知识库设置");
            N(_, H);
          },
          $$slots: { default: !0 }
        });
        var C = z(b, 4), E = Z(C);
        {
          let _ = /* @__PURE__ */ $(() => n().knowledgeId ? [n().knowledgeId] : []);
          xt(E, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (S) => {
              const H = S.value;
              l(o, () => ({ knowledgeId: H }));
            },
            get value() {
              return c(_);
            }
          });
        }
        K(C);
        var k = z(C, 4), x = Z(k);
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
        }), K(k);
        var O = z(k, 4), L = Z(O);
        {
          let _ = /* @__PURE__ */ $(() => n().limit || "");
          dt(L, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (S) => {
              const H = S.target.value;
              l(o, () => ({ limit: H }));
            },
            get value() {
              return c(_);
            }
          });
        }
        K(O);
        var j = z(O, 2), B = Z(j);
        Ze(B, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            Se();
            var H = Me("输出参数");
            N(_, H);
          },
          $$slots: { default: !0 }
        }), K(j);
        var T = z(j, 2);
        cr(T, {}), N(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
se(Bg, { data: {} }, [], [], !0);
var UC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), GC = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), JC = /* @__PURE__ */ ne('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const QC = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Fg(t, e) {
  ae(e, !0), Ge(t, QC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn(), s = fn();
  let a = /* @__PURE__ */ me(ht([]));
  bn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = wt();
  Le(() => {
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
  return on(t, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = UC();
        N(d, h);
      },
      children: (d, h) => {
        var p = JC(), v = G(p), m = Z(v);
        Ze(m, {
          level: 3,
          children: (_, S) => {
            Se();
            var H = Me("输入参数");
            N(_, H);
          },
          $$slots: { default: !0 }
        });
        var y = z(m, 2);
        Ke(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, S) => {
            var H = GC();
            N(_, H);
          },
          $$slots: { default: !0 }
        }), K(v);
        var w = z(v, 2);
        Lt(w, {});
        var b = z(w, 2);
        Ze(b, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            Se();
            var H = Me("搜索引擎设置");
            N(_, H);
          },
          $$slots: { default: !0 }
        });
        var C = z(b, 4), E = Z(C);
        {
          let _ = /* @__PURE__ */ $(() => n().engine ? [n().engine] : []);
          xt(E, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (S) => {
              const H = S.value;
              l(o, () => ({ engine: H }));
            },
            get value() {
              return c(_);
            }
          });
        }
        K(C);
        var k = z(C, 4), x = Z(k);
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
        }), K(k);
        var O = z(k, 4), L = Z(O);
        dt(L, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (_) => {
            const S = _.target.value;
            l(o, () => ({ limit: S }));
          }
        }), K(O);
        var j = z(O, 2), B = Z(j);
        Ze(B, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            Se();
            var H = Me("输出参数");
            N(_, H);
          },
          $$slots: { default: !0 }
        }), K(j);
        var T = z(j, 2);
        cr(T, {}), N(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(u);
}
se(Fg, { data: {} }, [], [], !0);
var e6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), t6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), n6 = /* @__PURE__ */ ne('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const r6 = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--tf-primary);color:var(--tf-primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function Rg(t, e) {
  ae(e, !0), Ge(t, r6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn();
  Le(() => {
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
  return on(t, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = e6();
        N(a, l);
      },
      handle: (a) => {
        yr(a, {
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
        var u = n6(), d = G(u), h = Z(d);
        Ze(h, {
          level: 3,
          children: (b, C) => {
            Se();
            var E = Me("循环变量");
            N(b, E);
          },
          $$slots: { default: !0 }
        }), K(d);
        var p = z(d, 2);
        Lt(p, { dataKeyName: "loopVars" });
        var v = z(p, 2), m = Z(v);
        Ze(m, {
          level: 3,
          children: (b, C) => {
            Se();
            var E = Me("输出参数");
            N(b, E);
          },
          $$slots: { default: !0 }
        });
        var y = z(m, 2);
        Ke(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, C) => {
            var E = t6();
            N(b, E);
          },
          $$slots: { default: !0 }
        }), K(v);
        var w = z(v, 2);
        Lt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), N(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), le(s);
}
se(Rg, { data: {} }, [], [], !0);
var o6 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据类型： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), i6 = /* @__PURE__ */ ne('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const s6 = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function Kg(t, e) {
  ae(e, !0), Ge(t, s6);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = ft(), a = ur(s), l = /* @__PURE__ */ $(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = wt(), d = (S, H) => {
    u(s, (P) => {
      let D = P.data?.[o()];
      return D[r()] = { ...D[r()], [S]: H }, { [o()]: D };
    });
  }, h = (S, H) => {
    const P = H.target.value;
    d(S, P);
  }, p = (S) => {
    const H = S.value;
    d("ref", H);
  }, v = (S) => {
    const H = S.value;
    d("formType", H);
  }, m = (S) => {
    const H = S.value;
    d("contentType", H);
  };
  let y;
  const w = () => {
    u(s, (S) => {
      let H = S.data?.[o()];
      return H.splice(r(), 1), { [o()]: [...H] };
    }), y?.hide();
  };
  let b = Dg(i());
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
  }, E = i6(), k = G(E), x = Z(k);
  {
    let S = /* @__PURE__ */ $(() => c(l).nameDisabled === !0);
    dt(x, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数",
      get disabled() {
        return c(S);
      },
      oninput: (H) => h("name", H)
    });
  }
  K(k);
  var O = z(k, 2), L = Z(O);
  {
    var j = (S) => {
      dt(S, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (H) => h("value", H)
      });
    }, B = (S) => {
      var H = ce(), P = G(H);
      {
        var D = (A) => {
          {
            let V = /* @__PURE__ */ $(() => [c(l).ref]);
            xt(A, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(V);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        ie(
          P,
          (A) => {
            c(l).refType !== "input" && A(D);
          },
          !0
        );
      }
      N(S, H);
    };
    ie(L, (S) => {
      c(l).refType === "fixed" ? S(j) : S(B, !1);
    });
  }
  K(O);
  var T = z(O, 2), _ = Z(T);
  return Et(
    Yr(_, {
      placement: "bottom",
      floating: (S) => {
        var H = o6(), P = Z(H), D = z(Z(P));
        {
          let q = /* @__PURE__ */ $(() => c(l).contentType ? [c(l).contentType] : []);
          xt(D, {
            get items() {
              return Jl;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(q);
            },
            onSelect: m
          });
        }
        K(P);
        var A = z(P, 2), V = z(Z(A));
        {
          let q = /* @__PURE__ */ $(() => c(l).formType ? [c(l).formType] : []);
          xt(V, {
            get items() {
              return Tb;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(q);
            },
            onSelect: v
          });
        }
        K(A);
        var W = z(A, 2), U = z(Z(W));
        Ye(U, {
          rows: 1,
          style: "width: 100%;",
          onchange: (q) => {
            h("formLabel", q);
          },
          get value() {
            return c(l).formLabel;
          }
        }), K(W);
        var M = z(W, 2), X = z(Z(M));
        Ye(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (q) => {
            h("formDescription", q);
          },
          get value() {
            return c(l).formDescription;
          }
        }), K(M);
        var Y = z(M, 2), F = Z(Y);
        Ke(F, {
          variant: "destructive",
          onclick: w,
          children: (q, Q) => {
            Se();
            var ee = Me("删除");
            N(q, ee);
          },
          $$slots: { default: !0 }
        }), K(Y), K(H), N(S, H);
      },
      children: (S, H) => {
        ki(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => y = S,
    () => y
  ), K(T), N(t, E), le(C);
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
var a6 = /* @__PURE__ */ ne('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), l6 = /* @__PURE__ */ ne('<div class="none-params svelte-1fllp9b"> </div>'), u6 = /* @__PURE__ */ ne('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const c6 = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--tf-muted-foreground);}`
};
function jg(t, e) {
  ae(e, !0), Ge(t, c6);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = ft(), s = ur(i), a = /* @__PURE__ */ $(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = u6(), d = Z(u);
  {
    var h = (v) => {
      var m = a6();
      Se(4), N(v, m);
    };
    ie(d, (v) => {
      c(a).length !== 0 && v(h);
    });
  }
  var p = z(d, 2);
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
      var m = l6(), y = Z(m, !0);
      K(m), Pe(() => et(y, n())), N(v, m);
    }
  ), K(u), N(t, u), le(l);
}
se(jg, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
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
var d6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), h6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), p6 = /* @__PURE__ */ ne('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const f6 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zg(t, e) {
  ae(e, !0), Ge(t, f6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn(), { updateNodeData: s } = wt();
  Le(() => {
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
  return on(t, He(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = d6();
        N(l, u);
      },
      children: (l, u) => {
        var d = p6(), h = G(d), p = Z(h);
        Ze(p, {
          level: 3,
          children: (x, O) => {
            Se();
            var L = Me("确认数据");
            N(x, L);
          },
          $$slots: { default: !0 }
        });
        var v = z(p, 2);
        Ke(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (x, O) => {
            var L = h6();
            N(x, L);
          },
          $$slots: { default: !0 }
        }), K(h);
        var m = z(h, 2);
        jg(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = z(m, 2);
        Ze(y, {
          level: 3,
          mt: "10px",
          children: (x, O) => {
            Se();
            var L = Me("确认消息");
            N(x, L);
          },
          $$slots: { default: !0 }
        });
        var w = z(y, 4), b = Z(w);
        {
          let x = /* @__PURE__ */ $(() => n().message || "");
          Ye(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (O) => {
              s(o, () => ({ message: O.target.value }));
            },
            get value() {
              return c(x);
            }
          });
        }
        K(w);
        var C = z(w, 2), E = Z(C);
        Ze(E, {
          level: 3,
          mt: "10px",
          children: (x, O) => {
            Se();
            var L = Me("输出参数");
            N(x, L);
          },
          $$slots: { default: !0 }
        }), K(C);
        var k = z(C, 2);
        cr(k, { placeholder: "" }), N(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), le(a);
}
se(Zg, { data: {} }, [], [], !0);
const g6 = {
  startNode: Og,
  codeNode: Hg,
  confirmNode: Zg,
  llmNode: Lg,
  templateNode: zg,
  httpNode: Vg,
  knowledgeNode: Bg,
  searchEngineNode: Fg,
  loopNode: Rg,
  endNode: Mg
};
var v6 = /* @__PURE__ */ ne("<!> ", 1);
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
      id: `node_${zn()}`,
      type: o(),
      position: v,
      data: { title: r(), description: i(), ...s() }
    };
    Re.addNode(m), Re.selectNodeOnly(m.id);
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
  return Ke(t, {
    draggable: !0,
    ondragstart: l,
    onclick: u,
    get "data-node-type"() {
      return o();
    },
    children: (h, p) => {
      var v = v6(), m = G(v);
      Rs(m, n);
      var y = z(m);
      Pe(() => et(y, ` ${r() ?? ""}`)), N(h, v);
    },
    $$slots: { default: !0 }
  }), le(d);
}
se(fl, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var m6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), y6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), w6 = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Wg(t, e) {
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
  ], s = [], a = fn(), l = a.customNodes;
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
  var u = w6(), d = Z(u), h = Z(d), p = Z(h);
  Sg(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      R(n, b.value.toString(), !0);
    }
  }), K(h);
  var v = z(h, 2), m = Z(v);
  Ct(m, 21, () => o, so, (b, C) => {
    fl(b, He(() => c(C)));
  }), K(m);
  var y = z(m, 2);
  Ct(y, 21, () => s, so, (b, C) => {
    fl(b, He(() => c(C)));
  }), K(y), K(v), K(d);
  var w = z(d, 2);
  Ke(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      R(r, c(r) ? "" : "show", !0);
    },
    children: (b, C) => {
      var E = ce(), k = G(E);
      {
        var x = (L) => {
          var j = m6();
          N(L, j);
        }, O = (L) => {
          var j = y6();
          N(L, j);
        };
        ie(k, (L) => {
          c(r) === "show" ? L(x) : L(O, !1);
        });
      }
      N(b, E);
    },
    $$slots: { default: !0 }
  }), K(u), Pe(() => {
    jt(u, 1, `tf-toolbar ${c(r) ?? ""}`), _t(m, `display: ${c(n) === "base" ? "flex" : "none"}`), _t(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), N(t, u), le();
}
se(Wg, {}, [], [], !0);
const b6 = () => ({ getNode: (t) => Re.getNode(t) }), x6 = () => ({ ensureParentInNodesBefore: (t, e) => {
  Re.updateNodes((n) => {
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
} }), C6 = () => ({ getEdgesByTarget: (t) => Re.getEdges().filter((e) => e.target === t) });
var k6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $6 = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), S6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), _6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), E6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), P6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), O6 = /* @__PURE__ */ ne('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), N6 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), T6 = /* @__PURE__ */ ne('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), D6 = /* @__PURE__ */ ne("<!> <!> <div></div> <!>", 1);
const A6 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}`
};
function qg(t, e) {
  ae(e, !0), Ge(t, A6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ Ie(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ft(), { addParameter: i } = kn(), s = wt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), p = fn().customNodes[e.type];
  p.render?.(h, d, s);
  const v = p.forms;
  let m;
  Le(() => {
    n().expand && m && m.append(h);
  }), Le(() => {
    n() && p.onUpdate?.(h, { ...d, data: n() });
  }), Le(() => {
    !n().parameters && p.parameters && l({
      parameters: ni(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), Le(() => {
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
      var E = ce(), k = G(E);
      Rs(k, () => p.icon), N(C, E);
    };
    let b = /* @__PURE__ */ $(() => ({ ...n(), description: p.description }));
    on(t, He(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (C, E) => {
          var k = D6(), x = G(k);
          {
            var O = (S) => {
              var H = $6(), P = G(H), D = Z(P);
              Ze(D, {
                level: 3,
                children: (U, M) => {
                  Se();
                  var X = Me("输入参数");
                  N(U, X);
                },
                $$slots: { default: !0 }
              });
              var A = z(D, 2);
              {
                var V = (U) => {
                  Ke(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (M, X) => {
                      var Y = k6();
                      N(M, Y);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(A, (U) => {
                  p.parametersAddEnable !== !1 && U(V);
                });
              }
              K(P);
              var W = z(P, 2);
              Lt(W, {}), N(S, H);
            };
            ie(x, (S) => {
              p.parametersEnable !== !1 && S(O);
            });
          }
          var L = z(x, 2);
          {
            var j = (S) => {
              var H = ce(), P = G(H);
              Ct(P, 17, () => v, so, (D, A) => {
                var V = ce(), W = G(V);
                {
                  var U = (X) => {
                    var Y = S6(), F = G(Y), q = Z(F, !0);
                    K(F);
                    var Q = z(F, 2), ee = Z(Q);
                    {
                      let oe = /* @__PURE__ */ $(() => n()[c(A).name] || c(A).defaultValue);
                      dt(ee, He(
                        {
                          get placeholder() {
                            return c(A).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(oe);
                          }
                        },
                        () => c(A).attrs,
                        {
                          onchange: (I) => {
                            u(c(A).name, I);
                          }
                        }
                      ));
                    }
                    K(Q), Pe(() => et(q, c(A).label)), N(X, Y);
                  }, M = (X) => {
                    var Y = ce(), F = G(Y);
                    {
                      var q = (ee) => {
                        var oe = _6(), I = G(oe), te = Z(I, !0);
                        K(I);
                        var fe = z(I, 2), he = Z(fe);
                        {
                          let re = /* @__PURE__ */ $(() => n()[c(A).name] || c(A).defaultValue);
                          Ye(he, He(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(A).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(re);
                              }
                            },
                            () => c(A).attrs,
                            {
                              onchange: (ue) => {
                                u(c(A).name, ue);
                              }
                            }
                          ));
                        }
                        K(fe), Pe(() => et(te, c(A).label)), N(ee, oe);
                      }, Q = (ee) => {
                        var oe = ce(), I = G(oe);
                        {
                          var te = (he) => {
                            var re = E6(), ue = G(re), ge = Z(ue, !0);
                            K(ue);
                            var ye = z(ue, 2), be = Z(ye), de = Z(be), we = Z(de);
                            K(de);
                            var Te = z(de, 2), J = (Ve) => l({ [c(A).name]: parseFloat(Ve.target.value) });
                            Ue(
                              Te,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(A).attrs,
                                value: n()[c(A).name] ?? c(A).defaultValue,
                                oninput: J
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), K(be), K(ye), Pe(() => {
                              et(ge, c(A).label), et(we, `${c(A).description ?? ""}: ${n()[c(A).name] ?? c(A).defaultValue ?? ""}`);
                            }), N(he, re);
                          }, fe = (he) => {
                            var re = ce(), ue = G(re);
                            {
                              var ge = (be) => {
                                var de = P6(), we = G(de), Te = Z(we, !0);
                                K(we);
                                var J = z(we, 2), Ve = Z(J);
                                {
                                  let $e = /* @__PURE__ */ $(() => c(A).options || []), ke = /* @__PURE__ */ $(() => n()[c(A).name] ? [n()[c(A).name]] : [c(A).defaultValue]);
                                  xt(Ve, {
                                    get items() {
                                      return c($e);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(A).placeholder;
                                    },
                                    onSelect: (Ae) => {
                                      const qe = Ae.value;
                                      l({ [c(A).name]: qe });
                                    },
                                    get value() {
                                      return c(ke);
                                    }
                                  });
                                }
                                K(J), Pe(() => et(Te, c(A).label)), N(be, de);
                              }, ye = (be) => {
                                var de = ce(), we = G(de);
                                {
                                  var Te = (Ve) => {
                                    var $e = O6(), ke = G($e), Ae = Z(ke, !0);
                                    K(ke);
                                    var qe = z(ke, 2), Qe = Z(qe);
                                    {
                                      let Xe = /* @__PURE__ */ $(() => c(A).chosen?.buttonText);
                                      $g(Qe, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(A).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Xe);
                                        },
                                        onChosen: (ot, ve, Ne) => {
                                          c(A).chosen?.onChosen?.(l, ot, ve, Ne);
                                        },
                                        get value() {
                                          return n()[c(A).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(A).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    K(qe), Pe(() => et(Ae, c(A).label)), N(Ve, $e);
                                  }, J = (Ve) => {
                                    var $e = ce(), ke = G($e);
                                    {
                                      var Ae = (qe) => {
                                        Ze(qe, He({ level: 3, mt: "10px" }, () => c(A).attrs, {
                                          children: (Qe, Xe) => {
                                            Se();
                                            var ot = Me();
                                            Pe(() => et(ot, c(A).label)), N(Qe, ot);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ie(
                                        ke,
                                        (qe) => {
                                          c(A).type === "heading" && qe(Ae);
                                        },
                                        !0
                                      );
                                    }
                                    N(Ve, $e);
                                  };
                                  ie(
                                    we,
                                    (Ve) => {
                                      c(A).type === "chosen" ? Ve(Te) : Ve(J, !1);
                                    },
                                    !0
                                  );
                                }
                                N(be, de);
                              };
                              ie(
                                ue,
                                (be) => {
                                  c(A).type === "select" ? be(ge) : be(ye, !1);
                                },
                                !0
                              );
                            }
                            N(he, re);
                          };
                          ie(
                            I,
                            (he) => {
                              c(A).type === "slider" ? he(te) : he(fe, !1);
                            },
                            !0
                          );
                        }
                        N(ee, oe);
                      };
                      ie(
                        F,
                        (ee) => {
                          c(A).type === "textarea" ? ee(q) : ee(Q, !1);
                        },
                        !0
                      );
                    }
                    N(X, Y);
                  };
                  ie(W, (X) => {
                    c(A).type === "input" ? X(U) : X(M, !1);
                  });
                }
                N(D, V);
              }), N(S, H);
            };
            ie(L, (S) => {
              v && S(j);
            });
          }
          var B = z(L, 2);
          Et(B, (S) => m = S, () => m);
          var T = z(B, 2);
          {
            var _ = (S) => {
              var H = T6(), P = G(H), D = Z(P);
              Ze(D, {
                level: 3,
                mt: "10px",
                children: (U, M) => {
                  Se();
                  var X = Me("输出参数");
                  N(U, X);
                },
                $$slots: { default: !0 }
              });
              var A = z(D, 2);
              {
                var V = (U) => {
                  Ke(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (M, X) => {
                      var Y = N6();
                      N(M, Y);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(A, (U) => {
                  p.outputDefsAddEnable !== !1 && U(V);
                });
              }
              K(P);
              var W = z(P, 2);
              cr(W, {}), N(S, H);
            };
            ie(T, (S) => {
              p.outputDefsEnable !== !1 && S(_);
            });
          }
          Pe(() => {
            _t(B, p.rootStyle || ""), jt(B, 1, lr(p.rootClass), "svelte-qt4m0r");
          }), N(C, k);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return le(y);
}
se(qg, { data: {} }, [], [], !0);
const M6 = () => ({ updateEdgeData: (t, e, n) => {
  const r = Re.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, Re.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), I6 = () => ({ deleteEdge: (t) => {
  Re.removeEdge(t);
} }), L6 = () => {
  const t = (e, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === e && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (e) => {
    const n = Re.getEdges(), r = [];
    let o = t(e, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Re.getNode(s.target)), i.push(...t(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, H6 = () => ({ getNodeRelativePosition: (t) => {
  let e = Re.getNode(t);
  const n = { x: 0, y: 0 };
  for (; e; )
    n.x += e.position.x, n.y += e.position.y, e.parentId ? e = Re.getNode(e.parentId) : e = void 0;
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
function B6(t) {
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
const F6 = () => (wt(), { copyHandler: async (t) => {
  const e = Re.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = Re.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(z6), o = n.map(B6), i = JSON.stringify({
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
    const u = `node_${zn()}`;
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
      id: `edge_${zn()}`,
      source: u,
      target: d
    });
  }
  Re.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Re.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), ld = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var R6 = /* @__PURE__ */ ne('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), K6 = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), j6 = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Z6 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--tf-background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--tf-border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--tf-muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Yg(t, e) {
  ae(e, !0), Ge(t, Z6);
  const n = g(e, "onInit", 7), r = wt();
  n()(r);
  let o = /* @__PURE__ */ me(!1), i = /* @__PURE__ */ me(null);
  const { updateEdgeData: s } = M6(), a = (Y) => {
    Y.preventDefault(), Y.dataTransfer && (Y.dataTransfer.dropEffect = "move");
  }, l = (Y) => {
    Y.preventDefault();
    const F = r.screenToFlowPosition({ x: Y.clientX - 250, y: Y.clientY - 100 }), q = Y.dataTransfer?.getData("application/tinyflow");
    if (!q)
      return;
    const Q = JSON.parse(q), ee = { id: `node_${zn()}`, position: F, data: {}, ...Q };
    Re.addNode(ee), Re.selectNodeOnly(ee.id);
  }, { getNode: u } = b6(), d = (Y) => {
    const F = u(Y.source), q = u(Y.target);
    if (Y.sourceHandle === "loop_handle" || F.parentId) {
      const Q = r.getEdges();
      for (let ee of Q)
        if (ee.target === Y.target) {
          const oe = u(ee.source);
          if (Y.sourceHandle === "loop_handle" && oe.parentId !== F.id || F.parentId && oe.parentId !== F.parentId)
            return !1;
        }
    }
    return !(!F.parentId && q.parentId && q.parentId !== F.id);
  }, { getNodesFromSource: h } = L6(), { getNodeRelativePosition: p } = H6(), { ensureParentInNodesBefore: v } = x6(), m = (Y, F) => {
    if (!F.isValid)
      return;
    const q = F.toNode;
    if (q.parentId)
      return;
    const Q = F.fromNode, ee = F.fromHandle, oe = { position: { ...q.position } };
    if (ee.id === "loop_handle" ? oe.parentId = Q.id : Q.parentId && (oe.parentId = Q.parentId), oe.parentId) {
      const { x: I, y: te } = p(oe.parentId);
      oe.position = { x: q.position.x - I, y: q.position.y - te }, r.updateNode(q.id, oe), h(q.id).forEach((fe) => {
        r.updateNode(fe.id, {
          parentId: oe.parentId,
          position: { x: fe.position.x - I, y: fe.position.y - te }
        });
      }), v(oe.parentId, q.id);
    }
    setTimeout(() => {
      Re.getEdges().forEach((I) => {
        I.target === q.id && I.source == Q.id && (R(o, !0), R(i, I, !0));
      });
    });
  }, { getEdgesByTarget: y } = C6(), w = (Y) => {
    Y.edges.forEach((F) => {
      F.id === c(i)?.id && (R(i, null), R(o, !1));
      const q = u(F.target);
      if (q && q.parentId) {
        const Q = y(F.target), { x: ee, y: oe } = p(q.parentId);
        if (Q.length === 0)
          r.updateNode(q.id, {
            parentId: void 0,
            position: { x: q.position.x + ee, y: q.position.y + oe }
          }), h(q.id).forEach((I) => {
            r.updateNode(I.id, {
              parentId: void 0,
              position: { x: I.position.x + ee, y: I.position.y + oe }
            });
          });
        else {
          let I = !1;
          for (let te = 0; te < Q.length; te++) {
            const fe = Q[te], he = u(fe.source);
            if (he.parentId || he.type === "loopNode") {
              I = !0;
              break;
            }
          }
          I || (r.updateNode(q.id, {
            parentId: void 0,
            position: { x: q.position.x + ee, y: q.position.y + oe }
          }), h(q.id).forEach((te) => {
            r.updateNode(te.id, {
              parentId: void 0,
              position: { x: te.position.x + ee, y: te.position.y + oe }
            });
          }));
        }
      }
    });
  }, { deleteEdge: b } = I6(), C = (Y, F) => {
  }, E = (Y) => {
  }, { copyHandler: k, pasteHandler: x } = F6(), O = (Y) => {
    ld() || document.getSelection()?.type !== "Range" && ((Y.ctrlKey || Y.metaKey) && Y.key === "c" ? (Y.preventDefault(), k(Y)) : (Y.ctrlKey || Y.metaKey) && Y.key === "a" && (Y.preventDefault(), Re.updateNodes((F) => F.map((q) => ({ ...q, selected: !0 }))), Re.updateEdges((F) => F.map((q) => ({ ...q, selected: !0 })))));
  }, L = async (Y) => {
    ld() || x(Y);
  };
  bn(() => {
    window.addEventListener("keydown", O), window.addEventListener("paste", L);
  }), li(() => {
    window.removeEventListener("keydown", O), window.removeEventListener("paste", L);
  });
  const j = () => {
    const Y = document.getSelection();
    Y && Y.removeAllRanges();
  }, B = {
    // ...nodeTypes
  }, T = fn().customNodes;
  if (T)
    for (let Y of Object.keys(T))
      B[Y] = qg;
  const _ = fn().onDataChange;
  Le(() => {
    _?.({
      nodes: Re.getNodes(),
      edges: Re.getEdges(),
      viewport: Re.getViewport()
    });
  });
  var S = {
    get onInit() {
      return n();
    },
    set onInit(Y) {
      n(Y), f();
    }
  }, H = j6(), P = Z(H), D = Re.getNodes, A = Re.setNodes, V = Re.getEdges, W = Re.setEdges, U = Re.getViewport, M = Re.setViewport;
  {
    let Y = /* @__PURE__ */ $(() => fn().defaultTheme ?? "system"), F = /* @__PURE__ */ $(() => ({ ...g6, ...B })), q = /* @__PURE__ */ $(() => ({
      markerEnd: { type: Xo.ArrowClosed, width: 20, height: 20 }
    }));
    Zp(P, {
      get colorMode() {
        return c(Y);
      },
      get nodeTypes() {
        return c(F);
      },
      get nodes() {
        return D();
      },
      set nodes(Q) {
        A(Q);
      },
      get edges() {
        return V();
      },
      set edges(Q) {
        W(Q);
      },
      get viewport() {
        return U();
      },
      set viewport(Q) {
        M(Q);
      },
      class: "tinyflow-logo",
      ondrop: l,
      ondragover: a,
      isValidConnection: d,
      onconnectend: m,
      onconnectstart: C,
      onconnect: E,
      connectionRadius: 50,
      onpaneclick: j,
      onedgeclick: (Q) => {
        R(o, !0), R(i, Q.edge, !0);
      },
      onbeforeconnect: (Q) => ({ ...Q, id: zn() }),
      ondelete: w,
      onclick: (Q) => {
        const ee = Q.target;
        ee.classList.contains("svelte-flow__edge-interaction") || ee.classList.contains("panel-content") || ee.closest(".panel-content") || (R(o, !1), R(i, null));
      },
      get defaultEdgeOptions() {
        return c(q);
      },
      children: (Q, ee) => {
        var oe = K6(), I = G(oe);
        tf(I, {});
        var te = z(I, 2);
        Jp(te, {});
        var fe = z(te, 2);
        rf(fe, {});
        var he = z(fe, 2);
        {
          var re = (ue) => {
            vi(ue, {
              children: (ge, ye) => {
                var be = R6(), de = z(Z(be), 4), we = Z(de);
                {
                  let $e = /* @__PURE__ */ $(() => c(i)?.data?.condition);
                  Ye(we, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c($e);
                    },
                    onchange: (ke) => {
                      c(i) && s(c(i).id, { condition: ke.target?.value });
                    }
                  });
                }
                K(de);
                var Te = z(de, 2), J = Z(Te);
                Ke(J, {
                  variant: "destructive",
                  onclick: () => {
                    b(c(i)?.id), R(o, !1);
                  },
                  children: ($e, ke) => {
                    Se();
                    var Ae = Me("删除");
                    N($e, Ae);
                  },
                  $$slots: { default: !0 }
                });
                var Ve = z(J, 2);
                Ke(Ve, {
                  variant: "default",
                  onclick: () => {
                    R(o, !1);
                  },
                  children: ($e, ke) => {
                    Se();
                    var Ae = Me("保存");
                    N($e, Ae);
                  },
                  $$slots: { default: !0 }
                }), K(Te), K(be), N(ge, be);
              },
              $$slots: { default: !0 }
            });
          };
          ie(he, (ue) => {
            c(o) && ue(re);
          });
        }
        N(Q, oe);
      },
      $$slots: { default: !0 }
    });
  }
  var X = z(P, 2);
  return Wg(X, {}), K(H), N(t, H), le(S);
}
se(Yg, { onInit: {} }, [], [], !0);
function W6(t, e) {
  ae(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Re.init(o?.nodes || [], o?.edges || []), Hr("tinyflow_options", n());
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
  return Wp(t, {
    children: (s, a) => {
      Yg(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), le(i);
}
customElements.define("tinyflow-component", se(W6, { options: {}, onInit: {} }, [], [], !1));
const Y6 = /* @__PURE__ */ Xg({
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
    defaultTheme: {},
    formRefTypeEnable: { type: Boolean }
  },
  setup(t, { expose: e }) {
    const n = t, r = Ug(null);
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
    return Gg(() => {
      if (r.value) {
        const l = { ...n };
        "data" in l && l.data != null && (l.data = i(l.data)), o = new Ex({
          ...l,
          element: r.value
        });
      }
    }), Jg(() => {
      o && (o.destroy(), o = null);
    }), e({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null),
      getInstance: () => o || (console.warn("Tinyflow instance is not initialized"), null)
    }), (l, u) => (ev(), Qg("div", {
      ref_key: "divRef",
      ref: r,
      class: nv(["tinyflow", l.className]),
      style: tv(l.style)
    }, null, 6));
  }
});
export {
  Y6 as Tinyflow
};
//# sourceMappingURL=index.js.map
