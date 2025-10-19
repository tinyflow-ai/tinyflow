const rf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(rf);
const gi = 1, vi = 2, Tl = 4, of = 8, sf = 16, af = 1, lf = 2, Dl = 4, cf = 8, uf = 16, Al = 1, df = 2, Ol = "[", pi = "[!", Ns = "]", or = {}, rt = Symbol(), ff = "http://www.w3.org/1999/xhtml", hf = "http://www.w3.org/2000/svg", gf = "@attach", Ml = !1;
var ho = Array.isArray, vf = Array.prototype.indexOf, Ps = Array.from, qo = Object.keys, Er = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, Hl = Object.getOwnPropertyDescriptors, Ll = Object.prototype, pf = Array.prototype, mi = Object.getPrototypeOf, ma = Object.isExtensible;
function Zr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function mf(e) {
  return e();
}
function jo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function yf() {
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
function go(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Dt = 2, $s = 4, yi = 8, Rr = 16, kn = 32, Kn = 64, Ts = 128, zt = 256, Go = 512, vt = 1024, Rt = 2048, Zn = 4096, Xt = 8192, ur = 16384, Ds = 32768, dr = 65536, ya = 1 << 17, wf = 1 << 18, fr = 1 << 19, Vl = 1 << 20, Qi = 1 << 21, As = 1 << 22, Qn = 1 << 23, an = Symbol("$state"), Os = Symbol("legacy props"), _f = Symbol(""), Ms = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), xf = 1, wi = 3, hr = 8;
function Hs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function bf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Cf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function kf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ef(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Nf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Pf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function $f() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Tf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Df() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Af() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function vo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Of() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Mf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let me = !1;
function wt(e) {
  me = e;
}
let Ee;
function Qe(e) {
  if (e === null)
    throw vo(), or;
  return Ee = e;
}
function xn() {
  return Qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(Ee)
  );
}
function I(e) {
  if (me) {
    if (/* @__PURE__ */ Gt(Ee) !== null)
      throw vo(), or;
    Ee = e;
  }
}
function pe(e = 1) {
  if (me) {
    for (var t = e, n = Ee; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n);
    Ee = n;
  }
}
function Uo(e = !0) {
  for (var t = 0, n = Ee; ; ) {
    if (n.nodeType === hr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ns) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ol || r === pi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n)
    );
    e && n.remove(), n = o;
  }
}
function Il(e) {
  if (!e || e.nodeType !== hr)
    throw vo(), or;
  return (
    /** @type {Comment} */
    e.data
  );
}
function zl(e) {
  return e === this.v;
}
function Rl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Bl(e) {
  return !Rl(e, this.v);
}
let Br = !1, Hf = !1;
function Lf() {
  Br = !0;
}
const Vf = [];
function Fl(e, t = !1, n = !1) {
  return Ro(e, /* @__PURE__ */ new Map(), "", Vf, null, n);
}
function Ro(e, t, n, r, o = null, i = !1) {
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
    if (ho(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = Ro(c, t, n, r, null, i));
      }
      return a;
    }
    if (mi(e) === Ll) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Ro(
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
      return Ro(
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
let Ke = null;
function Sr(e) {
  Ke = e;
}
function In(e) {
  return (
    /** @type {T} */
    Kl().get(e)
  );
}
function Nr(e, t) {
  return Kl().set(e, t), t;
}
function ce(e, t = !1, n) {
  Ke = {
    p: Ke,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Br && !t ? { s: null, u: null, $: [] } : null
  };
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    Ke
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ac(r);
  }
  return e !== void 0 && (t.x = e), Ke = t.p, e ?? /** @type {T} */
  {};
}
function po() {
  return !Br || Ke !== null && Ke.l === null;
}
function Kl(e) {
  return Ke === null && Hs(), Ke.c ??= new Map(If(Ke) || void 0);
}
function If(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
const zf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let An = [], Pr = [];
function Zl() {
  var e = An;
  An = [], jo(e);
}
function Yl() {
  var e = Pr;
  Pr = [], jo(e);
}
function Rf() {
  return An.length > 0 || Pr.length > 0;
}
function gr(e) {
  if (An.length === 0 && !Ur) {
    var t = An;
    queueMicrotask(() => {
      t === An && Zl();
    });
  }
  An.push(e);
}
function Bf(e) {
  Pr.length === 0 && zf(Yl), Pr.push(e);
}
function Ff() {
  An.length > 0 && Zl(), Pr.length > 0 && Yl();
}
const Kf = /* @__PURE__ */ new WeakMap();
function Wl(e) {
  var t = Se;
  if (t === null)
    return Te.f |= Qn, e;
  if ((t.f & Ds) === 0) {
    if ((t.f & Ts) === 0)
      throw !t.parent && e instanceof Error && Xl(e), e;
    t.b.error(e);
  } else
    $r(e, t);
}
function $r(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ts) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Xl(e), e;
}
function Xl(e) {
  const t = Kf.get(e);
  t && (Er(e, "message", {
    value: t.message
  }), Er(e, "stack", {
    value: t.stack
  }));
}
const Vi = /* @__PURE__ */ new Set();
let Ue = null, es = /* @__PURE__ */ new Set(), ir = [], _i = null, ts = !1, Ur = !1;
class ln {
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
  #f = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #u = [];
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
    ir = [];
    for (const o of t)
      this.#h(o);
    if (this.#s.length === 0 && this.#a === 0) {
      this.#g();
      var n = this.#n, r = this.#o;
      this.#n = [], this.#o = [], this.#l = [], Ue = null, wa(n), wa(r), Ue === null ? Ue = this : Vi.delete(this), this.#i?.resolve();
    } else
      this.#c(this.#n), this.#c(this.#o), this.#c(this.#l);
    for (const o of this.#s)
      _r(o);
    for (const o of this.#r)
      _r(o);
    this.#s = [], this.#r = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #h(t) {
    t.f ^= vt;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (kn | Kn)) !== 0, i = o && (r & vt) !== 0, s = i || (r & Xt) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (o)
          n.f ^= vt;
        else if ((r & $s) !== 0)
          this.#o.push(n);
        else if ((r & vt) === 0)
          if ((r & As) !== 0) {
            var a = n.b?.is_pending() ? this.#r : this.#s;
            a.push(n);
          } else bi(n) && ((n.f & Rr) !== 0 && this.#l.push(n), _r(n));
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
      ((n.f & Rt) !== 0 ? this.#f : this.#u).push(n), Et(n, vt);
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
    Ue = this;
  }
  deactivate() {
    Ue = null;
    for (const t of es)
      if (es.delete(t), t(), Ue !== null)
        break;
  }
  neuter() {
    this.#d = !0;
  }
  flush() {
    ir.length > 0 ? ql() : this.#g(), Ue === this && (this.#a === 0 && Vi.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #g() {
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
      for (const t of this.#f)
        Et(t, Rt), Tr(t);
      for (const t of this.#u)
        Et(t, Zn), Tr(t);
      this.#n = [], this.#o = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#i ??= yf()).promise;
  }
  static ensure() {
    if (Ue === null) {
      const t = Ue = new ln();
      Vi.add(Ue), Ur || ln.enqueue(() => {
        Ue === t && t.flush();
      });
    }
    return Ue;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    gr(t);
  }
}
function m(e) {
  var t = Ur;
  Ur = !0;
  try {
    for (var n; ; ) {
      if (Ff(), ir.length === 0 && !Rf() && (Ue?.flush(), ir.length === 0))
        return _i = null, /** @type {T} */
        n;
      ql();
    }
  } finally {
    Ur = t;
  }
}
function ql() {
  var e = wr;
  ts = !0;
  try {
    var t = 0;
    for (Ca(!0); ir.length > 0; ) {
      var n = ln.ensure();
      if (t++ > 1e3) {
        var r, o;
        Zf();
      }
      n.process(ir), Ln.clear();
    }
  } finally {
    ts = !1, Ca(e), _i = null;
  }
}
function Zf() {
  try {
    Sf();
  } catch (e) {
    $r(e, _i);
  }
}
let Gn = null;
function wa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ur | Xt)) === 0 && bi(r) && (Gn = [], _r(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? fc(r) : r.fn = null), Gn?.length > 0)) {
        Ln.clear();
        for (const o of Gn)
          _r(o);
        Gn = [];
      }
    }
    Gn = null;
  }
}
function Tr(e) {
  for (var t = _i = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ts && t === Se && (n & Rr) !== 0)
      return;
    if ((n & (Kn | kn)) !== 0) {
      if ((n & vt) === 0) return;
      t.f ^= vt;
    }
  }
  ir.push(t);
}
function jl(e) {
  let t = 0, n = zn(0), r;
  return () => {
    rh() && (u(n), yo(() => (t === 0 && (r = ut(() => e(() => Jr(n)))), t += 1, () => {
      gr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Jr(n));
      });
    })));
  };
}
var Yf = dr | fr | Ts;
function Wf(e, t, n) {
  new Xf(e, t, n);
}
class Xf {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #a = me ? Ee : null;
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
  #f = 0;
  #u = 0;
  #h = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #c = null;
  #g = () => {
    this.#c && Dr(this.#c, this.#f);
  };
  #y = jl(() => (this.#c = zn(this.#f), () => {
    this.#c = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#i = n, this.#d = r, this.parent = /** @type {Effect} */
    Se.b, this.#t = !!this.#i.pending, this.#s = Yn(() => {
      if (Se.b = this, me) {
        const o = this.#a;
        xn(), /** @type {Comment} */
        o.nodeType === hr && /** @type {Comment} */
        o.data === pi ? this.#_() : this.#w();
      } else {
        try {
          this.#r = ct(() => r(this.#e));
        } catch (o) {
          this.error(o);
        }
        this.#u > 0 ? this.#p() : this.#t = !1;
      }
    }, Yf), me && (this.#e = Ee);
  }
  #w() {
    try {
      this.#r = ct(() => this.#d(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #_() {
    const t = this.#i.pending;
    t && (this.#n = ct(() => t(this.#e)), ln.enqueue(() => {
      this.#r = this.#v(() => (ln.ensure(), ct(() => this.#d(this.#e)))), this.#u > 0 ? this.#p() : (Vn(
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
  #v(t) {
    var n = Se, r = Te, o = Ke;
    Bt(this.#s), Ct(this.#s), Sr(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return Wl(i), null;
    } finally {
      Bt(n), Ct(r), Sr(o);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#r !== null && (this.#l = document.createDocumentFragment(), qf(this.#r, this.#l)), this.#n === null && (this.#n = ct(() => t(this.#e)));
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
    this.#u += t, this.#u === 0 && (this.#t = !1, this.#n && Vn(this.#n, () => {
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
    this.#m(t), this.#f += t, es.add(this.#g);
  }
  get_effect_pending() {
    return this.#y(), u(
      /** @type {Source<number>} */
      this.#c
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#i.onerror;
    let r = this.#i.failed;
    if (this.#h || !n && !r)
      throw t;
    this.#r && (ot(this.#r), this.#r = null), this.#n && (ot(this.#n), this.#n = null), this.#o && (ot(this.#o), this.#o = null), me && (Qe(
      /** @type {TemplateNode} */
      this.#a
    ), pe(), Qe(Uo()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Mf();
        return;
      }
      o = !0, i && Af(), ln.ensure(), this.#f = 0, this.#o !== null && Vn(this.#o, () => {
        this.#o = null;
      }), this.#t = this.has_pending_snippet(), this.#r = this.#v(() => (this.#h = !1, ct(() => this.#d(this.#e)))), this.#u > 0 ? this.#p() : this.#t = !1;
    };
    var a = Te;
    try {
      Ct(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      $r(l, this.#s && this.#s.parent);
    } finally {
      Ct(a);
    }
    r && gr(() => {
      this.#o = this.#v(() => {
        this.#h = !0;
        try {
          return ct(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return $r(
            l,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        } finally {
          this.#h = !1;
        }
      });
    });
  }
}
function qf(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(n)
    );
    t.append(n), n = o;
  }
}
function Gl(e, t, n) {
  const r = po() ? mo : Ls;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = Ue, i = (
    /** @type {Effect} */
    Se
  ), s = jf(), a = me;
  Promise.all(t.map((l) => /* @__PURE__ */ Gf(l))).then((l) => {
    o?.activate(), s();
    try {
      n([...e.map(r), ...l]);
    } catch (c) {
      (i.f & ur) === 0 && $r(c, i);
    }
    a && wt(!1), o?.deactivate(), Ul();
  }).catch((l) => {
    $r(l, i);
  });
}
function jf() {
  var e = Se, t = Te, n = Ke, r = Ue, o = me;
  if (o)
    var i = Ee;
  return function() {
    Bt(e), Ct(t), Sr(n), r?.activate(), o && (wt(!0), Qe(i));
  };
}
function Ul() {
  Bt(null), Ct(null), Sr(null);
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  var t = Dt | Rt, n = Te !== null && (Te.f & Dt) !== 0 ? (
    /** @type {Derived} */
    Te
  ) : null;
  return Se === null || n !== null && (n.f & zt) !== 0 ? t |= zt : Se.f |= fr, {
    ctx: Ke,
    deps: null,
    effects: null,
    equals: zl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      rt
    ),
    wv: 0,
    parent: n ?? Se,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Gf(e, t) {
  let n = (
    /** @type {Effect | null} */
    Se
  );
  n === null && bf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = zn(
    /** @type {V} */
    rt
  ), s = null, a = !Te;
  return ih(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (g) {
      l = Promise.reject(g);
    }
    var c = () => l;
    o = s?.then(c, c) ?? Promise.resolve(l), s = o;
    var d = (
      /** @type {Batch} */
      Ue
    ), h = r.is_pending();
    a && (r.update_pending_count(1), h || d.increment());
    const f = (g, v = void 0) => {
      s = null, h || d.activate(), v ? v !== Ms && (i.f |= Qn, Dr(i, v)) : ((i.f & Qn) !== 0 && (i.f ^= Qn), Dr(i, g)), a && (r.update_pending_count(-1), h || d.decrement()), Ul();
    };
    if (o.then(f, (g) => f(null, g || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
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
function P(e) {
  const t = /* @__PURE__ */ mo(e);
  return vc(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  const t = /* @__PURE__ */ mo(e);
  return t.equals = Bl, t;
}
function Jl(e) {
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
function Uf(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Dt) === 0)
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
  Bt(Uf(e));
  try {
    Jl(e), t = wc(e);
  } finally {
    Bt(n);
  }
  return t;
}
function Ql(e) {
  var t = Vs(e);
  if (e.equals(t) || (e.v = t, e.wv = mc()), !vr) {
    var n = (On || (e.f & zt) !== 0) && e.deps !== null ? Zn : vt;
    Et(e, n);
  }
}
const Ln = /* @__PURE__ */ new Map();
function zn(e, t) {
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
function $e(e, t) {
  const n = zn(e);
  return vc(n), n;
}
// @__NO_SIDE_EFFECTS__
function ec(e, t = !1, n = !0) {
  const r = zn(e);
  return t || (r.equals = Bl), Br && n && Ke !== null && Ke.l !== null && (Ke.l.s ??= []).push(r), r;
}
function G(e, t, n = !1) {
  Te !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Zt || (Te.f & ya) !== 0) && po() && (Te.f & (Dt | Rr | As | ya)) !== 0 && !_n?.includes(e) && Df();
  let r = n ? It(t) : t;
  return Dr(e, r);
}
function Dr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    vr ? Ln.set(e, t) : Ln.set(e, n), e.v = t;
    var r = ln.ensure();
    r.capture(e, n), (e.f & Dt) !== 0 && ((e.f & Rt) !== 0 && Vs(
      /** @type {Derived} */
      e
    ), Et(e, (e.f & zt) === 0 ? vt : Zn)), e.wv = mc(), tc(e, Rt), po() && Se !== null && (Se.f & vt) !== 0 && (Se.f & (kn | Kn)) === 0 && (Lt === null ? ah([e]) : Lt.push(e));
  }
  return t;
}
function _a(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function Jr(e) {
  G(e, e.v + 1);
}
function tc(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = po(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Se)) {
        var l = (a & Rt) === 0;
        l && Et(s, t), (a & Dt) !== 0 ? tc(
          /** @type {Derived} */
          s,
          Zn
        ) : l && ((a & Rr) !== 0 && Gn !== null && Gn.push(
          /** @type {Effect} */
          s
        ), Tr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function It(e) {
  if (typeof e != "object" || e === null || an in e)
    return e;
  const t = mi(e);
  if (t !== Ll && t !== pf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ho(e), o = /* @__PURE__ */ $e(0), i = er, s = (a) => {
    if (er === i)
      return a();
    var l = Te, c = er;
    Ct(null), Ea(i);
    var d = a();
    return Ct(l), Ea(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ $e(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && $f();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ $e(c.value);
          return n.set(l, h), h;
        }) : G(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ $e(rt));
            n.set(l, d), Jr(o);
          }
        } else
          G(c, rt), Jr(o);
        return !0;
      },
      get(a, l, c) {
        if (l === an)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || wn(a, l)?.writable) && (d = s(() => {
          var g = It(h ? a[l] : rt), v = /* @__PURE__ */ $e(g);
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
          var h = n.get(l), f = h?.v;
          if (h !== void 0 && f !== rt)
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
        if (l === an)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== rt || Reflect.has(a, l);
        if (c !== void 0 || Se !== null && (!d || wn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? It(a[l]) : rt, g = /* @__PURE__ */ $e(f);
            return g;
          }), n.set(l, c));
          var h = u(c);
          if (h === rt)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var h = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? G(v, rt) : g in a && (v = s(() => /* @__PURE__ */ $e(rt)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || wn(a, l)?.writable) && (h = s(() => /* @__PURE__ */ $e(void 0)), G(h, It(c)), n.set(l, h));
        else {
          f = h.v !== rt;
          var p = s(() => It(c));
          G(h, p);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= b.v && G(b, N + 1);
          }
          Jr(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== rt;
        });
        for (var [c, d] of n)
          d.v !== rt && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Tf();
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
function Jf(e, t) {
  return Object.is(xa(e), xa(t));
}
var bt, nc, rc, oc;
function ns() {
  if (bt === void 0) {
    bt = window, nc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    rc = wn(t, "firstChild").get, oc = wn(t, "nextSibling").get, ma(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ma(n) && (n.__t = void 0);
  }
}
function At(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return rc.call(e);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return oc.call(e);
}
function z(e, t) {
  if (!me)
    return /* @__PURE__ */ tt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ tt(Ee)
  );
  if (n === null)
    n = Ee.appendChild(At());
  else if (t && n.nodeType !== wi) {
    var r = At();
    return n?.before(r), Qe(r), r;
  }
  return Qe(n), n;
}
function ie(e, t = !1) {
  if (!me) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ tt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gt(n) : n;
  }
  if (t && Ee?.nodeType !== wi) {
    var r = At();
    return Ee?.before(r), Qe(r), r;
  }
  return Ee;
}
function V(e, t = 1, n = !1) {
  let r = me ? Ee : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(r);
  if (!me)
    return r;
  if (n && r?.nodeType !== wi) {
    var i = At();
    return r === null ? o?.after(i) : r.before(i), Qe(i), i;
  }
  return Qe(r), /** @type {TemplateNode} */
  r;
}
function Is(e) {
  e.textContent = "";
}
function zs() {
  return !1;
}
function Qf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, gr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function eh(e) {
  me && /* @__PURE__ */ tt(e) !== null && Is(e);
}
let ba = !1;
function th() {
  ba || (ba = !0, document.addEventListener(
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
function Rs(e) {
  var t = Te, n = Se;
  Ct(null), Bt(null);
  try {
    return e();
  } finally {
    Ct(t), Bt(n);
  }
}
function ic(e) {
  Se === null && Te === null && Ef(), Te !== null && (Te.f & zt) !== 0 && Se === null && kf(), vr && Cf();
}
function nh(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ut(e, t, n, r = !0) {
  var o = Se;
  o !== null && (o.f & Xt) !== 0 && (e |= Xt);
  var i = {
    ctx: Ke,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Rt,
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
      _r(i), i.f |= Ds;
    } catch (l) {
      throw ot(i), l;
    }
  else t !== null && Tr(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & fr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && nh(s, o), Te !== null && (Te.f & Dt) !== 0 && (e & Kn) === 0)) {
      var a = (
        /** @type {Derived} */
        Te
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function rh() {
  return Te !== null && !Zt;
}
function sc(e) {
  const t = Ut(yi, null, !1);
  return Et(t, vt), t.teardown = e, t;
}
function Xe(e) {
  ic();
  var t = (
    /** @type {Effect} */
    Se.f
  ), n = !Te && (t & kn) !== 0 && (t & Ds) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ke
    );
    (r.e ??= []).push(e);
  } else
    return ac(e);
}
function ac(e) {
  return Ut($s | Vl, e, !1);
}
function lc(e) {
  return ic(), Ut(yi | Vl, e, !0);
}
function Bs(e) {
  ln.ensure();
  const t = Ut(Kn | fr, e, !0);
  return () => {
    ot(t);
  };
}
function oh(e) {
  ln.ensure();
  const t = Ut(Kn | fr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Vn(t, () => {
      ot(t), r(void 0);
    }) : (ot(t), r(void 0));
  });
}
function Fr(e) {
  return Ut($s, e, !1);
}
function ih(e) {
  return Ut(As | fr, e, !0);
}
function yo(e, t = 0) {
  return Ut(yi | t, e, !0);
}
function Ce(e, t = [], n = []) {
  Gl(t, n, (r) => {
    Ut(yi, () => e(...r.map(u)), !0);
  });
}
function Yn(e, t = 0) {
  var n = Ut(Rr | t, e, !0);
  return n;
}
function ct(e, t = !0) {
  return Ut(kn | fr, e, !0, t);
}
function cc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = vr, r = Te;
    ka(!0), Ct(null);
    try {
      t.call(null);
    } finally {
      ka(n), Ct(r);
    }
  }
}
function uc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Rs(() => {
      o.abort(Ms);
    });
    var r = n.next;
    (n.f & Kn) !== 0 ? n.parent = null : ot(n, t), n = r;
  }
}
function sh(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & kn) === 0 && ot(t), t = n;
  }
}
function ot(e, t = !0) {
  var n = !1;
  (t || (e.f & wf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (dc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), uc(e, t && !n), Jo(e, 0), Et(e, ur);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  cc(e);
  var o = e.parent;
  o !== null && o.first !== null && fc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function dc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(e)
    );
    e.remove(), e = n;
  }
}
function fc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Vn(e, t) {
  var n = [];
  Fs(e, n, !0), hc(n, () => {
    ot(e), t && t();
  });
}
function hc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Fs(e, t, n) {
  if ((e.f & Xt) === 0) {
    if (e.f ^= Xt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & dr) !== 0 || (r.f & kn) !== 0;
      Fs(r, t, i ? n : !1), r = o;
    }
  }
}
function xi(e) {
  gc(e, !0);
}
function gc(e, t) {
  if ((e.f & Xt) !== 0) {
    e.f ^= Xt, (e.f & vt) === 0 && (Et(e, Rt), Tr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & dr) !== 0 || (n.f & kn) !== 0;
      gc(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let wr = !1;
function Ca(e) {
  wr = e;
}
let vr = !1;
function ka(e) {
  vr = e;
}
let Te = null, Zt = !1;
function Ct(e) {
  Te = e;
}
let Se = null;
function Bt(e) {
  Se = e;
}
let _n = null;
function vc(e) {
  Te !== null && (_n === null ? _n = [e] : _n.push(e));
}
let yt = null, $t = 0, Lt = null;
function ah(e) {
  Lt = e;
}
let pc = 1, eo = 0, er = eo;
function Ea(e) {
  er = e;
}
let On = !1;
function mc() {
  return ++pc;
}
function bi(e) {
  var t = e.f;
  if ((t & Rt) !== 0)
    return !0;
  if ((t & Zn) !== 0) {
    var n = e.deps, r = (t & zt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Go) !== 0, a = r && Se !== null && !On, l = n.length;
      if ((s || a) && (Se === null || (Se.f & ur) === 0)) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        s && (c.f ^= Go), a && d !== null && (d.f & zt) === 0 && (c.f ^= zt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], bi(
          /** @type {Derived} */
          i
        ) && Ql(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Se !== null && !On) && Et(e, vt);
  }
  return !1;
}
function yc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !_n?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Dt) !== 0 ? yc(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Et(i, Rt) : (i.f & vt) !== 0 && Et(i, Zn), Tr(
        /** @type {Effect} */
        i
      ));
    }
}
function wc(e) {
  var t = yt, n = $t, r = Lt, o = Te, i = On, s = _n, a = Ke, l = Zt, c = er, d = e.f;
  yt = /** @type {null | Value[]} */
  null, $t = 0, Lt = null, On = (d & zt) !== 0 && (Zt || !wr || Te === null), Te = (d & (kn | Kn)) === 0 ? e : null, _n = null, Sr(e.ctx), Zt = !1, er = ++eo, e.ac !== null && (Rs(() => {
    e.ac.abort(Ms);
  }), e.ac = null);
  try {
    e.f |= Qi;
    var h = (
      /** @type {Function} */
      e.fn
    ), f = h(), g = e.deps;
    if (yt !== null) {
      var v;
      if (Jo(e, $t), g !== null && $t > 0)
        for (g.length = $t + yt.length, v = 0; v < yt.length; v++)
          g[$t + v] = yt[v];
      else
        e.deps = g = yt;
      if (!On || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Dt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (v = $t; v < g.length; v++)
          (g[v].reactions ??= []).push(e);
    } else g !== null && $t < g.length && (Jo(e, $t), g.length = $t);
    if (po() && Lt !== null && !Zt && g !== null && (e.f & (Dt | Zn | Rt)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Lt.length; v++)
        yc(
          Lt[v],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (eo++, Lt !== null && (r === null ? r = Lt : r.push(.../** @type {Source[]} */
    Lt))), (e.f & Qn) !== 0 && (e.f ^= Qn), f;
  } catch (p) {
    return Wl(p);
  } finally {
    e.f ^= Qi, yt = t, $t = n, Lt = r, Te = o, On = i, _n = s, Sr(a), Zt = l, er = c;
  }
}
function lh(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = vf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Dt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (yt === null || !yt.includes(t)) && (Et(t, Zn), (t.f & (zt | Go)) === 0 && (t.f ^= Go), Jl(
    /** @type {Derived} **/
    t
  ), Jo(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Jo(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      lh(e, n[r]);
}
function _r(e) {
  var t = e.f;
  if ((t & ur) === 0) {
    Et(e, vt);
    var n = Se, r = wr;
    Se = e, wr = !0;
    try {
      (t & Rr) !== 0 ? sh(e) : uc(e), cc(e);
      var o = wc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = pc;
      var i;
      Ml && Hf && (e.f & Rt) !== 0 && e.deps;
    } finally {
      wr = r, Se = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & Dt) !== 0;
  if (Te !== null && !Zt) {
    var r = Se !== null && (Se.f & ur) !== 0;
    if (!r && !_n?.includes(e)) {
      var o = Te.deps;
      if ((Te.f & Qi) !== 0)
        e.rv < eo && (e.rv = eo, yt === null && o !== null && o[$t] === e ? $t++ : yt === null ? yt = [e] : (!On || !yt.includes(e)) && yt.push(e));
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
    a !== null && (a.f & zt) === 0 && (s.f ^= zt);
  }
  if (vr) {
    if (Ln.has(e))
      return Ln.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & vt) === 0 && s.reactions !== null || _c(s)) && (l = Vs(s)), Ln.set(s, l), l;
    }
  } else n && (s = /** @type {Derived} */
  e, bi(s) && Ql(s));
  if ((e.f & Qn) !== 0)
    throw e.v;
  return e.v;
}
function _c(e) {
  if (e.v === rt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ln.has(t) || (t.f & Dt) !== 0 && _c(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ut(e) {
  var t = Zt;
  try {
    return Zt = !0, e();
  } finally {
    Zt = t;
  }
}
const ch = -7169;
function Et(e, t) {
  e.f = e.f & ch | t;
}
function uh(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Ks(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (an in e)
      rs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && an in n && rs(n);
      }
  }
}
function rs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        rs(e[r], t);
      } catch {
      }
    const n = mi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Hl(n);
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
const xc = /* @__PURE__ */ new Set(), os = /* @__PURE__ */ new Set();
function Zs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Xr.call(t, i), !i.cancelBubble)
      return Rs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? gr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function is(e, t, n, r = {}) {
  var o = Zs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Sa(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Zs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && sc(() => {
    t.removeEventListener(e, s, i);
  });
}
function Wn(e) {
  for (var t = 0; t < e.length; t++)
    xc.add(e[t]);
  for (var n of os)
    n(e);
}
let Na = null;
function Xr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Na = e;
  var s = 0, a = Na === e && e.__root;
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
    Er(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Te, h = Se;
    Ct(null), Bt(null);
    try {
      for (var f, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          if (p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (ho(p)) {
              var [w, ...b] = p;
              w.apply(i, [e, ...b]);
            } else
              p.call(i, e);
        } catch (N) {
          f ? g.push(N) : f = N;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let N of g)
          queueMicrotask(() => {
            throw N;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ct(d), Bt(h);
    }
  }
}
function Ys(e) {
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
function te(e, t) {
  var n = (t & Al) !== 0, r = (t & df) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (me)
      return St(Ee, null), Ee;
    o === void 0 && (o = Ys(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ tt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || nc ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(s)
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
function dh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Al) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (me)
      return St(Ee, null), Ee;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ys(i)
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
      ), h = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      St(d, h);
    } else
      St(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return /* @__PURE__ */ dh(e, t, "svg");
}
function ke(e = "") {
  if (!me) {
    var t = At(e + "");
    return St(t, t), t;
  }
  var n = Ee;
  return n.nodeType !== wi && (n.before(n = At()), Qe(n)), St(n, n), n;
}
function Ne() {
  if (me)
    return St(Ee, null), Ee;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = At();
  return e.append(t, n), St(t, n), e;
}
function O(e, t) {
  if (me) {
    Se.nodes_end = Ee, xn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function fh(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const hh = [
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
function gh(e) {
  return hh.includes(e);
}
const vh = {
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
function ph(e) {
  return e = e.toLowerCase(), vh[e] ?? e;
}
const mh = ["touchstart", "touchmove"];
function yh(e) {
  return mh.includes(e);
}
const wh = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function _h(e) {
  return wh.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Re(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function bc(e, t) {
  return Cc(e, t);
}
function xh(e, t) {
  ns(), t.intro = t.intro ?? !1;
  const n = t.target, r = me, o = Ee;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(n)
    ); i && (i.nodeType !== hr || /** @type {Comment} */
    i.data !== Ol); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(i);
    if (!i)
      throw or;
    wt(!0), Qe(
      /** @type {Comment} */
      i
    );
    const s = Cc(e, { ...t, anchor: i });
    return wt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== or && console.warn("Failed to hydrate: ", s), t.recover === !1 && Nf(), ns(), Is(n), wt(!1), bc(e, t);
  } finally {
    wt(r), Qe(o);
  }
}
const pr = /* @__PURE__ */ new Map();
function Cc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ns();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = yh(g);
        t.addEventListener(g, Xr, { passive: v });
        var p = pr.get(g);
        p === void 0 ? (document.addEventListener(g, Xr, { passive: v }), pr.set(g, 1)) : pr.set(g, p + 1);
      }
    }
  };
  l(Ps(xc)), os.add(l);
  var c = void 0, d = oh(() => {
    var h = n ?? t.appendChild(At());
    return Wf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          ce({});
          var g = (
            /** @type {ComponentContext} */
            Ke
          );
          g.c = i;
        }
        if (o && (r.$$events = o), me && St(
          /** @type {TemplateNode} */
          f,
          null
        ), c = e(f, r) || {}, me && (Se.nodes_end = Ee, Ee === null || Ee.nodeType !== hr || /** @type {Comment} */
        Ee.data !== Ns))
          throw vo(), or;
        i && ue();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Xr);
        var g = (
          /** @type {number} */
          pr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Xr), pr.delete(f)) : pr.set(f, g);
      }
      os.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return ss.set(c, d), c;
}
let ss = /* @__PURE__ */ new WeakMap();
function bh(e, t) {
  const n = ss.get(e);
  return n ? (ss.delete(e), n(t)) : Promise.resolve();
}
function qe(e, t, ...n) {
  var r = e, o = ft, i;
  Yn(() => {
    o !== (o = t()) && (i && (ot(i), i = null), i = ct(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, dr), me && (r = Ee);
}
function En(e) {
  Ke === null && Hs(), Br && Ke.l !== null ? Ch(Ke).m.push(e) : Xe(() => {
    const t = ut(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function wo(e) {
  Ke === null && Hs(), En(() => () => ut(e));
}
function Ch(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function le(e, t, n = !1) {
  me && xn();
  var r = e, o = null, i = null, s = rt, a = n ? dr : 0, l = !1;
  const c = (g, v = !0) => {
    l = !0, f(v, g);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var g = s ? o : i, v = s ? i : o;
    g && xi(g), v && Vn(v, () => {
      s ? i = null : o = null;
    });
  }
  const f = (g, v) => {
    if (s === (s = g)) return;
    let p = !1;
    if (me) {
      const $ = Il(r) === pi;
      !!s === $ && (r = Uo(), Qe(r), wt(!1), p = !0);
    }
    var w = zs(), b = r;
    if (w && (d = document.createDocumentFragment(), d.append(b = At())), s ? o ??= v && ct(() => v(b)) : i ??= v && ct(() => v(b)), w) {
      var N = (
        /** @type {Batch} */
        Ue
      ), x = s ? o : i, k = s ? i : o;
      x && N.skipped_effects.delete(x), k && N.skipped_effects.add(k), N.add_callback(h);
    } else
      h();
    p && wt(!0);
  };
  Yn(() => {
    l = !1, t(c), l || f(null, null);
  }, a), me && (r = Ee);
}
function kh(e, t) {
  me && Qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tt(e)
  ), yo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Ar(e, t) {
  return t;
}
function Eh(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    Fs(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Is(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), rn(e, t[0].prev, t[i - 1].next);
  }
  hc(o, () => {
    for (var c = 0; c < i; c++) {
      var d = t[c];
      a || (r.delete(d.k), rn(e, d.prev, d.next)), ot(d.e, !a);
    }
  });
}
function pt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Tl) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = me ? Qe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ tt(c)
    ) : c.appendChild(At());
  }
  me && xn();
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ Ls(() => {
    var b = n();
    return ho(b) ? b : b == null ? [] : Ps(b);
  }), v, p;
  function w() {
    Sh(
      p,
      v,
      a,
      f,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (v.length === 0 ? d ? xi(d) : d = ct(() => i(s)) : d !== null && Vn(d, () => {
      d = null;
    }));
  }
  Yn(() => {
    p ??= /** @type {Effect} */
    Se, v = /** @type {V[]} */
    u(g);
    var b = v.length;
    if (h && b === 0)
      return;
    h = b === 0;
    let N = !1;
    if (me) {
      var x = Il(s) === pi;
      x !== (b === 0) && (s = Uo(), Qe(s), wt(!1), N = !0);
    }
    if (me) {
      for (var k = null, $, S = 0; S < b; S++) {
        if (Ee.nodeType === hr && /** @type {Comment} */
        Ee.data === Ns) {
          s = /** @type {Comment} */
          Ee, N = !0, wt(!1);
          break;
        }
        var A = v[S], M = r(A, S);
        $ = as(
          Ee,
          a,
          k,
          null,
          A,
          M,
          S,
          o,
          t,
          n
        ), a.items.set(M, $), k = $;
      }
      b > 0 && Qe(Uo());
    }
    if (me)
      b === 0 && i && (d = ct(() => i(s)));
    else if (zs()) {
      var B = /* @__PURE__ */ new Set(), X = (
        /** @type {Batch} */
        Ue
      );
      for (S = 0; S < b; S += 1) {
        A = v[S], M = r(A, S);
        var Q = a.items.get(M) ?? f.get(M);
        Q ? (t & (gi | vi)) !== 0 && kc(Q, A, S, t) : ($ = as(
          null,
          a,
          null,
          null,
          A,
          M,
          S,
          o,
          t,
          n,
          !0
        ), f.set(M, $)), B.add(M);
      }
      for (const [E, C] of a.items)
        B.has(E) || X.skipped_effects.add(C.e);
      X.add_callback(w);
    } else
      w();
    N && wt(!0), u(g);
  }), me && (s = Ee);
}
function Sh(e, t, n, r, o, i, s, a, l) {
  var c = (s & of) !== 0, d = (s & (gi | vi)) !== 0, h = t.length, f = n.items, g = n.first, v = g, p, w = null, b, N = [], x = [], k, $, S, A;
  if (c)
    for (A = 0; A < h; A += 1)
      k = t[A], $ = a(k, A), S = f.get($), S !== void 0 && (S.a?.measure(), (b ??= /* @__PURE__ */ new Set()).add(S));
  for (A = 0; A < h; A += 1) {
    if (k = t[A], $ = a(k, A), S = f.get($), S === void 0) {
      var M = r.get($);
      if (M !== void 0) {
        r.delete($), f.set($, M);
        var B = w ? w.next : v;
        rn(n, w, M), rn(n, M, B), Ii(M, B, o), w = M;
      } else {
        var X = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : o;
        w = as(
          X,
          n,
          w,
          w === null ? n.first : w.next,
          k,
          $,
          A,
          i,
          s,
          l
        );
      }
      f.set($, w), N = [], x = [], v = w.next;
      continue;
    }
    if (d && kc(S, k, A, s), (S.e.f & Xt) !== 0 && (xi(S.e), c && (S.a?.unfix(), (b ??= /* @__PURE__ */ new Set()).delete(S))), S !== v) {
      if (p !== void 0 && p.has(S)) {
        if (N.length < x.length) {
          var Q = x[0], E;
          w = Q.prev;
          var C = N[0], _ = N[N.length - 1];
          for (E = 0; E < N.length; E += 1)
            Ii(N[E], Q, o);
          for (E = 0; E < x.length; E += 1)
            p.delete(x[E]);
          rn(n, C.prev, _.next), rn(n, w, C), rn(n, _, Q), v = Q, w = _, A -= 1, N = [], x = [];
        } else
          p.delete(S), Ii(S, v, o), rn(n, S.prev, S.next), rn(n, S, w === null ? n.first : w.next), rn(n, w, S), w = S;
        continue;
      }
      for (N = [], x = []; v !== null && v.k !== $; )
        (v.e.f & Xt) === 0 && (p ??= /* @__PURE__ */ new Set()).add(v), x.push(v), v = v.next;
      if (v === null)
        continue;
      S = v;
    }
    N.push(S), w = S, v = S.next;
  }
  if (v !== null || p !== void 0) {
    for (var T = p === void 0 ? [] : Ps(p); v !== null; )
      (v.e.f & Xt) === 0 && T.push(v), v = v.next;
    var D = T.length;
    if (D > 0) {
      var L = (s & Tl) !== 0 && h === 0 ? o : null;
      if (c) {
        for (A = 0; A < D; A += 1)
          T[A].a?.measure();
        for (A = 0; A < D; A += 1)
          T[A].a?.fix();
      }
      Eh(n, T, L);
    }
  }
  c && gr(() => {
    if (b !== void 0)
      for (S of b)
        S.a?.apply();
  }), e.first = n.first && n.first.e, e.last = w && w.e;
  for (var F of r.values())
    ot(F.e);
  r.clear();
}
function kc(e, t, n, r) {
  (r & gi) !== 0 && Dr(e.v, t), (r & vi) !== 0 ? Dr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function as(e, t, n, r, o, i, s, a, l, c, d) {
  var h = (l & gi) !== 0, f = (l & sf) === 0, g = h ? f ? /* @__PURE__ */ ec(o, !1, !1) : zn(o) : o, v = (l & vi) === 0 ? s : zn(s), p = {
    i: v,
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
      w.append(e = At());
    }
    return p.e = ct(() => a(
      /** @type {Node} */
      e,
      g,
      v,
      c
    ), me), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? d || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Ii(e, t, n) {
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
      /* @__PURE__ */ Gt(i)
    );
    o.before(i), i = s;
  }
}
function rn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ws(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ce(() => {
    var a = (
      /** @type {Effect} */
      Se
    );
    if (s === (s = t() ?? "")) {
      me && xn();
      return;
    }
    if (a.nodes_start !== null && (dc(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (me) {
        Ee.data;
        for (var l = xn(), c = l; l !== null && (l.nodeType !== hr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Gt(l);
        if (l === null)
          throw vo(), or;
        St(Ee, c), i = Qe(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Ys(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ tt(h)), St(
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ tt(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ tt(h)
          );
      else
        i.before(h);
    }
  });
}
function Ci(e, t, n) {
  me && xn();
  var r = e, o, i, s = null, a = null;
  function l() {
    i && (Vn(i), i = null), s && (s.lastChild.remove(), r.before(s), s = null), i = a, a = null;
  }
  Yn(() => {
    if (o !== (o = t())) {
      var c = zs();
      if (o) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = At()), i && Ue.skipped_effects.add(i)), a = ct(() => n(d, o));
      }
      c ? Ue.add_callback(l) : l();
    }
  }, dr), me && (r = Ee);
}
function Nh(e, t, n, r, o, i) {
  let s = me;
  me && xn();
  var a, l, c = null;
  me && Ee.nodeType === xf && (c = /** @type {Element} */
  Ee, xn());
  var d = (
    /** @type {TemplateNode} */
    me ? Ee : e
  ), h;
  Yn(() => {
    const f = t() || null;
    var g = f === "svg" ? hf : null;
    f !== a && (h && (f === null ? Vn(h, () => {
      h = null, l = null;
    }) : f === l ? xi(h) : ot(h)), f && f !== l && (h = ct(() => {
      if (c = me ? (
        /** @type {Element} */
        c
      ) : g ? document.createElementNS(g, f) : document.createElement(f), St(c, c), r) {
        me && _h(f) && c.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          me ? /* @__PURE__ */ tt(c) : c.appendChild(At())
        );
        me && (v === null ? wt(!1) : Qe(v)), r(c, v);
      }
      Se.nodes_end = c, d.before(c);
    })), a = f, a && (l = a));
  }, dr), s && (wt(!0), Qe(d));
}
function Le(e, t) {
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
function gt(e, t, n) {
  Fr(() => {
    var r = ut(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      yo(() => {
        var s = n();
        Ks(s), o && Rl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ph(e, t) {
  var n = void 0, r;
  Yn(() => {
    n !== (n = t()) && (r && (ot(r), r = null), n && (r = ct(() => {
      Fr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ec(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ec(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function $h() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ec(e)) && (r && (r += " "), r += t);
  return r;
}
function Sn(e) {
  return typeof e == "object" ? $h(e) : e ?? "";
}
const Pa = [...` 	
\r\f \v\uFEFF`];
function Th(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Pa.includes(r[s - 1])) && (a === r.length || Pa.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function $a(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function zi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Dh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(zi)), o && l.push(...Object.keys(o).map(zi));
      var c = 0, d = -1;
      const p = e.length;
      for (var h = 0; h < p; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var g = zi(e.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && h++;
                var v = e.substring(c, h).trim();
                n += " " + v + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += $a(r)), o && (n += $a(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Nt(e, t, n, r, o, i) {
  var s = e.__className;
  if (me || s !== n || s === void 0) {
    var a = Th(n, r, i);
    (!me || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Ri(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ht(e, t, n, r) {
  var o = e.__style;
  if (me || o !== t) {
    var i = Dh(t, r);
    (!me || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Ri(e, n?.[0], r[0]), Ri(e, n?.[1], r[1], "important")) : Ri(e, n, r));
  return r;
}
function ls(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ho(t))
      return Of();
    for (var r of e.options)
      r.selected = t.includes(Ta(r));
    return;
  }
  for (r of e.options) {
    var o = Ta(r);
    if (Jf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Ah(e) {
  var t = new MutationObserver(() => {
    ls(e, e.__value);
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
  }), sc(() => {
    t.disconnect();
  });
}
function Ta(e) {
  return "__value" in e ? e.__value : e.value;
}
const Dn = Symbol("class"), sn = Symbol("style"), Sc = Symbol("is custom element"), Nc = Symbol("is html");
function tr(e) {
  if (me) {
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
    e.__on_r = n, Bf(n), th();
  }
}
function Bo(e, t) {
  var n = ki(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Da(e, t) {
  var n = ki(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Oh(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = ki(e);
  me && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[_f] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Pc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Mh(e, t, n, r, o = !1, i = !1) {
  if (me && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || tr(s);
  }
  var l = ki(e), c = l[Sc], d = !l[Nc];
  let h = me && c;
  h && wt(!1);
  var f = t || {}, g = e.tagName === "OPTION";
  for (var v in t)
    v in n || (n[v] = null);
  n.class ? n.class = Sn(n.class) : (r || n[Dn]) && (n.class = null), n[sn] && (n.style ??= null);
  var p = Pc(e);
  for (const S in n) {
    let A = n[S];
    if (g && S === "value" && A == null) {
      e.value = e.__value = "", f[S] = A;
      continue;
    }
    if (S === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Nt(e, w, A, r, t?.[Dn], n[Dn]), f[S] = A, f[Dn] = n[Dn];
      continue;
    }
    if (S === "style") {
      ht(e, A, t?.[sn], n[sn]), f[S] = A, f[sn] = n[sn];
      continue;
    }
    var b = f[S];
    if (!(A === b && !(A === void 0 && e.hasAttribute(S)))) {
      f[S] = A;
      var N = S[0] + S[1];
      if (N !== "$$")
        if (N === "on") {
          const M = {}, B = "$$" + S;
          let X = S.slice(2);
          var x = gh(X);
          if (fh(X) && (X = X.slice(0, -7), M.capture = !0), !x && b) {
            if (A != null) continue;
            e.removeEventListener(X, f[B], M), f[B] = null;
          }
          if (A != null)
            if (x)
              e[`__${X}`] = A, Wn([X]);
            else {
              let Q = function(E) {
                f[S].call(this, E);
              };
              f[B] = Zs(X, e, Q, M);
            }
          else x && (e[`__${X}`] = void 0);
        } else if (S === "style")
          xe(e, S, A);
        else if (S === "autofocus")
          Qf(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!c && (S === "__value" || S === "value" && A != null))
          e.value = e.__value = A;
        else if (S === "selected" && g)
          Oh(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var k = S;
          d || (k = ph(k));
          var $ = k === "defaultValue" || k === "defaultChecked";
          if (A == null && !c && !$)
            if (l[S] = null, k === "value" || k === "checked") {
              let M = (
                /** @type {HTMLInputElement} */
                e
              );
              const B = t === void 0;
              if (k === "value") {
                let X = M.defaultValue;
                M.removeAttribute(k), M.defaultValue = X, M.value = M.__value = B ? X : null;
              } else {
                let X = M.defaultChecked;
                M.removeAttribute(k), M.defaultChecked = X, M.checked = B ? X : !1;
              }
            } else
              e.removeAttribute(S);
          else $ || p.includes(k) && (c || typeof A != "string") ? (e[k] = A, k in l && (l[k] = rt)) : typeof A != "function" && xe(e, k, A);
        }
    }
  }
  return h && wt(!0), f;
}
function nt(e, t, n = [], r = [], o, i = !1, s = !1) {
  Gl(n, r, (a) => {
    var l = void 0, c = {}, d = e.nodeName === "SELECT", h = !1;
    if (Yn(() => {
      var g = t(...a.map(u)), v = Mh(
        e,
        l,
        g,
        o,
        i,
        s
      );
      h && d && "value" in g && ls(
        /** @type {HTMLSelectElement} */
        e,
        g.value
      );
      for (let w of Object.getOwnPropertySymbols(c))
        g[w] || ot(c[w]);
      for (let w of Object.getOwnPropertySymbols(g)) {
        var p = g[w];
        w.description === gf && (!l || p !== l[w]) && (c[w] && ot(c[w]), c[w] = ct(() => Ph(e, () => p))), v[w] = p;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        e
      );
      Fr(() => {
        ls(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Ah(f);
      });
    }
    h = !0;
  });
}
function ki(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Sc]: e.nodeName.includes("-"),
      [Nc]: e.namespaceURI === ff
    }
  );
}
var Aa = /* @__PURE__ */ new Map();
function Pc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Aa.get(t);
  if (n) return n;
  Aa.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Hl(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = mi(o);
  }
  return n;
}
class Xs {
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
          Xs.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Hh = /* @__PURE__ */ new Xs({
  box: "border-box"
});
function Oa(e, t, n) {
  var r = Hh.observe(e, () => n(e[t]));
  Fr(() => (ut(() => n(e[t])), r));
}
function Ma(e, t) {
  return e === t || e?.[an] === t;
}
function Ot(e = {}, t, n, r) {
  return Fr(() => {
    var o, i;
    return yo(() => {
      o = i, i = [], ut(() => {
        e !== n(...i) && (t(e, ...i), o && Ma(n(...o), e) && t(null, ...o));
      });
    }), () => {
      gr(() => {
        i && Ma(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function $c(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ke
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ks(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ mo(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && lc(() => {
    Ha(t, r), jo(n.b);
  }), Xe(() => {
    const o = ut(() => n.m.map(mf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Xe(() => {
    Ha(t, r), jo(n.a);
  });
}
function Ha(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let Oo = !1;
function Lh(e) {
  var t = Oo;
  try {
    return Oo = !1, [e(), Oo];
  } finally {
    Oo = t;
  }
}
const Vh = {
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
function Ie(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Vh
  );
}
const Ih = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Se;
      try {
        Bt(e.parent_effect), e.special[t] = y(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Dl
        );
      } finally {
        Bt(r);
      }
    }
    return e.special[t](n), _a(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), _a(e.version)), !0;
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
      version: zn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Se
      )
    },
    Ih
  );
}
const zh = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Zr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Zr(o) && (o = o());
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
      if (Zr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = wn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === an || t === Os) return !1;
    for (let n of e.props)
      if (Zr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Zr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Be(...e) {
  return new Proxy({ props: e }, zh);
}
function y(e, t, n, r) {
  var o = !Br || (n & lf) !== 0, i = (n & cf) !== 0, s = (n & uf) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? ut(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = an in e || Os in e;
    d = wn(e, t)?.set ?? (h && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Lh(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Pf(), d(f)));
  var v;
  if (o ? v = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? c() : (l = !0, x);
  } : v = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & Dl) === 0)
    return v;
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(x, k) {
        return arguments.length > 0 ? ((!o || !k || p || g) && d(k ? v() : x), x) : v();
      }
    );
  }
  var w = !1, b = ((n & af) !== 0 ? mo : Ls)(() => (w = !1, v()));
  i && u(b);
  var N = (
    /** @type {Effect} */
    Se
  );
  return (
    /** @type {() => V} */
    function(x, k) {
      if (arguments.length > 0) {
        const $ = k ? u(b) : o && i ? It(x) : x;
        return G(b, $), w = !0, a !== void 0 && (a = $), x;
      }
      return vr && w || (N.f & ur) !== 0 ? b.v : u(b);
    }
  );
}
function Rh(e) {
  return new Bh(e);
}
class Bh {
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
      var a = /* @__PURE__ */ ec(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Os ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return G(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? xh : bc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Er(this, i, {
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
      bh(this.#e);
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
let Tc;
typeof HTMLElement == "function" && (Tc = class extends HTMLElement {
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
      const t = {}, n = Fh(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Fo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Rh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Bs(() => {
        yo(() => {
          this.$$r = !0;
          for (const r of qo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Fo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Fo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
function Fo(e, t, n, r) {
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
function Fh(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends Tc {
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
    Er(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Fo(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = wn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Er(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Kh = { value: () => {
} };
function Ei() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ko(n);
}
function Ko(e) {
  this._ = e;
}
function Zh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ko.prototype = Ei.prototype = {
  constructor: Ko,
  on: function(e, t) {
    var n = this._, r = Zh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Yh(n[o], e.name))) return o;
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
function Yh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Va(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Kh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var cs = "http://www.w3.org/1999/xhtml";
const Ia = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: cs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Si(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ia.hasOwnProperty(t) ? { space: Ia[t], local: e } : e;
}
function Wh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === cs && t.documentElement.namespaceURI === cs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Xh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Dc(e) {
  var t = Si(e);
  return (t.local ? Xh : Wh)(t);
}
function qh() {
}
function qs(e) {
  return e == null ? qh : function() {
    return this.querySelector(e);
  };
}
function jh(e) {
  typeof e != "function" && (e = qs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Mt(r, this._parents);
}
function Gh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Uh() {
  return [];
}
function Ac(e) {
  return e == null ? Uh : function() {
    return this.querySelectorAll(e);
  };
}
function Jh(e) {
  return function() {
    return Gh(e.apply(this, arguments));
  };
}
function Qh(e) {
  typeof e == "function" ? e = Jh(e) : e = Ac(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Mt(r, o);
}
function Oc(e) {
  return function() {
    return this.matches(e);
  };
}
function Mc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var eg = Array.prototype.find;
function tg(e) {
  return function() {
    return eg.call(this.children, e);
  };
}
function ng() {
  return this.firstElementChild;
}
function rg(e) {
  return this.select(e == null ? ng : tg(typeof e == "function" ? e : Mc(e)));
}
var og = Array.prototype.filter;
function ig() {
  return Array.from(this.children);
}
function sg(e) {
  return function() {
    return og.call(this.children, e);
  };
}
function ag(e) {
  return this.selectAll(e == null ? ig : sg(typeof e == "function" ? e : Mc(e)));
}
function lg(e) {
  typeof e != "function" && (e = Oc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Mt(r, this._parents);
}
function Hc(e) {
  return new Array(e.length);
}
function cg() {
  return new Mt(this._enter || this._groups.map(Hc), this._parents);
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
function ug(e) {
  return function() {
    return e;
  };
}
function dg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Qo(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function fg(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new Qo(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function hg(e) {
  return e.__data__;
}
function gg(e, t) {
  if (!arguments.length) return Array.from(this, hg);
  var n = t ? fg : dg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = ug(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], h = o[c], f = h.length, g = vg(e.call(d, d && d.__data__, c, r)), v = g.length, p = a[c] = new Array(v), w = s[c] = new Array(v), b = l[c] = new Array(f);
    n(d, h, p, w, b, g, t);
    for (var N = 0, x = 0, k, $; N < v; ++N)
      if (k = p[N]) {
        for (N >= x && (x = N + 1); !($ = w[x]) && ++x < v; ) ;
        k._next = $ || null;
      }
  }
  return s = new Mt(s, r), s._enter = a, s._exit = l, s;
}
function vg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function pg() {
  return new Mt(this._exit || this._groups.map(Hc), this._parents);
}
function mg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function yg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], h = c.length, f = a[l] = new Array(h), g, v = 0; v < h; ++v)
      (g = c[v] || d[v]) && (f[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Mt(a, this._parents);
}
function wg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function _g(e) {
  e || (e = xg);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new Mt(o, this._parents).order();
}
function xg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function bg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Cg() {
  return Array.from(this);
}
function kg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Eg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Sg() {
  return !this.node();
}
function Ng(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Pg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function $g(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Tg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Dg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ag(e, t) {
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
function Mg(e, t) {
  var n = Si(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? $g : Pg : typeof t == "function" ? n.local ? Og : Ag : n.local ? Dg : Tg)(n, t));
}
function Lc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Hg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Lg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Vg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Ig(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Hg : typeof t == "function" ? Vg : Lg)(e, t, n ?? "")) : Or(this.node(), e);
}
function Or(e, t) {
  return e.style.getPropertyValue(t) || Lc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function zg(e) {
  return function() {
    delete this[e];
  };
}
function Rg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Bg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Fg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? zg : typeof t == "function" ? Bg : Rg)(e, t)) : this.node()[e];
}
function Vc(e) {
  return e.trim().split(/^|\s+/);
}
function js(e) {
  return e.classList || new Ic(e);
}
function Ic(e) {
  this._node = e, this._names = Vc(e.getAttribute("class") || "");
}
Ic.prototype = {
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
function zc(e, t) {
  for (var n = js(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Rc(e, t) {
  for (var n = js(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Kg(e) {
  return function() {
    zc(this, e);
  };
}
function Zg(e) {
  return function() {
    Rc(this, e);
  };
}
function Yg(e, t) {
  return function() {
    (t.apply(this, arguments) ? zc : Rc)(this, e);
  };
}
function Wg(e, t) {
  var n = Vc(e + "");
  if (arguments.length < 2) {
    for (var r = js(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Yg : t ? Kg : Zg)(n, t));
}
function Xg() {
  this.textContent = "";
}
function qg(e) {
  return function() {
    this.textContent = e;
  };
}
function jg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Gg(e) {
  return arguments.length ? this.each(e == null ? Xg : (typeof e == "function" ? jg : qg)(e)) : this.node().textContent;
}
function Ug() {
  this.innerHTML = "";
}
function Jg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Qg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function ev(e) {
  return arguments.length ? this.each(e == null ? Ug : (typeof e == "function" ? Qg : Jg)(e)) : this.node().innerHTML;
}
function tv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function nv() {
  return this.each(tv);
}
function rv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ov() {
  return this.each(rv);
}
function iv(e) {
  var t = typeof e == "function" ? e : Dc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function sv() {
  return null;
}
function av(e, t) {
  var n = typeof e == "function" ? e : Dc(e), r = t == null ? sv : typeof t == "function" ? t : qs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function lv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function cv() {
  return this.each(lv);
}
function uv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function dv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function fv(e) {
  return this.select(e ? dv : uv);
}
function hv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function gv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function vv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function pv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function mv(e, t, n) {
  return function() {
    var r = this.__on, o, i = gv(t);
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
function yv(e, t, n) {
  var r = vv(e + ""), o, i = r.length, s;
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
  for (a = t ? mv : pv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Bc(e, t, n) {
  var r = Lc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function wv(e, t) {
  return function() {
    return Bc(this, e, t);
  };
}
function _v(e, t) {
  return function() {
    return Bc(this, e, t.apply(this, arguments));
  };
}
function xv(e, t) {
  return this.each((typeof t == "function" ? _v : wv)(e, t));
}
function* bv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Fc = [null];
function Mt(e, t) {
  this._groups = e, this._parents = t;
}
function _o() {
  return new Mt([[document.documentElement]], Fc);
}
function Cv() {
  return this;
}
Mt.prototype = _o.prototype = {
  constructor: Mt,
  select: jh,
  selectAll: Qh,
  selectChild: rg,
  selectChildren: ag,
  filter: lg,
  data: gg,
  enter: cg,
  exit: pg,
  join: mg,
  merge: yg,
  selection: Cv,
  order: wg,
  sort: _g,
  call: bg,
  nodes: Cg,
  node: kg,
  size: Eg,
  empty: Sg,
  each: Ng,
  attr: Mg,
  style: Ig,
  property: Fg,
  classed: Wg,
  text: Gg,
  html: ev,
  raise: nv,
  lower: ov,
  append: iv,
  insert: av,
  remove: cv,
  clone: fv,
  datum: hv,
  on: yv,
  dispatch: xv,
  [Symbol.iterator]: bv
};
function Vt(e) {
  return typeof e == "string" ? new Mt([[document.querySelector(e)]], [document.documentElement]) : new Mt([[e]], Fc);
}
function kv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Kt(e, t) {
  if (e = kv(e), t === void 0 && (t = e.currentTarget), t) {
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
const Ev = { passive: !1 }, to = { capture: !0, passive: !1 };
function Bi(e) {
  e.stopImmediatePropagation();
}
function xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Kc(e) {
  var t = e.document.documentElement, n = Vt(e).on("dragstart.drag", xr, to);
  "onselectstart" in t ? n.on("selectstart.drag", xr, to) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Zc(e, t) {
  var n = e.document.documentElement, r = Vt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", xr, to), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Mo = (e) => () => e;
function us(e, {
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
us.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Sv(e) {
  return !e.ctrlKey && !e.button;
}
function Nv() {
  return this.parentNode;
}
function Pv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function $v() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Tv() {
  var e = Sv, t = Nv, n = Pv, r = $v, o = {}, i = Ei("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(k) {
    k.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Ev).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(k, $) {
    if (!(d || !e.call(this, k, $))) {
      var S = x(this, t.call(this, k, $), k, $, "mouse");
      S && (Vt(k.view).on("mousemove.drag", v, to).on("mouseup.drag", p, to), Kc(k.view), Bi(k), c = !1, a = k.clientX, l = k.clientY, S("start", k));
    }
  }
  function v(k) {
    if (xr(k), !c) {
      var $ = k.clientX - a, S = k.clientY - l;
      c = $ * $ + S * S > h;
    }
    o.mouse("drag", k);
  }
  function p(k) {
    Vt(k.view).on("mousemove.drag mouseup.drag", null), Zc(k.view, c), xr(k), o.mouse("end", k);
  }
  function w(k, $) {
    if (e.call(this, k, $)) {
      var S = k.changedTouches, A = t.call(this, k, $), M = S.length, B, X;
      for (B = 0; B < M; ++B)
        (X = x(this, A, k, $, S[B].identifier, S[B])) && (Bi(k), X("start", k, S[B]));
    }
  }
  function b(k) {
    var $ = k.changedTouches, S = $.length, A, M;
    for (A = 0; A < S; ++A)
      (M = o[$[A].identifier]) && (xr(k), M("drag", k, $[A]));
  }
  function N(k) {
    var $ = k.changedTouches, S = $.length, A, M;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), A = 0; A < S; ++A)
      (M = o[$[A].identifier]) && (Bi(k), M("end", k, $[A]));
  }
  function x(k, $, S, A, M, B) {
    var X = i.copy(), Q = Kt(B || S, $), E, C, _;
    if ((_ = n.call(k, new us("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: M,
      active: s,
      x: Q[0],
      y: Q[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), A)) != null)
      return E = _.x - Q[0] || 0, C = _.y - Q[1] || 0, function T(D, L, F) {
        var K = Q, H;
        switch (D) {
          case "start":
            o[M] = T, H = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            Q = Kt(F || L, $), H = s;
            break;
        }
        X.call(
          D,
          k,
          new us(D, {
            sourceEvent: L,
            subject: _,
            target: f,
            identifier: M,
            active: H,
            x: Q[0] + E,
            y: Q[1] + C,
            dx: Q[0] - K[0],
            dy: Q[1] - K[1],
            dispatch: X
          }),
          A
        );
      };
  }
  return f.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : Mo(!!k), f) : e;
  }, f.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : Mo(k), f) : t;
  }, f.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : Mo(k), f) : n;
  }, f.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : Mo(!!k), f) : r;
  }, f.on = function() {
    var k = i.on.apply(i, arguments);
    return k === i ? f : k;
  }, f.clickDistance = function(k) {
    return arguments.length ? (h = (k = +k) * k, f) : Math.sqrt(h);
  }, f;
}
function Gs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Yc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function xo() {
}
var no = 0.7, ei = 1 / no, br = "\\s*([+-]?\\d+)\\s*", ro = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Dv = /^#([0-9a-f]{3,8})$/, Av = new RegExp(`^rgb\\(${br},${br},${br}\\)$`), Ov = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), Mv = new RegExp(`^rgba\\(${br},${br},${br},${ro}\\)$`), Hv = new RegExp(`^rgba\\(${cn},${cn},${cn},${ro}\\)$`), Lv = new RegExp(`^hsl\\(${ro},${cn},${cn}\\)$`), Vv = new RegExp(`^hsla\\(${ro},${cn},${cn},${ro}\\)$`), za = {
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
Gs(xo, sr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ra,
  // Deprecated! Use color.formatHex.
  formatHex: Ra,
  formatHex8: Iv,
  formatHsl: zv,
  formatRgb: Ba,
  toString: Ba
});
function Ra() {
  return this.rgb().formatHex();
}
function Iv() {
  return this.rgb().formatHex8();
}
function zv() {
  return Wc(this).formatHsl();
}
function Ba() {
  return this.rgb().formatRgb();
}
function sr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Dv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Fa(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ho(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ho(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Av.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = Ov.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Mv.exec(e)) ? Ho(t[1], t[2], t[3], t[4]) : (t = Hv.exec(e)) ? Ho(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Lv.exec(e)) ? Ya(t[1], t[2] / 100, t[3] / 100, 1) : (t = Vv.exec(e)) ? Ya(t[1], t[2] / 100, t[3] / 100, t[4]) : za.hasOwnProperty(e) ? Fa(za[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Fa(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ho(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new kt(e, t, n, r);
}
function Rv(e) {
  return e instanceof xo || (e = sr(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function ds(e, t, n, r) {
  return arguments.length === 1 ? Rv(e) : new kt(e, t, n, r ?? 1);
}
function kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Gs(kt, ds, Yc(xo, {
  brighter(e) {
    return e = e == null ? ei : Math.pow(ei, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? no : Math.pow(no, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(nr(this.r), nr(this.g), nr(this.b), ti(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ka,
  // Deprecated! Use color.formatHex.
  formatHex: Ka,
  formatHex8: Bv,
  formatRgb: Za,
  toString: Za
}));
function Ka() {
  return `#${Un(this.r)}${Un(this.g)}${Un(this.b)}`;
}
function Bv() {
  return `#${Un(this.r)}${Un(this.g)}${Un(this.b)}${Un((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Za() {
  const e = ti(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${nr(this.r)}, ${nr(this.g)}, ${nr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ti(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function nr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Un(e) {
  return e = nr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ya(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Yt(e, t, n, r);
}
function Wc(e) {
  if (e instanceof Yt) return new Yt(e.h, e.s, e.l, e.opacity);
  if (e instanceof xo || (e = sr(e)), !e) return new Yt();
  if (e instanceof Yt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Yt(s, a, l, e.opacity);
}
function Fv(e, t, n, r) {
  return arguments.length === 1 ? Wc(e) : new Yt(e, t, n, r ?? 1);
}
function Yt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Gs(Yt, Fv, Yc(xo, {
  brighter(e) {
    return e = e == null ? ei : Math.pow(ei, e), new Yt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? no : Math.pow(no, e), new Yt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new kt(
      Fi(e >= 240 ? e - 240 : e + 120, o, r),
      Fi(e, o, r),
      Fi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Yt(Wa(this.h), Lo(this.s), Lo(this.l), ti(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ti(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Wa(this.h)}, ${Lo(this.s) * 100}%, ${Lo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Wa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Lo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Fi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Us = (e) => () => e;
function Kv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Zv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Yv(e) {
  return (e = +e) == 1 ? Xc : function(t, n) {
    return n - t ? Zv(t, n, e) : Us(isNaN(t) ? n : t);
  };
}
function Xc(e, t) {
  var n = t - e;
  return n ? Kv(e, n) : Us(isNaN(e) ? t : e);
}
const ni = function e(t) {
  var n = Yv(t);
  function r(o, i) {
    var s = n((o = ds(o)).r, (i = ds(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Xc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Wv(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Xv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function qv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Qr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function jv(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function on(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Gv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Qr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var fs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ki = new RegExp(fs.source, "g");
function Uv(e) {
  return function() {
    return e;
  };
}
function Jv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function qc(e, t) {
  var n = fs.lastIndex = Ki.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = fs.exec(e)) && (o = Ki.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: on(r, o) })), n = Ki.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Jv(l[0].x) : Uv(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function Qr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Us(t) : (n === "number" ? on : n === "string" ? (r = sr(t)) ? (t = r, ni) : qc : t instanceof sr ? ni : t instanceof Date ? jv : Xv(t) ? Wv : Array.isArray(t) ? qv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Gv : on)(e, t);
}
var Xa = 180 / Math.PI, hs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function jc(e, t, n, r, o, i) {
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
var Vo;
function Qv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? hs : jc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function e1(e) {
  return e == null || (Vo || (Vo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vo.setAttribute("transform", e), !(e = Vo.transform.baseVal.consolidate())) ? hs : (e = e.matrix, jc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Gc(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var p = g.push("translate(", null, t, null, n);
      v.push({ i: p - 4, x: on(c, h) }, { i: p - 2, x: on(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(c, d, h, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: on(c, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(c, d, h, f) {
    c !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: on(c, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var p = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: on(c, h) }, { i: p - 2, x: on(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var v = -1, p = f.length, w; ++v < p; ) h[(w = f[v]).i] = w.x(g);
      return h.join("");
    };
  };
}
var t1 = Gc(Qv, "px, ", "px)", "deg)"), n1 = Gc(e1, ", ", ")", ")"), r1 = 1e-12;
function qa(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function o1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function i1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Zo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - l, p = g * g + v * v, w, b;
    if (p < r1)
      b = Math.log(f / c) / t, w = function(A) {
        return [
          a + A * g,
          l + A * v,
          c * Math.exp(t * A * b)
        ];
      };
    else {
      var N = Math.sqrt(p), x = (f * f - c * c + r * p) / (2 * c * n * N), k = (f * f - c * c - r * p) / (2 * f * n * N), $ = Math.log(Math.sqrt(x * x + 1) - x), S = Math.log(Math.sqrt(k * k + 1) - k);
      b = (S - $) / t, w = function(A) {
        var M = A * b, B = qa($), X = c / (n * N) * (B * i1(t * M + $) - o1($));
        return [
          a + X * g,
          l + X * v,
          c * B / qa(t * M + $)
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
var Mr = 0, qr = 0, Yr = 0, Uc = 1e3, ri, jr, oi = 0, ar = 0, Ni = 0, oo = typeof performance == "object" && performance.now ? performance : Date, Jc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Js() {
  return ar || (Jc(s1), ar = oo.now() + Ni);
}
function s1() {
  ar = 0;
}
function ii() {
  this._call = this._time = this._next = null;
}
ii.prototype = Qc.prototype = {
  constructor: ii,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Js() : +n) + (t == null ? 0 : +t), !this._next && jr !== this && (jr ? jr._next = this : ri = this, jr = this), this._call = e, this._time = n, gs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, gs());
  }
};
function Qc(e, t, n) {
  var r = new ii();
  return r.restart(e, t, n), r;
}
function a1() {
  Js(), ++Mr;
  for (var e = ri, t; e; )
    (t = ar - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Mr;
}
function ja() {
  ar = (oi = oo.now()) + Ni, Mr = qr = 0;
  try {
    a1();
  } finally {
    Mr = 0, c1(), ar = 0;
  }
}
function l1() {
  var e = oo.now(), t = e - oi;
  t > Uc && (Ni -= t, oi = e);
}
function c1() {
  for (var e, t = ri, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ri = n);
  jr = e, gs(r);
}
function gs(e) {
  if (!Mr) {
    qr && (qr = clearTimeout(qr));
    var t = e - ar;
    t > 24 ? (e < 1 / 0 && (qr = setTimeout(ja, e - oo.now() - Ni)), Yr && (Yr = clearInterval(Yr))) : (Yr || (oi = oo.now(), Yr = setInterval(l1, Uc)), Mr = 1, Jc(ja));
  }
}
function Ga(e, t, n) {
  var r = new ii();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var u1 = Ei("start", "end", "cancel", "interrupt"), d1 = [], eu = 0, Ua = 1, vs = 2, Yo = 3, Ja = 4, ps = 5, Wo = 6;
function Pi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  f1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: u1,
    tween: d1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: eu
  });
}
function Qs(e, t) {
  var n = Jt(e, t);
  if (n.state > eu) throw new Error("too late; already scheduled");
  return n;
}
function hn(e, t) {
  var n = Jt(e, t);
  if (n.state > Yo) throw new Error("too late; already running");
  return n;
}
function Jt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function f1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Qc(i, 0, n.time);
  function i(c) {
    n.state = Ua, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== Ua) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Yo) return Ga(s);
        g.state === Ja ? (g.state = Wo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Wo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Ga(function() {
      n.state === Yo && (n.state = Ja, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = vs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === vs) {
      for (n.state = Yo, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = ps, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === ps && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Wo, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Xo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > vs && r.state < ps, r.state = Wo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function h1(e) {
  return this.each(function() {
    Xo(this, e);
  });
}
function g1(e, t) {
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
function v1(e, t, n) {
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
function p1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Jt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? g1 : v1)(n, e, t));
}
function ea(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = hn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Jt(o, r).value[t];
  };
}
function tu(e, t) {
  var n;
  return (typeof t == "number" ? on : t instanceof sr ? ni : (n = sr(t)) ? (t = n, ni) : qc)(e, t);
}
function m1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function y1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function w1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function _1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function x1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function b1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function C1(e, t) {
  var n = Si(e), r = n === "transform" ? n1 : tu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? b1 : x1)(n, r, ea(this, "attr." + e, t)) : t == null ? (n.local ? y1 : m1)(n) : (n.local ? _1 : w1)(n, r, t));
}
function k1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function E1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function S1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && E1(e, i)), n;
  }
  return o._value = t, o;
}
function N1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && k1(e, i)), n;
  }
  return o._value = t, o;
}
function P1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Si(e);
  return this.tween(n, (r.local ? S1 : N1)(r, t));
}
function $1(e, t) {
  return function() {
    Qs(this, e).delay = +t.apply(this, arguments);
  };
}
function T1(e, t) {
  return t = +t, function() {
    Qs(this, e).delay = t;
  };
}
function D1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? $1 : T1)(t, e)) : Jt(this.node(), t).delay;
}
function A1(e, t) {
  return function() {
    hn(this, e).duration = +t.apply(this, arguments);
  };
}
function O1(e, t) {
  return t = +t, function() {
    hn(this, e).duration = t;
  };
}
function M1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? A1 : O1)(t, e)) : Jt(this.node(), t).duration;
}
function H1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    hn(this, e).ease = t;
  };
}
function L1(e) {
  var t = this._id;
  return arguments.length ? this.each(H1(t, e)) : Jt(this.node(), t).ease;
}
function V1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    hn(this, e).ease = n;
  };
}
function I1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(V1(this._id, e));
}
function z1(e) {
  typeof e != "function" && (e = Oc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new bn(r, this._parents, this._name, this._id);
}
function R1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new bn(s, this._parents, this._name, this._id);
}
function B1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function F1(e, t, n) {
  var r, o, i = B1(t) ? Qs : hn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function K1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Jt(this.node(), n).on.on(e) : this.each(F1(n, e, t));
}
function Z1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Y1() {
  return this.on("end.remove", Z1(this._id));
}
function W1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = qs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, Pi(c[f], t, n, f, c, Jt(d, n)));
  return new bn(i, this._parents, t, n);
}
function X1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ac(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, v = Jt(d, n), p = 0, w = f.length; p < w; ++p)
          (g = f[p]) && Pi(g, t, n, p, f, v);
        i.push(f), s.push(d);
      }
  return new bn(i, s, t, n);
}
var q1 = _o.prototype.constructor;
function j1() {
  return new q1(this._groups, this._parents);
}
function G1(e, t) {
  var n, r, o;
  return function() {
    var i = Or(this, e), s = (this.style.removeProperty(e), Or(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function nu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function U1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Or(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function J1(e, t, n) {
  var r, o, i;
  return function() {
    var s = Or(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Or(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Q1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = hn(this, e), c = l.on, d = l.value[i] == null ? a || (a = nu(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function ep(e, t, n) {
  var r = (e += "") == "transform" ? t1 : tu;
  return t == null ? this.styleTween(e, G1(e, r)).on("end.style." + e, nu(e)) : typeof t == "function" ? this.styleTween(e, J1(e, r, ea(this, "style." + e, t))).each(Q1(this._id, e)) : this.styleTween(e, U1(e, r, t), n).on("end.style." + e, null);
}
function tp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function np(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && tp(e, s, n)), r;
  }
  return i._value = t, i;
}
function rp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, np(e, t, n ?? ""));
}
function op(e) {
  return function() {
    this.textContent = e;
  };
}
function ip(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function sp(e) {
  return this.tween("text", typeof e == "function" ? ip(ea(this, "text", e)) : op(e == null ? "" : e + ""));
}
function ap(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function lp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && ap(o)), t;
  }
  return r._value = e, r;
}
function cp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, lp(e));
}
function up() {
  for (var e = this._name, t = this._id, n = ru(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = Jt(l, t);
        Pi(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new bn(r, this._parents, e, n);
}
function dp() {
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
var fp = 0;
function bn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ru() {
  return ++fp;
}
var gn = _o.prototype;
bn.prototype = {
  constructor: bn,
  select: W1,
  selectAll: X1,
  selectChild: gn.selectChild,
  selectChildren: gn.selectChildren,
  filter: z1,
  merge: R1,
  selection: j1,
  transition: up,
  call: gn.call,
  nodes: gn.nodes,
  node: gn.node,
  size: gn.size,
  empty: gn.empty,
  each: gn.each,
  on: K1,
  attr: C1,
  attrTween: P1,
  style: ep,
  styleTween: rp,
  text: sp,
  textTween: cp,
  remove: Y1,
  tween: p1,
  delay: D1,
  duration: M1,
  ease: L1,
  easeVarying: I1,
  end: dp,
  [Symbol.iterator]: gn[Symbol.iterator]
};
function hp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var gp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: hp
};
function vp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function pp(e) {
  var t, n;
  e instanceof bn ? (t = e._id, e = e._name) : (t = ru(), (n = gp).time = Js(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Pi(l, e, t, c, s, n || vp(l, t));
  return new bn(r, this._parents, e, t);
}
_o.prototype.interrupt = h1;
_o.prototype.transition = pp;
const Io = (e) => () => e;
function mp(e, {
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
function pn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
pn.prototype = {
  constructor: pn,
  scale: function(e) {
    return e === 1 ? this : new pn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new pn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var $i = new pn(1, 0, 0);
ou.prototype = pn.prototype;
function ou(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return $i;
  return e.__zoom;
}
function Zi(e) {
  e.stopImmediatePropagation();
}
function Wr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function yp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function wp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Qa() {
  return this.__zoom || $i;
}
function _p(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function xp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function bp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function iu() {
  var e = yp, t = wp, n = bp, r = _p, o = xp, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Zo, c = Ei("start", "zoom", "end"), d, h, f, g = 500, v = 150, p = 0, w = 10;
  function b(_) {
    _.property("__zoom", Qa).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", X).filter(o).on("touchstart.zoom", Q).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", C).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(_, T, D, L) {
    var F = _.selection ? _.selection() : _;
    F.property("__zoom", Qa), _ !== F ? $(_, T, D, L) : F.interrupt().each(function() {
      S(this, arguments).event(L).start().zoom(null, typeof T == "function" ? T.apply(this, arguments) : T).end();
    });
  }, b.scaleBy = function(_, T, D, L) {
    b.scaleTo(_, function() {
      var F = this.__zoom.k, K = typeof T == "function" ? T.apply(this, arguments) : T;
      return F * K;
    }, D, L);
  }, b.scaleTo = function(_, T, D, L) {
    b.transform(_, function() {
      var F = t.apply(this, arguments), K = this.__zoom, H = D == null ? k(F) : typeof D == "function" ? D.apply(this, arguments) : D, Y = K.invert(H), W = typeof T == "function" ? T.apply(this, arguments) : T;
      return n(x(N(K, W), H, Y), F, s);
    }, D, L);
  }, b.translateBy = function(_, T, D, L) {
    b.transform(_, function() {
      return n(this.__zoom.translate(
        typeof T == "function" ? T.apply(this, arguments) : T,
        typeof D == "function" ? D.apply(this, arguments) : D
      ), t.apply(this, arguments), s);
    }, null, L);
  }, b.translateTo = function(_, T, D, L, F) {
    b.transform(_, function() {
      var K = t.apply(this, arguments), H = this.__zoom, Y = L == null ? k(K) : typeof L == "function" ? L.apply(this, arguments) : L;
      return n($i.translate(Y[0], Y[1]).scale(H.k).translate(
        typeof T == "function" ? -T.apply(this, arguments) : -T,
        typeof D == "function" ? -D.apply(this, arguments) : -D
      ), K, s);
    }, L, F);
  };
  function N(_, T) {
    return T = Math.max(i[0], Math.min(i[1], T)), T === _.k ? _ : new pn(T, _.x, _.y);
  }
  function x(_, T, D) {
    var L = T[0] - D[0] * _.k, F = T[1] - D[1] * _.k;
    return L === _.x && F === _.y ? _ : new pn(_.k, L, F);
  }
  function k(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function $(_, T, D, L) {
    _.on("start.zoom", function() {
      S(this, arguments).event(L).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(L).end();
    }).tween("zoom", function() {
      var F = this, K = arguments, H = S(F, K).event(L), Y = t.apply(F, K), W = D == null ? k(Y) : typeof D == "function" ? D.apply(F, K) : D, U = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), j = F.__zoom, R = typeof T == "function" ? T.apply(F, K) : T, ee = l(j.invert(W).concat(U / j.k), R.invert(W).concat(U / R.k));
      return function(q) {
        if (q === 1) q = R;
        else {
          var ne = ee(q), J = U / ne[2];
          q = new pn(J, W[0] - ne[0] * J, W[1] - ne[1] * J);
        }
        H.zoom(null, q);
      };
    });
  }
  function S(_, T, D) {
    return !D && _.__zooming || new A(_, T);
  }
  function A(_, T) {
    this.that = _, this.args = T, this.active = 0, this.sourceEvent = null, this.extent = t.apply(_, T), this.taps = 0;
  }
  A.prototype = {
    event: function(_) {
      return _ && (this.sourceEvent = _), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(_, T) {
      return this.mouse && _ !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])), this.touch0 && _ !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])), this.touch1 && _ !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])), this.that.__zoom = T, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(_) {
      var T = Vt(this.that).datum();
      c.call(
        _,
        this.that,
        new mp(_, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: c
        }),
        T
      );
    }
  };
  function M(_, ...T) {
    if (!e.apply(this, arguments)) return;
    var D = S(this, T).event(_), L = this.__zoom, F = Math.max(i[0], Math.min(i[1], L.k * Math.pow(2, r.apply(this, arguments)))), K = Kt(_);
    if (D.wheel)
      (D.mouse[0][0] !== K[0] || D.mouse[0][1] !== K[1]) && (D.mouse[1] = L.invert(D.mouse[0] = K)), clearTimeout(D.wheel);
    else {
      if (L.k === F) return;
      D.mouse = [K, L.invert(K)], Xo(this), D.start();
    }
    Wr(_), D.wheel = setTimeout(H, v), D.zoom("mouse", n(x(N(L, F), D.mouse[0], D.mouse[1]), D.extent, s));
    function H() {
      D.wheel = null, D.end();
    }
  }
  function B(_, ...T) {
    if (f || !e.apply(this, arguments)) return;
    var D = _.currentTarget, L = S(this, T, !0).event(_), F = Vt(_.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", U, !0), K = Kt(_, D), H = _.clientX, Y = _.clientY;
    Kc(_.view), Zi(_), L.mouse = [K, this.__zoom.invert(K)], Xo(this), L.start();
    function W(j) {
      if (Wr(j), !L.moved) {
        var R = j.clientX - H, ee = j.clientY - Y;
        L.moved = R * R + ee * ee > p;
      }
      L.event(j).zoom("mouse", n(x(L.that.__zoom, L.mouse[0] = Kt(j, D), L.mouse[1]), L.extent, s));
    }
    function U(j) {
      F.on("mousemove.zoom mouseup.zoom", null), Zc(j.view, L.moved), Wr(j), L.event(j).end();
    }
  }
  function X(_, ...T) {
    if (e.apply(this, arguments)) {
      var D = this.__zoom, L = Kt(_.changedTouches ? _.changedTouches[0] : _, this), F = D.invert(L), K = D.k * (_.shiftKey ? 0.5 : 2), H = n(x(N(D, K), L, F), t.apply(this, T), s);
      Wr(_), a > 0 ? Vt(this).transition().duration(a).call($, H, L, _) : Vt(this).call(b.transform, H, L, _);
    }
  }
  function Q(_, ...T) {
    if (e.apply(this, arguments)) {
      var D = _.touches, L = D.length, F = S(this, T, _.changedTouches.length === L).event(_), K, H, Y, W;
      for (Zi(_), H = 0; H < L; ++H)
        Y = D[H], W = Kt(Y, this), W = [W, this.__zoom.invert(W), Y.identifier], F.touch0 ? !F.touch1 && F.touch0[2] !== W[2] && (F.touch1 = W, F.taps = 0) : (F.touch0 = W, K = !0, F.taps = 1 + !!d);
      d && (d = clearTimeout(d)), K && (F.taps < 2 && (h = W[0], d = setTimeout(function() {
        d = null;
      }, g)), Xo(this), F.start());
    }
  }
  function E(_, ...T) {
    if (this.__zooming) {
      var D = S(this, T).event(_), L = _.changedTouches, F = L.length, K, H, Y, W;
      for (Wr(_), K = 0; K < F; ++K)
        H = L[K], Y = Kt(H, this), D.touch0 && D.touch0[2] === H.identifier ? D.touch0[0] = Y : D.touch1 && D.touch1[2] === H.identifier && (D.touch1[0] = Y);
      if (H = D.that.__zoom, D.touch1) {
        var U = D.touch0[0], j = D.touch0[1], R = D.touch1[0], ee = D.touch1[1], q = (q = R[0] - U[0]) * q + (q = R[1] - U[1]) * q, ne = (ne = ee[0] - j[0]) * ne + (ne = ee[1] - j[1]) * ne;
        H = N(H, Math.sqrt(q / ne)), Y = [(U[0] + R[0]) / 2, (U[1] + R[1]) / 2], W = [(j[0] + ee[0]) / 2, (j[1] + ee[1]) / 2];
      } else if (D.touch0) Y = D.touch0[0], W = D.touch0[1];
      else return;
      D.zoom("touch", n(x(H, Y, W), D.extent, s));
    }
  }
  function C(_, ...T) {
    if (this.__zooming) {
      var D = S(this, T).event(_), L = _.changedTouches, F = L.length, K, H;
      for (Zi(_), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), K = 0; K < F; ++K)
        H = L[K], D.touch0 && D.touch0[2] === H.identifier ? delete D.touch0 : D.touch1 && D.touch1[2] === H.identifier && delete D.touch1;
      if (D.touch1 && !D.touch0 && (D.touch0 = D.touch1, delete D.touch1), D.touch0) D.touch0[1] = this.__zoom.invert(D.touch0[0]);
      else if (D.end(), D.taps === 2 && (H = Kt(H, this), Math.hypot(h[0] - H[0], h[1] - H[1]) < w)) {
        var Y = Vt(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Io(+_), b) : r;
  }, b.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Io(!!_), b) : e;
  }, b.touchable = function(_) {
    return arguments.length ? (o = typeof _ == "function" ? _ : Io(!!_), b) : o;
  }, b.extent = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Io([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), b) : t;
  }, b.scaleExtent = function(_) {
    return arguments.length ? (i[0] = +_[0], i[1] = +_[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(_) {
    return arguments.length ? (s[0][0] = +_[0][0], s[1][0] = +_[1][0], s[0][1] = +_[0][1], s[1][1] = +_[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(_) {
    return arguments.length ? (n = _, b) : n;
  }, b.duration = function(_) {
    return arguments.length ? (a = +_, b) : a;
  }, b.interpolate = function(_) {
    return arguments.length ? (l = _, b) : l;
  }, b.on = function() {
    var _ = c.on.apply(c, arguments);
    return _ === c ? b : _;
  }, b.clickDistance = function(_) {
    return arguments.length ? (p = (_ = +_) * _, b) : Math.sqrt(p);
  }, b.tapDistance = function(_) {
    return arguments.length ? (w = +_, b) : w;
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
}, ms = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], su = ["Enter", " ", "Escape"], Cp = {
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
var Hr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Hr || (Hr = {}));
var rr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(rr || (rr = {}));
var si;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(si || (si = {}));
const ys = {
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
const el = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function kp(e, t) {
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
function Ep(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const au = (e) => "id" in e && "source" in e && "target" in e, Sp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ta = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), bo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Xn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Np = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ta(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? ai(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ti(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Di(n);
}, Co = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ai(r);
      n = Ti(n, o);
    }
  }), Di(n);
}, na = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Eo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, p = ao(a, Vr(c)), w = (g ?? 0) * (v ?? 0), b = i && p > 0;
    (!c.internals.handleBounds || b || p >= w || c.dragging) && l.push(c);
  }
  return l;
}, Pp = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function $p(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Tp({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = $p(e, s), l = Co(a), c = ra(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function lu({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", io.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [l, c],
        [l + g, c + v]
      ]);
    }
  else a && Ir(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = Ir(h) ? lr(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", io.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Dp({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((p) => p.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = Pp(s, l);
  for (const f of l)
    a.has(f.id) && !d.find((v) => v.id === f.id) && d.push(f);
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
const Lr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), lr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Lr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Lr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function cu(e, t, n) {
  const { width: r, height: o } = Xn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return lr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const nl = (e, t, n) => e < t ? Lr(Math.abs(e - t), 1, t) / t : e > n ? -Lr(Math.abs(e - n), 1, t) / t : 0, uu = (e, t, n = 15, r = 40) => {
  const o = nl(e.x, r, t.width - r) * n, i = nl(e.y, r, t.height - r) * n;
  return [o, i];
}, Ti = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ws = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Di = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Vr = (e, t = [0, 0]) => {
  const { x: n, y: r } = ta(e) ? e.internals.positionAbsolute : bo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, ai = (e, t = [0, 0]) => {
  const { x: n, y: r } = ta(e) ? e.internals.positionAbsolute : bo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, du = (e, t) => Di(Ti(ws(e), ws(t))), ao = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, rl = (e) => mn(e.width) && mn(e.height) && mn(e.x) && mn(e.y), mn = (e) => !isNaN(e) && isFinite(e), Ap = (e, t) => {
}, ko = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Eo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ko(a, s) : a;
}, li = ({ x: e, y: t }, [n, r, o]) => ({
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
function Op(e, t, n) {
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
function Mp(e, t, n, r, o, i) {
  const { x: s, y: a } = li(e, [t, n, r]), { x: l, y: c } = li({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const ra = (e, t, n, r, o, i) => {
  const s = Op(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Lr(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, p = Mp(e, g, v, d, t, n), w = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: g - w.left + w.right,
    y: v - w.top + w.bottom,
    zoom: d
  };
}, Jn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Ir(e) {
  return e != null && e !== "parent";
}
function Xn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function fu(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Hp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Lp(e) {
  return { ...Cp, ...e || {} };
}
function Yi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Wt(e), a = Eo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? ko(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const hu = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), gu = (e) => e?.getRootNode?.() || window?.document, Vp = ["INPUT", "SELECT", "TEXTAREA"];
function vu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Vp.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const pu = (e) => "clientX" in e, Wt = (e, t) => {
  const n = pu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
      ...hu(s)
    };
  });
};
function Ip({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function zo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function il({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ye.Left:
      return [t - zo(t - r, i), n];
    case ye.Right:
      return [t + zo(r - t, i), n];
    case ye.Top:
      return [t, n - zo(n - o, i)];
    case ye.Bottom:
      return [t, n + zo(o - n, i)];
  }
}
function mu({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, curvature: s = 0.25 }) {
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
  }), [h, f, g, v] = Ip({
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
    v
  ];
}
function yu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function zp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Rp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ti(ai(e), ai(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ao(s, Di(i)) > 0;
}
const Bp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Fp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Kp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return au(e) ? n = { ...e } : n = {
    ...e,
    id: Bp(e)
  }, Fp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function wu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = yu({
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
}, Zp = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, al = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Yp({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i, stepPosition: s }) {
  const a = sl[t], l = sl[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Zp({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], p, w;
  const b = { x: 0, y: 0 }, N = { x: 0, y: 0 }, [, , x, k] = yu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (p = o.x ?? c.x + (d.x - c.x) * s, w = o.y ?? (c.y + d.y) / 2) : (p = o.x ?? (c.x + d.x) / 2, w = o.y ?? c.y + (d.y - c.y) * s);
    const S = [
      { x: p, y: c.y },
      { x: p, y: d.y }
    ], A = [
      { x: c.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === g ? v = f === "x" ? S : A : v = f === "x" ? A : S;
  } else {
    const S = [{ x: c.x, y: d.y }], A = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === g ? A : S : v = a.y === g ? S : A, t === r) {
      const E = Math.abs(e[f] - n[f]);
      if (E <= i) {
        const C = Math.min(i - 1, i - E);
        a[f] === g ? b[f] = (c[f] > e[f] ? -1 : 1) * C : N[f] = (d[f] > n[f] ? -1 : 1) * C;
      }
    }
    if (t !== r) {
      const E = f === "x" ? "y" : "x", C = a[f] === l[E], _ = c[E] > d[E], T = c[E] < d[E];
      (a[f] === 1 && (!C && _ || C && T) || a[f] !== 1 && (!C && T || C && _)) && (v = f === "x" ? S : A);
    }
    const M = { x: c.x + b.x, y: c.y + b.y }, B = { x: d.x + N.x, y: d.y + N.y }, X = Math.max(Math.abs(M.x - v[0].x), Math.abs(B.x - v[0].x)), Q = Math.max(Math.abs(M.y - v[0].y), Math.abs(B.y - v[0].y));
    X >= Q ? (p = (M.x + B.x) / 2, w = v[0].y) : (p = v[0].x, w = (M.y + B.y) / 2);
  }
  return [[
    e,
    { x: c.x + b.x, y: c.y + b.y },
    ...v,
    { x: d.x + N.x, y: d.y + N.y },
    n
  ], p, w, x, k];
}
function Wp(e, t, n, r) {
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
function oa({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, p] = Yp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((b, N, x) => {
    let k = "";
    return x > 0 && x < h.length - 1 ? k = Wp(h[x - 1], N, h[x + 1], s) : k = `${x === 0 ? "M" : "L"}${N.x} ${N.y}`, b += k, b;
  }, ""), f, g, v, p];
}
function ll(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Xp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ll(t) || !ll(n))
    return null;
  const r = t.internals.handleBounds || cl(t.handles), o = n.internals.handleBounds || cl(n.handles), i = ul(r?.source ?? [], e.sourceHandle), s = ul(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Hr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", io.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ye.Bottom, l = s?.position || ye.Top, c = lo(t, i, a), d = lo(n, s, l);
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
function lo(e, t, n = ye.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Xn(e);
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
function _s(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function qp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = _s(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function jp(e, t, n, r, o) {
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
const ia = {
  nodeOrigin: [0, 0],
  nodeExtent: ms,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Gp = {
  ...ia,
  checkEquality: !0
};
function sa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Up(e, t, n) {
  const r = sa(ia, n);
  for (const o of e.values())
    if (o.parentId)
      aa(o, e, t, r);
    else {
      const i = bo(o, r.nodeOrigin), s = Ir(o.extent) ? o.extent : r.nodeExtent, a = lr(i, s, Xn(o));
      o.internals.positionAbsolute = a;
    }
}
function Jp(e, t) {
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
function Qp(e, t, n, r) {
  const o = sa(Gp, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let c = s.get(l.id);
    if (o.checkEquality && l === c?.internals.userNode)
      t.set(l.id, c);
    else {
      const d = bo(l, o.nodeOrigin), h = Ir(l.extent) ? l.extent : o.nodeExtent, f = lr(d, h, Xn(l));
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
          handleBounds: Jp(l, c),
          z: _u(l, a),
          userNode: l
        }
      }, t.set(l.id, c);
    }
    (c.measured === void 0 || c.measured.width === void 0 || c.measured.height === void 0) && !c.hidden && (i = !1), l.parentId && aa(c, t, n, r);
  }
  return i;
}
function e0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function aa(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = sa(ia, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  e0(e, n);
  const c = o ? 1e3 : 0, { x: d, y: h, z: f } = t0(e, l, i, s, c), { positionAbsolute: g } = e.internals, v = d !== g.x || h !== g.y;
  (v || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: d, y: h } : g,
      z: f
    }
  });
}
function _u(e, t) {
  return (mn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function t0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Xn(e), l = bo(e, n), c = Ir(e.extent) ? lr(l, e.extent, a) : l;
  let d = lr({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = cu(d, a, t));
  const h = _u(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= h ? f + 1 : h
  };
}
function n0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Vr(a), c = du(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = Xn(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), p = Math.max(d.height, Math.round(s.height)), w = (v - d.width) * h[0], b = (p - d.height) * h[1];
    (f > 0 || g > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - g + b
      }
    }), n.get(l)?.forEach((N) => {
      e.some((x) => x.id === N.id) || o.push({
        id: N.id,
        type: "position",
        position: {
          x: N.position.x + f,
          y: N.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - w : 0),
        height: p + (g ? h[1] * g - b : 0)
      }
    });
  }), o;
}
function r0(e, t, n, r, o, i) {
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
    const v = hu(f.nodeElement), p = g.measured.width !== v.width || g.measured.height !== v.height;
    if (!!(v.width && v.height && (p || !g.internals.handleBounds || f.force))) {
      const b = f.nodeElement.getBoundingClientRect(), N = Ir(g.extent) ? g.extent : i;
      let { positionAbsolute: x } = g.internals;
      g.parentId && g.extent === "parent" ? x = cu(x, v, t.get(g.parentId)) : N && (x = lr(x, N, v));
      const k = {
        ...g,
        measured: v,
        internals: {
          ...g.internals,
          positionAbsolute: x,
          handleBounds: {
            source: ol("source", f.nodeElement, b, d, g.id),
            target: ol("target", f.nodeElement, b, d, g.id)
          }
        }
      };
      t.set(g.id, k), g.parentId && aa(k, t, n, { nodeOrigin: o }), a = !0, p && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: v
      }), g.expandParent && g.parentId && h.push({
        id: g.id,
        parentId: g.parentId,
        rect: Vr(k, o)
      }));
    }
  }
  if (h.length > 0) {
    const f = n0(h, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function o0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function i0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    dl("source", l, d, e, o, s), dl("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function s0(e, t) {
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
function xu(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : xu(n, t) : !1;
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
function a0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !xu(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Wi({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function l0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = ko(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function c0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, p = null;
  function w({ noDragClassName: N, handleSelector: x, domNode: k, isSelectable: $, nodeId: S, nodeClickDistance: A = 0 }) {
    f = Vt(k);
    function M({ x: E, y: C }) {
      const { nodeLookup: _, nodeExtent: T, snapGrid: D, snapToGrid: L, nodeOrigin: F, onNodeDrag: K, onSelectionDrag: H, onError: Y, updateNodePositions: W } = t();
      i = { x: E, y: C };
      let U = !1;
      const j = a.size > 1, R = j && T ? ws(Co(a)) : null, ee = j && L ? l0({
        dragItems: a,
        snapGrid: D,
        x: E,
        y: C
      }) : null;
      for (const [q, ne] of a) {
        if (!_.has(q))
          continue;
        let J = { x: E - ne.distance.x, y: C - ne.distance.y };
        L && (J = ee ? {
          x: Math.round(J.x + ee.x),
          y: Math.round(J.y + ee.y)
        } : ko(J, D));
        let we = null;
        if (j && T && !ne.extent && R) {
          const { positionAbsolute: re } = ne.internals, de = re.x - R.x + T[0][0], ge = re.x + ne.measured.width - R.x2 + T[1][0], _e = re.y - R.y + T[0][1], fe = re.y + ne.measured.height - R.y2 + T[1][1];
          we = [
            [de, _e],
            [ge, fe]
          ];
        }
        const { position: oe, positionAbsolute: ae } = lu({
          nodeId: q,
          nextPosition: J,
          nodeLookup: _,
          nodeExtent: we || T,
          nodeOrigin: F,
          onError: Y
        });
        U = U || ne.position.x !== oe.x || ne.position.y !== oe.y, ne.position = oe, ne.internals.positionAbsolute = ae;
      }
      if (v = v || U, !!U && (W(a, !0), p && (r || K || !S && H))) {
        const [q, ne] = Wi({
          nodeId: S,
          dragItems: a,
          nodeLookup: _
        });
        r?.(p, a, q, ne), K?.(p, q, ne), S || H?.(p, ne);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: E, panBy: C, autoPanSpeed: _, autoPanOnNodeDrag: T } = t();
      if (!T) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [D, L] = uu(c, d, _);
      (D !== 0 || L !== 0) && (i.x = (i.x ?? 0) - D / E[2], i.y = (i.y ?? 0) - L / E[2], await C({ x: D, y: L }) && M(i)), s = requestAnimationFrame(B);
    }
    function X(E) {
      const { nodeLookup: C, multiSelectionActive: _, nodesDraggable: T, transform: D, snapGrid: L, snapToGrid: F, selectNodesOnDrag: K, onNodeDragStart: H, onSelectionDragStart: Y, unselectNodesAndEdges: W } = t();
      h = !0, (!K || !$) && !_ && S && (C.get(S)?.selected || W()), $ && K && S && e?.(S);
      const U = Yi(E.sourceEvent, { transform: D, snapGrid: L, snapToGrid: F, containerBounds: d });
      if (i = U, a = a0(C, T, U, S), a.size > 0 && (n || H || !S && Y)) {
        const [j, R] = Wi({
          nodeId: S,
          dragItems: a,
          nodeLookup: C
        });
        n?.(E.sourceEvent, a, j, R), H?.(E.sourceEvent, j, R), S || Y?.(E.sourceEvent, R);
      }
    }
    const Q = Tv().clickDistance(A).on("start", (E) => {
      const { domNode: C, nodeDragThreshold: _, transform: T, snapGrid: D, snapToGrid: L } = t();
      d = C?.getBoundingClientRect() || null, g = !1, v = !1, p = E.sourceEvent, _ === 0 && X(E), i = Yi(E.sourceEvent, { transform: T, snapGrid: D, snapToGrid: L, containerBounds: d }), c = Wt(E.sourceEvent, d);
    }).on("drag", (E) => {
      const { autoPanOnNodeDrag: C, transform: _, snapGrid: T, snapToGrid: D, nodeDragThreshold: L, nodeLookup: F } = t(), K = Yi(E.sourceEvent, { transform: _, snapGrid: T, snapToGrid: D, containerBounds: d });
      if (p = E.sourceEvent, (E.sourceEvent.type === "touchmove" && E.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      S && !F.has(S)) && (g = !0), !g) {
        if (!l && C && h && (l = !0, B()), !h) {
          const H = Wt(E.sourceEvent, d), Y = H.x - c.x, W = H.y - c.y;
          Math.sqrt(Y * Y + W * W) > L && X(E);
        }
        (i.x !== K.xSnapped || i.y !== K.ySnapped) && a && h && (c = Wt(E.sourceEvent, d), M(K));
      }
    }).on("end", (E) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: C, updateNodePositions: _, onNodeDragStop: T, onSelectionDragStop: D } = t();
        if (v && (_(a, !1), v = !1), o || T || !S && D) {
          const [L, F] = Wi({
            nodeId: S,
            dragItems: a,
            nodeLookup: C,
            dragging: !1
          });
          o?.(E.sourceEvent, a, L, F), T?.(E.sourceEvent, L, F), S || D?.(E.sourceEvent, F);
        }
      }
    }).filter((E) => {
      const C = E.target;
      return !E.button && (!N || !fl(C, `.${N}`, k)) && (!x || fl(C, x, k));
    });
    f.call(Q);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function u0(e, t, n) {
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
const d0 = 250;
function f0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = u0(e, n, t + d0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: h } = lo(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
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
function bu(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...lo(s, l, l.position, !0) } : l;
}
function Cu(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function h0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ku = () => !0;
function g0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: p, onConnectEnd: w, isValidConnection: b = ku, onReconnectEnd: N, updateConnection: x, getTransform: k, getFromHandle: $, autoPanSpeed: S, dragThreshold: A = 1, handleDomNode: M }) {
  const B = gu(e.target);
  let X = 0, Q;
  const { x: E, y: C } = Wt(e), _ = Cu(i, M), T = a?.getBoundingClientRect();
  let D = !1;
  if (!T || !_)
    return;
  const L = bu(o, _, r, l, t);
  if (!L)
    return;
  let F = Wt(e, T), K = !1, H = null, Y = !1, W = null;
  function U() {
    if (!d || !T)
      return;
    const [oe, ae] = uu(F, T, S);
    f({ x: oe, y: ae }), X = requestAnimationFrame(U);
  }
  const j = {
    ...L,
    nodeId: o,
    type: _,
    position: L.position
  }, R = l.get(o);
  let q = {
    inProgress: !0,
    isValid: null,
    from: lo(R, j, ye.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: R,
    to: F,
    toHandle: null,
    toPosition: el[j.position],
    toNode: null
  };
  function ne() {
    D = !0, x(q), v?.(e, { nodeId: o, handleId: r, handleType: _ });
  }
  A === 0 && ne();
  function J(oe) {
    if (!D) {
      const { x: ge, y: _e } = Wt(oe), fe = ge - E, be = _e - C;
      if (!(fe * fe + be * be > A * A))
        return;
      ne();
    }
    if (!$() || !j) {
      we(oe);
      return;
    }
    const ae = k();
    F = Wt(oe, T), Q = f0(Eo(F, ae, !1, [1, 1]), n, l, j), K || (U(), K = !0);
    const re = Eu(oe, {
      handle: Q,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: B,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    W = re.handleDomNode, H = re.connection, Y = h0(!!Q, re.isValid);
    const de = {
      // from stays the same
      ...q,
      isValid: Y,
      to: re.toHandle && Y ? li({ x: re.toHandle.x, y: re.toHandle.y }, ae) : F,
      toHandle: re.toHandle,
      toPosition: Y && re.toHandle ? re.toHandle.position : el[j.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null
    };
    Y && Q && q.toHandle && de.toHandle && q.toHandle.type === de.toHandle.type && q.toHandle.nodeId === de.toHandle.nodeId && q.toHandle.id === de.toHandle.id && q.to.x === de.to.x && q.to.y === de.to.y || (x(de), q = de);
  }
  function we(oe) {
    if (!("touches" in oe && oe.touches.length > 0)) {
      if (D) {
        (Q || W) && H && Y && p?.(H);
        const { inProgress: ae, ...re } = q, de = {
          ...re,
          toPosition: q.toHandle ? q.toPosition : null
        };
        w?.(oe, de), i && N?.(oe, de);
      }
      g(), cancelAnimationFrame(X), K = !1, Y = !1, H = null, W = null, B.removeEventListener("mousemove", J), B.removeEventListener("mouseup", we), B.removeEventListener("touchmove", J), B.removeEventListener("touchend", we);
    }
  }
  B.addEventListener("mousemove", J), B.addEventListener("mouseup", we), B.addEventListener("touchmove", J), B.addEventListener("touchend", we);
}
function Eu(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = ku, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = Wt(e), p = s.elementFromPoint(g, v), w = p?.classList.contains(`${a}-flow__handle`) ? p : f, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const N = Cu(void 0, w), x = w.getAttribute("data-nodeid"), k = w.getAttribute("data-handleid"), $ = w.classList.contains("connectable"), S = w.classList.contains("connectableend");
    if (!x || !N)
      return b;
    const A = {
      source: h ? x : r,
      sourceHandle: h ? k : o,
      target: h ? r : x,
      targetHandle: h ? o : k
    };
    b.connection = A;
    const B = $ && S && (n === Hr.Strict ? h && N === "source" || !h && N === "target" : x !== r || k !== o);
    b.isValid = B && c(A), b.toHandle = bu(x, N, k, d, n, !0);
  }
  return b;
}
const hl = {
  onPointerDown: g0,
  isValid: Eu
};
function v0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Vt(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (x) => {
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = n(), $ = x.sourceEvent.ctrlKey && Jn() ? 10 : 1, S = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, A = k[2] * Math.pow(2, S * $);
      t.scaleTo(A);
    };
    let p = [0, 0];
    const w = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (p = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, b = (x) => {
      const k = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const $ = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], S = [$[0] - p[0], $[1] - p[1]];
      p = $;
      const A = r() * Math.max(k[2], Math.log(k[2])) * (g ? -1 : 1), M = {
        x: k[0] - S[0] * A,
        y: k[1] - S[1] * A
      }, B = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: k[2]
      }, B, a);
    }, N = iu().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", f ? v : null);
    o.call(N, {});
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
const p0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ai = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Xi = ({ x: e, y: t, zoom: n }) => $i.translate(e, t).scale(n), yr = (e, t) => e.target.closest(`.${t}`), Su = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), m0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, qi = (e, t = 0, n = m0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Nu = (e) => {
  const t = e.ctrlKey && Jn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function y0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (yr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = Kt(d), b = Nu(d), N = h * Math.pow(2, b);
      r.scaleTo(n, N, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === rr.Vertical ? 0 : d.deltaX * f, v = o === rr.Horizontal ? 0 : d.deltaY * f;
    !Jn() && d.shiftKey && o !== rr.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = Ai(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, p)), e.isPanScrolling && (l?.(d, p), e.panScrollTimeout = setTimeout(() => {
      c?.(d, p), e.isPanScrolling = !1;
    }, 150));
  };
}
function w0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = yr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function _0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ai(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function x0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Su(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ai(i.transform));
  };
}
function b0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Su(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && p0(e.prevViewport, s.transform))) {
      const a = Ai(s.transform);
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
function C0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (yr(h, `${c}-flow__node`) || yr(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || yr(h, a) && v || yr(h, l) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && p;
  };
}
function k0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: c }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), f = iu().clickDistance(!mn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Vt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: Lr(i.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const v = g.on("wheel.zoom"), p = g.on("dblclick.zoom");
  f.wheelDelta(Nu);
  function w(E, C) {
    return g ? new Promise((_) => {
      f?.interpolate(C?.interpolate === "linear" ? Qr : Zo).transform(qi(g, C?.duration, C?.ease, () => _(!0)), E);
    }) : Promise.resolve(!1);
  }
  function b({ noWheelClassName: E, noPanClassName: C, onPaneContextMenu: _, userSelectionActive: T, panOnScroll: D, panOnDrag: L, panOnScrollMode: F, panOnScrollSpeed: K, preventScrolling: H, zoomOnPinch: Y, zoomOnScroll: W, zoomOnDoubleClick: U, zoomActivationKeyPressed: j, lib: R, onTransformChange: ee, connectionInProgress: q }) {
    T && !d.isZoomingOrPanning && N();
    const J = D && !j && !T ? y0({
      zoomPanValues: d,
      noWheelClassName: E,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: F,
      panOnScrollSpeed: K,
      zoomOnPinch: Y,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : w0({
      noWheelClassName: E,
      preventScrolling: H,
      d3ZoomHandler: v
    });
    if (g.on("wheel.zoom", J, { passive: !1 }), !T) {
      const oe = _0({
        zoomPanValues: d,
        onDraggingChange: c,
        onPanZoomStart: a
      });
      f.on("start", oe);
      const ae = x0({
        zoomPanValues: d,
        panOnDrag: L,
        onPaneContextMenu: !!_,
        onPanZoom: s,
        onTransformChange: ee
      });
      f.on("zoom", ae);
      const re = b0({
        zoomPanValues: d,
        panOnDrag: L,
        panOnScroll: D,
        onPaneContextMenu: _,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      f.on("end", re);
    }
    const we = C0({
      zoomActivationKeyPressed: j,
      panOnDrag: L,
      zoomOnScroll: W,
      panOnScroll: D,
      zoomOnDoubleClick: U,
      zoomOnPinch: Y,
      userSelectionActive: T,
      noPanClassName: C,
      noWheelClassName: E,
      lib: R,
      connectionInProgress: q
    });
    f.filter(we), U ? g.on("dblclick.zoom", p) : g.on("dblclick.zoom", null);
  }
  function N() {
    f.on("zoom", null);
  }
  async function x(E, C, _) {
    const T = Xi(E), D = f?.constrain()(T, C, _);
    return D && await w(D), new Promise((L) => L(D));
  }
  async function k(E, C) {
    const _ = Xi(E);
    return await w(_, C), new Promise((T) => T(_));
  }
  function $(E) {
    if (g) {
      const C = Xi(E), _ = g.property("__zoom");
      (_.k !== E.zoom || _.x !== E.x || _.y !== E.y) && f?.transform(g, C, null, { sync: !0 });
    }
  }
  function S() {
    const E = g ? ou(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: E.x, y: E.y, zoom: E.k };
  }
  function A(E, C) {
    return g ? new Promise((_) => {
      f?.interpolate(C?.interpolate === "linear" ? Qr : Zo).scaleTo(qi(g, C?.duration, C?.ease, () => _(!0)), E);
    }) : Promise.resolve(!1);
  }
  function M(E, C) {
    return g ? new Promise((_) => {
      f?.interpolate(C?.interpolate === "linear" ? Qr : Zo).scaleBy(qi(g, C?.duration, C?.ease, () => _(!0)), E);
    }) : Promise.resolve(!1);
  }
  function B(E) {
    f?.scaleExtent(E);
  }
  function X(E) {
    f?.translateExtent(E);
  }
  function Q(E) {
    const C = !mn(E) || E < 0 ? 0 : E;
    f?.clickDistance(C);
  }
  return {
    update: b,
    destroy: N,
    setViewport: k,
    setViewportConstrained: x,
    getViewport: S,
    scaleTo: A,
    scaleBy: M,
    setScaleExtent: B,
    setTranslateExtent: X,
    syncViewport: $,
    setClickDistance: Q
  };
}
var gl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(gl || (gl = {}));
var E0 = /* @__PURE__ */ te("<div><!></div>");
function Rn(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => ye.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), c = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), h = y(t, "onconnect", 7), f = y(t, "ondisconnect", 7), g = y(t, "children", 7), v = /* @__PURE__ */ Ie(t, [
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
  const p = In("svelteflow__node_id"), w = In("svelteflow__node_connectable");
  let b = /* @__PURE__ */ P(() => r() === "target"), N = /* @__PURE__ */ P(() => a() !== void 0 ? a() : w.value), x = Qt(), k = /* @__PURE__ */ P(() => x.ariaLabelConfig), $ = null;
  lc(() => {
    if (h() || f()) {
      x.edges;
      let H = x.connectionLookup.get(`${p}-${r()}${n() ? `-${n()}` : ""}`);
      if ($ && !kp(H, $)) {
        const Y = H ?? /* @__PURE__ */ new Map();
        tl($, Y, f()), tl(Y, $, h());
      }
      $ = new Map(H);
    }
  });
  let S = /* @__PURE__ */ P(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: H, toHandle: Y, isValid: W } = x.connection, U = H && H.nodeId === p && H.type === r() && H.id === n(), j = Y && Y.nodeId === p && Y.type === r() && Y.id === n(), R = x.connectionMode === Hr.Strict ? H?.type !== r() : p !== H?.nodeId || n() !== H?.id;
    return [
      !0,
      U,
      j,
      R,
      j && W
    ];
  }), A = /* @__PURE__ */ P(() => go(u(S), 5)), M = /* @__PURE__ */ P(() => u(A)[0]), B = /* @__PURE__ */ P(() => u(A)[1]), X = /* @__PURE__ */ P(() => u(A)[2]), Q = /* @__PURE__ */ P(() => u(A)[3]), E = /* @__PURE__ */ P(() => u(A)[4]);
  function C(H) {
    const Y = x.onbeforeconnect ? x.onbeforeconnect(H) : H;
    Y && (x.addEdge(Y), x.onconnect?.(H));
  }
  function _(H) {
    const Y = pu(H);
    H.currentTarget && (Y && H.button === 0 || !Y) && hl.onPointerDown(H, {
      handleId: n(),
      nodeId: p,
      isTarget: u(b),
      connectionRadius: x.connectionRadius,
      domNode: x.domNode,
      nodeLookup: x.nodeLookup,
      connectionMode: x.connectionMode,
      lib: "svelte",
      autoPanOnConnect: x.autoPanOnConnect,
      autoPanSpeed: x.autoPanSpeed,
      flowId: x.flowId,
      isValidConnection: d() ?? x.isValidConnection,
      updateConnection: x.updateConnection,
      cancelConnection: x.cancelConnection,
      panBy: x.panBy,
      onConnect: C,
      onConnectStart: (W, U) => {
        x.onconnectstart?.(W, {
          nodeId: U.nodeId,
          handleId: U.handleId,
          handleType: U.handleType
        });
      },
      onConnectEnd: (W, U) => {
        x.onconnectend?.(W, U);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold,
      handleDomNode: H.currentTarget
    });
  }
  function T(H) {
    if (!p || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(H, { nodeId: p, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: p, type: r(), id: n() };
      return;
    }
    const Y = gu(H.target), W = d() ?? x.isValidConnection, { connectionMode: U, clickConnectStartHandle: j, flowId: R, nodeLookup: ee } = x, { connection: q, isValid: ne } = hl.isValid(H, {
      handle: { nodeId: p, id: n(), type: r() },
      connectionMode: U,
      fromNodeId: j.nodeId,
      fromHandleId: j.id ?? null,
      fromType: j.type,
      isValidConnection: W,
      flowId: R,
      doc: Y,
      lib: "svelte",
      nodeLookup: ee
    });
    ne && q && C(q);
    const J = structuredClone(Fl(x.connection));
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, x.onclickconnectend?.(H, J), x.clickConnectStartHandle = null;
  }
  var D = {
    get id() {
      return n();
    },
    set id(H = null) {
      n(H), m();
    },
    get type() {
      return r();
    },
    set type(H = "source") {
      r(H), m();
    },
    get position() {
      return o();
    },
    set position(H = ye.Top) {
      o(H), m();
    },
    get style() {
      return i();
    },
    set style(H) {
      i(H), m();
    },
    get class() {
      return s();
    },
    set class(H) {
      s(H), m();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(H) {
      a(H), m();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(H = !0) {
      l(H), m();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd(H = !0) {
      c(H), m();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(H) {
      d(H), m();
    },
    get onconnect() {
      return h();
    },
    set onconnect(H) {
      h(H), m();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(H) {
      f(H), m();
    },
    get children() {
      return g();
    },
    set children(H) {
      g(H), m();
    }
  }, L = E0(), F = () => {
  };
  nt(
    L,
    (H) => ({
      "data-handleid": n(),
      "data-nodeid": p,
      "data-handlepos": o(),
      "data-id": `${x.flowId ?? ""}-${p ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        x.noDragClass,
        x.noPanClass,
        o(),
        s()
      ],
      onmousedown: _,
      ontouchstart: _,
      onclick: x.clickConnect ? T : void 0,
      onkeypress: F,
      style: i(),
      role: "button",
      "aria-label": u(k)["handle.ariaLabel"],
      tabindex: "-1",
      ...v,
      [Dn]: H
    }),
    [
      () => ({
        valid: u(E),
        connectingto: u(X),
        connectingfrom: u(B),
        source: !u(b),
        target: u(b),
        connectablestart: l(),
        connectableend: c(),
        connectable: u(N),
        connectionindicator: u(N) && (!u(M) || u(Q)) && (u(M) || x.clickConnectStartHandle ? c() : l())
      })
    ]
  );
  var K = z(L);
  return qe(K, () => g() ?? ft), I(L), O(e, L), ue(D);
}
se(
  Rn,
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
var S0 = /* @__PURE__ */ te("<!> <!>", 1);
function la(e, t) {
  ce(t, !0);
  let n = y(t, "data", 7), r = y(t, "targetPosition", 23, () => ye.Top), o = y(t, "sourcePosition", 23, () => ye.Bottom);
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
    set targetPosition(d = ye.Top) {
      r(d), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = ye.Bottom) {
      o(d), m();
    }
  }, s = S0(), a = ie(s);
  Rn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = V(a), c = V(l);
  return Rn(c, {
    type: "source",
    get position() {
      return o();
    }
  }), Ce(() => Re(l, ` ${n()?.label ?? ""} `)), O(e, s), ue(i);
}
se(la, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var N0 = /* @__PURE__ */ te(" <!>", 1);
function Pu(e, t) {
  ce(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "sourcePosition", 23, () => ye.Bottom);
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
    set sourcePosition(l = ye.Bottom) {
      r(l), m();
    }
  };
  pe();
  var i = N0(), s = ie(i), a = V(s);
  return Rn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ce(() => Re(s, `${n()?.label ?? ""} `)), O(e, i), ue(o);
}
se(Pu, { data: {}, sourcePosition: {} }, [], [], !0);
var P0 = /* @__PURE__ */ te(" <!>", 1);
function $u(e, t) {
  ce(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "targetPosition", 23, () => ye.Top);
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
    set targetPosition(l = ye.Top) {
      r(l), m();
    }
  };
  pe();
  var i = P0(), s = ie(i), a = V(s);
  return Rn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ce(() => Re(s, `${n()?.label ?? ""} `)), O(e, i), ue(o);
}
se($u, { data: {}, targetPosition: {} }, [], [], !0);
function Tu(e, t) {
}
se(Tu, {}, [], [], !0);
function ji(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Du(e, t) {
  const n = /* @__PURE__ */ P(Qt), r = /* @__PURE__ */ P(() => u(n).domNode);
  let o;
  return u(r) ? ji(e, u(r), t) : o = Bs(() => {
    Xe(() => {
      ji(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      ji(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Au() {
  let e = /* @__PURE__ */ $e(typeof window > "u");
  if (u(e)) {
    const t = Bs(() => {
      Xe(() => {
        G(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const vl = (e) => Sp(e), $0 = (e) => au(e);
function dn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const ci = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var T0 = /* @__PURE__ */ te("<div><!></div>");
const D0 = {
  hash: "svelte-yagk5c",
  code: ".transparent.svelte-yagk5c {background:transparent;}"
};
function Ou(e, t) {
  ce(t, !0), Le(e, D0);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), c = y(t, "children", 7), d = /* @__PURE__ */ Ie(t, [
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
  const h = Qt(), f = In("svelteflow__edge_id");
  let g = /* @__PURE__ */ P(() => h.visible.edges.get(f)?.zIndex);
  var v = {
    get x() {
      return n();
    },
    set x(N = 0) {
      n(N), m();
    },
    get y() {
      return r();
    },
    set y(N = 0) {
      r(N), m();
    },
    get width() {
      return o();
    },
    set width(N) {
      o(N), m();
    },
    get height() {
      return i();
    },
    set height(N) {
      i(N), m();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(N = !1) {
      s(N), m();
    },
    get transparent() {
      return a();
    },
    set transparent(N = !1) {
      a(N), m();
    },
    get class() {
      return l();
    },
    set class(N) {
      l(N), m();
    },
    get children() {
      return c();
    },
    set children(N) {
      c(N), m();
    }
  }, p = T0(), w = () => {
    s() && f && h.handleEdgeSelection(f);
  };
  nt(
    p,
    (N) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [sn]: N
    }),
    [
      () => ({
        display: Au().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: dn(o()),
        height: dn(i()),
        "z-index": u(g)
      })
    ],
    void 0,
    "svelte-yagk5c"
  );
  var b = z(p);
  return qe(b, () => c() ?? ft), I(p), gt(p, (N, x) => Du?.(N, x), () => "edge-labels"), O(e, p), ue(v);
}
se(
  Ou,
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
var A0 = /* @__PURE__ */ ve("<path></path>"), O0 = /* @__PURE__ */ ve('<path fill="none"></path><!><!>', 1);
function So(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), c = y(t, "markerEnd", 7), d = y(t, "style", 7), h = y(t, "interactionWidth", 7, 20), f = y(t, "class", 7), g = /* @__PURE__ */ Ie(t, [
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
    set id($) {
      n($), m();
    },
    get path() {
      return r();
    },
    set path($) {
      r($), m();
    },
    get label() {
      return o();
    },
    set label($) {
      o($), m();
    },
    get labelX() {
      return i();
    },
    set labelX($) {
      i($), m();
    },
    get labelY() {
      return s();
    },
    set labelY($) {
      s($), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle($) {
      a($), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart($) {
      l($), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd($) {
      c($), m();
    },
    get style() {
      return d();
    },
    set style($) {
      d($), m();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth($ = 20) {
      h($), m();
    },
    get class() {
      return f();
    },
    set class($) {
      f($), m();
    }
  }, p = O0(), w = ie(p), b = V(w);
  {
    var N = ($) => {
      var S = A0();
      nt(S, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), O($, S);
    };
    le(b, ($) => {
      h() > 0 && $(N);
    });
  }
  var x = V(b);
  {
    var k = ($) => {
      Ou($, {
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
        children: (S, A) => {
          pe();
          var M = ke();
          Ce(() => Re(M, o())), O(S, M);
        },
        $$slots: { default: !0 }
      });
    };
    le(x, ($) => {
      o() && $(k);
    });
  }
  return Ce(() => {
    xe(w, "id", n()), xe(w, "d", r()), Nt(w, 0, Sn(["svelte-flow__edge-path", f()])), xe(w, "marker-start", l()), xe(w, "marker-end", c()), ht(w, d());
  }), O(e, p), ue(v);
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
function ca(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), c = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), h = y(t, "sourceY", 7), f = y(t, "style", 7), g = y(t, "targetPosition", 7), v = y(t, "targetX", 7), p = y(t, "targetY", 7), w = /* @__PURE__ */ P(() => mu({
    sourceX: d(),
    sourceY: h(),
    targetX: v(),
    targetY: p(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ P(() => go(u(w), 3)), N = /* @__PURE__ */ P(() => u(b)[0]), x = /* @__PURE__ */ P(() => u(b)[1]), k = /* @__PURE__ */ P(() => u(b)[2]);
  var $ = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), m();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(S) {
      r(S), m();
    },
    get label() {
      return o();
    },
    set label(S) {
      o(S), m();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(S) {
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
    get pathOptions() {
      return l();
    },
    set pathOptions(S) {
      l(S), m();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(S) {
      c(S), m();
    },
    get sourceX() {
      return d();
    },
    set sourceX(S) {
      d(S), m();
    },
    get sourceY() {
      return h();
    },
    set sourceY(S) {
      h(S), m();
    },
    get style() {
      return f();
    },
    set style(S) {
      f(S), m();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(S) {
      g(S), m();
    },
    get targetX() {
      return v();
    },
    set targetX(S) {
      v(S), m();
    },
    get targetY() {
      return p();
    },
    set targetY(S) {
      p(S), m();
    }
  };
  return So(e, {
    get id() {
      return n();
    },
    get path() {
      return u(N);
    },
    get labelX() {
      return u(x);
    },
    get labelY() {
      return u(k);
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
  }), ue($);
}
se(
  ca,
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
function Mu(e, t) {
  ce(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), c = y(t, "sourceX", 7), d = y(t, "sourceY", 7), h = y(t, "targetPosition", 7), f = y(t, "targetX", 7), g = y(t, "targetY", 7), v = /* @__PURE__ */ P(() => oa({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: h()
  })), p = /* @__PURE__ */ P(() => go(u(v), 3)), w = /* @__PURE__ */ P(() => u(p)[0]), b = /* @__PURE__ */ P(() => u(p)[1]), N = /* @__PURE__ */ P(() => u(p)[2]);
  var x = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(k) {
      n(k), m();
    },
    get label() {
      return r();
    },
    set label(k) {
      r(k), m();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(k) {
      o(k), m();
    },
    get style() {
      return i();
    },
    set style(k) {
      i(k), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), m();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(k) {
      l(k), m();
    },
    get sourceX() {
      return c();
    },
    set sourceX(k) {
      c(k), m();
    },
    get sourceY() {
      return d();
    },
    set sourceY(k) {
      d(k), m();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(k) {
      h(k), m();
    },
    get targetX() {
      return f();
    },
    set targetX(k) {
      f(k), m();
    },
    get targetY() {
      return g();
    },
    set targetY(k) {
      g(k), m();
    }
  };
  return So(e, {
    get path() {
      return u(w);
    },
    get labelX() {
      return u(b);
    },
    get labelY() {
      return u(N);
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
  }), ue(x);
}
se(
  Mu,
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
function Hu(e, t) {
  ce(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), c = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), h = y(t, "style", 7), f = /* @__PURE__ */ P(() => wu({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ P(() => go(u(f), 3)), v = /* @__PURE__ */ P(() => u(g)[0]), p = /* @__PURE__ */ P(() => u(g)[1]), w = /* @__PURE__ */ P(() => u(g)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(N) {
      n(N), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(N) {
      r(N), m();
    },
    get targetX() {
      return o();
    },
    set targetX(N) {
      o(N), m();
    },
    get targetY() {
      return i();
    },
    set targetY(N) {
      i(N), m();
    },
    get label() {
      return s();
    },
    set label(N) {
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
    get interactionWidth() {
      return d();
    },
    set interactionWidth(N) {
      d(N), m();
    },
    get style() {
      return h();
    },
    set style(N) {
      h(N), m();
    }
  };
  return So(e, {
    get path() {
      return u(v);
    },
    get labelX() {
      return u(p);
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
  }), ue(b);
}
se(
  Hu,
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
function Lu(e, t) {
  ce(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), c = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), h = y(t, "markerEnd", 7), f = y(t, "interactionWidth", 7), g = y(t, "style", 7), v = /* @__PURE__ */ P(() => oa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), p = /* @__PURE__ */ P(() => go(u(v), 3)), w = /* @__PURE__ */ P(() => u(p)[0]), b = /* @__PURE__ */ P(() => u(p)[1]), N = /* @__PURE__ */ P(() => u(p)[2]);
  var x = {
    get sourceX() {
      return n();
    },
    set sourceX(k) {
      n(k), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(k) {
      r(k), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(k) {
      o(k), m();
    },
    get targetX() {
      return i();
    },
    set targetX(k) {
      i(k), m();
    },
    get targetY() {
      return s();
    },
    set targetY(k) {
      s(k), m();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(k) {
      a(k), m();
    },
    get label() {
      return l();
    },
    set label(k) {
      l(k), m();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(k) {
      c(k), m();
    },
    get markerStart() {
      return d();
    },
    set markerStart(k) {
      d(k), m();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(k) {
      h(k), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(k) {
      f(k), m();
    },
    get style() {
      return g();
    },
    set style(k) {
      g(k), m();
    }
  };
  return So(e, {
    get path() {
      return u(w);
    },
    get labelX() {
      return u(b);
    },
    get labelY() {
      return u(N);
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
  }), ue(x);
}
se(
  Lu,
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
class M0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = jl(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const H0 = /\(.+\)/, L0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class V0 extends M0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = H0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => L0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => is(o, "change", i)
    );
  }
}
function I0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return na(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
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
      const { visibleNodes: p, transform: w, width: b, height: N } = e;
      if (Rp({
        sourceNode: h,
        targetNode: f,
        width: b,
        height: N,
        transform: w
      }))
        p.set(h.id, h), p.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && h == g.sourceNode && f == g.targetNode) {
      c.set(d.id, g);
      continue;
    }
    const v = Xp({
      id: d.id,
      sourceNode: h,
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
      zIndex: zp({
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
const Vu = {
  input: Pu,
  output: $u,
  default: la,
  group: Tu
}, Iu = {
  straight: Hu,
  smoothstep: Mu,
  default: ca,
  step: Lu
};
function z0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Co(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ra(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function R0(e) {
  class t {
    #t = /* @__PURE__ */ P(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      G(this.#t, r);
    }
    #e = /* @__PURE__ */ $e(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      G(this.#e, r);
    }
    #a = /* @__PURE__ */ $e(null);
    get panZoom() {
      return u(this.#a);
    }
    set panZoom(r) {
      G(this.#a, r);
    }
    #i = /* @__PURE__ */ $e(e.width ?? 0);
    get width() {
      return u(this.#i);
    }
    set width(r) {
      G(this.#i, r);
    }
    #d = /* @__PURE__ */ $e(e.height ?? 0);
    get height() {
      return u(this.#d);
    }
    set height(r) {
      G(this.#d, r);
    }
    #s = /* @__PURE__ */ P(() => {
      const r = Qp(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return u(this.#s);
    }
    set nodesInitialized(r) {
      G(this.#s, r);
    }
    #r = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#r);
    }
    set viewportInitialized(r) {
      G(this.#r, r);
    }
    #n = /* @__PURE__ */ P(() => (i0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#n);
    }
    set _edges(r) {
      G(this.#n, r);
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
      return u(this.#o);
    }
    set selectedNodes(r) {
      G(this.#o, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#l);
    }
    set selectedEdges(r) {
      G(this.#l, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #f = /* @__PURE__ */ P(() => {
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
        const { viewport: v, width: p, height: w } = this, b = [v.x, v.y, v.zoom];
        h = I0(s, b, p, w), f = pl({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: p,
          height: w
        });
      } else
        h = this.nodeLookup, f = pl(g);
      return { nodes: h, edges: f };
    });
    get visible() {
      return u(this.#f);
    }
    set visible(r) {
      G(this.#f, r);
    }
    #u = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#u);
    }
    set nodesDraggable(r) {
      G(this.#u, r);
    }
    #h = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#h);
    }
    set nodesConnectable(r) {
      G(this.#h, r);
    }
    #c = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#c);
    }
    set elementsSelectable(r) {
      G(this.#c, r);
    }
    #g = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#g);
    }
    set nodesFocusable(r) {
      G(this.#g, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#y);
    }
    set edgesFocusable(r) {
      G(this.#y, r);
    }
    #w = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#w);
    }
    set disableKeyboardA11y(r) {
      G(this.#w, r);
    }
    #_ = /* @__PURE__ */ P(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#_);
    }
    set minZoom(r) {
      G(this.#_, r);
    }
    #v = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#v);
    }
    set maxZoom(r) {
      G(this.#v, r);
    }
    #p = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#p);
    }
    set nodeOrigin(r) {
      G(this.#p, r);
    }
    #m = /* @__PURE__ */ P(() => e.props.nodeExtent ?? ms);
    get nodeExtent() {
      return u(this.#m);
    }
    set nodeExtent(r) {
      G(this.#m, r);
    }
    #x = /* @__PURE__ */ P(() => e.props.translateExtent ?? ms);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      G(this.#x, r);
    }
    #b = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#b);
    }
    set defaultEdgeOptions(r) {
      G(this.#b, r);
    }
    #C = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      G(this.#C, r);
    }
    #k = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      G(this.#k, r);
    }
    #E = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#E);
    }
    set autoPanOnConnect(r) {
      G(this.#E, r);
    }
    #S = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      G(this.#S, r);
    }
    #N = /* @__PURE__ */ P(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#N);
    }
    set autoPanSpeed(r) {
      G(this.#N, r);
    }
    #P = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#P);
    }
    set connectionDragThreshold(r) {
      G(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #$ = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#$);
    }
    set snapGrid(r) {
      G(this.#$, r);
    }
    #T = /* @__PURE__ */ $e(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      G(this.#T, r);
    }
    #D = /* @__PURE__ */ $e(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      G(this.#D, r);
    }
    #A = /* @__PURE__ */ $e(!1);
    get selectionKeyPressed() {
      return u(this.#A);
    }
    set selectionKeyPressed(r) {
      G(this.#A, r);
    }
    #O = /* @__PURE__ */ $e(!1);
    get multiselectionKeyPressed() {
      return u(this.#O);
    }
    set multiselectionKeyPressed(r) {
      G(this.#O, r);
    }
    #M = /* @__PURE__ */ $e(!1);
    get deleteKeyPressed() {
      return u(this.#M);
    }
    set deleteKeyPressed(r) {
      G(this.#M, r);
    }
    #H = /* @__PURE__ */ $e(!1);
    get panActivationKeyPressed() {
      return u(this.#H);
    }
    set panActivationKeyPressed(r) {
      G(this.#H, r);
    }
    #L = /* @__PURE__ */ $e(!1);
    get zoomActivationKeyPressed() {
      return u(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      G(this.#L, r);
    }
    #V = /* @__PURE__ */ $e(null);
    get selectionRectMode() {
      return u(this.#V);
    }
    set selectionRectMode(r) {
      G(this.#V, r);
    }
    #I = /* @__PURE__ */ $e("");
    get ariaLiveMessage() {
      return u(this.#I);
    }
    set ariaLiveMessage(r) {
      G(this.#I, r);
    }
    #z = /* @__PURE__ */ P(() => e.props.selectionMode ?? si.Partial);
    get selectionMode() {
      return u(this.#z);
    }
    set selectionMode(r) {
      G(this.#z, r);
    }
    #R = /* @__PURE__ */ P(() => ({ ...Vu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#R);
    }
    set nodeTypes(r) {
      G(this.#R, r);
    }
    #B = /* @__PURE__ */ P(() => ({ ...Iu, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#B);
    }
    set edgeTypes(r) {
      G(this.#B, r);
    }
    #F = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#F);
    }
    set noPanClass(r) {
      G(this.#F, r);
    }
    #K = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#K);
    }
    set noDragClass(r) {
      G(this.#K, r);
    }
    #Z = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      G(this.#Z, r);
    }
    #Y = /* @__PURE__ */ P(() => Lp(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#Y);
    }
    set ariaLabelConfig(r) {
      G(this.#Y, r);
    }
    #W = /* @__PURE__ */ $e(z0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#W);
    }
    set _viewport(r) {
      G(this.#W, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #X = /* @__PURE__ */ $e(
      // _connection is viewport independent and originating from XYHandle
      ys
    );
    get _connection() {
      return u(this.#X);
    }
    set _connection(r) {
      G(this.#X, r);
    }
    #q = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: Eo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#q);
    }
    set connection(r) {
      G(this.#q, r);
    }
    #j = /* @__PURE__ */ P(() => e.props.connectionMode ?? Hr.Strict);
    get connectionMode() {
      return u(this.#j);
    }
    set connectionMode(r) {
      G(this.#j, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#G);
    }
    set connectionRadius(r) {
      G(this.#G, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#U);
    }
    set isValidConnection(r) {
      G(this.#U, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#J);
    }
    set selectNodesOnDrag(r) {
      G(this.#J, r);
    }
    #Q = /* @__PURE__ */ P(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#Q);
    }
    set defaultMarkerColor(r) {
      G(this.#Q, r);
    }
    #ee = /* @__PURE__ */ P(() => qp(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#ee);
    }
    set markers(r) {
      G(this.#ee, r);
    }
    #te = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      G(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => e.props.onflowerror ?? Ap);
    get onerror() {
      return u(this.#ne);
    }
    set onerror(r) {
      G(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => e.props.ondelete);
    get ondelete() {
      return u(this.#re);
    }
    set ondelete(r) {
      G(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#oe);
    }
    set onbeforedelete(r) {
      G(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#ie);
    }
    set onbeforeconnect(r) {
      G(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => e.props.onconnect);
    get onconnect() {
      return u(this.#se);
    }
    set onconnect(r) {
      G(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#ae);
    }
    set onconnectstart(r) {
      G(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#le);
    }
    set onconnectend(r) {
      G(this.#le, r);
    }
    #ce = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ce);
    }
    set onbeforereconnect(r) {
      G(this.#ce, r);
    }
    #ue = /* @__PURE__ */ P(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      G(this.#ue, r);
    }
    #de = /* @__PURE__ */ P(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#de);
    }
    set onreconnectstart(r) {
      G(this.#de, r);
    }
    #fe = /* @__PURE__ */ P(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#fe);
    }
    set onreconnectend(r) {
      G(this.#fe, r);
    }
    #he = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#he);
    }
    set clickConnect(r) {
      G(this.#he, r);
    }
    #ge = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      G(this.#ge, r);
    }
    #ve = /* @__PURE__ */ P(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#ve);
    }
    set onclickconnectend(r) {
      G(this.#ve, r);
    }
    #pe = /* @__PURE__ */ $e(null);
    get clickConnectStartHandle() {
      return u(this.#pe);
    }
    set clickConnectStartHandle(r) {
      G(this.#pe, r);
    }
    #me = /* @__PURE__ */ P(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#me);
    }
    set onselectiondrag(r) {
      G(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#ye);
    }
    set onselectiondragstart(r) {
      G(this.#ye, r);
    }
    #we = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      G(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Tp(
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
    _prefersDark = new V0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #_e = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#_e);
    }
    set colorMode(r) {
      G(this.#_e, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ys, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Qt() {
  const e = In(ui);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const ui = Symbol();
function zu(e) {
  const t = R0(e);
  function n(E) {
    t.nodeTypes = {
      ...Vu,
      ...E
    };
  }
  function r(E) {
    t.edgeTypes = {
      ...Iu,
      ...E
    };
  }
  function o(E) {
    t.edges = Kp(E, t.edges);
  }
  const i = (E, C = !1) => {
    t.nodes = t.nodes.map((_) => {
      const T = E.get(_.id);
      return T ? { ..._, position: T.position, dragging: C } : _;
    });
  };
  function s(E) {
    const { changes: C, updatedInternals: _ } = r0(E, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!_)
      return;
    Up(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const T = /* @__PURE__ */ new Map();
    for (const D of C) {
      const L = t.nodeLookup.get(D.id)?.internals.userNode;
      if (!L)
        continue;
      const F = { ...L };
      switch (D.type) {
        case "dimensions": {
          const K = { ...F.measured, ...D.dimensions };
          D.setAttributes && (F.width = D.dimensions?.width ?? F.width, F.height = D.dimensions?.height ?? F.height), F.measured = K;
          break;
        }
        case "position":
          F.position = D.position ?? F.position;
          break;
      }
      T.set(D.id, F);
    }
    t.nodes = t.nodes.map((D) => T.get(D.id) ?? D);
  }
  function a(E) {
    const C = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = E, t.fitViewResolver = C, t.nodes = [...t.nodes], C.promise;
  }
  async function l(E, C, _) {
    const T = typeof _?.zoom < "u" ? _.zoom : t.maxZoom, D = t.panZoom;
    return D ? (await D.setViewport({
      x: t.width / 2 - E * T,
      y: t.height / 2 - C * T,
      zoom: T
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(E, C) {
    const _ = t.panZoom;
    return _ ? _.scaleBy(E, C) : Promise.resolve(!1);
  }
  function d(E) {
    return c(1.2, E);
  }
  function h(E) {
    return c(1 / 1.2, E);
  }
  function f(E) {
    const C = t.panZoom;
    C && (C.setScaleExtent([E, t.maxZoom]), t.minZoom = E);
  }
  function g(E) {
    const C = t.panZoom;
    C && (C.setScaleExtent([t.minZoom, E]), t.maxZoom = E);
  }
  function v(E) {
    const C = t.panZoom;
    C && (C.setTranslateExtent(E), t.translateExtent = E);
  }
  function p(E) {
    t.panZoom?.setClickDistance(E);
  }
  function w(E, C = null) {
    let _ = !1;
    const T = E.map((D) => (C ? C.has(D.id) : !0) && D.selected ? (_ = !0, { ...D, selected: !1 }) : D);
    return [_, T];
  }
  function b(E) {
    const C = E?.nodes ? new Set(E.nodes.map((K) => K.id)) : null, [_, T] = w(t.nodes, C);
    _ && (t.nodes = T);
    const D = E?.edges ? new Set(E.edges.map((K) => K.id)) : null, [L, F] = w(t.edges, D);
    L && (t.edges = F);
  }
  function N(E) {
    const C = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((_) => {
      const T = E.includes(_.id), D = C && _.selected || T;
      if (_.selected !== D) {
        const L = t.nodeLookup.get(_.id);
        return L && (L.selected = D), _.selected = D, { ..._ };
      }
      return _;
    }), C || b({ nodes: [] });
  }
  function x(E) {
    const C = t.multiselectionKeyPressed;
    t.edges = t.edges.map((_) => {
      const T = E.includes(_.id), D = C && _.selected || T;
      return _.selected !== D ? { ..._, selected: D } : _;
    }), C || b({ edges: [] });
  }
  function k(E, C, _) {
    const T = t.nodeLookup.get(E);
    if (!T) {
      console.warn("012", io.error012(E));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, T.selected ? (C || T.selected && t.multiselectionKeyPressed) && (b({ nodes: [T], edges: [] }), requestAnimationFrame(() => _?.blur())) : N([E]);
  }
  function $(E) {
    const C = t.edgeLookup.get(E);
    if (!C) {
      console.warn("012", io.error012(E));
      return;
    }
    (C.selectable || t.elementsSelectable && typeof C.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, C.selected ? C.selected && t.multiselectionKeyPressed && b({ nodes: [], edges: [C] }) : x([E]));
  }
  function S(E, C) {
    const { nodeExtent: _, snapGrid: T, nodeOrigin: D, nodeLookup: L, nodesDraggable: F, onerror: K } = t, H = /* @__PURE__ */ new Map(), Y = T?.[0] ?? 5, W = T?.[1] ?? 5, U = E.x * Y * C, j = E.y * W * C;
    for (const R of L.values()) {
      if (!(R.selected && (R.draggable || F && typeof R.draggable > "u")))
        continue;
      let q = {
        x: R.internals.positionAbsolute.x + U,
        y: R.internals.positionAbsolute.y + j
      };
      T && (q = ko(q, T));
      const { position: ne, positionAbsolute: J } = lu({
        nodeId: R.id,
        nextPosition: q,
        nodeLookup: L,
        nodeExtent: _,
        nodeOrigin: D,
        onError: K
      });
      R.position = ne, R.internals.positionAbsolute = J, H.set(R.id, R);
    }
    i(H);
  }
  function A(E) {
    return o0({
      delta: E,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const M = (E) => {
    t._connection = { ...E };
  };
  function B() {
    t._connection = ys;
  }
  function X() {
    t.resetStoreValues(), b();
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
    setTranslateExtent: v,
    setPaneClickDistance: p,
    unselectNodesAndEdges: b,
    addSelectedNodes: N,
    addSelectedEdges: x,
    handleNodeSelection: k,
    handleEdgeSelection: $,
    moveSelectedNodes: S,
    panBy: A,
    updateConnection: M,
    cancelConnection: B,
    reset: X
  });
}
function B0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: c, setPanZoomInstance: d, onDraggingChange: h, onTransformChange: f } = t, g = k0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: c,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: h
  }), v = g.getViewport();
  return (o.x !== v.x || o.y !== v.y || o.zoom !== v.zoom) && f([v.x, v.y, v.zoom]), d(g), g.update(t), {
    update(p) {
      g.update(p);
    }
  };
}
var F0 = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Ru(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 7), o = y(t, "preventScrolling", 7), i = y(t, "zoomOnScroll", 7), s = y(t, "zoomOnDoubleClick", 7), a = y(t, "zoomOnPinch", 7), l = y(t, "panOnDrag", 7), c = y(t, "panOnScroll", 7), d = y(t, "panOnScrollSpeed", 7), h = y(t, "paneClickDistance", 7), f = y(t, "onmovestart", 7), g = y(t, "onmove", 7), v = y(t, "onmoveend", 7), p = y(t, "oninit", 7), w = y(t, "children", 7), b = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), N = /* @__PURE__ */ P(() => n().panActivationKeyPressed || c());
  const { viewport: x } = n();
  let k = !1;
  Xe(() => {
    !k && n().viewportInitialized && (p()?.(), k = !0);
  });
  var $ = {
    get store() {
      return n();
    },
    set store(M) {
      n(M), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(M) {
      r(M), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(M) {
      o(M), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(M) {
      i(M), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(M) {
      s(M), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(M) {
      a(M), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(M) {
      l(M), m();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(M) {
      c(M), m();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(M) {
      d(M), m();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(M) {
      h(M), m();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(M) {
      f(M), m();
    },
    get onmove() {
      return g();
    },
    set onmove(M) {
      g(M), m();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(M) {
      v(M), m();
    },
    get oninit() {
      return p();
    },
    set oninit(M) {
      p(M), m();
    },
    get children() {
      return w();
    },
    set children(M) {
      w(M), m();
    }
  }, S = F0(), A = z(S);
  return qe(A, w), I(S), gt(S, (M, B) => B0?.(M, B), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: (M) => {
      n(n().dragging = M, !0);
    },
    setPanZoomInstance: (M) => {
      n(n().panZoom = M, !0);
    },
    onPanZoomStart: f(),
    onPanZoom: g(),
    onPanZoomEnd: v(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: u(N),
    panOnDrag: u(b),
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
    onTransformChange: (M) => {
      n(n().viewport = { x: M[0], y: M[1], zoom: M[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), O(e, S), ue($);
}
se(
  Ru,
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
var K0 = /* @__PURE__ */ te("<div><!></div>");
function Bu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "selectionOnDrag", 7), i = y(t, "onpaneclick", 7), s = y(t, "onpanecontextmenu", 7), a = y(t, "onselectionstart", 7), l = y(t, "onselectionend", 7), c = y(t, "children", 7), d, h = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), p = /* @__PURE__ */ P(() => n().selectionKeyPressed || n().selectionRect || o() && u(v) !== !0), w = /* @__PURE__ */ P(() => n().elementsSelectable && (u(p) || n().selectionRectMode === "user")), b = !1;
  function N(C) {
    if (b || n().connection.inProgress) {
      b = !1;
      return;
    }
    i()?.({ event: C }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(C) {
    if (h = d?.getBoundingClientRect(), !n().elementsSelectable || !u(p) || C.button !== 0 || C.target !== d || !h)
      return;
    C.target?.setPointerCapture?.(C.pointerId);
    const { x: _, y: T } = Wt(C, h);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: _, startY: T, x: _, y: T }, !0), a()?.(C);
  }
  function k(C) {
    if (!u(p) || !h || !n().selectionRect)
      return;
    b = !0;
    const _ = Wt(C, h), { startX: T = 0, startY: D = 0 } = n().selectionRect, L = {
      ...n().selectionRect,
      x: _.x < T ? _.x : T,
      y: _.y < D ? _.y : D,
      width: Math.abs(_.x - T),
      height: Math.abs(_.y - D)
    }, F = f, K = g;
    f = new Set(na(
      n().nodeLookup,
      L,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === si.Partial,
      !0
    ).map((Y) => Y.id));
    const H = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const Y of f) {
      const W = n().connectionLookup.get(Y);
      if (W)
        for (const { edgeId: U } of W.values()) {
          const j = n().edgeLookup.get(U);
          j && (j.selectable ?? H) && g.add(U);
        }
    }
    wl(F, f) || n(n().nodes = n().nodes.map(yl(f)), !0), wl(K, g) || n(n().edges = n().edges.map(yl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = L, !0);
  }
  function $(C) {
    C.button === 0 && (C.target?.releasePointerCapture?.(C.pointerId), !u(p) && n().selectionRectMode === "user" && C.target === d && N?.(C), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (b = !1), l()?.(C));
  }
  const S = (C) => {
    if (Array.isArray(u(v)) && u(v).includes(2)) {
      C.preventDefault();
      return;
    }
    s()?.({ event: C });
  };
  var A = {
    get store() {
      return n();
    },
    set store(C) {
      n(C), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(C = !0) {
      r(C), m();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(C) {
      o(C), m();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(C) {
      i(C), m();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(C) {
      s(C), m();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(C) {
      a(C), m();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(C) {
      l(C), m();
    },
    get children() {
      return c();
    },
    set children(C) {
      c(C), m();
    }
  }, M = K0();
  let B;
  var X = /* @__PURE__ */ P(() => u(w) ? void 0 : ml(N, d));
  M.__click = function(...C) {
    u(X)?.apply(this, C);
  }, M.__pointerdown = function(...C) {
    (u(w) ? x : void 0)?.apply(this, C);
  }, M.__pointermove = function(...C) {
    (u(w) ? k : void 0)?.apply(this, C);
  }, M.__pointerup = function(...C) {
    (u(w) ? $ : void 0)?.apply(this, C);
  };
  var Q = /* @__PURE__ */ P(() => ml(S, d));
  M.__contextmenu = function(...C) {
    u(Q)?.apply(this, C);
  };
  var E = z(M);
  return qe(E, c), I(M), Ot(M, (C) => d = C, () => d), Ce((C) => B = Nt(M, 1, "svelte-flow__pane svelte-flow__container", null, B, C), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(p)
    })
  ]), O(e, M), ue(A);
}
Wn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
se(
  Bu,
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
var Z0 = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Fu(e, t) {
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
  }, i = Z0();
  let s;
  var a = z(i);
  return qe(a, r), I(i), Ce((l) => s = ht(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), O(e, i), ue(o);
}
se(Fu, { store: {}, children: {} }, [], [], !0);
function Ku(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = c0({
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
var Y0 = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-h8i2bw"> </div>'), W0 = /* @__PURE__ */ te('<div class="a11y-hidden svelte-h8i2bw"> </div> <div class="a11y-hidden svelte-h8i2bw"> </div> <!>', 1);
const X0 = {
  hash: "svelte-h8i2bw",
  code: ".a11y-hidden.svelte-h8i2bw {display:none;}.a11y-live-msg.svelte-h8i2bw {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Zu(e, t) {
  ce(t, !0), Le(e, X0);
  let n = y(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), m();
    }
  }, o = W0(), i = ie(o), s = z(i, !0);
  I(i);
  var a = V(i, 2), l = z(a, !0);
  I(a);
  var c = V(a, 2);
  {
    var d = (h) => {
      var f = Y0(), g = z(f, !0);
      I(f), Ce(() => {
        xe(f, "id", `${q0}-${n().flowId}`), Re(g, n().ariaLiveMessage);
      }), O(h, f);
    };
    le(c, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ce(() => {
    xe(i, "id", `${Yu}-${n().flowId}`), Re(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), xe(a, "id", `${Wu}-${n().flowId}`), Re(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(e, o), ue(r);
}
se(Zu, { store: {} }, [], [], !0);
const Yu = "svelte-flow__node-desc", Wu = "svelte-flow__edge-desc", q0 = "svelte-flow__aria-live";
var j0 = /* @__PURE__ */ te("<div><!></div>");
function Xu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), c = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), h = y(t, "onnodepointerleave", 7), f = y(t, "onnodepointermove", 7), g = y(t, "onnodecontextmenu", 7), v = /* @__PURE__ */ P(() => mt(r().data, () => ({}), !0)), p = /* @__PURE__ */ P(() => mt(r().selected, !1)), w = /* @__PURE__ */ P(() => r().draggable), b = /* @__PURE__ */ P(() => r().selectable), N = /* @__PURE__ */ P(() => mt(r().deletable, !0)), x = /* @__PURE__ */ P(() => r().connectable), k = /* @__PURE__ */ P(() => r().focusable), $ = /* @__PURE__ */ P(() => mt(r().hidden, !1)), S = /* @__PURE__ */ P(() => mt(r().dragging, !1)), A = /* @__PURE__ */ P(() => mt(r().style, "")), M = /* @__PURE__ */ P(() => r().class), B = /* @__PURE__ */ P(() => mt(r().type, "default")), X = /* @__PURE__ */ P(() => r().parentId), Q = /* @__PURE__ */ P(() => r().sourcePosition), E = /* @__PURE__ */ P(() => r().targetPosition), C = /* @__PURE__ */ P(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).width), _ = /* @__PURE__ */ P(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).height), T = /* @__PURE__ */ P(() => r().initialWidth), D = /* @__PURE__ */ P(() => r().initialHeight), L = /* @__PURE__ */ P(() => r().width), F = /* @__PURE__ */ P(() => r().height), K = /* @__PURE__ */ P(() => r().dragHandle), H = /* @__PURE__ */ P(() => mt(r().internals.z, 0)), Y = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), W = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), U = /* @__PURE__ */ P(() => r().internals.userNode), { id: j } = r(), R = /* @__PURE__ */ P(() => u(w) ?? n().nodesDraggable), ee = /* @__PURE__ */ P(() => u(b) ?? n().elementsSelectable), q = /* @__PURE__ */ P(() => u(x) ?? n().nodesConnectable), ne = /* @__PURE__ */ P(() => fu(r())), J = /* @__PURE__ */ P(() => !!r().internals.handleBounds), we = /* @__PURE__ */ P(() => u(ne) && u(J)), oe = /* @__PURE__ */ P(() => u(k) ?? n().nodesFocusable);
  function ae(he) {
    return n().parentLookup.has(he);
  }
  let re = /* @__PURE__ */ P(() => ae(j)), de = /* @__PURE__ */ $e(null), ge = null, _e = u(B), fe = u(Q), be = u(E), Pe = /* @__PURE__ */ P(() => n().nodeTypes[u(B)] ?? la), Z = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  Nr("svelteflow__node_connectable", {
    get value() {
      return u(q);
    }
  }), Nr("svelteflow__node_id", j);
  let De = /* @__PURE__ */ P(() => {
    const he = u(C) === void 0 ? u(L) ?? u(T) : u(L), Ze = u(_) === void 0 ? u(F) ?? u(D) : u(F);
    if (!(he === void 0 && Ze === void 0 && u(A) === void 0))
      return `${u(A)};${he ? `width:${dn(he)};` : ""}${Ze ? `height:${dn(Ze)};` : ""}`;
  });
  Xe(() => {
    (u(B) !== _e || u(Q) !== fe || u(E) !== be) && u(de) !== null && requestAnimationFrame(() => {
      u(de) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[j, { id: j, nodeElement: u(de), force: !0 }]]));
    }), _e = u(B), fe = u(Q), be = u(E);
  }), Xe(() => {
    o() && (!u(we) || u(de) !== ge) && (ge && o().unobserve(ge), u(de) && o().observe(u(de)), ge = u(de));
  }), wo(() => {
    ge && o()?.unobserve(ge);
  });
  function He(he) {
    u(ee) && (!n().selectNodesOnDrag || !u(R) || n().nodeDragThreshold > 0) && n().handleNodeSelection(j), s()?.({ node: u(U), event: he });
  }
  function Ve(he) {
    if (!(vu(he) || n().disableKeyboardA11y))
      if (su.includes(he.key) && u(ee)) {
        const Ze = he.key === "Escape";
        n().handleNodeSelection(j, Ze, u(de));
      } else u(R) && r().selected && Object.prototype.hasOwnProperty.call(ci, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = u(Z)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(ci[he.key], he.shiftKey ? 4 : 1));
  }
  const st = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(de)?.matches(":focus-visible"))
      return;
    const { width: he, height: Ze, viewport: lt } = n();
    na(/* @__PURE__ */ new Map([[j, r()]]), { x: 0, y: 0, width: he, height: Ze }, [lt.x, lt.y, lt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: lt.zoom });
  };
  var at = {
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
      return h();
    },
    set onnodepointerleave(he) {
      h(he), m();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(he) {
      f(he), m();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(he) {
      g(he), m();
    }
  }, Ht = Ne(), ze = ie(Ht);
  {
    var Ge = (he) => {
      var Ze = j0();
      nt(
        Ze,
        (et, Pt) => ({
          "data-id": j,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${u(B)}`,
            u(M)
          ],
          style: u(De),
          onclick: He,
          onpointerenter: d() ? (We) => d()({ node: u(U), event: We }) : void 0,
          onpointerleave: h() ? (We) => h()({ node: u(U), event: We }) : void 0,
          onpointermove: f() ? (We) => f()({ node: u(U), event: We }) : void 0,
          oncontextmenu: g() ? (We) => g()({ node: u(U), event: We }) : void 0,
          onkeydown: u(oe) ? Ve : void 0,
          onfocus: u(oe) ? st : void 0,
          tabIndex: u(oe) ? 0 : void 0,
          role: r().ariaRole ?? (u(oe) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Yu}-${n().flowId}`,
          ...r().domAttributes,
          [Dn]: et,
          [sn]: Pt
        }),
        [
          () => ({
            dragging: u(S),
            selected: u(p),
            draggable: u(R),
            connectable: u(q),
            selectable: u(ee),
            nopan: u(R),
            parent: u(re)
          }),
          () => ({
            "z-index": u(H),
            transform: `translate(${u(Y) ?? ""}px, ${u(W) ?? ""}px)`,
            visibility: u(ne) ? "visible" : "hidden"
          })
        ]
      );
      var lt = z(Ze);
      Ci(lt, () => u(Pe), (et, Pt) => {
        Pt(et, {
          get data() {
            return u(v);
          },
          get id() {
            return j;
          },
          get selected() {
            return u(p);
          },
          get selectable() {
            return u(ee);
          },
          get deletable() {
            return u(N);
          },
          get sourcePosition() {
            return u(Q);
          },
          get targetPosition() {
            return u(E);
          },
          get zIndex() {
            return u(H);
          },
          get dragging() {
            return u(S);
          },
          get draggable() {
            return u(R);
          },
          get dragHandle() {
            return u(K);
          },
          get parentId() {
            return u(X);
          },
          get type() {
            return u(B);
          },
          get isConnectable() {
            return u(q);
          },
          get positionAbsoluteX() {
            return u(Y);
          },
          get positionAbsoluteY() {
            return u(W);
          },
          get width() {
            return u(L);
          },
          get height() {
            return u(F);
          }
        });
      }), I(Ze), gt(Ze, (et, Pt) => Ku?.(et, Pt), () => ({
        nodeId: j,
        isSelectable: u(ee),
        disabled: !u(R),
        handleSelector: u(K),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (et, Pt, We, xt) => {
          a()?.({ event: et, targetNode: We, nodes: xt });
        },
        onDragStart: (et, Pt, We, xt) => {
          l()?.({ event: et, targetNode: We, nodes: xt });
        },
        onDragStop: (et, Pt, We, xt) => {
          c()?.({ event: et, targetNode: We, nodes: xt });
        },
        store: n()
      })), Ot(Ze, (et) => G(de, et), () => u(de)), O(he, Ze);
    };
    le(ze, (he) => {
      u($) || he(Ge);
    });
  }
  return O(e, Ht), ue(at);
}
se(
  Xu,
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
var G0 = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function qu(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), c = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), h = y(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((p) => {
    const w = /* @__PURE__ */ new Map();
    p.forEach((b) => {
      const N = b.target.getAttribute("data-id");
      w.set(N, { id: N, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  wo(() => {
    f?.disconnect();
  });
  var g = {
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
      return h();
    },
    set onnodedragstop(p) {
      h(p), m();
    }
  }, v = G0();
  return pt(v, 21, () => n().visible.nodes.values(), (p) => p.id, (p, w) => {
    Xu(p, {
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
      set store(b) {
        n(b);
      }
    });
  }), I(v), O(e, v), ue(g);
}
se(
  qu,
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
var U0 = /* @__PURE__ */ ve('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function ju(e, t) {
  ce(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), c = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), h = /* @__PURE__ */ P(() => n().sourceY), f = /* @__PURE__ */ P(() => n().targetX), g = /* @__PURE__ */ P(() => n().targetY), v = /* @__PURE__ */ P(() => n().sourcePosition), p = /* @__PURE__ */ P(() => n().targetPosition), w = /* @__PURE__ */ P(() => mt(n().animated, !1)), b = /* @__PURE__ */ P(() => mt(n().selected, !1)), N = /* @__PURE__ */ P(() => n().label), x = /* @__PURE__ */ P(() => n().labelStyle), k = /* @__PURE__ */ P(() => mt(n().data, () => ({}), !0)), $ = /* @__PURE__ */ P(() => n().style), S = /* @__PURE__ */ P(() => n().interactionWidth), A = /* @__PURE__ */ P(() => mt(n().type, "default")), M = /* @__PURE__ */ P(() => n().sourceHandle), B = /* @__PURE__ */ P(() => n().targetHandle), X = /* @__PURE__ */ P(() => n().markerStart), Q = /* @__PURE__ */ P(() => n().markerEnd), E = /* @__PURE__ */ P(() => n().selectable), C = /* @__PURE__ */ P(() => n().focusable), _ = /* @__PURE__ */ P(() => mt(n().deletable, !0)), T = /* @__PURE__ */ P(() => n().hidden), D = /* @__PURE__ */ P(() => n().zIndex), L = /* @__PURE__ */ P(() => n().class), F = /* @__PURE__ */ P(() => n().ariaLabel), K = null;
  const { id: H } = n();
  Nr("svelteflow__edge_id", H);
  let Y = /* @__PURE__ */ P(() => u(E) ?? r().elementsSelectable), W = /* @__PURE__ */ P(() => u(C) ?? r().edgesFocusable), U = /* @__PURE__ */ P(() => r().edgeTypes[u(A)] ?? ca), j = /* @__PURE__ */ P(() => u(X) ? `url('#${_s(u(X), r().flowId)}')` : void 0), R = /* @__PURE__ */ P(() => u(Q) ? `url('#${_s(u(Q), r().flowId)}')` : void 0);
  function ee(re) {
    const de = r().edgeLookup.get(H);
    de && (u(Y) && r().handleEdgeSelection(H), o()?.({ event: re, edge: de }));
  }
  function q(re, de) {
    const ge = r().edgeLookup.get(H);
    ge && de({ event: re, edge: ge });
  }
  function ne(re) {
    if (!r().disableKeyboardA11y && su.includes(re.key) && u(Y)) {
      const { unselectNodesAndEdges: de, addSelectedEdges: ge } = r();
      re.key === "Escape" ? (K?.blur(), de({ edges: [n()] })) : ge([H]);
    }
  }
  var J = {
    get edge() {
      return n();
    },
    set edge(re) {
      n(re), m();
    },
    get store() {
      return r();
    },
    set store(re) {
      r(re), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(re) {
      o(re), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(re) {
      i(re), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(re) {
      s(re), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(re) {
      a(re), m();
    }
  }, we = Ne(), oe = ie(we);
  {
    var ae = (re) => {
      var de = U0();
      let ge;
      var _e = z(de);
      nt(
        _e,
        (be) => ({
          class: ["svelte-flow__edge", u(L)],
          "data-id": H,
          onclick: ee,
          oncontextmenu: i() ? (Pe) => {
            q(Pe, i());
          } : void 0,
          onpointerenter: s() ? (Pe) => {
            q(Pe, s());
          } : void 0,
          onpointerleave: a() ? (Pe) => {
            q(Pe, a());
          } : void 0,
          "aria-label": u(F) === null ? void 0 : u(F) ? u(F) : `Edge from ${u(l)} to ${u(c)}`,
          "aria-describedby": u(W) ? `${Wu}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (u(W) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: u(W) ? ne : void 0,
          tabindex: u(W) ? 0 : void 0,
          ...n().domAttributes,
          [Dn]: be
        }),
        [
          () => ({
            animated: u(w),
            selected: u(b),
            selectable: u(Y)
          })
        ]
      );
      var fe = z(_e);
      Ci(fe, () => u(U), (be, Pe) => {
        Pe(be, {
          get id() {
            return H;
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
            return u(v);
          },
          get targetPosition() {
            return u(p);
          },
          get animated() {
            return u(w);
          },
          get selected() {
            return u(b);
          },
          get label() {
            return u(N);
          },
          get labelStyle() {
            return u(x);
          },
          get data() {
            return u(k);
          },
          get style() {
            return u($);
          },
          get interactionWidth() {
            return u(S);
          },
          get selectable() {
            return u(Y);
          },
          get deletable() {
            return u(_);
          },
          get type() {
            return u(A);
          },
          get sourceHandleId() {
            return u(M);
          },
          get targetHandleId() {
            return u(B);
          },
          get markerStart() {
            return u(j);
          },
          get markerEnd() {
            return u(R);
          }
        });
      }), I(_e), Ot(_e, (be) => K = be, () => K), I(de), Ce((be) => ge = ht(de, "", ge, be), [() => ({ "z-index": u(D) })]), O(re, de);
    };
    le(oe, (re) => {
      u(T) || re(ae);
    });
  }
  return O(e, we), ue(J);
}
se(
  ju,
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
Lf();
var J0 = /* @__PURE__ */ ve("<defs></defs>");
function Gu(e, t) {
  ce(t, !1);
  const n = Qt();
  $c();
  var r = J0();
  pt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Uu(o, Be(() => u(i)));
  }), I(r), O(e, r), ue();
}
se(Gu, {}, [], [], !0);
var Q0 = /* @__PURE__ */ ve('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), em = /* @__PURE__ */ ve('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), tm = /* @__PURE__ */ ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Uu(e, t) {
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
  }, h = tm(), f = z(h);
  {
    var g = (p) => {
      var w = Q0();
      let b;
      Ce(
        (N) => {
          xe(w, "stroke-width", c()), b = ht(w, "", b, N);
        },
        [() => ({ stroke: l() })]
      ), O(p, w);
    }, v = (p) => {
      var w = Ne(), b = ie(w);
      {
        var N = (x) => {
          var k = em();
          let $;
          Ce(
            (S) => {
              xe(k, "stroke-width", c()), $ = ht(k, "", $, S);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), O(x, k);
        };
        le(
          b,
          (x) => {
            r() === so.ArrowClosed && x(N);
          },
          !0
        );
      }
      O(p, w);
    };
    le(f, (p) => {
      r() === so.Arrow ? p(g) : p(v, !1);
    });
  }
  return I(h), Ce(() => {
    xe(h, "id", n()), xe(h, "markerWidth", `${o()}`), xe(h, "markerHeight", `${i()}`), xe(h, "markerUnits", s()), xe(h, "orient", a());
  }), O(e, h), ue(d);
}
se(
  Uu,
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
var nm = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Ju(e, t) {
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
  }, l = nm(), c = z(l), d = z(c);
  Gu(d, {}), I(c);
  var h = V(c, 2);
  return pt(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, g) => {
    ju(f, {
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
      set store(v) {
        n(v);
      }
    });
  }), I(l), O(e, l), ue(a);
}
se(
  Ju,
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
var rm = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-eplraw"></div>');
const om = {
  hash: "svelte-eplraw",
  code: ".svelte-flow__selection.svelte-eplraw {position:absolute;top:0;left:0;}"
};
function ua(e, t) {
  ce(t, !0), Le(e, om);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7, 0), i = y(t, "height", 7, 0), s = y(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(h = 0) {
      n(h), m();
    },
    get y() {
      return r();
    },
    set y(h = 0) {
      r(h), m();
    },
    get width() {
      return o();
    },
    set width(h = 0) {
      o(h), m();
    },
    get height() {
      return i();
    },
    set height(h = 0) {
      i(h), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(h = !0) {
      s(h), m();
    }
  }, l = Ne(), c = ie(l);
  {
    var d = (h) => {
      var f = rm();
      let g;
      Ce((v) => g = ht(f, "", g, v), [
        () => ({
          width: typeof o() == "string" ? o() : dn(o()),
          height: typeof i() == "string" ? i() : dn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(h, f);
    };
    le(c, (h) => {
      s() && h(d);
    });
  }
  return O(e, l), ue(a);
}
se(ua, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function im(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function sm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var am = /* @__PURE__ */ te("<div><!></div>");
const lm = {
  hash: "svelte-jl8ebg",
  code: ".svelte-flow__selection-wrapper.svelte-jl8ebg {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Qu(e, t) {
  ce(t, !0), Le(e, lm);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ $e(void 0);
  Xe(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ P(() => n().selectionRectMode === "nodes" ? (n().nodes, Co(n().nodeLookup, { filter: (p) => !!p.selected })) : null);
  function d(p) {
    Object.prototype.hasOwnProperty.call(ci, p.key) && (p.preventDefault(), n().moveSelectedNodes(ci[p.key], p.shiftKey ? 4 : 1));
  }
  var h = {
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
  }, f = Ne(), g = ie(f);
  {
    var v = (p) => {
      var w = am();
      w.__contextmenu = [im, n, a], w.__click = [sm, n, s], w.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, x);
      };
      let b;
      var N = z(w);
      ua(N, { width: "100%", height: "100%", x: 0, y: 0 }), I(w), gt(w, (x, k) => Ku?.(x, k), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, k, $, S) => {
          r()?.({ event: x, targetNode: null, nodes: S });
        },
        onDragStart: (x, k, $, S) => {
          o()?.({ event: x, targetNode: null, nodes: S });
        },
        onDragStop: (x, k, $, S) => {
          i()?.({ event: x, targetNode: null, nodes: S });
        }
      })), Ot(w, (x) => G(l, x), () => u(l)), Ce(
        (x) => {
          Nt(w, 1, Sn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-jl8ebg"), xe(w, "role", n().disableKeyboardA11y ? void 0 : "button"), xe(w, "tabindex", n().disableKeyboardA11y ? void 0 : -1), b = ht(w, "", b, x);
        },
        [
          () => ({
            width: dn(u(c).width),
            height: dn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), O(p, w);
    };
    le(g, (p) => {
      n().selectionRectMode === "nodes" && u(c) && mn(u(c).x) && mn(u(c).y) && p(v);
    });
  }
  return O(e, f), ue(h);
}
Wn(["contextmenu", "click", "keydown"]);
se(
  Qu,
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
function nn(e, t) {
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
      }, { modifier: f, key: g, callback: v, preventDefault: p, enabled: w } = h;
      if (w) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const N = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const k of N)
            if ((Array.isArray(k) ? k : [k]).reduce(
              (S, A) => S | cm(A),
              0
            ) === c) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        p && a.preventDefault();
        const b = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), v?.(b);
      }
    }
  }
  let s;
  return n && (s = is(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = is(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function it() {
  const e = /* @__PURE__ */ P(Qt), t = (i) => {
    const s = vl(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? Hp(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Vr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = ut(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && vl(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = ut(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && $0(c) ? c : { ...l, ...c };
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
    getViewport: () => Fl(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = ra(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
        const f = Vr(h), g = ao(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = rl(i) ? i : t(i);
      if (!c)
        return !1;
      const d = ao(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Dp({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = ut(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = ut(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: h, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return Eo(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), h = li(i, [s, a, l]);
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
    getNodesBounds: (i) => Np(i, {
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
function ed(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => Jn() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => Jn() ? "Meta" : "Control"), { deleteElements: l } = it();
  function c(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return c(w) ? w.modifier || [] : [];
  }
  function h(w) {
    return w == null ? "" : c(w) ? w.key : w;
  }
  function f(w, b) {
    return (Array.isArray(w) ? w : [w]).map((x) => {
      const k = h(x);
      return {
        key: k,
        modifier: d(x),
        enabled: k !== null,
        callback: b
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const w = n().nodes.filter((N) => N.selected), b = n().edges.filter((N) => N.selected);
    l({ nodes: w, edges: b });
  }
  var p = {
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
    set multiSelectionKey(w = Jn() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = Jn() ? "Meta" : "Control") {
      a(w), m();
    }
  };
  return Sa("blur", bt, g), Sa("contextmenu", bt, g), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !vu(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(bt, (w, b) => nn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(p);
}
se(
  ed,
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
function td(e, t) {
  ce(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ P(() => {
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
        const [g] = mu(f);
        return g;
      }
      case vn.Straight: {
        const [g] = wu(f);
        return g;
      }
      case vn.Step:
      case vn.SmoothStep: {
        const [g] = oa({
          ...f,
          borderRadius: r() === vn.Step ? 0 : void 0
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
  }, c = Ne(), d = ie(c);
  {
    var h = (f) => {
      var g = dm(), v = z(g), p = z(v);
      {
        var w = (N) => {
          var x = Ne(), k = ie(x);
          Ci(k, s, ($, S) => {
            S($, {});
          }), O(N, x);
        }, b = (N) => {
          var x = um();
          Ce(() => {
            xe(x, "d", u(a)), ht(x, i());
          }), O(N, x);
        };
        le(p, (N) => {
          s() ? N(w) : N(b, !1);
        });
      }
      I(v), I(g), Ce(
        (N) => {
          xe(g, "width", n().width), xe(g, "height", n().height), ht(g, o()), Nt(v, 0, N);
        },
        [
          () => Sn([
            "svelte-flow__connection",
            Ep(n().connection.isValid)
          ])
        ]
      ), O(f, g);
    };
    le(d, (f) => {
      n().connection.inProgress && f(h);
    });
  }
  return O(e, c), ue(l);
}
se(
  td,
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
function No(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ Ie(t, [
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
    set position(h = "top-right") {
      n(h), m();
    },
    get style() {
      return r();
    },
    set style(h) {
      r(h), m();
    },
    get class() {
      return o();
    },
    set class(h) {
      o(h), m();
    },
    get children() {
      return i();
    },
    set children(h) {
      i(h), m();
    }
  }, c = fm();
  nt(c, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = z(c);
  return qe(d, () => i() ?? ft), I(c), O(e, c), ue(l);
}
se(No, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var hm = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function nd(e, t) {
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
  }, i = Ne(), s = ie(i);
  {
    var a = (l) => {
      No(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (c, d) => {
          var h = hm();
          O(c, h);
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
se(nd, { proOptions: {}, position: {} }, [], [], !0);
var gm = /* @__PURE__ */ te("<div><!></div>");
const vm = {
  hash: "svelte-1q89zv",
  code: ".svelte-flow.svelte-1q89zv {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function rd(e, t) {
  ce(t, !0), Le(e, vm);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), c = y(t, "rest", 7), d = /* @__PURE__ */ P(() => c().class), h = /* @__PURE__ */ P(() => uh(c(), [
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
      return c();
    },
    set rest(w) {
      c(w), m();
    }
  }, v = gm();
  nt(
    v,
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
      [sn]: w
    }),
    [
      () => ({ width: dn(n()), height: dn(r()) })
    ],
    void 0,
    "svelte-1q89zv"
  );
  var p = z(v);
  return qe(p, () => l() ?? ft), I(v), Ot(v, (w) => i(w), () => i()), Oa(v, "clientHeight", a), Oa(v, "clientWidth", s), O(e, v), ue(g);
}
se(
  rd,
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
function od(e, t) {
  ce(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), c = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), h = y(t, "nodeClickDistance", 7, 1), f = y(t, "onmovestart", 7), g = y(t, "onmoveend", 7), v = y(t, "onmove", 7), p = y(t, "oninit", 7), w = y(t, "onnodeclick", 7), b = y(t, "onnodecontextmenu", 7), N = y(t, "onnodedrag", 7), x = y(t, "onnodedragstart", 7), k = y(t, "onnodedragstop", 7), $ = y(t, "onnodepointerenter", 7), S = y(t, "onnodepointermove", 7), A = y(t, "onnodepointerleave", 7), M = y(t, "onselectionclick", 7), B = y(t, "onselectioncontextmenu", 7), X = y(t, "onselectionstart", 7), Q = y(t, "onselectionend", 7), E = y(t, "onedgeclick", 7), C = y(t, "onedgecontextmenu", 7), _ = y(t, "onedgepointerenter", 7), T = y(t, "onedgepointerleave", 7), D = y(t, "onpaneclick", 7), L = y(t, "onpanecontextmenu", 7), F = y(t, "panOnScrollMode", 23, () => rr.Free), K = y(t, "preventScrolling", 7, !0), H = y(t, "zoomOnScroll", 7, !0), Y = y(t, "zoomOnDoubleClick", 7, !0), W = y(t, "zoomOnPinch", 7, !0), U = y(t, "panOnScroll", 7, !1), j = y(t, "panOnScrollSpeed", 7, 0.5), R = y(t, "panOnDrag", 7, !0), ee = y(t, "selectionOnDrag", 7, !0), q = y(t, "connectionLineComponent", 7), ne = y(t, "connectionLineStyle", 7), J = y(t, "connectionLineContainerStyle", 7), we = y(t, "connectionLineType", 23, () => vn.Bezier), oe = y(t, "attributionPosition", 7), ae = y(t, "children", 7), re = y(t, "nodes", 31, () => It([])), de = y(t, "edges", 31, () => It([])), ge = y(t, "viewport", 31, () => {
  }), _e = /* @__PURE__ */ Ie(t, [
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
  ]), fe = zu({
    props: _e,
    width: n(),
    height: r(),
    get nodes() {
      return re();
    },
    set nodes(Z) {
      re(Z);
    },
    get edges() {
      return de();
    },
    set edges(Z) {
      de(Z);
    },
    get viewport() {
      return ge();
    },
    set viewport(Z) {
      ge(Z);
    }
  });
  const be = In(ui);
  be && be.setStore && be.setStore(fe), Nr(ui, {
    provider: !1,
    getStore() {
      return fe;
    }
  }), Xe(() => {
    const Z = { nodes: fe.selectedNodes, edges: fe.selectedEdges };
    ut(() => t.onselectionchange)?.(Z);
    for (const Ye of fe.selectionChangeHandlers.values())
      Ye(Z);
  }), wo(() => {
    fe.reset();
  });
  var Pe = {
    get width() {
      return n();
    },
    set width(Z) {
      n(Z), m();
    },
    get height() {
      return r();
    },
    set height(Z) {
      r(Z), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(Z) {
      o(Z), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(Z) {
      i(Z), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(Z) {
      s(Z), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(Z) {
      a(Z), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(Z) {
      l(Z), m();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(Z) {
      c(Z), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Z = 1) {
      d(Z), m();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(Z = 1) {
      h(Z), m();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(Z) {
      f(Z), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(Z) {
      g(Z), m();
    },
    get onmove() {
      return v();
    },
    set onmove(Z) {
      v(Z), m();
    },
    get oninit() {
      return p();
    },
    set oninit(Z) {
      p(Z), m();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(Z) {
      w(Z), m();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(Z) {
      b(Z), m();
    },
    get onnodedrag() {
      return N();
    },
    set onnodedrag(Z) {
      N(Z), m();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(Z) {
      x(Z), m();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(Z) {
      k(Z), m();
    },
    get onnodepointerenter() {
      return $();
    },
    set onnodepointerenter(Z) {
      $(Z), m();
    },
    get onnodepointermove() {
      return S();
    },
    set onnodepointermove(Z) {
      S(Z), m();
    },
    get onnodepointerleave() {
      return A();
    },
    set onnodepointerleave(Z) {
      A(Z), m();
    },
    get onselectionclick() {
      return M();
    },
    set onselectionclick(Z) {
      M(Z), m();
    },
    get onselectioncontextmenu() {
      return B();
    },
    set onselectioncontextmenu(Z) {
      B(Z), m();
    },
    get onselectionstart() {
      return X();
    },
    set onselectionstart(Z) {
      X(Z), m();
    },
    get onselectionend() {
      return Q();
    },
    set onselectionend(Z) {
      Q(Z), m();
    },
    get onedgeclick() {
      return E();
    },
    set onedgeclick(Z) {
      E(Z), m();
    },
    get onedgecontextmenu() {
      return C();
    },
    set onedgecontextmenu(Z) {
      C(Z), m();
    },
    get onedgepointerenter() {
      return _();
    },
    set onedgepointerenter(Z) {
      _(Z), m();
    },
    get onedgepointerleave() {
      return T();
    },
    set onedgepointerleave(Z) {
      T(Z), m();
    },
    get onpaneclick() {
      return D();
    },
    set onpaneclick(Z) {
      D(Z), m();
    },
    get onpanecontextmenu() {
      return L();
    },
    set onpanecontextmenu(Z) {
      L(Z), m();
    },
    get panOnScrollMode() {
      return F();
    },
    set panOnScrollMode(Z = rr.Free) {
      F(Z), m();
    },
    get preventScrolling() {
      return K();
    },
    set preventScrolling(Z = !0) {
      K(Z), m();
    },
    get zoomOnScroll() {
      return H();
    },
    set zoomOnScroll(Z = !0) {
      H(Z), m();
    },
    get zoomOnDoubleClick() {
      return Y();
    },
    set zoomOnDoubleClick(Z = !0) {
      Y(Z), m();
    },
    get zoomOnPinch() {
      return W();
    },
    set zoomOnPinch(Z = !0) {
      W(Z), m();
    },
    get panOnScroll() {
      return U();
    },
    set panOnScroll(Z = !1) {
      U(Z), m();
    },
    get panOnScrollSpeed() {
      return j();
    },
    set panOnScrollSpeed(Z = 0.5) {
      j(Z), m();
    },
    get panOnDrag() {
      return R();
    },
    set panOnDrag(Z = !0) {
      R(Z), m();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(Z = !0) {
      ee(Z), m();
    },
    get connectionLineComponent() {
      return q();
    },
    set connectionLineComponent(Z) {
      q(Z), m();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(Z) {
      ne(Z), m();
    },
    get connectionLineContainerStyle() {
      return J();
    },
    set connectionLineContainerStyle(Z) {
      J(Z), m();
    },
    get connectionLineType() {
      return we();
    },
    set connectionLineType(Z = vn.Bezier) {
      we(Z), m();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(Z) {
      oe(Z), m();
    },
    get children() {
      return ae();
    },
    set children(Z) {
      ae(Z), m();
    },
    get nodes() {
      return re();
    },
    set nodes(Z = []) {
      re(Z), m();
    },
    get edges() {
      return de();
    },
    set edges(Z = []) {
      de(Z), m();
    },
    get viewport() {
      return ge();
    },
    set viewport(Z = void 0) {
      ge(Z), m();
    }
  };
  return rd(e, {
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
    set domNode(Z) {
      fe.domNode = Z;
    },
    get clientWidth() {
      return fe.width;
    },
    set clientWidth(Z) {
      fe.width = Z;
    },
    get clientHeight() {
      return fe.height;
    },
    set clientHeight(Z) {
      fe.height = Z;
    },
    children: (Z, Ye) => {
      var De = ym(), He = ie(De);
      ed(He, {
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
        set store(ze) {
          fe = ze;
        }
      });
      var Ve = V(He, 2);
      Ru(Ve, {
        get panOnScrollMode() {
          return F();
        },
        get preventScrolling() {
          return K();
        },
        get zoomOnScroll() {
          return H();
        },
        get zoomOnDoubleClick() {
          return Y();
        },
        get zoomOnPinch() {
          return W();
        },
        get panOnScroll() {
          return U();
        },
        get panOnScrollSpeed() {
          return j();
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
          return v();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return p();
        },
        get store() {
          return fe;
        },
        set store(ze) {
          fe = ze;
        },
        children: (ze, Ge) => {
          Bu(ze, {
            get onpaneclick() {
              return D();
            },
            get onpanecontextmenu() {
              return L();
            },
            get onselectionstart() {
              return X();
            },
            get onselectionend() {
              return Q();
            },
            get panOnDrag() {
              return R();
            },
            get selectionOnDrag() {
              return ee();
            },
            get store() {
              return fe;
            },
            set store(he) {
              fe = he;
            },
            children: (he, Ze) => {
              var lt = mm(), et = ie(lt);
              Fu(et, {
                get store() {
                  return fe;
                },
                set store(We) {
                  fe = We;
                },
                children: (We, xt) => {
                  var tn = pm(), Tn = V(ie(tn), 2);
                  Ju(Tn, {
                    get onedgeclick() {
                      return E();
                    },
                    get onedgecontextmenu() {
                      return C();
                    },
                    get onedgepointerenter() {
                      return _();
                    },
                    get onedgepointerleave() {
                      return T();
                    },
                    get store() {
                      return fe;
                    },
                    set store(jn) {
                      fe = jn;
                    }
                  });
                  var Ao = V(Tn, 4);
                  td(Ao, {
                    get type() {
                      return we();
                    },
                    get LineComponent() {
                      return q();
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
                    set store(jn) {
                      fe = jn;
                    }
                  });
                  var pa = V(Ao, 2);
                  qu(pa, {
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
                      return $();
                    },
                    get onnodepointermove() {
                      return S();
                    },
                    get onnodepointerleave() {
                      return A();
                    },
                    get onnodedrag() {
                      return N();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return fe;
                    },
                    set store(jn) {
                      fe = jn;
                    }
                  });
                  var nf = V(pa, 2);
                  Qu(nf, {
                    get onselectionclick() {
                      return M();
                    },
                    get onselectioncontextmenu() {
                      return B();
                    },
                    get onnodedrag() {
                      return N();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return fe;
                    },
                    set store(jn) {
                      fe = jn;
                    }
                  }), pe(2), O(We, tn);
                },
                $$slots: { default: !0 }
              });
              var Pt = V(et, 2);
              {
                let We = /* @__PURE__ */ P(() => !!(fe.selectionRect && fe.selectionRectMode === "user")), xt = /* @__PURE__ */ P(() => fe.selectionRect?.width), tn = /* @__PURE__ */ P(() => fe.selectionRect?.height), Tn = /* @__PURE__ */ P(() => fe.selectionRect?.x), Ao = /* @__PURE__ */ P(() => fe.selectionRect?.y);
                ua(Pt, {
                  get isVisible() {
                    return u(We);
                  },
                  get width() {
                    return u(xt);
                  },
                  get height() {
                    return u(tn);
                  },
                  get x() {
                    return u(Tn);
                  },
                  get y() {
                    return u(Ao);
                  }
                });
              }
              O(he, lt);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var st = V(Ve, 2);
      nd(st, {
        get proOptions() {
          return o();
        },
        get position() {
          return oe();
        }
      });
      var at = V(st, 2);
      Zu(at, {
        get store() {
          return fe;
        }
      });
      var Ht = V(at, 2);
      qe(Ht, () => ae() ?? ft), O(Z, De);
    },
    $$slots: { default: !0 }
  }), ue(Pe);
}
se(
  od,
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
function id(e, t) {
  ce(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ $e(zu({ props: {}, nodes: [], edges: [] }));
  Nr(ui, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (a) => {
      G(r, a);
    }
  }), wo(() => {
    u(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    }
  }, i = Ne(), s = ie(i);
  return qe(s, () => n() ?? ft), O(e, i), ue(o);
}
se(id, { children: {} }, [], [], !0);
var wm = /* @__PURE__ */ te("<button><!></button>");
function Gr(e, t) {
  ce(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), c = y(t, "children", 7), d = /* @__PURE__ */ Ie(t, [
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
  }, f = wm();
  nt(
    f,
    (v) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [sn]: v
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
  var g = z(f);
  return qe(g, () => c() ?? ft), I(f), O(e, f), ue(h);
}
se(
  Gr,
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
function sd(e) {
  var t = _m();
  O(e, t);
}
se(sd, {}, [], [], !0);
var xm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ad(e) {
  var t = xm();
  O(e, t);
}
se(ad, {}, [], [], !0);
var bm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function ld(e) {
  var t = bm();
  O(e, t);
}
se(ld, {}, [], [], !0);
var Cm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function cd(e) {
  var t = Cm();
  O(e, t);
}
se(cd, {}, [], [], !0);
var km = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ud(e) {
  var t = km();
  O(e, t);
}
se(ud, {}, [], [], !0);
var Em = /* @__PURE__ */ te("<!> <!>", 1), Sm = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function dd(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), c = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), h = y(t, "buttonColor", 7), f = y(t, "buttonColorHover", 7), g = y(t, "buttonBorderColor", 7), v = y(t, "fitViewOptions", 7), p = y(t, "children", 7), w = y(t, "before", 7), b = y(t, "after", 7), N = /* @__PURE__ */ Ie(t, [
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
  ]), x = /* @__PURE__ */ P(Qt);
  const k = {
    bgColor: c(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: g()
  };
  let $ = /* @__PURE__ */ P(() => u(x).nodesDraggable || u(x).nodesConnectable || u(x).elementsSelectable), S = /* @__PURE__ */ P(() => u(x).viewport.zoom <= u(x).minZoom), A = /* @__PURE__ */ P(() => u(x).viewport.zoom >= u(x).maxZoom), M = /* @__PURE__ */ P(() => u(x).ariaLabelConfig), B = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const X = () => {
    u(x).zoomIn();
  }, Q = () => {
    u(x).zoomOut();
  }, E = () => {
    u(x).fitView(v());
  }, C = () => {
    let T = !u($);
    u(x).nodesDraggable = T, u(x).nodesConnectable = T, u(x).elementsSelectable = T;
  };
  var _ = {
    get position() {
      return n();
    },
    set position(T = "bottom-left") {
      n(T), m();
    },
    get orientation() {
      return r();
    },
    set orientation(T = "vertical") {
      r(T), m();
    },
    get showZoom() {
      return o();
    },
    set showZoom(T = !0) {
      o(T), m();
    },
    get showFitView() {
      return i();
    },
    set showFitView(T = !0) {
      i(T), m();
    },
    get showLock() {
      return s();
    },
    set showLock(T = !0) {
      s(T), m();
    },
    get style() {
      return a();
    },
    set style(T) {
      a(T), m();
    },
    get class() {
      return l();
    },
    set class(T) {
      l(T), m();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(T) {
      c(T), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(T) {
      d(T), m();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(T) {
      h(T), m();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(T) {
      f(T), m();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(T) {
      g(T), m();
    },
    get fitViewOptions() {
      return v();
    },
    set fitViewOptions(T) {
      v(T), m();
    },
    get children() {
      return p();
    },
    set children(T) {
      p(T), m();
    },
    get before() {
      return w();
    },
    set before(T) {
      w(T), m();
    },
    get after() {
      return b();
    },
    set after(T) {
      b(T), m();
    }
  };
  {
    let T = /* @__PURE__ */ P(() => [
      "svelte-flow__controls",
      u(B),
      l()
    ]);
    No(e, Be(
      {
        get class() {
          return u(T);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return u(M)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => N,
      {
        children: (D, L) => {
          var F = Sm(), K = ie(F);
          {
            var H = (oe) => {
              var ae = Ne(), re = ie(ae);
              qe(re, w), O(oe, ae);
            };
            le(K, (oe) => {
              w() && oe(H);
            });
          }
          var Y = V(K, 2);
          {
            var W = (oe) => {
              var ae = Em(), re = ie(ae);
              Gr(re, Be(
                {
                  onclick: X,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return u(M)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(M)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return u(A);
                  }
                },
                () => k,
                {
                  children: (ge, _e) => {
                    sd(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var de = V(re, 2);
              Gr(de, Be(
                {
                  onclick: Q,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(M)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(M)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u(S);
                  }
                },
                () => k,
                {
                  children: (ge, _e) => {
                    ad(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), O(oe, ae);
            };
            le(Y, (oe) => {
              o() && oe(W);
            });
          }
          var U = V(Y, 2);
          {
            var j = (oe) => {
              Gr(oe, Be(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: E,
                  get title() {
                    return u(M)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(M)["controls.fitView.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (ae, re) => {
                    ld(ae);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(U, (oe) => {
              i() && oe(j);
            });
          }
          var R = V(U, 2);
          {
            var ee = (oe) => {
              Gr(oe, Be(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: C,
                  get title() {
                    return u(M)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(M)["controls.interactive.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (ae, re) => {
                    var de = Ne(), ge = ie(de);
                    {
                      var _e = (be) => {
                        ud(be);
                      }, fe = (be) => {
                        cd(be);
                      };
                      le(ge, (be) => {
                        u($) ? be(_e) : be(fe, !1);
                      });
                    }
                    O(ae, de);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(R, (oe) => {
              s() && oe(ee);
            });
          }
          var q = V(R, 2);
          {
            var ne = (oe) => {
              var ae = Ne(), re = ie(ae);
              qe(re, p), O(oe, ae);
            };
            le(q, (oe) => {
              p() && oe(ne);
            });
          }
          var J = V(q, 2);
          {
            var we = (oe) => {
              var ae = Ne(), re = ie(ae);
              qe(re, b), O(oe, ae);
            };
            le(J, (oe) => {
              b() && oe(we);
            });
          }
          O(D, F);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(_);
}
se(
  dd,
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
var Nm = /* @__PURE__ */ ve("<circle></circle>");
function fd(e, t) {
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
  }, i = Nm();
  return Ce(() => {
    xe(i, "cx", n()), xe(i, "cy", n()), xe(i, "r", n()), Nt(i, 0, Sn(["svelte-flow__background-pattern", "dots", r()]));
  }), O(e, i), ue(o);
}
se(fd, { radius: {}, class: {} }, [], [], !0);
var Pm = /* @__PURE__ */ ve("<path></path>");
function hd(e, t) {
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
  }, a = Pm();
  return Ce(() => {
    xe(a, "stroke-width", n()), xe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Nt(a, 0, Sn(["svelte-flow__background-pattern", o(), i()]));
  }), O(e, a), ue(s);
}
se(hd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const $m = {
  [yn.Dots]: 1,
  [yn.Lines]: 1,
  [yn.Cross]: 6
};
var Tm = /* @__PURE__ */ ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function gd(e, t) {
  ce(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => yn.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), c = y(t, "patternClass", 7), d = y(t, "class", 7), h = /* @__PURE__ */ P(Qt), f = /* @__PURE__ */ P(() => r() === yn.Dots), g = /* @__PURE__ */ P(() => r() === yn.Cross), v = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), p = /* @__PURE__ */ P(() => `background-pattern-${u(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ P(() => [
    u(v)[0] * u(h).viewport.zoom || 1,
    u(v)[1] * u(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ P(() => (i() ?? $m[r()]) * u(h).viewport.zoom), N = /* @__PURE__ */ P(() => u(g) ? [u(b), u(b)] : u(w)), x = /* @__PURE__ */ P(() => u(f) ? [u(b) / 2, u(b) / 2] : [
    u(N)[0] / 2,
    u(N)[1] / 2
  ]);
  var k = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), m();
    },
    get variant() {
      return r();
    },
    set variant(E = yn.Dots) {
      r(E), m();
    },
    get gap() {
      return o();
    },
    set gap(E = 20) {
      o(E), m();
    },
    get size() {
      return i();
    },
    set size(E) {
      i(E), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(E = 1) {
      s(E), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(E) {
      a(E), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor(E) {
      l(E), m();
    },
    get patternClass() {
      return c();
    },
    set patternClass(E) {
      c(E), m();
    },
    get class() {
      return d();
    },
    set class(E) {
      d(E), m();
    }
  }, $ = Tm();
  let S;
  var A = z($), M = z(A);
  {
    var B = (E) => {
      {
        let C = /* @__PURE__ */ P(() => u(b) / 2);
        fd(E, {
          get radius() {
            return u(C);
          },
          get class() {
            return c();
          }
        });
      }
    }, X = (E) => {
      hd(E, {
        get dimensions() {
          return u(N);
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
    le(M, (E) => {
      u(f) ? E(B) : E(X, !1);
    });
  }
  I(A);
  var Q = V(A);
  return I($), Ce(
    (E) => {
      Nt($, 0, Sn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), S = ht($, "", S, E), xe(A, "id", u(p)), xe(A, "x", u(h).viewport.x % u(w)[0]), xe(A, "y", u(h).viewport.y % u(w)[1]), xe(A, "width", u(w)[0]), xe(A, "height", u(w)[1]), xe(A, "patternTransform", `translate(-${u(x)[0]},-${u(x)[1]})`), xe(Q, "fill", `url(#${u(p)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), O(e, $), ue(k);
}
se(
  gd,
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
function vd(e, t) {
  ce(t, !0);
  let n = y(t, "x", 7), r = y(t, "y", 7), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "borderRadius", 7, 5), a = y(t, "color", 7), l = y(t, "shapeRendering", 7), c = y(t, "strokeColor", 7), d = y(t, "strokeWidth", 7, 2), h = y(t, "selected", 7), f = y(t, "class", 7), g = y(t, "nodeComponent", 7);
  var v = {
    get x() {
      return n();
    },
    set x(x) {
      n(x), m();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), m();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), m();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), m();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(x = 5) {
      s(x), m();
    },
    get color() {
      return a();
    },
    set color(x) {
      a(x), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), m();
    },
    get strokeColor() {
      return c();
    },
    set strokeColor(x) {
      c(x), m();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(x = 2) {
      d(x), m();
    },
    get selected() {
      return h();
    },
    set selected(x) {
      h(x), m();
    },
    get class() {
      return f();
    },
    set class(x) {
      f(x), m();
    },
    get nodeComponent() {
      return g();
    },
    set nodeComponent(x) {
      g(x), m();
    }
  }, p = Ne(), w = ie(p);
  {
    var b = (x) => {
      const k = /* @__PURE__ */ P(g);
      var $ = Ne(), S = ie($);
      Ci(S, () => u(k), (A, M) => {
        M(A, {
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
            return f();
          },
          get color() {
            return a();
          },
          get shapeRendering() {
            return l();
          },
          get strokeColor() {
            return c();
          },
          get strokeWidth() {
            return d();
          },
          get selected() {
            return h();
          }
        });
      }), O(x, $);
    }, N = (x) => {
      var k = Dm();
      let $, S;
      Ce(
        (A, M) => {
          $ = Nt(k, 0, Sn(["svelte-flow__minimap-node", f()]), null, $, A), xe(k, "x", n()), xe(k, "y", r()), xe(k, "rx", s()), xe(k, "ry", s()), xe(k, "width", o()), xe(k, "height", i()), xe(k, "shape-rendering", l()), S = ht(k, "", S, M);
        },
        [
          () => ({ selected: h() }),
          () => ({
            fill: a(),
            stroke: c(),
            "stroke-width": d()
          })
        ]
      ), O(x, k);
    };
    le(w, (x) => {
      g() ? x(b) : x(N, !1);
    });
  }
  return O(e, p), ue(v);
}
se(
  vd,
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
function Am(e, t) {
  const n = v0({
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
const Gi = (e) => e instanceof Function ? e : () => e;
var Om = /* @__PURE__ */ ve("<title> </title>"), Mm = /* @__PURE__ */ ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Hm = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function pd(e, t) {
  ce(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), c = y(t, "nodeComponent", 7), d = y(t, "bgColor", 7), h = y(t, "maskColor", 7), f = y(t, "maskStrokeColor", 7), g = y(t, "maskStrokeWidth", 7), v = y(t, "width", 7, 200), p = y(t, "height", 7, 150), w = y(t, "pannable", 7, !0), b = y(t, "zoomable", 7, !0), N = y(t, "inversePan", 7), x = y(t, "zoomStep", 7), k = y(t, "class", 7), $ = /* @__PURE__ */ Ie(t, [
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
  ]), S = /* @__PURE__ */ P(Qt), A = /* @__PURE__ */ P(() => u(S).ariaLabelConfig);
  const M = i() === void 0 ? void 0 : Gi(i()), B = Gi(o()), X = Gi(s()), Q = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let E = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${u(S).flowId}`), C = /* @__PURE__ */ P(() => ({
    x: -u(S).viewport.x / u(S).viewport.zoom,
    y: -u(S).viewport.y / u(S).viewport.zoom,
    width: u(S).width / u(S).viewport.zoom,
    height: u(S).height / u(S).viewport.zoom
  })), _ = /* @__PURE__ */ P(() => u(S).nodeLookup.size > 0 ? du(Co(u(S).nodeLookup, { filter: (J) => !J.hidden }), u(C)) : u(C)), T = /* @__PURE__ */ P(() => u(_).width / v()), D = /* @__PURE__ */ P(() => u(_).height / p()), L = /* @__PURE__ */ P(() => Math.max(u(T), u(D))), F = /* @__PURE__ */ P(() => u(L) * v()), K = /* @__PURE__ */ P(() => u(L) * p()), H = /* @__PURE__ */ P(() => 5 * u(L)), Y = /* @__PURE__ */ P(() => u(_).x - (u(F) - u(_).width) / 2 - u(H)), W = /* @__PURE__ */ P(() => u(_).y - (u(K) - u(_).height) / 2 - u(H)), U = /* @__PURE__ */ P(() => u(F) + u(H) * 2), j = /* @__PURE__ */ P(() => u(K) + u(H) * 2);
  const R = () => u(L);
  var ee = {
    get position() {
      return n();
    },
    set position(J = "bottom-right") {
      n(J), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(J) {
      r(J), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(J = "transparent") {
      o(J), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(J) {
      i(J), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(J = "") {
      s(J), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(J = 5) {
      a(J), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(J = 2) {
      l(J), m();
    },
    get nodeComponent() {
      return c();
    },
    set nodeComponent(J) {
      c(J), m();
    },
    get bgColor() {
      return d();
    },
    set bgColor(J) {
      d(J), m();
    },
    get maskColor() {
      return h();
    },
    set maskColor(J) {
      h(J), m();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(J) {
      f(J), m();
    },
    get maskStrokeWidth() {
      return g();
    },
    set maskStrokeWidth(J) {
      g(J), m();
    },
    get width() {
      return v();
    },
    set width(J = 200) {
      v(J), m();
    },
    get height() {
      return p();
    },
    set height(J = 150) {
      p(J), m();
    },
    get pannable() {
      return w();
    },
    set pannable(J = !0) {
      w(J), m();
    },
    get zoomable() {
      return b();
    },
    set zoomable(J = !0) {
      b(J), m();
    },
    get inversePan() {
      return N();
    },
    set inversePan(J) {
      N(J), m();
    },
    get zoomStep() {
      return x();
    },
    set zoomStep(J) {
      x(J), m();
    },
    get class() {
      return k();
    },
    set class(J) {
      k(J), m();
    }
  }, q = Hm(), ne = ie(q);
  {
    let J = /* @__PURE__ */ P(() => ["svelte-flow__minimap", k()]);
    kh(ne, () => ({ "--xy-minimap-background-color-props": d() })), No(ne.lastChild, Be(
      {
        get position() {
          return n();
        },
        get class() {
          return u(J);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => $,
      {
        children: (we, oe) => {
          var ae = Ne(), re = ie(ae);
          {
            var de = (ge) => {
              var _e = Mm();
              let fe;
              var be = z(_e);
              {
                var Pe = (De) => {
                  var He = Om(), Ve = z(He, !0);
                  I(He), Ce(() => {
                    xe(He, "id", u(E)), Re(Ve, r() ?? u(A)["minimap.ariaLabel"]);
                  }), O(De, He);
                };
                le(be, (De) => {
                  (r() ?? u(A)["minimap.ariaLabel"]) && De(Pe);
                });
              }
              var Z = V(be);
              pt(Z, 17, () => u(S).nodes, (De) => De.id, (De, He) => {
                const Ve = /* @__PURE__ */ P(() => u(S).nodeLookup.get(u(He).id));
                var st = Ne(), at = ie(st);
                {
                  var Ht = (ze) => {
                    const Ge = /* @__PURE__ */ P(() => Xn(u(Ve)));
                    {
                      let he = /* @__PURE__ */ P(() => M?.(u(Ve))), Ze = /* @__PURE__ */ P(() => B(u(Ve))), lt = /* @__PURE__ */ P(() => X(u(Ve)));
                      vd(ze, Be(
                        {
                          get x() {
                            return u(Ve).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(Ve).internals.positionAbsolute.y;
                          }
                        },
                        () => u(Ge),
                        {
                          get selected() {
                            return u(Ve).selected;
                          },
                          get nodeComponent() {
                            return c();
                          },
                          get color() {
                            return u(he);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return u(Ze);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return Q;
                          },
                          get class() {
                            return u(lt);
                          }
                        }
                      ));
                    }
                  };
                  le(at, (ze) => {
                    u(Ve) && fu(u(Ve)) && ze(Ht);
                  });
                }
                O(De, st);
              });
              var Ye = V(Z);
              I(_e), gt(_e, (De, He) => Am?.(De, He), () => ({
                store: u(S),
                panZoom: u(S).panZoom,
                getViewScale: R,
                translateExtent: u(S).translateExtent,
                width: u(S).width,
                height: u(S).height,
                inversePan: N(),
                zoomStep: x(),
                pannable: w(),
                zoomable: b()
              })), Ce(
                (De) => {
                  xe(_e, "width", v()), xe(_e, "height", p()), xe(_e, "viewBox", `${u(Y) ?? ""} ${u(W) ?? ""} ${u(U) ?? ""} ${u(j) ?? ""}`), xe(_e, "aria-labelledby", u(E)), fe = ht(_e, "", fe, De), xe(Ye, "d", `M${u(Y) - u(H)},${u(W) - u(H)}h${u(U) + u(H) * 2}v${u(j) + u(H) * 2}h${-u(U) - u(H) * 2}z
      M${u(C).x ?? ""},${u(C).y ?? ""}h${u(C).width ?? ""}v${u(C).height ?? ""}h${-u(C).width}z`);
                },
                [
                  () => ({
                    "--xy-minimap-mask-background-color-props": h(),
                    "--xy-minimap-mask-stroke-color-props": f(),
                    "--xy-minimap-mask-stroke-width-props": g() ? g() * u(L) : void 0
                  })
                ]
              ), O(ge, _e);
            };
            le(re, (ge) => {
              u(S).panZoom && ge(de);
            });
          }
          O(we, ae);
        },
        $$slots: { default: !0 }
      }
    )), I(ne);
  }
  return O(e, q), ue(ee);
}
se(
  pd,
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
function md(e, t) {
  ce(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => ye.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ Ie(t, [
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
  const c = Qt(), { getNodesBounds: d } = it(), h = In("svelteflow__node_id");
  let f = /* @__PURE__ */ P(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (S, A) => {
      const M = c.nodeLookup.get(A);
      return M && S.push(M), S;
    },
    []
  ))), g = /* @__PURE__ */ P(() => {
    const $ = d(u(f));
    return $ ? jp($, c.viewport, r(), i(), o()) : "";
  }), v = /* @__PURE__ */ P(() => u(f).length === 0 ? 1 : Math.max(...u(f).map(($) => ($.internals.z || 5) + 1))), p = /* @__PURE__ */ P(() => c.nodes.filter(($) => $.selected).length), w = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(p) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId($) {
      n($), m();
    },
    get position() {
      return r();
    },
    set position($ = ye.Top) {
      r($), m();
    },
    get align() {
      return o();
    },
    set align($ = "center") {
      o($), m();
    },
    get offset() {
      return i();
    },
    set offset($ = 10) {
      i($), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible($) {
      s($), m();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), m();
    }
  }, N = Ne(), x = ie(N);
  {
    var k = ($) => {
      var S = Lm();
      nt(
        S,
        (M, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": M,
          ...l,
          [sn]: B
        }),
        [
          () => u(f).reduce((M, B) => `${M}${B.id} `, "").trim(),
          () => ({
            display: Au().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(v)
          })
        ]
      );
      var A = z(S);
      qe(A, () => a() ?? ft), I(S), gt(S, (M, B) => Du?.(M, B), () => "root"), O($, S);
    };
    le(x, ($) => {
      c.domNode && u(w) && u(f) && $(k);
    });
  }
  return O(e, N), ue(b);
}
se(
  md,
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
  const t = /* @__PURE__ */ P(Qt), n = /* @__PURE__ */ P(() => u(t).nodes), r = /* @__PURE__ */ P(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const h = u(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!s0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
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
], da = [
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
class V_ {
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
  let e = /* @__PURE__ */ $e([]), t = /* @__PURE__ */ $e([]), n = /* @__PURE__ */ $e({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      G(e, r), G(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      G(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      G(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      G(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      G(e, [...u(e), r]);
    },
    removeNode: (r) => {
      G(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      G(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      G(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      G(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      G(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      G(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      G(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      G(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      G(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      G(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Me = Bm();
var Fm = /* @__PURE__ */ te("<button><!></button>");
function Ae(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ Ie(t, [
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
  }, s = Fm();
  nt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = z(s);
  return qe(a, () => n() ?? ft), I(s), O(e, s), ue(i);
}
se(Ae, { children: {}, primary: {} }, [], [], !0);
var Km = /* @__PURE__ */ te("<input/>");
function yd(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Km();
  nt(
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
  ), O(e, r), ue();
}
se(yd, {}, [], [], !0);
var Zm = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Ym = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function wd(e, t) {
  ce(t, !0), Le(e, Ym);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), s = y(t, "onChosen", 7), a = /* @__PURE__ */ Ie(t, [
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
  }, c = Zm();
  nt(
    c,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = z(c);
  tr(d);
  var h = V(d, 2);
  Je(h, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = V(h, 2);
  return Ae(f, {
    onclick: (g) => {
      s()?.(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, v) => {
      pe();
      var p = ke();
      Ce(() => Re(p, i())), O(g, p);
    },
    $$slots: { default: !0 }
  }), I(c), Ce(() => Bo(d, o())), O(e, c), ue(l);
}
se(
  wd,
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
function Je(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Wm();
  nt(
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
  ), O(e, r), ue();
}
se(Je, {}, [], [], !0);
var Xm = /* @__PURE__ */ te("<textarea></textarea>");
function Fe(e, t) {
  ce(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = {
    get value() {
      return n();
    },
    set value(s) {
      n(s), m();
    }
  }, i = Xm();
  return eh(i), nt(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), O(e, i), ue(o);
}
se(Fe, { value: {} }, [], [], !0);
var qm = /* @__PURE__ */ te('<div role="button"><!></div>'), jm = /* @__PURE__ */ te("<div></div>");
function _d(e, t) {
  const n = La(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = La(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(d, h) {
    s(h), i()?.(d, h);
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
  $c();
  var c = jm();
  return nt(c, () => ({
    ...r,
    class: `tf-tabs ${Ks(r), ut(() => r.class) ?? ""}`
  })), pt(c, 5, o, Ar, (d, h, f) => {
    var g = qm();
    xe(g, "tabindex", f), g.__click = () => a(u(h), f), g.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(u(h), f));
    };
    var v = z(g);
    {
      var p = (b) => {
        var N = ke();
        Ce(() => Re(N, (u(h), ut(() => u(h).label)))), O(b, N);
      }, w = (b) => {
        var N = Ne(), x = ie(N);
        qe(x, () => (u(h), ut(() => u(h).label) ?? ft)), O(b, N);
      };
      le(v, (b) => {
        u(h), ut(() => typeof u(h).label == "string") ? b(p) : b(w, !1);
      });
    }
    I(g), Ce(() => Nt(g, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), O(d, g);
  }), I(c), O(e, c), ue(l);
}
Wn(["click", "keydown"]);
se(_d, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Gm = (e, t, n) => t(u(n)), Um = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(u(n)));
}, Jm = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Qm = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), e2 = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), t2 = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), n2 = /* @__PURE__ */ te("<div></div>");
const r2 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function xd(e, t) {
  ce(t, !0), Le(e, r2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => It([]));
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
  }, a = n2();
  return pt(a, 21, n, Ar, (l, c, d) => {
    var h = t2(), f = z(h);
    xe(f, "tabindex", d), f.__click = [Gm, i, c], f.__keydown = [Um, i, c];
    var g = z(f);
    {
      var v = ($) => {
        var S = Jm(), A = z(S);
        Mn(A, {
          get target() {
            return u(c).icon;
          }
        }), I(S), O($, S);
      };
      le(g, ($) => {
        u(c).icon && $(v);
      });
    }
    var p = V(g, 2);
    Mn(p, {
      get target() {
        return u(c).title;
      }
    });
    var w = V(p, 2);
    I(f);
    var b = V(f, 2);
    {
      var N = ($) => {
        var S = Qm(), A = z(S);
        Mn(A, {
          get target() {
            return u(c).description;
          }
        }), I(S), O($, S);
      };
      le(b, ($) => {
        u(c).description && $(N);
      });
    }
    var x = V(b, 2);
    {
      var k = ($) => {
        var S = e2(), A = z(S);
        Mn(A, {
          get target() {
            return u(c).content;
          }
        }), I(S), O($, S);
      };
      le(x, ($) => {
        o().includes(u(c).key) && $(k);
      });
    }
    I(h), Ce(($) => Nt(w, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), O(l, h);
  }), I(a), Ce(() => {
    ht(a, t.style), Nt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), O(e, a), ue(s);
}
Wn(["click", "keydown"]);
se(xd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
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
  }, o = Ne(), i = ie(o);
  {
    var s = (l) => {
      var c = Ne(), d = ie(c);
      qe(d, () => n() ?? ft), O(l, c);
    }, a = (l) => {
      var c = Ne(), d = ie(c);
      Ws(d, n), O(l, c);
    };
    le(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return O(e, o), ue(r);
}
se(Mn, { target: {} }, [], [], !0);
var o2 = (e, t, n) => t(u(n)), i2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), s2 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), a2 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), l2 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), c2 = /* @__PURE__ */ te("<!> <!>", 1), u2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), d2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), f2 = /* @__PURE__ */ te("<div><!></div>");
function dt(e, t) {
  ce(t, !0);
  const n = (N, x = ft) => {
    var k = Ne(), $ = ie(k);
    pt($, 19, x, (S, A) => `${A}_${S.value}`, (S, A) => {
      var M = a2(), B = ie(M);
      B.__click = [o2, v, A];
      var X = z(B), Q = z(X);
      {
        var E = (D) => {
          var L = i2();
          O(D, L);
        };
        le(Q, (D) => {
          u(A).children && u(A).children.length > 0 && D(E);
        });
      }
      I(X);
      var C = V(X, 2);
      Mn(C, {
        get target() {
          return u(A).label;
        }
      }), I(B);
      var _ = V(B, 2);
      {
        var T = (D) => {
          var L = s2(), F = z(L);
          n(F, () => u(A).children), I(L), O(D, L);
        };
        le(_, (D) => {
          u(A).children && u(A).children.length > 0 && (a() || c().includes(u(A).value)) && D(T);
        });
      }
      O(S, M);
    }), O(N, k);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), h = /* @__PURE__ */ Ie(t, [
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
  ]), f = /* @__PURE__ */ P(() => {
    const N = [], x = (k) => {
      for (let $ of k)
        i().length > 0 ? i().includes($.value) && N.push($) : s().includes($.value) && N.push($), $.children && $.children.length > 0 && x($.children);
    };
    return x(r()), N;
  }), g;
  function v(N) {
    g?.hide(), o()?.(N);
  }
  var p = {
    get items() {
      return r();
    },
    set items(N) {
      r(N), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(N) {
      o(N), m();
    },
    get value() {
      return i();
    },
    set value(N = []) {
      i(N), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(N = []) {
      s(N), m();
    },
    get expandAll() {
      return a();
    },
    set expandAll(N = !0) {
      a(N), m();
    },
    get multiple() {
      return l();
    },
    set multiple(N = !1) {
      l(N), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(N = []) {
      c(N), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(N) {
      d(N), m();
    }
  }, w = f2();
  nt(w, () => ({ ...h, class: `tf-select ${h.class ?? ""}` }));
  var b = z(w);
  return Ot(
    qn(b, {
      floating: (x) => {
        var k = l2(), $ = z(k);
        n($, r), I(k), O(x, k);
      },
      children: (x, k) => {
        var $ = d2();
        nt($, () => ({ class: "tf-select-input nopan nodrag", ...h }));
        var S = z($);
        pt(
          S,
          23,
          () => u(f),
          (A, M) => `${M}_${A.value}`,
          (A, M, B) => {
            var X = Ne(), Q = ie(X);
            {
              var E = (_) => {
                var T = Ne(), D = ie(T);
                {
                  var L = (F) => {
                    Mn(F, {
                      get target() {
                        return u(M).label;
                      }
                    });
                  };
                  le(D, (F) => {
                    u(B) === 0 && F(L);
                  });
                }
                O(_, T);
              }, C = (_) => {
                var T = c2(), D = ie(T);
                Mn(D, {
                  get target() {
                    return u(M).label;
                  }
                });
                var L = V(D, 2);
                {
                  var F = (K) => {
                    var H = ke(",");
                    O(K, H);
                  };
                  le(L, (K) => {
                    u(B) < u(f).length - 1 && K(F);
                  });
                }
                O(_, T);
              };
              le(Q, (_) => {
                l() ? _(C, !1) : _(E);
              });
            }
            O(A, X);
          },
          (A) => {
            var M = u2(), B = z(M, !0);
            I(M), Ce(() => Re(B, d())), O(A, M);
          }
        ), I(S), pe(2), I($), O(x, $);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => g = x,
    () => g
  ), I(w), O(e, w), ue(p);
}
Wn(["click"]);
se(
  dt,
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
const co = Math.min, Cr = Math.max, di = Math.round, un = (e) => ({
  x: e,
  y: e
}), h2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, g2 = {
  start: "end",
  end: "start"
};
function xs(e, t, n) {
  return Cr(e, co(t, n));
}
function Po(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cr(e) {
  return e.split("-")[0];
}
function $o(e) {
  return e.split("-")[1];
}
function bd(e) {
  return e === "x" ? "y" : "x";
}
function fa(e) {
  return e === "y" ? "height" : "width";
}
const v2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Hn(e) {
  return v2.has(cr(e)) ? "y" : "x";
}
function ha(e) {
  return bd(Hn(e));
}
function p2(e, t, n) {
  n === void 0 && (n = !1);
  const r = $o(e), o = ha(e), i = fa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = fi(s)), [s, fi(s)];
}
function m2(e) {
  const t = fi(e);
  return [bs(e), t, bs(t)];
}
function bs(e) {
  return e.replace(/start|end/g, (t) => g2[t]);
}
const bl = ["left", "right"], Cl = ["right", "left"], y2 = ["top", "bottom"], w2 = ["bottom", "top"];
function _2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cl : bl : t ? bl : Cl;
    case "left":
    case "right":
      return t ? y2 : w2;
    default:
      return [];
  }
}
function x2(e, t, n, r) {
  const o = $o(e);
  let i = _2(cr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(bs)))), i;
}
function fi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => h2[t]);
}
function b2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Cd(e) {
  return typeof e != "number" ? b2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function hi(e) {
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
  const i = Hn(t), s = ha(t), a = fa(s), l = cr(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch ($o(t)) {
    case "start":
      g[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const C2 = async (e, t, n) => {
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
  } = kl(c, r, l), f = r, g = {}, v = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: w,
      fn: b
    } = a[p], {
      x: N,
      y: x,
      data: k,
      reset: $
    } = await b({
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
    d = N ?? d, h = x ?? h, g = {
      ...g,
      [w]: {
        ...g[w],
        ...k
      }
    }, $ && v <= 50 && (v++, typeof $ == "object" && ($.placement && (f = $.placement), $.rects && (c = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: d,
      y: h
    } = kl(c, f, l)), p = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function kd(e, t) {
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
  } = Po(t, e), v = Cd(g), w = a[f ? h === "floating" ? "reference" : "floating" : h], b = hi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), N = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), k = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = hi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: N,
    offsetParent: x,
    strategy: l
  }) : N);
  return {
    top: (b.top - $.top + v.top) / k.y,
    bottom: ($.bottom - b.bottom + v.bottom) / k.y,
    left: (b.left - $.left + v.left) / k.x,
    right: ($.right - b.right + v.right) / k.x
  };
}
const k2 = (e) => ({
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
    } = Po(e, t) || {};
    if (c == null)
      return {};
    const h = Cd(d), f = {
      x: n,
      y: r
    }, g = ha(o), v = fa(g), p = await s.getDimensions(c), w = g === "y", b = w ? "top" : "left", N = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", k = i.reference[v] + i.reference[g] - f[g] - i.floating[v], $ = f[g] - i.reference[g], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let A = S ? S[x] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(S))) && (A = a.floating[x] || i.floating[v]);
    const M = k / 2 - $ / 2, B = A / 2 - p[v] / 2 - 1, X = co(h[b], B), Q = co(h[N], B), E = X, C = A - p[v] - Q, _ = A / 2 - p[v] / 2 + M, T = xs(E, _, C), D = !l.arrow && $o(o) != null && _ !== T && i.reference[v] / 2 - (_ < E ? X : Q) - p[v] / 2 < 0, L = D ? _ < E ? _ - E : _ - C : 0;
    return {
      [g]: f[g] + L,
      data: {
        [g]: T,
        centerOffset: _ - T - L,
        ...D && {
          alignmentOffset: L
        }
      },
      reset: D
    };
  }
}), E2 = function(e) {
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
        fallbackAxisSideDirection: v = "none",
        flipAlignment: p = !0,
        ...w
      } = Po(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = cr(o), N = Hn(a), x = cr(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), $ = f || (x || !p ? [fi(a)] : m2(a)), S = v !== "none";
      !f && S && $.push(...x2(a, p, v, k));
      const A = [a, ...$], M = await kd(t, w), B = [];
      let X = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && B.push(M[b]), h) {
        const _ = p2(o, s, k);
        B.push(M[_[0]], M[_[1]]);
      }
      if (X = [...X, {
        placement: o,
        overflows: B
      }], !B.every((_) => _ <= 0)) {
        var Q, E;
        const _ = (((Q = i.flip) == null ? void 0 : Q.index) || 0) + 1, T = A[_];
        if (T && (!(h === "alignment" ? N !== Hn(T) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        X.every((F) => Hn(F.placement) === N ? F.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: X
            },
            reset: {
              placement: T
            }
          };
        let D = (E = X.filter((L) => L.overflows[0] <= 0).sort((L, F) => L.overflows[1] - F.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!D)
          switch (g) {
            case "bestFit": {
              var C;
              const L = (C = X.filter((F) => {
                if (S) {
                  const K = Hn(F.placement);
                  return K === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((K) => K > 0).reduce((K, H) => K + H, 0)]).sort((F, K) => F[1] - K[1])[0]) == null ? void 0 : C[0];
              L && (D = L);
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
}, S2 = /* @__PURE__ */ new Set(["left", "top"]);
async function N2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = cr(n), a = $o(n), l = Hn(n) === "y", c = S2.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = Po(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: v
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return a && typeof v == "number" && (g = a === "end" ? v * -1 : v), l ? {
    x: g * d,
    y: f * c
  } : {
    x: f * c,
    y: g * d
  };
}
const P2 = function(e) {
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
      } = t, l = await N2(t, e);
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
}, $2 = function(e) {
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
              y: N
            } = w;
            return {
              x: b,
              y: N
            };
          }
        },
        ...l
      } = Po(e, t), c = {
        x: n,
        y: r
      }, d = await kd(t, l), h = Hn(cr(o)), f = bd(h);
      let g = c[f], v = c[h];
      if (i) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", N = g + d[w], x = g - d[b];
        g = xs(N, g, x);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", N = v + d[w], x = v - d[b];
        v = xs(N, v, x);
      }
      const p = a.fn({
        ...t,
        [f]: g,
        [h]: v
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [f]: i,
            [h]: s
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
  return Ed(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pn(e) {
  var t;
  return (t = (Ed(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ed(e) {
  return Oi() ? e instanceof Node || e instanceof Tt(e).Node : !1;
}
function qt(e) {
  return Oi() ? e instanceof Element || e instanceof Tt(e).Element : !1;
}
function fn(e) {
  return Oi() ? e instanceof HTMLElement || e instanceof Tt(e).HTMLElement : !1;
}
function El(e) {
  return !Oi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Tt(e).ShadowRoot;
}
const T2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function To(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !T2.has(o);
}
const D2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function A2(e) {
  return D2.has(Kr(e));
}
const O2 = [":popover-open", ":modal"];
function Mi(e) {
  return O2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const M2 = ["transform", "translate", "scale", "rotate", "perspective"], H2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], L2 = ["paint", "layout", "strict", "content"];
function ga(e) {
  const t = va(), n = qt(e) ? jt(e) : e;
  return M2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || H2.some((r) => (n.willChange || "").includes(r)) || L2.some((r) => (n.contain || "").includes(r));
}
function V2(e) {
  let t = Bn(e);
  for (; fn(t) && !zr(t); ) {
    if (ga(t))
      return t;
    if (Mi(t))
      return null;
    t = Bn(t);
  }
  return null;
}
function va() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const I2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function zr(e) {
  return I2.has(Kr(e));
}
function jt(e) {
  return Tt(e).getComputedStyle(e);
}
function Hi(e) {
  return qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Bn(e) {
  if (Kr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    El(e) && e.host || // Fallback.
    Pn(e)
  );
  return El(t) ? t.host : t;
}
function Sd(e) {
  const t = Bn(e);
  return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && To(t) ? t : Sd(t);
}
function Nd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Sd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Tt(o);
  return i ? (Cs(s), t.concat(s, s.visualViewport || [], To(o) ? o : [], [])) : t.concat(o, Nd(o, []));
}
function Cs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Pd(e) {
  const t = jt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = fn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = di(n) !== i || di(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function $d(e) {
  return qt(e) ? e : e.contextElement;
}
function kr(e) {
  const t = $d(e);
  if (!fn(t))
    return un(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Pd(t);
  let s = (i ? di(n.width) : n.width) / r, a = (i ? di(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const z2 = /* @__PURE__ */ un(0);
function Td(e) {
  const t = Tt(e);
  return !va() || !t.visualViewport ? z2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function R2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Tt(e) ? !1 : t;
}
function uo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = $d(e);
  let s = un(1);
  t && (r ? qt(r) && (s = kr(r)) : s = kr(e));
  const a = R2(i, n, r) ? Td(i) : un(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = Tt(i), g = r && qt(r) ? Tt(r) : r;
    let v = f, p = Cs(v);
    for (; p && r && g !== v; ) {
      const w = kr(p), b = p.getBoundingClientRect(), N = jt(p), x = b.left + (p.clientLeft + parseFloat(N.paddingLeft)) * w.x, k = b.top + (p.clientTop + parseFloat(N.paddingTop)) * w.y;
      l *= w.x, c *= w.y, d *= w.x, h *= w.y, l += x, c += k, v = Tt(p), p = Cs(v);
    }
  }
  return hi({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Li(e, t) {
  const n = Hi(e).scrollLeft;
  return t ? t.left + n : uo(Pn(e)).left + n;
}
function Dd(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Li(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function B2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Pn(r), a = t ? Mi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = un(1);
  const d = un(0), h = fn(r);
  if ((h || !h && !i) && ((Kr(r) !== "body" || To(s)) && (l = Hi(r)), fn(r))) {
    const g = uo(r);
    c = kr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !h && !i ? Dd(s, l) : un(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function F2(e) {
  return Array.from(e.getClientRects());
}
function K2(e) {
  const t = Pn(e), n = Hi(e), r = e.ownerDocument.body, o = Cr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Cr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Li(e);
  const a = -n.scrollTop;
  return jt(r).direction === "rtl" && (s += Cr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Sl = 25;
function Z2(e, t) {
  const n = Tt(e), r = Pn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = va();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Li(r);
  if (c <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), g = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, v = Math.abs(r.clientWidth - h.clientWidth - g);
    v <= Sl && (i -= v);
  } else c <= Sl && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Y2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function W2(e, t) {
  const n = uo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = fn(e) ? kr(e) : un(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
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
    r = Z2(e, n);
  else if (t === "document")
    r = K2(Pn(e));
  else if (qt(t))
    r = W2(t, n);
  else {
    const o = Td(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return hi(r);
}
function Ad(e, t) {
  const n = Bn(e);
  return n === t || !qt(n) || zr(n) ? !1 : jt(n).position === "fixed" || Ad(n, t);
}
function X2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Nd(e, []).filter((a) => qt(a) && Kr(a) !== "body"), o = null;
  const i = jt(e).position === "fixed";
  let s = i ? Bn(e) : e;
  for (; qt(s) && !zr(s); ) {
    const a = jt(s), l = ga(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && Y2.has(o.position) || To(s) && !l && Ad(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Bn(s);
  }
  return t.set(e, r), r;
}
function q2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Mi(t) ? [] : X2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const h = Nl(t, d, o);
    return c.top = Cr(h.top, c.top), c.right = co(h.right, c.right), c.bottom = co(h.bottom, c.bottom), c.left = Cr(h.left, c.left), c;
  }, Nl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function j2(e) {
  const {
    width: t,
    height: n
  } = Pd(e);
  return {
    width: t,
    height: n
  };
}
function G2(e, t, n) {
  const r = fn(t), o = Pn(t), i = n === "fixed", s = uo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = un(0);
  function c() {
    l.x = Li(o);
  }
  if (r || !r && !i)
    if ((Kr(t) !== "body" || To(o)) && (a = Hi(t)), r) {
      const g = uo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Dd(o, a) : un(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Ui(e) {
  return jt(e).position === "static";
}
function Pl(e, t) {
  if (!fn(e) || jt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Pn(e) === n && (n = n.ownerDocument.body), n;
}
function Od(e, t) {
  const n = Tt(e);
  if (Mi(e))
    return n;
  if (!fn(e)) {
    let o = Bn(e);
    for (; o && !zr(o); ) {
      if (qt(o) && !Ui(o))
        return o;
      o = Bn(o);
    }
    return n;
  }
  let r = Pl(e, t);
  for (; r && A2(r) && Ui(r); )
    r = Pl(r, t);
  return r && zr(r) && Ui(r) && !ga(r) ? n : r || V2(e) || n;
}
const U2 = async function(e) {
  const t = this.getOffsetParent || Od, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: G2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function J2(e) {
  return jt(e).direction === "rtl";
}
const Q2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: B2,
  getDocumentElement: Pn,
  getClippingRect: q2,
  getOffsetParent: Od,
  getElementRects: U2,
  getClientRects: F2,
  getDimensions: j2,
  getScale: kr,
  isElement: qt,
  isRTL: J2
}, ey = P2, ty = $2, ny = E2, ry = k2, oy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Q2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return C2(e, t, {
    ...o,
    platform: i
  });
}, iy = ({
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
  let c;
  if (typeof n == "string") {
    const b = document.querySelector(n);
    if (b)
      c = b;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", c.firstElementChild.before(d));
  function h() {
    oy(e, c, {
      placement: r,
      middleware: [
        ey(o),
        // 手动偏移配置
        ny(i),
        //自动翻转
        ty(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [ry({ element: d })] : []
      ]
    }).then(({ x: b, y: N, placement: x, middlewareData: k }) => {
      if (Object.assign(c.style, {
        left: `${b}px`,
        top: `${N}px`
      }), l) {
        const { x: $, y: S } = k.arrow, A = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: $ != null ? `${$}px` : "",
          top: S != null ? `${S}px` : "",
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
  function v() {
    c.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function p(b) {
    b.stopPropagation(), f ? v() : g();
  }
  function w(b) {
    c.contains(b.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, p);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, p);
      }), document.removeEventListener("click", w);
    },
    hide() {
      v();
    },
    isVisible() {
      return f;
    }
  };
};
var sy = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function qn(e, t) {
  ce(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  En(() => (a = iy({
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
  }, d = sy(), h = z(d), f = z(h);
  qe(f, n), I(h), Ot(h, (p) => i = p, () => i);
  var g = V(h, 2), v = z(g);
  return qe(v, r), I(g), Ot(g, (p) => s = p, () => s), I(d), O(e, d), ue(c);
}
se(qn, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Oe(e, t) {
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
  }, a = Ne(), l = ie(a);
  return Nh(l, () => `h${r()}`, !1, (c, d) => {
    nt(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = Ne(), f = ie(h);
    qe(f, () => n() ?? ft), O(d, h);
  }), O(e, a), ue(s);
}
se(Oe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var ay = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const ly = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Do(e, t) {
  ce(t, !0), Le(e, ly);
  const n = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ae(e, Be(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = ay();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Do, {}, [], [], !0);
const cy = () => ({ deleteNode: (t) => {
  Me.removeNode(t), Me.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Cn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, uy = () => ({ copyNode: (t) => {
  const n = Me.getNode(t);
  if (n) {
    const r = Cn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Me.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), je = () => In("svelteflow__node_id"), Fn = () => In("tinyflow_options");
var dy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), fy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), hy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), gy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), vy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, py = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, my = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), yy = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), wy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), _y = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), xy = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const by = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Ft(e, t) {
  ce(t, !0), Le(e, by);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), c = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), h = y(t, "allowSettingOfCondition", 7, !0), f = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), v = y(t, "onCollapse", 7);
  let p = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = it(), N = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = cy(), { copyNode: k } = uy(), $ = Fn(), S = () => {
    $.onNodeExecute?.(b(r()));
  };
  let A = je();
  var M = {
    get data() {
      return n();
    },
    set data(H) {
      n(H), m();
    },
    get id() {
      return r();
    },
    set id(H = "") {
      r(H), m();
    },
    get icon() {
      return o();
    },
    set icon(H) {
      o(H), m();
    },
    get handle() {
      return i();
    },
    set handle(H) {
      i(H), m();
    },
    get children() {
      return s();
    },
    set children(H) {
      s(H), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(H = !0) {
      a(H), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(H = !0) {
      l(H), m();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete(H = !0) {
      c(H), m();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(H = !0) {
      d(H), m();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(H = !0) {
      h(H), m();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(H = !0) {
      f(H), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(H = !0) {
      g(H), m();
    },
    get onCollapse() {
      return v();
    },
    set onCollapse(H) {
      v(H), m();
    }
  }, B = xy(), X = ie(B);
  {
    var Q = (H) => {
      md(H, {
        get position() {
          return ye.Top;
        },
        align: "start",
        children: (Y, W) => {
          var U = _y(), j = z(U);
          {
            var R = (ae) => {
              Ae(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (re, de) => {
                  var ge = dy();
                  O(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(j, (ae) => {
              c() && ae(R);
            });
          }
          var ee = V(j, 2);
          {
            var q = (ae) => {
              Ae(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (re, de) => {
                  var ge = fy();
                  O(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(ee, (ae) => {
              l() && ae(q);
            });
          }
          var ne = V(ee, 2);
          {
            var J = (ae) => {
              Ae(ae, {
                class: "tf-node-toolbar-item",
                onclick: S,
                children: (re, de) => {
                  var ge = hy();
                  O(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(ne, (ae) => {
              a() && ae(J);
            });
          }
          var we = V(ne, 2);
          {
            var oe = (ae) => {
              qn(ae, {
                placement: "bottom",
                floating: (de) => {
                  var ge = yy(), _e = z(ge), fe = V(z(_e));
                  Je(fe, {
                    style: "width: 100%;",
                    onchange: (ze) => {
                      const Ge = ze.target.value;
                      w(A, { title: Ge });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(_e);
                  var be = V(_e, 2), Pe = V(z(be));
                  Fe(Pe, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ze) => {
                      const Ge = ze.target.value;
                      w(A, { description: Ge });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(be);
                  var Z = V(be, 2);
                  {
                    var Ye = (ze) => {
                      var Ge = gy(), he = V(z(Ge));
                      Fe(he, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ze) => {
                          const lt = Ze.target.value;
                          w(A, { condition: lt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(Ge), O(ze, Ge);
                    };
                    le(Z, (ze) => {
                      h() && ze(Ye);
                    });
                  }
                  var De = V(Z, 2), He = V(z(De), 2);
                  tr(He), He.__change = [vy, w, A], I(De);
                  var Ve = V(De, 2), st = V(z(Ve), 2);
                  tr(st), st.__change = [py, w, A], I(Ve);
                  var at = V(Ve, 2);
                  {
                    var Ht = (ze) => {
                      var Ge = my(), he = ie(Ge), Ze = V(z(he));
                      {
                        let xt = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        Fe(Ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (tn) => {
                            const Tn = tn.target.value;
                            w(A, { loopIntervalMs: Tn });
                          },
                          get value() {
                            return u(xt);
                          }
                        });
                      }
                      I(he);
                      var lt = V(he, 2), et = V(z(lt));
                      {
                        let xt = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        Fe(et, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (tn) => {
                            const Tn = tn.target.value;
                            w(A, { maxLoopCount: Tn });
                          },
                          get value() {
                            return u(xt);
                          }
                        });
                      }
                      I(lt);
                      var Pt = V(lt, 2), We = V(z(Pt));
                      Fe(We, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (xt) => {
                          const tn = xt.target.value;
                          w(A, { loopBreakCondition: tn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(Pt), O(ze, Ge);
                    };
                    le(at, (ze) => {
                      n().loopEnable && ze(Ht);
                    });
                  }
                  I(ge), Ce(() => {
                    Da(He, !!n().async), Da(st, !!n().loopEnable);
                  }), O(de, ge);
                },
                children: (de, ge) => {
                  Ae(de, {
                    class: "tf-node-toolbar-item",
                    children: (_e, fe) => {
                      var be = wy();
                      O(_e, be);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            le(we, (ae) => {
              d() && ae(oe);
            });
          }
          I(U), O(Y, U);
        },
        $$slots: { default: !0 }
      });
    };
    le(X, (H) => {
      (a() || l() || c()) && H(Q);
    });
  }
  var E = V(X, 2), C = V(z(E), 2), _ = z(C);
  xd(_, {
    get items() {
      return u(N);
    },
    get activeKeys() {
      return p;
    },
    onChange: (H, Y) => {
      w(r(), { expand: Y?.includes("key") }), v()?.(Y?.includes("key") ? "key" : "");
    }
  }), I(C), I(E);
  var T = V(E, 2);
  {
    var D = (H) => {
      Rn(H, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    le(T, (H) => {
      g() && H(D);
    });
  }
  var L = V(T, 2);
  {
    var F = (H) => {
      Rn(H, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    le(L, (H) => {
      f() && H(F);
    });
  }
  var K = V(L, 2);
  return qe(K, () => i() ?? ft), O(e, B), ue(M);
}
Wn(["change"]);
se(
  Ft,
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
var Cy = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), ky = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), Ey = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Sy = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const Ny = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Md(e, t) {
  ce(t, !0), Le(e, Ny);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = je(), i = Nn(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = it(), l = (M, B) => {
    a(o, (X) => {
      let Q = X.data.parameters;
      return Q[r()][M] = B, { parameters: Q };
    });
  }, c = (M, B) => {
    const X = B.target.value;
    l(M, X);
  }, d = (M) => {
    const B = M.target.value;
    l("name", B);
  }, h = (M) => {
    const B = M.target.checked;
    l("required", B);
  }, f = (M) => {
    const B = M.value;
    l("formType", B);
  }, g = (M) => {
    const B = M.value;
    l("contentType", B);
  };
  let v;
  const p = () => {
    a(o, (M) => {
      let B = M.data.parameters;
      return B.splice(r(), 1), { parameters: [...B] };
    }), v?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(M) {
      n(M), m();
    },
    get index() {
      return r();
    },
    set index(M) {
      r(M), m();
    }
  }, b = Sy(), N = ie(b), x = z(N);
  Je(x, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), I(N);
  var k = V(N, 2), $ = z(k);
  yd($, {
    get checked() {
      return u(s).required;
    },
    onchange: h
  }), I(k);
  var S = V(k, 2), A = z(S);
  return Ot(
    qn(A, {
      placement: "bottom",
      floating: (B) => {
        var X = ky(), Q = z(X), E = V(z(Q));
        {
          let R = /* @__PURE__ */ P(() => u(s).contentType ? [u(s).contentType] : []);
          dt(E, {
            get items() {
              return da;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(R);
            },
            onSelect: g
          });
        }
        I(Q);
        var C = V(Q, 2), _ = V(z(C));
        {
          let R = /* @__PURE__ */ P(() => u(s).formType ? [u(s).formType] : []);
          dt(_, {
            get items() {
              return zm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return u(R);
            },
            onSelect: f
          });
        }
        I(C);
        var T = V(C, 2);
        {
          var D = (R) => {
            var ee = Cy(), q = V(z(ee));
            {
              let ne = /* @__PURE__ */ P(() => u(s).enums?.join(`
`));
              Fe(q, {
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
            I(ee), O(R, ee);
          };
          le(T, (R) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && R(D);
          });
        }
        var L = V(T, 2), F = V(z(L));
        Fe(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            c("formLabel", R);
          },
          get value() {
            return u(s).formLabel;
          }
        }), I(L);
        var K = V(L, 2), H = V(z(K));
        Fe(H, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            c("formDescription", R);
          },
          get value() {
            return u(s).formDescription;
          }
        }), I(K);
        var Y = V(K, 2), W = V(z(Y));
        Fe(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            c("formPlaceholder", R);
          },
          get value() {
            return u(s).formPlaceholder;
          }
        }), I(Y);
        var U = V(Y, 2), j = z(U);
        Ae(j, {
          onclick: p,
          children: (R, ee) => {
            pe();
            var q = ke("删除");
            O(R, q);
          },
          $$slots: { default: !0 }
        }), I(U), I(X), O(B, X);
      },
      children: (B, X) => {
        Ae(B, {
          class: "input-btn-more",
          children: (Q, E) => {
            var C = Ey();
            O(Q, C);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (B) => v = B,
    () => v
  ), I(S), O(e, b), ue(w);
}
se(Md, { parameter: {}, index: {} }, [], [], !0);
var Py = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), $y = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Ty = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Dy = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Hd(e, t) {
  ce(t, !0), Le(e, Dy);
  let n = je(), r = Nn(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = Ty(), s = z(i);
  {
    var a = (c) => {
      var d = Py();
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
    (c, d, h) => {
      Md(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(h);
        }
      });
    },
    (c) => {
      var d = $y();
      O(c, d);
    }
  ), I(i), O(e, i), ue();
}
se(Hd, {}, [], [], !0);
const fo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Cn()), fo(t.children);
}), e), en = () => {
  const { updateNodeData: e } = it();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => fo(s?.children)) : fo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Cn()
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
var Ay = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Oy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Hy = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Ld(e, t) {
  ce(t, !0), Le(e, Hy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return Ft(e, Be(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (l) => {
      var c = Ay();
      O(l, c);
    },
    children: (l, c) => {
      var d = My(), h = ie(d), f = z(h);
      Oe(f, {
        level: 3,
        children: (p, w) => {
          pe();
          var b = ke("输入参数");
          O(p, b);
        },
        $$slots: { default: !0 }
      });
      var g = V(f, 2);
      Ae(g, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (p, w) => {
          var b = Oy();
          O(p, b);
        },
        $$slots: { default: !0 }
      }), I(h);
      var v = V(h, 2);
      Hd(v, {}), O(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(Ld, { data: {} }, [], [], !0);
const Vd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Vd(e, r.source, n));
}, Id = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Id(r.children, t + "." + r.name, n)
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
          children: Id(r, e.id, t)
        };
    }
  }
}, zd = (e = !1) => {
  const t = je(), n = Nn(t), r = /* @__PURE__ */ P(Qt), o = /* @__PURE__ */ P(() => u(r).nodes), i = /* @__PURE__ */ P(() => u(r).edges), s = /* @__PURE__ */ P(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ P(() => {
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
      Vd(d, t, u(i));
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
var Ly = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Vy = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Iy = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const zy = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  ce(t, !0), Le(e, zy), En(() => {
    u(c).refType || v({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7), s = y(t, "showContentType", 7, !1);
  let a = je(), l = Nn(a), c = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = it(), h = (C, _) => {
    d(a, (T) => {
      let D = T.data?.[o()];
      return D[r()] = { ...D[r()], [C]: _ }, { [o()]: D };
    });
  }, f = (C, _) => {
    const T = _.target.value;
    h(C, T);
  }, g = (C) => {
    const _ = C.value;
    h("ref", _);
  }, v = (C) => {
    const _ = C.value;
    h("refType", _);
  }, p = (C) => {
    const _ = C.value;
    h("contentType", _);
  };
  let w;
  const b = () => {
    d(a, (C) => {
      let _ = C.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
    }), w?.hide();
  };
  let N = zd(i());
  var x = {
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
    },
    get showContentType() {
      return s();
    },
    set showContentType(C = !1) {
      s(C), m();
    }
  }, k = Iy(), $ = ie(k), S = z($);
  {
    let C = /* @__PURE__ */ P(() => u(c).nameDisabled === !0);
    Je(S, {
      style: "width: 100%;",
      get value() {
        return u(c).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(C);
      },
      oninput: (_) => f("name", _)
    });
  }
  I($);
  var A = V($, 2), M = z(A);
  {
    var B = (C) => {
      Je(C, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => f("value", _)
      });
    }, X = (C) => {
      var _ = Ne(), T = ie(_);
      {
        var D = (L) => {
          {
            let F = /* @__PURE__ */ P(() => [u(c).ref]);
            dt(L, {
              get items() {
                return N.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(F);
              },
              expandAll: !0,
              onSelect: g
            });
          }
        };
        le(
          T,
          (L) => {
            u(c).refType !== "input" && L(D);
          },
          !0
        );
      }
      O(C, _);
    };
    le(M, (C) => {
      u(c).refType === "fixed" ? C(B) : C(X, !1);
    });
  }
  I(A);
  var Q = V(A, 2), E = z(Q);
  return Ot(
    qn(E, {
      placement: "bottom",
      floating: (_) => {
        var T = Vy(), D = z(T), L = V(z(D));
        {
          let ee = /* @__PURE__ */ P(() => u(c).refType ? [u(c).refType] : []);
          dt(L, {
            get items() {
              return Im;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(ee);
            },
            onSelect: v
          });
        }
        I(D);
        var F = V(D, 2);
        {
          var K = (ee) => {
            var q = Ly(), ne = V(z(q));
            {
              let J = /* @__PURE__ */ P(() => u(c).contentType ? [u(c).contentType] : []);
              dt(ne, {
                get items() {
                  return da;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return u(J);
                },
                onSelect: p
              });
            }
            I(q), O(ee, q);
          };
          le(F, (ee) => {
            s() && ee(K);
          });
        }
        var H = V(F, 2), Y = V(z(H));
        Fe(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ee) => {
            f("defaultValue", ee);
          },
          get value() {
            return u(c).defaultValue;
          }
        }), I(H);
        var W = V(H, 2), U = V(z(W));
        Fe(U, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ee) => {
            f("description", ee);
          },
          get value() {
            return u(c).description;
          }
        }), I(W);
        var j = V(W, 2), R = z(j);
        Ae(R, {
          onclick: b,
          children: (ee, q) => {
            pe();
            var ne = ke("删除");
            O(ee, ne);
          },
          $$slots: { default: !0 }
        }), I(j), I(T), O(_, T);
      },
      children: (_, T) => {
        Do(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => w = _,
    () => w
  ), I(Q), O(e, k), ue(x);
}
se(
  Rd,
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
var Ry = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), By = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Fy = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const Ky = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function _t(e, t) {
  ce(t, !0), Le(e, Ky);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7), i = y(t, "showContentType", 7, !1);
  let s = je(), a = Nn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = Fy(), h = z(d);
  {
    var f = (v) => {
      var p = Ry();
      pe(4), O(v, p);
    };
    le(h, (v) => {
      u(l).length !== 0 && v(f);
    });
  }
  var g = V(h, 2);
  return pt(
    g,
    19,
    () => u(l),
    (v) => v.id,
    (v, p, w) => {
      Rd(v, {
        get parameter() {
          return u(p);
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
    (v) => {
      var p = By(), w = z(p, !0);
      I(p), Ce(() => Re(w, n())), O(v, p);
    }
  ), I(d), O(e, d), ue(c);
}
se(
  _t,
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
var Zy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Yy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const Xy = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Bd(e, t) {
  ce(t, !0), Le(e, Xy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  };
  return Ft(e, Be(
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
        var c = Zy();
        O(l, c);
      },
      children: (l, c) => {
        var d = Wy(), h = ie(d), f = z(h);
        Oe(f, {
          level: 3,
          children: (p, w) => {
            pe();
            var b = ke("输出参数");
            O(p, b);
          },
          $$slots: { default: !0 }
        });
        var g = V(f, 2);
        Ae(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (p, w) => {
            var b = Yy();
            O(p, b);
          },
          $$slots: { default: !0 }
        }), I(h);
        var v = V(h, 2);
        _t(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(Bd, { data: {} }, [], [], !0);
const Ji = (e) => JSON.parse(JSON.stringify(e));
var qy = /* @__PURE__ */ ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), jy = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Gy = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Uy = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Jy = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Fd(e, t) {
  ce(t, !0), Le(e, Jy);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7), i = y(t, "placeholder", 7, "请输入参数值");
  let s = je(), a = Nn(s), l = /* @__PURE__ */ P(() => {
    let E = a?.current?.data?.[o()], C;
    if (E && r().length > 0) {
      let _ = E;
      for (let T = 0; T < r().length; T++) {
        const D = r()[T];
        T == r().length - 1 ? C = _[D] : _ = _[D].children;
      }
    }
    return { ...n(), ...C };
  });
  const { updateNodeData: c } = it(), d = (E, C) => {
    c(s, (_) => {
      const T = _.data?.[o()];
      if (T && r().length > 0) {
        let D = T;
        for (let L = 0; L < r().length; L++) {
          const F = r()[L];
          L == r().length - 1 ? D[F] = { ...D[F], [E]: C } : D = D[F].children;
        }
      }
      return { [o()]: [...Ji(T)] };
    });
  }, h = (E, C) => {
    const _ = C.target.value;
    d(E, _);
  }, f = (E) => {
    const C = E.value;
    d("dataType", C);
  };
  let g;
  const v = () => {
    c(s, (E) => {
      let C = E.data?.[o()];
      if (C && r().length > 0) {
        let _ = C;
        for (let T = 0; T < r().length; T++) {
          const D = r()[T];
          T == r().length - 1 ? _.splice(D, 1) : _ = _[D].children;
        }
      }
      return { [o()]: [...Ji(C)] };
    }), g?.hide();
  }, p = () => {
    c(s, (E) => {
      let C = E.data?.[o()];
      if (C && r().length > 0) {
        let _ = C;
        for (let T = 0; T < r().length; T++) {
          const D = r()[T];
          T == r().length - 1 ? _[D].children ? _[D].children.push({ id: Cn(), name: "newParam", dataType: "String" }) : _[D].children = [{ id: Cn(), name: "newParam", dataType: "String" }] : _ = _[D].children;
        }
      }
      return { [o()]: [...Ji(C)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(E) {
      n(E), m();
    },
    get position() {
      return r();
    },
    set position(E) {
      r(E), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(E) {
      o(E), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(E = "请输入参数值") {
      i(E), m();
    }
  }, b = Uy(), N = ie(b), x = z(N);
  {
    var k = (E) => {
      var C = Ne(), _ = ie(C);
      pt(_, 17, r, Ar, (T, D) => {
        pe();
        var L = ke(" ");
        O(T, L);
      }), O(E, C);
    };
    le(x, (E) => {
      r().length > 1 && E(k);
    });
  }
  var $ = V(x, 2);
  {
    let E = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
    Je($, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (C) => {
        h("name", C);
      },
      get disabled() {
        return u(E);
      }
    });
  }
  I(N);
  var S = V(N, 2), A = z(S);
  {
    let E = /* @__PURE__ */ P(() => u(l).dataTypeItems || Vm), C = /* @__PURE__ */ P(() => u(l).dataType ? [u(l).dataType] : []), _ = /* @__PURE__ */ P(() => u(l).dataTypeDisabled === !0);
    dt(A, {
      get items() {
        return u(E);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return u(C);
      },
      get disabled() {
        return u(_);
      },
      onSelect: f
    });
  }
  var M = V(A, 2);
  {
    var B = (E) => {
      Ae(E, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: p,
        children: (C, _) => {
          var T = qy();
          O(C, T);
        },
        $$slots: { default: !0 }
      });
    };
    le(M, (E) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && E(B);
    });
  }
  I(S);
  var X = V(S, 2), Q = z(X);
  return Ot(
    qn(Q, {
      placement: "bottom",
      floating: (C) => {
        var _ = Gy(), T = z(_), D = V(z(T));
        {
          let Y = /* @__PURE__ */ P(() => u(l).defaultValue || "");
          Fe(D, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return u(Y);
            },
            onchange: (W) => {
              h("defaultValue", W);
            }
          });
        }
        I(T);
        var L = V(T, 2), F = V(z(L));
        {
          let Y = /* @__PURE__ */ P(() => u(l).description || "");
          Fe(F, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return u(Y);
            },
            onchange: (W) => {
              h("description", W);
            }
          });
        }
        I(L);
        var K = V(L, 2);
        {
          var H = (Y) => {
            var W = jy(), U = z(W);
            Ae(U, {
              onclick: v,
              children: (j, R) => {
                pe();
                var ee = ke("删除");
                O(j, ee);
              },
              $$slots: { default: !0 }
            }), I(W), O(Y, W);
          };
          le(K, (Y) => {
            u(l).deleteDisabled !== !0 && Y(H);
          });
        }
        I(_), O(C, _);
      },
      children: (C, _) => {
        Do(C, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => g = C,
    () => g
  ), I(X), O(e, b), ue(w);
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
var Qy = /* @__PURE__ */ te("<!> <!>", 1), ew = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), tw = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), nw = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const rw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function $n(e, t) {
  ce(t, !0), Le(e, rw);
  const n = (v, p = ft, w = ft) => {
    var b = Ne(), N = ie(b);
    pt(
      N,
      19,
      p,
      (x) => `${x.id}_${x.children ? x.children.length : 0}`,
      (x, k, $) => {
        var S = Qy(), A = ie(S);
        {
          let X = /* @__PURE__ */ P(() => [...w(), u($)]);
          Fd(A, {
            get parameter() {
              return u(k);
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
        var M = V(A, 2);
        {
          var B = (X) => {
            {
              let Q = /* @__PURE__ */ P(() => [...w(), u($)]);
              n(X, () => u(k).children, () => u(Q));
            }
          };
          le(M, (X) => {
            u(k).children && X(B);
          });
        }
        O(x, S);
      },
      (x) => {
        var k = Ne(), $ = ie(k);
        {
          var S = (A) => {
            var M = ew(), B = z(M, !0);
            I(M), Ce(() => Re(B, r())), O(A, M);
          };
          le($, (A) => {
            w().length === 0 && A(S);
          });
        }
        O(x, k);
      }
    ), O(v, b);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs"), i = y(t, "placeholder", 7, "请输入参数名称");
  let s = je(), a = Nn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = nw(), h = z(d);
  {
    var f = (v) => {
      var p = tw();
      pe(4), O(v, p);
    };
    le(h, (v) => {
      u(l).length !== 0 && v(f);
    });
  }
  var g = V(h, 2);
  return n(g, () => u(l) || [], () => []), I(d), O(e, d), ue(c);
}
se($n, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var ow = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), iw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), lw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), cw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), uw = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), dw = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const fw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Kd(e, t) {
  ce(t, !0), Le(e, fw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en(), s = Fn();
  let a = /* @__PURE__ */ $e(It([]));
  En(async () => {
    const h = await s.provider?.llm?.();
    u(a).push(...h || []);
  });
  const { updateNodeData: l } = it(), c = (h) => {
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
      n(h), m();
    }
  };
  return Ft(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var g = ow();
        O(f, g);
      },
      children: (f, g) => {
        var v = dw(), p = ie(v), w = z(p);
        Oe(w, {
          level: 3,
          children: (K, H) => {
            pe();
            var Y = ke("输入参数");
            O(K, Y);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 2);
        Ae(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (K, H) => {
            var Y = iw();
            O(K, Y);
          },
          $$slots: { default: !0 }
        }), I(p);
        var N = V(p, 2);
        _t(N, {});
        var x = V(N, 2), k = z(x);
        Oe(k, {
          level: 3,
          children: (K, H) => {
            pe();
            var Y = ke("图片识别");
            O(K, Y);
          },
          $$slots: { default: !0 }
        });
        var $ = V(k, 2);
        Ae($, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (K, H) => {
            var Y = sw();
            O(K, Y);
          },
          $$slots: { default: !0 }
        }), I(x);
        var S = V(x, 2);
        _t(S, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var A = V(S, 2);
        Oe(A, {
          level: 3,
          mt: "10px",
          children: (K, H) => {
            pe();
            var Y = ke("模型设置");
            O(K, Y);
          },
          $$slots: { default: !0 }
        });
        var M = V(A, 4), B = z(M);
        {
          let K = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          dt(B, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (H) => {
              const Y = H.value;
              l(o, () => ({ llmId: Y }));
            },
            get value() {
              return u(K);
            }
          });
        }
        var X = V(B, 2);
        qn(X, {
          placement: "bottom",
          floating: (H) => {
            var Y = uw(), W = V(z(Y), 2), U = z(W), j = z(U), R = z(j);
            I(j);
            var ee = V(j, 2);
            tr(ee), ee.__input = [aw, l, o], I(U), I(W);
            var q = V(W, 2), ne = z(q), J = z(ne), we = z(J);
            I(J);
            var oe = V(J, 2);
            tr(oe), oe.__input = [lw, l, o], I(ne), I(q);
            var ae = V(q, 2), re = z(ae), de = z(re), ge = z(de);
            I(de);
            var _e = V(de, 2);
            tr(_e), _e.__input = [cw, l, o], I(re), I(ae), I(Y), Ce(() => {
              Re(R, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), Bo(ee, n().temperature ?? 0.7), Re(we, `Top P: ${n().topP ?? 0.9 ?? ""}`), Bo(oe, n().topP ?? 0.9), Re(ge, `Top K: ${n().topK ?? 50 ?? ""}`), Bo(_e, n().topK ?? 50);
            }), O(H, Y);
          },
          children: (H, Y) => {
            Do(H, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), I(M);
        var Q = V(M, 4), E = z(Q);
        {
          let K = /* @__PURE__ */ P(() => n().systemPrompt || "");
          Fe(E, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return u(K);
            },
            oninput: (H) => {
              l(o, { systemPrompt: H.target.value });
            }
          });
        }
        I(Q);
        var C = V(Q, 4), _ = z(C);
        {
          let K = /* @__PURE__ */ P(() => n().userPrompt || "");
          Fe(_, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return u(K);
            },
            oninput: (H) => {
              l(o, { userPrompt: H.target.value });
            }
          });
        }
        I(C);
        var T = V(C, 2), D = z(T);
        Oe(D, {
          level: 3,
          children: (K, H) => {
            pe();
            var Y = ke("输出参数");
            O(K, Y);
          },
          $$slots: { default: !0 }
        });
        var L = V(D, 2);
        {
          let K = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          dt(L, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (H) => {
              c(H.value);
            },
            get value() {
              return u(K);
            }
          });
        }
        I(T);
        var F = V(T, 2);
        $n(F, {}), O(f, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
Wn(["input"]);
se(Kd, { data: {} }, [], [], !0);
var hw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), gw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const mw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ce(t, !0), Le(e, mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  En(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = je(), { addParameter: i } = en(), { updateNodeData: s } = it(), a = [
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
  return Ft(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = hw();
        O(d, h);
      },
      children: (d, h) => {
        var f = pw(), g = ie(f), v = z(g);
        Oe(v, {
          level: 3,
          children: (X, Q) => {
            pe();
            var E = ke("输入参数");
            O(X, E);
          },
          $$slots: { default: !0 }
        });
        var p = V(v, 2);
        Ae(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (X, Q) => {
            var E = gw();
            O(X, E);
          },
          $$slots: { default: !0 }
        }), I(g);
        var w = V(g, 2);
        _t(w, {});
        var b = V(w, 2);
        Oe(b, {
          level: 3,
          mt: "10px",
          children: (X, Q) => {
            pe();
            var E = ke("代码");
            O(X, E);
          },
          $$slots: { default: !0 }
        });
        var N = V(b, 4), x = z(N);
        {
          let X = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          dt(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (Q) => {
              const E = Q.value;
              s(o, () => ({ engine: E }));
            },
            get value() {
              return u(X);
            }
          });
        }
        I(N);
        var k = V(N, 4), $ = z(k);
        {
          let X = /* @__PURE__ */ P(() => n().code || "");
          Fe($, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (Q) => {
              s(o, () => ({ code: Q.target.value }));
            },
            get value() {
              return u(X);
            }
          });
        }
        I(k);
        var S = V(k, 2), A = z(S);
        Oe(A, {
          level: 3,
          mt: "10px",
          children: (X, Q) => {
            pe();
            var E = ke("输出参数");
            O(X, E);
          },
          $$slots: { default: !0 }
        });
        var M = V(A, 2);
        Ae(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (X, Q) => {
            var E = vw();
            O(X, E);
          },
          $$slots: { default: !0 }
        }), I(S);
        var B = V(S, 2);
        $n(B, {}), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Zd, { data: {} }, [], [], !0);
var yw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), ww = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const xw = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  ce(t, !0), Le(e, xw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en(), { updateNodeData: s } = it();
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
  return Ft(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = yw();
        O(c, d);
      },
      children: (c, d) => {
        var h = _w(), f = ie(h), g = z(f);
        Oe(g, {
          level: 3,
          children: (S, A) => {
            pe();
            var M = ke("输入参数");
            O(S, M);
          },
          $$slots: { default: !0 }
        });
        var v = V(g, 2);
        Ae(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, A) => {
            var M = ww();
            O(S, M);
          },
          $$slots: { default: !0 }
        }), I(f);
        var p = V(f, 2);
        _t(p, {});
        var w = V(p, 2);
        Oe(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (S, A) => {
            pe();
            var M = ke("模板内容");
            O(S, M);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 2), N = z(b);
        {
          let S = /* @__PURE__ */ P(() => n().template || "");
          Fe(N, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ template: A.target.value }));
            },
            get value() {
              return u(S);
            }
          });
        }
        I(b);
        var x = V(b, 2), k = z(x);
        Oe(k, {
          level: 3,
          mt: "10px",
          children: (S, A) => {
            pe();
            var M = ke("输出参数");
            O(S, M);
          },
          $$slots: { default: !0 }
        }), I(x);
        var $ = V(x, 2);
        $n($, {}), O(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Yd, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Cw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Sw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Tw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Dw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Mw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Wd(e, t) {
  ce(t, !0), Le(e, Mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  En(() => {
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
  ], i = je(), { addParameter: s } = en(), { updateNodeData: a } = it();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  };
  return Ft(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = bw();
        O(d, h);
      },
      children: (d, h) => {
        var f = Ow(), g = ie(f), v = z(g);
        Oe(v, {
          level: 3,
          children: (R, ee) => {
            pe();
            var q = ke("输入参数");
            O(R, q);
          },
          $$slots: { default: !0 }
        });
        var p = V(v, 2);
        Ae(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (R, ee) => {
            var q = Cw();
            O(R, q);
          },
          $$slots: { default: !0 }
        }), I(g);
        var w = V(g, 2);
        _t(w, {});
        var b = V(w, 2);
        Oe(b, {
          level: 3,
          mt: "10px",
          children: (R, ee) => {
            pe();
            var q = ke("URL 地址");
            O(R, q);
          },
          $$slots: { default: !0 }
        });
        var N = V(b, 2), x = z(N), k = z(x);
        {
          let R = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          dt(k, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (ee) => {
              const q = ee.value;
              a(i, () => ({ method: q }));
            },
            get value() {
              return u(R);
            }
          });
        }
        I(x);
        var $ = V(x, 2), S = z($);
        {
          let R = /* @__PURE__ */ P(() => n().url || "");
          Je(S, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (ee) => {
              a(i, () => ({ url: ee.target.value }));
            },
            get value() {
              return u(R);
            }
          });
        }
        I($), I(N);
        var A = V(N, 2), M = z(A);
        Oe(M, {
          level: 3,
          children: (R, ee) => {
            pe();
            var q = ke("Http 头信息");
            O(R, q);
          },
          $$slots: { default: !0 }
        });
        var B = V(M, 2);
        Ae(B, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (R, ee) => {
            var q = kw();
            O(R, q);
          },
          $$slots: { default: !0 }
        }), I(A);
        var X = V(A, 2);
        _t(X, { dataKeyName: "headers" });
        var Q = V(X, 2);
        {
          var E = (R) => {
            var ee = Ew(), q = ie(ee);
            Oe(q, {
              level: 3,
              mt: "10px",
              children: (Pe, Z) => {
                pe();
                var Ye = ke("Body");
                O(Pe, Ye);
              },
              $$slots: { default: !0 }
            });
            var ne = V(q, 2), J = z(ne), we = z(J);
            {
              let Pe = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              Je(we, {
                type: "radio",
                name: "bodyType",
                value: "",
                get checked() {
                  return u(Pe);
                },
                onchange: (Z) => {
                  Z.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            pe(), I(J);
            var oe = V(J, 2), ae = z(oe);
            {
              let Pe = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              Je(ae, {
                type: "radio",
                name: "bodyType",
                value: "form-data",
                get checked() {
                  return u(Pe);
                },
                onchange: (Z) => {
                  Z.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            pe(), I(oe);
            var re = V(oe, 2), de = z(re);
            {
              let Pe = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              Je(de, {
                type: "radio",
                name: "bodyType",
                value: "x-www-form-urlencoded",
                get checked() {
                  return u(Pe);
                },
                onchange: (Z) => {
                  Z.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            pe(), I(re);
            var ge = V(re, 2), _e = z(ge);
            {
              let Pe = /* @__PURE__ */ P(() => n().bodyType === "json");
              Je(_e, {
                type: "radio",
                name: "bodyType",
                value: "json",
                get checked() {
                  return u(Pe);
                },
                onchange: (Z) => {
                  Z.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            pe(), I(ge);
            var fe = V(ge, 2), be = z(fe);
            {
              let Pe = /* @__PURE__ */ P(() => n().bodyType === "raw");
              Je(be, {
                type: "radio",
                name: "bodyType",
                value: "raw",
                get checked() {
                  return u(Pe);
                },
                onchange: (Z) => {
                  Z.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            pe(), I(fe), I(ne), O(R, ee);
          };
          le(Q, (R) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && R(E);
          });
        }
        var C = V(Q, 2);
        {
          var _ = (R) => {
            var ee = Nw(), q = ie(ee), ne = z(q);
            Oe(ne, {
              level: 3,
              children: (oe, ae) => {
                pe();
                var re = ke("参数");
                O(oe, re);
              },
              $$slots: { default: !0 }
            });
            var J = V(ne, 2);
            Ae(J, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, ae) => {
                var re = Sw();
                O(oe, re);
              },
              $$slots: { default: !0 }
            }), I(q);
            var we = V(q, 2);
            _t(we, { dataKeyName: "formData" }), O(R, ee);
          };
          le(C, (R) => {
            n().bodyType === "form-data" && R(_);
          });
        }
        var T = V(C, 2);
        {
          var D = (R) => {
            var ee = $w(), q = ie(ee), ne = z(q);
            Oe(ne, {
              level: 3,
              children: (oe, ae) => {
                pe();
                var re = ke("Body 参数");
                O(oe, re);
              },
              $$slots: { default: !0 }
            });
            var J = V(ne, 2);
            Ae(J, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, ae) => {
                var re = Pw();
                O(oe, re);
              },
              $$slots: { default: !0 }
            }), I(q);
            var we = V(q, 2);
            _t(we, { dataKeyName: "formUrlencoded" }), O(R, ee);
          };
          le(T, (R) => {
            n().bodyType === "x-www-form-urlencoded" && R(D);
          });
        }
        var L = V(T, 2);
        {
          var F = (R) => {
            var ee = Tw(), q = z(ee);
            Fe(q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), I(ee), O(R, ee);
          };
          le(L, (R) => {
            n().bodyType === "json" && R(F);
          });
        }
        var K = V(L, 2);
        {
          var H = (R) => {
            var ee = Dw(), q = z(ee);
            Fe(q, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), I(ee), O(R, ee);
          };
          le(K, (R) => {
            n().bodyType === "raw" && R(H);
          });
        }
        var Y = V(K, 2), W = z(Y);
        Oe(W, {
          level: 3,
          mt: "10px",
          children: (R, ee) => {
            pe();
            var q = ke("输出参数");
            O(R, q);
          },
          $$slots: { default: !0 }
        });
        var U = V(W, 2);
        Ae(U, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (R, ee) => {
            var q = Aw();
            O(R, q);
          },
          $$slots: { default: !0 }
        }), I(Y);
        var j = V(Y, 2);
        $n(j, {}), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Wd, { data: {} }, [], [], !0);
var Hw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Lw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Iw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ce(t, !0), Le(e, Iw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en(), s = Fn();
  let a = /* @__PURE__ */ $e(It([]));
  En(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    }
  };
  return Ft(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = Hw();
        O(h, f);
      },
      children: (h, f) => {
        var g = Vw(), v = ie(g), p = z(v);
        Oe(p, {
          level: 3,
          children: (E, C) => {
            pe();
            var _ = ke("输入参数");
            O(E, _);
          },
          $$slots: { default: !0 }
        });
        var w = V(p, 2);
        Ae(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, C) => {
            var _ = Lw();
            O(E, _);
          },
          $$slots: { default: !0 }
        }), I(v);
        var b = V(v, 2);
        _t(b, {});
        var N = V(b, 2);
        Oe(N, {
          level: 3,
          mt: "10px",
          children: (E, C) => {
            pe();
            var _ = ke("知识库设置");
            O(E, _);
          },
          $$slots: { default: !0 }
        });
        var x = V(N, 4), k = z(x);
        {
          let E = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          dt(k, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (C) => {
              const _ = C.value;
              l(o, () => ({ knowledgeId: _ }));
            },
            get value() {
              return u(E);
            }
          });
        }
        I(x);
        var $ = V(x, 4), S = z($);
        Je(S, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (E) => {
            const C = E.target.value;
            l(o, () => ({ keyword: C }));
          }
        }), I($);
        var A = V($, 4), M = z(A);
        {
          let E = /* @__PURE__ */ P(() => n().limit || "");
          Je(M, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (C) => {
              const _ = C.target.value;
              l(o, () => ({ limit: _ }));
            },
            get value() {
              return u(E);
            }
          });
        }
        I(A);
        var B = V(A, 2), X = z(B);
        Oe(X, {
          level: 3,
          mt: "10px",
          children: (E, C) => {
            pe();
            var _ = ke("输出参数");
            O(E, _);
          },
          $$slots: { default: !0 }
        }), I(B);
        var Q = V(B, 2);
        $n(Q, {}), O(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
se(Xd, { data: {} }, [], [], !0);
var zw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Rw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Fw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  ce(t, !0), Le(e, Fw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en(), s = Fn();
  let a = /* @__PURE__ */ $e(It([]));
  En(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    }
  };
  return Ft(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = zw();
        O(h, f);
      },
      children: (h, f) => {
        var g = Bw(), v = ie(g), p = z(v);
        Oe(p, {
          level: 3,
          children: (E, C) => {
            pe();
            var _ = ke("输入参数");
            O(E, _);
          },
          $$slots: { default: !0 }
        });
        var w = V(p, 2);
        Ae(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (E, C) => {
            var _ = Rw();
            O(E, _);
          },
          $$slots: { default: !0 }
        }), I(v);
        var b = V(v, 2);
        _t(b, {});
        var N = V(b, 2);
        Oe(N, {
          level: 3,
          mt: "10px",
          children: (E, C) => {
            pe();
            var _ = ke("搜索引擎设置");
            O(E, _);
          },
          $$slots: { default: !0 }
        });
        var x = V(N, 4), k = z(x);
        {
          let E = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          dt(k, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (C) => {
              const _ = C.value;
              l(o, () => ({ engine: _ }));
            },
            get value() {
              return u(E);
            }
          });
        }
        I(x);
        var $ = V(x, 4), S = z($);
        Je(S, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (E) => {
            const C = E.target.value;
            l(o, () => ({ keyword: C }));
          }
        }), I($);
        var A = V($, 4), M = z(A);
        Je(M, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (E) => {
            const C = E.target.value;
            l(o, () => ({ limit: C }));
          }
        }), I(A);
        var B = V(A, 2), X = z(B);
        Oe(X, {
          level: 3,
          mt: "10px",
          children: (E, C) => {
            pe();
            var _ = ke("输出参数");
            O(E, _);
          },
          $$slots: { default: !0 }
        }), I(B);
        var Q = V(B, 2);
        $n(Q, {}), O(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
se(qd, { data: {} }, [], [], !0);
var Kw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Zw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yw = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Ww = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function jd(e, t) {
  ce(t, !0), Le(e, Ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en();
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
  return Ft(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Kw();
        O(c, d);
      },
      handle: (c) => {
        Rn(c, {
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
        var h = Yw(), f = ie(h), g = z(f);
        Oe(g, {
          level: 3,
          children: (x, k) => {
            pe();
            var $ = ke("循环变量");
            O(x, $);
          },
          $$slots: { default: !0 }
        }), I(f);
        var v = V(f, 2);
        _t(v, { dataKeyName: "loopVars" });
        var p = V(v, 2), w = z(p);
        Oe(w, {
          level: 3,
          children: (x, k) => {
            pe();
            var $ = ke("输出参数");
            O(x, $);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 2);
        Ae(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (x, k) => {
            var $ = Zw();
            O(x, $);
          },
          $$slots: { default: !0 }
        }), I(p);
        var N = V(p, 2);
        _t(N, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(c, h);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(jd, { data: {} }, [], [], !0);
var Xw = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), qw = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const jw = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Gd(e, t) {
  ce(t, !0), Le(e, jw);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = je(), a = Nn(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = it(), d = (E, C) => {
    c(s, (_) => {
      let T = _.data?.[o()];
      return T[r()] = { ...T[r()], [E]: C }, { [o()]: T };
    });
  }, h = (E, C) => {
    const _ = C.target.value;
    d(E, _);
  }, f = (E) => {
    const C = E.value;
    d("ref", C);
  }, g = (E) => {
    const C = E.value;
    d("formType", C);
  }, v = (E) => {
    const C = E.value;
    d("contentType", C);
  };
  let p;
  const w = () => {
    c(s, (E) => {
      let C = E.data?.[o()];
      return C.splice(r(), 1), { [o()]: [...C] };
    }), p?.hide();
  };
  let b = zd(i());
  var N = {
    get parameter() {
      return n();
    },
    set parameter(E) {
      n(E), m();
    },
    get index() {
      return r();
    },
    set index(E) {
      r(E), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(E) {
      o(E), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(E) {
      i(E), m();
    }
  }, x = qw(), k = ie(x), $ = z(k);
  {
    let E = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
    Je($, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(E);
      },
      oninput: (C) => h("name", C)
    });
  }
  I(k);
  var S = V(k, 2), A = z(S);
  {
    var M = (E) => {
      Je(E, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (C) => h("value", C)
      });
    }, B = (E) => {
      var C = Ne(), _ = ie(C);
      {
        var T = (D) => {
          {
            let L = /* @__PURE__ */ P(() => [u(l).ref]);
            dt(D, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(L);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        le(
          _,
          (D) => {
            u(l).refType !== "input" && D(T);
          },
          !0
        );
      }
      O(E, C);
    };
    le(A, (E) => {
      u(l).refType === "fixed" ? E(M) : E(B, !1);
    });
  }
  I(S);
  var X = V(S, 2), Q = z(X);
  return Ot(
    qn(Q, {
      placement: "bottom",
      floating: (C) => {
        var _ = Xw(), T = z(_), D = V(z(T));
        {
          let R = /* @__PURE__ */ P(() => u(l).contentType ? [u(l).contentType] : []);
          dt(D, {
            get items() {
              return da;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(R);
            },
            onSelect: v
          });
        }
        I(T);
        var L = V(T, 2), F = V(z(L));
        {
          let R = /* @__PURE__ */ P(() => u(l).formType ? [u(l).formType] : []);
          dt(F, {
            get items() {
              return Rm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return u(R);
            },
            onSelect: g
          });
        }
        I(L);
        var K = V(L, 2), H = V(z(K));
        Fe(H, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            h("formLabel", R);
          },
          get value() {
            return u(l).formLabel;
          }
        }), I(K);
        var Y = V(K, 2), W = V(z(Y));
        Fe(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            h("formDescription", R);
          },
          get value() {
            return u(l).formDescription;
          }
        }), I(Y);
        var U = V(Y, 2), j = z(U);
        Ae(j, {
          onclick: w,
          children: (R, ee) => {
            pe();
            var q = ke("删除");
            O(R, q);
          },
          $$slots: { default: !0 }
        }), I(U), I(_), O(C, _);
      },
      children: (C, _) => {
        Do(C, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => p = C,
    () => p
  ), I(X), O(e, x), ue(N);
}
se(
  Gd,
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
var Gw = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Uw = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Jw = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Qw = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function Ud(e, t) {
  ce(t, !0), Le(e, Qw);
  const n = y(t, "noneParameterText", 7, "无确认数据"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = je(), s = Nn(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
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
  }, c = Jw(), d = z(c);
  {
    var h = (g) => {
      var v = Gw();
      pe(4), O(g, v);
    };
    le(d, (g) => {
      u(a).length !== 0 && g(h);
    });
  }
  var f = V(d, 2);
  return pt(
    f,
    19,
    () => u(a),
    (g) => g.id,
    (g, v, p) => {
      Gd(g, {
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
    (g) => {
      var v = Uw(), p = z(v, !0);
      I(v), Ce(() => Re(p, n())), O(g, v);
    }
  ), I(c), O(e, c), ue(l);
}
se(Ud, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const ks = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!ks(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !ks(e[s], t[s])) return !1;
    return !0;
  }
};
var e_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), t_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), n_ = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const r_ = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  ce(t, !0), Le(e, r_);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en(), { updateNodeData: s } = it();
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
      ks(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return Ft(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = e_();
        O(c, d);
      },
      children: (c, d) => {
        var h = n_(), f = ie(h), g = z(f);
        Oe(g, {
          level: 3,
          children: (S, A) => {
            pe();
            var M = ke("确认数据");
            O(S, M);
          },
          $$slots: { default: !0 }
        });
        var v = V(g, 2);
        Ae(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (S, A) => {
            var M = t_();
            O(S, M);
          },
          $$slots: { default: !0 }
        }), I(f);
        var p = V(f, 2);
        Ud(p, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = V(p, 2);
        Oe(w, {
          level: 3,
          mt: "10px",
          children: (S, A) => {
            pe();
            var M = ke("确认消息");
            O(S, M);
          },
          $$slots: { default: !0 }
        });
        var b = V(w, 4), N = z(b);
        {
          let S = /* @__PURE__ */ P(() => n().message || "");
          Fe(N, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ message: A.target.value }));
            },
            get value() {
              return u(S);
            }
          });
        }
        I(b);
        var x = V(b, 2), k = z(x);
        Oe(k, {
          level: 3,
          mt: "10px",
          children: (S, A) => {
            pe();
            var M = ke("输出参数");
            O(S, M);
          },
          $$slots: { default: !0 }
        }), I(x);
        var $ = V(x, 2);
        $n($, { placeholder: "" }), O(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Jd, { data: {} }, [], [], !0);
const o_ = {
  startNode: Ld,
  codeNode: Zd,
  confirmNode: Jd,
  llmNode: Kd,
  templateNode: Yd,
  httpNode: Wd,
  knowledgeNode: Xd,
  searchEngineNode: qd,
  loopNode: jd,
  endNode: Bd
};
var i_ = /* @__PURE__ */ te("<!> ", 1);
function Es(e, t) {
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
  return Ae(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (c, d) => {
      var h = i_(), f = ie(h);
      Ws(f, n);
      var g = V(f);
      Ce(() => Re(g, ` ${r() ?? ""}`)), O(c, h);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se(Es, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var s_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), a_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), l_ = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Qd(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ $e("base"), r = /* @__PURE__ */ $e("show");
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
  ], s = [], a = Fn(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((N, x) => (l[N].sortNo || 0) - (l[x].sortNo || 0));
    for (let N of b)
      l[N].group === "base" ? o.push({ type: N, ...l[N] }) : s.push({
        icon: l[N].icon,
        title: l[N].title,
        type: N
      });
    o.sort((N, x) => (N.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let N of b)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === N) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var c = l_(), d = z(c), h = z(d), f = z(h);
  _d(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      G(n, b.value.toString(), !0);
    }
  }), I(h);
  var g = V(h, 2), v = z(g);
  pt(v, 21, () => o, Ar, (b, N) => {
    Es(b, Be(() => u(N)));
  }), I(v);
  var p = V(v, 2);
  pt(p, 21, () => s, Ar, (b, N) => {
    Es(b, Be(() => u(N)));
  }), I(p), I(g), I(d);
  var w = V(d, 2);
  Ae(w, {
    onclick: () => {
      G(r, u(r) ? "" : "show", !0);
    },
    children: (b, N) => {
      var x = Ne(), k = ie(x);
      {
        var $ = (A) => {
          var M = s_();
          O(A, M);
        }, S = (A) => {
          var M = a_();
          O(A, M);
        };
        le(k, (A) => {
          u(r) === "show" ? A($) : A(S, !1);
        });
      }
      O(b, x);
    },
    $$slots: { default: !0 }
  }), I(c), Ce(() => {
    Nt(c, 1, `tf-toolbar ${u(r) ?? ""}`), ht(v, `display: ${u(n) === "base" ? "flex" : "none"}`), ht(p, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), O(e, c), ue();
}
se(Qd, {}, [], [], !0);
const c_ = () => ({ getNode: (t) => Me.getNode(t) }), u_ = () => ({ ensureParentInNodesBefore: (t, n) => {
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
} }), d_ = () => ({ getEdgesByTarget: (t) => Me.getEdges().filter((r) => r.target === t) });
var f_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), h_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), g_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), v_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), p_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), m_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), y_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), w_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), __ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), x_ = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const b_ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function ef(e, t) {
  ce(t, !0), Le(e, b_);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = je(), { addParameter: i } = en(), s = it(), { updateNodeData: a } = s, l = (b) => {
    a(o, b);
  }, c = (b, N) => {
    l({ [b]: N.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), g = Fn().customNodes[t.type];
  g.render?.(h, d, s);
  const v = g.forms;
  let p;
  Xe(() => {
    n().expand && p && p.append(h);
  }), Xe(() => {
    n() && g.onUpdate?.(h, { ...d, data: n() });
  }), Xe(() => {
    !n().parameters && g.parameters && l({
      parameters: fo(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), Xe(() => {
    !n().outputDefs && g.outputDefs && l({
      outputDefs: fo(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(b) {
      n(b), m();
    }
  };
  {
    const b = (x) => {
      var k = Ne(), $ = ie(k);
      Ws($, () => g.icon), O(x, k);
    };
    let N = /* @__PURE__ */ P(() => ({ ...n(), description: g.description }));
    Ft(e, Be(
      {
        get data() {
          return u(N);
        }
      },
      () => r,
      {
        icon: b,
        children: (x, k) => {
          var $ = x_(), S = ie($);
          {
            var A = (C) => {
              var _ = h_(), T = ie(_), D = z(T);
              Oe(D, {
                level: 3,
                children: (H, Y) => {
                  pe();
                  var W = ke("输入参数");
                  O(H, W);
                },
                $$slots: { default: !0 }
              });
              var L = V(D, 2);
              {
                var F = (H) => {
                  Ae(H, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (Y, W) => {
                      var U = f_();
                      O(Y, U);
                    },
                    $$slots: { default: !0 }
                  });
                };
                le(L, (H) => {
                  g.parametersAddEnable !== !1 && H(F);
                });
              }
              I(T);
              var K = V(T, 2);
              _t(K, {}), O(C, _);
            };
            le(S, (C) => {
              g.parametersEnable !== !1 && C(A);
            });
          }
          var M = V(S, 2);
          {
            var B = (C) => {
              var _ = Ne(), T = ie(_);
              pt(T, 17, () => v, Ar, (D, L) => {
                var F = Ne(), K = ie(F);
                {
                  var H = (W) => {
                    var U = g_(), j = ie(U), R = z(j, !0);
                    I(j);
                    var ee = V(j, 2), q = z(ee);
                    {
                      let ne = /* @__PURE__ */ P(() => n()[u(L).name] || u(L).defaultValue);
                      Je(q, Be(
                        {
                          get placeholder() {
                            return u(L).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(ne);
                          }
                        },
                        () => u(L).attrs,
                        {
                          onchange: (J) => {
                            c(u(L).name, J);
                          }
                        }
                      ));
                    }
                    I(ee), Ce(() => Re(R, u(L).label)), O(W, U);
                  }, Y = (W) => {
                    var U = Ne(), j = ie(U);
                    {
                      var R = (q) => {
                        var ne = v_(), J = ie(ne), we = z(J, !0);
                        I(J);
                        var oe = V(J, 2), ae = z(oe);
                        {
                          let re = /* @__PURE__ */ P(() => n()[u(L).name] || u(L).defaultValue);
                          Fe(ae, Be(
                            {
                              rows: 3,
                              get placeholder() {
                                return u(L).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return u(re);
                              }
                            },
                            () => u(L).attrs,
                            {
                              onchange: (de) => {
                                c(u(L).name, de);
                              }
                            }
                          ));
                        }
                        I(oe), Ce(() => Re(we, u(L).label)), O(q, ne);
                      }, ee = (q) => {
                        var ne = Ne(), J = ie(ne);
                        {
                          var we = (ae) => {
                            var re = p_(), de = ie(re), ge = z(de, !0);
                            I(de);
                            var _e = V(de, 2), fe = z(_e), be = z(fe), Pe = z(be);
                            I(be);
                            var Z = V(be, 2), Ye = (De) => l({ [u(L).name]: parseFloat(De.target.value) });
                            nt(
                              Z,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...u(L).attrs,
                                value: n()[u(L).name] ?? u(L).defaultValue,
                                oninput: Ye
                              }),
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), I(fe), I(_e), Ce(() => {
                              Re(ge, u(L).label), Re(Pe, `${u(L).description ?? ""}: ${n()[u(L).name] ?? u(L).defaultValue ?? ""}`);
                            }), O(ae, re);
                          }, oe = (ae) => {
                            var re = Ne(), de = ie(re);
                            {
                              var ge = (fe) => {
                                var be = m_(), Pe = ie(be), Z = z(Pe, !0);
                                I(Pe);
                                var Ye = V(Pe, 2), De = z(Ye);
                                {
                                  let He = /* @__PURE__ */ P(() => u(L).options || []), Ve = /* @__PURE__ */ P(() => n()[u(L).name] ? [n()[u(L).name]] : [u(L).defaultValue]);
                                  dt(De, {
                                    get items() {
                                      return u(He);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(L).placeholder;
                                    },
                                    onSelect: (st) => {
                                      const at = st.value;
                                      l({ [u(L).name]: at });
                                    },
                                    get value() {
                                      return u(Ve);
                                    }
                                  });
                                }
                                I(Ye), Ce(() => Re(Z, u(L).label)), O(fe, be);
                              }, _e = (fe) => {
                                var be = Ne(), Pe = ie(be);
                                {
                                  var Z = (De) => {
                                    var He = y_(), Ve = ie(He), st = z(Ve, !0);
                                    I(Ve);
                                    var at = V(Ve, 2), Ht = z(at);
                                    {
                                      let ze = /* @__PURE__ */ P(() => u(L).chosen?.buttonText);
                                      wd(Ht, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(L).placeholder;
                                        },
                                        get buttonText() {
                                          return u(ze);
                                        },
                                        onChosen: (Ge, he, Ze) => {
                                          u(L).chosen?.onChosen?.(l, Ge, he, Ze);
                                        },
                                        get value() {
                                          return n()[u(L).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(L).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    I(at), Ce(() => Re(st, u(L).label)), O(De, He);
                                  }, Ye = (De) => {
                                    var He = Ne(), Ve = ie(He);
                                    {
                                      var st = (at) => {
                                        Oe(at, Be({ level: 3, mt: "10px" }, () => u(L).attrs, {
                                          children: (Ht, ze) => {
                                            pe();
                                            var Ge = ke();
                                            Ce(() => Re(Ge, u(L).label)), O(Ht, Ge);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      le(
                                        Ve,
                                        (at) => {
                                          u(L).type === "heading" && at(st);
                                        },
                                        !0
                                      );
                                    }
                                    O(De, He);
                                  };
                                  le(
                                    Pe,
                                    (De) => {
                                      u(L).type === "chosen" ? De(Z) : De(Ye, !1);
                                    },
                                    !0
                                  );
                                }
                                O(fe, be);
                              };
                              le(
                                de,
                                (fe) => {
                                  u(L).type === "select" ? fe(ge) : fe(_e, !1);
                                },
                                !0
                              );
                            }
                            O(ae, re);
                          };
                          le(
                            J,
                            (ae) => {
                              u(L).type === "slider" ? ae(we) : ae(oe, !1);
                            },
                            !0
                          );
                        }
                        O(q, ne);
                      };
                      le(
                        j,
                        (q) => {
                          u(L).type === "textarea" ? q(R) : q(ee, !1);
                        },
                        !0
                      );
                    }
                    O(W, U);
                  };
                  le(K, (W) => {
                    u(L).type === "input" ? W(H) : W(Y, !1);
                  });
                }
                O(D, F);
              }), O(C, _);
            };
            le(M, (C) => {
              v && C(B);
            });
          }
          var X = V(M, 2);
          Ot(X, (C) => p = C, () => p);
          var Q = V(X, 2);
          {
            var E = (C) => {
              var _ = __(), T = ie(_), D = z(T);
              Oe(D, {
                level: 3,
                mt: "10px",
                children: (H, Y) => {
                  pe();
                  var W = ke("输出参数");
                  O(H, W);
                },
                $$slots: { default: !0 }
              });
              var L = V(D, 2);
              {
                var F = (H) => {
                  Ae(H, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (Y, W) => {
                      var U = w_();
                      O(Y, U);
                    },
                    $$slots: { default: !0 }
                  });
                };
                le(L, (H) => {
                  g.outputDefsAddEnable !== !1 && H(F);
                });
              }
              I(T);
              var K = V(T, 2);
              $n(K, {}), O(C, _);
            };
            le(Q, (C) => {
              g.outputDefsEnable !== !1 && C(E);
            });
          }
          Ce(() => {
            ht(X, g.rootStyle || ""), Nt(X, 1, Sn(g.rootClass), "svelte-qt4m0r");
          }), O(x, $);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(w);
}
se(ef, { data: {} }, [], [], !0);
const C_ = () => ({ updateEdgeData: (t, n, r) => {
  const o = Me.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Me.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), k_ = () => ({ deleteEdge: (t) => {
  Me.removeEdge(t);
} }), E_ = () => {
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
}, S_ = () => ({ getNodeRelativePosition: (t) => {
  let n = Me.getNode(t);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = Me.getNode(n.parentId) : n = void 0;
  return r;
} });
function N_(e) {
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
function P_(e) {
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
function $_(e) {
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
function Ss(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Ss(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Ss(e[r], t));
    return n;
  }
  return e;
}
const T_ = () => (it(), { copyHandler: async (n) => {
  const r = Me.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = Me.getEdges().filter((d) => r.some((h) => h.id === d.source) && r.some((h) => h.id === d.target)), s = r.map(N_), a = i.map($_), c = JSON.stringify({
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
  const i = P_(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), l = [];
  for (const d of i) {
    const h = `node_${Cn()}`;
    a.set(d.id, h);
  }
  for (const d of i) {
    const h = a.get(d.id), f = d.parentId !== void 0 ? a.get(d.parentId) : void 0, g = Ss(d.data, a);
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
      id: `edge_${Cn()}`,
      source: h,
      target: f
    });
  }
  Me.updateNodes((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...l]), Me.updateEdges((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...c]);
} });
var D_ = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), A_ = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), O_ = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const M_ = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function tf(e, t) {
  ce(t, !0), Le(e, M_);
  const n = y(t, "onInit", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = it();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ $e(!1), s = /* @__PURE__ */ $e(null);
  const { updateEdgeData: a } = C_(), l = (W) => {
    W.preventDefault(), W.dataTransfer && (W.dataTransfer.dropEffect = "move");
  }, c = (W) => {
    W.preventDefault();
    const U = o.screenToFlowPosition({ x: W.clientX - 250, y: W.clientY - 100 }), j = W.dataTransfer?.getData("application/tinyflow");
    if (!j)
      return;
    const R = JSON.parse(j), ee = { id: `node_${Cn()}`, position: U, data: {}, ...R };
    Me.addNode(ee), Me.selectNodeOnly(ee.id);
  }, { getNode: d } = c_(), h = (W) => {
    const U = d(W.source), j = d(W.target);
    if (W.sourceHandle === "loop_handle" || U.parentId) {
      const R = o.getEdges();
      for (let ee of R)
        if (ee.target === W.target) {
          const q = d(ee.source);
          if (W.sourceHandle === "loop_handle" && q.parentId !== U.id || U.parentId && q.parentId !== U.parentId)
            return !1;
        }
    }
    return !(!U.parentId && j.parentId && j.parentId !== U.id);
  }, { getNodesFromSource: f } = E_(), { getNodeRelativePosition: g } = S_(), { ensureParentInNodesBefore: v } = u_(), p = (W, U) => {
    if (!U.isValid)
      return;
    const j = U.toNode;
    if (j.parentId)
      return;
    const R = U.fromNode, ee = U.fromHandle, q = { position: { ...j.position } };
    if (ee.id === "loop_handle" ? q.parentId = R.id : R.parentId && (q.parentId = R.parentId), q.parentId) {
      const { x: ne, y: J } = g(q.parentId);
      q.position = { x: j.position.x - ne, y: j.position.y - J }, o.updateNode(j.id, q), f(j.id).forEach((oe) => {
        o.updateNode(oe.id, {
          parentId: q.parentId,
          position: { x: oe.position.x - ne, y: oe.position.y - J }
        });
      }), v(q.parentId, j.id);
    }
    setTimeout(() => {
      Me.getEdges().forEach((ne) => {
        ne.target === j.id && ne.source == R.id && (G(i, !0), G(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: w } = d_(), b = (W) => {
    W.edges.forEach((j) => {
      j.id === u(s)?.id && (G(s, null), G(i, !1));
      const R = d(j.target);
      if (R && R.parentId) {
        const ee = w(j.target), { x: q, y: ne } = g(R.parentId);
        if (ee.length === 0)
          o.updateNode(R.id, {
            parentId: void 0,
            position: { x: R.position.x + q, y: R.position.y + ne }
          }), f(R.id).forEach((we) => {
            o.updateNode(we.id, {
              parentId: void 0,
              position: { x: we.position.x + q, y: we.position.y + ne }
            });
          });
        else {
          let J = !1;
          for (let we = 0; we < ee.length; we++) {
            const oe = ee[we], ae = d(oe.source);
            if (ae.parentId || ae.type === "loopNode") {
              J = !0;
              break;
            }
          }
          J || (o.updateNode(R.id, {
            parentId: void 0,
            position: { x: R.position.x + q, y: R.position.y + ne }
          }), f(R.id).forEach((oe) => {
            o.updateNode(oe.id, {
              parentId: void 0,
              position: { x: oe.position.x + q, y: oe.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: N } = k_(), x = (W, U) => {
  }, k = (W) => {
  }, { copyHandler: $, pasteHandler: S } = T_(), A = (W) => {
    (W.ctrlKey || W.metaKey) && W.key === "c" && (W.preventDefault(), $(W)), (W.ctrlKey || W.metaKey) && W.key === "a" && (W.preventDefault(), Me.updateNodes((U) => U.map((j) => ({ ...j, selected: !0 }))), Me.updateEdges((U) => U.map((j) => ({ ...j, selected: !0 }))));
  }, M = async (W) => {
    const U = document.activeElement;
    U instanceof HTMLInputElement || U instanceof HTMLTextAreaElement || U?.hasAttribute("contenteditable") || S(W);
  };
  En(() => {
    window.addEventListener("keydown", A), window.addEventListener("paste", M);
  }), wo(() => {
    window.removeEventListener("keydown", A), window.removeEventListener("paste", M);
  });
  const B = {
    // ...nodeTypes
  }, X = Fn().customNodes;
  if (X)
    for (let W of Object.keys(X))
      B[W] = ef;
  const Q = Fn().onDataChange;
  Xe(() => {
    Q?.({
      nodes: Me.getNodes(),
      edges: Me.getEdges(),
      viewport: Me.getViewport()
    });
  });
  var E = {
    get onInit() {
      return n();
    },
    set onInit(W) {
      n(W), m();
    }
  }, C = O_(), _ = z(C), T = Me.getNodes, D = Me.setNodes, L = Me.getEdges, F = Me.setEdges, K = Me.getViewport, H = Me.setViewport;
  {
    let W = /* @__PURE__ */ P(() => ({ ...o_, ...B })), U = /* @__PURE__ */ P(() => ({
      markerEnd: { type: so.ArrowClosed, width: 20, height: 20 }
    }));
    od(_, {
      get nodeTypes() {
        return u(W);
      },
      get nodes() {
        return T();
      },
      set nodes(j) {
        D(j);
      },
      get edges() {
        return L();
      },
      set edges(j) {
        F(j);
      },
      get viewport() {
        return K();
      },
      set viewport(j) {
        H(j);
      },
      class: "tinyflow-logo",
      ondrop: c,
      ondragover: l,
      isValidConnection: h,
      onconnectend: p,
      onconnectstart: x,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (j) => {
        G(i, !0), G(s, j.edge, !0);
      },
      onbeforeconnect: (j) => ({ ...j, id: Cn() }),
      ondelete: b,
      onclick: (j) => {
        const R = j.target;
        R.classList.contains("svelte-flow__edge-interaction") || R.classList.contains("panel-content") || R.closest(".panel-content") || (G(i, !1), G(s, null));
      },
      get defaultEdgeOptions() {
        return u(U);
      },
      children: (j, R) => {
        var ee = A_(), q = ie(ee);
        gd(q, {});
        var ne = V(q, 2);
        dd(ne, {});
        var J = V(ne, 2);
        pd(J, {});
        var we = V(J, 2);
        {
          var oe = (ae) => {
            No(ae, {
              children: (re, de) => {
                var ge = D_(), _e = V(z(ge), 4), fe = z(_e);
                {
                  let Ye = /* @__PURE__ */ P(() => u(s)?.data?.condition);
                  Fe(fe, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return u(Ye);
                    },
                    onchange: (De) => {
                      u(s) && a(u(s).id, { condition: De.target?.value });
                    }
                  });
                }
                I(_e);
                var be = V(_e, 2), Pe = z(be);
                Ae(Pe, {
                  onclick: () => {
                    N(u(s)?.id), G(i, !1);
                  },
                  children: (Ye, De) => {
                    pe();
                    var He = ke("删除");
                    O(Ye, He);
                  },
                  $$slots: { default: !0 }
                });
                var Z = V(Pe, 2);
                Ae(Z, {
                  primary: !0,
                  onclick: () => {
                    G(i, !1);
                  },
                  children: (Ye, De) => {
                    pe();
                    var He = ke("保存");
                    O(Ye, He);
                  },
                  $$slots: { default: !0 }
                }), I(be), I(ge), O(re, ge);
              },
              $$slots: { default: !0 }
            });
          };
          le(we, (ae) => {
            u(i) && ae(oe);
          });
        }
        O(j, ee);
      },
      $$slots: { default: !0 }
    });
  }
  var Y = V(_, 2);
  return Qd(Y, {}), I(C), O(e, C), ue(E);
}
se(tf, { onInit: {} }, [], [], !0);
function H_(e, t) {
  ce(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Me.init(o?.nodes || [], o?.edges || []), Nr("tinyflow_options", n());
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
  return id(e, {
    children: (s, a) => {
      tf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue(i);
}
customElements.define("tinyflow-component", se(H_, { options: {}, onInit: {} }, [], [], !1));
export {
  V_ as Tinyflow
};
//# sourceMappingURL=index.js.map
