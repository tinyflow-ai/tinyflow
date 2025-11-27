const ff = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ff);
const Dl = 1, Al = 2, Ol = 4, hf = 8, gf = 16, vf = 1, pf = 2, Ml = 4, mf = 8, yf = 16, Hl = 1, wf = 2, Ll = "[", yi = "[!", As = "]", lr = {}, at = Symbol(), _f = "http://www.w3.org/1999/xhtml", xf = "http://www.w3.org/2000/svg", bf = "@attach", rs = !1;
var wi = Array.isArray, Cf = Array.prototype.indexOf, Os = Array.from, Go = Object.keys, Uo = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, Vl = Object.getOwnPropertyDescriptors, Il = Object.prototype, kf = Array.prototype, _i = Object.getPrototypeOf, wa = Object.isExtensible;
function Kr(e) {
  return typeof e == "function";
}
const vt = () => {
};
function Ef(e) {
  return e();
}
function os(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function zl() {
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
const ut = 2, Ms = 4, xi = 8, Rl = 1 << 24, $n = 16, Tn = 32, jn = 64, bi = 128, Ut = 512, ht = 1024, Nt = 2048, Dn = 4096, Ot = 8192, Cn = 16384, Ci = 32768, En = 65536, _a = 1 << 17, Bl = 1 << 18, vr = 1 << 19, Fl = 1 << 20, cr = 32768, is = 1 << 21, Hs = 1 << 22, Bn = 1 << 23, un = Symbol("$state"), Ls = Symbol("legacy props"), Sf = Symbol(""), _r = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Nf = 1, ki = 3, pr = 8;
function Vs(e) {
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
function vo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function zf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Rf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let xe = !1;
function At(e) {
  xe = e;
}
let Ne;
function Qe(e) {
  if (e === null)
    throw vo(), lr;
  return Ne = e;
}
function Sn() {
  return Qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ en(Ne)
  );
}
function R(e) {
  if (xe) {
    if (/* @__PURE__ */ en(Ne) !== null)
      throw vo(), lr;
    Ne = e;
  }
}
function pe(e = 1) {
  if (xe) {
    for (var t = e, n = Ne; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ en(n);
    Ne = n;
  }
}
function Jo(e = !0) {
  for (var t = 0, n = Ne; ; ) {
    if (n.nodeType === pr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === As) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ll || r === yi) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ en(n)
    );
    e && n.remove(), n = o;
  }
}
function Kl(e) {
  if (!e || e.nodeType !== pr)
    throw vo(), lr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Zl(e) {
  return e === this.v;
}
function Yl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Wl(e) {
  return !Yl(e, this.v);
}
let zr = !1, Bf = !1;
function Ff() {
  zr = !0;
}
const Kf = [];
function Xl(e, t = !1, n = !1) {
  return Fo(e, /* @__PURE__ */ new Map(), "", Kf, null, n);
}
function Fo(e, t, n, r, o = null, i = !1) {
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
        var c = e[l];
        l in e && (a[l] = Fo(c, t, n, r, null, i));
      }
      return a;
    }
    if (_i(e) === Il) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Fo(
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
      return Fo(
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
function Nr(e) {
  Ze = e;
}
function Zn(e) {
  return (
    /** @type {T} */
    ql().get(e)
  );
}
function Pr(e, t) {
  return ql().set(e, t), t;
}
function ue(e, t = !1, n) {
  Ze = {
    p: Ze,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: zr && !t ? { s: null, u: null, $: [] } : null
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
      fc(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, Ze = t.p, e ?? /** @type {T} */
  {};
}
function po() {
  return !zr || Ze !== null && Ze.l === null;
}
function ql(e) {
  return Ze === null && Vs(), Ze.c ??= new Map(Zf(Ze) || void 0);
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
let tr = [];
function jl() {
  var e = tr;
  tr = [], os(e);
}
function Gn(e) {
  if (tr.length === 0 && !Gr) {
    var t = tr;
    queueMicrotask(() => {
      t === tr && jl();
    });
  }
  tr.push(e);
}
function Yf() {
  for (; tr.length > 0; )
    jl();
}
function Gl(e) {
  var t = Pe;
  if (t === null)
    return Me.f |= Bn, e;
  if ((t.f & Ci) === 0) {
    if ((t.f & bi) === 0)
      throw e;
    t.b.error(e);
  } else
    $r(e, t);
}
function $r(e, t) {
  for (; t !== null; ) {
    if ((t.f & bi) !== 0)
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
const Mo = /* @__PURE__ */ new Set();
let We = null, zt = null, It = [], Ei = null, ss = !1, Gr = !1;
class jt {
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
    It = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects)) : (We = null, xa(n.render_effects), xa(n.effects), this.#l?.resolve()), zt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= ht;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Tn | jn)) !== 0, s = i && (o & ht) !== 0, a = s || (o & Ot) !== 0 || this.skipped_effects.has(r);
      if ((r.f & bi) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= ht : (o & Ms) !== 0 ? n.effects.push(r) : wo(r) && ((r.f & $n) !== 0 && n.block_effects.push(r), to(r));
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
      ((n.f & Nt) !== 0 ? this.#i : this.#o).push(n), this.#c(n.deps), gt(n, ht);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & ut) === 0 || (n.f & cr) === 0 || (n.f ^= cr, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Bn) === 0 && (this.current.set(t, t.v), zt?.set(t, t.v));
  }
  activate() {
    We = this, this.apply();
  }
  deactivate() {
    We === this && (We = null, zt = null);
  }
  flush() {
    if (this.activate(), It.length > 0) {
      if (Ul(), We !== null && We !== this)
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
    if (Mo.size > 1) {
      this.previous.clear();
      var t = zt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Mo) {
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
          var o = It;
          It = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            Jl(d, a, l, c);
          if (It.length > 0) {
            We = i, i.apply();
            for (const d of It)
              i.#s(d, r);
            i.deactivate();
          }
          It = o;
        }
      }
      We = null, zt = t;
    }
    this.committed = !0, Mo.delete(this);
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
      gt(t, Nt), ur(t);
    for (const t of this.#o)
      gt(t, Dn), ur(t);
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
    return (this.#l ??= zl()).promise;
  }
  static ensure() {
    if (We === null) {
      const t = We = new jt();
      Mo.add(We), Gr || jt.enqueue(() => {
        We === t && t.flush();
      });
    }
    return We;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Gn(t);
  }
  apply() {
  }
}
function v(e) {
  var t = Gr;
  Gr = !0;
  try {
    for (var n; ; ) {
      if (Yf(), It.length === 0 && (We?.flush(), It.length === 0))
        return Ei = null, /** @type {T} */
        n;
      Ul();
    }
  } finally {
    Gr = t;
  }
}
function Ul() {
  var e = Kn;
  ss = !0;
  var t = null;
  try {
    var n = 0;
    for (ei(!0); It.length > 0; ) {
      var r = jt.ensure();
      if (n++ > 1e3) {
        var o, i;
        Wf();
      }
      r.process(It), Fn.clear();
    }
  } finally {
    ss = !1, ei(e), Ei = null;
  }
}
function Wf() {
  try {
    Af();
  } catch (e) {
    $r(e, Ei);
  }
}
let mn = null;
function xa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Cn | Ot)) === 0 && wo(r) && (mn = /* @__PURE__ */ new Set(), to(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? yc(r) : r.fn = null), mn?.size > 0)) {
        Fn.clear();
        for (const o of mn) {
          if ((o.f & (Cn | Ot)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            mn.has(s) && (mn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Cn | Ot)) === 0 && to(l);
          }
        }
        mn.clear();
      }
    }
    mn = null;
  }
}
function Jl(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & ut) !== 0 ? Jl(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Hs | $n)) !== 0 && (i & Nt) === 0 && Ql(o, t, r) && (gt(o, Nt), ur(
        /** @type {Effect} */
        o
      ));
    }
}
function Ql(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & ut) !== 0 && Ql(
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
function ur(e) {
  for (var t = Ei = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ss && t === Pe && (n & $n) !== 0 && (n & Bl) === 0)
      return;
    if ((n & (jn | Tn)) !== 0) {
      if ((n & ht) === 0) return;
      t.f ^= ht;
    }
  }
  It.push(t);
}
function ec(e) {
  let t = 0, n = Yn(0), r;
  return () => {
    Qr() && (u(n), yo(() => (t === 0 && (r = lt(() => e(() => Ur(n)))), t += 1, () => {
      Gn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ur(n));
      });
    })));
  };
}
var Xf = En | vr | bi;
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
  #n = xe ? Ne : null;
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
  #w = ec(() => (this.#h = Yn(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    Pe.b, this.#t = !!this.#r.pending, this.#i = Br(() => {
      if (Pe.b = this, xe) {
        const i = this.#n;
        Sn(), /** @type {Comment} */
        i.nodeType === pr && /** @type {Comment} */
        i.data === yi ? this.#x() : this.#_();
      } else {
        var o = this.#m();
        try {
          this.#o = Ct(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Xf), xe && (this.#e = Ne);
  }
  #_() {
    try {
      this.#o = Ct(() => this.#l(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#s = Ct(() => t(this.#e)), jt.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (jt.ensure(), Ct(() => this.#l(n)))), this.#f > 0 ? this.#p() : (br(
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
    return this.#t && (this.#u = _t(), this.#e.before(this.#u), t = this.#u), t;
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
    var n = Pe, r = Me, o = Ze;
    Ft(this.#i), kt(this.#i), Nr(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return Gl(i), null;
    } finally {
      Ft(n), kt(r), Nr(o);
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
    ), xc(this.#o, this.#c)), this.#s === null && (this.#s = Ct(() => t(this.#e)));
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
    this.#f += t, this.#f === 0 && (this.#t = !1, this.#s && br(this.#s, () => {
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
    this.#y(t), this.#d += t, this.#h && Dr(this.#h, this.#d);
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
    this.#o && (nt(this.#o), this.#o = null), this.#s && (nt(this.#s), this.#s = null), this.#a && (nt(this.#a), this.#a = null), xe && (Qe(
      /** @type {TemplateNode} */
      this.#n
    ), pe(), Qe(Jo()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Rf();
        return;
      }
      o = !0, i && If(), jt.ensure(), this.#d = 0, this.#a !== null && br(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, Ct(() => this.#l(this.#e)))), this.#f > 0 ? this.#p() : this.#t = !1;
    };
    var a = Me;
    try {
      kt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      $r(l, this.#i && this.#i.parent);
    } finally {
      kt(a);
    }
    r && Gn(() => {
      this.#a = this.#v(() => {
        jt.ensure(), this.#g = !0;
        try {
          return Ct(() => {
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
            this.#i.parent
          ), null;
        } finally {
          this.#g = !1;
        }
      });
    });
  }
}
function Tr(e, t) {
  return t;
}
function Gf(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    Ks(t[i].e, r, !0);
  wc(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      Rs(l), l.append(a), e.items.clear(), Wt(e, t[0].prev, t[o - 1].next);
    }
    for (var c = 0; c < o; c++) {
      var d = t[c];
      s || (e.items.delete(d.k), Wt(e, d.prev, d.next)), nt(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function pt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, c = (t & Ol) !== 0, d = (t & Dl) !== 0, h = (t & Al) !== 0;
  if (c) {
    var f = (
      /** @type {Element} */
      e
    );
    s = xe ? Qe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ et(f)
    ) : f.appendChild(_t());
  }
  xe && Sn();
  var g = null, m = /* @__PURE__ */ Is(() => {
    var b = n();
    return wi(b) ? b : b == null ? [] : Os(b);
  }), y, _ = !0;
  function w() {
    Uf(E, y, s, t, r), g !== null && (y.length === 0 ? (g.fragment ? (s.before(g.fragment), g.fragment = null) : Zs(g.effect), k.first = g.effect) : br(g.effect, () => {
      g = null;
    }));
  }
  var k = Br(() => {
    y = /** @type {V[]} */
    u(m);
    var b = y.length;
    let N = !1;
    if (xe) {
      var $ = Kl(s) === yi;
      $ !== (b === 0) && (s = Jo(), Qe(s), At(!1), N = !0);
    }
    for (var O = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      We
    ), V = null, Z = uc(), z = 0; z < b; z += 1) {
      xe && Ne.nodeType === pr && /** @type {Comment} */
      Ne.data === As && (s = /** @type {Comment} */
      Ne, N = !0, At(!1));
      var S = y[z], T = r(S, z), x = _ ? null : a.get(T);
      x ? (d && Dr(x.v, S), h ? Dr(
        /** @type {Value<number>} */
        x.i,
        z
      ) : x.i = z, Z && I.skipped_effects.delete(x.e)) : (x = Jf(
        _ ? s : null,
        V,
        S,
        T,
        z,
        o,
        t,
        n
      ), _ && (x.o = !0, V === null ? l = x : V.next = x, V = x), a.set(T, x)), O.add(T);
    }
    if (b === 0 && i && !g)
      if (_)
        g = {
          fragment: null,
          effect: Ct(() => i(s))
        };
      else {
        var C = document.createDocumentFragment(), A = _t();
        C.append(A), g = {
          fragment: C,
          effect: Ct(() => i(A))
        };
      }
    if (xe && b > 0 && Qe(Jo()), !_)
      if (Z) {
        for (const [H, K] of a)
          O.has(H) || I.skipped_effects.add(K.e);
        I.oncommit(w), I.ondiscard(() => {
        });
      } else
        w();
    N && At(!0), u(m);
  }), E = { effect: k, items: a, first: l };
  _ = !1, xe && (s = Ne);
}
function Uf(e, t, n, r, o) {
  var i = (r & hf) !== 0, s = t.length, a = e.items, l = e.first, c, d = null, h, f = [], g = [], m, y, _, w;
  if (i)
    for (w = 0; w < s; w += 1)
      m = t[w], y = o(m, w), _ = /** @type {EachItem} */
      a.get(y), _.o && (_.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(_));
  for (w = 0; w < s; w += 1) {
    if (m = t[w], y = o(m, w), _ = /** @type {EachItem} */
    a.get(y), e.first ??= _, !_.o) {
      _.o = !0;
      var k = d ? d.next : l;
      Wt(e, d, _), Wt(e, _, k), Fi(_, k, n), d = _, f = [], g = [], l = d.next;
      continue;
    }
    if ((_.e.f & Ot) !== 0 && (Zs(_.e), i && (_.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(_))), _ !== l) {
      if (c !== void 0 && c.has(_)) {
        if (f.length < g.length) {
          var E = g[0], b;
          d = E.prev;
          var N = f[0], $ = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            Fi(f[b], E, n);
          for (b = 0; b < g.length; b += 1)
            c.delete(g[b]);
          Wt(e, N.prev, $.next), Wt(e, d, N), Wt(e, $, E), l = E, d = $, w -= 1, f = [], g = [];
        } else
          c.delete(_), Fi(_, l, n), Wt(e, _.prev, _.next), Wt(e, _, d === null ? e.first : d.next), Wt(e, d, _), d = _;
        continue;
      }
      for (f = [], g = []; l !== null && l.k !== y; )
        (l.e.f & Ot) === 0 && (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
      _ = l;
    }
    f.push(_), d = _, l = _.next;
  }
  let O = a.size > s;
  if (l !== null || c !== void 0) {
    for (var I = c === void 0 ? [] : Os(c); l !== null; )
      (l.e.f & Ot) === 0 && I.push(l), l = l.next;
    var V = I.length;
    if (O = a.size - V > s, V > 0) {
      var Z = (r & Ol) !== 0 && s === 0 ? n : null;
      if (i) {
        for (w = 0; w < V; w += 1)
          I[w].a?.measure();
        for (w = 0; w < V; w += 1)
          I[w].a?.fix();
      }
      Gf(e, I, Z);
    }
  }
  if (O)
    for (const z of a.values())
      z.o || (Wt(e, d, z), d = z);
  e.effect.last = d && d.e, i && Gn(() => {
    if (h !== void 0)
      for (_ of h)
        _.a?.apply();
  });
}
function Jf(e, t, n, r, o, i, s, a) {
  var l = (s & Dl) !== 0, c = (s & gf) === 0, d = l ? c ? /* @__PURE__ */ ic(n, !1, !1) : Yn(n) : n, h = (s & Al) === 0 ? o : Yn(o), f = {
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
      g.append(e = _t());
    }
    return f.e = Ct(() => i(
      /** @type {Node} */
      e,
      d,
      h,
      a
    )), t !== null && (t.next = f), f;
  } finally {
  }
}
function Fi(e, t, n) {
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
      /* @__PURE__ */ en(i)
    );
    o.before(i), i = s;
  }
}
function Wt(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function tc(e, t, n, r) {
  const o = po() ? mo : Is;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = We, s = (
    /** @type {Effect} */
    Pe
  ), a = Qf();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ eh(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (d) {
        (s.f & Cn) === 0 && $r(d, s);
      }
      i?.deactivate(), Qo();
    }).catch((c) => {
      $r(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Qo();
    }
  }) : l();
}
function Qf() {
  var e = Pe, t = Me, n = Ze, r = We;
  return function(i = !0) {
    Ft(e), kt(t), Nr(n), i && r?.activate();
  };
}
function Qo() {
  Ft(null), kt(null), Nr(null);
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  var t = ut | Nt, n = Me !== null && (Me.f & ut) !== 0 ? (
    /** @type {Derived} */
    Me
  ) : null;
  return Pe !== null && (Pe.f |= vr), {
    ctx: Ze,
    deps: null,
    effects: null,
    equals: Zl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      at
    ),
    wv: 0,
    parent: n ?? Pe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function eh(e, t) {
  let n = (
    /** @type {Effect | null} */
    Pe
  );
  n === null && Pf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Yn(
    /** @type {V} */
    at
  ), s = !Me, a = /* @__PURE__ */ new Map();
  return ch(() => {
    var l = zl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === We && c.committed && c.deactivate(), Qo();
      });
    } catch (f) {
      l.reject(f), Qo();
    }
    var c = (
      /** @type {Batch} */
      We
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(_r), a.delete(c), a.set(c, l);
    }
    const h = (f, g = void 0) => {
      if (c.activate(), g)
        g !== _r && (i.f |= Bn, Dr(i, g));
      else {
        (i.f & Bn) !== 0 && (i.f ^= Bn), Dr(i, f);
        for (const [m, y] of a) {
          if (a.delete(m), m === c) break;
          y.reject(_r);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), Si(() => {
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
function P(e) {
  const t = /* @__PURE__ */ mo(e);
  return bc(t), t;
}
// @__NO_SIDE_EFFECTS__
function Is(e) {
  const t = /* @__PURE__ */ mo(e);
  return t.equals = Wl, t;
}
function nc(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      nt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function th(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ut) === 0)
      return (t.f & Cn) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function zs(e) {
  var t, n = Pe;
  Ft(th(e));
  try {
    e.f &= ~cr, nc(e), t = Sc(e);
  } finally {
    Ft(n);
  }
  return t;
}
function rc(e) {
  var t = zs(e);
  if (e.equals(t) || (We?.is_fork || (e.v = t), e.wv = kc()), !mr)
    if (zt !== null)
      (Qr() || We?.is_fork) && zt.set(e, t);
    else {
      var n = (e.f & Ut) === 0 ? Dn : ht;
      gt(e, n);
    }
}
let as = /* @__PURE__ */ new Set();
const Fn = /* @__PURE__ */ new Map();
let oc = !1;
function Yn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  const n = Yn(e);
  return bc(n), n;
}
// @__NO_SIDE_EFFECTS__
function ic(e, t = !1, n = !0) {
  const r = Yn(e);
  return t || (r.equals = Wl), zr && n && Ze !== null && Ze.l !== null && (Ze.l.s ??= []).push(r), r;
}
function J(e, t, n = !1) {
  Me !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!cn || (Me.f & _a) !== 0) && po() && (Me.f & (ut | $n | Hs | _a)) !== 0 && !kn?.includes(e) && Vf();
  let r = n ? Bt(t) : t;
  return Dr(e, r);
}
function Dr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    mr ? Fn.set(e, t) : Fn.set(e, n), e.v = t;
    var r = jt.ensure();
    r.capture(e, n), (e.f & ut) !== 0 && ((e.f & Nt) !== 0 && zs(
      /** @type {Derived} */
      e
    ), gt(e, (e.f & Ut) !== 0 ? ht : Dn)), e.wv = kc(), sc(e, Nt), po() && Pe !== null && (Pe.f & ht) !== 0 && (Pe.f & (Tn | jn)) === 0 && (Vt === null ? dh([e]) : Vt.push(e)), !r.is_fork && as.size > 0 && !oc && nh();
  }
  return t;
}
function nh() {
  oc = !1;
  var e = Kn;
  ei(!0);
  const t = Array.from(as);
  try {
    for (const n of t)
      (n.f & ht) !== 0 && gt(n, Dn), wo(n) && to(n);
  } finally {
    ei(e);
  }
  as.clear();
}
function ba(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function Ur(e) {
  J(e, e.v + 1);
}
function sc(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = po(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Pe)) {
        var l = (a & Nt) === 0;
        if (l && gt(s, t), (a & ut) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          zt?.delete(c), (a & cr) === 0 && (a & Ut && (s.f |= cr), sc(c, Dn));
        } else l && ((a & $n) !== 0 && mn !== null && mn.add(
          /** @type {Effect} */
          s
        ), ur(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Bt(e) {
  if (typeof e != "object" || e === null || un in e)
    return e;
  const t = _i(e);
  if (t !== Il && t !== kf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = wi(e), o = /* @__PURE__ */ Se(0), i = or, s = (a) => {
    if (or === i)
      return a();
    var l = Me, c = or;
    kt(null), Sa(i);
    var d = a();
    return kt(l), Sa(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Se(
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
          var h = /* @__PURE__ */ Se(c.value);
          return n.set(l, h), h;
        }) : J(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Se(at));
            n.set(l, d), Ur(o);
          }
        } else
          J(c, at), Ur(o);
        return !0;
      },
      get(a, l, c) {
        if (l === un)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || bn(a, l)?.writable) && (d = s(() => {
          var g = Bt(h ? a[l] : at), m = /* @__PURE__ */ Se(g);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === at ? void 0 : f;
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
          if (h !== void 0 && f !== at)
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
        var c = n.get(l), d = c !== void 0 && c.v !== at || Reflect.has(a, l);
        if (c !== void 0 || Pe !== null && (!d || bn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? Bt(a[l]) : at, g = /* @__PURE__ */ Se(f);
            return g;
          }), n.set(l, c));
          var h = u(c);
          if (h === at)
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
            m !== void 0 ? J(m, at) : g in a && (m = s(() => /* @__PURE__ */ Se(at)), n.set(g + "", m));
          }
        if (h === void 0)
          (!f || bn(a, l)?.writable) && (h = s(() => /* @__PURE__ */ Se(void 0)), J(h, Bt(c)), n.set(l, h));
        else {
          f = h.v !== at;
          var y = s(() => Bt(c));
          J(h, y);
        }
        var _ = Reflect.getOwnPropertyDescriptor(a, l);
        if (_?.set && _.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= w.v && J(w, k + 1);
          }
          Ur(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== at;
        });
        for (var [c, d] of n)
          d.v !== at && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Lf();
      }
    }
  );
}
function Ca(e) {
  try {
    if (e !== null && typeof e == "object" && un in e)
      return e[un];
  } catch {
  }
  return e;
}
function rh(e, t) {
  return Object.is(Ca(e), Ca(t));
}
var bt, ac, lc, cc;
function ls() {
  if (bt === void 0) {
    bt = window, ac = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    lc = bn(t, "firstChild").get, cc = bn(t, "nextSibling").get, wa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), wa(n) && (n.__t = void 0);
  }
}
function _t(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return lc.call(e);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return cc.call(e);
}
function B(e, t) {
  if (!xe)
    return /* @__PURE__ */ et(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ et(Ne)
  );
  if (n === null)
    n = Ne.appendChild(_t());
  else if (t && n.nodeType !== ki) {
    var r = _t();
    return n?.before(r), Qe(r), r;
  }
  return Qe(n), n;
}
function ie(e, t = !1) {
  if (!xe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ et(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ en(n) : n;
  }
  if (t && Ne?.nodeType !== ki) {
    var r = _t();
    return Ne?.before(r), Qe(r), r;
  }
  return Ne;
}
function L(e, t = 1, n = !1) {
  let r = xe ? Ne : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ en(r);
  if (!xe)
    return r;
  if (n && r?.nodeType !== ki) {
    var i = _t();
    return r === null ? o?.after(i) : r.before(i), Qe(i), i;
  }
  return Qe(r), /** @type {TemplateNode} */
  r;
}
function Rs(e) {
  e.textContent = "";
}
function uc() {
  return !1;
}
function oh(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Gn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function ih(e) {
  xe && /* @__PURE__ */ et(e) !== null && Rs(e);
}
let ka = !1;
function sh() {
  ka || (ka = !0, document.addEventListener(
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
function Bs(e) {
  var t = Me, n = Pe;
  kt(null), Ft(null);
  try {
    return e();
  } finally {
    kt(t), Ft(n);
  }
}
function dc(e) {
  Pe === null && (Me === null && Df(), Tf()), mr && $f();
}
function ah(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Kt(e, t, n) {
  var r = Pe;
  r !== null && (r.f & Ot) !== 0 && (e |= Ot);
  var o = {
    ctx: Ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Nt | Ut,
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
      to(o), o.f |= Ci;
    } catch (a) {
      throw nt(o), a;
    }
  else t !== null && ur(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & vr) === 0 && (i = i.first, (e & $n) !== 0 && (e & En) !== 0 && i !== null && (i.f |= En)), i !== null && (i.parent = r, r !== null && ah(i, r), Me !== null && (Me.f & ut) !== 0 && (e & jn) === 0)) {
    var s = (
      /** @type {Derived} */
      Me
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Qr() {
  return Me !== null && !cn;
}
function Si(e) {
  const t = Kt(xi, null, !1);
  return gt(t, ht), t.teardown = e, t;
}
function je(e) {
  dc();
  var t = (
    /** @type {Effect} */
    Pe.f
  ), n = !Me && (t & Tn) !== 0 && (t & Ci) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ze
    );
    (r.e ??= []).push(e);
  } else
    return fc(e);
}
function fc(e) {
  return Kt(Ms | Fl, e, !1);
}
function hc(e) {
  return dc(), Kt(xi | Fl, e, !0);
}
function Fs(e) {
  jt.ensure();
  const t = Kt(jn | vr, e, !0);
  return () => {
    nt(t);
  };
}
function lh(e) {
  jt.ensure();
  const t = Kt(jn | vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? br(t, () => {
      nt(t), r(void 0);
    }) : (nt(t), r(void 0));
  });
}
function Rr(e) {
  return Kt(Ms, e, !1);
}
function ch(e) {
  return Kt(Hs | vr, e, !0);
}
function yo(e, t = 0) {
  return Kt(xi | t, e, !0);
}
function Ce(e, t = [], n = [], r = []) {
  tc(r, t, n, (o) => {
    Kt(xi, () => e(...o.map(u)), !0);
  });
}
function Br(e, t = 0) {
  var n = Kt($n | t, e, !0);
  return n;
}
function gc(e, t = 0) {
  var n = Kt(Rl | t, e, !0);
  return n;
}
function Ct(e) {
  return Kt(Tn | vr, e, !0);
}
function vc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = mr, r = Me;
    Ea(!0), kt(null);
    try {
      t.call(null);
    } finally {
      Ea(n), kt(r);
    }
  }
}
function pc(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Bs(() => {
      o.abort(_r);
    });
    var r = n.next;
    (n.f & jn) !== 0 ? n.parent = null : nt(n, t), n = r;
  }
}
function uh(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Tn) === 0 && nt(t), t = n;
  }
}
function nt(e, t = !0) {
  var n = !1;
  (t || (e.f & Bl) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (mc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), pc(e, t && !n), ti(e, 0), gt(e, Cn);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  vc(e);
  var o = e.parent;
  o !== null && o.first !== null && yc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function mc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ en(e)
    );
    e.remove(), e = n;
  }
}
function yc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function br(e, t, n = !0) {
  var r = [];
  Ks(e, r, !0), wc(r, () => {
    n && nt(e), t && t();
  });
}
function wc(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ks(e, t, n) {
  if ((e.f & Ot) === 0) {
    if (e.f ^= Ot, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & En) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Tn) !== 0 && (e.f & $n) !== 0;
      Ks(r, t, i ? n : !1), r = o;
    }
  }
}
function Zs(e) {
  _c(e, !0);
}
function _c(e, t) {
  if ((e.f & Ot) !== 0) {
    e.f ^= Ot, (e.f & ht) === 0 && (gt(e, Nt), ur(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & En) !== 0 || (n.f & Tn) !== 0;
      _c(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function xc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ en(n)
    );
    t.append(n), n = o;
  }
}
let Kn = !1;
function ei(e) {
  Kn = e;
}
let mr = !1;
function Ea(e) {
  mr = e;
}
let Me = null, cn = !1;
function kt(e) {
  Me = e;
}
let Pe = null;
function Ft(e) {
  Pe = e;
}
let kn = null;
function bc(e) {
  Me !== null && (kn === null ? kn = [e] : kn.push(e));
}
let yt = null, Dt = 0, Vt = null;
function dh(e) {
  Vt = e;
}
let Cc = 1, eo = 0, or = eo;
function Sa(e) {
  or = e;
}
function kc() {
  return ++Cc;
}
function wo(e) {
  var t = e.f;
  if ((t & Nt) !== 0)
    return !0;
  if (t & ut && (e.f &= ~cr), (t & Dn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (wo(
          /** @type {Derived} */
          i
        ) && rc(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & Ut) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    zt === null && gt(e, ht);
  }
  return !1;
}
function Ec(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !kn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & ut) !== 0 ? Ec(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? gt(i, Nt) : (i.f & ht) !== 0 && gt(i, Dn), ur(
        /** @type {Effect} */
        i
      ));
    }
}
function Sc(e) {
  var t = yt, n = Dt, r = Vt, o = Me, i = kn, s = Ze, a = cn, l = or, c = e.f;
  yt = /** @type {null | Value[]} */
  null, Dt = 0, Vt = null, Me = (c & (Tn | jn)) === 0 ? e : null, kn = null, Nr(e.ctx), cn = !1, or = ++eo, e.ac !== null && (Bs(() => {
    e.ac.abort(_r);
  }), e.ac = null);
  try {
    e.f |= is;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (yt !== null) {
      var g;
      if (ti(e, Dt), f !== null && Dt > 0)
        for (f.length = Dt + yt.length, g = 0; g < yt.length; g++)
          f[Dt + g] = yt[g];
      else
        e.deps = f = yt;
      if (Kn && Qr() && (e.f & Ut) !== 0)
        for (g = Dt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Dt < f.length && (ti(e, Dt), f.length = Dt);
    if (po() && Vt !== null && !cn && f !== null && (e.f & (ut | Dn | Nt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Vt.length; g++)
        Ec(
          Vt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (eo++, Vt !== null && (r === null ? r = Vt : r.push(.../** @type {Source[]} */
    Vt))), (e.f & Bn) !== 0 && (e.f ^= Bn), h;
  } catch (m) {
    return Gl(m);
  } finally {
    e.f ^= is, yt = t, Dt = n, Vt = r, Me = o, kn = i, Nr(s), cn = a, or = l;
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
  n === null && (t.f & ut) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (yt === null || !yt.includes(t)) && (gt(t, Dn), (t.f & Ut) !== 0 && (t.f ^= Ut, t.f &= ~cr), nc(
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
      fh(e, n[r]);
}
function to(e) {
  var t = e.f;
  if ((t & Cn) === 0) {
    gt(e, ht);
    var n = Pe, r = Kn;
    Pe = e, Kn = !0;
    try {
      (t & ($n | Rl)) !== 0 ? uh(e) : pc(e), vc(e);
      var o = Sc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Cc;
      var i;
      rs && Bf && (e.f & Nt) !== 0 && e.deps;
    } finally {
      Kn = r, Pe = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & ut) !== 0;
  if (Me !== null && !cn) {
    var r = Pe !== null && (Pe.f & Cn) !== 0;
    if (!r && !kn?.includes(e)) {
      var o = Me.deps;
      if ((Me.f & is) !== 0)
        e.rv < eo && (e.rv = eo, yt === null && o !== null && o[Dt] === e ? Dt++ : yt === null ? yt = [e] : yt.includes(e) || yt.push(e));
      else {
        (Me.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Me] : i.includes(Me) || i.push(Me);
      }
    }
  }
  if (mr) {
    if (Fn.has(e))
      return Fn.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & ht) === 0 && s.reactions !== null || Pc(s)) && (a = zs(s)), Fn.set(s, a), a;
    }
  } else n && (!zt?.has(e) || We?.is_fork && !Qr()) && (s = /** @type {Derived} */
  e, wo(s) && rc(s), Kn && Qr() && (s.f & Ut) === 0 && Nc(s));
  if (zt?.has(e))
    return zt.get(e);
  if ((e.f & Bn) !== 0)
    throw e.v;
  return e.v;
}
function Nc(e) {
  if (e.deps !== null) {
    e.f ^= Ut;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ut) !== 0 && (t.f & Ut) === 0 && Nc(
        /** @type {Derived} */
        t
      );
  }
}
function Pc(e) {
  if (e.v === at) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Fn.has(t) || (t.f & ut) !== 0 && Pc(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function lt(e) {
  var t = cn;
  try {
    return cn = !0, e();
  } finally {
    cn = t;
  }
}
const hh = -7169;
function gt(e, t) {
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
function Ys(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (un in e)
      cs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && un in n && cs(n);
      }
  }
}
function cs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        cs(e[r], t);
      } catch {
      }
    const n = _i(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Vl(n);
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
const $c = /* @__PURE__ */ new Set(), us = /* @__PURE__ */ new Set();
function Ws(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Wr.call(t, i), !i.cancelBubble)
      return Bs(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gn(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ds(e, t, n, r = {}) {
  var o = Ws(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ni(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Ws(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Si(() => {
    t.removeEventListener(e, s, i);
  });
}
function Un(e) {
  for (var t = 0; t < e.length; t++)
    $c.add(e[t]);
  for (var n of us)
    n(e);
}
let Na = null;
function Wr(e) {
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
    Uo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Me, h = Pe;
    kt(null), Ft(null);
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
        } catch (_) {
          f ? g.push(_) : f = _;
        }
        if (e.cancelBubble || m === t || m === null)
          break;
        i = m;
      }
      if (f) {
        for (let _ of g)
          queueMicrotask(() => {
            throw _;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, kt(d), Ft(h);
    }
  }
}
function Xs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function St(e, t) {
  var n = (
    /** @type {Effect} */
    Pe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & Hl) !== 0, r = (t & wf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (xe)
      return St(Ne, null), Ne;
    o === void 0 && (o = Xs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ et(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ac ? document.importNode(o, !0) : o.cloneNode(!0)
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
function vh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Hl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (xe)
      return St(Ne, null), Ne;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Xs(i)
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
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(c)
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
  return /* @__PURE__ */ vh(e, t, "svg");
}
function ke(e = "") {
  if (!xe) {
    var t = _t(e + "");
    return St(t, t), t;
  }
  var n = Ne;
  return n.nodeType !== ki && (n.before(n = _t()), Qe(n)), St(n, n), n;
}
function Ee() {
  if (xe)
    return St(Ne, null), Ne;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = _t();
  return e.append(t, n), St(t, n), e;
}
function D(e, t) {
  if (xe) {
    var n = (
      /** @type {Effect} */
      Pe
    );
    ((n.f & Ci) === 0 || n.nodes_end === null) && (n.nodes_end = Ne), Sn();
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
function Be(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Tc(e, t) {
  return Dc(e, t);
}
function Eh(e, t) {
  ls(), t.intro = t.intro ?? !1;
  const n = t.target, r = xe, o = Ne;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ et(n)
    ); i && (i.nodeType !== pr || /** @type {Comment} */
    i.data !== Ll); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ en(i);
    if (!i)
      throw lr;
    At(!0), Qe(
      /** @type {Comment} */
      i
    );
    const s = Dc(e, { ...t, anchor: i });
    return At(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== lr && console.warn("Failed to hydrate: ", s), t.recover === !1 && Of(), ls(), Rs(n), At(!1), Tc(e, t);
  } finally {
    At(r), Qe(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function Dc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ls();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var m = bh(g);
        t.addEventListener(g, Wr, { passive: m });
        var y = yr.get(g);
        y === void 0 ? (document.addEventListener(g, Wr, { passive: m }), yr.set(g, 1)) : yr.set(g, y + 1);
      }
    }
  };
  l(Os($c)), us.add(l);
  var c = void 0, d = lh(() => {
    var h = n ?? t.appendChild(_t());
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
        if (o && (r.$$events = o), xe && St(
          /** @type {TemplateNode} */
          f,
          null
        ), c = e(f, r) || {}, xe && (Pe.nodes_end = Ne, Ne === null || Ne.nodeType !== pr || /** @type {Comment} */
        Ne.data !== As))
          throw vo(), lr;
        i && de();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Wr);
        var g = (
          /** @type {number} */
          yr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Wr), yr.delete(f)) : yr.set(f, g);
      }
      us.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return fs.set(c, d), c;
}
let fs = /* @__PURE__ */ new WeakMap();
function Sh(e, t) {
  const n = fs.get(e);
  return n ? (fs.delete(e), n(t)) : Promise.resolve();
}
class Ni {
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
      We
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#e.get(n);
      if (r)
        Zs(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#e.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (nt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#e) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var c = document.createDocumentFragment();
            xc(s, c), c.append(_t()), this.#n.set(i, { effect: s, fragment: c });
          } else
            nt(s);
          this.#r.delete(i), this.#e.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), br(s, a, !1)) : a();
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
      n.includes(r) || (nt(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      We
    ), o = uc();
    if (n && !this.#e.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = _t();
        i.append(s), this.#n.set(t, {
          effect: Ct(() => n(s)),
          fragment: i
        });
      } else
        this.#e.set(
          t,
          Ct(() => n(this.anchor))
        );
    if (this.#t.set(r, t), o) {
      for (const [a, l] of this.#e)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#i), r.ondiscard(this.#o);
    } else
      xe && (this.anchor = Ne), this.#i();
  }
}
function Ge(e, t, ...n) {
  var r = new Ni(e);
  Br(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, En);
}
function An(e) {
  Ze === null && Vs(), zr && Ze.l !== null ? Nh(Ze).m.push(e) : je(() => {
    const t = lt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function _o(e) {
  Ze === null && Vs(), An(() => () => lt(e));
}
function Nh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function le(e, t, n = !1) {
  xe && Sn();
  var r = new Ni(e), o = n ? En : 0;
  function i(s, a) {
    if (xe) {
      const c = Kl(e) === yi;
      if (s === c) {
        var l = Jo();
        Qe(l), r.anchor = l, At(!1), r.ensure(s, a), At(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Br(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Ph(e, t) {
  xe && Qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ et(e)
  ), yo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function qs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ce(() => {
    var a = (
      /** @type {Effect} */
      Pe
    );
    if (s === (s = t() ?? "")) {
      xe && Sn();
      return;
    }
    if (a.nodes_start !== null && (mc(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (xe) {
        Ne.data;
        for (var l = Sn(), c = l; l !== null && (l.nodeType !== pr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ en(l);
        if (l === null)
          throw vo(), lr;
        St(Ne, c), i = Qe(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Xs(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ et(h)), St(
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ et(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ et(h)
          );
      else
        i.before(h);
    }
  });
}
function Pi(e, t, n) {
  xe && Sn();
  var r = new Ni(e);
  Br(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, En);
}
function $h(e, t, n, r, o, i) {
  let s = xe;
  xe && Sn();
  var a = null;
  xe && Ne.nodeType === Nf && (a = /** @type {Element} */
  Ne, Sn());
  var l = (
    /** @type {TemplateNode} */
    xe ? Ne : e
  ), c = new Ni(l, !1);
  Br(() => {
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
        ) : h ? document.createElementNS(h, d) : document.createElement(d), St(a, a), r) {
          xe && kh(d) && a.append(document.createComment(""));
          var g = (
            /** @type {TemplateNode} */
            xe ? /* @__PURE__ */ et(a) : a.appendChild(_t())
          );
          xe && (g === null ? At(!1) : Qe(g)), r(a, g);
        }
        Pe.nodes_end = a, f.before(a);
      }
      xe && Qe(f);
    }), () => {
    };
  }, En), Si(() => {
  }), s && (At(!0), Qe(l));
}
function Ie(e, t) {
  Rr(() => {
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
  Rr(() => {
    var r = lt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      yo(() => {
        var s = n();
        Ys(s), o && Yl(i, s) && (i = s, r.update(s));
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
  gc(() => {
    n !== (n = t()) && (r && (nt(r), r = null), n && (r = Ct(() => {
      Rr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ac(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ac(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Dh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ac(e)) && (r && (r += " "), r += t);
  return r;
}
function On(e) {
  return typeof e == "object" ? Dh(e) : e ?? "";
}
const Pa = [...` 	
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
function Ki(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Oh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Ki)), o && l.push(...Object.keys(o).map(Ki));
      var c = 0, d = -1;
      const y = e.length;
      for (var h = 0; h < y; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === y - 1) {
            if (d !== -1) {
              var g = Ki(e.substring(c, d).trim());
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
    return r && (n += $a(r)), o && (n += $a(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Pt(e, t, n, r, o, i) {
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
function Zi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function dt(e, t, n, r) {
  var o = e.__style;
  if (xe || o !== t) {
    var i = Oh(t, r);
    (!xe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Zi(e, n?.[0], r[0]), Zi(e, n?.[1], r[1], "important")) : Zi(e, n, r));
  return r;
}
function hs(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!wi(t))
      return zf();
    for (var r of e.options)
      r.selected = t.includes(Ta(r));
    return;
  }
  for (r of e.options) {
    var o = Ta(r);
    if (rh(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Mh(e) {
  var t = new MutationObserver(() => {
    hs(e, e.__value);
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
function Ta(e) {
  return "__value" in e ? e.__value : e.value;
}
const In = Symbol("class"), ln = Symbol("style"), Oc = Symbol("is custom element"), Mc = Symbol("is html");
function ir(e) {
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
    e.__on_r = n, Gn(n), sh();
  }
}
function Ko(e, t) {
  var n = $i(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Da(e, t) {
  var n = $i(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Hh(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = $i(e);
  xe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Sf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Lh(e, t, n, r, o = !1, i = !1) {
  if (xe && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || ir(s);
  }
  var l = $i(e), c = l[Oc], d = !l[Mc];
  let h = xe && c;
  h && At(!1);
  var f = t || {}, g = e.tagName === "OPTION";
  for (var m in t)
    m in n || (n[m] = null);
  n.class ? n.class = On(n.class) : (r || n[In]) && (n.class = null), n[ln] && (n.style ??= null);
  var y = Hc(e);
  for (const $ in n) {
    let O = n[$];
    if (g && $ === "value" && O == null) {
      e.value = e.__value = "", f[$] = O;
      continue;
    }
    if ($ === "class") {
      var _ = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Pt(e, _, O, r, t?.[In], n[In]), f[$] = O, f[In] = n[In];
      continue;
    }
    if ($ === "style") {
      dt(e, O, t?.[ln], n[ln]), f[$] = O, f[ln] = n[ln];
      continue;
    }
    var w = f[$];
    if (!(O === w && !(O === void 0 && e.hasAttribute($)))) {
      f[$] = O;
      var k = $[0] + $[1];
      if (k !== "$$")
        if (k === "on") {
          const I = {}, V = "$$" + $;
          let Z = $.slice(2);
          var E = yh(Z);
          if (ph(Z) && (Z = Z.slice(0, -7), I.capture = !0), !E && w) {
            if (O != null) continue;
            e.removeEventListener(Z, f[V], I), f[V] = null;
          }
          if (O != null)
            if (E)
              e[`__${Z}`] = O, Un([Z]);
            else {
              let z = function(S) {
                f[$].call(this, S);
              };
              f[V] = Ws(Z, e, z, I);
            }
          else E && (e[`__${Z}`] = void 0);
        } else if ($ === "style")
          be(e, $, O);
        else if ($ === "autofocus")
          oh(
            /** @type {HTMLElement} */
            e,
            !!O
          );
        else if (!c && ($ === "__value" || $ === "value" && O != null))
          e.value = e.__value = O;
        else if ($ === "selected" && g)
          Hh(
            /** @type {HTMLOptionElement} */
            e,
            O
          );
        else {
          var b = $;
          d || (b = _h(b));
          var N = b === "defaultValue" || b === "defaultChecked";
          if (O == null && !c && !N)
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
          else N || y.includes(b) && (c || typeof O != "string") ? (e[b] = O, b in l && (l[b] = at)) : typeof O != "function" && be(e, b, O);
        }
    }
  }
  return h && At(!0), f;
}
function tt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  tc(o, n, r, (l) => {
    var c = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (gc(() => {
      var m = t(...l.map(u)), y = Lh(
        e,
        c,
        m,
        i,
        s,
        a
      );
      f && h && "value" in m && hs(
        /** @type {HTMLSelectElement} */
        e,
        m.value
      );
      for (let w of Object.getOwnPropertySymbols(d))
        m[w] || nt(d[w]);
      for (let w of Object.getOwnPropertySymbols(m)) {
        var _ = m[w];
        w.description === bf && (!c || _ !== c[w]) && (d[w] && nt(d[w]), d[w] = Ct(() => Th(e, () => _))), y[w] = _;
      }
      c = y;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Rr(() => {
        hs(
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
function $i(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Oc]: e.nodeName.includes("-"),
      [Mc]: e.namespaceURI === _f
    }
  );
}
var Aa = /* @__PURE__ */ new Map();
function Hc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Aa.get(t);
  if (n) return n;
  Aa.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Vl(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = _i(o);
  }
  return n;
}
class js {
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
          js.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Vh = /* @__PURE__ */ new js({
  box: "border-box"
});
function Oa(e, t, n) {
  var r = Vh.observe(e, () => n(e[t]));
  Rr(() => (lt(() => n(e[t])), r));
}
function Ma(e, t) {
  return e === t || e?.[un] === t;
}
function $t(e = {}, t, n, r) {
  return Rr(() => {
    var o, i;
    return yo(() => {
      o = i, i = [], lt(() => {
        e !== n(...i) && (t(e, ...i), o && Ma(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Gn(() => {
        i && Ma(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Lc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ys(t.s);
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
  n.b.length && hc(() => {
    Ha(t, r), os(n.b);
  }), je(() => {
    const o = lt(() => n.m.map(Ef));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && je(() => {
    Ha(t, r), os(n.a);
  });
}
function Ha(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let Ho = !1;
function Ih(e) {
  var t = Ho;
  try {
    return Ho = !1, [e(), Ho];
  } finally {
    Ho = t;
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
function ze(e, t, n) {
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
      var r = Pe;
      try {
        Ft(e.parent_effect), e.special[t] = p(
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
        Ft(r);
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
function La(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Yn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Pe
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
      if (Kr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Kr(o) && (o = o());
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
      if (Kr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = bn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === un || t === Ls) return !1;
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
function Fe(...e) {
  return new Proxy({ props: e }, Bh);
}
function p(e, t, n, r) {
  var o = !zr || (n & pf) !== 0, i = (n & mf) !== 0, s = (n & yf) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? lt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = un in e || Ls in e;
    d = bn(e, t)?.set ?? (h && t in e ? (E) => e[t] = E : void 0);
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
  }, o && (n & Ml) === 0)
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
  var _ = !1, w = ((n & vf) !== 0 ? mo : Is)(() => (_ = !1, m()));
  i && u(w);
  var k = (
    /** @type {Effect} */
    Pe
  );
  return (
    /** @type {() => V} */
    function(E, b) {
      if (arguments.length > 0) {
        const N = b ? u(w) : o && i ? Bt(E) : E;
        return J(w, N), _ = !0, a !== void 0 && (a = N), E;
      }
      return mr && _ || (k.f & Cn) !== 0 ? w.v : u(w);
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
      var a = /* @__PURE__ */ ic(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Ls ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return J(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Eh : Tc)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Uo(this, i, {
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
let Vc;
typeof HTMLElement == "function" && (Vc = class extends HTMLElement {
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
        o in this.$$d || (this.$$d[o] = Zo(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = Fs(() => {
        yo(() => {
          this.$$r = !0;
          for (const r of Go(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Zo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Zo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
function Zo(e, t, n, r) {
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
  let s = class extends Vc {
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
        l = Zo(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = bn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
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
var Yh = { value: () => {
} };
function Ti() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Yo(n);
}
function Yo(e) {
  this._ = e;
}
function Wh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Yo.prototype = Ti.prototype = {
  constructor: Yo,
  on: function(e, t) {
    var n = this._, r = Wh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Xh(n[o], e.name))) return o;
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
function Xh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Va(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Yh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var gs = "http://www.w3.org/1999/xhtml";
const Ia = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: gs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Di(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ia.hasOwnProperty(t) ? { space: Ia[t], local: e } : e;
}
function qh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === gs && t.documentElement.namespaceURI === gs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function jh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ic(e) {
  var t = Di(e);
  return (t.local ? jh : qh)(t);
}
function Gh() {
}
function Gs(e) {
  return e == null ? Gh : function() {
    return this.querySelector(e);
  };
}
function Uh(e) {
  typeof e != "function" && (e = Gs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Ht(r, this._parents);
}
function Jh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Qh() {
  return [];
}
function zc(e) {
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
  typeof e == "function" ? e = eg(e) : e = zc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Ht(r, o);
}
function Rc(e) {
  return function() {
    return this.matches(e);
  };
}
function Bc(e) {
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
  return this.select(e == null ? og : rg(typeof e == "function" ? e : Bc(e)));
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
  return this.selectAll(e == null ? ag : lg(typeof e == "function" ? e : Bc(e)));
}
function ug(e) {
  typeof e != "function" && (e = Rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Ht(r, this._parents);
}
function Fc(e) {
  return new Array(e.length);
}
function dg() {
  return new Ht(this._enter || this._groups.map(Fc), this._parents);
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
function fg(e) {
  return function() {
    return e;
  };
}
function hg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ri(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function gg(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new ri(e, i[a]);
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
    var d = r[c], h = o[c], f = h.length, g = mg(e.call(d, d && d.__data__, c, r)), m = g.length, y = a[c] = new Array(m), _ = s[c] = new Array(m), w = l[c] = new Array(f);
    n(d, h, y, _, w, g, t);
    for (var k = 0, E = 0, b, N; k < m; ++k)
      if (b = y[k]) {
        for (k >= E && (E = k + 1); !(N = _[E]) && ++E < m; ) ;
        b._next = N || null;
      }
  }
  return s = new Ht(s, r), s._enter = a, s._exit = l, s;
}
function mg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function yg() {
  return new Ht(this._exit || this._groups.map(Fc), this._parents);
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
  return new Ht(a, this._parents);
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
  return new Ht(o, this._parents).order();
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
  var n = Di(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Dg : Tg : typeof t == "function" ? n.local ? Hg : Mg : n.local ? Og : Ag)(n, t));
}
function Kc(e) {
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
  return arguments.length > 1 ? this.each((t == null ? Vg : typeof t == "function" ? zg : Ig)(e, t, n ?? "")) : Ar(this.node(), e);
}
function Ar(e, t) {
  return e.style.getPropertyValue(t) || Kc(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Zc(e) {
  return e.trim().split(/^|\s+/);
}
function Us(e) {
  return e.classList || new Yc(e);
}
function Yc(e) {
  this._node = e, this._names = Zc(e.getAttribute("class") || "");
}
Yc.prototype = {
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
function Wc(e, t) {
  for (var n = Us(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Xc(e, t) {
  for (var n = Us(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Yg(e) {
  return function() {
    Wc(this, e);
  };
}
function Wg(e) {
  return function() {
    Xc(this, e);
  };
}
function Xg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Wc : Xc)(this, e);
  };
}
function qg(e, t) {
  var n = Zc(e + "");
  if (arguments.length < 2) {
    for (var r = Us(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
  var t = typeof e == "function" ? e : Ic(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function lv() {
  return null;
}
function cv(e, t) {
  var n = typeof e == "function" ? e : Ic(e), r = t == null ? lv : typeof t == "function" ? t : Gs(t);
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
function qc(e, t, n) {
  var r = Kc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function xv(e, t) {
  return function() {
    return qc(this, e, t);
  };
}
function bv(e, t) {
  return function() {
    return qc(this, e, t.apply(this, arguments));
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
var jc = [null];
function Ht(e, t) {
  this._groups = e, this._parents = t;
}
function xo() {
  return new Ht([[document.documentElement]], jc);
}
function Ev() {
  return this;
}
Ht.prototype = xo.prototype = {
  constructor: Ht,
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
function Rt(e) {
  return typeof e == "string" ? new Ht([[document.querySelector(e)]], [document.documentElement]) : new Ht([[e]], jc);
}
function Sv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Xt(e, t) {
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
const Nv = { passive: !1 }, no = { capture: !0, passive: !1 };
function Yi(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gc(e) {
  var t = e.document.documentElement, n = Rt(e).on("dragstart.drag", Cr, no);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, no) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Uc(e, t) {
  var n = e.document.documentElement, r = Rt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, no), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Lo = (e) => () => e;
function vs(e, {
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
vs.prototype.on = function() {
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
  var e = Pv, t = $v, n = Tv, r = Dv, o = {}, i = Ti("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", _).on("touchmove.drag", w, Nv).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, N) {
    if (!(d || !e.call(this, b, N))) {
      var $ = E(this, t.call(this, b, N), b, N, "mouse");
      $ && (Rt(b.view).on("mousemove.drag", m, no).on("mouseup.drag", y, no), Gc(b.view), Yi(b), c = !1, a = b.clientX, l = b.clientY, $("start", b));
    }
  }
  function m(b) {
    if (Cr(b), !c) {
      var N = b.clientX - a, $ = b.clientY - l;
      c = N * N + $ * $ > h;
    }
    o.mouse("drag", b);
  }
  function y(b) {
    Rt(b.view).on("mousemove.drag mouseup.drag", null), Uc(b.view, c), Cr(b), o.mouse("end", b);
  }
  function _(b, N) {
    if (e.call(this, b, N)) {
      var $ = b.changedTouches, O = t.call(this, b, N), I = $.length, V, Z;
      for (V = 0; V < I; ++V)
        (Z = E(this, O, b, N, $[V].identifier, $[V])) && (Yi(b), Z("start", b, $[V]));
    }
  }
  function w(b) {
    var N = b.changedTouches, $ = N.length, O, I;
    for (O = 0; O < $; ++O)
      (I = o[N[O].identifier]) && (Cr(b), I("drag", b, N[O]));
  }
  function k(b) {
    var N = b.changedTouches, $ = N.length, O, I;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), O = 0; O < $; ++O)
      (I = o[N[O].identifier]) && (Yi(b), I("end", b, N[O]));
  }
  function E(b, N, $, O, I, V) {
    var Z = i.copy(), z = Xt(V || $, N), S, T, x;
    if ((x = n.call(b, new vs("beforestart", {
      sourceEvent: $,
      target: f,
      identifier: I,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), O)) != null)
      return S = x.x - z[0] || 0, T = x.y - z[1] || 0, function C(A, H, K) {
        var W = z, M;
        switch (A) {
          case "start":
            o[I] = C, M = s++;
            break;
          case "end":
            delete o[I], --s;
          // falls through
          case "drag":
            z = Xt(K || H, N), M = s;
            break;
        }
        Z.call(
          A,
          b,
          new vs(A, {
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
          O
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Lo(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Lo(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Lo(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Lo(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function Js(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Jc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function bo() {
}
var ro = 0.7, oi = 1 / ro, kr = "\\s*([+-]?\\d+)\\s*", oo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", dn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ov = /^#([0-9a-f]{3,8})$/, Mv = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Hv = new RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`), Lv = new RegExp(`^rgba\\(${kr},${kr},${kr},${oo}\\)$`), Vv = new RegExp(`^rgba\\(${dn},${dn},${dn},${oo}\\)$`), Iv = new RegExp(`^hsl\\(${oo},${dn},${dn}\\)$`), zv = new RegExp(`^hsla\\(${oo},${dn},${dn},${oo}\\)$`), za = {
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
Js(bo, dr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ra,
  // Deprecated! Use color.formatHex.
  formatHex: Ra,
  formatHex8: Rv,
  formatHsl: Bv,
  formatRgb: Ba,
  toString: Ba
});
function Ra() {
  return this.rgb().formatHex();
}
function Rv() {
  return this.rgb().formatHex8();
}
function Bv() {
  return Qc(this).formatHsl();
}
function Ba() {
  return this.rgb().formatRgb();
}
function dr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ov.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Fa(t) : n === 3 ? new Et(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Vo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Vo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Mv.exec(e)) ? new Et(t[1], t[2], t[3], 1) : (t = Hv.exec(e)) ? new Et(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Lv.exec(e)) ? Vo(t[1], t[2], t[3], t[4]) : (t = Vv.exec(e)) ? Vo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Iv.exec(e)) ? Ya(t[1], t[2] / 100, t[3] / 100, 1) : (t = zv.exec(e)) ? Ya(t[1], t[2] / 100, t[3] / 100, t[4]) : za.hasOwnProperty(e) ? Fa(za[e]) : e === "transparent" ? new Et(NaN, NaN, NaN, 0) : null;
}
function Fa(e) {
  return new Et(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Vo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Et(e, t, n, r);
}
function Fv(e) {
  return e instanceof bo || (e = dr(e)), e ? (e = e.rgb(), new Et(e.r, e.g, e.b, e.opacity)) : new Et();
}
function ps(e, t, n, r) {
  return arguments.length === 1 ? Fv(e) : new Et(e, t, n, r ?? 1);
}
function Et(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Js(Et, ps, Jc(bo, {
  brighter(e) {
    return e = e == null ? oi : Math.pow(oi, e), new Et(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ro : Math.pow(ro, e), new Et(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Et(sr(this.r), sr(this.g), sr(this.b), ii(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ka,
  // Deprecated! Use color.formatHex.
  formatHex: Ka,
  formatHex8: Kv,
  formatRgb: Za,
  toString: Za
}));
function Ka() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}`;
}
function Kv() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}${nr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Za() {
  const e = ii(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${sr(this.r)}, ${sr(this.g)}, ${sr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ii(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function sr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nr(e) {
  return e = sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ya(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new qt(e, t, n, r);
}
function Qc(e) {
  if (e instanceof qt) return new qt(e.h, e.s, e.l, e.opacity);
  if (e instanceof bo || (e = dr(e)), !e) return new qt();
  if (e instanceof qt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new qt(s, a, l, e.opacity);
}
function Zv(e, t, n, r) {
  return arguments.length === 1 ? Qc(e) : new qt(e, t, n, r ?? 1);
}
function qt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Js(qt, Zv, Jc(bo, {
  brighter(e) {
    return e = e == null ? oi : Math.pow(oi, e), new qt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ro : Math.pow(ro, e), new qt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Et(
      Wi(e >= 240 ? e - 240 : e + 120, o, r),
      Wi(e, o, r),
      Wi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new qt(Wa(this.h), Io(this.s), Io(this.l), ii(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ii(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Wa(this.h)}, ${Io(this.s) * 100}%, ${Io(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Wa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Io(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Qs = (e) => () => e;
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
  return (e = +e) == 1 ? eu : function(t, n) {
    return n - t ? Wv(t, n, e) : Qs(isNaN(t) ? n : t);
  };
}
function eu(e, t) {
  var n = t - e;
  return n ? Yv(e, n) : Qs(isNaN(e) ? t : e);
}
const si = function e(t) {
  var n = Xv(t);
  function r(o, i) {
    var s = n((o = ps(o)).r, (i = ps(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = eu(o.opacity, i.opacity);
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
  for (s = 0; s < r; ++s) o[s] = Jr(e[s], t[s]);
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
function an(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Jv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Jr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xi = new RegExp(ms.source, "g");
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
function tu(e, t) {
  var n = ms.lastIndex = Xi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ms.exec(e)) && (o = Xi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: an(r, o) })), n = Xi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? e1(l[0].x) : Qv(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function Jr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Qs(t) : (n === "number" ? an : n === "string" ? (r = dr(t)) ? (t = r, si) : tu : t instanceof dr ? si : t instanceof Date ? Uv : jv(t) ? qv : Array.isArray(t) ? Gv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Jv : an)(e, t);
}
var Xa = 180 / Math.PI, ys = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function nu(e, t, n, r, o, i) {
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
var zo;
function t1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ys : nu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function n1(e) {
  return e == null || (zo || (zo = document.createElementNS("http://www.w3.org/2000/svg", "g")), zo.setAttribute("transform", e), !(e = zo.transform.baseVal.consolidate())) ? ys : (e = e.matrix, nu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ru(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, m) {
    if (c !== h || d !== f) {
      var y = g.push("translate(", null, t, null, n);
      m.push({ i: y - 4, x: an(c, h) }, { i: y - 2, x: an(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(c, d, h, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: an(c, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(c, d, h, f) {
    c !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: an(c, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(c, d, h, f, g, m) {
    if (c !== h || d !== f) {
      var y = g.push(o(g) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: an(c, h) }, { i: y - 2, x: an(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var m = -1, y = f.length, _; ++m < y; ) h[(_ = f[m]).i] = _.x(g);
      return h.join("");
    };
  };
}
var r1 = ru(t1, "px, ", "px)", "deg)"), o1 = ru(n1, ", ", ")", ")"), i1 = 1e-12;
function qa(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function s1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function a1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Wo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, m = h - l, y = g * g + m * m, _, w;
    if (y < i1)
      w = Math.log(f / c) / t, _ = function(O) {
        return [
          a + O * g,
          l + O * m,
          c * Math.exp(t * O * w)
        ];
      };
    else {
      var k = Math.sqrt(y), E = (f * f - c * c + r * y) / (2 * c * n * k), b = (f * f - c * c - r * y) / (2 * f * n * k), N = Math.log(Math.sqrt(E * E + 1) - E), $ = Math.log(Math.sqrt(b * b + 1) - b);
      w = ($ - N) / t, _ = function(O) {
        var I = O * w, V = qa(N), Z = c / (n * k) * (V * a1(t * I + N) - s1(N));
        return [
          a + Z * g,
          l + Z * m,
          c * V / qa(t * I + N)
        ];
      };
    }
    return _.duration = w * 1e3 * t / Math.SQRT2, _;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Or = 0, Xr = 0, Zr = 0, ou = 1e3, ai, qr, li = 0, fr = 0, Ai = 0, io = typeof performance == "object" && performance.now ? performance : Date, iu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ea() {
  return fr || (iu(l1), fr = io.now() + Ai);
}
function l1() {
  fr = 0;
}
function ci() {
  this._call = this._time = this._next = null;
}
ci.prototype = su.prototype = {
  constructor: ci,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ea() : +n) + (t == null ? 0 : +t), !this._next && qr !== this && (qr ? qr._next = this : ai = this, qr = this), this._call = e, this._time = n, ws();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ws());
  }
};
function su(e, t, n) {
  var r = new ci();
  return r.restart(e, t, n), r;
}
function c1() {
  ea(), ++Or;
  for (var e = ai, t; e; )
    (t = fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Or;
}
function ja() {
  fr = (li = io.now()) + Ai, Or = Xr = 0;
  try {
    c1();
  } finally {
    Or = 0, d1(), fr = 0;
  }
}
function u1() {
  var e = io.now(), t = e - li;
  t > ou && (Ai -= t, li = e);
}
function d1() {
  for (var e, t = ai, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ai = n);
  qr = e, ws(r);
}
function ws(e) {
  if (!Or) {
    Xr && (Xr = clearTimeout(Xr));
    var t = e - fr;
    t > 24 ? (e < 1 / 0 && (Xr = setTimeout(ja, e - io.now() - Ai)), Zr && (Zr = clearInterval(Zr))) : (Zr || (li = io.now(), Zr = setInterval(u1, ou)), Or = 1, iu(ja));
  }
}
function Ga(e, t, n) {
  var r = new ci();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var f1 = Ti("start", "end", "cancel", "interrupt"), h1 = [], au = 0, Ua = 1, _s = 2, Xo = 3, Ja = 4, xs = 5, qo = 6;
function Oi(e, t, n, r, o, i) {
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
    state: au
  });
}
function ta(e, t) {
  var n = tn(e, t);
  if (n.state > au) throw new Error("too late; already scheduled");
  return n;
}
function vn(e, t) {
  var n = tn(e, t);
  if (n.state > Xo) throw new Error("too late; already running");
  return n;
}
function tn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function g1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = su(i, 0, n.time);
  function i(c) {
    n.state = Ua, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== Ua) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Xo) return Ga(s);
        g.state === Ja ? (g.state = qo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = qo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Ga(function() {
      n.state === Xo && (n.state = Ja, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = _s, n.on.call("start", e, e.__data__, n.index, n.group), n.state === _s) {
      for (n.state = Xo, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = xs, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === xs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = qo, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function jo(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > _s && r.state < xs, r.state = qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function v1(e) {
  return this.each(function() {
    jo(this, e);
  });
}
function p1(e, t) {
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
function m1(e, t, n) {
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
function y1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = tn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? p1 : m1)(n, e, t));
}
function na(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = vn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return tn(o, r).value[t];
  };
}
function lu(e, t) {
  var n;
  return (typeof t == "number" ? an : t instanceof dr ? si : (n = dr(t)) ? (t = n, si) : tu)(e, t);
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
  var n = Di(e), r = n === "transform" ? o1 : lu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? k1 : C1)(n, r, na(this, "attr." + e, t)) : t == null ? (n.local ? _1 : w1)(n) : (n.local ? b1 : x1)(n, r, t));
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
  var r = Di(e);
  return this.tween(n, (r.local ? P1 : $1)(r, t));
}
function D1(e, t) {
  return function() {
    ta(this, e).delay = +t.apply(this, arguments);
  };
}
function A1(e, t) {
  return t = +t, function() {
    ta(this, e).delay = t;
  };
}
function O1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? D1 : A1)(t, e)) : tn(this.node(), t).delay;
}
function M1(e, t) {
  return function() {
    vn(this, e).duration = +t.apply(this, arguments);
  };
}
function H1(e, t) {
  return t = +t, function() {
    vn(this, e).duration = t;
  };
}
function L1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? M1 : H1)(t, e)) : tn(this.node(), t).duration;
}
function V1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    vn(this, e).ease = t;
  };
}
function I1(e) {
  var t = this._id;
  return arguments.length ? this.each(V1(t, e)) : tn(this.node(), t).ease;
}
function z1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    vn(this, e).ease = n;
  };
}
function R1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(z1(this._id, e));
}
function B1(e) {
  typeof e != "function" && (e = Rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Nn(r, this._parents, this._name, this._id);
}
function F1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Nn(s, this._parents, this._name, this._id);
}
function K1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Z1(e, t, n) {
  var r, o, i = K1(t) ? ta : vn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Y1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? tn(this.node(), n).on.on(e) : this.each(Z1(n, e, t));
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
  typeof e != "function" && (e = Gs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, Oi(c[f], t, n, f, c, tn(d, n)));
  return new Nn(i, this._parents, t, n);
}
function j1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, m = tn(d, n), y = 0, _ = f.length; y < _; ++y)
          (g = f[y]) && Oi(g, t, n, y, f, m);
        i.push(f), s.push(d);
      }
  return new Nn(i, s, t, n);
}
var G1 = xo.prototype.constructor;
function U1() {
  return new G1(this._groups, this._parents);
}
function J1(e, t) {
  var n, r, o;
  return function() {
    var i = Ar(this, e), s = (this.style.removeProperty(e), Ar(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function cu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Q1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ar(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ep(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ar(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Ar(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function tp(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = vn(this, e), c = l.on, d = l.value[i] == null ? a || (a = cu(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function np(e, t, n) {
  var r = (e += "") == "transform" ? r1 : lu;
  return t == null ? this.styleTween(e, J1(e, r)).on("end.style." + e, cu(e)) : typeof t == "function" ? this.styleTween(e, ep(e, r, na(this, "style." + e, t))).each(tp(this._id, e)) : this.styleTween(e, Q1(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? ap(na(this, "text", e)) : sp(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = uu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = tn(l, t);
        Oi(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Nn(r, this._parents, e, n);
}
function hp() {
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
var gp = 0;
function Nn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function uu() {
  return ++gp;
}
var pn = xo.prototype;
Nn.prototype = {
  constructor: Nn,
  select: q1,
  selectAll: j1,
  selectChild: pn.selectChild,
  selectChildren: pn.selectChildren,
  filter: B1,
  merge: F1,
  selection: U1,
  transition: fp,
  call: pn.call,
  nodes: pn.nodes,
  node: pn.node,
  size: pn.size,
  empty: pn.empty,
  each: pn.each,
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
  [Symbol.iterator]: pn[Symbol.iterator]
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
  e instanceof Nn ? (t = e._id, e = e._name) : (t = uu(), (n = pp).time = ea(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Oi(l, e, t, c, s, n || mp(l, t));
  return new Nn(r, this._parents, e, t);
}
xo.prototype.interrupt = v1;
xo.prototype.transition = yp;
const Ro = (e) => () => e;
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
function wn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
wn.prototype = {
  constructor: wn,
  scale: function(e) {
    return e === 1 ? this : new wn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new wn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Mi = new wn(1, 0, 0);
du.prototype = wn.prototype;
function du(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Mi;
  return e.__zoom;
}
function qi(e) {
  e.stopImmediatePropagation();
}
function Yr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _p(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function xp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Qa() {
  return this.__zoom || Mi;
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
function fu() {
  var e = _p, t = xp, n = kp, r = bp, o = Cp, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Wo, c = Ti("start", "zoom", "end"), d, h, f, g = 500, m = 150, y = 0, _ = 10;
  function w(x) {
    x.property("__zoom", Qa).on("wheel.zoom", I, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", Z).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(x, C, A, H) {
    var K = x.selection ? x.selection() : x;
    K.property("__zoom", Qa), x !== K ? N(x, C, A, H) : K.interrupt().each(function() {
      $(this, arguments).event(H).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, w.scaleBy = function(x, C, A, H) {
    w.scaleTo(x, function() {
      var K = this.__zoom.k, W = typeof C == "function" ? C.apply(this, arguments) : C;
      return K * W;
    }, A, H);
  }, w.scaleTo = function(x, C, A, H) {
    w.transform(x, function() {
      var K = t.apply(this, arguments), W = this.__zoom, M = A == null ? b(K) : typeof A == "function" ? A.apply(this, arguments) : A, j = W.invert(M), X = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(E(k(W, X), M, j), K, s);
    }, A, H);
  }, w.translateBy = function(x, C, A, H) {
    w.transform(x, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof A == "function" ? A.apply(this, arguments) : A
      ), t.apply(this, arguments), s);
    }, null, H);
  }, w.translateTo = function(x, C, A, H, K) {
    w.transform(x, function() {
      var W = t.apply(this, arguments), M = this.__zoom, j = H == null ? b(W) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(Mi.translate(j[0], j[1]).scale(M.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof A == "function" ? -A.apply(this, arguments) : -A
      ), W, s);
    }, H, K);
  };
  function k(x, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === x.k ? x : new wn(C, x.x, x.y);
  }
  function E(x, C, A) {
    var H = C[0] - A[0] * x.k, K = C[1] - A[1] * x.k;
    return H === x.x && K === x.y ? x : new wn(x.k, H, K);
  }
  function b(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function N(x, C, A, H) {
    x.on("start.zoom", function() {
      $(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      $(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var K = this, W = arguments, M = $(K, W).event(H), j = t.apply(K, W), X = A == null ? b(j) : typeof A == "function" ? A.apply(K, W) : A, Q = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), q = K.__zoom, F = typeof C == "function" ? C.apply(K, W) : C, U = l(q.invert(X).concat(Q / q.k), F.invert(X).concat(Q / F.k));
      return function(G) {
        if (G === 1) G = F;
        else {
          var ne = U(G), ee = Q / ne[2];
          G = new wn(ee, X[0] - ne[0] * ee, X[1] - ne[1] * ee);
        }
        M.zoom(null, G);
      };
    });
  }
  function $(x, C, A) {
    return !A && x.__zooming || new O(x, C);
  }
  function O(x, C) {
    this.that = x, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, C), this.taps = 0;
  }
  O.prototype = {
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
      var C = Rt(this.that).datum();
      c.call(
        x,
        this.that,
        new wp(x, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: c
        }),
        C
      );
    }
  };
  function I(x, ...C) {
    if (!e.apply(this, arguments)) return;
    var A = $(this, C).event(x), H = this.__zoom, K = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), W = Xt(x);
    if (A.wheel)
      (A.mouse[0][0] !== W[0] || A.mouse[0][1] !== W[1]) && (A.mouse[1] = H.invert(A.mouse[0] = W)), clearTimeout(A.wheel);
    else {
      if (H.k === K) return;
      A.mouse = [W, H.invert(W)], jo(this), A.start();
    }
    Yr(x), A.wheel = setTimeout(M, m), A.zoom("mouse", n(E(k(H, K), A.mouse[0], A.mouse[1]), A.extent, s));
    function M() {
      A.wheel = null, A.end();
    }
  }
  function V(x, ...C) {
    if (f || !e.apply(this, arguments)) return;
    var A = x.currentTarget, H = $(this, C, !0).event(x), K = Rt(x.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Q, !0), W = Xt(x, A), M = x.clientX, j = x.clientY;
    Gc(x.view), qi(x), H.mouse = [W, this.__zoom.invert(W)], jo(this), H.start();
    function X(q) {
      if (Yr(q), !H.moved) {
        var F = q.clientX - M, U = q.clientY - j;
        H.moved = F * F + U * U > y;
      }
      H.event(q).zoom("mouse", n(E(H.that.__zoom, H.mouse[0] = Xt(q, A), H.mouse[1]), H.extent, s));
    }
    function Q(q) {
      K.on("mousemove.zoom mouseup.zoom", null), Uc(q.view, H.moved), Yr(q), H.event(q).end();
    }
  }
  function Z(x, ...C) {
    if (e.apply(this, arguments)) {
      var A = this.__zoom, H = Xt(x.changedTouches ? x.changedTouches[0] : x, this), K = A.invert(H), W = A.k * (x.shiftKey ? 0.5 : 2), M = n(E(k(A, W), H, K), t.apply(this, C), s);
      Yr(x), a > 0 ? Rt(this).transition().duration(a).call(N, M, H, x) : Rt(this).call(w.transform, M, H, x);
    }
  }
  function z(x, ...C) {
    if (e.apply(this, arguments)) {
      var A = x.touches, H = A.length, K = $(this, C, x.changedTouches.length === H).event(x), W, M, j, X;
      for (qi(x), M = 0; M < H; ++M)
        j = A[M], X = Xt(j, this), X = [X, this.__zoom.invert(X), j.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== X[2] && (K.touch1 = X, K.taps = 0) : (K.touch0 = X, W = !0, K.taps = 1 + !!d);
      d && (d = clearTimeout(d)), W && (K.taps < 2 && (h = X[0], d = setTimeout(function() {
        d = null;
      }, g)), jo(this), K.start());
    }
  }
  function S(x, ...C) {
    if (this.__zooming) {
      var A = $(this, C).event(x), H = x.changedTouches, K = H.length, W, M, j, X;
      for (Yr(x), W = 0; W < K; ++W)
        M = H[W], j = Xt(M, this), A.touch0 && A.touch0[2] === M.identifier ? A.touch0[0] = j : A.touch1 && A.touch1[2] === M.identifier && (A.touch1[0] = j);
      if (M = A.that.__zoom, A.touch1) {
        var Q = A.touch0[0], q = A.touch0[1], F = A.touch1[0], U = A.touch1[1], G = (G = F[0] - Q[0]) * G + (G = F[1] - Q[1]) * G, ne = (ne = U[0] - q[0]) * ne + (ne = U[1] - q[1]) * ne;
        M = k(M, Math.sqrt(G / ne)), j = [(Q[0] + F[0]) / 2, (Q[1] + F[1]) / 2], X = [(q[0] + U[0]) / 2, (q[1] + U[1]) / 2];
      } else if (A.touch0) j = A.touch0[0], X = A.touch0[1];
      else return;
      A.zoom("touch", n(E(M, j, X), A.extent, s));
    }
  }
  function T(x, ...C) {
    if (this.__zooming) {
      var A = $(this, C).event(x), H = x.changedTouches, K = H.length, W, M;
      for (qi(x), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), W = 0; W < K; ++W)
        M = H[W], A.touch0 && A.touch0[2] === M.identifier ? delete A.touch0 : A.touch1 && A.touch1[2] === M.identifier && delete A.touch1;
      if (A.touch1 && !A.touch0 && (A.touch0 = A.touch1, delete A.touch1), A.touch0) A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      else if (A.end(), A.taps === 2 && (M = Xt(M, this), Math.hypot(h[0] - M[0], h[1] - M[1]) < _)) {
        var j = Rt(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : Ro(+x), w) : r;
  }, w.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Ro(!!x), w) : e;
  }, w.touchable = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : Ro(!!x), w) : o;
  }, w.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Ro([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), w) : t;
  }, w.scaleExtent = function(x) {
    return arguments.length ? (i[0] = +x[0], i[1] = +x[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(x) {
    return arguments.length ? (s[0][0] = +x[0][0], s[1][0] = +x[1][0], s[0][1] = +x[0][1], s[1][1] = +x[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(x) {
    return arguments.length ? (n = x, w) : n;
  }, w.duration = function(x) {
    return arguments.length ? (a = +x, w) : a;
  }, w.interpolate = function(x) {
    return arguments.length ? (l = x, w) : l;
  }, w.on = function() {
    var x = c.on.apply(c, arguments);
    return x === c ? w : x;
  }, w.clickDistance = function(x) {
    return arguments.length ? (y = (x = +x) * x, w) : Math.sqrt(y);
  }, w.tapDistance = function(x) {
    return arguments.length ? (_ = +x, w) : _;
  }, w;
}
const so = {
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
], hu = ["Enter", " ", "Escape"], Ep = {
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
var Mr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Mr || (Mr = {}));
var ar;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ar || (ar = {}));
var ui;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ui || (ui = {}));
const Cs = {
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
var yn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(yn || (yn = {}));
var ao;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ao || (ao = {}));
var me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(me || (me = {}));
const el = {
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
function tl(e, t, n) {
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
const gu = (e) => "id" in e && "source" in e && "target" in e, Pp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ra = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Co = (e, t = [0, 0]) => {
  const { width: n, height: r } = Jn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
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
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ra(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? di(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Hi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Li(n);
}, ko = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Hi(n, di(o)), r = !0);
  }), r ? Li(n) : { x: 0, y: 0, width: 0, height: 0 };
}, oa = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...So(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, m = d.height ?? c.height ?? c.initialHeight ?? null, y = lo(a, Lr(c)), _ = (g ?? 0) * (m ?? 0), w = i && y > 0;
    (!c.internals.handleBounds || w || y >= _ || c.dragging) && l.push(c);
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
  const a = Dp(e, s), l = ko(a), c = ia(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function vu({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", so.error005());
    else {
      const g = a.measured.width, m = a.measured.height;
      g && m && (h = [
        [l, c],
        [l + g, c + m]
      ]);
    }
  else a && Vr(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = Vr(h) ? hr(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", so.error015()), {
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
const Hr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), hr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Hr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Hr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function pu(e, t, n) {
  const { width: r, height: o } = Jn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return hr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const nl = (e, t, n) => e < t ? Hr(Math.abs(e - t), 1, t) / t : e > n ? -Hr(Math.abs(e - n), 1, t) / t : 0, mu = (e, t, n = 15, r = 40) => {
  const o = nl(e.x, r, t.width - r) * n, i = nl(e.y, r, t.height - r) * n;
  return [o, i];
}, Hi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ks = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Li = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Lr = (e, t = [0, 0]) => {
  const { x: n, y: r } = ra(e) ? e.internals.positionAbsolute : Co(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, di = (e, t = [0, 0]) => {
  const { x: n, y: r } = ra(e) ? e.internals.positionAbsolute : Co(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, yu = (e, t) => Li(Hi(ks(e), ks(t))), lo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, rl = (e) => _n(e.width) && _n(e.height) && _n(e.x) && _n(e.y), _n = (e) => !isNaN(e) && isFinite(e), Mp = (e, t) => {
}, Eo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), So = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Eo(a, s) : a;
}, fi = ({ x: e, y: t }, [n, r, o]) => ({
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
function Hp(e, t, n) {
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
function Lp(e, t, n, r, o, i) {
  const { x: s, y: a } = fi(e, [t, n, r]), { x: l, y: c } = fi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const ia = (e, t, n, r, o, i) => {
  const s = Hp(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Hr(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, m = n / 2 - f * d, y = Lp(e, g, m, d, t, n), _ = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: g - _.left + _.right,
    y: m - _.top + _.bottom,
    zoom: d
  };
}, rr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Vr(e) {
  return e != null && e !== "parent";
}
function Jn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function wu(e) {
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
function ji(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Gt(e), a = So({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? Eo(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const _u = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), xu = (e) => e?.getRootNode?.() || window?.document, zp = ["INPUT", "SELECT", "TEXTAREA"];
function bu(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : zp.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Cu = (e) => "clientX" in e, Gt = (e, t) => {
  const n = Cu(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
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
      ..._u(s)
    };
  });
};
function Rp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function Bo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function il({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case me.Left:
      return [t - Bo(t - r, i), n];
    case me.Right:
      return [t + Bo(r - t, i), n];
    case me.Top:
      return [t, n - Bo(n - o, i)];
    case me.Bottom:
      return [t, n + Bo(o - n, i)];
  }
}
function ku({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, curvature: s = 0.25 }) {
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
function Eu({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const i = Hi(di(e), di(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return lo(s, Li(i)) > 0;
}
const Kp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Zp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Yp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return gu(e) ? n = { ...e } : n = {
    ...e,
    id: Kp(e)
  }, Zp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Su({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Eu({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const sl = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, Wp = ({ source: e, sourcePosition: t = me.Bottom, target: n }) => t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, al = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Xp({ source: e, sourcePosition: t = me.Bottom, target: n, targetPosition: r = me.Top, center: o, offset: i, stepPosition: s }) {
  const a = sl[t], l = sl[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Wp({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let m = [], y, _;
  const w = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [, , E, b] = Eu({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? c.x + (d.x - c.x) * s, _ = o.y ?? (c.y + d.y) / 2) : (y = o.x ?? (c.x + d.x) / 2, _ = o.y ?? c.y + (d.y - c.y) * s);
    const $ = [
      { x: y, y: c.y },
      { x: y, y: d.y }
    ], O = [
      { x: c.x, y: _ },
      { x: d.x, y: _ }
    ];
    a[f] === g ? m = f === "x" ? $ : O : m = f === "x" ? O : $;
  } else {
    const $ = [{ x: c.x, y: d.y }], O = [{ x: d.x, y: c.y }];
    if (f === "x" ? m = a.x === g ? O : $ : m = a.y === g ? $ : O, t === r) {
      const S = Math.abs(e[f] - n[f]);
      if (S <= i) {
        const T = Math.min(i - 1, i - S);
        a[f] === g ? w[f] = (c[f] > e[f] ? -1 : 1) * T : k[f] = (d[f] > n[f] ? -1 : 1) * T;
      }
    }
    if (t !== r) {
      const S = f === "x" ? "y" : "x", T = a[f] === l[S], x = c[S] > d[S], C = c[S] < d[S];
      (a[f] === 1 && (!T && x || T && C) || a[f] !== 1 && (!T && C || T && x)) && (m = f === "x" ? $ : O);
    }
    const I = { x: c.x + w.x, y: c.y + w.y }, V = { x: d.x + k.x, y: d.y + k.y }, Z = Math.max(Math.abs(I.x - m[0].x), Math.abs(V.x - m[0].x)), z = Math.max(Math.abs(I.y - m[0].y), Math.abs(V.y - m[0].y));
    Z >= z ? (y = (I.x + V.x) / 2, _ = m[0].y) : (y = m[0].x, _ = (I.y + V.y) / 2);
  }
  return [[
    e,
    { x: c.x + w.x, y: c.y + w.y },
    ...m,
    { x: d.x + k.x, y: d.y + k.y },
    n
  ], y, _, E, b];
}
function qp(e, t, n, r) {
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
function sa({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: r, targetY: o, targetPosition: i = me.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, m, y] = Xp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((w, k, E) => {
    let b = "";
    return E > 0 && E < h.length - 1 ? b = qp(h[E - 1], k, h[E + 1], s) : b = `${E === 0 ? "M" : "L"}${k.x} ${k.y}`, w += b, w;
  }, ""), f, g, m, y];
}
function ll(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function jp(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!ll(t) || !ll(n))
    return null;
  const r = t.internals.handleBounds || cl(t.handles), o = n.internals.handleBounds || cl(n.handles), i = ul(r?.source ?? [], e.sourceHandle), s = ul(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Mr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", so.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || me.Bottom, l = s?.position || me.Top, c = co(t, i, a), d = co(n, s, l);
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
function co(e, t, n = me.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Jn(e);
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
function ul(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Es(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Gp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Es(l, t);
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
const Nu = 1e3, Jp = 10, aa = {
  nodeOrigin: [0, 0],
  nodeExtent: bs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Qp = {
  ...aa,
  checkEquality: !0
};
function la(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function e0(e, t, n) {
  const r = la(aa, n);
  for (const o of e.values())
    if (o.parentId)
      ca(o, e, t, r);
    else {
      const i = Co(o, r.nodeOrigin), s = Vr(o.extent) ? o.extent : r.nodeExtent, a = hr(i, s, Jn(o));
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
  const o = la(Qp, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? Nu : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = a.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const h = Co(c, o.nodeOrigin), f = Vr(c.extent) ? c.extent : o.nodeExtent, g = hr(h, f, Jn(c));
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
          z: Pu(c, l),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && ca(d, t, n, r, i);
  }
  return s;
}
function r0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ca(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = la(aa, r), l = e.parentId, c = t.get(l);
  if (!c) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  r0(e, n), o && !c.parentId && c.internals.rootParentIndex === void 0 && (c.internals.rootParentIndex = ++o.i, c.internals.z = c.internals.z + o.i * Jp), o && c.internals.rootParentIndex !== void 0 && (o.i = c.internals.rootParentIndex);
  const d = i ? Nu : 0, { x: h, y: f, z: g } = o0(e, c, s, a, d), { positionAbsolute: m } = e.internals, y = h !== m.x || f !== m.y;
  (y || g !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: h, y: f } : m,
      z: g
    }
  });
}
function Pu(e, t) {
  return (_n(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function o0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Jn(e), l = Co(e, n), c = Vr(e.extent) ? hr(l, e.extent, a) : l;
  let d = hr({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = pu(d, a, t));
  const h = Pu(e, o), f = t.internals.z ?? 0;
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
    const l = i.get(s.parentId)?.expandedRect ?? Lr(a), c = yu(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = Jn(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), _ = (m - d.width) * h[0], w = (y - d.height) * h[1];
    (f > 0 || g > 0 || _ || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + _,
        y: a.position.y - g + w
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
        width: m + (f ? h[0] * f - _ : 0),
        height: y + (g ? h[1] * g - w : 0)
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
    const m = _u(f.nodeElement), y = g.measured.width !== m.width || g.measured.height !== m.height;
    if (!!(m.width && m.height && (y || !g.internals.handleBounds || f.force))) {
      const w = f.nodeElement.getBoundingClientRect(), k = Vr(g.extent) ? g.extent : i;
      let { positionAbsolute: E } = g.internals;
      g.parentId && g.extent === "parent" ? E = pu(E, m, t.get(g.parentId)) : k && (E = hr(E, k, m));
      const b = {
        ...g,
        measured: m,
        internals: {
          ...g.internals,
          positionAbsolute: E,
          handleBounds: {
            source: ol("source", f.nodeElement, w, d, g.id),
            target: ol("target", f.nodeElement, w, d, g.id)
          }
        }
      };
      t.set(g.id, b), g.parentId && ca(b, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: m
      }), g.expandParent && g.parentId && h.push({
        id: g.id,
        parentId: g.parentId,
        rect: Lr(b, o)
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
function l0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    dl("source", l, d, e, o, s), dl("target", l, c, e, i, a), t.set(r.id, r);
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
function $u(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : $u(n, t) : !1;
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
function u0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !$u(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function d0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Eo(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function f0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, m = !1, y = null;
  function _({ noDragClassName: k, handleSelector: E, domNode: b, isSelectable: N, nodeId: $, nodeClickDistance: O = 0 }) {
    f = Rt(b);
    function I({ x: S, y: T }) {
      const { nodeLookup: x, nodeExtent: C, snapGrid: A, snapToGrid: H, nodeOrigin: K, onNodeDrag: W, onSelectionDrag: M, onError: j, updateNodePositions: X } = t();
      i = { x: S, y: T };
      let Q = !1;
      const q = a.size > 1, F = q && C ? ks(ko(a)) : null, U = q && H ? d0({
        dragItems: a,
        snapGrid: A,
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
        } : Eo(ee, A));
        let ye = null;
        if (q && C && !ne.extent && F) {
          const { positionAbsolute: re } = ne.internals, fe = re.x - F.x + C[0][0], ge = re.x + ne.measured.width - F.x2 + C[1][0], we = re.y - F.y + C[0][1], ce = re.y + ne.measured.height - F.y2 + C[1][1];
          ye = [
            [fe, we],
            [ge, ce]
          ];
        }
        const { position: oe, positionAbsolute: ae } = vu({
          nodeId: G,
          nextPosition: ee,
          nodeLookup: x,
          nodeExtent: ye || C,
          nodeOrigin: K,
          onError: j
        });
        Q = Q || ne.position.x !== oe.x || ne.position.y !== oe.y, ne.position = oe, ne.internals.positionAbsolute = ae;
      }
      if (m = m || Q, !!Q && (X(a, !0), y && (r || W || !$ && M))) {
        const [G, ne] = Gi({
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
      const [A, H] = mu(c, d, x);
      (A !== 0 || H !== 0) && (i.x = (i.x ?? 0) - A / S[2], i.y = (i.y ?? 0) - H / S[2], await T({ x: A, y: H }) && I(i)), s = requestAnimationFrame(V);
    }
    function Z(S) {
      const { nodeLookup: T, multiSelectionActive: x, nodesDraggable: C, transform: A, snapGrid: H, snapToGrid: K, selectNodesOnDrag: W, onNodeDragStart: M, onSelectionDragStart: j, unselectNodesAndEdges: X } = t();
      h = !0, (!W || !N) && !x && $ && (T.get($)?.selected || X()), N && W && $ && e?.($);
      const Q = ji(S.sourceEvent, { transform: A, snapGrid: H, snapToGrid: K, containerBounds: d });
      if (i = Q, a = u0(T, C, Q, $), a.size > 0 && (n || M || !$ && j)) {
        const [q, F] = Gi({
          nodeId: $,
          dragItems: a,
          nodeLookup: T
        });
        n?.(S.sourceEvent, a, q, F), M?.(S.sourceEvent, q, F), $ || j?.(S.sourceEvent, F);
      }
    }
    const z = Av().clickDistance(O).on("start", (S) => {
      const { domNode: T, nodeDragThreshold: x, transform: C, snapGrid: A, snapToGrid: H } = t();
      d = T?.getBoundingClientRect() || null, g = !1, m = !1, y = S.sourceEvent, x === 0 && Z(S), i = ji(S.sourceEvent, { transform: C, snapGrid: A, snapToGrid: H, containerBounds: d }), c = Gt(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: T, transform: x, snapGrid: C, snapToGrid: A, nodeDragThreshold: H, nodeLookup: K } = t(), W = ji(S.sourceEvent, { transform: x, snapGrid: C, snapToGrid: A, containerBounds: d });
      if (y = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      $ && !K.has($)) && (g = !0), !g) {
        if (!l && T && h && (l = !0, V()), !h) {
          const M = Gt(S.sourceEvent, d), j = M.x - c.x, X = M.y - c.y;
          Math.sqrt(j * j + X * X) > H && Z(S);
        }
        (i.x !== W.xSnapped || i.y !== W.ySnapped) && a && h && (c = Gt(S.sourceEvent, d), I(W));
      }
    }).on("end", (S) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: x, onNodeDragStop: C, onSelectionDragStop: A } = t();
        if (m && (x(a, !1), m = !1), o || C || !$ && A) {
          const [H, K] = Gi({
            nodeId: $,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.(S.sourceEvent, a, H, K), C?.(S.sourceEvent, H, K), $ || A?.(S.sourceEvent, K);
        }
      }
    }).filter((S) => {
      const T = S.target;
      return !S.button && (!k || !fl(T, `.${k}`, b)) && (!E || fl(T, E, b));
    });
    f.call(z);
  }
  function w() {
    f?.on(".drag", null);
  }
  return {
    update: _,
    destroy: w
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
    lo(o, Lr(i)) > 0 && r.push(i);
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
      const { x: d, y: h } = co(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
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
function Tu(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...co(s, l, l.position, !0) } : l;
}
function Du(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function p0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Au = () => !0;
function m0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: m, onConnect: y, onConnectEnd: _, isValidConnection: w = Au, onReconnectEnd: k, updateConnection: E, getTransform: b, getFromHandle: N, autoPanSpeed: $, dragThreshold: O = 1, handleDomNode: I }) {
  const V = xu(e.target);
  let Z = 0, z;
  const { x: S, y: T } = Gt(e), x = Du(i, I), C = a?.getBoundingClientRect();
  let A = !1;
  if (!C || !x)
    return;
  const H = Tu(o, x, r, l, t);
  if (!H)
    return;
  let K = Gt(e, C), W = !1, M = null, j = !1, X = null;
  function Q() {
    if (!d || !C)
      return;
    const [oe, ae] = mu(K, C, $);
    f({ x: oe, y: ae }), Z = requestAnimationFrame(Q);
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
    from: co(F, q, me.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: F,
    to: K,
    toHandle: null,
    toPosition: el[q.position],
    toNode: null,
    pointer: K
  };
  function ne() {
    A = !0, E(G), m?.(e, { nodeId: o, handleId: r, handleType: x });
  }
  O === 0 && ne();
  function ee(oe) {
    if (!A) {
      const { x: ge, y: we } = Gt(oe), ce = ge - S, _e = we - T;
      if (!(ce * ce + _e * _e > O * O))
        return;
      ne();
    }
    if (!N() || !q) {
      ye(oe);
      return;
    }
    const ae = b();
    K = Gt(oe, C), z = v0(So(K, ae, !1, [1, 1]), n, l, q), W || (Q(), W = !0);
    const re = Ou(oe, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
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
      to: re.toHandle && j ? fi({ x: re.toHandle.x, y: re.toHandle.y }, ae) : K,
      toHandle: re.toHandle,
      toPosition: j && re.toHandle ? re.toHandle.position : el[q.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null,
      pointer: K
    };
    E(fe), G = fe;
  }
  function ye(oe) {
    if (!("touches" in oe && oe.touches.length > 0)) {
      if (A) {
        (z || X) && M && j && y?.(M);
        const { inProgress: ae, ...re } = G, fe = {
          ...re,
          toPosition: G.toHandle ? G.toPosition : null
        };
        _?.(oe, fe), i && k?.(oe, fe);
      }
      g(), cancelAnimationFrame(Z), W = !1, j = !1, M = null, X = null, V.removeEventListener("mousemove", ee), V.removeEventListener("mouseup", ye), V.removeEventListener("touchmove", ee), V.removeEventListener("touchend", ye);
    }
  }
  V.addEventListener("mousemove", ee), V.addEventListener("mouseup", ye), V.addEventListener("touchmove", ee), V.addEventListener("touchend", ye);
}
function Ou(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = Au, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: m } = Gt(e), y = s.elementFromPoint(g, m), _ = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: _,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (_) {
    const k = Du(void 0, _), E = _.getAttribute("data-nodeid"), b = _.getAttribute("data-handleid"), N = _.classList.contains("connectable"), $ = _.classList.contains("connectableend");
    if (!E || !k)
      return w;
    const O = {
      source: h ? E : r,
      sourceHandle: h ? b : o,
      target: h ? r : E,
      targetHandle: h ? o : b
    };
    w.connection = O;
    const V = N && $ && (n === Mr.Strict ? h && k === "source" || !h && k === "target" : E !== r || b !== o);
    w.isValid = V && c(O), w.toHandle = Tu(E, k, b, d, n, !0);
  }
  return w;
}
const hl = {
  onPointerDown: m0,
  isValid: Ou
};
function y0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Rt(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const m = (E) => {
      if (E.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), N = E.sourceEvent.ctrlKey && rr() ? 10 : 1, $ = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, O = b[2] * Math.pow(2, $ * N);
      t.scaleTo(O);
    };
    let y = [0, 0];
    const _ = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (y = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, w = (E) => {
      const b = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !t)
        return;
      const N = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], $ = [N[0] - y[0], N[1] - y[1]];
      y = N;
      const O = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), I = {
        x: b[0] - $[0] * O,
        y: b[1] - $[1] * O
      }, V = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: I.x,
        y: I.y,
        zoom: b[2]
      }, V, a);
    }, k = fu().on("start", _).on("zoom", h ? w : null).on("zoom.wheel", f ? m : null);
    o.call(k, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Xt
  };
}
const Vi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ui = ({ x: e, y: t, zoom: n }) => Mi.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Mu = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), w0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Ji = (e, t = 0, n = w0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Hu = (e) => {
  const t = e.ctrlKey && rr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function _0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (xr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const _ = Xt(d), w = Hu(d), k = h * Math.pow(2, w);
      r.scaleTo(n, k, _, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === ar.Vertical ? 0 : d.deltaX * f, m = o === ar.Horizontal ? 0 : d.deltaY * f;
    !rr() && d.shiftKey && o !== ar.Vertical && (g = d.deltaY * f, m = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Vi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      c?.(d, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, y));
  };
}
function x0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = xr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function b0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Vi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function C0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Mu(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Vi(i.transform));
  };
}
function k0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Mu(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Vi(s.transform);
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
    if (h.button === 1 && h.type === "mousedown" && (xr(h, `${c}-flow__node`) || xr(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !m || xr(h, a) && m || xr(h, l) && (!m || o && m && !e) || !n && h.ctrlKey && m)
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
  }, d = e.getBoundingClientRect(), h = fu().scaleExtent([t, n]).translateExtent(r), f = Rt(e).call(h);
  k({
    x: o.x,
    y: o.y,
    zoom: Hr(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
  h.wheelDelta(Hu);
  function y(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? Jr : Wo).transform(Ji(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: z, noPanClassName: S, onPaneContextMenu: T, userSelectionActive: x, panOnScroll: C, panOnDrag: A, panOnScrollMode: H, panOnScrollSpeed: K, preventScrolling: W, zoomOnPinch: M, zoomOnScroll: j, zoomOnDoubleClick: X, zoomActivationKeyPressed: Q, lib: q, onTransformChange: F, connectionInProgress: U, paneClickDistance: G, selectionOnDrag: ne }) {
    x && !c.isZoomingOrPanning && w();
    const ee = C && !Q && !x;
    h.clickDistance(ne ? 1 / 0 : !_n(G) || G < 0 ? 0 : G);
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
      const ae = b0({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", ae);
      const re = C0({
        zoomPanValues: c,
        panOnDrag: A,
        onPaneContextMenu: !!T,
        onPanZoom: i,
        onTransformChange: F
      });
      h.on("zoom", re);
      const fe = k0({
        zoomPanValues: c,
        panOnDrag: A,
        panOnScroll: C,
        onPaneContextMenu: T,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", fe);
    }
    const oe = E0({
      zoomActivationKeyPressed: Q,
      panOnDrag: A,
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
  function w() {
    h.on("zoom", null);
  }
  async function k(z, S, T) {
    const x = Ui(z), C = h?.constrain()(x, S, T);
    return C && await y(C), new Promise((A) => A(C));
  }
  async function E(z, S) {
    const T = Ui(z);
    return await y(T, S), new Promise((x) => x(T));
  }
  function b(z) {
    if (f) {
      const S = Ui(z), T = f.property("__zoom");
      (T.k !== z.zoom || T.x !== z.x || T.y !== z.y) && h?.transform(f, S, null, { sync: !0 });
    }
  }
  function N() {
    const z = f ? du(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function $(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? Jr : Wo).scaleTo(Ji(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function O(z, S) {
    return f ? new Promise((T) => {
      h?.interpolate(S?.interpolate === "linear" ? Jr : Wo).scaleBy(Ji(f, S?.duration, S?.ease, () => T(!0)), z);
    }) : Promise.resolve(!1);
  }
  function I(z) {
    h?.scaleExtent(z);
  }
  function V(z) {
    h?.translateExtent(z);
  }
  function Z(z) {
    const S = !_n(z) || z < 0 ? 0 : z;
    h?.clickDistance(S);
  }
  return {
    update: _,
    destroy: w,
    setViewport: E,
    setViewportConstrained: k,
    getViewport: N,
    scaleTo: $,
    scaleBy: O,
    setScaleExtent: I,
    setTranslateExtent: V,
    syncViewport: b,
    setClickDistance: Z
  };
}
var gl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(gl || (gl = {}));
var N0 = /* @__PURE__ */ te("<div><!></div>");
function Wn(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7, null), r = p(t, "type", 7, "source"), o = p(t, "position", 23, () => me.Top), i = p(t, "style", 7), s = p(t, "class", 7), a = p(t, "isConnectable", 7), l = p(t, "isConnectableStart", 7, !0), c = p(t, "isConnectableEnd", 7, !0), d = p(t, "isValidConnection", 7), h = p(t, "onconnect", 7), f = p(t, "ondisconnect", 7), g = p(t, "children", 7), m = /* @__PURE__ */ ze(t, [
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
  const y = Zn("svelteflow__node_id"), _ = Zn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ P(() => r() === "target"), k = /* @__PURE__ */ P(() => a() !== void 0 ? a() : _.value), E = nn(), b = /* @__PURE__ */ P(() => E.ariaLabelConfig), N = null;
  hc(() => {
    if (h() || f()) {
      E.edges;
      let M = E.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (N && !Sp(M, N)) {
        const j = M ?? /* @__PURE__ */ new Map();
        tl(N, j, f()), tl(j, N, h());
      }
      N = new Map(M);
    }
  });
  let $ = /* @__PURE__ */ P(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: M, toHandle: j, isValid: X } = E.connection, Q = M && M.nodeId === y && M.type === r() && M.id === n(), q = j && j.nodeId === y && j.type === r() && j.id === n(), F = E.connectionMode === Mr.Strict ? M?.type !== r() : y !== M?.nodeId || n() !== M?.id;
    return [
      !0,
      Q,
      q,
      F,
      q && X
    ];
  }), O = /* @__PURE__ */ P(() => go(u($), 5)), I = /* @__PURE__ */ P(() => u(O)[0]), V = /* @__PURE__ */ P(() => u(O)[1]), Z = /* @__PURE__ */ P(() => u(O)[2]), z = /* @__PURE__ */ P(() => u(O)[3]), S = /* @__PURE__ */ P(() => u(O)[4]);
  function T(M) {
    const j = E.onbeforeconnect ? E.onbeforeconnect(M) : M;
    j && (E.addEdge(j), E.onconnect?.(M));
  }
  function x(M) {
    const j = Cu(M);
    M.currentTarget && (j && M.button === 0 || !j) && hl.onPointerDown(M, {
      handleId: n(),
      nodeId: y,
      isTarget: u(w),
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
    const j = xu(M.target), X = d() ?? E.isValidConnection, { connectionMode: Q, clickConnectStartHandle: q, flowId: F, nodeLookup: U } = E, { connection: G, isValid: ne } = hl.isValid(M, {
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
    const ee = structuredClone(Xl(E.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, E.onclickconnectend?.(M, ee), E.clickConnectStartHandle = null;
  }
  var A = {
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
  tt(H, () => ({
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
    [In]: {
      valid: u(S),
      connectingto: u(Z),
      connectingfrom: u(V),
      source: !u(w),
      target: u(w),
      connectablestart: l(),
      connectableend: c(),
      connectable: u(k),
      connectionindicator: u(k) && (!u(I) || u(z)) && (u(I) || E.clickConnectStartHandle ? c() : l())
    }
  }));
  var W = B(H);
  return Ge(W, () => g() ?? vt), R(H), D(e, H), de(A);
}
se(
  Wn,
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
function ua(e, t) {
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
  Wn(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = L(a), c = L(l);
  return Wn(c, {
    type: "source",
    get position() {
      return o();
    }
  }), Ce(() => Be(l, ` ${n()?.label ?? ""} `)), D(e, s), de(i);
}
se(ua, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var $0 = /* @__PURE__ */ te(" <!>", 1);
function Lu(e, t) {
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
  return Wn(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ce(() => Be(s, `${n()?.label ?? ""} `)), D(e, i), de(o);
}
se(Lu, { data: {}, sourcePosition: {} }, [], [], !0);
var T0 = /* @__PURE__ */ te(" <!>", 1);
function Vu(e, t) {
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
  return Wn(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ce(() => Be(s, `${n()?.label ?? ""} `)), D(e, i), de(o);
}
se(Vu, { data: {}, targetPosition: {} }, [], [], !0);
function Iu(e, t) {
}
se(Iu, {}, [], [], !0);
function Qi(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function zu(e, t) {
  const n = /* @__PURE__ */ P(nn), r = /* @__PURE__ */ P(() => u(n).domNode);
  let o;
  return u(r) ? Qi(e, u(r), t) : o = Fs(() => {
    je(() => {
      Qi(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      Qi(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Ru() {
  let e = /* @__PURE__ */ Se(typeof window > "u");
  if (u(e)) {
    const t = Fs(() => {
      je(() => {
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
const vl = (e) => Pp(e), D0 = (e) => gu(e);
function hn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const hi = {
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
function Bu(e, t) {
  ue(t, !0), Ie(e, O0);
  let n = p(t, "x", 7, 0), r = p(t, "y", 7, 0), o = p(t, "width", 7), i = p(t, "height", 7), s = p(t, "selectEdgeOnClick", 7, !1), a = p(t, "transparent", 7, !1), l = p(t, "class", 7), c = p(t, "children", 7), d = /* @__PURE__ */ ze(t, [
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
  const h = nn(), f = Zn("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let g = /* @__PURE__ */ P(() => h.visible.edges.get(f)?.zIndex);
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
  }, y = A0(), _ = () => {
    s() && h.handleEdgeSelection(f);
  };
  tt(
    y,
    (k) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: _,
      ...d,
      [ln]: k
    }),
    [
      () => ({
        display: Ru().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: hn(o()),
        height: hn(i()),
        "z-index": u(g)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var w = B(y);
  return Ge(w, () => c() ?? vt), R(y), ft(y, (k, E) => zu?.(k, E), () => "edge-labels"), D(e, y), de(m);
}
se(
  Bu,
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
var M0 = /* @__PURE__ */ ve("<path></path>"), H0 = /* @__PURE__ */ ve('<path fill="none"></path><!><!>', 1);
function No(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "path", 7), o = p(t, "label", 7), i = p(t, "labelX", 7), s = p(t, "labelY", 7), a = p(t, "labelStyle", 7), l = p(t, "markerStart", 7), c = p(t, "markerEnd", 7), d = p(t, "style", 7), h = p(t, "interactionWidth", 7, 20), f = p(t, "class", 7), g = /* @__PURE__ */ ze(t, [
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
    set id(N) {
      n(N), v();
    },
    get path() {
      return r();
    },
    set path(N) {
      r(N), v();
    },
    get label() {
      return o();
    },
    set label(N) {
      o(N), v();
    },
    get labelX() {
      return i();
    },
    set labelX(N) {
      i(N), v();
    },
    get labelY() {
      return s();
    },
    set labelY(N) {
      s(N), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(N) {
      a(N), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(N) {
      l(N), v();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(N) {
      c(N), v();
    },
    get style() {
      return d();
    },
    set style(N) {
      d(N), v();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(N = 20) {
      h(N), v();
    },
    get class() {
      return f();
    },
    set class(N) {
      f(N), v();
    }
  }, y = H0(), _ = ie(y), w = L(_);
  {
    var k = (N) => {
      var $ = M0();
      tt($, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), D(N, $);
    };
    le(w, (N) => {
      h() > 0 && N(k);
    });
  }
  var E = L(w);
  {
    var b = (N) => {
      Bu(N, {
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
        children: ($, O) => {
          pe();
          var I = ke();
          Ce(() => Be(I, o())), D($, I);
        },
        $$slots: { default: !0 }
      });
    };
    le(E, (N) => {
      o() && N(b);
    });
  }
  return Ce(() => {
    be(_, "id", n()), be(_, "d", r()), Pt(_, 0, On(["svelte-flow__edge-path", f()])), be(_, "marker-start", l()), be(_, "marker-end", c()), dt(_, d());
  }), D(e, y), de(m);
}
se(
  No,
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
function da(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "interactionWidth", 7), o = p(t, "label", 7), i = p(t, "labelStyle", 7), s = p(t, "markerEnd", 7), a = p(t, "markerStart", 7), l = p(t, "pathOptions", 7), c = p(t, "sourcePosition", 7), d = p(t, "sourceX", 7), h = p(t, "sourceY", 7), f = p(t, "style", 7), g = p(t, "targetPosition", 7), m = p(t, "targetX", 7), y = p(t, "targetY", 7), _ = /* @__PURE__ */ P(() => ku({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ P(() => go(u(_), 3)), k = /* @__PURE__ */ P(() => u(w)[0]), E = /* @__PURE__ */ P(() => u(w)[1]), b = /* @__PURE__ */ P(() => u(w)[2]);
  var N = {
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
  return No(e, {
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
  }), de(N);
}
se(
  da,
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
function Fu(e, t) {
  ue(t, !0);
  let n = p(t, "interactionWidth", 7), r = p(t, "label", 7), o = p(t, "labelStyle", 7), i = p(t, "style", 7), s = p(t, "markerEnd", 7), a = p(t, "markerStart", 7), l = p(t, "sourcePosition", 7), c = p(t, "sourceX", 7), d = p(t, "sourceY", 7), h = p(t, "targetPosition", 7), f = p(t, "targetX", 7), g = p(t, "targetY", 7), m = /* @__PURE__ */ P(() => sa({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ P(() => go(u(m), 3)), _ = /* @__PURE__ */ P(() => u(y)[0]), w = /* @__PURE__ */ P(() => u(y)[1]), k = /* @__PURE__ */ P(() => u(y)[2]);
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
  return No(e, {
    get path() {
      return u(_);
    },
    get labelX() {
      return u(w);
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
  Fu,
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
function Ku(e, t) {
  ue(t, !0);
  let n = p(t, "sourceX", 7), r = p(t, "sourceY", 7), o = p(t, "targetX", 7), i = p(t, "targetY", 7), s = p(t, "label", 7), a = p(t, "labelStyle", 7), l = p(t, "markerStart", 7), c = p(t, "markerEnd", 7), d = p(t, "interactionWidth", 7), h = p(t, "style", 7), f = /* @__PURE__ */ P(() => Su({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ P(() => go(u(f), 3)), m = /* @__PURE__ */ P(() => u(g)[0]), y = /* @__PURE__ */ P(() => u(g)[1]), _ = /* @__PURE__ */ P(() => u(g)[2]);
  var w = {
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
  return No(e, {
    get path() {
      return u(m);
    },
    get labelX() {
      return u(y);
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
  }), de(w);
}
se(
  Ku,
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
function Zu(e, t) {
  ue(t, !0);
  let n = p(t, "sourceX", 7), r = p(t, "sourceY", 7), o = p(t, "sourcePosition", 7), i = p(t, "targetX", 7), s = p(t, "targetY", 7), a = p(t, "targetPosition", 7), l = p(t, "label", 7), c = p(t, "labelStyle", 7), d = p(t, "markerStart", 7), h = p(t, "markerEnd", 7), f = p(t, "interactionWidth", 7), g = p(t, "style", 7), m = /* @__PURE__ */ P(() => sa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ P(() => go(u(m), 3)), _ = /* @__PURE__ */ P(() => u(y)[0]), w = /* @__PURE__ */ P(() => u(y)[1]), k = /* @__PURE__ */ P(() => u(y)[2]);
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
  return No(e, {
    get path() {
      return u(_);
    },
    get labelX() {
      return u(w);
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
  Zu,
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
    this.#t = t, this.#e = ec(n);
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
      (i) => ds(o, "change", i)
    );
  }
}
function R0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return oa(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
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
      const { visibleNodes: y, transform: _, width: w, height: k } = e;
      if (Fp({
        sourceNode: h,
        targetNode: f,
        width: w,
        height: k,
        transform: _
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
const Yu = {
  input: Lu,
  output: Vu,
  default: ua,
  group: Iu
}, Wu = {
  straight: Ku,
  smoothstep: Fu,
  default: da,
  step: Zu
};
function B0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ko(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ia(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function F0(e) {
  class t {
    #t = /* @__PURE__ */ P(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      J(this.#t, r);
    }
    #e = /* @__PURE__ */ Se(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      J(this.#e, r);
    }
    #n = /* @__PURE__ */ Se(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      J(this.#n, r);
    }
    #r = /* @__PURE__ */ Se(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      J(this.#r, r);
    }
    #l = /* @__PURE__ */ Se(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      J(this.#l, r);
    }
    #i = /* @__PURE__ */ P(() => {
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
    #o = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#o);
    }
    set viewportInitialized(r) {
      J(this.#o, r);
    }
    #s = /* @__PURE__ */ P(() => (l0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
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
    #a = /* @__PURE__ */ P(() => {
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
    #c = /* @__PURE__ */ P(() => {
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
    #u = /* @__PURE__ */ P(() => {
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
        const { viewport: m, width: y, height: _ } = this, w = [m.x, m.y, m.zoom];
        h = R0(s, w, y, _), f = pl({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: w,
          width: y,
          height: _
        });
      } else
        h = this.nodeLookup, f = pl(g);
      return { nodes: h, edges: f };
    });
    get visible() {
      return u(this.#u);
    }
    set visible(r) {
      J(this.#u, r);
    }
    #d = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      J(this.#d, r);
    }
    #f = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      J(this.#f, r);
    }
    #g = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#g);
    }
    set elementsSelectable(r) {
      J(this.#g, r);
    }
    #h = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#h);
    }
    set nodesFocusable(r) {
      J(this.#h, r);
    }
    #w = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#w);
    }
    set edgesFocusable(r) {
      J(this.#w, r);
    }
    #_ = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#_);
    }
    set disableKeyboardA11y(r) {
      J(this.#_, r);
    }
    #x = /* @__PURE__ */ P(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#x);
    }
    set minZoom(r) {
      J(this.#x, r);
    }
    #m = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#m);
    }
    set maxZoom(r) {
      J(this.#m, r);
    }
    #v = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#v);
    }
    set nodeOrigin(r) {
      J(this.#v, r);
    }
    #p = /* @__PURE__ */ P(() => e.props.nodeExtent ?? bs);
    get nodeExtent() {
      return u(this.#p);
    }
    set nodeExtent(r) {
      J(this.#p, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.translateExtent ?? bs);
    get translateExtent() {
      return u(this.#y);
    }
    set translateExtent(r) {
      J(this.#y, r);
    }
    #b = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#b);
    }
    set defaultEdgeOptions(r) {
      J(this.#b, r);
    }
    #C = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#C);
    }
    set nodeDragThreshold(r) {
      J(this.#C, r);
    }
    #k = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      J(this.#k, r);
    }
    #E = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#E);
    }
    set autoPanOnConnect(r) {
      J(this.#E, r);
    }
    #S = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      J(this.#S, r);
    }
    #N = /* @__PURE__ */ P(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#N);
    }
    set autoPanSpeed(r) {
      J(this.#N, r);
    }
    #P = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#P);
    }
    set connectionDragThreshold(r) {
      J(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #$ = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#$);
    }
    set snapGrid(r) {
      J(this.#$, r);
    }
    #T = /* @__PURE__ */ Se(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      J(this.#T, r);
    }
    #D = /* @__PURE__ */ Se(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      J(this.#D, r);
    }
    #A = /* @__PURE__ */ Se(!1);
    get selectionKeyPressed() {
      return u(this.#A);
    }
    set selectionKeyPressed(r) {
      J(this.#A, r);
    }
    #O = /* @__PURE__ */ Se(!1);
    get multiselectionKeyPressed() {
      return u(this.#O);
    }
    set multiselectionKeyPressed(r) {
      J(this.#O, r);
    }
    #M = /* @__PURE__ */ Se(!1);
    get deleteKeyPressed() {
      return u(this.#M);
    }
    set deleteKeyPressed(r) {
      J(this.#M, r);
    }
    #H = /* @__PURE__ */ Se(!1);
    get panActivationKeyPressed() {
      return u(this.#H);
    }
    set panActivationKeyPressed(r) {
      J(this.#H, r);
    }
    #L = /* @__PURE__ */ Se(!1);
    get zoomActivationKeyPressed() {
      return u(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      J(this.#L, r);
    }
    #V = /* @__PURE__ */ Se(null);
    get selectionRectMode() {
      return u(this.#V);
    }
    set selectionRectMode(r) {
      J(this.#V, r);
    }
    #I = /* @__PURE__ */ Se("");
    get ariaLiveMessage() {
      return u(this.#I);
    }
    set ariaLiveMessage(r) {
      J(this.#I, r);
    }
    #z = /* @__PURE__ */ P(() => e.props.selectionMode ?? ui.Partial);
    get selectionMode() {
      return u(this.#z);
    }
    set selectionMode(r) {
      J(this.#z, r);
    }
    #R = /* @__PURE__ */ P(() => ({ ...Yu, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#R);
    }
    set nodeTypes(r) {
      J(this.#R, r);
    }
    #B = /* @__PURE__ */ P(() => ({ ...Wu, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#B);
    }
    set edgeTypes(r) {
      J(this.#B, r);
    }
    #F = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#F);
    }
    set noPanClass(r) {
      J(this.#F, r);
    }
    #K = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#K);
    }
    set noDragClass(r) {
      J(this.#K, r);
    }
    #Z = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      J(this.#Z, r);
    }
    #Y = /* @__PURE__ */ P(() => Ip(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#Y);
    }
    set ariaLabelConfig(r) {
      J(this.#Y, r);
    }
    #W = /* @__PURE__ */ Se(B0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
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
    #X = /* @__PURE__ */ Se(
      // _connection is viewport independent and originating from XYHandle
      Cs
    );
    get _connection() {
      return u(this.#X);
    }
    set _connection(r) {
      J(this.#X, r);
    }
    #q = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: So(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#q);
    }
    set connection(r) {
      J(this.#q, r);
    }
    #j = /* @__PURE__ */ P(() => e.props.connectionMode ?? Mr.Strict);
    get connectionMode() {
      return u(this.#j);
    }
    set connectionMode(r) {
      J(this.#j, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#G);
    }
    set connectionRadius(r) {
      J(this.#G, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#U);
    }
    set isValidConnection(r) {
      J(this.#U, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#J);
    }
    set selectNodesOnDrag(r) {
      J(this.#J, r);
    }
    #Q = /* @__PURE__ */ P(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#Q);
    }
    set defaultMarkerColor(r) {
      J(this.#Q, r);
    }
    #ee = /* @__PURE__ */ P(() => Gp(e.edges, {
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
    #te = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      J(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => e.props.onflowerror ?? Mp);
    get onerror() {
      return u(this.#ne);
    }
    set onerror(r) {
      J(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => e.props.ondelete);
    get ondelete() {
      return u(this.#re);
    }
    set ondelete(r) {
      J(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#oe);
    }
    set onbeforedelete(r) {
      J(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#ie);
    }
    set onbeforeconnect(r) {
      J(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => e.props.onconnect);
    get onconnect() {
      return u(this.#se);
    }
    set onconnect(r) {
      J(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#ae);
    }
    set onconnectstart(r) {
      J(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#le);
    }
    set onconnectend(r) {
      J(this.#le, r);
    }
    #ce = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ce);
    }
    set onbeforereconnect(r) {
      J(this.#ce, r);
    }
    #ue = /* @__PURE__ */ P(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      J(this.#ue, r);
    }
    #de = /* @__PURE__ */ P(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#de);
    }
    set onreconnectstart(r) {
      J(this.#de, r);
    }
    #fe = /* @__PURE__ */ P(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#fe);
    }
    set onreconnectend(r) {
      J(this.#fe, r);
    }
    #he = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#he);
    }
    set clickConnect(r) {
      J(this.#he, r);
    }
    #ge = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ge);
    }
    set onclickconnectstart(r) {
      J(this.#ge, r);
    }
    #ve = /* @__PURE__ */ P(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#ve);
    }
    set onclickconnectend(r) {
      J(this.#ve, r);
    }
    #pe = /* @__PURE__ */ Se(null);
    get clickConnectStartHandle() {
      return u(this.#pe);
    }
    set clickConnectStartHandle(r) {
      J(this.#pe, r);
    }
    #me = /* @__PURE__ */ P(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#me);
    }
    set onselectiondrag(r) {
      J(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#ye);
    }
    set onselectiondragstart(r) {
      J(this.#ye, r);
    }
    #we = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
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
    #_e = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#_e);
    }
    set colorMode(r) {
      J(this.#_e, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Cs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function nn() {
  const e = Zn(gi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const gi = Symbol();
function Xu(e) {
  const t = F0(e);
  function n(z) {
    t.nodeTypes = {
      ...Yu,
      ...z
    };
  }
  function r(z) {
    t.edgeTypes = {
      ...Wu,
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
      const A = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!A)
        continue;
      const H = { ...A };
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
  function _(z) {
    const S = z?.nodes ? new Set(z.nodes.map((K) => K.id)) : null, [T, x] = y(t.nodes, S);
    T && (t.nodes = x);
    const C = z?.edges ? new Set(z.edges.map((K) => K.id)) : null, [A, H] = y(t.edges, C);
    A && (t.edges = H);
  }
  function w(z) {
    const S = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((T) => {
      const x = z.includes(T.id), C = S && T.selected || x;
      return !!T.selected !== C ? { ...T, selected: C } : T;
    }), S || _({ nodes: [] });
  }
  function k(z) {
    const S = t.multiselectionKeyPressed;
    t.edges = t.edges.map((T) => {
      const x = z.includes(T.id), C = S && T.selected || x;
      return !!T.selected !== C ? { ...T, selected: C } : T;
    }), S || _({ edges: [] });
  }
  function E(z, S, T) {
    const x = t.nodeLookup.get(z);
    if (!x) {
      console.warn("012", so.error012(z));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, x.selected ? (S || x.selected && t.multiselectionKeyPressed) && (_({ nodes: [x], edges: [] }), requestAnimationFrame(() => T?.blur())) : w([z]);
  }
  function b(z) {
    const S = t.edgeLookup.get(z);
    if (!S) {
      console.warn("012", so.error012(z));
      return;
    }
    (S.selectable || t.elementsSelectable && typeof S.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, S.selected ? S.selected && t.multiselectionKeyPressed && _({ nodes: [], edges: [S] }) : k([z]));
  }
  function N(z, S) {
    const { nodeExtent: T, snapGrid: x, nodeOrigin: C, nodeLookup: A, nodesDraggable: H, onerror: K } = t, W = /* @__PURE__ */ new Map(), M = x?.[0] ?? 5, j = x?.[1] ?? 5, X = z.x * M * S, Q = z.y * j * S;
    for (const q of A.values()) {
      if (!(q.selected && (q.draggable || H && typeof q.draggable > "u")))
        continue;
      let U = {
        x: q.internals.positionAbsolute.x + X,
        y: q.internals.positionAbsolute.y + Q
      };
      x && (U = Eo(U, x));
      const { position: G, positionAbsolute: ne } = vu({
        nodeId: q.id,
        nextPosition: U,
        nodeLookup: A,
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
  const O = (z) => {
    t._connection = { ...z };
  };
  function I() {
    t._connection = Cs;
  }
  function V() {
    t.resetStoreValues(), _();
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
    unselectNodesAndEdges: _,
    addSelectedNodes: w,
    addSelectedEdges: k,
    handleNodeSelection: E,
    handleEdgeSelection: b,
    moveSelectedNodes: N,
    panBy: $,
    updateConnection: O,
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
function qu(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "panOnScrollMode", 7), o = p(t, "preventScrolling", 7), i = p(t, "zoomOnScroll", 7), s = p(t, "zoomOnDoubleClick", 7), a = p(t, "zoomOnPinch", 7), l = p(t, "panOnDrag", 7), c = p(t, "panOnScroll", 7), d = p(t, "panOnScrollSpeed", 7), h = p(t, "paneClickDistance", 7), f = p(t, "selectionOnDrag", 7), g = p(t, "onmovestart", 7), m = p(t, "onmove", 7), y = p(t, "onmoveend", 7), _ = p(t, "oninit", 7), w = p(t, "children", 7), k = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ P(() => n().panActivationKeyPressed || c());
  const { viewport: b } = n();
  let N = !1;
  je(() => {
    !N && n().viewportInitialized && (_()?.(), N = !0);
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
      return _();
    },
    set oninit(V) {
      _(V), v();
    },
    get children() {
      return w();
    },
    set children(V) {
      w(V), v();
    }
  }, O = Z0(), I = B(O);
  return Ge(I, w), R(O), ft(O, (V, Z) => K0?.(V, Z), () => ({
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
  })), D(e, O), de($);
}
se(
  qu,
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
var Y0 = /* @__PURE__ */ te("<div><!></div>");
function ju(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "panOnDrag", 7, !0), o = p(t, "paneClickDistance", 7, 1), i = p(t, "selectionOnDrag", 7), s = p(t, "onpaneclick", 7), a = p(t, "onpanecontextmenu", 7), l = p(t, "onselectionstart", 7), c = p(t, "onselectionend", 7), d = p(t, "children", 7), h, f = null, g = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), _ = /* @__PURE__ */ P(() => n().selectionKeyPressed || !!n().selectionRect || i() && u(y) !== !0), w = /* @__PURE__ */ P(() => n().elementsSelectable && (u(_) || n().selectionRectMode === "user")), k = !1;
  function E(C) {
    if (f = h?.getBoundingClientRect(), !f) return;
    const A = C.target === h, H = !A && !!C.target.closest(".nokey"), K = i() && A || n().selectionKeyPressed;
    if (H || !u(_) || !K || C.button !== 0 || !C.isPrimary)
      return;
    C.target?.setPointerCapture?.(C.pointerId), k = !1;
    const { x: W, y: M } = Gt(C, f);
    n(n().selectionRect = { width: 0, height: 0, startX: W, startY: M, x: W, y: M }, !0), A || (C.stopPropagation(), C.preventDefault());
  }
  function b(C) {
    if (!u(_) || !f || !n().selectionRect)
      return;
    const A = Gt(C, f), { startX: H = 0, startY: K = 0 } = n().selectionRect;
    if (!k) {
      const Q = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(A.x - H, A.y - K) <= Q)
        return;
      n().unselectNodesAndEdges(), l()?.(C);
    }
    k = !0;
    const W = {
      ...n().selectionRect,
      x: A.x < H ? A.x : H,
      y: A.y < K ? A.y : K,
      width: Math.abs(A.x - H),
      height: Math.abs(A.y - K)
    }, M = g, j = m;
    g = new Set(oa(
      n().nodeLookup,
      W,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === ui.Partial,
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
    wl(M, g) || n(n().nodes = n().nodes.map(yl(g)), !0), wl(j, m) || n(n().edges = n().edges.map(yl(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = W, !0);
  }
  function N(C) {
    C.button === 0 && (C.target?.releasePointerCapture?.(C.pointerId), !k && C.target === h && I?.(C), n(n().selectionRect = null, !0), k && n(n().selectionRectMode = g.size > 0 ? "nodes" : null, !0), k && c()?.(C));
  }
  const $ = (C) => {
    if (Array.isArray(u(y)) && u(y).includes(2)) {
      C.preventDefault();
      return;
    }
    a()?.({ event: C });
  }, O = (C) => {
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
  var S = /* @__PURE__ */ P(() => u(w) ? void 0 : ml(I, h));
  Z.__click = function(...C) {
    u(S)?.apply(this, C);
  }, Z.__pointermove = function(...C) {
    (u(w) ? b : void 0)?.apply(this, C);
  }, Z.__pointerup = function(...C) {
    (u(w) ? N : void 0)?.apply(this, C);
  };
  var T = /* @__PURE__ */ P(() => ml($, h));
  Z.__contextmenu = function(...C) {
    u(T)?.apply(this, C);
  };
  var x = B(Z);
  return Ge(x, d), R(Z), $t(Z, (C) => h = C, () => h), Ce((C) => z = Pt(Z, 1, "svelte-flow__pane svelte-flow__container", null, z, C), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(_)
    })
  ]), ni(
    "pointerdown",
    Z,
    function(...C) {
      (u(w) ? E : void 0)?.apply(this, C);
    },
    !0
  ), ni(
    "click",
    Z,
    function(...C) {
      (u(w) ? O : void 0)?.apply(this, C);
    },
    !0
  ), D(e, Z), de(V);
}
Un(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  ju,
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
function Gu(e, t) {
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
  return Ge(a, r), R(i), Ce(() => s = dt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), D(e, i), de(o);
}
se(Gu, { store: {}, children: {} }, [], [], !0);
function Uu(e, t) {
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
function Ju(e, t) {
  ue(t, !0), Ie(e, j0);
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
        be(f, "id", `${G0}-${n().flowId}`), Be(g, n().ariaLiveMessage);
      }), D(h, f);
    };
    le(c, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Ce(() => {
    be(i, "id", `${Qu}-${n().flowId}`), Be(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), be(a, "id", `${ed}-${n().flowId}`), Be(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), D(e, o), de(r);
}
se(Ju, { store: {} }, [], [], !0);
const Qu = "svelte-flow__node-desc", ed = "svelte-flow__edge-desc", G0 = "svelte-flow__aria-live";
var U0 = /* @__PURE__ */ te("<div><!></div>");
function td(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "node", 7), o = p(t, "resizeObserver", 7), i = p(t, "nodeClickDistance", 7), s = p(t, "onnodeclick", 7), a = p(t, "onnodedrag", 7), l = p(t, "onnodedragstart", 7), c = p(t, "onnodedragstop", 7), d = p(t, "onnodepointerenter", 7), h = p(t, "onnodepointerleave", 7), f = p(t, "onnodepointermove", 7), g = p(t, "onnodecontextmenu", 7), m = /* @__PURE__ */ P(() => mt(r().data, () => ({}), !0)), y = /* @__PURE__ */ P(() => mt(r().selected, !1)), _ = /* @__PURE__ */ P(() => r().draggable), w = /* @__PURE__ */ P(() => r().selectable), k = /* @__PURE__ */ P(() => mt(r().deletable, !0)), E = /* @__PURE__ */ P(() => r().connectable), b = /* @__PURE__ */ P(() => r().focusable), N = /* @__PURE__ */ P(() => mt(r().hidden, !1)), $ = /* @__PURE__ */ P(() => mt(r().dragging, !1)), O = /* @__PURE__ */ P(() => mt(r().style, "")), I = /* @__PURE__ */ P(() => r().class), V = /* @__PURE__ */ P(() => mt(r().type, "default")), Z = /* @__PURE__ */ P(() => r().parentId), z = /* @__PURE__ */ P(() => r().sourcePosition), S = /* @__PURE__ */ P(() => r().targetPosition), T = /* @__PURE__ */ P(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).width), x = /* @__PURE__ */ P(() => mt(r().measured, () => ({ width: 0, height: 0 }), !0).height), C = /* @__PURE__ */ P(() => r().initialWidth), A = /* @__PURE__ */ P(() => r().initialHeight), H = /* @__PURE__ */ P(() => r().width), K = /* @__PURE__ */ P(() => r().height), W = /* @__PURE__ */ P(() => r().dragHandle), M = /* @__PURE__ */ P(() => mt(r().internals.z, 0)), j = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), X = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), Q = /* @__PURE__ */ P(() => r().internals.userNode), { id: q } = r(), F = /* @__PURE__ */ P(() => u(_) ?? n().nodesDraggable), U = /* @__PURE__ */ P(() => u(w) ?? n().elementsSelectable), G = /* @__PURE__ */ P(() => u(E) ?? n().nodesConnectable), ne = /* @__PURE__ */ P(() => wu(r())), ee = /* @__PURE__ */ P(() => !!r().internals.handleBounds), ye = /* @__PURE__ */ P(() => u(ne) && u(ee)), oe = /* @__PURE__ */ P(() => u(b) ?? n().nodesFocusable);
  function ae(he) {
    return n().parentLookup.has(he);
  }
  let re = /* @__PURE__ */ P(() => ae(q)), fe = /* @__PURE__ */ Se(null), ge = null, we = u(V), ce = u(z), _e = u(S), De = /* @__PURE__ */ P(() => n().nodeTypes[u(V)] ?? ua), Y = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  Pr("svelteflow__node_connectable", {
    get value() {
      return u(G);
    }
  }), Pr("svelteflow__node_id", q);
  let Ae = /* @__PURE__ */ P(() => {
    const he = u(T) === void 0 ? u(H) ?? u(C) : u(H), Xe = u(x) === void 0 ? u(K) ?? u(A) : u(K);
    if (!(he === void 0 && Xe === void 0 && u(O) === void 0))
      return `${u(O)};${he ? `width:${hn(he)};` : ""}${Xe ? `height:${hn(Xe)};` : ""}`;
  });
  je(() => {
    (u(V) !== we || u(z) !== ce || u(S) !== _e) && u(fe) !== null && requestAnimationFrame(() => {
      u(fe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[q, { id: q, nodeElement: u(fe), force: !0 }]]));
    }), we = u(V), ce = u(z), _e = u(S);
  }), je(() => {
    o() && (!u(ye) || u(fe) !== ge) && (ge && o().unobserve(ge), u(fe) && o().observe(u(fe)), ge = u(fe));
  }), _o(() => {
    ge && o()?.unobserve(ge);
  });
  function Ve(he) {
    u(U) && (!n().selectNodesOnDrag || !u(F) || n().nodeDragThreshold > 0) && n().handleNodeSelection(q), s()?.({ node: u(Q), event: he });
  }
  function He(he) {
    if (!(bu(he) || n().disableKeyboardA11y))
      if (hu.includes(he.key) && u(U)) {
        const Xe = he.key === "Escape";
        n().handleNodeSelection(q, Xe, u(fe));
      } else u(F) && r().selected && Object.prototype.hasOwnProperty.call(hi, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = u(Y)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(hi[he.key], he.shiftKey ? 4 : 1));
  }
  const ot = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(fe)?.matches(":focus-visible"))
      return;
    const { width: he, height: Xe, viewport: st } = n();
    oa(/* @__PURE__ */ new Map([[q, r()]]), { x: 0, y: 0, width: he, height: Xe }, [st.x, st.y, st.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: st.zoom });
  };
  var it = {
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
      return c();
    },
    set onnodedragstop(he) {
      c(he), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(he) {
      d(he), v();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(he) {
      h(he), v();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(he) {
      f(he), v();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(he) {
      g(he), v();
    }
  }, Lt = Ee(), Le = ie(Lt);
  {
    var Ye = (he) => {
      var Xe = U0();
      tt(Xe, () => ({
        "data-id": q,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(V)}`,
          u(I)
        ],
        style: u(Ae),
        onclick: Ve,
        onpointerenter: d() ? (Re) => d()({ node: u(Q), event: Re }) : void 0,
        onpointerleave: h() ? (Re) => h()({ node: u(Q), event: Re }) : void 0,
        onpointermove: f() ? (Re) => f()({ node: u(Q), event: Re }) : void 0,
        oncontextmenu: g() ? (Re) => g()({ node: u(Q), event: Re }) : void 0,
        onkeydown: u(oe) ? He : void 0,
        onfocus: u(oe) ? ot : void 0,
        tabIndex: u(oe) ? 0 : void 0,
        role: r().ariaRole ?? (u(oe) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Qu}-${n().flowId}`,
        ...r().domAttributes,
        [In]: {
          dragging: u($),
          selected: u(y),
          draggable: u(F),
          connectable: u(G),
          selectable: u(U),
          nopan: u(F),
          parent: u(re)
        },
        [ln]: {
          "z-index": u(M),
          transform: `translate(${u(j) ?? ""}px, ${u(X) ?? ""}px)`,
          visibility: u(ne) ? "visible" : "hidden"
        }
      }));
      var st = B(Xe);
      Pi(st, () => u(De), (Re, Yt) => {
        Yt(Re, {
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
      }), R(Xe), ft(Xe, (Re, Yt) => Uu?.(Re, Yt), () => ({
        nodeId: q,
        isSelectable: u(U),
        disabled: !u(F),
        handleSelector: u(W),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Re, Yt, Tt, xt) => {
          a()?.({ event: Re, targetNode: Tt, nodes: xt });
        },
        onDragStart: (Re, Yt, Tt, xt) => {
          l()?.({ event: Re, targetNode: Tt, nodes: xt });
        },
        onDragStop: (Re, Yt, Tt, xt) => {
          c()?.({ event: Re, targetNode: Tt, nodes: xt });
        },
        store: n()
      })), $t(Xe, (Re) => J(fe, Re), () => u(fe)), D(he, Xe);
    };
    le(Le, (he) => {
      u(N) || he(Ye);
    });
  }
  return D(e, Lt), de(it);
}
se(
  td,
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
function nd(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "nodeClickDistance", 7), o = p(t, "onnodeclick", 7), i = p(t, "onnodecontextmenu", 7), s = p(t, "onnodepointerenter", 7), a = p(t, "onnodepointermove", 7), l = p(t, "onnodepointerleave", 7), c = p(t, "onnodedrag", 7), d = p(t, "onnodedragstart", 7), h = p(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const _ = /* @__PURE__ */ new Map();
    y.forEach((w) => {
      const k = w.target.getAttribute("data-id");
      _.set(k, { id: k, nodeElement: w.target, force: !0 });
    }), n().updateNodeInternals(_);
  });
  _o(() => {
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
  return pt(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, _) => {
    td(y, {
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
      set store(w) {
        n(w);
      }
    });
  }), R(m), D(e, m), de(g);
}
se(
  nd,
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
var Q0 = /* @__PURE__ */ ve('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function rd(e, t) {
  ue(t, !0);
  const n = p(t, "edge", 7), r = p(t, "store", 15), o = p(t, "onedgeclick", 7), i = p(t, "onedgecontextmenu", 7), s = p(t, "onedgepointerenter", 7), a = p(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), c = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), h = /* @__PURE__ */ P(() => n().sourceY), f = /* @__PURE__ */ P(() => n().targetX), g = /* @__PURE__ */ P(() => n().targetY), m = /* @__PURE__ */ P(() => n().sourcePosition), y = /* @__PURE__ */ P(() => n().targetPosition), _ = /* @__PURE__ */ P(() => mt(n().animated, !1)), w = /* @__PURE__ */ P(() => mt(n().selected, !1)), k = /* @__PURE__ */ P(() => n().label), E = /* @__PURE__ */ P(() => n().labelStyle), b = /* @__PURE__ */ P(() => mt(n().data, () => ({}), !0)), N = /* @__PURE__ */ P(() => n().style), $ = /* @__PURE__ */ P(() => n().interactionWidth), O = /* @__PURE__ */ P(() => mt(n().type, "default")), I = /* @__PURE__ */ P(() => n().sourceHandle), V = /* @__PURE__ */ P(() => n().targetHandle), Z = /* @__PURE__ */ P(() => n().markerStart), z = /* @__PURE__ */ P(() => n().markerEnd), S = /* @__PURE__ */ P(() => n().selectable), T = /* @__PURE__ */ P(() => n().focusable), x = /* @__PURE__ */ P(() => mt(n().deletable, !0)), C = /* @__PURE__ */ P(() => n().hidden), A = /* @__PURE__ */ P(() => n().zIndex), H = /* @__PURE__ */ P(() => n().class), K = /* @__PURE__ */ P(() => n().ariaLabel), W = null;
  const { id: M } = n();
  Pr("svelteflow__edge_id", M);
  let j = /* @__PURE__ */ P(() => u(S) ?? r().elementsSelectable), X = /* @__PURE__ */ P(() => u(T) ?? r().edgesFocusable), Q = /* @__PURE__ */ P(() => r().edgeTypes[u(O)] ?? da), q = /* @__PURE__ */ P(() => u(Z) ? `url('#${Es(u(Z), r().flowId)}')` : void 0), F = /* @__PURE__ */ P(() => u(z) ? `url('#${Es(u(z), r().flowId)}')` : void 0);
  function U(re) {
    const fe = r().edgeLookup.get(M);
    fe && (u(j) && r().handleEdgeSelection(M), o()?.({ event: re, edge: fe }));
  }
  function G(re, fe) {
    const ge = r().edgeLookup.get(M);
    ge && fe({ event: re, edge: ge });
  }
  function ne(re) {
    if (!r().disableKeyboardA11y && hu.includes(re.key) && u(j)) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: ge } = r();
      re.key === "Escape" ? (W?.blur(), fe({ edges: [n()] })) : ge([M]);
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
  }, ye = Ee(), oe = ie(ye);
  {
    var ae = (re) => {
      var fe = Q0();
      let ge;
      var we = B(fe);
      tt(we, () => ({
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
        "aria-describedby": u(X) ? `${ed}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (u(X) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(X) ? ne : void 0,
        tabindex: u(X) ? 0 : void 0,
        ...n().domAttributes,
        [In]: {
          animated: u(_),
          selected: u(w),
          selectable: u(j)
        }
      }));
      var ce = B(we);
      Pi(ce, () => u(Q), (_e, De) => {
        De(_e, {
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
            return u(_);
          },
          get selected() {
            return u(w);
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
            return u(N);
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
            return u(O);
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
      }), R(we), $t(we, (_e) => W = _e, () => W), R(fe), Ce(() => ge = dt(fe, "", ge, { "z-index": u(A) })), D(re, fe);
    };
    le(oe, (re) => {
      u(C) || re(ae);
    });
  }
  return D(e, ye), de(ee);
}
se(
  rd,
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
var em = /* @__PURE__ */ ve("<defs></defs>");
function od(e, t) {
  ue(t, !1);
  const n = nn();
  Lc();
  var r = em();
  pt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    id(o, Fe(() => u(i)));
  }), R(r), D(e, r), de();
}
se(od, {}, [], [], !0);
var tm = /* @__PURE__ */ ve('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), nm = /* @__PURE__ */ ve('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), rm = /* @__PURE__ */ ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function id(e, t) {
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
      var _ = tm();
      let w;
      Ce(() => {
        be(_, "stroke-width", c()), w = dt(_, "", w, { stroke: l() });
      }), D(y, _);
    }, m = (y) => {
      var _ = Ee(), w = ie(_);
      {
        var k = (E) => {
          var b = nm();
          let N;
          Ce(() => {
            be(b, "stroke-width", c()), N = dt(b, "", N, { stroke: l(), fill: l() });
          }), D(E, b);
        };
        le(
          w,
          (E) => {
            r() === ao.ArrowClosed && E(k);
          },
          !0
        );
      }
      D(y, _);
    };
    le(f, (y) => {
      r() === ao.Arrow ? y(g) : y(m, !1);
    });
  }
  return R(h), Ce(() => {
    be(h, "id", n()), be(h, "markerWidth", `${o()}`), be(h, "markerHeight", `${i()}`), be(h, "markerUnits", s()), be(h, "orient", a());
  }), D(e, h), de(d);
}
se(
  id,
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
function sd(e, t) {
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
  od(d, {}), R(c);
  var h = L(c, 2);
  return pt(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, g) => {
    rd(f, {
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
  sd,
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
function fa(e, t) {
  ue(t, !0), Ie(e, sm);
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
  }, l = Ee(), c = ie(l);
  {
    var d = (h) => {
      var f = im();
      let g;
      Ce((m) => g = dt(f, "", g, m), [
        () => ({
          width: typeof o() == "string" ? o() : hn(o()),
          height: typeof i() == "string" ? i() : hn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), D(h, f);
    };
    le(c, (h) => {
      s() && h(d);
    });
  }
  return D(e, l), de(a);
}
se(fa, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var am = /* @__PURE__ */ te("<div><!></div>");
const lm = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function ad(e, t) {
  ue(t, !0), Ie(e, lm);
  let n = p(t, "store", 15), r = p(t, "onnodedrag", 7), o = p(t, "onnodedragstart", 7), i = p(t, "onnodedragstop", 7), s = p(t, "onselectionclick", 7), a = p(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Se(void 0);
  je(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ P(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const w = ko(n().nodeLookup, { filter: (k) => !!k.selected });
      if (w.width > 0 && w.height > 0)
        return w;
    }
    return null;
  });
  function d(w) {
    const k = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: k, event: w });
  }
  function h(w) {
    const k = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: k, event: w });
  }
  function f(w) {
    Object.prototype.hasOwnProperty.call(hi, w.key) && (w.preventDefault(), n().moveSelectedNodes(hi[w.key], w.shiftKey ? 4 : 1));
  }
  var g = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(w) {
      r(w), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(w) {
      o(w), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(w) {
      i(w), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(w) {
      s(w), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(w) {
      a(w), v();
    }
  }, m = Ee(), y = ie(m);
  {
    var _ = (w) => {
      var k = am();
      k.__contextmenu = d, k.__click = h, k.__keydown = function(...N) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, N);
      };
      let E;
      var b = B(k);
      fa(b, { width: "100%", height: "100%", x: 0, y: 0 }), R(k), ft(k, (N, $) => Uu?.(N, $), () => ({
        disabled: !1,
        store: n(),
        onDrag: (N, $, O, I) => {
          r()?.({ event: N, targetNode: null, nodes: I });
        },
        onDragStart: (N, $, O, I) => {
          o()?.({ event: N, targetNode: null, nodes: I });
        },
        onDragStop: (N, $, O, I) => {
          i()?.({ event: N, targetNode: null, nodes: I });
        }
      })), $t(k, (N) => J(l, N), () => u(l)), Ce(
        (N) => {
          Pt(k, 1, On(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), be(k, "role", n().disableKeyboardA11y ? void 0 : "button"), be(k, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = dt(k, "", E, N);
        },
        [
          () => ({
            width: hn(u(c).width),
            height: hn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), D(w, k);
    };
    le(y, (w) => {
      n().selectionRectMode === "nodes" && u(c) && _n(u(c).x) && _n(u(c).y) && w(_);
    });
  }
  return D(e, m), de(g);
}
Un(["contextmenu", "click", "keydown"]);
se(
  ad,
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
function sn(e, t) {
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
      }, { modifier: f, key: g, callback: m, preventDefault: y, enabled: _ } = h;
      if (_) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const k = Array.isArray(f) ? f : [f];
          let E = !1;
          for (const b of k)
            if ((Array.isArray(b) ? b : [b]).reduce(
              ($, O) => $ | cm(O),
              0
            ) === c) {
              E = !0;
              break;
            }
          if (!E) continue;
        }
        y && a.preventDefault();
        const w = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), m?.(w);
      }
    }
  }
  let s;
  return n && (s = ds(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = ds(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function rt() {
  const e = /* @__PURE__ */ P(nn), t = (i) => {
    const s = vl(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? Vp(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Lr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = lt(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && vl(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = lt(() => u(e).edges).map((l) => {
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
    getViewport: () => Xl(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = ia(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
        const f = Lr(h), g = lo(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = rl(i) ? i : t(i);
      if (!c)
        return !1;
      const d = lo(c, s);
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
      return a && (u(e).nodes = lt(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = lt(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: h, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return So(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), h = fi(i, [s, a, l]);
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
function ld(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "selectionKey", 7, "Shift"), o = p(t, "multiSelectionKey", 23, () => rr() ? "Meta" : "Control"), i = p(t, "deleteKey", 7, "Backspace"), s = p(t, "panActivationKey", 7, " "), a = p(t, "zoomActivationKey", 23, () => rr() ? "Meta" : "Control"), { deleteElements: l } = rt();
  function c(_) {
    return _ !== null && typeof _ == "object";
  }
  function d(_) {
    return c(_) ? _.modifier || [] : [];
  }
  function h(_) {
    return _ == null ? "" : c(_) ? _.key : _;
  }
  function f(_, w) {
    return (Array.isArray(_) ? _ : [_]).map((E) => {
      const b = h(E);
      return {
        key: b,
        modifier: d(E),
        enabled: b !== null,
        callback: w
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const _ = n().nodes.filter((k) => k.selected), w = n().edges.filter((k) => k.selected);
    l({ nodes: _, edges: w });
  }
  var y = {
    get store() {
      return n();
    },
    set store(_) {
      n(_), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(_ = "Shift") {
      r(_), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(_ = rr() ? "Meta" : "Control") {
      o(_), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(_ = "Backspace") {
      i(_), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(_ = " ") {
      s(_), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(_ = rr() ? "Meta" : "Control") {
      a(_), v();
    }
  };
  return ni("blur", bt, g), ni("contextmenu", bt, g), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(i(), (_) => {
      !(_.originalEvent.ctrlKey || _.originalEvent.metaKey || _.originalEvent.shiftKey) && !bu(_.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ft(bt, (_, w) => sn?.(_, w), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), de(y);
}
se(
  ld,
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
function cd(e, t) {
  ue(t, !0);
  let n = p(t, "store", 15), r = p(t, "type", 7), o = p(t, "containerStyle", 7), i = p(t, "style", 7), s = p(t, "LineComponent", 7), a = /* @__PURE__ */ P(() => {
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
      case yn.Bezier: {
        const [g] = ku(f);
        return g;
      }
      case yn.Straight: {
        const [g] = Su(f);
        return g;
      }
      case yn.Step:
      case yn.SmoothStep: {
        const [g] = sa({
          ...f,
          borderRadius: r() === yn.Step ? 0 : void 0
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
  }, c = Ee(), d = ie(c);
  {
    var h = (f) => {
      var g = dm(), m = B(g), y = B(m);
      {
        var _ = (k) => {
          var E = Ee(), b = ie(E);
          Pi(b, s, (N, $) => {
            $(N, {});
          }), D(k, E);
        }, w = (k) => {
          var E = um();
          Ce(() => {
            be(E, "d", u(a)), dt(E, i());
          }), D(k, E);
        };
        le(y, (k) => {
          s() ? k(_) : k(w, !1);
        });
      }
      R(m), R(g), Ce(
        (k) => {
          be(g, "width", n().width), be(g, "height", n().height), dt(g, o()), Pt(m, 0, k);
        },
        [
          () => On([
            "svelte-flow__connection",
            Np(n().connection.isValid)
          ])
        ]
      ), D(f, g);
    };
    le(d, (f) => {
      n().connection.inProgress && f(h);
    });
  }
  return D(e, c), de(l);
}
se(
  cd,
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
function Po(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "top-right"), r = p(t, "style", 7), o = p(t, "class", 7), i = p(t, "children", 7), s = /* @__PURE__ */ ze(t, [
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
  tt(c, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var d = B(c);
  return Ge(d, () => i() ?? vt), R(c), D(e, c), de(l);
}
se(Po, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var hm = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ud(e, t) {
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
  }, i = Ee(), s = ie(i);
  {
    var a = (l) => {
      Po(l, {
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
    le(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return D(e, i), de(o);
}
se(ud, { proOptions: {}, position: {} }, [], [], !0);
var gm = /* @__PURE__ */ te("<div><!></div>");
const vm = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function dd(e, t) {
  ue(t, !0), Ie(e, vm);
  let n = p(t, "width", 7), r = p(t, "height", 7), o = p(t, "colorMode", 7), i = p(t, "domNode", 15), s = p(t, "clientWidth", 15), a = p(t, "clientHeight", 15), l = p(t, "children", 7), c = p(t, "rest", 7), d = /* @__PURE__ */ P(() => c().class), h = /* @__PURE__ */ P(() => gh(c(), [
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
      n(_), v();
    },
    get height() {
      return r();
    },
    set height(_) {
      r(_), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(_) {
      o(_), v();
    },
    get domNode() {
      return i();
    },
    set domNode(_) {
      i(_), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(_) {
      s(_), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(_) {
      a(_), v();
    },
    get children() {
      return l();
    },
    set children(_) {
      l(_), v();
    },
    get rest() {
      return c();
    },
    set rest(_) {
      c(_), v();
    }
  }, m = gm();
  tt(
    m,
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
      [ln]: _
    }),
    [
      () => ({ width: hn(n()), height: hn(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var y = B(m);
  return Ge(y, () => l() ?? vt), R(m), $t(m, (_) => i(_), () => i()), Oa(m, "clientHeight", a), Oa(m, "clientWidth", s), D(e, m), de(g);
}
se(
  dd,
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
function fd(e, t) {
  ue(t, !0);
  let n = p(t, "width", 7), r = p(t, "height", 7), o = p(t, "proOptions", 7), i = p(t, "selectionKey", 7), s = p(t, "deleteKey", 7), a = p(t, "panActivationKey", 7), l = p(t, "multiSelectionKey", 7), c = p(t, "zoomActivationKey", 7), d = p(t, "paneClickDistance", 7, 1), h = p(t, "nodeClickDistance", 7, 1), f = p(t, "onmovestart", 7), g = p(t, "onmoveend", 7), m = p(t, "onmove", 7), y = p(t, "oninit", 7), _ = p(t, "onnodeclick", 7), w = p(t, "onnodecontextmenu", 7), k = p(t, "onnodedrag", 7), E = p(t, "onnodedragstart", 7), b = p(t, "onnodedragstop", 7), N = p(t, "onnodepointerenter", 7), $ = p(t, "onnodepointermove", 7), O = p(t, "onnodepointerleave", 7), I = p(t, "onselectionclick", 7), V = p(t, "onselectioncontextmenu", 7), Z = p(t, "onselectionstart", 7), z = p(t, "onselectionend", 7), S = p(t, "onedgeclick", 7), T = p(t, "onedgecontextmenu", 7), x = p(t, "onedgepointerenter", 7), C = p(t, "onedgepointerleave", 7), A = p(t, "onpaneclick", 7), H = p(t, "onpanecontextmenu", 7), K = p(t, "panOnScrollMode", 23, () => ar.Free), W = p(t, "preventScrolling", 7, !0), M = p(t, "zoomOnScroll", 7, !0), j = p(t, "zoomOnDoubleClick", 7, !0), X = p(t, "zoomOnPinch", 7, !0), Q = p(t, "panOnScroll", 7, !1), q = p(t, "panOnScrollSpeed", 7, 0.5), F = p(t, "panOnDrag", 7, !0), U = p(t, "selectionOnDrag", 7, !1), G = p(t, "connectionLineComponent", 7), ne = p(t, "connectionLineStyle", 7), ee = p(t, "connectionLineContainerStyle", 7), ye = p(t, "connectionLineType", 23, () => yn.Bezier), oe = p(t, "attributionPosition", 7), ae = p(t, "children", 7), re = p(t, "nodes", 31, () => Bt([])), fe = p(t, "edges", 31, () => Bt([])), ge = p(t, "viewport", 31, () => {
  }), we = /* @__PURE__ */ ze(t, [
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
  ]), ce = Xu({
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
      return ge();
    },
    set viewport(Y) {
      ge(Y);
    }
  });
  const _e = Zn(gi);
  _e && _e.setStore && _e.setStore(ce), Pr(gi, {
    provider: !1,
    getStore() {
      return ce;
    }
  }), je(() => {
    const Y = { nodes: ce.selectedNodes, edges: ce.selectedEdges };
    lt(() => t.onselectionchange)?.(Y);
    for (const qe of ce.selectionChangeHandlers.values())
      qe(Y);
  }), _o(() => {
    ce.reset();
  });
  var De = {
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
      return _();
    },
    set onnodeclick(Y) {
      _(Y), v();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(Y) {
      w(Y), v();
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
      return N();
    },
    set onnodepointerenter(Y) {
      N(Y), v();
    },
    get onnodepointermove() {
      return $();
    },
    set onnodepointermove(Y) {
      $(Y), v();
    },
    get onnodepointerleave() {
      return O();
    },
    set onnodepointerleave(Y) {
      O(Y), v();
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
      return A();
    },
    set onpaneclick(Y) {
      A(Y), v();
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
    set panOnScrollMode(Y = ar.Free) {
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
    set connectionLineType(Y = yn.Bezier) {
      ye(Y), v();
    },
    get attributionPosition() {
      return oe();
    },
    set attributionPosition(Y) {
      oe(Y), v();
    },
    get children() {
      return ae();
    },
    set children(Y) {
      ae(Y), v();
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
      return ge();
    },
    set viewport(Y = void 0) {
      ge(Y), v();
    }
  };
  return dd(e, {
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
    children: (Y, qe) => {
      var Ae = ym(), Ve = ie(Ae);
      ld(Ve, {
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
        set store(Le) {
          ce = Le;
        }
      });
      var He = L(Ve, 2);
      qu(He, {
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
        set store(Le) {
          ce = Le;
        },
        children: (Le, Ye) => {
          ju(Le, {
            get onpaneclick() {
              return A();
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
            set store(he) {
              ce = he;
            },
            children: (he, Xe) => {
              var st = mm(), Re = ie(st);
              Gu(Re, {
                get store() {
                  return ce;
                },
                set store(Tt) {
                  ce = Tt;
                },
                children: (Tt, xt) => {
                  var on = pm(), Vn = L(ie(on), 2);
                  sd(Vn, {
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
                    set store(er) {
                      ce = er;
                    }
                  });
                  var Oo = L(Vn, 4);
                  cd(Oo, {
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
                    set store(er) {
                      ce = er;
                    }
                  });
                  var ya = L(Oo, 2);
                  nd(ya, {
                    get nodeClickDistance() {
                      return h();
                    },
                    get onnodeclick() {
                      return _();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return N();
                    },
                    get onnodepointermove() {
                      return $();
                    },
                    get onnodepointerleave() {
                      return O();
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
                    set store(er) {
                      ce = er;
                    }
                  });
                  var df = L(ya, 2);
                  ad(df, {
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
                    set store(er) {
                      ce = er;
                    }
                  }), pe(2), D(Tt, on);
                },
                $$slots: { default: !0 }
              });
              var Yt = L(Re, 2);
              {
                let Tt = /* @__PURE__ */ P(() => !!(ce.selectionRect && ce.selectionRectMode === "user")), xt = /* @__PURE__ */ P(() => ce.selectionRect?.width), on = /* @__PURE__ */ P(() => ce.selectionRect?.height), Vn = /* @__PURE__ */ P(() => ce.selectionRect?.x), Oo = /* @__PURE__ */ P(() => ce.selectionRect?.y);
                fa(Yt, {
                  get isVisible() {
                    return u(Tt);
                  },
                  get width() {
                    return u(xt);
                  },
                  get height() {
                    return u(on);
                  },
                  get x() {
                    return u(Vn);
                  },
                  get y() {
                    return u(Oo);
                  }
                });
              }
              D(he, st);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var ot = L(He, 2);
      ud(ot, {
        get proOptions() {
          return o();
        },
        get position() {
          return oe();
        }
      });
      var it = L(ot, 2);
      Ju(it, {
        get store() {
          return ce;
        }
      });
      var Lt = L(it, 2);
      Ge(Lt, () => ae() ?? vt), D(Y, Ae);
    },
    $$slots: { default: !0 }
  }), de(De);
}
se(
  fd,
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
function hd(e, t) {
  ue(t, !0);
  let n = p(t, "children", 7), r = /* @__PURE__ */ Se(Xu({ props: {}, nodes: [], edges: [] }));
  Pr(gi, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (a) => {
      J(r, a);
    }
  }), _o(() => {
    u(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    }
  }, i = Ee(), s = ie(i);
  return Ge(s, () => n() ?? vt), D(e, i), de(o);
}
se(hd, { children: {} }, [], [], !0);
var wm = /* @__PURE__ */ te("<button><!></button>");
function jr(e, t) {
  ue(t, !0);
  let n = p(t, "class", 7), r = p(t, "bgColor", 7), o = p(t, "bgColorHover", 7), i = p(t, "color", 7), s = p(t, "colorHover", 7), a = p(t, "borderColor", 7), l = p(t, "onclick", 7), c = p(t, "children", 7), d = /* @__PURE__ */ ze(t, [
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
  tt(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [ln]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var g = B(f);
  return Ge(g, () => c() ?? vt), R(f), D(e, f), de(h);
}
se(
  jr,
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
function gd(e) {
  var t = _m();
  D(e, t);
}
se(gd, {}, [], [], !0);
var xm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function vd(e) {
  var t = xm();
  D(e, t);
}
se(vd, {}, [], [], !0);
var bm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function pd(e) {
  var t = bm();
  D(e, t);
}
se(pd, {}, [], [], !0);
var Cm = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function md(e) {
  var t = Cm();
  D(e, t);
}
se(md, {}, [], [], !0);
var km = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function yd(e) {
  var t = km();
  D(e, t);
}
se(yd, {}, [], [], !0);
var Em = /* @__PURE__ */ te("<!> <!>", 1), Sm = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function wd(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "bottom-left"), r = p(t, "orientation", 7, "vertical"), o = p(t, "showZoom", 7, !0), i = p(t, "showFitView", 7, !0), s = p(t, "showLock", 7, !0), a = p(t, "style", 7), l = p(t, "class", 7), c = p(t, "buttonBgColor", 7), d = p(t, "buttonBgColorHover", 7), h = p(t, "buttonColor", 7), f = p(t, "buttonColorHover", 7), g = p(t, "buttonBorderColor", 7), m = p(t, "fitViewOptions", 7), y = p(t, "children", 7), _ = p(t, "before", 7), w = p(t, "after", 7), k = /* @__PURE__ */ ze(t, [
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
  ]), E = /* @__PURE__ */ P(nn);
  const b = {
    bgColor: c(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: g()
  };
  let N = /* @__PURE__ */ P(() => u(E).nodesDraggable || u(E).nodesConnectable || u(E).elementsSelectable), $ = /* @__PURE__ */ P(() => u(E).viewport.zoom <= u(E).minZoom), O = /* @__PURE__ */ P(() => u(E).viewport.zoom >= u(E).maxZoom), I = /* @__PURE__ */ P(() => u(E).ariaLabelConfig), V = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const Z = () => {
    u(E).zoomIn();
  }, z = () => {
    u(E).zoomOut();
  }, S = () => {
    u(E).fitView(m());
  }, T = () => {
    let C = !u(N);
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
      return _();
    },
    set before(C) {
      _(C), v();
    },
    get after() {
      return w();
    },
    set after(C) {
      w(C), v();
    }
  };
  {
    let C = /* @__PURE__ */ P(() => [
      "svelte-flow__controls",
      u(V),
      l()
    ]);
    Po(e, Fe(
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
        children: (A, H) => {
          var K = Sm(), W = ie(K);
          {
            var M = (oe) => {
              var ae = Ee(), re = ie(ae);
              Ge(re, _), D(oe, ae);
            };
            le(W, (oe) => {
              _() && oe(M);
            });
          }
          var j = L(W, 2);
          {
            var X = (oe) => {
              var ae = Em(), re = ie(ae);
              jr(re, Fe(
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
                    return u(O);
                  }
                },
                () => b,
                {
                  children: (ge, we) => {
                    gd(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var fe = L(re, 2);
              jr(fe, Fe(
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
                  children: (ge, we) => {
                    vd(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), D(oe, ae);
            };
            le(j, (oe) => {
              o() && oe(X);
            });
          }
          var Q = L(j, 2);
          {
            var q = (oe) => {
              jr(oe, Fe(
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
                  children: (ae, re) => {
                    pd(ae);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(Q, (oe) => {
              i() && oe(q);
            });
          }
          var F = L(Q, 2);
          {
            var U = (oe) => {
              jr(oe, Fe(
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
                  children: (ae, re) => {
                    var fe = Ee(), ge = ie(fe);
                    {
                      var we = (_e) => {
                        yd(_e);
                      }, ce = (_e) => {
                        md(_e);
                      };
                      le(ge, (_e) => {
                        u(N) ? _e(we) : _e(ce, !1);
                      });
                    }
                    D(ae, fe);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(F, (oe) => {
              s() && oe(U);
            });
          }
          var G = L(F, 2);
          {
            var ne = (oe) => {
              var ae = Ee(), re = ie(ae);
              Ge(re, y), D(oe, ae);
            };
            le(G, (oe) => {
              y() && oe(ne);
            });
          }
          var ee = L(G, 2);
          {
            var ye = (oe) => {
              var ae = Ee(), re = ie(ae);
              Ge(re, w), D(oe, ae);
            };
            le(ee, (oe) => {
              w() && oe(ye);
            });
          }
          D(A, K);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return de(x);
}
se(
  wd,
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
var xn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(xn || (xn = {}));
var Nm = /* @__PURE__ */ ve("<circle></circle>");
function _d(e, t) {
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
    be(i, "cx", n()), be(i, "cy", n()), be(i, "r", n()), Pt(i, 0, On(["svelte-flow__background-pattern", "dots", r()]));
  }), D(e, i), de(o);
}
se(_d, { radius: {}, class: {} }, [], [], !0);
var Pm = /* @__PURE__ */ ve("<path></path>");
function xd(e, t) {
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
    be(a, "stroke-width", n()), be(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Pt(a, 0, On(["svelte-flow__background-pattern", o(), i()]));
  }), D(e, a), de(s);
}
se(xd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const $m = {
  [xn.Dots]: 1,
  [xn.Lines]: 1,
  [xn.Cross]: 6
};
var Tm = /* @__PURE__ */ ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function bd(e, t) {
  ue(t, !0);
  let n = p(t, "id", 7), r = p(t, "variant", 23, () => xn.Dots), o = p(t, "gap", 7, 20), i = p(t, "size", 7), s = p(t, "lineWidth", 7, 1), a = p(t, "bgColor", 7), l = p(t, "patternColor", 7), c = p(t, "patternClass", 7), d = p(t, "class", 7), h = /* @__PURE__ */ P(nn), f = /* @__PURE__ */ P(() => r() === xn.Dots), g = /* @__PURE__ */ P(() => r() === xn.Cross), m = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ P(() => `background-pattern-${u(h).flowId}-${n() ?? ""}`), _ = /* @__PURE__ */ P(() => [
    u(m)[0] * u(h).viewport.zoom || 1,
    u(m)[1] * u(h).viewport.zoom || 1
  ]), w = /* @__PURE__ */ P(() => (i() ?? $m[r()]) * u(h).viewport.zoom), k = /* @__PURE__ */ P(() => u(g) ? [u(w), u(w)] : u(_)), E = /* @__PURE__ */ P(() => u(f) ? [u(w) / 2, u(w) / 2] : [
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
    set variant(S = xn.Dots) {
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
  }, N = Tm();
  let $;
  var O = B(N), I = B(O);
  {
    var V = (S) => {
      {
        let T = /* @__PURE__ */ P(() => u(w) / 2);
        _d(S, {
          get radius() {
            return u(T);
          },
          get class() {
            return c();
          }
        });
      }
    }, Z = (S) => {
      xd(S, {
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
    le(I, (S) => {
      u(f) ? S(V) : S(Z, !1);
    });
  }
  R(O);
  var z = L(O);
  return R(N), Ce(() => {
    Pt(N, 0, On([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), $ = dt(N, "", $, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), be(O, "id", u(y)), be(O, "x", u(h).viewport.x % u(_)[0]), be(O, "y", u(h).viewport.y % u(_)[1]), be(O, "width", u(_)[0]), be(O, "height", u(_)[1]), be(O, "patternTransform", `translate(-${u(E)[0]},-${u(E)[1]})`), be(z, "fill", `url(#${u(y)})`);
  }), D(e, N), de(b);
}
se(
  bd,
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
function Cd(e, t) {
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
  }, _ = Ee(), w = ie(_);
  {
    var k = (b) => {
      const N = /* @__PURE__ */ P(m);
      var $ = Ee(), O = ie($);
      Pi(O, () => u(N), (I, V) => {
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
      var N = Dm();
      let $, O;
      Ce(() => {
        $ = Pt(N, 0, On(["svelte-flow__minimap-node", g()]), null, $, { selected: f() }), be(N, "x", r()), be(N, "y", o()), be(N, "rx", a()), be(N, "ry", a()), be(N, "width", i()), be(N, "height", s()), be(N, "shape-rendering", c()), O = dt(N, "", O, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), D(b, N);
    };
    le(w, (b) => {
      m() ? b(k) : b(E, !1);
    });
  }
  return D(e, _), de(y);
}
se(
  Cd,
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
const es = (e) => e instanceof Function ? e : () => e;
var Om = /* @__PURE__ */ ve("<title> </title>"), Mm = /* @__PURE__ */ ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Hm = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function kd(e, t) {
  ue(t, !0);
  let n = p(t, "position", 7, "bottom-right"), r = p(t, "ariaLabel", 7), o = p(t, "nodeStrokeColor", 7, "transparent"), i = p(t, "nodeColor", 7), s = p(t, "nodeClass", 7, ""), a = p(t, "nodeBorderRadius", 7, 5), l = p(t, "nodeStrokeWidth", 7, 2), c = p(t, "nodeComponent", 7), d = p(t, "bgColor", 7), h = p(t, "maskColor", 7), f = p(t, "maskStrokeColor", 7), g = p(t, "maskStrokeWidth", 7), m = p(t, "width", 7, 200), y = p(t, "height", 7, 150), _ = p(t, "pannable", 7, !0), w = p(t, "zoomable", 7, !0), k = p(t, "inversePan", 7), E = p(t, "zoomStep", 7), b = p(t, "class", 7), N = /* @__PURE__ */ ze(t, [
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
  ]), $ = /* @__PURE__ */ P(nn), O = /* @__PURE__ */ P(() => u($).ariaLabelConfig);
  const I = i() === void 0 ? void 0 : es(i()), V = es(o()), Z = es(s()), z = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${u($).flowId}`), T = /* @__PURE__ */ P(() => ({
    x: -u($).viewport.x / u($).viewport.zoom,
    y: -u($).viewport.y / u($).viewport.zoom,
    width: u($).width / u($).viewport.zoom,
    height: u($).height / u($).viewport.zoom
  })), x = /* @__PURE__ */ P(() => yu(ko(u($).nodeLookup, { filter: (ee) => !ee.hidden }), u(T))), C = /* @__PURE__ */ P(() => u(x).width / m()), A = /* @__PURE__ */ P(() => u(x).height / y()), H = /* @__PURE__ */ P(() => Math.max(u(C), u(A))), K = /* @__PURE__ */ P(() => u(H) * m()), W = /* @__PURE__ */ P(() => u(H) * y()), M = /* @__PURE__ */ P(() => 5 * u(H)), j = /* @__PURE__ */ P(() => u(x).x - (u(K) - u(x).width) / 2 - u(M)), X = /* @__PURE__ */ P(() => u(x).y - (u(W) - u(x).height) / 2 - u(M)), Q = /* @__PURE__ */ P(() => u(K) + u(M) * 2), q = /* @__PURE__ */ P(() => u(W) + u(M) * 2);
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
      return _();
    },
    set pannable(ee = !0) {
      _(ee), v();
    },
    get zoomable() {
      return w();
    },
    set zoomable(ee = !0) {
      w(ee), v();
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
    let ee = /* @__PURE__ */ P(() => ["svelte-flow__minimap", b()]);
    Ph(ne, () => ({ "--xy-minimap-background-color-props": d() })), Po(ne.lastChild, Fe(
      {
        get position() {
          return n();
        },
        get class() {
          return u(ee);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => N,
      {
        children: (ye, oe) => {
          var ae = Ee(), re = ie(ae);
          {
            var fe = (ge) => {
              var we = Mm();
              let ce;
              var _e = B(we);
              {
                var De = (Ae) => {
                  var Ve = Om(), He = B(Ve, !0);
                  R(Ve), Ce(() => {
                    be(Ve, "id", u(S)), Be(He, r() ?? u(O)["minimap.ariaLabel"]);
                  }), D(Ae, Ve);
                };
                le(_e, (Ae) => {
                  (r() ?? u(O)["minimap.ariaLabel"]) && Ae(De);
                });
              }
              var Y = L(_e);
              pt(Y, 17, () => u($).nodes, (Ae) => Ae.id, (Ae, Ve) => {
                const He = /* @__PURE__ */ P(() => u($).nodeLookup.get(u(Ve).id));
                var ot = Ee(), it = ie(ot);
                {
                  var Lt = (Le) => {
                    const Ye = /* @__PURE__ */ P(() => Jn(u(He)));
                    {
                      let he = /* @__PURE__ */ P(() => I?.(u(He))), Xe = /* @__PURE__ */ P(() => V(u(He))), st = /* @__PURE__ */ P(() => Z(u(He)));
                      Cd(Le, Fe(
                        {
                          get id() {
                            return u(He).id;
                          },
                          get x() {
                            return u(He).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(He).internals.positionAbsolute.y;
                          }
                        },
                        () => u(Ye),
                        {
                          get selected() {
                            return u(He).selected;
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
                            return u(Xe);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return z;
                          },
                          get class() {
                            return u(st);
                          }
                        }
                      ));
                    }
                  };
                  le(it, (Le) => {
                    u(He) && wu(u(He)) && !u(He).hidden && Le(Lt);
                  });
                }
                D(Ae, ot);
              });
              var qe = L(Y);
              R(we), ft(we, (Ae, Ve) => Am?.(Ae, Ve), () => ({
                store: u($),
                panZoom: u($).panZoom,
                getViewScale: F,
                translateExtent: u($).translateExtent,
                width: u($).width,
                height: u($).height,
                inversePan: k(),
                zoomStep: E(),
                pannable: _(),
                zoomable: w()
              })), Ce(() => {
                be(we, "width", m()), be(we, "height", y()), be(we, "viewBox", `${u(j) ?? ""} ${u(X) ?? ""} ${u(Q) ?? ""} ${u(q) ?? ""}`), be(we, "aria-labelledby", u(S)), ce = dt(we, "", ce, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": g() ? g() * u(H) : void 0
                }), be(qe, "d", `M${u(j) - u(M)},${u(X) - u(M)}h${u(Q) + u(M) * 2}v${u(q) + u(M) * 2}h${-u(Q) - u(M) * 2}z
      M${u(T).x ?? ""},${u(T).y ?? ""}h${u(T).width ?? ""}v${u(T).height ?? ""}h${-u(T).width}z`);
              }), D(ge, we);
            };
            le(re, (ge) => {
              u($).panZoom && ge(fe);
            });
          }
          D(ye, ae);
        },
        $$slots: { default: !0 }
      }
    )), R(ne);
  }
  return D(e, G), de(U);
}
se(
  kd,
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
function Ed(e, t) {
  ue(t, !0);
  let n = p(t, "nodeId", 7), r = p(t, "position", 23, () => me.Top), o = p(t, "align", 7, "center"), i = p(t, "offset", 7, 10), s = p(t, "isVisible", 7), a = p(t, "children", 7), l = /* @__PURE__ */ ze(t, [
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
  const c = nn(), { getNodesBounds: d } = rt(), h = Zn("svelteflow__node_id");
  let f = /* @__PURE__ */ P(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    ($, O) => {
      const I = c.nodeLookup.get(O);
      return I && $.push(I), $;
    },
    []
  ))), g = /* @__PURE__ */ P(() => {
    const N = d(u(f));
    return N ? Up(N, c.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ P(() => u(f).length === 0 ? 1 : Math.max(...u(f).map((N) => (N.internals.z || 5) + 1))), y = /* @__PURE__ */ P(() => c.nodes.filter((N) => N.selected).length), _ = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(y) === 1);
  var w = {
    get nodeId() {
      return n();
    },
    set nodeId(N) {
      n(N), v();
    },
    get position() {
      return r();
    },
    set position(N = me.Top) {
      r(N), v();
    },
    get align() {
      return o();
    },
    set align(N = "center") {
      o(N), v();
    },
    get offset() {
      return i();
    },
    set offset(N = 10) {
      i(N), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(N) {
      s(N), v();
    },
    get children() {
      return a();
    },
    set children(N) {
      a(N), v();
    }
  }, k = Ee(), E = ie(k);
  {
    var b = (N) => {
      var $ = Lm();
      tt(
        $,
        (I, V) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": I,
          ...l,
          [ln]: V
        }),
        [
          () => u(f).reduce((I, V) => `${I}${V.id} `, "").trim(),
          () => ({
            display: Ru().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(m)
          })
        ]
      );
      var O = B($);
      Ge(O, () => a() ?? vt), R($), ft($, (I, V) => zu?.(I, V), () => "root"), D(N, $);
    };
    le(E, (N) => {
      c.domNode && u(_) && u(f) && N(b);
    });
  }
  return D(e, k), de(w);
}
se(
  Ed,
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
function Mn(e) {
  const t = /* @__PURE__ */ P(nn), n = /* @__PURE__ */ P(() => u(t).nodes), r = /* @__PURE__ */ P(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
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
], ha = [
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
class $_ {
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
  let e = /* @__PURE__ */ Se([]), t = /* @__PURE__ */ Se([]), n = /* @__PURE__ */ Se({ x: 250, y: 100, zoom: 1 });
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
}, Oe = Bm();
var Fm = /* @__PURE__ */ te("<button><!></button>");
function $e(e, t) {
  ue(t, !0);
  const n = p(t, "children", 7), r = p(t, "primary", 7), o = /* @__PURE__ */ ze(t, [
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
  tt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return Ge(a, () => n() ?? vt), R(s), D(e, s), de(i);
}
se($e, { children: {}, primary: {} }, [], [], !0);
var Km = /* @__PURE__ */ te("<input/>");
function Sd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Km();
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
  ), D(e, r), de();
}
se(Sd, {}, [], [], !0);
var Zm = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Ym = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Nd(e, t) {
  ue(t, !0), Ie(e, Ym);
  const n = p(t, "placeholder", 7), r = p(t, "label", 7), o = p(t, "value", 7), i = p(t, "buttonText", 7, "选择..."), s = p(t, "onChosen", 7), a = /* @__PURE__ */ ze(t, [
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
  tt(
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
  ir(d);
  var h = L(d, 2);
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
  var f = L(h, 2);
  return $e(f, {
    onclick: (g) => {
      s()?.(o(), r(), g);
    },
    style: "padding: 3px",
    children: (g, m) => {
      pe();
      var y = ke();
      Ce(() => Be(y, i())), D(g, y);
    },
    $$slots: { default: !0 }
  }), R(c), Ce(() => Ko(d, o())), D(e, c), de(l);
}
se(
  Nd,
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
  ue(t, !0);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Wm();
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
  ), D(e, r), de();
}
se(Je, {}, [], [], !0);
var Xm = /* @__PURE__ */ te("<textarea></textarea>");
function Ke(e, t) {
  ue(t, !0);
  const n = p(t, "value", 7), r = p(t, "height", 7), o = p(t, "autoHeight", 7, !0), i = p(t, "maxHeight", 7), s = p(t, "onHeightChange", 7), a = /* @__PURE__ */ ze(t, [
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
      let y = l.scrollHeight;
      if (!c) {
        const _ = t.rows || 1, w = getComputedStyle(l);
        c = parseFloat(w.fontSize) * 1.2 * _ + parseFloat(w.paddingTop) + parseFloat(w.paddingBottom) + parseFloat(w.borderTopWidth);
      }
      if (y < c && (y = c), i()) {
        const _ = typeof i() == "number" ? `${i()}px` : i();
        y > parseInt(_) ? (l.style.height = _, l.style.overflowY = "auto") : l.style.height = `${y}px`;
      } else
        l.style.height = `${y}px`;
      s()?.(l.style.height);
    }
  }
  je(() => {
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
  return tt(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: g,
    onchange: m,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), $t(f, (y) => l = y, () => l), D(e, f), de(h);
}
se(
  Ke,
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
function Pd(e, t) {
  const n = La(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = La(n, ["items", "onChange", "activeIndex"]);
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
  Lc();
  var c = jm();
  return tt(c, () => ({
    ...r,
    class: `tf-tabs ${Ys(r), lt(() => r.class) ?? ""}`
  })), pt(c, 5, o, Tr, (d, h, f) => {
    var g = qm();
    be(g, "tabindex", f), g.__click = () => a(u(h), f), g.__keydown = (w) => {
      (w.key === "Enter" || w.key === " ") && (w.preventDefault(), a(u(h), f));
    };
    var m = B(g);
    {
      var y = (w) => {
        var k = ke();
        Ce(() => Be(k, (u(h), lt(() => u(h).label)))), D(w, k);
      }, _ = (w) => {
        var k = Ee(), E = ie(k);
        Ge(E, () => (u(h), lt(() => u(h).label) ?? vt)), D(w, k);
      };
      le(m, (w) => {
        u(h), lt(() => typeof u(h).label == "string") ? w(y) : w(_, !1);
      });
    }
    R(g), Ce(() => Pt(g, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), D(d, g);
  }), R(c), D(e, c), de(l);
}
Un(["click", "keydown"]);
se(Pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Gm = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Um = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), Jm = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), Qm = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), e2 = /* @__PURE__ */ te("<div></div>");
const t2 = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function $d(e, t) {
  ue(t, !0), Ie(e, t2);
  let n = p(t, "items", 7), r = p(t, "onChange", 7), o = p(t, "activeKeys", 31, () => Bt([]));
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
  return pt(a, 21, n, Tr, (l, c, d) => {
    var h = Qm(), f = B(h);
    be(f, "tabindex", d), f.__click = () => i(u(c)), f.__keydown = (N) => {
      (N.key === "Enter" || N.key === " ") && (N.preventDefault(), i(u(c)));
    };
    var g = B(f);
    {
      var m = (N) => {
        var $ = Gm(), O = B($);
        zn(O, {
          get target() {
            return u(c).icon;
          }
        }), R($), D(N, $);
      };
      le(g, (N) => {
        u(c).icon && N(m);
      });
    }
    var y = L(g, 2);
    zn(y, {
      get target() {
        return u(c).title;
      }
    });
    var _ = L(y, 2);
    R(f);
    var w = L(f, 2);
    {
      var k = (N) => {
        var $ = Um(), O = B($);
        zn(O, {
          get target() {
            return u(c).description;
          }
        }), R($), D(N, $);
      };
      le(w, (N) => {
        u(c).description && N(k);
      });
    }
    var E = L(w, 2);
    {
      var b = (N) => {
        var $ = Jm(), O = B($);
        zn(O, {
          get target() {
            return u(c).content;
          }
        }), R($), D(N, $);
      };
      le(E, (N) => {
        o().includes(u(c).key) && N(b);
      });
    }
    R(h), Ce((N) => Pt(_, 1, `tf-collapse-item-title-arrow ${N ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(u(c).key) ? "rotate-90" : ""
    ]), D(l, h);
  }), R(a), Ce(() => {
    dt(a, t.style), Pt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), D(e, a), de(s);
}
Un(["click", "keydown"]);
se($d, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function zn(e, t) {
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
  }, o = Ee(), i = ie(o);
  {
    var s = (l) => {
      var c = Ee(), d = ie(c);
      Ge(d, () => n() ?? vt), D(l, c);
    }, a = (l) => {
      var c = Ee(), d = ie(c);
      qs(d, n), D(l, c);
    };
    le(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return D(e, o), de(r);
}
se(zn, { target: {} }, [], [], !0);
var n2 = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), r2 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), o2 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), i2 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), s2 = /* @__PURE__ */ te("<!> <!>", 1), a2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), l2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), c2 = /* @__PURE__ */ te("<div><!></div>");
function ct(e, t) {
  ue(t, !0);
  const n = (k, E = vt) => {
    var b = Ee(), N = ie(b);
    pt(N, 19, E, ($, O) => `${O}_${$.value}`, ($, O) => {
      var I = o2(), V = ie(I);
      V.__click = () => m(u(O));
      var Z = B(V), z = B(Z);
      {
        var S = (A) => {
          var H = n2();
          D(A, H);
        };
        le(z, (A) => {
          u(O).children && u(O).children.length > 0 && A(S);
        });
      }
      R(Z);
      var T = L(Z, 2);
      zn(T, {
        get target() {
          return u(O).label;
        }
      }), R(V);
      var x = L(V, 2);
      {
        var C = (A) => {
          var H = r2(), K = B(H);
          n(K, () => u(O).children), R(H), D(A, H);
        };
        le(x, (A) => {
          u(O).children && u(O).children.length > 0 && (a() || c().includes(u(O).value)) && A(C);
        });
      }
      D($, I);
    }), D(k, b);
  };
  let r = p(t, "items", 7), o = p(t, "onSelect", 7), i = p(t, "value", 23, () => []), s = p(t, "defaultValue", 23, () => []), a = p(t, "expandAll", 7, !0), l = p(t, "multiple", 7, !1), c = p(t, "expandValue", 23, () => []), d = p(t, "placeholder", 7), h = /* @__PURE__ */ ze(t, [
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
    const k = [], E = (b) => {
      for (let N of b)
        i().length > 0 ? i().includes(N.value) && k.push(N) : s().includes(N.value) && k.push(N), N.children && N.children.length > 0 && E(N.children);
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
  }, _ = c2();
  tt(_, () => ({ ...h, class: `tf-select ${h.class ?? ""}` }));
  var w = B(_);
  return $t(
    Qn(w, {
      floating: (E) => {
        var b = i2(), N = B(b);
        n(N, r), R(b), D(E, b);
      },
      children: (E, b) => {
        var N = l2();
        tt(N, () => ({ class: "tf-select-input nopan nodrag", ...h }));
        var $ = B(N);
        pt(
          $,
          23,
          () => u(f),
          (O, I) => `${I}_${O.value}`,
          (O, I, V) => {
            var Z = Ee(), z = ie(Z);
            {
              var S = (x) => {
                var C = Ee(), A = ie(C);
                {
                  var H = (K) => {
                    zn(K, {
                      get target() {
                        return u(I).label;
                      }
                    });
                  };
                  le(A, (K) => {
                    u(V) === 0 && K(H);
                  });
                }
                D(x, C);
              }, T = (x) => {
                var C = s2(), A = ie(C);
                zn(A, {
                  get target() {
                    return u(I).label;
                  }
                });
                var H = L(A, 2);
                {
                  var K = (W) => {
                    var M = ke(",");
                    D(W, M);
                  };
                  le(H, (W) => {
                    u(V) < u(f).length - 1 && W(K);
                  });
                }
                D(x, C);
              };
              le(z, (x) => {
                l() ? x(T, !1) : x(S);
              });
            }
            D(O, Z);
          },
          (O) => {
            var I = a2(), V = B(I, !0);
            R(I), Ce(() => Be(V, d())), D(O, I);
          }
        ), R($), pe(2), R(N), D(E, N);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => g = E,
    () => g
  ), R(_), D(e, _), de(y);
}
Un(["click"]);
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
const uo = Math.min, Er = Math.max, vi = Math.round, fn = (e) => ({
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
function Ss(e, t, n) {
  return Er(e, uo(t, n));
}
function $o(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gr(e) {
  return e.split("-")[0];
}
function To(e) {
  return e.split("-")[1];
}
function Td(e) {
  return e === "x" ? "y" : "x";
}
function ga(e) {
  return e === "y" ? "height" : "width";
}
const f2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Rn(e) {
  return f2.has(gr(e)) ? "y" : "x";
}
function va(e) {
  return Td(Rn(e));
}
function h2(e, t, n) {
  n === void 0 && (n = !1);
  const r = To(e), o = va(e), i = ga(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = pi(s)), [s, pi(s)];
}
function g2(e) {
  const t = pi(e);
  return [Ns(e), t, Ns(t)];
}
function Ns(e) {
  return e.replace(/start|end/g, (t) => d2[t]);
}
const bl = ["left", "right"], Cl = ["right", "left"], v2 = ["top", "bottom"], p2 = ["bottom", "top"];
function m2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cl : bl : t ? bl : Cl;
    case "left":
    case "right":
      return t ? v2 : p2;
    default:
      return [];
  }
}
function y2(e, t, n, r) {
  const o = To(e);
  let i = m2(gr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ns)))), i;
}
function pi(e) {
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
function Dd(e) {
  return typeof e != "number" ? w2(e) : {
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
function kl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Rn(t), s = va(t), a = ga(s), l = gr(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (To(t)) {
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
  } = kl(c, r, l), f = r, g = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: _,
      fn: w
    } = a[y], {
      x: k,
      y: E,
      data: b,
      reset: N
    } = await w({
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
      [_]: {
        ...g[_],
        ...b
      }
    }, N && m <= 50 && (m++, typeof N == "object" && (N.placement && (f = N.placement), N.rects && (c = N.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: d,
      y: h
    } = kl(c, f, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Ad(e, t) {
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
  } = $o(t, e), m = Dd(g), _ = a[f ? h === "floating" ? "reference" : "floating" : h], w = mi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(_))) == null || n ? _ : _.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
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
  }, N = mi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: E,
    strategy: l
  }) : k);
  return {
    top: (w.top - N.top + m.top) / b.y,
    bottom: (N.bottom - w.bottom + m.bottom) / b.y,
    left: (w.left - N.left + m.left) / b.x,
    right: (N.right - w.right + m.right) / b.x
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
    } = $o(e, t) || {};
    if (c == null)
      return {};
    const h = Dd(d), f = {
      x: n,
      y: r
    }, g = va(o), m = ga(g), y = await s.getDimensions(c), _ = g === "y", w = _ ? "top" : "left", k = _ ? "bottom" : "right", E = _ ? "clientHeight" : "clientWidth", b = i.reference[m] + i.reference[g] - f[g] - i.floating[m], N = f[g] - i.reference[g], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let O = $ ? $[E] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement($))) && (O = a.floating[E] || i.floating[m]);
    const I = b / 2 - N / 2, V = O / 2 - y[m] / 2 - 1, Z = uo(h[w], V), z = uo(h[k], V), S = Z, T = O - y[m] - z, x = O / 2 - y[m] / 2 + I, C = Ss(S, x, T), A = !l.arrow && To(o) != null && x !== C && i.reference[m] / 2 - (x < S ? Z : z) - y[m] / 2 < 0, H = A ? x < S ? x - S : x - T : 0;
    return {
      [g]: f[g] + H,
      data: {
        [g]: C,
        centerOffset: x - C - H,
        ...A && {
          alignmentOffset: H
        }
      },
      reset: A
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
        ..._
      } = $o(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = gr(o), k = Rn(a), E = gr(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), N = f || (E || !y ? [pi(a)] : g2(a)), $ = m !== "none";
      !f && $ && N.push(...y2(a, y, m, b));
      const O = [a, ...N], I = await Ad(t, _), V = [];
      let Z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && V.push(I[w]), h) {
        const x = h2(o, s, b);
        V.push(I[x[0]], I[x[1]]);
      }
      if (Z = [...Z, {
        placement: o,
        overflows: V
      }], !V.every((x) => x <= 0)) {
        var z, S;
        const x = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, C = O[x];
        if (C && (!(h === "alignment" ? k !== Rn(C) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((K) => Rn(K.placement) === k ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: x,
              overflows: Z
            },
            reset: {
              placement: C
            }
          };
        let A = (S = Z.filter((H) => H.overflows[0] <= 0).sort((H, K) => H.overflows[1] - K.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!A)
          switch (g) {
            case "bestFit": {
              var T;
              const H = (T = Z.filter((K) => {
                if ($) {
                  const W = Rn(K.placement);
                  return W === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((W) => W > 0).reduce((W, M) => W + M, 0)]).sort((K, W) => K[1] - W[1])[0]) == null ? void 0 : T[0];
              H && (A = H);
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
}, C2 = /* @__PURE__ */ new Set(["left", "top"]);
async function k2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = gr(n), a = To(n), l = Rn(n) === "y", c = C2.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = $o(t, e);
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
          fn: (_) => {
            let {
              x: w,
              y: k
            } = _;
            return {
              x: w,
              y: k
            };
          }
        },
        ...l
      } = $o(e, t), c = {
        x: n,
        y: r
      }, d = await Ad(t, l), h = Rn(gr(o)), f = Td(h);
      let g = c[f], m = c[h];
      if (i) {
        const _ = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", k = g + d[_], E = g - d[w];
        g = Ss(k, g, E);
      }
      if (s) {
        const _ = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", k = m + d[_], E = m - d[w];
        m = Ss(k, m, E);
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
function Ii() {
  return typeof window < "u";
}
function Fr(e) {
  return Od(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Mt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Hn(e) {
  var t;
  return (t = (Od(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Od(e) {
  return Ii() ? e instanceof Node || e instanceof Mt(e).Node : !1;
}
function Jt(e) {
  return Ii() ? e instanceof Element || e instanceof Mt(e).Element : !1;
}
function gn(e) {
  return Ii() ? e instanceof HTMLElement || e instanceof Mt(e).HTMLElement : !1;
}
function El(e) {
  return !Ii() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Mt(e).ShadowRoot;
}
const N2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Do(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !N2.has(o);
}
const P2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function $2(e) {
  return P2.has(Fr(e));
}
const T2 = [":popover-open", ":modal"];
function zi(e) {
  return T2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const D2 = ["transform", "translate", "scale", "rotate", "perspective"], A2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], O2 = ["paint", "layout", "strict", "content"];
function pa(e) {
  const t = ma(), n = Jt(e) ? Qt(e) : e;
  return D2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || A2.some((r) => (n.willChange || "").includes(r)) || O2.some((r) => (n.contain || "").includes(r));
}
function M2(e) {
  let t = Xn(e);
  for (; gn(t) && !Ir(t); ) {
    if (pa(t))
      return t;
    if (zi(t))
      return null;
    t = Xn(t);
  }
  return null;
}
function ma() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const H2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ir(e) {
  return H2.has(Fr(e));
}
function Qt(e) {
  return Mt(e).getComputedStyle(e);
}
function Ri(e) {
  return Jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Xn(e) {
  if (Fr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    El(e) && e.host || // Fallback.
    Hn(e)
  );
  return El(t) ? t.host : t;
}
function Md(e) {
  const t = Xn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gn(t) && Do(t) ? t : Md(t);
}
function Hd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Md(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Mt(o);
  return i ? (Ps(s), t.concat(s, s.visualViewport || [], Do(o) ? o : [], [])) : t.concat(o, Hd(o, []));
}
function Ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ld(e) {
  const t = Qt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = gn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = vi(n) !== i || vi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Vd(e) {
  return Jt(e) ? e : e.contextElement;
}
function Sr(e) {
  const t = Vd(e);
  if (!gn(t))
    return fn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ld(t);
  let s = (i ? vi(n.width) : n.width) / r, a = (i ? vi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const L2 = /* @__PURE__ */ fn(0);
function Id(e) {
  const t = Mt(e);
  return !ma() || !t.visualViewport ? L2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function V2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Mt(e) ? !1 : t;
}
function fo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Vd(e);
  let s = fn(1);
  t && (r ? Jt(r) && (s = Sr(r)) : s = Sr(e));
  const a = V2(i, n, r) ? Id(i) : fn(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = Mt(i), g = r && Jt(r) ? Mt(r) : r;
    let m = f, y = Ps(m);
    for (; y && r && g !== m; ) {
      const _ = Sr(y), w = y.getBoundingClientRect(), k = Qt(y), E = w.left + (y.clientLeft + parseFloat(k.paddingLeft)) * _.x, b = w.top + (y.clientTop + parseFloat(k.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += E, c += b, m = Mt(y), y = Ps(m);
    }
  }
  return mi({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Bi(e, t) {
  const n = Ri(e).scrollLeft;
  return t ? t.left + n : fo(Hn(e)).left + n;
}
function zd(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Bi(e, n), o = n.top + t.scrollTop;
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
  const i = o === "fixed", s = Hn(r), a = t ? zi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = fn(1);
  const d = fn(0), h = gn(r);
  if ((h || !h && !i) && ((Fr(r) !== "body" || Do(s)) && (l = Ri(r)), gn(r))) {
    const g = fo(r);
    c = Sr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !h && !i ? zd(s, l) : fn(0);
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
  const t = Hn(e), n = Ri(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Bi(e);
  const a = -n.scrollTop;
  return Qt(r).direction === "rtl" && (s += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Sl = 25;
function B2(e, t) {
  const n = Mt(e), r = Hn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = ma();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Bi(r);
  if (c <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), g = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - g);
    m <= Sl && (i -= m);
  } else c <= Sl && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const F2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function K2(e, t) {
  const n = fo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = gn(e) ? Sr(e) : fn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
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
    r = B2(e, n);
  else if (t === "document")
    r = R2(Hn(e));
  else if (Jt(t))
    r = K2(t, n);
  else {
    const o = Id(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return mi(r);
}
function Rd(e, t) {
  const n = Xn(e);
  return n === t || !Jt(n) || Ir(n) ? !1 : Qt(n).position === "fixed" || Rd(n, t);
}
function Z2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Hd(e, []).filter((a) => Jt(a) && Fr(a) !== "body"), o = null;
  const i = Qt(e).position === "fixed";
  let s = i ? Xn(e) : e;
  for (; Jt(s) && !Ir(s); ) {
    const a = Qt(s), l = pa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && F2.has(o.position) || Do(s) && !l && Rd(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = Xn(s);
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
  const s = [...n === "clippingAncestors" ? zi(t) ? [] : Z2(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const h = Nl(t, d, o);
    return c.top = Er(h.top, c.top), c.right = uo(h.right, c.right), c.bottom = uo(h.bottom, c.bottom), c.left = Er(h.left, c.left), c;
  }, Nl(t, a, o));
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
  } = Ld(e);
  return {
    width: t,
    height: n
  };
}
function X2(e, t, n) {
  const r = gn(t), o = Hn(t), i = n === "fixed", s = fo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = fn(0);
  function c() {
    l.x = Bi(o);
  }
  if (r || !r && !i)
    if ((Fr(t) !== "body" || Do(o)) && (a = Ri(t)), r) {
      const g = fo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? zd(o, a) : fn(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ts(e) {
  return Qt(e).position === "static";
}
function Pl(e, t) {
  if (!gn(e) || Qt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Hn(e) === n && (n = n.ownerDocument.body), n;
}
function Bd(e, t) {
  const n = Mt(e);
  if (zi(e))
    return n;
  if (!gn(e)) {
    let o = Xn(e);
    for (; o && !Ir(o); ) {
      if (Jt(o) && !ts(o))
        return o;
      o = Xn(o);
    }
    return n;
  }
  let r = Pl(e, t);
  for (; r && $2(r) && ts(r); )
    r = Pl(r, t);
  return r && Ir(r) && ts(r) && !pa(r) ? n : r || M2(e) || n;
}
const q2 = async function(e) {
  const t = this.getOffsetParent || Bd, n = this.getDimensions, r = await n(e.floating);
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
  return Qt(e).direction === "rtl";
}
const G2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: I2,
  getDocumentElement: Hn,
  getClippingRect: Y2,
  getOffsetParent: Bd,
  getElementRects: q2,
  getClientRects: z2,
  getDimensions: W2,
  getScale: Sr,
  isElement: Jt,
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
    }).then(({ x: w, y: k, placement: E, middlewareData: b }) => {
      if (Object.assign(c.style, {
        left: `${w}px`,
        top: `${k}px`
      }), l) {
        const { x: N, y: $ } = b.arrow, O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: N != null ? `${N}px` : "",
          top: $ != null ? `${$}px` : "",
          right: "",
          bottom: "",
          [O]: "2px"
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
  function y(w) {
    w.stopPropagation(), f ? m() : g();
  }
  function _(w) {
    c.contains(w.target) || m();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((w) => {
    e.addEventListener(w, y);
  }), document.addEventListener("click", _), {
    destroy() {
      t.forEach((w) => {
        e.removeEventListener(w, y);
      }), document.removeEventListener("click", _);
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
function Qn(e, t) {
  ue(t, !0);
  const n = p(t, "children", 7), r = p(t, "floating", 7), o = p(t, "placement", 7, "bottom");
  let i, s, a;
  An(() => (a = ny({
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
  Ge(f, n), R(h), $t(h, (y) => i = y, () => i);
  var g = L(h, 2), m = B(g);
  return Ge(m, r), R(g), $t(g, (y) => s = y, () => s), R(d), D(e, d), de(c);
}
se(Qn, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Te(e, t) {
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
  }, a = Ee(), l = ie(a);
  return $h(l, () => `h${r()}`, !1, (c, d) => {
    tt(c, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = Ee(), f = ie(h);
    Ge(f, () => n() ?? vt), D(d, h);
  }), D(e, a), de(s);
}
se(Te, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var oy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const iy = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ao(e, t) {
  ue(t, !0), Ie(e, iy);
  const n = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  $e(e, Fe(() => n, {
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
se(Ao, {}, [], [], !0);
const sy = () => ({ deleteNode: (t) => {
  Oe.removeNode(t), Oe.updateEdges((n) => n.filter((r) => r.source !== t && r.target !== t));
} }), Pn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, ay = () => ({ copyNode: (t) => {
  const n = Oe.getNode(t);
  if (n) {
    const r = Pn(), o = {
      ...n,
      id: r,
      position: { x: n.position.x + 50, y: n.position.y + 50 }
    };
    Oe.updateNodes((i) => [...i.map((a) => ({ ...a, selected: !1 })), o]);
  }
} }), Ue = () => Zn("svelteflow__node_id"), qn = () => Zn("tinyflow_options");
var ly = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), cy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), uy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), dy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), fy = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), hy = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), gy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), vy = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), py = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const my = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Zt(e, t) {
  ue(t, !0), Ie(e, my);
  const n = p(t, "data", 7), r = p(t, "id", 7, ""), o = p(t, "icon", 7), i = p(t, "handle", 7), s = p(t, "children", 7), a = p(t, "allowExecute", 7, !0), l = p(t, "allowCopy", 7, !0), c = p(t, "allowDelete", 7, !0), d = p(t, "allowSetting", 7, !0), h = p(t, "allowSettingOfCondition", 7, !0), f = p(t, "showSourceHandle", 7, !0), g = p(t, "showTargetHandle", 7, !0), m = p(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: _, getNode: w } = rt(), k = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = sy(), { copyNode: b } = ay(), N = qn(), $ = () => {
    N.onNodeExecute?.(w(r()));
  };
  let O = Ue();
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
  }, V = py(), Z = ie(V);
  {
    var z = (M) => {
      Ed(M, {
        get position() {
          return me.Top;
        },
        align: "start",
        children: (j, X) => {
          var Q = vy(), q = B(Q);
          {
            var F = (ae) => {
              $e(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (re, fe) => {
                  var ge = ly();
                  D(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(q, (ae) => {
              c() && ae(F);
            });
          }
          var U = L(q, 2);
          {
            var G = (ae) => {
              $e(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (re, fe) => {
                  var ge = cy();
                  D(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(U, (ae) => {
              l() && ae(G);
            });
          }
          var ne = L(U, 2);
          {
            var ee = (ae) => {
              $e(ae, {
                class: "tf-node-toolbar-item",
                onclick: $,
                children: (re, fe) => {
                  var ge = uy();
                  D(re, ge);
                },
                $$slots: { default: !0 }
              });
            };
            le(ne, (ae) => {
              a() && ae(ee);
            });
          }
          var ye = L(ne, 2);
          {
            var oe = (ae) => {
              Qn(ae, {
                placement: "bottom",
                floating: (fe) => {
                  var ge = hy(), we = B(ge), ce = L(B(we));
                  Je(ce, {
                    style: "width: 100%;",
                    onchange: (Le) => {
                      const Ye = Le.target.value;
                      _(O, { title: Ye });
                    },
                    get value() {
                      return n().title;
                    }
                  }), R(we);
                  var _e = L(we, 2), De = L(B(_e));
                  Ke(De, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Le) => {
                      const Ye = Le.target.value;
                      _(O, { description: Ye });
                    },
                    get value() {
                      return n().description;
                    }
                  }), R(_e);
                  var Y = L(_e, 2);
                  {
                    var qe = (Le) => {
                      var Ye = dy(), he = L(B(Ye));
                      Ke(he, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Xe) => {
                          const st = Xe.target.value;
                          _(O, { condition: st });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), R(Ye), D(Le, Ye);
                    };
                    le(Y, (Le) => {
                      h() && Le(qe);
                    });
                  }
                  var Ae = L(Y, 2), Ve = L(B(Ae), 2);
                  ir(Ve), Ve.__change = (Le) => {
                    const Ye = Le.target.checked;
                    _(O, { async: Ye });
                  }, R(Ae);
                  var He = L(Ae, 2), ot = L(B(He), 2);
                  ir(ot), ot.__change = (Le) => {
                    const Ye = Le.target.checked;
                    _(O, { loopEnable: Ye });
                  }, R(He);
                  var it = L(He, 2);
                  {
                    var Lt = (Le) => {
                      var Ye = fy(), he = ie(Ye), Xe = L(B(he));
                      {
                        let xt = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        Ke(Xe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (on) => {
                            const Vn = on.target.value;
                            _(O, { loopIntervalMs: Vn });
                          },
                          get value() {
                            return u(xt);
                          }
                        });
                      }
                      R(he);
                      var st = L(he, 2), Re = L(B(st));
                      {
                        let xt = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        Ke(Re, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (on) => {
                            const Vn = on.target.value;
                            _(O, { maxLoopCount: Vn });
                          },
                          get value() {
                            return u(xt);
                          }
                        });
                      }
                      R(st);
                      var Yt = L(st, 2), Tt = L(B(Yt));
                      Ke(Tt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (xt) => {
                          const on = xt.target.value;
                          _(O, { loopBreakCondition: on });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), R(Yt), D(Le, Ye);
                    };
                    le(it, (Le) => {
                      n().loopEnable && Le(Lt);
                    });
                  }
                  R(ge), Ce(() => {
                    Da(Ve, !!n().async), Da(ot, !!n().loopEnable);
                  }), D(fe, ge);
                },
                children: (fe, ge) => {
                  $e(fe, {
                    class: "tf-node-toolbar-item",
                    children: (we, ce) => {
                      var _e = gy();
                      D(we, _e);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            le(ye, (ae) => {
              d() && ae(oe);
            });
          }
          R(Q), D(j, Q);
        },
        $$slots: { default: !0 }
      });
    };
    le(Z, (M) => {
      (a() || l() || c()) && M(z);
    });
  }
  var S = L(Z, 2), T = L(B(S), 2), x = B(T);
  $d(x, {
    get items() {
      return u(k);
    },
    get activeKeys() {
      return y;
    },
    onChange: (M, j) => {
      _(r(), { expand: j?.includes("key") }), m()?.(j?.includes("key") ? "key" : "");
    }
  }), R(T), R(S);
  var C = L(S, 2);
  {
    var A = (M) => {
      Wn(M, {
        type: "target",
        get position() {
          return me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    le(C, (M) => {
      g() && M(A);
    });
  }
  var H = L(C, 2);
  {
    var K = (M) => {
      Wn(M, {
        type: "source",
        get position() {
          return me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    le(H, (M) => {
      f() && M(K);
    });
  }
  var W = L(H, 2);
  return Ge(W, () => i() ?? vt), D(e, V), de(I);
}
Un(["change"]);
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
var yy = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), wy = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), _y = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), xy = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const by = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Fd(e, t) {
  ue(t, !0), Ie(e, by);
  const n = p(t, "parameter", 7), r = p(t, "index", 7);
  let o = Ue(), i = Mn(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = rt(), l = (I, V) => {
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
  var _ = {
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
  }, w = xy(), k = ie(w), E = B(k);
  Je(E, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), R(k);
  var b = L(k, 2), N = B(b);
  Sd(N, {
    get checked() {
      return u(s).required;
    },
    onchange: h
  }), R(b);
  var $ = L(b, 2), O = B($);
  return $t(
    Qn(O, {
      placement: "bottom",
      floating: (V) => {
        var Z = wy(), z = B(Z), S = L(B(z));
        {
          let F = /* @__PURE__ */ P(() => u(s).contentType ? [u(s).contentType] : []);
          ct(S, {
            get items() {
              return ha;
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
          let F = /* @__PURE__ */ P(() => u(s).formType ? [u(s).formType] : []);
          ct(x, {
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
          var A = (F) => {
            var U = yy(), G = L(B(U));
            {
              let ne = /* @__PURE__ */ P(() => u(s).enums?.join(`
`));
              Ke(G, {
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
          le(C, (F) => {
            (u(s).formType === "radio" || u(s).formType === "checkbox" || u(s).formType === "select") && F(A);
          });
        }
        var H = L(C, 2), K = L(B(H));
        Ke(K, {
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
        Ke(M, {
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
        Ke(X, {
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
        $e(q, {
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
        $e(V, {
          class: "input-btn-more",
          children: (z, S) => {
            var T = _y();
            D(z, T);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => m = V,
    () => m
  ), R($), D(e, w), de(_);
}
se(Fd, { parameter: {}, index: {} }, [], [], !0);
var Cy = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), ky = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), Ey = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Sy = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function Kd(e, t) {
  ue(t, !0), Ie(e, Sy);
  let n = Ue(), r = Mn(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = Ey(), s = B(i);
  {
    var a = (c) => {
      var d = Cy();
      pe(4), D(c, d);
    };
    le(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = L(s, 2);
  pt(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, h) => {
      Fd(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(h);
        }
      });
    },
    (c) => {
      var d = ky();
      D(c, d);
    }
  ), R(i), D(e, i), de();
}
se(Kd, {}, [], [], !0);
const ho = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Pn()), ho(t.children);
}), e), rn = () => {
  const { updateNodeData: e } = rt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => ho(s?.children)) : ho(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Pn()
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
var Ny = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Py = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Ty = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Zd(e, t) {
  ue(t, !0), Ie(e, Ty);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Zt(e, Fe(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (l) => {
      var c = Ny();
      D(l, c);
    },
    children: (l, c) => {
      var d = $y(), h = ie(d), f = B(h);
      Te(f, {
        level: 3,
        children: (y, _) => {
          pe();
          var w = ke("输入参数");
          D(y, w);
        },
        $$slots: { default: !0 }
      });
      var g = L(f, 2);
      $e(g, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (y, _) => {
          var w = Py();
          D(y, w);
        },
        $$slots: { default: !0 }
      }), R(h);
      var m = L(h, 2);
      Kd(m, {}), D(l, d);
    },
    $$slots: { icon: !0, default: !0 }
  })), de(s);
}
se(Zd, { data: {} }, [], [], !0);
const Yd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Yd(e, r.source, n));
}, Wd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Wd(r.children, t + "." + r.name, n)
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
          children: Wd(r, e.id, t)
        };
    }
  }
}, Xd = (e = !1) => {
  const t = Ue(), n = Mn(t), r = /* @__PURE__ */ P(nn), o = /* @__PURE__ */ P(() => u(r).nodes), i = /* @__PURE__ */ P(() => u(r).edges), s = /* @__PURE__ */ P(() => u(r).nodeLookup);
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
      Yd(d, t, u(i));
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
var Dy = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Ay = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Oy = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const My = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function qd(e, t) {
  ue(t, !0), Ie(e, My), An(() => {
    u(c).refType || m({ value: "ref" });
  });
  const n = p(t, "parameter", 7), r = p(t, "index", 7), o = p(t, "dataKeyName", 7), i = p(t, "useChildrenOnly", 7), s = p(t, "showContentType", 7, !1);
  let a = Ue(), l = Mn(a), c = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = rt(), h = (T, x) => {
    d(a, (C) => {
      let A = C.data?.[o()];
      return A[r()] = { ...A[r()], [T]: x }, { [o()]: A };
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
  let _;
  const w = () => {
    d(a, (T) => {
      let x = T.data?.[o()];
      return x.splice(r(), 1), { [o()]: [...x] };
    }), _?.hide();
  };
  let k = Xd(i());
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
  }, b = Oy(), N = ie(b), $ = B(N);
  {
    let T = /* @__PURE__ */ P(() => u(c).nameDisabled === !0);
    Je($, {
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
  R(N);
  var O = L(N, 2), I = B(O);
  {
    var V = (T) => {
      Je(T, {
        get value() {
          return u(c).value;
        },
        placeholder: "请输入参数值",
        oninput: (x) => f("value", x)
      });
    }, Z = (T) => {
      var x = Ee(), C = ie(x);
      {
        var A = (H) => {
          {
            let K = /* @__PURE__ */ P(() => [u(c).ref]);
            ct(H, {
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
        le(
          C,
          (H) => {
            u(c).refType !== "input" && H(A);
          },
          !0
        );
      }
      D(T, x);
    };
    le(I, (T) => {
      u(c).refType === "fixed" ? T(V) : T(Z, !1);
    });
  }
  R(O);
  var z = L(O, 2), S = B(z);
  return $t(
    Qn(S, {
      placement: "bottom",
      floating: (x) => {
        var C = Ay(), A = B(C), H = L(B(A));
        {
          let U = /* @__PURE__ */ P(() => u(c).refType ? [u(c).refType] : []);
          ct(H, {
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
        R(A);
        var K = L(A, 2);
        {
          var W = (U) => {
            var G = Dy(), ne = L(B(G));
            {
              let ee = /* @__PURE__ */ P(() => u(c).contentType ? [u(c).contentType] : []);
              ct(ne, {
                get items() {
                  return ha;
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
          le(K, (U) => {
            s() && U(W);
          });
        }
        var M = L(K, 2), j = L(B(M));
        Ke(j, {
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
        Ke(Q, {
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
        $e(F, {
          onclick: w,
          children: (U, G) => {
            pe();
            var ne = ke("删除");
            D(U, ne);
          },
          $$slots: { default: !0 }
        }), R(q), R(C), D(x, C);
      },
      children: (x, C) => {
        Ao(x, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => _ = x,
    () => _
  ), R(z), D(e, b), de(E);
}
se(
  qd,
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
var Hy = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Ly = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Vy = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const Iy = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function wt(e, t) {
  ue(t, !0), Ie(e, Iy);
  const n = p(t, "noneParameterText", 7, "无输入参数"), r = p(t, "dataKeyName", 7, "parameters"), o = p(t, "useChildrenOnly", 7), i = p(t, "showContentType", 7, !1);
  let s = Ue(), a = Mn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = Vy(), h = B(d);
  {
    var f = (m) => {
      var y = Hy();
      pe(4), D(m, y);
    };
    le(h, (m) => {
      u(l).length !== 0 && m(f);
    });
  }
  var g = L(h, 2);
  return pt(
    g,
    19,
    () => u(l),
    (m) => m.id,
    (m, y, _) => {
      qd(m, {
        get parameter() {
          return u(y);
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
    (m) => {
      var y = Ly(), _ = B(y, !0);
      R(y), Ce(() => Be(_, n())), D(m, y);
    }
  ), R(d), D(e, d), de(c);
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
var zy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Ry = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const Fy = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function jd(e, t) {
  ue(t, !0), Ie(e, Fy);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return Zt(e, Fe(
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
        var c = zy();
        D(l, c);
      },
      children: (l, c) => {
        var d = By(), h = ie(d), f = B(h);
        Te(f, {
          level: 3,
          children: (y, _) => {
            pe();
            var w = ke("输出参数");
            D(y, w);
          },
          $$slots: { default: !0 }
        });
        var g = L(f, 2);
        $e(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (y, _) => {
            var w = Ry();
            D(y, w);
          },
          $$slots: { default: !0 }
        }), R(h);
        var m = L(h, 2);
        wt(m, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(s);
}
se(jd, { data: {} }, [], [], !0);
const ns = (e) => JSON.parse(JSON.stringify(e));
var Ky = /* @__PURE__ */ ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Zy = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Yy = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Wy = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Xy = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Gd(e, t) {
  ue(t, !0), Ie(e, Xy);
  const n = p(t, "parameter", 7), r = p(t, "position", 7), o = p(t, "dataKeyName", 7), i = p(t, "placeholder", 7, "请输入参数值");
  let s = Ue(), a = Mn(s), l = /* @__PURE__ */ P(() => {
    let S = a?.current?.data?.[o()], T;
    if (S && r().length > 0) {
      let x = S;
      for (let C = 0; C < r().length; C++) {
        const A = r()[C];
        C == r().length - 1 ? T = x[A] : x = x[A].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: c } = rt(), d = (S, T) => {
    c(s, (x) => {
      const C = x.data?.[o()];
      if (C && r().length > 0) {
        let A = C;
        for (let H = 0; H < r().length; H++) {
          const K = r()[H];
          H == r().length - 1 ? A[K] = { ...A[K], [S]: T } : A = A[K].children;
        }
      }
      return { [o()]: [...ns(C)] };
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
          const A = r()[C];
          C == r().length - 1 ? x.splice(A, 1) : x = x[A].children;
        }
      }
      return { [o()]: [...ns(T)] };
    }), g?.hide();
  }, y = () => {
    c(s, (S) => {
      let T = S.data?.[o()];
      if (T && r().length > 0) {
        let x = T;
        for (let C = 0; C < r().length; C++) {
          const A = r()[C];
          C == r().length - 1 ? x[A].children ? x[A].children.push({ id: Pn(), name: "newParam", dataType: "String" }) : x[A].children = [{ id: Pn(), name: "newParam", dataType: "String" }] : x = x[A].children;
        }
      }
      return { [o()]: [...ns(T)] };
    });
  };
  var _ = {
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
  }, w = Wy(), k = ie(w), E = B(k);
  {
    var b = (S) => {
      var T = Ee(), x = ie(T);
      pt(x, 17, r, Tr, (C, A) => {
        pe();
        var H = ke(" ");
        D(C, H);
      }), D(S, T);
    };
    le(E, (S) => {
      r().length > 1 && S(b);
    });
  }
  var N = L(E, 2);
  {
    let S = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
    Je(N, {
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
  var $ = L(k, 2), O = B($);
  {
    let S = /* @__PURE__ */ P(() => u(l).dataTypeItems || Vm), T = /* @__PURE__ */ P(() => u(l).dataType ? [u(l).dataType] : []), x = /* @__PURE__ */ P(() => u(l).dataTypeDisabled === !0);
    ct(O, {
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
  var I = L(O, 2);
  {
    var V = (S) => {
      $e(S, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (T, x) => {
          var C = Ky();
          D(T, C);
        },
        $$slots: { default: !0 }
      });
    };
    le(I, (S) => {
      (u(l).dataType === "Object" || u(l).dataType === "Array") && u(l).addChildDisabled !== !0 && S(V);
    });
  }
  R($);
  var Z = L($, 2), z = B(Z);
  return $t(
    Qn(z, {
      placement: "bottom",
      floating: (T) => {
        var x = Yy(), C = B(x), A = L(B(C));
        {
          let j = /* @__PURE__ */ P(() => u(l).defaultValue || "");
          Ke(A, {
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
          let j = /* @__PURE__ */ P(() => u(l).description || "");
          Ke(K, {
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
            var X = Zy(), Q = B(X);
            $e(Q, {
              onclick: m,
              children: (q, F) => {
                pe();
                var U = ke("删除");
                D(q, U);
              },
              $$slots: { default: !0 }
            }), R(X), D(j, X);
          };
          le(W, (j) => {
            u(l).deleteDisabled !== !0 && j(M);
          });
        }
        R(x), D(T, x);
      },
      children: (T, x) => {
        Ao(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => g = T,
    () => g
  ), R(Z), D(e, w), de(_);
}
se(
  Gd,
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
var qy = /* @__PURE__ */ te("<!> <!>", 1), jy = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Gy = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Uy = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Jy = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Ln(e, t) {
  ue(t, !0), Ie(e, Jy);
  const n = (m, y = vt, _ = vt) => {
    var w = Ee(), k = ie(w);
    pt(
      k,
      19,
      y,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, b, N) => {
        var $ = qy(), O = ie($);
        {
          let Z = /* @__PURE__ */ P(() => [..._(), u(N)]);
          Gd(O, {
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
        var I = L(O, 2);
        {
          var V = (Z) => {
            {
              let z = /* @__PURE__ */ P(() => [..._(), u(N)]);
              n(Z, () => u(b).children, () => u(z));
            }
          };
          le(I, (Z) => {
            u(b).children && Z(V);
          });
        }
        D(E, $);
      },
      (E) => {
        var b = Ee(), N = ie(b);
        {
          var $ = (O) => {
            var I = jy(), V = B(I, !0);
            R(I), Ce(() => Be(V, r())), D(O, I);
          };
          le(N, (O) => {
            _().length === 0 && O($);
          });
        }
        D(E, b);
      }
    ), D(m, w);
  }, r = p(t, "noneParameterText", 7, "无输出参数"), o = p(t, "dataKeyName", 7, "outputDefs"), i = p(t, "placeholder", 7, "请输入参数名称");
  let s = Ue(), a = Mn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = Uy(), h = B(d);
  {
    var f = (m) => {
      var y = Gy();
      pe(4), D(m, y);
    };
    le(h, (m) => {
      u(l).length !== 0 && m(f);
    });
  }
  var g = L(h, 2);
  return n(g, () => u(l) || [], () => []), R(d), D(e, d), de(c);
}
se(Ln, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Qy = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ew = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), rw = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const ow = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ud(e, t) {
  ue(t, !0), Ie(e, ow);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn(), s = qn();
  let a = /* @__PURE__ */ Se(Bt([]));
  An(async () => {
    const h = await s.provider?.llm?.();
    u(a).push(...h || []);
  });
  const { updateNodeData: l } = rt(), c = (h) => {
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
  je(() => {
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
  return Zt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var g = Qy();
        D(f, g);
      },
      children: (f, g) => {
        var m = rw(), y = ie(m), _ = B(y);
        Te(_, {
          level: 3,
          children: (W, M) => {
            pe();
            var j = ke("输入参数");
            D(W, j);
          },
          $$slots: { default: !0 }
        });
        var w = L(_, 2);
        $e(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (W, M) => {
            var j = ew();
            D(W, j);
          },
          $$slots: { default: !0 }
        }), R(y);
        var k = L(y, 2);
        wt(k, {});
        var E = L(k, 2), b = B(E);
        Te(b, {
          level: 3,
          children: (W, M) => {
            pe();
            var j = ke("图片识别");
            D(W, j);
          },
          $$slots: { default: !0 }
        });
        var N = L(b, 2);
        $e(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (W, M) => {
            var j = tw();
            D(W, j);
          },
          $$slots: { default: !0 }
        }), R(E);
        var $ = L(E, 2);
        wt($, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var O = L($, 2);
        Te(O, {
          level: 3,
          mt: "10px",
          children: (W, M) => {
            pe();
            var j = ke("模型设置");
            D(W, j);
          },
          $$slots: { default: !0 }
        });
        var I = L(O, 4), V = B(I);
        {
          let W = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          ct(V, {
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
        Qn(Z, {
          placement: "bottom",
          floating: (M) => {
            var j = nw(), X = L(B(j), 2), Q = B(X), q = B(Q), F = B(q);
            R(q);
            var U = L(q, 2);
            ir(U), U.__input = (ce) => l(o, { temperature: parseFloat(ce.target.value) }), R(Q), R(X);
            var G = L(X, 2), ne = B(G), ee = B(ne), ye = B(ee);
            R(ee);
            var oe = L(ee, 2);
            ir(oe), oe.__input = (ce) => l(o, { topP: parseFloat(ce.target.value) }), R(ne), R(G);
            var ae = L(G, 2), re = B(ae), fe = B(re), ge = B(fe);
            R(fe);
            var we = L(fe, 2);
            ir(we), we.__input = (ce) => l(o, { topK: parseInt(ce.target.value) }), R(re), R(ae), R(j), Ce(() => {
              Be(F, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), Ko(U, n().temperature ?? 0.7), Be(ye, `Top P: ${n().topP ?? 0.9 ?? ""}`), Ko(oe, n().topP ?? 0.9), Be(ge, `Top K: ${n().topK ?? 50 ?? ""}`), Ko(we, n().topK ?? 50);
            }), D(M, j);
          },
          children: (M, j) => {
            Ao(M, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), R(I);
        var z = L(I, 4), S = B(z);
        {
          let W = /* @__PURE__ */ P(() => n().systemPrompt || "");
          Ke(S, {
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
          let W = /* @__PURE__ */ P(() => n().userPrompt || "");
          Ke(x, {
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
        var C = L(T, 2), A = B(C);
        Te(A, {
          level: 3,
          children: (W, M) => {
            pe();
            var j = ke("输出参数");
            D(W, j);
          },
          $$slots: { default: !0 }
        });
        var H = L(A, 2);
        {
          let W = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          ct(H, {
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
        Ln(K, {}), D(f, m);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(d);
}
Un(["input"]);
se(Ud, { data: {} }, [], [], !0);
var iw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), sw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const cw = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  ue(t, !0), Ie(e, cw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  An(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = Ue(), { addParameter: i } = rn(), { updateNodeData: s } = rt(), a = [
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
  return Zt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = iw();
        D(d, h);
      },
      children: (d, h) => {
        var f = lw(), g = ie(f), m = B(g);
        Te(m, {
          level: 3,
          children: (Z, z) => {
            pe();
            var S = ke("输入参数");
            D(Z, S);
          },
          $$slots: { default: !0 }
        });
        var y = L(m, 2);
        $e(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Z, z) => {
            var S = sw();
            D(Z, S);
          },
          $$slots: { default: !0 }
        }), R(g);
        var _ = L(g, 2);
        wt(_, {});
        var w = L(_, 2);
        Te(w, {
          level: 3,
          mt: "10px",
          children: (Z, z) => {
            pe();
            var S = ke("代码");
            D(Z, S);
          },
          $$slots: { default: !0 }
        });
        var k = L(w, 4), E = B(k);
        {
          let Z = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          ct(E, {
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
        var b = L(k, 4), N = B(b);
        {
          let Z = /* @__PURE__ */ P(() => n().code || "");
          Ke(N, {
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
        var $ = L(b, 2), O = B($);
        Te(O, {
          level: 3,
          mt: "10px",
          children: (Z, z) => {
            pe();
            var S = ke("输出参数");
            D(Z, S);
          },
          $$slots: { default: !0 }
        });
        var I = L(O, 2);
        $e(I, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Z, z) => {
            var S = aw();
            D(Z, S);
          },
          $$slots: { default: !0 }
        }), R($);
        var V = L($, 2);
        Ln(V, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(l);
}
se(Jd, { data: {} }, [], [], !0);
var uw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), dw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const hw = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  ue(t, !0), Ie(e, hw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn(), { updateNodeData: s } = rt();
  je(() => {
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
  return Zt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = uw();
        D(c, d);
      },
      children: (c, d) => {
        var h = fw(), f = ie(h), g = B(f);
        Te(g, {
          level: 3,
          children: ($, O) => {
            pe();
            var I = ke("输入参数");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var m = L(g, 2);
        $e(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: ($, O) => {
            var I = dw();
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(f);
        var y = L(f, 2);
        wt(y, {});
        var _ = L(y, 2);
        Te(_, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: ($, O) => {
            pe();
            var I = ke("模板内容");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var w = L(_, 2), k = B(w);
        {
          let $ = /* @__PURE__ */ P(() => n().template || "");
          Ke(k, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (O) => {
              s(o, () => ({ template: O.target.value }));
            },
            get value() {
              return u($);
            }
          });
        }
        R(w);
        var E = L(w, 2), b = B(E);
        Te(b, {
          level: 3,
          mt: "10px",
          children: ($, O) => {
            pe();
            var I = ke("输出参数");
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(E);
        var N = L(E, 2);
        Ln(N, {}), D(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(a);
}
se(Qd, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), vw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), mw = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), yw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ww = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), _w = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), bw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Cw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), kw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Sw = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function ef(e, t) {
  ue(t, !0), Ie(e, Sw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  An(() => {
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
  ], i = Ue(), { addParameter: s } = rn(), { updateNodeData: a } = rt();
  var l = {
    get data() {
      return n();
    },
    set data(c) {
      n(c), v();
    }
  };
  return Zt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = gw();
        D(d, h);
      },
      children: (d, h) => {
        var f = Ew(), g = ie(f), m = B(g);
        Te(m, {
          level: 3,
          children: (F, U) => {
            pe();
            var G = ke("输入参数");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var y = L(m, 2);
        $e(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (F, U) => {
            var G = vw();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(g);
        var _ = L(g, 2);
        wt(_, {});
        var w = L(_, 2);
        Te(w, {
          level: 3,
          mt: "10px",
          children: (F, U) => {
            pe();
            var G = ke("URL 地址");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var k = L(w, 2), E = B(k), b = B(E);
        {
          let F = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          ct(b, {
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
        var N = L(E, 2), $ = B(N);
        {
          let F = /* @__PURE__ */ P(() => n().url || "");
          Je($, {
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
        R(N), R(k);
        var O = L(k, 2), I = B(O);
        Te(I, {
          level: 3,
          children: (F, U) => {
            pe();
            var G = ke("Http 头信息");
            D(F, G);
          },
          $$slots: { default: !0 }
        });
        var V = L(I, 2);
        $e(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (F, U) => {
            var G = pw();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(O);
        var Z = L(O, 2);
        wt(Z, { dataKeyName: "headers" });
        var z = L(Z, 2);
        {
          var S = (F) => {
            var U = mw(), G = ie(U);
            Te(G, {
              level: 3,
              mt: "10px",
              children: (De, Y) => {
                pe();
                var qe = ke("Body");
                D(De, qe);
              },
              $$slots: { default: !0 }
            });
            var ne = L(G, 2), ee = B(ne), ye = B(ee);
            {
              let De = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              Je(ye, {
                type: "radio",
                value: "",
                get checked() {
                  return u(De);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            pe(), R(ee);
            var oe = L(ee, 2), ae = B(oe);
            {
              let De = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              Je(ae, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return u(De);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            pe(), R(oe);
            var re = L(oe, 2), fe = B(re);
            {
              let De = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              Je(fe, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return u(De);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            pe(), R(re);
            var ge = L(re, 2), we = B(ge);
            {
              let De = /* @__PURE__ */ P(() => n().bodyType === "json");
              Je(we, {
                type: "radio",
                value: "json",
                get checked() {
                  return u(De);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            pe(), R(ge);
            var ce = L(ge, 2), _e = B(ce);
            {
              let De = /* @__PURE__ */ P(() => n().bodyType === "raw");
              Je(_e, {
                type: "radio",
                value: "raw",
                get checked() {
                  return u(De);
                },
                onchange: (Y) => {
                  Y.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            pe(), R(ce), R(ne), D(F, U);
          };
          le(z, (F) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && F(S);
          });
        }
        var T = L(z, 2);
        {
          var x = (F) => {
            var U = ww(), G = ie(U), ne = B(G);
            Te(ne, {
              level: 3,
              children: (oe, ae) => {
                pe();
                var re = ke("参数");
                D(oe, re);
              },
              $$slots: { default: !0 }
            });
            var ee = L(ne, 2);
            $e(ee, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (oe, ae) => {
                var re = yw();
                D(oe, re);
              },
              $$slots: { default: !0 }
            }), R(G);
            var ye = L(G, 2);
            wt(ye, { dataKeyName: "formData" }), D(F, U);
          };
          le(T, (F) => {
            n().bodyType === "form-data" && F(x);
          });
        }
        var C = L(T, 2);
        {
          var A = (F) => {
            var U = xw(), G = ie(U), ne = B(G);
            Te(ne, {
              level: 3,
              children: (oe, ae) => {
                pe();
                var re = ke("Body 参数");
                D(oe, re);
              },
              $$slots: { default: !0 }
            });
            var ee = L(ne, 2);
            $e(ee, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (oe, ae) => {
                var re = _w();
                D(oe, re);
              },
              $$slots: { default: !0 }
            }), R(G);
            var ye = L(G, 2);
            wt(ye, { dataKeyName: "formUrlencoded" }), D(F, U);
          };
          le(C, (F) => {
            n().bodyType === "x-www-form-urlencoded" && F(A);
          });
        }
        var H = L(C, 2);
        {
          var K = (F) => {
            var U = bw(), G = B(U);
            Ke(G, {
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
          le(H, (F) => {
            n().bodyType === "json" && F(K);
          });
        }
        var W = L(H, 2);
        {
          var M = (F) => {
            var U = Cw(), G = B(U);
            Ke(G, {
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
          le(W, (F) => {
            n().bodyType === "raw" && F(M);
          });
        }
        var j = L(W, 2), X = B(j);
        Te(X, {
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
        $e(Q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (F, U) => {
            var G = kw();
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(j);
        var q = L(j, 2);
        Ln(q, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(l);
}
se(ef, { data: {} }, [], [], !0);
var Nw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Pw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Tw = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  ue(t, !0), Ie(e, Tw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn(), s = qn();
  let a = /* @__PURE__ */ Se(Bt([]));
  An(async () => {
    const d = await s.provider?.knowledge?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = rt();
  je(() => {
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
  return Zt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = Nw();
        D(h, f);
      },
      children: (h, f) => {
        var g = $w(), m = ie(g), y = B(m);
        Te(y, {
          level: 3,
          children: (S, T) => {
            pe();
            var x = ke("输入参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var _ = L(y, 2);
        $e(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, T) => {
            var x = Pw();
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(m);
        var w = L(m, 2);
        wt(w, {});
        var k = L(w, 2);
        Te(k, {
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
          let S = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          ct(b, {
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
        var N = L(E, 4), $ = B(N);
        Je($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), R(N);
        var O = L(N, 4), I = B(O);
        {
          let S = /* @__PURE__ */ P(() => n().limit || "");
          Je(I, {
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
        R(O);
        var V = L(O, 2), Z = B(V);
        Te(Z, {
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
        Ln(z, {}), D(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(c);
}
se(tf, { data: {} }, [], [], !0);
var Dw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Aw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Mw = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function nf(e, t) {
  ue(t, !0), Ie(e, Mw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn(), s = qn();
  let a = /* @__PURE__ */ Se(Bt([]));
  An(async () => {
    const d = await s.provider?.searchEngine?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = rt();
  je(() => {
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
  return Zt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = Dw();
        D(h, f);
      },
      children: (h, f) => {
        var g = Ow(), m = ie(g), y = B(m);
        Te(y, {
          level: 3,
          children: (S, T) => {
            pe();
            var x = ke("输入参数");
            D(S, x);
          },
          $$slots: { default: !0 }
        });
        var _ = L(y, 2);
        $e(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, T) => {
            var x = Aw();
            D(S, x);
          },
          $$slots: { default: !0 }
        }), R(m);
        var w = L(m, 2);
        wt(w, {});
        var k = L(w, 2);
        Te(k, {
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
          let S = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          ct(b, {
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
        var N = L(E, 4), $ = B(N);
        Je($, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ keyword: T }));
          }
        }), R(N);
        var O = L(N, 4), I = B(O);
        Je(I, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (S) => {
            const T = S.target.value;
            l(o, () => ({ limit: T }));
          }
        }), R(O);
        var V = L(O, 2), Z = B(V);
        Te(Z, {
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
        Ln(z, {}), D(h, g);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(c);
}
se(nf, { data: {} }, [], [], !0);
var Hw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Lw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Iw = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function rf(e, t) {
  ue(t, !0), Ie(e, Iw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn();
  je(() => {
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
  return Zt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Hw();
        D(c, d);
      },
      handle: (c) => {
        Wn(c, {
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
        var h = Vw(), f = ie(h), g = B(f);
        Te(g, {
          level: 3,
          children: (E, b) => {
            pe();
            var N = ke("循环变量");
            D(E, N);
          },
          $$slots: { default: !0 }
        }), R(f);
        var m = L(f, 2);
        wt(m, { dataKeyName: "loopVars" });
        var y = L(m, 2), _ = B(y);
        Te(_, {
          level: 3,
          children: (E, b) => {
            pe();
            var N = ke("输出参数");
            D(E, N);
          },
          $$slots: { default: !0 }
        });
        var w = L(_, 2);
        $e(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (E, b) => {
            var N = Lw();
            D(E, N);
          },
          $$slots: { default: !0 }
        }), R(y);
        var k = L(y, 2);
        wt(k, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(c, h);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), de(s);
}
se(rf, { data: {} }, [], [], !0);
var zw = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Rw = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Bw = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function of(e, t) {
  ue(t, !0), Ie(e, Bw);
  const n = p(t, "parameter", 7), r = p(t, "index", 7), o = p(t, "dataKeyName", 7), i = p(t, "useChildrenOnly", 7);
  let s = Ue(), a = Mn(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = rt(), d = (S, T) => {
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
  const _ = () => {
    c(s, (S) => {
      let T = S.data?.[o()];
      return T.splice(r(), 1), { [o()]: [...T] };
    }), y?.hide();
  };
  let w = Xd(i());
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
  }, E = Rw(), b = ie(E), N = B(b);
  {
    let S = /* @__PURE__ */ P(() => u(l).nameDisabled === !0);
    Je(N, {
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
  var $ = L(b, 2), O = B($);
  {
    var I = (S) => {
      Je(S, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => h("value", T)
      });
    }, V = (S) => {
      var T = Ee(), x = ie(T);
      {
        var C = (A) => {
          {
            let H = /* @__PURE__ */ P(() => [u(l).ref]);
            ct(A, {
              get items() {
                return w.current;
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
        le(
          x,
          (A) => {
            u(l).refType !== "input" && A(C);
          },
          !0
        );
      }
      D(S, T);
    };
    le(O, (S) => {
      u(l).refType === "fixed" ? S(I) : S(V, !1);
    });
  }
  R($);
  var Z = L($, 2), z = B(Z);
  return $t(
    Qn(z, {
      placement: "bottom",
      floating: (T) => {
        var x = zw(), C = B(x), A = L(B(C));
        {
          let F = /* @__PURE__ */ P(() => u(l).contentType ? [u(l).contentType] : []);
          ct(A, {
            get items() {
              return ha;
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
          let F = /* @__PURE__ */ P(() => u(l).formType ? [u(l).formType] : []);
          ct(K, {
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
        Ke(M, {
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
        Ke(X, {
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
        $e(q, {
          onclick: _,
          children: (F, U) => {
            pe();
            var G = ke("删除");
            D(F, G);
          },
          $$slots: { default: !0 }
        }), R(Q), R(x), D(T, x);
      },
      children: (T, x) => {
        Ao(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => y = T,
    () => y
  ), R(Z), D(e, E), de(k);
}
se(
  of,
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
var Fw = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Kw = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Zw = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Yw = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function sf(e, t) {
  ue(t, !0), Ie(e, Yw);
  const n = p(t, "noneParameterText", 7, "无确认数据"), r = p(t, "dataKeyName", 7, "parameters"), o = p(t, "useChildrenOnly", 7);
  let i = Ue(), s = Mn(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
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
  }, c = Zw(), d = B(c);
  {
    var h = (g) => {
      var m = Fw();
      pe(4), D(g, m);
    };
    le(d, (g) => {
      u(a).length !== 0 && g(h);
    });
  }
  var f = L(d, 2);
  return pt(
    f,
    19,
    () => u(a),
    (g) => g.id,
    (g, m, y) => {
      of(g, {
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
      var m = Kw(), y = B(m, !0);
      R(m), Ce(() => Be(y, n())), D(g, m);
    }
  ), R(c), D(e, c), de(l);
}
se(sf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const $s = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!$s(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !$s(e[s], t[s])) return !1;
    return !0;
  }
};
var Ww = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Xw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qw = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const jw = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function af(e, t) {
  ue(t, !0), Ie(e, jw);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn(), { updateNodeData: s } = rt();
  je(() => {
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
      $s(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return Zt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Ww();
        D(c, d);
      },
      children: (c, d) => {
        var h = qw(), f = ie(h), g = B(f);
        Te(g, {
          level: 3,
          children: ($, O) => {
            pe();
            var I = ke("确认数据");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var m = L(g, 2);
        $e(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: ($, O) => {
            var I = Xw();
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(f);
        var y = L(f, 2);
        sf(y, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var _ = L(y, 2);
        Te(_, {
          level: 3,
          mt: "10px",
          children: ($, O) => {
            pe();
            var I = ke("确认消息");
            D($, I);
          },
          $$slots: { default: !0 }
        });
        var w = L(_, 4), k = B(w);
        {
          let $ = /* @__PURE__ */ P(() => n().message || "");
          Ke(k, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (O) => {
              s(o, () => ({ message: O.target.value }));
            },
            get value() {
              return u($);
            }
          });
        }
        R(w);
        var E = L(w, 2), b = B(E);
        Te(b, {
          level: 3,
          mt: "10px",
          children: ($, O) => {
            pe();
            var I = ke("输出参数");
            D($, I);
          },
          $$slots: { default: !0 }
        }), R(E);
        var N = L(E, 2);
        Ln(N, { placeholder: "" }), D(c, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), de(a);
}
se(af, { data: {} }, [], [], !0);
const Gw = {
  startNode: Zd,
  codeNode: Jd,
  confirmNode: af,
  llmNode: Ud,
  templateNode: Qd,
  httpNode: ef,
  knowledgeNode: tf,
  searchEngineNode: nf,
  loopNode: rf,
  endNode: jd
};
var Uw = /* @__PURE__ */ te("<!> ", 1);
function Ts(e, t) {
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
  return $e(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (c, d) => {
      var h = Uw(), f = ie(h);
      qs(f, n);
      var g = L(f);
      Ce(() => Be(g, ` ${r() ?? ""}`)), D(c, h);
    },
    $$slots: { default: !0 }
  }), de(l);
}
se(Ts, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Jw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Qw = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), e_ = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function lf(e, t) {
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
  ], s = [], a = qn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((k, E) => (l[k].sortNo || 0) - (l[E].sortNo || 0));
    for (let k of w)
      l[k].group === "base" ? o.push({ type: k, ...l[k] }) : s.push({
        icon: l[k].icon,
        title: l[k].title,
        type: k
      });
    o.sort((k, E) => (k.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let k of w)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === k) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var c = e_(), d = B(c), h = B(d), f = B(h);
  Pd(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      J(n, w.value.toString(), !0);
    }
  }), R(h);
  var g = L(h, 2), m = B(g);
  pt(m, 21, () => o, Tr, (w, k) => {
    Ts(w, Fe(() => u(k)));
  }), R(m);
  var y = L(m, 2);
  pt(y, 21, () => s, Tr, (w, k) => {
    Ts(w, Fe(() => u(k)));
  }), R(y), R(g), R(d);
  var _ = L(d, 2);
  $e(_, {
    onclick: () => {
      J(r, u(r) ? "" : "show", !0);
    },
    children: (w, k) => {
      var E = Ee(), b = ie(E);
      {
        var N = (O) => {
          var I = Jw();
          D(O, I);
        }, $ = (O) => {
          var I = Qw();
          D(O, I);
        };
        le(b, (O) => {
          u(r) === "show" ? O(N) : O($, !1);
        });
      }
      D(w, E);
    },
    $$slots: { default: !0 }
  }), R(c), Ce(() => {
    Pt(c, 1, `tf-toolbar ${u(r) ?? ""}`), dt(m, `display: ${u(n) === "base" ? "flex" : "none"}`), dt(y, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), D(e, c), de();
}
se(lf, {}, [], [], !0);
const t_ = () => ({ getNode: (t) => Oe.getNode(t) }), n_ = () => ({ ensureParentInNodesBefore: (t, n) => {
  Oe.updateNodes((r) => {
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
} }), r_ = () => ({ getEdgesByTarget: (t) => Oe.getEdges().filter((r) => r.target === t) });
var o_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), i_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), s_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), a_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), l_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), c_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), u_ = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), d_ = /* @__PURE__ */ ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), f_ = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), h_ = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const g_ = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function cf(e, t) {
  ue(t, !0), Ie(e, g_);
  const n = p(t, "data", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = Ue(), { addParameter: i } = rn(), s = rt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, c = (w, k) => {
    l({ [w]: k.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), g = qn().customNodes[t.type];
  g.render?.(h, d, s);
  const m = g.forms;
  let y;
  je(() => {
    n().expand && y && y.append(h);
  }), je(() => {
    n() && g.onUpdate?.(h, { ...d, data: n() });
  }), je(() => {
    !n().parameters && g.parameters && l({
      parameters: ho(JSON.parse(JSON.stringify(g.parameters)))
    });
  }), je(() => {
    !n().outputDefs && g.outputDefs && l({
      outputDefs: ho(JSON.parse(JSON.stringify(g.outputDefs)))
    });
  });
  var _ = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), v();
    }
  };
  {
    const w = (E) => {
      var b = Ee(), N = ie(b);
      qs(N, () => g.icon), D(E, b);
    };
    let k = /* @__PURE__ */ P(() => ({ ...n(), description: g.description }));
    Zt(e, Fe(
      {
        get data() {
          return u(k);
        }
      },
      () => r,
      {
        icon: w,
        children: (E, b) => {
          var N = h_(), $ = ie(N);
          {
            var O = (T) => {
              var x = i_(), C = ie(x), A = B(C);
              Te(A, {
                level: 3,
                children: (M, j) => {
                  pe();
                  var X = ke("输入参数");
                  D(M, X);
                },
                $$slots: { default: !0 }
              });
              var H = L(A, 2);
              {
                var K = (M) => {
                  $e(M, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (j, X) => {
                      var Q = o_();
                      D(j, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                le(H, (M) => {
                  g.parametersAddEnable !== !1 && M(K);
                });
              }
              R(C);
              var W = L(C, 2);
              wt(W, {}), D(T, x);
            };
            le($, (T) => {
              g.parametersEnable !== !1 && T(O);
            });
          }
          var I = L($, 2);
          {
            var V = (T) => {
              var x = Ee(), C = ie(x);
              pt(C, 17, () => m, Tr, (A, H) => {
                var K = Ee(), W = ie(K);
                {
                  var M = (X) => {
                    var Q = s_(), q = ie(Q), F = B(q, !0);
                    R(q);
                    var U = L(q, 2), G = B(U);
                    {
                      let ne = /* @__PURE__ */ P(() => n()[u(H).name] || u(H).defaultValue);
                      Je(G, Fe(
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
                    R(U), Ce(() => Be(F, u(H).label)), D(X, Q);
                  }, j = (X) => {
                    var Q = Ee(), q = ie(Q);
                    {
                      var F = (G) => {
                        var ne = a_(), ee = ie(ne), ye = B(ee, !0);
                        R(ee);
                        var oe = L(ee, 2), ae = B(oe);
                        {
                          let re = /* @__PURE__ */ P(() => n()[u(H).name] || u(H).defaultValue);
                          Ke(ae, Fe(
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
                        R(oe), Ce(() => Be(ye, u(H).label)), D(G, ne);
                      }, U = (G) => {
                        var ne = Ee(), ee = ie(ne);
                        {
                          var ye = (ae) => {
                            var re = l_(), fe = ie(re), ge = B(fe, !0);
                            R(fe);
                            var we = L(fe, 2), ce = B(we), _e = B(ce), De = B(_e);
                            R(_e);
                            var Y = L(_e, 2), qe = (Ae) => l({ [u(H).name]: parseFloat(Ae.target.value) });
                            tt(
                              Y,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...u(H).attrs,
                                value: n()[u(H).name] ?? u(H).defaultValue,
                                oninput: qe
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), R(ce), R(we), Ce(() => {
                              Be(ge, u(H).label), Be(De, `${u(H).description ?? ""}: ${n()[u(H).name] ?? u(H).defaultValue ?? ""}`);
                            }), D(ae, re);
                          }, oe = (ae) => {
                            var re = Ee(), fe = ie(re);
                            {
                              var ge = (ce) => {
                                var _e = c_(), De = ie(_e), Y = B(De, !0);
                                R(De);
                                var qe = L(De, 2), Ae = B(qe);
                                {
                                  let Ve = /* @__PURE__ */ P(() => u(H).options || []), He = /* @__PURE__ */ P(() => n()[u(H).name] ? [n()[u(H).name]] : [u(H).defaultValue]);
                                  ct(Ae, {
                                    get items() {
                                      return u(Ve);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(H).placeholder;
                                    },
                                    onSelect: (ot) => {
                                      const it = ot.value;
                                      l({ [u(H).name]: it });
                                    },
                                    get value() {
                                      return u(He);
                                    }
                                  });
                                }
                                R(qe), Ce(() => Be(Y, u(H).label)), D(ce, _e);
                              }, we = (ce) => {
                                var _e = Ee(), De = ie(_e);
                                {
                                  var Y = (Ae) => {
                                    var Ve = u_(), He = ie(Ve), ot = B(He, !0);
                                    R(He);
                                    var it = L(He, 2), Lt = B(it);
                                    {
                                      let Le = /* @__PURE__ */ P(() => u(H).chosen?.buttonText);
                                      Nd(Lt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return u(H).placeholder;
                                        },
                                        get buttonText() {
                                          return u(Le);
                                        },
                                        onChosen: (Ye, he, Xe) => {
                                          u(H).chosen?.onChosen?.(l, Ye, he, Xe);
                                        },
                                        get value() {
                                          return n()[u(H).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[u(H).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    R(it), Ce(() => Be(ot, u(H).label)), D(Ae, Ve);
                                  }, qe = (Ae) => {
                                    var Ve = Ee(), He = ie(Ve);
                                    {
                                      var ot = (it) => {
                                        Te(it, Fe({ level: 3, mt: "10px" }, () => u(H).attrs, {
                                          children: (Lt, Le) => {
                                            pe();
                                            var Ye = ke();
                                            Ce(() => Be(Ye, u(H).label)), D(Lt, Ye);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      le(
                                        He,
                                        (it) => {
                                          u(H).type === "heading" && it(ot);
                                        },
                                        !0
                                      );
                                    }
                                    D(Ae, Ve);
                                  };
                                  le(
                                    De,
                                    (Ae) => {
                                      u(H).type === "chosen" ? Ae(Y) : Ae(qe, !1);
                                    },
                                    !0
                                  );
                                }
                                D(ce, _e);
                              };
                              le(
                                fe,
                                (ce) => {
                                  u(H).type === "select" ? ce(ge) : ce(we, !1);
                                },
                                !0
                              );
                            }
                            D(ae, re);
                          };
                          le(
                            ee,
                            (ae) => {
                              u(H).type === "slider" ? ae(ye) : ae(oe, !1);
                            },
                            !0
                          );
                        }
                        D(G, ne);
                      };
                      le(
                        q,
                        (G) => {
                          u(H).type === "textarea" ? G(F) : G(U, !1);
                        },
                        !0
                      );
                    }
                    D(X, Q);
                  };
                  le(W, (X) => {
                    u(H).type === "input" ? X(M) : X(j, !1);
                  });
                }
                D(A, K);
              }), D(T, x);
            };
            le(I, (T) => {
              m && T(V);
            });
          }
          var Z = L(I, 2);
          $t(Z, (T) => y = T, () => y);
          var z = L(Z, 2);
          {
            var S = (T) => {
              var x = f_(), C = ie(x), A = B(C);
              Te(A, {
                level: 3,
                mt: "10px",
                children: (M, j) => {
                  pe();
                  var X = ke("输出参数");
                  D(M, X);
                },
                $$slots: { default: !0 }
              });
              var H = L(A, 2);
              {
                var K = (M) => {
                  $e(M, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (j, X) => {
                      var Q = d_();
                      D(j, Q);
                    },
                    $$slots: { default: !0 }
                  });
                };
                le(H, (M) => {
                  g.outputDefsAddEnable !== !1 && M(K);
                });
              }
              R(C);
              var W = L(C, 2);
              Ln(W, {}), D(T, x);
            };
            le(z, (T) => {
              g.outputDefsEnable !== !1 && T(S);
            });
          }
          Ce(() => {
            dt(Z, g.rootStyle || ""), Pt(Z, 1, On(g.rootClass), "svelte-qt4m0r");
          }), D(E, N);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return de(_);
}
se(cf, { data: {} }, [], [], !0);
const v_ = () => ({ updateEdgeData: (t, n, r) => {
  const o = Oe.getEdge(t);
  if (!o)
    return;
  const i = typeof n == "function" ? n(o) : n;
  o.data = r?.replace ? i : { ...o.data, ...i }, Oe.updateEdges((s) => s.map((a) => a.id === t ? o : a));
} }), p_ = () => ({ deleteEdge: (t) => {
  Oe.removeEdge(t);
} }), m_ = () => {
  const e = (n, r) => r.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (o) => o.source === n && o.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (n) => {
    const r = Oe.getEdges(), o = [];
    let i = e(n, r);
    for (; i.length > 0; ) {
      const s = [];
      i.forEach((a) => {
        o.push(Oe.getNode(a.target)), s.push(...e(a.target, r));
      }), i = s;
    }
    return o;
  } };
}, y_ = () => ({ getNodeRelativePosition: (t) => {
  let n = Oe.getNode(t);
  const r = { x: 0, y: 0 };
  for (; n; )
    r.x += n.position.x, r.y += n.position.y, n.parentId ? n = Oe.getNode(n.parentId) : n = void 0;
  return r;
} });
function w_(e) {
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
function __(e) {
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
function x_(e) {
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
function Ds(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Ds(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Ds(e[r], t));
    return n;
  }
  return e;
}
const b_ = () => (rt(), { copyHandler: async (n) => {
  const r = Oe.getNodes().filter((d) => d.selected);
  if (r.length === 0) return;
  const i = Oe.getEdges().filter((d) => r.some((h) => h.id === d.source) && r.some((h) => h.id === d.target)), s = r.map(w_), a = i.map(x_), c = JSON.stringify({
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
  const i = __(o.tinyflowNodes), s = o.tinyflowEdges || [], a = /* @__PURE__ */ new Map(), l = [];
  for (const d of i) {
    const h = `node_${Pn()}`;
    a.set(d.id, h);
  }
  for (const d of i) {
    const h = a.get(d.id), f = d.parentId !== void 0 ? a.get(d.parentId) : void 0, g = Ds(d.data, a);
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
      id: `edge_${Pn()}`,
      source: h,
      target: f
    });
  }
  Oe.updateNodes((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...l]), Oe.updateEdges((d) => [...d.map((f) => ({ ...f, selected: !1 })), ...c]);
} }), Tl = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var C_ = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), k_ = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), E_ = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const S_ = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function uf(e, t) {
  ue(t, !0), Ie(e, S_);
  const n = p(t, "onInit", 7), r = /* @__PURE__ */ ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = rt();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Se(!1), s = /* @__PURE__ */ Se(null);
  const { updateEdgeData: a } = v_(), l = (X) => {
    X.preventDefault(), X.dataTransfer && (X.dataTransfer.dropEffect = "move");
  }, c = (X) => {
    X.preventDefault();
    const Q = o.screenToFlowPosition({ x: X.clientX - 250, y: X.clientY - 100 }), q = X.dataTransfer?.getData("application/tinyflow");
    if (!q)
      return;
    const F = JSON.parse(q), U = { id: `node_${Pn()}`, position: Q, data: {}, ...F };
    Oe.addNode(U), Oe.selectNodeOnly(U.id);
  }, { getNode: d } = t_(), h = (X) => {
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
  }, { getNodesFromSource: f } = m_(), { getNodeRelativePosition: g } = y_(), { ensureParentInNodesBefore: m } = n_(), y = (X, Q) => {
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
      Oe.getEdges().forEach((ne) => {
        ne.target === q.id && ne.source == F.id && (J(i, !0), J(s, ne, !0));
      });
    });
  }, { getEdgesByTarget: _ } = r_(), w = (X) => {
    X.edges.forEach((q) => {
      q.id === u(s)?.id && (J(s, null), J(i, !1));
      const F = d(q.target);
      if (F && F.parentId) {
        const U = _(q.target), { x: G, y: ne } = g(F.parentId);
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
            const oe = U[ye], ae = d(oe.source);
            if (ae.parentId || ae.type === "loopNode") {
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
  }, { deleteEdge: k } = p_(), E = (X, Q) => {
  }, b = (X) => {
  }, { copyHandler: N, pasteHandler: $ } = b_(), O = (X) => {
    Tl() || ((X.ctrlKey || X.metaKey) && X.key === "c" && (X.preventDefault(), N(X)), (X.ctrlKey || X.metaKey) && X.key === "a" && (X.preventDefault(), Oe.updateNodes((Q) => Q.map((q) => ({ ...q, selected: !0 }))), Oe.updateEdges((Q) => Q.map((q) => ({ ...q, selected: !0 })))));
  }, I = async (X) => {
    Tl() || $(X);
  };
  An(() => {
    window.addEventListener("keydown", O), window.addEventListener("paste", I);
  }), _o(() => {
    window.removeEventListener("keydown", O), window.removeEventListener("paste", I);
  });
  const V = {
    // ...nodeTypes
  }, Z = qn().customNodes;
  if (Z)
    for (let X of Object.keys(Z))
      V[X] = cf;
  const z = qn().onDataChange;
  je(() => {
    z?.({
      nodes: Oe.getNodes(),
      edges: Oe.getEdges(),
      viewport: Oe.getViewport()
    });
  });
  var S = {
    get onInit() {
      return n();
    },
    set onInit(X) {
      n(X), v();
    }
  }, T = E_(), x = B(T), C = Oe.getNodes, A = Oe.setNodes, H = Oe.getEdges, K = Oe.setEdges, W = Oe.getViewport, M = Oe.setViewport;
  {
    let X = /* @__PURE__ */ P(() => ({ ...Gw, ...V })), Q = /* @__PURE__ */ P(() => ({
      markerEnd: { type: ao.ArrowClosed, width: 20, height: 20 }
    }));
    fd(x, {
      get nodeTypes() {
        return u(X);
      },
      get nodes() {
        return C();
      },
      set nodes(q) {
        A(q);
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
      onbeforeconnect: (q) => ({ ...q, id: Pn() }),
      ondelete: w,
      onclick: (q) => {
        const F = q.target;
        F.classList.contains("svelte-flow__edge-interaction") || F.classList.contains("panel-content") || F.closest(".panel-content") || (J(i, !1), J(s, null));
      },
      get defaultEdgeOptions() {
        return u(Q);
      },
      children: (q, F) => {
        var U = k_(), G = ie(U);
        bd(G, {});
        var ne = L(G, 2);
        wd(ne, {});
        var ee = L(ne, 2);
        kd(ee, {});
        var ye = L(ee, 2);
        {
          var oe = (ae) => {
            Po(ae, {
              children: (re, fe) => {
                var ge = C_(), we = L(B(ge), 4), ce = B(we);
                {
                  let qe = /* @__PURE__ */ P(() => u(s)?.data?.condition);
                  Ke(ce, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return u(qe);
                    },
                    onchange: (Ae) => {
                      u(s) && a(u(s).id, { condition: Ae.target?.value });
                    }
                  });
                }
                R(we);
                var _e = L(we, 2), De = B(_e);
                $e(De, {
                  onclick: () => {
                    k(u(s)?.id), J(i, !1);
                  },
                  children: (qe, Ae) => {
                    pe();
                    var Ve = ke("删除");
                    D(qe, Ve);
                  },
                  $$slots: { default: !0 }
                });
                var Y = L(De, 2);
                $e(Y, {
                  primary: !0,
                  onclick: () => {
                    J(i, !1);
                  },
                  children: (qe, Ae) => {
                    pe();
                    var Ve = ke("保存");
                    D(qe, Ve);
                  },
                  $$slots: { default: !0 }
                }), R(_e), R(ge), D(re, ge);
              },
              $$slots: { default: !0 }
            });
          };
          le(ye, (ae) => {
            u(i) && ae(oe);
          });
        }
        D(q, U);
      },
      $$slots: { default: !0 }
    });
  }
  var j = L(x, 2);
  return lf(j, {}), R(T), D(e, T), de(S);
}
se(uf, { onInit: {} }, [], [], !0);
function N_(e, t) {
  ue(t, !0);
  const n = p(t, "options", 7), r = p(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Oe.init(o?.nodes || [], o?.edges || []), Pr("tinyflow_options", n());
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
  return hd(e, {
    children: (s, a) => {
      uf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), de(i);
}
customElements.define("tinyflow-component", se(N_, { options: {}, onInit: {} }, [], [], !1));
export {
  $_ as Tinyflow
};
//# sourceMappingURL=index.js.map
