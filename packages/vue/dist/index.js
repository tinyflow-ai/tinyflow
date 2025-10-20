import { defineComponent as np, ref as rp, onMounted as op, onUnmounted as ip, createElementBlock as sp, openBlock as ap, normalizeStyle as lp, normalizeClass as up } from "vue";
const cp = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(cp);
const $s = 1, ks = 2, El = 4, dp = 8, pp = 16, fp = 1, hp = 2, Pl = 4, gp = 8, vp = 16, Ml = 1, mp = 2, Tl = "[", hi = "[!", _s = "]", rr = {}, nt = Symbol(), yp = "http://www.w3.org/1999/xhtml", wp = "http://www.w3.org/2000/svg", bp = "@attach", xp = !1;
var po = Array.isArray, Cp = Array.prototype.indexOf, Ss = Array.from, Fo = Object.keys, kr = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, Ll = Object.getOwnPropertyDescriptors, Ol = Object.prototype, $p = Array.prototype, gi = Object.getPrototypeOf, ha = Object.isExtensible;
function Kr(e) {
  return typeof e == "function";
}
const dt = () => {
};
function kp(e) {
  return e();
}
function Wo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function _p() {
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
const Tt = 2, Ns = 4, vi = 8, Ir = 16, Cn = 32, Rn = 64, Es = 128, Dt = 256, Jo = 512, ht = 1024, At = 2048, Kn = 4096, Xt = 8192, ur = 16384, Ps = 32768, cr = 65536, ga = 1 << 17, Sp = 1 << 18, dr = 1 << 19, Vl = 1 << 20, Ui = 1 << 21, Ms = 1 << 22, Gn = 1 << 23, on = Symbol("$state"), Ts = Symbol("legacy props"), Np = Symbol(""), Ls = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ep = 1, mi = 3, pr = 8;
function Os(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Pp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Mp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Tp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Lp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Op() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Hp(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function zp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Dp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ap() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ip() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ho(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Zp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Bp() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let ye = !1;
function wt(e) {
  ye = e;
}
let _e;
function Ge(e) {
  if (e === null)
    throw ho(), rr;
  return _e = e;
}
function wn() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(_e)
  );
}
function Z(e) {
  if (ye) {
    if (/* @__PURE__ */ Wt(_e) !== null)
      throw ho(), rr;
    _e = e;
  }
}
function me(e = 1) {
  if (ye) {
    for (var t = e, n = _e; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(n);
    _e = n;
  }
}
function Uo(e = !0) {
  for (var t = 0, n = _e; ; ) {
    if (n.nodeType === pr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === _s) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Tl || r === hi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(n)
    );
    e && n.remove(), n = o;
  }
}
function Hl(e) {
  if (!e || e.nodeType !== pr)
    throw ho(), rr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function zl(e) {
  return e === this.v;
}
function Dl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Al(e) {
  return !Dl(e, this.v);
}
let Zr = !1, Rp = !1;
function Kp() {
  Zr = !0;
}
const jp = [];
function Il(e, t = !1, n = !1) {
  return Zo(e, /* @__PURE__ */ new Map(), "", jp, null, n);
}
function Zo(e, t, n, r, o = null, i = !1) {
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
        l in e && (a[l] = Zo(u, t, n, r, null, i));
      }
      return a;
    }
    if (gi(e) === Ol) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Zo(
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
      return Zo(
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
let Ye = null;
function _r(e) {
  Ye = e;
}
function Dn(e) {
  return (
    /** @type {T} */
    Zl().get(e)
  );
}
function Sr(e, t) {
  return Zl().set(e, t), t;
}
function le(e, t = !1, n) {
  Ye = {
    p: Ye,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Zr && !t ? { s: null, u: null, $: [] } : null
  };
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    Ye
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      iu(r);
  }
  return e !== void 0 && (t.x = e), Ye = t.p, e ?? /** @type {T} */
  {};
}
function go() {
  return !Zr || Ye !== null && Ye.l === null;
}
function Zl(e) {
  return Ye === null && Os(), Ye.c ??= new Map(Yp(Ye) || void 0);
}
function Yp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
const Xp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Tn = [], Nr = [];
function Bl() {
  var e = Tn;
  Tn = [], Wo(e);
}
function Rl() {
  var e = Nr;
  Nr = [], Wo(e);
}
function qp() {
  return Tn.length > 0 || Nr.length > 0;
}
function fr(e) {
  if (Tn.length === 0 && !Jr) {
    var t = Tn;
    queueMicrotask(() => {
      t === Tn && Bl();
    });
  }
  Tn.push(e);
}
function Fp(e) {
  Nr.length === 0 && Xp(Rl), Nr.push(e);
}
function Wp() {
  Tn.length > 0 && Bl(), Nr.length > 0 && Rl();
}
const Jp = /* @__PURE__ */ new WeakMap();
function Kl(e) {
  var t = Se;
  if (t === null)
    return Me.f |= Gn, e;
  if ((t.f & Ps) === 0) {
    if ((t.f & Es) === 0)
      throw !t.parent && e instanceof Error && jl(e), e;
    t.b.error(e);
  } else
    Er(e, t);
}
function Er(e, t) {
  for (; t !== null; ) {
    if ((t.f & Es) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && jl(e), e;
}
function jl(e) {
  const t = Jp.get(e);
  t && (kr(e, "message", {
    value: t.message
  }), kr(e, "stack", {
    value: t.stack
  }));
}
const Hi = /* @__PURE__ */ new Set();
let rt = null, Gi = /* @__PURE__ */ new Set(), or = [], yi = null, Qi = !1, Jr = !1;
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
    or = [];
    for (const o of t)
      this.#f(o);
    if (this.#s.length === 0 && this.#a === 0) {
      this.#h();
      var n = this.#n, r = this.#o;
      this.#n = [], this.#o = [], this.#l = [], rt = null, va(n), va(r), rt === null ? rt = this : Hi.delete(this), this.#i?.resolve();
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
      var r = n.f, o = (r & (Cn | Rn)) !== 0, i = o && (r & ht) !== 0, s = i || (r & Xt) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (o)
          n.f ^= ht;
        else if ((r & Ns) !== 0)
          this.#o.push(n);
        else if ((r & ht) === 0)
          if ((r & Ms) !== 0) {
            var a = n.b?.is_pending() ? this.#r : this.#s;
            a.push(n);
          } else bi(n) && ((n.f & Ir) !== 0 && this.#l.push(n), wr(n));
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
    for (const t of Gi)
      if (Gi.delete(t), t(), rt !== null)
        break;
  }
  neuter() {
    this.#d = !0;
  }
  flush() {
    or.length > 0 ? Yl() : this.#h(), rt === this && (this.#a === 0 && Hi.delete(this), this.deactivate());
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
        _t(t, Kn), Pr(t);
      this.#n = [], this.#o = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#i ??= _p()).promise;
  }
  static ensure() {
    if (rt === null) {
      const t = rt = new sn();
      Hi.add(rt), Jr || sn.enqueue(() => {
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
  var t = Jr;
  Jr = !0;
  try {
    for (var n; ; ) {
      if (Wp(), or.length === 0 && !qp() && (rt?.flush(), or.length === 0))
        return yi = null, /** @type {T} */
        n;
      Yl();
    }
  } finally {
    Jr = t;
  }
}
function Yl() {
  var e = yr;
  Qi = !0;
  try {
    var t = 0;
    for (ba(!0); or.length > 0; ) {
      var n = sn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Up();
      }
      n.process(or), Hn.clear();
    }
  } finally {
    Qi = !1, ba(e), yi = null;
  }
}
function Up() {
  try {
    Op();
  } catch (e) {
    Er(e, yi);
  }
}
let Wn = null;
function va(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ur | Xt)) === 0 && bi(r) && (Wn = [], wr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? cu(r) : r.fn = null), Wn?.length > 0)) {
        Hn.clear();
        for (const o of Wn)
          wr(o);
        Wn = [];
      }
    }
    Wn = null;
  }
}
function Pr(e) {
  for (var t = yi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Qi && t === Se && (n & Ir) !== 0)
      return;
    if ((n & (Rn | Cn)) !== 0) {
      if ((n & ht) === 0) return;
      t.f ^= ht;
    }
  }
  or.push(t);
}
function Xl(e) {
  let t = 0, n = An(0), r;
  return () => {
    df() && (c(n), mo(() => (t === 0 && (r = ut(() => e(() => Ur(n)))), t += 1, () => {
      fr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ur(n));
      });
    })));
  };
}
var Gp = cr | dr | Es;
function Qp(e, t, n) {
  new ef(e, t, n);
}
class ef {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #a = ye ? _e : null;
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
    this.#u && Mr(this.#u, this.#p);
  };
  #y = Xl(() => (this.#u = An(this.#p), () => {
    this.#u = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#i = n, this.#d = r, this.parent = /** @type {Effect} */
    Se.b, this.#t = !!this.#i.pending, this.#s = jn(() => {
      if (Se.b = this, ye) {
        const o = this.#a;
        wn(), /** @type {Comment} */
        o.nodeType === pr && /** @type {Comment} */
        o.data === hi ? this.#b() : this.#w();
      } else {
        try {
          this.#r = lt(() => r(this.#e));
        } catch (o) {
          this.error(o);
        }
        this.#c > 0 ? this.#v() : this.#t = !1;
      }
    }, Gp), ye && (this.#e = _e);
  }
  #w() {
    try {
      this.#r = lt(() => this.#d(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #b() {
    const t = this.#i.pending;
    t && (this.#n = lt(() => t(this.#e)), sn.enqueue(() => {
      this.#r = this.#g(() => (sn.ensure(), lt(() => this.#d(this.#e)))), this.#c > 0 ? this.#v() : (zn(
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
    var n = Se, r = Me, o = Ye;
    Zt(this.#s), $t(this.#s), _r(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return Kl(i), null;
    } finally {
      Zt(n), $t(r), _r(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#r !== null && (this.#l = document.createDocumentFragment(), tf(this.#r, this.#l)), this.#n === null && (this.#n = lt(() => t(this.#e)));
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
    this.#c += t, this.#c === 0 && (this.#t = !1, this.#n && zn(this.#n, () => {
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
    this.#m(t), this.#p += t, Gi.add(this.#h);
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
    this.#r && (ot(this.#r), this.#r = null), this.#n && (ot(this.#n), this.#n = null), this.#o && (ot(this.#o), this.#o = null), ye && (Ge(
      /** @type {TemplateNode} */
      this.#a
    ), me(), Ge(Uo()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Bp();
        return;
      }
      o = !0, i && Ip(), sn.ensure(), this.#p = 0, this.#o !== null && zn(this.#o, () => {
        this.#o = null;
      }), this.#t = this.has_pending_snippet(), this.#r = this.#g(() => (this.#f = !1, lt(() => this.#d(this.#e)))), this.#c > 0 ? this.#v() : this.#t = !1;
    };
    var a = Me;
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
          return lt(() => {
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
function tf(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(n)
    );
    t.append(n), n = o;
  }
}
function ql(e, t, n) {
  const r = go() ? vo : Vs;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = rt, i = (
    /** @type {Effect} */
    Se
  ), s = nf(), a = ye;
  Promise.all(t.map((l) => /* @__PURE__ */ rf(l))).then((l) => {
    o?.activate(), s();
    try {
      n([...e.map(r), ...l]);
    } catch (u) {
      (i.f & ur) === 0 && Er(u, i);
    }
    a && wt(!1), o?.deactivate(), Fl();
  }).catch((l) => {
    Er(l, i);
  });
}
function nf() {
  var e = Se, t = Me, n = Ye, r = rt, o = ye;
  if (o)
    var i = _e;
  return function() {
    Zt(e), $t(t), _r(n), r?.activate(), o && (wt(!0), Ge(i));
  };
}
function Fl() {
  Zt(null), $t(null), _r(null);
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  var t = Tt | At, n = Me !== null && (Me.f & Tt) !== 0 ? (
    /** @type {Derived} */
    Me
  ) : null;
  return Se === null || n !== null && (n.f & Dt) !== 0 ? t |= Dt : Se.f |= dr, {
    ctx: Ye,
    deps: null,
    effects: null,
    equals: zl,
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
function rf(e, t) {
  let n = (
    /** @type {Effect | null} */
    Se
  );
  n === null && Pp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = An(
    /** @type {V} */
    nt
  ), s = null, a = !Me;
  return ff(() => {
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
      s = null, f || d.activate(), g ? g !== Ls && (i.f |= Gn, Mr(i, g)) : ((i.f & Gn) !== 0 && (i.f ^= Gn), Mr(i, h)), a && (r.update_pending_count(-1), f || d.decrement()), Fl();
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
function E(e) {
  const t = /* @__PURE__ */ vo(e);
  return fu(t), t;
}
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  const t = /* @__PURE__ */ vo(e);
  return t.equals = Al, t;
}
function Wl(e) {
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
function of(e) {
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
function Hs(e) {
  var t, n = Se;
  Zt(of(e));
  try {
    Wl(e), t = mu(e);
  } finally {
    Zt(n);
  }
  return t;
}
function Jl(e) {
  var t = Hs(e);
  if (e.equals(t) || (e.v = t, e.wv = gu()), !hr) {
    var n = (Ln || (e.f & Dt) !== 0) && e.deps !== null ? Kn : ht;
    _t(e, n);
  }
}
const Hn = /* @__PURE__ */ new Map();
function An(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: zl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const n = An(e);
  return fu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ul(e, t = !1, n = !0) {
  const r = An(e);
  return t || (r.equals = Al), Zr && n && Ye !== null && Ye.l !== null && (Ye.l.s ??= []).push(r), r;
}
function U(e, t, n = !1) {
  Me !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Kt || (Me.f & ga) !== 0) && go() && (Me.f & (Tt | Ir | Ms | ga)) !== 0 && !yn?.includes(e) && Ap();
  let r = n ? zt(t) : t;
  return Mr(e, r);
}
function Mr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    hr ? Hn.set(e, t) : Hn.set(e, n), e.v = t;
    var r = sn.ensure();
    r.capture(e, n), (e.f & Tt) !== 0 && ((e.f & At) !== 0 && Hs(
      /** @type {Derived} */
      e
    ), _t(e, (e.f & Dt) === 0 ? ht : Kn)), e.wv = gu(), Gl(e, At), go() && Se !== null && (Se.f & ht) !== 0 && (Se.f & (Cn | Rn)) === 0 && (Vt === null ? gf([e]) : Vt.push(e));
  }
  return t;
}
function ma(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Ur(e) {
  U(e, e.v + 1);
}
function Gl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = go(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Se)) {
        var l = (a & At) === 0;
        l && _t(s, t), (a & Tt) !== 0 ? Gl(
          /** @type {Derived} */
          s,
          Kn
        ) : l && ((a & Ir) !== 0 && Wn !== null && Wn.push(
          /** @type {Effect} */
          s
        ), Pr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function zt(e) {
  if (typeof e != "object" || e === null || on in e)
    return e;
  const t = gi(e);
  if (t !== Ol && t !== $p)
    return e;
  var n = /* @__PURE__ */ new Map(), r = po(e), o = /* @__PURE__ */ Ee(0), i = Qn, s = (a) => {
    if (Qn === i)
      return a();
    var l = Me, u = Qn;
    $t(null), Ca(i);
    var d = a();
    return $t(l), Ca(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && zp();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ Ee(u.value);
          return n.set(l, f), f;
        }) : U(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Ee(nt));
            n.set(l, d), Ur(o);
          }
        } else
          U(u, nt), Ur(o);
        return !0;
      },
      get(a, l, u) {
        if (l === on)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || mn(a, l)?.writable) && (d = s(() => {
          var h = zt(f ? a[l] : nt), g = /* @__PURE__ */ Ee(h);
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
            var p = d ? zt(a[l]) : nt, h = /* @__PURE__ */ Ee(p);
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
            g !== void 0 ? U(g, nt) : h in a && (g = s(() => /* @__PURE__ */ Ee(nt)), n.set(h + "", g));
          }
        if (f === void 0)
          (!p || mn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Ee(void 0)), U(f, zt(u)), n.set(l, f));
        else {
          p = f.v !== nt;
          var y = s(() => zt(u));
          U(f, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), $ = Number(l);
            Number.isInteger($) && $ >= C.v && U(C, $ + 1);
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
        Dp();
      }
    }
  );
}
function ya(e) {
  try {
    if (e !== null && typeof e == "object" && on in e)
      return e[on];
  } catch {
  }
  return e;
}
function sf(e, t) {
  return Object.is(ya(e), ya(t));
}
var Ct, Ql, eu, tu;
function es() {
  if (Ct === void 0) {
    Ct = window, Ql = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    eu = mn(t, "firstChild").get, tu = mn(t, "nextSibling").get, ha(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ha(n) && (n.__t = void 0);
  }
}
function It(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return eu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return tu.call(e);
}
function B(e, t) {
  if (!ye)
    return /* @__PURE__ */ Qe(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(_e)
  );
  if (n === null)
    n = _e.appendChild(It());
  else if (t && n.nodeType !== mi) {
    var r = It();
    return n?.before(r), Ge(r), r;
  }
  return Ge(n), n;
}
function oe(e, t = !1) {
  if (!ye) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qe(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Wt(n) : n;
  }
  if (t && _e?.nodeType !== mi) {
    var r = It();
    return _e?.before(r), Ge(r), r;
  }
  return _e;
}
function z(e, t = 1, n = !1) {
  let r = ye ? _e : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(r);
  if (!ye)
    return r;
  if (n && r?.nodeType !== mi) {
    var i = It();
    return r === null ? o?.after(i) : r.before(i), Ge(i), i;
  }
  return Ge(r), /** @type {TemplateNode} */
  r;
}
function zs(e) {
  e.textContent = "";
}
function nu() {
  return !1;
}
function af(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, fr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function lf(e) {
  ye && /* @__PURE__ */ Qe(e) !== null && zs(e);
}
let wa = !1;
function uf() {
  wa || (wa = !0, document.addEventListener(
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
function Ds(e) {
  var t = Me, n = Se;
  $t(null), Zt(null);
  try {
    return e();
  } finally {
    $t(t), Zt(n);
  }
}
function ru(e) {
  Se === null && Me === null && Lp(), Me !== null && (Me.f & Dt) !== 0 && Se === null && Tp(), hr && Mp();
}
function cf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Jt(e, t, n, r = !0) {
  var o = Se;
  o !== null && (o.f & Xt) !== 0 && (e |= Xt);
  var i = {
    ctx: Ye,
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
      wr(i), i.f |= Ps;
    } catch (l) {
      throw ot(i), l;
    }
  else t !== null && Pr(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & dr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && cf(s, o), Me !== null && (Me.f & Tt) !== 0 && (e & Rn) === 0)) {
      var a = (
        /** @type {Derived} */
        Me
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function df() {
  return Me !== null && !Kt;
}
function ou(e) {
  const t = Jt(vi, null, !1);
  return _t(t, ht), t.teardown = e, t;
}
function Xe(e) {
  ru();
  var t = (
    /** @type {Effect} */
    Se.f
  ), n = !Me && (t & Cn) !== 0 && (t & Ps) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ye
    );
    (r.e ??= []).push(e);
  } else
    return iu(e);
}
function iu(e) {
  return Jt(Ns | Vl, e, !1);
}
function su(e) {
  return ru(), Jt(vi | Vl, e, !0);
}
function As(e) {
  sn.ensure();
  const t = Jt(Rn | dr, e, !0);
  return () => {
    ot(t);
  };
}
function pf(e) {
  sn.ensure();
  const t = Jt(Rn | dr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? zn(t, () => {
      ot(t), r(void 0);
    }) : (ot(t), r(void 0));
  });
}
function Br(e) {
  return Jt(Ns, e, !1);
}
function ff(e) {
  return Jt(Ms | dr, e, !0);
}
function mo(e, t = 0) {
  return Jt(vi | t, e, !0);
}
function $e(e, t = [], n = []) {
  ql(t, n, (r) => {
    Jt(vi, () => e(...r.map(c)), !0);
  });
}
function jn(e, t = 0) {
  var n = Jt(Ir | t, e, !0);
  return n;
}
function lt(e, t = !0) {
  return Jt(Cn | dr, e, !0, t);
}
function au(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = hr, r = Me;
    xa(!0), $t(null);
    try {
      t.call(null);
    } finally {
      xa(n), $t(r);
    }
  }
}
function lu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Ds(() => {
      o.abort(Ls);
    });
    var r = n.next;
    (n.f & Rn) !== 0 ? n.parent = null : ot(n, t), n = r;
  }
}
function hf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Cn) === 0 && ot(t), t = n;
  }
}
function ot(e, t = !0) {
  var n = !1;
  (t || (e.f & Sp) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (uu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), lu(e, t && !n), Go(e, 0), _t(e, ur);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  au(e);
  var o = e.parent;
  o !== null && o.first !== null && cu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function uu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(e)
    );
    e.remove(), e = n;
  }
}
function cu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function zn(e, t) {
  var n = [];
  Is(e, n, !0), du(n, () => {
    ot(e), t && t();
  });
}
function du(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Is(e, t, n) {
  if ((e.f & Xt) === 0) {
    if (e.f ^= Xt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & cr) !== 0 || (r.f & Cn) !== 0;
      Is(r, t, i ? n : !1), r = o;
    }
  }
}
function wi(e) {
  pu(e, !0);
}
function pu(e, t) {
  if ((e.f & Xt) !== 0) {
    e.f ^= Xt, (e.f & ht) === 0 && (_t(e, At), Pr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & cr) !== 0 || (n.f & Cn) !== 0;
      pu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let yr = !1;
function ba(e) {
  yr = e;
}
let hr = !1;
function xa(e) {
  hr = e;
}
let Me = null, Kt = !1;
function $t(e) {
  Me = e;
}
let Se = null;
function Zt(e) {
  Se = e;
}
let yn = null;
function fu(e) {
  Me !== null && (yn === null ? yn = [e] : yn.push(e));
}
let yt = null, Pt = 0, Vt = null;
function gf(e) {
  Vt = e;
}
let hu = 1, Qr = 0, Qn = Qr;
function Ca(e) {
  Qn = e;
}
let Ln = !1;
function gu() {
  return ++hu;
}
function bi(e) {
  var t = e.f;
  if ((t & At) !== 0)
    return !0;
  if ((t & Kn) !== 0) {
    var n = e.deps, r = (t & Dt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Jo) !== 0, a = r && Se !== null && !Ln, l = n.length;
      if ((s || a) && (Se === null || (Se.f & ur) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= Jo), a && d !== null && (d.f & Dt) === 0 && (u.f ^= Dt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], bi(
          /** @type {Derived} */
          i
        ) && Jl(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Se !== null && !Ln) && _t(e, ht);
  }
  return !1;
}
function vu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !yn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Tt) !== 0 ? vu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? _t(i, At) : (i.f & ht) !== 0 && _t(i, Kn), Pr(
        /** @type {Effect} */
        i
      ));
    }
}
function mu(e) {
  var t = yt, n = Pt, r = Vt, o = Me, i = Ln, s = yn, a = Ye, l = Kt, u = Qn, d = e.f;
  yt = /** @type {null | Value[]} */
  null, Pt = 0, Vt = null, Ln = (d & Dt) !== 0 && (Kt || !yr || Me === null), Me = (d & (Cn | Rn)) === 0 ? e : null, yn = null, _r(e.ctx), Kt = !1, Qn = ++Qr, e.ac !== null && (Ds(() => {
    e.ac.abort(Ls);
  }), e.ac = null);
  try {
    e.f |= Ui;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f(), h = e.deps;
    if (yt !== null) {
      var g;
      if (Go(e, Pt), h !== null && Pt > 0)
        for (h.length = Pt + yt.length, g = 0; g < yt.length; g++)
          h[Pt + g] = yt[g];
      else
        e.deps = h = yt;
      if (!Ln || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Tt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Pt; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && Pt < h.length && (Go(e, Pt), h.length = Pt);
    if (go() && Vt !== null && !Kt && h !== null && (e.f & (Tt | Kn | At)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Vt.length; g++)
        vu(
          Vt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Qr++, Vt !== null && (r === null ? r = Vt : r.push(.../** @type {Source[]} */
    Vt))), (e.f & Gn) !== 0 && (e.f ^= Gn), p;
  } catch (y) {
    return Kl(y);
  } finally {
    e.f ^= Ui, yt = t, Pt = n, Vt = r, Me = o, Ln = i, yn = s, _r(a), Kt = l, Qn = u;
  }
}
function vf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Cp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Tt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (yt === null || !yt.includes(t)) && (_t(t, Kn), (t.f & (Dt | Jo)) === 0 && (t.f ^= Jo), Wl(
    /** @type {Derived} **/
    t
  ), Go(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Go(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      vf(e, n[r]);
}
function wr(e) {
  var t = e.f;
  if ((t & ur) === 0) {
    _t(e, ht);
    var n = Se, r = yr;
    Se = e, yr = !0;
    try {
      (t & Ir) !== 0 ? hf(e) : lu(e), au(e);
      var o = mu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = hu;
      var i;
      xp && Rp && (e.f & At) !== 0 && e.deps;
    } finally {
      yr = r, Se = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & Tt) !== 0;
  if (Me !== null && !Kt) {
    var r = Se !== null && (Se.f & ur) !== 0;
    if (!r && !yn?.includes(e)) {
      var o = Me.deps;
      if ((Me.f & Ui) !== 0)
        e.rv < Qr && (e.rv = Qr, yt === null && o !== null && o[Pt] === e ? Pt++ : yt === null ? yt = [e] : (!Ln || !yt.includes(e)) && yt.push(e));
      else {
        (Me.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Me] : i.includes(Me) || i.push(Me);
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
    if (Hn.has(e))
      return Hn.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & ht) === 0 && s.reactions !== null || yu(s)) && (l = Hs(s)), Hn.set(s, l), l;
    }
  } else n && (s = /** @type {Derived} */
  e, bi(s) && Jl(s));
  if ((e.f & Gn) !== 0)
    throw e.v;
  return e.v;
}
function yu(e) {
  if (e.v === nt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Hn.has(t) || (t.f & Tt) !== 0 && yu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ut(e) {
  var t = Kt;
  try {
    return Kt = !0, e();
  } finally {
    Kt = t;
  }
}
const mf = -7169;
function _t(e, t) {
  e.f = e.f & mf | t;
}
function yf(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Zs(e) {
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
    const n = gi(e);
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
const wu = /* @__PURE__ */ new Set(), ns = /* @__PURE__ */ new Set();
function Bs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Xr.call(t, i), !i.cancelBubble)
      return Ds(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? fr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function rs(e, t, n, r = {}) {
  var o = Bs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function $a(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Bs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ou(() => {
    t.removeEventListener(e, s, i);
  });
}
function Yn(e) {
  for (var t = 0; t < e.length; t++)
    wu.add(e[t]);
  for (var n of ns)
    n(e);
}
let ka = null;
function Xr(e) {
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
    kr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Me, f = Se;
    $t(null), Zt(null);
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
      e.__root = t, delete e.currentTarget, $t(d), Zt(f);
    }
  }
}
function Rs(e) {
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
function ee(e, t) {
  var n = (t & Ml) !== 0, r = (t & mp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (ye)
      return St(_e, null), _e;
    o === void 0 && (o = Rs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Qe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Ql ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(s)
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
function wf(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ml) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (ye)
      return St(_e, null), _e;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Rs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Qe(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Qe(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Qe(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Qe(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(u)
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
function he(e, t) {
  return /* @__PURE__ */ wf(e, t, "svg");
}
function ke(e = "") {
  if (!ye) {
    var t = It(e + "");
    return St(t, t), t;
  }
  var n = _e;
  return n.nodeType !== mi && (n.before(n = It()), Ge(n)), St(n, n), n;
}
function Ne() {
  if (ye)
    return St(_e, null), _e;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = It();
  return e.append(t, n), St(t, n), e;
}
function L(e, t) {
  if (ye) {
    Se.nodes_end = _e, wn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function bf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const xf = [
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
function Cf(e) {
  return xf.includes(e);
}
const $f = {
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
function kf(e) {
  return e = e.toLowerCase(), $f[e] ?? e;
}
const _f = ["touchstart", "touchmove"];
function Sf(e) {
  return _f.includes(e);
}
const Nf = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Ef(e) {
  return Nf.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Re(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function bu(e, t) {
  return xu(e, t);
}
function Pf(e, t) {
  es(), t.intro = t.intro ?? !1;
  const n = t.target, r = ye, o = _e;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(n)
    ); i && (i.nodeType !== pr || /** @type {Comment} */
    i.data !== Tl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(i);
    if (!i)
      throw rr;
    wt(!0), Ge(
      /** @type {Comment} */
      i
    );
    const s = xu(e, { ...t, anchor: i });
    return wt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== rr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Vp(), es(), zs(n), wt(!1), bu(e, t);
  } finally {
    wt(r), Ge(o);
  }
}
const gr = /* @__PURE__ */ new Map();
function xu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  es();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var h = f[p];
      if (!a.has(h)) {
        a.add(h);
        var g = Sf(h);
        t.addEventListener(h, Xr, { passive: g });
        var y = gr.get(h);
        y === void 0 ? (document.addEventListener(h, Xr, { passive: g }), gr.set(h, 1)) : gr.set(h, y + 1);
      }
    }
  };
  l(Ss(wu)), ns.add(l);
  var u = void 0, d = pf(() => {
    var f = n ?? t.appendChild(It());
    return Qp(
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
            Ye
          );
          h.c = i;
        }
        if (o && (r.$$events = o), ye && St(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, r) || {}, ye && (Se.nodes_end = _e, _e === null || _e.nodeType !== pr || /** @type {Comment} */
        _e.data !== _s))
          throw ho(), rr;
        i && ue();
      }
    ), () => {
      for (var p of a) {
        t.removeEventListener(p, Xr);
        var h = (
          /** @type {number} */
          gr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, Xr), gr.delete(p)) : gr.set(p, h);
      }
      ns.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return os.set(u, d), u;
}
let os = /* @__PURE__ */ new WeakMap();
function Mf(e, t) {
  const n = os.get(e);
  return n ? (os.delete(e), n(t)) : Promise.resolve();
}
function qe(e, t, ...n) {
  var r = e, o = dt, i;
  jn(() => {
    o !== (o = t()) && (i && (ot(i), i = null), i = lt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, cr), ye && (r = _e);
}
function $n(e) {
  Ye === null && Os(), Zr && Ye.l !== null ? Tf(Ye).m.push(e) : Xe(() => {
    const t = ut(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function yo(e) {
  Ye === null && Os(), $n(() => () => ut(e));
}
function Tf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, n = !1) {
  ye && wn();
  var r = e, o = null, i = null, s = nt, a = n ? cr : 0, l = !1;
  const u = (p, h = !0) => {
    l = !0, f(h, p);
  };
  function d() {
    var p = s ? o : i, h = s ? i : o;
    p && wi(p), h && zn(h, () => {
      s ? i = null : o = null;
    });
  }
  const f = (p, h) => {
    if (s === (s = p)) return;
    let g = !1;
    if (ye) {
      const C = Hl(r) === hi;
      !!s === C && (r = Uo(), Ge(r), wt(!1), g = !0);
    }
    var y = nu(), w = r;
    s ? o ??= h && lt(() => h(w)) : i ??= h && lt(() => h(w)), y || d(), g && wt(!0);
  };
  jn(() => {
    l = !1, t(u), l || f(null, null);
  }, a), ye && (r = _e);
}
function Lf(e, t) {
  ye && Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(e)
  ), mo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Tr(e, t) {
  return t;
}
function Of(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    Is(t[s].e, o, !0);
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
  du(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), tn(e, d.prev, d.next)), ot(d.e, !a);
    }
  });
}
function gt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & El) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = ye ? Ge(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Qe(u)
    ) : u.appendChild(It());
  }
  ye && wn();
  var d = null, f = !1, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Vs(() => {
    var C = n();
    return po(C) ? C : C == null ? [] : Ss(C);
  }), g, y;
  function w() {
    Vf(
      y,
      g,
      a,
      p,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (g.length === 0 ? d ? wi(d) : d = lt(() => i(s)) : d !== null && zn(d, () => {
      d = null;
    }));
  }
  jn(() => {
    y ??= /** @type {Effect} */
    Se, g = /** @type {V[]} */
    c(h);
    var C = g.length;
    if (f && C === 0)
      return;
    f = C === 0;
    let $ = !1;
    if (ye) {
      var b = Hl(s) === hi;
      b !== (C === 0) && (s = Uo(), Ge(s), wt(!1), $ = !0);
    }
    if (ye) {
      for (var _ = null, P, N = 0; N < C; N++) {
        if (_e.nodeType === pr && /** @type {Comment} */
        _e.data === _s) {
          s = /** @type {Comment} */
          _e, $ = !0, wt(!1);
          break;
        }
        var O = g[N], H = r(O, N);
        P = Cu(
          _e,
          a,
          _,
          null,
          O,
          H,
          N,
          o,
          t,
          n
        ), a.items.set(H, P), _ = P;
      }
      C > 0 && Ge(Uo());
    }
    ye ? C === 0 && i && (d = lt(() => i(s))) : w(), $ && wt(!0), c(h);
  }), ye && (s = _e);
}
function Vf(e, t, n, r, o, i, s, a, l) {
  var u = (s & dp) !== 0, d = (s & ($s | ks)) !== 0, f = t.length, p = n.items, h = n.first, g = h, y, w = null, C, $ = [], b = [], _, P, N, O;
  if (u)
    for (O = 0; O < f; O += 1)
      _ = t[O], P = a(_, O), N = p.get(P), N !== void 0 && (N.a?.measure(), (C ??= /* @__PURE__ */ new Set()).add(N));
  for (O = 0; O < f; O += 1) {
    if (_ = t[O], P = a(_, O), N = p.get(P), N === void 0) {
      var H = r.get(P);
      if (H !== void 0) {
        r.delete(P), p.set(P, H);
        var K = w ? w.next : g;
        tn(n, w, H), tn(n, H, K), zi(H, K, o), w = H;
      } else {
        var F = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : o;
        w = Cu(
          F,
          n,
          w,
          w === null ? n.first : w.next,
          _,
          P,
          O,
          i,
          s,
          l
        );
      }
      p.set(P, w), $ = [], b = [], g = w.next;
      continue;
    }
    if (d && Hf(N, _, O, s), (N.e.f & Xt) !== 0 && (wi(N.e), u && (N.a?.unfix(), (C ??= /* @__PURE__ */ new Set()).delete(N))), N !== g) {
      if (y !== void 0 && y.has(N)) {
        if ($.length < b.length) {
          var A = b[0], k;
          w = A.prev;
          var S = $[0], x = $[$.length - 1];
          for (k = 0; k < $.length; k += 1)
            zi($[k], A, o);
          for (k = 0; k < b.length; k += 1)
            y.delete(b[k]);
          tn(n, S.prev, x.next), tn(n, w, S), tn(n, x, A), g = A, w = x, O -= 1, $ = [], b = [];
        } else
          y.delete(N), zi(N, g, o), tn(n, N.prev, N.next), tn(n, N, w === null ? n.first : w.next), tn(n, w, N), w = N;
        continue;
      }
      for ($ = [], b = []; g !== null && g.k !== P; )
        (g.e.f & Xt) === 0 && (y ??= /* @__PURE__ */ new Set()).add(g), b.push(g), g = g.next;
      if (g === null)
        continue;
      N = g;
    }
    $.push(N), w = N, g = N.next;
  }
  if (g !== null || y !== void 0) {
    for (var T = y === void 0 ? [] : Ss(y); g !== null; )
      (g.e.f & Xt) === 0 && T.push(g), g = g.next;
    var M = T.length;
    if (M > 0) {
      var I = (s & El) !== 0 && f === 0 ? o : null;
      if (u) {
        for (O = 0; O < M; O += 1)
          T[O].a?.measure();
        for (O = 0; O < M; O += 1)
          T[O].a?.fix();
      }
      Of(n, T, I);
    }
  }
  u && fr(() => {
    if (C !== void 0)
      for (N of C)
        N.a?.apply();
  }), e.first = n.first && n.first.e, e.last = w && w.e;
  for (var R of r.values())
    ot(R.e);
  r.clear();
}
function Hf(e, t, n, r) {
  (r & $s) !== 0 && Mr(e.v, t), (r & ks) !== 0 ? Mr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Cu(e, t, n, r, o, i, s, a, l, u, d) {
  var f = (l & $s) !== 0, p = (l & pp) === 0, h = f ? p ? /* @__PURE__ */ Ul(o, !1, !1) : An(o) : o, g = (l & ks) === 0 ? s : An(s), y = {
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
    return y.e = lt(() => a(
      /** @type {Node} */
      e,
      h,
      g,
      u
    ), ye), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? d || (t.first = y) : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function zi(e, t, n) {
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
      ye && wn();
      return;
    }
    if (a.nodes_start !== null && (uu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (ye) {
        _e.data;
        for (var l = wn(), u = l; l !== null && (l.nodeType !== pr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Wt(l);
        if (l === null)
          throw ho(), rr;
        St(_e, u), i = Ge(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = Rs(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ Qe(f)), St(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Qe(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Qe(f)
          );
      else
        i.before(f);
    }
  });
}
function xi(e, t, n) {
  ye && wn();
  var r = e, o, i, s = null, a = null;
  function l() {
    i && (zn(i), i = null), s && (s.lastChild.remove(), r.before(s), s = null), i = a, a = null;
  }
  jn(() => {
    if (o !== (o = t())) {
      var u = nu();
      if (o) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = It()), i && rt.skipped_effects.add(i)), a = lt(() => n(d, o));
      }
      u ? rt.add_callback(l) : l();
    }
  }, cr), ye && (r = _e);
}
function zf(e, t, n, r, o, i) {
  let s = ye;
  ye && wn();
  var a, l, u = null;
  ye && _e.nodeType === Ep && (u = /** @type {Element} */
  _e, wn());
  var d = (
    /** @type {TemplateNode} */
    ye ? _e : e
  ), f;
  jn(() => {
    const p = t() || null;
    var h = p === "svg" ? wp : null;
    p !== a && (f && (p === null ? zn(f, () => {
      f = null, l = null;
    }) : p === l ? wi(f) : ot(f)), p && p !== l && (f = lt(() => {
      if (u = ye ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, p) : document.createElement(p), St(u, u), r) {
        ye && Ef(p) && u.append(document.createComment(""));
        var g = (
          /** @type {TemplateNode} */
          ye ? /* @__PURE__ */ Qe(u) : u.appendChild(It())
        );
        ye && (g === null ? wt(!1) : Ge(g)), r(u, g);
      }
      Se.nodes_end = u, d.before(u);
    })), a = p, a && (l = a));
  }, cr), s && (wt(!0), Ge(d));
}
function ze(e, t) {
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
    var r = ut(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      mo(() => {
        var s = n();
        Zs(s), o && Dl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Df(e, t) {
  var n = void 0, r;
  jn(() => {
    n !== (n = t()) && (r && (ot(r), r = null), n && (r = lt(() => {
      Br(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function $u(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = $u(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Af() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = $u(e)) && (r && (r += " "), r += t);
  return r;
}
function kn(e) {
  return typeof e == "object" ? Af(e) : e ?? "";
}
const _a = [...` 	
\r\f \v\uFEFF`];
function If(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || _a.includes(r[s - 1])) && (a === r.length || _a.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Sa(e, t = !1) {
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
function Zf(e, t) {
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
    return r && (n += Sa(r)), o && (n += Sa(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Nt(e, t, n, r, o, i) {
  var s = e.__className;
  if (ye || s !== n || s === void 0) {
    var a = If(n, r, i);
    (!ye || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
function pt(e, t, n, r) {
  var o = e.__style;
  if (ye || o !== t) {
    var i = Zf(t, r);
    (!ye || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Ai(e, n?.[0], r[0]), Ai(e, n?.[1], r[1], "important")) : Ai(e, n, r));
  return r;
}
function is(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!po(t))
      return Zp();
    for (var r of e.options)
      r.selected = t.includes(Na(r));
    return;
  }
  for (r of e.options) {
    var o = Na(r);
    if (sf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Bf(e) {
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
  }), ou(() => {
    t.disconnect();
  });
}
function Na(e) {
  return "__value" in e ? e.__value : e.value;
}
const Mn = Symbol("class"), rn = Symbol("style"), ku = Symbol("is custom element"), _u = Symbol("is html");
function er(e) {
  if (ye) {
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
    e.__on_r = n, Fp(n), uf();
  }
}
function Bo(e, t) {
  var n = Ci(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Ea(e, t) {
  var n = Ci(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Rf(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = Ci(e);
  ye && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Np] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Su(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Kf(e, t, n, r, o = !1, i = !1) {
  if (ye && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || er(s);
  }
  var l = Ci(e), u = l[ku], d = !l[_u];
  let f = ye && u;
  f && wt(!1);
  var p = t || {}, h = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = kn(n.class) : (r || n[Mn]) && (n.class = null), n[rn] && (n.style ??= null);
  var y = Su(e);
  for (const N in n) {
    let O = n[N];
    if (h && N === "value" && O == null) {
      e.value = e.__value = "", p[N] = O;
      continue;
    }
    if (N === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Nt(e, w, O, r, t?.[Mn], n[Mn]), p[N] = O, p[Mn] = n[Mn];
      continue;
    }
    if (N === "style") {
      pt(e, O, t?.[rn], n[rn]), p[N] = O, p[rn] = n[rn];
      continue;
    }
    var C = p[N];
    if (!(O === C && !(O === void 0 && e.hasAttribute(N)))) {
      p[N] = O;
      var $ = N[0] + N[1];
      if ($ !== "$$")
        if ($ === "on") {
          const H = {}, K = "$$" + N;
          let F = N.slice(2);
          var b = Cf(F);
          if (bf(F) && (F = F.slice(0, -7), H.capture = !0), !b && C) {
            if (O != null) continue;
            e.removeEventListener(F, p[K], H), p[K] = null;
          }
          if (O != null)
            if (b)
              e[`__${F}`] = O, Yn([F]);
            else {
              let A = function(k) {
                p[N].call(this, k);
              };
              p[K] = Bs(F, e, A, H);
            }
          else b && (e[`__${F}`] = void 0);
        } else if (N === "style")
          be(e, N, O);
        else if (N === "autofocus")
          af(
            /** @type {HTMLElement} */
            e,
            !!O
          );
        else if (!u && (N === "__value" || N === "value" && O != null))
          e.value = e.__value = O;
        else if (N === "selected" && h)
          Rf(
            /** @type {HTMLOptionElement} */
            e,
            O
          );
        else {
          var _ = N;
          d || (_ = kf(_));
          var P = _ === "defaultValue" || _ === "defaultChecked";
          if (O == null && !u && !P)
            if (l[N] = null, _ === "value" || _ === "checked") {
              let H = (
                /** @type {HTMLInputElement} */
                e
              );
              const K = t === void 0;
              if (_ === "value") {
                let F = H.defaultValue;
                H.removeAttribute(_), H.defaultValue = F, H.value = H.__value = K ? F : null;
              } else {
                let F = H.defaultChecked;
                H.removeAttribute(_), H.defaultChecked = F, H.checked = K ? F : !1;
              }
            } else
              e.removeAttribute(N);
          else P || y.includes(_) && (u || typeof O != "string") ? (e[_] = O, _ in l && (l[_] = nt)) : typeof O != "function" && be(e, _, O);
        }
    }
  }
  return f && wt(!0), p;
}
function et(e, t, n = [], r = [], o, i = !1, s = !1) {
  ql(n, r, (a) => {
    var l = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (jn(() => {
      var h = t(...a.map(c)), g = Kf(
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
        w.description === bp && (!l || y !== l[w]) && (u[w] && ot(u[w]), u[w] = lt(() => Df(e, () => y))), g[w] = y;
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
        ), Bf(p);
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
      [ku]: e.nodeName.includes("-"),
      [_u]: e.namespaceURI === yp
    }
  );
}
var Pa = /* @__PURE__ */ new Map();
function Su(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Pa.get(t);
  if (n) return n;
  Pa.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Ll(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = gi(o);
  }
  return n;
}
class js {
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
          js.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var jf = /* @__PURE__ */ new js({
  box: "border-box"
});
function Ma(e, t, n) {
  var r = jf.observe(e, () => n(e[t]));
  Br(() => (ut(() => n(e[t])), r));
}
function Ta(e, t) {
  return e === t || e?.[on] === t;
}
function Lt(e = {}, t, n, r) {
  return Br(() => {
    var o, i;
    return mo(() => {
      o = i, i = [], ut(() => {
        e !== n(...i) && (t(e, ...i), o && Ta(n(...o), e) && t(null, ...o));
      });
    }), () => {
      fr(() => {
        i && Ta(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Nu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ye
  ), n = t.l.u;
  if (!n) return;
  let r = () => Zs(t.s);
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
  n.b.length && su(() => {
    La(t, r), Wo(n.b);
  }), Xe(() => {
    const o = ut(() => n.m.map(kp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Xe(() => {
    La(t, r), Wo(n.a);
  });
}
function La(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Oo = !1;
function Yf(e) {
  var t = Oo;
  try {
    return Oo = !1, [e(), Oo];
  } finally {
    Oo = t;
  }
}
const Xf = {
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
function De(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Xf
  );
}
const qf = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Se;
      try {
        Zt(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Pl
        );
      } finally {
        Zt(r);
      }
    }
    return e.special[t](n), ma(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ma(e.version)), !0;
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
      version: An(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Se
      )
    },
    qf
  );
}
const Ff = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Kr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Kr(o) && (o = o());
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
      if (Kr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = mn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === on || t === Ts) return !1;
    for (let n of e.props)
      if (Kr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Kr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ke(...e) {
  return new Proxy({ props: e }, Ff);
}
function m(e, t, n, r) {
  var o = !Zr || (n & hp) !== 0, i = (n & gp) !== 0, s = (n & vp) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? ut(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = on in e || Ts in e;
    d = mn(e, t)?.set ?? (f && t in e ? (b) => e[t] = b : void 0);
  }
  var p, h = !1;
  i ? [p, h] = Yf(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = u(), d && (o && Hp(), d(p)));
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
  }, o && (n & Pl) === 0)
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
  var w = !1, C = ((n & fp) !== 0 ? vo : Vs)(() => (w = !1, g()));
  i && c(C);
  var $ = (
    /** @type {Effect} */
    Se
  );
  return (
    /** @type {() => V} */
    function(b, _) {
      if (arguments.length > 0) {
        const P = _ ? c(C) : o && i ? zt(b) : b;
        return U(C, P), w = !0, a !== void 0 && (a = P), b;
      }
      return hr && w || ($.f & ur) !== 0 ? C.v : c(C);
    }
  );
}
function Wf(e) {
  return new Jf(e);
}
class Jf {
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
      var a = /* @__PURE__ */ Ul(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Ts ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return U(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Pf : bu)(t.component, {
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
      Mf(this.#e);
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
let Eu;
typeof HTMLElement == "function" && (Eu = class extends HTMLElement {
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
      const t = {}, n = Uf(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Ro(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Wf({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = As(() => {
        mo(() => {
          this.$$r = !0;
          for (const r of Fo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Ro(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ro(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Fo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ro(e, t, n, r) {
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
function Uf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends Eu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Fo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Fo(t).forEach((a) => {
    kr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Ro(a, l, t), this.$$d[a] = l;
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
function Qf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ko.prototype = $i.prototype = {
  constructor: Ko,
  on: function(e, t) {
    var n = this._, r = Qf(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = eh(n[o], e.name))) return o;
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
function eh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Va(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Gf, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ss = "http://www.w3.org/1999/xhtml";
const Ha = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ss,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ki(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ha.hasOwnProperty(t) ? { space: Ha[t], local: e } : e;
}
function th(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ss && t.documentElement.namespaceURI === ss ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function nh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Pu(e) {
  var t = ki(e);
  return (t.local ? nh : th)(t);
}
function rh() {
}
function Ys(e) {
  return e == null ? rh : function() {
    return this.querySelector(e);
  };
}
function oh(e) {
  typeof e != "function" && (e = Ys(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Ot(r, this._parents);
}
function ih(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function sh() {
  return [];
}
function Mu(e) {
  return e == null ? sh : function() {
    return this.querySelectorAll(e);
  };
}
function ah(e) {
  return function() {
    return ih(e.apply(this, arguments));
  };
}
function lh(e) {
  typeof e == "function" ? e = ah(e) : e = Mu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ot(r, o);
}
function Tu(e) {
  return function() {
    return this.matches(e);
  };
}
function Lu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var uh = Array.prototype.find;
function ch(e) {
  return function() {
    return uh.call(this.children, e);
  };
}
function dh() {
  return this.firstElementChild;
}
function ph(e) {
  return this.select(e == null ? dh : ch(typeof e == "function" ? e : Lu(e)));
}
var fh = Array.prototype.filter;
function hh() {
  return Array.from(this.children);
}
function gh(e) {
  return function() {
    return fh.call(this.children, e);
  };
}
function vh(e) {
  return this.selectAll(e == null ? hh : gh(typeof e == "function" ? e : Lu(e)));
}
function mh(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ot(r, this._parents);
}
function Ou(e) {
  return new Array(e.length);
}
function yh() {
  return new Ot(this._enter || this._groups.map(Ou), this._parents);
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
function wh(e) {
  return function() {
    return e;
  };
}
function bh(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Qo(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function xh(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, p = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (p[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new Qo(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(p[a]) === l && (o[a] = l);
}
function Ch(e) {
  return e.__data__;
}
function $h(e, t) {
  if (!arguments.length) return Array.from(this, Ch);
  var n = t ? xh : bh, r = this._parents, o = this._groups;
  typeof e != "function" && (e = wh(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], p = f.length, h = kh(e.call(d, d && d.__data__, u, r)), g = h.length, y = a[u] = new Array(g), w = s[u] = new Array(g), C = l[u] = new Array(p);
    n(d, f, y, w, C, h, t);
    for (var $ = 0, b = 0, _, P; $ < g; ++$)
      if (_ = y[$]) {
        for ($ >= b && (b = $ + 1); !(P = w[b]) && ++b < g; ) ;
        _._next = P || null;
      }
  }
  return s = new Ot(s, r), s._enter = a, s._exit = l, s;
}
function kh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _h() {
  return new Ot(this._exit || this._groups.map(Ou), this._parents);
}
function Sh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Nh(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], f = u.length, p = a[l] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || d[g]) && (p[g] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ot(a, this._parents);
}
function Eh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Ph(e) {
  e || (e = Mh);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Ot(o, this._parents).order();
}
function Mh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Th() {
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
function Vh() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Hh() {
  return !this.node();
}
function zh(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Dh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ah(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ih(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Zh(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Bh(e, t) {
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
function Kh(e, t) {
  var n = ki(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Ah : Dh : typeof t == "function" ? n.local ? Rh : Bh : n.local ? Zh : Ih)(n, t));
}
function Vu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function jh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Yh(e, t, n) {
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
  return arguments.length > 1 ? this.each((t == null ? jh : typeof t == "function" ? Xh : Yh)(e, t, n ?? "")) : Lr(this.node(), e);
}
function Lr(e, t) {
  return e.style.getPropertyValue(t) || Vu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Fh(e) {
  return function() {
    delete this[e];
  };
}
function Wh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Jh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Uh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Fh : typeof t == "function" ? Jh : Wh)(e, t)) : this.node()[e];
}
function Hu(e) {
  return e.trim().split(/^|\s+/);
}
function Xs(e) {
  return e.classList || new zu(e);
}
function zu(e) {
  this._node = e, this._names = Hu(e.getAttribute("class") || "");
}
zu.prototype = {
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
function Du(e, t) {
  for (var n = Xs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Au(e, t) {
  for (var n = Xs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Gh(e) {
  return function() {
    Du(this, e);
  };
}
function Qh(e) {
  return function() {
    Au(this, e);
  };
}
function eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Du : Au)(this, e);
  };
}
function tg(e, t) {
  var n = Hu(e + "");
  if (arguments.length < 2) {
    for (var r = Xs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? eg : t ? Gh : Qh)(n, t));
}
function ng() {
  this.textContent = "";
}
function rg(e) {
  return function() {
    this.textContent = e;
  };
}
function og(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ig(e) {
  return arguments.length ? this.each(e == null ? ng : (typeof e == "function" ? og : rg)(e)) : this.node().textContent;
}
function sg() {
  this.innerHTML = "";
}
function ag(e) {
  return function() {
    this.innerHTML = e;
  };
}
function lg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function ug(e) {
  return arguments.length ? this.each(e == null ? sg : (typeof e == "function" ? lg : ag)(e)) : this.node().innerHTML;
}
function cg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function dg() {
  return this.each(cg);
}
function pg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function fg() {
  return this.each(pg);
}
function hg(e) {
  var t = typeof e == "function" ? e : Pu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function gg() {
  return null;
}
function vg(e, t) {
  var n = typeof e == "function" ? e : Pu(e), r = t == null ? gg : typeof t == "function" ? t : Ys(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function mg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function yg() {
  return this.each(mg);
}
function wg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function bg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function xg(e) {
  return this.select(e ? bg : wg);
}
function Cg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function $g(e) {
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
function _g(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Sg(e, t, n) {
  return function() {
    var r = this.__on, o, i = $g(t);
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
  for (a = t ? Sg : _g, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Iu(e, t, n) {
  var r = Vu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Eg(e, t) {
  return function() {
    return Iu(this, e, t);
  };
}
function Pg(e, t) {
  return function() {
    return Iu(this, e, t.apply(this, arguments));
  };
}
function Mg(e, t) {
  return this.each((typeof t == "function" ? Pg : Eg)(e, t));
}
function* Tg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Zu = [null];
function Ot(e, t) {
  this._groups = e, this._parents = t;
}
function wo() {
  return new Ot([[document.documentElement]], Zu);
}
function Lg() {
  return this;
}
Ot.prototype = wo.prototype = {
  constructor: Ot,
  select: oh,
  selectAll: lh,
  selectChild: ph,
  selectChildren: vh,
  filter: mh,
  data: $h,
  enter: yh,
  exit: _h,
  join: Sh,
  merge: Nh,
  selection: Lg,
  order: Eh,
  sort: Ph,
  call: Th,
  nodes: Lh,
  node: Oh,
  size: Vh,
  empty: Hh,
  each: zh,
  attr: Kh,
  style: qh,
  property: Uh,
  classed: tg,
  text: ig,
  html: ug,
  raise: dg,
  lower: fg,
  append: hg,
  insert: vg,
  remove: yg,
  clone: xg,
  datum: Cg,
  on: Ng,
  dispatch: Mg,
  [Symbol.iterator]: Tg
};
function Ht(e) {
  return typeof e == "string" ? new Ot([[document.querySelector(e)]], [document.documentElement]) : new Ot([[e]], Zu);
}
function Og(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Rt(e, t) {
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
const Vg = { passive: !1 }, eo = { capture: !0, passive: !1 };
function Ii(e) {
  e.stopImmediatePropagation();
}
function br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Bu(e) {
  var t = e.document.documentElement, n = Ht(e).on("dragstart.drag", br, eo);
  "onselectstart" in t ? n.on("selectstart.drag", br, eo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ru(e, t) {
  var n = e.document.documentElement, r = Ht(e).on("dragstart.drag", null);
  t && (r.on("click.drag", br, eo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Vo = (e) => () => e;
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
function Hg(e) {
  return !e.ctrlKey && !e.button;
}
function zg() {
  return this.parentNode;
}
function Dg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ig() {
  var e = Hg, t = zg, n = Dg, r = Ag, o = {}, i = $i("start", "drag", "end"), s = 0, a, l, u, d, f = 0;
  function p(_) {
    _.on("mousedown.drag", h).filter(r).on("touchstart.drag", w).on("touchmove.drag", C, Vg).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(_, P) {
    if (!(d || !e.call(this, _, P))) {
      var N = b(this, t.call(this, _, P), _, P, "mouse");
      N && (Ht(_.view).on("mousemove.drag", g, eo).on("mouseup.drag", y, eo), Bu(_.view), Ii(_), u = !1, a = _.clientX, l = _.clientY, N("start", _));
    }
  }
  function g(_) {
    if (br(_), !u) {
      var P = _.clientX - a, N = _.clientY - l;
      u = P * P + N * N > f;
    }
    o.mouse("drag", _);
  }
  function y(_) {
    Ht(_.view).on("mousemove.drag mouseup.drag", null), Ru(_.view, u), br(_), o.mouse("end", _);
  }
  function w(_, P) {
    if (e.call(this, _, P)) {
      var N = _.changedTouches, O = t.call(this, _, P), H = N.length, K, F;
      for (K = 0; K < H; ++K)
        (F = b(this, O, _, P, N[K].identifier, N[K])) && (Ii(_), F("start", _, N[K]));
    }
  }
  function C(_) {
    var P = _.changedTouches, N = P.length, O, H;
    for (O = 0; O < N; ++O)
      (H = o[P[O].identifier]) && (br(_), H("drag", _, P[O]));
  }
  function $(_) {
    var P = _.changedTouches, N = P.length, O, H;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), O = 0; O < N; ++O)
      (H = o[P[O].identifier]) && (Ii(_), H("end", _, P[O]));
  }
  function b(_, P, N, O, H, K) {
    var F = i.copy(), A = Rt(K || N, P), k, S, x;
    if ((x = n.call(_, new as("beforestart", {
      sourceEvent: N,
      target: p,
      identifier: H,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: F
    }), O)) != null)
      return k = x.x - A[0] || 0, S = x.y - A[1] || 0, function T(M, I, R) {
        var j = A, V;
        switch (M) {
          case "start":
            o[H] = T, V = s++;
            break;
          case "end":
            delete o[H], --s;
          // falls through
          case "drag":
            A = Rt(R || I, P), V = s;
            break;
        }
        F.call(
          M,
          _,
          new as(M, {
            sourceEvent: I,
            subject: x,
            target: p,
            identifier: H,
            active: V,
            x: A[0] + k,
            y: A[1] + S,
            dx: A[0] - j[0],
            dy: A[1] - j[1],
            dispatch: F
          }),
          O
        );
      };
  }
  return p.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Vo(!!_), p) : e;
  }, p.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Vo(_), p) : t;
  }, p.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Vo(_), p) : n;
  }, p.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Vo(!!_), p) : r;
  }, p.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? p : _;
  }, p.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, p) : Math.sqrt(f);
  }, p;
}
function qs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ku(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function bo() {
}
var to = 0.7, ei = 1 / to, xr = "\\s*([+-]?\\d+)\\s*", no = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", an = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zg = /^#([0-9a-f]{3,8})$/, Bg = new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`), Rg = new RegExp(`^rgb\\(${an},${an},${an}\\)$`), Kg = new RegExp(`^rgba\\(${xr},${xr},${xr},${no}\\)$`), jg = new RegExp(`^rgba\\(${an},${an},${an},${no}\\)$`), Yg = new RegExp(`^hsl\\(${no},${an},${an}\\)$`), Xg = new RegExp(`^hsla\\(${no},${an},${an},${no}\\)$`), za = {
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
qs(bo, ir, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Da,
  // Deprecated! Use color.formatHex.
  formatHex: Da,
  formatHex8: qg,
  formatHsl: Fg,
  formatRgb: Aa,
  toString: Aa
});
function Da() {
  return this.rgb().formatHex();
}
function qg() {
  return this.rgb().formatHex8();
}
function Fg() {
  return ju(this).formatHsl();
}
function Aa() {
  return this.rgb().formatRgb();
}
function ir(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ia(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ho(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ho(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Bg.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Kg.exec(e)) ? Ho(t[1], t[2], t[3], t[4]) : (t = jg.exec(e)) ? Ho(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yg.exec(e)) ? Ra(t[1], t[2] / 100, t[3] / 100, 1) : (t = Xg.exec(e)) ? Ra(t[1], t[2] / 100, t[3] / 100, t[4]) : za.hasOwnProperty(e) ? Ia(za[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Ia(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ho(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new kt(e, t, n, r);
}
function Wg(e) {
  return e instanceof bo || (e = ir(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function ls(e, t, n, r) {
  return arguments.length === 1 ? Wg(e) : new kt(e, t, n, r ?? 1);
}
function kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
qs(kt, ls, Ku(bo, {
  brighter(e) {
    return e = e == null ? ei : Math.pow(ei, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? to : Math.pow(to, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(tr(this.r), tr(this.g), tr(this.b), ti(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Za,
  // Deprecated! Use color.formatHex.
  formatHex: Za,
  formatHex8: Jg,
  formatRgb: Ba,
  toString: Ba
}));
function Za() {
  return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}`;
}
function Jg() {
  return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}${Jn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ba() {
  const e = ti(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${tr(this.r)}, ${tr(this.g)}, ${tr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ti(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function tr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Jn(e) {
  return e = tr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ra(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new jt(e, t, n, r);
}
function ju(e) {
  if (e instanceof jt) return new jt(e.h, e.s, e.l, e.opacity);
  if (e instanceof bo || (e = ir(e)), !e) return new jt();
  if (e instanceof jt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new jt(s, a, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? ju(e) : new jt(e, t, n, r ?? 1);
}
function jt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
qs(jt, Ug, Ku(bo, {
  brighter(e) {
    return e = e == null ? ei : Math.pow(ei, e), new jt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? to : Math.pow(to, e), new jt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new kt(
      Zi(e >= 240 ? e - 240 : e + 120, o, r),
      Zi(e, o, r),
      Zi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new jt(Ka(this.h), zo(this.s), zo(this.l), ti(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ti(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ka(this.h)}, ${zo(this.s) * 100}%, ${zo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ka(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function zo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Zi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Fs = (e) => () => e;
function Gg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Qg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function e1(e) {
  return (e = +e) == 1 ? Yu : function(t, n) {
    return n - t ? Qg(t, n, e) : Fs(isNaN(t) ? n : t);
  };
}
function Yu(e, t) {
  var n = t - e;
  return n ? Gg(e, n) : Fs(isNaN(e) ? t : e);
}
const ni = function e(t) {
  var n = e1(t);
  function r(o, i) {
    var s = n((o = ls(o)).r, (i = ls(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Yu(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function t1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function n1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function r1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Gr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function o1(e, t) {
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
function i1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Gr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var us = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Bi = new RegExp(us.source, "g");
function s1(e) {
  return function() {
    return e;
  };
}
function a1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Xu(e, t) {
  var n = us.lastIndex = Bi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = us.exec(e)) && (o = Bi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: nn(r, o) })), n = Bi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? a1(l[0].x) : s1(t) : (t = l.length, function(u) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(u);
    return a.join("");
  });
}
function Gr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Fs(t) : (n === "number" ? nn : n === "string" ? (r = ir(t)) ? (t = r, ni) : Xu : t instanceof ir ? ni : t instanceof Date ? o1 : n1(t) ? t1 : Array.isArray(t) ? r1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? i1 : nn)(e, t);
}
var ja = 180 / Math.PI, qu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Fu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * ja,
    skewX: Math.atan(l) * ja,
    scaleX: s,
    scaleY: a
  };
}
var Do;
function l1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? qu : Fu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function u1(e) {
  return e == null || (Do || (Do = document.createElementNS("http://www.w3.org/2000/svg", "g")), Do.setAttribute("transform", e), !(e = Do.transform.baseVal.consolidate())) ? qu : (e = e.matrix, Fu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Wu(e, t, n, r) {
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
var c1 = Wu(l1, "px, ", "px)", "deg)"), d1 = Wu(u1, ", ", ")", ")"), p1 = 1e-12;
function Ya(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function f1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function h1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const jo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], f = s[1], p = s[2], h = d - a, g = f - l, y = h * h + g * g, w, C;
    if (y < p1)
      C = Math.log(p / u) / t, w = function(O) {
        return [
          a + O * h,
          l + O * g,
          u * Math.exp(t * O * C)
        ];
      };
    else {
      var $ = Math.sqrt(y), b = (p * p - u * u + r * y) / (2 * u * n * $), _ = (p * p - u * u - r * y) / (2 * p * n * $), P = Math.log(Math.sqrt(b * b + 1) - b), N = Math.log(Math.sqrt(_ * _ + 1) - _);
      C = (N - P) / t, w = function(O) {
        var H = O * C, K = Ya(P), F = u / (n * $) * (K * h1(t * H + P) - f1(P));
        return [
          a + F * h,
          l + F * g,
          u * K / Ya(t * H + P)
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
var Or = 0, qr = 0, jr = 0, Ju = 1e3, ri, Fr, oi = 0, sr = 0, _i = 0, ro = typeof performance == "object" && performance.now ? performance : Date, Uu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ws() {
  return sr || (Uu(g1), sr = ro.now() + _i);
}
function g1() {
  sr = 0;
}
function ii() {
  this._call = this._time = this._next = null;
}
ii.prototype = Gu.prototype = {
  constructor: ii,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ws() : +n) + (t == null ? 0 : +t), !this._next && Fr !== this && (Fr ? Fr._next = this : ri = this, Fr = this), this._call = e, this._time = n, cs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, cs());
  }
};
function Gu(e, t, n) {
  var r = new ii();
  return r.restart(e, t, n), r;
}
function v1() {
  Ws(), ++Or;
  for (var e = ri, t; e; )
    (t = sr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Or;
}
function Xa() {
  sr = (oi = ro.now()) + _i, Or = qr = 0;
  try {
    v1();
  } finally {
    Or = 0, y1(), sr = 0;
  }
}
function m1() {
  var e = ro.now(), t = e - oi;
  t > Ju && (_i -= t, oi = e);
}
function y1() {
  for (var e, t = ri, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ri = n);
  Fr = e, cs(r);
}
function cs(e) {
  if (!Or) {
    qr && (qr = clearTimeout(qr));
    var t = e - sr;
    t > 24 ? (e < 1 / 0 && (qr = setTimeout(Xa, e - ro.now() - _i)), jr && (jr = clearInterval(jr))) : (jr || (oi = ro.now(), jr = setInterval(m1, Ju)), Or = 1, Uu(Xa));
  }
}
function qa(e, t, n) {
  var r = new ii();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var w1 = $i("start", "end", "cancel", "interrupt"), b1 = [], Qu = 0, Fa = 1, ds = 2, Yo = 3, Wa = 4, ps = 5, Xo = 6;
function Si(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  x1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: w1,
    tween: b1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Qu
  });
}
function Js(e, t) {
  var n = Ut(e, t);
  if (n.state > Qu) throw new Error("too late; already scheduled");
  return n;
}
function dn(e, t) {
  var n = Ut(e, t);
  if (n.state > Yo) throw new Error("too late; already running");
  return n;
}
function Ut(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function x1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Gu(i, 0, n.time);
  function i(u) {
    n.state = Fa, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, p, h;
    if (n.state !== Fa) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === Yo) return qa(s);
        h.state === Wa ? (h.state = Xo, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = Xo, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (qa(function() {
      n.state === Yo && (n.state = Wa, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ds, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ds) {
      for (n.state = Yo, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
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
    n.state = Xo, n.timer.stop(), delete r[t];
    for (var u in r) return;
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
      o = r.state > ds && r.state < ps, r.state = Xo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function C1(e) {
  return this.each(function() {
    qo(this, e);
  });
}
function $1(e, t) {
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
function k1(e, t, n) {
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
function _1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ut(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? $1 : k1)(n, e, t));
}
function Us(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = dn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ut(o, r).value[t];
  };
}
function ec(e, t) {
  var n;
  return (typeof t == "number" ? nn : t instanceof ir ? ni : (n = ir(t)) ? (t = n, ni) : Xu)(e, t);
}
function S1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function N1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function E1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function P1(e, t, n) {
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
function T1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function L1(e, t) {
  var n = ki(e), r = n === "transform" ? d1 : ec;
  return this.attrTween(e, typeof t == "function" ? (n.local ? T1 : M1)(n, r, Us(this, "attr." + e, t)) : t == null ? (n.local ? N1 : S1)(n) : (n.local ? P1 : E1)(n, r, t));
}
function O1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function V1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function H1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && V1(e, i)), n;
  }
  return o._value = t, o;
}
function z1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && O1(e, i)), n;
  }
  return o._value = t, o;
}
function D1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ki(e);
  return this.tween(n, (r.local ? H1 : z1)(r, t));
}
function A1(e, t) {
  return function() {
    Js(this, e).delay = +t.apply(this, arguments);
  };
}
function I1(e, t) {
  return t = +t, function() {
    Js(this, e).delay = t;
  };
}
function Z1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? A1 : I1)(t, e)) : Ut(this.node(), t).delay;
}
function B1(e, t) {
  return function() {
    dn(this, e).duration = +t.apply(this, arguments);
  };
}
function R1(e, t) {
  return t = +t, function() {
    dn(this, e).duration = t;
  };
}
function K1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? B1 : R1)(t, e)) : Ut(this.node(), t).duration;
}
function j1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    dn(this, e).ease = t;
  };
}
function Y1(e) {
  var t = this._id;
  return arguments.length ? this.each(j1(t, e)) : Ut(this.node(), t).ease;
}
function X1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    dn(this, e).ease = n;
  };
}
function q1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(X1(this._id, e));
}
function F1(e) {
  typeof e != "function" && (e = Tu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new bn(r, this._parents, this._name, this._id);
}
function W1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, f = s[a] = new Array(d), p, h = 0; h < d; ++h)
      (p = l[h] || u[h]) && (f[h] = p);
  for (; a < r; ++a)
    s[a] = t[a];
  return new bn(s, this._parents, this._name, this._id);
}
function J1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function U1(e, t, n) {
  var r, o, i = J1(t) ? Js : dn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function G1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ut(this.node(), n).on.on(e) : this.each(U1(n, e, t));
}
function Q1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function ev() {
  return this.on("end.remove", Q1(this._id));
}
function tv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ys(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, f, p = 0; p < l; ++p)
      (d = a[p]) && (f = e.call(d, d.__data__, p, a)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, Si(u[p], t, n, p, u, Ut(d, n)));
  return new bn(i, this._parents, t, n);
}
function nv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Mu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, f = 0; f < u; ++f)
      if (d = l[f]) {
        for (var p = e.call(d, d.__data__, f, l), h, g = Ut(d, n), y = 0, w = p.length; y < w; ++y)
          (h = p[y]) && Si(h, t, n, y, p, g);
        i.push(p), s.push(d);
      }
  return new bn(i, s, t, n);
}
var rv = wo.prototype.constructor;
function ov() {
  return new rv(this._groups, this._parents);
}
function iv(e, t) {
  var n, r, o;
  return function() {
    var i = Lr(this, e), s = (this.style.removeProperty(e), Lr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function tc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function sv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Lr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function av(e, t, n) {
  var r, o, i;
  return function() {
    var s = Lr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Lr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function lv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = dn(this, e), u = l.on, d = l.value[i] == null ? a || (a = tc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function uv(e, t, n) {
  var r = (e += "") == "transform" ? c1 : ec;
  return t == null ? this.styleTween(e, iv(e, r)).on("end.style." + e, tc(e)) : typeof t == "function" ? this.styleTween(e, av(e, r, Us(this, "style." + e, t))).each(lv(this._id, e)) : this.styleTween(e, sv(e, r, t), n).on("end.style." + e, null);
}
function cv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function dv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && cv(e, s, n)), r;
  }
  return i._value = t, i;
}
function pv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, dv(e, t, n ?? ""));
}
function fv(e) {
  return function() {
    this.textContent = e;
  };
}
function hv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function gv(e) {
  return this.tween("text", typeof e == "function" ? hv(Us(this, "text", e)) : fv(e == null ? "" : e + ""));
}
function vv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function mv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && vv(o)), t;
  }
  return r._value = e, r;
}
function yv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, mv(e));
}
function wv() {
  for (var e = this._name, t = this._id, n = nc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
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
function bv() {
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
var xv = 0;
function bn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function nc() {
  return ++xv;
}
var pn = wo.prototype;
bn.prototype = {
  constructor: bn,
  select: tv,
  selectAll: nv,
  selectChild: pn.selectChild,
  selectChildren: pn.selectChildren,
  filter: F1,
  merge: W1,
  selection: ov,
  transition: wv,
  call: pn.call,
  nodes: pn.nodes,
  node: pn.node,
  size: pn.size,
  empty: pn.empty,
  each: pn.each,
  on: G1,
  attr: L1,
  attrTween: D1,
  style: uv,
  styleTween: pv,
  text: gv,
  textTween: yv,
  remove: ev,
  tween: _1,
  delay: Z1,
  duration: K1,
  ease: Y1,
  easeVarying: q1,
  end: bv,
  [Symbol.iterator]: pn[Symbol.iterator]
};
function Cv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var $v = {
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
function _v(e) {
  var t, n;
  e instanceof bn ? (t = e._id, e = e._name) : (t = nc(), (n = $v).time = Ws(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Si(l, e, t, u, s, n || kv(l, t));
  return new bn(r, this._parents, e, t);
}
wo.prototype.interrupt = C1;
wo.prototype.transition = _v;
const Ao = (e) => () => e;
function Sv(e, {
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
rc.prototype = hn.prototype;
function rc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ni;
  return e.__zoom;
}
function Ri(e) {
  e.stopImmediatePropagation();
}
function Yr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Nv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Ev() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ja() {
  return this.__zoom || Ni;
}
function Pv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Mv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Tv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function oc() {
  var e = Nv, t = Ev, n = Tv, r = Pv, o = Mv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = jo, u = $i("start", "zoom", "end"), d, f, p, h = 500, g = 150, y = 0, w = 10;
  function C(x) {
    x.property("__zoom", Ja).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", K).on("dblclick.zoom", F).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", S).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(x, T, M, I) {
    var R = x.selection ? x.selection() : x;
    R.property("__zoom", Ja), x !== R ? P(x, T, M, I) : R.interrupt().each(function() {
      N(this, arguments).event(I).start().zoom(null, typeof T == "function" ? T.apply(this, arguments) : T).end();
    });
  }, C.scaleBy = function(x, T, M, I) {
    C.scaleTo(x, function() {
      var R = this.__zoom.k, j = typeof T == "function" ? T.apply(this, arguments) : T;
      return R * j;
    }, M, I);
  }, C.scaleTo = function(x, T, M, I) {
    C.transform(x, function() {
      var R = t.apply(this, arguments), j = this.__zoom, V = M == null ? _(R) : typeof M == "function" ? M.apply(this, arguments) : M, W = j.invert(V), q = typeof T == "function" ? T.apply(this, arguments) : T;
      return n(b($(j, q), V, W), R, s);
    }, M, I);
  }, C.translateBy = function(x, T, M, I) {
    C.transform(x, function() {
      return n(this.__zoom.translate(
        typeof T == "function" ? T.apply(this, arguments) : T,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), s);
    }, null, I);
  }, C.translateTo = function(x, T, M, I, R) {
    C.transform(x, function() {
      var j = t.apply(this, arguments), V = this.__zoom, W = I == null ? _(j) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n(Ni.translate(W[0], W[1]).scale(V.k).translate(
        typeof T == "function" ? -T.apply(this, arguments) : -T,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), j, s);
    }, I, R);
  };
  function $(x, T) {
    return T = Math.max(i[0], Math.min(i[1], T)), T === x.k ? x : new hn(T, x.x, x.y);
  }
  function b(x, T, M) {
    var I = T[0] - M[0] * x.k, R = T[1] - M[1] * x.k;
    return I === x.x && R === x.y ? x : new hn(x.k, I, R);
  }
  function _(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function P(x, T, M, I) {
    x.on("start.zoom", function() {
      N(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var R = this, j = arguments, V = N(R, j).event(I), W = t.apply(R, j), q = M == null ? _(W) : typeof M == "function" ? M.apply(R, j) : M, G = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), D = R.__zoom, X = typeof T == "function" ? T.apply(R, j) : T, J = l(D.invert(q).concat(G / D.k), X.invert(q).concat(G / X.k));
      return function(te) {
        if (te === 1) te = X;
        else {
          var ne = J(te), Q = G / ne[2];
          te = new hn(Q, q[0] - ne[0] * Q, q[1] - ne[1] * Q);
        }
        V.zoom(null, te);
      };
    });
  }
  function N(x, T, M) {
    return !M && x.__zooming || new O(x, T);
  }
  function O(x, T) {
    this.that = x, this.args = T, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, T), this.taps = 0;
  }
  O.prototype = {
    event: function(x) {
      return x && (this.sourceEvent = x), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(x, T) {
      return this.mouse && x !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])), this.touch0 && x !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])), this.touch1 && x !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])), this.that.__zoom = T, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(x) {
      var T = Ht(this.that).datum();
      u.call(
        x,
        this.that,
        new Sv(x, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        T
      );
    }
  };
  function H(x, ...T) {
    if (!e.apply(this, arguments)) return;
    var M = N(this, T).event(x), I = this.__zoom, R = Math.max(i[0], Math.min(i[1], I.k * Math.pow(2, r.apply(this, arguments)))), j = Rt(x);
    if (M.wheel)
      (M.mouse[0][0] !== j[0] || M.mouse[0][1] !== j[1]) && (M.mouse[1] = I.invert(M.mouse[0] = j)), clearTimeout(M.wheel);
    else {
      if (I.k === R) return;
      M.mouse = [j, I.invert(j)], qo(this), M.start();
    }
    Yr(x), M.wheel = setTimeout(V, g), M.zoom("mouse", n(b($(I, R), M.mouse[0], M.mouse[1]), M.extent, s));
    function V() {
      M.wheel = null, M.end();
    }
  }
  function K(x, ...T) {
    if (p || !e.apply(this, arguments)) return;
    var M = x.currentTarget, I = N(this, T, !0).event(x), R = Ht(x.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", G, !0), j = Rt(x, M), V = x.clientX, W = x.clientY;
    Bu(x.view), Ri(x), I.mouse = [j, this.__zoom.invert(j)], qo(this), I.start();
    function q(D) {
      if (Yr(D), !I.moved) {
        var X = D.clientX - V, J = D.clientY - W;
        I.moved = X * X + J * J > y;
      }
      I.event(D).zoom("mouse", n(b(I.that.__zoom, I.mouse[0] = Rt(D, M), I.mouse[1]), I.extent, s));
    }
    function G(D) {
      R.on("mousemove.zoom mouseup.zoom", null), Ru(D.view, I.moved), Yr(D), I.event(D).end();
    }
  }
  function F(x, ...T) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, I = Rt(x.changedTouches ? x.changedTouches[0] : x, this), R = M.invert(I), j = M.k * (x.shiftKey ? 0.5 : 2), V = n(b($(M, j), I, R), t.apply(this, T), s);
      Yr(x), a > 0 ? Ht(this).transition().duration(a).call(P, V, I, x) : Ht(this).call(C.transform, V, I, x);
    }
  }
  function A(x, ...T) {
    if (e.apply(this, arguments)) {
      var M = x.touches, I = M.length, R = N(this, T, x.changedTouches.length === I).event(x), j, V, W, q;
      for (Ri(x), V = 0; V < I; ++V)
        W = M[V], q = Rt(W, this), q = [q, this.__zoom.invert(q), W.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== q[2] && (R.touch1 = q, R.taps = 0) : (R.touch0 = q, j = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), j && (R.taps < 2 && (f = q[0], d = setTimeout(function() {
        d = null;
      }, h)), qo(this), R.start());
    }
  }
  function k(x, ...T) {
    if (this.__zooming) {
      var M = N(this, T).event(x), I = x.changedTouches, R = I.length, j, V, W, q;
      for (Yr(x), j = 0; j < R; ++j)
        V = I[j], W = Rt(V, this), M.touch0 && M.touch0[2] === V.identifier ? M.touch0[0] = W : M.touch1 && M.touch1[2] === V.identifier && (M.touch1[0] = W);
      if (V = M.that.__zoom, M.touch1) {
        var G = M.touch0[0], D = M.touch0[1], X = M.touch1[0], J = M.touch1[1], te = (te = X[0] - G[0]) * te + (te = X[1] - G[1]) * te, ne = (ne = J[0] - D[0]) * ne + (ne = J[1] - D[1]) * ne;
        V = $(V, Math.sqrt(te / ne)), W = [(G[0] + X[0]) / 2, (G[1] + X[1]) / 2], q = [(D[0] + J[0]) / 2, (D[1] + J[1]) / 2];
      } else if (M.touch0) W = M.touch0[0], q = M.touch0[1];
      else return;
      M.zoom("touch", n(b(V, W, q), M.extent, s));
    }
  }
  function S(x, ...T) {
    if (this.__zooming) {
      var M = N(this, T).event(x), I = x.changedTouches, R = I.length, j, V;
      for (Ri(x), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), j = 0; j < R; ++j)
        V = I[j], M.touch0 && M.touch0[2] === V.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === V.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (V = Rt(V, this), Math.hypot(f[0] - V[0], f[1] - V[1]) < w)) {
        var W = Ht(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : Ao(+x), C) : r;
  }, C.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Ao(!!x), C) : e;
  }, C.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : Ao(!!x), C) : o;
  }, C.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Ao([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), C) : t;
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
], ic = ["Enter", " ", "Escape"], Lv = {
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
var nr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(nr || (nr = {}));
var si;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(si || (si = {}));
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
var we;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(we || (we = {}));
const Ua = {
  [we.Left]: we.Right,
  [we.Right]: we.Left,
  [we.Top]: we.Bottom,
  [we.Bottom]: we.Top
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
function Ga(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Vv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const sc = (e) => "id" in e && "source" in e && "target" in e, Hv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Gs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), xo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Xn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, zv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Gs(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? ai(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ei(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Pi(n);
}, Co = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ai(r);
      n = Ei(n, o);
    }
  }), Pi(n);
}, Qs = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...ko(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: f = !0, hidden: p = !1 } = u;
    if (s && !f || p)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, g = d.height ?? u.height ?? u.initialHeight ?? null, y = so(a, zr(u)), w = (h ?? 0) * (g ?? 0), C = i && y > 0;
    (!u.internals.handleBounds || C || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, Dv = (e, t) => {
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
async function Iv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Av(e, s), l = Co(a), u = ea(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function ac({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
  const p = Dr(f) ? ar(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", oo.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function Zv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const p = i.has(f.id), h = !p && f.parentId && s.find((g) => g.id === f.parentId);
    (p || h) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = Dv(s, l);
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
const Hr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ar = (e = { x: 0, y: 0 }, t, n) => ({
  x: Hr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Hr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function lc(e, t, n) {
  const { width: r, height: o } = Xn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return ar(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Qa = (e, t, n) => e < t ? Hr(Math.abs(e - t), 1, t) / t : e > n ? -Hr(Math.abs(e - n), 1, t) / t : 0, uc = (e, t, n = 15, r = 40) => {
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
}), zr = (e, t = [0, 0]) => {
  const { x: n, y: r } = Gs(e) ? e.internals.positionAbsolute : xo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, ai = (e, t = [0, 0]) => {
  const { x: n, y: r } = Gs(e) ? e.internals.positionAbsolute : xo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, cc = (e, t) => Pi(Ei(gs(e), gs(t))), so = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, el = (e) => gn(e.width) && gn(e.height) && gn(e.x) && gn(e.y), gn = (e) => !isNaN(e) && isFinite(e), Bv = (e, t) => {
}, $o = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ko = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? $o(a, s) : a;
}, li = ({ x: e, y: t }, [n, r, o]) => ({
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
function Rv(e, t, n) {
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
function Kv(e, t, n, r, o, i) {
  const { x: s, y: a } = li(e, [t, n, r]), { x: l, y: u } = li({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const ea = (e, t, n, r, o, i) => {
  const s = Rv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Hr(u, r, o), f = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - f * d, g = n / 2 - p * d, y = Kv(e, h, g, d, t, n), w = {
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
}, Un = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Dr(e) {
  return e != null && e !== "parent";
}
function Xn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function dc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function jv(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Yv(e) {
  return { ...Lv, ...e || {} };
}
function Ki(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Yt(e), a = ko({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? $o(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const pc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), fc = (e) => e?.getRootNode?.() || window?.document, Xv = ["INPUT", "SELECT", "TEXTAREA"];
function hc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Xv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const gc = (e) => "clientX" in e, Yt = (e, t) => {
  const n = gc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, tl = (e, t, n, r, o) => {
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
      ...pc(s)
    };
  });
};
function qv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, d, f];
}
function Io(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function nl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case we.Left:
      return [t - Io(t - r, i), n];
    case we.Right:
      return [t + Io(r - t, i), n];
    case we.Top:
      return [t, n - Io(n - o, i)];
    case we.Bottom:
      return [t, n + Io(o - n, i)];
  }
}
function vc({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, curvature: s = 0.25 }) {
  const [a, l] = nl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = nl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, p, h, g] = qv({
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
function mc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Fv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Wv({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ei(ai(e), ai(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return so(s, Pi(i)) > 0;
}
const Jv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Uv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Gv = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return sc(e) ? n = { ...e } : n = {
    ...e,
    id: Jv(e)
  }, Uv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function yc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = mc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const rl = {
  [we.Left]: { x: -1, y: 0 },
  [we.Right]: { x: 1, y: 0 },
  [we.Top]: { x: 0, y: -1 },
  [we.Bottom]: { x: 0, y: 1 }
}, Qv = ({ source: e, sourcePosition: t = we.Bottom, target: n }) => t === we.Left || t === we.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ol = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function e0({ source: e, sourcePosition: t = we.Bottom, target: n, targetPosition: r = we.Top, center: o, offset: i, stepPosition: s }) {
  const a = rl[t], l = rl[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = Qv({
    source: u,
    sourcePosition: t,
    target: d
  }), p = f.x !== 0 ? "x" : "y", h = f[p];
  let g = [], y, w;
  const C = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [, , b, _] = mc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const P = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], N = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[p] === h ? g = p === "x" ? P : N : g = p === "x" ? N : P;
  } else {
    const P = [{ x: u.x, y: d.y }], N = [{ x: d.x, y: u.y }];
    if (p === "x" ? g = a.x === h ? N : P : g = a.y === h ? P : N, t === r) {
      const A = Math.abs(e[p] - n[p]);
      if (A <= i) {
        const k = Math.min(i - 1, i - A);
        a[p] === h ? C[p] = (u[p] > e[p] ? -1 : 1) * k : $[p] = (d[p] > n[p] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const A = p === "x" ? "y" : "x", k = a[p] === l[A], S = u[A] > d[A], x = u[A] < d[A];
      (a[p] === 1 && (!k && S || k && x) || a[p] !== 1 && (!k && x || k && S)) && (g = p === "x" ? P : N);
    }
    const O = { x: u.x + C.x, y: u.y + C.y }, H = { x: d.x + $.x, y: d.y + $.y }, K = Math.max(Math.abs(O.x - g[0].x), Math.abs(H.x - g[0].x)), F = Math.max(Math.abs(O.y - g[0].y), Math.abs(H.y - g[0].y));
    K >= F ? (y = (O.x + H.x) / 2, w = g[0].y) : (y = g[0].x, w = (O.y + H.y) / 2);
  }
  return [[
    e,
    { x: u.x + C.x, y: u.y + C.y },
    ...g,
    { x: d.x + $.x, y: d.y + $.y },
    n
  ], y, w, b, _];
}
function t0(e, t, n, r) {
  const o = Math.min(ol(e, t) / 2, ol(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ta({ sourceX: e, sourceY: t, sourcePosition: n = we.Bottom, targetX: r, targetY: o, targetPosition: i = we.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [f, p, h, g, y] = e0({
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
    return $ > 0 && $ < f.length - 1 ? b = t0(f[$ - 1], C, f[$ + 1], s) : b = `${$ === 0 ? "M" : "L"}${C.x} ${C.y}`, w += b, w;
  }, ""), p, h, g, y];
}
function il(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function n0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!il(t) || !il(n))
    return null;
  const r = t.internals.handleBounds || sl(t.handles), o = n.internals.handleBounds || sl(n.handles), i = al(r?.source ?? [], e.sourceHandle), s = al(
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
  const a = i?.position || we.Bottom, l = s?.position || we.Top, u = ao(t, i, a), d = ao(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function sl(e) {
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
function ao(e, t, n = we.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Xn(e);
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
function al(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function vs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function r0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = vs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function o0(e, t, n, r, o) {
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
const na = {
  nodeOrigin: [0, 0],
  nodeExtent: fs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, i0 = {
  ...na,
  checkEquality: !0
};
function ra(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function s0(e, t, n) {
  const r = ra(na, n);
  for (const o of e.values())
    if (o.parentId)
      oa(o, e, t, r);
    else {
      const i = xo(o, r.nodeOrigin), s = Dr(o.extent) ? o.extent : r.nodeExtent, a = ar(i, s, Xn(o));
      o.internals.positionAbsolute = a;
    }
}
function a0(e, t) {
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
function l0(e, t, n, r) {
  const o = ra(i0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = xo(l, o.nodeOrigin), f = Dr(l.extent) ? l.extent : o.nodeExtent, p = ar(d, f, Xn(l));
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
          handleBounds: a0(l, u),
          z: wc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && oa(u, t, n, r);
  }
  return i;
}
function u0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function oa(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ra(na, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  u0(e, n);
  const u = o ? 1e3 : 0, { x: d, y: f, z: p } = c0(e, l, i, s, u), { positionAbsolute: h } = e.internals, g = d !== h.x || f !== h.y;
  (g || p !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: g ? { x: d, y: f } : h,
      z: p
    }
  });
}
function wc(e, t) {
  return (gn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function c0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Xn(e), l = xo(e, n), u = Dr(e.extent) ? ar(l, e.extent, a) : l;
  let d = ar({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = lc(d, a, t));
  const f = wc(e, o), p = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= f ? p + 1 : f
  };
}
function d0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? zr(a), u = cc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Xn(a), f = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, g = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (g - d.width) * f[0], C = (y - d.height) * f[1];
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
function p0(e, t, n, r, o, i) {
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
    const g = pc(p.nodeElement), y = h.measured.width !== g.width || h.measured.height !== g.height;
    if (g.width && g.height && (y || !h.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), C = Dr(h.extent) ? h.extent : i;
      let { positionAbsolute: $ } = h.internals;
      h.parentId && h.extent === "parent" ? $ = lc($, g, t.get(h.parentId)) : C && ($ = ar($, C, g));
      const b = {
        ...h,
        measured: g,
        internals: {
          ...h.internals,
          positionAbsolute: $,
          handleBounds: {
            source: tl("source", p.nodeElement, w, d, h.id),
            target: tl("target", p.nodeElement, w, d, h.id)
          }
        }
      };
      t.set(h.id, b), h.parentId && oa(b, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: g
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: zr(b, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = d0(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function f0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function ll(e, t, n, r, o, i) {
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
function h0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    ll("source", l, d, e, o, s), ll("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function g0(e, t) {
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
function bc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : bc(n, t) : !1;
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
function v0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !bc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ji({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function m0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = $o(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function y0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, f = !1, p = null, h = !1, g = !1, y = null;
  function w({ noDragClassName: $, handleSelector: b, domNode: _, isSelectable: P, nodeId: N, nodeClickDistance: O = 0 }) {
    p = Ht(_);
    function H({ x: k, y: S }) {
      const { nodeLookup: x, nodeExtent: T, snapGrid: M, snapToGrid: I, nodeOrigin: R, onNodeDrag: j, onSelectionDrag: V, onError: W, updateNodePositions: q } = t();
      i = { x: k, y: S };
      let G = !1;
      const D = a.size > 1, X = D && T ? gs(Co(a)) : null, J = D && I ? m0({
        dragItems: a,
        snapGrid: M,
        x: k,
        y: S
      }) : null;
      for (const [te, ne] of a) {
        if (!x.has(te))
          continue;
        let Q = { x: k - ne.distance.x, y: S - ne.distance.y };
        I && (Q = J ? {
          x: Math.round(Q.x + J.x),
          y: Math.round(Q.y + J.y)
        } : $o(Q, M));
        let fe = null;
        if (D && T && !ne.extent && X) {
          const { positionAbsolute: ie } = ne.internals, pe = ie.x - X.x + T[0][0], ve = ie.x + ne.measured.width - X.x2 + T[1][0], xe = ie.y - X.y + T[0][1], de = ie.y + ne.measured.height - X.y2 + T[1][1];
          fe = [
            [pe, xe],
            [ve, de]
          ];
        }
        const { position: ce, positionAbsolute: re } = ac({
          nodeId: te,
          nextPosition: Q,
          nodeLookup: x,
          nodeExtent: fe || T,
          nodeOrigin: R,
          onError: W
        });
        G = G || ne.position.x !== ce.x || ne.position.y !== ce.y, ne.position = ce, ne.internals.positionAbsolute = re;
      }
      if (g = g || G, !!G && (q(a, !0), y && (r || j || !N && V))) {
        const [te, ne] = ji({
          nodeId: N,
          dragItems: a,
          nodeLookup: x
        });
        r?.(y, a, te, ne), j?.(y, te, ne), N || V?.(y, ne);
      }
    }
    async function K() {
      if (!d)
        return;
      const { transform: k, panBy: S, autoPanSpeed: x, autoPanOnNodeDrag: T } = t();
      if (!T) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [M, I] = uc(u, d, x);
      (M !== 0 || I !== 0) && (i.x = (i.x ?? 0) - M / k[2], i.y = (i.y ?? 0) - I / k[2], await S({ x: M, y: I }) && H(i)), s = requestAnimationFrame(K);
    }
    function F(k) {
      const { nodeLookup: S, multiSelectionActive: x, nodesDraggable: T, transform: M, snapGrid: I, snapToGrid: R, selectNodesOnDrag: j, onNodeDragStart: V, onSelectionDragStart: W, unselectNodesAndEdges: q } = t();
      f = !0, (!j || !P) && !x && N && (S.get(N)?.selected || q()), P && j && N && e?.(N);
      const G = Ki(k.sourceEvent, { transform: M, snapGrid: I, snapToGrid: R, containerBounds: d });
      if (i = G, a = v0(S, T, G, N), a.size > 0 && (n || V || !N && W)) {
        const [D, X] = ji({
          nodeId: N,
          dragItems: a,
          nodeLookup: S
        });
        n?.(k.sourceEvent, a, D, X), V?.(k.sourceEvent, D, X), N || W?.(k.sourceEvent, X);
      }
    }
    const A = Ig().clickDistance(O).on("start", (k) => {
      const { domNode: S, nodeDragThreshold: x, transform: T, snapGrid: M, snapToGrid: I } = t();
      d = S?.getBoundingClientRect() || null, h = !1, g = !1, y = k.sourceEvent, x === 0 && F(k), i = Ki(k.sourceEvent, { transform: T, snapGrid: M, snapToGrid: I, containerBounds: d }), u = Yt(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: S, transform: x, snapGrid: T, snapToGrid: M, nodeDragThreshold: I, nodeLookup: R } = t(), j = Ki(k.sourceEvent, { transform: x, snapGrid: T, snapToGrid: M, containerBounds: d });
      if (y = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      N && !R.has(N)) && (h = !0), !h) {
        if (!l && S && f && (l = !0, K()), !f) {
          const V = Yt(k.sourceEvent, d), W = V.x - u.x, q = V.y - u.y;
          Math.sqrt(W * W + q * q) > I && F(k);
        }
        (i.x !== j.xSnapped || i.y !== j.ySnapped) && a && f && (u = Yt(k.sourceEvent, d), H(j));
      }
    }).on("end", (k) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: S, updateNodePositions: x, onNodeDragStop: T, onSelectionDragStop: M } = t();
        if (g && (x(a, !1), g = !1), o || T || !N && M) {
          const [I, R] = ji({
            nodeId: N,
            dragItems: a,
            nodeLookup: S,
            dragging: !1
          });
          o?.(k.sourceEvent, a, I, R), T?.(k.sourceEvent, I, R), N || M?.(k.sourceEvent, R);
        }
      }
    }).filter((k) => {
      const S = k.target;
      return !k.button && (!$ || !ul(S, `.${$}`, _)) && (!b || ul(S, b, _));
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
function w0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    so(o, zr(i)) > 0 && r.push(i);
  return r;
}
const b0 = 250;
function x0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = w0(e, n, t + b0);
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
function xc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...ao(s, l, l.position, !0) } : l;
}
function Cc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function C0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const $c = () => !0;
function $0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: f, panBy: p, cancelConnection: h, onConnectStart: g, onConnect: y, onConnectEnd: w, isValidConnection: C = $c, onReconnectEnd: $, updateConnection: b, getTransform: _, getFromHandle: P, autoPanSpeed: N, dragThreshold: O = 1, handleDomNode: H }) {
  const K = fc(e.target);
  let F = 0, A;
  const { x: k, y: S } = Yt(e), x = Cc(i, H), T = a?.getBoundingClientRect();
  let M = !1;
  if (!T || !x)
    return;
  const I = xc(o, x, r, l, t);
  if (!I)
    return;
  let R = Yt(e, T), j = !1, V = null, W = !1, q = null;
  function G() {
    if (!d || !T)
      return;
    const [fe, ce] = uc(R, T, N);
    p({ x: fe, y: ce }), F = requestAnimationFrame(G);
  }
  const D = {
    ...I,
    nodeId: o,
    type: x,
    position: I.position
  }, X = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: ao(X, D, we.Left, !0),
    fromHandle: D,
    fromPosition: D.position,
    fromNode: X,
    to: R,
    toHandle: null,
    toPosition: Ua[D.position],
    toNode: null
  };
  function te() {
    M = !0, b(J), g?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  O === 0 && te();
  function ne(fe) {
    if (!M) {
      const { x: pe, y: ve } = Yt(fe), xe = pe - k, de = ve - S;
      if (!(xe * xe + de * de > O * O))
        return;
      te();
    }
    if (!P() || !D) {
      Q(fe);
      return;
    }
    const ce = _();
    R = Yt(fe, T), A = x0(ko(R, ce, !1, [1, 1]), n, l, D), j || (G(), j = !0);
    const re = kc(fe, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: C,
      doc: K,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    q = re.handleDomNode, V = re.connection, W = C0(!!A, re.isValid);
    const ie = {
      // from stays the same
      ...J,
      isValid: W,
      to: re.toHandle && W ? li({ x: re.toHandle.x, y: re.toHandle.y }, ce) : R,
      toHandle: re.toHandle,
      toPosition: W && re.toHandle ? re.toHandle.position : Ua[D.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null
    };
    W && A && J.toHandle && ie.toHandle && J.toHandle.type === ie.toHandle.type && J.toHandle.nodeId === ie.toHandle.nodeId && J.toHandle.id === ie.toHandle.id && J.to.x === ie.to.x && J.to.y === ie.to.y || (b(ie), J = ie);
  }
  function Q(fe) {
    if (!("touches" in fe && fe.touches.length > 0)) {
      if (M) {
        (A || q) && V && W && y?.(V);
        const { inProgress: ce, ...re } = J, ie = {
          ...re,
          toPosition: J.toHandle ? J.toPosition : null
        };
        w?.(fe, ie), i && $?.(fe, ie);
      }
      h(), cancelAnimationFrame(F), j = !1, W = !1, V = null, q = null, K.removeEventListener("mousemove", ne), K.removeEventListener("mouseup", Q), K.removeEventListener("touchmove", ne), K.removeEventListener("touchend", Q);
    }
  }
  K.addEventListener("mousemove", ne), K.addEventListener("mouseup", Q), K.addEventListener("touchmove", ne), K.addEventListener("touchend", Q);
}
function kc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = $c, nodeLookup: d }) {
  const f = i === "target", p = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = Yt(e), y = s.elementFromPoint(h, g), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, C = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const $ = Cc(void 0, w), b = w.getAttribute("data-nodeid"), _ = w.getAttribute("data-handleid"), P = w.classList.contains("connectable"), N = w.classList.contains("connectableend");
    if (!b || !$)
      return C;
    const O = {
      source: f ? b : r,
      sourceHandle: f ? _ : o,
      target: f ? r : b,
      targetHandle: f ? o : _
    };
    C.connection = O;
    const H = P && N && (n === Vr.Strict ? f && $ === "source" || !f && $ === "target" : b !== r || _ !== o);
    C.isValid = H && u(O), C.toHandle = xc(b, $, _, d, n, !0);
  }
  return C;
}
const cl = {
  onPointerDown: $0,
  isValid: kc
};
function k0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ht(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: f = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const g = (b) => {
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = n(), P = b.sourceEvent.ctrlKey && Un() ? 10 : 1, N = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * d, O = _[2] * Math.pow(2, N * P);
      t.scaleTo(O);
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
      const P = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], N = [P[0] - y[0], P[1] - y[1]];
      y = P;
      const O = r() * Math.max(_[2], Math.log(_[2])) * (h ? -1 : 1), H = {
        x: _[0] - N[0] * O,
        y: _[1] - N[1] * O
      }, K = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: _[2]
      }, K, a);
    }, $ = oc().on("start", w).on("zoom", f ? C : null).on("zoom.wheel", p ? g : null);
    o.call($, {});
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
const _0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Mi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Yi = ({ x: e, y: t, zoom: n }) => Ni.translate(e, t).scale(n), mr = (e, t) => e.target.closest(`.${t}`), _c = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), S0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Xi = (e, t = 0, n = S0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Sc = (e) => {
  const t = e.ctrlKey && Un() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function N0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (mr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = Rt(d), C = Sc(d), $ = f * Math.pow(2, C);
      r.scaleTo(n, $, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === nr.Vertical ? 0 : d.deltaX * p, g = o === nr.Horizontal ? 0 : d.deltaY * p;
    !Un() && d.shiftKey && o !== nr.Vertical && (h = d.deltaY * p, g = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(g / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Mi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      u?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function E0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = mr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function P0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Mi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && _c(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Mi(i.transform));
  };
}
function T0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && _c(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && _0(e.prevViewport, s.transform))) {
      const a = Mi(s.transform);
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
  }, f = e.getBoundingClientRect(), p = oc().clickDistance(!gn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Ht(e).call(p);
  b({
    x: i.x,
    y: i.y,
    zoom: Hr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const g = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  p.wheelDelta(Sc);
  function w(k, S) {
    return h ? new Promise((x) => {
      p?.interpolate(S?.interpolate === "linear" ? Gr : jo).transform(Xi(h, S?.duration, S?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: k, noPanClassName: S, onPaneContextMenu: x, userSelectionActive: T, panOnScroll: M, panOnDrag: I, panOnScrollMode: R, panOnScrollSpeed: j, preventScrolling: V, zoomOnPinch: W, zoomOnScroll: q, zoomOnDoubleClick: G, zoomActivationKeyPressed: D, lib: X, onTransformChange: J, connectionInProgress: te }) {
    T && !d.isZoomingOrPanning && $();
    const ne = M && !D && !T ? N0({
      zoomPanValues: d,
      noWheelClassName: k,
      d3Selection: h,
      d3Zoom: p,
      panOnScrollMode: R,
      panOnScrollSpeed: j,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : E0({
      noWheelClassName: k,
      preventScrolling: V,
      d3ZoomHandler: g
    });
    if (h.on("wheel.zoom", ne, { passive: !1 }), !T) {
      const fe = P0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      p.on("start", fe);
      const ce = M0({
        zoomPanValues: d,
        panOnDrag: I,
        onPaneContextMenu: !!x,
        onPanZoom: s,
        onTransformChange: J
      });
      p.on("zoom", ce);
      const re = T0({
        zoomPanValues: d,
        panOnDrag: I,
        panOnScroll: M,
        onPaneContextMenu: x,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      p.on("end", re);
    }
    const Q = L0({
      zoomActivationKeyPressed: D,
      panOnDrag: I,
      zoomOnScroll: q,
      panOnScroll: M,
      zoomOnDoubleClick: G,
      zoomOnPinch: W,
      userSelectionActive: T,
      noPanClassName: S,
      noWheelClassName: k,
      lib: X,
      connectionInProgress: te
    });
    p.filter(Q), G ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function $() {
    p.on("zoom", null);
  }
  async function b(k, S, x) {
    const T = Yi(k), M = p?.constrain()(T, S, x);
    return M && await w(M), new Promise((I) => I(M));
  }
  async function _(k, S) {
    const x = Yi(k);
    return await w(x, S), new Promise((T) => T(x));
  }
  function P(k) {
    if (h) {
      const S = Yi(k), x = h.property("__zoom");
      (x.k !== k.zoom || x.x !== k.x || x.y !== k.y) && p?.transform(h, S, null, { sync: !0 });
    }
  }
  function N() {
    const k = h ? rc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: k.x, y: k.y, zoom: k.k };
  }
  function O(k, S) {
    return h ? new Promise((x) => {
      p?.interpolate(S?.interpolate === "linear" ? Gr : jo).scaleTo(Xi(h, S?.duration, S?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function H(k, S) {
    return h ? new Promise((x) => {
      p?.interpolate(S?.interpolate === "linear" ? Gr : jo).scaleBy(Xi(h, S?.duration, S?.ease, () => x(!0)), k);
    }) : Promise.resolve(!1);
  }
  function K(k) {
    p?.scaleExtent(k);
  }
  function F(k) {
    p?.translateExtent(k);
  }
  function A(k) {
    const S = !gn(k) || k < 0 ? 0 : k;
    p?.clickDistance(S);
  }
  return {
    update: C,
    destroy: $,
    setViewport: _,
    setViewportConstrained: b,
    getViewport: N,
    scaleTo: O,
    scaleBy: H,
    setScaleExtent: K,
    setTranslateExtent: F,
    syncViewport: P,
    setClickDistance: A
  };
}
var dl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(dl || (dl = {}));
var V0 = /* @__PURE__ */ ee("<div><!></div>");
function In(e, t) {
  le(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => we.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), f = m(t, "onconnect", 7), p = m(t, "ondisconnect", 7), h = m(t, "children", 7), g = /* @__PURE__ */ De(t, [
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
  const y = Dn("svelteflow__node_id"), w = Dn("svelteflow__node_connectable");
  let C = /* @__PURE__ */ E(() => r() === "target"), $ = /* @__PURE__ */ E(() => a() !== void 0 ? a() : w.value), b = Gt(), _ = /* @__PURE__ */ E(() => b.ariaLabelConfig), P = null;
  su(() => {
    if (f() || p()) {
      b.edges;
      let V = b.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (P && !Ov(V, P)) {
        const W = V ?? /* @__PURE__ */ new Map();
        Ga(P, W, p()), Ga(W, P, f());
      }
      P = new Map(V);
    }
  });
  let N = /* @__PURE__ */ E(() => {
    if (!b.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: V, toHandle: W, isValid: q } = b.connection, G = V && V.nodeId === y && V.type === r() && V.id === n(), D = W && W.nodeId === y && W.type === r() && W.id === n(), X = b.connectionMode === Vr.Strict ? V?.type !== r() : y !== V?.nodeId || n() !== V?.id;
    return [
      !0,
      G,
      D,
      X,
      D && q
    ];
  }), O = /* @__PURE__ */ E(() => fo(c(N), 5)), H = /* @__PURE__ */ E(() => c(O)[0]), K = /* @__PURE__ */ E(() => c(O)[1]), F = /* @__PURE__ */ E(() => c(O)[2]), A = /* @__PURE__ */ E(() => c(O)[3]), k = /* @__PURE__ */ E(() => c(O)[4]);
  function S(V) {
    const W = b.onbeforeconnect ? b.onbeforeconnect(V) : V;
    W && (b.addEdge(W), b.onconnect?.(V));
  }
  function x(V) {
    const W = gc(V);
    V.currentTarget && (W && V.button === 0 || !W) && cl.onPointerDown(V, {
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
      onConnect: S,
      onConnectStart: (q, G) => {
        b.onconnectstart?.(q, {
          nodeId: G.nodeId,
          handleId: G.handleId,
          handleType: G.handleType
        });
      },
      onConnectEnd: (q, G) => {
        b.onconnectend?.(q, G);
      },
      getTransform: () => [b.viewport.x, b.viewport.y, b.viewport.zoom],
      getFromHandle: () => b.connection.fromHandle,
      dragThreshold: b.connectionDragThreshold,
      handleDomNode: V.currentTarget
    });
  }
  function T(V) {
    if (!y || !b.clickConnectStartHandle && !l())
      return;
    if (!b.clickConnectStartHandle) {
      b.onclickconnectstart?.(V, { nodeId: y, handleId: n(), handleType: r() }), b.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const W = fc(V.target), q = d() ?? b.isValidConnection, { connectionMode: G, clickConnectStartHandle: D, flowId: X, nodeLookup: J } = b, { connection: te, isValid: ne } = cl.isValid(V, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: G,
      fromNodeId: D.nodeId,
      fromHandleId: D.id ?? null,
      fromType: D.type,
      isValidConnection: q,
      flowId: X,
      doc: W,
      lib: "svelte",
      nodeLookup: J
    });
    ne && te && S(te);
    const Q = structuredClone(Il(b.connection));
    delete Q.inProgress, Q.toPosition = Q.toHandle ? Q.toHandle.position : null, b.onclickconnectend?.(V, Q), b.clickConnectStartHandle = null;
  }
  var M = {
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
    set position(V = we.Top) {
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
  }, I = V0(), R = () => {
  };
  et(
    I,
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
      onclick: b.clickConnect ? T : void 0,
      onkeypress: R,
      style: i(),
      role: "button",
      "aria-label": c(_)["handle.ariaLabel"],
      tabindex: "-1",
      ...g,
      [Mn]: V
    }),
    [
      () => ({
        valid: c(k),
        connectingto: c(F),
        connectingfrom: c(K),
        source: !c(C),
        target: c(C),
        connectablestart: l(),
        connectableend: u(),
        connectable: c($),
        connectionindicator: c($) && (!c(H) || c(A)) && (c(H) || b.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var j = B(I);
  return qe(j, () => h() ?? dt), Z(I), L(e, I), ue(M);
}
se(
  In,
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
var H0 = /* @__PURE__ */ ee("<!> <!>", 1);
function ia(e, t) {
  le(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => we.Top), o = m(t, "sourcePosition", 23, () => we.Bottom);
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
  }, s = H0(), a = oe(s);
  In(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = z(a), u = z(l);
  return In(u, {
    type: "source",
    get position() {
      return o();
    }
  }), $e(() => Re(l, ` ${n()?.label ?? ""} `)), L(e, s), ue(i);
}
se(ia, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var z0 = /* @__PURE__ */ ee(" <!>", 1);
function Nc(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => we.Bottom);
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
  me();
  var i = z0(), s = oe(i), a = z(s);
  return In(a, {
    type: "source",
    get position() {
      return r();
    }
  }), $e(() => Re(s, `${n()?.label ?? ""} `)), L(e, i), ue(o);
}
se(Nc, { data: {}, sourcePosition: {} }, [], [], !0);
var D0 = /* @__PURE__ */ ee(" <!>", 1);
function Ec(e, t) {
  le(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => we.Top);
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
  me();
  var i = D0(), s = oe(i), a = z(s);
  return In(a, {
    type: "target",
    get position() {
      return r();
    }
  }), $e(() => Re(s, `${n()?.label ?? ""} `)), L(e, i), ue(o);
}
se(Ec, { data: {}, targetPosition: {} }, [], [], !0);
function Pc(e, t) {
}
se(Pc, {}, [], [], !0);
function qi(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Mc(e, t) {
  const n = /* @__PURE__ */ E(Gt), r = /* @__PURE__ */ E(() => c(n).domNode);
  let o;
  return c(r) ? qi(e, c(r), t) : o = As(() => {
    Xe(() => {
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
function Tc() {
  let e = /* @__PURE__ */ Ee(typeof window > "u");
  if (c(e)) {
    const t = As(() => {
      Xe(() => {
        U(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const pl = (e) => Hv(e), A0 = (e) => sc(e);
function un(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const ui = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var I0 = /* @__PURE__ */ ee("<div><!></div>");
const Z0 = {
  hash: "svelte-yagk5c",
  code: ".transparent.svelte-yagk5c {background:transparent;}"
};
function Lc(e, t) {
  le(t, !0), ze(e, Z0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ De(t, [
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
  const f = Gt(), p = Dn("svelteflow__edge_id");
  let h = /* @__PURE__ */ E(() => f.visible.edges.get(p)?.zIndex);
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
  }, y = I0(), w = () => {
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
        display: Tc().value ? "none" : void 0,
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
  return qe(C, () => u() ?? dt), Z(y), ft(y, ($, b) => Mc?.($, b), () => "edge-labels"), L(e, y), ue(g);
}
se(
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
var B0 = /* @__PURE__ */ he("<path></path>"), R0 = /* @__PURE__ */ he('<path fill="none"></path><!><!>', 1);
function _o(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), f = m(t, "interactionWidth", 7, 20), p = m(t, "class", 7), h = /* @__PURE__ */ De(t, [
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
      return u();
    },
    set markerEnd(P) {
      u(P), v();
    },
    get style() {
      return d();
    },
    set style(P) {
      d(P), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(P = 20) {
      f(P), v();
    },
    get class() {
      return p();
    },
    set class(P) {
      p(P), v();
    }
  }, y = R0(), w = oe(y), C = z(w);
  {
    var $ = (P) => {
      var N = B0();
      et(N, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), L(P, N);
    };
    ae(C, (P) => {
      f() > 0 && P($);
    });
  }
  var b = z(C);
  {
    var _ = (P) => {
      Lc(P, {
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
        children: (N, O) => {
          me();
          var H = ke();
          $e(() => Re(H, o())), L(N, H);
        },
        $$slots: { default: !0 }
      });
    };
    ae(b, (P) => {
      o() && P(_);
    });
  }
  return $e(() => {
    be(w, "id", n()), be(w, "d", r()), Nt(w, 0, kn(["svelte-flow__edge-path", p()])), be(w, "marker-start", l()), be(w, "marker-end", u()), pt(w, d());
  }), L(e, y), ue(g);
}
se(
  _o,
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
function sa(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), f = m(t, "sourceY", 7), p = m(t, "style", 7), h = m(t, "targetPosition", 7), g = m(t, "targetX", 7), y = m(t, "targetY", 7), w = /* @__PURE__ */ E(() => vc({
    sourceX: d(),
    sourceY: f(),
    targetX: g(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), C = /* @__PURE__ */ E(() => fo(c(w), 3)), $ = /* @__PURE__ */ E(() => c(C)[0]), b = /* @__PURE__ */ E(() => c(C)[1]), _ = /* @__PURE__ */ E(() => c(C)[2]);
  var P = {
    get id() {
      return n();
    },
    set id(N) {
      n(N), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(N) {
      r(N), v();
    },
    get label() {
      return o();
    },
    set label(N) {
      o(N), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(N) {
      i(N), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(N) {
      s(N), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(N) {
      a(N), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(N) {
      l(N), v();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(N) {
      u(N), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(N) {
      d(N), v();
    },
    get sourceY() {
      return f();
    },
    set sourceY(N) {
      f(N), v();
    },
    get style() {
      return p();
    },
    set style(N) {
      p(N), v();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(N) {
      h(N), v();
    },
    get targetX() {
      return g();
    },
    set targetX(N) {
      g(N), v();
    },
    get targetY() {
      return y();
    },
    set targetY(N) {
      y(N), v();
    }
  };
  return _o(e, {
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
  }), ue(P);
}
se(
  sa,
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
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), f = m(t, "targetPosition", 7), p = m(t, "targetX", 7), h = m(t, "targetY", 7), g = /* @__PURE__ */ E(() => ta({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: f()
  })), y = /* @__PURE__ */ E(() => fo(c(g), 3)), w = /* @__PURE__ */ E(() => c(y)[0]), C = /* @__PURE__ */ E(() => c(y)[1]), $ = /* @__PURE__ */ E(() => c(y)[2]);
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
  return _o(e, {
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
se(
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
function Vc(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), f = m(t, "style", 7), p = /* @__PURE__ */ E(() => yc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ E(() => fo(c(p), 3)), g = /* @__PURE__ */ E(() => c(h)[0]), y = /* @__PURE__ */ E(() => c(h)[1]), w = /* @__PURE__ */ E(() => c(h)[2]);
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
  return _o(e, {
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
se(
  Vc,
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
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), f = m(t, "markerEnd", 7), p = m(t, "interactionWidth", 7), h = m(t, "style", 7), g = /* @__PURE__ */ E(() => ta({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ E(() => fo(c(g), 3)), w = /* @__PURE__ */ E(() => c(y)[0]), C = /* @__PURE__ */ E(() => c(y)[1]), $ = /* @__PURE__ */ E(() => c(y)[2]);
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
  return _o(e, {
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
class K0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = Xl(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const j0 = /\(.+\)/, Y0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class X0 extends K0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = j0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Y0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => rs(o, "change", i)
    );
  }
}
function q0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Qs(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function fl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), p = r.get(d.target);
    if (!f || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: C, height: $ } = e;
      if (Wv({
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
    const g = n0({
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
      zIndex: Fv({
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
const zc = {
  input: Nc,
  output: Ec,
  default: ia,
  group: Pc
}, Dc = {
  straight: Vc,
  smoothstep: Oc,
  default: sa,
  step: Hc
};
function F0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Co(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ea(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function W0(e) {
  class t {
    #t = /* @__PURE__ */ E(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      U(this.#t, r);
    }
    #e = /* @__PURE__ */ Ee(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      U(this.#e, r);
    }
    #a = /* @__PURE__ */ Ee(null);
    get panZoom() {
      return c(this.#a);
    }
    set panZoom(r) {
      U(this.#a, r);
    }
    #i = /* @__PURE__ */ Ee(e.width ?? 0);
    get width() {
      return c(this.#i);
    }
    set width(r) {
      U(this.#i, r);
    }
    #d = /* @__PURE__ */ Ee(e.height ?? 0);
    get height() {
      return c(this.#d);
    }
    set height(r) {
      U(this.#d, r);
    }
    #s = /* @__PURE__ */ E(() => {
      const r = l0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      U(this.#s, r);
    }
    #r = /* @__PURE__ */ E(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#r);
    }
    set viewportInitialized(r) {
      U(this.#r, r);
    }
    #n = /* @__PURE__ */ E(() => (h0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#n);
    }
    set _edges(r) {
      U(this.#n, r);
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
    #o = /* @__PURE__ */ E(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#o);
    }
    set selectedNodes(r) {
      U(this.#o, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ E(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#l);
    }
    set selectedEdges(r) {
      U(this.#l, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #p = /* @__PURE__ */ E(() => {
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
        f = q0(s, C, y, w), p = fl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: C,
          width: y,
          height: w
        });
      } else
        f = this.nodeLookup, p = fl(h);
      return { nodes: f, edges: p };
    });
    get visible() {
      return c(this.#p);
    }
    set visible(r) {
      U(this.#p, r);
    }
    #c = /* @__PURE__ */ E(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#c);
    }
    set nodesDraggable(r) {
      U(this.#c, r);
    }
    #f = /* @__PURE__ */ E(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      U(this.#f, r);
    }
    #u = /* @__PURE__ */ E(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#u);
    }
    set elementsSelectable(r) {
      U(this.#u, r);
    }
    #h = /* @__PURE__ */ E(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#h);
    }
    set nodesFocusable(r) {
      U(this.#h, r);
    }
    #y = /* @__PURE__ */ E(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      U(this.#y, r);
    }
    #w = /* @__PURE__ */ E(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#w);
    }
    set disableKeyboardA11y(r) {
      U(this.#w, r);
    }
    #b = /* @__PURE__ */ E(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#b);
    }
    set minZoom(r) {
      U(this.#b, r);
    }
    #g = /* @__PURE__ */ E(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#g);
    }
    set maxZoom(r) {
      U(this.#g, r);
    }
    #v = /* @__PURE__ */ E(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#v);
    }
    set nodeOrigin(r) {
      U(this.#v, r);
    }
    #m = /* @__PURE__ */ E(() => e.props.nodeExtent ?? fs);
    get nodeExtent() {
      return c(this.#m);
    }
    set nodeExtent(r) {
      U(this.#m, r);
    }
    #x = /* @__PURE__ */ E(() => e.props.translateExtent ?? fs);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      U(this.#x, r);
    }
    #C = /* @__PURE__ */ E(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      U(this.#C, r);
    }
    #$ = /* @__PURE__ */ E(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#$);
    }
    set nodeDragThreshold(r) {
      U(this.#$, r);
    }
    #k = /* @__PURE__ */ E(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      U(this.#k, r);
    }
    #_ = /* @__PURE__ */ E(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      U(this.#_, r);
    }
    #S = /* @__PURE__ */ E(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      U(this.#S, r);
    }
    #N = /* @__PURE__ */ E(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#N);
    }
    set autoPanSpeed(r) {
      U(this.#N, r);
    }
    #E = /* @__PURE__ */ E(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      U(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ E(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      U(this.#P, r);
    }
    #M = /* @__PURE__ */ Ee(!1);
    get dragging() {
      return c(this.#M);
    }
    set dragging(r) {
      U(this.#M, r);
    }
    #T = /* @__PURE__ */ Ee(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      U(this.#T, r);
    }
    #L = /* @__PURE__ */ Ee(!1);
    get selectionKeyPressed() {
      return c(this.#L);
    }
    set selectionKeyPressed(r) {
      U(this.#L, r);
    }
    #O = /* @__PURE__ */ Ee(!1);
    get multiselectionKeyPressed() {
      return c(this.#O);
    }
    set multiselectionKeyPressed(r) {
      U(this.#O, r);
    }
    #V = /* @__PURE__ */ Ee(!1);
    get deleteKeyPressed() {
      return c(this.#V);
    }
    set deleteKeyPressed(r) {
      U(this.#V, r);
    }
    #H = /* @__PURE__ */ Ee(!1);
    get panActivationKeyPressed() {
      return c(this.#H);
    }
    set panActivationKeyPressed(r) {
      U(this.#H, r);
    }
    #z = /* @__PURE__ */ Ee(!1);
    get zoomActivationKeyPressed() {
      return c(this.#z);
    }
    set zoomActivationKeyPressed(r) {
      U(this.#z, r);
    }
    #D = /* @__PURE__ */ Ee(null);
    get selectionRectMode() {
      return c(this.#D);
    }
    set selectionRectMode(r) {
      U(this.#D, r);
    }
    #A = /* @__PURE__ */ Ee("");
    get ariaLiveMessage() {
      return c(this.#A);
    }
    set ariaLiveMessage(r) {
      U(this.#A, r);
    }
    #I = /* @__PURE__ */ E(() => e.props.selectionMode ?? si.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      U(this.#I, r);
    }
    #Z = /* @__PURE__ */ E(() => ({ ...zc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#Z);
    }
    set nodeTypes(r) {
      U(this.#Z, r);
    }
    #B = /* @__PURE__ */ E(() => ({ ...Dc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#B);
    }
    set edgeTypes(r) {
      U(this.#B, r);
    }
    #R = /* @__PURE__ */ E(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#R);
    }
    set noPanClass(r) {
      U(this.#R, r);
    }
    #K = /* @__PURE__ */ E(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      U(this.#K, r);
    }
    #j = /* @__PURE__ */ E(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#j);
    }
    set noWheelClass(r) {
      U(this.#j, r);
    }
    #Y = /* @__PURE__ */ E(() => Yv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Y);
    }
    set ariaLabelConfig(r) {
      U(this.#Y, r);
    }
    #X = /* @__PURE__ */ Ee(F0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#X);
    }
    set _viewport(r) {
      U(this.#X, r);
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
      U(this.#q, r);
    }
    #F = /* @__PURE__ */ E(() => this._connection.inProgress ? {
      ...this._connection,
      to: ko(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#F);
    }
    set connection(r) {
      U(this.#F, r);
    }
    #W = /* @__PURE__ */ E(() => e.props.connectionMode ?? Vr.Strict);
    get connectionMode() {
      return c(this.#W);
    }
    set connectionMode(r) {
      U(this.#W, r);
    }
    #J = /* @__PURE__ */ E(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#J);
    }
    set connectionRadius(r) {
      U(this.#J, r);
    }
    #U = /* @__PURE__ */ E(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      U(this.#U, r);
    }
    #G = /* @__PURE__ */ E(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#G);
    }
    set selectNodesOnDrag(r) {
      U(this.#G, r);
    }
    #Q = /* @__PURE__ */ E(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      U(this.#Q, r);
    }
    #ee = /* @__PURE__ */ E(() => r0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      U(this.#ee, r);
    }
    #te = /* @__PURE__ */ E(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      U(this.#te, r);
    }
    #ne = /* @__PURE__ */ E(() => e.props.onflowerror ?? Bv);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      U(this.#ne, r);
    }
    #re = /* @__PURE__ */ E(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      U(this.#re, r);
    }
    #oe = /* @__PURE__ */ E(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      U(this.#oe, r);
    }
    #ie = /* @__PURE__ */ E(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      U(this.#ie, r);
    }
    #se = /* @__PURE__ */ E(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      U(this.#se, r);
    }
    #ae = /* @__PURE__ */ E(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      U(this.#ae, r);
    }
    #le = /* @__PURE__ */ E(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      U(this.#le, r);
    }
    #ue = /* @__PURE__ */ E(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      U(this.#ue, r);
    }
    #ce = /* @__PURE__ */ E(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      U(this.#ce, r);
    }
    #de = /* @__PURE__ */ E(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      U(this.#de, r);
    }
    #pe = /* @__PURE__ */ E(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#pe);
    }
    set onreconnectend(r) {
      U(this.#pe, r);
    }
    #fe = /* @__PURE__ */ E(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      U(this.#fe, r);
    }
    #he = /* @__PURE__ */ E(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      U(this.#he, r);
    }
    #ge = /* @__PURE__ */ E(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      U(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Ee(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      U(this.#ve, r);
    }
    #me = /* @__PURE__ */ E(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      U(this.#me, r);
    }
    #ye = /* @__PURE__ */ E(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      U(this.#ye, r);
    }
    #we = /* @__PURE__ */ E(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      U(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Iv(
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
    #be = /* @__PURE__ */ E(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      U(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = hs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Gt() {
  const e = Dn(ci);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const ci = Symbol();
function Ac(e) {
  const t = W0(e);
  function n(A) {
    t.nodeTypes = {
      ...zc,
      ...A
    };
  }
  function r(A) {
    t.edgeTypes = {
      ...Dc,
      ...A
    };
  }
  function o(A) {
    t.edges = Gv(A, t.edges);
  }
  const i = (A, k = !1) => {
    t.nodes = t.nodes.map((S) => {
      const x = A.get(S.id);
      return x ? { ...S, position: x.position, dragging: k } : S;
    });
  };
  function s(A) {
    const { changes: k, updatedInternals: S } = p0(A, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!S)
      return;
    s0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const x = /* @__PURE__ */ new Map();
    for (const T of k) {
      const M = t.nodeLookup.get(T.id)?.internals.userNode;
      if (!M)
        continue;
      const I = { ...M };
      switch (T.type) {
        case "dimensions": {
          const R = { ...I.measured, ...T.dimensions };
          T.setAttributes && (I.width = T.dimensions?.width ?? I.width, I.height = T.dimensions?.height ?? I.height), I.measured = R;
          break;
        }
        case "position":
          I.position = T.position ?? I.position;
          break;
      }
      x.set(T.id, I);
    }
    t.nodes = t.nodes.map((T) => x.get(T.id) ?? T);
  }
  function a(A) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = A, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(A, k, S) {
    const x = typeof S?.zoom < "u" ? S.zoom : t.maxZoom, T = t.panZoom;
    return T ? (await T.setViewport({
      x: t.width / 2 - A * x,
      y: t.height / 2 - k * x,
      zoom: x
    }, { duration: S?.duration, ease: S?.ease, interpolate: S?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(A, k) {
    const S = t.panZoom;
    return S ? S.scaleBy(A, k) : Promise.resolve(!1);
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
    let S = !1;
    const x = A.map((T) => (!k || k.has(T.id)) && T.selected ? (S = !0, { ...T, selected: !1 }) : T);
    return [S, x];
  }
  function C(A) {
    const k = A?.nodes ? new Set(A.nodes.map((R) => R.id)) : null, [S, x] = w(t.nodes, k);
    S && (t.nodes = x);
    const T = A?.edges ? new Set(A.edges.map((R) => R.id)) : null, [M, I] = w(t.edges, T);
    M && (t.edges = I);
  }
  function $(A) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((S) => {
      const x = A.includes(S.id), T = k && S.selected || x;
      if (S.selected !== T) {
        const M = t.nodeLookup.get(S.id);
        return M && (M.selected = T), S.selected = T, { ...S };
      }
      return S;
    }), k || C({ nodes: [] });
  }
  function b(A) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((S) => {
      const x = A.includes(S.id), T = k && S.selected || x;
      return S.selected !== T ? { ...S, selected: T } : S;
    }), k || C({ edges: [] });
  }
  function _(A, k, S) {
    const x = t.nodeLookup.get(A);
    if (!x) {
      console.warn("012", oo.error012(A));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, x.selected ? (k || x.selected && t.multiselectionKeyPressed) && (C({ nodes: [x], edges: [] }), requestAnimationFrame(() => S?.blur())) : $([A]);
  }
  function P(A) {
    const k = t.edgeLookup.get(A);
    if (!k) {
      console.warn("012", oo.error012(A));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && C({ nodes: [], edges: [k] }) : b([A]));
  }
  function N(A, k) {
    const { nodeExtent: S, snapGrid: x, nodeOrigin: T, nodeLookup: M, nodesDraggable: I, onerror: R } = t, j = /* @__PURE__ */ new Map(), V = x?.[0] ?? 5, W = x?.[1] ?? 5, q = A.x * V * k, G = A.y * W * k;
    for (const D of M.values()) {
      if (!(D.selected && (D.draggable || I && typeof D.draggable > "u")))
        continue;
      let X = {
        x: D.internals.positionAbsolute.x + q,
        y: D.internals.positionAbsolute.y + G
      };
      x && (X = $o(X, x));
      const { position: J, positionAbsolute: te } = ac({
        nodeId: D.id,
        nextPosition: X,
        nodeLookup: M,
        nodeExtent: S,
        nodeOrigin: T,
        onError: R
      });
      D.position = J, D.internals.positionAbsolute = te, j.set(D.id, D);
    }
    i(j);
  }
  function O(A) {
    return f0({
      delta: A,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const H = (A) => {
    t._connection = { ...A };
  };
  function K() {
    t._connection = hs;
  }
  function F() {
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
    handleEdgeSelection: P,
    moveSelectedNodes: N,
    panBy: O,
    updateConnection: H,
    cancelConnection: K,
    reset: F
  });
}
function J0(e, t) {
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
var U0 = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Ic(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 7), o = m(t, "preventScrolling", 7), i = m(t, "zoomOnScroll", 7), s = m(t, "zoomOnDoubleClick", 7), a = m(t, "zoomOnPinch", 7), l = m(t, "panOnDrag", 7), u = m(t, "panOnScroll", 7), d = m(t, "panOnScrollSpeed", 7), f = m(t, "paneClickDistance", 7), p = m(t, "onmovestart", 7), h = m(t, "onmove", 7), g = m(t, "onmoveend", 7), y = m(t, "oninit", 7), w = m(t, "children", 7), C = /* @__PURE__ */ E(() => n().panActivationKeyPressed || l()), $ = /* @__PURE__ */ E(() => n().panActivationKeyPressed || u());
  const { viewport: b } = n();
  let _ = !1;
  Xe(() => {
    !_ && n().viewportInitialized && (y()?.(), _ = !0);
  });
  var P = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H) {
      r(H), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H) {
      o(H), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H) {
      i(H), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H) {
      s(H), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H) {
      a(H), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H) {
      l(H), v();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(H) {
      u(H), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(H) {
      d(H), v();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(H) {
      f(H), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(H) {
      p(H), v();
    },
    get onmove() {
      return h();
    },
    set onmove(H) {
      h(H), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(H) {
      g(H), v();
    },
    get oninit() {
      return y();
    },
    set oninit(H) {
      y(H), v();
    },
    get children() {
      return w();
    },
    set children(H) {
      w(H), v();
    }
  }, N = U0(), O = B(N);
  return qe(O, w), Z(N), ft(N, (H, K) => J0?.(H, K), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: b,
    onDraggingChange: (H) => {
      n(n().dragging = H, !0);
    },
    setPanZoomInstance: (H) => {
      n(n().panZoom = H, !0);
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
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), L(e, N), ue(P);
}
se(
  Ic,
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
function hl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function gl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function vl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var G0 = /* @__PURE__ */ ee("<div><!></div>");
function Zc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, f = null, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ E(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ E(() => n().selectionKeyPressed || n().selectionRect || o() && c(g) !== !0), w = /* @__PURE__ */ E(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), C = !1;
  function $(S) {
    if (C || n().connection.inProgress) {
      C = !1;
      return;
    }
    i()?.({ event: S }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function b(S) {
    if (f = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || S.button !== 0 || S.target !== d || !f)
      return;
    S.target?.setPointerCapture?.(S.pointerId);
    const { x, y: T } = Yt(S, f);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: x, startY: T, x, y: T }, !0), a()?.(S);
  }
  function _(S) {
    if (!c(y) || !f || !n().selectionRect)
      return;
    C = !0;
    const x = Yt(S, f), { startX: T = 0, startY: M = 0 } = n().selectionRect, I = {
      ...n().selectionRect,
      x: x.x < T ? x.x : T,
      y: x.y < M ? x.y : M,
      width: Math.abs(x.x - T),
      height: Math.abs(x.y - M)
    }, R = p, j = h;
    p = new Set(Qs(
      n().nodeLookup,
      I,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === si.Partial,
      !0
    ).map((W) => W.id));
    const V = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const W of p) {
      const q = n().connectionLookup.get(W);
      if (q)
        for (const { edgeId: G } of q.values()) {
          const D = n().edgeLookup.get(G);
          D && (D.selectable ?? V) && h.add(G);
        }
    }
    vl(R, p) || n(n().nodes = n().nodes.map(gl(p)), !0), vl(j, h) || n(n().edges = n().edges.map(gl(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = I, !0);
  }
  function P(S) {
    S.button === 0 && (S.target?.releasePointerCapture?.(S.pointerId), !c(y) && n().selectionRectMode === "user" && S.target === d && $?.(S), n(n().selectionRect = null, !0), p.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (C = !1), l()?.(S));
  }
  const N = (S) => {
    if (Array.isArray(c(g)) && c(g).includes(2)) {
      S.preventDefault();
      return;
    }
    s()?.({ event: S });
  };
  var O = {
    get store() {
      return n();
    },
    set store(S) {
      n(S), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(S = !0) {
      r(S), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(S) {
      o(S), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(S) {
      i(S), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(S) {
      s(S), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(S) {
      a(S), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(S) {
      l(S), v();
    },
    get children() {
      return u();
    },
    set children(S) {
      u(S), v();
    }
  }, H = G0();
  let K;
  var F = /* @__PURE__ */ E(() => c(w) ? void 0 : hl($, d));
  H.__click = function(...S) {
    c(F)?.apply(this, S);
  }, H.__pointerdown = function(...S) {
    (c(w) ? b : void 0)?.apply(this, S);
  }, H.__pointermove = function(...S) {
    (c(w) ? _ : void 0)?.apply(this, S);
  }, H.__pointerup = function(...S) {
    (c(w) ? P : void 0)?.apply(this, S);
  };
  var A = /* @__PURE__ */ E(() => hl(N, d));
  H.__contextmenu = function(...S) {
    c(A)?.apply(this, S);
  };
  var k = B(H);
  return qe(k, u), Z(H), Lt(H, (S) => d = S, () => d), $e((S) => K = Nt(H, 1, "svelte-flow__pane svelte-flow__container", null, K, S), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), L(e, H), ue(O);
}
Yn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
se(
  Zc,
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
var Q0 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Bc(e, t) {
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
  }, i = Q0();
  let s;
  var a = B(i);
  return qe(a, r), Z(i), $e((l) => s = pt(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), L(e, i), ue(o);
}
se(Bc, { store: {}, children: {} }, [], [], !0);
function Rc(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = y0({
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
var em = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-h8i2bw"> </div>'), tm = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-h8i2bw"> </div> <div class="a11y-hidden svelte-h8i2bw"> </div> <!>', 1);
const nm = {
  hash: "svelte-h8i2bw",
  code: ".a11y-hidden.svelte-h8i2bw {display:none;}.a11y-live-msg.svelte-h8i2bw {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Kc(e, t) {
  le(t, !0), ze(e, nm);
  let n = m(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    }
  }, o = tm(), i = oe(o), s = B(i, !0);
  Z(i);
  var a = z(i, 2), l = B(a, !0);
  Z(a);
  var u = z(a, 2);
  {
    var d = (f) => {
      var p = em(), h = B(p, !0);
      Z(p), $e(() => {
        be(p, "id", `${rm}-${n().flowId}`), Re(h, n().ariaLiveMessage);
      }), L(f, p);
    };
    ae(u, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return $e(() => {
    be(i, "id", `${jc}-${n().flowId}`), Re(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), be(a, "id", `${Yc}-${n().flowId}`), Re(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), L(e, o), ue(r);
}
se(Kc, { store: {} }, [], [], !0);
const jc = "svelte-flow__node-desc", Yc = "svelte-flow__edge-desc", rm = "svelte-flow__aria-live";
var om = /* @__PURE__ */ ee("<div><!></div>");
function Xc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), f = m(t, "onnodepointerleave", 7), p = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), g = /* @__PURE__ */ E(() => mt(r().data, () => ({}), !0)), y = /* @__PURE__ */ E(() => mt(r().selected, !1)), w = /* @__PURE__ */ E(() => r().draggable), C = /* @__PURE__ */ E(() => r().selectable), $ = /* @__PURE__ */ E(() => mt(r().deletable, !0)), b = /* @__PURE__ */ E(() => r().connectable), _ = /* @__PURE__ */ E(() => r().focusable), P = /* @__PURE__ */ E(() => mt(r().hidden, !1)), N = /* @__PURE__ */ E(() => mt(r().dragging, !1)), O = /* @__PURE__ */ E(() => mt(r().style, "")), H = /* @__PURE__ */ E(() => r().class), K = /* @__PURE__ */ E(() => mt(r().type, "default")), F = /* @__PURE__ */ E(() => r().parentId), A = /* @__PURE__ */ E(() => r().sourcePosition), k = /* @__PURE__ */ E(() => r().targetPosition), S = /* @__PURE__ */ E(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ E(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).height), T = /* @__PURE__ */ E(() => r().initialWidth), M = /* @__PURE__ */ E(() => r().initialHeight), I = /* @__PURE__ */ E(() => r().width), R = /* @__PURE__ */ E(() => r().height), j = /* @__PURE__ */ E(() => r().dragHandle), V = /* @__PURE__ */ E(() => mt(r().internals.z, 0)), W = /* @__PURE__ */ E(() => r().internals.positionAbsolute.x), q = /* @__PURE__ */ E(() => r().internals.positionAbsolute.y), G = /* @__PURE__ */ E(() => r().internals.userNode), { id: D } = r(), X = /* @__PURE__ */ E(() => c(w) ?? n().nodesDraggable), J = /* @__PURE__ */ E(() => c(C) ?? n().elementsSelectable), te = /* @__PURE__ */ E(() => c(b) ?? n().nodesConnectable), ne = /* @__PURE__ */ E(() => dc(r())), Q = /* @__PURE__ */ E(() => !!r().internals.handleBounds), fe = /* @__PURE__ */ E(() => c(ne) && c(Q)), ce = /* @__PURE__ */ E(() => c(_) ?? n().nodesFocusable);
  function re(ge) {
    return n().parentLookup.has(ge);
  }
  let ie = /* @__PURE__ */ E(() => re(D)), pe = /* @__PURE__ */ Ee(null), ve = null, xe = c(K), de = c(A), Ce = c(k), Pe = /* @__PURE__ */ E(() => n().nodeTypes[c(K)] ?? ia), Y = /* @__PURE__ */ E(() => n().ariaLabelConfig);
  Sr("svelteflow__node_connectable", {
    get value() {
      return c(te);
    }
  }), Sr("svelteflow__node_id", D);
  let Ae = /* @__PURE__ */ E(() => {
    const ge = c(S) === void 0 ? c(I) ?? c(T) : c(I), Be = c(x) === void 0 ? c(R) ?? c(M) : c(R);
    if (!(ge === void 0 && Be === void 0 && c(O) === void 0))
      return `${c(O)};${ge ? `width:${un(ge)};` : ""}${Be ? `height:${un(Be)};` : ""}`;
  });
  Xe(() => {
    (c(K) !== xe || c(A) !== de || c(k) !== Ce) && c(pe) !== null && requestAnimationFrame(() => {
      c(pe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[D, { id: D, nodeElement: c(pe), force: !0 }]]));
    }), xe = c(K), de = c(A), Ce = c(k);
  }), Xe(() => {
    o() && (!c(fe) || c(pe) !== ve) && (ve && o().unobserve(ve), c(pe) && o().observe(c(pe)), ve = c(pe));
  }), yo(() => {
    ve && o()?.unobserve(ve);
  });
  function Ve(ge) {
    c(J) && (!n().selectNodesOnDrag || !c(X) || n().nodeDragThreshold > 0) && n().handleNodeSelection(D), s()?.({ node: c(G), event: ge });
  }
  function He(ge) {
    if (!(hc(ge) || n().disableKeyboardA11y))
      if (ic.includes(ge.key) && c(J)) {
        const Be = ge.key === "Escape";
        n().handleNodeSelection(D, Be, c(pe));
      } else c(X) && r().selected && Object.prototype.hasOwnProperty.call(ui, ge.key) && (ge.preventDefault(), n(
        n().ariaLiveMessage = c(Y)["node.a11yDescription.ariaLiveMessage"]({
          direction: ge.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(ui[ge.key], ge.shiftKey ? 4 : 1));
  }
  const Ze = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(pe)?.matches(":focus-visible"))
      return;
    const { width: ge, height: Be, viewport: vt } = n();
    Qs(/* @__PURE__ */ new Map([[D, r()]]), { x: 0, y: 0, width: ge, height: Be }, [vt.x, vt.y, vt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: vt.zoom });
  };
  var tt = {
    get store() {
      return n();
    },
    set store(ge) {
      n(ge), v();
    },
    get node() {
      return r();
    },
    set node(ge) {
      r(ge), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ge) {
      o(ge), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ge) {
      i(ge), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ge) {
      s(ge), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ge) {
      a(ge), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ge) {
      l(ge), v();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ge) {
      u(ge), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ge) {
      d(ge), v();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(ge) {
      f(ge), v();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(ge) {
      p(ge), v();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(ge) {
      h(ge), v();
    }
  }, Et = Ne(), We = oe(Et);
  {
    var Ie = (ge) => {
      var Be = om();
      et(
        Be,
        (Je, xt) => ({
          "data-id": D,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(K)}`,
            c(H)
          ],
          style: c(Ae),
          onclick: Ve,
          onpointerenter: d() ? (st) => d()({ node: c(G), event: st }) : void 0,
          onpointerleave: f() ? (st) => f()({ node: c(G), event: st }) : void 0,
          onpointermove: p() ? (st) => p()({ node: c(G), event: st }) : void 0,
          oncontextmenu: h() ? (st) => h()({ node: c(G), event: st }) : void 0,
          onkeydown: c(ce) ? He : void 0,
          onfocus: c(ce) ? Ze : void 0,
          tabIndex: c(ce) ? 0 : void 0,
          role: r().ariaRole ?? (c(ce) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${jc}-${n().flowId}`,
          ...r().domAttributes,
          [Mn]: Je,
          [rn]: xt
        }),
        [
          () => ({
            dragging: c(N),
            selected: c(y),
            draggable: c(X),
            connectable: c(te),
            selectable: c(J),
            nopan: c(X),
            parent: c(ie)
          }),
          () => ({
            "z-index": c(V),
            transform: `translate(${c(W) ?? ""}px, ${c(q) ?? ""}px)`,
            visibility: c(ne) ? "visible" : "hidden"
          })
        ]
      );
      var vt = B(Be);
      xi(vt, () => c(Pe), (Je, xt) => {
        xt(Je, {
          get data() {
            return c(g);
          },
          get id() {
            return D;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(J);
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
            return c(N);
          },
          get draggable() {
            return c(X);
          },
          get dragHandle() {
            return c(j);
          },
          get parentId() {
            return c(F);
          },
          get type() {
            return c(K);
          },
          get isConnectable() {
            return c(te);
          },
          get positionAbsoluteX() {
            return c(W);
          },
          get positionAbsoluteY() {
            return c(q);
          },
          get width() {
            return c(I);
          },
          get height() {
            return c(R);
          }
        });
      }), Z(Be), ft(Be, (Je, xt) => Rc?.(Je, xt), () => ({
        nodeId: D,
        isSelectable: c(J),
        disabled: !c(X),
        handleSelector: c(j),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Je, xt, st, at) => {
          a()?.({ event: Je, targetNode: st, nodes: at });
        },
        onDragStart: (Je, xt, st, at) => {
          l()?.({ event: Je, targetNode: st, nodes: at });
        },
        onDragStop: (Je, xt, st, at) => {
          u()?.({ event: Je, targetNode: st, nodes: at });
        },
        store: n()
      })), Lt(Be, (Je) => U(pe, Je), () => c(pe)), L(ge, Be);
    };
    ae(We, (ge) => {
      c(P) || ge(Ie);
    });
  }
  return L(e, Et), ue(tt);
}
se(
  Xc,
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
var im = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function qc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), f = m(t, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((C) => {
      const $ = C.target.getAttribute("data-id");
      w.set($, { id: $, nodeElement: C.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  yo(() => {
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
  }, g = im();
  return gt(g, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    Xc(y, {
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
  }), Z(g), L(e, g), ue(h);
}
se(
  qc,
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
var sm = /* @__PURE__ */ he('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Fc(e, t) {
  le(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ E(() => n().source), u = /* @__PURE__ */ E(() => n().target), d = /* @__PURE__ */ E(() => n().sourceX), f = /* @__PURE__ */ E(() => n().sourceY), p = /* @__PURE__ */ E(() => n().targetX), h = /* @__PURE__ */ E(() => n().targetY), g = /* @__PURE__ */ E(() => n().sourcePosition), y = /* @__PURE__ */ E(() => n().targetPosition), w = /* @__PURE__ */ E(() => mt(n().animated, !1)), C = /* @__PURE__ */ E(() => mt(n().selected, !1)), $ = /* @__PURE__ */ E(() => n().label), b = /* @__PURE__ */ E(() => n().labelStyle), _ = /* @__PURE__ */ E(() => mt(n().data, () => ({}), !0)), P = /* @__PURE__ */ E(() => n().style), N = /* @__PURE__ */ E(() => n().interactionWidth), O = /* @__PURE__ */ E(() => mt(n().type, "default")), H = /* @__PURE__ */ E(() => n().sourceHandle), K = /* @__PURE__ */ E(() => n().targetHandle), F = /* @__PURE__ */ E(() => n().markerStart), A = /* @__PURE__ */ E(() => n().markerEnd), k = /* @__PURE__ */ E(() => n().selectable), S = /* @__PURE__ */ E(() => n().focusable), x = /* @__PURE__ */ E(() => mt(n().deletable, !0)), T = /* @__PURE__ */ E(() => n().hidden), M = /* @__PURE__ */ E(() => n().zIndex), I = /* @__PURE__ */ E(() => n().class), R = /* @__PURE__ */ E(() => n().ariaLabel), j = null;
  const { id: V } = n();
  Sr("svelteflow__edge_id", V);
  let W = /* @__PURE__ */ E(() => c(k) ?? r().elementsSelectable), q = /* @__PURE__ */ E(() => c(S) ?? r().edgesFocusable), G = /* @__PURE__ */ E(() => r().edgeTypes[c(O)] ?? sa), D = /* @__PURE__ */ E(() => c(F) ? `url('#${vs(c(F), r().flowId)}')` : void 0), X = /* @__PURE__ */ E(() => c(A) ? `url('#${vs(c(A), r().flowId)}')` : void 0);
  function J(ie) {
    const pe = r().edgeLookup.get(V);
    pe && (c(W) && r().handleEdgeSelection(V), o()?.({ event: ie, edge: pe }));
  }
  function te(ie, pe) {
    const ve = r().edgeLookup.get(V);
    ve && pe({ event: ie, edge: ve });
  }
  function ne(ie) {
    if (!r().disableKeyboardA11y && ic.includes(ie.key) && c(W)) {
      const { unselectNodesAndEdges: pe, addSelectedEdges: ve } = r();
      ie.key === "Escape" ? (j?.blur(), pe({ edges: [n()] })) : ve([V]);
    }
  }
  var Q = {
    get edge() {
      return n();
    },
    set edge(ie) {
      n(ie), v();
    },
    get store() {
      return r();
    },
    set store(ie) {
      r(ie), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ie) {
      o(ie), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ie) {
      i(ie), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ie) {
      s(ie), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ie) {
      a(ie), v();
    }
  }, fe = Ne(), ce = oe(fe);
  {
    var re = (ie) => {
      var pe = sm();
      let ve;
      var xe = B(pe);
      et(
        xe,
        (Ce) => ({
          class: ["svelte-flow__edge", c(I)],
          "data-id": V,
          onclick: J,
          oncontextmenu: i() ? (Pe) => {
            te(Pe, i());
          } : void 0,
          onpointerenter: s() ? (Pe) => {
            te(Pe, s());
          } : void 0,
          onpointerleave: a() ? (Pe) => {
            te(Pe, a());
          } : void 0,
          "aria-label": c(R) === null ? void 0 : c(R) ? c(R) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(q) ? `${Yc}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(q) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(q) ? ne : void 0,
          tabindex: c(q) ? 0 : void 0,
          ...n().domAttributes,
          [Mn]: Ce
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
      xi(de, () => c(G), (Ce, Pe) => {
        Pe(Ce, {
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
            return c(P);
          },
          get interactionWidth() {
            return c(N);
          },
          get selectable() {
            return c(W);
          },
          get deletable() {
            return c(x);
          },
          get type() {
            return c(O);
          },
          get sourceHandleId() {
            return c(H);
          },
          get targetHandleId() {
            return c(K);
          },
          get markerStart() {
            return c(D);
          },
          get markerEnd() {
            return c(X);
          }
        });
      }), Z(xe), Lt(xe, (Ce) => j = Ce, () => j), Z(pe), $e((Ce) => ve = pt(pe, "", ve, Ce), [() => ({ "z-index": c(M) })]), L(ie, pe);
    };
    ae(ce, (ie) => {
      c(T) || ie(re);
    });
  }
  return L(e, fe), ue(Q);
}
se(
  Fc,
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
Kp();
var am = /* @__PURE__ */ he("<defs></defs>");
function Wc(e, t) {
  le(t, !1);
  const n = Gt();
  Nu();
  var r = am();
  gt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Jc(o, Ke(() => c(i)));
  }), Z(r), L(e, r), ue();
}
se(Wc, {}, [], [], !0);
var lm = /* @__PURE__ */ he('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), um = /* @__PURE__ */ he('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), cm = /* @__PURE__ */ he('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Jc(e, t) {
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
  }, f = cm(), p = B(f);
  {
    var h = (y) => {
      var w = lm();
      let C;
      $e(
        ($) => {
          be(w, "stroke-width", u()), C = pt(w, "", C, $);
        },
        [() => ({ stroke: l() })]
      ), L(y, w);
    }, g = (y) => {
      var w = Ne(), C = oe(w);
      {
        var $ = (b) => {
          var _ = um();
          let P;
          $e(
            (N) => {
              be(_, "stroke-width", u()), P = pt(_, "", P, N);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), L(b, _);
        };
        ae(
          C,
          (b) => {
            r() === io.ArrowClosed && b($);
          },
          !0
        );
      }
      L(y, w);
    };
    ae(p, (y) => {
      r() === io.Arrow ? y(h) : y(g, !1);
    });
  }
  return Z(f), $e(() => {
    be(f, "id", n()), be(f, "markerWidth", `${o()}`), be(f, "markerHeight", `${i()}`), be(f, "markerUnits", s()), be(f, "orient", a());
  }), L(e, f), ue(d);
}
se(
  Jc,
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
var dm = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Uc(e, t) {
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
  }, l = dm(), u = B(l), d = B(u);
  Wc(d, {}), Z(u);
  var f = z(u, 2);
  return gt(f, 17, () => n().visible.edges.values(), (p) => p.id, (p, h) => {
    Fc(p, {
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
  }), Z(l), L(e, l), ue(a);
}
se(
  Uc,
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
var pm = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-eplraw"></div>');
const fm = {
  hash: "svelte-eplraw",
  code: ".svelte-flow__selection.svelte-eplraw {position:absolute;top:0;left:0;}"
};
function aa(e, t) {
  le(t, !0), ze(e, fm);
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
  }, l = Ne(), u = oe(l);
  {
    var d = (f) => {
      var p = pm();
      let h;
      $e((g) => h = pt(p, "", h, g), [
        () => ({
          width: typeof o() == "string" ? o() : un(o()),
          height: typeof i() == "string" ? i() : un(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), L(f, p);
    };
    ae(u, (f) => {
      s() && f(d);
    });
  }
  return L(e, l), ue(a);
}
se(aa, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function hm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function gm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var vm = /* @__PURE__ */ ee("<div><!></div>");
const mm = {
  hash: "svelte-jl8ebg",
  code: ".svelte-flow__selection-wrapper.svelte-jl8ebg {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Gc(e, t) {
  le(t, !0), ze(e, mm);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ee(void 0);
  Xe(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ E(() => n().selectionRectMode === "nodes" ? (n().nodes, Co(n().nodeLookup, { filter: (y) => !!y.selected })) : null);
  function d(y) {
    Object.prototype.hasOwnProperty.call(ui, y.key) && (y.preventDefault(), n().moveSelectedNodes(ui[y.key], y.shiftKey ? 4 : 1));
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
  }, p = Ne(), h = oe(p);
  {
    var g = (y) => {
      var w = vm();
      w.__contextmenu = [hm, n, a], w.__click = [gm, n, s], w.__keydown = function(...b) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, b);
      };
      let C;
      var $ = B(w);
      aa($, { width: "100%", height: "100%", x: 0, y: 0 }), Z(w), ft(w, (b, _) => Rc?.(b, _), () => ({
        disabled: !1,
        store: n(),
        onDrag: (b, _, P, N) => {
          r()?.({ event: b, targetNode: null, nodes: N });
        },
        onDragStart: (b, _, P, N) => {
          o()?.({ event: b, targetNode: null, nodes: N });
        },
        onDragStop: (b, _, P, N) => {
          i()?.({ event: b, targetNode: null, nodes: N });
        }
      })), Lt(w, (b) => U(l, b), () => c(l)), $e(
        (b) => {
          Nt(w, 1, kn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-jl8ebg"), be(w, "role", n().disableKeyboardA11y ? void 0 : "button"), be(w, "tabindex", n().disableKeyboardA11y ? void 0 : -1), C = pt(w, "", C, b);
        },
        [
          () => ({
            width: un(c(u).width),
            height: un(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), L(y, w);
    };
    ae(h, (y) => {
      n().selectionRectMode === "nodes" && c(u) && gn(c(u).x) && gn(c(u).y) && y(g);
    });
  }
  return L(e, p), ue(f);
}
Yn(["contextmenu", "click", "keydown"]);
se(
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
function ym(e) {
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
              (P, N) => P | ym(N),
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
function it() {
  const e = /* @__PURE__ */ E(Gt), t = (i) => {
    const s = pl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? jv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return zr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = ut(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && pl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = ut(() => c(e).edges).map((l) => {
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
    getNodes: (i) => i === void 0 ? c(e).nodes : ml(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : ml(c(e).edgeLookup, i),
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
    getViewport: () => Il(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = ea(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
      const l = el(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const f = c(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const p = zr(f), h = so(p, u);
        return s && h > 0 || h >= p.width * p.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = el(i) ? i : t(i);
      if (!l)
        return !1;
      const u = so(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Zv({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = ut(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = ut(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: f, y: p } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - f, y: i.y - p };
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
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), f = li(i, [s, a, l]);
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
    getNodesBounds: (i) => zv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function ml(e, t) {
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
function Qc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => Un() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => Un() ? "Meta" : "Control"), { deleteElements: l } = it();
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
    set multiSelectionKey(w = Un() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Un() ? "Meta" : "Control") {
      a(w), v();
    }
  };
  return $a("blur", Ct, h), $a("contextmenu", Ct, h), ft(Ct, (w, C) => en?.(w, C), () => ({
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
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !hc(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), g());
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
se(
  Qc,
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
var wm = /* @__PURE__ */ he('<path fill="none" class="svelte-flow__connection-path"></path>'), bm = /* @__PURE__ */ he('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function ed(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ E(() => {
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
        const [h] = vc(p);
        return h;
      }
      case fn.Straight: {
        const [h] = yc(p);
        return h;
      }
      case fn.Step:
      case fn.SmoothStep: {
        const [h] = ta({
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
  }, u = Ne(), d = oe(u);
  {
    var f = (p) => {
      var h = bm(), g = B(h), y = B(g);
      {
        var w = ($) => {
          var b = Ne(), _ = oe(b);
          xi(_, s, (P, N) => {
            N(P, {});
          }), L($, b);
        }, C = ($) => {
          var b = wm();
          $e(() => {
            be(b, "d", c(a)), pt(b, i());
          }), L($, b);
        };
        ae(y, ($) => {
          s() ? $(w) : $(C, !1);
        });
      }
      Z(g), Z(h), $e(
        ($) => {
          be(h, "width", n().width), be(h, "height", n().height), pt(h, o()), Nt(g, 0, $);
        },
        [
          () => kn([
            "svelte-flow__connection",
            Vv(n().connection.isValid)
          ])
        ]
      ), L(p, h);
    };
    ae(d, (p) => {
      n().connection.inProgress && p(f);
    });
  }
  return L(e, u), ue(l);
}
se(
  ed,
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
var xm = /* @__PURE__ */ ee("<div><!></div>");
function So(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ De(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ E(() => `${n()}`.split("-"));
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
  }, u = xm();
  et(u, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = B(u);
  return qe(d, () => i() ?? dt), Z(u), L(e, u), ue(l);
}
se(So, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Cm = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function td(e, t) {
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
  }, i = Ne(), s = oe(i);
  {
    var a = (l) => {
      So(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var f = Cm();
          L(u, f);
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
se(td, { proOptions: {}, position: {} }, [], [], !0);
var $m = /* @__PURE__ */ ee("<div><!></div>");
const km = {
  hash: "svelte-1q89zv",
  code: ".svelte-flow.svelte-1q89zv {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function nd(e, t) {
  le(t, !0), ze(e, km);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ E(() => u().class), f = /* @__PURE__ */ E(() => yf(u(), [
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
  }, g = $m();
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
  return qe(y, () => l() ?? dt), Z(g), Lt(g, (w) => i(w), () => i()), Ma(g, "clientHeight", a), Ma(g, "clientWidth", s), L(e, g), ue(h);
}
se(
  nd,
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
var _m = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Sm = /* @__PURE__ */ ee("<!> <!>", 1), Nm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function rd(e, t) {
  le(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), f = m(t, "nodeClickDistance", 7, 1), p = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), g = m(t, "onmove", 7), y = m(t, "oninit", 7), w = m(t, "onnodeclick", 7), C = m(t, "onnodecontextmenu", 7), $ = m(t, "onnodedrag", 7), b = m(t, "onnodedragstart", 7), _ = m(t, "onnodedragstop", 7), P = m(t, "onnodepointerenter", 7), N = m(t, "onnodepointermove", 7), O = m(t, "onnodepointerleave", 7), H = m(t, "onselectionclick", 7), K = m(t, "onselectioncontextmenu", 7), F = m(t, "onselectionstart", 7), A = m(t, "onselectionend", 7), k = m(t, "onedgeclick", 7), S = m(t, "onedgecontextmenu", 7), x = m(t, "onedgepointerenter", 7), T = m(t, "onedgepointerleave", 7), M = m(t, "onpaneclick", 7), I = m(t, "onpanecontextmenu", 7), R = m(t, "panOnScrollMode", 23, () => nr.Free), j = m(t, "preventScrolling", 7, !0), V = m(t, "zoomOnScroll", 7, !0), W = m(t, "zoomOnDoubleClick", 7, !0), q = m(t, "zoomOnPinch", 7, !0), G = m(t, "panOnScroll", 7, !1), D = m(t, "panOnScrollSpeed", 7, 0.5), X = m(t, "panOnDrag", 7, !0), J = m(t, "selectionOnDrag", 7, !0), te = m(t, "connectionLineComponent", 7), ne = m(t, "connectionLineStyle", 7), Q = m(t, "connectionLineContainerStyle", 7), fe = m(t, "connectionLineType", 23, () => fn.Bezier), ce = m(t, "attributionPosition", 7), re = m(t, "children", 7), ie = m(t, "nodes", 31, () => zt([])), pe = m(t, "edges", 31, () => zt([])), ve = m(t, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ De(t, [
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
  ]), de = Ac({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return ie();
    },
    set nodes(Y) {
      ie(Y);
    },
    get edges() {
      return pe();
    },
    set edges(Y) {
      pe(Y);
    },
    get viewport() {
      return ve();
    },
    set viewport(Y) {
      ve(Y);
    }
  });
  const Ce = Dn(ci);
  Ce && Ce.setStore && Ce.setStore(de), Sr(ci, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Xe(() => {
    const Y = { nodes: de.selectedNodes, edges: de.selectedEdges };
    ut(() => t.onselectionchange)?.(Y);
    for (const Ae of de.selectionChangeHandlers.values())
      Ae(Y);
  }), yo(() => {
    de.reset();
  });
  var Pe = {
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
      return P();
    },
    set onnodepointerenter(Y) {
      P(Y), v();
    },
    get onnodepointermove() {
      return N();
    },
    set onnodepointermove(Y) {
      N(Y), v();
    },
    get onnodepointerleave() {
      return O();
    },
    set onnodepointerleave(Y) {
      O(Y), v();
    },
    get onselectionclick() {
      return H();
    },
    set onselectionclick(Y) {
      H(Y), v();
    },
    get onselectioncontextmenu() {
      return K();
    },
    set onselectioncontextmenu(Y) {
      K(Y), v();
    },
    get onselectionstart() {
      return F();
    },
    set onselectionstart(Y) {
      F(Y), v();
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
      return S();
    },
    set onedgecontextmenu(Y) {
      S(Y), v();
    },
    get onedgepointerenter() {
      return x();
    },
    set onedgepointerenter(Y) {
      x(Y), v();
    },
    get onedgepointerleave() {
      return T();
    },
    set onedgepointerleave(Y) {
      T(Y), v();
    },
    get onpaneclick() {
      return M();
    },
    set onpaneclick(Y) {
      M(Y), v();
    },
    get onpanecontextmenu() {
      return I();
    },
    set onpanecontextmenu(Y) {
      I(Y), v();
    },
    get panOnScrollMode() {
      return R();
    },
    set panOnScrollMode(Y = nr.Free) {
      R(Y), v();
    },
    get preventScrolling() {
      return j();
    },
    set preventScrolling(Y = !0) {
      j(Y), v();
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
      return q();
    },
    set zoomOnPinch(Y = !0) {
      q(Y), v();
    },
    get panOnScroll() {
      return G();
    },
    set panOnScroll(Y = !1) {
      G(Y), v();
    },
    get panOnScrollSpeed() {
      return D();
    },
    set panOnScrollSpeed(Y = 0.5) {
      D(Y), v();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(Y = !0) {
      X(Y), v();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(Y = !0) {
      J(Y), v();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(Y) {
      te(Y), v();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(Y) {
      ne(Y), v();
    },
    get connectionLineContainerStyle() {
      return Q();
    },
    set connectionLineContainerStyle(Y) {
      Q(Y), v();
    },
    get connectionLineType() {
      return fe();
    },
    set connectionLineType(Y = fn.Bezier) {
      fe(Y), v();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(Y) {
      ce(Y), v();
    },
    get children() {
      return re();
    },
    set children(Y) {
      re(Y), v();
    },
    get nodes() {
      return ie();
    },
    set nodes(Y = []) {
      ie(Y), v();
    },
    get edges() {
      return pe();
    },
    set edges(Y = []) {
      pe(Y), v();
    },
    get viewport() {
      return ve();
    },
    set viewport(Y = void 0) {
      ve(Y), v();
    }
  };
  return nd(e, {
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
    children: (Y, Ae) => {
      var Ve = Nm(), He = oe(Ve);
      Qc(He, {
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
        set store(Ie) {
          de = Ie;
        }
      });
      var Ze = z(He, 2);
      Ic(Ze, {
        get panOnScrollMode() {
          return R();
        },
        get preventScrolling() {
          return j();
        },
        get zoomOnScroll() {
          return V();
        },
        get zoomOnDoubleClick() {
          return W();
        },
        get zoomOnPinch() {
          return q();
        },
        get panOnScroll() {
          return G();
        },
        get panOnScrollSpeed() {
          return D();
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
        set store(Ie) {
          de = Ie;
        },
        children: (Ie, ge) => {
          Zc(Ie, {
            get onpaneclick() {
              return M();
            },
            get onpanecontextmenu() {
              return I();
            },
            get onselectionstart() {
              return F();
            },
            get onselectionend() {
              return A();
            },
            get panOnDrag() {
              return X();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return de;
            },
            set store(Be) {
              de = Be;
            },
            children: (Be, vt) => {
              var Je = Sm(), xt = oe(Je);
              Bc(xt, {
                get store() {
                  return de;
                },
                set store(at) {
                  de = at;
                },
                children: (at, En) => {
                  var Pn = _m(), To = z(oe(Pn), 2);
                  Uc(To, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return S();
                    },
                    get onedgepointerenter() {
                      return x();
                    },
                    get onedgepointerleave() {
                      return T();
                    },
                    get store() {
                      return de;
                    },
                    set store(Fn) {
                      de = Fn;
                    }
                  });
                  var Lo = z(To, 4);
                  ed(Lo, {
                    get type() {
                      return fe();
                    },
                    get LineComponent() {
                      return te();
                    },
                    get containerStyle() {
                      return Q();
                    },
                    get style() {
                      return ne();
                    },
                    get store() {
                      return de;
                    },
                    set store(Fn) {
                      de = Fn;
                    }
                  });
                  var fa = z(Lo, 2);
                  qc(fa, {
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
                      return P();
                    },
                    get onnodepointermove() {
                      return N();
                    },
                    get onnodepointerleave() {
                      return O();
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
                    set store(Fn) {
                      de = Fn;
                    }
                  });
                  var tp = z(fa, 2);
                  Gc(tp, {
                    get onselectionclick() {
                      return H();
                    },
                    get onselectioncontextmenu() {
                      return K();
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
                    set store(Fn) {
                      de = Fn;
                    }
                  }), me(2), L(at, Pn);
                },
                $$slots: { default: !0 }
              });
              var st = z(xt, 2);
              {
                let at = /* @__PURE__ */ E(() => !!(de.selectionRect && de.selectionRectMode === "user")), En = /* @__PURE__ */ E(() => de.selectionRect?.width), Pn = /* @__PURE__ */ E(() => de.selectionRect?.height), To = /* @__PURE__ */ E(() => de.selectionRect?.x), Lo = /* @__PURE__ */ E(() => de.selectionRect?.y);
                aa(st, {
                  get isVisible() {
                    return c(at);
                  },
                  get width() {
                    return c(En);
                  },
                  get height() {
                    return c(Pn);
                  },
                  get x() {
                    return c(To);
                  },
                  get y() {
                    return c(Lo);
                  }
                });
              }
              L(Be, Je);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var tt = z(Ze, 2);
      td(tt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var Et = z(tt, 2);
      Kc(Et, {
        get store() {
          return de;
        }
      });
      var We = z(Et, 2);
      qe(We, () => re() ?? dt), L(Y, Ve);
    },
    $$slots: { default: !0 }
  }), ue(Pe);
}
se(
  rd,
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
function od(e, t) {
  le(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ee(Ac({ props: {}, nodes: [], edges: [] }));
  Sr(ci, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      U(r, a);
    }
  }), yo(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    }
  }, i = Ne(), s = oe(i);
  return qe(s, () => n() ?? dt), L(e, i), ue(o);
}
se(od, { children: {} }, [], [], !0);
var Em = /* @__PURE__ */ ee("<button><!></button>");
function Wr(e, t) {
  le(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ De(t, [
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
  }, p = Em();
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
  return qe(h, () => u() ?? dt), Z(p), L(e, p), ue(f);
}
se(
  Wr,
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
var Pm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function id(e) {
  var t = Pm();
  L(e, t);
}
se(id, {}, [], [], !0);
var Mm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function sd(e) {
  var t = Mm();
  L(e, t);
}
se(sd, {}, [], [], !0);
var Tm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function ad(e) {
  var t = Tm();
  L(e, t);
}
se(ad, {}, [], [], !0);
var Lm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ld(e) {
  var t = Lm();
  L(e, t);
}
se(ld, {}, [], [], !0);
var Om = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = Om();
  L(e, t);
}
se(ud, {}, [], [], !0);
var Vm = /* @__PURE__ */ ee("<!> <!>", 1), Hm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function cd(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), f = m(t, "buttonColor", 7), p = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), g = m(t, "fitViewOptions", 7), y = m(t, "children", 7), w = m(t, "before", 7), C = m(t, "after", 7), $ = /* @__PURE__ */ De(t, [
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
  ]), b = /* @__PURE__ */ E(Gt);
  const _ = {
    bgColor: u(),
    bgColorHover: d(),
    color: f(),
    colorHover: p(),
    borderColor: h()
  };
  let P = /* @__PURE__ */ E(() => c(b).nodesDraggable || c(b).nodesConnectable || c(b).elementsSelectable), N = /* @__PURE__ */ E(() => c(b).viewport.zoom <= c(b).minZoom), O = /* @__PURE__ */ E(() => c(b).viewport.zoom >= c(b).maxZoom), H = /* @__PURE__ */ E(() => c(b).ariaLabelConfig), K = /* @__PURE__ */ E(() => r() === "horizontal" ? "horizontal" : "vertical");
  const F = () => {
    c(b).zoomIn();
  }, A = () => {
    c(b).zoomOut();
  }, k = () => {
    c(b).fitView(g());
  }, S = () => {
    let T = !c(P);
    c(b).nodesDraggable = T, c(b).nodesConnectable = T, c(b).elementsSelectable = T;
  };
  var x = {
    get position() {
      return n();
    },
    set position(T = "bottom-left") {
      n(T), v();
    },
    get orientation() {
      return r();
    },
    set orientation(T = "vertical") {
      r(T), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(T = !0) {
      o(T), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(T = !0) {
      i(T), v();
    },
    get showLock() {
      return s();
    },
    set showLock(T = !0) {
      s(T), v();
    },
    get style() {
      return a();
    },
    set style(T) {
      a(T), v();
    },
    get class() {
      return l();
    },
    set class(T) {
      l(T), v();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(T) {
      u(T), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(T) {
      d(T), v();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(T) {
      f(T), v();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(T) {
      p(T), v();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(T) {
      h(T), v();
    },
    get fitViewOptions() {
      return g();
    },
    set fitViewOptions(T) {
      g(T), v();
    },
    get children() {
      return y();
    },
    set children(T) {
      y(T), v();
    },
    get before() {
      return w();
    },
    set before(T) {
      w(T), v();
    },
    get after() {
      return C();
    },
    set after(T) {
      C(T), v();
    }
  };
  {
    let T = /* @__PURE__ */ E(() => [
      "svelte-flow__controls",
      c(K),
      l()
    ]);
    So(e, Ke(
      {
        get class() {
          return c(T);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(H)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => $,
      {
        children: (M, I) => {
          var R = Hm(), j = oe(R);
          {
            var V = (ce) => {
              var re = Ne(), ie = oe(re);
              qe(ie, w), L(ce, re);
            };
            ae(j, (ce) => {
              w() && ce(V);
            });
          }
          var W = z(j, 2);
          {
            var q = (ce) => {
              var re = Vm(), ie = oe(re);
              Wr(ie, Ke(
                {
                  onclick: F,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(H)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(O);
                  }
                },
                () => _,
                {
                  children: (ve, xe) => {
                    id(ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var pe = z(ie, 2);
              Wr(pe, Ke(
                {
                  onclick: A,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(H)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(N);
                  }
                },
                () => _,
                {
                  children: (ve, xe) => {
                    sd(ve);
                  },
                  $$slots: { default: !0 }
                }
              )), L(ce, re);
            };
            ae(W, (ce) => {
              o() && ce(q);
            });
          }
          var G = z(W, 2);
          {
            var D = (ce) => {
              Wr(ce, Ke(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: k,
                  get title() {
                    return c(H)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.fitView.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (re, ie) => {
                    ad(re);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(G, (ce) => {
              i() && ce(D);
            });
          }
          var X = z(G, 2);
          {
            var J = (ce) => {
              Wr(ce, Ke(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: S,
                  get title() {
                    return c(H)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(H)["controls.interactive.ariaLabel"];
                  }
                },
                () => _,
                {
                  children: (re, ie) => {
                    var pe = Ne(), ve = oe(pe);
                    {
                      var xe = (Ce) => {
                        ud(Ce);
                      }, de = (Ce) => {
                        ld(Ce);
                      };
                      ae(ve, (Ce) => {
                        c(P) ? Ce(xe) : Ce(de, !1);
                      });
                    }
                    L(re, pe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(X, (ce) => {
              s() && ce(J);
            });
          }
          var te = z(X, 2);
          {
            var ne = (ce) => {
              var re = Ne(), ie = oe(re);
              qe(ie, y), L(ce, re);
            };
            ae(te, (ce) => {
              y() && ce(ne);
            });
          }
          var Q = z(te, 2);
          {
            var fe = (ce) => {
              var re = Ne(), ie = oe(re);
              qe(ie, C), L(ce, re);
            };
            ae(Q, (ce) => {
              C() && ce(fe);
            });
          }
          L(M, R);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(x);
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
var vn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(vn || (vn = {}));
var zm = /* @__PURE__ */ he("<circle></circle>");
function dd(e, t) {
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
  }, i = zm();
  return $e(() => {
    be(i, "cx", n()), be(i, "cy", n()), be(i, "r", n()), Nt(i, 0, kn(["svelte-flow__background-pattern", "dots", r()]));
  }), L(e, i), ue(o);
}
se(dd, { radius: {}, class: {} }, [], [], !0);
var Dm = /* @__PURE__ */ he("<path></path>");
function pd(e, t) {
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
  }, a = Dm();
  return $e(() => {
    be(a, "stroke-width", n()), be(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Nt(a, 0, kn(["svelte-flow__background-pattern", o(), i()]));
  }), L(e, a), ue(s);
}
se(pd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Am = {
  [vn.Dots]: 1,
  [vn.Lines]: 1,
  [vn.Cross]: 6
};
var Im = /* @__PURE__ */ he('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function fd(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => vn.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), f = /* @__PURE__ */ E(Gt), p = /* @__PURE__ */ E(() => r() === vn.Dots), h = /* @__PURE__ */ E(() => r() === vn.Cross), g = /* @__PURE__ */ E(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ E(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ E(() => [
    c(g)[0] * c(f).viewport.zoom || 1,
    c(g)[1] * c(f).viewport.zoom || 1
  ]), C = /* @__PURE__ */ E(() => (i() ?? Am[r()]) * c(f).viewport.zoom), $ = /* @__PURE__ */ E(() => c(h) ? [c(C), c(C)] : c(w)), b = /* @__PURE__ */ E(() => c(p) ? [c(C) / 2, c(C) / 2] : [
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
  }, P = Im();
  let N;
  var O = B(P), H = B(O);
  {
    var K = (k) => {
      {
        let S = /* @__PURE__ */ E(() => c(C) / 2);
        dd(k, {
          get radius() {
            return c(S);
          },
          get class() {
            return u();
          }
        });
      }
    }, F = (k) => {
      pd(k, {
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
    ae(H, (k) => {
      c(p) ? k(K) : k(F, !1);
    });
  }
  Z(O);
  var A = z(O);
  return Z(P), $e(
    (k) => {
      Nt(P, 0, kn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), N = pt(P, "", N, k), be(O, "id", c(y)), be(O, "x", c(f).viewport.x % c(w)[0]), be(O, "y", c(f).viewport.y % c(w)[1]), be(O, "width", c(w)[0]), be(O, "height", c(w)[1]), be(O, "patternTransform", `translate(-${c(b)[0]},-${c(b)[1]})`), be(A, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), L(e, P), ue(_);
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
var Zm = /* @__PURE__ */ he("<rect></rect>");
function hd(e, t) {
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
  }, y = Ne(), w = oe(y);
  {
    var C = (b) => {
      const _ = /* @__PURE__ */ E(h);
      var P = Ne(), N = oe(P);
      xi(N, () => c(_), (O, H) => {
        H(O, {
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
      }), L(b, P);
    }, $ = (b) => {
      var _ = Zm();
      let P, N;
      $e(
        (O, H) => {
          P = Nt(_, 0, kn(["svelte-flow__minimap-node", p()]), null, P, O), be(_, "x", n()), be(_, "y", r()), be(_, "rx", s()), be(_, "ry", s()), be(_, "width", o()), be(_, "height", i()), be(_, "shape-rendering", l()), N = pt(_, "", N, H);
        },
        [
          () => ({ selected: f() }),
          () => ({
            fill: a(),
            stroke: u(),
            "stroke-width": d()
          })
        ]
      ), L(b, _);
    };
    ae(w, (b) => {
      h() ? b(C) : b($, !1);
    });
  }
  return L(e, y), ue(g);
}
se(
  hd,
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
function Bm(e, t) {
  const n = k0({
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
var Rm = /* @__PURE__ */ he("<title> </title>"), Km = /* @__PURE__ */ he('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), jm = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function gd(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "nodeComponent", 7), d = m(t, "bgColor", 7), f = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), h = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), y = m(t, "height", 7, 150), w = m(t, "pannable", 7, !0), C = m(t, "zoomable", 7, !0), $ = m(t, "inversePan", 7), b = m(t, "zoomStep", 7), _ = m(t, "class", 7), P = /* @__PURE__ */ De(t, [
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
  ]), N = /* @__PURE__ */ E(Gt), O = /* @__PURE__ */ E(() => c(N).ariaLabelConfig);
  const H = i() === void 0 ? void 0 : Fi(i()), K = Fi(o()), F = Fi(s()), A = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let k = /* @__PURE__ */ E(() => `svelte-flow__minimap-desc-${c(N).flowId}`), S = /* @__PURE__ */ E(() => ({
    x: -c(N).viewport.x / c(N).viewport.zoom,
    y: -c(N).viewport.y / c(N).viewport.zoom,
    width: c(N).width / c(N).viewport.zoom,
    height: c(N).height / c(N).viewport.zoom
  })), x = /* @__PURE__ */ E(() => c(N).nodeLookup.size > 0 ? cc(Co(c(N).nodeLookup, { filter: (Q) => !Q.hidden }), c(S)) : c(S)), T = /* @__PURE__ */ E(() => c(x).width / g()), M = /* @__PURE__ */ E(() => c(x).height / y()), I = /* @__PURE__ */ E(() => Math.max(c(T), c(M))), R = /* @__PURE__ */ E(() => c(I) * g()), j = /* @__PURE__ */ E(() => c(I) * y()), V = /* @__PURE__ */ E(() => 5 * c(I)), W = /* @__PURE__ */ E(() => c(x).x - (c(R) - c(x).width) / 2 - c(V)), q = /* @__PURE__ */ E(() => c(x).y - (c(j) - c(x).height) / 2 - c(V)), G = /* @__PURE__ */ E(() => c(R) + c(V) * 2), D = /* @__PURE__ */ E(() => c(j) + c(V) * 2);
  const X = () => c(I);
  var J = {
    get position() {
      return n();
    },
    set position(Q = "bottom-right") {
      n(Q), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(Q) {
      r(Q), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(Q = "transparent") {
      o(Q), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(Q) {
      i(Q), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(Q = "") {
      s(Q), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(Q = 5) {
      a(Q), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(Q = 2) {
      l(Q), v();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(Q) {
      u(Q), v();
    },
    get bgColor() {
      return d();
    },
    set bgColor(Q) {
      d(Q), v();
    },
    get maskColor() {
      return f();
    },
    set maskColor(Q) {
      f(Q), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(Q) {
      p(Q), v();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(Q) {
      h(Q), v();
    },
    get width() {
      return g();
    },
    set width(Q = 200) {
      g(Q), v();
    },
    get height() {
      return y();
    },
    set height(Q = 150) {
      y(Q), v();
    },
    get pannable() {
      return w();
    },
    set pannable(Q = !0) {
      w(Q), v();
    },
    get zoomable() {
      return C();
    },
    set zoomable(Q = !0) {
      C(Q), v();
    },
    get inversePan() {
      return $();
    },
    set inversePan(Q) {
      $(Q), v();
    },
    get zoomStep() {
      return b();
    },
    set zoomStep(Q) {
      b(Q), v();
    },
    get class() {
      return _();
    },
    set class(Q) {
      _(Q), v();
    }
  }, te = jm(), ne = oe(te);
  {
    let Q = /* @__PURE__ */ E(() => ["svelte-flow__minimap", _()]);
    Lf(ne, () => ({ "--xy-minimap-background-color-props": d() })), So(ne.lastChild, Ke(
      {
        get position() {
          return n();
        },
        get class() {
          return c(Q);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => P,
      {
        children: (fe, ce) => {
          var re = Ne(), ie = oe(re);
          {
            var pe = (ve) => {
              var xe = Km();
              let de;
              var Ce = B(xe);
              {
                var Pe = (Ve) => {
                  var He = Rm(), Ze = B(He, !0);
                  Z(He), $e(() => {
                    be(He, "id", c(k)), Re(Ze, r() ?? c(O)["minimap.ariaLabel"]);
                  }), L(Ve, He);
                };
                ae(Ce, (Ve) => {
                  (r() ?? c(O)["minimap.ariaLabel"]) && Ve(Pe);
                });
              }
              var Y = z(Ce);
              gt(Y, 17, () => c(N).nodes, (Ve) => Ve.id, (Ve, He) => {
                const Ze = /* @__PURE__ */ E(() => c(N).nodeLookup.get(c(He).id));
                var tt = Ne(), Et = oe(tt);
                {
                  var We = (Ie) => {
                    const ge = /* @__PURE__ */ E(() => Xn(c(Ze)));
                    {
                      let Be = /* @__PURE__ */ E(() => H?.(c(Ze))), vt = /* @__PURE__ */ E(() => K(c(Ze))), Je = /* @__PURE__ */ E(() => F(c(Ze)));
                      hd(Ie, Ke(
                        {
                          get x() {
                            return c(Ze).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ze).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ge),
                        {
                          get selected() {
                            return c(Ze).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Be);
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
                            return c(Je);
                          }
                        }
                      ));
                    }
                  };
                  ae(Et, (Ie) => {
                    c(Ze) && dc(c(Ze)) && Ie(We);
                  });
                }
                L(Ve, tt);
              });
              var Ae = z(Y);
              Z(xe), ft(xe, (Ve, He) => Bm?.(Ve, He), () => ({
                store: c(N),
                panZoom: c(N).panZoom,
                getViewScale: X,
                translateExtent: c(N).translateExtent,
                width: c(N).width,
                height: c(N).height,
                inversePan: $(),
                zoomStep: b(),
                pannable: w(),
                zoomable: C()
              })), $e(
                (Ve) => {
                  be(xe, "width", g()), be(xe, "height", y()), be(xe, "viewBox", `${c(W) ?? ""} ${c(q) ?? ""} ${c(G) ?? ""} ${c(D) ?? ""}`), be(xe, "aria-labelledby", c(k)), de = pt(xe, "", de, Ve), be(Ae, "d", `M${c(W) - c(V)},${c(q) - c(V)}h${c(G) + c(V) * 2}v${c(D) + c(V) * 2}h${-c(G) - c(V) * 2}z
      M${c(S).x ?? ""},${c(S).y ?? ""}h${c(S).width ?? ""}v${c(S).height ?? ""}h${-c(S).width}z`);
                },
                [
                  () => ({
                    "--xy-minimap-mask-background-color-props": f(),
                    "--xy-minimap-mask-stroke-color-props": p(),
                    "--xy-minimap-mask-stroke-width-props": h() ? h() * c(I) : void 0
                  })
                ]
              ), L(ve, xe);
            };
            ae(ie, (ve) => {
              c(N).panZoom && ve(pe);
            });
          }
          L(fe, re);
        },
        $$slots: { default: !0 }
      }
    )), Z(ne);
  }
  return L(e, te), ue(J);
}
se(
  gd,
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
var Ym = /* @__PURE__ */ ee("<div><!></div>");
function vd(e, t) {
  le(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => we.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ De(t, [
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
  const u = Gt(), { getNodesBounds: d } = it(), f = Dn("svelteflow__node_id");
  let p = /* @__PURE__ */ E(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (P, N) => {
      const O = u.nodeLookup.get(N);
      return O && P.push(O), P;
    },
    []
  ))), h = /* @__PURE__ */ E(() => {
    const P = d(c(p));
    return P ? o0(P, u.viewport, r(), i(), o()) : "";
  }), g = /* @__PURE__ */ E(() => c(p).length === 0 ? 1 : Math.max(...c(p).map((P) => (P.internals.z || 5) + 1))), y = /* @__PURE__ */ E(() => u.nodes.filter((P) => P.selected).length), w = /* @__PURE__ */ E(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(y) === 1);
  var C = {
    get nodeId() {
      return n();
    },
    set nodeId(P) {
      n(P), v();
    },
    get position() {
      return r();
    },
    set position(P = we.Top) {
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
  }, $ = Ne(), b = oe($);
  {
    var _ = (P) => {
      var N = Ym();
      et(
        N,
        (H, K) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": H,
          ...l,
          [rn]: K
        }),
        [
          () => c(p).reduce((H, K) => `${H}${K.id} `, "").trim(),
          () => ({
            display: Tc().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(g)
          })
        ]
      );
      var O = B(N);
      qe(O, () => a() ?? dt), Z(N), ft(N, (H, K) => Mc?.(H, K), () => "root"), L(P, N);
    };
    ae(b, (P) => {
      u.domNode && c(w) && c(p) && P(_);
    });
  }
  return L(e, $), ue(C);
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
function _n(e) {
  const t = /* @__PURE__ */ E(Gt), n = /* @__PURE__ */ E(() => c(t).nodes), r = /* @__PURE__ */ E(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ E(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!g0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const yl = "tinyflow-component", Xm = [
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
], la = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Fm = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Wm = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Jm {
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
    const t = document.createElement(yl);
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
    const n = document.createElement(yl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Um = () => {
  let e = /* @__PURE__ */ Ee([]), t = /* @__PURE__ */ Ee([]), n = /* @__PURE__ */ Ee({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      U(e, r), U(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      U(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      U(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      U(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      U(e, [...c(e), r]);
    },
    removeNode: (r) => {
      U(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      U(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      U(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      U(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      U(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      U(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      U(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      U(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      U(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      U(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Oe = Um();
var Gm = /* @__PURE__ */ ee("<button><!></button>");
function Te(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ De(t, [
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
  return qe(a, () => n() ?? dt), Z(s), L(e, s), ue(i);
}
se(Te, { children: {}, primary: {} }, [], [], !0);
var Qm = /* @__PURE__ */ ee("<input/>");
function md(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Qm();
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
  ), L(e, r), ue();
}
se(md, {}, [], [], !0);
var ey = /* @__PURE__ */ ee('<div><input type="hidden"/> <!> <!></div>');
const ty = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function yd(e, t) {
  le(t, !0), ze(e, ty);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ De(t, [
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
  }, u = ey();
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
  er(d);
  var f = z(d, 2);
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
  var p = z(f, 2);
  return Te(p, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, g) => {
      me();
      var y = ke();
      $e(() => Re(y, i())), L(h, y);
    },
    $$slots: { default: !0 }
  }), Z(u), $e(() => Bo(d, o())), L(e, u), ue(l);
}
se(
  yd,
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
var ny = /* @__PURE__ */ ee("<input/>");
function Ue(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ny();
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
  ), L(e, r), ue();
}
se(Ue, {}, [], [], !0);
var ry = /* @__PURE__ */ ee("<textarea></textarea>");
function je(e, t) {
  le(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = {
    get value() {
      return n();
    },
    set value(s) {
      n(s), v();
    }
  }, i = ry();
  return lf(i), et(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), L(e, i), ue(o);
}
se(je, { value: {} }, [], [], !0);
var oy = /* @__PURE__ */ ee('<div role="button"><!></div>'), iy = /* @__PURE__ */ ee("<div></div>");
function wd(e, t) {
  const n = Oa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Oa(n, ["items", "onChange", "activeIndex"]);
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
  Nu();
  var u = iy();
  return et(u, () => ({
    ...r,
    class: `tf-tabs ${Zs(r), ut(() => r.class) ?? ""}`
  })), gt(u, 5, o, Tr, (d, f, p) => {
    var h = oy();
    be(h, "tabindex", p), h.__click = () => a(c(f), p), h.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), a(c(f), p));
    };
    var g = B(h);
    {
      var y = (C) => {
        var $ = ke();
        $e(() => Re($, (c(f), ut(() => c(f).label)))), L(C, $);
      }, w = (C) => {
        var $ = Ne(), b = oe($);
        qe(b, () => (c(f), ut(() => c(f).label) ?? dt)), L(C, $);
      };
      ae(g, (C) => {
        c(f), ut(() => typeof c(f).label == "string") ? C(y) : C(w, !1);
      });
    }
    Z(h), $e(() => Nt(h, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), L(d, h);
  }), Z(u), L(e, u), ue(l);
}
Yn(["click", "keydown"]);
se(wd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var sy = (e, t, n) => t(c(n)), ay = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, ly = /* @__PURE__ */ ee('<span class="tf-collapse-item-title-icon"><!></span>'), uy = /* @__PURE__ */ ee('<div class="tf-collapse-item-description"><!></div>'), cy = /* @__PURE__ */ ee('<div class="tf-collapse-item-content"><!></div>'), dy = /* @__PURE__ */ ee('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), py = /* @__PURE__ */ ee("<div></div>");
const fy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function bd(e, t) {
  le(t, !0), ze(e, fy);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => zt([]));
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
  }, a = py();
  return gt(a, 21, n, Tr, (l, u, d) => {
    var f = dy(), p = B(f);
    be(p, "tabindex", d), p.__click = [sy, i, u], p.__keydown = [ay, i, u];
    var h = B(p);
    {
      var g = (P) => {
        var N = ly(), O = B(N);
        On(O, {
          get target() {
            return c(u).icon;
          }
        }), Z(N), L(P, N);
      };
      ae(h, (P) => {
        c(u).icon && P(g);
      });
    }
    var y = z(h, 2);
    On(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = z(y, 2);
    Z(p);
    var C = z(p, 2);
    {
      var $ = (P) => {
        var N = uy(), O = B(N);
        On(O, {
          get target() {
            return c(u).description;
          }
        }), Z(N), L(P, N);
      };
      ae(C, (P) => {
        c(u).description && P($);
      });
    }
    var b = z(C, 2);
    {
      var _ = (P) => {
        var N = cy(), O = B(N);
        On(O, {
          get target() {
            return c(u).content;
          }
        }), Z(N), L(P, N);
      };
      ae(b, (P) => {
        o().includes(c(u).key) && P(_);
      });
    }
    Z(f), $e((P) => Nt(w, 1, `tf-collapse-item-title-arrow ${P ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), L(l, f);
  }), Z(a), $e(() => {
    pt(a, t.style), Nt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), L(e, a), ue(s);
}
Yn(["click", "keydown"]);
se(bd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
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
  }, o = Ne(), i = oe(o);
  {
    var s = (l) => {
      var u = Ne(), d = oe(u);
      qe(d, () => n() ?? dt), L(l, u);
    }, a = (l) => {
      var u = Ne(), d = oe(u);
      Ks(d, n), L(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return L(e, o), ue(r);
}
se(On, { target: {} }, [], [], !0);
var hy = (e, t, n) => t(c(n)), gy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), vy = /* @__PURE__ */ ee('<div class="tf-select-content-children"><!></div>'), my = /* @__PURE__ */ ee('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), yy = /* @__PURE__ */ ee('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), wy = /* @__PURE__ */ ee("<!> <!>", 1), by = /* @__PURE__ */ ee('<div class="tf-select-input-placeholder"> </div>'), xy = /* @__PURE__ */ ee('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Cy = /* @__PURE__ */ ee("<div><!></div>");
function ct(e, t) {
  le(t, !0);
  const n = ($, b = dt) => {
    var _ = Ne(), P = oe(_);
    gt(P, 19, b, (N, O) => `${O}_${N.value}`, (N, O) => {
      var H = my(), K = oe(H);
      K.__click = [hy, g, O];
      var F = B(K), A = B(F);
      {
        var k = (M) => {
          var I = gy();
          L(M, I);
        };
        ae(A, (M) => {
          c(O).children && c(O).children.length > 0 && M(k);
        });
      }
      Z(F);
      var S = z(F, 2);
      On(S, {
        get target() {
          return c(O).label;
        }
      }), Z(K);
      var x = z(K, 2);
      {
        var T = (M) => {
          var I = vy(), R = B(I);
          n(R, () => c(O).children), Z(I), L(M, I);
        };
        ae(x, (M) => {
          c(O).children && c(O).children.length > 0 && (a() || u().includes(c(O).value)) && M(T);
        });
      }
      L(N, H);
    }), L($, _);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ De(t, [
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
  ]), p = /* @__PURE__ */ E(() => {
    const $ = [], b = (_) => {
      for (let P of _)
        i().length > 0 ? i().includes(P.value) && $.push(P) : s().includes(P.value) && $.push(P), P.children && P.children.length > 0 && b(P.children);
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
  }, w = Cy();
  et(w, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var C = B(w);
  return Lt(
    qn(C, {
      floating: ($) => {
        var b = yy(), _ = B(b);
        n(_, r), Z(b), L($, b);
      },
      children: ($, b) => {
        var _ = xy();
        et(_, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var P = B(_);
        gt(
          P,
          23,
          () => c(p),
          (N, O) => `${O}_${N.value}`,
          (N, O, H) => {
            var K = Ne(), F = oe(K);
            {
              var A = (S) => {
                var x = Ne(), T = oe(x);
                {
                  var M = (I) => {
                    On(I, {
                      get target() {
                        return c(O).label;
                      }
                    });
                  };
                  ae(T, (I) => {
                    c(H) === 0 && I(M);
                  });
                }
                L(S, x);
              }, k = (S) => {
                var x = wy(), T = oe(x);
                On(T, {
                  get target() {
                    return c(O).label;
                  }
                });
                var M = z(T, 2);
                {
                  var I = (R) => {
                    var j = ke(",");
                    L(R, j);
                  };
                  ae(M, (R) => {
                    c(H) < c(p).length - 1 && R(I);
                  });
                }
                L(S, x);
              };
              ae(F, (S) => {
                l() ? S(k, !1) : S(A);
              });
            }
            L(N, K);
          },
          (N) => {
            var O = by(), H = B(O, !0);
            Z(O), $e(() => Re(H, d())), L(N, O);
          }
        ), Z(P), me(2), Z(_), L($, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => h = $,
    () => h
  ), Z(w), L(e, w), ue(y);
}
Yn(["click"]);
se(
  ct,
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
const lo = Math.min, Cr = Math.max, di = Math.round, ln = (e) => ({
  x: e,
  y: e
}), $y = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ky = {
  start: "end",
  end: "start"
};
function ms(e, t, n) {
  return Cr(e, lo(t, n));
}
function No(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lr(e) {
  return e.split("-")[0];
}
function Eo(e) {
  return e.split("-")[1];
}
function xd(e) {
  return e === "x" ? "y" : "x";
}
function ua(e) {
  return e === "y" ? "height" : "width";
}
const _y = /* @__PURE__ */ new Set(["top", "bottom"]);
function Vn(e) {
  return _y.has(lr(e)) ? "y" : "x";
}
function ca(e) {
  return xd(Vn(e));
}
function Sy(e, t, n) {
  n === void 0 && (n = !1);
  const r = Eo(e), o = ca(e), i = ua(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = pi(s)), [s, pi(s)];
}
function Ny(e) {
  const t = pi(e);
  return [ys(e), t, ys(t)];
}
function ys(e) {
  return e.replace(/start|end/g, (t) => ky[t]);
}
const wl = ["left", "right"], bl = ["right", "left"], Ey = ["top", "bottom"], Py = ["bottom", "top"];
function My(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? bl : wl : t ? wl : bl;
    case "left":
    case "right":
      return t ? Ey : Py;
    default:
      return [];
  }
}
function Ty(e, t, n, r) {
  const o = Eo(e);
  let i = My(lr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ys)))), i;
}
function pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $y[t]);
}
function Ly(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Cd(e) {
  return typeof e != "number" ? Ly(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function fi(e) {
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
function xl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Vn(t), s = ca(t), a = ua(s), l = lr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  switch (Eo(t)) {
    case "start":
      h[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Oy = async (e, t, n) => {
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
  } = xl(u, r, l), p = r, h = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: C
    } = a[y], {
      x: $,
      y: b,
      data: _,
      reset: P
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
    }, P && g <= 50 && (g++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (u = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: d,
      y: f
    } = xl(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function $d(e, t) {
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
  } = No(t, e), g = Cd(h), y = a[p ? f === "floating" ? "reference" : "floating" : f], w = fi(await i.getClippingRect({
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
  }, _ = fi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Vy = (e) => ({
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
    const f = Cd(d), p = {
      x: n,
      y: r
    }, h = ca(o), g = ua(h), y = await s.getDimensions(u), w = h === "y", C = w ? "top" : "left", $ = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", _ = i.reference[g] + i.reference[h] - p[h] - i.floating[g], P = p[h] - i.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let O = N ? N[b] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(N))) && (O = a.floating[b] || i.floating[g]);
    const H = _ / 2 - P / 2, K = O / 2 - y[g] / 2 - 1, F = lo(f[C], K), A = lo(f[$], K), k = F, S = O - y[g] - A, x = O / 2 - y[g] / 2 + H, T = ms(k, x, S), M = !l.arrow && Eo(o) != null && x !== T && i.reference[g] / 2 - (x < k ? F : A) - y[g] / 2 < 0, I = M ? x < k ? x - k : x - S : 0;
    return {
      [h]: p[h] + I,
      data: {
        [h]: T,
        centerOffset: x - T - I,
        ...M && {
          alignmentOffset: I
        }
      },
      reset: M
    };
  }
}), Hy = function(e) {
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
      } = No(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = lr(o), $ = Vn(a), b = lr(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), P = p || (b || !y ? [pi(a)] : Ny(a)), N = g !== "none";
      !p && N && P.push(...Ty(a, y, g, _));
      const O = [a, ...P], H = await $d(t, w), K = [];
      let F = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && K.push(H[C]), f) {
        const x = Sy(o, s, _);
        K.push(H[x[0]], H[x[1]]);
      }
      if (F = [...F, {
        placement: o,
        overflows: K
      }], !K.every((x) => x <= 0)) {
        var A, k;
        const x = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, T = O[x];
        if (T && (!(f === "alignment" && $ !== Vn(T)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((I) => Vn(I.placement) === $ ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: x,
              overflows: F
            },
            reset: {
              placement: T
            }
          };
        let M = (k = F.filter((I) => I.overflows[0] <= 0).sort((I, R) => I.overflows[1] - R.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var S;
              const I = (S = F.filter((R) => {
                if (N) {
                  const j = Vn(R.placement);
                  return j === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((j) => j > 0).reduce((j, V) => j + V, 0)]).sort((R, j) => R[1] - j[1])[0]) == null ? void 0 : S[0];
              I && (M = I);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
}, zy = /* @__PURE__ */ new Set(["left", "top"]);
async function Dy(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = lr(n), a = Eo(n), l = Vn(n) === "y", u = zy.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = No(t, e);
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
const Ay = function(e) {
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
      } = t, l = await Dy(t, e);
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
}, Iy = function(e) {
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
      } = No(e, t), u = {
        x: n,
        y: r
      }, d = await $d(t, l), f = Vn(lr(o)), p = xd(f);
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
function Ti() {
  return typeof window < "u";
}
function Rr(e) {
  return kd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Mt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Sn(e) {
  var t;
  return (t = (kd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function kd(e) {
  return Ti() ? e instanceof Node || e instanceof Mt(e).Node : !1;
}
function qt(e) {
  return Ti() ? e instanceof Element || e instanceof Mt(e).Element : !1;
}
function cn(e) {
  return Ti() ? e instanceof HTMLElement || e instanceof Mt(e).HTMLElement : !1;
}
function Cl(e) {
  return !Ti() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Mt(e).ShadowRoot;
}
const Zy = /* @__PURE__ */ new Set(["inline", "contents"]);
function Po(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Zy.has(o);
}
const By = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ry(e) {
  return By.has(Rr(e));
}
const Ky = [":popover-open", ":modal"];
function Li(e) {
  return Ky.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const jy = ["transform", "translate", "scale", "rotate", "perspective"], Yy = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Xy = ["paint", "layout", "strict", "content"];
function da(e) {
  const t = pa(), n = qt(e) ? Ft(e) : e;
  return jy.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Yy.some((r) => (n.willChange || "").includes(r)) || Xy.some((r) => (n.contain || "").includes(r));
}
function qy(e) {
  let t = Zn(e);
  for (; cn(t) && !Ar(t); ) {
    if (da(t))
      return t;
    if (Li(t))
      return null;
    t = Zn(t);
  }
  return null;
}
function pa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Fy = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ar(e) {
  return Fy.has(Rr(e));
}
function Ft(e) {
  return Mt(e).getComputedStyle(e);
}
function Oi(e) {
  return qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Zn(e) {
  if (Rr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Cl(e) && e.host || // Fallback.
    Sn(e)
  );
  return Cl(t) ? t.host : t;
}
function _d(e) {
  const t = Zn(e);
  return Ar(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : cn(t) && Po(t) ? t : _d(t);
}
function Sd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = _d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Mt(o);
  return i ? (ws(s), t.concat(s, s.visualViewport || [], Po(o) ? o : [], [])) : t.concat(o, Sd(o, []));
}
function ws(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Nd(e) {
  const t = Ft(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = cn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = di(n) !== i || di(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ed(e) {
  return qt(e) ? e : e.contextElement;
}
function $r(e) {
  const t = Ed(e);
  if (!cn(t))
    return ln(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Nd(t);
  let s = (i ? di(n.width) : n.width) / r, a = (i ? di(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Wy = /* @__PURE__ */ ln(0);
function Pd(e) {
  const t = Mt(e);
  return !pa() || !t.visualViewport ? Wy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Jy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Mt(e) ? !1 : t;
}
function uo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ed(e);
  let s = ln(1);
  t && (r ? qt(r) && (s = $r(r)) : s = $r(e));
  const a = Jy(i, n, r) ? Pd(i) : ln(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = Mt(i), h = r && qt(r) ? Mt(r) : r;
    let g = p, y = ws(g);
    for (; y && r && h !== g; ) {
      const w = $r(y), C = y.getBoundingClientRect(), $ = Ft(y), b = C.left + (y.clientLeft + parseFloat($.paddingLeft)) * w.x, _ = C.top + (y.clientTop + parseFloat($.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, f *= w.y, l += b, u += _, g = Mt(y), y = ws(g);
    }
  }
  return fi({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Vi(e, t) {
  const n = Oi(e).scrollLeft;
  return t ? t.left + n : uo(Sn(e)).left + n;
}
function Md(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Vi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Uy(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Sn(r), a = t ? Li(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ln(1);
  const d = ln(0), f = cn(r);
  if ((f || !f && !i) && ((Rr(r) !== "body" || Po(s)) && (l = Oi(r)), cn(r))) {
    const h = uo(r);
    u = $r(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !f && !i ? Md(s, l) : ln(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function Gy(e) {
  return Array.from(e.getClientRects());
}
function Qy(e) {
  const t = Sn(e), n = Oi(e), r = e.ownerDocument.body, o = Cr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Cr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Vi(e);
  const a = -n.scrollTop;
  return Ft(r).direction === "rtl" && (s += Cr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const $l = 25;
function e2(e, t) {
  const n = Mt(e), r = Sn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = pa();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Vi(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= $l && (i -= g);
  } else u <= $l && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const t2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function n2(e, t) {
  const n = uo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = cn(e) ? $r(e) : ln(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = e2(e, n);
  else if (t === "document")
    r = Qy(Sn(e));
  else if (qt(t))
    r = n2(t, n);
  else {
    const o = Pd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return fi(r);
}
function Td(e, t) {
  const n = Zn(e);
  return n === t || !qt(n) || Ar(n) ? !1 : Ft(n).position === "fixed" || Td(n, t);
}
function r2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Sd(e, []).filter((a) => qt(a) && Rr(a) !== "body"), o = null;
  const i = Ft(e).position === "fixed";
  let s = i ? Zn(e) : e;
  for (; qt(s) && !Ar(s); ) {
    const a = Ft(s), l = da(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && t2.has(o.position) || Po(s) && !l && Td(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Zn(s);
  }
  return t.set(e, r), r;
}
function o2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Li(t) ? [] : r2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = kl(t, u, o);
    return l.top = Cr(d.top, l.top), l.right = lo(d.right, l.right), l.bottom = lo(d.bottom, l.bottom), l.left = Cr(d.left, l.left), l;
  }, kl(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function i2(e) {
  const {
    width: t,
    height: n
  } = Nd(e);
  return {
    width: t,
    height: n
  };
}
function s2(e, t, n) {
  const r = cn(t), o = Sn(t), i = n === "fixed", s = uo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ln(0);
  function u() {
    l.x = Vi(o);
  }
  if (r || !r && !i)
    if ((Rr(t) !== "body" || Po(o)) && (a = Oi(t)), r) {
      const h = uo(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Md(o, a) : ln(0), f = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Wi(e) {
  return Ft(e).position === "static";
}
function _l(e, t) {
  if (!cn(e) || Ft(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Sn(e) === n && (n = n.ownerDocument.body), n;
}
function Ld(e, t) {
  const n = Mt(e);
  if (Li(e))
    return n;
  if (!cn(e)) {
    let o = Zn(e);
    for (; o && !Ar(o); ) {
      if (qt(o) && !Wi(o))
        return o;
      o = Zn(o);
    }
    return n;
  }
  let r = _l(e, t);
  for (; r && Ry(r) && Wi(r); )
    r = _l(r, t);
  return r && Ar(r) && Wi(r) && !da(r) ? n : r || qy(e) || n;
}
const a2 = async function(e) {
  const t = this.getOffsetParent || Ld, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: s2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function l2(e) {
  return Ft(e).direction === "rtl";
}
const u2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Uy,
  getDocumentElement: Sn,
  getClippingRect: o2,
  getOffsetParent: Ld,
  getElementRects: a2,
  getClientRects: Gy,
  getDimensions: i2,
  getScale: $r,
  isElement: qt,
  isRTL: l2
}, c2 = Ay, d2 = Iy, p2 = Hy, f2 = Vy, h2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: u2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Oy(e, t, {
    ...o,
    platform: i
  });
}, g2 = ({
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
    h2(e, u, {
      placement: r,
      middleware: [
        c2(o),
        // 手动偏移配置
        p2(i),
        //自动翻转
        d2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [f2({ element: d })] : []
      ]
    }).then(({ x: C, y: $, placement: b, middlewareData: _ }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${$}px`
      }), l) {
        const { x: P, y: N } = _.arrow, O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: P != null ? `${P}px` : "",
          top: N != null ? `${N}px` : "",
          right: "",
          bottom: "",
          [O]: "2px"
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
var v2 = /* @__PURE__ */ ee('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function qn(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  $n(() => (a = g2({
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
  }, d = v2(), f = B(d), p = B(f);
  qe(p, n), Z(f), Lt(f, (y) => i = y, () => i);
  var h = z(f, 2), g = B(h);
  return qe(g, r), Z(h), Lt(h, (y) => s = y, () => s), Z(d), L(e, d), ue(u);
}
se(qn, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Le(e, t) {
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
  }, a = Ne(), l = oe(a);
  return zf(l, () => `h${r()}`, !1, (u, d) => {
    et(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Ne(), p = oe(f);
    qe(p, () => n() ?? dt), L(d, f);
  }), L(e, a), ue(s);
}
se(Le, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var m2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const y2 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Mo(e, t) {
  le(t, !0), ze(e, y2);
  const n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Te(e, Ke(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = m2();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Mo, {}, [], [], !0);
const w2 = () => ({ deleteNode: (e) => {
  Oe.removeNode(e), Oe.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), xn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, b2 = () => ({ copyNode: (e) => {
  const t = Oe.getNode(e);
  if (t) {
    const n = xn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Oe.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Fe = () => Dn("svelteflow__node_id"), Bn = () => Dn("tinyflow_options");
var x2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), C2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), $2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), k2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), _2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, S2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, N2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), E2 = /* @__PURE__ */ ee('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), P2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), M2 = /* @__PURE__ */ ee('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), T2 = /* @__PURE__ */ ee('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const L2 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Bt(e, t) {
  le(t, !0), ze(e, L2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), f = m(t, "allowSettingOfCondition", 7, !0), p = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), g = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: C } = it(), $ = /* @__PURE__ */ E(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: b } = w2(), { copyNode: _ } = b2(), P = Bn(), N = () => {
    P.onNodeExecute?.(C(r()));
  };
  let O = Fe();
  var H = {
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
  }, K = T2(), F = oe(K);
  {
    var A = (V) => {
      vd(V, {
        get position() {
          return we.Top;
        },
        align: "start",
        children: (W, q) => {
          var G = M2(), D = B(G);
          {
            var X = (re) => {
              Te(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (ie, pe) => {
                  var ve = x2();
                  L(ie, ve);
                },
                $$slots: { default: !0 }
              });
            };
            ae(D, (re) => {
              u() && re(X);
            });
          }
          var J = z(D, 2);
          {
            var te = (re) => {
              Te(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (ie, pe) => {
                  var ve = C2();
                  L(ie, ve);
                },
                $$slots: { default: !0 }
              });
            };
            ae(J, (re) => {
              l() && re(te);
            });
          }
          var ne = z(J, 2);
          {
            var Q = (re) => {
              Te(re, {
                class: "tf-node-toolbar-item",
                onclick: N,
                children: (ie, pe) => {
                  var ve = $2();
                  L(ie, ve);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ne, (re) => {
              a() && re(Q);
            });
          }
          var fe = z(ne, 2);
          {
            var ce = (re) => {
              qn(re, {
                placement: "bottom",
                floating: (ie) => {
                  var pe = E2(), ve = B(pe), xe = z(B(ve));
                  Ue(xe, {
                    style: "width: 100%;",
                    onchange: (We) => {
                      const Ie = We.target.value;
                      w(O, { title: Ie });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Z(ve);
                  var de = z(ve, 2), Ce = z(B(de));
                  je(Ce, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (We) => {
                      const Ie = We.target.value;
                      w(O, { description: Ie });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Z(de);
                  var Pe = z(de, 2);
                  {
                    var Y = (We) => {
                      var Ie = k2(), ge = z(B(Ie));
                      je(ge, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Be) => {
                          const vt = Be.target.value;
                          w(O, { condition: vt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Z(Ie), L(We, Ie);
                    };
                    ae(Pe, (We) => {
                      f() && We(Y);
                    });
                  }
                  var Ae = z(Pe, 2), Ve = z(B(Ae), 2);
                  er(Ve), Ve.__change = [_2, w, O], Z(Ae);
                  var He = z(Ae, 2), Ze = z(B(He), 2);
                  er(Ze), Ze.__change = [S2, w, O], Z(He);
                  var tt = z(He, 2);
                  {
                    var Et = (We) => {
                      var Ie = N2(), ge = oe(Ie), Be = z(B(ge));
                      {
                        let at = /* @__PURE__ */ E(() => n().loopIntervalMs || "1000");
                        je(Be, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (En) => {
                            const Pn = En.target.value;
                            w(O, { loopIntervalMs: Pn });
                          },
                          get value() {
                            return c(at);
                          }
                        });
                      }
                      Z(ge);
                      var vt = z(ge, 2), Je = z(B(vt));
                      {
                        let at = /* @__PURE__ */ E(() => n().maxLoopCount || "0");
                        je(Je, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (En) => {
                            const Pn = En.target.value;
                            w(O, { maxLoopCount: Pn });
                          },
                          get value() {
                            return c(at);
                          }
                        });
                      }
                      Z(vt);
                      var xt = z(vt, 2), st = z(B(xt));
                      je(st, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (at) => {
                          const En = at.target.value;
                          w(O, { loopBreakCondition: En });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Z(xt), L(We, Ie);
                    };
                    ae(tt, (We) => {
                      n().loopEnable && We(Et);
                    });
                  }
                  Z(pe), $e(() => {
                    Ea(Ve, !!n().async), Ea(Ze, !!n().loopEnable);
                  }), L(ie, pe);
                },
                children: (ie, pe) => {
                  Te(ie, {
                    class: "tf-node-toolbar-item",
                    children: (ve, xe) => {
                      var de = P2();
                      L(ve, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(fe, (re) => {
              d() && re(ce);
            });
          }
          Z(G), L(W, G);
        },
        $$slots: { default: !0 }
      });
    };
    ae(F, (V) => {
      (a() || l() || u()) && V(A);
    });
  }
  var k = z(F, 2), S = z(B(k), 2), x = B(S);
  bd(x, {
    get items() {
      return c($);
    },
    get activeKeys() {
      return y;
    },
    onChange: (V, W) => {
      w(r(), { expand: W?.includes("key") }), g()?.(W?.includes("key") ? "key" : "");
    }
  }), Z(S), Z(k);
  var T = z(k, 2);
  {
    var M = (V) => {
      In(V, {
        type: "target",
        get position() {
          return we.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(T, (V) => {
      h() && V(M);
    });
  }
  var I = z(T, 2);
  {
    var R = (V) => {
      In(V, {
        type: "source",
        get position() {
          return we.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(I, (V) => {
      p() && V(R);
    });
  }
  var j = z(I, 2);
  return qe(j, () => i() ?? dt), L(e, K), ue(H);
}
Yn(["change"]);
se(
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
var O2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), V2 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), H2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), z2 = /* @__PURE__ */ ee('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const D2 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Od(e, t) {
  le(t, !0), ze(e, D2);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = Fe(), i = _n(o), s = /* @__PURE__ */ E(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = it(), l = (H, K) => {
    a(o, (F) => {
      let A = F.data.parameters;
      return A[r()][H] = K, { parameters: A };
    });
  }, u = (H, K) => {
    const F = K.target.value;
    l(H, F);
  }, d = (H) => {
    const K = H.target.value;
    l("name", K);
  }, f = (H) => {
    const K = H.target.checked;
    l("required", K);
  }, p = (H) => {
    const K = H.value;
    l("formType", K);
  }, h = (H) => {
    const K = H.value;
    l("contentType", K);
  };
  let g;
  const y = () => {
    a(o, (H) => {
      let K = H.data.parameters;
      return K.splice(r(), 1), { parameters: [...K] };
    }), g?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(H) {
      n(H), v();
    },
    get index() {
      return r();
    },
    set index(H) {
      r(H), v();
    }
  }, C = z2(), $ = oe(C), b = B($);
  Ue(b, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Z($);
  var _ = z($, 2), P = B(_);
  md(P, {
    get checked() {
      return c(s).required;
    },
    onchange: f
  }), Z(_);
  var N = z(_, 2), O = B(N);
  return Lt(
    qn(O, {
      placement: "bottom",
      floating: (H) => {
        var K = V2(), F = B(K), A = z(B(F));
        {
          let D = /* @__PURE__ */ E(() => c(s).contentType ? [c(s).contentType] : []);
          ct(A, {
            get items() {
              return la;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(D);
            },
            onSelect: h
          });
        }
        Z(F);
        var k = z(F, 2), S = z(B(k));
        {
          let D = /* @__PURE__ */ E(() => c(s).formType ? [c(s).formType] : []);
          ct(S, {
            get items() {
              return Fm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(D);
            },
            onSelect: p
          });
        }
        Z(k);
        var x = z(k, 2);
        {
          var T = (D) => {
            var X = O2(), J = z(B(X));
            {
              let te = /* @__PURE__ */ E(() => c(s).enums?.join(`
`));
              je(J, {
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
            Z(X), L(D, X);
          };
          ae(x, (D) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && D(T);
          });
        }
        var M = z(x, 2), I = z(B(M));
        je(I, {
          rows: 1,
          style: "width: 100%;",
          onchange: (D) => {
            u("formLabel", D);
          },
          get value() {
            return c(s).formLabel;
          }
        }), Z(M);
        var R = z(M, 2), j = z(B(R));
        je(j, {
          rows: 2,
          style: "width: 100%;",
          onchange: (D) => {
            u("formDescription", D);
          },
          get value() {
            return c(s).formDescription;
          }
        }), Z(R);
        var V = z(R, 2), W = z(B(V));
        je(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (D) => {
            u("formPlaceholder", D);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), Z(V);
        var q = z(V, 2), G = B(q);
        Te(G, {
          onclick: y,
          children: (D, X) => {
            me();
            var J = ke("删除");
            L(D, J);
          },
          $$slots: { default: !0 }
        }), Z(q), Z(K), L(H, K);
      },
      children: (H, K) => {
        Te(H, {
          class: "input-btn-more",
          children: (F, A) => {
            var k = H2();
            L(F, k);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => g = H,
    () => g
  ), Z(N), L(e, C), ue(w);
}
se(Od, { parameter: {}, index: {} }, [], [], !0);
var A2 = /* @__PURE__ */ ee('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), I2 = /* @__PURE__ */ ee('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Z2 = /* @__PURE__ */ ee('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const B2 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Vd(e, t) {
  le(t, !0), ze(e, B2);
  let n = Fe(), r = _n(n), o = /* @__PURE__ */ E(() => [...r?.current?.data?.parameters || []]);
  var i = Z2(), s = B(i);
  {
    var a = (u) => {
      var d = A2();
      me(4), L(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = z(s, 2);
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
      var d = I2();
      L(u, d);
    }
  ), Z(i), L(e, i), ue();
}
se(Vd, {}, [], [], !0);
const co = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = xn()), co(t.children);
}), e), Qt = () => {
  const { updateNodeData: e } = it();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => co(s?.children)) : co(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: xn()
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
var R2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), K2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), j2 = /* @__PURE__ */ ee('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Y2 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Hd(e, t) {
  le(t, !0), ze(e, Y2);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Bt(e, Ke(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = R2();
      L(a, l);
    },
    children: (a, l) => {
      var u = j2(), d = oe(u), f = B(d);
      Le(f, {
        level: 3,
        children: (g, y) => {
          me();
          var w = ke("输入参数");
          L(g, w);
        },
        $$slots: { default: !0 }
      });
      var p = z(f, 2);
      Te(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (g, y) => {
          var w = K2();
          L(g, w);
        },
        $$slots: { default: !0 }
      }), Z(d);
      var h = z(d, 2);
      Vd(h, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(Hd, { data: {} }, [], [], !0);
const zd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), zd(e, r.source, n));
}, Dd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Dd(r.children, t + "." + r.name, n)
})), Sl = (e, t, n) => {
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
          children: Dd(r, e.id, t)
        };
    }
  }
}, Ad = (e = !1) => {
  const t = Fe(), n = _n(t), r = /* @__PURE__ */ E(Gt), o = /* @__PURE__ */ E(() => c(r).nodes), i = /* @__PURE__ */ E(() => c(r).edges), s = /* @__PURE__ */ E(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ E(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const p = Sl(d, f, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      zd(d, t, c(i));
      for (const f of c(o))
        if (d.includes(f.id)) {
          const p = f.parentId === n.current.id, h = Sl(f, p, u);
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
var X2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), q2 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), F2 = /* @__PURE__ */ ee('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const W2 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  le(t, !0), ze(e, W2), $n(() => {
    c(u).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = Fe(), l = _n(a), u = /* @__PURE__ */ E(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = it(), f = (S, x) => {
    d(a, (T) => {
      let M = T.data?.[o()];
      return M[r()] = { ...M[r()], [S]: x }, { [o()]: M };
    });
  }, p = (S, x) => {
    const T = x.target.value;
    f(S, T);
  }, h = (S) => {
    const x = S.value;
    f("ref", x);
  }, g = (S) => {
    const x = S.value;
    f("refType", x);
  }, y = (S) => {
    const x = S.value;
    f("contentType", x);
  };
  let w;
  const C = () => {
    d(a, (S) => {
      let x = S.data?.[o()];
      return x.splice(r(), 1), { [o()]: [...x] };
    }), w?.hide();
  };
  let $ = Ad(i());
  var b = {
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
    },
    get showContentType() {
      return s();
    },
    set showContentType(S = !1) {
      s(S), v();
    }
  }, _ = F2(), P = oe(_), N = B(P);
  {
    let S = /* @__PURE__ */ E(() => c(u).nameDisabled === !0);
    Ue(N, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(S);
      },
      oninput: (x) => p("name", x)
    });
  }
  Z(P);
  var O = z(P, 2), H = B(O);
  {
    var K = (S) => {
      Ue(S, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (x) => p("value", x)
      });
    }, F = (S) => {
      var x = Ne(), T = oe(x);
      {
        var M = (I) => {
          {
            let R = /* @__PURE__ */ E(() => [c(u).ref]);
            ct(I, {
              get items() {
                return $.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(R);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ae(
          T,
          (I) => {
            c(u).refType !== "input" && I(M);
          },
          !0
        );
      }
      L(S, x);
    };
    ae(H, (S) => {
      c(u).refType === "fixed" ? S(K) : S(F, !1);
    });
  }
  Z(O);
  var A = z(O, 2), k = B(A);
  return Lt(
    qn(k, {
      placement: "bottom",
      floating: (S) => {
        var x = q2(), T = B(x), M = z(B(T));
        {
          let X = /* @__PURE__ */ E(() => c(u).refType ? [c(u).refType] : []);
          ct(M, {
            get items() {
              return qm;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(X);
            },
            onSelect: g
          });
        }
        Z(T);
        var I = z(T, 2);
        {
          var R = (X) => {
            var J = X2(), te = z(B(J));
            {
              let ne = /* @__PURE__ */ E(() => c(u).contentType ? [c(u).contentType] : []);
              ct(te, {
                get items() {
                  return la;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(ne);
                },
                onSelect: y
              });
            }
            Z(J), L(X, J);
          };
          ae(I, (X) => {
            s() && X(R);
          });
        }
        var j = z(I, 2), V = z(B(j));
        je(V, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            p("defaultValue", X);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), Z(j);
        var W = z(j, 2), q = z(B(W));
        je(q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            p("description", X);
          },
          get value() {
            return c(u).description;
          }
        }), Z(W);
        var G = z(W, 2), D = B(G);
        Te(D, {
          onclick: C,
          children: (X, J) => {
            me();
            var te = ke("删除");
            L(X, te);
          },
          $$slots: { default: !0 }
        }), Z(G), Z(x), L(S, x);
      },
      children: (S, x) => {
        Mo(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => w = S,
    () => w
  ), Z(A), L(e, _), ue(b);
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
var J2 = /* @__PURE__ */ ee('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), U2 = /* @__PURE__ */ ee('<div class="none-params svelte-32f1pk"> </div>'), G2 = /* @__PURE__ */ ee('<div class="input-container svelte-32f1pk"><!> <!></div>');
const Q2 = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function bt(e, t) {
  le(t, !0), ze(e, Q2);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = Fe(), a = _n(s), l = /* @__PURE__ */ E(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = G2(), f = B(d);
  {
    var p = (g) => {
      var y = J2();
      me(4), L(g, y);
    };
    ae(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = z(f, 2);
  return gt(
    h,
    19,
    () => c(l),
    (g) => g.id,
    (g, y, w) => {
      Id(g, {
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
      var y = U2(), w = B(y, !0);
      Z(y), $e(() => Re(w, n())), L(g, y);
    }
  ), Z(d), L(e, d), ue(u);
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
var ew = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), tw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ ee('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const rw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Zd(e, t) {
  le(t, !0), ze(e, rw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Bt(e, Ke(
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
        var l = ew();
        L(a, l);
      },
      children: (a, l) => {
        var u = nw(), d = oe(u), f = B(d);
        Le(f, {
          level: 3,
          children: (g, y) => {
            me();
            var w = ke("输出参数");
            L(g, w);
          },
          $$slots: { default: !0 }
        });
        var p = z(f, 2);
        Te(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (g, y) => {
            var w = tw();
            L(g, w);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var h = z(d, 2);
        bt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(Zd, { data: {} }, [], [], !0);
const Ji = (e) => JSON.parse(JSON.stringify(e));
var ow = /* @__PURE__ */ he('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), iw = /* @__PURE__ */ ee('<div class="input-more-item svelte-hwmib9"><!></div>'), sw = /* @__PURE__ */ ee('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), aw = /* @__PURE__ */ ee('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const lw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Bd(e, t) {
  le(t, !0), ze(e, lw);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = Fe(), a = _n(s), l = /* @__PURE__ */ E(() => {
    let k = a?.current?.data?.[o()], S;
    if (k && r().length > 0) {
      let x = k;
      for (let T = 0; T < r().length; T++) {
        const M = r()[T];
        T == r().length - 1 ? S = x[M] : x = x[M].children;
      }
    }
    return { ...n(), ...S };
  });
  const { updateNodeData: u } = it(), d = (k, S) => {
    u(s, (x) => {
      const T = x.data?.[o()];
      if (T && r().length > 0) {
        let M = T;
        for (let I = 0; I < r().length; I++) {
          const R = r()[I];
          I == r().length - 1 ? M[R] = { ...M[R], [k]: S } : M = M[R].children;
        }
      }
      return { [o()]: [...Ji(T)] };
    });
  }, f = (k, S) => {
    const x = S.target.value;
    d(k, x);
  }, p = (k) => {
    const S = k.value;
    d("dataType", S);
  };
  let h;
  const g = () => {
    u(s, (k) => {
      let S = k.data?.[o()];
      if (S && r().length > 0) {
        let x = S;
        for (let T = 0; T < r().length; T++) {
          const M = r()[T];
          T == r().length - 1 ? x.splice(M, 1) : x = x[M].children;
        }
      }
      return { [o()]: [...Ji(S)] };
    }), h?.hide();
  }, y = () => {
    u(s, (k) => {
      let S = k.data?.[o()];
      if (S && r().length > 0) {
        let x = S;
        for (let T = 0; T < r().length; T++) {
          const M = r()[T];
          T == r().length - 1 ? x[M].children ? x[M].children.push({ id: xn(), name: "newParam", dataType: "String" }) : x[M].children = [{ id: xn(), name: "newParam", dataType: "String" }] : x = x[M].children;
        }
      }
      return { [o()]: [...Ji(S)] };
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
  }, C = aw(), $ = oe(C), b = B($);
  {
    var _ = (k) => {
      var S = Ne(), x = oe(S);
      gt(x, 17, r, Tr, (T, M) => {
        me();
        var I = ke(" ");
        L(T, I);
      }), L(k, S);
    };
    ae(b, (k) => {
      r().length > 1 && k(_);
    });
  }
  var P = z(b, 2);
  {
    let k = /* @__PURE__ */ E(() => c(l).nameDisabled === !0);
    Ue(P, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (S) => {
        f("name", S);
      },
      get disabled() {
        return c(k);
      }
    });
  }
  Z($);
  var N = z($, 2), O = B(N);
  {
    let k = /* @__PURE__ */ E(() => c(l).dataTypeItems || Xm), S = /* @__PURE__ */ E(() => c(l).dataType ? [c(l).dataType] : []), x = /* @__PURE__ */ E(() => c(l).dataTypeDisabled === !0);
    ct(O, {
      get items() {
        return c(k);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(S);
      },
      get disabled() {
        return c(x);
      },
      onSelect: p
    });
  }
  var H = z(O, 2);
  {
    var K = (k) => {
      Te(k, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (S, x) => {
          var T = ow();
          L(S, T);
        },
        $$slots: { default: !0 }
      });
    };
    ae(H, (k) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && k(K);
    });
  }
  Z(N);
  var F = z(N, 2), A = B(F);
  return Lt(
    qn(A, {
      placement: "bottom",
      floating: (k) => {
        var S = sw(), x = B(S), T = z(B(x));
        {
          let V = /* @__PURE__ */ E(() => c(l).defaultValue || "");
          je(T, {
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
        Z(x);
        var M = z(x, 2), I = z(B(M));
        {
          let V = /* @__PURE__ */ E(() => c(l).description || "");
          je(I, {
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
        Z(M);
        var R = z(M, 2);
        {
          var j = (V) => {
            var W = iw(), q = B(W);
            Te(q, {
              onclick: g,
              children: (G, D) => {
                me();
                var X = ke("删除");
                L(G, X);
              },
              $$slots: { default: !0 }
            }), Z(W), L(V, W);
          };
          ae(R, (V) => {
            c(l).deleteDisabled !== !0 && V(j);
          });
        }
        Z(S), L(k, S);
      },
      children: (k, S) => {
        Mo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => h = k,
    () => h
  ), Z(F), L(e, C), ue(w);
}
se(
  Bd,
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
var uw = /* @__PURE__ */ ee("<!> <!>", 1), cw = /* @__PURE__ */ ee('<div class="none-params svelte-1oz5kx0"> </div>'), dw = /* @__PURE__ */ ee('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), pw = /* @__PURE__ */ ee('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const fw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Nn(e, t) {
  le(t, !0), ze(e, fw);
  const n = (g, y = dt, w = dt) => {
    var C = Ne(), $ = oe(C);
    gt(
      $,
      19,
      y,
      (b) => `${b.id}_${b.children ? b.children.length : 0}`,
      (b, _, P) => {
        var N = uw(), O = oe(N);
        {
          let F = /* @__PURE__ */ E(() => [...w(), c(P)]);
          Bd(O, {
            get parameter() {
              return c(_);
            },
            get position() {
              return c(F);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var H = z(O, 2);
        {
          var K = (F) => {
            {
              let A = /* @__PURE__ */ E(() => [...w(), c(P)]);
              n(F, () => c(_).children, () => c(A));
            }
          };
          ae(H, (F) => {
            c(_).children && F(K);
          });
        }
        L(b, N);
      },
      (b) => {
        var _ = Ne(), P = oe(_);
        {
          var N = (O) => {
            var H = cw(), K = B(H, !0);
            Z(H), $e(() => Re(K, r())), L(O, H);
          };
          ae(P, (O) => {
            w().length === 0 && O(N);
          });
        }
        L(b, _);
      }
    ), L(g, C);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = Fe(), a = _n(s), l = /* @__PURE__ */ E(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = pw(), f = B(d);
  {
    var p = (g) => {
      var y = dw();
      me(4), L(g, y);
    };
    ae(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = z(f, 2);
  return n(h, () => c(l) || [], () => []), Z(d), L(e, d), ue(u);
}
se(Nn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var hw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), gw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), yw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), ww = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), bw = /* @__PURE__ */ ee('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), xw = /* @__PURE__ */ ee('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const Cw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Rd(e, t) {
  le(t, !0), ze(e, Cw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt(), s = Bn();
  let a = /* @__PURE__ */ Ee(zt([]));
  $n(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: l } = it(), u = (f) => {
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
  Xe(() => {
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
  return Bt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var p = hw();
        L(f, p);
      },
      children: (f, p) => {
        var h = xw(), g = oe(h), y = B(g);
        Le(y, {
          level: 3,
          children: (R, j) => {
            me();
            var V = ke("输入参数");
            L(R, V);
          },
          $$slots: { default: !0 }
        });
        var w = z(y, 2);
        Te(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, j) => {
            var V = gw();
            L(R, V);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var C = z(g, 2);
        bt(C, {});
        var $ = z(C, 2), b = B($);
        Le(b, {
          level: 3,
          children: (R, j) => {
            me();
            var V = ke("图片识别");
            L(R, V);
          },
          $$slots: { default: !0 }
        });
        var _ = z(b, 2);
        Te(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (R, j) => {
            var V = vw();
            L(R, V);
          },
          $$slots: { default: !0 }
        }), Z($);
        var P = z($, 2);
        bt(P, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var N = z(P, 2);
        Le(N, {
          level: 3,
          mt: "10px",
          children: (R, j) => {
            me();
            var V = ke("模型设置");
            L(R, V);
          },
          $$slots: { default: !0 }
        });
        var O = z(N, 4), H = B(O);
        {
          let R = /* @__PURE__ */ E(() => n().llmId ? [n().llmId] : []);
          ct(H, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (j) => {
              const V = j.value;
              l(o, () => ({ llmId: V }));
            },
            get value() {
              return c(R);
            }
          });
        }
        var K = z(H, 2);
        qn(K, {
          placement: "bottom",
          floating: (R) => {
            var j = bw(), V = z(B(j), 2), W = B(V), q = B(W), G = B(q);
            Z(q);
            var D = z(q, 2);
            er(D), D.__input = [mw, l, o], Z(W), Z(V);
            var X = z(V, 2), J = B(X), te = B(J), ne = B(te);
            Z(te);
            var Q = z(te, 2);
            er(Q), Q.__input = [yw, l, o], Z(J), Z(X);
            var fe = z(X, 2), ce = B(fe), re = B(ce), ie = B(re);
            Z(re);
            var pe = z(re, 2);
            er(pe), pe.__input = [ww, l, o], Z(ce), Z(fe), Z(j), $e(() => {
              Re(G, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), Bo(D, n().temperature ?? 0.7), Re(ne, `Top P: ${n().topP ?? 0.9 ?? ""}`), Bo(Q, n().topP ?? 0.9), Re(ie, `Top K: ${n().topK ?? 50 ?? ""}`), Bo(pe, n().topK ?? 50);
            }), L(R, j);
          },
          children: (R, j) => {
            Mo(R, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), Z(O);
        var F = z(O, 4), A = B(F);
        {
          let R = /* @__PURE__ */ E(() => n().systemPrompt || "");
          je(A, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(R);
            },
            oninput: (j) => {
              l(o, { systemPrompt: j.target.value });
            }
          });
        }
        Z(F);
        var k = z(F, 4), S = B(k);
        {
          let R = /* @__PURE__ */ E(() => n().userPrompt || "");
          je(S, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(R);
            },
            oninput: (j) => {
              l(o, { userPrompt: j.target.value });
            }
          });
        }
        Z(k);
        var x = z(k, 2), T = B(x);
        Le(T, {
          level: 3,
          children: (R, j) => {
            me();
            var V = ke("输出参数");
            L(R, V);
          },
          $$slots: { default: !0 }
        });
        var M = z(T, 2);
        {
          let R = /* @__PURE__ */ E(() => n().outType ? [n().outType] : []);
          ct(M, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (j) => {
              u(j.value);
            },
            get value() {
              return c(R);
            }
          });
        }
        Z(x);
        var I = z(x, 2);
        Nn(I, {}), L(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
Yn(["input"]);
se(Rd, { data: {} }, [], [], !0);
var $w = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), kw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ ee('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const Nw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Kd(e, t) {
  le(t, !0), ze(e, Nw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  $n(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Fe(), { addParameter: i } = Qt(), { updateNodeData: s } = it(), a = [
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
  return Bt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = $w();
        L(u, d);
      },
      children: (u, d) => {
        var f = Sw(), p = oe(f), h = B(p);
        Le(h, {
          level: 3,
          children: (K, F) => {
            me();
            var A = ke("输入参数");
            L(K, A);
          },
          $$slots: { default: !0 }
        });
        var g = z(h, 2);
        Te(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (K, F) => {
            var A = kw();
            L(K, A);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = z(p, 2);
        bt(y, {});
        var w = z(y, 2);
        Le(w, {
          level: 3,
          mt: "10px",
          children: (K, F) => {
            me();
            var A = ke("代码");
            L(K, A);
          },
          $$slots: { default: !0 }
        });
        var C = z(w, 4), $ = B(C);
        {
          let K = /* @__PURE__ */ E(() => n().engine ? [n().engine] : ["qlexpress"]);
          ct($, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (F) => {
              const A = F.value;
              s(o, () => ({ engine: A }));
            },
            get value() {
              return c(K);
            }
          });
        }
        Z(C);
        var b = z(C, 4), _ = B(b);
        {
          let K = /* @__PURE__ */ E(() => n().code || "");
          je(_, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (F) => {
              s(o, () => ({ code: F.target.value }));
            },
            get value() {
              return c(K);
            }
          });
        }
        Z(b);
        var P = z(b, 2), N = B(P);
        Le(N, {
          level: 3,
          mt: "10px",
          children: (K, F) => {
            me();
            var A = ke("输出参数");
            L(K, A);
          },
          $$slots: { default: !0 }
        });
        var O = z(N, 2);
        Te(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (K, F) => {
            var A = _w();
            L(K, A);
          },
          $$slots: { default: !0 }
        }), Z(P);
        var H = z(P, 2);
        Nn(H, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Kd, { data: {} }, [], [], !0);
var Ew = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Pw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ ee('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const Tw = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function jd(e, t) {
  le(t, !0), ze(e, Tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt(), { updateNodeData: s } = it();
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
  return Bt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ew();
        L(l, u);
      },
      children: (l, u) => {
        var d = Mw(), f = oe(d), p = B(f);
        Le(p, {
          level: 3,
          children: (P, N) => {
            me();
            var O = ke("输入参数");
            L(P, O);
          },
          $$slots: { default: !0 }
        });
        var h = z(p, 2);
        Te(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, N) => {
            var O = Pw();
            L(P, O);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var g = z(f, 2);
        bt(g, {});
        var y = z(g, 2);
        Le(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (P, N) => {
            me();
            var O = ke("模板内容");
            L(P, O);
          },
          $$slots: { default: !0 }
        });
        var w = z(y, 2), C = B(w);
        {
          let P = /* @__PURE__ */ E(() => n().template || "");
          je(C, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ template: N.target.value }));
            },
            get value() {
              return c(P);
            }
          });
        }
        Z(w);
        var $ = z(w, 2), b = B($);
        Le(b, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            me();
            var O = ke("输出参数");
            L(P, O);
          },
          $$slots: { default: !0 }
        }), Z($);
        var _ = z($, 2);
        Nn(_, {}), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(jd, { data: {} }, [], [], !0);
var Lw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Ow = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ ee('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), zw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Zw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Bw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Rw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Kw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const jw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Yd(e, t) {
  le(t, !0), ze(e, jw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  $n(() => {
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
  ], i = Fe(), { addParameter: s } = Qt(), { updateNodeData: a } = it();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return Bt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Lw();
        L(u, d);
      },
      children: (u, d) => {
        var f = Kw(), p = oe(f), h = B(p);
        Le(h, {
          level: 3,
          children: (D, X) => {
            me();
            var J = ke("输入参数");
            L(D, J);
          },
          $$slots: { default: !0 }
        });
        var g = z(h, 2);
        Te(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (D, X) => {
            var J = Ow();
            L(D, J);
          },
          $$slots: { default: !0 }
        }), Z(p);
        var y = z(p, 2);
        bt(y, {});
        var w = z(y, 2);
        Le(w, {
          level: 3,
          mt: "10px",
          children: (D, X) => {
            me();
            var J = ke("URL 地址");
            L(D, J);
          },
          $$slots: { default: !0 }
        });
        var C = z(w, 2), $ = B(C), b = B($);
        {
          let D = /* @__PURE__ */ E(() => n().method ? [n().method] : ["get"]);
          ct(b, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (X) => {
              const J = X.value;
              a(i, () => ({ method: J }));
            },
            get value() {
              return c(D);
            }
          });
        }
        Z($);
        var _ = z($, 2), P = B(_);
        {
          let D = /* @__PURE__ */ E(() => n().url || "");
          Ue(P, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (X) => {
              a(i, () => ({ url: X.target.value }));
            },
            get value() {
              return c(D);
            }
          });
        }
        Z(_), Z(C);
        var N = z(C, 2), O = B(N);
        Le(O, {
          level: 3,
          children: (D, X) => {
            me();
            var J = ke("Http 头信息");
            L(D, J);
          },
          $$slots: { default: !0 }
        });
        var H = z(O, 2);
        Te(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (D, X) => {
            var J = Vw();
            L(D, J);
          },
          $$slots: { default: !0 }
        }), Z(N);
        var K = z(N, 2);
        bt(K, { dataKeyName: "headers" });
        var F = z(K, 2);
        {
          var A = (D) => {
            var X = Hw(), J = oe(X);
            Le(J, {
              level: 3,
              mt: "10px",
              children: (Ce, Pe) => {
                me();
                var Y = ke("Body");
                L(Ce, Y);
              },
              $$slots: { default: !0 }
            });
            var te = z(J, 2), ne = B(te), Q = B(ne);
            {
              let Ce = /* @__PURE__ */ E(() => !n().bodyType || n().bodyType === "");
              Ue(Q, {
                type: "radio",
                name: "bodyType",
                value: "",
                get checked() {
                  return c(Ce);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            me(), Z(ne);
            var fe = z(ne, 2), ce = B(fe);
            {
              let Ce = /* @__PURE__ */ E(() => n().bodyType === "form-data");
              Ue(ce, {
                type: "radio",
                name: "bodyType",
                value: "form-data",
                get checked() {
                  return c(Ce);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            me(), Z(fe);
            var re = z(fe, 2), ie = B(re);
            {
              let Ce = /* @__PURE__ */ E(() => n().bodyType === "x-www-form-urlencoded");
              Ue(ie, {
                type: "radio",
                name: "bodyType",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(Ce);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            me(), Z(re);
            var pe = z(re, 2), ve = B(pe);
            {
              let Ce = /* @__PURE__ */ E(() => n().bodyType === "json");
              Ue(ve, {
                type: "radio",
                name: "bodyType",
                value: "json",
                get checked() {
                  return c(Ce);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            me(), Z(pe);
            var xe = z(pe, 2), de = B(xe);
            {
              let Ce = /* @__PURE__ */ E(() => n().bodyType === "raw");
              Ue(de, {
                type: "radio",
                name: "bodyType",
                value: "raw",
                get checked() {
                  return c(Ce);
                },
                onchange: (Pe) => {
                  Pe.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            me(), Z(xe), Z(te), L(D, X);
          };
          ae(F, (D) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && D(A);
          });
        }
        var k = z(F, 2);
        {
          var S = (D) => {
            var X = Dw(), J = oe(X), te = B(J);
            Le(te, {
              level: 3,
              children: (fe, ce) => {
                me();
                var re = ke("参数");
                L(fe, re);
              },
              $$slots: { default: !0 }
            });
            var ne = z(te, 2);
            Te(ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (fe, ce) => {
                var re = zw();
                L(fe, re);
              },
              $$slots: { default: !0 }
            }), Z(J);
            var Q = z(J, 2);
            bt(Q, { dataKeyName: "formData" }), L(D, X);
          };
          ae(k, (D) => {
            n().bodyType === "form-data" && D(S);
          });
        }
        var x = z(k, 2);
        {
          var T = (D) => {
            var X = Iw(), J = oe(X), te = B(J);
            Le(te, {
              level: 3,
              children: (fe, ce) => {
                me();
                var re = ke("Body 参数");
                L(fe, re);
              },
              $$slots: { default: !0 }
            });
            var ne = z(te, 2);
            Te(ne, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (fe, ce) => {
                var re = Aw();
                L(fe, re);
              },
              $$slots: { default: !0 }
            }), Z(J);
            var Q = z(J, 2);
            bt(Q, { dataKeyName: "formUrlencoded" }), L(D, X);
          };
          ae(x, (D) => {
            n().bodyType === "x-www-form-urlencoded" && D(T);
          });
        }
        var M = z(x, 2);
        {
          var I = (D) => {
            var X = Zw(), J = B(X);
            je(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (te) => {
                a(i, { bodyJson: te.target.value });
              }
            }), Z(X), L(D, X);
          };
          ae(M, (D) => {
            n().bodyType === "json" && D(I);
          });
        }
        var R = z(M, 2);
        {
          var j = (D) => {
            var X = Bw(), J = B(X);
            je(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (te) => {
                a(i, { bodyRaw: te.target.value });
              }
            }), Z(X), L(D, X);
          };
          ae(R, (D) => {
            n().bodyType === "raw" && D(j);
          });
        }
        var V = z(R, 2), W = B(V);
        Le(W, {
          level: 3,
          mt: "10px",
          children: (D, X) => {
            me();
            var J = ke("输出参数");
            L(D, J);
          },
          $$slots: { default: !0 }
        });
        var q = z(W, 2);
        Te(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (D, X) => {
            var J = Rw();
            L(D, J);
          },
          $$slots: { default: !0 }
        }), Z(V);
        var G = z(V, 2);
        Nn(G, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Yd, { data: {} }, [], [], !0);
var Yw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Xw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qw = /* @__PURE__ */ ee('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Fw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  le(t, !0), ze(e, Fw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt(), s = Bn();
  let a = /* @__PURE__ */ Ee(zt([]));
  $n(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = it();
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
      n(d), v();
    }
  };
  return Bt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Yw();
        L(d, f);
      },
      children: (d, f) => {
        var p = qw(), h = oe(p), g = B(h);
        Le(g, {
          level: 3,
          children: (A, k) => {
            me();
            var S = ke("输入参数");
            L(A, S);
          },
          $$slots: { default: !0 }
        });
        var y = z(g, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, k) => {
            var S = Xw();
            L(A, S);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var w = z(h, 2);
        bt(w, {});
        var C = z(w, 2);
        Le(C, {
          level: 3,
          mt: "10px",
          children: (A, k) => {
            me();
            var S = ke("知识库设置");
            L(A, S);
          },
          $$slots: { default: !0 }
        });
        var $ = z(C, 4), b = B($);
        {
          let A = /* @__PURE__ */ E(() => n().knowledgeId ? [n().knowledgeId] : []);
          ct(b, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (k) => {
              const S = k.value;
              l(o, () => ({ knowledgeId: S }));
            },
            get value() {
              return c(A);
            }
          });
        }
        Z($);
        var _ = z($, 4), P = B(_);
        Ue(P, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const k = A.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), Z(_);
        var N = z(_, 4), O = B(N);
        {
          let A = /* @__PURE__ */ E(() => n().limit || "");
          Ue(O, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (k) => {
              const S = k.target.value;
              l(o, () => ({ limit: S }));
            },
            get value() {
              return c(A);
            }
          });
        }
        Z(N);
        var H = z(N, 2), K = B(H);
        Le(K, {
          level: 3,
          mt: "10px",
          children: (A, k) => {
            me();
            var S = ke("输出参数");
            L(A, S);
          },
          $$slots: { default: !0 }
        }), Z(H);
        var F = z(H, 2);
        Nn(F, {}), L(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(Xd, { data: {} }, [], [], !0);
var Ww = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Jw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uw = /* @__PURE__ */ ee('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Gw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  le(t, !0), ze(e, Gw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt(), s = Bn();
  let a = /* @__PURE__ */ Ee(zt([]));
  $n(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = it();
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
      n(d), v();
    }
  };
  return Bt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Ww();
        L(d, f);
      },
      children: (d, f) => {
        var p = Uw(), h = oe(p), g = B(h);
        Le(g, {
          level: 3,
          children: (A, k) => {
            me();
            var S = ke("输入参数");
            L(A, S);
          },
          $$slots: { default: !0 }
        });
        var y = z(g, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, k) => {
            var S = Jw();
            L(A, S);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var w = z(h, 2);
        bt(w, {});
        var C = z(w, 2);
        Le(C, {
          level: 3,
          mt: "10px",
          children: (A, k) => {
            me();
            var S = ke("搜索引擎设置");
            L(A, S);
          },
          $$slots: { default: !0 }
        });
        var $ = z(C, 4), b = B($);
        {
          let A = /* @__PURE__ */ E(() => n().engine ? [n().engine] : []);
          ct(b, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (k) => {
              const S = k.value;
              l(o, () => ({ engine: S }));
            },
            get value() {
              return c(A);
            }
          });
        }
        Z($);
        var _ = z($, 4), P = B(_);
        Ue(P, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const k = A.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), Z(_);
        var N = z(_, 4), O = B(N);
        Ue(O, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (A) => {
            const k = A.target.value;
            l(o, () => ({ limit: k }));
          }
        }), Z(N);
        var H = z(N, 2), K = B(H);
        Le(K, {
          level: 3,
          mt: "10px",
          children: (A, k) => {
            me();
            var S = ke("输出参数");
            L(A, S);
          },
          $$slots: { default: !0 }
        }), Z(H);
        var F = z(H, 2);
        Nn(F, {}), L(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(qd, { data: {} }, [], [], !0);
var Qw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), eb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tb = /* @__PURE__ */ ee('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const nb = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Fd(e, t) {
  le(t, !0), ze(e, nb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt();
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
  return Bt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Qw();
        L(a, l);
      },
      handle: (a) => {
        In(a, {
          type: "source",
          get position() {
            return we.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = tb(), d = oe(u), f = B(d);
        Le(f, {
          level: 3,
          children: (C, $) => {
            me();
            var b = ke("循环变量");
            L(C, b);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var p = z(d, 2);
        bt(p, { dataKeyName: "loopVars" });
        var h = z(p, 2), g = B(h);
        Le(g, {
          level: 3,
          children: (C, $) => {
            me();
            var b = ke("输出参数");
            L(C, b);
          },
          $$slots: { default: !0 }
        });
        var y = z(g, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (C, $) => {
            var b = eb();
            L(C, b);
          },
          $$slots: { default: !0 }
        }), Z(h);
        var w = z(h, 2);
        bt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(Fd, { data: {} }, [], [], !0);
var rb = /* @__PURE__ */ ee('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), ob = /* @__PURE__ */ ee('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const ib = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Wd(e, t) {
  le(t, !0), ze(e, ib);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = Fe(), a = _n(s), l = /* @__PURE__ */ E(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = it(), d = (k, S) => {
    u(s, (x) => {
      let T = x.data?.[o()];
      return T[r()] = { ...T[r()], [k]: S }, { [o()]: T };
    });
  }, f = (k, S) => {
    const x = S.target.value;
    d(k, x);
  }, p = (k) => {
    const S = k.value;
    d("ref", S);
  }, h = (k) => {
    const S = k.value;
    d("formType", S);
  }, g = (k) => {
    const S = k.value;
    d("contentType", S);
  };
  let y;
  const w = () => {
    u(s, (k) => {
      let S = k.data?.[o()];
      return S.splice(r(), 1), { [o()]: [...S] };
    }), y?.hide();
  };
  let C = Ad(i());
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
  }, b = ob(), _ = oe(b), P = B(_);
  {
    let k = /* @__PURE__ */ E(() => c(l).nameDisabled === !0);
    Ue(P, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(k);
      },
      oninput: (S) => f("name", S)
    });
  }
  Z(_);
  var N = z(_, 2), O = B(N);
  {
    var H = (k) => {
      Ue(k, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (S) => f("value", S)
      });
    }, K = (k) => {
      var S = Ne(), x = oe(S);
      {
        var T = (M) => {
          {
            let I = /* @__PURE__ */ E(() => [c(l).ref]);
            ct(M, {
              get items() {
                return C.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(I);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        ae(
          x,
          (M) => {
            c(l).refType !== "input" && M(T);
          },
          !0
        );
      }
      L(k, S);
    };
    ae(O, (k) => {
      c(l).refType === "fixed" ? k(H) : k(K, !1);
    });
  }
  Z(N);
  var F = z(N, 2), A = B(F);
  return Lt(
    qn(A, {
      placement: "bottom",
      floating: (k) => {
        var S = rb(), x = B(S), T = z(B(x));
        {
          let D = /* @__PURE__ */ E(() => c(l).contentType ? [c(l).contentType] : []);
          ct(T, {
            get items() {
              return la;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(D);
            },
            onSelect: g
          });
        }
        Z(x);
        var M = z(x, 2), I = z(B(M));
        {
          let D = /* @__PURE__ */ E(() => c(l).formType ? [c(l).formType] : []);
          ct(I, {
            get items() {
              return Wm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(D);
            },
            onSelect: h
          });
        }
        Z(M);
        var R = z(M, 2), j = z(B(R));
        je(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (D) => {
            f("formLabel", D);
          },
          get value() {
            return c(l).formLabel;
          }
        }), Z(R);
        var V = z(R, 2), W = z(B(V));
        je(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (D) => {
            f("formDescription", D);
          },
          get value() {
            return c(l).formDescription;
          }
        }), Z(V);
        var q = z(V, 2), G = B(q);
        Te(G, {
          onclick: w,
          children: (D, X) => {
            me();
            var J = ke("删除");
            L(D, J);
          },
          $$slots: { default: !0 }
        }), Z(q), Z(S), L(k, S);
      },
      children: (k, S) => {
        Mo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => y = k,
    () => y
  ), Z(F), L(e, b), ue($);
}
se(
  Wd,
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
var sb = /* @__PURE__ */ ee('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), ab = /* @__PURE__ */ ee('<div class="none-params svelte-1fllp9b"> </div>'), lb = /* @__PURE__ */ ee('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const ub = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function Jd(e, t) {
  le(t, !0), ze(e, ub);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = Fe(), s = _n(i), a = /* @__PURE__ */ E(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = lb(), d = B(u);
  {
    var f = (h) => {
      var g = sb();
      me(4), L(h, g);
    };
    ae(d, (h) => {
      c(a).length !== 0 && h(f);
    });
  }
  var p = z(d, 2);
  return gt(
    p,
    19,
    () => c(a),
    (h) => h.id,
    (h, g, y) => {
      Wd(h, {
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
      var g = ab(), y = B(g, !0);
      Z(g), $e(() => Re(y, n())), L(h, g);
    }
  ), Z(u), L(e, u), ue(l);
}
se(Jd, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
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
var cb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), db = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pb = /* @__PURE__ */ ee('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const fb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ud(e, t) {
  le(t, !0), ze(e, fb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt(), { updateNodeData: s } = it();
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
  return Bt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = cb();
        L(l, u);
      },
      children: (l, u) => {
        var d = pb(), f = oe(d), p = B(f);
        Le(p, {
          level: 3,
          children: (P, N) => {
            me();
            var O = ke("确认数据");
            L(P, O);
          },
          $$slots: { default: !0 }
        });
        var h = z(p, 2);
        Te(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (P, N) => {
            var O = db();
            L(P, O);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var g = z(f, 2);
        Jd(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = z(g, 2);
        Le(y, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            me();
            var O = ke("确认消息");
            L(P, O);
          },
          $$slots: { default: !0 }
        });
        var w = z(y, 4), C = B(w);
        {
          let P = /* @__PURE__ */ E(() => n().message || "");
          je(C, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ message: N.target.value }));
            },
            get value() {
              return c(P);
            }
          });
        }
        Z(w);
        var $ = z(w, 2), b = B($);
        Le(b, {
          level: 3,
          mt: "10px",
          children: (P, N) => {
            me();
            var O = ke("输出参数");
            L(P, O);
          },
          $$slots: { default: !0 }
        }), Z($);
        var _ = z($, 2);
        Nn(_, { placeholder: "" }), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Ud, { data: {} }, [], [], !0);
const hb = {
  startNode: Hd,
  codeNode: Kd,
  confirmNode: Ud,
  llmNode: Rd,
  templateNode: jd,
  httpNode: Yd,
  knowledgeNode: Xd,
  searchEngineNode: qd,
  loopNode: Fd,
  endNode: Zd
};
var gb = /* @__PURE__ */ ee("<!> ", 1);
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
  return Te(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var f = gb(), p = oe(f);
      Ks(p, n);
      var h = z(p);
      $e(() => Re(h, ` ${r() ?? ""}`)), L(u, f);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se(xs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var vb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), mb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), yb = /* @__PURE__ */ ee('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
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
  ], s = [], a = Bn(), l = a.customNodes;
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
  var u = yb(), d = B(u), f = B(d), p = B(f);
  wd(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (C) => {
      U(n, C.value.toString(), !0);
    }
  }), Z(f);
  var h = z(f, 2), g = B(h);
  gt(g, 21, () => o, Tr, (C, $) => {
    xs(C, Ke(() => c($)));
  }), Z(g);
  var y = z(g, 2);
  gt(y, 21, () => s, Tr, (C, $) => {
    xs(C, Ke(() => c($)));
  }), Z(y), Z(h), Z(d);
  var w = z(d, 2);
  Te(w, {
    onclick: () => {
      U(r, c(r) ? "" : "show", !0);
    },
    children: (C, $) => {
      var b = Ne(), _ = oe(b);
      {
        var P = (O) => {
          var H = vb();
          L(O, H);
        }, N = (O) => {
          var H = mb();
          L(O, H);
        };
        ae(_, (O) => {
          c(r) === "show" ? O(P) : O(N, !1);
        });
      }
      L(C, b);
    },
    $$slots: { default: !0 }
  }), Z(u), $e(() => {
    Nt(u, 1, `tf-toolbar ${c(r) ?? ""}`), pt(g, `display: ${c(n) === "base" ? "flex" : "none"}`), pt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), L(e, u), ue();
}
se(Gd, {}, [], [], !0);
const wb = () => ({ getNode: (e) => Oe.getNode(e) }), bb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Oe.updateNodes((n) => {
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
} }), xb = () => ({ getEdgesByTarget: (e) => Oe.getEdges().filter((t) => t.target === e) });
var Cb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $b = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), kb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), _b = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Sb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), Nb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Eb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Pb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mb = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), Tb = /* @__PURE__ */ ee("<!> <!> <div></div> <!>", 1);
const Lb = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Qd(e, t) {
  le(t, !0), ze(e, Lb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = Qt(), s = it(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, C) => {
    l({ [w]: C.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = Bn().customNodes[t.type];
  p.render?.(f, d, s);
  const h = p.forms;
  let g;
  Xe(() => {
    n().expand && g && g.append(f);
  }), Xe(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), Xe(() => {
    !n().parameters && p.parameters && l({
      parameters: co(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), Xe(() => {
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
      var b = Ne(), _ = oe(b);
      Ks(_, () => p.icon), L($, b);
    };
    let C = /* @__PURE__ */ E(() => ({ ...n(), description: p.description }));
    Bt(e, Ke(
      {
        get data() {
          return c(C);
        }
      },
      () => r,
      {
        icon: w,
        children: ($, b) => {
          var _ = Tb(), P = oe(_);
          {
            var N = (k) => {
              var S = $b(), x = oe(S), T = B(x);
              Le(T, {
                level: 3,
                children: (j, V) => {
                  me();
                  var W = ke("输入参数");
                  L(j, W);
                },
                $$slots: { default: !0 }
              });
              var M = z(T, 2);
              {
                var I = (j) => {
                  Te(j, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (V, W) => {
                      var q = Cb();
                      L(V, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(M, (j) => {
                  p.parametersAddEnable !== !1 && j(I);
                });
              }
              Z(x);
              var R = z(x, 2);
              bt(R, {}), L(k, S);
            };
            ae(P, (k) => {
              p.parametersEnable !== !1 && k(N);
            });
          }
          var O = z(P, 2);
          {
            var H = (k) => {
              var S = Ne(), x = oe(S);
              gt(x, 17, () => h, Tr, (T, M) => {
                var I = Ne(), R = oe(I);
                {
                  var j = (W) => {
                    var q = kb(), G = oe(q), D = B(G, !0);
                    Z(G);
                    var X = z(G, 2), J = B(X);
                    {
                      let te = /* @__PURE__ */ E(() => n()[c(M).name] || c(M).defaultValue);
                      Ue(J, Ke(
                        {
                          get placeholder() {
                            return c(M).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(te);
                          }
                        },
                        () => c(M).attrs,
                        {
                          onchange: (ne) => {
                            u(c(M).name, ne);
                          }
                        }
                      ));
                    }
                    Z(X), $e(() => Re(D, c(M).label)), L(W, q);
                  }, V = (W) => {
                    var q = Ne(), G = oe(q);
                    {
                      var D = (J) => {
                        var te = _b(), ne = oe(te), Q = B(ne, !0);
                        Z(ne);
                        var fe = z(ne, 2), ce = B(fe);
                        {
                          let re = /* @__PURE__ */ E(() => n()[c(M).name] || c(M).defaultValue);
                          je(ce, Ke(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(M).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(re);
                              }
                            },
                            () => c(M).attrs,
                            {
                              onchange: (ie) => {
                                u(c(M).name, ie);
                              }
                            }
                          ));
                        }
                        Z(fe), $e(() => Re(Q, c(M).label)), L(J, te);
                      }, X = (J) => {
                        var te = Ne(), ne = oe(te);
                        {
                          var Q = (ce) => {
                            var re = Sb(), ie = oe(re), pe = B(ie, !0);
                            Z(ie);
                            var ve = z(ie, 2), xe = B(ve), de = B(xe), Ce = B(de);
                            Z(de);
                            var Pe = z(de, 2), Y = (Ae) => l({ [c(M).name]: parseFloat(Ae.target.value) });
                            et(
                              Pe,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(M).attrs,
                                value: n()[c(M).name] ?? c(M).defaultValue,
                                oninput: Y
                              }),
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), Z(xe), Z(ve), $e(() => {
                              Re(pe, c(M).label), Re(Ce, `${c(M).description ?? ""}: ${n()[c(M).name] ?? c(M).defaultValue ?? ""}`);
                            }), L(ce, re);
                          }, fe = (ce) => {
                            var re = Ne(), ie = oe(re);
                            {
                              var pe = (xe) => {
                                var de = Nb(), Ce = oe(de), Pe = B(Ce, !0);
                                Z(Ce);
                                var Y = z(Ce, 2), Ae = B(Y);
                                {
                                  let Ve = /* @__PURE__ */ E(() => c(M).options || []), He = /* @__PURE__ */ E(() => n()[c(M).name] ? [n()[c(M).name]] : [c(M).defaultValue]);
                                  ct(Ae, {
                                    get items() {
                                      return c(Ve);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(M).placeholder;
                                    },
                                    onSelect: (Ze) => {
                                      const tt = Ze.value;
                                      l({ [c(M).name]: tt });
                                    },
                                    get value() {
                                      return c(He);
                                    }
                                  });
                                }
                                Z(Y), $e(() => Re(Pe, c(M).label)), L(xe, de);
                              }, ve = (xe) => {
                                var de = Ne(), Ce = oe(de);
                                {
                                  var Pe = (Ae) => {
                                    var Ve = Eb(), He = oe(Ve), Ze = B(He, !0);
                                    Z(He);
                                    var tt = z(He, 2), Et = B(tt);
                                    {
                                      let We = /* @__PURE__ */ E(() => c(M).chosen?.buttonText);
                                      yd(Et, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(M).placeholder;
                                        },
                                        get buttonText() {
                                          return c(We);
                                        },
                                        onChosen: (Ie, ge, Be) => {
                                          c(M).chosen?.onChosen?.(l, Ie, ge, Be);
                                        },
                                        get value() {
                                          return n()[c(M).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(M).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    Z(tt), $e(() => Re(Ze, c(M).label)), L(Ae, Ve);
                                  }, Y = (Ae) => {
                                    var Ve = Ne(), He = oe(Ve);
                                    {
                                      var Ze = (tt) => {
                                        Le(tt, Ke({ level: 3, mt: "10px" }, () => c(M).attrs, {
                                          children: (Et, We) => {
                                            me();
                                            var Ie = ke();
                                            $e(() => Re(Ie, c(M).label)), L(Et, Ie);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        He,
                                        (tt) => {
                                          c(M).type === "heading" && tt(Ze);
                                        },
                                        !0
                                      );
                                    }
                                    L(Ae, Ve);
                                  };
                                  ae(
                                    Ce,
                                    (Ae) => {
                                      c(M).type === "chosen" ? Ae(Pe) : Ae(Y, !1);
                                    },
                                    !0
                                  );
                                }
                                L(xe, de);
                              };
                              ae(
                                ie,
                                (xe) => {
                                  c(M).type === "select" ? xe(pe) : xe(ve, !1);
                                },
                                !0
                              );
                            }
                            L(ce, re);
                          };
                          ae(
                            ne,
                            (ce) => {
                              c(M).type === "slider" ? ce(Q) : ce(fe, !1);
                            },
                            !0
                          );
                        }
                        L(J, te);
                      };
                      ae(
                        G,
                        (J) => {
                          c(M).type === "textarea" ? J(D) : J(X, !1);
                        },
                        !0
                      );
                    }
                    L(W, q);
                  };
                  ae(R, (W) => {
                    c(M).type === "input" ? W(j) : W(V, !1);
                  });
                }
                L(T, I);
              }), L(k, S);
            };
            ae(O, (k) => {
              h && k(H);
            });
          }
          var K = z(O, 2);
          Lt(K, (k) => g = k, () => g);
          var F = z(K, 2);
          {
            var A = (k) => {
              var S = Mb(), x = oe(S), T = B(x);
              Le(T, {
                level: 3,
                mt: "10px",
                children: (j, V) => {
                  me();
                  var W = ke("输出参数");
                  L(j, W);
                },
                $$slots: { default: !0 }
              });
              var M = z(T, 2);
              {
                var I = (j) => {
                  Te(j, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (V, W) => {
                      var q = Pb();
                      L(V, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(M, (j) => {
                  p.outputDefsAddEnable !== !1 && j(I);
                });
              }
              Z(x);
              var R = z(x, 2);
              Nn(R, {}), L(k, S);
            };
            ae(F, (k) => {
              p.outputDefsEnable !== !1 && k(A);
            });
          }
          $e(() => {
            pt(K, p.rootStyle || ""), Nt(K, 1, kn(p.rootClass), "svelte-qt4m0r");
          }), L($, _);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(y);
}
se(Qd, { data: {} }, [], [], !0);
const Ob = () => ({ updateEdgeData: (e, t, n) => {
  const r = Oe.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Oe.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Vb = () => ({ deleteEdge: (e) => {
  Oe.removeEdge(e);
} }), Hb = () => {
  const e = (t, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === t && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (t) => {
    const n = Oe.getEdges(), r = [];
    let o = e(t, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Oe.getNode(s.target)), i.push(...e(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, zb = () => ({ getNodeRelativePosition: (e) => {
  let t = Oe.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Oe.getNode(t.parentId) : t = void 0;
  return n;
} });
function Db(e) {
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
function Ab(e) {
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
function Ib(e) {
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
function Cs(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Cs(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Cs(e[r], t));
    return n;
  }
  return e;
}
const Zb = () => (it(), { copyHandler: async (e) => {
  const t = Oe.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Oe.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(Db), o = n.map(Ib), i = JSON.stringify({
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
  const r = Ab(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${xn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, f = Cs(l.data, i);
    s.push({
      ...l,
      id: u,
      parentId: d,
      data: f,
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
      id: `edge_${xn()}`,
      source: u,
      target: d
    });
  }
  Oe.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Oe.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Nl = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var Bb = /* @__PURE__ */ ee('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Rb = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), Kb = /* @__PURE__ */ ee('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const jb = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function ep(e, t) {
  le(t, !0), ze(e, jb);
  const n = m(t, "onInit", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = it();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Ee(!1), s = /* @__PURE__ */ Ee(null);
  const { updateEdgeData: a } = Ob(), l = (q) => {
    q.preventDefault(), q.dataTransfer && (q.dataTransfer.dropEffect = "move");
  }, u = (q) => {
    q.preventDefault();
    const G = o.screenToFlowPosition({ x: q.clientX - 250, y: q.clientY - 100 }), D = q.dataTransfer?.getData("application/tinyflow");
    if (!D)
      return;
    const X = JSON.parse(D), J = { id: `node_${xn()}`, position: G, data: {}, ...X };
    Oe.addNode(J), Oe.selectNodeOnly(J.id);
  }, { getNode: d } = wb(), f = (q) => {
    const G = d(q.source), D = d(q.target);
    if (q.sourceHandle === "loop_handle" || G.parentId) {
      const X = o.getEdges();
      for (let J of X)
        if (J.target === q.target) {
          const te = d(J.source);
          if (q.sourceHandle === "loop_handle" && te.parentId !== G.id || G.parentId && te.parentId !== G.parentId)
            return !1;
        }
    }
    return !(!G.parentId && D.parentId && D.parentId !== G.id);
  }, { getNodesFromSource: p } = Hb(), { getNodeRelativePosition: h } = zb(), { ensureParentInNodesBefore: g } = bb(), y = (q, G) => {
    if (!G.isValid)
      return;
    const D = G.toNode;
    if (D.parentId)
      return;
    const X = G.fromNode, J = G.fromHandle, te = { position: { ...D.position } };
    if (J.id === "loop_handle" ? te.parentId = X.id : X.parentId && (te.parentId = X.parentId), te.parentId) {
      const { x: ne, y: Q } = h(te.parentId);
      te.position = { x: D.position.x - ne, y: D.position.y - Q }, o.updateNode(D.id, te), p(D.id).forEach((fe) => {
        o.updateNode(fe.id, {
          parentId: te.parentId,
          position: { x: fe.position.x - ne, y: fe.position.y - Q }
        });
      }), g(te.parentId, D.id);
    }
    setTimeout(() => {
      Oe.getEdges().forEach((ne) => {
        ne.target === D.id && ne.source == X.id && (U(i, !0), U(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: w } = xb(), C = (q) => {
    q.edges.forEach((G) => {
      G.id === c(s)?.id && (U(s, null), U(i, !1));
      const D = d(G.target);
      if (D && D.parentId) {
        const X = w(G.target), { x: J, y: te } = h(D.parentId);
        if (X.length === 0)
          o.updateNode(D.id, {
            parentId: void 0,
            position: { x: D.position.x + J, y: D.position.y + te }
          }), p(D.id).forEach((ne) => {
            o.updateNode(ne.id, {
              parentId: void 0,
              position: { x: ne.position.x + J, y: ne.position.y + te }
            });
          });
        else {
          let ne = !1;
          for (let Q = 0; Q < X.length; Q++) {
            const fe = X[Q], ce = d(fe.source);
            if (ce.parentId || ce.type === "loopNode") {
              ne = !0;
              break;
            }
          }
          ne || (o.updateNode(D.id, {
            parentId: void 0,
            position: { x: D.position.x + J, y: D.position.y + te }
          }), p(D.id).forEach((Q) => {
            o.updateNode(Q.id, {
              parentId: void 0,
              position: { x: Q.position.x + J, y: Q.position.y + te }
            });
          }));
        }
      }
    });
  }, { deleteEdge: $ } = Vb(), b = (q, G) => {
  }, _ = (q) => {
  }, { copyHandler: P, pasteHandler: N } = Zb(), O = (q) => {
    Nl() || ((q.ctrlKey || q.metaKey) && q.key === "c" && (q.preventDefault(), P(q)), (q.ctrlKey || q.metaKey) && q.key === "a" && (q.preventDefault(), Oe.updateNodes((G) => G.map((D) => ({ ...D, selected: !0 }))), Oe.updateEdges((G) => G.map((D) => ({ ...D, selected: !0 })))));
  }, H = async (q) => {
    Nl() || N(q);
  };
  $n(() => {
    window.addEventListener("keydown", O), window.addEventListener("paste", H);
  }), yo(() => {
    window.removeEventListener("keydown", O), window.removeEventListener("paste", H);
  });
  const K = {
    // ...nodeTypes
  }, F = Bn().customNodes;
  if (F)
    for (let q of Object.keys(F))
      K[q] = Qd;
  const A = Bn().onDataChange;
  Xe(() => {
    A?.({
      nodes: Oe.getNodes(),
      edges: Oe.getEdges(),
      viewport: Oe.getViewport()
    });
  });
  var k = {
    get onInit() {
      return n();
    },
    set onInit(q) {
      n(q), v();
    }
  }, S = Kb(), x = B(S), T = Oe.getNodes, M = Oe.setNodes, I = Oe.getEdges, R = Oe.setEdges, j = Oe.getViewport, V = Oe.setViewport;
  {
    let q = /* @__PURE__ */ E(() => ({ ...hb, ...K })), G = /* @__PURE__ */ E(() => ({
      markerEnd: { type: io.ArrowClosed, width: 20, height: 20 }
    }));
    rd(x, {
      get nodeTypes() {
        return c(q);
      },
      get nodes() {
        return T();
      },
      set nodes(D) {
        M(D);
      },
      get edges() {
        return I();
      },
      set edges(D) {
        R(D);
      },
      get viewport() {
        return j();
      },
      set viewport(D) {
        V(D);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: f,
      onconnectend: y,
      onconnectstart: b,
      onconnect: _,
      connectionRadius: 50,
      onedgeclick: (D) => {
        U(i, !0), U(s, D.edge, !0);
      },
      onbeforeconnect: (D) => ({ ...D, id: xn() }),
      ondelete: C,
      onclick: (D) => {
        const X = D.target;
        X.classList.contains("svelte-flow__edge-interaction") || X.classList.contains("panel-content") || X.closest(".panel-content") || (U(i, !1), U(s, null));
      },
      get defaultEdgeOptions() {
        return c(G);
      },
      children: (D, X) => {
        var J = Rb(), te = oe(J);
        fd(te, {});
        var ne = z(te, 2);
        cd(ne, {});
        var Q = z(ne, 2);
        gd(Q, {});
        var fe = z(Q, 2);
        {
          var ce = (re) => {
            So(re, {
              children: (ie, pe) => {
                var ve = Bb(), xe = z(B(ve), 4), de = B(xe);
                {
                  let Ae = /* @__PURE__ */ E(() => c(s)?.data?.condition);
                  je(de, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ae);
                    },
                    onchange: (Ve) => {
                      c(s) && a(c(s).id, { condition: Ve.target?.value });
                    }
                  });
                }
                Z(xe);
                var Ce = z(xe, 2), Pe = B(Ce);
                Te(Pe, {
                  onclick: () => {
                    $(c(s)?.id), U(i, !1);
                  },
                  children: (Ae, Ve) => {
                    me();
                    var He = ke("删除");
                    L(Ae, He);
                  },
                  $$slots: { default: !0 }
                });
                var Y = z(Pe, 2);
                Te(Y, {
                  primary: !0,
                  onclick: () => {
                    U(i, !1);
                  },
                  children: (Ae, Ve) => {
                    me();
                    var He = ke("保存");
                    L(Ae, He);
                  },
                  $$slots: { default: !0 }
                }), Z(Ce), Z(ve), L(ie, ve);
              },
              $$slots: { default: !0 }
            });
          };
          ae(fe, (re) => {
            c(i) && re(ce);
          });
        }
        L(D, J);
      },
      $$slots: { default: !0 }
    });
  }
  var W = z(x, 2);
  return Gd(W, {}), Z(S), L(e, S), ue(k);
}
se(ep, { onInit: {} }, [], [], !0);
function Yb(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Oe.init(o?.nodes || [], o?.edges || []), Sr("tinyflow_options", n());
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
  return od(e, {
    children: (s, a) => {
      ep(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue(i);
}
customElements.define("tinyflow-component", se(Yb, { options: {}, onInit: {} }, [], [], !1));
const qb = /* @__PURE__ */ np({
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
    const n = e, r = rp(null);
    let o = null;
    return op(() => {
      r.value && (o = new Jm({
        ...n,
        element: r.value
      }));
    }), ip(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (ap(), sp("div", {
      ref_key: "divRef",
      ref: r,
      class: up(["tinyflow", s.className]),
      style: lp(s.style)
    }, null, 6));
  }
});
export {
  qb as Tinyflow
};
//# sourceMappingURL=index.js.map
