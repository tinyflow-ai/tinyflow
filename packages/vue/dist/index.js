import { defineComponent as ep, ref as tp, onMounted as np, onUnmounted as rp, createElementBlock as op, openBlock as ip, normalizeStyle as sp, normalizeClass as ap } from "vue";
const lp = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(lp);
const Cs = 1, $s = 2, Sl = 4, up = 8, cp = 16, dp = 1, pp = 2, Nl = 4, fp = 8, hp = 16, El = 1, gp = 2, Pl = "[", fi = "[!", ks = "]", nr = {}, nt = Symbol(), vp = "http://www.w3.org/1999/xhtml", mp = "http://www.w3.org/2000/svg", yp = "@attach", wp = !1;
var po = Array.isArray, bp = Array.prototype.indexOf, _s = Array.from, qo = Object.keys, kr = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, Ll = Object.getOwnPropertyDescriptors, Ol = Object.prototype, xp = Array.prototype, hi = Object.getPrototypeOf, fa = Object.isExtensible;
function Rr(e) {
  return typeof e == "function";
}
const ct = () => {
};
function Cp(e) {
  return e();
}
function Fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function $p() {
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
function fo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ot = 2, Ss = 4, gi = 8, Ir = 16, xn = 32, jn = 64, Ns = 128, Dt = 256, Xo = 512, ht = 1024, At = 2048, Bn = 4096, Yt = 8192, ur = 16384, Es = 32768, cr = 65536, ha = 1 << 17, kp = 1 << 18, dr = 1 << 19, Tl = 1 << 20, Ui = 1 << 21, Ps = 1 << 22, Un = 1 << 23, on = Symbol("$state"), Ls = Symbol("legacy props"), _p = Symbol(""), Os = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Sp = 1, vi = 3, pr = 8;
function Ts(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Np() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ep(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Pp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Lp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Op() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Mp(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Vp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function zp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Dp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ho(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ap() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ip() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let me = !1;
function wt(e) {
  me = e;
}
let _e;
function Qe(e) {
  if (e === null)
    throw ho(), nr;
  return _e = e;
}
function wn() {
  return Qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Xt(_e)
  );
}
function I(e) {
  if (me) {
    if (/* @__PURE__ */ Xt(_e) !== null)
      throw ho(), nr;
    _e = e;
  }
}
function ve(e = 1) {
  if (me) {
    for (var t = e, n = _e; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Xt(n);
    _e = n;
  }
}
function Go(e = !0) {
  for (var t = 0, n = _e; ; ) {
    if (n.nodeType === pr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ks) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Pl || r === fi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Xt(n)
    );
    e && n.remove(), n = o;
  }
}
function Ml(e) {
  if (!e || e.nodeType !== pr)
    throw ho(), nr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Vl(e) {
  return e === this.v;
}
function zl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Hl(e) {
  return !zl(e, this.v);
}
let jr = !1, jp = !1;
function Bp() {
  jr = !0;
}
const Kp = [];
function Dl(e, t = !1, n = !1) {
  return Io(e, /* @__PURE__ */ new Map(), "", Kp, null, n);
}
function Io(e, t, n, r, o = null, i = !1) {
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
    if (po(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = Io(u, t, n, r, null, i));
      }
      return a;
    }
    if (hi(e) === Ol) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Io(
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
      return Io(
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
let Re = null;
function _r(e) {
  Re = e;
}
function zn(e) {
  return (
    /** @type {T} */
    Al().get(e)
  );
}
function Sr(e, t) {
  return Al().set(e, t), t;
}
function le(e, t = !1, n) {
  Re = {
    p: Re,
    c: null,
    e: null,
    s: e,
    x: null,
    l: jr && !t ? { s: null, u: null, $: [] } : null
  };
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    Re
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ru(r);
  }
  return e !== void 0 && (t.x = e), Re = t.p, e ?? /** @type {T} */
  {};
}
function go() {
  return !jr || Re !== null && Re.l === null;
}
function Al(e) {
  return Re === null && Ts(), Re.c ??= new Map(Rp(Re) || void 0);
}
function Rp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
const Zp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Pn = [], Nr = [];
function Il() {
  var e = Pn;
  Pn = [], Fo(e);
}
function jl() {
  var e = Nr;
  Nr = [], Fo(e);
}
function Wp() {
  return Pn.length > 0 || Nr.length > 0;
}
function fr(e) {
  if (Pn.length === 0 && !Gr) {
    var t = Pn;
    queueMicrotask(() => {
      t === Pn && Il();
    });
  }
  Pn.push(e);
}
function Yp(e) {
  Nr.length === 0 && Zp(jl), Nr.push(e);
}
function qp() {
  Pn.length > 0 && Il(), Nr.length > 0 && jl();
}
const Fp = /* @__PURE__ */ new WeakMap();
function Bl(e) {
  var t = Se;
  if (t === null)
    return Pe.f |= Un, e;
  if ((t.f & Es) === 0) {
    if ((t.f & Ns) === 0)
      throw !t.parent && e instanceof Error && Kl(e), e;
    t.b.error(e);
  } else
    Er(e, t);
}
function Er(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ns) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Kl(e), e;
}
function Kl(e) {
  const t = Fp.get(e);
  t && (kr(e, "message", {
    value: t.message
  }), kr(e, "stack", {
    value: t.stack
  }));
}
const zi = /* @__PURE__ */ new Set();
let rt = null, Qi = /* @__PURE__ */ new Set(), rr = [], mi = null, Ji = !1, Gr = !1;
class sn {
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
  #a = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #i = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #d = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #o = [];
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
  #p = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #c = [];
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
    rr = [];
    for (const o of t)
      this.#f(o);
    if (this.#s.length === 0 && this.#a === 0) {
      this.#h();
      var n = this.#n, r = this.#o;
      this.#n = [], this.#o = [], this.#l = [], rt = null, ga(n), ga(r), rt === null ? rt = this : zi.delete(this), this.#i?.resolve();
    } else
      this.#u(this.#n), this.#u(this.#o), this.#u(this.#l);
    for (const o of this.#s)
      wr(o);
    for (const o of this.#r)
      wr(o);
    this.#s = [], this.#r = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #f(t) {
    t.f ^= ht;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (xn | jn)) !== 0, i = o && (r & ht) !== 0, s = i || (r & Yt) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (o)
          n.f ^= ht;
        else if ((r & Ss) !== 0)
          this.#o.push(n);
        else if ((r & ht) === 0)
          if ((r & Ps) !== 0) {
            var a = n.b?.is_pending() ? this.#r : this.#s;
            a.push(n);
          } else wi(n) && ((n.f & Ir) !== 0 && this.#l.push(n), wr(n));
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
      ((n.f & At) !== 0 ? this.#p : this.#c).push(n), _t(n, ht);
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
    rt = this;
  }
  deactivate() {
    rt = null;
    for (const t of Qi)
      if (Qi.delete(t), t(), rt !== null)
        break;
  }
  neuter() {
    this.#d = !0;
  }
  flush() {
    rr.length > 0 ? Rl() : this.#h(), rt === this && (this.#a === 0 && zi.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #h() {
    if (!this.#d)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#a += 1;
  }
  decrement() {
    if (this.#a -= 1, this.#a === 0) {
      for (const t of this.#p)
        _t(t, At), Pr(t);
      for (const t of this.#c)
        _t(t, Bn), Pr(t);
      this.#n = [], this.#o = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#i ??= $p()).promise;
  }
  static ensure() {
    if (rt === null) {
      const t = rt = new sn();
      zi.add(rt), Gr || sn.enqueue(() => {
        rt === t && t.flush();
      });
    }
    return rt;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    fr(t);
  }
}
function v(e) {
  var t = Gr;
  Gr = !0;
  try {
    for (var n; ; ) {
      if (qp(), rr.length === 0 && !Wp() && (rt?.flush(), rr.length === 0))
        return mi = null, /** @type {T} */
        n;
      Rl();
    }
  } finally {
    Gr = t;
  }
}
function Rl() {
  var e = yr;
  Ji = !0;
  try {
    var t = 0;
    for (wa(!0); rr.length > 0; ) {
      var n = sn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Xp();
      }
      n.process(rr), Mn.clear();
    }
  } finally {
    Ji = !1, wa(e), mi = null;
  }
}
function Xp() {
  try {
    Op();
  } catch (e) {
    Er(e, mi);
  }
}
let Fn = null;
function ga(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ur | Yt)) === 0 && wi(r) && (Fn = [], wr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? lu(r) : r.fn = null), Fn?.length > 0)) {
        Mn.clear();
        for (const o of Fn)
          wr(o);
        Fn = [];
      }
    }
    Fn = null;
  }
}
function Pr(e) {
  for (var t = mi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ji && t === Se && (n & Ir) !== 0)
      return;
    if ((n & (jn | xn)) !== 0) {
      if ((n & ht) === 0) return;
      t.f ^= ht;
    }
  }
  rr.push(t);
}
function Zl(e) {
  let t = 0, n = Hn(0), r;
  return () => {
    uf() && (c(n), mo(() => (t === 0 && (r = lt(() => e(() => Ur(n)))), t += 1, () => {
      fr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ur(n));
      });
    })));
  };
}
var Gp = cr | dr | Ns;
function Up(e, t, n) {
  new Qp(e, t, n);
}
class Qp {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #a = me ? _e : null;
  /** @type {BoundaryProps} */
  #i;
  /** @type {((anchor: Node) => void)} */
  #d;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #l = null;
  #p = 0;
  #c = 0;
  #f = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #u = null;
  #h = () => {
    this.#u && Lr(this.#u, this.#p);
  };
  #y = Zl(() => (this.#u = Hn(this.#p), () => {
    this.#u = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#i = n, this.#d = r, this.parent = /** @type {Effect} */
    Se.b, this.#t = !!this.#i.pending, this.#s = Kn(() => {
      if (Se.b = this, me) {
        const o = this.#a;
        wn(), /** @type {Comment} */
        o.nodeType === pr && /** @type {Comment} */
        o.data === fi ? this.#b() : this.#w();
      } else {
        try {
          this.#r = at(() => r(this.#e));
        } catch (o) {
          this.error(o);
        }
        this.#c > 0 ? this.#v() : this.#t = !1;
      }
    }, Gp), me && (this.#e = _e);
  }
  #w() {
    try {
      this.#r = at(() => this.#d(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #b() {
    const t = this.#i.pending;
    t && (this.#n = at(() => t(this.#e)), sn.enqueue(() => {
      this.#r = this.#g(() => (sn.ensure(), at(() => this.#d(this.#e)))), this.#c > 0 ? this.#v() : (Vn(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#t = !1);
    }));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#i.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #g(t) {
    var n = Se, r = Pe, o = Re;
    jt(this.#s), $t(this.#s), _r(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return Bl(i), null;
    } finally {
      jt(n), $t(r), _r(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#r !== null && (this.#l = document.createDocumentFragment(), Jp(this.#r, this.#l)), this.#n === null && (this.#n = at(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #m(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(t);
      return;
    }
    this.#c += t, this.#c === 0 && (this.#t = !1, this.#n && Vn(this.#n, () => {
      this.#n = null;
    }), this.#l && (this.#e.before(this.#l), this.#l = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#m(t), this.#p += t, Qi.add(this.#h);
  }
  get_effect_pending() {
    return this.#y(), c(
      /** @type {Source<number>} */
      this.#u
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#i.onerror;
    let r = this.#i.failed;
    if (this.#f || !n && !r)
      throw t;
    this.#r && (ot(this.#r), this.#r = null), this.#n && (ot(this.#n), this.#n = null), this.#o && (ot(this.#o), this.#o = null), me && (Qe(
      /** @type {TemplateNode} */
      this.#a
    ), ve(), Qe(Go()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Ip();
        return;
      }
      o = !0, i && Dp(), sn.ensure(), this.#p = 0, this.#o !== null && Vn(this.#o, () => {
        this.#o = null;
      }), this.#t = this.has_pending_snippet(), this.#r = this.#g(() => (this.#f = !1, at(() => this.#d(this.#e)))), this.#c > 0 ? this.#v() : this.#t = !1;
    };
    var a = Pe;
    try {
      $t(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Er(l, this.#s && this.#s.parent);
    } finally {
      $t(a);
    }
    r && fr(() => {
      this.#o = this.#g(() => {
        this.#f = !0;
        try {
          return at(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Er(
            l,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        } finally {
          this.#f = !1;
        }
      });
    });
  }
}
function Jp(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Xt(n)
    );
    t.append(n), n = o;
  }
}
function Wl(e, t, n) {
  const r = go() ? vo : Ms;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = rt, i = (
    /** @type {Effect} */
    Se
  ), s = ef(), a = me;
  Promise.all(t.map((l) => /* @__PURE__ */ tf(l))).then((l) => {
    o?.activate(), s();
    try {
      n([...e.map(r), ...l]);
    } catch (u) {
      (i.f & ur) === 0 && Er(u, i);
    }
    a && wt(!1), o?.deactivate(), Yl();
  }).catch((l) => {
    Er(l, i);
  });
}
function ef() {
  var e = Se, t = Pe, n = Re, r = rt, o = me;
  if (o)
    var i = _e;
  return function() {
    jt(e), $t(t), _r(n), r?.activate(), o && (wt(!0), Qe(i));
  };
}
function Yl() {
  jt(null), $t(null), _r(null);
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  var t = Ot | At, n = Pe !== null && (Pe.f & Ot) !== 0 ? (
    /** @type {Derived} */
    Pe
  ) : null;
  return Se === null || n !== null && (n.f & Dt) !== 0 ? t |= Dt : Se.f |= dr, {
    ctx: Re,
    deps: null,
    effects: null,
    equals: Vl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      nt
    ),
    wv: 0,
    parent: n ?? Se,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function tf(e, t) {
  let n = (
    /** @type {Effect | null} */
    Se
  );
  n === null && Np();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Hn(
    /** @type {V} */
    nt
  ), s = null, a = !Pe;
  return df(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (h) {
      l = Promise.reject(h);
    }
    var u = () => l;
    o = s?.then(u, u) ?? Promise.resolve(l), s = o;
    var d = (
      /** @type {Batch} */
      rt
    ), f = r.is_pending();
    a && (r.update_pending_count(1), f || d.increment());
    const p = (h, g = void 0) => {
      s = null, f || d.activate(), g ? g !== Os && (i.f |= Un, Lr(i, g)) : ((i.f & Un) !== 0 && (i.f ^= Un), Lr(i, h)), a && (r.update_pending_count(-1), f || d.decrement()), Yl();
    };
    if (o.then(p, (h) => p(null, h || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
  }), new Promise((l) => {
    function u(d) {
      function f() {
        d === o ? l(i) : u(o);
      }
      d.then(f, f);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function P(e) {
  const t = /* @__PURE__ */ vo(e);
  return du(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ms(e) {
  const t = /* @__PURE__ */ vo(e);
  return t.equals = Hl, t;
}
function ql(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ot(
        /** @type {Effect} */
        t[n]
      );
  }
}
function nf(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ot) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Vs(e) {
  var t, n = Se;
  jt(nf(e));
  try {
    ql(e), t = gu(e);
  } finally {
    jt(n);
  }
  return t;
}
function Fl(e) {
  var t = Vs(e);
  if (e.equals(t) || (e.v = t, e.wv = fu()), !hr) {
    var n = (Ln || (e.f & Dt) !== 0) && e.deps !== null ? Bn : ht;
    _t(e, n);
  }
}
const Mn = /* @__PURE__ */ new Map();
function Hn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Vl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const n = Hn(e);
  return du(n), n;
}
// @__NO_SIDE_EFFECTS__
function Xl(e, t = !1, n = !0) {
  const r = Hn(e);
  return t || (r.equals = Hl), jr && n && Re !== null && Re.l !== null && (Re.l.s ??= []).push(r), r;
}
function F(e, t, n = !1) {
  Pe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Rt || (Pe.f & ha) !== 0) && go() && (Pe.f & (Ot | Ir | Ps | ha)) !== 0 && !yn?.includes(e) && Hp();
  let r = n ? Ht(t) : t;
  return Lr(e, r);
}
function Lr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    hr ? Mn.set(e, t) : Mn.set(e, n), e.v = t;
    var r = sn.ensure();
    r.capture(e, n), (e.f & Ot) !== 0 && ((e.f & At) !== 0 && Vs(
      /** @type {Derived} */
      e
    ), _t(e, (e.f & Dt) === 0 ? ht : Bn)), e.wv = fu(), Gl(e, At), go() && Se !== null && (Se.f & ht) !== 0 && (Se.f & (xn | jn)) === 0 && (Vt === null ? ff([e]) : Vt.push(e));
  }
  return t;
}
function va(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function Ur(e) {
  F(e, e.v + 1);
}
function Gl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = go(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Se)) {
        var l = (a & At) === 0;
        l && _t(s, t), (a & Ot) !== 0 ? Gl(
          /** @type {Derived} */
          s,
          Bn
        ) : l && ((a & Ir) !== 0 && Fn !== null && Fn.push(
          /** @type {Effect} */
          s
        ), Pr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ht(e) {
  if (typeof e != "object" || e === null || on in e)
    return e;
  const t = hi(e);
  if (t !== Ol && t !== xp)
    return e;
  var n = /* @__PURE__ */ new Map(), r = po(e), o = /* @__PURE__ */ Ee(0), i = Qn, s = (a) => {
    if (Qn === i)
      return a();
    var l = Pe, u = Qn;
    $t(null), xa(i);
    var d = a();
    return $t(l), xa(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Vp();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ Ee(u.value);
          return n.set(l, f), f;
        }) : F(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Ee(nt));
            n.set(l, d), Ur(o);
          }
        } else
          F(u, nt), Ur(o);
        return !0;
      },
      get(a, l, u) {
        if (l === on)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || mn(a, l)?.writable) && (d = s(() => {
          var h = Ht(f ? a[l] : nt), g = /* @__PURE__ */ Ee(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === nt ? void 0 : p;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var f = n.get(l), p = f?.v;
          if (f !== void 0 && p !== nt)
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
        if (l === on)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== nt || Reflect.has(a, l);
        if (u !== void 0 || Se !== null && (!d || mn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? Ht(a[l]) : nt, h = /* @__PURE__ */ Ee(p);
            return h;
          }), n.set(l, u));
          var f = c(u);
          if (f === nt)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var f = n.get(l), p = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? F(g, nt) : h in a && (g = s(() => /* @__PURE__ */ Ee(nt)), n.set(h + "", g));
          }
        if (f === void 0)
          (!p || mn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Ee(void 0)), F(f, Ht(u)), n.set(l, f));
        else {
          p = f.v !== nt;
          var y = s(() => Ht(u));
          F(f, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), $ = Number(l);
            Number.isInteger($) && $ >= C.v && F(C, $ + 1);
          }
          Ur(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var p = n.get(f);
          return p === void 0 || p.v !== nt;
        });
        for (var [u, d] of n)
          d.v !== nt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        zp();
      }
    }
  );
}
function ma(e) {
  try {
    if (e !== null && typeof e == "object" && on in e)
      return e[on];
  } catch {
  }
  return e;
}
function rf(e, t) {
  return Object.is(ma(e), ma(t));
}
var Ct, Ul, Ql, Jl;
function es() {
  if (Ct === void 0) {
    Ct = window, Ul = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ql = mn(t, "firstChild").get, Jl = mn(t, "nextSibling").get, fa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), fa(n) && (n.__t = void 0);
  }
}
function It(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Ql.call(e);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return Jl.call(e);
}
function B(e, t) {
  if (!me)
    return /* @__PURE__ */ Je(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(_e)
  );
  if (n === null)
    n = _e.appendChild(It());
  else if (t && n.nodeType !== vi) {
    var r = It();
    return n?.before(r), Qe(r), r;
  }
  return Qe(n), n;
}
function ne(e, t = !1) {
  if (!me) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Je(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Xt(n) : n;
  }
  if (t && _e?.nodeType !== vi) {
    var r = It();
    return _e?.before(r), Qe(r), r;
  }
  return _e;
}
function D(e, t = 1, n = !1) {
  let r = me ? _e : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Xt(r);
  if (!me)
    return r;
  if (n && r?.nodeType !== vi) {
    var i = It();
    return r === null ? o?.after(i) : r.before(i), Qe(i), i;
  }
  return Qe(r), /** @type {TemplateNode} */
  r;
}
function zs(e) {
  e.textContent = "";
}
function eu() {
  return !1;
}
function of(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, fr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function sf(e) {
  me && /* @__PURE__ */ Je(e) !== null && zs(e);
}
let ya = !1;
function af() {
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
function Hs(e) {
  var t = Pe, n = Se;
  $t(null), jt(null);
  try {
    return e();
  } finally {
    $t(t), jt(n);
  }
}
function tu(e) {
  Se === null && Pe === null && Lp(), Pe !== null && (Pe.f & Dt) !== 0 && Se === null && Pp(), hr && Ep();
}
function lf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Gt(e, t, n, r = !0) {
  var o = Se;
  o !== null && (o.f & Yt) !== 0 && (e |= Yt);
  var i = {
    ctx: Re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | At,
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
      wr(i), i.f |= Es;
    } catch (l) {
      throw ot(i), l;
    }
  else t !== null && Pr(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & dr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && lf(s, o), Pe !== null && (Pe.f & Ot) !== 0 && (e & jn) === 0)) {
      var a = (
        /** @type {Derived} */
        Pe
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function uf() {
  return Pe !== null && !Rt;
}
function nu(e) {
  const t = Gt(gi, null, !1);
  return _t(t, ht), t.teardown = e, t;
}
function Ye(e) {
  tu();
  var t = (
    /** @type {Effect} */
    Se.f
  ), n = !Pe && (t & xn) !== 0 && (t & Es) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Re
    );
    (r.e ??= []).push(e);
  } else
    return ru(e);
}
function ru(e) {
  return Gt(Ss | Tl, e, !1);
}
function ou(e) {
  return tu(), Gt(gi | Tl, e, !0);
}
function Ds(e) {
  sn.ensure();
  const t = Gt(jn | dr, e, !0);
  return () => {
    ot(t);
  };
}
function cf(e) {
  sn.ensure();
  const t = Gt(jn | dr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Vn(t, () => {
      ot(t), r(void 0);
    }) : (ot(t), r(void 0));
  });
}
function Br(e) {
  return Gt(Ss, e, !1);
}
function df(e) {
  return Gt(Ps | dr, e, !0);
}
function mo(e, t = 0) {
  return Gt(gi | t, e, !0);
}
function $e(e, t = [], n = []) {
  Wl(t, n, (r) => {
    Gt(gi, () => e(...r.map(c)), !0);
  });
}
function Kn(e, t = 0) {
  var n = Gt(Ir | t, e, !0);
  return n;
}
function at(e, t = !0) {
  return Gt(xn | dr, e, !0, t);
}
function iu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = hr, r = Pe;
    ba(!0), $t(null);
    try {
      t.call(null);
    } finally {
      ba(n), $t(r);
    }
  }
}
function su(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Hs(() => {
      o.abort(Os);
    });
    var r = n.next;
    (n.f & jn) !== 0 ? n.parent = null : ot(n, t), n = r;
  }
}
function pf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & xn) === 0 && ot(t), t = n;
  }
}
function ot(e, t = !0) {
  var n = !1;
  (t || (e.f & kp) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (au(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), su(e, t && !n), Uo(e, 0), _t(e, ur);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  iu(e);
  var o = e.parent;
  o !== null && o.first !== null && lu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function au(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Xt(e)
    );
    e.remove(), e = n;
  }
}
function lu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Vn(e, t) {
  var n = [];
  As(e, n, !0), uu(n, () => {
    ot(e), t && t();
  });
}
function uu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function As(e, t, n) {
  if ((e.f & Yt) === 0) {
    if (e.f ^= Yt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & cr) !== 0 || (r.f & xn) !== 0;
      As(r, t, i ? n : !1), r = o;
    }
  }
}
function yi(e) {
  cu(e, !0);
}
function cu(e, t) {
  if ((e.f & Yt) !== 0) {
    e.f ^= Yt, (e.f & ht) === 0 && (_t(e, At), Pr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & cr) !== 0 || (n.f & xn) !== 0;
      cu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let yr = !1;
function wa(e) {
  yr = e;
}
let hr = !1;
function ba(e) {
  hr = e;
}
let Pe = null, Rt = !1;
function $t(e) {
  Pe = e;
}
let Se = null;
function jt(e) {
  Se = e;
}
let yn = null;
function du(e) {
  Pe !== null && (yn === null ? yn = [e] : yn.push(e));
}
let yt = null, Pt = 0, Vt = null;
function ff(e) {
  Vt = e;
}
let pu = 1, Jr = 0, Qn = Jr;
function xa(e) {
  Qn = e;
}
let Ln = !1;
function fu() {
  return ++pu;
}
function wi(e) {
  var t = e.f;
  if ((t & At) !== 0)
    return !0;
  if ((t & Bn) !== 0) {
    var n = e.deps, r = (t & Dt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Xo) !== 0, a = r && Se !== null && !Ln, l = n.length;
      if ((s || a) && (Se === null || (Se.f & ur) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= Xo), a && d !== null && (d.f & Dt) === 0 && (u.f ^= Dt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], wi(
          /** @type {Derived} */
          i
        ) && Fl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Se !== null && !Ln) && _t(e, ht);
  }
  return !1;
}
function hu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !yn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ot) !== 0 ? hu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? _t(i, At) : (i.f & ht) !== 0 && _t(i, Bn), Pr(
        /** @type {Effect} */
        i
      ));
    }
}
function gu(e) {
  var t = yt, n = Pt, r = Vt, o = Pe, i = Ln, s = yn, a = Re, l = Rt, u = Qn, d = e.f;
  yt = /** @type {null | Value[]} */
  null, Pt = 0, Vt = null, Ln = (d & Dt) !== 0 && (Rt || !yr || Pe === null), Pe = (d & (xn | jn)) === 0 ? e : null, yn = null, _r(e.ctx), Rt = !1, Qn = ++Jr, e.ac !== null && (Hs(() => {
    e.ac.abort(Os);
  }), e.ac = null);
  try {
    e.f |= Ui;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f(), h = e.deps;
    if (yt !== null) {
      var g;
      if (Uo(e, Pt), h !== null && Pt > 0)
        for (h.length = Pt + yt.length, g = 0; g < yt.length; g++)
          h[Pt + g] = yt[g];
      else
        e.deps = h = yt;
      if (!Ln || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Ot) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Pt; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && Pt < h.length && (Uo(e, Pt), h.length = Pt);
    if (go() && Vt !== null && !Rt && h !== null && (e.f & (Ot | Bn | At)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Vt.length; g++)
        hu(
          Vt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Jr++, Vt !== null && (r === null ? r = Vt : r.push(.../** @type {Source[]} */
    Vt))), (e.f & Un) !== 0 && (e.f ^= Un), p;
  } catch (y) {
    return Bl(y);
  } finally {
    e.f ^= Ui, yt = t, Pt = n, Vt = r, Pe = o, Ln = i, yn = s, _r(a), Rt = l, Qn = u;
  }
}
function hf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = bp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Ot) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (yt === null || !yt.includes(t)) && (_t(t, Bn), (t.f & (Dt | Xo)) === 0 && (t.f ^= Xo), ql(
    /** @type {Derived} **/
    t
  ), Uo(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Uo(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      hf(e, n[r]);
}
function wr(e) {
  var t = e.f;
  if ((t & ur) === 0) {
    _t(e, ht);
    var n = Se, r = yr;
    Se = e, yr = !0;
    try {
      (t & Ir) !== 0 ? pf(e) : su(e), iu(e);
      var o = gu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = pu;
      var i;
      wp && jp && (e.f & At) !== 0 && e.deps;
    } finally {
      yr = r, Se = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & Ot) !== 0;
  if (Pe !== null && !Rt) {
    var r = Se !== null && (Se.f & ur) !== 0;
    if (!r && !yn?.includes(e)) {
      var o = Pe.deps;
      if ((Pe.f & Ui) !== 0)
        e.rv < Jr && (e.rv = Jr, yt === null && o !== null && o[Pt] === e ? Pt++ : yt === null ? yt = [e] : (!Ln || !yt.includes(e)) && yt.push(e));
      else {
        (Pe.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Pe] : i.includes(Pe) || i.push(Pe);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && (a.f & Dt) === 0 && (s.f ^= Dt);
  }
  if (hr) {
    if (Mn.has(e))
      return Mn.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & ht) === 0 && s.reactions !== null || vu(s)) && (l = Vs(s)), Mn.set(s, l), l;
    }
  } else n && (s = /** @type {Derived} */
  e, wi(s) && Fl(s));
  if ((e.f & Un) !== 0)
    throw e.v;
  return e.v;
}
function vu(e) {
  if (e.v === nt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Mn.has(t) || (t.f & Ot) !== 0 && vu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function lt(e) {
  var t = Rt;
  try {
    return Rt = !0, e();
  } finally {
    Rt = t;
  }
}
const gf = -7169;
function _t(e, t) {
  e.f = e.f & gf | t;
}
function vf(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Is(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (on in e)
      ts(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && on in n && ts(n);
      }
  }
}
function ts(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ts(e[r], t);
      } catch {
      }
    const n = hi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ll(n);
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
const mu = /* @__PURE__ */ new Set(), ns = /* @__PURE__ */ new Set();
function js(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Yr.call(t, i), !i.cancelBubble)
      return Hs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? fr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function rs(e, t, n, r = {}) {
  var o = js(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Ca(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = js(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && nu(() => {
    t.removeEventListener(e, s, i);
  });
}
function Rn(e) {
  for (var t = 0; t < e.length; t++)
    mu.add(e[t]);
  for (var n of ns)
    n(e);
}
let $a = null;
function Yr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  $a = e;
  var s = 0, a = $a === e && e.__root;
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
    kr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Pe, f = Se;
    $t(null), jt(null);
    try {
      for (var p, h = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          if (y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (po(y)) {
              var [w, ...C] = y;
              w.apply(i, [e, ...C]);
            } else
              y.call(i, e);
        } catch ($) {
          p ? h.push($) : p = $;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        i = g;
      }
      if (p) {
        for (let $ of h)
          queueMicrotask(() => {
            throw $;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, $t(d), jt(f);
    }
  }
}
function Bs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function St(e, t) {
  var n = (
    /** @type {Effect} */
    Se
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  var n = (t & El) !== 0, r = (t & gp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (me)
      return St(_e, null), _e;
    o === void 0 && (o = Bs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Je(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ul ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      St(a, l);
    } else
      St(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function mf(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & El) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (me)
      return St(_e, null), _e;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Bs(i)
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
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      St(d, f);
    } else
      St(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function fe(e, t) {
  return /* @__PURE__ */ mf(e, t, "svg");
}
function ke(e = "") {
  if (!me) {
    var t = It(e + "");
    return St(t, t), t;
  }
  var n = _e;
  return n.nodeType !== vi && (n.before(n = It()), Qe(n)), St(n, n), n;
}
function Ne() {
  if (me)
    return St(_e, null), _e;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = It();
  return e.append(t, n), St(t, n), e;
}
function T(e, t) {
  if (me) {
    Se.nodes_end = _e, wn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function yf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const wf = [
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
function bf(e) {
  return wf.includes(e);
}
const xf = {
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
function Cf(e) {
  return e = e.toLowerCase(), xf[e] ?? e;
}
const $f = ["touchstart", "touchmove"];
function kf(e) {
  return $f.includes(e);
}
const _f = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Sf(e) {
  return _f.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function je(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function yu(e, t) {
  return wu(e, t);
}
function Nf(e, t) {
  es(), t.intro = t.intro ?? !1;
  const n = t.target, r = me, o = _e;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(n)
    ); i && (i.nodeType !== pr || /** @type {Comment} */
    i.data !== Pl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Xt(i);
    if (!i)
      throw nr;
    wt(!0), Qe(
      /** @type {Comment} */
      i
    );
    const s = wu(e, { ...t, anchor: i });
    return wt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== nr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Tp(), es(), zs(n), wt(!1), yu(e, t);
  } finally {
    wt(r), Qe(o);
  }
}
const gr = /* @__PURE__ */ new Map();
function wu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  es();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var h = f[p];
      if (!a.has(h)) {
        a.add(h);
        var g = kf(h);
        t.addEventListener(h, Yr, { passive: g });
        var y = gr.get(h);
        y === void 0 ? (document.addEventListener(h, Yr, { passive: g }), gr.set(h, 1)) : gr.set(h, y + 1);
      }
    }
  };
  l(_s(mu)), ns.add(l);
  var u = void 0, d = cf(() => {
    var f = n ?? t.appendChild(It());
    return Up(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (p) => {
        if (i) {
          le({});
          var h = (
            /** @type {ComponentContext} */
            Re
          );
          h.c = i;
        }
        if (o && (r.$$events = o), me && St(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, r) || {}, me && (Se.nodes_end = _e, _e === null || _e.nodeType !== pr || /** @type {Comment} */
        _e.data !== ks))
          throw ho(), nr;
        i && ue();
      }
    ), () => {
      for (var p of a) {
        t.removeEventListener(p, Yr);
        var h = (
          /** @type {number} */
          gr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, Yr), gr.delete(p)) : gr.set(p, h);
      }
      ns.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return os.set(u, d), u;
}
let os = /* @__PURE__ */ new WeakMap();
function Ef(e, t) {
  const n = os.get(e);
  return n ? (os.delete(e), n(t)) : Promise.resolve();
}
function qe(e, t, ...n) {
  var r = e, o = ct, i;
  Kn(() => {
    o !== (o = t()) && (i && (ot(i), i = null), i = at(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, cr), me && (r = _e);
}
function Zn(e) {
  Re === null && Ts(), jr && Re.l !== null ? Pf(Re).m.push(e) : Ye(() => {
    const t = lt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function bi(e) {
  Re === null && Ts(), Zn(() => () => lt(e));
}
function Pf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, n = !1) {
  me && wn();
  var r = e, o = null, i = null, s = nt, a = n ? cr : 0, l = !1;
  const u = (p, h = !0) => {
    l = !0, f(h, p);
  };
  function d() {
    var p = s ? o : i, h = s ? i : o;
    p && yi(p), h && Vn(h, () => {
      s ? i = null : o = null;
    });
  }
  const f = (p, h) => {
    if (s === (s = p)) return;
    let g = !1;
    if (me) {
      const C = Ml(r) === fi;
      !!s === C && (r = Go(), Qe(r), wt(!1), g = !0);
    }
    var y = eu(), w = r;
    s ? o ??= h && at(() => h(w)) : i ??= h && at(() => h(w)), y || d(), g && wt(!0);
  };
  Kn(() => {
    l = !1, t(u), l || f(null, null);
  }, a), me && (r = _e);
}
function Lf(e, t) {
  me && Qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(e)
  ), mo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Or(e, t) {
  return t;
}
function Of(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    As(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    zs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), tn(e, t[0].prev, t[i - 1].next);
  }
  uu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), tn(e, d.prev, d.next)), ot(d.e, !a);
    }
  });
}
function gt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Sl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = me ? Qe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Je(u)
    ) : u.appendChild(It());
  }
  me && wn();
  var d = null, f = !1, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Ms(() => {
    var C = n();
    return po(C) ? C : C == null ? [] : _s(C);
  }), g, y;
  function w() {
    Tf(
      y,
      g,
      a,
      p,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (g.length === 0 ? d ? yi(d) : d = at(() => i(s)) : d !== null && Vn(d, () => {
      d = null;
    }));
  }
  Kn(() => {
    y ??= /** @type {Effect} */
    Se, g = /** @type {V[]} */
    c(h);
    var C = g.length;
    if (f && C === 0)
      return;
    f = C === 0;
    let $ = !1;
    if (me) {
      var b = Ml(s) === fi;
      b !== (C === 0) && (s = Go(), Qe(s), wt(!1), $ = !0);
    }
    if (me) {
      for (var _ = null, O, S = 0; S < C; S++) {
        if (_e.nodeType === pr && /** @type {Comment} */
        _e.data === ks) {
          s = /** @type {Comment} */
          _e, $ = !0, wt(!1);
          break;
        }
        var M = g[S], z = r(M, S);
        O = bu(
          _e,
          a,
          _,
          null,
          M,
          z,
          S,
          o,
          t,
          n
        ), a.items.set(z, O), _ = O;
      }
      C > 0 && Qe(Go());
    }
    me ? C === 0 && i && (d = at(() => i(s))) : w(), $ && wt(!0), c(h);
  }), me && (s = _e);
}
function Tf(e, t, n, r, o, i, s, a, l) {
  var u = (s & up) !== 0, d = (s & (Cs | $s)) !== 0, f = t.length, p = n.items, h = n.first, g = h, y, w = null, C, $ = [], b = [], _, O, S, M;
  if (u)
    for (M = 0; M < f; M += 1)
      _ = t[M], O = a(_, M), S = p.get(O), S !== void 0 && (S.a?.measure(), (C ??= /* @__PURE__ */ new Set()).add(S));
  for (M = 0; M < f; M += 1) {
    if (_ = t[M], O = a(_, M), S = p.get(O), S === void 0) {
      var z = r.get(O);
      if (z !== void 0) {
        r.delete(O), p.set(O, z);
        var R = w ? w.next : g;
        tn(n, w, z), tn(n, z, R), Hi(z, R, o), w = z;
      } else {
        var q = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : o;
        w = bu(
          q,
          n,
          w,
          w === null ? n.first : w.next,
          _,
          O,
          M,
          i,
          s,
          l
        );
      }
      p.set(O, w), $ = [], b = [], g = w.next;
      continue;
    }
    if (d && Mf(S, _, M, s), (S.e.f & Yt) !== 0 && (yi(S.e), u && (S.a?.unfix(), (C ??= /* @__PURE__ */ new Set()).delete(S))), S !== g) {
      if (y !== void 0 && y.has(S)) {
        if ($.length < b.length) {
          var A = b[0], k;
          w = A.prev;
          var N = $[0], x = $[$.length - 1];
          for (k = 0; k < $.length; k += 1)
            Hi($[k], A, o);
          for (k = 0; k < b.length; k += 1)
            y.delete(b[k]);
          tn(n, N.prev, x.next), tn(n, w, N), tn(n, x, A), g = A, w = x, M -= 1, $ = [], b = [];
        } else
          y.delete(S), Hi(S, g, o), tn(n, S.prev, S.next), tn(n, S, w === null ? n.first : w.next), tn(n, w, S), w = S;
        continue;
      }
      for ($ = [], b = []; g !== null && g.k !== O; )
        (g.e.f & Yt) === 0 && (y ??= /* @__PURE__ */ new Set()).add(g), b.push(g), g = g.next;
      if (g === null)
        continue;
      S = g;
    }
    $.push(S), w = S, g = S.next;
  }
  if (g !== null || y !== void 0) {
    for (var L = y === void 0 ? [] : _s(y); g !== null; )
      (g.e.f & Yt) === 0 && L.push(g), g = g.next;
    var E = L.length;
    if (E > 0) {
      var H = (s & Sl) !== 0 && f === 0 ? o : null;
      if (u) {
        for (M = 0; M < E; M += 1)
          L[M].a?.measure();
        for (M = 0; M < E; M += 1)
          L[M].a?.fix();
      }
      Of(n, L, H);
    }
  }
  u && fr(() => {
    if (C !== void 0)
      for (S of C)
        S.a?.apply();
  }), e.first = n.first && n.first.e, e.last = w && w.e;
  for (var j of r.values())
    ot(j.e);
  r.clear();
}
function Mf(e, t, n, r) {
  (r & Cs) !== 0 && Lr(e.v, t), (r & $s) !== 0 ? Lr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function bu(e, t, n, r, o, i, s, a, l, u, d) {
  var f = (l & Cs) !== 0, p = (l & cp) === 0, h = f ? p ? /* @__PURE__ */ Xl(o, !1, !1) : Hn(o) : o, g = (l & $s) === 0 ? s : Hn(s), y = {
    i: g,
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
      var w = document.createDocumentFragment();
      w.append(e = It());
    }
    return y.e = at(() => a(
      /** @type {Node} */
      e,
      h,
      g,
      u
    ), me), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? d || (t.first = y) : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function Hi(e, t, n) {
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
      /* @__PURE__ */ Xt(i)
    );
    o.before(i), i = s;
  }
}
function tn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ks(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  $e(() => {
    var a = (
      /** @type {Effect} */
      Se
    );
    if (s === (s = t() ?? "")) {
      me && wn();
      return;
    }
    if (a.nodes_start !== null && (au(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (me) {
        _e.data;
        for (var l = wn(), u = l; l !== null && (l.nodeType !== pr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Xt(l);
        if (l === null)
          throw ho(), nr;
        St(_e, u), i = Qe(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = Bs(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ Je(f)), St(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Je(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Je(f)
          );
      else
        i.before(f);
    }
  });
}
function xi(e, t, n) {
  me && wn();
  var r = e, o, i, s = null, a = null;
  function l() {
    i && (Vn(i), i = null), s && (s.lastChild.remove(), r.before(s), s = null), i = a, a = null;
  }
  Kn(() => {
    if (o !== (o = t())) {
      var u = eu();
      if (o) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = It()), i && rt.skipped_effects.add(i)), a = at(() => n(d, o));
      }
      u ? rt.add_callback(l) : l();
    }
  }, cr), me && (r = _e);
}
function Vf(e, t, n, r, o, i) {
  let s = me;
  me && wn();
  var a, l, u = null;
  me && _e.nodeType === Sp && (u = /** @type {Element} */
  _e, wn());
  var d = (
    /** @type {TemplateNode} */
    me ? _e : e
  ), f;
  Kn(() => {
    const p = t() || null;
    var h = p === "svg" ? mp : null;
    p !== a && (f && (p === null ? Vn(f, () => {
      f = null, l = null;
    }) : p === l ? yi(f) : ot(f)), p && p !== l && (f = at(() => {
      if (u = me ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, p) : document.createElement(p), St(u, u), r) {
        me && Sf(p) && u.append(document.createComment(""));
        var g = (
          /** @type {TemplateNode} */
          me ? /* @__PURE__ */ Je(u) : u.appendChild(It())
        );
        me && (g === null ? wt(!1) : Qe(g)), r(u, g);
      }
      Se.nodes_end = u, d.before(u);
    })), a = p, a && (l = a));
  }, cr), s && (wt(!0), Qe(d));
}
function Me(e, t) {
  Br(() => {
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
function ft(e, t, n) {
  Br(() => {
    var r = lt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      mo(() => {
        var s = n();
        Is(s), o && zl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function zf(e, t) {
  var n = void 0, r;
  Kn(() => {
    n !== (n = t()) && (r && (ot(r), r = null), n && (r = at(() => {
      Br(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function xu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = xu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Hf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = xu(e)) && (r && (r += " "), r += t);
  return r;
}
function Cn(e) {
  return typeof e == "object" ? Hf(e) : e ?? "";
}
const ka = [...` 	
\r\f \v\uFEFF`];
function Df(e, t, n) {
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
function Di(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Af(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Di)), o && l.push(...Object.keys(o).map(Di));
      var u = 0, d = -1;
      const y = e.length;
      for (var f = 0; f < y; f++) {
        var p = e[f];
        if (a ? p === "/" && e[f - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && e[f + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = f;
          else if (p === ";" || f === y - 1) {
            if (d !== -1) {
              var h = Di(e.substring(u, d).trim());
              if (!l.includes(h)) {
                p !== ";" && f++;
                var g = e.substring(u, f).trim();
                n += " " + g + ";";
              }
            }
            u = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += _a(r)), o && (n += _a(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Nt(e, t, n, r, o, i) {
  var s = e.__className;
  if (me || s !== n || s === void 0) {
    var a = Df(n, r, i);
    (!me || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Ai(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function dt(e, t, n, r) {
  var o = e.__style;
  if (me || o !== t) {
    var i = Af(t, r);
    (!me || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Ai(e, n?.[0], r[0]), Ai(e, n?.[1], r[1], "important")) : Ai(e, n, r));
  return r;
}
function is(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!po(t))
      return Ap();
    for (var r of e.options)
      r.selected = t.includes(Sa(r));
    return;
  }
  for (r of e.options) {
    var o = Sa(r);
    if (rf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function If(e) {
  var t = new MutationObserver(() => {
    is(e, e.__value);
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
  }), nu(() => {
    t.disconnect();
  });
}
function Sa(e) {
  return "__value" in e ? e.__value : e.value;
}
const En = Symbol("class"), rn = Symbol("style"), Cu = Symbol("is custom element"), $u = Symbol("is html");
function Jn(e) {
  if (me) {
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
    e.__on_r = n, Yp(n), af();
  }
}
function jo(e, t) {
  var n = Ci(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Na(e, t) {
  var n = Ci(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function jf(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = Ci(e);
  me && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[_p] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ku(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Bf(e, t, n, r, o = !1, i = !1) {
  if (me && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Jn(s);
  }
  var l = Ci(e), u = l[Cu], d = !l[$u];
  let f = me && u;
  f && wt(!1);
  var p = t || {}, h = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = Cn(n.class) : (r || n[En]) && (n.class = null), n[rn] && (n.style ??= null);
  var y = ku(e);
  for (const S in n) {
    let M = n[S];
    if (h && S === "value" && M == null) {
      e.value = e.__value = "", p[S] = M;
      continue;
    }
    if (S === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Nt(e, w, M, r, t?.[En], n[En]), p[S] = M, p[En] = n[En];
      continue;
    }
    if (S === "style") {
      dt(e, M, t?.[rn], n[rn]), p[S] = M, p[rn] = n[rn];
      continue;
    }
    var C = p[S];
    if (!(M === C && !(M === void 0 && e.hasAttribute(S)))) {
      p[S] = M;
      var $ = S[0] + S[1];
      if ($ !== "$$")
        if ($ === "on") {
          const z = {}, R = "$$" + S;
          let q = S.slice(2);
          var b = bf(q);
          if (yf(q) && (q = q.slice(0, -7), z.capture = !0), !b && C) {
            if (M != null) continue;
            e.removeEventListener(q, p[R], z), p[R] = null;
          }
          if (M != null)
            if (b)
              e[`__${q}`] = M, Rn([q]);
            else {
              let A = function(k) {
                p[S].call(this, k);
              };
              p[R] = js(q, e, A, z);
            }
          else b && (e[`__${q}`] = void 0);
        } else if (S === "style")
          be(e, S, M);
        else if (S === "autofocus")
          of(
            /** @type {HTMLElement} */
            e,
            !!M
          );
        else if (!u && (S === "__value" || S === "value" && M != null))
          e.value = e.__value = M;
        else if (S === "selected" && h)
          jf(
            /** @type {HTMLOptionElement} */
            e,
            M
          );
        else {
          var _ = S;
          d || (_ = Cf(_));
          var O = _ === "defaultValue" || _ === "defaultChecked";
          if (M == null && !u && !O)
            if (l[S] = null, _ === "value" || _ === "checked") {
              let z = (
                /** @type {HTMLInputElement} */
                e
              );
              const R = t === void 0;
              if (_ === "value") {
                let q = z.defaultValue;
                z.removeAttribute(_), z.defaultValue = q, z.value = z.__value = R ? q : null;
              } else {
                let q = z.defaultChecked;
                z.removeAttribute(_), z.defaultChecked = q, z.checked = R ? q : !1;
              }
            } else
              e.removeAttribute(S);
          else O || y.includes(_) && (u || typeof M != "string") ? (e[_] = M, _ in l && (l[_] = nt)) : typeof M != "function" && be(e, _, M);
        }
    }
  }
  return f && wt(!0), p;
}
function et(e, t, n = [], r = [], o, i = !1, s = !1) {
  Wl(n, r, (a) => {
    var l = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (Kn(() => {
      var h = t(...a.map(c)), g = Bf(
        e,
        l,
        h,
        o,
        i,
        s
      );
      f && d && "value" in h && is(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let w of Object.getOwnPropertySymbols(u))
        h[w] || ot(u[w]);
      for (let w of Object.getOwnPropertySymbols(h)) {
        var y = h[w];
        w.description === yp && (!l || y !== l[w]) && (u[w] && ot(u[w]), u[w] = at(() => zf(e, () => y))), g[w] = y;
      }
      l = g;
    }), d) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      Br(() => {
        is(
          p,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), If(p);
      });
    }
    f = !0;
  });
}
function Ci(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Cu]: e.nodeName.includes("-"),
      [$u]: e.namespaceURI === vp
    }
  );
}
var Ea = /* @__PURE__ */ new Map();
function ku(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Ea.get(t);
  if (n) return n;
  Ea.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Ll(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = hi(o);
  }
  return n;
}
class Rs {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
  /** @type {ResizeObserverOptions} */
  #a;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#a = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#i().observe(t, this.#a), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #i() {
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
var Kf = /* @__PURE__ */ new Rs({
  box: "border-box"
});
function Pa(e, t, n) {
  var r = Kf.observe(e, () => n(e[t]));
  Br(() => (lt(() => n(e[t])), r));
}
function La(e, t) {
  return e === t || e?.[on] === t;
}
function Tt(e = {}, t, n, r) {
  return Br(() => {
    var o, i;
    return mo(() => {
      o = i, i = [], lt(() => {
        e !== n(...i) && (t(e, ...i), o && La(n(...o), e) && t(null, ...o));
      });
    }), () => {
      fr(() => {
        i && La(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function _u(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Re
  ), n = t.l.u;
  if (!n) return;
  let r = () => Is(t.s);
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
  n.b.length && ou(() => {
    Oa(t, r), Fo(n.b);
  }), Ye(() => {
    const o = lt(() => n.m.map(Cp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ye(() => {
    Oa(t, r), Fo(n.a);
  });
}
function Oa(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let To = !1;
function Rf(e) {
  var t = To;
  try {
    return To = !1, [e(), To];
  } finally {
    To = t;
  }
}
const Zf = {
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
function He(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Zf
  );
}
const Wf = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Se;
      try {
        jt(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Nl
        );
      } finally {
        jt(r);
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
function Ta(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Hn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Se
      )
    },
    Wf
  );
}
const Yf = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Rr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Rr(o) && (o = o());
      const i = mn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Rr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = mn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === on || t === Ls) return !1;
    for (let n of e.props)
      if (Rr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Rr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Be(...e) {
  return new Proxy({ props: e }, Yf);
}
function m(e, t, n, r) {
  var o = !jr || (n & pp) !== 0, i = (n & fp) !== 0, s = (n & hp) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? lt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = on in e || Ls in e;
    d = mn(e, t)?.set ?? (f && t in e ? (b) => e[t] = b : void 0);
  }
  var p, h = !1;
  i ? [p, h] = Rf(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = u(), d && (o && Mp(), d(p)));
  var g;
  if (o ? g = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? u() : (l = !0, b);
  } : g = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b !== void 0 && (a = /** @type {V} */
    void 0), b === void 0 ? a : b;
  }, o && (n & Nl) === 0)
    return g;
  if (d) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      function(b, _) {
        return arguments.length > 0 ? ((!o || !_ || y || h) && d(_ ? g() : b), b) : g();
      }
    );
  }
  var w = !1, C = ((n & dp) !== 0 ? vo : Ms)(() => (w = !1, g()));
  i && c(C);
  var $ = (
    /** @type {Effect} */
    Se
  );
  return (
    /** @type {() => V} */
    function(b, _) {
      if (arguments.length > 0) {
        const O = _ ? c(C) : o && i ? Ht(b) : b;
        return F(C, O), w = !0, a !== void 0 && (a = O), b;
      }
      return hr && w || ($.f & ur) !== 0 ? C.v : c(C);
    }
  );
}
function qf(e) {
  return new Ff(e);
}
class Ff {
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
      var a = /* @__PURE__ */ Xl(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Ls ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return F(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Nf : yu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || kr(this, i, {
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
      Ef(this.#e);
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
let Su;
typeof HTMLElement == "function" && (Su = class extends HTMLElement {
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
          r !== "default" && (i.name = r), T(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Xf(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Bo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = qf({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Ds(() => {
        mo(() => {
          this.$$r = !0;
          for (const r of qo(this.$$c)) {
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
    return qo(this.$$p_d).find(
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
function Xf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, i) {
  let s = class extends Su {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return qo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return qo(t).forEach((a) => {
    kr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Bo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = mn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    kr(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Gf = { value: () => {
} };
function $i() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ko(n);
}
function Ko(e) {
  this._ = e;
}
function Uf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ko.prototype = $i.prototype = {
  constructor: Ko,
  on: function(e, t) {
    var n = this._, r = Uf(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Qf(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ma(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ma(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ko(e);
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
function Qf(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ma(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Gf, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ss = "http://www.w3.org/1999/xhtml";
const Va = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ss,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ki(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Va.hasOwnProperty(t) ? { space: Va[t], local: e } : e;
}
function Jf(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ss && t.documentElement.namespaceURI === ss ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function eh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Nu(e) {
  var t = ki(e);
  return (t.local ? eh : Jf)(t);
}
function th() {
}
function Zs(e) {
  return e == null ? th : function() {
    return this.querySelector(e);
  };
}
function nh(e) {
  typeof e != "function" && (e = Zs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Mt(r, this._parents);
}
function rh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function oh() {
  return [];
}
function Eu(e) {
  return e == null ? oh : function() {
    return this.querySelectorAll(e);
  };
}
function ih(e) {
  return function() {
    return rh(e.apply(this, arguments));
  };
}
function sh(e) {
  typeof e == "function" ? e = ih(e) : e = Eu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Mt(r, o);
}
function Pu(e) {
  return function() {
    return this.matches(e);
  };
}
function Lu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var ah = Array.prototype.find;
function lh(e) {
  return function() {
    return ah.call(this.children, e);
  };
}
function uh() {
  return this.firstElementChild;
}
function ch(e) {
  return this.select(e == null ? uh : lh(typeof e == "function" ? e : Lu(e)));
}
var dh = Array.prototype.filter;
function ph() {
  return Array.from(this.children);
}
function fh(e) {
  return function() {
    return dh.call(this.children, e);
  };
}
function hh(e) {
  return this.selectAll(e == null ? ph : fh(typeof e == "function" ? e : Lu(e)));
}
function gh(e) {
  typeof e != "function" && (e = Pu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Mt(r, this._parents);
}
function Ou(e) {
  return new Array(e.length);
}
function vh() {
  return new Mt(this._enter || this._groups.map(Ou), this._parents);
}
function Qo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Qo.prototype = {
  constructor: Qo,
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
function mh(e) {
  return function() {
    return e;
  };
}
function yh(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Qo(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function wh(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, p = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (p[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new Qo(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(p[a]) === l && (o[a] = l);
}
function bh(e) {
  return e.__data__;
}
function xh(e, t) {
  if (!arguments.length) return Array.from(this, bh);
  var n = t ? wh : yh, r = this._parents, o = this._groups;
  typeof e != "function" && (e = mh(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], p = f.length, h = Ch(e.call(d, d && d.__data__, u, r)), g = h.length, y = a[u] = new Array(g), w = s[u] = new Array(g), C = l[u] = new Array(p);
    n(d, f, y, w, C, h, t);
    for (var $ = 0, b = 0, _, O; $ < g; ++$)
      if (_ = y[$]) {
        for ($ >= b && (b = $ + 1); !(O = w[b]) && ++b < g; ) ;
        _._next = O || null;
      }
  }
  return s = new Mt(s, r), s._enter = a, s._exit = l, s;
}
function Ch(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function $h() {
  return new Mt(this._exit || this._groups.map(Ou), this._parents);
}
function kh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function _h(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], f = u.length, p = a[l] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || d[g]) && (p[g] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Mt(a, this._parents);
}
function Sh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Nh(e) {
  e || (e = Eh);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Mt(o, this._parents).order();
}
function Eh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ph() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Lh() {
  return Array.from(this);
}
function Oh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Th() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Mh() {
  return !this.node();
}
function Vh(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function zh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Hh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Dh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Ah(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ih(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function jh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Bh(e, t) {
  var n = ki(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Hh : zh : typeof t == "function" ? n.local ? jh : Ih : n.local ? Ah : Dh)(n, t));
}
function Tu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Kh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Rh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Zh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Wh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Kh : typeof t == "function" ? Zh : Rh)(e, t, n ?? "")) : Tr(this.node(), e);
}
function Tr(e, t) {
  return e.style.getPropertyValue(t) || Tu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Yh(e) {
  return function() {
    delete this[e];
  };
}
function qh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Fh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Xh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Yh : typeof t == "function" ? Fh : qh)(e, t)) : this.node()[e];
}
function Mu(e) {
  return e.trim().split(/^|\s+/);
}
function Ws(e) {
  return e.classList || new Vu(e);
}
function Vu(e) {
  this._node = e, this._names = Mu(e.getAttribute("class") || "");
}
Vu.prototype = {
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
function zu(e, t) {
  for (var n = Ws(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Hu(e, t) {
  for (var n = Ws(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Gh(e) {
  return function() {
    zu(this, e);
  };
}
function Uh(e) {
  return function() {
    Hu(this, e);
  };
}
function Qh(e, t) {
  return function() {
    (t.apply(this, arguments) ? zu : Hu)(this, e);
  };
}
function Jh(e, t) {
  var n = Mu(e + "");
  if (arguments.length < 2) {
    for (var r = Ws(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Qh : t ? Gh : Uh)(n, t));
}
function eg() {
  this.textContent = "";
}
function tg(e) {
  return function() {
    this.textContent = e;
  };
}
function ng(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function rg(e) {
  return arguments.length ? this.each(e == null ? eg : (typeof e == "function" ? ng : tg)(e)) : this.node().textContent;
}
function og() {
  this.innerHTML = "";
}
function ig(e) {
  return function() {
    this.innerHTML = e;
  };
}
function sg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function ag(e) {
  return arguments.length ? this.each(e == null ? og : (typeof e == "function" ? sg : ig)(e)) : this.node().innerHTML;
}
function lg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ug() {
  return this.each(lg);
}
function cg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function dg() {
  return this.each(cg);
}
function pg(e) {
  var t = typeof e == "function" ? e : Nu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function fg() {
  return null;
}
function hg(e, t) {
  var n = typeof e == "function" ? e : Nu(e), r = t == null ? fg : typeof t == "function" ? t : Zs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function gg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function vg() {
  return this.each(gg);
}
function mg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function yg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function wg(e) {
  return this.select(e ? yg : mg);
}
function bg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function xg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Cg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function $g(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function kg(e, t, n) {
  return function() {
    var r = this.__on, o, i = xg(t);
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
function _g(e, t, n) {
  var r = Cg(e + ""), o, i = r.length, s;
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
  for (a = t ? kg : $g, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Du(e, t, n) {
  var r = Tu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Sg(e, t) {
  return function() {
    return Du(this, e, t);
  };
}
function Ng(e, t) {
  return function() {
    return Du(this, e, t.apply(this, arguments));
  };
}
function Eg(e, t) {
  return this.each((typeof t == "function" ? Ng : Sg)(e, t));
}
function* Pg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Au = [null];
function Mt(e, t) {
  this._groups = e, this._parents = t;
}
function yo() {
  return new Mt([[document.documentElement]], Au);
}
function Lg() {
  return this;
}
Mt.prototype = yo.prototype = {
  constructor: Mt,
  select: nh,
  selectAll: sh,
  selectChild: ch,
  selectChildren: hh,
  filter: gh,
  data: xh,
  enter: vh,
  exit: $h,
  join: kh,
  merge: _h,
  selection: Lg,
  order: Sh,
  sort: Nh,
  call: Ph,
  nodes: Lh,
  node: Oh,
  size: Th,
  empty: Mh,
  each: Vh,
  attr: Bh,
  style: Wh,
  property: Xh,
  classed: Jh,
  text: rg,
  html: ag,
  raise: ug,
  lower: dg,
  append: pg,
  insert: hg,
  remove: vg,
  clone: wg,
  datum: bg,
  on: _g,
  dispatch: Eg,
  [Symbol.iterator]: Pg
};
function zt(e) {
  return typeof e == "string" ? new Mt([[document.querySelector(e)]], [document.documentElement]) : new Mt([[e]], Au);
}
function Og(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Kt(e, t) {
  if (e = Og(e), t === void 0 && (t = e.currentTarget), t) {
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
const Tg = { passive: !1 }, eo = { capture: !0, passive: !1 };
function Ii(e) {
  e.stopImmediatePropagation();
}
function br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Iu(e) {
  var t = e.document.documentElement, n = zt(e).on("dragstart.drag", br, eo);
  "onselectstart" in t ? n.on("selectstart.drag", br, eo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ju(e, t) {
  var n = e.document.documentElement, r = zt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", br, eo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Mo = (e) => () => e;
function as(e, {
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
as.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Mg(e) {
  return !e.ctrlKey && !e.button;
}
function Vg() {
  return this.parentNode;
}
function zg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Hg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Dg() {
  var e = Mg, t = Vg, n = zg, r = Hg, o = {}, i = $i("start", "drag", "end"), s = 0, a, l, u, d, f = 0;
  function p(_) {
    _.on("mousedown.drag", h).filter(r).on("touchstart.drag", w).on("touchmove.drag", C, Tg).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(_, O) {
    if (!(d || !e.call(this, _, O))) {
      var S = b(this, t.call(this, _, O), _, O, "mouse");
      S && (zt(_.view).on("mousemove.drag", g, eo).on("mouseup.drag", y, eo), Iu(_.view), Ii(_), u = !1, a = _.clientX, l = _.clientY, S("start", _));
    }
  }
  function g(_) {
    if (br(_), !u) {
      var O = _.clientX - a, S = _.clientY - l;
      u = O * O + S * S > f;
    }
    o.mouse("drag", _);
  }
  function y(_) {
    zt(_.view).on("mousemove.drag mouseup.drag", null), ju(_.view, u), br(_), o.mouse("end", _);
  }
  function w(_, O) {
    if (e.call(this, _, O)) {
      var S = _.changedTouches, M = t.call(this, _, O), z = S.length, R, q;
      for (R = 0; R < z; ++R)
        (q = b(this, M, _, O, S[R].identifier, S[R])) && (Ii(_), q("start", _, S[R]));
    }
  }
  function C(_) {
    var O = _.changedTouches, S = O.length, M, z;
    for (M = 0; M < S; ++M)
      (z = o[O[M].identifier]) && (br(_), z("drag", _, O[M]));
  }
  function $(_) {
    var O = _.changedTouches, S = O.length, M, z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), M = 0; M < S; ++M)
      (z = o[O[M].identifier]) && (Ii(_), z("end", _, O[M]));
  }
  function b(_, O, S, M, z, R) {
    var q = i.copy(), A = Kt(R || S, O), k, N, x;
    if ((x = n.call(_, new as("beforestart", {
      sourceEvent: S,
      target: p,
      identifier: z,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: q
    }), M)) != null)
      return k = x.x - A[0] || 0, N = x.y - A[1] || 0, function L(E, H, j) {
        var Z = A, V;
        switch (E) {
          case "start":
            o[z] = L, V = s++;
            break;
          case "end":
            delete o[z], --s;
          // falls through
          case "drag":
            A = Kt(j || H, O), V = s;
            break;
        }
        q.call(
          E,
          _,
          new as(E, {
            sourceEvent: H,
            subject: x,
            target: p,
            identifier: z,
            active: V,
            x: A[0] + k,
            y: A[1] + N,
            dx: A[0] - Z[0],
            dy: A[1] - Z[1],
            dispatch: q
          }),
          M
        );
      };
  }
  return p.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Mo(!!_), p) : e;
  }, p.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Mo(_), p) : t;
  }, p.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Mo(_), p) : n;
  }, p.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Mo(!!_), p) : r;
  }, p.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? p : _;
  }, p.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, p) : Math.sqrt(f);
  }, p;
}
function Ys(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Bu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function wo() {
}
var to = 0.7, Jo = 1 / to, xr = "\\s*([+-]?\\d+)\\s*", no = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", an = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ag = /^#([0-9a-f]{3,8})$/, Ig = new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`), jg = new RegExp(`^rgb\\(${an},${an},${an}\\)$`), Bg = new RegExp(`^rgba\\(${xr},${xr},${xr},${no}\\)$`), Kg = new RegExp(`^rgba\\(${an},${an},${an},${no}\\)$`), Rg = new RegExp(`^hsl\\(${no},${an},${an}\\)$`), Zg = new RegExp(`^hsla\\(${no},${an},${an},${no}\\)$`), za = {
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
Ys(wo, or, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ha,
  // Deprecated! Use color.formatHex.
  formatHex: Ha,
  formatHex8: Wg,
  formatHsl: Yg,
  formatRgb: Da,
  toString: Da
});
function Ha() {
  return this.rgb().formatHex();
}
function Wg() {
  return this.rgb().formatHex8();
}
function Yg() {
  return Ku(this).formatHsl();
}
function Da() {
  return this.rgb().formatRgb();
}
function or(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ag.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Aa(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Vo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Vo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ig.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = jg.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? Vo(t[1], t[2], t[3], t[4]) : (t = Kg.exec(e)) ? Vo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Rg.exec(e)) ? Ba(t[1], t[2] / 100, t[3] / 100, 1) : (t = Zg.exec(e)) ? Ba(t[1], t[2] / 100, t[3] / 100, t[4]) : za.hasOwnProperty(e) ? Aa(za[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Aa(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Vo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new kt(e, t, n, r);
}
function qg(e) {
  return e instanceof wo || (e = or(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function ls(e, t, n, r) {
  return arguments.length === 1 ? qg(e) : new kt(e, t, n, r ?? 1);
}
function kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ys(kt, ls, Bu(wo, {
  brighter(e) {
    return e = e == null ? Jo : Math.pow(Jo, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? to : Math.pow(to, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(er(this.r), er(this.g), er(this.b), ei(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ia,
  // Deprecated! Use color.formatHex.
  formatHex: Ia,
  formatHex8: Fg,
  formatRgb: ja,
  toString: ja
}));
function Ia() {
  return `#${Xn(this.r)}${Xn(this.g)}${Xn(this.b)}`;
}
function Fg() {
  return `#${Xn(this.r)}${Xn(this.g)}${Xn(this.b)}${Xn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ja() {
  const e = ei(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${er(this.r)}, ${er(this.g)}, ${er(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ei(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function er(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Xn(e) {
  return e = er(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ba(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Zt(e, t, n, r);
}
function Ku(e) {
  if (e instanceof Zt) return new Zt(e.h, e.s, e.l, e.opacity);
  if (e instanceof wo || (e = or(e)), !e) return new Zt();
  if (e instanceof Zt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Zt(s, a, l, e.opacity);
}
function Xg(e, t, n, r) {
  return arguments.length === 1 ? Ku(e) : new Zt(e, t, n, r ?? 1);
}
function Zt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ys(Zt, Xg, Bu(wo, {
  brighter(e) {
    return e = e == null ? Jo : Math.pow(Jo, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? to : Math.pow(to, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new kt(
      ji(e >= 240 ? e - 240 : e + 120, o, r),
      ji(e, o, r),
      ji(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Zt(Ka(this.h), zo(this.s), zo(this.l), ei(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ei(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ka(this.h)}, ${zo(this.s) * 100}%, ${zo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ka(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function zo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ji(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const qs = (e) => () => e;
function Gg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Ug(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Qg(e) {
  return (e = +e) == 1 ? Ru : function(t, n) {
    return n - t ? Ug(t, n, e) : qs(isNaN(t) ? n : t);
  };
}
function Ru(e, t) {
  var n = t - e;
  return n ? Gg(e, n) : qs(isNaN(e) ? t : e);
}
const ti = function e(t) {
  var n = Qg(t);
  function r(o, i) {
    var s = n((o = ls(o)).r, (i = ls(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Ru(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Jg(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function e1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function t1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Qr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function n1(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function nn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function r1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Qr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var us = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Bi = new RegExp(us.source, "g");
function o1(e) {
  return function() {
    return e;
  };
}
function i1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Zu(e, t) {
  var n = us.lastIndex = Bi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = us.exec(e)) && (o = Bi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: nn(r, o) })), n = Bi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? i1(l[0].x) : o1(t) : (t = l.length, function(u) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(u);
    return a.join("");
  });
}
function Qr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? qs(t) : (n === "number" ? nn : n === "string" ? (r = or(t)) ? (t = r, ti) : Zu : t instanceof or ? ti : t instanceof Date ? n1 : e1(t) ? Jg : Array.isArray(t) ? t1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? r1 : nn)(e, t);
}
var Ra = 180 / Math.PI, Wu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Yu(e, t, n, r, o, i) {
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
function s1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Wu : Yu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function a1(e) {
  return e == null || (Ho || (Ho = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ho.setAttribute("transform", e), !(e = Ho.transform.baseVal.consolidate())) ? Wu : (e = e.matrix, Yu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function qu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var y = h.push("translate(", null, t, null, n);
      g.push({ i: y - 4, x: nn(u, f) }, { i: y - 2, x: nn(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(u, d, f, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: nn(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(u, d, f, p) {
    u !== d ? p.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: nn(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: nn(u, f) }, { i: y - 2, x: nn(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(u, d) {
    var f = [], p = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, p), s(u.rotate, d.rotate, f, p), a(u.skewX, d.skewX, f, p), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, p), u = d = null, function(h) {
      for (var g = -1, y = p.length, w; ++g < y; ) f[(w = p[g]).i] = w.x(h);
      return f.join("");
    };
  };
}
var l1 = qu(s1, "px, ", "px)", "deg)"), u1 = qu(a1, ", ", ")", ")"), c1 = 1e-12;
function Za(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function d1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function p1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ro = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], f = s[1], p = s[2], h = d - a, g = f - l, y = h * h + g * g, w, C;
    if (y < c1)
      C = Math.log(p / u) / t, w = function(M) {
        return [
          a + M * h,
          l + M * g,
          u * Math.exp(t * M * C)
        ];
      };
    else {
      var $ = Math.sqrt(y), b = (p * p - u * u + r * y) / (2 * u * n * $), _ = (p * p - u * u - r * y) / (2 * p * n * $), O = Math.log(Math.sqrt(b * b + 1) - b), S = Math.log(Math.sqrt(_ * _ + 1) - _);
      C = (S - O) / t, w = function(M) {
        var z = M * C, R = Za(O), q = u / (n * $) * (R * p1(t * z + O) - d1(O));
        return [
          a + q * h,
          l + q * g,
          u * R / Za(t * z + O)
        ];
      };
    }
    return w.duration = C * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Mr = 0, qr = 0, Zr = 0, Fu = 1e3, ni, Fr, ri = 0, ir = 0, _i = 0, ro = typeof performance == "object" && performance.now ? performance : Date, Xu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Fs() {
  return ir || (Xu(f1), ir = ro.now() + _i);
}
function f1() {
  ir = 0;
}
function oi() {
  this._call = this._time = this._next = null;
}
oi.prototype = Gu.prototype = {
  constructor: oi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Fs() : +n) + (t == null ? 0 : +t), !this._next && Fr !== this && (Fr ? Fr._next = this : ni = this, Fr = this), this._call = e, this._time = n, cs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, cs());
  }
};
function Gu(e, t, n) {
  var r = new oi();
  return r.restart(e, t, n), r;
}
function h1() {
  Fs(), ++Mr;
  for (var e = ni, t; e; )
    (t = ir - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Mr;
}
function Wa() {
  ir = (ri = ro.now()) + _i, Mr = qr = 0;
  try {
    h1();
  } finally {
    Mr = 0, v1(), ir = 0;
  }
}
function g1() {
  var e = ro.now(), t = e - ri;
  t > Fu && (_i -= t, ri = e);
}
function v1() {
  for (var e, t = ni, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ni = n);
  Fr = e, cs(r);
}
function cs(e) {
  if (!Mr) {
    qr && (qr = clearTimeout(qr));
    var t = e - ir;
    t > 24 ? (e < 1 / 0 && (qr = setTimeout(Wa, e - ro.now() - _i)), Zr && (Zr = clearInterval(Zr))) : (Zr || (ri = ro.now(), Zr = setInterval(g1, Fu)), Mr = 1, Xu(Wa));
  }
}
function Ya(e, t, n) {
  var r = new oi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var m1 = $i("start", "end", "cancel", "interrupt"), y1 = [], Uu = 0, qa = 1, ds = 2, Zo = 3, Fa = 4, ps = 5, Wo = 6;
function Si(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  w1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: m1,
    tween: y1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Uu
  });
}
function Xs(e, t) {
  var n = Ut(e, t);
  if (n.state > Uu) throw new Error("too late; already scheduled");
  return n;
}
function dn(e, t) {
  var n = Ut(e, t);
  if (n.state > Zo) throw new Error("too late; already running");
  return n;
}
function Ut(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function w1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Gu(i, 0, n.time);
  function i(u) {
    n.state = qa, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, p, h;
    if (n.state !== qa) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === Zo) return Ya(s);
        h.state === Fa ? (h.state = Wo, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Wo, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Ya(function() {
      n.state === Zo && (n.state = Fa, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ds, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ds) {
      for (n.state = Zo, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ps, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === ps && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Wo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Yo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ds && r.state < ps, r.state = Wo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function b1(e) {
  return this.each(function() {
    Yo(this, e);
  });
}
function x1(e, t) {
  var n, r;
  return function() {
    var o = dn(this, e), i = o.tween;
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
function C1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = dn(this, e), s = i.tween;
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
function $1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ut(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? x1 : C1)(n, e, t));
}
function Gs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = dn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ut(o, r).value[t];
  };
}
function Qu(e, t) {
  var n;
  return (typeof t == "number" ? nn : t instanceof or ? ti : (n = or(t)) ? (t = n, ti) : Zu)(e, t);
}
function k1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function S1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function N1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function E1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function P1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function L1(e, t) {
  var n = ki(e), r = n === "transform" ? u1 : Qu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? P1 : E1)(n, r, Gs(this, "attr." + e, t)) : t == null ? (n.local ? _1 : k1)(n) : (n.local ? N1 : S1)(n, r, t));
}
function O1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function T1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function M1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && T1(e, i)), n;
  }
  return o._value = t, o;
}
function V1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && O1(e, i)), n;
  }
  return o._value = t, o;
}
function z1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ki(e);
  return this.tween(n, (r.local ? M1 : V1)(r, t));
}
function H1(e, t) {
  return function() {
    Xs(this, e).delay = +t.apply(this, arguments);
  };
}
function D1(e, t) {
  return t = +t, function() {
    Xs(this, e).delay = t;
  };
}
function A1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? H1 : D1)(t, e)) : Ut(this.node(), t).delay;
}
function I1(e, t) {
  return function() {
    dn(this, e).duration = +t.apply(this, arguments);
  };
}
function j1(e, t) {
  return t = +t, function() {
    dn(this, e).duration = t;
  };
}
function B1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? I1 : j1)(t, e)) : Ut(this.node(), t).duration;
}
function K1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    dn(this, e).ease = t;
  };
}
function R1(e) {
  var t = this._id;
  return arguments.length ? this.each(K1(t, e)) : Ut(this.node(), t).ease;
}
function Z1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    dn(this, e).ease = n;
  };
}
function W1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Z1(this._id, e));
}
function Y1(e) {
  typeof e != "function" && (e = Pu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new bn(r, this._parents, this._name, this._id);
}
function q1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, f = s[a] = new Array(d), p, h = 0; h < d; ++h)
      (p = l[h] || u[h]) && (f[h] = p);
  for (; a < r; ++a)
    s[a] = t[a];
  return new bn(s, this._parents, this._name, this._id);
}
function F1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function X1(e, t, n) {
  var r, o, i = F1(t) ? Xs : dn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function G1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ut(this.node(), n).on.on(e) : this.each(X1(n, e, t));
}
function U1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Q1() {
  return this.on("end.remove", U1(this._id));
}
function J1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Zs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, f, p = 0; p < l; ++p)
      (d = a[p]) && (f = e.call(d, d.__data__, p, a)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, Si(u[p], t, n, p, u, Ut(d, n)));
  return new bn(i, this._parents, t, n);
}
function ev(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Eu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, f = 0; f < u; ++f)
      if (d = l[f]) {
        for (var p = e.call(d, d.__data__, f, l), h, g = Ut(d, n), y = 0, w = p.length; y < w; ++y)
          (h = p[y]) && Si(h, t, n, y, p, g);
        i.push(p), s.push(d);
      }
  return new bn(i, s, t, n);
}
var tv = yo.prototype.constructor;
function nv() {
  return new tv(this._groups, this._parents);
}
function rv(e, t) {
  var n, r, o;
  return function() {
    var i = Tr(this, e), s = (this.style.removeProperty(e), Tr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ju(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ov(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Tr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function iv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Tr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Tr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function sv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = dn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Ju(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function av(e, t, n) {
  var r = (e += "") == "transform" ? l1 : Qu;
  return t == null ? this.styleTween(e, rv(e, r)).on("end.style." + e, Ju(e)) : typeof t == "function" ? this.styleTween(e, iv(e, r, Gs(this, "style." + e, t))).each(sv(this._id, e)) : this.styleTween(e, ov(e, r, t), n).on("end.style." + e, null);
}
function lv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function uv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && lv(e, s, n)), r;
  }
  return i._value = t, i;
}
function cv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, uv(e, t, n ?? ""));
}
function dv(e) {
  return function() {
    this.textContent = e;
  };
}
function pv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function fv(e) {
  return this.tween("text", typeof e == "function" ? pv(Gs(this, "text", e)) : dv(e == null ? "" : e + ""));
}
function hv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function gv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && hv(o)), t;
  }
  return r._value = e, r;
}
function vv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, gv(e));
}
function mv() {
  for (var e = this._name, t = this._id, n = ec(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Ut(l, t);
        Si(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new bn(r, this._parents, e, n);
}
function yv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = dn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var wv = 0;
function bn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ec() {
  return ++wv;
}
var pn = yo.prototype;
bn.prototype = {
  constructor: bn,
  select: J1,
  selectAll: ev,
  selectChild: pn.selectChild,
  selectChildren: pn.selectChildren,
  filter: Y1,
  merge: q1,
  selection: nv,
  transition: mv,
  call: pn.call,
  nodes: pn.nodes,
  node: pn.node,
  size: pn.size,
  empty: pn.empty,
  each: pn.each,
  on: G1,
  attr: L1,
  attrTween: z1,
  style: av,
  styleTween: cv,
  text: fv,
  textTween: vv,
  remove: Q1,
  tween: $1,
  delay: A1,
  duration: B1,
  ease: R1,
  easeVarying: W1,
  end: yv,
  [Symbol.iterator]: pn[Symbol.iterator]
};
function bv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var xv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bv
};
function Cv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function $v(e) {
  var t, n;
  e instanceof bn ? (t = e._id, e = e._name) : (t = ec(), (n = xv).time = Fs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Si(l, e, t, u, s, n || Cv(l, t));
  return new bn(r, this._parents, e, t);
}
yo.prototype.interrupt = b1;
yo.prototype.transition = $v;
const Do = (e) => () => e;
function kv(e, {
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
function hn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
hn.prototype = {
  constructor: hn,
  scale: function(e) {
    return e === 1 ? this : new hn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new hn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ni = new hn(1, 0, 0);
tc.prototype = hn.prototype;
function tc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ni;
  return e.__zoom;
}
function Ki(e) {
  e.stopImmediatePropagation();
}
function Wr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _v(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Sv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Xa() {
  return this.__zoom || Ni;
}
function Nv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Ev() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Pv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function nc() {
  var e = _v, t = Sv, n = Pv, r = Nv, o = Ev, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Ro, u = $i("start", "zoom", "end"), d, f, p, h = 500, g = 150, y = 0, w = 10;
  function C(x) {
    x.property("__zoom", Xa).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", q).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(x, L, E, H) {
    var j = x.selection ? x.selection() : x;
    j.property("__zoom", Xa), x !== j ? O(x, L, E, H) : j.interrupt().each(function() {
      S(this, arguments).event(H).start().zoom(null, typeof L == "function" ? L.apply(this, arguments) : L).end();
    });
  }, C.scaleBy = function(x, L, E, H) {
    C.scaleTo(x, function() {
      var j = this.__zoom.k, Z = typeof L == "function" ? L.apply(this, arguments) : L;
      return j * Z;
    }, E, H);
  }, C.scaleTo = function(x, L, E, H) {
    C.transform(x, function() {
      var j = t.apply(this, arguments), Z = this.__zoom, V = E == null ? _(j) : typeof E == "function" ? E.apply(this, arguments) : E, W = Z.invert(V), Q = typeof L == "function" ? L.apply(this, arguments) : L;
      return n(b($(Z, Q), V, W), j, s);
    }, E, H);
  }, C.translateBy = function(x, L, E, H) {
    C.transform(x, function() {
      return n(this.__zoom.translate(
        typeof L == "function" ? L.apply(this, arguments) : L,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, H);
  }, C.translateTo = function(x, L, E, H, j) {
    C.transform(x, function() {
      var Z = t.apply(this, arguments), V = this.__zoom, W = H == null ? _(Z) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(Ni.translate(W[0], W[1]).scale(V.k).translate(
        typeof L == "function" ? -L.apply(this, arguments) : -L,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), Z, s);
    }, H, j);
  };
  function $(x, L) {
    return L = Math.max(i[0], Math.min(i[1], L)), L === x.k ? x : new hn(L, x.x, x.y);
  }
  function b(x, L, E) {
    var H = L[0] - E[0] * x.k, j = L[1] - E[1] * x.k;
    return H === x.x && j === x.y ? x : new hn(x.k, H, j);
  }
  function _(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function O(x, L, E, H) {
    x.on("start.zoom", function() {
      S(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var j = this, Z = arguments, V = S(j, Z).event(H), W = t.apply(j, Z), Q = E == null ? _(W) : typeof E == "function" ? E.apply(j, Z) : E, te = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), K = j.__zoom, X = typeof L == "function" ? L.apply(j, Z) : L, G = l(K.invert(Q).concat(te / K.k), X.invert(Q).concat(te / X.k));
      return function(oe) {
        if (oe === 1) oe = X;
        else {
          var se = G(oe), J = te / se[2];
          oe = new hn(J, Q[0] - se[0] * J, Q[1] - se[1] * J);
        }
        V.zoom(null, oe);
      };
    });
  }
  function S(x, L, E) {
    return !E && x.__zooming || new M(x, L);
  }
  function M(x, L) {
    this.that = x, this.args = L, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, L), this.taps = 0;
  }
  M.prototype = {
    event: function(x) {
      return x && (this.sourceEvent = x), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(x, L) {
      return this.mouse && x !== "mouse" && (this.mouse[1] = L.invert(this.mouse[0])), this.touch0 && x !== "touch" && (this.touch0[1] = L.invert(this.touch0[0])), this.touch1 && x !== "touch" && (this.touch1[1] = L.invert(this.touch1[0])), this.that.__zoom = L, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(x) {
      var L = zt(this.that).datum();
      u.call(
        x,
        this.that,
        new kv(x, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        L
      );
    }
  };
  function z(x, ...L) {
    if (!e.apply(this, arguments)) return;
    var E = S(this, L).event(x), H = this.__zoom, j = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), Z = Kt(x);
    if (E.wheel)
      (E.mouse[0][0] !== Z[0] || E.mouse[0][1] !== Z[1]) && (E.mouse[1] = H.invert(E.mouse[0] = Z)), clearTimeout(E.wheel);
    else {
      if (H.k === j) return;
      E.mouse = [Z, H.invert(Z)], Yo(this), E.start();
    }
    Wr(x), E.wheel = setTimeout(V, g), E.zoom("mouse", n(b($(H, j), E.mouse[0], E.mouse[1]), E.extent, s));
    function V() {
      E.wheel = null, E.end();
    }
  }
  function R(x, ...L) {
    if (p || !e.apply(this, arguments)) return;
    var E = x.currentTarget, H = S(this, L, !0).event(x), j = zt(x.view).on("mousemove.zoom", Q, !0).on("mouseup.zoom", te, !0), Z = Kt(x, E), V = x.clientX, W = x.clientY;
    Iu(x.view), Ki(x), H.mouse = [Z, this.__zoom.invert(Z)], Yo(this), H.start();
    function Q(K) {
      if (Wr(K), !H.moved) {
        var X = K.clientX - V, G = K.clientY - W;
        H.moved = X * X + G * G > y;
      }
      H.event(K).zoom("mouse", n(b(H.that.__zoom, H.mouse[0] = Kt(K, E), H.mouse[1]), H.extent, s));
    }
    function te(K) {
      j.on("mousemove.zoom mouseup.zoom", null), ju(K.view, H.moved), Wr(K), H.event(K).end();
    }
  }
  function q(x, ...L) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, H = Kt(x.changedTouches ? x.changedTouches[0] : x, this), j = E.invert(H), Z = E.k * (x.shiftKey ? 0.5 : 2), V = n(b($(E, Z), H, j), t.apply(this, L), s);
      Wr(x), a > 0 ? zt(this).transition().duration(a).call(O, V, H, x) : zt(this).call(C.transform, V, H, x);
    }
  }
  function A(x, ...L) {
    if (e.apply(this, arguments)) {
      var E = x.touches, H = E.length, j = S(this, L, x.changedTouches.length === H).event(x), Z, V, W, Q;
      for (Ki(x), V = 0; V < H; ++V)
        W = E[V], Q = Kt(W, this), Q = [Q, this.__zoom.invert(Q), W.identifier], j.touch0 ? !j.touch1 && j.touch0[2] !== Q[2] && (j.touch1 = Q, j.taps = 0) : (j.touch0 = Q, Z = !0, j.taps = 1 + !!d);
      d && (d = clearTimeout(d)), Z && (j.taps < 2 && (f = Q[0], d = setTimeout(function() {
        d = null;
      }, h)), Yo(this), j.start());
    }
  }
  function k(x, ...L) {
    if (this.__zooming) {
      var E = S(this, L).event(x), H = x.changedTouches, j = H.length, Z, V, W, Q;
      for (Wr(x), Z = 0; Z < j; ++Z)
        V = H[Z], W = Kt(V, this), E.touch0 && E.touch0[2] === V.identifier ? E.touch0[0] = W : E.touch1 && E.touch1[2] === V.identifier && (E.touch1[0] = W);
      if (V = E.that.__zoom, E.touch1) {
        var te = E.touch0[0], K = E.touch0[1], X = E.touch1[0], G = E.touch1[1], oe = (oe = X[0] - te[0]) * oe + (oe = X[1] - te[1]) * oe, se = (se = G[0] - K[0]) * se + (se = G[1] - K[1]) * se;
        V = $(V, Math.sqrt(oe / se)), W = [(te[0] + X[0]) / 2, (te[1] + X[1]) / 2], Q = [(K[0] + G[0]) / 2, (K[1] + G[1]) / 2];
      } else if (E.touch0) W = E.touch0[0], Q = E.touch0[1];
      else return;
      E.zoom("touch", n(b(V, W, Q), E.extent, s));
    }
  }
  function N(x, ...L) {
    if (this.__zooming) {
      var E = S(this, L).event(x), H = x.changedTouches, j = H.length, Z, V;
      for (Ki(x), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), Z = 0; Z < j; ++Z)
        V = H[Z], E.touch0 && E.touch0[2] === V.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === V.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (V = Kt(V, this), Math.hypot(f[0] - V[0], f[1] - V[1]) < w)) {
        var W = zt(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : Do(+x), C) : r;
  }, C.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Do(!!x), C) : e;
  }, C.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : Do(!!x), C) : o;
  }, C.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Do([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), C) : t;
  }, C.scaleExtent = function(x) {
    return arguments.length ? (i[0] = +x[0], i[1] = +x[1], C) : [i[0], i[1]];
  }, C.translateExtent = function(x) {
    return arguments.length ? (s[0][0] = +x[0][0], s[1][0] = +x[1][0], s[0][1] = +x[0][1], s[1][1] = +x[1][1], C) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, C.constrain = function(x) {
    return arguments.length ? (n = x, C) : n;
  }, C.duration = function(x) {
    return arguments.length ? (a = +x, C) : a;
  }, C.interpolate = function(x) {
    return arguments.length ? (l = x, C) : l;
  }, C.on = function() {
    var x = u.on.apply(u, arguments);
    return x === u ? C : x;
  }, C.clickDistance = function(x) {
    return arguments.length ? (y = (x = +x) * x, C) : Math.sqrt(y);
  }, C.tapDistance = function(x) {
    return arguments.length ? (w = +x, C) : w;
  }, C;
}
const oo = {
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
}, fs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], rc = ["Enter", " ", "Escape"], Lv = {
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
var Vr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Vr || (Vr = {}));
var tr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(tr || (tr = {}));
var ii;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ii || (ii = {}));
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
var fn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(fn || (fn = {}));
var io;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(io || (io = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const Ga = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function Ov(e, t) {
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
function Ua(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Tv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const oc = (e) => "id" in e && "source" in e && "target" in e, Mv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Us = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), bo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Wn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Vv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Us(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? si(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ei(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Pi(n);
}, xo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = si(r);
      n = Ei(n, o);
    }
  }), Pi(n);
}, Qs = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...$o(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: f = !0, hidden: p = !1 } = u;
    if (s && !f || p)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, g = d.height ?? u.height ?? u.initialHeight ?? null, y = so(a, Hr(u)), w = (h ?? 0) * (g ?? 0), C = i && y > 0;
    (!u.internals.handleBounds || C || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, zv = (e, t) => {
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
async function Dv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Hv(e, s), l = xo(a), u = Js(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function ic({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", oo.error005());
    else {
      const h = a.measured.width, g = a.measured.height;
      h && g && (f = [
        [l, u],
        [l + h, u + g]
      ]);
    }
  else a && Dr(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = Dr(f) ? sr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", oo.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function Av({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const p = i.has(f.id), h = !p && f.parentId && s.find((g) => g.id === f.parentId);
    (p || h) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = zv(s, l);
  for (const f of l)
    a.has(f.id) && !u.find((p) => p.id === f.id) && u.push(f);
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
const zr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), sr = (e = { x: 0, y: 0 }, t, n) => ({
  x: zr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: zr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function sc(e, t, n) {
  const { width: r, height: o } = Wn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return sr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Qa = (e, t, n) => e < t ? zr(Math.abs(e - t), 1, t) / t : e > n ? -zr(Math.abs(e - n), 1, t) / t : 0, ac = (e, t, n = 15, r = 40) => {
  const o = Qa(e.x, r, t.width - r) * n, i = Qa(e.y, r, t.height - r) * n;
  return [o, i];
}, Ei = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), gs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Pi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Hr = (e, t = [0, 0]) => {
  const { x: n, y: r } = Us(e) ? e.internals.positionAbsolute : bo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, si = (e, t = [0, 0]) => {
  const { x: n, y: r } = Us(e) ? e.internals.positionAbsolute : bo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, lc = (e, t) => Pi(Ei(gs(e), gs(t))), so = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ja = (e) => gn(e.width) && gn(e.height) && gn(e.x) && gn(e.y), gn = (e) => !isNaN(e) && isFinite(e), Iv = (e, t) => {
}, Co = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), $o = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Co(a, s) : a;
}, ai = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function vr(e, t) {
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
function jv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = vr(e, n), o = vr(e, t);
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
    const r = vr(e.top ?? e.y ?? 0, n), o = vr(e.bottom ?? e.y ?? 0, n), i = vr(e.left ?? e.x ?? 0, t), s = vr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Bv(e, t, n, r, o, i) {
  const { x: s, y: a } = ai(e, [t, n, r]), { x: l, y: u } = ai({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const Js = (e, t, n, r, o, i) => {
  const s = jv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = zr(u, r, o), f = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - f * d, g = n / 2 - p * d, y = Bv(e, h, g, d, t, n), w = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: h - w.left + w.right,
    y: g - w.top + w.bottom,
    zoom: d
  };
}, Gn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Dr(e) {
  return e != null && e !== "parent";
}
function Wn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function uc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Kv(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Rv(e) {
  return { ...Lv, ...e || {} };
}
function Ri(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Wt(e), a = $o({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Co(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const cc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), dc = (e) => e?.getRootNode?.() || window?.document, Zv = ["INPUT", "SELECT", "TEXTAREA"];
function pc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Zv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const fc = (e) => "clientX" in e, Wt = (e, t) => {
  const n = fc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, el = (e, t, n, r, o) => {
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
      ...cc(s)
    };
  });
};
function Wv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, d, f];
}
function Ao(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function tl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ye.Left:
      return [t - Ao(t - r, i), n];
    case ye.Right:
      return [t + Ao(r - t, i), n];
    case ye.Top:
      return [t, n - Ao(n - o, i)];
    case ye.Bottom:
      return [t, n + Ao(o - n, i)];
  }
}
function hc({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, curvature: s = 0.25 }) {
  const [a, l] = tl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = tl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, p, h, g] = Wv({
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
    f,
    p,
    h,
    g
  ];
}
function gc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Yv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function qv({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ei(si(e), si(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return so(s, Pi(i)) > 0;
}
const Fv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Xv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Gv = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return oc(e) ? n = { ...e } : n = {
    ...e,
    id: Fv(e)
  }, Xv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function vc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = gc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const nl = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, Uv = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, rl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Qv({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i, stepPosition: s }) {
  const a = nl[t], l = nl[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = Uv({
    source: u,
    sourcePosition: t,
    target: d
  }), p = f.x !== 0 ? "x" : "y", h = f[p];
  let g = [], y, w;
  const C = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [, , b, _] = gc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const O = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], S = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[p] === h ? g = p === "x" ? O : S : g = p === "x" ? S : O;
  } else {
    const O = [{ x: u.x, y: d.y }], S = [{ x: d.x, y: u.y }];
    if (p === "x" ? g = a.x === h ? S : O : g = a.y === h ? O : S, t === r) {
      const A = Math.abs(e[p] - n[p]);
      if (A <= i) {
        const k = Math.min(i - 1, i - A);
        a[p] === h ? C[p] = (u[p] > e[p] ? -1 : 1) * k : $[p] = (d[p] > n[p] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const A = p === "x" ? "y" : "x", k = a[p] === l[A], N = u[A] > d[A], x = u[A] < d[A];
      (a[p] === 1 && (!k && N || k && x) || a[p] !== 1 && (!k && x || k && N)) && (g = p === "x" ? O : S);
    }
    const M = { x: u.x + C.x, y: u.y + C.y }, z = { x: d.x + $.x, y: d.y + $.y }, R = Math.max(Math.abs(M.x - g[0].x), Math.abs(z.x - g[0].x)), q = Math.max(Math.abs(M.y - g[0].y), Math.abs(z.y - g[0].y));
    R >= q ? (y = (M.x + z.x) / 2, w = g[0].y) : (y = g[0].x, w = (M.y + z.y) / 2);
  }
  return [[
    e,
    { x: u.x + C.x, y: u.y + C.y },
    ...g,
    { x: d.x + $.x, y: d.y + $.y },
    n
  ], y, w, b, _];
}
function Jv(e, t, n, r) {
  const o = Math.min(rl(e, t) / 2, rl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ea({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [f, p, h, g, y] = Qv({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [f.reduce((w, C, $) => {
    let b = "";
    return $ > 0 && $ < f.length - 1 ? b = Jv(f[$ - 1], C, f[$ + 1], s) : b = `${$ === 0 ? "M" : "L"}${C.x} ${C.y}`, w += b, w;
  }, ""), p, h, g, y];
}
function ol(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function e0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ol(t) || !ol(n))
    return null;
  const r = t.internals.handleBounds || il(t.handles), o = n.internals.handleBounds || il(n.handles), i = sl(r?.source ?? [], e.sourceHandle), s = sl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Vr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", oo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ye.Bottom, l = s?.position || ye.Top, u = ao(t, i, a), d = ao(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function il(e) {
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
function ao(e, t, n = ye.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Wn(e);
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
function sl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function vs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function t0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = vs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function n0(e, t, n, r, o) {
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
const ta = {
  nodeOrigin: [0, 0],
  nodeExtent: fs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, r0 = {
  ...ta,
  checkEquality: !0
};
function na(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function o0(e, t, n) {
  const r = na(ta, n);
  for (const o of e.values())
    if (o.parentId)
      ra(o, e, t, r);
    else {
      const i = bo(o, r.nodeOrigin), s = Dr(o.extent) ? o.extent : r.nodeExtent, a = sr(i, s, Wn(o));
      o.internals.positionAbsolute = a;
    }
}
function i0(e, t) {
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
function s0(e, t, n, r) {
  const o = na(r0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = bo(l, o.nodeOrigin), f = Dr(l.extent) ? l.extent : o.nodeExtent, p = sr(d, f, Wn(l));
      u = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: p,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: i0(l, u),
          z: mc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && ra(u, t, n, r);
  }
  return i;
}
function a0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ra(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = na(ta, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  a0(e, n);
  const u = o ? 1e3 : 0, { x: d, y: f, z: p } = l0(e, l, i, s, u), { positionAbsolute: h } = e.internals, g = d !== h.x || f !== h.y;
  (g || p !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: g ? { x: d, y: f } : h,
      z: p
    }
  });
}
function mc(e, t) {
  return (gn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function l0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Wn(e), l = bo(e, n), u = Dr(e.extent) ? sr(l, e.extent, a) : l;
  let d = sr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = sc(d, a, t));
  const f = mc(e, o), p = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= f ? p + 1 : f
  };
}
function u0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Hr(a), u = lc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Wn(a), f = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, g = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (g - d.width) * f[0], C = (y - d.height) * f[1];
    (p > 0 || h > 0 || w || C) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + w,
        y: a.position.y - h + C
      }
    }), n.get(l)?.forEach(($) => {
      e.some((b) => b.id === $.id) || o.push({
        id: $.id,
        type: "position",
        position: {
          x: $.position.x + p,
          y: $.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || p || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: g + (p ? f[0] * p - w : 0),
        height: y + (h ? f[1] * h - C : 0)
      }
    });
  }), o;
}
function c0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), f = [];
  for (const p of e.values()) {
    const h = t.get(p.id);
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
    const g = cc(p.nodeElement), y = h.measured.width !== g.width || h.measured.height !== g.height;
    if (g.width && g.height && (y || !h.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), C = Dr(h.extent) ? h.extent : i;
      let { positionAbsolute: $ } = h.internals;
      h.parentId && h.extent === "parent" ? $ = sc($, g, t.get(h.parentId)) : C && ($ = sr($, C, g));
      const b = {
        ...h,
        measured: g,
        internals: {
          ...h.internals,
          positionAbsolute: $,
          handleBounds: {
            source: el("source", p.nodeElement, w, d, h.id),
            target: el("target", p.nodeElement, w, d, h.id)
          }
        }
      };
      t.set(h.id, b), h.parentId && ra(b, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: g
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: Hr(b, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = u0(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function d0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function al(e, t, n, r, o, i) {
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
function p0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    al("source", l, d, e, o, s), al("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function f0(e, t) {
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
function yc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : yc(n, t) : !1;
}
function ll(e, t, n) {
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
function h0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !yc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Zi({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function g0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Co(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function v0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, f = !1, p = null, h = !1, g = !1, y = null;
  function w({ noDragClassName: $, handleSelector: b, domNode: _, isSelectable: O, nodeId: S, nodeClickDistance: M = 0 }) {
    p = zt(_);
    function z({ x: k, y: N }) {
      const { nodeLookup: x, nodeExtent: L, snapGrid: E, snapToGrid: H, nodeOrigin: j, onNodeDrag: Z, onSelectionDrag: V, onError: W, updateNodePositions: Q } = t();
      i = { x: k, y: N };
      let te = !1;
      const K = a.size > 1, X = K && L ? gs(xo(a)) : null, G = K && H ? g0({
        dragItems: a,
        snapGrid: E,
        x: k,
        y: N
      }) : null;
      for (const [oe, se] of a) {
        if (!x.has(oe))
          continue;
        let J = { x: k - se.distance.x, y: N - se.distance.y };
        H && (J = G ? {
          x: Math.round(J.x + G.x),
          y: Math.round(J.y + G.y)
        } : Co(J, E));
        let we = null;
        if (K && L && !se.extent && X) {
          const { positionAbsolute: re } = se.internals, pe = re.x - X.x + L[0][0], ge = re.x + se.measured.width - X.x2 + L[1][0], xe = re.y - X.y + L[0][1], de = re.y + se.measured.height - X.y2 + L[1][1];
          we = [
            [pe, xe],
            [ge, de]
          ];
        }
        const { position: ce, positionAbsolute: ee } = ic({
          nodeId: oe,
          nextPosition: J,
          nodeLookup: x,
          nodeExtent: we || L,
          nodeOrigin: j,
          onError: W
        });
        te = te || se.position.x !== ce.x || se.position.y !== ce.y, se.position = ce, se.internals.positionAbsolute = ee;
      }
      if (g = g || te, !!te && (Q(a, !0), y && (r || Z || !S && V))) {
        const [oe, se] = Zi({
          nodeId: S,
          dragItems: a,
          nodeLookup: x
        });
        r?.(y, a, oe, se), Z?.(y, oe, se), S || V?.(y, se);
      }
    }
    async function R() {
      if (!d)
        return;
      const { transform: k, panBy: N, autoPanSpeed: x, autoPanOnNodeDrag: L } = t();
      if (!L) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, H] = ac(u, d, x);
      (E !== 0 || H !== 0) && (i.x = (i.x ?? 0) - E / k[2], i.y = (i.y ?? 0) - H / k[2], await N({ x: E, y: H }) && z(i)), s = requestAnimationFrame(R);
    }
    function q(k) {
      const { nodeLookup: N, multiSelectionActive: x, nodesDraggable: L, transform: E, snapGrid: H, snapToGrid: j, selectNodesOnDrag: Z, onNodeDragStart: V, onSelectionDragStart: W, unselectNodesAndEdges: Q } = t();
      f = !0, (!Z || !O) && !x && S && (N.get(S)?.selected || Q()), O && Z && S && e?.(S);
      const te = Ri(k.sourceEvent, { transform: E, snapGrid: H, snapToGrid: j, containerBounds: d });
      if (i = te, a = h0(N, L, te, S), a.size > 0 && (n || V || !S && W)) {
        const [K, X] = Zi({
          nodeId: S,
          dragItems: a,
          nodeLookup: N
        });
        n?.(k.sourceEvent, a, K, X), V?.(k.sourceEvent, K, X), S || W?.(k.sourceEvent, X);
      }
    }
    const A = Dg().clickDistance(M).on("start", (k) => {
      const { domNode: N, nodeDragThreshold: x, transform: L, snapGrid: E, snapToGrid: H } = t();
      d = N?.getBoundingClientRect() || null, h = !1, g = !1, y = k.sourceEvent, x === 0 && q(k), i = Ri(k.sourceEvent, { transform: L, snapGrid: E, snapToGrid: H, containerBounds: d }), u = Wt(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: N, transform: x, snapGrid: L, snapToGrid: E, nodeDragThreshold: H, nodeLookup: j } = t(), Z = Ri(k.sourceEvent, { transform: x, snapGrid: L, snapToGrid: E, containerBounds: d });
      if (y = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      S && !j.has(S)) && (h = !0), !h) {
        if (!l && N && f && (l = !0, R()), !f) {
          const V = Wt(k.sourceEvent, d), W = V.x - u.x, Q = V.y - u.y;
          Math.sqrt(W * W + Q * Q) > H && q(k);
        }
        (i.x !== Z.xSnapped || i.y !== Z.ySnapped) && a && f && (u = Wt(k.sourceEvent, d), z(Z));
      }
    }).on("end", (k) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: x, onNodeDragStop: L, onSelectionDragStop: E } = t();
        if (g && (x(a, !1), g = !1), o || L || !S && E) {
          const [H, j] = Zi({
            nodeId: S,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.(k.sourceEvent, a, H, j), L?.(k.sourceEvent, H, j), S || E?.(k.sourceEvent, j);
        }
      }
    }).filter((k) => {
      const N = k.target;
      return !k.button && (!$ || !ll(N, `.${$}`, _)) && (!b || ll(N, b, _));
    });
    p.call(A);
  }
  function C() {
    p?.on(".drag", null);
  }
  return {
    update: w,
    destroy: C
  };
}
function m0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    so(o, Hr(i)) > 0 && r.push(i);
  return r;
}
const y0 = 250;
function w0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = m0(e, n, t + y0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: f } = ao(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
      p > t || (p < i ? (o = [{ ...u, x: d, y: f }], i = p) : p === i && o.push({ ...u, x: d, y: f }));
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
function wc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...ao(s, l, l.position, !0) } : l;
}
function bc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function b0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const xc = () => !0;
function x0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: f, panBy: p, cancelConnection: h, onConnectStart: g, onConnect: y, onConnectEnd: w, isValidConnection: C = xc, onReconnectEnd: $, updateConnection: b, getTransform: _, getFromHandle: O, autoPanSpeed: S, dragThreshold: M = 1, handleDomNode: z }) {
  const R = dc(e.target);
  let q = 0, A;
  const { x: k, y: N } = Wt(e), x = bc(i, z), L = a?.getBoundingClientRect();
  let E = !1;
  if (!L || !x)
    return;
  const H = wc(o, x, r, l, t);
  if (!H)
    return;
  let j = Wt(e, L), Z = !1, V = null, W = !1, Q = null;
  function te() {
    if (!d || !L)
      return;
    const [we, ce] = ac(j, L, S);
    p({ x: we, y: ce }), q = requestAnimationFrame(te);
  }
  const K = {
    ...H,
    nodeId: o,
    type: x,
    position: H.position
  }, X = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: ao(X, K, ye.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: X,
    to: j,
    toHandle: null,
    toPosition: Ga[K.position],
    toNode: null
  };
  function oe() {
    E = !0, b(G), g?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  M === 0 && oe();
  function se(we) {
    if (!E) {
      const { x: pe, y: ge } = Wt(we), xe = pe - k, de = ge - N;
      if (!(xe * xe + de * de > M * M))
        return;
      oe();
    }
    if (!O() || !K) {
      J(we);
      return;
    }
    const ce = _();
    j = Wt(we, L), A = w0($o(j, ce, !1, [1, 1]), n, l, K), Z || (te(), Z = !0);
    const ee = Cc(we, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: C,
      doc: R,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    Q = ee.handleDomNode, V = ee.connection, W = b0(!!A, ee.isValid);
    const re = {
      // from stays the same
      ...G,
      isValid: W,
      to: ee.toHandle && W ? ai({ x: ee.toHandle.x, y: ee.toHandle.y }, ce) : j,
      toHandle: ee.toHandle,
      toPosition: W && ee.toHandle ? ee.toHandle.position : Ga[K.position],
      toNode: ee.toHandle ? l.get(ee.toHandle.nodeId) : null
    };
    W && A && G.toHandle && re.toHandle && G.toHandle.type === re.toHandle.type && G.toHandle.nodeId === re.toHandle.nodeId && G.toHandle.id === re.toHandle.id && G.to.x === re.to.x && G.to.y === re.to.y || (b(re), G = re);
  }
  function J(we) {
    if (!("touches" in we && we.touches.length > 0)) {
      if (E) {
        (A || Q) && V && W && y?.(V);
        const { inProgress: ce, ...ee } = G, re = {
          ...ee,
          toPosition: G.toHandle ? G.toPosition : null
        };
        w?.(we, re), i && $?.(we, re);
      }
      h(), cancelAnimationFrame(q), Z = !1, W = !1, V = null, Q = null, R.removeEventListener("mousemove", se), R.removeEventListener("mouseup", J), R.removeEventListener("touchmove", se), R.removeEventListener("touchend", J);
    }
  }
  R.addEventListener("mousemove", se), R.addEventListener("mouseup", J), R.addEventListener("touchmove", se), R.addEventListener("touchend", J);
}
function Cc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = xc, nodeLookup: d }) {
  const f = i === "target", p = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = Wt(e), y = s.elementFromPoint(h, g), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, C = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const $ = bc(void 0, w), b = w.getAttribute("data-nodeid"), _ = w.getAttribute("data-handleid"), O = w.classList.contains("connectable"), S = w.classList.contains("connectableend");
    if (!b || !$)
      return C;
    const M = {
      source: f ? b : r,
      sourceHandle: f ? _ : o,
      target: f ? r : b,
      targetHandle: f ? o : _
    };
    C.connection = M;
    const z = O && S && (n === Vr.Strict ? f && $ === "source" || !f && $ === "target" : b !== r || _ !== o);
    C.isValid = z && u(M), C.toHandle = wc(b, $, _, d, n, !0);
  }
  return C;
}
const ul = {
  onPointerDown: x0,
  isValid: Cc
};
function C0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = zt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: f = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const g = (b) => {
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = n(), O = b.sourceEvent.ctrlKey && Gn() ? 10 : 1, S = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = _[2] * Math.pow(2, S * O);
      t.scaleTo(M);
    };
    let y = [0, 0];
    const w = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (y = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, C = (b) => {
      const _ = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const O = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], S = [O[0] - y[0], O[1] - y[1]];
      y = O;
      const M = r() * Math.max(_[2], Math.log(_[2])) * (h ? -1 : 1), z = {
        x: _[0] - S[0] * M,
        y: _[1] - S[1] * M
      }, R = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: _[2]
      }, R, a);
    }, $ = nc().on("start", w).on("zoom", f ? C : null).on("zoom.wheel", p ? g : null);
    o.call($, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Kt
  };
}
const $0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Li = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Wi = ({ x: e, y: t, zoom: n }) => Ni.translate(e, t).scale(n), mr = (e, t) => e.target.closest(`.${t}`), $c = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), k0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Yi = (e, t = 0, n = k0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, kc = (e) => {
  const t = e.ctrlKey && Gn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function _0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (mr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = Kt(d), C = kc(d), $ = f * Math.pow(2, C);
      r.scaleTo(n, $, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === tr.Vertical ? 0 : d.deltaX * p, g = o === tr.Horizontal ? 0 : d.deltaY * p;
    !Gn() && d.shiftKey && o !== tr.Vertical && (h = d.deltaY * p, g = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(g / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Li(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      u?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function S0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = mr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function N0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Li(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function E0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && $c(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Li(i.transform));
  };
}
function P0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && $c(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && $0(e.prevViewport, s.transform))) {
      const a = Li(s.transform);
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
function L0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (f) => {
    const p = e || t, h = n && f.ctrlKey, g = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (mr(f, `${u}-flow__node`) || mr(f, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !g || mr(f, a) && g || mr(f, l) && (!g || o && g && !e) || !n && f.ctrlKey && g)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!p && !o && !h && g || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || g) && y;
  };
}
function O0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), p = nc().clickDistance(!gn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = zt(e).call(p);
  b({
    x: i.x,
    y: i.y,
    zoom: zr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const g = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  p.wheelDelta(kc);
  function w(k, N) {
    return h ? new Promise((x) => {
      p?.interpolate(N?.interpolate === "linear" ? Qr : Ro).transform(Yi(h, N?.duration, N?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: k, noPanClassName: N, onPaneContextMenu: x, userSelectionActive: L, panOnScroll: E, panOnDrag: H, panOnScrollMode: j, panOnScrollSpeed: Z, preventScrolling: V, zoomOnPinch: W, zoomOnScroll: Q, zoomOnDoubleClick: te, zoomActivationKeyPressed: K, lib: X, onTransformChange: G, connectionInProgress: oe }) {
    L && !d.isZoomingOrPanning && $();
    const se = E && !K && !L ? _0({
      zoomPanValues: d,
      noWheelClassName: k,
      d3Selection: h,
      d3Zoom: p,
      panOnScrollMode: j,
      panOnScrollSpeed: Z,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : S0({
      noWheelClassName: k,
      preventScrolling: V,
      d3ZoomHandler: g
    });
    if (h.on("wheel.zoom", se, { passive: !1 }), !L) {
      const we = N0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      p.on("start", we);
      const ce = E0({
        zoomPanValues: d,
        panOnDrag: H,
        onPaneContextMenu: !!x,
        onPanZoom: s,
        onTransformChange: G
      });
      p.on("zoom", ce);
      const ee = P0({
        zoomPanValues: d,
        panOnDrag: H,
        panOnScroll: E,
        onPaneContextMenu: x,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      p.on("end", ee);
    }
    const J = L0({
      zoomActivationKeyPressed: K,
      panOnDrag: H,
      zoomOnScroll: Q,
      panOnScroll: E,
      zoomOnDoubleClick: te,
      zoomOnPinch: W,
      userSelectionActive: L,
      noPanClassName: N,
      noWheelClassName: k,
      lib: X,
      connectionInProgress: oe
    });
    p.filter(J), te ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function $() {
    p.on("zoom", null);
  }
  async function b(k, N, x) {
    const L = Wi(k), E = p?.constrain()(L, N, x);
    return E && await w(E), new Promise((H) => H(E));
  }
  async function _(k, N) {
    const x = Wi(k);
    return await w(x, N), new Promise((L) => L(x));
  }
  function O(k) {
    if (h) {
      const N = Wi(k), x = h.property("__zoom");
      (x.k !== k.zoom || x.x !== k.x || x.y !== k.y) && p?.transform(h, N, null, { sync: !0 });
    }
  }
  function S() {
    const k = h ? tc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: k.x, y: k.y, zoom: k.k };
  }
  function M(k, N) {
    return h ? new Promise((x) => {
      p?.interpolate(N?.interpolate === "linear" ? Qr : Ro).scaleTo(Yi(h, N?.duration, N?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function z(k, N) {
    return h ? new Promise((x) => {
      p?.interpolate(N?.interpolate === "linear" ? Qr : Ro).scaleBy(Yi(h, N?.duration, N?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function R(k) {
    p?.scaleExtent(k);
  }
  function q(k) {
    p?.translateExtent(k);
  }
  function A(k) {
    const N = !gn(k) || k < 0 ? 0 : k;
    p?.clickDistance(N);
  }
  return {
    update: C,
    destroy: $,
    setViewport: _,
    setViewportConstrained: b,
    getViewport: S,
    scaleTo: M,
    scaleBy: z,
    setScaleExtent: R,
    setTranslateExtent: q,
    syncViewport: O,
    setClickDistance: A
  };
}
var cl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(cl || (cl = {}));
var T0 = /* @__PURE__ */ U("<div><!></div>");
function Dn(e, t) {
  le(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => ye.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), f = m(t, "onconnect", 7), p = m(t, "ondisconnect", 7), h = m(t, "children", 7), g = /* @__PURE__ */ He(t, [
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
  const y = zn("svelteflow__node_id"), w = zn("svelteflow__node_connectable");
  let C = /* @__PURE__ */ P(() => r() === "target"), $ = /* @__PURE__ */ P(() => a() !== void 0 ? a() : w.value), b = Qt(), _ = /* @__PURE__ */ P(() => b.ariaLabelConfig), O = null;
  ou(() => {
    if (f() || p()) {
      b.edges;
      let V = b.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (O && !Ov(V, O)) {
        const W = V ?? /* @__PURE__ */ new Map();
        Ua(O, W, p()), Ua(W, O, f());
      }
      O = new Map(V);
    }
  });
  let S = /* @__PURE__ */ P(() => {
    if (!b.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: V, toHandle: W, isValid: Q } = b.connection, te = V && V.nodeId === y && V.type === r() && V.id === n(), K = W && W.nodeId === y && W.type === r() && W.id === n(), X = b.connectionMode === Vr.Strict ? V?.type !== r() : y !== V?.nodeId || n() !== V?.id;
    return [
      !0,
      te,
      K,
      X,
      K && Q
    ];
  }), M = /* @__PURE__ */ P(() => fo(c(S), 5)), z = /* @__PURE__ */ P(() => c(M)[0]), R = /* @__PURE__ */ P(() => c(M)[1]), q = /* @__PURE__ */ P(() => c(M)[2]), A = /* @__PURE__ */ P(() => c(M)[3]), k = /* @__PURE__ */ P(() => c(M)[4]);
  function N(V) {
    const W = b.onbeforeconnect ? b.onbeforeconnect(V) : V;
    W && (b.addEdge(W), b.onconnect?.(V));
  }
  function x(V) {
    const W = fc(V);
    V.currentTarget && (W && V.button === 0 || !W) && ul.onPointerDown(V, {
      handleId: n(),
      nodeId: y,
      isTarget: c(C),
      connectionRadius: b.connectionRadius,
      domNode: b.domNode,
      nodeLookup: b.nodeLookup,
      connectionMode: b.connectionMode,
      lib: "svelte",
      autoPanOnConnect: b.autoPanOnConnect,
      autoPanSpeed: b.autoPanSpeed,
      flowId: b.flowId,
      isValidConnection: d() ?? b.isValidConnection,
      updateConnection: b.updateConnection,
      cancelConnection: b.cancelConnection,
      panBy: b.panBy,
      onConnect: N,
      onConnectStart: (Q, te) => {
        b.onconnectstart?.(Q, {
          nodeId: te.nodeId,
          handleId: te.handleId,
          handleType: te.handleType
        });
      },
      onConnectEnd: (Q, te) => {
        b.onconnectend?.(Q, te);
      },
      getTransform: () => [b.viewport.x, b.viewport.y, b.viewport.zoom],
      getFromHandle: () => b.connection.fromHandle,
      dragThreshold: b.connectionDragThreshold,
      handleDomNode: V.currentTarget
    });
  }
  function L(V) {
    if (!y || !b.clickConnectStartHandle && !l())
      return;
    if (!b.clickConnectStartHandle) {
      b.onclickconnectstart?.(V, { nodeId: y, handleId: n(), handleType: r() }), b.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const W = dc(V.target), Q = d() ?? b.isValidConnection, { connectionMode: te, clickConnectStartHandle: K, flowId: X, nodeLookup: G } = b, { connection: oe, isValid: se } = ul.isValid(V, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: te,
      fromNodeId: K.nodeId,
      fromHandleId: K.id ?? null,
      fromType: K.type,
      isValidConnection: Q,
      flowId: X,
      doc: W,
      lib: "svelte",
      nodeLookup: G
    });
    se && oe && N(oe);
    const J = structuredClone(Dl(b.connection));
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, b.onclickconnectend?.(V, J), b.clickConnectStartHandle = null;
  }
  var E = {
    get id() {
      return n();
    },
    set id(V = null) {
      n(V), v();
    },
    get type() {
      return r();
    },
    set type(V = "source") {
      r(V), v();
    },
    get position() {
      return o();
    },
    set position(V = ye.Top) {
      o(V), v();
    },
    get style() {
      return i();
    },
    set style(V) {
      i(V), v();
    },
    get class() {
      return s();
    },
    set class(V) {
      s(V), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(V) {
      a(V), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(V = !0) {
      l(V), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(V = !0) {
      u(V), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(V) {
      d(V), v();
    },
    get onconnect() {
      return f();
    },
    set onconnect(V) {
      f(V), v();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(V) {
      p(V), v();
    },
    get children() {
      return h();
    },
    set children(V) {
      h(V), v();
    }
  }, H = T0(), j = () => {
  };
  et(
    H,
    (V) => ({
      "data-handleid": n(),
      "data-nodeid": y,
      "data-handlepos": o(),
      "data-id": `${b.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        b.noDragClass,
        b.noPanClass,
        o(),
        s()
      ],
      onmousedown: x,
      ontouchstart: x,
      onclick: b.clickConnect ? L : void 0,
      onkeypress: j,
      style: i(),
      role: "button",
      "aria-label": c(_)["handle.ariaLabel"],
      tabindex: "-1",
      ...g,
      [En]: V
    }),
    [
      () => ({
        valid: c(k),
        connectingto: c(q),
        connectingfrom: c(R),
        source: !c(C),
        target: c(C),
        connectablestart: l(),
        connectableend: u(),
        connectable: c($),
        connectionindicator: c($) && (!c(z) || c(A)) && (c(z) || b.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var Z = B(H);
  return qe(Z, () => h() ?? ct), I(H), T(e, H), ue(E);
}
ie(
  Dn,
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
var M0 = /* @__PURE__ */ U("<!> <!>", 1);
function oa(e, t) {
  le(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => ye.Top), o = m(t, "sourcePosition", 23, () => ye.Bottom);
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
  }, s = M0(), a = ne(s);
  Dn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = D(a), u = D(l);
  return Dn(u, {
    type: "source",
    get position() {
      return o();
    }
  }), $e(() => je(l, ` ${n()?.label ?? ""} `)), T(e, s), ue(i);
}
ie(oa, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var V0 = /* @__PURE__ */ U(" <!>", 1);
function _c(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => ye.Bottom);
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
  ve();
  var i = V0(), s = ne(i), a = D(s);
  return Dn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), $e(() => je(s, `${n()?.label ?? ""} `)), T(e, i), ue(o);
}
ie(_c, { data: {}, sourcePosition: {} }, [], [], !0);
var z0 = /* @__PURE__ */ U(" <!>", 1);
function Sc(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => ye.Top);
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
  ve();
  var i = z0(), s = ne(i), a = D(s);
  return Dn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), $e(() => je(s, `${n()?.label ?? ""} `)), T(e, i), ue(o);
}
ie(Sc, { data: {}, targetPosition: {} }, [], [], !0);
function Nc(e, t) {
}
ie(Nc, {}, [], [], !0);
function qi(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Ec(e, t) {
  const n = /* @__PURE__ */ P(Qt), r = /* @__PURE__ */ P(() => c(n).domNode);
  let o;
  return c(r) ? qi(e, c(r), t) : o = Ds(() => {
    Ye(() => {
      qi(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      qi(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Pc() {
  let e = /* @__PURE__ */ Ee(typeof window > "u");
  if (c(e)) {
    const t = Ds(() => {
      Ye(() => {
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
const dl = (e) => Mv(e), H0 = (e) => oc(e);
function un(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const li = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var D0 = /* @__PURE__ */ U("<div><!></div>");
const A0 = {
  hash: "svelte-yagk5c",
  code: ".transparent.svelte-yagk5c {background:transparent;}"
};
function Lc(e, t) {
  le(t, !0), Me(e, A0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ He(t, [
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
  const f = Qt(), p = zn("svelteflow__edge_id");
  let h = /* @__PURE__ */ P(() => f.visible.edges.get(p)?.zIndex);
  var g = {
    get x() {
      return n();
    },
    set x($ = 0) {
      n($), v();
    },
    get y() {
      return r();
    },
    set y($ = 0) {
      r($), v();
    },
    get width() {
      return o();
    },
    set width($) {
      o($), v();
    },
    get height() {
      return i();
    },
    set height($) {
      i($), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick($ = !1) {
      s($), v();
    },
    get transparent() {
      return a();
    },
    set transparent($ = !1) {
      a($), v();
    },
    get class() {
      return l();
    },
    set class($) {
      l($), v();
    },
    get children() {
      return u();
    },
    set children($) {
      u($), v();
    }
  }, y = D0(), w = () => {
    s() && p && f.handleEdgeSelection(p);
  };
  et(
    y,
    ($) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [rn]: $
    }),
    [
      () => ({
        display: Pc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: un(o()),
        height: un(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    "svelte-yagk5c"
  );
  var C = B(y);
  return qe(C, () => u() ?? ct), I(y), ft(y, ($, b) => Ec?.($, b), () => "edge-labels"), T(e, y), ue(g);
}
ie(
  Lc,
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
var I0 = /* @__PURE__ */ fe("<path></path>"), j0 = /* @__PURE__ */ fe('<path fill="none"></path><!><!>', 1);
function ko(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), f = m(t, "interactionWidth", 7, 20), p = m(t, "class", 7), h = /* @__PURE__ */ He(t, [
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
  var g = {
    get id() {
      return n();
    },
    set id(O) {
      n(O), v();
    },
    get path() {
      return r();
    },
    set path(O) {
      r(O), v();
    },
    get label() {
      return o();
    },
    set label(O) {
      o(O), v();
    },
    get labelX() {
      return i();
    },
    set labelX(O) {
      i(O), v();
    },
    get labelY() {
      return s();
    },
    set labelY(O) {
      s(O), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(O) {
      a(O), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(O) {
      l(O), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(O) {
      u(O), v();
    },
    get style() {
      return d();
    },
    set style(O) {
      d(O), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(O = 20) {
      f(O), v();
    },
    get class() {
      return p();
    },
    set class(O) {
      p(O), v();
    }
  }, y = j0(), w = ne(y), C = D(w);
  {
    var $ = (O) => {
      var S = I0();
      et(S, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), T(O, S);
    };
    ae(C, (O) => {
      f() > 0 && O($);
    });
  }
  var b = D(C);
  {
    var _ = (O) => {
      Lc(O, {
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
        children: (S, M) => {
          ve();
          var z = ke();
          $e(() => je(z, o())), T(S, z);
        },
        $$slots: { default: !0 }
      });
    };
    ae(b, (O) => {
      o() && O(_);
    });
  }
  return $e(() => {
    be(w, "id", n()), be(w, "d", r()), Nt(w, 0, Cn(["svelte-flow__edge-path", p()])), be(w, "marker-start", l()), be(w, "marker-end", u()), dt(w, d());
  }), T(e, y), ue(g);
}
ie(
  ko,
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
function ia(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), f = m(t, "sourceY", 7), p = m(t, "style", 7), h = m(t, "targetPosition", 7), g = m(t, "targetX", 7), y = m(t, "targetY", 7), w = /* @__PURE__ */ P(() => hc({
    sourceX: d(),
    sourceY: f(),
    targetX: g(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), C = /* @__PURE__ */ P(() => fo(c(w), 3)), $ = /* @__PURE__ */ P(() => c(C)[0]), b = /* @__PURE__ */ P(() => c(C)[1]), _ = /* @__PURE__ */ P(() => c(C)[2]);
  var O = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(S) {
      r(S), v();
    },
    get label() {
      return o();
    },
    set label(S) {
      o(S), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(S) {
      i(S), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(S) {
      s(S), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(S) {
      a(S), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(S) {
      l(S), v();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(S) {
      u(S), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(S) {
      d(S), v();
    },
    get sourceY() {
      return f();
    },
    set sourceY(S) {
      f(S), v();
    },
    get style() {
      return p();
    },
    set style(S) {
      p(S), v();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(S) {
      h(S), v();
    },
    get targetX() {
      return g();
    },
    set targetX(S) {
      g(S), v();
    },
    get targetY() {
      return y();
    },
    set targetY(S) {
      y(S), v();
    }
  };
  return ko(e, {
    get id() {
      return n();
    },
    get path() {
      return c($);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(_);
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
  }), ue(O);
}
ie(
  ia,
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
function Oc(e, t) {
  le(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), f = m(t, "targetPosition", 7), p = m(t, "targetX", 7), h = m(t, "targetY", 7), g = /* @__PURE__ */ P(() => ea({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: f()
  })), y = /* @__PURE__ */ P(() => fo(c(g), 3)), w = /* @__PURE__ */ P(() => c(y)[0]), C = /* @__PURE__ */ P(() => c(y)[1]), $ = /* @__PURE__ */ P(() => c(y)[2]);
  var b = {
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
      return u();
    },
    set sourceX(_) {
      u(_), v();
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
      return p();
    },
    set targetX(_) {
      p(_), v();
    },
    get targetY() {
      return h();
    },
    set targetY(_) {
      h(_), v();
    }
  };
  return ko(e, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(C);
    },
    get labelY() {
      return c($);
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
ie(
  Oc,
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
function Tc(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), f = m(t, "style", 7), p = /* @__PURE__ */ P(() => vc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ P(() => fo(c(p), 3)), g = /* @__PURE__ */ P(() => c(h)[0]), y = /* @__PURE__ */ P(() => c(h)[1]), w = /* @__PURE__ */ P(() => c(h)[2]);
  var C = {
    get sourceX() {
      return n();
    },
    set sourceX($) {
      n($), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY($) {
      r($), v();
    },
    get targetX() {
      return o();
    },
    set targetX($) {
      o($), v();
    },
    get targetY() {
      return i();
    },
    set targetY($) {
      i($), v();
    },
    get label() {
      return s();
    },
    set label($) {
      s($), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle($) {
      a($), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart($) {
      l($), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd($) {
      u($), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth($) {
      d($), v();
    },
    get style() {
      return f();
    },
    set style($) {
      f($), v();
    }
  };
  return ko(e, {
    get path() {
      return c(g);
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
      return f();
    }
  }), ue(C);
}
ie(
  Tc,
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
function Mc(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), f = m(t, "markerEnd", 7), p = m(t, "interactionWidth", 7), h = m(t, "style", 7), g = /* @__PURE__ */ P(() => ea({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ P(() => fo(c(g), 3)), w = /* @__PURE__ */ P(() => c(y)[0]), C = /* @__PURE__ */ P(() => c(y)[1]), $ = /* @__PURE__ */ P(() => c(y)[2]);
  var b = {
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
      return u();
    },
    set labelStyle(_) {
      u(_), v();
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
      return p();
    },
    set interactionWidth(_) {
      p(_), v();
    },
    get style() {
      return h();
    },
    set style(_) {
      h(_), v();
    }
  };
  return ko(e, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(C);
    },
    get labelY() {
      return c($);
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
      return f();
    },
    get interactionWidth() {
      return p();
    },
    get style() {
      return h();
    }
  }), ue(b);
}
ie(
  Mc,
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
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = Zl(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const K0 = /\(.+\)/, R0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Z0 extends B0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = K0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => R0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => rs(o, "change", i)
    );
  }
}
function W0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Qs(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function pl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), p = r.get(d.target);
    if (!f || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: C, height: $ } = e;
      if (qv({
        sourceNode: f,
        targetNode: p,
        width: C,
        height: $,
        transform: w
      }))
        y.set(f.id, f), y.set(p.id, p);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && f == h.sourceNode && p == h.targetNode) {
      u.set(d.id, h);
      continue;
    }
    const g = e0({
      id: d.id,
      sourceNode: f,
      targetNode: p,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    g && u.set(d.id, {
      ...n,
      ...d,
      ...g,
      zIndex: Yv({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: p,
        elevateOnSelect: l
      }),
      sourceNode: f,
      targetNode: p,
      edge: d
    });
  }
  return u;
}
const Vc = {
  input: _c,
  output: Sc,
  default: oa,
  group: Nc
}, zc = {
  straight: Tc,
  smoothstep: Oc,
  default: ia,
  step: Mc
};
function Y0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = xo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Js(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function q0(e) {
  class t {
    #t = /* @__PURE__ */ P(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      F(this.#t, r);
    }
    #e = /* @__PURE__ */ Ee(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      F(this.#e, r);
    }
    #a = /* @__PURE__ */ Ee(null);
    get panZoom() {
      return c(this.#a);
    }
    set panZoom(r) {
      F(this.#a, r);
    }
    #i = /* @__PURE__ */ Ee(e.width ?? 0);
    get width() {
      return c(this.#i);
    }
    set width(r) {
      F(this.#i, r);
    }
    #d = /* @__PURE__ */ Ee(e.height ?? 0);
    get height() {
      return c(this.#d);
    }
    set height(r) {
      F(this.#d, r);
    }
    #s = /* @__PURE__ */ P(() => {
      const r = s0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return c(this.#s);
    }
    set nodesInitialized(r) {
      F(this.#s, r);
    }
    #r = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#r);
    }
    set viewportInitialized(r) {
      F(this.#r, r);
    }
    #n = /* @__PURE__ */ P(() => (p0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#n);
    }
    set _edges(r) {
      F(this.#n, r);
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
    #o = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#o);
    }
    set selectedNodes(r) {
      F(this.#o, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ P(() => {
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
    #p = /* @__PURE__ */ P(() => {
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
      let f, p;
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
        const { viewport: g, width: y, height: w } = this, C = [g.x, g.y, g.zoom];
        f = W0(s, C, y, w), p = pl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: C,
          width: y,
          height: w
        });
      } else
        f = this.nodeLookup, p = pl(h);
      return { nodes: f, edges: p };
    });
    get visible() {
      return c(this.#p);
    }
    set visible(r) {
      F(this.#p, r);
    }
    #c = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#c);
    }
    set nodesDraggable(r) {
      F(this.#c, r);
    }
    #f = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      F(this.#f, r);
    }
    #u = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#u);
    }
    set elementsSelectable(r) {
      F(this.#u, r);
    }
    #h = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#h);
    }
    set nodesFocusable(r) {
      F(this.#h, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      F(this.#y, r);
    }
    #w = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#w);
    }
    set disableKeyboardA11y(r) {
      F(this.#w, r);
    }
    #b = /* @__PURE__ */ P(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#b);
    }
    set minZoom(r) {
      F(this.#b, r);
    }
    #g = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#g);
    }
    set maxZoom(r) {
      F(this.#g, r);
    }
    #v = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#v);
    }
    set nodeOrigin(r) {
      F(this.#v, r);
    }
    #m = /* @__PURE__ */ P(() => e.props.nodeExtent ?? fs);
    get nodeExtent() {
      return c(this.#m);
    }
    set nodeExtent(r) {
      F(this.#m, r);
    }
    #x = /* @__PURE__ */ P(() => e.props.translateExtent ?? fs);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      F(this.#x, r);
    }
    #C = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      F(this.#C, r);
    }
    #$ = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#$);
    }
    set nodeDragThreshold(r) {
      F(this.#$, r);
    }
    #k = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      F(this.#k, r);
    }
    #_ = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      F(this.#_, r);
    }
    #S = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      F(this.#S, r);
    }
    #N = /* @__PURE__ */ P(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#N);
    }
    set autoPanSpeed(r) {
      F(this.#N, r);
    }
    #E = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      F(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      F(this.#P, r);
    }
    #L = /* @__PURE__ */ Ee(!1);
    get dragging() {
      return c(this.#L);
    }
    set dragging(r) {
      F(this.#L, r);
    }
    #O = /* @__PURE__ */ Ee(null);
    get selectionRect() {
      return c(this.#O);
    }
    set selectionRect(r) {
      F(this.#O, r);
    }
    #T = /* @__PURE__ */ Ee(!1);
    get selectionKeyPressed() {
      return c(this.#T);
    }
    set selectionKeyPressed(r) {
      F(this.#T, r);
    }
    #M = /* @__PURE__ */ Ee(!1);
    get multiselectionKeyPressed() {
      return c(this.#M);
    }
    set multiselectionKeyPressed(r) {
      F(this.#M, r);
    }
    #V = /* @__PURE__ */ Ee(!1);
    get deleteKeyPressed() {
      return c(this.#V);
    }
    set deleteKeyPressed(r) {
      F(this.#V, r);
    }
    #z = /* @__PURE__ */ Ee(!1);
    get panActivationKeyPressed() {
      return c(this.#z);
    }
    set panActivationKeyPressed(r) {
      F(this.#z, r);
    }
    #H = /* @__PURE__ */ Ee(!1);
    get zoomActivationKeyPressed() {
      return c(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      F(this.#H, r);
    }
    #D = /* @__PURE__ */ Ee(null);
    get selectionRectMode() {
      return c(this.#D);
    }
    set selectionRectMode(r) {
      F(this.#D, r);
    }
    #A = /* @__PURE__ */ Ee("");
    get ariaLiveMessage() {
      return c(this.#A);
    }
    set ariaLiveMessage(r) {
      F(this.#A, r);
    }
    #I = /* @__PURE__ */ P(() => e.props.selectionMode ?? ii.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      F(this.#I, r);
    }
    #j = /* @__PURE__ */ P(() => ({ ...Vc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#j);
    }
    set nodeTypes(r) {
      F(this.#j, r);
    }
    #B = /* @__PURE__ */ P(() => ({ ...zc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#B);
    }
    set edgeTypes(r) {
      F(this.#B, r);
    }
    #K = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#K);
    }
    set noPanClass(r) {
      F(this.#K, r);
    }
    #R = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#R);
    }
    set noDragClass(r) {
      F(this.#R, r);
    }
    #Z = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#Z);
    }
    set noWheelClass(r) {
      F(this.#Z, r);
    }
    #W = /* @__PURE__ */ P(() => Rv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      F(this.#W, r);
    }
    #Y = /* @__PURE__ */ Ee(Y0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#Y);
    }
    set _viewport(r) {
      F(this.#Y, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #q = /* @__PURE__ */ Ee(
      // _connection is viewport independent and originating from XYHandle
      hs
    );
    get _connection() {
      return c(this.#q);
    }
    set _connection(r) {
      F(this.#q, r);
    }
    #F = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: $o(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#F);
    }
    set connection(r) {
      F(this.#F, r);
    }
    #X = /* @__PURE__ */ P(() => e.props.connectionMode ?? Vr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      F(this.#X, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      F(this.#G, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      F(this.#U, r);
    }
    #Q = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#Q);
    }
    set selectNodesOnDrag(r) {
      F(this.#Q, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      F(this.#J, r);
    }
    #ee = /* @__PURE__ */ P(() => t0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      F(this.#ee, r);
    }
    #te = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      F(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => e.props.onflowerror ?? Iv);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      F(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      F(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      F(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      F(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      F(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      F(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      F(this.#le, r);
    }
    #ue = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      F(this.#ue, r);
    }
    #ce = /* @__PURE__ */ P(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      F(this.#ce, r);
    }
    #de = /* @__PURE__ */ P(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      F(this.#de, r);
    }
    #pe = /* @__PURE__ */ P(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#pe);
    }
    set onreconnectend(r) {
      F(this.#pe, r);
    }
    #fe = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      F(this.#fe, r);
    }
    #he = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      F(this.#he, r);
    }
    #ge = /* @__PURE__ */ P(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      F(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Ee(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      F(this.#ve, r);
    }
    #me = /* @__PURE__ */ P(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      F(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      F(this.#ye, r);
    }
    #we = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      F(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Dv(
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
    _prefersDark = new Z0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      F(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = hs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Qt() {
  const e = zn(ui);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const ui = Symbol();
function Hc(e) {
  const t = q0(e);
  function n(A) {
    t.nodeTypes = {
      ...Vc,
      ...A
    };
  }
  function r(A) {
    t.edgeTypes = {
      ...zc,
      ...A
    };
  }
  function o(A) {
    t.edges = Gv(A, t.edges);
  }
  const i = (A, k = !1) => {
    t.nodes = t.nodes.map((N) => {
      const x = A.get(N.id);
      return x ? { ...N, position: x.position, dragging: k } : N;
    });
  };
  function s(A) {
    const { changes: k, updatedInternals: N } = c0(A, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!N)
      return;
    o0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const x = /* @__PURE__ */ new Map();
    for (const L of k) {
      const E = t.nodeLookup.get(L.id)?.internals.userNode;
      if (!E)
        continue;
      const H = { ...E };
      switch (L.type) {
        case "dimensions": {
          const j = { ...H.measured, ...L.dimensions };
          L.setAttributes && (H.width = L.dimensions?.width ?? H.width, H.height = L.dimensions?.height ?? H.height), H.measured = j;
          break;
        }
        case "position":
          H.position = L.position ?? H.position;
          break;
      }
      x.set(L.id, H);
    }
    t.nodes = t.nodes.map((L) => x.get(L.id) ?? L);
  }
  function a(A) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = A, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(A, k, N) {
    const x = typeof N?.zoom < "u" ? N.zoom : t.maxZoom, L = t.panZoom;
    return L ? (await L.setViewport({
      x: t.width / 2 - A * x,
      y: t.height / 2 - k * x,
      zoom: x
    }, { duration: N?.duration, ease: N?.ease, interpolate: N?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(A, k) {
    const N = t.panZoom;
    return N ? N.scaleBy(A, k) : Promise.resolve(!1);
  }
  function d(A) {
    return u(1.2, A);
  }
  function f(A) {
    return u(1 / 1.2, A);
  }
  function p(A) {
    const k = t.panZoom;
    k && (k.setScaleExtent([A, t.maxZoom]), t.minZoom = A);
  }
  function h(A) {
    const k = t.panZoom;
    k && (k.setScaleExtent([t.minZoom, A]), t.maxZoom = A);
  }
  function g(A) {
    const k = t.panZoom;
    k && (k.setTranslateExtent(A), t.translateExtent = A);
  }
  function y(A) {
    t.panZoom?.setClickDistance(A);
  }
  function w(A, k = null) {
    let N = !1;
    const x = A.map((L) => (!k || k.has(L.id)) && L.selected ? (N = !0, { ...L, selected: !1 }) : L);
    return [N, x];
  }
  function C(A) {
    const k = A?.nodes ? new Set(A.nodes.map((j) => j.id)) : null, [N, x] = w(t.nodes, k);
    N && (t.nodes = x);
    const L = A?.edges ? new Set(A.edges.map((j) => j.id)) : null, [E, H] = w(t.edges, L);
    E && (t.edges = H);
  }
  function $(A) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((N) => {
      const x = A.includes(N.id), L = k && N.selected || x;
      if (N.selected !== L) {
        const E = t.nodeLookup.get(N.id);
        return E && (E.selected = L), N.selected = L, { ...N };
      }
      return N;
    }), k || C({ nodes: [] });
  }
  function b(A) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((N) => {
      const x = A.includes(N.id), L = k && N.selected || x;
      return N.selected !== L ? { ...N, selected: L } : N;
    }), k || C({ edges: [] });
  }
  function _(A, k, N) {
    const x = t.nodeLookup.get(A);
    if (!x) {
      console.warn("012", oo.error012(A));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, x.selected ? (k || x.selected && t.multiselectionKeyPressed) && (C({ nodes: [x], edges: [] }), requestAnimationFrame(() => N?.blur())) : $([A]);
  }
  function O(A) {
    const k = t.edgeLookup.get(A);
    if (!k) {
      console.warn("012", oo.error012(A));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && C({ nodes: [], edges: [k] }) : b([A]));
  }
  function S(A, k) {
    const { nodeExtent: N, snapGrid: x, nodeOrigin: L, nodeLookup: E, nodesDraggable: H, onerror: j } = t, Z = /* @__PURE__ */ new Map(), V = x?.[0] ?? 5, W = x?.[1] ?? 5, Q = A.x * V * k, te = A.y * W * k;
    for (const K of E.values()) {
      if (!(K.selected && (K.draggable || H && typeof K.draggable > "u")))
        continue;
      let X = {
        x: K.internals.positionAbsolute.x + Q,
        y: K.internals.positionAbsolute.y + te
      };
      x && (X = Co(X, x));
      const { position: G, positionAbsolute: oe } = ic({
        nodeId: K.id,
        nextPosition: X,
        nodeLookup: E,
        nodeExtent: N,
        nodeOrigin: L,
        onError: j
      });
      K.position = G, K.internals.positionAbsolute = oe, Z.set(K.id, K);
    }
    i(Z);
  }
  function M(A) {
    return d0({
      delta: A,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const z = (A) => {
    t._connection = { ...A };
  };
  function R() {
    t._connection = hs;
  }
  function q() {
    t.resetStoreValues(), C();
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
    setMinZoom: p,
    setMaxZoom: h,
    setTranslateExtent: g,
    setPaneClickDistance: y,
    unselectNodesAndEdges: C,
    addSelectedNodes: $,
    addSelectedEdges: b,
    handleNodeSelection: _,
    handleEdgeSelection: O,
    moveSelectedNodes: S,
    panBy: M,
    updateConnection: z,
    cancelConnection: R,
    reset: q
  });
}
function F0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: f, onTransformChange: p } = t, h = O0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: u,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: f
  }), g = h.getViewport();
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && p([g.x, g.y, g.zoom]), d(h), h.update(t), {
    update(y) {
      h.update(y);
    }
  };
}
var X0 = /* @__PURE__ */ U('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Dc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 7), o = m(t, "preventScrolling", 7), i = m(t, "zoomOnScroll", 7), s = m(t, "zoomOnDoubleClick", 7), a = m(t, "zoomOnPinch", 7), l = m(t, "panOnDrag", 7), u = m(t, "panOnScroll", 7), d = m(t, "panOnScrollSpeed", 7), f = m(t, "paneClickDistance", 7), p = m(t, "onmovestart", 7), h = m(t, "onmove", 7), g = m(t, "onmoveend", 7), y = m(t, "oninit", 7), w = m(t, "children", 7), C = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), $ = /* @__PURE__ */ P(() => n().panActivationKeyPressed || u());
  const { viewport: b } = n();
  let _ = !1;
  Ye(() => {
    !_ && n().viewportInitialized && (y()?.(), _ = !0);
  });
  var O = {
    get store() {
      return n();
    },
    set store(z) {
      n(z), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(z) {
      r(z), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(z) {
      o(z), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(z) {
      i(z), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(z) {
      s(z), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(z) {
      a(z), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(z) {
      l(z), v();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(z) {
      u(z), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(z) {
      d(z), v();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(z) {
      f(z), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(z) {
      p(z), v();
    },
    get onmove() {
      return h();
    },
    set onmove(z) {
      h(z), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(z) {
      g(z), v();
    },
    get oninit() {
      return y();
    },
    set oninit(z) {
      y(z), v();
    },
    get children() {
      return w();
    },
    set children(z) {
      w(z), v();
    }
  }, S = X0(), M = B(S);
  return qe(M, w), I(S), ft(S, (z, R) => F0?.(z, R), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: b,
    onDraggingChange: (z) => {
      n(n().dragging = z, !0);
    },
    setPanZoomInstance: (z) => {
      n(n().panZoom = z, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: h(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c($),
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
    paneClickDistance: f(),
    onTransformChange: (z) => {
      n(n().viewport = { x: z[0], y: z[1], zoom: z[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), T(e, S), ue(O);
}
ie(
  Dc,
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
function hl(e) {
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
var G0 = /* @__PURE__ */ U("<div><!></div>");
function Ac(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, f = null, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ P(() => n().selectionKeyPressed || n().selectionRect || o() && c(g) !== !0), w = /* @__PURE__ */ P(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), C = !1;
  function $(N) {
    if (C || n().connection.inProgress) {
      C = !1;
      return;
    }
    i()?.({ event: N }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function b(N) {
    if (f = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || N.button !== 0 || N.target !== d || !f)
      return;
    N.target?.setPointerCapture?.(N.pointerId);
    const { x, y: L } = Wt(N, f);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: x, startY: L, x, y: L }, !0), a()?.(N);
  }
  function _(N) {
    if (!c(y) || !f || !n().selectionRect)
      return;
    C = !0;
    const x = Wt(N, f), { startX: L = 0, startY: E = 0 } = n().selectionRect, H = {
      ...n().selectionRect,
      x: x.x < L ? x.x : L,
      y: x.y < E ? x.y : E,
      width: Math.abs(x.x - L),
      height: Math.abs(x.y - E)
    }, j = p, Z = h;
    p = new Set(Qs(
      n().nodeLookup,
      H,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === ii.Partial,
      !0
    ).map((W) => W.id));
    const V = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const W of p) {
      const Q = n().connectionLookup.get(W);
      if (Q)
        for (const { edgeId: te } of Q.values()) {
          const K = n().edgeLookup.get(te);
          K && (K.selectable ?? V) && h.add(te);
        }
    }
    gl(j, p) || n(n().nodes = n().nodes.map(hl(p)), !0), gl(Z, h) || n(n().edges = n().edges.map(hl(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = H, !0);
  }
  function O(N) {
    N.button === 0 && (N.target?.releasePointerCapture?.(N.pointerId), !c(y) && n().selectionRectMode === "user" && N.target === d && $?.(N), n(n().selectionRect = null, !0), p.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (C = !1), l()?.(N));
  }
  const S = (N) => {
    if (Array.isArray(c(g)) && c(g).includes(2)) {
      N.preventDefault();
      return;
    }
    s()?.({ event: N });
  };
  var M = {
    get store() {
      return n();
    },
    set store(N) {
      n(N), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(N = !0) {
      r(N), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(N) {
      o(N), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(N) {
      i(N), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(N) {
      s(N), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(N) {
      a(N), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(N) {
      l(N), v();
    },
    get children() {
      return u();
    },
    set children(N) {
      u(N), v();
    }
  }, z = G0();
  let R;
  var q = /* @__PURE__ */ P(() => c(w) ? void 0 : fl($, d));
  z.__click = function(...N) {
    c(q)?.apply(this, N);
  }, z.__pointerdown = function(...N) {
    (c(w) ? b : void 0)?.apply(this, N);
  }, z.__pointermove = function(...N) {
    (c(w) ? _ : void 0)?.apply(this, N);
  }, z.__pointerup = function(...N) {
    (c(w) ? O : void 0)?.apply(this, N);
  };
  var A = /* @__PURE__ */ P(() => fl(S, d));
  z.__contextmenu = function(...N) {
    c(A)?.apply(this, N);
  };
  var k = B(z);
  return qe(k, u), I(z), Tt(z, (N) => d = N, () => d), $e((N) => R = Nt(z, 1, "svelte-flow__pane svelte-flow__container", null, R, N), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), T(e, z), ue(M);
}
Rn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
ie(
  Ac,
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
var U0 = /* @__PURE__ */ U('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Ic(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
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
  }, i = U0();
  let s;
  var a = B(i);
  return qe(a, r), I(i), $e((l) => s = dt(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), T(e, i), ue(o);
}
ie(Ic, { store: {}, children: {} }, [], [], !0);
function jc(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = v0({
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
var Q0 = /* @__PURE__ */ U('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-h8i2bw"> </div>'), J0 = /* @__PURE__ */ U('<div class="a11y-hidden svelte-h8i2bw"> </div> <div class="a11y-hidden svelte-h8i2bw"> </div> <!>', 1);
const em = {
  hash: "svelte-h8i2bw",
  code: ".a11y-hidden.svelte-h8i2bw {display:none;}.a11y-live-msg.svelte-h8i2bw {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Bc(e, t) {
  le(t, !0), Me(e, em);
  let n = m(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    }
  }, o = J0(), i = ne(o), s = B(i, !0);
  I(i);
  var a = D(i, 2), l = B(a, !0);
  I(a);
  var u = D(a, 2);
  {
    var d = (f) => {
      var p = Q0(), h = B(p, !0);
      I(p), $e(() => {
        be(p, "id", `${tm}-${n().flowId}`), je(h, n().ariaLiveMessage);
      }), T(f, p);
    };
    ae(u, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return $e(() => {
    be(i, "id", `${Kc}-${n().flowId}`), je(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), be(a, "id", `${Rc}-${n().flowId}`), je(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), T(e, o), ue(r);
}
ie(Bc, { store: {} }, [], [], !0);
const Kc = "svelte-flow__node-desc", Rc = "svelte-flow__edge-desc", tm = "svelte-flow__aria-live";
var nm = /* @__PURE__ */ U("<div><!></div>");
function Zc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), f = m(t, "onnodepointerleave", 7), p = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), g = /* @__PURE__ */ P(() => mt(r().data, () => ({}), !0)), y = /* @__PURE__ */ P(() => mt(r().selected, !1)), w = /* @__PURE__ */ P(() => r().draggable), C = /* @__PURE__ */ P(() => r().selectable), $ = /* @__PURE__ */ P(() => mt(r().deletable, !0)), b = /* @__PURE__ */ P(() => r().connectable), _ = /* @__PURE__ */ P(() => r().focusable), O = /* @__PURE__ */ P(() => mt(r().hidden, !1)), S = /* @__PURE__ */ P(() => mt(r().dragging, !1)), M = /* @__PURE__ */ P(() => mt(r().style, "")), z = /* @__PURE__ */ P(() => r().class), R = /* @__PURE__ */ P(() => mt(r().type, "default")), q = /* @__PURE__ */ P(() => r().parentId), A = /* @__PURE__ */ P(() => r().sourcePosition), k = /* @__PURE__ */ P(() => r().targetPosition), N = /* @__PURE__ */ P(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ P(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).height), L = /* @__PURE__ */ P(() => r().initialWidth), E = /* @__PURE__ */ P(() => r().initialHeight), H = /* @__PURE__ */ P(() => r().width), j = /* @__PURE__ */ P(() => r().height), Z = /* @__PURE__ */ P(() => r().dragHandle), V = /* @__PURE__ */ P(() => mt(r().internals.z, 0)), W = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), Q = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), te = /* @__PURE__ */ P(() => r().internals.userNode), { id: K } = r(), X = /* @__PURE__ */ P(() => c(w) ?? n().nodesDraggable), G = /* @__PURE__ */ P(() => c(C) ?? n().elementsSelectable), oe = /* @__PURE__ */ P(() => c(b) ?? n().nodesConnectable), se = /* @__PURE__ */ P(() => uc(r())), J = /* @__PURE__ */ P(() => !!r().internals.handleBounds), we = /* @__PURE__ */ P(() => c(se) && c(J)), ce = /* @__PURE__ */ P(() => c(_) ?? n().nodesFocusable);
  function ee(he) {
    return n().parentLookup.has(he);
  }
  let re = /* @__PURE__ */ P(() => ee(K)), pe = /* @__PURE__ */ Ee(null), ge = null, xe = c(R), de = c(A), Ce = c(k), Te = /* @__PURE__ */ P(() => n().nodeTypes[c(R)] ?? oa), Y = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  Sr("svelteflow__node_connectable", {
    get value() {
      return c(oe);
    }
  }), Sr("svelteflow__node_id", K);
  let We = /* @__PURE__ */ P(() => {
    const he = c(N) === void 0 ? c(H) ?? c(L) : c(H), Ae = c(x) === void 0 ? c(j) ?? c(E) : c(j);
    if (!(he === void 0 && Ae === void 0 && c(M) === void 0))
      return `${c(M)};${he ? `width:${un(he)};` : ""}${Ae ? `height:${un(Ae)};` : ""}`;
  });
  Ye(() => {
    (c(R) !== xe || c(A) !== de || c(k) !== Ce) && c(pe) !== null && requestAnimationFrame(() => {
      c(pe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[K, { id: K, nodeElement: c(pe), force: !0 }]]));
    }), xe = c(R), de = c(A), Ce = c(k);
  }), Ye(() => {
    o() && (!c(we) || c(pe) !== ge) && (ge && o().unobserve(ge), c(pe) && o().observe(c(pe)), ge = c(pe));
  }), bi(() => {
    ge && o()?.unobserve(ge);
  });
  function Ve(he) {
    c(G) && (!n().selectNodesOnDrag || !c(X) || n().nodeDragThreshold > 0) && n().handleNodeSelection(K), s()?.({ node: c(te), event: he });
  }
  function Ie(he) {
    if (!(pc(he) || n().disableKeyboardA11y))
      if (rc.includes(he.key) && c(G)) {
        const Ae = he.key === "Escape";
        n().handleNodeSelection(K, Ae, c(pe));
      } else c(X) && r().selected && Object.prototype.hasOwnProperty.call(li, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = c(Y)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(li[he.key], he.shiftKey ? 4 : 1));
  }
  const De = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(pe)?.matches(":focus-visible"))
      return;
    const { width: he, height: Ae, viewport: vt } = n();
    Qs(/* @__PURE__ */ new Map([[K, r()]]), { x: 0, y: 0, width: he, height: Ae }, [vt.x, vt.y, vt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: vt.zoom });
  };
  var tt = {
    get store() {
      return n();
    },
    set store(he) {
      n(he), v();
    },
    get node() {
      return r();
    },
    set node(he) {
      r(he), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(he) {
      o(he), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(he) {
      i(he), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(he) {
      s(he), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(he) {
      a(he), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(he) {
      l(he), v();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(he) {
      u(he), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(he) {
      d(he), v();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(he) {
      f(he), v();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(he) {
      p(he), v();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(he) {
      h(he), v();
    }
  }, Et = Ne(), Xe = ne(Et);
  {
    var ze = (he) => {
      var Ae = nm();
      et(
        Ae,
        (Ge, xt) => ({
          "data-id": K,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(R)}`,
            c(z)
          ],
          style: c(We),
          onclick: Ve,
          onpointerenter: d() ? (it) => d()({ node: c(te), event: it }) : void 0,
          onpointerleave: f() ? (it) => f()({ node: c(te), event: it }) : void 0,
          onpointermove: p() ? (it) => p()({ node: c(te), event: it }) : void 0,
          oncontextmenu: h() ? (it) => h()({ node: c(te), event: it }) : void 0,
          onkeydown: c(ce) ? Ie : void 0,
          onfocus: c(ce) ? De : void 0,
          tabIndex: c(ce) ? 0 : void 0,
          role: r().ariaRole ?? (c(ce) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Kc}-${n().flowId}`,
          ...r().domAttributes,
          [En]: Ge,
          [rn]: xt
        }),
        [
          () => ({
            dragging: c(S),
            selected: c(y),
            draggable: c(X),
            connectable: c(oe),
            selectable: c(G),
            nopan: c(X),
            parent: c(re)
          }),
          () => ({
            "z-index": c(V),
            transform: `translate(${c(W) ?? ""}px, ${c(Q) ?? ""}px)`,
            visibility: c(se) ? "visible" : "hidden"
          })
        ]
      );
      var vt = B(Ae);
      xi(vt, () => c(Te), (Ge, xt) => {
        xt(Ge, {
          get data() {
            return c(g);
          },
          get id() {
            return K;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(G);
          },
          get deletable() {
            return c($);
          },
          get sourcePosition() {
            return c(A);
          },
          get targetPosition() {
            return c(k);
          },
          get zIndex() {
            return c(V);
          },
          get dragging() {
            return c(S);
          },
          get draggable() {
            return c(X);
          },
          get dragHandle() {
            return c(Z);
          },
          get parentId() {
            return c(q);
          },
          get type() {
            return c(R);
          },
          get isConnectable() {
            return c(oe);
          },
          get positionAbsoluteX() {
            return c(W);
          },
          get positionAbsoluteY() {
            return c(Q);
          },
          get width() {
            return c(H);
          },
          get height() {
            return c(j);
          }
        });
      }), I(Ae), ft(Ae, (Ge, xt) => jc?.(Ge, xt), () => ({
        nodeId: K,
        isSelectable: c(G),
        disabled: !c(X),
        handleSelector: c(Z),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ge, xt, it, st) => {
          a()?.({ event: Ge, targetNode: it, nodes: st });
        },
        onDragStart: (Ge, xt, it, st) => {
          l()?.({ event: Ge, targetNode: it, nodes: st });
        },
        onDragStop: (Ge, xt, it, st) => {
          u()?.({ event: Ge, targetNode: it, nodes: st });
        },
        store: n()
      })), Tt(Ae, (Ge) => F(pe, Ge), () => c(pe)), T(he, Ae);
    };
    ae(Xe, (he) => {
      c(O) || he(ze);
    });
  }
  return T(e, Et), ue(tt);
}
ie(
  Zc,
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
var rm = /* @__PURE__ */ U('<div class="svelte-flow__nodes"></div>');
function Wc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), f = m(t, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((C) => {
      const $ = C.target.getAttribute("data-id");
      w.set($, { id: $, nodeElement: C.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  bi(() => {
    p?.disconnect();
  });
  var h = {
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
      return u();
    },
    set onnodedrag(y) {
      u(y), v();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), v();
    },
    get onnodedragstop() {
      return f();
    },
    set onnodedragstop(y) {
      f(y), v();
    }
  }, g = rm();
  return gt(g, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    Zc(y, {
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
        return f();
      },
      get onnodecontextmenu() {
        return i();
      },
      get store() {
        return n();
      },
      set store(C) {
        n(C);
      }
    });
  }), I(g), T(e, g), ue(h);
}
ie(
  Wc,
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
var om = /* @__PURE__ */ fe('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Yc(e, t) {
  le(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), u = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), f = /* @__PURE__ */ P(() => n().sourceY), p = /* @__PURE__ */ P(() => n().targetX), h = /* @__PURE__ */ P(() => n().targetY), g = /* @__PURE__ */ P(() => n().sourcePosition), y = /* @__PURE__ */ P(() => n().targetPosition), w = /* @__PURE__ */ P(() => mt(n().animated, !1)), C = /* @__PURE__ */ P(() => mt(n().selected, !1)), $ = /* @__PURE__ */ P(() => n().label), b = /* @__PURE__ */ P(() => n().labelStyle), _ = /* @__PURE__ */ P(() => mt(n().data, () => ({}), !0)), O = /* @__PURE__ */ P(() => n().style), S = /* @__PURE__ */ P(() => n().interactionWidth), M = /* @__PURE__ */ P(() => mt(n().type, "default")), z = /* @__PURE__ */ P(() => n().sourceHandle), R = /* @__PURE__ */ P(() => n().targetHandle), q = /* @__PURE__ */ P(() => n().markerStart), A = /* @__PURE__ */ P(() => n().markerEnd), k = /* @__PURE__ */ P(() => n().selectable), N = /* @__PURE__ */ P(() => n().focusable), x = /* @__PURE__ */ P(() => mt(n().deletable, !0)), L = /* @__PURE__ */ P(() => n().hidden), E = /* @__PURE__ */ P(() => n().zIndex), H = /* @__PURE__ */ P(() => n().class), j = /* @__PURE__ */ P(() => n().ariaLabel), Z = null;
  const { id: V } = n();
  Sr("svelteflow__edge_id", V);
  let W = /* @__PURE__ */ P(() => c(k) ?? r().elementsSelectable), Q = /* @__PURE__ */ P(() => c(N) ?? r().edgesFocusable), te = /* @__PURE__ */ P(() => r().edgeTypes[c(M)] ?? ia), K = /* @__PURE__ */ P(() => c(q) ? `url('#${vs(c(q), r().flowId)}')` : void 0), X = /* @__PURE__ */ P(() => c(A) ? `url('#${vs(c(A), r().flowId)}')` : void 0);
  function G(re) {
    const pe = r().edgeLookup.get(V);
    pe && (c(W) && r().handleEdgeSelection(V), o()?.({ event: re, edge: pe }));
  }
  function oe(re, pe) {
    const ge = r().edgeLookup.get(V);
    ge && pe({ event: re, edge: ge });
  }
  function se(re) {
    if (!r().disableKeyboardA11y && rc.includes(re.key) && c(W)) {
      const { unselectNodesAndEdges: pe, addSelectedEdges: ge } = r();
      re.key === "Escape" ? (Z?.blur(), pe({ edges: [n()] })) : ge([V]);
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
  }, we = Ne(), ce = ne(we);
  {
    var ee = (re) => {
      var pe = om();
      let ge;
      var xe = B(pe);
      et(
        xe,
        (Ce) => ({
          class: ["svelte-flow__edge", c(H)],
          "data-id": V,
          onclick: G,
          oncontextmenu: i() ? (Te) => {
            oe(Te, i());
          } : void 0,
          onpointerenter: s() ? (Te) => {
            oe(Te, s());
          } : void 0,
          onpointerleave: a() ? (Te) => {
            oe(Te, a());
          } : void 0,
          "aria-label": c(j) === null ? void 0 : c(j) ? c(j) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(Q) ? `${Rc}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(Q) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(Q) ? se : void 0,
          tabindex: c(Q) ? 0 : void 0,
          ...n().domAttributes,
          [En]: Ce
        }),
        [
          () => ({
            animated: c(w),
            selected: c(C),
            selectable: c(W)
          })
        ]
      );
      var de = B(xe);
      xi(de, () => c(te), (Ce, Te) => {
        Te(Ce, {
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
            return c(f);
          },
          get targetX() {
            return c(p);
          },
          get targetY() {
            return c(h);
          },
          get sourcePosition() {
            return c(g);
          },
          get targetPosition() {
            return c(y);
          },
          get animated() {
            return c(w);
          },
          get selected() {
            return c(C);
          },
          get label() {
            return c($);
          },
          get labelStyle() {
            return c(b);
          },
          get data() {
            return c(_);
          },
          get style() {
            return c(O);
          },
          get interactionWidth() {
            return c(S);
          },
          get selectable() {
            return c(W);
          },
          get deletable() {
            return c(x);
          },
          get type() {
            return c(M);
          },
          get sourceHandleId() {
            return c(z);
          },
          get targetHandleId() {
            return c(R);
          },
          get markerStart() {
            return c(K);
          },
          get markerEnd() {
            return c(X);
          }
        });
      }), I(xe), Tt(xe, (Ce) => Z = Ce, () => Z), I(pe), $e((Ce) => ge = dt(pe, "", ge, Ce), [() => ({ "z-index": c(E) })]), T(re, pe);
    };
    ae(ce, (re) => {
      c(L) || re(ee);
    });
  }
  return T(e, we), ue(J);
}
ie(
  Yc,
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
Bp();
var im = /* @__PURE__ */ fe("<defs></defs>");
function qc(e, t) {
  le(t, !1);
  const n = Qt();
  _u();
  var r = im();
  gt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Fc(o, Be(() => c(i)));
  }), I(r), T(e, r), ue();
}
ie(qc, {}, [], [], !0);
var sm = /* @__PURE__ */ fe('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), am = /* @__PURE__ */ fe('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), lm = /* @__PURE__ */ fe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Fc(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7, "none"), u = m(t, "strokeWidth", 7);
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
      return u();
    },
    set strokeWidth(y) {
      u(y), v();
    }
  }, f = lm(), p = B(f);
  {
    var h = (y) => {
      var w = sm();
      let C;
      $e(
        ($) => {
          be(w, "stroke-width", u()), C = dt(w, "", C, $);
        },
        [() => ({ stroke: l() })]
      ), T(y, w);
    }, g = (y) => {
      var w = Ne(), C = ne(w);
      {
        var $ = (b) => {
          var _ = am();
          let O;
          $e(
            (S) => {
              be(_, "stroke-width", u()), O = dt(_, "", O, S);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), T(b, _);
        };
        ae(
          C,
          (b) => {
            r() === io.ArrowClosed && b($);
          },
          !0
        );
      }
      T(y, w);
    };
    ae(p, (y) => {
      r() === io.Arrow ? y(h) : y(g, !1);
    });
  }
  return I(f), $e(() => {
    be(f, "id", n()), be(f, "markerWidth", `${o()}`), be(f, "markerHeight", `${i()}`), be(f, "markerUnits", s()), be(f, "orient", a());
  }), T(e, f), ue(d);
}
ie(
  Fc,
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
var um = /* @__PURE__ */ U('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Xc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), v();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(p) {
      r(p), v();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(p) {
      o(p), v();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(p) {
      i(p), v();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(p) {
      s(p), v();
    }
  }, l = um(), u = B(l), d = B(u);
  qc(d, {}), I(u);
  var f = D(u, 2);
  return gt(f, 17, () => n().visible.edges.values(), (p) => p.id, (p, h) => {
    Yc(p, {
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
      set store(g) {
        n(g);
      }
    });
  }), I(l), T(e, l), ue(a);
}
ie(
  Xc,
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
var cm = /* @__PURE__ */ U('<div class="svelte-flow__selection svelte-eplraw"></div>');
const dm = {
  hash: "svelte-eplraw",
  code: ".svelte-flow__selection.svelte-eplraw {position:absolute;top:0;left:0;}"
};
function sa(e, t) {
  le(t, !0), Me(e, dm);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
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
  }, l = Ne(), u = ne(l);
  {
    var d = (f) => {
      var p = cm();
      let h;
      $e((g) => h = dt(p, "", h, g), [
        () => ({
          width: typeof o() == "string" ? o() : un(o()),
          height: typeof i() == "string" ? i() : un(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), T(f, p);
    };
    ae(u, (f) => {
      s() && f(d);
    });
  }
  return T(e, l), ue(a);
}
ie(sa, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function pm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function fm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var hm = /* @__PURE__ */ U("<div><!></div>");
const gm = {
  hash: "svelte-jl8ebg",
  code: ".svelte-flow__selection-wrapper.svelte-jl8ebg {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Gc(e, t) {
  le(t, !0), Me(e, gm);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ee(void 0);
  Ye(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ P(() => n().selectionRectMode === "nodes" ? (n().nodes, xo(n().nodeLookup, { filter: (y) => !!y.selected })) : null);
  function d(y) {
    Object.prototype.hasOwnProperty.call(li, y.key) && (y.preventDefault(), n().moveSelectedNodes(li[y.key], y.shiftKey ? 4 : 1));
  }
  var f = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(y) {
      r(y), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(y) {
      o(y), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(y) {
      i(y), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(y) {
      s(y), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(y) {
      a(y), v();
    }
  }, p = Ne(), h = ne(p);
  {
    var g = (y) => {
      var w = hm();
      w.__contextmenu = [pm, n, a], w.__click = [fm, n, s], w.__keydown = function(...b) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, b);
      };
      let C;
      var $ = B(w);
      sa($, { width: "100%", height: "100%", x: 0, y: 0 }), I(w), ft(w, (b, _) => jc?.(b, _), () => ({
        disabled: !1,
        store: n(),
        onDrag: (b, _, O, S) => {
          r()?.({ event: b, targetNode: null, nodes: S });
        },
        onDragStart: (b, _, O, S) => {
          o()?.({ event: b, targetNode: null, nodes: S });
        },
        onDragStop: (b, _, O, S) => {
          i()?.({ event: b, targetNode: null, nodes: S });
        }
      })), Tt(w, (b) => F(l, b), () => c(l)), $e(
        (b) => {
          Nt(w, 1, Cn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-jl8ebg"), be(w, "role", n().disableKeyboardA11y ? void 0 : "button"), be(w, "tabindex", n().disableKeyboardA11y ? void 0 : -1), C = dt(w, "", C, b);
        },
        [
          () => ({
            width: un(c(u).width),
            height: un(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), T(y, w);
    };
    ae(h, (y) => {
      n().selectionRectMode === "nodes" && c(u) && gn(c(u).x) && gn(c(u).y) && y(g);
    });
  }
  return T(e, p), ue(f);
}
Rn(["contextmenu", "click", "keydown"]);
ie(
  Gc,
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
function vm(e) {
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
function en(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, f, p) => f ? d | 1 << p : d,
      0
    );
    for (const d of l) {
      const f = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: p, key: h, callback: g, preventDefault: y, enabled: w } = f;
      if (w) {
        if (a.key !== h) continue;
        if (p === null || p === !1) {
          if (u !== 0) continue;
        } else if (p !== void 0 && p?.[0]?.length > 0) {
          const $ = Array.isArray(p) ? p : [p];
          let b = !1;
          for (const _ of $)
            if ((Array.isArray(_) ? _ : [_]).reduce(
              (O, S) => O | vm(S),
              0
            ) === u) {
              b = !0;
              break;
            }
          if (!b) continue;
        }
        y && a.preventDefault();
        const C = {
          node: e,
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: C })), g?.(C);
      }
    }
  }
  let s;
  return n && (s = rs(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = rs(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function pt() {
  const e = /* @__PURE__ */ P(Qt), t = (i) => {
    const s = dl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Kv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Hr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = lt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && dl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = lt(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && H0(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : vl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : vl(c(e).edgeLookup, i),
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
    getViewport: () => Dl(c(e).viewport),
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
    /**
     * Partial is defined as "the 2 nodes/areas are intersecting partially".
     * If a is contained in b or b is contained in a, they are both
     * considered fully intersecting.
     */
    getIntersectingNodes: (i, s = !0, a) => {
      const l = Ja(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const f = c(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const p = Hr(f), h = so(p, u);
        return s && h > 0 || h >= p.width * p.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Ja(i) ? i : t(i);
      if (!l)
        return !1;
      const u = so(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Av({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = lt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = lt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: f, y: p } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - f, y: i.y - p };
      return $o(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), f = ai(i, [s, a, l]);
      return { x: f.x + u, y: f.y + d };
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
    getNodesBounds: (i) => Vv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function vl(e, t) {
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
function Uc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => Gn() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => Gn() ? "Meta" : "Control"), { deleteElements: l } = pt();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function f(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function p(w, C) {
    return (Array.isArray(w) ? w : [w]).map(($) => {
      const b = f($);
      return {
        key: b,
        modifier: d($),
        enabled: b !== null,
        callback: C
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function g() {
    const w = n().nodes.filter(($) => $.selected), C = n().edges.filter(($) => $.selected);
    l({ nodes: w, edges: C });
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
    set multiSelectionKey(w = Gn() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Gn() ? "Meta" : "Control") {
      a(w), v();
    }
  };
  return Ca("blur", Ct, h), Ca("contextmenu", Ct, h), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !pc(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), g());
    }),
    type: "keydown"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(Ct, (w, C) => en?.(w, C), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(y);
}
ie(
  Uc,
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
var mm = /* @__PURE__ */ fe('<path fill="none" class="svelte-flow__connection-path"></path>'), ym = /* @__PURE__ */ fe('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Qc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ P(() => {
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
      case fn.Bezier: {
        const [h] = hc(p);
        return h;
      }
      case fn.Straight: {
        const [h] = vc(p);
        return h;
      }
      case fn.Step:
      case fn.SmoothStep: {
        const [h] = ea({
          ...p,
          borderRadius: r() === fn.Step ? 0 : void 0
        });
        return h;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), v();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), v();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(p) {
      o(p), v();
    },
    get style() {
      return i();
    },
    set style(p) {
      i(p), v();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(p) {
      s(p), v();
    }
  }, u = Ne(), d = ne(u);
  {
    var f = (p) => {
      var h = ym(), g = B(h), y = B(g);
      {
        var w = ($) => {
          var b = Ne(), _ = ne(b);
          xi(_, s, (O, S) => {
            S(O, {});
          }), T($, b);
        }, C = ($) => {
          var b = mm();
          $e(() => {
            be(b, "d", c(a)), dt(b, i());
          }), T($, b);
        };
        ae(y, ($) => {
          s() ? $(w) : $(C, !1);
        });
      }
      I(g), I(h), $e(
        ($) => {
          be(h, "width", n().width), be(h, "height", n().height), dt(h, o()), Nt(g, 0, $);
        },
        [
          () => Cn([
            "svelte-flow__connection",
            Tv(n().connection.isValid)
          ])
        ]
      ), T(p, h);
    };
    ae(d, (p) => {
      n().connection.inProgress && p(f);
    });
  }
  return T(e, u), ue(l);
}
ie(
  Qc,
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
var wm = /* @__PURE__ */ U("<div><!></div>");
function _o(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ He(t, [
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
  }, u = wm();
  et(u, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = B(u);
  return qe(d, () => i() ?? ct), I(u), T(e, u), ue(l);
}
ie(_o, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var bm = /* @__PURE__ */ U('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Jc(e, t) {
  le(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
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
  }, i = Ne(), s = ne(i);
  {
    var a = (l) => {
      _o(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var f = bm();
          T(u, f);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return T(e, i), ue(o);
}
ie(Jc, { proOptions: {}, position: {} }, [], [], !0);
var xm = /* @__PURE__ */ U("<div><!></div>");
const Cm = {
  hash: "svelte-1q89zv",
  code: ".svelte-flow.svelte-1q89zv {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function ed(e, t) {
  le(t, !0), Me(e, Cm);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ P(() => u().class), f = /* @__PURE__ */ P(() => vf(u(), [
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
  var h = {
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
      return u();
    },
    set rest(w) {
      u(w), v();
    }
  }, g = xm();
  et(
    g,
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
      ...c(f),
      [rn]: w
    }),
    [
      () => ({ width: un(n()), height: un(r()) })
    ],
    void 0,
    "svelte-1q89zv"
  );
  var y = B(g);
  return qe(y, () => l() ?? ct), I(g), Tt(g, (w) => i(w), () => i()), Pa(g, "clientHeight", a), Pa(g, "clientWidth", s), T(e, g), ue(h);
}
ie(
  ed,
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
var $m = /* @__PURE__ */ U('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), km = /* @__PURE__ */ U("<!> <!>", 1), _m = /* @__PURE__ */ U("<!> <!> <!> <!> <!>", 1);
function td(e, t) {
  le(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), f = m(t, "nodeClickDistance", 7, 1), p = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), g = m(t, "onmove", 7), y = m(t, "oninit", 7), w = m(t, "onnodeclick", 7), C = m(t, "onnodecontextmenu", 7), $ = m(t, "onnodedrag", 7), b = m(t, "onnodedragstart", 7), _ = m(t, "onnodedragstop", 7), O = m(t, "onnodepointerenter", 7), S = m(t, "onnodepointermove", 7), M = m(t, "onnodepointerleave", 7), z = m(t, "onselectionclick", 7), R = m(t, "onselectioncontextmenu", 7), q = m(t, "onselectionstart", 7), A = m(t, "onselectionend", 7), k = m(t, "onedgeclick", 7), N = m(t, "onedgecontextmenu", 7), x = m(t, "onedgepointerenter", 7), L = m(t, "onedgepointerleave", 7), E = m(t, "onpaneclick", 7), H = m(t, "onpanecontextmenu", 7), j = m(t, "panOnScrollMode", 23, () => tr.Free), Z = m(t, "preventScrolling", 7, !0), V = m(t, "zoomOnScroll", 7, !0), W = m(t, "zoomOnDoubleClick", 7, !0), Q = m(t, "zoomOnPinch", 7, !0), te = m(t, "panOnScroll", 7, !1), K = m(t, "panOnScrollSpeed", 7, 0.5), X = m(t, "panOnDrag", 7, !0), G = m(t, "selectionOnDrag", 7, !0), oe = m(t, "connectionLineComponent", 7), se = m(t, "connectionLineStyle", 7), J = m(t, "connectionLineContainerStyle", 7), we = m(t, "connectionLineType", 23, () => fn.Bezier), ce = m(t, "attributionPosition", 7), ee = m(t, "children", 7), re = m(t, "nodes", 31, () => Ht([])), pe = m(t, "edges", 31, () => Ht([])), ge = m(t, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ He(t, [
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
  ]), de = Hc({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return re();
    },
    set nodes(Y) {
      re(Y);
    },
    get edges() {
      return pe();
    },
    set edges(Y) {
      pe(Y);
    },
    get viewport() {
      return ge();
    },
    set viewport(Y) {
      ge(Y);
    }
  });
  const Ce = zn(ui);
  Ce && Ce.setStore && Ce.setStore(de), Sr(ui, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Ye(() => {
    const Y = { nodes: de.selectedNodes, edges: de.selectedEdges };
    lt(() => t.onselectionchange)?.(Y);
    for (const We of de.selectionChangeHandlers.values())
      We(Y);
  }), bi(() => {
    de.reset();
  });
  var Te = {
    get width() {
      return n();
    },
    set width(Y) {
      n(Y), v();
    },
    get height() {
      return r();
    },
    set height(Y) {
      r(Y), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(Y) {
      o(Y), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(Y) {
      i(Y), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(Y) {
      s(Y), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(Y) {
      a(Y), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(Y) {
      l(Y), v();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(Y) {
      u(Y), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Y = 1) {
      d(Y), v();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(Y = 1) {
      f(Y), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(Y) {
      p(Y), v();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(Y) {
      h(Y), v();
    },
    get onmove() {
      return g();
    },
    set onmove(Y) {
      g(Y), v();
    },
    get oninit() {
      return y();
    },
    set oninit(Y) {
      y(Y), v();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(Y) {
      w(Y), v();
    },
    get onnodecontextmenu() {
      return C();
    },
    set onnodecontextmenu(Y) {
      C(Y), v();
    },
    get onnodedrag() {
      return $();
    },
    set onnodedrag(Y) {
      $(Y), v();
    },
    get onnodedragstart() {
      return b();
    },
    set onnodedragstart(Y) {
      b(Y), v();
    },
    get onnodedragstop() {
      return _();
    },
    set onnodedragstop(Y) {
      _(Y), v();
    },
    get onnodepointerenter() {
      return O();
    },
    set onnodepointerenter(Y) {
      O(Y), v();
    },
    get onnodepointermove() {
      return S();
    },
    set onnodepointermove(Y) {
      S(Y), v();
    },
    get onnodepointerleave() {
      return M();
    },
    set onnodepointerleave(Y) {
      M(Y), v();
    },
    get onselectionclick() {
      return z();
    },
    set onselectionclick(Y) {
      z(Y), v();
    },
    get onselectioncontextmenu() {
      return R();
    },
    set onselectioncontextmenu(Y) {
      R(Y), v();
    },
    get onselectionstart() {
      return q();
    },
    set onselectionstart(Y) {
      q(Y), v();
    },
    get onselectionend() {
      return A();
    },
    set onselectionend(Y) {
      A(Y), v();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(Y) {
      k(Y), v();
    },
    get onedgecontextmenu() {
      return N();
    },
    set onedgecontextmenu(Y) {
      N(Y), v();
    },
    get onedgepointerenter() {
      return x();
    },
    set onedgepointerenter(Y) {
      x(Y), v();
    },
    get onedgepointerleave() {
      return L();
    },
    set onedgepointerleave(Y) {
      L(Y), v();
    },
    get onpaneclick() {
      return E();
    },
    set onpaneclick(Y) {
      E(Y), v();
    },
    get onpanecontextmenu() {
      return H();
    },
    set onpanecontextmenu(Y) {
      H(Y), v();
    },
    get panOnScrollMode() {
      return j();
    },
    set panOnScrollMode(Y = tr.Free) {
      j(Y), v();
    },
    get preventScrolling() {
      return Z();
    },
    set preventScrolling(Y = !0) {
      Z(Y), v();
    },
    get zoomOnScroll() {
      return V();
    },
    set zoomOnScroll(Y = !0) {
      V(Y), v();
    },
    get zoomOnDoubleClick() {
      return W();
    },
    set zoomOnDoubleClick(Y = !0) {
      W(Y), v();
    },
    get zoomOnPinch() {
      return Q();
    },
    set zoomOnPinch(Y = !0) {
      Q(Y), v();
    },
    get panOnScroll() {
      return te();
    },
    set panOnScroll(Y = !1) {
      te(Y), v();
    },
    get panOnScrollSpeed() {
      return K();
    },
    set panOnScrollSpeed(Y = 0.5) {
      K(Y), v();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(Y = !0) {
      X(Y), v();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(Y = !0) {
      G(Y), v();
    },
    get connectionLineComponent() {
      return oe();
    },
    set connectionLineComponent(Y) {
      oe(Y), v();
    },
    get connectionLineStyle() {
      return se();
    },
    set connectionLineStyle(Y) {
      se(Y), v();
    },
    get connectionLineContainerStyle() {
      return J();
    },
    set connectionLineContainerStyle(Y) {
      J(Y), v();
    },
    get connectionLineType() {
      return we();
    },
    set connectionLineType(Y = fn.Bezier) {
      we(Y), v();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(Y) {
      ce(Y), v();
    },
    get children() {
      return ee();
    },
    set children(Y) {
      ee(Y), v();
    },
    get nodes() {
      return re();
    },
    set nodes(Y = []) {
      re(Y), v();
    },
    get edges() {
      return pe();
    },
    set edges(Y = []) {
      pe(Y), v();
    },
    get viewport() {
      return ge();
    },
    set viewport(Y = void 0) {
      ge(Y), v();
    }
  };
  return ed(e, {
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
      return xe;
    },
    get domNode() {
      return de.domNode;
    },
    set domNode(Y) {
      de.domNode = Y;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(Y) {
      de.width = Y;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(Y) {
      de.height = Y;
    },
    children: (Y, We) => {
      var Ve = _m(), Ie = ne(Ve);
      Uc(Ie, {
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
        set store(ze) {
          de = ze;
        }
      });
      var De = D(Ie, 2);
      Dc(De, {
        get panOnScrollMode() {
          return j();
        },
        get preventScrolling() {
          return Z();
        },
        get zoomOnScroll() {
          return V();
        },
        get zoomOnDoubleClick() {
          return W();
        },
        get zoomOnPinch() {
          return Q();
        },
        get panOnScroll() {
          return te();
        },
        get panOnScrollSpeed() {
          return K();
        },
        get panOnDrag() {
          return X();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return p();
        },
        get onmove() {
          return g();
        },
        get onmoveend() {
          return h();
        },
        get oninit() {
          return y();
        },
        get store() {
          return de;
        },
        set store(ze) {
          de = ze;
        },
        children: (ze, he) => {
          Ac(ze, {
            get onpaneclick() {
              return E();
            },
            get onpanecontextmenu() {
              return H();
            },
            get onselectionstart() {
              return q();
            },
            get onselectionend() {
              return A();
            },
            get panOnDrag() {
              return X();
            },
            get selectionOnDrag() {
              return G();
            },
            get store() {
              return de;
            },
            set store(Ae) {
              de = Ae;
            },
            children: (Ae, vt) => {
              var Ge = km(), xt = ne(Ge);
              Ic(xt, {
                get store() {
                  return de;
                },
                set store(st) {
                  de = st;
                },
                children: (st, Sn) => {
                  var Nn = $m(), Lo = D(ne(Nn), 2);
                  Xc(Lo, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return N();
                    },
                    get onedgepointerenter() {
                      return x();
                    },
                    get onedgepointerleave() {
                      return L();
                    },
                    get store() {
                      return de;
                    },
                    set store(qn) {
                      de = qn;
                    }
                  });
                  var Oo = D(Lo, 4);
                  Qc(Oo, {
                    get type() {
                      return we();
                    },
                    get LineComponent() {
                      return oe();
                    },
                    get containerStyle() {
                      return J();
                    },
                    get style() {
                      return se();
                    },
                    get store() {
                      return de;
                    },
                    set store(qn) {
                      de = qn;
                    }
                  });
                  var pa = D(Oo, 2);
                  Wc(pa, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return C();
                    },
                    get onnodepointerenter() {
                      return O();
                    },
                    get onnodepointermove() {
                      return S();
                    },
                    get onnodepointerleave() {
                      return M();
                    },
                    get onnodedrag() {
                      return $();
                    },
                    get onnodedragstart() {
                      return b();
                    },
                    get onnodedragstop() {
                      return _();
                    },
                    get store() {
                      return de;
                    },
                    set store(qn) {
                      de = qn;
                    }
                  });
                  var Jd = D(pa, 2);
                  Gc(Jd, {
                    get onselectionclick() {
                      return z();
                    },
                    get onselectioncontextmenu() {
                      return R();
                    },
                    get onnodedrag() {
                      return $();
                    },
                    get onnodedragstart() {
                      return b();
                    },
                    get onnodedragstop() {
                      return _();
                    },
                    get store() {
                      return de;
                    },
                    set store(qn) {
                      de = qn;
                    }
                  }), ve(2), T(st, Nn);
                },
                $$slots: { default: !0 }
              });
              var it = D(xt, 2);
              {
                let st = /* @__PURE__ */ P(() => !!(de.selectionRect && de.selectionRectMode === "user")), Sn = /* @__PURE__ */ P(() => de.selectionRect?.width), Nn = /* @__PURE__ */ P(() => de.selectionRect?.height), Lo = /* @__PURE__ */ P(() => de.selectionRect?.x), Oo = /* @__PURE__ */ P(() => de.selectionRect?.y);
                sa(it, {
                  get isVisible() {
                    return c(st);
                  },
                  get width() {
                    return c(Sn);
                  },
                  get height() {
                    return c(Nn);
                  },
                  get x() {
                    return c(Lo);
                  },
                  get y() {
                    return c(Oo);
                  }
                });
              }
              T(Ae, Ge);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var tt = D(De, 2);
      Jc(tt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var Et = D(tt, 2);
      Bc(Et, {
        get store() {
          return de;
        }
      });
      var Xe = D(Et, 2);
      qe(Xe, () => ee() ?? ct), T(Y, Ve);
    },
    $$slots: { default: !0 }
  }), ue(Te);
}
ie(
  td,
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
function nd(e, t) {
  le(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ee(Hc({ props: {}, nodes: [], edges: [] }));
  Sr(ui, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      F(r, a);
    }
  }), bi(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    }
  }, i = Ne(), s = ne(i);
  return qe(s, () => n() ?? ct), T(e, i), ue(o);
}
ie(nd, { children: {} }, [], [], !0);
var Sm = /* @__PURE__ */ U("<button><!></button>");
function Xr(e, t) {
  le(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ He(t, [
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
    set class(g) {
      n(g), v();
    },
    get bgColor() {
      return r();
    },
    set bgColor(g) {
      r(g), v();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(g) {
      o(g), v();
    },
    get color() {
      return i();
    },
    set color(g) {
      i(g), v();
    },
    get colorHover() {
      return s();
    },
    set colorHover(g) {
      s(g), v();
    },
    get borderColor() {
      return a();
    },
    set borderColor(g) {
      a(g), v();
    },
    get onclick() {
      return l();
    },
    set onclick(g) {
      l(g), v();
    },
    get children() {
      return u();
    },
    set children(g) {
      u(g), v();
    }
  }, p = Sm();
  et(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [rn]: g
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
  var h = B(p);
  return qe(h, () => u() ?? ct), I(p), T(e, p), ue(f);
}
ie(
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
var Nm = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function rd(e) {
  var t = Nm();
  T(e, t);
}
ie(rd, {}, [], [], !0);
var Em = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function od(e) {
  var t = Em();
  T(e, t);
}
ie(od, {}, [], [], !0);
var Pm = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function id(e) {
  var t = Pm();
  T(e, t);
}
ie(id, {}, [], [], !0);
var Lm = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function sd(e) {
  var t = Lm();
  T(e, t);
}
ie(sd, {}, [], [], !0);
var Om = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ad(e) {
  var t = Om();
  T(e, t);
}
ie(ad, {}, [], [], !0);
var Tm = /* @__PURE__ */ U("<!> <!>", 1), Mm = /* @__PURE__ */ U("<!> <!> <!> <!> <!> <!>", 1);
function ld(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), f = m(t, "buttonColor", 7), p = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), g = m(t, "fitViewOptions", 7), y = m(t, "children", 7), w = m(t, "before", 7), C = m(t, "after", 7), $ = /* @__PURE__ */ He(t, [
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
  ]), b = /* @__PURE__ */ P(Qt);
  const _ = {
    bgColor: u(),
    bgColorHover: d(),
    color: f(),
    colorHover: p(),
    borderColor: h()
  };
  let O = /* @__PURE__ */ P(() => c(b).nodesDraggable || c(b).nodesConnectable || c(b).elementsSelectable), S = /* @__PURE__ */ P(() => c(b).viewport.zoom <= c(b).minZoom), M = /* @__PURE__ */ P(() => c(b).viewport.zoom >= c(b).maxZoom), z = /* @__PURE__ */ P(() => c(b).ariaLabelConfig), R = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const q = () => {
    c(b).zoomIn();
  }, A = () => {
    c(b).zoomOut();
  }, k = () => {
    c(b).fitView(g());
  }, N = () => {
    let L = !c(O);
    c(b).nodesDraggable = L, c(b).nodesConnectable = L, c(b).elementsSelectable = L;
  };
  var x = {
    get position() {
      return n();
    },
    set position(L = "bottom-left") {
      n(L), v();
    },
    get orientation() {
      return r();
    },
    set orientation(L = "vertical") {
      r(L), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(L = !0) {
      o(L), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(L = !0) {
      i(L), v();
    },
    get showLock() {
      return s();
    },
    set showLock(L = !0) {
      s(L), v();
    },
    get style() {
      return a();
    },
    set style(L) {
      a(L), v();
    },
    get class() {
      return l();
    },
    set class(L) {
      l(L), v();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(L) {
      u(L), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(L) {
      d(L), v();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(L) {
      f(L), v();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(L) {
      p(L), v();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(L) {
      h(L), v();
    },
    get fitViewOptions() {
      return g();
    },
    set fitViewOptions(L) {
      g(L), v();
    },
    get children() {
      return y();
    },
    set children(L) {
      y(L), v();
    },
    get before() {
      return w();
    },
    set before(L) {
      w(L), v();
    },
    get after() {
      return C();
    },
    set after(L) {
      C(L), v();
    }
  };
  {
    let L = /* @__PURE__ */ P(() => [
      "svelte-flow__controls",
      c(R),
      l()
    ]);
    _o(e, Be(
      {
        get class() {
          return c(L);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(z)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => $,
      {
        children: (E, H) => {
          var j = Mm(), Z = ne(j);
          {
            var V = (ce) => {
              var ee = Ne(), re = ne(ee);
              qe(re, w), T(ce, ee);
            };
            ae(Z, (ce) => {
              w() && ce(V);
            });
          }
          var W = D(Z, 2);
          {
            var Q = (ce) => {
              var ee = Tm(), re = ne(ee);
              Xr(re, Be(
                {
                  onclick: q,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(z)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(z)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(M);
                  }
                },
                () => _,
                {
                  children: (ge, xe) => {
                    rd(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var pe = D(re, 2);
              Xr(pe, Be(
                {
                  onclick: A,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(z)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(z)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(S);
                  }
                },
                () => _,
                {
                  children: (ge, xe) => {
                    od(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), T(ce, ee);
            };
            ae(W, (ce) => {
              o() && ce(Q);
            });
          }
          var te = D(W, 2);
          {
            var K = (ce) => {
              Xr(ce, Be(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: k,
                  get title() {
                    return c(z)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(z)["controls.fitView.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (ee, re) => {
                    id(ee);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(te, (ce) => {
              i() && ce(K);
            });
          }
          var X = D(te, 2);
          {
            var G = (ce) => {
              Xr(ce, Be(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: N,
                  get title() {
                    return c(z)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(z)["controls.interactive.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (ee, re) => {
                    var pe = Ne(), ge = ne(pe);
                    {
                      var xe = (Ce) => {
                        ad(Ce);
                      }, de = (Ce) => {
                        sd(Ce);
                      };
                      ae(ge, (Ce) => {
                        c(O) ? Ce(xe) : Ce(de, !1);
                      });
                    }
                    T(ee, pe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(X, (ce) => {
              s() && ce(G);
            });
          }
          var oe = D(X, 2);
          {
            var se = (ce) => {
              var ee = Ne(), re = ne(ee);
              qe(re, y), T(ce, ee);
            };
            ae(oe, (ce) => {
              y() && ce(se);
            });
          }
          var J = D(oe, 2);
          {
            var we = (ce) => {
              var ee = Ne(), re = ne(ee);
              qe(re, C), T(ce, ee);
            };
            ae(J, (ce) => {
              C() && ce(we);
            });
          }
          T(E, j);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(x);
}
ie(
  ld,
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
var vn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(vn || (vn = {}));
var Vm = /* @__PURE__ */ fe("<circle></circle>");
function ud(e, t) {
  le(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
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
  }, i = Vm();
  return $e(() => {
    be(i, "cx", n()), be(i, "cy", n()), be(i, "r", n()), Nt(i, 0, Cn(["svelte-flow__background-pattern", "dots", r()]));
  }), T(e, i), ue(o);
}
ie(ud, { radius: {}, class: {} }, [], [], !0);
var zm = /* @__PURE__ */ fe("<path></path>");
function cd(e, t) {
  le(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
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
  }, a = zm();
  return $e(() => {
    be(a, "stroke-width", n()), be(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Nt(a, 0, Cn(["svelte-flow__background-pattern", o(), i()]));
  }), T(e, a), ue(s);
}
ie(cd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Hm = {
  [vn.Dots]: 1,
  [vn.Lines]: 1,
  [vn.Cross]: 6
};
var Dm = /* @__PURE__ */ fe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function dd(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => vn.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), f = /* @__PURE__ */ P(Qt), p = /* @__PURE__ */ P(() => r() === vn.Dots), h = /* @__PURE__ */ P(() => r() === vn.Cross), g = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ P(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ P(() => [
    c(g)[0] * c(f).viewport.zoom || 1,
    c(g)[1] * c(f).viewport.zoom || 1
  ]), C = /* @__PURE__ */ P(() => (i() ?? Hm[r()]) * c(f).viewport.zoom), $ = /* @__PURE__ */ P(() => c(h) ? [c(C), c(C)] : c(w)), b = /* @__PURE__ */ P(() => c(p) ? [c(C) / 2, c(C) / 2] : [
    c($)[0] / 2,
    c($)[1] / 2
  ]);
  var _ = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), v();
    },
    get variant() {
      return r();
    },
    set variant(k = vn.Dots) {
      r(k), v();
    },
    get gap() {
      return o();
    },
    set gap(k = 20) {
      o(k), v();
    },
    get size() {
      return i();
    },
    set size(k) {
      i(k), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(k = 1) {
      s(k), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(k) {
      a(k), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(k) {
      l(k), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(k) {
      u(k), v();
    },
    get class() {
      return d();
    },
    set class(k) {
      d(k), v();
    }
  }, O = Dm();
  let S;
  var M = B(O), z = B(M);
  {
    var R = (k) => {
      {
        let N = /* @__PURE__ */ P(() => c(C) / 2);
        ud(k, {
          get radius() {
            return c(N);
          },
          get class() {
            return u();
          }
        });
      }
    }, q = (k) => {
      cd(k, {
        get dimensions() {
          return c($);
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
    ae(z, (k) => {
      c(p) ? k(R) : k(q, !1);
    });
  }
  I(M);
  var A = D(M);
  return I(O), $e(
    (k) => {
      Nt(O, 0, Cn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), S = dt(O, "", S, k), be(M, "id", c(y)), be(M, "x", c(f).viewport.x % c(w)[0]), be(M, "y", c(f).viewport.y % c(w)[1]), be(M, "width", c(w)[0]), be(M, "height", c(w)[1]), be(M, "patternTransform", `translate(-${c(b)[0]},-${c(b)[1]})`), be(A, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), T(e, O), ue(_);
}
ie(
  dd,
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
var Am = /* @__PURE__ */ fe("<rect></rect>");
function pd(e, t) {
  le(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), f = m(t, "selected", 7), p = m(t, "class", 7), h = m(t, "nodeComponent", 7);
  var g = {
    get x() {
      return n();
    },
    set x(b) {
      n(b), v();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), v();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), v();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), v();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(b = 5) {
      s(b), v();
    },
    get color() {
      return a();
    },
    set color(b) {
      a(b), v();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), v();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), v();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(b = 2) {
      d(b), v();
    },
    get selected() {
      return f();
    },
    set selected(b) {
      f(b), v();
    },
    get class() {
      return p();
    },
    set class(b) {
      p(b), v();
    },
    get nodeComponent() {
      return h();
    },
    set nodeComponent(b) {
      h(b), v();
    }
  }, y = Ne(), w = ne(y);
  {
    var C = (b) => {
      const _ = /* @__PURE__ */ P(h);
      var O = Ne(), S = ne(O);
      xi(S, () => c(_), (M, z) => {
        z(M, {
          get x() {
            return n();
          },
          get y() {
            return r();
          },
          get width() {
            return o();
          },
          get height() {
            return i();
          },
          get borderRadius() {
            return s();
          },
          get class() {
            return p();
          },
          get color() {
            return a();
          },
          get shapeRendering() {
            return l();
          },
          get strokeColor() {
            return u();
          },
          get strokeWidth() {
            return d();
          },
          get selected() {
            return f();
          }
        });
      }), T(b, O);
    }, $ = (b) => {
      var _ = Am();
      let O, S;
      $e(
        (M, z) => {
          O = Nt(_, 0, Cn(["svelte-flow__minimap-node", p()]), null, O, M), be(_, "x", n()), be(_, "y", r()), be(_, "rx", s()), be(_, "ry", s()), be(_, "width", o()), be(_, "height", i()), be(_, "shape-rendering", l()), S = dt(_, "", S, z);
        },
        [
          () => ({ selected: f() }),
          () => ({
            fill: a(),
            stroke: u(),
            "stroke-width": d()
          })
        ]
      ), T(b, _);
    };
    ae(w, (b) => {
      h() ? b(C) : b($, !1);
    });
  }
  return T(e, y), ue(g);
}
ie(
  pd,
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
    class: {},
    nodeComponent: {}
  },
  [],
  [],
  !0
);
function Im(e, t) {
  const n = C0({
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
const Fi = (e) => e instanceof Function ? e : () => e;
var jm = /* @__PURE__ */ fe("<title> </title>"), Bm = /* @__PURE__ */ fe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Km = /* @__PURE__ */ U('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function fd(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "nodeComponent", 7), d = m(t, "bgColor", 7), f = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), h = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), y = m(t, "height", 7, 150), w = m(t, "pannable", 7, !0), C = m(t, "zoomable", 7, !0), $ = m(t, "inversePan", 7), b = m(t, "zoomStep", 7), _ = m(t, "class", 7), O = /* @__PURE__ */ He(t, [
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
  ]), S = /* @__PURE__ */ P(Qt), M = /* @__PURE__ */ P(() => c(S).ariaLabelConfig);
  const z = i() === void 0 ? void 0 : Fi(i()), R = Fi(o()), q = Fi(s()), A = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let k = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${c(S).flowId}`), N = /* @__PURE__ */ P(() => ({
    x: -c(S).viewport.x / c(S).viewport.zoom,
    y: -c(S).viewport.y / c(S).viewport.zoom,
    width: c(S).width / c(S).viewport.zoom,
    height: c(S).height / c(S).viewport.zoom
  })), x = /* @__PURE__ */ P(() => c(S).nodeLookup.size > 0 ? lc(xo(c(S).nodeLookup, { filter: (J) => !J.hidden }), c(N)) : c(N)), L = /* @__PURE__ */ P(() => c(x).width / g()), E = /* @__PURE__ */ P(() => c(x).height / y()), H = /* @__PURE__ */ P(() => Math.max(c(L), c(E))), j = /* @__PURE__ */ P(() => c(H) * g()), Z = /* @__PURE__ */ P(() => c(H) * y()), V = /* @__PURE__ */ P(() => 5 * c(H)), W = /* @__PURE__ */ P(() => c(x).x - (c(j) - c(x).width) / 2 - c(V)), Q = /* @__PURE__ */ P(() => c(x).y - (c(Z) - c(x).height) / 2 - c(V)), te = /* @__PURE__ */ P(() => c(j) + c(V) * 2), K = /* @__PURE__ */ P(() => c(Z) + c(V) * 2);
  const X = () => c(H);
  var G = {
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
      return u();
    },
    set nodeComponent(J) {
      u(J), v();
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
      return p();
    },
    set maskStrokeColor(J) {
      p(J), v();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(J) {
      h(J), v();
    },
    get width() {
      return g();
    },
    set width(J = 200) {
      g(J), v();
    },
    get height() {
      return y();
    },
    set height(J = 150) {
      y(J), v();
    },
    get pannable() {
      return w();
    },
    set pannable(J = !0) {
      w(J), v();
    },
    get zoomable() {
      return C();
    },
    set zoomable(J = !0) {
      C(J), v();
    },
    get inversePan() {
      return $();
    },
    set inversePan(J) {
      $(J), v();
    },
    get zoomStep() {
      return b();
    },
    set zoomStep(J) {
      b(J), v();
    },
    get class() {
      return _();
    },
    set class(J) {
      _(J), v();
    }
  }, oe = Km(), se = ne(oe);
  {
    let J = /* @__PURE__ */ P(() => ["svelte-flow__minimap", _()]);
    Lf(se, () => ({ "--xy-minimap-background-color-props": d() })), _o(se.lastChild, Be(
      {
        get position() {
          return n();
        },
        get class() {
          return c(J);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => O,
      {
        children: (we, ce) => {
          var ee = Ne(), re = ne(ee);
          {
            var pe = (ge) => {
              var xe = Bm();
              let de;
              var Ce = B(xe);
              {
                var Te = (Ve) => {
                  var Ie = jm(), De = B(Ie, !0);
                  I(Ie), $e(() => {
                    be(Ie, "id", c(k)), je(De, r() ?? c(M)["minimap.ariaLabel"]);
                  }), T(Ve, Ie);
                };
                ae(Ce, (Ve) => {
                  (r() ?? c(M)["minimap.ariaLabel"]) && Ve(Te);
                });
              }
              var Y = D(Ce);
              gt(Y, 17, () => c(S).nodes, (Ve) => Ve.id, (Ve, Ie) => {
                const De = /* @__PURE__ */ P(() => c(S).nodeLookup.get(c(Ie).id));
                var tt = Ne(), Et = ne(tt);
                {
                  var Xe = (ze) => {
                    const he = /* @__PURE__ */ P(() => Wn(c(De)));
                    {
                      let Ae = /* @__PURE__ */ P(() => z?.(c(De))), vt = /* @__PURE__ */ P(() => R(c(De))), Ge = /* @__PURE__ */ P(() => q(c(De)));
                      pd(ze, Be(
                        {
                          get x() {
                            return c(De).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(De).internals.positionAbsolute.y;
                          }
                        },
                        () => c(he),
                        {
                          get selected() {
                            return c(De).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ae);
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
                            return A;
                          },
                          get class() {
                            return c(Ge);
                          }
                        }
                      ));
                    }
                  };
                  ae(Et, (ze) => {
                    c(De) && uc(c(De)) && ze(Xe);
                  });
                }
                T(Ve, tt);
              });
              var We = D(Y);
              I(xe), ft(xe, (Ve, Ie) => Im?.(Ve, Ie), () => ({
                store: c(S),
                panZoom: c(S).panZoom,
                getViewScale: X,
                translateExtent: c(S).translateExtent,
                width: c(S).width,
                height: c(S).height,
                inversePan: $(),
                zoomStep: b(),
                pannable: w(),
                zoomable: C()
              })), $e(
                (Ve) => {
                  be(xe, "width", g()), be(xe, "height", y()), be(xe, "viewBox", `${c(W) ?? ""} ${c(Q) ?? ""} ${c(te) ?? ""} ${c(K) ?? ""}`), be(xe, "aria-labelledby", c(k)), de = dt(xe, "", de, Ve), be(We, "d", `M${c(W) - c(V)},${c(Q) - c(V)}h${c(te) + c(V) * 2}v${c(K) + c(V) * 2}h${-c(te) - c(V) * 2}z
      M${c(N).x ?? ""},${c(N).y ?? ""}h${c(N).width ?? ""}v${c(N).height ?? ""}h${-c(N).width}z`);
                },
                [
                  () => ({
                    "--xy-minimap-mask-background-color-props": f(),
                    "--xy-minimap-mask-stroke-color-props": p(),
                    "--xy-minimap-mask-stroke-width-props": h() ? h() * c(H) : void 0
                  })
                ]
              ), T(ge, xe);
            };
            ae(re, (ge) => {
              c(S).panZoom && ge(pe);
            });
          }
          T(we, ee);
        },
        $$slots: { default: !0 }
      }
    )), I(se);
  }
  return T(e, oe), ue(G);
}
ie(
  fd,
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
var Rm = /* @__PURE__ */ U("<div><!></div>");
function hd(e, t) {
  le(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => ye.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ He(t, [
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
  const u = Qt(), { getNodesBounds: d } = pt(), f = zn("svelteflow__node_id");
  let p = /* @__PURE__ */ P(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (O, S) => {
      const M = u.nodeLookup.get(S);
      return M && O.push(M), O;
    },
    []
  ))), h = /* @__PURE__ */ P(() => {
    const O = d(c(p));
    return O ? n0(O, u.viewport, r(), i(), o()) : "";
  }), g = /* @__PURE__ */ P(() => c(p).length === 0 ? 1 : Math.max(...c(p).map((O) => (O.internals.z || 5) + 1))), y = /* @__PURE__ */ P(() => u.nodes.filter((O) => O.selected).length), w = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(y) === 1);
  var C = {
    get nodeId() {
      return n();
    },
    set nodeId(O) {
      n(O), v();
    },
    get position() {
      return r();
    },
    set position(O = ye.Top) {
      r(O), v();
    },
    get align() {
      return o();
    },
    set align(O = "center") {
      o(O), v();
    },
    get offset() {
      return i();
    },
    set offset(O = 10) {
      i(O), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(O) {
      s(O), v();
    },
    get children() {
      return a();
    },
    set children(O) {
      a(O), v();
    }
  }, $ = Ne(), b = ne($);
  {
    var _ = (O) => {
      var S = Rm();
      et(
        S,
        (z, R) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": z,
          ...l,
          [rn]: R
        }),
        [
          () => c(p).reduce((z, R) => `${z}${R.id} `, "").trim(),
          () => ({
            display: Pc().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(g)
          })
        ]
      );
      var M = B(S);
      qe(M, () => a() ?? ct), I(S), ft(S, (z, R) => Ec?.(z, R), () => "root"), T(O, S);
    };
    ae(b, (O) => {
      u.domNode && c(w) && c(p) && O(_);
    });
  }
  return T(e, $), ue(C);
}
ie(
  hd,
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
function $n(e) {
  const t = /* @__PURE__ */ P(Qt), n = /* @__PURE__ */ P(() => c(t).nodes), r = /* @__PURE__ */ P(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!f0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const ml = "tinyflow-component", Zm = [
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
], aa = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Ym = [
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
    const t = document.createElement(ml);
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
    const n = document.createElement(ml);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Xm = () => {
  let e = /* @__PURE__ */ Ee([]), t = /* @__PURE__ */ Ee([]), n = /* @__PURE__ */ Ee({ x: 250, y: 100, zoom: 1 });
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
}, Ze = Xm();
var Gm = /* @__PURE__ */ U("<button><!></button>");
function Le(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ He(t, [
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
  }, s = Gm();
  et(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return qe(a, () => n() ?? ct), I(s), T(e, s), ue(i);
}
ie(Le, { children: {}, primary: {} }, [], [], !0);
var Um = /* @__PURE__ */ U("<input/>");
function gd(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Um();
  et(
    r,
    () => ({
      type: "checkbox",
      ...n,
      class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    !0
  ), T(e, r), ue();
}
ie(gd, {}, [], [], !0);
var Qm = /* @__PURE__ */ U('<div><input type="hidden"/> <!> <!></div>');
const Jm = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function vd(e, t) {
  le(t, !0), Me(e, Jm);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ He(t, [
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
      n(h), v();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), v();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), v();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), v();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), v();
    }
  }, u = Qm();
  et(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = B(u);
  Jn(d);
  var f = D(d, 2);
  Ue(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = D(f, 2);
  return Le(p, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, g) => {
      ve();
      var y = ke();
      $e(() => je(y, i())), T(h, y);
    },
    $$slots: { default: !0 }
  }), I(u), $e(() => jo(d, o())), T(e, u), ue(l);
}
ie(
  vd,
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
var e2 = /* @__PURE__ */ U("<input/>");
function Ue(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = e2();
  et(
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
    !0
  ), T(e, r), ue();
}
ie(Ue, {}, [], [], !0);
var t2 = /* @__PURE__ */ U("<textarea></textarea>");
function Ke(e, t) {
  le(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = {
    get value() {
      return n();
    },
    set value(s) {
      n(s), v();
    }
  }, i = t2();
  return sf(i), et(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), T(e, i), ue(o);
}
ie(Ke, { value: {} }, [], [], !0);
var n2 = /* @__PURE__ */ U('<div role="button"><!></div>'), r2 = /* @__PURE__ */ U("<div></div>");
function md(e, t) {
  const n = Ta(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Ta(n, ["items", "onChange", "activeIndex"]);
  le(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
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
  _u();
  var u = r2();
  return et(u, () => ({
    ...r,
    class: `tf-tabs ${Is(r), lt(() => r.class) ?? ""}`
  })), gt(u, 5, o, Or, (d, f, p) => {
    var h = n2();
    be(h, "tabindex", p), h.__click = () => a(c(f), p), h.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), a(c(f), p));
    };
    var g = B(h);
    {
      var y = (C) => {
        var $ = ke();
        $e(() => je($, (c(f), lt(() => c(f).label)))), T(C, $);
      }, w = (C) => {
        var $ = Ne(), b = ne($);
        qe(b, () => (c(f), lt(() => c(f).label) ?? ct)), T(C, $);
      };
      ae(g, (C) => {
        c(f), lt(() => typeof c(f).label == "string") ? C(y) : C(w, !1);
      });
    }
    I(h), $e(() => Nt(h, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), T(d, h);
  }), I(u), T(e, u), ue(l);
}
Rn(["click", "keydown"]);
ie(md, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var o2 = (e, t, n) => t(c(n)), i2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, s2 = /* @__PURE__ */ U('<span class="tf-collapse-item-title-icon"><!></span>'), a2 = /* @__PURE__ */ U('<div class="tf-collapse-item-description"><!></div>'), l2 = /* @__PURE__ */ U('<div class="tf-collapse-item-content"><!></div>'), u2 = /* @__PURE__ */ U('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), c2 = /* @__PURE__ */ U("<div></div>");
const d2 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function yd(e, t) {
  le(t, !0), Me(e, d2);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Ht([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
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
  }, a = c2();
  return gt(a, 21, n, Or, (l, u, d) => {
    var f = u2(), p = B(f);
    be(p, "tabindex", d), p.__click = [o2, i, u], p.__keydown = [i2, i, u];
    var h = B(p);
    {
      var g = (O) => {
        var S = s2(), M = B(S);
        On(M, {
          get target() {
            return c(u).icon;
          }
        }), I(S), T(O, S);
      };
      ae(h, (O) => {
        c(u).icon && O(g);
      });
    }
    var y = D(h, 2);
    On(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = D(y, 2);
    I(p);
    var C = D(p, 2);
    {
      var $ = (O) => {
        var S = a2(), M = B(S);
        On(M, {
          get target() {
            return c(u).description;
          }
        }), I(S), T(O, S);
      };
      ae(C, (O) => {
        c(u).description && O($);
      });
    }
    var b = D(C, 2);
    {
      var _ = (O) => {
        var S = l2(), M = B(S);
        On(M, {
          get target() {
            return c(u).content;
          }
        }), I(S), T(O, S);
      };
      ae(b, (O) => {
        o().includes(c(u).key) && O(_);
      });
    }
    I(f), $e((O) => Nt(w, 1, `tf-collapse-item-title-arrow ${O ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), T(l, f);
  }), I(a), $e(() => {
    dt(a, t.style), Nt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), T(e, a), ue(s);
}
Rn(["click", "keydown"]);
ie(yd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function On(e, t) {
  le(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), v();
    }
  }, o = Ne(), i = ne(o);
  {
    var s = (l) => {
      var u = Ne(), d = ne(u);
      qe(d, () => n() ?? ct), T(l, u);
    }, a = (l) => {
      var u = Ne(), d = ne(u);
      Ks(d, n), T(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return T(e, o), ue(r);
}
ie(On, { target: {} }, [], [], !0);
var p2 = (e, t, n) => t(c(n)), f2 = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), h2 = /* @__PURE__ */ U('<div class="tf-select-content-children"><!></div>'), g2 = /* @__PURE__ */ U('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), v2 = /* @__PURE__ */ U('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), m2 = /* @__PURE__ */ U("<!> <!>", 1), y2 = /* @__PURE__ */ U('<div class="tf-select-input-placeholder"> </div>'), w2 = /* @__PURE__ */ U('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), b2 = /* @__PURE__ */ U("<div><!></div>");
function ut(e, t) {
  le(t, !0);
  const n = ($, b = ct) => {
    var _ = Ne(), O = ne(_);
    gt(O, 19, b, (S, M) => `${M}_${S.value}`, (S, M) => {
      var z = g2(), R = ne(z);
      R.__click = [p2, g, M];
      var q = B(R), A = B(q);
      {
        var k = (E) => {
          var H = f2();
          T(E, H);
        };
        ae(A, (E) => {
          c(M).children && c(M).children.length > 0 && E(k);
        });
      }
      I(q);
      var N = D(q, 2);
      On(N, {
        get target() {
          return c(M).label;
        }
      }), I(R);
      var x = D(R, 2);
      {
        var L = (E) => {
          var H = h2(), j = B(H);
          n(j, () => c(M).children), I(H), T(E, H);
        };
        ae(x, (E) => {
          c(M).children && c(M).children.length > 0 && (a() || u().includes(c(M).value)) && E(L);
        });
      }
      T(S, z);
    }), T($, _);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ He(t, [
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
  ]), p = /* @__PURE__ */ P(() => {
    const $ = [], b = (_) => {
      for (let O of _)
        i().length > 0 ? i().includes(O.value) && $.push(O) : s().includes(O.value) && $.push(O), O.children && O.children.length > 0 && b(O.children);
    };
    return b(r()), $;
  }), h;
  function g($) {
    h?.hide(), o()?.($);
  }
  var y = {
    get items() {
      return r();
    },
    set items($) {
      r($), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect($) {
      o($), v();
    },
    get value() {
      return i();
    },
    set value($ = []) {
      i($), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue($ = []) {
      s($), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll($ = !0) {
      a($), v();
    },
    get multiple() {
      return l();
    },
    set multiple($ = !1) {
      l($), v();
    },
    get expandValue() {
      return u();
    },
    set expandValue($ = []) {
      u($), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), v();
    }
  }, w = b2();
  et(w, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var C = B(w);
  return Tt(
    Yn(C, {
      floating: ($) => {
        var b = v2(), _ = B(b);
        n(_, r), I(b), T($, b);
      },
      children: ($, b) => {
        var _ = w2();
        et(_, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var O = B(_);
        gt(
          O,
          23,
          () => c(p),
          (S, M) => `${M}_${S.value}`,
          (S, M, z) => {
            var R = Ne(), q = ne(R);
            {
              var A = (N) => {
                var x = Ne(), L = ne(x);
                {
                  var E = (H) => {
                    On(H, {
                      get target() {
                        return c(M).label;
                      }
                    });
                  };
                  ae(L, (H) => {
                    c(z) === 0 && H(E);
                  });
                }
                T(N, x);
              }, k = (N) => {
                var x = m2(), L = ne(x);
                On(L, {
                  get target() {
                    return c(M).label;
                  }
                });
                var E = D(L, 2);
                {
                  var H = (j) => {
                    var Z = ke(",");
                    T(j, Z);
                  };
                  ae(E, (j) => {
                    c(z) < c(p).length - 1 && j(H);
                  });
                }
                T(N, x);
              };
              ae(q, (N) => {
                l() ? N(k, !1) : N(A);
              });
            }
            T(S, R);
          },
          (S) => {
            var M = y2(), z = B(M, !0);
            I(M), $e(() => je(z, d())), T(S, M);
          }
        ), I(O), ve(2), I(_), T($, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => h = $,
    () => h
  ), I(w), T(e, w), ue(y);
}
Rn(["click"]);
ie(
  ut,
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
const lo = Math.min, Cr = Math.max, ci = Math.round, ln = (e) => ({
  x: e,
  y: e
}), x2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, C2 = {
  start: "end",
  end: "start"
};
function ms(e, t, n) {
  return Cr(e, lo(t, n));
}
function So(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ar(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function wd(e) {
  return e === "x" ? "y" : "x";
}
function la(e) {
  return e === "y" ? "height" : "width";
}
const $2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Tn(e) {
  return $2.has(ar(e)) ? "y" : "x";
}
function ua(e) {
  return wd(Tn(e));
}
function k2(e, t, n) {
  n === void 0 && (n = !1);
  const r = No(e), o = ua(e), i = la(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = di(s)), [s, di(s)];
}
function _2(e) {
  const t = di(e);
  return [ys(e), t, ys(t)];
}
function ys(e) {
  return e.replace(/start|end/g, (t) => C2[t]);
}
const yl = ["left", "right"], wl = ["right", "left"], S2 = ["top", "bottom"], N2 = ["bottom", "top"];
function E2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? wl : yl : t ? yl : wl;
    case "left":
    case "right":
      return t ? S2 : N2;
    default:
      return [];
  }
}
function P2(e, t, n, r) {
  const o = No(e);
  let i = E2(ar(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ys)))), i;
}
function di(e) {
  return e.replace(/left|right|bottom|top/g, (t) => x2[t]);
}
function L2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bd(e) {
  return typeof e != "number" ? L2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function pi(e) {
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
  const i = Tn(t), s = ua(t), a = la(s), l = ar(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (No(t)) {
    case "start":
      h[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const O2 = async (e, t, n) => {
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
    y: f
  } = bl(u, r, l), p = r, h = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: C
    } = a[y], {
      x: $,
      y: b,
      data: _,
      reset: O
    } = await C({
      x: d,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = $ ?? d, f = b ?? f, h = {
      ...h,
      [w]: {
        ...h[w],
        ..._
      }
    }, O && g <= 50 && (g++, typeof O == "object" && (O.placement && (p = O.placement), O.rects && (u = O.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : O.rects), {
      x: d,
      y: f
    } = bl(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function xd(e, t) {
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
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = So(t, e), g = bd(h), y = a[p ? f === "floating" ? "reference" : "floating" : f], w = pi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), C = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement($)) ? await (i.getScale == null ? void 0 : i.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = pi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: C,
    offsetParent: $,
    strategy: l
  }) : C);
  return {
    top: (w.top - _.top + g.top) / b.y,
    bottom: (_.bottom - w.bottom + g.bottom) / b.y,
    left: (w.left - _.left + g.left) / b.x,
    right: (_.right - w.right + g.right) / b.x
  };
}
const T2 = (e) => ({
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
    } = So(e, t) || {};
    if (u == null)
      return {};
    const f = bd(d), p = {
      x: n,
      y: r
    }, h = ua(o), g = la(h), y = await s.getDimensions(u), w = h === "y", C = w ? "top" : "left", $ = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", _ = i.reference[g] + i.reference[h] - p[h] - i.floating[g], O = p[h] - i.reference[h], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let M = S ? S[b] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(S))) && (M = a.floating[b] || i.floating[g]);
    const z = _ / 2 - O / 2, R = M / 2 - y[g] / 2 - 1, q = lo(f[C], R), A = lo(f[$], R), k = q, N = M - y[g] - A, x = M / 2 - y[g] / 2 + z, L = ms(k, x, N), E = !l.arrow && No(o) != null && x !== L && i.reference[g] / 2 - (x < k ? q : A) - y[g] / 2 < 0, H = E ? x < k ? x - k : x - N : 0;
    return {
      [h]: p[h] + H,
      data: {
        [h]: L,
        centerOffset: x - L - H,
        ...E && {
          alignmentOffset: H
        }
      },
      reset: E
    };
  }
}), M2 = function(e) {
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
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: y = !0,
        ...w
      } = So(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = ar(o), $ = Tn(a), b = ar(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), O = p || (b || !y ? [di(a)] : _2(a)), S = g !== "none";
      !p && S && O.push(...P2(a, y, g, _));
      const M = [a, ...O], z = await xd(t, w), R = [];
      let q = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && R.push(z[C]), f) {
        const x = k2(o, s, _);
        R.push(z[x[0]], z[x[1]]);
      }
      if (q = [...q, {
        placement: o,
        overflows: R
      }], !R.every((x) => x <= 0)) {
        var A, k;
        const x = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, L = M[x];
        if (L && (!(f === "alignment" && $ !== Tn(L)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        q.every((H) => Tn(H.placement) === $ ? H.overflows[0] > 0 : !0)))
          return {
            data: {
              index: x,
              overflows: q
            },
            reset: {
              placement: L
            }
          };
        let E = (k = q.filter((H) => H.overflows[0] <= 0).sort((H, j) => H.overflows[1] - j.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!E)
          switch (h) {
            case "bestFit": {
              var N;
              const H = (N = q.filter((j) => {
                if (S) {
                  const Z = Tn(j.placement);
                  return Z === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Z === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((Z) => Z > 0).reduce((Z, V) => Z + V, 0)]).sort((j, Z) => j[1] - Z[1])[0]) == null ? void 0 : N[0];
              H && (E = H);
              break;
            }
            case "initialPlacement":
              E = a;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
}, V2 = /* @__PURE__ */ new Set(["left", "top"]);
async function z2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ar(n), a = No(n), l = Tn(n) === "y", u = V2.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = So(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof g == "number" && (h = a === "end" ? g * -1 : g), l ? {
    x: h * d,
    y: p * u
  } : {
    x: p * u,
    y: h * d
  };
}
const H2 = function(e) {
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
      } = t, l = await z2(t, e);
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
}, D2 = function(e) {
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
              x: C,
              y: $
            } = w;
            return {
              x: C,
              y: $
            };
          }
        },
        ...l
      } = So(e, t), u = {
        x: n,
        y: r
      }, d = await xd(t, l), f = Tn(ar(o)), p = wd(f);
      let h = u[p], g = u[f];
      if (i) {
        const w = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", $ = h + d[w], b = h - d[C];
        h = ms($, h, b);
      }
      if (s) {
        const w = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", $ = g + d[w], b = g - d[C];
        g = ms($, g, b);
      }
      const y = a.fn({
        ...t,
        [p]: h,
        [f]: g
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [p]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function Oi() {
  return typeof window < "u";
}
function Kr(e) {
  return Cd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Lt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kn(e) {
  var t;
  return (t = (Cd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cd(e) {
  return Oi() ? e instanceof Node || e instanceof Lt(e).Node : !1;
}
function qt(e) {
  return Oi() ? e instanceof Element || e instanceof Lt(e).Element : !1;
}
function cn(e) {
  return Oi() ? e instanceof HTMLElement || e instanceof Lt(e).HTMLElement : !1;
}
function xl(e) {
  return !Oi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Lt(e).ShadowRoot;
}
const A2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Eo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !A2.has(o);
}
const I2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function j2(e) {
  return I2.has(Kr(e));
}
const B2 = [":popover-open", ":modal"];
function Ti(e) {
  return B2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const K2 = ["transform", "translate", "scale", "rotate", "perspective"], R2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Z2 = ["paint", "layout", "strict", "content"];
function ca(e) {
  const t = da(), n = qt(e) ? Ft(e) : e;
  return K2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || R2.some((r) => (n.willChange || "").includes(r)) || Z2.some((r) => (n.contain || "").includes(r));
}
function W2(e) {
  let t = An(e);
  for (; cn(t) && !Ar(t); ) {
    if (ca(t))
      return t;
    if (Ti(t))
      return null;
    t = An(t);
  }
  return null;
}
function da() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Y2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ar(e) {
  return Y2.has(Kr(e));
}
function Ft(e) {
  return Lt(e).getComputedStyle(e);
}
function Mi(e) {
  return qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function An(e) {
  if (Kr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    xl(e) && e.host || // Fallback.
    kn(e)
  );
  return xl(t) ? t.host : t;
}
function $d(e) {
  const t = An(e);
  return Ar(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : cn(t) && Eo(t) ? t : $d(t);
}
function kd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Lt(o);
  return i ? (ws(s), t.concat(s, s.visualViewport || [], Eo(o) ? o : [], [])) : t.concat(o, kd(o, []));
}
function ws(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _d(e) {
  const t = Ft(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = cn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = ci(n) !== i || ci(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Sd(e) {
  return qt(e) ? e : e.contextElement;
}
function $r(e) {
  const t = Sd(e);
  if (!cn(t))
    return ln(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = _d(t);
  let s = (i ? ci(n.width) : n.width) / r, a = (i ? ci(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const q2 = /* @__PURE__ */ ln(0);
function Nd(e) {
  const t = Lt(e);
  return !da() || !t.visualViewport ? q2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function F2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Lt(e) ? !1 : t;
}
function uo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Sd(e);
  let s = ln(1);
  t && (r ? qt(r) && (s = $r(r)) : s = $r(e));
  const a = F2(i, n, r) ? Nd(i) : ln(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = Lt(i), h = r && qt(r) ? Lt(r) : r;
    let g = p, y = ws(g);
    for (; y && r && h !== g; ) {
      const w = $r(y), C = y.getBoundingClientRect(), $ = Ft(y), b = C.left + (y.clientLeft + parseFloat($.paddingLeft)) * w.x, _ = C.top + (y.clientTop + parseFloat($.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, f *= w.y, l += b, u += _, g = Lt(y), y = ws(g);
    }
  }
  return pi({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Vi(e, t) {
  const n = Mi(e).scrollLeft;
  return t ? t.left + n : uo(kn(e)).left + n;
}
function Ed(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Vi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function X2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = kn(r), a = t ? Ti(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ln(1);
  const d = ln(0), f = cn(r);
  if ((f || !f && !i) && ((Kr(r) !== "body" || Eo(s)) && (l = Mi(r)), cn(r))) {
    const h = uo(r);
    u = $r(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !f && !i ? Ed(s, l) : ln(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function G2(e) {
  return Array.from(e.getClientRects());
}
function U2(e) {
  const t = kn(e), n = Mi(e), r = e.ownerDocument.body, o = Cr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Cr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Vi(e);
  const a = -n.scrollTop;
  return Ft(r).direction === "rtl" && (s += Cr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Cl = 25;
function Q2(e, t) {
  const n = Lt(e), r = kn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = da();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Vi(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= Cl && (i -= g);
  } else u <= Cl && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const J2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ey(e, t) {
  const n = uo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = cn(e) ? $r(e) : ln(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = Q2(e, n);
  else if (t === "document")
    r = U2(kn(e));
  else if (qt(t))
    r = ey(t, n);
  else {
    const o = Nd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return pi(r);
}
function Pd(e, t) {
  const n = An(e);
  return n === t || !qt(n) || Ar(n) ? !1 : Ft(n).position === "fixed" || Pd(n, t);
}
function ty(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = kd(e, []).filter((a) => qt(a) && Kr(a) !== "body"), o = null;
  const i = Ft(e).position === "fixed";
  let s = i ? An(e) : e;
  for (; qt(s) && !Ar(s); ) {
    const a = Ft(s), l = ca(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && J2.has(o.position) || Eo(s) && !l && Pd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = An(s);
  }
  return t.set(e, r), r;
}
function ny(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ti(t) ? [] : ty(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = $l(t, u, o);
    return l.top = Cr(d.top, l.top), l.right = lo(d.right, l.right), l.bottom = lo(d.bottom, l.bottom), l.left = Cr(d.left, l.left), l;
  }, $l(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ry(e) {
  const {
    width: t,
    height: n
  } = _d(e);
  return {
    width: t,
    height: n
  };
}
function oy(e, t, n) {
  const r = cn(t), o = kn(t), i = n === "fixed", s = uo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ln(0);
  function u() {
    l.x = Vi(o);
  }
  if (r || !r && !i)
    if ((Kr(t) !== "body" || Eo(o)) && (a = Mi(t)), r) {
      const h = uo(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Ed(o, a) : ln(0), f = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Xi(e) {
  return Ft(e).position === "static";
}
function kl(e, t) {
  if (!cn(e) || Ft(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return kn(e) === n && (n = n.ownerDocument.body), n;
}
function Ld(e, t) {
  const n = Lt(e);
  if (Ti(e))
    return n;
  if (!cn(e)) {
    let o = An(e);
    for (; o && !Ar(o); ) {
      if (qt(o) && !Xi(o))
        return o;
      o = An(o);
    }
    return n;
  }
  let r = kl(e, t);
  for (; r && j2(r) && Xi(r); )
    r = kl(r, t);
  return r && Ar(r) && Xi(r) && !ca(r) ? n : r || W2(e) || n;
}
const iy = async function(e) {
  const t = this.getOffsetParent || Ld, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: oy(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function sy(e) {
  return Ft(e).direction === "rtl";
}
const ay = {
  convertOffsetParentRelativeRectToViewportRelativeRect: X2,
  getDocumentElement: kn,
  getClippingRect: ny,
  getOffsetParent: Ld,
  getElementRects: iy,
  getClientRects: G2,
  getDimensions: ry,
  getScale: $r,
  isElement: qt,
  isRTL: sy
}, ly = H2, uy = D2, cy = M2, dy = T2, py = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ay,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return O2(e, t, {
    ...o,
    platform: i
  });
}, fy = ({
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
    const C = document.querySelector(e);
    if (C)
      e = C;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const C = document.querySelector(n);
    if (C)
      u = C;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", u.firstElementChild.before(d));
  function f() {
    py(e, u, {
      placement: r,
      middleware: [
        ly(o),
        // 手动偏移配置
        cy(i),
        //自动翻转
        uy(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [dy({ element: d })] : []
      ]
    }).then(({ x: C, y: $, placement: b, middlewareData: _ }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${$}px`
      }), l) {
        const { x: O, y: S } = _.arrow, M = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: O != null ? `${O}px` : "",
          top: S != null ? `${S}px` : "",
          right: "",
          bottom: "",
          [M]: "2px"
        });
      }
    });
  }
  let p = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), p = !0, f();
  }
  function g() {
    u.style.display = "none", l && (d.style.display = "none"), p = !1;
  }
  function y(C) {
    C.stopPropagation(), p ? g() : h();
  }
  function w(C) {
    u.contains(C.target) || g();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((C) => {
    e.addEventListener(C, y);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach((C) => {
        e.removeEventListener(C, y);
      }), document.removeEventListener("click", w);
    },
    hide() {
      g();
    },
    isVisible() {
      return p;
    }
  };
};
var hy = /* @__PURE__ */ U('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Yn(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Zn(() => (a = fy({
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
  }, d = hy(), f = B(d), p = B(f);
  qe(p, n), I(f), Tt(f, (y) => i = y, () => i);
  var h = D(f, 2), g = B(h);
  return qe(g, r), I(h), Tt(h, (y) => s = y, () => s), I(d), T(e, d), ue(u);
}
ie(Yn, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Oe(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), v();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), v();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), v();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), v();
    }
  }, a = Ne(), l = ne(a);
  return Vf(l, () => `h${r()}`, !1, (u, d) => {
    et(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Ne(), p = ne(f);
    qe(p, () => n() ?? ct), T(d, f);
  }), T(e, a), ue(s);
}
ie(Oe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var gy = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const vy = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Po(e, t) {
  le(t, !0), Me(e, vy);
  const n = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Le(e, Be(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = gy();
      T(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
ie(Po, {}, [], [], !0);
const my = () => ({ deleteNode: (e) => {
  Ze.removeNode(e), Ze.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), lr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, yy = () => ({ copyNode: (e) => {
  const t = Ze.getNode(e);
  if (t) {
    const n = lr(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ze.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Fe = () => zn("svelteflow__node_id"), In = () => zn("tinyflow_options");
var wy = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), by = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), xy = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Cy = /* @__PURE__ */ U('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), $y = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, ky = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, _y = /* @__PURE__ */ U('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), Sy = /* @__PURE__ */ U('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), Ny = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Ey = /* @__PURE__ */ U('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), Py = /* @__PURE__ */ U('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Ly = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Bt(e, t) {
  le(t, !0), Me(e, Ly);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), f = m(t, "allowSettingOfCondition", 7, !0), p = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), g = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: C } = pt(), $ = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: b } = my(), { copyNode: _ } = yy(), O = In(), S = () => {
    O.onNodeExecute?.(C(r()));
  };
  let M = Fe();
  var z = {
    get data() {
      return n();
    },
    set data(V) {
      n(V), v();
    },
    get id() {
      return r();
    },
    set id(V = "") {
      r(V), v();
    },
    get icon() {
      return o();
    },
    set icon(V) {
      o(V), v();
    },
    get handle() {
      return i();
    },
    set handle(V) {
      i(V), v();
    },
    get children() {
      return s();
    },
    set children(V) {
      s(V), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(V = !0) {
      a(V), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(V = !0) {
      l(V), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(V = !0) {
      u(V), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(V = !0) {
      d(V), v();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(V = !0) {
      f(V), v();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(V = !0) {
      p(V), v();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(V = !0) {
      h(V), v();
    },
    get onCollapse() {
      return g();
    },
    set onCollapse(V) {
      g(V), v();
    }
  }, R = Py(), q = ne(R);
  {
    var A = (V) => {
      hd(V, {
        get position() {
          return ye.Top;
        },
        align: "start",
        children: (W, Q) => {
          var te = Ey(), K = B(te);
          {
            var X = (ee) => {
              Le(ee, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (re, pe) => {
                  var ge = wy();
                  T(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ae(K, (ee) => {
              u() && ee(X);
            });
          }
          var G = D(K, 2);
          {
            var oe = (ee) => {
              Le(ee, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (re, pe) => {
                  var ge = by();
                  T(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ae(G, (ee) => {
              l() && ee(oe);
            });
          }
          var se = D(G, 2);
          {
            var J = (ee) => {
              Le(ee, {
                class: "tf-node-toolbar-item",
                onclick: S,
                children: (re, pe) => {
                  var ge = xy();
                  T(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ae(se, (ee) => {
              a() && ee(J);
            });
          }
          var we = D(se, 2);
          {
            var ce = (ee) => {
              Yn(ee, {
                placement: "bottom",
                floating: (re) => {
                  var pe = Sy(), ge = B(pe), xe = D(B(ge));
                  Ue(xe, {
                    style: "width: 100%;",
                    onchange: (Xe) => {
                      const ze = Xe.target.value;
                      w(M, { title: ze });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(ge);
                  var de = D(ge, 2), Ce = D(B(de));
                  Ke(Ce, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Xe) => {
                      const ze = Xe.target.value;
                      w(M, { description: ze });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(de);
                  var Te = D(de, 2);
                  {
                    var Y = (Xe) => {
                      var ze = Cy(), he = D(B(ze));
                      Ke(he, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ae) => {
                          const vt = Ae.target.value;
                          w(M, { condition: vt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(ze), T(Xe, ze);
                    };
                    ae(Te, (Xe) => {
                      f() && Xe(Y);
                    });
                  }
                  var We = D(Te, 2), Ve = D(B(We), 2);
                  Jn(Ve), Ve.__change = [$y, w, M], I(We);
                  var Ie = D(We, 2), De = D(B(Ie), 2);
                  Jn(De), De.__change = [ky, w, M], I(Ie);
                  var tt = D(Ie, 2);
                  {
                    var Et = (Xe) => {
                      var ze = _y(), he = ne(ze), Ae = D(B(he));
                      {
                        let st = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        Ke(Ae, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Sn) => {
                            const Nn = Sn.target.value;
                            w(M, { loopIntervalMs: Nn });
                          },
                          get value() {
                            return c(st);
                          }
                        });
                      }
                      I(he);
                      var vt = D(he, 2), Ge = D(B(vt));
                      {
                        let st = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        Ke(Ge, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Sn) => {
                            const Nn = Sn.target.value;
                            w(M, { maxLoopCount: Nn });
                          },
                          get value() {
                            return c(st);
                          }
                        });
                      }
                      I(vt);
                      var xt = D(vt, 2), it = D(B(xt));
                      Ke(it, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (st) => {
                          const Sn = st.target.value;
                          w(M, { loopBreakCondition: Sn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(xt), T(Xe, ze);
                    };
                    ae(tt, (Xe) => {
                      n().loopEnable && Xe(Et);
                    });
                  }
                  I(pe), $e(() => {
                    Na(Ve, !!n().async), Na(De, !!n().loopEnable);
                  }), T(re, pe);
                },
                children: (re, pe) => {
                  Le(re, {
                    class: "tf-node-toolbar-item",
                    children: (ge, xe) => {
                      var de = Ny();
                      T(ge, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(we, (ee) => {
              d() && ee(ce);
            });
          }
          I(te), T(W, te);
        },
        $$slots: { default: !0 }
      });
    };
    ae(q, (V) => {
      (a() || l() || u()) && V(A);
    });
  }
  var k = D(q, 2), N = D(B(k), 2), x = B(N);
  yd(x, {
    get items() {
      return c($);
    },
    get activeKeys() {
      return y;
    },
    onChange: (V, W) => {
      w(r(), { expand: W?.includes("key") }), g()?.(W?.includes("key") ? "key" : "");
    }
  }), I(N), I(k);
  var L = D(k, 2);
  {
    var E = (V) => {
      Dn(V, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(L, (V) => {
      h() && V(E);
    });
  }
  var H = D(L, 2);
  {
    var j = (V) => {
      Dn(V, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(H, (V) => {
      p() && V(j);
    });
  }
  var Z = D(H, 2);
  return qe(Z, () => i() ?? ct), T(e, R), ue(z);
}
Rn(["change"]);
ie(
  Bt,
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
var Oy = /* @__PURE__ */ U('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), Ty = /* @__PURE__ */ U('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), My = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Vy = /* @__PURE__ */ U('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const zy = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Od(e, t) {
  le(t, !0), Me(e, zy);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = Fe(), i = $n(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = pt(), l = (z, R) => {
    a(o, (q) => {
      let A = q.data.parameters;
      return A[r()][z] = R, { parameters: A };
    });
  }, u = (z, R) => {
    const q = R.target.value;
    l(z, q);
  }, d = (z) => {
    const R = z.target.value;
    l("name", R);
  }, f = (z) => {
    const R = z.target.checked;
    l("required", R);
  }, p = (z) => {
    const R = z.value;
    l("formType", R);
  }, h = (z) => {
    const R = z.value;
    l("contentType", R);
  };
  let g;
  const y = () => {
    a(o, (z) => {
      let R = z.data.parameters;
      return R.splice(r(), 1), { parameters: [...R] };
    }), g?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(z) {
      n(z), v();
    },
    get index() {
      return r();
    },
    set index(z) {
      r(z), v();
    }
  }, C = Vy(), $ = ne(C), b = B($);
  Ue(b, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), I($);
  var _ = D($, 2), O = B(_);
  gd(O, {
    get checked() {
      return c(s).required;
    },
    onchange: f
  }), I(_);
  var S = D(_, 2), M = B(S);
  return Tt(
    Yn(M, {
      placement: "bottom",
      floating: (z) => {
        var R = Ty(), q = B(R), A = D(B(q));
        {
          let K = /* @__PURE__ */ P(() => c(s).contentType ? [c(s).contentType] : []);
          ut(A, {
            get items() {
              return aa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(K);
            },
            onSelect: h
          });
        }
        I(q);
        var k = D(q, 2), N = D(B(k));
        {
          let K = /* @__PURE__ */ P(() => c(s).formType ? [c(s).formType] : []);
          ut(N, {
            get items() {
              return Ym;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(K);
            },
            onSelect: p
          });
        }
        I(k);
        var x = D(k, 2);
        {
          var L = (K) => {
            var X = Oy(), G = D(B(X));
            {
              let oe = /* @__PURE__ */ P(() => c(s).enums?.join(`
`));
              Ke(G, {
                rows: 3,
                style: "width: 100%;",
                onchange: (se) => {
                  l("enums", se.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(oe);
                },
                placeholder: "一行一个选项"
              });
            }
            I(X), T(K, X);
          };
          ae(x, (K) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && K(L);
          });
        }
        var E = D(x, 2), H = D(B(E));
        Ke(H, {
          rows: 1,
          style: "width: 100%;",
          onchange: (K) => {
            u("formLabel", K);
          },
          get value() {
            return c(s).formLabel;
          }
        }), I(E);
        var j = D(E, 2), Z = D(B(j));
        Ke(Z, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            u("formDescription", K);
          },
          get value() {
            return c(s).formDescription;
          }
        }), I(j);
        var V = D(j, 2), W = D(B(V));
        Ke(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            u("formPlaceholder", K);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), I(V);
        var Q = D(V, 2), te = B(Q);
        Le(te, {
          onclick: y,
          children: (K, X) => {
            ve();
            var G = ke("删除");
            T(K, G);
          },
          $$slots: { default: !0 }
        }), I(Q), I(R), T(z, R);
      },
      children: (z, R) => {
        Le(z, {
          class: "input-btn-more",
          children: (q, A) => {
            var k = My();
            T(q, k);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => g = z,
    () => g
  ), I(S), T(e, C), ue(w);
}
ie(Od, { parameter: {}, index: {} }, [], [], !0);
var Hy = /* @__PURE__ */ U('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), Dy = /* @__PURE__ */ U('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Ay = /* @__PURE__ */ U('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Iy = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Td(e, t) {
  le(t, !0), Me(e, Iy);
  let n = Fe(), r = $n(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = Ay(), s = B(i);
  {
    var a = (u) => {
      var d = Hy();
      ve(4), T(u, d);
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
    (u, d, f) => {
      Od(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(f);
        }
      });
    },
    (u) => {
      var d = Dy();
      T(u, d);
    }
  ), I(i), T(e, i), ue();
}
ie(Td, {}, [], [], !0);
const co = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = lr()), co(t.children);
}), e), Jt = () => {
  const { updateNodeData: e } = pt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => co(s?.children)) : co(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: lr()
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
var jy = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), By = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ U('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Ry = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Md(e, t) {
  le(t, !0), Me(e, Ry);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Bt(e, Be(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = jy();
      T(a, l);
    },
    children: (a, l) => {
      var u = Ky(), d = ne(u), f = B(d);
      Oe(f, {
        level: 3,
        children: (g, y) => {
          ve();
          var w = ke("输入参数");
          T(g, w);
        },
        $$slots: { default: !0 }
      });
      var p = D(f, 2);
      Le(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (g, y) => {
          var w = By();
          T(g, w);
        },
        $$slots: { default: !0 }
      }), I(d);
      var h = D(d, 2);
      Td(h, {}), T(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
ie(Md, { data: {} }, [], [], !0);
const Vd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Vd(e, r.source, n));
}, zd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: zd(r.children, t + "." + r.name, n)
})), _l = (e, t, n) => {
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
          children: zd(r, e.id, t)
        };
    }
  }
}, Hd = (e = !1) => {
  const t = Fe(), n = $n(t), r = /* @__PURE__ */ P(Qt), o = /* @__PURE__ */ P(() => c(r).nodes), i = /* @__PURE__ */ P(() => c(r).edges), s = /* @__PURE__ */ P(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ P(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const p = _l(d, f, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      Vd(d, t, c(i));
      for (const f of c(o))
        if (d.includes(f.id)) {
          const p = f.parentId === n.current.id, h = _l(f, p, u);
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
var Zy = /* @__PURE__ */ U('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Wy = /* @__PURE__ */ U('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Yy = /* @__PURE__ */ U('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const qy = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Dd(e, t) {
  le(t, !0), Me(e, qy), Zn(() => {
    c(u).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = Fe(), l = $n(a), u = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = pt(), f = (N, x) => {
    d(a, (L) => {
      let E = L.data?.[o()];
      return E[r()] = { ...E[r()], [N]: x }, { [o()]: E };
    });
  }, p = (N, x) => {
    const L = x.target.value;
    f(N, L);
  }, h = (N) => {
    const x = N.value;
    f("ref", x);
  }, g = (N) => {
    const x = N.value;
    f("refType", x);
  }, y = (N) => {
    const x = N.value;
    f("contentType", x);
  };
  let w;
  const C = () => {
    d(a, (N) => {
      let x = N.data?.[o()];
      return x.splice(r(), 1), { [o()]: [...x] };
    }), w?.hide();
  };
  let $ = Hd(i());
  var b = {
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
    },
    get showContentType() {
      return s();
    },
    set showContentType(N = !1) {
      s(N), v();
    }
  }, _ = Yy(), O = ne(_), S = B(O);
  {
    let N = /* @__PURE__ */ P(() => c(u).nameDisabled === !0);
    Ue(S, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(N);
      },
      oninput: (x) => p("name", x)
    });
  }
  I(O);
  var M = D(O, 2), z = B(M);
  {
    var R = (N) => {
      Ue(N, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (x) => p("value", x)
      });
    }, q = (N) => {
      var x = Ne(), L = ne(x);
      {
        var E = (H) => {
          {
            let j = /* @__PURE__ */ P(() => [c(u).ref]);
            ut(H, {
              get items() {
                return $.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(j);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ae(
          L,
          (H) => {
            c(u).refType !== "input" && H(E);
          },
          !0
        );
      }
      T(N, x);
    };
    ae(z, (N) => {
      c(u).refType === "fixed" ? N(R) : N(q, !1);
    });
  }
  I(M);
  var A = D(M, 2), k = B(A);
  return Tt(
    Yn(k, {
      placement: "bottom",
      floating: (N) => {
        var x = Wy(), L = B(x), E = D(B(L));
        {
          let X = /* @__PURE__ */ P(() => c(u).refType ? [c(u).refType] : []);
          ut(E, {
            get items() {
              return Wm;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(X);
            },
            onSelect: g
          });
        }
        I(L);
        var H = D(L, 2);
        {
          var j = (X) => {
            var G = Zy(), oe = D(B(G));
            {
              let se = /* @__PURE__ */ P(() => c(u).contentType ? [c(u).contentType] : []);
              ut(oe, {
                get items() {
                  return aa;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(se);
                },
                onSelect: y
              });
            }
            I(G), T(X, G);
          };
          ae(H, (X) => {
            s() && X(j);
          });
        }
        var Z = D(H, 2), V = D(B(Z));
        Ke(V, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            p("defaultValue", X);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), I(Z);
        var W = D(Z, 2), Q = D(B(W));
        Ke(Q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            p("description", X);
          },
          get value() {
            return c(u).description;
          }
        }), I(W);
        var te = D(W, 2), K = B(te);
        Le(K, {
          onclick: C,
          children: (X, G) => {
            ve();
            var oe = ke("删除");
            T(X, oe);
          },
          $$slots: { default: !0 }
        }), I(te), I(x), T(N, x);
      },
      children: (N, x) => {
        Po(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => w = N,
    () => w
  ), I(A), T(e, _), ue(b);
}
ie(
  Dd,
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
var Fy = /* @__PURE__ */ U('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Xy = /* @__PURE__ */ U('<div class="none-params svelte-32f1pk"> </div>'), Gy = /* @__PURE__ */ U('<div class="input-container svelte-32f1pk"><!> <!></div>');
const Uy = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function bt(e, t) {
  le(t, !0), Me(e, Uy);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = Fe(), a = $n(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无输入参数") {
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
    },
    get showContentType() {
      return i();
    },
    set showContentType(g = !1) {
      i(g), v();
    }
  }, d = Gy(), f = B(d);
  {
    var p = (g) => {
      var y = Fy();
      ve(4), T(g, y);
    };
    ae(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = D(f, 2);
  return gt(
    h,
    19,
    () => c(l),
    (g) => g.id,
    (g, y, w) => {
      Dd(g, {
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
    (g) => {
      var y = Xy(), w = B(y, !0);
      I(y), $e(() => je(w, n())), T(g, y);
    }
  ), I(d), T(e, d), ue(u);
}
ie(
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
var Qy = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Jy = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ U('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const tw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Ad(e, t) {
  le(t, !0), Me(e, tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Bt(e, Be(
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
        var l = Qy();
        T(a, l);
      },
      children: (a, l) => {
        var u = ew(), d = ne(u), f = B(d);
        Oe(f, {
          level: 3,
          children: (g, y) => {
            ve();
            var w = ke("输出参数");
            T(g, w);
          },
          $$slots: { default: !0 }
        });
        var p = D(f, 2);
        Le(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (g, y) => {
            var w = Jy();
            T(g, w);
          },
          $$slots: { default: !0 }
        }), I(d);
        var h = D(d, 2);
        bt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), T(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
ie(Ad, { data: {} }, [], [], !0);
const Gi = (e) => JSON.parse(JSON.stringify(e));
var nw = /* @__PURE__ */ fe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), rw = /* @__PURE__ */ U('<div class="input-more-item svelte-hwmib9"><!></div>'), ow = /* @__PURE__ */ U('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), iw = /* @__PURE__ */ U('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const sw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  le(t, !0), Me(e, sw);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = Fe(), a = $n(s), l = /* @__PURE__ */ P(() => {
    let k = a?.current?.data?.[o()], N;
    if (k && r().length > 0) {
      let x = k;
      for (let L = 0; L < r().length; L++) {
        const E = r()[L];
        L == r().length - 1 ? N = x[E] : x = x[E].children;
      }
    }
    return { ...n(), ...N };
  });
  const { updateNodeData: u } = pt(), d = (k, N) => {
    u(s, (x) => {
      const L = x.data?.[o()];
      if (L && r().length > 0) {
        let E = L;
        for (let H = 0; H < r().length; H++) {
          const j = r()[H];
          H == r().length - 1 ? E[j] = { ...E[j], [k]: N } : E = E[j].children;
        }
      }
      return { [o()]: [...Gi(L)] };
    });
  }, f = (k, N) => {
    const x = N.target.value;
    d(k, x);
  }, p = (k) => {
    const N = k.value;
    d("dataType", N);
  };
  let h;
  const g = () => {
    u(s, (k) => {
      let N = k.data?.[o()];
      if (N && r().length > 0) {
        let x = N;
        for (let L = 0; L < r().length; L++) {
          const E = r()[L];
          L == r().length - 1 ? x.splice(E, 1) : x = x[E].children;
        }
      }
      return { [o()]: [...Gi(N)] };
    }), h?.hide();
  }, y = () => {
    u(s, (k) => {
      let N = k.data?.[o()];
      if (N && r().length > 0) {
        let x = N;
        for (let L = 0; L < r().length; L++) {
          const E = r()[L];
          L == r().length - 1 ? x[E].children ? x[E].children.push({ id: lr(), name: "newParam", dataType: "String" }) : x[E].children = [{ id: lr(), name: "newParam", dataType: "String" }] : x = x[E].children;
        }
      }
      return { [o()]: [...Gi(N)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), v();
    },
    get position() {
      return r();
    },
    set position(k) {
      r(k), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(k = "请输入参数值") {
      i(k), v();
    }
  }, C = iw(), $ = ne(C), b = B($);
  {
    var _ = (k) => {
      var N = Ne(), x = ne(N);
      gt(x, 17, r, Or, (L, E) => {
        ve();
        var H = ke(" ");
        T(L, H);
      }), T(k, N);
    };
    ae(b, (k) => {
      r().length > 1 && k(_);
    });
  }
  var O = D(b, 2);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    Ue(O, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (N) => {
        f("name", N);
      },
      get disabled() {
        return c(k);
      }
    });
  }
  I($);
  var S = D($, 2), M = B(S);
  {
    let k = /* @__PURE__ */ P(() => c(l).dataTypeItems || Zm), N = /* @__PURE__ */ P(() => c(l).dataType ? [c(l).dataType] : []), x = /* @__PURE__ */ P(() => c(l).dataTypeDisabled === !0);
    ut(M, {
      get items() {
        return c(k);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(N);
      },
      get disabled() {
        return c(x);
      },
      onSelect: p
    });
  }
  var z = D(M, 2);
  {
    var R = (k) => {
      Le(k, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (N, x) => {
          var L = nw();
          T(N, L);
        },
        $$slots: { default: !0 }
      });
    };
    ae(z, (k) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && k(R);
    });
  }
  I(S);
  var q = D(S, 2), A = B(q);
  return Tt(
    Yn(A, {
      placement: "bottom",
      floating: (k) => {
        var N = ow(), x = B(N), L = D(B(x));
        {
          let V = /* @__PURE__ */ P(() => c(l).defaultValue || "");
          Ke(L, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(V);
            },
            onchange: (W) => {
              f("defaultValue", W);
            }
          });
        }
        I(x);
        var E = D(x, 2), H = D(B(E));
        {
          let V = /* @__PURE__ */ P(() => c(l).description || "");
          Ke(H, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(V);
            },
            onchange: (W) => {
              f("description", W);
            }
          });
        }
        I(E);
        var j = D(E, 2);
        {
          var Z = (V) => {
            var W = rw(), Q = B(W);
            Le(Q, {
              onclick: g,
              children: (te, K) => {
                ve();
                var X = ke("删除");
                T(te, X);
              },
              $$slots: { default: !0 }
            }), I(W), T(V, W);
          };
          ae(j, (V) => {
            c(l).deleteDisabled !== !0 && V(Z);
          });
        }
        I(N), T(k, N);
      },
      children: (k, N) => {
        Po(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => h = k,
    () => h
  ), I(q), T(e, C), ue(w);
}
ie(
  Id,
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
var aw = /* @__PURE__ */ U("<!> <!>", 1), lw = /* @__PURE__ */ U('<div class="none-params svelte-1oz5kx0"> </div>'), uw = /* @__PURE__ */ U('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), cw = /* @__PURE__ */ U('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const dw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function _n(e, t) {
  le(t, !0), Me(e, dw);
  const n = (g, y = ct, w = ct) => {
    var C = Ne(), $ = ne(C);
    gt(
      $,
      19,
      y,
      (b) => `${b.id}_${b.children ? b.children.length : 0}`,
      (b, _, O) => {
        var S = aw(), M = ne(S);
        {
          let q = /* @__PURE__ */ P(() => [...w(), c(O)]);
          Id(M, {
            get parameter() {
              return c(_);
            },
            get position() {
              return c(q);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var z = D(M, 2);
        {
          var R = (q) => {
            {
              let A = /* @__PURE__ */ P(() => [...w(), c(O)]);
              n(q, () => c(_).children, () => c(A));
            }
          };
          ae(z, (q) => {
            c(_).children && q(R);
          });
        }
        T(b, S);
      },
      (b) => {
        var _ = Ne(), O = ne(_);
        {
          var S = (M) => {
            var z = lw(), R = B(z, !0);
            I(z), $e(() => je(R, r())), T(M, z);
          };
          ae(O, (M) => {
            w().length === 0 && M(S);
          });
        }
        T(b, _);
      }
    ), T(g, C);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = Fe(), a = $n(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(g = "无输出参数") {
      r(g), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(g = "outputDefs") {
      o(g), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(g = "请输入参数名称") {
      i(g), v();
    }
  }, d = cw(), f = B(d);
  {
    var p = (g) => {
      var y = uw();
      ve(4), T(g, y);
    };
    ae(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = D(f, 2);
  return n(h, () => c(l) || [], () => []), I(d), T(e, d), ue(u);
}
ie(_n, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var pw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), fw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), vw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), mw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), yw = /* @__PURE__ */ U('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), ww = /* @__PURE__ */ U('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const bw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function jd(e, t) {
  le(t, !0), Me(e, bw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt(), s = In();
  let a = /* @__PURE__ */ Ee(Ht([]));
  Zn(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: l } = pt(), u = (f) => {
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
  Ye(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), v();
    }
  };
  return Bt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var p = pw();
        T(f, p);
      },
      children: (f, p) => {
        var h = ww(), g = ne(h), y = B(g);
        Oe(y, {
          level: 3,
          children: (j, Z) => {
            ve();
            var V = ke("输入参数");
            T(j, V);
          },
          $$slots: { default: !0 }
        });
        var w = D(y, 2);
        Le(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, Z) => {
            var V = fw();
            T(j, V);
          },
          $$slots: { default: !0 }
        }), I(g);
        var C = D(g, 2);
        bt(C, {});
        var $ = D(C, 2), b = B($);
        Oe(b, {
          level: 3,
          children: (j, Z) => {
            ve();
            var V = ke("图片识别");
            T(j, V);
          },
          $$slots: { default: !0 }
        });
        var _ = D(b, 2);
        Le(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (j, Z) => {
            var V = hw();
            T(j, V);
          },
          $$slots: { default: !0 }
        }), I($);
        var O = D($, 2);
        bt(O, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var S = D(O, 2);
        Oe(S, {
          level: 3,
          mt: "10px",
          children: (j, Z) => {
            ve();
            var V = ke("模型设置");
            T(j, V);
          },
          $$slots: { default: !0 }
        });
        var M = D(S, 4), z = B(M);
        {
          let j = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          ut(z, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (Z) => {
              const V = Z.value;
              l(o, () => ({ llmId: V }));
            },
            get value() {
              return c(j);
            }
          });
        }
        var R = D(z, 2);
        Yn(R, {
          placement: "bottom",
          floating: (j) => {
            var Z = yw(), V = D(B(Z), 2), W = B(V), Q = B(W), te = B(Q);
            I(Q);
            var K = D(Q, 2);
            Jn(K), K.__input = [gw, l, o], I(W), I(V);
            var X = D(V, 2), G = B(X), oe = B(G), se = B(oe);
            I(oe);
            var J = D(oe, 2);
            Jn(J), J.__input = [vw, l, o], I(G), I(X);
            var we = D(X, 2), ce = B(we), ee = B(ce), re = B(ee);
            I(ee);
            var pe = D(ee, 2);
            Jn(pe), pe.__input = [mw, l, o], I(ce), I(we), I(Z), $e(() => {
              je(te, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), jo(K, n().temperature ?? 0.7), je(se, `Top P: ${n().topP ?? 0.9 ?? ""}`), jo(J, n().topP ?? 0.9), je(re, `Top K: ${n().topK ?? 50 ?? ""}`), jo(pe, n().topK ?? 50);
            }), T(j, Z);
          },
          children: (j, Z) => {
            Po(j, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), I(M);
        var q = D(M, 4), A = B(q);
        {
          let j = /* @__PURE__ */ P(() => n().systemPrompt || "");
          Ke(A, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(j);
            },
            oninput: (Z) => {
              l(o, { systemPrompt: Z.target.value });
            }
          });
        }
        I(q);
        var k = D(q, 4), N = B(k);
        {
          let j = /* @__PURE__ */ P(() => n().userPrompt || "");
          Ke(N, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(j);
            },
            oninput: (Z) => {
              l(o, { userPrompt: Z.target.value });
            }
          });
        }
        I(k);
        var x = D(k, 2), L = B(x);
        Oe(L, {
          level: 3,
          children: (j, Z) => {
            ve();
            var V = ke("输出参数");
            T(j, V);
          },
          $$slots: { default: !0 }
        });
        var E = D(L, 2);
        {
          let j = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          ut(E, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (Z) => {
              u(Z.value);
            },
            get value() {
              return c(j);
            }
          });
        }
        I(x);
        var H = D(x, 2);
        _n(H, {}), T(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
Rn(["input"]);
ie(jd, { data: {} }, [], [], !0);
var xw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Cw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ U('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const _w = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  le(t, !0), Me(e, _w);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Zn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Fe(), { addParameter: i } = Jt(), { updateNodeData: s } = pt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return Bt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = xw();
        T(u, d);
      },
      children: (u, d) => {
        var f = kw(), p = ne(f), h = B(p);
        Oe(h, {
          level: 3,
          children: (R, q) => {
            ve();
            var A = ke("输入参数");
            T(R, A);
          },
          $$slots: { default: !0 }
        });
        var g = D(h, 2);
        Le(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, q) => {
            var A = Cw();
            T(R, A);
          },
          $$slots: { default: !0 }
        }), I(p);
        var y = D(p, 2);
        bt(y, {});
        var w = D(y, 2);
        Oe(w, {
          level: 3,
          mt: "10px",
          children: (R, q) => {
            ve();
            var A = ke("代码");
            T(R, A);
          },
          $$slots: { default: !0 }
        });
        var C = D(w, 4), $ = B(C);
        {
          let R = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          ut($, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (q) => {
              const A = q.value;
              s(o, () => ({ engine: A }));
            },
            get value() {
              return c(R);
            }
          });
        }
        I(C);
        var b = D(C, 4), _ = B(b);
        {
          let R = /* @__PURE__ */ P(() => n().code || "");
          Ke(_, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (q) => {
              s(o, () => ({ code: q.target.value }));
            },
            get value() {
              return c(R);
            }
          });
        }
        I(b);
        var O = D(b, 2), S = B(O);
        Oe(S, {
          level: 3,
          mt: "10px",
          children: (R, q) => {
            ve();
            var A = ke("输出参数");
            T(R, A);
          },
          $$slots: { default: !0 }
        });
        var M = D(S, 2);
        Le(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (R, q) => {
            var A = $w();
            T(R, A);
          },
          $$slots: { default: !0 }
        }), I(O);
        var z = D(O, 2);
        _n(z, {}), T(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
ie(Bd, { data: {} }, [], [], !0);
var Sw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Nw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ U('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const Pw = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  le(t, !0), Me(e, Pw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt(), { updateNodeData: s } = pt();
  Ye(() => {
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
  return Bt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Sw();
        T(l, u);
      },
      children: (l, u) => {
        var d = Ew(), f = ne(d), p = B(f);
        Oe(p, {
          level: 3,
          children: (O, S) => {
            ve();
            var M = ke("输入参数");
            T(O, M);
          },
          $$slots: { default: !0 }
        });
        var h = D(p, 2);
        Le(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, S) => {
            var M = Nw();
            T(O, M);
          },
          $$slots: { default: !0 }
        }), I(f);
        var g = D(f, 2);
        bt(g, {});
        var y = D(g, 2);
        Oe(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (O, S) => {
            ve();
            var M = ke("模板内容");
            T(O, M);
          },
          $$slots: { default: !0 }
        });
        var w = D(y, 2), C = B(w);
        {
          let O = /* @__PURE__ */ P(() => n().template || "");
          Ke(C, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (S) => {
              s(o, () => ({ template: S.target.value }));
            },
            get value() {
              return c(O);
            }
          });
        }
        I(w);
        var $ = D(w, 2), b = B($);
        Oe(b, {
          level: 3,
          mt: "10px",
          children: (O, S) => {
            ve();
            var M = ke("输出参数");
            T(O, M);
          },
          $$slots: { default: !0 }
        }), I($);
        var _ = D($, 2);
        _n(_, {}), T(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
ie(Kd, { data: {} }, [], [], !0);
var Lw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Ow = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ U('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Vw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ U('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Hw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ U('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ U('<div style="width: 100%"><!></div>'), Iw = /* @__PURE__ */ U('<div style="width: 100%"><!></div>'), jw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ U('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Kw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Rd(e, t) {
  le(t, !0), Me(e, Kw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
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
  ], i = Fe(), { addParameter: s } = Jt(), { updateNodeData: a } = pt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return Bt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Lw();
        T(u, d);
      },
      children: (u, d) => {
        var f = Bw(), p = ne(f), h = B(p);
        Oe(h, {
          level: 3,
          children: (K, X) => {
            ve();
            var G = ke("输入参数");
            T(K, G);
          },
          $$slots: { default: !0 }
        });
        var g = D(h, 2);
        Le(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (K, X) => {
            var G = Ow();
            T(K, G);
          },
          $$slots: { default: !0 }
        }), I(p);
        var y = D(p, 2);
        bt(y, {});
        var w = D(y, 2);
        Oe(w, {
          level: 3,
          mt: "10px",
          children: (K, X) => {
            ve();
            var G = ke("URL 地址");
            T(K, G);
          },
          $$slots: { default: !0 }
        });
        var C = D(w, 2), $ = B(C), b = B($);
        {
          let K = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          ut(b, {
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
              return c(K);
            }
          });
        }
        I($);
        var _ = D($, 2), O = B(_);
        {
          let K = /* @__PURE__ */ P(() => n().url || "");
          Ue(O, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (X) => {
              a(i, () => ({ url: X.target.value }));
            },
            get value() {
              return c(K);
            }
          });
        }
        I(_), I(C);
        var S = D(C, 2), M = B(S);
        Oe(M, {
          level: 3,
          children: (K, X) => {
            ve();
            var G = ke("Http 头信息");
            T(K, G);
          },
          $$slots: { default: !0 }
        });
        var z = D(M, 2);
        Le(z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (K, X) => {
            var G = Tw();
            T(K, G);
          },
          $$slots: { default: !0 }
        }), I(S);
        var R = D(S, 2);
        bt(R, { dataKeyName: "headers" });
        var q = D(R, 2);
        {
          var A = (K) => {
            var X = Mw(), G = ne(X);
            Oe(G, {
              level: 3,
              mt: "10px",
              children: (Ce, Te) => {
                ve();
                var Y = ke("Body");
                T(Ce, Y);
              },
              $$slots: { default: !0 }
            });
            var oe = D(G, 2), se = B(oe), J = B(se);
            {
              let Ce = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              Ue(J, {
                type: "radio",
                name: "bodyType",
                value: "",
                get checked() {
                  return c(Ce);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            ve(), I(se);
            var we = D(se, 2), ce = B(we);
            {
              let Ce = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              Ue(ce, {
                type: "radio",
                name: "bodyType",
                value: "form-data",
                get checked() {
                  return c(Ce);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            ve(), I(we);
            var ee = D(we, 2), re = B(ee);
            {
              let Ce = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              Ue(re, {
                type: "radio",
                name: "bodyType",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(Ce);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            ve(), I(ee);
            var pe = D(ee, 2), ge = B(pe);
            {
              let Ce = /* @__PURE__ */ P(() => n().bodyType === "json");
              Ue(ge, {
                type: "radio",
                name: "bodyType",
                value: "json",
                get checked() {
                  return c(Ce);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            ve(), I(pe);
            var xe = D(pe, 2), de = B(xe);
            {
              let Ce = /* @__PURE__ */ P(() => n().bodyType === "raw");
              Ue(de, {
                type: "radio",
                name: "bodyType",
                value: "raw",
                get checked() {
                  return c(Ce);
                },
                onchange: (Te) => {
                  Te.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            ve(), I(xe), I(oe), T(K, X);
          };
          ae(q, (K) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && K(A);
          });
        }
        var k = D(q, 2);
        {
          var N = (K) => {
            var X = zw(), G = ne(X), oe = B(G);
            Oe(oe, {
              level: 3,
              children: (we, ce) => {
                ve();
                var ee = ke("参数");
                T(we, ee);
              },
              $$slots: { default: !0 }
            });
            var se = D(oe, 2);
            Le(se, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (we, ce) => {
                var ee = Vw();
                T(we, ee);
              },
              $$slots: { default: !0 }
            }), I(G);
            var J = D(G, 2);
            bt(J, { dataKeyName: "formData" }), T(K, X);
          };
          ae(k, (K) => {
            n().bodyType === "form-data" && K(N);
          });
        }
        var x = D(k, 2);
        {
          var L = (K) => {
            var X = Dw(), G = ne(X), oe = B(G);
            Oe(oe, {
              level: 3,
              children: (we, ce) => {
                ve();
                var ee = ke("Body 参数");
                T(we, ee);
              },
              $$slots: { default: !0 }
            });
            var se = D(oe, 2);
            Le(se, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (we, ce) => {
                var ee = Hw();
                T(we, ee);
              },
              $$slots: { default: !0 }
            }), I(G);
            var J = D(G, 2);
            bt(J, { dataKeyName: "formUrlencoded" }), T(K, X);
          };
          ae(x, (K) => {
            n().bodyType === "x-www-form-urlencoded" && K(L);
          });
        }
        var E = D(x, 2);
        {
          var H = (K) => {
            var X = Aw(), G = B(X);
            Ke(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (oe) => {
                a(i, { bodyJson: oe.target.value });
              }
            }), I(X), T(K, X);
          };
          ae(E, (K) => {
            n().bodyType === "json" && K(H);
          });
        }
        var j = D(E, 2);
        {
          var Z = (K) => {
            var X = Iw(), G = B(X);
            Ke(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (oe) => {
                a(i, { bodyRaw: oe.target.value });
              }
            }), I(X), T(K, X);
          };
          ae(j, (K) => {
            n().bodyType === "raw" && K(Z);
          });
        }
        var V = D(j, 2), W = B(V);
        Oe(W, {
          level: 3,
          mt: "10px",
          children: (K, X) => {
            ve();
            var G = ke("输出参数");
            T(K, G);
          },
          $$slots: { default: !0 }
        });
        var Q = D(W, 2);
        Le(Q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (K, X) => {
            var G = jw();
            T(K, G);
          },
          $$slots: { default: !0 }
        }), I(V);
        var te = D(V, 2);
        _n(te, {}), T(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
ie(Rd, { data: {} }, [], [], !0);
var Rw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Zw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ww = /* @__PURE__ */ U('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Yw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  le(t, !0), Me(e, Yw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt(), s = In();
  let a = /* @__PURE__ */ Ee(Ht([]));
  Zn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = pt();
  Ye(() => {
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
      n(d), v();
    }
  };
  return Bt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Rw();
        T(d, f);
      },
      children: (d, f) => {
        var p = Ww(), h = ne(p), g = B(h);
        Oe(g, {
          level: 3,
          children: (A, k) => {
            ve();
            var N = ke("输入参数");
            T(A, N);
          },
          $$slots: { default: !0 }
        });
        var y = D(g, 2);
        Le(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, k) => {
            var N = Zw();
            T(A, N);
          },
          $$slots: { default: !0 }
        }), I(h);
        var w = D(h, 2);
        bt(w, {});
        var C = D(w, 2);
        Oe(C, {
          level: 3,
          mt: "10px",
          children: (A, k) => {
            ve();
            var N = ke("知识库设置");
            T(A, N);
          },
          $$slots: { default: !0 }
        });
        var $ = D(C, 4), b = B($);
        {
          let A = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          ut(b, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (k) => {
              const N = k.value;
              l(o, () => ({ knowledgeId: N }));
            },
            get value() {
              return c(A);
            }
          });
        }
        I($);
        var _ = D($, 4), O = B(_);
        Ue(O, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const k = A.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), I(_);
        var S = D(_, 4), M = B(S);
        {
          let A = /* @__PURE__ */ P(() => n().limit || "");
          Ue(M, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (k) => {
              const N = k.target.value;
              l(o, () => ({ limit: N }));
            },
            get value() {
              return c(A);
            }
          });
        }
        I(S);
        var z = D(S, 2), R = B(z);
        Oe(R, {
          level: 3,
          mt: "10px",
          children: (A, k) => {
            ve();
            var N = ke("输出参数");
            T(A, N);
          },
          $$slots: { default: !0 }
        }), I(z);
        var q = D(z, 2);
        _n(q, {}), T(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
ie(Zd, { data: {} }, [], [], !0);
var qw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Fw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xw = /* @__PURE__ */ U('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Gw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Wd(e, t) {
  le(t, !0), Me(e, Gw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt(), s = In();
  let a = /* @__PURE__ */ Ee(Ht([]));
  Zn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = pt();
  Ye(() => {
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
      n(d), v();
    }
  };
  return Bt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = qw();
        T(d, f);
      },
      children: (d, f) => {
        var p = Xw(), h = ne(p), g = B(h);
        Oe(g, {
          level: 3,
          children: (A, k) => {
            ve();
            var N = ke("输入参数");
            T(A, N);
          },
          $$slots: { default: !0 }
        });
        var y = D(g, 2);
        Le(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, k) => {
            var N = Fw();
            T(A, N);
          },
          $$slots: { default: !0 }
        }), I(h);
        var w = D(h, 2);
        bt(w, {});
        var C = D(w, 2);
        Oe(C, {
          level: 3,
          mt: "10px",
          children: (A, k) => {
            ve();
            var N = ke("搜索引擎设置");
            T(A, N);
          },
          $$slots: { default: !0 }
        });
        var $ = D(C, 4), b = B($);
        {
          let A = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          ut(b, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (k) => {
              const N = k.value;
              l(o, () => ({ engine: N }));
            },
            get value() {
              return c(A);
            }
          });
        }
        I($);
        var _ = D($, 4), O = B(_);
        Ue(O, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const k = A.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), I(_);
        var S = D(_, 4), M = B(S);
        Ue(M, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (A) => {
            const k = A.target.value;
            l(o, () => ({ limit: k }));
          }
        }), I(S);
        var z = D(S, 2), R = B(z);
        Oe(R, {
          level: 3,
          mt: "10px",
          children: (A, k) => {
            ve();
            var N = ke("输出参数");
            T(A, N);
          },
          $$slots: { default: !0 }
        }), I(z);
        var q = D(z, 2);
        _n(q, {}), T(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
ie(Wd, { data: {} }, [], [], !0);
var Uw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Qw = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jw = /* @__PURE__ */ U('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const eb = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Yd(e, t) {
  le(t, !0), Me(e, eb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt();
  Ye(() => {
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
  return Bt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Uw();
        T(a, l);
      },
      handle: (a) => {
        Dn(a, {
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
        var u = Jw(), d = ne(u), f = B(d);
        Oe(f, {
          level: 3,
          children: (C, $) => {
            ve();
            var b = ke("循环变量");
            T(C, b);
          },
          $$slots: { default: !0 }
        }), I(d);
        var p = D(d, 2);
        bt(p, { dataKeyName: "loopVars" });
        var h = D(p, 2), g = B(h);
        Oe(g, {
          level: 3,
          children: (C, $) => {
            ve();
            var b = ke("输出参数");
            T(C, b);
          },
          $$slots: { default: !0 }
        });
        var y = D(g, 2);
        Le(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (C, $) => {
            var b = Qw();
            T(C, b);
          },
          $$slots: { default: !0 }
        }), I(h);
        var w = D(h, 2);
        bt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), T(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
ie(Yd, { data: {} }, [], [], !0);
var tb = /* @__PURE__ */ U('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), nb = /* @__PURE__ */ U('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const rb = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  le(t, !0), Me(e, rb);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = Fe(), a = $n(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = pt(), d = (k, N) => {
    u(s, (x) => {
      let L = x.data?.[o()];
      return L[r()] = { ...L[r()], [k]: N }, { [o()]: L };
    });
  }, f = (k, N) => {
    const x = N.target.value;
    d(k, x);
  }, p = (k) => {
    const N = k.value;
    d("ref", N);
  }, h = (k) => {
    const N = k.value;
    d("formType", N);
  }, g = (k) => {
    const N = k.value;
    d("contentType", N);
  };
  let y;
  const w = () => {
    u(s, (k) => {
      let N = k.data?.[o()];
      return N.splice(r(), 1), { [o()]: [...N] };
    }), y?.hide();
  };
  let C = Hd(i());
  var $ = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), v();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(k) {
      i(k), v();
    }
  }, b = nb(), _ = ne(b), O = B(_);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    Ue(O, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(k);
      },
      oninput: (N) => f("name", N)
    });
  }
  I(_);
  var S = D(_, 2), M = B(S);
  {
    var z = (k) => {
      Ue(k, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => f("value", N)
      });
    }, R = (k) => {
      var N = Ne(), x = ne(N);
      {
        var L = (E) => {
          {
            let H = /* @__PURE__ */ P(() => [c(l).ref]);
            ut(E, {
              get items() {
                return C.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(H);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        ae(
          x,
          (E) => {
            c(l).refType !== "input" && E(L);
          },
          !0
        );
      }
      T(k, N);
    };
    ae(M, (k) => {
      c(l).refType === "fixed" ? k(z) : k(R, !1);
    });
  }
  I(S);
  var q = D(S, 2), A = B(q);
  return Tt(
    Yn(A, {
      placement: "bottom",
      floating: (k) => {
        var N = tb(), x = B(N), L = D(B(x));
        {
          let K = /* @__PURE__ */ P(() => c(l).contentType ? [c(l).contentType] : []);
          ut(L, {
            get items() {
              return aa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(K);
            },
            onSelect: g
          });
        }
        I(x);
        var E = D(x, 2), H = D(B(E));
        {
          let K = /* @__PURE__ */ P(() => c(l).formType ? [c(l).formType] : []);
          ut(H, {
            get items() {
              return qm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(K);
            },
            onSelect: h
          });
        }
        I(E);
        var j = D(E, 2), Z = D(B(j));
        Ke(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (K) => {
            f("formLabel", K);
          },
          get value() {
            return c(l).formLabel;
          }
        }), I(j);
        var V = D(j, 2), W = D(B(V));
        Ke(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (K) => {
            f("formDescription", K);
          },
          get value() {
            return c(l).formDescription;
          }
        }), I(V);
        var Q = D(V, 2), te = B(Q);
        Le(te, {
          onclick: w,
          children: (K, X) => {
            ve();
            var G = ke("删除");
            T(K, G);
          },
          $$slots: { default: !0 }
        }), I(Q), I(N), T(k, N);
      },
      children: (k, N) => {
        Po(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => y = k,
    () => y
  ), I(q), T(e, b), ue($);
}
ie(
  qd,
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
var ob = /* @__PURE__ */ U('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), ib = /* @__PURE__ */ U('<div class="none-params svelte-1fllp9b"> </div>'), sb = /* @__PURE__ */ U('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const ab = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function Fd(e, t) {
  le(t, !0), Me(e, ab);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = Fe(), s = $n(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无确认数据") {
      n(h), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), v();
    }
  }, u = sb(), d = B(u);
  {
    var f = (h) => {
      var g = ob();
      ve(4), T(h, g);
    };
    ae(d, (h) => {
      c(a).length !== 0 && h(f);
    });
  }
  var p = D(d, 2);
  return gt(
    p,
    19,
    () => c(a),
    (h) => h.id,
    (h, g, y) => {
      qd(h, {
        get parameter() {
          return c(g);
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
    (h) => {
      var g = ib(), y = B(g, !0);
      I(g), $e(() => je(y, n())), T(h, g);
    }
  ), I(u), T(e, u), ue(l);
}
ie(Fd, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const bs = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!bs(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !bs(e[s], t[s])) return !1;
    return !0;
  }
};
var lb = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ub = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cb = /* @__PURE__ */ U('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const db = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  le(t, !0), Me(e, db);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt(), { updateNodeData: s } = pt();
  Ye(() => {
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
      bs(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return Bt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = lb();
        T(l, u);
      },
      children: (l, u) => {
        var d = cb(), f = ne(d), p = B(f);
        Oe(p, {
          level: 3,
          children: (O, S) => {
            ve();
            var M = ke("确认数据");
            T(O, M);
          },
          $$slots: { default: !0 }
        });
        var h = D(p, 2);
        Le(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (O, S) => {
            var M = ub();
            T(O, M);
          },
          $$slots: { default: !0 }
        }), I(f);
        var g = D(f, 2);
        Fd(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = D(g, 2);
        Oe(y, {
          level: 3,
          mt: "10px",
          children: (O, S) => {
            ve();
            var M = ke("确认消息");
            T(O, M);
          },
          $$slots: { default: !0 }
        });
        var w = D(y, 4), C = B(w);
        {
          let O = /* @__PURE__ */ P(() => n().message || "");
          Ke(C, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (S) => {
              s(o, () => ({ message: S.target.value }));
            },
            get value() {
              return c(O);
            }
          });
        }
        I(w);
        var $ = D(w, 2), b = B($);
        Oe(b, {
          level: 3,
          mt: "10px",
          children: (O, S) => {
            ve();
            var M = ke("输出参数");
            T(O, M);
          },
          $$slots: { default: !0 }
        }), I($);
        var _ = D($, 2);
        _n(_, { placeholder: "" }), T(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
ie(Xd, { data: {} }, [], [], !0);
const pb = {
  startNode: Md,
  codeNode: Bd,
  confirmNode: Xd,
  llmNode: jd,
  templateNode: Kd,
  httpNode: Rd,
  knowledgeNode: Zd,
  searchEngineNode: Wd,
  loopNode: Yd,
  endNode: Ad
};
var fb = /* @__PURE__ */ U("<!> ", 1);
function xs(e, t) {
  le(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7), a = (u) => {
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
      n(u), v();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), v();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), v();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), v();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), v();
    }
  };
  return Le(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var f = fb(), p = ne(f);
      Ks(p, n);
      var h = D(p);
      $e(() => je(h, ` ${r() ?? ""}`)), T(u, f);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
ie(xs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var hb = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), gb = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), vb = /* @__PURE__ */ U('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Gd(e, t) {
  le(t, !0);
  let n = /* @__PURE__ */ Ee("base"), r = /* @__PURE__ */ Ee("show");
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
  ], s = [], a = In(), l = a.customNodes;
  if (l) {
    const C = Object.keys(l).sort(($, b) => (l[$].sortNo || 0) - (l[b].sortNo || 0));
    for (let $ of C)
      l[$].group === "base" ? o.push({ type: $, ...l[$] }) : s.push({
        icon: l[$].icon,
        title: l[$].title,
        type: $
      });
    o.sort(($, b) => ($.sortNo || 0) - (b.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const C = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(C)) {
      for (let $ of C)
        for (let b = 0; b < o.length; b++)
          if (o[b].type === $) {
            o.splice(b, 1);
            break;
          }
    }
  }
  var u = vb(), d = B(u), f = B(d), p = B(f);
  md(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (C) => {
      F(n, C.value.toString(), !0);
    }
  }), I(f);
  var h = D(f, 2), g = B(h);
  gt(g, 21, () => o, Or, (C, $) => {
    xs(C, Be(() => c($)));
  }), I(g);
  var y = D(g, 2);
  gt(y, 21, () => s, Or, (C, $) => {
    xs(C, Be(() => c($)));
  }), I(y), I(h), I(d);
  var w = D(d, 2);
  Le(w, {
    onclick: () => {
      F(r, c(r) ? "" : "show", !0);
    },
    children: (C, $) => {
      var b = Ne(), _ = ne(b);
      {
        var O = (M) => {
          var z = hb();
          T(M, z);
        }, S = (M) => {
          var z = gb();
          T(M, z);
        };
        ae(_, (M) => {
          c(r) === "show" ? M(O) : M(S, !1);
        });
      }
      T(C, b);
    },
    $$slots: { default: !0 }
  }), I(u), $e(() => {
    Nt(u, 1, `tf-toolbar ${c(r) ?? ""}`), dt(g, `display: ${c(n) === "base" ? "flex" : "none"}`), dt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), T(e, u), ue();
}
ie(Gd, {}, [], [], !0);
const mb = () => ({ getNode: (e) => Ze.getNode(e) }), yb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ze.updateNodes((n) => {
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
} }), wb = () => ({ getEdgesByTarget: (e) => Ze.getEdges().filter((t) => t.target === e) });
var bb = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ U('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), Cb = /* @__PURE__ */ U('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), $b = /* @__PURE__ */ U('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), kb = /* @__PURE__ */ U('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), _b = /* @__PURE__ */ U('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Sb = /* @__PURE__ */ U('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Nb = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Eb = /* @__PURE__ */ U('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), Pb = /* @__PURE__ */ U("<!> <!> <div></div> <!>", 1);
const Lb = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ud(e, t) {
  le(t, !0), Me(e, Lb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ He(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Jt(), s = pt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, C) => {
    l({ [w]: C.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = In().customNodes[t.type];
  p.render?.(f, d, s);
  const h = p.forms;
  let g;
  Ye(() => {
    n().expand && g && g.append(f);
  }), Ye(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), Ye(() => {
    !n().parameters && p.parameters && l({
      parameters: co(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), Ye(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: co(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  var y = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), v();
    }
  };
  {
    const w = ($) => {
      var b = Ne(), _ = ne(b);
      Ks(_, () => p.icon), T($, b);
    };
    let C = /* @__PURE__ */ P(() => ({ ...n(), description: p.description }));
    Bt(e, Be(
      {
        get data() {
          return c(C);
        }
      },
      () => r,
      {
        icon: w,
        children: ($, b) => {
          var _ = Pb(), O = ne(_);
          {
            var S = (k) => {
              var N = xb(), x = ne(N), L = B(x);
              Oe(L, {
                level: 3,
                children: (Z, V) => {
                  ve();
                  var W = ke("输入参数");
                  T(Z, W);
                },
                $$slots: { default: !0 }
              });
              var E = D(L, 2);
              {
                var H = (Z) => {
                  Le(Z, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (V, W) => {
                      var Q = bb();
                      T(V, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(E, (Z) => {
                  p.parametersAddEnable !== !1 && Z(H);
                });
              }
              I(x);
              var j = D(x, 2);
              bt(j, {}), T(k, N);
            };
            ae(O, (k) => {
              p.parametersEnable !== !1 && k(S);
            });
          }
          var M = D(O, 2);
          {
            var z = (k) => {
              var N = Ne(), x = ne(N);
              gt(x, 17, () => h, Or, (L, E) => {
                var H = Ne(), j = ne(H);
                {
                  var Z = (W) => {
                    var Q = Cb(), te = ne(Q), K = B(te, !0);
                    I(te);
                    var X = D(te, 2), G = B(X);
                    {
                      let oe = /* @__PURE__ */ P(() => n()[c(E).name] || c(E).defaultValue);
                      Ue(G, Be(
                        {
                          get placeholder() {
                            return c(E).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(oe);
                          }
                        },
                        () => c(E).attrs,
                        {
                          onchange: (se) => {
                            u(c(E).name, se);
                          }
                        }
                      ));
                    }
                    I(X), $e(() => je(K, c(E).label)), T(W, Q);
                  }, V = (W) => {
                    var Q = Ne(), te = ne(Q);
                    {
                      var K = (G) => {
                        var oe = $b(), se = ne(oe), J = B(se, !0);
                        I(se);
                        var we = D(se, 2), ce = B(we);
                        {
                          let ee = /* @__PURE__ */ P(() => n()[c(E).name] || c(E).defaultValue);
                          Ke(ce, Be(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(E).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ee);
                              }
                            },
                            () => c(E).attrs,
                            {
                              onchange: (re) => {
                                u(c(E).name, re);
                              }
                            }
                          ));
                        }
                        I(we), $e(() => je(J, c(E).label)), T(G, oe);
                      }, X = (G) => {
                        var oe = Ne(), se = ne(oe);
                        {
                          var J = (ce) => {
                            var ee = kb(), re = ne(ee), pe = B(re, !0);
                            I(re);
                            var ge = D(re, 2), xe = B(ge), de = B(xe), Ce = B(de);
                            I(de);
                            var Te = D(de, 2), Y = (We) => l({ [c(E).name]: parseFloat(We.target.value) });
                            et(
                              Te,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(E).attrs,
                                value: n()[c(E).name] ?? c(E).defaultValue,
                                oninput: Y
                              }),
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), I(xe), I(ge), $e(() => {
                              je(pe, c(E).label), je(Ce, `${c(E).description ?? ""}: ${n()[c(E).name] ?? c(E).defaultValue ?? ""}`);
                            }), T(ce, ee);
                          }, we = (ce) => {
                            var ee = Ne(), re = ne(ee);
                            {
                              var pe = (xe) => {
                                var de = _b(), Ce = ne(de), Te = B(Ce, !0);
                                I(Ce);
                                var Y = D(Ce, 2), We = B(Y);
                                {
                                  let Ve = /* @__PURE__ */ P(() => c(E).options || []), Ie = /* @__PURE__ */ P(() => n()[c(E).name] ? [n()[c(E).name]] : [c(E).defaultValue]);
                                  ut(We, {
                                    get items() {
                                      return c(Ve);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(E).placeholder;
                                    },
                                    onSelect: (De) => {
                                      const tt = De.value;
                                      l({ [c(E).name]: tt });
                                    },
                                    get value() {
                                      return c(Ie);
                                    }
                                  });
                                }
                                I(Y), $e(() => je(Te, c(E).label)), T(xe, de);
                              }, ge = (xe) => {
                                var de = Ne(), Ce = ne(de);
                                {
                                  var Te = (We) => {
                                    var Ve = Sb(), Ie = ne(Ve), De = B(Ie, !0);
                                    I(Ie);
                                    var tt = D(Ie, 2), Et = B(tt);
                                    {
                                      let Xe = /* @__PURE__ */ P(() => c(E).chosen?.buttonText);
                                      vd(Et, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(E).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Xe);
                                        },
                                        onChosen: (ze, he, Ae) => {
                                          c(E).chosen?.onChosen?.(l, ze, he, Ae);
                                        },
                                        get value() {
                                          return n()[c(E).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(E).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    I(tt), $e(() => je(De, c(E).label)), T(We, Ve);
                                  }, Y = (We) => {
                                    var Ve = Ne(), Ie = ne(Ve);
                                    {
                                      var De = (tt) => {
                                        Oe(tt, Be({ level: 3, mt: "10px" }, () => c(E).attrs, {
                                          children: (Et, Xe) => {
                                            ve();
                                            var ze = ke();
                                            $e(() => je(ze, c(E).label)), T(Et, ze);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        Ie,
                                        (tt) => {
                                          c(E).type === "heading" && tt(De);
                                        },
                                        !0
                                      );
                                    }
                                    T(We, Ve);
                                  };
                                  ae(
                                    Ce,
                                    (We) => {
                                      c(E).type === "chosen" ? We(Te) : We(Y, !1);
                                    },
                                    !0
                                  );
                                }
                                T(xe, de);
                              };
                              ae(
                                re,
                                (xe) => {
                                  c(E).type === "select" ? xe(pe) : xe(ge, !1);
                                },
                                !0
                              );
                            }
                            T(ce, ee);
                          };
                          ae(
                            se,
                            (ce) => {
                              c(E).type === "slider" ? ce(J) : ce(we, !1);
                            },
                            !0
                          );
                        }
                        T(G, oe);
                      };
                      ae(
                        te,
                        (G) => {
                          c(E).type === "textarea" ? G(K) : G(X, !1);
                        },
                        !0
                      );
                    }
                    T(W, Q);
                  };
                  ae(j, (W) => {
                    c(E).type === "input" ? W(Z) : W(V, !1);
                  });
                }
                T(L, H);
              }), T(k, N);
            };
            ae(M, (k) => {
              h && k(z);
            });
          }
          var R = D(M, 2);
          Tt(R, (k) => g = k, () => g);
          var q = D(R, 2);
          {
            var A = (k) => {
              var N = Eb(), x = ne(N), L = B(x);
              Oe(L, {
                level: 3,
                mt: "10px",
                children: (Z, V) => {
                  ve();
                  var W = ke("输出参数");
                  T(Z, W);
                },
                $$slots: { default: !0 }
              });
              var E = D(L, 2);
              {
                var H = (Z) => {
                  Le(Z, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (V, W) => {
                      var Q = Nb();
                      T(V, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(E, (Z) => {
                  p.outputDefsAddEnable !== !1 && Z(H);
                });
              }
              I(x);
              var j = D(x, 2);
              _n(j, {}), T(k, N);
            };
            ae(q, (k) => {
              p.outputDefsEnable !== !1 && k(A);
            });
          }
          $e(() => {
            dt(R, p.rootStyle || ""), Nt(R, 1, Cn(p.rootClass), "svelte-qt4m0r");
          }), T($, _);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(y);
}
ie(Ud, { data: {} }, [], [], !0);
const Ob = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ze.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ze.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Tb = () => ({ deleteEdge: (e) => {
  Ze.removeEdge(e);
} });
var Mb = /* @__PURE__ */ U('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Vb = /* @__PURE__ */ U("<!> <!> <!> <!>", 1), zb = /* @__PURE__ */ U('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Hb = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Qd(e, t) {
  le(t, !0), Me(e, Hb);
  const n = m(t, "onInit", 7), r = pt();
  n()(r);
  let o = /* @__PURE__ */ Ee(!1), i = /* @__PURE__ */ Ee(null);
  const { updateEdgeData: s } = Ob(), a = (L) => {
    L.preventDefault(), L.dataTransfer && (L.dataTransfer.dropEffect = "move");
  }, l = (L) => {
    L.preventDefault();
    const E = r.screenToFlowPosition({ x: L.clientX - 250, y: L.clientY - 100 }), H = L.dataTransfer?.getData("application/tinyflow");
    if (!H)
      return;
    const j = JSON.parse(H), Z = { id: `node_${lr()}`, position: E, data: {}, ...j };
    Ze.addNode(Z), Ze.selectNodeOnly(Z.id);
  }, { getNode: u } = mb(), d = (L) => {
    const E = u(L.source), H = u(L.target);
    if (L.sourceHandle === "loop_handle" || E.parentId) {
      const j = r.getEdges();
      for (let Z of j)
        if (Z.target === L.target) {
          const V = u(Z.source);
          if (L.sourceHandle === "loop_handle" && V.parentId !== E.id || E.parentId && V.parentId !== E.parentId)
            return !1;
        }
    }
    return !(!E.parentId && H.parentId && H.parentId !== E.id);
  }, { ensureParentInNodesBefore: f } = yb(), p = (L, E) => {
    if (!E.isValid)
      return;
    const H = E.toNode;
    if (H.parentId)
      return;
    const j = E.fromNode, Z = E.fromHandle, V = { position: { ...H.position } };
    if (Z.id === "loop_handle" ? V.parentId = j.id : j.parentId && (V.parentId = j.parentId), V.parentId) {
      const W = u(V.parentId);
      V.position = {
        x: H.position.x - W.position.x,
        y: H.position.y - W.position.y
      }, f(V.parentId, H.id), r.updateNode(H.id, V);
    }
    setTimeout(() => {
      Ze.getEdges().forEach((W) => {
        W.target === H.id && W.source == j.id && (F(o, !0), F(i, W, !0));
      });
    });
  }, { getEdgesByTarget: h } = wb(), g = (L) => {
    L.edges.forEach((E) => {
      E.id === c(i)?.id && (F(i, null), F(o, !1));
      const H = u(E.target);
      if (H && H.parentId) {
        const j = h(E.target), Z = u(H.parentId);
        if (j.length === 0)
          r.updateNode(H.id, {
            parentId: void 0,
            position: {
              x: H.position.x + Z.position.x,
              y: H.position.y + Z.position.y
            }
          });
        else {
          let V = !1;
          for (let W = 0; W < j.length; W++) {
            const Q = j[W], te = u(Q.source);
            if (te.parentId || te.type === "loopNode") {
              V = !0;
              break;
            }
          }
          V || r.updateNode(H.id, {
            parentId: void 0,
            position: {
              x: H.position.x + Z.position.x,
              y: H.position.y + Z.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = Tb(), w = (L, E) => {
  }, C = (L) => {
  }, $ = {
    // ...nodeTypes
  }, b = In().customNodes;
  if (b)
    for (let L of Object.keys(b))
      $[L] = Ud;
  const _ = In().onDataChange;
  Ye(() => {
    _?.({
      nodes: Ze.getNodes(),
      edges: Ze.getEdges(),
      viewport: Ze.getViewport()
    });
  });
  var O = {
    get onInit() {
      return n();
    },
    set onInit(L) {
      n(L), v();
    }
  }, S = zb(), M = B(S), z = Ze.getNodes, R = Ze.setNodes, q = Ze.getEdges, A = Ze.setEdges, k = Ze.getViewport, N = Ze.setViewport;
  {
    let L = /* @__PURE__ */ P(() => ({ ...pb, ...$ })), E = /* @__PURE__ */ P(() => ({
      markerEnd: { type: io.ArrowClosed, width: 20, height: 20 }
    }));
    td(M, {
      get nodeTypes() {
        return c(L);
      },
      get nodes() {
        return z();
      },
      set nodes(H) {
        R(H);
      },
      get edges() {
        return q();
      },
      set edges(H) {
        A(H);
      },
      get viewport() {
        return k();
      },
      set viewport(H) {
        N(H);
      },
      class: "tinyflow-logo",
      ondrop: l,
      ondragover: a,
      isValidConnection: d,
      onconnectend: p,
      onconnectstart: w,
      onconnect: C,
      connectionRadius: 50,
      onedgeclick: (H) => {
        F(o, !0), F(i, H.edge, !0);
      },
      onbeforeconnect: (H) => ({ ...H, id: lr() }),
      ondelete: g,
      onclick: (H) => {
        const j = H.target;
        j.classList.contains("svelte-flow__edge-interaction") || j.classList.contains("panel-content") || j.closest(".panel-content") || (F(o, !1), F(i, null));
      },
      get defaultEdgeOptions() {
        return c(E);
      },
      children: (H, j) => {
        var Z = Vb(), V = ne(Z);
        dd(V, {});
        var W = D(V, 2);
        ld(W, {});
        var Q = D(W, 2);
        fd(Q, {});
        var te = D(Q, 2);
        {
          var K = (X) => {
            _o(X, {
              children: (G, oe) => {
                var se = Mb(), J = D(B(se), 4), we = B(J);
                {
                  let pe = /* @__PURE__ */ P(() => c(i)?.data?.condition);
                  Ke(we, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(pe);
                    },
                    onchange: (ge) => {
                      c(i) && s(c(i).id, { condition: ge.target?.value });
                    }
                  });
                }
                I(J);
                var ce = D(J, 2), ee = B(ce);
                Le(ee, {
                  onclick: () => {
                    y(c(i)?.id), F(o, !1);
                  },
                  children: (pe, ge) => {
                    ve();
                    var xe = ke("删除");
                    T(pe, xe);
                  },
                  $$slots: { default: !0 }
                });
                var re = D(ee, 2);
                Le(re, {
                  primary: !0,
                  onclick: () => {
                    F(o, !1);
                  },
                  children: (pe, ge) => {
                    ve();
                    var xe = ke("保存");
                    T(pe, xe);
                  },
                  $$slots: { default: !0 }
                }), I(ce), I(se), T(G, se);
              },
              $$slots: { default: !0 }
            });
          };
          ae(te, (X) => {
            c(o) && X(K);
          });
        }
        T(H, Z);
      },
      $$slots: { default: !0 }
    });
  }
  var x = D(M, 2);
  return Gd(x, {}), I(S), T(e, S), ue(O);
}
ie(Qd, { onInit: {} }, [], [], !0);
function Db(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Ze.init(o?.nodes || [], o?.edges || []), Sr("tinyflow_options", n());
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
  return nd(e, {
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
customElements.define("tinyflow-component", ie(Db, { options: {}, onInit: {} }, [], [], !1));
const Ib = /* @__PURE__ */ ep({
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
    const n = e, r = tp(null);
    let o = null;
    return np(() => {
      r.value && (o = new Fm({
        ...n,
        element: r.value
      }));
    }), rp(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (ip(), op("div", {
      ref_key: "divRef",
      ref: r,
      class: ap(["tinyflow", s.className]),
      style: sp(s.style)
    }, null, 6));
  }
});
export {
  Ib as Tinyflow
};
//# sourceMappingURL=index.js.map
