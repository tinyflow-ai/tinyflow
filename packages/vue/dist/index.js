import { defineComponent as af, ref as lf, onMounted as uf, onUnmounted as cf, createElementBlock as df, openBlock as ff, normalizeStyle as pf, normalizeClass as hf } from "vue";
const gf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(gf);
const Ps = 1, Es = 2, Tl = 4, vf = 8, mf = 16, yf = 1, wf = 2, Ll = 4, bf = 8, xf = 16, Ol = 1, $f = 2, Hl = "[", vi = "[!", Ns = "]", ir = {}, at = Symbol(), Cf = "http://www.w3.org/1999/xhtml", _f = "http://www.w3.org/2000/svg", kf = "@attach", Sf = !1;
var fo = Array.isArray, Pf = Array.prototype.indexOf, Ms = Array.from, Fo = Object.keys, Pr = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, zl = Object.getOwnPropertyDescriptors, Vl = Object.prototype, Ef = Array.prototype, mi = Object.getPrototypeOf, ya = Object.isExtensible;
function Br(e) {
  return typeof e == "function";
}
const ft = () => {
};
function Nf(e) {
  return e();
}
function Qi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Dl() {
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
const xt = 2, Ts = 4, yi = 8, dr = 16, kn = 32, Bn = 64, Ls = 128, At = 256, Jo = 512, mt = 1024, Lt = 2048, jn = 4096, Yt = 8192, fr = 16384, Os = 32768, pr = 65536, wa = 1 << 17, Mf = 1 << 18, hr = 1 << 19, Al = 1 << 20, es = 1 << 21, Hs = 1 << 22, er = 1 << 23, ln = Symbol("$state"), zs = Symbol("legacy props"), Tf = Symbol(""), wr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Lf = 1, wi = 3, gr = 8;
function Vs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Of() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Hf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Df() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Af() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function If(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Rf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Kf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Bf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ho(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function jf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Xf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let we = !1;
function yt(e) {
  we = e;
}
let Pe;
function qe(e) {
  if (e === null)
    throw ho(), ir;
  return Pe = e;
}
function xn() {
  return qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(Pe)
  );
}
function R(e) {
  if (we) {
    if (/* @__PURE__ */ Ut(Pe) !== null)
      throw ho(), ir;
    Pe = e;
  }
}
function me(e = 1) {
  if (we) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n);
    Pe = n;
  }
}
function Uo(e = !0) {
  for (var t = 0, n = Pe; ; ) {
    if (n.nodeType === gr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ns) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Hl || r === vi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n)
    );
    e && n.remove(), n = o;
  }
}
function Il(e) {
  if (!e || e.nodeType !== gr)
    throw ho(), ir;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Rl(e) {
  return e === this.v;
}
function Zl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Kl(e) {
  return !Zl(e, this.v);
}
let Rr = !1, Wf = !1;
function qf() {
  Rr = !0;
}
const Yf = [];
function Bl(e, t = !1, n = !1) {
  return Zo(e, /* @__PURE__ */ new Map(), "", Yf, null, n);
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
    if (fo(e)) {
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
    if (mi(e) === Vl) {
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
let Xe = null;
function Er(e) {
  Xe = e;
}
function An(e) {
  return (
    /** @type {T} */
    jl().get(e)
  );
}
function Nr(e, t) {
  return jl().set(e, t), t;
}
function le(e, t = !1, n) {
  Xe = {
    p: Xe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Rr && !t ? { s: null, u: null, $: [] } : null
  };
}
function ue(e) {
  var t = (
    /** @type {ComponentContext} */
    Xe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      au(r);
  }
  return e !== void 0 && (t.x = e), Xe = t.p, e ?? /** @type {T} */
  {};
}
function go() {
  return !Rr || Xe !== null && Xe.l === null;
}
function jl(e) {
  return Xe === null && Vs(), Xe.c ??= new Map(Ff(Xe) || void 0);
}
function Ff(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let Un = [];
function Xl() {
  var e = Un;
  Un = [], Qi(e);
}
function $n(e) {
  if (Un.length === 0 && !Jr) {
    var t = Un;
    queueMicrotask(() => {
      t === Un && Xl();
    });
  }
  Un.push(e);
}
function Jf() {
  for (; Un.length > 0; )
    Xl();
}
const Uf = /* @__PURE__ */ new WeakMap();
function Wl(e) {
  var t = ke;
  if (t === null)
    return Me.f |= er, e;
  if ((t.f & Os) === 0) {
    if ((t.f & Ls) === 0)
      throw !t.parent && e instanceof Error && ql(e), e;
    t.b.error(e);
  } else
    Mr(e, t);
}
function Mr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ls) !== 0)
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
  const t = Uf.get(e);
  t && (Pr(e, "message", {
    value: t.message
  }), Pr(e, "stack", {
    value: t.stack
  }));
}
const Oo = /* @__PURE__ */ new Set();
let Qe = null, Bt = null, ts = /* @__PURE__ */ new Set(), sn = [], bi = null, ns = !1, Jr = !1;
class Wt {
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
  #r = null;
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #a = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #s = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #l = [];
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
    sn = [], this.apply();
    for (const i of t)
      this.#u(i);
    if (this.#n === 0) {
      var n = Bt;
      this.#d();
      var r = this.#a, o = this.#s;
      this.#a = [], this.#s = [], this.#i = [], Qe = null, Bt = n, ba(r), ba(o), this.#r?.resolve();
    } else
      this.#c(this.#a), this.#c(this.#s), this.#c(this.#i);
    Bt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #u(t) {
    t.f ^= mt;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (kn | Bn)) !== 0, i = o && (r & mt) !== 0, s = i || (r & Yt) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        o ? n.f ^= mt : (r & Ts) !== 0 ? this.#s.push(n) : $i(n) && ((n.f & dr) !== 0 && this.#i.push(n), Qo(n));
        var a = n.first;
        if (a !== null) {
          n = a;
          continue;
        }
      }
      var l = n.parent;
      for (n = n.next; n === null && l !== null; )
        n = l.next, l = l.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #c(t) {
    for (const n of t)
      ((n.f & Lt) !== 0 ? this.#o : this.#l).push(n), bt(n, mt);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v), Bt?.set(t, t.v);
  }
  activate() {
    Qe = this;
  }
  deactivate() {
    Qe = null, Bt = null;
  }
  flush() {
    if (sn.length > 0) {
      if (this.activate(), Yl(), Qe !== null && Qe !== this)
        return;
    } else this.#n === 0 && this.#d();
    this.deactivate();
    for (const t of ts)
      if (ts.delete(t), t(), Qe !== null)
        break;
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #d() {
    for (const t of this.#e)
      t();
    if (this.#e.clear(), Oo.size > 1) {
      this.#t.clear();
      let t = !0;
      for (const n of Oo) {
        if (n === this) {
          t = !1;
          continue;
        }
        const r = [];
        for (const [i, s] of this.current) {
          if (n.current.has(i))
            if (t && s !== n.current.get(i))
              n.current.set(i, s);
            else
              continue;
          r.push(i);
        }
        if (r.length === 0)
          continue;
        const o = [...n.current.keys()].filter((i) => !this.current.has(i));
        if (o.length > 0) {
          for (const i of r)
            Fl(i, o);
          if (sn.length > 0) {
            Qe = n, n.apply();
            for (const i of sn)
              n.#u(i);
            sn = [], n.deactivate();
          }
        }
      }
      Qe = null;
    }
    Oo.delete(this);
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    this.#n -= 1;
    for (const t of this.#o)
      bt(t, Lt), sr(t);
    for (const t of this.#l)
      bt(t, jn), sr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#r ??= Dl()).promise;
  }
  static ensure() {
    if (Qe === null) {
      const t = Qe = new Wt();
      Oo.add(Qe), Jr || Wt.enqueue(() => {
        Qe === t && t.flush();
      });
    }
    return Qe;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    $n(t);
  }
  apply() {
  }
}
function v(e) {
  var t = Jr;
  Jr = !0;
  try {
    for (var n; ; ) {
      if (Jf(), sn.length === 0 && (Qe?.flush(), sn.length === 0))
        return bi = null, /** @type {T} */
        n;
      Yl();
    }
  } finally {
    Jr = t;
  }
}
function Yl() {
  var e = $r;
  ns = !0;
  try {
    var t = 0;
    for (_a(!0); sn.length > 0; ) {
      var n = Wt.ensure();
      if (t++ > 1e3) {
        var r, o;
        Gf();
      }
      n.process(sn), Dn.clear();
    }
  } finally {
    ns = !1, _a(e), bi = null;
  }
}
function Gf() {
  try {
    Df();
  } catch (e) {
    Mr(e, bi);
  }
}
let Jn = null;
function ba(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (fr | Yt)) === 0 && $i(r) && (Jn = [], Qo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? fu(r) : r.fn = null), Jn?.length > 0)) {
        Dn.clear();
        for (const o of Jn)
          Qo(o);
        Jn = [];
      }
    }
    Jn = null;
  }
}
function Fl(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & xt) !== 0 ? Fl(
        /** @type {Derived} */
        n,
        t
      ) : (r & (Hs | dr)) !== 0 && Jl(n, t) && (bt(n, Lt), sr(
        /** @type {Effect} */
        n
      ));
    }
}
function Jl(e, t) {
  if (e.deps !== null) {
    for (const n of e.deps)
      if (t.includes(n) || (n.f & xt) !== 0 && Jl(
        /** @type {Derived} */
        n,
        t
      ))
        return !0;
  }
  return !1;
}
function sr(e) {
  for (var t = bi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ns && t === ke && (n & dr) !== 0)
      return;
    if ((n & (Bn | kn)) !== 0) {
      if ((n & mt) === 0) return;
      t.f ^= mt;
    }
  }
  sn.push(t);
}
function Ul(e) {
  let t = 0, n = In(0), r;
  return () => {
    dp() && (c(n), mo(() => (t === 0 && (r = lt(() => e(() => Ur(n)))), t += 1, () => {
      $n(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ur(n));
      });
    })));
  };
}
var Qf = pr | hr | Ls;
function ep(e, t, n) {
  new tp(e, t, n);
}
class tp {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = we ? Pe : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #a;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #l = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  #c = 0;
  #d = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #m = () => {
    this.#f && Tr(this.#f, this.#c);
  };
  #y = Ul(() => (this.#f = In(this.#c), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#a = r, this.parent = /** @type {Effect} */
    ke.b, this.#t = !!this.#r.pending, this.#s = Xn(() => {
      if (ke.b = this, we) {
        const o = this.#n;
        xn(), /** @type {Comment} */
        o.nodeType === gr && /** @type {Comment} */
        o.data === vi ? this.#b() : this.#w();
      } else {
        try {
          this.#i = Mt(() => r(this.#e));
        } catch (o) {
          this.error(o);
        }
        this.#d > 0 ? this.#g() : this.#t = !1;
      }
    }, Qf), we && (this.#e = Pe);
  }
  #w() {
    try {
      this.#i = Mt(() => this.#a(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#o = Mt(() => t(this.#e)), Wt.enqueue(() => {
      this.#i = this.#h(() => (Wt.ensure(), Mt(() => this.#a(this.#e)))), this.#d > 0 ? this.#g() : (xr(
        /** @type {Effect} */
        this.#o,
        () => {
          this.#o = null;
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
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #h(t) {
    var n = ke, r = Me, o = Xe;
    Rt(this.#s), _t(this.#s), Er(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return Wl(i), null;
    } finally {
      Rt(n), _t(r), Er(o);
    }
  }
  #g() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#i !== null && (this.#u = document.createDocumentFragment(), gu(this.#i, this.#u)), this.#o === null && (this.#o = Mt(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #v(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#v(t);
      return;
    }
    this.#d += t, this.#d === 0 && (this.#t = !1, this.#o && xr(this.#o, () => {
      this.#o = null;
    }), this.#u && (this.#e.before(this.#u), this.#u = null), $n(() => {
      Wt.ensure().flush();
    }));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#v(t), this.#c += t, ts.add(this.#m);
  }
  get_effect_pending() {
    return this.#y(), c(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#p || !n && !r)
      throw t;
    this.#i && (rt(this.#i), this.#i = null), this.#o && (rt(this.#o), this.#o = null), this.#l && (rt(this.#l), this.#l = null), we && (qe(
      /** @type {TemplateNode} */
      this.#n
    ), me(), qe(Uo()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Xf();
        return;
      }
      o = !0, i && Bf(), Wt.ensure(), this.#c = 0, this.#l !== null && xr(this.#l, () => {
        this.#l = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#h(() => (this.#p = !1, Mt(() => this.#a(this.#e)))), this.#d > 0 ? this.#g() : this.#t = !1;
    };
    var a = Me;
    try {
      _t(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Mr(l, this.#s && this.#s.parent);
    } finally {
      _t(a);
    }
    r && $n(() => {
      this.#l = this.#h(() => {
        this.#p = !0;
        try {
          return Mt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Mr(
            l,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        } finally {
          this.#p = !1;
        }
      });
    });
  }
}
function Gl(e, t, n) {
  const r = go() ? vo : Ds;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = Qe, i = (
    /** @type {Effect} */
    ke
  ), s = np(), a = we;
  Promise.all(t.map((l) => /* @__PURE__ */ rp(l))).then((l) => {
    s();
    try {
      n([...e.map(r), ...l]);
    } catch (u) {
      (i.f & fr) === 0 && Mr(u, i);
    }
    a && yt(!1), o?.deactivate(), rs();
  }).catch((l) => {
    Mr(l, i);
  });
}
function np() {
  var e = ke, t = Me, n = Xe, r = Qe, o = we;
  if (o)
    var i = Pe;
  return function() {
    Rt(e), _t(t), Er(n), r?.activate(), o && (yt(!0), qe(i));
  };
}
function rs() {
  Rt(null), _t(null), Er(null);
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  var t = xt | Lt, n = Me !== null && (Me.f & xt) !== 0 ? (
    /** @type {Derived} */
    Me
  ) : null;
  return ke === null || n !== null && (n.f & At) !== 0 ? t |= At : ke.f |= hr, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: Rl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      at
    ),
    wv: 0,
    parent: n ?? ke,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function rp(e, t) {
  let n = (
    /** @type {Effect | null} */
    ke
  );
  n === null && Of();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = In(
    /** @type {V} */
    at
  ), s = !Me, a = /* @__PURE__ */ new Map();
  return pp(() => {
    var l = Dl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(rs);
    } catch (p) {
      l.reject(p), rs();
    }
    var u = (
      /** @type {Batch} */
      Qe
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (u.increment(), a.get(u)?.reject(wr), a.delete(u), a.set(u, l)));
    const f = (p, h = void 0) => {
      if (d || u.activate(), h)
        h !== wr && (i.f |= er, Tr(i, h));
      else {
        (i.f & er) !== 0 && (i.f ^= er), Tr(i, p);
        for (const [g, y] of a) {
          if (a.delete(g), g === u) break;
          y.reject(wr);
        }
      }
      s && (r.update_pending_count(-1), d || u.decrement());
    };
    l.promise.then(f, (p) => f(null, p || "unknown"));
  }), xi(() => {
    for (const l of a.values())
      l.reject(wr);
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
  return vu(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ds(e) {
  const t = /* @__PURE__ */ vo(e);
  return t.equals = Kl, t;
}
function Ql(e) {
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
function op(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & xt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function As(e) {
  var t, n = ke;
  Rt(op(e));
  try {
    Ql(e), t = bu(e);
  } finally {
    Rt(n);
  }
  return t;
}
function eu(e) {
  var t = As(e);
  if (e.equals(t) || (e.v = t, e.wv = yu()), !vr)
    if (Bt !== null)
      Bt.set(e, e.v);
    else {
      var n = (Hn || (e.f & At) !== 0) && e.deps !== null ? jn : mt;
      bt(e, n);
    }
}
const Dn = /* @__PURE__ */ new Map();
function In(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Rl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const n = In(e);
  return vu(n), n;
}
// @__NO_SIDE_EFFECTS__
function tu(e, t = !1, n = !0) {
  const r = In(e);
  return t || (r.equals = Kl), Rr && n && Xe !== null && Xe.l !== null && (Xe.l.s ??= []).push(r), r;
}
function U(e, t, n = !1) {
  Me !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!jt || (Me.f & wa) !== 0) && go() && (Me.f & (xt | dr | Hs | wa)) !== 0 && !bn?.includes(e) && Kf();
  let r = n ? Dt(t) : t;
  return Tr(e, r);
}
function Tr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    vr ? Dn.set(e, t) : Dn.set(e, n), e.v = t;
    var r = Wt.ensure();
    r.capture(e, n), (e.f & xt) !== 0 && ((e.f & Lt) !== 0 && As(
      /** @type {Derived} */
      e
    ), bt(e, (e.f & At) === 0 ? mt : jn)), e.wv = yu(), nu(e, Lt), go() && ke !== null && (ke.f & mt) !== 0 && (ke.f & (kn | Bn)) === 0 && (zt === null ? gp([e]) : zt.push(e));
  }
  return t;
}
function xa(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function Ur(e) {
  U(e, e.v + 1);
}
function nu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = go(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === ke)) {
        var l = (a & Lt) === 0;
        l && bt(s, t), (a & xt) !== 0 ? nu(
          /** @type {Derived} */
          s,
          jn
        ) : l && ((a & dr) !== 0 && Jn !== null && Jn.push(
          /** @type {Effect} */
          s
        ), sr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Dt(e) {
  if (typeof e != "object" || e === null || ln in e)
    return e;
  const t = mi(e);
  if (t !== Vl && t !== Ef)
    return e;
  var n = /* @__PURE__ */ new Map(), r = fo(e), o = /* @__PURE__ */ Ee(0), i = tr, s = (a) => {
    if (tr === i)
      return a();
    var l = Me, u = tr;
    _t(null), Sa(i);
    var d = a();
    return _t(l), Sa(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
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
          var f = /* @__PURE__ */ Ee(u.value);
          return n.set(l, f), f;
        }) : U(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Ee(at));
            n.set(l, d), Ur(o);
          }
        } else
          U(u, at), Ur(o);
        return !0;
      },
      get(a, l, u) {
        if (l === ln)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || wn(a, l)?.writable) && (d = s(() => {
          var h = Dt(f ? a[l] : at), g = /* @__PURE__ */ Ee(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === at ? void 0 : p;
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
          if (f !== void 0 && p !== at)
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
        if (l === ln)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== at || Reflect.has(a, l);
        if (u !== void 0 || ke !== null && (!d || wn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? Dt(a[l]) : at, h = /* @__PURE__ */ Ee(p);
            return h;
          }), n.set(l, u));
          var f = c(u);
          if (f === at)
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
            g !== void 0 ? U(g, at) : h in a && (g = s(() => /* @__PURE__ */ Ee(at)), n.set(h + "", g));
          }
        if (f === void 0)
          (!p || wn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Ee(void 0)), U(f, Dt(u)), n.set(l, f));
        else {
          p = f.v !== at;
          var y = s(() => Dt(u));
          U(f, y);
        }
        var b = Reflect.getOwnPropertyDescriptor(a, l);
        if (b?.set && b.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= $.v && U($, C + 1);
          }
          Ur(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var p = n.get(f);
          return p === void 0 || p.v !== at;
        });
        for (var [u, d] of n)
          d.v !== at && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Zf();
      }
    }
  );
}
function $a(e) {
  try {
    if (e !== null && typeof e == "object" && ln in e)
      return e[ln];
  } catch {
  }
  return e;
}
function ip(e, t) {
  return Object.is($a(e), $a(t));
}
var Ct, ru, ou, iu;
function os() {
  if (Ct === void 0) {
    Ct = window, ru = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ou = wn(t, "firstChild").get, iu = wn(t, "nextSibling").get, ya(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ya(n) && (n.__t = void 0);
  }
}
function It(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return ou.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return iu.call(e);
}
function Z(e, t) {
  if (!we)
    return /* @__PURE__ */ et(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ et(Pe)
  );
  if (n === null)
    n = Pe.appendChild(It());
  else if (t && n.nodeType !== wi) {
    var r = It();
    return n?.before(r), qe(r), r;
  }
  return qe(n), n;
}
function oe(e, t = !1) {
  if (!we) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ et(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ut(n) : n;
  }
  if (t && Pe?.nodeType !== wi) {
    var r = It();
    return Pe?.before(r), qe(r), r;
  }
  return Pe;
}
function z(e, t = 1, n = !1) {
  let r = we ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(r);
  if (!we)
    return r;
  if (n && r?.nodeType !== wi) {
    var i = It();
    return r === null ? o?.after(i) : r.before(i), qe(i), i;
  }
  return qe(r), /** @type {TemplateNode} */
  r;
}
function Is(e) {
  e.textContent = "";
}
function sp() {
  return !1;
}
function ap(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, $n(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function lp(e) {
  we && /* @__PURE__ */ et(e) !== null && Is(e);
}
let Ca = !1;
function up() {
  Ca || (Ca = !0, document.addEventListener(
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
  var t = Me, n = ke;
  _t(null), Rt(null);
  try {
    return e();
  } finally {
    _t(t), Rt(n);
  }
}
function su(e) {
  ke === null && Me === null && Vf(), Me !== null && (Me.f & At) !== 0 && ke === null && zf(), vr && Hf();
}
function cp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Gt(e, t, n, r = !0) {
  var o = ke;
  o !== null && (o.f & Yt) !== 0 && (e |= Yt);
  var i = {
    ctx: Xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Lt,
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
      Qo(i), i.f |= Os;
    } catch (l) {
      throw rt(i), l;
    }
  else t !== null && sr(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & hr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && cp(s, o), Me !== null && (Me.f & xt) !== 0 && (e & Bn) === 0)) {
      var a = (
        /** @type {Derived} */
        Me
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function dp() {
  return Me !== null && !jt;
}
function xi(e) {
  const t = Gt(yi, null, !1);
  return bt(t, mt), t.teardown = e, t;
}
function We(e) {
  su();
  var t = (
    /** @type {Effect} */
    ke.f
  ), n = !Me && (t & kn) !== 0 && (t & Os) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Xe
    );
    (r.e ??= []).push(e);
  } else
    return au(e);
}
function au(e) {
  return Gt(Ts | Al, e, !1);
}
function lu(e) {
  return su(), Gt(yi | Al, e, !0);
}
function Zs(e) {
  Wt.ensure();
  const t = Gt(Bn | hr, e, !0);
  return () => {
    rt(t);
  };
}
function fp(e) {
  Wt.ensure();
  const t = Gt(Bn | hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? xr(t, () => {
      rt(t), r(void 0);
    }) : (rt(t), r(void 0));
  });
}
function Zr(e) {
  return Gt(Ts, e, !1);
}
function pp(e) {
  return Gt(Hs | hr, e, !0);
}
function mo(e, t = 0) {
  return Gt(yi | t, e, !0);
}
function Ce(e, t = [], n = []) {
  Gl(t, n, (r) => {
    Gt(yi, () => e(...r.map(c)), !0);
  });
}
function Xn(e, t = 0) {
  var n = Gt(dr | t, e, !0);
  return n;
}
function Mt(e, t = !0) {
  return Gt(kn | hr, e, !0, t);
}
function uu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = vr, r = Me;
    ka(!0), _t(null);
    try {
      t.call(null);
    } finally {
      ka(n), _t(r);
    }
  }
}
function cu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Rs(() => {
      o.abort(wr);
    });
    var r = n.next;
    (n.f & Bn) !== 0 ? n.parent = null : rt(n, t), n = r;
  }
}
function hp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & kn) === 0 && rt(t), t = n;
  }
}
function rt(e, t = !0) {
  var n = !1;
  (t || (e.f & Mf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (du(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), cu(e, t && !n), Go(e, 0), bt(e, fr);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  uu(e);
  var o = e.parent;
  o !== null && o.first !== null && fu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function du(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(e)
    );
    e.remove(), e = n;
  }
}
function fu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function xr(e, t, n = !0) {
  var r = [];
  Ks(e, r, !0), pu(r, () => {
    n && rt(e), t && t();
  });
}
function pu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ks(e, t, n) {
  if ((e.f & Yt) === 0) {
    if (e.f ^= Yt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & pr) !== 0 || (r.f & kn) !== 0;
      Ks(r, t, i ? n : !1), r = o;
    }
  }
}
function Bs(e) {
  hu(e, !0);
}
function hu(e, t) {
  if ((e.f & Yt) !== 0) {
    e.f ^= Yt, (e.f & mt) === 0 && (bt(e, Lt), sr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & pr) !== 0 || (n.f & kn) !== 0;
      hu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function gu(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(n)
    );
    t.append(n), n = o;
  }
}
let $r = !1;
function _a(e) {
  $r = e;
}
let vr = !1;
function ka(e) {
  vr = e;
}
let Me = null, jt = !1;
function _t(e) {
  Me = e;
}
let ke = null;
function Rt(e) {
  ke = e;
}
let bn = null;
function vu(e) {
  Me !== null && (bn === null ? bn = [e] : bn.push(e));
}
let vt = null, Nt = 0, zt = null;
function gp(e) {
  zt = e;
}
let mu = 1, Qr = 0, tr = Qr;
function Sa(e) {
  tr = e;
}
let Hn = !1;
function yu() {
  return ++mu;
}
function $i(e) {
  var t = e.f;
  if ((t & Lt) !== 0)
    return !0;
  if ((t & jn) !== 0) {
    var n = e.deps, r = (t & At) !== 0;
    if (n !== null) {
      var o, i, s = (t & Jo) !== 0, a = r && ke !== null && !Hn, l = n.length;
      if ((s || a) && (ke === null || (ke.f & fr) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= Jo), a && d !== null && (d.f & At) === 0 && (u.f ^= At);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], $i(
          /** @type {Derived} */
          i
        ) && eu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || ke !== null && !Hn) && bt(e, mt);
  }
  return !1;
}
function wu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !bn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & xt) !== 0 ? wu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? bt(i, Lt) : (i.f & mt) !== 0 && bt(i, jn), sr(
        /** @type {Effect} */
        i
      ));
    }
}
function bu(e) {
  var t = vt, n = Nt, r = zt, o = Me, i = Hn, s = bn, a = Xe, l = jt, u = tr, d = e.f;
  vt = /** @type {null | Value[]} */
  null, Nt = 0, zt = null, Hn = (d & At) !== 0 && (jt || !$r || Me === null), Me = (d & (kn | Bn)) === 0 ? e : null, bn = null, Er(e.ctx), jt = !1, tr = ++Qr, e.ac !== null && (Rs(() => {
    e.ac.abort(wr);
  }), e.ac = null);
  try {
    e.f |= es;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f(), h = e.deps;
    if (vt !== null) {
      var g;
      if (Go(e, Nt), h !== null && Nt > 0)
        for (h.length = Nt + vt.length, g = 0; g < vt.length; g++)
          h[Nt + g] = vt[g];
      else
        e.deps = h = vt;
      if (!Hn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & xt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Nt; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && Nt < h.length && (Go(e, Nt), h.length = Nt);
    if (go() && zt !== null && !jt && h !== null && (e.f & (xt | jn | Lt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      zt.length; g++)
        wu(
          zt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Qr++, zt !== null && (r === null ? r = zt : r.push(.../** @type {Source[]} */
    zt))), (e.f & er) !== 0 && (e.f ^= er), p;
  } catch (y) {
    return Wl(y);
  } finally {
    e.f ^= es, vt = t, Nt = n, zt = r, Me = o, Hn = i, bn = s, Er(a), jt = l, tr = u;
  }
}
function vp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Pf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & xt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (vt === null || !vt.includes(t)) && (bt(t, jn), (t.f & (At | Jo)) === 0 && (t.f ^= Jo), Ql(
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
      vp(e, n[r]);
}
function Qo(e) {
  var t = e.f;
  if ((t & fr) === 0) {
    bt(e, mt);
    var n = ke, r = $r;
    ke = e, $r = !0;
    try {
      (t & dr) !== 0 ? hp(e) : cu(e), uu(e);
      var o = bu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = mu;
      var i;
      Sf && Wf && (e.f & Lt) !== 0 && e.deps;
    } finally {
      $r = r, ke = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & xt) !== 0;
  if (Me !== null && !jt) {
    var r = ke !== null && (ke.f & fr) !== 0;
    if (!r && !bn?.includes(e)) {
      var o = Me.deps;
      if ((Me.f & es) !== 0)
        e.rv < Qr && (e.rv = Qr, vt === null && o !== null && o[Nt] === e ? Nt++ : vt === null ? vt = [e] : (!Hn || !vt.includes(e)) && vt.push(e));
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
    a !== null && (a.f & At) === 0 && (s.f ^= At);
  }
  if (vr) {
    if (Dn.has(e))
      return Dn.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & mt) === 0 && s.reactions !== null || xu(s)) && (l = As(s)), Dn.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    e, Bt?.has(s))
      return Bt.get(s);
    $i(s) && eu(s);
  }
  if (Bt?.has(e))
    return Bt.get(e);
  if ((e.f & er) !== 0)
    throw e.v;
  return e.v;
}
function xu(e) {
  if (e.v === at) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Dn.has(t) || (t.f & xt) !== 0 && xu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function lt(e) {
  var t = jt;
  try {
    return jt = !0, e();
  } finally {
    jt = t;
  }
}
const mp = -7169;
function bt(e, t) {
  e.f = e.f & mp | t;
}
function yp(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function js(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ln in e)
      is(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ln in n && is(n);
      }
  }
}
function is(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        is(e[r], t);
      } catch {
      }
    const n = mi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = zl(n);
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
const $u = /* @__PURE__ */ new Set(), ss = /* @__PURE__ */ new Set();
function Xs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Wr.call(t, i), !i.cancelBubble)
      return Rs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? $n(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function as(e, t, n, r = {}) {
  var o = Xs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ei(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Xs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && xi(() => {
    t.removeEventListener(e, s, i);
  });
}
function Wn(e) {
  for (var t = 0; t < e.length; t++)
    $u.add(e[t]);
  for (var n of ss)
    n(e);
}
let Pa = null;
function Wr(e) {
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
    var u = o.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Pr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Me, f = ke;
    _t(null), Rt(null);
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
            if (fo(y)) {
              var [b, ...$] = y;
              b.apply(i, [e, ...$]);
            } else
              y.call(i, e);
        } catch (C) {
          p ? h.push(C) : p = C;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        i = g;
      }
      if (p) {
        for (let C of h)
          queueMicrotask(() => {
            throw C;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, _t(d), Rt(f);
    }
  }
}
function Ws(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function St(e, t) {
  var n = (
    /** @type {Effect} */
    ke
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & Ol) !== 0, r = (t & $f) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (we)
      return St(Pe, null), Pe;
    o === void 0 && (o = Ws(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ et(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ru ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(s)
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
function wp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ol) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (we)
      return St(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Ws(i)
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
  return /* @__PURE__ */ wp(e, t, "svg");
}
function _e(e = "") {
  if (!we) {
    var t = It(e + "");
    return St(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== wi && (n.before(n = It()), qe(n)), St(n, n), n;
}
function Se() {
  if (we)
    return St(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = It();
  return e.append(t, n), St(t, n), e;
}
function L(e, t) {
  if (we) {
    ke.nodes_end = Pe, xn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function bp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const xp = [
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
function $p(e) {
  return xp.includes(e);
}
const Cp = {
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
function _p(e) {
  return e = e.toLowerCase(), Cp[e] ?? e;
}
const kp = ["touchstart", "touchmove"];
function Sp(e) {
  return kp.includes(e);
}
const Pp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Ep(e) {
  return Pp.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ke(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Cu(e, t) {
  return _u(e, t);
}
function Np(e, t) {
  os(), t.intro = t.intro ?? !1;
  const n = t.target, r = we, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ et(n)
    ); i && (i.nodeType !== gr || /** @type {Comment} */
    i.data !== Hl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Ut(i);
    if (!i)
      throw ir;
    yt(!0), qe(
      /** @type {Comment} */
      i
    );
    const s = _u(e, { ...t, anchor: i });
    return yt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== ir && console.warn("Failed to hydrate: ", s), t.recover === !1 && Af(), os(), Is(n), yt(!1), Cu(e, t);
  } finally {
    yt(r), qe(o);
  }
}
const mr = /* @__PURE__ */ new Map();
function _u(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  os();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var h = f[p];
      if (!a.has(h)) {
        a.add(h);
        var g = Sp(h);
        t.addEventListener(h, Wr, { passive: g });
        var y = mr.get(h);
        y === void 0 ? (document.addEventListener(h, Wr, { passive: g }), mr.set(h, 1)) : mr.set(h, y + 1);
      }
    }
  };
  l(Ms($u)), ss.add(l);
  var u = void 0, d = fp(() => {
    var f = n ?? t.appendChild(It());
    return ep(
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
            Xe
          );
          h.c = i;
        }
        if (o && (r.$$events = o), we && St(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, r) || {}, we && (ke.nodes_end = Pe, Pe === null || Pe.nodeType !== gr || /** @type {Comment} */
        Pe.data !== Ns))
          throw ho(), ir;
        i && ue();
      }
    ), () => {
      for (var p of a) {
        t.removeEventListener(p, Wr);
        var h = (
          /** @type {number} */
          mr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, Wr), mr.delete(p)) : mr.set(p, h);
      }
      ss.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return ls.set(u, d), u;
}
let ls = /* @__PURE__ */ new WeakMap();
function Mp(e, t) {
  const n = ls.get(e);
  return n ? (ls.delete(e), n(t)) : Promise.resolve();
}
class Ci {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Effect>} */
  #e = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Branch>} */
  #n = /* @__PURE__ */ new Map();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #r = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#r = n;
  }
  #a = () => {
    var t = (
      /** @type {Batch} */
      Qe
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Bs(r);
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
        if (i === n) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var l = document.createDocumentFragment();
            gu(s, l), l.append(It()), this.#n.set(i, { effect: s, fragment: l });
          } else
            rt(s);
          this.#e.delete(i);
        };
        this.#r || !r ? xr(s, a, !1) : a();
      }
    }
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Qe
    ), o = sp();
    n && !this.#e.has(t) && !this.#n.has(t) && this.#e.set(
      t,
      Mt(() => n(this.anchor))
    ), this.#t.set(r, t), o || (we && (this.anchor = Pe), this.#a());
  }
}
function Ye(e, t, ...n) {
  var r = new Ci(e);
  Xn(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, pr);
}
function Sn(e) {
  Xe === null && Vs(), Rr && Xe.l !== null ? Tp(Xe).m.push(e) : We(() => {
    const t = lt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function yo(e) {
  Xe === null && Vs(), Sn(() => () => lt(e));
}
function Tp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, n = !1) {
  we && xn();
  var r = new Ci(e), o = n ? pr : 0;
  function i(s, a) {
    if (we) {
      const u = Il(e) === vi;
      if (s === u) {
        var l = Uo();
        qe(l), r.anchor = l, yt(!1), r.ensure(s, a), yt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Xn(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Lp(e, t) {
  we && qe(
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
function Lr(e, t) {
  return t;
}
function Op(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    Ks(t[s].e, o, !0);
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
  pu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), rn(e, d.prev, d.next)), rt(d.e, !a);
    }
  });
}
function pt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Tl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = we ? qe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ et(u)
    ) : u.appendChild(It());
  }
  we && xn();
  var d = null, f = !1, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Ds(() => {
    var $ = n();
    return fo($) ? $ : $ == null ? [] : Ms($);
  }), g, y;
  function b() {
    Hp(
      y,
      g,
      a,
      p,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (g.length === 0 ? d ? Bs(d) : d = Mt(() => i(s)) : d !== null && xr(d, () => {
      d = null;
    }));
  }
  Xn(() => {
    y ??= /** @type {Effect} */
    ke, g = /** @type {V[]} */
    c(h);
    var $ = g.length;
    if (f && $ === 0)
      return;
    f = $ === 0;
    let C = !1;
    if (we) {
      var x = Il(s) === vi;
      x !== ($ === 0) && (s = Uo(), qe(s), yt(!1), C = !0);
    }
    if (we) {
      for (var k = null, E, S = 0; S < $; S++) {
        if (Pe.nodeType === gr && /** @type {Comment} */
        Pe.data === Ns) {
          s = /** @type {Comment} */
          Pe, C = !0, yt(!1);
          break;
        }
        var O = g[S], V = r(O, S);
        E = ku(
          Pe,
          a,
          k,
          null,
          O,
          V,
          S,
          o,
          t,
          n
        ), a.items.set(V, E), k = E;
      }
      $ > 0 && qe(Uo());
    }
    we ? $ === 0 && i && (d = Mt(() => i(s))) : b(), C && yt(!0), c(h);
  }), we && (s = Pe);
}
function Hp(e, t, n, r, o, i, s, a, l) {
  var u = (s & vf) !== 0, d = (s & (Ps | Es)) !== 0, f = t.length, p = n.items, h = n.first, g = h, y, b = null, $, C = [], x = [], k, E, S, O;
  if (u)
    for (O = 0; O < f; O += 1)
      k = t[O], E = a(k, O), S = p.get(E), S !== void 0 && (S.a?.measure(), ($ ??= /* @__PURE__ */ new Set()).add(S));
  for (O = 0; O < f; O += 1) {
    if (k = t[O], E = a(k, O), S = p.get(E), S === void 0) {
      var V = r.get(E);
      if (V !== void 0) {
        r.delete(E), p.set(E, V);
        var B = b ? b.next : g;
        rn(n, b, V), rn(n, V, B), Ai(V, B, o), b = V;
      } else {
        var Y = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : o;
        b = ku(
          Y,
          n,
          b,
          b === null ? n.first : b.next,
          k,
          E,
          O,
          i,
          s,
          l
        );
      }
      p.set(E, b), C = [], x = [], g = b.next;
      continue;
    }
    if (d && zp(S, k, O, s), (S.e.f & Yt) !== 0 && (Bs(S.e), u && (S.a?.unfix(), ($ ??= /* @__PURE__ */ new Set()).delete(S))), S !== g) {
      if (y !== void 0 && y.has(S)) {
        if (C.length < x.length) {
          var A = x[0], _;
          b = A.prev;
          var M = C[0], w = C[C.length - 1];
          for (_ = 0; _ < C.length; _ += 1)
            Ai(C[_], A, o);
          for (_ = 0; _ < x.length; _ += 1)
            y.delete(x[_]);
          rn(n, M.prev, w.next), rn(n, b, M), rn(n, w, A), g = A, b = w, O -= 1, C = [], x = [];
        } else
          y.delete(S), Ai(S, g, o), rn(n, S.prev, S.next), rn(n, S, b === null ? n.first : b.next), rn(n, b, S), b = S;
        continue;
      }
      for (C = [], x = []; g !== null && g.k !== E; )
        (g.e.f & Yt) === 0 && (y ??= /* @__PURE__ */ new Set()).add(g), x.push(g), g = g.next;
      if (g === null)
        continue;
      S = g;
    }
    C.push(S), b = S, g = S.next;
  }
  if (g !== null || y !== void 0) {
    for (var T = y === void 0 ? [] : Ms(y); g !== null; )
      (g.e.f & Yt) === 0 && T.push(g), g = g.next;
    var N = T.length;
    if (N > 0) {
      var I = (s & Tl) !== 0 && f === 0 ? o : null;
      if (u) {
        for (O = 0; O < N; O += 1)
          T[O].a?.measure();
        for (O = 0; O < N; O += 1)
          T[O].a?.fix();
      }
      Op(n, T, I);
    }
  }
  u && $n(() => {
    if ($ !== void 0)
      for (S of $)
        S.a?.apply();
  }), e.first = n.first && n.first.e, e.last = b && b.e;
  for (var K of r.values())
    rt(K.e);
  r.clear();
}
function zp(e, t, n, r) {
  (r & Ps) !== 0 && Tr(e.v, t), (r & Es) !== 0 ? Tr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ku(e, t, n, r, o, i, s, a, l, u, d) {
  var f = (l & Ps) !== 0, p = (l & mf) === 0, h = f ? p ? /* @__PURE__ */ tu(o, !1, !1) : In(o) : o, g = (l & Es) === 0 ? s : In(s), y = {
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
      var b = document.createDocumentFragment();
      b.append(e = It());
    }
    return y.e = Mt(() => a(
      /** @type {Node} */
      e,
      h,
      g,
      u
    ), we), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? d || (t.first = y) : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function Ai(e, t, n) {
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
      /* @__PURE__ */ Ut(i)
    );
    o.before(i), i = s;
  }
}
function rn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function qs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ce(() => {
    var a = (
      /** @type {Effect} */
      ke
    );
    if (s === (s = t() ?? "")) {
      we && xn();
      return;
    }
    if (a.nodes_start !== null && (du(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (we) {
        Pe.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== gr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Ut(l);
        if (l === null)
          throw ho(), ir;
        St(Pe, u), i = qe(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = Ws(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ et(f)), St(
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ et(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ et(f)
          );
      else
        i.before(f);
    }
  });
}
function _i(e, t, n) {
  we && xn();
  var r = new Ci(e);
  Xn(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, pr);
}
function Vp(e, t, n, r, o, i) {
  let s = we;
  we && xn();
  var a = null;
  we && Pe.nodeType === Lf && (a = /** @type {Element} */
  Pe, xn());
  var l = (
    /** @type {TemplateNode} */
    we ? Pe : e
  ), u = new Ci(l, !1);
  Xn(() => {
    const d = t() || null;
    var f = d === "svg" ? _f : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (p) => {
      if (d) {
        if (a = we ? (
          /** @type {Element} */
          a
        ) : f ? document.createElementNS(f, d) : document.createElement(d), St(a, a), r) {
          we && Ep(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            we ? /* @__PURE__ */ et(a) : a.appendChild(It())
          );
          we && (h === null ? yt(!1) : qe(h)), r(a, h);
        }
        ke.nodes_end = a, p.before(a);
      }
      we && qe(p);
    }), () => {
    };
  }, pr), xi(() => {
  }), s && (yt(!0), qe(l));
}
function Ve(e, t) {
  Zr(() => {
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
  Zr(() => {
    var r = lt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      mo(() => {
        var s = n();
        js(s), o && Zl(i, s) && (i = s, r.update(s));
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
  Xn(() => {
    n !== (n = t()) && (r && (rt(r), r = null), n && (r = Mt(() => {
      Zr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Su(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Su(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ap() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Su(e)) && (r && (r += " "), r += t);
  return r;
}
function Pn(e) {
  return typeof e == "object" ? Ap(e) : e ?? "";
}
const Ea = [...` 	
\r\f \v\uFEFF`];
function Ip(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ea.includes(r[s - 1])) && (a === r.length || Ea.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Na(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ii(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Rp(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Ii)), o && l.push(...Object.keys(o).map(Ii));
      var u = 0, d = -1;
      const y = e.length;
      for (var f = 0; f < y; f++) {
        var p = e[f];
        if (a ? p === "/" && e[f - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && e[f + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = f;
          else if (p === ";" || f === y - 1) {
            if (d !== -1) {
              var h = Ii(e.substring(u, d).trim());
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
    return r && (n += Na(r)), o && (n += Na(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Pt(e, t, n, r, o, i) {
  var s = e.__className;
  if (we || s !== n || s === void 0) {
    var a = Ip(n, r, i);
    (!we || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Ri(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ct(e, t, n, r) {
  var o = e.__style;
  if (we || o !== t) {
    var i = Rp(t, r);
    (!we || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Ri(e, n?.[0], r[0]), Ri(e, n?.[1], r[1], "important")) : Ri(e, n, r));
  return r;
}
function us(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!fo(t))
      return jf();
    for (var r of e.options)
      r.selected = t.includes(Ma(r));
    return;
  }
  for (r of e.options) {
    var o = Ma(r);
    if (ip(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Zp(e) {
  var t = new MutationObserver(() => {
    us(e, e.__value);
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
  }), xi(() => {
    t.disconnect();
  });
}
function Ma(e) {
  return "__value" in e ? e.__value : e.value;
}
const On = Symbol("class"), an = Symbol("style"), Pu = Symbol("is custom element"), Eu = Symbol("is html");
function nr(e) {
  if (we) {
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
    e.__on_r = n, $n(n), up();
  }
}
function Ko(e, t) {
  var n = ki(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Ta(e, t) {
  var n = ki(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Kp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = ki(e);
  we && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Tf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Nu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Bp(e, t, n, r, o = !1, i = !1) {
  if (we && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || nr(s);
  }
  var l = ki(e), u = l[Pu], d = !l[Eu];
  let f = we && u;
  f && yt(!1);
  var p = t || {}, h = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = Pn(n.class) : (r || n[On]) && (n.class = null), n[an] && (n.style ??= null);
  var y = Nu(e);
  for (const S in n) {
    let O = n[S];
    if (h && S === "value" && O == null) {
      e.value = e.__value = "", p[S] = O;
      continue;
    }
    if (S === "class") {
      var b = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Pt(e, b, O, r, t?.[On], n[On]), p[S] = O, p[On] = n[On];
      continue;
    }
    if (S === "style") {
      ct(e, O, t?.[an], n[an]), p[S] = O, p[an] = n[an];
      continue;
    }
    var $ = p[S];
    if (!(O === $ && !(O === void 0 && e.hasAttribute(S)))) {
      p[S] = O;
      var C = S[0] + S[1];
      if (C !== "$$")
        if (C === "on") {
          const V = {}, B = "$$" + S;
          let Y = S.slice(2);
          var x = $p(Y);
          if (bp(Y) && (Y = Y.slice(0, -7), V.capture = !0), !x && $) {
            if (O != null) continue;
            e.removeEventListener(Y, p[B], V), p[B] = null;
          }
          if (O != null)
            if (x)
              e[`__${Y}`] = O, Wn([Y]);
            else {
              let A = function(_) {
                p[S].call(this, _);
              };
              p[B] = Xs(Y, e, A, V);
            }
          else x && (e[`__${Y}`] = void 0);
        } else if (S === "style")
          be(e, S, O);
        else if (S === "autofocus")
          ap(
            /** @type {HTMLElement} */
            e,
            !!O
          );
        else if (!u && (S === "__value" || S === "value" && O != null))
          e.value = e.__value = O;
        else if (S === "selected" && h)
          Kp(
            /** @type {HTMLOptionElement} */
            e,
            O
          );
        else {
          var k = S;
          d || (k = _p(k));
          var E = k === "defaultValue" || k === "defaultChecked";
          if (O == null && !u && !E)
            if (l[S] = null, k === "value" || k === "checked") {
              let V = (
                /** @type {HTMLInputElement} */
                e
              );
              const B = t === void 0;
              if (k === "value") {
                let Y = V.defaultValue;
                V.removeAttribute(k), V.defaultValue = Y, V.value = V.__value = B ? Y : null;
              } else {
                let Y = V.defaultChecked;
                V.removeAttribute(k), V.defaultChecked = Y, V.checked = B ? Y : !1;
              }
            } else
              e.removeAttribute(S);
          else E || y.includes(k) && (u || typeof O != "string") ? (e[k] = O, k in l && (l[k] = at)) : typeof O != "function" && be(e, k, O);
        }
    }
  }
  return f && yt(!0), p;
}
function tt(e, t, n = [], r = [], o, i = !1, s = !1) {
  Gl(n, r, (a) => {
    var l = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (Xn(() => {
      var h = t(...a.map(c)), g = Bp(
        e,
        l,
        h,
        o,
        i,
        s
      );
      f && d && "value" in h && us(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let b of Object.getOwnPropertySymbols(u))
        h[b] || rt(u[b]);
      for (let b of Object.getOwnPropertySymbols(h)) {
        var y = h[b];
        b.description === kf && (!l || y !== l[b]) && (u[b] && rt(u[b]), u[b] = Mt(() => Dp(e, () => y))), g[b] = y;
      }
      l = g;
    }), d) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      Zr(() => {
        us(
          p,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Zp(p);
      });
    }
    f = !0;
  });
}
function ki(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Pu]: e.nodeName.includes("-"),
      [Eu]: e.namespaceURI === Cf
    }
  );
}
var La = /* @__PURE__ */ new Map();
function Nu(e) {
  var t = e.getAttribute("is") || e.nodeName, n = La.get(t);
  if (n) return n;
  La.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = zl(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = mi(o);
  }
  return n;
}
class Ys {
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
          Ys.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var jp = /* @__PURE__ */ new Ys({
  box: "border-box"
});
function Oa(e, t, n) {
  var r = jp.observe(e, () => n(e[t]));
  Zr(() => (lt(() => n(e[t])), r));
}
function Ha(e, t) {
  return e === t || e?.[ln] === t;
}
function Ot(e = {}, t, n, r) {
  return Zr(() => {
    var o, i;
    return mo(() => {
      o = i, i = [], lt(() => {
        e !== n(...i) && (t(e, ...i), o && Ha(n(...o), e) && t(null, ...o));
      });
    }), () => {
      $n(() => {
        i && Ha(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Mu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), n = t.l.u;
  if (!n) return;
  let r = () => js(t.s);
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
  n.b.length && lu(() => {
    za(t, r), Qi(n.b);
  }), We(() => {
    const o = lt(() => n.m.map(Nf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && We(() => {
    za(t, r), Qi(n.a);
  });
}
function za(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Ho = !1;
function Xp(e) {
  var t = Ho;
  try {
    return Ho = !1, [e(), Ho];
  } finally {
    Ho = t;
  }
}
const Wp = {
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
    Wp
  );
}
const qp = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = ke;
      try {
        Rt(e.parent_effect), e.special[t] = m(
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
        Rt(r);
      }
    }
    return e.special[t](n), xa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), xa(e.version)), !0;
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
      version: In(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        ke
      )
    },
    qp
  );
}
const Yp = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Br(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Br(o) && (o = o());
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
      if (Br(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = wn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === ln || t === zs) return !1;
    for (let n of e.props)
      if (Br(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Br(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Be(...e) {
  return new Proxy({ props: e }, Yp);
}
function m(e, t, n, r) {
  var o = !Rr || (n & wf) !== 0, i = (n & bf) !== 0, s = (n & xf) !== 0, a = (
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
    var f = ln in e || zs in e;
    d = wn(e, t)?.set ?? (f && t in e ? (x) => e[t] = x : void 0);
  }
  var p, h = !1;
  i ? [p, h] = Xp(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = u(), d && (o && If(), d(p)));
  var g;
  if (o ? g = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? u() : (l = !0, x);
  } : g = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & Ll) === 0)
    return g;
  if (d) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      function(x, k) {
        return arguments.length > 0 ? ((!o || !k || y || h) && d(k ? g() : x), x) : g();
      }
    );
  }
  var b = !1, $ = ((n & yf) !== 0 ? vo : Ds)(() => (b = !1, g()));
  i && c($);
  var C = (
    /** @type {Effect} */
    ke
  );
  return (
    /** @type {() => V} */
    function(x, k) {
      if (arguments.length > 0) {
        const E = k ? c($) : o && i ? Dt(x) : x;
        return U($, E), b = !0, a !== void 0 && (a = E), x;
      }
      return vr && b || (C.f & fr) !== 0 ? $.v : c($);
    }
  );
}
function Fp(e) {
  return new Jp(e);
}
class Jp {
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
      var a = /* @__PURE__ */ tu(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === zs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return U(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Np : Cu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Pr(this, i, {
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
      Mp(this.#e);
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
let Tu;
typeof HTMLElement == "function" && (Tu = class extends HTMLElement {
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
      const t = {}, n = Up(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Bo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Fp({
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
          for (const r of Fo(this.$$c)) {
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
    return Fo(this.$$p_d).find(
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
function Up(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends Tu {
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
    Pr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Bo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = wn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Pr(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Gp = { value: () => {
} };
function Si() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new jo(n);
}
function jo(e) {
  this._ = e;
}
function Qp(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
jo.prototype = Si.prototype = {
  constructor: jo,
  on: function(e, t) {
    var n = this._, r = Qp(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = eh(n[o], e.name))) return o;
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
    return new jo(e);
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
function Da(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Gp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var cs = "http://www.w3.org/1999/xhtml";
const Aa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: cs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Pi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Aa.hasOwnProperty(t) ? { space: Aa[t], local: e } : e;
}
function th(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === cs && t.documentElement.namespaceURI === cs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function nh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Lu(e) {
  var t = Pi(e);
  return (t.local ? nh : th)(t);
}
function rh() {
}
function Fs(e) {
  return e == null ? rh : function() {
    return this.querySelector(e);
  };
}
function oh(e) {
  typeof e != "function" && (e = Fs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Ht(r, this._parents);
}
function ih(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function sh() {
  return [];
}
function Ou(e) {
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
  typeof e == "function" ? e = ah(e) : e = Ou(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ht(r, o);
}
function Hu(e) {
  return function() {
    return this.matches(e);
  };
}
function zu(e) {
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
function fh(e) {
  return this.select(e == null ? dh : ch(typeof e == "function" ? e : zu(e)));
}
var ph = Array.prototype.filter;
function hh() {
  return Array.from(this.children);
}
function gh(e) {
  return function() {
    return ph.call(this.children, e);
  };
}
function vh(e) {
  return this.selectAll(e == null ? hh : gh(typeof e == "function" ? e : zu(e)));
}
function mh(e) {
  typeof e != "function" && (e = Hu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ht(r, this._parents);
}
function Vu(e) {
  return new Array(e.length);
}
function yh() {
  return new Ht(this._enter || this._groups.map(Vu), this._parents);
}
function ti(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ti.prototype = {
  constructor: ti,
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
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ti(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function xh(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, p = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (p[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new ti(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(p[a]) === l && (o[a] = l);
}
function $h(e) {
  return e.__data__;
}
function Ch(e, t) {
  if (!arguments.length) return Array.from(this, $h);
  var n = t ? xh : bh, r = this._parents, o = this._groups;
  typeof e != "function" && (e = wh(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], p = f.length, h = _h(e.call(d, d && d.__data__, u, r)), g = h.length, y = a[u] = new Array(g), b = s[u] = new Array(g), $ = l[u] = new Array(p);
    n(d, f, y, b, $, h, t);
    for (var C = 0, x = 0, k, E; C < g; ++C)
      if (k = y[C]) {
        for (C >= x && (x = C + 1); !(E = b[x]) && ++x < g; ) ;
        k._next = E || null;
      }
  }
  return s = new Ht(s, r), s._enter = a, s._exit = l, s;
}
function _h(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function kh() {
  return new Ht(this._exit || this._groups.map(Vu), this._parents);
}
function Sh(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Ph(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], f = u.length, p = a[l] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || d[g]) && (p[g] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ht(a, this._parents);
}
function Eh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Nh(e) {
  e || (e = Mh);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Ht(o, this._parents).order();
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
function Hh() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function zh() {
  return !this.node();
}
function Vh(e) {
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
function Rh(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Zh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Kh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Bh(e, t) {
  var n = Pi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Ah : Dh : typeof t == "function" ? n.local ? Kh : Zh : n.local ? Rh : Ih)(n, t));
}
function Du(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function jh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Xh(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Wh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function qh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? jh : typeof t == "function" ? Wh : Xh)(e, t, n ?? "")) : Or(this.node(), e);
}
function Or(e, t) {
  return e.style.getPropertyValue(t) || Du(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Yh(e) {
  return function() {
    delete this[e];
  };
}
function Fh(e, t) {
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
  return arguments.length > 1 ? this.each((t == null ? Yh : typeof t == "function" ? Jh : Fh)(e, t)) : this.node()[e];
}
function Au(e) {
  return e.trim().split(/^|\s+/);
}
function Js(e) {
  return e.classList || new Iu(e);
}
function Iu(e) {
  this._node = e, this._names = Au(e.getAttribute("class") || "");
}
Iu.prototype = {
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
function Ru(e, t) {
  for (var n = Js(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Zu(e, t) {
  for (var n = Js(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Gh(e) {
  return function() {
    Ru(this, e);
  };
}
function Qh(e) {
  return function() {
    Zu(this, e);
  };
}
function eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ru : Zu)(this, e);
  };
}
function tg(e, t) {
  var n = Au(e + "");
  if (arguments.length < 2) {
    for (var r = Js(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
function fg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function pg() {
  return this.each(fg);
}
function hg(e) {
  var t = typeof e == "function" ? e : Lu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function gg() {
  return null;
}
function vg(e, t) {
  var n = typeof e == "function" ? e : Lu(e), r = t == null ? gg : typeof t == "function" ? t : Fs(t);
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
function $g(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Cg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function _g(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function kg(e) {
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
    var r = this.__on, o, i = Cg(t);
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
function Pg(e, t, n) {
  var r = _g(e + ""), o, i = r.length, s;
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
  for (a = t ? Sg : kg, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ku(e, t, n) {
  var r = Du(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Eg(e, t) {
  return function() {
    return Ku(this, e, t);
  };
}
function Ng(e, t) {
  return function() {
    return Ku(this, e, t.apply(this, arguments));
  };
}
function Mg(e, t) {
  return this.each((typeof t == "function" ? Ng : Eg)(e, t));
}
function* Tg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Bu = [null];
function Ht(e, t) {
  this._groups = e, this._parents = t;
}
function wo() {
  return new Ht([[document.documentElement]], Bu);
}
function Lg() {
  return this;
}
Ht.prototype = wo.prototype = {
  constructor: Ht,
  select: oh,
  selectAll: lh,
  selectChild: fh,
  selectChildren: vh,
  filter: mh,
  data: Ch,
  enter: yh,
  exit: kh,
  join: Sh,
  merge: Ph,
  selection: Lg,
  order: Eh,
  sort: Nh,
  call: Th,
  nodes: Lh,
  node: Oh,
  size: Hh,
  empty: zh,
  each: Vh,
  attr: Bh,
  style: qh,
  property: Uh,
  classed: tg,
  text: ig,
  html: ug,
  raise: dg,
  lower: pg,
  append: hg,
  insert: vg,
  remove: yg,
  clone: xg,
  datum: $g,
  on: Pg,
  dispatch: Mg,
  [Symbol.iterator]: Tg
};
function Vt(e) {
  return typeof e == "string" ? new Ht([[document.querySelector(e)]], [document.documentElement]) : new Ht([[e]], Bu);
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
const Hg = { passive: !1 }, eo = { capture: !0, passive: !1 };
function Zi(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ju(e) {
  var t = e.document.documentElement, n = Vt(e).on("dragstart.drag", Cr, eo);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, eo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Xu(e, t) {
  var n = e.document.documentElement, r = Vt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, eo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const zo = (e) => () => e;
function ds(e, {
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
ds.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function zg(e) {
  return !e.ctrlKey && !e.button;
}
function Vg() {
  return this.parentNode;
}
function Dg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ig() {
  var e = zg, t = Vg, n = Dg, r = Ag, o = {}, i = Si("start", "drag", "end"), s = 0, a, l, u, d, f = 0;
  function p(k) {
    k.on("mousedown.drag", h).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, Hg).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(k, E) {
    if (!(d || !e.call(this, k, E))) {
      var S = x(this, t.call(this, k, E), k, E, "mouse");
      S && (Vt(k.view).on("mousemove.drag", g, eo).on("mouseup.drag", y, eo), ju(k.view), Zi(k), u = !1, a = k.clientX, l = k.clientY, S("start", k));
    }
  }
  function g(k) {
    if (Cr(k), !u) {
      var E = k.clientX - a, S = k.clientY - l;
      u = E * E + S * S > f;
    }
    o.mouse("drag", k);
  }
  function y(k) {
    Vt(k.view).on("mousemove.drag mouseup.drag", null), Xu(k.view, u), Cr(k), o.mouse("end", k);
  }
  function b(k, E) {
    if (e.call(this, k, E)) {
      var S = k.changedTouches, O = t.call(this, k, E), V = S.length, B, Y;
      for (B = 0; B < V; ++B)
        (Y = x(this, O, k, E, S[B].identifier, S[B])) && (Zi(k), Y("start", k, S[B]));
    }
  }
  function $(k) {
    var E = k.changedTouches, S = E.length, O, V;
    for (O = 0; O < S; ++O)
      (V = o[E[O].identifier]) && (Cr(k), V("drag", k, E[O]));
  }
  function C(k) {
    var E = k.changedTouches, S = E.length, O, V;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), O = 0; O < S; ++O)
      (V = o[E[O].identifier]) && (Zi(k), V("end", k, E[O]));
  }
  function x(k, E, S, O, V, B) {
    var Y = i.copy(), A = Kt(B || S, E), _, M, w;
    if ((w = n.call(k, new ds("beforestart", {
      sourceEvent: S,
      target: p,
      identifier: V,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), O)) != null)
      return _ = w.x - A[0] || 0, M = w.y - A[1] || 0, function T(N, I, K) {
        var j = A, H;
        switch (N) {
          case "start":
            o[V] = T, H = s++;
            break;
          case "end":
            delete o[V], --s;
          // falls through
          case "drag":
            A = Kt(K || I, E), H = s;
            break;
        }
        Y.call(
          N,
          k,
          new ds(N, {
            sourceEvent: I,
            subject: w,
            target: p,
            identifier: V,
            active: H,
            x: A[0] + _,
            y: A[1] + M,
            dx: A[0] - j[0],
            dy: A[1] - j[1],
            dispatch: Y
          }),
          O
        );
      };
  }
  return p.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : zo(!!k), p) : e;
  }, p.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : zo(k), p) : t;
  }, p.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : zo(k), p) : n;
  }, p.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : zo(!!k), p) : r;
  }, p.on = function() {
    var k = i.on.apply(i, arguments);
    return k === i ? p : k;
  }, p.clickDistance = function(k) {
    return arguments.length ? (f = (k = +k) * k, p) : Math.sqrt(f);
  }, p;
}
function Us(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Wu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function bo() {
}
var to = 0.7, ni = 1 / to, _r = "\\s*([+-]?\\d+)\\s*", no = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rg = /^#([0-9a-f]{3,8})$/, Zg = new RegExp(`^rgb\\(${_r},${_r},${_r}\\)$`), Kg = new RegExp(`^rgb\\(${un},${un},${un}\\)$`), Bg = new RegExp(`^rgba\\(${_r},${_r},${_r},${no}\\)$`), jg = new RegExp(`^rgba\\(${un},${un},${un},${no}\\)$`), Xg = new RegExp(`^hsl\\(${no},${un},${un}\\)$`), Wg = new RegExp(`^hsla\\(${no},${un},${un},${no}\\)$`), Ia = {
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
Us(bo, ar, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ra,
  // Deprecated! Use color.formatHex.
  formatHex: Ra,
  formatHex8: qg,
  formatHsl: Yg,
  formatRgb: Za,
  toString: Za
});
function Ra() {
  return this.rgb().formatHex();
}
function qg() {
  return this.rgb().formatHex8();
}
function Yg() {
  return qu(this).formatHsl();
}
function Za() {
  return this.rgb().formatRgb();
}
function ar(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Rg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ka(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Vo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Vo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Zg.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = Kg.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bg.exec(e)) ? Vo(t[1], t[2], t[3], t[4]) : (t = jg.exec(e)) ? Vo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Xg.exec(e)) ? Xa(t[1], t[2] / 100, t[3] / 100, 1) : (t = Wg.exec(e)) ? Xa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ia.hasOwnProperty(e) ? Ka(Ia[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Ka(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Vo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new kt(e, t, n, r);
}
function Fg(e) {
  return e instanceof bo || (e = ar(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function fs(e, t, n, r) {
  return arguments.length === 1 ? Fg(e) : new kt(e, t, n, r ?? 1);
}
function kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Us(kt, fs, Wu(bo, {
  brighter(e) {
    return e = e == null ? ni : Math.pow(ni, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? to : Math.pow(to, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(rr(this.r), rr(this.g), rr(this.b), ri(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ba,
  // Deprecated! Use color.formatHex.
  formatHex: Ba,
  formatHex8: Jg,
  formatRgb: ja,
  toString: ja
}));
function Ba() {
  return `#${Gn(this.r)}${Gn(this.g)}${Gn(this.b)}`;
}
function Jg() {
  return `#${Gn(this.r)}${Gn(this.g)}${Gn(this.b)}${Gn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ja() {
  const e = ri(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${rr(this.r)}, ${rr(this.g)}, ${rr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ri(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function rr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Gn(e) {
  return e = rr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Xa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, n, r);
}
function qu(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof bo || (e = ar(e)), !e) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Xt(s, a, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? qu(e) : new Xt(e, t, n, r ?? 1);
}
function Xt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Us(Xt, Ug, Wu(bo, {
  brighter(e) {
    return e = e == null ? ni : Math.pow(ni, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? to : Math.pow(to, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new kt(
      Ki(e >= 240 ? e - 240 : e + 120, o, r),
      Ki(e, o, r),
      Ki(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Xt(Wa(this.h), Do(this.s), Do(this.l), ri(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ri(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Wa(this.h)}, ${Do(this.s) * 100}%, ${Do(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Wa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Do(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ki(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Gs = (e) => () => e;
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
    return n - t ? Qg(t, n, e) : Gs(isNaN(t) ? n : t);
  };
}
function Yu(e, t) {
  var n = t - e;
  return n ? Gg(e, n) : Gs(isNaN(e) ? t : e);
}
const oi = function e(t) {
  var n = e1(t);
  function r(o, i) {
    var s = n((o = fs(o)).r, (i = fs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Yu(o.opacity, i.opacity);
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
function on(e, t) {
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
var ps = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Bi = new RegExp(ps.source, "g");
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
function Fu(e, t) {
  var n = ps.lastIndex = Bi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ps.exec(e)) && (o = Bi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: on(r, o) })), n = Bi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? a1(l[0].x) : s1(t) : (t = l.length, function(u) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(u);
    return a.join("");
  });
}
function Gr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Gs(t) : (n === "number" ? on : n === "string" ? (r = ar(t)) ? (t = r, oi) : Fu : t instanceof ar ? oi : t instanceof Date ? o1 : n1(t) ? t1 : Array.isArray(t) ? r1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? i1 : on)(e, t);
}
var qa = 180 / Math.PI, Ju = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Uu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * qa,
    skewX: Math.atan(l) * qa,
    scaleX: s,
    scaleY: a
  };
}
var Ao;
function l1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ju : Uu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function u1(e) {
  return e == null || (Ao || (Ao = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ao.setAttribute("transform", e), !(e = Ao.transform.baseVal.consolidate())) ? Ju : (e = e.matrix, Uu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Gu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var y = h.push("translate(", null, t, null, n);
      g.push({ i: y - 4, x: on(u, f) }, { i: y - 2, x: on(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(u, d, f, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: on(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(u, d, f, p) {
    u !== d ? p.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: on(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: on(u, f) }, { i: y - 2, x: on(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(u, d) {
    var f = [], p = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, p), s(u.rotate, d.rotate, f, p), a(u.skewX, d.skewX, f, p), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, p), u = d = null, function(h) {
      for (var g = -1, y = p.length, b; ++g < y; ) f[(b = p[g]).i] = b.x(h);
      return f.join("");
    };
  };
}
var c1 = Gu(l1, "px, ", "px)", "deg)"), d1 = Gu(u1, ", ", ")", ")"), f1 = 1e-12;
function Ya(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function p1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function h1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Xo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], f = s[1], p = s[2], h = d - a, g = f - l, y = h * h + g * g, b, $;
    if (y < f1)
      $ = Math.log(p / u) / t, b = function(O) {
        return [
          a + O * h,
          l + O * g,
          u * Math.exp(t * O * $)
        ];
      };
    else {
      var C = Math.sqrt(y), x = (p * p - u * u + r * y) / (2 * u * n * C), k = (p * p - u * u - r * y) / (2 * p * n * C), E = Math.log(Math.sqrt(x * x + 1) - x), S = Math.log(Math.sqrt(k * k + 1) - k);
      $ = (S - E) / t, b = function(O) {
        var V = O * $, B = Ya(E), Y = u / (n * C) * (B * h1(t * V + E) - p1(E));
        return [
          a + Y * h,
          l + Y * g,
          u * B / Ya(t * V + E)
        ];
      };
    }
    return b.duration = $ * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Hr = 0, qr = 0, jr = 0, Qu = 1e3, ii, Yr, si = 0, lr = 0, Ei = 0, ro = typeof performance == "object" && performance.now ? performance : Date, ec = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Qs() {
  return lr || (ec(g1), lr = ro.now() + Ei);
}
function g1() {
  lr = 0;
}
function ai() {
  this._call = this._time = this._next = null;
}
ai.prototype = tc.prototype = {
  constructor: ai,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Qs() : +n) + (t == null ? 0 : +t), !this._next && Yr !== this && (Yr ? Yr._next = this : ii = this, Yr = this), this._call = e, this._time = n, hs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, hs());
  }
};
function tc(e, t, n) {
  var r = new ai();
  return r.restart(e, t, n), r;
}
function v1() {
  Qs(), ++Hr;
  for (var e = ii, t; e; )
    (t = lr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Hr;
}
function Fa() {
  lr = (si = ro.now()) + Ei, Hr = qr = 0;
  try {
    v1();
  } finally {
    Hr = 0, y1(), lr = 0;
  }
}
function m1() {
  var e = ro.now(), t = e - si;
  t > Qu && (Ei -= t, si = e);
}
function y1() {
  for (var e, t = ii, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ii = n);
  Yr = e, hs(r);
}
function hs(e) {
  if (!Hr) {
    qr && (qr = clearTimeout(qr));
    var t = e - lr;
    t > 24 ? (e < 1 / 0 && (qr = setTimeout(Fa, e - ro.now() - Ei)), jr && (jr = clearInterval(jr))) : (jr || (si = ro.now(), jr = setInterval(m1, Qu)), Hr = 1, ec(Fa));
  }
}
function Ja(e, t, n) {
  var r = new ai();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var w1 = Si("start", "end", "cancel", "interrupt"), b1 = [], nc = 0, Ua = 1, gs = 2, Wo = 3, Ga = 4, vs = 5, qo = 6;
function Ni(e, t, n, r, o, i) {
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
    state: nc
  });
}
function ea(e, t) {
  var n = Qt(e, t);
  if (n.state > nc) throw new Error("too late; already scheduled");
  return n;
}
function pn(e, t) {
  var n = Qt(e, t);
  if (n.state > Wo) throw new Error("too late; already running");
  return n;
}
function Qt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function x1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = tc(i, 0, n.time);
  function i(u) {
    n.state = Ua, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, p, h;
    if (n.state !== Ua) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === Wo) return Ja(s);
        h.state === Ga ? (h.state = qo, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = qo, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (Ja(function() {
      n.state === Wo && (n.state = Ga, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = gs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === gs) {
      for (n.state = Wo, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = vs, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === vs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = qo, n.timer.stop(), delete r[t];
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
      o = r.state > gs && r.state < vs, r.state = qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function $1(e) {
  return this.each(function() {
    Yo(this, e);
  });
}
function C1(e, t) {
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
function _1(e, t, n) {
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
function k1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Qt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? C1 : _1)(n, e, t));
}
function ta(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = pn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Qt(o, r).value[t];
  };
}
function rc(e, t) {
  var n;
  return (typeof t == "number" ? on : t instanceof ar ? oi : (n = ar(t)) ? (t = n, oi) : Fu)(e, t);
}
function S1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function P1(e) {
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
function N1(e, t, n) {
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
  var n = Pi(e), r = n === "transform" ? d1 : rc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? T1 : M1)(n, r, ta(this, "attr." + e, t)) : t == null ? (n.local ? P1 : S1)(n) : (n.local ? N1 : E1)(n, r, t));
}
function O1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function H1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function z1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && H1(e, i)), n;
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
function D1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Pi(e);
  return this.tween(n, (r.local ? z1 : V1)(r, t));
}
function A1(e, t) {
  return function() {
    ea(this, e).delay = +t.apply(this, arguments);
  };
}
function I1(e, t) {
  return t = +t, function() {
    ea(this, e).delay = t;
  };
}
function R1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? A1 : I1)(t, e)) : Qt(this.node(), t).delay;
}
function Z1(e, t) {
  return function() {
    pn(this, e).duration = +t.apply(this, arguments);
  };
}
function K1(e, t) {
  return t = +t, function() {
    pn(this, e).duration = t;
  };
}
function B1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Z1 : K1)(t, e)) : Qt(this.node(), t).duration;
}
function j1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    pn(this, e).ease = t;
  };
}
function X1(e) {
  var t = this._id;
  return arguments.length ? this.each(j1(t, e)) : Qt(this.node(), t).ease;
}
function W1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    pn(this, e).ease = n;
  };
}
function q1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(W1(this._id, e));
}
function Y1(e) {
  typeof e != "function" && (e = Hu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Cn(r, this._parents, this._name, this._id);
}
function F1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, f = s[a] = new Array(d), p, h = 0; h < d; ++h)
      (p = l[h] || u[h]) && (f[h] = p);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Cn(s, this._parents, this._name, this._id);
}
function J1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function U1(e, t, n) {
  var r, o, i = J1(t) ? ea : pn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function G1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Qt(this.node(), n).on.on(e) : this.each(U1(n, e, t));
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
  typeof e != "function" && (e = Fs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, f, p = 0; p < l; ++p)
      (d = a[p]) && (f = e.call(d, d.__data__, p, a)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, Ni(u[p], t, n, p, u, Qt(d, n)));
  return new Cn(i, this._parents, t, n);
}
function nv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ou(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, f = 0; f < u; ++f)
      if (d = l[f]) {
        for (var p = e.call(d, d.__data__, f, l), h, g = Qt(d, n), y = 0, b = p.length; y < b; ++y)
          (h = p[y]) && Ni(h, t, n, y, p, g);
        i.push(p), s.push(d);
      }
  return new Cn(i, s, t, n);
}
var rv = wo.prototype.constructor;
function ov() {
  return new rv(this._groups, this._parents);
}
function iv(e, t) {
  var n, r, o;
  return function() {
    var i = Or(this, e), s = (this.style.removeProperty(e), Or(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function oc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function sv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Or(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function av(e, t, n) {
  var r, o, i;
  return function() {
    var s = Or(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Or(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function lv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = pn(this, e), u = l.on, d = l.value[i] == null ? a || (a = oc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function uv(e, t, n) {
  var r = (e += "") == "transform" ? c1 : rc;
  return t == null ? this.styleTween(e, iv(e, r)).on("end.style." + e, oc(e)) : typeof t == "function" ? this.styleTween(e, av(e, r, ta(this, "style." + e, t))).each(lv(this._id, e)) : this.styleTween(e, sv(e, r, t), n).on("end.style." + e, null);
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
function fv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, dv(e, t, n ?? ""));
}
function pv(e) {
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
  return this.tween("text", typeof e == "function" ? hv(ta(this, "text", e)) : pv(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = ic(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Qt(l, t);
        Ni(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Cn(r, this._parents, e, n);
}
function bv() {
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
var xv = 0;
function Cn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ic() {
  return ++xv;
}
var hn = wo.prototype;
Cn.prototype = {
  constructor: Cn,
  select: tv,
  selectAll: nv,
  selectChild: hn.selectChild,
  selectChildren: hn.selectChildren,
  filter: Y1,
  merge: F1,
  selection: ov,
  transition: wv,
  call: hn.call,
  nodes: hn.nodes,
  node: hn.node,
  size: hn.size,
  empty: hn.empty,
  each: hn.each,
  on: G1,
  attr: L1,
  attrTween: D1,
  style: uv,
  styleTween: fv,
  text: gv,
  textTween: yv,
  remove: ev,
  tween: k1,
  delay: R1,
  duration: B1,
  ease: X1,
  easeVarying: q1,
  end: bv,
  [Symbol.iterator]: hn[Symbol.iterator]
};
function $v(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Cv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: $v
};
function _v(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function kv(e) {
  var t, n;
  e instanceof Cn ? (t = e._id, e = e._name) : (t = ic(), (n = Cv).time = Qs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ni(l, e, t, u, s, n || _v(l, t));
  return new Cn(r, this._parents, e, t);
}
wo.prototype.interrupt = $1;
wo.prototype.transition = kv;
const Io = (e) => () => e;
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
var Mi = new vn(1, 0, 0);
sc.prototype = vn.prototype;
function sc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Mi;
  return e.__zoom;
}
function ji(e) {
  e.stopImmediatePropagation();
}
function Xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Pv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Ev() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Qa() {
  return this.__zoom || Mi;
}
function Nv(e) {
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
function ac() {
  var e = Pv, t = Ev, n = Tv, r = Nv, o = Mv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Xo, u = Si("start", "zoom", "end"), d, f, p, h = 500, g = 150, y = 0, b = 10;
  function $(w) {
    w.property("__zoom", Qa).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(w, T, N, I) {
    var K = w.selection ? w.selection() : w;
    K.property("__zoom", Qa), w !== K ? E(w, T, N, I) : K.interrupt().each(function() {
      S(this, arguments).event(I).start().zoom(null, typeof T == "function" ? T.apply(this, arguments) : T).end();
    });
  }, $.scaleBy = function(w, T, N, I) {
    $.scaleTo(w, function() {
      var K = this.__zoom.k, j = typeof T == "function" ? T.apply(this, arguments) : T;
      return K * j;
    }, N, I);
  }, $.scaleTo = function(w, T, N, I) {
    $.transform(w, function() {
      var K = t.apply(this, arguments), j = this.__zoom, H = N == null ? k(K) : typeof N == "function" ? N.apply(this, arguments) : N, F = j.invert(H), q = typeof T == "function" ? T.apply(this, arguments) : T;
      return n(x(C(j, q), H, F), K, s);
    }, N, I);
  }, $.translateBy = function(w, T, N, I) {
    $.transform(w, function() {
      return n(this.__zoom.translate(
        typeof T == "function" ? T.apply(this, arguments) : T,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, I);
  }, $.translateTo = function(w, T, N, I, K) {
    $.transform(w, function() {
      var j = t.apply(this, arguments), H = this.__zoom, F = I == null ? k(j) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n(Mi.translate(F[0], F[1]).scale(H.k).translate(
        typeof T == "function" ? -T.apply(this, arguments) : -T,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), j, s);
    }, I, K);
  };
  function C(w, T) {
    return T = Math.max(i[0], Math.min(i[1], T)), T === w.k ? w : new vn(T, w.x, w.y);
  }
  function x(w, T, N) {
    var I = T[0] - N[0] * w.k, K = T[1] - N[1] * w.k;
    return I === w.x && K === w.y ? w : new vn(w.k, I, K);
  }
  function k(w) {
    return [(+w[0][0] + +w[1][0]) / 2, (+w[0][1] + +w[1][1]) / 2];
  }
  function E(w, T, N, I) {
    w.on("start.zoom", function() {
      S(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var K = this, j = arguments, H = S(K, j).event(I), F = t.apply(K, j), q = N == null ? k(F) : typeof N == "function" ? N.apply(K, j) : N, G = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), D = K.__zoom, W = typeof T == "function" ? T.apply(K, j) : T, J = l(D.invert(q).concat(G / D.k), W.invert(q).concat(G / W.k));
      return function(te) {
        if (te === 1) te = W;
        else {
          var ne = J(te), Q = G / ne[2];
          te = new vn(Q, q[0] - ne[0] * Q, q[1] - ne[1] * Q);
        }
        H.zoom(null, te);
      };
    });
  }
  function S(w, T, N) {
    return !N && w.__zooming || new O(w, T);
  }
  function O(w, T) {
    this.that = w, this.args = T, this.active = 0, this.sourceEvent = null, this.extent = t.apply(w, T), this.taps = 0;
  }
  O.prototype = {
    event: function(w) {
      return w && (this.sourceEvent = w), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(w, T) {
      return this.mouse && w !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])), this.touch0 && w !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])), this.touch1 && w !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])), this.that.__zoom = T, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(w) {
      var T = Vt(this.that).datum();
      u.call(
        w,
        this.that,
        new Sv(w, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        T
      );
    }
  };
  function V(w, ...T) {
    if (!e.apply(this, arguments)) return;
    var N = S(this, T).event(w), I = this.__zoom, K = Math.max(i[0], Math.min(i[1], I.k * Math.pow(2, r.apply(this, arguments)))), j = Kt(w);
    if (N.wheel)
      (N.mouse[0][0] !== j[0] || N.mouse[0][1] !== j[1]) && (N.mouse[1] = I.invert(N.mouse[0] = j)), clearTimeout(N.wheel);
    else {
      if (I.k === K) return;
      N.mouse = [j, I.invert(j)], Yo(this), N.start();
    }
    Xr(w), N.wheel = setTimeout(H, g), N.zoom("mouse", n(x(C(I, K), N.mouse[0], N.mouse[1]), N.extent, s));
    function H() {
      N.wheel = null, N.end();
    }
  }
  function B(w, ...T) {
    if (p || !e.apply(this, arguments)) return;
    var N = w.currentTarget, I = S(this, T, !0).event(w), K = Vt(w.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", G, !0), j = Kt(w, N), H = w.clientX, F = w.clientY;
    ju(w.view), ji(w), I.mouse = [j, this.__zoom.invert(j)], Yo(this), I.start();
    function q(D) {
      if (Xr(D), !I.moved) {
        var W = D.clientX - H, J = D.clientY - F;
        I.moved = W * W + J * J > y;
      }
      I.event(D).zoom("mouse", n(x(I.that.__zoom, I.mouse[0] = Kt(D, N), I.mouse[1]), I.extent, s));
    }
    function G(D) {
      K.on("mousemove.zoom mouseup.zoom", null), Xu(D.view, I.moved), Xr(D), I.event(D).end();
    }
  }
  function Y(w, ...T) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, I = Kt(w.changedTouches ? w.changedTouches[0] : w, this), K = N.invert(I), j = N.k * (w.shiftKey ? 0.5 : 2), H = n(x(C(N, j), I, K), t.apply(this, T), s);
      Xr(w), a > 0 ? Vt(this).transition().duration(a).call(E, H, I, w) : Vt(this).call($.transform, H, I, w);
    }
  }
  function A(w, ...T) {
    if (e.apply(this, arguments)) {
      var N = w.touches, I = N.length, K = S(this, T, w.changedTouches.length === I).event(w), j, H, F, q;
      for (ji(w), H = 0; H < I; ++H)
        F = N[H], q = Kt(F, this), q = [q, this.__zoom.invert(q), F.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== q[2] && (K.touch1 = q, K.taps = 0) : (K.touch0 = q, j = !0, K.taps = 1 + !!d);
      d && (d = clearTimeout(d)), j && (K.taps < 2 && (f = q[0], d = setTimeout(function() {
        d = null;
      }, h)), Yo(this), K.start());
    }
  }
  function _(w, ...T) {
    if (this.__zooming) {
      var N = S(this, T).event(w), I = w.changedTouches, K = I.length, j, H, F, q;
      for (Xr(w), j = 0; j < K; ++j)
        H = I[j], F = Kt(H, this), N.touch0 && N.touch0[2] === H.identifier ? N.touch0[0] = F : N.touch1 && N.touch1[2] === H.identifier && (N.touch1[0] = F);
      if (H = N.that.__zoom, N.touch1) {
        var G = N.touch0[0], D = N.touch0[1], W = N.touch1[0], J = N.touch1[1], te = (te = W[0] - G[0]) * te + (te = W[1] - G[1]) * te, ne = (ne = J[0] - D[0]) * ne + (ne = J[1] - D[1]) * ne;
        H = C(H, Math.sqrt(te / ne)), F = [(G[0] + W[0]) / 2, (G[1] + W[1]) / 2], q = [(D[0] + J[0]) / 2, (D[1] + J[1]) / 2];
      } else if (N.touch0) F = N.touch0[0], q = N.touch0[1];
      else return;
      N.zoom("touch", n(x(H, F, q), N.extent, s));
    }
  }
  function M(w, ...T) {
    if (this.__zooming) {
      var N = S(this, T).event(w), I = w.changedTouches, K = I.length, j, H;
      for (ji(w), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), j = 0; j < K; ++j)
        H = I[j], N.touch0 && N.touch0[2] === H.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === H.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (H = Kt(H, this), Math.hypot(f[0] - H[0], f[1] - H[1]) < b)) {
        var F = Vt(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Io(+w), $) : r;
  }, $.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Io(!!w), $) : e;
  }, $.touchable = function(w) {
    return arguments.length ? (o = typeof w == "function" ? w : Io(!!w), $) : o;
  }, $.extent = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Io([[+w[0][0], +w[0][1]], [+w[1][0], +w[1][1]]]), $) : t;
  }, $.scaleExtent = function(w) {
    return arguments.length ? (i[0] = +w[0], i[1] = +w[1], $) : [i[0], i[1]];
  }, $.translateExtent = function(w) {
    return arguments.length ? (s[0][0] = +w[0][0], s[1][0] = +w[1][0], s[0][1] = +w[0][1], s[1][1] = +w[1][1], $) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, $.constrain = function(w) {
    return arguments.length ? (n = w, $) : n;
  }, $.duration = function(w) {
    return arguments.length ? (a = +w, $) : a;
  }, $.interpolate = function(w) {
    return arguments.length ? (l = w, $) : l;
  }, $.on = function() {
    var w = u.on.apply(u, arguments);
    return w === u ? $ : w;
  }, $.clickDistance = function(w) {
    return arguments.length ? (y = (w = +w) * w, $) : Math.sqrt(y);
  }, $.tapDistance = function(w) {
    return arguments.length ? (b = +w, $) : b;
  }, $;
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
}, ms = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], lc = ["Enter", " ", "Escape"], Lv = {
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
var zr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(zr || (zr = {}));
var or;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(or || (or = {}));
var li;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(li || (li = {}));
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
var gn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(gn || (gn = {}));
var io;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(io || (io = {}));
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
function tl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Hv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const uc = (e) => "id" in e && "source" in e && "target" in e, zv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), na = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), xo = (e, t = [0, 0]) => {
  const { width: n, height: r } = qn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : na(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? ui(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ti(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Li(n);
}, $o = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Ti(n, ui(o)), r = !0);
  }), r ? Li(n) : { x: 0, y: 0, width: 0, height: 0 };
}, ra = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ..._o(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: f = !0, hidden: p = !1 } = u;
    if (s && !f || p)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, g = d.height ?? u.height ?? u.initialHeight ?? null, y = so(a, Dr(u)), b = (h ?? 0) * (g ?? 0), $ = i && y > 0;
    (!u.internals.handleBounds || $ || y >= b || u.dragging) && l.push(u);
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
  const a = Av(e, s), l = $o(a), u = oa(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function cc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
  else a && Ar(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = Ar(f) ? ur(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", oo.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function Rv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
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
const Vr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ur = (e = { x: 0, y: 0 }, t, n) => ({
  x: Vr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Vr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function dc(e, t, n) {
  const { width: r, height: o } = qn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return ur(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const nl = (e, t, n) => e < t ? Vr(Math.abs(e - t), 1, t) / t : e > n ? -Vr(Math.abs(e - n), 1, t) / t : 0, fc = (e, t, n = 15, r = 40) => {
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
}), Li = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Dr = (e, t = [0, 0]) => {
  const { x: n, y: r } = na(e) ? e.internals.positionAbsolute : xo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, ui = (e, t = [0, 0]) => {
  const { x: n, y: r } = na(e) ? e.internals.positionAbsolute : xo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, pc = (e, t) => Li(Ti(ws(e), ws(t))), so = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, rl = (e) => mn(e.width) && mn(e.height) && mn(e.x) && mn(e.y), mn = (e) => !isNaN(e) && isFinite(e), Zv = (e, t) => {
}, Co = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), _o = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Co(a, s) : a;
}, ci = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function yr(e, t) {
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
function Kv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = yr(e, n), o = yr(e, t);
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
    const r = yr(e.top ?? e.y ?? 0, n), o = yr(e.bottom ?? e.y ?? 0, n), i = yr(e.left ?? e.x ?? 0, t), s = yr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Bv(e, t, n, r, o, i) {
  const { x: s, y: a } = ci(e, [t, n, r]), { x: l, y: u } = ci({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const oa = (e, t, n, r, o, i) => {
  const s = Kv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Vr(u, r, o), f = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - f * d, g = n / 2 - p * d, y = Bv(e, h, g, d, t, n), b = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: h - b.left + b.right,
    y: g - b.top + b.bottom,
    zoom: d
  };
}, Qn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Ar(e) {
  return e != null && e !== "parent";
}
function qn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function hc(e) {
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
function Xv(e) {
  return { ...Lv, ...e || {} };
}
function Xi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = qt(e), a = _o({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Co(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const gc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), vc = (e) => e?.getRootNode?.() || window?.document, Wv = ["INPUT", "SELECT", "TEXTAREA"];
function mc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Wv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const yc = (e) => "clientX" in e, qt = (e, t) => {
  const n = yc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
      ...gc(s)
    };
  });
};
function qv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, d, f];
}
function Ro(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function il({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ye.Left:
      return [t - Ro(t - r, i), n];
    case ye.Right:
      return [t + Ro(r - t, i), n];
    case ye.Top:
      return [t, n - Ro(n - o, i)];
    case ye.Bottom:
      return [t, n + Ro(o - n, i)];
  }
}
function wc({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, curvature: s = 0.25 }) {
  const [a, l] = il({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = il({
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
function bc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Yv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Fv({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ti(ui(e), ui(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return so(s, Li(i)) > 0;
}
const Jv = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Uv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Gv = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return uc(e) ? n = { ...e } : n = {
    ...e,
    id: Jv(e)
  }, Uv(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function xc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = bc({
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
}, Qv = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, al = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function e0({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: r = ye.Top, center: o, offset: i, stepPosition: s }) {
  const a = sl[t], l = sl[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = Qv({
    source: u,
    sourcePosition: t,
    target: d
  }), p = f.x !== 0 ? "x" : "y", h = f[p];
  let g = [], y, b;
  const $ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , x, k] = bc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, b = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, b = o.y ?? u.y + (d.y - u.y) * s);
    const E = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], S = [
      { x: u.x, y: b },
      { x: d.x, y: b }
    ];
    a[p] === h ? g = p === "x" ? E : S : g = p === "x" ? S : E;
  } else {
    const E = [{ x: u.x, y: d.y }], S = [{ x: d.x, y: u.y }];
    if (p === "x" ? g = a.x === h ? S : E : g = a.y === h ? E : S, t === r) {
      const A = Math.abs(e[p] - n[p]);
      if (A <= i) {
        const _ = Math.min(i - 1, i - A);
        a[p] === h ? $[p] = (u[p] > e[p] ? -1 : 1) * _ : C[p] = (d[p] > n[p] ? -1 : 1) * _;
      }
    }
    if (t !== r) {
      const A = p === "x" ? "y" : "x", _ = a[p] === l[A], M = u[A] > d[A], w = u[A] < d[A];
      (a[p] === 1 && (!_ && M || _ && w) || a[p] !== 1 && (!_ && w || _ && M)) && (g = p === "x" ? E : S);
    }
    const O = { x: u.x + $.x, y: u.y + $.y }, V = { x: d.x + C.x, y: d.y + C.y }, B = Math.max(Math.abs(O.x - g[0].x), Math.abs(V.x - g[0].x)), Y = Math.max(Math.abs(O.y - g[0].y), Math.abs(V.y - g[0].y));
    B >= Y ? (y = (O.x + V.x) / 2, b = g[0].y) : (y = g[0].x, b = (O.y + V.y) / 2);
  }
  return [[
    e,
    { x: u.x + $.x, y: u.y + $.y },
    ...g,
    { x: d.x + C.x, y: d.y + C.y },
    n
  ], y, b, x, k];
}
function t0(e, t, n, r) {
  const o = Math.min(al(e, t) / 2, al(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ia({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: r, targetY: o, targetPosition: i = ye.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [f, p, h, g, y] = e0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [f.reduce((b, $, C) => {
    let x = "";
    return C > 0 && C < f.length - 1 ? x = t0(f[C - 1], $, f[C + 1], s) : x = `${C === 0 ? "M" : "L"}${$.x} ${$.y}`, b += x, b;
  }, ""), p, h, g, y];
}
function ll(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function n0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ll(t) || !ll(n))
    return null;
  const r = t.internals.handleBounds || ul(t.handles), o = n.internals.handleBounds || ul(n.handles), i = cl(r?.source ?? [], e.sourceHandle), s = cl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === zr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
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
function ul(e) {
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
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? qn(e);
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
function cl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function bs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function r0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = bs(l, t);
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
const $c = 1e3, i0 = 10, sa = {
  nodeOrigin: [0, 0],
  nodeExtent: ms,
  elevateNodesOnSelect: !0,
  defaults: {}
}, s0 = {
  ...sa,
  checkEquality: !0
};
function aa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function a0(e, t, n) {
  const r = aa(sa, n);
  for (const o of e.values())
    if (o.parentId)
      la(o, e, t, r);
    else {
      const i = xo(o, r.nodeOrigin), s = Ar(o.extent) ? o.extent : r.nodeExtent, a = ur(i, s, qn(o));
      o.internals.positionAbsolute = a;
    }
}
function l0(e, t) {
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
function u0(e, t, n, r) {
  const o = aa(s0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? $c : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const f = xo(u, o.nodeOrigin), p = Ar(u.extent) ? u.extent : o.nodeExtent, h = ur(f, p, qn(u));
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
          handleBounds: l0(u, d),
          z: Cc(u, l),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && la(d, t, n, r, i);
  }
  return s;
}
function c0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function la(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = aa(sa, r), l = e.parentId, u = t.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  c0(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * i0), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? $c : 0, { x: f, y: p, z: h } = d0(e, u, s, a, d), { positionAbsolute: g } = e.internals, y = f !== g.x || p !== g.y;
  (y || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: f, y: p } : g,
      z: h
    }
  });
}
function Cc(e, t) {
  return (mn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function d0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = qn(e), l = xo(e, n), u = Ar(e.extent) ? ur(l, e.extent, a) : l;
  let d = ur({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = dc(d, a, t));
  const f = Cc(e, o), p = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= f ? p + 1 : f
  };
}
function f0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Dr(a), u = pc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = qn(a), f = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, g = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), b = (g - d.width) * f[0], $ = (y - d.height) * f[1];
    (p > 0 || h > 0 || b || $) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + b,
        y: a.position.y - h + $
      }
    }), n.get(l)?.forEach((C) => {
      e.some((x) => x.id === C.id) || o.push({
        id: C.id,
        type: "position",
        position: {
          x: C.position.x + p,
          y: C.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || p || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: g + (p ? f[0] * p - b : 0),
        height: y + (h ? f[1] * h - $ : 0)
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
    const g = gc(p.nodeElement), y = h.measured.width !== g.width || h.measured.height !== g.height;
    if (g.width && g.height && (y || !h.internals.handleBounds || p.force)) {
      const b = p.nodeElement.getBoundingClientRect(), $ = Ar(h.extent) ? h.extent : i;
      let { positionAbsolute: C } = h.internals;
      h.parentId && h.extent === "parent" ? C = dc(C, g, t.get(h.parentId)) : $ && (C = ur(C, $, g));
      const x = {
        ...h,
        measured: g,
        internals: {
          ...h.internals,
          positionAbsolute: C,
          handleBounds: {
            source: ol("source", p.nodeElement, b, d, h.id),
            target: ol("target", p.nodeElement, b, d, h.id)
          }
        }
      };
      t.set(h.id, x), h.parentId && la(x, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: g
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: Dr(x, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = f0(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function h0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function g0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    dl("source", l, d, e, o, s), dl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function v0(e, t) {
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
function _c(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : _c(n, t) : !1;
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
function m0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !_c(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function y0({ dragItems: e, snapGrid: t, x: n, y: r }) {
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
function w0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, f = !1, p = null, h = !1, g = !1, y = null;
  function b({ noDragClassName: C, handleSelector: x, domNode: k, isSelectable: E, nodeId: S, nodeClickDistance: O = 0 }) {
    p = Vt(k);
    function V({ x: _, y: M }) {
      const { nodeLookup: w, nodeExtent: T, snapGrid: N, snapToGrid: I, nodeOrigin: K, onNodeDrag: j, onSelectionDrag: H, onError: F, updateNodePositions: q } = t();
      i = { x: _, y: M };
      let G = !1;
      const D = a.size > 1, W = D && T ? ws($o(a)) : null, J = D && I ? y0({
        dragItems: a,
        snapGrid: N,
        x: _,
        y: M
      }) : null;
      for (const [te, ne] of a) {
        if (!w.has(te))
          continue;
        let Q = { x: _ - ne.distance.x, y: M - ne.distance.y };
        I && (Q = J ? {
          x: Math.round(Q.x + J.x),
          y: Math.round(Q.y + J.y)
        } : Co(Q, N));
        let pe = null;
        if (D && T && !ne.extent && W) {
          const { positionAbsolute: ie } = ne.internals, fe = ie.x - W.x + T[0][0], ve = ie.x + ne.measured.width - W.x2 + T[1][0], xe = ie.y - W.y + T[0][1], de = ie.y + ne.measured.height - W.y2 + T[1][1];
          pe = [
            [fe, xe],
            [ve, de]
          ];
        }
        const { position: ce, positionAbsolute: re } = cc({
          nodeId: te,
          nextPosition: Q,
          nodeLookup: w,
          nodeExtent: pe || T,
          nodeOrigin: K,
          onError: F
        });
        G = G || ne.position.x !== ce.x || ne.position.y !== ce.y, ne.position = ce, ne.internals.positionAbsolute = re;
      }
      if (g = g || G, !!G && (q(a, !0), y && (r || j || !S && H))) {
        const [te, ne] = Wi({
          nodeId: S,
          dragItems: a,
          nodeLookup: w
        });
        r?.(y, a, te, ne), j?.(y, te, ne), S || H?.(y, ne);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: _, panBy: M, autoPanSpeed: w, autoPanOnNodeDrag: T } = t();
      if (!T) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [N, I] = fc(u, d, w);
      (N !== 0 || I !== 0) && (i.x = (i.x ?? 0) - N / _[2], i.y = (i.y ?? 0) - I / _[2], await M({ x: N, y: I }) && V(i)), s = requestAnimationFrame(B);
    }
    function Y(_) {
      const { nodeLookup: M, multiSelectionActive: w, nodesDraggable: T, transform: N, snapGrid: I, snapToGrid: K, selectNodesOnDrag: j, onNodeDragStart: H, onSelectionDragStart: F, unselectNodesAndEdges: q } = t();
      f = !0, (!j || !E) && !w && S && (M.get(S)?.selected || q()), E && j && S && e?.(S);
      const G = Xi(_.sourceEvent, { transform: N, snapGrid: I, snapToGrid: K, containerBounds: d });
      if (i = G, a = m0(M, T, G, S), a.size > 0 && (n || H || !S && F)) {
        const [D, W] = Wi({
          nodeId: S,
          dragItems: a,
          nodeLookup: M
        });
        n?.(_.sourceEvent, a, D, W), H?.(_.sourceEvent, D, W), S || F?.(_.sourceEvent, W);
      }
    }
    const A = Ig().clickDistance(O).on("start", (_) => {
      const { domNode: M, nodeDragThreshold: w, transform: T, snapGrid: N, snapToGrid: I } = t();
      d = M?.getBoundingClientRect() || null, h = !1, g = !1, y = _.sourceEvent, w === 0 && Y(_), i = Xi(_.sourceEvent, { transform: T, snapGrid: N, snapToGrid: I, containerBounds: d }), u = qt(_.sourceEvent, d);
    }).on("drag", (_) => {
      const { autoPanOnNodeDrag: M, transform: w, snapGrid: T, snapToGrid: N, nodeDragThreshold: I, nodeLookup: K } = t(), j = Xi(_.sourceEvent, { transform: w, snapGrid: T, snapToGrid: N, containerBounds: d });
      if (y = _.sourceEvent, (_.sourceEvent.type === "touchmove" && _.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      S && !K.has(S)) && (h = !0), !h) {
        if (!l && M && f && (l = !0, B()), !f) {
          const H = qt(_.sourceEvent, d), F = H.x - u.x, q = H.y - u.y;
          Math.sqrt(F * F + q * q) > I && Y(_);
        }
        (i.x !== j.xSnapped || i.y !== j.ySnapped) && a && f && (u = qt(_.sourceEvent, d), V(j));
      }
    }).on("end", (_) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: M, updateNodePositions: w, onNodeDragStop: T, onSelectionDragStop: N } = t();
        if (g && (w(a, !1), g = !1), o || T || !S && N) {
          const [I, K] = Wi({
            nodeId: S,
            dragItems: a,
            nodeLookup: M,
            dragging: !1
          });
          o?.(_.sourceEvent, a, I, K), T?.(_.sourceEvent, I, K), S || N?.(_.sourceEvent, K);
        }
      }
    }).filter((_) => {
      const M = _.target;
      return !_.button && (!C || !fl(M, `.${C}`, k)) && (!x || fl(M, x, k));
    });
    p.call(A);
  }
  function $() {
    p?.on(".drag", null);
  }
  return {
    update: b,
    destroy: $
  };
}
function b0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    so(o, Dr(i)) > 0 && r.push(i);
  return r;
}
const x0 = 250;
function $0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = b0(e, n, t + x0);
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
function kc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...ao(s, l, l.position, !0) } : l;
}
function Sc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function C0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Pc = () => !0;
function _0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: f, panBy: p, cancelConnection: h, onConnectStart: g, onConnect: y, onConnectEnd: b, isValidConnection: $ = Pc, onReconnectEnd: C, updateConnection: x, getTransform: k, getFromHandle: E, autoPanSpeed: S, dragThreshold: O = 1, handleDomNode: V }) {
  const B = vc(e.target);
  let Y = 0, A;
  const { x: _, y: M } = qt(e), w = Sc(i, V), T = a?.getBoundingClientRect();
  let N = !1;
  if (!T || !w)
    return;
  const I = kc(o, w, r, l, t);
  if (!I)
    return;
  let K = qt(e, T), j = !1, H = null, F = !1, q = null;
  function G() {
    if (!d || !T)
      return;
    const [pe, ce] = fc(K, T, S);
    p({ x: pe, y: ce }), Y = requestAnimationFrame(G);
  }
  const D = {
    ...I,
    nodeId: o,
    type: w,
    position: I.position
  }, W = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: ao(W, D, ye.Left, !0),
    fromHandle: D,
    fromPosition: D.position,
    fromNode: W,
    to: K,
    toHandle: null,
    toPosition: el[D.position],
    toNode: null
  };
  function te() {
    N = !0, x(J), g?.(e, { nodeId: o, handleId: r, handleType: w });
  }
  O === 0 && te();
  function ne(pe) {
    if (!N) {
      const { x: fe, y: ve } = qt(pe), xe = fe - _, de = ve - M;
      if (!(xe * xe + de * de > O * O))
        return;
      te();
    }
    if (!E() || !D) {
      Q(pe);
      return;
    }
    const ce = k();
    K = qt(pe, T), A = $0(_o(K, ce, !1, [1, 1]), n, l, D), j || (G(), j = !0);
    const re = Ec(pe, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: $,
      doc: B,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    q = re.handleDomNode, H = re.connection, F = C0(!!A, re.isValid);
    const ie = {
      // from stays the same
      ...J,
      isValid: F,
      to: re.toHandle && F ? ci({ x: re.toHandle.x, y: re.toHandle.y }, ce) : K,
      toHandle: re.toHandle,
      toPosition: F && re.toHandle ? re.toHandle.position : el[D.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null
    };
    F && A && J.toHandle && ie.toHandle && J.toHandle.type === ie.toHandle.type && J.toHandle.nodeId === ie.toHandle.nodeId && J.toHandle.id === ie.toHandle.id && J.to.x === ie.to.x && J.to.y === ie.to.y || (x(ie), J = ie);
  }
  function Q(pe) {
    if (!("touches" in pe && pe.touches.length > 0)) {
      if (N) {
        (A || q) && H && F && y?.(H);
        const { inProgress: ce, ...re } = J, ie = {
          ...re,
          toPosition: J.toHandle ? J.toPosition : null
        };
        b?.(pe, ie), i && C?.(pe, ie);
      }
      h(), cancelAnimationFrame(Y), j = !1, F = !1, H = null, q = null, B.removeEventListener("mousemove", ne), B.removeEventListener("mouseup", Q), B.removeEventListener("touchmove", ne), B.removeEventListener("touchend", Q);
    }
  }
  B.addEventListener("mousemove", ne), B.addEventListener("mouseup", Q), B.addEventListener("touchmove", ne), B.addEventListener("touchend", Q);
}
function Ec(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Pc, nodeLookup: d }) {
  const f = i === "target", p = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = qt(e), y = s.elementFromPoint(h, g), b = y?.classList.contains(`${a}-flow__handle`) ? y : p, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const C = Sc(void 0, b), x = b.getAttribute("data-nodeid"), k = b.getAttribute("data-handleid"), E = b.classList.contains("connectable"), S = b.classList.contains("connectableend");
    if (!x || !C)
      return $;
    const O = {
      source: f ? x : r,
      sourceHandle: f ? k : o,
      target: f ? r : x,
      targetHandle: f ? o : k
    };
    $.connection = O;
    const V = E && S && (n === zr.Strict ? f && C === "source" || !f && C === "target" : x !== r || k !== o);
    $.isValid = V && u(O), $.toHandle = kc(x, C, k, d, n, !0);
  }
  return $;
}
const pl = {
  onPointerDown: _0,
  isValid: Ec
};
function k0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Vt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: f = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const g = (x) => {
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = n(), E = x.sourceEvent.ctrlKey && Qn() ? 10 : 1, S = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, O = k[2] * Math.pow(2, S * E);
      t.scaleTo(O);
    };
    let y = [0, 0];
    const b = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, $ = (x) => {
      const k = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const E = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], S = [E[0] - y[0], E[1] - y[1]];
      y = E;
      const O = r() * Math.max(k[2], Math.log(k[2])) * (h ? -1 : 1), V = {
        x: k[0] - S[0] * O,
        y: k[1] - S[1] * O
      }, B = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: k[2]
      }, B, a);
    }, C = ac().on("start", b).on("zoom", f ? $ : null).on("zoom.wheel", p ? g : null);
    o.call(C, {});
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
const Oi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), qi = ({ x: e, y: t, zoom: n }) => Mi.translate(e, t).scale(n), br = (e, t) => e.target.closest(`.${t}`), Nc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), S0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Yi = (e, t = 0, n = S0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Mc = (e) => {
  const t = e.ctrlKey && Qn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function P0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (br(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const b = Kt(d), $ = Mc(d), C = f * Math.pow(2, $);
      r.scaleTo(n, C, b, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === or.Vertical ? 0 : d.deltaX * p, g = o === or.Horizontal ? 0 : d.deltaY * p;
    !Qn() && d.shiftKey && o !== or.Vertical && (h = d.deltaY * p, g = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(g / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Oi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      u?.(d, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, y));
  };
}
function E0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = br(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function N0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Oi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Nc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Oi(i.transform));
  };
}
function T0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Nc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Oi(s.transform);
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
    if (f.button === 1 && f.type === "mousedown" && (br(f, `${u}-flow__node`) || br(f, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !g || br(f, a) && g || br(f, l) && (!g || o && g && !e) || !n && f.ctrlKey && g)
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
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), p = ac().clickDistance(!mn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Vt(e).call(p);
  x({
    x: i.x,
    y: i.y,
    zoom: Vr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const g = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  p.wheelDelta(Mc);
  function b(_, M) {
    return h ? new Promise((w) => {
      p?.interpolate(M?.interpolate === "linear" ? Gr : Xo).transform(Yi(h, M?.duration, M?.ease, () => w(!0)), _);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: _, noPanClassName: M, onPaneContextMenu: w, userSelectionActive: T, panOnScroll: N, panOnDrag: I, panOnScrollMode: K, panOnScrollSpeed: j, preventScrolling: H, zoomOnPinch: F, zoomOnScroll: q, zoomOnDoubleClick: G, zoomActivationKeyPressed: D, lib: W, onTransformChange: J, connectionInProgress: te }) {
    T && !d.isZoomingOrPanning && C();
    const ne = N && !D && !T ? P0({
      zoomPanValues: d,
      noWheelClassName: _,
      d3Selection: h,
      d3Zoom: p,
      panOnScrollMode: K,
      panOnScrollSpeed: j,
      zoomOnPinch: F,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : E0({
      noWheelClassName: _,
      preventScrolling: H,
      d3ZoomHandler: g
    });
    if (h.on("wheel.zoom", ne, { passive: !1 }), !T) {
      const pe = N0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      p.on("start", pe);
      const ce = M0({
        zoomPanValues: d,
        panOnDrag: I,
        onPaneContextMenu: !!w,
        onPanZoom: s,
        onTransformChange: J
      });
      p.on("zoom", ce);
      const re = T0({
        zoomPanValues: d,
        panOnDrag: I,
        panOnScroll: N,
        onPaneContextMenu: w,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      p.on("end", re);
    }
    const Q = L0({
      zoomActivationKeyPressed: D,
      panOnDrag: I,
      zoomOnScroll: q,
      panOnScroll: N,
      zoomOnDoubleClick: G,
      zoomOnPinch: F,
      userSelectionActive: T,
      noPanClassName: M,
      noWheelClassName: _,
      lib: W,
      connectionInProgress: te
    });
    p.filter(Q), G ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function C() {
    p.on("zoom", null);
  }
  async function x(_, M, w) {
    const T = qi(_), N = p?.constrain()(T, M, w);
    return N && await b(N), new Promise((I) => I(N));
  }
  async function k(_, M) {
    const w = qi(_);
    return await b(w, M), new Promise((T) => T(w));
  }
  function E(_) {
    if (h) {
      const M = qi(_), w = h.property("__zoom");
      (w.k !== _.zoom || w.x !== _.x || w.y !== _.y) && p?.transform(h, M, null, { sync: !0 });
    }
  }
  function S() {
    const _ = h ? sc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function O(_, M) {
    return h ? new Promise((w) => {
      p?.interpolate(M?.interpolate === "linear" ? Gr : Xo).scaleTo(Yi(h, M?.duration, M?.ease, () => w(!0)), _);
    }) : Promise.resolve(!1);
  }
  function V(_, M) {
    return h ? new Promise((w) => {
      p?.interpolate(M?.interpolate === "linear" ? Gr : Xo).scaleBy(Yi(h, M?.duration, M?.ease, () => w(!0)), _);
    }) : Promise.resolve(!1);
  }
  function B(_) {
    p?.scaleExtent(_);
  }
  function Y(_) {
    p?.translateExtent(_);
  }
  function A(_) {
    const M = !mn(_) || _ < 0 ? 0 : _;
    p?.clickDistance(M);
  }
  return {
    update: $,
    destroy: C,
    setViewport: k,
    setViewportConstrained: x,
    getViewport: S,
    scaleTo: O,
    scaleBy: V,
    setScaleExtent: B,
    setTranslateExtent: Y,
    syncViewport: E,
    setClickDistance: A
  };
}
var hl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(hl || (hl = {}));
var H0 = /* @__PURE__ */ ee("<div><!></div>");
function Rn(e, t) {
  le(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => ye.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), f = m(t, "onconnect", 7), p = m(t, "ondisconnect", 7), h = m(t, "children", 7), g = /* @__PURE__ */ De(t, [
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
  const y = An("svelteflow__node_id"), b = An("svelteflow__node_connectable");
  let $ = /* @__PURE__ */ P(() => r() === "target"), C = /* @__PURE__ */ P(() => a() !== void 0 ? a() : b.value), x = en(), k = /* @__PURE__ */ P(() => x.ariaLabelConfig), E = null;
  lu(() => {
    if (f() || p()) {
      x.edges;
      let H = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (E && !Ov(H, E)) {
        const F = H ?? /* @__PURE__ */ new Map();
        tl(E, F, p()), tl(F, E, f());
      }
      E = new Map(H);
    }
  });
  let S = /* @__PURE__ */ P(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: H, toHandle: F, isValid: q } = x.connection, G = H && H.nodeId === y && H.type === r() && H.id === n(), D = F && F.nodeId === y && F.type === r() && F.id === n(), W = x.connectionMode === zr.Strict ? H?.type !== r() : y !== H?.nodeId || n() !== H?.id;
    return [
      !0,
      G,
      D,
      W,
      D && q
    ];
  }), O = /* @__PURE__ */ P(() => po(c(S), 5)), V = /* @__PURE__ */ P(() => c(O)[0]), B = /* @__PURE__ */ P(() => c(O)[1]), Y = /* @__PURE__ */ P(() => c(O)[2]), A = /* @__PURE__ */ P(() => c(O)[3]), _ = /* @__PURE__ */ P(() => c(O)[4]);
  function M(H) {
    const F = x.onbeforeconnect ? x.onbeforeconnect(H) : H;
    F && (x.addEdge(F), x.onconnect?.(H));
  }
  function w(H) {
    const F = yc(H);
    H.currentTarget && (F && H.button === 0 || !F) && pl.onPointerDown(H, {
      handleId: n(),
      nodeId: y,
      isTarget: c($),
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
      onConnect: M,
      onConnectStart: (q, G) => {
        x.onconnectstart?.(q, {
          nodeId: G.nodeId,
          handleId: G.handleId,
          handleType: G.handleType
        });
      },
      onConnectEnd: (q, G) => {
        x.onconnectend?.(q, G);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold,
      handleDomNode: H.currentTarget
    });
  }
  function T(H) {
    if (!y || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(H, { nodeId: y, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const F = vc(H.target), q = d() ?? x.isValidConnection, { connectionMode: G, clickConnectStartHandle: D, flowId: W, nodeLookup: J } = x, { connection: te, isValid: ne } = pl.isValid(H, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: G,
      fromNodeId: D.nodeId,
      fromHandleId: D.id ?? null,
      fromType: D.type,
      isValidConnection: q,
      flowId: W,
      doc: F,
      lib: "svelte",
      nodeLookup: J
    });
    ne && te && M(te);
    const Q = structuredClone(Bl(x.connection));
    delete Q.inProgress, Q.toPosition = Q.toHandle ? Q.toHandle.position : null, x.onclickconnectend?.(H, Q), x.clickConnectStartHandle = null;
  }
  var N = {
    get id() {
      return n();
    },
    set id(H = null) {
      n(H), v();
    },
    get type() {
      return r();
    },
    set type(H = "source") {
      r(H), v();
    },
    get position() {
      return o();
    },
    set position(H = ye.Top) {
      o(H), v();
    },
    get style() {
      return i();
    },
    set style(H) {
      i(H), v();
    },
    get class() {
      return s();
    },
    set class(H) {
      s(H), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(H) {
      a(H), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(H = !0) {
      l(H), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(H = !0) {
      u(H), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(H) {
      d(H), v();
    },
    get onconnect() {
      return f();
    },
    set onconnect(H) {
      f(H), v();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(H) {
      p(H), v();
    },
    get children() {
      return h();
    },
    set children(H) {
      h(H), v();
    }
  }, I = H0(), K = () => {
  };
  tt(
    I,
    (H) => ({
      "data-handleid": n(),
      "data-nodeid": y,
      "data-handlepos": o(),
      "data-id": `${x.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        x.noDragClass,
        x.noPanClass,
        o(),
        s()
      ],
      onmousedown: w,
      ontouchstart: w,
      onclick: x.clickConnect ? T : void 0,
      onkeypress: K,
      style: i(),
      role: "button",
      "aria-label": c(k)["handle.ariaLabel"],
      tabindex: "-1",
      ...g,
      [On]: H
    }),
    [
      () => ({
        valid: c(_),
        connectingto: c(Y),
        connectingfrom: c(B),
        source: !c($),
        target: c($),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(C),
        connectionindicator: c(C) && (!c(V) || c(A)) && (c(V) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var j = Z(I);
  return Ye(j, () => h() ?? ft), R(I), L(e, I), ue(N);
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
var z0 = /* @__PURE__ */ ee("<!> <!>", 1);
function ua(e, t) {
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
  }, s = z0(), a = oe(s);
  Rn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = z(a), u = z(l);
  return Rn(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ce(() => Ke(l, ` ${n()?.label ?? ""} `)), L(e, s), ue(i);
}
se(ua, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var V0 = /* @__PURE__ */ ee(" <!>", 1);
function Tc(e, t) {
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
  me();
  var i = V0(), s = oe(i), a = z(s);
  return Rn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ce(() => Ke(s, `${n()?.label ?? ""} `)), L(e, i), ue(o);
}
se(Tc, { data: {}, sourcePosition: {} }, [], [], !0);
var D0 = /* @__PURE__ */ ee(" <!>", 1);
function Lc(e, t) {
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
  me();
  var i = D0(), s = oe(i), a = z(s);
  return Rn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ce(() => Ke(s, `${n()?.label ?? ""} `)), L(e, i), ue(o);
}
se(Lc, { data: {}, targetPosition: {} }, [], [], !0);
function Oc(e, t) {
}
se(Oc, {}, [], [], !0);
function Fi(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Hc(e, t) {
  const n = /* @__PURE__ */ P(en), r = /* @__PURE__ */ P(() => c(n).domNode);
  let o;
  return c(r) ? Fi(e, c(r), t) : o = Zs(() => {
    We(() => {
      Fi(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Fi(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function zc() {
  let e = /* @__PURE__ */ Ee(typeof window > "u");
  if (c(e)) {
    const t = Zs(() => {
      We(() => {
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
const gl = (e) => zv(e), A0 = (e) => uc(e);
function dn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const di = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var I0 = /* @__PURE__ */ ee("<div><!></div>");
const R0 = {
  hash: "svelte-1r69ejc",
  code: ".transparent.svelte-1r69ejc {background:transparent;}"
};
function Vc(e, t) {
  le(t, !0), Ve(e, R0);
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
  const f = en(), p = An("svelteflow__edge_id");
  let h = /* @__PURE__ */ P(() => f.visible.edges.get(p)?.zIndex);
  var g = {
    get x() {
      return n();
    },
    set x(C = 0) {
      n(C), v();
    },
    get y() {
      return r();
    },
    set y(C = 0) {
      r(C), v();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), v();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(C = !1) {
      s(C), v();
    },
    get transparent() {
      return a();
    },
    set transparent(C = !1) {
      a(C), v();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), v();
    },
    get children() {
      return u();
    },
    set children(C) {
      u(C), v();
    }
  }, y = I0(), b = () => {
    s() && p && f.handleEdgeSelection(p);
  };
  tt(
    y,
    (C) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: b,
      ...d,
      [an]: C
    }),
    [
      () => ({
        display: zc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: dn(o()),
        height: dn(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    "svelte-1r69ejc"
  );
  var $ = Z(y);
  return Ye($, () => u() ?? ft), R(y), dt(y, (C, x) => Hc?.(C, x), () => "edge-labels"), L(e, y), ue(g);
}
se(
  Vc,
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
var Z0 = /* @__PURE__ */ he("<path></path>"), K0 = /* @__PURE__ */ he('<path fill="none"></path><!><!>', 1);
function ko(e, t) {
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
    set id(E) {
      n(E), v();
    },
    get path() {
      return r();
    },
    set path(E) {
      r(E), v();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), v();
    },
    get labelX() {
      return i();
    },
    set labelX(E) {
      i(E), v();
    },
    get labelY() {
      return s();
    },
    set labelY(E) {
      s(E), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(E) {
      a(E), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(E) {
      l(E), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(E) {
      u(E), v();
    },
    get style() {
      return d();
    },
    set style(E) {
      d(E), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(E = 20) {
      f(E), v();
    },
    get class() {
      return p();
    },
    set class(E) {
      p(E), v();
    }
  }, y = K0(), b = oe(y), $ = z(b);
  {
    var C = (E) => {
      var S = Z0();
      tt(S, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), L(E, S);
    };
    ae($, (E) => {
      f() > 0 && E(C);
    });
  }
  var x = z($);
  {
    var k = (E) => {
      Vc(E, {
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
        children: (S, O) => {
          me();
          var V = _e();
          Ce(() => Ke(V, o())), L(S, V);
        },
        $$slots: { default: !0 }
      });
    };
    ae(x, (E) => {
      o() && E(k);
    });
  }
  return Ce(() => {
    be(b, "id", n()), be(b, "d", r()), Pt(b, 0, Pn(["svelte-flow__edge-path", p()])), be(b, "marker-start", l()), be(b, "marker-end", u()), ct(b, d());
  }), L(e, y), ue(g);
}
se(
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
function ca(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), f = m(t, "sourceY", 7), p = m(t, "style", 7), h = m(t, "targetPosition", 7), g = m(t, "targetX", 7), y = m(t, "targetY", 7), b = /* @__PURE__ */ P(() => wc({
    sourceX: d(),
    sourceY: f(),
    targetX: g(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), $ = /* @__PURE__ */ P(() => po(c(b), 3)), C = /* @__PURE__ */ P(() => c($)[0]), x = /* @__PURE__ */ P(() => c($)[1]), k = /* @__PURE__ */ P(() => c($)[2]);
  var E = {
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
      return c(C);
    },
    get labelX() {
      return c(x);
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
  }), ue(E);
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
function Dc(e, t) {
  le(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), f = m(t, "targetPosition", 7), p = m(t, "targetX", 7), h = m(t, "targetY", 7), g = /* @__PURE__ */ P(() => ia({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: f()
  })), y = /* @__PURE__ */ P(() => po(c(g), 3)), b = /* @__PURE__ */ P(() => c(y)[0]), $ = /* @__PURE__ */ P(() => c(y)[1]), C = /* @__PURE__ */ P(() => c(y)[2]);
  var x = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(k) {
      n(k), v();
    },
    get label() {
      return r();
    },
    set label(k) {
      r(k), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(k) {
      o(k), v();
    },
    get style() {
      return i();
    },
    set style(k) {
      i(k), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(k) {
      l(k), v();
    },
    get sourceX() {
      return u();
    },
    set sourceX(k) {
      u(k), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(k) {
      d(k), v();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(k) {
      f(k), v();
    },
    get targetX() {
      return p();
    },
    set targetX(k) {
      p(k), v();
    },
    get targetY() {
      return h();
    },
    set targetY(k) {
      h(k), v();
    }
  };
  return ko(e, {
    get path() {
      return c(b);
    },
    get labelX() {
      return c($);
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
  }), ue(x);
}
se(
  Dc,
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
function Ac(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), f = m(t, "style", 7), p = /* @__PURE__ */ P(() => xc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ P(() => po(c(p), 3)), g = /* @__PURE__ */ P(() => c(h)[0]), y = /* @__PURE__ */ P(() => c(h)[1]), b = /* @__PURE__ */ P(() => c(h)[2]);
  var $ = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), v();
    },
    get targetX() {
      return o();
    },
    set targetX(C) {
      o(C), v();
    },
    get targetY() {
      return i();
    },
    set targetY(C) {
      i(C), v();
    },
    get label() {
      return s();
    },
    set label(C) {
      s(C), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), v();
    },
    get style() {
      return f();
    },
    set style(C) {
      f(C), v();
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
      return c(b);
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
  }), ue($);
}
se(
  Ac,
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
function Ic(e, t) {
  le(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), f = m(t, "markerEnd", 7), p = m(t, "interactionWidth", 7), h = m(t, "style", 7), g = /* @__PURE__ */ P(() => ia({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ P(() => po(c(g), 3)), b = /* @__PURE__ */ P(() => c(y)[0]), $ = /* @__PURE__ */ P(() => c(y)[1]), C = /* @__PURE__ */ P(() => c(y)[2]);
  var x = {
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
    get sourcePosition() {
      return o();
    },
    set sourcePosition(k) {
      o(k), v();
    },
    get targetX() {
      return i();
    },
    set targetX(k) {
      i(k), v();
    },
    get targetY() {
      return s();
    },
    set targetY(k) {
      s(k), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(k) {
      a(k), v();
    },
    get label() {
      return l();
    },
    set label(k) {
      l(k), v();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(k) {
      u(k), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(k) {
      d(k), v();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(k) {
      f(k), v();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(k) {
      p(k), v();
    },
    get style() {
      return h();
    },
    set style(k) {
      h(k), v();
    }
  };
  return ko(e, {
    get path() {
      return c(b);
    },
    get labelX() {
      return c($);
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
      return f();
    },
    get interactionWidth() {
      return p();
    },
    get style() {
      return h();
    }
  }), ue(x);
}
se(
  Ic,
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
    this.#t = t, this.#e = Ul(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const j0 = /\(.+\)/, X0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class W0 extends B0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = j0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => X0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => as(o, "change", i)
    );
  }
}
function q0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ra(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function vl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), p = r.get(d.target);
    if (!f || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: b, width: $, height: C } = e;
      if (Fv({
        sourceNode: f,
        targetNode: p,
        width: $,
        height: C,
        transform: b
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
const Rc = {
  input: Tc,
  output: Lc,
  default: ua,
  group: Oc
}, Zc = {
  straight: Ac,
  smoothstep: Dc,
  default: ca,
  step: Ic
};
function Y0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = $o(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return oa(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function F0(e) {
  class t {
    #t = /* @__PURE__ */ P(() => e.props.id ?? "1");
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
    #n = /* @__PURE__ */ Ee(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      U(this.#n, r);
    }
    #r = /* @__PURE__ */ Ee(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      U(this.#r, r);
    }
    #a = /* @__PURE__ */ Ee(e.height ?? 0);
    get height() {
      return c(this.#a);
    }
    set height(r) {
      U(this.#a, r);
    }
    #s = /* @__PURE__ */ P(() => {
      const r = u0(e.nodes, this.nodeLookup, this.parentLookup, {
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
    #i = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#i);
    }
    set viewportInitialized(r) {
      U(this.#i, r);
    }
    #o = /* @__PURE__ */ P(() => (g0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#o);
    }
    set _edges(r) {
      U(this.#o, r);
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
    #l = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      U(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      U(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ P(() => {
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
        const { viewport: g, width: y, height: b } = this, $ = [g.x, g.y, g.zoom];
        f = q0(s, $, y, b), p = vl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: $,
          width: y,
          height: b
        });
      } else
        f = this.nodeLookup, p = vl(h);
      return { nodes: f, edges: p };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      U(this.#c, r);
    }
    #d = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      U(this.#d, r);
    }
    #p = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#p);
    }
    set nodesConnectable(r) {
      U(this.#p, r);
    }
    #f = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#f);
    }
    set elementsSelectable(r) {
      U(this.#f, r);
    }
    #m = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#m);
    }
    set nodesFocusable(r) {
      U(this.#m, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      U(this.#y, r);
    }
    #w = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#w);
    }
    set disableKeyboardA11y(r) {
      U(this.#w, r);
    }
    #b = /* @__PURE__ */ P(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#b);
    }
    set minZoom(r) {
      U(this.#b, r);
    }
    #h = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#h);
    }
    set maxZoom(r) {
      U(this.#h, r);
    }
    #g = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      U(this.#g, r);
    }
    #v = /* @__PURE__ */ P(() => e.props.nodeExtent ?? ms);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      U(this.#v, r);
    }
    #x = /* @__PURE__ */ P(() => e.props.translateExtent ?? ms);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      U(this.#x, r);
    }
    #$ = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#$);
    }
    set defaultEdgeOptions(r) {
      U(this.#$, r);
    }
    #C = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      U(this.#C, r);
    }
    #_ = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#_);
    }
    set autoPanOnNodeDrag(r) {
      U(this.#_, r);
    }
    #k = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      U(this.#k, r);
    }
    #S = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      U(this.#S, r);
    }
    #P = /* @__PURE__ */ P(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#P);
    }
    set autoPanSpeed(r) {
      U(this.#P, r);
    }
    #E = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      U(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      U(this.#N, r);
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
    #H = /* @__PURE__ */ Ee(!1);
    get deleteKeyPressed() {
      return c(this.#H);
    }
    set deleteKeyPressed(r) {
      U(this.#H, r);
    }
    #z = /* @__PURE__ */ Ee(!1);
    get panActivationKeyPressed() {
      return c(this.#z);
    }
    set panActivationKeyPressed(r) {
      U(this.#z, r);
    }
    #V = /* @__PURE__ */ Ee(!1);
    get zoomActivationKeyPressed() {
      return c(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      U(this.#V, r);
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
    #I = /* @__PURE__ */ P(() => e.props.selectionMode ?? li.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      U(this.#I, r);
    }
    #R = /* @__PURE__ */ P(() => ({ ...Rc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      U(this.#R, r);
    }
    #Z = /* @__PURE__ */ P(() => ({ ...Zc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#Z);
    }
    set edgeTypes(r) {
      U(this.#Z, r);
    }
    #K = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#K);
    }
    set noPanClass(r) {
      U(this.#K, r);
    }
    #B = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#B);
    }
    set noDragClass(r) {
      U(this.#B, r);
    }
    #j = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#j);
    }
    set noWheelClass(r) {
      U(this.#j, r);
    }
    #X = /* @__PURE__ */ P(() => Xv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#X);
    }
    set ariaLabelConfig(r) {
      U(this.#X, r);
    }
    #W = /* @__PURE__ */ Ee(Y0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#W);
    }
    set _viewport(r) {
      U(this.#W, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #q = /* @__PURE__ */ Ee(
      // _connection is viewport independent and originating from XYHandle
      ys
    );
    get _connection() {
      return c(this.#q);
    }
    set _connection(r) {
      U(this.#q, r);
    }
    #Y = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: _o(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#Y);
    }
    set connection(r) {
      U(this.#Y, r);
    }
    #F = /* @__PURE__ */ P(() => e.props.connectionMode ?? zr.Strict);
    get connectionMode() {
      return c(this.#F);
    }
    set connectionMode(r) {
      U(this.#F, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#J);
    }
    set connectionRadius(r) {
      U(this.#J, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      U(this.#U, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#G);
    }
    set selectNodesOnDrag(r) {
      U(this.#G, r);
    }
    #Q = /* @__PURE__ */ P(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      U(this.#Q, r);
    }
    #ee = /* @__PURE__ */ P(() => r0(e.edges, {
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
    #te = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      U(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => e.props.onflowerror ?? Zv);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      U(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      U(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      U(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      U(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      U(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      U(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      U(this.#le, r);
    }
    #ue = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      U(this.#ue, r);
    }
    #ce = /* @__PURE__ */ P(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      U(this.#ce, r);
    }
    #de = /* @__PURE__ */ P(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      U(this.#de, r);
    }
    #fe = /* @__PURE__ */ P(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      U(this.#fe, r);
    }
    #pe = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      U(this.#pe, r);
    }
    #he = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      U(this.#he, r);
    }
    #ge = /* @__PURE__ */ P(() => e.props.onclickconnectend);
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
    #me = /* @__PURE__ */ P(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      U(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      U(this.#ye, r);
    }
    #we = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
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
    _prefersDark = new W0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      U(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ys, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function en() {
  const e = An(fi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const fi = Symbol();
function Kc(e) {
  const t = F0(e);
  function n(A) {
    t.nodeTypes = {
      ...Rc,
      ...A
    };
  }
  function r(A) {
    t.edgeTypes = {
      ...Zc,
      ...A
    };
  }
  function o(A) {
    t.edges = Gv(A, t.edges);
  }
  const i = (A, _ = !1) => {
    t.nodes = t.nodes.map((M) => {
      const w = A.get(M.id);
      return w ? { ...M, position: w.position, dragging: _ } : M;
    });
  };
  function s(A) {
    const { changes: _, updatedInternals: M } = p0(A, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!M)
      return;
    a0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const w = /* @__PURE__ */ new Map();
    for (const T of _) {
      const N = t.nodeLookup.get(T.id)?.internals.userNode;
      if (!N)
        continue;
      const I = { ...N };
      switch (T.type) {
        case "dimensions": {
          const K = { ...I.measured, ...T.dimensions };
          T.setAttributes && (I.width = T.dimensions?.width ?? I.width, I.height = T.dimensions?.height ?? I.height), I.measured = K;
          break;
        }
        case "position":
          I.position = T.position ?? I.position;
          break;
      }
      w.set(T.id, I);
    }
    t.nodes = t.nodes.map((T) => w.get(T.id) ?? T);
  }
  function a(A) {
    const _ = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = A, t.fitViewResolver = _, t.nodes = [...t.nodes], _.promise;
  }
  async function l(A, _, M) {
    const w = typeof M?.zoom < "u" ? M.zoom : t.maxZoom, T = t.panZoom;
    return T ? (await T.setViewport({
      x: t.width / 2 - A * w,
      y: t.height / 2 - _ * w,
      zoom: w
    }, { duration: M?.duration, ease: M?.ease, interpolate: M?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(A, _) {
    const M = t.panZoom;
    return M ? M.scaleBy(A, _) : Promise.resolve(!1);
  }
  function d(A) {
    return u(1.2, A);
  }
  function f(A) {
    return u(1 / 1.2, A);
  }
  function p(A) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([A, t.maxZoom]), t.minZoom = A);
  }
  function h(A) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([t.minZoom, A]), t.maxZoom = A);
  }
  function g(A) {
    const _ = t.panZoom;
    _ && (_.setTranslateExtent(A), t.translateExtent = A);
  }
  function y(A) {
    t.panZoom?.setClickDistance(A);
  }
  function b(A, _ = null) {
    let M = !1;
    const w = A.map((T) => (!_ || _.has(T.id)) && T.selected ? (M = !0, { ...T, selected: !1 }) : T);
    return [M, w];
  }
  function $(A) {
    const _ = A?.nodes ? new Set(A.nodes.map((K) => K.id)) : null, [M, w] = b(t.nodes, _);
    M && (t.nodes = w);
    const T = A?.edges ? new Set(A.edges.map((K) => K.id)) : null, [N, I] = b(t.edges, T);
    N && (t.edges = I);
  }
  function C(A) {
    const _ = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((M) => {
      const w = A.includes(M.id), T = _ && M.selected || w;
      return !!M.selected !== T ? { ...M, selected: T } : M;
    }), _ || $({ nodes: [] });
  }
  function x(A) {
    const _ = t.multiselectionKeyPressed;
    t.edges = t.edges.map((M) => {
      const w = A.includes(M.id), T = _ && M.selected || w;
      return !!M.selected !== T ? { ...M, selected: T } : M;
    }), _ || $({ edges: [] });
  }
  function k(A, _, M) {
    const w = t.nodeLookup.get(A);
    if (!w) {
      console.warn("012", oo.error012(A));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, w.selected ? (_ || w.selected && t.multiselectionKeyPressed) && ($({ nodes: [w], edges: [] }), requestAnimationFrame(() => M?.blur())) : C([A]);
  }
  function E(A) {
    const _ = t.edgeLookup.get(A);
    if (!_) {
      console.warn("012", oo.error012(A));
      return;
    }
    (_.selectable || t.elementsSelectable && typeof _.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, _.selected ? _.selected && t.multiselectionKeyPressed && $({ nodes: [], edges: [_] }) : x([A]));
  }
  function S(A, _) {
    const { nodeExtent: M, snapGrid: w, nodeOrigin: T, nodeLookup: N, nodesDraggable: I, onerror: K } = t, j = /* @__PURE__ */ new Map(), H = w?.[0] ?? 5, F = w?.[1] ?? 5, q = A.x * H * _, G = A.y * F * _;
    for (const D of N.values()) {
      if (!(D.selected && (D.draggable || I && typeof D.draggable > "u")))
        continue;
      let W = {
        x: D.internals.positionAbsolute.x + q,
        y: D.internals.positionAbsolute.y + G
      };
      w && (W = Co(W, w));
      const { position: J, positionAbsolute: te } = cc({
        nodeId: D.id,
        nextPosition: W,
        nodeLookup: N,
        nodeExtent: M,
        nodeOrigin: T,
        onError: K
      });
      D.position = J, D.internals.positionAbsolute = te, j.set(D.id, D);
    }
    i(j);
  }
  function O(A) {
    return h0({
      delta: A,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const V = (A) => {
    t._connection = { ...A };
  };
  function B() {
    t._connection = ys;
  }
  function Y() {
    t.resetStoreValues(), $();
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
    unselectNodesAndEdges: $,
    addSelectedNodes: C,
    addSelectedEdges: x,
    handleNodeSelection: k,
    handleEdgeSelection: E,
    moveSelectedNodes: S,
    panBy: O,
    updateConnection: V,
    cancelConnection: B,
    reset: Y
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
function Bc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 7), o = m(t, "preventScrolling", 7), i = m(t, "zoomOnScroll", 7), s = m(t, "zoomOnDoubleClick", 7), a = m(t, "zoomOnPinch", 7), l = m(t, "panOnDrag", 7), u = m(t, "panOnScroll", 7), d = m(t, "panOnScrollSpeed", 7), f = m(t, "paneClickDistance", 7), p = m(t, "onmovestart", 7), h = m(t, "onmove", 7), g = m(t, "onmoveend", 7), y = m(t, "oninit", 7), b = m(t, "children", 7), $ = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), C = /* @__PURE__ */ P(() => n().panActivationKeyPressed || u());
  const { viewport: x } = n();
  let k = !1;
  We(() => {
    !k && n().viewportInitialized && (y()?.(), k = !0);
  });
  var E = {
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
      return u();
    },
    set panOnScroll(V) {
      u(V), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(V) {
      d(V), v();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(V) {
      f(V), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(V) {
      p(V), v();
    },
    get onmove() {
      return h();
    },
    set onmove(V) {
      h(V), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(V) {
      g(V), v();
    },
    get oninit() {
      return y();
    },
    set oninit(V) {
      y(V), v();
    },
    get children() {
      return b();
    },
    set children(V) {
      b(V), v();
    }
  }, S = U0(), O = Z(S);
  return Ye(O, b), R(S), dt(S, (V, B) => J0?.(V, B), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: (V) => {
      n(n().dragging = V, !0);
    },
    setPanZoomInstance: (V) => {
      n(n().panZoom = V, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: h(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(C),
    panOnDrag: c($),
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
    onTransformChange: (V) => {
      n(n().viewport = { x: V[0], y: V[1], zoom: V[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), L(e, S), ue(E);
}
se(
  Bc,
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
var G0 = /* @__PURE__ */ ee("<div><!></div>");
function jc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, f = null, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ P(() => n().selectionKeyPressed || n().selectionRect || o() && c(g) !== !0), b = /* @__PURE__ */ P(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), $ = !1;
  function C(w) {
    if ($ || n().connection.inProgress) {
      $ = !1;
      return;
    }
    i()?.({ event: w }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(w) {
    f = d?.getBoundingClientRect();
    const T = w.target !== d && !!w.target.closest(".nokey"), N = o() && d === w.target || !o() || n().selectionKeyPressed;
    if (!n().elementsSelectable || !c(y) || w.button !== 0 || !f || T || !N || !w.isPrimary)
      return;
    w.stopPropagation(), w.preventDefault(), w.target?.setPointerCapture?.(w.pointerId);
    const { x: I, y: K } = qt(w, f);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: I, startY: K, x: I, y: K }, !0), a()?.(w);
  }
  function k(w) {
    if (!c(y) || !f || !n().selectionRect)
      return;
    $ = !0;
    const T = qt(w, f), { startX: N = 0, startY: I = 0 } = n().selectionRect, K = {
      ...n().selectionRect,
      x: T.x < N ? T.x : N,
      y: T.y < I ? T.y : I,
      width: Math.abs(T.x - N),
      height: Math.abs(T.y - I)
    }, j = p, H = h;
    p = new Set(ra(
      n().nodeLookup,
      K,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === li.Partial,
      !0
    ).map((q) => q.id));
    const F = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const q of p) {
      const G = n().connectionLookup.get(q);
      if (G)
        for (const { edgeId: D } of G.values()) {
          const W = n().edgeLookup.get(D);
          W && (W.selectable ?? F) && h.add(D);
        }
    }
    wl(j, p) || n(n().nodes = n().nodes.map(yl(p)), !0), wl(H, h) || n(n().edges = n().edges.map(yl(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = K, !0);
  }
  function E(w) {
    w.button === 0 && (w.target?.releasePointerCapture?.(w.pointerId), !c(y) && n().selectionRectMode === "user" && w.target === d && C?.(w), n(n().selectionRect = null, !0), p.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && ($ = !1), l()?.(w));
  }
  const S = (w) => {
    if (Array.isArray(c(g)) && c(g).includes(2)) {
      w.preventDefault();
      return;
    }
    s()?.({ event: w });
  }, O = (w) => {
    (o() && d === w.target || !o() || n().selectionKeyPressed) && w.stopPropagation();
  };
  var V = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(w = !0) {
      r(w), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(w) {
      o(w), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(w) {
      i(w), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(w) {
      s(w), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(w) {
      a(w), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(w) {
      l(w), v();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), v();
    }
  }, B = G0();
  let Y;
  var A = /* @__PURE__ */ P(() => c(b) ? void 0 : ml(C, d));
  B.__click = function(...w) {
    c(A)?.apply(this, w);
  }, B.__pointermove = function(...w) {
    (c(b) ? k : void 0)?.apply(this, w);
  }, B.__pointerup = function(...w) {
    (c(b) ? E : void 0)?.apply(this, w);
  };
  var _ = /* @__PURE__ */ P(() => ml(S, d));
  B.__contextmenu = function(...w) {
    c(_)?.apply(this, w);
  };
  var M = Z(B);
  return Ye(M, u), R(B), Ot(B, (w) => d = w, () => d), Ce((w) => Y = Pt(B, 1, "svelte-flow__pane svelte-flow__container", null, Y, w), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), ei(
    "pointerdown",
    B,
    function(...w) {
      (c(b) ? x : void 0)?.apply(this, w);
    },
    !0
  ), ei(
    "click",
    B,
    function(...w) {
      (c(b) ? O : void 0)?.apply(this, w);
    },
    !0
  ), L(e, B), ue(V);
}
Wn(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  jc,
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
function Xc(e, t) {
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
  var a = Z(i);
  return Ye(a, r), R(i), Ce((l) => s = ct(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), L(e, i), ue(o);
}
se(Xc, { store: {}, children: {} }, [], [], !0);
function Wc(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = w0({
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
var em = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1cazx9o"> </div>'), tm = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-1cazx9o"> </div> <div class="a11y-hidden svelte-1cazx9o"> </div> <!>', 1);
const nm = {
  hash: "svelte-1cazx9o",
  code: ".a11y-hidden.svelte-1cazx9o {display:none;}.a11y-live-msg.svelte-1cazx9o {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function qc(e, t) {
  le(t, !0), Ve(e, nm);
  let n = m(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    }
  }, o = tm(), i = oe(o), s = Z(i, !0);
  R(i);
  var a = z(i, 2), l = Z(a, !0);
  R(a);
  var u = z(a, 2);
  {
    var d = (f) => {
      var p = em(), h = Z(p, !0);
      R(p), Ce(() => {
        be(p, "id", `${rm}-${n().flowId}`), Ke(h, n().ariaLiveMessage);
      }), L(f, p);
    };
    ae(u, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Ce(() => {
    be(i, "id", `${Yc}-${n().flowId}`), Ke(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), be(a, "id", `${Fc}-${n().flowId}`), Ke(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), L(e, o), ue(r);
}
se(qc, { store: {} }, [], [], !0);
const Yc = "svelte-flow__node-desc", Fc = "svelte-flow__edge-desc", rm = "svelte-flow__aria-live";
var om = /* @__PURE__ */ ee("<div><!></div>");
function Jc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), f = m(t, "onnodepointerleave", 7), p = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), g = /* @__PURE__ */ P(() => gt(r().data, () => ({}), !0)), y = /* @__PURE__ */ P(() => gt(r().selected, !1)), b = /* @__PURE__ */ P(() => r().draggable), $ = /* @__PURE__ */ P(() => r().selectable), C = /* @__PURE__ */ P(() => gt(r().deletable, !0)), x = /* @__PURE__ */ P(() => r().connectable), k = /* @__PURE__ */ P(() => r().focusable), E = /* @__PURE__ */ P(() => gt(r().hidden, !1)), S = /* @__PURE__ */ P(() => gt(r().dragging, !1)), O = /* @__PURE__ */ P(() => gt(r().style, "")), V = /* @__PURE__ */ P(() => r().class), B = /* @__PURE__ */ P(() => gt(r().type, "default")), Y = /* @__PURE__ */ P(() => r().parentId), A = /* @__PURE__ */ P(() => r().sourcePosition), _ = /* @__PURE__ */ P(() => r().targetPosition), M = /* @__PURE__ */ P(() => gt(r().measured, () => ({ width: 0, height: 0 }), !0).width), w = /* @__PURE__ */ P(() => gt(r().measured, () => ({ width: 0, height: 0 }), !0).height), T = /* @__PURE__ */ P(() => r().initialWidth), N = /* @__PURE__ */ P(() => r().initialHeight), I = /* @__PURE__ */ P(() => r().width), K = /* @__PURE__ */ P(() => r().height), j = /* @__PURE__ */ P(() => r().dragHandle), H = /* @__PURE__ */ P(() => gt(r().internals.z, 0)), F = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), q = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), G = /* @__PURE__ */ P(() => r().internals.userNode), { id: D } = r(), W = /* @__PURE__ */ P(() => c(b) ?? n().nodesDraggable), J = /* @__PURE__ */ P(() => c($) ?? n().elementsSelectable), te = /* @__PURE__ */ P(() => c(x) ?? n().nodesConnectable), ne = /* @__PURE__ */ P(() => hc(r())), Q = /* @__PURE__ */ P(() => !!r().internals.handleBounds), pe = /* @__PURE__ */ P(() => c(ne) && c(Q)), ce = /* @__PURE__ */ P(() => c(k) ?? n().nodesFocusable);
  function re(ge) {
    return n().parentLookup.has(ge);
  }
  let ie = /* @__PURE__ */ P(() => re(D)), fe = /* @__PURE__ */ Ee(null), ve = null, xe = c(B), de = c(A), $e = c(_), Ne = /* @__PURE__ */ P(() => n().nodeTypes[c(B)] ?? ua), X = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  Nr("svelteflow__node_connectable", {
    get value() {
      return c(te);
    }
  }), Nr("svelteflow__node_id", D);
  let Ae = /* @__PURE__ */ P(() => {
    const ge = c(M) === void 0 ? c(I) ?? c(T) : c(I), Ze = c(w) === void 0 ? c(K) ?? c(N) : c(K);
    if (!(ge === void 0 && Ze === void 0 && c(O) === void 0))
      return `${c(O)};${ge ? `width:${dn(ge)};` : ""}${Ze ? `height:${dn(Ze)};` : ""}`;
  });
  We(() => {
    (c(B) !== xe || c(A) !== de || c(_) !== $e) && c(fe) !== null && requestAnimationFrame(() => {
      c(fe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[D, { id: D, nodeElement: c(fe), force: !0 }]]));
    }), xe = c(B), de = c(A), $e = c(_);
  }), We(() => {
    o() && (!c(pe) || c(fe) !== ve) && (ve && o().unobserve(ve), c(fe) && o().observe(c(fe)), ve = c(fe));
  }), yo(() => {
    ve && o()?.unobserve(ve);
  });
  function He(ge) {
    c(J) && (!n().selectNodesOnDrag || !c(W) || n().nodeDragThreshold > 0) && n().handleNodeSelection(D), s()?.({ node: c(G), event: ge });
  }
  function ze(ge) {
    if (!(mc(ge) || n().disableKeyboardA11y))
      if (lc.includes(ge.key) && c(J)) {
        const Ze = ge.key === "Escape";
        n().handleNodeSelection(D, Ze, c(fe));
      } else c(W) && r().selected && Object.prototype.hasOwnProperty.call(di, ge.key) && (ge.preventDefault(), n(
        n().ariaLiveMessage = c(X)["node.a11yDescription.ariaLiveMessage"]({
          direction: ge.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(di[ge.key], ge.shiftKey ? 4 : 1));
  }
  const Ie = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(fe)?.matches(":focus-visible"))
      return;
    const { width: ge, height: Ze, viewport: ht } = n();
    ra(/* @__PURE__ */ new Map([[D, r()]]), { x: 0, y: 0, width: ge, height: Ze }, [ht.x, ht.y, ht.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ht.zoom });
  };
  var nt = {
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
  }, Et = Se(), Je = oe(Et);
  {
    var Re = (ge) => {
      var Ze = om();
      tt(
        Ze,
        (Ue, $t) => ({
          "data-id": D,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(B)}`,
            c(V)
          ],
          style: c(Ae),
          onclick: He,
          onpointerenter: d() ? (it) => d()({ node: c(G), event: it }) : void 0,
          onpointerleave: f() ? (it) => f()({ node: c(G), event: it }) : void 0,
          onpointermove: p() ? (it) => p()({ node: c(G), event: it }) : void 0,
          oncontextmenu: h() ? (it) => h()({ node: c(G), event: it }) : void 0,
          onkeydown: c(ce) ? ze : void 0,
          onfocus: c(ce) ? Ie : void 0,
          tabIndex: c(ce) ? 0 : void 0,
          role: r().ariaRole ?? (c(ce) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Yc}-${n().flowId}`,
          ...r().domAttributes,
          [On]: Ue,
          [an]: $t
        }),
        [
          () => ({
            dragging: c(S),
            selected: c(y),
            draggable: c(W),
            connectable: c(te),
            selectable: c(J),
            nopan: c(W),
            parent: c(ie)
          }),
          () => ({
            "z-index": c(H),
            transform: `translate(${c(F) ?? ""}px, ${c(q) ?? ""}px)`,
            visibility: c(ne) ? "visible" : "hidden"
          })
        ]
      );
      var ht = Z(Ze);
      _i(ht, () => c(Ne), (Ue, $t) => {
        $t(Ue, {
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
            return c(C);
          },
          get sourcePosition() {
            return c(A);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(H);
          },
          get dragging() {
            return c(S);
          },
          get draggable() {
            return c(W);
          },
          get dragHandle() {
            return c(j);
          },
          get parentId() {
            return c(Y);
          },
          get type() {
            return c(B);
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
            return c(I);
          },
          get height() {
            return c(K);
          }
        });
      }), R(Ze), dt(Ze, (Ue, $t) => Wc?.(Ue, $t), () => ({
        nodeId: D,
        isSelectable: c(J),
        disabled: !c(W),
        handleSelector: c(j),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ue, $t, it, st) => {
          a()?.({ event: Ue, targetNode: it, nodes: st });
        },
        onDragStart: (Ue, $t, it, st) => {
          l()?.({ event: Ue, targetNode: it, nodes: st });
        },
        onDragStop: (Ue, $t, it, st) => {
          u()?.({ event: Ue, targetNode: it, nodes: st });
        },
        store: n()
      })), Ot(Ze, (Ue) => U(fe, Ue), () => c(fe)), L(ge, Ze);
    };
    ae(Je, (ge) => {
      c(E) || ge(Re);
    });
  }
  return L(e, Et), ue(nt);
}
se(
  Jc,
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
function Uc(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), f = m(t, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const b = /* @__PURE__ */ new Map();
    y.forEach(($) => {
      const C = $.target.getAttribute("data-id");
      b.set(C, { id: C, nodeElement: $.target, force: !0 });
    }), n().updateNodeInternals(b);
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
  return pt(g, 21, () => n().visible.nodes.values(), (y) => y.id, (y, b) => {
    Jc(y, {
      get node() {
        return c(b);
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
      set store($) {
        n($);
      }
    });
  }), R(g), L(e, g), ue(h);
}
se(
  Uc,
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
function Gc(e, t) {
  le(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), u = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), f = /* @__PURE__ */ P(() => n().sourceY), p = /* @__PURE__ */ P(() => n().targetX), h = /* @__PURE__ */ P(() => n().targetY), g = /* @__PURE__ */ P(() => n().sourcePosition), y = /* @__PURE__ */ P(() => n().targetPosition), b = /* @__PURE__ */ P(() => gt(n().animated, !1)), $ = /* @__PURE__ */ P(() => gt(n().selected, !1)), C = /* @__PURE__ */ P(() => n().label), x = /* @__PURE__ */ P(() => n().labelStyle), k = /* @__PURE__ */ P(() => gt(n().data, () => ({}), !0)), E = /* @__PURE__ */ P(() => n().style), S = /* @__PURE__ */ P(() => n().interactionWidth), O = /* @__PURE__ */ P(() => gt(n().type, "default")), V = /* @__PURE__ */ P(() => n().sourceHandle), B = /* @__PURE__ */ P(() => n().targetHandle), Y = /* @__PURE__ */ P(() => n().markerStart), A = /* @__PURE__ */ P(() => n().markerEnd), _ = /* @__PURE__ */ P(() => n().selectable), M = /* @__PURE__ */ P(() => n().focusable), w = /* @__PURE__ */ P(() => gt(n().deletable, !0)), T = /* @__PURE__ */ P(() => n().hidden), N = /* @__PURE__ */ P(() => n().zIndex), I = /* @__PURE__ */ P(() => n().class), K = /* @__PURE__ */ P(() => n().ariaLabel), j = null;
  const { id: H } = n();
  Nr("svelteflow__edge_id", H);
  let F = /* @__PURE__ */ P(() => c(_) ?? r().elementsSelectable), q = /* @__PURE__ */ P(() => c(M) ?? r().edgesFocusable), G = /* @__PURE__ */ P(() => r().edgeTypes[c(O)] ?? ca), D = /* @__PURE__ */ P(() => c(Y) ? `url('#${bs(c(Y), r().flowId)}')` : void 0), W = /* @__PURE__ */ P(() => c(A) ? `url('#${bs(c(A), r().flowId)}')` : void 0);
  function J(ie) {
    const fe = r().edgeLookup.get(H);
    fe && (c(F) && r().handleEdgeSelection(H), o()?.({ event: ie, edge: fe }));
  }
  function te(ie, fe) {
    const ve = r().edgeLookup.get(H);
    ve && fe({ event: ie, edge: ve });
  }
  function ne(ie) {
    if (!r().disableKeyboardA11y && lc.includes(ie.key) && c(F)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: ve } = r();
      ie.key === "Escape" ? (j?.blur(), fe({ edges: [n()] })) : ve([H]);
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
  }, pe = Se(), ce = oe(pe);
  {
    var re = (ie) => {
      var fe = sm();
      let ve;
      var xe = Z(fe);
      tt(
        xe,
        ($e) => ({
          class: ["svelte-flow__edge", c(I)],
          "data-id": H,
          onclick: J,
          oncontextmenu: i() ? (Ne) => {
            te(Ne, i());
          } : void 0,
          onpointerenter: s() ? (Ne) => {
            te(Ne, s());
          } : void 0,
          onpointerleave: a() ? (Ne) => {
            te(Ne, a());
          } : void 0,
          "aria-label": c(K) === null ? void 0 : c(K) ? c(K) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(q) ? `${Fc}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(q) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(q) ? ne : void 0,
          tabindex: c(q) ? 0 : void 0,
          ...n().domAttributes,
          [On]: $e
        }),
        [
          () => ({
            animated: c(b),
            selected: c($),
            selectable: c(F)
          })
        ]
      );
      var de = Z(xe);
      _i(de, () => c(G), ($e, Ne) => {
        Ne($e, {
          get id() {
            return H;
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
            return c(b);
          },
          get selected() {
            return c($);
          },
          get label() {
            return c(C);
          },
          get labelStyle() {
            return c(x);
          },
          get data() {
            return c(k);
          },
          get style() {
            return c(E);
          },
          get interactionWidth() {
            return c(S);
          },
          get selectable() {
            return c(F);
          },
          get deletable() {
            return c(w);
          },
          get type() {
            return c(O);
          },
          get sourceHandleId() {
            return c(V);
          },
          get targetHandleId() {
            return c(B);
          },
          get markerStart() {
            return c(D);
          },
          get markerEnd() {
            return c(W);
          }
        });
      }), R(xe), Ot(xe, ($e) => j = $e, () => j), R(fe), Ce(($e) => ve = ct(fe, "", ve, $e), [() => ({ "z-index": c(N) })]), L(ie, fe);
    };
    ae(ce, (ie) => {
      c(T) || ie(re);
    });
  }
  return L(e, pe), ue(Q);
}
se(
  Gc,
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
var am = /* @__PURE__ */ he("<defs></defs>");
function Qc(e, t) {
  le(t, !1);
  const n = en();
  Mu();
  var r = am();
  pt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    ed(o, Be(() => c(i)));
  }), R(r), L(e, r), ue();
}
se(Qc, {}, [], [], !0);
var lm = /* @__PURE__ */ he('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), um = /* @__PURE__ */ he('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), cm = /* @__PURE__ */ he('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function ed(e, t) {
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
  }, f = cm(), p = Z(f);
  {
    var h = (y) => {
      var b = lm();
      let $;
      Ce(
        (C) => {
          be(b, "stroke-width", u()), $ = ct(b, "", $, C);
        },
        [() => ({ stroke: l() })]
      ), L(y, b);
    }, g = (y) => {
      var b = Se(), $ = oe(b);
      {
        var C = (x) => {
          var k = um();
          let E;
          Ce(
            (S) => {
              be(k, "stroke-width", u()), E = ct(k, "", E, S);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), L(x, k);
        };
        ae(
          $,
          (x) => {
            r() === io.ArrowClosed && x(C);
          },
          !0
        );
      }
      L(y, b);
    };
    ae(p, (y) => {
      r() === io.Arrow ? y(h) : y(g, !1);
    });
  }
  return R(f), Ce(() => {
    be(f, "id", n()), be(f, "markerWidth", `${o()}`), be(f, "markerHeight", `${i()}`), be(f, "markerUnits", s()), be(f, "orient", a());
  }), L(e, f), ue(d);
}
se(
  ed,
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
function td(e, t) {
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
  }, l = dm(), u = Z(l), d = Z(u);
  Qc(d, {}), R(u);
  var f = z(u, 2);
  return pt(f, 17, () => n().visible.edges.values(), (p) => p.id, (p, h) => {
    Gc(p, {
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
  }), R(l), L(e, l), ue(a);
}
se(
  td,
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
var fm = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-1s0q5uo"></div>');
const pm = {
  hash: "svelte-1s0q5uo",
  code: ".svelte-flow__selection.svelte-1s0q5uo {position:absolute;top:0;left:0;}"
};
function da(e, t) {
  le(t, !0), Ve(e, pm);
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
  }, l = Se(), u = oe(l);
  {
    var d = (f) => {
      var p = fm();
      let h;
      Ce((g) => h = ct(p, "", h, g), [
        () => ({
          width: typeof o() == "string" ? o() : dn(o()),
          height: typeof i() == "string" ? i() : dn(i()),
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
se(da, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
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
  hash: "svelte-pfbpzw",
  code: ".svelte-flow__selection-wrapper.svelte-pfbpzw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function nd(e, t) {
  le(t, !0), Ve(e, mm);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ee(void 0);
  We(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ P(() => n().selectionRectMode === "nodes" ? (n().nodes, $o(n().nodeLookup, { filter: (y) => !!y.selected })) : null);
  function d(y) {
    Object.prototype.hasOwnProperty.call(di, y.key) && (y.preventDefault(), n().moveSelectedNodes(di[y.key], y.shiftKey ? 4 : 1));
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
  }, p = Se(), h = oe(p);
  {
    var g = (y) => {
      var b = vm();
      b.__contextmenu = [hm, n, a], b.__click = [gm, n, s], b.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, x);
      };
      let $;
      var C = Z(b);
      da(C, { width: "100%", height: "100%", x: 0, y: 0 }), R(b), dt(b, (x, k) => Wc?.(x, k), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, k, E, S) => {
          r()?.({ event: x, targetNode: null, nodes: S });
        },
        onDragStart: (x, k, E, S) => {
          o()?.({ event: x, targetNode: null, nodes: S });
        },
        onDragStop: (x, k, E, S) => {
          i()?.({ event: x, targetNode: null, nodes: S });
        }
      })), Ot(b, (x) => U(l, x), () => c(l)), Ce(
        (x) => {
          Pt(b, 1, Pn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-pfbpzw"), be(b, "role", n().disableKeyboardA11y ? void 0 : "button"), be(b, "tabindex", n().disableKeyboardA11y ? void 0 : -1), $ = ct(b, "", $, x);
        },
        [
          () => ({
            width: dn(c(u).width),
            height: dn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), L(y, b);
    };
    ae(h, (y) => {
      n().selectionRectMode === "nodes" && c(u) && mn(c(u).x) && mn(c(u).y) && y(g);
    });
  }
  return L(e, p), ue(f);
}
Wn(["contextmenu", "click", "keydown"]);
se(
  nd,
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
function nn(e, t) {
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
      }, { modifier: p, key: h, callback: g, preventDefault: y, enabled: b } = f;
      if (b) {
        if (a.key !== h) continue;
        if (p === null || p === !1) {
          if (u !== 0) continue;
        } else if (p !== void 0 && p?.[0]?.length > 0) {
          const C = Array.isArray(p) ? p : [p];
          let x = !1;
          for (const k of C)
            if ((Array.isArray(k) ? k : [k]).reduce(
              (E, S) => E | ym(S),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        y && a.preventDefault();
        const $ = {
          node: e,
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: $ })), g?.($);
      }
    }
  }
  let s;
  return n && (s = as(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = as(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ot() {
  const e = /* @__PURE__ */ P(en), t = (i) => {
    const s = gl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? jv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Dr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = lt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && gl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = lt(() => c(e).edges).map((l) => {
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
    getNodes: (i) => i === void 0 ? c(e).nodes : bl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : bl(c(e).edgeLookup, i),
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
    getViewport: () => Bl(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = oa(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
      const l = rl(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const f = c(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const p = Dr(f), h = so(p, u);
        return s && h > 0 || h >= p.width * p.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = rl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = so(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Rv({
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
      return _o(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), f = ci(i, [s, a, l]);
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
function bl(e, t) {
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
function rd(e, t) {
  le(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => Qn() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => Qn() ? "Meta" : "Control"), { deleteElements: l } = ot();
  function u(b) {
    return b !== null && typeof b == "object";
  }
  function d(b) {
    return u(b) ? b.modifier || [] : [];
  }
  function f(b) {
    return b == null ? "" : u(b) ? b.key : b;
  }
  function p(b, $) {
    return (Array.isArray(b) ? b : [b]).map((C) => {
      const x = f(C);
      return {
        key: x,
        modifier: d(C),
        enabled: x !== null,
        callback: $
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function g() {
    const b = n().nodes.filter((C) => C.selected), $ = n().edges.filter((C) => C.selected);
    l({ nodes: b, edges: $ });
  }
  var y = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(b = "Shift") {
      r(b), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(b = Qn() ? "Meta" : "Control") {
      o(b), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(b = "Backspace") {
      i(b), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(b = " ") {
      s(b), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(b = Qn() ? "Meta" : "Control") {
      a(b), v();
    }
  };
  return ei("blur", Ct, h), ei("contextmenu", Ct, h), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(i(), (b) => {
      !(b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey) && !mc(b.originalEvent) && (n(n().deleteKeyPressed = !0, !0), g());
    }),
    type: "keydown"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), dt(Ct, (b, $) => nn?.(b, $), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(y);
}
se(
  rd,
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
function od(e, t) {
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
      case gn.Bezier: {
        const [h] = wc(p);
        return h;
      }
      case gn.Straight: {
        const [h] = xc(p);
        return h;
      }
      case gn.Step:
      case gn.SmoothStep: {
        const [h] = ia({
          ...p,
          borderRadius: r() === gn.Step ? 0 : void 0
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
  }, u = Se(), d = oe(u);
  {
    var f = (p) => {
      var h = bm(), g = Z(h), y = Z(g);
      {
        var b = (C) => {
          var x = Se(), k = oe(x);
          _i(k, s, (E, S) => {
            S(E, {});
          }), L(C, x);
        }, $ = (C) => {
          var x = wm();
          Ce(() => {
            be(x, "d", c(a)), ct(x, i());
          }), L(C, x);
        };
        ae(y, (C) => {
          s() ? C(b) : C($, !1);
        });
      }
      R(g), R(h), Ce(
        (C) => {
          be(h, "width", n().width), be(h, "height", n().height), ct(h, o()), Pt(g, 0, C);
        },
        [
          () => Pn([
            "svelte-flow__connection",
            Hv(n().connection.isValid)
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
  od,
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
  }, u = xm();
  tt(u, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = Z(u);
  return Ye(d, () => i() ?? ft), R(u), L(e, u), ue(l);
}
se(So, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var $m = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function id(e, t) {
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
  }, i = Se(), s = oe(i);
  {
    var a = (l) => {
      So(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var f = $m();
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
se(id, { proOptions: {}, position: {} }, [], [], !0);
var Cm = /* @__PURE__ */ ee("<div><!></div>");
const _m = {
  hash: "svelte-1h62cij",
  code: ".svelte-flow.svelte-1h62cij {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function sd(e, t) {
  le(t, !0), Ve(e, _m);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ P(() => u().class), f = /* @__PURE__ */ P(() => yp(u(), [
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
  function p(b) {
    b.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(b);
  }
  var h = {
    get width() {
      return n();
    },
    set width(b) {
      n(b), v();
    },
    get height() {
      return r();
    },
    set height(b) {
      r(b), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(b) {
      o(b), v();
    },
    get domNode() {
      return i();
    },
    set domNode(b) {
      i(b), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(b) {
      s(b), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(b) {
      a(b), v();
    },
    get children() {
      return l();
    },
    set children(b) {
      l(b), v();
    },
    get rest() {
      return u();
    },
    set rest(b) {
      u(b), v();
    }
  }, g = Cm();
  tt(
    g,
    (b) => ({
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
      [an]: b
    }),
    [
      () => ({ width: dn(n()), height: dn(r()) })
    ],
    void 0,
    "svelte-1h62cij"
  );
  var y = Z(g);
  return Ye(y, () => l() ?? ft), R(g), Ot(g, (b) => i(b), () => i()), Oa(g, "clientHeight", a), Oa(g, "clientWidth", s), L(e, g), ue(h);
}
se(
  sd,
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
var km = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Sm = /* @__PURE__ */ ee("<!> <!>", 1), Pm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function ad(e, t) {
  le(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), f = m(t, "nodeClickDistance", 7, 1), p = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), g = m(t, "onmove", 7), y = m(t, "oninit", 7), b = m(t, "onnodeclick", 7), $ = m(t, "onnodecontextmenu", 7), C = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), k = m(t, "onnodedragstop", 7), E = m(t, "onnodepointerenter", 7), S = m(t, "onnodepointermove", 7), O = m(t, "onnodepointerleave", 7), V = m(t, "onselectionclick", 7), B = m(t, "onselectioncontextmenu", 7), Y = m(t, "onselectionstart", 7), A = m(t, "onselectionend", 7), _ = m(t, "onedgeclick", 7), M = m(t, "onedgecontextmenu", 7), w = m(t, "onedgepointerenter", 7), T = m(t, "onedgepointerleave", 7), N = m(t, "onpaneclick", 7), I = m(t, "onpanecontextmenu", 7), K = m(t, "panOnScrollMode", 23, () => or.Free), j = m(t, "preventScrolling", 7, !0), H = m(t, "zoomOnScroll", 7, !0), F = m(t, "zoomOnDoubleClick", 7, !0), q = m(t, "zoomOnPinch", 7, !0), G = m(t, "panOnScroll", 7, !1), D = m(t, "panOnScrollSpeed", 7, 0.5), W = m(t, "panOnDrag", 7, !0), J = m(t, "selectionOnDrag", 7, !0), te = m(t, "connectionLineComponent", 7), ne = m(t, "connectionLineStyle", 7), Q = m(t, "connectionLineContainerStyle", 7), pe = m(t, "connectionLineType", 23, () => gn.Bezier), ce = m(t, "attributionPosition", 7), re = m(t, "children", 7), ie = m(t, "nodes", 31, () => Dt([])), fe = m(t, "edges", 31, () => Dt([])), ve = m(t, "viewport", 31, () => {
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
  ]), de = Kc({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return ie();
    },
    set nodes(X) {
      ie(X);
    },
    get edges() {
      return fe();
    },
    set edges(X) {
      fe(X);
    },
    get viewport() {
      return ve();
    },
    set viewport(X) {
      ve(X);
    }
  });
  const $e = An(fi);
  $e && $e.setStore && $e.setStore(de), Nr(fi, {
    provider: !1,
    getStore() {
      return de;
    }
  }), We(() => {
    const X = { nodes: de.selectedNodes, edges: de.selectedEdges };
    lt(() => t.onselectionchange)?.(X);
    for (const Ae of de.selectionChangeHandlers.values())
      Ae(X);
  }), yo(() => {
    de.reset();
  });
  var Ne = {
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
      return u();
    },
    set zoomActivationKey(X) {
      u(X), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(X = 1) {
      d(X), v();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(X = 1) {
      f(X), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(X) {
      p(X), v();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(X) {
      h(X), v();
    },
    get onmove() {
      return g();
    },
    set onmove(X) {
      g(X), v();
    },
    get oninit() {
      return y();
    },
    set oninit(X) {
      y(X), v();
    },
    get onnodeclick() {
      return b();
    },
    set onnodeclick(X) {
      b(X), v();
    },
    get onnodecontextmenu() {
      return $();
    },
    set onnodecontextmenu(X) {
      $(X), v();
    },
    get onnodedrag() {
      return C();
    },
    set onnodedrag(X) {
      C(X), v();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(X) {
      x(X), v();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(X) {
      k(X), v();
    },
    get onnodepointerenter() {
      return E();
    },
    set onnodepointerenter(X) {
      E(X), v();
    },
    get onnodepointermove() {
      return S();
    },
    set onnodepointermove(X) {
      S(X), v();
    },
    get onnodepointerleave() {
      return O();
    },
    set onnodepointerleave(X) {
      O(X), v();
    },
    get onselectionclick() {
      return V();
    },
    set onselectionclick(X) {
      V(X), v();
    },
    get onselectioncontextmenu() {
      return B();
    },
    set onselectioncontextmenu(X) {
      B(X), v();
    },
    get onselectionstart() {
      return Y();
    },
    set onselectionstart(X) {
      Y(X), v();
    },
    get onselectionend() {
      return A();
    },
    set onselectionend(X) {
      A(X), v();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(X) {
      _(X), v();
    },
    get onedgecontextmenu() {
      return M();
    },
    set onedgecontextmenu(X) {
      M(X), v();
    },
    get onedgepointerenter() {
      return w();
    },
    set onedgepointerenter(X) {
      w(X), v();
    },
    get onedgepointerleave() {
      return T();
    },
    set onedgepointerleave(X) {
      T(X), v();
    },
    get onpaneclick() {
      return N();
    },
    set onpaneclick(X) {
      N(X), v();
    },
    get onpanecontextmenu() {
      return I();
    },
    set onpanecontextmenu(X) {
      I(X), v();
    },
    get panOnScrollMode() {
      return K();
    },
    set panOnScrollMode(X = or.Free) {
      K(X), v();
    },
    get preventScrolling() {
      return j();
    },
    set preventScrolling(X = !0) {
      j(X), v();
    },
    get zoomOnScroll() {
      return H();
    },
    set zoomOnScroll(X = !0) {
      H(X), v();
    },
    get zoomOnDoubleClick() {
      return F();
    },
    set zoomOnDoubleClick(X = !0) {
      F(X), v();
    },
    get zoomOnPinch() {
      return q();
    },
    set zoomOnPinch(X = !0) {
      q(X), v();
    },
    get panOnScroll() {
      return G();
    },
    set panOnScroll(X = !1) {
      G(X), v();
    },
    get panOnScrollSpeed() {
      return D();
    },
    set panOnScrollSpeed(X = 0.5) {
      D(X), v();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(X = !0) {
      W(X), v();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(X = !0) {
      J(X), v();
    },
    get connectionLineComponent() {
      return te();
    },
    set connectionLineComponent(X) {
      te(X), v();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(X) {
      ne(X), v();
    },
    get connectionLineContainerStyle() {
      return Q();
    },
    set connectionLineContainerStyle(X) {
      Q(X), v();
    },
    get connectionLineType() {
      return pe();
    },
    set connectionLineType(X = gn.Bezier) {
      pe(X), v();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(X) {
      ce(X), v();
    },
    get children() {
      return re();
    },
    set children(X) {
      re(X), v();
    },
    get nodes() {
      return ie();
    },
    set nodes(X = []) {
      ie(X), v();
    },
    get edges() {
      return fe();
    },
    set edges(X = []) {
      fe(X), v();
    },
    get viewport() {
      return ve();
    },
    set viewport(X = void 0) {
      ve(X), v();
    }
  };
  return sd(e, {
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
    set domNode(X) {
      de.domNode = X;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(X) {
      de.width = X;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(X) {
      de.height = X;
    },
    children: (X, Ae) => {
      var He = Pm(), ze = oe(He);
      rd(ze, {
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
        set store(Re) {
          de = Re;
        }
      });
      var Ie = z(ze, 2);
      Bc(Ie, {
        get panOnScrollMode() {
          return K();
        },
        get preventScrolling() {
          return j();
        },
        get zoomOnScroll() {
          return H();
        },
        get zoomOnDoubleClick() {
          return F();
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
          return W();
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
        set store(Re) {
          de = Re;
        },
        children: (Re, ge) => {
          jc(Re, {
            get onpaneclick() {
              return N();
            },
            get onpanecontextmenu() {
              return I();
            },
            get onselectionstart() {
              return Y();
            },
            get onselectionend() {
              return A();
            },
            get panOnDrag() {
              return W();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return de;
            },
            set store(Ze) {
              de = Ze;
            },
            children: (Ze, ht) => {
              var Ue = Sm(), $t = oe(Ue);
              Xc($t, {
                get store() {
                  return de;
                },
                set store(st) {
                  de = st;
                },
                children: (st, Tn) => {
                  var Ln = km(), To = z(oe(Ln), 2);
                  td(To, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return M();
                    },
                    get onedgepointerenter() {
                      return w();
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
                  od(Lo, {
                    get type() {
                      return pe();
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
                  var ma = z(Lo, 2);
                  Uc(ma, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return b();
                    },
                    get onnodecontextmenu() {
                      return $();
                    },
                    get onnodepointerenter() {
                      return E();
                    },
                    get onnodepointermove() {
                      return S();
                    },
                    get onnodepointerleave() {
                      return O();
                    },
                    get onnodedrag() {
                      return C();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return k();
                    },
                    get store() {
                      return de;
                    },
                    set store(Fn) {
                      de = Fn;
                    }
                  });
                  var sf = z(ma, 2);
                  nd(sf, {
                    get onselectionclick() {
                      return V();
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
                      return k();
                    },
                    get store() {
                      return de;
                    },
                    set store(Fn) {
                      de = Fn;
                    }
                  }), me(2), L(st, Ln);
                },
                $$slots: { default: !0 }
              });
              var it = z($t, 2);
              {
                let st = /* @__PURE__ */ P(() => !!(de.selectionRect && de.selectionRectMode === "user")), Tn = /* @__PURE__ */ P(() => de.selectionRect?.width), Ln = /* @__PURE__ */ P(() => de.selectionRect?.height), To = /* @__PURE__ */ P(() => de.selectionRect?.x), Lo = /* @__PURE__ */ P(() => de.selectionRect?.y);
                da(it, {
                  get isVisible() {
                    return c(st);
                  },
                  get width() {
                    return c(Tn);
                  },
                  get height() {
                    return c(Ln);
                  },
                  get x() {
                    return c(To);
                  },
                  get y() {
                    return c(Lo);
                  }
                });
              }
              L(Ze, Ue);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var nt = z(Ie, 2);
      id(nt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var Et = z(nt, 2);
      qc(Et, {
        get store() {
          return de;
        }
      });
      var Je = z(Et, 2);
      Ye(Je, () => re() ?? ft), L(X, He);
    },
    $$slots: { default: !0 }
  }), ue(Ne);
}
se(
  ad,
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
function ld(e, t) {
  le(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Ee(Kc({ props: {}, nodes: [], edges: [] }));
  Nr(fi, {
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
  }, i = Se(), s = oe(i);
  return Ye(s, () => n() ?? ft), L(e, i), ue(o);
}
se(ld, { children: {} }, [], [], !0);
var Em = /* @__PURE__ */ ee("<button><!></button>");
function Fr(e, t) {
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
  tt(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [an]: g
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
  var h = Z(p);
  return Ye(h, () => u() ?? ft), R(p), L(e, p), ue(f);
}
se(
  Fr,
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
var Nm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function ud(e) {
  var t = Nm();
  L(e, t);
}
se(ud, {}, [], [], !0);
var Mm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function cd(e) {
  var t = Mm();
  L(e, t);
}
se(cd, {}, [], [], !0);
var Tm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function dd(e) {
  var t = Tm();
  L(e, t);
}
se(dd, {}, [], [], !0);
var Lm = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function fd(e) {
  var t = Lm();
  L(e, t);
}
se(fd, {}, [], [], !0);
var Om = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function pd(e) {
  var t = Om();
  L(e, t);
}
se(pd, {}, [], [], !0);
var Hm = /* @__PURE__ */ ee("<!> <!>", 1), zm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function hd(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), f = m(t, "buttonColor", 7), p = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), g = m(t, "fitViewOptions", 7), y = m(t, "children", 7), b = m(t, "before", 7), $ = m(t, "after", 7), C = /* @__PURE__ */ De(t, [
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
  ]), x = /* @__PURE__ */ P(en);
  const k = {
    bgColor: u(),
    bgColorHover: d(),
    color: f(),
    colorHover: p(),
    borderColor: h()
  };
  let E = /* @__PURE__ */ P(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), S = /* @__PURE__ */ P(() => c(x).viewport.zoom <= c(x).minZoom), O = /* @__PURE__ */ P(() => c(x).viewport.zoom >= c(x).maxZoom), V = /* @__PURE__ */ P(() => c(x).ariaLabelConfig), B = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const Y = () => {
    c(x).zoomIn();
  }, A = () => {
    c(x).zoomOut();
  }, _ = () => {
    c(x).fitView(g());
  }, M = () => {
    let T = !c(E);
    c(x).nodesDraggable = T, c(x).nodesConnectable = T, c(x).elementsSelectable = T;
  };
  var w = {
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
      return b();
    },
    set before(T) {
      b(T), v();
    },
    get after() {
      return $();
    },
    set after(T) {
      $(T), v();
    }
  };
  {
    let T = /* @__PURE__ */ P(() => [
      "svelte-flow__controls",
      c(B),
      l()
    ]);
    So(e, Be(
      {
        get class() {
          return c(T);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(V)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => C,
      {
        children: (N, I) => {
          var K = zm(), j = oe(K);
          {
            var H = (ce) => {
              var re = Se(), ie = oe(re);
              Ye(ie, b), L(ce, re);
            };
            ae(j, (ce) => {
              b() && ce(H);
            });
          }
          var F = z(j, 2);
          {
            var q = (ce) => {
              var re = Hm(), ie = oe(re);
              Fr(ie, Be(
                {
                  onclick: Y,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(V)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(V)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(O);
                  }
                },
                () => k,
                {
                  children: (ve, xe) => {
                    ud(ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var fe = z(ie, 2);
              Fr(fe, Be(
                {
                  onclick: A,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(V)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(V)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(S);
                  }
                },
                () => k,
                {
                  children: (ve, xe) => {
                    cd(ve);
                  },
                  $$slots: { default: !0 }
                }
              )), L(ce, re);
            };
            ae(F, (ce) => {
              o() && ce(q);
            });
          }
          var G = z(F, 2);
          {
            var D = (ce) => {
              Fr(ce, Be(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: _,
                  get title() {
                    return c(V)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(V)["controls.fitView.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (re, ie) => {
                    dd(re);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(G, (ce) => {
              i() && ce(D);
            });
          }
          var W = z(G, 2);
          {
            var J = (ce) => {
              Fr(ce, Be(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: M,
                  get title() {
                    return c(V)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(V)["controls.interactive.ariaLabel"];
                  }
                },
                () => k,
                {
                  children: (re, ie) => {
                    var fe = Se(), ve = oe(fe);
                    {
                      var xe = ($e) => {
                        pd($e);
                      }, de = ($e) => {
                        fd($e);
                      };
                      ae(ve, ($e) => {
                        c(E) ? $e(xe) : $e(de, !1);
                      });
                    }
                    L(re, fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(W, (ce) => {
              s() && ce(J);
            });
          }
          var te = z(W, 2);
          {
            var ne = (ce) => {
              var re = Se(), ie = oe(re);
              Ye(ie, y), L(ce, re);
            };
            ae(te, (ce) => {
              y() && ce(ne);
            });
          }
          var Q = z(te, 2);
          {
            var pe = (ce) => {
              var re = Se(), ie = oe(re);
              Ye(ie, $), L(ce, re);
            };
            ae(Q, (ce) => {
              $() && ce(pe);
            });
          }
          L(N, K);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(w);
}
se(
  hd,
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
var Vm = /* @__PURE__ */ he("<circle></circle>");
function gd(e, t) {
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
  return Ce(() => {
    be(i, "cx", n()), be(i, "cy", n()), be(i, "r", n()), Pt(i, 0, Pn(["svelte-flow__background-pattern", "dots", r()]));
  }), L(e, i), ue(o);
}
se(gd, { radius: {}, class: {} }, [], [], !0);
var Dm = /* @__PURE__ */ he("<path></path>");
function vd(e, t) {
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
  return Ce(() => {
    be(a, "stroke-width", n()), be(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Pt(a, 0, Pn(["svelte-flow__background-pattern", o(), i()]));
  }), L(e, a), ue(s);
}
se(vd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Am = {
  [yn.Dots]: 1,
  [yn.Lines]: 1,
  [yn.Cross]: 6
};
var Im = /* @__PURE__ */ he('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function md(e, t) {
  le(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => yn.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), f = /* @__PURE__ */ P(en), p = /* @__PURE__ */ P(() => r() === yn.Dots), h = /* @__PURE__ */ P(() => r() === yn.Cross), g = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ P(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), b = /* @__PURE__ */ P(() => [
    c(g)[0] * c(f).viewport.zoom || 1,
    c(g)[1] * c(f).viewport.zoom || 1
  ]), $ = /* @__PURE__ */ P(() => (i() ?? Am[r()]) * c(f).viewport.zoom), C = /* @__PURE__ */ P(() => c(h) ? [c($), c($)] : c(b)), x = /* @__PURE__ */ P(() => c(p) ? [c($) / 2, c($) / 2] : [
    c(C)[0] / 2,
    c(C)[1] / 2
  ]);
  var k = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), v();
    },
    get variant() {
      return r();
    },
    set variant(_ = yn.Dots) {
      r(_), v();
    },
    get gap() {
      return o();
    },
    set gap(_ = 20) {
      o(_), v();
    },
    get size() {
      return i();
    },
    set size(_) {
      i(_), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(_ = 1) {
      s(_), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(_) {
      a(_), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(_) {
      l(_), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(_) {
      u(_), v();
    },
    get class() {
      return d();
    },
    set class(_) {
      d(_), v();
    }
  }, E = Im();
  let S;
  var O = Z(E), V = Z(O);
  {
    var B = (_) => {
      {
        let M = /* @__PURE__ */ P(() => c($) / 2);
        gd(_, {
          get radius() {
            return c(M);
          },
          get class() {
            return u();
          }
        });
      }
    }, Y = (_) => {
      vd(_, {
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
    ae(V, (_) => {
      c(p) ? _(B) : _(Y, !1);
    });
  }
  R(O);
  var A = z(O);
  return R(E), Ce(
    (_) => {
      Pt(E, 0, Pn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), S = ct(E, "", S, _), be(O, "id", c(y)), be(O, "x", c(f).viewport.x % c(b)[0]), be(O, "y", c(f).viewport.y % c(b)[1]), be(O, "width", c(b)[0]), be(O, "height", c(b)[1]), be(O, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), be(A, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), L(e, E), ue(k);
}
se(
  md,
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
var Rm = /* @__PURE__ */ he("<rect></rect>");
function yd(e, t) {
  le(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), f = m(t, "selected", 7), p = m(t, "class", 7), h = m(t, "nodeComponent", 7);
  var g = {
    get x() {
      return n();
    },
    set x(x) {
      n(x), v();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), v();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), v();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), v();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(x = 5) {
      s(x), v();
    },
    get color() {
      return a();
    },
    set color(x) {
      a(x), v();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), v();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), v();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(x = 2) {
      d(x), v();
    },
    get selected() {
      return f();
    },
    set selected(x) {
      f(x), v();
    },
    get class() {
      return p();
    },
    set class(x) {
      p(x), v();
    },
    get nodeComponent() {
      return h();
    },
    set nodeComponent(x) {
      h(x), v();
    }
  }, y = Se(), b = oe(y);
  {
    var $ = (x) => {
      const k = /* @__PURE__ */ P(h);
      var E = Se(), S = oe(E);
      _i(S, () => c(k), (O, V) => {
        V(O, {
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
      }), L(x, E);
    }, C = (x) => {
      var k = Rm();
      let E, S;
      Ce(
        (O, V) => {
          E = Pt(k, 0, Pn(["svelte-flow__minimap-node", p()]), null, E, O), be(k, "x", n()), be(k, "y", r()), be(k, "rx", s()), be(k, "ry", s()), be(k, "width", o()), be(k, "height", i()), be(k, "shape-rendering", l()), S = ct(k, "", S, V);
        },
        [
          () => ({ selected: f() }),
          () => ({
            fill: a(),
            stroke: u(),
            "stroke-width": d()
          })
        ]
      ), L(x, k);
    };
    ae(b, (x) => {
      h() ? x($) : x(C, !1);
    });
  }
  return L(e, y), ue(g);
}
se(
  yd,
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
function Zm(e, t) {
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
const Ji = (e) => e instanceof Function ? e : () => e;
var Km = /* @__PURE__ */ he("<title> </title>"), Bm = /* @__PURE__ */ he('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), jm = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function wd(e, t) {
  le(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "nodeComponent", 7), d = m(t, "bgColor", 7), f = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), h = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), y = m(t, "height", 7, 150), b = m(t, "pannable", 7, !0), $ = m(t, "zoomable", 7, !0), C = m(t, "inversePan", 7), x = m(t, "zoomStep", 7), k = m(t, "class", 7), E = /* @__PURE__ */ De(t, [
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
  ]), S = /* @__PURE__ */ P(en), O = /* @__PURE__ */ P(() => c(S).ariaLabelConfig);
  const V = i() === void 0 ? void 0 : Ji(i()), B = Ji(o()), Y = Ji(s()), A = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let _ = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${c(S).flowId}`), M = /* @__PURE__ */ P(() => ({
    x: -c(S).viewport.x / c(S).viewport.zoom,
    y: -c(S).viewport.y / c(S).viewport.zoom,
    width: c(S).width / c(S).viewport.zoom,
    height: c(S).height / c(S).viewport.zoom
  })), w = /* @__PURE__ */ P(() => pc($o(c(S).nodeLookup, { filter: (Q) => !Q.hidden }), c(M))), T = /* @__PURE__ */ P(() => c(w).width / g()), N = /* @__PURE__ */ P(() => c(w).height / y()), I = /* @__PURE__ */ P(() => Math.max(c(T), c(N))), K = /* @__PURE__ */ P(() => c(I) * g()), j = /* @__PURE__ */ P(() => c(I) * y()), H = /* @__PURE__ */ P(() => 5 * c(I)), F = /* @__PURE__ */ P(() => c(w).x - (c(K) - c(w).width) / 2 - c(H)), q = /* @__PURE__ */ P(() => c(w).y - (c(j) - c(w).height) / 2 - c(H)), G = /* @__PURE__ */ P(() => c(K) + c(H) * 2), D = /* @__PURE__ */ P(() => c(j) + c(H) * 2);
  const W = () => c(I);
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
      return b();
    },
    set pannable(Q = !0) {
      b(Q), v();
    },
    get zoomable() {
      return $();
    },
    set zoomable(Q = !0) {
      $(Q), v();
    },
    get inversePan() {
      return C();
    },
    set inversePan(Q) {
      C(Q), v();
    },
    get zoomStep() {
      return x();
    },
    set zoomStep(Q) {
      x(Q), v();
    },
    get class() {
      return k();
    },
    set class(Q) {
      k(Q), v();
    }
  }, te = jm(), ne = oe(te);
  {
    let Q = /* @__PURE__ */ P(() => ["svelte-flow__minimap", k()]);
    Lp(ne, () => ({ "--xy-minimap-background-color-props": d() })), So(ne.lastChild, Be(
      {
        get position() {
          return n();
        },
        get class() {
          return c(Q);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => E,
      {
        children: (pe, ce) => {
          var re = Se(), ie = oe(re);
          {
            var fe = (ve) => {
              var xe = Bm();
              let de;
              var $e = Z(xe);
              {
                var Ne = (He) => {
                  var ze = Km(), Ie = Z(ze, !0);
                  R(ze), Ce(() => {
                    be(ze, "id", c(_)), Ke(Ie, r() ?? c(O)["minimap.ariaLabel"]);
                  }), L(He, ze);
                };
                ae($e, (He) => {
                  (r() ?? c(O)["minimap.ariaLabel"]) && He(Ne);
                });
              }
              var X = z($e);
              pt(X, 17, () => c(S).nodes, (He) => He.id, (He, ze) => {
                const Ie = /* @__PURE__ */ P(() => c(S).nodeLookup.get(c(ze).id));
                var nt = Se(), Et = oe(nt);
                {
                  var Je = (Re) => {
                    const ge = /* @__PURE__ */ P(() => qn(c(Ie)));
                    {
                      let Ze = /* @__PURE__ */ P(() => V?.(c(Ie))), ht = /* @__PURE__ */ P(() => B(c(Ie))), Ue = /* @__PURE__ */ P(() => Y(c(Ie)));
                      yd(Re, Be(
                        {
                          get x() {
                            return c(Ie).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ie).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ge),
                        {
                          get selected() {
                            return c(Ie).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ze);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(ht);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return A;
                          },
                          get class() {
                            return c(Ue);
                          }
                        }
                      ));
                    }
                  };
                  ae(Et, (Re) => {
                    c(Ie) && hc(c(Ie)) && !c(Ie).hidden && Re(Je);
                  });
                }
                L(He, nt);
              });
              var Ae = z(X);
              R(xe), dt(xe, (He, ze) => Zm?.(He, ze), () => ({
                store: c(S),
                panZoom: c(S).panZoom,
                getViewScale: W,
                translateExtent: c(S).translateExtent,
                width: c(S).width,
                height: c(S).height,
                inversePan: C(),
                zoomStep: x(),
                pannable: b(),
                zoomable: $()
              })), Ce(
                (He) => {
                  be(xe, "width", g()), be(xe, "height", y()), be(xe, "viewBox", `${c(F) ?? ""} ${c(q) ?? ""} ${c(G) ?? ""} ${c(D) ?? ""}`), be(xe, "aria-labelledby", c(_)), de = ct(xe, "", de, He), be(Ae, "d", `M${c(F) - c(H)},${c(q) - c(H)}h${c(G) + c(H) * 2}v${c(D) + c(H) * 2}h${-c(G) - c(H) * 2}z
      M${c(M).x ?? ""},${c(M).y ?? ""}h${c(M).width ?? ""}v${c(M).height ?? ""}h${-c(M).width}z`);
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
              c(S).panZoom && ve(fe);
            });
          }
          L(pe, re);
        },
        $$slots: { default: !0 }
      }
    )), R(ne);
  }
  return L(e, te), ue(J);
}
se(
  wd,
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
var Xm = /* @__PURE__ */ ee("<div><!></div>");
function bd(e, t) {
  le(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => ye.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ De(t, [
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
  const u = en(), { getNodesBounds: d } = ot(), f = An("svelteflow__node_id");
  let p = /* @__PURE__ */ P(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (E, S) => {
      const O = u.nodeLookup.get(S);
      return O && E.push(O), E;
    },
    []
  ))), h = /* @__PURE__ */ P(() => {
    const E = d(c(p));
    return E ? o0(E, u.viewport, r(), i(), o()) : "";
  }), g = /* @__PURE__ */ P(() => c(p).length === 0 ? 1 : Math.max(...c(p).map((E) => (E.internals.z || 5) + 1))), y = /* @__PURE__ */ P(() => u.nodes.filter((E) => E.selected).length), b = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(y) === 1);
  var $ = {
    get nodeId() {
      return n();
    },
    set nodeId(E) {
      n(E), v();
    },
    get position() {
      return r();
    },
    set position(E = ye.Top) {
      r(E), v();
    },
    get align() {
      return o();
    },
    set align(E = "center") {
      o(E), v();
    },
    get offset() {
      return i();
    },
    set offset(E = 10) {
      i(E), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(E) {
      s(E), v();
    },
    get children() {
      return a();
    },
    set children(E) {
      a(E), v();
    }
  }, C = Se(), x = oe(C);
  {
    var k = (E) => {
      var S = Xm();
      tt(
        S,
        (V, B) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": V,
          ...l,
          [an]: B
        }),
        [
          () => c(p).reduce((V, B) => `${V}${B.id} `, "").trim(),
          () => ({
            display: zc().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(g)
          })
        ]
      );
      var O = Z(S);
      Ye(O, () => a() ?? ft), R(S), dt(S, (V, B) => Hc?.(V, B), () => "root"), L(E, S);
    };
    ae(x, (E) => {
      u.domNode && c(b) && c(p) && E(k);
    });
  }
  return L(e, C), ue($);
}
se(
  bd,
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
function En(e) {
  const t = /* @__PURE__ */ P(en), n = /* @__PURE__ */ P(() => c(t).nodes), r = /* @__PURE__ */ P(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!v0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const xl = "tinyflow-component", Wm = [
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
], fa = [
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
], Fm = [
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
  tt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = Z(s);
  return Ye(a, () => n() ?? ft), R(s), L(e, s), ue(i);
}
se(Te, { children: {}, primary: {} }, [], [], !0);
var Qm = /* @__PURE__ */ ee("<input/>");
function xd(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
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
    !0
  ), L(e, r), ue();
}
se(xd, {}, [], [], !0);
var ey = /* @__PURE__ */ ee('<div><input type="hidden"/> <!> <!></div>');
const ty = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function $d(e, t) {
  le(t, !0), Ve(e, ty);
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
  tt(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = Z(u);
  nr(d);
  var f = z(d, 2);
  Ge(f, {
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
      var y = _e();
      Ce(() => Ke(y, i())), L(h, y);
    },
    $$slots: { default: !0 }
  }), R(u), Ce(() => Ko(d, o())), L(e, u), ue(l);
}
se(
  $d,
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
function Ge(e, t) {
  le(t, !0);
  const n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = ny();
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
    !0
  ), L(e, r), ue();
}
se(Ge, {}, [], [], !0);
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
  return lp(i), tt(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), L(e, i), ue(o);
}
se(je, { value: {} }, [], [], !0);
var oy = /* @__PURE__ */ ee('<div role="button"><!></div>'), iy = /* @__PURE__ */ ee("<div></div>");
function Cd(e, t) {
  const n = Va(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Va(n, ["items", "onChange", "activeIndex"]);
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
  Mu();
  var u = iy();
  return tt(u, () => ({
    ...r,
    class: `tf-tabs ${js(r), lt(() => r.class) ?? ""}`
  })), pt(u, 5, o, Lr, (d, f, p) => {
    var h = oy();
    be(h, "tabindex", p), h.__click = () => a(c(f), p), h.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), a(c(f), p));
    };
    var g = Z(h);
    {
      var y = ($) => {
        var C = _e();
        Ce(() => Ke(C, (c(f), lt(() => c(f).label)))), L($, C);
      }, b = ($) => {
        var C = Se(), x = oe(C);
        Ye(x, () => (c(f), lt(() => c(f).label) ?? ft)), L($, C);
      };
      ae(g, ($) => {
        c(f), lt(() => typeof c(f).label == "string") ? $(y) : $(b, !1);
      });
    }
    R(h), Ce(() => Pt(h, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), L(d, h);
  }), R(u), L(e, u), ue(l);
}
Wn(["click", "keydown"]);
se(Cd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var sy = (e, t, n) => t(c(n)), ay = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, ly = /* @__PURE__ */ ee('<span class="tf-collapse-item-title-icon"><!></span>'), uy = /* @__PURE__ */ ee('<div class="tf-collapse-item-description"><!></div>'), cy = /* @__PURE__ */ ee('<div class="tf-collapse-item-content"><!></div>'), dy = /* @__PURE__ */ ee('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), fy = /* @__PURE__ */ ee("<div></div>");
const py = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function _d(e, t) {
  le(t, !0), Ve(e, py);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Dt([]));
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
  }, a = fy();
  return pt(a, 21, n, Lr, (l, u, d) => {
    var f = dy(), p = Z(f);
    be(p, "tabindex", d), p.__click = [sy, i, u], p.__keydown = [ay, i, u];
    var h = Z(p);
    {
      var g = (E) => {
        var S = ly(), O = Z(S);
        zn(O, {
          get target() {
            return c(u).icon;
          }
        }), R(S), L(E, S);
      };
      ae(h, (E) => {
        c(u).icon && E(g);
      });
    }
    var y = z(h, 2);
    zn(y, {
      get target() {
        return c(u).title;
      }
    });
    var b = z(y, 2);
    R(p);
    var $ = z(p, 2);
    {
      var C = (E) => {
        var S = uy(), O = Z(S);
        zn(O, {
          get target() {
            return c(u).description;
          }
        }), R(S), L(E, S);
      };
      ae($, (E) => {
        c(u).description && E(C);
      });
    }
    var x = z($, 2);
    {
      var k = (E) => {
        var S = cy(), O = Z(S);
        zn(O, {
          get target() {
            return c(u).content;
          }
        }), R(S), L(E, S);
      };
      ae(x, (E) => {
        o().includes(c(u).key) && E(k);
      });
    }
    R(f), Ce((E) => Pt(b, 1, `tf-collapse-item-title-arrow ${E ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), L(l, f);
  }), R(a), Ce(() => {
    ct(a, t.style), Pt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), L(e, a), ue(s);
}
Wn(["click", "keydown"]);
se(_d, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function zn(e, t) {
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
  }, o = Se(), i = oe(o);
  {
    var s = (l) => {
      var u = Se(), d = oe(u);
      Ye(d, () => n() ?? ft), L(l, u);
    }, a = (l) => {
      var u = Se(), d = oe(u);
      qs(d, n), L(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return L(e, o), ue(r);
}
se(zn, { target: {} }, [], [], !0);
var hy = (e, t, n) => t(c(n)), gy = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), vy = /* @__PURE__ */ ee('<div class="tf-select-content-children"><!></div>'), my = /* @__PURE__ */ ee('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), yy = /* @__PURE__ */ ee('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), wy = /* @__PURE__ */ ee("<!> <!>", 1), by = /* @__PURE__ */ ee('<div class="tf-select-input-placeholder"> </div>'), xy = /* @__PURE__ */ ee('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), $y = /* @__PURE__ */ ee("<div><!></div>");
function ut(e, t) {
  le(t, !0);
  const n = (C, x = ft) => {
    var k = Se(), E = oe(k);
    pt(E, 19, x, (S, O) => `${O}_${S.value}`, (S, O) => {
      var V = my(), B = oe(V);
      B.__click = [hy, g, O];
      var Y = Z(B), A = Z(Y);
      {
        var _ = (N) => {
          var I = gy();
          L(N, I);
        };
        ae(A, (N) => {
          c(O).children && c(O).children.length > 0 && N(_);
        });
      }
      R(Y);
      var M = z(Y, 2);
      zn(M, {
        get target() {
          return c(O).label;
        }
      }), R(B);
      var w = z(B, 2);
      {
        var T = (N) => {
          var I = vy(), K = Z(I);
          n(K, () => c(O).children), R(I), L(N, I);
        };
        ae(w, (N) => {
          c(O).children && c(O).children.length > 0 && (a() || u().includes(c(O).value)) && N(T);
        });
      }
      L(S, V);
    }), L(C, k);
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
  ]), p = /* @__PURE__ */ P(() => {
    const C = [], x = (k) => {
      for (let E of k)
        i().length > 0 ? i().includes(E.value) && C.push(E) : s().includes(E.value) && C.push(E), E.children && E.children.length > 0 && x(E.children);
    };
    return x(r()), C;
  }), h;
  function g(C) {
    h?.hide(), o()?.(C);
  }
  var y = {
    get items() {
      return r();
    },
    set items(C) {
      r(C), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(C) {
      o(C), v();
    },
    get value() {
      return i();
    },
    set value(C = []) {
      i(C), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(C = !0) {
      a(C), v();
    },
    get multiple() {
      return l();
    },
    set multiple(C = !1) {
      l(C), v();
    },
    get expandValue() {
      return u();
    },
    set expandValue(C = []) {
      u(C), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), v();
    }
  }, b = $y();
  tt(b, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var $ = Z(b);
  return Ot(
    Yn($, {
      floating: (C) => {
        var x = yy(), k = Z(x);
        n(k, r), R(x), L(C, x);
      },
      children: (C, x) => {
        var k = xy();
        tt(k, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var E = Z(k);
        pt(
          E,
          23,
          () => c(p),
          (S, O) => `${O}_${S.value}`,
          (S, O, V) => {
            var B = Se(), Y = oe(B);
            {
              var A = (M) => {
                var w = Se(), T = oe(w);
                {
                  var N = (I) => {
                    zn(I, {
                      get target() {
                        return c(O).label;
                      }
                    });
                  };
                  ae(T, (I) => {
                    c(V) === 0 && I(N);
                  });
                }
                L(M, w);
              }, _ = (M) => {
                var w = wy(), T = oe(w);
                zn(T, {
                  get target() {
                    return c(O).label;
                  }
                });
                var N = z(T, 2);
                {
                  var I = (K) => {
                    var j = _e(",");
                    L(K, j);
                  };
                  ae(N, (K) => {
                    c(V) < c(p).length - 1 && K(I);
                  });
                }
                L(M, w);
              };
              ae(Y, (M) => {
                l() ? M(_, !1) : M(A);
              });
            }
            L(S, B);
          },
          (S) => {
            var O = by(), V = Z(O, !0);
            R(O), Ce(() => Ke(V, d())), L(S, O);
          }
        ), R(E), me(2), R(k), L(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => h = C,
    () => h
  ), R(b), L(e, b), ue(y);
}
Wn(["click"]);
se(
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
const lo = Math.min, kr = Math.max, pi = Math.round, cn = (e) => ({
  x: e,
  y: e
}), Cy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, _y = {
  start: "end",
  end: "start"
};
function xs(e, t, n) {
  return kr(e, lo(t, n));
}
function Po(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cr(e) {
  return e.split("-")[0];
}
function Eo(e) {
  return e.split("-")[1];
}
function kd(e) {
  return e === "x" ? "y" : "x";
}
function pa(e) {
  return e === "y" ? "height" : "width";
}
const ky = /* @__PURE__ */ new Set(["top", "bottom"]);
function Vn(e) {
  return ky.has(cr(e)) ? "y" : "x";
}
function ha(e) {
  return kd(Vn(e));
}
function Sy(e, t, n) {
  n === void 0 && (n = !1);
  const r = Eo(e), o = ha(e), i = pa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = hi(s)), [s, hi(s)];
}
function Py(e) {
  const t = hi(e);
  return [$s(e), t, $s(t)];
}
function $s(e) {
  return e.replace(/start|end/g, (t) => _y[t]);
}
const $l = ["left", "right"], Cl = ["right", "left"], Ey = ["top", "bottom"], Ny = ["bottom", "top"];
function My(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cl : $l : t ? $l : Cl;
    case "left":
    case "right":
      return t ? Ey : Ny;
    default:
      return [];
  }
}
function Ty(e, t, n, r) {
  const o = Eo(e);
  let i = My(cr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map($s)))), i;
}
function hi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Cy[t]);
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
function Sd(e) {
  return typeof e != "number" ? Ly(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function gi(e) {
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
function _l(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Vn(t), s = ha(t), a = pa(s), l = cr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  } = _l(u, r, l), p = r, h = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: b,
      fn: $
    } = a[y], {
      x: C,
      y: x,
      data: k,
      reset: E
    } = await $({
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
    d = C ?? d, f = x ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...k
      }
    }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: f
    } = _l(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Pd(e, t) {
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
  } = Po(t, e), g = Sd(h), y = a[p ? f === "floating" ? "reference" : "floating" : f], b = gi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), $ = f === "floating" ? {
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
  }, k = gi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: $,
    offsetParent: C,
    strategy: l
  }) : $);
  return {
    top: (b.top - k.top + g.top) / x.y,
    bottom: (k.bottom - b.bottom + g.bottom) / x.y,
    left: (b.left - k.left + g.left) / x.x,
    right: (k.right - b.right + g.right) / x.x
  };
}
const Hy = (e) => ({
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
    } = Po(e, t) || {};
    if (u == null)
      return {};
    const f = Sd(d), p = {
      x: n,
      y: r
    }, h = ha(o), g = pa(h), y = await s.getDimensions(u), b = h === "y", $ = b ? "top" : "left", C = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", k = i.reference[g] + i.reference[h] - p[h] - i.floating[g], E = p[h] - i.reference[h], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let O = S ? S[x] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(S))) && (O = a.floating[x] || i.floating[g]);
    const V = k / 2 - E / 2, B = O / 2 - y[g] / 2 - 1, Y = lo(f[$], B), A = lo(f[C], B), _ = Y, M = O - y[g] - A, w = O / 2 - y[g] / 2 + V, T = xs(_, w, M), N = !l.arrow && Eo(o) != null && w !== T && i.reference[g] / 2 - (w < _ ? Y : A) - y[g] / 2 < 0, I = N ? w < _ ? w - _ : w - M : 0;
    return {
      [h]: p[h] + I,
      data: {
        [h]: T,
        centerOffset: w - T - I,
        ...N && {
          alignmentOffset: I
        }
      },
      reset: N
    };
  }
}), zy = function(e) {
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
        ...b
      } = Po(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = cr(o), C = Vn(a), x = cr(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = p || (x || !y ? [hi(a)] : Py(a)), S = g !== "none";
      !p && S && E.push(...Ty(a, y, g, k));
      const O = [a, ...E], V = await Pd(t, b), B = [];
      let Y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && B.push(V[$]), f) {
        const w = Sy(o, s, k);
        B.push(V[w[0]], V[w[1]]);
      }
      if (Y = [...Y, {
        placement: o,
        overflows: B
      }], !B.every((w) => w <= 0)) {
        var A, _;
        const w = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, T = O[w];
        if (T && (!(f === "alignment" && C !== Vn(T)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((I) => Vn(I.placement) === C ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: w,
              overflows: Y
            },
            reset: {
              placement: T
            }
          };
        let N = (_ = Y.filter((I) => I.overflows[0] <= 0).sort((I, K) => I.overflows[1] - K.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var M;
              const I = (M = Y.filter((K) => {
                if (S) {
                  const j = Vn(K.placement);
                  return j === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((j) => j > 0).reduce((j, H) => j + H, 0)]).sort((K, j) => K[1] - j[1])[0]) == null ? void 0 : M[0];
              I && (N = I);
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
}, Vy = /* @__PURE__ */ new Set(["left", "top"]);
async function Dy(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = cr(n), a = Eo(n), l = Vn(n) === "y", u = Vy.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = Po(t, e);
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
          fn: (b) => {
            let {
              x: $,
              y: C
            } = b;
            return {
              x: $,
              y: C
            };
          }
        },
        ...l
      } = Po(e, t), u = {
        x: n,
        y: r
      }, d = await Pd(t, l), f = Vn(cr(o)), p = kd(f);
      let h = u[p], g = u[f];
      if (i) {
        const b = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", C = h + d[b], x = h - d[$];
        h = xs(C, h, x);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", C = g + d[b], x = g - d[$];
        g = xs(C, g, x);
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
function Hi() {
  return typeof window < "u";
}
function Kr(e) {
  return Ed(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Nn(e) {
  var t;
  return (t = (Ed(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ed(e) {
  return Hi() ? e instanceof Node || e instanceof Tt(e).Node : !1;
}
function Ft(e) {
  return Hi() ? e instanceof Element || e instanceof Tt(e).Element : !1;
}
function fn(e) {
  return Hi() ? e instanceof HTMLElement || e instanceof Tt(e).HTMLElement : !1;
}
function kl(e) {
  return !Hi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Tt(e).ShadowRoot;
}
const Ry = /* @__PURE__ */ new Set(["inline", "contents"]);
function No(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ry.has(o);
}
const Zy = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ky(e) {
  return Zy.has(Kr(e));
}
const By = [":popover-open", ":modal"];
function zi(e) {
  return By.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const jy = ["transform", "translate", "scale", "rotate", "perspective"], Xy = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Wy = ["paint", "layout", "strict", "content"];
function ga(e) {
  const t = va(), n = Ft(e) ? Jt(e) : e;
  return jy.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Xy.some((r) => (n.willChange || "").includes(r)) || Wy.some((r) => (n.contain || "").includes(r));
}
function qy(e) {
  let t = Zn(e);
  for (; fn(t) && !Ir(t); ) {
    if (ga(t))
      return t;
    if (zi(t))
      return null;
    t = Zn(t);
  }
  return null;
}
function va() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Yy = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ir(e) {
  return Yy.has(Kr(e));
}
function Jt(e) {
  return Tt(e).getComputedStyle(e);
}
function Vi(e) {
  return Ft(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Zn(e) {
  if (Kr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    kl(e) && e.host || // Fallback.
    Nn(e)
  );
  return kl(t) ? t.host : t;
}
function Nd(e) {
  const t = Zn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && No(t) ? t : Nd(t);
}
function Md(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Nd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Tt(o);
  return i ? (Cs(s), t.concat(s, s.visualViewport || [], No(o) ? o : [], [])) : t.concat(o, Md(o, []));
}
function Cs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Td(e) {
  const t = Jt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = fn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = pi(n) !== i || pi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ld(e) {
  return Ft(e) ? e : e.contextElement;
}
function Sr(e) {
  const t = Ld(e);
  if (!fn(t))
    return cn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Td(t);
  let s = (i ? pi(n.width) : n.width) / r, a = (i ? pi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Fy = /* @__PURE__ */ cn(0);
function Od(e) {
  const t = Tt(e);
  return !va() || !t.visualViewport ? Fy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Jy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Tt(e) ? !1 : t;
}
function uo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ld(e);
  let s = cn(1);
  t && (r ? Ft(r) && (s = Sr(r)) : s = Sr(e));
  const a = Jy(i, n, r) ? Od(i) : cn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = Tt(i), h = r && Ft(r) ? Tt(r) : r;
    let g = p, y = Cs(g);
    for (; y && r && h !== g; ) {
      const b = Sr(y), $ = y.getBoundingClientRect(), C = Jt(y), x = $.left + (y.clientLeft + parseFloat(C.paddingLeft)) * b.x, k = $.top + (y.clientTop + parseFloat(C.paddingTop)) * b.y;
      l *= b.x, u *= b.y, d *= b.x, f *= b.y, l += x, u += k, g = Tt(y), y = Cs(g);
    }
  }
  return gi({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Di(e, t) {
  const n = Vi(e).scrollLeft;
  return t ? t.left + n : uo(Nn(e)).left + n;
}
function Hd(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Di(e, n), o = n.top + t.scrollTop;
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
  const i = o === "fixed", s = Nn(r), a = t ? zi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = cn(1);
  const d = cn(0), f = fn(r);
  if ((f || !f && !i) && ((Kr(r) !== "body" || No(s)) && (l = Vi(r)), fn(r))) {
    const h = uo(r);
    u = Sr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !f && !i ? Hd(s, l) : cn(0);
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
  const t = Nn(e), n = Vi(e), r = e.ownerDocument.body, o = kr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = kr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Di(e);
  const a = -n.scrollTop;
  return Jt(r).direction === "rtl" && (s += kr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Sl = 25;
function e2(e, t) {
  const n = Tt(e), r = Nn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = va();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Di(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= Sl && (i -= g);
  } else u <= Sl && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const t2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function n2(e, t) {
  const n = uo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = fn(e) ? Sr(e) : cn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Pl(e, t, n) {
  let r;
  if (t === "viewport")
    r = e2(e, n);
  else if (t === "document")
    r = Qy(Nn(e));
  else if (Ft(t))
    r = n2(t, n);
  else {
    const o = Od(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return gi(r);
}
function zd(e, t) {
  const n = Zn(e);
  return n === t || !Ft(n) || Ir(n) ? !1 : Jt(n).position === "fixed" || zd(n, t);
}
function r2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Md(e, []).filter((a) => Ft(a) && Kr(a) !== "body"), o = null;
  const i = Jt(e).position === "fixed";
  let s = i ? Zn(e) : e;
  for (; Ft(s) && !Ir(s); ) {
    const a = Jt(s), l = ga(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && t2.has(o.position) || No(s) && !l && zd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Zn(s);
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
  const i = [...n === "clippingAncestors" ? zi(t) ? [] : r2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Pl(t, u, o);
    return l.top = kr(d.top, l.top), l.right = lo(d.right, l.right), l.bottom = lo(d.bottom, l.bottom), l.left = kr(d.left, l.left), l;
  }, Pl(t, s, o));
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
  } = Td(e);
  return {
    width: t,
    height: n
  };
}
function s2(e, t, n) {
  const r = fn(t), o = Nn(t), i = n === "fixed", s = uo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = cn(0);
  function u() {
    l.x = Di(o);
  }
  if (r || !r && !i)
    if ((Kr(t) !== "body" || No(o)) && (a = Vi(t)), r) {
      const h = uo(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Hd(o, a) : cn(0), f = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Ui(e) {
  return Jt(e).position === "static";
}
function El(e, t) {
  if (!fn(e) || Jt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Nn(e) === n && (n = n.ownerDocument.body), n;
}
function Vd(e, t) {
  const n = Tt(e);
  if (zi(e))
    return n;
  if (!fn(e)) {
    let o = Zn(e);
    for (; o && !Ir(o); ) {
      if (Ft(o) && !Ui(o))
        return o;
      o = Zn(o);
    }
    return n;
  }
  let r = El(e, t);
  for (; r && Ky(r) && Ui(r); )
    r = El(r, t);
  return r && Ir(r) && Ui(r) && !ga(r) ? n : r || qy(e) || n;
}
const a2 = async function(e) {
  const t = this.getOffsetParent || Vd, n = this.getDimensions, r = await n(e.floating);
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
  return Jt(e).direction === "rtl";
}
const u2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Uy,
  getDocumentElement: Nn,
  getClippingRect: o2,
  getOffsetParent: Vd,
  getElementRects: a2,
  getClientRects: Gy,
  getDimensions: i2,
  getScale: Sr,
  isElement: Ft,
  isRTL: l2
}, c2 = Ay, d2 = Iy, f2 = zy, p2 = Hy, h2 = (e, t, n) => {
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
    const $ = document.querySelector(e);
    if ($)
      e = $;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const $ = document.querySelector(n);
    if ($)
      u = $;
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
        f2(i),
        //自动翻转
        d2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [p2({ element: d })] : []
      ]
    }).then(({ x: $, y: C, placement: x, middlewareData: k }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${C}px`
      }), l) {
        const { x: E, y: S } = k.arrow, O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: E != null ? `${E}px` : "",
          top: S != null ? `${S}px` : "",
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
  function y($) {
    $.stopPropagation(), p ? g() : h();
  }
  function b($) {
    u.contains($.target) || g();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, y);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, y);
      }), document.removeEventListener("click", b);
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
function Yn(e, t) {
  le(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Sn(() => (a = g2({
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
  }, d = v2(), f = Z(d), p = Z(f);
  Ye(p, n), R(f), Ot(f, (y) => i = y, () => i);
  var h = z(f, 2), g = Z(h);
  return Ye(g, r), R(h), Ot(h, (y) => s = y, () => s), R(d), L(e, d), ue(u);
}
se(Yn, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
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
  }, a = Se(), l = oe(a);
  return Vp(l, () => `h${r()}`, !1, (u, d) => {
    tt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Se(), p = oe(f);
    Ye(p, () => n() ?? ft), L(d, f);
  }), L(e, a), ue(s);
}
se(Le, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var m2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const y2 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Mo(e, t) {
  le(t, !0), Ve(e, y2);
  const n = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Te(e, Be(() => n, {
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
} }), _n = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, b2 = () => ({ copyNode: (e) => {
  const t = Oe.getNode(e);
  if (t) {
    const n = _n(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Oe.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), Fe = () => An("svelteflow__node_id"), Kn = () => An("tinyflow_options");
var x2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), $2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), C2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), _2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), k2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, S2 = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, P2 = /* @__PURE__ */ ee('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), E2 = /* @__PURE__ */ ee('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), N2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), M2 = /* @__PURE__ */ ee('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), T2 = /* @__PURE__ */ ee('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const L2 = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Zt(e, t) {
  le(t, !0), Ve(e, L2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), f = m(t, "allowSettingOfCondition", 7, !0), p = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), g = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = ot(), C = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = w2(), { copyNode: k } = b2(), E = Kn(), S = () => {
    E.onNodeExecute?.($(r()));
  };
  let O = Fe();
  var V = {
    get data() {
      return n();
    },
    set data(H) {
      n(H), v();
    },
    get id() {
      return r();
    },
    set id(H = "") {
      r(H), v();
    },
    get icon() {
      return o();
    },
    set icon(H) {
      o(H), v();
    },
    get handle() {
      return i();
    },
    set handle(H) {
      i(H), v();
    },
    get children() {
      return s();
    },
    set children(H) {
      s(H), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(H = !0) {
      a(H), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(H = !0) {
      l(H), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(H = !0) {
      u(H), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(H = !0) {
      d(H), v();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(H = !0) {
      f(H), v();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(H = !0) {
      p(H), v();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(H = !0) {
      h(H), v();
    },
    get onCollapse() {
      return g();
    },
    set onCollapse(H) {
      g(H), v();
    }
  }, B = T2(), Y = oe(B);
  {
    var A = (H) => {
      bd(H, {
        get position() {
          return ye.Top;
        },
        align: "start",
        children: (F, q) => {
          var G = M2(), D = Z(G);
          {
            var W = (re) => {
              Te(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ie, fe) => {
                  var ve = x2();
                  L(ie, ve);
                },
                $$slots: { default: !0 }
              });
            };
            ae(D, (re) => {
              u() && re(W);
            });
          }
          var J = z(D, 2);
          {
            var te = (re) => {
              Te(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (ie, fe) => {
                  var ve = $2();
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
                onclick: S,
                children: (ie, fe) => {
                  var ve = C2();
                  L(ie, ve);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ne, (re) => {
              a() && re(Q);
            });
          }
          var pe = z(ne, 2);
          {
            var ce = (re) => {
              Yn(re, {
                placement: "bottom",
                floating: (ie) => {
                  var fe = E2(), ve = Z(fe), xe = z(Z(ve));
                  Ge(xe, {
                    style: "width: 100%;",
                    onchange: (Je) => {
                      const Re = Je.target.value;
                      b(O, { title: Re });
                    },
                    get value() {
                      return n().title;
                    }
                  }), R(ve);
                  var de = z(ve, 2), $e = z(Z(de));
                  je($e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Je) => {
                      const Re = Je.target.value;
                      b(O, { description: Re });
                    },
                    get value() {
                      return n().description;
                    }
                  }), R(de);
                  var Ne = z(de, 2);
                  {
                    var X = (Je) => {
                      var Re = _2(), ge = z(Z(Re));
                      je(ge, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ze) => {
                          const ht = Ze.target.value;
                          b(O, { condition: ht });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), R(Re), L(Je, Re);
                    };
                    ae(Ne, (Je) => {
                      f() && Je(X);
                    });
                  }
                  var Ae = z(Ne, 2), He = z(Z(Ae), 2);
                  nr(He), He.__change = [k2, b, O], R(Ae);
                  var ze = z(Ae, 2), Ie = z(Z(ze), 2);
                  nr(Ie), Ie.__change = [S2, b, O], R(ze);
                  var nt = z(ze, 2);
                  {
                    var Et = (Je) => {
                      var Re = P2(), ge = oe(Re), Ze = z(Z(ge));
                      {
                        let st = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        je(Ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Tn) => {
                            const Ln = Tn.target.value;
                            b(O, { loopIntervalMs: Ln });
                          },
                          get value() {
                            return c(st);
                          }
                        });
                      }
                      R(ge);
                      var ht = z(ge, 2), Ue = z(Z(ht));
                      {
                        let st = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        je(Ue, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Tn) => {
                            const Ln = Tn.target.value;
                            b(O, { maxLoopCount: Ln });
                          },
                          get value() {
                            return c(st);
                          }
                        });
                      }
                      R(ht);
                      var $t = z(ht, 2), it = z(Z($t));
                      je(it, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (st) => {
                          const Tn = st.target.value;
                          b(O, { loopBreakCondition: Tn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), R($t), L(Je, Re);
                    };
                    ae(nt, (Je) => {
                      n().loopEnable && Je(Et);
                    });
                  }
                  R(fe), Ce(() => {
                    Ta(He, !!n().async), Ta(Ie, !!n().loopEnable);
                  }), L(ie, fe);
                },
                children: (ie, fe) => {
                  Te(ie, {
                    class: "tf-node-toolbar-item",
                    children: (ve, xe) => {
                      var de = N2();
                      L(ve, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(pe, (re) => {
              d() && re(ce);
            });
          }
          R(G), L(F, G);
        },
        $$slots: { default: !0 }
      });
    };
    ae(Y, (H) => {
      (a() || l() || u()) && H(A);
    });
  }
  var _ = z(Y, 2), M = z(Z(_), 2), w = Z(M);
  _d(w, {
    get items() {
      return c(C);
    },
    get activeKeys() {
      return y;
    },
    onChange: (H, F) => {
      b(r(), { expand: F?.includes("key") }), g()?.(F?.includes("key") ? "key" : "");
    }
  }), R(M), R(_);
  var T = z(_, 2);
  {
    var N = (H) => {
      Rn(H, {
        type: "target",
        get position() {
          return ye.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(T, (H) => {
      h() && H(N);
    });
  }
  var I = z(T, 2);
  {
    var K = (H) => {
      Rn(H, {
        type: "source",
        get position() {
          return ye.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(I, (H) => {
      p() && H(K);
    });
  }
  var j = z(I, 2);
  return Ye(j, () => i() ?? ft), L(e, B), ue(V);
}
Wn(["change"]);
se(
  Zt,
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
var O2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), H2 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), z2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), V2 = /* @__PURE__ */ ee('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const D2 = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Dd(e, t) {
  le(t, !0), Ve(e, D2);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = Fe(), i = En(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ot(), l = (V, B) => {
    a(o, (Y) => {
      let A = Y.data.parameters;
      return A[r()][V] = B, { parameters: A };
    });
  }, u = (V, B) => {
    const Y = B.target.value;
    l(V, Y);
  }, d = (V) => {
    const B = V.target.value;
    l("name", B);
  }, f = (V) => {
    const B = V.target.checked;
    l("required", B);
  }, p = (V) => {
    const B = V.value;
    l("formType", B);
  }, h = (V) => {
    const B = V.value;
    l("contentType", B);
  };
  let g;
  const y = () => {
    a(o, (V) => {
      let B = V.data.parameters;
      return B.splice(r(), 1), { parameters: [...B] };
    }), g?.hide();
  };
  var b = {
    get parameter() {
      return n();
    },
    set parameter(V) {
      n(V), v();
    },
    get index() {
      return r();
    },
    set index(V) {
      r(V), v();
    }
  }, $ = V2(), C = oe($), x = Z(C);
  Ge(x, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), R(C);
  var k = z(C, 2), E = Z(k);
  xd(E, {
    get checked() {
      return c(s).required;
    },
    onchange: f
  }), R(k);
  var S = z(k, 2), O = Z(S);
  return Ot(
    Yn(O, {
      placement: "bottom",
      floating: (V) => {
        var B = H2(), Y = Z(B), A = z(Z(Y));
        {
          let D = /* @__PURE__ */ P(() => c(s).contentType ? [c(s).contentType] : []);
          ut(A, {
            get items() {
              return fa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(D);
            },
            onSelect: h
          });
        }
        R(Y);
        var _ = z(Y, 2), M = z(Z(_));
        {
          let D = /* @__PURE__ */ P(() => c(s).formType ? [c(s).formType] : []);
          ut(M, {
            get items() {
              return Ym;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(D);
            },
            onSelect: p
          });
        }
        R(_);
        var w = z(_, 2);
        {
          var T = (D) => {
            var W = O2(), J = z(Z(W));
            {
              let te = /* @__PURE__ */ P(() => c(s).enums?.join(`
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
            R(W), L(D, W);
          };
          ae(w, (D) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && D(T);
          });
        }
        var N = z(w, 2), I = z(Z(N));
        je(I, {
          rows: 1,
          style: "width: 100%;",
          onchange: (D) => {
            u("formLabel", D);
          },
          get value() {
            return c(s).formLabel;
          }
        }), R(N);
        var K = z(N, 2), j = z(Z(K));
        je(j, {
          rows: 2,
          style: "width: 100%;",
          onchange: (D) => {
            u("formDescription", D);
          },
          get value() {
            return c(s).formDescription;
          }
        }), R(K);
        var H = z(K, 2), F = z(Z(H));
        je(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (D) => {
            u("formPlaceholder", D);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), R(H);
        var q = z(H, 2), G = Z(q);
        Te(G, {
          onclick: y,
          children: (D, W) => {
            me();
            var J = _e("删除");
            L(D, J);
          },
          $$slots: { default: !0 }
        }), R(q), R(B), L(V, B);
      },
      children: (V, B) => {
        Te(V, {
          class: "input-btn-more",
          children: (Y, A) => {
            var _ = z2();
            L(Y, _);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => g = V,
    () => g
  ), R(S), L(e, $), ue(b);
}
se(Dd, { parameter: {}, index: {} }, [], [], !0);
var A2 = /* @__PURE__ */ ee('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), I2 = /* @__PURE__ */ ee('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), R2 = /* @__PURE__ */ ee('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Z2 = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Ad(e, t) {
  le(t, !0), Ve(e, Z2);
  let n = Fe(), r = En(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = R2(), s = Z(i);
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
  pt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, f) => {
      Dd(u, {
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
  ), R(i), L(e, i), ue();
}
se(Ad, {}, [], [], !0);
const co = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = _n()), co(t.children);
}), e), tn = () => {
  const { updateNodeData: e } = ot();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => co(s?.children)) : co(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: _n()
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
var K2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), B2 = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), j2 = /* @__PURE__ */ ee('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const X2 = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Id(e, t) {
  le(t, !0), Ve(e, X2);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Zt(e, Be(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = K2();
      L(a, l);
    },
    children: (a, l) => {
      var u = j2(), d = oe(u), f = Z(d);
      Le(f, {
        level: 3,
        children: (g, y) => {
          me();
          var b = _e("输入参数");
          L(g, b);
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
          var b = B2();
          L(g, b);
        },
        $$slots: { default: !0 }
      }), R(d);
      var h = z(d, 2);
      Ad(h, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(Id, { data: {} }, [], [], !0);
const Rd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Rd(e, r.source, n));
}, Zd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Zd(r.children, t + "." + r.name, n)
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
          children: Zd(r, e.id, t)
        };
    }
  }
}, Kd = (e = !1) => {
  const t = Fe(), n = En(t), r = /* @__PURE__ */ P(en), o = /* @__PURE__ */ P(() => c(r).nodes), i = /* @__PURE__ */ P(() => c(r).edges), s = /* @__PURE__ */ P(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ P(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const p = Nl(d, f, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      Rd(d, t, c(i));
      for (const f of c(o))
        if (d.includes(f.id)) {
          const p = f.parentId === n.current.id, h = Nl(f, p, u);
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
var W2 = /* @__PURE__ */ ee('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), q2 = /* @__PURE__ */ ee('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Y2 = /* @__PURE__ */ ee('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const F2 = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Bd(e, t) {
  le(t, !0), Ve(e, F2), Sn(() => {
    c(u).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = Fe(), l = En(a), u = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ot(), f = (M, w) => {
    d(a, (T) => {
      let N = T.data?.[o()];
      return N[r()] = { ...N[r()], [M]: w }, { [o()]: N };
    });
  }, p = (M, w) => {
    const T = w.target.value;
    f(M, T);
  }, h = (M) => {
    const w = M.value;
    f("ref", w);
  }, g = (M) => {
    const w = M.value;
    f("refType", w);
  }, y = (M) => {
    const w = M.value;
    f("contentType", w);
  };
  let b;
  const $ = () => {
    d(a, (M) => {
      let w = M.data?.[o()];
      return w.splice(r(), 1), { [o()]: [...w] };
    }), b?.hide();
  };
  let C = Kd(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(M) {
      n(M), v();
    },
    get index() {
      return r();
    },
    set index(M) {
      r(M), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(M) {
      o(M), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(M) {
      i(M), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType(M = !1) {
      s(M), v();
    }
  }, k = Y2(), E = oe(k), S = Z(E);
  {
    let M = /* @__PURE__ */ P(() => c(u).nameDisabled === !0);
    Ge(S, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(M);
      },
      oninput: (w) => p("name", w)
    });
  }
  R(E);
  var O = z(E, 2), V = Z(O);
  {
    var B = (M) => {
      Ge(M, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (w) => p("value", w)
      });
    }, Y = (M) => {
      var w = Se(), T = oe(w);
      {
        var N = (I) => {
          {
            let K = /* @__PURE__ */ P(() => [c(u).ref]);
            ut(I, {
              get items() {
                return C.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(K);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ae(
          T,
          (I) => {
            c(u).refType !== "input" && I(N);
          },
          !0
        );
      }
      L(M, w);
    };
    ae(V, (M) => {
      c(u).refType === "fixed" ? M(B) : M(Y, !1);
    });
  }
  R(O);
  var A = z(O, 2), _ = Z(A);
  return Ot(
    Yn(_, {
      placement: "bottom",
      floating: (M) => {
        var w = q2(), T = Z(w), N = z(Z(T));
        {
          let W = /* @__PURE__ */ P(() => c(u).refType ? [c(u).refType] : []);
          ut(N, {
            get items() {
              return qm;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(W);
            },
            onSelect: g
          });
        }
        R(T);
        var I = z(T, 2);
        {
          var K = (W) => {
            var J = W2(), te = z(Z(J));
            {
              let ne = /* @__PURE__ */ P(() => c(u).contentType ? [c(u).contentType] : []);
              ut(te, {
                get items() {
                  return fa;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(ne);
                },
                onSelect: y
              });
            }
            R(J), L(W, J);
          };
          ae(I, (W) => {
            s() && W(K);
          });
        }
        var j = z(I, 2), H = z(Z(j));
        je(H, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            p("defaultValue", W);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), R(j);
        var F = z(j, 2), q = z(Z(F));
        je(q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            p("description", W);
          },
          get value() {
            return c(u).description;
          }
        }), R(F);
        var G = z(F, 2), D = Z(G);
        Te(D, {
          onclick: $,
          children: (W, J) => {
            me();
            var te = _e("删除");
            L(W, te);
          },
          $$slots: { default: !0 }
        }), R(G), R(w), L(M, w);
      },
      children: (M, w) => {
        Mo(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => b = M,
    () => b
  ), R(A), L(e, k), ue(x);
}
se(
  Bd,
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
function wt(e, t) {
  le(t, !0), Ve(e, Q2);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = Fe(), a = En(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = G2(), f = Z(d);
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
  return pt(
    h,
    19,
    () => c(l),
    (g) => g.id,
    (g, y, b) => {
      Bd(g, {
        get parameter() {
          return c(y);
        },
        get index() {
          return c(b);
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
      var y = U2(), b = Z(y, !0);
      R(y), Ce(() => Ke(b, n())), L(g, y);
    }
  ), R(d), L(e, d), ue(u);
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
var ew = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), tw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ ee('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const rw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function jd(e, t) {
  le(t, !0), Ve(e, rw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Zt(e, Be(
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
        var u = nw(), d = oe(u), f = Z(d);
        Le(f, {
          level: 3,
          children: (g, y) => {
            me();
            var b = _e("输出参数");
            L(g, b);
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
            var b = tw();
            L(g, b);
          },
          $$slots: { default: !0 }
        }), R(d);
        var h = z(d, 2);
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
se(jd, { data: {} }, [], [], !0);
const Gi = (e) => JSON.parse(JSON.stringify(e));
var ow = /* @__PURE__ */ he('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), iw = /* @__PURE__ */ ee('<div class="input-more-item svelte-hwmib9"><!></div>'), sw = /* @__PURE__ */ ee('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), aw = /* @__PURE__ */ ee('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const lw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Xd(e, t) {
  le(t, !0), Ve(e, lw);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = Fe(), a = En(s), l = /* @__PURE__ */ P(() => {
    let _ = a?.current?.data?.[o()], M;
    if (_ && r().length > 0) {
      let w = _;
      for (let T = 0; T < r().length; T++) {
        const N = r()[T];
        T == r().length - 1 ? M = w[N] : w = w[N].children;
      }
    }
    return { ...n(), ...M };
  });
  const { updateNodeData: u } = ot(), d = (_, M) => {
    u(s, (w) => {
      const T = w.data?.[o()];
      if (T && r().length > 0) {
        let N = T;
        for (let I = 0; I < r().length; I++) {
          const K = r()[I];
          I == r().length - 1 ? N[K] = { ...N[K], [_]: M } : N = N[K].children;
        }
      }
      return { [o()]: [...Gi(T)] };
    });
  }, f = (_, M) => {
    const w = M.target.value;
    d(_, w);
  }, p = (_) => {
    const M = _.value;
    d("dataType", M);
  };
  let h;
  const g = () => {
    u(s, (_) => {
      let M = _.data?.[o()];
      if (M && r().length > 0) {
        let w = M;
        for (let T = 0; T < r().length; T++) {
          const N = r()[T];
          T == r().length - 1 ? w.splice(N, 1) : w = w[N].children;
        }
      }
      return { [o()]: [...Gi(M)] };
    }), h?.hide();
  }, y = () => {
    u(s, (_) => {
      let M = _.data?.[o()];
      if (M && r().length > 0) {
        let w = M;
        for (let T = 0; T < r().length; T++) {
          const N = r()[T];
          T == r().length - 1 ? w[N].children ? w[N].children.push({ id: _n(), name: "newParam", dataType: "String" }) : w[N].children = [{ id: _n(), name: "newParam", dataType: "String" }] : w = w[N].children;
        }
      }
      return { [o()]: [...Gi(M)] };
    });
  };
  var b = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), v();
    },
    get position() {
      return r();
    },
    set position(_) {
      r(_), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(_ = "请输入参数值") {
      i(_), v();
    }
  }, $ = aw(), C = oe($), x = Z(C);
  {
    var k = (_) => {
      var M = Se(), w = oe(M);
      pt(w, 17, r, Lr, (T, N) => {
        me();
        var I = _e(" ");
        L(T, I);
      }), L(_, M);
    };
    ae(x, (_) => {
      r().length > 1 && _(k);
    });
  }
  var E = z(x, 2);
  {
    let _ = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    Ge(E, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (M) => {
        f("name", M);
      },
      get disabled() {
        return c(_);
      }
    });
  }
  R(C);
  var S = z(C, 2), O = Z(S);
  {
    let _ = /* @__PURE__ */ P(() => c(l).dataTypeItems || Wm), M = /* @__PURE__ */ P(() => c(l).dataType ? [c(l).dataType] : []), w = /* @__PURE__ */ P(() => c(l).dataTypeDisabled === !0);
    ut(O, {
      get items() {
        return c(_);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(M);
      },
      get disabled() {
        return c(w);
      },
      onSelect: p
    });
  }
  var V = z(O, 2);
  {
    var B = (_) => {
      Te(_, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (M, w) => {
          var T = ow();
          L(M, T);
        },
        $$slots: { default: !0 }
      });
    };
    ae(V, (_) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && _(B);
    });
  }
  R(S);
  var Y = z(S, 2), A = Z(Y);
  return Ot(
    Yn(A, {
      placement: "bottom",
      floating: (_) => {
        var M = sw(), w = Z(M), T = z(Z(w));
        {
          let H = /* @__PURE__ */ P(() => c(l).defaultValue || "");
          je(T, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(H);
            },
            onchange: (F) => {
              f("defaultValue", F);
            }
          });
        }
        R(w);
        var N = z(w, 2), I = z(Z(N));
        {
          let H = /* @__PURE__ */ P(() => c(l).description || "");
          je(I, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(H);
            },
            onchange: (F) => {
              f("description", F);
            }
          });
        }
        R(N);
        var K = z(N, 2);
        {
          var j = (H) => {
            var F = iw(), q = Z(F);
            Te(q, {
              onclick: g,
              children: (G, D) => {
                me();
                var W = _e("删除");
                L(G, W);
              },
              $$slots: { default: !0 }
            }), R(F), L(H, F);
          };
          ae(K, (H) => {
            c(l).deleteDisabled !== !0 && H(j);
          });
        }
        R(M), L(_, M);
      },
      children: (_, M) => {
        Mo(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => h = _,
    () => h
  ), R(Y), L(e, $), ue(b);
}
se(
  Xd,
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
var uw = /* @__PURE__ */ ee("<!> <!>", 1), cw = /* @__PURE__ */ ee('<div class="none-params svelte-1oz5kx0"> </div>'), dw = /* @__PURE__ */ ee('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), fw = /* @__PURE__ */ ee('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const pw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Mn(e, t) {
  le(t, !0), Ve(e, pw);
  const n = (g, y = ft, b = ft) => {
    var $ = Se(), C = oe($);
    pt(
      C,
      19,
      y,
      (x) => `${x.id}_${x.children ? x.children.length : 0}`,
      (x, k, E) => {
        var S = uw(), O = oe(S);
        {
          let Y = /* @__PURE__ */ P(() => [...b(), c(E)]);
          Xd(O, {
            get parameter() {
              return c(k);
            },
            get position() {
              return c(Y);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var V = z(O, 2);
        {
          var B = (Y) => {
            {
              let A = /* @__PURE__ */ P(() => [...b(), c(E)]);
              n(Y, () => c(k).children, () => c(A));
            }
          };
          ae(V, (Y) => {
            c(k).children && Y(B);
          });
        }
        L(x, S);
      },
      (x) => {
        var k = Se(), E = oe(k);
        {
          var S = (O) => {
            var V = cw(), B = Z(V, !0);
            R(V), Ce(() => Ke(B, r())), L(O, V);
          };
          ae(E, (O) => {
            b().length === 0 && O(S);
          });
        }
        L(x, k);
      }
    ), L(g, $);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = Fe(), a = En(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = fw(), f = Z(d);
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
  return n(h, () => c(l) || [], () => []), R(d), L(e, d), ue(u);
}
se(Mn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var hw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), gw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), yw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), ww = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), bw = /* @__PURE__ */ ee('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), xw = /* @__PURE__ */ ee('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const $w = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Wd(e, t) {
  le(t, !0), Ve(e, $w);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn(), s = Kn();
  let a = /* @__PURE__ */ Ee(Dt([]));
  Sn(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: l } = ot(), u = (f) => {
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
  We(() => {
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
  return Zt(e, Be(
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
        var h = xw(), g = oe(h), y = Z(g);
        Le(y, {
          level: 3,
          children: (K, j) => {
            me();
            var H = _e("输入参数");
            L(K, H);
          },
          $$slots: { default: !0 }
        });
        var b = z(y, 2);
        Te(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (K, j) => {
            var H = gw();
            L(K, H);
          },
          $$slots: { default: !0 }
        }), R(g);
        var $ = z(g, 2);
        wt($, {});
        var C = z($, 2), x = Z(C);
        Le(x, {
          level: 3,
          children: (K, j) => {
            me();
            var H = _e("图片识别");
            L(K, H);
          },
          $$slots: { default: !0 }
        });
        var k = z(x, 2);
        Te(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (K, j) => {
            var H = vw();
            L(K, H);
          },
          $$slots: { default: !0 }
        }), R(C);
        var E = z(C, 2);
        wt(E, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var S = z(E, 2);
        Le(S, {
          level: 3,
          mt: "10px",
          children: (K, j) => {
            me();
            var H = _e("模型设置");
            L(K, H);
          },
          $$slots: { default: !0 }
        });
        var O = z(S, 4), V = Z(O);
        {
          let K = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          ut(V, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (j) => {
              const H = j.value;
              l(o, () => ({ llmId: H }));
            },
            get value() {
              return c(K);
            }
          });
        }
        var B = z(V, 2);
        Yn(B, {
          placement: "bottom",
          floating: (K) => {
            var j = bw(), H = z(Z(j), 2), F = Z(H), q = Z(F), G = Z(q);
            R(q);
            var D = z(q, 2);
            nr(D), D.__input = [mw, l, o], R(F), R(H);
            var W = z(H, 2), J = Z(W), te = Z(J), ne = Z(te);
            R(te);
            var Q = z(te, 2);
            nr(Q), Q.__input = [yw, l, o], R(J), R(W);
            var pe = z(W, 2), ce = Z(pe), re = Z(ce), ie = Z(re);
            R(re);
            var fe = z(re, 2);
            nr(fe), fe.__input = [ww, l, o], R(ce), R(pe), R(j), Ce(() => {
              Ke(G, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), Ko(D, n().temperature ?? 0.7), Ke(ne, `Top P: ${n().topP ?? 0.9 ?? ""}`), Ko(Q, n().topP ?? 0.9), Ke(ie, `Top K: ${n().topK ?? 50 ?? ""}`), Ko(fe, n().topK ?? 50);
            }), L(K, j);
          },
          children: (K, j) => {
            Mo(K, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), R(O);
        var Y = z(O, 4), A = Z(Y);
        {
          let K = /* @__PURE__ */ P(() => n().systemPrompt || "");
          je(A, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(K);
            },
            oninput: (j) => {
              l(o, { systemPrompt: j.target.value });
            }
          });
        }
        R(Y);
        var _ = z(Y, 4), M = Z(_);
        {
          let K = /* @__PURE__ */ P(() => n().userPrompt || "");
          je(M, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(K);
            },
            oninput: (j) => {
              l(o, { userPrompt: j.target.value });
            }
          });
        }
        R(_);
        var w = z(_, 2), T = Z(w);
        Le(T, {
          level: 3,
          children: (K, j) => {
            me();
            var H = _e("输出参数");
            L(K, H);
          },
          $$slots: { default: !0 }
        });
        var N = z(T, 2);
        {
          let K = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          ut(N, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (j) => {
              u(j.value);
            },
            get value() {
              return c(K);
            }
          });
        }
        R(w);
        var I = z(w, 2);
        Mn(I, {}), L(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
Wn(["input"]);
se(Wd, { data: {} }, [], [], !0);
var Cw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), _w = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ ee('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const Pw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  le(t, !0), Ve(e, Pw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Sn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Fe(), { addParameter: i } = tn(), { updateNodeData: s } = ot(), a = [
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
  return Zt(e, Be(
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
        var f = Sw(), p = oe(f), h = Z(p);
        Le(h, {
          level: 3,
          children: (B, Y) => {
            me();
            var A = _e("输入参数");
            L(B, A);
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
          children: (B, Y) => {
            var A = _w();
            L(B, A);
          },
          $$slots: { default: !0 }
        }), R(p);
        var y = z(p, 2);
        wt(y, {});
        var b = z(y, 2);
        Le(b, {
          level: 3,
          mt: "10px",
          children: (B, Y) => {
            me();
            var A = _e("代码");
            L(B, A);
          },
          $$slots: { default: !0 }
        });
        var $ = z(b, 4), C = Z($);
        {
          let B = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          ut(C, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (Y) => {
              const A = Y.value;
              s(o, () => ({ engine: A }));
            },
            get value() {
              return c(B);
            }
          });
        }
        R($);
        var x = z($, 4), k = Z(x);
        {
          let B = /* @__PURE__ */ P(() => n().code || "");
          je(k, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (Y) => {
              s(o, () => ({ code: Y.target.value }));
            },
            get value() {
              return c(B);
            }
          });
        }
        R(x);
        var E = z(x, 2), S = Z(E);
        Le(S, {
          level: 3,
          mt: "10px",
          children: (B, Y) => {
            me();
            var A = _e("输出参数");
            L(B, A);
          },
          $$slots: { default: !0 }
        });
        var O = z(S, 2);
        Te(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (B, Y) => {
            var A = kw();
            L(B, A);
          },
          $$slots: { default: !0 }
        }), R(E);
        var V = z(E, 2);
        Mn(V, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(qd, { data: {} }, [], [], !0);
var Ew = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Nw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ ee('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const Tw = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  le(t, !0), Ve(e, Tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn(), { updateNodeData: s } = ot();
  We(() => {
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
  return Zt(e, Be(
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
        var d = Mw(), f = oe(d), p = Z(f);
        Le(p, {
          level: 3,
          children: (E, S) => {
            me();
            var O = _e("输入参数");
            L(E, O);
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
          children: (E, S) => {
            var O = Nw();
            L(E, O);
          },
          $$slots: { default: !0 }
        }), R(f);
        var g = z(f, 2);
        wt(g, {});
        var y = z(g, 2);
        Le(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (E, S) => {
            me();
            var O = _e("模板内容");
            L(E, O);
          },
          $$slots: { default: !0 }
        });
        var b = z(y, 2), $ = Z(b);
        {
          let E = /* @__PURE__ */ P(() => n().template || "");
          je($, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (S) => {
              s(o, () => ({ template: S.target.value }));
            },
            get value() {
              return c(E);
            }
          });
        }
        R(b);
        var C = z(b, 2), x = Z(C);
        Le(x, {
          level: 3,
          mt: "10px",
          children: (E, S) => {
            me();
            var O = _e("输出参数");
            L(E, O);
          },
          $$slots: { default: !0 }
        }), R(C);
        var k = z(C, 2);
        Mn(k, {}), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Yd, { data: {} }, [], [], !0);
var Lw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Ow = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ ee('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Vw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Rw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Zw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Kw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ ee('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const jw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Fd(e, t) {
  le(t, !0), Ve(e, jw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Sn(() => {
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
  ], i = Fe(), { addParameter: s } = tn(), { updateNodeData: a } = ot();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return Zt(e, Be(
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
        var f = Bw(), p = oe(f), h = Z(p);
        Le(h, {
          level: 3,
          children: (D, W) => {
            me();
            var J = _e("输入参数");
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
          children: (D, W) => {
            var J = Ow();
            L(D, J);
          },
          $$slots: { default: !0 }
        }), R(p);
        var y = z(p, 2);
        wt(y, {});
        var b = z(y, 2);
        Le(b, {
          level: 3,
          mt: "10px",
          children: (D, W) => {
            me();
            var J = _e("URL 地址");
            L(D, J);
          },
          $$slots: { default: !0 }
        });
        var $ = z(b, 2), C = Z($), x = Z(C);
        {
          let D = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          ut(x, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (W) => {
              const J = W.value;
              a(i, () => ({ method: J }));
            },
            get value() {
              return c(D);
            }
          });
        }
        R(C);
        var k = z(C, 2), E = Z(k);
        {
          let D = /* @__PURE__ */ P(() => n().url || "");
          Ge(E, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (W) => {
              a(i, () => ({ url: W.target.value }));
            },
            get value() {
              return c(D);
            }
          });
        }
        R(k), R($);
        var S = z($, 2), O = Z(S);
        Le(O, {
          level: 3,
          children: (D, W) => {
            me();
            var J = _e("Http 头信息");
            L(D, J);
          },
          $$slots: { default: !0 }
        });
        var V = z(O, 2);
        Te(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (D, W) => {
            var J = Hw();
            L(D, J);
          },
          $$slots: { default: !0 }
        }), R(S);
        var B = z(S, 2);
        wt(B, { dataKeyName: "headers" });
        var Y = z(B, 2);
        {
          var A = (D) => {
            var W = zw(), J = oe(W);
            Le(J, {
              level: 3,
              mt: "10px",
              children: ($e, Ne) => {
                me();
                var X = _e("Body");
                L($e, X);
              },
              $$slots: { default: !0 }
            });
            var te = z(J, 2), ne = Z(te), Q = Z(ne);
            {
              let $e = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              Ge(Q, {
                type: "radio",
                value: "",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            me(), R(ne);
            var pe = z(ne, 2), ce = Z(pe);
            {
              let $e = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              Ge(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            me(), R(pe);
            var re = z(pe, 2), ie = Z(re);
            {
              let $e = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              Ge(ie, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            me(), R(re);
            var fe = z(re, 2), ve = Z(fe);
            {
              let $e = /* @__PURE__ */ P(() => n().bodyType === "json");
              Ge(ve, {
                type: "radio",
                value: "json",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            me(), R(fe);
            var xe = z(fe, 2), de = Z(xe);
            {
              let $e = /* @__PURE__ */ P(() => n().bodyType === "raw");
              Ge(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c($e);
                },
                onchange: (Ne) => {
                  Ne.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            me(), R(xe), R(te), L(D, W);
          };
          ae(Y, (D) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && D(A);
          });
        }
        var _ = z(Y, 2);
        {
          var M = (D) => {
            var W = Dw(), J = oe(W), te = Z(J);
            Le(te, {
              level: 3,
              children: (pe, ce) => {
                me();
                var re = _e("参数");
                L(pe, re);
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
              children: (pe, ce) => {
                var re = Vw();
                L(pe, re);
              },
              $$slots: { default: !0 }
            }), R(J);
            var Q = z(J, 2);
            wt(Q, { dataKeyName: "formData" }), L(D, W);
          };
          ae(_, (D) => {
            n().bodyType === "form-data" && D(M);
          });
        }
        var w = z(_, 2);
        {
          var T = (D) => {
            var W = Iw(), J = oe(W), te = Z(J);
            Le(te, {
              level: 3,
              children: (pe, ce) => {
                me();
                var re = _e("Body 参数");
                L(pe, re);
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
              children: (pe, ce) => {
                var re = Aw();
                L(pe, re);
              },
              $$slots: { default: !0 }
            }), R(J);
            var Q = z(J, 2);
            wt(Q, { dataKeyName: "formUrlencoded" }), L(D, W);
          };
          ae(w, (D) => {
            n().bodyType === "x-www-form-urlencoded" && D(T);
          });
        }
        var N = z(w, 2);
        {
          var I = (D) => {
            var W = Rw(), J = Z(W);
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
            }), R(W), L(D, W);
          };
          ae(N, (D) => {
            n().bodyType === "json" && D(I);
          });
        }
        var K = z(N, 2);
        {
          var j = (D) => {
            var W = Zw(), J = Z(W);
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
            }), R(W), L(D, W);
          };
          ae(K, (D) => {
            n().bodyType === "raw" && D(j);
          });
        }
        var H = z(K, 2), F = Z(H);
        Le(F, {
          level: 3,
          mt: "10px",
          children: (D, W) => {
            me();
            var J = _e("输出参数");
            L(D, J);
          },
          $$slots: { default: !0 }
        });
        var q = z(F, 2);
        Te(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (D, W) => {
            var J = Kw();
            L(D, J);
          },
          $$slots: { default: !0 }
        }), R(H);
        var G = z(H, 2);
        Mn(G, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Fd, { data: {} }, [], [], !0);
var Xw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Ww = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qw = /* @__PURE__ */ ee('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Yw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  le(t, !0), Ve(e, Yw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn(), s = Kn();
  let a = /* @__PURE__ */ Ee(Dt([]));
  Sn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ot();
  We(() => {
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
  return Zt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Xw();
        L(d, f);
      },
      children: (d, f) => {
        var p = qw(), h = oe(p), g = Z(h);
        Le(g, {
          level: 3,
          children: (A, _) => {
            me();
            var M = _e("输入参数");
            L(A, M);
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
          children: (A, _) => {
            var M = Ww();
            L(A, M);
          },
          $$slots: { default: !0 }
        }), R(h);
        var b = z(h, 2);
        wt(b, {});
        var $ = z(b, 2);
        Le($, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            me();
            var M = _e("知识库设置");
            L(A, M);
          },
          $$slots: { default: !0 }
        });
        var C = z($, 4), x = Z(C);
        {
          let A = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          ut(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (_) => {
              const M = _.value;
              l(o, () => ({ knowledgeId: M }));
            },
            get value() {
              return c(A);
            }
          });
        }
        R(C);
        var k = z(C, 4), E = Z(k);
        Ge(E, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const _ = A.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), R(k);
        var S = z(k, 4), O = Z(S);
        {
          let A = /* @__PURE__ */ P(() => n().limit || "");
          Ge(O, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (_) => {
              const M = _.target.value;
              l(o, () => ({ limit: M }));
            },
            get value() {
              return c(A);
            }
          });
        }
        R(S);
        var V = z(S, 2), B = Z(V);
        Le(B, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            me();
            var M = _e("输出参数");
            L(A, M);
          },
          $$slots: { default: !0 }
        }), R(V);
        var Y = z(V, 2);
        Mn(Y, {}), L(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(Jd, { data: {} }, [], [], !0);
var Fw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Jw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uw = /* @__PURE__ */ ee('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Gw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ud(e, t) {
  le(t, !0), Ve(e, Gw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn(), s = Kn();
  let a = /* @__PURE__ */ Ee(Dt([]));
  Sn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ot();
  We(() => {
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
  return Zt(e, Be(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Fw();
        L(d, f);
      },
      children: (d, f) => {
        var p = Uw(), h = oe(p), g = Z(h);
        Le(g, {
          level: 3,
          children: (A, _) => {
            me();
            var M = _e("输入参数");
            L(A, M);
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
          children: (A, _) => {
            var M = Jw();
            L(A, M);
          },
          $$slots: { default: !0 }
        }), R(h);
        var b = z(h, 2);
        wt(b, {});
        var $ = z(b, 2);
        Le($, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            me();
            var M = _e("搜索引擎设置");
            L(A, M);
          },
          $$slots: { default: !0 }
        });
        var C = z($, 4), x = Z(C);
        {
          let A = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          ut(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (_) => {
              const M = _.value;
              l(o, () => ({ engine: M }));
            },
            get value() {
              return c(A);
            }
          });
        }
        R(C);
        var k = z(C, 4), E = Z(k);
        Ge(E, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (A) => {
            const _ = A.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), R(k);
        var S = z(k, 4), O = Z(S);
        Ge(O, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (A) => {
            const _ = A.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), R(S);
        var V = z(S, 2), B = Z(V);
        Le(B, {
          level: 3,
          mt: "10px",
          children: (A, _) => {
            me();
            var M = _e("输出参数");
            L(A, M);
          },
          $$slots: { default: !0 }
        }), R(V);
        var Y = z(V, 2);
        Mn(Y, {}), L(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(Ud, { data: {} }, [], [], !0);
var Qw = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), eb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tb = /* @__PURE__ */ ee('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const nb = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Gd(e, t) {
  le(t, !0), Ve(e, nb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn();
  We(() => {
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
  return Zt(e, Be(
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
        Rn(a, {
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
        var u = tb(), d = oe(u), f = Z(d);
        Le(f, {
          level: 3,
          children: ($, C) => {
            me();
            var x = _e("循环变量");
            L($, x);
          },
          $$slots: { default: !0 }
        }), R(d);
        var p = z(d, 2);
        wt(p, { dataKeyName: "loopVars" });
        var h = z(p, 2), g = Z(h);
        Le(g, {
          level: 3,
          children: ($, C) => {
            me();
            var x = _e("输出参数");
            L($, x);
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
          children: ($, C) => {
            var x = eb();
            L($, x);
          },
          $$slots: { default: !0 }
        }), R(h);
        var b = z(h, 2);
        wt(b, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(Gd, { data: {} }, [], [], !0);
var rb = /* @__PURE__ */ ee('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), ob = /* @__PURE__ */ ee('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const ib = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Qd(e, t) {
  le(t, !0), Ve(e, ib);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = Fe(), a = En(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ot(), d = (_, M) => {
    u(s, (w) => {
      let T = w.data?.[o()];
      return T[r()] = { ...T[r()], [_]: M }, { [o()]: T };
    });
  }, f = (_, M) => {
    const w = M.target.value;
    d(_, w);
  }, p = (_) => {
    const M = _.value;
    d("ref", M);
  }, h = (_) => {
    const M = _.value;
    d("formType", M);
  }, g = (_) => {
    const M = _.value;
    d("contentType", M);
  };
  let y;
  const b = () => {
    u(s, (_) => {
      let M = _.data?.[o()];
      return M.splice(r(), 1), { [o()]: [...M] };
    }), y?.hide();
  };
  let $ = Kd(i());
  var C = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), v();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), v();
    }
  }, x = ob(), k = oe(x), E = Z(k);
  {
    let _ = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    Ge(E, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(_);
      },
      oninput: (M) => f("name", M)
    });
  }
  R(k);
  var S = z(k, 2), O = Z(S);
  {
    var V = (_) => {
      Ge(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => f("value", M)
      });
    }, B = (_) => {
      var M = Se(), w = oe(M);
      {
        var T = (N) => {
          {
            let I = /* @__PURE__ */ P(() => [c(l).ref]);
            ut(N, {
              get items() {
                return $.current;
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
          w,
          (N) => {
            c(l).refType !== "input" && N(T);
          },
          !0
        );
      }
      L(_, M);
    };
    ae(O, (_) => {
      c(l).refType === "fixed" ? _(V) : _(B, !1);
    });
  }
  R(S);
  var Y = z(S, 2), A = Z(Y);
  return Ot(
    Yn(A, {
      placement: "bottom",
      floating: (_) => {
        var M = rb(), w = Z(M), T = z(Z(w));
        {
          let D = /* @__PURE__ */ P(() => c(l).contentType ? [c(l).contentType] : []);
          ut(T, {
            get items() {
              return fa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(D);
            },
            onSelect: g
          });
        }
        R(w);
        var N = z(w, 2), I = z(Z(N));
        {
          let D = /* @__PURE__ */ P(() => c(l).formType ? [c(l).formType] : []);
          ut(I, {
            get items() {
              return Fm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(D);
            },
            onSelect: h
          });
        }
        R(N);
        var K = z(N, 2), j = z(Z(K));
        je(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (D) => {
            f("formLabel", D);
          },
          get value() {
            return c(l).formLabel;
          }
        }), R(K);
        var H = z(K, 2), F = z(Z(H));
        je(F, {
          rows: 2,
          style: "width: 100%;",
          onchange: (D) => {
            f("formDescription", D);
          },
          get value() {
            return c(l).formDescription;
          }
        }), R(H);
        var q = z(H, 2), G = Z(q);
        Te(G, {
          onclick: b,
          children: (D, W) => {
            me();
            var J = _e("删除");
            L(D, J);
          },
          $$slots: { default: !0 }
        }), R(q), R(M), L(_, M);
      },
      children: (_, M) => {
        Mo(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), R(Y), L(e, x), ue(C);
}
se(
  Qd,
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
function ef(e, t) {
  le(t, !0), Ve(e, ub);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = Fe(), s = En(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = lb(), d = Z(u);
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
  return pt(
    p,
    19,
    () => c(a),
    (h) => h.id,
    (h, g, y) => {
      Qd(h, {
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
      var g = ab(), y = Z(g, !0);
      R(g), Ce(() => Ke(y, n())), L(h, g);
    }
  ), R(u), L(e, u), ue(l);
}
se(ef, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
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
var cb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), db = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fb = /* @__PURE__ */ ee('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const pb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  le(t, !0), Ve(e, pb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn(), { updateNodeData: s } = ot();
  We(() => {
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
      _s(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return Zt(e, Be(
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
        var d = fb(), f = oe(d), p = Z(f);
        Le(p, {
          level: 3,
          children: (E, S) => {
            me();
            var O = _e("确认数据");
            L(E, O);
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
          children: (E, S) => {
            var O = db();
            L(E, O);
          },
          $$slots: { default: !0 }
        }), R(f);
        var g = z(f, 2);
        ef(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = z(g, 2);
        Le(y, {
          level: 3,
          mt: "10px",
          children: (E, S) => {
            me();
            var O = _e("确认消息");
            L(E, O);
          },
          $$slots: { default: !0 }
        });
        var b = z(y, 4), $ = Z(b);
        {
          let E = /* @__PURE__ */ P(() => n().message || "");
          je($, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (S) => {
              s(o, () => ({ message: S.target.value }));
            },
            get value() {
              return c(E);
            }
          });
        }
        R(b);
        var C = z(b, 2), x = Z(C);
        Le(x, {
          level: 3,
          mt: "10px",
          children: (E, S) => {
            me();
            var O = _e("输出参数");
            L(E, O);
          },
          $$slots: { default: !0 }
        }), R(C);
        var k = z(C, 2);
        Mn(k, { placeholder: "" }), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(tf, { data: {} }, [], [], !0);
const hb = {
  startNode: Id,
  codeNode: qd,
  confirmNode: tf,
  llmNode: Wd,
  templateNode: Yd,
  httpNode: Fd,
  knowledgeNode: Jd,
  searchEngineNode: Ud,
  loopNode: Gd,
  endNode: jd
};
var gb = /* @__PURE__ */ ee("<!> ", 1);
function ks(e, t) {
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
      qs(p, n);
      var h = z(p);
      Ce(() => Ke(h, ` ${r() ?? ""}`)), L(u, f);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se(ks, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var vb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), mb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), yb = /* @__PURE__ */ ee('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function nf(e, t) {
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
  ], s = [], a = Kn(), l = a.customNodes;
  if (l) {
    const $ = Object.keys(l).sort((C, x) => (l[C].sortNo || 0) - (l[x].sortNo || 0));
    for (let C of $)
      l[C].group === "base" ? o.push({ type: C, ...l[C] }) : s.push({
        icon: l[C].icon,
        title: l[C].title,
        type: C
      });
    o.sort((C, x) => (C.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const $ = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray($)) {
      for (let C of $)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === C) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = yb(), d = Z(u), f = Z(d), p = Z(f);
  Cd(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: ($) => {
      U(n, $.value.toString(), !0);
    }
  }), R(f);
  var h = z(f, 2), g = Z(h);
  pt(g, 21, () => o, Lr, ($, C) => {
    ks($, Be(() => c(C)));
  }), R(g);
  var y = z(g, 2);
  pt(y, 21, () => s, Lr, ($, C) => {
    ks($, Be(() => c(C)));
  }), R(y), R(h), R(d);
  var b = z(d, 2);
  Te(b, {
    onclick: () => {
      U(r, c(r) ? "" : "show", !0);
    },
    children: ($, C) => {
      var x = Se(), k = oe(x);
      {
        var E = (O) => {
          var V = vb();
          L(O, V);
        }, S = (O) => {
          var V = mb();
          L(O, V);
        };
        ae(k, (O) => {
          c(r) === "show" ? O(E) : O(S, !1);
        });
      }
      L($, x);
    },
    $$slots: { default: !0 }
  }), R(u), Ce(() => {
    Pt(u, 1, `tf-toolbar ${c(r) ?? ""}`), ct(g, `display: ${c(n) === "base" ? "flex" : "none"}`), ct(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), L(e, u), ue();
}
se(nf, {}, [], [], !0);
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
var $b = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cb = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), _b = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), kb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Sb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), Pb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Eb = /* @__PURE__ */ ee('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), Nb = /* @__PURE__ */ he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mb = /* @__PURE__ */ ee('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), Tb = /* @__PURE__ */ ee("<!> <!> <div></div> <!>", 1);
const Lb = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function rf(e, t) {
  le(t, !0), Ve(e, Lb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Fe(), { addParameter: i } = tn(), s = ot(), { updateNodeData: a } = s, l = (b) => {
    a(o, b);
  }, u = (b, $) => {
    l({ [b]: $.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = Kn().customNodes[t.type];
  p.render?.(f, d, s);
  const h = p.forms;
  let g;
  We(() => {
    n().expand && g && g.append(f);
  }), We(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), We(() => {
    !n().parameters && p.parameters && l({
      parameters: co(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), We(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: co(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  var y = {
    get data() {
      return n();
    },
    set data(b) {
      n(b), v();
    }
  };
  {
    const b = (C) => {
      var x = Se(), k = oe(x);
      qs(k, () => p.icon), L(C, x);
    };
    let $ = /* @__PURE__ */ P(() => ({ ...n(), description: p.description }));
    Zt(e, Be(
      {
        get data() {
          return c($);
        }
      },
      () => r,
      {
        icon: b,
        children: (C, x) => {
          var k = Tb(), E = oe(k);
          {
            var S = (_) => {
              var M = Cb(), w = oe(M), T = Z(w);
              Le(T, {
                level: 3,
                children: (j, H) => {
                  me();
                  var F = _e("输入参数");
                  L(j, F);
                },
                $$slots: { default: !0 }
              });
              var N = z(T, 2);
              {
                var I = (j) => {
                  Te(j, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (H, F) => {
                      var q = $b();
                      L(H, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(N, (j) => {
                  p.parametersAddEnable !== !1 && j(I);
                });
              }
              R(w);
              var K = z(w, 2);
              wt(K, {}), L(_, M);
            };
            ae(E, (_) => {
              p.parametersEnable !== !1 && _(S);
            });
          }
          var O = z(E, 2);
          {
            var V = (_) => {
              var M = Se(), w = oe(M);
              pt(w, 17, () => h, Lr, (T, N) => {
                var I = Se(), K = oe(I);
                {
                  var j = (F) => {
                    var q = _b(), G = oe(q), D = Z(G, !0);
                    R(G);
                    var W = z(G, 2), J = Z(W);
                    {
                      let te = /* @__PURE__ */ P(() => n()[c(N).name] || c(N).defaultValue);
                      Ge(J, Be(
                        {
                          get placeholder() {
                            return c(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(te);
                          }
                        },
                        () => c(N).attrs,
                        {
                          onchange: (ne) => {
                            u(c(N).name, ne);
                          }
                        }
                      ));
                    }
                    R(W), Ce(() => Ke(D, c(N).label)), L(F, q);
                  }, H = (F) => {
                    var q = Se(), G = oe(q);
                    {
                      var D = (J) => {
                        var te = kb(), ne = oe(te), Q = Z(ne, !0);
                        R(ne);
                        var pe = z(ne, 2), ce = Z(pe);
                        {
                          let re = /* @__PURE__ */ P(() => n()[c(N).name] || c(N).defaultValue);
                          je(ce, Be(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(N).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(re);
                              }
                            },
                            () => c(N).attrs,
                            {
                              onchange: (ie) => {
                                u(c(N).name, ie);
                              }
                            }
                          ));
                        }
                        R(pe), Ce(() => Ke(Q, c(N).label)), L(J, te);
                      }, W = (J) => {
                        var te = Se(), ne = oe(te);
                        {
                          var Q = (ce) => {
                            var re = Sb(), ie = oe(re), fe = Z(ie, !0);
                            R(ie);
                            var ve = z(ie, 2), xe = Z(ve), de = Z(xe), $e = Z(de);
                            R(de);
                            var Ne = z(de, 2), X = (Ae) => l({ [c(N).name]: parseFloat(Ae.target.value) });
                            tt(
                              Ne,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(N).attrs,
                                value: n()[c(N).name] ?? c(N).defaultValue,
                                oninput: X
                              }),
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), R(xe), R(ve), Ce(() => {
                              Ke(fe, c(N).label), Ke($e, `${c(N).description ?? ""}: ${n()[c(N).name] ?? c(N).defaultValue ?? ""}`);
                            }), L(ce, re);
                          }, pe = (ce) => {
                            var re = Se(), ie = oe(re);
                            {
                              var fe = (xe) => {
                                var de = Pb(), $e = oe(de), Ne = Z($e, !0);
                                R($e);
                                var X = z($e, 2), Ae = Z(X);
                                {
                                  let He = /* @__PURE__ */ P(() => c(N).options || []), ze = /* @__PURE__ */ P(() => n()[c(N).name] ? [n()[c(N).name]] : [c(N).defaultValue]);
                                  ut(Ae, {
                                    get items() {
                                      return c(He);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(N).placeholder;
                                    },
                                    onSelect: (Ie) => {
                                      const nt = Ie.value;
                                      l({ [c(N).name]: nt });
                                    },
                                    get value() {
                                      return c(ze);
                                    }
                                  });
                                }
                                R(X), Ce(() => Ke(Ne, c(N).label)), L(xe, de);
                              }, ve = (xe) => {
                                var de = Se(), $e = oe(de);
                                {
                                  var Ne = (Ae) => {
                                    var He = Eb(), ze = oe(He), Ie = Z(ze, !0);
                                    R(ze);
                                    var nt = z(ze, 2), Et = Z(nt);
                                    {
                                      let Je = /* @__PURE__ */ P(() => c(N).chosen?.buttonText);
                                      $d(Et, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(N).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Je);
                                        },
                                        onChosen: (Re, ge, Ze) => {
                                          c(N).chosen?.onChosen?.(l, Re, ge, Ze);
                                        },
                                        get value() {
                                          return n()[c(N).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(N).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    R(nt), Ce(() => Ke(Ie, c(N).label)), L(Ae, He);
                                  }, X = (Ae) => {
                                    var He = Se(), ze = oe(He);
                                    {
                                      var Ie = (nt) => {
                                        Le(nt, Be({ level: 3, mt: "10px" }, () => c(N).attrs, {
                                          children: (Et, Je) => {
                                            me();
                                            var Re = _e();
                                            Ce(() => Ke(Re, c(N).label)), L(Et, Re);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        ze,
                                        (nt) => {
                                          c(N).type === "heading" && nt(Ie);
                                        },
                                        !0
                                      );
                                    }
                                    L(Ae, He);
                                  };
                                  ae(
                                    $e,
                                    (Ae) => {
                                      c(N).type === "chosen" ? Ae(Ne) : Ae(X, !1);
                                    },
                                    !0
                                  );
                                }
                                L(xe, de);
                              };
                              ae(
                                ie,
                                (xe) => {
                                  c(N).type === "select" ? xe(fe) : xe(ve, !1);
                                },
                                !0
                              );
                            }
                            L(ce, re);
                          };
                          ae(
                            ne,
                            (ce) => {
                              c(N).type === "slider" ? ce(Q) : ce(pe, !1);
                            },
                            !0
                          );
                        }
                        L(J, te);
                      };
                      ae(
                        G,
                        (J) => {
                          c(N).type === "textarea" ? J(D) : J(W, !1);
                        },
                        !0
                      );
                    }
                    L(F, q);
                  };
                  ae(K, (F) => {
                    c(N).type === "input" ? F(j) : F(H, !1);
                  });
                }
                L(T, I);
              }), L(_, M);
            };
            ae(O, (_) => {
              h && _(V);
            });
          }
          var B = z(O, 2);
          Ot(B, (_) => g = _, () => g);
          var Y = z(B, 2);
          {
            var A = (_) => {
              var M = Mb(), w = oe(M), T = Z(w);
              Le(T, {
                level: 3,
                mt: "10px",
                children: (j, H) => {
                  me();
                  var F = _e("输出参数");
                  L(j, F);
                },
                $$slots: { default: !0 }
              });
              var N = z(T, 2);
              {
                var I = (j) => {
                  Te(j, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (H, F) => {
                      var q = Nb();
                      L(H, q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(N, (j) => {
                  p.outputDefsAddEnable !== !1 && j(I);
                });
              }
              R(w);
              var K = z(w, 2);
              Mn(K, {}), L(_, M);
            };
            ae(Y, (_) => {
              p.outputDefsEnable !== !1 && _(A);
            });
          }
          Ce(() => {
            ct(B, p.rootStyle || ""), Pt(B, 1, Pn(p.rootClass), "svelte-qt4m0r");
          }), L(C, k);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(y);
}
se(rf, { data: {} }, [], [], !0);
const Ob = () => ({ updateEdgeData: (e, t, n) => {
  const r = Oe.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Oe.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Hb = () => ({ deleteEdge: (e) => {
  Oe.removeEdge(e);
} }), zb = () => {
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
}, Vb = () => ({ getNodeRelativePosition: (e) => {
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
const Rb = () => (ot(), { copyHandler: async (e) => {
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
    const u = `node_${_n()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, f = Ss(l.data, i);
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
      id: `edge_${_n()}`,
      source: u,
      target: d
    });
  }
  Oe.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Oe.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), Ml = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var Zb = /* @__PURE__ */ ee('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Kb = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), Bb = /* @__PURE__ */ ee('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const jb = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function of(e, t) {
  le(t, !0), Ve(e, jb);
  const n = m(t, "onInit", 7), r = /* @__PURE__ */ De(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = ot();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Ee(!1), s = /* @__PURE__ */ Ee(null);
  const { updateEdgeData: a } = Ob(), l = (q) => {
    q.preventDefault(), q.dataTransfer && (q.dataTransfer.dropEffect = "move");
  }, u = (q) => {
    q.preventDefault();
    const G = o.screenToFlowPosition({ x: q.clientX - 250, y: q.clientY - 100 }), D = q.dataTransfer?.getData("application/tinyflow");
    if (!D)
      return;
    const W = JSON.parse(D), J = { id: `node_${_n()}`, position: G, data: {}, ...W };
    Oe.addNode(J), Oe.selectNodeOnly(J.id);
  }, { getNode: d } = wb(), f = (q) => {
    const G = d(q.source), D = d(q.target);
    if (q.sourceHandle === "loop_handle" || G.parentId) {
      const W = o.getEdges();
      for (let J of W)
        if (J.target === q.target) {
          const te = d(J.source);
          if (q.sourceHandle === "loop_handle" && te.parentId !== G.id || G.parentId && te.parentId !== G.parentId)
            return !1;
        }
    }
    return !(!G.parentId && D.parentId && D.parentId !== G.id);
  }, { getNodesFromSource: p } = zb(), { getNodeRelativePosition: h } = Vb(), { ensureParentInNodesBefore: g } = bb(), y = (q, G) => {
    if (!G.isValid)
      return;
    const D = G.toNode;
    if (D.parentId)
      return;
    const W = G.fromNode, J = G.fromHandle, te = { position: { ...D.position } };
    if (J.id === "loop_handle" ? te.parentId = W.id : W.parentId && (te.parentId = W.parentId), te.parentId) {
      const { x: ne, y: Q } = h(te.parentId);
      te.position = { x: D.position.x - ne, y: D.position.y - Q }, o.updateNode(D.id, te), p(D.id).forEach((pe) => {
        o.updateNode(pe.id, {
          parentId: te.parentId,
          position: { x: pe.position.x - ne, y: pe.position.y - Q }
        });
      }), g(te.parentId, D.id);
    }
    setTimeout(() => {
      Oe.getEdges().forEach((ne) => {
        ne.target === D.id && ne.source == W.id && (U(i, !0), U(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: b } = xb(), $ = (q) => {
    q.edges.forEach((G) => {
      G.id === c(s)?.id && (U(s, null), U(i, !1));
      const D = d(G.target);
      if (D && D.parentId) {
        const W = b(G.target), { x: J, y: te } = h(D.parentId);
        if (W.length === 0)
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
          for (let Q = 0; Q < W.length; Q++) {
            const pe = W[Q], ce = d(pe.source);
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
  }, { deleteEdge: C } = Hb(), x = (q, G) => {
  }, k = (q) => {
  }, { copyHandler: E, pasteHandler: S } = Rb(), O = (q) => {
    Ml() || ((q.ctrlKey || q.metaKey) && q.key === "c" && (q.preventDefault(), E(q)), (q.ctrlKey || q.metaKey) && q.key === "a" && (q.preventDefault(), Oe.updateNodes((G) => G.map((D) => ({ ...D, selected: !0 }))), Oe.updateEdges((G) => G.map((D) => ({ ...D, selected: !0 })))));
  }, V = async (q) => {
    Ml() || S(q);
  };
  Sn(() => {
    window.addEventListener("keydown", O), window.addEventListener("paste", V);
  }), yo(() => {
    window.removeEventListener("keydown", O), window.removeEventListener("paste", V);
  });
  const B = {
    // ...nodeTypes
  }, Y = Kn().customNodes;
  if (Y)
    for (let q of Object.keys(Y))
      B[q] = rf;
  const A = Kn().onDataChange;
  We(() => {
    A?.({
      nodes: Oe.getNodes(),
      edges: Oe.getEdges(),
      viewport: Oe.getViewport()
    });
  });
  var _ = {
    get onInit() {
      return n();
    },
    set onInit(q) {
      n(q), v();
    }
  }, M = Bb(), w = Z(M), T = Oe.getNodes, N = Oe.setNodes, I = Oe.getEdges, K = Oe.setEdges, j = Oe.getViewport, H = Oe.setViewport;
  {
    let q = /* @__PURE__ */ P(() => ({ ...hb, ...B })), G = /* @__PURE__ */ P(() => ({
      markerEnd: { type: io.ArrowClosed, width: 20, height: 20 }
    }));
    ad(w, {
      get nodeTypes() {
        return c(q);
      },
      get nodes() {
        return T();
      },
      set nodes(D) {
        N(D);
      },
      get edges() {
        return I();
      },
      set edges(D) {
        K(D);
      },
      get viewport() {
        return j();
      },
      set viewport(D) {
        H(D);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: f,
      onconnectend: y,
      onconnectstart: x,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (D) => {
        U(i, !0), U(s, D.edge, !0);
      },
      onbeforeconnect: (D) => ({ ...D, id: _n() }),
      ondelete: $,
      onclick: (D) => {
        const W = D.target;
        W.classList.contains("svelte-flow__edge-interaction") || W.classList.contains("panel-content") || W.closest(".panel-content") || (U(i, !1), U(s, null));
      },
      get defaultEdgeOptions() {
        return c(G);
      },
      children: (D, W) => {
        var J = Kb(), te = oe(J);
        md(te, {});
        var ne = z(te, 2);
        hd(ne, {});
        var Q = z(ne, 2);
        wd(Q, {});
        var pe = z(Q, 2);
        {
          var ce = (re) => {
            So(re, {
              children: (ie, fe) => {
                var ve = Zb(), xe = z(Z(ve), 4), de = Z(xe);
                {
                  let Ae = /* @__PURE__ */ P(() => c(s)?.data?.condition);
                  je(de, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ae);
                    },
                    onchange: (He) => {
                      c(s) && a(c(s).id, { condition: He.target?.value });
                    }
                  });
                }
                R(xe);
                var $e = z(xe, 2), Ne = Z($e);
                Te(Ne, {
                  onclick: () => {
                    C(c(s)?.id), U(i, !1);
                  },
                  children: (Ae, He) => {
                    me();
                    var ze = _e("删除");
                    L(Ae, ze);
                  },
                  $$slots: { default: !0 }
                });
                var X = z(Ne, 2);
                Te(X, {
                  primary: !0,
                  onclick: () => {
                    U(i, !1);
                  },
                  children: (Ae, He) => {
                    me();
                    var ze = _e("保存");
                    L(Ae, ze);
                  },
                  $$slots: { default: !0 }
                }), R($e), R(ve), L(ie, ve);
              },
              $$slots: { default: !0 }
            });
          };
          ae(pe, (re) => {
            c(i) && re(ce);
          });
        }
        L(D, J);
      },
      $$slots: { default: !0 }
    });
  }
  var F = z(w, 2);
  return nf(F, {}), R(M), L(e, M), ue(_);
}
se(of, { onInit: {} }, [], [], !0);
function Xb(e, t) {
  le(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Oe.init(o?.nodes || [], o?.edges || []), Nr("tinyflow_options", n());
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
  return ld(e, {
    children: (s, a) => {
      of(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue(i);
}
customElements.define("tinyflow-component", se(Xb, { options: {}, onInit: {} }, [], [], !1));
const qb = /* @__PURE__ */ af({
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
    const n = e, r = lf(null);
    let o = null;
    return uf(() => {
      r.value && (o = new Jm({
        ...n,
        element: r.value
      }));
    }), cf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (s, a) => (ff(), df("div", {
      ref_key: "divRef",
      ref: r,
      class: hf(["tinyflow", s.className]),
      style: pf(s.style)
    }, null, 6));
  }
});
export {
  qb as Tinyflow
};
//# sourceMappingURL=index.js.map
