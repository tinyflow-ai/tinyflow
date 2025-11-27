import { defineComponent as df, ref as ff, onMounted as pf, onUnmounted as hf, createElementBlock as gf, openBlock as vf, normalizeStyle as mf, normalizeClass as yf } from "vue";
const wf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(wf);
const Pl = 1, Ol = 2, Ml = 4, bf = 8, xf = 16, $f = 1, Cf = 2, Ll = 4, _f = 8, kf = 16, Tl = 1, Sf = 2, Vl = "[", yi = "[!", Os = "]", ar = {}, st = Symbol(), Ef = "http://www.w3.org/1999/xhtml", Nf = "http://www.w3.org/2000/svg", Pf = "@attach", Of = !1;
var wi = Array.isArray, Mf = Array.prototype.indexOf, Ms = Array.from, Go = Object.keys, Uo = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, Dl = Object.getOwnPropertyDescriptors, zl = Object.prototype, Lf = Array.prototype, bi = Object.getPrototypeOf, ma = Object.isExtensible;
function jr(e) {
  return typeof e == "function";
}
const ht = () => {
};
function Tf(e) {
  return e();
}
function rs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Hl() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function mt(e, t, n = !1) {
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
const ut = 2, Ls = 4, xi = 8, Il = 1 << 24, En = 16, Nn = 32, qn = 64, $i = 128, Ft = 512, ft = 1024, _t = 2048, Pn = 4096, Lt = 8192, xn = 16384, Ci = 32768, Cn = 65536, ya = 1 << 17, Al = 1 << 18, pr = 1 << 19, Zl = 1 << 20, Ur = 32768, os = 1 << 21, Ts = 1 << 22, Zn = 1 << 23, an = Symbol("$state"), Vs = Symbol("legacy props"), Vf = Symbol(""), yr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Df = 1, _i = 3, hr = 8;
function Ds(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Hf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function If() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Af(e) {
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
function ho(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Xf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function qf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let be = !1;
function Mt(e) {
  be = e;
}
let Ee;
function Je(e) {
  if (e === null)
    throw ho(), ar;
  return Ee = e;
}
function _n() {
  return Je(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(Ee)
  );
}
function j(e) {
  if (be) {
    if (/* @__PURE__ */ Qt(Ee) !== null)
      throw ho(), ar;
    Ee = e;
  }
}
function me(e = 1) {
  if (be) {
    for (var t = e, n = Ee; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n);
    Ee = n;
  }
}
function Qo(e = !0) {
  for (var t = 0, n = Ee; ; ) {
    if (n.nodeType === hr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Os) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Vl || r === yi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(n)
    );
    e && n.remove(), n = o;
  }
}
function jl(e) {
  if (!e || e.nodeType !== hr)
    throw ho(), ar;
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
let Hr = !1, Ff = !1;
function Gf() {
  Hr = !0;
}
const Uf = [];
function Yl(e, t = !1, n = !1) {
  return Ko(e, /* @__PURE__ */ new Map(), "", Uf, null, n);
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
let We = null;
function kr(e) {
  We = e;
}
function Rn(e) {
  return (
    /** @type {T} */
    Wl().get(e)
  );
}
function Sr(e, t) {
  return Wl().set(e, t), t;
}
function le(e, t = !1, n) {
  We = {
    p: We,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Hr && !t ? { s: null, u: null, $: [] } : null
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
      cu(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, We = t.p, e ?? /** @type {T} */
  {};
}
function go() {
  return !Hr || We !== null && We.l === null;
}
function Wl(e) {
  return We === null && Ds(), We.c ??= new Map(Qf(We) || void 0);
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
let er = [];
function Xl() {
  var e = er;
  er = [], rs(e);
}
function Fn(e) {
  if (er.length === 0 && !qr) {
    var t = er;
    queueMicrotask(() => {
      t === er && Xl();
    });
  }
  er.push(e);
}
function Jf() {
  for (; er.length > 0; )
    Xl();
}
function ql(e) {
  var t = Ne;
  if (t === null)
    return Le.f |= Zn, e;
  if ((t.f & Ci) === 0) {
    if ((t.f & $i) === 0)
      throw e;
    t.b.error(e);
  } else
    Er(e, t);
}
function Er(e, t) {
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
const Vo = /* @__PURE__ */ new Set();
let qe = null, It = null, Ht = [], ki = null, is = !1, qr = !1;
class Xt {
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
    Ht = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#i(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (qe = null, wa(n.render_effects), wa(n.effects), this.#l?.resolve()), It = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(t, n) {
    t.f ^= ft;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Nn | qn)) !== 0, s = i && (o & ft) !== 0, a = s || (o & Lt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & $i) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= ft : (o & Ls) !== 0 ? n.effects.push(r) : yo(r) && ((r.f & En) !== 0 && n.block_effects.push(r), eo(r));
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
      ((n.f & _t) !== 0 ? this.#a : this.#o).push(n), this.#u(n.deps), pt(n, ft);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & ut) === 0 || (n.f & Ur) === 0 || (n.f ^= Ur, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Zn) === 0 && (this.current.set(t, t.v), It?.set(t, t.v));
  }
  activate() {
    qe = this, this.apply();
  }
  deactivate() {
    qe === this && (qe = null, It = null);
  }
  flush() {
    if (this.activate(), Ht.length > 0) {
      if (Fl(), qe !== null && qe !== this)
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
    if (Vo.size > 1) {
      this.previous.clear();
      var t = It, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Vo) {
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
          var o = Ht;
          Ht = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Gl(d, a, l, u);
          if (Ht.length > 0) {
            qe = i, i.apply();
            for (const d of Ht)
              i.#i(d, r);
            i.deactivate();
          }
          Ht = o;
        }
      }
      qe = null, It = t;
    }
    this.committed = !0, Vo.delete(this);
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
      pt(t, _t), lr(t);
    for (const t of this.#o)
      pt(t, Pn), lr(t);
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
    if (qe === null) {
      const t = qe = new Xt();
      Vo.add(qe), qr || Xt.enqueue(() => {
        qe === t && t.flush();
      });
    }
    return qe;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Fn(t);
  }
  apply() {
  }
}
function g(e) {
  var t = qr;
  qr = !0;
  try {
    for (var n; ; ) {
      if (Jf(), Ht.length === 0 && (qe?.flush(), Ht.length === 0))
        return ki = null, /** @type {T} */
        n;
      Fl();
    }
  } finally {
    qr = t;
  }
}
function Fl() {
  var e = Kn;
  is = !0;
  try {
    var t = 0;
    for (ei(!0); Ht.length > 0; ) {
      var n = Xt.ensure();
      if (t++ > 1e3) {
        var r, o;
        ep();
      }
      n.process(Ht), jn.clear();
    }
  } finally {
    is = !1, ei(e), ki = null;
  }
}
function ep() {
  try {
    Zf();
  } catch (e) {
    Er(e, ki);
  }
}
let gn = null;
function wa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (xn | Lt)) === 0 && yo(r) && (gn = /* @__PURE__ */ new Set(), eo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? vu(r) : r.fn = null), gn?.size > 0)) {
        jn.clear();
        for (const o of gn) {
          if ((o.f & (xn | Lt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            gn.has(s) && (gn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (xn | Lt)) === 0 && eo(l);
          }
        }
        gn.clear();
      }
    }
    gn = null;
  }
}
function Gl(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & ut) !== 0 ? Gl(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Ts | En)) !== 0 && (i & _t) === 0 && Ul(o, t, r) && (pt(o, _t), lr(
        /** @type {Effect} */
        o
      ));
    }
}
function Ul(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & ut) !== 0 && Ul(
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
function lr(e) {
  for (var t = ki = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (is && t === Ne && (n & En) !== 0 && (n & Al) === 0)
      return;
    if ((n & (qn | Nn)) !== 0) {
      if ((n & ft) === 0) return;
      t.f ^= ft;
    }
  }
  Ht.push(t);
}
function Ql(e) {
  let t = 0, n = Bn(0), r;
  return () => {
    Qr() && (c(n), mo(() => (t === 0 && (r = at(() => e(() => Fr(n)))), t += 1, () => {
      Fn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Fr(n));
      });
    })));
  };
}
var tp = Cn | pr | $i;
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
  #n = be ? Ee : null;
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
  #w = Ql(() => (this.#p = Bn(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    Ne.b, this.#e = !!this.#r.pending, this.#a = Ar(() => {
      if (Ne.b = this, be) {
        const i = this.#n;
        _n(), /** @type {Comment} */
        i.nodeType === hr && /** @type {Comment} */
        i.data === yi ? this.#x() : this.#b();
      } else {
        var o = this.#m();
        try {
          this.#o = Ot(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#v() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, tp), be && (this.#t = Ee);
  }
  #b() {
    try {
      this.#o = Ot(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#i = Ot(() => t(this.#t)), Xt.enqueue(() => {
      var n = this.#m();
      this.#o = this.#g(() => (Xt.ensure(), Ot(() => this.#l(n)))), this.#f > 0 ? this.#v() : (br(
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
    return this.#e && (this.#c = kt(), this.#t.before(this.#c), t = this.#c), t;
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
    var n = Ne, r = Le, o = We;
    jt(this.#a), xt(this.#a), kr(this.#a.ctx);
    try {
      return t();
    } catch (i) {
      return ql(i), null;
    } finally {
      jt(n), xt(r), kr(o);
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
    ), wu(this.#o, this.#u)), this.#i === null && (this.#i = Ot(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#i && br(this.#i, () => {
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
    this.#y(t), this.#d += t, this.#p && Pr(this.#p, this.#d);
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
    this.#o && (rt(this.#o), this.#o = null), this.#i && (rt(this.#i), this.#i = null), this.#s && (rt(this.#s), this.#s = null), be && (Je(
      /** @type {TemplateNode} */
      this.#n
    ), me(), Je(Qo()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        qf();
        return;
      }
      o = !0, i && Wf(), Xt.ensure(), this.#d = 0, this.#s !== null && br(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#g(() => (this.#h = !1, Ot(() => this.#l(this.#t)))), this.#f > 0 ? this.#v() : this.#e = !1;
    };
    var a = Le;
    try {
      xt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Er(l, this.#a && this.#a.parent);
    } finally {
      xt(a);
    }
    r && Fn(() => {
      this.#s = this.#g(() => {
        Xt.ensure(), this.#h = !0;
        try {
          return Ot(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Er(
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
function Nr(e, t) {
  return t;
}
function op(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    js(t[i].e, r, !0);
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
      Is(l), l.append(a), e.items.clear(), Bt(e, t[0].prev, t[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (e.items.delete(d.k), Bt(e, d.prev, d.next)), rt(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function gt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, u = (t & Ml) !== 0, d = (t & Pl) !== 0, p = (t & Ol) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      e
    );
    s = be ? Je(
      /** @type {Comment | Text} */
      /* @__PURE__ */ et(f)
    ) : f.appendChild(kt());
  }
  be && _n();
  var h = null, y = /* @__PURE__ */ zs(() => {
    var x = n();
    return wi(x) ? x : x == null ? [] : Ms(x);
  }), w, m = !0;
  function b() {
    ip(_, w, s, t, r), h !== null && (w.length === 0 ? (h.fragment ? (s.before(h.fragment), h.fragment = null) : Ks(h.effect), C.first = h.effect) : br(h.effect, () => {
      h = null;
    }));
  }
  var C = Ar(() => {
    w = /** @type {V[]} */
    c(y);
    var x = w.length;
    let k = !1;
    if (be) {
      var P = jl(s) === yi;
      P !== (x === 0) && (s = Qo(), Je(s), Mt(!1), k = !0);
    }
    for (var T = /* @__PURE__ */ new Set(), Z = (
      /** @type {Batch} */
      qe
    ), H = null, I = lu(), z = 0; z < x; z += 1) {
      be && Ee.nodeType === hr && /** @type {Comment} */
      Ee.data === Os && (s = /** @type {Comment} */
      Ee, k = !0, Mt(!1));
      var S = w[z], M = r(S, z), $ = m ? null : a.get(M);
      $ ? (d && Pr($.v, S), p ? Pr(
        /** @type {Value<number>} */
        $.i,
        z
      ) : $.i = z, I && Z.skipped_effects.delete($.e)) : ($ = sp(
        m ? s : null,
        H,
        S,
        M,
        z,
        o,
        t,
        n
      ), m && ($.o = !0, H === null ? l = $ : H.next = $, H = $), a.set(M, $)), T.add(M);
    }
    if (x === 0 && i && !h)
      if (m)
        h = {
          fragment: null,
          effect: Ot(() => i(s))
        };
      else {
        var E = document.createDocumentFragment(), O = kt();
        E.append(O), h = {
          fragment: E,
          effect: Ot(() => i(O))
        };
      }
    if (be && x > 0 && Je(Qo()), !m)
      if (I) {
        for (const [K, B] of a)
          T.has(K) || Z.skipped_effects.add(B.e);
        Z.oncommit(b), Z.ondiscard(() => {
        });
      } else
        b();
    k && Mt(!0), c(y);
  }), _ = { effect: C, items: a, first: l };
  m = !1, be && (s = Ee);
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
      var C = d ? d.next : l;
      Bt(e, d, m), Bt(e, m, C), Ki(m, C, n), d = m, f = [], h = [], l = d.next;
      continue;
    }
    if ((m.e.f & Lt) !== 0 && (Ks(m.e), i && (m.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (f.length < h.length) {
          var _ = h[0], x;
          d = _.prev;
          var k = f[0], P = f[f.length - 1];
          for (x = 0; x < f.length; x += 1)
            Ki(f[x], _, n);
          for (x = 0; x < h.length; x += 1)
            u.delete(h[x]);
          Bt(e, k.prev, P.next), Bt(e, d, k), Bt(e, P, _), l = _, d = P, b -= 1, f = [], h = [];
        } else
          u.delete(m), Ki(m, l, n), Bt(e, m.prev, m.next), Bt(e, m, d === null ? e.first : d.next), Bt(e, d, m), d = m;
        continue;
      }
      for (f = [], h = []; l !== null && l.k !== w; )
        (l.e.f & Lt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      m = l;
    }
    f.push(m), d = m, l = m.next;
  }
  let T = a.size > s;
  if (l !== null || u !== void 0) {
    for (var Z = u === void 0 ? [] : Ms(u); l !== null; )
      (l.e.f & Lt) === 0 && Z.push(l), l = l.next;
    var H = Z.length;
    if (T = a.size - H > s, H > 0) {
      var I = (r & Ml) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < H; b += 1)
          Z[b].a?.measure();
        for (b = 0; b < H; b += 1)
          Z[b].a?.fix();
      }
      op(e, Z, I);
    }
  }
  if (T)
    for (const z of a.values())
      z.o || (Bt(e, d, z), d = z);
  e.effect.last = d && d.e, i && Fn(() => {
    if (p !== void 0)
      for (m of p)
        m.a?.apply();
  });
}
function sp(e, t, n, r, o, i, s, a) {
  var l = (s & Pl) !== 0, u = (s & xf) === 0, d = l ? u ? /* @__PURE__ */ ru(n, !1, !1) : Bn(n) : n, p = (s & Ol) === 0 ? o : Bn(o), f = {
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
      h.append(e = kt());
    }
    return f.e = Ot(() => i(
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
      /* @__PURE__ */ Qt(i)
    );
    o.before(i), i = s;
  }
}
function Bt(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function Jl(e, t, n, r) {
  const o = go() ? vo : zs;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = qe, s = (
    /** @type {Effect} */
    Ne
  ), a = ap();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ lp(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & xn) === 0 && Er(d, s);
      }
      i?.deactivate(), Jo();
    }).catch((u) => {
      Er(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Jo();
    }
  }) : l();
}
function ap() {
  var e = Ne, t = Le, n = We, r = qe;
  return function(o = !0) {
    jt(e), xt(t), kr(n), o && r?.activate();
  };
}
function Jo() {
  jt(null), xt(null), kr(null);
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  var t = ut | _t, n = Le !== null && (Le.f & ut) !== 0 ? (
    /** @type {Derived} */
    Le
  ) : null;
  return Ne !== null && (Ne.f |= pr), {
    ctx: We,
    deps: null,
    effects: null,
    equals: Kl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      st
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
  ), i = Bn(
    /** @type {V} */
    st
  ), s = !Le, a = /* @__PURE__ */ new Map();
  return mp(() => {
    var l = Hl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === qe && u.committed && u.deactivate(), Jo();
      });
    } catch (f) {
      l.reject(f), Jo();
    }
    var u = (
      /** @type {Batch} */
      qe
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(yr), a.delete(u), a.set(u, l);
    }
    const p = (f, h = void 0) => {
      if (u.activate(), h)
        h !== yr && (i.f |= Zn, Pr(i, h));
      else {
        (i.f & Zn) !== 0 && (i.f ^= Zn), Pr(i, f);
        for (const [y, w] of a) {
          if (a.delete(y), y === u) break;
          w.reject(yr);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(p, (f) => p(null, f || "unknown"));
  }), Si(() => {
    for (const l of a.values())
      l.reject(yr);
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
function N(e) {
  const t = /* @__PURE__ */ vo(e);
  return bu(t), t;
}
// @__NO_SIDE_EFFECTS__
function zs(e) {
  const t = /* @__PURE__ */ vo(e);
  return t.equals = Bl, t;
}
function eu(e) {
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
function up(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ut) === 0)
      return (t.f & xn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Hs(e) {
  var t, n = Ne;
  jt(up(e));
  try {
    e.f &= ~Ur, eu(e), t = _u(e);
  } finally {
    jt(n);
  }
  return t;
}
function tu(e) {
  var t = Hs(e);
  if (e.equals(t) || (qe?.is_fork || (e.v = t), e.wv = $u()), !gr)
    if (It !== null)
      (Qr() || qe?.is_fork) && It.set(e, t);
    else {
      var n = (e.f & Ft) === 0 ? Pn : ft;
      pt(e, n);
    }
}
let ss = /* @__PURE__ */ new Set();
const jn = /* @__PURE__ */ new Map();
let nu = !1;
function Bn(e, t) {
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
function Se(e, t) {
  const n = Bn(e);
  return bu(n), n;
}
// @__NO_SIDE_EFFECTS__
function ru(e, t = !1, n = !0) {
  const r = Bn(e);
  return t || (r.equals = Bl), Hr && n && We !== null && We.l !== null && (We.l.s ??= []).push(r), r;
}
function Q(e, t, n = !1) {
  Le !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!sn || (Le.f & ya) !== 0) && go() && (Le.f & (ut | En | Ts | ya)) !== 0 && !$n?.includes(e) && Yf();
  let r = n ? Zt(t) : t;
  return Pr(e, r);
}
function Pr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    gr ? jn.set(e, t) : jn.set(e, n), e.v = t;
    var r = Xt.ensure();
    r.capture(e, n), (e.f & ut) !== 0 && ((e.f & _t) !== 0 && Hs(
      /** @type {Derived} */
      e
    ), pt(e, (e.f & Ft) !== 0 ? ft : Pn)), e.wv = $u(), ou(e, _t), go() && Ne !== null && (Ne.f & ft) !== 0 && (Ne.f & (Nn | qn)) === 0 && (zt === null ? wp([e]) : zt.push(e)), !r.is_fork && ss.size > 0 && !nu && cp();
  }
  return t;
}
function cp() {
  nu = !1;
  var e = Kn;
  ei(!0);
  const t = Array.from(ss);
  try {
    for (const n of t)
      (n.f & ft) !== 0 && pt(n, Pn), yo(n) && eo(n);
  } finally {
    ei(e);
  }
  ss.clear();
}
function ba(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function Fr(e) {
  Q(e, e.v + 1);
}
function ou(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = go(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ne)) {
        var l = (a & _t) === 0;
        if (l && pt(s, t), (a & ut) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          It?.delete(u), (a & Ur) === 0 && (a & Ft && (s.f |= Ur), ou(u, Pn));
        } else l && ((a & En) !== 0 && gn !== null && gn.add(
          /** @type {Effect} */
          s
        ), lr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Zt(e) {
  if (typeof e != "object" || e === null || an in e)
    return e;
  const t = bi(e);
  if (t !== zl && t !== Lf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = wi(e), o = /* @__PURE__ */ Se(0), i = rr, s = (a) => {
    if (rr === i)
      return a();
    var l = Le, u = rr;
    xt(null), _a(i);
    var d = a();
    return xt(l), _a(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Se(
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
          var p = /* @__PURE__ */ Se(u.value);
          return n.set(l, p), p;
        }) : Q(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Se(st));
            n.set(l, d), Fr(o);
          }
        } else
          Q(u, st), Fr(o);
        return !0;
      },
      get(a, l, u) {
        if (l === an)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || bn(a, l)?.writable) && (d = s(() => {
          var h = Zt(p ? a[l] : st), y = /* @__PURE__ */ Se(h);
          return y;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === st ? void 0 : f;
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
          if (p !== void 0 && f !== st)
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
        if (l === an)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== st || Reflect.has(a, l);
        if (u !== void 0 || Ne !== null && (!d || bn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Zt(a[l]) : st, h = /* @__PURE__ */ Se(f);
            return h;
          }), n.set(l, u));
          var p = c(u);
          if (p === st)
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
            y !== void 0 ? Q(y, st) : h in a && (y = s(() => /* @__PURE__ */ Se(st)), n.set(h + "", y));
          }
        if (p === void 0)
          (!f || bn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Se(void 0)), Q(p, Zt(u)), n.set(l, p));
        else {
          f = p.v !== st;
          var w = s(() => Zt(u));
          Q(p, w);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, l);
        if (m?.set && m.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= b.v && Q(b, C + 1);
          }
          Fr(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== st;
        });
        for (var [u, d] of n)
          d.v !== st && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Bf();
      }
    }
  );
}
function xa(e) {
  try {
    if (e !== null && typeof e == "object" && an in e)
      return e[an];
  } catch {
  }
  return e;
}
function dp(e, t) {
  return Object.is(xa(e), xa(t));
}
var bt, iu, su, au;
function as() {
  if (bt === void 0) {
    bt = window, iu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    su = bn(t, "firstChild").get, au = bn(t, "nextSibling").get, ma(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ma(n) && (n.__t = void 0);
  }
}
function kt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return su.call(e);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return au.call(e);
}
function R(e, t) {
  if (!be)
    return /* @__PURE__ */ et(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ et(Ee)
  );
  if (n === null)
    n = Ee.appendChild(kt());
  else if (t && n.nodeType !== _i) {
    var r = kt();
    return n?.before(r), Je(r), r;
  }
  return Je(n), n;
}
function oe(e, t = !1) {
  if (!be) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ et(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qt(n) : n;
  }
  if (t && Ee?.nodeType !== _i) {
    var r = kt();
    return Ee?.before(r), Je(r), r;
  }
  return Ee;
}
function D(e, t = 1, n = !1) {
  let r = be ? Ee : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Qt(r);
  if (!be)
    return r;
  if (n && r?.nodeType !== _i) {
    var i = kt();
    return r === null ? o?.after(i) : r.before(i), Je(i), i;
  }
  return Je(r), /** @type {TemplateNode} */
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
    e.autofocus = !0, Fn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function pp(e) {
  be && /* @__PURE__ */ et(e) !== null && Is(e);
}
let $a = !1;
function hp() {
  $a || ($a = !0, document.addEventListener(
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
function As(e) {
  var t = Le, n = Ne;
  xt(null), jt(null);
  try {
    return e();
  } finally {
    xt(t), jt(n);
  }
}
function uu(e) {
  Ne === null && (Le === null && Af(), If()), gr && Hf();
}
function gp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Kt(e, t, n) {
  var r = Ne;
  r !== null && (r.f & Lt) !== 0 && (e |= Lt);
  var o = {
    ctx: We,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | _t | Ft,
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
      eo(o), o.f |= Ci;
    } catch (a) {
      throw rt(o), a;
    }
  else t !== null && lr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & pr) === 0 && (i = i.first, (e & En) !== 0 && (e & Cn) !== 0 && i !== null && (i.f |= Cn)), i !== null && (i.parent = r, r !== null && gp(i, r), Le !== null && (Le.f & ut) !== 0 && (e & qn) === 0)) {
    var s = (
      /** @type {Derived} */
      Le
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Qr() {
  return Le !== null && !sn;
}
function Si(e) {
  const t = Kt(xi, null, !1);
  return pt(t, ft), t.teardown = e, t;
}
function Fe(e) {
  uu();
  var t = (
    /** @type {Effect} */
    Ne.f
  ), n = !Le && (t & Nn) !== 0 && (t & Ci) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      We
    );
    (r.e ??= []).push(e);
  } else
    return cu(e);
}
function cu(e) {
  return Kt(Ls | Zl, e, !1);
}
function du(e) {
  return uu(), Kt(xi | Zl, e, !0);
}
function Zs(e) {
  Xt.ensure();
  const t = Kt(qn | pr, e, !0);
  return () => {
    rt(t);
  };
}
function vp(e) {
  Xt.ensure();
  const t = Kt(qn | pr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? br(t, () => {
      rt(t), r(void 0);
    }) : (rt(t), r(void 0));
  });
}
function Ir(e) {
  return Kt(Ls, e, !1);
}
function mp(e) {
  return Kt(Ts | pr, e, !0);
}
function mo(e, t = 0) {
  return Kt(xi | t, e, !0);
}
function Ce(e, t = [], n = [], r = []) {
  Jl(r, t, n, (o) => {
    Kt(xi, () => e(...o.map(c)), !0);
  });
}
function Ar(e, t = 0) {
  var n = Kt(En | t, e, !0);
  return n;
}
function fu(e, t = 0) {
  var n = Kt(Il | t, e, !0);
  return n;
}
function Ot(e) {
  return Kt(Nn | pr, e, !0);
}
function pu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = gr, r = Le;
    Ca(!0), xt(null);
    try {
      t.call(null);
    } finally {
      Ca(n), xt(r);
    }
  }
}
function hu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && As(() => {
      o.abort(yr);
    });
    var r = n.next;
    (n.f & qn) !== 0 ? n.parent = null : rt(n, t), n = r;
  }
}
function yp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Nn) === 0 && rt(t), t = n;
  }
}
function rt(e, t = !0) {
  var n = !1;
  (t || (e.f & Al) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (gu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), hu(e, t && !n), ti(e, 0), pt(e, xn);
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
      /* @__PURE__ */ Qt(e)
    );
    e.remove(), e = n;
  }
}
function vu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function br(e, t, n = !0) {
  var r = [];
  js(e, r, !0), mu(r, () => {
    n && rt(e), t && t();
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
function js(e, t, n) {
  if ((e.f & Lt) === 0) {
    if (e.f ^= Lt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Cn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Nn) !== 0 && (e.f & En) !== 0;
      js(r, t, i ? n : !1), r = o;
    }
  }
}
function Ks(e) {
  yu(e, !0);
}
function yu(e, t) {
  if ((e.f & Lt) !== 0) {
    e.f ^= Lt, (e.f & ft) === 0 && (pt(e, _t), lr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Cn) !== 0 || (n.f & Nn) !== 0;
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
      /* @__PURE__ */ Qt(n)
    );
    t.append(n), n = o;
  }
}
let Kn = !1;
function ei(e) {
  Kn = e;
}
let gr = !1;
function Ca(e) {
  gr = e;
}
let Le = null, sn = !1;
function xt(e) {
  Le = e;
}
let Ne = null;
function jt(e) {
  Ne = e;
}
let $n = null;
function bu(e) {
  Le !== null && ($n === null ? $n = [e] : $n.push(e));
}
let yt = null, Pt = 0, zt = null;
function wp(e) {
  zt = e;
}
let xu = 1, Jr = 0, rr = Jr;
function _a(e) {
  rr = e;
}
function $u() {
  return ++xu;
}
function yo(e) {
  var t = e.f;
  if ((t & _t) !== 0)
    return !0;
  if (t & ut && (e.f &= -32769), (t & Pn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (yo(
          /** @type {Derived} */
          i
        ) && tu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & Ft) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    It === null && pt(e, ft);
  }
  return !1;
}
function Cu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !$n?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & ut) !== 0 ? Cu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pt(i, _t) : (i.f & ft) !== 0 && pt(i, Pn), lr(
        /** @type {Effect} */
        i
      ));
    }
}
function _u(e) {
  var t = yt, n = Pt, r = zt, o = Le, i = $n, s = We, a = sn, l = rr, u = e.f;
  yt = /** @type {null | Value[]} */
  null, Pt = 0, zt = null, Le = (u & (Nn | qn)) === 0 ? e : null, $n = null, kr(e.ctx), sn = !1, rr = ++Jr, e.ac !== null && (As(() => {
    e.ac.abort(yr);
  }), e.ac = null);
  try {
    e.f |= os;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d(), f = e.deps;
    if (yt !== null) {
      var h;
      if (ti(e, Pt), f !== null && Pt > 0)
        for (f.length = Pt + yt.length, h = 0; h < yt.length; h++)
          f[Pt + h] = yt[h];
      else
        e.deps = f = yt;
      if (Kn && Qr() && (e.f & Ft) !== 0)
        for (h = Pt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && Pt < f.length && (ti(e, Pt), f.length = Pt);
    if (go() && zt !== null && !sn && f !== null && (e.f & (ut | Pn | _t)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      zt.length; h++)
        Cu(
          zt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Jr++, zt !== null && (r === null ? r = zt : r.push(.../** @type {Source[]} */
    zt))), (e.f & Zn) !== 0 && (e.f ^= Zn), p;
  } catch (y) {
    return ql(y);
  } finally {
    e.f ^= os, yt = t, Pt = n, zt = r, Le = o, $n = i, kr(s), sn = a, rr = l;
  }
}
function bp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Mf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & ut) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (yt === null || !yt.includes(t)) && (pt(t, Pn), (t.f & Ft) !== 0 && (t.f ^= Ft, t.f &= -32769), eu(
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
function eo(e) {
  var t = e.f;
  if ((t & xn) === 0) {
    pt(e, ft);
    var n = Ne, r = Kn;
    Ne = e, Kn = !0;
    try {
      (t & (En | Il)) !== 0 ? yp(e) : hu(e), pu(e);
      var o = _u(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = xu;
      var i;
      Of && Ff && (e.f & _t) !== 0 && e.deps;
    } finally {
      Kn = r, Ne = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & ut) !== 0;
  if (Le !== null && !sn) {
    var r = Ne !== null && (Ne.f & xn) !== 0;
    if (!r && !$n?.includes(e)) {
      var o = Le.deps;
      if ((Le.f & os) !== 0)
        e.rv < Jr && (e.rv = Jr, yt === null && o !== null && o[Pt] === e ? Pt++ : yt === null ? yt = [e] : yt.includes(e) || yt.push(e));
      else {
        (Le.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Le] : i.includes(Le) || i.push(Le);
      }
    }
  }
  if (gr) {
    if (jn.has(e))
      return jn.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & ft) === 0 && s.reactions !== null || Su(s)) && (a = Hs(s)), jn.set(s, a), a;
    }
  } else n && (!It?.has(e) || qe?.is_fork && !Qr()) && (s = /** @type {Derived} */
  e, yo(s) && tu(s), Kn && Qr() && (s.f & Ft) === 0 && ku(s));
  if (It?.has(e))
    return It.get(e);
  if ((e.f & Zn) !== 0)
    throw e.v;
  return e.v;
}
function ku(e) {
  if (e.deps !== null) {
    e.f ^= Ft;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ut) !== 0 && (t.f & Ft) === 0 && ku(
        /** @type {Derived} */
        t
      );
  }
}
function Su(e) {
  if (e.v === st) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (jn.has(t) || (t.f & ut) !== 0 && Su(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function at(e) {
  var t = sn;
  try {
    return sn = !0, e();
  } finally {
    sn = t;
  }
}
const xp = -7169;
function pt(e, t) {
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
function Rs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (an in e)
      ls(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && an in n && ls(n);
      }
  }
}
function ls(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ls(e[r], t);
      } catch {
      }
    const n = bi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Dl(n);
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
const Eu = /* @__PURE__ */ new Set(), us = /* @__PURE__ */ new Set();
function Bs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Br.call(t, i), !i.cancelBubble)
      return As(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fn(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function cs(e, t, n, r = {}) {
  var o = Bs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ni(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Bs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Si(() => {
    t.removeEventListener(e, s, i);
  });
}
function Gn(e) {
  for (var t = 0; t < e.length; t++)
    Eu.add(e[t]);
  for (var n of us)
    n(e);
}
let ka = null;
function Br(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  ka = e;
  var s = 0, a = ka === e && e.__root;
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
    Uo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Le, p = Ne;
    xt(null), jt(null);
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
      e.__root = t, delete e.currentTarget, xt(d), jt(p);
    }
  }
}
function Ys(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ct(e, t) {
  var n = (
    /** @type {Effect} */
    Ne
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & Tl) !== 0, r = (t & Sf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (be)
      return Ct(Ee, null), Ee;
    o === void 0 && (o = Ys(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ et(o)));
    var s = (
      /** @type {TemplateNode} */
      r || iu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ct(a, l);
    } else
      Ct(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Cp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Tl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (be)
      return Ct(Ee, null), Ee;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ys(i)
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
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ct(d, p);
    } else
      Ct(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  return /* @__PURE__ */ Cp(e, t, "svg");
}
function _e(e = "") {
  if (!be) {
    var t = kt(e + "");
    return Ct(t, t), t;
  }
  var n = Ee;
  return n.nodeType !== _i && (n.before(n = kt()), Je(n)), Ct(n, n), n;
}
function ke() {
  if (be)
    return Ct(Ee, null), Ee;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = kt();
  return e.append(t, n), Ct(t, n), e;
}
function L(e, t) {
  if (be) {
    var n = (
      /** @type {Effect} */
      Ne
    );
    ((n.f & Ci) === 0 || n.nodes_end === null) && (n.nodes_end = Ee), _n();
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
function Np(e) {
  return e = e.toLowerCase(), Ep[e] ?? e;
}
const Pp = ["touchstart", "touchmove"];
function Op(e) {
  return Pp.includes(e);
}
const Mp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Lp(e) {
  return Mp.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Re(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Nu(e, t) {
  return Pu(e, t);
}
function Tp(e, t) {
  as(), t.intro = t.intro ?? !1;
  const n = t.target, r = be, o = Ee;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ et(n)
    ); i && (i.nodeType !== hr || /** @type {Comment} */
    i.data !== Vl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Qt(i);
    if (!i)
      throw ar;
    Mt(!0), Je(
      /** @type {Comment} */
      i
    );
    const s = Pu(e, { ...t, anchor: i });
    return Mt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== ar && console.warn("Failed to hydrate: ", s), t.recover === !1 && jf(), as(), Is(n), Mt(!1), Nu(e, t);
  } finally {
    Mt(r), Je(o);
  }
}
const vr = /* @__PURE__ */ new Map();
function Pu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  as();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var h = p[f];
      if (!a.has(h)) {
        a.add(h);
        var y = Op(h);
        t.addEventListener(h, Br, { passive: y });
        var w = vr.get(h);
        w === void 0 ? (document.addEventListener(h, Br, { passive: y }), vr.set(h, 1)) : vr.set(h, w + 1);
      }
    }
  };
  l(Ms(Eu)), us.add(l);
  var u = void 0, d = vp(() => {
    var p = n ?? t.appendChild(kt());
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
        if (o && (r.$$events = o), be && Ct(
          /** @type {TemplateNode} */
          f,
          null
        ), u = e(f, r) || {}, be && (Ne.nodes_end = Ee, Ee === null || Ee.nodeType !== hr || /** @type {Comment} */
        Ee.data !== Os))
          throw ho(), ar;
        i && ue();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Br);
        var h = (
          /** @type {number} */
          vr.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, Br), vr.delete(f)) : vr.set(f, h);
      }
      us.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return ds.set(u, d), u;
}
let ds = /* @__PURE__ */ new WeakMap();
function Vp(e, t) {
  const n = ds.get(e);
  return n ? (ds.delete(e), n(t)) : Promise.resolve();
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
      qe
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        Ks(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (rt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            wu(s, l), l.append(kt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            rt(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), br(s, a, !1)) : a();
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
      qe
    ), o = lu();
    n && !this.#t.has(t) && !this.#n.has(t) && this.#t.set(
      t,
      Ot(() => n(this.anchor))
    ), this.#e.set(r, t), o || (be && (this.anchor = Ee), this.#a());
  }
}
function Ge(e, t, ...n) {
  var r = new Ei(e);
  Ar(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Cn);
}
function On(e) {
  We === null && Ds(), Hr && We.l !== null ? Dp(We).m.push(e) : Fe(() => {
    const t = at(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function wo(e) {
  We === null && Ds(), On(() => () => at(e));
}
function Dp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, n = !1) {
  be && _n();
  var r = new Ei(e), o = n ? Cn : 0;
  function i(s, a) {
    if (be) {
      const u = jl(e) === yi;
      if (s === u) {
        var l = Qo();
        Je(l), r.anchor = l, Mt(!1), r.ensure(s, a), Mt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Ar(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function zp(e, t) {
  be && Je(
    /** @type {TemplateNode} */
    /* @__PURE__ */ et(e)
  ), mo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Ws(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ce(() => {
    var a = (
      /** @type {Effect} */
      Ne
    );
    if (s === (s = t() ?? "")) {
      be && _n();
      return;
    }
    if (a.nodes_start !== null && (gu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (be) {
        Ee.data;
        for (var l = _n(), u = l; l !== null && (l.nodeType !== hr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Qt(l);
        if (l === null)
          throw ho(), ar;
        Ct(Ee, u), i = Je(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Ys(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ et(p)), Ct(
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ et(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ et(p)
          );
      else
        i.before(p);
    }
  });
}
function Ni(e, t, n) {
  be && _n();
  var r = new Ei(e);
  Ar(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Cn);
}
function Hp(e, t, n, r, o, i) {
  let s = be;
  be && _n();
  var a = null;
  be && Ee.nodeType === Df && (a = /** @type {Element} */
  Ee, _n());
  var l = (
    /** @type {TemplateNode} */
    be ? Ee : e
  ), u = new Ei(l, !1);
  Ar(() => {
    const d = t() || null;
    var p = d === "svg" ? Nf : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        if (a = be ? (
          /** @type {Element} */
          a
        ) : p ? document.createElementNS(p, d) : document.createElement(d), Ct(a, a), r) {
          be && Lp(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            be ? /* @__PURE__ */ et(a) : a.appendChild(kt())
          );
          be && (h === null ? Mt(!1) : Je(h)), r(a, h);
        }
        Ne.nodes_end = a, f.before(a);
      }
      be && Je(f);
    }), () => {
    };
  }, Cn), Si(() => {
  }), s && (Mt(!0), Je(l));
}
function He(e, t) {
  Ir(() => {
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
function dt(e, t, n) {
  Ir(() => {
    var r = at(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      mo(() => {
        var s = n();
        Rs(s), o && Rl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ip(e, t) {
  var n = void 0, r;
  fu(() => {
    n !== (n = t()) && (r && (rt(r), r = null), n && (r = Ot(() => {
      Ir(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ou(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ou(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ap() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ou(e)) && (r && (r += " "), r += t);
  return r;
}
function Mn(e) {
  return typeof e == "object" ? Ap(e) : e ?? "";
}
const Sa = [...` 	
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
          (s === 0 || Sa.includes(r[s - 1])) && (a === r.length || Sa.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ea(e, t = !1) {
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
    return r && (n += Ea(r)), o && (n += Ea(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function St(e, t, n, r, o, i) {
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
function Bi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ct(e, t, n, r) {
  var o = e.__style;
  if (be || o !== t) {
    var i = jp(t, r);
    (!be || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Bi(e, n?.[0], r[0]), Bi(e, n?.[1], r[1], "important")) : Bi(e, n, r));
  return r;
}
function fs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!wi(t))
      return Xf();
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
    fs(e, e.__value);
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
const Hn = Symbol("class"), on = Symbol("style"), Mu = Symbol("is custom element"), Lu = Symbol("is html");
function or(e) {
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
    e.__on_r = n, Fn(n), hp();
  }
}
function Ro(e, t) {
  var n = Pi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Pa(e, t) {
  var n = Pi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Rp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = Pi(e);
  be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Vf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Tu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Bp(e, t, n, r, o = !1, i = !1) {
  if (be && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || or(s);
  }
  var l = Pi(e), u = l[Mu], d = !l[Lu];
  let p = be && u;
  p && Mt(!1);
  var f = t || {}, h = e.tagName === "OPTION";
  for (var y in t)
    y in n || (n[y] = null);
  n.class ? n.class = Mn(n.class) : (r || n[Hn]) && (n.class = null), n[on] && (n.style ??= null);
  var w = Tu(e);
  for (const P in n) {
    let T = n[P];
    if (h && P === "value" && T == null) {
      e.value = e.__value = "", f[P] = T;
      continue;
    }
    if (P === "class") {
      var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      St(e, m, T, r, t?.[Hn], n[Hn]), f[P] = T, f[Hn] = n[Hn];
      continue;
    }
    if (P === "style") {
      ct(e, T, t?.[on], n[on]), f[P] = T, f[on] = n[on];
      continue;
    }
    var b = f[P];
    if (!(T === b && !(T === void 0 && e.hasAttribute(P)))) {
      f[P] = T;
      var C = P[0] + P[1];
      if (C !== "$$")
        if (C === "on") {
          const Z = {}, H = "$$" + P;
          let I = P.slice(2);
          var _ = Sp(I);
          if (_p(I) && (I = I.slice(0, -7), Z.capture = !0), !_ && b) {
            if (T != null) continue;
            e.removeEventListener(I, f[H], Z), f[H] = null;
          }
          if (T != null)
            if (_)
              e[`__${I}`] = T, Gn([I]);
            else {
              let z = function(S) {
                f[P].call(this, S);
              };
              f[H] = Bs(I, e, z, Z);
            }
          else _ && (e[`__${I}`] = void 0);
        } else if (P === "style")
          xe(e, P, T);
        else if (P === "autofocus")
          fp(
            /** @type {HTMLElement} */
            e,
            !!T
          );
        else if (!u && (P === "__value" || P === "value" && T != null))
          e.value = e.__value = T;
        else if (P === "selected" && h)
          Rp(
            /** @type {HTMLOptionElement} */
            e,
            T
          );
        else {
          var x = P;
          d || (x = Np(x));
          var k = x === "defaultValue" || x === "defaultChecked";
          if (T == null && !u && !k)
            if (l[P] = null, x === "value" || x === "checked") {
              let Z = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (x === "value") {
                let I = Z.defaultValue;
                Z.removeAttribute(x), Z.defaultValue = I, Z.value = Z.__value = H ? I : null;
              } else {
                let I = Z.defaultChecked;
                Z.removeAttribute(x), Z.defaultChecked = I, Z.checked = H ? I : !1;
              }
            } else
              e.removeAttribute(P);
          else k || w.includes(x) && (u || typeof T != "string") ? (e[x] = T, x in l && (l[x] = st)) : typeof T != "function" && xe(e, x, T);
        }
    }
  }
  return p && Mt(!0), f;
}
function tt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Jl(o, n, r, (l) => {
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
      f && p && "value" in y && fs(
        /** @type {HTMLSelectElement} */
        e,
        y.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        y[b] || rt(d[b]);
      for (let b of Object.getOwnPropertySymbols(y)) {
        var m = y[b];
        b.description === Pf && (!u || m !== u[b]) && (d[b] && rt(d[b]), d[b] = Ot(() => Ip(e, () => m))), w[b] = m;
      }
      u = w;
    }), p) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ir(() => {
        fs(
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
function Pi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Mu]: e.nodeName.includes("-"),
      [Lu]: e.namespaceURI === Ef
    }
  );
}
var Oa = /* @__PURE__ */ new Map();
function Tu(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Oa.get(t);
  if (n) return n;
  Oa.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Dl(o);
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
function Ma(e, t, n) {
  var r = Yp.observe(e, () => n(e[t]));
  Ir(() => (at(() => n(e[t])), r));
}
function La(e, t) {
  return e === t || e?.[an] === t;
}
function Et(e = {}, t, n, r) {
  return Ir(() => {
    var o, i;
    return mo(() => {
      o = i, i = [], at(() => {
        e !== n(...i) && (t(e, ...i), o && La(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Fn(() => {
        i && La(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Vu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    We
  ), n = t.l.u;
  if (!n) return;
  let r = () => Rs(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ vo(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && du(() => {
    Ta(t, r), rs(n.b);
  }), Fe(() => {
    const o = at(() => n.m.map(Tf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Fe(() => {
    Ta(t, r), rs(n.a);
  });
}
function Ta(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Do = !1;
function Wp(e) {
  var t = Do;
  try {
    return Do = !1, [e(), Do];
  } finally {
    Do = t;
  }
}
const Xp = {
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
function Ae(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Xp
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
        jt(e.parent_effect), e.special[t] = v(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Ll
        );
      } finally {
        jt(r);
      }
    }
    return e.special[t](n), ba(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ba(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Va(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Bn(0),
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
const Fp = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (jr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      jr(o) && (o = o());
      const i = bn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (jr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = bn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === an || t === Vs) return !1;
    for (let n of e.props)
      if (jr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (jr(n) && (n = n()), !!n) {
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
  var o = !Hr || (n & Cf) !== 0, i = (n & _f) !== 0, s = (n & kf) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? at(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = an in e || Vs in e;
    d = bn(e, t)?.set ?? (p && t in e ? (_) => e[t] = _ : void 0);
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
  }, o && (n & Ll) === 0)
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
  var m = !1, b = ((n & $f) !== 0 ? vo : zs)(() => (m = !1, y()));
  i && c(b);
  var C = (
    /** @type {Effect} */
    Ne
  );
  return (
    /** @type {() => V} */
    function(_, x) {
      if (arguments.length > 0) {
        const k = x ? c(b) : o && i ? Zt(_) : _;
        return Q(b, k), m = !0, a !== void 0 && (a = k), _;
      }
      return gr && m || (C.f & xn) !== 0 ? b.v : c(b);
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
          return s === Vs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Q(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (t.hydrate ? Tp : Nu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && g(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Uo(this, i, {
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
      Vp(this.#t);
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
let Du;
typeof HTMLElement == "function" && (Du = class extends HTMLElement {
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
      }), this.$$me = Zs(() => {
        mo(() => {
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
  let s = class extends Du {
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
    Uo(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Bo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = bn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Uo(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Jp = { value: () => {
} };
function Oi() {
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
Yo.prototype = Oi.prototype = {
  constructor: Yo,
  on: function(e, t) {
    var n = this._, r = eh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = th(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Da(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Da(n[o], e.name, null);
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
function Da(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Jp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ps = "http://www.w3.org/1999/xhtml";
const za = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ps,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), za.hasOwnProperty(t) ? { space: za[t], local: e } : e;
}
function nh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ps && t.documentElement.namespaceURI === ps ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function rh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function zu(e) {
  var t = Mi(e);
  return (t.local ? rh : nh)(t);
}
function oh() {
}
function qs(e) {
  return e == null ? oh : function() {
    return this.querySelector(e);
  };
}
function ih(e) {
  typeof e != "function" && (e = qs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Vt(r, this._parents);
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
  return new Vt(r, o);
}
function Iu(e) {
  return function() {
    return this.matches(e);
  };
}
function Au(e) {
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
  return this.select(e == null ? fh : dh(typeof e == "function" ? e : Au(e)));
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
  return this.selectAll(e == null ? gh : vh(typeof e == "function" ? e : Au(e)));
}
function yh(e) {
  typeof e != "function" && (e = Iu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Vt(r, this._parents);
}
function Zu(e) {
  return new Array(e.length);
}
function wh() {
  return new Vt(this._enter || this._groups.map(Zu), this._parents);
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
    for (var C = 0, _ = 0, x, k; C < y; ++C)
      if (x = w[C]) {
        for (C >= _ && (_ = C + 1); !(k = m[_]) && ++_ < y; ) ;
        x._next = k || null;
      }
  }
  return s = new Vt(s, r), s._enter = a, s._exit = l, s;
}
function kh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Sh() {
  return new Vt(this._exit || this._groups.map(Zu), this._parents);
}
function Eh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Nh(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), h, y = 0; y < p; ++y)
      (h = u[y] || d[y]) && (f[y] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Vt(a, this._parents);
}
function Ph() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Oh(e) {
  e || (e = Mh);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Vt(o, this._parents).order();
}
function Mh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Lh() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Th() {
  return Array.from(this);
}
function Vh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Dh() {
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
function Ih(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ah(e) {
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
  var n = Mi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Ah : Ih : typeof t == "function" ? n.local ? Rh : Kh : n.local ? jh : Zh)(n, t));
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
function Xh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function qh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Yh : typeof t == "function" ? Xh : Wh)(e, t, n ?? "")) : Or(this.node(), e);
}
function Or(e, t) {
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
function Uh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Qh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Fh : typeof t == "function" ? Uh : Gh)(e, t)) : this.node()[e];
}
function Ku(e) {
  return e.trim().split(/^|\s+/);
}
function Fs(e) {
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
  for (var n = Fs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Yu(e, t) {
  for (var n = Fs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Jh(e) {
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
    for (var r = Fs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function vg() {
  return null;
}
function mg(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? vg : typeof t == "function" ? t : qs(t);
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
function Ng(e, t, n) {
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
function Pg(e, t) {
  return function() {
    return Wu(this, e, t);
  };
}
function Og(e, t) {
  return function() {
    return Wu(this, e, t.apply(this, arguments));
  };
}
function Mg(e, t) {
  return this.each((typeof t == "function" ? Og : Pg)(e, t));
}
function* Lg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Xu = [null];
function Vt(e, t) {
  this._groups = e, this._parents = t;
}
function bo() {
  return new Vt([[document.documentElement]], Xu);
}
function Tg() {
  return this;
}
Vt.prototype = bo.prototype = {
  constructor: Vt,
  select: ih,
  selectAll: uh,
  selectChild: ph,
  selectChildren: mh,
  filter: yh,
  data: _h,
  enter: wh,
  exit: Sh,
  join: Eh,
  merge: Nh,
  selection: Tg,
  order: Ph,
  sort: Oh,
  call: Lh,
  nodes: Th,
  node: Vh,
  size: Dh,
  empty: zh,
  each: Hh,
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
  clone: $g,
  datum: Cg,
  on: Ng,
  dispatch: Mg,
  [Symbol.iterator]: Lg
};
function At(e) {
  return typeof e == "string" ? new Vt([[document.querySelector(e)]], [document.documentElement]) : new Vt([[e]], Xu);
}
function Vg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Yt(e, t) {
  if (e = Vg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Dg = { passive: !1 }, to = { capture: !0, passive: !1 };
function Yi(e) {
  e.stopImmediatePropagation();
}
function xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function qu(e) {
  var t = e.document.documentElement, n = At(e).on("dragstart.drag", xr, to);
  "onselectstart" in t ? n.on("selectstart.drag", xr, to) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Fu(e, t) {
  var n = e.document.documentElement, r = At(e).on("dragstart.drag", null);
  t && (r.on("click.drag", xr, to), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const zo = (e) => () => e;
function hs(e, {
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
hs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function zg(e) {
  return !e.ctrlKey && !e.button;
}
function Hg() {
  return this.parentNode;
}
function Ig(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zg() {
  var e = zg, t = Hg, n = Ig, r = Ag, o = {}, i = Oi("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(x) {
    x.on("mousedown.drag", h).filter(r).on("touchstart.drag", m).on("touchmove.drag", b, Dg).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(x, k) {
    if (!(d || !e.call(this, x, k))) {
      var P = _(this, t.call(this, x, k), x, k, "mouse");
      P && (At(x.view).on("mousemove.drag", y, to).on("mouseup.drag", w, to), qu(x.view), Yi(x), u = !1, a = x.clientX, l = x.clientY, P("start", x));
    }
  }
  function y(x) {
    if (xr(x), !u) {
      var k = x.clientX - a, P = x.clientY - l;
      u = k * k + P * P > p;
    }
    o.mouse("drag", x);
  }
  function w(x) {
    At(x.view).on("mousemove.drag mouseup.drag", null), Fu(x.view, u), xr(x), o.mouse("end", x);
  }
  function m(x, k) {
    if (e.call(this, x, k)) {
      var P = x.changedTouches, T = t.call(this, x, k), Z = P.length, H, I;
      for (H = 0; H < Z; ++H)
        (I = _(this, T, x, k, P[H].identifier, P[H])) && (Yi(x), I("start", x, P[H]));
    }
  }
  function b(x) {
    var k = x.changedTouches, P = k.length, T, Z;
    for (T = 0; T < P; ++T)
      (Z = o[k[T].identifier]) && (xr(x), Z("drag", x, k[T]));
  }
  function C(x) {
    var k = x.changedTouches, P = k.length, T, Z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), T = 0; T < P; ++T)
      (Z = o[k[T].identifier]) && (Yi(x), Z("end", x, k[T]));
  }
  function _(x, k, P, T, Z, H) {
    var I = i.copy(), z = Yt(H || P, k), S, M, $;
    if (($ = n.call(x, new hs("beforestart", {
      sourceEvent: P,
      target: f,
      identifier: Z,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), T)) != null)
      return S = $.x - z[0] || 0, M = $.y - z[1] || 0, function E(O, K, B) {
        var Y = z, V;
        switch (O) {
          case "start":
            o[Z] = E, V = s++;
            break;
          case "end":
            delete o[Z], --s;
          // falls through
          case "drag":
            z = Yt(B || K, k), V = s;
            break;
        }
        I.call(
          O,
          x,
          new hs(O, {
            sourceEvent: K,
            subject: $,
            target: f,
            identifier: Z,
            active: V,
            x: z[0] + S,
            y: z[1] + M,
            dx: z[0] - Y[0],
            dy: z[1] - Y[1],
            dispatch: I
          }),
          T
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
function Gs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Gu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function xo() {
}
var no = 0.7, oi = 1 / no, $r = "\\s*([+-]?\\d+)\\s*", ro = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", jg = /^#([0-9a-f]{3,8})$/, Kg = new RegExp(`^rgb\\(${$r},${$r},${$r}\\)$`), Rg = new RegExp(`^rgb\\(${ln},${ln},${ln}\\)$`), Bg = new RegExp(`^rgba\\(${$r},${$r},${$r},${ro}\\)$`), Yg = new RegExp(`^rgba\\(${ln},${ln},${ln},${ro}\\)$`), Wg = new RegExp(`^hsl\\(${ro},${ln},${ln}\\)$`), Xg = new RegExp(`^hsla\\(${ro},${ln},${ln},${ro}\\)$`), Ha = {
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
Gs(xo, ur, {
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
  formatHsl: Fg,
  formatRgb: Aa,
  toString: Aa
});
function Ia() {
  return this.rgb().formatHex();
}
function qg() {
  return this.rgb().formatHex8();
}
function Fg() {
  return Uu(this).formatHsl();
}
function Aa() {
  return this.rgb().formatRgb();
}
function ur(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = jg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Za(t) : n === 3 ? new $t(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ho(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ho(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Kg.exec(e)) ? new $t(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new $t(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? Ho(t[1], t[2], t[3], t[4]) : (t = Yg.exec(e)) ? Ho(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wg.exec(e)) ? Ra(t[1], t[2] / 100, t[3] / 100, 1) : (t = Xg.exec(e)) ? Ra(t[1], t[2] / 100, t[3] / 100, t[4]) : Ha.hasOwnProperty(e) ? Za(Ha[e]) : e === "transparent" ? new $t(NaN, NaN, NaN, 0) : null;
}
function Za(e) {
  return new $t(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ho(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new $t(e, t, n, r);
}
function Gg(e) {
  return e instanceof xo || (e = ur(e)), e ? (e = e.rgb(), new $t(e.r, e.g, e.b, e.opacity)) : new $t();
}
function gs(e, t, n, r) {
  return arguments.length === 1 ? Gg(e) : new $t(e, t, n, r ?? 1);
}
function $t(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Gs($t, gs, Gu(xo, {
  brighter(e) {
    return e = e == null ? oi : Math.pow(oi, e), new $t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? no : Math.pow(no, e), new $t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $t(ir(this.r), ir(this.g), ir(this.b), ii(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ja,
  // Deprecated! Use color.formatHex.
  formatHex: ja,
  formatHex8: Ug,
  formatRgb: Ka,
  toString: Ka
}));
function ja() {
  return `#${tr(this.r)}${tr(this.g)}${tr(this.b)}`;
}
function Ug() {
  return `#${tr(this.r)}${tr(this.g)}${tr(this.b)}${tr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ka() {
  const e = ii(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ir(this.r)}, ${ir(this.g)}, ${ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ii(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function tr(e) {
  return e = ir(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ra(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Wt(e, t, n, r);
}
function Uu(e) {
  if (e instanceof Wt) return new Wt(e.h, e.s, e.l, e.opacity);
  if (e instanceof xo || (e = ur(e)), !e) return new Wt();
  if (e instanceof Wt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Wt(s, a, l, e.opacity);
}
function Qg(e, t, n, r) {
  return arguments.length === 1 ? Uu(e) : new Wt(e, t, n, r ?? 1);
}
function Wt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Gs(Wt, Qg, Gu(xo, {
  brighter(e) {
    return e = e == null ? oi : Math.pow(oi, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? no : Math.pow(no, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new $t(
      Wi(e >= 240 ? e - 240 : e + 120, o, r),
      Wi(e, o, r),
      Wi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Wt(Ba(this.h), Io(this.s), Io(this.l), ii(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ii(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ba(this.h)}, ${Io(this.s) * 100}%, ${Io(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ba(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Io(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Us = (e) => () => e;
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
  return (e = +e) == 1 ? Qu : function(t, n) {
    return n - t ? e1(t, n, e) : Us(isNaN(t) ? n : t);
  };
}
function Qu(e, t) {
  var n = t - e;
  return n ? Jg(e, n) : Us(isNaN(e) ? t : e);
}
const si = function e(t) {
  var n = t1(t);
  function r(o, i) {
    var s = n((o = gs(o)).r, (i = gs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Qu(o.opacity, i.opacity);
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
  for (s = 0; s < r; ++s) o[s] = Gr(e[s], t[s]);
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
function rn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function s1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Gr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var vs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xi = new RegExp(vs.source, "g");
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
function Ju(e, t) {
  var n = vs.lastIndex = Xi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = vs.exec(e)) && (o = Xi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: rn(r, o) })), n = Xi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? l1(l[0].x) : a1(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function Gr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Us(t) : (n === "number" ? rn : n === "string" ? (r = ur(t)) ? (t = r, si) : Ju : t instanceof ur ? si : t instanceof Date ? i1 : r1(t) ? n1 : Array.isArray(t) ? o1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? s1 : rn)(e, t);
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
var Ao;
function u1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ec : tc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function c1(e) {
  return e == null || (Ao || (Ao = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ao.setAttribute("transform", e), !(e = Ao.transform.baseVal.consolidate())) ? ec : (e = e.matrix, tc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function nc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push("translate(", null, t, null, n);
      y.push({ i: w - 4, x: rn(u, p) }, { i: w - 2, x: rn(d, f) });
    } else (p || f) && h.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: rn(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: rn(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, h, y) {
    if (u !== p || d !== f) {
      var w = h.push(o(h) + "scale(", null, ",", null, ")");
      y.push({ i: w - 4, x: rn(u, p) }, { i: w - 2, x: rn(d, f) });
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
      b = Math.log(f / u) / t, m = function(T) {
        return [
          a + T * h,
          l + T * y,
          u * Math.exp(t * T * b)
        ];
      };
    else {
      var C = Math.sqrt(w), _ = (f * f - u * u + r * w) / (2 * u * n * C), x = (f * f - u * u - r * w) / (2 * f * n * C), k = Math.log(Math.sqrt(_ * _ + 1) - _), P = Math.log(Math.sqrt(x * x + 1) - x);
      b = (P - k) / t, m = function(T) {
        var Z = T * b, H = Wa(k), I = u / (n * C) * (H * g1(t * Z + k) - h1(k));
        return [
          a + I * h,
          l + I * y,
          u * H / Wa(t * Z + k)
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
var Mr = 0, Yr = 0, Kr = 0, rc = 1e3, ai, Wr, li = 0, cr = 0, Li = 0, oo = typeof performance == "object" && performance.now ? performance : Date, oc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Qs() {
  return cr || (oc(v1), cr = oo.now() + Li);
}
function v1() {
  cr = 0;
}
function ui() {
  this._call = this._time = this._next = null;
}
ui.prototype = ic.prototype = {
  constructor: ui,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Qs() : +n) + (t == null ? 0 : +t), !this._next && Wr !== this && (Wr ? Wr._next = this : ai = this, Wr = this), this._call = e, this._time = n, ms();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ms());
  }
};
function ic(e, t, n) {
  var r = new ui();
  return r.restart(e, t, n), r;
}
function m1() {
  Qs(), ++Mr;
  for (var e = ai, t; e; )
    (t = cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Mr;
}
function Xa() {
  cr = (li = oo.now()) + Li, Mr = Yr = 0;
  try {
    m1();
  } finally {
    Mr = 0, w1(), cr = 0;
  }
}
function y1() {
  var e = oo.now(), t = e - li;
  t > rc && (Li -= t, li = e);
}
function w1() {
  for (var e, t = ai, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ai = n);
  Wr = e, ms(r);
}
function ms(e) {
  if (!Mr) {
    Yr && (Yr = clearTimeout(Yr));
    var t = e - cr;
    t > 24 ? (e < 1 / 0 && (Yr = setTimeout(Xa, e - oo.now() - Li)), Kr && (Kr = clearInterval(Kr))) : (Kr || (li = oo.now(), Kr = setInterval(y1, rc)), Mr = 1, oc(Xa));
  }
}
function qa(e, t, n) {
  var r = new ui();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var b1 = Oi("start", "end", "cancel", "interrupt"), x1 = [], sc = 0, Fa = 1, ys = 2, Xo = 3, Ga = 4, ws = 5, qo = 6;
function Ti(e, t, n, r, o, i) {
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
function Js(e, t) {
  var n = Jt(e, t);
  if (n.state > sc) throw new Error("too late; already scheduled");
  return n;
}
function fn(e, t) {
  var n = Jt(e, t);
  if (n.state > Xo) throw new Error("too late; already running");
  return n;
}
function Jt(e, t) {
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
        if (h.state === Xo) return qa(s);
        h.state === Ga ? (h.state = qo, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = qo, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (qa(function() {
      n.state === Xo && (n.state = Ga, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ys, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ys) {
      for (n.state = Xo, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = h);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ws, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === ws && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = qo, n.timer.stop(), delete r[t];
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
      o = r.state > ys && r.state < ws, r.state = qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
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
    var o = fn(this, e), i = o.tween;
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
    var i = fn(this, e), s = i.tween;
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
    for (var r = Jt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? _1 : k1)(n, e, t));
}
function ea(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = fn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Jt(o, r).value[t];
  };
}
function ac(e, t) {
  var n;
  return (typeof t == "number" ? rn : t instanceof ur ? si : (n = ur(t)) ? (t = n, si) : Ju)(e, t);
}
function E1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function N1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function P1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function O1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function M1(e, t, n) {
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
function T1(e, t) {
  var n = Mi(e), r = n === "transform" ? f1 : ac;
  return this.attrTween(e, typeof t == "function" ? (n.local ? L1 : M1)(n, r, ea(this, "attr." + e, t)) : t == null ? (n.local ? N1 : E1)(n) : (n.local ? O1 : P1)(n, r, t));
}
function V1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function D1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function z1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && D1(e, i)), n;
  }
  return o._value = t, o;
}
function H1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && V1(e, i)), n;
  }
  return o._value = t, o;
}
function I1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Mi(e);
  return this.tween(n, (r.local ? z1 : H1)(r, t));
}
function A1(e, t) {
  return function() {
    Js(this, e).delay = +t.apply(this, arguments);
  };
}
function Z1(e, t) {
  return t = +t, function() {
    Js(this, e).delay = t;
  };
}
function j1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? A1 : Z1)(t, e)) : Jt(this.node(), t).delay;
}
function K1(e, t) {
  return function() {
    fn(this, e).duration = +t.apply(this, arguments);
  };
}
function R1(e, t) {
  return t = +t, function() {
    fn(this, e).duration = t;
  };
}
function B1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? K1 : R1)(t, e)) : Jt(this.node(), t).duration;
}
function Y1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    fn(this, e).ease = t;
  };
}
function W1(e) {
  var t = this._id;
  return arguments.length ? this.each(Y1(t, e)) : Jt(this.node(), t).ease;
}
function X1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    fn(this, e).ease = n;
  };
}
function q1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(X1(this._id, e));
}
function F1(e) {
  typeof e != "function" && (e = Iu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new kn(r, this._parents, this._name, this._id);
}
function G1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || u[h]) && (p[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new kn(s, this._parents, this._name, this._id);
}
function U1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Q1(e, t, n) {
  var r, o, i = U1(t) ? Js : fn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function J1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Jt(this.node(), n).on.on(e) : this.each(Q1(n, e, t));
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
  typeof e != "function" && (e = qs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, Ti(u[f], t, n, f, u, Jt(d, n)));
  return new kn(i, this._parents, t, n);
}
function rv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Hu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), h, y = Jt(d, n), w = 0, m = f.length; w < m; ++w)
          (h = f[w]) && Ti(h, t, n, w, f, y);
        i.push(f), s.push(d);
      }
  return new kn(i, s, t, n);
}
var ov = bo.prototype.constructor;
function iv() {
  return new ov(this._groups, this._parents);
}
function sv(e, t) {
  var n, r, o;
  return function() {
    var i = Or(this, e), s = (this.style.removeProperty(e), Or(this, e));
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
    var s = Or(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function lv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Or(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Or(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function uv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = fn(this, e), u = l.on, d = l.value[i] == null ? a || (a = lc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function cv(e, t, n) {
  var r = (e += "") == "transform" ? d1 : ac;
  return t == null ? this.styleTween(e, sv(e, r)).on("end.style." + e, lc(e)) : typeof t == "function" ? this.styleTween(e, lv(e, r, ea(this, "style." + e, t))).each(uv(this._id, e)) : this.styleTween(e, av(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? gv(ea(this, "text", e)) : hv(e == null ? "" : e + ""));
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
        var d = Jt(l, t);
        Ti(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new kn(r, this._parents, e, n);
}
function xv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = fn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var $v = 0;
function kn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function uc() {
  return ++$v;
}
var hn = bo.prototype;
kn.prototype = {
  constructor: kn,
  select: nv,
  selectAll: rv,
  selectChild: hn.selectChild,
  selectChildren: hn.selectChildren,
  filter: F1,
  merge: G1,
  selection: iv,
  transition: bv,
  call: hn.call,
  nodes: hn.nodes,
  node: hn.node,
  size: hn.size,
  empty: hn.empty,
  each: hn.each,
  on: J1,
  attr: T1,
  attrTween: I1,
  style: cv,
  styleTween: pv,
  text: vv,
  textTween: wv,
  remove: tv,
  tween: S1,
  delay: j1,
  duration: B1,
  ease: W1,
  easeVarying: q1,
  end: xv,
  [Symbol.iterator]: hn[Symbol.iterator]
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
  e instanceof kn ? (t = e._id, e = e._name) : (t = uc(), (n = _v).time = Qs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ti(l, e, t, u, s, n || kv(l, t));
  return new kn(r, this._parents, e, t);
}
bo.prototype.interrupt = C1;
bo.prototype.transition = Sv;
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
function mn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
mn.prototype = {
  constructor: mn,
  scale: function(e) {
    return e === 1 ? this : new mn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new mn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Vi = new mn(1, 0, 0);
cc.prototype = mn.prototype;
function cc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Vi;
  return e.__zoom;
}
function qi(e) {
  e.stopImmediatePropagation();
}
function Rr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Nv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Pv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ua() {
  return this.__zoom || Vi;
}
function Ov(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Mv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Lv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function dc() {
  var e = Nv, t = Pv, n = Lv, r = Ov, o = Mv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Wo, u = Oi("start", "zoom", "end"), d, p, f, h = 500, y = 150, w = 0, m = 10;
  function b($) {
    $.property("__zoom", Ua).on("wheel.zoom", Z, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function($, E, O, K) {
    var B = $.selection ? $.selection() : $;
    B.property("__zoom", Ua), $ !== B ? k($, E, O, K) : B.interrupt().each(function() {
      P(this, arguments).event(K).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, b.scaleBy = function($, E, O, K) {
    b.scaleTo($, function() {
      var B = this.__zoom.k, Y = typeof E == "function" ? E.apply(this, arguments) : E;
      return B * Y;
    }, O, K);
  }, b.scaleTo = function($, E, O, K) {
    b.transform($, function() {
      var B = t.apply(this, arguments), Y = this.__zoom, V = O == null ? x(B) : typeof O == "function" ? O.apply(this, arguments) : O, F = Y.invert(V), q = typeof E == "function" ? E.apply(this, arguments) : E;
      return n(_(C(Y, q), V, F), B, s);
    }, O, K);
  }, b.translateBy = function($, E, O, K) {
    b.transform($, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), t.apply(this, arguments), s);
    }, null, K);
  }, b.translateTo = function($, E, O, K, B) {
    b.transform($, function() {
      var Y = t.apply(this, arguments), V = this.__zoom, F = K == null ? x(Y) : typeof K == "function" ? K.apply(this, arguments) : K;
      return n(Vi.translate(F[0], F[1]).scale(V.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), Y, s);
    }, K, B);
  };
  function C($, E) {
    return E = Math.max(i[0], Math.min(i[1], E)), E === $.k ? $ : new mn(E, $.x, $.y);
  }
  function _($, E, O) {
    var K = E[0] - O[0] * $.k, B = E[1] - O[1] * $.k;
    return K === $.x && B === $.y ? $ : new mn($.k, K, B);
  }
  function x($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function k($, E, O, K) {
    $.on("start.zoom", function() {
      P(this, arguments).event(K).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(K).end();
    }).tween("zoom", function() {
      var B = this, Y = arguments, V = P(B, Y).event(K), F = t.apply(B, Y), q = O == null ? x(F) : typeof O == "function" ? O.apply(B, Y) : O, U = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), A = B.__zoom, X = typeof E == "function" ? E.apply(B, Y) : E, G = l(A.invert(q).concat(U / A.k), X.invert(q).concat(U / X.k));
      return function(te) {
        if (te === 1) te = X;
        else {
          var ne = G(te), J = U / ne[2];
          te = new mn(J, q[0] - ne[0] * J, q[1] - ne[1] * J);
        }
        V.zoom(null, te);
      };
    });
  }
  function P($, E, O) {
    return !O && $.__zooming || new T($, E);
  }
  function T($, E) {
    this.that = $, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply($, E), this.taps = 0;
  }
  T.prototype = {
    event: function($) {
      return $ && (this.sourceEvent = $), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function($, E) {
      return this.mouse && $ !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && $ !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && $ !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function($) {
      var E = At(this.that).datum();
      u.call(
        $,
        this.that,
        new Ev($, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function Z($, ...E) {
    if (!e.apply(this, arguments)) return;
    var O = P(this, E).event($), K = this.__zoom, B = Math.max(i[0], Math.min(i[1], K.k * Math.pow(2, r.apply(this, arguments)))), Y = Yt($);
    if (O.wheel)
      (O.mouse[0][0] !== Y[0] || O.mouse[0][1] !== Y[1]) && (O.mouse[1] = K.invert(O.mouse[0] = Y)), clearTimeout(O.wheel);
    else {
      if (K.k === B) return;
      O.mouse = [Y, K.invert(Y)], Fo(this), O.start();
    }
    Rr($), O.wheel = setTimeout(V, y), O.zoom("mouse", n(_(C(K, B), O.mouse[0], O.mouse[1]), O.extent, s));
    function V() {
      O.wheel = null, O.end();
    }
  }
  function H($, ...E) {
    if (f || !e.apply(this, arguments)) return;
    var O = $.currentTarget, K = P(this, E, !0).event($), B = At($.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", U, !0), Y = Yt($, O), V = $.clientX, F = $.clientY;
    qu($.view), qi($), K.mouse = [Y, this.__zoom.invert(Y)], Fo(this), K.start();
    function q(A) {
      if (Rr(A), !K.moved) {
        var X = A.clientX - V, G = A.clientY - F;
        K.moved = X * X + G * G > w;
      }
      K.event(A).zoom("mouse", n(_(K.that.__zoom, K.mouse[0] = Yt(A, O), K.mouse[1]), K.extent, s));
    }
    function U(A) {
      B.on("mousemove.zoom mouseup.zoom", null), Fu(A.view, K.moved), Rr(A), K.event(A).end();
    }
  }
  function I($, ...E) {
    if (e.apply(this, arguments)) {
      var O = this.__zoom, K = Yt($.changedTouches ? $.changedTouches[0] : $, this), B = O.invert(K), Y = O.k * ($.shiftKey ? 0.5 : 2), V = n(_(C(O, Y), K, B), t.apply(this, E), s);
      Rr($), a > 0 ? At(this).transition().duration(a).call(k, V, K, $) : At(this).call(b.transform, V, K, $);
    }
  }
  function z($, ...E) {
    if (e.apply(this, arguments)) {
      var O = $.touches, K = O.length, B = P(this, E, $.changedTouches.length === K).event($), Y, V, F, q;
      for (qi($), V = 0; V < K; ++V)
        F = O[V], q = Yt(F, this), q = [q, this.__zoom.invert(q), F.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== q[2] && (B.touch1 = q, B.taps = 0) : (B.touch0 = q, Y = !0, B.taps = 1 + !!d);
      d && (d = clearTimeout(d)), Y && (B.taps < 2 && (p = q[0], d = setTimeout(function() {
        d = null;
      }, h)), Fo(this), B.start());
    }
  }
  function S($, ...E) {
    if (this.__zooming) {
      var O = P(this, E).event($), K = $.changedTouches, B = K.length, Y, V, F, q;
      for (Rr($), Y = 0; Y < B; ++Y)
        V = K[Y], F = Yt(V, this), O.touch0 && O.touch0[2] === V.identifier ? O.touch0[0] = F : O.touch1 && O.touch1[2] === V.identifier && (O.touch1[0] = F);
      if (V = O.that.__zoom, O.touch1) {
        var U = O.touch0[0], A = O.touch0[1], X = O.touch1[0], G = O.touch1[1], te = (te = X[0] - U[0]) * te + (te = X[1] - U[1]) * te, ne = (ne = G[0] - A[0]) * ne + (ne = G[1] - A[1]) * ne;
        V = C(V, Math.sqrt(te / ne)), F = [(U[0] + X[0]) / 2, (U[1] + X[1]) / 2], q = [(A[0] + G[0]) / 2, (A[1] + G[1]) / 2];
      } else if (O.touch0) F = O.touch0[0], q = O.touch0[1];
      else return;
      O.zoom("touch", n(_(V, F, q), O.extent, s));
    }
  }
  function M($, ...E) {
    if (this.__zooming) {
      var O = P(this, E).event($), K = $.changedTouches, B = K.length, Y, V;
      for (qi($), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), Y = 0; Y < B; ++Y)
        V = K[Y], O.touch0 && O.touch0[2] === V.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === V.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (V = Yt(V, this), Math.hypot(p[0] - V[0], p[1] - V[1]) < m)) {
        var F = At(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : Zo(+$), b) : r;
  }, b.filter = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : Zo(!!$), b) : e;
  }, b.touchable = function($) {
    return arguments.length ? (o = typeof $ == "function" ? $ : Zo(!!$), b) : o;
  }, b.extent = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : Zo([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), b) : t;
  }, b.scaleExtent = function($) {
    return arguments.length ? (i[0] = +$[0], i[1] = +$[1], b) : [i[0], i[1]];
  }, b.translateExtent = function($) {
    return arguments.length ? (s[0][0] = +$[0][0], s[1][0] = +$[1][0], s[0][1] = +$[0][1], s[1][1] = +$[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function($) {
    return arguments.length ? (n = $, b) : n;
  }, b.duration = function($) {
    return arguments.length ? (a = +$, b) : a;
  }, b.interpolate = function($) {
    return arguments.length ? (l = $, b) : l;
  }, b.on = function() {
    var $ = u.on.apply(u, arguments);
    return $ === u ? b : $;
  }, b.clickDistance = function($) {
    return arguments.length ? (w = ($ = +$) * $, b) : Math.sqrt(w);
  }, b.tapDistance = function($) {
    return arguments.length ? (m = +$, b) : m;
  }, b;
}
const io = {
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
}, bs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], fc = ["Enter", " ", "Escape"], Tv = {
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
var sr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(sr || (sr = {}));
var ci;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ci || (ci = {}));
const xs = {
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
var vn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(vn || (vn = {}));
var so;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(so || (so = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const Qa = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function Vv(e, t) {
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
function Ja(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Dv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const pc = (e) => "id" in e && "source" in e && "target" in e, zv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ta = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), $o = (e, t = [0, 0]) => {
  const { width: n, height: r } = Un(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ta(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? di(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Di(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return zi(n);
}, Co = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Di(n, di(o)), r = !0);
  }), r ? zi(n) : { x: 0, y: 0, width: 0, height: 0 };
}, na = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...ko(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, y = d.height ?? u.height ?? u.initialHeight ?? null, w = ao(a, Vr(u)), m = (h ?? 0) * (y ?? 0), b = i && w > 0;
    (!u.internals.handleBounds || b || w >= m || u.dragging) && l.push(u);
  }
  return l;
}, Iv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Av(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Zv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Av(e, s), l = Co(a), u = ra(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
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
      i?.("005", io.error005());
    else {
      const h = a.measured.width, y = a.measured.height;
      h && y && (p = [
        [l, u],
        [l + h, u + y]
      ]);
    }
  else a && Dr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Dr(p) ? dr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", io.error015()), {
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
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = Iv(s, l);
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
const Tr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Tr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Tr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function gc(e, t, n) {
  const { width: r, height: o } = Un(n), { x: i, y: s } = n.internals.positionAbsolute;
  return dr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const el = (e, t, n) => e < t ? Tr(Math.abs(e - t), 1, t) / t : e > n ? -Tr(Math.abs(e - n), 1, t) / t : 0, vc = (e, t, n = 15, r = 40) => {
  const o = el(e.x, r, t.width - r) * n, i = el(e.y, r, t.height - r) * n;
  return [o, i];
}, Di = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), $s = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), zi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Vr = (e, t = [0, 0]) => {
  const { x: n, y: r } = ta(e) ? e.internals.positionAbsolute : $o(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, di = (e, t = [0, 0]) => {
  const { x: n, y: r } = ta(e) ? e.internals.positionAbsolute : $o(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, mc = (e, t) => zi(Di($s(e), $s(t))), ao = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, tl = (e) => yn(e.width) && yn(e.height) && yn(e.x) && yn(e.y), yn = (e) => !isNaN(e) && isFinite(e), Kv = (e, t) => {
}, _o = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ko = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? _o(a, s) : a;
}, fi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function mr(e, t) {
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
    const r = mr(e, n), o = mr(e, t);
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
    const r = mr(e.top ?? e.y ?? 0, n), o = mr(e.bottom ?? e.y ?? 0, n), i = mr(e.left ?? e.x ?? 0, t), s = mr(e.right ?? e.x ?? 0, t);
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
const ra = (e, t, n, r, o, i) => {
  const s = Rv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Tr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - p * d, y = n / 2 - f * d, w = Bv(e, h, y, d, t, n), m = {
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
}, nr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Dr(e) {
  return e != null && e !== "parent";
}
function Un(e) {
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
  return { ...Tv, ...e || {} };
}
function Fi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = qt(e), a = ko({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? _o(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const wc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), bc = (e) => e?.getRootNode?.() || window?.document, Xv = ["INPUT", "SELECT", "TEXTAREA"];
function xc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Xv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const $c = (e) => "clientX" in e, qt = (e, t) => {
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
function qv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
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
  const i = Di(di(e), di(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ao(s, zi(i)) > 0;
}
const Uv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Qv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Jv = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return pc(e) ? n = { ...e } : n = {
    ...e,
    id: Uv(e)
  }, Qv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, x] = _c({
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
    ], P = [
      { x: u.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === h ? y = f === "x" ? k : P : y = f === "x" ? P : k;
  } else {
    const k = [{ x: u.x, y: d.y }], P = [{ x: d.x, y: u.y }];
    if (f === "x" ? y = a.x === h ? P : k : y = a.y === h ? k : P, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const S = Math.min(i - 1, i - z);
        a[f] === h ? b[f] = (u[f] > e[f] ? -1 : 1) * S : C[f] = (d[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", S = a[f] === l[z], M = u[z] > d[z], $ = u[z] < d[z];
      (a[f] === 1 && (!S && M || S && $) || a[f] !== 1 && (!S && $ || S && M)) && (y = f === "x" ? k : P);
    }
    const T = { x: u.x + b.x, y: u.y + b.y }, Z = { x: d.x + C.x, y: d.y + C.y }, H = Math.max(Math.abs(T.x - y[0].x), Math.abs(Z.x - y[0].x)), I = Math.max(Math.abs(T.y - y[0].y), Math.abs(Z.y - y[0].y));
    H >= I ? (w = (T.x + Z.x) / 2, m = y[0].y) : (w = y[0].x, m = (T.y + Z.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...y,
    { x: d.x + C.x, y: d.y + C.y },
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
function oa({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, h, y, w] = t0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((m, b, C) => {
    let _ = "";
    return C > 0 && C < p.length - 1 ? _ = n0(p[C - 1], b, p[C + 1], s) : _ = `${C === 0 ? "M" : "L"}${b.x} ${b.y}`, m += _, m;
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
    e.connectionMode === Lr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", io.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ye.Bottom, l = s?.position || ye.Top, u = lo(t, i, a), d = lo(n, s, l);
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
function lo(e, t, n = ye.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Un(e);
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
function Cs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function o0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Cs(l, t);
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
const Sc = 1e3, s0 = 10, ia = {
  nodeOrigin: [0, 0],
  nodeExtent: bs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, a0 = {
  ...ia,
  checkEquality: !0
};
function sa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function l0(e, t, n) {
  const r = sa(ia, n);
  for (const o of e.values())
    if (o.parentId)
      aa(o, e, t, r);
    else {
      const i = $o(o, r.nodeOrigin), s = Dr(o.extent) ? o.extent : r.nodeExtent, a = dr(i, s, Un(o));
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
  const o = sa(a0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Sc : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const p = $o(u, o.nodeOrigin), f = Dr(u.extent) ? u.extent : o.nodeExtent, h = dr(p, f, Un(u));
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
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && aa(d, t, n, r, i);
  }
  return s;
}
function d0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function aa(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = sa(ia, r), l = e.parentId, u = t.get(l);
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
  return (yn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function f0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Un(e), l = $o(e, n), u = Dr(e.extent) ? dr(l, e.extent, a) : l;
  let d = dr({ x: i + u.x, y: s + u.y }, r, a);
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
    const l = i.get(s.parentId)?.expandedRect ?? Vr(a), u = mc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Un(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, y = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), m = (y - d.width) * p[0], b = (w - d.height) * p[1];
    (f > 0 || h > 0 || m || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + m,
        y: a.position.y - h + b
      }
    }), n.get(l)?.forEach((C) => {
      e.some((_) => _.id === C.id) || o.push({
        id: C.id,
        type: "position",
        position: {
          x: C.position.x + f,
          y: C.position.y + h
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
      const m = f.nodeElement.getBoundingClientRect(), b = Dr(h.extent) ? h.extent : i;
      let { positionAbsolute: C } = h.internals;
      h.parentId && h.extent === "parent" ? C = gc(C, y, t.get(h.parentId)) : b && (C = dr(C, b, y));
      const _ = {
        ...h,
        measured: y,
        internals: {
          ...h.internals,
          positionAbsolute: C,
          handleBounds: {
            source: nl("source", f.nodeElement, m, d, h.id),
            target: nl("target", f.nodeElement, m, d, h.id)
          }
        }
      };
      t.set(h.id, _), h.parentId && aa(_, t, n, { nodeOrigin: o }), a = !0, w && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: y
      }), h.expandParent && h.parentId && p.push({
        id: h.id,
        parentId: h.parentId,
        rect: Vr(_, o)
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
function Nc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Nc(n, t) : !1;
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
function Gi({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  }, s = _o(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function b0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, h = !1, y = !1, w = null;
  function m({ noDragClassName: C, handleSelector: _, domNode: x, isSelectable: k, nodeId: P, nodeClickDistance: T = 0 }) {
    f = At(x);
    function Z({ x: S, y: M }) {
      const { nodeLookup: $, nodeExtent: E, snapGrid: O, snapToGrid: K, nodeOrigin: B, onNodeDrag: Y, onSelectionDrag: V, onError: F, updateNodePositions: q } = t();
      i = { x: S, y: M };
      let U = !1;
      const A = a.size > 1, X = A && E ? $s(Co(a)) : null, G = A && K ? w0({
        dragItems: a,
        snapGrid: O,
        x: S,
        y: M
      }) : null;
      for (const [te, ne] of a) {
        if (!$.has(te))
          continue;
        let J = { x: S - ne.distance.x, y: M - ne.distance.y };
        K && (J = G ? {
          x: Math.round(J.x + G.x),
          y: Math.round(J.y + G.y)
        } : _o(J, O));
        let he = null;
        if (A && E && !ne.extent && X) {
          const { positionAbsolute: ie } = ne.internals, fe = ie.x - X.x + E[0][0], pe = ie.x + ne.measured.width - X.x2 + E[1][0], $e = ie.y - X.y + E[0][1], de = ie.y + ne.measured.height - X.y2 + E[1][1];
          he = [
            [fe, $e],
            [pe, de]
          ];
        }
        const { position: ce, positionAbsolute: re } = hc({
          nodeId: te,
          nextPosition: J,
          nodeLookup: $,
          nodeExtent: he || E,
          nodeOrigin: B,
          onError: F
        });
        U = U || ne.position.x !== ce.x || ne.position.y !== ce.y, ne.position = ce, ne.internals.positionAbsolute = re;
      }
      if (y = y || U, !!U && (q(a, !0), w && (r || Y || !P && V))) {
        const [te, ne] = Gi({
          nodeId: P,
          dragItems: a,
          nodeLookup: $
        });
        r?.(w, a, te, ne), Y?.(w, te, ne), P || V?.(w, ne);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: S, panBy: M, autoPanSpeed: $, autoPanOnNodeDrag: E } = t();
      if (!E) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [O, K] = vc(u, d, $);
      (O !== 0 || K !== 0) && (i.x = (i.x ?? 0) - O / S[2], i.y = (i.y ?? 0) - K / S[2], await M({ x: O, y: K }) && Z(i)), s = requestAnimationFrame(H);
    }
    function I(S) {
      const { nodeLookup: M, multiSelectionActive: $, nodesDraggable: E, transform: O, snapGrid: K, snapToGrid: B, selectNodesOnDrag: Y, onNodeDragStart: V, onSelectionDragStart: F, unselectNodesAndEdges: q } = t();
      p = !0, (!Y || !k) && !$ && P && (M.get(P)?.selected || q()), k && Y && P && e?.(P);
      const U = Fi(S.sourceEvent, { transform: O, snapGrid: K, snapToGrid: B, containerBounds: d });
      if (i = U, a = y0(M, E, U, P), a.size > 0 && (n || V || !P && F)) {
        const [A, X] = Gi({
          nodeId: P,
          dragItems: a,
          nodeLookup: M
        });
        n?.(S.sourceEvent, a, A, X), V?.(S.sourceEvent, A, X), P || F?.(S.sourceEvent, X);
      }
    }
    const z = Zg().clickDistance(T).on("start", (S) => {
      const { domNode: M, nodeDragThreshold: $, transform: E, snapGrid: O, snapToGrid: K } = t();
      d = M?.getBoundingClientRect() || null, h = !1, y = !1, w = S.sourceEvent, $ === 0 && I(S), i = Fi(S.sourceEvent, { transform: E, snapGrid: O, snapToGrid: K, containerBounds: d }), u = qt(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: M, transform: $, snapGrid: E, snapToGrid: O, nodeDragThreshold: K, nodeLookup: B } = t(), Y = Fi(S.sourceEvent, { transform: $, snapGrid: E, snapToGrid: O, containerBounds: d });
      if (w = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      P && !B.has(P)) && (h = !0), !h) {
        if (!l && M && p && (l = !0, H()), !p) {
          const V = qt(S.sourceEvent, d), F = V.x - u.x, q = V.y - u.y;
          Math.sqrt(F * F + q * q) > K && I(S);
        }
        (i.x !== Y.xSnapped || i.y !== Y.ySnapped) && a && p && (u = qt(S.sourceEvent, d), Z(Y));
      }
    }).on("end", (S) => {
      if (!(!p || h) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: M, updateNodePositions: $, onNodeDragStop: E, onSelectionDragStop: O } = t();
        if (y && ($(a, !1), y = !1), o || E || !P && O) {
          const [K, B] = Gi({
            nodeId: P,
            dragItems: a,
            nodeLookup: M,
            dragging: !1
          });
          o?.(S.sourceEvent, a, K, B), E?.(S.sourceEvent, K, B), P || O?.(S.sourceEvent, B);
        }
      }
    }).filter((S) => {
      const M = S.target;
      return !S.button && (!C || !cl(M, `.${C}`, x)) && (!_ || cl(M, _, x));
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
    ao(o, Vr(i)) > 0 && r.push(i);
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
      const { x: d, y: p } = lo(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
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
function Pc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...lo(s, l, l.position, !0) } : l;
}
function Oc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function _0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Mc = () => !0;
function k0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: h, onConnectStart: y, onConnect: w, onConnectEnd: m, isValidConnection: b = Mc, onReconnectEnd: C, updateConnection: _, getTransform: x, getFromHandle: k, autoPanSpeed: P, dragThreshold: T = 1, handleDomNode: Z }) {
  const H = bc(e.target);
  let I = 0, z;
  const { x: S, y: M } = qt(e), $ = Oc(i, Z), E = a?.getBoundingClientRect();
  let O = !1;
  if (!E || !$)
    return;
  const K = Pc(o, $, r, l, t);
  if (!K)
    return;
  let B = qt(e, E), Y = !1, V = null, F = !1, q = null;
  function U() {
    if (!d || !E)
      return;
    const [he, ce] = vc(B, E, P);
    f({ x: he, y: ce }), I = requestAnimationFrame(U);
  }
  const A = {
    ...K,
    nodeId: o,
    type: $,
    position: K.position
  }, X = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: lo(X, A, ye.Left, !0),
    fromHandle: A,
    fromPosition: A.position,
    fromNode: X,
    to: B,
    toHandle: null,
    toPosition: Qa[A.position],
    toNode: null,
    pointer: B
  };
  function te() {
    O = !0, _(G), y?.(e, { nodeId: o, handleId: r, handleType: $ });
  }
  T === 0 && te();
  function ne(he) {
    if (!O) {
      const { x: fe, y: pe } = qt(he), $e = fe - S, de = pe - M;
      if (!($e * $e + de * de > T * T))
        return;
      te();
    }
    if (!k() || !A) {
      J(he);
      return;
    }
    const ce = x();
    B = qt(he, E), z = C0(ko(B, ce, !1, [1, 1]), n, l, A), Y || (U(), Y = !0);
    const re = Lc(he, {
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
    q = re.handleDomNode, V = re.connection, F = _0(!!z, re.isValid);
    const ie = {
      // from stays the same
      ...G,
      isValid: F,
      to: re.toHandle && F ? fi({ x: re.toHandle.x, y: re.toHandle.y }, ce) : B,
      toHandle: re.toHandle,
      toPosition: F && re.toHandle ? re.toHandle.position : Qa[A.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: B
    };
    _(ie), G = ie;
  }
  function J(he) {
    if (!("touches" in he && he.touches.length > 0)) {
      if (O) {
        (z || q) && V && F && w?.(V);
        const { inProgress: ce, ...re } = G, ie = {
          ...re,
          toPosition: G.toHandle ? G.toPosition : null
        };
        m?.(he, ie), i && C?.(he, ie);
      }
      h(), cancelAnimationFrame(I), Y = !1, F = !1, V = null, q = null, H.removeEventListener("mousemove", ne), H.removeEventListener("mouseup", J), H.removeEventListener("touchmove", ne), H.removeEventListener("touchend", J);
    }
  }
  H.addEventListener("mousemove", ne), H.addEventListener("mouseup", J), H.addEventListener("touchmove", ne), H.addEventListener("touchend", J);
}
function Lc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Mc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y } = qt(e), w = s.elementFromPoint(h, y), m = w?.classList.contains(`${a}-flow__handle`) ? w : f, b = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const C = Oc(void 0, m), _ = m.getAttribute("data-nodeid"), x = m.getAttribute("data-handleid"), k = m.classList.contains("connectable"), P = m.classList.contains("connectableend");
    if (!_ || !C)
      return b;
    const T = {
      source: p ? _ : r,
      sourceHandle: p ? x : o,
      target: p ? r : _,
      targetHandle: p ? o : x
    };
    b.connection = T;
    const Z = k && P && (n === Lr.Strict ? p && C === "source" || !p && C === "target" : _ !== r || x !== o);
    b.isValid = Z && u(T), b.toHandle = Pc(_, C, x, d, n, !0);
  }
  return b;
}
const dl = {
  onPointerDown: k0,
  isValid: Lc
};
function S0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = At(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: p = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const y = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const x = n(), k = _.sourceEvent.ctrlKey && nr() ? 10 : 1, P = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * d, T = x[2] * Math.pow(2, P * k);
      t.scaleTo(T);
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
      ], P = [k[0] - w[0], k[1] - w[1]];
      w = k;
      const T = r() * Math.max(x[2], Math.log(x[2])) * (h ? -1 : 1), Z = {
        x: x[0] - P[0] * T,
        y: x[1] - P[1] * T
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: Z.x,
        y: Z.y,
        zoom: x[2]
      }, H, a);
    }, C = dc().on("start", m).on("zoom", p ? b : null).on("zoom.wheel", f ? y : null);
    o.call(C, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Yt
  };
}
const Hi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ui = ({ x: e, y: t, zoom: n }) => Vi.translate(e, t).scale(n), wr = (e, t) => e.target.closest(`.${t}`), Tc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), E0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Qi = (e, t = 0, n = E0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Vc = (e) => {
  const t = e.ctrlKey && nr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function N0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (wr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = Yt(d), b = Vc(d), C = p * Math.pow(2, b);
      r.scaleTo(n, C, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === sr.Vertical ? 0 : d.deltaX * f, y = o === sr.Horizontal ? 0 : d.deltaY * f;
    !nr() && d.shiftKey && o !== sr.Vertical && (h = d.deltaY * f, y = 0), r.translateBy(
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
function P0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = wr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function O0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Hi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Tc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Hi(i.transform));
  };
}
function L0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Tc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
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
function T0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (p) => {
    const f = e || t, h = n && p.ctrlKey, y = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (wr(p, `${u}-flow__node`) || wr(p, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !y || wr(p, a) && y || wr(p, l) && (!y || o && y && !e) || !n && p.ctrlKey && y)
      return !1;
    if (!n && p.type === "touchstart" && p.touches?.length > 1)
      return p.preventDefault(), !1;
    if (!f && !o && !h && y || !r && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(r) && !r.includes(p.button) && p.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || y) && w;
  };
}
function V0({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), p = dc().scaleExtent([t, n]).translateExtent(r), f = At(e).call(p);
  C({
    x: o.x,
    y: o.y,
    zoom: Tr(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const h = f.on("wheel.zoom"), y = f.on("dblclick.zoom");
  p.wheelDelta(Vc);
  function w(z, S) {
    return f ? new Promise((M) => {
      p?.interpolate(S?.interpolate === "linear" ? Gr : Wo).transform(Qi(f, S?.duration, S?.ease, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: z, noPanClassName: S, onPaneContextMenu: M, userSelectionActive: $, panOnScroll: E, panOnDrag: O, panOnScrollMode: K, panOnScrollSpeed: B, preventScrolling: Y, zoomOnPinch: V, zoomOnScroll: F, zoomOnDoubleClick: q, zoomActivationKeyPressed: U, lib: A, onTransformChange: X, connectionInProgress: G, paneClickDistance: te, selectionOnDrag: ne }) {
    $ && !u.isZoomingOrPanning && b();
    const J = E && !U && !$;
    p.clickDistance(ne ? 1 / 0 : !yn(te) || te < 0 ? 0 : te);
    const he = J ? N0({
      zoomPanValues: u,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: p,
      panOnScrollMode: K,
      panOnScrollSpeed: B,
      zoomOnPinch: V,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : P0({
      noWheelClassName: z,
      preventScrolling: Y,
      d3ZoomHandler: h
    });
    if (f.on("wheel.zoom", he, { passive: !1 }), !$) {
      const re = O0({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      p.on("start", re);
      const ie = M0({
        zoomPanValues: u,
        panOnDrag: O,
        onPaneContextMenu: !!M,
        onPanZoom: i,
        onTransformChange: X
      });
      p.on("zoom", ie);
      const fe = L0({
        zoomPanValues: u,
        panOnDrag: O,
        panOnScroll: E,
        onPaneContextMenu: M,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      p.on("end", fe);
    }
    const ce = T0({
      zoomActivationKeyPressed: U,
      panOnDrag: O,
      zoomOnScroll: F,
      panOnScroll: E,
      zoomOnDoubleClick: q,
      zoomOnPinch: V,
      userSelectionActive: $,
      noPanClassName: S,
      noWheelClassName: z,
      lib: A,
      connectionInProgress: G
    });
    p.filter(ce), q ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function C(z, S, M) {
    const $ = Ui(z), E = p?.constrain()($, S, M);
    return E && await w(E), new Promise((O) => O(E));
  }
  async function _(z, S) {
    const M = Ui(z);
    return await w(M, S), new Promise(($) => $(M));
  }
  function x(z) {
    if (f) {
      const S = Ui(z), M = f.property("__zoom");
      (M.k !== z.zoom || M.x !== z.x || M.y !== z.y) && p?.transform(f, S, null, { sync: !0 });
    }
  }
  function k() {
    const z = f ? cc(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function P(z, S) {
    return f ? new Promise((M) => {
      p?.interpolate(S?.interpolate === "linear" ? Gr : Wo).scaleTo(Qi(f, S?.duration, S?.ease, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function T(z, S) {
    return f ? new Promise((M) => {
      p?.interpolate(S?.interpolate === "linear" ? Gr : Wo).scaleBy(Qi(f, S?.duration, S?.ease, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function Z(z) {
    p?.scaleExtent(z);
  }
  function H(z) {
    p?.translateExtent(z);
  }
  function I(z) {
    const S = !yn(z) || z < 0 ? 0 : z;
    p?.clickDistance(S);
  }
  return {
    update: m,
    destroy: b,
    setViewport: _,
    setViewportConstrained: C,
    getViewport: k,
    scaleTo: P,
    scaleBy: T,
    setScaleExtent: Z,
    setTranslateExtent: H,
    syncViewport: x,
    setClickDistance: I
  };
}
var fl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(fl || (fl = {}));
var D0 = /* @__PURE__ */ ee("<div><!></div>");
function Yn(e, t) {
  le(t, !0);
  let n = v(t, "id", 7, null), r = v(t, "type", 7, "source"), o = v(t, "position", 23, () => ye.Top), i = v(t, "style", 7), s = v(t, "class", 7), a = v(t, "isConnectable", 7), l = v(t, "isConnectableStart", 7, !0), u = v(t, "isConnectableEnd", 7, !0), d = v(t, "isValidConnection", 7), p = v(t, "onconnect", 7), f = v(t, "ondisconnect", 7), h = v(t, "children", 7), y = /* @__PURE__ */ Ae(t, [
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
  const w = Rn("svelteflow__node_id"), m = Rn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ N(() => r() === "target"), C = /* @__PURE__ */ N(() => a() !== void 0 ? a() : m.value), _ = en(), x = /* @__PURE__ */ N(() => _.ariaLabelConfig), k = null;
  du(() => {
    if (p() || f()) {
      _.edges;
      let V = _.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !Vv(V, k)) {
        const F = V ?? /* @__PURE__ */ new Map();
        Ja(k, F, f()), Ja(F, k, p());
      }
      k = new Map(V);
    }
  });
  let P = /* @__PURE__ */ N(() => {
    if (!_.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: V, toHandle: F, isValid: q } = _.connection, U = V && V.nodeId === w && V.type === r() && V.id === n(), A = F && F.nodeId === w && F.type === r() && F.id === n(), X = _.connectionMode === Lr.Strict ? V?.type !== r() : w !== V?.nodeId || n() !== V?.id;
    return [
      !0,
      U,
      A,
      X,
      A && q
    ];
  }), T = /* @__PURE__ */ N(() => po(c(P), 5)), Z = /* @__PURE__ */ N(() => c(T)[0]), H = /* @__PURE__ */ N(() => c(T)[1]), I = /* @__PURE__ */ N(() => c(T)[2]), z = /* @__PURE__ */ N(() => c(T)[3]), S = /* @__PURE__ */ N(() => c(T)[4]);
  function M(V) {
    const F = _.onbeforeconnect ? _.onbeforeconnect(V) : V;
    F && (_.addEdge(F), _.onconnect?.(V));
  }
  function $(V) {
    const F = $c(V);
    V.currentTarget && (F && V.button === 0 || !F) && dl.onPointerDown(V, {
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
      onConnect: M,
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
      handleDomNode: V.currentTarget
    });
  }
  function E(V) {
    if (!w || !_.clickConnectStartHandle && !l())
      return;
    if (!_.clickConnectStartHandle) {
      _.onclickconnectstart?.(V, { nodeId: w, handleId: n(), handleType: r() }), _.clickConnectStartHandle = { nodeId: w, type: r(), id: n() };
      return;
    }
    const F = bc(V.target), q = d() ?? _.isValidConnection, { connectionMode: U, clickConnectStartHandle: A, flowId: X, nodeLookup: G } = _, { connection: te, isValid: ne } = dl.isValid(V, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: U,
      fromNodeId: A.nodeId,
      fromHandleId: A.id ?? null,
      fromType: A.type,
      isValidConnection: q,
      flowId: X,
      doc: F,
      lib: "svelte",
      nodeLookup: G
    });
    ne && te && M(te);
    const J = structuredClone(Yl(_.connection));
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, _.onclickconnectend?.(V, J), _.clickConnectStartHandle = null;
  }
  var O = {
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
    set position(V = ye.Top) {
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
      return l();
    },
    set isConnectableStart(V = !0) {
      l(V), g();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(V = !0) {
      u(V), g();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(V) {
      d(V), g();
    },
    get onconnect() {
      return p();
    },
    set onconnect(V) {
      p(V), g();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(V) {
      f(V), g();
    },
    get children() {
      return h();
    },
    set children(V) {
      h(V), g();
    }
  }, K = D0(), B = () => {
  };
  tt(K, () => ({
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
    onmousedown: $,
    ontouchstart: $,
    onclick: _.clickConnect ? E : void 0,
    onkeypress: B,
    style: i(),
    role: "button",
    "aria-label": c(x)["handle.ariaLabel"],
    tabindex: "-1",
    ...y,
    [Hn]: {
      valid: c(S),
      connectingto: c(I),
      connectingfrom: c(H),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(C),
      connectionindicator: c(C) && (!c(Z) || c(z)) && (c(Z) || _.clickConnectStartHandle ? u() : l())
    }
  }));
  var Y = R(K);
  return Ge(Y, () => h() ?? ht), j(K), L(e, K), ue(O);
}
se(
  Yn,
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
function la(e, t) {
  le(t, !0);
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
  Yn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = D(a), u = D(l);
  return Yn(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ce(() => Re(l, ` ${n()?.label ?? ""} `)), L(e, s), ue(i);
}
se(la, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var H0 = /* @__PURE__ */ ee(" <!>", 1);
function Dc(e, t) {
  le(t, !0);
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
  var i = H0(), s = oe(i), a = D(s);
  return Yn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ce(() => Re(s, `${n()?.label ?? ""} `)), L(e, i), ue(o);
}
se(Dc, { data: {}, sourcePosition: {} }, [], [], !0);
var I0 = /* @__PURE__ */ ee(" <!>", 1);
function zc(e, t) {
  le(t, !0);
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
  var i = I0(), s = oe(i), a = D(s);
  return Yn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ce(() => Re(s, `${n()?.label ?? ""} `)), L(e, i), ue(o);
}
se(zc, { data: {}, targetPosition: {} }, [], [], !0);
function Hc(e, t) {
}
se(Hc, {}, [], [], !0);
function Ji(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Ic(e, t) {
  const n = /* @__PURE__ */ N(en), r = /* @__PURE__ */ N(() => c(n).domNode);
  let o;
  return c(r) ? Ji(e, c(r), t) : o = Zs(() => {
    Fe(() => {
      Ji(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Ji(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Ac() {
  let e = /* @__PURE__ */ Se(typeof window > "u");
  if (c(e)) {
    const t = Zs(() => {
      Fe(() => {
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
const pl = (e) => zv(e), A0 = (e) => pc(e);
function cn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const pi = {
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
function Zc(e, t) {
  le(t, !0), He(e, j0);
  let n = v(t, "x", 7, 0), r = v(t, "y", 7, 0), o = v(t, "width", 7), i = v(t, "height", 7), s = v(t, "selectEdgeOnClick", 7, !1), a = v(t, "transparent", 7, !1), l = v(t, "class", 7), u = v(t, "children", 7), d = /* @__PURE__ */ Ae(t, [
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
  const p = en(), f = Rn("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let h = /* @__PURE__ */ N(() => p.visible.edges.get(f)?.zIndex);
  var y = {
    get x() {
      return n();
    },
    set x(C = 0) {
      n(C), g();
    },
    get y() {
      return r();
    },
    set y(C = 0) {
      r(C), g();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), g();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), g();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(C = !1) {
      s(C), g();
    },
    get transparent() {
      return a();
    },
    set transparent(C = !1) {
      a(C), g();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), g();
    },
    get children() {
      return u();
    },
    set children(C) {
      u(C), g();
    }
  }, w = Z0(), m = () => {
    s() && p.handleEdgeSelection(f);
  };
  tt(
    w,
    (C) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: m,
      ...d,
      [on]: C
    }),
    [
      () => ({
        display: Ac().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: cn(o()),
        height: cn(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var b = R(w);
  return Ge(b, () => u() ?? ht), j(w), dt(w, (C, _) => Ic?.(C, _), () => "edge-labels"), L(e, w), ue(y);
}
se(
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
var K0 = /* @__PURE__ */ ge("<path></path>"), R0 = /* @__PURE__ */ ge('<path fill="none"></path><!><!>', 1);
function So(e, t) {
  le(t, !0);
  let n = v(t, "id", 7), r = v(t, "path", 7), o = v(t, "label", 7), i = v(t, "labelX", 7), s = v(t, "labelY", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "style", 7), p = v(t, "interactionWidth", 7, 20), f = v(t, "class", 7), h = /* @__PURE__ */ Ae(t, [
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
  }, w = R0(), m = oe(w), b = D(m);
  {
    var C = (k) => {
      var P = K0();
      tt(P, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), L(k, P);
    };
    ae(b, (k) => {
      p() > 0 && k(C);
    });
  }
  var _ = D(b);
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
        children: (P, T) => {
          me();
          var Z = _e();
          Ce(() => Re(Z, o())), L(P, Z);
        },
        $$slots: { default: !0 }
      });
    };
    ae(_, (k) => {
      o() && k(x);
    });
  }
  return Ce(() => {
    xe(m, "id", n()), xe(m, "d", r()), St(m, 0, Mn(["svelte-flow__edge-path", f()])), xe(m, "marker-start", l()), xe(m, "marker-end", u()), ct(m, d());
  }), L(e, w), ue(y);
}
se(
  So,
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
function ua(e, t) {
  le(t, !0);
  let n = v(t, "id", 7), r = v(t, "interactionWidth", 7), o = v(t, "label", 7), i = v(t, "labelStyle", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "pathOptions", 7), u = v(t, "sourcePosition", 7), d = v(t, "sourceX", 7), p = v(t, "sourceY", 7), f = v(t, "style", 7), h = v(t, "targetPosition", 7), y = v(t, "targetX", 7), w = v(t, "targetY", 7), m = /* @__PURE__ */ N(() => Cc({
    sourceX: d(),
    sourceY: p(),
    targetX: y(),
    targetY: w(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ N(() => po(c(m), 3)), C = /* @__PURE__ */ N(() => c(b)[0]), _ = /* @__PURE__ */ N(() => c(b)[1]), x = /* @__PURE__ */ N(() => c(b)[2]);
  var k = {
    get id() {
      return n();
    },
    set id(P) {
      n(P), g();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(P) {
      r(P), g();
    },
    get label() {
      return o();
    },
    set label(P) {
      o(P), g();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(P) {
      i(P), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(P) {
      s(P), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(P) {
      a(P), g();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(P) {
      l(P), g();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(P) {
      u(P), g();
    },
    get sourceX() {
      return d();
    },
    set sourceX(P) {
      d(P), g();
    },
    get sourceY() {
      return p();
    },
    set sourceY(P) {
      p(P), g();
    },
    get style() {
      return f();
    },
    set style(P) {
      f(P), g();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(P) {
      h(P), g();
    },
    get targetX() {
      return y();
    },
    set targetX(P) {
      y(P), g();
    },
    get targetY() {
      return w();
    },
    set targetY(P) {
      w(P), g();
    }
  };
  return So(e, {
    get id() {
      return n();
    },
    get path() {
      return c(C);
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
  ua,
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
  le(t, !0);
  let n = v(t, "interactionWidth", 7), r = v(t, "label", 7), o = v(t, "labelStyle", 7), i = v(t, "style", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "sourcePosition", 7), u = v(t, "sourceX", 7), d = v(t, "sourceY", 7), p = v(t, "targetPosition", 7), f = v(t, "targetX", 7), h = v(t, "targetY", 7), y = /* @__PURE__ */ N(() => oa({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: p()
  })), w = /* @__PURE__ */ N(() => po(c(y), 3)), m = /* @__PURE__ */ N(() => c(w)[0]), b = /* @__PURE__ */ N(() => c(w)[1]), C = /* @__PURE__ */ N(() => c(w)[2]);
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
  return So(e, {
    get path() {
      return c(m);
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
  }), ue(_);
}
se(
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
  le(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "targetX", 7), i = v(t, "targetY", 7), s = v(t, "label", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "interactionWidth", 7), p = v(t, "style", 7), f = /* @__PURE__ */ N(() => kc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ N(() => po(c(f), 3)), y = /* @__PURE__ */ N(() => c(h)[0]), w = /* @__PURE__ */ N(() => c(h)[1]), m = /* @__PURE__ */ N(() => c(h)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), g();
    },
    get targetX() {
      return o();
    },
    set targetX(C) {
      o(C), g();
    },
    get targetY() {
      return i();
    },
    set targetY(C) {
      i(C), g();
    },
    get label() {
      return s();
    },
    set label(C) {
      s(C), g();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), g();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), g();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), g();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), g();
    },
    get style() {
      return p();
    },
    set style(C) {
      p(C), g();
    }
  };
  return So(e, {
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
  le(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "sourcePosition", 7), i = v(t, "targetX", 7), s = v(t, "targetY", 7), a = v(t, "targetPosition", 7), l = v(t, "label", 7), u = v(t, "labelStyle", 7), d = v(t, "markerStart", 7), p = v(t, "markerEnd", 7), f = v(t, "interactionWidth", 7), h = v(t, "style", 7), y = /* @__PURE__ */ N(() => oa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ N(() => po(c(y), 3)), m = /* @__PURE__ */ N(() => c(w)[0]), b = /* @__PURE__ */ N(() => c(w)[1]), C = /* @__PURE__ */ N(() => c(w)[2]);
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
  return So(e, {
    get path() {
      return c(m);
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
    this.#e = t, this.#t = Ql(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Y0 = /\(.+\)/, W0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class X0 extends B0 {
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
      (i) => cs(o, "change", i)
    );
  }
}
function q0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return na(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
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
      const { visibleNodes: w, transform: m, width: b, height: C } = e;
      if (Gv({
        sourceNode: p,
        targetNode: f,
        width: b,
        height: C,
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
  input: Dc,
  output: zc,
  default: la,
  group: Hc
}, Yc = {
  straight: Kc,
  smoothstep: jc,
  default: ua,
  step: Rc
};
function F0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Co(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ra(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function G0(e) {
  class t {
    #e = /* @__PURE__ */ N(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      Q(this.#e, r);
    }
    #t = /* @__PURE__ */ Se(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      Q(this.#t, r);
    }
    #n = /* @__PURE__ */ Se(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      Q(this.#n, r);
    }
    #r = /* @__PURE__ */ Se(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      Q(this.#r, r);
    }
    #l = /* @__PURE__ */ Se(e.height ?? 0);
    get height() {
      return c(this.#l);
    }
    set height(r) {
      Q(this.#l, r);
    }
    #a = /* @__PURE__ */ N(() => {
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
    #o = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#o);
    }
    set viewportInitialized(r) {
      Q(this.#o, r);
    }
    #i = /* @__PURE__ */ N(() => (v0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
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
    #s = /* @__PURE__ */ N(() => {
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
    #u = /* @__PURE__ */ N(() => {
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
        p = q0(s, b, w, m), f = hl({
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
      Q(this.#c, r);
    }
    #d = /* @__PURE__ */ N(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      Q(this.#d, r);
    }
    #f = /* @__PURE__ */ N(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      Q(this.#f, r);
    }
    #h = /* @__PURE__ */ N(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#h);
    }
    set elementsSelectable(r) {
      Q(this.#h, r);
    }
    #p = /* @__PURE__ */ N(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      Q(this.#p, r);
    }
    #w = /* @__PURE__ */ N(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#w);
    }
    set edgesFocusable(r) {
      Q(this.#w, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#b);
    }
    set disableKeyboardA11y(r) {
      Q(this.#b, r);
    }
    #x = /* @__PURE__ */ N(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#x);
    }
    set minZoom(r) {
      Q(this.#x, r);
    }
    #m = /* @__PURE__ */ N(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      Q(this.#m, r);
    }
    #g = /* @__PURE__ */ N(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      Q(this.#g, r);
    }
    #v = /* @__PURE__ */ N(() => e.props.nodeExtent ?? bs);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      Q(this.#v, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.translateExtent ?? bs);
    get translateExtent() {
      return c(this.#y);
    }
    set translateExtent(r) {
      Q(this.#y, r);
    }
    #$ = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#$);
    }
    set defaultEdgeOptions(r) {
      Q(this.#$, r);
    }
    #C = /* @__PURE__ */ N(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      Q(this.#C, r);
    }
    #_ = /* @__PURE__ */ N(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#_);
    }
    set autoPanOnNodeDrag(r) {
      Q(this.#_, r);
    }
    #k = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      Q(this.#k, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Q(this.#S, r);
    }
    #E = /* @__PURE__ */ N(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      Q(this.#E, r);
    }
    #N = /* @__PURE__ */ N(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#N);
    }
    set connectionDragThreshold(r) {
      Q(this.#N, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      Q(this.#P, r);
    }
    #O = /* @__PURE__ */ Se(!1);
    get dragging() {
      return c(this.#O);
    }
    set dragging(r) {
      Q(this.#O, r);
    }
    #M = /* @__PURE__ */ Se(null);
    get selectionRect() {
      return c(this.#M);
    }
    set selectionRect(r) {
      Q(this.#M, r);
    }
    #L = /* @__PURE__ */ Se(!1);
    get selectionKeyPressed() {
      return c(this.#L);
    }
    set selectionKeyPressed(r) {
      Q(this.#L, r);
    }
    #T = /* @__PURE__ */ Se(!1);
    get multiselectionKeyPressed() {
      return c(this.#T);
    }
    set multiselectionKeyPressed(r) {
      Q(this.#T, r);
    }
    #V = /* @__PURE__ */ Se(!1);
    get deleteKeyPressed() {
      return c(this.#V);
    }
    set deleteKeyPressed(r) {
      Q(this.#V, r);
    }
    #D = /* @__PURE__ */ Se(!1);
    get panActivationKeyPressed() {
      return c(this.#D);
    }
    set panActivationKeyPressed(r) {
      Q(this.#D, r);
    }
    #z = /* @__PURE__ */ Se(!1);
    get zoomActivationKeyPressed() {
      return c(this.#z);
    }
    set zoomActivationKeyPressed(r) {
      Q(this.#z, r);
    }
    #H = /* @__PURE__ */ Se(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      Q(this.#H, r);
    }
    #I = /* @__PURE__ */ Se("");
    get ariaLiveMessage() {
      return c(this.#I);
    }
    set ariaLiveMessage(r) {
      Q(this.#I, r);
    }
    #A = /* @__PURE__ */ N(() => e.props.selectionMode ?? ci.Partial);
    get selectionMode() {
      return c(this.#A);
    }
    set selectionMode(r) {
      Q(this.#A, r);
    }
    #Z = /* @__PURE__ */ N(() => ({ ...Bc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#Z);
    }
    set nodeTypes(r) {
      Q(this.#Z, r);
    }
    #j = /* @__PURE__ */ N(() => ({ ...Yc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      Q(this.#j, r);
    }
    #K = /* @__PURE__ */ N(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#K);
    }
    set noPanClass(r) {
      Q(this.#K, r);
    }
    #R = /* @__PURE__ */ N(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#R);
    }
    set noDragClass(r) {
      Q(this.#R, r);
    }
    #B = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      Q(this.#B, r);
    }
    #Y = /* @__PURE__ */ N(() => Wv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Y);
    }
    set ariaLabelConfig(r) {
      Q(this.#Y, r);
    }
    #W = /* @__PURE__ */ Se(F0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#W);
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
    #X = /* @__PURE__ */ Se(
      // _connection is viewport independent and originating from XYHandle
      xs
    );
    get _connection() {
      return c(this.#X);
    }
    set _connection(r) {
      Q(this.#X, r);
    }
    #q = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: ko(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      Q(this.#q, r);
    }
    #F = /* @__PURE__ */ N(() => e.props.connectionMode ?? Lr.Strict);
    get connectionMode() {
      return c(this.#F);
    }
    set connectionMode(r) {
      Q(this.#F, r);
    }
    #G = /* @__PURE__ */ N(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      Q(this.#G, r);
    }
    #U = /* @__PURE__ */ N(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      Q(this.#U, r);
    }
    #Q = /* @__PURE__ */ N(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#Q);
    }
    set selectNodesOnDrag(r) {
      Q(this.#Q, r);
    }
    #J = /* @__PURE__ */ N(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      Q(this.#J, r);
    }
    #ee = /* @__PURE__ */ N(() => o0(e.edges, {
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
    #te = /* @__PURE__ */ N(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      Q(this.#te, r);
    }
    #ne = /* @__PURE__ */ N(() => e.props.onflowerror ?? Kv);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      Q(this.#ne, r);
    }
    #re = /* @__PURE__ */ N(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      Q(this.#re, r);
    }
    #oe = /* @__PURE__ */ N(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      Q(this.#oe, r);
    }
    #ie = /* @__PURE__ */ N(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      Q(this.#ie, r);
    }
    #se = /* @__PURE__ */ N(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      Q(this.#se, r);
    }
    #ae = /* @__PURE__ */ N(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      Q(this.#ae, r);
    }
    #le = /* @__PURE__ */ N(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      Q(this.#le, r);
    }
    #ue = /* @__PURE__ */ N(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      Q(this.#ue, r);
    }
    #ce = /* @__PURE__ */ N(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      Q(this.#ce, r);
    }
    #de = /* @__PURE__ */ N(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      Q(this.#de, r);
    }
    #fe = /* @__PURE__ */ N(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      Q(this.#fe, r);
    }
    #pe = /* @__PURE__ */ N(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      Q(this.#pe, r);
    }
    #he = /* @__PURE__ */ N(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      Q(this.#he, r);
    }
    #ge = /* @__PURE__ */ N(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      Q(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Se(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      Q(this.#ve, r);
    }
    #me = /* @__PURE__ */ N(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      Q(this.#me, r);
    }
    #ye = /* @__PURE__ */ N(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      Q(this.#ye, r);
    }
    #we = /* @__PURE__ */ N(() => e.props.onselectiondragstop);
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
    _prefersDark = new X0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ N(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      Q(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = xs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function en() {
  const e = Rn(hi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const hi = Symbol();
function Wc(e) {
  const t = G0(e);
  function n(I) {
    t.nodeTypes = {
      ...Bc,
      ...I
    };
  }
  function r(I) {
    t.edgeTypes = {
      ...Yc,
      ...I
    };
  }
  function o(I) {
    t.edges = Jv(I, t.edges);
  }
  const i = (I, z = !1) => {
    t.nodes = t.nodes.map((S) => {
      const M = I.get(S.id);
      return M ? { ...S, position: M.position, dragging: z } : S;
    });
  };
  function s(I) {
    const { changes: z, updatedInternals: S } = h0(I, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!S)
      return;
    l0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const M = /* @__PURE__ */ new Map();
    for (const $ of z) {
      const E = t.nodeLookup.get($.id)?.internals.userNode;
      if (!E)
        continue;
      const O = { ...E };
      switch ($.type) {
        case "dimensions": {
          const K = { ...O.measured, ...$.dimensions };
          $.setAttributes && (O.width = $.dimensions?.width ?? O.width, O.height = $.dimensions?.height ?? O.height), O.measured = K;
          break;
        }
        case "position":
          O.position = $.position ?? O.position;
          break;
      }
      M.set($.id, O);
    }
    t.nodes = t.nodes.map(($) => M.get($.id) ?? $);
  }
  function a(I) {
    const z = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = I, t.fitViewResolver = z, t.nodes = [...t.nodes], z.promise;
  }
  async function l(I, z, S) {
    const M = typeof S?.zoom < "u" ? S.zoom : t.maxZoom, $ = t.panZoom;
    return $ ? (await $.setViewport({
      x: t.width / 2 - I * M,
      y: t.height / 2 - z * M,
      zoom: M
    }, { duration: S?.duration, ease: S?.ease, interpolate: S?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(I, z) {
    const S = t.panZoom;
    return S ? S.scaleBy(I, z) : Promise.resolve(!1);
  }
  function d(I) {
    return u(1.2, I);
  }
  function p(I) {
    return u(1 / 1.2, I);
  }
  function f(I) {
    const z = t.panZoom;
    z && (z.setScaleExtent([I, t.maxZoom]), t.minZoom = I);
  }
  function h(I) {
    const z = t.panZoom;
    z && (z.setScaleExtent([t.minZoom, I]), t.maxZoom = I);
  }
  function y(I) {
    const z = t.panZoom;
    z && (z.setTranslateExtent(I), t.translateExtent = I);
  }
  function w(I, z = null) {
    let S = !1;
    const M = I.map(($) => (!z || z.has($.id)) && $.selected ? (S = !0, { ...$, selected: !1 }) : $);
    return [S, M];
  }
  function m(I) {
    const z = I?.nodes ? new Set(I.nodes.map((K) => K.id)) : null, [S, M] = w(t.nodes, z);
    S && (t.nodes = M);
    const $ = I?.edges ? new Set(I.edges.map((K) => K.id)) : null, [E, O] = w(t.edges, $);
    E && (t.edges = O);
  }
  function b(I) {
    const z = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((S) => {
      const M = I.includes(S.id), $ = z && S.selected || M;
      return !!S.selected !== $ ? { ...S, selected: $ } : S;
    }), z || m({ nodes: [] });
  }
  function C(I) {
    const z = t.multiselectionKeyPressed;
    t.edges = t.edges.map((S) => {
      const M = I.includes(S.id), $ = z && S.selected || M;
      return !!S.selected !== $ ? { ...S, selected: $ } : S;
    }), z || m({ edges: [] });
  }
  function _(I, z, S) {
    const M = t.nodeLookup.get(I);
    if (!M) {
      console.warn("012", io.error012(I));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, M.selected ? (z || M.selected && t.multiselectionKeyPressed) && (m({ nodes: [M], edges: [] }), requestAnimationFrame(() => S?.blur())) : b([I]);
  }
  function x(I) {
    const z = t.edgeLookup.get(I);
    if (!z) {
      console.warn("012", io.error012(I));
      return;
    }
    (z.selectable || t.elementsSelectable && typeof z.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, z.selected ? z.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [z] }) : C([I]));
  }
  function k(I, z) {
    const { nodeExtent: S, snapGrid: M, nodeOrigin: $, nodeLookup: E, nodesDraggable: O, onerror: K } = t, B = /* @__PURE__ */ new Map(), Y = M?.[0] ?? 5, V = M?.[1] ?? 5, F = I.x * Y * z, q = I.y * V * z;
    for (const U of E.values()) {
      if (!(U.selected && (U.draggable || O && typeof U.draggable > "u")))
        continue;
      let A = {
        x: U.internals.positionAbsolute.x + F,
        y: U.internals.positionAbsolute.y + q
      };
      M && (A = _o(A, M));
      const { position: X, positionAbsolute: G } = hc({
        nodeId: U.id,
        nextPosition: A,
        nodeLookup: E,
        nodeExtent: S,
        nodeOrigin: $,
        onError: K
      });
      U.position = X, U.internals.positionAbsolute = G, B.set(U.id, U);
    }
    i(B);
  }
  function P(I) {
    return g0({
      delta: I,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const T = (I) => {
    t._connection = { ...I };
  };
  function Z() {
    t._connection = xs;
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
    addSelectedEdges: C,
    handleNodeSelection: _,
    handleEdgeSelection: x,
    moveSelectedNodes: k,
    panBy: P,
    updateConnection: T,
    cancelConnection: Z,
    reset: H
  });
}
function U0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: p } = t, f = V0({
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
function Xc(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnScrollMode", 7), o = v(t, "preventScrolling", 7), i = v(t, "zoomOnScroll", 7), s = v(t, "zoomOnDoubleClick", 7), a = v(t, "zoomOnPinch", 7), l = v(t, "panOnDrag", 7), u = v(t, "panOnScroll", 7), d = v(t, "panOnScrollSpeed", 7), p = v(t, "paneClickDistance", 7), f = v(t, "selectionOnDrag", 7), h = v(t, "onmovestart", 7), y = v(t, "onmove", 7), w = v(t, "onmoveend", 7), m = v(t, "oninit", 7), b = v(t, "children", 7), C = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), _ = /* @__PURE__ */ N(() => n().panActivationKeyPressed || u());
  const { viewport: x } = n();
  let k = !1;
  Fe(() => {
    !k && n().viewportInitialized && (m()?.(), k = !0);
  });
  var P = {
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
  }, T = Q0(), Z = R(T);
  return Ge(Z, b), j(T), dt(T, (H, I) => U0?.(H, I), () => ({
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
    paneClickDistance: p(),
    selectionOnDrag: f(),
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), L(e, T), ue(P);
}
se(
  Xc,
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
var J0 = /* @__PURE__ */ ee("<div><!></div>");
function qc(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnDrag", 7, !0), o = v(t, "paneClickDistance", 7, 1), i = v(t, "selectionOnDrag", 7), s = v(t, "onpaneclick", 7), a = v(t, "onpanecontextmenu", 7), l = v(t, "onselectionstart", 7), u = v(t, "onselectionend", 7), d = v(t, "children", 7), p, f = null, h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), m = /* @__PURE__ */ N(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(w) !== !0), b = /* @__PURE__ */ N(() => n().elementsSelectable && (c(m) || n().selectionRectMode === "user")), C = !1;
  function _(E) {
    if (f = p?.getBoundingClientRect(), !f) return;
    const O = E.target === p, K = !O && !!E.target.closest(".nokey"), B = i() && O || n().selectionKeyPressed;
    if (K || !c(m) || !B || E.button !== 0 || !E.isPrimary)
      return;
    E.target?.setPointerCapture?.(E.pointerId), C = !1;
    const { x: Y, y: V } = qt(E, f);
    n(n().selectionRect = { width: 0, height: 0, startX: Y, startY: V, x: Y, y: V }, !0), O || (E.stopPropagation(), E.preventDefault());
  }
  function x(E) {
    if (!c(m) || !f || !n().selectionRect)
      return;
    const O = qt(E, f), { startX: K = 0, startY: B = 0 } = n().selectionRect;
    if (!C) {
      const U = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(O.x - K, O.y - B) <= U)
        return;
      n().unselectNodesAndEdges(), l()?.(E);
    }
    C = !0;
    const Y = {
      ...n().selectionRect,
      x: O.x < K ? O.x : K,
      y: O.y < B ? O.y : B,
      width: Math.abs(O.x - K),
      height: Math.abs(O.y - B)
    }, V = h, F = y;
    h = new Set(na(
      n().nodeLookup,
      Y,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === ci.Partial,
      !0
    ).map((U) => U.id));
    const q = n().defaultEdgeOptions.selectable ?? !0;
    y = /* @__PURE__ */ new Set();
    for (const U of h) {
      const A = n().connectionLookup.get(U);
      if (A)
        for (const { edgeId: X } of A.values()) {
          const G = n().edgeLookup.get(X);
          G && (G.selectable ?? q) && y.add(X);
        }
    }
    ml(V, h) || n(n().nodes = n().nodes.map(vl(h)), !0), ml(F, y) || n(n().edges = n().edges.map(vl(y)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = Y, !0);
  }
  function k(E) {
    E.button === 0 && (E.target?.releasePointerCapture?.(E.pointerId), !C && E.target === p && Z?.(E), n(n().selectionRect = null, !0), C && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), C && u()?.(E));
  }
  const P = (E) => {
    if (Array.isArray(c(w)) && c(w).includes(2)) {
      E.preventDefault();
      return;
    }
    a()?.({ event: E });
  }, T = (E) => {
    C && (E.stopPropagation(), C = !1);
  };
  function Z(E) {
    if (C || n().connection.inProgress) {
      C = !1;
      return;
    }
    s()?.({ event: E }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var H = {
    get store() {
      return n();
    },
    set store(E) {
      n(E), g();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(E = !0) {
      r(E), g();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(E = 1) {
      o(E), g();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(E) {
      i(E), g();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(E) {
      s(E), g();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(E) {
      a(E), g();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(E) {
      l(E), g();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(E) {
      u(E), g();
    },
    get children() {
      return d();
    },
    set children(E) {
      d(E), g();
    }
  }, I = J0();
  let z;
  var S = /* @__PURE__ */ N(() => c(b) ? void 0 : gl(Z, p));
  I.__click = function(...E) {
    c(S)?.apply(this, E);
  }, I.__pointermove = function(...E) {
    (c(b) ? x : void 0)?.apply(this, E);
  }, I.__pointerup = function(...E) {
    (c(b) ? k : void 0)?.apply(this, E);
  };
  var M = /* @__PURE__ */ N(() => gl(P, p));
  I.__contextmenu = function(...E) {
    c(M)?.apply(this, E);
  };
  var $ = R(I);
  return Ge($, d), j(I), Et(I, (E) => p = E, () => p), Ce((E) => z = St(I, 1, "svelte-flow__pane svelte-flow__container", null, z, E), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(m)
    })
  ]), ni(
    "pointerdown",
    I,
    function(...E) {
      (c(b) ? _ : void 0)?.apply(this, E);
    },
    !0
  ), ni(
    "click",
    I,
    function(...E) {
      (c(b) ? T : void 0)?.apply(this, E);
    },
    !0
  ), L(e, I), ue(H);
}
Gn(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  qc,
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
function Fc(e, t) {
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
  return Ge(a, r), j(i), Ce(() => s = ct(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), L(e, i), ue(o);
}
se(Fc, { store: {}, children: {} }, [], [], !0);
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
var tm = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), nm = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const rm = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Uc(e, t) {
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
  j(i);
  var a = D(i, 2), l = R(a, !0);
  j(a);
  var u = D(a, 2);
  {
    var d = (p) => {
      var f = tm(), h = R(f, !0);
      j(f), Ce(() => {
        xe(f, "id", `${om}-${n().flowId}`), Re(h, n().ariaLiveMessage);
      }), L(p, f);
    };
    ae(u, (p) => {
      n().disableKeyboardA11y || p(d);
    });
  }
  return Ce(() => {
    xe(i, "id", `${Qc}-${n().flowId}`), Re(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), xe(a, "id", `${Jc}-${n().flowId}`), Re(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), L(e, o), ue(r);
}
se(Uc, { store: {} }, [], [], !0);
const Qc = "svelte-flow__node-desc", Jc = "svelte-flow__edge-desc", om = "svelte-flow__aria-live";
var im = /* @__PURE__ */ ee("<div><!></div>");
function ed(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "node", 7), o = v(t, "resizeObserver", 7), i = v(t, "nodeClickDistance", 7), s = v(t, "onnodeclick", 7), a = v(t, "onnodedrag", 7), l = v(t, "onnodedragstart", 7), u = v(t, "onnodedragstop", 7), d = v(t, "onnodepointerenter", 7), p = v(t, "onnodepointerleave", 7), f = v(t, "onnodepointermove", 7), h = v(t, "onnodecontextmenu", 7), y = /* @__PURE__ */ N(() => mt(r().data, () => ({}), !0)), w = /* @__PURE__ */ N(() => mt(r().selected, !1)), m = /* @__PURE__ */ N(() => r().draggable), b = /* @__PURE__ */ N(() => r().selectable), C = /* @__PURE__ */ N(() => mt(r().deletable, !0)), _ = /* @__PURE__ */ N(() => r().connectable), x = /* @__PURE__ */ N(() => r().focusable), k = /* @__PURE__ */ N(() => mt(r().hidden, !1)), P = /* @__PURE__ */ N(() => mt(r().dragging, !1)), T = /* @__PURE__ */ N(() => mt(r().style, "")), Z = /* @__PURE__ */ N(() => r().class), H = /* @__PURE__ */ N(() => mt(r().type, "default")), I = /* @__PURE__ */ N(() => r().parentId), z = /* @__PURE__ */ N(() => r().sourcePosition), S = /* @__PURE__ */ N(() => r().targetPosition), M = /* @__PURE__ */ N(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).width), $ = /* @__PURE__ */ N(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).height), E = /* @__PURE__ */ N(() => r().initialWidth), O = /* @__PURE__ */ N(() => r().initialHeight), K = /* @__PURE__ */ N(() => r().width), B = /* @__PURE__ */ N(() => r().height), Y = /* @__PURE__ */ N(() => r().dragHandle), V = /* @__PURE__ */ N(() => mt(r().internals.z, 0)), F = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), q = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), U = /* @__PURE__ */ N(() => r().internals.userNode), { id: A } = r(), X = /* @__PURE__ */ N(() => c(m) ?? n().nodesDraggable), G = /* @__PURE__ */ N(() => c(b) ?? n().elementsSelectable), te = /* @__PURE__ */ N(() => c(_) ?? n().nodesConnectable), ne = /* @__PURE__ */ N(() => yc(r())), J = /* @__PURE__ */ N(() => !!r().internals.handleBounds), he = /* @__PURE__ */ N(() => c(ne) && c(J)), ce = /* @__PURE__ */ N(() => c(x) ?? n().nodesFocusable);
  function re(ve) {
    return n().parentLookup.has(ve);
  }
  let ie = /* @__PURE__ */ N(() => re(A)), fe = /* @__PURE__ */ Se(null), pe = null, $e = c(H), de = c(z), we = c(S), Ve = /* @__PURE__ */ N(() => n().nodeTypes[c(H)] ?? la), W = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  Sr("svelteflow__node_connectable", {
    get value() {
      return c(te);
    }
  }), Sr("svelteflow__node_id", A);
  let Ze = /* @__PURE__ */ N(() => {
    const ve = c(M) === void 0 ? c(K) ?? c(E) : c(K), je = c($) === void 0 ? c(B) ?? c(O) : c(B);
    if (!(ve === void 0 && je === void 0 && c(T) === void 0))
      return `${c(T)};${ve ? `width:${cn(ve)};` : ""}${je ? `height:${cn(je)};` : ""}`;
  });
  Fe(() => {
    (c(H) !== $e || c(z) !== de || c(S) !== we) && c(fe) !== null && requestAnimationFrame(() => {
      c(fe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[A, { id: A, nodeElement: c(fe), force: !0 }]]));
    }), $e = c(H), de = c(z), we = c(S);
  }), Fe(() => {
    o() && (!c(he) || c(fe) !== pe) && (pe && o().unobserve(pe), c(fe) && o().observe(c(fe)), pe = c(fe));
  }), wo(() => {
    pe && o()?.unobserve(pe);
  });
  function De(ve) {
    c(G) && (!n().selectNodesOnDrag || !c(X) || n().nodeDragThreshold > 0) && n().handleNodeSelection(A), s()?.({ node: c(U), event: ve });
  }
  function ze(ve) {
    if (!(xc(ve) || n().disableKeyboardA11y))
      if (fc.includes(ve.key) && c(G)) {
        const je = ve.key === "Escape";
        n().handleNodeSelection(A, je, c(fe));
      } else c(X) && r().selected && Object.prototype.hasOwnProperty.call(pi, ve.key) && (ve.preventDefault(), n(
        n().ariaLiveMessage = c(W)["node.a11yDescription.ariaLiveMessage"]({
          direction: ve.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(pi[ve.key], ve.shiftKey ? 4 : 1));
  }
  const Ie = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(fe)?.matches(":focus-visible"))
      return;
    const { width: ve, height: je, viewport: vt } = n();
    na(/* @__PURE__ */ new Map([[A, r()]]), { x: 0, y: 0, width: ve, height: je }, [vt.x, vt.y, vt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: vt.zoom });
  };
  var nt = {
    get store() {
      return n();
    },
    set store(ve) {
      n(ve), g();
    },
    get node() {
      return r();
    },
    set node(ve) {
      r(ve), g();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ve) {
      o(ve), g();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ve) {
      i(ve), g();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ve) {
      s(ve), g();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ve) {
      a(ve), g();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ve) {
      l(ve), g();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ve) {
      u(ve), g();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ve) {
      d(ve), g();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(ve) {
      p(ve), g();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ve) {
      f(ve), g();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(ve) {
      h(ve), g();
    }
  }, Nt = ke(), Xe = oe(Nt);
  {
    var Te = (ve) => {
      var je = im();
      tt(je, () => ({
        "data-id": A,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(H)}`,
          c(Z)
        ],
        style: c(Ze),
        onclick: De,
        onpointerenter: d() ? (Ke) => d()({ node: c(U), event: Ke }) : void 0,
        onpointerleave: p() ? (Ke) => p()({ node: c(U), event: Ke }) : void 0,
        onpointermove: f() ? (Ke) => f()({ node: c(U), event: Ke }) : void 0,
        oncontextmenu: h() ? (Ke) => h()({ node: c(U), event: Ke }) : void 0,
        onkeydown: c(ce) ? ze : void 0,
        onfocus: c(ce) ? Ie : void 0,
        tabIndex: c(ce) ? 0 : void 0,
        role: r().ariaRole ?? (c(ce) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Qc}-${n().flowId}`,
        ...r().domAttributes,
        [Hn]: {
          dragging: c(P),
          selected: c(w),
          draggable: c(X),
          connectable: c(te),
          selectable: c(G),
          nopan: c(X),
          parent: c(ie)
        },
        [on]: {
          "z-index": c(V),
          transform: `translate(${c(F) ?? ""}px, ${c(q) ?? ""}px)`,
          visibility: c(ne) ? "visible" : "hidden"
        }
      }));
      var vt = R(je);
      Ni(vt, () => c(Ve), (Ke, Dt) => {
        Dt(Ke, {
          get data() {
            return c(y);
          },
          get id() {
            return A;
          },
          get selected() {
            return c(w);
          },
          get selectable() {
            return c(G);
          },
          get deletable() {
            return c(C);
          },
          get sourcePosition() {
            return c(z);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(V);
          },
          get dragging() {
            return c(P);
          },
          get draggable() {
            return c(X);
          },
          get dragHandle() {
            return c(Y);
          },
          get parentId() {
            return c(I);
          },
          get type() {
            return c(H);
          },
          get isConnectable() {
            return c(te);
          },
          get positionAbsoluteX() {
            return c(F);
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
      }), j(je), dt(je, (Ke, Dt) => Gc?.(Ke, Dt), () => ({
        nodeId: A,
        isSelectable: c(G),
        disabled: !c(X),
        handleSelector: c(Y),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ke, Dt, pn, it) => {
          a()?.({ event: Ke, targetNode: pn, nodes: it });
        },
        onDragStart: (Ke, Dt, pn, it) => {
          l()?.({ event: Ke, targetNode: pn, nodes: it });
        },
        onDragStop: (Ke, Dt, pn, it) => {
          u()?.({ event: Ke, targetNode: pn, nodes: it });
        },
        store: n()
      })), Et(je, (Ke) => Q(fe, Ke), () => c(fe)), L(ve, je);
    };
    ae(Xe, (ve) => {
      c(k) || ve(Te);
    });
  }
  return L(e, Nt), ue(nt);
}
se(
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
var sm = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function td(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "nodeClickDistance", 7), o = v(t, "onnodeclick", 7), i = v(t, "onnodecontextmenu", 7), s = v(t, "onnodepointerenter", 7), a = v(t, "onnodepointermove", 7), l = v(t, "onnodepointerleave", 7), u = v(t, "onnodedrag", 7), d = v(t, "onnodedragstart", 7), p = v(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((w) => {
    const m = /* @__PURE__ */ new Map();
    w.forEach((b) => {
      const C = b.target.getAttribute("data-id");
      m.set(C, { id: C, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(m);
  });
  wo(() => {
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
  return gt(y, 21, () => n().visible.nodes.values(), (w) => w.id, (w, m) => {
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
  }), j(y), L(e, y), ue(h);
}
se(
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
var am = /* @__PURE__ */ ge('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function nd(e, t) {
  le(t, !0);
  const n = v(t, "edge", 7), r = v(t, "store", 15), o = v(t, "onedgeclick", 7), i = v(t, "onedgecontextmenu", 7), s = v(t, "onedgepointerenter", 7), a = v(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), u = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), p = /* @__PURE__ */ N(() => n().sourceY), f = /* @__PURE__ */ N(() => n().targetX), h = /* @__PURE__ */ N(() => n().targetY), y = /* @__PURE__ */ N(() => n().sourcePosition), w = /* @__PURE__ */ N(() => n().targetPosition), m = /* @__PURE__ */ N(() => mt(n().animated, !1)), b = /* @__PURE__ */ N(() => mt(n().selected, !1)), C = /* @__PURE__ */ N(() => n().label), _ = /* @__PURE__ */ N(() => n().labelStyle), x = /* @__PURE__ */ N(() => mt(n().data, () => ({}), !0)), k = /* @__PURE__ */ N(() => n().style), P = /* @__PURE__ */ N(() => n().interactionWidth), T = /* @__PURE__ */ N(() => mt(n().type, "default")), Z = /* @__PURE__ */ N(() => n().sourceHandle), H = /* @__PURE__ */ N(() => n().targetHandle), I = /* @__PURE__ */ N(() => n().markerStart), z = /* @__PURE__ */ N(() => n().markerEnd), S = /* @__PURE__ */ N(() => n().selectable), M = /* @__PURE__ */ N(() => n().focusable), $ = /* @__PURE__ */ N(() => mt(n().deletable, !0)), E = /* @__PURE__ */ N(() => n().hidden), O = /* @__PURE__ */ N(() => n().zIndex), K = /* @__PURE__ */ N(() => n().class), B = /* @__PURE__ */ N(() => n().ariaLabel), Y = null;
  const { id: V } = n();
  Sr("svelteflow__edge_id", V);
  let F = /* @__PURE__ */ N(() => c(S) ?? r().elementsSelectable), q = /* @__PURE__ */ N(() => c(M) ?? r().edgesFocusable), U = /* @__PURE__ */ N(() => r().edgeTypes[c(T)] ?? ua), A = /* @__PURE__ */ N(() => c(I) ? `url('#${Cs(c(I), r().flowId)}')` : void 0), X = /* @__PURE__ */ N(() => c(z) ? `url('#${Cs(c(z), r().flowId)}')` : void 0);
  function G(ie) {
    const fe = r().edgeLookup.get(V);
    fe && (c(F) && r().handleEdgeSelection(V), o()?.({ event: ie, edge: fe }));
  }
  function te(ie, fe) {
    const pe = r().edgeLookup.get(V);
    pe && fe({ event: ie, edge: pe });
  }
  function ne(ie) {
    if (!r().disableKeyboardA11y && fc.includes(ie.key) && c(F)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: pe } = r();
      ie.key === "Escape" ? (Y?.blur(), fe({ edges: [n()] })) : pe([V]);
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
  }, he = ke(), ce = oe(he);
  {
    var re = (ie) => {
      var fe = am();
      let pe;
      var $e = R(fe);
      tt($e, () => ({
        class: ["svelte-flow__edge", c(K)],
        "data-id": V,
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
        "aria-describedby": c(q) ? `${Jc}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(q) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(q) ? ne : void 0,
        tabindex: c(q) ? 0 : void 0,
        ...n().domAttributes,
        [Hn]: {
          animated: c(m),
          selected: c(b),
          selectable: c(F)
        }
      }));
      var de = R($e);
      Ni(de, () => c(U), (we, Ve) => {
        Ve(we, {
          get id() {
            return V;
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
            return c(C);
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
            return c(P);
          },
          get selectable() {
            return c(F);
          },
          get deletable() {
            return c($);
          },
          get type() {
            return c(T);
          },
          get sourceHandleId() {
            return c(Z);
          },
          get targetHandleId() {
            return c(H);
          },
          get markerStart() {
            return c(A);
          },
          get markerEnd() {
            return c(X);
          }
        });
      }), j($e), Et($e, (we) => Y = we, () => Y), j(fe), Ce(() => pe = ct(fe, "", pe, { "z-index": c(O) })), L(ie, fe);
    };
    ae(ce, (ie) => {
      c(E) || ie(re);
    });
  }
  return L(e, he), ue(J);
}
se(
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
var lm = /* @__PURE__ */ ge("<defs></defs>");
function rd(e, t) {
  le(t, !1);
  const n = en();
  Vu();
  var r = lm();
  gt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    od(o, Be(() => c(i)));
  }), j(r), L(e, r), ue();
}
se(rd, {}, [], [], !0);
var um = /* @__PURE__ */ ge('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), cm = /* @__PURE__ */ ge('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), dm = /* @__PURE__ */ ge('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function od(e, t) {
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
      Ce(() => {
        xe(m, "stroke-width", u()), b = ct(m, "", b, { stroke: l() });
      }), L(w, m);
    }, y = (w) => {
      var m = ke(), b = oe(m);
      {
        var C = (_) => {
          var x = cm();
          let k;
          Ce(() => {
            xe(x, "stroke-width", u()), k = ct(x, "", k, { stroke: l(), fill: l() });
          }), L(_, x);
        };
        ae(
          b,
          (_) => {
            r() === so.ArrowClosed && _(C);
          },
          !0
        );
      }
      L(w, m);
    };
    ae(f, (w) => {
      r() === so.Arrow ? w(h) : w(y, !1);
    });
  }
  return j(p), Ce(() => {
    xe(p, "id", n()), xe(p, "markerWidth", `${o()}`), xe(p, "markerHeight", `${i()}`), xe(p, "markerUnits", s()), xe(p, "orient", a());
  }), L(e, p), ue(d);
}
se(
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
var fm = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function id(e, t) {
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
  rd(d, {}), j(u);
  var p = D(u, 2);
  return gt(p, 17, () => n().visible.edges.values(), (f) => f.id, (f, h) => {
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
  }), j(l), L(e, l), ue(a);
}
se(
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
var pm = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const hm = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function ca(e, t) {
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
  }, l = ke(), u = oe(l);
  {
    var d = (p) => {
      var f = pm();
      let h;
      Ce((y) => h = ct(f, "", h, y), [
        () => ({
          width: typeof o() == "string" ? o() : cn(o()),
          height: typeof i() == "string" ? i() : cn(i()),
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
se(ca, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var gm = /* @__PURE__ */ ee("<div><!></div>");
const vm = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function sd(e, t) {
  le(t, !0), He(e, vm);
  let n = v(t, "store", 15), r = v(t, "onnodedrag", 7), o = v(t, "onnodedragstart", 7), i = v(t, "onnodedragstop", 7), s = v(t, "onselectionclick", 7), a = v(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Se(void 0);
  Fe(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ N(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Co(n().nodeLookup, { filter: (C) => !!C.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const C = n().nodes.filter((_) => _.selected);
    a()?.({ nodes: C, event: b });
  }
  function p(b) {
    const C = n().nodes.filter((_) => _.selected);
    s()?.({ nodes: C, event: b });
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
      var C = gm();
      C.__contextmenu = d, C.__click = p, C.__keydown = function(...k) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, k);
      };
      let _;
      var x = R(C);
      ca(x, { width: "100%", height: "100%", x: 0, y: 0 }), j(C), dt(C, (k, P) => Gc?.(k, P), () => ({
        disabled: !1,
        store: n(),
        onDrag: (k, P, T, Z) => {
          r()?.({ event: k, targetNode: null, nodes: Z });
        },
        onDragStart: (k, P, T, Z) => {
          o()?.({ event: k, targetNode: null, nodes: Z });
        },
        onDragStop: (k, P, T, Z) => {
          i()?.({ event: k, targetNode: null, nodes: Z });
        }
      })), Et(C, (k) => Q(l, k), () => c(l)), Ce(
        (k) => {
          St(C, 1, Mn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), xe(C, "role", n().disableKeyboardA11y ? void 0 : "button"), xe(C, "tabindex", n().disableKeyboardA11y ? void 0 : -1), _ = ct(C, "", _, k);
        },
        [
          () => ({
            width: cn(c(u).width),
            height: cn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), L(b, C);
    };
    ae(w, (b) => {
      n().selectionRectMode === "nodes" && c(u) && yn(c(u).x) && yn(c(u).y) && b(m);
    });
  }
  return L(e, y), ue(h);
}
Gn(["contextmenu", "click", "keydown"]);
se(
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
function nn(e, t) {
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
          const C = Array.isArray(f) ? f : [f];
          let _ = !1;
          for (const x of C)
            if ((Array.isArray(x) ? x : [x]).reduce(
              (k, P) => k | mm(P),
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
  return n && (s = cs(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = cs(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ot() {
  const e = /* @__PURE__ */ N(en), t = (i) => {
    const s = pl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Yv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Vr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = at(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && pl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = at(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && A0(u) ? u : { ...l, ...u };
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
      const a = ra(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
        const f = Vr(p), h = ao(f, u);
        return s && h > 0 || h >= f.width * f.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = tl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = ao(l, s);
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
      return a && (c(e).nodes = at(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = at(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - p, y: i.y - f };
      return ko(h, [l, u, d], a !== null, a || [1, 1]);
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
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "selectionKey", 7, "Shift"), o = v(t, "multiSelectionKey", 23, () => nr() ? "Meta" : "Control"), i = v(t, "deleteKey", 7, "Backspace"), s = v(t, "panActivationKey", 7, " "), a = v(t, "zoomActivationKey", 23, () => nr() ? "Meta" : "Control"), { deleteElements: l } = ot();
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
    return (Array.isArray(m) ? m : [m]).map((C) => {
      const _ = p(C);
      return {
        key: _,
        modifier: d(C),
        enabled: _ !== null,
        callback: b
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function y() {
    const m = n().nodes.filter((C) => C.selected), b = n().edges.filter((C) => C.selected);
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
    set multiSelectionKey(m = nr() ? "Meta" : "Control") {
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
    set zoomActivationKey(m = nr() ? "Meta" : "Control") {
      a(m), g();
    }
  };
  return ni("blur", bt, h), ni("contextmenu", bt, h), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(i(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !xc(m.originalEvent) && (n(n().deleteKeyPressed = !0, !0), y());
    }),
    type: "keydown"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), dt(bt, (m, b) => nn?.(m, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(w);
}
se(
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
var ym = /* @__PURE__ */ ge('<path fill="none" class="svelte-flow__connection-path"></path>'), wm = /* @__PURE__ */ ge('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function ld(e, t) {
  le(t, !0);
  let n = v(t, "store", 15), r = v(t, "type", 7), o = v(t, "containerStyle", 7), i = v(t, "style", 7), s = v(t, "LineComponent", 7), a = /* @__PURE__ */ N(() => {
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
      case vn.Bezier: {
        const [h] = Cc(f);
        return h;
      }
      case vn.Straight: {
        const [h] = kc(f);
        return h;
      }
      case vn.Step:
      case vn.SmoothStep: {
        const [h] = oa({
          ...f,
          borderRadius: r() === vn.Step ? 0 : void 0
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
        var m = (C) => {
          var _ = ke(), x = oe(_);
          Ni(x, s, (k, P) => {
            P(k, {});
          }), L(C, _);
        }, b = (C) => {
          var _ = ym();
          Ce(() => {
            xe(_, "d", c(a)), ct(_, i());
          }), L(C, _);
        };
        ae(w, (C) => {
          s() ? C(m) : C(b, !1);
        });
      }
      j(y), j(h), Ce(
        (C) => {
          xe(h, "width", n().width), xe(h, "height", n().height), ct(h, o()), St(y, 0, C);
        },
        [
          () => Mn([
            "svelte-flow__connection",
            Dv(n().connection.isValid)
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
var bm = /* @__PURE__ */ ee("<div><!></div>");
function Eo(e, t) {
  le(t, !0);
  let n = v(t, "position", 7, "top-right"), r = v(t, "style", 7), o = v(t, "class", 7), i = v(t, "children", 7), s = /* @__PURE__ */ Ae(t, [
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
  tt(u, (p) => ({ class: p, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = R(u);
  return Ge(d, () => i() ?? ht), j(u), L(e, u), ue(l);
}
se(Eo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var xm = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ud(e, t) {
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
  }, i = ke(), s = oe(i);
  {
    var a = (l) => {
      Eo(l, {
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
se(ud, { proOptions: {}, position: {} }, [], [], !0);
var $m = /* @__PURE__ */ ee("<div><!></div>");
const Cm = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function cd(e, t) {
  le(t, !0), He(e, Cm);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "colorMode", 7), i = v(t, "domNode", 15), s = v(t, "clientWidth", 15), a = v(t, "clientHeight", 15), l = v(t, "children", 7), u = v(t, "rest", 7), d = /* @__PURE__ */ N(() => u().class), p = /* @__PURE__ */ N(() => $p(u(), [
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
  tt(
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
      [on]: m
    }),
    [
      () => ({ width: cn(n()), height: cn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var w = R(y);
  return Ge(w, () => l() ?? ht), j(y), Et(y, (m) => i(m), () => i()), Ma(y, "clientHeight", a), Ma(y, "clientWidth", s), L(e, y), ue(h);
}
se(
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
var _m = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), km = /* @__PURE__ */ ee("<!> <!>", 1), Sm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function dd(e, t) {
  le(t, !0);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "proOptions", 7), i = v(t, "selectionKey", 7), s = v(t, "deleteKey", 7), a = v(t, "panActivationKey", 7), l = v(t, "multiSelectionKey", 7), u = v(t, "zoomActivationKey", 7), d = v(t, "paneClickDistance", 7, 1), p = v(t, "nodeClickDistance", 7, 1), f = v(t, "onmovestart", 7), h = v(t, "onmoveend", 7), y = v(t, "onmove", 7), w = v(t, "oninit", 7), m = v(t, "onnodeclick", 7), b = v(t, "onnodecontextmenu", 7), C = v(t, "onnodedrag", 7), _ = v(t, "onnodedragstart", 7), x = v(t, "onnodedragstop", 7), k = v(t, "onnodepointerenter", 7), P = v(t, "onnodepointermove", 7), T = v(t, "onnodepointerleave", 7), Z = v(t, "onselectionclick", 7), H = v(t, "onselectioncontextmenu", 7), I = v(t, "onselectionstart", 7), z = v(t, "onselectionend", 7), S = v(t, "onedgeclick", 7), M = v(t, "onedgecontextmenu", 7), $ = v(t, "onedgepointerenter", 7), E = v(t, "onedgepointerleave", 7), O = v(t, "onpaneclick", 7), K = v(t, "onpanecontextmenu", 7), B = v(t, "panOnScrollMode", 23, () => sr.Free), Y = v(t, "preventScrolling", 7, !0), V = v(t, "zoomOnScroll", 7, !0), F = v(t, "zoomOnDoubleClick", 7, !0), q = v(t, "zoomOnPinch", 7, !0), U = v(t, "panOnScroll", 7, !1), A = v(t, "panOnScrollSpeed", 7, 0.5), X = v(t, "panOnDrag", 7, !0), G = v(t, "selectionOnDrag", 7, !1), te = v(t, "connectionLineComponent", 7), ne = v(t, "connectionLineStyle", 7), J = v(t, "connectionLineContainerStyle", 7), he = v(t, "connectionLineType", 23, () => vn.Bezier), ce = v(t, "attributionPosition", 7), re = v(t, "children", 7), ie = v(t, "nodes", 31, () => Zt([])), fe = v(t, "edges", 31, () => Zt([])), pe = v(t, "viewport", 31, () => {
  }), $e = /* @__PURE__ */ Ae(t, [
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
  ]), de = Wc({
    props: $e,
    width: n(),
    height: r(),
    get nodes() {
      return ie();
    },
    set nodes(W) {
      ie(W);
    },
    get edges() {
      return fe();
    },
    set edges(W) {
      fe(W);
    },
    get viewport() {
      return pe();
    },
    set viewport(W) {
      pe(W);
    }
  });
  const we = Rn(hi);
  we && we.setStore && we.setStore(de), Sr(hi, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Fe(() => {
    const W = { nodes: de.selectedNodes, edges: de.selectedEdges };
    at(() => t.onselectionchange)?.(W);
    for (const Ze of de.selectionChangeHandlers.values())
      Ze(W);
  }), wo(() => {
    de.reset();
  });
  var Ve = {
    get width() {
      return n();
    },
    set width(W) {
      n(W), g();
    },
    get height() {
      return r();
    },
    set height(W) {
      r(W), g();
    },
    get proOptions() {
      return o();
    },
    set proOptions(W) {
      o(W), g();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(W) {
      i(W), g();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(W) {
      s(W), g();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(W) {
      a(W), g();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(W) {
      l(W), g();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(W) {
      u(W), g();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(W = 1) {
      d(W), g();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(W = 1) {
      p(W), g();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(W) {
      f(W), g();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(W) {
      h(W), g();
    },
    get onmove() {
      return y();
    },
    set onmove(W) {
      y(W), g();
    },
    get oninit() {
      return w();
    },
    set oninit(W) {
      w(W), g();
    },
    get onnodeclick() {
      return m();
    },
    set onnodeclick(W) {
      m(W), g();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(W) {
      b(W), g();
    },
    get onnodedrag() {
      return C();
    },
    set onnodedrag(W) {
      C(W), g();
    },
    get onnodedragstart() {
      return _();
    },
    set onnodedragstart(W) {
      _(W), g();
    },
    get onnodedragstop() {
      return x();
    },
    set onnodedragstop(W) {
      x(W), g();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(W) {
      k(W), g();
    },
    get onnodepointermove() {
      return P();
    },
    set onnodepointermove(W) {
      P(W), g();
    },
    get onnodepointerleave() {
      return T();
    },
    set onnodepointerleave(W) {
      T(W), g();
    },
    get onselectionclick() {
      return Z();
    },
    set onselectionclick(W) {
      Z(W), g();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(W) {
      H(W), g();
    },
    get onselectionstart() {
      return I();
    },
    set onselectionstart(W) {
      I(W), g();
    },
    get onselectionend() {
      return z();
    },
    set onselectionend(W) {
      z(W), g();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(W) {
      S(W), g();
    },
    get onedgecontextmenu() {
      return M();
    },
    set onedgecontextmenu(W) {
      M(W), g();
    },
    get onedgepointerenter() {
      return $();
    },
    set onedgepointerenter(W) {
      $(W), g();
    },
    get onedgepointerleave() {
      return E();
    },
    set onedgepointerleave(W) {
      E(W), g();
    },
    get onpaneclick() {
      return O();
    },
    set onpaneclick(W) {
      O(W), g();
    },
    get onpanecontextmenu() {
      return K();
    },
    set onpanecontextmenu(W) {
      K(W), g();
    },
    get panOnScrollMode() {
      return B();
    },
    set panOnScrollMode(W = sr.Free) {
      B(W), g();
    },
    get preventScrolling() {
      return Y();
    },
    set preventScrolling(W = !0) {
      Y(W), g();
    },
    get zoomOnScroll() {
      return V();
    },
    set zoomOnScroll(W = !0) {
      V(W), g();
    },
    get zoomOnDoubleClick() {
      return F();
    },
    set zoomOnDoubleClick(W = !0) {
      F(W), g();
    },
    get zoomOnPinch() {
      return q();
    },
    set zoomOnPinch(W = !0) {
      q(W), g();
    },
    get panOnScroll() {
      return U();
    },
    set panOnScroll(W = !1) {
      U(W), g();
    },
    get panOnScrollSpeed() {
      return A();
    },
    set panOnScrollSpeed(W = 0.5) {
      A(W), g();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(W = !0) {
      X(W), g();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(W = !1) {
      G(W), g();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(W) {
      te(W), g();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(W) {
      ne(W), g();
    },
    get connectionLineContainerStyle() {
      return J();
    },
    set connectionLineContainerStyle(W) {
      J(W), g();
    },
    get connectionLineType() {
      return he();
    },
    set connectionLineType(W = vn.Bezier) {
      he(W), g();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(W) {
      ce(W), g();
    },
    get children() {
      return re();
    },
    set children(W) {
      re(W), g();
    },
    get nodes() {
      return ie();
    },
    set nodes(W = []) {
      ie(W), g();
    },
    get edges() {
      return fe();
    },
    set edges(W = []) {
      fe(W), g();
    },
    get viewport() {
      return pe();
    },
    set viewport(W = void 0) {
      pe(W), g();
    }
  };
  return cd(e, {
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
      return $e;
    },
    get domNode() {
      return de.domNode;
    },
    set domNode(W) {
      de.domNode = W;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(W) {
      de.width = W;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(W) {
      de.height = W;
    },
    children: (W, Ze) => {
      var De = Sm(), ze = oe(De);
      ad(ze, {
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
        set store(Te) {
          de = Te;
        }
      });
      var Ie = D(ze, 2);
      Xc(Ie, {
        get panOnScrollMode() {
          return B();
        },
        get preventScrolling() {
          return Y();
        },
        get zoomOnScroll() {
          return V();
        },
        get zoomOnDoubleClick() {
          return F();
        },
        get zoomOnPinch() {
          return q();
        },
        get panOnScroll() {
          return U();
        },
        get panOnScrollSpeed() {
          return A();
        },
        get panOnDrag() {
          return X();
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
        set store(Te) {
          de = Te;
        },
        children: (Te, ve) => {
          qc(Te, {
            get onpaneclick() {
              return O();
            },
            get onpanecontextmenu() {
              return K();
            },
            get onselectionstart() {
              return I();
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
              return G();
            },
            get store() {
              return de;
            },
            set store(je) {
              de = je;
            },
            children: (je, vt) => {
              var Ke = km(), Dt = oe(Ke);
              Fc(Dt, {
                get store() {
                  return de;
                },
                set store(it) {
                  de = it;
                },
                children: (it, Dn) => {
                  var zn = _m(), Lo = D(oe(zn), 2);
                  id(Lo, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return M();
                    },
                    get onedgepointerenter() {
                      return $();
                    },
                    get onedgepointerleave() {
                      return E();
                    },
                    get store() {
                      return de;
                    },
                    set store(Jn) {
                      de = Jn;
                    }
                  });
                  var To = D(Lo, 4);
                  ld(To, {
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
                    set store(Jn) {
                      de = Jn;
                    }
                  });
                  var va = D(To, 2);
                  td(va, {
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
                      return P();
                    },
                    get onnodepointerleave() {
                      return T();
                    },
                    get onnodedrag() {
                      return C();
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
                    set store(Jn) {
                      de = Jn;
                    }
                  });
                  var cf = D(va, 2);
                  sd(cf, {
                    get onselectionclick() {
                      return Z();
                    },
                    get onselectioncontextmenu() {
                      return H();
                    },
                    get onnodedrag() {
                      return C();
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
                    set store(Jn) {
                      de = Jn;
                    }
                  }), me(2), L(it, zn);
                },
                $$slots: { default: !0 }
              });
              var pn = D(Dt, 2);
              {
                let it = /* @__PURE__ */ N(() => !!(de.selectionRect && de.selectionRectMode === "user")), Dn = /* @__PURE__ */ N(() => de.selectionRect?.width), zn = /* @__PURE__ */ N(() => de.selectionRect?.height), Lo = /* @__PURE__ */ N(() => de.selectionRect?.x), To = /* @__PURE__ */ N(() => de.selectionRect?.y);
                ca(pn, {
                  get isVisible() {
                    return c(it);
                  },
                  get width() {
                    return c(Dn);
                  },
                  get height() {
                    return c(zn);
                  },
                  get x() {
                    return c(Lo);
                  },
                  get y() {
                    return c(To);
                  }
                });
              }
              L(je, Ke);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var nt = D(Ie, 2);
      ud(nt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var Nt = D(nt, 2);
      Uc(Nt, {
        get store() {
          return de;
        }
      });
      var Xe = D(Nt, 2);
      Ge(Xe, () => re() ?? ht), L(W, De);
    },
    $$slots: { default: !0 }
  }), ue(Ve);
}
se(
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
  le(t, !0);
  let n = v(t, "children", 7), r = /* @__PURE__ */ Se(Wc({ props: {}, nodes: [], edges: [] }));
  Sr(hi, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      Q(r, a);
    }
  }), wo(() => {
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
  return Ge(s, () => n() ?? ht), L(e, i), ue(o);
}
se(fd, { children: {} }, [], [], !0);
var Em = /* @__PURE__ */ ee("<button><!></button>");
function Xr(e, t) {
  le(t, !0);
  let n = v(t, "class", 7), r = v(t, "bgColor", 7), o = v(t, "bgColorHover", 7), i = v(t, "color", 7), s = v(t, "colorHover", 7), a = v(t, "borderColor", 7), l = v(t, "onclick", 7), u = v(t, "children", 7), d = /* @__PURE__ */ Ae(t, [
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
  tt(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [on]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var h = R(f);
  return Ge(h, () => u() ?? ht), j(f), L(e, f), ue(p);
}
se(
  Xr,
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
var Nm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function pd(e) {
  var t = Nm();
  L(e, t);
}
se(pd, {}, [], [], !0);
var Pm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function hd(e) {
  var t = Pm();
  L(e, t);
}
se(hd, {}, [], [], !0);
var Om = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function gd(e) {
  var t = Om();
  L(e, t);
}
se(gd, {}, [], [], !0);
var Mm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function vd(e) {
  var t = Mm();
  L(e, t);
}
se(vd, {}, [], [], !0);
var Lm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function md(e) {
  var t = Lm();
  L(e, t);
}
se(md, {}, [], [], !0);
var Tm = /* @__PURE__ */ ee("<!> <!>", 1), Vm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function yd(e, t) {
  le(t, !0);
  let n = v(t, "position", 7, "bottom-left"), r = v(t, "orientation", 7, "vertical"), o = v(t, "showZoom", 7, !0), i = v(t, "showFitView", 7, !0), s = v(t, "showLock", 7, !0), a = v(t, "style", 7), l = v(t, "class", 7), u = v(t, "buttonBgColor", 7), d = v(t, "buttonBgColorHover", 7), p = v(t, "buttonColor", 7), f = v(t, "buttonColorHover", 7), h = v(t, "buttonBorderColor", 7), y = v(t, "fitViewOptions", 7), w = v(t, "children", 7), m = v(t, "before", 7), b = v(t, "after", 7), C = /* @__PURE__ */ Ae(t, [
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
  ]), _ = /* @__PURE__ */ N(en);
  const x = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: h()
  };
  let k = /* @__PURE__ */ N(() => c(_).nodesDraggable || c(_).nodesConnectable || c(_).elementsSelectable), P = /* @__PURE__ */ N(() => c(_).viewport.zoom <= c(_).minZoom), T = /* @__PURE__ */ N(() => c(_).viewport.zoom >= c(_).maxZoom), Z = /* @__PURE__ */ N(() => c(_).ariaLabelConfig), H = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const I = () => {
    c(_).zoomIn();
  }, z = () => {
    c(_).zoomOut();
  }, S = () => {
    c(_).fitView(y());
  }, M = () => {
    let E = !c(k);
    c(_).nodesDraggable = E, c(_).nodesConnectable = E, c(_).elementsSelectable = E;
  };
  var $ = {
    get position() {
      return n();
    },
    set position(E = "bottom-left") {
      n(E), g();
    },
    get orientation() {
      return r();
    },
    set orientation(E = "vertical") {
      r(E), g();
    },
    get showZoom() {
      return o();
    },
    set showZoom(E = !0) {
      o(E), g();
    },
    get showFitView() {
      return i();
    },
    set showFitView(E = !0) {
      i(E), g();
    },
    get showLock() {
      return s();
    },
    set showLock(E = !0) {
      s(E), g();
    },
    get style() {
      return a();
    },
    set style(E) {
      a(E), g();
    },
    get class() {
      return l();
    },
    set class(E) {
      l(E), g();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(E) {
      u(E), g();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(E) {
      d(E), g();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(E) {
      p(E), g();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(E) {
      f(E), g();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(E) {
      h(E), g();
    },
    get fitViewOptions() {
      return y();
    },
    set fitViewOptions(E) {
      y(E), g();
    },
    get children() {
      return w();
    },
    set children(E) {
      w(E), g();
    },
    get before() {
      return m();
    },
    set before(E) {
      m(E), g();
    },
    get after() {
      return b();
    },
    set after(E) {
      b(E), g();
    }
  };
  {
    let E = /* @__PURE__ */ N(() => [
      "svelte-flow__controls",
      c(H),
      l()
    ]);
    Eo(e, Be(
      {
        get class() {
          return c(E);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(Z)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => C,
      {
        children: (O, K) => {
          var B = Vm(), Y = oe(B);
          {
            var V = (ce) => {
              var re = ke(), ie = oe(re);
              Ge(ie, m), L(ce, re);
            };
            ae(Y, (ce) => {
              m() && ce(V);
            });
          }
          var F = D(Y, 2);
          {
            var q = (ce) => {
              var re = Tm(), ie = oe(re);
              Xr(ie, Be(
                {
                  onclick: I,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(Z)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(Z)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(T);
                  }
                },
                () => x,
                {
                  children: (pe, $e) => {
                    pd(pe);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var fe = D(ie, 2);
              Xr(fe, Be(
                {
                  onclick: z,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(Z)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(Z)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(P);
                  }
                },
                () => x,
                {
                  children: (pe, $e) => {
                    hd(pe);
                  },
                  $$slots: { default: !0 }
                }
              )), L(ce, re);
            };
            ae(F, (ce) => {
              o() && ce(q);
            });
          }
          var U = D(F, 2);
          {
            var A = (ce) => {
              Xr(ce, Be(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: S,
                  get title() {
                    return c(Z)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(Z)["controls.fitView.ariaLabel"];
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
            ae(U, (ce) => {
              i() && ce(A);
            });
          }
          var X = D(U, 2);
          {
            var G = (ce) => {
              Xr(ce, Be(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: M,
                  get title() {
                    return c(Z)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(Z)["controls.interactive.ariaLabel"];
                  }
                },
                () => x,
                {
                  children: (re, ie) => {
                    var fe = ke(), pe = oe(fe);
                    {
                      var $e = (we) => {
                        md(we);
                      }, de = (we) => {
                        vd(we);
                      };
                      ae(pe, (we) => {
                        c(k) ? we($e) : we(de, !1);
                      });
                    }
                    L(re, fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(X, (ce) => {
              s() && ce(G);
            });
          }
          var te = D(X, 2);
          {
            var ne = (ce) => {
              var re = ke(), ie = oe(re);
              Ge(ie, w), L(ce, re);
            };
            ae(te, (ce) => {
              w() && ce(ne);
            });
          }
          var J = D(te, 2);
          {
            var he = (ce) => {
              var re = ke(), ie = oe(re);
              Ge(ie, b), L(ce, re);
            };
            ae(J, (ce) => {
              b() && ce(he);
            });
          }
          L(O, B);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue($);
}
se(
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
var wn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(wn || (wn = {}));
var Dm = /* @__PURE__ */ ge("<circle></circle>");
function wd(e, t) {
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
  }, i = Dm();
  return Ce(() => {
    xe(i, "cx", n()), xe(i, "cy", n()), xe(i, "r", n()), St(i, 0, Mn(["svelte-flow__background-pattern", "dots", r()]));
  }), L(e, i), ue(o);
}
se(wd, { radius: {}, class: {} }, [], [], !0);
var zm = /* @__PURE__ */ ge("<path></path>");
function bd(e, t) {
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
  return Ce(() => {
    xe(a, "stroke-width", n()), xe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), St(a, 0, Mn(["svelte-flow__background-pattern", o(), i()]));
  }), L(e, a), ue(s);
}
se(bd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Hm = {
  [wn.Dots]: 1,
  [wn.Lines]: 1,
  [wn.Cross]: 6
};
var Im = /* @__PURE__ */ ge('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function xd(e, t) {
  le(t, !0);
  let n = v(t, "id", 7), r = v(t, "variant", 23, () => wn.Dots), o = v(t, "gap", 7, 20), i = v(t, "size", 7), s = v(t, "lineWidth", 7, 1), a = v(t, "bgColor", 7), l = v(t, "patternColor", 7), u = v(t, "patternClass", 7), d = v(t, "class", 7), p = /* @__PURE__ */ N(en), f = /* @__PURE__ */ N(() => r() === wn.Dots), h = /* @__PURE__ */ N(() => r() === wn.Cross), y = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ N(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), m = /* @__PURE__ */ N(() => [
    c(y)[0] * c(p).viewport.zoom || 1,
    c(y)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ N(() => (i() ?? Hm[r()]) * c(p).viewport.zoom), C = /* @__PURE__ */ N(() => c(h) ? [c(b), c(b)] : c(m)), _ = /* @__PURE__ */ N(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(C)[0] / 2,
    c(C)[1] / 2
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
    set variant(S = wn.Dots) {
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
  }, k = Im();
  let P;
  var T = R(k), Z = R(T);
  {
    var H = (S) => {
      {
        let M = /* @__PURE__ */ N(() => c(b) / 2);
        wd(S, {
          get radius() {
            return c(M);
          },
          get class() {
            return u();
          }
        });
      }
    }, I = (S) => {
      bd(S, {
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
    ae(Z, (S) => {
      c(f) ? S(H) : S(I, !1);
    });
  }
  j(T);
  var z = D(T);
  return j(k), Ce(() => {
    St(k, 0, Mn([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), P = ct(k, "", P, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), xe(T, "id", c(w)), xe(T, "x", c(p).viewport.x % c(m)[0]), xe(T, "y", c(p).viewport.y % c(m)[1]), xe(T, "width", c(m)[0]), xe(T, "height", c(m)[1]), xe(T, "patternTransform", `translate(-${c(_)[0]},-${c(_)[1]})`), xe(z, "fill", `url(#${c(w)})`);
  }), L(e, k), ue(x);
}
se(
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
var Am = /* @__PURE__ */ ge("<rect></rect>");
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
  }, m = ke(), b = oe(m);
  {
    var C = (x) => {
      const k = /* @__PURE__ */ N(y);
      var P = ke(), T = oe(P);
      Ni(T, () => c(k), (Z, H) => {
        H(Z, {
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
      }), L(x, P);
    }, _ = (x) => {
      var k = Am();
      let P, T;
      Ce(() => {
        P = St(k, 0, Mn(["svelte-flow__minimap-node", h()]), null, P, { selected: f() }), xe(k, "x", r()), xe(k, "y", o()), xe(k, "rx", a()), xe(k, "ry", a()), xe(k, "width", i()), xe(k, "height", s()), xe(k, "shape-rendering", u()), T = ct(k, "", T, {
          fill: l(),
          stroke: d(),
          "stroke-width": p()
        });
      }), L(x, k);
    };
    ae(b, (x) => {
      y() ? x(C) : x(_, !1);
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
const es = (e) => e instanceof Function ? e : () => e;
var jm = /* @__PURE__ */ ge("<title> </title>"), Km = /* @__PURE__ */ ge('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Rm = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Cd(e, t) {
  le(t, !0);
  let n = v(t, "position", 7, "bottom-right"), r = v(t, "ariaLabel", 7), o = v(t, "nodeStrokeColor", 7, "transparent"), i = v(t, "nodeColor", 7), s = v(t, "nodeClass", 7, ""), a = v(t, "nodeBorderRadius", 7, 5), l = v(t, "nodeStrokeWidth", 7, 2), u = v(t, "nodeComponent", 7), d = v(t, "bgColor", 7), p = v(t, "maskColor", 7), f = v(t, "maskStrokeColor", 7), h = v(t, "maskStrokeWidth", 7), y = v(t, "width", 7, 200), w = v(t, "height", 7, 150), m = v(t, "pannable", 7, !0), b = v(t, "zoomable", 7, !0), C = v(t, "inversePan", 7), _ = v(t, "zoomStep", 7), x = v(t, "class", 7), k = /* @__PURE__ */ Ae(t, [
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
  ]), P = /* @__PURE__ */ N(en), T = /* @__PURE__ */ N(() => c(P).ariaLabelConfig);
  const Z = i() === void 0 ? void 0 : es(i()), H = es(o()), I = es(s()), z = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${c(P).flowId}`), M = /* @__PURE__ */ N(() => ({
    x: -c(P).viewport.x / c(P).viewport.zoom,
    y: -c(P).viewport.y / c(P).viewport.zoom,
    width: c(P).width / c(P).viewport.zoom,
    height: c(P).height / c(P).viewport.zoom
  })), $ = /* @__PURE__ */ N(() => mc(Co(c(P).nodeLookup, { filter: (J) => !J.hidden }), c(M))), E = /* @__PURE__ */ N(() => c($).width / y()), O = /* @__PURE__ */ N(() => c($).height / w()), K = /* @__PURE__ */ N(() => Math.max(c(E), c(O))), B = /* @__PURE__ */ N(() => c(K) * y()), Y = /* @__PURE__ */ N(() => c(K) * w()), V = /* @__PURE__ */ N(() => 5 * c(K)), F = /* @__PURE__ */ N(() => c($).x - (c(B) - c($).width) / 2 - c(V)), q = /* @__PURE__ */ N(() => c($).y - (c(Y) - c($).height) / 2 - c(V)), U = /* @__PURE__ */ N(() => c(B) + c(V) * 2), A = /* @__PURE__ */ N(() => c(Y) + c(V) * 2);
  const X = () => c(K);
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
      return C();
    },
    set inversePan(J) {
      C(J), g();
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
    let J = /* @__PURE__ */ N(() => ["svelte-flow__minimap", x()]);
    zp(ne, () => ({ "--xy-minimap-background-color-props": d() })), Eo(ne.lastChild, Be(
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
          var re = ke(), ie = oe(re);
          {
            var fe = (pe) => {
              var $e = Km();
              let de;
              var we = R($e);
              {
                var Ve = (De) => {
                  var ze = jm(), Ie = R(ze, !0);
                  j(ze), Ce(() => {
                    xe(ze, "id", c(S)), Re(Ie, r() ?? c(T)["minimap.ariaLabel"]);
                  }), L(De, ze);
                };
                ae(we, (De) => {
                  (r() ?? c(T)["minimap.ariaLabel"]) && De(Ve);
                });
              }
              var W = D(we);
              gt(W, 17, () => c(P).nodes, (De) => De.id, (De, ze) => {
                const Ie = /* @__PURE__ */ N(() => c(P).nodeLookup.get(c(ze).id));
                var nt = ke(), Nt = oe(nt);
                {
                  var Xe = (Te) => {
                    const ve = /* @__PURE__ */ N(() => Un(c(Ie)));
                    {
                      let je = /* @__PURE__ */ N(() => Z?.(c(Ie))), vt = /* @__PURE__ */ N(() => H(c(Ie))), Ke = /* @__PURE__ */ N(() => I(c(Ie)));
                      $d(Te, Be(
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
                        () => c(ve),
                        {
                          get selected() {
                            return c(Ie).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(je);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(vt);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return z;
                          },
                          get class() {
                            return c(Ke);
                          }
                        }
                      ));
                    }
                  };
                  ae(Nt, (Te) => {
                    c(Ie) && yc(c(Ie)) && !c(Ie).hidden && Te(Xe);
                  });
                }
                L(De, nt);
              });
              var Ze = D(W);
              j($e), dt($e, (De, ze) => Zm?.(De, ze), () => ({
                store: c(P),
                panZoom: c(P).panZoom,
                getViewScale: X,
                translateExtent: c(P).translateExtent,
                width: c(P).width,
                height: c(P).height,
                inversePan: C(),
                zoomStep: _(),
                pannable: m(),
                zoomable: b()
              })), Ce(() => {
                xe($e, "width", y()), xe($e, "height", w()), xe($e, "viewBox", `${c(F) ?? ""} ${c(q) ?? ""} ${c(U) ?? ""} ${c(A) ?? ""}`), xe($e, "aria-labelledby", c(S)), de = ct($e, "", de, {
                  "--xy-minimap-mask-background-color-props": p(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": h() ? h() * c(K) : void 0
                }), xe(Ze, "d", `M${c(F) - c(V)},${c(q) - c(V)}h${c(U) + c(V) * 2}v${c(A) + c(V) * 2}h${-c(U) - c(V) * 2}z
      M${c(M).x ?? ""},${c(M).y ?? ""}h${c(M).width ?? ""}v${c(M).height ?? ""}h${-c(M).width}z`);
              }), L(pe, $e);
            };
            ae(ie, (pe) => {
              c(P).panZoom && pe(fe);
            });
          }
          L(he, re);
        },
        $$slots: { default: !0 }
      }
    )), j(ne);
  }
  return L(e, te), ue(G);
}
se(
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
var Bm = /* @__PURE__ */ ee("<div><!></div>");
function _d(e, t) {
  le(t, !0);
  let n = v(t, "nodeId", 7), r = v(t, "position", 23, () => ye.Top), o = v(t, "align", 7, "center"), i = v(t, "offset", 7, 10), s = v(t, "isVisible", 7), a = v(t, "children", 7), l = /* @__PURE__ */ Ae(t, [
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
  const u = en(), { getNodesBounds: d } = ot(), p = Rn("svelteflow__node_id");
  let f = /* @__PURE__ */ N(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (k, P) => {
      const T = u.nodeLookup.get(P);
      return T && k.push(T), k;
    },
    []
  ))), h = /* @__PURE__ */ N(() => {
    const k = d(c(f));
    return k ? i0(k, u.viewport, r(), i(), o()) : "";
  }), y = /* @__PURE__ */ N(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((k) => (k.internals.z || 5) + 1))), w = /* @__PURE__ */ N(() => u.nodes.filter((k) => k.selected).length), m = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(w) === 1);
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
  }, C = ke(), _ = oe(C);
  {
    var x = (k) => {
      var P = Bm();
      tt(
        P,
        (Z, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": Z,
          ...l,
          [on]: H
        }),
        [
          () => c(f).reduce((Z, H) => `${Z}${H.id} `, "").trim(),
          () => ({
            display: Ac().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(y)
          })
        ]
      );
      var T = R(P);
      Ge(T, () => a() ?? ht), j(P), dt(P, (Z, H) => Ic?.(Z, H), () => "root"), L(k, P);
    };
    ae(_, (k) => {
      u.domNode && c(m) && c(f) && k(x);
    });
  }
  return L(e, C), ue(b);
}
se(
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
function Ln(e) {
  const t = /* @__PURE__ */ N(en), n = /* @__PURE__ */ N(() => c(t).nodes), r = /* @__PURE__ */ N(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ N(() => {
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
], da = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Xm = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], qm = [
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
  let e = /* @__PURE__ */ Se([]), t = /* @__PURE__ */ Se([]), n = /* @__PURE__ */ Se({ x: 250, y: 100, zoom: 1 });
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
}, Me = Gm();
var Um = /* @__PURE__ */ ee("<button><!></button>");
function Pe(e, t) {
  le(t, !0);
  const n = v(t, "children", 7), r = v(t, "primary", 7), o = /* @__PURE__ */ Ae(t, [
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
  tt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = R(s);
  return Ge(a, () => n() ?? ht), j(s), L(e, s), ue(i);
}
se(Pe, { children: {}, primary: {} }, [], [], !0);
var Qm = /* @__PURE__ */ ee("<input/>");
function kd(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Qm();
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
  ), L(e, r), ue();
}
se(kd, {}, [], [], !0);
var Jm = /* @__PURE__ */ ee('<div><input type="hidden"/> <!> <!></div>');
const ey = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Sd(e, t) {
  le(t, !0), He(e, ey);
  const n = v(t, "placeholder", 7), r = v(t, "label", 7), o = v(t, "value", 7), i = v(t, "buttonText", 7, "选择..."), s = v(t, "onChosen", 7), a = /* @__PURE__ */ Ae(t, [
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
  tt(
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
  or(d);
  var p = D(d, 2);
  Qe(p, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = D(p, 2);
  return Pe(f, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, y) => {
      me();
      var w = _e();
      Ce(() => Re(w, i())), L(h, w);
    },
    $$slots: { default: !0 }
  }), j(u), Ce(() => Ro(d, o())), L(e, u), ue(l);
}
se(
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
var ty = /* @__PURE__ */ ee("<input/>");
function Qe(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ty();
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
  ), L(e, r), ue();
}
se(Qe, {}, [], [], !0);
var ny = /* @__PURE__ */ ee("<textarea></textarea>");
function Ye(e, t) {
  le(t, !0);
  const n = v(t, "value", 7), r = v(t, "height", 7), o = v(t, "autoHeight", 7, !0), i = v(t, "maxHeight", 7), s = v(t, "onHeightChange", 7), a = /* @__PURE__ */ Ae(t, [
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
  Fe(() => {
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
  return tt(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: h,
    onchange: y,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), Et(f, (w) => l = w, () => l), L(e, f), ue(p);
}
se(
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
var ry = /* @__PURE__ */ ee('<div role="button"><!></div>'), oy = /* @__PURE__ */ ee("<div></div>");
function Ed(e, t) {
  const n = Va(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Va(n, ["items", "onChange", "activeIndex"]);
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
  Vu();
  var u = oy();
  return tt(u, () => ({
    ...r,
    class: `tf-tabs ${Rs(r), at(() => r.class) ?? ""}`
  })), gt(u, 5, o, Nr, (d, p, f) => {
    var h = ry();
    xe(h, "tabindex", f), h.__click = () => a(c(p), f), h.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(p), f));
    };
    var y = R(h);
    {
      var w = (b) => {
        var C = _e();
        Ce(() => Re(C, (c(p), at(() => c(p).label)))), L(b, C);
      }, m = (b) => {
        var C = ke(), _ = oe(C);
        Ge(_, () => (c(p), at(() => c(p).label) ?? ht)), L(b, C);
      };
      ae(y, (b) => {
        c(p), at(() => typeof c(p).label == "string") ? b(w) : b(m, !1);
      });
    }
    j(h), Ce(() => St(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), L(d, h);
  }), j(u), L(e, u), ue(l);
}
Gn(["click", "keydown"]);
se(Ed, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var iy = /* @__PURE__ */ ee('<span class="tf-collapse-item-title-icon"><!></span>'), sy = /* @__PURE__ */ ee('<div class="tf-collapse-item-description"><!></div>'), ay = /* @__PURE__ */ ee('<div class="tf-collapse-item-content"><!></div>'), ly = /* @__PURE__ */ ee('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), uy = /* @__PURE__ */ ee("<div></div>");
const cy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Nd(e, t) {
  le(t, !0), He(e, cy);
  let n = v(t, "items", 7), r = v(t, "onChange", 7), o = v(t, "activeKeys", 31, () => Zt([]));
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
  return gt(a, 21, n, Nr, (l, u, d) => {
    var p = ly(), f = R(p);
    xe(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), i(c(u)));
    };
    var h = R(f);
    {
      var y = (k) => {
        var P = iy(), T = R(P);
        In(T, {
          get target() {
            return c(u).icon;
          }
        }), j(P), L(k, P);
      };
      ae(h, (k) => {
        c(u).icon && k(y);
      });
    }
    var w = D(h, 2);
    In(w, {
      get target() {
        return c(u).title;
      }
    });
    var m = D(w, 2);
    j(f);
    var b = D(f, 2);
    {
      var C = (k) => {
        var P = sy(), T = R(P);
        In(T, {
          get target() {
            return c(u).description;
          }
        }), j(P), L(k, P);
      };
      ae(b, (k) => {
        c(u).description && k(C);
      });
    }
    var _ = D(b, 2);
    {
      var x = (k) => {
        var P = ay(), T = R(P);
        In(T, {
          get target() {
            return c(u).content;
          }
        }), j(P), L(k, P);
      };
      ae(_, (k) => {
        o().includes(c(u).key) && k(x);
      });
    }
    j(p), Ce((k) => St(m, 1, `tf-collapse-item-title-arrow ${k ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), L(l, p);
  }), j(a), Ce(() => {
    ct(a, t.style), St(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), L(e, a), ue(s);
}
Gn(["click", "keydown"]);
se(Nd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function In(e, t) {
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
  }, o = ke(), i = oe(o);
  {
    var s = (l) => {
      var u = ke(), d = oe(u);
      Ge(d, () => n() ?? ht), L(l, u);
    }, a = (l) => {
      var u = ke(), d = oe(u);
      Ws(d, n), L(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return L(e, o), ue(r);
}
se(In, { target: {} }, [], [], !0);
var dy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), fy = /* @__PURE__ */ ee('<div class="tf-select-content-children"><!></div>'), py = /* @__PURE__ */ ee('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), hy = /* @__PURE__ */ ee('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), gy = /* @__PURE__ */ ee("<!> <!>", 1), vy = /* @__PURE__ */ ee('<div class="tf-select-input-placeholder"> </div>'), my = /* @__PURE__ */ ee('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), yy = /* @__PURE__ */ ee("<div><!></div>");
function lt(e, t) {
  le(t, !0);
  const n = (C, _ = ht) => {
    var x = ke(), k = oe(x);
    gt(k, 19, _, (P, T) => `${T}_${P.value}`, (P, T) => {
      var Z = py(), H = oe(Z);
      H.__click = () => y(c(T));
      var I = R(H), z = R(I);
      {
        var S = (O) => {
          var K = dy();
          L(O, K);
        };
        ae(z, (O) => {
          c(T).children && c(T).children.length > 0 && O(S);
        });
      }
      j(I);
      var M = D(I, 2);
      In(M, {
        get target() {
          return c(T).label;
        }
      }), j(H);
      var $ = D(H, 2);
      {
        var E = (O) => {
          var K = fy(), B = R(K);
          n(B, () => c(T).children), j(K), L(O, K);
        };
        ae($, (O) => {
          c(T).children && c(T).children.length > 0 && (a() || u().includes(c(T).value)) && O(E);
        });
      }
      L(P, Z);
    }), L(C, x);
  };
  let r = v(t, "items", 7), o = v(t, "onSelect", 7), i = v(t, "value", 23, () => []), s = v(t, "defaultValue", 23, () => []), a = v(t, "expandAll", 7, !0), l = v(t, "multiple", 7, !1), u = v(t, "expandValue", 23, () => []), d = v(t, "placeholder", 7), p = /* @__PURE__ */ Ae(t, [
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
    const C = [], _ = (x) => {
      for (let k of x)
        i().length > 0 ? i().includes(k.value) && C.push(k) : s().includes(k.value) && C.push(k), k.children && k.children.length > 0 && _(k.children);
    };
    return _(r()), C;
  }), h;
  function y(C) {
    h?.hide(), o()?.(C);
  }
  var w = {
    get items() {
      return r();
    },
    set items(C) {
      r(C), g();
    },
    get onSelect() {
      return o();
    },
    set onSelect(C) {
      o(C), g();
    },
    get value() {
      return i();
    },
    set value(C = []) {
      i(C), g();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), g();
    },
    get expandAll() {
      return a();
    },
    set expandAll(C = !0) {
      a(C), g();
    },
    get multiple() {
      return l();
    },
    set multiple(C = !1) {
      l(C), g();
    },
    get expandValue() {
      return u();
    },
    set expandValue(C = []) {
      u(C), g();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), g();
    }
  }, m = yy();
  tt(m, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var b = R(m);
  return Et(
    Qn(b, {
      floating: (C) => {
        var _ = hy(), x = R(_);
        n(x, r), j(_), L(C, _);
      },
      children: (C, _) => {
        var x = my();
        tt(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var k = R(x);
        gt(
          k,
          23,
          () => c(f),
          (P, T) => `${T}_${P.value}`,
          (P, T, Z) => {
            var H = ke(), I = oe(H);
            {
              var z = (M) => {
                var $ = ke(), E = oe($);
                {
                  var O = (K) => {
                    In(K, {
                      get target() {
                        return c(T).label;
                      }
                    });
                  };
                  ae(E, (K) => {
                    c(Z) === 0 && K(O);
                  });
                }
                L(M, $);
              }, S = (M) => {
                var $ = gy(), E = oe($);
                In(E, {
                  get target() {
                    return c(T).label;
                  }
                });
                var O = D(E, 2);
                {
                  var K = (B) => {
                    var Y = _e(",");
                    L(B, Y);
                  };
                  ae(O, (B) => {
                    c(Z) < c(f).length - 1 && B(K);
                  });
                }
                L(M, $);
              };
              ae(I, (M) => {
                l() ? M(S, !1) : M(z);
              });
            }
            L(P, H);
          },
          (P) => {
            var T = vy(), Z = R(T, !0);
            j(T), Ce(() => Re(Z, d())), L(P, T);
          }
        ), j(k), me(2), j(x), L(C, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => h = C,
    () => h
  ), j(m), L(e, m), ue(w);
}
Gn(["click"]);
se(
  lt,
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
const uo = Math.min, Cr = Math.max, gi = Math.round, un = (e) => ({
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
function _s(e, t, n) {
  return Cr(e, uo(t, n));
}
function No(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function Po(e) {
  return e.split("-")[1];
}
function Pd(e) {
  return e === "x" ? "y" : "x";
}
function fa(e) {
  return e === "y" ? "height" : "width";
}
const xy = /* @__PURE__ */ new Set(["top", "bottom"]);
function An(e) {
  return xy.has(fr(e)) ? "y" : "x";
}
function pa(e) {
  return Pd(An(e));
}
function $y(e, t, n) {
  n === void 0 && (n = !1);
  const r = Po(e), o = pa(e), i = fa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = vi(s)), [s, vi(s)];
}
function Cy(e) {
  const t = vi(e);
  return [ks(e), t, ks(t)];
}
function ks(e) {
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
  const o = Po(e);
  let i = Sy(fr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ks)))), i;
}
function vi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wy[t]);
}
function Ny(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Od(e) {
  return typeof e != "number" ? Ny(e) : {
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
  const i = An(t), s = pa(t), a = fa(s), l = fr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Po(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Py = async (e, t, n) => {
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
      x: C,
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
    d = C ?? d, p = _ ?? p, h = {
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
async function Md(e, t) {
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
  } = No(t, e), y = Od(h), w = a[f ? p === "floating" ? "reference" : "floating" : p], m = mi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = mi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: C,
    strategy: l
  }) : b);
  return {
    top: (m.top - x.top + y.top) / _.y,
    bottom: (x.bottom - m.bottom + y.bottom) / _.y,
    left: (m.left - x.left + y.left) / _.x,
    right: (x.right - m.right + y.right) / _.x
  };
}
const Oy = (e) => ({
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
    } = No(e, t) || {};
    if (u == null)
      return {};
    const p = Od(d), f = {
      x: n,
      y: r
    }, h = pa(o), y = fa(h), w = await s.getDimensions(u), m = h === "y", b = m ? "top" : "left", C = m ? "bottom" : "right", _ = m ? "clientHeight" : "clientWidth", x = i.reference[y] + i.reference[h] - f[h] - i.floating[y], k = f[h] - i.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let T = P ? P[_] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(P))) && (T = a.floating[_] || i.floating[y]);
    const Z = x / 2 - k / 2, H = T / 2 - w[y] / 2 - 1, I = uo(p[b], H), z = uo(p[C], H), S = I, M = T - w[y] - z, $ = T / 2 - w[y] / 2 + Z, E = _s(S, $, M), O = !l.arrow && Po(o) != null && $ !== E && i.reference[y] / 2 - ($ < S ? I : z) - w[y] / 2 < 0, K = O ? $ < S ? $ - S : $ - M : 0;
    return {
      [h]: f[h] + K,
      data: {
        [h]: E,
        centerOffset: $ - E - K,
        ...O && {
          alignmentOffset: K
        }
      },
      reset: O
    };
  }
}), My = function(e) {
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
      } = No(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = fr(o), C = An(a), _ = fr(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (_ || !w ? [vi(a)] : Cy(a)), P = y !== "none";
      !f && P && k.push(...Ey(a, w, y, x));
      const T = [a, ...k], Z = await Md(t, m), H = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(Z[b]), p) {
        const $ = $y(o, s, x);
        H.push(Z[$[0]], Z[$[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: H
      }], !H.every(($) => $ <= 0)) {
        var z, S;
        const $ = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, E = T[$];
        if (E && (!(p === "alignment" && C !== An(E)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((K) => An(K.placement) === C ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: I
            },
            reset: {
              placement: E
            }
          };
        let O = (S = I.filter((K) => K.overflows[0] <= 0).sort((K, B) => K.overflows[1] - B.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!O)
          switch (h) {
            case "bestFit": {
              var M;
              const K = (M = I.filter((B) => {
                if (P) {
                  const Y = An(B.placement);
                  return Y === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((Y) => Y > 0).reduce((Y, V) => Y + V, 0)]).sort((B, Y) => B[1] - Y[1])[0]) == null ? void 0 : M[0];
              K && (O = K);
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
}, Ly = /* @__PURE__ */ new Set(["left", "top"]);
async function Ty(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = fr(n), a = Po(n), l = An(n) === "y", u = Ly.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = No(t, e);
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
const Vy = function(e) {
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
      } = t, l = await Ty(t, e);
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
}, Dy = function(e) {
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
              y: C
            } = m;
            return {
              x: b,
              y: C
            };
          }
        },
        ...l
      } = No(e, t), u = {
        x: n,
        y: r
      }, d = await Md(t, l), p = An(fr(o)), f = Pd(p);
      let h = u[f], y = u[p];
      if (i) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", C = h + d[m], _ = h - d[b];
        h = _s(C, h, _);
      }
      if (s) {
        const m = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", C = y + d[m], _ = y - d[b];
        y = _s(C, y, _);
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
function Ii() {
  return typeof window < "u";
}
function Zr(e) {
  return Ld(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tn(e) {
  var t;
  return (t = (Ld(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ld(e) {
  return Ii() ? e instanceof Node || e instanceof Tt(e).Node : !1;
}
function Gt(e) {
  return Ii() ? e instanceof Element || e instanceof Tt(e).Element : !1;
}
function dn(e) {
  return Ii() ? e instanceof HTMLElement || e instanceof Tt(e).HTMLElement : !1;
}
function Cl(e) {
  return !Ii() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Tt(e).ShadowRoot;
}
const zy = /* @__PURE__ */ new Set(["inline", "contents"]);
function Oo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !zy.has(o);
}
const Hy = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Iy(e) {
  return Hy.has(Zr(e));
}
const Ay = [":popover-open", ":modal"];
function Ai(e) {
  return Ay.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Zy = ["transform", "translate", "scale", "rotate", "perspective"], jy = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ky = ["paint", "layout", "strict", "content"];
function ha(e) {
  const t = ga(), n = Gt(e) ? Ut(e) : e;
  return Zy.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || jy.some((r) => (n.willChange || "").includes(r)) || Ky.some((r) => (n.contain || "").includes(r));
}
function Ry(e) {
  let t = Wn(e);
  for (; dn(t) && !zr(t); ) {
    if (ha(t))
      return t;
    if (Ai(t))
      return null;
    t = Wn(t);
  }
  return null;
}
function ga() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const By = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function zr(e) {
  return By.has(Zr(e));
}
function Ut(e) {
  return Tt(e).getComputedStyle(e);
}
function Zi(e) {
  return Gt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Wn(e) {
  if (Zr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Cl(e) && e.host || // Fallback.
    Tn(e)
  );
  return Cl(t) ? t.host : t;
}
function Td(e) {
  const t = Wn(e);
  return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dn(t) && Oo(t) ? t : Td(t);
}
function Vd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Td(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Tt(o);
  return i ? (Ss(s), t.concat(s, s.visualViewport || [], Oo(o) ? o : [], [])) : t.concat(o, Vd(o, []));
}
function Ss(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Dd(e) {
  const t = Ut(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = dn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = gi(n) !== i || gi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function zd(e) {
  return Gt(e) ? e : e.contextElement;
}
function _r(e) {
  const t = zd(e);
  if (!dn(t))
    return un(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Dd(t);
  let s = (i ? gi(n.width) : n.width) / r, a = (i ? gi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Yy = /* @__PURE__ */ un(0);
function Hd(e) {
  const t = Tt(e);
  return !ga() || !t.visualViewport ? Yy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Tt(e) ? !1 : t;
}
function co(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zd(e);
  let s = un(1);
  t && (r ? Gt(r) && (s = _r(r)) : s = _r(e));
  const a = Wy(i, n, r) ? Hd(i) : un(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Tt(i), h = r && Gt(r) ? Tt(r) : r;
    let y = f, w = Ss(y);
    for (; w && r && h !== y; ) {
      const m = _r(w), b = w.getBoundingClientRect(), C = Ut(w), _ = b.left + (w.clientLeft + parseFloat(C.paddingLeft)) * m.x, x = b.top + (w.clientTop + parseFloat(C.paddingTop)) * m.y;
      l *= m.x, u *= m.y, d *= m.x, p *= m.y, l += _, u += x, y = Tt(w), w = Ss(y);
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
  return t ? t.left + n : co(Tn(e)).left + n;
}
function Id(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ji(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Xy(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Tn(r), a = t ? Ai(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = un(1);
  const d = un(0), p = dn(r);
  if ((p || !p && !i) && ((Zr(r) !== "body" || Oo(s)) && (l = Zi(r)), dn(r))) {
    const h = co(r);
    u = _r(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !p && !i ? Id(s, l) : un(0);
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
function Fy(e) {
  const t = Tn(e), n = Zi(e), r = e.ownerDocument.body, o = Cr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Cr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ji(e);
  const a = -n.scrollTop;
  return Ut(r).direction === "rtl" && (s += Cr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const _l = 25;
function Gy(e, t) {
  const n = Tt(e), r = Tn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = ga();
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
const Uy = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Qy(e, t) {
  const n = co(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = dn(e) ? _r(e) : un(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = Fy(Tn(e));
  else if (Gt(t))
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
  return mi(r);
}
function Ad(e, t) {
  const n = Wn(e);
  return n === t || !Gt(n) || zr(n) ? !1 : Ut(n).position === "fixed" || Ad(n, t);
}
function Jy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Vd(e, []).filter((a) => Gt(a) && Zr(a) !== "body"), o = null;
  const i = Ut(e).position === "fixed";
  let s = i ? Wn(e) : e;
  for (; Gt(s) && !zr(s); ) {
    const a = Ut(s), l = ha(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && Uy.has(o.position) || Oo(s) && !l && Ad(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Wn(s);
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
  const i = [...n === "clippingAncestors" ? Ai(t) ? [] : Jy(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = kl(t, u, o);
    return l.top = Cr(d.top, l.top), l.right = uo(d.right, l.right), l.bottom = uo(d.bottom, l.bottom), l.left = Cr(d.left, l.left), l;
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
  } = Dd(e);
  return {
    width: t,
    height: n
  };
}
function n2(e, t, n) {
  const r = dn(t), o = Tn(t), i = n === "fixed", s = co(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = un(0);
  function u() {
    l.x = ji(o);
  }
  if (r || !r && !i)
    if ((Zr(t) !== "body" || Oo(o)) && (a = Zi(t)), r) {
      const h = co(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Id(o, a) : un(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ts(e) {
  return Ut(e).position === "static";
}
function Sl(e, t) {
  if (!dn(e) || Ut(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Tn(e) === n && (n = n.ownerDocument.body), n;
}
function Zd(e, t) {
  const n = Tt(e);
  if (Ai(e))
    return n;
  if (!dn(e)) {
    let o = Wn(e);
    for (; o && !zr(o); ) {
      if (Gt(o) && !ts(o))
        return o;
      o = Wn(o);
    }
    return n;
  }
  let r = Sl(e, t);
  for (; r && Iy(r) && ts(r); )
    r = Sl(r, t);
  return r && zr(r) && ts(r) && !ha(r) ? n : r || Ry(e) || n;
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
  return Ut(e).direction === "rtl";
}
const i2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xy,
  getDocumentElement: Tn,
  getClippingRect: e2,
  getOffsetParent: Zd,
  getElementRects: r2,
  getClientRects: qy,
  getDimensions: t2,
  getScale: _r,
  isElement: Gt,
  isRTL: o2
}, s2 = Vy, a2 = Dy, l2 = My, u2 = Oy, c2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: i2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Py(e, t, {
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
    }).then(({ x: b, y: C, placement: _, middlewareData: x }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${C}px`
      }), l) {
        const { x: k, y: P } = x.arrow, T = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: P != null ? `${P}px` : "",
          right: "",
          bottom: "",
          [T]: "2px"
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
function Qn(e, t) {
  le(t, !0);
  const n = v(t, "children", 7), r = v(t, "floating", 7), o = v(t, "placement", 7, "bottom");
  let i, s, a;
  On(() => (a = d2({
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
  Ge(f, n), j(p), Et(p, (w) => i = w, () => i);
  var h = D(p, 2), y = R(h);
  return Ge(y, r), j(h), Et(h, (w) => s = w, () => s), j(d), L(e, d), ue(u);
}
se(Qn, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Oe(e, t) {
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
  }, a = ke(), l = oe(a);
  return Hp(l, () => `h${r()}`, !1, (u, d) => {
    tt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var p = ke(), f = oe(p);
    Ge(f, () => n() ?? ht), L(d, p);
  }), L(e, a), ue(s);
}
se(Oe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var p2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const h2 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Mo(e, t) {
  le(t, !0), He(e, h2);
  const n = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Pe(e, Be(() => n, {
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
se(Mo, {}, [], [], !0);
const g2 = () => ({ deleteNode: (e) => {
  Me.removeNode(e), Me.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Sn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, v2 = () => ({ copyNode: (e) => {
  const t = Me.getNode(e);
  if (t) {
    const n = Sn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Me.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Ue = () => Rn("svelteflow__node_id"), Xn = () => Rn("tinyflow_options");
var m2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), y2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), w2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), b2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), x2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), $2 = /* @__PURE__ */ ee('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), C2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), _2 = /* @__PURE__ */ ee('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), k2 = /* @__PURE__ */ ee('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const S2 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Rt(e, t) {
  le(t, !0), He(e, S2);
  const n = v(t, "data", 7), r = v(t, "id", 7, ""), o = v(t, "icon", 7), i = v(t, "handle", 7), s = v(t, "children", 7), a = v(t, "allowExecute", 7, !0), l = v(t, "allowCopy", 7, !0), u = v(t, "allowDelete", 7, !0), d = v(t, "allowSetting", 7, !0), p = v(t, "allowSettingOfCondition", 7, !0), f = v(t, "showSourceHandle", 7, !0), h = v(t, "showTargetHandle", 7, !0), y = v(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: m, getNode: b } = ot(), C = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: _ } = g2(), { copyNode: x } = v2(), k = Xn(), P = () => {
    k.onNodeExecute?.(b(r()));
  };
  let T = Ue();
  var Z = {
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
      return l();
    },
    set allowCopy(V = !0) {
      l(V), g();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(V = !0) {
      u(V), g();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(V = !0) {
      d(V), g();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(V = !0) {
      p(V), g();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(V = !0) {
      f(V), g();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(V = !0) {
      h(V), g();
    },
    get onCollapse() {
      return y();
    },
    set onCollapse(V) {
      y(V), g();
    }
  }, H = k2(), I = oe(H);
  {
    var z = (V) => {
      _d(V, {
        get position() {
          return ye.Top;
        },
        align: "start",
        children: (F, q) => {
          var U = _2(), A = R(U);
          {
            var X = (re) => {
              Pe(re, {
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
            ae(A, (re) => {
              u() && re(X);
            });
          }
          var G = D(A, 2);
          {
            var te = (re) => {
              Pe(re, {
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
          var ne = D(G, 2);
          {
            var J = (re) => {
              Pe(re, {
                class: "tf-node-toolbar-item",
                onclick: P,
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
          var he = D(ne, 2);
          {
            var ce = (re) => {
              Qn(re, {
                placement: "bottom",
                floating: (ie) => {
                  var fe = $2(), pe = R(fe), $e = D(R(pe));
                  Qe($e, {
                    style: "width: 100%;",
                    onchange: (Xe) => {
                      const Te = Xe.target.value;
                      m(T, { title: Te });
                    },
                    get value() {
                      return n().title;
                    }
                  }), j(pe);
                  var de = D(pe, 2), we = D(R(de));
                  Ye(we, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Xe) => {
                      const Te = Xe.target.value;
                      m(T, { description: Te });
                    },
                    get value() {
                      return n().description;
                    }
                  }), j(de);
                  var Ve = D(de, 2);
                  {
                    var W = (Xe) => {
                      var Te = b2(), ve = D(R(Te));
                      Ye(ve, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (je) => {
                          const vt = je.target.value;
                          m(T, { condition: vt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), j(Te), L(Xe, Te);
                    };
                    ae(Ve, (Xe) => {
                      p() && Xe(W);
                    });
                  }
                  var Ze = D(Ve, 2), De = D(R(Ze), 2);
                  or(De), De.__change = (Xe) => {
                    const Te = Xe.target.checked;
                    m(T, { async: Te });
                  }, j(Ze);
                  var ze = D(Ze, 2), Ie = D(R(ze), 2);
                  or(Ie), Ie.__change = (Xe) => {
                    const Te = Xe.target.checked;
                    m(T, { loopEnable: Te });
                  }, j(ze);
                  var nt = D(ze, 2);
                  {
                    var Nt = (Xe) => {
                      var Te = x2(), ve = oe(Te), je = D(R(ve));
                      {
                        let it = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                        Ye(je, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Dn) => {
                            const zn = Dn.target.value;
                            m(T, { loopIntervalMs: zn });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      j(ve);
                      var vt = D(ve, 2), Ke = D(R(vt));
                      {
                        let it = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                        Ye(Ke, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Dn) => {
                            const zn = Dn.target.value;
                            m(T, { maxLoopCount: zn });
                          },
                          get value() {
                            return c(it);
                          }
                        });
                      }
                      j(vt);
                      var Dt = D(vt, 2), pn = D(R(Dt));
                      Ye(pn, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (it) => {
                          const Dn = it.target.value;
                          m(T, { loopBreakCondition: Dn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), j(Dt), L(Xe, Te);
                    };
                    ae(nt, (Xe) => {
                      n().loopEnable && Xe(Nt);
                    });
                  }
                  j(fe), Ce(() => {
                    Pa(De, !!n().async), Pa(Ie, !!n().loopEnable);
                  }), L(ie, fe);
                },
                children: (ie, fe) => {
                  Pe(ie, {
                    class: "tf-node-toolbar-item",
                    children: (pe, $e) => {
                      var de = C2();
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
          j(U), L(F, U);
        },
        $$slots: { default: !0 }
      });
    };
    ae(I, (V) => {
      (a() || l() || u()) && V(z);
    });
  }
  var S = D(I, 2), M = D(R(S), 2), $ = R(M);
  Nd($, {
    get items() {
      return c(C);
    },
    get activeKeys() {
      return w;
    },
    onChange: (V, F) => {
      m(r(), { expand: F?.includes("key") }), y()?.(F?.includes("key") ? "key" : "");
    }
  }), j(M), j(S);
  var E = D(S, 2);
  {
    var O = (V) => {
      Yn(V, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(E, (V) => {
      h() && V(O);
    });
  }
  var K = D(E, 2);
  {
    var B = (V) => {
      Yn(V, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(K, (V) => {
      f() && V(B);
    });
  }
  var Y = D(K, 2);
  return Ge(Y, () => i() ?? ht), L(e, H), ue(Z);
}
Gn(["change"]);
se(
  Rt,
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
var E2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), N2 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), P2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), O2 = /* @__PURE__ */ ee('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const M2 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function jd(e, t) {
  le(t, !0), He(e, M2);
  const n = v(t, "parameter", 7), r = v(t, "index", 7);
  let o = Ue(), i = Ln(o), s = /* @__PURE__ */ N(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ot(), l = (Z, H) => {
    a(o, (I) => {
      let z = I.data.parameters;
      return z[r()][Z] = H, { parameters: z };
    });
  }, u = (Z, H) => {
    const I = H.target.value;
    l(Z, I);
  }, d = (Z) => {
    const H = Z.target.value;
    l("name", H);
  }, p = (Z) => {
    const H = Z.target.checked;
    l("required", H);
  }, f = (Z) => {
    const H = Z.value;
    l("formType", H);
  }, h = (Z) => {
    const H = Z.value;
    l("contentType", H);
  };
  let y;
  const w = () => {
    a(o, (Z) => {
      let H = Z.data.parameters;
      return H.splice(r(), 1), { parameters: [...H] };
    }), y?.hide();
  };
  var m = {
    get parameter() {
      return n();
    },
    set parameter(Z) {
      n(Z), g();
    },
    get index() {
      return r();
    },
    set index(Z) {
      r(Z), g();
    }
  }, b = O2(), C = oe(b), _ = R(C);
  Qe(_, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), j(C);
  var x = D(C, 2), k = R(x);
  kd(k, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), j(x);
  var P = D(x, 2), T = R(P);
  return Et(
    Qn(T, {
      placement: "bottom",
      floating: (Z) => {
        var H = N2(), I = R(H), z = D(R(I));
        {
          let A = /* @__PURE__ */ N(() => c(s).contentType ? [c(s).contentType] : []);
          lt(z, {
            get items() {
              return da;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(A);
            },
            onSelect: h
          });
        }
        j(I);
        var S = D(I, 2), M = D(R(S));
        {
          let A = /* @__PURE__ */ N(() => c(s).formType ? [c(s).formType] : []);
          lt(M, {
            get items() {
              return Xm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(A);
            },
            onSelect: f
          });
        }
        j(S);
        var $ = D(S, 2);
        {
          var E = (A) => {
            var X = E2(), G = D(R(X));
            {
              let te = /* @__PURE__ */ N(() => c(s).enums?.join(`
`));
              Ye(G, {
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
            j(X), L(A, X);
          };
          ae($, (A) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && A(E);
          });
        }
        var O = D($, 2), K = D(R(O));
        Ye(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (A) => {
            u("formLabel", A);
          },
          get value() {
            return c(s).formLabel;
          }
        }), j(O);
        var B = D(O, 2), Y = D(R(B));
        Ye(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (A) => {
            u("formDescription", A);
          },
          get value() {
            return c(s).formDescription;
          }
        }), j(B);
        var V = D(B, 2), F = D(R(V));
        Ye(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (A) => {
            u("formPlaceholder", A);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), j(V);
        var q = D(V, 2), U = R(q);
        Pe(U, {
          onclick: w,
          children: (A, X) => {
            me();
            var G = _e("删除");
            L(A, G);
          },
          $$slots: { default: !0 }
        }), j(q), j(H), L(Z, H);
      },
      children: (Z, H) => {
        Pe(Z, {
          class: "input-btn-more",
          children: (I, z) => {
            var S = P2();
            L(I, S);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (Z) => y = Z,
    () => y
  ), j(P), L(e, b), ue(m);
}
se(jd, { parameter: {}, index: {} }, [], [], !0);
var L2 = /* @__PURE__ */ ee('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), T2 = /* @__PURE__ */ ee('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), V2 = /* @__PURE__ */ ee('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const D2 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Kd(e, t) {
  le(t, !0), He(e, D2);
  let n = Ue(), r = Ln(n), o = /* @__PURE__ */ N(() => [...r?.current?.data?.parameters || []]);
  var i = V2(), s = R(i);
  {
    var a = (u) => {
      var d = L2();
      me(4), L(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = D(s, 2);
  gt(
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
      var d = T2();
      L(u, d);
    }
  ), j(i), L(e, i), ue();
}
se(Kd, {}, [], [], !0);
const fo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Sn()), fo(t.children);
}), e), tn = () => {
  const { updateNodeData: e } = ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => fo(s?.children)) : fo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Sn()
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
var z2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), H2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), I2 = /* @__PURE__ */ ee('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const A2 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Rd(e, t) {
  le(t, !0), He(e, A2);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return Rt(e, Be(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = z2();
      L(a, l);
    },
    children: (a, l) => {
      var u = I2(), d = oe(u), p = R(d);
      Oe(p, {
        level: 3,
        children: (y, w) => {
          me();
          var m = _e("输入参数");
          L(y, m);
        },
        $$slots: { default: !0 }
      });
      var f = D(p, 2);
      Pe(f, {
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
      }), j(d);
      var h = D(d, 2);
      Kd(h, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(Rd, { data: {} }, [], [], !0);
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
  const t = Ue(), n = Ln(t), r = /* @__PURE__ */ N(en), o = /* @__PURE__ */ N(() => c(r).nodes), i = /* @__PURE__ */ N(() => c(r).edges), s = /* @__PURE__ */ N(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ N(() => {
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
var Z2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), j2 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), K2 = /* @__PURE__ */ ee('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const R2 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Xd(e, t) {
  le(t, !0), He(e, R2), On(() => {
    c(u).refType || y({ value: "ref" });
  });
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7), s = v(t, "showContentType", 7, !1);
  let a = Ue(), l = Ln(a), u = /* @__PURE__ */ N(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ot(), p = (M, $) => {
    d(a, (E) => {
      let O = E.data?.[o()];
      return O[r()] = { ...O[r()], [M]: $ }, { [o()]: O };
    });
  }, f = (M, $) => {
    const E = $.target.value;
    p(M, E);
  }, h = (M) => {
    const $ = M.value;
    p("ref", $);
  }, y = (M) => {
    const $ = M.value;
    p("refType", $);
  }, w = (M) => {
    const $ = M.value;
    p("contentType", $);
  };
  let m;
  const b = () => {
    d(a, (M) => {
      let $ = M.data?.[o()];
      return $.splice(r(), 1), { [o()]: [...$] };
    }), m?.hide();
  };
  let C = Wd(i());
  var _ = {
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
  }, x = K2(), k = oe(x), P = R(k);
  {
    let M = /* @__PURE__ */ N(() => c(u).nameDisabled === !0);
    Qe(P, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(M);
      },
      oninput: ($) => f("name", $)
    });
  }
  j(k);
  var T = D(k, 2), Z = R(T);
  {
    var H = (M) => {
      Qe(M, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: ($) => f("value", $)
      });
    }, I = (M) => {
      var $ = ke(), E = oe($);
      {
        var O = (K) => {
          {
            let B = /* @__PURE__ */ N(() => [c(u).ref]);
            lt(K, {
              get items() {
                return C.current;
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
          E,
          (K) => {
            c(u).refType !== "input" && K(O);
          },
          !0
        );
      }
      L(M, $);
    };
    ae(Z, (M) => {
      c(u).refType === "fixed" ? M(H) : M(I, !1);
    });
  }
  j(T);
  var z = D(T, 2), S = R(z);
  return Et(
    Qn(S, {
      placement: "bottom",
      floating: (M) => {
        var $ = j2(), E = R($), O = D(R(E));
        {
          let X = /* @__PURE__ */ N(() => c(u).refType ? [c(u).refType] : []);
          lt(O, {
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
        j(E);
        var K = D(E, 2);
        {
          var B = (X) => {
            var G = Z2(), te = D(R(G));
            {
              let ne = /* @__PURE__ */ N(() => c(u).contentType ? [c(u).contentType] : []);
              lt(te, {
                get items() {
                  return da;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(ne);
                },
                onSelect: w
              });
            }
            j(G), L(X, G);
          };
          ae(K, (X) => {
            s() && X(B);
          });
        }
        var Y = D(K, 2), V = D(R(Y));
        Ye(V, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            f("defaultValue", X);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), j(Y);
        var F = D(Y, 2), q = D(R(F));
        Ye(q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            f("description", X);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), j(F);
        var U = D(F, 2), A = R(U);
        Pe(A, {
          onclick: b,
          children: (X, G) => {
            me();
            var te = _e("删除");
            L(X, te);
          },
          $$slots: { default: !0 }
        }), j(U), j($), L(M, $);
      },
      children: (M, $) => {
        Mo(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => m = M,
    () => m
  ), j(z), L(e, x), ue(_);
}
se(
  Xd,
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
var B2 = /* @__PURE__ */ ee('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Y2 = /* @__PURE__ */ ee('<div class="none-params svelte-32f1pk"> </div>'), W2 = /* @__PURE__ */ ee('<div class="input-container svelte-32f1pk"><!> <!></div>');
const X2 = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function wt(e, t) {
  le(t, !0), He(e, X2);
  const n = v(t, "noneParameterText", 7, "无输入参数"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7), i = v(t, "showContentType", 7, !1);
  let s = Ue(), a = Ln(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = W2(), p = R(d);
  {
    var f = (y) => {
      var w = B2();
      me(4), L(y, w);
    };
    ae(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = D(p, 2);
  return gt(
    h,
    19,
    () => c(l),
    (y) => y.id,
    (y, w, m) => {
      Xd(y, {
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
      j(w), Ce(() => Re(m, n())), L(y, w);
    }
  ), j(d), L(e, d), ue(u);
}
se(
  wt,
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
var q2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), F2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), G2 = /* @__PURE__ */ ee('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const U2 = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function qd(e, t) {
  le(t, !0), He(e, U2);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return Rt(e, Be(
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
        var l = q2();
        L(a, l);
      },
      children: (a, l) => {
        var u = G2(), d = oe(u), p = R(d);
        Oe(p, {
          level: 3,
          children: (y, w) => {
            me();
            var m = _e("输出参数");
            L(y, m);
          },
          $$slots: { default: !0 }
        });
        var f = D(p, 2);
        Pe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var m = F2();
            L(y, m);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = D(d, 2);
        wt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(qd, { data: {} }, [], [], !0);
const ns = (e) => JSON.parse(JSON.stringify(e));
var Q2 = /* @__PURE__ */ ge('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), J2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-hwmib9"><!></div>'), ew = /* @__PURE__ */ ee('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), tw = /* @__PURE__ */ ee('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const nw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Fd(e, t) {
  le(t, !0), He(e, nw);
  const n = v(t, "parameter", 7), r = v(t, "position", 7), o = v(t, "dataKeyName", 7), i = v(t, "placeholder", 7, "请输入参数值");
  let s = Ue(), a = Ln(s), l = /* @__PURE__ */ N(() => {
    let S = a?.current?.data?.[o()], M;
    if (S && r().length > 0) {
      let $ = S;
      for (let E = 0; E < r().length; E++) {
        const O = r()[E];
        E == r().length - 1 ? M = $[O] : $ = $[O].children;
      }
    }
    return { ...n(), ...M };
  });
  const { updateNodeData: u } = ot(), d = (S, M) => {
    u(s, ($) => {
      const E = $.data?.[o()];
      if (E && r().length > 0) {
        let O = E;
        for (let K = 0; K < r().length; K++) {
          const B = r()[K];
          K == r().length - 1 ? O[B] = { ...O[B], [S]: M } : O = O[B].children;
        }
      }
      return { [o()]: [...ns(E)] };
    });
  }, p = (S, M) => {
    const $ = M.target.value;
    d(S, $);
  }, f = (S) => {
    const M = S.value;
    d("dataType", M);
  };
  let h;
  const y = () => {
    u(s, (S) => {
      let M = S.data?.[o()];
      if (M && r().length > 0) {
        let $ = M;
        for (let E = 0; E < r().length; E++) {
          const O = r()[E];
          E == r().length - 1 ? $.splice(O, 1) : $ = $[O].children;
        }
      }
      return { [o()]: [...ns(M)] };
    }), h?.hide();
  }, w = () => {
    u(s, (S) => {
      let M = S.data?.[o()];
      if (M && r().length > 0) {
        let $ = M;
        for (let E = 0; E < r().length; E++) {
          const O = r()[E];
          E == r().length - 1 ? $[O].children ? $[O].children.push({ id: Sn(), name: "newParam", dataType: "String" }) : $[O].children = [{ id: Sn(), name: "newParam", dataType: "String" }] : $ = $[O].children;
        }
      }
      return { [o()]: [...ns(M)] };
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
  }, b = tw(), C = oe(b), _ = R(C);
  {
    var x = (S) => {
      var M = ke(), $ = oe(M);
      gt($, 17, r, Nr, (E, O) => {
        me();
        var K = _e(" ");
        L(E, K);
      }), L(S, M);
    };
    ae(_, (S) => {
      r().length > 1 && S(x);
    });
  }
  var k = D(_, 2);
  {
    let S = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
    Qe(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (M) => {
        p("name", M);
      },
      get disabled() {
        return c(S);
      }
    });
  }
  j(C);
  var P = D(C, 2), T = R(P);
  {
    let S = /* @__PURE__ */ N(() => c(l).dataTypeItems || Ym), M = /* @__PURE__ */ N(() => c(l).dataType ? [c(l).dataType] : []), $ = /* @__PURE__ */ N(() => c(l).dataTypeDisabled === !0);
    lt(T, {
      get items() {
        return c(S);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(M);
      },
      get disabled() {
        return c($);
      },
      onSelect: f
    });
  }
  var Z = D(T, 2);
  {
    var H = (S) => {
      Pe(S, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (M, $) => {
          var E = Q2();
          L(M, E);
        },
        $$slots: { default: !0 }
      });
    };
    ae(Z, (S) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && S(H);
    });
  }
  j(P);
  var I = D(P, 2), z = R(I);
  return Et(
    Qn(z, {
      placement: "bottom",
      floating: (S) => {
        var M = ew(), $ = R(M), E = D(R($));
        {
          let V = /* @__PURE__ */ N(() => c(l).defaultValue || "");
          Ye(E, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(V);
            },
            onchange: (F) => {
              p("defaultValue", F);
            }
          });
        }
        j($);
        var O = D($, 2), K = D(R(O));
        {
          let V = /* @__PURE__ */ N(() => c(l).description || "");
          Ye(K, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(V);
            },
            onchange: (F) => {
              p("description", F);
            }
          });
        }
        j(O);
        var B = D(O, 2);
        {
          var Y = (V) => {
            var F = J2(), q = R(F);
            Pe(q, {
              onclick: y,
              children: (U, A) => {
                me();
                var X = _e("删除");
                L(U, X);
              },
              $$slots: { default: !0 }
            }), j(F), L(V, F);
          };
          ae(B, (V) => {
            c(l).deleteDisabled !== !0 && V(Y);
          });
        }
        j(M), L(S, M);
      },
      children: (S, M) => {
        Mo(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => h = S,
    () => h
  ), j(I), L(e, b), ue(m);
}
se(
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
var rw = /* @__PURE__ */ ee("<!> <!>", 1), ow = /* @__PURE__ */ ee('<div class="none-params svelte-1oz5kx0"> </div>'), iw = /* @__PURE__ */ ee('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), sw = /* @__PURE__ */ ee('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const aw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Vn(e, t) {
  le(t, !0), He(e, aw);
  const n = (y, w = ht, m = ht) => {
    var b = ke(), C = oe(b);
    gt(
      C,
      19,
      w,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, x, k) => {
        var P = rw(), T = oe(P);
        {
          let I = /* @__PURE__ */ N(() => [...m(), c(k)]);
          Fd(T, {
            get parameter() {
              return c(x);
            },
            get position() {
              return c(I);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var Z = D(T, 2);
        {
          var H = (I) => {
            {
              let z = /* @__PURE__ */ N(() => [...m(), c(k)]);
              n(I, () => c(x).children, () => c(z));
            }
          };
          ae(Z, (I) => {
            c(x).children && I(H);
          });
        }
        L(_, P);
      },
      (_) => {
        var x = ke(), k = oe(x);
        {
          var P = (T) => {
            var Z = ow(), H = R(Z, !0);
            j(Z), Ce(() => Re(H, r())), L(T, Z);
          };
          ae(k, (T) => {
            m().length === 0 && T(P);
          });
        }
        L(_, x);
      }
    ), L(y, b);
  }, r = v(t, "noneParameterText", 7, "无输出参数"), o = v(t, "dataKeyName", 7, "outputDefs"), i = v(t, "placeholder", 7, "请输入参数名称");
  let s = Ue(), a = Ln(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = sw(), p = R(d);
  {
    var f = (y) => {
      var w = iw();
      me(4), L(y, w);
    };
    ae(p, (y) => {
      c(l).length !== 0 && y(f);
    });
  }
  var h = D(p, 2);
  return n(h, () => c(l) || [], () => []), j(d), L(e, d), ue(u);
}
se(Vn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var lw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), uw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ ee('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), fw = /* @__PURE__ */ ee('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const pw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Gd(e, t) {
  le(t, !0), He(e, pw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn(), s = Xn();
  let a = /* @__PURE__ */ Se(Zt([]));
  On(async () => {
    const p = await s.provider?.llm?.();
    c(a).push(...p || []);
  });
  const { updateNodeData: l } = ot(), u = (p) => {
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
  Fe(() => {
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
  return Rt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (p) => {
        var f = lw();
        L(p, f);
      },
      children: (p, f) => {
        var h = fw(), y = oe(h), w = R(y);
        Oe(w, {
          level: 3,
          children: (B, Y) => {
            me();
            var V = _e("输入参数");
            L(B, V);
          },
          $$slots: { default: !0 }
        });
        var m = D(w, 2);
        Pe(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, Y) => {
            var V = uw();
            L(B, V);
          },
          $$slots: { default: !0 }
        }), j(y);
        var b = D(y, 2);
        wt(b, {});
        var C = D(b, 2), _ = R(C);
        Oe(_, {
          level: 3,
          children: (B, Y) => {
            me();
            var V = _e("图片识别");
            L(B, V);
          },
          $$slots: { default: !0 }
        });
        var x = D(_, 2);
        Pe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (B, Y) => {
            var V = cw();
            L(B, V);
          },
          $$slots: { default: !0 }
        }), j(C);
        var k = D(C, 2);
        wt(k, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var P = D(k, 2);
        Oe(P, {
          level: 3,
          mt: "10px",
          children: (B, Y) => {
            me();
            var V = _e("模型设置");
            L(B, V);
          },
          $$slots: { default: !0 }
        });
        var T = D(P, 4), Z = R(T);
        {
          let B = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
          lt(Z, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (Y) => {
              const V = Y.value;
              l(o, () => ({ llmId: V }));
            },
            get value() {
              return c(B);
            }
          });
        }
        var H = D(Z, 2);
        Qn(H, {
          placement: "bottom",
          floating: (B) => {
            var Y = dw(), V = D(R(Y), 2), F = R(V), q = R(F), U = R(q);
            j(q);
            var A = D(q, 2);
            or(A), A.__input = (pe) => l(o, { temperature: parseFloat(pe.target.value) }), j(F), j(V);
            var X = D(V, 2), G = R(X), te = R(G), ne = R(te);
            j(te);
            var J = D(te, 2);
            or(J), J.__input = (pe) => l(o, { topP: parseFloat(pe.target.value) }), j(G), j(X);
            var he = D(X, 2), ce = R(he), re = R(ce), ie = R(re);
            j(re);
            var fe = D(re, 2);
            or(fe), fe.__input = (pe) => l(o, { topK: parseInt(pe.target.value) }), j(ce), j(he), j(Y), Ce(() => {
              Re(U, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), Ro(A, n().temperature ?? 0.7), Re(ne, `Top P: ${n().topP ?? 0.9 ?? ""}`), Ro(J, n().topP ?? 0.9), Re(ie, `Top K: ${n().topK ?? 50 ?? ""}`), Ro(fe, n().topK ?? 50);
            }), L(B, Y);
          },
          children: (B, Y) => {
            Mo(B, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), j(T);
        var I = D(T, 4), z = R(I);
        {
          let B = /* @__PURE__ */ N(() => n().systemPrompt || "");
          Ye(z, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(B);
            },
            oninput: (Y) => {
              l(o, { systemPrompt: Y.target.value });
            }
          });
        }
        j(I);
        var S = D(I, 4), M = R(S);
        {
          let B = /* @__PURE__ */ N(() => n().userPrompt || "");
          Ye(M, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(B);
            },
            oninput: (Y) => {
              l(o, { userPrompt: Y.target.value });
            }
          });
        }
        j(S);
        var $ = D(S, 2), E = R($);
        Oe(E, {
          level: 3,
          children: (B, Y) => {
            me();
            var V = _e("输出参数");
            L(B, V);
          },
          $$slots: { default: !0 }
        });
        var O = D(E, 2);
        {
          let B = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
          lt(O, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (Y) => {
              u(Y.value);
            },
            get value() {
              return c(B);
            }
          });
        }
        j($);
        var K = D($, 2);
        Vn(K, {}), L(p, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
Gn(["input"]);
se(Gd, { data: {} }, [], [], !0);
var hw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), gw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ ee('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const yw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ud(e, t) {
  le(t, !0), He(e, yw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  On(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ue(), { addParameter: i } = tn(), { updateNodeData: s } = ot(), a = [
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
  return Rt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = hw();
        L(u, d);
      },
      children: (u, d) => {
        var p = mw(), f = oe(p), h = R(f);
        Oe(h, {
          level: 3,
          children: (H, I) => {
            me();
            var z = _e("输入参数");
            L(H, z);
          },
          $$slots: { default: !0 }
        });
        var y = D(h, 2);
        Pe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, I) => {
            var z = gw();
            L(H, z);
          },
          $$slots: { default: !0 }
        }), j(f);
        var w = D(f, 2);
        wt(w, {});
        var m = D(w, 2);
        Oe(m, {
          level: 3,
          mt: "10px",
          children: (H, I) => {
            me();
            var z = _e("代码");
            L(H, z);
          },
          $$slots: { default: !0 }
        });
        var b = D(m, 4), C = R(b);
        {
          let H = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
          lt(C, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (I) => {
              const z = I.value;
              s(o, () => ({ engine: z }));
            },
            get value() {
              return c(H);
            }
          });
        }
        j(b);
        var _ = D(b, 4), x = R(_);
        {
          let H = /* @__PURE__ */ N(() => n().code || "");
          Ye(x, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (I) => {
              s(o, () => ({ code: I.target.value }));
            },
            get value() {
              return c(H);
            }
          });
        }
        j(_);
        var k = D(_, 2), P = R(k);
        Oe(P, {
          level: 3,
          mt: "10px",
          children: (H, I) => {
            me();
            var z = _e("输出参数");
            L(H, z);
          },
          $$slots: { default: !0 }
        });
        var T = D(P, 2);
        Pe(T, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, I) => {
            var z = vw();
            L(H, z);
          },
          $$slots: { default: !0 }
        }), j(k);
        var Z = D(k, 2);
        Vn(Z, {}), L(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Ud, { data: {} }, [], [], !0);
var ww = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), bw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ ee('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const $w = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  le(t, !0), He(e, $w);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn(), { updateNodeData: s } = ot();
  Fe(() => {
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
  return Rt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ww();
        L(l, u);
      },
      children: (l, u) => {
        var d = xw(), p = oe(d), f = R(p);
        Oe(f, {
          level: 3,
          children: (k, P) => {
            me();
            var T = _e("输入参数");
            L(k, T);
          },
          $$slots: { default: !0 }
        });
        var h = D(f, 2);
        Pe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, P) => {
            var T = bw();
            L(k, T);
          },
          $$slots: { default: !0 }
        }), j(p);
        var y = D(p, 2);
        wt(y, {});
        var w = D(y, 2);
        Oe(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, P) => {
            me();
            var T = _e("模板内容");
            L(k, T);
          },
          $$slots: { default: !0 }
        });
        var m = D(w, 2), b = R(m);
        {
          let k = /* @__PURE__ */ N(() => n().template || "");
          Ye(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (P) => {
              s(o, () => ({ template: P.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        j(m);
        var C = D(m, 2), _ = R(C);
        Oe(_, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            me();
            var T = _e("输出参数");
            L(k, T);
          },
          $$slots: { default: !0 }
        }), j(C);
        var x = D(C, 2);
        Vn(x, {}), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Qd, { data: {} }, [], [], !0);
var Cw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), _w = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ ee('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Ew = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Pw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Mw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Lw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Tw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Dw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Jd(e, t) {
  le(t, !0), He(e, Dw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  On(() => {
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
  ], i = Ue(), { addParameter: s } = tn(), { updateNodeData: a } = ot();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return Rt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Cw();
        L(u, d);
      },
      children: (u, d) => {
        var p = Vw(), f = oe(p), h = R(f);
        Oe(h, {
          level: 3,
          children: (A, X) => {
            me();
            var G = _e("输入参数");
            L(A, G);
          },
          $$slots: { default: !0 }
        });
        var y = D(h, 2);
        Pe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (A, X) => {
            var G = _w();
            L(A, G);
          },
          $$slots: { default: !0 }
        }), j(f);
        var w = D(f, 2);
        wt(w, {});
        var m = D(w, 2);
        Oe(m, {
          level: 3,
          mt: "10px",
          children: (A, X) => {
            me();
            var G = _e("URL 地址");
            L(A, G);
          },
          $$slots: { default: !0 }
        });
        var b = D(m, 2), C = R(b), _ = R(C);
        {
          let A = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
          lt(_, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (X) => {
              const G = X.value;
              a(i, () => ({ method: G }));
            },
            get value() {
              return c(A);
            }
          });
        }
        j(C);
        var x = D(C, 2), k = R(x);
        {
          let A = /* @__PURE__ */ N(() => n().url || "");
          Qe(k, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (X) => {
              a(i, () => ({ url: X.target.value }));
            },
            get value() {
              return c(A);
            }
          });
        }
        j(x), j(b);
        var P = D(b, 2), T = R(P);
        Oe(T, {
          level: 3,
          children: (A, X) => {
            me();
            var G = _e("Http 头信息");
            L(A, G);
          },
          $$slots: { default: !0 }
        });
        var Z = D(T, 2);
        Pe(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (A, X) => {
            var G = kw();
            L(A, G);
          },
          $$slots: { default: !0 }
        }), j(P);
        var H = D(P, 2);
        wt(H, { dataKeyName: "headers" });
        var I = D(H, 2);
        {
          var z = (A) => {
            var X = Sw(), G = oe(X);
            Oe(G, {
              level: 3,
              mt: "10px",
              children: (we, Ve) => {
                me();
                var W = _e("Body");
                L(we, W);
              },
              $$slots: { default: !0 }
            });
            var te = D(G, 2), ne = R(te), J = R(ne);
            {
              let we = /* @__PURE__ */ N(() => !n().bodyType || n().bodyType === "");
              Qe(J, {
                type: "radio",
                value: "",
                get checked() {
                  return c(we);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            me(), j(ne);
            var he = D(ne, 2), ce = R(he);
            {
              let we = /* @__PURE__ */ N(() => n().bodyType === "form-data");
              Qe(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(we);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            me(), j(he);
            var re = D(he, 2), ie = R(re);
            {
              let we = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
              Qe(ie, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(we);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            me(), j(re);
            var fe = D(re, 2), pe = R(fe);
            {
              let we = /* @__PURE__ */ N(() => n().bodyType === "json");
              Qe(pe, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(we);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            me(), j(fe);
            var $e = D(fe, 2), de = R($e);
            {
              let we = /* @__PURE__ */ N(() => n().bodyType === "raw");
              Qe(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(we);
                },
                onchange: (Ve) => {
                  Ve.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            me(), j($e), j(te), L(A, X);
          };
          ae(I, (A) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && A(z);
          });
        }
        var S = D(I, 2);
        {
          var M = (A) => {
            var X = Nw(), G = oe(X), te = R(G);
            Oe(te, {
              level: 3,
              children: (he, ce) => {
                me();
                var re = _e("参数");
                L(he, re);
              },
              $$slots: { default: !0 }
            });
            var ne = D(te, 2);
            Pe(ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (he, ce) => {
                var re = Ew();
                L(he, re);
              },
              $$slots: { default: !0 }
            }), j(G);
            var J = D(G, 2);
            wt(J, { dataKeyName: "formData" }), L(A, X);
          };
          ae(S, (A) => {
            n().bodyType === "form-data" && A(M);
          });
        }
        var $ = D(S, 2);
        {
          var E = (A) => {
            var X = Ow(), G = oe(X), te = R(G);
            Oe(te, {
              level: 3,
              children: (he, ce) => {
                me();
                var re = _e("Body 参数");
                L(he, re);
              },
              $$slots: { default: !0 }
            });
            var ne = D(te, 2);
            Pe(ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (he, ce) => {
                var re = Pw();
                L(he, re);
              },
              $$slots: { default: !0 }
            }), j(G);
            var J = D(G, 2);
            wt(J, { dataKeyName: "formUrlencoded" }), L(A, X);
          };
          ae($, (A) => {
            n().bodyType === "x-www-form-urlencoded" && A(E);
          });
        }
        var O = D($, 2);
        {
          var K = (A) => {
            var X = Mw(), G = R(X);
            Ye(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (te) => {
                a(i, { bodyJson: te.target.value });
              }
            }), j(X), L(A, X);
          };
          ae(O, (A) => {
            n().bodyType === "json" && A(K);
          });
        }
        var B = D(O, 2);
        {
          var Y = (A) => {
            var X = Lw(), G = R(X);
            Ye(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (te) => {
                a(i, { bodyRaw: te.target.value });
              }
            }), j(X), L(A, X);
          };
          ae(B, (A) => {
            n().bodyType === "raw" && A(Y);
          });
        }
        var V = D(B, 2), F = R(V);
        Oe(F, {
          level: 3,
          mt: "10px",
          children: (A, X) => {
            me();
            var G = _e("输出参数");
            L(A, G);
          },
          $$slots: { default: !0 }
        });
        var q = D(F, 2);
        Pe(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (A, X) => {
            var G = Tw();
            L(A, G);
          },
          $$slots: { default: !0 }
        }), j(V);
        var U = D(V, 2);
        Vn(U, {}), L(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Jd, { data: {} }, [], [], !0);
var zw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Hw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ ee('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Aw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ef(e, t) {
  le(t, !0), He(e, Aw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn(), s = Xn();
  let a = /* @__PURE__ */ Se(Zt([]));
  On(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ot();
  Fe(() => {
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
  return Rt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = zw();
        L(d, p);
      },
      children: (d, p) => {
        var f = Iw(), h = oe(f), y = R(h);
        Oe(y, {
          level: 3,
          children: (z, S) => {
            me();
            var M = _e("输入参数");
            L(z, M);
          },
          $$slots: { default: !0 }
        });
        var w = D(y, 2);
        Pe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, S) => {
            var M = Hw();
            L(z, M);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = D(h, 2);
        wt(m, {});
        var b = D(m, 2);
        Oe(b, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            me();
            var M = _e("知识库设置");
            L(z, M);
          },
          $$slots: { default: !0 }
        });
        var C = D(b, 4), _ = R(C);
        {
          let z = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
          lt(_, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (S) => {
              const M = S.value;
              l(o, () => ({ knowledgeId: M }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(C);
        var x = D(C, 4), k = R(x);
        Qe(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const S = z.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), j(x);
        var P = D(x, 4), T = R(P);
        {
          let z = /* @__PURE__ */ N(() => n().limit || "");
          Qe(T, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (S) => {
              const M = S.target.value;
              l(o, () => ({ limit: M }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(P);
        var Z = D(P, 2), H = R(Z);
        Oe(H, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            me();
            var M = _e("输出参数");
            L(z, M);
          },
          $$slots: { default: !0 }
        }), j(Z);
        var I = D(Z, 2);
        Vn(I, {}), L(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(ef, { data: {} }, [], [], !0);
var Zw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), jw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Kw = /* @__PURE__ */ ee('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Rw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  le(t, !0), He(e, Rw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn(), s = Xn();
  let a = /* @__PURE__ */ Se(Zt([]));
  On(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ot();
  Fe(() => {
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
  return Rt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Zw();
        L(d, p);
      },
      children: (d, p) => {
        var f = Kw(), h = oe(f), y = R(h);
        Oe(y, {
          level: 3,
          children: (z, S) => {
            me();
            var M = _e("输入参数");
            L(z, M);
          },
          $$slots: { default: !0 }
        });
        var w = D(y, 2);
        Pe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, S) => {
            var M = jw();
            L(z, M);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = D(h, 2);
        wt(m, {});
        var b = D(m, 2);
        Oe(b, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            me();
            var M = _e("搜索引擎设置");
            L(z, M);
          },
          $$slots: { default: !0 }
        });
        var C = D(b, 4), _ = R(C);
        {
          let z = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
          lt(_, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (S) => {
              const M = S.value;
              l(o, () => ({ engine: M }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(C);
        var x = D(C, 4), k = R(x);
        Qe(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const S = z.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), j(x);
        var P = D(x, 4), T = R(P);
        Qe(T, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (z) => {
            const S = z.target.value;
            l(o, () => ({ limit: S }));
          }
        }), j(P);
        var Z = D(P, 2), H = R(Z);
        Oe(H, {
          level: 3,
          mt: "10px",
          children: (z, S) => {
            me();
            var M = _e("输出参数");
            L(z, M);
          },
          $$slots: { default: !0 }
        }), j(Z);
        var I = D(Z, 2);
        Vn(I, {}), L(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(tf, { data: {} }, [], [], !0);
var Bw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Yw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ww = /* @__PURE__ */ ee('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Xw = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function nf(e, t) {
  le(t, !0), He(e, Xw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn();
  Fe(() => {
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
  return Rt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Bw();
        L(a, l);
      },
      handle: (a) => {
        Yn(a, {
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
        var u = Ww(), d = oe(u), p = R(d);
        Oe(p, {
          level: 3,
          children: (b, C) => {
            me();
            var _ = _e("循环变量");
            L(b, _);
          },
          $$slots: { default: !0 }
        }), j(d);
        var f = D(d, 2);
        wt(f, { dataKeyName: "loopVars" });
        var h = D(f, 2), y = R(h);
        Oe(y, {
          level: 3,
          children: (b, C) => {
            me();
            var _ = _e("输出参数");
            L(b, _);
          },
          $$slots: { default: !0 }
        });
        var w = D(y, 2);
        Pe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, C) => {
            var _ = Yw();
            L(b, _);
          },
          $$slots: { default: !0 }
        }), j(h);
        var m = D(h, 2);
        wt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(nf, { data: {} }, [], [], !0);
var qw = /* @__PURE__ */ ee('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Fw = /* @__PURE__ */ ee('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Gw = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function rf(e, t) {
  le(t, !0), He(e, Gw);
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7);
  let s = Ue(), a = Ln(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ot(), d = (S, M) => {
    u(s, ($) => {
      let E = $.data?.[o()];
      return E[r()] = { ...E[r()], [S]: M }, { [o()]: E };
    });
  }, p = (S, M) => {
    const $ = M.target.value;
    d(S, $);
  }, f = (S) => {
    const M = S.value;
    d("ref", M);
  }, h = (S) => {
    const M = S.value;
    d("formType", M);
  }, y = (S) => {
    const M = S.value;
    d("contentType", M);
  };
  let w;
  const m = () => {
    u(s, (S) => {
      let M = S.data?.[o()];
      return M.splice(r(), 1), { [o()]: [...M] };
    }), w?.hide();
  };
  let b = Wd(i());
  var C = {
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
  }, _ = Fw(), x = oe(_), k = R(x);
  {
    let S = /* @__PURE__ */ N(() => c(l).nameDisabled === !0);
    Qe(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(S);
      },
      oninput: (M) => p("name", M)
    });
  }
  j(x);
  var P = D(x, 2), T = R(P);
  {
    var Z = (S) => {
      Qe(S, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => p("value", M)
      });
    }, H = (S) => {
      var M = ke(), $ = oe(M);
      {
        var E = (O) => {
          {
            let K = /* @__PURE__ */ N(() => [c(l).ref]);
            lt(O, {
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
          $,
          (O) => {
            c(l).refType !== "input" && O(E);
          },
          !0
        );
      }
      L(S, M);
    };
    ae(T, (S) => {
      c(l).refType === "fixed" ? S(Z) : S(H, !1);
    });
  }
  j(P);
  var I = D(P, 2), z = R(I);
  return Et(
    Qn(z, {
      placement: "bottom",
      floating: (S) => {
        var M = qw(), $ = R(M), E = D(R($));
        {
          let A = /* @__PURE__ */ N(() => c(l).contentType ? [c(l).contentType] : []);
          lt(E, {
            get items() {
              return da;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(A);
            },
            onSelect: y
          });
        }
        j($);
        var O = D($, 2), K = D(R(O));
        {
          let A = /* @__PURE__ */ N(() => c(l).formType ? [c(l).formType] : []);
          lt(K, {
            get items() {
              return qm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(A);
            },
            onSelect: h
          });
        }
        j(O);
        var B = D(O, 2), Y = D(R(B));
        Ye(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (A) => {
            p("formLabel", A);
          },
          get value() {
            return c(l).formLabel;
          }
        }), j(B);
        var V = D(B, 2), F = D(R(V));
        Ye(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (A) => {
            p("formDescription", A);
          },
          get value() {
            return c(l).formDescription;
          }
        }), j(V);
        var q = D(V, 2), U = R(q);
        Pe(U, {
          onclick: m,
          children: (A, X) => {
            me();
            var G = _e("删除");
            L(A, G);
          },
          $$slots: { default: !0 }
        }), j(q), j(M), L(S, M);
      },
      children: (S, M) => {
        Mo(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => w = S,
    () => w
  ), j(I), L(e, _), ue(C);
}
se(
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
var Uw = /* @__PURE__ */ ee('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Qw = /* @__PURE__ */ ee('<div class="none-params svelte-1fllp9b"> </div>'), Jw = /* @__PURE__ */ ee('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const eb = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function of(e, t) {
  le(t, !0), He(e, eb);
  const n = v(t, "noneParameterText", 7, "无确认数据"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7);
  let i = Ue(), s = Ln(i), a = /* @__PURE__ */ N(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = Jw(), d = R(u);
  {
    var p = (h) => {
      var y = Uw();
      me(4), L(h, y);
    };
    ae(d, (h) => {
      c(a).length !== 0 && h(p);
    });
  }
  var f = D(d, 2);
  return gt(
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
      var y = Qw(), w = R(y, !0);
      j(y), Ce(() => Re(w, n())), L(h, y);
    }
  ), j(u), L(e, u), ue(l);
}
se(of, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Es = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Es(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Es(e[s], t[s])) return !1;
    return !0;
  }
};
var tb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), nb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rb = /* @__PURE__ */ ee('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const ob = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function sf(e, t) {
  le(t, !0), He(e, ob);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn(), { updateNodeData: s } = ot();
  Fe(() => {
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
      Es(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return Rt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = tb();
        L(l, u);
      },
      children: (l, u) => {
        var d = rb(), p = oe(d), f = R(p);
        Oe(f, {
          level: 3,
          children: (k, P) => {
            me();
            var T = _e("确认数据");
            L(k, T);
          },
          $$slots: { default: !0 }
        });
        var h = D(f, 2);
        Pe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, P) => {
            var T = nb();
            L(k, T);
          },
          $$slots: { default: !0 }
        }), j(p);
        var y = D(p, 2);
        of(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = D(y, 2);
        Oe(w, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            me();
            var T = _e("确认消息");
            L(k, T);
          },
          $$slots: { default: !0 }
        });
        var m = D(w, 4), b = R(m);
        {
          let k = /* @__PURE__ */ N(() => n().message || "");
          Ye(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (P) => {
              s(o, () => ({ message: P.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        j(m);
        var C = D(m, 2), _ = R(C);
        Oe(_, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            me();
            var T = _e("输出参数");
            L(k, T);
          },
          $$slots: { default: !0 }
        }), j(C);
        var x = D(C, 2);
        Vn(x, { placeholder: "" }), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(sf, { data: {} }, [], [], !0);
const ib = {
  startNode: Rd,
  codeNode: Ud,
  confirmNode: sf,
  llmNode: Gd,
  templateNode: Qd,
  httpNode: Jd,
  knowledgeNode: ef,
  searchEngineNode: tf,
  loopNode: nf,
  endNode: qd
};
var sb = /* @__PURE__ */ ee("<!> ", 1);
function Ns(e, t) {
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
  return Pe(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var p = sb(), f = oe(p);
      Ws(f, n);
      var h = D(f);
      Ce(() => Re(h, ` ${r() ?? ""}`)), L(u, p);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se(Ns, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var ab = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), lb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), ub = /* @__PURE__ */ ee('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function af(e, t) {
  le(t, !0);
  let n = /* @__PURE__ */ Se("base"), r = /* @__PURE__ */ Se("show");
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
  ], s = [], a = Xn(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((C, _) => (l[C].sortNo || 0) - (l[_].sortNo || 0));
    for (let C of b)
      l[C].group === "base" ? o.push({ type: C, ...l[C] }) : s.push({
        icon: l[C].icon,
        title: l[C].title,
        type: C
      });
    o.sort((C, _) => (C.sortNo || 0) - (_.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let C of b)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === C) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var u = ub(), d = R(u), p = R(d), f = R(p);
  Ed(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      Q(n, b.value.toString(), !0);
    }
  }), j(p);
  var h = D(p, 2), y = R(h);
  gt(y, 21, () => o, Nr, (b, C) => {
    Ns(b, Be(() => c(C)));
  }), j(y);
  var w = D(y, 2);
  gt(w, 21, () => s, Nr, (b, C) => {
    Ns(b, Be(() => c(C)));
  }), j(w), j(h), j(d);
  var m = D(d, 2);
  Pe(m, {
    onclick: () => {
      Q(r, c(r) ? "" : "show", !0);
    },
    children: (b, C) => {
      var _ = ke(), x = oe(_);
      {
        var k = (T) => {
          var Z = ab();
          L(T, Z);
        }, P = (T) => {
          var Z = lb();
          L(T, Z);
        };
        ae(x, (T) => {
          c(r) === "show" ? T(k) : T(P, !1);
        });
      }
      L(b, _);
    },
    $$slots: { default: !0 }
  }), j(u), Ce(() => {
    St(u, 1, `tf-toolbar ${c(r) ?? ""}`), ct(y, `display: ${c(n) === "base" ? "flex" : "none"}`), ct(w, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), L(e, u), ue();
}
se(af, {}, [], [], !0);
const cb = () => ({ getNode: (e) => Me.getNode(e) }), db = () => ({ ensureParentInNodesBefore: (e, t) => {
  Me.updateNodes((n) => {
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
} }), fb = () => ({ getEdgesByTarget: (e) => Me.getEdges().filter((t) => t.target === e) });
var pb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hb = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), gb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), vb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), mb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), yb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), wb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), bb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), $b = /* @__PURE__ */ ee("<!> <!> <div></div> <!>", 1);
const Cb = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function lf(e, t) {
  le(t, !0), He(e, Cb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = tn(), s = ot(), { updateNodeData: a } = s, l = (m) => {
    a(o, m);
  }, u = (m, b) => {
    l({ [m]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Xn().customNodes[t.type];
  f.render?.(p, d, s);
  const h = f.forms;
  let y;
  Fe(() => {
    n().expand && y && y.append(p);
  }), Fe(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), Fe(() => {
    !n().parameters && f.parameters && l({
      parameters: fo(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Fe(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: fo(JSON.parse(JSON.stringify(f.outputDefs)))
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
    const m = (C) => {
      var _ = ke(), x = oe(_);
      Ws(x, () => f.icon), L(C, _);
    };
    let b = /* @__PURE__ */ N(() => ({ ...n(), description: f.description }));
    Rt(e, Be(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: m,
        children: (C, _) => {
          var x = $b(), k = oe(x);
          {
            var P = (S) => {
              var M = hb(), $ = oe(M), E = R($);
              Oe(E, {
                level: 3,
                children: (Y, V) => {
                  me();
                  var F = _e("输入参数");
                  L(Y, F);
                },
                $$slots: { default: !0 }
              });
              var O = D(E, 2);
              {
                var K = (Y) => {
                  Pe(Y, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (V, F) => {
                      var q = pb();
                      L(V, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(O, (Y) => {
                  f.parametersAddEnable !== !1 && Y(K);
                });
              }
              j($);
              var B = D($, 2);
              wt(B, {}), L(S, M);
            };
            ae(k, (S) => {
              f.parametersEnable !== !1 && S(P);
            });
          }
          var T = D(k, 2);
          {
            var Z = (S) => {
              var M = ke(), $ = oe(M);
              gt($, 17, () => h, Nr, (E, O) => {
                var K = ke(), B = oe(K);
                {
                  var Y = (F) => {
                    var q = gb(), U = oe(q), A = R(U, !0);
                    j(U);
                    var X = D(U, 2), G = R(X);
                    {
                      let te = /* @__PURE__ */ N(() => n()[c(O).name] || c(O).defaultValue);
                      Qe(G, Be(
                        {
                          get placeholder() {
                            return c(O).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(te);
                          }
                        },
                        () => c(O).attrs,
                        {
                          onchange: (ne) => {
                            u(c(O).name, ne);
                          }
                        }
                      ));
                    }
                    j(X), Ce(() => Re(A, c(O).label)), L(F, q);
                  }, V = (F) => {
                    var q = ke(), U = oe(q);
                    {
                      var A = (G) => {
                        var te = vb(), ne = oe(te), J = R(ne, !0);
                        j(ne);
                        var he = D(ne, 2), ce = R(he);
                        {
                          let re = /* @__PURE__ */ N(() => n()[c(O).name] || c(O).defaultValue);
                          Ye(ce, Be(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(O).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(re);
                              }
                            },
                            () => c(O).attrs,
                            {
                              onchange: (ie) => {
                                u(c(O).name, ie);
                              }
                            }
                          ));
                        }
                        j(he), Ce(() => Re(J, c(O).label)), L(G, te);
                      }, X = (G) => {
                        var te = ke(), ne = oe(te);
                        {
                          var J = (ce) => {
                            var re = mb(), ie = oe(re), fe = R(ie, !0);
                            j(ie);
                            var pe = D(ie, 2), $e = R(pe), de = R($e), we = R(de);
                            j(de);
                            var Ve = D(de, 2), W = (Ze) => l({ [c(O).name]: parseFloat(Ze.target.value) });
                            tt(
                              Ve,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(O).attrs,
                                value: n()[c(O).name] ?? c(O).defaultValue,
                                oninput: W
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), j($e), j(pe), Ce(() => {
                              Re(fe, c(O).label), Re(we, `${c(O).description ?? ""}: ${n()[c(O).name] ?? c(O).defaultValue ?? ""}`);
                            }), L(ce, re);
                          }, he = (ce) => {
                            var re = ke(), ie = oe(re);
                            {
                              var fe = ($e) => {
                                var de = yb(), we = oe(de), Ve = R(we, !0);
                                j(we);
                                var W = D(we, 2), Ze = R(W);
                                {
                                  let De = /* @__PURE__ */ N(() => c(O).options || []), ze = /* @__PURE__ */ N(() => n()[c(O).name] ? [n()[c(O).name]] : [c(O).defaultValue]);
                                  lt(Ze, {
                                    get items() {
                                      return c(De);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(O).placeholder;
                                    },
                                    onSelect: (Ie) => {
                                      const nt = Ie.value;
                                      l({ [c(O).name]: nt });
                                    },
                                    get value() {
                                      return c(ze);
                                    }
                                  });
                                }
                                j(W), Ce(() => Re(Ve, c(O).label)), L($e, de);
                              }, pe = ($e) => {
                                var de = ke(), we = oe(de);
                                {
                                  var Ve = (Ze) => {
                                    var De = wb(), ze = oe(De), Ie = R(ze, !0);
                                    j(ze);
                                    var nt = D(ze, 2), Nt = R(nt);
                                    {
                                      let Xe = /* @__PURE__ */ N(() => c(O).chosen?.buttonText);
                                      Sd(Nt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(O).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Xe);
                                        },
                                        onChosen: (Te, ve, je) => {
                                          c(O).chosen?.onChosen?.(l, Te, ve, je);
                                        },
                                        get value() {
                                          return n()[c(O).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(O).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    j(nt), Ce(() => Re(Ie, c(O).label)), L(Ze, De);
                                  }, W = (Ze) => {
                                    var De = ke(), ze = oe(De);
                                    {
                                      var Ie = (nt) => {
                                        Oe(nt, Be({ level: 3, mt: "10px" }, () => c(O).attrs, {
                                          children: (Nt, Xe) => {
                                            me();
                                            var Te = _e();
                                            Ce(() => Re(Te, c(O).label)), L(Nt, Te);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        ze,
                                        (nt) => {
                                          c(O).type === "heading" && nt(Ie);
                                        },
                                        !0
                                      );
                                    }
                                    L(Ze, De);
                                  };
                                  ae(
                                    we,
                                    (Ze) => {
                                      c(O).type === "chosen" ? Ze(Ve) : Ze(W, !1);
                                    },
                                    !0
                                  );
                                }
                                L($e, de);
                              };
                              ae(
                                ie,
                                ($e) => {
                                  c(O).type === "select" ? $e(fe) : $e(pe, !1);
                                },
                                !0
                              );
                            }
                            L(ce, re);
                          };
                          ae(
                            ne,
                            (ce) => {
                              c(O).type === "slider" ? ce(J) : ce(he, !1);
                            },
                            !0
                          );
                        }
                        L(G, te);
                      };
                      ae(
                        U,
                        (G) => {
                          c(O).type === "textarea" ? G(A) : G(X, !1);
                        },
                        !0
                      );
                    }
                    L(F, q);
                  };
                  ae(B, (F) => {
                    c(O).type === "input" ? F(Y) : F(V, !1);
                  });
                }
                L(E, K);
              }), L(S, M);
            };
            ae(T, (S) => {
              h && S(Z);
            });
          }
          var H = D(T, 2);
          Et(H, (S) => y = S, () => y);
          var I = D(H, 2);
          {
            var z = (S) => {
              var M = xb(), $ = oe(M), E = R($);
              Oe(E, {
                level: 3,
                mt: "10px",
                children: (Y, V) => {
                  me();
                  var F = _e("输出参数");
                  L(Y, F);
                },
                $$slots: { default: !0 }
              });
              var O = D(E, 2);
              {
                var K = (Y) => {
                  Pe(Y, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (V, F) => {
                      var q = bb();
                      L(V, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(O, (Y) => {
                  f.outputDefsAddEnable !== !1 && Y(K);
                });
              }
              j($);
              var B = D($, 2);
              Vn(B, {}), L(S, M);
            };
            ae(I, (S) => {
              f.outputDefsEnable !== !1 && S(z);
            });
          }
          Ce(() => {
            ct(H, f.rootStyle || ""), St(H, 1, Mn(f.rootClass), "svelte-qt4m0r");
          }), L(C, x);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(w);
}
se(lf, { data: {} }, [], [], !0);
const _b = () => ({ updateEdgeData: (e, t, n) => {
  const r = Me.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Me.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), kb = () => ({ deleteEdge: (e) => {
  Me.removeEdge(e);
} }), Sb = () => {
  const e = (t, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === t && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (t) => {
    const n = Me.getEdges(), r = [];
    let o = e(t, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Me.getNode(s.target)), i.push(...e(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, Eb = () => ({ getNodeRelativePosition: (e) => {
  let t = Me.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Me.getNode(t.parentId) : t = void 0;
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
function Pb(e) {
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
function Ob(e) {
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
function Ps(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Ps(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Ps(e[r], t));
    return n;
  }
  return e;
}
const Mb = () => (ot(), { copyHandler: async (e) => {
  const t = Me.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Me.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(Nb), o = n.map(Ob), i = JSON.stringify({
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
  const r = Pb(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Sn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, p = Ps(l.data, i);
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
      id: `edge_${Sn()}`,
      source: u,
      target: d
    });
  }
  Me.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Me.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Nl = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var Lb = /* @__PURE__ */ ee('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Tb = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), Vb = /* @__PURE__ */ ee('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Db = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function uf(e, t) {
  le(t, !0), He(e, Db);
  const n = v(t, "onInit", 7), r = /* @__PURE__ */ Ae(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = ot();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Se(!1), s = /* @__PURE__ */ Se(null);
  const { updateEdgeData: a } = _b(), l = (q) => {
    q.preventDefault(), q.dataTransfer && (q.dataTransfer.dropEffect = "move");
  }, u = (q) => {
    q.preventDefault();
    const U = o.screenToFlowPosition({ x: q.clientX - 250, y: q.clientY - 100 }), A = q.dataTransfer?.getData("application/tinyflow");
    if (!A)
      return;
    const X = JSON.parse(A), G = { id: `node_${Sn()}`, position: U, data: {}, ...X };
    Me.addNode(G), Me.selectNodeOnly(G.id);
  }, { getNode: d } = cb(), p = (q) => {
    const U = d(q.source), A = d(q.target);
    if (q.sourceHandle === "loop_handle" || U.parentId) {
      const X = o.getEdges();
      for (let G of X)
        if (G.target === q.target) {
          const te = d(G.source);
          if (q.sourceHandle === "loop_handle" && te.parentId !== U.id || U.parentId && te.parentId !== U.parentId)
            return !1;
        }
    }
    return !(!U.parentId && A.parentId && A.parentId !== U.id);
  }, { getNodesFromSource: f } = Sb(), { getNodeRelativePosition: h } = Eb(), { ensureParentInNodesBefore: y } = db(), w = (q, U) => {
    if (!U.isValid)
      return;
    const A = U.toNode;
    if (A.parentId)
      return;
    const X = U.fromNode, G = U.fromHandle, te = { position: { ...A.position } };
    if (G.id === "loop_handle" ? te.parentId = X.id : X.parentId && (te.parentId = X.parentId), te.parentId) {
      const { x: ne, y: J } = h(te.parentId);
      te.position = { x: A.position.x - ne, y: A.position.y - J }, o.updateNode(A.id, te), f(A.id).forEach((he) => {
        o.updateNode(he.id, {
          parentId: te.parentId,
          position: { x: he.position.x - ne, y: he.position.y - J }
        });
      }), y(te.parentId, A.id);
    }
    setTimeout(() => {
      Me.getEdges().forEach((ne) => {
        ne.target === A.id && ne.source == X.id && (Q(i, !0), Q(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: m } = fb(), b = (q) => {
    q.edges.forEach((U) => {
      U.id === c(s)?.id && (Q(s, null), Q(i, !1));
      const A = d(U.target);
      if (A && A.parentId) {
        const X = m(U.target), { x: G, y: te } = h(A.parentId);
        if (X.length === 0)
          o.updateNode(A.id, {
            parentId: void 0,
            position: { x: A.position.x + G, y: A.position.y + te }
          }), f(A.id).forEach((ne) => {
            o.updateNode(ne.id, {
              parentId: void 0,
              position: { x: ne.position.x + G, y: ne.position.y + te }
            });
          });
        else {
          let ne = !1;
          for (let J = 0; J < X.length; J++) {
            const he = X[J], ce = d(he.source);
            if (ce.parentId || ce.type === "loopNode") {
              ne = !0;
              break;
            }
          }
          ne || (o.updateNode(A.id, {
            parentId: void 0,
            position: { x: A.position.x + G, y: A.position.y + te }
          }), f(A.id).forEach((J) => {
            o.updateNode(J.id, {
              parentId: void 0,
              position: { x: J.position.x + G, y: J.position.y + te }
            });
          }));
        }
      }
    });
  }, { deleteEdge: C } = kb(), _ = (q, U) => {
  }, x = (q) => {
  }, { copyHandler: k, pasteHandler: P } = Mb(), T = (q) => {
    Nl() || ((q.ctrlKey || q.metaKey) && q.key === "c" && (q.preventDefault(), k(q)), (q.ctrlKey || q.metaKey) && q.key === "a" && (q.preventDefault(), Me.updateNodes((U) => U.map((A) => ({ ...A, selected: !0 }))), Me.updateEdges((U) => U.map((A) => ({ ...A, selected: !0 })))));
  }, Z = async (q) => {
    Nl() || P(q);
  };
  On(() => {
    window.addEventListener("keydown", T), window.addEventListener("paste", Z);
  }), wo(() => {
    window.removeEventListener("keydown", T), window.removeEventListener("paste", Z);
  });
  const H = {
    // ...nodeTypes
  }, I = Xn().customNodes;
  if (I)
    for (let q of Object.keys(I))
      H[q] = lf;
  const z = Xn().onDataChange;
  Fe(() => {
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
    set onInit(q) {
      n(q), g();
    }
  }, M = Vb(), $ = R(M), E = Me.getNodes, O = Me.setNodes, K = Me.getEdges, B = Me.setEdges, Y = Me.getViewport, V = Me.setViewport;
  {
    let q = /* @__PURE__ */ N(() => ({ ...ib, ...H })), U = /* @__PURE__ */ N(() => ({
      markerEnd: { type: so.ArrowClosed, width: 20, height: 20 }
    }));
    dd($, {
      get nodeTypes() {
        return c(q);
      },
      get nodes() {
        return E();
      },
      set nodes(A) {
        O(A);
      },
      get edges() {
        return K();
      },
      set edges(A) {
        B(A);
      },
      get viewport() {
        return Y();
      },
      set viewport(A) {
        V(A);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: p,
      onconnectend: w,
      onconnectstart: _,
      onconnect: x,
      connectionRadius: 50,
      onedgeclick: (A) => {
        Q(i, !0), Q(s, A.edge, !0);
      },
      onbeforeconnect: (A) => ({ ...A, id: Sn() }),
      ondelete: b,
      onclick: (A) => {
        const X = A.target;
        X.classList.contains("svelte-flow__edge-interaction") || X.classList.contains("panel-content") || X.closest(".panel-content") || (Q(i, !1), Q(s, null));
      },
      get defaultEdgeOptions() {
        return c(U);
      },
      children: (A, X) => {
        var G = Tb(), te = oe(G);
        xd(te, {});
        var ne = D(te, 2);
        yd(ne, {});
        var J = D(ne, 2);
        Cd(J, {});
        var he = D(J, 2);
        {
          var ce = (re) => {
            Eo(re, {
              children: (ie, fe) => {
                var pe = Lb(), $e = D(R(pe), 4), de = R($e);
                {
                  let Ze = /* @__PURE__ */ N(() => c(s)?.data?.condition);
                  Ye(de, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ze);
                    },
                    onchange: (De) => {
                      c(s) && a(c(s).id, { condition: De.target?.value });
                    }
                  });
                }
                j($e);
                var we = D($e, 2), Ve = R(we);
                Pe(Ve, {
                  onclick: () => {
                    C(c(s)?.id), Q(i, !1);
                  },
                  children: (Ze, De) => {
                    me();
                    var ze = _e("删除");
                    L(Ze, ze);
                  },
                  $$slots: { default: !0 }
                });
                var W = D(Ve, 2);
                Pe(W, {
                  primary: !0,
                  onclick: () => {
                    Q(i, !1);
                  },
                  children: (Ze, De) => {
                    me();
                    var ze = _e("保存");
                    L(Ze, ze);
                  },
                  $$slots: { default: !0 }
                }), j(we), j(pe), L(ie, pe);
              },
              $$slots: { default: !0 }
            });
          };
          ae(he, (re) => {
            c(i) && re(ce);
          });
        }
        L(A, G);
      },
      $$slots: { default: !0 }
    });
  }
  var F = D($, 2);
  return af(F, {}), j(M), L(e, M), ue(S);
}
se(uf, { onInit: {} }, [], [], !0);
function zb(e, t) {
  le(t, !0);
  const n = v(t, "options", 7), r = v(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Me.init(o?.nodes || [], o?.edges || []), Sr("tinyflow_options", n());
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
  }), ue(i);
}
customElements.define("tinyflow-component", se(zb, { options: {}, onInit: {} }, [], [], !1));
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
    return pf(() => {
      r.value && (o = new Fm({
        ...n,
        element: r.value
      }));
    }), hf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (vf(), gf("div", {
      ref_key: "divRef",
      ref: r,
      class: yf(["tinyflow", s.className]),
      style: mf(s.style)
    }, null, 6));
  }
});
export {
  Ib as Tinyflow
};
//# sourceMappingURL=index.js.map
