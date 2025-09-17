import { defineComponent as Qd, ref as ef, onMounted as tf, onUnmounted as nf, createElementBlock as rf, openBlock as of, normalizeStyle as sf, normalizeClass as af } from "vue";
const lf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(lf);
const ys = 1, ws = 2, _l = 4, uf = 8, cf = 16, df = 1, ff = 2, Sl = 4, pf = 8, gf = 16, El = 1, hf = 2, Nl = "[", bs = "[!", xs = "]", jn = {}, Qe = Symbol(), vf = "http://www.w3.org/1999/xhtml", mf = "http://www.w3.org/2000/svg", yf = "@attach", wf = !1;
var so = Array.isArray, bf = Array.prototype.indexOf, $s = Array.from, Ko = Object.keys, yr = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, Pl = Object.getOwnPropertyDescriptors, Ll = Object.prototype, xf = Array.prototype, di = Object.getPrototypeOf, fa = Object.isExtensible;
function Or(e) {
  return typeof e == "function";
}
const at = () => {
};
function $f(e) {
  return e();
}
function Xo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Cf() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function gt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function ao(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Nt = 2, Cs = 4, fi = 8, Lr = 16, Cn = 32, In = 64, Dl = 128, Vt = 256, Yo = 512, dt = 1024, Ot = 2048, qn = 4096, Zt = 8192, ir = 16384, ks = 32768, Dr = 65536, pa = 1 << 17, kf = 1 << 18, Hr = 1 << 19, Hl = 1 << 20, Yi = 1 << 21, _s = 1 << 22, Wn = 1 << 23, nn = Symbol("$state"), Ss = Symbol("legacy props"), _f = Symbol(""), Es = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Sf = 1, Ns = 3, wr = 8;
function Ef() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Ps(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Nf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Lf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Df(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Hf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Mf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Tf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Vf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Of() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function lo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Af() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let be = !1;
function St(e) {
  be = e;
}
let Ee;
function ft(e) {
  if (e === null)
    throw lo(), jn;
  return Ee = e;
}
function xn() {
  return ft(
    /** @type {TemplateNode} */
    /* @__PURE__ */ fn(Ee)
  );
}
function A(e) {
  if (be) {
    if (/* @__PURE__ */ fn(Ee) !== null)
      throw lo(), jn;
    Ee = e;
  }
}
function he(e = 1) {
  if (be) {
    for (var t = e, n = Ee; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ fn(n);
    Ee = n;
  }
}
function ji() {
  for (var e = 0, t = Ee; ; ) {
    if (t.nodeType === wr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === xs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Nl || n === bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(t)
    );
    t.remove(), t = r;
  }
}
function Ml(e) {
  if (!e || e.nodeType !== wr)
    throw lo(), jn;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Tl(e) {
  return e === this.v;
}
function Vl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ol(e) {
  return !Vl(e, this.v);
}
let Mr = !1, If = !1;
function qf() {
  Mr = !0;
}
const Zf = [];
function zl(e, t = !1, n = !1) {
  return Vo(e, /* @__PURE__ */ new Map(), "", Zf, null, n);
}
function Vo(e, t, n, r, o = null, i = !1) {
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
    if (so(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = Vo(u, t, n, r, null, i));
      }
      return a;
    }
    if (di(e) === Ll) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Vo(
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
      return Vo(
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
function jo(e) {
  Ze = e;
}
function Vn(e) {
  return (
    /** @type {T} */
    Al().get(e)
  );
}
function br(e, t) {
  return Al().set(e, t), t;
}
function ue(e, t = !1, n) {
  Ze = {
    p: Ze,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Mr && !t ? { s: null, u: null, $: [] } : null
  };
}
function ce(e) {
  var t = (
    /** @type {ComponentContext} */
    Ze
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      nu(r);
  }
  return e !== void 0 && (t.x = e), Ze = t.p, e ?? /** @type {T} */
  {};
}
function uo() {
  return !Mr || Ze !== null && Ze.l === null;
}
function Al(e) {
  return Ze === null && Ps(), Ze.c ??= new Map(Rf(Ze) || void 0);
}
function Rf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
const Bf = /* @__PURE__ */ new WeakMap();
function Kf(e) {
  var t = ke;
  if (t === null)
    return Le.f |= Wn, e;
  if ((t.f & ks) === 0) {
    if ((t.f & Dl) === 0)
      throw !t.parent && e instanceof Error && Il(e), e;
    t.b.error(e);
  } else
    Ls(e, t);
}
function Ls(e, t) {
  for (; t !== null; ) {
    if ((t.f & Dl) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Il(e), e;
}
function Il(e) {
  const t = Bf.get(e);
  t && (yr(e, "message", {
    value: t.message
  }), yr(e, "stack", {
    value: t.stack
  }));
}
const Xf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Xr = [], Yr = [];
function ql() {
  var e = Xr;
  Xr = [], Xo(e);
}
function Zl() {
  var e = Yr;
  Yr = [], Xo(e);
}
function co(e) {
  Xr.length === 0 && queueMicrotask(ql), Xr.push(e);
}
function Yf(e) {
  Yr.length === 0 && Xf(Zl), Yr.push(e);
}
function jf() {
  Xr.length > 0 && ql(), Yr.length > 0 && Zl();
}
function Wf(e) {
  let t = 0, n = Qn(0), r;
  return () => {
    ip() && (c(n), po(() => (t === 0 && (r = it(() => e(() => Br(n)))), t += 1, () => {
      co(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Br(n));
      });
    })));
  };
}
function Ff() {
  for (var e = (
    /** @type {Effect} */
    ke.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && Ef(), e;
}
// @__NO_SIDE_EFFECTS__
function fo(e) {
  var t = Nt | Ot, n = Le !== null && (Le.f & Nt) !== 0 ? (
    /** @type {Derived} */
    Le
  ) : null;
  return ke === null || n !== null && (n.f & Vt) !== 0 ? t |= Vt : ke.f |= Hr, {
    ctx: Ze,
    deps: null,
    effects: null,
    equals: Tl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Qe
    ),
    wv: 0,
    parent: n ?? ke,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Gf(e, t) {
  let n = (
    /** @type {Effect | null} */
    ke
  );
  n === null && Nf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Qn(
    /** @type {V} */
    Qe
  ), s = null, a = !Le;
  return ap(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (g) {
      l = Promise.reject(g);
    }
    var u = () => l;
    o = s?.then(u, u) ?? Promise.resolve(l), s = o;
    var d = (
      /** @type {Batch} */
      et
    ), p = r.pending;
    a && (r.update_pending_count(1), p || d.increment());
    const f = (g, h = void 0) => {
      s = null, p || d.activate(), h ? h !== Es && (i.f |= Wn, jr(i, h)) : ((i.f & Wn) !== 0 && (i.f ^= Wn), jr(i, g)), a && (r.update_pending_count(-1), p || d.decrement()), Xl();
    };
    if (o.then(f, (g) => f(null, g || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
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
function L(e) {
  const t = /* @__PURE__ */ fo(e);
  return cu(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ds(e) {
  const t = /* @__PURE__ */ fo(e);
  return t.equals = Ol, t;
}
function Rl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      vt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Uf(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Nt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Hs(e) {
  var t, n = ke;
  un(Uf(e));
  try {
    Rl(e), t = gu(e);
  } finally {
    un(n);
  }
  return t;
}
function Bl(e) {
  var t = Hs(e);
  if (e.equals(t) || (e.v = t, e.wv = fu()), !ar) {
    var n = (Dn || (e.f & Vt) !== 0) && e.deps !== null ? qn : dt;
    xt(e, n);
  }
}
function Kl(e, t, n) {
  const r = uo() ? fo : Ds;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = et, i = (
    /** @type {Effect} */
    ke
  ), s = Jf(), a = Ff();
  Promise.all(t.map((l) => /* @__PURE__ */ Gf(l))).then((l) => {
    o?.activate(), s();
    try {
      n([...e.map(r), ...l]);
    } catch (u) {
      (i.f & ir) === 0 && Ls(u, i);
    }
    o?.deactivate(), Xl();
  }).catch((l) => {
    a.error(l);
  });
}
function Jf() {
  var e = ke, t = Le, n = Ze, r = et;
  return function() {
    un(e), ln(t), jo(n), r?.activate();
  };
}
function Xl() {
  un(null), ln(null), jo(null);
}
const Li = /* @__PURE__ */ new Set();
let et = null, ga = /* @__PURE__ */ new Set(), Wo = [];
function Yl() {
  const e = (
    /** @type {() => void} */
    Wo.shift()
  );
  Wo.length > 0 && queueMicrotask(Yl), e();
}
let Un = [], pi = null, Wi = !1, Oo = !1;
class Jn {
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
  #c = !1;
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
    Un = [];
    for (const o of t)
      this.#g(o);
    if (this.#i.length === 0 && this.#n === 0) {
      this.#p();
      var n = this.#s, r = this.#r;
      this.#s = [], this.#r = [], this.#l = [], et = null, ha(n), ha(r), et === null ? et = this : Li.delete(this), this.#o?.resolve();
    } else
      this.#u(this.#s), this.#u(this.#r), this.#u(this.#l);
    for (const o of this.#i)
      pr(o);
    for (const o of this.#a)
      pr(o);
    this.#i = [], this.#a = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #g(t) {
    t.f ^= dt;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (Cn | In)) !== 0, i = o && (r & dt) !== 0, s = i || (r & Zt) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (o)
          n.f ^= dt;
        else if ((r & Cs) !== 0)
          this.#r.push(n);
        else if ((r & dt) === 0)
          if ((r & _s) !== 0) {
            var a = n.b?.pending ? this.#a : this.#i;
            a.push(n);
          } else hi(n) && ((n.f & Lr) !== 0 && this.#l.push(n), pr(n));
        var l = n.first;
        if (l !== null) {
          n = l;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; )
        n = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(t) {
    for (const n of t)
      ((n.f & Ot) !== 0 ? this.#d : this.#f).push(n), xt(n, dt);
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
    et = this;
  }
  deactivate() {
    et = null;
    for (const t of ga)
      if (ga.delete(t), t(), et !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    Un.length > 0 ? jl() : this.#p(), et === this && (this.#n === 0 && Li.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #p() {
    if (!this.#c)
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
        xt(t, Ot), xr(t);
      for (const t of this.#f)
        xt(t, qn), xr(t);
      this.#s = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#o ??= Cf()).promise;
  }
  static ensure() {
    if (et === null) {
      const t = et = new Jn();
      Li.add(et), Oo || Jn.enqueue(() => {
        et === t && t.flush();
      });
    }
    return et;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Wo.length === 0 && queueMicrotask(Yl), Wo.unshift(t);
  }
}
function m(e) {
  var t = Oo;
  Oo = !0;
  try {
    for (var n; ; ) {
      if (jf(), Un.length === 0 && (et?.flush(), Un.length === 0))
        return pi = null, /** @type {T} */
        n;
      jl();
    }
  } finally {
    Oo = t;
  }
}
function jl() {
  var e = fr;
  Wi = !0;
  try {
    var t = 0;
    for (wa(!0); Un.length > 0; ) {
      var n = Jn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Qf();
      }
      n.process(Un), Tn.clear();
    }
  } finally {
    Wi = !1, wa(e), pi = null;
  }
}
function Qf() {
  try {
    Hf();
  } catch (e) {
    Ls(e, pi);
  }
}
let Kn = null;
function ha(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ir | Zt)) === 0 && hi(r) && (Kn = [], pr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? au(r) : r.fn = null), Kn?.length > 0)) {
        Tn.clear();
        for (const o of Kn)
          pr(o);
        Kn = [];
      }
    }
    Kn = null;
  }
}
function xr(e) {
  for (var t = pi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Wi && t === ke && (n & Lr) !== 0)
      return;
    if ((n & (In | Cn)) !== 0) {
      if ((n & dt) === 0) return;
      t.f ^= dt;
    }
  }
  Un.push(t);
}
const Tn = /* @__PURE__ */ new Map();
function Qn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Tl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  const n = Qn(e);
  return cu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Wl(e, t = !1, n = !0) {
  const r = Qn(e);
  return t || (r.equals = Ol), Mr && n && Ze !== null && Ze.l !== null && (Ze.l.s ??= []).push(r), r;
}
function F(e, t, n = !1) {
  Le !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!It || (Le.f & pa) !== 0) && uo() && (Le.f & (Nt | Lr | _s | pa)) !== 0 && !bn?.includes(e) && zf();
  let r = n ? Tt(t) : t;
  return jr(e, r);
}
function jr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    ar ? Tn.set(e, t) : Tn.set(e, n), e.v = t;
    var r = Jn.ensure();
    r.capture(e, n), (e.f & Nt) !== 0 && ((e.f & Ot) !== 0 && Hs(
      /** @type {Derived} */
      e
    ), xt(e, (e.f & Vt) === 0 ? dt : qn)), e.wv = fu(), Fl(e, Ot), uo() && ke !== null && (ke.f & dt) !== 0 && (ke.f & (Cn | In)) === 0 && (Ht === null ? up([e]) : Ht.push(e));
  }
  return t;
}
function va(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function Br(e) {
  F(e, e.v + 1);
}
function Fl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = uo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === ke)) {
        var l = (a & Ot) === 0;
        l && xt(s, t), (a & Nt) !== 0 ? Fl(
          /** @type {Derived} */
          s,
          qn
        ) : l && ((a & Lr) !== 0 && Kn !== null && Kn.push(
          /** @type {Effect} */
          s
        ), xr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Tt(e) {
  if (typeof e != "object" || e === null || nn in e)
    return e;
  const t = di(e);
  if (t !== Ll && t !== xf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = so(e), o = /* @__PURE__ */ Se(0), i = Fn, s = (a) => {
    if (Fn === i)
      return a();
    var l = Le, u = Fn;
    ln(null), xa(i);
    var d = a();
    return ln(l), xa(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Vf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Se(u.value);
          return n.set(l, p), p;
        }) : F(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Se(Qe));
            n.set(l, d), Br(o);
          }
        } else
          F(u, Qe), Br(o);
        return !0;
      },
      get(a, l, u) {
        if (l === nn)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || wn(a, l)?.writable) && (d = s(() => {
          var g = Tt(p ? a[l] : Qe), h = /* @__PURE__ */ Se(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === Qe ? void 0 : f;
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
          if (p !== void 0 && f !== Qe)
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
        if (l === nn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Qe || Reflect.has(a, l);
        if (u !== void 0 || ke !== null && (!d || wn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Tt(a[l]) : Qe, g = /* @__PURE__ */ Se(f);
            return g;
          }), n.set(l, u));
          var p = c(u);
          if (p === Qe)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = u; g < /** @type {Source<number>} */
          p.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? F(h, Qe) : g in a && (h = s(() => /* @__PURE__ */ Se(Qe)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || wn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Se(void 0)), F(p, Tt(u)), n.set(l, p));
        else {
          f = p.v !== Qe;
          var v = s(() => Tt(u));
          F(p, v);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= b.v && F(b, C + 1);
          }
          Br(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== Qe;
        });
        for (var [u, d] of n)
          d.v !== Qe && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Of();
      }
    }
  );
}
function ma(e) {
  try {
    if (e !== null && typeof e == "object" && nn in e)
      return e[nn];
  } catch {
  }
  return e;
}
function ep(e, t) {
  return Object.is(ma(e), ma(t));
}
var yt, Gl, Ul, Jl;
function Fi() {
  if (yt === void 0) {
    yt = window, Gl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ul = wn(t, "firstChild").get, Jl = wn(t, "nextSibling").get, fa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), fa(n) && (n.__t = void 0);
  }
}
function Rt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return Ul.call(e);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return Jl.call(e);
}
function I(e, t) {
  if (!be)
    return /* @__PURE__ */ Ge(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(Ee)
  );
  if (n === null)
    n = Ee.appendChild(Rt());
  else if (t && n.nodeType !== Ns) {
    var r = Rt();
    return n?.before(r), ft(r), r;
  }
  return ft(n), n;
}
function oe(e, t) {
  if (!be) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ge(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ fn(n) : n;
  }
  return Ee;
}
function O(e, t = 1, n = !1) {
  let r = be ? Ee : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ fn(r);
  if (!be)
    return r;
  if (n && r?.nodeType !== Ns) {
    var i = Rt();
    return r === null ? o?.after(i) : r.before(i), ft(i), i;
  }
  return ft(r), /** @type {TemplateNode} */
  r;
}
function Ms(e) {
  e.textContent = "";
}
function Ql() {
  return !1;
}
function tp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, co(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function np(e) {
  be && /* @__PURE__ */ Ge(e) !== null && Ms(e);
}
let ya = !1;
function rp() {
  ya || (ya = !0, document.addEventListener(
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
function Ts(e) {
  var t = Le, n = ke;
  ln(null), un(null);
  try {
    return e();
  } finally {
    ln(t), un(n);
  }
}
function eu(e) {
  ke === null && Le === null && Df(), Le !== null && (Le.f & Vt) !== 0 && ke === null && Lf(), ar && Pf();
}
function op(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Yt(e, t, n, r = !0) {
  var o = ke;
  o !== null && (o.f & Zt) !== 0 && (e |= Zt);
  var i = {
    ctx: Ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ot,
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
      pr(i), i.f |= ks;
    } catch (l) {
      throw vt(i), l;
    }
  else t !== null && xr(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Hr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && op(s, o), Le !== null && (Le.f & Nt) !== 0 && (e & In) === 0)) {
      var a = (
        /** @type {Derived} */
        Le
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function ip() {
  return Le !== null && !It;
}
function tu(e) {
  const t = Yt(fi, null, !1);
  return xt(t, dt), t.teardown = e, t;
}
function Xe(e) {
  eu();
  var t = (
    /** @type {Effect} */
    ke.f
  ), n = !Le && (t & Cn) !== 0 && (t & ks) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ze
    );
    (r.e ??= []).push(e);
  } else
    return nu(e);
}
function nu(e) {
  return Yt(Cs | Hl, e, !1);
}
function ru(e) {
  return eu(), Yt(fi | Hl, e, !0);
}
function Vs(e) {
  Jn.ensure();
  const t = Yt(In | Hr, e, !0);
  return () => {
    vt(t);
  };
}
function sp(e) {
  Jn.ensure();
  const t = Yt(In | Hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? go(t, () => {
      vt(t), r(void 0);
    }) : (vt(t), r(void 0));
  });
}
function Tr(e) {
  return Yt(Cs, e, !1);
}
function ap(e) {
  return Yt(_s | Hr, e, !0);
}
function po(e, t = 0) {
  return Yt(fi | t, e, !0);
}
function xe(e, t = [], n = []) {
  Kl(t, n, (r) => {
    Yt(fi, () => e(...r.map(c)), !0);
  });
}
function sr(e, t = 0) {
  var n = Yt(Lr | t, e, !0);
  return n;
}
function Bt(e, t = !0) {
  return Yt(Cn | Hr, e, !0, t);
}
function ou(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ar, r = Le;
    ba(!0), ln(null);
    try {
      t.call(null);
    } finally {
      ba(n), ln(r);
    }
  }
}
function iu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Ts(() => {
      o.abort(Es);
    });
    var r = n.next;
    (n.f & In) !== 0 ? n.parent = null : vt(n, t), n = r;
  }
}
function lp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Cn) === 0 && vt(t), t = n;
  }
}
function vt(e, t = !0) {
  var n = !1;
  (t || (e.f & kf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (su(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), iu(e, t && !n), Fo(e, 0), xt(e, ir);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  ou(e);
  var o = e.parent;
  o !== null && o.first !== null && au(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function su(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fn(e)
    );
    e.remove(), e = n;
  }
}
function au(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function go(e, t) {
  var n = [];
  Os(e, n, !0), lu(n, () => {
    vt(e), t && t();
  });
}
function lu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Os(e, t, n) {
  if ((e.f & Zt) === 0) {
    if (e.f ^= Zt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Dr) !== 0 || (r.f & Cn) !== 0;
      Os(r, t, i ? n : !1), r = o;
    }
  }
}
function gi(e) {
  uu(e, !0);
}
function uu(e, t) {
  if ((e.f & Zt) !== 0) {
    e.f ^= Zt, (e.f & dt) === 0 && (xt(e, Ot), xr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Dr) !== 0 || (n.f & Cn) !== 0;
      uu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let fr = !1;
function wa(e) {
  fr = e;
}
let ar = !1;
function ba(e) {
  ar = e;
}
let Le = null, It = !1;
function ln(e) {
  Le = e;
}
let ke = null;
function un(e) {
  ke = e;
}
let bn = null;
function cu(e) {
  Le !== null && (bn === null ? bn = [e] : bn.push(e));
}
let ht = null, _t = 0, Ht = null;
function up(e) {
  Ht = e;
}
let du = 1, Wr = 0, Fn = Wr;
function xa(e) {
  Fn = e;
}
let Dn = !1;
function fu() {
  return ++du;
}
function hi(e) {
  var t = e.f;
  if ((t & Ot) !== 0)
    return !0;
  if ((t & qn) !== 0) {
    var n = e.deps, r = (t & Vt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Yo) !== 0, a = r && ke !== null && !Dn, l = n.length;
      if ((s || a) && (ke === null || (ke.f & ir) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= Yo), a && d !== null && (d.f & Vt) === 0 && (u.f ^= Vt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], hi(
          /** @type {Derived} */
          i
        ) && Bl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || ke !== null && !Dn) && xt(e, dt);
  }
  return !1;
}
function pu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !bn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Nt) !== 0 ? pu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? xt(i, Ot) : (i.f & dt) !== 0 && xt(i, qn), xr(
        /** @type {Effect} */
        i
      ));
    }
}
function gu(e) {
  var t = ht, n = _t, r = Ht, o = Le, i = Dn, s = bn, a = Ze, l = It, u = Fn, d = e.f;
  ht = /** @type {null | Value[]} */
  null, _t = 0, Ht = null, Dn = (d & Vt) !== 0 && (It || !fr || Le === null), Le = (d & (Cn | In)) === 0 ? e : null, bn = null, jo(e.ctx), It = !1, Fn = ++Wr, e.ac !== null && (Ts(() => {
    e.ac.abort(Es);
  }), e.ac = null);
  try {
    e.f |= Yi;
    var p = (
      /** @type {Function} */
      e.fn
    ), f = p(), g = e.deps;
    if (ht !== null) {
      var h;
      if (Fo(e, _t), g !== null && _t > 0)
        for (g.length = _t + ht.length, h = 0; h < ht.length; h++)
          g[_t + h] = ht[h];
      else
        e.deps = g = ht;
      if (!Dn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Nt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = _t; h < g.length; h++)
          (g[h].reactions ??= []).push(e);
    } else g !== null && _t < g.length && (Fo(e, _t), g.length = _t);
    if (uo() && Ht !== null && !It && g !== null && (e.f & (Nt | qn | Ot)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Ht.length; h++)
        pu(
          Ht[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Wr++, Ht !== null && (r === null ? r = Ht : r.push(.../** @type {Source[]} */
    Ht))), (e.f & Wn) !== 0 && (e.f ^= Wn), f;
  } catch (v) {
    return Kf(v);
  } finally {
    e.f ^= Yi, ht = t, _t = n, Ht = r, Le = o, Dn = i, bn = s, jo(a), It = l, Fn = u;
  }
}
function cp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = bf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Nt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ht === null || !ht.includes(t)) && (xt(t, qn), (t.f & (Vt | Yo)) === 0 && (t.f ^= Yo), Rl(
    /** @type {Derived} **/
    t
  ), Fo(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Fo(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      cp(e, n[r]);
}
function pr(e) {
  var t = e.f;
  if ((t & ir) === 0) {
    xt(e, dt);
    var n = ke, r = fr;
    ke = e, fr = !0;
    try {
      (t & Lr) !== 0 ? lp(e) : iu(e), ou(e);
      var o = gu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = du;
      var i;
      wf && If && (e.f & Ot) !== 0 && e.deps;
    } finally {
      fr = r, ke = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & Nt) !== 0;
  if (Le !== null && !It) {
    var r = ke !== null && (ke.f & ir) !== 0;
    if (!r && !bn?.includes(e)) {
      var o = Le.deps;
      if ((Le.f & Yi) !== 0)
        e.rv < Wr && (e.rv = Wr, ht === null && o !== null && o[_t] === e ? _t++ : ht === null ? ht = [e] : (!Dn || !ht.includes(e)) && ht.push(e));
      else {
        (Le.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Le] : i.includes(Le) || i.push(Le);
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
  if (ar) {
    if (Tn.has(e))
      return Tn.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & dt) === 0 && s.reactions !== null || hu(s)) && (l = Hs(s)), Tn.set(s, l), l;
    }
  } else n && (s = /** @type {Derived} */
  e, hi(s) && Bl(s));
  if ((e.f & Wn) !== 0)
    throw e.v;
  return e.v;
}
function hu(e) {
  if (e.v === Qe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tn.has(t) || (t.f & Nt) !== 0 && hu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function it(e) {
  var t = It;
  try {
    return It = !0, e();
  } finally {
    It = t;
  }
}
const dp = -7169;
function xt(e, t) {
  e.f = e.f & dp | t;
}
function fp(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function zs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (nn in e)
      Gi(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && nn in n && Gi(n);
      }
  }
}
function Gi(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Gi(e[r], t);
      } catch {
      }
    const n = di(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Pl(n);
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
const vu = /* @__PURE__ */ new Set(), Ui = /* @__PURE__ */ new Set();
function As(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Ir.call(t, i), !i.cancelBubble)
      return Ts(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? co(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ji(e, t, n, r = {}) {
  var o = As(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function $a(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = As(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && tu(() => {
    t.removeEventListener(e, s, i);
  });
}
function kn(e) {
  for (var t = 0; t < e.length; t++)
    vu.add(e[t]);
  for (var n of Ui)
    n(e);
}
let Ca = null;
function Ir(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Ca = e;
  var s = 0, a = Ca === e && e.__root;
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
    yr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Le, p = ke;
    ln(null), un(null);
    try {
      for (var f, g = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var v = i["__" + r];
          if (v != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (so(v)) {
              var [w, ...b] = v;
              w.apply(i, [e, ...b]);
            } else
              v.call(i, e);
        } catch (C) {
          f ? g.push(C) : f = C;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (f) {
        for (let C of g)
          queueMicrotask(() => {
            throw C;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ln(d), un(p);
    }
  }
}
function Is(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function $t(e, t) {
  var n = (
    /** @type {Effect} */
    ke
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & El) !== 0, r = (t & hf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (be)
      return $t(Ee, null), Ee;
    o === void 0 && (o = Is(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ge(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Gl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      $t(a, l);
    } else
      $t(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function pp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & El) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (be)
      return $t(Ee, null), Ee;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Is(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ge(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Ge(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ge(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Ge(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      $t(d, p);
    } else
      $t(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  return /* @__PURE__ */ pp(e, t, "svg");
}
function Ce(e = "") {
  if (!be) {
    var t = Rt(e + "");
    return $t(t, t), t;
  }
  var n = Ee;
  return n.nodeType !== Ns && (n.before(n = Rt()), ft(n)), $t(n, n), n;
}
function _e() {
  if (be)
    return $t(Ee, null), Ee;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Rt();
  return e.append(t, n), $t(t, n), e;
}
function M(e, t) {
  if (be) {
    ke.nodes_end = Ee, xn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function gp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const hp = [
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
function vp(e) {
  return hp.includes(e);
}
const mp = {
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
function yp(e) {
  return e = e.toLowerCase(), mp[e] ?? e;
}
const wp = ["touchstart", "touchmove"];
function bp(e) {
  return wp.includes(e);
}
const xp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function $p(e) {
  return xp.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ae(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function mu(e, t) {
  return yu(e, t);
}
function Cp(e, t) {
  Fi(), t.intro = t.intro ?? !1;
  const n = t.target, r = be, o = Ee;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(n)
    ); i && (i.nodeType !== wr || /** @type {Comment} */
    i.data !== Nl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ fn(i);
    if (!i)
      throw jn;
    St(!0), ft(
      /** @type {Comment} */
      i
    ), xn();
    const s = yu(e, { ...t, anchor: i });
    if (Ee === null || Ee.nodeType !== wr || /** @type {Comment} */
    Ee.data !== xs)
      throw lo(), jn;
    return St(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== jn && console.warn("Failed to hydrate: ", s), t.recover === !1 && Mf(), Fi(), Ms(n), St(!1), mu(e, t);
  } finally {
    St(r), ft(o);
  }
}
const ur = /* @__PURE__ */ new Map();
function yu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Fi();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = bp(g);
        t.addEventListener(g, Ir, { passive: h });
        var v = ur.get(g);
        v === void 0 ? (document.addEventListener(g, Ir, { passive: h }), ur.set(g, 1)) : ur.set(g, v + 1);
      }
    }
  };
  l($s(vu)), Ui.add(l);
  var u = void 0, d = sp(() => {
    var p = n ?? t.appendChild(Rt());
    return Bt(() => {
      if (i) {
        ue({});
        var f = (
          /** @type {ComponentContext} */
          Ze
        );
        f.c = i;
      }
      o && (r.$$events = o), be && $t(
        /** @type {TemplateNode} */
        p,
        null
      ), u = e(p, r) || {}, be && (ke.nodes_end = Ee), i && ce();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Ir);
        var g = (
          /** @type {number} */
          ur.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Ir), ur.delete(f)) : ur.set(f, g);
      }
      Ui.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return Qi.set(u, d), u;
}
let Qi = /* @__PURE__ */ new WeakMap();
function kp(e, t) {
  const n = Qi.get(e);
  return n ? (Qi.delete(e), n(t)) : Promise.resolve();
}
function Ye(e, t, ...n) {
  var r = e, o = at, i;
  sr(() => {
    o !== (o = t()) && (i && (vt(i), i = null), i = Bt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Dr), be && (r = Ee);
}
function Zn(e) {
  Ze === null && Ps(), Mr && Ze.l !== null ? _p(Ze).m.push(e) : Xe(() => {
    const t = it(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function vi(e) {
  Ze === null && Ps(), Zn(() => () => it(e));
}
function _p(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, n = !1) {
  be && xn();
  var r = e, o = null, i = null, s = Qe, a = n ? Dr : 0, l = !1;
  const u = (f, g = !0) => {
    l = !0, p(g, f);
  };
  function d() {
    var f = s ? o : i, g = s ? i : o;
    f && gi(f), g && go(g, () => {
      s ? i = null : o = null;
    });
  }
  const p = (f, g) => {
    if (s === (s = f)) return;
    let h = !1;
    if (be) {
      const b = Ml(r) === bs;
      !!s === b && (r = ji(), ft(r), St(!1), h = !0);
    }
    var v = Ql(), w = r;
    s ? o ??= g && Bt(() => g(w)) : i ??= g && Bt(() => g(w)), v || d(), h && St(!0);
  };
  sr(() => {
    l = !1, t(u), l || p(null, null);
  }, a), be && (r = Ee);
}
function Sp(e, t) {
  be && ft(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(e)
  ), po(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function $r(e, t) {
  return t;
}
function Ep(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    Os(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ms(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Jt(e, t[0].prev, t[i - 1].next);
  }
  lu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), Jt(e, d.prev, d.next)), vt(d.e, !a);
    }
  });
}
function pt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & _l) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = be ? ft(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ge(u)
    ) : u.appendChild(Rt());
  }
  be && xn();
  var d = null, p = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ Ds(() => {
    var b = n();
    return so(b) ? b : b == null ? [] : $s(b);
  }), h, v;
  function w() {
    Np(
      v,
      h,
      a,
      f,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (h.length === 0 ? d ? gi(d) : d = Bt(() => i(s)) : d !== null && go(d, () => {
      d = null;
    }));
  }
  sr(() => {
    v ??= /** @type {Effect} */
    ke, h = /** @type {V[]} */
    c(g);
    var b = h.length;
    if (p && b === 0)
      return;
    p = b === 0;
    let C = !1;
    if (be) {
      var x = Ml(s) === bs;
      x !== (b === 0) && (s = ji(), ft(s), St(!1), C = !0);
    }
    if (be) {
      for (var S = null, E, D = 0; D < b; D++) {
        if (Ee.nodeType === wr && /** @type {Comment} */
        Ee.data === xs) {
          s = /** @type {Comment} */
          Ee, C = !0, St(!1);
          break;
        }
        var H = h[D], q = r(H, D);
        E = wu(
          Ee,
          a,
          S,
          null,
          H,
          q,
          D,
          o,
          t,
          n
        ), a.items.set(q, E), S = E;
      }
      b > 0 && ft(ji());
    }
    be ? b === 0 && i && (d = Bt(() => i(s))) : w(), C && St(!0), c(g);
  }), be && (s = Ee);
}
function Np(e, t, n, r, o, i, s, a, l) {
  var u = (s & uf) !== 0, d = (s & (ys | ws)) !== 0, p = t.length, f = n.items, g = n.first, h = g, v, w = null, b, C = [], x = [], S, E, D, H;
  if (u)
    for (H = 0; H < p; H += 1)
      S = t[H], E = a(S, H), D = f.get(E), D !== void 0 && (D.a?.measure(), (b ??= /* @__PURE__ */ new Set()).add(D));
  for (H = 0; H < p; H += 1) {
    if (S = t[H], E = a(S, H), D = f.get(E), D === void 0) {
      var q = r.get(E);
      if (q !== void 0) {
        r.delete(E), f.set(E, q);
        var B = w ? w.next : h;
        Jt(n, w, q), Jt(n, q, B), Di(q, B, o), w = q;
      } else {
        var U = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : o;
        w = wu(
          U,
          n,
          w,
          w === null ? n.first : w.next,
          S,
          E,
          H,
          i,
          s,
          l
        );
      }
      f.set(E, w), C = [], x = [], h = w.next;
      continue;
    }
    if (d && Pp(D, S, H, s), (D.e.f & Zt) !== 0 && (gi(D.e), u && (D.a?.unfix(), (b ??= /* @__PURE__ */ new Set()).delete(D))), D !== h) {
      if (v !== void 0 && v.has(D)) {
        if (C.length < x.length) {
          var z = x[0], k;
          w = z.prev;
          var _ = C[0], $ = C[C.length - 1];
          for (k = 0; k < C.length; k += 1)
            Di(C[k], z, o);
          for (k = 0; k < x.length; k += 1)
            v.delete(x[k]);
          Jt(n, _.prev, $.next), Jt(n, w, _), Jt(n, $, z), h = z, w = $, H -= 1, C = [], x = [];
        } else
          v.delete(D), Di(D, h, o), Jt(n, D.prev, D.next), Jt(n, D, w === null ? n.first : w.next), Jt(n, w, D), w = D;
        continue;
      }
      for (C = [], x = []; h !== null && h.k !== E; )
        (h.e.f & Zt) === 0 && (v ??= /* @__PURE__ */ new Set()).add(h), x.push(h), h = h.next;
      if (h === null)
        continue;
      D = h;
    }
    C.push(D), w = D, h = D.next;
  }
  if (h !== null || v !== void 0) {
    for (var P = v === void 0 ? [] : $s(v); h !== null; )
      (h.e.f & Zt) === 0 && P.push(h), h = h.next;
    var N = P.length;
    if (N > 0) {
      var V = (s & _l) !== 0 && p === 0 ? o : null;
      if (u) {
        for (H = 0; H < N; H += 1)
          P[H].a?.measure();
        for (H = 0; H < N; H += 1)
          P[H].a?.fix();
      }
      Ep(n, P, V);
    }
  }
  u && co(() => {
    if (b !== void 0)
      for (D of b)
        D.a?.apply();
  }), e.first = n.first && n.first.e, e.last = w && w.e;
  for (var Z of r.values())
    vt(Z.e);
  r.clear();
}
function Pp(e, t, n, r) {
  (r & ys) !== 0 && jr(e.v, t), (r & ws) !== 0 ? jr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function wu(e, t, n, r, o, i, s, a, l, u, d) {
  var p = (l & ys) !== 0, f = (l & cf) === 0, g = p ? f ? /* @__PURE__ */ Wl(o, !1, !1) : Qn(o) : o, h = (l & ws) === 0 ? s : Qn(s), v = {
    i: h,
    v: g,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var w = document.createDocumentFragment();
      w.append(e = Rt());
    }
    return v.e = Bt(() => a(
      /** @type {Node} */
      e,
      g,
      h,
      u
    ), be), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? d || (t.first = v) : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function Di(e, t, n) {
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
      /* @__PURE__ */ fn(i)
    );
    o.before(i), i = s;
  }
}
function Jt(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function qs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  xe(() => {
    var a = (
      /** @type {Effect} */
      ke
    );
    if (s === (s = t() ?? "")) {
      be && xn();
      return;
    }
    if (a.nodes_start !== null && (su(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (be) {
        Ee.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== wr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ fn(l);
        if (l === null)
          throw lo(), jn;
        $t(Ee, u), i = ft(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Is(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ Ge(p)), $t(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Ge(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Ge(p)
          );
      else
        i.before(p);
    }
  });
}
function Zs(e, t, n) {
  be && xn();
  var r = e, o, i, s = null, a = null;
  function l() {
    i && (go(i), i = null), s && (s.lastChild.remove(), r.before(s), s = null), i = a, a = null;
  }
  sr(() => {
    if (o !== (o = t())) {
      var u = Ql();
      if (o) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = Rt()), i && et.skipped_effects.add(i)), a = Bt(() => n(d, o));
      }
      u ? et.add_callback(l) : l();
    }
  }, Dr), be && (r = Ee);
}
function Lp(e, t, n, r, o, i) {
  let s = be;
  be && xn();
  var a, l, u = null;
  be && Ee.nodeType === Sf && (u = /** @type {Element} */
  Ee, xn());
  var d = (
    /** @type {TemplateNode} */
    be ? Ee : e
  ), p;
  sr(() => {
    const f = t() || null;
    var g = f === "svg" ? mf : null;
    f !== a && (p && (f === null ? go(p, () => {
      p = null, l = null;
    }) : f === l ? gi(p) : vt(p)), f && f !== l && (p = Bt(() => {
      if (u = be ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), $t(u, u), r) {
        be && $p(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          be ? /* @__PURE__ */ Ge(u) : u.appendChild(Rt())
        );
        be && (h === null ? St(!1) : ft(h)), r(u, h);
      }
      ke.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, Dr), s && (St(!0), ft(d));
}
function Me(e, t) {
  Tr(() => {
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
function ct(e, t, n) {
  Tr(() => {
    var r = it(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      po(() => {
        var s = n();
        zs(s), o && Vl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Dp(e, t) {
  var n = void 0, r;
  sr(() => {
    n !== (n = t()) && (r && (vt(r), r = null), n && (r = Bt(() => {
      Tr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function bu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = bu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Hp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = bu(e)) && (r && (r += " "), r += t);
  return r;
}
function _n(e) {
  return typeof e == "object" ? Hp(e) : e ?? "";
}
const ka = [...` 	
\r\f \v\uFEFF`];
function Mp(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || ka.includes(r[s - 1])) && (a === r.length || ka.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function _a(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Hi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Tp(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Hi)), o && l.push(...Object.keys(o).map(Hi));
      var u = 0, d = -1;
      const v = e.length;
      for (var p = 0; p < v; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === v - 1) {
            if (d !== -1) {
              var g = Hi(e.substring(u, d).trim());
              if (!l.includes(g)) {
                f !== ";" && p++;
                var h = e.substring(u, p).trim();
                n += " " + h + ";";
              }
            }
            u = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += _a(r)), o && (n += _a(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Ct(e, t, n, r, o, i) {
  var s = e.__className;
  if (be || s !== n || s === void 0) {
    var a = Mp(n, r, i);
    (!be || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Mi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function lt(e, t, n, r) {
  var o = e.__style;
  if (be || o !== t) {
    var i = Tp(t, r);
    (!be || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Mi(e, n?.[0], r[0]), Mi(e, n?.[1], r[1], "important")) : Mi(e, n, r));
  return r;
}
function es(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!so(t))
      return Af();
    for (var r of e.options)
      r.selected = t.includes(Sa(r));
    return;
  }
  for (r of e.options) {
    var o = Sa(r);
    if (ep(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Vp(e) {
  var t = new MutationObserver(() => {
    es(e, e.__value);
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
  }), tu(() => {
    t.disconnect();
  });
}
function Sa(e) {
  return "__value" in e ? e.__value : e.value;
}
const Ln = Symbol("class"), en = Symbol("style"), xu = Symbol("is custom element"), $u = Symbol("is html");
function rn(e) {
  if (be) {
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
    e.__on_r = n, Yf(n), rp();
  }
}
function zo(e, t) {
  var n = mi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ts(e, t) {
  var n = mi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Op(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ye(e, t, n, r) {
  var o = mi(e);
  be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[_f] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Cu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function zp(e, t, n, r, o = !1) {
  var i = mi(e), s = i[xu], a = !i[$u];
  let l = be && s;
  l && St(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = _n(n.class) : (r || n[Ln]) && (n.class = null), n[en] && (n.style ??= null);
  var f = Cu(e);
  for (const x in n) {
    let S = n[x];
    if (d && x === "value" && S == null) {
      e.value = e.__value = "", u[x] = S;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, g, S, r, t?.[Ln], n[Ln]), u[x] = S, u[Ln] = n[Ln];
      continue;
    }
    if (x === "style") {
      lt(e, S, t?.[en], n[en]), u[x] = S, u[en] = n[en];
      continue;
    }
    var h = u[x];
    if (!(S === h && !(S === void 0 && e.hasAttribute(x)))) {
      u[x] = S;
      var v = x[0] + x[1];
      if (v !== "$$")
        if (v === "on") {
          const E = {}, D = "$$" + x;
          let H = x.slice(2);
          var w = vp(H);
          if (gp(H) && (H = H.slice(0, -7), E.capture = !0), !w && h) {
            if (S != null) continue;
            e.removeEventListener(H, u[D], E), u[D] = null;
          }
          if (S != null)
            if (w)
              e[`__${H}`] = S, kn([H]);
            else {
              let q = function(B) {
                u[x].call(this, B);
              };
              u[D] = As(H, e, q, E);
            }
          else w && (e[`__${H}`] = void 0);
        } else if (x === "style")
          ye(e, x, S);
        else if (x === "autofocus")
          tp(
            /** @type {HTMLElement} */
            e,
            !!S
          );
        else if (!s && (x === "__value" || x === "value" && S != null))
          e.value = e.__value = S;
        else if (x === "selected" && d)
          Op(
            /** @type {HTMLOptionElement} */
            e,
            S
          );
        else {
          var b = x;
          a || (b = yp(b));
          var C = b === "defaultValue" || b === "defaultChecked";
          if (S == null && !s && !C)
            if (i[x] = null, b === "value" || b === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const D = t === void 0;
              if (b === "value") {
                let H = E.defaultValue;
                E.removeAttribute(b), E.defaultValue = H, E.value = E.__value = D ? H : null;
              } else {
                let H = E.defaultChecked;
                E.removeAttribute(b), E.defaultChecked = H, E.checked = D ? H : !1;
              }
            } else
              e.removeAttribute(x);
          else C || f.includes(b) && (s || typeof S != "string") ? (e[b] = S, b in i && (i[b] = Qe)) : typeof S != "function" && ye(e, b, S);
        }
    }
  }
  return l && St(!0), u;
}
function Ue(e, t, n = [], r = [], o, i = !1) {
  Kl(n, r, (s) => {
    var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
    if (sr(() => {
      var f = t(...s.map(c)), g = zp(e, a, f, o, i);
      d && u && "value" in f && es(
        /** @type {HTMLSelectElement} */
        e,
        f.value
      );
      for (let v of Object.getOwnPropertySymbols(l))
        f[v] || vt(l[v]);
      for (let v of Object.getOwnPropertySymbols(f)) {
        var h = f[v];
        v.description === yf && (!a || h !== a[v]) && (l[v] && vt(l[v]), l[v] = Bt(() => Dp(e, () => h))), g[v] = h;
      }
      a = g;
    }), u) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      Tr(() => {
        es(
          p,
          /** @type {Record<string | symbol, any>} */
          a.value,
          !0
        ), Vp(p);
      });
    }
    d = !0;
  });
}
function mi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [xu]: e.nodeName.includes("-"),
      [$u]: e.namespaceURI === vf
    }
  );
}
var Ea = /* @__PURE__ */ new Map();
function Cu(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Ea.get(t);
  if (n) return n;
  Ea.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Pl(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = di(o);
  }
  return n;
}
class Rs {
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
          Rs.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Ap = /* @__PURE__ */ new Rs({
  box: "border-box"
});
function Na(e, t, n) {
  var r = Ap.observe(e, () => n(e[t]));
  Tr(() => (it(() => n(e[t])), r));
}
function Pa(e, t) {
  return e === t || e?.[nn] === t;
}
function Pt(e = {}, t, n, r) {
  return Tr(() => {
    var o, i;
    return po(() => {
      o = i, i = [], it(() => {
        e !== n(...i) && (t(e, ...i), o && Pa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      co(() => {
        i && Pa(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ku(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => zs(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ fo(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && ru(() => {
    La(t, r), Xo(n.b);
  }), Xe(() => {
    const o = it(() => n.m.map($f));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Xe(() => {
    La(t, r), Xo(n.a);
  });
}
function La(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let No = !1;
function Ip(e) {
  var t = No;
  try {
    return No = !1, [e(), No];
  } finally {
    No = t;
  }
}
const qp = {
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
    qp
  );
}
const Zp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = ke;
      try {
        un(e.parent_effect), e.special[t] = y(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Sl
        );
      } finally {
        un(r);
      }
    }
    return e.special[t](n), va(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), va(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Da(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Qn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        ke
      )
    },
    Zp
  );
}
const Rp = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Or(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Or(o) && (o = o());
      const i = wn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Or(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = wn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === nn || t === Ss) return !1;
    for (let n of e.props)
      if (Or(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Or(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ie(...e) {
  return new Proxy({ props: e }, Rp);
}
function y(e, t, n, r) {
  var o = !Mr || (n & ff) !== 0, i = (n & pf) !== 0, s = (n & gf) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? it(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = nn in e || Ss in e;
    d = wn(e, t)?.set ?? (p && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Ip(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && Tf(), d(f)));
  var h;
  if (o ? h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? u() : (l = !0, x);
  } : h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & Sl) === 0)
    return h;
  if (d) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      function(x, S) {
        return arguments.length > 0 ? ((!o || !S || v || g) && d(S ? h() : x), x) : h();
      }
    );
  }
  var w = !1, b = ((n & df) !== 0 ? fo : Ds)(() => (w = !1, h()));
  i && c(b);
  var C = (
    /** @type {Effect} */
    ke
  );
  return (
    /** @type {() => V} */
    function(x, S) {
      if (arguments.length > 0) {
        const E = S ? c(b) : o && i ? Tt(x) : x;
        return F(b, E), w = !0, a !== void 0 && (a = E), x;
      }
      return ar && w || (C.f & ir) !== 0 ? b.v : c(b);
    }
  );
}
function Bp(e) {
  return new Kp(e);
}
class Kp {
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
      var a = /* @__PURE__ */ Wl(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Ss ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return F(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Cp : mu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || yr(this, i, {
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
      kp(this.#e);
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
let _u;
typeof HTMLElement == "function" && (_u = class extends HTMLElement {
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
          r !== "default" && (i.name = r), M(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Xp(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Ao(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Bp({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Vs(() => {
        po(() => {
          this.$$r = !0;
          for (const r of Ko(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Ao(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ao(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
function Ao(e, t, n, r) {
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
function Xp(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends _u {
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
    yr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Ao(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = wn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    yr(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Yp = { value: () => {
} };
function yi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Io(n);
}
function Io(e) {
  this._ = e;
}
function jp(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Io.prototype = yi.prototype = {
  constructor: Io,
  on: function(e, t) {
    var n = this._, r = jp(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Wp(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ha(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ha(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Io(e);
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
function Wp(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ha(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Yp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ns = "http://www.w3.org/1999/xhtml";
const Ma = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ns,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ma.hasOwnProperty(t) ? { space: Ma[t], local: e } : e;
}
function Fp(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ns && t.documentElement.namespaceURI === ns ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Gp(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Su(e) {
  var t = wi(e);
  return (t.local ? Gp : Fp)(t);
}
function Up() {
}
function Bs(e) {
  return e == null ? Up : function() {
    return this.querySelector(e);
  };
}
function Jp(e) {
  typeof e != "function" && (e = Bs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Lt(r, this._parents);
}
function Qp(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function eg() {
  return [];
}
function Eu(e) {
  return e == null ? eg : function() {
    return this.querySelectorAll(e);
  };
}
function tg(e) {
  return function() {
    return Qp(e.apply(this, arguments));
  };
}
function ng(e) {
  typeof e == "function" ? e = tg(e) : e = Eu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Lt(r, o);
}
function Nu(e) {
  return function() {
    return this.matches(e);
  };
}
function Pu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var rg = Array.prototype.find;
function og(e) {
  return function() {
    return rg.call(this.children, e);
  };
}
function ig() {
  return this.firstElementChild;
}
function sg(e) {
  return this.select(e == null ? ig : og(typeof e == "function" ? e : Pu(e)));
}
var ag = Array.prototype.filter;
function lg() {
  return Array.from(this.children);
}
function ug(e) {
  return function() {
    return ag.call(this.children, e);
  };
}
function cg(e) {
  return this.selectAll(e == null ? lg : ug(typeof e == "function" ? e : Pu(e)));
}
function dg(e) {
  typeof e != "function" && (e = Nu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Lt(r, this._parents);
}
function Lu(e) {
  return new Array(e.length);
}
function fg() {
  return new Lt(this._enter || this._groups.map(Lu), this._parents);
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
function pg(e) {
  return function() {
    return e;
  };
}
function gg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Go(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function hg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new Go(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function vg(e) {
  return e.__data__;
}
function mg(e, t) {
  if (!arguments.length) return Array.from(this, vg);
  var n = t ? hg : gg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = pg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, g = yg(e.call(d, d && d.__data__, u, r)), h = g.length, v = a[u] = new Array(h), w = s[u] = new Array(h), b = l[u] = new Array(f);
    n(d, p, v, w, b, g, t);
    for (var C = 0, x = 0, S, E; C < h; ++C)
      if (S = v[C]) {
        for (C >= x && (x = C + 1); !(E = w[x]) && ++x < h; ) ;
        S._next = E || null;
      }
  }
  return s = new Lt(s, r), s._enter = a, s._exit = l, s;
}
function yg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wg() {
  return new Lt(this._exit || this._groups.map(Lu), this._parents);
}
function bg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function xg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = u[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Lt(a, this._parents);
}
function $g() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Cg(e) {
  e || (e = kg);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Lt(o, this._parents).order();
}
function kg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _g() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Sg() {
  return Array.from(this);
}
function Eg() {
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
function Lg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Dg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Hg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Tg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Vg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Og(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function zg(e, t) {
  var n = wi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Hg : Dg : typeof t == "function" ? n.local ? Og : Vg : n.local ? Tg : Mg)(n, t));
}
function Du(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Ag(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ig(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function qg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Zg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Ag : typeof t == "function" ? qg : Ig)(e, t, n ?? "")) : Cr(this.node(), e);
}
function Cr(e, t) {
  return e.style.getPropertyValue(t) || Du(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Rg(e) {
  return function() {
    delete this[e];
  };
}
function Bg(e, t) {
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
function Xg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Rg : typeof t == "function" ? Kg : Bg)(e, t)) : this.node()[e];
}
function Hu(e) {
  return e.trim().split(/^|\s+/);
}
function Ks(e) {
  return e.classList || new Mu(e);
}
function Mu(e) {
  this._node = e, this._names = Hu(e.getAttribute("class") || "");
}
Mu.prototype = {
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
function Tu(e, t) {
  for (var n = Ks(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Vu(e, t) {
  for (var n = Ks(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Yg(e) {
  return function() {
    Tu(this, e);
  };
}
function jg(e) {
  return function() {
    Vu(this, e);
  };
}
function Wg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Tu : Vu)(this, e);
  };
}
function Fg(e, t) {
  var n = Hu(e + "");
  if (arguments.length < 2) {
    for (var r = Ks(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Wg : t ? Yg : jg)(n, t));
}
function Gg() {
  this.textContent = "";
}
function Ug(e) {
  return function() {
    this.textContent = e;
  };
}
function Jg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Qg(e) {
  return arguments.length ? this.each(e == null ? Gg : (typeof e == "function" ? Jg : Ug)(e)) : this.node().textContent;
}
function eh() {
  this.innerHTML = "";
}
function th(e) {
  return function() {
    this.innerHTML = e;
  };
}
function nh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function rh(e) {
  return arguments.length ? this.each(e == null ? eh : (typeof e == "function" ? nh : th)(e)) : this.node().innerHTML;
}
function oh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ih() {
  return this.each(oh);
}
function sh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ah() {
  return this.each(sh);
}
function lh(e) {
  var t = typeof e == "function" ? e : Su(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function uh() {
  return null;
}
function ch(e, t) {
  var n = typeof e == "function" ? e : Su(e), r = t == null ? uh : typeof t == "function" ? t : Bs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function dh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function fh() {
  return this.each(dh);
}
function ph() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hh(e) {
  return this.select(e ? gh : ph);
}
function vh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function mh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function yh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function wh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function bh(e, t, n) {
  return function() {
    var r = this.__on, o, i = mh(t);
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
function xh(e, t, n) {
  var r = yh(e + ""), o, i = r.length, s;
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
  for (a = t ? bh : wh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ou(e, t, n) {
  var r = Du(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function $h(e, t) {
  return function() {
    return Ou(this, e, t);
  };
}
function Ch(e, t) {
  return function() {
    return Ou(this, e, t.apply(this, arguments));
  };
}
function kh(e, t) {
  return this.each((typeof t == "function" ? Ch : $h)(e, t));
}
function* _h() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var zu = [null];
function Lt(e, t) {
  this._groups = e, this._parents = t;
}
function ho() {
  return new Lt([[document.documentElement]], zu);
}
function Sh() {
  return this;
}
Lt.prototype = ho.prototype = {
  constructor: Lt,
  select: Jp,
  selectAll: ng,
  selectChild: sg,
  selectChildren: cg,
  filter: dg,
  data: mg,
  enter: fg,
  exit: wg,
  join: bg,
  merge: xg,
  selection: Sh,
  order: $g,
  sort: Cg,
  call: _g,
  nodes: Sg,
  node: Eg,
  size: Ng,
  empty: Pg,
  each: Lg,
  attr: zg,
  style: Zg,
  property: Xg,
  classed: Fg,
  text: Qg,
  html: rh,
  raise: ih,
  lower: ah,
  append: lh,
  insert: ch,
  remove: fh,
  clone: hh,
  datum: vh,
  on: xh,
  dispatch: kh,
  [Symbol.iterator]: _h
};
function Mt(e) {
  return typeof e == "string" ? new Lt([[document.querySelector(e)]], [document.documentElement]) : new Lt([[e]], zu);
}
function Eh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function At(e, t) {
  if (e = Eh(e), t === void 0 && (t = e.currentTarget), t) {
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
const Nh = { passive: !1 }, Fr = { capture: !0, passive: !1 };
function Ti(e) {
  e.stopImmediatePropagation();
}
function gr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Au(e) {
  var t = e.document.documentElement, n = Mt(e).on("dragstart.drag", gr, Fr);
  "onselectstart" in t ? n.on("selectstart.drag", gr, Fr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Iu(e, t) {
  var n = e.document.documentElement, r = Mt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", gr, Fr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Po = (e) => () => e;
function rs(e, {
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
rs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Ph(e) {
  return !e.ctrlKey && !e.button;
}
function Lh() {
  return this.parentNode;
}
function Dh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Hh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Mh() {
  var e = Ph, t = Lh, n = Dh, r = Hh, o = {}, i = yi("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(S) {
    S.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Nh).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(S, E) {
    if (!(d || !e.call(this, S, E))) {
      var D = x(this, t.call(this, S, E), S, E, "mouse");
      D && (Mt(S.view).on("mousemove.drag", h, Fr).on("mouseup.drag", v, Fr), Au(S.view), Ti(S), u = !1, a = S.clientX, l = S.clientY, D("start", S));
    }
  }
  function h(S) {
    if (gr(S), !u) {
      var E = S.clientX - a, D = S.clientY - l;
      u = E * E + D * D > p;
    }
    o.mouse("drag", S);
  }
  function v(S) {
    Mt(S.view).on("mousemove.drag mouseup.drag", null), Iu(S.view, u), gr(S), o.mouse("end", S);
  }
  function w(S, E) {
    if (e.call(this, S, E)) {
      var D = S.changedTouches, H = t.call(this, S, E), q = D.length, B, U;
      for (B = 0; B < q; ++B)
        (U = x(this, H, S, E, D[B].identifier, D[B])) && (Ti(S), U("start", S, D[B]));
    }
  }
  function b(S) {
    var E = S.changedTouches, D = E.length, H, q;
    for (H = 0; H < D; ++H)
      (q = o[E[H].identifier]) && (gr(S), q("drag", S, E[H]));
  }
  function C(S) {
    var E = S.changedTouches, D = E.length, H, q;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), H = 0; H < D; ++H)
      (q = o[E[H].identifier]) && (Ti(S), q("end", S, E[H]));
  }
  function x(S, E, D, H, q, B) {
    var U = i.copy(), z = At(B || D, E), k, _, $;
    if (($ = n.call(S, new rs("beforestart", {
      sourceEvent: D,
      target: f,
      identifier: q,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: U
    }), H)) != null)
      return k = $.x - z[0] || 0, _ = $.y - z[1] || 0, function P(N, V, Z) {
        var X = z, T;
        switch (N) {
          case "start":
            o[q] = P, T = s++;
            break;
          case "end":
            delete o[q], --s;
          // falls through
          case "drag":
            z = At(Z || V, E), T = s;
            break;
        }
        U.call(
          N,
          S,
          new rs(N, {
            sourceEvent: V,
            subject: $,
            target: f,
            identifier: q,
            active: T,
            x: z[0] + k,
            y: z[1] + _,
            dx: z[0] - X[0],
            dy: z[1] - X[1],
            dispatch: U
          }),
          H
        );
      };
  }
  return f.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Po(!!S), f) : e;
  }, f.container = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Po(S), f) : t;
  }, f.subject = function(S) {
    return arguments.length ? (n = typeof S == "function" ? S : Po(S), f) : n;
  }, f.touchable = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Po(!!S), f) : r;
  }, f.on = function() {
    var S = i.on.apply(i, arguments);
    return S === i ? f : S;
  }, f.clickDistance = function(S) {
    return arguments.length ? (p = (S = +S) * S, f) : Math.sqrt(p);
  }, f;
}
function Xs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function qu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function vo() {
}
var Gr = 0.7, Uo = 1 / Gr, hr = "\\s*([+-]?\\d+)\\s*", Ur = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", on = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Th = /^#([0-9a-f]{3,8})$/, Vh = new RegExp(`^rgb\\(${hr},${hr},${hr}\\)$`), Oh = new RegExp(`^rgb\\(${on},${on},${on}\\)$`), zh = new RegExp(`^rgba\\(${hr},${hr},${hr},${Ur}\\)$`), Ah = new RegExp(`^rgba\\(${on},${on},${on},${Ur}\\)$`), Ih = new RegExp(`^hsl\\(${Ur},${on},${on}\\)$`), qh = new RegExp(`^hsla\\(${Ur},${on},${on},${Ur}\\)$`), Ta = {
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
Xs(vo, er, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Va,
  // Deprecated! Use color.formatHex.
  formatHex: Va,
  formatHex8: Zh,
  formatHsl: Rh,
  formatRgb: Oa,
  toString: Oa
});
function Va() {
  return this.rgb().formatHex();
}
function Zh() {
  return this.rgb().formatHex8();
}
function Rh() {
  return Zu(this).formatHsl();
}
function Oa() {
  return this.rgb().formatRgb();
}
function er(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Th.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? za(t) : n === 3 ? new wt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Lo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Lo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vh.exec(e)) ? new wt(t[1], t[2], t[3], 1) : (t = Oh.exec(e)) ? new wt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = zh.exec(e)) ? Lo(t[1], t[2], t[3], t[4]) : (t = Ah.exec(e)) ? Lo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ih.exec(e)) ? qa(t[1], t[2] / 100, t[3] / 100, 1) : (t = qh.exec(e)) ? qa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ta.hasOwnProperty(e) ? za(Ta[e]) : e === "transparent" ? new wt(NaN, NaN, NaN, 0) : null;
}
function za(e) {
  return new wt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Lo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new wt(e, t, n, r);
}
function Bh(e) {
  return e instanceof vo || (e = er(e)), e ? (e = e.rgb(), new wt(e.r, e.g, e.b, e.opacity)) : new wt();
}
function os(e, t, n, r) {
  return arguments.length === 1 ? Bh(e) : new wt(e, t, n, r ?? 1);
}
function wt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Xs(wt, os, qu(vo, {
  brighter(e) {
    return e = e == null ? Uo : Math.pow(Uo, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new wt(Gn(this.r), Gn(this.g), Gn(this.b), Jo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Aa,
  // Deprecated! Use color.formatHex.
  formatHex: Aa,
  formatHex8: Kh,
  formatRgb: Ia,
  toString: Ia
}));
function Aa() {
  return `#${Xn(this.r)}${Xn(this.g)}${Xn(this.b)}`;
}
function Kh() {
  return `#${Xn(this.r)}${Xn(this.g)}${Xn(this.b)}${Xn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ia() {
  const e = Jo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Gn(this.r)}, ${Gn(this.g)}, ${Gn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Jo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Gn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Xn(e) {
  return e = Gn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function qa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new qt(e, t, n, r);
}
function Zu(e) {
  if (e instanceof qt) return new qt(e.h, e.s, e.l, e.opacity);
  if (e instanceof vo || (e = er(e)), !e) return new qt();
  if (e instanceof qt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new qt(s, a, l, e.opacity);
}
function Xh(e, t, n, r) {
  return arguments.length === 1 ? Zu(e) : new qt(e, t, n, r ?? 1);
}
function qt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Xs(qt, Xh, qu(vo, {
  brighter(e) {
    return e = e == null ? Uo : Math.pow(Uo, e), new qt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new qt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new wt(
      Vi(e >= 240 ? e - 240 : e + 120, o, r),
      Vi(e, o, r),
      Vi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new qt(Za(this.h), Do(this.s), Do(this.l), Jo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Jo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Za(this.h)}, ${Do(this.s) * 100}%, ${Do(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Za(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Do(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Vi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ys = (e) => () => e;
function Yh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function jh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Wh(e) {
  return (e = +e) == 1 ? Ru : function(t, n) {
    return n - t ? jh(t, n, e) : Ys(isNaN(t) ? n : t);
  };
}
function Ru(e, t) {
  var n = t - e;
  return n ? Yh(e, n) : Ys(isNaN(e) ? t : e);
}
const Qo = function e(t) {
  var n = Wh(t);
  function r(o, i) {
    var s = n((o = os(o)).r, (i = os(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Ru(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Fh(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Gh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Uh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Kr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Jh(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Qt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Qh(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Kr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var is = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Oi = new RegExp(is.source, "g");
function e1(e) {
  return function() {
    return e;
  };
}
function t1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Bu(e, t) {
  var n = is.lastIndex = Oi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = is.exec(e)) && (o = Oi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Qt(r, o) })), n = Oi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? t1(l[0].x) : e1(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function Kr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Ys(t) : (n === "number" ? Qt : n === "string" ? (r = er(t)) ? (t = r, Qo) : Bu : t instanceof er ? Qo : t instanceof Date ? Jh : Gh(t) ? Fh : Array.isArray(t) ? Uh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Qh : Qt)(e, t);
}
var Ra = 180 / Math.PI, Ku = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Ra,
    skewX: Math.atan(l) * Ra,
    scaleX: s,
    scaleY: a
  };
}
var Ho;
function n1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ku : Xu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function r1(e) {
  return e == null || (Ho || (Ho = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ho.setAttribute("transform", e), !(e = Ho.transform.baseVal.consolidate())) ? Ku : (e = e.matrix, Xu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Yu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var v = g.push("translate(", null, t, null, n);
      h.push({ i: v - 4, x: Qt(u, p) }, { i: v - 2, x: Qt(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: Qt(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: Qt(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var v = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: v - 4, x: Qt(u, p) }, { i: v - 2, x: Qt(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(g) {
      for (var h = -1, v = f.length, w; ++h < v; ) p[(w = f[h]).i] = w.x(g);
      return p.join("");
    };
  };
}
var o1 = Yu(n1, "px, ", "px)", "deg)"), i1 = Yu(r1, ", ", ")", ")"), s1 = 1e-12;
function Ba(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function a1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function l1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const qo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, v = g * g + h * h, w, b;
    if (v < s1)
      b = Math.log(f / u) / t, w = function(H) {
        return [
          a + H * g,
          l + H * h,
          u * Math.exp(t * H * b)
        ];
      };
    else {
      var C = Math.sqrt(v), x = (f * f - u * u + r * v) / (2 * u * n * C), S = (f * f - u * u - r * v) / (2 * f * n * C), E = Math.log(Math.sqrt(x * x + 1) - x), D = Math.log(Math.sqrt(S * S + 1) - S);
      b = (D - E) / t, w = function(H) {
        var q = H * b, B = Ba(E), U = u / (n * C) * (B * l1(t * q + E) - a1(E));
        return [
          a + U * g,
          l + U * h,
          u * B / Ba(t * q + E)
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
var kr = 0, qr = 0, zr = 0, ju = 1e3, ei, Zr, ti = 0, tr = 0, bi = 0, Jr = typeof performance == "object" && performance.now ? performance : Date, Wu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function js() {
  return tr || (Wu(u1), tr = Jr.now() + bi);
}
function u1() {
  tr = 0;
}
function ni() {
  this._call = this._time = this._next = null;
}
ni.prototype = Fu.prototype = {
  constructor: ni,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? js() : +n) + (t == null ? 0 : +t), !this._next && Zr !== this && (Zr ? Zr._next = this : ei = this, Zr = this), this._call = e, this._time = n, ss();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ss());
  }
};
function Fu(e, t, n) {
  var r = new ni();
  return r.restart(e, t, n), r;
}
function c1() {
  js(), ++kr;
  for (var e = ei, t; e; )
    (t = tr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --kr;
}
function Ka() {
  tr = (ti = Jr.now()) + bi, kr = qr = 0;
  try {
    c1();
  } finally {
    kr = 0, f1(), tr = 0;
  }
}
function d1() {
  var e = Jr.now(), t = e - ti;
  t > ju && (bi -= t, ti = e);
}
function f1() {
  for (var e, t = ei, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ei = n);
  Zr = e, ss(r);
}
function ss(e) {
  if (!kr) {
    qr && (qr = clearTimeout(qr));
    var t = e - tr;
    t > 24 ? (e < 1 / 0 && (qr = setTimeout(Ka, e - Jr.now() - bi)), zr && (zr = clearInterval(zr))) : (zr || (ti = Jr.now(), zr = setInterval(d1, ju)), kr = 1, Wu(Ka));
  }
}
function Xa(e, t, n) {
  var r = new ni();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var p1 = yi("start", "end", "cancel", "interrupt"), g1 = [], Gu = 0, Ya = 1, as = 2, Zo = 3, ja = 4, ls = 5, Ro = 6;
function xi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  h1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: p1,
    tween: g1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Gu
  });
}
function Ws(e, t) {
  var n = jt(e, t);
  if (n.state > Gu) throw new Error("too late; already scheduled");
  return n;
}
function pn(e, t) {
  var n = jt(e, t);
  if (n.state > Zo) throw new Error("too late; already running");
  return n;
}
function jt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function h1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Fu(i, 0, n.time);
  function i(u) {
    n.state = Ya, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, g;
    if (n.state !== Ya) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Zo) return Xa(s);
        g.state === ja ? (g.state = Ro, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Ro, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Xa(function() {
      n.state === Zo && (n.state = ja, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = as, n.on.call("start", e, e.__data__, n.index, n.group), n.state === as) {
      for (n.state = Zo, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ls, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === ls && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ro, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Bo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > as && r.state < ls, r.state = Ro, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function v1(e) {
  return this.each(function() {
    Bo(this, e);
  });
}
function m1(e, t) {
  var n, r;
  return function() {
    var o = pn(this, e), i = o.tween;
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
function y1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = pn(this, e), s = i.tween;
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
function w1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = jt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? m1 : y1)(n, e, t));
}
function Fs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = pn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return jt(o, r).value[t];
  };
}
function Uu(e, t) {
  var n;
  return (typeof t == "number" ? Qt : t instanceof er ? Qo : (n = er(t)) ? (t = n, Qo) : Bu)(e, t);
}
function b1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function x1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function $1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function C1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function k1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function _1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function S1(e, t) {
  var n = wi(e), r = n === "transform" ? i1 : Uu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? _1 : k1)(n, r, Fs(this, "attr." + e, t)) : t == null ? (n.local ? x1 : b1)(n) : (n.local ? C1 : $1)(n, r, t));
}
function E1(e, t) {
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
function L1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && E1(e, i)), n;
  }
  return o._value = t, o;
}
function D1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = wi(e);
  return this.tween(n, (r.local ? P1 : L1)(r, t));
}
function H1(e, t) {
  return function() {
    Ws(this, e).delay = +t.apply(this, arguments);
  };
}
function M1(e, t) {
  return t = +t, function() {
    Ws(this, e).delay = t;
  };
}
function T1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? H1 : M1)(t, e)) : jt(this.node(), t).delay;
}
function V1(e, t) {
  return function() {
    pn(this, e).duration = +t.apply(this, arguments);
  };
}
function O1(e, t) {
  return t = +t, function() {
    pn(this, e).duration = t;
  };
}
function z1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? V1 : O1)(t, e)) : jt(this.node(), t).duration;
}
function A1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    pn(this, e).ease = t;
  };
}
function I1(e) {
  var t = this._id;
  return arguments.length ? this.each(A1(t, e)) : jt(this.node(), t).ease;
}
function q1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    pn(this, e).ease = n;
  };
}
function Z1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(q1(this._id, e));
}
function R1(e) {
  typeof e != "function" && (e = Nu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new $n(r, this._parents, this._name, this._id);
}
function B1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new $n(s, this._parents, this._name, this._id);
}
function K1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function X1(e, t, n) {
  var r, o, i = K1(t) ? Ws : pn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Y1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? jt(this.node(), n).on.on(e) : this.each(X1(n, e, t));
}
function j1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function W1() {
  return this.on("end.remove", j1(this._id));
}
function F1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Bs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, xi(u[f], t, n, f, u, jt(d, n)));
  return new $n(i, this._parents, t, n);
}
function G1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Eu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = jt(d, n), v = 0, w = f.length; v < w; ++v)
          (g = f[v]) && xi(g, t, n, v, f, h);
        i.push(f), s.push(d);
      }
  return new $n(i, s, t, n);
}
var U1 = ho.prototype.constructor;
function J1() {
  return new U1(this._groups, this._parents);
}
function Q1(e, t) {
  var n, r, o;
  return function() {
    var i = Cr(this, e), s = (this.style.removeProperty(e), Cr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ju(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ev(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Cr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function tv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Cr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Cr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function nv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = pn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Ju(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function rv(e, t, n) {
  var r = (e += "") == "transform" ? o1 : Uu;
  return t == null ? this.styleTween(e, Q1(e, r)).on("end.style." + e, Ju(e)) : typeof t == "function" ? this.styleTween(e, tv(e, r, Fs(this, "style." + e, t))).each(nv(this._id, e)) : this.styleTween(e, ev(e, r, t), n).on("end.style." + e, null);
}
function ov(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function iv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && ov(e, s, n)), r;
  }
  return i._value = t, i;
}
function sv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, iv(e, t, n ?? ""));
}
function av(e) {
  return function() {
    this.textContent = e;
  };
}
function lv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function uv(e) {
  return this.tween("text", typeof e == "function" ? lv(Fs(this, "text", e)) : av(e == null ? "" : e + ""));
}
function cv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function dv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && cv(o)), t;
  }
  return r._value = e, r;
}
function fv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, dv(e));
}
function pv() {
  for (var e = this._name, t = this._id, n = Qu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = jt(l, t);
        xi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new $n(r, this._parents, e, n);
}
function gv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = pn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var hv = 0;
function $n(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Qu() {
  return ++hv;
}
var gn = ho.prototype;
$n.prototype = {
  constructor: $n,
  select: F1,
  selectAll: G1,
  selectChild: gn.selectChild,
  selectChildren: gn.selectChildren,
  filter: R1,
  merge: B1,
  selection: J1,
  transition: pv,
  call: gn.call,
  nodes: gn.nodes,
  node: gn.node,
  size: gn.size,
  empty: gn.empty,
  each: gn.each,
  on: Y1,
  attr: S1,
  attrTween: D1,
  style: rv,
  styleTween: sv,
  text: uv,
  textTween: fv,
  remove: W1,
  tween: w1,
  delay: T1,
  duration: z1,
  ease: I1,
  easeVarying: Z1,
  end: gv,
  [Symbol.iterator]: gn[Symbol.iterator]
};
function vv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var mv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vv
};
function yv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function wv(e) {
  var t, n;
  e instanceof $n ? (t = e._id, e = e._name) : (t = Qu(), (n = mv).time = js(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && xi(l, e, t, u, s, n || yv(l, t));
  return new $n(r, this._parents, e, t);
}
ho.prototype.interrupt = v1;
ho.prototype.transition = wv;
const Mo = (e) => () => e;
function bv(e, {
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
function vn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
vn.prototype = {
  constructor: vn,
  scale: function(e) {
    return e === 1 ? this : new vn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new vn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var $i = new vn(1, 0, 0);
ec.prototype = vn.prototype;
function ec(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return $i;
  return e.__zoom;
}
function zi(e) {
  e.stopImmediatePropagation();
}
function Ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function xv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function $v() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Wa() {
  return this.__zoom || $i;
}
function Cv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function kv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _v(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function tc() {
  var e = xv, t = $v, n = _v, r = Cv, o = kv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = qo, u = yi("start", "zoom", "end"), d, p, f, g = 500, h = 150, v = 0, w = 10;
  function b($) {
    $.property("__zoom", Wa).on("wheel.zoom", q, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", U).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", _).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function($, P, N, V) {
    var Z = $.selection ? $.selection() : $;
    Z.property("__zoom", Wa), $ !== Z ? E($, P, N, V) : Z.interrupt().each(function() {
      D(this, arguments).event(V).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, b.scaleBy = function($, P, N, V) {
    b.scaleTo($, function() {
      var Z = this.__zoom.k, X = typeof P == "function" ? P.apply(this, arguments) : P;
      return Z * X;
    }, N, V);
  }, b.scaleTo = function($, P, N, V) {
    b.transform($, function() {
      var Z = t.apply(this, arguments), X = this.__zoom, T = N == null ? S(Z) : typeof N == "function" ? N.apply(this, arguments) : N, Y = X.invert(T), ee = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(x(C(X, ee), T, Y), Z, s);
    }, N, V);
  }, b.translateBy = function($, P, N, V) {
    b.transform($, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, V);
  }, b.translateTo = function($, P, N, V, Z) {
    b.transform($, function() {
      var X = t.apply(this, arguments), T = this.__zoom, Y = V == null ? S(X) : typeof V == "function" ? V.apply(this, arguments) : V;
      return n($i.translate(Y[0], Y[1]).scale(T.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), X, s);
    }, V, Z);
  };
  function C($, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === $.k ? $ : new vn(P, $.x, $.y);
  }
  function x($, P, N) {
    var V = P[0] - N[0] * $.k, Z = P[1] - N[1] * $.k;
    return V === $.x && Z === $.y ? $ : new vn($.k, V, Z);
  }
  function S($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function E($, P, N, V) {
    $.on("start.zoom", function() {
      D(this, arguments).event(V).start();
    }).on("interrupt.zoom end.zoom", function() {
      D(this, arguments).event(V).end();
    }).tween("zoom", function() {
      var Z = this, X = arguments, T = D(Z, X).event(V), Y = t.apply(Z, X), ee = N == null ? S(Y) : typeof N == "function" ? N.apply(Z, X) : N, ne = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), R = Z.__zoom, j = typeof P == "function" ? P.apply(Z, X) : P, W = l(R.invert(ee).concat(ne / R.k), j.invert(ee).concat(ne / j.k));
      return function(ie) {
        if (ie === 1) ie = j;
        else {
          var G = W(ie), me = ne / G[2];
          ie = new vn(me, ee[0] - G[0] * me, ee[1] - G[1] * me);
        }
        T.zoom(null, ie);
      };
    });
  }
  function D($, P, N) {
    return !N && $.__zooming || new H($, P);
  }
  function H($, P) {
    this.that = $, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply($, P), this.taps = 0;
  }
  H.prototype = {
    event: function($) {
      return $ && (this.sourceEvent = $), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function($, P) {
      return this.mouse && $ !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && $ !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && $ !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function($) {
      var P = Mt(this.that).datum();
      u.call(
        $,
        this.that,
        new bv($, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function q($, ...P) {
    if (!e.apply(this, arguments)) return;
    var N = D(this, P).event($), V = this.__zoom, Z = Math.max(i[0], Math.min(i[1], V.k * Math.pow(2, r.apply(this, arguments)))), X = At($);
    if (N.wheel)
      (N.mouse[0][0] !== X[0] || N.mouse[0][1] !== X[1]) && (N.mouse[1] = V.invert(N.mouse[0] = X)), clearTimeout(N.wheel);
    else {
      if (V.k === Z) return;
      N.mouse = [X, V.invert(X)], Bo(this), N.start();
    }
    Ar($), N.wheel = setTimeout(T, h), N.zoom("mouse", n(x(C(V, Z), N.mouse[0], N.mouse[1]), N.extent, s));
    function T() {
      N.wheel = null, N.end();
    }
  }
  function B($, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var N = $.currentTarget, V = D(this, P, !0).event($), Z = Mt($.view).on("mousemove.zoom", ee, !0).on("mouseup.zoom", ne, !0), X = At($, N), T = $.clientX, Y = $.clientY;
    Au($.view), zi($), V.mouse = [X, this.__zoom.invert(X)], Bo(this), V.start();
    function ee(R) {
      if (Ar(R), !V.moved) {
        var j = R.clientX - T, W = R.clientY - Y;
        V.moved = j * j + W * W > v;
      }
      V.event(R).zoom("mouse", n(x(V.that.__zoom, V.mouse[0] = At(R, N), V.mouse[1]), V.extent, s));
    }
    function ne(R) {
      Z.on("mousemove.zoom mouseup.zoom", null), Iu(R.view, V.moved), Ar(R), V.event(R).end();
    }
  }
  function U($, ...P) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, V = At($.changedTouches ? $.changedTouches[0] : $, this), Z = N.invert(V), X = N.k * ($.shiftKey ? 0.5 : 2), T = n(x(C(N, X), V, Z), t.apply(this, P), s);
      Ar($), a > 0 ? Mt(this).transition().duration(a).call(E, T, V, $) : Mt(this).call(b.transform, T, V, $);
    }
  }
  function z($, ...P) {
    if (e.apply(this, arguments)) {
      var N = $.touches, V = N.length, Z = D(this, P, $.changedTouches.length === V).event($), X, T, Y, ee;
      for (zi($), T = 0; T < V; ++T)
        Y = N[T], ee = At(Y, this), ee = [ee, this.__zoom.invert(ee), Y.identifier], Z.touch0 ? !Z.touch1 && Z.touch0[2] !== ee[2] && (Z.touch1 = ee, Z.taps = 0) : (Z.touch0 = ee, X = !0, Z.taps = 1 + !!d);
      d && (d = clearTimeout(d)), X && (Z.taps < 2 && (p = ee[0], d = setTimeout(function() {
        d = null;
      }, g)), Bo(this), Z.start());
    }
  }
  function k($, ...P) {
    if (this.__zooming) {
      var N = D(this, P).event($), V = $.changedTouches, Z = V.length, X, T, Y, ee;
      for (Ar($), X = 0; X < Z; ++X)
        T = V[X], Y = At(T, this), N.touch0 && N.touch0[2] === T.identifier ? N.touch0[0] = Y : N.touch1 && N.touch1[2] === T.identifier && (N.touch1[0] = Y);
      if (T = N.that.__zoom, N.touch1) {
        var ne = N.touch0[0], R = N.touch0[1], j = N.touch1[0], W = N.touch1[1], ie = (ie = j[0] - ne[0]) * ie + (ie = j[1] - ne[1]) * ie, G = (G = W[0] - R[0]) * G + (G = W[1] - R[1]) * G;
        T = C(T, Math.sqrt(ie / G)), Y = [(ne[0] + j[0]) / 2, (ne[1] + j[1]) / 2], ee = [(R[0] + W[0]) / 2, (R[1] + W[1]) / 2];
      } else if (N.touch0) Y = N.touch0[0], ee = N.touch0[1];
      else return;
      N.zoom("touch", n(x(T, Y, ee), N.extent, s));
    }
  }
  function _($, ...P) {
    if (this.__zooming) {
      var N = D(this, P).event($), V = $.changedTouches, Z = V.length, X, T;
      for (zi($), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), X = 0; X < Z; ++X)
        T = V[X], N.touch0 && N.touch0[2] === T.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === T.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (T = At(T, this), Math.hypot(p[0] - T[0], p[1] - T[1]) < w)) {
        var Y = Mt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : Mo(+$), b) : r;
  }, b.filter = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : Mo(!!$), b) : e;
  }, b.touchable = function($) {
    return arguments.length ? (o = typeof $ == "function" ? $ : Mo(!!$), b) : o;
  }, b.extent = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : Mo([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), b) : t;
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
    return arguments.length ? (v = ($ = +$) * $, b) : Math.sqrt(v);
  }, b.tapDistance = function($) {
    return arguments.length ? (w = +$, b) : w;
  }, b;
}
const Qr = {
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
}, us = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], nc = ["Enter", " ", "Escape"], Sv = {
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
var _r;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(_r || (_r = {}));
var sn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(sn || (sn = {}));
var ri;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ri || (ri = {}));
const cs = {
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
var hn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(hn || (hn = {}));
var eo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(eo || (eo = {}));
var ve;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ve || (ve = {}));
const Fa = {
  [ve.Left]: ve.Right,
  [ve.Right]: ve.Left,
  [ve.Top]: ve.Bottom,
  [ve.Bottom]: ve.Top
};
function Ev(e, t) {
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
function Ga(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Nv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const rc = (e) => "id" in e && "source" in e && "target" in e, Pv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Gs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), mo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Rn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Lv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Gs(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? oi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ci(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ki(n);
}, yo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = oi(r);
      n = Ci(n, o);
    }
  }), ki(n);
}, Us = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...bo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, h = d.height ?? u.height ?? u.initialHeight ?? null, v = to(a, Er(u)), w = (g ?? 0) * (h ?? 0), b = i && v > 0;
    (!u.internals.handleBounds || b || v >= w || u.dragging) && l.push(u);
  }
  return l;
}, Dv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Hv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Mv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Hv(e, s), l = yo(a), u = Js(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function oc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Qr.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else a && Nr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Nr(p) ? nr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Qr.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Tv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = Dv(s, l);
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
const Sr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), nr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Sr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Sr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function ic(e, t, n) {
  const { width: r, height: o } = Rn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return nr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ua = (e, t, n) => e < t ? Sr(Math.abs(e - t), 1, t) / t : e > n ? -Sr(Math.abs(e - n), 1, t) / t : 0, sc = (e, t, n = 15, r = 40) => {
  const o = Ua(e.x, r, t.width - r) * n, i = Ua(e.y, r, t.height - r) * n;
  return [o, i];
}, Ci = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ds = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ki = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Er = (e, t = [0, 0]) => {
  const { x: n, y: r } = Gs(e) ? e.internals.positionAbsolute : mo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, oi = (e, t = [0, 0]) => {
  const { x: n, y: r } = Gs(e) ? e.internals.positionAbsolute : mo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, ac = (e, t) => ki(Ci(ds(e), ds(t))), to = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ja = (e) => mn(e.width) && mn(e.height) && mn(e.x) && mn(e.y), mn = (e) => !isNaN(e) && isFinite(e), Vv = (e, t) => {
}, wo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), bo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? wo(a, s) : a;
}, ii = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function cr(e, t) {
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
function Ov(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = cr(e, n), o = cr(e, t);
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
    const r = cr(e.top ?? e.y ?? 0, n), o = cr(e.bottom ?? e.y ?? 0, n), i = cr(e.left ?? e.x ?? 0, t), s = cr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function zv(e, t, n, r, o, i) {
  const { x: s, y: a } = ii(e, [t, n, r]), { x: l, y: u } = ii({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const Js = (e, t, n, r, o, i) => {
  const s = Ov(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Sr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, v = zv(e, g, h, d, t, n), w = {
    left: Math.min(v.left - s.left, 0),
    top: Math.min(v.top - s.top, 0),
    right: Math.min(v.right - s.right, 0),
    bottom: Math.min(v.bottom - s.bottom, 0)
  };
  return {
    x: g - w.left + w.right,
    y: h - w.top + w.bottom,
    zoom: d
  };
}, Yn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Nr(e) {
  return e != null && e !== "parent";
}
function Rn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function lc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Av(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Iv(e) {
  return { ...Sv, ...e || {} };
}
function Ai(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = tn(e), a = bo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? wo(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const uc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), cc = (e) => e?.getRootNode?.() || window?.document, qv = ["INPUT", "SELECT", "TEXTAREA"];
function dc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : qv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const fc = (e) => "clientX" in e, tn = (e, t) => {
  const n = fc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Qa = (e, t, n, r, o) => {
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
      ...uc(s)
    };
  });
};
function Zv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function To(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function el({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ve.Left:
      return [t - To(t - r, i), n];
    case ve.Right:
      return [t + To(r - t, i), n];
    case ve.Top:
      return [t, n - To(n - o, i)];
    case ve.Bottom:
      return [t, n + To(o - n, i)];
  }
}
function pc({ sourceX: e, sourceY: t, sourcePosition: n = ve.Bottom, targetX: r, targetY: o, targetPosition: i = ve.Top, curvature: s = 0.25 }) {
  const [a, l] = el({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = el({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, g, h] = Zv({
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
    g,
    h
  ];
}
function gc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Rv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function Bv({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ci(oi(e), oi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return to(s, ki(i)) > 0;
}
const Kv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Xv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Yv = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return rc(e) ? n = { ...e } : n = {
    ...e,
    id: Kv(e)
  }, Xv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function hc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = gc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const tl = {
  [ve.Left]: { x: -1, y: 0 },
  [ve.Right]: { x: 1, y: 0 },
  [ve.Top]: { x: 0, y: -1 },
  [ve.Bottom]: { x: 0, y: 1 }
}, jv = ({ source: e, sourcePosition: t = ve.Bottom, target: n }) => t === ve.Left || t === ve.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, nl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Wv({ source: e, sourcePosition: t = ve.Bottom, target: n, targetPosition: r = ve.Top, center: o, offset: i, stepPosition: s }) {
  const a = tl[t], l = tl[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = jv({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], v, w;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , x, S] = gc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (v = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (v = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const E = [
      { x: v, y: u.y },
      { x: v, y: d.y }
    ], D = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === g ? h = f === "x" ? E : D : h = f === "x" ? D : E;
  } else {
    const E = [{ x: u.x, y: d.y }], D = [{ x: d.x, y: u.y }];
    if (f === "x" ? h = a.x === g ? D : E : h = a.y === g ? E : D, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const k = Math.min(i - 1, i - z);
        a[f] === g ? b[f] = (u[f] > e[f] ? -1 : 1) * k : C[f] = (d[f] > n[f] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", k = a[f] === l[z], _ = u[z] > d[z], $ = u[z] < d[z];
      (a[f] === 1 && (!k && _ || k && $) || a[f] !== 1 && (!k && $ || k && _)) && (h = f === "x" ? E : D);
    }
    const H = { x: u.x + b.x, y: u.y + b.y }, q = { x: d.x + C.x, y: d.y + C.y }, B = Math.max(Math.abs(H.x - h[0].x), Math.abs(q.x - h[0].x)), U = Math.max(Math.abs(H.y - h[0].y), Math.abs(q.y - h[0].y));
    B >= U ? (v = (H.x + q.x) / 2, w = h[0].y) : (v = h[0].x, w = (H.y + q.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...h,
    { x: d.x + C.x, y: d.y + C.y },
    n
  ], v, w, x, S];
}
function Fv(e, t, n, r) {
  const o = Math.min(nl(e, t) / 2, nl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Qs({ sourceX: e, sourceY: t, sourcePosition: n = ve.Bottom, targetX: r, targetY: o, targetPosition: i = ve.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, v] = Wv({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((w, b, C) => {
    let x = "";
    return C > 0 && C < p.length - 1 ? x = Fv(p[C - 1], b, p[C + 1], s) : x = `${C === 0 ? "M" : "L"}${b.x} ${b.y}`, w += x, w;
  }, ""), f, g, h, v];
}
function rl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Gv(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!rl(t) || !rl(n))
    return null;
  const r = t.internals.handleBounds || ol(t.handles), o = n.internals.handleBounds || ol(n.handles), i = il(r?.source ?? [], e.sourceHandle), s = il(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === _r.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Qr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ve.Bottom, l = s?.position || ve.Top, u = no(t, i, a), d = no(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function ol(e) {
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
function no(e, t, n = ve.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Rn(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case ve.Top:
      return { x: o + s / 2, y: i };
    case ve.Right:
      return { x: o + s, y: i + a / 2 };
    case ve.Bottom:
      return { x: o + s / 2, y: i + a };
    case ve.Left:
      return { x: o, y: i + a / 2 };
  }
}
function il(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function fs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Uv(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = fs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Jv(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case ve.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case ve.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case ve.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const ea = {
  nodeOrigin: [0, 0],
  nodeExtent: us,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Qv = {
  ...ea,
  checkEquality: !0
};
function ta(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function e0(e, t, n) {
  const r = ta(ea, n);
  for (const o of e.values())
    if (o.parentId)
      na(o, e, t, r);
    else {
      const i = mo(o, r.nodeOrigin), s = Nr(o.extent) ? o.extent : r.nodeExtent, a = nr(i, s, Rn(o));
      o.internals.positionAbsolute = a;
    }
}
function t0(e, t, n, r) {
  const o = ta(Qv, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = mo(l, o.nodeOrigin), p = Nr(l.extent) ? l.extent : o.nodeExtent, f = nr(d, p, Rn(l));
      u = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: f,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: l.measured ? u?.internals.handleBounds : void 0,
          z: vc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && na(u, t, n, r);
  }
  return i;
}
function n0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function na(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ta(ea, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  n0(e, n);
  const u = o ? 1e3 : 0, { x: d, y: p, z: f } = r0(e, l, i, s, u), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function vc(e, t) {
  return (mn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function r0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Rn(e), l = mo(e, n), u = Nr(e.extent) ? nr(l, e.extent, a) : l;
  let d = nr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = ic(d, a, t));
  const p = vc(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function o0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Er(a), u = ac(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Rn(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), v = Math.max(d.height, Math.round(s.height)), w = (h - d.width) * p[0], b = (v - d.height) * p[1];
    (f > 0 || g > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - g + b
      }
    }), n.get(l)?.forEach((C) => {
      e.some((x) => x.id === C.id) || o.push({
        id: C.id,
        type: "position",
        position: {
          x: C.position.x + f,
          y: C.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: h + (f ? p[0] * f - w : 0),
        height: v + (g ? p[1] * g - b : 0)
      }
    });
  }), o;
}
function i0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), p = [];
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
    const h = uc(f.nodeElement), v = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (v || !g.internals.handleBounds || f.force)) {
      const w = f.nodeElement.getBoundingClientRect(), b = Nr(g.extent) ? g.extent : i;
      let { positionAbsolute: C } = g.internals;
      g.parentId && g.extent === "parent" ? C = ic(C, h, t.get(g.parentId)) : b && (C = nr(C, b, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: C,
          handleBounds: {
            source: Qa("source", f.nodeElement, w, d, g.id),
            target: Qa("target", f.nodeElement, w, d, g.id)
          }
        }
      };
      t.set(g.id, x), g.parentId && na(x, t, n, { nodeOrigin: o }), a = !0, v && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && p.push({
        id: g.id,
        parentId: g.parentId,
        rect: Er(x, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = o0(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function s0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function sl(e, t, n, r, o, i) {
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
function a0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    sl("source", l, d, e, o, s), sl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function l0(e, t) {
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
function mc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : mc(n, t) : !1;
}
function al(e, t, n) {
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
    if ((s.selected || s.id === r) && (!s.parentId || !mc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ii({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function c0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = wo(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function d0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1, v = null;
  function w({ noDragClassName: C, handleSelector: x, domNode: S, isSelectable: E, nodeId: D, nodeClickDistance: H = 0 }) {
    f = Mt(S);
    function q({ x: k, y: _ }) {
      const { nodeLookup: $, nodeExtent: P, snapGrid: N, snapToGrid: V, nodeOrigin: Z, onNodeDrag: X, onSelectionDrag: T, onError: Y, updateNodePositions: ee } = t();
      i = { x: k, y: _ };
      let ne = !1;
      const R = a.size > 1, j = R && P ? ds(yo(a)) : null, W = R && V ? c0({
        dragItems: a,
        snapGrid: N,
        x: k,
        y: _
      }) : null;
      for (const [ie, G] of a) {
        if (!$.has(ie))
          continue;
        let me = { x: k - G.distance.x, y: _ - G.distance.y };
        V && (me = W ? {
          x: Math.round(me.x + W.x),
          y: Math.round(me.y + W.y)
        } : wo(me, N));
        let we = null;
        if (R && P && !G.extent && j) {
          const { positionAbsolute: te } = G.internals, de = te.x - j.x + P[0][0], fe = te.x + G.measured.width - j.x2 + P[1][0], le = te.y - j.y + P[0][1], Ne = te.y + G.measured.height - j.y2 + P[1][1];
          we = [
            [de, le],
            [fe, Ne]
          ];
        }
        const { position: re, positionAbsolute: Q } = oc({
          nodeId: ie,
          nextPosition: me,
          nodeLookup: $,
          nodeExtent: we || P,
          nodeOrigin: Z,
          onError: Y
        });
        ne = ne || G.position.x !== re.x || G.position.y !== re.y, G.position = re, G.internals.positionAbsolute = Q;
      }
      if (h = h || ne, !!ne && (ee(a, !0), v && (r || X || !D && T))) {
        const [ie, G] = Ii({
          nodeId: D,
          dragItems: a,
          nodeLookup: $
        });
        r?.(v, a, ie, G), X?.(v, ie, G), D || T?.(v, G);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: k, panBy: _, autoPanSpeed: $, autoPanOnNodeDrag: P } = t();
      if (!P) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [N, V] = sc(u, d, $);
      (N !== 0 || V !== 0) && (i.x = (i.x ?? 0) - N / k[2], i.y = (i.y ?? 0) - V / k[2], await _({ x: N, y: V }) && q(i)), s = requestAnimationFrame(B);
    }
    function U(k) {
      const { nodeLookup: _, multiSelectionActive: $, nodesDraggable: P, transform: N, snapGrid: V, snapToGrid: Z, selectNodesOnDrag: X, onNodeDragStart: T, onSelectionDragStart: Y, unselectNodesAndEdges: ee } = t();
      p = !0, (!X || !E) && !$ && D && (_.get(D)?.selected || ee()), E && X && D && e?.(D);
      const ne = Ai(k.sourceEvent, { transform: N, snapGrid: V, snapToGrid: Z, containerBounds: d });
      if (i = ne, a = u0(_, P, ne, D), a.size > 0 && (n || T || !D && Y)) {
        const [R, j] = Ii({
          nodeId: D,
          dragItems: a,
          nodeLookup: _
        });
        n?.(k.sourceEvent, a, R, j), T?.(k.sourceEvent, R, j), D || Y?.(k.sourceEvent, j);
      }
    }
    const z = Mh().clickDistance(H).on("start", (k) => {
      const { domNode: _, nodeDragThreshold: $, transform: P, snapGrid: N, snapToGrid: V } = t();
      d = _?.getBoundingClientRect() || null, g = !1, h = !1, v = k.sourceEvent, $ === 0 && U(k), i = Ai(k.sourceEvent, { transform: P, snapGrid: N, snapToGrid: V, containerBounds: d }), u = tn(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: _, transform: $, snapGrid: P, snapToGrid: N, nodeDragThreshold: V, nodeLookup: Z } = t(), X = Ai(k.sourceEvent, { transform: $, snapGrid: P, snapToGrid: N, containerBounds: d });
      if (v = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      D && !Z.has(D)) && (g = !0), !g) {
        if (!l && _ && p && (l = !0, B()), !p) {
          const T = X.xSnapped - (i.x ?? 0), Y = X.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + Y * Y) > V && U(k);
        }
        (i.x !== X.xSnapped || i.y !== X.ySnapped) && a && p && (u = tn(k.sourceEvent, d), q(X));
      }
    }).on("end", (k) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: _, updateNodePositions: $, onNodeDragStop: P, onSelectionDragStop: N } = t();
        if (h && ($(a, !1), h = !1), o || P || !D && N) {
          const [V, Z] = Ii({
            nodeId: D,
            dragItems: a,
            nodeLookup: _,
            dragging: !1
          });
          o?.(k.sourceEvent, a, V, Z), P?.(k.sourceEvent, V, Z), D || N?.(k.sourceEvent, Z);
        }
      }
    }).filter((k) => {
      const _ = k.target;
      return !k.button && (!C || !al(_, `.${C}`, S)) && (!x || al(_, x, S));
    });
    f.call(z);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function f0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    to(o, Er(i)) > 0 && r.push(i);
  return r;
}
const p0 = 250;
function g0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = f0(e, n, t + p0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: p } = no(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
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
function yc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...no(s, l, l.position, !0) } : l;
}
function wc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function h0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const bc = () => !0;
function v0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: v, onConnectEnd: w, isValidConnection: b = bc, onReconnectEnd: C, updateConnection: x, getTransform: S, getFromHandle: E, autoPanSpeed: D, dragThreshold: H = 1, handleDomNode: q }) {
  const B = cc(e.target);
  let U = 0, z;
  const { x: k, y: _ } = tn(e), $ = wc(i, q), P = a?.getBoundingClientRect();
  let N = !1;
  if (!P || !$)
    return;
  const V = yc(o, $, r, l, t);
  if (!V)
    return;
  let Z = tn(e, P), X = !1, T = null, Y = !1, ee = null;
  function ne() {
    if (!d || !P)
      return;
    const [we, re] = sc(Z, P, D);
    f({ x: we, y: re }), U = requestAnimationFrame(ne);
  }
  const R = {
    ...V,
    nodeId: o,
    type: $,
    position: V.position
  }, j = l.get(o);
  let W = {
    inProgress: !0,
    isValid: null,
    from: no(j, R, ve.Left, !0),
    fromHandle: R,
    fromPosition: R.position,
    fromNode: j,
    to: Z,
    toHandle: null,
    toPosition: Fa[R.position],
    toNode: null
  };
  function ie() {
    N = !0, x(W), h?.(e, { nodeId: o, handleId: r, handleType: $ });
  }
  H === 0 && ie();
  function G(we) {
    if (!N) {
      const { x: de, y: fe } = tn(we), le = de - k, Ne = fe - _;
      if (!(le * le + Ne * Ne > H * H))
        return;
      ie();
    }
    if (!E() || !R) {
      me(we);
      return;
    }
    const re = S();
    Z = tn(we, P), z = g0(bo(Z, re, !1, [1, 1]), n, l, R), X || (ne(), X = !0);
    const Q = xc(we, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: B,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    ee = Q.handleDomNode, T = Q.connection, Y = h0(!!z, Q.isValid);
    const te = {
      // from stays the same
      ...W,
      isValid: Y,
      to: Q.toHandle && Y ? ii({ x: Q.toHandle.x, y: Q.toHandle.y }, re) : Z,
      toHandle: Q.toHandle,
      toPosition: Y && Q.toHandle ? Q.toHandle.position : Fa[R.position],
      toNode: Q.toHandle ? l.get(Q.toHandle.nodeId) : null
    };
    Y && z && W.toHandle && te.toHandle && W.toHandle.type === te.toHandle.type && W.toHandle.nodeId === te.toHandle.nodeId && W.toHandle.id === te.toHandle.id && W.to.x === te.to.x && W.to.y === te.to.y || (x(te), W = te);
  }
  function me(we) {
    if (N) {
      (z || ee) && T && Y && v?.(T);
      const { inProgress: re, ...Q } = W, te = {
        ...Q,
        toPosition: W.toHandle ? W.toPosition : null
      };
      w?.(we, te), i && C?.(we, te);
    }
    g(), cancelAnimationFrame(U), X = !1, Y = !1, T = null, ee = null, B.removeEventListener("mousemove", G), B.removeEventListener("mouseup", me), B.removeEventListener("touchmove", G), B.removeEventListener("touchend", me);
  }
  B.addEventListener("mousemove", G), B.addEventListener("mouseup", me), B.addEventListener("touchmove", G), B.addEventListener("touchend", me);
}
function xc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = bc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = tn(e), v = s.elementFromPoint(g, h), w = v?.classList.contains(`${a}-flow__handle`) ? v : f, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const C = wc(void 0, w), x = w.getAttribute("data-nodeid"), S = w.getAttribute("data-handleid"), E = w.classList.contains("connectable"), D = w.classList.contains("connectableend");
    if (!x || !C)
      return b;
    const H = {
      source: p ? x : r,
      sourceHandle: p ? S : o,
      target: p ? r : x,
      targetHandle: p ? o : S
    };
    b.connection = H;
    const q = E && D && (n === _r.Strict ? p && C === "source" || !p && C === "target" : x !== r || S !== o);
    b.isValid = q && u(H), b.toHandle = yc(x, C, S, d, n, !0);
  }
  return b;
}
const ll = {
  onPointerDown: v0,
  isValid: xc
};
function m0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Mt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const S = n(), E = x.sourceEvent.ctrlKey && Yn() ? 10 : 1, D = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, H = S[2] * Math.pow(2, D * E);
      t.scaleTo(H);
    };
    let v = [0, 0];
    const w = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (v = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, b = (x) => {
      const S = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const E = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], D = [E[0] - v[0], E[1] - v[1]];
      v = E;
      const H = r() * Math.max(S[2], Math.log(S[2])) * (g ? -1 : 1), q = {
        x: S[0] - D[0] * H,
        y: S[1] - D[1] * H
      }, B = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: q.x,
        y: q.y,
        zoom: S[2]
      }, B, a);
    }, C = tc().on("start", w).on("zoom", p ? b : null).on("zoom.wheel", f ? h : null);
    o.call(C, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: At
  };
}
const y0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, _i = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), qi = ({ x: e, y: t, zoom: n }) => $i.translate(e, t).scale(n), dr = (e, t) => e.target.closest(`.${t}`), $c = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), w0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Zi = (e, t = 0, n = w0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Cc = (e) => {
  const t = e.ctrlKey && Yn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function b0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (dr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = At(d), b = Cc(d), C = p * Math.pow(2, b);
      r.scaleTo(n, C, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === sn.Vertical ? 0 : d.deltaX * f, h = o === sn.Horizontal ? 0 : d.deltaY * f;
    !Yn() && d.shiftKey && o !== sn.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const v = _i(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, v)), e.isPanScrolling && (l?.(d, v), e.panScrollTimeout = setTimeout(() => {
      u?.(d, v), e.isPanScrolling = !1;
    }, 150));
  };
}
function x0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = dr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function $0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = _i(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function C0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && $c(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, _i(i.transform));
  };
}
function k0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && $c(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && y0(e.prevViewport, s.transform))) {
      const a = _i(s.transform);
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
function _0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (dr(d, `${u}-flow__node`) || dr(d, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || dr(d, a) && d.type === "wheel" || dr(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!p && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && g;
  };
}
function S0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = tc().clickDistance(!mn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Mt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: Sr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), v = g.on("dblclick.zoom");
  f.wheelDelta(Cc);
  function w(k, _) {
    return g ? new Promise(($) => {
      f?.interpolate(_?.interpolate === "linear" ? Kr : qo).transform(Zi(g, _?.duration, _?.ease, () => $(!0)), k);
    }) : Promise.resolve(!1);
  }
  function b({ noWheelClassName: k, noPanClassName: _, onPaneContextMenu: $, userSelectionActive: P, panOnScroll: N, panOnDrag: V, panOnScrollMode: Z, panOnScrollSpeed: X, preventScrolling: T, zoomOnPinch: Y, zoomOnScroll: ee, zoomOnDoubleClick: ne, zoomActivationKeyPressed: R, lib: j, onTransformChange: W }) {
    P && !d.isZoomingOrPanning && C();
    const ie = N && !R && !P ? b0({
      zoomPanValues: d,
      noWheelClassName: k,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: Z,
      panOnScrollSpeed: X,
      zoomOnPinch: Y,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : x0({
      noWheelClassName: k,
      preventScrolling: T,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", ie, { passive: !1 }), !P) {
      const me = $0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", me);
      const we = C0({
        zoomPanValues: d,
        panOnDrag: V,
        onPaneContextMenu: !!$,
        onPanZoom: s,
        onTransformChange: W
      });
      f.on("zoom", we);
      const re = k0({
        zoomPanValues: d,
        panOnDrag: V,
        panOnScroll: N,
        onPaneContextMenu: $,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", re);
    }
    const G = _0({
      zoomActivationKeyPressed: R,
      panOnDrag: V,
      zoomOnScroll: ee,
      panOnScroll: N,
      zoomOnDoubleClick: ne,
      zoomOnPinch: Y,
      userSelectionActive: P,
      noPanClassName: _,
      noWheelClassName: k,
      lib: j
    });
    f.filter(G), ne ? g.on("dblclick.zoom", v) : g.on("dblclick.zoom", null);
  }
  function C() {
    f.on("zoom", null);
  }
  async function x(k, _, $) {
    const P = qi(k), N = f?.constrain()(P, _, $);
    return N && await w(N), new Promise((V) => V(N));
  }
  async function S(k, _) {
    const $ = qi(k);
    return await w($, _), new Promise((P) => P($));
  }
  function E(k) {
    if (g) {
      const _ = qi(k), $ = g.property("__zoom");
      ($.k !== k.zoom || $.x !== k.x || $.y !== k.y) && f?.transform(g, _, null, { sync: !0 });
    }
  }
  function D() {
    const k = g ? ec(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: k.x, y: k.y, zoom: k.k };
  }
  function H(k, _) {
    return g ? new Promise(($) => {
      f?.interpolate(_?.interpolate === "linear" ? Kr : qo).scaleTo(Zi(g, _?.duration, _?.ease, () => $(!0)), k);
    }) : Promise.resolve(!1);
  }
  function q(k, _) {
    return g ? new Promise(($) => {
      f?.interpolate(_?.interpolate === "linear" ? Kr : qo).scaleBy(Zi(g, _?.duration, _?.ease, () => $(!0)), k);
    }) : Promise.resolve(!1);
  }
  function B(k) {
    f?.scaleExtent(k);
  }
  function U(k) {
    f?.translateExtent(k);
  }
  function z(k) {
    const _ = !mn(k) || k < 0 ? 0 : k;
    f?.clickDistance(_);
  }
  return {
    update: b,
    destroy: C,
    setViewport: S,
    setViewportConstrained: x,
    getViewport: D,
    scaleTo: H,
    scaleBy: q,
    setScaleExtent: B,
    setTranslateExtent: U,
    syncViewport: E,
    setClickDistance: z
  };
}
var ul;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ul || (ul = {}));
var E0 = /* @__PURE__ */ J("<div><!></div>");
function On(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => ve.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), u = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), p = y(t, "onconnect", 7), f = y(t, "ondisconnect", 7), g = y(t, "children", 7), h = /* @__PURE__ */ Ve(t, [
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
  const v = Vn("svelteflow__node_id"), w = Vn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ L(() => r() === "target"), C = /* @__PURE__ */ L(() => a() !== void 0 ? a() : w.value), x = Wt(), S = /* @__PURE__ */ L(() => x.ariaLabelConfig), E = null;
  ru(() => {
    if (p() || f()) {
      x.edges;
      let T = x.connectionLookup.get(`${v}-${r()}${n() ? `-${n()}` : ""}`);
      if (E && !Ev(T, E)) {
        const Y = T ?? /* @__PURE__ */ new Map();
        Ga(E, Y, f()), Ga(Y, E, p());
      }
      E = new Map(T);
    }
  });
  let D = /* @__PURE__ */ L(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: T, toHandle: Y, isValid: ee } = x.connection, ne = T && T.nodeId === v && T.type === r() && T.id === n(), R = Y && Y.nodeId === v && Y.type === r() && Y.id === n(), j = x.connectionMode === _r.Strict ? T?.type !== r() : v !== T?.nodeId || n() !== T?.id;
    return [
      !0,
      ne,
      R,
      j,
      R && ee
    ];
  }), H = /* @__PURE__ */ L(() => ao(c(D), 5)), q = /* @__PURE__ */ L(() => c(H)[0]), B = /* @__PURE__ */ L(() => c(H)[1]), U = /* @__PURE__ */ L(() => c(H)[2]), z = /* @__PURE__ */ L(() => c(H)[3]), k = /* @__PURE__ */ L(() => c(H)[4]);
  function _(T) {
    const Y = x.onbeforeconnect ? x.onbeforeconnect(T) : T;
    Y && (x.addEdge(Y), x.onconnect?.(T));
  }
  function $(T) {
    const Y = fc(T);
    T.currentTarget && (Y && T.button === 0 || !Y) && ll.onPointerDown(T, {
      handleId: n(),
      nodeId: v,
      isTarget: c(b),
      connectionRadius: x.connectionRadius,
      domNode: x.domNode,
      nodeLookup: x.nodeLookup,
      connectionMode: x.connectionMode,
      lib: "svelte",
      autoPanOnConnect: x.autoPanOnConnect,
      flowId: x.flowId,
      isValidConnection: d() ?? x.isValidConnection,
      updateConnection: x.updateConnection,
      cancelConnection: x.cancelConnection,
      panBy: x.panBy,
      onConnect: _,
      onConnectStart: (ee, ne) => {
        x.onconnectstart?.(ee, {
          nodeId: ne.nodeId,
          handleId: ne.handleId,
          handleType: ne.handleType
        });
      },
      onConnectEnd: (ee, ne) => {
        x.onconnectend?.(ee, ne);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold,
      handleDomNode: T.currentTarget
    });
  }
  function P(T) {
    if (!v || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(T, { nodeId: v, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: v, type: r(), id: n() };
      return;
    }
    const Y = cc(T.target), ee = d() ?? x.isValidConnection, { connectionMode: ne, clickConnectStartHandle: R, flowId: j, nodeLookup: W } = x, { connection: ie, isValid: G } = ll.isValid(T, {
      handle: { nodeId: v, id: n(), type: r() },
      connectionMode: ne,
      fromNodeId: R.nodeId,
      fromHandleId: R.id ?? null,
      fromType: R.type,
      isValidConnection: ee,
      flowId: j,
      doc: Y,
      lib: "svelte",
      nodeLookup: W
    });
    G && ie && _(ie);
    const me = structuredClone(zl(x.connection));
    delete me.inProgress, me.toPosition = me.toHandle ? me.toHandle.position : null, x.onclickconnectend?.(T, me), x.clickConnectStartHandle = null;
  }
  var N = {
    get id() {
      return n();
    },
    set id(T = null) {
      n(T), m();
    },
    get type() {
      return r();
    },
    set type(T = "source") {
      r(T), m();
    },
    get position() {
      return o();
    },
    set position(T = ve.Top) {
      o(T), m();
    },
    get style() {
      return i();
    },
    set style(T) {
      i(T), m();
    },
    get class() {
      return s();
    },
    set class(T) {
      s(T), m();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(T) {
      a(T), m();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(T = !0) {
      l(T), m();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(T = !0) {
      u(T), m();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(T) {
      d(T), m();
    },
    get onconnect() {
      return p();
    },
    set onconnect(T) {
      p(T), m();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(T) {
      f(T), m();
    },
    get children() {
      return g();
    },
    set children(T) {
      g(T), m();
    }
  }, V = E0(), Z = () => {
  };
  Ue(
    V,
    (T) => ({
      "data-handleid": n(),
      "data-nodeid": v,
      "data-handlepos": o(),
      "data-id": `${x.flowId ?? ""}-${v ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        x.noDragClass,
        x.noPanClass,
        o(),
        s()
      ],
      onmousedown: $,
      ontouchstart: $,
      onclick: x.clickConnect ? P : void 0,
      onkeypress: Z,
      style: i(),
      role: "button",
      "aria-label": c(S)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [Ln]: T
    }),
    [
      () => ({
        valid: c(k),
        connectingto: c(U),
        connectingfrom: c(B),
        source: !c(b),
        target: c(b),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(C),
        connectionindicator: c(C) && (!c(q) || c(z)) && (c(q) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var X = I(V);
  return Ye(X, () => g() ?? at), A(V), M(e, V), ce(N);
}
se(
  On,
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
var N0 = /* @__PURE__ */ J("<!> <!>", 1);
function ra(e, t) {
  ue(t, !0);
  let n = y(t, "data", 7), r = y(t, "targetPosition", 23, () => ve.Top), o = y(t, "sourcePosition", 23, () => ve.Bottom);
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
    set targetPosition(d = ve.Top) {
      r(d), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = ve.Bottom) {
      o(d), m();
    }
  }, s = N0(), a = oe(s);
  On(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = O(a), u = O(l);
  return On(u, {
    type: "source",
    get position() {
      return o();
    }
  }), xe(() => Ae(l, ` ${n()?.label ?? ""} `)), M(e, s), ce(i);
}
se(ra, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var P0 = /* @__PURE__ */ J(" <!>", 1);
function kc(e, t) {
  ue(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "sourcePosition", 23, () => ve.Bottom);
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
    set sourcePosition(l = ve.Bottom) {
      r(l), m();
    }
  };
  he();
  var i = P0(), s = oe(i), a = O(s);
  return On(a, {
    type: "source",
    get position() {
      return r();
    }
  }), xe(() => Ae(s, `${n()?.label ?? ""} `)), M(e, i), ce(o);
}
se(kc, { data: {}, sourcePosition: {} }, [], [], !0);
var L0 = /* @__PURE__ */ J(" <!>", 1);
function _c(e, t) {
  ue(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "targetPosition", 23, () => ve.Top);
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
    set targetPosition(l = ve.Top) {
      r(l), m();
    }
  };
  he();
  var i = L0(), s = oe(i), a = O(s);
  return On(a, {
    type: "target",
    get position() {
      return r();
    }
  }), xe(() => Ae(s, `${n()?.label ?? ""} `)), M(e, i), ce(o);
}
se(_c, { data: {}, targetPosition: {} }, [], [], !0);
function Sc(e, t) {
}
se(Sc, {}, [], [], !0);
function Ri(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Ec(e, t) {
  const n = /* @__PURE__ */ L(Wt), r = /* @__PURE__ */ L(() => c(n).domNode);
  let o;
  return c(r) ? Ri(e, c(r), t) : o = Vs(() => {
    Xe(() => {
      Ri(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Ri(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Nc() {
  let e = /* @__PURE__ */ Se(typeof window > "u");
  if (c(e)) {
    const t = Vs(() => {
      Xe(() => {
        F(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const cl = (e) => Pv(e), D0 = (e) => rc(e);
function cn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const si = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var H0 = /* @__PURE__ */ J("<div><!></div>");
const M0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function Pc(e, t) {
  ue(t, !0), Me(e, M0);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), u = y(t, "children", 7), d = /* @__PURE__ */ Ve(t, [
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
  const p = Wt(), f = Vn("svelteflow__edge_id");
  let g = /* @__PURE__ */ L(() => p.visible.edges.get(f)?.zIndex);
  var h = {
    get x() {
      return n();
    },
    set x(C = 0) {
      n(C), m();
    },
    get y() {
      return r();
    },
    set y(C = 0) {
      r(C), m();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), m();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), m();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(C = !1) {
      s(C), m();
    },
    get transparent() {
      return a();
    },
    set transparent(C = !1) {
      a(C), m();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), m();
    },
    get children() {
      return u();
    },
    set children(C) {
      u(C), m();
    }
  }, v = H0(), w = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  Ue(
    v,
    (C) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [en]: C
    }),
    [
      () => ({
        display: Nc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: cn(o()),
        height: cn(i()),
        "z-index": c(g)
      })
    ],
    void 0,
    "svelte-w2n27y"
  );
  var b = I(v);
  return Ye(b, () => u() ?? at), A(v), ct(v, (C, x) => Ec?.(C, x), () => "edge-labels"), M(e, v), ce(h);
}
se(
  Pc,
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
var T0 = /* @__PURE__ */ ge("<path></path>"), V0 = /* @__PURE__ */ ge('<path fill="none"></path><!><!>', 1);
function xo(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "style", 7), p = y(t, "interactionWidth", 7, 20), f = y(t, "class", 7), g = /* @__PURE__ */ Ve(t, [
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
  var h = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), m();
    },
    get path() {
      return r();
    },
    set path(E) {
      r(E), m();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), m();
    },
    get labelX() {
      return i();
    },
    set labelX(E) {
      i(E), m();
    },
    get labelY() {
      return s();
    },
    set labelY(E) {
      s(E), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(E) {
      a(E), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(E) {
      l(E), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(E) {
      u(E), m();
    },
    get style() {
      return d();
    },
    set style(E) {
      d(E), m();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(E = 20) {
      p(E), m();
    },
    get class() {
      return f();
    },
    set class(E) {
      f(E), m();
    }
  }, v = V0(), w = oe(v), b = O(w);
  {
    var C = (E) => {
      var D = T0();
      Ue(D, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), M(E, D);
    };
    ae(b, (E) => {
      p() > 0 && E(C);
    });
  }
  var x = O(b);
  {
    var S = (E) => {
      Pc(E, {
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
        children: (D, H) => {
          he();
          var q = Ce();
          xe(() => Ae(q, o())), M(D, q);
        },
        $$slots: { default: !0 }
      });
    };
    ae(x, (E) => {
      o() && E(S);
    });
  }
  return xe(() => {
    ye(w, "id", n()), ye(w, "d", r()), Ct(w, 0, _n(["svelte-flow__edge-path", f()])), ye(w, "marker-start", l()), ye(w, "marker-end", u()), lt(w, d());
  }), M(e, v), ce(h);
}
se(
  xo,
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
function oa(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), u = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), p = y(t, "sourceY", 7), f = y(t, "style", 7), g = y(t, "targetPosition", 7), h = y(t, "targetX", 7), v = y(t, "targetY", 7), w = /* @__PURE__ */ L(() => pc({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: v(),
    sourcePosition: u(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ L(() => ao(c(w), 3)), C = /* @__PURE__ */ L(() => c(b)[0]), x = /* @__PURE__ */ L(() => c(b)[1]), S = /* @__PURE__ */ L(() => c(b)[2]);
  var E = {
    get id() {
      return n();
    },
    set id(D) {
      n(D), m();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(D) {
      r(D), m();
    },
    get label() {
      return o();
    },
    set label(D) {
      o(D), m();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(D) {
      i(D), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(D) {
      s(D), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(D) {
      a(D), m();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(D) {
      l(D), m();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(D) {
      u(D), m();
    },
    get sourceX() {
      return d();
    },
    set sourceX(D) {
      d(D), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(D) {
      p(D), m();
    },
    get style() {
      return f();
    },
    set style(D) {
      f(D), m();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(D) {
      g(D), m();
    },
    get targetX() {
      return h();
    },
    set targetX(D) {
      h(D), m();
    },
    get targetY() {
      return v();
    },
    set targetY(D) {
      v(D), m();
    }
  };
  return xo(e, {
    get id() {
      return n();
    },
    get path() {
      return c(C);
    },
    get labelX() {
      return c(x);
    },
    get labelY() {
      return c(S);
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
  }), ce(E);
}
se(
  oa,
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
function Lc(e, t) {
  ue(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), u = y(t, "sourceX", 7), d = y(t, "sourceY", 7), p = y(t, "targetPosition", 7), f = y(t, "targetX", 7), g = y(t, "targetY", 7), h = /* @__PURE__ */ L(() => Qs({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), v = /* @__PURE__ */ L(() => ao(c(h), 3)), w = /* @__PURE__ */ L(() => c(v)[0]), b = /* @__PURE__ */ L(() => c(v)[1]), C = /* @__PURE__ */ L(() => c(v)[2]);
  var x = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(S) {
      n(S), m();
    },
    get label() {
      return r();
    },
    set label(S) {
      r(S), m();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(S) {
      o(S), m();
    },
    get style() {
      return i();
    },
    set style(S) {
      i(S), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(S) {
      s(S), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(S) {
      a(S), m();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(S) {
      l(S), m();
    },
    get sourceX() {
      return u();
    },
    set sourceX(S) {
      u(S), m();
    },
    get sourceY() {
      return d();
    },
    set sourceY(S) {
      d(S), m();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(S) {
      p(S), m();
    },
    get targetX() {
      return f();
    },
    set targetX(S) {
      f(S), m();
    },
    get targetY() {
      return g();
    },
    set targetY(S) {
      g(S), m();
    }
  };
  return xo(e, {
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
  }), ce(x);
}
se(
  Lc,
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
function Dc(e, t) {
  ue(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), p = y(t, "style", 7), f = /* @__PURE__ */ L(() => hc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ L(() => ao(c(f), 3)), h = /* @__PURE__ */ L(() => c(g)[0]), v = /* @__PURE__ */ L(() => c(g)[1]), w = /* @__PURE__ */ L(() => c(g)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), m();
    },
    get targetX() {
      return o();
    },
    set targetX(C) {
      o(C), m();
    },
    get targetY() {
      return i();
    },
    set targetY(C) {
      i(C), m();
    },
    get label() {
      return s();
    },
    set label(C) {
      s(C), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), m();
    },
    get style() {
      return p();
    },
    set style(C) {
      p(C), m();
    }
  };
  return xo(e, {
    get path() {
      return c(h);
    },
    get labelX() {
      return c(v);
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
      return p();
    }
  }), ce(b);
}
se(
  Dc,
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
function Hc(e, t) {
  ue(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), u = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), p = y(t, "markerEnd", 7), f = y(t, "interactionWidth", 7), g = y(t, "style", 7), h = /* @__PURE__ */ L(() => Qs({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), v = /* @__PURE__ */ L(() => ao(c(h), 3)), w = /* @__PURE__ */ L(() => c(v)[0]), b = /* @__PURE__ */ L(() => c(v)[1]), C = /* @__PURE__ */ L(() => c(v)[2]);
  var x = {
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
    get sourcePosition() {
      return o();
    },
    set sourcePosition(S) {
      o(S), m();
    },
    get targetX() {
      return i();
    },
    set targetX(S) {
      i(S), m();
    },
    get targetY() {
      return s();
    },
    set targetY(S) {
      s(S), m();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(S) {
      a(S), m();
    },
    get label() {
      return l();
    },
    set label(S) {
      l(S), m();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(S) {
      u(S), m();
    },
    get markerStart() {
      return d();
    },
    set markerStart(S) {
      d(S), m();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(S) {
      p(S), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(S) {
      f(S), m();
    },
    get style() {
      return g();
    },
    set style(S) {
      g(S), m();
    }
  };
  return xo(e, {
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
      return p();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return g();
    }
  }), ce(x);
}
se(
  Hc,
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
class O0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = Wf(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const z0 = /\(.+\)/, A0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class I0 extends O0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = z0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => A0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ji(o, "change", i)
    );
  }
}
function q0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Us(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function dl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: v, transform: w, width: b, height: C } = e;
      if (Bv({
        sourceNode: p,
        targetNode: f,
        width: b,
        height: C,
        transform: w
      }))
        v.set(p.id, p), v.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && p == g.sourceNode && f == g.targetNode) {
      u.set(d.id, g);
      continue;
    }
    const h = Gv({
      id: d.id,
      sourceNode: p,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    h && u.set(d.id, {
      ...n,
      ...d,
      ...h,
      zIndex: Rv({
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
const Mc = {
  input: kc,
  output: _c,
  default: ra,
  group: Sc
}, Tc = {
  straight: Dc,
  smoothstep: Lc,
  default: oa,
  step: Hc
};
function Z0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = yo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Js(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function R0(e) {
  class t {
    #t = /* @__PURE__ */ L(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      F(this.#t, r);
    }
    #e = /* @__PURE__ */ Se(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      F(this.#e, r);
    }
    #n = /* @__PURE__ */ Se(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      F(this.#n, r);
    }
    #o = /* @__PURE__ */ Se(e.width ?? 0);
    get width() {
      return c(this.#o);
    }
    set width(r) {
      F(this.#o, r);
    }
    #c = /* @__PURE__ */ Se(e.height ?? 0);
    get height() {
      return c(this.#c);
    }
    set height(r) {
      F(this.#c, r);
    }
    #i = /* @__PURE__ */ L(() => {
      const r = t0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return c(this.#i);
    }
    set nodesInitialized(r) {
      F(this.#i, r);
    }
    #a = /* @__PURE__ */ L(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      F(this.#a, r);
    }
    #s = /* @__PURE__ */ L(() => (a0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#s);
    }
    set _edges(r) {
      F(this.#s, r);
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
    #r = /* @__PURE__ */ L(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#r);
    }
    set selectedNodes(r) {
      F(this.#r, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ L(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#l);
    }
    set selectedEdges(r) {
      F(this.#l, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #d = /* @__PURE__ */ L(() => {
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
      const g = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: h, width: v, height: w } = this, b = [h.x, h.y, h.zoom];
        p = q0(s, b, v, w), f = dl({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: b,
          width: v,
          height: w
        });
      } else
        p = this.nodeLookup, f = dl(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#d);
    }
    set visible(r) {
      F(this.#d, r);
    }
    #f = /* @__PURE__ */ L(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#f);
    }
    set nodesDraggable(r) {
      F(this.#f, r);
    }
    #g = /* @__PURE__ */ L(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#g);
    }
    set nodesConnectable(r) {
      F(this.#g, r);
    }
    #u = /* @__PURE__ */ L(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#u);
    }
    set elementsSelectable(r) {
      F(this.#u, r);
    }
    #p = /* @__PURE__ */ L(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      F(this.#p, r);
    }
    #h = /* @__PURE__ */ L(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#h);
    }
    set edgesFocusable(r) {
      F(this.#h, r);
    }
    #v = /* @__PURE__ */ L(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      F(this.#v, r);
    }
    #m = /* @__PURE__ */ L(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      F(this.#m, r);
    }
    #y = /* @__PURE__ */ L(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      F(this.#y, r);
    }
    #w = /* @__PURE__ */ L(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      F(this.#w, r);
    }
    #b = /* @__PURE__ */ L(() => e.props.nodeExtent ?? us);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      F(this.#b, r);
    }
    #x = /* @__PURE__ */ L(() => e.props.translateExtent ?? us);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      F(this.#x, r);
    }
    #$ = /* @__PURE__ */ L(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#$);
    }
    set defaultEdgeOptions(r) {
      F(this.#$, r);
    }
    #C = /* @__PURE__ */ L(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      F(this.#C, r);
    }
    #k = /* @__PURE__ */ L(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      F(this.#k, r);
    }
    #_ = /* @__PURE__ */ L(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      F(this.#_, r);
    }
    #S = /* @__PURE__ */ L(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      F(this.#S, r);
    }
    #E = /* @__PURE__ */ L(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      F(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ L(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      F(this.#N, r);
    }
    #P = /* @__PURE__ */ Se(!1);
    get dragging() {
      return c(this.#P);
    }
    set dragging(r) {
      F(this.#P, r);
    }
    #L = /* @__PURE__ */ Se(null);
    get selectionRect() {
      return c(this.#L);
    }
    set selectionRect(r) {
      F(this.#L, r);
    }
    #D = /* @__PURE__ */ Se(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      F(this.#D, r);
    }
    #H = /* @__PURE__ */ Se(!1);
    get multiselectionKeyPressed() {
      return c(this.#H);
    }
    set multiselectionKeyPressed(r) {
      F(this.#H, r);
    }
    #M = /* @__PURE__ */ Se(!1);
    get deleteKeyPressed() {
      return c(this.#M);
    }
    set deleteKeyPressed(r) {
      F(this.#M, r);
    }
    #T = /* @__PURE__ */ Se(!1);
    get panActivationKeyPressed() {
      return c(this.#T);
    }
    set panActivationKeyPressed(r) {
      F(this.#T, r);
    }
    #V = /* @__PURE__ */ Se(!1);
    get zoomActivationKeyPressed() {
      return c(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      F(this.#V, r);
    }
    #O = /* @__PURE__ */ Se(null);
    get selectionRectMode() {
      return c(this.#O);
    }
    set selectionRectMode(r) {
      F(this.#O, r);
    }
    #z = /* @__PURE__ */ Se("");
    get ariaLiveMessage() {
      return c(this.#z);
    }
    set ariaLiveMessage(r) {
      F(this.#z, r);
    }
    #A = /* @__PURE__ */ L(() => e.props.selectionMode ?? ri.Partial);
    get selectionMode() {
      return c(this.#A);
    }
    set selectionMode(r) {
      F(this.#A, r);
    }
    #I = /* @__PURE__ */ L(() => ({ ...Mc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#I);
    }
    set nodeTypes(r) {
      F(this.#I, r);
    }
    #q = /* @__PURE__ */ L(() => ({ ...Tc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#q);
    }
    set edgeTypes(r) {
      F(this.#q, r);
    }
    #Z = /* @__PURE__ */ L(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#Z);
    }
    set noPanClass(r) {
      F(this.#Z, r);
    }
    #R = /* @__PURE__ */ L(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#R);
    }
    set noDragClass(r) {
      F(this.#R, r);
    }
    #B = /* @__PURE__ */ L(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      F(this.#B, r);
    }
    #K = /* @__PURE__ */ L(() => Iv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#K);
    }
    set ariaLabelConfig(r) {
      F(this.#K, r);
    }
    #X = /* @__PURE__ */ Se(Z0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#X);
    }
    set _viewport(r) {
      F(this.#X, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Se(
      // _connection is viewport independent and originating from XYHandle
      cs
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      F(this.#Y, r);
    }
    #j = /* @__PURE__ */ L(() => this._connection.inProgress ? {
      ...this._connection,
      to: bo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#j);
    }
    set connection(r) {
      F(this.#j, r);
    }
    #W = /* @__PURE__ */ L(() => e.props.connectionMode ?? _r.Strict);
    get connectionMode() {
      return c(this.#W);
    }
    set connectionMode(r) {
      F(this.#W, r);
    }
    #F = /* @__PURE__ */ L(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#F);
    }
    set connectionRadius(r) {
      F(this.#F, r);
    }
    #G = /* @__PURE__ */ L(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      F(this.#G, r);
    }
    #U = /* @__PURE__ */ L(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#U);
    }
    set selectNodesOnDrag(r) {
      F(this.#U, r);
    }
    #J = /* @__PURE__ */ L(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      F(this.#J, r);
    }
    #Q = /* @__PURE__ */ L(() => Uv(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#Q);
    }
    set markers(r) {
      F(this.#Q, r);
    }
    #ee = /* @__PURE__ */ L(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      F(this.#ee, r);
    }
    #te = /* @__PURE__ */ L(() => e.props.onflowerror ?? Vv);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      F(this.#te, r);
    }
    #ne = /* @__PURE__ */ L(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      F(this.#ne, r);
    }
    #re = /* @__PURE__ */ L(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      F(this.#re, r);
    }
    #oe = /* @__PURE__ */ L(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      F(this.#oe, r);
    }
    #ie = /* @__PURE__ */ L(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      F(this.#ie, r);
    }
    #se = /* @__PURE__ */ L(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      F(this.#se, r);
    }
    #ae = /* @__PURE__ */ L(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      F(this.#ae, r);
    }
    #le = /* @__PURE__ */ L(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      F(this.#le, r);
    }
    #ue = /* @__PURE__ */ L(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ue);
    }
    set onreconnect(r) {
      F(this.#ue, r);
    }
    #ce = /* @__PURE__ */ L(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ce);
    }
    set onreconnectstart(r) {
      F(this.#ce, r);
    }
    #de = /* @__PURE__ */ L(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      F(this.#de, r);
    }
    #fe = /* @__PURE__ */ L(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      F(this.#fe, r);
    }
    #pe = /* @__PURE__ */ L(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      F(this.#pe, r);
    }
    #ge = /* @__PURE__ */ L(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      F(this.#ge, r);
    }
    #he = /* @__PURE__ */ Se(null);
    get clickConnectStartHandle() {
      return c(this.#he);
    }
    set clickConnectStartHandle(r) {
      F(this.#he, r);
    }
    #ve = /* @__PURE__ */ L(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ve);
    }
    set onselectiondrag(r) {
      F(this.#ve, r);
    }
    #me = /* @__PURE__ */ L(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      F(this.#me, r);
    }
    #ye = /* @__PURE__ */ L(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      F(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Mv(
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
    _prefersDark = new I0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ L(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#we);
    }
    set colorMode(r) {
      F(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = cs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Wt() {
  const e = Vn(ai);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const ai = Symbol();
function Vc(e) {
  const t = R0(e);
  function n(z) {
    t.nodeTypes = {
      ...Mc,
      ...z
    };
  }
  function r(z) {
    t.edgeTypes = {
      ...Tc,
      ...z
    };
  }
  function o(z) {
    t.edges = Yv(z, t.edges);
  }
  const i = (z, k = !1) => {
    t.nodes = t.nodes.map((_) => {
      const $ = z.get(_.id);
      return $ ? { ..._, position: $.position, dragging: k } : _;
    });
  };
  function s(z) {
    const { changes: k, updatedInternals: _ } = i0(z, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!_)
      return;
    e0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const $ = /* @__PURE__ */ new Map();
    for (const P of k) {
      const N = t.nodeLookup.get(P.id)?.internals.userNode;
      if (!N)
        continue;
      const V = { ...N };
      switch (P.type) {
        case "dimensions": {
          const Z = { ...V.measured, ...P.dimensions };
          P.setAttributes && (V.width = P.dimensions?.width ?? V.width, V.height = P.dimensions?.height ?? V.height), V.measured = Z;
          break;
        }
        case "position":
          V.position = P.position ?? V.position;
          break;
      }
      $.set(P.id, V);
    }
    t.nodes = t.nodes.map((P) => $.get(P.id) ?? P);
  }
  function a(z) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = z, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(z, k, _) {
    const $ = typeof _?.zoom < "u" ? _.zoom : t.maxZoom, P = t.panZoom;
    return P ? (await P.setViewport({
      x: t.width / 2 - z * $,
      y: t.height / 2 - k * $,
      zoom: $
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(z, k) {
    const _ = t.panZoom;
    return _ ? _.scaleBy(z, k) : Promise.resolve(!1);
  }
  function d(z) {
    return u(1.2, z);
  }
  function p(z) {
    return u(1 / 1.2, z);
  }
  function f(z) {
    const k = t.panZoom;
    k && (k.setScaleExtent([z, t.maxZoom]), t.minZoom = z);
  }
  function g(z) {
    const k = t.panZoom;
    k && (k.setScaleExtent([t.minZoom, z]), t.maxZoom = z);
  }
  function h(z) {
    const k = t.panZoom;
    k && (k.setTranslateExtent(z), t.translateExtent = z);
  }
  function v(z) {
    t.panZoom?.setClickDistance(z);
  }
  function w(z, k = null) {
    let _ = !1;
    const $ = z.map((P) => (!k || k.has(P.id)) && P.selected ? (_ = !0, { ...P, selected: !1 }) : P);
    return [_, $];
  }
  function b(z) {
    const k = z?.nodes ? new Set(z.nodes.map((Z) => Z.id)) : null, [_, $] = w(t.nodes, k);
    _ && (t.nodes = $);
    const P = z?.edges ? new Set(z.edges.map((Z) => Z.id)) : null, [N, V] = w(t.edges, P);
    N && (t.edges = V);
  }
  function C(z) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((_) => {
      const $ = z.includes(_.id), P = k && _.selected || $;
      if (_.selected !== P) {
        const N = t.nodeLookup.get(_.id);
        return N && (N.selected = P), _.selected = P, { ..._ };
      }
      return _;
    }), k || b({ nodes: [] });
  }
  function x(z) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((_) => {
      const $ = z.includes(_.id), P = k && _.selected || $;
      return _.selected !== P ? { ..._, selected: P } : _;
    }), k || b({ edges: [] });
  }
  function S(z, k, _) {
    const $ = t.nodeLookup.get(z);
    if (!$) {
      console.warn("012", Qr.error012(z));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, $.selected ? (k || $.selected && t.multiselectionKeyPressed) && (b({ nodes: [$], edges: [] }), requestAnimationFrame(() => _?.blur())) : C([z]);
  }
  function E(z) {
    const k = t.edgeLookup.get(z);
    if (!k) {
      console.warn("012", Qr.error012(z));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && b({ nodes: [], edges: [k] }) : x([z]));
  }
  function D(z, k) {
    const { nodeExtent: _, snapGrid: $, nodeOrigin: P, nodeLookup: N, nodesDraggable: V, onerror: Z } = t, X = /* @__PURE__ */ new Map(), T = $?.[0] ?? 5, Y = $?.[1] ?? 5, ee = z.x * T * k, ne = z.y * Y * k;
    for (const R of N.values()) {
      if (!(R.selected && (R.draggable || V && typeof R.draggable > "u")))
        continue;
      let j = {
        x: R.internals.positionAbsolute.x + ee,
        y: R.internals.positionAbsolute.y + ne
      };
      $ && (j = wo(j, $));
      const { position: W, positionAbsolute: ie } = oc({
        nodeId: R.id,
        nextPosition: j,
        nodeLookup: N,
        nodeExtent: _,
        nodeOrigin: P,
        onError: Z
      });
      R.position = W, R.internals.positionAbsolute = ie, X.set(R.id, R);
    }
    i(X);
  }
  function H(z) {
    return s0({
      delta: z,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const q = (z) => {
    t._connection = { ...z };
  };
  function B() {
    t._connection = cs;
  }
  function U() {
    t.resetStoreValues(), b();
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
    setMaxZoom: g,
    setTranslateExtent: h,
    setPaneClickDistance: v,
    unselectNodesAndEdges: b,
    addSelectedNodes: C,
    addSelectedEdges: x,
    handleNodeSelection: S,
    handleEdgeSelection: E,
    moveSelectedNodes: D,
    panBy: H,
    updateConnection: q,
    cancelConnection: B,
    reset: U
  });
}
function B0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = S0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: u,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: p
  }), h = g.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && f([h.x, h.y, h.zoom]), d(g), g.update(t), {
    update(v) {
      g.update(v);
    }
  };
}
var K0 = /* @__PURE__ */ J('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Oc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 23, () => sn.Free), o = y(t, "preventScrolling", 7, !0), i = y(t, "zoomOnScroll", 7, !0), s = y(t, "zoomOnDoubleClick", 7, !0), a = y(t, "zoomOnPinch", 7, !0), l = y(t, "panOnDrag", 7, !0), u = y(t, "panOnScroll", 7, !1), d = y(t, "paneClickDistance", 7, 1), p = y(t, "onmovestart", 7), f = y(t, "onmove", 7), g = y(t, "onmoveend", 7), h = y(t, "oninit", 7), v = y(t, "children", 7), w = /* @__PURE__ */ L(() => n().panActivationKeyPressed || l()), b = /* @__PURE__ */ L(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let x = !1;
  Xe(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var S = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H = sn.Free) {
      r(H), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H = !0) {
      o(H), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H = !0) {
      i(H), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H = !0) {
      s(H), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H = !0) {
      a(H), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H = !0) {
      l(H), m();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(H = !1) {
      u(H), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(H = 1) {
      d(H), m();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(H) {
      p(H), m();
    },
    get onmove() {
      return f();
    },
    set onmove(H) {
      f(H), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(H) {
      g(H), m();
    },
    get oninit() {
      return h();
    },
    set oninit(H) {
      h(H), m();
    },
    get children() {
      return v();
    },
    set children(H) {
      v(H), m();
    }
  }, E = K0(), D = I(E);
  return Ye(D, v), A(E), ct(E, (H, q) => B0?.(H, q), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: C,
    onDraggingChange: (H) => {
      n(n().dragging = H, !0);
    },
    setPanZoomInstance: (H) => {
      n(n().panZoom = H, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(b),
    panOnDrag: c(w),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || sn.Free,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: d(),
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    }
  })), M(e, E), ce(S);
}
se(
  Oc,
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
function fl(e, t) {
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
function gl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var X0 = /* @__PURE__ */ J("<div><!></div>");
function zc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "selectionOnDrag", 7), i = y(t, "onpaneclick", 7), s = y(t, "onpanecontextmenu", 7), a = y(t, "onselectionstart", 7), l = y(t, "onselectionend", 7), u = y(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ L(() => n().panActivationKeyPressed || r()), v = /* @__PURE__ */ L(() => n().selectionKeyPressed || n().selectionRect || o() && c(h) !== !0), w = /* @__PURE__ */ L(() => n().elementsSelectable && (c(v) || n().selectionRectMode === "user")), b = !1;
  function C(_) {
    if (b || n().connection.inProgress) {
      b = !1;
      return;
    }
    i()?.({ event: _ }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(_) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !c(v) || _.button !== 0 || _.target !== d || !p)
      return;
    _.target?.setPointerCapture?.(_.pointerId);
    const { x: $, y: P } = tn(_, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: $, startY: P, x: $, y: P }, !0), a()?.(_);
  }
  function S(_) {
    if (!c(v) || !p || !n().selectionRect)
      return;
    b = !0;
    const $ = tn(_, p), { startX: P = 0, startY: N = 0 } = n().selectionRect, V = {
      ...n().selectionRect,
      x: $.x < P ? $.x : P,
      y: $.y < N ? $.y : N,
      width: Math.abs($.x - P),
      height: Math.abs($.y - N)
    }, Z = f, X = g;
    f = new Set(Us(
      n().nodeLookup,
      V,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === ri.Partial,
      !0
    ).map((Y) => Y.id));
    const T = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const Y of f) {
      const ee = n().connectionLookup.get(Y);
      if (ee)
        for (const { edgeId: ne } of ee.values()) {
          const R = n().edgeLookup.get(ne);
          R && (R.selectable ?? T) && g.add(ne);
        }
    }
    gl(Z, f) || n(n().nodes = n().nodes.map(pl(f)), !0), gl(X, g) || n(n().edges = n().edges.map(pl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = V, !0);
  }
  function E(_) {
    _.button === 0 && (_.target?.releasePointerCapture?.(_.pointerId), !c(v) && n().selectionRectMode === "user" && _.target === d && C?.(_), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (b = !1), l()?.(_));
  }
  const D = (_) => {
    if (Array.isArray(c(h)) && c(h).includes(2)) {
      _.preventDefault();
      return;
    }
    s()?.({ event: _ });
  };
  var H = {
    get store() {
      return n();
    },
    set store(_) {
      n(_), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(_ = !0) {
      r(_), m();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(_) {
      o(_), m();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(_) {
      i(_), m();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(_) {
      s(_), m();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(_) {
      a(_), m();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(_) {
      l(_), m();
    },
    get children() {
      return u();
    },
    set children(_) {
      u(_), m();
    }
  }, q = X0();
  let B;
  var U = /* @__PURE__ */ L(() => c(w) ? void 0 : fl(C, d));
  q.__click = function(..._) {
    c(U)?.apply(this, _);
  }, q.__pointerdown = function(..._) {
    (c(w) ? x : void 0)?.apply(this, _);
  }, q.__pointermove = function(..._) {
    (c(w) ? S : void 0)?.apply(this, _);
  }, q.__pointerup = function(..._) {
    (c(w) ? E : void 0)?.apply(this, _);
  };
  var z = /* @__PURE__ */ L(() => fl(D, d));
  q.__contextmenu = function(..._) {
    c(z)?.apply(this, _);
  };
  var k = I(q);
  return Ye(k, u), A(q), Pt(q, (_) => d = _, () => d), xe((_) => B = Ct(q, 1, "svelte-flow__pane svelte-flow__container", null, B, _), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(v)
    })
  ]), M(e, q), ce(H);
}
kn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
se(
  zc,
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
var Y0 = /* @__PURE__ */ J('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Ac(e, t) {
  ue(t, !0);
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
  }, i = Y0();
  let s;
  var a = I(i);
  return Ye(a, r), A(i), xe((l) => s = lt(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), M(e, i), ce(o);
}
se(Ac, { store: {}, children: {} }, [], [], !0);
function Ic(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = d0({
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
var j0 = /* @__PURE__ */ J('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), W0 = /* @__PURE__ */ J('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const F0 = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function qc(e, t) {
  ue(t, !0), Me(e, F0);
  let n = y(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), m();
    }
  }, o = W0(), i = oe(o), s = I(i, !0);
  A(i);
  var a = O(i, 2), l = I(a, !0);
  A(a);
  var u = O(a, 2);
  {
    var d = (p) => {
      var f = j0(), g = I(f, !0);
      A(f), xe(() => {
        ye(f, "id", `${G0}-${n().flowId}`), Ae(g, n().ariaLiveMessage);
      }), M(p, f);
    };
    ae(u, (p) => {
      n().disableKeyboardA11y || p(d);
    });
  }
  return xe(() => {
    ye(i, "id", `${Zc}-${n().flowId}`), Ae(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ye(a, "id", `${Rc}-${n().flowId}`), Ae(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), M(e, o), ce(r);
}
se(qc, { store: {} }, [], [], !0);
const Zc = "svelte-flow__node-desc", Rc = "svelte-flow__edge-desc", G0 = "svelte-flow__aria-live";
var U0 = /* @__PURE__ */ J("<div><!></div>");
function Bc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), u = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), p = y(t, "onnodepointerleave", 7), f = y(t, "onnodepointermove", 7), g = y(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ L(() => gt(r().data, () => ({}), !0)), v = /* @__PURE__ */ L(() => gt(r().selected, !1)), w = /* @__PURE__ */ L(() => r().draggable), b = /* @__PURE__ */ L(() => r().selectable), C = /* @__PURE__ */ L(() => gt(r().deletable, !0)), x = /* @__PURE__ */ L(() => r().connectable), S = /* @__PURE__ */ L(() => r().focusable), E = /* @__PURE__ */ L(() => gt(r().hidden, !1)), D = /* @__PURE__ */ L(() => gt(r().dragging, !1)), H = /* @__PURE__ */ L(() => gt(r().style, "")), q = /* @__PURE__ */ L(() => r().class), B = /* @__PURE__ */ L(() => gt(r().type, "default")), U = /* @__PURE__ */ L(() => r().parentId), z = /* @__PURE__ */ L(() => r().sourcePosition), k = /* @__PURE__ */ L(() => r().targetPosition), _ = /* @__PURE__ */ L(() => gt(r().measured, () => ({ width: 0, height: 0 }), !0).width), $ = /* @__PURE__ */ L(() => gt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ L(() => r().initialWidth), N = /* @__PURE__ */ L(() => r().initialHeight), V = /* @__PURE__ */ L(() => r().width), Z = /* @__PURE__ */ L(() => r().height), X = /* @__PURE__ */ L(() => r().dragHandle), T = /* @__PURE__ */ L(() => gt(r().internals.z, 0)), Y = /* @__PURE__ */ L(() => r().internals.positionAbsolute.x), ee = /* @__PURE__ */ L(() => r().internals.positionAbsolute.y), ne = /* @__PURE__ */ L(() => r().internals.userNode), { id: R } = r(), j = /* @__PURE__ */ L(() => c(w) ?? n().nodesDraggable), W = /* @__PURE__ */ L(() => c(b) ?? n().elementsSelectable), ie = /* @__PURE__ */ L(() => c(x) ?? n().nodesConnectable), G = /* @__PURE__ */ L(() => lc(r())), me = /* @__PURE__ */ L(() => !!r().internals.handleBounds), we = /* @__PURE__ */ L(() => c(G) && c(me)), re = /* @__PURE__ */ L(() => c(S) ?? n().nodesFocusable);
  function Q(pe) {
    return n().parentLookup.has(pe);
  }
  let te = /* @__PURE__ */ L(() => Q(R)), de = /* @__PURE__ */ Se(null), fe = null, le = c(B), Ne = c(z), $e = c(k), K = /* @__PURE__ */ L(() => n().nodeTypes[c(B)] ?? ra), tt = /* @__PURE__ */ L(() => n().ariaLabelConfig);
  br("svelteflow__node_connectable", {
    get value() {
      return c(ie);
    }
  }), br("svelteflow__node_id", R);
  let He = /* @__PURE__ */ L(() => {
    const pe = c(_) === void 0 ? c(V) ?? c(P) : c(V), Re = c($) === void 0 ? c(Z) ?? c(N) : c(Z);
    if (!(pe === void 0 && Re === void 0 && c(H) === void 0))
      return `${c(H)};${pe ? `width:${cn(pe)};` : ""}${Re ? `height:${cn(Re)};` : ""}`;
  });
  Xe(() => {
    (c(B) !== le || c(z) !== Ne || c(k) !== $e) && c(de) !== null && requestAnimationFrame(() => {
      c(de) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[R, { id: R, nodeElement: c(de), force: !0 }]]));
    }), le = c(B), Ne = c(z), $e = c(k);
  }), Xe(() => {
    o() && (!c(we) || c(de) !== fe) && (fe && o().unobserve(fe), c(de) && o().observe(c(de)), fe = c(de));
  }), vi(() => {
    fe && o()?.unobserve(fe);
  });
  function ze(pe) {
    c(W) && (!n().selectNodesOnDrag || !c(j) || n().nodeDragThreshold > 0) && n().handleNodeSelection(R), s()?.({ node: c(ne), event: pe });
  }
  function Te(pe) {
    if (!(dc(pe) || n().disableKeyboardA11y))
      if (nc.includes(pe.key) && c(W)) {
        const Re = pe.key === "Escape";
        n().handleNodeSelection(R, Re, c(de));
      } else c(j) && r().selected && Object.prototype.hasOwnProperty.call(si, pe.key) && (pe.preventDefault(), n(
        n().ariaLiveMessage = c(tt)["node.a11yDescription.ariaLiveMessage"]({
          direction: pe.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(si[pe.key], pe.shiftKey ? 4 : 1));
  }
  const nt = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(de)?.matches(":focus-visible"))
      return;
    const { width: pe, height: Re, viewport: ot } = n();
    Us(/* @__PURE__ */ new Map([[R, r()]]), { x: 0, y: 0, width: pe, height: Re }, [ot.x, ot.y, ot.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ot.zoom });
  };
  var rt = {
    get store() {
      return n();
    },
    set store(pe) {
      n(pe), m();
    },
    get node() {
      return r();
    },
    set node(pe) {
      r(pe), m();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(pe) {
      o(pe), m();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(pe) {
      i(pe), m();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(pe) {
      s(pe), m();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(pe) {
      a(pe), m();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(pe) {
      l(pe), m();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(pe) {
      u(pe), m();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(pe) {
      d(pe), m();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(pe) {
      p(pe), m();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(pe) {
      f(pe), m();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(pe) {
      g(pe), m();
    }
  }, Dt = _e(), Oe = oe(Dt);
  {
    var We = (pe) => {
      var Re = U0();
      Ue(
        Re,
        (Je, kt) => ({
          "data-id": R,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(B)}`,
            c(q)
          ],
          style: c(He),
          onclick: ze,
          onpointerenter: d() ? (Ke) => d()({ node: c(ne), event: Ke }) : void 0,
          onpointerleave: p() ? (Ke) => p()({ node: c(ne), event: Ke }) : void 0,
          onpointermove: f() ? (Ke) => f()({ node: c(ne), event: Ke }) : void 0,
          oncontextmenu: g() ? (Ke) => g()({ node: c(ne), event: Ke }) : void 0,
          onkeydown: c(re) ? Te : void 0,
          onfocus: c(re) ? nt : void 0,
          tabIndex: c(re) ? 0 : void 0,
          role: r().ariaRole ?? (c(re) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Zc}-${n().flowId}`,
          ...r().domAttributes,
          [Ln]: Je,
          [en]: kt
        }),
        [
          () => ({
            dragging: c(D),
            selected: c(v),
            draggable: c(j),
            connectable: c(ie),
            selectable: c(W),
            nopan: c(j),
            parent: c(te)
          }),
          () => ({
            "z-index": c(T),
            transform: `translate(${c(Y) ?? ""}px, ${c(ee) ?? ""}px)`,
            visibility: c(G) ? "visible" : "hidden"
          })
        ]
      );
      var ot = I(Re);
      Zs(ot, () => c(K), (Je, kt) => {
        kt(Je, {
          get data() {
            return c(h);
          },
          get id() {
            return R;
          },
          get selected() {
            return c(v);
          },
          get selectable() {
            return c(W);
          },
          get deletable() {
            return c(C);
          },
          get sourcePosition() {
            return c(z);
          },
          get targetPosition() {
            return c(k);
          },
          get zIndex() {
            return c(T);
          },
          get dragging() {
            return c(D);
          },
          get draggable() {
            return c(j);
          },
          get dragHandle() {
            return c(X);
          },
          get parentId() {
            return c(U);
          },
          get type() {
            return c(B);
          },
          get isConnectable() {
            return c(ie);
          },
          get positionAbsoluteX() {
            return c(Y);
          },
          get positionAbsoluteY() {
            return c(ee);
          },
          get width() {
            return c(V);
          },
          get height() {
            return c(Z);
          }
        });
      }), A(Re), ct(Re, (Je, kt) => Ic?.(Je, kt), () => ({
        nodeId: R,
        isSelectable: c(W),
        disabled: !c(j),
        handleSelector: c(X),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Je, kt, Ke, mt) => {
          a()?.({ event: Je, targetNode: Ke, nodes: mt });
        },
        onDragStart: (Je, kt, Ke, mt) => {
          l()?.({ event: Je, targetNode: Ke, nodes: mt });
        },
        onDragStop: (Je, kt, Ke, mt) => {
          u()?.({ event: Je, targetNode: Ke, nodes: mt });
        },
        store: n()
      })), Pt(Re, (Je) => F(de, Je), () => c(de)), M(pe, Re);
    };
    ae(Oe, (pe) => {
      c(E) || pe(We);
    });
  }
  return M(e, Dt), ce(rt);
}
se(
  Bc,
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
var J0 = /* @__PURE__ */ J('<div class="svelte-flow__nodes"></div>');
function Kc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), u = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), p = y(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((v) => {
    const w = /* @__PURE__ */ new Map();
    v.forEach((b) => {
      const C = b.target.getAttribute("data-id");
      w.set(C, { id: C, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  vi(() => {
    f?.disconnect();
  });
  var g = {
    get store() {
      return n();
    },
    set store(v) {
      n(v), m();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(v) {
      r(v), m();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(v) {
      o(v), m();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(v) {
      i(v), m();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(v) {
      s(v), m();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(v) {
      a(v), m();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(v) {
      l(v), m();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(v) {
      u(v), m();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(v) {
      d(v), m();
    },
    get onnodedragstop() {
      return p();
    },
    set onnodedragstop(v) {
      p(v), m();
    }
  }, h = J0();
  return pt(h, 21, () => n().visible.nodes.values(), (v) => v.id, (v, w) => {
    Bc(v, {
      get node() {
        return c(w);
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
  }), A(h), M(e, h), ce(g);
}
se(
  Kc,
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
var Q0 = /* @__PURE__ */ ge('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Xc(e, t) {
  ue(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ L(() => n().source), u = /* @__PURE__ */ L(() => n().target), d = /* @__PURE__ */ L(() => n().sourceX), p = /* @__PURE__ */ L(() => n().sourceY), f = /* @__PURE__ */ L(() => n().targetX), g = /* @__PURE__ */ L(() => n().targetY), h = /* @__PURE__ */ L(() => n().sourcePosition), v = /* @__PURE__ */ L(() => n().targetPosition), w = /* @__PURE__ */ L(() => gt(n().animated, !1)), b = /* @__PURE__ */ L(() => gt(n().selected, !1)), C = /* @__PURE__ */ L(() => n().label), x = /* @__PURE__ */ L(() => n().labelStyle), S = /* @__PURE__ */ L(() => gt(n().data, () => ({}), !0)), E = /* @__PURE__ */ L(() => n().style), D = /* @__PURE__ */ L(() => n().interactionWidth), H = /* @__PURE__ */ L(() => gt(n().type, "default")), q = /* @__PURE__ */ L(() => n().sourceHandle), B = /* @__PURE__ */ L(() => n().targetHandle), U = /* @__PURE__ */ L(() => n().markerStart), z = /* @__PURE__ */ L(() => n().markerEnd), k = /* @__PURE__ */ L(() => n().selectable), _ = /* @__PURE__ */ L(() => n().focusable), $ = /* @__PURE__ */ L(() => gt(n().deletable, !0)), P = /* @__PURE__ */ L(() => n().hidden), N = /* @__PURE__ */ L(() => n().zIndex), V = /* @__PURE__ */ L(() => n().class), Z = /* @__PURE__ */ L(() => n().ariaLabel), X = null;
  const { id: T } = n();
  br("svelteflow__edge_id", T);
  let Y = /* @__PURE__ */ L(() => c(k) ?? r().elementsSelectable), ee = /* @__PURE__ */ L(() => c(_) ?? r().edgesFocusable), ne = /* @__PURE__ */ L(() => r().edgeTypes[c(H)] ?? oa), R = /* @__PURE__ */ L(() => c(U) ? `url('#${fs(c(U), r().flowId)}')` : void 0), j = /* @__PURE__ */ L(() => c(z) ? `url('#${fs(c(z), r().flowId)}')` : void 0);
  function W(te) {
    const de = r().edgeLookup.get(T);
    de && (c(Y) && r().handleEdgeSelection(T), o()?.({ event: te, edge: de }));
  }
  function ie(te, de) {
    const fe = r().edgeLookup.get(T);
    fe && de({ event: te, edge: fe });
  }
  function G(te) {
    if (!r().disableKeyboardA11y && nc.includes(te.key) && c(Y)) {
      const { unselectNodesAndEdges: de, addSelectedEdges: fe } = r();
      te.key === "Escape" ? (X?.blur(), de({ edges: [n()] })) : fe([T]);
    }
  }
  var me = {
    get edge() {
      return n();
    },
    set edge(te) {
      n(te), m();
    },
    get store() {
      return r();
    },
    set store(te) {
      r(te), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(te) {
      o(te), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(te) {
      i(te), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(te) {
      s(te), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(te) {
      a(te), m();
    }
  }, we = _e(), re = oe(we);
  {
    var Q = (te) => {
      var de = Q0();
      let fe;
      var le = I(de);
      Ue(
        le,
        ($e) => ({
          class: ["svelte-flow__edge", c(V)],
          "data-id": T,
          onclick: W,
          oncontextmenu: i() ? (K) => {
            ie(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            ie(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            ie(K, a());
          } : void 0,
          "aria-label": c(Z) === null ? void 0 : c(Z) ? c(Z) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(ee) ? `${Rc}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(ee) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(ee) ? G : void 0,
          tabindex: c(ee) ? 0 : void 0,
          ...n().domAttributes,
          [Ln]: $e
        }),
        [
          () => ({
            animated: c(w),
            selected: c(b),
            selectable: c(Y)
          })
        ]
      );
      var Ne = I(le);
      Zs(Ne, () => c(ne), ($e, K) => {
        K($e, {
          get id() {
            return T;
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
            return c(g);
          },
          get sourcePosition() {
            return c(h);
          },
          get targetPosition() {
            return c(v);
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
            return c(x);
          },
          get data() {
            return c(S);
          },
          get style() {
            return c(E);
          },
          get interactionWidth() {
            return c(D);
          },
          get selectable() {
            return c(Y);
          },
          get deletable() {
            return c($);
          },
          get type() {
            return c(H);
          },
          get sourceHandleId() {
            return c(q);
          },
          get targetHandleId() {
            return c(B);
          },
          get markerStart() {
            return c(R);
          },
          get markerEnd() {
            return c(j);
          }
        });
      }), A(le), Pt(le, ($e) => X = $e, () => X), A(de), xe(($e) => fe = lt(de, "", fe, $e), [() => ({ "z-index": c(N) })]), M(te, de);
    };
    ae(re, (te) => {
      c(P) || te(Q);
    });
  }
  return M(e, we), ce(me);
}
se(
  Xc,
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
qf();
var em = /* @__PURE__ */ ge("<defs></defs>");
function Yc(e, t) {
  ue(t, !1);
  const n = Wt();
  ku();
  var r = em();
  pt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    jc(o, Ie(() => c(i)));
  }), A(r), M(e, r), ce();
}
se(Yc, {}, [], [], !0);
var tm = /* @__PURE__ */ ge('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), nm = /* @__PURE__ */ ge('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), rm = /* @__PURE__ */ ge('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function jc(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7), r = y(t, "type", 7), o = y(t, "width", 7, 12.5), i = y(t, "height", 7, 12.5), s = y(t, "markerUnits", 7, "strokeWidth"), a = y(t, "orient", 7, "auto-start-reverse"), l = y(t, "color", 7, "none"), u = y(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(v) {
      n(v), m();
    },
    get type() {
      return r();
    },
    set type(v) {
      r(v), m();
    },
    get width() {
      return o();
    },
    set width(v = 12.5) {
      o(v), m();
    },
    get height() {
      return i();
    },
    set height(v = 12.5) {
      i(v), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(v = "strokeWidth") {
      s(v), m();
    },
    get orient() {
      return a();
    },
    set orient(v = "auto-start-reverse") {
      a(v), m();
    },
    get color() {
      return l();
    },
    set color(v = "none") {
      l(v), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(v) {
      u(v), m();
    }
  }, p = rm(), f = I(p);
  {
    var g = (v) => {
      var w = tm();
      let b;
      xe(
        (C) => {
          ye(w, "stroke-width", u()), b = lt(w, "", b, C);
        },
        [() => ({ stroke: l() })]
      ), M(v, w);
    }, h = (v) => {
      var w = _e(), b = oe(w);
      {
        var C = (x) => {
          var S = nm();
          let E;
          xe(
            (D) => {
              ye(S, "stroke-width", u()), E = lt(S, "", E, D);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), M(x, S);
        };
        ae(
          b,
          (x) => {
            r() === eo.ArrowClosed && x(C);
          },
          !0
        );
      }
      M(v, w);
    };
    ae(f, (v) => {
      r() === eo.Arrow ? v(g) : v(h, !1);
    });
  }
  return A(p), xe(() => {
    ye(p, "id", n()), ye(p, "markerWidth", `${o()}`), ye(p, "markerHeight", `${i()}`), ye(p, "markerUnits", s()), ye(p, "orient", a());
  }), M(e, p), ce(d);
}
se(
  jc,
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
var om = /* @__PURE__ */ J('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Wc(e, t) {
  ue(t, !0);
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
  }, l = om(), u = I(l), d = I(u);
  Yc(d, {}), A(u);
  var p = O(u, 2);
  return pt(p, 17, () => n().visible.edges.values(), (f) => f.id, (f, g) => {
    Xc(f, {
      get edge() {
        return c(g);
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
      set store(h) {
        n(h);
      }
    });
  }), A(l), M(e, l), ce(a);
}
se(
  Wc,
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
var im = /* @__PURE__ */ J('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const sm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ia(e, t) {
  ue(t, !0), Me(e, sm);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7, 0), i = y(t, "height", 7, 0), s = y(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(p = 0) {
      n(p), m();
    },
    get y() {
      return r();
    },
    set y(p = 0) {
      r(p), m();
    },
    get width() {
      return o();
    },
    set width(p = 0) {
      o(p), m();
    },
    get height() {
      return i();
    },
    set height(p = 0) {
      i(p), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(p = !0) {
      s(p), m();
    }
  }, l = _e(), u = oe(l);
  {
    var d = (p) => {
      var f = im();
      let g;
      xe((h) => g = lt(f, "", g, h), [
        () => ({
          width: typeof o() == "string" ? o() : cn(o()),
          height: typeof i() == "string" ? i() : cn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), M(p, f);
    };
    ae(u, (p) => {
      s() && p(d);
    });
  }
  return M(e, l), ce(a);
}
se(ia, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function am(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function lm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var um = /* @__PURE__ */ J("<div><!></div>");
const cm = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Fc(e, t) {
  ue(t, !0), Me(e, cm);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Se(void 0);
  Xe(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ L(() => n().selectionRectMode === "nodes" ? (n().nodes, yo(n().nodeLookup, { filter: (v) => !!v.selected })) : null);
  function d(v) {
    Object.prototype.hasOwnProperty.call(si, v.key) && (v.preventDefault(), n().moveSelectedNodes(si[v.key], v.shiftKey ? 4 : 1));
  }
  var p = {
    get store() {
      return n();
    },
    set store(v) {
      n(v), m();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(v) {
      r(v), m();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(v) {
      o(v), m();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(v) {
      i(v), m();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(v) {
      s(v), m();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(v) {
      a(v), m();
    }
  }, f = _e(), g = oe(f);
  {
    var h = (v) => {
      var w = um();
      w.__contextmenu = [am, n, a], w.__click = [lm, n, s], w.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, x);
      };
      let b;
      var C = I(w);
      ia(C, { width: "100%", height: "100%", x: 0, y: 0 }), A(w), ct(w, (x, S) => Ic?.(x, S), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, S, E, D) => {
          r()?.({ event: x, targetNode: null, nodes: D });
        },
        onDragStart: (x, S, E, D) => {
          o()?.({ event: x, targetNode: null, nodes: D });
        },
        onDragStop: (x, S, E, D) => {
          i()?.({ event: x, targetNode: null, nodes: D });
        }
      })), Pt(w, (x) => F(l, x), () => c(l)), xe(
        (x) => {
          Ct(w, 1, _n(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), ye(w, "role", n().disableKeyboardA11y ? void 0 : "button"), ye(w, "tabindex", n().disableKeyboardA11y ? void 0 : -1), b = lt(w, "", b, x);
        },
        [
          () => ({
            width: cn(c(u).width),
            height: cn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), M(v, w);
    };
    ae(g, (v) => {
      n().selectionRectMode === "nodes" && c(u) && mn(c(u).x) && mn(c(u).y) && v(h);
    });
  }
  return M(e, f), ce(p);
}
kn(["contextmenu", "click", "keydown"]);
se(
  Fc,
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
function dm(e) {
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
function Ut(e, t) {
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
      }, { modifier: f, key: g, callback: h, preventDefault: v, enabled: w } = p;
      if (w) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const C = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const S of C)
            if ((Array.isArray(S) ? S : [S]).reduce(
              (E, D) => E | dm(D),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        v && a.preventDefault();
        const b = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), h?.(b);
      }
    }
  }
  let s;
  return n && (s = Ji(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Ji(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ut() {
  const e = /* @__PURE__ */ L(Wt), t = (i) => {
    const s = cl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Av(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Er(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = it(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && cl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = it(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && D0(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : hl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : hl(c(e).edgeLookup, i),
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
    getViewport: () => zl(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = Js(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = Ja(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Er(p), g = to(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Ja(i) ? i : t(i);
      if (!l)
        return !1;
      const u = to(l, s);
      return a && u > 0 || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Tv({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = it(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = it(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), g = { x: i.x - p, y: i.y - f };
      return bo(g, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = ii(i, [s, a, l]);
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
    getNodesBounds: (i) => Lv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function hl(e, t) {
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
function Gc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => Yn() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => Yn() ? "Meta" : "Control"), { deleteElements: l } = ut();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function p(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function f(w, b) {
    return (Array.isArray(w) ? w : [w]).map((C) => {
      const x = p(C);
      return {
        key: x,
        modifier: d(C),
        enabled: x !== null,
        callback: b
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function h() {
    const w = n().nodes.filter((C) => C.selected), b = n().edges.filter((C) => C.selected);
    l({ nodes: w, edges: b });
  }
  var v = {
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
    set multiSelectionKey(w = Yn() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Yn() ? "Meta" : "Control") {
      a(w), m();
    }
  };
  return $a("blur", yt, g), $a("contextmenu", yt, g), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !dc(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ct(yt, (w, b) => Ut?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ce(v);
}
se(
  Gc,
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
var fm = /* @__PURE__ */ ge('<path fill="none" class="svelte-flow__connection-path"></path>'), pm = /* @__PURE__ */ ge('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Uc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ L(() => {
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
      case hn.Bezier: {
        const [g] = pc(f);
        return g;
      }
      case hn.Straight: {
        const [g] = hc(f);
        return g;
      }
      case hn.Step:
      case hn.SmoothStep: {
        const [g] = Qs({
          ...f,
          borderRadius: r() === hn.Step ? 0 : void 0
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
  }, u = _e(), d = oe(u);
  {
    var p = (f) => {
      var g = pm(), h = I(g), v = I(h);
      {
        var w = (C) => {
          var x = _e(), S = oe(x);
          Zs(S, s, (E, D) => {
            D(E, {});
          }), M(C, x);
        }, b = (C) => {
          var x = fm();
          xe(() => {
            ye(x, "d", c(a)), lt(x, i());
          }), M(C, x);
        };
        ae(v, (C) => {
          s() ? C(w) : C(b, !1);
        });
      }
      A(h), A(g), xe(
        (C) => {
          ye(g, "width", n().width), ye(g, "height", n().height), lt(g, o()), Ct(h, 0, C);
        },
        [
          () => _n([
            "svelte-flow__connection",
            Nv(n().connection.isValid)
          ])
        ]
      ), M(f, g);
    };
    ae(d, (f) => {
      n().connection.inProgress && f(p);
    });
  }
  return M(e, u), ce(l);
}
se(
  Uc,
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
var gm = /* @__PURE__ */ J("<div><!></div>");
function $o(e, t) {
  ue(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ L(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(p = "top-right") {
      n(p), m();
    },
    get style() {
      return r();
    },
    set style(p) {
      r(p), m();
    },
    get class() {
      return o();
    },
    set class(p) {
      o(p), m();
    },
    get children() {
      return i();
    },
    set children(p) {
      i(p), m();
    }
  }, u = gm();
  Ue(u, (p) => ({ class: p, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = I(u);
  return Ye(d, () => i() ?? at), A(u), M(e, u), ce(l);
}
se($o, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var hm = /* @__PURE__ */ J('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Jc(e, t) {
  ue(t, !0);
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
      $o(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var p = hm();
          M(u, p);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return M(e, i), ce(o);
}
se(Jc, { proOptions: {}, position: {} }, [], [], !0);
var vm = /* @__PURE__ */ J("<div><!></div>");
const mm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Qc(e, t) {
  ue(t, !0), Me(e, mm);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), u = y(t, "rest", 7), d = /* @__PURE__ */ L(() => u().class), p = /* @__PURE__ */ L(() => fp(u(), [
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
  function f(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(w);
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
      return u();
    },
    set rest(w) {
      u(w), m();
    }
  }, h = vm();
  Ue(
    h,
    (w) => ({
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
      [en]: w
    }),
    [
      () => ({ width: cn(n()), height: cn(r()) })
    ],
    void 0,
    "svelte-12wlba6"
  );
  var v = I(h);
  return Ye(v, () => l() ?? at), A(h), Pt(h, (w) => i(w), () => i()), Na(h, "clientHeight", a), Na(h, "clientWidth", s), M(e, h), ce(g);
}
se(
  Qc,
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
var ym = /* @__PURE__ */ J('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), wm = /* @__PURE__ */ J("<!> <!>", 1), bm = /* @__PURE__ */ J("<!> <!> <!> <!> <!>", 1);
function ed(e, t) {
  ue(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), u = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), p = y(t, "nodeClickDistance", 7, 1), f = y(t, "onmovestart", 7), g = y(t, "onmoveend", 7), h = y(t, "onmove", 7), v = y(t, "oninit", 7), w = y(t, "onnodeclick", 7), b = y(t, "onnodecontextmenu", 7), C = y(t, "onnodedrag", 7), x = y(t, "onnodedragstart", 7), S = y(t, "onnodedragstop", 7), E = y(t, "onnodepointerenter", 7), D = y(t, "onnodepointermove", 7), H = y(t, "onnodepointerleave", 7), q = y(t, "onselectionclick", 7), B = y(t, "onselectioncontextmenu", 7), U = y(t, "onselectionstart", 7), z = y(t, "onselectionend", 7), k = y(t, "onedgeclick", 7), _ = y(t, "onedgecontextmenu", 7), $ = y(t, "onedgepointerenter", 7), P = y(t, "onedgepointerleave", 7), N = y(t, "onpaneclick", 7), V = y(t, "onpanecontextmenu", 7), Z = y(t, "panOnScrollMode", 23, () => sn.Free), X = y(t, "preventScrolling", 7, !0), T = y(t, "zoomOnScroll", 7, !0), Y = y(t, "zoomOnDoubleClick", 7, !0), ee = y(t, "zoomOnPinch", 7, !0), ne = y(t, "panOnScroll", 7, !1), R = y(t, "panOnDrag", 7, !0), j = y(t, "selectionOnDrag", 7, !0), W = y(t, "connectionLineComponent", 7), ie = y(t, "connectionLineStyle", 7), G = y(t, "connectionLineContainerStyle", 7), me = y(t, "connectionLineType", 23, () => hn.Bezier), we = y(t, "attributionPosition", 7), re = y(t, "children", 7), Q = y(t, "nodes", 31, () => Tt([])), te = y(t, "edges", 31, () => Tt([])), de = y(t, "viewport", 31, () => {
  }), fe = /* @__PURE__ */ Ve(t, [
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
  ]), le = Vc({
    props: fe,
    width: n(),
    height: r(),
    get nodes() {
      return Q();
    },
    set nodes(K) {
      Q(K);
    },
    get edges() {
      return te();
    },
    set edges(K) {
      te(K);
    },
    get viewport() {
      return de();
    },
    set viewport(K) {
      de(K);
    }
  });
  const Ne = Vn(ai);
  Ne && Ne.setStore && Ne.setStore(le), br(ai, {
    provider: !1,
    getStore() {
      return le;
    }
  }), Xe(() => {
    const K = { nodes: le.selectedNodes, edges: le.selectedEdges };
    it(() => t.onselectionchange)?.(K);
    for (const tt of le.selectionChangeHandlers.values())
      tt(K);
  }), vi(() => {
    le.reset();
  });
  var $e = {
    get width() {
      return n();
    },
    set width(K) {
      n(K), m();
    },
    get height() {
      return r();
    },
    set height(K) {
      r(K), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(K) {
      o(K), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(K) {
      i(K), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(K) {
      s(K), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(K) {
      a(K), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(K) {
      l(K), m();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(K) {
      u(K), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(K = 1) {
      d(K), m();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(K = 1) {
      p(K), m();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(K) {
      f(K), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(K) {
      g(K), m();
    },
    get onmove() {
      return h();
    },
    set onmove(K) {
      h(K), m();
    },
    get oninit() {
      return v();
    },
    set oninit(K) {
      v(K), m();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(K) {
      w(K), m();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(K) {
      b(K), m();
    },
    get onnodedrag() {
      return C();
    },
    set onnodedrag(K) {
      C(K), m();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(K) {
      x(K), m();
    },
    get onnodedragstop() {
      return S();
    },
    set onnodedragstop(K) {
      S(K), m();
    },
    get onnodepointerenter() {
      return E();
    },
    set onnodepointerenter(K) {
      E(K), m();
    },
    get onnodepointermove() {
      return D();
    },
    set onnodepointermove(K) {
      D(K), m();
    },
    get onnodepointerleave() {
      return H();
    },
    set onnodepointerleave(K) {
      H(K), m();
    },
    get onselectionclick() {
      return q();
    },
    set onselectionclick(K) {
      q(K), m();
    },
    get onselectioncontextmenu() {
      return B();
    },
    set onselectioncontextmenu(K) {
      B(K), m();
    },
    get onselectionstart() {
      return U();
    },
    set onselectionstart(K) {
      U(K), m();
    },
    get onselectionend() {
      return z();
    },
    set onselectionend(K) {
      z(K), m();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(K) {
      k(K), m();
    },
    get onedgecontextmenu() {
      return _();
    },
    set onedgecontextmenu(K) {
      _(K), m();
    },
    get onedgepointerenter() {
      return $();
    },
    set onedgepointerenter(K) {
      $(K), m();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(K) {
      P(K), m();
    },
    get onpaneclick() {
      return N();
    },
    set onpaneclick(K) {
      N(K), m();
    },
    get onpanecontextmenu() {
      return V();
    },
    set onpanecontextmenu(K) {
      V(K), m();
    },
    get panOnScrollMode() {
      return Z();
    },
    set panOnScrollMode(K = sn.Free) {
      Z(K), m();
    },
    get preventScrolling() {
      return X();
    },
    set preventScrolling(K = !0) {
      X(K), m();
    },
    get zoomOnScroll() {
      return T();
    },
    set zoomOnScroll(K = !0) {
      T(K), m();
    },
    get zoomOnDoubleClick() {
      return Y();
    },
    set zoomOnDoubleClick(K = !0) {
      Y(K), m();
    },
    get zoomOnPinch() {
      return ee();
    },
    set zoomOnPinch(K = !0) {
      ee(K), m();
    },
    get panOnScroll() {
      return ne();
    },
    set panOnScroll(K = !1) {
      ne(K), m();
    },
    get panOnDrag() {
      return R();
    },
    set panOnDrag(K = !0) {
      R(K), m();
    },
    get selectionOnDrag() {
      return j();
    },
    set selectionOnDrag(K = !0) {
      j(K), m();
    },
    get connectionLineComponent() {
      return W();
    },
    set connectionLineComponent(K) {
      W(K), m();
    },
    get connectionLineStyle() {
      return ie();
    },
    set connectionLineStyle(K) {
      ie(K), m();
    },
    get connectionLineContainerStyle() {
      return G();
    },
    set connectionLineContainerStyle(K) {
      G(K), m();
    },
    get connectionLineType() {
      return me();
    },
    set connectionLineType(K = hn.Bezier) {
      me(K), m();
    },
    get attributionPosition() {
      return we();
    },
    set attributionPosition(K) {
      we(K), m();
    },
    get children() {
      return re();
    },
    set children(K) {
      re(K), m();
    },
    get nodes() {
      return Q();
    },
    set nodes(K = []) {
      Q(K), m();
    },
    get edges() {
      return te();
    },
    set edges(K = []) {
      te(K), m();
    },
    get viewport() {
      return de();
    },
    set viewport(K = void 0) {
      de(K), m();
    }
  };
  return Qc(e, {
    get colorMode() {
      return le.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return fe;
    },
    get domNode() {
      return le.domNode;
    },
    set domNode(K) {
      le.domNode = K;
    },
    get clientWidth() {
      return le.width;
    },
    set clientWidth(K) {
      le.width = K;
    },
    get clientHeight() {
      return le.height;
    },
    set clientHeight(K) {
      le.height = K;
    },
    children: (K, tt) => {
      var He = bm(), ze = oe(He);
      Gc(ze, {
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
          return le;
        },
        set store(Oe) {
          le = Oe;
        }
      });
      var Te = O(ze, 2);
      Oc(Te, {
        get panOnScrollMode() {
          return Z();
        },
        get preventScrolling() {
          return X();
        },
        get zoomOnScroll() {
          return T();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return ee();
        },
        get panOnScroll() {
          return ne();
        },
        get panOnDrag() {
          return R();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return h();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return v();
        },
        get store() {
          return le;
        },
        set store(Oe) {
          le = Oe;
        },
        children: (Oe, We) => {
          zc(Oe, {
            get onpaneclick() {
              return N();
            },
            get onpanecontextmenu() {
              return V();
            },
            get onselectionstart() {
              return U();
            },
            get onselectionend() {
              return z();
            },
            get panOnDrag() {
              return R();
            },
            get selectionOnDrag() {
              return j();
            },
            get store() {
              return le;
            },
            set store(pe) {
              le = pe;
            },
            children: (pe, Re) => {
              var ot = wm(), Je = oe(ot);
              Ac(Je, {
                get store() {
                  return le;
                },
                set store(Ke) {
                  le = Ke;
                },
                children: (Ke, mt) => {
                  var Gt = ym(), Pn = O(oe(Gt), 2);
                  Wc(Pn, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return _();
                    },
                    get onedgepointerenter() {
                      return $();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return le;
                    },
                    set store(Bn) {
                      le = Bn;
                    }
                  });
                  var Eo = O(Pn, 4);
                  Uc(Eo, {
                    get type() {
                      return me();
                    },
                    get LineComponent() {
                      return W();
                    },
                    get containerStyle() {
                      return G();
                    },
                    get style() {
                      return ie();
                    },
                    get store() {
                      return le;
                    },
                    set store(Bn) {
                      le = Bn;
                    }
                  });
                  var da = O(Eo, 2);
                  Kc(da, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return E();
                    },
                    get onnodepointermove() {
                      return D();
                    },
                    get onnodepointerleave() {
                      return H();
                    },
                    get onnodedrag() {
                      return C();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return S();
                    },
                    get store() {
                      return le;
                    },
                    set store(Bn) {
                      le = Bn;
                    }
                  });
                  var Jd = O(da, 2);
                  Fc(Jd, {
                    get onselectionclick() {
                      return q();
                    },
                    get onselectioncontextmenu() {
                      return B();
                    },
                    get onnodedrag() {
                      return C();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return S();
                    },
                    get store() {
                      return le;
                    },
                    set store(Bn) {
                      le = Bn;
                    }
                  }), he(2), M(Ke, Gt);
                },
                $$slots: { default: !0 }
              });
              var kt = O(Je, 2);
              {
                let Ke = /* @__PURE__ */ L(() => !!(le.selectionRect && le.selectionRectMode === "user")), mt = /* @__PURE__ */ L(() => le.selectionRect?.width), Gt = /* @__PURE__ */ L(() => le.selectionRect?.height), Pn = /* @__PURE__ */ L(() => le.selectionRect?.x), Eo = /* @__PURE__ */ L(() => le.selectionRect?.y);
                ia(kt, {
                  get isVisible() {
                    return c(Ke);
                  },
                  get width() {
                    return c(mt);
                  },
                  get height() {
                    return c(Gt);
                  },
                  get x() {
                    return c(Pn);
                  },
                  get y() {
                    return c(Eo);
                  }
                });
              }
              M(pe, ot);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var nt = O(Te, 2);
      Jc(nt, {
        get proOptions() {
          return o();
        },
        get position() {
          return we();
        }
      });
      var rt = O(nt, 2);
      qc(rt, {
        get store() {
          return le;
        }
      });
      var Dt = O(rt, 2);
      Ye(Dt, () => re() ?? at), M(K, He);
    },
    $$slots: { default: !0 }
  }), ce($e);
}
se(
  ed,
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
function td(e, t) {
  ue(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ Se(Vc({ props: {}, nodes: [], edges: [] }));
  br(ai, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      F(r, a);
    }
  }), vi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  }, i = _e(), s = oe(i);
  return Ye(s, () => n() ?? at), M(e, i), ce(o);
}
se(td, { children: {} }, [], [], !0);
var xm = /* @__PURE__ */ J("<button><!></button>");
function Rr(e, t) {
  ue(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), u = y(t, "children", 7), d = /* @__PURE__ */ Ve(t, [
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
    set class(h) {
      n(h), m();
    },
    get bgColor() {
      return r();
    },
    set bgColor(h) {
      r(h), m();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(h) {
      o(h), m();
    },
    get color() {
      return i();
    },
    set color(h) {
      i(h), m();
    },
    get colorHover() {
      return s();
    },
    set colorHover(h) {
      s(h), m();
    },
    get borderColor() {
      return a();
    },
    set borderColor(h) {
      a(h), m();
    },
    get onclick() {
      return l();
    },
    set onclick(h) {
      l(h), m();
    },
    get children() {
      return u();
    },
    set children(h) {
      u(h), m();
    }
  }, f = xm();
  Ue(
    f,
    (h) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [en]: h
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
  var g = I(f);
  return Ye(g, () => u() ?? at), A(f), M(e, f), ce(p);
}
se(
  Rr,
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
var $m = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function nd(e) {
  var t = $m();
  M(e, t);
}
se(nd, {}, [], [], !0);
var Cm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function rd(e) {
  var t = Cm();
  M(e, t);
}
se(rd, {}, [], [], !0);
var km = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function od(e) {
  var t = km();
  M(e, t);
}
se(od, {}, [], [], !0);
var _m = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function id(e) {
  var t = _m();
  M(e, t);
}
se(id, {}, [], [], !0);
var Sm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function sd(e) {
  var t = Sm();
  M(e, t);
}
se(sd, {}, [], [], !0);
var Em = /* @__PURE__ */ J("<!> <!>", 1), Nm = /* @__PURE__ */ J("<!> <!> <!> <!> <!> <!>", 1);
function ad(e, t) {
  ue(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), u = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), p = y(t, "buttonColor", 7), f = y(t, "buttonColorHover", 7), g = y(t, "buttonBorderColor", 7), h = y(t, "fitViewOptions", 7), v = y(t, "children", 7), w = y(t, "before", 7), b = y(t, "after", 7), C = /* @__PURE__ */ Ve(t, [
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
  ]), x = /* @__PURE__ */ L(Wt);
  const S = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let E = /* @__PURE__ */ L(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), D = /* @__PURE__ */ L(() => c(x).viewport.zoom <= c(x).minZoom), H = /* @__PURE__ */ L(() => c(x).viewport.zoom >= c(x).maxZoom), q = /* @__PURE__ */ L(() => c(x).ariaLabelConfig), B = /* @__PURE__ */ L(() => r() === "horizontal" ? "horizontal" : "vertical");
  const U = () => {
    c(x).zoomIn();
  }, z = () => {
    c(x).zoomOut();
  }, k = () => {
    c(x).fitView(h());
  }, _ = () => {
    let P = !c(E);
    c(x).nodesDraggable = P, c(x).nodesConnectable = P, c(x).elementsSelectable = P;
  };
  var $ = {
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
      return u();
    },
    set buttonBgColor(P) {
      u(P), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), m();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(P) {
      p(P), m();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), m();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(P) {
      g(P), m();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(P) {
      h(P), m();
    },
    get children() {
      return v();
    },
    set children(P) {
      v(P), m();
    },
    get before() {
      return w();
    },
    set before(P) {
      w(P), m();
    },
    get after() {
      return b();
    },
    set after(P) {
      b(P), m();
    }
  };
  {
    let P = /* @__PURE__ */ L(() => [
      "svelte-flow__controls",
      c(B),
      l()
    ]);
    $o(e, Ie(
      {
        get class() {
          return c(P);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(q)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => C,
      {
        children: (N, V) => {
          var Z = Nm(), X = oe(Z);
          {
            var T = (re) => {
              var Q = _e(), te = oe(Q);
              Ye(te, w), M(re, Q);
            };
            ae(X, (re) => {
              w() && re(T);
            });
          }
          var Y = O(X, 2);
          {
            var ee = (re) => {
              var Q = Em(), te = oe(Q);
              Rr(te, Ie(
                {
                  onclick: U,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(q)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(q)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(H);
                  }
                },
                () => S,
                {
                  children: (fe, le) => {
                    nd(fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var de = O(te, 2);
              Rr(de, Ie(
                {
                  onclick: z,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(q)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(q)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(D);
                  }
                },
                () => S,
                {
                  children: (fe, le) => {
                    rd(fe);
                  },
                  $$slots: { default: !0 }
                }
              )), M(re, Q);
            };
            ae(Y, (re) => {
              o() && re(ee);
            });
          }
          var ne = O(Y, 2);
          {
            var R = (re) => {
              Rr(re, Ie(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: k,
                  get title() {
                    return c(q)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(q)["controls.fitView.ariaLabel"];
                  }
                },
                () => S,
                {
                  children: (Q, te) => {
                    od(Q);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(ne, (re) => {
              i() && re(R);
            });
          }
          var j = O(ne, 2);
          {
            var W = (re) => {
              Rr(re, Ie(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: _,
                  get title() {
                    return c(q)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(q)["controls.interactive.ariaLabel"];
                  }
                },
                () => S,
                {
                  children: (Q, te) => {
                    var de = _e(), fe = oe(de);
                    {
                      var le = ($e) => {
                        sd($e);
                      }, Ne = ($e) => {
                        id($e);
                      };
                      ae(fe, ($e) => {
                        c(E) ? $e(le) : $e(Ne, !1);
                      });
                    }
                    M(Q, de);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(j, (re) => {
              s() && re(W);
            });
          }
          var ie = O(j, 2);
          {
            var G = (re) => {
              var Q = _e(), te = oe(Q);
              Ye(te, v), M(re, Q);
            };
            ae(ie, (re) => {
              v() && re(G);
            });
          }
          var me = O(ie, 2);
          {
            var we = (re) => {
              var Q = _e(), te = oe(Q);
              Ye(te, b), M(re, Q);
            };
            ae(me, (re) => {
              b() && re(we);
            });
          }
          M(N, Z);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ce($);
}
se(
  ad,
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
var yn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(yn || (yn = {}));
var Pm = /* @__PURE__ */ ge("<circle></circle>");
function ld(e, t) {
  ue(t, !0);
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
  }, i = Pm();
  return xe(() => {
    ye(i, "cx", n()), ye(i, "cy", n()), ye(i, "r", n()), Ct(i, 0, _n(["svelte-flow__background-pattern", "dots", r()]));
  }), M(e, i), ce(o);
}
se(ld, { radius: {}, class: {} }, [], [], !0);
var Lm = /* @__PURE__ */ ge("<path></path>");
function ud(e, t) {
  ue(t, !0);
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
  }, a = Lm();
  return xe(() => {
    ye(a, "stroke-width", n()), ye(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ct(a, 0, _n(["svelte-flow__background-pattern", o(), i()]));
  }), M(e, a), ce(s);
}
se(ud, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Dm = {
  [yn.Dots]: 1,
  [yn.Lines]: 1,
  [yn.Cross]: 6
};
var Hm = /* @__PURE__ */ ge('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function cd(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => yn.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), u = y(t, "patternClass", 7), d = y(t, "class", 7), p = /* @__PURE__ */ L(Wt), f = /* @__PURE__ */ L(() => r() === yn.Dots), g = /* @__PURE__ */ L(() => r() === yn.Cross), h = /* @__PURE__ */ L(() => Array.isArray(o()) ? o() : [o(), o()]), v = /* @__PURE__ */ L(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ L(() => [
    c(h)[0] * c(p).viewport.zoom || 1,
    c(h)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ L(() => (i() ?? Dm[r()]) * c(p).viewport.zoom), C = /* @__PURE__ */ L(() => c(g) ? [c(b), c(b)] : c(w)), x = /* @__PURE__ */ L(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(C)[0] / 2,
    c(C)[1] / 2
  ]);
  var S = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), m();
    },
    get variant() {
      return r();
    },
    set variant(k = yn.Dots) {
      r(k), m();
    },
    get gap() {
      return o();
    },
    set gap(k = 20) {
      o(k), m();
    },
    get size() {
      return i();
    },
    set size(k) {
      i(k), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(k = 1) {
      s(k), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(k) {
      a(k), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor(k) {
      l(k), m();
    },
    get patternClass() {
      return u();
    },
    set patternClass(k) {
      u(k), m();
    },
    get class() {
      return d();
    },
    set class(k) {
      d(k), m();
    }
  }, E = Hm();
  let D;
  var H = I(E), q = I(H);
  {
    var B = (k) => {
      {
        let _ = /* @__PURE__ */ L(() => c(b) / 2);
        ld(k, {
          get radius() {
            return c(_);
          },
          get class() {
            return u();
          }
        });
      }
    }, U = (k) => {
      ud(k, {
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
    ae(q, (k) => {
      c(f) ? k(B) : k(U, !1);
    });
  }
  A(H);
  var z = O(H);
  return A(E), xe(
    (k) => {
      Ct(E, 0, _n([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), D = lt(E, "", D, k), ye(H, "id", c(v)), ye(H, "x", c(p).viewport.x % c(w)[0]), ye(H, "y", c(p).viewport.y % c(w)[1]), ye(H, "width", c(w)[0]), ye(H, "height", c(w)[1]), ye(H, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), ye(z, "fill", `url(#${c(v)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), M(e, E), ce(S);
}
se(
  cd,
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
var Mm = /* @__PURE__ */ ge("<rect></rect>");
function dd(e, t) {
  ue(t, !0);
  let n = y(t, "x", 7), r = y(t, "y", 7), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "borderRadius", 7, 5), a = y(t, "color", 7), l = y(t, "shapeRendering", 7), u = y(t, "strokeColor", 7), d = y(t, "strokeWidth", 7, 2), p = y(t, "selected", 7), f = y(t, "class", 7);
  var g = {
    get x() {
      return n();
    },
    set x(b) {
      n(b), m();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), m();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), m();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), m();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(b = 5) {
      s(b), m();
    },
    get color() {
      return a();
    },
    set color(b) {
      a(b), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), m();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(b = 2) {
      d(b), m();
    },
    get selected() {
      return p();
    },
    set selected(b) {
      p(b), m();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), m();
    }
  }, h = Mm();
  let v, w;
  return xe(
    (b, C) => {
      v = Ct(h, 0, _n(["svelte-flow__minimap-node", f()]), null, v, b), ye(h, "x", n()), ye(h, "y", r()), ye(h, "rx", s()), ye(h, "ry", s()), ye(h, "width", o()), ye(h, "height", i()), ye(h, "shape-rendering", l()), w = lt(h, "", w, C);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), M(e, h), ce(g);
}
se(
  dd,
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
function Tm(e, t) {
  const n = m0({
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
const Bi = (e) => e instanceof Function ? e : () => e;
var Vm = /* @__PURE__ */ ge("<title> </title>"), Om = /* @__PURE__ */ ge('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), zm = /* @__PURE__ */ J('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function fd(e, t) {
  ue(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), u = y(t, "bgColor", 7), d = y(t, "maskColor", 7), p = y(t, "maskStrokeColor", 7), f = y(t, "maskStrokeWidth", 7), g = y(t, "width", 7, 200), h = y(t, "height", 7, 150), v = y(t, "pannable", 7, !0), w = y(t, "zoomable", 7, !0), b = y(t, "inversePan", 7), C = y(t, "zoomStep", 7), x = y(t, "class", 7), S = /* @__PURE__ */ Ve(t, [
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
  ]), E = /* @__PURE__ */ L(Wt), D = /* @__PURE__ */ L(() => c(E).ariaLabelConfig);
  const H = i() === void 0 ? void 0 : Bi(i()), q = Bi(o()), B = Bi(s()), U = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let z = /* @__PURE__ */ L(() => `svelte-flow__minimap-desc-${c(E).flowId}`), k = /* @__PURE__ */ L(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), _ = /* @__PURE__ */ L(() => c(E).nodeLookup.size > 0 ? ac(yo(c(E).nodeLookup, { filter: (G) => !G.hidden }), c(k)) : c(k)), $ = /* @__PURE__ */ L(() => c(_).width / g()), P = /* @__PURE__ */ L(() => c(_).height / h()), N = /* @__PURE__ */ L(() => Math.max(c($), c(P))), V = /* @__PURE__ */ L(() => c(N) * g()), Z = /* @__PURE__ */ L(() => c(N) * h()), X = /* @__PURE__ */ L(() => 5 * c(N)), T = /* @__PURE__ */ L(() => c(_).x - (c(V) - c(_).width) / 2 - c(X)), Y = /* @__PURE__ */ L(() => c(_).y - (c(Z) - c(_).height) / 2 - c(X)), ee = /* @__PURE__ */ L(() => c(V) + c(X) * 2), ne = /* @__PURE__ */ L(() => c(Z) + c(X) * 2);
  const R = () => c(N);
  var j = {
    get position() {
      return n();
    },
    set position(G = "bottom-right") {
      n(G), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(G) {
      r(G), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(G = "transparent") {
      o(G), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(G) {
      i(G), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(G = "") {
      s(G), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(G = 5) {
      a(G), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(G = 2) {
      l(G), m();
    },
    get bgColor() {
      return u();
    },
    set bgColor(G) {
      u(G), m();
    },
    get maskColor() {
      return d();
    },
    set maskColor(G) {
      d(G), m();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(G) {
      p(G), m();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(G) {
      f(G), m();
    },
    get width() {
      return g();
    },
    set width(G = 200) {
      g(G), m();
    },
    get height() {
      return h();
    },
    set height(G = 150) {
      h(G), m();
    },
    get pannable() {
      return v();
    },
    set pannable(G = !0) {
      v(G), m();
    },
    get zoomable() {
      return w();
    },
    set zoomable(G = !0) {
      w(G), m();
    },
    get inversePan() {
      return b();
    },
    set inversePan(G) {
      b(G), m();
    },
    get zoomStep() {
      return C();
    },
    set zoomStep(G) {
      C(G), m();
    },
    get class() {
      return x();
    },
    set class(G) {
      x(G), m();
    }
  }, W = zm(), ie = oe(W);
  {
    let G = /* @__PURE__ */ L(() => ["svelte-flow__minimap", x()]);
    Sp(ie, () => ({ "--xy-minimap-background-color-props": u() })), $o(ie.lastChild, Ie(
      {
        get position() {
          return n();
        },
        get class() {
          return c(G);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => S,
      {
        children: (me, we) => {
          var re = _e(), Q = oe(re);
          {
            var te = (de) => {
              var fe = Om();
              let le;
              var Ne = I(fe);
              {
                var $e = (He) => {
                  var ze = Vm(), Te = I(ze, !0);
                  A(ze), xe(() => {
                    ye(ze, "id", c(z)), Ae(Te, r() ?? c(D)["minimap.ariaLabel"]);
                  }), M(He, ze);
                };
                ae(Ne, (He) => {
                  (r() ?? c(D)["minimap.ariaLabel"]) && He($e);
                });
              }
              var K = O(Ne);
              pt(K, 17, () => c(E).nodes, (He) => He.id, (He, ze) => {
                const Te = /* @__PURE__ */ L(() => c(E).nodeLookup.get(c(ze).id));
                var nt = _e(), rt = oe(nt);
                {
                  var Dt = (Oe) => {
                    const We = /* @__PURE__ */ L(() => Rn(c(Te)));
                    {
                      let pe = /* @__PURE__ */ L(() => H?.(c(Te))), Re = /* @__PURE__ */ L(() => q(c(Te))), ot = /* @__PURE__ */ L(() => B(c(Te)));
                      dd(Oe, Ie(
                        {
                          get x() {
                            return c(Te).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Te).internals.positionAbsolute.y;
                          }
                        },
                        () => c(We),
                        {
                          get selected() {
                            return c(Te).selected;
                          },
                          get color() {
                            return c(pe);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(Re);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return U;
                          },
                          get class() {
                            return c(ot);
                          }
                        }
                      ));
                    }
                  };
                  ae(rt, (Oe) => {
                    c(Te) && lc(c(Te)) && Oe(Dt);
                  });
                }
                M(He, nt);
              });
              var tt = O(K);
              A(fe), ct(fe, (He, ze) => Tm?.(He, ze), () => ({
                store: c(E),
                panZoom: c(E).panZoom,
                getViewScale: R,
                translateExtent: c(E).translateExtent,
                width: c(E).width,
                height: c(E).height,
                inversePan: b(),
                zoomStep: C(),
                pannable: v(),
                zoomable: w()
              })), xe(
                (He) => {
                  ye(fe, "width", g()), ye(fe, "height", h()), ye(fe, "viewBox", `${c(T) ?? ""} ${c(Y) ?? ""} ${c(ee) ?? ""} ${c(ne) ?? ""}`), ye(fe, "aria-labelledby", c(z)), le = lt(fe, "", le, He), ye(tt, "d", `M${c(T) - c(X)},${c(Y) - c(X)}h${c(ee) + c(X) * 2}v${c(ne) + c(X) * 2}h${-c(ee) - c(X) * 2}z
      M${c(k).x ?? ""},${c(k).y ?? ""}h${c(k).width ?? ""}v${c(k).height ?? ""}h${-c(k).width}z`);
                },
                [
                  () => ({
                    "--xy-minimap-mask-background-color-props": d(),
                    "--xy-minimap-mask-stroke-color-props": p(),
                    "--xy-minimap-mask-stroke-width-props": f() ? f() * c(N) : void 0
                  })
                ]
              ), M(de, fe);
            };
            ae(Q, (de) => {
              c(E).panZoom && de(te);
            });
          }
          M(me, re);
        },
        $$slots: { default: !0 }
      }
    )), A(ie);
  }
  return M(e, W), ce(j);
}
se(
  fd,
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
var Am = /* @__PURE__ */ J("<div><!></div>");
function pd(e, t) {
  ue(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => ve.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ Ve(t, [
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
  const u = Wt(), { getNodesBounds: d } = ut(), p = Vn("svelteflow__node_id");
  let f = /* @__PURE__ */ L(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (E, D) => {
      const H = u.nodeLookup.get(D);
      return H && E.push(H), E;
    },
    []
  ))), g = /* @__PURE__ */ L(() => {
    const E = d(c(f));
    return E ? Jv(E, u.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ L(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((E) => (E.internals.z || 5) + 1))), v = /* @__PURE__ */ L(() => u.nodes.filter((E) => E.selected).length), w = /* @__PURE__ */ L(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(v) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(E) {
      n(E), m();
    },
    get position() {
      return r();
    },
    set position(E = ve.Top) {
      r(E), m();
    },
    get align() {
      return o();
    },
    set align(E = "center") {
      o(E), m();
    },
    get offset() {
      return i();
    },
    set offset(E = 10) {
      i(E), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(E) {
      s(E), m();
    },
    get children() {
      return a();
    },
    set children(E) {
      a(E), m();
    }
  }, C = _e(), x = oe(C);
  {
    var S = (E) => {
      var D = Am();
      Ue(
        D,
        (q, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": q,
          ...l,
          [en]: B
        }),
        [
          () => c(f).reduce((q, B) => `${q}${B.id} `, "").trim(),
          () => ({
            display: Nc().value ? "none" : void 0,
            position: "absolute",
            transform: c(g),
            "z-index": c(h)
          })
        ]
      );
      var H = I(D);
      Ye(H, () => a() ?? at), A(D), ct(D, (q, B) => Ec?.(q, B), () => "root"), M(E, D);
    };
    ae(x, (E) => {
      u.domNode && c(w) && c(f) && E(S);
    });
  }
  return M(e, C), ce(b);
}
se(
  pd,
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
function Sn(e) {
  const t = /* @__PURE__ */ L(Wt), n = /* @__PURE__ */ L(() => c(t).nodes), r = /* @__PURE__ */ L(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ L(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!l0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const vl = "tinyflow-component", Im = [
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
], qm = [
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
], sa = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Zm = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Rm = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Bm {
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
    const t = document.createElement(vl);
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
    const n = document.createElement(vl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Km = () => {
  let e = /* @__PURE__ */ Se([]), t = /* @__PURE__ */ Se([]), n = /* @__PURE__ */ Se({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      F(e, r), F(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      F(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      F(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      F(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      F(e, [...c(e), r]);
    },
    removeNode: (r) => {
      F(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      F(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      F(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      F(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      F(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      F(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      F(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      F(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      F(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      F(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Be = Km();
var Xm = /* @__PURE__ */ J("<button><!></button>");
function Pe(e, t) {
  ue(t, !0);
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
  }, s = Xm();
  Ue(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = I(s);
  return Ye(a, () => n() ?? at), A(s), M(e, s), ce(i);
}
se(Pe, { children: {}, primary: {} }, [], [], !0);
var Ym = /* @__PURE__ */ J("<input/>");
function gd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Ym();
  rn(r), Ue(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), M(e, r), ce();
}
se(gd, {}, [], [], !0);
var jm = /* @__PURE__ */ J('<div><input type="hidden"/> <!> <!></div>');
const Wm = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function hd(e, t) {
  ue(t, !0), Me(e, Wm);
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
  }, u = jm();
  Ue(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1swt2gg"
  );
  var d = I(u);
  rn(d);
  var p = O(d, 2);
  Fe(p, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = O(p, 2);
  return Pe(f, {
    onclick: (g) => {
      s()?.(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, h) => {
      he();
      var v = Ce();
      xe(() => Ae(v, i())), M(g, v);
    },
    $$slots: { default: !0 }
  }), A(u), xe(() => zo(d, o())), M(e, u), ce(l);
}
se(
  hd,
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
var Fm = /* @__PURE__ */ J("<input/>");
function Fe(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Fm();
  rn(r), Ue(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), M(e, r), ce();
}
se(Fe, {}, [], [], !0);
var Gm = /* @__PURE__ */ J("<textarea></textarea>");
function qe(e, t) {
  ue(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = {
    get value() {
      return n();
    },
    set value(s) {
      n(s), m();
    }
  }, i = Gm();
  return np(i), Ue(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), M(e, i), ce(o);
}
se(qe, { value: {} }, [], [], !0);
var Um = /* @__PURE__ */ J('<div role="button"><!></div>'), Jm = /* @__PURE__ */ J("<div></div>");
function vd(e, t) {
  const n = Da(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Da(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(d, p) {
    s(p), i()?.(d, p);
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
  ku();
  var u = Jm();
  return Ue(u, () => ({
    ...r,
    class: `tf-tabs ${zs(r), it(() => r.class) ?? ""}`
  })), pt(u, 5, o, $r, (d, p, f) => {
    var g = Um();
    ye(g, "tabindex", f), g.__click = () => a(c(p), f), g.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(p), f));
    };
    var h = I(g);
    {
      var v = (b) => {
        var C = Ce();
        xe(() => Ae(C, (c(p), it(() => c(p).label)))), M(b, C);
      }, w = (b) => {
        var C = _e(), x = oe(C);
        Ye(x, () => (c(p), it(() => c(p).label) ?? at)), M(b, C);
      };
      ae(h, (b) => {
        c(p), it(() => typeof c(p).label == "string") ? b(v) : b(w, !1);
      });
    }
    A(g), xe(() => Ct(g, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), M(d, g);
  }), A(u), M(e, u), ce(l);
}
kn(["click", "keydown"]);
se(vd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Qm = (e, t, n) => t(c(n)), e2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, t2 = /* @__PURE__ */ J('<span class="tf-collapse-item-title-icon"><!></span>'), n2 = /* @__PURE__ */ J('<div class="tf-collapse-item-description"><!></div>'), r2 = /* @__PURE__ */ J('<div class="tf-collapse-item-content"><!></div>'), o2 = /* @__PURE__ */ J('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), i2 = /* @__PURE__ */ J("<div></div>");
const s2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function md(e, t) {
  ue(t, !0), Me(e, s2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => Tt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
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
  }, a = i2();
  return pt(a, 21, n, $r, (l, u, d) => {
    var p = o2(), f = I(p);
    ye(f, "tabindex", d), f.__click = [Qm, i, u], f.__keydown = [e2, i, u];
    var g = I(f);
    {
      var h = (E) => {
        var D = t2(), H = I(D);
        Hn(H, {
          get target() {
            return c(u).icon;
          }
        }), A(D), M(E, D);
      };
      ae(g, (E) => {
        c(u).icon && E(h);
      });
    }
    var v = O(g, 2);
    Hn(v, {
      get target() {
        return c(u).title;
      }
    });
    var w = O(v, 2);
    A(f);
    var b = O(f, 2);
    {
      var C = (E) => {
        var D = n2(), H = I(D);
        Hn(H, {
          get target() {
            return c(u).description;
          }
        }), A(D), M(E, D);
      };
      ae(b, (E) => {
        c(u).description && E(C);
      });
    }
    var x = O(b, 2);
    {
      var S = (E) => {
        var D = r2(), H = I(D);
        Hn(H, {
          get target() {
            return c(u).content;
          }
        }), A(D), M(E, D);
      };
      ae(x, (E) => {
        o().includes(c(u).key) && E(S);
      });
    }
    A(p), xe((E) => Ct(w, 1, `tf-collapse-item-title-arrow ${E ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), M(l, p);
  }), A(a), xe(() => {
    lt(a, t.style), Ct(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), M(e, a), ce(s);
}
kn(["click", "keydown"]);
se(md, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Hn(e, t) {
  ue(t, !0);
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
      var u = _e(), d = oe(u);
      Ye(d, () => n() ?? at), M(l, u);
    }, a = (l) => {
      var u = _e(), d = oe(u);
      qs(d, n), M(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return M(e, o), ce(r);
}
se(Hn, { target: {} }, [], [], !0);
var a2 = (e, t, n) => t(c(n)), l2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), u2 = /* @__PURE__ */ J('<div class="tf-select-content-children"><!></div>'), c2 = /* @__PURE__ */ J('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), d2 = /* @__PURE__ */ J('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), f2 = /* @__PURE__ */ J("<!> <!>", 1), p2 = /* @__PURE__ */ J('<div class="tf-select-input-placeholder"> </div>'), g2 = /* @__PURE__ */ J('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), h2 = /* @__PURE__ */ J("<div><!></div>");
function st(e, t) {
  ue(t, !0);
  const n = (C, x = at) => {
    var S = _e(), E = oe(S);
    pt(E, 19, x, (D, H) => `${H}_${D.value}`, (D, H) => {
      var q = c2(), B = oe(q);
      B.__click = [a2, h, H];
      var U = I(B), z = I(U);
      {
        var k = (N) => {
          var V = l2();
          M(N, V);
        };
        ae(z, (N) => {
          c(H).children && c(H).children.length > 0 && N(k);
        });
      }
      A(U);
      var _ = O(U, 2);
      Hn(_, {
        get target() {
          return c(H).label;
        }
      }), A(B);
      var $ = O(B, 2);
      {
        var P = (N) => {
          var V = u2(), Z = I(V);
          n(Z, () => c(H).children), A(V), M(N, V);
        };
        ae($, (N) => {
          c(H).children && c(H).children.length > 0 && (a() || u().includes(c(H).value)) && N(P);
        });
      }
      M(D, q);
    }), M(C, S);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), p = /* @__PURE__ */ Ve(t, [
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
  ]), f = /* @__PURE__ */ L(() => {
    const C = [], x = (S) => {
      for (let E of S)
        i().length > 0 ? i().includes(E.value) && C.push(E) : s().includes(E.value) && C.push(E), E.children && E.children.length > 0 && x(E.children);
    };
    return x(r()), C;
  }), g;
  function h(C) {
    g?.hide(), o()?.(C);
  }
  var v = {
    get items() {
      return r();
    },
    set items(C) {
      r(C), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(C) {
      o(C), m();
    },
    get value() {
      return i();
    },
    set value(C = []) {
      i(C), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), m();
    },
    get expandAll() {
      return a();
    },
    set expandAll(C = !0) {
      a(C), m();
    },
    get multiple() {
      return l();
    },
    set multiple(C = !1) {
      l(C), m();
    },
    get expandValue() {
      return u();
    },
    set expandValue(C = []) {
      u(C), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), m();
    }
  }, w = h2();
  Ue(w, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var b = I(w);
  return Pt(
    lr(b, {
      floating: (C) => {
        var x = d2(), S = I(x);
        n(S, r), A(x), M(C, x);
      },
      children: (C, x) => {
        var S = g2();
        Ue(S, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var E = I(S);
        pt(
          E,
          23,
          () => c(f),
          (D, H) => `${H}_${D.value}`,
          (D, H, q) => {
            var B = _e(), U = oe(B);
            {
              var z = (_) => {
                var $ = _e(), P = oe($);
                {
                  var N = (V) => {
                    Hn(V, {
                      get target() {
                        return c(H).label;
                      }
                    });
                  };
                  ae(P, (V) => {
                    c(q) === 0 && V(N);
                  });
                }
                M(_, $);
              }, k = (_) => {
                var $ = f2(), P = oe($);
                Hn(P, {
                  get target() {
                    return c(H).label;
                  }
                });
                var N = O(P, 2);
                {
                  var V = (Z) => {
                    var X = Ce(",");
                    M(Z, X);
                  };
                  ae(N, (Z) => {
                    c(q) < c(f).length - 1 && Z(V);
                  });
                }
                M(_, $);
              };
              ae(U, (_) => {
                l() ? _(k, !1) : _(z);
              });
            }
            M(D, B);
          },
          (D) => {
            var H = p2(), q = I(H, !0);
            A(H), xe(() => Ae(q, d())), M(D, H);
          }
        ), A(E), he(2), A(S), M(C, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => g = C,
    () => g
  ), A(w), M(e, w), ce(v);
}
kn(["click"]);
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
const ro = Math.min, vr = Math.max, li = Math.round, an = (e) => ({
  x: e,
  y: e
}), v2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, m2 = {
  start: "end",
  end: "start"
};
function ps(e, t, n) {
  return vr(e, ro(t, n));
}
function Co(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rr(e) {
  return e.split("-")[0];
}
function ko(e) {
  return e.split("-")[1];
}
function yd(e) {
  return e === "x" ? "y" : "x";
}
function aa(e) {
  return e === "y" ? "height" : "width";
}
const y2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Mn(e) {
  return y2.has(rr(e)) ? "y" : "x";
}
function la(e) {
  return yd(Mn(e));
}
function w2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ko(e), o = la(e), i = aa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ui(s)), [s, ui(s)];
}
function b2(e) {
  const t = ui(e);
  return [gs(e), t, gs(t)];
}
function gs(e) {
  return e.replace(/start|end/g, (t) => m2[t]);
}
const ml = ["left", "right"], yl = ["right", "left"], x2 = ["top", "bottom"], $2 = ["bottom", "top"];
function C2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? yl : ml : t ? ml : yl;
    case "left":
    case "right":
      return t ? x2 : $2;
    default:
      return [];
  }
}
function k2(e, t, n, r) {
  const o = ko(e);
  let i = C2(rr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(gs)))), i;
}
function ui(e) {
  return e.replace(/left|right|bottom|top/g, (t) => v2[t]);
}
function _2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function wd(e) {
  return typeof e != "number" ? _2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ci(e) {
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
function wl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Mn(t), s = la(t), a = aa(s), l = rr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
        y: p
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (ko(t)) {
    case "start":
      g[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const S2 = async (e, t, n) => {
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
  } = wl(u, r, l), f = r, g = {}, h = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: w,
      fn: b
    } = a[v], {
      x: C,
      y: x,
      data: S,
      reset: E
    } = await b({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = C ?? d, p = x ?? p, g = {
      ...g,
      [w]: {
        ...g[w],
        ...S
      }
    }, E && h <= 50 && (h++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: p
    } = wl(u, f, l)), v = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: g
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
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = Co(t, e), h = wd(g), v = a[f ? p === "floating" ? "reference" : "floating" : p], w = ci(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ci(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: C,
    strategy: l
  }) : b);
  return {
    top: (w.top - S.top + h.top) / x.y,
    bottom: (S.bottom - w.bottom + h.bottom) / x.y,
    left: (w.left - S.left + h.left) / x.x,
    right: (S.right - w.right + h.right) / x.x
  };
}
const E2 = (e) => ({
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
    } = Co(e, t) || {};
    if (u == null)
      return {};
    const p = wd(d), f = {
      x: n,
      y: r
    }, g = la(o), h = aa(g), v = await s.getDimensions(u), w = g === "y", b = w ? "top" : "left", C = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", S = i.reference[h] + i.reference[g] - f[g] - i.floating[h], E = f[g] - i.reference[g], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let H = D ? D[x] : 0;
    (!H || !await (s.isElement == null ? void 0 : s.isElement(D))) && (H = a.floating[x] || i.floating[h]);
    const q = S / 2 - E / 2, B = H / 2 - v[h] / 2 - 1, U = ro(p[b], B), z = ro(p[C], B), k = U, _ = H - v[h] - z, $ = H / 2 - v[h] / 2 + q, P = ps(k, $, _), N = !l.arrow && ko(o) != null && $ !== P && i.reference[h] / 2 - ($ < k ? U : z) - v[h] / 2 < 0, V = N ? $ < k ? $ - k : $ - _ : 0;
    return {
      [g]: f[g] + V,
      data: {
        [g]: P,
        centerOffset: $ - P - V,
        ...N && {
          alignmentOffset: V
        }
      },
      reset: N
    };
  }
}), N2 = function(e) {
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...w
      } = Co(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = rr(o), C = Mn(a), x = rr(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = f || (x || !v ? [ui(a)] : b2(a)), D = h !== "none";
      !f && D && E.push(...k2(a, v, h, S));
      const H = [a, ...E], q = await bd(t, w), B = [];
      let U = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && B.push(q[b]), p) {
        const $ = w2(o, s, S);
        B.push(q[$[0]], q[$[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: B
      }], !B.every(($) => $ <= 0)) {
        var z, k;
        const $ = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, P = H[$];
        if (P && (!(p === "alignment" && C !== Mn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        U.every((V) => Mn(V.placement) === C ? V.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: U
            },
            reset: {
              placement: P
            }
          };
        let N = (k = U.filter((V) => V.overflows[0] <= 0).sort((V, Z) => V.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!N)
          switch (g) {
            case "bestFit": {
              var _;
              const V = (_ = U.filter((Z) => {
                if (D) {
                  const X = Mn(Z.placement);
                  return X === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((X) => X > 0).reduce((X, T) => X + T, 0)]).sort((Z, X) => Z[1] - X[1])[0]) == null ? void 0 : _[0];
              V && (N = V);
              break;
            }
            case "initialPlacement":
              N = a;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
}, P2 = /* @__PURE__ */ new Set(["left", "top"]);
async function L2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = rr(n), a = ko(n), l = Mn(n) === "y", u = P2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Co(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof h == "number" && (g = a === "end" ? h * -1 : h), l ? {
    x: g * d,
    y: f * u
  } : {
    x: f * u,
    y: g * d
  };
}
const D2 = function(e) {
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
      } = t, l = await L2(t, e);
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
}, H2 = function(e) {
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
              y: C
            } = w;
            return {
              x: b,
              y: C
            };
          }
        },
        ...l
      } = Co(e, t), u = {
        x: n,
        y: r
      }, d = await bd(t, l), p = Mn(rr(o)), f = yd(p);
      let g = u[f], h = u[p];
      if (i) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", C = g + d[w], x = g - d[b];
        g = ps(C, g, x);
      }
      if (s) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", C = h + d[w], x = h - d[b];
        h = ps(C, h, x);
      }
      const v = a.fn({
        ...t,
        [f]: g,
        [p]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [f]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function Si() {
  return typeof window < "u";
}
function Vr(e) {
  return xd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function En(e) {
  var t;
  return (t = (xd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function xd(e) {
  return Si() ? e instanceof Node || e instanceof Et(e).Node : !1;
}
function Kt(e) {
  return Si() ? e instanceof Element || e instanceof Et(e).Element : !1;
}
function dn(e) {
  return Si() ? e instanceof HTMLElement || e instanceof Et(e).HTMLElement : !1;
}
function bl(e) {
  return !Si() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Et(e).ShadowRoot;
}
const M2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function _o(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !M2.has(o);
}
const T2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function V2(e) {
  return T2.has(Vr(e));
}
const O2 = [":popover-open", ":modal"];
function Ei(e) {
  return O2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const z2 = ["transform", "translate", "scale", "rotate", "perspective"], A2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], I2 = ["paint", "layout", "strict", "content"];
function ua(e) {
  const t = ca(), n = Kt(e) ? Xt(e) : e;
  return z2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || A2.some((r) => (n.willChange || "").includes(r)) || I2.some((r) => (n.contain || "").includes(r));
}
function q2(e) {
  let t = zn(e);
  for (; dn(t) && !Pr(t); ) {
    if (ua(t))
      return t;
    if (Ei(t))
      return null;
    t = zn(t);
  }
  return null;
}
function ca() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Z2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Pr(e) {
  return Z2.has(Vr(e));
}
function Xt(e) {
  return Et(e).getComputedStyle(e);
}
function Ni(e) {
  return Kt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function zn(e) {
  if (Vr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    bl(e) && e.host || // Fallback.
    En(e)
  );
  return bl(t) ? t.host : t;
}
function $d(e) {
  const t = zn(e);
  return Pr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dn(t) && _o(t) ? t : $d(t);
}
function Cd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Et(o);
  return i ? (hs(s), t.concat(s, s.visualViewport || [], _o(o) ? o : [], [])) : t.concat(o, Cd(o, []));
}
function hs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function kd(e) {
  const t = Xt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = dn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = li(n) !== i || li(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function _d(e) {
  return Kt(e) ? e : e.contextElement;
}
function mr(e) {
  const t = _d(e);
  if (!dn(t))
    return an(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = kd(t);
  let s = (i ? li(n.width) : n.width) / r, a = (i ? li(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const R2 = /* @__PURE__ */ an(0);
function Sd(e) {
  const t = Et(e);
  return !ca() || !t.visualViewport ? R2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function B2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Et(e) ? !1 : t;
}
function oo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = _d(e);
  let s = an(1);
  t && (r ? Kt(r) && (s = mr(r)) : s = mr(e));
  const a = B2(i, n, r) ? Sd(i) : an(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Et(i), g = r && Kt(r) ? Et(r) : r;
    let h = f, v = hs(h);
    for (; v && r && g !== h; ) {
      const w = mr(v), b = v.getBoundingClientRect(), C = Xt(v), x = b.left + (v.clientLeft + parseFloat(C.paddingLeft)) * w.x, S = b.top + (v.clientTop + parseFloat(C.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, p *= w.y, l += x, u += S, h = Et(v), v = hs(h);
    }
  }
  return ci({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function Pi(e, t) {
  const n = Ni(e).scrollLeft;
  return t ? t.left + n : oo(En(e)).left + n;
}
function Ed(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Pi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function K2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = En(r), a = t ? Ei(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = an(1);
  const d = an(0), p = dn(r);
  if ((p || !p && !i) && ((Vr(r) !== "body" || _o(s)) && (l = Ni(r)), dn(r))) {
    const g = oo(r);
    u = mr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? Ed(s, l) : an(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function X2(e) {
  return Array.from(e.getClientRects());
}
function Y2(e) {
  const t = En(e), n = Ni(e), r = e.ownerDocument.body, o = vr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = vr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Pi(e);
  const a = -n.scrollTop;
  return Xt(r).direction === "rtl" && (s += vr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const xl = 25;
function j2(e, t) {
  const n = Et(e), r = En(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = ca();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Pi(r);
  if (u <= 0) {
    const d = r.ownerDocument, p = d.body, f = getComputedStyle(p), g = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, h = Math.abs(r.clientWidth - p.clientWidth - g);
    h <= xl && (i -= h);
  } else u <= xl && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const W2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function F2(e, t) {
  const n = oo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = dn(e) ? mr(e) : an(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function $l(e, t, n) {
  let r;
  if (t === "viewport")
    r = j2(e, n);
  else if (t === "document")
    r = Y2(En(e));
  else if (Kt(t))
    r = F2(t, n);
  else {
    const o = Sd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ci(r);
}
function Nd(e, t) {
  const n = zn(e);
  return n === t || !Kt(n) || Pr(n) ? !1 : Xt(n).position === "fixed" || Nd(n, t);
}
function G2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cd(e, []).filter((a) => Kt(a) && Vr(a) !== "body"), o = null;
  const i = Xt(e).position === "fixed";
  let s = i ? zn(e) : e;
  for (; Kt(s) && !Pr(s); ) {
    const a = Xt(s), l = ua(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && W2.has(o.position) || _o(s) && !l && Nd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = zn(s);
  }
  return t.set(e, r), r;
}
function U2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ei(t) ? [] : G2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = $l(t, u, o);
    return l.top = vr(d.top, l.top), l.right = ro(d.right, l.right), l.bottom = ro(d.bottom, l.bottom), l.left = vr(d.left, l.left), l;
  }, $l(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function J2(e) {
  const {
    width: t,
    height: n
  } = kd(e);
  return {
    width: t,
    height: n
  };
}
function Q2(e, t, n) {
  const r = dn(t), o = En(t), i = n === "fixed", s = oo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = an(0);
  function u() {
    l.x = Pi(o);
  }
  if (r || !r && !i)
    if ((Vr(t) !== "body" || _o(o)) && (a = Ni(t)), r) {
      const g = oo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Ed(o, a) : an(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Ki(e) {
  return Xt(e).position === "static";
}
function Cl(e, t) {
  if (!dn(e) || Xt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return En(e) === n && (n = n.ownerDocument.body), n;
}
function Pd(e, t) {
  const n = Et(e);
  if (Ei(e))
    return n;
  if (!dn(e)) {
    let o = zn(e);
    for (; o && !Pr(o); ) {
      if (Kt(o) && !Ki(o))
        return o;
      o = zn(o);
    }
    return n;
  }
  let r = Cl(e, t);
  for (; r && V2(r) && Ki(r); )
    r = Cl(r, t);
  return r && Pr(r) && Ki(r) && !ua(r) ? n : r || q2(e) || n;
}
const ey = async function(e) {
  const t = this.getOffsetParent || Pd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Q2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ty(e) {
  return Xt(e).direction === "rtl";
}
const ny = {
  convertOffsetParentRelativeRectToViewportRelativeRect: K2,
  getDocumentElement: En,
  getClippingRect: U2,
  getOffsetParent: Pd,
  getElementRects: ey,
  getClientRects: X2,
  getDimensions: J2,
  getScale: mr,
  isElement: Kt,
  isRTL: ty
}, ry = D2, oy = H2, iy = N2, sy = E2, ay = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ny,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return S2(e, t, {
    ...o,
    platform: i
  });
}, ly = ({
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
    ay(e, u, {
      placement: r,
      middleware: [
        ry(o),
        // 手动偏移配置
        iy(i),
        //自动翻转
        oy(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [sy({ element: d })] : []
      ]
    }).then(({ x: b, y: C, placement: x, middlewareData: S }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${C}px`
      }), l) {
        const { x: E, y: D } = S.arrow, H = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: E != null ? `${E}px` : "",
          top: D != null ? `${D}px` : "",
          right: "",
          bottom: "",
          [H]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function h() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function v(b) {
    b.stopPropagation(), f ? h() : g();
  }
  function w(b) {
    u.contains(b.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, v);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, v);
      }), document.removeEventListener("click", w);
    },
    hide() {
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var uy = /* @__PURE__ */ J('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function lr(e, t) {
  ue(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  Zn(() => (a = ly({
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
    set children(v) {
      n(v), m();
    },
    get floating() {
      return r();
    },
    set floating(v) {
      r(v), m();
    },
    get placement() {
      return o();
    },
    set placement(v = "bottom") {
      o(v), m();
    }
  }, d = uy(), p = I(d), f = I(p);
  Ye(f, n), A(p), Pt(p, (v) => i = v, () => i);
  var g = O(p, 2), h = I(g);
  return Ye(h, r), A(g), Pt(g, (v) => s = v, () => s), A(d), M(e, d), ce(u);
}
se(lr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function De(e, t) {
  ue(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), m();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), m();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), m();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), m();
    }
  }, a = _e(), l = oe(a);
  return Lp(l, () => `h${r()}`, !1, (u, d) => {
    Ue(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var p = _e(), f = oe(p);
    Ye(f, () => n() ?? at), M(d, p);
  }), M(e, a), ce(s);
}
se(De, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var cy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const dy = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function So(e, t) {
  ue(t, !0), Me(e, dy);
  const n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Pe(e, Ie(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = cy();
      M(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(So, {}, [], [], !0);
const fy = () => ({ deleteNode: (e) => {
  Be.removeNode(e), Be.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), or = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, py = () => ({ copyNode: (e) => {
  const t = Be.getNode(e);
  if (t) {
    const n = or(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Be.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), je = () => Vn("svelteflow__node_id"), An = () => Vn("tinyflow_options");
var gy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), hy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), vy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), my = /* @__PURE__ */ J('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), yy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, wy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, by = /* @__PURE__ */ J('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), xy = /* @__PURE__ */ J('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), $y = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Cy = /* @__PURE__ */ J('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), ky = /* @__PURE__ */ J('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const _y = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function zt(e, t) {
  ue(t, !0), Me(e, _y);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), p = y(t, "allowSettingOfCondition", 7, !0), f = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = ut(), C = /* @__PURE__ */ L(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = fy(), { copyNode: S } = py(), E = An(), D = () => {
    E.onNodeExecute?.(b(r()));
  };
  let H = je();
  var q = {
    get data() {
      return n();
    },
    set data(T) {
      n(T), m();
    },
    get id() {
      return r();
    },
    set id(T = "") {
      r(T), m();
    },
    get icon() {
      return o();
    },
    set icon(T) {
      o(T), m();
    },
    get handle() {
      return i();
    },
    set handle(T) {
      i(T), m();
    },
    get children() {
      return s();
    },
    set children(T) {
      s(T), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(T = !0) {
      a(T), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(T = !0) {
      l(T), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(T = !0) {
      u(T), m();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(T = !0) {
      d(T), m();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(T = !0) {
      p(T), m();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(T = !0) {
      f(T), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(T = !0) {
      g(T), m();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(T) {
      h(T), m();
    }
  }, B = ky(), U = oe(B);
  {
    var z = (T) => {
      pd(T, {
        get position() {
          return ve.Top;
        },
        align: "start",
        children: (Y, ee) => {
          var ne = Cy(), R = I(ne);
          {
            var j = (Q) => {
              Pe(Q, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (te, de) => {
                  var fe = gy();
                  M(te, fe);
                },
                $$slots: { default: !0 }
              });
            };
            ae(R, (Q) => {
              u() && Q(j);
            });
          }
          var W = O(R, 2);
          {
            var ie = (Q) => {
              Pe(Q, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  S(r());
                },
                children: (te, de) => {
                  var fe = hy();
                  M(te, fe);
                },
                $$slots: { default: !0 }
              });
            };
            ae(W, (Q) => {
              l() && Q(ie);
            });
          }
          var G = O(W, 2);
          {
            var me = (Q) => {
              Pe(Q, {
                class: "tf-node-toolbar-item",
                onclick: D,
                children: (te, de) => {
                  var fe = vy();
                  M(te, fe);
                },
                $$slots: { default: !0 }
              });
            };
            ae(G, (Q) => {
              a() && Q(me);
            });
          }
          var we = O(G, 2);
          {
            var re = (Q) => {
              lr(Q, {
                placement: "bottom",
                floating: (te) => {
                  var de = xy(), fe = I(de), le = O(I(fe));
                  Fe(le, {
                    style: "width: 100%;",
                    onchange: (Oe) => {
                      const We = Oe.target.value;
                      w(H, { title: We });
                    },
                    get value() {
                      return n().title;
                    }
                  }), A(fe);
                  var Ne = O(fe, 2), $e = O(I(Ne));
                  qe($e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Oe) => {
                      const We = Oe.target.value;
                      w(H, { description: We });
                    },
                    get value() {
                      return n().description;
                    }
                  }), A(Ne);
                  var K = O(Ne, 2);
                  {
                    var tt = (Oe) => {
                      var We = my(), pe = O(I(We));
                      qe(pe, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Re) => {
                          const ot = Re.target.value;
                          w(H, { condition: ot });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), A(We), M(Oe, We);
                    };
                    ae(K, (Oe) => {
                      p() && Oe(tt);
                    });
                  }
                  var He = O(K, 2), ze = O(I(He), 2);
                  rn(ze), ze.__change = [yy, w, H], A(He);
                  var Te = O(He, 2), nt = O(I(Te), 2);
                  rn(nt), nt.__change = [wy, w, H], A(Te);
                  var rt = O(Te, 2);
                  {
                    var Dt = (Oe) => {
                      var We = by(), pe = oe(We), Re = O(I(pe));
                      {
                        let mt = /* @__PURE__ */ L(() => n().loopIntervalMs || "1000");
                        qe(Re, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Gt) => {
                            const Pn = Gt.target.value;
                            w(H, { loopIntervalMs: Pn });
                          },
                          get value() {
                            return c(mt);
                          }
                        });
                      }
                      A(pe);
                      var ot = O(pe, 2), Je = O(I(ot));
                      {
                        let mt = /* @__PURE__ */ L(() => n().maxLoopCount || "0");
                        qe(Je, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Gt) => {
                            const Pn = Gt.target.value;
                            w(H, { maxLoopCount: Pn });
                          },
                          get value() {
                            return c(mt);
                          }
                        });
                      }
                      A(ot);
                      var kt = O(ot, 2), Ke = O(I(kt));
                      qe(Ke, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (mt) => {
                          const Gt = mt.target.value;
                          w(H, { loopBreakCondition: Gt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), A(kt), M(Oe, We);
                    };
                    ae(rt, (Oe) => {
                      n().loopEnable && Oe(Dt);
                    });
                  }
                  A(de), xe(() => {
                    ts(ze, !!n().async), ts(nt, !!n().loopEnable);
                  }), M(te, de);
                },
                children: (te, de) => {
                  Pe(te, {
                    class: "tf-node-toolbar-item",
                    children: (fe, le) => {
                      var Ne = $y();
                      M(fe, Ne);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(we, (Q) => {
              d() && Q(re);
            });
          }
          A(ne), M(Y, ne);
        },
        $$slots: { default: !0 }
      });
    };
    ae(U, (T) => {
      (a() || l() || u()) && T(z);
    });
  }
  var k = O(U, 2), _ = O(I(k), 2), $ = I(_);
  md($, {
    get items() {
      return c(C);
    },
    get activeKeys() {
      return v;
    },
    onChange: (T, Y) => {
      w(r(), { expand: Y?.includes("key") }), h()?.(Y?.includes("key") ? "key" : "");
    }
  }), A(_), A(k);
  var P = O(k, 2);
  {
    var N = (T) => {
      On(T, {
        type: "target",
        get position() {
          return ve.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(P, (T) => {
      g() && T(N);
    });
  }
  var V = O(P, 2);
  {
    var Z = (T) => {
      On(T, {
        type: "source",
        get position() {
          return ve.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(V, (T) => {
      f() && T(Z);
    });
  }
  var X = O(V, 2);
  return Ye(X, () => i() ?? at), M(e, B), ce(q);
}
kn(["change"]);
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
var Sy = /* @__PURE__ */ J('<div class="input-more-item svelte-2f9bnc">数据选项： <!></div>'), Ey = /* @__PURE__ */ J('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">输入方式： <!></div> <!> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <div class="input-more-item svelte-2f9bnc">占位符： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), Ny = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Py = /* @__PURE__ */ J('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const Ly = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ld(e, t) {
  ue(t, !0), Me(e, Ly);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = je(), i = Sn(o), s = /* @__PURE__ */ L(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ut(), l = (q, B) => {
    a(o, (U) => {
      let z = U.data.parameters;
      return z[r()][q] = B, { parameters: z };
    });
  }, u = (q, B) => {
    const U = B.target.value;
    l(q, U);
  }, d = (q) => {
    const B = q.target.value;
    l("name", B);
  }, p = (q) => {
    const B = q.target.checked;
    l("required", B);
  }, f = (q) => {
    const B = q.value;
    l("formType", B);
  }, g = (q) => {
    const B = q.value;
    l("contentType", B);
  };
  let h;
  const v = () => {
    a(o, (q) => {
      let B = q.data.parameters;
      return B.splice(r(), 1), { parameters: [...B] };
    }), h?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(q) {
      n(q), m();
    },
    get index() {
      return r();
    },
    set index(q) {
      r(q), m();
    }
  }, b = Py(), C = oe(b), x = I(C);
  Fe(x, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), A(C);
  var S = O(C, 2), E = I(S);
  gd(E, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), A(S);
  var D = O(S, 2), H = I(D);
  return Pt(
    lr(H, {
      placement: "bottom",
      floating: (q) => {
        var B = Ey(), U = I(B), z = O(I(U));
        {
          let R = /* @__PURE__ */ L(() => c(s).contentType ? [c(s).contentType] : []);
          st(z, {
            get items() {
              return sa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(R);
            },
            onSelect: g
          });
        }
        A(U);
        var k = O(U, 2), _ = O(I(k));
        {
          let R = /* @__PURE__ */ L(() => c(s).formType ? [c(s).formType] : []);
          st(_, {
            get items() {
              return Zm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(R);
            },
            onSelect: f
          });
        }
        A(k);
        var $ = O(k, 2);
        {
          var P = (R) => {
            var j = Sy(), W = O(I(j));
            {
              let ie = /* @__PURE__ */ L(() => c(s).enums?.join(`
`));
              qe(W, {
                rows: 3,
                style: "width: 100%;",
                onchange: (G) => {
                  l("enums", G.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(ie);
                },
                placeholder: "一行一个选项"
              });
            }
            A(j), M(R, j);
          };
          ae($, (R) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && R(P);
          });
        }
        var N = O($, 2), V = O(I(N));
        qe(V, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            u("formLabel", R);
          },
          get value() {
            return c(s).formLabel;
          }
        }), A(N);
        var Z = O(N, 2), X = O(I(Z));
        qe(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formDescription", R);
          },
          get value() {
            return c(s).formDescription;
          }
        }), A(Z);
        var T = O(Z, 2), Y = O(I(T));
        qe(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formPlaceholder", R);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), A(T);
        var ee = O(T, 2), ne = I(ee);
        Pe(ne, {
          onclick: v,
          children: (R, j) => {
            he();
            var W = Ce("删除");
            M(R, W);
          },
          $$slots: { default: !0 }
        }), A(ee), A(B), M(q, B);
      },
      children: (q, B) => {
        Pe(q, {
          class: "input-btn-more",
          children: (U, z) => {
            var k = Ny();
            M(U, k);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (q) => h = q,
    () => h
  ), A(D), M(e, b), ce(w);
}
se(Ld, { parameter: {}, index: {} }, [], [], !0);
var Dy = /* @__PURE__ */ J('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Hy = /* @__PURE__ */ J('<div class="none-params svelte-3n0wca">无输入参数</div>'), My = /* @__PURE__ */ J('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Ty = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Dd(e, t) {
  ue(t, !0), Me(e, Ty);
  let n = je(), r = Sn(n), o = /* @__PURE__ */ L(() => [...r?.current?.data?.parameters || []]);
  var i = My(), s = I(i);
  {
    var a = (u) => {
      var d = Dy();
      he(4), M(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = O(s, 2);
  pt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      Ld(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(p);
        }
      });
    },
    (u) => {
      var d = Hy();
      M(u, d);
    }
  ), A(i), M(e, i), ce();
}
se(Dd, {}, [], [], !0);
const io = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = or()), io(t.children);
}), e), Ft = () => {
  const { updateNodeData: e } = ut();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => io(s?.children)) : io(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: or()
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
var Vy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Oy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = /* @__PURE__ */ J('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Ay = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Hd(e, t) {
  ue(t, !0), Me(e, Ay);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return zt(e, Ie(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = Vy();
      M(a, l);
    },
    children: (a, l) => {
      var u = zy(), d = oe(u), p = I(d);
      De(p, {
        level: 3,
        children: (h, v) => {
          he();
          var w = Ce("输入参数");
          M(h, w);
        },
        $$slots: { default: !0 }
      });
      var f = O(p, 2);
      Pe(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (h, v) => {
          var w = Oy();
          M(h, w);
        },
        $$slots: { default: !0 }
      }), A(d);
      var g = O(d, 2);
      Dd(g, {}), M(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce(s);
}
se(Hd, { data: {} }, [], [], !0);
const Md = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Md(e, r.source, n));
}, Td = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Td(r.children, t + "." + r.name, n)
})), kl = (e, t, n) => {
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
          children: Td(r, e.id, t)
        };
    }
  }
}, Vd = (e = !1) => {
  const t = je(), n = Sn(t), r = /* @__PURE__ */ L(Wt), o = /* @__PURE__ */ L(() => c(r).nodes), i = /* @__PURE__ */ L(() => c(r).edges), s = /* @__PURE__ */ L(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ L(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = kl(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Md(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = kl(p, f, u);
          g && l.push(g);
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
var Iy = /* @__PURE__ */ J('<div class="input-more-item svelte-laou7w">数据内容： <!></div>'), qy = /* @__PURE__ */ J('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <!> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Zy = /* @__PURE__ */ J('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Ry = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Od(e, t) {
  ue(t, !0), Me(e, Ry), Zn(() => {
    c(u).refType || h({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7), s = y(t, "showContentType", 7, !1);
  let a = je(), l = Sn(a), u = /* @__PURE__ */ L(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ut(), p = (_, $) => {
    d(a, (P) => {
      let N = P.data?.[o()];
      return N[r()] = { ...N[r()], [_]: $ }, { [o()]: N };
    });
  }, f = (_, $) => {
    const P = $.target.value;
    p(_, P);
  }, g = (_) => {
    const $ = _.value;
    p("ref", $);
  }, h = (_) => {
    const $ = _.value;
    p("refType", $);
  }, v = (_) => {
    const $ = _.value;
    p("contentType", $);
  };
  let w;
  const b = () => {
    d(a, (_) => {
      let $ = _.data?.[o()];
      return $.splice(r(), 1), { [o()]: [...$] };
    }), w?.hide();
  };
  let C = Vd(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), m();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), m();
    },
    get showContentType() {
      return s();
    },
    set showContentType(_ = !1) {
      s(_), m();
    }
  }, S = Zy(), E = oe(S), D = I(E);
  {
    let _ = /* @__PURE__ */ L(() => c(u).nameDisabled === !0);
    Fe(D, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(_);
      },
      oninput: ($) => f("name", $)
    });
  }
  A(E);
  var H = O(E, 2), q = I(H);
  {
    var B = (_) => {
      Fe(_, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: ($) => f("value", $)
      });
    }, U = (_) => {
      var $ = _e(), P = oe($);
      {
        var N = (V) => {
          {
            let Z = /* @__PURE__ */ L(() => [c(u).ref]);
            st(V, {
              get items() {
                return C.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(Z);
              },
              expandAll: !0,
              onSelect: g
            });
          }
        };
        ae(
          P,
          (V) => {
            c(u).refType !== "input" && V(N);
          },
          !0
        );
      }
      M(_, $);
    };
    ae(q, (_) => {
      c(u).refType === "fixed" ? _(B) : _(U, !1);
    });
  }
  A(H);
  var z = O(H, 2), k = I(z);
  return Pt(
    lr(k, {
      placement: "bottom",
      floating: (_) => {
        var $ = qy(), P = I($), N = O(I(P));
        {
          let j = /* @__PURE__ */ L(() => c(u).refType ? [c(u).refType] : []);
          st(N, {
            get items() {
              return qm;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(j);
            },
            onSelect: h
          });
        }
        A(P);
        var V = O(P, 2);
        {
          var Z = (j) => {
            var W = Iy(), ie = O(I(W));
            {
              let G = /* @__PURE__ */ L(() => c(u).contentType ? [c(u).contentType] : []);
              st(ie, {
                get items() {
                  return sa;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(G);
                },
                onSelect: v
              });
            }
            A(W), M(j, W);
          };
          ae(V, (j) => {
            s() && j(Z);
          });
        }
        var X = O(V, 2), T = O(I(X));
        qe(T, {
          rows: 1,
          style: "width: 100%;",
          onchange: (j) => {
            f("defaultValue", j);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), A(X);
        var Y = O(X, 2), ee = O(I(Y));
        qe(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (j) => {
            f("description", j);
          },
          get value() {
            return c(u).description;
          }
        }), A(Y);
        var ne = O(Y, 2), R = I(ne);
        Pe(R, {
          onclick: b,
          children: (j, W) => {
            he();
            var ie = Ce("删除");
            M(j, ie);
          },
          $$slots: { default: !0 }
        }), A(ne), A($), M(_, $);
      },
      children: (_, $) => {
        So(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => w = _,
    () => w
  ), A(z), M(e, S), ce(x);
}
se(
  Od,
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
var By = /* @__PURE__ */ J('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ky = /* @__PURE__ */ J('<div class="none-params svelte-1sm1mgi"> </div>'), Xy = /* @__PURE__ */ J('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Yy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function bt(e, t) {
  ue(t, !0), Me(e, Yy);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7), i = y(t, "showContentType", 7, !1);
  let s = je(), a = Sn(s), l = /* @__PURE__ */ L(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无输入参数") {
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
    },
    get showContentType() {
      return i();
    },
    set showContentType(h = !1) {
      i(h), m();
    }
  }, d = Xy(), p = I(d);
  {
    var f = (h) => {
      var v = By();
      he(4), M(h, v);
    };
    ae(p, (h) => {
      c(l).length !== 0 && h(f);
    });
  }
  var g = O(p, 2);
  return pt(
    g,
    19,
    () => c(l),
    (h) => h.id,
    (h, v, w) => {
      Od(h, {
        get parameter() {
          return c(v);
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
    (h) => {
      var v = Ky(), w = I(v, !0);
      A(v), xe(() => Ae(w, n())), M(h, v);
    }
  ), A(d), M(e, d), ce(u);
}
se(
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
var jy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Wy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ J('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Gy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function zd(e, t) {
  ue(t, !0), Me(e, Gy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return zt(e, Ie(
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
        var l = jy();
        M(a, l);
      },
      children: (a, l) => {
        var u = Fy(), d = oe(u), p = I(d);
        De(p, {
          level: 3,
          children: (h, v) => {
            he();
            var w = Ce("输出参数");
            M(h, w);
          },
          $$slots: { default: !0 }
        });
        var f = O(p, 2);
        Pe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (h, v) => {
            var w = Wy();
            M(h, w);
          },
          $$slots: { default: !0 }
        }), A(d);
        var g = O(d, 2);
        bt(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), M(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(s);
}
se(zd, { data: {} }, [], [], !0);
const Xi = (e) => JSON.parse(JSON.stringify(e));
var Uy = /* @__PURE__ */ ge('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Jy = /* @__PURE__ */ J('<div class="input-more-item svelte-1cfeest"><!></div>'), Qy = /* @__PURE__ */ J('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ew = /* @__PURE__ */ J('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const tw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  ue(t, !0), Me(e, tw);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7), i = y(t, "placeholder", 7, "请输入参数值");
  let s = je(), a = Sn(s), l = /* @__PURE__ */ L(() => {
    let k = a?.current?.data?.[o()], _;
    if (k && r().length > 0) {
      let $ = k;
      for (let P = 0; P < r().length; P++) {
        const N = r()[P];
        P == r().length - 1 ? _ = $[N] : $ = $[N].children;
      }
    }
    return { ...n(), ..._ };
  });
  const { updateNodeData: u } = ut(), d = (k, _) => {
    u(s, ($) => {
      const P = $.data?.[o()];
      if (P && r().length > 0) {
        let N = P;
        for (let V = 0; V < r().length; V++) {
          const Z = r()[V];
          V == r().length - 1 ? N[Z] = { ...N[Z], [k]: _ } : N = N[Z].children;
        }
      }
      return { [o()]: [...Xi(P)] };
    });
  }, p = (k, _) => {
    const $ = _.target.value;
    d(k, $);
  }, f = (k) => {
    const _ = k.value;
    d("dataType", _);
  };
  let g;
  const h = () => {
    u(s, (k) => {
      let _ = k.data?.[o()];
      if (_ && r().length > 0) {
        let $ = _;
        for (let P = 0; P < r().length; P++) {
          const N = r()[P];
          P == r().length - 1 ? $.splice(N, 1) : $ = $[N].children;
        }
      }
      return { [o()]: [...Xi(_)] };
    }), g?.hide();
  }, v = () => {
    u(s, (k) => {
      let _ = k.data?.[o()];
      if (_ && r().length > 0) {
        let $ = _;
        for (let P = 0; P < r().length; P++) {
          const N = r()[P];
          P == r().length - 1 ? $[N].children ? $[N].children.push({ id: or(), name: "newParam", dataType: "String" }) : $[N].children = [{ id: or(), name: "newParam", dataType: "String" }] : $ = $[N].children;
        }
      }
      return { [o()]: [...Xi(_)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), m();
    },
    get position() {
      return r();
    },
    set position(k) {
      r(k), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(k = "请输入参数值") {
      i(k), m();
    }
  }, b = ew(), C = oe(b), x = I(C);
  {
    var S = (k) => {
      var _ = _e(), $ = oe(_);
      pt($, 17, r, $r, (P, N) => {
        he();
        var V = Ce(" ");
        M(P, V);
      }), M(k, _);
    };
    ae(x, (k) => {
      r().length > 1 && k(S);
    });
  }
  var E = O(x, 2);
  {
    let k = /* @__PURE__ */ L(() => c(l).nameDisabled === !0);
    Fe(E, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (_) => {
        p("name", _);
      },
      get disabled() {
        return c(k);
      }
    });
  }
  A(C);
  var D = O(C, 2), H = I(D);
  {
    let k = /* @__PURE__ */ L(() => c(l).dataType ? [c(l).dataType] : []), _ = /* @__PURE__ */ L(() => c(l).dataTypeDisabled === !0);
    st(H, {
      get items() {
        return Im;
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(k);
      },
      get disabled() {
        return c(_);
      },
      onSelect: f
    });
  }
  var q = O(H, 2);
  {
    var B = (k) => {
      Pe(k, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: v,
        children: (_, $) => {
          var P = Uy();
          M(_, P);
        },
        $$slots: { default: !0 }
      });
    };
    ae(q, (k) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && k(B);
    });
  }
  A(D);
  var U = O(D, 2), z = I(U);
  return Pt(
    lr(z, {
      placement: "bottom",
      floating: (k) => {
        var _ = Qy(), $ = I(_), P = O(I($));
        {
          let T = /* @__PURE__ */ L(() => c(l).defaultValue || "");
          qe(P, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(T);
            },
            onchange: (Y) => {
              p("defaultValue", Y);
            }
          });
        }
        A($);
        var N = O($, 2), V = O(I(N));
        {
          let T = /* @__PURE__ */ L(() => c(l).description || "");
          qe(V, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(T);
            },
            onchange: (Y) => {
              p("description", Y);
            }
          });
        }
        A(N);
        var Z = O(N, 2);
        {
          var X = (T) => {
            var Y = Jy(), ee = I(Y);
            Pe(ee, {
              onclick: h,
              children: (ne, R) => {
                he();
                var j = Ce("删除");
                M(ne, j);
              },
              $$slots: { default: !0 }
            }), A(Y), M(T, Y);
          };
          ae(Z, (T) => {
            c(l).deleteDisabled !== !0 && T(X);
          });
        }
        A(_), M(k, _);
      },
      children: (k, _) => {
        So(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => g = k,
    () => g
  ), A(U), M(e, b), ce(w);
}
se(
  Ad,
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
var nw = /* @__PURE__ */ J("<!> <!>", 1), rw = /* @__PURE__ */ J('<div class="none-params svelte-1sm1mgi"> </div>'), ow = /* @__PURE__ */ J('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), iw = /* @__PURE__ */ J('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const sw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Nn(e, t) {
  ue(t, !0), Me(e, sw);
  const n = (h, v = at, w = at) => {
    var b = _e(), C = oe(b);
    pt(
      C,
      19,
      v,
      (x) => `${x.id}_${x.children ? x.children.length : 0}`,
      (x, S, E) => {
        var D = nw(), H = oe(D);
        {
          let U = /* @__PURE__ */ L(() => [...w(), c(E)]);
          Ad(H, {
            get parameter() {
              return c(S);
            },
            get position() {
              return c(U);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var q = O(H, 2);
        {
          var B = (U) => {
            {
              let z = /* @__PURE__ */ L(() => [...w(), c(E)]);
              n(U, () => c(S).children, () => c(z));
            }
          };
          ae(q, (U) => {
            c(S).children && U(B);
          });
        }
        M(x, D);
      },
      (x) => {
        var S = _e(), E = oe(S);
        {
          var D = (H) => {
            var q = rw(), B = I(q, !0);
            A(q), xe(() => Ae(B, r())), M(H, q);
          };
          ae(E, (H) => {
            w().length === 0 && H(D);
          });
        }
        M(x, S);
      }
    ), M(h, b);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs"), i = y(t, "placeholder", 7, "请输入参数名称");
  let s = je(), a = Sn(s), l = /* @__PURE__ */ L(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(h = "无输出参数") {
      r(h), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(h = "outputDefs") {
      o(h), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(h = "请输入参数名称") {
      i(h), m();
    }
  }, d = iw(), p = I(d);
  {
    var f = (h) => {
      var v = ow();
      he(4), M(h, v);
    };
    ae(p, (h) => {
      c(l).length !== 0 && h(f);
    });
  }
  var g = O(p, 2);
  return n(g, () => c(l) || [], () => []), A(d), M(e, d), ce(u);
}
se(Nn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var aw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), lw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), cw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), dw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), fw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ J('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const gw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Id(e, t) {
  ue(t, !0), Me(e, gw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft(), s = An();
  let a = /* @__PURE__ */ Se(Tt([]));
  Zn(async () => {
    const p = await s.provider?.llm?.();
    c(a).push(...p || []);
  });
  const { updateNodeData: l } = ut(), u = (p) => {
    l(o, () => ({ outType: p })), p === "text" ? l(o, {
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
  Xe(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(p) {
      n(p), m();
    }
  };
  return zt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (p) => {
        var f = aw();
        M(p, f);
      },
      children: (p, f) => {
        var g = pw(), h = oe(g), v = I(h);
        De(v, {
          level: 3,
          children: (re, Q) => {
            he();
            var te = Ce("输入参数");
            M(re, te);
          },
          $$slots: { default: !0 }
        });
        var w = O(v, 2);
        Pe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (re, Q) => {
            var te = lw();
            M(re, te);
          },
          $$slots: { default: !0 }
        }), A(h);
        var b = O(h, 2);
        bt(b, {});
        var C = O(b, 2);
        De(C, {
          level: 3,
          mt: "10px",
          children: (re, Q) => {
            he();
            var te = Ce("模型设置");
            M(re, te);
          },
          $$slots: { default: !0 }
        });
        var x = O(C, 4), S = I(x);
        {
          let re = /* @__PURE__ */ L(() => n().llmId ? [n().llmId] : []);
          st(S, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (Q) => {
              const te = Q.value;
              l(o, () => ({ llmId: te }));
            },
            get value() {
              return c(re);
            }
          });
        }
        var E = O(S, 2);
        So(E, {}), A(x);
        var D = O(x, 4), H = I(D), q = I(H), B = I(q);
        A(q);
        var U = O(q, 2);
        rn(U), U.__input = [uw, l, o], A(H), A(D);
        var z = O(D, 2), k = I(z), _ = I(k), $ = I(_);
        A(_);
        var P = O(_, 2);
        rn(P), P.__input = [cw, l, o], A(k), A(z);
        var N = O(z, 2), V = I(N), Z = I(V), X = I(Z);
        A(Z);
        var T = O(Z, 2);
        rn(T), T.__input = [dw, l, o], A(V), A(N);
        var Y = O(N, 4), ee = I(Y);
        {
          let re = /* @__PURE__ */ L(() => n().systemPrompt || "");
          qe(ee, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(re);
            },
            oninput: (Q) => {
              l(o, { systemPrompt: Q.target.value });
            }
          });
        }
        A(Y);
        var ne = O(Y, 4), R = I(ne);
        {
          let re = /* @__PURE__ */ L(() => n().userPrompt || "");
          qe(R, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(re);
            },
            oninput: (Q) => {
              l(o, { userPrompt: Q.target.value });
            }
          });
        }
        A(ne);
        var j = O(ne, 2), W = I(j);
        De(W, {
          level: 3,
          children: (re, Q) => {
            he();
            var te = Ce("输出参数");
            M(re, te);
          },
          $$slots: { default: !0 }
        });
        var ie = O(W, 2);
        {
          let re = /* @__PURE__ */ L(() => n().outType ? [n().outType] : []);
          st(ie, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            defaultValue: "text",
            onSelect: (Q) => {
              u(Q.value);
            },
            get value() {
              return c(re);
            }
          });
        }
        var G = O(ie, 2);
        {
          var me = (re) => {
            Pe(re, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Q, te) => {
                var de = fw();
                M(Q, de);
              },
              $$slots: { default: !0 }
            });
          };
          ae(G, (re) => {
            n().outType === "json" && re(me);
          });
        }
        A(j);
        var we = O(j, 2);
        Nn(we, {}), xe(() => {
          Ae(B, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), zo(U, n().temperature ?? 0.5), Ae($, `Top P: ${n().topP ?? 0.9 ?? ""}`), zo(P, n().topP ?? 0.9), Ae(X, `Top K: ${n().topK ?? 50 ?? ""}`), zo(T, n().topK ?? 50);
        }), M(p, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(d);
}
kn(["input"]);
se(Id, { data: {} }, [], [], !0);
var hw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  ue(t, !0), Me(e, ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Zn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = je(), { addParameter: i } = Ft(), { updateNodeData: s } = ut(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  };
  return zt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = hw();
        M(u, d);
      },
      children: (u, d) => {
        var p = yw(), f = oe(p), g = I(f);
        De(g, {
          level: 3,
          children: (B, U) => {
            he();
            var z = Ce("输入参数");
            M(B, z);
          },
          $$slots: { default: !0 }
        });
        var h = O(g, 2);
        Pe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (B, U) => {
            var z = vw();
            M(B, z);
          },
          $$slots: { default: !0 }
        }), A(f);
        var v = O(f, 2);
        bt(v, {});
        var w = O(v, 2);
        De(w, {
          level: 3,
          mt: "10px",
          children: (B, U) => {
            he();
            var z = Ce("代码");
            M(B, z);
          },
          $$slots: { default: !0 }
        });
        var b = O(w, 4), C = I(b);
        {
          let B = /* @__PURE__ */ L(() => n().engine ? [n().engine] : ["qlexpress"]);
          st(C, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (U) => {
              const z = U.value;
              s(o, () => ({ engine: z }));
            },
            get value() {
              return c(B);
            }
          });
        }
        A(b);
        var x = O(b, 4), S = I(x);
        {
          let B = /* @__PURE__ */ L(() => n().code || "");
          qe(S, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
            style: "width: 100%",
            onchange: (U) => {
              s(o, () => ({ code: U.target.value }));
            },
            get value() {
              return c(B);
            }
          });
        }
        A(x);
        var E = O(x, 2), D = I(E);
        De(D, {
          level: 3,
          mt: "10px",
          children: (B, U) => {
            he();
            var z = Ce("输出参数");
            M(B, z);
          },
          $$slots: { default: !0 }
        });
        var H = O(D, 2);
        Pe(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (B, U) => {
            var z = mw();
            M(B, z);
          },
          $$slots: { default: !0 }
        }), A(E);
        var q = O(E, 2);
        Nn(q, {}), M(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
se(qd, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), xw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Cw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ue(t, !0), Me(e, Cw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft(), { updateNodeData: s } = ut();
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
      n(l), m();
    }
  };
  return zt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = bw();
        M(l, u);
      },
      children: (l, u) => {
        var d = $w(), p = oe(d), f = I(p);
        De(f, {
          level: 3,
          children: (E, D) => {
            he();
            var H = Ce("输入参数");
            M(E, H);
          },
          $$slots: { default: !0 }
        });
        var g = O(f, 2);
        Pe(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, D) => {
            var H = xw();
            M(E, H);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = O(p, 2);
        bt(h, {});
        var v = O(h, 2);
        De(v, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (E, D) => {
            he();
            var H = Ce("模板内容");
            M(E, H);
          },
          $$slots: { default: !0 }
        });
        var w = O(v, 2), b = I(w);
        {
          let E = /* @__PURE__ */ L(() => n().template || "");
          qe(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ template: D.target.value }));
            },
            get value() {
              return c(E);
            }
          });
        }
        A(w);
        var C = O(w, 2), x = I(C);
        De(x, {
          level: 3,
          mt: "10px",
          children: (E, D) => {
            he();
            var H = Ce("输出参数");
            M(E, H);
          },
          $$slots: { default: !0 }
        }), A(C);
        var S = O(C, 2);
        Nn(S, {}), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
se(Zd, { data: {} }, [], [], !0);
var kw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), _w = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ J('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), Nw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ J('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), Lw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ J('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), Hw = /* @__PURE__ */ J('<div style="width: 100%"><!></div>'), Mw = /* @__PURE__ */ J('<div style="width: 100%"><!></div>'), Tw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ J('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const Ow = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Rd(e, t) {
  ue(t, !0), Me(e, Ow);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Zn(() => {
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
  ], i = je(), { addParameter: s } = Ft(), { updateNodeData: a } = ut();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  };
  return zt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = kw();
        M(u, d);
      },
      children: (u, d) => {
        var p = Vw(), f = oe(p), g = I(f);
        De(g, {
          level: 3,
          children: (R, j) => {
            he();
            var W = Ce("输入参数");
            M(R, W);
          },
          $$slots: { default: !0 }
        });
        var h = O(g, 2);
        Pe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (R, j) => {
            var W = _w();
            M(R, W);
          },
          $$slots: { default: !0 }
        }), A(f);
        var v = O(f, 2);
        bt(v, {});
        var w = O(v, 2);
        De(w, {
          level: 3,
          mt: "10px",
          children: (R, j) => {
            he();
            var W = Ce("URL 地址");
            M(R, W);
          },
          $$slots: { default: !0 }
        });
        var b = O(w, 2), C = I(b), x = I(C);
        {
          let R = /* @__PURE__ */ L(() => n().method ? [n().method] : ["get"]);
          st(x, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (j) => {
              const W = j.value;
              a(i, () => ({ method: W }));
            },
            get value() {
              return c(R);
            }
          });
        }
        A(C);
        var S = O(C, 2), E = I(S);
        {
          let R = /* @__PURE__ */ L(() => n().url || "");
          Fe(E, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (j) => {
              a(i, () => ({ url: j.target.value }));
            },
            get value() {
              return c(R);
            }
          });
        }
        A(S), A(b);
        var D = O(b, 2), H = I(D);
        De(H, {
          level: 3,
          children: (R, j) => {
            he();
            var W = Ce("Http 头信息");
            M(R, W);
          },
          $$slots: { default: !0 }
        });
        var q = O(H, 2);
        Pe(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (R, j) => {
            var W = Sw();
            M(R, W);
          },
          $$slots: { default: !0 }
        }), A(D);
        var B = O(D, 2);
        bt(B, { dataKeyName: "headers" });
        var U = O(B, 2);
        {
          var z = (R) => {
            var j = Ew(), W = oe(j);
            De(W, {
              level: 3,
              mt: "10px",
              children: ($e, K) => {
                he();
                var tt = Ce("Body");
                M($e, tt);
              },
              $$slots: { default: !0 }
            });
            var ie = O(W, 2), G = I(ie), me = I(G);
            {
              let $e = /* @__PURE__ */ L(() => !n().bodyType || n().bodyType === "");
              Fe(me, {
                type: "radio",
                name: "bodyType",
                value: "",
                get checked() {
                  return c($e);
                },
                onchange: (K) => {
                  K.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            he(), A(G);
            var we = O(G, 2), re = I(we);
            {
              let $e = /* @__PURE__ */ L(() => n().bodyType === "form-data");
              Fe(re, {
                type: "radio",
                name: "bodyType",
                value: "form-data",
                get checked() {
                  return c($e);
                },
                onchange: (K) => {
                  K.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            he(), A(we);
            var Q = O(we, 2), te = I(Q);
            {
              let $e = /* @__PURE__ */ L(() => n().bodyType === "x-www-form-urlencoded");
              Fe(te, {
                type: "radio",
                name: "bodyType",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c($e);
                },
                onchange: (K) => {
                  K.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            he(), A(Q);
            var de = O(Q, 2), fe = I(de);
            {
              let $e = /* @__PURE__ */ L(() => n().bodyType === "json");
              Fe(fe, {
                type: "radio",
                name: "bodyType",
                value: "json",
                get checked() {
                  return c($e);
                },
                onchange: (K) => {
                  K.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            he(), A(de);
            var le = O(de, 2), Ne = I(le);
            {
              let $e = /* @__PURE__ */ L(() => n().bodyType === "raw");
              Fe(Ne, {
                type: "radio",
                name: "bodyType",
                value: "raw",
                get checked() {
                  return c($e);
                },
                onchange: (K) => {
                  K.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            he(), A(le), A(ie), M(R, j);
          };
          ae(U, (R) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && R(z);
          });
        }
        var k = O(U, 2);
        {
          var _ = (R) => {
            var j = Pw(), W = oe(j), ie = I(W);
            De(ie, {
              level: 3,
              children: (we, re) => {
                he();
                var Q = Ce("参数");
                M(we, Q);
              },
              $$slots: { default: !0 }
            });
            var G = O(ie, 2);
            Pe(G, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (we, re) => {
                var Q = Nw();
                M(we, Q);
              },
              $$slots: { default: !0 }
            }), A(W);
            var me = O(W, 2);
            bt(me, { dataKeyName: "formData" }), M(R, j);
          };
          ae(k, (R) => {
            n().bodyType === "form-data" && R(_);
          });
        }
        var $ = O(k, 2);
        {
          var P = (R) => {
            var j = Dw(), W = oe(j), ie = I(W);
            De(ie, {
              level: 3,
              children: (we, re) => {
                he();
                var Q = Ce("Body 参数");
                M(we, Q);
              },
              $$slots: { default: !0 }
            });
            var G = O(ie, 2);
            Pe(G, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (we, re) => {
                var Q = Lw();
                M(we, Q);
              },
              $$slots: { default: !0 }
            }), A(W);
            var me = O(W, 2);
            bt(me, { dataKeyName: "formUrlencoded" }), M(R, j);
          };
          ae($, (R) => {
            n().bodyType === "x-www-form-urlencoded" && R(P);
          });
        }
        var N = O($, 2);
        {
          var V = (R) => {
            var j = Hw(), W = I(j);
            qe(W, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ie) => {
                a(i, { bodyJson: ie.target.value });
              }
            }), A(j), M(R, j);
          };
          ae(N, (R) => {
            n().bodyType === "json" && R(V);
          });
        }
        var Z = O(N, 2);
        {
          var X = (R) => {
            var j = Mw(), W = I(j);
            qe(W, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ie) => {
                a(i, { bodyRaw: ie.target.value });
              }
            }), A(j), M(R, j);
          };
          ae(Z, (R) => {
            n().bodyType === "raw" && R(X);
          });
        }
        var T = O(Z, 2), Y = I(T);
        De(Y, {
          level: 3,
          mt: "10px",
          children: (R, j) => {
            he();
            var W = Ce("输出参数");
            M(R, W);
          },
          $$slots: { default: !0 }
        });
        var ee = O(Y, 2);
        Pe(ee, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (R, j) => {
            var W = Tw();
            M(R, W);
          },
          $$slots: { default: !0 }
        }), A(T);
        var ne = O(T, 2);
        Nn(ne, {}), M(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
se(Rd, { data: {} }, [], [], !0);
var zw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Aw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const qw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  ue(t, !0), Me(e, qw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft(), s = An();
  let a = /* @__PURE__ */ Se(Tt([]));
  Zn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ut();
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
  var u = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    }
  };
  return zt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = zw();
        M(d, p);
      },
      children: (d, p) => {
        var f = Iw(), g = oe(f), h = I(g);
        De(h, {
          level: 3,
          children: (z, k) => {
            he();
            var _ = Ce("输入参数");
            M(z, _);
          },
          $$slots: { default: !0 }
        });
        var v = O(h, 2);
        Pe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, k) => {
            var _ = Aw();
            M(z, _);
          },
          $$slots: { default: !0 }
        }), A(g);
        var w = O(g, 2);
        bt(w, {});
        var b = O(w, 2);
        De(b, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            he();
            var _ = Ce("知识库设置");
            M(z, _);
          },
          $$slots: { default: !0 }
        });
        var C = O(b, 4), x = I(C);
        {
          let z = /* @__PURE__ */ L(() => n().knowledgeId ? [n().knowledgeId] : []);
          st(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (k) => {
              const _ = k.value;
              l(o, () => ({ knowledgeId: _ }));
            },
            get value() {
              return c(z);
            }
          });
        }
        A(C);
        var S = O(C, 4), E = I(S);
        Fe(E, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), A(S);
        var D = O(S, 4), H = I(D);
        {
          let z = /* @__PURE__ */ L(() => n().limit || "");
          Fe(H, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (k) => {
              const _ = k.target.value;
              l(o, () => ({ limit: _ }));
            },
            get value() {
              return c(z);
            }
          });
        }
        A(D);
        var q = O(D, 2), B = I(q);
        De(B, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            he();
            var _ = Ce("输出参数");
            M(z, _);
          },
          $$slots: { default: !0 }
        }), A(q);
        var U = O(q, 2);
        Nn(U, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(u);
}
se(Bd, { data: {} }, [], [], !0);
var Zw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Rw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Kw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  ue(t, !0), Me(e, Kw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft(), s = An();
  let a = /* @__PURE__ */ Se(Tt([]));
  Zn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ut();
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
  var u = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    }
  };
  return zt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Zw();
        M(d, p);
      },
      children: (d, p) => {
        var f = Bw(), g = oe(f), h = I(g);
        De(h, {
          level: 3,
          children: (z, k) => {
            he();
            var _ = Ce("输入参数");
            M(z, _);
          },
          $$slots: { default: !0 }
        });
        var v = O(h, 2);
        Pe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, k) => {
            var _ = Rw();
            M(z, _);
          },
          $$slots: { default: !0 }
        }), A(g);
        var w = O(g, 2);
        bt(w, {});
        var b = O(w, 2);
        De(b, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            he();
            var _ = Ce("搜索引擎设置");
            M(z, _);
          },
          $$slots: { default: !0 }
        });
        var C = O(b, 4), x = I(C);
        {
          let z = /* @__PURE__ */ L(() => n().engine ? [n().engine] : []);
          st(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (k) => {
              const _ = k.value;
              l(o, () => ({ engine: _ }));
            },
            get value() {
              return c(z);
            }
          });
        }
        A(C);
        var S = O(C, 4), E = I(S);
        Fe(E, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), A(S);
        var D = O(S, 4), H = I(D);
        Fe(H, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (z) => {
            const k = z.target.value;
            l(o, () => ({ limit: k }));
          }
        }), A(D);
        var q = O(D, 2), B = I(q);
        De(B, {
          level: 3,
          mt: "10px",
          children: (z, k) => {
            he();
            var _ = Ce("输出参数");
            M(z, _);
          },
          $$slots: { default: !0 }
        }), A(q);
        var U = O(q, 2);
        Nn(U, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(u);
}
se(Kd, { data: {} }, [], [], !0);
var Xw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Yw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jw = /* @__PURE__ */ J('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const Ww = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Xd(e, t) {
  ue(t, !0), Me(e, Ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft();
  Xe(() => {
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
  return zt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Xw();
        M(a, l);
      },
      handle: (a) => {
        On(a, {
          type: "source",
          get position() {
            return ve.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = jw(), d = oe(u), p = I(d);
        De(p, {
          level: 3,
          children: (b, C) => {
            he();
            var x = Ce("循环变量");
            M(b, x);
          },
          $$slots: { default: !0 }
        }), A(d);
        var f = O(d, 2);
        bt(f, { dataKeyName: "loopVars" });
        var g = O(f, 2), h = I(g);
        De(h, {
          level: 3,
          children: (b, C) => {
            he();
            var x = Ce("输出参数");
            M(b, x);
          },
          $$slots: { default: !0 }
        });
        var v = O(h, 2);
        Pe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, C) => {
            var x = Yw();
            M(b, x);
          },
          $$slots: { default: !0 }
        }), A(g);
        var w = O(g, 2);
        bt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), M(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce(s);
}
se(Xd, { data: {} }, [], [], !0);
const Fw = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var Gw = /* @__PURE__ */ J('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), Uw = /* @__PURE__ */ J('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const Jw = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Yd(e, t) {
  ue(t, !0), Me(e, Jw);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = je(), a = Sn(s), l = /* @__PURE__ */ L(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ut(), d = (k, _) => {
    u(s, ($) => {
      let P = $.data?.[o()];
      return P[r()] = { ...P[r()], [k]: _ }, { [o()]: P };
    });
  }, p = (k, _) => {
    const $ = _.target.value;
    d(k, $);
  }, f = (k) => {
    const _ = k.value;
    d("ref", _);
  }, g = (k) => {
    const _ = k.value;
    d("formType", _);
  }, h = (k) => {
    const _ = k.value;
    d("contentType", _);
  };
  let v;
  const w = () => {
    u(s, (k) => {
      let _ = k.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
    }), v?.hide();
  };
  let b = Vd(i());
  var C = {
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
    }
  }, x = Uw(), S = oe(x), E = I(S);
  {
    let k = /* @__PURE__ */ L(() => c(l).nameDisabled === !0);
    Fe(E, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(k);
      },
      oninput: (_) => p("name", _)
    });
  }
  A(S);
  var D = O(S, 2), H = I(D);
  {
    var q = (k) => {
      Fe(k, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => p("value", _)
      });
    }, B = (k) => {
      var _ = _e(), $ = oe(_);
      {
        var P = (N) => {
          {
            let V = /* @__PURE__ */ L(() => [c(l).ref]);
            st(N, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(V);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        ae(
          $,
          (N) => {
            c(l).refType !== "input" && N(P);
          },
          !0
        );
      }
      M(k, _);
    };
    ae(H, (k) => {
      c(l).refType === "fixed" ? k(q) : k(B, !1);
    });
  }
  A(D);
  var U = O(D, 2), z = I(U);
  return Pt(
    lr(z, {
      placement: "bottom",
      floating: (k) => {
        var _ = Gw(), $ = I(_), P = O(I($));
        {
          let W = /* @__PURE__ */ L(() => c(l).contentType ? [c(l).contentType] : []);
          st(P, {
            get items() {
              return sa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(W);
            },
            onSelect: h
          });
        }
        A($);
        var N = O($, 2), V = O(I(N));
        {
          let W = /* @__PURE__ */ L(() => c(l).formType ? [c(l).formType] : []);
          st(V, {
            get items() {
              return Rm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(W);
            },
            onSelect: g
          });
        }
        A(N);
        var Z = O(N, 2), X = O(I(Z));
        qe(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            p("formLabel", W);
          },
          get value() {
            return c(l).formLabel;
          }
        }), A(Z);
        var T = O(Z, 2), Y = O(I(T));
        qe(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (W) => {
            p("formDescription", W);
          },
          get value() {
            return c(l).formDescription;
          }
        }), A(T);
        var ee = O(T, 2), ne = O(I(ee), 2);
        rn(ne), ts(ne, !1), ne.__change = [Fw, d], A(ee);
        var R = O(ee, 2), j = I(R);
        Pe(j, {
          onclick: w,
          children: (W, ie) => {
            he();
            var G = Ce("删除");
            M(W, G);
          },
          $$slots: { default: !0 }
        }), A(R), A(_), M(k, _);
      },
      children: (k, _) => {
        So(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => v = k,
    () => v
  ), A(U), M(e, x), ce(C);
}
kn(["change"]);
se(
  Yd,
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
var Qw = /* @__PURE__ */ J('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), eb = /* @__PURE__ */ J('<div class="none-params svelte-1sm1mgi"> </div>'), tb = /* @__PURE__ */ J('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const nb = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function jd(e, t) {
  ue(t, !0), Me(e, nb);
  const n = y(t, "noneParameterText", 7, "无确认数据"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = je(), s = Sn(i), a = /* @__PURE__ */ L(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = tb(), d = I(u);
  {
    var p = (g) => {
      var h = Qw();
      he(4), M(g, h);
    };
    ae(d, (g) => {
      c(a).length !== 0 && g(p);
    });
  }
  var f = O(d, 2);
  return pt(
    f,
    19,
    () => c(a),
    (g) => g.id,
    (g, h, v) => {
      Yd(g, {
        get parameter() {
          return c(h);
        },
        get index() {
          return c(v);
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
      var h = eb(), v = I(h, !0);
      A(h), xe(() => Ae(v, n())), M(g, h);
    }
  ), A(u), M(e, u), ce(l);
}
se(jd, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const vs = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!vs(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !vs(e[s], t[s])) return !1;
    return !0;
  }
};
var rb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ob = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ib = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  ue(t, !0), Me(e, sb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft(), { updateNodeData: s } = ut();
  Xe(() => {
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
      vs(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return zt(e, Ie(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = rb();
        M(l, u);
      },
      children: (l, u) => {
        var d = ib(), p = oe(d), f = I(p);
        De(f, {
          level: 3,
          children: (E, D) => {
            he();
            var H = Ce("确认数据");
            M(E, H);
          },
          $$slots: { default: !0 }
        });
        var g = O(f, 2);
        Pe(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (E, D) => {
            var H = ob();
            M(E, H);
          },
          $$slots: { default: !0 }
        }), A(p);
        var h = O(p, 2);
        jd(h, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var v = O(h, 2);
        De(v, {
          level: 3,
          mt: "10px",
          children: (E, D) => {
            he();
            var H = Ce("确认消息");
            M(E, H);
          },
          $$slots: { default: !0 }
        });
        var w = O(v, 4), b = I(w);
        {
          let E = /* @__PURE__ */ L(() => n().message || "");
          qe(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ message: D.target.value }));
            },
            get value() {
              return c(E);
            }
          });
        }
        A(w);
        var C = O(w, 2), x = I(C);
        De(x, {
          level: 3,
          mt: "10px",
          children: (E, D) => {
            he();
            var H = Ce("输出参数");
            M(E, H);
          },
          $$slots: { default: !0 }
        }), A(C);
        var S = O(C, 2);
        Nn(S, { placeholder: "" }), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
se(Wd, { data: {} }, [], [], !0);
const ab = {
  startNode: Hd,
  codeNode: qd,
  confirmNode: Wd,
  llmNode: Id,
  templateNode: Zd,
  httpNode: Rd,
  knowledgeNode: Bd,
  searchEngineNode: Kd,
  loopNode: Xd,
  endNode: zd
};
var lb = /* @__PURE__ */ J("<!> ", 1);
function ms(e, t) {
  ue(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), s = y(t, "extra", 7), a = (u) => {
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
      n(u), m();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), m();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), m();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), m();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), m();
    }
  };
  return Pe(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var p = lb(), f = oe(p);
      qs(f, n);
      var g = O(f);
      xe(() => Ae(g, ` ${r() ?? ""}`)), M(u, p);
    },
    $$slots: { default: !0 }
  }), ce(l);
}
se(ms, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var ub = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), cb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), db = /* @__PURE__ */ J('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Fd(e, t) {
  ue(t, !0);
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
  ], s = [], a = An(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((C, x) => (l[C].sortNo || 0) - (l[x].sortNo || 0));
    for (let C of b)
      l[C].group === "base" ? o.push({ type: C, ...l[C] }) : s.push({
        icon: l[C].icon,
        title: l[C].title,
        type: C
      });
    o.sort((C, x) => (C.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let C of b)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === C) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = db(), d = I(u), p = I(d), f = I(p);
  vd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      F(n, b.value.toString(), !0);
    }
  }), A(p);
  var g = O(p, 2), h = I(g);
  pt(h, 21, () => o, $r, (b, C) => {
    ms(b, Ie(() => c(C)));
  }), A(h);
  var v = O(h, 2);
  pt(v, 21, () => s, $r, (b, C) => {
    ms(b, Ie(() => c(C)));
  }), A(v), A(g), A(d);
  var w = O(d, 2);
  Pe(w, {
    onclick: () => {
      F(r, c(r) ? "" : "show", !0);
    },
    children: (b, C) => {
      var x = _e(), S = oe(x);
      {
        var E = (H) => {
          var q = ub();
          M(H, q);
        }, D = (H) => {
          var q = cb();
          M(H, q);
        };
        ae(S, (H) => {
          c(r) === "show" ? H(E) : H(D, !1);
        });
      }
      M(b, x);
    },
    $$slots: { default: !0 }
  }), A(u), xe(() => {
    Ct(u, 1, `tf-toolbar ${c(r) ?? ""}`), lt(h, `display: ${c(n) === "base" ? "flex" : "none"}`), lt(v, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), M(e, u), ce();
}
se(Fd, {}, [], [], !0);
const fb = () => ({ getNode: (e) => Be.getNode(e) }), pb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Be.updateNodes((n) => {
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
} }), gb = () => ({ getEdgesByTarget: (e) => Be.getEdges().filter((t) => t.target === e) });
var hb = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vb = /* @__PURE__ */ J('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), mb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), yb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), wb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), bb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), xb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), $b = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cb = /* @__PURE__ */ J('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), kb = /* @__PURE__ */ J("<!> <!> <div></div> <!>", 1);
const _b = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Gd(e, t) {
  ue(t, !0), Me(e, _b);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = Ft(), s = ut(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = An().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  Xe(() => {
    n().expand && h && h.append(p);
  }), Xe(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), Xe(() => {
    !n().parameters && f.parameters && l({
      parameters: io(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Xe(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: io(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  var v = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), m();
    }
  };
  {
    const w = (C) => {
      var x = _e(), S = oe(x);
      qs(S, () => f.icon), M(C, x);
    };
    let b = /* @__PURE__ */ L(() => ({ ...n(), description: f.description }));
    zt(e, Ie(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (C, x) => {
          var S = kb(), E = oe(S);
          {
            var D = (k) => {
              var _ = vb(), $ = oe(_), P = I($);
              De(P, {
                level: 3,
                children: (X, T) => {
                  he();
                  var Y = Ce("输入参数");
                  M(X, Y);
                },
                $$slots: { default: !0 }
              });
              var N = O(P, 2);
              {
                var V = (X) => {
                  Pe(X, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (T, Y) => {
                      var ee = hb();
                      M(T, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(N, (X) => {
                  f.parametersAddEnable !== !1 && X(V);
                });
              }
              A($);
              var Z = O($, 2);
              bt(Z, {}), M(k, _);
            };
            ae(E, (k) => {
              f.parametersEnable !== !1 && k(D);
            });
          }
          var H = O(E, 2);
          {
            var q = (k) => {
              var _ = _e(), $ = oe(_);
              pt($, 17, () => g, $r, (P, N) => {
                var V = _e(), Z = oe(V);
                {
                  var X = (Y) => {
                    var ee = mb(), ne = oe(ee), R = I(ne, !0);
                    A(ne);
                    var j = O(ne, 2), W = I(j);
                    {
                      let ie = /* @__PURE__ */ L(() => n()[c(N).name] || c(N).defaultValue);
                      Fe(W, Ie(
                        {
                          get placeholder() {
                            return c(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ie);
                          }
                        },
                        () => c(N).attrs,
                        {
                          onchange: (G) => {
                            u(c(N).name, G);
                          }
                        }
                      ));
                    }
                    A(j), xe(() => Ae(R, c(N).label)), M(Y, ee);
                  }, T = (Y) => {
                    var ee = _e(), ne = oe(ee);
                    {
                      var R = (W) => {
                        var ie = yb(), G = oe(ie), me = I(G, !0);
                        A(G);
                        var we = O(G, 2), re = I(we);
                        {
                          let Q = /* @__PURE__ */ L(() => n()[c(N).name] || c(N).defaultValue);
                          qe(re, Ie(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(N).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(Q);
                              }
                            },
                            () => c(N).attrs,
                            {
                              onchange: (te) => {
                                u(c(N).name, te);
                              }
                            }
                          ));
                        }
                        A(we), xe(() => Ae(me, c(N).label)), M(W, ie);
                      }, j = (W) => {
                        var ie = _e(), G = oe(ie);
                        {
                          var me = (re) => {
                            var Q = wb(), te = oe(Q), de = I(te, !0);
                            A(te);
                            var fe = O(te, 2), le = I(fe), Ne = I(le), $e = I(Ne);
                            A(Ne);
                            var K = O(Ne, 2);
                            rn(K);
                            var tt = (He) => l({ [c(N).name]: parseFloat(He.target.value) });
                            Ue(
                              K,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(N).attrs,
                                value: n()[c(N).name] ?? c(N).defaultValue,
                                oninput: tt
                              }),
                              void 0,
                              void 0,
                              "svelte-q0cqsa"
                            ), A(le), A(fe), xe(() => {
                              Ae(de, c(N).label), Ae($e, `${c(N).description ?? ""}: ${n()[c(N).name] ?? c(N).defaultValue ?? ""}`);
                            }), M(re, Q);
                          }, we = (re) => {
                            var Q = _e(), te = oe(Q);
                            {
                              var de = (le) => {
                                var Ne = bb(), $e = oe(Ne), K = I($e, !0);
                                A($e);
                                var tt = O($e, 2), He = I(tt);
                                {
                                  let ze = /* @__PURE__ */ L(() => c(N).options || []), Te = /* @__PURE__ */ L(() => n()[c(N).name] ? [n()[c(N).name]] : [c(N).defaultValue]);
                                  st(He, {
                                    get items() {
                                      return c(ze);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(N).placeholder;
                                    },
                                    onSelect: (nt) => {
                                      const rt = nt.value;
                                      l({ [c(N).name]: rt });
                                    },
                                    get value() {
                                      return c(Te);
                                    }
                                  });
                                }
                                A(tt), xe(() => Ae(K, c(N).label)), M(le, Ne);
                              }, fe = (le) => {
                                var Ne = _e(), $e = oe(Ne);
                                {
                                  var K = (He) => {
                                    var ze = xb(), Te = oe(ze), nt = I(Te, !0);
                                    A(Te);
                                    var rt = O(Te, 2), Dt = I(rt);
                                    {
                                      let Oe = /* @__PURE__ */ L(() => c(N).chosen?.buttonText);
                                      hd(Dt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(N).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Oe);
                                        },
                                        onChosen: (We, pe, Re) => {
                                          c(N).chosen?.onChosen?.(l, We, pe, Re);
                                        },
                                        get value() {
                                          return n()[c(N).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(N).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    A(rt), xe(() => Ae(nt, c(N).label)), M(He, ze);
                                  }, tt = (He) => {
                                    var ze = _e(), Te = oe(ze);
                                    {
                                      var nt = (rt) => {
                                        De(rt, Ie({ level: 3, mt: "10px" }, () => c(N).attrs, {
                                          children: (Dt, Oe) => {
                                            he();
                                            var We = Ce();
                                            xe(() => Ae(We, c(N).label)), M(Dt, We);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        Te,
                                        (rt) => {
                                          c(N).type === "heading" && rt(nt);
                                        },
                                        !0
                                      );
                                    }
                                    M(He, ze);
                                  };
                                  ae(
                                    $e,
                                    (He) => {
                                      c(N).type === "chosen" ? He(K) : He(tt, !1);
                                    },
                                    !0
                                  );
                                }
                                M(le, Ne);
                              };
                              ae(
                                te,
                                (le) => {
                                  c(N).type === "select" ? le(de) : le(fe, !1);
                                },
                                !0
                              );
                            }
                            M(re, Q);
                          };
                          ae(
                            G,
                            (re) => {
                              c(N).type === "slider" ? re(me) : re(we, !1);
                            },
                            !0
                          );
                        }
                        M(W, ie);
                      };
                      ae(
                        ne,
                        (W) => {
                          c(N).type === "textarea" ? W(R) : W(j, !1);
                        },
                        !0
                      );
                    }
                    M(Y, ee);
                  };
                  ae(Z, (Y) => {
                    c(N).type === "input" ? Y(X) : Y(T, !1);
                  });
                }
                M(P, V);
              }), M(k, _);
            };
            ae(H, (k) => {
              g && k(q);
            });
          }
          var B = O(H, 2);
          Pt(B, (k) => h = k, () => h);
          var U = O(B, 2);
          {
            var z = (k) => {
              var _ = Cb(), $ = oe(_), P = I($);
              De(P, {
                level: 3,
                mt: "10px",
                children: (X, T) => {
                  he();
                  var Y = Ce("输出参数");
                  M(X, Y);
                },
                $$slots: { default: !0 }
              });
              var N = O(P, 2);
              {
                var V = (X) => {
                  Pe(X, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (T, Y) => {
                      var ee = $b();
                      M(T, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(N, (X) => {
                  f.outputDefsAddEnable !== !1 && X(V);
                });
              }
              A($);
              var Z = O($, 2);
              Nn(Z, {}), M(k, _);
            };
            ae(U, (k) => {
              f.outputDefsEnable !== !1 && k(z);
            });
          }
          xe(() => {
            lt(B, f.rootStyle || ""), Ct(B, 1, _n(f.rootClass), "svelte-q0cqsa");
          }), M(C, S);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ce(v);
}
se(Gd, { data: {} }, [], [], !0);
const Sb = () => ({ updateEdgeData: (e, t, n) => {
  const r = Be.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Be.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Eb = () => ({ deleteEdge: (e) => {
  Be.removeEdge(e);
} });
var Nb = /* @__PURE__ */ J('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Pb = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), Lb = /* @__PURE__ */ J('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Db = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Ud(e, t) {
  ue(t, !0), Me(e, Db);
  const n = y(t, "onInit", 7), r = ut();
  n()(r);
  let o = /* @__PURE__ */ Se(!1), i = /* @__PURE__ */ Se(null);
  const { updateEdgeData: s } = Sb(), a = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, l = (P) => {
    P.preventDefault();
    const N = r.screenToFlowPosition({ x: P.clientX - 250, y: P.clientY - 100 }), V = P.dataTransfer?.getData("application/tinyflow");
    if (!V)
      return;
    const Z = JSON.parse(V), X = { id: `node_${or()}`, position: N, data: {}, ...Z };
    Be.addNode(X), Be.selectNodeOnly(X.id);
  }, { getNode: u } = fb(), d = (P) => {
    const N = u(P.source), V = u(P.target);
    if (P.sourceHandle === "loop_handle" || N.parentId) {
      const Z = r.getEdges();
      for (let X of Z)
        if (X.target === P.target) {
          const T = u(X.source);
          if (P.sourceHandle === "loop_handle" && T.parentId !== N.id || N.parentId && T.parentId !== N.parentId)
            return !1;
        }
    }
    return !(!N.parentId && V.parentId && V.parentId !== N.id);
  }, { ensureParentInNodesBefore: p } = pb(), f = (P, N) => {
    if (!N.isValid)
      return;
    const V = N.toNode;
    if (V.parentId)
      return;
    const Z = N.fromNode, X = N.fromHandle, T = { position: { ...V.position } };
    if (X.id === "loop_handle" ? T.parentId = Z.id : Z.parentId && (T.parentId = Z.parentId), T.parentId) {
      const Y = u(T.parentId);
      T.position = {
        x: V.position.x - Y.position.x,
        y: V.position.y - Y.position.y
      }, p(T.parentId, V.id), r.updateNode(V.id, T);
    }
    setTimeout(() => {
      Be.getEdges().forEach((Y) => {
        Y.target === V.id && Y.source == Z.id && (F(o, !0), F(i, Y, !0));
      });
    });
  }, { getEdgesByTarget: g } = gb(), h = (P) => {
    P.edges.forEach((N) => {
      N.id === c(i)?.id && (F(i, null), F(o, !1));
      const V = u(N.target);
      if (V && V.parentId) {
        const Z = g(N.target), X = u(V.parentId);
        if (Z.length === 0)
          r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + X.position.x,
              y: V.position.y + X.position.y
            }
          });
        else {
          let T = !1;
          for (let Y = 0; Y < Z.length; Y++) {
            const ee = Z[Y], ne = u(ee.source);
            if (ne.parentId || ne.type === "loopNode") {
              T = !0;
              break;
            }
          }
          T || r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + X.position.x,
              y: V.position.y + X.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: v } = Eb(), w = (P, N) => {
  }, b = (P) => {
  }, C = {
    // ...nodeTypes
  }, x = An().customNodes;
  if (x)
    for (let P of Object.keys(x))
      C[P] = Gd;
  const S = An().onDataChange;
  Xe(() => {
    S?.({
      nodes: Be.getNodes(),
      edges: Be.getEdges(),
      viewport: Be.getViewport()
    });
  });
  var E = {
    get onInit() {
      return n();
    },
    set onInit(P) {
      n(P), m();
    }
  }, D = Lb(), H = I(D), q = Be.getNodes, B = Be.setNodes, U = Be.getEdges, z = Be.setEdges, k = Be.getViewport, _ = Be.setViewport;
  {
    let P = /* @__PURE__ */ L(() => ({ ...ab, ...C })), N = /* @__PURE__ */ L(() => ({
      markerEnd: { type: eo.ArrowClosed, width: 20, height: 20 }
    }));
    ed(H, {
      get nodeTypes() {
        return c(P);
      },
      get nodes() {
        return q();
      },
      set nodes(V) {
        B(V);
      },
      get edges() {
        return U();
      },
      set edges(V) {
        z(V);
      },
      get viewport() {
        return k();
      },
      set viewport(V) {
        _(V);
      },
      class: "tinyflow-logo",
      ondrop: l,
      ondragover: a,
      isValidConnection: d,
      onconnectend: f,
      onconnectstart: w,
      onconnect: b,
      connectionRadius: 50,
      onedgeclick: (V) => {
        F(o, !0), F(i, V.edge, !0);
      },
      onbeforeconnect: (V) => ({ ...V, id: or() }),
      ondelete: h,
      onclick: (V) => {
        const Z = V.target;
        Z.classList.contains("svelte-flow__edge-interaction") || Z.classList.contains("panel-content") || Z.closest(".panel-content") || (F(o, !1), F(i, null));
      },
      get defaultEdgeOptions() {
        return c(N);
      },
      children: (V, Z) => {
        var X = Pb(), T = oe(X);
        cd(T, {});
        var Y = O(T, 2);
        ad(Y, {});
        var ee = O(Y, 2);
        fd(ee, {});
        var ne = O(ee, 2);
        {
          var R = (j) => {
            $o(j, {
              children: (W, ie) => {
                var G = Nb(), me = O(I(G), 4), we = I(me);
                {
                  let de = /* @__PURE__ */ L(() => c(i)?.data?.condition);
                  qe(we, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(de);
                    },
                    onchange: (fe) => {
                      c(i) && s(c(i).id, { condition: fe.target?.value });
                    }
                  });
                }
                A(me);
                var re = O(me, 2), Q = I(re);
                Pe(Q, {
                  onclick: () => {
                    v(c(i)?.id), F(o, !1);
                  },
                  children: (de, fe) => {
                    he();
                    var le = Ce("删除");
                    M(de, le);
                  },
                  $$slots: { default: !0 }
                });
                var te = O(Q, 2);
                Pe(te, {
                  primary: !0,
                  onclick: () => {
                    F(o, !1);
                  },
                  children: (de, fe) => {
                    he();
                    var le = Ce("保存");
                    M(de, le);
                  },
                  $$slots: { default: !0 }
                }), A(re), A(G), M(W, G);
              },
              $$slots: { default: !0 }
            });
          };
          ae(ne, (j) => {
            c(o) && j(R);
          });
        }
        M(V, X);
      },
      $$slots: { default: !0 }
    });
  }
  var $ = O(H, 2);
  return Fd($, {}), A(D), M(e, D), ce(E);
}
se(Ud, { onInit: {} }, [], [], !0);
function Hb(e, t) {
  ue(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Be.init(o?.nodes || [], o?.edges || []), br("tinyflow_options", n());
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
  return td(e, {
    children: (s, a) => {
      Ud(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ce(i);
}
customElements.define("tinyflow-component", se(Hb, { options: {}, onInit: {} }, [], [], !1));
const Tb = /* @__PURE__ */ Qd({
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
    const n = e, r = ef(null);
    let o = null;
    return tf(() => {
      r.value && (o = new Bm({
        ...n,
        element: r.value
      }));
    }), nf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (of(), rf("div", {
      ref_key: "divRef",
      ref: r,
      class: af(["tinyflow", s.className]),
      style: sf(s.style)
    }, null, 6));
  }
});
export {
  Tb as Tinyflow
};
//# sourceMappingURL=index.js.map
