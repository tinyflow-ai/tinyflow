const tf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(tf);
const di = 1, fi = 2, Pl = 4, nf = 8, rf = 16, of = 1, sf = 2, $l = 4, af = 8, lf = 16, Tl = 1, cf = 2, Dl = "[", bs = "[!", Cs = "]", Xn = {}, rt = Symbol(), uf = "http://www.w3.org/1999/xhtml", df = "http://www.w3.org/2000/svg", ff = "@attach", Al = !1;
var ao = Array.isArray, gf = Array.prototype.indexOf, ks = Array.from, Ko = Object.keys, wr = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, Ml = Object.getOwnPropertyDescriptors, Ol = Object.prototype, hf = Array.prototype, gi = Object.getPrototypeOf, va = Object.isExtensible;
function Hr(e) {
  return typeof e == "function";
}
const at = () => {
};
function vf(e) {
  return e();
}
function Zo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function pf() {
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
const Tt = 2, Es = 4, hi = 8, Dr = 16, kn = 32, Rn = 64, Ll = 128, Vt = 256, Yo = 512, ht = 1024, Ht = 2048, Bn = 4096, qt = 8192, sr = 16384, Ss = 32768, Ar = 65536, pa = 1 << 17, mf = 1 << 18, Mr = 1 << 19, Vl = 1 << 20, Xi = 1 << 21, Ns = 1 << 22, jn = 1 << 23, rn = Symbol("$state"), Ps = Symbol("legacy props"), yf = Symbol(""), $s = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), wf = 1, Ts = 3, _r = 8;
function _f() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Ds(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function xf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function bf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function kf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ef() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Sf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Nf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Pf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $f() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Tf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function co(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Df() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let we = !1;
function Pt(e) {
  we = e;
}
let Ne;
function vt(e) {
  if (e === null)
    throw co(), Xn;
  return Ne = e;
}
function bn() {
  return vt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ gn(Ne)
  );
}
function I(e) {
  if (we) {
    if (/* @__PURE__ */ gn(Ne) !== null)
      throw co(), Xn;
    Ne = e;
  }
}
function pe(e = 1) {
  if (we) {
    for (var t = e, n = Ne; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ gn(n);
    Ne = n;
  }
}
function ji() {
  for (var e = 0, t = Ne; ; ) {
    if (t.nodeType === _r) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Cs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Dl || n === bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(t)
    );
    t.remove(), t = r;
  }
}
function Hl(e) {
  if (!e || e.nodeType !== _r)
    throw co(), Xn;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Il(e) {
  return e === this.v;
}
function zl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rl(e) {
  return !zl(e, this.v);
}
let Or = !1, Af = !1;
function Mf() {
  Or = !0;
}
const Of = [];
function Bl(e, t = !1, n = !1) {
  return Lo(e, /* @__PURE__ */ new Map(), "", Of, null, n);
}
function Lo(e, t, n, r, o = null, i = !1) {
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
    if (ao(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = Lo(c, t, n, r, null, i));
      }
      return a;
    }
    if (gi(e) === Ol) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Lo(
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
      return Lo(
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
function Wo(e) {
  Fe = e;
}
function Vn(e) {
  return (
    /** @type {T} */
    Fl().get(e)
  );
}
function xr(e, t) {
  return Fl().set(e, t), t;
}
function ce(e, t = !1, n) {
  Fe = {
    p: Fe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Or && !t ? { s: null, u: null, $: [] } : null
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
      ic(r);
  }
  return e !== void 0 && (t.x = e), Fe = t.p, e ?? /** @type {T} */
  {};
}
function uo() {
  return !Or || Fe !== null && Fe.l === null;
}
function Fl(e) {
  return Fe === null && Ds(), Fe.c ??= new Map(Lf(Fe) || void 0);
}
function Lf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
const Vf = /* @__PURE__ */ new WeakMap();
function Hf(e) {
  var t = Ce;
  if (t === null)
    return Te.f |= jn, e;
  if ((t.f & Ss) === 0) {
    if ((t.f & Ll) === 0)
      throw !t.parent && e instanceof Error && ql(e), e;
    t.b.error(e);
  } else
    As(e, t);
}
function As(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ll) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && ql(e), e;
}
function ql(e) {
  const t = Vf.get(e);
  t && (wr(e, "message", {
    value: t.message
  }), wr(e, "stack", {
    value: t.stack
  }));
}
const If = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Yr = [], Wr = [];
function Kl() {
  var e = Yr;
  Yr = [], Zo(e);
}
function Zl() {
  var e = Wr;
  Wr = [], Zo(e);
}
function fo(e) {
  Yr.length === 0 && queueMicrotask(Kl), Yr.push(e);
}
function zf(e) {
  Wr.length === 0 && If(Zl), Wr.push(e);
}
function Rf() {
  Yr.length > 0 && Kl(), Wr.length > 0 && Zl();
}
function Bf(e) {
  let t = 0, n = er(0), r;
  return () => {
    Jf() && (u(n), ho(() => (t === 0 && (r = it(() => e(() => Kr(n)))), t += 1, () => {
      fo(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Kr(n));
      });
    })));
  };
}
function Ff() {
  for (var e = (
    /** @type {Effect} */
    Ce.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && _f(), e;
}
// @__NO_SIDE_EFFECTS__
function go(e) {
  var t = Tt | Ht, n = Te !== null && (Te.f & Tt) !== 0 ? (
    /** @type {Derived} */
    Te
  ) : null;
  return Ce === null || n !== null && (n.f & Vt) !== 0 ? t |= Vt : Ce.f |= Mr, {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: Il,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      rt
    ),
    wv: 0,
    parent: n ?? Ce,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function qf(e, t) {
  let n = (
    /** @type {Effect | null} */
    Ce
  );
  n === null && xf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = er(
    /** @type {V} */
    rt
  ), s = null, a = !Te;
  return eg(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (h) {
      l = Promise.reject(h);
    }
    var c = () => l;
    o = s?.then(c, c) ?? Promise.resolve(l), s = o;
    var d = (
      /** @type {Batch} */
      Xe
    ), g = r.pending;
    a && (r.update_pending_count(1), g || d.increment());
    const f = (h, v = void 0) => {
      s = null, g || d.activate(), v ? v !== $s && (i.f |= jn, Xr(i, v)) : ((i.f & jn) !== 0 && (i.f ^= jn), Xr(i, h)), a && (r.update_pending_count(-1), g || d.decrement()), jl();
    };
    if (o.then(f, (h) => f(null, h || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
  }), new Promise((l) => {
    function c(d) {
      function g() {
        d === o ? l(i) : c(o);
      }
      d.then(g, g);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function $(e) {
  const t = /* @__PURE__ */ go(e);
  return gc(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ms(e) {
  const t = /* @__PURE__ */ go(e);
  return t.equals = Rl, t;
}
function Yl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      _t(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Kf(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Tt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Os(e) {
  var t, n = Ce;
  un(Kf(e));
  try {
    Yl(e), t = mc(e);
  } finally {
    un(n);
  }
  return t;
}
function Wl(e) {
  var t = Os(e);
  if (e.equals(t) || (e.v = t, e.wv = vc()), !lr) {
    var n = (An || (e.f & Vt) !== 0) && e.deps !== null ? Bn : ht;
    kt(e, n);
  }
}
function Xl(e, t, n) {
  const r = uo() ? go : Ms;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = Xe, i = (
    /** @type {Effect} */
    Ce
  ), s = Zf(), a = Ff();
  Promise.all(t.map((l) => /* @__PURE__ */ qf(l))).then((l) => {
    o?.activate(), s();
    try {
      n([...e.map(r), ...l]);
    } catch (c) {
      (i.f & sr) === 0 && As(c, i);
    }
    o?.deactivate(), jl();
  }).catch((l) => {
    a.error(l);
  });
}
function Zf() {
  var e = Ce, t = Te, n = Fe, r = Xe;
  return function() {
    un(e), cn(t), Wo(n), r?.activate();
  };
}
function jl() {
  un(null), cn(null), Wo(null);
}
const Ai = /* @__PURE__ */ new Set();
let Xe = null, ma = /* @__PURE__ */ new Set(), Xo = [];
function Gl() {
  const e = (
    /** @type {() => void} */
    Xo.shift()
  );
  Xo.length > 0 && queueMicrotask(Gl), e();
}
let Jn = [], vi = null, Gi = !1, Vo = !1;
class Qn {
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
  #t = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #o = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #u = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #i = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #a = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #d = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #f = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    Jn = [];
    for (const o of t)
      this.#h(o);
    if (this.#i.length === 0 && this.#n === 0) {
      this.#g();
      var n = this.#s, r = this.#r;
      this.#s = [], this.#r = [], this.#l = [], Xe = null, ya(n), ya(r), Xe === null ? Xe = this : Ai.delete(this), this.#o?.resolve();
    } else
      this.#c(this.#s), this.#c(this.#r), this.#c(this.#l);
    for (const o of this.#i)
      hr(o);
    for (const o of this.#a)
      hr(o);
    this.#i = [], this.#a = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #h(t) {
    t.f ^= ht;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (kn | Rn)) !== 0, i = o && (r & ht) !== 0, s = i || (r & qt) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (o)
          n.f ^= ht;
        else if ((r & Es) !== 0)
          this.#r.push(n);
        else if ((r & ht) === 0)
          if ((r & Ns) !== 0) {
            var a = n.b?.pending ? this.#a : this.#i;
            a.push(n);
          } else mi(n) && ((n.f & Dr) !== 0 && this.#l.push(n), hr(n));
        var l = n.first;
        if (l !== null) {
          n = l;
          continue;
        }
      }
      var c = n.parent;
      for (n = n.next; n === null && c !== null; )
        n = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #c(t) {
    for (const n of t)
      ((n.f & Ht) !== 0 ? this.#d : this.#f).push(n), kt(n, ht);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v);
  }
  activate() {
    Xe = this;
  }
  deactivate() {
    Xe = null;
    for (const t of ma)
      if (ma.delete(t), t(), Xe !== null)
        break;
  }
  neuter() {
    this.#u = !0;
  }
  flush() {
    Jn.length > 0 ? Ul() : this.#g(), Xe === this && (this.#n === 0 && Ai.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #g() {
    if (!this.#u)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    if (this.#n -= 1, this.#n === 0) {
      for (const t of this.#d)
        kt(t, Ht), br(t);
      for (const t of this.#f)
        kt(t, Bn), br(t);
      this.#s = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#o ??= pf()).promise;
  }
  static ensure() {
    if (Xe === null) {
      const t = Xe = new Qn();
      Ai.add(Xe), Vo || Qn.enqueue(() => {
        Xe === t && t.flush();
      });
    }
    return Xe;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Xo.length === 0 && queueMicrotask(Gl), Xo.unshift(t);
  }
}
function m(e) {
  var t = Vo;
  Vo = !0;
  try {
    for (var n; ; ) {
      if (Rf(), Jn.length === 0 && (Xe?.flush(), Jn.length === 0))
        return vi = null, /** @type {T} */
        n;
      Ul();
    }
  } finally {
    Vo = t;
  }
}
function Ul() {
  var e = gr;
  Gi = !0;
  try {
    var t = 0;
    for (ba(!0); Jn.length > 0; ) {
      var n = Qn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Yf();
      }
      n.process(Jn), Ln.clear();
    }
  } finally {
    Gi = !1, ba(e), vi = null;
  }
}
function Yf() {
  try {
    Ef();
  } catch (e) {
    As(e, vi);
  }
}
let Zn = null;
function ya(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (sr | qt)) === 0 && mi(r) && (Zn = [], hr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? uc(r) : r.fn = null), Zn?.length > 0)) {
        Ln.clear();
        for (const o of Zn)
          hr(o);
        Zn = [];
      }
    }
    Zn = null;
  }
}
function br(e) {
  for (var t = vi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Gi && t === Ce && (n & Dr) !== 0)
      return;
    if ((n & (Rn | kn)) !== 0) {
      if ((n & ht) === 0) return;
      t.f ^= ht;
    }
  }
  Jn.push(t);
}
const Ln = /* @__PURE__ */ new Map();
function er(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Il,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  const n = er(e);
  return gc(n), n;
}
// @__NO_SIDE_EFFECTS__
function Jl(e, t = !1, n = !0) {
  const r = er(e);
  return t || (r.equals = Rl), Or && n && Fe !== null && Fe.l !== null && (Fe.l.s ??= []).push(r), r;
}
function j(e, t, n = !1) {
  Te !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Bt || (Te.f & pa) !== 0) && uo() && (Te.f & (Tt | Dr | Ns | pa)) !== 0 && !xn?.includes(e) && Tf();
  let r = n ? Lt(t) : t;
  return Xr(e, r);
}
function Xr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    lr ? Ln.set(e, t) : Ln.set(e, n), e.v = t;
    var r = Qn.ensure();
    r.capture(e, n), (e.f & Tt) !== 0 && ((e.f & Ht) !== 0 && Os(
      /** @type {Derived} */
      e
    ), kt(e, (e.f & Vt) === 0 ? ht : Bn)), e.wv = vc(), Ql(e, Ht), uo() && Ce !== null && (Ce.f & ht) !== 0 && (Ce.f & (kn | Rn)) === 0 && (Mt === null ? ng([e]) : Mt.push(e));
  }
  return t;
}
function wa(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return j(e, n), r;
}
function Kr(e) {
  j(e, e.v + 1);
}
function Ql(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = uo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ce)) {
        var l = (a & Ht) === 0;
        l && kt(s, t), (a & Tt) !== 0 ? Ql(
          /** @type {Derived} */
          s,
          Bn
        ) : l && ((a & Dr) !== 0 && Zn !== null && Zn.push(
          /** @type {Effect} */
          s
        ), br(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Lt(e) {
  if (typeof e != "object" || e === null || rn in e)
    return e;
  const t = gi(e);
  if (t !== Ol && t !== hf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ao(e), o = /* @__PURE__ */ Se(0), i = Gn, s = (a) => {
    if (Gn === i)
      return a();
    var l = Te, c = Gn;
    cn(null), ka(i);
    var d = a();
    return cn(l), ka(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Pf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var g = /* @__PURE__ */ Se(c.value);
          return n.set(l, g), g;
        }) : j(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Se(rt));
            n.set(l, d), Kr(o);
          }
        } else
          j(c, rt), Kr(o);
        return !0;
      },
      get(a, l, c) {
        if (l === rn)
          return e;
        var d = n.get(l), g = l in a;
        if (d === void 0 && (!g || _n(a, l)?.writable) && (d = s(() => {
          var h = Lt(g ? a[l] : rt), v = /* @__PURE__ */ Se(h);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === rt ? void 0 : f;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var g = n.get(l), f = g?.v;
          if (g !== void 0 && f !== rt)
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
        if (l === rn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== rt || Reflect.has(a, l);
        if (c !== void 0 || Ce !== null && (!d || _n(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Lt(a[l]) : rt, h = /* @__PURE__ */ Se(f);
            return h;
          }), n.set(l, c));
          var g = u(c);
          if (g === rt)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var g = n.get(l), f = l in a;
        if (r && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          g.v; h += 1) {
            var v = n.get(h + "");
            v !== void 0 ? j(v, rt) : h in a && (v = s(() => /* @__PURE__ */ Se(rt)), n.set(h + "", v));
          }
        if (g === void 0)
          (!f || _n(a, l)?.writable) && (g = s(() => /* @__PURE__ */ Se(void 0)), j(g, Lt(c)), n.set(l, g));
        else {
          f = g.v !== rt;
          var p = s(() => Lt(c));
          j(g, p);
        }
        var x = Reflect.getOwnPropertyDescriptor(a, l);
        if (x?.set && x.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= w.v && j(w, S + 1);
          }
          Kr(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((g) => {
          var f = n.get(g);
          return f === void 0 || f.v !== rt;
        });
        for (var [c, d] of n)
          d.v !== rt && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        $f();
      }
    }
  );
}
function _a(e) {
  try {
    if (e !== null && typeof e == "object" && rn in e)
      return e[rn];
  } catch {
  }
  return e;
}
function Wf(e, t) {
  return Object.is(_a(e), _a(t));
}
var xt, ec, tc, nc;
function Ui() {
  if (xt === void 0) {
    xt = window, ec = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    tc = _n(t, "firstChild").get, nc = _n(t, "nextSibling").get, va(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), va(n) && (n.__t = void 0);
  }
}
function It(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return tc.call(e);
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return nc.call(e);
}
function z(e, t) {
  if (!we)
    return /* @__PURE__ */ Je(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(Ne)
  );
  if (n === null)
    n = Ne.appendChild(It());
  else if (t && n.nodeType !== Ts) {
    var r = It();
    return n?.before(r), vt(r), r;
  }
  return vt(n), n;
}
function ie(e, t) {
  if (!we) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Je(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ gn(n) : n;
  }
  return Ne;
}
function V(e, t = 1, n = !1) {
  let r = we ? Ne : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ gn(r);
  if (!we)
    return r;
  if (n && r?.nodeType !== Ts) {
    var i = It();
    return r === null ? o?.after(i) : r.before(i), vt(i), i;
  }
  return vt(r), /** @type {TemplateNode} */
  r;
}
function Ls(e) {
  e.textContent = "";
}
function Vs() {
  return !1;
}
function Xf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, fo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function jf(e) {
  we && /* @__PURE__ */ Je(e) !== null && Ls(e);
}
let xa = !1;
function Gf() {
  xa || (xa = !0, document.addEventListener(
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
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Hs(e) {
  var t = Te, n = Ce;
  cn(null), un(null);
  try {
    return e();
  } finally {
    cn(t), un(n);
  }
}
function rc(e) {
  Ce === null && Te === null && kf(), Te !== null && (Te.f & Vt) !== 0 && Ce === null && Cf(), lr && bf();
}
function Uf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Wt(e, t, n, r = !0) {
  var o = Ce;
  o !== null && (o.f & qt) !== 0 && (e |= qt);
  var i = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ht,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    b: o && o.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      hr(i), i.f |= Ss;
    } catch (l) {
      throw _t(i), l;
    }
  else t !== null && br(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Mr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && Uf(s, o), Te !== null && (Te.f & Tt) !== 0 && (e & Rn) === 0)) {
      var a = (
        /** @type {Derived} */
        Te
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function Jf() {
  return Te !== null && !Bt;
}
function oc(e) {
  const t = Wt(hi, null, !1);
  return kt(t, ht), t.teardown = e, t;
}
function Ze(e) {
  rc();
  var t = (
    /** @type {Effect} */
    Ce.f
  ), n = !Te && (t & kn) !== 0 && (t & Ss) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Fe
    );
    (r.e ??= []).push(e);
  } else
    return ic(e);
}
function ic(e) {
  return Wt(Es | Vl, e, !1);
}
function sc(e) {
  return rc(), Wt(hi | Vl, e, !0);
}
function Is(e) {
  Qn.ensure();
  const t = Wt(Rn | Mr, e, !0);
  return () => {
    _t(t);
  };
}
function Qf(e) {
  Qn.ensure();
  const t = Wt(Rn | Mr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? vo(t, () => {
      _t(t), r(void 0);
    }) : (_t(t), r(void 0));
  });
}
function Lr(e) {
  return Wt(Es, e, !1);
}
function eg(e) {
  return Wt(Ns | Mr, e, !0);
}
function ho(e, t = 0) {
  return Wt(hi | t, e, !0);
}
function _e(e, t = [], n = []) {
  Xl(t, n, (r) => {
    Wt(hi, () => e(...r.map(u)), !0);
  });
}
function ar(e, t = 0) {
  var n = Wt(Dr | t, e, !0);
  return n;
}
function Kt(e, t = !0) {
  return Wt(kn | Mr, e, !0, t);
}
function ac(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = lr, r = Te;
    Ca(!0), cn(null);
    try {
      t.call(null);
    } finally {
      Ca(n), cn(r);
    }
  }
}
function lc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Hs(() => {
      o.abort($s);
    });
    var r = n.next;
    (n.f & Rn) !== 0 ? n.parent = null : _t(n, t), n = r;
  }
}
function tg(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & kn) === 0 && _t(t), t = n;
  }
}
function _t(e, t = !0) {
  var n = !1;
  (t || (e.f & mf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (cc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), lc(e, t && !n), jo(e, 0), kt(e, sr);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  ac(e);
  var o = e.parent;
  o !== null && o.first !== null && uc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function cc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(e)
    );
    e.remove(), e = n;
  }
}
function uc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function vo(e, t) {
  var n = [];
  zs(e, n, !0), dc(n, () => {
    _t(e), t && t();
  });
}
function dc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function zs(e, t, n) {
  if ((e.f & qt) === 0) {
    if (e.f ^= qt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Ar) !== 0 || (r.f & kn) !== 0;
      zs(r, t, i ? n : !1), r = o;
    }
  }
}
function pi(e) {
  fc(e, !0);
}
function fc(e, t) {
  if ((e.f & qt) !== 0) {
    e.f ^= qt, (e.f & ht) === 0 && (kt(e, Ht), br(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Ar) !== 0 || (n.f & kn) !== 0;
      fc(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let gr = !1;
function ba(e) {
  gr = e;
}
let lr = !1;
function Ca(e) {
  lr = e;
}
let Te = null, Bt = !1;
function cn(e) {
  Te = e;
}
let Ce = null;
function un(e) {
  Ce = e;
}
let xn = null;
function gc(e) {
  Te !== null && (xn === null ? xn = [e] : xn.push(e));
}
let wt = null, Nt = 0, Mt = null;
function ng(e) {
  Mt = e;
}
let hc = 1, jr = 0, Gn = jr;
function ka(e) {
  Gn = e;
}
let An = !1;
function vc() {
  return ++hc;
}
function mi(e) {
  var t = e.f;
  if ((t & Ht) !== 0)
    return !0;
  if ((t & Bn) !== 0) {
    var n = e.deps, r = (t & Vt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Yo) !== 0, a = r && Ce !== null && !An, l = n.length;
      if ((s || a) && (Ce === null || (Ce.f & sr) === 0)) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        s && (c.f ^= Yo), a && d !== null && (d.f & Vt) === 0 && (c.f ^= Vt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], mi(
          /** @type {Derived} */
          i
        ) && Wl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ce !== null && !An) && kt(e, ht);
  }
  return !1;
}
function pc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !xn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Tt) !== 0 ? pc(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? kt(i, Ht) : (i.f & ht) !== 0 && kt(i, Bn), br(
        /** @type {Effect} */
        i
      ));
    }
}
function mc(e) {
  var t = wt, n = Nt, r = Mt, o = Te, i = An, s = xn, a = Fe, l = Bt, c = Gn, d = e.f;
  wt = /** @type {null | Value[]} */
  null, Nt = 0, Mt = null, An = (d & Vt) !== 0 && (Bt || !gr || Te === null), Te = (d & (kn | Rn)) === 0 ? e : null, xn = null, Wo(e.ctx), Bt = !1, Gn = ++jr, e.ac !== null && (Hs(() => {
    e.ac.abort($s);
  }), e.ac = null);
  try {
    e.f |= Xi;
    var g = (
      /** @type {Function} */
      e.fn
    ), f = g(), h = e.deps;
    if (wt !== null) {
      var v;
      if (jo(e, Nt), h !== null && Nt > 0)
        for (h.length = Nt + wt.length, v = 0; v < wt.length; v++)
          h[Nt + v] = wt[v];
      else
        e.deps = h = wt;
      if (!An || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Tt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (v = Nt; v < h.length; v++)
          (h[v].reactions ??= []).push(e);
    } else h !== null && Nt < h.length && (jo(e, Nt), h.length = Nt);
    if (uo() && Mt !== null && !Bt && h !== null && (e.f & (Tt | Bn | Ht)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Mt.length; v++)
        pc(
          Mt[v],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (jr++, Mt !== null && (r === null ? r = Mt : r.push(.../** @type {Source[]} */
    Mt))), (e.f & jn) !== 0 && (e.f ^= jn), f;
  } catch (p) {
    return Hf(p);
  } finally {
    e.f ^= Xi, wt = t, Nt = n, Mt = r, Te = o, An = i, xn = s, Wo(a), Bt = l, Gn = c;
  }
}
function rg(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = gf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Tt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (wt === null || !wt.includes(t)) && (kt(t, Bn), (t.f & (Vt | Yo)) === 0 && (t.f ^= Yo), Yl(
    /** @type {Derived} **/
    t
  ), jo(
    /** @type {Derived} **/
    t,
    0
  ));
}
function jo(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      rg(e, n[r]);
}
function hr(e) {
  var t = e.f;
  if ((t & sr) === 0) {
    kt(e, ht);
    var n = Ce, r = gr;
    Ce = e, gr = !0;
    try {
      (t & Dr) !== 0 ? tg(e) : lc(e), ac(e);
      var o = mc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = hc;
      var i;
      Al && Af && (e.f & Ht) !== 0 && e.deps;
    } finally {
      gr = r, Ce = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & Tt) !== 0;
  if (Te !== null && !Bt) {
    var r = Ce !== null && (Ce.f & sr) !== 0;
    if (!r && !xn?.includes(e)) {
      var o = Te.deps;
      if ((Te.f & Xi) !== 0)
        e.rv < jr && (e.rv = jr, wt === null && o !== null && o[Nt] === e ? Nt++ : wt === null ? wt = [e] : (!An || !wt.includes(e)) && wt.push(e));
      else {
        (Te.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Te] : i.includes(Te) || i.push(Te);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && (a.f & Vt) === 0 && (s.f ^= Vt);
  }
  if (lr) {
    if (Ln.has(e))
      return Ln.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & ht) === 0 && s.reactions !== null || yc(s)) && (l = Os(s)), Ln.set(s, l), l;
    }
  } else n && (s = /** @type {Derived} */
  e, mi(s) && Wl(s));
  if ((e.f & jn) !== 0)
    throw e.v;
  return e.v;
}
function yc(e) {
  if (e.v === rt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ln.has(t) || (t.f & Tt) !== 0 && yc(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function it(e) {
  var t = Bt;
  try {
    return Bt = !0, e();
  } finally {
    Bt = t;
  }
}
const og = -7169;
function kt(e, t) {
  e.f = e.f & og | t;
}
function ig(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Rs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (rn in e)
      Ji(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && rn in n && Ji(n);
      }
  }
}
function Ji(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ji(e[r], t);
      } catch {
      }
    const n = gi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ml(n);
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
const wc = /* @__PURE__ */ new Set(), Qi = /* @__PURE__ */ new Set();
function Bs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Rr.call(t, i), !i.cancelBubble)
      return Hs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? fo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function es(e, t, n, r = {}) {
  var o = Bs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Ea(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Bs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && oc(() => {
    t.removeEventListener(e, s, i);
  });
}
function En(e) {
  for (var t = 0; t < e.length; t++)
    wc.add(e[t]);
  for (var n of Qi)
    n(e);
}
let Sa = null;
function Rr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Sa = e;
  var s = 0, a = Sa === e && e.__root;
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
    wr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Te, g = Ce;
    cn(null), un(null);
    try {
      for (var f, h = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          if (p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (ao(p)) {
              var [x, ...w] = p;
              x.apply(i, [e, ...w]);
            } else
              p.call(i, e);
        } catch (S) {
          f ? h.push(S) : f = S;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let S of h)
          queueMicrotask(() => {
            throw S;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, cn(d), un(g);
    }
  }
}
function Fs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Et(e, t) {
  var n = (
    /** @type {Effect} */
    Ce
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var n = (t & Tl) !== 0, r = (t & cf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (we)
      return Et(Ne, null), Ne;
    o === void 0 && (o = Fs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Je(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ec ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Et(a, l);
    } else
      Et(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function sg(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Tl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (we)
      return Et(Ne, null), Ne;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Fs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Je(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Je(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Je(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Je(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(c)
      ), g = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Et(d, g);
    } else
      Et(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return /* @__PURE__ */ sg(e, t, "svg");
}
function xe(e = "") {
  if (!we) {
    var t = It(e + "");
    return Et(t, t), t;
  }
  var n = Ne;
  return n.nodeType !== Ts && (n.before(n = It()), vt(n)), Et(n, n), n;
}
function Ee() {
  if (we)
    return Et(Ne, null), Ne;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = It();
  return e.append(t, n), Et(t, n), e;
}
function O(e, t) {
  if (we) {
    Ce.nodes_end = Ne, bn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ag(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const lg = [
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
function cg(e) {
  return lg.includes(e);
}
const ug = {
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
function dg(e) {
  return e = e.toLowerCase(), ug[e] ?? e;
}
const fg = ["touchstart", "touchmove"];
function gg(e) {
  return fg.includes(e);
}
const hg = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function vg(e) {
  return hg.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function ze(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function _c(e, t) {
  return xc(e, t);
}
function pg(e, t) {
  Ui(), t.intro = t.intro ?? !1;
  const n = t.target, r = we, o = Ne;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(n)
    ); i && (i.nodeType !== _r || /** @type {Comment} */
    i.data !== Dl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ gn(i);
    if (!i)
      throw Xn;
    Pt(!0), vt(
      /** @type {Comment} */
      i
    ), bn();
    const s = xc(e, { ...t, anchor: i });
    if (Ne === null || Ne.nodeType !== _r || /** @type {Comment} */
    Ne.data !== Cs)
      throw co(), Xn;
    return Pt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Xn && console.warn("Failed to hydrate: ", s), t.recover === !1 && Sf(), Ui(), Ls(n), Pt(!1), _c(e, t);
  } finally {
    Pt(r), vt(o);
  }
}
const ur = /* @__PURE__ */ new Map();
function xc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ui();
  var a = /* @__PURE__ */ new Set(), l = (g) => {
    for (var f = 0; f < g.length; f++) {
      var h = g[f];
      if (!a.has(h)) {
        a.add(h);
        var v = gg(h);
        t.addEventListener(h, Rr, { passive: v });
        var p = ur.get(h);
        p === void 0 ? (document.addEventListener(h, Rr, { passive: v }), ur.set(h, 1)) : ur.set(h, p + 1);
      }
    }
  };
  l(ks(wc)), Qi.add(l);
  var c = void 0, d = Qf(() => {
    var g = n ?? t.appendChild(It());
    return Kt(() => {
      if (i) {
        ce({});
        var f = (
          /** @type {ComponentContext} */
          Fe
        );
        f.c = i;
      }
      o && (r.$$events = o), we && Et(
        /** @type {TemplateNode} */
        g,
        null
      ), c = e(g, r) || {}, we && (Ce.nodes_end = Ne), i && ue();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Rr);
        var h = (
          /** @type {number} */
          ur.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, Rr), ur.delete(f)) : ur.set(f, h);
      }
      Qi.delete(l), g !== n && g.parentNode?.removeChild(g);
    };
  });
  return ts.set(c, d), c;
}
let ts = /* @__PURE__ */ new WeakMap();
function mg(e, t) {
  const n = ts.get(e);
  return n ? (ts.delete(e), n(t)) : Promise.resolve();
}
function Ye(e, t, ...n) {
  var r = e, o = at, i;
  ar(() => {
    o !== (o = t()) && (i && (_t(i), i = null), i = Kt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Ar), we && (r = Ne);
}
function Fn(e) {
  Fe === null && Ds(), Or && Fe.l !== null ? yg(Fe).m.push(e) : Ze(() => {
    const t = it(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function yi(e) {
  Fe === null && Ds(), Fn(() => () => it(e));
}
function yg(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function le(e, t, n = !1) {
  we && bn();
  var r = e, o = null, i = null, s = rt, a = n ? Ar : 0, l = !1;
  const c = (h, v = !0) => {
    l = !0, f(v, h);
  };
  var d = null;
  function g() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var h = s ? o : i, v = s ? i : o;
    h && pi(h), v && vo(v, () => {
      s ? i = null : o = null;
    });
  }
  const f = (h, v) => {
    if (s === (s = h)) return;
    let p = !1;
    if (we) {
      const N = Hl(r) === bs;
      !!s === N && (r = ji(), vt(r), Pt(!1), p = !0);
    }
    var x = Vs(), w = r;
    if (x && (d = document.createDocumentFragment(), d.append(w = It())), s ? o ??= v && Kt(() => v(w)) : i ??= v && Kt(() => v(w)), x) {
      var S = (
        /** @type {Batch} */
        Xe
      ), b = s ? o : i, E = s ? i : o;
      b && S.skipped_effects.delete(b), E && S.skipped_effects.add(E), S.add_callback(g);
    } else
      g();
    p && Pt(!0);
  };
  ar(() => {
    l = !1, t(c), l || f(null, null);
  }, a), we && (r = Ne);
}
function wg(e, t) {
  we && vt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(e)
  ), ho(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Cr(e, t) {
  return t;
}
function _g(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    zs(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ls(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Qt(e, t[0].prev, t[i - 1].next);
  }
  dc(o, () => {
    for (var c = 0; c < i; c++) {
      var d = t[c];
      a || (r.delete(d.k), Qt(e, d.prev, d.next)), _t(d.e, !a);
    }
  });
}
function pt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Pl) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = we ? vt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Je(c)
    ) : c.appendChild(It());
  }
  we && bn();
  var d = null, g = !1, f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Ms(() => {
    var w = n();
    return ao(w) ? w : w == null ? [] : ks(w);
  }), v, p;
  function x() {
    xg(
      p,
      v,
      a,
      f,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (v.length === 0 ? d ? pi(d) : d = Kt(() => i(s)) : d !== null && vo(d, () => {
      d = null;
    }));
  }
  ar(() => {
    p ??= /** @type {Effect} */
    Ce, v = /** @type {V[]} */
    u(h);
    var w = v.length;
    if (g && w === 0)
      return;
    g = w === 0;
    let S = !1;
    if (we) {
      var b = Hl(s) === bs;
      b !== (w === 0) && (s = ji(), vt(s), Pt(!1), S = !0);
    }
    if (we) {
      for (var E = null, N, T = 0; T < w; T++) {
        if (Ne.nodeType === _r && /** @type {Comment} */
        Ne.data === Cs) {
          s = /** @type {Comment} */
          Ne, S = !0, Pt(!1);
          break;
        }
        var D = v[T], H = r(D, T);
        N = ns(
          Ne,
          a,
          E,
          null,
          D,
          H,
          T,
          o,
          t,
          n
        ), a.items.set(H, N), E = N;
      }
      w > 0 && vt(ji());
    }
    if (we)
      w === 0 && i && (d = Kt(() => i(s)));
    else if (Vs()) {
      var F = /* @__PURE__ */ new Set(), X = (
        /** @type {Batch} */
        Xe
      );
      for (T = 0; T < w; T += 1) {
        D = v[T], H = r(D, T);
        var G = a.items.get(H) ?? f.get(H);
        G ? (t & (di | fi)) !== 0 && bc(G, D, T, t) : (N = ns(
          null,
          a,
          null,
          null,
          D,
          H,
          T,
          o,
          t,
          n,
          !0
        ), f.set(H, N)), F.add(H);
      }
      for (const [C, k] of a.items)
        F.has(C) || X.skipped_effects.add(k.e);
      X.add_callback(x);
    } else
      x();
    S && Pt(!0), u(h);
  }), we && (s = Ne);
}
function xg(e, t, n, r, o, i, s, a, l) {
  var c = (s & nf) !== 0, d = (s & (di | fi)) !== 0, g = t.length, f = n.items, h = n.first, v = h, p, x = null, w, S = [], b = [], E, N, T, D;
  if (c)
    for (D = 0; D < g; D += 1)
      E = t[D], N = a(E, D), T = f.get(N), T !== void 0 && (T.a?.measure(), (w ??= /* @__PURE__ */ new Set()).add(T));
  for (D = 0; D < g; D += 1) {
    if (E = t[D], N = a(E, D), T = f.get(N), T === void 0) {
      var H = r.get(N);
      if (H !== void 0) {
        r.delete(N), f.set(N, H);
        var F = x ? x.next : v;
        Qt(n, x, H), Qt(n, H, F), Mi(H, F, o), x = H;
      } else {
        var X = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : o;
        x = ns(
          X,
          n,
          x,
          x === null ? n.first : x.next,
          E,
          N,
          D,
          i,
          s,
          l
        );
      }
      f.set(N, x), S = [], b = [], v = x.next;
      continue;
    }
    if (d && bc(T, E, D, s), (T.e.f & qt) !== 0 && (pi(T.e), c && (T.a?.unfix(), (w ??= /* @__PURE__ */ new Set()).delete(T))), T !== v) {
      if (p !== void 0 && p.has(T)) {
        if (S.length < b.length) {
          var G = b[0], C;
          x = G.prev;
          var k = S[0], _ = S[S.length - 1];
          for (C = 0; C < S.length; C += 1)
            Mi(S[C], G, o);
          for (C = 0; C < b.length; C += 1)
            p.delete(b[C]);
          Qt(n, k.prev, _.next), Qt(n, x, k), Qt(n, _, G), v = G, x = _, D -= 1, S = [], b = [];
        } else
          p.delete(T), Mi(T, v, o), Qt(n, T.prev, T.next), Qt(n, T, x === null ? n.first : x.next), Qt(n, x, T), x = T;
        continue;
      }
      for (S = [], b = []; v !== null && v.k !== N; )
        (v.e.f & qt) === 0 && (p ??= /* @__PURE__ */ new Set()).add(v), b.push(v), v = v.next;
      if (v === null)
        continue;
      T = v;
    }
    S.push(T), x = T, v = T.next;
  }
  if (v !== null || p !== void 0) {
    for (var P = p === void 0 ? [] : ks(p); v !== null; )
      (v.e.f & qt) === 0 && P.push(v), v = v.next;
    var A = P.length;
    if (A > 0) {
      var M = (s & Pl) !== 0 && g === 0 ? o : null;
      if (c) {
        for (D = 0; D < A; D += 1)
          P[D].a?.measure();
        for (D = 0; D < A; D += 1)
          P[D].a?.fix();
      }
      _g(n, P, M);
    }
  }
  c && fo(() => {
    if (w !== void 0)
      for (T of w)
        T.a?.apply();
  }), e.first = n.first && n.first.e, e.last = x && x.e;
  for (var R of r.values())
    _t(R.e);
  r.clear();
}
function bc(e, t, n, r) {
  (r & di) !== 0 && Xr(e.v, t), (r & fi) !== 0 ? Xr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ns(e, t, n, r, o, i, s, a, l, c, d) {
  var g = (l & di) !== 0, f = (l & rf) === 0, h = g ? f ? /* @__PURE__ */ Jl(o, !1, !1) : er(o) : o, v = (l & fi) === 0 ? s : er(s), p = {
    i: v,
    v: h,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var x = document.createDocumentFragment();
      x.append(e = It());
    }
    return p.e = Kt(() => a(
      /** @type {Node} */
      e,
      h,
      v,
      c
    ), we), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? d || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Mi(e, t, n) {
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
      /* @__PURE__ */ gn(i)
    );
    o.before(i), i = s;
  }
}
function Qt(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function qs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  _e(() => {
    var a = (
      /** @type {Effect} */
      Ce
    );
    if (s === (s = t() ?? "")) {
      we && bn();
      return;
    }
    if (a.nodes_start !== null && (cc(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (we) {
        Ne.data;
        for (var l = bn(), c = l; l !== null && (l.nodeType !== _r || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ gn(l);
        if (l === null)
          throw co(), Xn;
        Et(Ne, c), i = vt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var g = Fs(d);
      if ((n || r) && (g = /** @type {Element} */
      /* @__PURE__ */ Je(g)), Et(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Je(g); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Je(g)
          );
      else
        i.before(g);
    }
  });
}
function Ks(e, t, n) {
  we && bn();
  var r = e, o, i, s = null, a = null;
  function l() {
    i && (vo(i), i = null), s && (s.lastChild.remove(), r.before(s), s = null), i = a, a = null;
  }
  ar(() => {
    if (o !== (o = t())) {
      var c = Vs();
      if (o) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = It()), i && Xe.skipped_effects.add(i)), a = Kt(() => n(d, o));
      }
      c ? Xe.add_callback(l) : l();
    }
  }, Ar), we && (r = Ne);
}
function bg(e, t, n, r, o, i) {
  let s = we;
  we && bn();
  var a, l, c = null;
  we && Ne.nodeType === wf && (c = /** @type {Element} */
  Ne, bn());
  var d = (
    /** @type {TemplateNode} */
    we ? Ne : e
  ), g;
  ar(() => {
    const f = t() || null;
    var h = f === "svg" ? df : null;
    f !== a && (g && (f === null ? vo(g, () => {
      g = null, l = null;
    }) : f === l ? pi(g) : _t(g)), f && f !== l && (g = Kt(() => {
      if (c = we ? (
        /** @type {Element} */
        c
      ) : h ? document.createElementNS(h, f) : document.createElement(f), Et(c, c), r) {
        we && vg(f) && c.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          we ? /* @__PURE__ */ Je(c) : c.appendChild(It())
        );
        we && (v === null ? Pt(!1) : vt(v)), r(c, v);
      }
      Ce.nodes_end = c, d.before(c);
    })), a = f, a && (l = a));
  }, Ar), s && (Pt(!0), vt(d));
}
function Ae(e, t) {
  Lr(() => {
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
function gt(e, t, n) {
  Lr(() => {
    var r = it(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      ho(() => {
        var s = n();
        Rs(s), o && zl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Cg(e, t) {
  var n = void 0, r;
  ar(() => {
    n !== (n = t()) && (r && (_t(r), r = null), n && (r = Kt(() => {
      Lr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Cc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Cc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function kg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Cc(e)) && (r && (r += " "), r += t);
  return r;
}
function Sn(e) {
  return typeof e == "object" ? kg(e) : e ?? "";
}
const Na = [...` 	
\r\f \v\uFEFF`];
function Eg(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Na.includes(r[s - 1])) && (a === r.length || Na.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Pa(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Oi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Sg(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Oi)), o && l.push(...Object.keys(o).map(Oi));
      var c = 0, d = -1;
      const p = e.length;
      for (var g = 0; g < p; g++) {
        var f = e[g];
        if (a ? f === "/" && e[g - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[g + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = g;
          else if (f === ";" || g === p - 1) {
            if (d !== -1) {
              var h = Oi(e.substring(c, d).trim());
              if (!l.includes(h)) {
                f !== ";" && g++;
                var v = e.substring(c, g).trim();
                n += " " + v + ";";
              }
            }
            c = g + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Pa(r)), o && (n += Pa(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function St(e, t, n, r, o, i) {
  var s = e.__className;
  if (we || s !== n || s === void 0) {
    var a = Eg(n, r, i);
    (!we || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Li(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function lt(e, t, n, r) {
  var o = e.__style;
  if (we || o !== t) {
    var i = Sg(t, r);
    (!we || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Li(e, n?.[0], r[0]), Li(e, n?.[1], r[1], "important")) : Li(e, n, r));
  return r;
}
function rs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ao(t))
      return Df();
    for (var r of e.options)
      r.selected = t.includes($a(r));
    return;
  }
  for (r of e.options) {
    var o = $a(r);
    if (Wf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Ng(e) {
  var t = new MutationObserver(() => {
    rs(e, e.__value);
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
  }), oc(() => {
    t.disconnect();
  });
}
function $a(e) {
  return "__value" in e ? e.__value : e.value;
}
const Dn = Symbol("class"), tn = Symbol("style"), kc = Symbol("is custom element"), Ec = Symbol("is html");
function on(e) {
  if (we) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ye(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ye(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, zf(n), Gf();
  }
}
function Ho(e, t) {
  var n = wi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function os(e, t) {
  var n = wi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Pg(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ye(e, t, n, r) {
  var o = wi(e);
  we && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[yf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Sc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function $g(e, t, n, r, o = !1) {
  var i = wi(e), s = i[kc], a = !i[Ec];
  let l = we && s;
  l && Pt(!1);
  var c = t || {}, d = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = Sn(n.class) : (r || n[Dn]) && (n.class = null), n[tn] && (n.style ??= null);
  var f = Sc(e);
  for (const b in n) {
    let E = n[b];
    if (d && b === "value" && E == null) {
      e.value = e.__value = "", c[b] = E;
      continue;
    }
    if (b === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      St(e, h, E, r, t?.[Dn], n[Dn]), c[b] = E, c[Dn] = n[Dn];
      continue;
    }
    if (b === "style") {
      lt(e, E, t?.[tn], n[tn]), c[b] = E, c[tn] = n[tn];
      continue;
    }
    var v = c[b];
    if (!(E === v && !(E === void 0 && e.hasAttribute(b)))) {
      c[b] = E;
      var p = b[0] + b[1];
      if (p !== "$$")
        if (p === "on") {
          const N = {}, T = "$$" + b;
          let D = b.slice(2);
          var x = cg(D);
          if (ag(D) && (D = D.slice(0, -7), N.capture = !0), !x && v) {
            if (E != null) continue;
            e.removeEventListener(D, c[T], N), c[T] = null;
          }
          if (E != null)
            if (x)
              e[`__${D}`] = E, En([D]);
            else {
              let H = function(F) {
                c[b].call(this, F);
              };
              c[T] = Bs(D, e, H, N);
            }
          else x && (e[`__${D}`] = void 0);
        } else if (b === "style")
          ye(e, b, E);
        else if (b === "autofocus")
          Xf(
            /** @type {HTMLElement} */
            e,
            !!E
          );
        else if (!s && (b === "__value" || b === "value" && E != null))
          e.value = e.__value = E;
        else if (b === "selected" && d)
          Pg(
            /** @type {HTMLOptionElement} */
            e,
            E
          );
        else {
          var w = b;
          a || (w = dg(w));
          var S = w === "defaultValue" || w === "defaultChecked";
          if (E == null && !s && !S)
            if (i[b] = null, w === "value" || w === "checked") {
              let N = (
                /** @type {HTMLInputElement} */
                e
              );
              const T = t === void 0;
              if (w === "value") {
                let D = N.defaultValue;
                N.removeAttribute(w), N.defaultValue = D, N.value = N.__value = T ? D : null;
              } else {
                let D = N.defaultChecked;
                N.removeAttribute(w), N.defaultChecked = D, N.checked = T ? D : !1;
              }
            } else
              e.removeAttribute(b);
          else S || f.includes(w) && (s || typeof E != "string") ? (e[w] = E, w in i && (i[w] = rt)) : typeof E != "function" && ye(e, w, E);
        }
    }
  }
  return l && Pt(!0), c;
}
function Qe(e, t, n = [], r = [], o, i = !1) {
  Xl(n, r, (s) => {
    var a = void 0, l = {}, c = e.nodeName === "SELECT", d = !1;
    if (ar(() => {
      var f = t(...s.map(u)), h = $g(e, a, f, o, i);
      d && c && "value" in f && rs(
        /** @type {HTMLSelectElement} */
        e,
        f.value
      );
      for (let p of Object.getOwnPropertySymbols(l))
        f[p] || _t(l[p]);
      for (let p of Object.getOwnPropertySymbols(f)) {
        var v = f[p];
        p.description === ff && (!a || v !== a[p]) && (l[p] && _t(l[p]), l[p] = Kt(() => Cg(e, () => v))), h[p] = v;
      }
      a = h;
    }), c) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Lr(() => {
        rs(
          g,
          /** @type {Record<string | symbol, any>} */
          a.value,
          !0
        ), Ng(g);
      });
    }
    d = !0;
  });
}
function wi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [kc]: e.nodeName.includes("-"),
      [Ec]: e.namespaceURI === uf
    }
  );
}
var Ta = /* @__PURE__ */ new Map();
function Sc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Ta.get(t);
  if (n) return n;
  Ta.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Ml(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = gi(o);
  }
  return n;
}
class Zs {
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
    return r.add(n), this.#t.set(t, r), this.#o().observe(t, this.#n), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #o() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          Zs.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Tg = /* @__PURE__ */ new Zs({
  box: "border-box"
});
function Da(e, t, n) {
  var r = Tg.observe(e, () => n(e[t]));
  Lr(() => (it(() => n(e[t])), r));
}
function Aa(e, t) {
  return e === t || e?.[rn] === t;
}
function Dt(e = {}, t, n, r) {
  return Lr(() => {
    var o, i;
    return ho(() => {
      o = i, i = [], it(() => {
        e !== n(...i) && (t(e, ...i), o && Aa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      fo(() => {
        i && Aa(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Nc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Fe
  ), n = t.l.u;
  if (!n) return;
  let r = () => Rs(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ go(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && sc(() => {
    Ma(t, r), Zo(n.b);
  }), Ze(() => {
    const o = it(() => n.m.map(vf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ze(() => {
    Ma(t, r), Zo(n.a);
  });
}
function Ma(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let Po = !1;
function Dg(e) {
  var t = Po;
  try {
    return Po = !1, [e(), Po];
  } finally {
    Po = t;
  }
}
const Ag = {
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
function Ve(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Ag
  );
}
const Mg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Ce;
      try {
        un(e.parent_effect), e.special[t] = y(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          $l
        );
      } finally {
        un(r);
      }
    }
    return e.special[t](n), wa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), wa(e.version)), !0;
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
      version: er(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ce
      )
    },
    Mg
  );
}
const Og = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Hr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Hr(o) && (o = o());
      const i = _n(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Hr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = _n(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === rn || t === Ps) return !1;
    for (let n of e.props)
      if (Hr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Hr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Re(...e) {
  return new Proxy({ props: e }, Og);
}
function y(e, t, n, r) {
  var o = !Or || (n & sf) !== 0, i = (n & af) !== 0, s = (n & lf) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? it(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var g = rn in e || Ps in e;
    d = _n(e, t)?.set ?? (g && t in e ? (b) => e[t] = b : void 0);
  }
  var f, h = !1;
  i ? [f, h] = Dg(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Nf(), d(f)));
  var v;
  if (o ? v = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? c() : (l = !0, b);
  } : v = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b !== void 0 && (a = /** @type {V} */
    void 0), b === void 0 ? a : b;
  }, o && (n & $l) === 0)
    return v;
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(b, E) {
        return arguments.length > 0 ? ((!o || !E || p || h) && d(E ? v() : b), b) : v();
      }
    );
  }
  var x = !1, w = ((n & of) !== 0 ? go : Ms)(() => (x = !1, v()));
  i && u(w);
  var S = (
    /** @type {Effect} */
    Ce
  );
  return (
    /** @type {() => V} */
    function(b, E) {
      if (arguments.length > 0) {
        const N = E ? u(w) : o && i ? Lt(b) : b;
        return j(w, N), x = !0, a !== void 0 && (a = N), b;
      }
      return lr && x || (S.f & sr) !== 0 ? w.v : u(w);
    }
  );
}
function Lg(e) {
  return new Vg(e);
}
class Vg {
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
      var a = /* @__PURE__ */ Jl(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Ps ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return j(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? pg : _c)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || wr(this, i, {
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
      mg(this.#e);
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
let Pc;
typeof HTMLElement == "function" && (Pc = class extends HTMLElement {
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
      const t = {}, n = Hg(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Io(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Lg({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Is(() => {
        ho(() => {
          this.$$r = !0;
          for (const r of Ko(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Io(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Io(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Ko(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Io(e, t, n, r) {
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
function Hg(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends Pc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ko(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ko(t).forEach((a) => {
    wr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Io(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = _n(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    wr(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Ig = { value: () => {
} };
function _i() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new zo(n);
}
function zo(e) {
  this._ = e;
}
function zg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
zo.prototype = _i.prototype = {
  constructor: zo,
  on: function(e, t) {
    var n = this._, r = zg(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Rg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = La(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = La(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new zo(e);
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
function Rg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function La(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Ig, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var is = "http://www.w3.org/1999/xhtml";
const Va = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: is,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Va.hasOwnProperty(t) ? { space: Va[t], local: e } : e;
}
function Bg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === is && t.documentElement.namespaceURI === is ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Fg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function $c(e) {
  var t = xi(e);
  return (t.local ? Fg : Bg)(t);
}
function qg() {
}
function Ys(e) {
  return e == null ? qg : function() {
    return this.querySelector(e);
  };
}
function Kg(e) {
  typeof e != "function" && (e = Ys(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new At(r, this._parents);
}
function Zg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Yg() {
  return [];
}
function Tc(e) {
  return e == null ? Yg : function() {
    return this.querySelectorAll(e);
  };
}
function Wg(e) {
  return function() {
    return Zg(e.apply(this, arguments));
  };
}
function Xg(e) {
  typeof e == "function" ? e = Wg(e) : e = Tc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new At(r, o);
}
function Dc(e) {
  return function() {
    return this.matches(e);
  };
}
function Ac(e) {
  return function(t) {
    return t.matches(e);
  };
}
var jg = Array.prototype.find;
function Gg(e) {
  return function() {
    return jg.call(this.children, e);
  };
}
function Ug() {
  return this.firstElementChild;
}
function Jg(e) {
  return this.select(e == null ? Ug : Gg(typeof e == "function" ? e : Ac(e)));
}
var Qg = Array.prototype.filter;
function eh() {
  return Array.from(this.children);
}
function th(e) {
  return function() {
    return Qg.call(this.children, e);
  };
}
function nh(e) {
  return this.selectAll(e == null ? eh : th(typeof e == "function" ? e : Ac(e)));
}
function rh(e) {
  typeof e != "function" && (e = Dc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new At(r, this._parents);
}
function Mc(e) {
  return new Array(e.length);
}
function oh() {
  return new At(this._enter || this._groups.map(Mc), this._parents);
}
function Go(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Go.prototype = {
  constructor: Go,
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
function ih(e) {
  return function() {
    return e;
  };
}
function sh(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Go(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function ah(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, g = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", c.has(h) ? o[a] = l : c.set(h, l));
  for (a = 0; a < g; ++a)
    h = s.call(e, i[a], a, i) + "", (l = c.get(h)) ? (r[a] = l, l.__data__ = i[a], c.delete(h)) : n[a] = new Go(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function lh(e) {
  return e.__data__;
}
function ch(e, t) {
  if (!arguments.length) return Array.from(this, lh);
  var n = t ? ah : sh, r = this._parents, o = this._groups;
  typeof e != "function" && (e = ih(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], g = o[c], f = g.length, h = uh(e.call(d, d && d.__data__, c, r)), v = h.length, p = a[c] = new Array(v), x = s[c] = new Array(v), w = l[c] = new Array(f);
    n(d, g, p, x, w, h, t);
    for (var S = 0, b = 0, E, N; S < v; ++S)
      if (E = p[S]) {
        for (S >= b && (b = S + 1); !(N = x[b]) && ++b < v; ) ;
        E._next = N || null;
      }
  }
  return s = new At(s, r), s._enter = a, s._exit = l, s;
}
function uh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function dh() {
  return new At(this._exit || this._groups.map(Mc), this._parents);
}
function fh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function gh(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], g = c.length, f = a[l] = new Array(g), h, v = 0; v < g; ++v)
      (h = c[v] || d[v]) && (f[v] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new At(a, this._parents);
}
function hh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function vh(e) {
  e || (e = ph);
  function t(g, f) {
    return g && f ? e(g.__data__, f.__data__) : !g - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new At(o, this._parents).order();
}
function ph(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function mh() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function yh() {
  return Array.from(this);
}
function wh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function _h() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function xh() {
  return !this.node();
}
function bh(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Ch(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function kh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Eh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Sh(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Nh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Ph(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function $h(e, t) {
  var n = xi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? kh : Ch : typeof t == "function" ? n.local ? Ph : Nh : n.local ? Sh : Eh)(n, t));
}
function Oc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Th(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Dh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Ah(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Mh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Th : typeof t == "function" ? Ah : Dh)(e, t, n ?? "")) : kr(this.node(), e);
}
function kr(e, t) {
  return e.style.getPropertyValue(t) || Oc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Oh(e) {
  return function() {
    delete this[e];
  };
}
function Lh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Vh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Hh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Oh : typeof t == "function" ? Vh : Lh)(e, t)) : this.node()[e];
}
function Lc(e) {
  return e.trim().split(/^|\s+/);
}
function Ws(e) {
  return e.classList || new Vc(e);
}
function Vc(e) {
  this._node = e, this._names = Lc(e.getAttribute("class") || "");
}
Vc.prototype = {
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
function Hc(e, t) {
  for (var n = Ws(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ic(e, t) {
  for (var n = Ws(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Ih(e) {
  return function() {
    Hc(this, e);
  };
}
function zh(e) {
  return function() {
    Ic(this, e);
  };
}
function Rh(e, t) {
  return function() {
    (t.apply(this, arguments) ? Hc : Ic)(this, e);
  };
}
function Bh(e, t) {
  var n = Lc(e + "");
  if (arguments.length < 2) {
    for (var r = Ws(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Rh : t ? Ih : zh)(n, t));
}
function Fh() {
  this.textContent = "";
}
function qh(e) {
  return function() {
    this.textContent = e;
  };
}
function Kh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Zh(e) {
  return arguments.length ? this.each(e == null ? Fh : (typeof e == "function" ? Kh : qh)(e)) : this.node().textContent;
}
function Yh() {
  this.innerHTML = "";
}
function Wh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Xh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function jh(e) {
  return arguments.length ? this.each(e == null ? Yh : (typeof e == "function" ? Xh : Wh)(e)) : this.node().innerHTML;
}
function Gh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Uh() {
  return this.each(Gh);
}
function Jh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qh() {
  return this.each(Jh);
}
function ev(e) {
  var t = typeof e == "function" ? e : $c(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function tv() {
  return null;
}
function nv(e, t) {
  var n = typeof e == "function" ? e : $c(e), r = t == null ? tv : typeof t == "function" ? t : Ys(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function rv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ov() {
  return this.each(rv);
}
function iv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function sv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function av(e) {
  return this.select(e ? sv : iv);
}
function lv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function cv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function uv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function dv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function fv(e, t, n) {
  return function() {
    var r = this.__on, o, i = cv(t);
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
function gv(e, t, n) {
  var r = uv(e + ""), o, i = r.length, s;
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
  for (a = t ? fv : dv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function zc(e, t, n) {
  var r = Oc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function hv(e, t) {
  return function() {
    return zc(this, e, t);
  };
}
function vv(e, t) {
  return function() {
    return zc(this, e, t.apply(this, arguments));
  };
}
function pv(e, t) {
  return this.each((typeof t == "function" ? vv : hv)(e, t));
}
function* mv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Rc = [null];
function At(e, t) {
  this._groups = e, this._parents = t;
}
function po() {
  return new At([[document.documentElement]], Rc);
}
function yv() {
  return this;
}
At.prototype = po.prototype = {
  constructor: At,
  select: Kg,
  selectAll: Xg,
  selectChild: Jg,
  selectChildren: nh,
  filter: rh,
  data: ch,
  enter: oh,
  exit: dh,
  join: fh,
  merge: gh,
  selection: yv,
  order: hh,
  sort: vh,
  call: mh,
  nodes: yh,
  node: wh,
  size: _h,
  empty: xh,
  each: bh,
  attr: $h,
  style: Mh,
  property: Hh,
  classed: Bh,
  text: Zh,
  html: jh,
  raise: Uh,
  lower: Qh,
  append: ev,
  insert: nv,
  remove: ov,
  clone: av,
  datum: lv,
  on: gv,
  dispatch: pv,
  [Symbol.iterator]: mv
};
function Ot(e) {
  return typeof e == "string" ? new At([[document.querySelector(e)]], [document.documentElement]) : new At([[e]], Rc);
}
function wv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Rt(e, t) {
  if (e = wv(e), t === void 0 && (t = e.currentTarget), t) {
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
const _v = { passive: !1 }, Gr = { capture: !0, passive: !1 };
function Vi(e) {
  e.stopImmediatePropagation();
}
function vr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Bc(e) {
  var t = e.document.documentElement, n = Ot(e).on("dragstart.drag", vr, Gr);
  "onselectstart" in t ? n.on("selectstart.drag", vr, Gr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Fc(e, t) {
  var n = e.document.documentElement, r = Ot(e).on("dragstart.drag", null);
  t && (r.on("click.drag", vr, Gr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const $o = (e) => () => e;
function ss(e, {
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
ss.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function xv(e) {
  return !e.ctrlKey && !e.button;
}
function bv() {
  return this.parentNode;
}
function Cv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function kv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ev() {
  var e = xv, t = bv, n = Cv, r = kv, o = {}, i = _i("start", "drag", "end"), s = 0, a, l, c, d, g = 0;
  function f(E) {
    E.on("mousedown.drag", h).filter(r).on("touchstart.drag", x).on("touchmove.drag", w, _v).on("touchend.drag touchcancel.drag", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(E, N) {
    if (!(d || !e.call(this, E, N))) {
      var T = b(this, t.call(this, E, N), E, N, "mouse");
      T && (Ot(E.view).on("mousemove.drag", v, Gr).on("mouseup.drag", p, Gr), Bc(E.view), Vi(E), c = !1, a = E.clientX, l = E.clientY, T("start", E));
    }
  }
  function v(E) {
    if (vr(E), !c) {
      var N = E.clientX - a, T = E.clientY - l;
      c = N * N + T * T > g;
    }
    o.mouse("drag", E);
  }
  function p(E) {
    Ot(E.view).on("mousemove.drag mouseup.drag", null), Fc(E.view, c), vr(E), o.mouse("end", E);
  }
  function x(E, N) {
    if (e.call(this, E, N)) {
      var T = E.changedTouches, D = t.call(this, E, N), H = T.length, F, X;
      for (F = 0; F < H; ++F)
        (X = b(this, D, E, N, T[F].identifier, T[F])) && (Vi(E), X("start", E, T[F]));
    }
  }
  function w(E) {
    var N = E.changedTouches, T = N.length, D, H;
    for (D = 0; D < T; ++D)
      (H = o[N[D].identifier]) && (vr(E), H("drag", E, N[D]));
  }
  function S(E) {
    var N = E.changedTouches, T = N.length, D, H;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), D = 0; D < T; ++D)
      (H = o[N[D].identifier]) && (Vi(E), H("end", E, N[D]));
  }
  function b(E, N, T, D, H, F) {
    var X = i.copy(), G = Rt(F || T, N), C, k, _;
    if ((_ = n.call(E, new ss("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: H,
      active: s,
      x: G[0],
      y: G[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), D)) != null)
      return C = _.x - G[0] || 0, k = _.y - G[1] || 0, function P(A, M, R) {
        var q = G, L;
        switch (A) {
          case "start":
            o[H] = P, L = s++;
            break;
          case "end":
            delete o[H], --s;
          // falls through
          case "drag":
            G = Rt(R || M, N), L = s;
            break;
        }
        X.call(
          A,
          E,
          new ss(A, {
            sourceEvent: M,
            subject: _,
            target: f,
            identifier: H,
            active: L,
            x: G[0] + C,
            y: G[1] + k,
            dx: G[0] - q[0],
            dy: G[1] - q[1],
            dispatch: X
          }),
          D
        );
      };
  }
  return f.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : $o(!!E), f) : e;
  }, f.container = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : $o(E), f) : t;
  }, f.subject = function(E) {
    return arguments.length ? (n = typeof E == "function" ? E : $o(E), f) : n;
  }, f.touchable = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : $o(!!E), f) : r;
  }, f.on = function() {
    var E = i.on.apply(i, arguments);
    return E === i ? f : E;
  }, f.clickDistance = function(E) {
    return arguments.length ? (g = (E = +E) * E, f) : Math.sqrt(g);
  }, f;
}
function Xs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function qc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function mo() {
}
var Ur = 0.7, Uo = 1 / Ur, pr = "\\s*([+-]?\\d+)\\s*", Jr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", sn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Sv = /^#([0-9a-f]{3,8})$/, Nv = new RegExp(`^rgb\\(${pr},${pr},${pr}\\)$`), Pv = new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`), $v = new RegExp(`^rgba\\(${pr},${pr},${pr},${Jr}\\)$`), Tv = new RegExp(`^rgba\\(${sn},${sn},${sn},${Jr}\\)$`), Dv = new RegExp(`^hsl\\(${Jr},${sn},${sn}\\)$`), Av = new RegExp(`^hsla\\(${Jr},${sn},${sn},${Jr}\\)$`), Ha = {
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
Xs(mo, tr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ia,
  // Deprecated! Use color.formatHex.
  formatHex: Ia,
  formatHex8: Mv,
  formatHsl: Ov,
  formatRgb: za,
  toString: za
});
function Ia() {
  return this.rgb().formatHex();
}
function Mv() {
  return this.rgb().formatHex8();
}
function Ov() {
  return Kc(this).formatHsl();
}
function za() {
  return this.rgb().formatRgb();
}
function tr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Sv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ra(t) : n === 3 ? new bt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? To(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? To(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Nv.exec(e)) ? new bt(t[1], t[2], t[3], 1) : (t = Pv.exec(e)) ? new bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = $v.exec(e)) ? To(t[1], t[2], t[3], t[4]) : (t = Tv.exec(e)) ? To(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Dv.exec(e)) ? qa(t[1], t[2] / 100, t[3] / 100, 1) : (t = Av.exec(e)) ? qa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ha.hasOwnProperty(e) ? Ra(Ha[e]) : e === "transparent" ? new bt(NaN, NaN, NaN, 0) : null;
}
function Ra(e) {
  return new bt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function To(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new bt(e, t, n, r);
}
function Lv(e) {
  return e instanceof mo || (e = tr(e)), e ? (e = e.rgb(), new bt(e.r, e.g, e.b, e.opacity)) : new bt();
}
function as(e, t, n, r) {
  return arguments.length === 1 ? Lv(e) : new bt(e, t, n, r ?? 1);
}
function bt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Xs(bt, as, qc(mo, {
  brighter(e) {
    return e = e == null ? Uo : Math.pow(Uo, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ur : Math.pow(Ur, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new bt(Un(this.r), Un(this.g), Un(this.b), Jo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ba,
  // Deprecated! Use color.formatHex.
  formatHex: Ba,
  formatHex8: Vv,
  formatRgb: Fa,
  toString: Fa
}));
function Ba() {
  return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}`;
}
function Vv() {
  return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}${Yn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fa() {
  const e = Jo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Un(this.r)}, ${Un(this.g)}, ${Un(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Jo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Un(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Yn(e) {
  return e = Un(e), (e < 16 ? "0" : "") + e.toString(16);
}
function qa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ft(e, t, n, r);
}
function Kc(e) {
  if (e instanceof Ft) return new Ft(e.h, e.s, e.l, e.opacity);
  if (e instanceof mo || (e = tr(e)), !e) return new Ft();
  if (e instanceof Ft) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Ft(s, a, l, e.opacity);
}
function Hv(e, t, n, r) {
  return arguments.length === 1 ? Kc(e) : new Ft(e, t, n, r ?? 1);
}
function Ft(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Xs(Ft, Hv, qc(mo, {
  brighter(e) {
    return e = e == null ? Uo : Math.pow(Uo, e), new Ft(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ur : Math.pow(Ur, e), new Ft(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new bt(
      Hi(e >= 240 ? e - 240 : e + 120, o, r),
      Hi(e, o, r),
      Hi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Ft(Ka(this.h), Do(this.s), Do(this.l), Jo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Jo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ka(this.h)}, ${Do(this.s) * 100}%, ${Do(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ka(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Do(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Hi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const js = (e) => () => e;
function Iv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function zv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Rv(e) {
  return (e = +e) == 1 ? Zc : function(t, n) {
    return n - t ? zv(t, n, e) : js(isNaN(t) ? n : t);
  };
}
function Zc(e, t) {
  var n = t - e;
  return n ? Iv(e, n) : js(isNaN(e) ? t : e);
}
const Qo = function e(t) {
  var n = Rv(t);
  function r(o, i) {
    var s = n((o = as(o)).r, (i = as(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Zc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Bv(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Fv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function qv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Zr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Kv(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function en(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Zv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Zr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ls = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ii = new RegExp(ls.source, "g");
function Yv(e) {
  return function() {
    return e;
  };
}
function Wv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Yc(e, t) {
  var n = ls.lastIndex = Ii.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ls.exec(e)) && (o = Ii.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: en(r, o) })), n = Ii.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Wv(l[0].x) : Yv(t) : (t = l.length, function(c) {
    for (var d = 0, g; d < t; ++d) a[(g = l[d]).i] = g.x(c);
    return a.join("");
  });
}
function Zr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? js(t) : (n === "number" ? en : n === "string" ? (r = tr(t)) ? (t = r, Qo) : Yc : t instanceof tr ? Qo : t instanceof Date ? Kv : Fv(t) ? Bv : Array.isArray(t) ? qv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Zv : en)(e, t);
}
var Za = 180 / Math.PI, cs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Wc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Za,
    skewX: Math.atan(l) * Za,
    scaleX: s,
    scaleY: a
  };
}
var Ao;
function Xv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? cs : Wc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function jv(e) {
  return e == null || (Ao || (Ao = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ao.setAttribute("transform", e), !(e = Ao.transform.baseVal.consolidate())) ? cs : (e = e.matrix, Wc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Xc(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, g, f, h, v) {
    if (c !== g || d !== f) {
      var p = h.push("translate(", null, t, null, n);
      v.push({ i: p - 4, x: en(c, g) }, { i: p - 2, x: en(d, f) });
    } else (g || f) && h.push("translate(" + g + t + f + n);
  }
  function s(c, d, g, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: g.push(o(g) + "rotate(", null, r) - 2, x: en(c, d) })) : d && g.push(o(g) + "rotate(" + d + r);
  }
  function a(c, d, g, f) {
    c !== d ? f.push({ i: g.push(o(g) + "skewX(", null, r) - 2, x: en(c, d) }) : d && g.push(o(g) + "skewX(" + d + r);
  }
  function l(c, d, g, f, h, v) {
    if (c !== g || d !== f) {
      var p = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: en(c, g) }, { i: p - 2, x: en(d, f) });
    } else (g !== 1 || f !== 1) && h.push(o(h) + "scale(" + g + "," + f + ")");
  }
  return function(c, d) {
    var g = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, g, f), s(c.rotate, d.rotate, g, f), a(c.skewX, d.skewX, g, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, g, f), c = d = null, function(h) {
      for (var v = -1, p = f.length, x; ++v < p; ) g[(x = f[v]).i] = x.x(h);
      return g.join("");
    };
  };
}
var Gv = Xc(Xv, "px, ", "px)", "deg)"), Uv = Xc(jv, ", ", ")", ")"), Jv = 1e-12;
function Ya(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Qv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function e1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ro = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], g = s[1], f = s[2], h = d - a, v = g - l, p = h * h + v * v, x, w;
    if (p < Jv)
      w = Math.log(f / c) / t, x = function(D) {
        return [
          a + D * h,
          l + D * v,
          c * Math.exp(t * D * w)
        ];
      };
    else {
      var S = Math.sqrt(p), b = (f * f - c * c + r * p) / (2 * c * n * S), E = (f * f - c * c - r * p) / (2 * f * n * S), N = Math.log(Math.sqrt(b * b + 1) - b), T = Math.log(Math.sqrt(E * E + 1) - E);
      w = (T - N) / t, x = function(D) {
        var H = D * w, F = Ya(N), X = c / (n * S) * (F * e1(t * H + N) - Qv(N));
        return [
          a + X * h,
          l + X * v,
          c * F / Ya(t * H + N)
        ];
      };
    }
    return x.duration = w * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Er = 0, Br = 0, Ir = 0, jc = 1e3, ei, Fr, ti = 0, nr = 0, bi = 0, Qr = typeof performance == "object" && performance.now ? performance : Date, Gc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Gs() {
  return nr || (Gc(t1), nr = Qr.now() + bi);
}
function t1() {
  nr = 0;
}
function ni() {
  this._call = this._time = this._next = null;
}
ni.prototype = Uc.prototype = {
  constructor: ni,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Gs() : +n) + (t == null ? 0 : +t), !this._next && Fr !== this && (Fr ? Fr._next = this : ei = this, Fr = this), this._call = e, this._time = n, us();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, us());
  }
};
function Uc(e, t, n) {
  var r = new ni();
  return r.restart(e, t, n), r;
}
function n1() {
  Gs(), ++Er;
  for (var e = ei, t; e; )
    (t = nr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Er;
}
function Wa() {
  nr = (ti = Qr.now()) + bi, Er = Br = 0;
  try {
    n1();
  } finally {
    Er = 0, o1(), nr = 0;
  }
}
function r1() {
  var e = Qr.now(), t = e - ti;
  t > jc && (bi -= t, ti = e);
}
function o1() {
  for (var e, t = ei, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ei = n);
  Fr = e, us(r);
}
function us(e) {
  if (!Er) {
    Br && (Br = clearTimeout(Br));
    var t = e - nr;
    t > 24 ? (e < 1 / 0 && (Br = setTimeout(Wa, e - Qr.now() - bi)), Ir && (Ir = clearInterval(Ir))) : (Ir || (ti = Qr.now(), Ir = setInterval(r1, jc)), Er = 1, Gc(Wa));
  }
}
function Xa(e, t, n) {
  var r = new ni();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var i1 = _i("start", "end", "cancel", "interrupt"), s1 = [], Jc = 0, ja = 1, ds = 2, Bo = 3, Ga = 4, fs = 5, Fo = 6;
function Ci(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  a1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: i1,
    tween: s1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Jc
  });
}
function Us(e, t) {
  var n = Xt(e, t);
  if (n.state > Jc) throw new Error("too late; already scheduled");
  return n;
}
function hn(e, t) {
  var n = Xt(e, t);
  if (n.state > Bo) throw new Error("too late; already running");
  return n;
}
function Xt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function a1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Uc(i, 0, n.time);
  function i(c) {
    n.state = ja, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, g, f, h;
    if (n.state !== ja) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === Bo) return Xa(s);
        h.state === Ga ? (h.state = Fo, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Fo, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Xa(function() {
      n.state === Bo && (n.state = Ga, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = ds, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ds) {
      for (n.state = Bo, o = new Array(f = n.tween.length), d = 0, g = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++g] = h);
      o.length = g + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = fs, 1), g = -1, f = o.length; ++g < f; )
      o[g].call(e, d);
    n.state === fs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Fo, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function qo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ds && r.state < fs, r.state = Fo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function l1(e) {
  return this.each(function() {
    qo(this, e);
  });
}
function c1(e, t) {
  var n, r;
  return function() {
    var o = hn(this, e), i = o.tween;
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
function u1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = hn(this, e), s = i.tween;
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
function d1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Xt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? c1 : u1)(n, e, t));
}
function Js(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = hn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Xt(o, r).value[t];
  };
}
function Qc(e, t) {
  var n;
  return (typeof t == "number" ? en : t instanceof tr ? Qo : (n = tr(t)) ? (t = n, Qo) : Yc)(e, t);
}
function f1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function g1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function h1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function v1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function p1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function m1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function y1(e, t) {
  var n = xi(e), r = n === "transform" ? Uv : Qc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? m1 : p1)(n, r, Js(this, "attr." + e, t)) : t == null ? (n.local ? g1 : f1)(n) : (n.local ? v1 : h1)(n, r, t));
}
function w1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function _1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function x1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && _1(e, i)), n;
  }
  return o._value = t, o;
}
function b1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && w1(e, i)), n;
  }
  return o._value = t, o;
}
function C1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = xi(e);
  return this.tween(n, (r.local ? x1 : b1)(r, t));
}
function k1(e, t) {
  return function() {
    Us(this, e).delay = +t.apply(this, arguments);
  };
}
function E1(e, t) {
  return t = +t, function() {
    Us(this, e).delay = t;
  };
}
function S1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? k1 : E1)(t, e)) : Xt(this.node(), t).delay;
}
function N1(e, t) {
  return function() {
    hn(this, e).duration = +t.apply(this, arguments);
  };
}
function P1(e, t) {
  return t = +t, function() {
    hn(this, e).duration = t;
  };
}
function $1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? N1 : P1)(t, e)) : Xt(this.node(), t).duration;
}
function T1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    hn(this, e).ease = t;
  };
}
function D1(e) {
  var t = this._id;
  return arguments.length ? this.each(T1(t, e)) : Xt(this.node(), t).ease;
}
function A1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    hn(this, e).ease = n;
  };
}
function M1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(A1(this._id, e));
}
function O1(e) {
  typeof e != "function" && (e = Dc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Cn(r, this._parents, this._name, this._id);
}
function L1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, g = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || c[h]) && (g[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Cn(s, this._parents, this._name, this._id);
}
function V1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function H1(e, t, n) {
  var r, o, i = V1(t) ? Us : hn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function I1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Xt(this.node(), n).on.on(e) : this.each(H1(n, e, t));
}
function z1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function R1() {
  return this.on("end.remove", z1(this._id));
}
function B1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ys(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, g, f = 0; f < l; ++f)
      (d = a[f]) && (g = e.call(d, d.__data__, f, a)) && ("__data__" in d && (g.__data__ = d.__data__), c[f] = g, Ci(c[f], t, n, f, c, Xt(d, n)));
  return new Cn(i, this._parents, t, n);
}
function F1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Tc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, g = 0; g < c; ++g)
      if (d = l[g]) {
        for (var f = e.call(d, d.__data__, g, l), h, v = Xt(d, n), p = 0, x = f.length; p < x; ++p)
          (h = f[p]) && Ci(h, t, n, p, f, v);
        i.push(f), s.push(d);
      }
  return new Cn(i, s, t, n);
}
var q1 = po.prototype.constructor;
function K1() {
  return new q1(this._groups, this._parents);
}
function Z1(e, t) {
  var n, r, o;
  return function() {
    var i = kr(this, e), s = (this.style.removeProperty(e), kr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function eu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Y1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = kr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function W1(e, t, n) {
  var r, o, i;
  return function() {
    var s = kr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), kr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function X1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = hn(this, e), c = l.on, d = l.value[i] == null ? a || (a = eu(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function j1(e, t, n) {
  var r = (e += "") == "transform" ? Gv : Qc;
  return t == null ? this.styleTween(e, Z1(e, r)).on("end.style." + e, eu(e)) : typeof t == "function" ? this.styleTween(e, W1(e, r, Js(this, "style." + e, t))).each(X1(this._id, e)) : this.styleTween(e, Y1(e, r, t), n).on("end.style." + e, null);
}
function G1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function U1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && G1(e, s, n)), r;
  }
  return i._value = t, i;
}
function J1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, U1(e, t, n ?? ""));
}
function Q1(e) {
  return function() {
    this.textContent = e;
  };
}
function ep(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function tp(e) {
  return this.tween("text", typeof e == "function" ? ep(Js(this, "text", e)) : Q1(e == null ? "" : e + ""));
}
function np(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function rp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && np(o)), t;
  }
  return r._value = e, r;
}
function op(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, rp(e));
}
function ip() {
  for (var e = this._name, t = this._id, n = tu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = Xt(l, t);
        Ci(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Cn(r, this._parents, e, n);
}
function sp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = hn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var ap = 0;
function Cn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function tu() {
  return ++ap;
}
var vn = po.prototype;
Cn.prototype = {
  constructor: Cn,
  select: B1,
  selectAll: F1,
  selectChild: vn.selectChild,
  selectChildren: vn.selectChildren,
  filter: O1,
  merge: L1,
  selection: K1,
  transition: ip,
  call: vn.call,
  nodes: vn.nodes,
  node: vn.node,
  size: vn.size,
  empty: vn.empty,
  each: vn.each,
  on: I1,
  attr: y1,
  attrTween: C1,
  style: j1,
  styleTween: J1,
  text: tp,
  textTween: op,
  remove: R1,
  tween: d1,
  delay: S1,
  duration: $1,
  ease: D1,
  easeVarying: M1,
  end: sp,
  [Symbol.iterator]: vn[Symbol.iterator]
};
function lp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var cp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: lp
};
function up(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function dp(e) {
  var t, n;
  e instanceof Cn ? (t = e._id, e = e._name) : (t = tu(), (n = cp).time = Gs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Ci(l, e, t, c, s, n || up(l, t));
  return new Cn(r, this._parents, e, t);
}
po.prototype.interrupt = l1;
po.prototype.transition = dp;
const Mo = (e) => () => e;
function fp(e, {
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
var ki = new mn(1, 0, 0);
nu.prototype = mn.prototype;
function nu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ki;
  return e.__zoom;
}
function zi(e) {
  e.stopImmediatePropagation();
}
function zr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function gp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function hp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ua() {
  return this.__zoom || ki;
}
function vp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function pp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function mp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function ru() {
  var e = gp, t = hp, n = mp, r = vp, o = pp, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Ro, c = _i("start", "zoom", "end"), d, g, f, h = 500, v = 150, p = 0, x = 10;
  function w(_) {
    _.property("__zoom", Ua).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", F).on("dblclick.zoom", X).filter(o).on("touchstart.zoom", G).on("touchmove.zoom", C).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(_, P, A, M) {
    var R = _.selection ? _.selection() : _;
    R.property("__zoom", Ua), _ !== R ? N(_, P, A, M) : R.interrupt().each(function() {
      T(this, arguments).event(M).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, w.scaleBy = function(_, P, A, M) {
    w.scaleTo(_, function() {
      var R = this.__zoom.k, q = typeof P == "function" ? P.apply(this, arguments) : P;
      return R * q;
    }, A, M);
  }, w.scaleTo = function(_, P, A, M) {
    w.transform(_, function() {
      var R = t.apply(this, arguments), q = this.__zoom, L = A == null ? E(R) : typeof A == "function" ? A.apply(this, arguments) : A, K = q.invert(L), U = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(b(S(q, U), L, K), R, s);
    }, A, M);
  }, w.translateBy = function(_, P, A, M) {
    w.transform(_, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof A == "function" ? A.apply(this, arguments) : A
      ), t.apply(this, arguments), s);
    }, null, M);
  }, w.translateTo = function(_, P, A, M, R) {
    w.transform(_, function() {
      var q = t.apply(this, arguments), L = this.__zoom, K = M == null ? E(q) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(ki.translate(K[0], K[1]).scale(L.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof A == "function" ? -A.apply(this, arguments) : -A
      ), q, s);
    }, M, R);
  };
  function S(_, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === _.k ? _ : new mn(P, _.x, _.y);
  }
  function b(_, P, A) {
    var M = P[0] - A[0] * _.k, R = P[1] - A[1] * _.k;
    return M === _.x && R === _.y ? _ : new mn(_.k, M, R);
  }
  function E(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function N(_, P, A, M) {
    _.on("start.zoom", function() {
      T(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var R = this, q = arguments, L = T(R, q).event(M), K = t.apply(R, q), U = A == null ? E(K) : typeof A == "function" ? A.apply(R, q) : A, ne = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), ee = R.__zoom, Z = typeof P == "function" ? P.apply(R, q) : P, te = l(ee.invert(U).concat(ne / ee.k), Z.invert(U).concat(ne / Z.k));
      return function(Y) {
        if (Y === 1) Y = Z;
        else {
          var W = te(Y), fe = ne / W[2];
          Y = new mn(fe, U[0] - W[0] * fe, U[1] - W[1] * fe);
        }
        L.zoom(null, Y);
      };
    });
  }
  function T(_, P, A) {
    return !A && _.__zooming || new D(_, P);
  }
  function D(_, P) {
    this.that = _, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(_, P), this.taps = 0;
  }
  D.prototype = {
    event: function(_) {
      return _ && (this.sourceEvent = _), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(_, P) {
      return this.mouse && _ !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && _ !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && _ !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(_) {
      var P = Ot(this.that).datum();
      c.call(
        _,
        this.that,
        new fp(_, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: c
        }),
        P
      );
    }
  };
  function H(_, ...P) {
    if (!e.apply(this, arguments)) return;
    var A = T(this, P).event(_), M = this.__zoom, R = Math.max(i[0], Math.min(i[1], M.k * Math.pow(2, r.apply(this, arguments)))), q = Rt(_);
    if (A.wheel)
      (A.mouse[0][0] !== q[0] || A.mouse[0][1] !== q[1]) && (A.mouse[1] = M.invert(A.mouse[0] = q)), clearTimeout(A.wheel);
    else {
      if (M.k === R) return;
      A.mouse = [q, M.invert(q)], qo(this), A.start();
    }
    zr(_), A.wheel = setTimeout(L, v), A.zoom("mouse", n(b(S(M, R), A.mouse[0], A.mouse[1]), A.extent, s));
    function L() {
      A.wheel = null, A.end();
    }
  }
  function F(_, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var A = _.currentTarget, M = T(this, P, !0).event(_), R = Ot(_.view).on("mousemove.zoom", U, !0).on("mouseup.zoom", ne, !0), q = Rt(_, A), L = _.clientX, K = _.clientY;
    Bc(_.view), zi(_), M.mouse = [q, this.__zoom.invert(q)], qo(this), M.start();
    function U(ee) {
      if (zr(ee), !M.moved) {
        var Z = ee.clientX - L, te = ee.clientY - K;
        M.moved = Z * Z + te * te > p;
      }
      M.event(ee).zoom("mouse", n(b(M.that.__zoom, M.mouse[0] = Rt(ee, A), M.mouse[1]), M.extent, s));
    }
    function ne(ee) {
      R.on("mousemove.zoom mouseup.zoom", null), Fc(ee.view, M.moved), zr(ee), M.event(ee).end();
    }
  }
  function X(_, ...P) {
    if (e.apply(this, arguments)) {
      var A = this.__zoom, M = Rt(_.changedTouches ? _.changedTouches[0] : _, this), R = A.invert(M), q = A.k * (_.shiftKey ? 0.5 : 2), L = n(b(S(A, q), M, R), t.apply(this, P), s);
      zr(_), a > 0 ? Ot(this).transition().duration(a).call(N, L, M, _) : Ot(this).call(w.transform, L, M, _);
    }
  }
  function G(_, ...P) {
    if (e.apply(this, arguments)) {
      var A = _.touches, M = A.length, R = T(this, P, _.changedTouches.length === M).event(_), q, L, K, U;
      for (zi(_), L = 0; L < M; ++L)
        K = A[L], U = Rt(K, this), U = [U, this.__zoom.invert(U), K.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== U[2] && (R.touch1 = U, R.taps = 0) : (R.touch0 = U, q = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), q && (R.taps < 2 && (g = U[0], d = setTimeout(function() {
        d = null;
      }, h)), qo(this), R.start());
    }
  }
  function C(_, ...P) {
    if (this.__zooming) {
      var A = T(this, P).event(_), M = _.changedTouches, R = M.length, q, L, K, U;
      for (zr(_), q = 0; q < R; ++q)
        L = M[q], K = Rt(L, this), A.touch0 && A.touch0[2] === L.identifier ? A.touch0[0] = K : A.touch1 && A.touch1[2] === L.identifier && (A.touch1[0] = K);
      if (L = A.that.__zoom, A.touch1) {
        var ne = A.touch0[0], ee = A.touch0[1], Z = A.touch1[0], te = A.touch1[1], Y = (Y = Z[0] - ne[0]) * Y + (Y = Z[1] - ne[1]) * Y, W = (W = te[0] - ee[0]) * W + (W = te[1] - ee[1]) * W;
        L = S(L, Math.sqrt(Y / W)), K = [(ne[0] + Z[0]) / 2, (ne[1] + Z[1]) / 2], U = [(ee[0] + te[0]) / 2, (ee[1] + te[1]) / 2];
      } else if (A.touch0) K = A.touch0[0], U = A.touch0[1];
      else return;
      A.zoom("touch", n(b(L, K, U), A.extent, s));
    }
  }
  function k(_, ...P) {
    if (this.__zooming) {
      var A = T(this, P).event(_), M = _.changedTouches, R = M.length, q, L;
      for (zi(_), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), q = 0; q < R; ++q)
        L = M[q], A.touch0 && A.touch0[2] === L.identifier ? delete A.touch0 : A.touch1 && A.touch1[2] === L.identifier && delete A.touch1;
      if (A.touch1 && !A.touch0 && (A.touch0 = A.touch1, delete A.touch1), A.touch0) A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      else if (A.end(), A.taps === 2 && (L = Rt(L, this), Math.hypot(g[0] - L[0], g[1] - L[1]) < x)) {
        var K = Ot(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Mo(+_), w) : r;
  }, w.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Mo(!!_), w) : e;
  }, w.touchable = function(_) {
    return arguments.length ? (o = typeof _ == "function" ? _ : Mo(!!_), w) : o;
  }, w.extent = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Mo([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), w) : t;
  }, w.scaleExtent = function(_) {
    return arguments.length ? (i[0] = +_[0], i[1] = +_[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(_) {
    return arguments.length ? (s[0][0] = +_[0][0], s[1][0] = +_[1][0], s[0][1] = +_[0][1], s[1][1] = +_[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(_) {
    return arguments.length ? (n = _, w) : n;
  }, w.duration = function(_) {
    return arguments.length ? (a = +_, w) : a;
  }, w.interpolate = function(_) {
    return arguments.length ? (l = _, w) : l;
  }, w.on = function() {
    var _ = c.on.apply(c, arguments);
    return _ === c ? w : _;
  }, w.clickDistance = function(_) {
    return arguments.length ? (p = (_ = +_) * _, w) : Math.sqrt(p);
  }, w.tapDistance = function(_) {
    return arguments.length ? (x = +_, w) : x;
  }, w;
}
const eo = {
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
}, gs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], ou = ["Enter", " ", "Escape"], yp = {
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
var Sr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Sr || (Sr = {}));
var an;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(an || (an = {}));
var ri;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ri || (ri = {}));
const hs = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null
};
var pn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(pn || (pn = {}));
var to;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(to || (to = {}));
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
function wp(e, t) {
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
function Qa(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function _p(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const iu = (e) => "id" in e && "source" in e && "target" in e, xp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Qs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), yo = (e, t = [0, 0]) => {
  const { width: n, height: r } = qn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, bp = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Qs(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? oi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ei(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Si(n);
}, wo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = oi(r);
      n = Ei(n, o);
    }
  }), Si(n);
}, ea = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...xo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: g = !0, hidden: f = !1 } = c;
    if (s && !g || f)
      continue;
    const h = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, p = no(a, Pr(c)), x = (h ?? 0) * (v ?? 0), w = i && p > 0;
    (!c.internals.handleBounds || w || p >= x || c.dragging) && l.push(c);
  }
  return l;
}, Cp = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function kp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Ep({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = kp(e, s), l = wo(a), c = ta(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function su({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let g = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", eo.error005());
    else {
      const h = a.measured.width, v = a.measured.height;
      h && v && (g = [
        [l, c],
        [l + h, c + v]
      ]);
    }
  else a && $r(s.extent) && (g = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = $r(g) ? rr(t, g, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", eo.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Sp({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const h = i.has(f.id), v = !h && f.parentId && s.find((p) => p.id === f.parentId);
    (h || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = Cp(s, l);
  for (const f of l)
    a.has(f.id) && !d.find((v) => v.id === f.id) && d.push(f);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const g = await o({
    nodes: s,
    edges: d
  });
  return typeof g == "boolean" ? g ? { edges: d, nodes: s } : { edges: [], nodes: [] } : g;
}
const Nr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), rr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Nr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Nr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function au(e, t, n) {
  const { width: r, height: o } = qn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return rr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const el = (e, t, n) => e < t ? Nr(Math.abs(e - t), 1, t) / t : e > n ? -Nr(Math.abs(e - n), 1, t) / t : 0, lu = (e, t, n = 15, r = 40) => {
  const o = el(e.x, r, t.width - r) * n, i = el(e.y, r, t.height - r) * n;
  return [o, i];
}, Ei = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), vs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Si = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Pr = (e, t = [0, 0]) => {
  const { x: n, y: r } = Qs(e) ? e.internals.positionAbsolute : yo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, oi = (e, t = [0, 0]) => {
  const { x: n, y: r } = Qs(e) ? e.internals.positionAbsolute : yo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, cu = (e, t) => Si(Ei(vs(e), vs(t))), no = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, tl = (e) => yn(e.width) && yn(e.height) && yn(e.x) && yn(e.y), yn = (e) => !isNaN(e) && isFinite(e), Np = (e, t) => {
}, _o = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), xo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? _o(a, s) : a;
}, ii = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function dr(e, t) {
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
function Pp(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = dr(e, n), o = dr(e, t);
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
    const r = dr(e.top ?? e.y ?? 0, n), o = dr(e.bottom ?? e.y ?? 0, n), i = dr(e.left ?? e.x ?? 0, t), s = dr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function $p(e, t, n, r, o, i) {
  const { x: s, y: a } = ii(e, [t, n, r]), { x: l, y: c } = ii({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, g = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(g)
  };
}
const ta = (e, t, n, r, o, i) => {
  const s = Pp(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Nr(c, r, o), g = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - g * d, v = n / 2 - f * d, p = $p(e, h, v, d, t, n), x = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: h - x.left + x.right,
    y: v - x.top + x.bottom,
    zoom: d
  };
}, Wn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function $r(e) {
  return e != null && e !== "parent";
}
function qn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function uu(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Tp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Dp(e) {
  return { ...yp, ...e || {} };
}
function Ri(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = nn(e), a = xo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? _o(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const du = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), fu = (e) => e?.getRootNode?.() || window?.document, Ap = ["INPUT", "SELECT", "TEXTAREA"];
function gu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Ap.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const hu = (e) => "clientX" in e, nn = (e, t) => {
  const n = hu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
      ...du(s)
    };
  });
};
function Mp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), g = Math.abs(c - t);
  return [l, c, d, g];
}
function Oo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function rl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case me.Left:
      return [t - Oo(t - r, i), n];
    case me.Right:
      return [t + Oo(r - t, i), n];
    case me.Top:
      return [t, n - Oo(n - o, i)];
    case me.Bottom:
      return [t, n + Oo(o - n, i)];
  }
}
function vu({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, curvature: s = 0.25 }) {
  const [a, l] = rl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = rl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [g, f, h, v] = Mp({
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
    g,
    f,
    h,
    v
  ];
}
function pu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Op({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function Lp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ei(oi(e), oi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return no(s, Si(i)) > 0;
}
const Vp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Hp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Ip = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return iu(e) ? n = { ...e } : n = {
    ...e,
    id: Vp(e)
  }, Hp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function mu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = pu({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const ol = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, zp = ({ source: e, sourcePosition: t = me.Bottom, target: n }) => t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, il = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Rp({ source: e, sourcePosition: t = me.Bottom, target: n, targetPosition: r = me.Top, center: o, offset: i, stepPosition: s }) {
  const a = ol[t], l = ol[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, g = zp({
    source: c,
    sourcePosition: t,
    target: d
  }), f = g.x !== 0 ? "x" : "y", h = g[f];
  let v = [], p, x;
  const w = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [, , b, E] = pu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (p = o.x ?? c.x + (d.x - c.x) * s, x = o.y ?? (c.y + d.y) / 2) : (p = o.x ?? (c.x + d.x) / 2, x = o.y ?? c.y + (d.y - c.y) * s);
    const T = [
      { x: p, y: c.y },
      { x: p, y: d.y }
    ], D = [
      { x: c.x, y: x },
      { x: d.x, y: x }
    ];
    a[f] === h ? v = f === "x" ? T : D : v = f === "x" ? D : T;
  } else {
    const T = [{ x: c.x, y: d.y }], D = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === h ? D : T : v = a.y === h ? T : D, t === r) {
      const C = Math.abs(e[f] - n[f]);
      if (C <= i) {
        const k = Math.min(i - 1, i - C);
        a[f] === h ? w[f] = (c[f] > e[f] ? -1 : 1) * k : S[f] = (d[f] > n[f] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const C = f === "x" ? "y" : "x", k = a[f] === l[C], _ = c[C] > d[C], P = c[C] < d[C];
      (a[f] === 1 && (!k && _ || k && P) || a[f] !== 1 && (!k && P || k && _)) && (v = f === "x" ? T : D);
    }
    const H = { x: c.x + w.x, y: c.y + w.y }, F = { x: d.x + S.x, y: d.y + S.y }, X = Math.max(Math.abs(H.x - v[0].x), Math.abs(F.x - v[0].x)), G = Math.max(Math.abs(H.y - v[0].y), Math.abs(F.y - v[0].y));
    X >= G ? (p = (H.x + F.x) / 2, x = v[0].y) : (p = v[0].x, x = (H.y + F.y) / 2);
  }
  return [[
    e,
    { x: c.x + w.x, y: c.y + w.y },
    ...v,
    { x: d.x + S.x, y: d.y + S.y },
    n
  ], p, x, b, E];
}
function Bp(e, t, n, r) {
  const o = Math.min(il(e, t) / 2, il(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function na({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [g, f, h, v, p] = Rp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [g.reduce((w, S, b) => {
    let E = "";
    return b > 0 && b < g.length - 1 ? E = Bp(g[b - 1], S, g[b + 1], s) : E = `${b === 0 ? "M" : "L"}${S.x} ${S.y}`, w += E, w;
  }, ""), f, h, v, p];
}
function sl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Fp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!sl(t) || !sl(n))
    return null;
  const r = t.internals.handleBounds || al(t.handles), o = n.internals.handleBounds || al(n.handles), i = ll(r?.source ?? [], e.sourceHandle), s = ll(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Sr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", eo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || me.Bottom, l = s?.position || me.Top, c = ro(t, i, a), d = ro(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
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
function ro(e, t, n = me.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? qn(e);
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
function ll(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ps(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function qp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = ps(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Kp(e, t, n, r, o) {
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
const ra = {
  nodeOrigin: [0, 0],
  nodeExtent: gs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Zp = {
  ...ra,
  checkEquality: !0
};
function oa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Yp(e, t, n) {
  const r = oa(ra, n);
  for (const o of e.values())
    if (o.parentId)
      ia(o, e, t, r);
    else {
      const i = yo(o, r.nodeOrigin), s = $r(o.extent) ? o.extent : r.nodeExtent, a = rr(i, s, qn(o));
      o.internals.positionAbsolute = a;
    }
}
function Wp(e, t, n, r) {
  const o = oa(Zp, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let c = s.get(l.id);
    if (o.checkEquality && l === c?.internals.userNode)
      t.set(l.id, c);
    else {
      const d = yo(l, o.nodeOrigin), g = $r(l.extent) ? l.extent : o.nodeExtent, f = rr(d, g, qn(l));
      c = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: f,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: l.measured ? c?.internals.handleBounds : void 0,
          z: yu(l, a),
          userNode: l
        }
      }, t.set(l.id, c);
    }
    (c.measured === void 0 || c.measured.width === void 0 || c.measured.height === void 0) && !c.hidden && (i = !1), l.parentId && ia(c, t, n, r);
  }
  return i;
}
function Xp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ia(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = oa(ra, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Xp(e, n);
  const c = o ? 1e3 : 0, { x: d, y: g, z: f } = jp(e, l, i, s, c), { positionAbsolute: h } = e.internals, v = d !== h.x || g !== h.y;
  (v || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: d, y: g } : h,
      z: f
    }
  });
}
function yu(e, t) {
  return (yn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function jp(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = qn(e), l = yo(e, n), c = $r(e.extent) ? rr(l, e.extent, a) : l;
  let d = rr({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = au(d, a, t));
  const g = yu(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= g ? f + 1 : g
  };
}
function Gp(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Pr(a), c = cu(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = qn(a), g = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, h = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), p = Math.max(d.height, Math.round(s.height)), x = (v - d.width) * g[0], w = (p - d.height) * g[1];
    (f > 0 || h > 0 || x || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + x,
        y: a.position.y - h + w
      }
    }), n.get(l)?.forEach((S) => {
      e.some((b) => b.id === S.id) || o.push({
        id: S.id,
        type: "position",
        position: {
          x: S.position.x + f,
          y: S.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || f || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? g[0] * f - x : 0),
        height: p + (h ? g[1] * h - w : 0)
      }
    });
  }), o;
}
function Up(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], c = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(c.transform), g = [];
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
    const v = du(f.nodeElement), p = h.measured.width !== v.width || h.measured.height !== v.height;
    if (!!(v.width && v.height && (p || !h.internals.handleBounds || f.force))) {
      const w = f.nodeElement.getBoundingClientRect(), S = $r(h.extent) ? h.extent : i;
      let { positionAbsolute: b } = h.internals;
      h.parentId && h.extent === "parent" ? b = au(b, v, t.get(h.parentId)) : S && (b = rr(b, S, v));
      const E = {
        ...h,
        measured: v,
        internals: {
          ...h.internals,
          positionAbsolute: b,
          handleBounds: {
            source: nl("source", f.nodeElement, w, d, h.id),
            target: nl("target", f.nodeElement, w, d, h.id)
          }
        }
      };
      t.set(h.id, E), h.parentId && ia(E, t, n, { nodeOrigin: o }), a = !0, p && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: v
      }), h.expandParent && h.parentId && g.push({
        id: h.id,
        parentId: h.parentId,
        rect: Pr(E, o)
      }));
    }
  }
  if (g.length > 0) {
    const f = Gp(g, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function Jp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function Qp(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    cl("source", l, d, e, o, s), cl("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function e0(e, t) {
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
function wu(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : wu(n, t) : !1;
}
function ul(e, t, n) {
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
function t0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !wu(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Bi({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function n0({ dragItems: e, snapGrid: t, x: n, y: r }) {
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
function r0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, g = !1, f = null, h = !1, v = !1, p = null;
  function x({ noDragClassName: S, handleSelector: b, domNode: E, isSelectable: N, nodeId: T, nodeClickDistance: D = 0 }) {
    f = Ot(E);
    function H({ x: C, y: k }) {
      const { nodeLookup: _, nodeExtent: P, snapGrid: A, snapToGrid: M, nodeOrigin: R, onNodeDrag: q, onSelectionDrag: L, onError: K, updateNodePositions: U } = t();
      i = { x: C, y: k };
      let ne = !1;
      const ee = a.size > 1, Z = ee && P ? vs(wo(a)) : null, te = ee && M ? n0({
        dragItems: a,
        snapGrid: A,
        x: C,
        y: k
      }) : null;
      for (const [Y, W] of a) {
        if (!_.has(Y))
          continue;
        let fe = { x: C - W.distance.x, y: k - W.distance.y };
        M && (fe = te ? {
          x: Math.round(fe.x + te.x),
          y: Math.round(fe.y + te.y)
        } : _o(fe, A));
        let ke = null;
        if (ee && P && !W.extent && Z) {
          const { positionAbsolute: J } = W.internals, oe = J.x - Z.x + P[0][0], ge = J.x + W.measured.width - Z.x2 + P[1][0], de = J.y - Z.y + P[0][1], $e = J.y + W.measured.height - Z.y2 + P[1][1];
          ke = [
            [oe, de],
            [ge, $e]
          ];
        }
        const { position: ae, positionAbsolute: re } = su({
          nodeId: Y,
          nextPosition: fe,
          nodeLookup: _,
          nodeExtent: ke || P,
          nodeOrigin: R,
          onError: K
        });
        ne = ne || W.position.x !== ae.x || W.position.y !== ae.y, W.position = ae, W.internals.positionAbsolute = re;
      }
      if (v = v || ne, !!ne && (U(a, !0), p && (r || q || !T && L))) {
        const [Y, W] = Bi({
          nodeId: T,
          dragItems: a,
          nodeLookup: _
        });
        r?.(p, a, Y, W), q?.(p, Y, W), T || L?.(p, W);
      }
    }
    async function F() {
      if (!d)
        return;
      const { transform: C, panBy: k, autoPanSpeed: _, autoPanOnNodeDrag: P } = t();
      if (!P) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [A, M] = lu(c, d, _);
      (A !== 0 || M !== 0) && (i.x = (i.x ?? 0) - A / C[2], i.y = (i.y ?? 0) - M / C[2], await k({ x: A, y: M }) && H(i)), s = requestAnimationFrame(F);
    }
    function X(C) {
      const { nodeLookup: k, multiSelectionActive: _, nodesDraggable: P, transform: A, snapGrid: M, snapToGrid: R, selectNodesOnDrag: q, onNodeDragStart: L, onSelectionDragStart: K, unselectNodesAndEdges: U } = t();
      g = !0, (!q || !N) && !_ && T && (k.get(T)?.selected || U()), N && q && T && e?.(T);
      const ne = Ri(C.sourceEvent, { transform: A, snapGrid: M, snapToGrid: R, containerBounds: d });
      if (i = ne, a = t0(k, P, ne, T), a.size > 0 && (n || L || !T && K)) {
        const [ee, Z] = Bi({
          nodeId: T,
          dragItems: a,
          nodeLookup: k
        });
        n?.(C.sourceEvent, a, ee, Z), L?.(C.sourceEvent, ee, Z), T || K?.(C.sourceEvent, Z);
      }
    }
    const G = Ev().clickDistance(D).on("start", (C) => {
      const { domNode: k, nodeDragThreshold: _, transform: P, snapGrid: A, snapToGrid: M } = t();
      d = k?.getBoundingClientRect() || null, h = !1, v = !1, p = C.sourceEvent, _ === 0 && X(C), i = Ri(C.sourceEvent, { transform: P, snapGrid: A, snapToGrid: M, containerBounds: d }), c = nn(C.sourceEvent, d);
    }).on("drag", (C) => {
      const { autoPanOnNodeDrag: k, transform: _, snapGrid: P, snapToGrid: A, nodeDragThreshold: M, nodeLookup: R } = t(), q = Ri(C.sourceEvent, { transform: _, snapGrid: P, snapToGrid: A, containerBounds: d });
      if (p = C.sourceEvent, (C.sourceEvent.type === "touchmove" && C.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !R.has(T)) && (h = !0), !h) {
        if (!l && k && g && (l = !0, F()), !g) {
          const L = q.xSnapped - (i.x ?? 0), K = q.ySnapped - (i.y ?? 0);
          Math.sqrt(L * L + K * K) > M && X(C);
        }
        (i.x !== q.xSnapped || i.y !== q.ySnapped) && a && g && (c = nn(C.sourceEvent, d), H(q));
      }
    }).on("end", (C) => {
      if (!(!g || h) && (l = !1, g = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: k, updateNodePositions: _, onNodeDragStop: P, onSelectionDragStop: A } = t();
        if (v && (_(a, !1), v = !1), o || P || !T && A) {
          const [M, R] = Bi({
            nodeId: T,
            dragItems: a,
            nodeLookup: k,
            dragging: !1
          });
          o?.(C.sourceEvent, a, M, R), P?.(C.sourceEvent, M, R), T || A?.(C.sourceEvent, R);
        }
      }
    }).filter((C) => {
      const k = C.target;
      return !C.button && (!S || !ul(k, `.${S}`, E)) && (!b || ul(k, b, E));
    });
    f.call(G);
  }
  function w() {
    f?.on(".drag", null);
  }
  return {
    update: x,
    destroy: w
  };
}
function o0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    no(o, Pr(i)) > 0 && r.push(i);
  return r;
}
const i0 = 250;
function s0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = o0(e, n, t + i0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: g } = ro(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
      f > t || (f < i ? (o = [{ ...c, x: d, y: g }], i = f) : f === i && o.push({ ...c, x: d, y: g }));
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
function _u(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...ro(s, l, l.position, !0) } : l;
}
function xu(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function a0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const bu = () => !0;
function l0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: g, panBy: f, cancelConnection: h, onConnectStart: v, onConnect: p, onConnectEnd: x, isValidConnection: w = bu, onReconnectEnd: S, updateConnection: b, getTransform: E, getFromHandle: N, autoPanSpeed: T, dragThreshold: D = 1, handleDomNode: H }) {
  const F = fu(e.target);
  let X = 0, G;
  const { x: C, y: k } = nn(e), _ = xu(i, H), P = a?.getBoundingClientRect();
  let A = !1;
  if (!P || !_)
    return;
  const M = _u(o, _, r, l, t);
  if (!M)
    return;
  let R = nn(e, P), q = !1, L = null, K = !1, U = null;
  function ne() {
    if (!d || !P)
      return;
    const [ae, re] = lu(R, P, T);
    f({ x: ae, y: re }), X = requestAnimationFrame(ne);
  }
  const ee = {
    ...M,
    nodeId: o,
    type: _,
    position: M.position
  }, Z = l.get(o);
  let Y = {
    inProgress: !0,
    isValid: null,
    from: ro(Z, ee, me.Left, !0),
    fromHandle: ee,
    fromPosition: ee.position,
    fromNode: Z,
    to: R,
    toHandle: null,
    toPosition: Ja[ee.position],
    toNode: null
  };
  function W() {
    A = !0, b(Y), v?.(e, { nodeId: o, handleId: r, handleType: _ });
  }
  D === 0 && W();
  function fe(ae) {
    if (!A) {
      const { x: ge, y: de } = nn(ae), $e = ge - C, be = de - k;
      if (!($e * $e + be * be > D * D))
        return;
      W();
    }
    if (!N() || !ee) {
      ke(ae);
      return;
    }
    const re = E();
    R = nn(ae, P), G = s0(xo(R, re, !1, [1, 1]), n, l, ee), q || (ne(), q = !0);
    const J = Cu(ae, {
      handle: G,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: F,
      lib: c,
      flowId: g,
      nodeLookup: l
    });
    U = J.handleDomNode, L = J.connection, K = a0(!!G, J.isValid);
    const oe = {
      // from stays the same
      ...Y,
      isValid: K,
      to: J.toHandle && K ? ii({ x: J.toHandle.x, y: J.toHandle.y }, re) : R,
      toHandle: J.toHandle,
      toPosition: K && J.toHandle ? J.toHandle.position : Ja[ee.position],
      toNode: J.toHandle ? l.get(J.toHandle.nodeId) : null
    };
    K && G && Y.toHandle && oe.toHandle && Y.toHandle.type === oe.toHandle.type && Y.toHandle.nodeId === oe.toHandle.nodeId && Y.toHandle.id === oe.toHandle.id && Y.to.x === oe.to.x && Y.to.y === oe.to.y || (b(oe), Y = oe);
  }
  function ke(ae) {
    if (A) {
      (G || U) && L && K && p?.(L);
      const { inProgress: re, ...J } = Y, oe = {
        ...J,
        toPosition: Y.toHandle ? Y.toPosition : null
      };
      x?.(ae, oe), i && S?.(ae, oe);
    }
    h(), cancelAnimationFrame(X), q = !1, K = !1, L = null, U = null, F.removeEventListener("mousemove", fe), F.removeEventListener("mouseup", ke), F.removeEventListener("touchmove", fe), F.removeEventListener("touchend", ke);
  }
  F.addEventListener("mousemove", fe), F.addEventListener("mouseup", ke), F.addEventListener("touchmove", fe), F.addEventListener("touchend", ke);
}
function Cu(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = bu, nodeLookup: d }) {
  const g = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: v } = nn(e), p = s.elementFromPoint(h, v), x = p?.classList.contains(`${a}-flow__handle`) ? p : f, w = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const S = xu(void 0, x), b = x.getAttribute("data-nodeid"), E = x.getAttribute("data-handleid"), N = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!b || !S)
      return w;
    const D = {
      source: g ? b : r,
      sourceHandle: g ? E : o,
      target: g ? r : b,
      targetHandle: g ? o : E
    };
    w.connection = D;
    const F = N && T && (n === Sr.Strict ? g && S === "source" || !g && S === "target" : b !== r || E !== o);
    w.isValid = F && c(D), w.toHandle = _u(b, S, E, d, n, !0);
  }
  return w;
}
const dl = {
  onPointerDown: l0,
  isValid: Cu
};
function c0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ot(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: g = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const v = (b) => {
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const E = n(), N = b.sourceEvent.ctrlKey && Wn() ? 10 : 1, T = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * d, D = E[2] * Math.pow(2, T * N);
      t.scaleTo(D);
    };
    let p = [0, 0];
    const x = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (p = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, w = (b) => {
      const E = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const N = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], T = [N[0] - p[0], N[1] - p[1]];
      p = N;
      const D = r() * Math.max(E[2], Math.log(E[2])) * (h ? -1 : 1), H = {
        x: E[0] - T[0] * D,
        y: E[1] - T[1] * D
      }, F = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: E[2]
      }, F, a);
    }, S = ru().on("start", x).on("zoom", g ? w : null).on("zoom.wheel", f ? v : null);
    o.call(S, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Rt
  };
}
const u0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ni = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Fi = ({ x: e, y: t, zoom: n }) => ki.translate(e, t).scale(n), fr = (e, t) => e.target.closest(`.${t}`), ku = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), d0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, qi = (e, t = 0, n = d0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Eu = (e) => {
  const t = e.ctrlKey && Wn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function f0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (fr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const g = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const x = Rt(d), w = Eu(d), S = g * Math.pow(2, w);
      r.scaleTo(n, S, x, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === an.Vertical ? 0 : d.deltaX * f, v = o === an.Horizontal ? 0 : d.deltaY * f;
    !Wn() && d.shiftKey && o !== an.Vertical && (h = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(h / g) * i,
      -(v / g) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = Ni(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, p)), e.isPanScrolling && (l?.(d, p), e.panScrollTimeout = setTimeout(() => {
      c?.(d, p), e.isPanScrolling = !1;
    }, 150));
  };
}
function g0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = fr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function h0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ni(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function v0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && ku(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ni(i.transform));
  };
}
function p0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && ku(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && u0(e.prevViewport, s.transform))) {
      const a = Ni(s.transform);
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
function m0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c }) {
  return (d) => {
    const g = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (fr(d, `${c}-flow__node`) || fr(d, `${c}-flow__edge`)))
      return !0;
    if (!r && !g && !o && !i && !n || s || fr(d, a) && d.type === "wheel" || fr(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!g && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && h;
  };
}
function y0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: c }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, g = e.getBoundingClientRect(), f = ru().clickDistance(!yn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Ot(e).call(f);
  b({
    x: i.x,
    y: i.y,
    zoom: Nr(i.zoom, t, n)
  }, [
    [0, 0],
    [g.width, g.height]
  ], o);
  const v = h.on("wheel.zoom"), p = h.on("dblclick.zoom");
  f.wheelDelta(Eu);
  function x(C, k) {
    return h ? new Promise((_) => {
      f?.interpolate(k?.interpolate === "linear" ? Zr : Ro).transform(qi(h, k?.duration, k?.ease, () => _(!0)), C);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: C, noPanClassName: k, onPaneContextMenu: _, userSelectionActive: P, panOnScroll: A, panOnDrag: M, panOnScrollMode: R, panOnScrollSpeed: q, preventScrolling: L, zoomOnPinch: K, zoomOnScroll: U, zoomOnDoubleClick: ne, zoomActivationKeyPressed: ee, lib: Z, onTransformChange: te }) {
    P && !d.isZoomingOrPanning && S();
    const W = A && !ee && !P ? f0({
      zoomPanValues: d,
      noWheelClassName: C,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: R,
      panOnScrollSpeed: q,
      zoomOnPinch: K,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : g0({
      noWheelClassName: C,
      preventScrolling: L,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", W, { passive: !1 }), !P) {
      const ke = h0({
        zoomPanValues: d,
        onDraggingChange: c,
        onPanZoomStart: a
      });
      f.on("start", ke);
      const ae = v0({
        zoomPanValues: d,
        panOnDrag: M,
        onPaneContextMenu: !!_,
        onPanZoom: s,
        onTransformChange: te
      });
      f.on("zoom", ae);
      const re = p0({
        zoomPanValues: d,
        panOnDrag: M,
        panOnScroll: A,
        onPaneContextMenu: _,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      f.on("end", re);
    }
    const fe = m0({
      zoomActivationKeyPressed: ee,
      panOnDrag: M,
      zoomOnScroll: U,
      panOnScroll: A,
      zoomOnDoubleClick: ne,
      zoomOnPinch: K,
      userSelectionActive: P,
      noPanClassName: k,
      noWheelClassName: C,
      lib: Z
    });
    f.filter(fe), ne ? h.on("dblclick.zoom", p) : h.on("dblclick.zoom", null);
  }
  function S() {
    f.on("zoom", null);
  }
  async function b(C, k, _) {
    const P = Fi(C), A = f?.constrain()(P, k, _);
    return A && await x(A), new Promise((M) => M(A));
  }
  async function E(C, k) {
    const _ = Fi(C);
    return await x(_, k), new Promise((P) => P(_));
  }
  function N(C) {
    if (h) {
      const k = Fi(C), _ = h.property("__zoom");
      (_.k !== C.zoom || _.x !== C.x || _.y !== C.y) && f?.transform(h, k, null, { sync: !0 });
    }
  }
  function T() {
    const C = h ? nu(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: C.x, y: C.y, zoom: C.k };
  }
  function D(C, k) {
    return h ? new Promise((_) => {
      f?.interpolate(k?.interpolate === "linear" ? Zr : Ro).scaleTo(qi(h, k?.duration, k?.ease, () => _(!0)), C);
    }) : Promise.resolve(!1);
  }
  function H(C, k) {
    return h ? new Promise((_) => {
      f?.interpolate(k?.interpolate === "linear" ? Zr : Ro).scaleBy(qi(h, k?.duration, k?.ease, () => _(!0)), C);
    }) : Promise.resolve(!1);
  }
  function F(C) {
    f?.scaleExtent(C);
  }
  function X(C) {
    f?.translateExtent(C);
  }
  function G(C) {
    const k = !yn(C) || C < 0 ? 0 : C;
    f?.clickDistance(k);
  }
  return {
    update: w,
    destroy: S,
    setViewport: E,
    setViewportConstrained: b,
    getViewport: T,
    scaleTo: D,
    scaleBy: H,
    setScaleExtent: F,
    setTranslateExtent: X,
    syncViewport: N,
    setClickDistance: G
  };
}
var fl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(fl || (fl = {}));
var w0 = /* @__PURE__ */ Q("<div><!></div>");
function Hn(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => me.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), c = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), g = y(t, "onconnect", 7), f = y(t, "ondisconnect", 7), h = y(t, "children", 7), v = /* @__PURE__ */ Ve(t, [
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
  const p = Vn("svelteflow__node_id"), x = Vn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ $(() => r() === "target"), S = /* @__PURE__ */ $(() => a() !== void 0 ? a() : x.value), b = jt(), E = /* @__PURE__ */ $(() => b.ariaLabelConfig), N = null;
  sc(() => {
    if (g() || f()) {
      b.edges;
      let L = b.connectionLookup.get(`${p}-${r()}${n() ? `-${n()}` : ""}`);
      if (N && !wp(L, N)) {
        const K = L ?? /* @__PURE__ */ new Map();
        Qa(N, K, f()), Qa(K, N, g());
      }
      N = new Map(L);
    }
  });
  let T = /* @__PURE__ */ $(() => {
    if (!b.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: L, toHandle: K, isValid: U } = b.connection, ne = L && L.nodeId === p && L.type === r() && L.id === n(), ee = K && K.nodeId === p && K.type === r() && K.id === n(), Z = b.connectionMode === Sr.Strict ? L?.type !== r() : p !== L?.nodeId || n() !== L?.id;
    return [
      !0,
      ne,
      ee,
      Z,
      ee && U
    ];
  }), D = /* @__PURE__ */ $(() => lo(u(T), 5)), H = /* @__PURE__ */ $(() => u(D)[0]), F = /* @__PURE__ */ $(() => u(D)[1]), X = /* @__PURE__ */ $(() => u(D)[2]), G = /* @__PURE__ */ $(() => u(D)[3]), C = /* @__PURE__ */ $(() => u(D)[4]);
  function k(L) {
    const K = b.onbeforeconnect ? b.onbeforeconnect(L) : L;
    K && (b.addEdge(K), b.onconnect?.(L));
  }
  function _(L) {
    const K = hu(L);
    L.currentTarget && (K && L.button === 0 || !K) && dl.onPointerDown(L, {
      handleId: n(),
      nodeId: p,
      isTarget: u(w),
      connectionRadius: b.connectionRadius,
      domNode: b.domNode,
      nodeLookup: b.nodeLookup,
      connectionMode: b.connectionMode,
      lib: "svelte",
      autoPanOnConnect: b.autoPanOnConnect,
      flowId: b.flowId,
      isValidConnection: d() ?? b.isValidConnection,
      updateConnection: b.updateConnection,
      cancelConnection: b.cancelConnection,
      panBy: b.panBy,
      onConnect: k,
      onConnectStart: (U, ne) => {
        b.onconnectstart?.(U, {
          nodeId: ne.nodeId,
          handleId: ne.handleId,
          handleType: ne.handleType
        });
      },
      onConnectEnd: (U, ne) => {
        b.onconnectend?.(U, ne);
      },
      getTransform: () => [b.viewport.x, b.viewport.y, b.viewport.zoom],
      getFromHandle: () => b.connection.fromHandle,
      dragThreshold: b.connectionDragThreshold,
      handleDomNode: L.currentTarget
    });
  }
  function P(L) {
    if (!p || !b.clickConnectStartHandle && !l())
      return;
    if (!b.clickConnectStartHandle) {
      b.onclickconnectstart?.(L, { nodeId: p, handleId: n(), handleType: r() }), b.clickConnectStartHandle = { nodeId: p, type: r(), id: n() };
      return;
    }
    const K = fu(L.target), U = d() ?? b.isValidConnection, { connectionMode: ne, clickConnectStartHandle: ee, flowId: Z, nodeLookup: te } = b, { connection: Y, isValid: W } = dl.isValid(L, {
      handle: { nodeId: p, id: n(), type: r() },
      connectionMode: ne,
      fromNodeId: ee.nodeId,
      fromHandleId: ee.id ?? null,
      fromType: ee.type,
      isValidConnection: U,
      flowId: Z,
      doc: K,
      lib: "svelte",
      nodeLookup: te
    });
    W && Y && k(Y);
    const fe = structuredClone(Bl(b.connection));
    delete fe.inProgress, fe.toPosition = fe.toHandle ? fe.toHandle.position : null, b.onclickconnectend?.(L, fe), b.clickConnectStartHandle = null;
  }
  var A = {
    get id() {
      return n();
    },
    set id(L = null) {
      n(L), m();
    },
    get type() {
      return r();
    },
    set type(L = "source") {
      r(L), m();
    },
    get position() {
      return o();
    },
    set position(L = me.Top) {
      o(L), m();
    },
    get style() {
      return i();
    },
    set style(L) {
      i(L), m();
    },
    get class() {
      return s();
    },
    set class(L) {
      s(L), m();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(L) {
      a(L), m();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(L = !0) {
      l(L), m();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd(L = !0) {
      c(L), m();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(L) {
      d(L), m();
    },
    get onconnect() {
      return g();
    },
    set onconnect(L) {
      g(L), m();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(L) {
      f(L), m();
    },
    get children() {
      return h();
    },
    set children(L) {
      h(L), m();
    }
  }, M = w0(), R = () => {
  };
  Qe(
    M,
    (L) => ({
      "data-handleid": n(),
      "data-nodeid": p,
      "data-handlepos": o(),
      "data-id": `${b.flowId ?? ""}-${p ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        b.noDragClass,
        b.noPanClass,
        o(),
        s()
      ],
      onmousedown: _,
      ontouchstart: _,
      onclick: b.clickConnect ? P : void 0,
      onkeypress: R,
      style: i(),
      role: "button",
      "aria-label": u(E)["handle.ariaLabel"],
      tabindex: "-1",
      ...v,
      [Dn]: L
    }),
    [
      () => ({
        valid: u(C),
        connectingto: u(X),
        connectingfrom: u(F),
        source: !u(w),
        target: u(w),
        connectablestart: l(),
        connectableend: c(),
        connectable: u(S),
        connectionindicator: u(S) && (!u(H) || u(G)) && (u(H) || b.clickConnectStartHandle ? c() : l())
      })
    ]
  );
  var q = z(M);
  return Ye(q, () => h() ?? at), I(M), O(e, M), ue(A);
}
se(
  Hn,
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
var _0 = /* @__PURE__ */ Q("<!> <!>", 1);
function sa(e, t) {
  ce(t, !0);
  let n = y(t, "data", 7), r = y(t, "targetPosition", 23, () => me.Top), o = y(t, "sourcePosition", 23, () => me.Bottom);
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
    set targetPosition(d = me.Top) {
      r(d), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = me.Bottom) {
      o(d), m();
    }
  }, s = _0(), a = ie(s);
  Hn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = V(a), c = V(l);
  return Hn(c, {
    type: "source",
    get position() {
      return o();
    }
  }), _e(() => ze(l, ` ${n()?.label ?? ""} `)), O(e, s), ue(i);
}
se(sa, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var x0 = /* @__PURE__ */ Q(" <!>", 1);
function Su(e, t) {
  ce(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "sourcePosition", 23, () => me.Bottom);
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
    set sourcePosition(l = me.Bottom) {
      r(l), m();
    }
  };
  pe();
  var i = x0(), s = ie(i), a = V(s);
  return Hn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), _e(() => ze(s, `${n()?.label ?? ""} `)), O(e, i), ue(o);
}
se(Su, { data: {}, sourcePosition: {} }, [], [], !0);
var b0 = /* @__PURE__ */ Q(" <!>", 1);
function Nu(e, t) {
  ce(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "targetPosition", 23, () => me.Top);
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
    set targetPosition(l = me.Top) {
      r(l), m();
    }
  };
  pe();
  var i = b0(), s = ie(i), a = V(s);
  return Hn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), _e(() => ze(s, `${n()?.label ?? ""} `)), O(e, i), ue(o);
}
se(Nu, { data: {}, targetPosition: {} }, [], [], !0);
function Pu(e, t) {
}
se(Pu, {}, [], [], !0);
function Ki(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function $u(e, t) {
  const n = /* @__PURE__ */ $(jt), r = /* @__PURE__ */ $(() => u(n).domNode);
  let o;
  return u(r) ? Ki(e, u(r), t) : o = Is(() => {
    Ze(() => {
      Ki(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      Ki(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Tu() {
  let e = /* @__PURE__ */ Se(typeof window > "u");
  if (u(e)) {
    const t = Is(() => {
      Ze(() => {
        j(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const gl = (e) => xp(e), C0 = (e) => iu(e);
function dn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const si = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var k0 = /* @__PURE__ */ Q("<div><!></div>");
const E0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function Du(e, t) {
  ce(t, !0), Ae(e, E0);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), c = y(t, "children", 7), d = /* @__PURE__ */ Ve(t, [
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
  const g = jt(), f = Vn("svelteflow__edge_id");
  let h = /* @__PURE__ */ $(() => g.visible.edges.get(f)?.zIndex);
  var v = {
    get x() {
      return n();
    },
    set x(S = 0) {
      n(S), m();
    },
    get y() {
      return r();
    },
    set y(S = 0) {
      r(S), m();
    },
    get width() {
      return o();
    },
    set width(S) {
      o(S), m();
    },
    get height() {
      return i();
    },
    set height(S) {
      i(S), m();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(S = !1) {
      s(S), m();
    },
    get transparent() {
      return a();
    },
    set transparent(S = !1) {
      a(S), m();
    },
    get class() {
      return l();
    },
    set class(S) {
      l(S), m();
    },
    get children() {
      return c();
    },
    set children(S) {
      c(S), m();
    }
  }, p = k0(), x = () => {
    s() && f && g.handleEdgeSelection(f);
  };
  Qe(
    p,
    (S) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: x,
      ...d,
      [tn]: S
    }),
    [
      () => ({
        display: Tu().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: dn(o()),
        height: dn(i()),
        "z-index": u(h)
      })
    ],
    void 0,
    "svelte-w2n27y"
  );
  var w = z(p);
  return Ye(w, () => c() ?? at), I(p), gt(p, (S, b) => $u?.(S, b), () => "edge-labels"), O(e, p), ue(v);
}
se(
  Du,
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
var S0 = /* @__PURE__ */ ve("<path></path>"), N0 = /* @__PURE__ */ ve('<path fill="none"></path><!><!>', 1);
function bo(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), c = y(t, "markerEnd", 7), d = y(t, "style", 7), g = y(t, "interactionWidth", 7, 20), f = y(t, "class", 7), h = /* @__PURE__ */ Ve(t, [
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
    set id(N) {
      n(N), m();
    },
    get path() {
      return r();
    },
    set path(N) {
      r(N), m();
    },
    get label() {
      return o();
    },
    set label(N) {
      o(N), m();
    },
    get labelX() {
      return i();
    },
    set labelX(N) {
      i(N), m();
    },
    get labelY() {
      return s();
    },
    set labelY(N) {
      s(N), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(N) {
      a(N), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(N) {
      l(N), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(N) {
      c(N), m();
    },
    get style() {
      return d();
    },
    set style(N) {
      d(N), m();
    },
    get interactionWidth() {
      return g();
    },
    set interactionWidth(N = 20) {
      g(N), m();
    },
    get class() {
      return f();
    },
    set class(N) {
      f(N), m();
    }
  }, p = N0(), x = ie(p), w = V(x);
  {
    var S = (N) => {
      var T = S0();
      Qe(T, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": g(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), O(N, T);
    };
    le(w, (N) => {
      g() > 0 && N(S);
    });
  }
  var b = V(w);
  {
    var E = (N) => {
      Du(N, {
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
        children: (T, D) => {
          pe();
          var H = xe();
          _e(() => ze(H, o())), O(T, H);
        },
        $$slots: { default: !0 }
      });
    };
    le(b, (N) => {
      o() && N(E);
    });
  }
  return _e(() => {
    ye(x, "id", n()), ye(x, "d", r()), St(x, 0, Sn(["svelte-flow__edge-path", f()])), ye(x, "marker-start", l()), ye(x, "marker-end", c()), lt(x, d());
  }), O(e, p), ue(v);
}
se(
  bo,
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
function aa(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), c = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), g = y(t, "sourceY", 7), f = y(t, "style", 7), h = y(t, "targetPosition", 7), v = y(t, "targetX", 7), p = y(t, "targetY", 7), x = /* @__PURE__ */ $(() => vu({
    sourceX: d(),
    sourceY: g(),
    targetX: v(),
    targetY: p(),
    sourcePosition: c(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ $(() => lo(u(x), 3)), S = /* @__PURE__ */ $(() => u(w)[0]), b = /* @__PURE__ */ $(() => u(w)[1]), E = /* @__PURE__ */ $(() => u(w)[2]);
  var N = {
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
      return g();
    },
    set sourceY(T) {
      g(T), m();
    },
    get style() {
      return f();
    },
    set style(T) {
      f(T), m();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(T) {
      h(T), m();
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
  return bo(e, {
    get id() {
      return n();
    },
    get path() {
      return u(S);
    },
    get labelX() {
      return u(b);
    },
    get labelY() {
      return u(E);
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
  }), ue(N);
}
se(
  aa,
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
function Au(e, t) {
  ce(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), c = y(t, "sourceX", 7), d = y(t, "sourceY", 7), g = y(t, "targetPosition", 7), f = y(t, "targetX", 7), h = y(t, "targetY", 7), v = /* @__PURE__ */ $(() => na({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: g()
  })), p = /* @__PURE__ */ $(() => lo(u(v), 3)), x = /* @__PURE__ */ $(() => u(p)[0]), w = /* @__PURE__ */ $(() => u(p)[1]), S = /* @__PURE__ */ $(() => u(p)[2]);
  var b = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(E) {
      n(E), m();
    },
    get label() {
      return r();
    },
    set label(E) {
      r(E), m();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(E) {
      o(E), m();
    },
    get style() {
      return i();
    },
    set style(E) {
      i(E), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(E) {
      s(E), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(E) {
      a(E), m();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(E) {
      l(E), m();
    },
    get sourceX() {
      return c();
    },
    set sourceX(E) {
      c(E), m();
    },
    get sourceY() {
      return d();
    },
    set sourceY(E) {
      d(E), m();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(E) {
      g(E), m();
    },
    get targetX() {
      return f();
    },
    set targetX(E) {
      f(E), m();
    },
    get targetY() {
      return h();
    },
    set targetY(E) {
      h(E), m();
    }
  };
  return bo(e, {
    get path() {
      return u(x);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(S);
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
  }), ue(b);
}
se(
  Au,
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
function Mu(e, t) {
  ce(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), c = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), g = y(t, "style", 7), f = /* @__PURE__ */ $(() => mu({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ $(() => lo(u(f), 3)), v = /* @__PURE__ */ $(() => u(h)[0]), p = /* @__PURE__ */ $(() => u(h)[1]), x = /* @__PURE__ */ $(() => u(h)[2]);
  var w = {
    get sourceX() {
      return n();
    },
    set sourceX(S) {
      n(S), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(S) {
      r(S), m();
    },
    get targetX() {
      return o();
    },
    set targetX(S) {
      o(S), m();
    },
    get targetY() {
      return i();
    },
    set targetY(S) {
      i(S), m();
    },
    get label() {
      return s();
    },
    set label(S) {
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
    get interactionWidth() {
      return d();
    },
    set interactionWidth(S) {
      d(S), m();
    },
    get style() {
      return g();
    },
    set style(S) {
      g(S), m();
    }
  };
  return bo(e, {
    get path() {
      return u(v);
    },
    get labelX() {
      return u(p);
    },
    get labelY() {
      return u(x);
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
      return g();
    }
  }), ue(w);
}
se(
  Mu,
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
function Ou(e, t) {
  ce(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), c = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), g = y(t, "markerEnd", 7), f = y(t, "interactionWidth", 7), h = y(t, "style", 7), v = /* @__PURE__ */ $(() => na({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), p = /* @__PURE__ */ $(() => lo(u(v), 3)), x = /* @__PURE__ */ $(() => u(p)[0]), w = /* @__PURE__ */ $(() => u(p)[1]), S = /* @__PURE__ */ $(() => u(p)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(E) {
      n(E), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(E) {
      r(E), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(E) {
      o(E), m();
    },
    get targetX() {
      return i();
    },
    set targetX(E) {
      i(E), m();
    },
    get targetY() {
      return s();
    },
    set targetY(E) {
      s(E), m();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(E) {
      a(E), m();
    },
    get label() {
      return l();
    },
    set label(E) {
      l(E), m();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(E) {
      c(E), m();
    },
    get markerStart() {
      return d();
    },
    set markerStart(E) {
      d(E), m();
    },
    get markerEnd() {
      return g();
    },
    set markerEnd(E) {
      g(E), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(E) {
      f(E), m();
    },
    get style() {
      return h();
    },
    set style(E) {
      h(E), m();
    }
  };
  return bo(e, {
    get path() {
      return u(x);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(S);
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
      return g();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return h();
    }
  }), ue(b);
}
se(
  Ou,
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
class P0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = Bf(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const $0 = /\(.+\)/, T0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class D0 extends P0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = $0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => T0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => es(o, "change", i)
    );
  }
}
function A0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ea(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function hl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const g = r.get(d.source), f = r.get(d.target);
    if (!g || !f)
      continue;
    if (a) {
      const { visibleNodes: p, transform: x, width: w, height: S } = e;
      if (Lp({
        sourceNode: g,
        targetNode: f,
        width: w,
        height: S,
        transform: x
      }))
        p.set(g.id, g), p.set(f.id, f);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && g == h.sourceNode && f == h.targetNode) {
      c.set(d.id, h);
      continue;
    }
    const v = Fp({
      id: d.id,
      sourceNode: g,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    v && c.set(d.id, {
      ...n,
      ...d,
      ...v,
      zIndex: Op({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: g,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: g,
      targetNode: f,
      edge: d
    });
  }
  return c;
}
const Lu = {
  input: Su,
  output: Nu,
  default: sa,
  group: Pu
}, Vu = {
  straight: Mu,
  smoothstep: Au,
  default: aa,
  step: Ou
};
function M0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = wo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ta(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function O0(e) {
  class t {
    #t = /* @__PURE__ */ $(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      j(this.#t, r);
    }
    #e = /* @__PURE__ */ Se(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      j(this.#e, r);
    }
    #n = /* @__PURE__ */ Se(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      j(this.#n, r);
    }
    #o = /* @__PURE__ */ Se(e.width ?? 0);
    get width() {
      return u(this.#o);
    }
    set width(r) {
      j(this.#o, r);
    }
    #u = /* @__PURE__ */ Se(e.height ?? 0);
    get height() {
      return u(this.#u);
    }
    set height(r) {
      j(this.#u, r);
    }
    #i = /* @__PURE__ */ $(() => {
      const r = Wp(e.nodes, this.nodeLookup, this.parentLookup, {
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
      j(this.#i, r);
    }
    #a = /* @__PURE__ */ $(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#a);
    }
    set viewportInitialized(r) {
      j(this.#a, r);
    }
    #s = /* @__PURE__ */ $(() => (Qp(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#s);
    }
    set _edges(r) {
      j(this.#s, r);
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
    #r = /* @__PURE__ */ $(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#r);
    }
    set selectedNodes(r) {
      j(this.#r, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ $(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#l);
    }
    set selectedEdges(r) {
      j(this.#l, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #d = /* @__PURE__ */ $(() => {
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
      let g, f;
      const h = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (c) {
        const { viewport: v, width: p, height: x } = this, w = [v.x, v.y, v.zoom];
        g = A0(s, w, p, x), f = hl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: g,
          transform: w,
          width: p,
          height: x
        });
      } else
        g = this.nodeLookup, f = hl(h);
      return { nodes: g, edges: f };
    });
    get visible() {
      return u(this.#d);
    }
    set visible(r) {
      j(this.#d, r);
    }
    #f = /* @__PURE__ */ $(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#f);
    }
    set nodesDraggable(r) {
      j(this.#f, r);
    }
    #h = /* @__PURE__ */ $(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#h);
    }
    set nodesConnectable(r) {
      j(this.#h, r);
    }
    #c = /* @__PURE__ */ $(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#c);
    }
    set elementsSelectable(r) {
      j(this.#c, r);
    }
    #g = /* @__PURE__ */ $(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#g);
    }
    set nodesFocusable(r) {
      j(this.#g, r);
    }
    #v = /* @__PURE__ */ $(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#v);
    }
    set edgesFocusable(r) {
      j(this.#v, r);
    }
    #p = /* @__PURE__ */ $(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#p);
    }
    set disableKeyboardA11y(r) {
      j(this.#p, r);
    }
    #m = /* @__PURE__ */ $(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      j(this.#m, r);
    }
    #y = /* @__PURE__ */ $(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#y);
    }
    set maxZoom(r) {
      j(this.#y, r);
    }
    #w = /* @__PURE__ */ $(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#w);
    }
    set nodeOrigin(r) {
      j(this.#w, r);
    }
    #_ = /* @__PURE__ */ $(() => e.props.nodeExtent ?? gs);
    get nodeExtent() {
      return u(this.#_);
    }
    set nodeExtent(r) {
      j(this.#_, r);
    }
    #x = /* @__PURE__ */ $(() => e.props.translateExtent ?? gs);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      j(this.#x, r);
    }
    #b = /* @__PURE__ */ $(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#b);
    }
    set defaultEdgeOptions(r) {
      j(this.#b, r);
    }
    #C = /* @__PURE__ */ $(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      j(this.#C, r);
    }
    #k = /* @__PURE__ */ $(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      j(this.#k, r);
    }
    #E = /* @__PURE__ */ $(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#E);
    }
    set autoPanOnConnect(r) {
      j(this.#E, r);
    }
    #S = /* @__PURE__ */ $(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      j(this.#S, r);
    }
    #N = /* @__PURE__ */ $(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#N);
    }
    set connectionDragThreshold(r) {
      j(this.#N, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ $(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#P);
    }
    set snapGrid(r) {
      j(this.#P, r);
    }
    #$ = /* @__PURE__ */ Se(!1);
    get dragging() {
      return u(this.#$);
    }
    set dragging(r) {
      j(this.#$, r);
    }
    #T = /* @__PURE__ */ Se(null);
    get selectionRect() {
      return u(this.#T);
    }
    set selectionRect(r) {
      j(this.#T, r);
    }
    #D = /* @__PURE__ */ Se(!1);
    get selectionKeyPressed() {
      return u(this.#D);
    }
    set selectionKeyPressed(r) {
      j(this.#D, r);
    }
    #A = /* @__PURE__ */ Se(!1);
    get multiselectionKeyPressed() {
      return u(this.#A);
    }
    set multiselectionKeyPressed(r) {
      j(this.#A, r);
    }
    #M = /* @__PURE__ */ Se(!1);
    get deleteKeyPressed() {
      return u(this.#M);
    }
    set deleteKeyPressed(r) {
      j(this.#M, r);
    }
    #O = /* @__PURE__ */ Se(!1);
    get panActivationKeyPressed() {
      return u(this.#O);
    }
    set panActivationKeyPressed(r) {
      j(this.#O, r);
    }
    #L = /* @__PURE__ */ Se(!1);
    get zoomActivationKeyPressed() {
      return u(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      j(this.#L, r);
    }
    #V = /* @__PURE__ */ Se(null);
    get selectionRectMode() {
      return u(this.#V);
    }
    set selectionRectMode(r) {
      j(this.#V, r);
    }
    #H = /* @__PURE__ */ Se("");
    get ariaLiveMessage() {
      return u(this.#H);
    }
    set ariaLiveMessage(r) {
      j(this.#H, r);
    }
    #I = /* @__PURE__ */ $(() => e.props.selectionMode ?? ri.Partial);
    get selectionMode() {
      return u(this.#I);
    }
    set selectionMode(r) {
      j(this.#I, r);
    }
    #z = /* @__PURE__ */ $(() => ({ ...Lu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#z);
    }
    set nodeTypes(r) {
      j(this.#z, r);
    }
    #R = /* @__PURE__ */ $(() => ({ ...Vu, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#R);
    }
    set edgeTypes(r) {
      j(this.#R, r);
    }
    #B = /* @__PURE__ */ $(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#B);
    }
    set noPanClass(r) {
      j(this.#B, r);
    }
    #F = /* @__PURE__ */ $(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#F);
    }
    set noDragClass(r) {
      j(this.#F, r);
    }
    #q = /* @__PURE__ */ $(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#q);
    }
    set noWheelClass(r) {
      j(this.#q, r);
    }
    #K = /* @__PURE__ */ $(() => Dp(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#K);
    }
    set ariaLabelConfig(r) {
      j(this.#K, r);
    }
    #Z = /* @__PURE__ */ Se(M0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#Z);
    }
    set _viewport(r) {
      j(this.#Z, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Se(
      // _connection is viewport independent and originating from XYHandle
      hs
    );
    get _connection() {
      return u(this.#Y);
    }
    set _connection(r) {
      j(this.#Y, r);
    }
    #W = /* @__PURE__ */ $(() => this._connection.inProgress ? {
      ...this._connection,
      to: xo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#W);
    }
    set connection(r) {
      j(this.#W, r);
    }
    #X = /* @__PURE__ */ $(() => e.props.connectionMode ?? Sr.Strict);
    get connectionMode() {
      return u(this.#X);
    }
    set connectionMode(r) {
      j(this.#X, r);
    }
    #j = /* @__PURE__ */ $(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#j);
    }
    set connectionRadius(r) {
      j(this.#j, r);
    }
    #G = /* @__PURE__ */ $(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#G);
    }
    set isValidConnection(r) {
      j(this.#G, r);
    }
    #U = /* @__PURE__ */ $(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#U);
    }
    set selectNodesOnDrag(r) {
      j(this.#U, r);
    }
    #J = /* @__PURE__ */ $(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#J);
    }
    set defaultMarkerColor(r) {
      j(this.#J, r);
    }
    #Q = /* @__PURE__ */ $(() => qp(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#Q);
    }
    set markers(r) {
      j(this.#Q, r);
    }
    #ee = /* @__PURE__ */ $(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      j(this.#ee, r);
    }
    #te = /* @__PURE__ */ $(() => e.props.onflowerror ?? Np);
    get onerror() {
      return u(this.#te);
    }
    set onerror(r) {
      j(this.#te, r);
    }
    #ne = /* @__PURE__ */ $(() => e.props.ondelete);
    get ondelete() {
      return u(this.#ne);
    }
    set ondelete(r) {
      j(this.#ne, r);
    }
    #re = /* @__PURE__ */ $(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#re);
    }
    set onbeforedelete(r) {
      j(this.#re, r);
    }
    #oe = /* @__PURE__ */ $(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#oe);
    }
    set onbeforeconnect(r) {
      j(this.#oe, r);
    }
    #ie = /* @__PURE__ */ $(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ie);
    }
    set onconnect(r) {
      j(this.#ie, r);
    }
    #se = /* @__PURE__ */ $(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#se);
    }
    set onconnectstart(r) {
      j(this.#se, r);
    }
    #ae = /* @__PURE__ */ $(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ae);
    }
    set onconnectend(r) {
      j(this.#ae, r);
    }
    #le = /* @__PURE__ */ $(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#le);
    }
    set onbeforereconnect(r) {
      j(this.#le, r);
    }
    #ce = /* @__PURE__ */ $(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ce);
    }
    set onreconnect(r) {
      j(this.#ce, r);
    }
    #ue = /* @__PURE__ */ $(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#ue);
    }
    set onreconnectstart(r) {
      j(this.#ue, r);
    }
    #de = /* @__PURE__ */ $(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#de);
    }
    set onreconnectend(r) {
      j(this.#de, r);
    }
    #fe = /* @__PURE__ */ $(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#fe);
    }
    set clickConnect(r) {
      j(this.#fe, r);
    }
    #ge = /* @__PURE__ */ $(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      j(this.#ge, r);
    }
    #he = /* @__PURE__ */ $(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#he);
    }
    set onclickconnectend(r) {
      j(this.#he, r);
    }
    #ve = /* @__PURE__ */ Se(null);
    get clickConnectStartHandle() {
      return u(this.#ve);
    }
    set clickConnectStartHandle(r) {
      j(this.#ve, r);
    }
    #pe = /* @__PURE__ */ $(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#pe);
    }
    set onselectiondrag(r) {
      j(this.#pe, r);
    }
    #me = /* @__PURE__ */ $(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#me);
    }
    set onselectiondragstart(r) {
      j(this.#me, r);
    }
    #ye = /* @__PURE__ */ $(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#ye);
    }
    set onselectiondragstop(r) {
      j(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Ep(
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
    _prefersDark = new D0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ $(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#we);
    }
    set colorMode(r) {
      j(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = hs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function jt() {
  const e = Vn(ai);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const ai = Symbol();
function Hu(e) {
  const t = O0(e);
  function n(C) {
    t.nodeTypes = {
      ...Lu,
      ...C
    };
  }
  function r(C) {
    t.edgeTypes = {
      ...Vu,
      ...C
    };
  }
  function o(C) {
    t.edges = Ip(C, t.edges);
  }
  const i = (C, k = !1) => {
    t.nodes = t.nodes.map((_) => {
      const P = C.get(_.id);
      return P ? { ..._, position: P.position, dragging: k } : _;
    });
  };
  function s(C) {
    const { changes: k, updatedInternals: _ } = Up(C, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!_)
      return;
    Yp(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const P = /* @__PURE__ */ new Map();
    for (const A of k) {
      const M = t.nodeLookup.get(A.id)?.internals.userNode;
      if (!M)
        continue;
      const R = { ...M };
      switch (A.type) {
        case "dimensions": {
          const q = { ...R.measured, ...A.dimensions };
          A.setAttributes && (R.width = A.dimensions?.width ?? R.width, R.height = A.dimensions?.height ?? R.height), R.measured = q;
          break;
        }
        case "position":
          R.position = A.position ?? R.position;
          break;
      }
      P.set(A.id, R);
    }
    t.nodes = t.nodes.map((A) => P.get(A.id) ?? A);
  }
  function a(C) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = C, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(C, k, _) {
    const P = typeof _?.zoom < "u" ? _.zoom : t.maxZoom, A = t.panZoom;
    return A ? (await A.setViewport({
      x: t.width / 2 - C * P,
      y: t.height / 2 - k * P,
      zoom: P
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(C, k) {
    const _ = t.panZoom;
    return _ ? _.scaleBy(C, k) : Promise.resolve(!1);
  }
  function d(C) {
    return c(1.2, C);
  }
  function g(C) {
    return c(1 / 1.2, C);
  }
  function f(C) {
    const k = t.panZoom;
    k && (k.setScaleExtent([C, t.maxZoom]), t.minZoom = C);
  }
  function h(C) {
    const k = t.panZoom;
    k && (k.setScaleExtent([t.minZoom, C]), t.maxZoom = C);
  }
  function v(C) {
    const k = t.panZoom;
    k && (k.setTranslateExtent(C), t.translateExtent = C);
  }
  function p(C) {
    t.panZoom?.setClickDistance(C);
  }
  function x(C, k = null) {
    let _ = !1;
    const P = C.map((A) => (k ? k.has(A.id) : !0) && A.selected ? (_ = !0, { ...A, selected: !1 }) : A);
    return [_, P];
  }
  function w(C) {
    const k = C?.nodes ? new Set(C.nodes.map((q) => q.id)) : null, [_, P] = x(t.nodes, k);
    _ && (t.nodes = P);
    const A = C?.edges ? new Set(C.edges.map((q) => q.id)) : null, [M, R] = x(t.edges, A);
    M && (t.edges = R);
  }
  function S(C) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((_) => {
      const P = C.includes(_.id), A = k && _.selected || P;
      if (_.selected !== A) {
        const M = t.nodeLookup.get(_.id);
        return M && (M.selected = A), _.selected = A, { ..._ };
      }
      return _;
    }), k || w({ nodes: [] });
  }
  function b(C) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((_) => {
      const P = C.includes(_.id), A = k && _.selected || P;
      return _.selected !== A ? { ..._, selected: A } : _;
    }), k || w({ edges: [] });
  }
  function E(C, k, _) {
    const P = t.nodeLookup.get(C);
    if (!P) {
      console.warn("012", eo.error012(C));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, P.selected ? (k || P.selected && t.multiselectionKeyPressed) && (w({ nodes: [P], edges: [] }), requestAnimationFrame(() => _?.blur())) : S([C]);
  }
  function N(C) {
    const k = t.edgeLookup.get(C);
    if (!k) {
      console.warn("012", eo.error012(C));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [k] }) : b([C]));
  }
  function T(C, k) {
    const { nodeExtent: _, snapGrid: P, nodeOrigin: A, nodeLookup: M, nodesDraggable: R, onerror: q } = t, L = /* @__PURE__ */ new Map(), K = P?.[0] ?? 5, U = P?.[1] ?? 5, ne = C.x * K * k, ee = C.y * U * k;
    for (const Z of M.values()) {
      if (!(Z.selected && (Z.draggable || R && typeof Z.draggable > "u")))
        continue;
      let Y = {
        x: Z.internals.positionAbsolute.x + ne,
        y: Z.internals.positionAbsolute.y + ee
      };
      P && (Y = _o(Y, P));
      const { position: W, positionAbsolute: fe } = su({
        nodeId: Z.id,
        nextPosition: Y,
        nodeLookup: M,
        nodeExtent: _,
        nodeOrigin: A,
        onError: q
      });
      Z.position = W, Z.internals.positionAbsolute = fe, L.set(Z.id, Z);
    }
    i(L);
  }
  function D(C) {
    return Jp({
      delta: C,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const H = (C) => {
    t._connection = { ...C };
  };
  function F() {
    t._connection = hs;
  }
  function X() {
    t.resetStoreValues(), w();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: g,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: h,
    setTranslateExtent: v,
    setPaneClickDistance: p,
    unselectNodesAndEdges: w,
    addSelectedNodes: S,
    addSelectedEdges: b,
    handleNodeSelection: E,
    handleEdgeSelection: N,
    moveSelectedNodes: T,
    panBy: D,
    updateConnection: H,
    cancelConnection: F,
    reset: X
  });
}
function L0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: c, setPanZoomInstance: d, onDraggingChange: g, onTransformChange: f } = t, h = y0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: c,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: g
  }), v = h.getViewport();
  return (o.x !== v.x || o.y !== v.y || o.zoom !== v.zoom) && f([v.x, v.y, v.zoom]), d(h), h.update(t), {
    update(p) {
      h.update(p);
    }
  };
}
var V0 = /* @__PURE__ */ Q('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Iu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 23, () => an.Free), o = y(t, "preventScrolling", 7, !0), i = y(t, "zoomOnScroll", 7, !0), s = y(t, "zoomOnDoubleClick", 7, !0), a = y(t, "zoomOnPinch", 7, !0), l = y(t, "panOnDrag", 7, !0), c = y(t, "panOnScroll", 7, !1), d = y(t, "paneClickDistance", 7, 1), g = y(t, "onmovestart", 7), f = y(t, "onmove", 7), h = y(t, "onmoveend", 7), v = y(t, "oninit", 7), p = y(t, "children", 7), x = /* @__PURE__ */ $(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ $(() => n().panActivationKeyPressed || c());
  const { viewport: S } = n();
  let b = !1;
  Ze(() => {
    !b && n().viewportInitialized && (v()?.(), b = !0);
  });
  var E = {
    get store() {
      return n();
    },
    set store(D) {
      n(D), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(D = an.Free) {
      r(D), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(D = !0) {
      o(D), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(D = !0) {
      i(D), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(D = !0) {
      s(D), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(D = !0) {
      a(D), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(D = !0) {
      l(D), m();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(D = !1) {
      c(D), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(D = 1) {
      d(D), m();
    },
    get onmovestart() {
      return g();
    },
    set onmovestart(D) {
      g(D), m();
    },
    get onmove() {
      return f();
    },
    set onmove(D) {
      f(D), m();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(D) {
      h(D), m();
    },
    get oninit() {
      return v();
    },
    set oninit(D) {
      v(D), m();
    },
    get children() {
      return p();
    },
    set children(D) {
      p(D), m();
    }
  }, N = V0(), T = z(N);
  return Ye(T, p), I(N), gt(N, (D, H) => L0?.(D, H), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: S,
    onDraggingChange: (D) => {
      n(n().dragging = D, !0);
    },
    setPanZoomInstance: (D) => {
      n(n().panZoom = D, !0);
    },
    onPanZoomStart: g(),
    onPanZoom: f(),
    onPanZoomEnd: h(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: u(w),
    panOnDrag: u(x),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || an.Free,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: d(),
    onTransformChange: (D) => {
      n(n().viewport = { x: D[0], y: D[1], zoom: D[2] }, !0);
    }
  })), O(e, N), ue(E);
}
se(
  Iu,
  {
    store: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
    paneClickDistance: {},
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
function pl(e) {
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
var H0 = /* @__PURE__ */ Q("<div><!></div>");
function zu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "selectionOnDrag", 7), i = y(t, "onpaneclick", 7), s = y(t, "onpanecontextmenu", 7), a = y(t, "onselectionstart", 7), l = y(t, "onselectionend", 7), c = y(t, "children", 7), d, g = null, f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ $(() => n().panActivationKeyPressed || r()), p = /* @__PURE__ */ $(() => n().selectionKeyPressed || n().selectionRect || o() && u(v) !== !0), x = /* @__PURE__ */ $(() => n().elementsSelectable && (u(p) || n().selectionRectMode === "user")), w = !1;
  function S(k) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: k }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function b(k) {
    if (g = d?.getBoundingClientRect(), !n().elementsSelectable || !u(p) || k.button !== 0 || k.target !== d || !g)
      return;
    k.target?.setPointerCapture?.(k.pointerId);
    const { x: _, y: P } = nn(k, g);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: _, startY: P, x: _, y: P }, !0), a()?.(k);
  }
  function E(k) {
    if (!u(p) || !g || !n().selectionRect)
      return;
    w = !0;
    const _ = nn(k, g), { startX: P = 0, startY: A = 0 } = n().selectionRect, M = {
      ...n().selectionRect,
      x: _.x < P ? _.x : P,
      y: _.y < A ? _.y : A,
      width: Math.abs(_.x - P),
      height: Math.abs(_.y - A)
    }, R = f, q = h;
    f = new Set(ea(
      n().nodeLookup,
      M,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === ri.Partial,
      !0
    ).map((K) => K.id));
    const L = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const K of f) {
      const U = n().connectionLookup.get(K);
      if (U)
        for (const { edgeId: ne } of U.values()) {
          const ee = n().edgeLookup.get(ne);
          ee && (ee.selectable ?? L) && h.add(ne);
        }
    }
    ml(R, f) || n(n().nodes = n().nodes.map(pl(f)), !0), ml(q, h) || n(n().edges = n().edges.map(pl(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = M, !0);
  }
  function N(k) {
    k.button === 0 && (k.target?.releasePointerCapture?.(k.pointerId), !u(p) && n().selectionRectMode === "user" && k.target === d && S?.(k), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(k));
  }
  const T = (k) => {
    if (Array.isArray(u(v)) && u(v).includes(2)) {
      k.preventDefault();
      return;
    }
    s()?.({ event: k });
  };
  var D = {
    get store() {
      return n();
    },
    set store(k) {
      n(k), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(k = !0) {
      r(k), m();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(k) {
      o(k), m();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(k) {
      i(k), m();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(k) {
      s(k), m();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(k) {
      a(k), m();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(k) {
      l(k), m();
    },
    get children() {
      return c();
    },
    set children(k) {
      c(k), m();
    }
  }, H = H0();
  let F;
  var X = /* @__PURE__ */ $(() => u(x) ? void 0 : vl(S, d));
  H.__click = function(...k) {
    u(X)?.apply(this, k);
  }, H.__pointerdown = function(...k) {
    (u(x) ? b : void 0)?.apply(this, k);
  }, H.__pointermove = function(...k) {
    (u(x) ? E : void 0)?.apply(this, k);
  }, H.__pointerup = function(...k) {
    (u(x) ? N : void 0)?.apply(this, k);
  };
  var G = /* @__PURE__ */ $(() => vl(T, d));
  H.__contextmenu = function(...k) {
    u(G)?.apply(this, k);
  };
  var C = z(H);
  return Ye(C, c), I(H), Dt(H, (k) => d = k, () => d), _e((k) => F = St(H, 1, "svelte-flow__pane svelte-flow__container", null, F, k), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(p)
    })
  ]), O(e, H), ue(D);
}
En([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
se(
  zu,
  {
    store: {},
    panOnDrag: {},
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
var I0 = /* @__PURE__ */ Q('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Ru(e, t) {
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
  }, i = I0();
  let s;
  var a = z(i);
  return Ye(a, r), I(i), _e((l) => s = lt(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), O(e, i), ue(o);
}
se(Ru, { store: {}, children: {} }, [], [], !0);
function Bu(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = r0({
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
var z0 = /* @__PURE__ */ Q('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), R0 = /* @__PURE__ */ Q('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const B0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Fu(e, t) {
  ce(t, !0), Ae(e, B0);
  let n = y(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(g) {
      n(g), m();
    }
  }, o = R0(), i = ie(o), s = z(i, !0);
  I(i);
  var a = V(i, 2), l = z(a, !0);
  I(a);
  var c = V(a, 2);
  {
    var d = (g) => {
      var f = z0(), h = z(f, !0);
      I(f), _e(() => {
        ye(f, "id", `${F0}-${n().flowId}`), ze(h, n().ariaLiveMessage);
      }), O(g, f);
    };
    le(c, (g) => {
      n().disableKeyboardA11y || g(d);
    });
  }
  return _e(() => {
    ye(i, "id", `${qu}-${n().flowId}`), ze(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ye(a, "id", `${Ku}-${n().flowId}`), ze(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(e, o), ue(r);
}
se(Fu, { store: {} }, [], [], !0);
const qu = "svelte-flow__node-desc", Ku = "svelte-flow__edge-desc", F0 = "svelte-flow__aria-live";
var q0 = /* @__PURE__ */ Q("<div><!></div>");
function Zu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), c = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), g = y(t, "onnodepointerleave", 7), f = y(t, "onnodepointermove", 7), h = y(t, "onnodecontextmenu", 7), v = /* @__PURE__ */ $(() => yt(r().data, () => ({}), !0)), p = /* @__PURE__ */ $(() => yt(r().selected, !1)), x = /* @__PURE__ */ $(() => r().draggable), w = /* @__PURE__ */ $(() => r().selectable), S = /* @__PURE__ */ $(() => yt(r().deletable, !0)), b = /* @__PURE__ */ $(() => r().connectable), E = /* @__PURE__ */ $(() => r().focusable), N = /* @__PURE__ */ $(() => yt(r().hidden, !1)), T = /* @__PURE__ */ $(() => yt(r().dragging, !1)), D = /* @__PURE__ */ $(() => yt(r().style, "")), H = /* @__PURE__ */ $(() => r().class), F = /* @__PURE__ */ $(() => yt(r().type, "default")), X = /* @__PURE__ */ $(() => r().parentId), G = /* @__PURE__ */ $(() => r().sourcePosition), C = /* @__PURE__ */ $(() => r().targetPosition), k = /* @__PURE__ */ $(() => yt(r().measured, () => ({ width: 0, height: 0 }), !0).width), _ = /* @__PURE__ */ $(() => yt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ $(() => r().initialWidth), A = /* @__PURE__ */ $(() => r().initialHeight), M = /* @__PURE__ */ $(() => r().width), R = /* @__PURE__ */ $(() => r().height), q = /* @__PURE__ */ $(() => r().dragHandle), L = /* @__PURE__ */ $(() => yt(r().internals.z, 0)), K = /* @__PURE__ */ $(() => r().internals.positionAbsolute.x), U = /* @__PURE__ */ $(() => r().internals.positionAbsolute.y), ne = /* @__PURE__ */ $(() => r().internals.userNode), { id: ee } = r(), Z = /* @__PURE__ */ $(() => u(x) ?? n().nodesDraggable), te = /* @__PURE__ */ $(() => u(w) ?? n().elementsSelectable), Y = /* @__PURE__ */ $(() => u(b) ?? n().nodesConnectable), W = /* @__PURE__ */ $(() => uu(r())), fe = /* @__PURE__ */ $(() => !!r().internals.handleBounds), ke = /* @__PURE__ */ $(() => u(W) && u(fe)), ae = /* @__PURE__ */ $(() => u(E) ?? n().nodesFocusable);
  function re(he) {
    return n().parentLookup.has(he);
  }
  let J = /* @__PURE__ */ $(() => re(ee)), oe = /* @__PURE__ */ Se(null), ge = null, de = u(F), $e = u(G), be = u(C), B = /* @__PURE__ */ $(() => n().nodeTypes[u(F)] ?? sa), Le = /* @__PURE__ */ $(() => n().ariaLabelConfig);
  xr("svelteflow__node_connectable", {
    get value() {
      return u(Y);
    }
  }), xr("svelteflow__node_id", ee);
  let Me = /* @__PURE__ */ $(() => {
    const he = u(k) === void 0 ? u(M) ?? u(P) : u(M), Ie = u(_) === void 0 ? u(R) ?? u(A) : u(R);
    if (!(he === void 0 && Ie === void 0 && u(D) === void 0))
      return `${u(D)};${he ? `width:${dn(he)};` : ""}${Ie ? `height:${dn(Ie)};` : ""}`;
  });
  Ze(() => {
    (u(F) !== de || u(G) !== $e || u(C) !== be) && u(oe) !== null && requestAnimationFrame(() => {
      u(oe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[ee, { id: ee, nodeElement: u(oe), force: !0 }]]));
    }), de = u(F), $e = u(G), be = u(C);
  }), Ze(() => {
    o() && (!u(ke) || u(oe) !== ge) && (ge && o().unobserve(ge), u(oe) && o().observe(u(oe)), ge = u(oe));
  }), yi(() => {
    ge && o()?.unobserve(ge);
  });
  function Oe(he) {
    u(te) && (!n().selectNodesOnDrag || !u(Z) || n().nodeDragThreshold > 0) && n().handleNodeSelection(ee), s()?.({ node: u(ne), event: he });
  }
  function Ge(he) {
    if (!(gu(he) || n().disableKeyboardA11y))
      if (ou.includes(he.key) && u(te)) {
        const Ie = he.key === "Escape";
        n().handleNodeSelection(ee, Ie, u(oe));
      } else u(Z) && r().selected && Object.prototype.hasOwnProperty.call(si, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = u(Le)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(si[he.key], he.shiftKey ? 4 : 1));
  }
  const ut = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(oe)?.matches(":focus-visible"))
      return;
    const { width: he, height: Ie, viewport: mt } = n();
    ea(/* @__PURE__ */ new Map([[ee, r()]]), { x: 0, y: 0, width: he, height: Ie }, [mt.x, mt.y, mt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: mt.zoom });
  };
  var dt = {
    get store() {
      return n();
    },
    set store(he) {
      n(he), m();
    },
    get node() {
      return r();
    },
    set node(he) {
      r(he), m();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(he) {
      o(he), m();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(he) {
      i(he), m();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(he) {
      s(he), m();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(he) {
      a(he), m();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(he) {
      l(he), m();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(he) {
      c(he), m();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(he) {
      d(he), m();
    },
    get onnodepointerleave() {
      return g();
    },
    set onnodepointerleave(he) {
      g(he), m();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(he) {
      f(he), m();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(he) {
      h(he), m();
    }
  }, et = Ee(), Ue = ie(et);
  {
    var qe = (he) => {
      var Ie = q0();
      Qe(
        Ie,
        (tt, ot) => ({
          "data-id": ee,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${u(F)}`,
            u(H)
          ],
          style: u(Me),
          onclick: Oe,
          onpointerenter: d() ? (nt) => d()({ node: u(ne), event: nt }) : void 0,
          onpointerleave: g() ? (nt) => g()({ node: u(ne), event: nt }) : void 0,
          onpointermove: f() ? (nt) => f()({ node: u(ne), event: nt }) : void 0,
          oncontextmenu: h() ? (nt) => h()({ node: u(ne), event: nt }) : void 0,
          onkeydown: u(ae) ? Ge : void 0,
          onfocus: u(ae) ? ut : void 0,
          tabIndex: u(ae) ? 0 : void 0,
          role: r().ariaRole ?? (u(ae) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${qu}-${n().flowId}`,
          ...r().domAttributes,
          [Dn]: tt,
          [tn]: ot
        }),
        [
          () => ({
            dragging: u(T),
            selected: u(p),
            draggable: u(Z),
            connectable: u(Y),
            selectable: u(te),
            nopan: u(Z),
            parent: u(J)
          }),
          () => ({
            "z-index": u(L),
            transform: `translate(${u(K) ?? ""}px, ${u(U) ?? ""}px)`,
            visibility: u(W) ? "visible" : "hidden"
          })
        ]
      );
      var mt = z(Ie);
      Ks(mt, () => u(B), (tt, ot) => {
        ot(tt, {
          get data() {
            return u(v);
          },
          get id() {
            return ee;
          },
          get selected() {
            return u(p);
          },
          get selectable() {
            return u(te);
          },
          get deletable() {
            return u(S);
          },
          get sourcePosition() {
            return u(G);
          },
          get targetPosition() {
            return u(C);
          },
          get zIndex() {
            return u(L);
          },
          get dragging() {
            return u(T);
          },
          get draggable() {
            return u(Z);
          },
          get dragHandle() {
            return u(q);
          },
          get parentId() {
            return u(X);
          },
          get type() {
            return u(F);
          },
          get isConnectable() {
            return u(Y);
          },
          get positionAbsoluteX() {
            return u(K);
          },
          get positionAbsoluteY() {
            return u(U);
          },
          get width() {
            return u(M);
          },
          get height() {
            return u(R);
          }
        });
      }), I(Ie), gt(Ie, (tt, ot) => Bu?.(tt, ot), () => ({
        nodeId: ee,
        isSelectable: u(te),
        disabled: !u(Z),
        handleSelector: u(q),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (tt, ot, nt, ft) => {
          a()?.({ event: tt, targetNode: nt, nodes: ft });
        },
        onDragStart: (tt, ot, nt, ft) => {
          l()?.({ event: tt, targetNode: nt, nodes: ft });
        },
        onDragStop: (tt, ot, nt, ft) => {
          c()?.({ event: tt, targetNode: nt, nodes: ft });
        },
        store: n()
      })), Dt(Ie, (tt) => j(oe, tt), () => u(oe)), O(he, Ie);
    };
    le(Ue, (he) => {
      u(N) || he(qe);
    });
  }
  return O(e, et), ue(dt);
}
se(
  Zu,
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
var K0 = /* @__PURE__ */ Q('<div class="svelte-flow__nodes"></div>');
function Yu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), c = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), g = y(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((p) => {
    const x = /* @__PURE__ */ new Map();
    p.forEach((w) => {
      const S = w.target.getAttribute("data-id");
      x.set(S, { id: S, nodeElement: w.target, force: !0 });
    }), n().updateNodeInternals(x);
  });
  yi(() => {
    f?.disconnect();
  });
  var h = {
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
      return g();
    },
    set onnodedragstop(p) {
      g(p), m();
    }
  }, v = K0();
  return pt(v, 21, () => n().visible.nodes.values(), (p) => p.id, (p, x) => {
    Zu(p, {
      get node() {
        return u(x);
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
        return g();
      },
      get onnodecontextmenu() {
        return i();
      },
      get store() {
        return n();
      },
      set store(w) {
        n(w);
      }
    });
  }), I(v), O(e, v), ue(h);
}
se(
  Yu,
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
var Z0 = /* @__PURE__ */ ve('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Wu(e, t) {
  ce(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ $(() => n().source), c = /* @__PURE__ */ $(() => n().target), d = /* @__PURE__ */ $(() => n().sourceX), g = /* @__PURE__ */ $(() => n().sourceY), f = /* @__PURE__ */ $(() => n().targetX), h = /* @__PURE__ */ $(() => n().targetY), v = /* @__PURE__ */ $(() => n().sourcePosition), p = /* @__PURE__ */ $(() => n().targetPosition), x = /* @__PURE__ */ $(() => yt(n().animated, !1)), w = /* @__PURE__ */ $(() => yt(n().selected, !1)), S = /* @__PURE__ */ $(() => n().label), b = /* @__PURE__ */ $(() => n().labelStyle), E = /* @__PURE__ */ $(() => yt(n().data, () => ({}), !0)), N = /* @__PURE__ */ $(() => n().style), T = /* @__PURE__ */ $(() => n().interactionWidth), D = /* @__PURE__ */ $(() => yt(n().type, "default")), H = /* @__PURE__ */ $(() => n().sourceHandle), F = /* @__PURE__ */ $(() => n().targetHandle), X = /* @__PURE__ */ $(() => n().markerStart), G = /* @__PURE__ */ $(() => n().markerEnd), C = /* @__PURE__ */ $(() => n().selectable), k = /* @__PURE__ */ $(() => n().focusable), _ = /* @__PURE__ */ $(() => yt(n().deletable, !0)), P = /* @__PURE__ */ $(() => n().hidden), A = /* @__PURE__ */ $(() => n().zIndex), M = /* @__PURE__ */ $(() => n().class), R = /* @__PURE__ */ $(() => n().ariaLabel), q = null;
  const { id: L } = n();
  xr("svelteflow__edge_id", L);
  let K = /* @__PURE__ */ $(() => u(C) ?? r().elementsSelectable), U = /* @__PURE__ */ $(() => u(k) ?? r().edgesFocusable), ne = /* @__PURE__ */ $(() => r().edgeTypes[u(D)] ?? aa), ee = /* @__PURE__ */ $(() => u(X) ? `url('#${ps(u(X), r().flowId)}')` : void 0), Z = /* @__PURE__ */ $(() => u(G) ? `url('#${ps(u(G), r().flowId)}')` : void 0);
  function te(J) {
    const oe = r().edgeLookup.get(L);
    oe && (u(K) && r().handleEdgeSelection(L), o()?.({ event: J, edge: oe }));
  }
  function Y(J, oe) {
    const ge = r().edgeLookup.get(L);
    ge && oe({ event: J, edge: ge });
  }
  function W(J) {
    if (!r().disableKeyboardA11y && ou.includes(J.key) && u(K)) {
      const { unselectNodesAndEdges: oe, addSelectedEdges: ge } = r();
      J.key === "Escape" ? (q?.blur(), oe({ edges: [n()] })) : ge([L]);
    }
  }
  var fe = {
    get edge() {
      return n();
    },
    set edge(J) {
      n(J), m();
    },
    get store() {
      return r();
    },
    set store(J) {
      r(J), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(J) {
      o(J), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(J) {
      i(J), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(J) {
      s(J), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(J) {
      a(J), m();
    }
  }, ke = Ee(), ae = ie(ke);
  {
    var re = (J) => {
      var oe = Z0();
      let ge;
      var de = z(oe);
      Qe(
        de,
        (be) => ({
          class: ["svelte-flow__edge", u(M)],
          "data-id": L,
          onclick: te,
          oncontextmenu: i() ? (B) => {
            Y(B, i());
          } : void 0,
          onpointerenter: s() ? (B) => {
            Y(B, s());
          } : void 0,
          onpointerleave: a() ? (B) => {
            Y(B, a());
          } : void 0,
          "aria-label": u(R) === null ? void 0 : u(R) ? u(R) : `Edge from ${u(l)} to ${u(c)}`,
          "aria-describedby": u(U) ? `${Ku}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (u(U) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: u(U) ? W : void 0,
          tabindex: u(U) ? 0 : void 0,
          ...n().domAttributes,
          [Dn]: be
        }),
        [
          () => ({
            animated: u(x),
            selected: u(w),
            selectable: u(K)
          })
        ]
      );
      var $e = z(de);
      Ks($e, () => u(ne), (be, B) => {
        B(be, {
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
            return u(g);
          },
          get targetX() {
            return u(f);
          },
          get targetY() {
            return u(h);
          },
          get sourcePosition() {
            return u(v);
          },
          get targetPosition() {
            return u(p);
          },
          get animated() {
            return u(x);
          },
          get selected() {
            return u(w);
          },
          get label() {
            return u(S);
          },
          get labelStyle() {
            return u(b);
          },
          get data() {
            return u(E);
          },
          get style() {
            return u(N);
          },
          get interactionWidth() {
            return u(T);
          },
          get selectable() {
            return u(K);
          },
          get deletable() {
            return u(_);
          },
          get type() {
            return u(D);
          },
          get sourceHandleId() {
            return u(H);
          },
          get targetHandleId() {
            return u(F);
          },
          get markerStart() {
            return u(ee);
          },
          get markerEnd() {
            return u(Z);
          }
        });
      }), I(de), Dt(de, (be) => q = be, () => q), I(oe), _e((be) => ge = lt(oe, "", ge, be), [() => ({ "z-index": u(A) })]), O(J, oe);
    };
    le(ae, (J) => {
      u(P) || J(re);
    });
  }
  return O(e, ke), ue(fe);
}
se(
  Wu,
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
Mf();
var Y0 = /* @__PURE__ */ ve("<defs></defs>");
function Xu(e, t) {
  ce(t, !1);
  const n = jt();
  Nc();
  var r = Y0();
  pt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    ju(o, Re(() => u(i)));
  }), I(r), O(e, r), ue();
}
se(Xu, {}, [], [], !0);
var W0 = /* @__PURE__ */ ve('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), X0 = /* @__PURE__ */ ve('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), j0 = /* @__PURE__ */ ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function ju(e, t) {
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
  }, g = j0(), f = z(g);
  {
    var h = (p) => {
      var x = W0();
      let w;
      _e(
        (S) => {
          ye(x, "stroke-width", c()), w = lt(x, "", w, S);
        },
        [() => ({ stroke: l() })]
      ), O(p, x);
    }, v = (p) => {
      var x = Ee(), w = ie(x);
      {
        var S = (b) => {
          var E = X0();
          let N;
          _e(
            (T) => {
              ye(E, "stroke-width", c()), N = lt(E, "", N, T);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), O(b, E);
        };
        le(
          w,
          (b) => {
            r() === to.ArrowClosed && b(S);
          },
          !0
        );
      }
      O(p, x);
    };
    le(f, (p) => {
      r() === to.Arrow ? p(h) : p(v, !1);
    });
  }
  return I(g), _e(() => {
    ye(g, "id", n()), ye(g, "markerWidth", `${o()}`), ye(g, "markerHeight", `${i()}`), ye(g, "markerUnits", s()), ye(g, "orient", a());
  }), O(e, g), ue(d);
}
se(
  ju,
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
var G0 = /* @__PURE__ */ Q('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Gu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "onedgeclick", 7), o = y(t, "onedgecontextmenu", 7), i = y(t, "onedgepointerenter", 7), s = y(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), m();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), m();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), m();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), m();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), m();
    }
  }, l = G0(), c = z(l), d = z(c);
  Xu(d, {}), I(c);
  var g = V(c, 2);
  return pt(g, 17, () => n().visible.edges.values(), (f) => f.id, (f, h) => {
    Wu(f, {
      get edge() {
        return u(h);
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
  }), I(l), O(e, l), ue(a);
}
se(
  Gu,
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
var U0 = /* @__PURE__ */ Q('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const J0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function la(e, t) {
  ce(t, !0), Ae(e, J0);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7, 0), i = y(t, "height", 7, 0), s = y(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(g = 0) {
      n(g), m();
    },
    get y() {
      return r();
    },
    set y(g = 0) {
      r(g), m();
    },
    get width() {
      return o();
    },
    set width(g = 0) {
      o(g), m();
    },
    get height() {
      return i();
    },
    set height(g = 0) {
      i(g), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(g = !0) {
      s(g), m();
    }
  }, l = Ee(), c = ie(l);
  {
    var d = (g) => {
      var f = U0();
      let h;
      _e((v) => h = lt(f, "", h, v), [
        () => ({
          width: typeof o() == "string" ? o() : dn(o()),
          height: typeof i() == "string" ? i() : dn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(g, f);
    };
    le(c, (g) => {
      s() && g(d);
    });
  }
  return O(e, l), ue(a);
}
se(la, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function Q0(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function em(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var tm = /* @__PURE__ */ Q("<div><!></div>");
const nm = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Uu(e, t) {
  ce(t, !0), Ae(e, nm);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Se(void 0);
  Ze(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ $(() => n().selectionRectMode === "nodes" ? (n().nodes, wo(n().nodeLookup, { filter: (p) => !!p.selected })) : null);
  function d(p) {
    Object.prototype.hasOwnProperty.call(si, p.key) && (p.preventDefault(), n().moveSelectedNodes(si[p.key], p.shiftKey ? 4 : 1));
  }
  var g = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), m();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(p) {
      r(p), m();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(p) {
      o(p), m();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(p) {
      i(p), m();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(p) {
      s(p), m();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(p) {
      a(p), m();
    }
  }, f = Ee(), h = ie(f);
  {
    var v = (p) => {
      var x = tm();
      x.__contextmenu = [Q0, n, a], x.__click = [em, n, s], x.__keydown = function(...b) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, b);
      };
      let w;
      var S = z(x);
      la(S, { width: "100%", height: "100%", x: 0, y: 0 }), I(x), gt(x, (b, E) => Bu?.(b, E), () => ({
        disabled: !1,
        store: n(),
        onDrag: (b, E, N, T) => {
          r()?.({ event: b, targetNode: null, nodes: T });
        },
        onDragStart: (b, E, N, T) => {
          o()?.({ event: b, targetNode: null, nodes: T });
        },
        onDragStop: (b, E, N, T) => {
          i()?.({ event: b, targetNode: null, nodes: T });
        }
      })), Dt(x, (b) => j(l, b), () => u(l)), _e(
        (b) => {
          St(x, 1, Sn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), ye(x, "role", n().disableKeyboardA11y ? void 0 : "button"), ye(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), w = lt(x, "", w, b);
        },
        [
          () => ({
            width: dn(u(c).width),
            height: dn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), O(p, x);
    };
    le(h, (p) => {
      n().selectionRectMode === "nodes" && u(c) && yn(u(c).x) && yn(u(c).y) && p(v);
    });
  }
  return O(e, f), ue(g);
}
En(["contextmenu", "click", "keydown"]);
se(
  Uu,
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
function rm(e) {
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
function Jt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, g, f) => g ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const g = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: h, callback: v, preventDefault: p, enabled: x } = g;
      if (x) {
        if (a.key !== h) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const S = Array.isArray(f) ? f : [f];
          let b = !1;
          for (const E of S)
            if ((Array.isArray(E) ? E : [E]).reduce(
              (T, D) => T | rm(D),
              0
            ) === c) {
              b = !0;
              break;
            }
          if (!b) continue;
        }
        p && a.preventDefault();
        const w = {
          node: e,
          trigger: g,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), v?.(w);
      }
    }
  }
  let s;
  return n && (s = es(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = es(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ct() {
  const e = /* @__PURE__ */ $(jt), t = (i) => {
    const s = gl(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? Tp(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Pr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = it(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && gl(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = it(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && C0(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : yl(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : yl(u(e).edgeLookup, i),
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
    getViewport: () => Bl(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = ta(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
      return await u(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = tl(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const g = u(e).nodeLookup.get(d.id);
        if (!g || !l && d.id === i.id)
          return !1;
        const f = Pr(g), h = no(f, c);
        return s && h > 0 || h >= f.width * f.height || h >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = tl(i) ? i : t(i);
      if (!c)
        return !1;
      const d = no(c, s);
      return a && d > 0 || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Sp({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = it(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = it(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: g, y: f } = u(e).domNode.getBoundingClientRect(), h = { x: i.x - g, y: i.y - f };
      return xo(h, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), g = ii(i, [s, a, l]);
      return { x: g.x + c, y: g.y + d };
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
    getNodesBounds: (i) => bp(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
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
function Ju(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => Wn() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => Wn() ? "Meta" : "Control"), { deleteElements: l } = ct();
  function c(x) {
    return x !== null && typeof x == "object";
  }
  function d(x) {
    return c(x) ? x.modifier || [] : [];
  }
  function g(x) {
    return x == null ? "" : c(x) ? x.key : x;
  }
  function f(x, w) {
    return (Array.isArray(x) ? x : [x]).map((b) => {
      const E = g(b);
      return {
        key: E,
        modifier: d(b),
        enabled: E !== null,
        callback: w
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const x = n().nodes.filter((S) => S.selected), w = n().edges.filter((S) => S.selected);
    l({ nodes: x, edges: w });
  }
  var p = {
    get store() {
      return n();
    },
    set store(x) {
      n(x), m();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(x = "Shift") {
      r(x), m();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(x = Wn() ? "Meta" : "Control") {
      o(x), m();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(x = "Backspace") {
      i(x), m();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(x = " ") {
      s(x), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(x = Wn() ? "Meta" : "Control") {
      a(x), m();
    }
  };
  return Ea("blur", xt, h), Ea("contextmenu", xt, h), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(i(), (x) => {
      !(x.originalEvent.ctrlKey || x.originalEvent.metaKey || x.originalEvent.shiftKey) && !gu(x.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(xt, (x, w) => Jt?.(x, w), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(p);
}
se(
  Ju,
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
var om = /* @__PURE__ */ ve('<path fill="none" class="svelte-flow__connection-path"></path>'), im = /* @__PURE__ */ ve('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Qu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ $(() => {
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
      case pn.Bezier: {
        const [h] = vu(f);
        return h;
      }
      case pn.Straight: {
        const [h] = mu(f);
        return h;
      }
      case pn.Step:
      case pn.SmoothStep: {
        const [h] = na({
          ...f,
          borderRadius: r() === pn.Step ? 0 : void 0
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
      n(f), m();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), m();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), m();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), m();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), m();
    }
  }, c = Ee(), d = ie(c);
  {
    var g = (f) => {
      var h = im(), v = z(h), p = z(v);
      {
        var x = (S) => {
          var b = Ee(), E = ie(b);
          Ks(E, s, (N, T) => {
            T(N, {});
          }), O(S, b);
        }, w = (S) => {
          var b = om();
          _e(() => {
            ye(b, "d", u(a)), lt(b, i());
          }), O(S, b);
        };
        le(p, (S) => {
          s() ? S(x) : S(w, !1);
        });
      }
      I(v), I(h), _e(
        (S) => {
          ye(h, "width", n().width), ye(h, "height", n().height), lt(h, o()), St(v, 0, S);
        },
        [
          () => Sn([
            "svelte-flow__connection",
            _p(n().connection.isValid)
          ])
        ]
      ), O(f, h);
    };
    le(d, (f) => {
      n().connection.inProgress && f(g);
    });
  }
  return O(e, c), ue(l);
}
se(
  Qu,
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
var sm = /* @__PURE__ */ Q("<div><!></div>");
function Co(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ Ve(t, [
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
    set position(g = "top-right") {
      n(g), m();
    },
    get style() {
      return r();
    },
    set style(g) {
      r(g), m();
    },
    get class() {
      return o();
    },
    set class(g) {
      o(g), m();
    },
    get children() {
      return i();
    },
    set children(g) {
      i(g), m();
    }
  }, c = sm();
  Qe(c, (g) => ({ class: g, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = z(c);
  return Ye(d, () => i() ?? at), I(c), O(e, c), ue(l);
}
se(Co, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var am = /* @__PURE__ */ Q('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ed(e, t) {
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
  }, i = Ee(), s = ie(i);
  {
    var a = (l) => {
      Co(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (c, d) => {
          var g = am();
          O(c, g);
        },
        $$slots: { default: !0 }
      });
    };
    le(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return O(e, i), ue(o);
}
se(ed, { proOptions: {}, position: {} }, [], [], !0);
var lm = /* @__PURE__ */ Q("<div><!></div>");
const cm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function td(e, t) {
  ce(t, !0), Ae(e, cm);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), c = y(t, "rest", 7), d = /* @__PURE__ */ $(() => c().class), g = /* @__PURE__ */ $(() => ig(c(), [
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
    "style",
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
    "ariaLabelConfig"
  ]));
  function f(x) {
    x.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), c().onscroll && c().onscroll(x);
  }
  var h = {
    get width() {
      return n();
    },
    set width(x) {
      n(x), m();
    },
    get height() {
      return r();
    },
    set height(x) {
      r(x), m();
    },
    get colorMode() {
      return o();
    },
    set colorMode(x) {
      o(x), m();
    },
    get domNode() {
      return i();
    },
    set domNode(x) {
      i(x), m();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(x) {
      s(x), m();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(x) {
      a(x), m();
    },
    get children() {
      return l();
    },
    set children(x) {
      l(x), m();
    },
    get rest() {
      return c();
    },
    set rest(x) {
      c(x), m();
    }
  }, v = lm();
  Qe(
    v,
    (x) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        u(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: f,
      ...u(g),
      [tn]: x
    }),
    [
      () => ({ width: dn(n()), height: dn(r()) })
    ],
    void 0,
    "svelte-12wlba6"
  );
  var p = z(v);
  return Ye(p, () => l() ?? at), I(v), Dt(v, (x) => i(x), () => i()), Da(v, "clientHeight", a), Da(v, "clientWidth", s), O(e, v), ue(h);
}
se(
  td,
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
var um = /* @__PURE__ */ Q('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), dm = /* @__PURE__ */ Q("<!> <!>", 1), fm = /* @__PURE__ */ Q("<!> <!> <!> <!> <!>", 1);
function nd(e, t) {
  ce(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), c = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), g = y(t, "nodeClickDistance", 7, 1), f = y(t, "onmovestart", 7), h = y(t, "onmoveend", 7), v = y(t, "onmove", 7), p = y(t, "oninit", 7), x = y(t, "onnodeclick", 7), w = y(t, "onnodecontextmenu", 7), S = y(t, "onnodedrag", 7), b = y(t, "onnodedragstart", 7), E = y(t, "onnodedragstop", 7), N = y(t, "onnodepointerenter", 7), T = y(t, "onnodepointermove", 7), D = y(t, "onnodepointerleave", 7), H = y(t, "onselectionclick", 7), F = y(t, "onselectioncontextmenu", 7), X = y(t, "onselectionstart", 7), G = y(t, "onselectionend", 7), C = y(t, "onedgeclick", 7), k = y(t, "onedgecontextmenu", 7), _ = y(t, "onedgepointerenter", 7), P = y(t, "onedgepointerleave", 7), A = y(t, "onpaneclick", 7), M = y(t, "onpanecontextmenu", 7), R = y(t, "panOnScrollMode", 23, () => an.Free), q = y(t, "preventScrolling", 7, !0), L = y(t, "zoomOnScroll", 7, !0), K = y(t, "zoomOnDoubleClick", 7, !0), U = y(t, "zoomOnPinch", 7, !0), ne = y(t, "panOnScroll", 7, !1), ee = y(t, "panOnDrag", 7, !0), Z = y(t, "selectionOnDrag", 7, !0), te = y(t, "connectionLineComponent", 7), Y = y(t, "connectionLineStyle", 7), W = y(t, "connectionLineContainerStyle", 7), fe = y(t, "connectionLineType", 23, () => pn.Bezier), ke = y(t, "attributionPosition", 7), ae = y(t, "children", 7), re = y(t, "nodes", 31, () => Lt([])), J = y(t, "edges", 31, () => Lt([])), oe = y(t, "viewport", 31, () => {
  }), ge = /* @__PURE__ */ Ve(t, [
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
  ]), de = Hu({
    props: ge,
    width: n(),
    height: r(),
    get nodes() {
      return re();
    },
    set nodes(B) {
      re(B);
    },
    get edges() {
      return J();
    },
    set edges(B) {
      J(B);
    },
    get viewport() {
      return oe();
    },
    set viewport(B) {
      oe(B);
    }
  });
  const $e = Vn(ai);
  $e && $e.setStore && $e.setStore(de), xr(ai, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Ze(() => {
    const B = { nodes: de.selectedNodes, edges: de.selectedEdges };
    it(() => t.onselectionchange)?.(B);
    for (const Le of de.selectionChangeHandlers.values())
      Le(B);
  }), yi(() => {
    de.reset();
  });
  var be = {
    get width() {
      return n();
    },
    set width(B) {
      n(B), m();
    },
    get height() {
      return r();
    },
    set height(B) {
      r(B), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(B) {
      o(B), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(B) {
      i(B), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(B) {
      s(B), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(B) {
      a(B), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(B) {
      l(B), m();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(B) {
      c(B), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(B = 1) {
      d(B), m();
    },
    get nodeClickDistance() {
      return g();
    },
    set nodeClickDistance(B = 1) {
      g(B), m();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(B) {
      f(B), m();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(B) {
      h(B), m();
    },
    get onmove() {
      return v();
    },
    set onmove(B) {
      v(B), m();
    },
    get oninit() {
      return p();
    },
    set oninit(B) {
      p(B), m();
    },
    get onnodeclick() {
      return x();
    },
    set onnodeclick(B) {
      x(B), m();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(B) {
      w(B), m();
    },
    get onnodedrag() {
      return S();
    },
    set onnodedrag(B) {
      S(B), m();
    },
    get onnodedragstart() {
      return b();
    },
    set onnodedragstart(B) {
      b(B), m();
    },
    get onnodedragstop() {
      return E();
    },
    set onnodedragstop(B) {
      E(B), m();
    },
    get onnodepointerenter() {
      return N();
    },
    set onnodepointerenter(B) {
      N(B), m();
    },
    get onnodepointermove() {
      return T();
    },
    set onnodepointermove(B) {
      T(B), m();
    },
    get onnodepointerleave() {
      return D();
    },
    set onnodepointerleave(B) {
      D(B), m();
    },
    get onselectionclick() {
      return H();
    },
    set onselectionclick(B) {
      H(B), m();
    },
    get onselectioncontextmenu() {
      return F();
    },
    set onselectioncontextmenu(B) {
      F(B), m();
    },
    get onselectionstart() {
      return X();
    },
    set onselectionstart(B) {
      X(B), m();
    },
    get onselectionend() {
      return G();
    },
    set onselectionend(B) {
      G(B), m();
    },
    get onedgeclick() {
      return C();
    },
    set onedgeclick(B) {
      C(B), m();
    },
    get onedgecontextmenu() {
      return k();
    },
    set onedgecontextmenu(B) {
      k(B), m();
    },
    get onedgepointerenter() {
      return _();
    },
    set onedgepointerenter(B) {
      _(B), m();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(B) {
      P(B), m();
    },
    get onpaneclick() {
      return A();
    },
    set onpaneclick(B) {
      A(B), m();
    },
    get onpanecontextmenu() {
      return M();
    },
    set onpanecontextmenu(B) {
      M(B), m();
    },
    get panOnScrollMode() {
      return R();
    },
    set panOnScrollMode(B = an.Free) {
      R(B), m();
    },
    get preventScrolling() {
      return q();
    },
    set preventScrolling(B = !0) {
      q(B), m();
    },
    get zoomOnScroll() {
      return L();
    },
    set zoomOnScroll(B = !0) {
      L(B), m();
    },
    get zoomOnDoubleClick() {
      return K();
    },
    set zoomOnDoubleClick(B = !0) {
      K(B), m();
    },
    get zoomOnPinch() {
      return U();
    },
    set zoomOnPinch(B = !0) {
      U(B), m();
    },
    get panOnScroll() {
      return ne();
    },
    set panOnScroll(B = !1) {
      ne(B), m();
    },
    get panOnDrag() {
      return ee();
    },
    set panOnDrag(B = !0) {
      ee(B), m();
    },
    get selectionOnDrag() {
      return Z();
    },
    set selectionOnDrag(B = !0) {
      Z(B), m();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(B) {
      te(B), m();
    },
    get connectionLineStyle() {
      return Y();
    },
    set connectionLineStyle(B) {
      Y(B), m();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(B) {
      W(B), m();
    },
    get connectionLineType() {
      return fe();
    },
    set connectionLineType(B = pn.Bezier) {
      fe(B), m();
    },
    get attributionPosition() {
      return ke();
    },
    set attributionPosition(B) {
      ke(B), m();
    },
    get children() {
      return ae();
    },
    set children(B) {
      ae(B), m();
    },
    get nodes() {
      return re();
    },
    set nodes(B = []) {
      re(B), m();
    },
    get edges() {
      return J();
    },
    set edges(B = []) {
      J(B), m();
    },
    get viewport() {
      return oe();
    },
    set viewport(B = void 0) {
      oe(B), m();
    }
  };
  return td(e, {
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
      return ge;
    },
    get domNode() {
      return de.domNode;
    },
    set domNode(B) {
      de.domNode = B;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(B) {
      de.width = B;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(B) {
      de.height = B;
    },
    children: (B, Le) => {
      var He = fm(), Me = ie(He);
      Ju(Me, {
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
          return de;
        },
        set store(et) {
          de = et;
        }
      });
      var Oe = V(Me, 2);
      Iu(Oe, {
        get panOnScrollMode() {
          return R();
        },
        get preventScrolling() {
          return q();
        },
        get zoomOnScroll() {
          return L();
        },
        get zoomOnDoubleClick() {
          return K();
        },
        get zoomOnPinch() {
          return U();
        },
        get panOnScroll() {
          return ne();
        },
        get panOnDrag() {
          return ee();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return v();
        },
        get onmoveend() {
          return h();
        },
        get oninit() {
          return p();
        },
        get store() {
          return de;
        },
        set store(et) {
          de = et;
        },
        children: (et, Ue) => {
          zu(et, {
            get onpaneclick() {
              return A();
            },
            get onpanecontextmenu() {
              return M();
            },
            get onselectionstart() {
              return X();
            },
            get onselectionend() {
              return G();
            },
            get panOnDrag() {
              return ee();
            },
            get selectionOnDrag() {
              return Z();
            },
            get store() {
              return de;
            },
            set store(qe) {
              de = qe;
            },
            children: (qe, he) => {
              var Ie = dm(), mt = ie(Ie);
              Ru(mt, {
                get store() {
                  return de;
                },
                set store(ot) {
                  de = ot;
                },
                children: (ot, nt) => {
                  var ft = um(), Ut = V(ie(ft), 2);
                  Gu(Ut, {
                    get onedgeclick() {
                      return C();
                    },
                    get onedgecontextmenu() {
                      return k();
                    },
                    get onedgepointerenter() {
                      return _();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return de;
                    },
                    set store(Kn) {
                      de = Kn;
                    }
                  });
                  var Tn = V(Ut, 4);
                  Qu(Tn, {
                    get type() {
                      return fe();
                    },
                    get LineComponent() {
                      return te();
                    },
                    get containerStyle() {
                      return W();
                    },
                    get style() {
                      return Y();
                    },
                    get store() {
                      return de;
                    },
                    set store(Kn) {
                      de = Kn;
                    }
                  });
                  var ha = V(Tn, 2);
                  Yu(ha, {
                    get nodeClickDistance() {
                      return g();
                    },
                    get onnodeclick() {
                      return x();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return N();
                    },
                    get onnodepointermove() {
                      return T();
                    },
                    get onnodepointerleave() {
                      return D();
                    },
                    get onnodedrag() {
                      return S();
                    },
                    get onnodedragstart() {
                      return b();
                    },
                    get onnodedragstop() {
                      return E();
                    },
                    get store() {
                      return de;
                    },
                    set store(Kn) {
                      de = Kn;
                    }
                  });
                  var ef = V(ha, 2);
                  Uu(ef, {
                    get onselectionclick() {
                      return H();
                    },
                    get onselectioncontextmenu() {
                      return F();
                    },
                    get onnodedrag() {
                      return S();
                    },
                    get onnodedragstart() {
                      return b();
                    },
                    get onnodedragstop() {
                      return E();
                    },
                    get store() {
                      return de;
                    },
                    set store(Kn) {
                      de = Kn;
                    }
                  }), pe(2), O(ot, ft);
                },
                $$slots: { default: !0 }
              });
              var tt = V(mt, 2);
              {
                let ot = /* @__PURE__ */ $(() => !!(de.selectionRect && de.selectionRectMode === "user")), nt = /* @__PURE__ */ $(() => de.selectionRect?.width), ft = /* @__PURE__ */ $(() => de.selectionRect?.height), Ut = /* @__PURE__ */ $(() => de.selectionRect?.x), Tn = /* @__PURE__ */ $(() => de.selectionRect?.y);
                la(tt, {
                  get isVisible() {
                    return u(ot);
                  },
                  get width() {
                    return u(nt);
                  },
                  get height() {
                    return u(ft);
                  },
                  get x() {
                    return u(Ut);
                  },
                  get y() {
                    return u(Tn);
                  }
                });
              }
              O(qe, Ie);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Ge = V(Oe, 2);
      ed(Ge, {
        get proOptions() {
          return o();
        },
        get position() {
          return ke();
        }
      });
      var ut = V(Ge, 2);
      Fu(ut, {
        get store() {
          return de;
        }
      });
      var dt = V(ut, 2);
      Ye(dt, () => ae() ?? at), O(B, He);
    },
    $$slots: { default: !0 }
  }), ue(be);
}
se(
  nd,
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
function rd(e, t) {
  ce(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ Se(Hu({ props: {}, nodes: [], edges: [] }));
  xr(ai, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (a) => {
      j(r, a);
    }
  }), yi(() => {
    u(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  }, i = Ee(), s = ie(i);
  return Ye(s, () => n() ?? at), O(e, i), ue(o);
}
se(rd, { children: {} }, [], [], !0);
var gm = /* @__PURE__ */ Q("<button><!></button>");
function qr(e, t) {
  ce(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), c = y(t, "children", 7), d = /* @__PURE__ */ Ve(t, [
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
  var g = {
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
  }, f = gm();
  Qe(
    f,
    (v) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [tn]: v
    }),
    [
      () => ({
        "--xy-controls-button-background-color-props": r(),
        "--xy-controls-button-background-color-hover-props": o(),
        "--xy-controls-button-color-props": i(),
        "--xy-controls-button-color-hover-props": s(),
        "--xy-controls-button-border-color-props": a()
      })
    ]
  );
  var h = z(f);
  return Ye(h, () => c() ?? at), I(f), O(e, f), ue(g);
}
se(
  qr,
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
var hm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function od(e) {
  var t = hm();
  O(e, t);
}
se(od, {}, [], [], !0);
var vm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function id(e) {
  var t = vm();
  O(e, t);
}
se(id, {}, [], [], !0);
var pm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function sd(e) {
  var t = pm();
  O(e, t);
}
se(sd, {}, [], [], !0);
var mm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ad(e) {
  var t = mm();
  O(e, t);
}
se(ad, {}, [], [], !0);
var ym = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ld(e) {
  var t = ym();
  O(e, t);
}
se(ld, {}, [], [], !0);
var wm = /* @__PURE__ */ Q("<!> <!>", 1), _m = /* @__PURE__ */ Q("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), c = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), g = y(t, "buttonColor", 7), f = y(t, "buttonColorHover", 7), h = y(t, "buttonBorderColor", 7), v = y(t, "fitViewOptions", 7), p = y(t, "children", 7), x = y(t, "before", 7), w = y(t, "after", 7), S = /* @__PURE__ */ Ve(t, [
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
  ]), b = /* @__PURE__ */ $(jt);
  const E = {
    bgColor: c(),
    bgColorHover: d(),
    color: g(),
    colorHover: f(),
    borderColor: h()
  };
  let N = /* @__PURE__ */ $(() => u(b).nodesDraggable || u(b).nodesConnectable || u(b).elementsSelectable), T = /* @__PURE__ */ $(() => u(b).viewport.zoom <= u(b).minZoom), D = /* @__PURE__ */ $(() => u(b).viewport.zoom >= u(b).maxZoom), H = /* @__PURE__ */ $(() => u(b).ariaLabelConfig), F = /* @__PURE__ */ $(() => r() === "horizontal" ? "horizontal" : "vertical");
  const X = () => {
    u(b).zoomIn();
  }, G = () => {
    u(b).zoomOut();
  }, C = () => {
    u(b).fitView(v());
  }, k = () => {
    let P = !u(N);
    u(b).nodesDraggable = P, u(b).nodesConnectable = P, u(b).elementsSelectable = P;
  };
  var _ = {
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), m();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), m();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), m();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), m();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), m();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), m();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), m();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(P) {
      c(P), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), m();
    },
    get buttonColor() {
      return g();
    },
    set buttonColor(P) {
      g(P), m();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), m();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(P) {
      h(P), m();
    },
    get fitViewOptions() {
      return v();
    },
    set fitViewOptions(P) {
      v(P), m();
    },
    get children() {
      return p();
    },
    set children(P) {
      p(P), m();
    },
    get before() {
      return x();
    },
    set before(P) {
      x(P), m();
    },
    get after() {
      return w();
    },
    set after(P) {
      w(P), m();
    }
  };
  {
    let P = /* @__PURE__ */ $(() => [
      "svelte-flow__controls",
      u(F),
      l()
    ]);
    Co(e, Re(
      {
        get class() {
          return u(P);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return u(H)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => S,
      {
        children: (A, M) => {
          var R = _m(), q = ie(R);
          {
            var L = (ae) => {
              var re = Ee(), J = ie(re);
              Ye(J, x), O(ae, re);
            };
            le(q, (ae) => {
              x() && ae(L);
            });
          }
          var K = V(q, 2);
          {
            var U = (ae) => {
              var re = wm(), J = ie(re);
              qr(J, Re(
                {
                  onclick: X,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return u(H)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(H)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return u(D);
                  }
                },
                () => E,
                {
                  children: (ge, de) => {
                    od(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var oe = V(J, 2);
              qr(oe, Re(
                {
                  onclick: G,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(H)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(H)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u(T);
                  }
                },
                () => E,
                {
                  children: (ge, de) => {
                    id(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), O(ae, re);
            };
            le(K, (ae) => {
              o() && ae(U);
            });
          }
          var ne = V(K, 2);
          {
            var ee = (ae) => {
              qr(ae, Re(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: C,
                  get title() {
                    return u(H)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(H)["controls.fitView.ariaLabel"];
                  }
                },
                () => E,
                {
                  children: (re, J) => {
                    sd(re);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(ne, (ae) => {
              i() && ae(ee);
            });
          }
          var Z = V(ne, 2);
          {
            var te = (ae) => {
              qr(ae, Re(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: k,
                  get title() {
                    return u(H)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(H)["controls.interactive.ariaLabel"];
                  }
                },
                () => E,
                {
                  children: (re, J) => {
                    var oe = Ee(), ge = ie(oe);
                    {
                      var de = (be) => {
                        ld(be);
                      }, $e = (be) => {
                        ad(be);
                      };
                      le(ge, (be) => {
                        u(N) ? be(de) : be($e, !1);
                      });
                    }
                    O(re, oe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(Z, (ae) => {
              s() && ae(te);
            });
          }
          var Y = V(Z, 2);
          {
            var W = (ae) => {
              var re = Ee(), J = ie(re);
              Ye(J, p), O(ae, re);
            };
            le(Y, (ae) => {
              p() && ae(W);
            });
          }
          var fe = V(Y, 2);
          {
            var ke = (ae) => {
              var re = Ee(), J = ie(re);
              Ye(J, w), O(ae, re);
            };
            le(fe, (ae) => {
              w() && ae(ke);
            });
          }
          O(A, R);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(_);
}
se(
  cd,
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
var xm = /* @__PURE__ */ ve("<circle></circle>");
function ud(e, t) {
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
  }, i = xm();
  return _e(() => {
    ye(i, "cx", n()), ye(i, "cy", n()), ye(i, "r", n()), St(i, 0, Sn(["svelte-flow__background-pattern", "dots", r()]));
  }), O(e, i), ue(o);
}
se(ud, { radius: {}, class: {} }, [], [], !0);
var bm = /* @__PURE__ */ ve("<path></path>");
function dd(e, t) {
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
  }, a = bm();
  return _e(() => {
    ye(a, "stroke-width", n()), ye(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), St(a, 0, Sn(["svelte-flow__background-pattern", o(), i()]));
  }), O(e, a), ue(s);
}
se(dd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Cm = {
  [wn.Dots]: 1,
  [wn.Lines]: 1,
  [wn.Cross]: 6
};
var km = /* @__PURE__ */ ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function fd(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => wn.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), c = y(t, "patternClass", 7), d = y(t, "class", 7), g = /* @__PURE__ */ $(jt), f = /* @__PURE__ */ $(() => r() === wn.Dots), h = /* @__PURE__ */ $(() => r() === wn.Cross), v = /* @__PURE__ */ $(() => Array.isArray(o()) ? o() : [o(), o()]), p = /* @__PURE__ */ $(() => `background-pattern-${u(g).flowId}-${n() ?? ""}`), x = /* @__PURE__ */ $(() => [
    u(v)[0] * u(g).viewport.zoom || 1,
    u(v)[1] * u(g).viewport.zoom || 1
  ]), w = /* @__PURE__ */ $(() => (i() ?? Cm[r()]) * u(g).viewport.zoom), S = /* @__PURE__ */ $(() => u(h) ? [u(w), u(w)] : u(x)), b = /* @__PURE__ */ $(() => u(f) ? [u(w) / 2, u(w) / 2] : [
    u(S)[0] / 2,
    u(S)[1] / 2
  ]);
  var E = {
    get id() {
      return n();
    },
    set id(C) {
      n(C), m();
    },
    get variant() {
      return r();
    },
    set variant(C = wn.Dots) {
      r(C), m();
    },
    get gap() {
      return o();
    },
    set gap(C = 20) {
      o(C), m();
    },
    get size() {
      return i();
    },
    set size(C) {
      i(C), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(C = 1) {
      s(C), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(C) {
      a(C), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor(C) {
      l(C), m();
    },
    get patternClass() {
      return c();
    },
    set patternClass(C) {
      c(C), m();
    },
    get class() {
      return d();
    },
    set class(C) {
      d(C), m();
    }
  }, N = km();
  let T;
  var D = z(N), H = z(D);
  {
    var F = (C) => {
      {
        let k = /* @__PURE__ */ $(() => u(w) / 2);
        ud(C, {
          get radius() {
            return u(k);
          },
          get class() {
            return c();
          }
        });
      }
    }, X = (C) => {
      dd(C, {
        get dimensions() {
          return u(S);
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
    le(H, (C) => {
      u(f) ? C(F) : C(X, !1);
    });
  }
  I(D);
  var G = V(D);
  return I(N), _e(
    (C) => {
      St(N, 0, Sn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), T = lt(N, "", T, C), ye(D, "id", u(p)), ye(D, "x", u(g).viewport.x % u(x)[0]), ye(D, "y", u(g).viewport.y % u(x)[1]), ye(D, "width", u(x)[0]), ye(D, "height", u(x)[1]), ye(D, "patternTransform", `translate(-${u(b)[0]},-${u(b)[1]})`), ye(G, "fill", `url(#${u(p)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), O(e, N), ue(E);
}
se(
  fd,
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
var Em = /* @__PURE__ */ ve("<rect></rect>");
function gd(e, t) {
  ce(t, !0);
  let n = y(t, "x", 7), r = y(t, "y", 7), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "borderRadius", 7, 5), a = y(t, "color", 7), l = y(t, "shapeRendering", 7), c = y(t, "strokeColor", 7), d = y(t, "strokeWidth", 7, 2), g = y(t, "selected", 7), f = y(t, "class", 7);
  var h = {
    get x() {
      return n();
    },
    set x(w) {
      n(w), m();
    },
    get y() {
      return r();
    },
    set y(w) {
      r(w), m();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), m();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), m();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(w = 5) {
      s(w), m();
    },
    get color() {
      return a();
    },
    set color(w) {
      a(w), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(w) {
      l(w), m();
    },
    get strokeColor() {
      return c();
    },
    set strokeColor(w) {
      c(w), m();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(w = 2) {
      d(w), m();
    },
    get selected() {
      return g();
    },
    set selected(w) {
      g(w), m();
    },
    get class() {
      return f();
    },
    set class(w) {
      f(w), m();
    }
  }, v = Em();
  let p, x;
  return _e(
    (w, S) => {
      p = St(v, 0, Sn(["svelte-flow__minimap-node", f()]), null, p, w), ye(v, "x", n()), ye(v, "y", r()), ye(v, "rx", s()), ye(v, "ry", s()), ye(v, "width", o()), ye(v, "height", i()), ye(v, "shape-rendering", l()), x = lt(v, "", x, S);
    },
    [
      () => ({ selected: g() }),
      () => ({
        fill: a(),
        stroke: c(),
        "stroke-width": d()
      })
    ]
  ), O(e, v), ue(h);
}
se(
  gd,
  {
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
    class: {}
  },
  [],
  [],
  !0
);
function Sm(e, t) {
  const n = c0({
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
const Zi = (e) => e instanceof Function ? e : () => e;
var Nm = /* @__PURE__ */ ve("<title> </title>"), Pm = /* @__PURE__ */ ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), $m = /* @__PURE__ */ Q('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function hd(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), c = y(t, "bgColor", 7), d = y(t, "maskColor", 7), g = y(t, "maskStrokeColor", 7), f = y(t, "maskStrokeWidth", 7), h = y(t, "width", 7, 200), v = y(t, "height", 7, 150), p = y(t, "pannable", 7, !0), x = y(t, "zoomable", 7, !0), w = y(t, "inversePan", 7), S = y(t, "zoomStep", 7), b = y(t, "class", 7), E = /* @__PURE__ */ Ve(t, [
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
  ]), N = /* @__PURE__ */ $(jt), T = /* @__PURE__ */ $(() => u(N).ariaLabelConfig);
  const D = i() === void 0 ? void 0 : Zi(i()), H = Zi(o()), F = Zi(s()), X = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let G = /* @__PURE__ */ $(() => `svelte-flow__minimap-desc-${u(N).flowId}`), C = /* @__PURE__ */ $(() => ({
    x: -u(N).viewport.x / u(N).viewport.zoom,
    y: -u(N).viewport.y / u(N).viewport.zoom,
    width: u(N).width / u(N).viewport.zoom,
    height: u(N).height / u(N).viewport.zoom
  })), k = /* @__PURE__ */ $(() => u(N).nodeLookup.size > 0 ? cu(wo(u(N).nodeLookup, { filter: (W) => !W.hidden }), u(C)) : u(C)), _ = /* @__PURE__ */ $(() => u(k).width / h()), P = /* @__PURE__ */ $(() => u(k).height / v()), A = /* @__PURE__ */ $(() => Math.max(u(_), u(P))), M = /* @__PURE__ */ $(() => u(A) * h()), R = /* @__PURE__ */ $(() => u(A) * v()), q = /* @__PURE__ */ $(() => 5 * u(A)), L = /* @__PURE__ */ $(() => u(k).x - (u(M) - u(k).width) / 2 - u(q)), K = /* @__PURE__ */ $(() => u(k).y - (u(R) - u(k).height) / 2 - u(q)), U = /* @__PURE__ */ $(() => u(M) + u(q) * 2), ne = /* @__PURE__ */ $(() => u(R) + u(q) * 2);
  const ee = () => u(A);
  var Z = {
    get position() {
      return n();
    },
    set position(W = "bottom-right") {
      n(W), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(W) {
      r(W), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(W = "transparent") {
      o(W), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(W) {
      i(W), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(W = "") {
      s(W), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(W = 5) {
      a(W), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(W = 2) {
      l(W), m();
    },
    get bgColor() {
      return c();
    },
    set bgColor(W) {
      c(W), m();
    },
    get maskColor() {
      return d();
    },
    set maskColor(W) {
      d(W), m();
    },
    get maskStrokeColor() {
      return g();
    },
    set maskStrokeColor(W) {
      g(W), m();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(W) {
      f(W), m();
    },
    get width() {
      return h();
    },
    set width(W = 200) {
      h(W), m();
    },
    get height() {
      return v();
    },
    set height(W = 150) {
      v(W), m();
    },
    get pannable() {
      return p();
    },
    set pannable(W = !0) {
      p(W), m();
    },
    get zoomable() {
      return x();
    },
    set zoomable(W = !0) {
      x(W), m();
    },
    get inversePan() {
      return w();
    },
    set inversePan(W) {
      w(W), m();
    },
    get zoomStep() {
      return S();
    },
    set zoomStep(W) {
      S(W), m();
    },
    get class() {
      return b();
    },
    set class(W) {
      b(W), m();
    }
  }, te = $m(), Y = ie(te);
  {
    let W = /* @__PURE__ */ $(() => ["svelte-flow__minimap", b()]);
    wg(Y, () => ({ "--xy-minimap-background-color-props": c() })), Co(Y.lastChild, Re(
      {
        get position() {
          return n();
        },
        get class() {
          return u(W);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => E,
      {
        children: (fe, ke) => {
          var ae = Ee(), re = ie(ae);
          {
            var J = (oe) => {
              var ge = Pm();
              let de;
              var $e = z(ge);
              {
                var be = (He) => {
                  var Me = Nm(), Oe = z(Me, !0);
                  I(Me), _e(() => {
                    ye(Me, "id", u(G)), ze(Oe, r() ?? u(T)["minimap.ariaLabel"]);
                  }), O(He, Me);
                };
                le($e, (He) => {
                  (r() ?? u(T)["minimap.ariaLabel"]) && He(be);
                });
              }
              var B = V($e);
              pt(B, 17, () => u(N).nodes, (He) => He.id, (He, Me) => {
                const Oe = /* @__PURE__ */ $(() => u(N).nodeLookup.get(u(Me).id));
                var Ge = Ee(), ut = ie(Ge);
                {
                  var dt = (et) => {
                    const Ue = /* @__PURE__ */ $(() => qn(u(Oe)));
                    {
                      let qe = /* @__PURE__ */ $(() => D?.(u(Oe))), he = /* @__PURE__ */ $(() => H(u(Oe))), Ie = /* @__PURE__ */ $(() => F(u(Oe)));
                      gd(et, Re(
                        {
                          get x() {
                            return u(Oe).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(Oe).internals.positionAbsolute.y;
                          }
                        },
                        () => u(Ue),
                        {
                          get selected() {
                            return u(Oe).selected;
                          },
                          get color() {
                            return u(qe);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return u(he);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return X;
                          },
                          get class() {
                            return u(Ie);
                          }
                        }
                      ));
                    }
                  };
                  le(ut, (et) => {
                    u(Oe) && uu(u(Oe)) && et(dt);
                  });
                }
                O(He, Ge);
              });
              var Le = V(B);
              I(ge), gt(ge, (He, Me) => Sm?.(He, Me), () => ({
                store: u(N),
                panZoom: u(N).panZoom,
                getViewScale: ee,
                translateExtent: u(N).translateExtent,
                width: u(N).width,
                height: u(N).height,
                inversePan: w(),
                zoomStep: S(),
                pannable: p(),
                zoomable: x()
              })), _e(
                (He) => {
                  ye(ge, "width", h()), ye(ge, "height", v()), ye(ge, "viewBox", `${u(L) ?? ""} ${u(K) ?? ""} ${u(U) ?? ""} ${u(ne) ?? ""}`), ye(ge, "aria-labelledby", u(G)), de = lt(ge, "", de, He), ye(Le, "d", `M${u(L) - u(q)},${u(K) - u(q)}h${u(U) + u(q) * 2}v${u(ne) + u(q) * 2}h${-u(U) - u(q) * 2}z
      M${u(C).x ?? ""},${u(C).y ?? ""}h${u(C).width ?? ""}v${u(C).height ?? ""}h${-u(C).width}z`);
                },
                [
                  () => ({
                    "--xy-minimap-mask-background-color-props": d(),
                    "--xy-minimap-mask-stroke-color-props": g(),
                    "--xy-minimap-mask-stroke-width-props": f() ? f() * u(A) : void 0
                  })
                ]
              ), O(oe, ge);
            };
            le(re, (oe) => {
              u(N).panZoom && oe(J);
            });
          }
          O(fe, ae);
        },
        $$slots: { default: !0 }
      }
    )), I(Y);
  }
  return O(e, te), ue(Z);
}
se(
  hd,
  {
    position: {},
    ariaLabel: {},
    nodeStrokeColor: {},
    nodeColor: {},
    nodeClass: {},
    nodeBorderRadius: {},
    nodeStrokeWidth: {},
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
var Tm = /* @__PURE__ */ Q("<div><!></div>");
function vd(e, t) {
  ce(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => me.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ Ve(t, [
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
  const c = jt(), { getNodesBounds: d } = ct(), g = Vn("svelteflow__node_id");
  let f = /* @__PURE__ */ $(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? g]).reduce(
    (T, D) => {
      const H = c.nodeLookup.get(D);
      return H && T.push(H), T;
    },
    []
  ))), h = /* @__PURE__ */ $(() => {
    const N = d(u(f));
    return N ? Kp(N, c.viewport, r(), i(), o()) : "";
  }), v = /* @__PURE__ */ $(() => u(f).length === 0 ? 1 : Math.max(...u(f).map((N) => (N.internals.z || 5) + 1))), p = /* @__PURE__ */ $(() => c.nodes.filter((N) => N.selected).length), x = /* @__PURE__ */ $(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(p) === 1);
  var w = {
    get nodeId() {
      return n();
    },
    set nodeId(N) {
      n(N), m();
    },
    get position() {
      return r();
    },
    set position(N = me.Top) {
      r(N), m();
    },
    get align() {
      return o();
    },
    set align(N = "center") {
      o(N), m();
    },
    get offset() {
      return i();
    },
    set offset(N = 10) {
      i(N), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(N) {
      s(N), m();
    },
    get children() {
      return a();
    },
    set children(N) {
      a(N), m();
    }
  }, S = Ee(), b = ie(S);
  {
    var E = (N) => {
      var T = Tm();
      Qe(
        T,
        (H, F) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": H,
          ...l,
          [tn]: F
        }),
        [
          () => u(f).reduce((H, F) => `${H}${F.id} `, "").trim(),
          () => ({
            display: Tu().value ? "none" : void 0,
            position: "absolute",
            transform: u(h),
            "z-index": u(v)
          })
        ]
      );
      var D = z(T);
      Ye(D, () => a() ?? at), I(T), gt(T, (H, F) => $u?.(H, F), () => "root"), O(N, T);
    };
    le(b, (N) => {
      c.domNode && u(x) && u(f) && N(E);
    });
  }
  return O(e, S), ue(w);
}
se(
  vd,
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
function Nn(e) {
  const t = /* @__PURE__ */ $(jt), n = /* @__PURE__ */ $(() => u(t).nodes), r = /* @__PURE__ */ $(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ $(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const g = u(r).get(d)?.internals.userNode;
      g && a.push({ id: g.id, type: g.type, data: g.data });
    }
    return (!e0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const wl = "tinyflow-component", Dm = [
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
], Am = [
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
], ca = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Mm = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Om = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class E_ {
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
const Lm = () => {
  let e = /* @__PURE__ */ Se([]), t = /* @__PURE__ */ Se([]), n = /* @__PURE__ */ Se({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      j(e, r), j(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      j(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      j(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      j(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      j(e, [...u(e), r]);
    },
    removeNode: (r) => {
      j(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      j(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      j(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      j(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      j(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      j(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      j(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      j(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      j(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      j(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ke = Lm();
var Vm = /* @__PURE__ */ Q("<button><!></button>");
function Pe(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ Ve(t, [
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
      n(l), m();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), m();
    }
  }, s = Vm();
  Qe(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = z(s);
  return Ye(a, () => n() ?? at), I(s), O(e, s), ue(i);
}
se(Pe, { children: {}, primary: {} }, [], [], !0);
var Hm = /* @__PURE__ */ Q("<input/>");
function pd(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Hm();
  on(r), Qe(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), O(e, r), ue();
}
se(pd, {}, [], [], !0);
var Im = /* @__PURE__ */ Q('<div><input type="hidden"/> <!> <!></div>');
const zm = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function md(e, t) {
  ce(t, !0), Ae(e, zm);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), s = y(t, "onChosen", 7), a = /* @__PURE__ */ Ve(t, [
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
      n(h), m();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), m();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), m();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), m();
    }
  }, c = Im();
  Qe(
    c,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1swt2gg"
  );
  var d = z(c);
  on(d);
  var g = V(d, 2);
  je(g, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = V(g, 2);
  return Pe(f, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, v) => {
      pe();
      var p = xe();
      _e(() => ze(p, i())), O(h, p);
    },
    $$slots: { default: !0 }
  }), I(c), _e(() => Ho(d, o())), O(e, c), ue(l);
}
se(
  md,
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
var Rm = /* @__PURE__ */ Q("<input/>");
function je(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Rm();
  on(r), Qe(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), O(e, r), ue();
}
se(je, {}, [], [], !0);
var Bm = /* @__PURE__ */ Q("<textarea></textarea>");
function Be(e, t) {
  ce(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = {
    get value() {
      return n();
    },
    set value(s) {
      n(s), m();
    }
  }, i = Bm();
  return jf(i), Qe(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), O(e, i), ue(o);
}
se(Be, { value: {} }, [], [], !0);
var Fm = /* @__PURE__ */ Q('<div role="button"><!></div>'), qm = /* @__PURE__ */ Q("<div></div>");
function yd(e, t) {
  const n = Oa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Oa(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(d, g) {
    s(g), i()?.(d, g);
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
  Nc();
  var c = qm();
  return Qe(c, () => ({
    ...r,
    class: `tf-tabs ${Rs(r), it(() => r.class) ?? ""}`
  })), pt(c, 5, o, Cr, (d, g, f) => {
    var h = Fm();
    ye(h, "tabindex", f), h.__click = () => a(u(g), f), h.__keydown = (w) => {
      (w.key === "Enter" || w.key === " ") && (w.preventDefault(), a(u(g), f));
    };
    var v = z(h);
    {
      var p = (w) => {
        var S = xe();
        _e(() => ze(S, (u(g), it(() => u(g).label)))), O(w, S);
      }, x = (w) => {
        var S = Ee(), b = ie(S);
        Ye(b, () => (u(g), it(() => u(g).label) ?? at)), O(w, S);
      };
      le(v, (w) => {
        u(g), it(() => typeof u(g).label == "string") ? w(p) : w(x, !1);
      });
    }
    I(h), _e(() => St(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), O(d, h);
  }), I(c), O(e, c), ue(l);
}
En(["click", "keydown"]);
se(yd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Km = (e, t, n) => t(u(n)), Zm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(u(n)));
}, Ym = /* @__PURE__ */ Q('<span class="tf-collapse-item-title-icon"><!></span>'), Wm = /* @__PURE__ */ Q('<div class="tf-collapse-item-description"><!></div>'), Xm = /* @__PURE__ */ Q('<div class="tf-collapse-item-content"><!></div>'), jm = /* @__PURE__ */ Q('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Gm = /* @__PURE__ */ Q("<div></div>");
const Um = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function wd(e, t) {
  ce(t, !0), Ae(e, Um);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => Lt([]));
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
  }, a = Gm();
  return pt(a, 21, n, Cr, (l, c, d) => {
    var g = jm(), f = z(g);
    ye(f, "tabindex", d), f.__click = [Km, i, c], f.__keydown = [Zm, i, c];
    var h = z(f);
    {
      var v = (N) => {
        var T = Ym(), D = z(T);
        Mn(D, {
          get target() {
            return u(c).icon;
          }
        }), I(T), O(N, T);
      };
      le(h, (N) => {
        u(c).icon && N(v);
      });
    }
    var p = V(h, 2);
    Mn(p, {
      get target() {
        return u(c).title;
      }
    });
    var x = V(p, 2);
    I(f);
    var w = V(f, 2);
    {
      var S = (N) => {
        var T = Wm(), D = z(T);
        Mn(D, {
          get target() {
            return u(c).description;
          }
        }), I(T), O(N, T);
      };
      le(w, (N) => {
        u(c).description && N(S);
      });
    }
    var b = V(w, 2);
    {
      var E = (N) => {
        var T = Xm(), D = z(T);
        Mn(D, {
          get target() {
            return u(c).content;
          }
        }), I(T), O(N, T);
      };
      le(b, (N) => {
        o().includes(u(c).key) && N(E);
      });
    }
    I(g), _e((N) => St(x, 1, `tf-collapse-item-title-arrow ${N ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), O(l, g);
  }), I(a), _e(() => {
    lt(a, t.style), St(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), O(e, a), ue(s);
}
En(["click", "keydown"]);
se(wd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Mn(e, t) {
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
  }, o = Ee(), i = ie(o);
  {
    var s = (l) => {
      var c = Ee(), d = ie(c);
      Ye(d, () => n() ?? at), O(l, c);
    }, a = (l) => {
      var c = Ee(), d = ie(c);
      qs(d, n), O(l, c);
    };
    le(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return O(e, o), ue(r);
}
se(Mn, { target: {} }, [], [], !0);
var Jm = (e, t, n) => t(u(n)), Qm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), e2 = /* @__PURE__ */ Q('<div class="tf-select-content-children"><!></div>'), t2 = /* @__PURE__ */ Q('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), n2 = /* @__PURE__ */ Q('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), r2 = /* @__PURE__ */ Q("<!> <!>", 1), o2 = /* @__PURE__ */ Q('<div class="tf-select-input-placeholder"> </div>'), i2 = /* @__PURE__ */ Q('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), s2 = /* @__PURE__ */ Q("<div><!></div>");
function st(e, t) {
  ce(t, !0);
  const n = (S, b = at) => {
    var E = Ee(), N = ie(E);
    pt(N, 19, b, (T, D) => `${D}_${T.value}`, (T, D) => {
      var H = t2(), F = ie(H);
      F.__click = [Jm, v, D];
      var X = z(F), G = z(X);
      {
        var C = (A) => {
          var M = Qm();
          O(A, M);
        };
        le(G, (A) => {
          u(D).children && u(D).children.length > 0 && A(C);
        });
      }
      I(X);
      var k = V(X, 2);
      Mn(k, {
        get target() {
          return u(D).label;
        }
      }), I(F);
      var _ = V(F, 2);
      {
        var P = (A) => {
          var M = e2(), R = z(M);
          n(R, () => u(D).children), I(M), O(A, M);
        };
        le(_, (A) => {
          u(D).children && u(D).children.length > 0 && (a() || c().includes(u(D).value)) && A(P);
        });
      }
      O(T, H);
    }), O(S, E);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), g = /* @__PURE__ */ Ve(t, [
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
  ]), f = /* @__PURE__ */ $(() => {
    const S = [], b = (E) => {
      for (let N of E)
        i().length > 0 ? i().includes(N.value) && S.push(N) : s().includes(N.value) && S.push(N), N.children && N.children.length > 0 && b(N.children);
    };
    return b(r()), S;
  }), h;
  function v(S) {
    h?.hide(), o()?.(S);
  }
  var p = {
    get items() {
      return r();
    },
    set items(S) {
      r(S), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(S) {
      o(S), m();
    },
    get value() {
      return i();
    },
    set value(S = []) {
      i(S), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(S = []) {
      s(S), m();
    },
    get expandAll() {
      return a();
    },
    set expandAll(S = !0) {
      a(S), m();
    },
    get multiple() {
      return l();
    },
    set multiple(S = !1) {
      l(S), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(S = []) {
      c(S), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(S) {
      d(S), m();
    }
  }, x = s2();
  Qe(x, () => ({ ...g, class: `tf-select ${g.class ?? ""}` }));
  var w = z(x);
  return Dt(
    cr(w, {
      floating: (b) => {
        var E = n2(), N = z(E);
        n(N, r), I(E), O(b, E);
      },
      children: (b, E) => {
        var N = i2();
        Qe(N, () => ({ class: "tf-select-input nopan nodrag", ...g }));
        var T = z(N);
        pt(
          T,
          23,
          () => u(f),
          (D, H) => `${H}_${D.value}`,
          (D, H, F) => {
            var X = Ee(), G = ie(X);
            {
              var C = (_) => {
                var P = Ee(), A = ie(P);
                {
                  var M = (R) => {
                    Mn(R, {
                      get target() {
                        return u(H).label;
                      }
                    });
                  };
                  le(A, (R) => {
                    u(F) === 0 && R(M);
                  });
                }
                O(_, P);
              }, k = (_) => {
                var P = r2(), A = ie(P);
                Mn(A, {
                  get target() {
                    return u(H).label;
                  }
                });
                var M = V(A, 2);
                {
                  var R = (q) => {
                    var L = xe(",");
                    O(q, L);
                  };
                  le(M, (q) => {
                    u(F) < u(f).length - 1 && q(R);
                  });
                }
                O(_, P);
              };
              le(G, (_) => {
                l() ? _(k, !1) : _(C);
              });
            }
            O(D, X);
          },
          (D) => {
            var H = o2(), F = z(H, !0);
            I(H), _e(() => ze(F, d())), O(D, H);
          }
        ), I(T), pe(2), I(N), O(b, N);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => h = b,
    () => h
  ), I(x), O(e, x), ue(p);
}
En(["click"]);
se(
  st,
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
const oo = Math.min, mr = Math.max, li = Math.round, ln = (e) => ({
  x: e,
  y: e
}), a2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, l2 = {
  start: "end",
  end: "start"
};
function ms(e, t, n) {
  return mr(e, oo(t, n));
}
function ko(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function or(e) {
  return e.split("-")[0];
}
function Eo(e) {
  return e.split("-")[1];
}
function _d(e) {
  return e === "x" ? "y" : "x";
}
function ua(e) {
  return e === "y" ? "height" : "width";
}
const c2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function On(e) {
  return c2.has(or(e)) ? "y" : "x";
}
function da(e) {
  return _d(On(e));
}
function u2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Eo(e), o = da(e), i = ua(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ci(s)), [s, ci(s)];
}
function d2(e) {
  const t = ci(e);
  return [ys(e), t, ys(t)];
}
function ys(e) {
  return e.replace(/start|end/g, (t) => l2[t]);
}
const _l = ["left", "right"], xl = ["right", "left"], f2 = ["top", "bottom"], g2 = ["bottom", "top"];
function h2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? xl : _l : t ? _l : xl;
    case "left":
    case "right":
      return t ? f2 : g2;
    default:
      return [];
  }
}
function v2(e, t, n, r) {
  const o = Eo(e);
  let i = h2(or(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ys)))), i;
}
function ci(e) {
  return e.replace(/left|right|bottom|top/g, (t) => a2[t]);
}
function p2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xd(e) {
  return typeof e != "number" ? p2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ui(e) {
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
function bl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = On(t), s = da(t), a = ua(s), l = or(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, g = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
        y: g
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: g
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Eo(t)) {
    case "start":
      h[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const m2 = async (e, t, n) => {
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
    y: g
  } = bl(c, r, l), f = r, h = {}, v = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: x,
      fn: w
    } = a[p], {
      x: S,
      y: b,
      data: E,
      reset: N
    } = await w({
      x: d,
      y: g,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = S ?? d, g = b ?? g, h = {
      ...h,
      [x]: {
        ...h[x],
        ...E
      }
    }, N && v <= 50 && (v++, typeof N == "object" && (N.placement && (f = N.placement), N.rects && (c = N.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: d,
      y: g
    } = bl(c, f, l)), p = -1);
  }
  return {
    x: d,
    y: g,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function bd(e, t) {
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
    elementContext: g = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = ko(t, e), v = xd(h), x = a[f ? g === "floating" ? "reference" : "floating" : g], w = ui(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), S = g === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), E = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = ui(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: S,
    offsetParent: b,
    strategy: l
  }) : S);
  return {
    top: (w.top - N.top + v.top) / E.y,
    bottom: (N.bottom - w.bottom + v.bottom) / E.y,
    left: (w.left - N.left + v.left) / E.x,
    right: (N.right - w.right + v.right) / E.x
  };
}
const y2 = (e) => ({
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
    } = ko(e, t) || {};
    if (c == null)
      return {};
    const g = xd(d), f = {
      x: n,
      y: r
    }, h = da(o), v = ua(h), p = await s.getDimensions(c), x = h === "y", w = x ? "top" : "left", S = x ? "bottom" : "right", b = x ? "clientHeight" : "clientWidth", E = i.reference[v] + i.reference[h] - f[h] - i.floating[v], N = f[h] - i.reference[h], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let D = T ? T[b] : 0;
    (!D || !await (s.isElement == null ? void 0 : s.isElement(T))) && (D = a.floating[b] || i.floating[v]);
    const H = E / 2 - N / 2, F = D / 2 - p[v] / 2 - 1, X = oo(g[w], F), G = oo(g[S], F), C = X, k = D - p[v] - G, _ = D / 2 - p[v] / 2 + H, P = ms(C, _, k), A = !l.arrow && Eo(o) != null && _ !== P && i.reference[v] / 2 - (_ < C ? X : G) - p[v] / 2 < 0, M = A ? _ < C ? _ - C : _ - k : 0;
    return {
      [h]: f[h] + M,
      data: {
        [h]: P,
        centerOffset: _ - P - M,
        ...A && {
          alignmentOffset: M
        }
      },
      reset: A
    };
  }
}), w2 = function(e) {
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
        crossAxis: g = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: p = !0,
        ...x
      } = ko(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = or(o), S = On(a), b = or(a) === a, E = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), N = f || (b || !p ? [ci(a)] : d2(a)), T = v !== "none";
      !f && T && N.push(...v2(a, p, v, E));
      const D = [a, ...N], H = await bd(t, x), F = [];
      let X = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && F.push(H[w]), g) {
        const _ = u2(o, s, E);
        F.push(H[_[0]], H[_[1]]);
      }
      if (X = [...X, {
        placement: o,
        overflows: F
      }], !F.every((_) => _ <= 0)) {
        var G, C;
        const _ = (((G = i.flip) == null ? void 0 : G.index) || 0) + 1, P = D[_];
        if (P && (!(g === "alignment" ? S !== On(P) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        X.every((R) => On(R.placement) === S ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: X
            },
            reset: {
              placement: P
            }
          };
        let A = (C = X.filter((M) => M.overflows[0] <= 0).sort((M, R) => M.overflows[1] - R.overflows[1])[0]) == null ? void 0 : C.placement;
        if (!A)
          switch (h) {
            case "bestFit": {
              var k;
              const M = (k = X.filter((R) => {
                if (T) {
                  const q = On(R.placement);
                  return q === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((q) => q > 0).reduce((q, L) => q + L, 0)]).sort((R, q) => R[1] - q[1])[0]) == null ? void 0 : k[0];
              M && (A = M);
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
}, _2 = /* @__PURE__ */ new Set(["left", "top"]);
async function x2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = or(n), a = Eo(n), l = On(n) === "y", c = _2.has(s) ? -1 : 1, d = i && l ? -1 : 1, g = ko(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), l ? {
    x: h * d,
    y: f * c
  } : {
    x: f * c,
    y: h * d
  };
}
const b2 = function(e) {
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
      } = t, l = await x2(t, e);
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
}, C2 = function(e) {
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
          fn: (x) => {
            let {
              x: w,
              y: S
            } = x;
            return {
              x: w,
              y: S
            };
          }
        },
        ...l
      } = ko(e, t), c = {
        x: n,
        y: r
      }, d = await bd(t, l), g = On(or(o)), f = _d(g);
      let h = c[f], v = c[g];
      if (i) {
        const x = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", S = h + d[x], b = h - d[w];
        h = ms(S, h, b);
      }
      if (s) {
        const x = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", S = v + d[x], b = v - d[w];
        v = ms(S, v, b);
      }
      const p = a.fn({
        ...t,
        [f]: h,
        [g]: v
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [f]: i,
            [g]: s
          }
        }
      };
    }
  };
};
function Pi() {
  return typeof window < "u";
}
function Vr(e) {
  return Cd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pn(e) {
  var t;
  return (t = (Cd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cd(e) {
  return Pi() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function Zt(e) {
  return Pi() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function fn(e) {
  return Pi() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function Cl(e) {
  return !Pi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
const k2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function So(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !k2.has(o);
}
const E2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function S2(e) {
  return E2.has(Vr(e));
}
const N2 = [":popover-open", ":modal"];
function $i(e) {
  return N2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const P2 = ["transform", "translate", "scale", "rotate", "perspective"], $2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], T2 = ["paint", "layout", "strict", "content"];
function fa(e) {
  const t = ga(), n = Zt(e) ? Yt(e) : e;
  return P2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || $2.some((r) => (n.willChange || "").includes(r)) || T2.some((r) => (n.contain || "").includes(r));
}
function D2(e) {
  let t = In(e);
  for (; fn(t) && !Tr(t); ) {
    if (fa(t))
      return t;
    if ($i(t))
      return null;
    t = In(t);
  }
  return null;
}
function ga() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const A2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Tr(e) {
  return A2.has(Vr(e));
}
function Yt(e) {
  return $t(e).getComputedStyle(e);
}
function Ti(e) {
  return Zt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function In(e) {
  if (Vr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Cl(e) && e.host || // Fallback.
    Pn(e)
  );
  return Cl(t) ? t.host : t;
}
function kd(e) {
  const t = In(e);
  return Tr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && So(t) ? t : kd(t);
}
function Ed(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = kd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = $t(o);
  return i ? (ws(s), t.concat(s, s.visualViewport || [], So(o) ? o : [], [])) : t.concat(o, Ed(o, []));
}
function ws(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sd(e) {
  const t = Yt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = fn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = li(n) !== i || li(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Nd(e) {
  return Zt(e) ? e : e.contextElement;
}
function yr(e) {
  const t = Nd(e);
  if (!fn(t))
    return ln(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Sd(t);
  let s = (i ? li(n.width) : n.width) / r, a = (i ? li(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const M2 = /* @__PURE__ */ ln(0);
function Pd(e) {
  const t = $t(e);
  return !ga() || !t.visualViewport ? M2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function O2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function io(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Nd(e);
  let s = ln(1);
  t && (r ? Zt(r) && (s = yr(r)) : s = yr(e));
  const a = O2(i, n, r) ? Pd(i) : ln(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, g = o.height / s.y;
  if (i) {
    const f = $t(i), h = r && Zt(r) ? $t(r) : r;
    let v = f, p = ws(v);
    for (; p && r && h !== v; ) {
      const x = yr(p), w = p.getBoundingClientRect(), S = Yt(p), b = w.left + (p.clientLeft + parseFloat(S.paddingLeft)) * x.x, E = w.top + (p.clientTop + parseFloat(S.paddingTop)) * x.y;
      l *= x.x, c *= x.y, d *= x.x, g *= x.y, l += b, c += E, v = $t(p), p = ws(v);
    }
  }
  return ui({
    width: d,
    height: g,
    x: l,
    y: c
  });
}
function Di(e, t) {
  const n = Ti(e).scrollLeft;
  return t ? t.left + n : io(Pn(e)).left + n;
}
function $d(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Di(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function L2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Pn(r), a = t ? $i(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ln(1);
  const d = ln(0), g = fn(r);
  if ((g || !g && !i) && ((Vr(r) !== "body" || So(s)) && (l = Ti(r)), fn(r))) {
    const h = io(r);
    c = yr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !g && !i ? $d(s, l) : ln(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function V2(e) {
  return Array.from(e.getClientRects());
}
function H2(e) {
  const t = Pn(e), n = Ti(e), r = e.ownerDocument.body, o = mr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = mr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Di(e);
  const a = -n.scrollTop;
  return Yt(r).direction === "rtl" && (s += mr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const kl = 25;
function I2(e, t) {
  const n = $t(e), r = Pn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = ga();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Di(r);
  if (c <= 0) {
    const d = r.ownerDocument, g = d.body, f = getComputedStyle(g), h = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, v = Math.abs(r.clientWidth - g.clientWidth - h);
    v <= kl && (i -= v);
  } else c <= kl && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const z2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function R2(e, t) {
  const n = io(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = fn(e) ? yr(e) : ln(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function El(e, t, n) {
  let r;
  if (t === "viewport")
    r = I2(e, n);
  else if (t === "document")
    r = H2(Pn(e));
  else if (Zt(t))
    r = R2(t, n);
  else {
    const o = Pd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ui(r);
}
function Td(e, t) {
  const n = In(e);
  return n === t || !Zt(n) || Tr(n) ? !1 : Yt(n).position === "fixed" || Td(n, t);
}
function B2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ed(e, []).filter((a) => Zt(a) && Vr(a) !== "body"), o = null;
  const i = Yt(e).position === "fixed";
  let s = i ? In(e) : e;
  for (; Zt(s) && !Tr(s); ) {
    const a = Yt(s), l = fa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && z2.has(o.position) || So(s) && !l && Td(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = In(s);
  }
  return t.set(e, r), r;
}
function F2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? $i(t) ? [] : B2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const g = El(t, d, o);
    return c.top = mr(g.top, c.top), c.right = oo(g.right, c.right), c.bottom = oo(g.bottom, c.bottom), c.left = mr(g.left, c.left), c;
  }, El(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function q2(e) {
  const {
    width: t,
    height: n
  } = Sd(e);
  return {
    width: t,
    height: n
  };
}
function K2(e, t, n) {
  const r = fn(t), o = Pn(t), i = n === "fixed", s = io(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ln(0);
  function c() {
    l.x = Di(o);
  }
  if (r || !r && !i)
    if ((Vr(t) !== "body" || So(o)) && (a = Ti(t)), r) {
      const h = io(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? $d(o, a) : ln(0), g = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: g,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Yi(e) {
  return Yt(e).position === "static";
}
function Sl(e, t) {
  if (!fn(e) || Yt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Pn(e) === n && (n = n.ownerDocument.body), n;
}
function Dd(e, t) {
  const n = $t(e);
  if ($i(e))
    return n;
  if (!fn(e)) {
    let o = In(e);
    for (; o && !Tr(o); ) {
      if (Zt(o) && !Yi(o))
        return o;
      o = In(o);
    }
    return n;
  }
  let r = Sl(e, t);
  for (; r && S2(r) && Yi(r); )
    r = Sl(r, t);
  return r && Tr(r) && Yi(r) && !fa(r) ? n : r || D2(e) || n;
}
const Z2 = async function(e) {
  const t = this.getOffsetParent || Dd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: K2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Y2(e) {
  return Yt(e).direction === "rtl";
}
const W2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: L2,
  getDocumentElement: Pn,
  getClippingRect: F2,
  getOffsetParent: Dd,
  getElementRects: Z2,
  getClientRects: V2,
  getDimensions: q2,
  getScale: yr,
  isElement: Zt,
  isRTL: Y2
}, X2 = b2, j2 = C2, G2 = w2, U2 = y2, J2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: W2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return m2(e, t, {
    ...o,
    platform: i
  });
}, Q2 = ({
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
    const w = document.querySelector(e);
    if (w)
      e = w;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let c;
  if (typeof n == "string") {
    const w = document.querySelector(n);
    if (w)
      c = w;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", c.firstElementChild.before(d));
  function g() {
    J2(e, c, {
      placement: r,
      middleware: [
        X2(o),
        // 手动偏移配置
        G2(i),
        //自动翻转
        j2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [U2({ element: d })] : []
      ]
    }).then(({ x: w, y: S, placement: b, middlewareData: E }) => {
      if (Object.assign(c.style, {
        left: `${w}px`,
        top: `${S}px`
      }), l) {
        const { x: N, y: T } = E.arrow, D = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: N != null ? `${N}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [D]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (d.style.display = "block"), f = !0, g();
  }
  function v() {
    c.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function p(w) {
    w.stopPropagation(), f ? v() : h();
  }
  function x(w) {
    c.contains(w.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((w) => {
    e.addEventListener(w, p);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((w) => {
        e.removeEventListener(w, p);
      }), document.removeEventListener("click", x);
    },
    hide() {
      v();
    },
    isVisible() {
      return f;
    }
  };
};
var ey = /* @__PURE__ */ Q('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function cr(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  Fn(() => (a = Q2({
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
  }, d = ey(), g = z(d), f = z(g);
  Ye(f, n), I(g), Dt(g, (p) => i = p, () => i);
  var h = V(g, 2), v = z(h);
  return Ye(v, r), I(h), Dt(h, (p) => s = p, () => s), I(d), O(e, d), ue(c);
}
se(cr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function De(e, t) {
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
  }, a = Ee(), l = ie(a);
  return bg(l, () => `h${r()}`, !1, (c, d) => {
    Qe(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var g = Ee(), f = ie(g);
    Ye(f, () => n() ?? at), O(d, g);
  }), O(e, a), ue(s);
}
se(De, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var ty = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const ny = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function No(e, t) {
  ce(t, !0), Ae(e, ny);
  const n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Pe(e, Re(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = ty();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(No, {}, [], [], !0);
const ry = () => ({ deleteNode: (t) => {
  Ke.removeNode(t), Ke.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), ir = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, oy = () => ({ copyNode: (t) => {
  const n = Ke.getNode(t);
  if (n) {
    const r = ir(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Ke.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), We = () => Vn("svelteflow__node_id"), zn = () => Vn("tinyflow_options");
var iy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), sy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ay = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ly = /* @__PURE__ */ Q('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), cy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, uy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, dy = /* @__PURE__ */ Q('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), fy = /* @__PURE__ */ Q('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), gy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), hy = /* @__PURE__ */ Q('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), vy = /* @__PURE__ */ Q('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const py = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function zt(e, t) {
  ce(t, !0), Ae(e, py);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), c = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), g = y(t, "allowSettingOfCondition", 7, !0), f = y(t, "showSourceHandle", 7, !0), h = y(t, "showTargetHandle", 7, !0), v = y(t, "onCollapse", 7);
  let p = n().expand ? ["key"] : [];
  const { updateNodeData: x, getNode: w } = ct(), S = /* @__PURE__ */ $(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: b } = ry(), { copyNode: E } = oy(), N = zn(), T = () => {
    N.onNodeExecute?.(w(r()));
  };
  let D = We();
  var H = {
    get data() {
      return n();
    },
    set data(L) {
      n(L), m();
    },
    get id() {
      return r();
    },
    set id(L = "") {
      r(L), m();
    },
    get icon() {
      return o();
    },
    set icon(L) {
      o(L), m();
    },
    get handle() {
      return i();
    },
    set handle(L) {
      i(L), m();
    },
    get children() {
      return s();
    },
    set children(L) {
      s(L), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(L = !0) {
      a(L), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(L = !0) {
      l(L), m();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete(L = !0) {
      c(L), m();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(L = !0) {
      d(L), m();
    },
    get allowSettingOfCondition() {
      return g();
    },
    set allowSettingOfCondition(L = !0) {
      g(L), m();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(L = !0) {
      f(L), m();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(L = !0) {
      h(L), m();
    },
    get onCollapse() {
      return v();
    },
    set onCollapse(L) {
      v(L), m();
    }
  }, F = vy(), X = ie(F);
  {
    var G = (L) => {
      vd(L, {
        get position() {
          return me.Top;
        },
        align: "start",
        children: (K, U) => {
          var ne = hy(), ee = z(ne);
          {
            var Z = (re) => {
              Pe(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (J, oe) => {
                  var ge = iy();
                  O(J, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(ee, (re) => {
              c() && re(Z);
            });
          }
          var te = V(ee, 2);
          {
            var Y = (re) => {
              Pe(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (J, oe) => {
                  var ge = sy();
                  O(J, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(te, (re) => {
              l() && re(Y);
            });
          }
          var W = V(te, 2);
          {
            var fe = (re) => {
              Pe(re, {
                class: "tf-node-toolbar-item",
                onclick: T,
                children: (J, oe) => {
                  var ge = ay();
                  O(J, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(W, (re) => {
              a() && re(fe);
            });
          }
          var ke = V(W, 2);
          {
            var ae = (re) => {
              cr(re, {
                placement: "bottom",
                floating: (oe) => {
                  var ge = fy(), de = z(ge), $e = V(z(de));
                  je($e, {
                    style: "width: 100%;",
                    onchange: (Ue) => {
                      const qe = Ue.target.value;
                      x(D, { title: qe });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(de);
                  var be = V(de, 2), B = V(z(be));
                  Be(B, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ue) => {
                      const qe = Ue.target.value;
                      x(D, { description: qe });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(be);
                  var Le = V(be, 2);
                  {
                    var He = (Ue) => {
                      var qe = ly(), he = V(z(qe));
                      Be(he, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ie) => {
                          const mt = Ie.target.value;
                          x(D, { condition: mt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(qe), O(Ue, qe);
                    };
                    le(Le, (Ue) => {
                      g() && Ue(He);
                    });
                  }
                  var Me = V(Le, 2), Oe = V(z(Me), 2);
                  on(Oe), Oe.__change = [cy, x, D], I(Me);
                  var Ge = V(Me, 2), ut = V(z(Ge), 2);
                  on(ut), ut.__change = [uy, x, D], I(Ge);
                  var dt = V(Ge, 2);
                  {
                    var et = (Ue) => {
                      var qe = dy(), he = ie(qe), Ie = V(z(he));
                      {
                        let ft = /* @__PURE__ */ $(() => n().loopIntervalMs || "1000");
                        Be(Ie, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Ut) => {
                            const Tn = Ut.target.value;
                            x(D, { loopIntervalMs: Tn });
                          },
                          get value() {
                            return u(ft);
                          }
                        });
                      }
                      I(he);
                      var mt = V(he, 2), tt = V(z(mt));
                      {
                        let ft = /* @__PURE__ */ $(() => n().maxLoopCount || "0");
                        Be(tt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Ut) => {
                            const Tn = Ut.target.value;
                            x(D, { maxLoopCount: Tn });
                          },
                          get value() {
                            return u(ft);
                          }
                        });
                      }
                      I(mt);
                      var ot = V(mt, 2), nt = V(z(ot));
                      Be(nt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (ft) => {
                          const Ut = ft.target.value;
                          x(D, { loopBreakCondition: Ut });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(ot), O(Ue, qe);
                    };
                    le(dt, (Ue) => {
                      n().loopEnable && Ue(et);
                    });
                  }
                  I(ge), _e(() => {
                    os(Oe, !!n().async), os(ut, !!n().loopEnable);
                  }), O(oe, ge);
                },
                children: (oe, ge) => {
                  Pe(oe, {
                    class: "tf-node-toolbar-item",
                    children: (de, $e) => {
                      var be = gy();
                      O(de, be);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            le(ke, (re) => {
              d() && re(ae);
            });
          }
          I(ne), O(K, ne);
        },
        $$slots: { default: !0 }
      });
    };
    le(X, (L) => {
      (a() || l() || c()) && L(G);
    });
  }
  var C = V(X, 2), k = V(z(C), 2), _ = z(k);
  wd(_, {
    get items() {
      return u(S);
    },
    get activeKeys() {
      return p;
    },
    onChange: (L, K) => {
      x(r(), { expand: K?.includes("key") }), v()?.(K?.includes("key") ? "key" : "");
    }
  }), I(k), I(C);
  var P = V(C, 2);
  {
    var A = (L) => {
      Hn(L, {
        type: "target",
        get position() {
          return me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    le(P, (L) => {
      h() && L(A);
    });
  }
  var M = V(P, 2);
  {
    var R = (L) => {
      Hn(L, {
        type: "source",
        get position() {
          return me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    le(M, (L) => {
      f() && L(R);
    });
  }
  var q = V(M, 2);
  return Ye(q, () => i() ?? at), O(e, F), ue(H);
}
En(["change"]);
se(
  zt,
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
var my = /* @__PURE__ */ Q('<div class="input-more-item svelte-2f9bnc">数据选项： <!></div>'), yy = /* @__PURE__ */ Q('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">输入方式： <!></div> <!> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <div class="input-more-item svelte-2f9bnc">占位符： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), wy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), _y = /* @__PURE__ */ Q('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const xy = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  ce(t, !0), Ae(e, xy);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = We(), i = Nn(o), s = /* @__PURE__ */ $(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ct(), l = (H, F) => {
    a(o, (X) => {
      let G = X.data.parameters;
      return G[r()][H] = F, { parameters: G };
    });
  }, c = (H, F) => {
    const X = F.target.value;
    l(H, X);
  }, d = (H) => {
    const F = H.target.value;
    l("name", F);
  }, g = (H) => {
    const F = H.target.checked;
    l("required", F);
  }, f = (H) => {
    const F = H.value;
    l("formType", F);
  }, h = (H) => {
    const F = H.value;
    l("contentType", F);
  };
  let v;
  const p = () => {
    a(o, (H) => {
      let F = H.data.parameters;
      return F.splice(r(), 1), { parameters: [...F] };
    }), v?.hide();
  };
  var x = {
    get parameter() {
      return n();
    },
    set parameter(H) {
      n(H), m();
    },
    get index() {
      return r();
    },
    set index(H) {
      r(H), m();
    }
  }, w = _y(), S = ie(w), b = z(S);
  je(b, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), I(S);
  var E = V(S, 2), N = z(E);
  pd(N, {
    get checked() {
      return u(s).required;
    },
    onchange: g
  }), I(E);
  var T = V(E, 2), D = z(T);
  return Dt(
    cr(D, {
      placement: "bottom",
      floating: (F) => {
        var X = yy(), G = z(X), C = V(z(G));
        {
          let Z = /* @__PURE__ */ $(() => u(s).contentType ? [u(s).contentType] : []);
          st(C, {
            get items() {
              return ca;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(Z);
            },
            onSelect: h
          });
        }
        I(G);
        var k = V(G, 2), _ = V(z(k));
        {
          let Z = /* @__PURE__ */ $(() => u(s).formType ? [u(s).formType] : []);
          st(_, {
            get items() {
              return Mm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return u(Z);
            },
            onSelect: f
          });
        }
        I(k);
        var P = V(k, 2);
        {
          var A = (Z) => {
            var te = my(), Y = V(z(te));
            {
              let W = /* @__PURE__ */ $(() => u(s).enums?.join(`
`));
              Be(Y, {
                rows: 3,
                style: "width: 100%;",
                onchange: (fe) => {
                  l("enums", fe.target?.value.trim().split(`
`));
                },
                get value() {
                  return u(W);
                },
                placeholder: "一行一个选项"
              });
            }
            I(te), O(Z, te);
          };
          le(P, (Z) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && Z(A);
          });
        }
        var M = V(P, 2), R = V(z(M));
        Be(R, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            c("formLabel", Z);
          },
          get value() {
            return u(s).formLabel;
          }
        }), I(M);
        var q = V(M, 2), L = V(z(q));
        Be(L, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            c("formDescription", Z);
          },
          get value() {
            return u(s).formDescription;
          }
        }), I(q);
        var K = V(q, 2), U = V(z(K));
        Be(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            c("formPlaceholder", Z);
          },
          get value() {
            return u(s).formPlaceholder;
          }
        }), I(K);
        var ne = V(K, 2), ee = z(ne);
        Pe(ee, {
          onclick: p,
          children: (Z, te) => {
            pe();
            var Y = xe("删除");
            O(Z, Y);
          },
          $$slots: { default: !0 }
        }), I(ne), I(X), O(F, X);
      },
      children: (F, X) => {
        Pe(F, {
          class: "input-btn-more",
          children: (G, C) => {
            var k = wy();
            O(G, k);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (F) => v = F,
    () => v
  ), I(T), O(e, w), ue(x);
}
se(Ad, { parameter: {}, index: {} }, [], [], !0);
var by = /* @__PURE__ */ Q('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Cy = /* @__PURE__ */ Q('<div class="none-params svelte-3n0wca">无输入参数</div>'), ky = /* @__PURE__ */ Q('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Ey = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Md(e, t) {
  ce(t, !0), Ae(e, Ey);
  let n = We(), r = Nn(n), o = /* @__PURE__ */ $(() => [...r?.current?.data?.parameters || []]);
  var i = ky(), s = z(i);
  {
    var a = (c) => {
      var d = by();
      pe(4), O(c, d);
    };
    le(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = V(s, 2);
  pt(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, g) => {
      Ad(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(g);
        }
      });
    },
    (c) => {
      var d = Cy();
      O(c, d);
    }
  ), I(i), O(e, i), ue();
}
se(Md, {}, [], [], !0);
const so = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = ir()), so(t.children);
}), e), Gt = () => {
  const { updateNodeData: e } = ct();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => so(s?.children)) : so(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: ir()
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
var Sy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Ny = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = /* @__PURE__ */ Q('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const $y = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Od(e, t) {
  ce(t, !0), Ae(e, $y);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return zt(e, Re(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (l) => {
      var c = Sy();
      O(l, c);
    },
    children: (l, c) => {
      var d = Py(), g = ie(d), f = z(g);
      De(f, {
        level: 3,
        children: (p, x) => {
          pe();
          var w = xe("输入参数");
          O(p, w);
        },
        $$slots: { default: !0 }
      });
      var h = V(f, 2);
      Pe(h, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, x) => {
          var w = Ny();
          O(p, w);
        },
        $$slots: { default: !0 }
      }), I(g);
      var v = V(g, 2);
      Md(v, {}), O(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(Od, { data: {} }, [], [], !0);
const Ld = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Ld(e, r.source, n));
}, Vd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Vd(r.children, t + "." + r.name, n)
})), Nl = (e, t, n) => {
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
          children: Vd(r, e.id, t)
        };
    }
  }
}, Hd = (e = !1) => {
  const t = We(), n = Nn(t), r = /* @__PURE__ */ $(jt), o = /* @__PURE__ */ $(() => u(r).nodes), i = /* @__PURE__ */ $(() => u(r).edges), s = /* @__PURE__ */ $(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ $(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const g = d.parentId === n.current.id;
        if (g) {
          const f = Nl(d, g, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Ld(d, t, u(i));
      for (const g of u(o))
        if (d.includes(g.id)) {
          const f = g.parentId === n.current.id, h = Nl(g, f, c);
          h && l.push(h);
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
var Ty = /* @__PURE__ */ Q('<div class="input-more-item svelte-laou7w">数据内容： <!></div>'), Dy = /* @__PURE__ */ Q('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <!> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ay = /* @__PURE__ */ Q('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const My = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  ce(t, !0), Ae(e, My), Fn(() => {
    u(c).refType || v({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7), s = y(t, "showContentType", 7, !1);
  let a = We(), l = Nn(a), c = /* @__PURE__ */ $(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ct(), g = (k, _) => {
    d(a, (P) => {
      let A = P.data?.[o()];
      return A[r()] = { ...A[r()], [k]: _ }, { [o()]: A };
    });
  }, f = (k, _) => {
    const P = _.target.value;
    g(k, P);
  }, h = (k) => {
    const _ = k.value;
    g("ref", _);
  }, v = (k) => {
    const _ = k.value;
    g("refType", _);
  }, p = (k) => {
    const _ = k.value;
    g("contentType", _);
  };
  let x;
  const w = () => {
    d(a, (k) => {
      let _ = k.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
    }), x?.hide();
  };
  let S = Hd(i());
  var b = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), m();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(k) {
      i(k), m();
    },
    get showContentType() {
      return s();
    },
    set showContentType(k = !1) {
      s(k), m();
    }
  }, E = Ay(), N = ie(E), T = z(N);
  {
    let k = /* @__PURE__ */ $(() => u(c).nameDisabled === !0);
    je(T, {
      style: "width: 100%;",
      get value() {
        return u(c).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(k);
      },
      oninput: (_) => f("name", _)
    });
  }
  I(N);
  var D = V(N, 2), H = z(D);
  {
    var F = (k) => {
      je(k, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => f("value", _)
      });
    }, X = (k) => {
      var _ = Ee(), P = ie(_);
      {
        var A = (M) => {
          {
            let R = /* @__PURE__ */ $(() => [u(c).ref]);
            st(M, {
              get items() {
                return S.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(R);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        le(
          P,
          (M) => {
            u(c).refType !== "input" && M(A);
          },
          !0
        );
      }
      O(k, _);
    };
    le(H, (k) => {
      u(c).refType === "fixed" ? k(F) : k(X, !1);
    });
  }
  I(D);
  var G = V(D, 2), C = z(G);
  return Dt(
    cr(C, {
      placement: "bottom",
      floating: (_) => {
        var P = Dy(), A = z(P), M = V(z(A));
        {
          let te = /* @__PURE__ */ $(() => u(c).refType ? [u(c).refType] : []);
          st(M, {
            get items() {
              return Am;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(te);
            },
            onSelect: v
          });
        }
        I(A);
        var R = V(A, 2);
        {
          var q = (te) => {
            var Y = Ty(), W = V(z(Y));
            {
              let fe = /* @__PURE__ */ $(() => u(c).contentType ? [u(c).contentType] : []);
              st(W, {
                get items() {
                  return ca;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return u(fe);
                },
                onSelect: p
              });
            }
            I(Y), O(te, Y);
          };
          le(R, (te) => {
            s() && te(q);
          });
        }
        var L = V(R, 2), K = V(z(L));
        Be(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (te) => {
            f("defaultValue", te);
          },
          get value() {
            return u(c).defaultValue;
          }
        }), I(L);
        var U = V(L, 2), ne = V(z(U));
        Be(ne, {
          rows: 3,
          style: "width: 100%;",
          onchange: (te) => {
            f("description", te);
          },
          get value() {
            return u(c).description;
          }
        }), I(U);
        var ee = V(U, 2), Z = z(ee);
        Pe(Z, {
          onclick: w,
          children: (te, Y) => {
            pe();
            var W = xe("删除");
            O(te, W);
          },
          $$slots: { default: !0 }
        }), I(ee), I(P), O(_, P);
      },
      children: (_, P) => {
        No(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => x = _,
    () => x
  ), I(G), O(e, E), ue(b);
}
se(
  Id,
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
var Oy = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ly = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), Vy = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Hy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Ct(e, t) {
  ce(t, !0), Ae(e, Hy);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7), i = y(t, "showContentType", 7, !1);
  let s = We(), a = Nn(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = Vy(), g = z(d);
  {
    var f = (v) => {
      var p = Oy();
      pe(4), O(v, p);
    };
    le(g, (v) => {
      u(l).length !== 0 && v(f);
    });
  }
  var h = V(g, 2);
  return pt(
    h,
    19,
    () => u(l),
    (v) => v.id,
    (v, p, x) => {
      Id(v, {
        get parameter() {
          return u(p);
        },
        get index() {
          return u(x);
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
      var p = Ly(), x = z(p, !0);
      I(p), _e(() => ze(x, n())), O(v, p);
    }
  ), I(d), O(e, d), ue(c);
}
se(
  Ct,
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
var Iy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), zy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ry = /* @__PURE__ */ Q('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const By = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function zd(e, t) {
  ce(t, !0), Ae(e, By);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return zt(e, Re(
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
        var c = Iy();
        O(l, c);
      },
      children: (l, c) => {
        var d = Ry(), g = ie(d), f = z(g);
        De(f, {
          level: 3,
          children: (p, x) => {
            pe();
            var w = xe("输出参数");
            O(p, w);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Pe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, x) => {
            var w = zy();
            O(p, w);
          },
          $$slots: { default: !0 }
        }), I(g);
        var v = V(g, 2);
        Ct(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(zd, { data: {} }, [], [], !0);
const Wi = (e) => JSON.parse(JSON.stringify(e));
var Fy = /* @__PURE__ */ ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), qy = /* @__PURE__ */ Q('<div class="input-more-item svelte-1cfeest"><!></div>'), Ky = /* @__PURE__ */ Q('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Zy = /* @__PURE__ */ Q('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Yy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  ce(t, !0), Ae(e, Yy);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7), i = y(t, "placeholder", 7, "请输入参数值");
  let s = We(), a = Nn(s), l = /* @__PURE__ */ $(() => {
    let C = a?.current?.data?.[o()], k;
    if (C && r().length > 0) {
      let _ = C;
      for (let P = 0; P < r().length; P++) {
        const A = r()[P];
        P == r().length - 1 ? k = _[A] : _ = _[A].children;
      }
    }
    return { ...n(), ...k };
  });
  const { updateNodeData: c } = ct(), d = (C, k) => {
    c(s, (_) => {
      const P = _.data?.[o()];
      if (P && r().length > 0) {
        let A = P;
        for (let M = 0; M < r().length; M++) {
          const R = r()[M];
          M == r().length - 1 ? A[R] = { ...A[R], [C]: k } : A = A[R].children;
        }
      }
      return { [o()]: [...Wi(P)] };
    });
  }, g = (C, k) => {
    const _ = k.target.value;
    d(C, _);
  }, f = (C) => {
    const k = C.value;
    d("dataType", k);
  };
  let h;
  const v = () => {
    c(s, (C) => {
      let k = C.data?.[o()];
      if (k && r().length > 0) {
        let _ = k;
        for (let P = 0; P < r().length; P++) {
          const A = r()[P];
          P == r().length - 1 ? _.splice(A, 1) : _ = _[A].children;
        }
      }
      return { [o()]: [...Wi(k)] };
    }), h?.hide();
  }, p = () => {
    c(s, (C) => {
      let k = C.data?.[o()];
      if (k && r().length > 0) {
        let _ = k;
        for (let P = 0; P < r().length; P++) {
          const A = r()[P];
          P == r().length - 1 ? _[A].children ? _[A].children.push({ id: ir(), name: "newParam", dataType: "String" }) : _[A].children = [{ id: ir(), name: "newParam", dataType: "String" }] : _ = _[A].children;
        }
      }
      return { [o()]: [...Wi(k)] };
    });
  };
  var x = {
    get parameter() {
      return n();
    },
    set parameter(C) {
      n(C), m();
    },
    get position() {
      return r();
    },
    set position(C) {
      r(C), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(C) {
      o(C), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(C = "请输入参数值") {
      i(C), m();
    }
  }, w = Zy(), S = ie(w), b = z(S);
  {
    var E = (C) => {
      var k = Ee(), _ = ie(k);
      pt(_, 17, r, Cr, (P, A) => {
        pe();
        var M = xe(" ");
        O(P, M);
      }), O(C, k);
    };
    le(b, (C) => {
      r().length > 1 && C(E);
    });
  }
  var N = V(b, 2);
  {
    let C = /* @__PURE__ */ $(() => u(l).nameDisabled === !0);
    je(N, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (k) => {
        g("name", k);
      },
      get disabled() {
        return u(C);
      }
    });
  }
  I(S);
  var T = V(S, 2), D = z(T);
  {
    let C = /* @__PURE__ */ $(() => u(l).dataType ? [u(l).dataType] : []), k = /* @__PURE__ */ $(() => u(l).dataTypeDisabled === !0);
    st(D, {
      get items() {
        return Dm;
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return u(C);
      },
      get disabled() {
        return u(k);
      },
      onSelect: f
    });
  }
  var H = V(D, 2);
  {
    var F = (C) => {
      Pe(C, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: p,
        children: (k, _) => {
          var P = Fy();
          O(k, P);
        },
        $$slots: { default: !0 }
      });
    };
    le(H, (C) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && C(F);
    });
  }
  I(T);
  var X = V(T, 2), G = z(X);
  return Dt(
    cr(G, {
      placement: "bottom",
      floating: (k) => {
        var _ = Ky(), P = z(_), A = V(z(P));
        {
          let K = /* @__PURE__ */ $(() => u(l).defaultValue || "");
          Be(A, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return u(K);
            },
            onchange: (U) => {
              g("defaultValue", U);
            }
          });
        }
        I(P);
        var M = V(P, 2), R = V(z(M));
        {
          let K = /* @__PURE__ */ $(() => u(l).description || "");
          Be(R, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return u(K);
            },
            onchange: (U) => {
              g("description", U);
            }
          });
        }
        I(M);
        var q = V(M, 2);
        {
          var L = (K) => {
            var U = qy(), ne = z(U);
            Pe(ne, {
              onclick: v,
              children: (ee, Z) => {
                pe();
                var te = xe("删除");
                O(ee, te);
              },
              $$slots: { default: !0 }
            }), I(U), O(K, U);
          };
          le(q, (K) => {
            u(l).deleteDisabled !== !0 && K(L);
          });
        }
        I(_), O(k, _);
      },
      children: (k, _) => {
        No(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => h = k,
    () => h
  ), I(X), O(e, w), ue(x);
}
se(
  Rd,
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
var Wy = /* @__PURE__ */ Q("<!> <!>", 1), Xy = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), jy = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Gy = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Uy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function $n(e, t) {
  ce(t, !0), Ae(e, Uy);
  const n = (v, p = at, x = at) => {
    var w = Ee(), S = ie(w);
    pt(
      S,
      19,
      p,
      (b) => `${b.id}_${b.children ? b.children.length : 0}`,
      (b, E, N) => {
        var T = Wy(), D = ie(T);
        {
          let X = /* @__PURE__ */ $(() => [...x(), u(N)]);
          Rd(D, {
            get parameter() {
              return u(E);
            },
            get position() {
              return u(X);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var H = V(D, 2);
        {
          var F = (X) => {
            {
              let G = /* @__PURE__ */ $(() => [...x(), u(N)]);
              n(X, () => u(E).children, () => u(G));
            }
          };
          le(H, (X) => {
            u(E).children && X(F);
          });
        }
        O(b, T);
      },
      (b) => {
        var E = Ee(), N = ie(E);
        {
          var T = (D) => {
            var H = Xy(), F = z(H, !0);
            I(H), _e(() => ze(F, r())), O(D, H);
          };
          le(N, (D) => {
            x().length === 0 && D(T);
          });
        }
        O(b, E);
      }
    ), O(v, w);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs"), i = y(t, "placeholder", 7, "请输入参数名称");
  let s = We(), a = Nn(s), l = /* @__PURE__ */ $(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = Gy(), g = z(d);
  {
    var f = (v) => {
      var p = jy();
      pe(4), O(v, p);
    };
    le(g, (v) => {
      u(l).length !== 0 && v(f);
    });
  }
  var h = V(g, 2);
  return n(h, () => u(l) || [], () => []), I(d), O(e, d), ue(c);
}
se($n, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Jy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Qy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), tw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), nw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), rw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const iw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Bd(e, t) {
  ce(t, !0), Ae(e, iw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt(), s = zn();
  let a = /* @__PURE__ */ Se(Lt([]));
  Fn(async () => {
    const g = await s.provider?.llm?.();
    u(a).push(...g || []);
  });
  const { updateNodeData: l } = ct(), c = (g) => {
    l(o, () => ({ outType: g })), g === "text" ? l(o, {
      outputDefs: [
        {
          name: "output",
          dataType: "String",
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    }) : l(o, { outputDefs: [] });
  };
  Ze(() => {
    n().outType || c("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(g) {
      n(g), m();
    }
  };
  return zt(e, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var h = Jy();
        O(f, h);
      },
      children: (f, h) => {
        var v = ow(), p = ie(v), x = z(p);
        De(x, {
          level: 3,
          children: (re, J) => {
            pe();
            var oe = xe("输入参数");
            O(re, oe);
          },
          $$slots: { default: !0 }
        });
        var w = V(x, 2);
        Pe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (re, J) => {
            var oe = Qy();
            O(re, oe);
          },
          $$slots: { default: !0 }
        }), I(p);
        var S = V(p, 2);
        Ct(S, {});
        var b = V(S, 2);
        De(b, {
          level: 3,
          mt: "10px",
          children: (re, J) => {
            pe();
            var oe = xe("模型设置");
            O(re, oe);
          },
          $$slots: { default: !0 }
        });
        var E = V(b, 4), N = z(E);
        {
          let re = /* @__PURE__ */ $(() => n().llmId ? [n().llmId] : []);
          st(N, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (J) => {
              const oe = J.value;
              l(o, () => ({ llmId: oe }));
            },
            get value() {
              return u(re);
            }
          });
        }
        var T = V(N, 2);
        No(T, {}), I(E);
        var D = V(E, 4), H = z(D), F = z(H), X = z(F);
        I(F);
        var G = V(F, 2);
        on(G), G.__input = [ew, l, o], I(H), I(D);
        var C = V(D, 2), k = z(C), _ = z(k), P = z(_);
        I(_);
        var A = V(_, 2);
        on(A), A.__input = [tw, l, o], I(k), I(C);
        var M = V(C, 2), R = z(M), q = z(R), L = z(q);
        I(q);
        var K = V(q, 2);
        on(K), K.__input = [nw, l, o], I(R), I(M);
        var U = V(M, 4), ne = z(U);
        {
          let re = /* @__PURE__ */ $(() => n().systemPrompt || "");
          Be(ne, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return u(re);
            },
            oninput: (J) => {
              l(o, { systemPrompt: J.target.value });
            }
          });
        }
        I(U);
        var ee = V(U, 4), Z = z(ee);
        {
          let re = /* @__PURE__ */ $(() => n().userPrompt || "");
          Be(Z, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return u(re);
            },
            oninput: (J) => {
              l(o, { userPrompt: J.target.value });
            }
          });
        }
        I(ee);
        var te = V(ee, 2), Y = z(te);
        De(Y, {
          level: 3,
          children: (re, J) => {
            pe();
            var oe = xe("输出参数");
            O(re, oe);
          },
          $$slots: { default: !0 }
        });
        var W = V(Y, 2);
        {
          let re = /* @__PURE__ */ $(() => n().outType ? [n().outType] : []);
          st(W, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            defaultValue: "text",
            onSelect: (J) => {
              c(J.value);
            },
            get value() {
              return u(re);
            }
          });
        }
        var fe = V(W, 2);
        {
          var ke = (re) => {
            Pe(re, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (J, oe) => {
                var ge = rw();
                O(J, ge);
              },
              $$slots: { default: !0 }
            });
          };
          le(fe, (re) => {
            n().outType === "json" && re(ke);
          });
        }
        I(te);
        var ae = V(te, 2);
        $n(ae, {}), _e(() => {
          ze(X, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Ho(G, n().temperature ?? 0.5), ze(P, `Top P: ${n().topP ?? 0.9 ?? ""}`), Ho(A, n().topP ?? 0.9), ze(L, `Top K: ${n().topK ?? 50 ?? ""}`), Ho(K, n().topK ?? 50);
        }), O(f, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
En(["input"]);
se(Bd, { data: {} }, [], [], !0);
var sw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Fd(e, t) {
  ce(t, !0), Ae(e, uw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Fn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = We(), { addParameter: i } = Gt(), { updateNodeData: s } = ct(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  };
  return zt(e, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var g = sw();
        O(d, g);
      },
      children: (d, g) => {
        var f = cw(), h = ie(f), v = z(h);
        De(v, {
          level: 3,
          children: (X, G) => {
            pe();
            var C = xe("输入参数");
            O(X, C);
          },
          $$slots: { default: !0 }
        });
        var p = V(v, 2);
        Pe(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (X, G) => {
            var C = aw();
            O(X, C);
          },
          $$slots: { default: !0 }
        }), I(h);
        var x = V(h, 2);
        Ct(x, {});
        var w = V(x, 2);
        De(w, {
          level: 3,
          mt: "10px",
          children: (X, G) => {
            pe();
            var C = xe("代码");
            O(X, C);
          },
          $$slots: { default: !0 }
        });
        var S = V(w, 4), b = z(S);
        {
          let X = /* @__PURE__ */ $(() => n().engine ? [n().engine] : ["qlexpress"]);
          st(b, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (G) => {
              const C = G.value;
              s(o, () => ({ engine: C }));
            },
            get value() {
              return u(X);
            }
          });
        }
        I(S);
        var E = V(S, 4), N = z(E);
        {
          let X = /* @__PURE__ */ $(() => n().code || "");
          Be(N, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (G) => {
              s(o, () => ({ code: G.target.value }));
            },
            get value() {
              return u(X);
            }
          });
        }
        I(E);
        var T = V(E, 2), D = z(T);
        De(D, {
          level: 3,
          mt: "10px",
          children: (X, G) => {
            pe();
            var C = xe("输出参数");
            O(X, C);
          },
          $$slots: { default: !0 }
        });
        var H = V(D, 2);
        Pe(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (X, G) => {
            var C = lw();
            O(X, C);
          },
          $$slots: { default: !0 }
        }), I(T);
        var F = V(T, 2);
        $n(F, {}), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Fd, { data: {} }, [], [], !0);
var dw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), fw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  ce(t, !0), Ae(e, hw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt(), { updateNodeData: s } = ct();
  Ze(() => {
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
  return zt(e, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = dw();
        O(c, d);
      },
      children: (c, d) => {
        var g = gw(), f = ie(g), h = z(f);
        De(h, {
          level: 3,
          children: (T, D) => {
            pe();
            var H = xe("输入参数");
            O(T, H);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Pe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, D) => {
            var H = fw();
            O(T, H);
          },
          $$slots: { default: !0 }
        }), I(f);
        var p = V(f, 2);
        Ct(p, {});
        var x = V(p, 2);
        De(x, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (T, D) => {
            pe();
            var H = xe("模板内容");
            O(T, H);
          },
          $$slots: { default: !0 }
        });
        var w = V(x, 2), S = z(w);
        {
          let T = /* @__PURE__ */ $(() => n().template || "");
          Be(S, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ template: D.target.value }));
            },
            get value() {
              return u(T);
            }
          });
        }
        I(w);
        var b = V(w, 2), E = z(b);
        De(E, {
          level: 3,
          mt: "10px",
          children: (T, D) => {
            pe();
            var H = xe("输出参数");
            O(T, H);
          },
          $$slots: { default: !0 }
        }), I(b);
        var N = V(b, 2);
        $n(N, {}), O(c, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(qd, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ Q('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), ww = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), xw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), Cw = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), kw = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), Ew = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ Q('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const Nw = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Kd(e, t) {
  ce(t, !0), Ae(e, Nw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Fn(() => {
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
  ], i = We(), { addParameter: s } = Gt(), { updateNodeData: a } = ct();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  };
  return zt(e, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var g = vw();
        O(d, g);
      },
      children: (d, g) => {
        var f = Sw(), h = ie(f), v = z(h);
        De(v, {
          level: 3,
          children: (Z, te) => {
            pe();
            var Y = xe("输入参数");
            O(Z, Y);
          },
          $$slots: { default: !0 }
        });
        var p = V(v, 2);
        Pe(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (Z, te) => {
            var Y = pw();
            O(Z, Y);
          },
          $$slots: { default: !0 }
        }), I(h);
        var x = V(h, 2);
        Ct(x, {});
        var w = V(x, 2);
        De(w, {
          level: 3,
          mt: "10px",
          children: (Z, te) => {
            pe();
            var Y = xe("URL 地址");
            O(Z, Y);
          },
          $$slots: { default: !0 }
        });
        var S = V(w, 2), b = z(S), E = z(b);
        {
          let Z = /* @__PURE__ */ $(() => n().method ? [n().method] : ["get"]);
          st(E, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (te) => {
              const Y = te.value;
              a(i, () => ({ method: Y }));
            },
            get value() {
              return u(Z);
            }
          });
        }
        I(b);
        var N = V(b, 2), T = z(N);
        {
          let Z = /* @__PURE__ */ $(() => n().url || "");
          je(T, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (te) => {
              a(i, () => ({ url: te.target.value }));
            },
            get value() {
              return u(Z);
            }
          });
        }
        I(N), I(S);
        var D = V(S, 2), H = z(D);
        De(H, {
          level: 3,
          children: (Z, te) => {
            pe();
            var Y = xe("Http 头信息");
            O(Z, Y);
          },
          $$slots: { default: !0 }
        });
        var F = V(H, 2);
        Pe(F, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (Z, te) => {
            var Y = mw();
            O(Z, Y);
          },
          $$slots: { default: !0 }
        }), I(D);
        var X = V(D, 2);
        Ct(X, { dataKeyName: "headers" });
        var G = V(X, 2);
        {
          var C = (Z) => {
            var te = yw(), Y = ie(te);
            De(Y, {
              level: 3,
              mt: "10px",
              children: (B, Le) => {
                pe();
                var He = xe("Body");
                O(B, He);
              },
              $$slots: { default: !0 }
            });
            var W = V(Y, 2), fe = z(W), ke = z(fe);
            {
              let B = /* @__PURE__ */ $(() => !n().bodyType || n().bodyType === "");
              je(ke, {
                type: "radio",
                name: "bodyType",
                value: "",
                get checked() {
                  return u(B);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            pe(), I(fe);
            var ae = V(fe, 2), re = z(ae);
            {
              let B = /* @__PURE__ */ $(() => n().bodyType === "form-data");
              je(re, {
                type: "radio",
                name: "bodyType",
                value: "form-data",
                get checked() {
                  return u(B);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            pe(), I(ae);
            var J = V(ae, 2), oe = z(J);
            {
              let B = /* @__PURE__ */ $(() => n().bodyType === "x-www-form-urlencoded");
              je(oe, {
                type: "radio",
                name: "bodyType",
                value: "x-www-form-urlencoded",
                get checked() {
                  return u(B);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            pe(), I(J);
            var ge = V(J, 2), de = z(ge);
            {
              let B = /* @__PURE__ */ $(() => n().bodyType === "json");
              je(de, {
                type: "radio",
                name: "bodyType",
                value: "json",
                get checked() {
                  return u(B);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            pe(), I(ge);
            var $e = V(ge, 2), be = z($e);
            {
              let B = /* @__PURE__ */ $(() => n().bodyType === "raw");
              je(be, {
                type: "radio",
                name: "bodyType",
                value: "raw",
                get checked() {
                  return u(B);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            pe(), I($e), I(W), O(Z, te);
          };
          le(G, (Z) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && Z(C);
          });
        }
        var k = V(G, 2);
        {
          var _ = (Z) => {
            var te = _w(), Y = ie(te), W = z(Y);
            De(W, {
              level: 3,
              children: (ae, re) => {
                pe();
                var J = xe("参数");
                O(ae, J);
              },
              $$slots: { default: !0 }
            });
            var fe = V(W, 2);
            Pe(fe, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ae, re) => {
                var J = ww();
                O(ae, J);
              },
              $$slots: { default: !0 }
            }), I(Y);
            var ke = V(Y, 2);
            Ct(ke, { dataKeyName: "formData" }), O(Z, te);
          };
          le(k, (Z) => {
            n().bodyType === "form-data" && Z(_);
          });
        }
        var P = V(k, 2);
        {
          var A = (Z) => {
            var te = bw(), Y = ie(te), W = z(Y);
            De(W, {
              level: 3,
              children: (ae, re) => {
                pe();
                var J = xe("Body 参数");
                O(ae, J);
              },
              $$slots: { default: !0 }
            });
            var fe = V(W, 2);
            Pe(fe, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ae, re) => {
                var J = xw();
                O(ae, J);
              },
              $$slots: { default: !0 }
            }), I(Y);
            var ke = V(Y, 2);
            Ct(ke, { dataKeyName: "formUrlencoded" }), O(Z, te);
          };
          le(P, (Z) => {
            n().bodyType === "x-www-form-urlencoded" && Z(A);
          });
        }
        var M = V(P, 2);
        {
          var R = (Z) => {
            var te = Cw(), Y = z(te);
            Be(Y, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (W) => {
                a(i, { bodyJson: W.target.value });
              }
            }), I(te), O(Z, te);
          };
          le(M, (Z) => {
            n().bodyType === "json" && Z(R);
          });
        }
        var q = V(M, 2);
        {
          var L = (Z) => {
            var te = kw(), Y = z(te);
            Be(Y, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (W) => {
                a(i, { bodyRaw: W.target.value });
              }
            }), I(te), O(Z, te);
          };
          le(q, (Z) => {
            n().bodyType === "raw" && Z(L);
          });
        }
        var K = V(q, 2), U = z(K);
        De(U, {
          level: 3,
          mt: "10px",
          children: (Z, te) => {
            pe();
            var Y = xe("输出参数");
            O(Z, Y);
          },
          $$slots: { default: !0 }
        });
        var ne = V(U, 2);
        Pe(ne, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (Z, te) => {
            var Y = Ew();
            O(Z, Y);
          },
          $$slots: { default: !0 }
        }), I(K);
        var ee = V(K, 2);
        $n(ee, {}), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Kd, { data: {} }, [], [], !0);
var Pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), $w = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ce(t, !0), Ae(e, Dw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt(), s = zn();
  let a = /* @__PURE__ */ Se(Lt([]));
  Fn(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = ct();
  Ze(() => {
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
  return zt(e, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (g) => {
        var f = Pw();
        O(g, f);
      },
      children: (g, f) => {
        var h = Tw(), v = ie(h), p = z(v);
        De(p, {
          level: 3,
          children: (C, k) => {
            pe();
            var _ = xe("输入参数");
            O(C, _);
          },
          $$slots: { default: !0 }
        });
        var x = V(p, 2);
        Pe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, k) => {
            var _ = $w();
            O(C, _);
          },
          $$slots: { default: !0 }
        }), I(v);
        var w = V(v, 2);
        Ct(w, {});
        var S = V(w, 2);
        De(S, {
          level: 3,
          mt: "10px",
          children: (C, k) => {
            pe();
            var _ = xe("知识库设置");
            O(C, _);
          },
          $$slots: { default: !0 }
        });
        var b = V(S, 4), E = z(b);
        {
          let C = /* @__PURE__ */ $(() => n().knowledgeId ? [n().knowledgeId] : []);
          st(E, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (k) => {
              const _ = k.value;
              l(o, () => ({ knowledgeId: _ }));
            },
            get value() {
              return u(C);
            }
          });
        }
        I(b);
        var N = V(b, 4), T = z(N);
        je(T, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (C) => {
            const k = C.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), I(N);
        var D = V(N, 4), H = z(D);
        {
          let C = /* @__PURE__ */ $(() => n().limit || "");
          je(H, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (k) => {
              const _ = k.target.value;
              l(o, () => ({ limit: _ }));
            },
            get value() {
              return u(C);
            }
          });
        }
        I(D);
        var F = V(D, 2), X = z(F);
        De(X, {
          level: 3,
          mt: "10px",
          children: (C, k) => {
            pe();
            var _ = xe("输出参数");
            O(C, _);
          },
          $$slots: { default: !0 }
        }), I(F);
        var G = V(F, 2);
        $n(G, {}), O(g, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
se(Zd, { data: {} }, [], [], !0);
var Aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Mw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Lw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  ce(t, !0), Ae(e, Lw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt(), s = zn();
  let a = /* @__PURE__ */ Se(Lt([]));
  Fn(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = ct();
  Ze(() => {
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
  return zt(e, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (g) => {
        var f = Aw();
        O(g, f);
      },
      children: (g, f) => {
        var h = Ow(), v = ie(h), p = z(v);
        De(p, {
          level: 3,
          children: (C, k) => {
            pe();
            var _ = xe("输入参数");
            O(C, _);
          },
          $$slots: { default: !0 }
        });
        var x = V(p, 2);
        Pe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, k) => {
            var _ = Mw();
            O(C, _);
          },
          $$slots: { default: !0 }
        }), I(v);
        var w = V(v, 2);
        Ct(w, {});
        var S = V(w, 2);
        De(S, {
          level: 3,
          mt: "10px",
          children: (C, k) => {
            pe();
            var _ = xe("搜索引擎设置");
            O(C, _);
          },
          $$slots: { default: !0 }
        });
        var b = V(S, 4), E = z(b);
        {
          let C = /* @__PURE__ */ $(() => n().engine ? [n().engine] : []);
          st(E, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (k) => {
              const _ = k.value;
              l(o, () => ({ engine: _ }));
            },
            get value() {
              return u(C);
            }
          });
        }
        I(b);
        var N = V(b, 4), T = z(N);
        je(T, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (C) => {
            const k = C.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), I(N);
        var D = V(N, 4), H = z(D);
        je(H, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (C) => {
            const k = C.target.value;
            l(o, () => ({ limit: k }));
          }
        }), I(D);
        var F = V(D, 2), X = z(F);
        De(X, {
          level: 3,
          mt: "10px",
          children: (C, k) => {
            pe();
            var _ = xe("输出参数");
            O(C, _);
          },
          $$slots: { default: !0 }
        }), I(F);
        var G = V(F, 2);
        $n(G, {}), O(g, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
se(Yd, { data: {} }, [], [], !0);
var Vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Hw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ Q('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const zw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Wd(e, t) {
  ce(t, !0), Ae(e, zw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt();
  Ze(() => {
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
  return zt(e, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Vw();
        O(c, d);
      },
      handle: (c) => {
        Hn(c, {
          type: "source",
          get position() {
            return me.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, d) => {
        var g = Iw(), f = ie(g), h = z(f);
        De(h, {
          level: 3,
          children: (b, E) => {
            pe();
            var N = xe("循环变量");
            O(b, N);
          },
          $$slots: { default: !0 }
        }), I(f);
        var v = V(f, 2);
        Ct(v, { dataKeyName: "loopVars" });
        var p = V(v, 2), x = z(p);
        De(x, {
          level: 3,
          children: (b, E) => {
            pe();
            var N = xe("输出参数");
            O(b, N);
          },
          $$slots: { default: !0 }
        });
        var w = V(x, 2);
        Pe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, E) => {
            var N = Hw();
            O(b, N);
          },
          $$slots: { default: !0 }
        }), I(p);
        var S = V(p, 2);
        Ct(S, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(c, g);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(Wd, { data: {} }, [], [], !0);
const Rw = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var Bw = /* @__PURE__ */ Q('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), Fw = /* @__PURE__ */ Q('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const qw = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Xd(e, t) {
  ce(t, !0), Ae(e, qw);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = We(), a = Nn(s), l = /* @__PURE__ */ $(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = ct(), d = (C, k) => {
    c(s, (_) => {
      let P = _.data?.[o()];
      return P[r()] = { ...P[r()], [C]: k }, { [o()]: P };
    });
  }, g = (C, k) => {
    const _ = k.target.value;
    d(C, _);
  }, f = (C) => {
    const k = C.value;
    d("ref", k);
  }, h = (C) => {
    const k = C.value;
    d("formType", k);
  }, v = (C) => {
    const k = C.value;
    d("contentType", k);
  };
  let p;
  const x = () => {
    c(s, (C) => {
      let k = C.data?.[o()];
      return k.splice(r(), 1), { [o()]: [...k] };
    }), p?.hide();
  };
  let w = Hd(i());
  var S = {
    get parameter() {
      return n();
    },
    set parameter(C) {
      n(C), m();
    },
    get index() {
      return r();
    },
    set index(C) {
      r(C), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(C) {
      o(C), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(C) {
      i(C), m();
    }
  }, b = Fw(), E = ie(b), N = z(E);
  {
    let C = /* @__PURE__ */ $(() => u(l).nameDisabled === !0);
    je(N, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(C);
      },
      oninput: (k) => g("name", k)
    });
  }
  I(E);
  var T = V(E, 2), D = z(T);
  {
    var H = (C) => {
      je(C, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (k) => g("value", k)
      });
    }, F = (C) => {
      var k = Ee(), _ = ie(k);
      {
        var P = (A) => {
          {
            let M = /* @__PURE__ */ $(() => [u(l).ref]);
            st(A, {
              get items() {
                return w.current;
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
        le(
          _,
          (A) => {
            u(l).refType !== "input" && A(P);
          },
          !0
        );
      }
      O(C, k);
    };
    le(D, (C) => {
      u(l).refType === "fixed" ? C(H) : C(F, !1);
    });
  }
  I(T);
  var X = V(T, 2), G = z(X);
  return Dt(
    cr(G, {
      placement: "bottom",
      floating: (k) => {
        var _ = Bw(), P = z(_), A = V(z(P));
        {
          let Y = /* @__PURE__ */ $(() => u(l).contentType ? [u(l).contentType] : []);
          st(A, {
            get items() {
              return ca;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(Y);
            },
            onSelect: v
          });
        }
        I(P);
        var M = V(P, 2), R = V(z(M));
        {
          let Y = /* @__PURE__ */ $(() => u(l).formType ? [u(l).formType] : []);
          st(R, {
            get items() {
              return Om;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return u(Y);
            },
            onSelect: h
          });
        }
        I(M);
        var q = V(M, 2), L = V(z(q));
        Be(L, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Y) => {
            g("formLabel", Y);
          },
          get value() {
            return u(l).formLabel;
          }
        }), I(q);
        var K = V(q, 2), U = V(z(K));
        Be(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Y) => {
            g("formDescription", Y);
          },
          get value() {
            return u(l).formDescription;
          }
        }), I(K);
        var ne = V(K, 2), ee = V(z(ne), 2);
        on(ee), os(ee, !1), ee.__change = [Rw, d], I(ne);
        var Z = V(ne, 2), te = z(Z);
        Pe(te, {
          onclick: x,
          children: (Y, W) => {
            pe();
            var fe = xe("删除");
            O(Y, fe);
          },
          $$slots: { default: !0 }
        }), I(Z), I(_), O(k, _);
      },
      children: (k, _) => {
        No(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => p = k,
    () => p
  ), I(X), O(e, b), ue(S);
}
En(["change"]);
se(
  Xd,
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
var Kw = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Zw = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), Yw = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ww = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function jd(e, t) {
  ce(t, !0), Ae(e, Ww);
  const n = y(t, "noneParameterText", 7, "无确认数据"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = We(), s = Nn(i), a = /* @__PURE__ */ $(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无确认数据") {
      n(h), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), m();
    }
  }, c = Yw(), d = z(c);
  {
    var g = (h) => {
      var v = Kw();
      pe(4), O(h, v);
    };
    le(d, (h) => {
      u(a).length !== 0 && h(g);
    });
  }
  var f = V(d, 2);
  return pt(
    f,
    19,
    () => u(a),
    (h) => h.id,
    (h, v, p) => {
      Xd(h, {
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
    (h) => {
      var v = Zw(), p = z(v, !0);
      I(v), _e(() => ze(p, n())), O(h, v);
    }
  ), I(c), O(e, c), ue(l);
}
se(jd, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const _s = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!_s(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !_s(e[s], t[s])) return !1;
    return !0;
  }
};
var Xw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), jw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Gd(e, t) {
  ce(t, !0), Ae(e, Uw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt(), { updateNodeData: s } = ct();
  Ze(() => {
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
      _s(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return zt(e, Re(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Xw();
        O(c, d);
      },
      children: (c, d) => {
        var g = Gw(), f = ie(g), h = z(f);
        De(h, {
          level: 3,
          children: (T, D) => {
            pe();
            var H = xe("确认数据");
            O(T, H);
          },
          $$slots: { default: !0 }
        });
        var v = V(h, 2);
        Pe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (T, D) => {
            var H = jw();
            O(T, H);
          },
          $$slots: { default: !0 }
        }), I(f);
        var p = V(f, 2);
        jd(p, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var x = V(p, 2);
        De(x, {
          level: 3,
          mt: "10px",
          children: (T, D) => {
            pe();
            var H = xe("确认消息");
            O(T, H);
          },
          $$slots: { default: !0 }
        });
        var w = V(x, 4), S = z(w);
        {
          let T = /* @__PURE__ */ $(() => n().message || "");
          Be(S, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ message: D.target.value }));
            },
            get value() {
              return u(T);
            }
          });
        }
        I(w);
        var b = V(w, 2), E = z(b);
        De(E, {
          level: 3,
          mt: "10px",
          children: (T, D) => {
            pe();
            var H = xe("输出参数");
            O(T, H);
          },
          $$slots: { default: !0 }
        }), I(b);
        var N = V(b, 2);
        $n(N, { placeholder: "" }), O(c, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Gd, { data: {} }, [], [], !0);
const Jw = {
  startNode: Od,
  codeNode: Fd,
  confirmNode: Gd,
  llmNode: Bd,
  templateNode: qd,
  httpNode: Kd,
  knowledgeNode: Zd,
  searchEngineNode: Yd,
  loopNode: Wd,
  endNode: zd
};
var Qw = /* @__PURE__ */ Q("<!> ", 1);
function xs(e, t) {
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
  return Pe(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (c, d) => {
      var g = Qw(), f = ie(g);
      qs(f, n);
      var h = V(f);
      _e(() => ze(h, ` ${r() ?? ""}`)), O(c, g);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se(xs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var e_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), t_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), n_ = /* @__PURE__ */ Q('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Ud(e, t) {
  ce(t, !0);
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
  ], s = [], a = zn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((S, b) => (l[S].sortNo || 0) - (l[b].sortNo || 0));
    for (let S of w)
      l[S].group === "base" ? o.push({ type: S, ...l[S] }) : s.push({
        icon: l[S].icon,
        title: l[S].title,
        type: S
      });
    o.sort((S, b) => (S.sortNo || 0) - (b.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let S of w)
        for (let b = 0; b < o.length; b++)
          if (o[b].type === S) {
            o.splice(b, 1);
            break;
          }
    }
  }
  var c = n_(), d = z(c), g = z(d), f = z(g);
  yd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      j(n, w.value.toString(), !0);
    }
  }), I(g);
  var h = V(g, 2), v = z(h);
  pt(v, 21, () => o, Cr, (w, S) => {
    xs(w, Re(() => u(S)));
  }), I(v);
  var p = V(v, 2);
  pt(p, 21, () => s, Cr, (w, S) => {
    xs(w, Re(() => u(S)));
  }), I(p), I(h), I(d);
  var x = V(d, 2);
  Pe(x, {
    onclick: () => {
      j(r, u(r) ? "" : "show", !0);
    },
    children: (w, S) => {
      var b = Ee(), E = ie(b);
      {
        var N = (D) => {
          var H = e_();
          O(D, H);
        }, T = (D) => {
          var H = t_();
          O(D, H);
        };
        le(E, (D) => {
          u(r) === "show" ? D(N) : D(T, !1);
        });
      }
      O(w, b);
    },
    $$slots: { default: !0 }
  }), I(c), _e(() => {
    St(c, 1, `tf-toolbar ${u(r) ?? ""}`), lt(v, `display: ${u(n) === "base" ? "flex" : "none"}`), lt(p, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), O(e, c), ue();
}
se(Ud, {}, [], [], !0);
const r_ = () => ({ getNode: (t) => Ke.getNode(t) }), o_ = () => ({ ensureParentInNodesBefore: (t, n) => {
  Ke.updateNodes((r) => {
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
} }), i_ = () => ({ getEdgesByTarget: (t) => Ke.getEdges().filter((r) => r.target === t) });
var s_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), a_ = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), l_ = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), c_ = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), u_ = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), d_ = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), f_ = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), g_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), h_ = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), v_ = /* @__PURE__ */ Q("<!> <!> <div></div> <!>", 1);
const p_ = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Jd(e, t) {
  ce(t, !0), Ae(e, p_);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = We(), { addParameter: i } = Gt(), s = ct(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, c = (w, S) => {
    l({ [w]: S.target?.value });
  }, d = { ...r, id: o, data: n() }, g = document.createElement("div"), h = zn().customNodes[t.type];
  h.render?.(g, d, s);
  const v = h.forms;
  let p;
  Ze(() => {
    n().expand && p && p.append(g);
  }), Ze(() => {
    n() && h.onUpdate?.(g, { ...d, data: n() });
  }), Ze(() => {
    !n().parameters && h.parameters && l({
      parameters: so(JSON.parse(JSON.stringify(h.parameters)))
    });
  }), Ze(() => {
    !n().outputDefs && h.outputDefs && l({
      outputDefs: so(JSON.parse(JSON.stringify(h.outputDefs)))
    });
  });
  var x = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), m();
    }
  };
  {
    const w = (b) => {
      var E = Ee(), N = ie(E);
      qs(N, () => h.icon), O(b, E);
    };
    let S = /* @__PURE__ */ $(() => ({ ...n(), description: h.description }));
    zt(e, Re(
      {
        get data() {
          return u(S);
        }
      },
      () => r,
      {
        icon: w,
        children: (b, E) => {
          var N = v_(), T = ie(N);
          {
            var D = (k) => {
              var _ = a_(), P = ie(_), A = z(P);
              De(A, {
                level: 3,
                children: (L, K) => {
                  pe();
                  var U = xe("输入参数");
                  O(L, U);
                },
                $$slots: { default: !0 }
              });
              var M = V(A, 2);
              {
                var R = (L) => {
                  Pe(L, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (K, U) => {
                      var ne = s_();
                      O(K, ne);
                    },
                    $$slots: { default: !0 }
                  });
                };
                le(M, (L) => {
                  h.parametersAddEnable !== !1 && L(R);
                });
              }
              I(P);
              var q = V(P, 2);
              Ct(q, {}), O(k, _);
            };
            le(T, (k) => {
              h.parametersEnable !== !1 && k(D);
            });
          }
          var H = V(T, 2);
          {
            var F = (k) => {
              var _ = Ee(), P = ie(_);
              pt(P, 17, () => v, Cr, (A, M) => {
                var R = Ee(), q = ie(R);
                {
                  var L = (U) => {
                    var ne = l_(), ee = ie(ne), Z = z(ee, !0);
                    I(ee);
                    var te = V(ee, 2), Y = z(te);
                    {
                      let W = /* @__PURE__ */ $(() => n()[u(M).name] || u(M).defaultValue);
                      je(Y, Re(
                        {
                          get placeholder() {
                            return u(M).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(W);
                          }
                        },
                        () => u(M).attrs,
                        {
                          onchange: (fe) => {
                            c(u(M).name, fe);
                          }
                        }
                      ));
                    }
                    I(te), _e(() => ze(Z, u(M).label)), O(U, ne);
                  }, K = (U) => {
                    var ne = Ee(), ee = ie(ne);
                    {
                      var Z = (Y) => {
                        var W = c_(), fe = ie(W), ke = z(fe, !0);
                        I(fe);
                        var ae = V(fe, 2), re = z(ae);
                        {
                          let J = /* @__PURE__ */ $(() => n()[u(M).name] || u(M).defaultValue);
                          Be(re, Re(
                            {
                              rows: 3,
                              get placeholder() {
                                return u(M).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return u(J);
                              }
                            },
                            () => u(M).attrs,
                            {
                              onchange: (oe) => {
                                c(u(M).name, oe);
                              }
                            }
                          ));
                        }
                        I(ae), _e(() => ze(ke, u(M).label)), O(Y, W);
                      }, te = (Y) => {
                        var W = Ee(), fe = ie(W);
                        {
                          var ke = (re) => {
                            var J = u_(), oe = ie(J), ge = z(oe, !0);
                            I(oe);
                            var de = V(oe, 2), $e = z(de), be = z($e), B = z(be);
                            I(be);
                            var Le = V(be, 2);
                            on(Le);
                            var He = (Me) => l({ [u(M).name]: parseFloat(Me.target.value) });
                            Qe(
                              Le,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...u(M).attrs,
                                value: n()[u(M).name] ?? u(M).defaultValue,
                                oninput: He
                              }),
                              void 0,
                              void 0,
                              "svelte-q0cqsa"
                            ), I($e), I(de), _e(() => {
                              ze(ge, u(M).label), ze(B, `${u(M).description ?? ""}: ${n()[u(M).name] ?? u(M).defaultValue ?? ""}`);
                            }), O(re, J);
                          }, ae = (re) => {
                            var J = Ee(), oe = ie(J);
                            {
                              var ge = ($e) => {
                                var be = d_(), B = ie(be), Le = z(B, !0);
                                I(B);
                                var He = V(B, 2), Me = z(He);
                                {
                                  let Oe = /* @__PURE__ */ $(() => u(M).options || []), Ge = /* @__PURE__ */ $(() => n()[u(M).name] ? [n()[u(M).name]] : [u(M).defaultValue]);
                                  st(Me, {
                                    get items() {
                                      return u(Oe);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(M).placeholder;
                                    },
                                    onSelect: (ut) => {
                                      const dt = ut.value;
                                      l({ [u(M).name]: dt });
                                    },
                                    get value() {
                                      return u(Ge);
                                    }
                                  });
                                }
                                I(He), _e(() => ze(Le, u(M).label)), O($e, be);
                              }, de = ($e) => {
                                var be = Ee(), B = ie(be);
                                {
                                  var Le = (Me) => {
                                    var Oe = f_(), Ge = ie(Oe), ut = z(Ge, !0);
                                    I(Ge);
                                    var dt = V(Ge, 2), et = z(dt);
                                    {
                                      let Ue = /* @__PURE__ */ $(() => u(M).chosen?.buttonText);
                                      md(et, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(M).placeholder;
                                        },
                                        get buttonText() {
                                          return u(Ue);
                                        },
                                        onChosen: (qe, he, Ie) => {
                                          u(M).chosen?.onChosen?.(l, qe, he, Ie);
                                        },
                                        get value() {
                                          return n()[u(M).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(M).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    I(dt), _e(() => ze(ut, u(M).label)), O(Me, Oe);
                                  }, He = (Me) => {
                                    var Oe = Ee(), Ge = ie(Oe);
                                    {
                                      var ut = (dt) => {
                                        De(dt, Re({ level: 3, mt: "10px" }, () => u(M).attrs, {
                                          children: (et, Ue) => {
                                            pe();
                                            var qe = xe();
                                            _e(() => ze(qe, u(M).label)), O(et, qe);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      le(
                                        Ge,
                                        (dt) => {
                                          u(M).type === "heading" && dt(ut);
                                        },
                                        !0
                                      );
                                    }
                                    O(Me, Oe);
                                  };
                                  le(
                                    B,
                                    (Me) => {
                                      u(M).type === "chosen" ? Me(Le) : Me(He, !1);
                                    },
                                    !0
                                  );
                                }
                                O($e, be);
                              };
                              le(
                                oe,
                                ($e) => {
                                  u(M).type === "select" ? $e(ge) : $e(de, !1);
                                },
                                !0
                              );
                            }
                            O(re, J);
                          };
                          le(
                            fe,
                            (re) => {
                              u(M).type === "slider" ? re(ke) : re(ae, !1);
                            },
                            !0
                          );
                        }
                        O(Y, W);
                      };
                      le(
                        ee,
                        (Y) => {
                          u(M).type === "textarea" ? Y(Z) : Y(te, !1);
                        },
                        !0
                      );
                    }
                    O(U, ne);
                  };
                  le(q, (U) => {
                    u(M).type === "input" ? U(L) : U(K, !1);
                  });
                }
                O(A, R);
              }), O(k, _);
            };
            le(H, (k) => {
              v && k(F);
            });
          }
          var X = V(H, 2);
          Dt(X, (k) => p = k, () => p);
          var G = V(X, 2);
          {
            var C = (k) => {
              var _ = h_(), P = ie(_), A = z(P);
              De(A, {
                level: 3,
                mt: "10px",
                children: (L, K) => {
                  pe();
                  var U = xe("输出参数");
                  O(L, U);
                },
                $$slots: { default: !0 }
              });
              var M = V(A, 2);
              {
                var R = (L) => {
                  Pe(L, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (K, U) => {
                      var ne = g_();
                      O(K, ne);
                    },
                    $$slots: { default: !0 }
                  });
                };
                le(M, (L) => {
                  h.outputDefsAddEnable !== !1 && L(R);
                });
              }
              I(P);
              var q = V(P, 2);
              $n(q, {}), O(k, _);
            };
            le(G, (k) => {
              h.outputDefsEnable !== !1 && k(C);
            });
          }
          _e(() => {
            lt(X, h.rootStyle || ""), St(X, 1, Sn(h.rootClass), "svelte-q0cqsa");
          }), O(b, N);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(x);
}
se(Jd, { data: {} }, [], [], !0);
const m_ = () => ({ updateEdgeData: (t, n, r) => {
  const o = Ke.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Ke.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), y_ = () => ({ deleteEdge: (t) => {
  Ke.removeEdge(t);
} });
var w_ = /* @__PURE__ */ Q('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), __ = /* @__PURE__ */ Q("<!> <!> <!> <!>", 1), x_ = /* @__PURE__ */ Q('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const b_ = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Qd(e, t) {
  ce(t, !0), Ae(e, b_);
  const n = y(t, "onInit", 7), r = ct();
  n()(r);
  let o = /* @__PURE__ */ Se(!1), i = /* @__PURE__ */ Se(null);
  const { updateEdgeData: s } = m_(), a = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, l = (P) => {
    P.preventDefault();
    const A = r.screenToFlowPosition({ x: P.clientX - 250, y: P.clientY - 100 }), M = P.dataTransfer?.getData("application/tinyflow");
    if (!M)
      return;
    const R = JSON.parse(M), q = { id: `node_${ir()}`, position: A, data: {}, ...R };
    Ke.addNode(q), Ke.selectNodeOnly(q.id);
  }, { getNode: c } = r_(), d = (P) => {
    const A = c(P.source), M = c(P.target);
    if (P.sourceHandle === "loop_handle" || A.parentId) {
      const R = r.getEdges();
      for (let q of R)
        if (q.target === P.target) {
          const L = c(q.source);
          if (P.sourceHandle === "loop_handle" && L.parentId !== A.id || A.parentId && L.parentId !== A.parentId)
            return !1;
        }
    }
    return !(!A.parentId && M.parentId && M.parentId !== A.id);
  }, { ensureParentInNodesBefore: g } = o_(), f = (P, A) => {
    if (!A.isValid)
      return;
    const M = A.toNode;
    if (M.parentId)
      return;
    const R = A.fromNode, q = A.fromHandle, L = { position: { ...M.position } };
    if (q.id === "loop_handle" ? L.parentId = R.id : R.parentId && (L.parentId = R.parentId), L.parentId) {
      const K = c(L.parentId);
      L.position = {
        x: M.position.x - K.position.x,
        y: M.position.y - K.position.y
      }, g(L.parentId, M.id), r.updateNode(M.id, L);
    }
    setTimeout(() => {
      Ke.getEdges().forEach((K) => {
        K.target === M.id && K.source == R.id && (j(o, !0), j(i, K, !0));
      });
    });
  }, { getEdgesByTarget: h } = i_(), v = (P) => {
    P.edges.forEach((M) => {
      M.id === u(i)?.id && (j(i, null), j(o, !1));
      const R = c(M.target);
      if (R && R.parentId) {
        const q = h(M.target), L = c(R.parentId);
        if (q.length === 0)
          r.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + L.position.x,
              y: R.position.y + L.position.y
            }
          });
        else {
          let K = !1;
          for (let U = 0; U < q.length; U++) {
            const ne = q[U], ee = c(ne.source);
            if (ee.parentId || ee.type === "loopNode") {
              K = !0;
              break;
            }
          }
          K || r.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + L.position.x,
              y: R.position.y + L.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: p } = y_(), x = (P, A) => {
  }, w = (P) => {
  }, S = {
    // ...nodeTypes
  }, b = zn().customNodes;
  if (b)
    for (let P of Object.keys(b))
      S[P] = Jd;
  const E = zn().onDataChange;
  Ze(() => {
    E?.({
      nodes: Ke.getNodes(),
      edges: Ke.getEdges(),
      viewport: Ke.getViewport()
    });
  });
  var N = {
    get onInit() {
      return n();
    },
    set onInit(P) {
      n(P), m();
    }
  }, T = x_(), D = z(T), H = Ke.getNodes, F = Ke.setNodes, X = Ke.getEdges, G = Ke.setEdges, C = Ke.getViewport, k = Ke.setViewport;
  {
    let P = /* @__PURE__ */ $(() => ({ ...Jw, ...S })), A = /* @__PURE__ */ $(() => ({
      markerEnd: { type: to.ArrowClosed, width: 20, height: 20 }
    }));
    nd(D, {
      get nodeTypes() {
        return u(P);
      },
      get nodes() {
        return H();
      },
      set nodes(M) {
        F(M);
      },
      get edges() {
        return X();
      },
      set edges(M) {
        G(M);
      },
      get viewport() {
        return C();
      },
      set viewport(M) {
        k(M);
      },
      class: "tinyflow-logo",
      ondrop: l,
      ondragover: a,
      isValidConnection: d,
      onconnectend: f,
      onconnectstart: x,
      onconnect: w,
      connectionRadius: 50,
      onedgeclick: (M) => {
        j(o, !0), j(i, M.edge, !0);
      },
      onbeforeconnect: (M) => ({ ...M, id: ir() }),
      ondelete: v,
      onclick: (M) => {
        const R = M.target;
        R.classList.contains("svelte-flow__edge-interaction") || R.classList.contains("panel-content") || R.closest(".panel-content") || (j(o, !1), j(i, null));
      },
      get defaultEdgeOptions() {
        return u(A);
      },
      children: (M, R) => {
        var q = __(), L = ie(q);
        fd(L, {});
        var K = V(L, 2);
        cd(K, {});
        var U = V(K, 2);
        hd(U, {});
        var ne = V(U, 2);
        {
          var ee = (Z) => {
            Co(Z, {
              children: (te, Y) => {
                var W = w_(), fe = V(z(W), 4), ke = z(fe);
                {
                  let oe = /* @__PURE__ */ $(() => u(i)?.data?.condition);
                  Be(ke, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return u(oe);
                    },
                    onchange: (ge) => {
                      u(i) && s(u(i).id, { condition: ge.target?.value });
                    }
                  });
                }
                I(fe);
                var ae = V(fe, 2), re = z(ae);
                Pe(re, {
                  onclick: () => {
                    p(u(i)?.id), j(o, !1);
                  },
                  children: (oe, ge) => {
                    pe();
                    var de = xe("删除");
                    O(oe, de);
                  },
                  $$slots: { default: !0 }
                });
                var J = V(re, 2);
                Pe(J, {
                  primary: !0,
                  onclick: () => {
                    j(o, !1);
                  },
                  children: (oe, ge) => {
                    pe();
                    var de = xe("保存");
                    O(oe, de);
                  },
                  $$slots: { default: !0 }
                }), I(ae), I(W), O(te, W);
              },
              $$slots: { default: !0 }
            });
          };
          le(ne, (Z) => {
            u(o) && Z(ee);
          });
        }
        O(M, q);
      },
      $$slots: { default: !0 }
    });
  }
  var _ = V(D, 2);
  return Ud(_, {}), I(T), O(e, T), ue(N);
}
se(Qd, { onInit: {} }, [], [], !0);
function C_(e, t) {
  ce(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ke.init(o?.nodes || [], o?.edges || []), xr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), m();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), m();
    }
  };
  return rd(e, {
    children: (s, a) => {
      Qd(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue(i);
}
customElements.define("tinyflow-component", se(C_, { options: {}, onInit: {} }, [], [], !1));
export {
  E_ as Tinyflow
};
//# sourceMappingURL=index.js.map
