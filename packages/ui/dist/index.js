const ff = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ff);
const Al = 1, Ol = 2, Ml = 4, hf = 8, gf = 16, vf = 1, pf = 2, Hl = 4, mf = 8, yf = 16, Ll = 1, wf = 2, Vl = "[", xi = "[!", Hs = "]", dr = {}, ct = Symbol(), _f = "http://www.w3.org/1999/xhtml", xf = "http://www.w3.org/2000/svg", bf = "@attach", ss = !1;
var bi = Array.isArray, Cf = Array.prototype.indexOf, Ls = Array.from, Qo = Object.keys, ei = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Il = Object.getOwnPropertyDescriptors, zl = Object.prototype, kf = Array.prototype, Ci = Object.getPrototypeOf, xa = Object.isExtensible;
function Wr(e) {
  return typeof e == "function";
}
const mt = () => {
};
function Ef(e) {
  return e();
}
function as(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Rl() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function _t(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function mo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ft = 2, Vs = 4, ki = 8, Bl = 1 << 24, Mn = 16, Hn = 32, er = 64, Ei = 128, en = 512, vt = 1024, Tt = 2048, Ln = 4096, Vt = 8192, Pn = 16384, Si = 32768, Tn = 65536, ba = 1 << 17, Fl = 1 << 18, yr = 1 << 19, Kl = 1 << 20, fr = 32768, ls = 1 << 21, Is = 1 << 22, Wn = 1 << 23, gn = Symbol("$state"), zs = Symbol("legacy props"), Sf = Symbol(""), Cr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Nf = 1, Ni = 3, wr = 8;
function Rs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Pf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function $f(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Tf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Df(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Af() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Of() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Mf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Hf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Lf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function If() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function yo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function zf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Rf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let xe = !1;
function Lt(e) {
  xe = e;
}
let Pe;
function Je(e) {
  if (e === null)
    throw yo(), dr;
  return Pe = e;
}
function Dn() {
  return Je(
    /** @type {TemplateNode} */
    /* @__PURE__ */ rn(Pe)
  );
}
function R(e) {
  if (xe) {
    if (/* @__PURE__ */ rn(Pe) !== null)
      throw yo(), dr;
    Pe = e;
  }
}
function pe(e = 1) {
  if (xe) {
    for (var t = e, n = Pe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ rn(n);
    Pe = n;
  }
}
function ti(e = !0) {
  for (var t = 0, n = Pe; ; ) {
    if (n.nodeType === wr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Hs) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Vl || r === xi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ rn(n)
    );
    e && n.remove(), n = o;
  }
}
function Zl(e) {
  if (!e || e.nodeType !== wr)
    throw yo(), dr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Yl(e) {
  return e === this.v;
}
function Wl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xl(e) {
  return !Wl(e, this.v);
}
let Fr = !1, Bf = !1;
function Ff() {
  Fr = !0;
}
const Kf = [];
function ql(e, t = !1, n = !1) {
  return Yo(e, /* @__PURE__ */ new Map(), "", Kf, null, n);
}
function Yo(e, t, n, r, o = null, i = !1) {
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
    if (bi(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = Yo(c, t, n, r, null, i));
      }
      return a;
    }
    if (Ci(e) === zl) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Yo(
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
      return Yo(
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
function Tr(e) {
  Ze = e;
}
function jn(e) {
  return (
    /** @type {T} */
    jl().get(e)
  );
}
function Dr(e, t) {
  return jl().set(e, t), t;
}
function ue(e, t = !1, n) {
  Ze = {
    p: Ze,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Fr && !t ? { s: null, u: null, $: [] } : null
  };
}
function de(e) {
  var t = (
    /** @type {ComponentContext} */
    Ze
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      hc(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ze = t.p, e ?? /** @type {T} */
  {};
}
function wo() {
  return !Fr || Ze !== null && Ze.l === null;
}
function jl(e) {
  return Ze === null && Rs(), Ze.c ??= new Map(Zf(Ze) || void 0);
}
function Zf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let ir = [];
function Gl() {
  var e = ir;
  ir = [], as(e);
}
function tr(e) {
  if (ir.length === 0 && !Qr) {
    var t = ir;
    queueMicrotask(() => {
      t === ir && Gl();
    });
  }
  ir.push(e);
}
function Yf() {
  for (; ir.length > 0; )
    Gl();
}
function Ul(e) {
  var t = $e;
  if (t === null)
    return Le.f |= Wn, e;
  if ((t.f & Si) === 0) {
    if ((t.f & Ei) === 0)
      throw e;
    t.b.error(e);
  } else
    Ar(e, t);
}
function Ar(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ei) !== 0)
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
const Lo = /* @__PURE__ */ new Set();
let Ye = null, Kt = null, Ft = [], Pi = null, cs = !1, Qr = !1;
class Jt {
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
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
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
  #i = [];
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
    Ft = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects)) : (Ye = null, Ca(n.render_effects), Ca(n.effects), this.#l?.resolve()), Kt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= vt;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Hn | er)) !== 0, s = i && (o & vt) !== 0, a = s || (o & Vt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Ei) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= vt : (o & Vs) !== 0 ? n.effects.push(r) : bo(r) && ((r.f & Mn) !== 0 && n.block_effects.push(r), oo(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; )
        c === n.effect && (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      ((n.f & Tt) !== 0 ? this.#i : this.#o).push(n), this.#c(n.deps), pt(n, vt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & ft) === 0 || (n.f & fr) === 0 || (n.f ^= fr, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Wn) === 0 && (this.current.set(t, t.v), Kt?.set(t, t.v));
  }
  activate() {
    Ye = this, this.apply();
  }
  deactivate() {
    Ye === this && (Ye = null, Kt = null);
  }
  flush() {
    if (this.activate(), Ft.length > 0) {
      if (Jl(), Ye !== null && Ye !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #u() {
    if (this.#r === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (Lo.size > 1) {
      this.previous.clear();
      var t = Kt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Lo) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [l, c] of this.current) {
          if (i.current.has(l))
            if (n && c !== i.current.get(l))
              i.current.set(l, c);
            else
              continue;
          s.push(l);
        }
        if (s.length === 0)
          continue;
        const a = [...i.current.keys()].filter((l) => !this.current.has(l));
        if (a.length > 0) {
          var o = Ft;
          Ft = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            Ql(d, a, l, c);
          if (Ft.length > 0) {
            Ye = i, i.apply();
            for (const d of Ft)
              i.#s(d, r);
            i.deactivate();
          }
          Ft = o;
        }
      }
      Ye = null, Kt = t;
    }
    this.committed = !0, Lo.delete(this);
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
    for (const t of this.#i)
      pt(t, Tt), hr(t);
    for (const t of this.#o)
      pt(t, Ln), hr(t);
    this.#i = [], this.#o = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#t.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#l ??= Rl()).promise;
  }
  static ensure() {
    if (Ye === null) {
      const t = Ye = new Jt();
      Lo.add(Ye), Qr || Jt.enqueue(() => {
        Ye === t && t.flush();
      });
    }
    return Ye;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    tr(t);
  }
  apply() {
  }
}
function v(e) {
  var t = Qr;
  Qr = !0;
  try {
    for (var n; ; ) {
      if (Yf(), Ft.length === 0 && (Ye?.flush(), Ft.length === 0))
        return Pi = null, /** @type {T} */
        n;
      Jl();
    }
  } finally {
    Qr = t;
  }
}
function Jl() {
  var e = qn;
  cs = !0;
  var t = null;
  try {
    var n = 0;
    for (ri(!0); Ft.length > 0; ) {
      var r = Jt.ensure();
      if (n++ > 1e3) {
        var o, i;
        Wf();
      }
      r.process(Ft), Xn.clear();
    }
  } finally {
    cs = !1, ri(e), Pi = null;
  }
}
function Wf() {
  try {
    Af();
  } catch (e) {
    Ar(e, Pi);
  }
}
let xn = null;
function Ca(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Pn | Vt)) === 0 && bo(r) && (xn = /* @__PURE__ */ new Set(), oo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? wc(r) : r.fn = null), xn?.size > 0)) {
        Xn.clear();
        for (const o of xn) {
          if ((o.f & (Pn | Vt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            xn.has(s) && (xn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Pn | Vt)) === 0 && oo(l);
          }
        }
        xn.clear();
      }
    }
    xn = null;
  }
}
function Ql(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & ft) !== 0 ? Ql(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Is | Mn)) !== 0 && (i & Tt) === 0 && ec(o, t, r) && (pt(o, Tt), hr(
        /** @type {Effect} */
        o
      ));
    }
}
function ec(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & ft) !== 0 && ec(
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
function hr(e) {
  for (var t = Pi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (cs && t === $e && (n & Mn) !== 0 && (n & Fl) === 0)
      return;
    if ((n & (er | Hn)) !== 0) {
      if ((n & vt) === 0) return;
      t.f ^= vt;
    }
  }
  Ft.push(t);
}
function tc(e) {
  let t = 0, n = Gn(0), r;
  return () => {
    no() && (u(n), xo(() => (t === 0 && (r = ut(() => e(() => eo(n)))), t += 1, () => {
      tr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, eo(n));
      });
    })));
  };
}
var Xf = Tn | yr | Ei;
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
  #n = xe ? Pe : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #i;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {DocumentFragment | null} */
  #c = null;
  /** @type {TemplateNode | null} */
  #u = null;
  #d = 0;
  #f = 0;
  #g = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #w = tc(() => (this.#h = Gn(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    $e.b, this.#t = !!this.#r.pending, this.#i = Zr(() => {
      if ($e.b = this, xe) {
        const i = this.#n;
        Dn(), /** @type {Comment} */
        i.nodeType === wr && /** @type {Comment} */
        i.data === xi ? this.#x() : this.#_();
      } else {
        var o = this.#m();
        try {
          this.#o = St(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Xf), xe && (this.#e = Pe);
  }
  #_() {
    try {
      this.#o = St(() => this.#l(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#s = St(() => t(this.#e)), Jt.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (Jt.ensure(), St(() => this.#l(n)))), this.#f > 0 ? this.#p() : (Er(
        /** @type {Effect} */
        this.#s,
        () => {
          this.#s = null;
        }
      ), this.#t = !1);
    }));
  }
  #m() {
    var t = this.#e;
    return this.#t && (this.#u = Ct(), this.#e.before(this.#u), t = this.#u), t;
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
  #v(t) {
    var n = $e, r = Le, o = Ze;
    Wt(this.#i), Nt(this.#i), Tr(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return Ul(i), null;
    } finally {
      Wt(n), Nt(r), Tr(o);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#o !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), bc(this.#o, this.#c)), this.#s === null && (this.#s = St(() => t(this.#e)));
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
    this.#f += t, this.#f === 0 && (this.#t = !1, this.#s && Er(this.#s, () => {
      this.#s = null;
    }), this.#c && (this.#e.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#h && Mr(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#w(), u(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#g || !n && !r)
      throw t;
    this.#o && (it(this.#o), this.#o = null), this.#s && (it(this.#s), this.#s = null), this.#a && (it(this.#a), this.#a = null), xe && (Je(
      /** @type {TemplateNode} */
      this.#n
    ), pe(), Je(ti()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Rf();
        return;
      }
      o = !0, i && If(), Jt.ensure(), this.#d = 0, this.#a !== null && Er(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, St(() => this.#l(this.#e)))), this.#f > 0 ? this.#p() : this.#t = !1;
    };
    var a = Le;
    try {
      Nt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Ar(l, this.#i && this.#i.parent);
    } finally {
      Nt(a);
    }
    r && tr(() => {
      this.#a = this.#v(() => {
        Jt.ensure(), this.#g = !0;
        try {
          return St(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Ar(
            l,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        } finally {
          this.#g = !1;
        }
      });
    });
  }
}
function Or(e, t) {
  return t;
}
function Gf(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    Ws(t[i].e, r, !0);
  _c(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Ks(l), l.append(a), e.items.clear(), jt(e, t[0].prev, t[o - 1].next);
    }
    for (var c = 0; c < o; c++) {
      var d = t[c];
      s || (e.items.delete(d.k), jt(e, d.prev, d.next)), it(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function yt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, c = (t & Ml) !== 0, d = (t & Al) !== 0, h = (t & Ol) !== 0;
  if (c) {
    var f = (
      /** @type {Element} */
      e
    );
    s = xe ? Je(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Qe(f)
    ) : f.appendChild(Ct());
  }
  xe && Dn();
  var g = null, m = /* @__PURE__ */ Bs(() => {
    var b = n();
    return bi(b) ? b : b == null ? [] : Ls(b);
  }), y, w = !0;
  function _() {
    Uf(E, y, s, t, r), g !== null && (y.length === 0 ? (g.fragment ? (s.before(g.fragment), g.fragment = null) : Xs(g.effect), k.first = g.effect) : Er(g.effect, () => {
      g = null;
    }));
  }
  var k = Zr(() => {
    y = /** @type {V[]} */
    u(m);
    var b = y.length;
    let P = !1;
    if (xe) {
      var $ = Zl(s) === xi;
      $ !== (b === 0) && (s = ti(), Je(s), Lt(!1), P = !0);
    }
    for (var A = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      Ye
    ), V = null, Z = dc(), z = 0; z < b; z += 1) {
      xe && Pe.nodeType === wr && /** @type {Comment} */
      Pe.data === Hs && (s = /** @type {Comment} */
      Pe, P = !0, Lt(!1));
      var S = y[z], T = r(S, z), x = w ? null : a.get(T);
      x ? (d && Mr(x.v, S), h ? Mr(
        /** @type {Value<number>} */
        x.i,
        z
      ) : x.i = z, Z && I.skipped_effects.delete(x.e)) : (x = Jf(
        w ? s : null,
        V,
        S,
        T,
        z,
        o,
        t,
        n
      ), w && (x.o = !0, V === null ? l = x : V.next = x, V = x), a.set(T, x)), A.add(T);
    }
    if (b === 0 && i && !g)
      if (w)
        g = {
          fragment: null,
          effect: St(() => i(s))
        };
      else {
        var C = document.createDocumentFragment(), O = Ct();
        C.append(O), g = {
          fragment: C,
          effect: St(() => i(O))
        };
      }
    if (xe && b > 0 && Je(ti()), !w)
      if (Z) {
        for (const [H, K] of a)
          A.has(H) || I.skipped_effects.add(K.e);
        I.oncommit(_), I.ondiscard(() => {
        });
      } else
        _();
    P && Lt(!0), u(m);
  }), E = { effect: k, items: a, first: l };
  w = !1, xe && (s = Pe);
}
function Uf(e, t, n, r, o) {
  var i = (r & hf) !== 0, s = t.length, a = e.items, l = e.first, c, d = null, h, f = [], g = [], m, y, w, _;
  if (i)
    for (_ = 0; _ < s; _ += 1)
      m = t[_], y = o(m, _), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (_ = 0; _ < s; _ += 1) {
    if (m = t[_], y = o(m, _), w = /** @type {EachItem} */
    a.get(y), e.first ??= w, !w.o) {
      w.o = !0;
      var k = d ? d.next : l;
      jt(e, d, w), jt(e, w, k), Yi(w, k, n), d = w, f = [], g = [], l = d.next;
      continue;
    }
    if ((w.e.f & Vt) !== 0 && (Xs(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (c !== void 0 && c.has(w)) {
        if (f.length < g.length) {
          var E = g[0], b;
          d = E.prev;
          var P = f[0], $ = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            Yi(f[b], E, n);
          for (b = 0; b < g.length; b += 1)
            c.delete(g[b]);
          jt(e, P.prev, $.next), jt(e, d, P), jt(e, $, E), l = E, d = $, _ -= 1, f = [], g = [];
        } else
          c.delete(w), Yi(w, l, n), jt(e, w.prev, w.next), jt(e, w, d === null ? e.first : d.next), jt(e, d, w), d = w;
        continue;
      }
      for (f = [], g = []; l !== null && l.k !== y; )
        (l.e.f & Vt) === 0 && (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    f.push(w), d = w, l = w.next;
  }
  let A = a.size > s;
  if (l !== null || c !== void 0) {
    for (var I = c === void 0 ? [] : Ls(c); l !== null; )
      (l.e.f & Vt) === 0 && I.push(l), l = l.next;
    var V = I.length;
    if (A = a.size - V > s, V > 0) {
      var Z = (r & Ml) !== 0 && s === 0 ? n : null;
      if (i) {
        for (_ = 0; _ < V; _ += 1)
          I[_].a?.measure();
        for (_ = 0; _ < V; _ += 1)
          I[_].a?.fix();
      }
      Gf(e, I, Z);
    }
  }
  if (A)
    for (const z of a.values())
      z.o || (jt(e, d, z), d = z);
  e.effect.last = d && d.e, i && tr(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function Jf(e, t, n, r, o, i, s, a) {
  var l = (s & Al) !== 0, c = (s & gf) === 0, d = l ? c ? /* @__PURE__ */ sc(n, !1, !1) : Gn(n) : n, h = (s & Ol) === 0 ? o : Gn(o), f = {
    i: h,
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
      var g = document.createDocumentFragment();
      g.append(e = Ct());
    }
    return f.e = St(() => i(
      /** @type {Node} */
      e,
      d,
      h,
      a
    )), t !== null && (t.next = f), f;
  } finally {
  }
}
function Yi(e, t, n) {
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
      /* @__PURE__ */ rn(i)
    );
    o.before(i), i = s;
  }
}
function jt(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function nc(e, t, n, r) {
  const o = wo() ? _o : Bs;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = Ye, s = (
    /** @type {Effect} */
    $e
  ), a = Qf();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ eh(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (d) {
        (s.f & Pn) === 0 && Ar(d, s);
      }
      i?.deactivate(), ni();
    }).catch((c) => {
      Ar(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), ni();
    }
  }) : l();
}
function Qf() {
  var e = $e, t = Le, n = Ze, r = Ye;
  return function(i = !0) {
    Wt(e), Nt(t), Tr(n), i && r?.activate();
  };
}
function ni() {
  Wt(null), Nt(null), Tr(null);
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  var t = ft | Tt, n = Le !== null && (Le.f & ft) !== 0 ? (
    /** @type {Derived} */
    Le
  ) : null;
  return $e !== null && ($e.f |= yr), {
    ctx: Ze,
    deps: null,
    effects: null,
    equals: Yl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ct
    ),
    wv: 0,
    parent: n ?? $e,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function eh(e, t) {
  let n = (
    /** @type {Effect | null} */
    $e
  );
  n === null && Pf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Gn(
    /** @type {V} */
    ct
  ), s = !Le, a = /* @__PURE__ */ new Map();
  return ch(() => {
    var l = Rl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === Ye && c.committed && c.deactivate(), ni();
      });
    } catch (f) {
      l.reject(f), ni();
    }
    var c = (
      /** @type {Batch} */
      Ye
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(Cr), a.delete(c), a.set(c, l);
    }
    const h = (f, g = void 0) => {
      if (c.activate(), g)
        g !== Cr && (i.f |= Wn, Mr(i, g));
      else {
        (i.f & Wn) !== 0 && (i.f ^= Wn), Mr(i, f);
        for (const [m, y] of a) {
          if (a.delete(m), m === c) break;
          y.reject(Cr);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), $i(() => {
    for (const l of a.values())
      l.reject(Cr);
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
  const t = /* @__PURE__ */ _o(e);
  return Cc(t), t;
}
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  const t = /* @__PURE__ */ _o(e);
  return t.equals = Xl, t;
}
function rc(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      it(
        /** @type {Effect} */
        t[n]
      );
  }
}
function th(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ft) === 0)
      return (t.f & Pn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Fs(e) {
  var t, n = $e;
  Wt(th(e));
  try {
    e.f &= ~fr, rc(e), t = Nc(e);
  } finally {
    Wt(n);
  }
  return t;
}
function oc(e) {
  var t = Fs(e);
  if (e.equals(t) || (Ye?.is_fork || (e.v = t), e.wv = Ec()), !_r)
    if (Kt !== null)
      (no() || Ye?.is_fork) && Kt.set(e, t);
    else {
      var n = (e.f & en) === 0 ? Ln : vt;
      pt(e, n);
    }
}
let us = /* @__PURE__ */ new Set();
const Xn = /* @__PURE__ */ new Map();
let ic = !1;
function Gn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Yl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  const n = Gn(e);
  return Cc(n), n;
}
// @__NO_SIDE_EFFECTS__
function sc(e, t = !1, n = !0) {
  const r = Gn(e);
  return t || (r.equals = Xl), Fr && n && Ze !== null && Ze.l !== null && (Ze.l.s ??= []).push(r), r;
}
function J(e, t, n = !1) {
  Le !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!hn || (Le.f & ba) !== 0) && wo() && (Le.f & (ft | Mn | Is | ba)) !== 0 && !$n?.includes(e) && Vf();
  let r = n ? Yt(t) : t;
  return Mr(e, r);
}
function Mr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    _r ? Xn.set(e, t) : Xn.set(e, n), e.v = t;
    var r = Jt.ensure();
    r.capture(e, n), (e.f & ft) !== 0 && ((e.f & Tt) !== 0 && Fs(
      /** @type {Derived} */
      e
    ), pt(e, (e.f & en) !== 0 ? vt : Ln)), e.wv = Ec(), ac(e, Tt), wo() && $e !== null && ($e.f & vt) !== 0 && ($e.f & (Hn | er)) === 0 && (Bt === null ? dh([e]) : Bt.push(e)), !r.is_fork && us.size > 0 && !ic && nh();
  }
  return t;
}
function nh() {
  ic = !1;
  var e = qn;
  ri(!0);
  const t = Array.from(us);
  try {
    for (const n of t)
      (n.f & vt) !== 0 && pt(n, Ln), bo(n) && oo(n);
  } finally {
    ri(e);
  }
  us.clear();
}
function ka(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function eo(e) {
  J(e, e.v + 1);
}
function ac(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = wo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === $e)) {
        var l = (a & Tt) === 0;
        if (l && pt(s, t), (a & ft) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          Kt?.delete(c), (a & fr) === 0 && (a & en && (s.f |= fr), ac(c, Ln));
        } else l && ((a & Mn) !== 0 && xn !== null && xn.add(
          /** @type {Effect} */
          s
        ), hr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Yt(e) {
  if (typeof e != "object" || e === null || gn in e)
    return e;
  const t = Ci(e);
  if (t !== zl && t !== kf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = bi(e), o = /* @__PURE__ */ Ne(0), i = lr, s = (a) => {
    if (lr === i)
      return a();
    var l = Le, c = lr;
    Nt(null), Pa(i);
    var d = a();
    return Nt(l), Pa(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Hf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ Ne(c.value);
          return n.set(l, h), h;
        }) : J(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Ne(ct));
            n.set(l, d), eo(o);
          }
        } else
          J(c, ct), eo(o);
        return !0;
      },
      get(a, l, c) {
        if (l === gn)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Nn(a, l)?.writable) && (d = s(() => {
          var g = Yt(h ? a[l] : ct), m = /* @__PURE__ */ Ne(g);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === ct ? void 0 : f;
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
          if (h !== void 0 && f !== ct)
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
        if (l === gn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== ct || Reflect.has(a, l);
        if (c !== void 0 || $e !== null && (!d || Nn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Yt(a[l]) : ct, g = /* @__PURE__ */ Ne(f);
            return g;
          }), n.set(l, c));
          var h = u(c);
          if (h === ct)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var h = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var m = n.get(g + "");
            m !== void 0 ? J(m, ct) : g in a && (m = s(() => /* @__PURE__ */ Ne(ct)), n.set(g + "", m));
          }
        if (h === void 0)
          (!f || Nn(a, l)?.writable) && (h = s(() => /* @__PURE__ */ Ne(void 0)), J(h, Yt(c)), n.set(l, h));
        else {
          f = h.v !== ct;
          var y = s(() => Yt(c));
          J(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= _.v && J(_, k + 1);
          }
          eo(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== ct;
        });
        for (var [c, d] of n)
          d.v !== ct && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Lf();
      }
    }
  );
}
function Ea(e) {
  try {
    if (e !== null && typeof e == "object" && gn in e)
      return e[gn];
  } catch {
  }
  return e;
}
function rh(e, t) {
  return Object.is(Ea(e), Ea(t));
}
var Et, lc, cc, uc;
function ds() {
  if (Et === void 0) {
    Et = window, lc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    cc = Nn(t, "firstChild").get, uc = Nn(t, "nextSibling").get, xa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), xa(n) && (n.__t = void 0);
  }
}
function Ct(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return cc.call(e);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return uc.call(e);
}
function B(e, t) {
  if (!xe)
    return /* @__PURE__ */ Qe(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(Pe)
  );
  if (n === null)
    n = Pe.appendChild(Ct());
  else if (t && n.nodeType !== Ni) {
    var r = Ct();
    return n?.before(r), Je(r), r;
  }
  return Je(n), n;
}
function ie(e, t = !1) {
  if (!xe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qe(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ rn(n) : n;
  }
  if (t && Pe?.nodeType !== Ni) {
    var r = Ct();
    return Pe?.before(r), Je(r), r;
  }
  return Pe;
}
function L(e, t = 1, n = !1) {
  let r = xe ? Pe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ rn(r);
  if (!xe)
    return r;
  if (n && r?.nodeType !== Ni) {
    var i = Ct();
    return r === null ? o?.after(i) : r.before(i), Je(i), i;
  }
  return Je(r), /** @type {TemplateNode} */
  r;
}
function Ks(e) {
  e.textContent = "";
}
function dc() {
  return !1;
}
function oh(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, tr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function ih(e) {
  xe && /* @__PURE__ */ Qe(e) !== null && Ks(e);
}
let Sa = !1;
function sh() {
  Sa || (Sa = !0, document.addEventListener(
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
function Zs(e) {
  var t = Le, n = $e;
  Nt(null), Wt(null);
  try {
    return e();
  } finally {
    Nt(t), Wt(n);
  }
}
function fc(e) {
  $e === null && (Le === null && Df(), Tf()), _r && $f();
}
function ah(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Xt(e, t, n) {
  var r = $e;
  r !== null && (r.f & Vt) !== 0 && (e |= Vt);
  var o = {
    ctx: Ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Tt | en,
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
      oo(o), o.f |= Si;
    } catch (a) {
      throw it(o), a;
    }
  else t !== null && hr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & yr) === 0 && (i = i.first, (e & Mn) !== 0 && (e & Tn) !== 0 && i !== null && (i.f |= Tn)), i !== null && (i.parent = r, r !== null && ah(i, r), Le !== null && (Le.f & ft) !== 0 && (e & er) === 0)) {
    var s = (
      /** @type {Derived} */
      Le
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function no() {
  return Le !== null && !hn;
}
function $i(e) {
  const t = Xt(ki, null, !1);
  return pt(t, vt), t.teardown = e, t;
}
function Xe(e) {
  fc();
  var t = (
    /** @type {Effect} */
    $e.f
  ), n = !Le && (t & Hn) !== 0 && (t & Si) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ze
    );
    (r.e ??= []).push(e);
  } else
    return hc(e);
}
function hc(e) {
  return Xt(Vs | Kl, e, !1);
}
function gc(e) {
  return fc(), Xt(ki | Kl, e, !0);
}
function Ys(e) {
  Jt.ensure();
  const t = Xt(er | yr, e, !0);
  return () => {
    it(t);
  };
}
function lh(e) {
  Jt.ensure();
  const t = Xt(er | yr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Er(t, () => {
      it(t), r(void 0);
    }) : (it(t), r(void 0));
  });
}
function Kr(e) {
  return Xt(Vs, e, !1);
}
function ch(e) {
  return Xt(Is | yr, e, !0);
}
function xo(e, t = 0) {
  return Xt(ki | t, e, !0);
}
function Ce(e, t = [], n = [], r = []) {
  nc(r, t, n, (o) => {
    Xt(ki, () => e(...o.map(u)), !0);
  });
}
function Zr(e, t = 0) {
  var n = Xt(Mn | t, e, !0);
  return n;
}
function vc(e, t = 0) {
  var n = Xt(Bl | t, e, !0);
  return n;
}
function St(e) {
  return Xt(Hn | yr, e, !0);
}
function pc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = _r, r = Le;
    Na(!0), Nt(null);
    try {
      t.call(null);
    } finally {
      Na(n), Nt(r);
    }
  }
}
function mc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Zs(() => {
      o.abort(Cr);
    });
    var r = n.next;
    (n.f & er) !== 0 ? n.parent = null : it(n, t), n = r;
  }
}
function uh(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Hn) === 0 && it(t), t = n;
  }
}
function it(e, t = !0) {
  var n = !1;
  (t || (e.f & Fl) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (yc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), mc(e, t && !n), oi(e, 0), pt(e, Pn);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  pc(e);
  var o = e.parent;
  o !== null && o.first !== null && wc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function yc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ rn(e)
    );
    e.remove(), e = n;
  }
}
function wc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Er(e, t, n = !0) {
  var r = [];
  Ws(e, r, !0), _c(r, () => {
    n && it(e), t && t();
  });
}
function _c(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ws(e, t, n) {
  if ((e.f & Vt) === 0) {
    if (e.f ^= Vt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Tn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Hn) !== 0 && (e.f & Mn) !== 0;
      Ws(r, t, i ? n : !1), r = o;
    }
  }
}
function Xs(e) {
  xc(e, !0);
}
function xc(e, t) {
  if ((e.f & Vt) !== 0) {
    e.f ^= Vt, (e.f & vt) === 0 && (pt(e, Tt), hr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Tn) !== 0 || (n.f & Hn) !== 0;
      xc(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function bc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ rn(n)
    );
    t.append(n), n = o;
  }
}
let qn = !1;
function ri(e) {
  qn = e;
}
let _r = !1;
function Na(e) {
  _r = e;
}
let Le = null, hn = !1;
function Nt(e) {
  Le = e;
}
let $e = null;
function Wt(e) {
  $e = e;
}
let $n = null;
function Cc(e) {
  Le !== null && ($n === null ? $n = [e] : $n.push(e));
}
let xt = null, Ht = 0, Bt = null;
function dh(e) {
  Bt = e;
}
let kc = 1, ro = 0, lr = ro;
function Pa(e) {
  lr = e;
}
function Ec() {
  return ++kc;
}
function bo(e) {
  var t = e.f;
  if ((t & Tt) !== 0)
    return !0;
  if (t & ft && (e.f &= ~fr), (t & Ln) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (bo(
          /** @type {Derived} */
          i
        ) && oc(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & en) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Kt === null && pt(e, vt);
  }
  return !1;
}
function Sc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !$n?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & ft) !== 0 ? Sc(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pt(i, Tt) : (i.f & vt) !== 0 && pt(i, Ln), hr(
        /** @type {Effect} */
        i
      ));
    }
}
function Nc(e) {
  var t = xt, n = Ht, r = Bt, o = Le, i = $n, s = Ze, a = hn, l = lr, c = e.f;
  xt = /** @type {null | Value[]} */
  null, Ht = 0, Bt = null, Le = (c & (Hn | er)) === 0 ? e : null, $n = null, Tr(e.ctx), hn = !1, lr = ++ro, e.ac !== null && (Zs(() => {
    e.ac.abort(Cr);
  }), e.ac = null);
  try {
    e.f |= ls;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (xt !== null) {
      var g;
      if (oi(e, Ht), f !== null && Ht > 0)
        for (f.length = Ht + xt.length, g = 0; g < xt.length; g++)
          f[Ht + g] = xt[g];
      else
        e.deps = f = xt;
      if (qn && no() && (e.f & en) !== 0)
        for (g = Ht; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Ht < f.length && (oi(e, Ht), f.length = Ht);
    if (wo() && Bt !== null && !hn && f !== null && (e.f & (ft | Ln | Tt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Bt.length; g++)
        Sc(
          Bt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (ro++, Bt !== null && (r === null ? r = Bt : r.push(.../** @type {Source[]} */
    Bt))), (e.f & Wn) !== 0 && (e.f ^= Wn), h;
  } catch (m) {
    return Ul(m);
  } finally {
    e.f ^= ls, xt = t, Ht = n, Bt = r, Le = o, $n = i, Tr(s), hn = a, lr = l;
  }
}
function fh(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Cf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & ft) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (pt(t, Ln), (t.f & en) !== 0 && (t.f ^= en, t.f &= ~fr), rc(
    /** @type {Derived} **/
    t
  ), oi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function oi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      fh(e, n[r]);
}
function oo(e) {
  var t = e.f;
  if ((t & Pn) === 0) {
    pt(e, vt);
    var n = $e, r = qn;
    $e = e, qn = !0;
    try {
      (t & (Mn | Bl)) !== 0 ? uh(e) : mc(e), pc(e);
      var o = Nc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = kc;
      var i;
      ss && Bf && (e.f & Tt) !== 0 && e.deps;
    } finally {
      qn = r, $e = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & ft) !== 0;
  if (Le !== null && !hn) {
    var r = $e !== null && ($e.f & Pn) !== 0;
    if (!r && !$n?.includes(e)) {
      var o = Le.deps;
      if ((Le.f & ls) !== 0)
        e.rv < ro && (e.rv = ro, xt === null && o !== null && o[Ht] === e ? Ht++ : xt === null ? xt = [e] : xt.includes(e) || xt.push(e));
      else {
        (Le.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Le] : i.includes(Le) || i.push(Le);
      }
    }
  }
  if (_r) {
    if (Xn.has(e))
      return Xn.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & vt) === 0 && s.reactions !== null || $c(s)) && (a = Fs(s)), Xn.set(s, a), a;
    }
  } else n && (!Kt?.has(e) || Ye?.is_fork && !no()) && (s = /** @type {Derived} */
  e, bo(s) && oc(s), qn && no() && (s.f & en) === 0 && Pc(s));
  if (Kt?.has(e))
    return Kt.get(e);
  if ((e.f & Wn) !== 0)
    throw e.v;
  return e.v;
}
function Pc(e) {
  if (e.deps !== null) {
    e.f ^= en;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ft) !== 0 && (t.f & en) === 0 && Pc(
        /** @type {Derived} */
        t
      );
  }
}
function $c(e) {
  if (e.v === ct) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Xn.has(t) || (t.f & ft) !== 0 && $c(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ut(e) {
  var t = hn;
  try {
    return hn = !0, e();
  } finally {
    hn = t;
  }
}
const hh = -7169;
function pt(e, t) {
  e.f = e.f & hh | t;
}
function gh(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function qs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (gn in e)
      fs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && gn in n && fs(n);
      }
  }
}
function fs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        fs(e[r], t);
      } catch {
      }
    const n = Ci(e);
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
const Tc = /* @__PURE__ */ new Set(), hs = /* @__PURE__ */ new Set();
function js(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || jr.call(t, i), !i.cancelBubble)
      return Zs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function gs(e, t, n, r = {}) {
  var o = js(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ii(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = js(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && $i(() => {
    t.removeEventListener(e, s, i);
  });
}
function nr(e) {
  for (var t = 0; t < e.length; t++)
    Tc.add(e[t]);
  for (var n of hs)
    n(e);
}
let $a = null;
function jr(e) {
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
    ei(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Le, h = $e;
    Nt(null), Wt(null);
    try {
      for (var f, g = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && y.call(i, e);
        } catch (w) {
          f ? g.push(w) : f = w;
        }
        if (e.cancelBubble || m === t || m === null)
          break;
        i = m;
      }
      if (f) {
        for (let w of g)
          queueMicrotask(() => {
            throw w;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Nt(d), Wt(h);
    }
  }
}
function Gs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function $t(e, t) {
  var n = (
    /** @type {Effect} */
    $e
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & Ll) !== 0, r = (t & wf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (xe)
      return $t(Pe, null), Pe;
    o === void 0 && (o = Gs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Qe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || lc ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(s)
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
function vh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Ll) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (xe)
      return $t(Pe, null), Pe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Gs(i)
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
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(c)
      ), h = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      $t(d, h);
    } else
      $t(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  return /* @__PURE__ */ vh(e, t, "svg");
}
function ke(e = "") {
  if (!xe) {
    var t = Ct(e + "");
    return $t(t, t), t;
  }
  var n = Pe;
  return n.nodeType !== Ni && (n.before(n = Ct()), Je(n)), $t(n, n), n;
}
function Se() {
  if (xe)
    return $t(Pe, null), Pe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ct();
  return e.append(t, n), $t(t, n), e;
}
function D(e, t) {
  if (xe) {
    var n = (
      /** @type {Effect} */
      $e
    );
    ((n.f & Si) === 0 || n.nodes_end === null) && (n.nodes_end = Pe), Dn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ph(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const mh = [
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
function yh(e) {
  return mh.includes(e);
}
const wh = {
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
function _h(e) {
  return e = e.toLowerCase(), wh[e] ?? e;
}
const xh = ["touchstart", "touchmove"];
function bh(e) {
  return xh.includes(e);
}
const Ch = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function kh(e) {
  return Ch.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Fe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Dc(e, t) {
  return Ac(e, t);
}
function Eh(e, t) {
  ds(), t.intro = t.intro ?? !1;
  const n = t.target, r = xe, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(n)
    ); i && (i.nodeType !== wr || /** @type {Comment} */
    i.data !== Vl); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ rn(i);
    if (!i)
      throw dr;
    Lt(!0), Je(
      /** @type {Comment} */
      i
    );
    const s = Ac(e, { ...t, anchor: i });
    return Lt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== dr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Of(), ds(), Ks(n), Lt(!1), Dc(e, t);
  } finally {
    Lt(r), Je(o);
  }
}
const xr = /* @__PURE__ */ new Map();
function Ac(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ds();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var m = bh(g);
        t.addEventListener(g, jr, { passive: m });
        var y = xr.get(g);
        y === void 0 ? (document.addEventListener(g, jr, { passive: m }), xr.set(g, 1)) : xr.set(g, y + 1);
      }
    }
  };
  l(Ls(Tc)), hs.add(l);
  var c = void 0, d = lh(() => {
    var h = n ?? t.appendChild(Ct());
    return qf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          ue({});
          var g = (
            /** @type {ComponentContext} */
            Ze
          );
          g.c = i;
        }
        if (o && (r.$$events = o), xe && $t(
          /** @type {TemplateNode} */
          f,
          null
        ), c = e(f, r) || {}, xe && ($e.nodes_end = Pe, Pe === null || Pe.nodeType !== wr || /** @type {Comment} */
        Pe.data !== Hs))
          throw yo(), dr;
        i && de();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, jr);
        var g = (
          /** @type {number} */
          xr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, jr), xr.delete(f)) : xr.set(f, g);
      }
      hs.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return vs.set(c, d), c;
}
let vs = /* @__PURE__ */ new WeakMap();
function Sh(e, t) {
  const n = vs.get(e);
  return n ? (vs.delete(e), n(t)) : Promise.resolve();
}
class Ti {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
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
  #e = /* @__PURE__ */ new Map();
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
  #i = () => {
    var t = (
      /** @type {Batch} */
      Ye
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Xs(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#e.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (it(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var c = document.createDocumentFragment();
            bc(s, c), c.append(Ct()), this.#n.set(i, { effect: s, fragment: c });
          } else
            it(s);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), Er(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (it(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      Ye
    ), o = dc();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = Ct();
        i.append(s), this.#n.set(t, {
          effect: St(() => n(s)),
          fragment: i
        });
      } else
        this.#e.set(
          t,
          St(() => n(this.anchor))
        );
    if (this.#t.set(r, t), o) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#i), r.ondiscard(this.#o);
    } else
      xe && (this.anchor = Pe), this.#i();
  }
}
function je(e, t, ...n) {
  var r = new Ti(e);
  Zr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Tn);
}
function Vn(e) {
  Ze === null && Rs(), Fr && Ze.l !== null ? Nh(Ze).m.push(e) : Xe(() => {
    const t = ut(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Co(e) {
  Ze === null && Rs(), Vn(() => () => ut(e));
}
function Nh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ae(e, t, n = !1) {
  xe && Dn();
  var r = new Ti(e), o = n ? Tn : 0;
  function i(s, a) {
    if (xe) {
      const c = Zl(e) === xi;
      if (s === c) {
        var l = ti();
        Je(l), r.anchor = l, Lt(!1), r.ensure(s, a), Lt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Zr(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Ph(e, t) {
  xe && Je(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(e)
  ), xo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Us(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ce(() => {
    var a = (
      /** @type {Effect} */
      $e
    );
    if (s === (s = t() ?? "")) {
      xe && Dn();
      return;
    }
    if (a.nodes_start !== null && (yc(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (xe) {
        Pe.data;
        for (var l = Dn(), c = l; l !== null && (l.nodeType !== wr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ rn(l);
        if (l === null)
          throw yo(), dr;
        $t(Pe, c), i = Je(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Gs(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ Qe(h)), $t(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Qe(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Qe(h)
          );
      else
        i.before(h);
    }
  });
}
function Di(e, t, n) {
  xe && Dn();
  var r = new Ti(e);
  Zr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Tn);
}
function $h(e, t, n, r, o, i) {
  let s = xe;
  xe && Dn();
  var a = null;
  xe && Pe.nodeType === Nf && (a = /** @type {Element} */
  Pe, Dn());
  var l = (
    /** @type {TemplateNode} */
    xe ? Pe : e
  ), c = new Ti(l, !1);
  Zr(() => {
    const d = t() || null;
    var h = d === "svg" ? xf : null;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (f) => {
      if (d) {
        if (a = xe ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), $t(a, a), r) {
          xe && kh(d) && a.append(document.createComment(""));
          var g = (
            /** @type {TemplateNode} */
            xe ? /* @__PURE__ */ Qe(a) : a.appendChild(Ct())
          );
          xe && (g === null ? Lt(!1) : Je(g)), r(a, g);
        }
        $e.nodes_end = a, f.before(a);
      }
      xe && Je(f);
    }), () => {
    };
  }, Tn), $i(() => {
  }), s && (Lt(!0), Je(l));
}
function ze(e, t) {
  Kr(() => {
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
  Kr(() => {
    var r = ut(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      xo(() => {
        var s = n();
        qs(s), o && Wl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Th(e, t) {
  var n = void 0, r;
  vc(() => {
    n !== (n = t()) && (r && (it(r), r = null), n && (r = St(() => {
      Kr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Oc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Oc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Dh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Oc(e)) && (r && (r += " "), r += t);
  return r;
}
function In(e) {
  return typeof e == "object" ? Dh(e) : e ?? "";
}
const Ta = [...` 	
\r\f \v\uFEFF`];
function Ah(e, t, n) {
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
function Wi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Oh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Wi)), o && l.push(...Object.keys(o).map(Wi));
      var c = 0, d = -1;
      const y = e.length;
      for (var h = 0; h < y; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === y - 1) {
            if (d !== -1) {
              var g = Wi(e.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && h++;
                var m = e.substring(c, h).trim();
                n += " " + m + ";";
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
function Dt(e, t, n, r, o, i) {
  var s = e.__className;
  if (xe || s !== n || s === void 0) {
    var a = Ah(n, r, i);
    (!xe || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Xi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ht(e, t, n, r) {
  var o = e.__style;
  if (xe || o !== t) {
    var i = Oh(t, r);
    (!xe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Xi(e, n?.[0], r[0]), Xi(e, n?.[1], r[1], "important")) : Xi(e, n, r));
  return r;
}
function ps(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!bi(t))
      return zf();
    for (var r of e.options)
      r.selected = t.includes(Aa(r));
    return;
  }
  for (r of e.options) {
    var o = Aa(r);
    if (rh(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Mh(e) {
  var t = new MutationObserver(() => {
    ps(e, e.__value);
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
  }), $i(() => {
    t.disconnect();
  });
}
function Aa(e) {
  return "__value" in e ? e.__value : e.value;
}
const Kn = Symbol("class"), fn = Symbol("style"), Mc = Symbol("is custom element"), Hc = Symbol("is html");
function Cn(e) {
  if (xe) {
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
    e.__on_r = n, tr(n), sh();
  }
}
function Wo(e, t) {
  var n = Ai(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Vo(e, t) {
  var n = Ai(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Hh(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = Ai(e);
  xe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Sf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Lc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Lh(e, t, n, r, o = !1, i = !1) {
  if (xe && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Cn(s);
  }
  var l = Ai(e), c = l[Mc], d = !l[Hc];
  let h = xe && c;
  h && Lt(!1);
  var f = t || {}, g = e.tagName === "OPTION";
  for (var m in t)
    m in n || (n[m] = null);
  n.class ? n.class = In(n.class) : (r || n[Kn]) && (n.class = null), n[fn] && (n.style ??= null);
  var y = Lc(e);
  for (const $ in n) {
    let A = n[$];
    if (g && $ === "value" && A == null) {
      e.value = e.__value = "", f[$] = A;
      continue;
    }
    if ($ === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Dt(e, w, A, r, t?.[Kn], n[Kn]), f[$] = A, f[Kn] = n[Kn];
      continue;
    }
    if ($ === "style") {
      ht(e, A, t?.[fn], n[fn]), f[$] = A, f[fn] = n[fn];
      continue;
    }
    var _ = f[$];
    if (!(A === _ && !(A === void 0 && e.hasAttribute($)))) {
      f[$] = A;
      var k = $[0] + $[1];
      if (k !== "$$")
        if (k === "on") {
          const I = {}, V = "$$" + $;
          let Z = $.slice(2);
          var E = yh(Z);
          if (ph(Z) && (Z = Z.slice(0, -7), I.capture = !0), !E && _) {
            if (A != null) continue;
            e.removeEventListener(Z, f[V], I), f[V] = null;
          }
          if (A != null)
            if (E)
              e[`__${Z}`] = A, nr([Z]);
            else {
              let z = function(S) {
                f[$].call(this, S);
              };
              f[V] = js(Z, e, z, I);
            }
          else E && (e[`__${Z}`] = void 0);
        } else if ($ === "style")
          be(e, $, A);
        else if ($ === "autofocus")
          oh(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!c && ($ === "__value" || $ === "value" && A != null))
          e.value = e.__value = A;
        else if ($ === "selected" && g)
          Hh(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var b = $;
          d || (b = _h(b));
          var P = b === "defaultValue" || b === "defaultChecked";
          if (A == null && !c && !P)
            if (l[$] = null, b === "value" || b === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if (b === "value") {
                let Z = I.defaultValue;
                I.removeAttribute(b), I.defaultValue = Z, I.value = I.__value = V ? Z : null;
              } else {
                let Z = I.defaultChecked;
                I.removeAttribute(b), I.defaultChecked = Z, I.checked = V ? Z : !1;
              }
            } else
              e.removeAttribute($);
          else P || y.includes(b) && (c || typeof A != "string") ? (e[b] = A, b in l && (l[b] = ct)) : typeof A != "function" && be(e, b, A);
        }
    }
  }
  return h && Lt(!0), f;
}
function et(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  nc(o, n, r, (l) => {
    var c = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (vc(() => {
      var m = t(...l.map(u)), y = Lh(
        e,
        c,
        m,
        i,
        s,
        a
      );
      f && h && "value" in m && ps(
        /** @type {HTMLSelectElement} */
        e,
        m.value
      );
      for (let _ of Object.getOwnPropertySymbols(d))
        m[_] || it(d[_]);
      for (let _ of Object.getOwnPropertySymbols(m)) {
        var w = m[_];
        _.description === bf && (!c || w !== c[_]) && (d[_] && it(d[_]), d[_] = St(() => Th(e, () => w))), y[_] = w;
      }
      c = y;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Kr(() => {
        ps(
          g,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Mh(g);
      });
    }
    f = !0;
  });
}
function Ai(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Mc]: e.nodeName.includes("-"),
      [Hc]: e.namespaceURI === _f
    }
  );
}
var Oa = /* @__PURE__ */ new Map();
function Lc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Oa.get(t);
  if (n) return n;
  Oa.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Il(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Ci(o);
  }
  return n;
}
class Js {
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
          Js.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Vh = /* @__PURE__ */ new Js({
  box: "border-box"
});
function Ma(e, t, n) {
  var r = Vh.observe(e, () => n(e[t]));
  Kr(() => (ut(() => n(e[t])), r));
}
function Ha(e, t) {
  return e === t || e?.[gn] === t;
}
function At(e = {}, t, n, r) {
  return Kr(() => {
    var o, i;
    return xo(() => {
      o = i, i = [], ut(() => {
        e !== n(...i) && (t(e, ...i), o && Ha(n(...o), e) && t(null, ...o));
      });
    }), () => {
      tr(() => {
        i && Ha(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Vc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => qs(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ _o(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && gc(() => {
    La(t, r), as(n.b);
  }), Xe(() => {
    const o = ut(() => n.m.map(Ef));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Xe(() => {
    La(t, r), as(n.a);
  });
}
function La(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let Io = !1;
function Ih(e) {
  var t = Io;
  try {
    return Io = !1, [e(), Io];
  } finally {
    Io = t;
  }
}
const zh = {
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
function Re(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    zh
  );
}
const Rh = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = $e;
      try {
        Wt(e.parent_effect), e.special[t] = p(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Hl
        );
      } finally {
        Wt(r);
      }
    }
    return e.special[t](n), ka(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ka(e.version)), !0;
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
      version: Gn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        $e
      )
    },
    Rh
  );
}
const Bh = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Wr(o) && (o = o());
      const i = Nn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Nn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === gn || t === zs) return !1;
    for (let n of e.props)
      if (Wr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Wr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ke(...e) {
  return new Proxy({ props: e }, Bh);
}
function p(e, t, n, r) {
  var o = !Fr || (n & pf) !== 0, i = (n & mf) !== 0, s = (n & yf) !== 0, a = (
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
    var h = gn in e || zs in e;
    d = Nn(e, t)?.set ?? (h && t in e ? (E) => e[t] = E : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Ih(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Mf(), d(f)));
  var m;
  if (o ? m = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? c() : (l = !0, E);
  } : m = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & Hl) === 0)
    return m;
  if (d) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, b) {
        return arguments.length > 0 ? ((!o || !b || y || g) && d(b ? m() : E), E) : m();
      }
    );
  }
  var w = !1, _ = ((n & vf) !== 0 ? _o : Bs)(() => (w = !1, m()));
  i && u(_);
  var k = (
    /** @type {Effect} */
    $e
  );
  return (
    /** @type {() => V} */
    function(E, b) {
      if (arguments.length > 0) {
        const P = b ? u(_) : o && i ? Yt(E) : E;
        return J(_, P), w = !0, a !== void 0 && (a = P), E;
      }
      return _r && w || (k.f & Pn) !== 0 ? _.v : u(_);
    }
  );
}
function Fh(e) {
  return new Kh(e);
}
class Kh {
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
      var a = /* @__PURE__ */ sc(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === zs ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return J(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Eh : Dc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || ei(this, i, {
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
      Sh(this.#e);
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
let Ic;
typeof HTMLElement == "function" && (Ic = class extends HTMLElement {
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
          r !== "default" && (i.name = r), D(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Zh(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Xo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Fh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Ys(() => {
        xo(() => {
          this.$$r = !0;
          for (const r of Qo(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Xo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Xo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Qo(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Xo(e, t, n, r) {
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
function Zh(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends Ic {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Qo(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Qo(t).forEach((a) => {
    ei(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Xo(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = Nn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ei(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Yh = { value: () => {
} };
function Oi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new qo(n);
}
function qo(e) {
  this._ = e;
}
function Wh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
qo.prototype = Oi.prototype = {
  constructor: qo,
  on: function(e, t) {
    var n = this._, r = Wh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Xh(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ia(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ia(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new qo(e);
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
function Xh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ia(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Yh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ms = "http://www.w3.org/1999/xhtml";
const za = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ms,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), za.hasOwnProperty(t) ? { space: za[t], local: e } : e;
}
function qh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ms && t.documentElement.namespaceURI === ms ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function jh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function zc(e) {
  var t = Mi(e);
  return (t.local ? jh : qh)(t);
}
function Gh() {
}
function Qs(e) {
  return e == null ? Gh : function() {
    return this.querySelector(e);
  };
}
function Uh(e) {
  typeof e != "function" && (e = Qs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new zt(r, this._parents);
}
function Jh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Qh() {
  return [];
}
function Rc(e) {
  return e == null ? Qh : function() {
    return this.querySelectorAll(e);
  };
}
function eg(e) {
  return function() {
    return Jh(e.apply(this, arguments));
  };
}
function tg(e) {
  typeof e == "function" ? e = eg(e) : e = Rc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new zt(r, o);
}
function Bc(e) {
  return function() {
    return this.matches(e);
  };
}
function Fc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var ng = Array.prototype.find;
function rg(e) {
  return function() {
    return ng.call(this.children, e);
  };
}
function og() {
  return this.firstElementChild;
}
function ig(e) {
  return this.select(e == null ? og : rg(typeof e == "function" ? e : Fc(e)));
}
var sg = Array.prototype.filter;
function ag() {
  return Array.from(this.children);
}
function lg(e) {
  return function() {
    return sg.call(this.children, e);
  };
}
function cg(e) {
  return this.selectAll(e == null ? ag : lg(typeof e == "function" ? e : Fc(e)));
}
function ug(e) {
  typeof e != "function" && (e = Bc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new zt(r, this._parents);
}
function Kc(e) {
  return new Array(e.length);
}
function dg() {
  return new zt(this._enter || this._groups.map(Kc), this._parents);
}
function si(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
si.prototype = {
  constructor: si,
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
function fg(e) {
  return function() {
    return e;
  };
}
function hg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new si(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function gg(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new si(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function vg(e) {
  return e.__data__;
}
function pg(e, t) {
  if (!arguments.length) return Array.from(this, vg);
  var n = t ? gg : hg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = fg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], h = o[c], f = h.length, g = mg(e.call(d, d && d.__data__, c, r)), m = g.length, y = a[c] = new Array(m), w = s[c] = new Array(m), _ = l[c] = new Array(f);
    n(d, h, y, w, _, g, t);
    for (var k = 0, E = 0, b, P; k < m; ++k)
      if (b = y[k]) {
        for (k >= E && (E = k + 1); !(P = w[E]) && ++E < m; ) ;
        b._next = P || null;
      }
  }
  return s = new zt(s, r), s._enter = a, s._exit = l, s;
}
function mg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function yg() {
  return new zt(this._exit || this._groups.map(Kc), this._parents);
}
function wg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function _g(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], h = c.length, f = a[l] = new Array(h), g, m = 0; m < h; ++m)
      (g = c[m] || d[m]) && (f[m] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new zt(a, this._parents);
}
function xg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function bg(e) {
  e || (e = Cg);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new zt(o, this._parents).order();
}
function Cg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function kg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Eg() {
  return Array.from(this);
}
function Sg() {
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
function $g(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Tg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Dg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ag(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Og(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Mg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Hg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Lg(e, t) {
  var n = Mi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Dg : Tg : typeof t == "function" ? n.local ? Hg : Mg : n.local ? Og : Ag)(n, t));
}
function Zc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Vg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ig(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function zg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Rg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Vg : typeof t == "function" ? zg : Ig)(e, t, n ?? "")) : Hr(this.node(), e);
}
function Hr(e, t) {
  return e.style.getPropertyValue(t) || Zc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Bg(e) {
  return function() {
    delete this[e];
  };
}
function Fg(e, t) {
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
function Zg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Bg : typeof t == "function" ? Kg : Fg)(e, t)) : this.node()[e];
}
function Yc(e) {
  return e.trim().split(/^|\s+/);
}
function ea(e) {
  return e.classList || new Wc(e);
}
function Wc(e) {
  this._node = e, this._names = Yc(e.getAttribute("class") || "");
}
Wc.prototype = {
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
function Xc(e, t) {
  for (var n = ea(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function qc(e, t) {
  for (var n = ea(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Yg(e) {
  return function() {
    Xc(this, e);
  };
}
function Wg(e) {
  return function() {
    qc(this, e);
  };
}
function Xg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Xc : qc)(this, e);
  };
}
function qg(e, t) {
  var n = Yc(e + "");
  if (arguments.length < 2) {
    for (var r = ea(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Xg : t ? Yg : Wg)(n, t));
}
function jg() {
  this.textContent = "";
}
function Gg(e) {
  return function() {
    this.textContent = e;
  };
}
function Ug(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Jg(e) {
  return arguments.length ? this.each(e == null ? jg : (typeof e == "function" ? Ug : Gg)(e)) : this.node().textContent;
}
function Qg() {
  this.innerHTML = "";
}
function ev(e) {
  return function() {
    this.innerHTML = e;
  };
}
function tv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function nv(e) {
  return arguments.length ? this.each(e == null ? Qg : (typeof e == "function" ? tv : ev)(e)) : this.node().innerHTML;
}
function rv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ov() {
  return this.each(rv);
}
function iv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function sv() {
  return this.each(iv);
}
function av(e) {
  var t = typeof e == "function" ? e : zc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function lv() {
  return null;
}
function cv(e, t) {
  var n = typeof e == "function" ? e : zc(e), r = t == null ? lv : typeof t == "function" ? t : Qs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function uv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function dv() {
  return this.each(uv);
}
function fv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gv(e) {
  return this.select(e ? hv : fv);
}
function vv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function pv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function mv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function yv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function wv(e, t, n) {
  return function() {
    var r = this.__on, o, i = pv(t);
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
function _v(e, t, n) {
  var r = mv(e + ""), o, i = r.length, s;
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
  for (a = t ? wv : yv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function jc(e, t, n) {
  var r = Zc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function xv(e, t) {
  return function() {
    return jc(this, e, t);
  };
}
function bv(e, t) {
  return function() {
    return jc(this, e, t.apply(this, arguments));
  };
}
function Cv(e, t) {
  return this.each((typeof t == "function" ? bv : xv)(e, t));
}
function* kv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Gc = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function ko() {
  return new zt([[document.documentElement]], Gc);
}
function Ev() {
  return this;
}
zt.prototype = ko.prototype = {
  constructor: zt,
  select: Uh,
  selectAll: tg,
  selectChild: ig,
  selectChildren: cg,
  filter: ug,
  data: pg,
  enter: dg,
  exit: yg,
  join: wg,
  merge: _g,
  selection: Ev,
  order: xg,
  sort: bg,
  call: kg,
  nodes: Eg,
  node: Sg,
  size: Ng,
  empty: Pg,
  each: $g,
  attr: Lg,
  style: Rg,
  property: Zg,
  classed: qg,
  text: Jg,
  html: nv,
  raise: ov,
  lower: sv,
  append: av,
  insert: cv,
  remove: dv,
  clone: gv,
  datum: vv,
  on: _v,
  dispatch: Cv,
  [Symbol.iterator]: kv
};
function Zt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], Gc);
}
function Sv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Gt(e, t) {
  if (e = Sv(e), t === void 0 && (t = e.currentTarget), t) {
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
const Nv = { passive: !1 }, io = { capture: !0, passive: !1 };
function qi(e) {
  e.stopImmediatePropagation();
}
function Sr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Uc(e) {
  var t = e.document.documentElement, n = Zt(e).on("dragstart.drag", Sr, io);
  "onselectstart" in t ? n.on("selectstart.drag", Sr, io) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Jc(e, t) {
  var n = e.document.documentElement, r = Zt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Sr, io), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const zo = (e) => () => e;
function ys(e, {
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
ys.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Pv(e) {
  return !e.ctrlKey && !e.button;
}
function $v() {
  return this.parentNode;
}
function Tv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Dv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Av() {
  var e = Pv, t = $v, n = Tv, r = Dv, o = {}, i = Oi("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, Nv).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, P) {
    if (!(d || !e.call(this, b, P))) {
      var $ = E(this, t.call(this, b, P), b, P, "mouse");
      $ && (Zt(b.view).on("mousemove.drag", m, io).on("mouseup.drag", y, io), Uc(b.view), qi(b), c = !1, a = b.clientX, l = b.clientY, $("start", b));
    }
  }
  function m(b) {
    if (Sr(b), !c) {
      var P = b.clientX - a, $ = b.clientY - l;
      c = P * P + $ * $ > h;
    }
    o.mouse("drag", b);
  }
  function y(b) {
    Zt(b.view).on("mousemove.drag mouseup.drag", null), Jc(b.view, c), Sr(b), o.mouse("end", b);
  }
  function w(b, P) {
    if (e.call(this, b, P)) {
      var $ = b.changedTouches, A = t.call(this, b, P), I = $.length, V, Z;
      for (V = 0; V < I; ++V)
        (Z = E(this, A, b, P, $[V].identifier, $[V])) && (qi(b), Z("start", b, $[V]));
    }
  }
  function _(b) {
    var P = b.changedTouches, $ = P.length, A, I;
    for (A = 0; A < $; ++A)
      (I = o[P[A].identifier]) && (Sr(b), I("drag", b, P[A]));
  }
  function k(b) {
    var P = b.changedTouches, $ = P.length, A, I;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), A = 0; A < $; ++A)
      (I = o[P[A].identifier]) && (qi(b), I("end", b, P[A]));
  }
  function E(b, P, $, A, I, V) {
    var Z = i.copy(), z = Gt(V || $, P), S, T, x;
    if ((x = n.call(b, new ys("beforestart", {
      sourceEvent: $,
      target: f,
      identifier: I,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), A)) != null)
      return S = x.x - z[0] || 0, T = x.y - z[1] || 0, function C(O, H, K) {
        var W = z, M;
        switch (O) {
          case "start":
            o[I] = C, M = s++;
            break;
          case "end":
            delete o[I], --s;
          // falls through
          case "drag":
            z = Gt(K || H, P), M = s;
            break;
        }
        Z.call(
          O,
          b,
          new ys(O, {
            sourceEvent: H,
            subject: x,
            target: f,
            identifier: I,
            active: M,
            x: z[0] + S,
            y: z[1] + T,
            dx: z[0] - W[0],
            dy: z[1] - W[1],
            dispatch: Z
          }),
          A
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : zo(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : zo(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : zo(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : zo(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function ta(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Qc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Eo() {
}
var so = 0.7, ai = 1 / so, Nr = "\\s*([+-]?\\d+)\\s*", ao = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ov = /^#([0-9a-f]{3,8})$/, Mv = new RegExp(`^rgb\\(${Nr},${Nr},${Nr}\\)$`), Hv = new RegExp(`^rgb\\(${vn},${vn},${vn}\\)$`), Lv = new RegExp(`^rgba\\(${Nr},${Nr},${Nr},${ao}\\)$`), Vv = new RegExp(`^rgba\\(${vn},${vn},${vn},${ao}\\)$`), Iv = new RegExp(`^hsl\\(${ao},${vn},${vn}\\)$`), zv = new RegExp(`^hsla\\(${ao},${vn},${vn},${ao}\\)$`), Ra = {
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
ta(Eo, gr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ba,
  // Deprecated! Use color.formatHex.
  formatHex: Ba,
  formatHex8: Rv,
  formatHsl: Bv,
  formatRgb: Fa,
  toString: Fa
});
function Ba() {
  return this.rgb().formatHex();
}
function Rv() {
  return this.rgb().formatHex8();
}
function Bv() {
  return eu(this).formatHsl();
}
function Fa() {
  return this.rgb().formatRgb();
}
function gr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ov.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ka(t) : n === 3 ? new Pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ro(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ro(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Mv.exec(e)) ? new Pt(t[1], t[2], t[3], 1) : (t = Hv.exec(e)) ? new Pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Lv.exec(e)) ? Ro(t[1], t[2], t[3], t[4]) : (t = Vv.exec(e)) ? Ro(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Iv.exec(e)) ? Wa(t[1], t[2] / 100, t[3] / 100, 1) : (t = zv.exec(e)) ? Wa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ra.hasOwnProperty(e) ? Ka(Ra[e]) : e === "transparent" ? new Pt(NaN, NaN, NaN, 0) : null;
}
function Ka(e) {
  return new Pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ro(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Pt(e, t, n, r);
}
function Fv(e) {
  return e instanceof Eo || (e = gr(e)), e ? (e = e.rgb(), new Pt(e.r, e.g, e.b, e.opacity)) : new Pt();
}
function ws(e, t, n, r) {
  return arguments.length === 1 ? Fv(e) : new Pt(e, t, n, r ?? 1);
}
function Pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ta(Pt, ws, Qc(Eo, {
  brighter(e) {
    return e = e == null ? ai : Math.pow(ai, e), new Pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? so : Math.pow(so, e), new Pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pt(cr(this.r), cr(this.g), cr(this.b), li(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Za,
  // Deprecated! Use color.formatHex.
  formatHex: Za,
  formatHex8: Kv,
  formatRgb: Ya,
  toString: Ya
}));
function Za() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}`;
}
function Kv() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}${sr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ya() {
  const e = li(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${cr(this.r)}, ${cr(this.g)}, ${cr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function li(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function cr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function sr(e) {
  return e = cr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Wa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ut(e, t, n, r);
}
function eu(e) {
  if (e instanceof Ut) return new Ut(e.h, e.s, e.l, e.opacity);
  if (e instanceof Eo || (e = gr(e)), !e) return new Ut();
  if (e instanceof Ut) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Ut(s, a, l, e.opacity);
}
function Zv(e, t, n, r) {
  return arguments.length === 1 ? eu(e) : new Ut(e, t, n, r ?? 1);
}
function Ut(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ta(Ut, Zv, Qc(Eo, {
  brighter(e) {
    return e = e == null ? ai : Math.pow(ai, e), new Ut(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? so : Math.pow(so, e), new Ut(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Pt(
      ji(e >= 240 ? e - 240 : e + 120, o, r),
      ji(e, o, r),
      ji(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Ut(Xa(this.h), Bo(this.s), Bo(this.l), li(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = li(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Xa(this.h)}, ${Bo(this.s) * 100}%, ${Bo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Xa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ji(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const na = (e) => () => e;
function Yv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Wv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Xv(e) {
  return (e = +e) == 1 ? tu : function(t, n) {
    return n - t ? Wv(t, n, e) : na(isNaN(t) ? n : t);
  };
}
function tu(e, t) {
  var n = t - e;
  return n ? Yv(e, n) : na(isNaN(e) ? t : e);
}
const ci = function e(t) {
  var n = Xv(t);
  function r(o, i) {
    var s = n((o = ws(o)).r, (i = ws(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = tu(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function qv(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function jv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Gv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = to(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Uv(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function dn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Jv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = to(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var _s = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Gi = new RegExp(_s.source, "g");
function Qv(e) {
  return function() {
    return e;
  };
}
function e1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function nu(e, t) {
  var n = _s.lastIndex = Gi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = _s.exec(e)) && (o = Gi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: dn(r, o) })), n = Gi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? e1(l[0].x) : Qv(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function to(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? na(t) : (n === "number" ? dn : n === "string" ? (r = gr(t)) ? (t = r, ci) : nu : t instanceof gr ? ci : t instanceof Date ? Uv : jv(t) ? qv : Array.isArray(t) ? Gv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Jv : dn)(e, t);
}
var qa = 180 / Math.PI, xs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ru(e, t, n, r, o, i) {
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
var Fo;
function t1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? xs : ru(t.a, t.b, t.c, t.d, t.e, t.f);
}
function n1(e) {
  return e == null || (Fo || (Fo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Fo.setAttribute("transform", e), !(e = Fo.transform.baseVal.consolidate())) ? xs : (e = e.matrix, ru(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ou(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, m) {
    if (c !== h || d !== f) {
      var y = g.push("translate(", null, t, null, n);
      m.push({ i: y - 4, x: dn(c, h) }, { i: y - 2, x: dn(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(c, d, h, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: dn(c, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(c, d, h, f) {
    c !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: dn(c, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(c, d, h, f, g, m) {
    if (c !== h || d !== f) {
      var y = g.push(o(g) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: dn(c, h) }, { i: y - 2, x: dn(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var m = -1, y = f.length, w; ++m < y; ) h[(w = f[m]).i] = w.x(g);
      return h.join("");
    };
  };
}
var r1 = ou(t1, "px, ", "px)", "deg)"), o1 = ou(n1, ", ", ")", ")"), i1 = 1e-12;
function ja(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function s1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function a1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const jo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, m = h - l, y = g * g + m * m, w, _;
    if (y < i1)
      _ = Math.log(f / c) / t, w = function(A) {
        return [
          a + A * g,
          l + A * m,
          c * Math.exp(t * A * _)
        ];
      };
    else {
      var k = Math.sqrt(y), E = (f * f - c * c + r * y) / (2 * c * n * k), b = (f * f - c * c - r * y) / (2 * f * n * k), P = Math.log(Math.sqrt(E * E + 1) - E), $ = Math.log(Math.sqrt(b * b + 1) - b);
      _ = ($ - P) / t, w = function(A) {
        var I = A * _, V = ja(P), Z = c / (n * k) * (V * a1(t * I + P) - s1(P));
        return [
          a + Z * g,
          l + Z * m,
          c * V / ja(t * I + P)
        ];
      };
    }
    return w.duration = _ * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Lr = 0, Gr = 0, Xr = 0, iu = 1e3, ui, Ur, di = 0, vr = 0, Hi = 0, lo = typeof performance == "object" && performance.now ? performance : Date, su = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ra() {
  return vr || (su(l1), vr = lo.now() + Hi);
}
function l1() {
  vr = 0;
}
function fi() {
  this._call = this._time = this._next = null;
}
fi.prototype = au.prototype = {
  constructor: fi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ra() : +n) + (t == null ? 0 : +t), !this._next && Ur !== this && (Ur ? Ur._next = this : ui = this, Ur = this), this._call = e, this._time = n, bs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, bs());
  }
};
function au(e, t, n) {
  var r = new fi();
  return r.restart(e, t, n), r;
}
function c1() {
  ra(), ++Lr;
  for (var e = ui, t; e; )
    (t = vr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Lr;
}
function Ga() {
  vr = (di = lo.now()) + Hi, Lr = Gr = 0;
  try {
    c1();
  } finally {
    Lr = 0, d1(), vr = 0;
  }
}
function u1() {
  var e = lo.now(), t = e - di;
  t > iu && (Hi -= t, di = e);
}
function d1() {
  for (var e, t = ui, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ui = n);
  Ur = e, bs(r);
}
function bs(e) {
  if (!Lr) {
    Gr && (Gr = clearTimeout(Gr));
    var t = e - vr;
    t > 24 ? (e < 1 / 0 && (Gr = setTimeout(Ga, e - lo.now() - Hi)), Xr && (Xr = clearInterval(Xr))) : (Xr || (di = lo.now(), Xr = setInterval(u1, iu)), Lr = 1, su(Ga));
  }
}
function Ua(e, t, n) {
  var r = new fi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var f1 = Oi("start", "end", "cancel", "interrupt"), h1 = [], lu = 0, Ja = 1, Cs = 2, Go = 3, Qa = 4, ks = 5, Uo = 6;
function Li(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  g1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: f1,
    tween: h1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: lu
  });
}
function oa(e, t) {
  var n = on(e, t);
  if (n.state > lu) throw new Error("too late; already scheduled");
  return n;
}
function wn(e, t) {
  var n = on(e, t);
  if (n.state > Go) throw new Error("too late; already running");
  return n;
}
function on(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function g1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = au(i, 0, n.time);
  function i(c) {
    n.state = Ja, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== Ja) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Go) return Ua(s);
        g.state === Qa ? (g.state = Uo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Uo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Ua(function() {
      n.state === Go && (n.state = Qa, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Cs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Cs) {
      for (n.state = Go, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = ks, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === ks && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Uo, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Jo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Cs && r.state < ks, r.state = Uo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function v1(e) {
  return this.each(function() {
    Jo(this, e);
  });
}
function p1(e, t) {
  var n, r;
  return function() {
    var o = wn(this, e), i = o.tween;
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
function m1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = wn(this, e), s = i.tween;
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
function y1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = on(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? p1 : m1)(n, e, t));
}
function ia(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = wn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return on(o, r).value[t];
  };
}
function cu(e, t) {
  var n;
  return (typeof t == "number" ? dn : t instanceof gr ? ci : (n = gr(t)) ? (t = n, ci) : nu)(e, t);
}
function w1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function x1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function b1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function C1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function k1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function E1(e, t) {
  var n = Mi(e), r = n === "transform" ? o1 : cu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? k1 : C1)(n, r, ia(this, "attr." + e, t)) : t == null ? (n.local ? _1 : w1)(n) : (n.local ? b1 : x1)(n, r, t));
}
function S1(e, t) {
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
function $1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && S1(e, i)), n;
  }
  return o._value = t, o;
}
function T1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Mi(e);
  return this.tween(n, (r.local ? P1 : $1)(r, t));
}
function D1(e, t) {
  return function() {
    oa(this, e).delay = +t.apply(this, arguments);
  };
}
function A1(e, t) {
  return t = +t, function() {
    oa(this, e).delay = t;
  };
}
function O1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? D1 : A1)(t, e)) : on(this.node(), t).delay;
}
function M1(e, t) {
  return function() {
    wn(this, e).duration = +t.apply(this, arguments);
  };
}
function H1(e, t) {
  return t = +t, function() {
    wn(this, e).duration = t;
  };
}
function L1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? M1 : H1)(t, e)) : on(this.node(), t).duration;
}
function V1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    wn(this, e).ease = t;
  };
}
function I1(e) {
  var t = this._id;
  return arguments.length ? this.each(V1(t, e)) : on(this.node(), t).ease;
}
function z1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    wn(this, e).ease = n;
  };
}
function R1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(z1(this._id, e));
}
function B1(e) {
  typeof e != "function" && (e = Bc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new An(r, this._parents, this._name, this._id);
}
function F1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new An(s, this._parents, this._name, this._id);
}
function K1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Z1(e, t, n) {
  var r, o, i = K1(t) ? oa : wn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Y1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? on(this.node(), n).on.on(e) : this.each(Z1(n, e, t));
}
function W1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function X1() {
  return this.on("end.remove", W1(this._id));
}
function q1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Qs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, Li(c[f], t, n, f, c, on(d, n)));
  return new An(i, this._parents, t, n);
}
function j1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Rc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, m = on(d, n), y = 0, w = f.length; y < w; ++y)
          (g = f[y]) && Li(g, t, n, y, f, m);
        i.push(f), s.push(d);
      }
  return new An(i, s, t, n);
}
var G1 = ko.prototype.constructor;
function U1() {
  return new G1(this._groups, this._parents);
}
function J1(e, t) {
  var n, r, o;
  return function() {
    var i = Hr(this, e), s = (this.style.removeProperty(e), Hr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function uu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Q1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Hr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ep(e, t, n) {
  var r, o, i;
  return function() {
    var s = Hr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Hr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function tp(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = wn(this, e), c = l.on, d = l.value[i] == null ? a || (a = uu(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function np(e, t, n) {
  var r = (e += "") == "transform" ? r1 : cu;
  return t == null ? this.styleTween(e, J1(e, r)).on("end.style." + e, uu(e)) : typeof t == "function" ? this.styleTween(e, ep(e, r, ia(this, "style." + e, t))).each(tp(this._id, e)) : this.styleTween(e, Q1(e, r, t), n).on("end.style." + e, null);
}
function rp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function op(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && rp(e, s, n)), r;
  }
  return i._value = t, i;
}
function ip(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, op(e, t, n ?? ""));
}
function sp(e) {
  return function() {
    this.textContent = e;
  };
}
function ap(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function lp(e) {
  return this.tween("text", typeof e == "function" ? ap(ia(this, "text", e)) : sp(e == null ? "" : e + ""));
}
function cp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function up(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && cp(o)), t;
  }
  return r._value = e, r;
}
function dp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, up(e));
}
function fp() {
  for (var e = this._name, t = this._id, n = du(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = on(l, t);
        Li(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new An(r, this._parents, e, n);
}
function hp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = wn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var gp = 0;
function An(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function du() {
  return ++gp;
}
var _n = ko.prototype;
An.prototype = {
  constructor: An,
  select: q1,
  selectAll: j1,
  selectChild: _n.selectChild,
  selectChildren: _n.selectChildren,
  filter: B1,
  merge: F1,
  selection: U1,
  transition: fp,
  call: _n.call,
  nodes: _n.nodes,
  node: _n.node,
  size: _n.size,
  empty: _n.empty,
  each: _n.each,
  on: Y1,
  attr: E1,
  attrTween: T1,
  style: np,
  styleTween: ip,
  text: lp,
  textTween: dp,
  remove: X1,
  tween: y1,
  delay: O1,
  duration: L1,
  ease: I1,
  easeVarying: R1,
  end: hp,
  [Symbol.iterator]: _n[Symbol.iterator]
};
function vp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var pp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vp
};
function mp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function yp(e) {
  var t, n;
  e instanceof An ? (t = e._id, e = e._name) : (t = du(), (n = pp).time = ra(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Li(l, e, t, c, s, n || mp(l, t));
  return new An(r, this._parents, e, t);
}
ko.prototype.interrupt = v1;
ko.prototype.transition = yp;
const Ko = (e) => () => e;
function wp(e, {
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
function kn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
kn.prototype = {
  constructor: kn,
  scale: function(e) {
    return e === 1 ? this : new kn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new kn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Vi = new kn(1, 0, 0);
fu.prototype = kn.prototype;
function fu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Vi;
  return e.__zoom;
}
function Ui(e) {
  e.stopImmediatePropagation();
}
function qr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _p(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function xp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function el() {
  return this.__zoom || Vi;
}
function bp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Cp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function kp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function hu() {
  var e = _p, t = xp, n = kp, r = bp, o = Cp, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = jo, c = Oi("start", "zoom", "end"), d, h, f, g = 500, m = 150, y = 0, w = 10;
  function _(x) {
    x.property("__zoom", el).on("wheel.zoom", I, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", Z).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(x, C, O, H) {
    var K = x.selection ? x.selection() : x;
    K.property("__zoom", el), x !== K ? P(x, C, O, H) : K.interrupt().each(function() {
      $(this, arguments).event(H).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, _.scaleBy = function(x, C, O, H) {
    _.scaleTo(x, function() {
      var K = this.__zoom.k, W = typeof C == "function" ? C.apply(this, arguments) : C;
      return K * W;
    }, O, H);
  }, _.scaleTo = function(x, C, O, H) {
    _.transform(x, function() {
      var K = t.apply(this, arguments), W = this.__zoom, M = O == null ? b(K) : typeof O == "function" ? O.apply(this, arguments) : O, j = W.invert(M), X = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(E(k(W, X), M, j), K, s);
    }, O, H);
  }, _.translateBy = function(x, C, O, H) {
    _.transform(x, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), t.apply(this, arguments), s);
    }, null, H);
  }, _.translateTo = function(x, C, O, H, K) {
    _.transform(x, function() {
      var W = t.apply(this, arguments), M = this.__zoom, j = H == null ? b(W) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(Vi.translate(j[0], j[1]).scale(M.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), W, s);
    }, H, K);
  };
  function k(x, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === x.k ? x : new kn(C, x.x, x.y);
  }
  function E(x, C, O) {
    var H = C[0] - O[0] * x.k, K = C[1] - O[1] * x.k;
    return H === x.x && K === x.y ? x : new kn(x.k, H, K);
  }
  function b(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function P(x, C, O, H) {
    x.on("start.zoom", function() {
      $(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      $(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var K = this, W = arguments, M = $(K, W).event(H), j = t.apply(K, W), X = O == null ? b(j) : typeof O == "function" ? O.apply(K, W) : O, Q = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), q = K.__zoom, F = typeof C == "function" ? C.apply(K, W) : C, U = l(q.invert(X).concat(Q / q.k), F.invert(X).concat(Q / F.k));
      return function(G) {
        if (G === 1) G = F;
        else {
          var ne = U(G), ee = Q / ne[2];
          G = new kn(ee, X[0] - ne[0] * ee, X[1] - ne[1] * ee);
        }
        M.zoom(null, G);
      };
    });
  }
  function $(x, C, O) {
    return !O && x.__zooming || new A(x, C);
  }
  function A(x, C) {
    this.that = x, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, C), this.taps = 0;
  }
  A.prototype = {
    event: function(x) {
      return x && (this.sourceEvent = x), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(x, C) {
      return this.mouse && x !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && x !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && x !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(x) {
      var C = Zt(this.that).datum();
      c.call(
        x,
        this.that,
        new wp(x, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: c
        }),
        C
      );
    }
  };
  function I(x, ...C) {
    if (!e.apply(this, arguments)) return;
    var O = $(this, C).event(x), H = this.__zoom, K = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), W = Gt(x);
    if (O.wheel)
      (O.mouse[0][0] !== W[0] || O.mouse[0][1] !== W[1]) && (O.mouse[1] = H.invert(O.mouse[0] = W)), clearTimeout(O.wheel);
    else {
      if (H.k === K) return;
      O.mouse = [W, H.invert(W)], Jo(this), O.start();
    }
    qr(x), O.wheel = setTimeout(M, m), O.zoom("mouse", n(E(k(H, K), O.mouse[0], O.mouse[1]), O.extent, s));
    function M() {
      O.wheel = null, O.end();
    }
  }
  function V(x, ...C) {
    if (f || !e.apply(this, arguments)) return;
    var O = x.currentTarget, H = $(this, C, !0).event(x), K = Zt(x.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Q, !0), W = Gt(x, O), M = x.clientX, j = x.clientY;
    Uc(x.view), Ui(x), H.mouse = [W, this.__zoom.invert(W)], Jo(this), H.start();
    function X(q) {
      if (qr(q), !H.moved) {
        var F = q.clientX - M, U = q.clientY - j;
        H.moved = F * F + U * U > y;
      }
      H.event(q).zoom("mouse", n(E(H.that.__zoom, H.mouse[0] = Gt(q, O), H.mouse[1]), H.extent, s));
    }
    function Q(q) {
      K.on("mousemove.zoom mouseup.zoom", null), Jc(q.view, H.moved), qr(q), H.event(q).end();
    }
  }
  function Z(x, ...C) {
    if (e.apply(this, arguments)) {
      var O = this.__zoom, H = Gt(x.changedTouches ? x.changedTouches[0] : x, this), K = O.invert(H), W = O.k * (x.shiftKey ? 0.5 : 2), M = n(E(k(O, W), H, K), t.apply(this, C), s);
      qr(x), a > 0 ? Zt(this).transition().duration(a).call(P, M, H, x) : Zt(this).call(_.transform, M, H, x);
    }
  }
  function z(x, ...C) {
    if (e.apply(this, arguments)) {
      var O = x.touches, H = O.length, K = $(this, C, x.changedTouches.length === H).event(x), W, M, j, X;
      for (Ui(x), M = 0; M < H; ++M)
        j = O[M], X = Gt(j, this), X = [X, this.__zoom.invert(X), j.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== X[2] && (K.touch1 = X, K.taps = 0) : (K.touch0 = X, W = !0, K.taps = 1 + !!d);
      d && (d = clearTimeout(d)), W && (K.taps < 2 && (h = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Jo(this), K.start());
    }
  }
  function S(x, ...C) {
    if (this.__zooming) {
      var O = $(this, C).event(x), H = x.changedTouches, K = H.length, W, M, j, X;
      for (qr(x), W = 0; W < K; ++W)
        M = H[W], j = Gt(M, this), O.touch0 && O.touch0[2] === M.identifier ? O.touch0[0] = j : O.touch1 && O.touch1[2] === M.identifier && (O.touch1[0] = j);
      if (M = O.that.__zoom, O.touch1) {
        var Q = O.touch0[0], q = O.touch0[1], F = O.touch1[0], U = O.touch1[1], G = (G = F[0] - Q[0]) * G + (G = F[1] - Q[1]) * G, ne = (ne = U[0] - q[0]) * ne + (ne = U[1] - q[1]) * ne;
        M = k(M, Math.sqrt(G / ne)), j = [(Q[0] + F[0]) / 2, (Q[1] + F[1]) / 2], X = [(q[0] + U[0]) / 2, (q[1] + U[1]) / 2];
      } else if (O.touch0) j = O.touch0[0], X = O.touch0[1];
      else return;
      O.zoom("touch", n(E(M, j, X), O.extent, s));
    }
  }
  function T(x, ...C) {
    if (this.__zooming) {
      var O = $(this, C).event(x), H = x.changedTouches, K = H.length, W, M;
      for (Ui(x), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), W = 0; W < K; ++W)
        M = H[W], O.touch0 && O.touch0[2] === M.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === M.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (M = Gt(M, this), Math.hypot(h[0] - M[0], h[1] - M[1]) < w)) {
        var j = Zt(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : Ko(+x), _) : r;
  }, _.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Ko(!!x), _) : e;
  }, _.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : Ko(!!x), _) : o;
  }, _.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Ko([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), _) : t;
  }, _.scaleExtent = function(x) {
    return arguments.length ? (i[0] = +x[0], i[1] = +x[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(x) {
    return arguments.length ? (s[0][0] = +x[0][0], s[1][0] = +x[1][0], s[0][1] = +x[0][1], s[1][1] = +x[1][1], _) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, _.constrain = function(x) {
    return arguments.length ? (n = x, _) : n;
  }, _.duration = function(x) {
    return arguments.length ? (a = +x, _) : a;
  }, _.interpolate = function(x) {
    return arguments.length ? (l = x, _) : l;
  }, _.on = function() {
    var x = c.on.apply(c, arguments);
    return x === c ? _ : x;
  }, _.clickDistance = function(x) {
    return arguments.length ? (y = (x = +x) * x, _) : Math.sqrt(y);
  }, _.tapDistance = function(x) {
    return arguments.length ? (w = +x, _) : w;
  }, _;
}
const co = {
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
}, Es = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], gu = ["Enter", " ", "Escape"], Ep = {
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
var ur;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ur || (ur = {}));
var hi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(hi || (hi = {}));
const Ss = {
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
var bn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(bn || (bn = {}));
var uo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(uo || (uo = {}));
var me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(me || (me = {}));
const tl = {
  [me.Left]: me.Right,
  [me.Right]: me.Left,
  [me.Top]: me.Bottom,
  [me.Bottom]: me.Top
};
function Sp(e, t) {
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
function nl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Np(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const vu = (e) => "id" in e && "source" in e && "target" in e, Pp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), sa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), So = (e, t = [0, 0]) => {
  const { width: n, height: r } = rr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, $p = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : sa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? gi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ii(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return zi(n);
}, No = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Ii(n, gi(o)), r = !0);
  }), r ? zi(n) : { x: 0, y: 0, width: 0, height: 0 };
}, aa = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...$o(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, m = d.height ?? c.height ?? c.initialHeight ?? null, y = fo(a, zr(c)), w = (g ?? 0) * (m ?? 0), _ = i && y > 0;
    (!c.internals.handleBounds || _ || y >= w || c.dragging) && l.push(c);
  }
  return l;
}, Tp = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Dp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Ap({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Dp(e, s), l = No(a), c = la(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function pu({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", co.error005());
    else {
      const g = a.measured.width, m = a.measured.height;
      g && m && (h = [
        [l, c],
        [l + g, c + m]
      ]);
    }
  else a && Rr(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = Rr(h) ? pr(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", co.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Op({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), m = !g && f.parentId && s.find((y) => y.id === f.parentId);
    (g || m) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = Tp(s, l);
  for (const f of l)
    a.has(f.id) && !d.find((m) => m.id === f.id) && d.push(f);
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
const Ir = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), pr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ir(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Ir(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function mu(e, t, n) {
  const { width: r, height: o } = rr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return pr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const rl = (e, t, n) => e < t ? Ir(Math.abs(e - t), 1, t) / t : e > n ? -Ir(Math.abs(e - n), 1, t) / t : 0, yu = (e, t, n = 15, r = 40) => {
  const o = rl(e.x, r, t.width - r) * n, i = rl(e.y, r, t.height - r) * n;
  return [o, i];
}, Ii = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ns = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), zi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), zr = (e, t = [0, 0]) => {
  const { x: n, y: r } = sa(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, gi = (e, t = [0, 0]) => {
  const { x: n, y: r } = sa(e) ? e.internals.positionAbsolute : So(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, wu = (e, t) => zi(Ii(Ns(e), Ns(t))), fo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ol = (e) => En(e.width) && En(e.height) && En(e.x) && En(e.y), En = (e) => !isNaN(e) && isFinite(e), Mp = (e, t) => {
}, Po = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), $o = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Po(a, s) : a;
}, vi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function br(e, t) {
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
function Hp(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = br(e, n), o = br(e, t);
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
    const r = br(e.top ?? e.y ?? 0, n), o = br(e.bottom ?? e.y ?? 0, n), i = br(e.left ?? e.x ?? 0, t), s = br(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Lp(e, t, n, r, o, i) {
  const { x: s, y: a } = vi(e, [t, n, r]), { x: l, y: c } = vi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const la = (e, t, n, r, o, i) => {
  const s = Hp(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Ir(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, m = n / 2 - f * d, y = Lp(e, g, m, d, t, n), w = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: g - w.left + w.right,
    y: m - w.top + w.bottom,
    zoom: d
  };
}, ar = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Rr(e) {
  return e != null && e !== "parent";
}
function rr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function _u(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Vp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Ip(e) {
  return { ...Ep, ...e || {} };
}
function Ji(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Qt(e), a = $o({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? Po(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const xu = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), bu = (e) => e?.getRootNode?.() || window?.document, zp = ["INPUT", "SELECT", "TEXTAREA"];
function Cu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : zp.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const ku = (e) => "clientX" in e, Qt = (e, t) => {
  const n = ku(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, il = (e, t, n, r, o) => {
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
      ...xu(s)
    };
  });
};
function Rp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function Zo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function sl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case me.Left:
      return [t - Zo(t - r, i), n];
    case me.Right:
      return [t + Zo(r - t, i), n];
    case me.Top:
      return [t, n - Zo(n - o, i)];
    case me.Bottom:
      return [t, n + Zo(o - n, i)];
  }
}
function Eu({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, curvature: s = 0.25 }) {
  const [a, l] = sl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = sl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, m] = Rp({
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
    m
  ];
}
function Su({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Bp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function Fp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ii(gi(e), gi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return fo(s, zi(i)) > 0;
}
const Kp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Zp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Yp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return vu(e) ? n = { ...e } : n = {
    ...e,
    id: Kp(e)
  }, Zp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Nu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Su({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const al = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, Wp = ({ source: e, sourcePosition: t = me.Bottom, target: n }) => t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ll = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Xp({ source: e, sourcePosition: t = me.Bottom, target: n, targetPosition: r = me.Top, center: o, offset: i, stepPosition: s }) {
  const a = al[t], l = al[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Wp({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let m = [], y, w;
  const _ = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , E, b] = Su({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? c.x + (d.x - c.x) * s, w = o.y ?? (c.y + d.y) / 2) : (y = o.x ?? (c.x + d.x) / 2, w = o.y ?? c.y + (d.y - c.y) * s);
    const $ = [
      { x: y, y: c.y },
      { x: y, y: d.y }
    ], A = [
      { x: c.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === g ? m = f === "x" ? $ : A : m = f === "x" ? A : $;
  } else {
    const $ = [{ x: c.x, y: d.y }], A = [{ x: d.x, y: c.y }];
    if (f === "x" ? m = a.x === g ? A : $ : m = a.y === g ? $ : A, t === r) {
      const S = Math.abs(e[f] - n[f]);
      if (S <= i) {
        const T = Math.min(i - 1, i - S);
        a[f] === g ? _[f] = (c[f] > e[f] ? -1 : 1) * T : k[f] = (d[f] > n[f] ? -1 : 1) * T;
      }
    }
    if (t !== r) {
      const S = f === "x" ? "y" : "x", T = a[f] === l[S], x = c[S] > d[S], C = c[S] < d[S];
      (a[f] === 1 && (!T && x || T && C) || a[f] !== 1 && (!T && C || T && x)) && (m = f === "x" ? $ : A);
    }
    const I = { x: c.x + _.x, y: c.y + _.y }, V = { x: d.x + k.x, y: d.y + k.y }, Z = Math.max(Math.abs(I.x - m[0].x), Math.abs(V.x - m[0].x)), z = Math.max(Math.abs(I.y - m[0].y), Math.abs(V.y - m[0].y));
    Z >= z ? (y = (I.x + V.x) / 2, w = m[0].y) : (y = m[0].x, w = (I.y + V.y) / 2);
  }
  return [[
    e,
    { x: c.x + _.x, y: c.y + _.y },
    ...m,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], y, w, E, b];
}
function qp(e, t, n, r) {
  const o = Math.min(ll(e, t) / 2, ll(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ca({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, m, y] = Xp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((_, k, E) => {
    let b = "";
    return E > 0 && E < h.length - 1 ? b = qp(h[E - 1], k, h[E + 1], s) : b = `${E === 0 ? "M" : "L"}${k.x} ${k.y}`, _ += b, _;
  }, ""), f, g, m, y];
}
function cl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function jp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!cl(t) || !cl(n))
    return null;
  const r = t.internals.handleBounds || ul(t.handles), o = n.internals.handleBounds || ul(n.handles), i = dl(r?.source ?? [], e.sourceHandle), s = dl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Vr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", co.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || me.Bottom, l = s?.position || me.Top, c = ho(t, i, a), d = ho(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
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
function ho(e, t, n = me.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? rr(e);
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
function dl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ps(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Gp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Ps(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Up(e, t, n, r, o) {
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
const Pu = 1e3, Jp = 10, ua = {
  nodeOrigin: [0, 0],
  nodeExtent: Es,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Qp = {
  ...ua,
  checkEquality: !0
};
function da(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function e0(e, t, n) {
  const r = da(ua, n);
  for (const o of e.values())
    if (o.parentId)
      fa(o, e, t, r);
    else {
      const i = So(o, r.nodeOrigin), s = Rr(o.extent) ? o.extent : r.nodeExtent, a = pr(i, s, rr(o));
      o.internals.positionAbsolute = a;
    }
}
function t0(e, t) {
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
function n0(e, t, n, r) {
  const o = da(Qp, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Pu : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = a.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const h = So(c, o.nodeOrigin), f = Rr(c.extent) ? c.extent : o.nodeExtent, g = pr(h, f, rr(c));
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
          handleBounds: t0(c, d),
          z: $u(c, l),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && fa(d, t, n, r, i);
  }
  return s;
}
function r0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function fa(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = da(ua, r), l = e.parentId, c = t.get(l);
  if (!c) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  r0(e, n), o && !c.parentId && c.internals.rootParentIndex === void 0 && (c.internals.rootParentIndex = ++o.i, c.internals.z = c.internals.z + o.i * Jp), o && c.internals.rootParentIndex !== void 0 && (o.i = c.internals.rootParentIndex);
  const d = i ? Pu : 0, { x: h, y: f, z: g } = o0(e, c, s, a, d), { positionAbsolute: m } = e.internals, y = h !== m.x || f !== m.y;
  (y || g !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: h, y: f } : m,
      z: g
    }
  });
}
function $u(e, t) {
  return (En(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function o0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = rr(e), l = So(e, n), c = Rr(e.extent) ? pr(l, e.extent, a) : l;
  let d = pr({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = mu(d, a, t));
  const h = $u(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= h ? f + 1 : h
  };
}
function i0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? zr(a), c = wu(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = rr(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], _ = (y - d.height) * h[1];
    (f > 0 || g > 0 || w || _) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - g + _
      }
    }), n.get(l)?.forEach((k) => {
      e.some((E) => E.id === k.id) || o.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + f,
          y: k.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (f ? h[0] * f - w : 0),
        height: y + (g ? h[1] * g - _ : 0)
      }
    });
  }), o;
}
function s0(e, t, n, r, o, i) {
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
    const m = xu(f.nodeElement), y = g.measured.width !== m.width || g.measured.height !== m.height;
    if (!!(m.width && m.height && (y || !g.internals.handleBounds || f.force))) {
      const _ = f.nodeElement.getBoundingClientRect(), k = Rr(g.extent) ? g.extent : i;
      let { positionAbsolute: E } = g.internals;
      g.parentId && g.extent === "parent" ? E = mu(E, m, t.get(g.parentId)) : k && (E = pr(E, k, m));
      const b = {
        ...g,
        measured: m,
        internals: {
          ...g.internals,
          positionAbsolute: E,
          handleBounds: {
            source: il("source", f.nodeElement, _, d, g.id),
            target: il("target", f.nodeElement, _, d, g.id)
          }
        }
      };
      t.set(g.id, b), g.parentId && fa(b, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: m
      }), g.expandParent && g.parentId && h.push({
        id: g.id,
        parentId: g.parentId,
        rect: zr(b, o)
      }));
    }
  }
  if (h.length > 0) {
    const f = i0(h, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function a0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function fl(e, t, n, r, o, i) {
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
function l0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    fl("source", l, d, e, o, s), fl("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function c0(e, t) {
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
function Tu(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Tu(n, t) : !1;
}
function hl(e, t, n) {
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
    if ((s.selected || s.id === r) && (!s.parentId || !Tu(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Qi({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function d0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Po(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function f0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, m = !1, y = null;
  function w({ noDragClassName: k, handleSelector: E, domNode: b, isSelectable: P, nodeId: $, nodeClickDistance: A = 0 }) {
    f = Zt(b);
    function I({ x: S, y: T }) {
      const { nodeLookup: x, nodeExtent: C, snapGrid: O, snapToGrid: H, nodeOrigin: K, onNodeDrag: W, onSelectionDrag: M, onError: j, updateNodePositions: X } = t();
      i = { x: S, y: T };
      let Q = !1;
      const q = a.size > 1, F = q && C ? Ns(No(a)) : null, U = q && H ? d0({
        dragItems: a,
        snapGrid: O,
        x: S,
        y: T
      }) : null;
      for (const [G, ne] of a) {
        if (!x.has(G))
          continue;
        let ee = { x: S - ne.distance.x, y: T - ne.distance.y };
        H && (ee = U ? {
          x: Math.round(ee.x + U.x),
          y: Math.round(ee.y + U.y)
        } : Po(ee, O));
        let ye = null;
        if (q && C && !ne.extent && F) {
          const { positionAbsolute: re } = ne.internals, fe = re.x - F.x + C[0][0], he = re.x + ne.measured.width - F.x2 + C[1][0], we = re.y - F.y + C[0][1], ce = re.y + ne.measured.height - F.y2 + C[1][1];
          ye = [
            [fe, we],
            [he, ce]
          ];
        }
        const { position: oe, positionAbsolute: le } = pu({
          nodeId: G,
          nextPosition: ee,
          nodeLookup: x,
          nodeExtent: ye || C,
          nodeOrigin: K,
          onError: j
        });
        Q = Q || ne.position.x !== oe.x || ne.position.y !== oe.y, ne.position = oe, ne.internals.positionAbsolute = le;
      }
      if (m = m || Q, !!Q && (X(a, !0), y && (r || W || !$ && M))) {
        const [G, ne] = Qi({
          nodeId: $,
          dragItems: a,
          nodeLookup: x
        });
        r?.(y, a, G, ne), W?.(y, G, ne), $ || M?.(y, ne);
      }
    }
    async function V() {
      if (!d)
        return;
      const { transform: S, panBy: T, autoPanSpeed: x, autoPanOnNodeDrag: C } = t();
      if (!C) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [O, H] = yu(c, d, x);
      (O !== 0 || H !== 0) && (i.x = (i.x ?? 0) - O / S[2], i.y = (i.y ?? 0) - H / S[2], await T({ x: O, y: H }) && I(i)), s = requestAnimationFrame(V);
    }
    function Z(S) {
      const { nodeLookup: T, multiSelectionActive: x, nodesDraggable: C, transform: O, snapGrid: H, snapToGrid: K, selectNodesOnDrag: W, onNodeDragStart: M, onSelectionDragStart: j, unselectNodesAndEdges: X } = t();
      h = !0, (!W || !P) && !x && $ && (T.get($)?.selected || X()), P && W && $ && e?.($);
      const Q = Ji(S.sourceEvent, { transform: O, snapGrid: H, snapToGrid: K, containerBounds: d });
      if (i = Q, a = u0(T, C, Q, $), a.size > 0 && (n || M || !$ && j)) {
        const [q, F] = Qi({
          nodeId: $,
          dragItems: a,
          nodeLookup: T
        });
        n?.(S.sourceEvent, a, q, F), M?.(S.sourceEvent, q, F), $ || j?.(S.sourceEvent, F);
      }
    }
    const z = Av().clickDistance(A).on("start", (S) => {
      const { domNode: T, nodeDragThreshold: x, transform: C, snapGrid: O, snapToGrid: H } = t();
      d = T?.getBoundingClientRect() || null, g = !1, m = !1, y = S.sourceEvent, x === 0 && Z(S), i = Ji(S.sourceEvent, { transform: C, snapGrid: O, snapToGrid: H, containerBounds: d }), c = Qt(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: T, transform: x, snapGrid: C, snapToGrid: O, nodeDragThreshold: H, nodeLookup: K } = t(), W = Ji(S.sourceEvent, { transform: x, snapGrid: C, snapToGrid: O, containerBounds: d });
      if (y = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      $ && !K.has($)) && (g = !0), !g) {
        if (!l && T && h && (l = !0, V()), !h) {
          const M = Qt(S.sourceEvent, d), j = M.x - c.x, X = M.y - c.y;
          Math.sqrt(j * j + X * X) > H && Z(S);
        }
        (i.x !== W.xSnapped || i.y !== W.ySnapped) && a && h && (c = Qt(S.sourceEvent, d), I(W));
      }
    }).on("end", (S) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: x, onNodeDragStop: C, onSelectionDragStop: O } = t();
        if (m && (x(a, !1), m = !1), o || C || !$ && O) {
          const [H, K] = Qi({
            nodeId: $,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.(S.sourceEvent, a, H, K), C?.(S.sourceEvent, H, K), $ || O?.(S.sourceEvent, K);
        }
      }
    }).filter((S) => {
      const T = S.target;
      return !S.button && (!k || !hl(T, `.${k}`, b)) && (!E || hl(T, E, b));
    });
    f.call(z);
  }
  function _() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: _
  };
}
function h0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    fo(o, zr(i)) > 0 && r.push(i);
  return r;
}
const g0 = 250;
function v0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = h0(e, n, t + g0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: h } = ho(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
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
function Du(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...ho(s, l, l.position, !0) } : l;
}
function Au(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function p0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ou = () => !0;
function m0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: _ = Ou, onReconnectEnd: k, updateConnection: E, getTransform: b, getFromHandle: P, autoPanSpeed: $, dragThreshold: A = 1, handleDomNode: I }) {
  const V = bu(e.target);
  let Z = 0, z;
  const { x: S, y: T } = Qt(e), x = Au(i, I), C = a?.getBoundingClientRect();
  let O = !1;
  if (!C || !x)
    return;
  const H = Du(o, x, r, l, t);
  if (!H)
    return;
  let K = Qt(e, C), W = !1, M = null, j = !1, X = null;
  function Q() {
    if (!d || !C)
      return;
    const [oe, le] = yu(K, C, $);
    f({ x: oe, y: le }), Z = requestAnimationFrame(Q);
  }
  const q = {
    ...H,
    nodeId: o,
    type: x,
    position: H.position
  }, F = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: ho(F, q, me.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: F,
    to: K,
    toHandle: null,
    toPosition: tl[q.position],
    toNode: null,
    pointer: K
  };
  function ne() {
    O = !0, E(G), m?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  A === 0 && ne();
  function ee(oe) {
    if (!O) {
      const { x: he, y: we } = Qt(oe), ce = he - S, _e = we - T;
      if (!(ce * ce + _e * _e > A * A))
        return;
      ne();
    }
    if (!P() || !q) {
      ye(oe);
      return;
    }
    const le = b();
    K = Qt(oe, C), z = v0($o(K, le, !1, [1, 1]), n, l, q), W || (Q(), W = !0);
    const re = Mu(oe, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: _,
      doc: V,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    X = re.handleDomNode, M = re.connection, j = p0(!!z, re.isValid);
    const fe = {
      // from stays the same
      ...G,
      isValid: j,
      to: re.toHandle && j ? vi({ x: re.toHandle.x, y: re.toHandle.y }, le) : K,
      toHandle: re.toHandle,
      toPosition: j && re.toHandle ? re.toHandle.position : tl[q.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: K
    };
    E(fe), G = fe;
  }
  function ye(oe) {
    if (!("touches" in oe && oe.touches.length > 0)) {
      if (O) {
        (z || X) && M && j && y?.(M);
        const { inProgress: le, ...re } = G, fe = {
          ...re,
          toPosition: G.toHandle ? G.toPosition : null
        };
        w?.(oe, fe), i && k?.(oe, fe);
      }
      g(), cancelAnimationFrame(Z), W = !1, j = !1, M = null, X = null, V.removeEventListener("mousemove", ee), V.removeEventListener("mouseup", ye), V.removeEventListener("touchmove", ee), V.removeEventListener("touchend", ye);
    }
  }
  V.addEventListener("mousemove", ee), V.addEventListener("mouseup", ye), V.addEventListener("touchmove", ee), V.addEventListener("touchend", ye);
}
function Mu(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = Ou, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: m } = Qt(e), y = s.elementFromPoint(g, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : f, _ = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const k = Au(void 0, w), E = w.getAttribute("data-nodeid"), b = w.getAttribute("data-handleid"), P = w.classList.contains("connectable"), $ = w.classList.contains("connectableend");
    if (!E || !k)
      return _;
    const A = {
      source: h ? E : r,
      sourceHandle: h ? b : o,
      target: h ? r : E,
      targetHandle: h ? o : b
    };
    _.connection = A;
    const V = P && $ && (n === Vr.Strict ? h && k === "source" || !h && k === "target" : E !== r || b !== o);
    _.isValid = V && c(A), _.toHandle = Du(E, k, b, d, n, !0);
  }
  return _;
}
const gl = {
  onPointerDown: m0,
  isValid: Mu
};
function y0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Zt(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const m = (E) => {
      if (E.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), P = E.sourceEvent.ctrlKey && ar() ? 10 : 1, $ = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, A = b[2] * Math.pow(2, $ * P);
      t.scaleTo(A);
    };
    let y = [0, 0];
    const w = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (y = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, _ = (E) => {
      const b = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !t)
        return;
      const P = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], $ = [P[0] - y[0], P[1] - y[1]];
      y = P;
      const A = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), I = {
        x: b[0] - $[0] * A,
        y: b[1] - $[1] * A
      }, V = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: I.x,
        y: I.y,
        zoom: b[2]
      }, V, a);
    }, k = hu().on("start", w).on("zoom", h ? _ : null).on("zoom.wheel", f ? m : null);
    o.call(k, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Gt
  };
}
const Ri = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), es = ({ x: e, y: t, zoom: n }) => Vi.translate(e, t).scale(n), kr = (e, t) => e.target.closest(`.${t}`), Hu = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), w0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, ts = (e, t = 0, n = w0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Lu = (e) => {
  const t = e.ctrlKey && ar() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function _0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (kr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = Gt(d), _ = Lu(d), k = h * Math.pow(2, _);
      r.scaleTo(n, k, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === ur.Vertical ? 0 : d.deltaX * f, m = o === ur.Horizontal ? 0 : d.deltaY * f;
    !ar() && d.shiftKey && o !== ur.Vertical && (g = d.deltaY * f, m = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Ri(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      c?.(d, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, y));
  };
}
function x0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = kr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function b0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ri(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function C0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Hu(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ri(i.transform));
  };
}
function k0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Hu(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Ri(s.transform);
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
function E0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (kr(h, `${c}-flow__node`) || kr(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !m || kr(h, a) && m || kr(h, l) && (!m || o && m && !e) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function S0({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = hu().scaleExtent([t, n]).translateExtent(r), f = Zt(e).call(h);
  k({
    x: o.x,
    y: o.y,
    zoom: Ir(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
  h.wheelDelta(Lu);
  function y(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? to : jo).transform(ts(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: z, noPanClassName: S, onPaneContextMenu: T, userSelectionActive: x, panOnScroll: C, panOnDrag: O, panOnScrollMode: H, panOnScrollSpeed: K, preventScrolling: W, zoomOnPinch: M, zoomOnScroll: j, zoomOnDoubleClick: X, zoomActivationKeyPressed: Q, lib: q, onTransformChange: F, connectionInProgress: U, paneClickDistance: G, selectionOnDrag: ne }) {
    x && !c.isZoomingOrPanning && _();
    const ee = C && !Q && !x;
    h.clickDistance(ne ? 1 / 0 : !En(G) || G < 0 ? 0 : G);
    const ye = ee ? _0({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: H,
      panOnScrollSpeed: K,
      zoomOnPinch: M,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : x0({
      noWheelClassName: z,
      preventScrolling: W,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", ye, { passive: !1 }), !x) {
      const le = b0({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", le);
      const re = C0({
        zoomPanValues: c,
        panOnDrag: O,
        onPaneContextMenu: !!T,
        onPanZoom: i,
        onTransformChange: F
      });
      h.on("zoom", re);
      const fe = k0({
        zoomPanValues: c,
        panOnDrag: O,
        panOnScroll: C,
        onPaneContextMenu: T,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", fe);
    }
    const oe = E0({
      zoomActivationKeyPressed: Q,
      panOnDrag: O,
      zoomOnScroll: j,
      panOnScroll: C,
      zoomOnDoubleClick: X,
      zoomOnPinch: M,
      userSelectionActive: x,
      noPanClassName: S,
      noWheelClassName: z,
      lib: q,
      connectionInProgress: U
    });
    h.filter(oe), X ? f.on("dblclick.zoom", m) : f.on("dblclick.zoom", null);
  }
  function _() {
    h.on("zoom", null);
  }
  async function k(z, S, T) {
    const x = es(z), C = h?.constrain()(x, S, T);
    return C && await y(C), new Promise((O) => O(C));
  }
  async function E(z, S) {
    const T = es(z);
    return await y(T, S), new Promise((x) => x(T));
  }
  function b(z) {
    if (f) {
      const S = es(z), T = f.property("__zoom");
      (T.k !== z.zoom || T.x !== z.x || T.y !== z.y) && h?.transform(f, S, null, { sync: !0 });
    }
  }
  function P() {
    const z = f ? fu(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function $(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? to : jo).scaleTo(ts(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function A(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? to : jo).scaleBy(ts(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function I(z) {
    h?.scaleExtent(z);
  }
  function V(z) {
    h?.translateExtent(z);
  }
  function Z(z) {
    const S = !En(z) || z < 0 ? 0 : z;
    h?.clickDistance(S);
  }
  return {
    update: w,
    destroy: _,
    setViewport: E,
    setViewportConstrained: k,
    getViewport: P,
    scaleTo: $,
    scaleBy: A,
    setScaleExtent: I,
    setTranslateExtent: V,
    syncViewport: b,
    setClickDistance: Z
  };
}
var vl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(vl || (vl = {}));
var N0 = /* @__PURE__ */ te("<div><!></div>");
function Un(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7, null), r = p(t, "type", 7, "source"), o = p(t, "position", 23, () => me.Top), i = p(t, "style", 7), s = p(t, "class", 7), a = p(t, "isConnectable", 7), l = p(t, "isConnectableStart", 7, !0), c = p(t, "isConnectableEnd", 7, !0), d = p(t, "isValidConnection", 7), h = p(t, "onconnect", 7), f = p(t, "ondisconnect", 7), g = p(t, "children", 7), m = /* @__PURE__ */ Re(t, [
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
  const y = jn("svelteflow__node_id"), w = jn("svelteflow__node_connectable");
  let _ = /* @__PURE__ */ N(() => r() === "target"), k = /* @__PURE__ */ N(() => a() !== void 0 ? a() : w.value), E = sn(), b = /* @__PURE__ */ N(() => E.ariaLabelConfig), P = null;
  gc(() => {
    if (h() || f()) {
      E.edges;
      let M = E.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (P && !Sp(M, P)) {
        const j = M ?? /* @__PURE__ */ new Map();
        nl(P, j, f()), nl(j, P, h());
      }
      P = new Map(M);
    }
  });
  let $ = /* @__PURE__ */ N(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: M, toHandle: j, isValid: X } = E.connection, Q = M && M.nodeId === y && M.type === r() && M.id === n(), q = j && j.nodeId === y && j.type === r() && j.id === n(), F = E.connectionMode === Vr.Strict ? M?.type !== r() : y !== M?.nodeId || n() !== M?.id;
    return [
      !0,
      Q,
      q,
      F,
      q && X
    ];
  }), A = /* @__PURE__ */ N(() => mo(u($), 5)), I = /* @__PURE__ */ N(() => u(A)[0]), V = /* @__PURE__ */ N(() => u(A)[1]), Z = /* @__PURE__ */ N(() => u(A)[2]), z = /* @__PURE__ */ N(() => u(A)[3]), S = /* @__PURE__ */ N(() => u(A)[4]);
  function T(M) {
    const j = E.onbeforeconnect ? E.onbeforeconnect(M) : M;
    j && (E.addEdge(j), E.onconnect?.(M));
  }
  function x(M) {
    const j = ku(M);
    M.currentTarget && (j && M.button === 0 || !j) && gl.onPointerDown(M, {
      handleId: n(),
      nodeId: y,
      isTarget: u(_),
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
      onConnect: T,
      onConnectStart: (X, Q) => {
        E.onconnectstart?.(X, {
          nodeId: Q.nodeId,
          handleId: Q.handleId,
          handleType: Q.handleType
        });
      },
      onConnectEnd: (X, Q) => {
        E.onconnectend?.(X, Q);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: M.currentTarget
    });
  }
  function C(M) {
    if (!y || !E.clickConnectStartHandle && !l())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.(M, { nodeId: y, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const j = bu(M.target), X = d() ?? E.isValidConnection, { connectionMode: Q, clickConnectStartHandle: q, flowId: F, nodeLookup: U } = E, { connection: G, isValid: ne } = gl.isValid(M, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: Q,
      fromNodeId: q.nodeId,
      fromHandleId: q.id ?? null,
      fromType: q.type,
      isValidConnection: X,
      flowId: F,
      doc: j,
      lib: "svelte",
      nodeLookup: U
    });
    ne && G && T(G);
    const ee = structuredClone(ql(E.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, E.onclickconnectend?.(M, ee), E.clickConnectStartHandle = null;
  }
  var O = {
    get id() {
      return n();
    },
    set id(M = null) {
      n(M), v();
    },
    get type() {
      return r();
    },
    set type(M = "source") {
      r(M), v();
    },
    get position() {
      return o();
    },
    set position(M = me.Top) {
      o(M), v();
    },
    get style() {
      return i();
    },
    set style(M) {
      i(M), v();
    },
    get class() {
      return s();
    },
    set class(M) {
      s(M), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(M) {
      a(M), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(M = !0) {
      l(M), v();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd(M = !0) {
      c(M), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(M) {
      d(M), v();
    },
    get onconnect() {
      return h();
    },
    set onconnect(M) {
      h(M), v();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(M) {
      f(M), v();
    },
    get children() {
      return g();
    },
    set children(M) {
      g(M), v();
    }
  }, H = N0(), K = () => {
  };
  et(H, () => ({
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
    onmousedown: x,
    ontouchstart: x,
    onclick: E.clickConnect ? C : void 0,
    onkeypress: K,
    style: i(),
    role: "button",
    "aria-label": u(b)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [Kn]: {
      valid: u(S),
      connectingto: u(Z),
      connectingfrom: u(V),
      source: !u(_),
      target: u(_),
      connectablestart: l(),
      connectableend: c(),
      connectable: u(k),
      connectionindicator: u(k) && (!u(I) || u(z)) && (u(I) || E.clickConnectStartHandle ? c() : l())
    }
  }));
  var W = B(H);
  return je(W, () => g() ?? mt), R(H), D(e, H), de(O);
}
se(
  Un,
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
var P0 = /* @__PURE__ */ te("<!> <!>", 1);
function ha(e, t) {
  ue(t, !0);
  let n = p(t, "data", 7), r = p(t, "targetPosition", 23, () => me.Top), o = p(t, "sourcePosition", 23, () => me.Bottom);
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
    set targetPosition(d = me.Top) {
      r(d), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = me.Bottom) {
      o(d), v();
    }
  }, s = P0(), a = ie(s);
  Un(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = L(a), c = L(l);
  return Un(c, {
    type: "source",
    get position() {
      return o();
    }
  }), Ce(() => Fe(l, ` ${n()?.label ?? ""} `)), D(e, s), de(i);
}
se(ha, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var $0 = /* @__PURE__ */ te(" <!>", 1);
function Vu(e, t) {
  ue(t, !0);
  let n = p(t, "data", 23, () => ({ label: "Node" })), r = p(t, "sourcePosition", 23, () => me.Bottom);
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
    set sourcePosition(l = me.Bottom) {
      r(l), v();
    }
  };
  pe();
  var i = $0(), s = ie(i), a = L(s);
  return Un(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ce(() => Fe(s, `${n()?.label ?? ""} `)), D(e, i), de(o);
}
se(Vu, { data: {}, sourcePosition: {} }, [], [], !0);
var T0 = /* @__PURE__ */ te(" <!>", 1);
function Iu(e, t) {
  ue(t, !0);
  let n = p(t, "data", 23, () => ({ label: "Node" })), r = p(t, "targetPosition", 23, () => me.Top);
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
    set targetPosition(l = me.Top) {
      r(l), v();
    }
  };
  pe();
  var i = T0(), s = ie(i), a = L(s);
  return Un(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ce(() => Fe(s, `${n()?.label ?? ""} `)), D(e, i), de(o);
}
se(Iu, { data: {}, targetPosition: {} }, [], [], !0);
function zu(e, t) {
}
se(zu, {}, [], [], !0);
function ns(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Ru(e, t) {
  const n = /* @__PURE__ */ N(sn), r = /* @__PURE__ */ N(() => u(n).domNode);
  let o;
  return u(r) ? ns(e, u(r), t) : o = Ys(() => {
    Xe(() => {
      ns(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      ns(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Bu() {
  let e = /* @__PURE__ */ Ne(typeof window > "u");
  if (u(e)) {
    const t = Ys(() => {
      Xe(() => {
        J(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const pl = (e) => Pp(e), D0 = (e) => vu(e);
function mn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const pi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var A0 = /* @__PURE__ */ te("<div><!></div>");
const O0 = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function Fu(e, t) {
  ue(t, !0), ze(e, O0);
  let n = p(t, "x", 7, 0), r = p(t, "y", 7, 0), o = p(t, "width", 7), i = p(t, "height", 7), s = p(t, "selectEdgeOnClick", 7, !1), a = p(t, "transparent", 7, !1), l = p(t, "class", 7), c = p(t, "children", 7), d = /* @__PURE__ */ Re(t, [
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
  const h = sn(), f = jn("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let g = /* @__PURE__ */ N(() => h.visible.edges.get(f)?.zIndex);
  var m = {
    get x() {
      return n();
    },
    set x(k = 0) {
      n(k), v();
    },
    get y() {
      return r();
    },
    set y(k = 0) {
      r(k), v();
    },
    get width() {
      return o();
    },
    set width(k) {
      o(k), v();
    },
    get height() {
      return i();
    },
    set height(k) {
      i(k), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(k = !1) {
      s(k), v();
    },
    get transparent() {
      return a();
    },
    set transparent(k = !1) {
      a(k), v();
    },
    get class() {
      return l();
    },
    set class(k) {
      l(k), v();
    },
    get children() {
      return c();
    },
    set children(k) {
      c(k), v();
    }
  }, y = A0(), w = () => {
    s() && h.handleEdgeSelection(f);
  };
  et(
    y,
    (k) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [fn]: k
    }),
    [
      () => ({
        display: Bu().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: mn(o()),
        height: mn(i()),
        "z-index": u(g)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var _ = B(y);
  return je(_, () => c() ?? mt), R(y), gt(y, (k, E) => Ru?.(k, E), () => "edge-labels"), D(e, y), de(m);
}
se(
  Fu,
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
var M0 = /* @__PURE__ */ ge("<path></path>"), H0 = /* @__PURE__ */ ge('<path fill="none"></path><!><!>', 1);
function To(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "path", 7), o = p(t, "label", 7), i = p(t, "labelX", 7), s = p(t, "labelY", 7), a = p(t, "labelStyle", 7), l = p(t, "markerStart", 7), c = p(t, "markerEnd", 7), d = p(t, "style", 7), h = p(t, "interactionWidth", 7, 20), f = p(t, "class", 7), g = /* @__PURE__ */ Re(t, [
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
      return c();
    },
    set markerEnd(P) {
      c(P), v();
    },
    get style() {
      return d();
    },
    set style(P) {
      d(P), v();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(P = 20) {
      h(P), v();
    },
    get class() {
      return f();
    },
    set class(P) {
      f(P), v();
    }
  }, y = H0(), w = ie(y), _ = L(w);
  {
    var k = (P) => {
      var $ = M0();
      et($, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), D(P, $);
    };
    ae(_, (P) => {
      h() > 0 && P(k);
    });
  }
  var E = L(_);
  {
    var b = (P) => {
      Fu(P, {
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
        children: ($, A) => {
          pe();
          var I = ke();
          Ce(() => Fe(I, o())), D($, I);
        },
        $$slots: { default: !0 }
      });
    };
    ae(E, (P) => {
      o() && P(b);
    });
  }
  return Ce(() => {
    be(w, "id", n()), be(w, "d", r()), Dt(w, 0, In(["svelte-flow__edge-path", f()])), be(w, "marker-start", l()), be(w, "marker-end", c()), ht(w, d());
  }), D(e, y), de(m);
}
se(
  To,
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
function ga(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "interactionWidth", 7), o = p(t, "label", 7), i = p(t, "labelStyle", 7), s = p(t, "markerEnd", 7), a = p(t, "markerStart", 7), l = p(t, "pathOptions", 7), c = p(t, "sourcePosition", 7), d = p(t, "sourceX", 7), h = p(t, "sourceY", 7), f = p(t, "style", 7), g = p(t, "targetPosition", 7), m = p(t, "targetX", 7), y = p(t, "targetY", 7), w = /* @__PURE__ */ N(() => Eu({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), _ = /* @__PURE__ */ N(() => mo(u(w), 3)), k = /* @__PURE__ */ N(() => u(_)[0]), E = /* @__PURE__ */ N(() => u(_)[1]), b = /* @__PURE__ */ N(() => u(_)[2]);
  var P = {
    get id() {
      return n();
    },
    set id($) {
      n($), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth($) {
      r($), v();
    },
    get label() {
      return o();
    },
    set label($) {
      o($), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle($) {
      i($), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd($) {
      s($), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart($) {
      a($), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions($) {
      l($), v();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition($) {
      c($), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX($) {
      d($), v();
    },
    get sourceY() {
      return h();
    },
    set sourceY($) {
      h($), v();
    },
    get style() {
      return f();
    },
    set style($) {
      f($), v();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition($) {
      g($), v();
    },
    get targetX() {
      return m();
    },
    set targetX($) {
      m($), v();
    },
    get targetY() {
      return y();
    },
    set targetY($) {
      y($), v();
    }
  };
  return To(e, {
    get id() {
      return n();
    },
    get path() {
      return u(k);
    },
    get labelX() {
      return u(E);
    },
    get labelY() {
      return u(b);
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
  }), de(P);
}
se(
  ga,
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
function Ku(e, t) {
  ue(t, !0);
  let n = p(t, "interactionWidth", 7), r = p(t, "label", 7), o = p(t, "labelStyle", 7), i = p(t, "style", 7), s = p(t, "markerEnd", 7), a = p(t, "markerStart", 7), l = p(t, "sourcePosition", 7), c = p(t, "sourceX", 7), d = p(t, "sourceY", 7), h = p(t, "targetPosition", 7), f = p(t, "targetX", 7), g = p(t, "targetY", 7), m = /* @__PURE__ */ N(() => ca({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ N(() => mo(u(m), 3)), w = /* @__PURE__ */ N(() => u(y)[0]), _ = /* @__PURE__ */ N(() => u(y)[1]), k = /* @__PURE__ */ N(() => u(y)[2]);
  var E = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(b) {
      n(b), v();
    },
    get label() {
      return r();
    },
    set label(b) {
      r(b), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(b) {
      o(b), v();
    },
    get style() {
      return i();
    },
    set style(b) {
      i(b), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(b) {
      s(b), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(b) {
      a(b), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(b) {
      l(b), v();
    },
    get sourceX() {
      return c();
    },
    set sourceX(b) {
      c(b), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(b) {
      d(b), v();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(b) {
      h(b), v();
    },
    get targetX() {
      return f();
    },
    set targetX(b) {
      f(b), v();
    },
    get targetY() {
      return g();
    },
    set targetY(b) {
      g(b), v();
    }
  };
  return To(e, {
    get path() {
      return u(w);
    },
    get labelX() {
      return u(_);
    },
    get labelY() {
      return u(k);
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
  }), de(E);
}
se(
  Ku,
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
function Zu(e, t) {
  ue(t, !0);
  let n = p(t, "sourceX", 7), r = p(t, "sourceY", 7), o = p(t, "targetX", 7), i = p(t, "targetY", 7), s = p(t, "label", 7), a = p(t, "labelStyle", 7), l = p(t, "markerStart", 7), c = p(t, "markerEnd", 7), d = p(t, "interactionWidth", 7), h = p(t, "style", 7), f = /* @__PURE__ */ N(() => Nu({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ N(() => mo(u(f), 3)), m = /* @__PURE__ */ N(() => u(g)[0]), y = /* @__PURE__ */ N(() => u(g)[1]), w = /* @__PURE__ */ N(() => u(g)[2]);
  var _ = {
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
    get targetX() {
      return o();
    },
    set targetX(k) {
      o(k), v();
    },
    get targetY() {
      return i();
    },
    set targetY(k) {
      i(k), v();
    },
    get label() {
      return s();
    },
    set label(k) {
      s(k), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(k) {
      a(k), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(k) {
      l(k), v();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(k) {
      c(k), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(k) {
      d(k), v();
    },
    get style() {
      return h();
    },
    set style(k) {
      h(k), v();
    }
  };
  return To(e, {
    get path() {
      return u(m);
    },
    get labelX() {
      return u(y);
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
  }), de(_);
}
se(
  Zu,
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
function Yu(e, t) {
  ue(t, !0);
  let n = p(t, "sourceX", 7), r = p(t, "sourceY", 7), o = p(t, "sourcePosition", 7), i = p(t, "targetX", 7), s = p(t, "targetY", 7), a = p(t, "targetPosition", 7), l = p(t, "label", 7), c = p(t, "labelStyle", 7), d = p(t, "markerStart", 7), h = p(t, "markerEnd", 7), f = p(t, "interactionWidth", 7), g = p(t, "style", 7), m = /* @__PURE__ */ N(() => ca({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ N(() => mo(u(m), 3)), w = /* @__PURE__ */ N(() => u(y)[0]), _ = /* @__PURE__ */ N(() => u(y)[1]), k = /* @__PURE__ */ N(() => u(y)[2]);
  var E = {
    get sourceX() {
      return n();
    },
    set sourceX(b) {
      n(b), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(b) {
      r(b), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(b) {
      o(b), v();
    },
    get targetX() {
      return i();
    },
    set targetX(b) {
      i(b), v();
    },
    get targetY() {
      return s();
    },
    set targetY(b) {
      s(b), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(b) {
      a(b), v();
    },
    get label() {
      return l();
    },
    set label(b) {
      l(b), v();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(b) {
      c(b), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(b) {
      d(b), v();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(b) {
      h(b), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(b) {
      f(b), v();
    },
    get style() {
      return g();
    },
    set style(b) {
      g(b), v();
    }
  };
  return To(e, {
    get path() {
      return u(w);
    },
    get labelX() {
      return u(_);
    },
    get labelY() {
      return u(k);
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
  }), de(E);
}
se(
  Yu,
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
class L0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = tc(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const V0 = /\(.+\)/, I0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class z0 extends L0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = V0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => I0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => gs(o, "change", i)
    );
  }
}
function R0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return aa(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function ml(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const h = r.get(d.source), f = r.get(d.target);
    if (!h || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: _, height: k } = e;
      if (Fp({
        sourceNode: h,
        targetNode: f,
        width: _,
        height: k,
        transform: w
      }))
        y.set(h.id, h), y.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && h == g.sourceNode && f == g.targetNode) {
      c.set(d.id, g);
      continue;
    }
    const m = jp({
      id: d.id,
      sourceNode: h,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    m && c.set(d.id, {
      ...n,
      ...d,
      ...m,
      zIndex: Bp({
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
const Wu = {
  input: Vu,
  output: Iu,
  default: ha,
  group: zu
}, Xu = {
  straight: Zu,
  smoothstep: Ku,
  default: ga,
  step: Yu
};
function B0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = No(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return la(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function F0(e) {
  class t {
    #t = /* @__PURE__ */ N(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      J(this.#t, r);
    }
    #e = /* @__PURE__ */ Ne(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      J(this.#e, r);
    }
    #n = /* @__PURE__ */ Ne(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      J(this.#n, r);
    }
    #r = /* @__PURE__ */ Ne(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      J(this.#r, r);
    }
    #l = /* @__PURE__ */ Ne(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      J(this.#l, r);
    }
    #i = /* @__PURE__ */ N(() => {
      const r = n0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      J(this.#i, r);
    }
    #o = /* @__PURE__ */ N(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#o);
    }
    set viewportInitialized(r) {
      J(this.#o, r);
    }
    #s = /* @__PURE__ */ N(() => (l0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#s);
    }
    set _edges(r) {
      J(this.#s, r);
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
    #a = /* @__PURE__ */ N(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#a);
    }
    set selectedNodes(r) {
      J(this.#a, r);
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
      J(this.#c, r);
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
        const { viewport: m, width: y, height: w } = this, _ = [m.x, m.y, m.zoom];
        h = R0(s, _, y, w), f = ml({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: _,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, f = ml(g);
      return { nodes: h, edges: f };
    });
    get visible() {
      return u(this.#u);
    }
    set visible(r) {
      J(this.#u, r);
    }
    #d = /* @__PURE__ */ N(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      J(this.#d, r);
    }
    #f = /* @__PURE__ */ N(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      J(this.#f, r);
    }
    #g = /* @__PURE__ */ N(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#g);
    }
    set elementsSelectable(r) {
      J(this.#g, r);
    }
    #h = /* @__PURE__ */ N(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#h);
    }
    set nodesFocusable(r) {
      J(this.#h, r);
    }
    #w = /* @__PURE__ */ N(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#w);
    }
    set edgesFocusable(r) {
      J(this.#w, r);
    }
    #_ = /* @__PURE__ */ N(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#_);
    }
    set disableKeyboardA11y(r) {
      J(this.#_, r);
    }
    #x = /* @__PURE__ */ N(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#x);
    }
    set minZoom(r) {
      J(this.#x, r);
    }
    #m = /* @__PURE__ */ N(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#m);
    }
    set maxZoom(r) {
      J(this.#m, r);
    }
    #v = /* @__PURE__ */ N(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#v);
    }
    set nodeOrigin(r) {
      J(this.#v, r);
    }
    #p = /* @__PURE__ */ N(() => e.props.nodeExtent ?? Es);
    get nodeExtent() {
      return u(this.#p);
    }
    set nodeExtent(r) {
      J(this.#p, r);
    }
    #y = /* @__PURE__ */ N(() => e.props.translateExtent ?? Es);
    get translateExtent() {
      return u(this.#y);
    }
    set translateExtent(r) {
      J(this.#y, r);
    }
    #b = /* @__PURE__ */ N(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#b);
    }
    set defaultEdgeOptions(r) {
      J(this.#b, r);
    }
    #C = /* @__PURE__ */ N(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      J(this.#C, r);
    }
    #k = /* @__PURE__ */ N(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      J(this.#k, r);
    }
    #E = /* @__PURE__ */ N(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#E);
    }
    set autoPanOnConnect(r) {
      J(this.#E, r);
    }
    #S = /* @__PURE__ */ N(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      J(this.#S, r);
    }
    #N = /* @__PURE__ */ N(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#N);
    }
    set autoPanSpeed(r) {
      J(this.#N, r);
    }
    #P = /* @__PURE__ */ N(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#P);
    }
    set connectionDragThreshold(r) {
      J(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #$ = /* @__PURE__ */ N(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#$);
    }
    set snapGrid(r) {
      J(this.#$, r);
    }
    #T = /* @__PURE__ */ Ne(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      J(this.#T, r);
    }
    #D = /* @__PURE__ */ Ne(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      J(this.#D, r);
    }
    #A = /* @__PURE__ */ Ne(!1);
    get selectionKeyPressed() {
      return u(this.#A);
    }
    set selectionKeyPressed(r) {
      J(this.#A, r);
    }
    #O = /* @__PURE__ */ Ne(!1);
    get multiselectionKeyPressed() {
      return u(this.#O);
    }
    set multiselectionKeyPressed(r) {
      J(this.#O, r);
    }
    #M = /* @__PURE__ */ Ne(!1);
    get deleteKeyPressed() {
      return u(this.#M);
    }
    set deleteKeyPressed(r) {
      J(this.#M, r);
    }
    #H = /* @__PURE__ */ Ne(!1);
    get panActivationKeyPressed() {
      return u(this.#H);
    }
    set panActivationKeyPressed(r) {
      J(this.#H, r);
    }
    #L = /* @__PURE__ */ Ne(!1);
    get zoomActivationKeyPressed() {
      return u(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      J(this.#L, r);
    }
    #V = /* @__PURE__ */ Ne(null);
    get selectionRectMode() {
      return u(this.#V);
    }
    set selectionRectMode(r) {
      J(this.#V, r);
    }
    #I = /* @__PURE__ */ Ne("");
    get ariaLiveMessage() {
      return u(this.#I);
    }
    set ariaLiveMessage(r) {
      J(this.#I, r);
    }
    #z = /* @__PURE__ */ N(() => e.props.selectionMode ?? hi.Partial);
    get selectionMode() {
      return u(this.#z);
    }
    set selectionMode(r) {
      J(this.#z, r);
    }
    #R = /* @__PURE__ */ N(() => ({ ...Wu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#R);
    }
    set nodeTypes(r) {
      J(this.#R, r);
    }
    #B = /* @__PURE__ */ N(() => ({ ...Xu, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#B);
    }
    set edgeTypes(r) {
      J(this.#B, r);
    }
    #F = /* @__PURE__ */ N(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#F);
    }
    set noPanClass(r) {
      J(this.#F, r);
    }
    #K = /* @__PURE__ */ N(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#K);
    }
    set noDragClass(r) {
      J(this.#K, r);
    }
    #Z = /* @__PURE__ */ N(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      J(this.#Z, r);
    }
    #Y = /* @__PURE__ */ N(() => Ip(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#Y);
    }
    set ariaLabelConfig(r) {
      J(this.#Y, r);
    }
    #W = /* @__PURE__ */ Ne(B0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#W);
    }
    set _viewport(r) {
      J(this.#W, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #X = /* @__PURE__ */ Ne(
      // _connection is viewport independent and originating from XYHandle
      Ss
    );
    get _connection() {
      return u(this.#X);
    }
    set _connection(r) {
      J(this.#X, r);
    }
    #q = /* @__PURE__ */ N(() => this._connection.inProgress ? {
      ...this._connection,
      to: $o(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#q);
    }
    set connection(r) {
      J(this.#q, r);
    }
    #j = /* @__PURE__ */ N(() => e.props.connectionMode ?? Vr.Strict);
    get connectionMode() {
      return u(this.#j);
    }
    set connectionMode(r) {
      J(this.#j, r);
    }
    #G = /* @__PURE__ */ N(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#G);
    }
    set connectionRadius(r) {
      J(this.#G, r);
    }
    #U = /* @__PURE__ */ N(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#U);
    }
    set isValidConnection(r) {
      J(this.#U, r);
    }
    #J = /* @__PURE__ */ N(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#J);
    }
    set selectNodesOnDrag(r) {
      J(this.#J, r);
    }
    #Q = /* @__PURE__ */ N(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#Q);
    }
    set defaultMarkerColor(r) {
      J(this.#Q, r);
    }
    #ee = /* @__PURE__ */ N(() => Gp(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#ee);
    }
    set markers(r) {
      J(this.#ee, r);
    }
    #te = /* @__PURE__ */ N(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      J(this.#te, r);
    }
    #ne = /* @__PURE__ */ N(() => e.props.onflowerror ?? Mp);
    get onerror() {
      return u(this.#ne);
    }
    set onerror(r) {
      J(this.#ne, r);
    }
    #re = /* @__PURE__ */ N(() => e.props.ondelete);
    get ondelete() {
      return u(this.#re);
    }
    set ondelete(r) {
      J(this.#re, r);
    }
    #oe = /* @__PURE__ */ N(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#oe);
    }
    set onbeforedelete(r) {
      J(this.#oe, r);
    }
    #ie = /* @__PURE__ */ N(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#ie);
    }
    set onbeforeconnect(r) {
      J(this.#ie, r);
    }
    #se = /* @__PURE__ */ N(() => e.props.onconnect);
    get onconnect() {
      return u(this.#se);
    }
    set onconnect(r) {
      J(this.#se, r);
    }
    #ae = /* @__PURE__ */ N(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#ae);
    }
    set onconnectstart(r) {
      J(this.#ae, r);
    }
    #le = /* @__PURE__ */ N(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#le);
    }
    set onconnectend(r) {
      J(this.#le, r);
    }
    #ce = /* @__PURE__ */ N(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ce);
    }
    set onbeforereconnect(r) {
      J(this.#ce, r);
    }
    #ue = /* @__PURE__ */ N(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      J(this.#ue, r);
    }
    #de = /* @__PURE__ */ N(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#de);
    }
    set onreconnectstart(r) {
      J(this.#de, r);
    }
    #fe = /* @__PURE__ */ N(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#fe);
    }
    set onreconnectend(r) {
      J(this.#fe, r);
    }
    #he = /* @__PURE__ */ N(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#he);
    }
    set clickConnect(r) {
      J(this.#he, r);
    }
    #ge = /* @__PURE__ */ N(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      J(this.#ge, r);
    }
    #ve = /* @__PURE__ */ N(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#ve);
    }
    set onclickconnectend(r) {
      J(this.#ve, r);
    }
    #pe = /* @__PURE__ */ Ne(null);
    get clickConnectStartHandle() {
      return u(this.#pe);
    }
    set clickConnectStartHandle(r) {
      J(this.#pe, r);
    }
    #me = /* @__PURE__ */ N(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#me);
    }
    set onselectiondrag(r) {
      J(this.#me, r);
    }
    #ye = /* @__PURE__ */ N(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#ye);
    }
    set onselectiondragstart(r) {
      J(this.#ye, r);
    }
    #we = /* @__PURE__ */ N(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      J(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Ap(
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
    _prefersDark = new z0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #_e = /* @__PURE__ */ N(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#_e);
    }
    set colorMode(r) {
      J(this.#_e, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Ss, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function sn() {
  const e = jn(mi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const mi = Symbol();
function qu(e) {
  const t = F0(e);
  function n(z) {
    t.nodeTypes = {
      ...Wu,
      ...z
    };
  }
  function r(z) {
    t.edgeTypes = {
      ...Xu,
      ...z
    };
  }
  function o(z) {
    t.edges = Yp(z, t.edges);
  }
  const i = (z, S = !1) => {
    t.nodes = t.nodes.map((T) => {
      const x = z.get(T.id);
      return x ? { ...T, position: x.position, dragging: S } : T;
    });
  };
  function s(z) {
    const { changes: S, updatedInternals: T } = s0(z, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!T)
      return;
    e0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const x = /* @__PURE__ */ new Map();
    for (const C of S) {
      const O = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!O)
        continue;
      const H = { ...O };
      switch (C.type) {
        case "dimensions": {
          const K = { ...H.measured, ...C.dimensions };
          C.setAttributes && (H.width = C.dimensions?.width ?? H.width, H.height = C.dimensions?.height ?? H.height), H.measured = K;
          break;
        }
        case "position":
          H.position = C.position ?? H.position;
          break;
      }
      x.set(C.id, H);
    }
    t.nodes = t.nodes.map((C) => x.get(C.id) ?? C);
  }
  function a(z) {
    const S = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = z, t.fitViewResolver = S, t.nodes = [...t.nodes], S.promise;
  }
  async function l(z, S, T) {
    const x = typeof T?.zoom < "u" ? T.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - z * x,
      y: t.height / 2 - S * x,
      zoom: x
    }, { duration: T?.duration, ease: T?.ease, interpolate: T?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(z, S) {
    const T = t.panZoom;
    return T ? T.scaleBy(z, S) : Promise.resolve(!1);
  }
  function d(z) {
    return c(1.2, z);
  }
  function h(z) {
    return c(1 / 1.2, z);
  }
  function f(z) {
    const S = t.panZoom;
    S && (S.setScaleExtent([z, t.maxZoom]), t.minZoom = z);
  }
  function g(z) {
    const S = t.panZoom;
    S && (S.setScaleExtent([t.minZoom, z]), t.maxZoom = z);
  }
  function m(z) {
    const S = t.panZoom;
    S && (S.setTranslateExtent(z), t.translateExtent = z);
  }
  function y(z, S = null) {
    let T = !1;
    const x = z.map((C) => (S ? S.has(C.id) : !0) && C.selected ? (T = !0, { ...C, selected: !1 }) : C);
    return [T, x];
  }
  function w(z) {
    const S = z?.nodes ? new Set(z.nodes.map((K) => K.id)) : null, [T, x] = y(t.nodes, S);
    T && (t.nodes = x);
    const C = z?.edges ? new Set(z.edges.map((K) => K.id)) : null, [O, H] = y(t.edges, C);
    O && (t.edges = H);
  }
  function _(z) {
    const S = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((T) => {
      const x = z.includes(T.id), C = S && T.selected || x;
      return !!T.selected !== C ? { ...T, selected: C } : T;
    }), S || w({ nodes: [] });
  }
  function k(z) {
    const S = t.multiselectionKeyPressed;
    t.edges = t.edges.map((T) => {
      const x = z.includes(T.id), C = S && T.selected || x;
      return !!T.selected !== C ? { ...T, selected: C } : T;
    }), S || w({ edges: [] });
  }
  function E(z, S, T) {
    const x = t.nodeLookup.get(z);
    if (!x) {
      console.warn("012", co.error012(z));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, x.selected ? (S || x.selected && t.multiselectionKeyPressed) && (w({ nodes: [x], edges: [] }), requestAnimationFrame(() => T?.blur())) : _([z]);
  }
  function b(z) {
    const S = t.edgeLookup.get(z);
    if (!S) {
      console.warn("012", co.error012(z));
      return;
    }
    (S.selectable || t.elementsSelectable && typeof S.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, S.selected ? S.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [S] }) : k([z]));
  }
  function P(z, S) {
    const { nodeExtent: T, snapGrid: x, nodeOrigin: C, nodeLookup: O, nodesDraggable: H, onerror: K } = t, W = /* @__PURE__ */ new Map(), M = x?.[0] ?? 5, j = x?.[1] ?? 5, X = z.x * M * S, Q = z.y * j * S;
    for (const q of O.values()) {
      if (!(q.selected && (q.draggable || H && typeof q.draggable > "u")))
        continue;
      let U = {
        x: q.internals.positionAbsolute.x + X,
        y: q.internals.positionAbsolute.y + Q
      };
      x && (U = Po(U, x));
      const { position: G, positionAbsolute: ne } = pu({
        nodeId: q.id,
        nextPosition: U,
        nodeLookup: O,
        nodeExtent: T,
        nodeOrigin: C,
        onError: K
      });
      q.position = G, q.internals.positionAbsolute = ne, W.set(q.id, q);
    }
    i(W);
  }
  function $(z) {
    return a0({
      delta: z,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const A = (z) => {
    t._connection = { ...z };
  };
  function I() {
    t._connection = Ss;
  }
  function V() {
    t.resetStoreValues(), w();
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
    setTranslateExtent: m,
    unselectNodesAndEdges: w,
    addSelectedNodes: _,
    addSelectedEdges: k,
    handleNodeSelection: E,
    handleEdgeSelection: b,
    moveSelectedNodes: P,
    panBy: $,
    updateConnection: A,
    cancelConnection: I,
    reset: V
  });
}
function K0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: d, onTransformChange: h } = t, f = S0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), g = f.getViewport();
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]), c(f), f.update(t), {
    update(m) {
      f.update(m);
    }
  };
}
var Z0 = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function ju(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "panOnScrollMode", 7), o = p(t, "preventScrolling", 7), i = p(t, "zoomOnScroll", 7), s = p(t, "zoomOnDoubleClick", 7), a = p(t, "zoomOnPinch", 7), l = p(t, "panOnDrag", 7), c = p(t, "panOnScroll", 7), d = p(t, "panOnScrollSpeed", 7), h = p(t, "paneClickDistance", 7), f = p(t, "selectionOnDrag", 7), g = p(t, "onmovestart", 7), m = p(t, "onmove", 7), y = p(t, "onmoveend", 7), w = p(t, "oninit", 7), _ = p(t, "children", 7), k = /* @__PURE__ */ N(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ N(() => n().panActivationKeyPressed || c());
  const { viewport: b } = n();
  let P = !1;
  Xe(() => {
    !P && n().viewportInitialized && (w()?.(), P = !0);
  });
  var $ = {
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
      return c();
    },
    set panOnScroll(V) {
      c(V), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(V) {
      d(V), v();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(V) {
      h(V), v();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(V) {
      f(V), v();
    },
    get onmovestart() {
      return g();
    },
    set onmovestart(V) {
      g(V), v();
    },
    get onmove() {
      return m();
    },
    set onmove(V) {
      m(V), v();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(V) {
      y(V), v();
    },
    get oninit() {
      return w();
    },
    set oninit(V) {
      w(V), v();
    },
    get children() {
      return _();
    },
    set children(V) {
      _(V), v();
    }
  }, A = Z0(), I = B(A);
  return je(I, _), R(A), gt(A, (V, Z) => K0?.(V, Z), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: b,
    onDraggingChange: (V) => {
      n(n().dragging = V, !0);
    },
    setPanZoomInstance: (V) => {
      n(n().panZoom = V, !0);
    },
    onPanZoomStart: g(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: u(E),
    panOnDrag: u(k),
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
    selectionOnDrag: f(),
    onTransformChange: (V) => {
      n(n().viewport = { x: V[0], y: V[1], zoom: V[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), D(e, A), de($);
}
se(
  ju,
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
function yl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function wl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function _l(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Y0 = /* @__PURE__ */ te("<div><!></div>");
function Gu(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "panOnDrag", 7, !0), o = p(t, "paneClickDistance", 7, 1), i = p(t, "selectionOnDrag", 7), s = p(t, "onpaneclick", 7), a = p(t, "onpanecontextmenu", 7), l = p(t, "onselectionstart", 7), c = p(t, "onselectionend", 7), d = p(t, "children", 7), h, f = null, g = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ N(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ N(() => n().selectionKeyPressed || !!n().selectionRect || i() && u(y) !== !0), _ = /* @__PURE__ */ N(() => n().elementsSelectable && (u(w) || n().selectionRectMode === "user")), k = !1;
  function E(C) {
    if (f = h?.getBoundingClientRect(), !f) return;
    const O = C.target === h, H = !O && !!C.target.closest(".nokey"), K = i() && O || n().selectionKeyPressed;
    if (H || !u(w) || !K || C.button !== 0 || !C.isPrimary)
      return;
    C.target?.setPointerCapture?.(C.pointerId), k = !1;
    const { x: W, y: M } = Qt(C, f);
    n(n().selectionRect = { width: 0, height: 0, startX: W, startY: M, x: W, y: M }, !0), O || (C.stopPropagation(), C.preventDefault());
  }
  function b(C) {
    if (!u(w) || !f || !n().selectionRect)
      return;
    const O = Qt(C, f), { startX: H = 0, startY: K = 0 } = n().selectionRect;
    if (!k) {
      const Q = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(O.x - H, O.y - K) <= Q)
        return;
      n().unselectNodesAndEdges(), l()?.(C);
    }
    k = !0;
    const W = {
      ...n().selectionRect,
      x: O.x < H ? O.x : H,
      y: O.y < K ? O.y : K,
      width: Math.abs(O.x - H),
      height: Math.abs(O.y - K)
    }, M = g, j = m;
    g = new Set(aa(
      n().nodeLookup,
      W,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === hi.Partial,
      !0
    ).map((Q) => Q.id));
    const X = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const Q of g) {
      const q = n().connectionLookup.get(Q);
      if (q)
        for (const { edgeId: F } of q.values()) {
          const U = n().edgeLookup.get(F);
          U && (U.selectable ?? X) && m.add(F);
        }
    }
    _l(M, g) || n(n().nodes = n().nodes.map(wl(g)), !0), _l(j, m) || n(n().edges = n().edges.map(wl(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = W, !0);
  }
  function P(C) {
    C.button === 0 && (C.target?.releasePointerCapture?.(C.pointerId), !k && C.target === h && I?.(C), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = g.size > 0 ? "nodes" : null, !0), k && c()?.(C));
  }
  const $ = (C) => {
    if (Array.isArray(u(y)) && u(y).includes(2)) {
      C.preventDefault();
      return;
    }
    a()?.({ event: C });
  }, A = (C) => {
    k && (C.stopPropagation(), k = !1);
  };
  function I(C) {
    if (k || n().connection.inProgress) {
      k = !1;
      return;
    }
    s()?.({ event: C }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var V = {
    get store() {
      return n();
    },
    set store(C) {
      n(C), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(C = !0) {
      r(C), v();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(C = 1) {
      o(C), v();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(C) {
      i(C), v();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(C) {
      s(C), v();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(C) {
      a(C), v();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(C) {
      l(C), v();
    },
    get onselectionend() {
      return c();
    },
    set onselectionend(C) {
      c(C), v();
    },
    get children() {
      return d();
    },
    set children(C) {
      d(C), v();
    }
  }, Z = Y0();
  let z;
  var S = /* @__PURE__ */ N(() => u(_) ? void 0 : yl(I, h));
  Z.__click = function(...C) {
    u(S)?.apply(this, C);
  }, Z.__pointermove = function(...C) {
    (u(_) ? b : void 0)?.apply(this, C);
  }, Z.__pointerup = function(...C) {
    (u(_) ? P : void 0)?.apply(this, C);
  };
  var T = /* @__PURE__ */ N(() => yl($, h));
  Z.__contextmenu = function(...C) {
    u(T)?.apply(this, C);
  };
  var x = B(Z);
  return je(x, d), R(Z), At(Z, (C) => h = C, () => h), Ce((C) => z = Dt(Z, 1, "svelte-flow__pane svelte-flow__container", null, z, C), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(w)
    })
  ]), ii(
    "pointerdown",
    Z,
    function(...C) {
      (u(_) ? E : void 0)?.apply(this, C);
    },
    !0
  ), ii(
    "click",
    Z,
    function(...C) {
      (u(_) ? A : void 0)?.apply(this, C);
    },
    !0
  ), D(e, Z), de(V);
}
nr(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  Gu,
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
var W0 = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Uu(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "children", 7);
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
  }, i = W0();
  let s;
  var a = B(i);
  return je(a, r), R(i), Ce(() => s = ht(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), D(e, i), de(o);
}
se(Uu, { store: {}, children: {} }, [], [], !0);
function Ju(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = f0({
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
var X0 = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), q0 = /* @__PURE__ */ te('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const j0 = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Qu(e, t) {
  ue(t, !0), ze(e, j0);
  let n = p(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), v();
    }
  }, o = q0(), i = ie(o), s = B(i, !0);
  R(i);
  var a = L(i, 2), l = B(a, !0);
  R(a);
  var c = L(a, 2);
  {
    var d = (h) => {
      var f = X0(), g = B(f, !0);
      R(f), Ce(() => {
        be(f, "id", `${G0}-${n().flowId}`), Fe(g, n().ariaLiveMessage);
      }), D(h, f);
    };
    ae(c, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ce(() => {
    be(i, "id", `${ed}-${n().flowId}`), Fe(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), be(a, "id", `${td}-${n().flowId}`), Fe(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), D(e, o), de(r);
}
se(Qu, { store: {} }, [], [], !0);
const ed = "svelte-flow__node-desc", td = "svelte-flow__edge-desc", G0 = "svelte-flow__aria-live";
var U0 = /* @__PURE__ */ te("<div><!></div>");
function nd(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "node", 7), o = p(t, "resizeObserver", 7), i = p(t, "nodeClickDistance", 7), s = p(t, "onnodeclick", 7), a = p(t, "onnodedrag", 7), l = p(t, "onnodedragstart", 7), c = p(t, "onnodedragstop", 7), d = p(t, "onnodepointerenter", 7), h = p(t, "onnodepointerleave", 7), f = p(t, "onnodepointermove", 7), g = p(t, "onnodecontextmenu", 7), m = /* @__PURE__ */ N(() => _t(r().data, () => ({}), !0)), y = /* @__PURE__ */ N(() => _t(r().selected, !1)), w = /* @__PURE__ */ N(() => r().draggable), _ = /* @__PURE__ */ N(() => r().selectable), k = /* @__PURE__ */ N(() => _t(r().deletable, !0)), E = /* @__PURE__ */ N(() => r().connectable), b = /* @__PURE__ */ N(() => r().focusable), P = /* @__PURE__ */ N(() => _t(r().hidden, !1)), $ = /* @__PURE__ */ N(() => _t(r().dragging, !1)), A = /* @__PURE__ */ N(() => _t(r().style, "")), I = /* @__PURE__ */ N(() => r().class), V = /* @__PURE__ */ N(() => _t(r().type, "default")), Z = /* @__PURE__ */ N(() => r().parentId), z = /* @__PURE__ */ N(() => r().sourcePosition), S = /* @__PURE__ */ N(() => r().targetPosition), T = /* @__PURE__ */ N(() => _t(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ N(() => _t(r().measured, () => ({ width: 0, height: 0 }), !0).height), C = /* @__PURE__ */ N(() => r().initialWidth), O = /* @__PURE__ */ N(() => r().initialHeight), H = /* @__PURE__ */ N(() => r().width), K = /* @__PURE__ */ N(() => r().height), W = /* @__PURE__ */ N(() => r().dragHandle), M = /* @__PURE__ */ N(() => _t(r().internals.z, 0)), j = /* @__PURE__ */ N(() => r().internals.positionAbsolute.x), X = /* @__PURE__ */ N(() => r().internals.positionAbsolute.y), Q = /* @__PURE__ */ N(() => r().internals.userNode), { id: q } = r(), F = /* @__PURE__ */ N(() => u(w) ?? n().nodesDraggable), U = /* @__PURE__ */ N(() => u(_) ?? n().elementsSelectable), G = /* @__PURE__ */ N(() => u(E) ?? n().nodesConnectable), ne = /* @__PURE__ */ N(() => _u(r())), ee = /* @__PURE__ */ N(() => !!r().internals.handleBounds), ye = /* @__PURE__ */ N(() => u(ne) && u(ee)), oe = /* @__PURE__ */ N(() => u(b) ?? n().nodesFocusable);
  function le(ve) {
    return n().parentLookup.has(ve);
  }
  let re = /* @__PURE__ */ N(() => le(q)), fe = /* @__PURE__ */ Ne(null), he = null, we = u(V), ce = u(z), _e = u(S), Ae = /* @__PURE__ */ N(() => n().nodeTypes[u(V)] ?? ha), Y = /* @__PURE__ */ N(() => n().ariaLabelConfig);
  Dr("svelteflow__node_connectable", {
    get value() {
      return u(G);
    }
  }), Dr("svelteflow__node_id", q);
  let Oe = /* @__PURE__ */ N(() => {
    const ve = u(T) === void 0 ? u(H) ?? u(C) : u(H), qe = u(x) === void 0 ? u(K) ?? u(O) : u(K);
    if (!(ve === void 0 && qe === void 0 && u(A) === void 0))
      return `${u(A)};${ve ? `width:${mn(ve)};` : ""}${qe ? `height:${mn(qe)};` : ""}`;
  });
  Xe(() => {
    (u(V) !== we || u(z) !== ce || u(S) !== _e) && u(fe) !== null && requestAnimationFrame(() => {
      u(fe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[q, { id: q, nodeElement: u(fe), force: !0 }]]));
    }), we = u(V), ce = u(z), _e = u(S);
  }), Xe(() => {
    o() && (!u(ye) || u(fe) !== he) && (he && o().unobserve(he), u(fe) && o().observe(u(fe)), he = u(fe));
  }), Co(() => {
    he && o()?.unobserve(he);
  });
  function Ie(ve) {
    u(U) && (!n().selectNodesOnDrag || !u(F) || n().nodeDragThreshold > 0) && n().handleNodeSelection(q), s()?.({ node: u(Q), event: ve });
  }
  function Ve(ve) {
    if (!(Cu(ve) || n().disableKeyboardA11y))
      if (gu.includes(ve.key) && u(U)) {
        const qe = ve.key === "Escape";
        n().handleNodeSelection(q, qe, u(fe));
      } else u(F) && r().selected && Object.prototype.hasOwnProperty.call(pi, ve.key) && (ve.preventDefault(), n(
        n().ariaLiveMessage = u(Y)["node.a11yDescription.ariaLiveMessage"]({
          direction: ve.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(pi[ve.key], ve.shiftKey ? 4 : 1));
  }
  const at = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(fe)?.matches(":focus-visible"))
      return;
    const { width: ve, height: qe, viewport: Me } = n();
    aa(/* @__PURE__ */ new Map([[q, r()]]), { x: 0, y: 0, width: ve, height: qe }, [Me.x, Me.y, Me.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: Me.zoom });
  };
  var tt = {
    get store() {
      return n();
    },
    set store(ve) {
      n(ve), v();
    },
    get node() {
      return r();
    },
    set node(ve) {
      r(ve), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ve) {
      o(ve), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ve) {
      i(ve), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ve) {
      s(ve), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ve) {
      a(ve), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ve) {
      l(ve), v();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(ve) {
      c(ve), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ve) {
      d(ve), v();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(ve) {
      h(ve), v();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ve) {
      f(ve), v();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(ve) {
      g(ve), v();
    }
  }, Rt = Se(), nt = ie(Rt);
  {
    var Ot = (ve) => {
      var qe = U0();
      et(qe, () => ({
        "data-id": q,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(V)}`,
          u(I)
        ],
        style: u(Oe),
        onclick: Ie,
        onpointerenter: d() ? (Ee) => d()({ node: u(Q), event: Ee }) : void 0,
        onpointerleave: h() ? (Ee) => h()({ node: u(Q), event: Ee }) : void 0,
        onpointermove: f() ? (Ee) => f()({ node: u(Q), event: Ee }) : void 0,
        oncontextmenu: g() ? (Ee) => g()({ node: u(Q), event: Ee }) : void 0,
        onkeydown: u(oe) ? Ve : void 0,
        onfocus: u(oe) ? at : void 0,
        tabIndex: u(oe) ? 0 : void 0,
        role: r().ariaRole ?? (u(oe) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${ed}-${n().flowId}`,
        ...r().domAttributes,
        [Kn]: {
          dragging: u($),
          selected: u(y),
          draggable: u(F),
          connectable: u(G),
          selectable: u(U),
          nopan: u(F),
          parent: u(re)
        },
        [fn]: {
          "z-index": u(M),
          transform: `translate(${u(j) ?? ""}px, ${u(X) ?? ""}px)`,
          visibility: u(ne) ? "visible" : "hidden"
        }
      }));
      var Me = B(qe);
      Di(Me, () => u(Ae), (Ee, rt) => {
        rt(Ee, {
          get data() {
            return u(m);
          },
          get id() {
            return q;
          },
          get selected() {
            return u(y);
          },
          get selectable() {
            return u(U);
          },
          get deletable() {
            return u(k);
          },
          get sourcePosition() {
            return u(z);
          },
          get targetPosition() {
            return u(S);
          },
          get zIndex() {
            return u(M);
          },
          get dragging() {
            return u($);
          },
          get draggable() {
            return u(F);
          },
          get dragHandle() {
            return u(W);
          },
          get parentId() {
            return u(Z);
          },
          get type() {
            return u(V);
          },
          get isConnectable() {
            return u(G);
          },
          get positionAbsoluteX() {
            return u(j);
          },
          get positionAbsoluteY() {
            return u(X);
          },
          get width() {
            return u(H);
          },
          get height() {
            return u(K);
          }
        });
      }), R(qe), gt(qe, (Ee, rt) => Ju?.(Ee, rt), () => ({
        nodeId: q,
        isSelectable: u(U),
        disabled: !u(F),
        handleSelector: u(W),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ee, rt, lt, ot) => {
          a()?.({ event: Ee, targetNode: lt, nodes: ot });
        },
        onDragStart: (Ee, rt, lt, ot) => {
          l()?.({ event: Ee, targetNode: lt, nodes: ot });
        },
        onDragStop: (Ee, rt, lt, ot) => {
          c()?.({ event: Ee, targetNode: lt, nodes: ot });
        },
        store: n()
      })), At(qe, (Ee) => J(fe, Ee), () => u(fe)), D(ve, qe);
    };
    ae(nt, (ve) => {
      u(P) || ve(Ot);
    });
  }
  return D(e, Rt), de(tt);
}
se(
  nd,
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
var J0 = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function rd(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "nodeClickDistance", 7), o = p(t, "onnodeclick", 7), i = p(t, "onnodecontextmenu", 7), s = p(t, "onnodepointerenter", 7), a = p(t, "onnodepointermove", 7), l = p(t, "onnodepointerleave", 7), c = p(t, "onnodedrag", 7), d = p(t, "onnodedragstart", 7), h = p(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((_) => {
      const k = _.target.getAttribute("data-id");
      w.set(k, { id: k, nodeElement: _.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Co(() => {
    f?.disconnect();
  });
  var g = {
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
      return c();
    },
    set onnodedrag(y) {
      c(y), v();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), v();
    },
    get onnodedragstop() {
      return h();
    },
    set onnodedragstop(y) {
      h(y), v();
    }
  }, m = J0();
  return yt(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    nd(y, {
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
      set store(_) {
        n(_);
      }
    });
  }), R(m), D(e, m), de(g);
}
se(
  rd,
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
function od(e, t) {
  ue(t, !0);
  const n = p(t, "edge", 7), r = p(t, "store", 15), o = p(t, "onedgeclick", 7), i = p(t, "onedgecontextmenu", 7), s = p(t, "onedgepointerenter", 7), a = p(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ N(() => n().source), c = /* @__PURE__ */ N(() => n().target), d = /* @__PURE__ */ N(() => n().sourceX), h = /* @__PURE__ */ N(() => n().sourceY), f = /* @__PURE__ */ N(() => n().targetX), g = /* @__PURE__ */ N(() => n().targetY), m = /* @__PURE__ */ N(() => n().sourcePosition), y = /* @__PURE__ */ N(() => n().targetPosition), w = /* @__PURE__ */ N(() => _t(n().animated, !1)), _ = /* @__PURE__ */ N(() => _t(n().selected, !1)), k = /* @__PURE__ */ N(() => n().label), E = /* @__PURE__ */ N(() => n().labelStyle), b = /* @__PURE__ */ N(() => _t(n().data, () => ({}), !0)), P = /* @__PURE__ */ N(() => n().style), $ = /* @__PURE__ */ N(() => n().interactionWidth), A = /* @__PURE__ */ N(() => _t(n().type, "default")), I = /* @__PURE__ */ N(() => n().sourceHandle), V = /* @__PURE__ */ N(() => n().targetHandle), Z = /* @__PURE__ */ N(() => n().markerStart), z = /* @__PURE__ */ N(() => n().markerEnd), S = /* @__PURE__ */ N(() => n().selectable), T = /* @__PURE__ */ N(() => n().focusable), x = /* @__PURE__ */ N(() => _t(n().deletable, !0)), C = /* @__PURE__ */ N(() => n().hidden), O = /* @__PURE__ */ N(() => n().zIndex), H = /* @__PURE__ */ N(() => n().class), K = /* @__PURE__ */ N(() => n().ariaLabel), W = null;
  const { id: M } = n();
  Dr("svelteflow__edge_id", M);
  let j = /* @__PURE__ */ N(() => u(S) ?? r().elementsSelectable), X = /* @__PURE__ */ N(() => u(T) ?? r().edgesFocusable), Q = /* @__PURE__ */ N(() => r().edgeTypes[u(A)] ?? ga), q = /* @__PURE__ */ N(() => u(Z) ? `url('#${Ps(u(Z), r().flowId)}')` : void 0), F = /* @__PURE__ */ N(() => u(z) ? `url('#${Ps(u(z), r().flowId)}')` : void 0);
  function U(re) {
    const fe = r().edgeLookup.get(M);
    fe && (u(j) && r().handleEdgeSelection(M), o()?.({ event: re, edge: fe }));
  }
  function G(re, fe) {
    const he = r().edgeLookup.get(M);
    he && fe({ event: re, edge: he });
  }
  function ne(re) {
    if (!r().disableKeyboardA11y && gu.includes(re.key) && u(j)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: he } = r();
      re.key === "Escape" ? (W?.blur(), fe({ edges: [n()] })) : he([M]);
    }
  }
  var ee = {
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
  }, ye = Se(), oe = ie(ye);
  {
    var le = (re) => {
      var fe = Q0();
      let he;
      var we = B(fe);
      et(we, () => ({
        class: ["svelte-flow__edge", u(H)],
        "data-id": M,
        onclick: U,
        oncontextmenu: i() ? (_e) => {
          G(_e, i());
        } : void 0,
        onpointerenter: s() ? (_e) => {
          G(_e, s());
        } : void 0,
        onpointerleave: a() ? (_e) => {
          G(_e, a());
        } : void 0,
        "aria-label": u(K) === null ? void 0 : u(K) ? u(K) : `Edge from ${u(l)} to ${u(c)}`,
        "aria-describedby": u(X) ? `${td}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (u(X) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(X) ? ne : void 0,
        tabindex: u(X) ? 0 : void 0,
        ...n().domAttributes,
        [Kn]: {
          animated: u(w),
          selected: u(_),
          selectable: u(j)
        }
      }));
      var ce = B(we);
      Di(ce, () => u(Q), (_e, Ae) => {
        Ae(_e, {
          get id() {
            return M;
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
            return u(m);
          },
          get targetPosition() {
            return u(y);
          },
          get animated() {
            return u(w);
          },
          get selected() {
            return u(_);
          },
          get label() {
            return u(k);
          },
          get labelStyle() {
            return u(E);
          },
          get data() {
            return u(b);
          },
          get style() {
            return u(P);
          },
          get interactionWidth() {
            return u($);
          },
          get selectable() {
            return u(j);
          },
          get deletable() {
            return u(x);
          },
          get type() {
            return u(A);
          },
          get sourceHandleId() {
            return u(I);
          },
          get targetHandleId() {
            return u(V);
          },
          get markerStart() {
            return u(q);
          },
          get markerEnd() {
            return u(F);
          }
        });
      }), R(we), At(we, (_e) => W = _e, () => W), R(fe), Ce(() => he = ht(fe, "", he, { "z-index": u(O) })), D(re, fe);
    };
    ae(oe, (re) => {
      u(C) || re(le);
    });
  }
  return D(e, ye), de(ee);
}
se(
  od,
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
Ff();
var em = /* @__PURE__ */ ge("<defs></defs>");
function id(e, t) {
  ue(t, !1);
  const n = sn();
  Vc();
  var r = em();
  yt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    sd(o, Ke(() => u(i)));
  }), R(r), D(e, r), de();
}
se(id, {}, [], [], !0);
var tm = /* @__PURE__ */ ge('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), nm = /* @__PURE__ */ ge('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), rm = /* @__PURE__ */ ge('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function sd(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "type", 7), o = p(t, "width", 7, 12.5), i = p(t, "height", 7, 12.5), s = p(t, "markerUnits", 7, "strokeWidth"), a = p(t, "orient", 7, "auto-start-reverse"), l = p(t, "color", 7, "none"), c = p(t, "strokeWidth", 7);
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
      return c();
    },
    set strokeWidth(y) {
      c(y), v();
    }
  }, h = rm(), f = B(h);
  {
    var g = (y) => {
      var w = tm();
      let _;
      Ce(() => {
        be(w, "stroke-width", c()), _ = ht(w, "", _, { stroke: l() });
      }), D(y, w);
    }, m = (y) => {
      var w = Se(), _ = ie(w);
      {
        var k = (E) => {
          var b = nm();
          let P;
          Ce(() => {
            be(b, "stroke-width", c()), P = ht(b, "", P, { stroke: l(), fill: l() });
          }), D(E, b);
        };
        ae(
          _,
          (E) => {
            r() === uo.ArrowClosed && E(k);
          },
          !0
        );
      }
      D(y, w);
    };
    ae(f, (y) => {
      r() === uo.Arrow ? y(g) : y(m, !1);
    });
  }
  return R(h), Ce(() => {
    be(h, "id", n()), be(h, "markerWidth", `${o()}`), be(h, "markerHeight", `${i()}`), be(h, "markerUnits", s()), be(h, "orient", a());
  }), D(e, h), de(d);
}
se(
  sd,
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
var om = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function ad(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "onedgeclick", 7), o = p(t, "onedgecontextmenu", 7), i = p(t, "onedgepointerenter", 7), s = p(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), v();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), v();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), v();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), v();
    }
  }, l = om(), c = B(l), d = B(c);
  id(d, {}), R(c);
  var h = L(c, 2);
  return yt(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, g) => {
    od(f, {
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
      set store(m) {
        n(m);
      }
    });
  }), R(l), D(e, l), de(a);
}
se(
  ad,
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
var im = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const sm = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function va(e, t) {
  ue(t, !0), ze(e, sm);
  let n = p(t, "x", 7, 0), r = p(t, "y", 7, 0), o = p(t, "width", 7, 0), i = p(t, "height", 7, 0), s = p(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(h = 0) {
      n(h), v();
    },
    get y() {
      return r();
    },
    set y(h = 0) {
      r(h), v();
    },
    get width() {
      return o();
    },
    set width(h = 0) {
      o(h), v();
    },
    get height() {
      return i();
    },
    set height(h = 0) {
      i(h), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(h = !0) {
      s(h), v();
    }
  }, l = Se(), c = ie(l);
  {
    var d = (h) => {
      var f = im();
      let g;
      Ce((m) => g = ht(f, "", g, m), [
        () => ({
          width: typeof o() == "string" ? o() : mn(o()),
          height: typeof i() == "string" ? i() : mn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), D(h, f);
    };
    ae(c, (h) => {
      s() && h(d);
    });
  }
  return D(e, l), de(a);
}
se(va, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var am = /* @__PURE__ */ te("<div><!></div>");
const lm = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function ld(e, t) {
  ue(t, !0), ze(e, lm);
  let n = p(t, "store", 15), r = p(t, "onnodedrag", 7), o = p(t, "onnodedragstart", 7), i = p(t, "onnodedragstop", 7), s = p(t, "onselectionclick", 7), a = p(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Ne(void 0);
  Xe(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ N(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const _ = No(n().nodeLookup, { filter: (k) => !!k.selected });
      if (_.width > 0 && _.height > 0)
        return _;
    }
    return null;
  });
  function d(_) {
    const k = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: k, event: _ });
  }
  function h(_) {
    const k = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: k, event: _ });
  }
  function f(_) {
    Object.prototype.hasOwnProperty.call(pi, _.key) && (_.preventDefault(), n().moveSelectedNodes(pi[_.key], _.shiftKey ? 4 : 1));
  }
  var g = {
    get store() {
      return n();
    },
    set store(_) {
      n(_), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(_) {
      r(_), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(_) {
      o(_), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(_) {
      i(_), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(_) {
      s(_), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(_) {
      a(_), v();
    }
  }, m = Se(), y = ie(m);
  {
    var w = (_) => {
      var k = am();
      k.__contextmenu = d, k.__click = h, k.__keydown = function(...P) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, P);
      };
      let E;
      var b = B(k);
      va(b, { width: "100%", height: "100%", x: 0, y: 0 }), R(k), gt(k, (P, $) => Ju?.(P, $), () => ({
        disabled: !1,
        store: n(),
        onDrag: (P, $, A, I) => {
          r()?.({ event: P, targetNode: null, nodes: I });
        },
        onDragStart: (P, $, A, I) => {
          o()?.({ event: P, targetNode: null, nodes: I });
        },
        onDragStop: (P, $, A, I) => {
          i()?.({ event: P, targetNode: null, nodes: I });
        }
      })), At(k, (P) => J(l, P), () => u(l)), Ce(
        (P) => {
          Dt(k, 1, In(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), be(k, "role", n().disableKeyboardA11y ? void 0 : "button"), be(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = ht(k, "", E, P);
        },
        [
          () => ({
            width: mn(u(c).width),
            height: mn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), D(_, k);
    };
    ae(y, (_) => {
      n().selectionRectMode === "nodes" && u(c) && En(u(c).x) && En(u(c).y) && _(w);
    });
  }
  return D(e, m), de(g);
}
nr(["contextmenu", "click", "keydown"]);
se(
  ld,
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
function un(e, t) {
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
      }, { modifier: f, key: g, callback: m, preventDefault: y, enabled: w } = h;
      if (w) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const k = Array.isArray(f) ? f : [f];
          let E = !1;
          for (const b of k)
            if ((Array.isArray(b) ? b : [b]).reduce(
              ($, A) => $ | cm(A),
              0
            ) === c) {
              E = !0;
              break;
            }
          if (!E) continue;
        }
        y && a.preventDefault();
        const _ = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: _ })), m?.(_);
      }
    }
  }
  let s;
  return n && (s = gs(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = gs(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function st() {
  const e = /* @__PURE__ */ N(sn), t = (i) => {
    const s = pl(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? Vp(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return zr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = ut(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && pl(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = ut(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && D0(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : xl(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : xl(u(e).edgeLookup, i),
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
    getViewport: () => ql(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = la(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const l = ol(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const h = u(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = zr(h), g = fo(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = ol(i) ? i : t(i);
      if (!c)
        return !1;
      const d = fo(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Op({
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
      return $o(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), h = vi(i, [s, a, l]);
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
    getNodesBounds: (i) => $p(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function xl(e, t) {
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
function cd(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "selectionKey", 7, "Shift"), o = p(t, "multiSelectionKey", 23, () => ar() ? "Meta" : "Control"), i = p(t, "deleteKey", 7, "Backspace"), s = p(t, "panActivationKey", 7, " "), a = p(t, "zoomActivationKey", 23, () => ar() ? "Meta" : "Control"), { deleteElements: l } = st();
  function c(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return c(w) ? w.modifier || [] : [];
  }
  function h(w) {
    return w == null ? "" : c(w) ? w.key : w;
  }
  function f(w, _) {
    return (Array.isArray(w) ? w : [w]).map((E) => {
      const b = h(E);
      return {
        key: b,
        modifier: d(E),
        enabled: b !== null,
        callback: _
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const w = n().nodes.filter((k) => k.selected), _ = n().edges.filter((k) => k.selected);
    l({ nodes: w, edges: _ });
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
    set multiSelectionKey(w = ar() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = ar() ? "Meta" : "Control") {
      a(w), v();
    }
  };
  return ii("blur", Et, g), ii("contextmenu", Et, g), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Cu(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), gt(Et, (w, _) => un?.(w, _), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), de(y);
}
se(
  cd,
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
var um = /* @__PURE__ */ ge('<path fill="none" class="svelte-flow__connection-path"></path>'), dm = /* @__PURE__ */ ge('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function ud(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "type", 7), o = p(t, "containerStyle", 7), i = p(t, "style", 7), s = p(t, "LineComponent", 7), a = /* @__PURE__ */ N(() => {
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
      case bn.Bezier: {
        const [g] = Eu(f);
        return g;
      }
      case bn.Straight: {
        const [g] = Nu(f);
        return g;
      }
      case bn.Step:
      case bn.SmoothStep: {
        const [g] = ca({
          ...f,
          borderRadius: r() === bn.Step ? 0 : void 0
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
      n(f), v();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), v();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), v();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), v();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), v();
    }
  }, c = Se(), d = ie(c);
  {
    var h = (f) => {
      var g = dm(), m = B(g), y = B(m);
      {
        var w = (k) => {
          var E = Se(), b = ie(E);
          Di(b, s, (P, $) => {
            $(P, {});
          }), D(k, E);
        }, _ = (k) => {
          var E = um();
          Ce(() => {
            be(E, "d", u(a)), ht(E, i());
          }), D(k, E);
        };
        ae(y, (k) => {
          s() ? k(w) : k(_, !1);
        });
      }
      R(m), R(g), Ce(
        (k) => {
          be(g, "width", n().width), be(g, "height", n().height), ht(g, o()), Dt(m, 0, k);
        },
        [
          () => In([
            "svelte-flow__connection",
            Np(n().connection.isValid)
          ])
        ]
      ), D(f, g);
    };
    ae(d, (f) => {
      n().connection.inProgress && f(h);
    });
  }
  return D(e, c), de(l);
}
se(
  ud,
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
function Do(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "top-right"), r = p(t, "style", 7), o = p(t, "class", 7), i = p(t, "children", 7), s = /* @__PURE__ */ Re(t, [
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
      n(h), v();
    },
    get style() {
      return r();
    },
    set style(h) {
      r(h), v();
    },
    get class() {
      return o();
    },
    set class(h) {
      o(h), v();
    },
    get children() {
      return i();
    },
    set children(h) {
      i(h), v();
    }
  }, c = fm();
  et(c, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = B(c);
  return je(d, () => i() ?? mt), R(c), D(e, c), de(l);
}
se(Do, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var hm = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function dd(e, t) {
  ue(t, !0);
  let n = p(t, "proOptions", 7), r = p(t, "position", 7, "bottom-right");
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
  }, i = Se(), s = ie(i);
  {
    var a = (l) => {
      Do(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (c, d) => {
          var h = hm();
          D(c, h);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return D(e, i), de(o);
}
se(dd, { proOptions: {}, position: {} }, [], [], !0);
var gm = /* @__PURE__ */ te("<div><!></div>");
const vm = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function fd(e, t) {
  ue(t, !0), ze(e, vm);
  let n = p(t, "width", 7), r = p(t, "height", 7), o = p(t, "colorMode", 7), i = p(t, "domNode", 15), s = p(t, "clientWidth", 15), a = p(t, "clientHeight", 15), l = p(t, "children", 7), c = p(t, "rest", 7), d = /* @__PURE__ */ N(() => c().class), h = /* @__PURE__ */ N(() => gh(c(), [
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
      return c();
    },
    set rest(w) {
      c(w), v();
    }
  }, m = gm();
  et(
    m,
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
      [fn]: w
    }),
    [
      () => ({ width: mn(n()), height: mn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var y = B(m);
  return je(y, () => l() ?? mt), R(m), At(m, (w) => i(w), () => i()), Ma(m, "clientHeight", a), Ma(m, "clientWidth", s), D(e, m), de(g);
}
se(
  fd,
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
function hd(e, t) {
  ue(t, !0);
  let n = p(t, "width", 7), r = p(t, "height", 7), o = p(t, "proOptions", 7), i = p(t, "selectionKey", 7), s = p(t, "deleteKey", 7), a = p(t, "panActivationKey", 7), l = p(t, "multiSelectionKey", 7), c = p(t, "zoomActivationKey", 7), d = p(t, "paneClickDistance", 7, 1), h = p(t, "nodeClickDistance", 7, 1), f = p(t, "onmovestart", 7), g = p(t, "onmoveend", 7), m = p(t, "onmove", 7), y = p(t, "oninit", 7), w = p(t, "onnodeclick", 7), _ = p(t, "onnodecontextmenu", 7), k = p(t, "onnodedrag", 7), E = p(t, "onnodedragstart", 7), b = p(t, "onnodedragstop", 7), P = p(t, "onnodepointerenter", 7), $ = p(t, "onnodepointermove", 7), A = p(t, "onnodepointerleave", 7), I = p(t, "onselectionclick", 7), V = p(t, "onselectioncontextmenu", 7), Z = p(t, "onselectionstart", 7), z = p(t, "onselectionend", 7), S = p(t, "onedgeclick", 7), T = p(t, "onedgecontextmenu", 7), x = p(t, "onedgepointerenter", 7), C = p(t, "onedgepointerleave", 7), O = p(t, "onpaneclick", 7), H = p(t, "onpanecontextmenu", 7), K = p(t, "panOnScrollMode", 23, () => ur.Free), W = p(t, "preventScrolling", 7, !0), M = p(t, "zoomOnScroll", 7, !0), j = p(t, "zoomOnDoubleClick", 7, !0), X = p(t, "zoomOnPinch", 7, !0), Q = p(t, "panOnScroll", 7, !1), q = p(t, "panOnScrollSpeed", 7, 0.5), F = p(t, "panOnDrag", 7, !0), U = p(t, "selectionOnDrag", 7, !1), G = p(t, "connectionLineComponent", 7), ne = p(t, "connectionLineStyle", 7), ee = p(t, "connectionLineContainerStyle", 7), ye = p(t, "connectionLineType", 23, () => bn.Bezier), oe = p(t, "attributionPosition", 7), le = p(t, "children", 7), re = p(t, "nodes", 31, () => Yt([])), fe = p(t, "edges", 31, () => Yt([])), he = p(t, "viewport", 31, () => {
  }), we = /* @__PURE__ */ Re(t, [
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
  ]), ce = qu({
    props: we,
    width: n(),
    height: r(),
    get nodes() {
      return re();
    },
    set nodes(Y) {
      re(Y);
    },
    get edges() {
      return fe();
    },
    set edges(Y) {
      fe(Y);
    },
    get viewport() {
      return he();
    },
    set viewport(Y) {
      he(Y);
    }
  });
  const _e = jn(mi);
  _e && _e.setStore && _e.setStore(ce), Dr(mi, {
    provider: !1,
    getStore() {
      return ce;
    }
  }), Xe(() => {
    const Y = { nodes: ce.selectedNodes, edges: ce.selectedEdges };
    ut(() => t.onselectionchange)?.(Y);
    for (const We of ce.selectionChangeHandlers.values())
      We(Y);
  }), Co(() => {
    ce.reset();
  });
  var Ae = {
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
      return c();
    },
    set zoomActivationKey(Y) {
      c(Y), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Y = 1) {
      d(Y), v();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(Y = 1) {
      h(Y), v();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(Y) {
      f(Y), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(Y) {
      g(Y), v();
    },
    get onmove() {
      return m();
    },
    set onmove(Y) {
      m(Y), v();
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
      return _();
    },
    set onnodecontextmenu(Y) {
      _(Y), v();
    },
    get onnodedrag() {
      return k();
    },
    set onnodedrag(Y) {
      k(Y), v();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(Y) {
      E(Y), v();
    },
    get onnodedragstop() {
      return b();
    },
    set onnodedragstop(Y) {
      b(Y), v();
    },
    get onnodepointerenter() {
      return P();
    },
    set onnodepointerenter(Y) {
      P(Y), v();
    },
    get onnodepointermove() {
      return $();
    },
    set onnodepointermove(Y) {
      $(Y), v();
    },
    get onnodepointerleave() {
      return A();
    },
    set onnodepointerleave(Y) {
      A(Y), v();
    },
    get onselectionclick() {
      return I();
    },
    set onselectionclick(Y) {
      I(Y), v();
    },
    get onselectioncontextmenu() {
      return V();
    },
    set onselectioncontextmenu(Y) {
      V(Y), v();
    },
    get onselectionstart() {
      return Z();
    },
    set onselectionstart(Y) {
      Z(Y), v();
    },
    get onselectionend() {
      return z();
    },
    set onselectionend(Y) {
      z(Y), v();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(Y) {
      S(Y), v();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(Y) {
      T(Y), v();
    },
    get onedgepointerenter() {
      return x();
    },
    set onedgepointerenter(Y) {
      x(Y), v();
    },
    get onedgepointerleave() {
      return C();
    },
    set onedgepointerleave(Y) {
      C(Y), v();
    },
    get onpaneclick() {
      return O();
    },
    set onpaneclick(Y) {
      O(Y), v();
    },
    get onpanecontextmenu() {
      return H();
    },
    set onpanecontextmenu(Y) {
      H(Y), v();
    },
    get panOnScrollMode() {
      return K();
    },
    set panOnScrollMode(Y = ur.Free) {
      K(Y), v();
    },
    get preventScrolling() {
      return W();
    },
    set preventScrolling(Y = !0) {
      W(Y), v();
    },
    get zoomOnScroll() {
      return M();
    },
    set zoomOnScroll(Y = !0) {
      M(Y), v();
    },
    get zoomOnDoubleClick() {
      return j();
    },
    set zoomOnDoubleClick(Y = !0) {
      j(Y), v();
    },
    get zoomOnPinch() {
      return X();
    },
    set zoomOnPinch(Y = !0) {
      X(Y), v();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(Y = !1) {
      Q(Y), v();
    },
    get panOnScrollSpeed() {
      return q();
    },
    set panOnScrollSpeed(Y = 0.5) {
      q(Y), v();
    },
    get panOnDrag() {
      return F();
    },
    set panOnDrag(Y = !0) {
      F(Y), v();
    },
    get selectionOnDrag() {
      return U();
    },
    set selectionOnDrag(Y = !1) {
      U(Y), v();
    },
    get connectionLineComponent() {
      return G();
    },
    set connectionLineComponent(Y) {
      G(Y), v();
    },
    get connectionLineStyle() {
      return ne();
    },
    set connectionLineStyle(Y) {
      ne(Y), v();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(Y) {
      ee(Y), v();
    },
    get connectionLineType() {
      return ye();
    },
    set connectionLineType(Y = bn.Bezier) {
      ye(Y), v();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(Y) {
      oe(Y), v();
    },
    get children() {
      return le();
    },
    set children(Y) {
      le(Y), v();
    },
    get nodes() {
      return re();
    },
    set nodes(Y = []) {
      re(Y), v();
    },
    get edges() {
      return fe();
    },
    set edges(Y = []) {
      fe(Y), v();
    },
    get viewport() {
      return he();
    },
    set viewport(Y = void 0) {
      he(Y), v();
    }
  };
  return fd(e, {
    get colorMode() {
      return ce.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return we;
    },
    get domNode() {
      return ce.domNode;
    },
    set domNode(Y) {
      ce.domNode = Y;
    },
    get clientWidth() {
      return ce.width;
    },
    set clientWidth(Y) {
      ce.width = Y;
    },
    get clientHeight() {
      return ce.height;
    },
    set clientHeight(Y) {
      ce.height = Y;
    },
    children: (Y, We) => {
      var Oe = ym(), Ie = ie(Oe);
      cd(Ie, {
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
          return ce;
        },
        set store(nt) {
          ce = nt;
        }
      });
      var Ve = L(Ie, 2);
      ju(Ve, {
        get panOnScrollMode() {
          return K();
        },
        get preventScrolling() {
          return W();
        },
        get zoomOnScroll() {
          return M();
        },
        get zoomOnDoubleClick() {
          return j();
        },
        get zoomOnPinch() {
          return X();
        },
        get panOnScroll() {
          return Q();
        },
        get panOnScrollSpeed() {
          return q();
        },
        get panOnDrag() {
          return F();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return U();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return m();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return y();
        },
        get store() {
          return ce;
        },
        set store(nt) {
          ce = nt;
        },
        children: (nt, Ot) => {
          Gu(nt, {
            get onpaneclick() {
              return O();
            },
            get onpanecontextmenu() {
              return H();
            },
            get onselectionstart() {
              return Z();
            },
            get onselectionend() {
              return z();
            },
            get panOnDrag() {
              return F();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return U();
            },
            get store() {
              return ce;
            },
            set store(ve) {
              ce = ve;
            },
            children: (ve, qe) => {
              var Me = mm(), Ee = ie(Me);
              Uu(Ee, {
                get store() {
                  return ce;
                },
                set store(lt) {
                  ce = lt;
                },
                children: (lt, ot) => {
                  var Fn = pm(), ln = L(ie(Fn), 2);
                  ad(ln, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return T();
                    },
                    get onedgepointerenter() {
                      return x();
                    },
                    get onedgepointerleave() {
                      return C();
                    },
                    get store() {
                      return ce;
                    },
                    set store(wt) {
                      ce = wt;
                    }
                  });
                  var cn = L(ln, 4);
                  ud(cn, {
                    get type() {
                      return ye();
                    },
                    get LineComponent() {
                      return G();
                    },
                    get containerStyle() {
                      return ee();
                    },
                    get style() {
                      return ne();
                    },
                    get store() {
                      return ce;
                    },
                    set store(wt) {
                      ce = wt;
                    }
                  });
                  var kt = L(cn, 2);
                  rd(kt, {
                    get nodeClickDistance() {
                      return h();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return _();
                    },
                    get onnodepointerenter() {
                      return P();
                    },
                    get onnodepointermove() {
                      return $();
                    },
                    get onnodepointerleave() {
                      return A();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return ce;
                    },
                    set store(wt) {
                      ce = wt;
                    }
                  });
                  var Mt = L(kt, 2);
                  ld(Mt, {
                    get onselectionclick() {
                      return I();
                    },
                    get onselectioncontextmenu() {
                      return V();
                    },
                    get onnodedrag() {
                      return k();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return b();
                    },
                    get store() {
                      return ce;
                    },
                    set store(wt) {
                      ce = wt;
                    }
                  }), pe(2), D(lt, Fn);
                },
                $$slots: { default: !0 }
              });
              var rt = L(Ee, 2);
              {
                let lt = /* @__PURE__ */ N(() => !!(ce.selectionRect && ce.selectionRectMode === "user")), ot = /* @__PURE__ */ N(() => ce.selectionRect?.width), Fn = /* @__PURE__ */ N(() => ce.selectionRect?.height), ln = /* @__PURE__ */ N(() => ce.selectionRect?.x), cn = /* @__PURE__ */ N(() => ce.selectionRect?.y);
                va(rt, {
                  get isVisible() {
                    return u(lt);
                  },
                  get width() {
                    return u(ot);
                  },
                  get height() {
                    return u(Fn);
                  },
                  get x() {
                    return u(ln);
                  },
                  get y() {
                    return u(cn);
                  }
                });
              }
              D(ve, Me);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var at = L(Ve, 2);
      dd(at, {
        get proOptions() {
          return o();
        },
        get position() {
          return oe();
        }
      });
      var tt = L(at, 2);
      Qu(tt, {
        get store() {
          return ce;
        }
      });
      var Rt = L(tt, 2);
      je(Rt, () => le() ?? mt), D(Y, Oe);
    },
    $$slots: { default: !0 }
  }), de(Ae);
}
se(
  hd,
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
function gd(e, t) {
  ue(t, !0);
  let n = p(t, "children", 7), r = /* @__PURE__ */ Ne(qu({ props: {}, nodes: [], edges: [] }));
  Dr(mi, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (a) => {
      J(r, a);
    }
  }), Co(() => {
    u(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    }
  }, i = Se(), s = ie(i);
  return je(s, () => n() ?? mt), D(e, i), de(o);
}
se(gd, { children: {} }, [], [], !0);
var wm = /* @__PURE__ */ te("<button><!></button>");
function Jr(e, t) {
  ue(t, !0);
  let n = p(t, "class", 7), r = p(t, "bgColor", 7), o = p(t, "bgColorHover", 7), i = p(t, "color", 7), s = p(t, "colorHover", 7), a = p(t, "borderColor", 7), l = p(t, "onclick", 7), c = p(t, "children", 7), d = /* @__PURE__ */ Re(t, [
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
      n(m), v();
    },
    get bgColor() {
      return r();
    },
    set bgColor(m) {
      r(m), v();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(m) {
      o(m), v();
    },
    get color() {
      return i();
    },
    set color(m) {
      i(m), v();
    },
    get colorHover() {
      return s();
    },
    set colorHover(m) {
      s(m), v();
    },
    get borderColor() {
      return a();
    },
    set borderColor(m) {
      a(m), v();
    },
    get onclick() {
      return l();
    },
    set onclick(m) {
      l(m), v();
    },
    get children() {
      return c();
    },
    set children(m) {
      c(m), v();
    }
  }, f = wm();
  et(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [fn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var g = B(f);
  return je(g, () => c() ?? mt), R(f), D(e, f), de(h);
}
se(
  Jr,
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
var _m = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function vd(e) {
  var t = _m();
  D(e, t);
}
se(vd, {}, [], [], !0);
var xm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function pd(e) {
  var t = xm();
  D(e, t);
}
se(pd, {}, [], [], !0);
var bm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function md(e) {
  var t = bm();
  D(e, t);
}
se(md, {}, [], [], !0);
var Cm = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function yd(e) {
  var t = Cm();
  D(e, t);
}
se(yd, {}, [], [], !0);
var km = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function wd(e) {
  var t = km();
  D(e, t);
}
se(wd, {}, [], [], !0);
var Em = /* @__PURE__ */ te("<!> <!>", 1), Sm = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function _d(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "bottom-left"), r = p(t, "orientation", 7, "vertical"), o = p(t, "showZoom", 7, !0), i = p(t, "showFitView", 7, !0), s = p(t, "showLock", 7, !0), a = p(t, "style", 7), l = p(t, "class", 7), c = p(t, "buttonBgColor", 7), d = p(t, "buttonBgColorHover", 7), h = p(t, "buttonColor", 7), f = p(t, "buttonColorHover", 7), g = p(t, "buttonBorderColor", 7), m = p(t, "fitViewOptions", 7), y = p(t, "children", 7), w = p(t, "before", 7), _ = p(t, "after", 7), k = /* @__PURE__ */ Re(t, [
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
  ]), E = /* @__PURE__ */ N(sn);
  const b = {
    bgColor: c(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: g()
  };
  let P = /* @__PURE__ */ N(() => u(E).nodesDraggable || u(E).nodesConnectable || u(E).elementsSelectable), $ = /* @__PURE__ */ N(() => u(E).viewport.zoom <= u(E).minZoom), A = /* @__PURE__ */ N(() => u(E).viewport.zoom >= u(E).maxZoom), I = /* @__PURE__ */ N(() => u(E).ariaLabelConfig), V = /* @__PURE__ */ N(() => r() === "horizontal" ? "horizontal" : "vertical");
  const Z = () => {
    u(E).zoomIn();
  }, z = () => {
    u(E).zoomOut();
  }, S = () => {
    u(E).fitView(m());
  }, T = () => {
    let C = !u(P);
    u(E).nodesDraggable = C, u(E).nodesConnectable = C, u(E).elementsSelectable = C;
  };
  var x = {
    get position() {
      return n();
    },
    set position(C = "bottom-left") {
      n(C), v();
    },
    get orientation() {
      return r();
    },
    set orientation(C = "vertical") {
      r(C), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(C = !0) {
      o(C), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(C = !0) {
      i(C), v();
    },
    get showLock() {
      return s();
    },
    set showLock(C = !0) {
      s(C), v();
    },
    get style() {
      return a();
    },
    set style(C) {
      a(C), v();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), v();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(C) {
      c(C), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(C) {
      d(C), v();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(C) {
      h(C), v();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(C) {
      f(C), v();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(C) {
      g(C), v();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(C) {
      m(C), v();
    },
    get children() {
      return y();
    },
    set children(C) {
      y(C), v();
    },
    get before() {
      return w();
    },
    set before(C) {
      w(C), v();
    },
    get after() {
      return _();
    },
    set after(C) {
      _(C), v();
    }
  };
  {
    let C = /* @__PURE__ */ N(() => [
      "svelte-flow__controls",
      u(V),
      l()
    ]);
    Do(e, Ke(
      {
        get class() {
          return u(C);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return u(I)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => k,
      {
        children: (O, H) => {
          var K = Sm(), W = ie(K);
          {
            var M = (oe) => {
              var le = Se(), re = ie(le);
              je(re, w), D(oe, le);
            };
            ae(W, (oe) => {
              w() && oe(M);
            });
          }
          var j = L(W, 2);
          {
            var X = (oe) => {
              var le = Em(), re = ie(le);
              Jr(re, Ke(
                {
                  onclick: Z,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return u(I)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(I)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return u(A);
                  }
                },
                () => b,
                {
                  children: (he, we) => {
                    vd(he);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var fe = L(re, 2);
              Jr(fe, Ke(
                {
                  onclick: z,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(I)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(I)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u($);
                  }
                },
                () => b,
                {
                  children: (he, we) => {
                    pd(he);
                  },
                  $$slots: { default: !0 }
                }
              )), D(oe, le);
            };
            ae(j, (oe) => {
              o() && oe(X);
            });
          }
          var Q = L(j, 2);
          {
            var q = (oe) => {
              Jr(oe, Ke(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: S,
                  get title() {
                    return u(I)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(I)["controls.fitView.ariaLabel"];
                  }
                },
                () => b,
                {
                  children: (le, re) => {
                    md(le);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(Q, (oe) => {
              i() && oe(q);
            });
          }
          var F = L(Q, 2);
          {
            var U = (oe) => {
              Jr(oe, Ke(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: T,
                  get title() {
                    return u(I)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(I)["controls.interactive.ariaLabel"];
                  }
                },
                () => b,
                {
                  children: (le, re) => {
                    var fe = Se(), he = ie(fe);
                    {
                      var we = (_e) => {
                        wd(_e);
                      }, ce = (_e) => {
                        yd(_e);
                      };
                      ae(he, (_e) => {
                        u(P) ? _e(we) : _e(ce, !1);
                      });
                    }
                    D(le, fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(F, (oe) => {
              s() && oe(U);
            });
          }
          var G = L(F, 2);
          {
            var ne = (oe) => {
              var le = Se(), re = ie(le);
              je(re, y), D(oe, le);
            };
            ae(G, (oe) => {
              y() && oe(ne);
            });
          }
          var ee = L(G, 2);
          {
            var ye = (oe) => {
              var le = Se(), re = ie(le);
              je(re, _), D(oe, le);
            };
            ae(ee, (oe) => {
              _() && oe(ye);
            });
          }
          D(O, K);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return de(x);
}
se(
  _d,
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
var Sn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Sn || (Sn = {}));
var Nm = /* @__PURE__ */ ge("<circle></circle>");
function xd(e, t) {
  ue(t, !0);
  let n = p(t, "radius", 7), r = p(t, "class", 7);
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
  }, i = Nm();
  return Ce(() => {
    be(i, "cx", n()), be(i, "cy", n()), be(i, "r", n()), Dt(i, 0, In(["svelte-flow__background-pattern", "dots", r()]));
  }), D(e, i), de(o);
}
se(xd, { radius: {}, class: {} }, [], [], !0);
var Pm = /* @__PURE__ */ ge("<path></path>");
function bd(e, t) {
  ue(t, !0);
  let n = p(t, "lineWidth", 7), r = p(t, "dimensions", 7), o = p(t, "variant", 7), i = p(t, "class", 7);
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
  }, a = Pm();
  return Ce(() => {
    be(a, "stroke-width", n()), be(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Dt(a, 0, In(["svelte-flow__background-pattern", o(), i()]));
  }), D(e, a), de(s);
}
se(bd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const $m = {
  [Sn.Dots]: 1,
  [Sn.Lines]: 1,
  [Sn.Cross]: 6
};
var Tm = /* @__PURE__ */ ge('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Cd(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "variant", 23, () => Sn.Dots), o = p(t, "gap", 7, 20), i = p(t, "size", 7), s = p(t, "lineWidth", 7, 1), a = p(t, "bgColor", 7), l = p(t, "patternColor", 7), c = p(t, "patternClass", 7), d = p(t, "class", 7), h = /* @__PURE__ */ N(sn), f = /* @__PURE__ */ N(() => r() === Sn.Dots), g = /* @__PURE__ */ N(() => r() === Sn.Cross), m = /* @__PURE__ */ N(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ N(() => `background-pattern-${u(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ N(() => [
    u(m)[0] * u(h).viewport.zoom || 1,
    u(m)[1] * u(h).viewport.zoom || 1
  ]), _ = /* @__PURE__ */ N(() => (i() ?? $m[r()]) * u(h).viewport.zoom), k = /* @__PURE__ */ N(() => u(g) ? [u(_), u(_)] : u(w)), E = /* @__PURE__ */ N(() => u(f) ? [u(_) / 2, u(_) / 2] : [
    u(k)[0] / 2,
    u(k)[1] / 2
  ]);
  var b = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), v();
    },
    get variant() {
      return r();
    },
    set variant(S = Sn.Dots) {
      r(S), v();
    },
    get gap() {
      return o();
    },
    set gap(S = 20) {
      o(S), v();
    },
    get size() {
      return i();
    },
    set size(S) {
      i(S), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(S = 1) {
      s(S), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(S) {
      a(S), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(S) {
      l(S), v();
    },
    get patternClass() {
      return c();
    },
    set patternClass(S) {
      c(S), v();
    },
    get class() {
      return d();
    },
    set class(S) {
      d(S), v();
    }
  }, P = Tm();
  let $;
  var A = B(P), I = B(A);
  {
    var V = (S) => {
      {
        let T = /* @__PURE__ */ N(() => u(_) / 2);
        xd(S, {
          get radius() {
            return u(T);
          },
          get class() {
            return c();
          }
        });
      }
    }, Z = (S) => {
      bd(S, {
        get dimensions() {
          return u(k);
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
    ae(I, (S) => {
      u(f) ? S(V) : S(Z, !1);
    });
  }
  R(A);
  var z = L(A);
  return R(P), Ce(() => {
    Dt(P, 0, In([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), $ = ht(P, "", $, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), be(A, "id", u(y)), be(A, "x", u(h).viewport.x % u(w)[0]), be(A, "y", u(h).viewport.y % u(w)[1]), be(A, "width", u(w)[0]), be(A, "height", u(w)[1]), be(A, "patternTransform", `translate(-${u(E)[0]},-${u(E)[1]})`), be(z, "fill", `url(#${u(y)})`);
  }), D(e, P), de(b);
}
se(
  Cd,
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
var Dm = /* @__PURE__ */ ge("<rect></rect>");
function kd(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "x", 7), o = p(t, "y", 7), i = p(t, "width", 7), s = p(t, "height", 7), a = p(t, "borderRadius", 7, 5), l = p(t, "color", 7), c = p(t, "shapeRendering", 7), d = p(t, "strokeColor", 7), h = p(t, "strokeWidth", 7, 2), f = p(t, "selected", 7), g = p(t, "class", 7), m = p(t, "nodeComponent", 7);
  var y = {
    get id() {
      return n();
    },
    set id(b) {
      n(b), v();
    },
    get x() {
      return r();
    },
    set x(b) {
      r(b), v();
    },
    get y() {
      return o();
    },
    set y(b) {
      o(b), v();
    },
    get width() {
      return i();
    },
    set width(b) {
      i(b), v();
    },
    get height() {
      return s();
    },
    set height(b) {
      s(b), v();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(b = 5) {
      a(b), v();
    },
    get color() {
      return l();
    },
    set color(b) {
      l(b), v();
    },
    get shapeRendering() {
      return c();
    },
    set shapeRendering(b) {
      c(b), v();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(b) {
      d(b), v();
    },
    get strokeWidth() {
      return h();
    },
    set strokeWidth(b = 2) {
      h(b), v();
    },
    get selected() {
      return f();
    },
    set selected(b) {
      f(b), v();
    },
    get class() {
      return g();
    },
    set class(b) {
      g(b), v();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(b) {
      m(b), v();
    }
  }, w = Se(), _ = ie(w);
  {
    var k = (b) => {
      const P = /* @__PURE__ */ N(m);
      var $ = Se(), A = ie($);
      Di(A, () => u(P), (I, V) => {
        V(I, {
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
            return g();
          },
          get color() {
            return l();
          },
          get shapeRendering() {
            return c();
          },
          get strokeColor() {
            return d();
          },
          get strokeWidth() {
            return h();
          },
          get selected() {
            return f();
          }
        });
      }), D(b, $);
    }, E = (b) => {
      var P = Dm();
      let $, A;
      Ce(() => {
        $ = Dt(P, 0, In(["svelte-flow__minimap-node", g()]), null, $, { selected: f() }), be(P, "x", r()), be(P, "y", o()), be(P, "rx", a()), be(P, "ry", a()), be(P, "width", i()), be(P, "height", s()), be(P, "shape-rendering", c()), A = ht(P, "", A, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), D(b, P);
    };
    ae(_, (b) => {
      m() ? b(k) : b(E, !1);
    });
  }
  return D(e, w), de(y);
}
se(
  kd,
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
function Am(e, t) {
  const n = y0({
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
const rs = (e) => e instanceof Function ? e : () => e;
var Om = /* @__PURE__ */ ge("<title> </title>"), Mm = /* @__PURE__ */ ge('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Hm = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Ed(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "bottom-right"), r = p(t, "ariaLabel", 7), o = p(t, "nodeStrokeColor", 7, "transparent"), i = p(t, "nodeColor", 7), s = p(t, "nodeClass", 7, ""), a = p(t, "nodeBorderRadius", 7, 5), l = p(t, "nodeStrokeWidth", 7, 2), c = p(t, "nodeComponent", 7), d = p(t, "bgColor", 7), h = p(t, "maskColor", 7), f = p(t, "maskStrokeColor", 7), g = p(t, "maskStrokeWidth", 7), m = p(t, "width", 7, 200), y = p(t, "height", 7, 150), w = p(t, "pannable", 7, !0), _ = p(t, "zoomable", 7, !0), k = p(t, "inversePan", 7), E = p(t, "zoomStep", 7), b = p(t, "class", 7), P = /* @__PURE__ */ Re(t, [
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
  ]), $ = /* @__PURE__ */ N(sn), A = /* @__PURE__ */ N(() => u($).ariaLabelConfig);
  const I = i() === void 0 ? void 0 : rs(i()), V = rs(o()), Z = rs(s()), z = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ N(() => `svelte-flow__minimap-desc-${u($).flowId}`), T = /* @__PURE__ */ N(() => ({
    x: -u($).viewport.x / u($).viewport.zoom,
    y: -u($).viewport.y / u($).viewport.zoom,
    width: u($).width / u($).viewport.zoom,
    height: u($).height / u($).viewport.zoom
  })), x = /* @__PURE__ */ N(() => wu(No(u($).nodeLookup, { filter: (ee) => !ee.hidden }), u(T))), C = /* @__PURE__ */ N(() => u(x).width / m()), O = /* @__PURE__ */ N(() => u(x).height / y()), H = /* @__PURE__ */ N(() => Math.max(u(C), u(O))), K = /* @__PURE__ */ N(() => u(H) * m()), W = /* @__PURE__ */ N(() => u(H) * y()), M = /* @__PURE__ */ N(() => 5 * u(H)), j = /* @__PURE__ */ N(() => u(x).x - (u(K) - u(x).width) / 2 - u(M)), X = /* @__PURE__ */ N(() => u(x).y - (u(W) - u(x).height) / 2 - u(M)), Q = /* @__PURE__ */ N(() => u(K) + u(M) * 2), q = /* @__PURE__ */ N(() => u(W) + u(M) * 2);
  const F = () => u(H);
  var U = {
    get position() {
      return n();
    },
    set position(ee = "bottom-right") {
      n(ee), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ee) {
      r(ee), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ee = "transparent") {
      o(ee), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ee) {
      i(ee), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ee = "") {
      s(ee), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ee = 5) {
      a(ee), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ee = 2) {
      l(ee), v();
    },
    get nodeComponent() {
      return c();
    },
    set nodeComponent(ee) {
      c(ee), v();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ee) {
      d(ee), v();
    },
    get maskColor() {
      return h();
    },
    set maskColor(ee) {
      h(ee), v();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(ee) {
      f(ee), v();
    },
    get maskStrokeWidth() {
      return g();
    },
    set maskStrokeWidth(ee) {
      g(ee), v();
    },
    get width() {
      return m();
    },
    set width(ee = 200) {
      m(ee), v();
    },
    get height() {
      return y();
    },
    set height(ee = 150) {
      y(ee), v();
    },
    get pannable() {
      return w();
    },
    set pannable(ee = !0) {
      w(ee), v();
    },
    get zoomable() {
      return _();
    },
    set zoomable(ee = !0) {
      _(ee), v();
    },
    get inversePan() {
      return k();
    },
    set inversePan(ee) {
      k(ee), v();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(ee) {
      E(ee), v();
    },
    get class() {
      return b();
    },
    set class(ee) {
      b(ee), v();
    }
  }, G = Hm(), ne = ie(G);
  {
    let ee = /* @__PURE__ */ N(() => ["svelte-flow__minimap", b()]);
    Ph(ne, () => ({ "--xy-minimap-background-color-props": d() })), Do(ne.lastChild, Ke(
      {
        get position() {
          return n();
        },
        get class() {
          return u(ee);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => P,
      {
        children: (ye, oe) => {
          var le = Se(), re = ie(le);
          {
            var fe = (he) => {
              var we = Mm();
              let ce;
              var _e = B(we);
              {
                var Ae = (Oe) => {
                  var Ie = Om(), Ve = B(Ie, !0);
                  R(Ie), Ce(() => {
                    be(Ie, "id", u(S)), Fe(Ve, r() ?? u(A)["minimap.ariaLabel"]);
                  }), D(Oe, Ie);
                };
                ae(_e, (Oe) => {
                  (r() ?? u(A)["minimap.ariaLabel"]) && Oe(Ae);
                });
              }
              var Y = L(_e);
              yt(Y, 17, () => u($).nodes, (Oe) => Oe.id, (Oe, Ie) => {
                const Ve = /* @__PURE__ */ N(() => u($).nodeLookup.get(u(Ie).id));
                var at = Se(), tt = ie(at);
                {
                  var Rt = (nt) => {
                    const Ot = /* @__PURE__ */ N(() => rr(u(Ve)));
                    {
                      let ve = /* @__PURE__ */ N(() => I?.(u(Ve))), qe = /* @__PURE__ */ N(() => V(u(Ve))), Me = /* @__PURE__ */ N(() => Z(u(Ve)));
                      kd(nt, Ke(
                        {
                          get id() {
                            return u(Ve).id;
                          },
                          get x() {
                            return u(Ve).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(Ve).internals.positionAbsolute.y;
                          }
                        },
                        () => u(Ot),
                        {
                          get selected() {
                            return u(Ve).selected;
                          },
                          get nodeComponent() {
                            return c();
                          },
                          get color() {
                            return u(ve);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return u(qe);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return z;
                          },
                          get class() {
                            return u(Me);
                          }
                        }
                      ));
                    }
                  };
                  ae(tt, (nt) => {
                    u(Ve) && _u(u(Ve)) && !u(Ve).hidden && nt(Rt);
                  });
                }
                D(Oe, at);
              });
              var We = L(Y);
              R(we), gt(we, (Oe, Ie) => Am?.(Oe, Ie), () => ({
                store: u($),
                panZoom: u($).panZoom,
                getViewScale: F,
                translateExtent: u($).translateExtent,
                width: u($).width,
                height: u($).height,
                inversePan: k(),
                zoomStep: E(),
                pannable: w(),
                zoomable: _()
              })), Ce(() => {
                be(we, "width", m()), be(we, "height", y()), be(we, "viewBox", `${u(j) ?? ""} ${u(X) ?? ""} ${u(Q) ?? ""} ${u(q) ?? ""}`), be(we, "aria-labelledby", u(S)), ce = ht(we, "", ce, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": g() ? g() * u(H) : void 0
                }), be(We, "d", `M${u(j) - u(M)},${u(X) - u(M)}h${u(Q) + u(M) * 2}v${u(q) + u(M) * 2}h${-u(Q) - u(M) * 2}z
      M${u(T).x ?? ""},${u(T).y ?? ""}h${u(T).width ?? ""}v${u(T).height ?? ""}h${-u(T).width}z`);
              }), D(he, we);
            };
            ae(re, (he) => {
              u($).panZoom && he(fe);
            });
          }
          D(ye, le);
        },
        $$slots: { default: !0 }
      }
    )), R(ne);
  }
  return D(e, G), de(U);
}
se(
  Ed,
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
function Sd(e, t) {
  ue(t, !0);
  let n = p(t, "nodeId", 7), r = p(t, "position", 23, () => me.Top), o = p(t, "align", 7, "center"), i = p(t, "offset", 7, 10), s = p(t, "isVisible", 7), a = p(t, "children", 7), l = /* @__PURE__ */ Re(t, [
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
  const c = sn(), { getNodesBounds: d } = st(), h = jn("svelteflow__node_id");
  let f = /* @__PURE__ */ N(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    ($, A) => {
      const I = c.nodeLookup.get(A);
      return I && $.push(I), $;
    },
    []
  ))), g = /* @__PURE__ */ N(() => {
    const P = d(u(f));
    return P ? Up(P, c.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ N(() => u(f).length === 0 ? 1 : Math.max(...u(f).map((P) => (P.internals.z || 5) + 1))), y = /* @__PURE__ */ N(() => c.nodes.filter((P) => P.selected).length), w = /* @__PURE__ */ N(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(y) === 1);
  var _ = {
    get nodeId() {
      return n();
    },
    set nodeId(P) {
      n(P), v();
    },
    get position() {
      return r();
    },
    set position(P = me.Top) {
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
  }, k = Se(), E = ie(k);
  {
    var b = (P) => {
      var $ = Lm();
      et(
        $,
        (I, V) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": I,
          ...l,
          [fn]: V
        }),
        [
          () => u(f).reduce((I, V) => `${I}${V.id} `, "").trim(),
          () => ({
            display: Bu().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(m)
          })
        ]
      );
      var A = B($);
      je(A, () => a() ?? mt), R($), gt($, (I, V) => Ru?.(I, V), () => "root"), D(P, $);
    };
    ae(E, (P) => {
      c.domNode && u(w) && u(f) && P(b);
    });
  }
  return D(e, k), de(_);
}
se(
  Sd,
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
function zn(e) {
  const t = /* @__PURE__ */ N(sn), n = /* @__PURE__ */ N(() => u(t).nodes), r = /* @__PURE__ */ N(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ N(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const h = u(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!c0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const bl = "tinyflow-component", Vm = [
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
], pa = [
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
class T_ {
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
    const t = document.createElement(bl);
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
    const n = document.createElement(bl);
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
  let e = /* @__PURE__ */ Ne([]), t = /* @__PURE__ */ Ne([]), n = /* @__PURE__ */ Ne({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      J(e, r), J(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      J(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      J(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      J(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      J(e, [...u(e), r]);
    },
    removeNode: (r) => {
      J(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      J(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      J(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      J(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      J(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      J(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      J(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      J(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      J(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      J(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, He = Bm();
var Fm = /* @__PURE__ */ te("<button><!></button>");
function Te(e, t) {
  ue(t, !0);
  const n = p(t, "children", 7), r = p(t, "primary", 7), o = /* @__PURE__ */ Re(t, [
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
  }, s = Fm();
  et(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return je(a, () => n() ?? mt), R(s), D(e, s), de(i);
}
se(Te, { children: {}, primary: {} }, [], [], !0);
var Km = /* @__PURE__ */ te("<input/>");
function Nd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Km();
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
    void 0,
    !0
  ), D(e, r), de();
}
se(Nd, {}, [], [], !0);
var Zm = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Ym = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Pd(e, t) {
  ue(t, !0), ze(e, Ym);
  const n = p(t, "placeholder", 7), r = p(t, "label", 7), o = p(t, "value", 7), i = p(t, "buttonText", 7, "选择..."), s = p(t, "onChosen", 7), a = /* @__PURE__ */ Re(t, [
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
      n(g), v();
    },
    get label() {
      return r();
    },
    set label(g) {
      r(g), v();
    },
    get value() {
      return o();
    },
    set value(g) {
      o(g), v();
    },
    get buttonText() {
      return i();
    },
    set buttonText(g = "选择...") {
      i(g), v();
    },
    get onChosen() {
      return s();
    },
    set onChosen(g) {
      s(g), v();
    }
  }, c = Zm();
  et(
    c,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = B(c);
  Cn(d);
  var h = L(d, 2);
  Ue(h, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = L(h, 2);
  return Te(f, {
    onclick: (g) => {
      s()?.(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, m) => {
      pe();
      var y = ke();
      Ce(() => Fe(y, i())), D(g, y);
    },
    $$slots: { default: !0 }
  }), R(c), Ce(() => Wo(d, o())), D(e, c), de(l);
}
se(
  Pd,
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
function Ue(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Wm();
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
    void 0,
    !0
  ), D(e, r), de();
}
se(Ue, {}, [], [], !0);
var Xm = /* @__PURE__ */ te("<textarea></textarea>");
function Be(e, t) {
  ue(t, !0);
  const n = p(t, "value", 7), r = p(t, "height", 7), o = p(t, "autoHeight", 7, !0), i = p(t, "maxHeight", 7), s = p(t, "onHeightChange", 7), a = /* @__PURE__ */ Re(t, [
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
        const w = typeof r() == "number" ? `${r()}px` : r();
        l.style.height = w, l.style.overflowY = "hidden", s()?.(w);
        return;
      }
      l.style.height = "auto", l.style.overflowY = "hidden";
      let y = l.scrollHeight;
      if (!c) {
        const w = t.rows || 1, _ = getComputedStyle(l);
        c = parseFloat(_.fontSize) * 1.2 * w + parseFloat(_.paddingTop) + parseFloat(_.paddingBottom) + parseFloat(_.borderTopWidth);
      }
      if (y < c && (y = c), i()) {
        const w = typeof i() == "number" ? `${i()}px` : i();
        y > parseInt(w) ? (l.style.height = w, l.style.overflowY = "auto") : l.style.height = `${y}px`;
      } else
        l.style.height = `${y}px`;
      s()?.(l.style.height);
    }
  }
  Xe(() => {
    d();
  });
  var h = {
    get value() {
      return n();
    },
    set value(y) {
      n(y), v();
    },
    get height() {
      return r();
    },
    set height(y) {
      r(y), v();
    },
    get autoHeight() {
      return o();
    },
    set autoHeight(y = !0) {
      o(y), v();
    },
    get maxHeight() {
      return i();
    },
    set maxHeight(y) {
      i(y), v();
    },
    get onHeightChange() {
      return s();
    },
    set onHeightChange(y) {
      s(y), v();
    }
  }, f = Xm();
  ih(f);
  var g = (y) => {
    d(), t.oninput?.(y);
  }, m = (y) => {
    d(), t.onchange?.(y);
  };
  return et(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: g,
    onchange: m,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), At(f, (y) => l = y, () => l), D(e, f), de(h);
}
se(
  Be,
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
var qm = /* @__PURE__ */ te('<div role="button"><!></div>'), jm = /* @__PURE__ */ te("<div></div>");
function $d(e, t) {
  const n = Va(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Va(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = p(t, "items", 28, () => []), i = p(t, "onChange", 12, () => {
  }), s = p(t, "activeIndex", 12, 0);
  function a(d, h) {
    s(h), i()?.(d, h);
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
  Vc();
  var c = jm();
  return et(c, () => ({
    ...r,
    class: `tf-tabs ${qs(r), ut(() => r.class) ?? ""}`
  })), yt(c, 5, o, Or, (d, h, f) => {
    var g = qm();
    be(g, "tabindex", f), g.__click = () => a(u(h), f), g.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), a(u(h), f));
    };
    var m = B(g);
    {
      var y = (_) => {
        var k = ke();
        Ce(() => Fe(k, (u(h), ut(() => u(h).label)))), D(_, k);
      }, w = (_) => {
        var k = Se(), E = ie(k);
        je(E, () => (u(h), ut(() => u(h).label) ?? mt)), D(_, k);
      };
      ae(m, (_) => {
        u(h), ut(() => typeof u(h).label == "string") ? _(y) : _(w, !1);
      });
    }
    R(g), Ce(() => Dt(g, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), D(d, g);
  }), R(c), D(e, c), de(l);
}
nr(["click", "keydown"]);
se($d, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Gm = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Um = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), Jm = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), Qm = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), e2 = /* @__PURE__ */ te("<div></div>");
const t2 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Td(e, t) {
  ue(t, !0), ze(e, t2);
  let n = p(t, "items", 7), r = p(t, "onChange", 7), o = p(t, "activeKeys", 31, () => Yt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((c) => c !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
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
  }, a = e2();
  return yt(a, 21, n, Or, (l, c, d) => {
    var h = Qm(), f = B(h);
    be(f, "tabindex", d), f.__click = () => i(u(c)), f.__keydown = (P) => {
      (P.key === "Enter" || P.key === " ") && (P.preventDefault(), i(u(c)));
    };
    var g = B(f);
    {
      var m = (P) => {
        var $ = Gm(), A = B($);
        Zn(A, {
          get target() {
            return u(c).icon;
          }
        }), R($), D(P, $);
      };
      ae(g, (P) => {
        u(c).icon && P(m);
      });
    }
    var y = L(g, 2);
    Zn(y, {
      get target() {
        return u(c).title;
      }
    });
    var w = L(y, 2);
    R(f);
    var _ = L(f, 2);
    {
      var k = (P) => {
        var $ = Um(), A = B($);
        Zn(A, {
          get target() {
            return u(c).description;
          }
        }), R($), D(P, $);
      };
      ae(_, (P) => {
        u(c).description && P(k);
      });
    }
    var E = L(_, 2);
    {
      var b = (P) => {
        var $ = Jm(), A = B($);
        Zn(A, {
          get target() {
            return u(c).content;
          }
        }), R($), D(P, $);
      };
      ae(E, (P) => {
        o().includes(u(c).key) && P(b);
      });
    }
    R(h), Ce((P) => Dt(w, 1, `tf-collapse-item-title-arrow ${P ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), D(l, h);
  }), R(a), Ce(() => {
    ht(a, t.style), Dt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), D(e, a), de(s);
}
nr(["click", "keydown"]);
se(Td, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Zn(e, t) {
  ue(t, !0);
  let n = p(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), v();
    }
  }, o = Se(), i = ie(o);
  {
    var s = (l) => {
      var c = Se(), d = ie(c);
      je(d, () => n() ?? mt), D(l, c);
    }, a = (l) => {
      var c = Se(), d = ie(c);
      Us(d, n), D(l, c);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return D(e, o), de(r);
}
se(Zn, { target: {} }, [], [], !0);
var n2 = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), r2 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), o2 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), i2 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), s2 = /* @__PURE__ */ te("<!> <!>", 1), a2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), l2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), c2 = /* @__PURE__ */ te("<div><!></div>");
function dt(e, t) {
  ue(t, !0);
  const n = (k, E = mt) => {
    var b = Se(), P = ie(b);
    yt(P, 19, E, ($, A) => `${A}_${$.value}`, ($, A) => {
      var I = o2(), V = ie(I);
      V.__click = () => m(u(A));
      var Z = B(V), z = B(Z);
      {
        var S = (O) => {
          var H = n2();
          D(O, H);
        };
        ae(z, (O) => {
          u(A).children && u(A).children.length > 0 && O(S);
        });
      }
      R(Z);
      var T = L(Z, 2);
      Zn(T, {
        get target() {
          return u(A).label;
        }
      }), R(V);
      var x = L(V, 2);
      {
        var C = (O) => {
          var H = r2(), K = B(H);
          n(K, () => u(A).children), R(H), D(O, H);
        };
        ae(x, (O) => {
          u(A).children && u(A).children.length > 0 && (a() || c().includes(u(A).value)) && O(C);
        });
      }
      D($, I);
    }), D(k, b);
  };
  let r = p(t, "items", 7), o = p(t, "onSelect", 7), i = p(t, "value", 23, () => []), s = p(t, "defaultValue", 23, () => []), a = p(t, "expandAll", 7, !0), l = p(t, "multiple", 7, !1), c = p(t, "expandValue", 23, () => []), d = p(t, "placeholder", 7), h = /* @__PURE__ */ Re(t, [
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
    const k = [], E = (b) => {
      for (let P of b)
        i().length > 0 ? i().includes(P.value) && k.push(P) : s().includes(P.value) && k.push(P), P.children && P.children.length > 0 && E(P.children);
    };
    return E(r()), k;
  }), g;
  function m(k) {
    g?.hide(), o()?.(k);
  }
  var y = {
    get items() {
      return r();
    },
    set items(k) {
      r(k), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(k) {
      o(k), v();
    },
    get value() {
      return i();
    },
    set value(k = []) {
      i(k), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(k = []) {
      s(k), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(k = !0) {
      a(k), v();
    },
    get multiple() {
      return l();
    },
    set multiple(k = !1) {
      l(k), v();
    },
    get expandValue() {
      return c();
    },
    set expandValue(k = []) {
      c(k), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(k) {
      d(k), v();
    }
  }, w = c2();
  et(w, () => ({ ...h, class: `tf-select ${h.class ?? ""}` }));
  var _ = B(w);
  return At(
    or(_, {
      floating: (E) => {
        var b = i2(), P = B(b);
        n(P, r), R(b), D(E, b);
      },
      children: (E, b) => {
        var P = l2();
        et(P, () => ({ class: "tf-select-input nopan nodrag", ...h }));
        var $ = B(P);
        yt(
          $,
          23,
          () => u(f),
          (A, I) => `${I}_${A.value}`,
          (A, I, V) => {
            var Z = Se(), z = ie(Z);
            {
              var S = (x) => {
                var C = Se(), O = ie(C);
                {
                  var H = (K) => {
                    Zn(K, {
                      get target() {
                        return u(I).label;
                      }
                    });
                  };
                  ae(O, (K) => {
                    u(V) === 0 && K(H);
                  });
                }
                D(x, C);
              }, T = (x) => {
                var C = s2(), O = ie(C);
                Zn(O, {
                  get target() {
                    return u(I).label;
                  }
                });
                var H = L(O, 2);
                {
                  var K = (W) => {
                    var M = ke(",");
                    D(W, M);
                  };
                  ae(H, (W) => {
                    u(V) < u(f).length - 1 && W(K);
                  });
                }
                D(x, C);
              };
              ae(z, (x) => {
                l() ? x(T, !1) : x(S);
              });
            }
            D(A, Z);
          },
          (A) => {
            var I = a2(), V = B(I, !0);
            R(I), Ce(() => Fe(V, d())), D(A, I);
          }
        ), R($), pe(2), R(P), D(E, P);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => g = E,
    () => g
  ), R(w), D(e, w), de(y);
}
nr(["click"]);
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
const go = Math.min, Pr = Math.max, yi = Math.round, pn = (e) => ({
  x: e,
  y: e
}), u2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, d2 = {
  start: "end",
  end: "start"
};
function $s(e, t, n) {
  return Pr(e, go(t, n));
}
function Ao(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mr(e) {
  return e.split("-")[0];
}
function Oo(e) {
  return e.split("-")[1];
}
function Dd(e) {
  return e === "x" ? "y" : "x";
}
function ma(e) {
  return e === "y" ? "height" : "width";
}
const f2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Yn(e) {
  return f2.has(mr(e)) ? "y" : "x";
}
function ya(e) {
  return Dd(Yn(e));
}
function h2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Oo(e), o = ya(e), i = ma(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = wi(s)), [s, wi(s)];
}
function g2(e) {
  const t = wi(e);
  return [Ts(e), t, Ts(t)];
}
function Ts(e) {
  return e.replace(/start|end/g, (t) => d2[t]);
}
const Cl = ["left", "right"], kl = ["right", "left"], v2 = ["top", "bottom"], p2 = ["bottom", "top"];
function m2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? kl : Cl : t ? Cl : kl;
    case "left":
    case "right":
      return t ? v2 : p2;
    default:
      return [];
  }
}
function y2(e, t, n, r) {
  const o = Oo(e);
  let i = m2(mr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ts)))), i;
}
function wi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => u2[t]);
}
function w2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ad(e) {
  return typeof e != "number" ? w2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function _i(e) {
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
function El(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Yn(t), s = ya(t), a = ma(s), l = mr(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Oo(t)) {
    case "start":
      g[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const _2 = async (e, t, n) => {
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
  } = El(c, r, l), f = r, g = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: _
    } = a[y], {
      x: k,
      y: E,
      data: b,
      reset: P
    } = await _({
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
    d = k ?? d, h = E ?? h, g = {
      ...g,
      [w]: {
        ...g[w],
        ...b
      }
    }, P && m <= 50 && (m++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (c = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: d,
      y: h
    } = El(c, f, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Od(e, t) {
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
  } = Ao(t, e), m = Ad(g), w = a[f ? h === "floating" ? "reference" : "floating" : h], _ = _i(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), k = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = _i(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: E,
    strategy: l
  }) : k);
  return {
    top: (_.top - P.top + m.top) / b.y,
    bottom: (P.bottom - _.bottom + m.bottom) / b.y,
    left: (_.left - P.left + m.left) / b.x,
    right: (P.right - _.right + m.right) / b.x
  };
}
const x2 = (e) => ({
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
    } = Ao(e, t) || {};
    if (c == null)
      return {};
    const h = Ad(d), f = {
      x: n,
      y: r
    }, g = ya(o), m = ma(g), y = await s.getDimensions(c), w = g === "y", _ = w ? "top" : "left", k = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", b = i.reference[m] + i.reference[g] - f[g] - i.floating[m], P = f[g] - i.reference[g], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let A = $ ? $[E] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement($))) && (A = a.floating[E] || i.floating[m]);
    const I = b / 2 - P / 2, V = A / 2 - y[m] / 2 - 1, Z = go(h[_], V), z = go(h[k], V), S = Z, T = A - y[m] - z, x = A / 2 - y[m] / 2 + I, C = $s(S, x, T), O = !l.arrow && Oo(o) != null && x !== C && i.reference[m] / 2 - (x < S ? Z : z) - y[m] / 2 < 0, H = O ? x < S ? x - S : x - T : 0;
    return {
      [g]: f[g] + H,
      data: {
        [g]: C,
        centerOffset: x - C - H,
        ...O && {
          alignmentOffset: H
        }
      },
      reset: O
    };
  }
}), b2 = function(e) {
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
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...w
      } = Ao(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = mr(o), k = Yn(a), E = mr(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), P = f || (E || !y ? [wi(a)] : g2(a)), $ = m !== "none";
      !f && $ && P.push(...y2(a, y, m, b));
      const A = [a, ...P], I = await Od(t, w), V = [];
      let Z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && V.push(I[_]), h) {
        const x = h2(o, s, b);
        V.push(I[x[0]], I[x[1]]);
      }
      if (Z = [...Z, {
        placement: o,
        overflows: V
      }], !V.every((x) => x <= 0)) {
        var z, S;
        const x = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, C = A[x];
        if (C && (!(h === "alignment" ? k !== Yn(C) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((K) => Yn(K.placement) === k ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: x,
              overflows: Z
            },
            reset: {
              placement: C
            }
          };
        let O = (S = Z.filter((H) => H.overflows[0] <= 0).sort((H, K) => H.overflows[1] - K.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!O)
          switch (g) {
            case "bestFit": {
              var T;
              const H = (T = Z.filter((K) => {
                if ($) {
                  const W = Yn(K.placement);
                  return W === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((W) => W > 0).reduce((W, M) => W + M, 0)]).sort((K, W) => K[1] - W[1])[0]) == null ? void 0 : T[0];
              H && (O = H);
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
}, C2 = /* @__PURE__ */ new Set(["left", "top"]);
async function k2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = mr(n), a = Oo(n), l = Yn(n) === "y", c = C2.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = Ao(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
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
  return a && typeof m == "number" && (g = a === "end" ? m * -1 : m), l ? {
    x: g * d,
    y: f * c
  } : {
    x: f * c,
    y: g * d
  };
}
const E2 = function(e) {
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
      } = t, l = await k2(t, e);
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
}, S2 = function(e) {
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
              x: _,
              y: k
            } = w;
            return {
              x: _,
              y: k
            };
          }
        },
        ...l
      } = Ao(e, t), c = {
        x: n,
        y: r
      }, d = await Od(t, l), h = Yn(mr(o)), f = Dd(h);
      let g = c[f], m = c[h];
      if (i) {
        const w = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", k = g + d[w], E = g - d[_];
        g = $s(k, g, E);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", _ = h === "y" ? "bottom" : "right", k = m + d[w], E = m - d[_];
        m = $s(k, m, E);
      }
      const y = a.fn({
        ...t,
        [f]: g,
        [h]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [f]: i,
            [h]: s
          }
        }
      };
    }
  };
};
function Bi() {
  return typeof window < "u";
}
function Yr(e) {
  return Md(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function It(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Rn(e) {
  var t;
  return (t = (Md(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Md(e) {
  return Bi() ? e instanceof Node || e instanceof It(e).Node : !1;
}
function tn(e) {
  return Bi() ? e instanceof Element || e instanceof It(e).Element : !1;
}
function yn(e) {
  return Bi() ? e instanceof HTMLElement || e instanceof It(e).HTMLElement : !1;
}
function Sl(e) {
  return !Bi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof It(e).ShadowRoot;
}
const N2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Mo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = nn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !N2.has(o);
}
const P2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function $2(e) {
  return P2.has(Yr(e));
}
const T2 = [":popover-open", ":modal"];
function Fi(e) {
  return T2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const D2 = ["transform", "translate", "scale", "rotate", "perspective"], A2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], O2 = ["paint", "layout", "strict", "content"];
function wa(e) {
  const t = _a(), n = tn(e) ? nn(e) : e;
  return D2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || A2.some((r) => (n.willChange || "").includes(r)) || O2.some((r) => (n.contain || "").includes(r));
}
function M2(e) {
  let t = Jn(e);
  for (; yn(t) && !Br(t); ) {
    if (wa(t))
      return t;
    if (Fi(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function _a() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const H2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Br(e) {
  return H2.has(Yr(e));
}
function nn(e) {
  return It(e).getComputedStyle(e);
}
function Ki(e) {
  return tn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jn(e) {
  if (Yr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Sl(e) && e.host || // Fallback.
    Rn(e)
  );
  return Sl(t) ? t.host : t;
}
function Hd(e) {
  const t = Jn(e);
  return Br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : yn(t) && Mo(t) ? t : Hd(t);
}
function Ld(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Hd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = It(o);
  return i ? (Ds(s), t.concat(s, s.visualViewport || [], Mo(o) ? o : [], [])) : t.concat(o, Ld(o, []));
}
function Ds(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vd(e) {
  const t = nn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = yn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = yi(n) !== i || yi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Id(e) {
  return tn(e) ? e : e.contextElement;
}
function $r(e) {
  const t = Id(e);
  if (!yn(t))
    return pn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Vd(t);
  let s = (i ? yi(n.width) : n.width) / r, a = (i ? yi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const L2 = /* @__PURE__ */ pn(0);
function zd(e) {
  const t = It(e);
  return !_a() || !t.visualViewport ? L2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function V2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== It(e) ? !1 : t;
}
function vo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Id(e);
  let s = pn(1);
  t && (r ? tn(r) && (s = $r(r)) : s = $r(e));
  const a = V2(i, n, r) ? zd(i) : pn(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = It(i), g = r && tn(r) ? It(r) : r;
    let m = f, y = Ds(m);
    for (; y && r && g !== m; ) {
      const w = $r(y), _ = y.getBoundingClientRect(), k = nn(y), E = _.left + (y.clientLeft + parseFloat(k.paddingLeft)) * w.x, b = _.top + (y.clientTop + parseFloat(k.paddingTop)) * w.y;
      l *= w.x, c *= w.y, d *= w.x, h *= w.y, l += E, c += b, m = It(y), y = Ds(m);
    }
  }
  return _i({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Zi(e, t) {
  const n = Ki(e).scrollLeft;
  return t ? t.left + n : vo(Rn(e)).left + n;
}
function Rd(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Zi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function I2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Rn(r), a = t ? Fi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = pn(1);
  const d = pn(0), h = yn(r);
  if ((h || !h && !i) && ((Yr(r) !== "body" || Mo(s)) && (l = Ki(r)), yn(r))) {
    const g = vo(r);
    c = $r(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !h && !i ? Rd(s, l) : pn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function z2(e) {
  return Array.from(e.getClientRects());
}
function R2(e) {
  const t = Rn(e), n = Ki(e), r = e.ownerDocument.body, o = Pr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Zi(e);
  const a = -n.scrollTop;
  return nn(r).direction === "rtl" && (s += Pr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Nl = 25;
function B2(e, t) {
  const n = It(e), r = Rn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = _a();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Zi(r);
  if (c <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), g = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - g);
    m <= Nl && (i -= m);
  } else c <= Nl && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const F2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function K2(e, t) {
  const n = vo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = yn(e) ? $r(e) : pn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Pl(e, t, n) {
  let r;
  if (t === "viewport")
    r = B2(e, n);
  else if (t === "document")
    r = R2(Rn(e));
  else if (tn(t))
    r = K2(t, n);
  else {
    const o = zd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return _i(r);
}
function Bd(e, t) {
  const n = Jn(e);
  return n === t || !tn(n) || Br(n) ? !1 : nn(n).position === "fixed" || Bd(n, t);
}
function Z2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ld(e, []).filter((a) => tn(a) && Yr(a) !== "body"), o = null;
  const i = nn(e).position === "fixed";
  let s = i ? Jn(e) : e;
  for (; tn(s) && !Br(s); ) {
    const a = nn(s), l = wa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && F2.has(o.position) || Mo(s) && !l && Bd(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Jn(s);
  }
  return t.set(e, r), r;
}
function Y2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Fi(t) ? [] : Z2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const h = Pl(t, d, o);
    return c.top = Pr(h.top, c.top), c.right = go(h.right, c.right), c.bottom = go(h.bottom, c.bottom), c.left = Pr(h.left, c.left), c;
  }, Pl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function W2(e) {
  const {
    width: t,
    height: n
  } = Vd(e);
  return {
    width: t,
    height: n
  };
}
function X2(e, t, n) {
  const r = yn(t), o = Rn(t), i = n === "fixed", s = vo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = pn(0);
  function c() {
    l.x = Zi(o);
  }
  if (r || !r && !i)
    if ((Yr(t) !== "body" || Mo(o)) && (a = Ki(t)), r) {
      const g = vo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Rd(o, a) : pn(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function os(e) {
  return nn(e).position === "static";
}
function $l(e, t) {
  if (!yn(e) || nn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Rn(e) === n && (n = n.ownerDocument.body), n;
}
function Fd(e, t) {
  const n = It(e);
  if (Fi(e))
    return n;
  if (!yn(e)) {
    let o = Jn(e);
    for (; o && !Br(o); ) {
      if (tn(o) && !os(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = $l(e, t);
  for (; r && $2(r) && os(r); )
    r = $l(r, t);
  return r && Br(r) && os(r) && !wa(r) ? n : r || M2(e) || n;
}
const q2 = async function(e) {
  const t = this.getOffsetParent || Fd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: X2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function j2(e) {
  return nn(e).direction === "rtl";
}
const G2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: I2,
  getDocumentElement: Rn,
  getClippingRect: Y2,
  getOffsetParent: Fd,
  getElementRects: q2,
  getClientRects: z2,
  getDimensions: W2,
  getScale: $r,
  isElement: tn,
  isRTL: j2
}, U2 = E2, J2 = S2, Q2 = b2, ey = x2, ty = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: G2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return _2(e, t, {
    ...o,
    platform: i
  });
}, ny = ({
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
    const _ = document.querySelector(e);
    if (_)
      e = _;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let c;
  if (typeof n == "string") {
    const _ = document.querySelector(n);
    if (_)
      c = _;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", c.firstElementChild.before(d));
  function h() {
    ty(e, c, {
      placement: r,
      middleware: [
        U2(o),
        // 手动偏移配置
        Q2(i),
        //自动翻转
        J2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [ey({ element: d })] : []
      ]
    }).then(({ x: _, y: k, placement: E, middlewareData: b }) => {
      if (Object.assign(c.style, {
        left: `${_}px`,
        top: `${k}px`
      }), l) {
        const { x: P, y: $ } = b.arrow, A = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: P != null ? `${P}px` : "",
          top: $ != null ? `${$}px` : "",
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
  function m() {
    c.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function y(_) {
    _.stopPropagation(), f ? m() : g();
  }
  function w(_) {
    c.contains(_.target) || m();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((_) => {
    e.addEventListener(_, y);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach((_) => {
        e.removeEventListener(_, y);
      }), document.removeEventListener("click", w);
    },
    hide() {
      m();
    },
    isVisible() {
      return f;
    }
  };
};
var ry = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function or(e, t) {
  ue(t, !0);
  const n = p(t, "children", 7), r = p(t, "floating", 7), o = p(t, "placement", 7, "bottom");
  let i, s, a;
  Vn(() => (a = ny({
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
  }, d = ry(), h = B(d), f = B(h);
  je(f, n), R(h), At(h, (y) => i = y, () => i);
  var g = L(h, 2), m = B(g);
  return je(m, r), R(g), At(g, (y) => s = y, () => s), R(d), D(e, d), de(c);
}
se(or, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function De(e, t) {
  ue(t, !0);
  const n = p(t, "children", 7), r = p(t, "level", 7, 1), o = p(t, "mt", 7), i = p(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(c) {
      n(c), v();
    },
    get level() {
      return r();
    },
    set level(c = 1) {
      r(c), v();
    },
    get mt() {
      return o();
    },
    set mt(c) {
      o(c), v();
    },
    get mb() {
      return i();
    },
    set mb(c) {
      i(c), v();
    }
  }, a = Se(), l = ie(a);
  return $h(l, () => `h${r()}`, !1, (c, d) => {
    et(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = Se(), f = ie(h);
    je(f, () => n() ?? mt), D(d, h);
  }), D(e, a), de(s);
}
se(De, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var oy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const iy = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ho(e, t) {
  ue(t, !0), ze(e, iy);
  const n = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Te(e, Ke(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = oy();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), de();
}
se(Ho, {}, [], [], !0);
const sy = () => ({ deleteNode: (t) => {
  He.removeNode(t), He.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), On = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, ay = () => ({ copyNode: (t) => {
  const n = He.getNode(t);
  if (n) {
    const r = On(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    He.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), Ge = () => jn("svelteflow__node_id"), Qn = () => jn("tinyflow_options");
var ly = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), cy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), uy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), dy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), fy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), hy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), gy = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), vy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), py = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), my = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const yy = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function qt(e, t) {
  ue(t, !0), ze(e, yy);
  const n = p(t, "data", 7), r = p(t, "id", 7, ""), o = p(t, "icon", 7), i = p(t, "handle", 7), s = p(t, "children", 7), a = p(t, "allowExecute", 7, !0), l = p(t, "allowCopy", 7, !0), c = p(t, "allowDelete", 7, !0), d = p(t, "allowSetting", 7, !0), h = p(t, "allowSettingOfCondition", 7, !0), f = p(t, "showSourceHandle", 7, !0), g = p(t, "showTargetHandle", 7, !0), m = p(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: _ } = st(), k = /* @__PURE__ */ N(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = sy(), { copyNode: b } = ay(), P = Qn(), $ = () => {
    P.onNodeExecute?.(_(r()));
  };
  let A = Ge();
  var I = {
    get data() {
      return n();
    },
    set data(M) {
      n(M), v();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), v();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), v();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), v();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), v();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete(M = !0) {
      c(M), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(M = !0) {
      d(M), v();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(M = !0) {
      h(M), v();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(M = !0) {
      f(M), v();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(M = !0) {
      g(M), v();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(M) {
      m(M), v();
    }
  }, V = my(), Z = ie(V);
  {
    var z = (M) => {
      Sd(M, {
        get position() {
          return me.Top;
        },
        align: "start",
        children: (j, X) => {
          var Q = py(), q = B(Q);
          {
            var F = (le) => {
              Te(le, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (re, fe) => {
                  var he = ly();
                  D(re, he);
                },
                $$slots: { default: !0 }
              });
            };
            ae(q, (le) => {
              c() && le(F);
            });
          }
          var U = L(q, 2);
          {
            var G = (le) => {
              Te(le, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (re, fe) => {
                  var he = cy();
                  D(re, he);
                },
                $$slots: { default: !0 }
              });
            };
            ae(U, (le) => {
              l() && le(G);
            });
          }
          var ne = L(U, 2);
          {
            var ee = (le) => {
              Te(le, {
                class: "tf-node-toolbar-item",
                onclick: $,
                children: (re, fe) => {
                  var he = uy();
                  D(re, he);
                },
                $$slots: { default: !0 }
              });
            };
            ae(ne, (le) => {
              a() && le(ee);
            });
          }
          var ye = L(ne, 2);
          {
            var oe = (le) => {
              or(le, {
                placement: "bottom",
                floating: (fe) => {
                  var he = gy(), we = B(he), ce = L(B(we));
                  Ue(ce, {
                    style: "width: 100%;",
                    onchange: (Me) => {
                      const Ee = Me.target.value;
                      w(A, { title: Ee });
                    },
                    get value() {
                      return n().title;
                    }
                  }), R(we);
                  var _e = L(we, 2), Ae = L(B(_e));
                  Be(Ae, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Me) => {
                      const Ee = Me.target.value;
                      w(A, { description: Ee });
                    },
                    get value() {
                      return n().description;
                    }
                  }), R(_e);
                  var Y = L(_e, 2);
                  {
                    var We = (Me) => {
                      var Ee = dy(), rt = L(B(Ee));
                      Be(rt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (lt) => {
                          const ot = lt.target.value;
                          w(A, { condition: ot });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), R(Ee), D(Me, Ee);
                    };
                    ae(Y, (Me) => {
                      h() && Me(We);
                    });
                  }
                  var Oe = L(Y, 2), Ie = L(B(Oe), 2);
                  Cn(Ie), Ie.__change = (Me) => {
                    const Ee = Me.target.checked;
                    w(A, { async: Ee });
                  }, R(Oe);
                  var Ve = L(Oe, 2), at = L(B(Ve), 2);
                  Cn(at), at.__change = (Me) => {
                    const Ee = Me.target.checked;
                    w(A, { loopEnable: Ee });
                  }, R(Ve);
                  var tt = L(Ve, 2);
                  {
                    var Rt = (Me) => {
                      var Ee = fy(), rt = ie(Ee), lt = L(B(rt));
                      {
                        let kt = /* @__PURE__ */ N(() => n().loopIntervalMs || "1000");
                        Be(lt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Mt) => {
                            const wt = Mt.target.value;
                            w(A, { loopIntervalMs: wt });
                          },
                          get value() {
                            return u(kt);
                          }
                        });
                      }
                      R(rt);
                      var ot = L(rt, 2), Fn = L(B(ot));
                      {
                        let kt = /* @__PURE__ */ N(() => n().maxLoopCount || "0");
                        Be(Fn, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Mt) => {
                            const wt = Mt.target.value;
                            w(A, { maxLoopCount: wt });
                          },
                          get value() {
                            return u(kt);
                          }
                        });
                      }
                      R(ot);
                      var ln = L(ot, 2), cn = L(B(ln));
                      Be(cn, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (kt) => {
                          const Mt = kt.target.value;
                          w(A, { loopBreakCondition: Mt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), R(ln), D(Me, Ee);
                    };
                    ae(tt, (Me) => {
                      n().loopEnable && Me(Rt);
                    });
                  }
                  var nt = L(tt, 2), Ot = L(B(nt), 2);
                  Cn(Ot), Ot.__change = (Me) => {
                    const Ee = Me.target.checked;
                    w(A, { retryEnable: Ee });
                  }, R(nt);
                  var ve = L(nt, 2);
                  {
                    var qe = (Me) => {
                      var Ee = hy(), rt = ie(Ee), lt = L(B(rt));
                      {
                        let kt = /* @__PURE__ */ N(() => n().retryIntervalMs || "1000");
                        Be(lt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Mt) => {
                            const wt = Mt.target.value;
                            w(A, { retryIntervalMs: wt });
                          },
                          get value() {
                            return u(kt);
                          }
                        });
                      }
                      R(rt);
                      var ot = L(rt, 2), Fn = L(B(ot));
                      {
                        let kt = /* @__PURE__ */ N(() => n().maxRetryCount || "3");
                        Be(Fn, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (Mt) => {
                            const wt = Mt.target.value;
                            w(A, { maxRetryCount: wt });
                          },
                          get value() {
                            return u(kt);
                          }
                        });
                      }
                      R(ot);
                      var ln = L(ot, 2), cn = L(B(ln), 2);
                      Cn(cn), cn.__change = (kt) => {
                        const Mt = kt.target.checked;
                        w(A, { resetRetryCountAfterNormal: Mt });
                      }, R(ln), Ce(() => Vo(cn, !!n().resetRetryCountAfterNormal)), D(Me, Ee);
                    };
                    ae(ve, (Me) => {
                      n().retryEnable && Me(qe);
                    });
                  }
                  R(he), Ce(() => {
                    Vo(Ie, !!n().async), Vo(at, !!n().loopEnable), Vo(Ot, !!n().retryEnable);
                  }), D(fe, he);
                },
                children: (fe, he) => {
                  Te(fe, {
                    class: "tf-node-toolbar-item",
                    children: (we, ce) => {
                      var _e = vy();
                      D(we, _e);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(ye, (le) => {
              d() && le(oe);
            });
          }
          R(Q), D(j, Q);
        },
        $$slots: { default: !0 }
      });
    };
    ae(Z, (M) => {
      (a() || l() || c()) && M(z);
    });
  }
  var S = L(Z, 2), T = L(B(S), 2), x = B(T);
  Td(x, {
    get items() {
      return u(k);
    },
    get activeKeys() {
      return y;
    },
    onChange: (M, j) => {
      w(r(), { expand: j?.includes("key") }), m()?.(j?.includes("key") ? "key" : "");
    }
  }), R(T), R(S);
  var C = L(S, 2);
  {
    var O = (M) => {
      Un(M, {
        type: "target",
        get position() {
          return me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(C, (M) => {
      g() && M(O);
    });
  }
  var H = L(C, 2);
  {
    var K = (M) => {
      Un(M, {
        type: "source",
        get position() {
          return me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(H, (M) => {
      f() && M(K);
    });
  }
  var W = L(H, 2);
  return je(W, () => i() ?? mt), D(e, V), de(I);
}
nr(["change"]);
se(
  qt,
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
var wy = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), _y = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), xy = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), by = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const Cy = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Kd(e, t) {
  ue(t, !0), ze(e, Cy);
  const n = p(t, "parameter", 7), r = p(t, "index", 7);
  let o = Ge(), i = zn(o), s = /* @__PURE__ */ N(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = st(), l = (I, V) => {
    a(o, (Z) => {
      let z = Z.data.parameters;
      return z[r()][I] = V, { parameters: z };
    });
  }, c = (I, V) => {
    const Z = V.target.value;
    l(I, Z);
  }, d = (I) => {
    const V = I.target.value;
    l("name", V);
  }, h = (I) => {
    const V = I.target.checked;
    l("required", V);
  }, f = (I) => {
    const V = I.value;
    l("formType", V);
  }, g = (I) => {
    const V = I.value;
    l("contentType", V);
  };
  let m;
  const y = () => {
    a(o, (I) => {
      let V = I.data.parameters;
      return V.splice(r(), 1), { parameters: [...V] };
    }), m?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(I) {
      n(I), v();
    },
    get index() {
      return r();
    },
    set index(I) {
      r(I), v();
    }
  }, _ = by(), k = ie(_), E = B(k);
  Ue(E, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), R(k);
  var b = L(k, 2), P = B(b);
  Nd(P, {
    get checked() {
      return u(s).required;
    },
    onchange: h
  }), R(b);
  var $ = L(b, 2), A = B($);
  return At(
    or(A, {
      placement: "bottom",
      floating: (V) => {
        var Z = _y(), z = B(Z), S = L(B(z));
        {
          let F = /* @__PURE__ */ N(() => u(s).contentType ? [u(s).contentType] : []);
          dt(S, {
            get items() {
              return pa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(F);
            },
            onSelect: g
          });
        }
        R(z);
        var T = L(z, 2), x = L(B(T));
        {
          let F = /* @__PURE__ */ N(() => u(s).formType ? [u(s).formType] : []);
          dt(x, {
            get items() {
              return zm;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return u(F);
            },
            onSelect: f
          });
        }
        R(T);
        var C = L(T, 2);
        {
          var O = (F) => {
            var U = wy(), G = L(B(U));
            {
              let ne = /* @__PURE__ */ N(() => u(s).enums?.join(`
`));
              Be(G, {
                rows: 3,
                style: "width: 100%;",
                onchange: (ee) => {
                  l("enums", ee.target?.value.trim().split(`
`));
                },
                get value() {
                  return u(ne);
                },
                placeholder: "一行一个选项"
              });
            }
            R(U), D(F, U);
          };
          ae(C, (F) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && F(O);
          });
        }
        var H = L(C, 2), K = L(B(H));
        Be(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            c("formLabel", F);
          },
          get value() {
            return u(s).formLabel;
          }
        }), R(H);
        var W = L(H, 2), M = L(B(W));
        Be(M, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            c("formDescription", F);
          },
          get value() {
            return u(s).formDescription;
          }
        }), R(W);
        var j = L(W, 2), X = L(B(j));
        Be(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            c("formPlaceholder", F);
          },
          get value() {
            return u(s).formPlaceholder;
          }
        }), R(j);
        var Q = L(j, 2), q = B(Q);
        Te(q, {
          onclick: y,
          children: (F, U) => {
            pe();
            var G = ke("删除");
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(Q), R(Z), D(V, Z);
      },
      children: (V, Z) => {
        Te(V, {
          class: "input-btn-more",
          children: (z, S) => {
            var T = xy();
            D(z, T);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => m = V,
    () => m
  ), R($), D(e, _), de(w);
}
se(Kd, { parameter: {}, index: {} }, [], [], !0);
var ky = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), Ey = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Sy = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Ny = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Zd(e, t) {
  ue(t, !0), ze(e, Ny);
  let n = Ge(), r = zn(n), o = /* @__PURE__ */ N(() => [...r?.current?.data?.parameters || []]);
  var i = Sy(), s = B(i);
  {
    var a = (c) => {
      var d = ky();
      pe(4), D(c, d);
    };
    ae(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = L(s, 2);
  yt(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, h) => {
      Kd(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(h);
        }
      });
    },
    (c) => {
      var d = Ey();
      D(c, d);
    }
  ), R(i), D(e, i), de();
}
se(Zd, {}, [], [], !0);
const po = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = On()), po(t.children);
}), e), an = () => {
  const { updateNodeData: e } = st();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => po(s?.children)) : po(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: On()
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
var Py = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), $y = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Dy = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Yd(e, t) {
  ue(t, !0), ze(e, Dy);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return qt(e, Ke(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (l) => {
      var c = Py();
      D(l, c);
    },
    children: (l, c) => {
      var d = Ty(), h = ie(d), f = B(h);
      De(f, {
        level: 3,
        children: (y, w) => {
          pe();
          var _ = ke("输入参数");
          D(y, _);
        },
        $$slots: { default: !0 }
      });
      var g = L(f, 2);
      Te(g, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, w) => {
          var _ = $y();
          D(y, _);
        },
        $$slots: { default: !0 }
      }), R(h);
      var m = L(h, 2);
      Zd(m, {}), D(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), de(s);
}
se(Yd, { data: {} }, [], [], !0);
const Wd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Wd(e, r.source, n));
}, Xd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Xd(r.children, t + "." + r.name, n)
})), Tl = (e, t, n) => {
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
          children: Xd(r, e.id, t)
        };
    }
  }
}, qd = (e = !1) => {
  const t = Ge(), n = zn(t), r = /* @__PURE__ */ N(sn), o = /* @__PURE__ */ N(() => u(r).nodes), i = /* @__PURE__ */ N(() => u(r).edges), s = /* @__PURE__ */ N(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ N(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const f = Tl(d, h, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Wd(d, t, u(i));
      for (const h of u(o))
        if (d.includes(h.id)) {
          const f = h.parentId === n.current.id, g = Tl(h, f, c);
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
var Ay = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Oy = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), My = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const Hy = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function jd(e, t) {
  ue(t, !0), ze(e, Hy), Vn(() => {
    u(c).refType || m({ value: "ref" });
  });
  const n = p(t, "parameter", 7), r = p(t, "index", 7), o = p(t, "dataKeyName", 7), i = p(t, "useChildrenOnly", 7), s = p(t, "showContentType", 7, !1);
  let a = Ge(), l = zn(a), c = /* @__PURE__ */ N(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = st(), h = (T, x) => {
    d(a, (C) => {
      let O = C.data?.[o()];
      return O[r()] = { ...O[r()], [T]: x }, { [o()]: O };
    });
  }, f = (T, x) => {
    const C = x.target.value;
    h(T, C);
  }, g = (T) => {
    const x = T.value;
    h("ref", x);
  }, m = (T) => {
    const x = T.value;
    h("refType", x);
  }, y = (T) => {
    const x = T.value;
    h("contentType", x);
  };
  let w;
  const _ = () => {
    d(a, (T) => {
      let x = T.data?.[o()];
      return x.splice(r(), 1), { [o()]: [...x] };
    }), w?.hide();
  };
  let k = qd(i());
  var E = {
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), v();
    },
    get index() {
      return r();
    },
    set index(T) {
      r(T), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(T) {
      i(T), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType(T = !1) {
      s(T), v();
    }
  }, b = My(), P = ie(b), $ = B(P);
  {
    let T = /* @__PURE__ */ N(() => u(c).nameDisabled === !0);
    Ue($, {
      style: "width: 100%;",
      get value() {
        return u(c).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(T);
      },
      oninput: (x) => f("name", x)
    });
  }
  R(P);
  var A = L(P, 2), I = B(A);
  {
    var V = (T) => {
      Ue(T, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (x) => f("value", x)
      });
    }, Z = (T) => {
      var x = Se(), C = ie(x);
      {
        var O = (H) => {
          {
            let K = /* @__PURE__ */ N(() => [u(c).ref]);
            dt(H, {
              get items() {
                return k.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(K);
              },
              expandAll: !0,
              onSelect: g
            });
          }
        };
        ae(
          C,
          (H) => {
            u(c).refType !== "input" && H(O);
          },
          !0
        );
      }
      D(T, x);
    };
    ae(I, (T) => {
      u(c).refType === "fixed" ? T(V) : T(Z, !1);
    });
  }
  R(A);
  var z = L(A, 2), S = B(z);
  return At(
    or(S, {
      placement: "bottom",
      floating: (x) => {
        var C = Oy(), O = B(C), H = L(B(O));
        {
          let U = /* @__PURE__ */ N(() => u(c).refType ? [u(c).refType] : []);
          dt(H, {
            get items() {
              return Im;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(U);
            },
            onSelect: m
          });
        }
        R(O);
        var K = L(O, 2);
        {
          var W = (U) => {
            var G = Ay(), ne = L(B(G));
            {
              let ee = /* @__PURE__ */ N(() => u(c).contentType ? [u(c).contentType] : []);
              dt(ne, {
                get items() {
                  return pa;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return u(ee);
                },
                onSelect: y
              });
            }
            R(G), D(U, G);
          };
          ae(K, (U) => {
            s() && U(W);
          });
        }
        var M = L(K, 2), j = L(B(M));
        Be(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (U) => {
            f("defaultValue", U);
          },
          get value() {
            return u(c).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), R(M);
        var X = L(M, 2), Q = L(B(X));
        Be(Q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (U) => {
            f("description", U);
          },
          get value() {
            return u(c).description;
          },
          placeholder: "请输入参数描述"
        }), R(X);
        var q = L(X, 2), F = B(q);
        Te(F, {
          onclick: _,
          children: (U, G) => {
            pe();
            var ne = ke("删除");
            D(U, ne);
          },
          $$slots: { default: !0 }
        }), R(q), R(C), D(x, C);
      },
      children: (x, C) => {
        Ho(x, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => w = x,
    () => w
  ), R(z), D(e, b), de(E);
}
se(
  jd,
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
var Ly = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Vy = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Iy = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const zy = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function bt(e, t) {
  ue(t, !0), ze(e, zy);
  const n = p(t, "noneParameterText", 7, "无输入参数"), r = p(t, "dataKeyName", 7, "parameters"), o = p(t, "useChildrenOnly", 7), i = p(t, "showContentType", 7, !1);
  let s = Ge(), a = zn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[r()] || []]);
  var c = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(m = "无输入参数") {
      n(m), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(m = "parameters") {
      r(m), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(m) {
      o(m), v();
    },
    get showContentType() {
      return i();
    },
    set showContentType(m = !1) {
      i(m), v();
    }
  }, d = Iy(), h = B(d);
  {
    var f = (m) => {
      var y = Ly();
      pe(4), D(m, y);
    };
    ae(h, (m) => {
      u(l).length !== 0 && m(f);
    });
  }
  var g = L(h, 2);
  return yt(
    g,
    19,
    () => u(l),
    (m) => m.id,
    (m, y, w) => {
      jd(m, {
        get parameter() {
          return u(y);
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
    (m) => {
      var y = Vy(), w = B(y, !0);
      R(y), Ce(() => Fe(w, n())), D(m, y);
    }
  ), R(d), D(e, d), de(c);
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
var Ry = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), By = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const Ky = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Gd(e, t) {
  ue(t, !0), ze(e, Ky);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return qt(e, Ke(
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
        var c = Ry();
        D(l, c);
      },
      children: (l, c) => {
        var d = Fy(), h = ie(d), f = B(h);
        De(f, {
          level: 3,
          children: (y, w) => {
            pe();
            var _ = ke("输出参数");
            D(y, _);
          },
          $$slots: { default: !0 }
        });
        var g = L(f, 2);
        Te(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, w) => {
            var _ = By();
            D(y, _);
          },
          $$slots: { default: !0 }
        }), R(h);
        var m = L(h, 2);
        bt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(s);
}
se(Gd, { data: {} }, [], [], !0);
const is = (e) => JSON.parse(JSON.stringify(e));
var Zy = /* @__PURE__ */ ge('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Yy = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Wy = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Xy = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const qy = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ud(e, t) {
  ue(t, !0), ze(e, qy);
  const n = p(t, "parameter", 7), r = p(t, "position", 7), o = p(t, "dataKeyName", 7), i = p(t, "placeholder", 7, "请输入参数值");
  let s = Ge(), a = zn(s), l = /* @__PURE__ */ N(() => {
    let S = a?.current?.data?.[o()], T;
    if (S && r().length > 0) {
      let x = S;
      for (let C = 0; C < r().length; C++) {
        const O = r()[C];
        C == r().length - 1 ? T = x[O] : x = x[O].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: c } = st(), d = (S, T) => {
    c(s, (x) => {
      const C = x.data?.[o()];
      if (C && r().length > 0) {
        let O = C;
        for (let H = 0; H < r().length; H++) {
          const K = r()[H];
          H == r().length - 1 ? O[K] = { ...O[K], [S]: T } : O = O[K].children;
        }
      }
      return { [o()]: [...is(C)] };
    });
  }, h = (S, T) => {
    const x = T.target.value;
    d(S, x);
  }, f = (S) => {
    const T = S.value;
    d("dataType", T);
  };
  let g;
  const m = () => {
    c(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let x = T;
        for (let C = 0; C < r().length; C++) {
          const O = r()[C];
          C == r().length - 1 ? x.splice(O, 1) : x = x[O].children;
        }
      }
      return { [o()]: [...is(T)] };
    }), g?.hide();
  }, y = () => {
    c(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let x = T;
        for (let C = 0; C < r().length; C++) {
          const O = r()[C];
          C == r().length - 1 ? x[O].children ? x[O].children.push({ id: On(), name: "newParam", dataType: "String" }) : x[O].children = [{ id: On(), name: "newParam", dataType: "String" }] : x = x[O].children;
        }
      }
      return { [o()]: [...is(T)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), v();
    },
    get position() {
      return r();
    },
    set position(S) {
      r(S), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(S = "请输入参数值") {
      i(S), v();
    }
  }, _ = Xy(), k = ie(_), E = B(k);
  {
    var b = (S) => {
      var T = Se(), x = ie(T);
      yt(x, 17, r, Or, (C, O) => {
        pe();
        var H = ke(" ");
        D(C, H);
      }), D(S, T);
    };
    ae(E, (S) => {
      r().length > 1 && S(b);
    });
  }
  var P = L(E, 2);
  {
    let S = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
    Ue(P, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (T) => {
        h("name", T);
      },
      get disabled() {
        return u(S);
      }
    });
  }
  R(k);
  var $ = L(k, 2), A = B($);
  {
    let S = /* @__PURE__ */ N(() => u(l).dataTypeItems || Vm), T = /* @__PURE__ */ N(() => u(l).dataType ? [u(l).dataType] : []), x = /* @__PURE__ */ N(() => u(l).dataTypeDisabled === !0);
    dt(A, {
      get items() {
        return u(S);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return u(T);
      },
      get disabled() {
        return u(x);
      },
      onSelect: f
    });
  }
  var I = L(A, 2);
  {
    var V = (S) => {
      Te(S, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (T, x) => {
          var C = Zy();
          D(T, C);
        },
        $$slots: { default: !0 }
      });
    };
    ae(I, (S) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && S(V);
    });
  }
  R($);
  var Z = L($, 2), z = B(Z);
  return At(
    or(z, {
      placement: "bottom",
      floating: (T) => {
        var x = Wy(), C = B(x), O = L(B(C));
        {
          let j = /* @__PURE__ */ N(() => u(l).defaultValue || "");
          Be(O, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return u(j);
            },
            onchange: (X) => {
              h("defaultValue", X);
            }
          });
        }
        R(C);
        var H = L(C, 2), K = L(B(H));
        {
          let j = /* @__PURE__ */ N(() => u(l).description || "");
          Be(K, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return u(j);
            },
            onchange: (X) => {
              h("description", X);
            }
          });
        }
        R(H);
        var W = L(H, 2);
        {
          var M = (j) => {
            var X = Yy(), Q = B(X);
            Te(Q, {
              onclick: m,
              children: (q, F) => {
                pe();
                var U = ke("删除");
                D(q, U);
              },
              $$slots: { default: !0 }
            }), R(X), D(j, X);
          };
          ae(W, (j) => {
            u(l).deleteDisabled !== !0 && j(M);
          });
        }
        R(x), D(T, x);
      },
      children: (T, x) => {
        Ho(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => g = T,
    () => g
  ), R(Z), D(e, _), de(w);
}
se(
  Ud,
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
var jy = /* @__PURE__ */ te("<!> <!>", 1), Gy = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Uy = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Jy = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Qy = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Bn(e, t) {
  ue(t, !0), ze(e, Qy);
  const n = (m, y = mt, w = mt) => {
    var _ = Se(), k = ie(_);
    yt(
      k,
      19,
      y,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, b, P) => {
        var $ = jy(), A = ie($);
        {
          let Z = /* @__PURE__ */ N(() => [...w(), u(P)]);
          Ud(A, {
            get parameter() {
              return u(b);
            },
            get position() {
              return u(Z);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var I = L(A, 2);
        {
          var V = (Z) => {
            {
              let z = /* @__PURE__ */ N(() => [...w(), u(P)]);
              n(Z, () => u(b).children, () => u(z));
            }
          };
          ae(I, (Z) => {
            u(b).children && Z(V);
          });
        }
        D(E, $);
      },
      (E) => {
        var b = Se(), P = ie(b);
        {
          var $ = (A) => {
            var I = Gy(), V = B(I, !0);
            R(I), Ce(() => Fe(V, r())), D(A, I);
          };
          ae(P, (A) => {
            w().length === 0 && A($);
          });
        }
        D(E, b);
      }
    ), D(m, _);
  }, r = p(t, "noneParameterText", 7, "无输出参数"), o = p(t, "dataKeyName", 7, "outputDefs"), i = p(t, "placeholder", 7, "请输入参数名称");
  let s = Ge(), a = zn(s), l = /* @__PURE__ */ N(() => [...a?.current?.data?.[o()] || []]);
  var c = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(m = "无输出参数") {
      r(m), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(m = "outputDefs") {
      o(m), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(m = "请输入参数名称") {
      i(m), v();
    }
  }, d = Jy(), h = B(d);
  {
    var f = (m) => {
      var y = Uy();
      pe(4), D(m, y);
    };
    ae(h, (m) => {
      u(l).length !== 0 && m(f);
    });
  }
  var g = L(h, 2);
  return n(g, () => u(l) || [], () => []), R(d), D(e, d), de(c);
}
se(Bn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var ew = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), tw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), ow = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const iw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Jd(e, t) {
  ue(t, !0), ze(e, iw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an(), s = Qn();
  let a = /* @__PURE__ */ Ne(Yt([]));
  Vn(async () => {
    const h = await s.provider?.llm?.();
    u(a).push(...h || []);
  });
  const { updateNodeData: l } = st(), c = (h) => {
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
      n(h), v();
    }
  };
  return qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var g = ew();
        D(f, g);
      },
      children: (f, g) => {
        var m = ow(), y = ie(m), w = B(y);
        De(w, {
          level: 3,
          children: (W, M) => {
            pe();
            var j = ke("输入参数");
            D(W, j);
          },
          $$slots: { default: !0 }
        });
        var _ = L(w, 2);
        Te(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (W, M) => {
            var j = tw();
            D(W, j);
          },
          $$slots: { default: !0 }
        }), R(y);
        var k = L(y, 2);
        bt(k, {});
        var E = L(k, 2), b = B(E);
        De(b, {
          level: 3,
          children: (W, M) => {
            pe();
            var j = ke("图片识别");
            D(W, j);
          },
          $$slots: { default: !0 }
        });
        var P = L(b, 2);
        Te(P, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (W, M) => {
            var j = nw();
            D(W, j);
          },
          $$slots: { default: !0 }
        }), R(E);
        var $ = L(E, 2);
        bt($, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var A = L($, 2);
        De(A, {
          level: 3,
          mt: "10px",
          children: (W, M) => {
            pe();
            var j = ke("模型设置");
            D(W, j);
          },
          $$slots: { default: !0 }
        });
        var I = L(A, 4), V = B(I);
        {
          let W = /* @__PURE__ */ N(() => n().llmId ? [n().llmId] : []);
          dt(V, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (M) => {
              const j = M.value;
              l(o, () => ({ llmId: j }));
            },
            get value() {
              return u(W);
            }
          });
        }
        var Z = L(V, 2);
        or(Z, {
          placement: "bottom",
          floating: (M) => {
            var j = rw(), X = L(B(j), 2), Q = B(X), q = B(Q), F = B(q);
            R(q);
            var U = L(q, 2);
            Cn(U), U.__input = (ce) => l(o, { temperature: parseFloat(ce.target.value) }), R(Q), R(X);
            var G = L(X, 2), ne = B(G), ee = B(ne), ye = B(ee);
            R(ee);
            var oe = L(ee, 2);
            Cn(oe), oe.__input = (ce) => l(o, { topP: parseFloat(ce.target.value) }), R(ne), R(G);
            var le = L(G, 2), re = B(le), fe = B(re), he = B(fe);
            R(fe);
            var we = L(fe, 2);
            Cn(we), we.__input = (ce) => l(o, { topK: parseInt(ce.target.value) }), R(re), R(le), R(j), Ce(() => {
              Fe(F, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), Wo(U, n().temperature ?? 0.7), Fe(ye, `Top P: ${n().topP ?? 0.9 ?? ""}`), Wo(oe, n().topP ?? 0.9), Fe(he, `Top K: ${n().topK ?? 50 ?? ""}`), Wo(we, n().topK ?? 50);
            }), D(M, j);
          },
          children: (M, j) => {
            Ho(M, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), R(I);
        var z = L(I, 4), S = B(z);
        {
          let W = /* @__PURE__ */ N(() => n().systemPrompt || "");
          Be(S, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return u(W);
            },
            oninput: (M) => {
              l(o, { systemPrompt: M.target.value });
            }
          });
        }
        R(z);
        var T = L(z, 4), x = B(T);
        {
          let W = /* @__PURE__ */ N(() => n().userPrompt || "");
          Be(x, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return u(W);
            },
            oninput: (M) => {
              l(o, { userPrompt: M.target.value });
            }
          });
        }
        R(T);
        var C = L(T, 2), O = B(C);
        De(O, {
          level: 3,
          children: (W, M) => {
            pe();
            var j = ke("输出参数");
            D(W, j);
          },
          $$slots: { default: !0 }
        });
        var H = L(O, 2);
        {
          let W = /* @__PURE__ */ N(() => n().outType ? [n().outType] : []);
          dt(H, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (M) => {
              c(M.value);
            },
            get value() {
              return u(W);
            }
          });
        }
        R(C);
        var K = L(C, 2);
        Bn(K, {}), D(f, m);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(d);
}
nr(["input"]);
se(Jd, { data: {} }, [], [], !0);
var sw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), aw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const uw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  ue(t, !0), ze(e, uw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Vn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ge(), { addParameter: i } = an(), { updateNodeData: s } = st(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  };
  return qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = sw();
        D(d, h);
      },
      children: (d, h) => {
        var f = cw(), g = ie(f), m = B(g);
        De(m, {
          level: 3,
          children: (Z, z) => {
            pe();
            var S = ke("输入参数");
            D(Z, S);
          },
          $$slots: { default: !0 }
        });
        var y = L(m, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Z, z) => {
            var S = aw();
            D(Z, S);
          },
          $$slots: { default: !0 }
        }), R(g);
        var w = L(g, 2);
        bt(w, {});
        var _ = L(w, 2);
        De(_, {
          level: 3,
          mt: "10px",
          children: (Z, z) => {
            pe();
            var S = ke("代码");
            D(Z, S);
          },
          $$slots: { default: !0 }
        });
        var k = L(_, 4), E = B(k);
        {
          let Z = /* @__PURE__ */ N(() => n().engine ? [n().engine] : ["qlexpress"]);
          dt(E, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (z) => {
              const S = z.value;
              s(o, () => ({ engine: S }));
            },
            get value() {
              return u(Z);
            }
          });
        }
        R(k);
        var b = L(k, 4), P = B(b);
        {
          let Z = /* @__PURE__ */ N(() => n().code || "");
          Be(P, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (z) => {
              s(o, () => ({ code: z.target.value }));
            },
            get value() {
              return u(Z);
            }
          });
        }
        R(b);
        var $ = L(b, 2), A = B($);
        De(A, {
          level: 3,
          mt: "10px",
          children: (Z, z) => {
            pe();
            var S = ke("输出参数");
            D(Z, S);
          },
          $$slots: { default: !0 }
        });
        var I = L(A, 2);
        Te(I, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Z, z) => {
            var S = lw();
            D(Z, S);
          },
          $$slots: { default: !0 }
        }), R($);
        var V = L($, 2);
        Bn(V, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(l);
}
se(Qd, { data: {} }, [], [], !0);
var dw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), fw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const gw = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ef(e, t) {
  ue(t, !0), ze(e, gw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an(), { updateNodeData: s } = st();
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
  return qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = dw();
        D(c, d);
      },
      children: (c, d) => {
        var h = hw(), f = ie(h), g = B(f);
        De(g, {
          level: 3,
          children: ($, A) => {
            pe();
            var I = ke("输入参数");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var m = L(g, 2);
        Te(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, A) => {
            var I = fw();
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(f);
        var y = L(f, 2);
        bt(y, {});
        var w = L(y, 2);
        De(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: ($, A) => {
            pe();
            var I = ke("模板内容");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var _ = L(w, 2), k = B(_);
        {
          let $ = /* @__PURE__ */ N(() => n().template || "");
          Be(k, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ template: A.target.value }));
            },
            get value() {
              return u($);
            }
          });
        }
        R(_);
        var E = L(_, 2), b = B(E);
        De(b, {
          level: 3,
          mt: "10px",
          children: ($, A) => {
            pe();
            var I = ke("输出参数");
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(E);
        var P = L(E, 2);
        Bn(P, {}), D(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(a);
}
se(ef, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), pw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), ww = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), xw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), Cw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), kw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Ew = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Nw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function tf(e, t) {
  ue(t, !0), ze(e, Nw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Vn(() => {
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
  ], i = Ge(), { addParameter: s } = an(), { updateNodeData: a } = st();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  };
  return qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = vw();
        D(d, h);
      },
      children: (d, h) => {
        var f = Sw(), g = ie(f), m = B(g);
        De(m, {
          level: 3,
          children: (F, U) => {
            pe();
            var G = ke("输入参数");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var y = L(m, 2);
        Te(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (F, U) => {
            var G = pw();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(g);
        var w = L(g, 2);
        bt(w, {});
        var _ = L(w, 2);
        De(_, {
          level: 3,
          mt: "10px",
          children: (F, U) => {
            pe();
            var G = ke("URL 地址");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var k = L(_, 2), E = B(k), b = B(E);
        {
          let F = /* @__PURE__ */ N(() => n().method ? [n().method] : ["get"]);
          dt(b, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (U) => {
              const G = U.value;
              a(i, () => ({ method: G }));
            },
            get value() {
              return u(F);
            }
          });
        }
        R(E);
        var P = L(E, 2), $ = B(P);
        {
          let F = /* @__PURE__ */ N(() => n().url || "");
          Ue($, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (U) => {
              a(i, () => ({ url: U.target.value }));
            },
            get value() {
              return u(F);
            }
          });
        }
        R(P), R(k);
        var A = L(k, 2), I = B(A);
        De(I, {
          level: 3,
          children: (F, U) => {
            pe();
            var G = ke("Http 头信息");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var V = L(I, 2);
        Te(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (F, U) => {
            var G = mw();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(A);
        var Z = L(A, 2);
        bt(Z, { dataKeyName: "headers" });
        var z = L(Z, 2);
        {
          var S = (F) => {
            var U = yw(), G = ie(U);
            De(G, {
              level: 3,
              mt: "10px",
              children: (Ae, Y) => {
                pe();
                var We = ke("Body");
                D(Ae, We);
              },
              $$slots: { default: !0 }
            });
            var ne = L(G, 2), ee = B(ne), ye = B(ee);
            {
              let Ae = /* @__PURE__ */ N(() => !n().bodyType || n().bodyType === "");
              Ue(ye, {
                type: "radio",
                value: "",
                get checked() {
                  return u(Ae);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            pe(), R(ee);
            var oe = L(ee, 2), le = B(oe);
            {
              let Ae = /* @__PURE__ */ N(() => n().bodyType === "form-data");
              Ue(le, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return u(Ae);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            pe(), R(oe);
            var re = L(oe, 2), fe = B(re);
            {
              let Ae = /* @__PURE__ */ N(() => n().bodyType === "x-www-form-urlencoded");
              Ue(fe, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return u(Ae);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            pe(), R(re);
            var he = L(re, 2), we = B(he);
            {
              let Ae = /* @__PURE__ */ N(() => n().bodyType === "json");
              Ue(we, {
                type: "radio",
                value: "json",
                get checked() {
                  return u(Ae);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            pe(), R(he);
            var ce = L(he, 2), _e = B(ce);
            {
              let Ae = /* @__PURE__ */ N(() => n().bodyType === "raw");
              Ue(_e, {
                type: "radio",
                value: "raw",
                get checked() {
                  return u(Ae);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            pe(), R(ce), R(ne), D(F, U);
          };
          ae(z, (F) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && F(S);
          });
        }
        var T = L(z, 2);
        {
          var x = (F) => {
            var U = _w(), G = ie(U), ne = B(G);
            De(ne, {
              level: 3,
              children: (oe, le) => {
                pe();
                var re = ke("参数");
                D(oe, re);
              },
              $$slots: { default: !0 }
            });
            var ee = L(ne, 2);
            Te(ee, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, le) => {
                var re = ww();
                D(oe, re);
              },
              $$slots: { default: !0 }
            }), R(G);
            var ye = L(G, 2);
            bt(ye, { dataKeyName: "formData" }), D(F, U);
          };
          ae(T, (F) => {
            n().bodyType === "form-data" && F(x);
          });
        }
        var C = L(T, 2);
        {
          var O = (F) => {
            var U = bw(), G = ie(U), ne = B(G);
            De(ne, {
              level: 3,
              children: (oe, le) => {
                pe();
                var re = ke("Body 参数");
                D(oe, re);
              },
              $$slots: { default: !0 }
            });
            var ee = L(ne, 2);
            Te(ee, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, le) => {
                var re = xw();
                D(oe, re);
              },
              $$slots: { default: !0 }
            }), R(G);
            var ye = L(G, 2);
            bt(ye, { dataKeyName: "formUrlencoded" }), D(F, U);
          };
          ae(C, (F) => {
            n().bodyType === "x-www-form-urlencoded" && F(O);
          });
        }
        var H = L(C, 2);
        {
          var K = (F) => {
            var U = Cw(), G = B(U);
            Be(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), R(U), D(F, U);
          };
          ae(H, (F) => {
            n().bodyType === "json" && F(K);
          });
        }
        var W = L(H, 2);
        {
          var M = (F) => {
            var U = kw(), G = B(U);
            Be(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), R(U), D(F, U);
          };
          ae(W, (F) => {
            n().bodyType === "raw" && F(M);
          });
        }
        var j = L(W, 2), X = B(j);
        De(X, {
          level: 3,
          mt: "10px",
          children: (F, U) => {
            pe();
            var G = ke("输出参数");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var Q = L(X, 2);
        Te(Q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (F, U) => {
            var G = Ew();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(j);
        var q = L(j, 2);
        Bn(q, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(l);
}
se(tf, { data: {} }, [], [], !0);
var Pw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), $w = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Dw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function nf(e, t) {
  ue(t, !0), ze(e, Dw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an(), s = Qn();
  let a = /* @__PURE__ */ Ne(Yt([]));
  Vn(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = st();
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
      n(d), v();
    }
  };
  return qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = Pw();
        D(h, f);
      },
      children: (h, f) => {
        var g = Tw(), m = ie(g), y = B(m);
        De(y, {
          level: 3,
          children: (S, T) => {
            pe();
            var x = ke("输入参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var w = L(y, 2);
        Te(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, T) => {
            var x = $w();
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(m);
        var _ = L(m, 2);
        bt(_, {});
        var k = L(_, 2);
        De(k, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            pe();
            var x = ke("知识库设置");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var E = L(k, 4), b = B(E);
        {
          let S = /* @__PURE__ */ N(() => n().knowledgeId ? [n().knowledgeId] : []);
          dt(b, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (T) => {
              const x = T.value;
              l(o, () => ({ knowledgeId: x }));
            },
            get value() {
              return u(S);
            }
          });
        }
        R(E);
        var P = L(E, 4), $ = B(P);
        Ue($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), R(P);
        var A = L(P, 4), I = B(A);
        {
          let S = /* @__PURE__ */ N(() => n().limit || "");
          Ue(I, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (T) => {
              const x = T.target.value;
              l(o, () => ({ limit: x }));
            },
            get value() {
              return u(S);
            }
          });
        }
        R(A);
        var V = L(A, 2), Z = B(V);
        De(Z, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            pe();
            var x = ke("输出参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(V);
        var z = L(V, 2);
        Bn(z, {}), D(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(c);
}
se(nf, { data: {} }, [], [], !0);
var Aw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Ow = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Hw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rf(e, t) {
  ue(t, !0), ze(e, Hw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an(), s = Qn();
  let a = /* @__PURE__ */ Ne(Yt([]));
  Vn(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = st();
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
      n(d), v();
    }
  };
  return qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = Aw();
        D(h, f);
      },
      children: (h, f) => {
        var g = Mw(), m = ie(g), y = B(m);
        De(y, {
          level: 3,
          children: (S, T) => {
            pe();
            var x = ke("输入参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var w = L(y, 2);
        Te(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, T) => {
            var x = Ow();
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(m);
        var _ = L(m, 2);
        bt(_, {});
        var k = L(_, 2);
        De(k, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            pe();
            var x = ke("搜索引擎设置");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var E = L(k, 4), b = B(E);
        {
          let S = /* @__PURE__ */ N(() => n().engine ? [n().engine] : []);
          dt(b, {
            get items() {
              return u(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (T) => {
              const x = T.value;
              l(o, () => ({ engine: x }));
            },
            get value() {
              return u(S);
            }
          });
        }
        R(E);
        var P = L(E, 4), $ = B(P);
        Ue($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), R(P);
        var A = L(P, 4), I = B(A);
        Ue(I, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ limit: T }));
          }
        }), R(A);
        var V = L(A, 2), Z = B(V);
        De(Z, {
          level: 3,
          mt: "10px",
          children: (S, T) => {
            pe();
            var x = ke("输出参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(V);
        var z = L(V, 2);
        Bn(z, {}), D(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(c);
}
se(rf, { data: {} }, [], [], !0);
var Lw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Vw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const zw = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function of(e, t) {
  ue(t, !0), ze(e, zw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an();
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
  return qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Lw();
        D(c, d);
      },
      handle: (c) => {
        Un(c, {
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
        var h = Iw(), f = ie(h), g = B(f);
        De(g, {
          level: 3,
          children: (E, b) => {
            pe();
            var P = ke("循环变量");
            D(E, P);
          },
          $$slots: { default: !0 }
        }), R(f);
        var m = L(f, 2);
        bt(m, { dataKeyName: "loopVars" });
        var y = L(m, 2), w = B(y);
        De(w, {
          level: 3,
          children: (E, b) => {
            pe();
            var P = ke("输出参数");
            D(E, P);
          },
          $$slots: { default: !0 }
        });
        var _ = L(w, 2);
        Te(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, b) => {
            var P = Vw();
            D(E, P);
          },
          $$slots: { default: !0 }
        }), R(y);
        var k = L(y, 2);
        bt(k, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(c, h);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), de(s);
}
se(of, { data: {} }, [], [], !0);
var Rw = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Bw = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Fw = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function sf(e, t) {
  ue(t, !0), ze(e, Fw);
  const n = p(t, "parameter", 7), r = p(t, "index", 7), o = p(t, "dataKeyName", 7), i = p(t, "useChildrenOnly", 7);
  let s = Ge(), a = zn(s), l = /* @__PURE__ */ N(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = st(), d = (S, T) => {
    c(s, (x) => {
      let C = x.data?.[o()];
      return C[r()] = { ...C[r()], [S]: T }, { [o()]: C };
    });
  }, h = (S, T) => {
    const x = T.target.value;
    d(S, x);
  }, f = (S) => {
    const T = S.value;
    d("ref", T);
  }, g = (S) => {
    const T = S.value;
    d("formType", T);
  }, m = (S) => {
    const T = S.value;
    d("contentType", T);
  };
  let y;
  const w = () => {
    c(s, (S) => {
      let T = S.data?.[o()];
      return T.splice(r(), 1), { [o()]: [...T] };
    }), y?.hide();
  };
  let _ = qd(i());
  var k = {
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
    }
  }, E = Bw(), b = ie(E), P = B(b);
  {
    let S = /* @__PURE__ */ N(() => u(l).nameDisabled === !0);
    Ue(P, {
      style: "width: 100%;",
      get value() {
        return u(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return u(S);
      },
      oninput: (T) => h("name", T)
    });
  }
  R(b);
  var $ = L(b, 2), A = B($);
  {
    var I = (S) => {
      Ue(S, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => h("value", T)
      });
    }, V = (S) => {
      var T = Se(), x = ie(T);
      {
        var C = (O) => {
          {
            let H = /* @__PURE__ */ N(() => [u(l).ref]);
            dt(O, {
              get items() {
                return _.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return u(H);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        ae(
          x,
          (O) => {
            u(l).refType !== "input" && O(C);
          },
          !0
        );
      }
      D(S, T);
    };
    ae(A, (S) => {
      u(l).refType === "fixed" ? S(I) : S(V, !1);
    });
  }
  R($);
  var Z = L($, 2), z = B(Z);
  return At(
    or(z, {
      placement: "bottom",
      floating: (T) => {
        var x = Rw(), C = B(x), O = L(B(C));
        {
          let F = /* @__PURE__ */ N(() => u(l).contentType ? [u(l).contentType] : []);
          dt(O, {
            get items() {
              return pa;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return u(F);
            },
            onSelect: m
          });
        }
        R(C);
        var H = L(C, 2), K = L(B(H));
        {
          let F = /* @__PURE__ */ N(() => u(l).formType ? [u(l).formType] : []);
          dt(K, {
            get items() {
              return Rm;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return u(F);
            },
            onSelect: g
          });
        }
        R(H);
        var W = L(H, 2), M = L(B(W));
        Be(M, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            h("formLabel", F);
          },
          get value() {
            return u(l).formLabel;
          }
        }), R(W);
        var j = L(W, 2), X = L(B(j));
        Be(X, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            h("formDescription", F);
          },
          get value() {
            return u(l).formDescription;
          }
        }), R(j);
        var Q = L(j, 2), q = B(Q);
        Te(q, {
          onclick: w,
          children: (F, U) => {
            pe();
            var G = ke("删除");
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(Q), R(x), D(T, x);
      },
      children: (T, x) => {
        Ho(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => y = T,
    () => y
  ), R(Z), D(e, E), de(k);
}
se(
  sf,
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
var Kw = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Zw = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Yw = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Ww = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function af(e, t) {
  ue(t, !0), ze(e, Ww);
  const n = p(t, "noneParameterText", 7, "无确认数据"), r = p(t, "dataKeyName", 7, "parameters"), o = p(t, "useChildrenOnly", 7);
  let i = Ge(), s = zn(i), a = /* @__PURE__ */ N(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无确认数据") {
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
    }
  }, c = Yw(), d = B(c);
  {
    var h = (g) => {
      var m = Kw();
      pe(4), D(g, m);
    };
    ae(d, (g) => {
      u(a).length !== 0 && g(h);
    });
  }
  var f = L(d, 2);
  return yt(
    f,
    19,
    () => u(a),
    (g) => g.id,
    (g, m, y) => {
      sf(g, {
        get parameter() {
          return u(m);
        },
        get index() {
          return u(y);
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
      var m = Zw(), y = B(m, !0);
      R(m), Ce(() => Fe(y, n())), D(g, m);
    }
  ), R(c), D(e, c), de(l);
}
se(af, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const As = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!As(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !As(e[s], t[s])) return !1;
    return !0;
  }
};
var Xw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), qw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jw = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const Gw = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function lf(e, t) {
  ue(t, !0), ze(e, Gw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an(), { updateNodeData: s } = st();
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
      As(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return qt(e, Ke(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Xw();
        D(c, d);
      },
      children: (c, d) => {
        var h = jw(), f = ie(h), g = B(f);
        De(g, {
          level: 3,
          children: ($, A) => {
            pe();
            var I = ke("确认数据");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var m = L(g, 2);
        Te(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: ($, A) => {
            var I = qw();
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(f);
        var y = L(f, 2);
        af(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = L(y, 2);
        De(w, {
          level: 3,
          mt: "10px",
          children: ($, A) => {
            pe();
            var I = ke("确认消息");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var _ = L(w, 4), k = B(_);
        {
          let $ = /* @__PURE__ */ N(() => n().message || "");
          Be(k, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ message: A.target.value }));
            },
            get value() {
              return u($);
            }
          });
        }
        R(_);
        var E = L(_, 2), b = B(E);
        De(b, {
          level: 3,
          mt: "10px",
          children: ($, A) => {
            pe();
            var I = ke("输出参数");
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(E);
        var P = L(E, 2);
        Bn(P, { placeholder: "" }), D(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(a);
}
se(lf, { data: {} }, [], [], !0);
const Uw = {
  startNode: Yd,
  codeNode: Qd,
  confirmNode: lf,
  llmNode: Jd,
  templateNode: ef,
  httpNode: tf,
  knowledgeNode: nf,
  searchEngineNode: rf,
  loopNode: of,
  endNode: Gd
};
var Jw = /* @__PURE__ */ te("<!> ", 1);
function Os(e, t) {
  ue(t, !0);
  const n = p(t, "icon", 7), r = p(t, "title", 7), o = p(t, "type", 7), i = p(t, "description", 7), s = p(t, "extra", 7), a = (c) => {
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
      n(c), v();
    },
    get title() {
      return r();
    },
    set title(c) {
      r(c), v();
    },
    get type() {
      return o();
    },
    set type(c) {
      o(c), v();
    },
    get description() {
      return i();
    },
    set description(c) {
      i(c), v();
    },
    get extra() {
      return s();
    },
    set extra(c) {
      s(c), v();
    }
  };
  return Te(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (c, d) => {
      var h = Jw(), f = ie(h);
      Us(f, n);
      var g = L(f);
      Ce(() => Fe(g, ` ${r() ?? ""}`)), D(c, h);
    },
    $$slots: { default: !0 }
  }), de(l);
}
se(Os, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Qw = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), e_ = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), t_ = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function cf(e, t) {
  ue(t, !0);
  let n = /* @__PURE__ */ Ne("base"), r = /* @__PURE__ */ Ne("show");
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
  ], s = [], a = Qn(), l = a.customNodes;
  if (l) {
    const _ = Object.keys(l).sort((k, E) => (l[k].sortNo || 0) - (l[E].sortNo || 0));
    for (let k of _)
      l[k].group === "base" ? o.push({ type: k, ...l[k] }) : s.push({
        icon: l[k].icon,
        title: l[k].title,
        type: k
      });
    o.sort((k, E) => (k.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const _ = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(_)) {
      for (let k of _)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === k) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var c = t_(), d = B(c), h = B(d), f = B(h);
  $d(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (_) => {
      J(n, _.value.toString(), !0);
    }
  }), R(h);
  var g = L(h, 2), m = B(g);
  yt(m, 21, () => o, Or, (_, k) => {
    Os(_, Ke(() => u(k)));
  }), R(m);
  var y = L(m, 2);
  yt(y, 21, () => s, Or, (_, k) => {
    Os(_, Ke(() => u(k)));
  }), R(y), R(g), R(d);
  var w = L(d, 2);
  Te(w, {
    onclick: () => {
      J(r, u(r) ? "" : "show", !0);
    },
    children: (_, k) => {
      var E = Se(), b = ie(E);
      {
        var P = (A) => {
          var I = Qw();
          D(A, I);
        }, $ = (A) => {
          var I = e_();
          D(A, I);
        };
        ae(b, (A) => {
          u(r) === "show" ? A(P) : A($, !1);
        });
      }
      D(_, E);
    },
    $$slots: { default: !0 }
  }), R(c), Ce(() => {
    Dt(c, 1, `tf-toolbar ${u(r) ?? ""}`), ht(m, `display: ${u(n) === "base" ? "flex" : "none"}`), ht(y, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), D(e, c), de();
}
se(cf, {}, [], [], !0);
const n_ = () => ({ getNode: (t) => He.getNode(t) }), r_ = () => ({ ensureParentInNodesBefore: (t, n) => {
  He.updateNodes((r) => {
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
} }), o_ = () => ({ getEdgesByTarget: (t) => He.getEdges().filter((r) => r.target === t) });
var i_ = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), s_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), a_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), l_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), c_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), u_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), d_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), f_ = /* @__PURE__ */ ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), h_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), g_ = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const v_ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function uf(e, t) {
  ue(t, !0), ze(e, v_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ge(), { addParameter: i } = an(), s = st(), { updateNodeData: a } = s, l = (_) => {
    a(o, _);
  }, c = (_, k) => {
    l({ [_]: k.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), g = Qn().customNodes[t.type];
  g.render?.(h, d, s);
  const m = g.forms;
  let y;
  Xe(() => {
    n().expand && y && y.append(h);
  }), Xe(() => {
    n() && g.onUpdate?.(h, { ...d, data: n() });
  }), Xe(() => {
    !n().parameters && g.parameters && l({
      parameters: po(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), Xe(() => {
    !n().outputDefs && g.outputDefs && l({
      outputDefs: po(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(_) {
      n(_), v();
    }
  };
  {
    const _ = (E) => {
      var b = Se(), P = ie(b);
      Us(P, () => g.icon), D(E, b);
    };
    let k = /* @__PURE__ */ N(() => ({ ...n(), description: g.description }));
    qt(e, Ke(
      {
        get data() {
          return u(k);
        }
      },
      () => r,
      {
        icon: _,
        children: (E, b) => {
          var P = g_(), $ = ie(P);
          {
            var A = (T) => {
              var x = s_(), C = ie(x), O = B(C);
              De(O, {
                level: 3,
                children: (M, j) => {
                  pe();
                  var X = ke("输入参数");
                  D(M, X);
                },
                $$slots: { default: !0 }
              });
              var H = L(O, 2);
              {
                var K = (M) => {
                  Te(M, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (j, X) => {
                      var Q = i_();
                      D(j, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(H, (M) => {
                  g.parametersAddEnable !== !1 && M(K);
                });
              }
              R(C);
              var W = L(C, 2);
              bt(W, {}), D(T, x);
            };
            ae($, (T) => {
              g.parametersEnable !== !1 && T(A);
            });
          }
          var I = L($, 2);
          {
            var V = (T) => {
              var x = Se(), C = ie(x);
              yt(C, 17, () => m, Or, (O, H) => {
                var K = Se(), W = ie(K);
                {
                  var M = (X) => {
                    var Q = a_(), q = ie(Q), F = B(q, !0);
                    R(q);
                    var U = L(q, 2), G = B(U);
                    {
                      let ne = /* @__PURE__ */ N(() => n()[u(H).name] || u(H).defaultValue);
                      Ue(G, Ke(
                        {
                          get placeholder() {
                            return u(H).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(ne);
                          }
                        },
                        () => u(H).attrs,
                        {
                          onchange: (ee) => {
                            c(u(H).name, ee);
                          }
                        }
                      ));
                    }
                    R(U), Ce(() => Fe(F, u(H).label)), D(X, Q);
                  }, j = (X) => {
                    var Q = Se(), q = ie(Q);
                    {
                      var F = (G) => {
                        var ne = l_(), ee = ie(ne), ye = B(ee, !0);
                        R(ee);
                        var oe = L(ee, 2), le = B(oe);
                        {
                          let re = /* @__PURE__ */ N(() => n()[u(H).name] || u(H).defaultValue);
                          Be(le, Ke(
                            {
                              rows: 3,
                              get placeholder() {
                                return u(H).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return u(re);
                              }
                            },
                            () => u(H).attrs,
                            {
                              onchange: (fe) => {
                                c(u(H).name, fe);
                              }
                            }
                          ));
                        }
                        R(oe), Ce(() => Fe(ye, u(H).label)), D(G, ne);
                      }, U = (G) => {
                        var ne = Se(), ee = ie(ne);
                        {
                          var ye = (le) => {
                            var re = c_(), fe = ie(re), he = B(fe, !0);
                            R(fe);
                            var we = L(fe, 2), ce = B(we), _e = B(ce), Ae = B(_e);
                            R(_e);
                            var Y = L(_e, 2), We = (Oe) => l({ [u(H).name]: parseFloat(Oe.target.value) });
                            et(
                              Y,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...u(H).attrs,
                                value: n()[u(H).name] ?? u(H).defaultValue,
                                oninput: We
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), R(ce), R(we), Ce(() => {
                              Fe(he, u(H).label), Fe(Ae, `${u(H).description ?? ""}: ${n()[u(H).name] ?? u(H).defaultValue ?? ""}`);
                            }), D(le, re);
                          }, oe = (le) => {
                            var re = Se(), fe = ie(re);
                            {
                              var he = (ce) => {
                                var _e = u_(), Ae = ie(_e), Y = B(Ae, !0);
                                R(Ae);
                                var We = L(Ae, 2), Oe = B(We);
                                {
                                  let Ie = /* @__PURE__ */ N(() => u(H).options || []), Ve = /* @__PURE__ */ N(() => n()[u(H).name] ? [n()[u(H).name]] : [u(H).defaultValue]);
                                  dt(Oe, {
                                    get items() {
                                      return u(Ie);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(H).placeholder;
                                    },
                                    onSelect: (at) => {
                                      const tt = at.value;
                                      l({ [u(H).name]: tt });
                                    },
                                    get value() {
                                      return u(Ve);
                                    }
                                  });
                                }
                                R(We), Ce(() => Fe(Y, u(H).label)), D(ce, _e);
                              }, we = (ce) => {
                                var _e = Se(), Ae = ie(_e);
                                {
                                  var Y = (Oe) => {
                                    var Ie = d_(), Ve = ie(Ie), at = B(Ve, !0);
                                    R(Ve);
                                    var tt = L(Ve, 2), Rt = B(tt);
                                    {
                                      let nt = /* @__PURE__ */ N(() => u(H).chosen?.buttonText);
                                      Pd(Rt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(H).placeholder;
                                        },
                                        get buttonText() {
                                          return u(nt);
                                        },
                                        onChosen: (Ot, ve, qe) => {
                                          u(H).chosen?.onChosen?.(l, Ot, ve, qe);
                                        },
                                        get value() {
                                          return n()[u(H).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(H).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    R(tt), Ce(() => Fe(at, u(H).label)), D(Oe, Ie);
                                  }, We = (Oe) => {
                                    var Ie = Se(), Ve = ie(Ie);
                                    {
                                      var at = (tt) => {
                                        De(tt, Ke({ level: 3, mt: "10px" }, () => u(H).attrs, {
                                          children: (Rt, nt) => {
                                            pe();
                                            var Ot = ke();
                                            Ce(() => Fe(Ot, u(H).label)), D(Rt, Ot);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        Ve,
                                        (tt) => {
                                          u(H).type === "heading" && tt(at);
                                        },
                                        !0
                                      );
                                    }
                                    D(Oe, Ie);
                                  };
                                  ae(
                                    Ae,
                                    (Oe) => {
                                      u(H).type === "chosen" ? Oe(Y) : Oe(We, !1);
                                    },
                                    !0
                                  );
                                }
                                D(ce, _e);
                              };
                              ae(
                                fe,
                                (ce) => {
                                  u(H).type === "select" ? ce(he) : ce(we, !1);
                                },
                                !0
                              );
                            }
                            D(le, re);
                          };
                          ae(
                            ee,
                            (le) => {
                              u(H).type === "slider" ? le(ye) : le(oe, !1);
                            },
                            !0
                          );
                        }
                        D(G, ne);
                      };
                      ae(
                        q,
                        (G) => {
                          u(H).type === "textarea" ? G(F) : G(U, !1);
                        },
                        !0
                      );
                    }
                    D(X, Q);
                  };
                  ae(W, (X) => {
                    u(H).type === "input" ? X(M) : X(j, !1);
                  });
                }
                D(O, K);
              }), D(T, x);
            };
            ae(I, (T) => {
              m && T(V);
            });
          }
          var Z = L(I, 2);
          At(Z, (T) => y = T, () => y);
          var z = L(Z, 2);
          {
            var S = (T) => {
              var x = h_(), C = ie(x), O = B(C);
              De(O, {
                level: 3,
                mt: "10px",
                children: (M, j) => {
                  pe();
                  var X = ke("输出参数");
                  D(M, X);
                },
                $$slots: { default: !0 }
              });
              var H = L(O, 2);
              {
                var K = (M) => {
                  Te(M, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (j, X) => {
                      var Q = f_();
                      D(j, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(H, (M) => {
                  g.outputDefsAddEnable !== !1 && M(K);
                });
              }
              R(C);
              var W = L(C, 2);
              Bn(W, {}), D(T, x);
            };
            ae(z, (T) => {
              g.outputDefsEnable !== !1 && T(S);
            });
          }
          Ce(() => {
            ht(Z, g.rootStyle || ""), Dt(Z, 1, In(g.rootClass), "svelte-qt4m0r");
          }), D(E, P);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return de(w);
}
se(uf, { data: {} }, [], [], !0);
const p_ = () => ({ updateEdgeData: (t, n, r) => {
  const o = He.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, He.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), m_ = () => ({ deleteEdge: (t) => {
  He.removeEdge(t);
} }), y_ = () => {
  const e = (n, r) => r.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (o) => o.source === n && o.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (n) => {
    const r = He.getEdges(), o = [];
    let i = e(n, r);
    for (; i.length > 0; ) {
      const s = [];
      i.forEach((a) => {
        o.push(He.getNode(a.target)), s.push(...e(a.target, r));
      }), i = s;
    }
    return o;
  } };
}, w_ = () => ({ getNodeRelativePosition: (t) => {
  let n = He.getNode(t);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = He.getNode(n.parentId) : n = void 0;
  return r;
} });
function __(e) {
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
function x_(e) {
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
function b_(e) {
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
function Ms(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Ms(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Ms(e[r], t));
    return n;
  }
  return e;
}
const C_ = () => (st(), { copyHandler: async (n) => {
  const r = He.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = He.getEdges().filter((d) => r.some((h) => h.id === d.source) && r.some((h) => h.id === d.target)), s = r.map(__), a = i.map(b_), c = JSON.stringify({
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
  const i = x_(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), l = [];
  for (const d of i) {
    const h = `node_${On()}`;
    a.set(d.id, h);
  }
  for (const d of i) {
    const h = a.get(d.id), f = d.parentId !== void 0 ? a.get(d.parentId) : void 0, g = Ms(d.data, a);
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
      id: `edge_${On()}`,
      source: h,
      target: f
    });
  }
  He.updateNodes((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...l]), He.updateEdges((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...c]);
} }), Dl = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var k_ = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), E_ = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), S_ = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const N_ = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function df(e, t) {
  ue(t, !0), ze(e, N_);
  const n = p(t, "onInit", 7), r = /* @__PURE__ */ Re(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = st();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Ne(!1), s = /* @__PURE__ */ Ne(null);
  const { updateEdgeData: a } = p_(), l = (X) => {
    X.preventDefault(), X.dataTransfer && (X.dataTransfer.dropEffect = "move");
  }, c = (X) => {
    X.preventDefault();
    const Q = o.screenToFlowPosition({ x: X.clientX - 250, y: X.clientY - 100 }), q = X.dataTransfer?.getData("application/tinyflow");
    if (!q)
      return;
    const F = JSON.parse(q), U = { id: `node_${On()}`, position: Q, data: {}, ...F };
    He.addNode(U), He.selectNodeOnly(U.id);
  }, { getNode: d } = n_(), h = (X) => {
    const Q = d(X.source), q = d(X.target);
    if (X.sourceHandle === "loop_handle" || Q.parentId) {
      const F = o.getEdges();
      for (let U of F)
        if (U.target === X.target) {
          const G = d(U.source);
          if (X.sourceHandle === "loop_handle" && G.parentId !== Q.id || Q.parentId && G.parentId !== Q.parentId)
            return !1;
        }
    }
    return !(!Q.parentId && q.parentId && q.parentId !== Q.id);
  }, { getNodesFromSource: f } = y_(), { getNodeRelativePosition: g } = w_(), { ensureParentInNodesBefore: m } = r_(), y = (X, Q) => {
    if (!Q.isValid)
      return;
    const q = Q.toNode;
    if (q.parentId)
      return;
    const F = Q.fromNode, U = Q.fromHandle, G = { position: { ...q.position } };
    if (U.id === "loop_handle" ? G.parentId = F.id : F.parentId && (G.parentId = F.parentId), G.parentId) {
      const { x: ne, y: ee } = g(G.parentId);
      G.position = { x: q.position.x - ne, y: q.position.y - ee }, o.updateNode(q.id, G), f(q.id).forEach((oe) => {
        o.updateNode(oe.id, {
          parentId: G.parentId,
          position: { x: oe.position.x - ne, y: oe.position.y - ee }
        });
      }), m(G.parentId, q.id);
    }
    setTimeout(() => {
      He.getEdges().forEach((ne) => {
        ne.target === q.id && ne.source == F.id && (J(i, !0), J(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: w } = o_(), _ = (X) => {
    X.edges.forEach((q) => {
      q.id === u(s)?.id && (J(s, null), J(i, !1));
      const F = d(q.target);
      if (F && F.parentId) {
        const U = w(q.target), { x: G, y: ne } = g(F.parentId);
        if (U.length === 0)
          o.updateNode(F.id, {
            parentId: void 0,
            position: { x: F.position.x + G, y: F.position.y + ne }
          }), f(F.id).forEach((ye) => {
            o.updateNode(ye.id, {
              parentId: void 0,
              position: { x: ye.position.x + G, y: ye.position.y + ne }
            });
          });
        else {
          let ee = !1;
          for (let ye = 0; ye < U.length; ye++) {
            const oe = U[ye], le = d(oe.source);
            if (le.parentId || le.type === "loopNode") {
              ee = !0;
              break;
            }
          }
          ee || (o.updateNode(F.id, {
            parentId: void 0,
            position: { x: F.position.x + G, y: F.position.y + ne }
          }), f(F.id).forEach((oe) => {
            o.updateNode(oe.id, {
              parentId: void 0,
              position: { x: oe.position.x + G, y: oe.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: k } = m_(), E = (X, Q) => {
  }, b = (X) => {
  }, { copyHandler: P, pasteHandler: $ } = C_(), A = (X) => {
    Dl() || ((X.ctrlKey || X.metaKey) && X.key === "c" && (X.preventDefault(), P(X)), (X.ctrlKey || X.metaKey) && X.key === "a" && (X.preventDefault(), He.updateNodes((Q) => Q.map((q) => ({ ...q, selected: !0 }))), He.updateEdges((Q) => Q.map((q) => ({ ...q, selected: !0 })))));
  }, I = async (X) => {
    Dl() || $(X);
  };
  Vn(() => {
    window.addEventListener("keydown", A), window.addEventListener("paste", I);
  }), Co(() => {
    window.removeEventListener("keydown", A), window.removeEventListener("paste", I);
  });
  const V = {
    // ...nodeTypes
  }, Z = Qn().customNodes;
  if (Z)
    for (let X of Object.keys(Z))
      V[X] = uf;
  const z = Qn().onDataChange;
  Xe(() => {
    z?.({
      nodes: He.getNodes(),
      edges: He.getEdges(),
      viewport: He.getViewport()
    });
  });
  var S = {
    get onInit() {
      return n();
    },
    set onInit(X) {
      n(X), v();
    }
  }, T = S_(), x = B(T), C = He.getNodes, O = He.setNodes, H = He.getEdges, K = He.setEdges, W = He.getViewport, M = He.setViewport;
  {
    let X = /* @__PURE__ */ N(() => ({ ...Uw, ...V })), Q = /* @__PURE__ */ N(() => ({
      markerEnd: { type: uo.ArrowClosed, width: 20, height: 20 }
    }));
    hd(x, {
      get nodeTypes() {
        return u(X);
      },
      get nodes() {
        return C();
      },
      set nodes(q) {
        O(q);
      },
      get edges() {
        return H();
      },
      set edges(q) {
        K(q);
      },
      get viewport() {
        return W();
      },
      set viewport(q) {
        M(q);
      },
      class: "tinyflow-logo",
      ondrop: c,
      ondragover: l,
      isValidConnection: h,
      onconnectend: y,
      onconnectstart: E,
      onconnect: b,
      connectionRadius: 50,
      onedgeclick: (q) => {
        J(i, !0), J(s, q.edge, !0);
      },
      onbeforeconnect: (q) => ({ ...q, id: On() }),
      ondelete: _,
      onclick: (q) => {
        const F = q.target;
        F.classList.contains("svelte-flow__edge-interaction") || F.classList.contains("panel-content") || F.closest(".panel-content") || (J(i, !1), J(s, null));
      },
      get defaultEdgeOptions() {
        return u(Q);
      },
      children: (q, F) => {
        var U = E_(), G = ie(U);
        Cd(G, {});
        var ne = L(G, 2);
        _d(ne, {});
        var ee = L(ne, 2);
        Ed(ee, {});
        var ye = L(ee, 2);
        {
          var oe = (le) => {
            Do(le, {
              children: (re, fe) => {
                var he = k_(), we = L(B(he), 4), ce = B(we);
                {
                  let We = /* @__PURE__ */ N(() => u(s)?.data?.condition);
                  Be(ce, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return u(We);
                    },
                    onchange: (Oe) => {
                      u(s) && a(u(s).id, { condition: Oe.target?.value });
                    }
                  });
                }
                R(we);
                var _e = L(we, 2), Ae = B(_e);
                Te(Ae, {
                  onclick: () => {
                    k(u(s)?.id), J(i, !1);
                  },
                  children: (We, Oe) => {
                    pe();
                    var Ie = ke("删除");
                    D(We, Ie);
                  },
                  $$slots: { default: !0 }
                });
                var Y = L(Ae, 2);
                Te(Y, {
                  primary: !0,
                  onclick: () => {
                    J(i, !1);
                  },
                  children: (We, Oe) => {
                    pe();
                    var Ie = ke("保存");
                    D(We, Ie);
                  },
                  $$slots: { default: !0 }
                }), R(_e), R(he), D(re, he);
              },
              $$slots: { default: !0 }
            });
          };
          ae(ye, (le) => {
            u(i) && le(oe);
          });
        }
        D(q, U);
      },
      $$slots: { default: !0 }
    });
  }
  var j = L(x, 2);
  return cf(j, {}), R(T), D(e, T), de(S);
}
se(df, { onInit: {} }, [], [], !0);
function P_(e, t) {
  ue(t, !0);
  const n = p(t, "options", 7), r = p(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  He.init(o?.nodes || [], o?.edges || []), Dr("tinyflow_options", n());
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
  return gd(e, {
    children: (s, a) => {
      df(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), de(i);
}
customElements.define("tinyflow-component", se(P_, { options: {}, onInit: {} }, [], [], !1));
export {
  T_ as Tinyflow
};
//# sourceMappingURL=index.js.map
