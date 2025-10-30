const uf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(uf);
const pi = 1, mi = 2, Ol = 4, df = 8, ff = 16, hf = 1, gf = 2, Ml = 4, vf = 8, pf = 16, Hl = 1, mf = 2, Ll = "[", yi = "[!", Ds = "]", sr = {}, lt = Symbol(), yf = "http://www.w3.org/1999/xhtml", wf = "http://www.w3.org/2000/svg", _f = "@attach", Vl = !1;
var ho = Array.isArray, xf = Array.prototype.indexOf, As = Array.from, jo = Object.keys, Pr = Object.defineProperty, xn = Object.getOwnPropertyDescriptor, Il = Object.getOwnPropertyDescriptors, zl = Object.prototype, bf = Array.prototype, wi = Object.getPrototypeOf, _a = Object.isExtensible;
function Zr(e) {
  return typeof e == "function";
}
const ht = () => {
};
function Cf(e) {
  return e();
}
function ts(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Rl() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function vt(e, t, n = !1) {
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
const xt = 2, Os = 4, _i = 8, fr = 16, Nn = 32, Zn = 64, Ms = 128, Rt = 256, Go = 512, mt = 1024, Ot = 2048, Yn = 4096, jt = 8192, hr = 16384, Hs = 32768, gr = 65536, xa = 1 << 17, kf = 1 << 18, vr = 1 << 19, Bl = 1 << 20, ns = 1 << 21, Ls = 1 << 22, tr = 1 << 23, un = Symbol("$state"), Vs = Symbol("legacy props"), Ef = Symbol(""), _r = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Sf = 1, xi = 3, pr = 8;
function Is(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Nf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function $f() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Tf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Df() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Af() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Of(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Mf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Hf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Lf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function vo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function If() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function zf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let ye = !1;
function yt(e) {
  ye = e;
}
let Ne;
function qe(e) {
  if (e === null)
    throw vo(), sr;
  return Ne = e;
}
function Cn() {
  return qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Jt(Ne)
  );
}
function I(e) {
  if (ye) {
    if (/* @__PURE__ */ Jt(Ne) !== null)
      throw vo(), sr;
    Ne = e;
  }
}
function pe(e = 1) {
  if (ye) {
    for (var t = e, n = Ne; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Jt(n);
    Ne = n;
  }
}
function Uo(e = !0) {
  for (var t = 0, n = Ne; ; ) {
    if (n.nodeType === pr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ds) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ll || r === yi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Jt(n)
    );
    e && n.remove(), n = o;
  }
}
function Fl(e) {
  if (!e || e.nodeType !== pr)
    throw vo(), sr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Kl(e) {
  return e === this.v;
}
function Zl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yl(e) {
  return !Zl(e, this.v);
}
let Br = !1, Rf = !1;
function Bf() {
  Br = !0;
}
const Ff = [];
function Wl(e, t = !1, n = !1) {
  return Bo(e, /* @__PURE__ */ new Map(), "", Ff, null, n);
}
function Bo(e, t, n, r, o = null, i = !1) {
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
        l in e && (a[l] = Bo(c, t, n, r, null, i));
      }
      return a;
    }
    if (wi(e) === zl) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Bo(
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
      return Bo(
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
function $r(e) {
  Ke = e;
}
function zn(e) {
  return (
    /** @type {T} */
    Xl().get(e)
  );
}
function Tr(e, t) {
  return Xl().set(e, t), t;
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
      dc(r);
  }
  return e !== void 0 && (t.x = e), Ke = t.p, e ?? /** @type {T} */
  {};
}
function po() {
  return !Br || Ke !== null && Ke.l === null;
}
function Xl(e) {
  return Ke === null && Is(), Ke.c ??= new Map(Kf(Ke) || void 0);
}
function Kf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let Jn = [];
function ql() {
  var e = Jn;
  Jn = [], ts(e);
}
function kn(e) {
  if (Jn.length === 0 && !Ur) {
    var t = Jn;
    queueMicrotask(() => {
      t === Jn && ql();
    });
  }
  Jn.push(e);
}
function Zf() {
  for (; Jn.length > 0; )
    ql();
}
const Yf = /* @__PURE__ */ new WeakMap();
function jl(e) {
  var t = Ee;
  if (t === null)
    return Te.f |= tr, e;
  if ((t.f & Hs) === 0) {
    if ((t.f & Ms) === 0)
      throw !t.parent && e instanceof Error && Gl(e), e;
    t.b.error(e);
  } else
    Dr(e, t);
}
function Dr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ms) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Gl(e), e;
}
function Gl(e) {
  const t = Yf.get(e);
  t && (Pr(e, "message", {
    value: t.message
  }), Pr(e, "stack", {
    value: t.stack
  }));
}
const Oo = /* @__PURE__ */ new Set();
let Je = null, Zt = null, rs = /* @__PURE__ */ new Set(), ln = [], bi = null, os = !1, Ur = !1;
class Xt {
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
    ln = [], this.apply();
    for (const i of t)
      this.#c(i);
    if (this.#n === 0) {
      var n = Zt;
      this.#d();
      var r = this.#a, o = this.#s;
      this.#a = [], this.#s = [], this.#i = [], Je = null, Zt = n, ba(r), ba(o), this.#r?.resolve();
    } else
      this.#u(this.#a), this.#u(this.#s), this.#u(this.#i);
    Zt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #c(t) {
    t.f ^= mt;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (Nn | Zn)) !== 0, i = o && (r & mt) !== 0, s = i || (r & jt) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        o ? n.f ^= mt : (r & Os) !== 0 ? this.#s.push(n) : ki(n) && ((n.f & fr) !== 0 && this.#i.push(n), Qo(n));
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
  #u(t) {
    for (const n of t)
      ((n.f & Ot) !== 0 ? this.#o : this.#l).push(n), _t(n, mt);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v), Zt?.set(t, t.v);
  }
  activate() {
    Je = this;
  }
  deactivate() {
    Je = null, Zt = null;
  }
  flush() {
    if (ln.length > 0) {
      if (this.activate(), Ul(), Je !== null && Je !== this)
        return;
    } else this.#n === 0 && this.#d();
    this.deactivate();
    for (const t of rs)
      if (rs.delete(t), t(), Je !== null)
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
            Jl(i, o);
          if (ln.length > 0) {
            Je = n, n.apply();
            for (const i of ln)
              n.#c(i);
            ln = [], n.deactivate();
          }
        }
      }
      Je = null;
    }
    Oo.delete(this);
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    this.#n -= 1;
    for (const t of this.#o)
      _t(t, Ot), ar(t);
    for (const t of this.#l)
      _t(t, Yn), ar(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#r ??= Rl()).promise;
  }
  static ensure() {
    if (Je === null) {
      const t = Je = new Xt();
      Oo.add(Je), Ur || Xt.enqueue(() => {
        Je === t && t.flush();
      });
    }
    return Je;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    kn(t);
  }
  apply() {
  }
}
function y(e) {
  var t = Ur;
  Ur = !0;
  try {
    for (var n; ; ) {
      if (Zf(), ln.length === 0 && (Je?.flush(), ln.length === 0))
        return bi = null, /** @type {T} */
        n;
      Ul();
    }
  } finally {
    Ur = t;
  }
}
function Ul() {
  var e = Cr;
  os = !0;
  try {
    var t = 0;
    for (Sa(!0); ln.length > 0; ) {
      var n = Xt.ensure();
      if (t++ > 1e3) {
        var r, o;
        Wf();
      }
      n.process(ln), In.clear();
    }
  } finally {
    os = !1, Sa(e), bi = null;
  }
}
function Wf() {
  try {
    Df();
  } catch (e) {
    Dr(e, bi);
  }
}
let Un = null;
function ba(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (hr | jt)) === 0 && ki(r) && (Un = [], Qo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? pc(r) : r.fn = null), Un?.length > 0)) {
        In.clear();
        for (const o of Un)
          Qo(o);
        Un = [];
      }
    }
    Un = null;
  }
}
function Jl(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & xt) !== 0 ? Jl(
        /** @type {Derived} */
        n,
        t
      ) : (r & (Ls | fr)) !== 0 && Ql(n, t) && (_t(n, Ot), ar(
        /** @type {Effect} */
        n
      ));
    }
}
function Ql(e, t) {
  if (e.deps !== null) {
    for (const n of e.deps)
      if (t.includes(n) || (n.f & xt) !== 0 && Ql(
        /** @type {Derived} */
        n,
        t
      ))
        return !0;
  }
  return !1;
}
function ar(e) {
  for (var t = bi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (os && t === Ee && (n & fr) !== 0)
      return;
    if ((n & (Zn | Nn)) !== 0) {
      if ((n & mt) === 0) return;
      t.f ^= mt;
    }
  }
  ln.push(t);
}
function ec(e) {
  let t = 0, n = Rn(0), r;
  return () => {
    oh() && (u(n), yo(() => (t === 0 && (r = ct(() => e(() => Jr(n)))), t += 1, () => {
      kn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Jr(n));
      });
    })));
  };
}
var Xf = gr | vr | Ms;
function qf(e, t, n) {
  new jf(e, t, n);
}
class jf {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = ye ? Ne : null;
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
  #c = null;
  #u = 0;
  #d = 0;
  #h = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #m = () => {
    this.#f && Ar(this.#f, this.#u);
  };
  #y = ec(() => (this.#f = Rn(this.#u), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#a = r, this.parent = /** @type {Effect} */
    Ee.b, this.#t = !!this.#r.pending, this.#s = Wn(() => {
      if (Ee.b = this, ye) {
        const o = this.#n;
        Cn(), /** @type {Comment} */
        o.nodeType === pr && /** @type {Comment} */
        o.data === yi ? this.#_() : this.#w();
      } else {
        try {
          this.#i = kt(() => r(this.#e));
        } catch (o) {
          this.error(o);
        }
        this.#d > 0 ? this.#v() : this.#t = !1;
      }
    }, Xf), ye && (this.#e = Ne);
  }
  #w() {
    try {
      this.#i = kt(() => this.#a(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #_() {
    const t = this.#r.pending;
    t && (this.#o = kt(() => t(this.#e)), Xt.enqueue(() => {
      this.#i = this.#g(() => (Xt.ensure(), kt(() => this.#a(this.#e)))), this.#d > 0 ? this.#v() : (br(
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
  #g(t) {
    var n = Ee, r = Te, o = Ke;
    Bt(this.#s), Et(this.#s), $r(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return jl(i), null;
    } finally {
      Bt(n), Et(r), $r(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#i !== null && (this.#c = document.createDocumentFragment(), wc(this.#i, this.#c)), this.#o === null && (this.#o = kt(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #p(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#p(t);
      return;
    }
    this.#d += t, this.#d === 0 && (this.#t = !1, this.#o && br(this.#o, () => {
      this.#o = null;
    }), this.#c && (this.#e.before(this.#c), this.#c = null), kn(() => {
      Xt.ensure().flush();
    }));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#p(t), this.#u += t, rs.add(this.#m);
  }
  get_effect_pending() {
    return this.#y(), u(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#h || !n && !r)
      throw t;
    this.#i && (rt(this.#i), this.#i = null), this.#o && (rt(this.#o), this.#o = null), this.#l && (rt(this.#l), this.#l = null), ye && (qe(
      /** @type {TemplateNode} */
      this.#n
    ), pe(), qe(Uo()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        zf();
        return;
      }
      o = !0, i && Vf(), Xt.ensure(), this.#u = 0, this.#l !== null && br(this.#l, () => {
        this.#l = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#g(() => (this.#h = !1, kt(() => this.#a(this.#e)))), this.#d > 0 ? this.#v() : this.#t = !1;
    };
    var a = Te;
    try {
      Et(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Dr(l, this.#s && this.#s.parent);
    } finally {
      Et(a);
    }
    r && kn(() => {
      this.#l = this.#g(() => {
        this.#h = !0;
        try {
          return kt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Dr(
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
function tc(e, t, n) {
  const r = po() ? mo : zs;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = Je, i = (
    /** @type {Effect} */
    Ee
  ), s = Gf(), a = ye;
  Promise.all(t.map((l) => /* @__PURE__ */ Uf(l))).then((l) => {
    s();
    try {
      n([...e.map(r), ...l]);
    } catch (c) {
      (i.f & hr) === 0 && Dr(c, i);
    }
    a && yt(!1), o?.deactivate(), is();
  }).catch((l) => {
    Dr(l, i);
  });
}
function Gf() {
  var e = Ee, t = Te, n = Ke, r = Je, o = ye;
  if (o)
    var i = Ne;
  return function() {
    Bt(e), Et(t), $r(n), r?.activate(), o && (yt(!0), qe(i));
  };
}
function is() {
  Bt(null), Et(null), $r(null);
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  var t = xt | Ot, n = Te !== null && (Te.f & xt) !== 0 ? (
    /** @type {Derived} */
    Te
  ) : null;
  return Ee === null || n !== null && (n.f & Rt) !== 0 ? t |= Rt : Ee.f |= vr, {
    ctx: Ke,
    deps: null,
    effects: null,
    equals: Kl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      lt
    ),
    wv: 0,
    parent: n ?? Ee,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Uf(e, t) {
  let n = (
    /** @type {Effect | null} */
    Ee
  );
  n === null && Nf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Rn(
    /** @type {V} */
    lt
  ), s = !Te, a = /* @__PURE__ */ new Map();
  return sh(() => {
    var l = Rl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(is);
    } catch (f) {
      l.reject(f), is();
    }
    var c = (
      /** @type {Batch} */
      Je
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), a.get(c)?.reject(_r), a.delete(c), a.set(c, l)));
    const h = (f, g = void 0) => {
      if (d || c.activate(), g)
        g !== _r && (i.f |= tr, Ar(i, g));
      else {
        (i.f & tr) !== 0 && (i.f ^= tr), Ar(i, f);
        for (const [v, p] of a) {
          if (a.delete(v), v === c) break;
          p.reject(_r);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), Ci(() => {
    for (const l of a.values())
      l.reject(_r);
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
function N(e) {
  const t = /* @__PURE__ */ mo(e);
  return _c(t), t;
}
// @__NO_SIDE_EFFECTS__
function zs(e) {
  const t = /* @__PURE__ */ mo(e);
  return t.equals = Yl, t;
}
function nc(e) {
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
function Jf(e) {
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
function Rs(e) {
  var t, n = Ee;
  Bt(Jf(e));
  try {
    nc(e), t = kc(e);
  } finally {
    Bt(n);
  }
  return t;
}
function rc(e) {
  var t = Rs(e);
  if (e.equals(t) || (e.v = t, e.wv = bc()), !mr)
    if (Zt !== null)
      Zt.set(e, e.v);
    else {
      var n = (Hn || (e.f & Rt) !== 0) && e.deps !== null ? Yn : mt;
      _t(e, n);
    }
}
const In = /* @__PURE__ */ new Map();
function Rn(e, t) {
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
function $e(e, t) {
  const n = Rn(e);
  return _c(n), n;
}
// @__NO_SIDE_EFFECTS__
function oc(e, t = !1, n = !0) {
  const r = Rn(e);
  return t || (r.equals = Yl), Br && n && Ke !== null && Ke.l !== null && (Ke.l.s ??= []).push(r), r;
}
function G(e, t, n = !1) {
  Te !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Yt || (Te.f & xa) !== 0) && po() && (Te.f & (xt | fr | Ls | xa)) !== 0 && !bn?.includes(e) && Lf();
  let r = n ? zt(t) : t;
  return Ar(e, r);
}
function Ar(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    mr ? In.set(e, t) : In.set(e, n), e.v = t;
    var r = Xt.ensure();
    r.capture(e, n), (e.f & xt) !== 0 && ((e.f & Ot) !== 0 && Rs(
      /** @type {Derived} */
      e
    ), _t(e, (e.f & Rt) === 0 ? mt : Yn)), e.wv = bc(), ic(e, Ot), po() && Ee !== null && (Ee.f & mt) !== 0 && (Ee.f & (Nn | Zn)) === 0 && (Vt === null ? lh([e]) : Vt.push(e));
  }
  return t;
}
function Ca(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function Jr(e) {
  G(e, e.v + 1);
}
function ic(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = po(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ee)) {
        var l = (a & Ot) === 0;
        l && _t(s, t), (a & xt) !== 0 ? ic(
          /** @type {Derived} */
          s,
          Yn
        ) : l && ((a & fr) !== 0 && Un !== null && Un.push(
          /** @type {Effect} */
          s
        ), ar(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function zt(e) {
  if (typeof e != "object" || e === null || un in e)
    return e;
  const t = wi(e);
  if (t !== zl && t !== bf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ho(e), o = /* @__PURE__ */ $e(0), i = nr, s = (a) => {
    if (nr === i)
      return a();
    var l = Te, c = nr;
    Et(null), Pa(i);
    var d = a();
    return Et(l), Pa(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ $e(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Mf();
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
            const d = s(() => /* @__PURE__ */ $e(lt));
            n.set(l, d), Jr(o);
          }
        } else
          G(c, lt), Jr(o);
        return !0;
      },
      get(a, l, c) {
        if (l === un)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || xn(a, l)?.writable) && (d = s(() => {
          var g = zt(h ? a[l] : lt), v = /* @__PURE__ */ $e(g);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === lt ? void 0 : f;
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
          if (h !== void 0 && f !== lt)
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
        if (l === un)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== lt || Reflect.has(a, l);
        if (c !== void 0 || Ee !== null && (!d || xn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? zt(a[l]) : lt, g = /* @__PURE__ */ $e(f);
            return g;
          }), n.set(l, c));
          var h = u(c);
          if (h === lt)
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
            v !== void 0 ? G(v, lt) : g in a && (v = s(() => /* @__PURE__ */ $e(lt)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || xn(a, l)?.writable) && (h = s(() => /* @__PURE__ */ $e(void 0)), G(h, zt(c)), n.set(l, h));
        else {
          f = h.v !== lt;
          var p = s(() => zt(c));
          G(h, p);
        }
        var _ = Reflect.getOwnPropertyDescriptor(a, l);
        if (_?.set && _.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= b.v && G(b, S + 1);
          }
          Jr(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== lt;
        });
        for (var [c, d] of n)
          d.v !== lt && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Hf();
      }
    }
  );
}
function ka(e) {
  try {
    if (e !== null && typeof e == "object" && un in e)
      return e[un];
  } catch {
  }
  return e;
}
function Qf(e, t) {
  return Object.is(ka(e), ka(t));
}
var Ct, sc, ac, lc;
function ss() {
  if (Ct === void 0) {
    Ct = window, sc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ac = xn(t, "firstChild").get, lc = xn(t, "nextSibling").get, _a(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _a(n) && (n.__t = void 0);
  }
}
function Mt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return ac.call(e);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return lc.call(e);
}
function z(e, t) {
  if (!ye)
    return /* @__PURE__ */ tt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ tt(Ne)
  );
  if (n === null)
    n = Ne.appendChild(Mt());
  else if (t && n.nodeType !== xi) {
    var r = Mt();
    return n?.before(r), qe(r), r;
  }
  return qe(n), n;
}
function ie(e, t = !1) {
  if (!ye) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ tt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Jt(n) : n;
  }
  if (t && Ne?.nodeType !== xi) {
    var r = Mt();
    return Ne?.before(r), qe(r), r;
  }
  return Ne;
}
function V(e, t = 1, n = !1) {
  let r = ye ? Ne : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Jt(r);
  if (!ye)
    return r;
  if (n && r?.nodeType !== xi) {
    var i = Mt();
    return r === null ? o?.after(i) : r.before(i), qe(i), i;
  }
  return qe(r), /** @type {TemplateNode} */
  r;
}
function Bs(e) {
  e.textContent = "";
}
function cc() {
  return !1;
}
function eh(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, kn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function th(e) {
  ye && /* @__PURE__ */ tt(e) !== null && Bs(e);
}
let Ea = !1;
function nh() {
  Ea || (Ea = !0, document.addEventListener(
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
function Fs(e) {
  var t = Te, n = Ee;
  Et(null), Bt(null);
  try {
    return e();
  } finally {
    Et(t), Bt(n);
  }
}
function uc(e) {
  Ee === null && Te === null && Tf(), Te !== null && (Te.f & Rt) !== 0 && Ee === null && $f(), mr && Pf();
}
function rh(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qt(e, t, n, r = !0) {
  var o = Ee;
  o !== null && (o.f & jt) !== 0 && (e |= jt);
  var i = {
    ctx: Ke,
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
      Qo(i), i.f |= Hs;
    } catch (l) {
      throw rt(i), l;
    }
  else t !== null && ar(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & vr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && rh(s, o), Te !== null && (Te.f & xt) !== 0 && (e & Zn) === 0)) {
      var a = (
        /** @type {Derived} */
        Te
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function oh() {
  return Te !== null && !Yt;
}
function Ci(e) {
  const t = Qt(_i, null, !1);
  return _t(t, mt), t.teardown = e, t;
}
function We(e) {
  uc();
  var t = (
    /** @type {Effect} */
    Ee.f
  ), n = !Te && (t & Nn) !== 0 && (t & Hs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ke
    );
    (r.e ??= []).push(e);
  } else
    return dc(e);
}
function dc(e) {
  return Qt(Os | Bl, e, !1);
}
function fc(e) {
  return uc(), Qt(_i | Bl, e, !0);
}
function Ks(e) {
  Xt.ensure();
  const t = Qt(Zn | vr, e, !0);
  return () => {
    rt(t);
  };
}
function ih(e) {
  Xt.ensure();
  const t = Qt(Zn | vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? br(t, () => {
      rt(t), r(void 0);
    }) : (rt(t), r(void 0));
  });
}
function Fr(e) {
  return Qt(Os, e, !1);
}
function sh(e) {
  return Qt(Ls | vr, e, !0);
}
function yo(e, t = 0) {
  return Qt(_i | t, e, !0);
}
function Ce(e, t = [], n = []) {
  tc(t, n, (r) => {
    Qt(_i, () => e(...r.map(u)), !0);
  });
}
function Wn(e, t = 0) {
  var n = Qt(fr | t, e, !0);
  return n;
}
function kt(e, t = !0) {
  return Qt(Nn | vr, e, !0, t);
}
function hc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = mr, r = Te;
    Na(!0), Et(null);
    try {
      t.call(null);
    } finally {
      Na(n), Et(r);
    }
  }
}
function gc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Fs(() => {
      o.abort(_r);
    });
    var r = n.next;
    (n.f & Zn) !== 0 ? n.parent = null : rt(n, t), n = r;
  }
}
function ah(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Nn) === 0 && rt(t), t = n;
  }
}
function rt(e, t = !0) {
  var n = !1;
  (t || (e.f & kf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (vc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), gc(e, t && !n), Jo(e, 0), _t(e, hr);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  hc(e);
  var o = e.parent;
  o !== null && o.first !== null && pc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function vc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Jt(e)
    );
    e.remove(), e = n;
  }
}
function pc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function br(e, t, n = !0) {
  var r = [];
  Zs(e, r, !0), mc(r, () => {
    n && rt(e), t && t();
  });
}
function mc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Zs(e, t, n) {
  if ((e.f & jt) === 0) {
    if (e.f ^= jt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & gr) !== 0 || (r.f & Nn) !== 0;
      Zs(r, t, i ? n : !1), r = o;
    }
  }
}
function Ys(e) {
  yc(e, !0);
}
function yc(e, t) {
  if ((e.f & jt) !== 0) {
    e.f ^= jt, (e.f & mt) === 0 && (_t(e, Ot), ar(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & gr) !== 0 || (n.f & Nn) !== 0;
      yc(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function wc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Jt(n)
    );
    t.append(n), n = o;
  }
}
let Cr = !1;
function Sa(e) {
  Cr = e;
}
let mr = !1;
function Na(e) {
  mr = e;
}
let Te = null, Yt = !1;
function Et(e) {
  Te = e;
}
let Ee = null;
function Bt(e) {
  Ee = e;
}
let bn = null;
function _c(e) {
  Te !== null && (bn === null ? bn = [e] : bn.push(e));
}
let pt = null, Dt = 0, Vt = null;
function lh(e) {
  Vt = e;
}
let xc = 1, eo = 0, nr = eo;
function Pa(e) {
  nr = e;
}
let Hn = !1;
function bc() {
  return ++xc;
}
function ki(e) {
  var t = e.f;
  if ((t & Ot) !== 0)
    return !0;
  if ((t & Yn) !== 0) {
    var n = e.deps, r = (t & Rt) !== 0;
    if (n !== null) {
      var o, i, s = (t & Go) !== 0, a = r && Ee !== null && !Hn, l = n.length;
      if ((s || a) && (Ee === null || (Ee.f & hr) === 0)) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        s && (c.f ^= Go), a && d !== null && (d.f & Rt) === 0 && (c.f ^= Rt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], ki(
          /** @type {Derived} */
          i
        ) && rc(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ee !== null && !Hn) && _t(e, mt);
  }
  return !1;
}
function Cc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !bn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & xt) !== 0 ? Cc(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? _t(i, Ot) : (i.f & mt) !== 0 && _t(i, Yn), ar(
        /** @type {Effect} */
        i
      ));
    }
}
function kc(e) {
  var t = pt, n = Dt, r = Vt, o = Te, i = Hn, s = bn, a = Ke, l = Yt, c = nr, d = e.f;
  pt = /** @type {null | Value[]} */
  null, Dt = 0, Vt = null, Hn = (d & Rt) !== 0 && (Yt || !Cr || Te === null), Te = (d & (Nn | Zn)) === 0 ? e : null, bn = null, $r(e.ctx), Yt = !1, nr = ++eo, e.ac !== null && (Fs(() => {
    e.ac.abort(_r);
  }), e.ac = null);
  try {
    e.f |= ns;
    var h = (
      /** @type {Function} */
      e.fn
    ), f = h(), g = e.deps;
    if (pt !== null) {
      var v;
      if (Jo(e, Dt), g !== null && Dt > 0)
        for (g.length = Dt + pt.length, v = 0; v < pt.length; v++)
          g[Dt + v] = pt[v];
      else
        e.deps = g = pt;
      if (!Hn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & xt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (v = Dt; v < g.length; v++)
          (g[v].reactions ??= []).push(e);
    } else g !== null && Dt < g.length && (Jo(e, Dt), g.length = Dt);
    if (po() && Vt !== null && !Yt && g !== null && (e.f & (xt | Yn | Ot)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Vt.length; v++)
        Cc(
          Vt[v],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (eo++, Vt !== null && (r === null ? r = Vt : r.push(.../** @type {Source[]} */
    Vt))), (e.f & tr) !== 0 && (e.f ^= tr), f;
  } catch (p) {
    return jl(p);
  } finally {
    e.f ^= ns, pt = t, Dt = n, Vt = r, Te = o, Hn = i, bn = s, $r(a), Yt = l, nr = c;
  }
}
function ch(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = xf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & xt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (pt === null || !pt.includes(t)) && (_t(t, Yn), (t.f & (Rt | Go)) === 0 && (t.f ^= Go), nc(
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
      ch(e, n[r]);
}
function Qo(e) {
  var t = e.f;
  if ((t & hr) === 0) {
    _t(e, mt);
    var n = Ee, r = Cr;
    Ee = e, Cr = !0;
    try {
      (t & fr) !== 0 ? ah(e) : gc(e), hc(e);
      var o = kc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = xc;
      var i;
      Vl && Rf && (e.f & Ot) !== 0 && e.deps;
    } finally {
      Cr = r, Ee = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & xt) !== 0;
  if (Te !== null && !Yt) {
    var r = Ee !== null && (Ee.f & hr) !== 0;
    if (!r && !bn?.includes(e)) {
      var o = Te.deps;
      if ((Te.f & ns) !== 0)
        e.rv < eo && (e.rv = eo, pt === null && o !== null && o[Dt] === e ? Dt++ : pt === null ? pt = [e] : (!Hn || !pt.includes(e)) && pt.push(e));
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
    a !== null && (a.f & Rt) === 0 && (s.f ^= Rt);
  }
  if (mr) {
    if (In.has(e))
      return In.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & mt) === 0 && s.reactions !== null || Ec(s)) && (l = Rs(s)), In.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    e, Zt?.has(s))
      return Zt.get(s);
    ki(s) && rc(s);
  }
  if (Zt?.has(e))
    return Zt.get(e);
  if ((e.f & tr) !== 0)
    throw e.v;
  return e.v;
}
function Ec(e) {
  if (e.v === lt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (In.has(t) || (t.f & xt) !== 0 && Ec(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ct(e) {
  var t = Yt;
  try {
    return Yt = !0, e();
  } finally {
    Yt = t;
  }
}
const uh = -7169;
function _t(e, t) {
  e.f = e.f & uh | t;
}
function dh(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Ws(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (un in e)
      as(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && un in n && as(n);
      }
  }
}
function as(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        as(e[r], t);
      } catch {
      }
    const n = wi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Il(n);
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
const Sc = /* @__PURE__ */ new Set(), ls = /* @__PURE__ */ new Set();
function Xs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Xr.call(t, i), !i.cancelBubble)
      return Fs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? kn(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function cs(e, t, n, r = {}) {
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
  t instanceof HTMLMediaElement) && Ci(() => {
    t.removeEventListener(e, s, i);
  });
}
function Xn(e) {
  for (var t = 0; t < e.length; t++)
    Sc.add(e[t]);
  for (var n of ls)
    n(e);
}
let $a = null;
function Xr(e) {
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
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Pr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Te, h = Ee;
    Et(null), Bt(null);
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
              var [_, ...b] = p;
              _.apply(i, [e, ...b]);
            } else
              p.call(i, e);
        } catch (S) {
          f ? g.push(S) : f = S;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let S of g)
          queueMicrotask(() => {
            throw S;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Et(d), Bt(h);
    }
  }
}
function qs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Nt(e, t) {
  var n = (
    /** @type {Effect} */
    Ee
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & Hl) !== 0, r = (t & mf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (ye)
      return Nt(Ne, null), Ne;
    o === void 0 && (o = qs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ tt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || sc ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Nt(a, l);
    } else
      Nt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function fh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Hl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (ye)
      return Nt(Ne, null), Ne;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        qs(i)
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
      Nt(d, h);
    } else
      Nt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return /* @__PURE__ */ fh(e, t, "svg");
}
function ke(e = "") {
  if (!ye) {
    var t = Mt(e + "");
    return Nt(t, t), t;
  }
  var n = Ne;
  return n.nodeType !== xi && (n.before(n = Mt()), qe(n)), Nt(n, n), n;
}
function Se() {
  if (ye)
    return Nt(Ne, null), Ne;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Mt();
  return e.append(t, n), Nt(t, n), e;
}
function O(e, t) {
  if (ye) {
    Ee.nodes_end = Ne, Cn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function hh(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const gh = [
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
function vh(e) {
  return gh.includes(e);
}
const ph = {
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
function mh(e) {
  return e = e.toLowerCase(), ph[e] ?? e;
}
const yh = ["touchstart", "touchmove"];
function wh(e) {
  return yh.includes(e);
}
const _h = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function xh(e) {
  return _h.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Re(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Nc(e, t) {
  return Pc(e, t);
}
function bh(e, t) {
  ss(), t.intro = t.intro ?? !1;
  const n = t.target, r = ye, o = Ne;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(n)
    ); i && (i.nodeType !== pr || /** @type {Comment} */
    i.data !== Ll); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Jt(i);
    if (!i)
      throw sr;
    yt(!0), qe(
      /** @type {Comment} */
      i
    );
    const s = Pc(e, { ...t, anchor: i });
    return yt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== sr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Af(), ss(), Bs(n), yt(!1), Nc(e, t);
  } finally {
    yt(r), qe(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function Pc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ss();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = wh(g);
        t.addEventListener(g, Xr, { passive: v });
        var p = yr.get(g);
        p === void 0 ? (document.addEventListener(g, Xr, { passive: v }), yr.set(g, 1)) : yr.set(g, p + 1);
      }
    }
  };
  l(As(Sc)), ls.add(l);
  var c = void 0, d = ih(() => {
    var h = n ?? t.appendChild(Mt());
    return qf(
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
        if (o && (r.$$events = o), ye && Nt(
          /** @type {TemplateNode} */
          f,
          null
        ), c = e(f, r) || {}, ye && (Ee.nodes_end = Ne, Ne === null || Ne.nodeType !== pr || /** @type {Comment} */
        Ne.data !== Ds))
          throw vo(), sr;
        i && ue();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Xr);
        var g = (
          /** @type {number} */
          yr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Xr), yr.delete(f)) : yr.set(f, g);
      }
      ls.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return us.set(c, d), c;
}
let us = /* @__PURE__ */ new WeakMap();
function Ch(e, t) {
  const n = us.get(e);
  return n ? (us.delete(e), n(t)) : Promise.resolve();
}
class Ei {
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
      Je
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Ys(r);
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
            var c = document.createDocumentFragment();
            wc(s, c), c.append(Mt()), this.#n.set(i, { effect: s, fragment: c });
          } else
            rt(s);
          this.#e.delete(i);
        };
        this.#r || !r ? br(s, a, !1) : a();
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
      Je
    ), o = cc();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = Mt();
        i.append(s), this.#n.set(t, {
          effect: kt(() => n(s)),
          fragment: i
        });
      } else
        this.#e.set(
          t,
          kt(() => n(this.anchor))
        );
    if (this.#t.set(r, t), o) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.add_callback(this.#a);
    } else
      ye && (this.anchor = Ne), this.#a();
  }
}
function je(e, t, ...n) {
  var r = new Ei(e);
  Wn(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, gr);
}
function Pn(e) {
  Ke === null && Is(), Br && Ke.l !== null ? kh(Ke).m.push(e) : We(() => {
    const t = ct(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function wo(e) {
  Ke === null && Is(), Pn(() => () => ct(e));
}
function kh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function le(e, t, n = !1) {
  ye && Cn();
  var r = new Ei(e), o = n ? gr : 0;
  function i(s, a) {
    if (ye) {
      const c = Fl(e) === yi;
      if (s === c) {
        var l = Uo();
        qe(l), r.anchor = l, yt(!1), r.ensure(s, a), yt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Wn(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Eh(e, t) {
  ye && qe(
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
function Or(e, t) {
  return t;
}
function Sh(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    Zs(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Bs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), sn(e, t[0].prev, t[i - 1].next);
  }
  mc(o, () => {
    for (var c = 0; c < i; c++) {
      var d = t[c];
      a || (r.delete(d.k), sn(e, d.prev, d.next)), rt(d.e, !a);
    }
  });
}
function gt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Ol) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = ye ? qe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ tt(c)
    ) : c.appendChild(Mt());
  }
  ye && Cn();
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ zs(() => {
    var b = n();
    return ho(b) ? b : b == null ? [] : As(b);
  }), v, p;
  function _() {
    Nh(
      p,
      v,
      a,
      f,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (v.length === 0 ? d ? Ys(d) : d = kt(() => i(s)) : d !== null && br(d, () => {
      d = null;
    }));
  }
  Wn(() => {
    p ??= /** @type {Effect} */
    Ee, v = /** @type {V[]} */
    u(g);
    var b = v.length;
    if (h && b === 0)
      return;
    h = b === 0;
    let S = !1;
    if (ye) {
      var x = Fl(s) === yi;
      x !== (b === 0) && (s = Uo(), qe(s), yt(!1), S = !0);
    }
    if (ye) {
      for (var k = null, T, E = 0; E < b; E++) {
        if (Ne.nodeType === pr && /** @type {Comment} */
        Ne.data === Ds) {
          s = /** @type {Comment} */
          Ne, S = !0, yt(!1);
          break;
        }
        var A = v[E], M = r(A, E);
        T = ds(
          Ne,
          a,
          k,
          null,
          A,
          M,
          E,
          o,
          t,
          n
        ), a.items.set(M, T), k = T;
      }
      b > 0 && qe(Uo());
    }
    if (ye)
      b === 0 && i && (d = kt(() => i(s)));
    else if (cc()) {
      var R = /* @__PURE__ */ new Set(), X = (
        /** @type {Batch} */
        Je
      );
      for (E = 0; E < b; E += 1) {
        A = v[E], M = r(A, E);
        var J = a.items.get(M) ?? f.get(M);
        J ? (t & (pi | mi)) !== 0 && $c(J, A, E, t) : (T = ds(
          null,
          a,
          null,
          null,
          A,
          M,
          E,
          o,
          t,
          n,
          !0
        ), f.set(M, T)), R.add(M);
      }
      for (const [C, P] of a.items)
        R.has(C) || X.skipped_effects.add(P.e);
      X.add_callback(_);
    } else
      _();
    S && yt(!0), u(g);
  }), ye && (s = Ne);
}
function Nh(e, t, n, r, o, i, s, a, l) {
  var c = (s & df) !== 0, d = (s & (pi | mi)) !== 0, h = t.length, f = n.items, g = n.first, v = g, p, _ = null, b, S = [], x = [], k, T, E, A;
  if (c)
    for (A = 0; A < h; A += 1)
      k = t[A], T = a(k, A), E = f.get(T), E !== void 0 && (E.a?.measure(), (b ??= /* @__PURE__ */ new Set()).add(E));
  for (A = 0; A < h; A += 1) {
    if (k = t[A], T = a(k, A), E = f.get(T), E === void 0) {
      var M = r.get(T);
      if (M !== void 0) {
        r.delete(T), f.set(T, M);
        var R = _ ? _.next : v;
        sn(n, _, M), sn(n, M, R), Ri(M, R, o), _ = M;
      } else {
        var X = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : o;
        _ = ds(
          X,
          n,
          _,
          _ === null ? n.first : _.next,
          k,
          T,
          A,
          i,
          s,
          l
        );
      }
      f.set(T, _), S = [], x = [], v = _.next;
      continue;
    }
    if (d && $c(E, k, A, s), (E.e.f & jt) !== 0 && (Ys(E.e), c && (E.a?.unfix(), (b ??= /* @__PURE__ */ new Set()).delete(E))), E !== v) {
      if (p !== void 0 && p.has(E)) {
        if (S.length < x.length) {
          var J = x[0], C;
          _ = J.prev;
          var P = S[0], m = S[S.length - 1];
          for (C = 0; C < S.length; C += 1)
            Ri(S[C], J, o);
          for (C = 0; C < x.length; C += 1)
            p.delete(x[C]);
          sn(n, P.prev, m.next), sn(n, _, P), sn(n, m, J), v = J, _ = m, A -= 1, S = [], x = [];
        } else
          p.delete(E), Ri(E, v, o), sn(n, E.prev, E.next), sn(n, E, _ === null ? n.first : _.next), sn(n, _, E), _ = E;
        continue;
      }
      for (S = [], x = []; v !== null && v.k !== T; )
        (v.e.f & jt) === 0 && (p ??= /* @__PURE__ */ new Set()).add(v), x.push(v), v = v.next;
      if (v === null)
        continue;
      E = v;
    }
    S.push(E), _ = E, v = E.next;
  }
  if (v !== null || p !== void 0) {
    for (var $ = p === void 0 ? [] : As(p); v !== null; )
      (v.e.f & jt) === 0 && $.push(v), v = v.next;
    var D = $.length;
    if (D > 0) {
      var L = (s & Ol) !== 0 && h === 0 ? o : null;
      if (c) {
        for (A = 0; A < D; A += 1)
          $[A].a?.measure();
        for (A = 0; A < D; A += 1)
          $[A].a?.fix();
      }
      Sh(n, $, L);
    }
  }
  c && kn(() => {
    if (b !== void 0)
      for (E of b)
        E.a?.apply();
  }), e.first = n.first && n.first.e, e.last = _ && _.e;
  for (var F of r.values())
    rt(F.e);
  r.clear();
}
function $c(e, t, n, r) {
  (r & pi) !== 0 && Ar(e.v, t), (r & mi) !== 0 ? Ar(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ds(e, t, n, r, o, i, s, a, l, c, d) {
  var h = (l & pi) !== 0, f = (l & ff) === 0, g = h ? f ? /* @__PURE__ */ oc(o, !1, !1) : Rn(o) : o, v = (l & mi) === 0 ? s : Rn(s), p = {
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
      var _ = document.createDocumentFragment();
      _.append(e = Mt());
    }
    return p.e = kt(() => a(
      /** @type {Node} */
      e,
      g,
      v,
      c
    ), ye), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? d || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Ri(e, t, n) {
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
      /* @__PURE__ */ Jt(i)
    );
    o.before(i), i = s;
  }
}
function sn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function js(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ce(() => {
    var a = (
      /** @type {Effect} */
      Ee
    );
    if (s === (s = t() ?? "")) {
      ye && Cn();
      return;
    }
    if (a.nodes_start !== null && (vc(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (ye) {
        Ne.data;
        for (var l = Cn(), c = l; l !== null && (l.nodeType !== pr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Jt(l);
        if (l === null)
          throw vo(), sr;
        Nt(Ne, c), i = qe(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = qs(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ tt(h)), Nt(
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
function Si(e, t, n) {
  ye && Cn();
  var r = new Ei(e);
  Wn(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, gr);
}
function Ph(e, t, n, r, o, i) {
  let s = ye;
  ye && Cn();
  var a = null;
  ye && Ne.nodeType === Sf && (a = /** @type {Element} */
  Ne, Cn());
  var l = (
    /** @type {TemplateNode} */
    ye ? Ne : e
  ), c = new Ei(l, !1);
  Wn(() => {
    const d = t() || null;
    var h = d === "svg" ? wf : null;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (f) => {
      if (d) {
        if (a = ye ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), Nt(a, a), r) {
          ye && xh(d) && a.append(document.createComment(""));
          var g = (
            /** @type {TemplateNode} */
            ye ? /* @__PURE__ */ tt(a) : a.appendChild(Mt())
          );
          ye && (g === null ? yt(!1) : qe(g)), r(a, g);
        }
        Ee.nodes_end = a, f.before(a);
      }
      ye && qe(f);
    }), () => {
    };
  }, gr), Ci(() => {
  }), s && (yt(!0), qe(l));
}
function Ve(e, t) {
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
function ft(e, t, n) {
  Fr(() => {
    var r = ct(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      yo(() => {
        var s = n();
        Ws(s), o && Zl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function $h(e, t) {
  var n = void 0, r;
  Wn(() => {
    n !== (n = t()) && (r && (rt(r), r = null), n && (r = kt(() => {
      Fr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Tc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Tc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Th() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Tc(e)) && (r && (r += " "), r += t);
  return r;
}
function $n(e) {
  return typeof e == "object" ? Th(e) : e ?? "";
}
const Ta = [...` 	
\r\f \v\uFEFF`];
function Dh(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ta.includes(r[s - 1])) && (a === r.length || Ta.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Da(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Bi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ah(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Bi)), o && l.push(...Object.keys(o).map(Bi));
      var c = 0, d = -1;
      const p = e.length;
      for (var h = 0; h < p; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var g = Bi(e.substring(c, d).trim());
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
    return r && (n += Da(r)), o && (n += Da(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Pt(e, t, n, r, o, i) {
  var s = e.__className;
  if (ye || s !== n || s === void 0) {
    var a = Dh(n, r, i);
    (!ye || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Fi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function dt(e, t, n, r) {
  var o = e.__style;
  if (ye || o !== t) {
    var i = Ah(t, r);
    (!ye || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Fi(e, n?.[0], r[0]), Fi(e, n?.[1], r[1], "important")) : Fi(e, n, r));
  return r;
}
function fs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ho(t))
      return If();
    for (var r of e.options)
      r.selected = t.includes(Aa(r));
    return;
  }
  for (r of e.options) {
    var o = Aa(r);
    if (Qf(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Oh(e) {
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
  }), Ci(() => {
    t.disconnect();
  });
}
function Aa(e) {
  return "__value" in e ? e.__value : e.value;
}
const Mn = Symbol("class"), cn = Symbol("style"), Dc = Symbol("is custom element"), Ac = Symbol("is html");
function rr(e) {
  if (ye) {
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
    e.__on_r = n, kn(n), nh();
  }
}
function Fo(e, t) {
  var n = Ni(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Oa(e, t) {
  var n = Ni(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Mh(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = Ni(e);
  ye && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Ef] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Oc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Hh(e, t, n, r, o = !1, i = !1) {
  if (ye && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || rr(s);
  }
  var l = Ni(e), c = l[Dc], d = !l[Ac];
  let h = ye && c;
  h && yt(!1);
  var f = t || {}, g = e.tagName === "OPTION";
  for (var v in t)
    v in n || (n[v] = null);
  n.class ? n.class = $n(n.class) : (r || n[Mn]) && (n.class = null), n[cn] && (n.style ??= null);
  var p = Oc(e);
  for (const E in n) {
    let A = n[E];
    if (g && E === "value" && A == null) {
      e.value = e.__value = "", f[E] = A;
      continue;
    }
    if (E === "class") {
      var _ = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Pt(e, _, A, r, t?.[Mn], n[Mn]), f[E] = A, f[Mn] = n[Mn];
      continue;
    }
    if (E === "style") {
      dt(e, A, t?.[cn], n[cn]), f[E] = A, f[cn] = n[cn];
      continue;
    }
    var b = f[E];
    if (!(A === b && !(A === void 0 && e.hasAttribute(E)))) {
      f[E] = A;
      var S = E[0] + E[1];
      if (S !== "$$")
        if (S === "on") {
          const M = {}, R = "$$" + E;
          let X = E.slice(2);
          var x = vh(X);
          if (hh(X) && (X = X.slice(0, -7), M.capture = !0), !x && b) {
            if (A != null) continue;
            e.removeEventListener(X, f[R], M), f[R] = null;
          }
          if (A != null)
            if (x)
              e[`__${X}`] = A, Xn([X]);
            else {
              let J = function(C) {
                f[E].call(this, C);
              };
              f[R] = Xs(X, e, J, M);
            }
          else x && (e[`__${X}`] = void 0);
        } else if (E === "style")
          xe(e, E, A);
        else if (E === "autofocus")
          eh(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!c && (E === "__value" || E === "value" && A != null))
          e.value = e.__value = A;
        else if (E === "selected" && g)
          Mh(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var k = E;
          d || (k = mh(k));
          var T = k === "defaultValue" || k === "defaultChecked";
          if (A == null && !c && !T)
            if (l[E] = null, k === "value" || k === "checked") {
              let M = (
                /** @type {HTMLInputElement} */
                e
              );
              const R = t === void 0;
              if (k === "value") {
                let X = M.defaultValue;
                M.removeAttribute(k), M.defaultValue = X, M.value = M.__value = R ? X : null;
              } else {
                let X = M.defaultChecked;
                M.removeAttribute(k), M.defaultChecked = X, M.checked = R ? X : !1;
              }
            } else
              e.removeAttribute(E);
          else T || p.includes(k) && (c || typeof A != "string") ? (e[k] = A, k in l && (l[k] = lt)) : typeof A != "function" && xe(e, k, A);
        }
    }
  }
  return h && yt(!0), f;
}
function nt(e, t, n = [], r = [], o, i = !1, s = !1) {
  tc(n, r, (a) => {
    var l = void 0, c = {}, d = e.nodeName === "SELECT", h = !1;
    if (Wn(() => {
      var g = t(...a.map(u)), v = Hh(
        e,
        l,
        g,
        o,
        i,
        s
      );
      h && d && "value" in g && fs(
        /** @type {HTMLSelectElement} */
        e,
        g.value
      );
      for (let _ of Object.getOwnPropertySymbols(c))
        g[_] || rt(c[_]);
      for (let _ of Object.getOwnPropertySymbols(g)) {
        var p = g[_];
        _.description === _f && (!l || p !== l[_]) && (c[_] && rt(c[_]), c[_] = kt(() => $h(e, () => p))), v[_] = p;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        e
      );
      Fr(() => {
        fs(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Oh(f);
      });
    }
    h = !0;
  });
}
function Ni(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Dc]: e.nodeName.includes("-"),
      [Ac]: e.namespaceURI === yf
    }
  );
}
var Ma = /* @__PURE__ */ new Map();
function Oc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Ma.get(t);
  if (n) return n;
  Ma.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Il(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = wi(o);
  }
  return n;
}
class Gs {
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
          Gs.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Lh = /* @__PURE__ */ new Gs({
  box: "border-box"
});
function Ha(e, t, n) {
  var r = Lh.observe(e, () => n(e[t]));
  Fr(() => (ct(() => n(e[t])), r));
}
function La(e, t) {
  return e === t || e?.[un] === t;
}
function $t(e = {}, t, n, r) {
  return Fr(() => {
    var o, i;
    return yo(() => {
      o = i, i = [], ct(() => {
        e !== n(...i) && (t(e, ...i), o && La(n(...o), e) && t(null, ...o));
      });
    }), () => {
      kn(() => {
        i && La(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Mc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ke
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ws(t.s);
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
  n.b.length && fc(() => {
    Va(t, r), ts(n.b);
  }), We(() => {
    const o = ct(() => n.m.map(Cf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && We(() => {
    Va(t, r), ts(n.a);
  });
}
function Va(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let Mo = !1;
function Vh(e) {
  var t = Mo;
  try {
    return Mo = !1, [e(), Mo];
  } finally {
    Mo = t;
  }
}
const Ih = {
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
    Ih
  );
}
const zh = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Ee;
      try {
        Bt(e.parent_effect), e.special[t] = w(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Ml
        );
      } finally {
        Bt(r);
      }
    }
    return e.special[t](n), Ca(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ca(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Ia(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Rn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ee
      )
    },
    zh
  );
}
const Rh = {
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
      const i = xn(o, t);
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
        const o = xn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === un || t === Vs) return !1;
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
  return new Proxy({ props: e }, Rh);
}
function w(e, t, n, r) {
  var o = !Br || (n & gf) !== 0, i = (n & vf) !== 0, s = (n & pf) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? ct(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = un in e || Vs in e;
    d = xn(e, t)?.set ?? (h && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Vh(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Of(), d(f)));
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
  }, o && (n & Ml) === 0)
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
  var _ = !1, b = ((n & hf) !== 0 ? mo : zs)(() => (_ = !1, v()));
  i && u(b);
  var S = (
    /** @type {Effect} */
    Ee
  );
  return (
    /** @type {() => V} */
    function(x, k) {
      if (arguments.length > 0) {
        const T = k ? u(b) : o && i ? zt(x) : x;
        return G(b, T), _ = !0, a !== void 0 && (a = T), x;
      }
      return mr && _ || (S.f & hr) !== 0 ? b.v : u(b);
    }
  );
}
function Bh(e) {
  return new Fh(e);
}
class Fh {
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
      var a = /* @__PURE__ */ oc(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Vs ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return G(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? bh : Nc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && y(), this.#t = o.$$events;
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
      Ch(this.#e);
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
let Hc;
typeof HTMLElement == "function" && (Hc = class extends HTMLElement {
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
      const t = {}, n = Kh(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Ko(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Bh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Ks(() => {
        yo(() => {
          this.$$r = !0;
          for (const r of jo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Ko(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ko(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return jo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ko(e, t, n, r) {
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
function Kh(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends Hc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return jo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return jo(t).forEach((a) => {
    Pr(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Ko(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = xn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
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
var Zh = { value: () => {
} };
function Pi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Zo(n);
}
function Zo(e) {
  this._ = e;
}
function Yh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Zo.prototype = Pi.prototype = {
  constructor: Zo,
  on: function(e, t) {
    var n = this._, r = Yh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Wh(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = za(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = za(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Zo(e);
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
function Wh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function za(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Zh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var hs = "http://www.w3.org/1999/xhtml";
const Ra = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: hs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function $i(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ra.hasOwnProperty(t) ? { space: Ra[t], local: e } : e;
}
function Xh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === hs && t.documentElement.namespaceURI === hs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function qh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Lc(e) {
  var t = $i(e);
  return (t.local ? qh : Xh)(t);
}
function jh() {
}
function Us(e) {
  return e == null ? jh : function() {
    return this.querySelector(e);
  };
}
function Gh(e) {
  typeof e != "function" && (e = Us(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Ht(r, this._parents);
}
function Uh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Jh() {
  return [];
}
function Vc(e) {
  return e == null ? Jh : function() {
    return this.querySelectorAll(e);
  };
}
function Qh(e) {
  return function() {
    return Uh(e.apply(this, arguments));
  };
}
function eg(e) {
  typeof e == "function" ? e = Qh(e) : e = Vc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Ht(r, o);
}
function Ic(e) {
  return function() {
    return this.matches(e);
  };
}
function zc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var tg = Array.prototype.find;
function ng(e) {
  return function() {
    return tg.call(this.children, e);
  };
}
function rg() {
  return this.firstElementChild;
}
function og(e) {
  return this.select(e == null ? rg : ng(typeof e == "function" ? e : zc(e)));
}
var ig = Array.prototype.filter;
function sg() {
  return Array.from(this.children);
}
function ag(e) {
  return function() {
    return ig.call(this.children, e);
  };
}
function lg(e) {
  return this.selectAll(e == null ? sg : ag(typeof e == "function" ? e : zc(e)));
}
function cg(e) {
  typeof e != "function" && (e = Ic(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Ht(r, this._parents);
}
function Rc(e) {
  return new Array(e.length);
}
function ug() {
  return new Ht(this._enter || this._groups.map(Rc), this._parents);
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
function dg(e) {
  return function() {
    return e;
  };
}
function fg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ti(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function hg(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new ti(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function gg(e) {
  return e.__data__;
}
function vg(e, t) {
  if (!arguments.length) return Array.from(this, gg);
  var n = t ? hg : fg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = dg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], h = o[c], f = h.length, g = pg(e.call(d, d && d.__data__, c, r)), v = g.length, p = a[c] = new Array(v), _ = s[c] = new Array(v), b = l[c] = new Array(f);
    n(d, h, p, _, b, g, t);
    for (var S = 0, x = 0, k, T; S < v; ++S)
      if (k = p[S]) {
        for (S >= x && (x = S + 1); !(T = _[x]) && ++x < v; ) ;
        k._next = T || null;
      }
  }
  return s = new Ht(s, r), s._enter = a, s._exit = l, s;
}
function pg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mg() {
  return new Ht(this._exit || this._groups.map(Rc), this._parents);
}
function yg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function wg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], h = c.length, f = a[l] = new Array(h), g, v = 0; v < h; ++v)
      (g = c[v] || d[v]) && (f[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ht(a, this._parents);
}
function _g() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function xg(e) {
  e || (e = bg);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new Ht(o, this._parents).order();
}
function bg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Cg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function kg() {
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
function Sg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Ng() {
  return !this.node();
}
function Pg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function $g(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Tg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Dg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Ag(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Og(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Mg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Hg(e, t) {
  var n = $i(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Tg : $g : typeof t == "function" ? n.local ? Mg : Og : n.local ? Ag : Dg)(n, t));
}
function Bc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Lg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Vg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Ig(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function zg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Lg : typeof t == "function" ? Ig : Vg)(e, t, n ?? "")) : Mr(this.node(), e);
}
function Mr(e, t) {
  return e.style.getPropertyValue(t) || Bc(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Fg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Kg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Rg : typeof t == "function" ? Fg : Bg)(e, t)) : this.node()[e];
}
function Fc(e) {
  return e.trim().split(/^|\s+/);
}
function Js(e) {
  return e.classList || new Kc(e);
}
function Kc(e) {
  this._node = e, this._names = Fc(e.getAttribute("class") || "");
}
Kc.prototype = {
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
function Zc(e, t) {
  for (var n = Js(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Yc(e, t) {
  for (var n = Js(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Zg(e) {
  return function() {
    Zc(this, e);
  };
}
function Yg(e) {
  return function() {
    Yc(this, e);
  };
}
function Wg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zc : Yc)(this, e);
  };
}
function Xg(e, t) {
  var n = Fc(e + "");
  if (arguments.length < 2) {
    for (var r = Js(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Wg : t ? Zg : Yg)(n, t));
}
function qg() {
  this.textContent = "";
}
function jg(e) {
  return function() {
    this.textContent = e;
  };
}
function Gg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ug(e) {
  return arguments.length ? this.each(e == null ? qg : (typeof e == "function" ? Gg : jg)(e)) : this.node().textContent;
}
function Jg() {
  this.innerHTML = "";
}
function Qg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ev(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function tv(e) {
  return arguments.length ? this.each(e == null ? Jg : (typeof e == "function" ? ev : Qg)(e)) : this.node().innerHTML;
}
function nv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function rv() {
  return this.each(nv);
}
function ov() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function iv() {
  return this.each(ov);
}
function sv(e) {
  var t = typeof e == "function" ? e : Lc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function av() {
  return null;
}
function lv(e, t) {
  var n = typeof e == "function" ? e : Lc(e), r = t == null ? av : typeof t == "function" ? t : Us(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function cv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function uv() {
  return this.each(cv);
}
function dv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function fv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hv(e) {
  return this.select(e ? fv : dv);
}
function gv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function vv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function pv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function mv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function yv(e, t, n) {
  return function() {
    var r = this.__on, o, i = vv(t);
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
function wv(e, t, n) {
  var r = pv(e + ""), o, i = r.length, s;
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
  for (a = t ? yv : mv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Wc(e, t, n) {
  var r = Bc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function _v(e, t) {
  return function() {
    return Wc(this, e, t);
  };
}
function xv(e, t) {
  return function() {
    return Wc(this, e, t.apply(this, arguments));
  };
}
function bv(e, t) {
  return this.each((typeof t == "function" ? xv : _v)(e, t));
}
function* Cv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Xc = [null];
function Ht(e, t) {
  this._groups = e, this._parents = t;
}
function _o() {
  return new Ht([[document.documentElement]], Xc);
}
function kv() {
  return this;
}
Ht.prototype = _o.prototype = {
  constructor: Ht,
  select: Gh,
  selectAll: eg,
  selectChild: og,
  selectChildren: lg,
  filter: cg,
  data: vg,
  enter: ug,
  exit: mg,
  join: yg,
  merge: wg,
  selection: kv,
  order: _g,
  sort: xg,
  call: Cg,
  nodes: kg,
  node: Eg,
  size: Sg,
  empty: Ng,
  each: Pg,
  attr: Hg,
  style: zg,
  property: Kg,
  classed: Xg,
  text: Ug,
  html: tv,
  raise: rv,
  lower: iv,
  append: sv,
  insert: lv,
  remove: uv,
  clone: hv,
  datum: gv,
  on: wv,
  dispatch: bv,
  [Symbol.iterator]: Cv
};
function It(e) {
  return typeof e == "string" ? new Ht([[document.querySelector(e)]], [document.documentElement]) : new Ht([[e]], Xc);
}
function Ev(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Kt(e, t) {
  if (e = Ev(e), t === void 0 && (t = e.currentTarget), t) {
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
const Sv = { passive: !1 }, to = { capture: !0, passive: !1 };
function Ki(e) {
  e.stopImmediatePropagation();
}
function kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function qc(e) {
  var t = e.document.documentElement, n = It(e).on("dragstart.drag", kr, to);
  "onselectstart" in t ? n.on("selectstart.drag", kr, to) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function jc(e, t) {
  var n = e.document.documentElement, r = It(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kr, to), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ho = (e) => () => e;
function gs(e, {
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
gs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Nv(e) {
  return !e.ctrlKey && !e.button;
}
function Pv() {
  return this.parentNode;
}
function $v(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Tv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Dv() {
  var e = Nv, t = Pv, n = $v, r = Tv, o = {}, i = Pi("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(k) {
    k.on("mousedown.drag", g).filter(r).on("touchstart.drag", _).on("touchmove.drag", b, Sv).on("touchend.drag touchcancel.drag", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(k, T) {
    if (!(d || !e.call(this, k, T))) {
      var E = x(this, t.call(this, k, T), k, T, "mouse");
      E && (It(k.view).on("mousemove.drag", v, to).on("mouseup.drag", p, to), qc(k.view), Ki(k), c = !1, a = k.clientX, l = k.clientY, E("start", k));
    }
  }
  function v(k) {
    if (kr(k), !c) {
      var T = k.clientX - a, E = k.clientY - l;
      c = T * T + E * E > h;
    }
    o.mouse("drag", k);
  }
  function p(k) {
    It(k.view).on("mousemove.drag mouseup.drag", null), jc(k.view, c), kr(k), o.mouse("end", k);
  }
  function _(k, T) {
    if (e.call(this, k, T)) {
      var E = k.changedTouches, A = t.call(this, k, T), M = E.length, R, X;
      for (R = 0; R < M; ++R)
        (X = x(this, A, k, T, E[R].identifier, E[R])) && (Ki(k), X("start", k, E[R]));
    }
  }
  function b(k) {
    var T = k.changedTouches, E = T.length, A, M;
    for (A = 0; A < E; ++A)
      (M = o[T[A].identifier]) && (kr(k), M("drag", k, T[A]));
  }
  function S(k) {
    var T = k.changedTouches, E = T.length, A, M;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), A = 0; A < E; ++A)
      (M = o[T[A].identifier]) && (Ki(k), M("end", k, T[A]));
  }
  function x(k, T, E, A, M, R) {
    var X = i.copy(), J = Kt(R || E, T), C, P, m;
    if ((m = n.call(k, new gs("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: M,
      active: s,
      x: J[0],
      y: J[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), A)) != null)
      return C = m.x - J[0] || 0, P = m.y - J[1] || 0, function $(D, L, F) {
        var K = J, H;
        switch (D) {
          case "start":
            o[M] = $, H = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            J = Kt(F || L, T), H = s;
            break;
        }
        X.call(
          D,
          k,
          new gs(D, {
            sourceEvent: L,
            subject: m,
            target: f,
            identifier: M,
            active: H,
            x: J[0] + C,
            y: J[1] + P,
            dx: J[0] - K[0],
            dy: J[1] - K[1],
            dispatch: X
          }),
          A
        );
      };
  }
  return f.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : Ho(!!k), f) : e;
  }, f.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : Ho(k), f) : t;
  }, f.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : Ho(k), f) : n;
  }, f.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : Ho(!!k), f) : r;
  }, f.on = function() {
    var k = i.on.apply(i, arguments);
    return k === i ? f : k;
  }, f.clickDistance = function(k) {
    return arguments.length ? (h = (k = +k) * k, f) : Math.sqrt(h);
  }, f;
}
function Qs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Gc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function xo() {
}
var no = 0.7, ni = 1 / no, Er = "\\s*([+-]?\\d+)\\s*", ro = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", dn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Av = /^#([0-9a-f]{3,8})$/, Ov = new RegExp(`^rgb\\(${Er},${Er},${Er}\\)$`), Mv = new RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`), Hv = new RegExp(`^rgba\\(${Er},${Er},${Er},${ro}\\)$`), Lv = new RegExp(`^rgba\\(${dn},${dn},${dn},${ro}\\)$`), Vv = new RegExp(`^hsl\\(${ro},${dn},${dn}\\)$`), Iv = new RegExp(`^hsla\\(${ro},${dn},${dn},${ro}\\)$`), Ba = {
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
Qs(xo, lr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fa,
  // Deprecated! Use color.formatHex.
  formatHex: Fa,
  formatHex8: zv,
  formatHsl: Rv,
  formatRgb: Ka,
  toString: Ka
});
function Fa() {
  return this.rgb().formatHex();
}
function zv() {
  return this.rgb().formatHex8();
}
function Rv() {
  return Uc(this).formatHsl();
}
function Ka() {
  return this.rgb().formatRgb();
}
function lr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Av.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Za(t) : n === 3 ? new St(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Lo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Lo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ov.exec(e)) ? new St(t[1], t[2], t[3], 1) : (t = Mv.exec(e)) ? new St(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Hv.exec(e)) ? Lo(t[1], t[2], t[3], t[4]) : (t = Lv.exec(e)) ? Lo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Vv.exec(e)) ? Xa(t[1], t[2] / 100, t[3] / 100, 1) : (t = Iv.exec(e)) ? Xa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ba.hasOwnProperty(e) ? Za(Ba[e]) : e === "transparent" ? new St(NaN, NaN, NaN, 0) : null;
}
function Za(e) {
  return new St(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Lo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new St(e, t, n, r);
}
function Bv(e) {
  return e instanceof xo || (e = lr(e)), e ? (e = e.rgb(), new St(e.r, e.g, e.b, e.opacity)) : new St();
}
function vs(e, t, n, r) {
  return arguments.length === 1 ? Bv(e) : new St(e, t, n, r ?? 1);
}
function St(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Qs(St, vs, Gc(xo, {
  brighter(e) {
    return e = e == null ? ni : Math.pow(ni, e), new St(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? no : Math.pow(no, e), new St(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new St(or(this.r), or(this.g), or(this.b), ri(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ya,
  // Deprecated! Use color.formatHex.
  formatHex: Ya,
  formatHex8: Fv,
  formatRgb: Wa,
  toString: Wa
}));
function Ya() {
  return `#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}`;
}
function Fv() {
  return `#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}${Qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wa() {
  const e = ri(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${or(this.r)}, ${or(this.g)}, ${or(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ri(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function or(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Qn(e) {
  return e = or(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Xa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Wt(e, t, n, r);
}
function Uc(e) {
  if (e instanceof Wt) return new Wt(e.h, e.s, e.l, e.opacity);
  if (e instanceof xo || (e = lr(e)), !e) return new Wt();
  if (e instanceof Wt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Wt(s, a, l, e.opacity);
}
function Kv(e, t, n, r) {
  return arguments.length === 1 ? Uc(e) : new Wt(e, t, n, r ?? 1);
}
function Wt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Qs(Wt, Kv, Gc(xo, {
  brighter(e) {
    return e = e == null ? ni : Math.pow(ni, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? no : Math.pow(no, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new St(
      Zi(e >= 240 ? e - 240 : e + 120, o, r),
      Zi(e, o, r),
      Zi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Wt(qa(this.h), Vo(this.s), Vo(this.l), ri(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ri(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${qa(this.h)}, ${Vo(this.s) * 100}%, ${Vo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function qa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Vo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Zi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ea = (e) => () => e;
function Zv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Yv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Wv(e) {
  return (e = +e) == 1 ? Jc : function(t, n) {
    return n - t ? Yv(t, n, e) : ea(isNaN(t) ? n : t);
  };
}
function Jc(e, t) {
  var n = t - e;
  return n ? Zv(e, n) : ea(isNaN(e) ? t : e);
}
const oi = function e(t) {
  var n = Wv(t);
  function r(o, i) {
    var s = n((o = vs(o)).r, (i = vs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Jc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Xv(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function qv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function jv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Qr(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Gv(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function an(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Uv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Qr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ps = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Yi = new RegExp(ps.source, "g");
function Jv(e) {
  return function() {
    return e;
  };
}
function Qv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Qc(e, t) {
  var n = ps.lastIndex = Yi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ps.exec(e)) && (o = Yi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: an(r, o) })), n = Yi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Qv(l[0].x) : Jv(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function Qr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ea(t) : (n === "number" ? an : n === "string" ? (r = lr(t)) ? (t = r, oi) : Qc : t instanceof lr ? oi : t instanceof Date ? Gv : qv(t) ? Xv : Array.isArray(t) ? jv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Uv : an)(e, t);
}
var ja = 180 / Math.PI, ms = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function eu(e, t, n, r, o, i) {
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
var Io;
function e1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ms : eu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function t1(e) {
  return e == null || (Io || (Io = document.createElementNS("http://www.w3.org/2000/svg", "g")), Io.setAttribute("transform", e), !(e = Io.transform.baseVal.consolidate())) ? ms : (e = e.matrix, eu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function tu(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var p = g.push("translate(", null, t, null, n);
      v.push({ i: p - 4, x: an(c, h) }, { i: p - 2, x: an(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(c, d, h, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: an(c, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(c, d, h, f) {
    c !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: an(c, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var p = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: an(c, h) }, { i: p - 2, x: an(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var v = -1, p = f.length, _; ++v < p; ) h[(_ = f[v]).i] = _.x(g);
      return h.join("");
    };
  };
}
var n1 = tu(e1, "px, ", "px)", "deg)"), r1 = tu(t1, ", ", ")", ")"), o1 = 1e-12;
function Ga(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function i1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function s1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Yo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - l, p = g * g + v * v, _, b;
    if (p < o1)
      b = Math.log(f / c) / t, _ = function(A) {
        return [
          a + A * g,
          l + A * v,
          c * Math.exp(t * A * b)
        ];
      };
    else {
      var S = Math.sqrt(p), x = (f * f - c * c + r * p) / (2 * c * n * S), k = (f * f - c * c - r * p) / (2 * f * n * S), T = Math.log(Math.sqrt(x * x + 1) - x), E = Math.log(Math.sqrt(k * k + 1) - k);
      b = (E - T) / t, _ = function(A) {
        var M = A * b, R = Ga(T), X = c / (n * S) * (R * s1(t * M + T) - i1(T));
        return [
          a + X * g,
          l + X * v,
          c * R / Ga(t * M + T)
        ];
      };
    }
    return _.duration = b * 1e3 * t / Math.SQRT2, _;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Hr = 0, qr = 0, Yr = 0, nu = 1e3, ii, jr, si = 0, cr = 0, Ti = 0, oo = typeof performance == "object" && performance.now ? performance : Date, ru = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ta() {
  return cr || (ru(a1), cr = oo.now() + Ti);
}
function a1() {
  cr = 0;
}
function ai() {
  this._call = this._time = this._next = null;
}
ai.prototype = ou.prototype = {
  constructor: ai,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ta() : +n) + (t == null ? 0 : +t), !this._next && jr !== this && (jr ? jr._next = this : ii = this, jr = this), this._call = e, this._time = n, ys();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ys());
  }
};
function ou(e, t, n) {
  var r = new ai();
  return r.restart(e, t, n), r;
}
function l1() {
  ta(), ++Hr;
  for (var e = ii, t; e; )
    (t = cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Hr;
}
function Ua() {
  cr = (si = oo.now()) + Ti, Hr = qr = 0;
  try {
    l1();
  } finally {
    Hr = 0, u1(), cr = 0;
  }
}
function c1() {
  var e = oo.now(), t = e - si;
  t > nu && (Ti -= t, si = e);
}
function u1() {
  for (var e, t = ii, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ii = n);
  jr = e, ys(r);
}
function ys(e) {
  if (!Hr) {
    qr && (qr = clearTimeout(qr));
    var t = e - cr;
    t > 24 ? (e < 1 / 0 && (qr = setTimeout(Ua, e - oo.now() - Ti)), Yr && (Yr = clearInterval(Yr))) : (Yr || (si = oo.now(), Yr = setInterval(c1, nu)), Hr = 1, ru(Ua));
  }
}
function Ja(e, t, n) {
  var r = new ai();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var d1 = Pi("start", "end", "cancel", "interrupt"), f1 = [], iu = 0, Qa = 1, ws = 2, Wo = 3, el = 4, _s = 5, Xo = 6;
function Di(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  h1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: d1,
    tween: f1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: iu
  });
}
function na(e, t) {
  var n = en(e, t);
  if (n.state > iu) throw new Error("too late; already scheduled");
  return n;
}
function vn(e, t) {
  var n = en(e, t);
  if (n.state > Wo) throw new Error("too late; already running");
  return n;
}
function en(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function h1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ou(i, 0, n.time);
  function i(c) {
    n.state = Qa, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== Qa) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Wo) return Ja(s);
        g.state === el ? (g.state = Xo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Xo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Ja(function() {
      n.state === Wo && (n.state = el, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = ws, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ws) {
      for (n.state = Wo, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = _s, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === _s && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Xo, n.timer.stop(), delete r[t];
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
      o = r.state > ws && r.state < _s, r.state = Xo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function g1(e) {
  return this.each(function() {
    qo(this, e);
  });
}
function v1(e, t) {
  var n, r;
  return function() {
    var o = vn(this, e), i = o.tween;
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
function p1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = vn(this, e), s = i.tween;
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
function m1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = en(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? v1 : p1)(n, e, t));
}
function ra(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = vn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return en(o, r).value[t];
  };
}
function su(e, t) {
  var n;
  return (typeof t == "number" ? an : t instanceof lr ? oi : (n = lr(t)) ? (t = n, oi) : Qc)(e, t);
}
function y1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function w1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function _1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function x1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function b1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function C1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function k1(e, t) {
  var n = $i(e), r = n === "transform" ? r1 : su;
  return this.attrTween(e, typeof t == "function" ? (n.local ? C1 : b1)(n, r, ra(this, "attr." + e, t)) : t == null ? (n.local ? w1 : y1)(n) : (n.local ? x1 : _1)(n, r, t));
}
function E1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function S1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function N1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && S1(e, i)), n;
  }
  return o._value = t, o;
}
function P1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && E1(e, i)), n;
  }
  return o._value = t, o;
}
function $1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = $i(e);
  return this.tween(n, (r.local ? N1 : P1)(r, t));
}
function T1(e, t) {
  return function() {
    na(this, e).delay = +t.apply(this, arguments);
  };
}
function D1(e, t) {
  return t = +t, function() {
    na(this, e).delay = t;
  };
}
function A1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? T1 : D1)(t, e)) : en(this.node(), t).delay;
}
function O1(e, t) {
  return function() {
    vn(this, e).duration = +t.apply(this, arguments);
  };
}
function M1(e, t) {
  return t = +t, function() {
    vn(this, e).duration = t;
  };
}
function H1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? O1 : M1)(t, e)) : en(this.node(), t).duration;
}
function L1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    vn(this, e).ease = t;
  };
}
function V1(e) {
  var t = this._id;
  return arguments.length ? this.each(L1(t, e)) : en(this.node(), t).ease;
}
function I1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    vn(this, e).ease = n;
  };
}
function z1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(I1(this._id, e));
}
function R1(e) {
  typeof e != "function" && (e = Ic(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new En(r, this._parents, this._name, this._id);
}
function B1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new En(s, this._parents, this._name, this._id);
}
function F1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function K1(e, t, n) {
  var r, o, i = F1(t) ? na : vn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Z1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? en(this.node(), n).on.on(e) : this.each(K1(n, e, t));
}
function Y1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function W1() {
  return this.on("end.remove", Y1(this._id));
}
function X1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Us(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, Di(c[f], t, n, f, c, en(d, n)));
  return new En(i, this._parents, t, n);
}
function q1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Vc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, v = en(d, n), p = 0, _ = f.length; p < _; ++p)
          (g = f[p]) && Di(g, t, n, p, f, v);
        i.push(f), s.push(d);
      }
  return new En(i, s, t, n);
}
var j1 = _o.prototype.constructor;
function G1() {
  return new j1(this._groups, this._parents);
}
function U1(e, t) {
  var n, r, o;
  return function() {
    var i = Mr(this, e), s = (this.style.removeProperty(e), Mr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function au(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function J1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Mr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Q1(e, t, n) {
  var r, o, i;
  return function() {
    var s = Mr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Mr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function ep(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = vn(this, e), c = l.on, d = l.value[i] == null ? a || (a = au(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function tp(e, t, n) {
  var r = (e += "") == "transform" ? n1 : su;
  return t == null ? this.styleTween(e, U1(e, r)).on("end.style." + e, au(e)) : typeof t == "function" ? this.styleTween(e, Q1(e, r, ra(this, "style." + e, t))).each(ep(this._id, e)) : this.styleTween(e, J1(e, r, t), n).on("end.style." + e, null);
}
function np(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function rp(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && np(e, s, n)), r;
  }
  return i._value = t, i;
}
function op(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, rp(e, t, n ?? ""));
}
function ip(e) {
  return function() {
    this.textContent = e;
  };
}
function sp(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function ap(e) {
  return this.tween("text", typeof e == "function" ? sp(ra(this, "text", e)) : ip(e == null ? "" : e + ""));
}
function lp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function cp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && lp(o)), t;
  }
  return r._value = e, r;
}
function up(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, cp(e));
}
function dp() {
  for (var e = this._name, t = this._id, n = lu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = en(l, t);
        Di(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new En(r, this._parents, e, n);
}
function fp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = vn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var hp = 0;
function En(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function lu() {
  return ++hp;
}
var pn = _o.prototype;
En.prototype = {
  constructor: En,
  select: X1,
  selectAll: q1,
  selectChild: pn.selectChild,
  selectChildren: pn.selectChildren,
  filter: R1,
  merge: B1,
  selection: G1,
  transition: dp,
  call: pn.call,
  nodes: pn.nodes,
  node: pn.node,
  size: pn.size,
  empty: pn.empty,
  each: pn.each,
  on: Z1,
  attr: k1,
  attrTween: $1,
  style: tp,
  styleTween: op,
  text: ap,
  textTween: up,
  remove: W1,
  tween: m1,
  delay: A1,
  duration: H1,
  ease: V1,
  easeVarying: z1,
  end: fp,
  [Symbol.iterator]: pn[Symbol.iterator]
};
function gp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var vp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: gp
};
function pp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function mp(e) {
  var t, n;
  e instanceof En ? (t = e._id, e = e._name) : (t = lu(), (n = vp).time = ta(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Di(l, e, t, c, s, n || pp(l, t));
  return new En(r, this._parents, e, t);
}
_o.prototype.interrupt = g1;
_o.prototype.transition = mp;
const zo = (e) => () => e;
function yp(e, {
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
function yn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
yn.prototype = {
  constructor: yn,
  scale: function(e) {
    return e === 1 ? this : new yn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new yn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ai = new yn(1, 0, 0);
cu.prototype = yn.prototype;
function cu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ai;
  return e.__zoom;
}
function Wi(e) {
  e.stopImmediatePropagation();
}
function Wr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function wp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function _p() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function tl() {
  return this.__zoom || Ai;
}
function xp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function bp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function uu() {
  var e = wp, t = _p, n = Cp, r = xp, o = bp, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Yo, c = Pi("start", "zoom", "end"), d, h, f, g = 500, v = 150, p = 0, _ = 10;
  function b(m) {
    m.property("__zoom", tl).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", X).filter(o).on("touchstart.zoom", J).on("touchmove.zoom", C).on("touchend.zoom touchcancel.zoom", P).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(m, $, D, L) {
    var F = m.selection ? m.selection() : m;
    F.property("__zoom", tl), m !== F ? T(m, $, D, L) : F.interrupt().each(function() {
      E(this, arguments).event(L).start().zoom(null, typeof $ == "function" ? $.apply(this, arguments) : $).end();
    });
  }, b.scaleBy = function(m, $, D, L) {
    b.scaleTo(m, function() {
      var F = this.__zoom.k, K = typeof $ == "function" ? $.apply(this, arguments) : $;
      return F * K;
    }, D, L);
  }, b.scaleTo = function(m, $, D, L) {
    b.transform(m, function() {
      var F = t.apply(this, arguments), K = this.__zoom, H = D == null ? k(F) : typeof D == "function" ? D.apply(this, arguments) : D, W = K.invert(H), Y = typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(x(S(K, Y), H, W), F, s);
    }, D, L);
  }, b.translateBy = function(m, $, D, L) {
    b.transform(m, function() {
      return n(this.__zoom.translate(
        typeof $ == "function" ? $.apply(this, arguments) : $,
        typeof D == "function" ? D.apply(this, arguments) : D
      ), t.apply(this, arguments), s);
    }, null, L);
  }, b.translateTo = function(m, $, D, L, F) {
    b.transform(m, function() {
      var K = t.apply(this, arguments), H = this.__zoom, W = L == null ? k(K) : typeof L == "function" ? L.apply(this, arguments) : L;
      return n(Ai.translate(W[0], W[1]).scale(H.k).translate(
        typeof $ == "function" ? -$.apply(this, arguments) : -$,
        typeof D == "function" ? -D.apply(this, arguments) : -D
      ), K, s);
    }, L, F);
  };
  function S(m, $) {
    return $ = Math.max(i[0], Math.min(i[1], $)), $ === m.k ? m : new yn($, m.x, m.y);
  }
  function x(m, $, D) {
    var L = $[0] - D[0] * m.k, F = $[1] - D[1] * m.k;
    return L === m.x && F === m.y ? m : new yn(m.k, L, F);
  }
  function k(m) {
    return [(+m[0][0] + +m[1][0]) / 2, (+m[0][1] + +m[1][1]) / 2];
  }
  function T(m, $, D, L) {
    m.on("start.zoom", function() {
      E(this, arguments).event(L).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(L).end();
    }).tween("zoom", function() {
      var F = this, K = arguments, H = E(F, K).event(L), W = t.apply(F, K), Y = D == null ? k(W) : typeof D == "function" ? D.apply(F, K) : D, ee = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), j = F.__zoom, B = typeof $ == "function" ? $.apply(F, K) : $, Q = l(j.invert(Y).concat(ee / j.k), B.invert(Y).concat(ee / B.k));
      return function(q) {
        if (q === 1) q = B;
        else {
          var ne = Q(q), U = ee / ne[2];
          q = new yn(U, Y[0] - ne[0] * U, Y[1] - ne[1] * U);
        }
        H.zoom(null, q);
      };
    });
  }
  function E(m, $, D) {
    return !D && m.__zooming || new A(m, $);
  }
  function A(m, $) {
    this.that = m, this.args = $, this.active = 0, this.sourceEvent = null, this.extent = t.apply(m, $), this.taps = 0;
  }
  A.prototype = {
    event: function(m) {
      return m && (this.sourceEvent = m), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(m, $) {
      return this.mouse && m !== "mouse" && (this.mouse[1] = $.invert(this.mouse[0])), this.touch0 && m !== "touch" && (this.touch0[1] = $.invert(this.touch0[0])), this.touch1 && m !== "touch" && (this.touch1[1] = $.invert(this.touch1[0])), this.that.__zoom = $, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(m) {
      var $ = It(this.that).datum();
      c.call(
        m,
        this.that,
        new yp(m, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: c
        }),
        $
      );
    }
  };
  function M(m, ...$) {
    if (!e.apply(this, arguments)) return;
    var D = E(this, $).event(m), L = this.__zoom, F = Math.max(i[0], Math.min(i[1], L.k * Math.pow(2, r.apply(this, arguments)))), K = Kt(m);
    if (D.wheel)
      (D.mouse[0][0] !== K[0] || D.mouse[0][1] !== K[1]) && (D.mouse[1] = L.invert(D.mouse[0] = K)), clearTimeout(D.wheel);
    else {
      if (L.k === F) return;
      D.mouse = [K, L.invert(K)], qo(this), D.start();
    }
    Wr(m), D.wheel = setTimeout(H, v), D.zoom("mouse", n(x(S(L, F), D.mouse[0], D.mouse[1]), D.extent, s));
    function H() {
      D.wheel = null, D.end();
    }
  }
  function R(m, ...$) {
    if (f || !e.apply(this, arguments)) return;
    var D = m.currentTarget, L = E(this, $, !0).event(m), F = It(m.view).on("mousemove.zoom", Y, !0).on("mouseup.zoom", ee, !0), K = Kt(m, D), H = m.clientX, W = m.clientY;
    qc(m.view), Wi(m), L.mouse = [K, this.__zoom.invert(K)], qo(this), L.start();
    function Y(j) {
      if (Wr(j), !L.moved) {
        var B = j.clientX - H, Q = j.clientY - W;
        L.moved = B * B + Q * Q > p;
      }
      L.event(j).zoom("mouse", n(x(L.that.__zoom, L.mouse[0] = Kt(j, D), L.mouse[1]), L.extent, s));
    }
    function ee(j) {
      F.on("mousemove.zoom mouseup.zoom", null), jc(j.view, L.moved), Wr(j), L.event(j).end();
    }
  }
  function X(m, ...$) {
    if (e.apply(this, arguments)) {
      var D = this.__zoom, L = Kt(m.changedTouches ? m.changedTouches[0] : m, this), F = D.invert(L), K = D.k * (m.shiftKey ? 0.5 : 2), H = n(x(S(D, K), L, F), t.apply(this, $), s);
      Wr(m), a > 0 ? It(this).transition().duration(a).call(T, H, L, m) : It(this).call(b.transform, H, L, m);
    }
  }
  function J(m, ...$) {
    if (e.apply(this, arguments)) {
      var D = m.touches, L = D.length, F = E(this, $, m.changedTouches.length === L).event(m), K, H, W, Y;
      for (Wi(m), H = 0; H < L; ++H)
        W = D[H], Y = Kt(W, this), Y = [Y, this.__zoom.invert(Y), W.identifier], F.touch0 ? !F.touch1 && F.touch0[2] !== Y[2] && (F.touch1 = Y, F.taps = 0) : (F.touch0 = Y, K = !0, F.taps = 1 + !!d);
      d && (d = clearTimeout(d)), K && (F.taps < 2 && (h = Y[0], d = setTimeout(function() {
        d = null;
      }, g)), qo(this), F.start());
    }
  }
  function C(m, ...$) {
    if (this.__zooming) {
      var D = E(this, $).event(m), L = m.changedTouches, F = L.length, K, H, W, Y;
      for (Wr(m), K = 0; K < F; ++K)
        H = L[K], W = Kt(H, this), D.touch0 && D.touch0[2] === H.identifier ? D.touch0[0] = W : D.touch1 && D.touch1[2] === H.identifier && (D.touch1[0] = W);
      if (H = D.that.__zoom, D.touch1) {
        var ee = D.touch0[0], j = D.touch0[1], B = D.touch1[0], Q = D.touch1[1], q = (q = B[0] - ee[0]) * q + (q = B[1] - ee[1]) * q, ne = (ne = Q[0] - j[0]) * ne + (ne = Q[1] - j[1]) * ne;
        H = S(H, Math.sqrt(q / ne)), W = [(ee[0] + B[0]) / 2, (ee[1] + B[1]) / 2], Y = [(j[0] + Q[0]) / 2, (j[1] + Q[1]) / 2];
      } else if (D.touch0) W = D.touch0[0], Y = D.touch0[1];
      else return;
      D.zoom("touch", n(x(H, W, Y), D.extent, s));
    }
  }
  function P(m, ...$) {
    if (this.__zooming) {
      var D = E(this, $).event(m), L = m.changedTouches, F = L.length, K, H;
      for (Wi(m), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), K = 0; K < F; ++K)
        H = L[K], D.touch0 && D.touch0[2] === H.identifier ? delete D.touch0 : D.touch1 && D.touch1[2] === H.identifier && delete D.touch1;
      if (D.touch1 && !D.touch0 && (D.touch0 = D.touch1, delete D.touch1), D.touch0) D.touch0[1] = this.__zoom.invert(D.touch0[0]);
      else if (D.end(), D.taps === 2 && (H = Kt(H, this), Math.hypot(h[0] - H[0], h[1] - H[1]) < _)) {
        var W = It(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : zo(+m), b) : r;
  }, b.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : zo(!!m), b) : e;
  }, b.touchable = function(m) {
    return arguments.length ? (o = typeof m == "function" ? m : zo(!!m), b) : o;
  }, b.extent = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : zo([[+m[0][0], +m[0][1]], [+m[1][0], +m[1][1]]]), b) : t;
  }, b.scaleExtent = function(m) {
    return arguments.length ? (i[0] = +m[0], i[1] = +m[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(m) {
    return arguments.length ? (s[0][0] = +m[0][0], s[1][0] = +m[1][0], s[0][1] = +m[0][1], s[1][1] = +m[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(m) {
    return arguments.length ? (n = m, b) : n;
  }, b.duration = function(m) {
    return arguments.length ? (a = +m, b) : a;
  }, b.interpolate = function(m) {
    return arguments.length ? (l = m, b) : l;
  }, b.on = function() {
    var m = c.on.apply(c, arguments);
    return m === c ? b : m;
  }, b.clickDistance = function(m) {
    return arguments.length ? (p = (m = +m) * m, b) : Math.sqrt(p);
  }, b.tapDistance = function(m) {
    return arguments.length ? (_ = +m, b) : _;
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
}, xs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], du = ["Enter", " ", "Escape"], kp = {
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
var ir;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ir || (ir = {}));
var li;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(li || (li = {}));
const bs = {
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
var mn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(mn || (mn = {}));
var so;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(so || (so = {}));
var me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(me || (me = {}));
const nl = {
  [me.Left]: me.Right,
  [me.Right]: me.Left,
  [me.Top]: me.Bottom,
  [me.Bottom]: me.Top
};
function Ep(e, t) {
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
function rl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Sp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const fu = (e) => "id" in e && "source" in e && "target" in e, Np = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), oa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), bo = (e, t = [0, 0]) => {
  const { width: n, height: r } = qn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Pp = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : oa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? ci(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Oi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Mi(n);
}, Co = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Oi(n, ci(o)), r = !0);
  }), r ? Mi(n) : { x: 0, y: 0, width: 0, height: 0 };
}, ia = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Eo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, p = ao(a, Ir(c)), _ = (g ?? 0) * (v ?? 0), b = i && p > 0;
    (!c.internals.handleBounds || b || p >= _ || c.dragging) && l.push(c);
  }
  return l;
}, $p = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Tp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Dp({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Tp(e, s), l = Co(a), c = sa(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function hu({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
  else a && zr(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = zr(h) ? ur(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", io.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Ap({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((p) => p.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = $p(s, l);
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
const Vr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ur = (e = { x: 0, y: 0 }, t, n) => ({
  x: Vr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Vr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function gu(e, t, n) {
  const { width: r, height: o } = qn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return ur(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ol = (e, t, n) => e < t ? Vr(Math.abs(e - t), 1, t) / t : e > n ? -Vr(Math.abs(e - n), 1, t) / t : 0, vu = (e, t, n = 15, r = 40) => {
  const o = ol(e.x, r, t.width - r) * n, i = ol(e.y, r, t.height - r) * n;
  return [o, i];
}, Oi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Cs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Mi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Ir = (e, t = [0, 0]) => {
  const { x: n, y: r } = oa(e) ? e.internals.positionAbsolute : bo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, ci = (e, t = [0, 0]) => {
  const { x: n, y: r } = oa(e) ? e.internals.positionAbsolute : bo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, pu = (e, t) => Mi(Oi(Cs(e), Cs(t))), ao = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, il = (e) => wn(e.width) && wn(e.height) && wn(e.x) && wn(e.y), wn = (e) => !isNaN(e) && isFinite(e), Op = (e, t) => {
}, ko = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Eo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ko(a, s) : a;
}, ui = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function wr(e, t) {
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
function Mp(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = wr(e, n), o = wr(e, t);
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
    const r = wr(e.top ?? e.y ?? 0, n), o = wr(e.bottom ?? e.y ?? 0, n), i = wr(e.left ?? e.x ?? 0, t), s = wr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Hp(e, t, n, r, o, i) {
  const { x: s, y: a } = ui(e, [t, n, r]), { x: l, y: c } = ui({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const sa = (e, t, n, r, o, i) => {
  const s = Mp(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Vr(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, p = Hp(e, g, v, d, t, n), _ = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: g - _.left + _.right,
    y: v - _.top + _.bottom,
    zoom: d
  };
}, er = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function zr(e) {
  return e != null && e !== "parent";
}
function qn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function mu(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Lp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Vp(e) {
  return { ...kp, ...e || {} };
}
function Xi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = qt(e), a = Eo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? ko(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const yu = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), wu = (e) => e?.getRootNode?.() || window?.document, Ip = ["INPUT", "SELECT", "TEXTAREA"];
function _u(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Ip.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const xu = (e) => "clientX" in e, qt = (e, t) => {
  const n = xu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, sl = (e, t, n, r, o) => {
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
      ...yu(s)
    };
  });
};
function zp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function Ro(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function al({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case me.Left:
      return [t - Ro(t - r, i), n];
    case me.Right:
      return [t + Ro(r - t, i), n];
    case me.Top:
      return [t, n - Ro(n - o, i)];
    case me.Bottom:
      return [t, n + Ro(o - n, i)];
  }
}
function bu({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, curvature: s = 0.25 }) {
  const [a, l] = al({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = al({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = zp({
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
function Cu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Rp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Bp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Oi(ci(e), ci(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ao(s, Mi(i)) > 0;
}
const Fp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Kp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Zp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return fu(e) ? n = { ...e } : n = {
    ...e,
    id: Fp(e)
  }, Kp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function ku({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Cu({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const ll = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, Yp = ({ source: e, sourcePosition: t = me.Bottom, target: n }) => t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, cl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Wp({ source: e, sourcePosition: t = me.Bottom, target: n, targetPosition: r = me.Top, center: o, offset: i, stepPosition: s }) {
  const a = ll[t], l = ll[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Yp({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], p, _;
  const b = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [, , x, k] = Cu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (p = o.x ?? c.x + (d.x - c.x) * s, _ = o.y ?? (c.y + d.y) / 2) : (p = o.x ?? (c.x + d.x) / 2, _ = o.y ?? c.y + (d.y - c.y) * s);
    const E = [
      { x: p, y: c.y },
      { x: p, y: d.y }
    ], A = [
      { x: c.x, y: _ },
      { x: d.x, y: _ }
    ];
    a[f] === g ? v = f === "x" ? E : A : v = f === "x" ? A : E;
  } else {
    const E = [{ x: c.x, y: d.y }], A = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === g ? A : E : v = a.y === g ? E : A, t === r) {
      const C = Math.abs(e[f] - n[f]);
      if (C <= i) {
        const P = Math.min(i - 1, i - C);
        a[f] === g ? b[f] = (c[f] > e[f] ? -1 : 1) * P : S[f] = (d[f] > n[f] ? -1 : 1) * P;
      }
    }
    if (t !== r) {
      const C = f === "x" ? "y" : "x", P = a[f] === l[C], m = c[C] > d[C], $ = c[C] < d[C];
      (a[f] === 1 && (!P && m || P && $) || a[f] !== 1 && (!P && $ || P && m)) && (v = f === "x" ? E : A);
    }
    const M = { x: c.x + b.x, y: c.y + b.y }, R = { x: d.x + S.x, y: d.y + S.y }, X = Math.max(Math.abs(M.x - v[0].x), Math.abs(R.x - v[0].x)), J = Math.max(Math.abs(M.y - v[0].y), Math.abs(R.y - v[0].y));
    X >= J ? (p = (M.x + R.x) / 2, _ = v[0].y) : (p = v[0].x, _ = (M.y + R.y) / 2);
  }
  return [[
    e,
    { x: c.x + b.x, y: c.y + b.y },
    ...v,
    { x: d.x + S.x, y: d.y + S.y },
    n
  ], p, _, x, k];
}
function Xp(e, t, n, r) {
  const o = Math.min(cl(e, t) / 2, cl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function aa({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, p] = Wp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((b, S, x) => {
    let k = "";
    return x > 0 && x < h.length - 1 ? k = Xp(h[x - 1], S, h[x + 1], s) : k = `${x === 0 ? "M" : "L"}${S.x} ${S.y}`, b += k, b;
  }, ""), f, g, v, p];
}
function ul(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function qp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ul(t) || !ul(n))
    return null;
  const r = t.internals.handleBounds || dl(t.handles), o = n.internals.handleBounds || dl(n.handles), i = fl(r?.source ?? [], e.sourceHandle), s = fl(
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
  const a = i?.position || me.Bottom, l = s?.position || me.Top, c = lo(t, i, a), d = lo(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function dl(e) {
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
function lo(e, t, n = me.Left, r = !1) {
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
function fl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ks(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function jp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = ks(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Gp(e, t, n, r, o) {
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
const Eu = 1e3, Up = 10, la = {
  nodeOrigin: [0, 0],
  nodeExtent: xs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Jp = {
  ...la,
  checkEquality: !0
};
function ca(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Qp(e, t, n) {
  const r = ca(la, n);
  for (const o of e.values())
    if (o.parentId)
      ua(o, e, t, r);
    else {
      const i = bo(o, r.nodeOrigin), s = zr(o.extent) ? o.extent : r.nodeExtent, a = ur(i, s, qn(o));
      o.internals.positionAbsolute = a;
    }
}
function e0(e, t) {
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
function t0(e, t, n, r) {
  const o = ca(Jp, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Eu : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = a.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const h = bo(c, o.nodeOrigin), f = zr(c.extent) ? c.extent : o.nodeExtent, g = ur(h, f, qn(c));
      d = {
        ...o.defaults,
        ...c,
        measured: {
          width: c.measured?.width,
          height: c.measured?.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: e0(c, d),
          z: Su(c, l),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && ua(d, t, n, r, i);
  }
  return s;
}
function n0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ua(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = ca(la, r), l = e.parentId, c = t.get(l);
  if (!c) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  n0(e, n), o && !c.parentId && c.internals.rootParentIndex === void 0 && (c.internals.rootParentIndex = ++o.i, c.internals.z = c.internals.z + o.i * Up), o && c.internals.rootParentIndex !== void 0 && (o.i = c.internals.rootParentIndex);
  const d = i ? Eu : 0, { x: h, y: f, z: g } = r0(e, c, s, a, d), { positionAbsolute: v } = e.internals, p = h !== v.x || f !== v.y;
  (p || g !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: h, y: f } : v,
      z: g
    }
  });
}
function Su(e, t) {
  return (wn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function r0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = qn(e), l = bo(e, n), c = zr(e.extent) ? ur(l, e.extent, a) : l;
  let d = ur({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = gu(d, a, t));
  const h = Su(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= h ? f + 1 : h
  };
}
function o0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Ir(a), c = pu(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = qn(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), p = Math.max(d.height, Math.round(s.height)), _ = (v - d.width) * h[0], b = (p - d.height) * h[1];
    (f > 0 || g > 0 || _ || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + _,
        y: a.position.y - g + b
      }
    }), n.get(l)?.forEach((S) => {
      e.some((x) => x.id === S.id) || o.push({
        id: S.id,
        type: "position",
        position: {
          x: S.position.x + f,
          y: S.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - _ : 0),
        height: p + (g ? h[1] * g - b : 0)
      }
    });
  }), o;
}
function i0(e, t, n, r, o, i) {
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
    const v = yu(f.nodeElement), p = g.measured.width !== v.width || g.measured.height !== v.height;
    if (!!(v.width && v.height && (p || !g.internals.handleBounds || f.force))) {
      const b = f.nodeElement.getBoundingClientRect(), S = zr(g.extent) ? g.extent : i;
      let { positionAbsolute: x } = g.internals;
      g.parentId && g.extent === "parent" ? x = gu(x, v, t.get(g.parentId)) : S && (x = ur(x, S, v));
      const k = {
        ...g,
        measured: v,
        internals: {
          ...g.internals,
          positionAbsolute: x,
          handleBounds: {
            source: sl("source", f.nodeElement, b, d, g.id),
            target: sl("target", f.nodeElement, b, d, g.id)
          }
        }
      };
      t.set(g.id, k), g.parentId && ua(k, t, n, { nodeOrigin: o }), a = !0, p && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: v
      }), g.expandParent && g.parentId && h.push({
        id: g.id,
        parentId: g.parentId,
        rect: Ir(k, o)
      }));
    }
  }
  if (h.length > 0) {
    const f = o0(h, t, n, o);
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
function hl(e, t, n, r, o, i) {
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
function a0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    hl("source", l, d, e, o, s), hl("target", l, c, e, i, a), t.set(r.id, r);
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
function Nu(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Nu(n, t) : !1;
}
function gl(e, t, n) {
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
function c0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Nu(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function qi({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function u0({ dragItems: e, snapGrid: t, x: n, y: r }) {
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
function d0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, p = null;
  function _({ noDragClassName: S, handleSelector: x, domNode: k, isSelectable: T, nodeId: E, nodeClickDistance: A = 0 }) {
    f = It(k);
    function M({ x: C, y: P }) {
      const { nodeLookup: m, nodeExtent: $, snapGrid: D, snapToGrid: L, nodeOrigin: F, onNodeDrag: K, onSelectionDrag: H, onError: W, updateNodePositions: Y } = t();
      i = { x: C, y: P };
      let ee = !1;
      const j = a.size > 1, B = j && $ ? Cs(Co(a)) : null, Q = j && L ? u0({
        dragItems: a,
        snapGrid: D,
        x: C,
        y: P
      }) : null;
      for (const [q, ne] of a) {
        if (!m.has(q))
          continue;
        let U = { x: C - ne.distance.x, y: P - ne.distance.y };
        L && (U = Q ? {
          x: Math.round(U.x + Q.x),
          y: Math.round(U.y + Q.y)
        } : ko(U, D));
        let we = null;
        if (j && $ && !ne.extent && B) {
          const { positionAbsolute: re } = ne.internals, de = re.x - B.x + $[0][0], ge = re.x + ne.measured.width - B.x2 + $[1][0], _e = re.y - B.y + $[0][1], fe = re.y + ne.measured.height - B.y2 + $[1][1];
          we = [
            [de, _e],
            [ge, fe]
          ];
        }
        const { position: oe, positionAbsolute: ae } = hu({
          nodeId: q,
          nextPosition: U,
          nodeLookup: m,
          nodeExtent: we || $,
          nodeOrigin: F,
          onError: W
        });
        ee = ee || ne.position.x !== oe.x || ne.position.y !== oe.y, ne.position = oe, ne.internals.positionAbsolute = ae;
      }
      if (v = v || ee, !!ee && (Y(a, !0), p && (r || K || !E && H))) {
        const [q, ne] = qi({
          nodeId: E,
          dragItems: a,
          nodeLookup: m
        });
        r?.(p, a, q, ne), K?.(p, q, ne), E || H?.(p, ne);
      }
    }
    async function R() {
      if (!d)
        return;
      const { transform: C, panBy: P, autoPanSpeed: m, autoPanOnNodeDrag: $ } = t();
      if (!$) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [D, L] = vu(c, d, m);
      (D !== 0 || L !== 0) && (i.x = (i.x ?? 0) - D / C[2], i.y = (i.y ?? 0) - L / C[2], await P({ x: D, y: L }) && M(i)), s = requestAnimationFrame(R);
    }
    function X(C) {
      const { nodeLookup: P, multiSelectionActive: m, nodesDraggable: $, transform: D, snapGrid: L, snapToGrid: F, selectNodesOnDrag: K, onNodeDragStart: H, onSelectionDragStart: W, unselectNodesAndEdges: Y } = t();
      h = !0, (!K || !T) && !m && E && (P.get(E)?.selected || Y()), T && K && E && e?.(E);
      const ee = Xi(C.sourceEvent, { transform: D, snapGrid: L, snapToGrid: F, containerBounds: d });
      if (i = ee, a = c0(P, $, ee, E), a.size > 0 && (n || H || !E && W)) {
        const [j, B] = qi({
          nodeId: E,
          dragItems: a,
          nodeLookup: P
        });
        n?.(C.sourceEvent, a, j, B), H?.(C.sourceEvent, j, B), E || W?.(C.sourceEvent, B);
      }
    }
    const J = Dv().clickDistance(A).on("start", (C) => {
      const { domNode: P, nodeDragThreshold: m, transform: $, snapGrid: D, snapToGrid: L } = t();
      d = P?.getBoundingClientRect() || null, g = !1, v = !1, p = C.sourceEvent, m === 0 && X(C), i = Xi(C.sourceEvent, { transform: $, snapGrid: D, snapToGrid: L, containerBounds: d }), c = qt(C.sourceEvent, d);
    }).on("drag", (C) => {
      const { autoPanOnNodeDrag: P, transform: m, snapGrid: $, snapToGrid: D, nodeDragThreshold: L, nodeLookup: F } = t(), K = Xi(C.sourceEvent, { transform: m, snapGrid: $, snapToGrid: D, containerBounds: d });
      if (p = C.sourceEvent, (C.sourceEvent.type === "touchmove" && C.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !F.has(E)) && (g = !0), !g) {
        if (!l && P && h && (l = !0, R()), !h) {
          const H = qt(C.sourceEvent, d), W = H.x - c.x, Y = H.y - c.y;
          Math.sqrt(W * W + Y * Y) > L && X(C);
        }
        (i.x !== K.xSnapped || i.y !== K.ySnapped) && a && h && (c = qt(C.sourceEvent, d), M(K));
      }
    }).on("end", (C) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: P, updateNodePositions: m, onNodeDragStop: $, onSelectionDragStop: D } = t();
        if (v && (m(a, !1), v = !1), o || $ || !E && D) {
          const [L, F] = qi({
            nodeId: E,
            dragItems: a,
            nodeLookup: P,
            dragging: !1
          });
          o?.(C.sourceEvent, a, L, F), $?.(C.sourceEvent, L, F), E || D?.(C.sourceEvent, F);
        }
      }
    }).filter((C) => {
      const P = C.target;
      return !C.button && (!S || !gl(P, `.${S}`, k)) && (!x || gl(P, x, k));
    });
    f.call(J);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: _,
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
    ao(o, Ir(i)) > 0 && r.push(i);
  return r;
}
const h0 = 250;
function g0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = f0(e, n, t + h0);
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
function Pu(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...lo(s, l, l.position, !0) } : l;
}
function $u(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function v0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Tu = () => !0;
function p0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: p, onConnectEnd: _, isValidConnection: b = Tu, onReconnectEnd: S, updateConnection: x, getTransform: k, getFromHandle: T, autoPanSpeed: E, dragThreshold: A = 1, handleDomNode: M }) {
  const R = wu(e.target);
  let X = 0, J;
  const { x: C, y: P } = qt(e), m = $u(i, M), $ = a?.getBoundingClientRect();
  let D = !1;
  if (!$ || !m)
    return;
  const L = Pu(o, m, r, l, t);
  if (!L)
    return;
  let F = qt(e, $), K = !1, H = null, W = !1, Y = null;
  function ee() {
    if (!d || !$)
      return;
    const [oe, ae] = vu(F, $, E);
    f({ x: oe, y: ae }), X = requestAnimationFrame(ee);
  }
  const j = {
    ...L,
    nodeId: o,
    type: m,
    position: L.position
  }, B = l.get(o);
  let q = {
    inProgress: !0,
    isValid: null,
    from: lo(B, j, me.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: B,
    to: F,
    toHandle: null,
    toPosition: nl[j.position],
    toNode: null
  };
  function ne() {
    D = !0, x(q), v?.(e, { nodeId: o, handleId: r, handleType: m });
  }
  A === 0 && ne();
  function U(oe) {
    if (!D) {
      const { x: ge, y: _e } = qt(oe), fe = ge - C, be = _e - P;
      if (!(fe * fe + be * be > A * A))
        return;
      ne();
    }
    if (!T() || !j) {
      we(oe);
      return;
    }
    const ae = k();
    F = qt(oe, $), J = g0(Eo(F, ae, !1, [1, 1]), n, l, j), K || (ee(), K = !0);
    const re = Du(oe, {
      handle: J,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: R,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    Y = re.handleDomNode, H = re.connection, W = v0(!!J, re.isValid);
    const de = {
      // from stays the same
      ...q,
      isValid: W,
      to: re.toHandle && W ? ui({ x: re.toHandle.x, y: re.toHandle.y }, ae) : F,
      toHandle: re.toHandle,
      toPosition: W && re.toHandle ? re.toHandle.position : nl[j.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null
    };
    W && J && q.toHandle && de.toHandle && q.toHandle.type === de.toHandle.type && q.toHandle.nodeId === de.toHandle.nodeId && q.toHandle.id === de.toHandle.id && q.to.x === de.to.x && q.to.y === de.to.y || (x(de), q = de);
  }
  function we(oe) {
    if (!("touches" in oe && oe.touches.length > 0)) {
      if (D) {
        (J || Y) && H && W && p?.(H);
        const { inProgress: ae, ...re } = q, de = {
          ...re,
          toPosition: q.toHandle ? q.toPosition : null
        };
        _?.(oe, de), i && S?.(oe, de);
      }
      g(), cancelAnimationFrame(X), K = !1, W = !1, H = null, Y = null, R.removeEventListener("mousemove", U), R.removeEventListener("mouseup", we), R.removeEventListener("touchmove", U), R.removeEventListener("touchend", we);
    }
  }
  R.addEventListener("mousemove", U), R.addEventListener("mouseup", we), R.addEventListener("touchmove", U), R.addEventListener("touchend", we);
}
function Du(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = Tu, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = qt(e), p = s.elementFromPoint(g, v), _ = p?.classList.contains(`${a}-flow__handle`) ? p : f, b = {
    handleDomNode: _,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (_) {
    const S = $u(void 0, _), x = _.getAttribute("data-nodeid"), k = _.getAttribute("data-handleid"), T = _.classList.contains("connectable"), E = _.classList.contains("connectableend");
    if (!x || !S)
      return b;
    const A = {
      source: h ? x : r,
      sourceHandle: h ? k : o,
      target: h ? r : x,
      targetHandle: h ? o : k
    };
    b.connection = A;
    const R = T && E && (n === Lr.Strict ? h && S === "source" || !h && S === "target" : x !== r || k !== o);
    b.isValid = R && c(A), b.toHandle = Pu(x, S, k, d, n, !0);
  }
  return b;
}
const vl = {
  onPointerDown: p0,
  isValid: Du
};
function m0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = It(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (x) => {
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = n(), T = x.sourceEvent.ctrlKey && er() ? 10 : 1, E = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, A = k[2] * Math.pow(2, E * T);
      t.scaleTo(A);
    };
    let p = [0, 0];
    const _ = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (p = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, b = (x) => {
      const k = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const T = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], E = [T[0] - p[0], T[1] - p[1]];
      p = T;
      const A = r() * Math.max(k[2], Math.log(k[2])) * (g ? -1 : 1), M = {
        x: k[0] - E[0] * A,
        y: k[1] - E[1] * A
      }, R = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: k[2]
      }, R, a);
    }, S = uu().on("start", _).on("zoom", h ? b : null).on("zoom.wheel", f ? v : null);
    o.call(S, {});
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
const Hi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ji = ({ x: e, y: t, zoom: n }) => Ai.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Au = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), y0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Gi = (e, t = 0, n = y0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Ou = (e) => {
  const t = e.ctrlKey && er() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function w0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (xr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const _ = Kt(d), b = Ou(d), S = h * Math.pow(2, b);
      r.scaleTo(n, S, _, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === ir.Vertical ? 0 : d.deltaX * f, v = o === ir.Horizontal ? 0 : d.deltaY * f;
    !er() && d.shiftKey && o !== ir.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = Hi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, p), e.panScrollTimeout = setTimeout(() => {
      c?.(d, p), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, p));
  };
}
function _0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = xr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function x0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Hi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function b0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Au(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Hi(i.transform));
  };
}
function C0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Au(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
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
function k0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (xr(h, `${c}-flow__node`) || xr(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || xr(h, a) && v || xr(h, l) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && p;
  };
}
function E0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: c }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), f = uu().clickDistance(!wn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = It(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: Vr(i.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const v = g.on("wheel.zoom"), p = g.on("dblclick.zoom");
  f.wheelDelta(Ou);
  function _(C, P) {
    return g ? new Promise((m) => {
      f?.interpolate(P?.interpolate === "linear" ? Qr : Yo).transform(Gi(g, P?.duration, P?.ease, () => m(!0)), C);
    }) : Promise.resolve(!1);
  }
  function b({ noWheelClassName: C, noPanClassName: P, onPaneContextMenu: m, userSelectionActive: $, panOnScroll: D, panOnDrag: L, panOnScrollMode: F, panOnScrollSpeed: K, preventScrolling: H, zoomOnPinch: W, zoomOnScroll: Y, zoomOnDoubleClick: ee, zoomActivationKeyPressed: j, lib: B, onTransformChange: Q, connectionInProgress: q }) {
    $ && !d.isZoomingOrPanning && S();
    const U = D && !j && !$ ? w0({
      zoomPanValues: d,
      noWheelClassName: C,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: F,
      panOnScrollSpeed: K,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : _0({
      noWheelClassName: C,
      preventScrolling: H,
      d3ZoomHandler: v
    });
    if (g.on("wheel.zoom", U, { passive: !1 }), !$) {
      const oe = x0({
        zoomPanValues: d,
        onDraggingChange: c,
        onPanZoomStart: a
      });
      f.on("start", oe);
      const ae = b0({
        zoomPanValues: d,
        panOnDrag: L,
        onPaneContextMenu: !!m,
        onPanZoom: s,
        onTransformChange: Q
      });
      f.on("zoom", ae);
      const re = C0({
        zoomPanValues: d,
        panOnDrag: L,
        panOnScroll: D,
        onPaneContextMenu: m,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      f.on("end", re);
    }
    const we = k0({
      zoomActivationKeyPressed: j,
      panOnDrag: L,
      zoomOnScroll: Y,
      panOnScroll: D,
      zoomOnDoubleClick: ee,
      zoomOnPinch: W,
      userSelectionActive: $,
      noPanClassName: P,
      noWheelClassName: C,
      lib: B,
      connectionInProgress: q
    });
    f.filter(we), ee ? g.on("dblclick.zoom", p) : g.on("dblclick.zoom", null);
  }
  function S() {
    f.on("zoom", null);
  }
  async function x(C, P, m) {
    const $ = ji(C), D = f?.constrain()($, P, m);
    return D && await _(D), new Promise((L) => L(D));
  }
  async function k(C, P) {
    const m = ji(C);
    return await _(m, P), new Promise(($) => $(m));
  }
  function T(C) {
    if (g) {
      const P = ji(C), m = g.property("__zoom");
      (m.k !== C.zoom || m.x !== C.x || m.y !== C.y) && f?.transform(g, P, null, { sync: !0 });
    }
  }
  function E() {
    const C = g ? cu(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: C.x, y: C.y, zoom: C.k };
  }
  function A(C, P) {
    return g ? new Promise((m) => {
      f?.interpolate(P?.interpolate === "linear" ? Qr : Yo).scaleTo(Gi(g, P?.duration, P?.ease, () => m(!0)), C);
    }) : Promise.resolve(!1);
  }
  function M(C, P) {
    return g ? new Promise((m) => {
      f?.interpolate(P?.interpolate === "linear" ? Qr : Yo).scaleBy(Gi(g, P?.duration, P?.ease, () => m(!0)), C);
    }) : Promise.resolve(!1);
  }
  function R(C) {
    f?.scaleExtent(C);
  }
  function X(C) {
    f?.translateExtent(C);
  }
  function J(C) {
    const P = !wn(C) || C < 0 ? 0 : C;
    f?.clickDistance(P);
  }
  return {
    update: b,
    destroy: S,
    setViewport: k,
    setViewportConstrained: x,
    getViewport: E,
    scaleTo: A,
    scaleBy: M,
    setScaleExtent: R,
    setTranslateExtent: X,
    syncViewport: T,
    setClickDistance: J
  };
}
var pl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(pl || (pl = {}));
var S0 = /* @__PURE__ */ te("<div><!></div>");
function Bn(e, t) {
  ce(t, !0);
  let n = w(t, "id", 7, null), r = w(t, "type", 7, "source"), o = w(t, "position", 23, () => me.Top), i = w(t, "style", 7), s = w(t, "class", 7), a = w(t, "isConnectable", 7), l = w(t, "isConnectableStart", 7, !0), c = w(t, "isConnectableEnd", 7, !0), d = w(t, "isValidConnection", 7), h = w(t, "onconnect", 7), f = w(t, "ondisconnect", 7), g = w(t, "children", 7), v = /* @__PURE__ */ Ie(t, [
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
  const p = zn("svelteflow__node_id"), _ = zn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ N(() => r() === "target"), S = /* @__PURE__ */ N(() => a() !== void 0 ? a() : _.value), x = tn(), k = /* @__PURE__ */ N(() => x.ariaLabelConfig), T = null;
  fc(() => {
    if (h() || f()) {
      x.edges;
      let H = x.connectionLookup.get(`${p}-${r()}${n() ? `-${n()}` : ""}`);
      if (T && !Ep(H, T)) {
        const W = H ?? /* @__PURE__ */ new Map();
        rl(T, W, f()), rl(W, T, h());
      }
      T = new Map(H);
    }
  });
  let E = /* @__PURE__ */ N(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: H, toHandle: W, isValid: Y } = x.connection, ee = H && H.nodeId === p && H.type === r() && H.id === n(), j = W && W.nodeId === p && W.type === r() && W.id === n(), B = x.connectionMode === Lr.Strict ? H?.type !== r() : p !== H?.nodeId || n() !== H?.id;
    return [
      !0,
      ee,
      j,
      B,
      j && Y
    ];
  }), A = /* @__PURE__ */ N(() => go(u(E), 5)), M = /* @__PURE__ */ N(() => u(A)[0]), R = /* @__PURE__ */ N(() => u(A)[1]), X = /* @__PURE__ */ N(() => u(A)[2]), J = /* @__PURE__ */ N(() => u(A)[3]), C = /* @__PURE__ */ N(() => u(A)[4]);
  function P(H) {
    const W = x.onbeforeconnect ? x.onbeforeconnect(H) : H;
    W && (x.addEdge(W), x.onconnect?.(H));
  }
  function m(H) {
    const W = xu(H);
    H.currentTarget && (W && H.button === 0 || !W) && vl.onPointerDown(H, {
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
      onConnect: P,
      onConnectStart: (Y, ee) => {
        x.onconnectstart?.(Y, {
          nodeId: ee.nodeId,
          handleId: ee.handleId,
          handleType: ee.handleType
        });
      },
      onConnectEnd: (Y, ee) => {
        x.onconnectend?.(Y, ee);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold,
      handleDomNode: H.currentTarget
    });
  }
  function $(H) {
    if (!p || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(H, { nodeId: p, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: p, type: r(), id: n() };
      return;
    }
    const W = wu(H.target), Y = d() ?? x.isValidConnection, { connectionMode: ee, clickConnectStartHandle: j, flowId: B, nodeLookup: Q } = x, { connection: q, isValid: ne } = vl.isValid(H, {
      handle: { nodeId: p, id: n(), type: r() },
      connectionMode: ee,
      fromNodeId: j.nodeId,
      fromHandleId: j.id ?? null,
      fromType: j.type,
      isValidConnection: Y,
      flowId: B,
      doc: W,
      lib: "svelte",
      nodeLookup: Q
    });
    ne && q && P(q);
    const U = structuredClone(Wl(x.connection));
    delete U.inProgress, U.toPosition = U.toHandle ? U.toHandle.position : null, x.onclickconnectend?.(H, U), x.clickConnectStartHandle = null;
  }
  var D = {
    get id() {
      return n();
    },
    set id(H = null) {
      n(H), y();
    },
    get type() {
      return r();
    },
    set type(H = "source") {
      r(H), y();
    },
    get position() {
      return o();
    },
    set position(H = me.Top) {
      o(H), y();
    },
    get style() {
      return i();
    },
    set style(H) {
      i(H), y();
    },
    get class() {
      return s();
    },
    set class(H) {
      s(H), y();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(H) {
      a(H), y();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(H = !0) {
      l(H), y();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd(H = !0) {
      c(H), y();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(H) {
      d(H), y();
    },
    get onconnect() {
      return h();
    },
    set onconnect(H) {
      h(H), y();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(H) {
      f(H), y();
    },
    get children() {
      return g();
    },
    set children(H) {
      g(H), y();
    }
  }, L = S0(), F = () => {
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
      onmousedown: m,
      ontouchstart: m,
      onclick: x.clickConnect ? $ : void 0,
      onkeypress: F,
      style: i(),
      role: "button",
      "aria-label": u(k)["handle.ariaLabel"],
      tabindex: "-1",
      ...v,
      [Mn]: H
    }),
    [
      () => ({
        valid: u(C),
        connectingto: u(X),
        connectingfrom: u(R),
        source: !u(b),
        target: u(b),
        connectablestart: l(),
        connectableend: c(),
        connectable: u(S),
        connectionindicator: u(S) && (!u(M) || u(J)) && (u(M) || x.clickConnectStartHandle ? c() : l())
      })
    ]
  );
  var K = z(L);
  return je(K, () => g() ?? ht), I(L), O(e, L), ue(D);
}
se(
  Bn,
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
var N0 = /* @__PURE__ */ te("<!> <!>", 1);
function da(e, t) {
  ce(t, !0);
  let n = w(t, "data", 7), r = w(t, "targetPosition", 23, () => me.Top), o = w(t, "sourcePosition", 23, () => me.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), y();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = me.Top) {
      r(d), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = me.Bottom) {
      o(d), y();
    }
  }, s = N0(), a = ie(s);
  Bn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = V(a), c = V(l);
  return Bn(c, {
    type: "source",
    get position() {
      return o();
    }
  }), Ce(() => Re(l, ` ${n()?.label ?? ""} `)), O(e, s), ue(i);
}
se(da, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var P0 = /* @__PURE__ */ te(" <!>", 1);
function Mu(e, t) {
  ce(t, !0);
  let n = w(t, "data", 23, () => ({ label: "Node" })), r = w(t, "sourcePosition", 23, () => me.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), y();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = me.Bottom) {
      r(l), y();
    }
  };
  pe();
  var i = P0(), s = ie(i), a = V(s);
  return Bn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ce(() => Re(s, `${n()?.label ?? ""} `)), O(e, i), ue(o);
}
se(Mu, { data: {}, sourcePosition: {} }, [], [], !0);
var $0 = /* @__PURE__ */ te(" <!>", 1);
function Hu(e, t) {
  ce(t, !0);
  let n = w(t, "data", 23, () => ({ label: "Node" })), r = w(t, "targetPosition", 23, () => me.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), y();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = me.Top) {
      r(l), y();
    }
  };
  pe();
  var i = $0(), s = ie(i), a = V(s);
  return Bn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ce(() => Re(s, `${n()?.label ?? ""} `)), O(e, i), ue(o);
}
se(Hu, { data: {}, targetPosition: {} }, [], [], !0);
function Lu(e, t) {
}
se(Lu, {}, [], [], !0);
function Ui(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Vu(e, t) {
  const n = /* @__PURE__ */ N(tn), r = /* @__PURE__ */ N(() => u(n).domNode);
  let o;
  return u(r) ? Ui(e, u(r), t) : o = Ks(() => {
    We(() => {
      Ui(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      Ui(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Iu() {
  let e = /* @__PURE__ */ $e(typeof window > "u");
  if (u(e)) {
    const t = Ks(() => {
      We(() => {
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
const ml = (e) => Np(e), T0 = (e) => fu(e);
function hn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const di = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var D0 = /* @__PURE__ */ te("<div><!></div>");
const A0 = {
  hash: "svelte-1r69ejc",
  code: ".transparent.svelte-1r69ejc {background:transparent;}"
};
function zu(e, t) {
  ce(t, !0), Ve(e, A0);
  let n = w(t, "x", 7, 0), r = w(t, "y", 7, 0), o = w(t, "width", 7), i = w(t, "height", 7), s = w(t, "selectEdgeOnClick", 7, !1), a = w(t, "transparent", 7, !1), l = w(t, "class", 7), c = w(t, "children", 7), d = /* @__PURE__ */ Ie(t, [
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
  const h = tn(), f = zn("svelteflow__edge_id");
  let g = /* @__PURE__ */ N(() => h.visible.edges.get(f)?.zIndex);
  var v = {
    get x() {
      return n();
    },
    set x(S = 0) {
      n(S), y();
    },
    get y() {
      return r();
    },
    set y(S = 0) {
      r(S), y();
    },
    get width() {
      return o();
    },
    set width(S) {
      o(S), y();
    },
    get height() {
      return i();
    },
    set height(S) {
      i(S), y();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(S = !1) {
      s(S), y();
    },
    get transparent() {
      return a();
    },
    set transparent(S = !1) {
      a(S), y();
    },
    get class() {
      return l();
    },
    set class(S) {
      l(S), y();
    },
    get children() {
      return c();
    },
    set children(S) {
      c(S), y();
    }
  }, p = D0(), _ = () => {
    s() && f && h.handleEdgeSelection(f);
  };
  nt(
    p,
    (S) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: _,
      ...d,
      [cn]: S
    }),
    [
      () => ({
        display: Iu().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: hn(o()),
        height: hn(i()),
        "z-index": u(g)
      })
    ],
    void 0,
    "svelte-1r69ejc"
  );
  var b = z(p);
  return je(b, () => c() ?? ht), I(p), ft(p, (S, x) => Vu?.(S, x), () => "edge-labels"), O(e, p), ue(v);
}
se(
  zu,
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
var O0 = /* @__PURE__ */ ve("<path></path>"), M0 = /* @__PURE__ */ ve('<path fill="none"></path><!><!>', 1);
function So(e, t) {
  ce(t, !0);
  let n = w(t, "id", 7), r = w(t, "path", 7), o = w(t, "label", 7), i = w(t, "labelX", 7), s = w(t, "labelY", 7), a = w(t, "labelStyle", 7), l = w(t, "markerStart", 7), c = w(t, "markerEnd", 7), d = w(t, "style", 7), h = w(t, "interactionWidth", 7, 20), f = w(t, "class", 7), g = /* @__PURE__ */ Ie(t, [
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
    set id(T) {
      n(T), y();
    },
    get path() {
      return r();
    },
    set path(T) {
      r(T), y();
    },
    get label() {
      return o();
    },
    set label(T) {
      o(T), y();
    },
    get labelX() {
      return i();
    },
    set labelX(T) {
      i(T), y();
    },
    get labelY() {
      return s();
    },
    set labelY(T) {
      s(T), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(T) {
      a(T), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(T) {
      l(T), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(T) {
      c(T), y();
    },
    get style() {
      return d();
    },
    set style(T) {
      d(T), y();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(T = 20) {
      h(T), y();
    },
    get class() {
      return f();
    },
    set class(T) {
      f(T), y();
    }
  }, p = M0(), _ = ie(p), b = V(_);
  {
    var S = (T) => {
      var E = O0();
      nt(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), O(T, E);
    };
    le(b, (T) => {
      h() > 0 && T(S);
    });
  }
  var x = V(b);
  {
    var k = (T) => {
      zu(T, {
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
        children: (E, A) => {
          pe();
          var M = ke();
          Ce(() => Re(M, o())), O(E, M);
        },
        $$slots: { default: !0 }
      });
    };
    le(x, (T) => {
      o() && T(k);
    });
  }
  return Ce(() => {
    xe(_, "id", n()), xe(_, "d", r()), Pt(_, 0, $n(["svelte-flow__edge-path", f()])), xe(_, "marker-start", l()), xe(_, "marker-end", c()), dt(_, d());
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
function fa(e, t) {
  ce(t, !0);
  let n = w(t, "id", 7), r = w(t, "interactionWidth", 7), o = w(t, "label", 7), i = w(t, "labelStyle", 7), s = w(t, "markerEnd", 7), a = w(t, "markerStart", 7), l = w(t, "pathOptions", 7), c = w(t, "sourcePosition", 7), d = w(t, "sourceX", 7), h = w(t, "sourceY", 7), f = w(t, "style", 7), g = w(t, "targetPosition", 7), v = w(t, "targetX", 7), p = w(t, "targetY", 7), _ = /* @__PURE__ */ N(() => bu({
    sourceX: d(),
    sourceY: h(),
    targetX: v(),
    targetY: p(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ N(() => go(u(_), 3)), S = /* @__PURE__ */ N(() => u(b)[0]), x = /* @__PURE__ */ N(() => u(b)[1]), k = /* @__PURE__ */ N(() => u(b)[2]);
  var T = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), y();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(E) {
      r(E), y();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), y();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(E) {
      i(E), y();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(E) {
      s(E), y();
    },
    get markerStart() {
      return a();
    },
    set markerStart(E) {
      a(E), y();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(E) {
      l(E), y();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(E) {
      c(E), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(E) {
      d(E), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(E) {
      h(E), y();
    },
    get style() {
      return f();
    },
    set style(E) {
      f(E), y();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(E) {
      g(E), y();
    },
    get targetX() {
      return v();
    },
    set targetX(E) {
      v(E), y();
    },
    get targetY() {
      return p();
    },
    set targetY(E) {
      p(E), y();
    }
  };
  return So(e, {
    get id() {
      return n();
    },
    get path() {
      return u(S);
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
  }), ue(T);
}
se(
  fa,
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
function Ru(e, t) {
  ce(t, !0);
  let n = w(t, "interactionWidth", 7), r = w(t, "label", 7), o = w(t, "labelStyle", 7), i = w(t, "style", 7), s = w(t, "markerEnd", 7), a = w(t, "markerStart", 7), l = w(t, "sourcePosition", 7), c = w(t, "sourceX", 7), d = w(t, "sourceY", 7), h = w(t, "targetPosition", 7), f = w(t, "targetX", 7), g = w(t, "targetY", 7), v = /* @__PURE__ */ N(() => aa({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: h()
  })), p = /* @__PURE__ */ N(() => go(u(v), 3)), _ = /* @__PURE__ */ N(() => u(p)[0]), b = /* @__PURE__ */ N(() => u(p)[1]), S = /* @__PURE__ */ N(() => u(p)[2]);
  var x = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(k) {
      n(k), y();
    },
    get label() {
      return r();
    },
    set label(k) {
      r(k), y();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(k) {
      o(k), y();
    },
    get style() {
      return i();
    },
    set style(k) {
      i(k), y();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), y();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), y();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(k) {
      l(k), y();
    },
    get sourceX() {
      return c();
    },
    set sourceX(k) {
      c(k), y();
    },
    get sourceY() {
      return d();
    },
    set sourceY(k) {
      d(k), y();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(k) {
      h(k), y();
    },
    get targetX() {
      return f();
    },
    set targetX(k) {
      f(k), y();
    },
    get targetY() {
      return g();
    },
    set targetY(k) {
      g(k), y();
    }
  };
  return So(e, {
    get path() {
      return u(_);
    },
    get labelX() {
      return u(b);
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
  }), ue(x);
}
se(
  Ru,
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
function Bu(e, t) {
  ce(t, !0);
  let n = w(t, "sourceX", 7), r = w(t, "sourceY", 7), o = w(t, "targetX", 7), i = w(t, "targetY", 7), s = w(t, "label", 7), a = w(t, "labelStyle", 7), l = w(t, "markerStart", 7), c = w(t, "markerEnd", 7), d = w(t, "interactionWidth", 7), h = w(t, "style", 7), f = /* @__PURE__ */ N(() => ku({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ N(() => go(u(f), 3)), v = /* @__PURE__ */ N(() => u(g)[0]), p = /* @__PURE__ */ N(() => u(g)[1]), _ = /* @__PURE__ */ N(() => u(g)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(S) {
      n(S), y();
    },
    get sourceY() {
      return r();
    },
    set sourceY(S) {
      r(S), y();
    },
    get targetX() {
      return o();
    },
    set targetX(S) {
      o(S), y();
    },
    get targetY() {
      return i();
    },
    set targetY(S) {
      i(S), y();
    },
    get label() {
      return s();
    },
    set label(S) {
      s(S), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(S) {
      a(S), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(S) {
      l(S), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(S) {
      c(S), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(S) {
      d(S), y();
    },
    get style() {
      return h();
    },
    set style(S) {
      h(S), y();
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
      return u(_);
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
  Bu,
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
function Fu(e, t) {
  ce(t, !0);
  let n = w(t, "sourceX", 7), r = w(t, "sourceY", 7), o = w(t, "sourcePosition", 7), i = w(t, "targetX", 7), s = w(t, "targetY", 7), a = w(t, "targetPosition", 7), l = w(t, "label", 7), c = w(t, "labelStyle", 7), d = w(t, "markerStart", 7), h = w(t, "markerEnd", 7), f = w(t, "interactionWidth", 7), g = w(t, "style", 7), v = /* @__PURE__ */ N(() => aa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), p = /* @__PURE__ */ N(() => go(u(v), 3)), _ = /* @__PURE__ */ N(() => u(p)[0]), b = /* @__PURE__ */ N(() => u(p)[1]), S = /* @__PURE__ */ N(() => u(p)[2]);
  var x = {
    get sourceX() {
      return n();
    },
    set sourceX(k) {
      n(k), y();
    },
    get sourceY() {
      return r();
    },
    set sourceY(k) {
      r(k), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(k) {
      o(k), y();
    },
    get targetX() {
      return i();
    },
    set targetX(k) {
      i(k), y();
    },
    get targetY() {
      return s();
    },
    set targetY(k) {
      s(k), y();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(k) {
      a(k), y();
    },
    get label() {
      return l();
    },
    set label(k) {
      l(k), y();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(k) {
      c(k), y();
    },
    get markerStart() {
      return d();
    },
    set markerStart(k) {
      d(k), y();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(k) {
      h(k), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(k) {
      f(k), y();
    },
    get style() {
      return g();
    },
    set style(k) {
      g(k), y();
    }
  };
  return So(e, {
    get path() {
      return u(_);
    },
    get labelX() {
      return u(b);
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
  Fu,
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
class H0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = ec(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const L0 = /\(.+\)/, V0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class I0 extends H0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = L0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => V0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => cs(o, "change", i)
    );
  }
}
function z0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ia(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function yl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const h = r.get(d.source), f = r.get(d.target);
    if (!h || !f)
      continue;
    if (a) {
      const { visibleNodes: p, transform: _, width: b, height: S } = e;
      if (Bp({
        sourceNode: h,
        targetNode: f,
        width: b,
        height: S,
        transform: _
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
    const v = qp({
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
      zIndex: Rp({
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
const Ku = {
  input: Mu,
  output: Hu,
  default: da,
  group: Lu
}, Zu = {
  straight: Bu,
  smoothstep: Ru,
  default: fa,
  step: Fu
};
function R0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Co(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return sa(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function B0(e) {
  class t {
    #t = /* @__PURE__ */ N(() => e.props.id ?? "1");
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
    #n = /* @__PURE__ */ $e(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      G(this.#n, r);
    }
    #r = /* @__PURE__ */ $e(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      G(this.#r, r);
    }
    #a = /* @__PURE__ */ $e(e.height ?? 0);
    get height() {
      return u(this.#a);
    }
    set height(r) {
      G(this.#a, r);
    }
    #s = /* @__PURE__ */ N(() => {
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
      return u(this.#s);
    }
    set nodesInitialized(r) {
      G(this.#s, r);
    }
    #i = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#i);
    }
    set viewportInitialized(r) {
      G(this.#i, r);
    }
    #o = /* @__PURE__ */ N(() => (a0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#o);
    }
    set _edges(r) {
      G(this.#o, r);
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
    #l = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#l);
    }
    set selectedNodes(r) {
      G(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #c = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#c);
    }
    set selectedEdges(r) {
      G(this.#c, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #u = /* @__PURE__ */ N(() => {
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
        const { viewport: v, width: p, height: _ } = this, b = [v.x, v.y, v.zoom];
        h = z0(s, b, p, _), f = yl({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: p,
          height: _
        });
      } else
        h = this.nodeLookup, f = yl(g);
      return { nodes: h, edges: f };
    });
    get visible() {
      return u(this.#u);
    }
    set visible(r) {
      G(this.#u, r);
    }
    #d = /* @__PURE__ */ N(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      G(this.#d, r);
    }
    #h = /* @__PURE__ */ N(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#h);
    }
    set nodesConnectable(r) {
      G(this.#h, r);
    }
    #f = /* @__PURE__ */ N(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#f);
    }
    set elementsSelectable(r) {
      G(this.#f, r);
    }
    #m = /* @__PURE__ */ N(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#m);
    }
    set nodesFocusable(r) {
      G(this.#m, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#y);
    }
    set edgesFocusable(r) {
      G(this.#y, r);
    }
    #w = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#w);
    }
    set disableKeyboardA11y(r) {
      G(this.#w, r);
    }
    #_ = /* @__PURE__ */ N(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#_);
    }
    set minZoom(r) {
      G(this.#_, r);
    }
    #g = /* @__PURE__ */ N(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#g);
    }
    set maxZoom(r) {
      G(this.#g, r);
    }
    #v = /* @__PURE__ */ N(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#v);
    }
    set nodeOrigin(r) {
      G(this.#v, r);
    }
    #p = /* @__PURE__ */ N(() => e.props.nodeExtent ?? xs);
    get nodeExtent() {
      return u(this.#p);
    }
    set nodeExtent(r) {
      G(this.#p, r);
    }
    #x = /* @__PURE__ */ N(() => e.props.translateExtent ?? xs);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      G(this.#x, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#b);
    }
    set defaultEdgeOptions(r) {
      G(this.#b, r);
    }
    #C = /* @__PURE__ */ N(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      G(this.#C, r);
    }
    #k = /* @__PURE__ */ N(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      G(this.#k, r);
    }
    #E = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#E);
    }
    set autoPanOnConnect(r) {
      G(this.#E, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      G(this.#S, r);
    }
    #N = /* @__PURE__ */ N(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#N);
    }
    set autoPanSpeed(r) {
      G(this.#N, r);
    }
    #P = /* @__PURE__ */ N(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#P);
    }
    set connectionDragThreshold(r) {
      G(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #$ = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
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
    #z = /* @__PURE__ */ N(() => e.props.selectionMode ?? li.Partial);
    get selectionMode() {
      return u(this.#z);
    }
    set selectionMode(r) {
      G(this.#z, r);
    }
    #R = /* @__PURE__ */ N(() => ({ ...Ku, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#R);
    }
    set nodeTypes(r) {
      G(this.#R, r);
    }
    #B = /* @__PURE__ */ N(() => ({ ...Zu, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#B);
    }
    set edgeTypes(r) {
      G(this.#B, r);
    }
    #F = /* @__PURE__ */ N(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#F);
    }
    set noPanClass(r) {
      G(this.#F, r);
    }
    #K = /* @__PURE__ */ N(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#K);
    }
    set noDragClass(r) {
      G(this.#K, r);
    }
    #Z = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      G(this.#Z, r);
    }
    #Y = /* @__PURE__ */ N(() => Vp(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#Y);
    }
    set ariaLabelConfig(r) {
      G(this.#Y, r);
    }
    #W = /* @__PURE__ */ $e(R0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
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
      bs
    );
    get _connection() {
      return u(this.#X);
    }
    set _connection(r) {
      G(this.#X, r);
    }
    #q = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: Eo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#q);
    }
    set connection(r) {
      G(this.#q, r);
    }
    #j = /* @__PURE__ */ N(() => e.props.connectionMode ?? Lr.Strict);
    get connectionMode() {
      return u(this.#j);
    }
    set connectionMode(r) {
      G(this.#j, r);
    }
    #G = /* @__PURE__ */ N(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#G);
    }
    set connectionRadius(r) {
      G(this.#G, r);
    }
    #U = /* @__PURE__ */ N(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#U);
    }
    set isValidConnection(r) {
      G(this.#U, r);
    }
    #J = /* @__PURE__ */ N(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#J);
    }
    set selectNodesOnDrag(r) {
      G(this.#J, r);
    }
    #Q = /* @__PURE__ */ N(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#Q);
    }
    set defaultMarkerColor(r) {
      G(this.#Q, r);
    }
    #ee = /* @__PURE__ */ N(() => jp(e.edges, {
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
    #te = /* @__PURE__ */ N(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      G(this.#te, r);
    }
    #ne = /* @__PURE__ */ N(() => e.props.onflowerror ?? Op);
    get onerror() {
      return u(this.#ne);
    }
    set onerror(r) {
      G(this.#ne, r);
    }
    #re = /* @__PURE__ */ N(() => e.props.ondelete);
    get ondelete() {
      return u(this.#re);
    }
    set ondelete(r) {
      G(this.#re, r);
    }
    #oe = /* @__PURE__ */ N(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#oe);
    }
    set onbeforedelete(r) {
      G(this.#oe, r);
    }
    #ie = /* @__PURE__ */ N(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#ie);
    }
    set onbeforeconnect(r) {
      G(this.#ie, r);
    }
    #se = /* @__PURE__ */ N(() => e.props.onconnect);
    get onconnect() {
      return u(this.#se);
    }
    set onconnect(r) {
      G(this.#se, r);
    }
    #ae = /* @__PURE__ */ N(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#ae);
    }
    set onconnectstart(r) {
      G(this.#ae, r);
    }
    #le = /* @__PURE__ */ N(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#le);
    }
    set onconnectend(r) {
      G(this.#le, r);
    }
    #ce = /* @__PURE__ */ N(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ce);
    }
    set onbeforereconnect(r) {
      G(this.#ce, r);
    }
    #ue = /* @__PURE__ */ N(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      G(this.#ue, r);
    }
    #de = /* @__PURE__ */ N(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#de);
    }
    set onreconnectstart(r) {
      G(this.#de, r);
    }
    #fe = /* @__PURE__ */ N(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#fe);
    }
    set onreconnectend(r) {
      G(this.#fe, r);
    }
    #he = /* @__PURE__ */ N(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#he);
    }
    set clickConnect(r) {
      G(this.#he, r);
    }
    #ge = /* @__PURE__ */ N(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      G(this.#ge, r);
    }
    #ve = /* @__PURE__ */ N(() => e.props.onclickconnectend);
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
    #me = /* @__PURE__ */ N(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#me);
    }
    set onselectiondrag(r) {
      G(this.#me, r);
    }
    #ye = /* @__PURE__ */ N(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#ye);
    }
    set onselectiondragstart(r) {
      G(this.#ye, r);
    }
    #we = /* @__PURE__ */ N(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      G(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Dp(
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
    #_e = /* @__PURE__ */ N(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#_e);
    }
    set colorMode(r) {
      G(this.#_e, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = bs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function tn() {
  const e = zn(fi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const fi = Symbol();
function Yu(e) {
  const t = B0(e);
  function n(C) {
    t.nodeTypes = {
      ...Ku,
      ...C
    };
  }
  function r(C) {
    t.edgeTypes = {
      ...Zu,
      ...C
    };
  }
  function o(C) {
    t.edges = Zp(C, t.edges);
  }
  const i = (C, P = !1) => {
    t.nodes = t.nodes.map((m) => {
      const $ = C.get(m.id);
      return $ ? { ...m, position: $.position, dragging: P } : m;
    });
  };
  function s(C) {
    const { changes: P, updatedInternals: m } = i0(C, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!m)
      return;
    Qp(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const $ = /* @__PURE__ */ new Map();
    for (const D of P) {
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
      $.set(D.id, F);
    }
    t.nodes = t.nodes.map((D) => $.get(D.id) ?? D);
  }
  function a(C) {
    const P = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = C, t.fitViewResolver = P, t.nodes = [...t.nodes], P.promise;
  }
  async function l(C, P, m) {
    const $ = typeof m?.zoom < "u" ? m.zoom : t.maxZoom, D = t.panZoom;
    return D ? (await D.setViewport({
      x: t.width / 2 - C * $,
      y: t.height / 2 - P * $,
      zoom: $
    }, { duration: m?.duration, ease: m?.ease, interpolate: m?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(C, P) {
    const m = t.panZoom;
    return m ? m.scaleBy(C, P) : Promise.resolve(!1);
  }
  function d(C) {
    return c(1.2, C);
  }
  function h(C) {
    return c(1 / 1.2, C);
  }
  function f(C) {
    const P = t.panZoom;
    P && (P.setScaleExtent([C, t.maxZoom]), t.minZoom = C);
  }
  function g(C) {
    const P = t.panZoom;
    P && (P.setScaleExtent([t.minZoom, C]), t.maxZoom = C);
  }
  function v(C) {
    const P = t.panZoom;
    P && (P.setTranslateExtent(C), t.translateExtent = C);
  }
  function p(C) {
    t.panZoom?.setClickDistance(C);
  }
  function _(C, P = null) {
    let m = !1;
    const $ = C.map((D) => (P ? P.has(D.id) : !0) && D.selected ? (m = !0, { ...D, selected: !1 }) : D);
    return [m, $];
  }
  function b(C) {
    const P = C?.nodes ? new Set(C.nodes.map((K) => K.id)) : null, [m, $] = _(t.nodes, P);
    m && (t.nodes = $);
    const D = C?.edges ? new Set(C.edges.map((K) => K.id)) : null, [L, F] = _(t.edges, D);
    L && (t.edges = F);
  }
  function S(C) {
    const P = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((m) => {
      const $ = C.includes(m.id), D = P && m.selected || $;
      return !!m.selected !== D ? { ...m, selected: D } : m;
    }), P || b({ nodes: [] });
  }
  function x(C) {
    const P = t.multiselectionKeyPressed;
    t.edges = t.edges.map((m) => {
      const $ = C.includes(m.id), D = P && m.selected || $;
      return !!m.selected !== D ? { ...m, selected: D } : m;
    }), P || b({ edges: [] });
  }
  function k(C, P, m) {
    const $ = t.nodeLookup.get(C);
    if (!$) {
      console.warn("012", io.error012(C));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, $.selected ? (P || $.selected && t.multiselectionKeyPressed) && (b({ nodes: [$], edges: [] }), requestAnimationFrame(() => m?.blur())) : S([C]);
  }
  function T(C) {
    const P = t.edgeLookup.get(C);
    if (!P) {
      console.warn("012", io.error012(C));
      return;
    }
    (P.selectable || t.elementsSelectable && typeof P.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, P.selected ? P.selected && t.multiselectionKeyPressed && b({ nodes: [], edges: [P] }) : x([C]));
  }
  function E(C, P) {
    const { nodeExtent: m, snapGrid: $, nodeOrigin: D, nodeLookup: L, nodesDraggable: F, onerror: K } = t, H = /* @__PURE__ */ new Map(), W = $?.[0] ?? 5, Y = $?.[1] ?? 5, ee = C.x * W * P, j = C.y * Y * P;
    for (const B of L.values()) {
      if (!(B.selected && (B.draggable || F && typeof B.draggable > "u")))
        continue;
      let q = {
        x: B.internals.positionAbsolute.x + ee,
        y: B.internals.positionAbsolute.y + j
      };
      $ && (q = ko(q, $));
      const { position: ne, positionAbsolute: U } = hu({
        nodeId: B.id,
        nextPosition: q,
        nodeLookup: L,
        nodeExtent: m,
        nodeOrigin: D,
        onError: K
      });
      B.position = ne, B.internals.positionAbsolute = U, H.set(B.id, B);
    }
    i(H);
  }
  function A(C) {
    return s0({
      delta: C,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const M = (C) => {
    t._connection = { ...C };
  };
  function R() {
    t._connection = bs;
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
    addSelectedNodes: S,
    addSelectedEdges: x,
    handleNodeSelection: k,
    handleEdgeSelection: T,
    moveSelectedNodes: E,
    panBy: A,
    updateConnection: M,
    cancelConnection: R,
    reset: X
  });
}
function F0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: c, setPanZoomInstance: d, onDraggingChange: h, onTransformChange: f } = t, g = E0({
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
var K0 = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Wu(e, t) {
  ce(t, !0);
  let n = w(t, "store", 15), r = w(t, "panOnScrollMode", 7), o = w(t, "preventScrolling", 7), i = w(t, "zoomOnScroll", 7), s = w(t, "zoomOnDoubleClick", 7), a = w(t, "zoomOnPinch", 7), l = w(t, "panOnDrag", 7), c = w(t, "panOnScroll", 7), d = w(t, "panOnScrollSpeed", 7), h = w(t, "paneClickDistance", 7), f = w(t, "onmovestart", 7), g = w(t, "onmove", 7), v = w(t, "onmoveend", 7), p = w(t, "oninit", 7), _ = w(t, "children", 7), b = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), S = /* @__PURE__ */ N(() => n().panActivationKeyPressed || c());
  const { viewport: x } = n();
  let k = !1;
  We(() => {
    !k && n().viewportInitialized && (p()?.(), k = !0);
  });
  var T = {
    get store() {
      return n();
    },
    set store(M) {
      n(M), y();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(M) {
      r(M), y();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(M) {
      o(M), y();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(M) {
      i(M), y();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(M) {
      s(M), y();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(M) {
      a(M), y();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(M) {
      l(M), y();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(M) {
      c(M), y();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(M) {
      d(M), y();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(M) {
      h(M), y();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(M) {
      f(M), y();
    },
    get onmove() {
      return g();
    },
    set onmove(M) {
      g(M), y();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(M) {
      v(M), y();
    },
    get oninit() {
      return p();
    },
    set oninit(M) {
      p(M), y();
    },
    get children() {
      return _();
    },
    set children(M) {
      _(M), y();
    }
  }, E = K0(), A = z(E);
  return je(A, _), I(E), ft(E, (M, R) => F0?.(M, R), () => ({
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
    panOnScroll: u(S),
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
  })), O(e, E), ue(T);
}
se(
  Wu,
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
function wl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function _l(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function xl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Z0 = /* @__PURE__ */ te("<div><!></div>");
function Xu(e, t) {
  ce(t, !0);
  let n = w(t, "store", 15), r = w(t, "panOnDrag", 7, !0), o = w(t, "selectionOnDrag", 7), i = w(t, "onpaneclick", 7), s = w(t, "onpanecontextmenu", 7), a = w(t, "onselectionstart", 7), l = w(t, "onselectionend", 7), c = w(t, "children", 7), d, h = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), p = /* @__PURE__ */ N(() => n().selectionKeyPressed || n().selectionRect || o() && u(v) !== !0), _ = /* @__PURE__ */ N(() => n().elementsSelectable && (u(p) || n().selectionRectMode === "user")), b = !1;
  function S(m) {
    if (b || n().connection.inProgress) {
      b = !1;
      return;
    }
    i()?.({ event: m }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(m) {
    h = d?.getBoundingClientRect();
    const $ = m.target !== d && !!m.target.closest(".nokey"), D = o() && d === m.target || !o() || n().selectionKeyPressed;
    if (!n().elementsSelectable || !u(p) || m.button !== 0 || !h || $ || !D || !m.isPrimary)
      return;
    m.stopPropagation(), m.preventDefault(), m.target?.setPointerCapture?.(m.pointerId);
    const { x: L, y: F } = qt(m, h);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: L, startY: F, x: L, y: F }, !0), a()?.(m);
  }
  function k(m) {
    if (!u(p) || !h || !n().selectionRect)
      return;
    b = !0;
    const $ = qt(m, h), { startX: D = 0, startY: L = 0 } = n().selectionRect, F = {
      ...n().selectionRect,
      x: $.x < D ? $.x : D,
      y: $.y < L ? $.y : L,
      width: Math.abs($.x - D),
      height: Math.abs($.y - L)
    }, K = f, H = g;
    f = new Set(ia(
      n().nodeLookup,
      F,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === li.Partial,
      !0
    ).map((Y) => Y.id));
    const W = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const Y of f) {
      const ee = n().connectionLookup.get(Y);
      if (ee)
        for (const { edgeId: j } of ee.values()) {
          const B = n().edgeLookup.get(j);
          B && (B.selectable ?? W) && g.add(j);
        }
    }
    xl(K, f) || n(n().nodes = n().nodes.map(_l(f)), !0), xl(H, g) || n(n().edges = n().edges.map(_l(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = F, !0);
  }
  function T(m) {
    m.button === 0 && (m.target?.releasePointerCapture?.(m.pointerId), !u(p) && n().selectionRectMode === "user" && m.target === d && S?.(m), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (b = !1), l()?.(m));
  }
  const E = (m) => {
    if (Array.isArray(u(v)) && u(v).includes(2)) {
      m.preventDefault();
      return;
    }
    s()?.({ event: m });
  }, A = (m) => {
    (o() && d === m.target || !o() || n().selectionKeyPressed) && m.stopPropagation();
  };
  var M = {
    get store() {
      return n();
    },
    set store(m) {
      n(m), y();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(m = !0) {
      r(m), y();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(m) {
      o(m), y();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(m) {
      i(m), y();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(m) {
      s(m), y();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(m) {
      a(m), y();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(m) {
      l(m), y();
    },
    get children() {
      return c();
    },
    set children(m) {
      c(m), y();
    }
  }, R = Z0();
  let X;
  var J = /* @__PURE__ */ N(() => u(_) ? void 0 : wl(S, d));
  R.__click = function(...m) {
    u(J)?.apply(this, m);
  }, R.__pointermove = function(...m) {
    (u(_) ? k : void 0)?.apply(this, m);
  }, R.__pointerup = function(...m) {
    (u(_) ? T : void 0)?.apply(this, m);
  };
  var C = /* @__PURE__ */ N(() => wl(E, d));
  R.__contextmenu = function(...m) {
    u(C)?.apply(this, m);
  };
  var P = z(R);
  return je(P, c), I(R), $t(R, (m) => d = m, () => d), Ce((m) => X = Pt(R, 1, "svelte-flow__pane svelte-flow__container", null, X, m), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(p)
    })
  ]), ei(
    "pointerdown",
    R,
    function(...m) {
      (u(_) ? x : void 0)?.apply(this, m);
    },
    !0
  ), ei(
    "click",
    R,
    function(...m) {
      (u(_) ? A : void 0)?.apply(this, m);
    },
    !0
  ), O(e, R), ue(M);
}
Xn(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  Xu,
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
var Y0 = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function qu(e, t) {
  ce(t, !0);
  let n = w(t, "store", 15), r = w(t, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), y();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), y();
    }
  }, i = Y0();
  let s;
  var a = z(i);
  return je(a, r), I(i), Ce((l) => s = dt(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), O(e, i), ue(o);
}
se(qu, { store: {}, children: {} }, [], [], !0);
function ju(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = d0({
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
var W0 = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1cazx9o"> </div>'), X0 = /* @__PURE__ */ te('<div class="a11y-hidden svelte-1cazx9o"> </div> <div class="a11y-hidden svelte-1cazx9o"> </div> <!>', 1);
const q0 = {
  hash: "svelte-1cazx9o",
  code: ".a11y-hidden.svelte-1cazx9o {display:none;}.a11y-live-msg.svelte-1cazx9o {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Gu(e, t) {
  ce(t, !0), Ve(e, q0);
  let n = w(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), y();
    }
  }, o = X0(), i = ie(o), s = z(i, !0);
  I(i);
  var a = V(i, 2), l = z(a, !0);
  I(a);
  var c = V(a, 2);
  {
    var d = (h) => {
      var f = W0(), g = z(f, !0);
      I(f), Ce(() => {
        xe(f, "id", `${j0}-${n().flowId}`), Re(g, n().ariaLiveMessage);
      }), O(h, f);
    };
    le(c, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ce(() => {
    xe(i, "id", `${Uu}-${n().flowId}`), Re(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), xe(a, "id", `${Ju}-${n().flowId}`), Re(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(e, o), ue(r);
}
se(Gu, { store: {} }, [], [], !0);
const Uu = "svelte-flow__node-desc", Ju = "svelte-flow__edge-desc", j0 = "svelte-flow__aria-live";
var G0 = /* @__PURE__ */ te("<div><!></div>");
function Qu(e, t) {
  ce(t, !0);
  let n = w(t, "store", 15), r = w(t, "node", 7), o = w(t, "resizeObserver", 7), i = w(t, "nodeClickDistance", 7), s = w(t, "onnodeclick", 7), a = w(t, "onnodedrag", 7), l = w(t, "onnodedragstart", 7), c = w(t, "onnodedragstop", 7), d = w(t, "onnodepointerenter", 7), h = w(t, "onnodepointerleave", 7), f = w(t, "onnodepointermove", 7), g = w(t, "onnodecontextmenu", 7), v = /* @__PURE__ */ N(() => vt(r().data, () => ({}), !0)), p = /* @__PURE__ */ N(() => vt(r().selected, !1)), _ = /* @__PURE__ */ N(() => r().draggable), b = /* @__PURE__ */ N(() => r().selectable), S = /* @__PURE__ */ N(() => vt(r().deletable, !0)), x = /* @__PURE__ */ N(() => r().connectable), k = /* @__PURE__ */ N(() => r().focusable), T = /* @__PURE__ */ N(() => vt(r().hidden, !1)), E = /* @__PURE__ */ N(() => vt(r().dragging, !1)), A = /* @__PURE__ */ N(() => vt(r().style, "")), M = /* @__PURE__ */ N(() => r().class), R = /* @__PURE__ */ N(() => vt(r().type, "default")), X = /* @__PURE__ */ N(() => r().parentId), J = /* @__PURE__ */ N(() => r().sourcePosition), C = /* @__PURE__ */ N(() => r().targetPosition), P = /* @__PURE__ */ N(() => vt(r().measured, () => ({ width: 0, height: 0 }), !0).width), m = /* @__PURE__ */ N(() => vt(r().measured, () => ({ width: 0, height: 0 }), !0).height), $ = /* @__PURE__ */ N(() => r().initialWidth), D = /* @__PURE__ */ N(() => r().initialHeight), L = /* @__PURE__ */ N(() => r().width), F = /* @__PURE__ */ N(() => r().height), K = /* @__PURE__ */ N(() => r().dragHandle), H = /* @__PURE__ */ N(() => vt(r().internals.z, 0)), W = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), Y = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), ee = /* @__PURE__ */ N(() => r().internals.userNode), { id: j } = r(), B = /* @__PURE__ */ N(() => u(_) ?? n().nodesDraggable), Q = /* @__PURE__ */ N(() => u(b) ?? n().elementsSelectable), q = /* @__PURE__ */ N(() => u(x) ?? n().nodesConnectable), ne = /* @__PURE__ */ N(() => mu(r())), U = /* @__PURE__ */ N(() => !!r().internals.handleBounds), we = /* @__PURE__ */ N(() => u(ne) && u(U)), oe = /* @__PURE__ */ N(() => u(k) ?? n().nodesFocusable);
  function ae(he) {
    return n().parentLookup.has(he);
  }
  let re = /* @__PURE__ */ N(() => ae(j)), de = /* @__PURE__ */ $e(null), ge = null, _e = u(R), fe = u(J), be = u(C), Pe = /* @__PURE__ */ N(() => n().nodeTypes[u(R)] ?? da), Z = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  Tr("svelteflow__node_connectable", {
    get value() {
      return u(q);
    }
  }), Tr("svelteflow__node_id", j);
  let De = /* @__PURE__ */ N(() => {
    const he = u(P) === void 0 ? u(L) ?? u($) : u(L), Ze = u(m) === void 0 ? u(F) ?? u(D) : u(F);
    if (!(he === void 0 && Ze === void 0 && u(A) === void 0))
      return `${u(A)};${he ? `width:${hn(he)};` : ""}${Ze ? `height:${hn(Ze)};` : ""}`;
  });
  We(() => {
    (u(R) !== _e || u(J) !== fe || u(C) !== be) && u(de) !== null && requestAnimationFrame(() => {
      u(de) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[j, { id: j, nodeElement: u(de), force: !0 }]]));
    }), _e = u(R), fe = u(J), be = u(C);
  }), We(() => {
    o() && (!u(we) || u(de) !== ge) && (ge && o().unobserve(ge), u(de) && o().observe(u(de)), ge = u(de));
  }), wo(() => {
    ge && o()?.unobserve(ge);
  });
  function He(he) {
    u(Q) && (!n().selectNodesOnDrag || !u(B) || n().nodeDragThreshold > 0) && n().handleNodeSelection(j), s()?.({ node: u(ee), event: he });
  }
  function Le(he) {
    if (!(_u(he) || n().disableKeyboardA11y))
      if (du.includes(he.key) && u(Q)) {
        const Ze = he.key === "Escape";
        n().handleNodeSelection(j, Ze, u(de));
      } else u(B) && r().selected && Object.prototype.hasOwnProperty.call(di, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = u(Z)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(di[he.key], he.shiftKey ? 4 : 1));
  }
  const it = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(de)?.matches(":focus-visible"))
      return;
    const { width: he, height: Ze, viewport: at } = n();
    ia(/* @__PURE__ */ new Map([[j, r()]]), { x: 0, y: 0, width: he, height: Ze }, [at.x, at.y, at.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: at.zoom });
  };
  var st = {
    get store() {
      return n();
    },
    set store(he) {
      n(he), y();
    },
    get node() {
      return r();
    },
    set node(he) {
      r(he), y();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(he) {
      o(he), y();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(he) {
      i(he), y();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(he) {
      s(he), y();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(he) {
      a(he), y();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(he) {
      l(he), y();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(he) {
      c(he), y();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(he) {
      d(he), y();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(he) {
      h(he), y();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(he) {
      f(he), y();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(he) {
      g(he), y();
    }
  }, Lt = Se(), ze = ie(Lt);
  {
    var Ue = (he) => {
      var Ze = G0();
      nt(
        Ze,
        (et, Tt) => ({
          "data-id": j,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${u(R)}`,
            u(M)
          ],
          style: u(De),
          onclick: He,
          onpointerenter: d() ? (Xe) => d()({ node: u(ee), event: Xe }) : void 0,
          onpointerleave: h() ? (Xe) => h()({ node: u(ee), event: Xe }) : void 0,
          onpointermove: f() ? (Xe) => f()({ node: u(ee), event: Xe }) : void 0,
          oncontextmenu: g() ? (Xe) => g()({ node: u(ee), event: Xe }) : void 0,
          onkeydown: u(oe) ? Le : void 0,
          onfocus: u(oe) ? it : void 0,
          tabIndex: u(oe) ? 0 : void 0,
          role: r().ariaRole ?? (u(oe) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Uu}-${n().flowId}`,
          ...r().domAttributes,
          [Mn]: et,
          [cn]: Tt
        }),
        [
          () => ({
            dragging: u(E),
            selected: u(p),
            draggable: u(B),
            connectable: u(q),
            selectable: u(Q),
            nopan: u(B),
            parent: u(re)
          }),
          () => ({
            "z-index": u(H),
            transform: `translate(${u(W) ?? ""}px, ${u(Y) ?? ""}px)`,
            visibility: u(ne) ? "visible" : "hidden"
          })
        ]
      );
      var at = z(Ze);
      Si(at, () => u(Pe), (et, Tt) => {
        Tt(et, {
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
            return u(Q);
          },
          get deletable() {
            return u(S);
          },
          get sourcePosition() {
            return u(J);
          },
          get targetPosition() {
            return u(C);
          },
          get zIndex() {
            return u(H);
          },
          get dragging() {
            return u(E);
          },
          get draggable() {
            return u(B);
          },
          get dragHandle() {
            return u(K);
          },
          get parentId() {
            return u(X);
          },
          get type() {
            return u(R);
          },
          get isConnectable() {
            return u(q);
          },
          get positionAbsoluteX() {
            return u(W);
          },
          get positionAbsoluteY() {
            return u(Y);
          },
          get width() {
            return u(L);
          },
          get height() {
            return u(F);
          }
        });
      }), I(Ze), ft(Ze, (et, Tt) => ju?.(et, Tt), () => ({
        nodeId: j,
        isSelectable: u(Q),
        disabled: !u(B),
        handleSelector: u(K),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (et, Tt, Xe, bt) => {
          a()?.({ event: et, targetNode: Xe, nodes: bt });
        },
        onDragStart: (et, Tt, Xe, bt) => {
          l()?.({ event: et, targetNode: Xe, nodes: bt });
        },
        onDragStop: (et, Tt, Xe, bt) => {
          c()?.({ event: et, targetNode: Xe, nodes: bt });
        },
        store: n()
      })), $t(Ze, (et) => G(de, et), () => u(de)), O(he, Ze);
    };
    le(ze, (he) => {
      u(T) || he(Ue);
    });
  }
  return O(e, Lt), ue(st);
}
se(
  Qu,
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
var U0 = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function ed(e, t) {
  ce(t, !0);
  let n = w(t, "store", 15), r = w(t, "nodeClickDistance", 7), o = w(t, "onnodeclick", 7), i = w(t, "onnodecontextmenu", 7), s = w(t, "onnodepointerenter", 7), a = w(t, "onnodepointermove", 7), l = w(t, "onnodepointerleave", 7), c = w(t, "onnodedrag", 7), d = w(t, "onnodedragstart", 7), h = w(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((p) => {
    const _ = /* @__PURE__ */ new Map();
    p.forEach((b) => {
      const S = b.target.getAttribute("data-id");
      _.set(S, { id: S, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(_);
  });
  wo(() => {
    f?.disconnect();
  });
  var g = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), y();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(p) {
      r(p), y();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(p) {
      o(p), y();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(p) {
      i(p), y();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(p) {
      s(p), y();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(p) {
      a(p), y();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(p) {
      l(p), y();
    },
    get onnodedrag() {
      return c();
    },
    set onnodedrag(p) {
      c(p), y();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(p) {
      d(p), y();
    },
    get onnodedragstop() {
      return h();
    },
    set onnodedragstop(p) {
      h(p), y();
    }
  }, v = U0();
  return gt(v, 21, () => n().visible.nodes.values(), (p) => p.id, (p, _) => {
    Qu(p, {
      get node() {
        return u(_);
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
  ed,
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
var J0 = /* @__PURE__ */ ve('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function td(e, t) {
  ce(t, !0);
  const n = w(t, "edge", 7), r = w(t, "store", 15), o = w(t, "onedgeclick", 7), i = w(t, "onedgecontextmenu", 7), s = w(t, "onedgepointerenter", 7), a = w(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), c = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), h = /* @__PURE__ */ N(() => n().sourceY), f = /* @__PURE__ */ N(() => n().targetX), g = /* @__PURE__ */ N(() => n().targetY), v = /* @__PURE__ */ N(() => n().sourcePosition), p = /* @__PURE__ */ N(() => n().targetPosition), _ = /* @__PURE__ */ N(() => vt(n().animated, !1)), b = /* @__PURE__ */ N(() => vt(n().selected, !1)), S = /* @__PURE__ */ N(() => n().label), x = /* @__PURE__ */ N(() => n().labelStyle), k = /* @__PURE__ */ N(() => vt(n().data, () => ({}), !0)), T = /* @__PURE__ */ N(() => n().style), E = /* @__PURE__ */ N(() => n().interactionWidth), A = /* @__PURE__ */ N(() => vt(n().type, "default")), M = /* @__PURE__ */ N(() => n().sourceHandle), R = /* @__PURE__ */ N(() => n().targetHandle), X = /* @__PURE__ */ N(() => n().markerStart), J = /* @__PURE__ */ N(() => n().markerEnd), C = /* @__PURE__ */ N(() => n().selectable), P = /* @__PURE__ */ N(() => n().focusable), m = /* @__PURE__ */ N(() => vt(n().deletable, !0)), $ = /* @__PURE__ */ N(() => n().hidden), D = /* @__PURE__ */ N(() => n().zIndex), L = /* @__PURE__ */ N(() => n().class), F = /* @__PURE__ */ N(() => n().ariaLabel), K = null;
  const { id: H } = n();
  Tr("svelteflow__edge_id", H);
  let W = /* @__PURE__ */ N(() => u(C) ?? r().elementsSelectable), Y = /* @__PURE__ */ N(() => u(P) ?? r().edgesFocusable), ee = /* @__PURE__ */ N(() => r().edgeTypes[u(A)] ?? fa), j = /* @__PURE__ */ N(() => u(X) ? `url('#${ks(u(X), r().flowId)}')` : void 0), B = /* @__PURE__ */ N(() => u(J) ? `url('#${ks(u(J), r().flowId)}')` : void 0);
  function Q(re) {
    const de = r().edgeLookup.get(H);
    de && (u(W) && r().handleEdgeSelection(H), o()?.({ event: re, edge: de }));
  }
  function q(re, de) {
    const ge = r().edgeLookup.get(H);
    ge && de({ event: re, edge: ge });
  }
  function ne(re) {
    if (!r().disableKeyboardA11y && du.includes(re.key) && u(W)) {
      const { unselectNodesAndEdges: de, addSelectedEdges: ge } = r();
      re.key === "Escape" ? (K?.blur(), de({ edges: [n()] })) : ge([H]);
    }
  }
  var U = {
    get edge() {
      return n();
    },
    set edge(re) {
      n(re), y();
    },
    get store() {
      return r();
    },
    set store(re) {
      r(re), y();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(re) {
      o(re), y();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(re) {
      i(re), y();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(re) {
      s(re), y();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(re) {
      a(re), y();
    }
  }, we = Se(), oe = ie(we);
  {
    var ae = (re) => {
      var de = J0();
      let ge;
      var _e = z(de);
      nt(
        _e,
        (be) => ({
          class: ["svelte-flow__edge", u(L)],
          "data-id": H,
          onclick: Q,
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
          "aria-describedby": u(Y) ? `${Ju}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (u(Y) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: u(Y) ? ne : void 0,
          tabindex: u(Y) ? 0 : void 0,
          ...n().domAttributes,
          [Mn]: be
        }),
        [
          () => ({
            animated: u(_),
            selected: u(b),
            selectable: u(W)
          })
        ]
      );
      var fe = z(_e);
      Si(fe, () => u(ee), (be, Pe) => {
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
            return u(_);
          },
          get selected() {
            return u(b);
          },
          get label() {
            return u(S);
          },
          get labelStyle() {
            return u(x);
          },
          get data() {
            return u(k);
          },
          get style() {
            return u(T);
          },
          get interactionWidth() {
            return u(E);
          },
          get selectable() {
            return u(W);
          },
          get deletable() {
            return u(m);
          },
          get type() {
            return u(A);
          },
          get sourceHandleId() {
            return u(M);
          },
          get targetHandleId() {
            return u(R);
          },
          get markerStart() {
            return u(j);
          },
          get markerEnd() {
            return u(B);
          }
        });
      }), I(_e), $t(_e, (be) => K = be, () => K), I(de), Ce((be) => ge = dt(de, "", ge, be), [() => ({ "z-index": u(D) })]), O(re, de);
    };
    le(oe, (re) => {
      u($) || re(ae);
    });
  }
  return O(e, we), ue(U);
}
se(
  td,
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
Bf();
var Q0 = /* @__PURE__ */ ve("<defs></defs>");
function nd(e, t) {
  ce(t, !1);
  const n = tn();
  Mc();
  var r = Q0();
  gt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    rd(o, Be(() => u(i)));
  }), I(r), O(e, r), ue();
}
se(nd, {}, [], [], !0);
var em = /* @__PURE__ */ ve('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), tm = /* @__PURE__ */ ve('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), nm = /* @__PURE__ */ ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function rd(e, t) {
  ce(t, !0);
  let n = w(t, "id", 7), r = w(t, "type", 7), o = w(t, "width", 7, 12.5), i = w(t, "height", 7, 12.5), s = w(t, "markerUnits", 7, "strokeWidth"), a = w(t, "orient", 7, "auto-start-reverse"), l = w(t, "color", 7, "none"), c = w(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(p) {
      n(p), y();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), y();
    },
    get width() {
      return o();
    },
    set width(p = 12.5) {
      o(p), y();
    },
    get height() {
      return i();
    },
    set height(p = 12.5) {
      i(p), y();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(p = "strokeWidth") {
      s(p), y();
    },
    get orient() {
      return a();
    },
    set orient(p = "auto-start-reverse") {
      a(p), y();
    },
    get color() {
      return l();
    },
    set color(p = "none") {
      l(p), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(p) {
      c(p), y();
    }
  }, h = nm(), f = z(h);
  {
    var g = (p) => {
      var _ = em();
      let b;
      Ce(
        (S) => {
          xe(_, "stroke-width", c()), b = dt(_, "", b, S);
        },
        [() => ({ stroke: l() })]
      ), O(p, _);
    }, v = (p) => {
      var _ = Se(), b = ie(_);
      {
        var S = (x) => {
          var k = tm();
          let T;
          Ce(
            (E) => {
              xe(k, "stroke-width", c()), T = dt(k, "", T, E);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), O(x, k);
        };
        le(
          b,
          (x) => {
            r() === so.ArrowClosed && x(S);
          },
          !0
        );
      }
      O(p, _);
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
  rd,
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
var rm = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function od(e, t) {
  ce(t, !0);
  let n = w(t, "store", 15), r = w(t, "onedgeclick", 7), o = w(t, "onedgecontextmenu", 7), i = w(t, "onedgepointerenter", 7), s = w(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), y();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), y();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), y();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), y();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), y();
    }
  }, l = rm(), c = z(l), d = z(c);
  nd(d, {}), I(c);
  var h = V(c, 2);
  return gt(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, g) => {
    td(f, {
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
  od,
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
var om = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-1s0q5uo"></div>');
const im = {
  hash: "svelte-1s0q5uo",
  code: ".svelte-flow__selection.svelte-1s0q5uo {position:absolute;top:0;left:0;}"
};
function ha(e, t) {
  ce(t, !0), Ve(e, im);
  let n = w(t, "x", 7, 0), r = w(t, "y", 7, 0), o = w(t, "width", 7, 0), i = w(t, "height", 7, 0), s = w(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(h = 0) {
      n(h), y();
    },
    get y() {
      return r();
    },
    set y(h = 0) {
      r(h), y();
    },
    get width() {
      return o();
    },
    set width(h = 0) {
      o(h), y();
    },
    get height() {
      return i();
    },
    set height(h = 0) {
      i(h), y();
    },
    get isVisible() {
      return s();
    },
    set isVisible(h = !0) {
      s(h), y();
    }
  }, l = Se(), c = ie(l);
  {
    var d = (h) => {
      var f = om();
      let g;
      Ce((v) => g = dt(f, "", g, v), [
        () => ({
          width: typeof o() == "string" ? o() : hn(o()),
          height: typeof i() == "string" ? i() : hn(i()),
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
se(ha, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function sm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function am(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var lm = /* @__PURE__ */ te("<div><!></div>");
const cm = {
  hash: "svelte-pfbpzw",
  code: ".svelte-flow__selection-wrapper.svelte-pfbpzw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function id(e, t) {
  ce(t, !0), Ve(e, cm);
  let n = w(t, "store", 15), r = w(t, "onnodedrag", 7), o = w(t, "onnodedragstart", 7), i = w(t, "onnodedragstop", 7), s = w(t, "onselectionclick", 7), a = w(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ $e(void 0);
  We(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ N(() => n().selectionRectMode === "nodes" ? (n().nodes, Co(n().nodeLookup, { filter: (p) => !!p.selected })) : null);
  function d(p) {
    Object.prototype.hasOwnProperty.call(di, p.key) && (p.preventDefault(), n().moveSelectedNodes(di[p.key], p.shiftKey ? 4 : 1));
  }
  var h = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), y();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(p) {
      r(p), y();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(p) {
      o(p), y();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(p) {
      i(p), y();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(p) {
      s(p), y();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(p) {
      a(p), y();
    }
  }, f = Se(), g = ie(f);
  {
    var v = (p) => {
      var _ = lm();
      _.__contextmenu = [sm, n, a], _.__click = [am, n, s], _.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, x);
      };
      let b;
      var S = z(_);
      ha(S, { width: "100%", height: "100%", x: 0, y: 0 }), I(_), ft(_, (x, k) => ju?.(x, k), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, k, T, E) => {
          r()?.({ event: x, targetNode: null, nodes: E });
        },
        onDragStart: (x, k, T, E) => {
          o()?.({ event: x, targetNode: null, nodes: E });
        },
        onDragStop: (x, k, T, E) => {
          i()?.({ event: x, targetNode: null, nodes: E });
        }
      })), $t(_, (x) => G(l, x), () => u(l)), Ce(
        (x) => {
          Pt(_, 1, $n(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-pfbpzw"), xe(_, "role", n().disableKeyboardA11y ? void 0 : "button"), xe(_, "tabindex", n().disableKeyboardA11y ? void 0 : -1), b = dt(_, "", b, x);
        },
        [
          () => ({
            width: hn(u(c).width),
            height: hn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), O(p, _);
    };
    le(g, (p) => {
      n().selectionRectMode === "nodes" && u(c) && wn(u(c).x) && wn(u(c).y) && p(v);
    });
  }
  return O(e, f), ue(h);
}
Xn(["contextmenu", "click", "keydown"]);
se(
  id,
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
function um(e) {
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
function on(e, t) {
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
      }, { modifier: f, key: g, callback: v, preventDefault: p, enabled: _ } = h;
      if (_) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const S = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const k of S)
            if ((Array.isArray(k) ? k : [k]).reduce(
              (E, A) => E | um(A),
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
  return n && (s = cs(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = cs(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ot() {
  const e = /* @__PURE__ */ N(tn), t = (i) => {
    const s = ml(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? Lp(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Ir(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = ct(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && ml(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = ct(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && T0(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : bl(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : bl(u(e).edgeLookup, i),
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
    getViewport: () => Wl(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = sa(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const l = il(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const h = u(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Ir(h), g = ao(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = il(i) ? i : t(i);
      if (!c)
        return !1;
      const d = ao(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Ap({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = ct(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = ct(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
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
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), h = ui(i, [s, a, l]);
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
    getNodesBounds: (i) => Pp(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
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
function sd(e, t) {
  ce(t, !0);
  let n = w(t, "store", 15), r = w(t, "selectionKey", 7, "Shift"), o = w(t, "multiSelectionKey", 23, () => er() ? "Meta" : "Control"), i = w(t, "deleteKey", 7, "Backspace"), s = w(t, "panActivationKey", 7, " "), a = w(t, "zoomActivationKey", 23, () => er() ? "Meta" : "Control"), { deleteElements: l } = ot();
  function c(_) {
    return _ !== null && typeof _ == "object";
  }
  function d(_) {
    return c(_) ? _.modifier || [] : [];
  }
  function h(_) {
    return _ == null ? "" : c(_) ? _.key : _;
  }
  function f(_, b) {
    return (Array.isArray(_) ? _ : [_]).map((x) => {
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
    const _ = n().nodes.filter((S) => S.selected), b = n().edges.filter((S) => S.selected);
    l({ nodes: _, edges: b });
  }
  var p = {
    get store() {
      return n();
    },
    set store(_) {
      n(_), y();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(_ = "Shift") {
      r(_), y();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(_ = er() ? "Meta" : "Control") {
      o(_), y();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(_ = "Backspace") {
      i(_), y();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(_ = " ") {
      s(_), y();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(_ = er() ? "Meta" : "Control") {
      a(_), y();
    }
  };
  return ei("blur", Ct, g), ei("contextmenu", Ct, g), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(i(), (_) => {
      !(_.originalEvent.ctrlKey || _.originalEvent.metaKey || _.originalEvent.shiftKey) && !_u(_.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(Ct, (_, b) => on?.(_, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(p);
}
se(
  sd,
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
var dm = /* @__PURE__ */ ve('<path fill="none" class="svelte-flow__connection-path"></path>'), fm = /* @__PURE__ */ ve('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function ad(e, t) {
  ce(t, !0);
  let n = w(t, "store", 15), r = w(t, "type", 7), o = w(t, "containerStyle", 7), i = w(t, "style", 7), s = w(t, "LineComponent", 7), a = /* @__PURE__ */ N(() => {
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
      case mn.Bezier: {
        const [g] = bu(f);
        return g;
      }
      case mn.Straight: {
        const [g] = ku(f);
        return g;
      }
      case mn.Step:
      case mn.SmoothStep: {
        const [g] = aa({
          ...f,
          borderRadius: r() === mn.Step ? 0 : void 0
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
      n(f), y();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), y();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), y();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), y();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), y();
    }
  }, c = Se(), d = ie(c);
  {
    var h = (f) => {
      var g = fm(), v = z(g), p = z(v);
      {
        var _ = (S) => {
          var x = Se(), k = ie(x);
          Si(k, s, (T, E) => {
            E(T, {});
          }), O(S, x);
        }, b = (S) => {
          var x = dm();
          Ce(() => {
            xe(x, "d", u(a)), dt(x, i());
          }), O(S, x);
        };
        le(p, (S) => {
          s() ? S(_) : S(b, !1);
        });
      }
      I(v), I(g), Ce(
        (S) => {
          xe(g, "width", n().width), xe(g, "height", n().height), dt(g, o()), Pt(v, 0, S);
        },
        [
          () => $n([
            "svelte-flow__connection",
            Sp(n().connection.isValid)
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
  ad,
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
var hm = /* @__PURE__ */ te("<div><!></div>");
function No(e, t) {
  ce(t, !0);
  let n = w(t, "position", 7, "top-right"), r = w(t, "style", 7), o = w(t, "class", 7), i = w(t, "children", 7), s = /* @__PURE__ */ Ie(t, [
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
    set position(h = "top-right") {
      n(h), y();
    },
    get style() {
      return r();
    },
    set style(h) {
      r(h), y();
    },
    get class() {
      return o();
    },
    set class(h) {
      o(h), y();
    },
    get children() {
      return i();
    },
    set children(h) {
      i(h), y();
    }
  }, c = hm();
  nt(c, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = z(c);
  return je(d, () => i() ?? ht), I(c), O(e, c), ue(l);
}
se(No, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var gm = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ld(e, t) {
  ce(t, !0);
  let n = w(t, "proOptions", 7), r = w(t, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), y();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), y();
    }
  }, i = Se(), s = ie(i);
  {
    var a = (l) => {
      No(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (c, d) => {
          var h = gm();
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
se(ld, { proOptions: {}, position: {} }, [], [], !0);
var vm = /* @__PURE__ */ te("<div><!></div>");
const pm = {
  hash: "svelte-1h62cij",
  code: ".svelte-flow.svelte-1h62cij {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function cd(e, t) {
  ce(t, !0), Ve(e, pm);
  let n = w(t, "width", 7), r = w(t, "height", 7), o = w(t, "colorMode", 7), i = w(t, "domNode", 15), s = w(t, "clientWidth", 15), a = w(t, "clientHeight", 15), l = w(t, "children", 7), c = w(t, "rest", 7), d = /* @__PURE__ */ N(() => c().class), h = /* @__PURE__ */ N(() => dh(c(), [
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
  function f(_) {
    _.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), c().onscroll && c().onscroll(_);
  }
  var g = {
    get width() {
      return n();
    },
    set width(_) {
      n(_), y();
    },
    get height() {
      return r();
    },
    set height(_) {
      r(_), y();
    },
    get colorMode() {
      return o();
    },
    set colorMode(_) {
      o(_), y();
    },
    get domNode() {
      return i();
    },
    set domNode(_) {
      i(_), y();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(_) {
      s(_), y();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(_) {
      a(_), y();
    },
    get children() {
      return l();
    },
    set children(_) {
      l(_), y();
    },
    get rest() {
      return c();
    },
    set rest(_) {
      c(_), y();
    }
  }, v = vm();
  nt(
    v,
    (_) => ({
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
      [cn]: _
    }),
    [
      () => ({ width: hn(n()), height: hn(r()) })
    ],
    void 0,
    "svelte-1h62cij"
  );
  var p = z(v);
  return je(p, () => l() ?? ht), I(v), $t(v, (_) => i(_), () => i()), Ha(v, "clientHeight", a), Ha(v, "clientWidth", s), O(e, v), ue(g);
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
var mm = /* @__PURE__ */ te('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), ym = /* @__PURE__ */ te("<!> <!>", 1), wm = /* @__PURE__ */ te("<!> <!> <!> <!> <!>", 1);
function ud(e, t) {
  ce(t, !0);
  let n = w(t, "width", 7), r = w(t, "height", 7), o = w(t, "proOptions", 7), i = w(t, "selectionKey", 7), s = w(t, "deleteKey", 7), a = w(t, "panActivationKey", 7), l = w(t, "multiSelectionKey", 7), c = w(t, "zoomActivationKey", 7), d = w(t, "paneClickDistance", 7, 1), h = w(t, "nodeClickDistance", 7, 1), f = w(t, "onmovestart", 7), g = w(t, "onmoveend", 7), v = w(t, "onmove", 7), p = w(t, "oninit", 7), _ = w(t, "onnodeclick", 7), b = w(t, "onnodecontextmenu", 7), S = w(t, "onnodedrag", 7), x = w(t, "onnodedragstart", 7), k = w(t, "onnodedragstop", 7), T = w(t, "onnodepointerenter", 7), E = w(t, "onnodepointermove", 7), A = w(t, "onnodepointerleave", 7), M = w(t, "onselectionclick", 7), R = w(t, "onselectioncontextmenu", 7), X = w(t, "onselectionstart", 7), J = w(t, "onselectionend", 7), C = w(t, "onedgeclick", 7), P = w(t, "onedgecontextmenu", 7), m = w(t, "onedgepointerenter", 7), $ = w(t, "onedgepointerleave", 7), D = w(t, "onpaneclick", 7), L = w(t, "onpanecontextmenu", 7), F = w(t, "panOnScrollMode", 23, () => ir.Free), K = w(t, "preventScrolling", 7, !0), H = w(t, "zoomOnScroll", 7, !0), W = w(t, "zoomOnDoubleClick", 7, !0), Y = w(t, "zoomOnPinch", 7, !0), ee = w(t, "panOnScroll", 7, !1), j = w(t, "panOnScrollSpeed", 7, 0.5), B = w(t, "panOnDrag", 7, !0), Q = w(t, "selectionOnDrag", 7, !0), q = w(t, "connectionLineComponent", 7), ne = w(t, "connectionLineStyle", 7), U = w(t, "connectionLineContainerStyle", 7), we = w(t, "connectionLineType", 23, () => mn.Bezier), oe = w(t, "attributionPosition", 7), ae = w(t, "children", 7), re = w(t, "nodes", 31, () => zt([])), de = w(t, "edges", 31, () => zt([])), ge = w(t, "viewport", 31, () => {
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
  ]), fe = Yu({
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
  const be = zn(fi);
  be && be.setStore && be.setStore(fe), Tr(fi, {
    provider: !1,
    getStore() {
      return fe;
    }
  }), We(() => {
    const Z = { nodes: fe.selectedNodes, edges: fe.selectedEdges };
    ct(() => t.onselectionchange)?.(Z);
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
      n(Z), y();
    },
    get height() {
      return r();
    },
    set height(Z) {
      r(Z), y();
    },
    get proOptions() {
      return o();
    },
    set proOptions(Z) {
      o(Z), y();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(Z) {
      i(Z), y();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(Z) {
      s(Z), y();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(Z) {
      a(Z), y();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(Z) {
      l(Z), y();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(Z) {
      c(Z), y();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Z = 1) {
      d(Z), y();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(Z = 1) {
      h(Z), y();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(Z) {
      f(Z), y();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(Z) {
      g(Z), y();
    },
    get onmove() {
      return v();
    },
    set onmove(Z) {
      v(Z), y();
    },
    get oninit() {
      return p();
    },
    set oninit(Z) {
      p(Z), y();
    },
    get onnodeclick() {
      return _();
    },
    set onnodeclick(Z) {
      _(Z), y();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(Z) {
      b(Z), y();
    },
    get onnodedrag() {
      return S();
    },
    set onnodedrag(Z) {
      S(Z), y();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(Z) {
      x(Z), y();
    },
    get onnodedragstop() {
      return k();
    },
    set onnodedragstop(Z) {
      k(Z), y();
    },
    get onnodepointerenter() {
      return T();
    },
    set onnodepointerenter(Z) {
      T(Z), y();
    },
    get onnodepointermove() {
      return E();
    },
    set onnodepointermove(Z) {
      E(Z), y();
    },
    get onnodepointerleave() {
      return A();
    },
    set onnodepointerleave(Z) {
      A(Z), y();
    },
    get onselectionclick() {
      return M();
    },
    set onselectionclick(Z) {
      M(Z), y();
    },
    get onselectioncontextmenu() {
      return R();
    },
    set onselectioncontextmenu(Z) {
      R(Z), y();
    },
    get onselectionstart() {
      return X();
    },
    set onselectionstart(Z) {
      X(Z), y();
    },
    get onselectionend() {
      return J();
    },
    set onselectionend(Z) {
      J(Z), y();
    },
    get onedgeclick() {
      return C();
    },
    set onedgeclick(Z) {
      C(Z), y();
    },
    get onedgecontextmenu() {
      return P();
    },
    set onedgecontextmenu(Z) {
      P(Z), y();
    },
    get onedgepointerenter() {
      return m();
    },
    set onedgepointerenter(Z) {
      m(Z), y();
    },
    get onedgepointerleave() {
      return $();
    },
    set onedgepointerleave(Z) {
      $(Z), y();
    },
    get onpaneclick() {
      return D();
    },
    set onpaneclick(Z) {
      D(Z), y();
    },
    get onpanecontextmenu() {
      return L();
    },
    set onpanecontextmenu(Z) {
      L(Z), y();
    },
    get panOnScrollMode() {
      return F();
    },
    set panOnScrollMode(Z = ir.Free) {
      F(Z), y();
    },
    get preventScrolling() {
      return K();
    },
    set preventScrolling(Z = !0) {
      K(Z), y();
    },
    get zoomOnScroll() {
      return H();
    },
    set zoomOnScroll(Z = !0) {
      H(Z), y();
    },
    get zoomOnDoubleClick() {
      return W();
    },
    set zoomOnDoubleClick(Z = !0) {
      W(Z), y();
    },
    get zoomOnPinch() {
      return Y();
    },
    set zoomOnPinch(Z = !0) {
      Y(Z), y();
    },
    get panOnScroll() {
      return ee();
    },
    set panOnScroll(Z = !1) {
      ee(Z), y();
    },
    get panOnScrollSpeed() {
      return j();
    },
    set panOnScrollSpeed(Z = 0.5) {
      j(Z), y();
    },
    get panOnDrag() {
      return B();
    },
    set panOnDrag(Z = !0) {
      B(Z), y();
    },
    get selectionOnDrag() {
      return Q();
    },
    set selectionOnDrag(Z = !0) {
      Q(Z), y();
    },
    get connectionLineComponent() {
      return q();
    },
    set connectionLineComponent(Z) {
      q(Z), y();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(Z) {
      ne(Z), y();
    },
    get connectionLineContainerStyle() {
      return U();
    },
    set connectionLineContainerStyle(Z) {
      U(Z), y();
    },
    get connectionLineType() {
      return we();
    },
    set connectionLineType(Z = mn.Bezier) {
      we(Z), y();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(Z) {
      oe(Z), y();
    },
    get children() {
      return ae();
    },
    set children(Z) {
      ae(Z), y();
    },
    get nodes() {
      return re();
    },
    set nodes(Z = []) {
      re(Z), y();
    },
    get edges() {
      return de();
    },
    set edges(Z = []) {
      de(Z), y();
    },
    get viewport() {
      return ge();
    },
    set viewport(Z = void 0) {
      ge(Z), y();
    }
  };
  return cd(e, {
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
      var De = wm(), He = ie(De);
      sd(He, {
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
      var Le = V(He, 2);
      Wu(Le, {
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
          return W();
        },
        get zoomOnPinch() {
          return Y();
        },
        get panOnScroll() {
          return ee();
        },
        get panOnScrollSpeed() {
          return j();
        },
        get panOnDrag() {
          return B();
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
        children: (ze, Ue) => {
          Xu(ze, {
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
              return J();
            },
            get panOnDrag() {
              return B();
            },
            get selectionOnDrag() {
              return Q();
            },
            get store() {
              return fe;
            },
            set store(he) {
              fe = he;
            },
            children: (he, Ze) => {
              var at = ym(), et = ie(at);
              qu(et, {
                get store() {
                  return fe;
                },
                set store(Xe) {
                  fe = Xe;
                },
                children: (Xe, bt) => {
                  var rn = mm(), On = V(ie(rn), 2);
                  od(On, {
                    get onedgeclick() {
                      return C();
                    },
                    get onedgecontextmenu() {
                      return P();
                    },
                    get onedgepointerenter() {
                      return m();
                    },
                    get onedgepointerleave() {
                      return $();
                    },
                    get store() {
                      return fe;
                    },
                    set store(Gn) {
                      fe = Gn;
                    }
                  });
                  var Ao = V(On, 4);
                  ad(Ao, {
                    get type() {
                      return we();
                    },
                    get LineComponent() {
                      return q();
                    },
                    get containerStyle() {
                      return U();
                    },
                    get style() {
                      return ne();
                    },
                    get store() {
                      return fe;
                    },
                    set store(Gn) {
                      fe = Gn;
                    }
                  });
                  var wa = V(Ao, 2);
                  ed(wa, {
                    get nodeClickDistance() {
                      return h();
                    },
                    get onnodeclick() {
                      return _();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return T();
                    },
                    get onnodepointermove() {
                      return E();
                    },
                    get onnodepointerleave() {
                      return A();
                    },
                    get onnodedrag() {
                      return S();
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
                    set store(Gn) {
                      fe = Gn;
                    }
                  });
                  var cf = V(wa, 2);
                  id(cf, {
                    get onselectionclick() {
                      return M();
                    },
                    get onselectioncontextmenu() {
                      return R();
                    },
                    get onnodedrag() {
                      return S();
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
                    set store(Gn) {
                      fe = Gn;
                    }
                  }), pe(2), O(Xe, rn);
                },
                $$slots: { default: !0 }
              });
              var Tt = V(et, 2);
              {
                let Xe = /* @__PURE__ */ N(() => !!(fe.selectionRect && fe.selectionRectMode === "user")), bt = /* @__PURE__ */ N(() => fe.selectionRect?.width), rn = /* @__PURE__ */ N(() => fe.selectionRect?.height), On = /* @__PURE__ */ N(() => fe.selectionRect?.x), Ao = /* @__PURE__ */ N(() => fe.selectionRect?.y);
                ha(Tt, {
                  get isVisible() {
                    return u(Xe);
                  },
                  get width() {
                    return u(bt);
                  },
                  get height() {
                    return u(rn);
                  },
                  get x() {
                    return u(On);
                  },
                  get y() {
                    return u(Ao);
                  }
                });
              }
              O(he, at);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var it = V(Le, 2);
      ld(it, {
        get proOptions() {
          return o();
        },
        get position() {
          return oe();
        }
      });
      var st = V(it, 2);
      Gu(st, {
        get store() {
          return fe;
        }
      });
      var Lt = V(st, 2);
      je(Lt, () => ae() ?? ht), O(Z, De);
    },
    $$slots: { default: !0 }
  }), ue(Pe);
}
se(
  ud,
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
function dd(e, t) {
  ce(t, !0);
  let n = w(t, "children", 7), r = /* @__PURE__ */ $e(Yu({ props: {}, nodes: [], edges: [] }));
  Tr(fi, {
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
      n(a), y();
    }
  }, i = Se(), s = ie(i);
  return je(s, () => n() ?? ht), O(e, i), ue(o);
}
se(dd, { children: {} }, [], [], !0);
var _m = /* @__PURE__ */ te("<button><!></button>");
function Gr(e, t) {
  ce(t, !0);
  let n = w(t, "class", 7), r = w(t, "bgColor", 7), o = w(t, "bgColorHover", 7), i = w(t, "color", 7), s = w(t, "colorHover", 7), a = w(t, "borderColor", 7), l = w(t, "onclick", 7), c = w(t, "children", 7), d = /* @__PURE__ */ Ie(t, [
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
      n(v), y();
    },
    get bgColor() {
      return r();
    },
    set bgColor(v) {
      r(v), y();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(v) {
      o(v), y();
    },
    get color() {
      return i();
    },
    set color(v) {
      i(v), y();
    },
    get colorHover() {
      return s();
    },
    set colorHover(v) {
      s(v), y();
    },
    get borderColor() {
      return a();
    },
    set borderColor(v) {
      a(v), y();
    },
    get onclick() {
      return l();
    },
    set onclick(v) {
      l(v), y();
    },
    get children() {
      return c();
    },
    set children(v) {
      c(v), y();
    }
  }, f = _m();
  nt(
    f,
    (v) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [cn]: v
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
  return je(g, () => c() ?? ht), I(f), O(e, f), ue(h);
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
var xm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function fd(e) {
  var t = xm();
  O(e, t);
}
se(fd, {}, [], [], !0);
var bm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function hd(e) {
  var t = bm();
  O(e, t);
}
se(hd, {}, [], [], !0);
var Cm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function gd(e) {
  var t = Cm();
  O(e, t);
}
se(gd, {}, [], [], !0);
var km = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function vd(e) {
  var t = km();
  O(e, t);
}
se(vd, {}, [], [], !0);
var Em = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function pd(e) {
  var t = Em();
  O(e, t);
}
se(pd, {}, [], [], !0);
var Sm = /* @__PURE__ */ te("<!> <!>", 1), Nm = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function md(e, t) {
  ce(t, !0);
  let n = w(t, "position", 7, "bottom-left"), r = w(t, "orientation", 7, "vertical"), o = w(t, "showZoom", 7, !0), i = w(t, "showFitView", 7, !0), s = w(t, "showLock", 7, !0), a = w(t, "style", 7), l = w(t, "class", 7), c = w(t, "buttonBgColor", 7), d = w(t, "buttonBgColorHover", 7), h = w(t, "buttonColor", 7), f = w(t, "buttonColorHover", 7), g = w(t, "buttonBorderColor", 7), v = w(t, "fitViewOptions", 7), p = w(t, "children", 7), _ = w(t, "before", 7), b = w(t, "after", 7), S = /* @__PURE__ */ Ie(t, [
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
  ]), x = /* @__PURE__ */ N(tn);
  const k = {
    bgColor: c(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: g()
  };
  let T = /* @__PURE__ */ N(() => u(x).nodesDraggable || u(x).nodesConnectable || u(x).elementsSelectable), E = /* @__PURE__ */ N(() => u(x).viewport.zoom <= u(x).minZoom), A = /* @__PURE__ */ N(() => u(x).viewport.zoom >= u(x).maxZoom), M = /* @__PURE__ */ N(() => u(x).ariaLabelConfig), R = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const X = () => {
    u(x).zoomIn();
  }, J = () => {
    u(x).zoomOut();
  }, C = () => {
    u(x).fitView(v());
  }, P = () => {
    let $ = !u(T);
    u(x).nodesDraggable = $, u(x).nodesConnectable = $, u(x).elementsSelectable = $;
  };
  var m = {
    get position() {
      return n();
    },
    set position($ = "bottom-left") {
      n($), y();
    },
    get orientation() {
      return r();
    },
    set orientation($ = "vertical") {
      r($), y();
    },
    get showZoom() {
      return o();
    },
    set showZoom($ = !0) {
      o($), y();
    },
    get showFitView() {
      return i();
    },
    set showFitView($ = !0) {
      i($), y();
    },
    get showLock() {
      return s();
    },
    set showLock($ = !0) {
      s($), y();
    },
    get style() {
      return a();
    },
    set style($) {
      a($), y();
    },
    get class() {
      return l();
    },
    set class($) {
      l($), y();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor($) {
      c($), y();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover($) {
      d($), y();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor($) {
      h($), y();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover($) {
      f($), y();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor($) {
      g($), y();
    },
    get fitViewOptions() {
      return v();
    },
    set fitViewOptions($) {
      v($), y();
    },
    get children() {
      return p();
    },
    set children($) {
      p($), y();
    },
    get before() {
      return _();
    },
    set before($) {
      _($), y();
    },
    get after() {
      return b();
    },
    set after($) {
      b($), y();
    }
  };
  {
    let $ = /* @__PURE__ */ N(() => [
      "svelte-flow__controls",
      u(R),
      l()
    ]);
    No(e, Be(
      {
        get class() {
          return u($);
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
      () => S,
      {
        children: (D, L) => {
          var F = Nm(), K = ie(F);
          {
            var H = (oe) => {
              var ae = Se(), re = ie(ae);
              je(re, _), O(oe, ae);
            };
            le(K, (oe) => {
              _() && oe(H);
            });
          }
          var W = V(K, 2);
          {
            var Y = (oe) => {
              var ae = Sm(), re = ie(ae);
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
                    fd(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var de = V(re, 2);
              Gr(de, Be(
                {
                  onclick: J,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(M)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(M)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u(E);
                  }
                },
                () => k,
                {
                  children: (ge, _e) => {
                    hd(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), O(oe, ae);
            };
            le(W, (oe) => {
              o() && oe(Y);
            });
          }
          var ee = V(W, 2);
          {
            var j = (oe) => {
              Gr(oe, Be(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: C,
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
                    gd(ae);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(ee, (oe) => {
              i() && oe(j);
            });
          }
          var B = V(ee, 2);
          {
            var Q = (oe) => {
              Gr(oe, Be(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: P,
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
                    var de = Se(), ge = ie(de);
                    {
                      var _e = (be) => {
                        pd(be);
                      }, fe = (be) => {
                        vd(be);
                      };
                      le(ge, (be) => {
                        u(T) ? be(_e) : be(fe, !1);
                      });
                    }
                    O(ae, de);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(B, (oe) => {
              s() && oe(Q);
            });
          }
          var q = V(B, 2);
          {
            var ne = (oe) => {
              var ae = Se(), re = ie(ae);
              je(re, p), O(oe, ae);
            };
            le(q, (oe) => {
              p() && oe(ne);
            });
          }
          var U = V(q, 2);
          {
            var we = (oe) => {
              var ae = Se(), re = ie(ae);
              je(re, b), O(oe, ae);
            };
            le(U, (oe) => {
              b() && oe(we);
            });
          }
          O(D, F);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue(m);
}
se(
  md,
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
var _n;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(_n || (_n = {}));
var Pm = /* @__PURE__ */ ve("<circle></circle>");
function yd(e, t) {
  ce(t, !0);
  let n = w(t, "radius", 7), r = w(t, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), y();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), y();
    }
  }, i = Pm();
  return Ce(() => {
    xe(i, "cx", n()), xe(i, "cy", n()), xe(i, "r", n()), Pt(i, 0, $n(["svelte-flow__background-pattern", "dots", r()]));
  }), O(e, i), ue(o);
}
se(yd, { radius: {}, class: {} }, [], [], !0);
var $m = /* @__PURE__ */ ve("<path></path>");
function wd(e, t) {
  ce(t, !0);
  let n = w(t, "lineWidth", 7), r = w(t, "dimensions", 7), o = w(t, "variant", 7), i = w(t, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), y();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), y();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), y();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), y();
    }
  }, a = $m();
  return Ce(() => {
    xe(a, "stroke-width", n()), xe(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Pt(a, 0, $n(["svelte-flow__background-pattern", o(), i()]));
  }), O(e, a), ue(s);
}
se(wd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Tm = {
  [_n.Dots]: 1,
  [_n.Lines]: 1,
  [_n.Cross]: 6
};
var Dm = /* @__PURE__ */ ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function _d(e, t) {
  ce(t, !0);
  let n = w(t, "id", 7), r = w(t, "variant", 23, () => _n.Dots), o = w(t, "gap", 7, 20), i = w(t, "size", 7), s = w(t, "lineWidth", 7, 1), a = w(t, "bgColor", 7), l = w(t, "patternColor", 7), c = w(t, "patternClass", 7), d = w(t, "class", 7), h = /* @__PURE__ */ N(tn), f = /* @__PURE__ */ N(() => r() === _n.Dots), g = /* @__PURE__ */ N(() => r() === _n.Cross), v = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), p = /* @__PURE__ */ N(() => `background-pattern-${u(h).flowId}-${n() ?? ""}`), _ = /* @__PURE__ */ N(() => [
    u(v)[0] * u(h).viewport.zoom || 1,
    u(v)[1] * u(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ N(() => (i() ?? Tm[r()]) * u(h).viewport.zoom), S = /* @__PURE__ */ N(() => u(g) ? [u(b), u(b)] : u(_)), x = /* @__PURE__ */ N(() => u(f) ? [u(b) / 2, u(b) / 2] : [
    u(S)[0] / 2,
    u(S)[1] / 2
  ]);
  var k = {
    get id() {
      return n();
    },
    set id(C) {
      n(C), y();
    },
    get variant() {
      return r();
    },
    set variant(C = _n.Dots) {
      r(C), y();
    },
    get gap() {
      return o();
    },
    set gap(C = 20) {
      o(C), y();
    },
    get size() {
      return i();
    },
    set size(C) {
      i(C), y();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(C = 1) {
      s(C), y();
    },
    get bgColor() {
      return a();
    },
    set bgColor(C) {
      a(C), y();
    },
    get patternColor() {
      return l();
    },
    set patternColor(C) {
      l(C), y();
    },
    get patternClass() {
      return c();
    },
    set patternClass(C) {
      c(C), y();
    },
    get class() {
      return d();
    },
    set class(C) {
      d(C), y();
    }
  }, T = Dm();
  let E;
  var A = z(T), M = z(A);
  {
    var R = (C) => {
      {
        let P = /* @__PURE__ */ N(() => u(b) / 2);
        yd(C, {
          get radius() {
            return u(P);
          },
          get class() {
            return c();
          }
        });
      }
    }, X = (C) => {
      wd(C, {
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
    le(M, (C) => {
      u(f) ? C(R) : C(X, !1);
    });
  }
  I(A);
  var J = V(A);
  return I(T), Ce(
    (C) => {
      Pt(T, 0, $n([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), E = dt(T, "", E, C), xe(A, "id", u(p)), xe(A, "x", u(h).viewport.x % u(_)[0]), xe(A, "y", u(h).viewport.y % u(_)[1]), xe(A, "width", u(_)[0]), xe(A, "height", u(_)[1]), xe(A, "patternTransform", `translate(-${u(x)[0]},-${u(x)[1]})`), xe(J, "fill", `url(#${u(p)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), O(e, T), ue(k);
}
se(
  _d,
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
var Am = /* @__PURE__ */ ve("<rect></rect>");
function xd(e, t) {
  ce(t, !0);
  let n = w(t, "x", 7), r = w(t, "y", 7), o = w(t, "width", 7), i = w(t, "height", 7), s = w(t, "borderRadius", 7, 5), a = w(t, "color", 7), l = w(t, "shapeRendering", 7), c = w(t, "strokeColor", 7), d = w(t, "strokeWidth", 7, 2), h = w(t, "selected", 7), f = w(t, "class", 7), g = w(t, "nodeComponent", 7);
  var v = {
    get x() {
      return n();
    },
    set x(x) {
      n(x), y();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), y();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), y();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), y();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(x = 5) {
      s(x), y();
    },
    get color() {
      return a();
    },
    set color(x) {
      a(x), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), y();
    },
    get strokeColor() {
      return c();
    },
    set strokeColor(x) {
      c(x), y();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(x = 2) {
      d(x), y();
    },
    get selected() {
      return h();
    },
    set selected(x) {
      h(x), y();
    },
    get class() {
      return f();
    },
    set class(x) {
      f(x), y();
    },
    get nodeComponent() {
      return g();
    },
    set nodeComponent(x) {
      g(x), y();
    }
  }, p = Se(), _ = ie(p);
  {
    var b = (x) => {
      const k = /* @__PURE__ */ N(g);
      var T = Se(), E = ie(T);
      Si(E, () => u(k), (A, M) => {
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
      }), O(x, T);
    }, S = (x) => {
      var k = Am();
      let T, E;
      Ce(
        (A, M) => {
          T = Pt(k, 0, $n(["svelte-flow__minimap-node", f()]), null, T, A), xe(k, "x", n()), xe(k, "y", r()), xe(k, "rx", s()), xe(k, "ry", s()), xe(k, "width", o()), xe(k, "height", i()), xe(k, "shape-rendering", l()), E = dt(k, "", E, M);
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
    le(_, (x) => {
      g() ? x(b) : x(S, !1);
    });
  }
  return O(e, p), ue(v);
}
se(
  xd,
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
function Om(e, t) {
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
const Ji = (e) => e instanceof Function ? e : () => e;
var Mm = /* @__PURE__ */ ve("<title> </title>"), Hm = /* @__PURE__ */ ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Lm = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function bd(e, t) {
  ce(t, !0);
  let n = w(t, "position", 7, "bottom-right"), r = w(t, "ariaLabel", 7), o = w(t, "nodeStrokeColor", 7, "transparent"), i = w(t, "nodeColor", 7), s = w(t, "nodeClass", 7, ""), a = w(t, "nodeBorderRadius", 7, 5), l = w(t, "nodeStrokeWidth", 7, 2), c = w(t, "nodeComponent", 7), d = w(t, "bgColor", 7), h = w(t, "maskColor", 7), f = w(t, "maskStrokeColor", 7), g = w(t, "maskStrokeWidth", 7), v = w(t, "width", 7, 200), p = w(t, "height", 7, 150), _ = w(t, "pannable", 7, !0), b = w(t, "zoomable", 7, !0), S = w(t, "inversePan", 7), x = w(t, "zoomStep", 7), k = w(t, "class", 7), T = /* @__PURE__ */ Ie(t, [
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
  ]), E = /* @__PURE__ */ N(tn), A = /* @__PURE__ */ N(() => u(E).ariaLabelConfig);
  const M = i() === void 0 ? void 0 : Ji(i()), R = Ji(o()), X = Ji(s()), J = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let C = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${u(E).flowId}`), P = /* @__PURE__ */ N(() => ({
    x: -u(E).viewport.x / u(E).viewport.zoom,
    y: -u(E).viewport.y / u(E).viewport.zoom,
    width: u(E).width / u(E).viewport.zoom,
    height: u(E).height / u(E).viewport.zoom
  })), m = /* @__PURE__ */ N(() => pu(Co(u(E).nodeLookup, { filter: (U) => !U.hidden }), u(P))), $ = /* @__PURE__ */ N(() => u(m).width / v()), D = /* @__PURE__ */ N(() => u(m).height / p()), L = /* @__PURE__ */ N(() => Math.max(u($), u(D))), F = /* @__PURE__ */ N(() => u(L) * v()), K = /* @__PURE__ */ N(() => u(L) * p()), H = /* @__PURE__ */ N(() => 5 * u(L)), W = /* @__PURE__ */ N(() => u(m).x - (u(F) - u(m).width) / 2 - u(H)), Y = /* @__PURE__ */ N(() => u(m).y - (u(K) - u(m).height) / 2 - u(H)), ee = /* @__PURE__ */ N(() => u(F) + u(H) * 2), j = /* @__PURE__ */ N(() => u(K) + u(H) * 2);
  const B = () => u(L);
  var Q = {
    get position() {
      return n();
    },
    set position(U = "bottom-right") {
      n(U), y();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(U) {
      r(U), y();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(U = "transparent") {
      o(U), y();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(U) {
      i(U), y();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(U = "") {
      s(U), y();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(U = 5) {
      a(U), y();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(U = 2) {
      l(U), y();
    },
    get nodeComponent() {
      return c();
    },
    set nodeComponent(U) {
      c(U), y();
    },
    get bgColor() {
      return d();
    },
    set bgColor(U) {
      d(U), y();
    },
    get maskColor() {
      return h();
    },
    set maskColor(U) {
      h(U), y();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(U) {
      f(U), y();
    },
    get maskStrokeWidth() {
      return g();
    },
    set maskStrokeWidth(U) {
      g(U), y();
    },
    get width() {
      return v();
    },
    set width(U = 200) {
      v(U), y();
    },
    get height() {
      return p();
    },
    set height(U = 150) {
      p(U), y();
    },
    get pannable() {
      return _();
    },
    set pannable(U = !0) {
      _(U), y();
    },
    get zoomable() {
      return b();
    },
    set zoomable(U = !0) {
      b(U), y();
    },
    get inversePan() {
      return S();
    },
    set inversePan(U) {
      S(U), y();
    },
    get zoomStep() {
      return x();
    },
    set zoomStep(U) {
      x(U), y();
    },
    get class() {
      return k();
    },
    set class(U) {
      k(U), y();
    }
  }, q = Lm(), ne = ie(q);
  {
    let U = /* @__PURE__ */ N(() => ["svelte-flow__minimap", k()]);
    Eh(ne, () => ({ "--xy-minimap-background-color-props": d() })), No(ne.lastChild, Be(
      {
        get position() {
          return n();
        },
        get class() {
          return u(U);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => T,
      {
        children: (we, oe) => {
          var ae = Se(), re = ie(ae);
          {
            var de = (ge) => {
              var _e = Hm();
              let fe;
              var be = z(_e);
              {
                var Pe = (De) => {
                  var He = Mm(), Le = z(He, !0);
                  I(He), Ce(() => {
                    xe(He, "id", u(C)), Re(Le, r() ?? u(A)["minimap.ariaLabel"]);
                  }), O(De, He);
                };
                le(be, (De) => {
                  (r() ?? u(A)["minimap.ariaLabel"]) && De(Pe);
                });
              }
              var Z = V(be);
              gt(Z, 17, () => u(E).nodes, (De) => De.id, (De, He) => {
                const Le = /* @__PURE__ */ N(() => u(E).nodeLookup.get(u(He).id));
                var it = Se(), st = ie(it);
                {
                  var Lt = (ze) => {
                    const Ue = /* @__PURE__ */ N(() => qn(u(Le)));
                    {
                      let he = /* @__PURE__ */ N(() => M?.(u(Le))), Ze = /* @__PURE__ */ N(() => R(u(Le))), at = /* @__PURE__ */ N(() => X(u(Le)));
                      xd(ze, Be(
                        {
                          get x() {
                            return u(Le).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(Le).internals.positionAbsolute.y;
                          }
                        },
                        () => u(Ue),
                        {
                          get selected() {
                            return u(Le).selected;
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
                            return J;
                          },
                          get class() {
                            return u(at);
                          }
                        }
                      ));
                    }
                  };
                  le(st, (ze) => {
                    u(Le) && mu(u(Le)) && !u(Le).hidden && ze(Lt);
                  });
                }
                O(De, it);
              });
              var Ye = V(Z);
              I(_e), ft(_e, (De, He) => Om?.(De, He), () => ({
                store: u(E),
                panZoom: u(E).panZoom,
                getViewScale: B,
                translateExtent: u(E).translateExtent,
                width: u(E).width,
                height: u(E).height,
                inversePan: S(),
                zoomStep: x(),
                pannable: _(),
                zoomable: b()
              })), Ce(
                (De) => {
                  xe(_e, "width", v()), xe(_e, "height", p()), xe(_e, "viewBox", `${u(W) ?? ""} ${u(Y) ?? ""} ${u(ee) ?? ""} ${u(j) ?? ""}`), xe(_e, "aria-labelledby", u(C)), fe = dt(_e, "", fe, De), xe(Ye, "d", `M${u(W) - u(H)},${u(Y) - u(H)}h${u(ee) + u(H) * 2}v${u(j) + u(H) * 2}h${-u(ee) - u(H) * 2}z
      M${u(P).x ?? ""},${u(P).y ?? ""}h${u(P).width ?? ""}v${u(P).height ?? ""}h${-u(P).width}z`);
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
              u(E).panZoom && ge(de);
            });
          }
          O(we, ae);
        },
        $$slots: { default: !0 }
      }
    )), I(ne);
  }
  return O(e, q), ue(Q);
}
se(
  bd,
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
var Vm = /* @__PURE__ */ te("<div><!></div>");
function Cd(e, t) {
  ce(t, !0);
  let n = w(t, "nodeId", 7), r = w(t, "position", 23, () => me.Top), o = w(t, "align", 7, "center"), i = w(t, "offset", 7, 10), s = w(t, "isVisible", 7), a = w(t, "children", 7), l = /* @__PURE__ */ Ie(t, [
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
  const c = tn(), { getNodesBounds: d } = ot(), h = zn("svelteflow__node_id");
  let f = /* @__PURE__ */ N(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (E, A) => {
      const M = c.nodeLookup.get(A);
      return M && E.push(M), E;
    },
    []
  ))), g = /* @__PURE__ */ N(() => {
    const T = d(u(f));
    return T ? Gp(T, c.viewport, r(), i(), o()) : "";
  }), v = /* @__PURE__ */ N(() => u(f).length === 0 ? 1 : Math.max(...u(f).map((T) => (T.internals.z || 5) + 1))), p = /* @__PURE__ */ N(() => c.nodes.filter((T) => T.selected).length), _ = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(p) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(T) {
      n(T), y();
    },
    get position() {
      return r();
    },
    set position(T = me.Top) {
      r(T), y();
    },
    get align() {
      return o();
    },
    set align(T = "center") {
      o(T), y();
    },
    get offset() {
      return i();
    },
    set offset(T = 10) {
      i(T), y();
    },
    get isVisible() {
      return s();
    },
    set isVisible(T) {
      s(T), y();
    },
    get children() {
      return a();
    },
    set children(T) {
      a(T), y();
    }
  }, S = Se(), x = ie(S);
  {
    var k = (T) => {
      var E = Vm();
      nt(
        E,
        (M, R) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": M,
          ...l,
          [cn]: R
        }),
        [
          () => u(f).reduce((M, R) => `${M}${R.id} `, "").trim(),
          () => ({
            display: Iu().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(v)
          })
        ]
      );
      var A = z(E);
      je(A, () => a() ?? ht), I(E), ft(E, (M, R) => Vu?.(M, R), () => "root"), O(T, E);
    };
    le(x, (T) => {
      c.domNode && u(_) && u(f) && T(k);
    });
  }
  return O(e, S), ue(b);
}
se(
  Cd,
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
function Tn(e) {
  const t = /* @__PURE__ */ N(tn), n = /* @__PURE__ */ N(() => u(t).nodes), r = /* @__PURE__ */ N(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ N(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const h = u(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!l0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const Cl = "tinyflow-component", Im = [
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
], zm = [
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
], ga = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Rm = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Bm = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class I_ {
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
    const t = document.createElement(Cl);
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
    const n = document.createElement(Cl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Fm = () => {
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
}, Me = Fm();
var Km = /* @__PURE__ */ te("<button><!></button>");
function Ae(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "primary", 7), o = /* @__PURE__ */ Ie(t, [
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
      n(l), y();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), y();
    }
  }, s = Km();
  nt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = z(s);
  return je(a, () => n() ?? ht), I(s), O(e, s), ue(i);
}
se(Ae, { children: {}, primary: {} }, [], [], !0);
var Zm = /* @__PURE__ */ te("<input/>");
function kd(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Zm();
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
se(kd, {}, [], [], !0);
var Ym = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Wm = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Ed(e, t) {
  ce(t, !0), Ve(e, Wm);
  const n = w(t, "placeholder", 7), r = w(t, "label", 7), o = w(t, "value", 7), i = w(t, "buttonText", 7, "选择..."), s = w(t, "onChosen", 7), a = /* @__PURE__ */ Ie(t, [
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
      n(g), y();
    },
    get label() {
      return r();
    },
    set label(g) {
      r(g), y();
    },
    get value() {
      return o();
    },
    set value(g) {
      o(g), y();
    },
    get buttonText() {
      return i();
    },
    set buttonText(g = "选择...") {
      i(g), y();
    },
    get onChosen() {
      return s();
    },
    set onChosen(g) {
      s(g), y();
    }
  }, c = Ym();
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
  rr(d);
  var h = V(d, 2);
  Qe(h, {
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
  }), I(c), Ce(() => Fo(d, o())), O(e, c), ue(l);
}
se(
  Ed,
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
var Xm = /* @__PURE__ */ te("<input/>");
function Qe(e, t) {
  ce(t, !0);
  const n = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Xm();
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
se(Qe, {}, [], [], !0);
var qm = /* @__PURE__ */ te("<textarea></textarea>");
function Fe(e, t) {
  ce(t, !0);
  const n = w(t, "value", 7), r = w(t, "height", 7), o = w(t, "autoHeight", 7, !0), i = w(t, "maxHeight", 7), s = w(t, "onHeightChange", 7), a = /* @__PURE__ */ Ie(t, [
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
  let l, c;
  function d() {
    if (l && o()) {
      if (r() !== void 0) {
        const _ = typeof r() == "number" ? `${r()}px` : r();
        l.style.height = _, l.style.overflowY = "hidden", s()?.(_);
        return;
      }
      l.style.height = "auto", l.style.overflowY = "hidden";
      let p = l.scrollHeight;
      if (!c) {
        const _ = t.rows || 1, b = getComputedStyle(l);
        c = parseFloat(b.fontSize) * 1.2 * _ + parseFloat(b.paddingTop) + parseFloat(b.paddingBottom) + parseFloat(b.borderTopWidth);
      }
      if (p < c && (p = c), i()) {
        const _ = typeof i() == "number" ? `${i()}px` : i();
        p > parseInt(_) ? (l.style.height = _, l.style.overflowY = "auto") : l.style.height = `${p}px`;
      } else
        l.style.height = `${p}px`;
      s()?.(l.style.height);
    }
  }
  We(() => {
    d();
  });
  var h = {
    get value() {
      return n();
    },
    set value(p) {
      n(p), y();
    },
    get height() {
      return r();
    },
    set height(p) {
      r(p), y();
    },
    get autoHeight() {
      return o();
    },
    set autoHeight(p = !0) {
      o(p), y();
    },
    get maxHeight() {
      return i();
    },
    set maxHeight(p) {
      i(p), y();
    },
    get onHeightChange() {
      return s();
    },
    set onHeightChange(p) {
      s(p), y();
    }
  }, f = qm();
  th(f);
  var g = (p) => {
    d(), t.oninput?.(p);
  }, v = (p) => {
    d(), t.onchange?.(p);
  };
  return nt(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: g,
    onchange: v,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), $t(f, (p) => l = p, () => l), O(e, f), ue(h);
}
se(
  Fe,
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
var jm = /* @__PURE__ */ te('<div role="button"><!></div>'), Gm = /* @__PURE__ */ te("<div></div>");
function Sd(e, t) {
  const n = Ia(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Ia(n, ["items", "onChange", "activeIndex"]);
  ce(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(d, h) {
    s(h), i()?.(d, h);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), y();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), y();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), y();
    }
  };
  Mc();
  var c = Gm();
  return nt(c, () => ({
    ...r,
    class: `tf-tabs ${Ws(r), ct(() => r.class) ?? ""}`
  })), gt(c, 5, o, Or, (d, h, f) => {
    var g = jm();
    xe(g, "tabindex", f), g.__click = () => a(u(h), f), g.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(u(h), f));
    };
    var v = z(g);
    {
      var p = (b) => {
        var S = ke();
        Ce(() => Re(S, (u(h), ct(() => u(h).label)))), O(b, S);
      }, _ = (b) => {
        var S = Se(), x = ie(S);
        je(x, () => (u(h), ct(() => u(h).label) ?? ht)), O(b, S);
      };
      le(v, (b) => {
        u(h), ct(() => typeof u(h).label == "string") ? b(p) : b(_, !1);
      });
    }
    I(g), Ce(() => Pt(g, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), O(d, g);
  }), I(c), O(e, c), ue(l);
}
Xn(["click", "keydown"]);
se(Sd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Um = (e, t, n) => t(u(n)), Jm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(u(n)));
}, Qm = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), e2 = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), t2 = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), n2 = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), r2 = /* @__PURE__ */ te("<div></div>");
const o2 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Nd(e, t) {
  ce(t, !0), Ve(e, o2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => zt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((c) => c !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), y();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), y();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), y();
    }
  }, a = r2();
  return gt(a, 21, n, Or, (l, c, d) => {
    var h = n2(), f = z(h);
    xe(f, "tabindex", d), f.__click = [Um, i, c], f.__keydown = [Jm, i, c];
    var g = z(f);
    {
      var v = (T) => {
        var E = Qm(), A = z(E);
        Ln(A, {
          get target() {
            return u(c).icon;
          }
        }), I(E), O(T, E);
      };
      le(g, (T) => {
        u(c).icon && T(v);
      });
    }
    var p = V(g, 2);
    Ln(p, {
      get target() {
        return u(c).title;
      }
    });
    var _ = V(p, 2);
    I(f);
    var b = V(f, 2);
    {
      var S = (T) => {
        var E = e2(), A = z(E);
        Ln(A, {
          get target() {
            return u(c).description;
          }
        }), I(E), O(T, E);
      };
      le(b, (T) => {
        u(c).description && T(S);
      });
    }
    var x = V(b, 2);
    {
      var k = (T) => {
        var E = t2(), A = z(E);
        Ln(A, {
          get target() {
            return u(c).content;
          }
        }), I(E), O(T, E);
      };
      le(x, (T) => {
        o().includes(u(c).key) && T(k);
      });
    }
    I(h), Ce((T) => Pt(_, 1, `tf-collapse-item-title-arrow ${T ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), O(l, h);
  }), I(a), Ce(() => {
    dt(a, t.style), Pt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), O(e, a), ue(s);
}
Xn(["click", "keydown"]);
se(Nd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Ln(e, t) {
  ce(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), y();
    }
  }, o = Se(), i = ie(o);
  {
    var s = (l) => {
      var c = Se(), d = ie(c);
      je(d, () => n() ?? ht), O(l, c);
    }, a = (l) => {
      var c = Se(), d = ie(c);
      js(d, n), O(l, c);
    };
    le(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return O(e, o), ue(r);
}
se(Ln, { target: {} }, [], [], !0);
var i2 = (e, t, n) => t(u(n)), s2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), a2 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), l2 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), c2 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), u2 = /* @__PURE__ */ te("<!> <!>", 1), d2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), f2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), h2 = /* @__PURE__ */ te("<div><!></div>");
function ut(e, t) {
  ce(t, !0);
  const n = (S, x = ht) => {
    var k = Se(), T = ie(k);
    gt(T, 19, x, (E, A) => `${A}_${E.value}`, (E, A) => {
      var M = l2(), R = ie(M);
      R.__click = [i2, v, A];
      var X = z(R), J = z(X);
      {
        var C = (D) => {
          var L = s2();
          O(D, L);
        };
        le(J, (D) => {
          u(A).children && u(A).children.length > 0 && D(C);
        });
      }
      I(X);
      var P = V(X, 2);
      Ln(P, {
        get target() {
          return u(A).label;
        }
      }), I(R);
      var m = V(R, 2);
      {
        var $ = (D) => {
          var L = a2(), F = z(L);
          n(F, () => u(A).children), I(L), O(D, L);
        };
        le(m, (D) => {
          u(A).children && u(A).children.length > 0 && (a() || c().includes(u(A).value)) && D($);
        });
      }
      O(E, M);
    }), O(S, k);
  };
  let r = w(t, "items", 7), o = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), a = w(t, "expandAll", 7, !0), l = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), d = w(t, "placeholder", 7), h = /* @__PURE__ */ Ie(t, [
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
    const S = [], x = (k) => {
      for (let T of k)
        i().length > 0 ? i().includes(T.value) && S.push(T) : s().includes(T.value) && S.push(T), T.children && T.children.length > 0 && x(T.children);
    };
    return x(r()), S;
  }), g;
  function v(S) {
    g?.hide(), o()?.(S);
  }
  var p = {
    get items() {
      return r();
    },
    set items(S) {
      r(S), y();
    },
    get onSelect() {
      return o();
    },
    set onSelect(S) {
      o(S), y();
    },
    get value() {
      return i();
    },
    set value(S = []) {
      i(S), y();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(S = []) {
      s(S), y();
    },
    get expandAll() {
      return a();
    },
    set expandAll(S = !0) {
      a(S), y();
    },
    get multiple() {
      return l();
    },
    set multiple(S = !1) {
      l(S), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(S = []) {
      c(S), y();
    },
    get placeholder() {
      return d();
    },
    set placeholder(S) {
      d(S), y();
    }
  }, _ = h2();
  nt(_, () => ({ ...h, class: `tf-select ${h.class ?? ""}` }));
  var b = z(_);
  return $t(
    jn(b, {
      floating: (x) => {
        var k = c2(), T = z(k);
        n(T, r), I(k), O(x, k);
      },
      children: (x, k) => {
        var T = f2();
        nt(T, () => ({ class: "tf-select-input nopan nodrag", ...h }));
        var E = z(T);
        gt(
          E,
          23,
          () => u(f),
          (A, M) => `${M}_${A.value}`,
          (A, M, R) => {
            var X = Se(), J = ie(X);
            {
              var C = (m) => {
                var $ = Se(), D = ie($);
                {
                  var L = (F) => {
                    Ln(F, {
                      get target() {
                        return u(M).label;
                      }
                    });
                  };
                  le(D, (F) => {
                    u(R) === 0 && F(L);
                  });
                }
                O(m, $);
              }, P = (m) => {
                var $ = u2(), D = ie($);
                Ln(D, {
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
                    u(R) < u(f).length - 1 && K(F);
                  });
                }
                O(m, $);
              };
              le(J, (m) => {
                l() ? m(P, !1) : m(C);
              });
            }
            O(A, X);
          },
          (A) => {
            var M = d2(), R = z(M, !0);
            I(M), Ce(() => Re(R, d())), O(A, M);
          }
        ), I(E), pe(2), I(T), O(x, T);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => g = x,
    () => g
  ), I(_), O(e, _), ue(p);
}
Xn(["click"]);
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
const co = Math.min, Sr = Math.max, hi = Math.round, fn = (e) => ({
  x: e,
  y: e
}), g2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, v2 = {
  start: "end",
  end: "start"
};
function Es(e, t, n) {
  return Sr(e, co(t, n));
}
function Po(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dr(e) {
  return e.split("-")[0];
}
function $o(e) {
  return e.split("-")[1];
}
function Pd(e) {
  return e === "x" ? "y" : "x";
}
function va(e) {
  return e === "y" ? "height" : "width";
}
const p2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Vn(e) {
  return p2.has(dr(e)) ? "y" : "x";
}
function pa(e) {
  return Pd(Vn(e));
}
function m2(e, t, n) {
  n === void 0 && (n = !1);
  const r = $o(e), o = pa(e), i = va(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = gi(s)), [s, gi(s)];
}
function y2(e) {
  const t = gi(e);
  return [Ss(e), t, Ss(t)];
}
function Ss(e) {
  return e.replace(/start|end/g, (t) => v2[t]);
}
const kl = ["left", "right"], El = ["right", "left"], w2 = ["top", "bottom"], _2 = ["bottom", "top"];
function x2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? El : kl : t ? kl : El;
    case "left":
    case "right":
      return t ? w2 : _2;
    default:
      return [];
  }
}
function b2(e, t, n, r) {
  const o = $o(e);
  let i = x2(dr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ss)))), i;
}
function gi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => g2[t]);
}
function C2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $d(e) {
  return typeof e != "number" ? C2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vi(e) {
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
function Sl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Vn(t), s = pa(t), a = va(s), l = dr(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const k2 = async (e, t, n) => {
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
  } = Sl(c, r, l), f = r, g = {}, v = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: _,
      fn: b
    } = a[p], {
      x: S,
      y: x,
      data: k,
      reset: T
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
    d = S ?? d, h = x ?? h, g = {
      ...g,
      [_]: {
        ...g[_],
        ...k
      }
    }, T && v <= 50 && (v++, typeof T == "object" && (T.placement && (f = T.placement), T.rects && (c = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: d,
      y: h
    } = Sl(c, f, l)), p = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Td(e, t) {
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
  } = Po(t, e), v = $d(g), _ = a[f ? h === "floating" ? "reference" : "floating" : h], b = vi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(_))) == null || n ? _ : _.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), S = h === "floating" ? {
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
  }, T = vi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: S,
    offsetParent: x,
    strategy: l
  }) : S);
  return {
    top: (b.top - T.top + v.top) / k.y,
    bottom: (T.bottom - b.bottom + v.bottom) / k.y,
    left: (b.left - T.left + v.left) / k.x,
    right: (T.right - b.right + v.right) / k.x
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
      element: c,
      padding: d = 0
    } = Po(e, t) || {};
    if (c == null)
      return {};
    const h = $d(d), f = {
      x: n,
      y: r
    }, g = pa(o), v = va(g), p = await s.getDimensions(c), _ = g === "y", b = _ ? "top" : "left", S = _ ? "bottom" : "right", x = _ ? "clientHeight" : "clientWidth", k = i.reference[v] + i.reference[g] - f[g] - i.floating[v], T = f[g] - i.reference[g], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let A = E ? E[x] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(E))) && (A = a.floating[x] || i.floating[v]);
    const M = k / 2 - T / 2, R = A / 2 - p[v] / 2 - 1, X = co(h[b], R), J = co(h[S], R), C = X, P = A - p[v] - J, m = A / 2 - p[v] / 2 + M, $ = Es(C, m, P), D = !l.arrow && $o(o) != null && m !== $ && i.reference[v] / 2 - (m < C ? X : J) - p[v] / 2 < 0, L = D ? m < C ? m - C : m - P : 0;
    return {
      [g]: f[g] + L,
      data: {
        [g]: $,
        centerOffset: m - $ - L,
        ...D && {
          alignmentOffset: L
        }
      },
      reset: D
    };
  }
}), S2 = function(e) {
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
        ..._
      } = Po(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = dr(o), S = Vn(a), x = dr(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), T = f || (x || !p ? [gi(a)] : y2(a)), E = v !== "none";
      !f && E && T.push(...b2(a, p, v, k));
      const A = [a, ...T], M = await Td(t, _), R = [];
      let X = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && R.push(M[b]), h) {
        const m = m2(o, s, k);
        R.push(M[m[0]], M[m[1]]);
      }
      if (X = [...X, {
        placement: o,
        overflows: R
      }], !R.every((m) => m <= 0)) {
        var J, C;
        const m = (((J = i.flip) == null ? void 0 : J.index) || 0) + 1, $ = A[m];
        if ($ && (!(h === "alignment" ? S !== Vn($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        X.every((F) => Vn(F.placement) === S ? F.overflows[0] > 0 : !0)))
          return {
            data: {
              index: m,
              overflows: X
            },
            reset: {
              placement: $
            }
          };
        let D = (C = X.filter((L) => L.overflows[0] <= 0).sort((L, F) => L.overflows[1] - F.overflows[1])[0]) == null ? void 0 : C.placement;
        if (!D)
          switch (g) {
            case "bestFit": {
              var P;
              const L = (P = X.filter((F) => {
                if (E) {
                  const K = Vn(F.placement);
                  return K === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((K) => K > 0).reduce((K, H) => K + H, 0)]).sort((F, K) => F[1] - K[1])[0]) == null ? void 0 : P[0];
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
}, N2 = /* @__PURE__ */ new Set(["left", "top"]);
async function P2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = dr(n), a = $o(n), l = Vn(n) === "y", c = N2.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = Po(t, e);
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
const $2 = function(e) {
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
      } = t, l = await P2(t, e);
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
}, T2 = function(e) {
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
          fn: (_) => {
            let {
              x: b,
              y: S
            } = _;
            return {
              x: b,
              y: S
            };
          }
        },
        ...l
      } = Po(e, t), c = {
        x: n,
        y: r
      }, d = await Td(t, l), h = Vn(dr(o)), f = Pd(h);
      let g = c[f], v = c[h];
      if (i) {
        const _ = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", S = g + d[_], x = g - d[b];
        g = Es(S, g, x);
      }
      if (s) {
        const _ = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", S = v + d[_], x = v - d[b];
        v = Es(S, v, x);
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
function Li() {
  return typeof window < "u";
}
function Kr(e) {
  return Dd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function At(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dn(e) {
  var t;
  return (t = (Dd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Dd(e) {
  return Li() ? e instanceof Node || e instanceof At(e).Node : !1;
}
function Gt(e) {
  return Li() ? e instanceof Element || e instanceof At(e).Element : !1;
}
function gn(e) {
  return Li() ? e instanceof HTMLElement || e instanceof At(e).HTMLElement : !1;
}
function Nl(e) {
  return !Li() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof At(e).ShadowRoot;
}
const D2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function To(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !D2.has(o);
}
const A2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function O2(e) {
  return A2.has(Kr(e));
}
const M2 = [":popover-open", ":modal"];
function Vi(e) {
  return M2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const H2 = ["transform", "translate", "scale", "rotate", "perspective"], L2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], V2 = ["paint", "layout", "strict", "content"];
function ma(e) {
  const t = ya(), n = Gt(e) ? Ut(e) : e;
  return H2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || L2.some((r) => (n.willChange || "").includes(r)) || V2.some((r) => (n.contain || "").includes(r));
}
function I2(e) {
  let t = Fn(e);
  for (; gn(t) && !Rr(t); ) {
    if (ma(t))
      return t;
    if (Vi(t))
      return null;
    t = Fn(t);
  }
  return null;
}
function ya() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const z2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Rr(e) {
  return z2.has(Kr(e));
}
function Ut(e) {
  return At(e).getComputedStyle(e);
}
function Ii(e) {
  return Gt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Fn(e) {
  if (Kr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Nl(e) && e.host || // Fallback.
    Dn(e)
  );
  return Nl(t) ? t.host : t;
}
function Ad(e) {
  const t = Fn(e);
  return Rr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gn(t) && To(t) ? t : Ad(t);
}
function Od(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Ad(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = At(o);
  return i ? (Ns(s), t.concat(s, s.visualViewport || [], To(o) ? o : [], [])) : t.concat(o, Od(o, []));
}
function Ns(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Md(e) {
  const t = Ut(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = gn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = hi(n) !== i || hi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Hd(e) {
  return Gt(e) ? e : e.contextElement;
}
function Nr(e) {
  const t = Hd(e);
  if (!gn(t))
    return fn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Md(t);
  let s = (i ? hi(n.width) : n.width) / r, a = (i ? hi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const R2 = /* @__PURE__ */ fn(0);
function Ld(e) {
  const t = At(e);
  return !ya() || !t.visualViewport ? R2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function B2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== At(e) ? !1 : t;
}
function uo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Hd(e);
  let s = fn(1);
  t && (r ? Gt(r) && (s = Nr(r)) : s = Nr(e));
  const a = B2(i, n, r) ? Ld(i) : fn(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = At(i), g = r && Gt(r) ? At(r) : r;
    let v = f, p = Ns(v);
    for (; p && r && g !== v; ) {
      const _ = Nr(p), b = p.getBoundingClientRect(), S = Ut(p), x = b.left + (p.clientLeft + parseFloat(S.paddingLeft)) * _.x, k = b.top + (p.clientTop + parseFloat(S.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += x, c += k, v = At(p), p = Ns(v);
    }
  }
  return vi({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function zi(e, t) {
  const n = Ii(e).scrollLeft;
  return t ? t.left + n : uo(Dn(e)).left + n;
}
function Vd(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - zi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function F2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Dn(r), a = t ? Vi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = fn(1);
  const d = fn(0), h = gn(r);
  if ((h || !h && !i) && ((Kr(r) !== "body" || To(s)) && (l = Ii(r)), gn(r))) {
    const g = uo(r);
    c = Nr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !h && !i ? Vd(s, l) : fn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function K2(e) {
  return Array.from(e.getClientRects());
}
function Z2(e) {
  const t = Dn(e), n = Ii(e), r = e.ownerDocument.body, o = Sr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Sr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + zi(e);
  const a = -n.scrollTop;
  return Ut(r).direction === "rtl" && (s += Sr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Pl = 25;
function Y2(e, t) {
  const n = At(e), r = Dn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = ya();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = zi(r);
  if (c <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), g = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, v = Math.abs(r.clientWidth - h.clientWidth - g);
    v <= Pl && (i -= v);
  } else c <= Pl && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const W2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function X2(e, t) {
  const n = uo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = gn(e) ? Nr(e) : fn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function $l(e, t, n) {
  let r;
  if (t === "viewport")
    r = Y2(e, n);
  else if (t === "document")
    r = Z2(Dn(e));
  else if (Gt(t))
    r = X2(t, n);
  else {
    const o = Ld(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return vi(r);
}
function Id(e, t) {
  const n = Fn(e);
  return n === t || !Gt(n) || Rr(n) ? !1 : Ut(n).position === "fixed" || Id(n, t);
}
function q2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Od(e, []).filter((a) => Gt(a) && Kr(a) !== "body"), o = null;
  const i = Ut(e).position === "fixed";
  let s = i ? Fn(e) : e;
  for (; Gt(s) && !Rr(s); ) {
    const a = Ut(s), l = ma(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && W2.has(o.position) || To(s) && !l && Id(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Fn(s);
  }
  return t.set(e, r), r;
}
function j2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Vi(t) ? [] : q2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const h = $l(t, d, o);
    return c.top = Sr(h.top, c.top), c.right = co(h.right, c.right), c.bottom = co(h.bottom, c.bottom), c.left = Sr(h.left, c.left), c;
  }, $l(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function G2(e) {
  const {
    width: t,
    height: n
  } = Md(e);
  return {
    width: t,
    height: n
  };
}
function U2(e, t, n) {
  const r = gn(t), o = Dn(t), i = n === "fixed", s = uo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = fn(0);
  function c() {
    l.x = zi(o);
  }
  if (r || !r && !i)
    if ((Kr(t) !== "body" || To(o)) && (a = Ii(t)), r) {
      const g = uo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Vd(o, a) : fn(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Qi(e) {
  return Ut(e).position === "static";
}
function Tl(e, t) {
  if (!gn(e) || Ut(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Dn(e) === n && (n = n.ownerDocument.body), n;
}
function zd(e, t) {
  const n = At(e);
  if (Vi(e))
    return n;
  if (!gn(e)) {
    let o = Fn(e);
    for (; o && !Rr(o); ) {
      if (Gt(o) && !Qi(o))
        return o;
      o = Fn(o);
    }
    return n;
  }
  let r = Tl(e, t);
  for (; r && O2(r) && Qi(r); )
    r = Tl(r, t);
  return r && Rr(r) && Qi(r) && !ma(r) ? n : r || I2(e) || n;
}
const J2 = async function(e) {
  const t = this.getOffsetParent || zd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: U2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Q2(e) {
  return Ut(e).direction === "rtl";
}
const ey = {
  convertOffsetParentRelativeRectToViewportRelativeRect: F2,
  getDocumentElement: Dn,
  getClippingRect: j2,
  getOffsetParent: zd,
  getElementRects: J2,
  getClientRects: K2,
  getDimensions: G2,
  getScale: Nr,
  isElement: Gt,
  isRTL: Q2
}, ty = $2, ny = T2, ry = S2, oy = E2, iy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ey,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return k2(e, t, {
    ...o,
    platform: i
  });
}, sy = ({
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
    iy(e, c, {
      placement: r,
      middleware: [
        ty(o),
        // 手动偏移配置
        ry(i),
        //自动翻转
        ny(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [oy({ element: d })] : []
      ]
    }).then(({ x: b, y: S, placement: x, middlewareData: k }) => {
      if (Object.assign(c.style, {
        left: `${b}px`,
        top: `${S}px`
      }), l) {
        const { x: T, y: E } = k.arrow, A = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: T != null ? `${T}px` : "",
          top: E != null ? `${E}px` : "",
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
  function _(b) {
    c.contains(b.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, p);
  }), document.addEventListener("click", _), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, p);
      }), document.removeEventListener("click", _);
    },
    hide() {
      v();
    },
    isVisible() {
      return f;
    }
  };
};
var ay = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function jn(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  Pn(() => (a = sy({
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
      n(p), y();
    },
    get floating() {
      return r();
    },
    set floating(p) {
      r(p), y();
    },
    get placement() {
      return o();
    },
    set placement(p = "bottom") {
      o(p), y();
    }
  }, d = ay(), h = z(d), f = z(h);
  je(f, n), I(h), $t(h, (p) => i = p, () => i);
  var g = V(h, 2), v = z(g);
  return je(v, r), I(g), $t(g, (p) => s = p, () => s), I(d), O(e, d), ue(c);
}
se(jn, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Oe(e, t) {
  ce(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(c) {
      n(c), y();
    },
    get level() {
      return r();
    },
    set level(c = 1) {
      r(c), y();
    },
    get mt() {
      return o();
    },
    set mt(c) {
      o(c), y();
    },
    get mb() {
      return i();
    },
    set mb(c) {
      i(c), y();
    }
  }, a = Se(), l = ie(a);
  return Ph(l, () => `h${r()}`, !1, (c, d) => {
    nt(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = Se(), f = ie(h);
    je(f, () => n() ?? ht), O(d, h);
  }), O(e, a), ue(s);
}
se(Oe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var ly = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const cy = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Do(e, t) {
  ce(t, !0), Ve(e, cy);
  const n = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ae(e, Be(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = ly();
      O(r, i);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Do, {}, [], [], !0);
const uy = () => ({ deleteNode: (t) => {
  Me.removeNode(t), Me.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Sn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, dy = () => ({ copyNode: (t) => {
  const n = Me.getNode(t);
  if (n) {
    const r = Sn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Me.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), Ge = () => zn("svelteflow__node_id"), Kn = () => zn("tinyflow_options");
var fy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), hy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), gy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), vy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), py = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, my = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, yy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), wy = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), _y = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), xy = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), by = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Cy = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Ft(e, t) {
  ce(t, !0), Ve(e, Cy);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), c = w(t, "allowDelete", 7, !0), d = w(t, "allowSetting", 7, !0), h = w(t, "allowSettingOfCondition", 7, !0), f = w(t, "showSourceHandle", 7, !0), g = w(t, "showTargetHandle", 7, !0), v = w(t, "onCollapse", 7);
  let p = n().expand ? ["key"] : [];
  const { updateNodeData: _, getNode: b } = ot(), S = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = uy(), { copyNode: k } = dy(), T = Kn(), E = () => {
    T.onNodeExecute?.(b(r()));
  };
  let A = Ge();
  var M = {
    get data() {
      return n();
    },
    set data(H) {
      n(H), y();
    },
    get id() {
      return r();
    },
    set id(H = "") {
      r(H), y();
    },
    get icon() {
      return o();
    },
    set icon(H) {
      o(H), y();
    },
    get handle() {
      return i();
    },
    set handle(H) {
      i(H), y();
    },
    get children() {
      return s();
    },
    set children(H) {
      s(H), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(H = !0) {
      a(H), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(H = !0) {
      l(H), y();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete(H = !0) {
      c(H), y();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(H = !0) {
      d(H), y();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(H = !0) {
      h(H), y();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(H = !0) {
      f(H), y();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(H = !0) {
      g(H), y();
    },
    get onCollapse() {
      return v();
    },
    set onCollapse(H) {
      v(H), y();
    }
  }, R = by(), X = ie(R);
  {
    var J = (H) => {
      Cd(H, {
        get position() {
          return me.Top;
        },
        align: "start",
        children: (W, Y) => {
          var ee = xy(), j = z(ee);
          {
            var B = (ae) => {
              Ae(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (re, de) => {
                  var ge = fy();
                  O(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(j, (ae) => {
              c() && ae(B);
            });
          }
          var Q = V(j, 2);
          {
            var q = (ae) => {
              Ae(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (re, de) => {
                  var ge = hy();
                  O(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(Q, (ae) => {
              l() && ae(q);
            });
          }
          var ne = V(Q, 2);
          {
            var U = (ae) => {
              Ae(ae, {
                class: "tf-node-toolbar-item",
                onclick: E,
                children: (re, de) => {
                  var ge = gy();
                  O(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(ne, (ae) => {
              a() && ae(U);
            });
          }
          var we = V(ne, 2);
          {
            var oe = (ae) => {
              jn(ae, {
                placement: "bottom",
                floating: (de) => {
                  var ge = wy(), _e = z(ge), fe = V(z(_e));
                  Qe(fe, {
                    style: "width: 100%;",
                    onchange: (ze) => {
                      const Ue = ze.target.value;
                      _(A, { title: Ue });
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
                      const Ue = ze.target.value;
                      _(A, { description: Ue });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(be);
                  var Z = V(be, 2);
                  {
                    var Ye = (ze) => {
                      var Ue = vy(), he = V(z(Ue));
                      Fe(he, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ze) => {
                          const at = Ze.target.value;
                          _(A, { condition: at });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(Ue), O(ze, Ue);
                    };
                    le(Z, (ze) => {
                      h() && ze(Ye);
                    });
                  }
                  var De = V(Z, 2), He = V(z(De), 2);
                  rr(He), He.__change = [py, _, A], I(De);
                  var Le = V(De, 2), it = V(z(Le), 2);
                  rr(it), it.__change = [my, _, A], I(Le);
                  var st = V(Le, 2);
                  {
                    var Lt = (ze) => {
                      var Ue = yy(), he = ie(Ue), Ze = V(z(he));
                      {
                        let bt = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                        Fe(Ze, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (rn) => {
                            const On = rn.target.value;
                            _(A, { loopIntervalMs: On });
                          },
                          get value() {
                            return u(bt);
                          }
                        });
                      }
                      I(he);
                      var at = V(he, 2), et = V(z(at));
                      {
                        let bt = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                        Fe(et, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (rn) => {
                            const On = rn.target.value;
                            _(A, { maxLoopCount: On });
                          },
                          get value() {
                            return u(bt);
                          }
                        });
                      }
                      I(at);
                      var Tt = V(at, 2), Xe = V(z(Tt));
                      Fe(Xe, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (bt) => {
                          const rn = bt.target.value;
                          _(A, { loopBreakCondition: rn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(Tt), O(ze, Ue);
                    };
                    le(st, (ze) => {
                      n().loopEnable && ze(Lt);
                    });
                  }
                  I(ge), Ce(() => {
                    Oa(He, !!n().async), Oa(it, !!n().loopEnable);
                  }), O(de, ge);
                },
                children: (de, ge) => {
                  Ae(de, {
                    class: "tf-node-toolbar-item",
                    children: (_e, fe) => {
                      var be = _y();
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
          I(ee), O(W, ee);
        },
        $$slots: { default: !0 }
      });
    };
    le(X, (H) => {
      (a() || l() || c()) && H(J);
    });
  }
  var C = V(X, 2), P = V(z(C), 2), m = z(P);
  Nd(m, {
    get items() {
      return u(S);
    },
    get activeKeys() {
      return p;
    },
    onChange: (H, W) => {
      _(r(), { expand: W?.includes("key") }), v()?.(W?.includes("key") ? "key" : "");
    }
  }), I(P), I(C);
  var $ = V(C, 2);
  {
    var D = (H) => {
      Bn(H, {
        type: "target",
        get position() {
          return me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    le($, (H) => {
      g() && H(D);
    });
  }
  var L = V($, 2);
  {
    var F = (H) => {
      Bn(H, {
        type: "source",
        get position() {
          return me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    le(L, (H) => {
      f() && H(F);
    });
  }
  var K = V(L, 2);
  return je(K, () => i() ?? ht), O(e, R), ue(M);
}
Xn(["change"]);
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
var ky = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), Ey = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), Sy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Ny = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const Py = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  ce(t, !0), Ve(e, Py);
  const n = w(t, "parameter", 7), r = w(t, "index", 7);
  let o = Ge(), i = Tn(o), s = /* @__PURE__ */ N(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ot(), l = (M, R) => {
    a(o, (X) => {
      let J = X.data.parameters;
      return J[r()][M] = R, { parameters: J };
    });
  }, c = (M, R) => {
    const X = R.target.value;
    l(M, X);
  }, d = (M) => {
    const R = M.target.value;
    l("name", R);
  }, h = (M) => {
    const R = M.target.checked;
    l("required", R);
  }, f = (M) => {
    const R = M.value;
    l("formType", R);
  }, g = (M) => {
    const R = M.value;
    l("contentType", R);
  };
  let v;
  const p = () => {
    a(o, (M) => {
      let R = M.data.parameters;
      return R.splice(r(), 1), { parameters: [...R] };
    }), v?.hide();
  };
  var _ = {
    get parameter() {
      return n();
    },
    set parameter(M) {
      n(M), y();
    },
    get index() {
      return r();
    },
    set index(M) {
      r(M), y();
    }
  }, b = Ny(), S = ie(b), x = z(S);
  Qe(x, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), I(S);
  var k = V(S, 2), T = z(k);
  kd(T, {
    get checked() {
      return u(s).required;
    },
    onchange: h
  }), I(k);
  var E = V(k, 2), A = z(E);
  return $t(
    jn(A, {
      placement: "bottom",
      floating: (R) => {
        var X = Ey(), J = z(X), C = V(z(J));
        {
          let B = /* @__PURE__ */ N(() => u(s).contentType ? [u(s).contentType] : []);
          ut(C, {
            get items() {
              return ga;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(B);
            },
            onSelect: g
          });
        }
        I(J);
        var P = V(J, 2), m = V(z(P));
        {
          let B = /* @__PURE__ */ N(() => u(s).formType ? [u(s).formType] : []);
          ut(m, {
            get items() {
              return Rm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return u(B);
            },
            onSelect: f
          });
        }
        I(P);
        var $ = V(P, 2);
        {
          var D = (B) => {
            var Q = ky(), q = V(z(Q));
            {
              let ne = /* @__PURE__ */ N(() => u(s).enums?.join(`
`));
              Fe(q, {
                rows: 3,
                style: "width: 100%;",
                onchange: (U) => {
                  l("enums", U.target?.value.trim().split(`
`));
                },
                get value() {
                  return u(ne);
                },
                placeholder: "一行一个选项"
              });
            }
            I(Q), O(B, Q);
          };
          le($, (B) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && B(D);
          });
        }
        var L = V($, 2), F = V(z(L));
        Fe(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (B) => {
            c("formLabel", B);
          },
          get value() {
            return u(s).formLabel;
          }
        }), I(L);
        var K = V(L, 2), H = V(z(K));
        Fe(H, {
          rows: 2,
          style: "width: 100%;",
          onchange: (B) => {
            c("formDescription", B);
          },
          get value() {
            return u(s).formDescription;
          }
        }), I(K);
        var W = V(K, 2), Y = V(z(W));
        Fe(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (B) => {
            c("formPlaceholder", B);
          },
          get value() {
            return u(s).formPlaceholder;
          }
        }), I(W);
        var ee = V(W, 2), j = z(ee);
        Ae(j, {
          onclick: p,
          children: (B, Q) => {
            pe();
            var q = ke("删除");
            O(B, q);
          },
          $$slots: { default: !0 }
        }), I(ee), I(X), O(R, X);
      },
      children: (R, X) => {
        Ae(R, {
          class: "input-btn-more",
          children: (J, C) => {
            var P = Sy();
            O(J, P);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (R) => v = R,
    () => v
  ), I(E), O(e, b), ue(_);
}
se(Rd, { parameter: {}, index: {} }, [], [], !0);
var $y = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), Ty = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Dy = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Ay = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Bd(e, t) {
  ce(t, !0), Ve(e, Ay);
  let n = Ge(), r = Tn(n), o = /* @__PURE__ */ N(() => [...r?.current?.data?.parameters || []]);
  var i = Dy(), s = z(i);
  {
    var a = (c) => {
      var d = $y();
      pe(4), O(c, d);
    };
    le(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = V(s, 2);
  gt(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, h) => {
      Rd(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(h);
        }
      });
    },
    (c) => {
      var d = Ty();
      O(c, d);
    }
  ), I(i), O(e, i), ue();
}
se(Bd, {}, [], [], !0);
const fo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Sn()), fo(t.children);
}), e), nn = () => {
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
var Oy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), My = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Ly = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Fd(e, t) {
  ce(t, !0), Ve(e, Ly);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
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
      var c = Oy();
      O(l, c);
    },
    children: (l, c) => {
      var d = Hy(), h = ie(d), f = z(h);
      Oe(f, {
        level: 3,
        children: (p, _) => {
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
        children: (p, _) => {
          var b = My();
          O(p, b);
        },
        $$slots: { default: !0 }
      }), I(h);
      var v = V(h, 2);
      Bd(v, {}), O(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(Fd, { data: {} }, [], [], !0);
const Kd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Kd(e, r.source, n));
}, Zd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Zd(r.children, t + "." + r.name, n)
})), Dl = (e, t, n) => {
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
}, Yd = (e = !1) => {
  const t = Ge(), n = Tn(t), r = /* @__PURE__ */ N(tn), o = /* @__PURE__ */ N(() => u(r).nodes), i = /* @__PURE__ */ N(() => u(r).edges), s = /* @__PURE__ */ N(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ N(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const f = Dl(d, h, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Kd(d, t, u(i));
      for (const h of u(o))
        if (d.includes(h.id)) {
          const f = h.parentId === n.current.id, g = Dl(h, f, c);
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
var Vy = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Iy = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), zy = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const Ry = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Wd(e, t) {
  ce(t, !0), Ve(e, Ry), Pn(() => {
    u(c).refType || v({ value: "ref" });
  });
  const n = w(t, "parameter", 7), r = w(t, "index", 7), o = w(t, "dataKeyName", 7), i = w(t, "useChildrenOnly", 7), s = w(t, "showContentType", 7, !1);
  let a = Ge(), l = Tn(a), c = /* @__PURE__ */ N(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ot(), h = (P, m) => {
    d(a, ($) => {
      let D = $.data?.[o()];
      return D[r()] = { ...D[r()], [P]: m }, { [o()]: D };
    });
  }, f = (P, m) => {
    const $ = m.target.value;
    h(P, $);
  }, g = (P) => {
    const m = P.value;
    h("ref", m);
  }, v = (P) => {
    const m = P.value;
    h("refType", m);
  }, p = (P) => {
    const m = P.value;
    h("contentType", m);
  };
  let _;
  const b = () => {
    d(a, (P) => {
      let m = P.data?.[o()];
      return m.splice(r(), 1), { [o()]: [...m] };
    }), _?.hide();
  };
  let S = Yd(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(P) {
      n(P), y();
    },
    get index() {
      return r();
    },
    set index(P) {
      r(P), y();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(P) {
      o(P), y();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(P) {
      i(P), y();
    },
    get showContentType() {
      return s();
    },
    set showContentType(P = !1) {
      s(P), y();
    }
  }, k = zy(), T = ie(k), E = z(T);
  {
    let P = /* @__PURE__ */ N(() => u(c).nameDisabled === !0);
    Qe(E, {
      style: "width: 100%;",
      get value() {
        return u(c).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(P);
      },
      oninput: (m) => f("name", m)
    });
  }
  I(T);
  var A = V(T, 2), M = z(A);
  {
    var R = (P) => {
      Qe(P, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (m) => f("value", m)
      });
    }, X = (P) => {
      var m = Se(), $ = ie(m);
      {
        var D = (L) => {
          {
            let F = /* @__PURE__ */ N(() => [u(c).ref]);
            ut(L, {
              get items() {
                return S.current;
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
          $,
          (L) => {
            u(c).refType !== "input" && L(D);
          },
          !0
        );
      }
      O(P, m);
    };
    le(M, (P) => {
      u(c).refType === "fixed" ? P(R) : P(X, !1);
    });
  }
  I(A);
  var J = V(A, 2), C = z(J);
  return $t(
    jn(C, {
      placement: "bottom",
      floating: (m) => {
        var $ = Iy(), D = z($), L = V(z(D));
        {
          let Q = /* @__PURE__ */ N(() => u(c).refType ? [u(c).refType] : []);
          ut(L, {
            get items() {
              return zm;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(Q);
            },
            onSelect: v
          });
        }
        I(D);
        var F = V(D, 2);
        {
          var K = (Q) => {
            var q = Vy(), ne = V(z(q));
            {
              let U = /* @__PURE__ */ N(() => u(c).contentType ? [u(c).contentType] : []);
              ut(ne, {
                get items() {
                  return ga;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return u(U);
                },
                onSelect: p
              });
            }
            I(q), O(Q, q);
          };
          le(F, (Q) => {
            s() && Q(K);
          });
        }
        var H = V(F, 2), W = V(z(H));
        Fe(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Q) => {
            f("defaultValue", Q);
          },
          get value() {
            return u(c).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), I(H);
        var Y = V(H, 2), ee = V(z(Y));
        Fe(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Q) => {
            f("description", Q);
          },
          get value() {
            return u(c).description;
          },
          placeholder: "请输入参数描述"
        }), I(Y);
        var j = V(Y, 2), B = z(j);
        Ae(B, {
          onclick: b,
          children: (Q, q) => {
            pe();
            var ne = ke("删除");
            O(Q, ne);
          },
          $$slots: { default: !0 }
        }), I(j), I($), O(m, $);
      },
      children: (m, $) => {
        Do(m, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (m) => _ = m,
    () => _
  ), I(J), O(e, k), ue(x);
}
se(
  Wd,
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
var By = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Fy = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Ky = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const Zy = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function wt(e, t) {
  ce(t, !0), Ve(e, Zy);
  const n = w(t, "noneParameterText", 7, "无输入参数"), r = w(t, "dataKeyName", 7, "parameters"), o = w(t, "useChildrenOnly", 7), i = w(t, "showContentType", 7, !1);
  let s = Ge(), a = Tn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[r()] || []]);
  var c = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(v = "无输入参数") {
      n(v), y();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(v = "parameters") {
      r(v), y();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(v) {
      o(v), y();
    },
    get showContentType() {
      return i();
    },
    set showContentType(v = !1) {
      i(v), y();
    }
  }, d = Ky(), h = z(d);
  {
    var f = (v) => {
      var p = By();
      pe(4), O(v, p);
    };
    le(h, (v) => {
      u(l).length !== 0 && v(f);
    });
  }
  var g = V(h, 2);
  return gt(
    g,
    19,
    () => u(l),
    (v) => v.id,
    (v, p, _) => {
      Wd(v, {
        get parameter() {
          return u(p);
        },
        get index() {
          return u(_);
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
      var p = Fy(), _ = z(p, !0);
      I(p), Ce(() => Re(_, n())), O(v, p);
    }
  ), I(d), O(e, d), ue(c);
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
var Yy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Wy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const qy = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Xd(e, t) {
  ce(t, !0), Ve(e, qy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
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
        var c = Yy();
        O(l, c);
      },
      children: (l, c) => {
        var d = Xy(), h = ie(d), f = z(h);
        Oe(f, {
          level: 3,
          children: (p, _) => {
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
          children: (p, _) => {
            var b = Wy();
            O(p, b);
          },
          $$slots: { default: !0 }
        }), I(h);
        var v = V(h, 2);
        wt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), O(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(Xd, { data: {} }, [], [], !0);
const es = (e) => JSON.parse(JSON.stringify(e));
var jy = /* @__PURE__ */ ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Gy = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Uy = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Jy = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Qy = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  ce(t, !0), Ve(e, Qy);
  const n = w(t, "parameter", 7), r = w(t, "position", 7), o = w(t, "dataKeyName", 7), i = w(t, "placeholder", 7, "请输入参数值");
  let s = Ge(), a = Tn(s), l = /* @__PURE__ */ N(() => {
    let C = a?.current?.data?.[o()], P;
    if (C && r().length > 0) {
      let m = C;
      for (let $ = 0; $ < r().length; $++) {
        const D = r()[$];
        $ == r().length - 1 ? P = m[D] : m = m[D].children;
      }
    }
    return { ...n(), ...P };
  });
  const { updateNodeData: c } = ot(), d = (C, P) => {
    c(s, (m) => {
      const $ = m.data?.[o()];
      if ($ && r().length > 0) {
        let D = $;
        for (let L = 0; L < r().length; L++) {
          const F = r()[L];
          L == r().length - 1 ? D[F] = { ...D[F], [C]: P } : D = D[F].children;
        }
      }
      return { [o()]: [...es($)] };
    });
  }, h = (C, P) => {
    const m = P.target.value;
    d(C, m);
  }, f = (C) => {
    const P = C.value;
    d("dataType", P);
  };
  let g;
  const v = () => {
    c(s, (C) => {
      let P = C.data?.[o()];
      if (P && r().length > 0) {
        let m = P;
        for (let $ = 0; $ < r().length; $++) {
          const D = r()[$];
          $ == r().length - 1 ? m.splice(D, 1) : m = m[D].children;
        }
      }
      return { [o()]: [...es(P)] };
    }), g?.hide();
  }, p = () => {
    c(s, (C) => {
      let P = C.data?.[o()];
      if (P && r().length > 0) {
        let m = P;
        for (let $ = 0; $ < r().length; $++) {
          const D = r()[$];
          $ == r().length - 1 ? m[D].children ? m[D].children.push({ id: Sn(), name: "newParam", dataType: "String" }) : m[D].children = [{ id: Sn(), name: "newParam", dataType: "String" }] : m = m[D].children;
        }
      }
      return { [o()]: [...es(P)] };
    });
  };
  var _ = {
    get parameter() {
      return n();
    },
    set parameter(C) {
      n(C), y();
    },
    get position() {
      return r();
    },
    set position(C) {
      r(C), y();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(C) {
      o(C), y();
    },
    get placeholder() {
      return i();
    },
    set placeholder(C = "请输入参数值") {
      i(C), y();
    }
  }, b = Jy(), S = ie(b), x = z(S);
  {
    var k = (C) => {
      var P = Se(), m = ie(P);
      gt(m, 17, r, Or, ($, D) => {
        pe();
        var L = ke(" ");
        O($, L);
      }), O(C, P);
    };
    le(x, (C) => {
      r().length > 1 && C(k);
    });
  }
  var T = V(x, 2);
  {
    let C = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
    Qe(T, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (P) => {
        h("name", P);
      },
      get disabled() {
        return u(C);
      }
    });
  }
  I(S);
  var E = V(S, 2), A = z(E);
  {
    let C = /* @__PURE__ */ N(() => u(l).dataTypeItems || Im), P = /* @__PURE__ */ N(() => u(l).dataType ? [u(l).dataType] : []), m = /* @__PURE__ */ N(() => u(l).dataTypeDisabled === !0);
    ut(A, {
      get items() {
        return u(C);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return u(P);
      },
      get disabled() {
        return u(m);
      },
      onSelect: f
    });
  }
  var M = V(A, 2);
  {
    var R = (C) => {
      Ae(C, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: p,
        children: (P, m) => {
          var $ = jy();
          O(P, $);
        },
        $$slots: { default: !0 }
      });
    };
    le(M, (C) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && C(R);
    });
  }
  I(E);
  var X = V(E, 2), J = z(X);
  return $t(
    jn(J, {
      placement: "bottom",
      floating: (P) => {
        var m = Uy(), $ = z(m), D = V(z($));
        {
          let W = /* @__PURE__ */ N(() => u(l).defaultValue || "");
          Fe(D, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return u(W);
            },
            onchange: (Y) => {
              h("defaultValue", Y);
            }
          });
        }
        I($);
        var L = V($, 2), F = V(z(L));
        {
          let W = /* @__PURE__ */ N(() => u(l).description || "");
          Fe(F, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return u(W);
            },
            onchange: (Y) => {
              h("description", Y);
            }
          });
        }
        I(L);
        var K = V(L, 2);
        {
          var H = (W) => {
            var Y = Gy(), ee = z(Y);
            Ae(ee, {
              onclick: v,
              children: (j, B) => {
                pe();
                var Q = ke("删除");
                O(j, Q);
              },
              $$slots: { default: !0 }
            }), I(Y), O(W, Y);
          };
          le(K, (W) => {
            u(l).deleteDisabled !== !0 && W(H);
          });
        }
        I(m), O(P, m);
      },
      children: (P, m) => {
        Do(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => g = P,
    () => g
  ), I(X), O(e, b), ue(_);
}
se(
  qd,
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
var ew = /* @__PURE__ */ te("<!> <!>", 1), tw = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), nw = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), rw = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const ow = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function An(e, t) {
  ce(t, !0), Ve(e, ow);
  const n = (v, p = ht, _ = ht) => {
    var b = Se(), S = ie(b);
    gt(
      S,
      19,
      p,
      (x) => `${x.id}_${x.children ? x.children.length : 0}`,
      (x, k, T) => {
        var E = ew(), A = ie(E);
        {
          let X = /* @__PURE__ */ N(() => [..._(), u(T)]);
          qd(A, {
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
          var R = (X) => {
            {
              let J = /* @__PURE__ */ N(() => [..._(), u(T)]);
              n(X, () => u(k).children, () => u(J));
            }
          };
          le(M, (X) => {
            u(k).children && X(R);
          });
        }
        O(x, E);
      },
      (x) => {
        var k = Se(), T = ie(k);
        {
          var E = (A) => {
            var M = tw(), R = z(M, !0);
            I(M), Ce(() => Re(R, r())), O(A, M);
          };
          le(T, (A) => {
            _().length === 0 && A(E);
          });
        }
        O(x, k);
      }
    ), O(v, b);
  }, r = w(t, "noneParameterText", 7, "无输出参数"), o = w(t, "dataKeyName", 7, "outputDefs"), i = w(t, "placeholder", 7, "请输入参数名称");
  let s = Ge(), a = Tn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[o()] || []]);
  var c = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(v = "无输出参数") {
      r(v), y();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(v = "outputDefs") {
      o(v), y();
    },
    get placeholder() {
      return i();
    },
    set placeholder(v = "请输入参数名称") {
      i(v), y();
    }
  }, d = rw(), h = z(d);
  {
    var f = (v) => {
      var p = nw();
      pe(4), O(v, p);
    };
    le(h, (v) => {
      u(l).length !== 0 && v(f);
    });
  }
  var g = V(h, 2);
  return n(g, () => u(l) || [], () => []), I(d), O(e, d), ue(c);
}
se(An, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var iw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), sw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), cw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), uw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), dw = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), fw = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const hw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function jd(e, t) {
  ce(t, !0), Ve(e, hw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn(), s = Kn();
  let a = /* @__PURE__ */ $e(zt([]));
  Pn(async () => {
    const h = await s.provider?.llm?.();
    u(a).push(...h || []);
  });
  const { updateNodeData: l } = ot(), c = (h) => {
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
  We(() => {
    n().outType || c("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(h) {
      n(h), y();
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
        var g = iw();
        O(f, g);
      },
      children: (f, g) => {
        var v = fw(), p = ie(v), _ = z(p);
        Oe(_, {
          level: 3,
          children: (K, H) => {
            pe();
            var W = ke("输入参数");
            O(K, W);
          },
          $$slots: { default: !0 }
        });
        var b = V(_, 2);
        Ae(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (K, H) => {
            var W = sw();
            O(K, W);
          },
          $$slots: { default: !0 }
        }), I(p);
        var S = V(p, 2);
        wt(S, {});
        var x = V(S, 2), k = z(x);
        Oe(k, {
          level: 3,
          children: (K, H) => {
            pe();
            var W = ke("图片识别");
            O(K, W);
          },
          $$slots: { default: !0 }
        });
        var T = V(k, 2);
        Ae(T, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (K, H) => {
            var W = aw();
            O(K, W);
          },
          $$slots: { default: !0 }
        }), I(x);
        var E = V(x, 2);
        wt(E, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var A = V(E, 2);
        Oe(A, {
          level: 3,
          mt: "10px",
          children: (K, H) => {
            pe();
            var W = ke("模型设置");
            O(K, W);
          },
          $$slots: { default: !0 }
        });
        var M = V(A, 4), R = z(M);
        {
          let K = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
          ut(R, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (H) => {
              const W = H.value;
              l(o, () => ({ llmId: W }));
            },
            get value() {
              return u(K);
            }
          });
        }
        var X = V(R, 2);
        jn(X, {
          placement: "bottom",
          floating: (H) => {
            var W = dw(), Y = V(z(W), 2), ee = z(Y), j = z(ee), B = z(j);
            I(j);
            var Q = V(j, 2);
            rr(Q), Q.__input = [lw, l, o], I(ee), I(Y);
            var q = V(Y, 2), ne = z(q), U = z(ne), we = z(U);
            I(U);
            var oe = V(U, 2);
            rr(oe), oe.__input = [cw, l, o], I(ne), I(q);
            var ae = V(q, 2), re = z(ae), de = z(re), ge = z(de);
            I(de);
            var _e = V(de, 2);
            rr(_e), _e.__input = [uw, l, o], I(re), I(ae), I(W), Ce(() => {
              Re(B, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), Fo(Q, n().temperature ?? 0.7), Re(we, `Top P: ${n().topP ?? 0.9 ?? ""}`), Fo(oe, n().topP ?? 0.9), Re(ge, `Top K: ${n().topK ?? 50 ?? ""}`), Fo(_e, n().topK ?? 50);
            }), O(H, W);
          },
          children: (H, W) => {
            Do(H, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), I(M);
        var J = V(M, 4), C = z(J);
        {
          let K = /* @__PURE__ */ N(() => n().systemPrompt || "");
          Fe(C, {
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
        I(J);
        var P = V(J, 4), m = z(P);
        {
          let K = /* @__PURE__ */ N(() => n().userPrompt || "");
          Fe(m, {
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
        I(P);
        var $ = V(P, 2), D = z($);
        Oe(D, {
          level: 3,
          children: (K, H) => {
            pe();
            var W = ke("输出参数");
            O(K, W);
          },
          $$slots: { default: !0 }
        });
        var L = V(D, 2);
        {
          let K = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
          ut(L, {
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
        I($);
        var F = V($, 2);
        An(F, {}), O(f, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
Xn(["input"]);
se(jd, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const yw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Gd(e, t) {
  ce(t, !0), Ve(e, yw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Pn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ge(), { addParameter: i } = nn(), { updateNodeData: s } = ot(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), y();
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
        var h = gw();
        O(d, h);
      },
      children: (d, h) => {
        var f = mw(), g = ie(f), v = z(g);
        Oe(v, {
          level: 3,
          children: (X, J) => {
            pe();
            var C = ke("输入参数");
            O(X, C);
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
          children: (X, J) => {
            var C = vw();
            O(X, C);
          },
          $$slots: { default: !0 }
        }), I(g);
        var _ = V(g, 2);
        wt(_, {});
        var b = V(_, 2);
        Oe(b, {
          level: 3,
          mt: "10px",
          children: (X, J) => {
            pe();
            var C = ke("代码");
            O(X, C);
          },
          $$slots: { default: !0 }
        });
        var S = V(b, 4), x = z(S);
        {
          let X = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
          ut(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (J) => {
              const C = J.value;
              s(o, () => ({ engine: C }));
            },
            get value() {
              return u(X);
            }
          });
        }
        I(S);
        var k = V(S, 4), T = z(k);
        {
          let X = /* @__PURE__ */ N(() => n().code || "");
          Fe(T, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (J) => {
              s(o, () => ({ code: J.target.value }));
            },
            get value() {
              return u(X);
            }
          });
        }
        I(k);
        var E = V(k, 2), A = z(E);
        Oe(A, {
          level: 3,
          mt: "10px",
          children: (X, J) => {
            pe();
            var C = ke("输出参数");
            O(X, C);
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
          children: (X, J) => {
            var C = pw();
            O(X, C);
          },
          $$slots: { default: !0 }
        }), I(E);
        var R = V(E, 2);
        An(R, {}), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Gd, { data: {} }, [], [], !0);
var ww = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), _w = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const bw = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ud(e, t) {
  ce(t, !0), Ve(e, bw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn(), { updateNodeData: s } = ot();
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
      n(l), y();
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
        var d = ww();
        O(c, d);
      },
      children: (c, d) => {
        var h = xw(), f = ie(h), g = z(f);
        Oe(g, {
          level: 3,
          children: (E, A) => {
            pe();
            var M = ke("输入参数");
            O(E, M);
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
          children: (E, A) => {
            var M = _w();
            O(E, M);
          },
          $$slots: { default: !0 }
        }), I(f);
        var p = V(f, 2);
        wt(p, {});
        var _ = V(p, 2);
        Oe(_, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (E, A) => {
            pe();
            var M = ke("模板内容");
            O(E, M);
          },
          $$slots: { default: !0 }
        });
        var b = V(_, 2), S = z(b);
        {
          let E = /* @__PURE__ */ N(() => n().template || "");
          Fe(S, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ template: A.target.value }));
            },
            get value() {
              return u(E);
            }
          });
        }
        I(b);
        var x = V(b, 2), k = z(x);
        Oe(k, {
          level: 3,
          mt: "10px",
          children: (E, A) => {
            pe();
            var M = ke("输出参数");
            O(E, M);
          },
          $$slots: { default: !0 }
        }), I(x);
        var T = V(x, 2);
        An(T, {}), O(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Ud, { data: {} }, [], [], !0);
var Cw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), kw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), Nw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), $w = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Dw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Aw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Ow = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Hw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Jd(e, t) {
  ce(t, !0), Ve(e, Hw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Pn(() => {
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
  ], i = Ge(), { addParameter: s } = nn(), { updateNodeData: a } = ot();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), y();
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
        var h = Cw();
        O(d, h);
      },
      children: (d, h) => {
        var f = Mw(), g = ie(f), v = z(g);
        Oe(v, {
          level: 3,
          children: (B, Q) => {
            pe();
            var q = ke("输入参数");
            O(B, q);
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
          children: (B, Q) => {
            var q = kw();
            O(B, q);
          },
          $$slots: { default: !0 }
        }), I(g);
        var _ = V(g, 2);
        wt(_, {});
        var b = V(_, 2);
        Oe(b, {
          level: 3,
          mt: "10px",
          children: (B, Q) => {
            pe();
            var q = ke("URL 地址");
            O(B, q);
          },
          $$slots: { default: !0 }
        });
        var S = V(b, 2), x = z(S), k = z(x);
        {
          let B = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
          ut(k, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (Q) => {
              const q = Q.value;
              a(i, () => ({ method: q }));
            },
            get value() {
              return u(B);
            }
          });
        }
        I(x);
        var T = V(x, 2), E = z(T);
        {
          let B = /* @__PURE__ */ N(() => n().url || "");
          Qe(E, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (Q) => {
              a(i, () => ({ url: Q.target.value }));
            },
            get value() {
              return u(B);
            }
          });
        }
        I(T), I(S);
        var A = V(S, 2), M = z(A);
        Oe(M, {
          level: 3,
          children: (B, Q) => {
            pe();
            var q = ke("Http 头信息");
            O(B, q);
          },
          $$slots: { default: !0 }
        });
        var R = V(M, 2);
        Ae(R, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (B, Q) => {
            var q = Ew();
            O(B, q);
          },
          $$slots: { default: !0 }
        }), I(A);
        var X = V(A, 2);
        wt(X, { dataKeyName: "headers" });
        var J = V(X, 2);
        {
          var C = (B) => {
            var Q = Sw(), q = ie(Q);
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
            var ne = V(q, 2), U = z(ne), we = z(U);
            {
              let Pe = /* @__PURE__ */ N(() => !n().bodyType || n().bodyType === "");
              Qe(we, {
                type: "radio",
                value: "",
                get checked() {
                  return u(Pe);
                },
                onchange: (Z) => {
                  Z.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            pe(), I(U);
            var oe = V(U, 2), ae = z(oe);
            {
              let Pe = /* @__PURE__ */ N(() => n().bodyType === "form-data");
              Qe(ae, {
                type: "radio",
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
              let Pe = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
              Qe(de, {
                type: "radio",
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
              let Pe = /* @__PURE__ */ N(() => n().bodyType === "json");
              Qe(_e, {
                type: "radio",
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
              let Pe = /* @__PURE__ */ N(() => n().bodyType === "raw");
              Qe(be, {
                type: "radio",
                value: "raw",
                get checked() {
                  return u(Pe);
                },
                onchange: (Z) => {
                  Z.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            pe(), I(fe), I(ne), O(B, Q);
          };
          le(J, (B) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && B(C);
          });
        }
        var P = V(J, 2);
        {
          var m = (B) => {
            var Q = Pw(), q = ie(Q), ne = z(q);
            Oe(ne, {
              level: 3,
              children: (oe, ae) => {
                pe();
                var re = ke("参数");
                O(oe, re);
              },
              $$slots: { default: !0 }
            });
            var U = V(ne, 2);
            Ae(U, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, ae) => {
                var re = Nw();
                O(oe, re);
              },
              $$slots: { default: !0 }
            }), I(q);
            var we = V(q, 2);
            wt(we, { dataKeyName: "formData" }), O(B, Q);
          };
          le(P, (B) => {
            n().bodyType === "form-data" && B(m);
          });
        }
        var $ = V(P, 2);
        {
          var D = (B) => {
            var Q = Tw(), q = ie(Q), ne = z(q);
            Oe(ne, {
              level: 3,
              children: (oe, ae) => {
                pe();
                var re = ke("Body 参数");
                O(oe, re);
              },
              $$slots: { default: !0 }
            });
            var U = V(ne, 2);
            Ae(U, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, ae) => {
                var re = $w();
                O(oe, re);
              },
              $$slots: { default: !0 }
            }), I(q);
            var we = V(q, 2);
            wt(we, { dataKeyName: "formUrlencoded" }), O(B, Q);
          };
          le($, (B) => {
            n().bodyType === "x-www-form-urlencoded" && B(D);
          });
        }
        var L = V($, 2);
        {
          var F = (B) => {
            var Q = Dw(), q = z(Q);
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
            }), I(Q), O(B, Q);
          };
          le(L, (B) => {
            n().bodyType === "json" && B(F);
          });
        }
        var K = V(L, 2);
        {
          var H = (B) => {
            var Q = Aw(), q = z(Q);
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
            }), I(Q), O(B, Q);
          };
          le(K, (B) => {
            n().bodyType === "raw" && B(H);
          });
        }
        var W = V(K, 2), Y = z(W);
        Oe(Y, {
          level: 3,
          mt: "10px",
          children: (B, Q) => {
            pe();
            var q = ke("输出参数");
            O(B, q);
          },
          $$slots: { default: !0 }
        });
        var ee = V(Y, 2);
        Ae(ee, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (B, Q) => {
            var q = Ow();
            O(B, q);
          },
          $$slots: { default: !0 }
        }), I(W);
        var j = V(W, 2);
        An(j, {}), O(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Jd, { data: {} }, [], [], !0);
var Lw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const zw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  ce(t, !0), Ve(e, zw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn(), s = Kn();
  let a = /* @__PURE__ */ $e(zt([]));
  Pn(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), y();
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
        var f = Lw();
        O(h, f);
      },
      children: (h, f) => {
        var g = Iw(), v = ie(g), p = z(v);
        Oe(p, {
          level: 3,
          children: (C, P) => {
            pe();
            var m = ke("输入参数");
            O(C, m);
          },
          $$slots: { default: !0 }
        });
        var _ = V(p, 2);
        Ae(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, P) => {
            var m = Vw();
            O(C, m);
          },
          $$slots: { default: !0 }
        }), I(v);
        var b = V(v, 2);
        wt(b, {});
        var S = V(b, 2);
        Oe(S, {
          level: 3,
          mt: "10px",
          children: (C, P) => {
            pe();
            var m = ke("知识库设置");
            O(C, m);
          },
          $$slots: { default: !0 }
        });
        var x = V(S, 4), k = z(x);
        {
          let C = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
          ut(k, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (P) => {
              const m = P.value;
              l(o, () => ({ knowledgeId: m }));
            },
            get value() {
              return u(C);
            }
          });
        }
        I(x);
        var T = V(x, 4), E = z(T);
        Qe(E, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (C) => {
            const P = C.target.value;
            l(o, () => ({ keyword: P }));
          }
        }), I(T);
        var A = V(T, 4), M = z(A);
        {
          let C = /* @__PURE__ */ N(() => n().limit || "");
          Qe(M, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (P) => {
              const m = P.target.value;
              l(o, () => ({ limit: m }));
            },
            get value() {
              return u(C);
            }
          });
        }
        I(A);
        var R = V(A, 2), X = z(R);
        Oe(X, {
          level: 3,
          mt: "10px",
          children: (C, P) => {
            pe();
            var m = ke("输出参数");
            O(C, m);
          },
          $$slots: { default: !0 }
        }), I(R);
        var J = V(R, 2);
        An(J, {}), O(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
se(Qd, { data: {} }, [], [], !0);
var Rw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Bw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fw = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Kw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ef(e, t) {
  ce(t, !0), Ve(e, Kw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn(), s = Kn();
  let a = /* @__PURE__ */ $e(zt([]));
  Pn(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
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
  var c = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), y();
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
        var f = Rw();
        O(h, f);
      },
      children: (h, f) => {
        var g = Fw(), v = ie(g), p = z(v);
        Oe(p, {
          level: 3,
          children: (C, P) => {
            pe();
            var m = ke("输入参数");
            O(C, m);
          },
          $$slots: { default: !0 }
        });
        var _ = V(p, 2);
        Ae(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (C, P) => {
            var m = Bw();
            O(C, m);
          },
          $$slots: { default: !0 }
        }), I(v);
        var b = V(v, 2);
        wt(b, {});
        var S = V(b, 2);
        Oe(S, {
          level: 3,
          mt: "10px",
          children: (C, P) => {
            pe();
            var m = ke("搜索引擎设置");
            O(C, m);
          },
          $$slots: { default: !0 }
        });
        var x = V(S, 4), k = z(x);
        {
          let C = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
          ut(k, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (P) => {
              const m = P.value;
              l(o, () => ({ engine: m }));
            },
            get value() {
              return u(C);
            }
          });
        }
        I(x);
        var T = V(x, 4), E = z(T);
        Qe(E, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (C) => {
            const P = C.target.value;
            l(o, () => ({ keyword: P }));
          }
        }), I(T);
        var A = V(T, 4), M = z(A);
        Qe(M, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (C) => {
            const P = C.target.value;
            l(o, () => ({ limit: P }));
          }
        }), I(A);
        var R = V(A, 2), X = z(R);
        Oe(X, {
          level: 3,
          mt: "10px",
          children: (C, P) => {
            pe();
            var m = ke("输出参数");
            O(C, m);
          },
          $$slots: { default: !0 }
        }), I(R);
        var J = V(R, 2);
        An(J, {}), O(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(c);
}
se(ef, { data: {} }, [], [], !0);
var Zw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Yw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ww = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Xw = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function tf(e, t) {
  ce(t, !0), Ve(e, Xw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn();
  We(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
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
        var d = Zw();
        O(c, d);
      },
      handle: (c) => {
        Bn(c, {
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
        var h = Ww(), f = ie(h), g = z(f);
        Oe(g, {
          level: 3,
          children: (x, k) => {
            pe();
            var T = ke("循环变量");
            O(x, T);
          },
          $$slots: { default: !0 }
        }), I(f);
        var v = V(f, 2);
        wt(v, { dataKeyName: "loopVars" });
        var p = V(v, 2), _ = z(p);
        Oe(_, {
          level: 3,
          children: (x, k) => {
            pe();
            var T = ke("输出参数");
            O(x, T);
          },
          $$slots: { default: !0 }
        });
        var b = V(_, 2);
        Ae(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (x, k) => {
            var T = Yw();
            O(x, T);
          },
          $$slots: { default: !0 }
        }), I(p);
        var S = V(p, 2);
        wt(S, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), O(c, h);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(tf, { data: {} }, [], [], !0);
var qw = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), jw = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Gw = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function nf(e, t) {
  ce(t, !0), Ve(e, Gw);
  const n = w(t, "parameter", 7), r = w(t, "index", 7), o = w(t, "dataKeyName", 7), i = w(t, "useChildrenOnly", 7);
  let s = Ge(), a = Tn(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = ot(), d = (C, P) => {
    c(s, (m) => {
      let $ = m.data?.[o()];
      return $[r()] = { ...$[r()], [C]: P }, { [o()]: $ };
    });
  }, h = (C, P) => {
    const m = P.target.value;
    d(C, m);
  }, f = (C) => {
    const P = C.value;
    d("ref", P);
  }, g = (C) => {
    const P = C.value;
    d("formType", P);
  }, v = (C) => {
    const P = C.value;
    d("contentType", P);
  };
  let p;
  const _ = () => {
    c(s, (C) => {
      let P = C.data?.[o()];
      return P.splice(r(), 1), { [o()]: [...P] };
    }), p?.hide();
  };
  let b = Yd(i());
  var S = {
    get parameter() {
      return n();
    },
    set parameter(C) {
      n(C), y();
    },
    get index() {
      return r();
    },
    set index(C) {
      r(C), y();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(C) {
      o(C), y();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(C) {
      i(C), y();
    }
  }, x = jw(), k = ie(x), T = z(k);
  {
    let C = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
    Qe(T, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(C);
      },
      oninput: (P) => h("name", P)
    });
  }
  I(k);
  var E = V(k, 2), A = z(E);
  {
    var M = (C) => {
      Qe(C, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (P) => h("value", P)
      });
    }, R = (C) => {
      var P = Se(), m = ie(P);
      {
        var $ = (D) => {
          {
            let L = /* @__PURE__ */ N(() => [u(l).ref]);
            ut(D, {
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
          m,
          (D) => {
            u(l).refType !== "input" && D($);
          },
          !0
        );
      }
      O(C, P);
    };
    le(A, (C) => {
      u(l).refType === "fixed" ? C(M) : C(R, !1);
    });
  }
  I(E);
  var X = V(E, 2), J = z(X);
  return $t(
    jn(J, {
      placement: "bottom",
      floating: (P) => {
        var m = qw(), $ = z(m), D = V(z($));
        {
          let B = /* @__PURE__ */ N(() => u(l).contentType ? [u(l).contentType] : []);
          ut(D, {
            get items() {
              return ga;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(B);
            },
            onSelect: v
          });
        }
        I($);
        var L = V($, 2), F = V(z(L));
        {
          let B = /* @__PURE__ */ N(() => u(l).formType ? [u(l).formType] : []);
          ut(F, {
            get items() {
              return Bm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return u(B);
            },
            onSelect: g
          });
        }
        I(L);
        var K = V(L, 2), H = V(z(K));
        Fe(H, {
          rows: 1,
          style: "width: 100%;",
          onchange: (B) => {
            h("formLabel", B);
          },
          get value() {
            return u(l).formLabel;
          }
        }), I(K);
        var W = V(K, 2), Y = V(z(W));
        Fe(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (B) => {
            h("formDescription", B);
          },
          get value() {
            return u(l).formDescription;
          }
        }), I(W);
        var ee = V(W, 2), j = z(ee);
        Ae(j, {
          onclick: _,
          children: (B, Q) => {
            pe();
            var q = ke("删除");
            O(B, q);
          },
          $$slots: { default: !0 }
        }), I(ee), I(m), O(P, m);
      },
      children: (P, m) => {
        Do(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => p = P,
    () => p
  ), I(X), O(e, x), ue(S);
}
se(
  nf,
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
var Uw = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Jw = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Qw = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const e_ = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function rf(e, t) {
  ce(t, !0), Ve(e, e_);
  const n = w(t, "noneParameterText", 7, "无确认数据"), r = w(t, "dataKeyName", 7, "parameters"), o = w(t, "useChildrenOnly", 7);
  let i = Ge(), s = Tn(i), a = /* @__PURE__ */ N(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无确认数据") {
      n(g), y();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(g = "parameters") {
      r(g), y();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(g) {
      o(g), y();
    }
  }, c = Qw(), d = z(c);
  {
    var h = (g) => {
      var v = Uw();
      pe(4), O(g, v);
    };
    le(d, (g) => {
      u(a).length !== 0 && g(h);
    });
  }
  var f = V(d, 2);
  return gt(
    f,
    19,
    () => u(a),
    (g) => g.id,
    (g, v, p) => {
      nf(g, {
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
      var v = Jw(), p = z(v, !0);
      I(v), Ce(() => Re(p, n())), O(g, v);
    }
  ), I(c), O(e, c), ue(l);
}
se(rf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ps = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ps(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ps(e[s], t[s])) return !1;
    return !0;
  }
};
var t_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), n_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), r_ = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const o_ = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function of(e, t) {
  ce(t, !0), Ve(e, o_);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn(), { updateNodeData: s } = ot();
  We(() => {
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
      Ps(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
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
        var d = t_();
        O(c, d);
      },
      children: (c, d) => {
        var h = r_(), f = ie(h), g = z(f);
        Oe(g, {
          level: 3,
          children: (E, A) => {
            pe();
            var M = ke("确认数据");
            O(E, M);
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
          children: (E, A) => {
            var M = n_();
            O(E, M);
          },
          $$slots: { default: !0 }
        }), I(f);
        var p = V(f, 2);
        rf(p, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var _ = V(p, 2);
        Oe(_, {
          level: 3,
          mt: "10px",
          children: (E, A) => {
            pe();
            var M = ke("确认消息");
            O(E, M);
          },
          $$slots: { default: !0 }
        });
        var b = V(_, 4), S = z(b);
        {
          let E = /* @__PURE__ */ N(() => n().message || "");
          Fe(S, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ message: A.target.value }));
            },
            get value() {
              return u(E);
            }
          });
        }
        I(b);
        var x = V(b, 2), k = z(x);
        Oe(k, {
          level: 3,
          mt: "10px",
          children: (E, A) => {
            pe();
            var M = ke("输出参数");
            O(E, M);
          },
          $$slots: { default: !0 }
        }), I(x);
        var T = V(x, 2);
        An(T, { placeholder: "" }), O(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(of, { data: {} }, [], [], !0);
const i_ = {
  startNode: Fd,
  codeNode: Gd,
  confirmNode: of,
  llmNode: jd,
  templateNode: Ud,
  httpNode: Jd,
  knowledgeNode: Qd,
  searchEngineNode: ef,
  loopNode: tf,
  endNode: Xd
};
var s_ = /* @__PURE__ */ te("<!> ", 1);
function $s(e, t) {
  ce(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7), a = (c) => {
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
      n(c), y();
    },
    get title() {
      return r();
    },
    set title(c) {
      r(c), y();
    },
    get type() {
      return o();
    },
    set type(c) {
      o(c), y();
    },
    get description() {
      return i();
    },
    set description(c) {
      i(c), y();
    },
    get extra() {
      return s();
    },
    set extra(c) {
      s(c), y();
    }
  };
  return Ae(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (c, d) => {
      var h = s_(), f = ie(h);
      js(f, n);
      var g = V(f);
      Ce(() => Re(g, ` ${r() ?? ""}`)), O(c, h);
    },
    $$slots: { default: !0 }
  }), ue(l);
}
se($s, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var a_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), l_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), c_ = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function sf(e, t) {
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
  ], s = [], a = Kn(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((S, x) => (l[S].sortNo || 0) - (l[x].sortNo || 0));
    for (let S of b)
      l[S].group === "base" ? o.push({ type: S, ...l[S] }) : s.push({
        icon: l[S].icon,
        title: l[S].title,
        type: S
      });
    o.sort((S, x) => (S.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let S of b)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === S) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var c = c_(), d = z(c), h = z(d), f = z(h);
  Sd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      G(n, b.value.toString(), !0);
    }
  }), I(h);
  var g = V(h, 2), v = z(g);
  gt(v, 21, () => o, Or, (b, S) => {
    $s(b, Be(() => u(S)));
  }), I(v);
  var p = V(v, 2);
  gt(p, 21, () => s, Or, (b, S) => {
    $s(b, Be(() => u(S)));
  }), I(p), I(g), I(d);
  var _ = V(d, 2);
  Ae(_, {
    onclick: () => {
      G(r, u(r) ? "" : "show", !0);
    },
    children: (b, S) => {
      var x = Se(), k = ie(x);
      {
        var T = (A) => {
          var M = a_();
          O(A, M);
        }, E = (A) => {
          var M = l_();
          O(A, M);
        };
        le(k, (A) => {
          u(r) === "show" ? A(T) : A(E, !1);
        });
      }
      O(b, x);
    },
    $$slots: { default: !0 }
  }), I(c), Ce(() => {
    Pt(c, 1, `tf-toolbar ${u(r) ?? ""}`), dt(v, `display: ${u(n) === "base" ? "flex" : "none"}`), dt(p, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), O(e, c), ue();
}
se(sf, {}, [], [], !0);
const u_ = () => ({ getNode: (t) => Me.getNode(t) }), d_ = () => ({ ensureParentInNodesBefore: (t, n) => {
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
} }), f_ = () => ({ getEdgesByTarget: (t) => Me.getEdges().filter((r) => r.target === t) });
var h_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), g_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), v_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), p_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), m_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), y_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), w_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), __ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), x_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), b_ = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const C_ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function af(e, t) {
  ce(t, !0), Ve(e, C_);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = nn(), s = ot(), { updateNodeData: a } = s, l = (b) => {
    a(o, b);
  }, c = (b, S) => {
    l({ [b]: S.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), g = Kn().customNodes[t.type];
  g.render?.(h, d, s);
  const v = g.forms;
  let p;
  We(() => {
    n().expand && p && p.append(h);
  }), We(() => {
    n() && g.onUpdate?.(h, { ...d, data: n() });
  }), We(() => {
    !n().parameters && g.parameters && l({
      parameters: fo(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), We(() => {
    !n().outputDefs && g.outputDefs && l({
      outputDefs: fo(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  var _ = {
    get data() {
      return n();
    },
    set data(b) {
      n(b), y();
    }
  };
  {
    const b = (x) => {
      var k = Se(), T = ie(k);
      js(T, () => g.icon), O(x, k);
    };
    let S = /* @__PURE__ */ N(() => ({ ...n(), description: g.description }));
    Ft(e, Be(
      {
        get data() {
          return u(S);
        }
      },
      () => r,
      {
        icon: b,
        children: (x, k) => {
          var T = b_(), E = ie(T);
          {
            var A = (P) => {
              var m = g_(), $ = ie(m), D = z($);
              Oe(D, {
                level: 3,
                children: (H, W) => {
                  pe();
                  var Y = ke("输入参数");
                  O(H, Y);
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
                    children: (W, Y) => {
                      var ee = h_();
                      O(W, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                le(L, (H) => {
                  g.parametersAddEnable !== !1 && H(F);
                });
              }
              I($);
              var K = V($, 2);
              wt(K, {}), O(P, m);
            };
            le(E, (P) => {
              g.parametersEnable !== !1 && P(A);
            });
          }
          var M = V(E, 2);
          {
            var R = (P) => {
              var m = Se(), $ = ie(m);
              gt($, 17, () => v, Or, (D, L) => {
                var F = Se(), K = ie(F);
                {
                  var H = (Y) => {
                    var ee = v_(), j = ie(ee), B = z(j, !0);
                    I(j);
                    var Q = V(j, 2), q = z(Q);
                    {
                      let ne = /* @__PURE__ */ N(() => n()[u(L).name] || u(L).defaultValue);
                      Qe(q, Be(
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
                          onchange: (U) => {
                            c(u(L).name, U);
                          }
                        }
                      ));
                    }
                    I(Q), Ce(() => Re(B, u(L).label)), O(Y, ee);
                  }, W = (Y) => {
                    var ee = Se(), j = ie(ee);
                    {
                      var B = (q) => {
                        var ne = p_(), U = ie(ne), we = z(U, !0);
                        I(U);
                        var oe = V(U, 2), ae = z(oe);
                        {
                          let re = /* @__PURE__ */ N(() => n()[u(L).name] || u(L).defaultValue);
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
                      }, Q = (q) => {
                        var ne = Se(), U = ie(ne);
                        {
                          var we = (ae) => {
                            var re = m_(), de = ie(re), ge = z(de, !0);
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
                            var re = Se(), de = ie(re);
                            {
                              var ge = (fe) => {
                                var be = y_(), Pe = ie(be), Z = z(Pe, !0);
                                I(Pe);
                                var Ye = V(Pe, 2), De = z(Ye);
                                {
                                  let He = /* @__PURE__ */ N(() => u(L).options || []), Le = /* @__PURE__ */ N(() => n()[u(L).name] ? [n()[u(L).name]] : [u(L).defaultValue]);
                                  ut(De, {
                                    get items() {
                                      return u(He);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(L).placeholder;
                                    },
                                    onSelect: (it) => {
                                      const st = it.value;
                                      l({ [u(L).name]: st });
                                    },
                                    get value() {
                                      return u(Le);
                                    }
                                  });
                                }
                                I(Ye), Ce(() => Re(Z, u(L).label)), O(fe, be);
                              }, _e = (fe) => {
                                var be = Se(), Pe = ie(be);
                                {
                                  var Z = (De) => {
                                    var He = w_(), Le = ie(He), it = z(Le, !0);
                                    I(Le);
                                    var st = V(Le, 2), Lt = z(st);
                                    {
                                      let ze = /* @__PURE__ */ N(() => u(L).chosen?.buttonText);
                                      Ed(Lt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(L).placeholder;
                                        },
                                        get buttonText() {
                                          return u(ze);
                                        },
                                        onChosen: (Ue, he, Ze) => {
                                          u(L).chosen?.onChosen?.(l, Ue, he, Ze);
                                        },
                                        get value() {
                                          return n()[u(L).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(L).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    I(st), Ce(() => Re(it, u(L).label)), O(De, He);
                                  }, Ye = (De) => {
                                    var He = Se(), Le = ie(He);
                                    {
                                      var it = (st) => {
                                        Oe(st, Be({ level: 3, mt: "10px" }, () => u(L).attrs, {
                                          children: (Lt, ze) => {
                                            pe();
                                            var Ue = ke();
                                            Ce(() => Re(Ue, u(L).label)), O(Lt, Ue);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      le(
                                        Le,
                                        (st) => {
                                          u(L).type === "heading" && st(it);
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
                            U,
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
                          u(L).type === "textarea" ? q(B) : q(Q, !1);
                        },
                        !0
                      );
                    }
                    O(Y, ee);
                  };
                  le(K, (Y) => {
                    u(L).type === "input" ? Y(H) : Y(W, !1);
                  });
                }
                O(D, F);
              }), O(P, m);
            };
            le(M, (P) => {
              v && P(R);
            });
          }
          var X = V(M, 2);
          $t(X, (P) => p = P, () => p);
          var J = V(X, 2);
          {
            var C = (P) => {
              var m = x_(), $ = ie(m), D = z($);
              Oe(D, {
                level: 3,
                mt: "10px",
                children: (H, W) => {
                  pe();
                  var Y = ke("输出参数");
                  O(H, Y);
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
                    children: (W, Y) => {
                      var ee = __();
                      O(W, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                le(L, (H) => {
                  g.outputDefsAddEnable !== !1 && H(F);
                });
              }
              I($);
              var K = V($, 2);
              An(K, {}), O(P, m);
            };
            le(J, (P) => {
              g.outputDefsEnable !== !1 && P(C);
            });
          }
          Ce(() => {
            dt(X, g.rootStyle || ""), Pt(X, 1, $n(g.rootClass), "svelte-qt4m0r");
          }), O(x, T);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(_);
}
se(af, { data: {} }, [], [], !0);
const k_ = () => ({ updateEdgeData: (t, n, r) => {
  const o = Me.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Me.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), E_ = () => ({ deleteEdge: (t) => {
  Me.removeEdge(t);
} }), S_ = () => {
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
}, N_ = () => ({ getNodeRelativePosition: (t) => {
  let n = Me.getNode(t);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = Me.getNode(n.parentId) : n = void 0;
  return r;
} });
function P_(e) {
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
function $_(e) {
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
function T_(e) {
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
function Ts(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Ts(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Ts(e[r], t));
    return n;
  }
  return e;
}
const D_ = () => (ot(), { copyHandler: async (n) => {
  const r = Me.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = Me.getEdges().filter((d) => r.some((h) => h.id === d.source) && r.some((h) => h.id === d.target)), s = r.map(P_), a = i.map(T_), c = JSON.stringify({
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
  const i = $_(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), l = [];
  for (const d of i) {
    const h = `node_${Sn()}`;
    a.set(d.id, h);
  }
  for (const d of i) {
    const h = a.get(d.id), f = d.parentId !== void 0 ? a.get(d.parentId) : void 0, g = Ts(d.data, a);
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
      id: `edge_${Sn()}`,
      source: h,
      target: f
    });
  }
  Me.updateNodes((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...l]), Me.updateEdges((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...c]);
} }), Al = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var A_ = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), O_ = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), M_ = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const H_ = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function lf(e, t) {
  ce(t, !0), Ve(e, H_);
  const n = w(t, "onInit", 7), r = /* @__PURE__ */ Ie(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = ot();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ $e(!1), s = /* @__PURE__ */ $e(null);
  const { updateEdgeData: a } = k_(), l = (Y) => {
    Y.preventDefault(), Y.dataTransfer && (Y.dataTransfer.dropEffect = "move");
  }, c = (Y) => {
    Y.preventDefault();
    const ee = o.screenToFlowPosition({ x: Y.clientX - 250, y: Y.clientY - 100 }), j = Y.dataTransfer?.getData("application/tinyflow");
    if (!j)
      return;
    const B = JSON.parse(j), Q = { id: `node_${Sn()}`, position: ee, data: {}, ...B };
    Me.addNode(Q), Me.selectNodeOnly(Q.id);
  }, { getNode: d } = u_(), h = (Y) => {
    const ee = d(Y.source), j = d(Y.target);
    if (Y.sourceHandle === "loop_handle" || ee.parentId) {
      const B = o.getEdges();
      for (let Q of B)
        if (Q.target === Y.target) {
          const q = d(Q.source);
          if (Y.sourceHandle === "loop_handle" && q.parentId !== ee.id || ee.parentId && q.parentId !== ee.parentId)
            return !1;
        }
    }
    return !(!ee.parentId && j.parentId && j.parentId !== ee.id);
  }, { getNodesFromSource: f } = S_(), { getNodeRelativePosition: g } = N_(), { ensureParentInNodesBefore: v } = d_(), p = (Y, ee) => {
    if (!ee.isValid)
      return;
    const j = ee.toNode;
    if (j.parentId)
      return;
    const B = ee.fromNode, Q = ee.fromHandle, q = { position: { ...j.position } };
    if (Q.id === "loop_handle" ? q.parentId = B.id : B.parentId && (q.parentId = B.parentId), q.parentId) {
      const { x: ne, y: U } = g(q.parentId);
      q.position = { x: j.position.x - ne, y: j.position.y - U }, o.updateNode(j.id, q), f(j.id).forEach((oe) => {
        o.updateNode(oe.id, {
          parentId: q.parentId,
          position: { x: oe.position.x - ne, y: oe.position.y - U }
        });
      }), v(q.parentId, j.id);
    }
    setTimeout(() => {
      Me.getEdges().forEach((ne) => {
        ne.target === j.id && ne.source == B.id && (G(i, !0), G(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: _ } = f_(), b = (Y) => {
    Y.edges.forEach((j) => {
      j.id === u(s)?.id && (G(s, null), G(i, !1));
      const B = d(j.target);
      if (B && B.parentId) {
        const Q = _(j.target), { x: q, y: ne } = g(B.parentId);
        if (Q.length === 0)
          o.updateNode(B.id, {
            parentId: void 0,
            position: { x: B.position.x + q, y: B.position.y + ne }
          }), f(B.id).forEach((we) => {
            o.updateNode(we.id, {
              parentId: void 0,
              position: { x: we.position.x + q, y: we.position.y + ne }
            });
          });
        else {
          let U = !1;
          for (let we = 0; we < Q.length; we++) {
            const oe = Q[we], ae = d(oe.source);
            if (ae.parentId || ae.type === "loopNode") {
              U = !0;
              break;
            }
          }
          U || (o.updateNode(B.id, {
            parentId: void 0,
            position: { x: B.position.x + q, y: B.position.y + ne }
          }), f(B.id).forEach((oe) => {
            o.updateNode(oe.id, {
              parentId: void 0,
              position: { x: oe.position.x + q, y: oe.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: S } = E_(), x = (Y, ee) => {
  }, k = (Y) => {
  }, { copyHandler: T, pasteHandler: E } = D_(), A = (Y) => {
    Al() || ((Y.ctrlKey || Y.metaKey) && Y.key === "c" && (Y.preventDefault(), T(Y)), (Y.ctrlKey || Y.metaKey) && Y.key === "a" && (Y.preventDefault(), Me.updateNodes((ee) => ee.map((j) => ({ ...j, selected: !0 }))), Me.updateEdges((ee) => ee.map((j) => ({ ...j, selected: !0 })))));
  }, M = async (Y) => {
    Al() || E(Y);
  };
  Pn(() => {
    window.addEventListener("keydown", A), window.addEventListener("paste", M);
  }), wo(() => {
    window.removeEventListener("keydown", A), window.removeEventListener("paste", M);
  });
  const R = {
    // ...nodeTypes
  }, X = Kn().customNodes;
  if (X)
    for (let Y of Object.keys(X))
      R[Y] = af;
  const J = Kn().onDataChange;
  We(() => {
    J?.({
      nodes: Me.getNodes(),
      edges: Me.getEdges(),
      viewport: Me.getViewport()
    });
  });
  var C = {
    get onInit() {
      return n();
    },
    set onInit(Y) {
      n(Y), y();
    }
  }, P = M_(), m = z(P), $ = Me.getNodes, D = Me.setNodes, L = Me.getEdges, F = Me.setEdges, K = Me.getViewport, H = Me.setViewport;
  {
    let Y = /* @__PURE__ */ N(() => ({ ...i_, ...R })), ee = /* @__PURE__ */ N(() => ({
      markerEnd: { type: so.ArrowClosed, width: 20, height: 20 }
    }));
    ud(m, {
      get nodeTypes() {
        return u(Y);
      },
      get nodes() {
        return $();
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
      onbeforeconnect: (j) => ({ ...j, id: Sn() }),
      ondelete: b,
      onclick: (j) => {
        const B = j.target;
        B.classList.contains("svelte-flow__edge-interaction") || B.classList.contains("panel-content") || B.closest(".panel-content") || (G(i, !1), G(s, null));
      },
      get defaultEdgeOptions() {
        return u(ee);
      },
      children: (j, B) => {
        var Q = O_(), q = ie(Q);
        _d(q, {});
        var ne = V(q, 2);
        md(ne, {});
        var U = V(ne, 2);
        bd(U, {});
        var we = V(U, 2);
        {
          var oe = (ae) => {
            No(ae, {
              children: (re, de) => {
                var ge = A_(), _e = V(z(ge), 4), fe = z(_e);
                {
                  let Ye = /* @__PURE__ */ N(() => u(s)?.data?.condition);
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
                    S(u(s)?.id), G(i, !1);
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
        O(j, Q);
      },
      $$slots: { default: !0 }
    });
  }
  var W = V(m, 2);
  return sf(W, {}), I(P), O(e, P), ue(C);
}
se(lf, { onInit: {} }, [], [], !0);
function L_(e, t) {
  ce(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Me.init(o?.nodes || [], o?.edges || []), Tr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), y();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), y();
    }
  };
  return dd(e, {
    children: (s, a) => {
      lf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ue(i);
}
customElements.define("tinyflow-component", se(L_, { options: {}, onInit: {} }, [], [], !1));
export {
  I_ as Tinyflow
};
//# sourceMappingURL=index.js.map
