var ef = Object.defineProperty;
var Pa = (e) => {
  throw TypeError(e);
};
var tf = (e, t, n) => t in e ? ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var yt = (e, t, n) => tf(e, typeof t != "symbol" ? t + "" : t, n), Ji = (e, t, n) => t.has(e) || Pa("Cannot " + n);
var it = (e, t, n) => (Ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), nr = (e, t, n) => t.has(e) ? Pa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Gr = (e, t, n, r) => (Ji(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Na = (e, t, n) => (Ji(e, t, "access private method"), n);
const nf = "5";
var Ol;
typeof window < "u" && ((Ol = window.__svelte ?? (window.__svelte = {})).v ?? (Ol.v = /* @__PURE__ */ new Set())).add(nf);
let Br = !1, rf = !1;
function of() {
  Br = !0;
}
of();
const Ls = 1, Is = 2, Ll = 4, sf = 8, af = 16, lf = 1, uf = 2, Il = 4, cf = 8, df = 16, zl = 1, ff = 2, zs = "[", Rs = "[!", Bs = "]", _r = {}, Pt = Symbol(), Rl = "http://www.w3.org/2000/svg", Ta = !1, rn = 2, Bl = 4, $i = 8, Ys = 16, On = 32, Yr = 64, ei = 128, Gt = 256, ti = 512, pt = 1024, Ln = 2048, gr = 4096, Nn = 8192, Si = 16384, gf = 32768, Zr = 65536, hf = 1 << 17, vf = 1 << 19, Yl = 1 << 20, Wn = Symbol("$state"), Zs = Symbol("legacy props"), pf = Symbol("");
var Co = Array.isArray, mf = Array.prototype.indexOf, Xs = Array.from, ni = Object.keys, so = Object.defineProperty, Tn = Object.getOwnPropertyDescriptor, Zl = Object.getOwnPropertyDescriptors, yf = Object.prototype, wf = Array.prototype, Ws = Object.getPrototypeOf;
function Ur(e) {
  return typeof e == "function";
}
const dt = () => {
};
function _f(e) {
  return e();
}
function ao(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const xf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let lo = [], uo = [];
function Xl() {
  var e = lo;
  lo = [], ao(e);
}
function Wl() {
  var e = uo;
  uo = [], ao(e);
}
function ko(e) {
  lo.length === 0 && queueMicrotask(Xl), lo.push(e);
}
function bf(e) {
  uo.length === 0 && xf(Wl), uo.push(e);
}
function Ma() {
  lo.length > 0 && Xl(), uo.length > 0 && Wl();
}
function Fl(e) {
  return e === this.v;
}
function Fs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ks(e) {
  return !Fs(e, this.v);
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
function $f() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Sf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Pf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Nf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Tf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Mf() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Hf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Tt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Fl,
    rv: 0,
    wv: 0
  };
  return n;
}
function sr(e) {
  return /* @__PURE__ */ Kl(Tt(e));
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t = !1) {
  var r;
  const n = Tt(e);
  return t || (n.equals = Ks), Br && Ze !== null && Ze.l !== null && ((r = Ze.l).s ?? (r.s = [])).push(n), n;
}
function ne(e, t = !1) {
  return /* @__PURE__ */ Kl(/* @__PURE__ */ Eo(e, t));
}
// @__NO_SIDE_EFFECTS__
function Kl(e) {
  return Ue !== null && !tn && Ue.f & rn && (gn === null ? Vf([e]) : gn.push(e)), e;
}
function U(e, t) {
  return Ue !== null && !tn && Di() && Ue.f & (rn | Ys) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (gn === null || !gn.includes(e)) && Hf(), gs(e, t);
}
function gs(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = tu(), ql(e, Ln), Di() && Ke !== null && Ke.f & pt && !(Ke.f & (On | Yr)) && (En === null ? Of([e]) : En.push(e))), t;
}
function Ha(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function ql(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Di(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & Ln || !r && s === Ke || (on(s, t), a & (pt | Gt) && (a & rn ? ql(
        /** @type {Derived} */
        s,
        gr
      ) : Mi(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  var t = rn | Ln, n = Ue !== null && Ue.f & rn ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return Ke === null || n !== null && n.f & Gt ? t |= Gt : Ke.f |= Yl, {
    ctx: Ze,
    deps: null,
    effects: null,
    equals: Fl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Ke
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Ne(e);
  return t.equals = Ks, t;
}
function Gl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ut(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Df(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & rn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Af(e) {
  var t, n = Ke;
  Un(Df(e));
  try {
    Gl(e), t = ru(e);
  } finally {
    Un(n);
  }
  return t;
}
function Ul(e) {
  var t = Af(e), n = (Zn || e.f & Gt) && e.deps !== null ? gr : pt;
  on(e, n), e.equals(t) || (e.v = t, e.wv = tu());
}
function Pi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Se = !1;
function Lt(e) {
  Se = e;
}
let Ae;
function bt(e) {
  if (e === null)
    throw Pi(), _r;
  return Ae = e;
}
function pn() {
  return bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _n(Ae)
  );
}
function Z(e) {
  if (Se) {
    if (/* @__PURE__ */ _n(Ae) !== null)
      throw Pi(), _r;
    Ae = e;
  }
}
function Te(e = 1) {
  if (Se) {
    for (var t = e, n = Ae; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ _n(n);
    Ae = n;
  }
}
function hs() {
  for (var e = 0, t = Ae; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Bs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === zs || n === Rs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _n(t)
    );
    t.remove(), t = r;
  }
}
function Vt(e, t = null, n) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const r = Ws(e);
  if (r !== yf && r !== wf)
    return e;
  var o = /* @__PURE__ */ new Map(), i = Co(e), s = Tt(0);
  i && o.set("length", Tt(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Nf();
        var f = o.get(u);
        return f === void 0 ? (f = Tt(c.value), o.set(u, f)) : U(f, Vt(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Tt(Pt));
        else {
          if (i && typeof u == "string") {
            var f = (
              /** @type {Source<number>} */
              o.get("length")
            ), d = Number(u);
            Number.isInteger(d) && d < f.v && U(f, d);
          }
          U(c, Pt), Da(s);
        }
        return !0;
      },
      get(l, u, c) {
        var p;
        if (u === Wn)
          return e;
        var f = o.get(u), d = u in l;
        if (f === void 0 && (!d || (p = Tn(l, u)) != null && p.writable) && (f = Tt(Vt(d ? l[u] : Pt, a)), o.set(u, f)), f !== void 0) {
          var g = h(f);
          return g === Pt ? void 0 : g;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var f = o.get(u);
          f && (c.value = h(f));
        } else if (c === void 0) {
          var d = o.get(u), g = d == null ? void 0 : d.v;
          if (d !== void 0 && g !== Pt)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var g;
        if (u === Wn)
          return !0;
        var c = o.get(u), f = c !== void 0 && c.v !== Pt || Reflect.has(l, u);
        if (c !== void 0 || Ke !== null && (!f || (g = Tn(l, u)) != null && g.writable)) {
          c === void 0 && (c = Tt(f ? Vt(l[u], a) : Pt), o.set(u, c));
          var d = h(c);
          if (d === Pt)
            return !1;
        }
        return f;
      },
      set(l, u, c, f) {
        var _;
        var d = o.get(u), g = u in l;
        if (i && u === "length")
          for (var p = c; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var x = o.get(p + "");
            x !== void 0 ? U(x, Pt) : p in l && (x = Tt(Pt), o.set(p + "", x));
          }
        d === void 0 ? (!g || (_ = Tn(l, u)) != null && _.writable) && (d = Tt(void 0), U(d, Vt(c, a)), o.set(u, d)) : (g = d.v !== Pt, U(d, Vt(c, a)));
        var C = Reflect.getOwnPropertyDescriptor(l, u);
        if (C != null && C.set && C.set.call(f, c), !g) {
          if (i && typeof u == "string") {
            var E = (
              /** @type {Source<number>} */
              o.get("length")
            ), m = Number(u);
            Number.isInteger(m) && m >= E.v && U(E, m + 1);
          }
          Da(s);
        }
        return !0;
      },
      ownKeys(l) {
        h(s);
        var u = Reflect.ownKeys(l).filter((d) => {
          var g = o.get(d);
          return g === void 0 || g.v !== Pt;
        });
        for (var [c, f] of o)
          f.v !== Pt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Tf();
      }
    }
  );
}
function Da(e, t = 1) {
  U(e, e.v + t);
}
var Nt, jl, Jl, Ql;
function vs() {
  if (Nt === void 0) {
    Nt = window, jl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Jl = Tn(t, "firstChild").get, Ql = Tn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Hn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return Jl.call(e);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return Ql.call(e);
}
function X(e, t) {
  if (!Se)
    return /* @__PURE__ */ xt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xt(Ae)
  );
  if (n === null)
    n = Ae.appendChild(Hn());
  else if (t && n.nodeType !== 3) {
    var r = Hn();
    return n == null || n.before(r), bt(r), r;
  }
  return bt(n), n;
}
function be(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ _n(n) : n;
  }
  return Ae;
}
function R(e, t = 1, n = !1) {
  let r = Se ? Ae : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ _n(r);
  if (!Se)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = Hn();
    return r === null ? o == null || o.after(s) : r.before(s), bt(s), s;
  }
  return bt(r), /** @type {TemplateNode} */
  r;
}
function qs(e) {
  e.textContent = "";
}
let Ko = !1, ri = !1, oi = null, or = !1, Gs = !1;
function Aa(e) {
  Gs = e;
}
let oo = [];
let Ue = null, tn = !1;
function Gn(e) {
  Ue = e;
}
let Ke = null;
function Un(e) {
  Ke = e;
}
let gn = null;
function Vf(e) {
  gn = e;
}
let wt = null, At = 0, En = null;
function Of(e) {
  En = e;
}
let eu = 1, ii = 0, Zn = !1;
function tu() {
  return ++eu;
}
function Xr(e) {
  var f;
  var t = e.f;
  if (t & Ln)
    return !0;
  if (t & gr) {
    var n = e.deps, r = (t & Gt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ti) !== 0, a = r && Ke !== null && !Zn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((f = i == null ? void 0 : i.reactions) != null && f.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= ti), a && c !== null && !(c.f & Gt) && (u.f ^= Gt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Xr(
          /** @type {Derived} */
          i
        ) && Ul(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ke !== null && !Zn) && on(e, pt);
  }
  return !1;
}
function Lf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ei)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ei;
      }
    n = n.parent;
  }
  throw Ko = !1, e;
}
function If(e) {
  return (e.f & Si) === 0 && (e.parent === null || (e.parent.f & ei) === 0);
}
function Ni(e, t, n, r) {
  if (Ko) {
    if (n === null && (Ko = !1), If(t))
      throw e;
    return;
  }
  n !== null && (Ko = !0);
  {
    Lf(e, t);
    return;
  }
}
function nu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      i.f & rn ? nu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? on(i, Ln) : i.f & pt && on(i, gr), Mi(
        /** @type {Effect} */
        i
      ));
    }
}
function ru(e) {
  var g;
  var t = wt, n = At, r = En, o = Ue, i = Zn, s = gn, a = Ze, l = tn, u = e.f;
  wt = /** @type {null | Value[]} */
  null, At = 0, En = null, Zn = (u & Gt) !== 0 && (tn || !or || Ue === null), Ue = u & (On | Yr) ? null : e, gn = null, Va(e.ctx), tn = !1, ii++;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (wt !== null) {
      var d;
      if (si(e, At), f !== null && At > 0)
        for (f.length = At + wt.length, d = 0; d < wt.length; d++)
          f[At + d] = wt[d];
      else
        e.deps = f = wt;
      if (!Zn)
        for (d = At; d < f.length; d++)
          ((g = f[d]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && At < f.length && (si(e, At), f.length = At);
    if (Di() && En !== null && !tn && f !== null && !(e.f & (rn | gr | Ln)))
      for (d = 0; d < /** @type {Source[]} */
      En.length; d++)
        nu(
          En[d],
          /** @type {Effect} */
          e
        );
    return o !== null && ii++, c;
  } finally {
    wt = t, At = n, En = r, Ue = o, Zn = i, gn = s, Va(a), tn = l;
  }
}
function zf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = mf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (wt === null || !wt.includes(t)) && (on(t, gr), t.f & (Gt | ti) || (t.f ^= ti), Gl(
    /** @type {Derived} **/
    t
  ), si(
    /** @type {Derived} **/
    t,
    0
  ));
}
function si(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      zf(e, n[r]);
}
function Ti(e) {
  var t = e.f;
  if (!(t & Si)) {
    on(e, pt);
    var n = Ke, r = Ze, o = or;
    Ke = e, or = !0;
    try {
      t & Ys ? qf(e) : lu(e), au(e);
      var i = ru(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = eu;
      var s = e.deps, a;
      Ta && rf && e.f & Ln;
    } catch (l) {
      Ni(l, e, n, r || e.ctx);
    } finally {
      or = o, Ke = n;
    }
  }
}
function Rf() {
  try {
    $f();
  } catch (e) {
    if (oi !== null)
      Ni(e, oi, null);
    else
      throw e;
  }
}
function ou() {
  var e = or;
  try {
    var t = 0;
    for (or = !0; oo.length > 0; ) {
      t++ > 1e3 && Rf();
      var n = oo, r = n.length;
      oo = [];
      for (var o = 0; o < r; o++) {
        var i = n[o];
        i.f & pt || (i.f ^= pt);
        var s = Yf(i);
        Bf(s);
      }
    }
  } finally {
    ri = !1, or = e, oi = null;
  }
}
function Bf(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Si | Nn)))
        try {
          Xr(r) && (Ti(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? uu(r) : r.fn = null));
        } catch (o) {
          Ni(o, r, null, r.ctx);
        }
    }
}
function Mi(e) {
  ri || (ri = !0, queueMicrotask(ou));
  for (var t = oi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Yr | On)) {
      if (!(n & pt)) return;
      t.f ^= pt;
    }
  }
  oo.push(t);
}
function Yf(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & On) !== 0, i = o && (r & pt) !== 0;
    if (!i && !(r & Nn)) {
      if (r & Bl)
        t.push(n);
      else if (o)
        n.f ^= pt;
      else {
        var s = Ue;
        try {
          Ue = n, Xr(n) && Ti(n);
        } catch (u) {
          Ni(u, n, null, n.ctx);
        } finally {
          Ue = s;
        }
      }
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
  return t;
}
function y(e) {
  var t;
  for (Ma(); oo.length > 0; )
    ri = !0, ou(), Ma();
  return (
    /** @type {T} */
    t
  );
}
function h(e) {
  var t = e.f, n = (t & rn) !== 0;
  if (Ue !== null && !tn) {
    gn !== null && gn.includes(e) && Mf();
    var r = Ue.deps;
    e.rv < ii && (e.rv = ii, wt === null && r !== null && r[At] === e ? At++ : wt === null ? wt = [e] : (!Zn || !wt.includes(e)) && wt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Gt) && (o.f ^= Gt);
  }
  return n && (o = /** @type {Derived} */
  e, Xr(o) && Ul(o)), e.v;
}
function mn(e) {
  var t = tn;
  try {
    return tn = !0, e();
  } finally {
    tn = t;
  }
}
const Zf = -7169;
function on(e, t) {
  e.f = e.f & Zf | t;
}
function j(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      ps(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && ps(n);
      }
  }
}
function ps(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ps(e[r], t);
      } catch {
      }
    const n = Ws(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Zl(n);
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
function iu(e) {
  Ke === null && Ue === null && Ef(), Ue !== null && Ue.f & Gt && Ke === null && kf(), Gs && Cf();
}
function Xf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = (e & Yr) !== 0, i = Ke, s = {
    ctx: Ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ln,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Ti(s), s.f |= gf;
    } catch (u) {
      throw Ut(s), u;
    }
  else t !== null && Mi(s);
  var a = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Yl | ei)) === 0;
  if (!a && !o && r && (i !== null && Xf(s, i), Ue !== null && Ue.f & rn)) {
    var l = (
      /** @type {Derived} */
      Ue
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return s;
}
function su(e) {
  const t = hr($i, null, !1);
  return on(t, pt), t.teardown = e, t;
}
function Nr(e) {
  iu();
  var t = Ke !== null && (Ke.f & On) !== 0 && Ze !== null && !Ze.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ze
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Ke,
      reaction: Ue
    });
  } else {
    var r = Ot(e);
    return r;
  }
}
function Wf(e) {
  return iu(), Wr(e);
}
function Ff(e) {
  const t = hr(Yr, e, !0);
  return () => {
    Ut(t);
  };
}
function Kf(e) {
  const t = hr(Yr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Tr(t, () => {
      Ut(t), r(void 0);
    }) : (Ut(t), r(void 0));
  });
}
function Ot(e) {
  return hr(Bl, e, !1);
}
function fe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Wr(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), mn(t));
  });
}
function gt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ze
  );
  Wr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & pt && on(n, gr), Xr(n) && Ti(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Wr(e) {
  return hr($i, e, !0);
}
function $e(e, t = [], n = Ne) {
  const r = t.map(n);
  return vr(() => e(...r.map(h)));
}
function vr(e, t = 0) {
  return hr($i | Ys | t, e, !0);
}
function Dn(e, t = !0) {
  return hr($i | On, e, !0, t);
}
function au(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Gs, r = Ue;
    Aa(!0), Gn(null);
    try {
      t.call(null);
    } finally {
      Aa(n), Gn(r);
    }
  }
}
function lu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Ut(n, t), n = r;
  }
}
function qf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & On || Ut(t), t = n;
  }
}
function Ut(e, t = !0) {
  var n = !1;
  if ((t || e.f & vf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _n(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  lu(e, t && !n), si(e, 0), on(e, Si);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  au(e);
  var a = e.parent;
  a !== null && a.first !== null && uu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function uu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Tr(e, t) {
  var n = [];
  Us(e, n, !0), cu(n, () => {
    Ut(e), t && t();
  });
}
function cu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Us(e, t, n) {
  if (!(e.f & Nn)) {
    if (e.f ^= Nn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Zr) !== 0 || (r.f & On) !== 0;
      Us(r, t, i ? n : !1), r = o;
    }
  }
}
function co(e) {
  du(e, !0);
}
function du(e, t) {
  if (e.f & Nn) {
    e.f ^= Nn, e.f & pt || (e.f ^= pt), Xr(e) && (on(e, Ln), Mi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Zr) !== 0 || (n.f & On) !== 0;
      du(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Hi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Ze = null;
function Va(e) {
  Ze = e;
}
function ar(e) {
  return (
    /** @type {T} */
    js().get(e)
  );
}
function Mr(e, t) {
  return js().set(e, t), t;
}
function Gf(e) {
  return js().has(e);
}
function ge(e, t = !1, n) {
  Ze = {
    p: Ze,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Br && !t && (Ze.l = {
    s: null,
    u: null,
    r1: [],
    r2: Tt(!1)
  });
}
function he(e) {
  const t = Ze;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Ke, r = Ue;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Un(i.effect), Gn(i.reaction), Ot(i.fn);
        }
      } finally {
        Un(n), Gn(r);
      }
    }
    Ze = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Di() {
  return !Br || Ze !== null && Ze.l === null;
}
function js(e) {
  return Ze === null && Hi(), Ze.c ?? (Ze.c = new Map(Uf(Ze) || void 0));
}
function Uf(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function jf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Jf = [
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
function Qf(e) {
  return Jf.includes(e);
}
const e1 = {
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
function t1(e) {
  return e = e.toLowerCase(), e1[e] ?? e;
}
const n1 = ["touchstart", "touchmove"];
function r1(e) {
  return n1.includes(e);
}
const o1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function i1(e) {
  return o1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function s1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ko(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function a1(e) {
  Se && /* @__PURE__ */ xt(e) !== null && qs(e);
}
let Oa = !1;
function l1() {
  Oa || (Oa = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function u1(e) {
  var t = Ue, n = Ke;
  Gn(null), Un(null);
  try {
    return e();
  } finally {
    Gn(t), Un(n);
  }
}
const fu = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function gu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || eo.call(t, i), !i.cancelBubble)
      return u1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ko(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ye(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = gu(e, t, n, i);
  (t === document.body || t === window || t === document) && su(() => {
    t.removeEventListener(e, s, i);
  });
}
function Ai(e) {
  for (var t = 0; t < e.length; t++)
    fu.add(e[t]);
  for (var n of ms)
    n(e);
}
function eo(e) {
  var m;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, a = e.__root;
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
    so(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = Ue, f = Ke;
    Gn(null), Un(null);
    try {
      for (var d, g = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + r];
          if (x !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Co(x)) {
              var [C, ...E] = x;
              C.apply(i, [e, ...E]);
            } else
              x.call(i, e);
        } catch (_) {
          d ? g.push(_) : d = _;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (d) {
        for (let _ of g)
          queueMicrotask(() => {
            throw _;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Gn(c), Un(f);
    }
  }
}
function Js(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ht(e, t) {
  var n = (
    /** @type {Effect} */
    Ke
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  var n = (t & zl) !== 0, r = (t & ff) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Ht(Ae, null), Ae;
    o === void 0 && (o = Js(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ xt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || jl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ht(a, l);
    } else
      Ht(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & zl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Se)
      return Ht(Ae, null), Ae;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Js(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ xt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ xt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ xt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ xt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ht(c, f);
    } else
      Ht(u, u);
    return u;
  };
}
function Be(e = "") {
  if (!Se) {
    var t = Hn(e + "");
    return Ht(t, t), t;
  }
  var n = Ae;
  return n.nodeType !== 3 && (n.before(n = Hn()), bt(n)), Ht(n, n), n;
}
function et() {
  if (Se)
    return Ht(Ae, null), Ae;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Hn();
  return e.append(t, n), Ht(t, n), e;
}
function L(e, t) {
  if (Se) {
    Ke.nodes_end = Ae, pn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function It(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function hu(e, t) {
  return vu(e, t);
}
function c1(e, t) {
  vs(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = Ae;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== zs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ _n(i);
    if (!i)
      throw _r;
    Lt(!0), bt(
      /** @type {Comment} */
      i
    ), pn();
    const s = vu(e, { ...t, anchor: i });
    if (Ae === null || Ae.nodeType !== 8 || /** @type {Comment} */
    Ae.data !== Bs)
      throw Pi(), _r;
    return Lt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === _r)
      return t.recover === !1 && Sf(), vs(), qs(n), Lt(!1), hu(e, t);
    throw s;
  } finally {
    Lt(r), bt(o);
  }
}
const mr = /* @__PURE__ */ new Map();
function vu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  vs();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var g = f[d];
      if (!a.has(g)) {
        a.add(g);
        var p = r1(g);
        t.addEventListener(g, eo, { passive: p });
        var x = mr.get(g);
        x === void 0 ? (document.addEventListener(g, eo, { passive: p }), mr.set(g, 1)) : mr.set(g, x + 1);
      }
    }
  };
  l(Xs(fu)), ms.add(l);
  var u = void 0, c = Kf(() => {
    var f = n ?? t.appendChild(Hn());
    return Dn(() => {
      if (i) {
        ge({});
        var d = (
          /** @type {ComponentContext} */
          Ze
        );
        d.c = i;
      }
      o && (r.$$events = o), Se && Ht(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, r) || {}, Se && (Ke.nodes_end = Ae), i && he();
    }), () => {
      var p;
      for (var d of a) {
        t.removeEventListener(d, eo);
        var g = (
          /** @type {number} */
          mr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, eo), mr.delete(d)) : mr.set(d, g);
      }
      ms.delete(l), f !== n && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return ys.set(u, c), u;
}
let ys = /* @__PURE__ */ new WeakMap();
function d1(e, t) {
  const n = ys.get(e);
  return n ? (ys.delete(e), n(t)) : Promise.resolve();
}
function ke(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && pn();
  var o = e, i = null, s = null, a = Pt, l = n > 0 ? Zr : 0, u = !1;
  const c = (d, g = !0) => {
    u = !0, f(g, d);
  }, f = (d, g) => {
    if (a === (a = d)) return;
    let p = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const C = (
          /** @type {Comment} */
          o.data
        );
        C === zs ? r = 0 : C === Rs ? r = 1 / 0 : (r = parseInt(C.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const x = r > n;
      !!a === x && (o = hs(), bt(o), Lt(!1), p = !0, r = -1);
    }
    a ? (i ? co(i) : g && (i = Dn(() => g(o))), s && Tr(s, () => {
      s = null;
    })) : (s ? co(s) : g && (s = Dn(() => g(o, [n + 1, r]))), i && Tr(i, () => {
      i = null;
    })), p && Lt(!0);
  };
  vr(() => {
    u = !1, t(c), u || f(null, null);
  }, l), Se && (o = Ae);
}
function Vi(e, t) {
  return t;
}
function f1(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Us(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    qs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Rn(e, t[0].prev, t[i - 1].next);
  }
  cu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), Rn(e, c.prev, c.next)), Ut(c.e, !a);
    }
  });
}
function Rt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Ll) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Se ? bt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xt(u)
    ) : u.appendChild(Hn());
  }
  Se && pn();
  var c = null, f = !1, d = /* @__PURE__ */ pe(() => {
    var g = n();
    return Co(g) ? g : g == null ? [] : Xs(g);
  });
  vr(() => {
    var g = h(d), p = g.length;
    if (f && p === 0)
      return;
    f = p === 0;
    let x = !1;
    if (Se) {
      var C = (
        /** @type {Comment} */
        s.data === Rs
      );
      C !== (p === 0) && (s = hs(), bt(s), Lt(!1), x = !0);
    }
    if (Se) {
      for (var E = null, m, _ = 0; _ < p; _++) {
        if (Ae.nodeType === 8 && /** @type {Comment} */
        Ae.data === Bs) {
          s = /** @type {Comment} */
          Ae, x = !0, Lt(!1);
          break;
        }
        var v = g[_], b = r(v, _);
        m = pu(
          Ae,
          a,
          E,
          null,
          v,
          b,
          _,
          o,
          t,
          n
        ), a.items.set(b, m), E = m;
      }
      p > 0 && bt(hs());
    }
    Se || g1(g, a, s, o, t, r, n), i !== null && (p === 0 ? c ? co(c) : c = Dn(() => i(s)) : c !== null && Tr(c, () => {
      c = null;
    })), x && Lt(!0), h(d);
  }), Se && (s = Ae);
}
function g1(e, t, n, r, o, i, s) {
  var S, M, k, P;
  var a = (o & sf) !== 0, l = (o & (Ls | Is)) !== 0, u = e.length, c = t.items, f = t.first, d = f, g, p = null, x, C = [], E = [], m, _, v, b;
  if (a)
    for (b = 0; b < u; b += 1)
      m = e[b], _ = i(m, b), v = c.get(_), v !== void 0 && ((S = v.a) == null || S.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(v));
  for (b = 0; b < u; b += 1) {
    if (m = e[b], _ = i(m, b), v = c.get(_), v === void 0) {
      var N = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      p = pu(
        N,
        t,
        p,
        p === null ? t.first : p.next,
        m,
        _,
        b,
        r,
        o,
        s
      ), c.set(_, p), C = [], E = [], d = p.next;
      continue;
    }
    if (l && h1(v, m, b, o), v.e.f & Nn && (co(v.e), a && ((M = v.a) == null || M.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(v))), v !== d) {
      if (g !== void 0 && g.has(v)) {
        if (C.length < E.length) {
          var $ = E[0], T;
          p = $.prev;
          var O = C[0], D = C[C.length - 1];
          for (T = 0; T < C.length; T += 1)
            La(C[T], $, n);
          for (T = 0; T < E.length; T += 1)
            g.delete(E[T]);
          Rn(t, O.prev, D.next), Rn(t, p, O), Rn(t, D, $), d = $, p = D, b -= 1, C = [], E = [];
        } else
          g.delete(v), La(v, d, n), Rn(t, v.prev, v.next), Rn(t, v, p === null ? t.first : p.next), Rn(t, p, v), p = v;
        continue;
      }
      for (C = [], E = []; d !== null && d.k !== _; )
        d.e.f & Nn || (g ?? (g = /* @__PURE__ */ new Set())).add(d), E.push(d), d = d.next;
      if (d === null)
        continue;
      v = d;
    }
    C.push(v), p = v, d = v.next;
  }
  if (d !== null || g !== void 0) {
    for (var A = g === void 0 ? [] : Xs(g); d !== null; )
      d.e.f & Nn || A.push(d), d = d.next;
    var V = A.length;
    if (V > 0) {
      var z = o & Ll && u === 0 ? n : null;
      if (a) {
        for (b = 0; b < V; b += 1)
          (k = A[b].a) == null || k.measure();
        for (b = 0; b < V; b += 1)
          (P = A[b].a) == null || P.fix();
      }
      f1(t, A, z, c);
    }
  }
  a && ko(() => {
    var H;
    if (x !== void 0)
      for (v of x)
        (H = v.a) == null || H.apply();
  }), Ke.first = t.first && t.first.e, Ke.last = p && p.e;
}
function h1(e, t, n, r) {
  r & Ls && gs(e.v, t), r & Is ? gs(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function pu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Ls) !== 0, f = (l & af) === 0, d = c ? f ? /* @__PURE__ */ Eo(o) : Tt(o) : o, g = l & Is ? Tt(s) : s, p = {
    i: g,
    v: d,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = Dn(() => a(e, d, g, u), Se), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function La(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _n(i)
    );
    o.before(i), i = s;
  }
}
function Rn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function mu(e, t, n, r, o) {
  var i = e, s = "", a;
  vr(() => {
    if (s === (s = t() ?? "")) {
      Se && pn();
      return;
    }
    a !== void 0 && (Ut(a), a = void 0), s !== "" && (a = Dn(() => {
      if (Se) {
        Ae.data;
        for (var l = pn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ _n(l);
        if (l === null)
          throw Pi(), _r;
        Ht(Ae, u), i = bt(l);
        return;
      }
      var c = s + "", f = Js(c);
      Ht(
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), i.before(f);
    }));
  });
}
function vt(e, t, n, r, o) {
  var a;
  Se && pn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function v1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function lr(e, t, ...n) {
  var r = e, o = dt, i;
  vr(() => {
    o !== (o = t()) && (i && (Ut(i), i = null), i = Dn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Zr), Se && (r = Ae);
}
function yu(e, t, n) {
  Se && pn();
  var r = e, o, i;
  vr(() => {
    o !== (o = t()) && (i && (Tr(i), i = null), o && (i = Dn(() => n(r, o))));
  }, Zr), Se && (r = Ae);
}
function p1(e, t, n, r, o, i) {
  let s = Se;
  Se && pn();
  var a, l, u = null;
  Se && Ae.nodeType === 1 && (u = /** @type {Element} */
  Ae, pn());
  var c = (
    /** @type {TemplateNode} */
    Se ? Ae : e
  ), f;
  vr(() => {
    const d = t() || null;
    var g = d === "svg" ? Rl : null;
    d !== a && (f && (d === null ? Tr(f, () => {
      f = null, l = null;
    }) : d === l ? co(f) : Ut(f)), d && d !== l && (f = Dn(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, d) : document.createElement(d), Ht(u, u), r) {
        Se && i1(d) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ xt(u) : u.appendChild(Hn())
        );
        Se && (p === null ? Lt(!1) : bt(p)), r(u, p);
      }
      Ke.nodes_end = u, c.before(u);
    })), a = d, a && (l = a));
  }, Zr), s && (Lt(!0), bt(c));
}
function je(e, t) {
  ko(() => {
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
function ht(e, t, n) {
  Ot(() => {
    var r = mn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Wr(() => {
        var s = n();
        j(s), o && Fs(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function wu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = wu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function m1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = wu(e)) && (r && (r += " "), r += t);
  return r;
}
function xn(e) {
  return typeof e == "object" ? m1(e) : e ?? "";
}
const Ia = [...` 	
\r\f \v\uFEFF`];
function y1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ia.includes(r[s - 1])) && (a === r.length || Ia.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ct(e, t, n, r, o, i) {
  var s = e.__className;
  if (Se || s !== n) {
    var a = y1(n, r, i);
    (!Se || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
const jr = Symbol("class");
function io(e) {
  if (Se) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ce(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ce(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, bf(n), l1();
  }
}
function Qi(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function w1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ce(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[pf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && _u(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function sn(e, t, n, r, o = !1, i = !1, s = !1) {
  let a = Se && i;
  a && Lt(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = xn(n.class) : (r || n[jr]) && (n.class = null);
  var f = _u(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const _ in n) {
    let v = n[_];
    if (u && _ === "value" && v == null) {
      e.value = e.__value = "", l[_] = v;
      continue;
    }
    if (_ === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, g, v, r, t == null ? void 0 : t[jr], n[jr]), l[_] = v, l[jr] = n[jr];
      continue;
    }
    var p = l[_];
    if (v !== p) {
      l[_] = v;
      var x = _[0] + _[1];
      if (x !== "$$") {
        if (x === "on") {
          const b = {}, N = "$$" + _;
          let $ = _.slice(2);
          var C = Qf($);
          if (jf($) && ($ = $.slice(0, -7), b.capture = !0), !C && p) {
            if (v != null) continue;
            e.removeEventListener($, l[N], b), l[N] = null;
          }
          if (v != null)
            if (C)
              e[`__${$}`] = v, Ai([$]);
            else {
              let T = function(O) {
                l[_].call(this, O);
              };
              l[N] = gu($, e, T, b);
            }
          else C && (e[`__${$}`] = void 0);
        } else if (_ === "style" && v != null)
          e.style.cssText = v + "";
        else if (_ === "autofocus")
          s1(
            /** @type {HTMLElement} */
            e,
            !!v
          );
        else if (!i && (_ === "__value" || _ === "value" && v != null))
          e.value = e.__value = v;
        else if (_ === "selected" && u)
          w1(
            /** @type {HTMLOptionElement} */
            e,
            v
          );
        else {
          var E = _;
          o || (E = t1(E));
          var m = E === "defaultValue" || E === "defaultChecked";
          if (v == null && !i && !m)
            if (d[_] = null, E === "value" || E === "checked") {
              let b = (
                /** @type {HTMLInputElement} */
                e
              );
              const N = t === void 0;
              if (E === "value") {
                let $ = b.defaultValue;
                b.removeAttribute(E), b.defaultValue = $, b.value = b.__value = N ? $ : null;
              } else {
                let $ = b.defaultChecked;
                b.removeAttribute(E), b.defaultChecked = $, b.checked = N ? $ : !1;
              }
            } else
              e.removeAttribute(_);
          else m || f.includes(E) && (i || typeof v != "string") ? e[E] = v : typeof v != "function" && ce(e, E, v);
        }
        _ === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return a && Lt(!0), l;
}
var za = /* @__PURE__ */ new Map();
function _u(e) {
  var t = za.get(e.nodeName);
  if (t) return t;
  za.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Zl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ws(r);
  }
  return t;
}
function st(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var Yn, Pr, bo, ki, xu;
const Ei = class Ei {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    nr(this, ki);
    /** */
    nr(this, Yn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    nr(this, Pr);
    /** @type {ResizeObserverOptions} */
    nr(this, bo);
    Gr(this, bo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = it(this, Yn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), it(this, Yn).set(t, r), Na(this, ki, xu).call(this).observe(t, it(this, bo)), () => {
      var o = it(this, Yn).get(t);
      o.delete(n), o.size === 0 && (it(this, Yn).delete(t), it(this, Pr).unobserve(t));
    };
  }
};
Yn = new WeakMap(), Pr = new WeakMap(), bo = new WeakMap(), ki = new WeakSet(), xu = function() {
  return it(this, Pr) ?? Gr(this, Pr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Ei.entries.set(n.target, n);
        for (var r of it(this, Yn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
yt(Ei, "entries", /* @__PURE__ */ new WeakMap());
let ws = Ei;
var _1 = /* @__PURE__ */ new ws({
  box: "border-box"
});
function Ra(e, t, n) {
  var r = _1.observe(e, () => n(e[t]));
  Ot(() => (mn(() => n(e[t])), r));
}
function Ba(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function An(e = {}, t, n, r) {
  return Ot(() => {
    var o, i;
    return Wr(() => {
      o = i, i = [], mn(() => {
        e !== n(...i) && (t(e, ...i), o && Ba(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ko(() => {
        i && Ba(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function es(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function He(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => j(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ne(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => h(s);
  }
  n.b.length && Wf(() => {
    Ya(t, r), ao(n.b);
  }), Nr(() => {
    const o = mn(() => n.m.map(_f));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Nr(() => {
    Ya(t, r), ao(n.a);
  });
}
function Ya(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
  t();
}
function De(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = Co(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function Yt(e) {
  Ze === null && Hi(), Br && Ze.l !== null ? b1(Ze).m.push(e) : Nr(() => {
    const t = mn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Qs(e) {
  Ze === null && Hi(), Yt(() => () => mn(e));
}
function x1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Oi() {
  const e = Ze;
  return e === null && Hi(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = Co(o) ? o.slice() : [o], a = x1(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of s)
        l.call(e.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function b1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ea(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), dt;
  const r = mn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const yr = [];
function Wt(e, t) {
  return {
    subscribe: we(e, t).subscribe
  };
}
function we(e, t = dt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (Fs(e, a) && (e = a, n)) {
      const l = !yr.length;
      for (const u of r)
        u[1](), yr.push(u, e);
      if (l) {
        for (let u = 0; u < yr.length; u += 2)
          yr[u][0](yr[u + 1]);
        yr.length = 0;
      }
    }
  }
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = dt) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || dt), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Fn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Wt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = dt;
    const d = () => {
      if (c)
        return;
      f();
      const p = t(r ? u[0] : u, s, a);
      i ? s(p) : f = typeof p == "function" ? p : dt;
    }, g = o.map(
      (p, x) => ea(
        p,
        (C) => {
          u[x] = C, c &= ~(1 << x), l && d();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, d(), function() {
      ao(g), f(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return ea(e, (n) => t = n)(), t;
}
let Ro = !1, _s = Symbol();
function Q(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Eo(void 0),
    unsubscribe: dt
  });
  if (r.store !== e && !(_s in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = dt;
    else {
      var o = !0;
      r.unsubscribe = ea(e, (i) => {
        o ? r.source.v = i : U(r.source, i);
      }), o = !1;
    }
  return e && _s in n ? q(e) : h(r.source);
}
function C1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = dt), e;
}
function ai(e, t) {
  return e.set(t), t;
}
function tt() {
  const e = {};
  function t() {
    su(() => {
      for (var n in e)
        e[n].unsubscribe();
      so(e, _s, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function k1(e) {
  var t = Ro;
  try {
    return Ro = !1, [e(), Ro];
  } finally {
    Ro = t;
  }
}
const E1 = {
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
function Et(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    E1
  );
}
const $1 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return h(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = w(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Il
    )), e.special[t](n), Ha(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ha(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function nt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Tt(0) }, $1);
}
const S1 = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Ur(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Ur(o) && (o = o());
      const i = Tn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Ur(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Tn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Wn || t === Zs) return !1;
    for (let n of e.props)
      if (Ur(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Ur(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function ct(...e) {
  return new Proxy({ props: e }, S1);
}
function w(e, t, n, r) {
  var N;
  var o = (n & lf) !== 0, i = !Br || (n & uf) !== 0, s = (n & cf) !== 0, a = (n & df) !== 0, l = !1, u;
  s ? [u, l] = k1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Wn in e || Zs in e, f = s && (((N = Tn(e, t)) == null ? void 0 : N.set) ?? (c && t in e && (($) => e[t] = $))) || void 0, d = (
    /** @type {V} */
    r
  ), g = !0, p = !1, x = () => (p = !0, g && (g = !1, a ? d = mn(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  u === void 0 && r !== void 0 && (f && i && Pf(), u = x(), f && f(u));
  var C;
  if (i)
    C = () => {
      var $ = (
        /** @type {V} */
        e[t]
      );
      return $ === void 0 ? x() : (g = !0, p = !1, $);
    };
  else {
    var E = (o ? Ne : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    E.f |= hf, C = () => {
      var $ = h(E);
      return $ !== void 0 && (d = /** @type {V} */
      void 0), $ === void 0 ? d : $;
    };
  }
  if (!(n & Il))
    return C;
  if (f) {
    var m = e.$$legacy;
    return function($, T) {
      return arguments.length > 0 ? ((!i || !T || m || l) && f(T ? C() : $), $) : C();
    };
  }
  var _ = !1, v = /* @__PURE__ */ Eo(u), b = /* @__PURE__ */ Ne(() => {
    var $ = C(), T = h(v);
    return _ ? (_ = !1, T) : v.v = $;
  });
  return o || (b.equals = Ks), function($, T) {
    if (arguments.length > 0) {
      const O = T ? h(b) : i && s ? Vt($) : $;
      return b.equals(O) || (_ = !0, U(v, O), p && d !== void 0 && (d = O), mn(() => h(b))), $;
    }
    return h(b);
  };
}
function P1(e) {
  return new N1(e);
}
var $n, Ft;
class N1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    nr(this, $n);
    /** @type {Record<string, any>} */
    nr(this, Ft);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ Eo(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return h(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === Zs ? !0 : (h(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return U(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    Gr(this, Ft, (t.hydrate ? c1 : hu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), Gr(this, $n, o.$$events);
    for (const s of Object.keys(it(this, Ft)))
      s === "$set" || s === "$destroy" || s === "$on" || so(this, s, {
        get() {
          return it(this, Ft)[s];
        },
        /** @param {any} value */
        set(a) {
          it(this, Ft)[s] = a;
        },
        enumerable: !0
      });
    it(this, Ft).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, it(this, Ft).$destroy = () => {
      d1(it(this, Ft));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    it(this, Ft).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    it(this, $n)[t] = it(this, $n)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return it(this, $n)[t].push(r), () => {
      it(this, $n)[t] = it(this, $n)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    it(this, Ft).$destroy();
  }
}
$n = new WeakMap(), Ft = new WeakMap();
let bu;
typeof HTMLElement == "function" && (bu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    yt(this, "$$ctor");
    /** Slots */
    yt(this, "$$s");
    /** @type {any} The Svelte component instance */
    yt(this, "$$c");
    /** Whether or not the custom element is connected */
    yt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    yt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    yt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    yt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    yt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    yt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    yt(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (i) => {
          const s = document.createElement("slot");
          o !== "default" && (s.name = o), L(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = T1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = qo(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = P1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Ff(() => {
        Wr(() => {
          var o;
          this.$$r = !0;
          for (const i of ni(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = qo(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const i of this.$$l[o]) {
          const s = this.$$c.$on(o, i);
          this.$$l_u.set(i, s);
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
  attributeChangedCallback(t, n, r) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = qo(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return ni(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function qo(e, t, n, r) {
  var i;
  const o = (i = n[e]) == null ? void 0 : i.type;
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
function T1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ae(e, t, n, r, o, i) {
  let s = class extends bu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ni(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ni(t).forEach((a) => {
    so(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var f;
        l = qo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = Tn(u, a)) == null ? void 0 : f.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    so(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function $t(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = $t(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var M1 = { value: () => {
} };
function Li() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Go(n);
}
function Go(e) {
  this._ = e;
}
function H1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Go.prototype = Li.prototype = {
  constructor: Go,
  on: function(e, t) {
    var n = this._, r = H1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = D1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Za(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Za(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Go(e);
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
function D1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Za(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = M1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var xs = "http://www.w3.org/1999/xhtml";
const Xa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ii(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Xa.hasOwnProperty(t) ? { space: Xa[t], local: e } : e;
}
function A1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === xs && t.documentElement.namespaceURI === xs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function V1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Cu(e) {
  var t = Ii(e);
  return (t.local ? V1 : A1)(t);
}
function O1() {
}
function ta(e) {
  return e == null ? O1 : function() {
    return this.querySelector(e);
  };
}
function L1(e) {
  typeof e != "function" && (e = ta(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Bt(r, this._parents);
}
function I1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function z1() {
  return [];
}
function ku(e) {
  return e == null ? z1 : function() {
    return this.querySelectorAll(e);
  };
}
function R1(e) {
  return function() {
    return I1(e.apply(this, arguments));
  };
}
function B1(e) {
  typeof e == "function" ? e = R1(e) : e = ku(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Bt(r, o);
}
function Eu(e) {
  return function() {
    return this.matches(e);
  };
}
function $u(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Y1 = Array.prototype.find;
function Z1(e) {
  return function() {
    return Y1.call(this.children, e);
  };
}
function X1() {
  return this.firstElementChild;
}
function W1(e) {
  return this.select(e == null ? X1 : Z1(typeof e == "function" ? e : $u(e)));
}
var F1 = Array.prototype.filter;
function K1() {
  return Array.from(this.children);
}
function q1(e) {
  return function() {
    return F1.call(this.children, e);
  };
}
function G1(e) {
  return this.selectAll(e == null ? K1 : q1(typeof e == "function" ? e : $u(e)));
}
function U1(e) {
  typeof e != "function" && (e = Eu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Bt(r, this._parents);
}
function Su(e) {
  return new Array(e.length);
}
function j1() {
  return new Bt(this._enter || this._groups.map(Su), this._parents);
}
function li(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
li.prototype = {
  constructor: li,
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
function J1(e) {
  return function() {
    return e;
  };
}
function Q1(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new li(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function eg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (d[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < f; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new li(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(d[a]) === l && (o[a] = l);
}
function tg(e) {
  return e.__data__;
}
function ng(e, t) {
  if (!arguments.length) return Array.from(this, tg);
  var n = t ? eg : Q1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = J1(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, g = rg(e.call(c, c && c.__data__, u, r)), p = g.length, x = a[u] = new Array(p), C = s[u] = new Array(p), E = l[u] = new Array(d);
    n(c, f, x, C, E, g, t);
    for (var m = 0, _ = 0, v, b; m < p; ++m)
      if (v = x[m]) {
        for (m >= _ && (_ = m + 1); !(b = C[_]) && ++_ < p; ) ;
        v._next = b || null;
      }
  }
  return s = new Bt(s, r), s._enter = a, s._exit = l, s;
}
function rg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function og() {
  return new Bt(this._exit || this._groups.map(Su), this._parents);
}
function ig(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function sg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = a[l] = new Array(f), g, p = 0; p < f; ++p)
      (g = u[p] || c[p]) && (d[p] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Bt(a, this._parents);
}
function ag() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function lg(e) {
  e || (e = ug);
  function t(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Bt(o, this._parents).order();
}
function ug(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function cg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function dg() {
  return Array.from(this);
}
function fg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function gg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function hg() {
  return !this.node();
}
function vg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function pg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function mg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function yg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function wg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function _g(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function xg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function bg(e, t) {
  var n = Ii(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? mg : pg : typeof t == "function" ? n.local ? xg : _g : n.local ? wg : yg)(n, t));
}
function Pu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Cg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function kg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Eg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function $g(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Cg : typeof t == "function" ? Eg : kg)(e, t, n ?? "")) : Hr(this.node(), e);
}
function Hr(e, t) {
  return e.style.getPropertyValue(t) || Pu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Sg(e) {
  return function() {
    delete this[e];
  };
}
function Pg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Ng(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Tg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Sg : typeof t == "function" ? Ng : Pg)(e, t)) : this.node()[e];
}
function Nu(e) {
  return e.trim().split(/^|\s+/);
}
function na(e) {
  return e.classList || new Tu(e);
}
function Tu(e) {
  this._node = e, this._names = Nu(e.getAttribute("class") || "");
}
Tu.prototype = {
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
function Mu(e, t) {
  for (var n = na(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Hu(e, t) {
  for (var n = na(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Mg(e) {
  return function() {
    Mu(this, e);
  };
}
function Hg(e) {
  return function() {
    Hu(this, e);
  };
}
function Dg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Mu : Hu)(this, e);
  };
}
function Ag(e, t) {
  var n = Nu(e + "");
  if (arguments.length < 2) {
    for (var r = na(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Dg : t ? Mg : Hg)(n, t));
}
function Vg() {
  this.textContent = "";
}
function Og(e) {
  return function() {
    this.textContent = e;
  };
}
function Lg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ig(e) {
  return arguments.length ? this.each(e == null ? Vg : (typeof e == "function" ? Lg : Og)(e)) : this.node().textContent;
}
function zg() {
  this.innerHTML = "";
}
function Rg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Bg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Yg(e) {
  return arguments.length ? this.each(e == null ? zg : (typeof e == "function" ? Bg : Rg)(e)) : this.node().innerHTML;
}
function Zg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Xg() {
  return this.each(Zg);
}
function Wg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Fg() {
  return this.each(Wg);
}
function Kg(e) {
  var t = typeof e == "function" ? e : Cu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function qg() {
  return null;
}
function Gg(e, t) {
  var n = typeof e == "function" ? e : Cu(e), r = t == null ? qg : typeof t == "function" ? t : ta(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ug() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function jg() {
  return this.each(Ug);
}
function Jg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Qg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function eh(e) {
  return this.select(e ? Qg : Jg);
}
function th(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function nh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function rh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function oh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function ih(e, t, n) {
  return function() {
    var r = this.__on, o, i = nh(t);
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
function sh(e, t, n) {
  var r = rh(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (o = 0, c = a[l]; o < i; ++o)
          if ((s = r[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? ih : oh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Du(e, t, n) {
  var r = Pu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function ah(e, t) {
  return function() {
    return Du(this, e, t);
  };
}
function lh(e, t) {
  return function() {
    return Du(this, e, t.apply(this, arguments));
  };
}
function uh(e, t) {
  return this.each((typeof t == "function" ? lh : ah)(e, t));
}
function* ch() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Au = [null];
function Bt(e, t) {
  this._groups = e, this._parents = t;
}
function $o() {
  return new Bt([[document.documentElement]], Au);
}
function dh() {
  return this;
}
Bt.prototype = $o.prototype = {
  constructor: Bt,
  select: L1,
  selectAll: B1,
  selectChild: W1,
  selectChildren: G1,
  filter: U1,
  data: ng,
  enter: j1,
  exit: og,
  join: ig,
  merge: sg,
  selection: dh,
  order: ag,
  sort: lg,
  call: cg,
  nodes: dg,
  node: fg,
  size: gg,
  empty: hg,
  each: vg,
  attr: bg,
  style: $g,
  property: Tg,
  classed: Ag,
  text: Ig,
  html: Yg,
  raise: Xg,
  lower: Fg,
  append: Kg,
  insert: Gg,
  remove: jg,
  clone: eh,
  datum: th,
  on: sh,
  dispatch: uh,
  [Symbol.iterator]: ch
};
function Kt(e) {
  return typeof e == "string" ? new Bt([[document.querySelector(e)]], [document.documentElement]) : new Bt([[e]], Au);
}
function fh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function en(e, t) {
  if (e = fh(e), t === void 0 && (t = e.currentTarget), t) {
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
const gh = { passive: !1 }, fo = { capture: !0, passive: !1 };
function ts(e) {
  e.stopImmediatePropagation();
}
function xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Vu(e) {
  var t = e.document.documentElement, n = Kt(e).on("dragstart.drag", xr, fo);
  "onselectstart" in t ? n.on("selectstart.drag", xr, fo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ou(e, t) {
  var n = e.document.documentElement, r = Kt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", xr, fo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Bo = (e) => () => e;
function bs(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: u,
  dispatch: c
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
    _: { value: c }
  });
}
bs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function hh(e) {
  return !e.ctrlKey && !e.button;
}
function vh() {
  return this.parentNode;
}
function ph(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function mh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function yh() {
  var e = hh, t = vh, n = ph, r = mh, o = {}, i = Li("start", "drag", "end"), s = 0, a, l, u, c, f = 0;
  function d(v) {
    v.on("mousedown.drag", g).filter(r).on("touchstart.drag", C).on("touchmove.drag", E, gh).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(v, b) {
    if (!(c || !e.call(this, v, b))) {
      var N = _(this, t.call(this, v, b), v, b, "mouse");
      N && (Kt(v.view).on("mousemove.drag", p, fo).on("mouseup.drag", x, fo), Vu(v.view), ts(v), u = !1, a = v.clientX, l = v.clientY, N("start", v));
    }
  }
  function p(v) {
    if (xr(v), !u) {
      var b = v.clientX - a, N = v.clientY - l;
      u = b * b + N * N > f;
    }
    o.mouse("drag", v);
  }
  function x(v) {
    Kt(v.view).on("mousemove.drag mouseup.drag", null), Ou(v.view, u), xr(v), o.mouse("end", v);
  }
  function C(v, b) {
    if (e.call(this, v, b)) {
      var N = v.changedTouches, $ = t.call(this, v, b), T = N.length, O, D;
      for (O = 0; O < T; ++O)
        (D = _(this, $, v, b, N[O].identifier, N[O])) && (ts(v), D("start", v, N[O]));
    }
  }
  function E(v) {
    var b = v.changedTouches, N = b.length, $, T;
    for ($ = 0; $ < N; ++$)
      (T = o[b[$].identifier]) && (xr(v), T("drag", v, b[$]));
  }
  function m(v) {
    var b = v.changedTouches, N = b.length, $, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), $ = 0; $ < N; ++$)
      (T = o[b[$].identifier]) && (ts(v), T("end", v, b[$]));
  }
  function _(v, b, N, $, T, O) {
    var D = i.copy(), A = en(O || N, b), V, z, S;
    if ((S = n.call(v, new bs("beforestart", {
      sourceEvent: N,
      target: d,
      identifier: T,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), $)) != null)
      return V = S.x - A[0] || 0, z = S.y - A[1] || 0, function M(k, P, H) {
        var I = A, B;
        switch (k) {
          case "start":
            o[T] = M, B = s++;
            break;
          case "end":
            delete o[T], --s;
          // falls through
          case "drag":
            A = en(H || P, b), B = s;
            break;
        }
        D.call(
          k,
          v,
          new bs(k, {
            sourceEvent: P,
            subject: S,
            target: d,
            identifier: T,
            active: B,
            x: A[0] + V,
            y: A[1] + z,
            dx: A[0] - I[0],
            dy: A[1] - I[1],
            dispatch: D
          }),
          $
        );
      };
  }
  return d.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : Bo(!!v), d) : e;
  }, d.container = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : Bo(v), d) : t;
  }, d.subject = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : Bo(v), d) : n;
  }, d.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : Bo(!!v), d) : r;
  }, d.on = function() {
    var v = i.on.apply(i, arguments);
    return v === i ? d : v;
  }, d.clickDistance = function(v) {
    return arguments.length ? (f = (v = +v) * v, d) : Math.sqrt(f);
  }, d;
}
function ra(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Lu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function So() {
}
var go = 0.7, ui = 1 / go, br = "\\s*([+-]?\\d+)\\s*", ho = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", wh = /^#([0-9a-f]{3,8})$/, _h = new RegExp(`^rgb\\(${br},${br},${br}\\)$`), xh = new RegExp(`^rgb\\(${hn},${hn},${hn}\\)$`), bh = new RegExp(`^rgba\\(${br},${br},${br},${ho}\\)$`), Ch = new RegExp(`^rgba\\(${hn},${hn},${hn},${ho}\\)$`), kh = new RegExp(`^hsl\\(${ho},${hn},${hn}\\)$`), Eh = new RegExp(`^hsla\\(${ho},${hn},${hn},${ho}\\)$`), Wa = {
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
ra(So, vo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fa,
  // Deprecated! Use color.formatHex.
  formatHex: Fa,
  formatHex8: $h,
  formatHsl: Sh,
  formatRgb: Ka,
  toString: Ka
});
function Fa() {
  return this.rgb().formatHex();
}
function $h() {
  return this.rgb().formatHex8();
}
function Sh() {
  return Iu(this).formatHsl();
}
function Ka() {
  return this.rgb().formatRgb();
}
function vo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = wh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? qa(t) : n === 3 ? new Mt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = _h.exec(e)) ? new Mt(t[1], t[2], t[3], 1) : (t = xh.exec(e)) ? new Mt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = bh.exec(e)) ? Yo(t[1], t[2], t[3], t[4]) : (t = Ch.exec(e)) ? Yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = kh.exec(e)) ? ja(t[1], t[2] / 100, t[3] / 100, 1) : (t = Eh.exec(e)) ? ja(t[1], t[2] / 100, t[3] / 100, t[4]) : Wa.hasOwnProperty(e) ? qa(Wa[e]) : e === "transparent" ? new Mt(NaN, NaN, NaN, 0) : null;
}
function qa(e) {
  return new Mt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Mt(e, t, n, r);
}
function Ph(e) {
  return e instanceof So || (e = vo(e)), e ? (e = e.rgb(), new Mt(e.r, e.g, e.b, e.opacity)) : new Mt();
}
function Cs(e, t, n, r) {
  return arguments.length === 1 ? Ph(e) : new Mt(e, t, n, r ?? 1);
}
function Mt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ra(Mt, Cs, Lu(So, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new Mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? go : Math.pow(go, e), new Mt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Mt(ir(this.r), ir(this.g), ir(this.b), ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ga,
  // Deprecated! Use color.formatHex.
  formatHex: Ga,
  formatHex8: Nh,
  formatRgb: Ua,
  toString: Ua
}));
function Ga() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function Nh() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ua() {
  const e = ci(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ir(this.r)}, ${ir(this.g)}, ${ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ci(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function rr(e) {
  return e = ir(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ja(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new nn(e, t, n, r);
}
function Iu(e) {
  if (e instanceof nn) return new nn(e.h, e.s, e.l, e.opacity);
  if (e instanceof So || (e = vo(e)), !e) return new nn();
  if (e instanceof nn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new nn(s, a, l, e.opacity);
}
function Th(e, t, n, r) {
  return arguments.length === 1 ? Iu(e) : new nn(e, t, n, r ?? 1);
}
function nn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ra(nn, Th, Lu(So, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? go : Math.pow(go, e), new nn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Mt(
      ns(e >= 240 ? e - 240 : e + 120, o, r),
      ns(e, o, r),
      ns(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new nn(Ja(this.h), Zo(this.s), Zo(this.l), ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ja(this.h)}, ${Zo(this.s) * 100}%, ${Zo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ja(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Zo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ns(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const zu = (e) => () => e;
function Mh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Hh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Dh(e) {
  return (e = +e) == 1 ? Ru : function(t, n) {
    return n - t ? Hh(t, n, e) : zu(isNaN(t) ? n : t);
  };
}
function Ru(e, t) {
  var n = t - e;
  return n ? Mh(e, n) : zu(isNaN(e) ? t : e);
}
const Qa = function e(t) {
  var n = Dh(t);
  function r(o, i) {
    var s = n((o = Cs(o)).r, (i = Cs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Ru(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Bn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var ks = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rs = new RegExp(ks.source, "g");
function Ah(e) {
  return function() {
    return e;
  };
}
function Vh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Oh(e, t) {
  var n = ks.lastIndex = rs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ks.exec(e)) && (o = rs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Bn(r, o) })), n = rs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Vh(l[0].x) : Ah(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
var el = 180 / Math.PI, Es = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Bu(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * el,
    skewX: Math.atan(l) * el,
    scaleX: s,
    scaleY: a
  };
}
var Xo;
function Lh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Es : Bu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ih(e) {
  return e == null || (Xo || (Xo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xo.setAttribute("transform", e), !(e = Xo.transform.baseVal.consolidate())) ? Es : (e = e.matrix, Bu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Yu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, f, d, g, p) {
    if (u !== f || c !== d) {
      var x = g.push("translate(", null, t, null, n);
      p.push({ i: x - 4, x: Bn(u, f) }, { i: x - 2, x: Bn(c, d) });
    } else (f || d) && g.push("translate(" + f + t + d + n);
  }
  function s(u, c, f, d) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Bn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function a(u, c, f, d) {
    u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Bn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function l(u, c, f, d, g, p) {
    if (u !== f || c !== d) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      p.push({ i: x - 4, x: Bn(u, f) }, { i: x - 2, x: Bn(c, d) });
    } else (f !== 1 || d !== 1) && g.push(o(g) + "scale(" + f + "," + d + ")");
  }
  return function(u, c) {
    var f = [], d = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), s(u.rotate, c.rotate, f, d), a(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function(g) {
      for (var p = -1, x = d.length, C; ++p < x; ) f[(C = d[p]).i] = C.x(g);
      return f.join("");
    };
  };
}
var zh = Yu(Lh, "px, ", "px)", "deg)"), Rh = Yu(Ih, ", ", ")", ")"), Bh = 1e-12;
function tl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Yh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Zh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Xh = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], f = s[1], d = s[2], g = c - a, p = f - l, x = g * g + p * p, C, E;
    if (x < Bh)
      E = Math.log(d / u) / t, C = function($) {
        return [
          a + $ * g,
          l + $ * p,
          u * Math.exp(t * $ * E)
        ];
      };
    else {
      var m = Math.sqrt(x), _ = (d * d - u * u + r * x) / (2 * u * n * m), v = (d * d - u * u - r * x) / (2 * d * n * m), b = Math.log(Math.sqrt(_ * _ + 1) - _), N = Math.log(Math.sqrt(v * v + 1) - v);
      E = (N - b) / t, C = function($) {
        var T = $ * E, O = tl(b), D = u / (n * m) * (O * Zh(t * T + b) - Yh(b));
        return [
          a + D * g,
          l + D * p,
          u * O / tl(t * T + b)
        ];
      };
    }
    return C.duration = E * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Dr = 0, to = 0, Jr = 0, Zu = 1e3, di, no, fi = 0, ur = 0, zi = 0, po = typeof performance == "object" && performance.now ? performance : Date, Xu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function oa() {
  return ur || (Xu(Wh), ur = po.now() + zi);
}
function Wh() {
  ur = 0;
}
function gi() {
  this._call = this._time = this._next = null;
}
gi.prototype = Wu.prototype = {
  constructor: gi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? oa() : +n) + (t == null ? 0 : +t), !this._next && no !== this && (no ? no._next = this : di = this, no = this), this._call = e, this._time = n, $s();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $s());
  }
};
function Wu(e, t, n) {
  var r = new gi();
  return r.restart(e, t, n), r;
}
function Fh() {
  oa(), ++Dr;
  for (var e = di, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Dr;
}
function nl() {
  ur = (fi = po.now()) + zi, Dr = to = 0;
  try {
    Fh();
  } finally {
    Dr = 0, qh(), ur = 0;
  }
}
function Kh() {
  var e = po.now(), t = e - fi;
  t > Zu && (zi -= t, fi = e);
}
function qh() {
  for (var e, t = di, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : di = n);
  no = e, $s(r);
}
function $s(e) {
  if (!Dr) {
    to && (to = clearTimeout(to));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (to = setTimeout(nl, e - po.now() - zi)), Jr && (Jr = clearInterval(Jr))) : (Jr || (fi = po.now(), Jr = setInterval(Kh, Zu)), Dr = 1, Xu(nl));
  }
}
function rl(e, t, n) {
  var r = new gi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Gh = Li("start", "end", "cancel", "interrupt"), Uh = [], Fu = 0, ol = 1, Ss = 2, Uo = 3, il = 4, Ps = 5, jo = 6;
function Ri(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  jh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Gh,
    tween: Uh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Fu
  });
}
function ia(e, t) {
  var n = un(e, t);
  if (n.state > Fu) throw new Error("too late; already scheduled");
  return n;
}
function bn(e, t) {
  var n = un(e, t);
  if (n.state > Uo) throw new Error("too late; already running");
  return n;
}
function un(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function jh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Wu(i, 0, n.time);
  function i(u) {
    n.state = ol, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, d, g;
    if (n.state !== ol) return l();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Uo) return rl(s);
        g.state === il ? (g.state = jo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = jo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (rl(function() {
      n.state === Uo && (n.state = il, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Ss, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ss) {
      for (n.state = Uo, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ps, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === Ps && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = jo, n.timer.stop(), delete r[t];
    for (var u in r) return;
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
      o = r.state > Ss && r.state < Ps, r.state = jo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Jh(e) {
  return this.each(function() {
    Jo(this, e);
  });
}
function Qh(e, t) {
  var n, r;
  return function() {
    var o = bn(this, e), i = o.tween;
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
function ev(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = bn(this, e), s = i.tween;
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
function tv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = un(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Qh : ev)(n, e, t));
}
function sa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = bn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return un(o, r).value[t];
  };
}
function Ku(e, t) {
  var n;
  return (typeof t == "number" ? Bn : t instanceof vo ? Qa : (n = vo(t)) ? (t = n, Qa) : Oh)(e, t);
}
function nv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ov(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function iv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function sv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function av(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function lv(e, t) {
  var n = Ii(e), r = n === "transform" ? Rh : Ku;
  return this.attrTween(e, typeof t == "function" ? (n.local ? av : sv)(n, r, sa(this, "attr." + e, t)) : t == null ? (n.local ? rv : nv)(n) : (n.local ? iv : ov)(n, r, t));
}
function uv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function cv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function dv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && cv(e, i)), n;
  }
  return o._value = t, o;
}
function fv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && uv(e, i)), n;
  }
  return o._value = t, o;
}
function gv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ii(e);
  return this.tween(n, (r.local ? dv : fv)(r, t));
}
function hv(e, t) {
  return function() {
    ia(this, e).delay = +t.apply(this, arguments);
  };
}
function vv(e, t) {
  return t = +t, function() {
    ia(this, e).delay = t;
  };
}
function pv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? hv : vv)(t, e)) : un(this.node(), t).delay;
}
function mv(e, t) {
  return function() {
    bn(this, e).duration = +t.apply(this, arguments);
  };
}
function yv(e, t) {
  return t = +t, function() {
    bn(this, e).duration = t;
  };
}
function wv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? mv : yv)(t, e)) : un(this.node(), t).duration;
}
function _v(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    bn(this, e).ease = t;
  };
}
function xv(e) {
  var t = this._id;
  return arguments.length ? this.each(_v(t, e)) : un(this.node(), t).ease;
}
function bv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    bn(this, e).ease = n;
  };
}
function Cv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(bv(this._id, e));
}
function kv(e) {
  typeof e != "function" && (e = Eu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Vn(r, this._parents, this._name, this._id);
}
function Ev(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, f = s[a] = new Array(c), d, g = 0; g < c; ++g)
      (d = l[g] || u[g]) && (f[g] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Vn(s, this._parents, this._name, this._id);
}
function $v(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Sv(e, t, n) {
  var r, o, i = $v(t) ? ia : bn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Pv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? un(this.node(), n).on.on(e) : this.each(Sv(n, e, t));
}
function Nv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Tv() {
  return this.on("end.remove", Nv(this._id));
}
function Mv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ta(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, f, d = 0; d < l; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, Ri(u[d], t, n, d, u, un(c, n)));
  return new Vn(i, this._parents, t, n);
}
function Hv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ku(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var d = e.call(c, c.__data__, f, l), g, p = un(c, n), x = 0, C = d.length; x < C; ++x)
          (g = d[x]) && Ri(g, t, n, x, d, p);
        i.push(d), s.push(c);
      }
  return new Vn(i, s, t, n);
}
var Dv = $o.prototype.constructor;
function Av() {
  return new Dv(this._groups, this._parents);
}
function Vv(e, t) {
  var n, r, o;
  return function() {
    var i = Hr(this, e), s = (this.style.removeProperty(e), Hr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function qu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ov(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Hr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Lv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Hr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Hr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Iv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = bn(this, e), u = l.on, c = l.value[i] == null ? a || (a = qu(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function zv(e, t, n) {
  var r = (e += "") == "transform" ? zh : Ku;
  return t == null ? this.styleTween(e, Vv(e, r)).on("end.style." + e, qu(e)) : typeof t == "function" ? this.styleTween(e, Lv(e, r, sa(this, "style." + e, t))).each(Iv(this._id, e)) : this.styleTween(e, Ov(e, r, t), n).on("end.style." + e, null);
}
function Rv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Bv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Rv(e, s, n)), r;
  }
  return i._value = t, i;
}
function Yv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Bv(e, t, n ?? ""));
}
function Zv(e) {
  return function() {
    this.textContent = e;
  };
}
function Xv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Wv(e) {
  return this.tween("text", typeof e == "function" ? Xv(sa(this, "text", e)) : Zv(e == null ? "" : e + ""));
}
function Fv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Kv(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Fv(o)), t;
  }
  return r._value = e, r;
}
function qv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Kv(e));
}
function Gv() {
  for (var e = this._name, t = this._id, n = Gu(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = un(l, t);
        Ri(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Vn(r, this._parents, e, n);
}
function Uv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = bn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var jv = 0;
function Vn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Gu() {
  return ++jv;
}
var kn = $o.prototype;
Vn.prototype = {
  constructor: Vn,
  select: Mv,
  selectAll: Hv,
  selectChild: kn.selectChild,
  selectChildren: kn.selectChildren,
  filter: kv,
  merge: Ev,
  selection: Av,
  transition: Gv,
  call: kn.call,
  nodes: kn.nodes,
  node: kn.node,
  size: kn.size,
  empty: kn.empty,
  each: kn.each,
  on: Pv,
  attr: lv,
  attrTween: gv,
  style: zv,
  styleTween: Yv,
  text: Wv,
  textTween: qv,
  remove: Tv,
  tween: tv,
  delay: pv,
  duration: wv,
  ease: xv,
  easeVarying: Cv,
  end: Uv,
  [Symbol.iterator]: kn[Symbol.iterator]
};
function Jv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Qv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Jv
};
function e0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function t0(e) {
  var t, n;
  e instanceof Vn ? (t = e._id, e = e._name) : (t = Gu(), (n = Qv).time = oa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ri(l, e, t, u, s, n || e0(l, t));
  return new Vn(r, this._parents, e, t);
}
$o.prototype.interrupt = Jh;
$o.prototype.transition = t0;
const Wo = (e) => () => e;
function n0(e, {
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
function Sn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Sn.prototype = {
  constructor: Sn,
  scale: function(e) {
    return e === 1 ? this : new Sn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Sn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Bi = new Sn(1, 0, 0);
Uu.prototype = Sn.prototype;
function Uu(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Bi;
  return e.__zoom;
}
function os(e) {
  e.stopImmediatePropagation();
}
function Qr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function r0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function o0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function sl() {
  return this.__zoom || Bi;
}
function i0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function s0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function a0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function ju() {
  var e = r0, t = o0, n = a0, r = i0, o = s0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Xh, u = Li("start", "zoom", "end"), c, f, d, g = 500, p = 150, x = 0, C = 10;
  function E(S) {
    S.property("__zoom", sl).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", O).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function(S, M, k, P) {
    var H = S.selection ? S.selection() : S;
    H.property("__zoom", sl), S !== H ? b(S, M, k, P) : H.interrupt().each(function() {
      N(this, arguments).event(P).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, E.scaleBy = function(S, M, k, P) {
    E.scaleTo(S, function() {
      var H = this.__zoom.k, I = typeof M == "function" ? M.apply(this, arguments) : M;
      return H * I;
    }, k, P);
  }, E.scaleTo = function(S, M, k, P) {
    E.transform(S, function() {
      var H = t.apply(this, arguments), I = this.__zoom, B = k == null ? v(H) : typeof k == "function" ? k.apply(this, arguments) : k, W = I.invert(B), K = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(_(m(I, K), B, W), H, s);
    }, k, P);
  }, E.translateBy = function(S, M, k, P) {
    E.transform(S, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), s);
    }, null, P);
  }, E.translateTo = function(S, M, k, P, H) {
    E.transform(S, function() {
      var I = t.apply(this, arguments), B = this.__zoom, W = P == null ? v(I) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(Bi.translate(W[0], W[1]).scale(B.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), I, s);
    }, P, H);
  };
  function m(S, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === S.k ? S : new Sn(M, S.x, S.y);
  }
  function _(S, M, k) {
    var P = M[0] - k[0] * S.k, H = M[1] - k[1] * S.k;
    return P === S.x && H === S.y ? S : new Sn(S.k, P, H);
  }
  function v(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function b(S, M, k, P) {
    S.on("start.zoom", function() {
      N(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var H = this, I = arguments, B = N(H, I).event(P), W = t.apply(H, I), K = k == null ? v(W) : typeof k == "function" ? k.apply(H, I) : k, ie = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), ee = H.__zoom, F = typeof M == "function" ? M.apply(H, I) : M, ue = l(ee.invert(K).concat(ie / ee.k), F.invert(K).concat(ie / F.k));
      return function(me) {
        if (me === 1) me = F;
        else {
          var xe = ue(me), de = ie / xe[2];
          me = new Sn(de, K[0] - xe[0] * de, K[1] - xe[1] * de);
        }
        B.zoom(null, me);
      };
    });
  }
  function N(S, M, k) {
    return !k && S.__zooming || new $(S, M);
  }
  function $(S, M) {
    this.that = S, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, M), this.taps = 0;
  }
  $.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, M) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var M = Kt(this.that).datum();
      u.call(
        S,
        this.that,
        new n0(S, {
          sourceEvent: this.sourceEvent,
          target: E,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function T(S, ...M) {
    if (!e.apply(this, arguments)) return;
    var k = N(this, M).event(S), P = this.__zoom, H = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, r.apply(this, arguments)))), I = en(S);
    if (k.wheel)
      (k.mouse[0][0] !== I[0] || k.mouse[0][1] !== I[1]) && (k.mouse[1] = P.invert(k.mouse[0] = I)), clearTimeout(k.wheel);
    else {
      if (P.k === H) return;
      k.mouse = [I, P.invert(I)], Jo(this), k.start();
    }
    Qr(S), k.wheel = setTimeout(B, p), k.zoom("mouse", n(_(m(P, H), k.mouse[0], k.mouse[1]), k.extent, s));
    function B() {
      k.wheel = null, k.end();
    }
  }
  function O(S, ...M) {
    if (d || !e.apply(this, arguments)) return;
    var k = S.currentTarget, P = N(this, M, !0).event(S), H = Kt(S.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", ie, !0), I = en(S, k), B = S.clientX, W = S.clientY;
    Vu(S.view), os(S), P.mouse = [I, this.__zoom.invert(I)], Jo(this), P.start();
    function K(ee) {
      if (Qr(ee), !P.moved) {
        var F = ee.clientX - B, ue = ee.clientY - W;
        P.moved = F * F + ue * ue > x;
      }
      P.event(ee).zoom("mouse", n(_(P.that.__zoom, P.mouse[0] = en(ee, k), P.mouse[1]), P.extent, s));
    }
    function ie(ee) {
      H.on("mousemove.zoom mouseup.zoom", null), Ou(ee.view, P.moved), Qr(ee), P.event(ee).end();
    }
  }
  function D(S, ...M) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, P = en(S.changedTouches ? S.changedTouches[0] : S, this), H = k.invert(P), I = k.k * (S.shiftKey ? 0.5 : 2), B = n(_(m(k, I), P, H), t.apply(this, M), s);
      Qr(S), a > 0 ? Kt(this).transition().duration(a).call(b, B, P, S) : Kt(this).call(E.transform, B, P, S);
    }
  }
  function A(S, ...M) {
    if (e.apply(this, arguments)) {
      var k = S.touches, P = k.length, H = N(this, M, S.changedTouches.length === P).event(S), I, B, W, K;
      for (os(S), B = 0; B < P; ++B)
        W = k[B], K = en(W, this), K = [K, this.__zoom.invert(K), W.identifier], H.touch0 ? !H.touch1 && H.touch0[2] !== K[2] && (H.touch1 = K, H.taps = 0) : (H.touch0 = K, I = !0, H.taps = 1 + !!c);
      c && (c = clearTimeout(c)), I && (H.taps < 2 && (f = K[0], c = setTimeout(function() {
        c = null;
      }, g)), Jo(this), H.start());
    }
  }
  function V(S, ...M) {
    if (this.__zooming) {
      var k = N(this, M).event(S), P = S.changedTouches, H = P.length, I, B, W, K;
      for (Qr(S), I = 0; I < H; ++I)
        B = P[I], W = en(B, this), k.touch0 && k.touch0[2] === B.identifier ? k.touch0[0] = W : k.touch1 && k.touch1[2] === B.identifier && (k.touch1[0] = W);
      if (B = k.that.__zoom, k.touch1) {
        var ie = k.touch0[0], ee = k.touch0[1], F = k.touch1[0], ue = k.touch1[1], me = (me = F[0] - ie[0]) * me + (me = F[1] - ie[1]) * me, xe = (xe = ue[0] - ee[0]) * xe + (xe = ue[1] - ee[1]) * xe;
        B = m(B, Math.sqrt(me / xe)), W = [(ie[0] + F[0]) / 2, (ie[1] + F[1]) / 2], K = [(ee[0] + ue[0]) / 2, (ee[1] + ue[1]) / 2];
      } else if (k.touch0) W = k.touch0[0], K = k.touch0[1];
      else return;
      k.zoom("touch", n(_(B, W, K), k.extent, s));
    }
  }
  function z(S, ...M) {
    if (this.__zooming) {
      var k = N(this, M).event(S), P = S.changedTouches, H = P.length, I, B;
      for (os(S), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), I = 0; I < H; ++I)
        B = P[I], k.touch0 && k.touch0[2] === B.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === B.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (B = en(B, this), Math.hypot(f[0] - B[0], f[1] - B[1]) < C)) {
        var W = Kt(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : Wo(+S), E) : r;
  }, E.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : Wo(!!S), E) : e;
  }, E.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : Wo(!!S), E) : o;
  }, E.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : Wo([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), E) : t;
  }, E.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], E) : [i[0], i[1]];
  }, E.translateExtent = function(S) {
    return arguments.length ? (s[0][0] = +S[0][0], s[1][0] = +S[1][0], s[0][1] = +S[0][1], s[1][1] = +S[1][1], E) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, E.constrain = function(S) {
    return arguments.length ? (n = S, E) : n;
  }, E.duration = function(S) {
    return arguments.length ? (a = +S, E) : a;
  }, E.interpolate = function(S) {
    return arguments.length ? (l = S, E) : l;
  }, E.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? E : S;
  }, E.clickDistance = function(S) {
    return arguments.length ? (x = (S = +S) * S, E) : Math.sqrt(x);
  }, E.tapDistance = function(S) {
    return arguments.length ? (C = +S, E) : C;
  }, E;
}
const Ar = {
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
}, hi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var cr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(cr || (cr = {}));
var Kn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Kn || (Kn = {}));
var vi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(vi || (vi = {}));
const Ns = {
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
var Cr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Cr || (Cr = {}));
var mo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(mo || (mo = {}));
var Ee;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ee || (Ee = {}));
const al = {
  [Ee.Left]: Ee.Right,
  [Ee.Right]: Ee.Left,
  [Ee.Top]: Ee.Bottom,
  [Ee.Bottom]: Ee.Top
};
function l0(e, t) {
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
function ll(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function u0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const c0 = (e) => "id" in e && "source" in e && "target" in e, d0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), aa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Po = (e, t = [0, 0]) => {
  const { width: n, height: r } = Qn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, f0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : aa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? pi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Yi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Zi(n);
}, No = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = pi(r);
      n = Yi(n, o);
    }
  }), Zi(n);
}, Ju = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...To(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: f = !0, hidden: d = !1 } = u;
    if (s && !f || d)
      continue;
    const g = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, x = yo(a, Or(u)), C = (g ?? 0) * (p ?? 0), E = i && x > 0;
    (!u.internals.handleBounds || E || x >= C || u.dragging) && l.push(u);
  }
  return l;
}, Ts = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ul(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function cl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = No(e), l = ua(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function g0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Ar.error005());
    else {
      const g = a.measured.width, p = a.measured.height;
      g && p && (f = [
        [l, u],
        [l + g, u + p]
      ]);
    }
  else a && Lr(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const d = Lr(f) ? dr(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Ar.error015())), {
    position: {
      x: d.x - l + (s.measured.width ?? 0) * c[0],
      y: d.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: d
  };
}
async function Qu({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const g = i.has(d.id), p = !g && d.parentId && s.find((x) => x.id === d.parentId);
    (g || p) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), c = Ts(s, l);
  for (const d of l)
    a.has(d.id) && !c.find((p) => p.id === d.id) && c.push(d);
  if (!o)
    return {
      edges: c,
      nodes: s
    };
  const f = await o({
    nodes: s,
    edges: c
  });
  return typeof f == "boolean" ? f ? { edges: c, nodes: s } : { edges: [], nodes: [] } : f;
}
const Vr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Vr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Vr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function ec(e, t, n) {
  const { width: r, height: o } = Qn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return dr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const dl = (e, t, n) => e < t ? Vr(Math.abs(e - t), 1, t) / t : e > n ? -Vr(Math.abs(e - n), 1, t) / t : 0, tc = (e, t, n = 15, r = 40) => {
  const o = dl(e.x, r, t.width - r) * n, i = dl(e.y, r, t.height - r) * n;
  return [o, i];
}, Yi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ms = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Zi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Or = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = aa(e) ? e.internals.positionAbsolute : Po(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, pi = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = aa(e) ? e.internals.positionAbsolute : Po(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, nc = (e, t) => Zi(Yi(Ms(e), Ms(t))), yo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, fl = (e) => Pn(e.width) && Pn(e.height) && Pn(e.x) && Pn(e.y), Pn = (e) => !isNaN(e) && isFinite(e), h0 = (e, t) => {
}, la = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), To = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? la(a, s) : a;
}, rc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), ua = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Vr(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, g = n / 2 - f * u;
  return { x: d, y: g, zoom: u };
}, mi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Lr(e) {
  return e !== void 0 && e !== "parent";
}
function Qn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function oc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function v0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function is(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Mn(e), a = To({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? la(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const ca = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), p0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, m0 = ["INPUT", "SELECT", "TEXTAREA"];
function y0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : m0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const ic = (e) => "clientX" in e, Mn = (e, t) => {
  var i, s;
  const n = ic(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, gl = (e, t, n, r, o) => {
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
      ...ca(s)
    };
  });
};
function w0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, c, f];
}
function Fo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function hl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ee.Left:
      return [t - Fo(t - r, i), n];
    case Ee.Right:
      return [t + Fo(r - t, i), n];
    case Ee.Top:
      return [t, n - Fo(n - o, i)];
    case Ee.Bottom:
      return [t, n + Fo(o - n, i)];
  }
}
function sc({ sourceX: e, sourceY: t, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, curvature: s = 0.25 }) {
  const [a, l] = hl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = hl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, d, g, p] = w0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${e},${t} C${a},${l} ${u},${c} ${r},${o}`,
    f,
    d,
    g,
    p
  ];
}
function ac({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function _0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function x0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Yi(pi(e), pi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return yo(s, Zi(i)) > 0;
}
const b0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, C0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), k0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return c0(e) ? n = { ...e } : n = {
    ...e,
    id: b0(e)
  }, C0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Hs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = ac({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const vl = {
  [Ee.Left]: { x: -1, y: 0 },
  [Ee.Right]: { x: 1, y: 0 },
  [Ee.Top]: { x: 0, y: -1 },
  [Ee.Bottom]: { x: 0, y: 1 }
}, E0 = ({ source: e, sourcePosition: t = Ee.Bottom, target: n }) => t === Ee.Left || t === Ee.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, pl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function $0({ source: e, sourcePosition: t = Ee.Bottom, target: n, targetPosition: r = Ee.Top, center: o, offset: i }) {
  const s = vl[t], a = vl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = E0({
    source: l,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let g = [], p, x;
  const C = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [m, _, v, b] = ac({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * a[f] === -1) {
    p = o.x ?? m, x = o.y ?? _;
    const $ = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], T = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    s[f] === d ? g = f === "x" ? $ : T : g = f === "x" ? T : $;
  } else {
    const $ = [{ x: l.x, y: u.y }], T = [{ x: u.x, y: l.y }];
    if (f === "x" ? g = s.x === d ? T : $ : g = s.y === d ? $ : T, t === r) {
      const z = Math.abs(e[f] - n[f]);
      if (z <= i) {
        const S = Math.min(i - 1, i - z);
        s[f] === d ? C[f] = (l[f] > e[f] ? -1 : 1) * S : E[f] = (u[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const z = f === "x" ? "y" : "x", S = s[f] === a[z], M = l[z] > u[z], k = l[z] < u[z];
      (s[f] === 1 && (!S && M || S && k) || s[f] !== 1 && (!S && k || S && M)) && (g = f === "x" ? $ : T);
    }
    const O = { x: l.x + C.x, y: l.y + C.y }, D = { x: u.x + E.x, y: u.y + E.y }, A = Math.max(Math.abs(O.x - g[0].x), Math.abs(D.x - g[0].x)), V = Math.max(Math.abs(O.y - g[0].y), Math.abs(D.y - g[0].y));
    A >= V ? (p = (O.x + D.x) / 2, x = g[0].y) : (p = g[0].x, x = (O.y + D.y) / 2);
  }
  return [[
    e,
    { x: l.x + C.x, y: l.y + C.y },
    ...g,
    { x: u.x + E.x, y: u.y + E.y },
    n
  ], p, x, v, b];
}
function S0(e, t, n, r) {
  const o = Math.min(pl(e, t) / 2, pl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function yi({ sourceX: e, sourceY: t, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, f, d, g, p] = $0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((C, E, m) => {
    let _ = "";
    return m > 0 && m < c.length - 1 ? _ = S0(c[m - 1], E, c[m + 1], s) : _ = `${m === 0 ? "M" : "L"}${E.x} ${E.y}`, C += _, C;
  }, ""), f, d, g, p];
}
function ml(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function P0(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!ml(t) || !ml(n))
    return null;
  const r = t.internals.handleBounds || yl(t.handles), o = n.internals.handleBounds || yl(n.handles), i = wl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = wl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === cr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Ar.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || Ee.Bottom, l = (s == null ? void 0 : s.position) || Ee.Top, u = wo(t, i, a), c = wo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function yl(e) {
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
function wo(e, t, n = Ee.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Qn(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Ee.Top:
      return { x: o + s / 2, y: i };
    case Ee.Right:
      return { x: o + s, y: i + a / 2 };
    case Ee.Bottom:
      return { x: o + s / 2, y: i + a };
    case Ee.Left:
      return { x: o, y: i + a / 2 };
  }
}
function wl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ds(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function N0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ds(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function T0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Ee.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case Ee.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case Ee.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const da = {
  nodeOrigin: [0, 0],
  nodeExtent: hi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, M0 = {
  ...da,
  checkEquality: !0
};
function fa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function H0(e, t, n) {
  const r = fa(da, n);
  for (const o of e.values())
    if (o.parentId)
      ga(o, e, t, r);
    else {
      const i = Po(o, r.nodeOrigin), s = Lr(o.extent) ? o.extent : r.nodeExtent, a = dr(i, s, Qn(o));
      o.internals.positionAbsolute = a;
    }
}
function lc(e, t, n, r) {
  var a, l;
  const o = fa(M0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const f = Po(u, o.nodeOrigin), d = Lr(u.extent) ? u.extent : o.nodeExtent, g = dr(f, d, Qn(u));
      c = {
        ...o.defaults,
        ...u,
        measured: {
          width: (a = u.measured) == null ? void 0 : a.width,
          height: (l = u.measured) == null ? void 0 : l.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: uc(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && ga(c, t, n, r);
  }
}
function D0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ga(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = fa(da, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  D0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: f, z: d } = A0(e, l, i, s, u), { positionAbsolute: g } = e.internals, p = c !== g.x || f !== g.y;
  (p || d !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: f } : g,
      z: d
    }
  });
}
function uc(e, t) {
  return (Pn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function A0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Qn(e), l = Po(e, n), u = Lr(e.extent) ? dr(l, e.extent, a) : l;
  let c = dr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = ec(c, a, t));
  const f = uc(e, o), d = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: d > f ? d : f
  };
}
function V0(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Or(l), c = nc(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var _;
    const c = l.internals.positionAbsolute, f = Qn(l), d = l.origin ?? r, g = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, p = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, x = Math.max(f.width, Math.round(a.width)), C = Math.max(f.height, Math.round(a.height)), E = (x - f.width) * d[0], m = (C - f.height) * d[1];
    (g > 0 || p > 0 || E || m) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - g + E,
        y: l.position.y - p + m
      }
    }), (_ = n.get(u)) == null || _.forEach((v) => {
      e.some((b) => b.id === v.id) || o.push({
        id: v.id,
        type: "position",
        position: {
          x: v.position.x + g,
          y: v.position.y + p
        }
      });
    })), (f.width < a.width || f.height < a.height || g || p) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (g ? d[0] * g - E : 0),
        height: C + (p ? d[1] * p - m : 0)
      }
    });
  }), o;
}
function O0(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: c } = new window.DOMMatrixReadOnly(u.transform), f = [];
  for (const d of e.values()) {
    const g = t.get(d.id);
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
    const p = ca(d.nodeElement), x = g.measured.width !== p.width || g.measured.height !== p.height;
    if (!!(p.width && p.height && (x || !g.internals.handleBounds || d.force))) {
      const E = d.nodeElement.getBoundingClientRect(), m = Lr(g.extent) ? g.extent : i;
      let { positionAbsolute: _ } = g.internals;
      g.parentId && g.extent === "parent" ? _ = ec(_, p, t.get(g.parentId)) : m && (_ = dr(_, m, p));
      const v = {
        ...g,
        measured: p,
        internals: {
          ...g.internals,
          positionAbsolute: _,
          handleBounds: {
            source: gl("source", d.nodeElement, E, c, g.id),
            target: gl("target", d.nodeElement, E, c, g.id)
          }
        }
      };
      t.set(g.id, v), g.parentId && ga(v, t, n, { nodeOrigin: o }), a = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: p
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: Or(v, o)
      }));
    }
  }
  if (f.length > 0) {
    const d = V0(f, t, n, o);
    l.push(...d);
  }
  return { changes: l, updatedInternals: a };
}
async function L0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function _l(e, t, n, r, o, i) {
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
function cc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    _l("source", l, c, e, o, s), _l("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function I0(e, t) {
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
function dc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : dc(n, t) : !1;
}
function xl(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function z0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !dc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ss({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, a, l;
  const o = [];
  for (const [u, c] of t) {
    const f = (s = n.get(u)) == null ? void 0 : s.internals.userNode;
    f && o.push({
      ...f,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((l = t.get(e)) == null ? void 0 : l.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function R0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, f = !1, d = null, g = !1;
  function p({ noDragClassName: C, handleSelector: E, domNode: m, isSelectable: _, nodeId: v, nodeClickDistance: b = 0 }) {
    d = Kt(m);
    function N({ x: D, y: A }, V) {
      const { nodeLookup: z, nodeExtent: S, snapGrid: M, snapToGrid: k, nodeOrigin: P, onNodeDrag: H, onSelectionDrag: I, onError: B, updateNodePositions: W } = t();
      i = { x: D, y: A };
      let K = !1, ie = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && S) {
        const ee = No(a);
        ie = Ms(ee);
      }
      for (const [ee, F] of a) {
        if (!z.has(ee))
          continue;
        let ue = { x: D - F.distance.x, y: A - F.distance.y };
        k && (ue = la(ue, M));
        let me = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (a.size > 1 && S && !F.extent) {
          const { positionAbsolute: Ie } = F.internals, G = Ie.x - ie.x + S[0][0], se = Ie.x + F.measured.width - ie.x2 + S[1][0], Me = Ie.y - ie.y + S[0][1], Ve = Ie.y + F.measured.height - ie.y2 + S[1][1];
          me = [
            [G, Me],
            [se, Ve]
          ];
        }
        const { position: xe, positionAbsolute: de } = g0({
          nodeId: ee,
          nextPosition: ue,
          nodeLookup: z,
          nodeExtent: me,
          nodeOrigin: P,
          onError: B
        });
        K = K || F.position.x !== xe.x || F.position.y !== xe.y, F.position = xe, F.internals.positionAbsolute = de;
      }
      if (K && (W(a, !0), V && (r || H || !v && I))) {
        const [ee, F] = ss({
          nodeId: v,
          dragItems: a,
          nodeLookup: z
        });
        r == null || r(V, a, ee, F), H == null || H(V, ee, F), v || I == null || I(V, F);
      }
    }
    async function $() {
      if (!c)
        return;
      const { transform: D, panBy: A, autoPanSpeed: V, autoPanOnNodeDrag: z } = t();
      if (!z) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, M] = tc(u, c, V);
      (S !== 0 || M !== 0) && (i.x = (i.x ?? 0) - S / D[2], i.y = (i.y ?? 0) - M / D[2], await A({ x: S, y: M }) && N(i, null)), s = requestAnimationFrame($);
    }
    function T(D) {
      var K;
      const { nodeLookup: A, multiSelectionActive: V, nodesDraggable: z, transform: S, snapGrid: M, snapToGrid: k, selectNodesOnDrag: P, onNodeDragStart: H, onSelectionDragStart: I, unselectNodesAndEdges: B } = t();
      f = !0, (!P || !_) && !V && v && ((K = A.get(v)) != null && K.selected || B()), _ && P && v && (e == null || e(v));
      const W = is(D.sourceEvent, { transform: S, snapGrid: M, snapToGrid: k, containerBounds: c });
      if (i = W, a = z0(A, z, W, v), a.size > 0 && (n || H || !v && I)) {
        const [ie, ee] = ss({
          nodeId: v,
          dragItems: a,
          nodeLookup: A
        });
        n == null || n(D.sourceEvent, a, ie, ee), H == null || H(D.sourceEvent, ie, ee), v || I == null || I(D.sourceEvent, ee);
      }
    }
    const O = yh().clickDistance(b).on("start", (D) => {
      const { domNode: A, nodeDragThreshold: V, transform: z, snapGrid: S, snapToGrid: M } = t();
      c = (A == null ? void 0 : A.getBoundingClientRect()) || null, g = !1, V === 0 && T(D), i = is(D.sourceEvent, { transform: z, snapGrid: S, snapToGrid: M, containerBounds: c }), u = Mn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: A, transform: V, snapGrid: z, snapToGrid: S, nodeDragThreshold: M, nodeLookup: k } = t(), P = is(D.sourceEvent, { transform: V, snapGrid: z, snapToGrid: S, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      v && !k.has(v)) && (g = !0), !g) {
        if (!l && A && f && (l = !0, $()), !f) {
          const H = P.xSnapped - (i.x ?? 0), I = P.ySnapped - (i.y ?? 0);
          Math.sqrt(H * H + I * I) > M && T(D);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && a && f && (u = Mn(D.sourceEvent, c), N(P, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!f || g) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: A, updateNodePositions: V, onNodeDragStop: z, onSelectionDragStop: S } = t();
        if (V(a, !1), o || z || !v && S) {
          const [M, k] = ss({
            nodeId: v,
            dragItems: a,
            nodeLookup: A,
            dragging: !1
          });
          o == null || o(D.sourceEvent, a, M, k), z == null || z(D.sourceEvent, M, k), v || S == null || S(D.sourceEvent, k);
        }
      }
    }).filter((D) => {
      const A = D.target;
      return !D.button && (!C || !xl(A, `.${C}`, m)) && (!E || xl(A, E, m));
    });
    d.call(O);
  }
  function x() {
    d == null || d.on(".drag", null);
  }
  return {
    update: p,
    destroy: x
  };
}
function B0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    yo(o, Or(i)) > 0 && r.push(i);
  return r;
}
const Y0 = 250;
function Z0(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = B0(e, n, t + Y0);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: d, y: g } = wo(u, f, f.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(g - e.y, 2));
      p > t || (p < i ? (o = [{ ...f, x: d, y: g }], i = p) : p === i && o.push({ ...f, x: d, y: g }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return o.find((c) => c.type === u) ?? o[0];
  }
  return o[0];
}
function fc(e, t, n, r, o, i = !1) {
  var u, c, f;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], l = (n ? a == null ? void 0 : a.find((d) => d.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...wo(s, l, l.position, !0) } : l;
}
function gc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function X0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const hc = () => !0;
function W0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: f, panBy: d, cancelConnection: g, onConnectStart: p, onConnect: x, onConnectEnd: C, isValidConnection: E = hc, onReconnectEnd: m, updateConnection: _, getTransform: v, getFromHandle: b, autoPanSpeed: N }) {
  const $ = p0(e.target);
  let T = 0, O;
  const { x: D, y: A } = Mn(e), V = $ == null ? void 0 : $.elementFromPoint(D, A), z = gc(i, V), S = a == null ? void 0 : a.getBoundingClientRect();
  if (!S || !z)
    return;
  const M = fc(o, z, r, l, t);
  if (!M)
    return;
  let k = Mn(e, S), P = !1, H = null, I = !1, B = null;
  function W() {
    if (!c || !S)
      return;
    const [de, Ie] = tc(k, S, N);
    d({ x: de, y: Ie }), T = requestAnimationFrame(W);
  }
  const K = {
    ...M,
    nodeId: o,
    type: z,
    position: M.position
  }, ie = l.get(o), F = {
    inProgress: !0,
    isValid: null,
    from: wo(ie, K, Ee.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: ie,
    to: k,
    toHandle: null,
    toPosition: al[K.position],
    toNode: null
  };
  _(F);
  let ue = F;
  p == null || p(e, { nodeId: o, handleId: r, handleType: z });
  function me(de) {
    if (!b() || !K) {
      xe(de);
      return;
    }
    const Ie = v();
    k = Mn(de, S), O = Z0(To(k, Ie, !1, [1, 1]), n, l, K), P || (W(), P = !0);
    const G = vc(de, {
      handle: O,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: E,
      doc: $,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    B = G.handleDomNode, H = G.connection, I = X0(!!O, G.isValid);
    const se = {
      // from stays the same
      ...ue,
      isValid: I,
      to: O && I ? rc({ x: O.x, y: O.y }, Ie) : k,
      toHandle: G.toHandle,
      toPosition: I && G.toHandle ? G.toHandle.position : al[K.position],
      toNode: G.toHandle ? l.get(G.toHandle.nodeId) : null
    };
    I && O && ue.toHandle && se.toHandle && ue.toHandle.type === se.toHandle.type && ue.toHandle.nodeId === se.toHandle.nodeId && ue.toHandle.id === se.toHandle.id && ue.to.x === se.to.x && ue.to.y === se.to.y || (_(se), ue = se);
  }
  function xe(de) {
    (O || B) && H && I && (x == null || x(H));
    const { inProgress: Ie, ...G } = ue, se = {
      ...G,
      toPosition: ue.toHandle ? ue.toPosition : null
    };
    C == null || C(de, se), i && (m == null || m(de, se)), g(), cancelAnimationFrame(T), P = !1, I = !1, H = null, B = null, $.removeEventListener("mousemove", me), $.removeEventListener("mouseup", xe), $.removeEventListener("touchmove", me), $.removeEventListener("touchend", xe);
  }
  $.addEventListener("mousemove", me), $.addEventListener("mouseup", xe), $.addEventListener("touchmove", me), $.addEventListener("touchend", xe);
}
function vc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = hc, nodeLookup: c }) {
  const f = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y: p } = Mn(e), x = s.elementFromPoint(g, p), C = x != null && x.classList.contains(`${a}-flow__handle`) ? x : d, E = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const m = gc(void 0, C), _ = C.getAttribute("data-nodeid"), v = C.getAttribute("data-handleid"), b = C.classList.contains("connectable"), N = C.classList.contains("connectableend");
    if (!_ || !m)
      return E;
    const $ = {
      source: f ? _ : r,
      sourceHandle: f ? v : o,
      target: f ? r : _,
      targetHandle: f ? o : v
    };
    E.connection = $;
    const O = b && N && (n === cr.Strict ? f && m === "source" || !f && m === "target" : _ !== r || v !== o);
    E.isValid = O && u($), E.toHandle = fc(_, m, v, c, n, !1);
  }
  return E;
}
const F0 = {
  onPointerDown: W0,
  isValid: vc
};
function K0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Kt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: f = !0, zoomable: d = !0, inversePan: g = !1 }) {
    const p = (_) => {
      const v = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const b = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, N = v[2] * Math.pow(2, b);
      t.scaleTo(N);
    };
    let x = [0, 0];
    const C = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (x = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, E = (_) => {
      const v = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const b = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], N = [b[0] - x[0], b[1] - x[1]];
      x = b;
      const $ = r() * Math.max(v[2], Math.log(v[2])) * (g ? -1 : 1), T = {
        x: v[0] - N[0] * $,
        y: v[1] - N[1] * $
      }, O = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: v[2]
      }, O, a);
    }, m = ju().on("start", C).on("zoom", f ? E : null).on("zoom.wheel", d ? p : null);
    o.call(m, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: en
  };
}
const q0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Xi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), as = ({ x: e, y: t, zoom: n }) => Bi.translate(e, t).scale(n), wr = (e, t) => e.target.closest(`.${t}`), pc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ls = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, mc = (e) => {
  const t = e.ctrlKey && mi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function G0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (wr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const C = en(c), E = mc(c), m = f * Math.pow(2, E);
      r.scaleTo(n, m, C, c);
      return;
    }
    const d = c.deltaMode === 1 ? 20 : 1;
    let g = o === Kn.Vertical ? 0 : c.deltaX * d, p = o === Kn.Horizontal ? 0 : c.deltaY * d;
    !mi() && c.shiftKey && o !== Kn.Vertical && (g = c.deltaY * d, p = 0), r.translateBy(
      n,
      -(g / f) * i,
      -(p / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Xi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function U0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || wr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function j0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Xi(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function J0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && pc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Xi(i.transform)));
  };
}
function Q0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && pc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && q0(e.prevViewport, s.transform))) {
      const l = Xi(s.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function ep({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var p;
    const f = e || t, d = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (wr(c, `${u}-flow__node`) || wr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || wr(c, a) && c.type === "wheel" || wr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((p = c.touches) == null ? void 0 : p.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !d && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && g;
  };
}
function tp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = ju().clickDistance(!Pn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Kt(e).call(d);
  _({
    x: i.x,
    y: i.y,
    zoom: Vr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const p = g.on("wheel.zoom"), x = g.on("dblclick.zoom");
  d.wheelDelta(mc);
  function C(V, z) {
    return g ? new Promise((S) => {
      d == null || d.transform(ls(g, z == null ? void 0 : z.duration, () => S(!0)), V);
    }) : Promise.resolve(!1);
  }
  function E({ noWheelClassName: V, noPanClassName: z, onPaneContextMenu: S, userSelectionActive: M, panOnScroll: k, panOnDrag: P, panOnScrollMode: H, panOnScrollSpeed: I, preventScrolling: B, zoomOnPinch: W, zoomOnScroll: K, zoomOnDoubleClick: ie, zoomActivationKeyPressed: ee, lib: F, onTransformChange: ue }) {
    M && !c.isZoomingOrPanning && m();
    const xe = k && !ee && !M ? G0({
      zoomPanValues: c,
      noWheelClassName: V,
      d3Selection: g,
      d3Zoom: d,
      panOnScrollMode: H,
      panOnScrollSpeed: I,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : U0({
      noWheelClassName: V,
      preventScrolling: B,
      d3ZoomHandler: p
    });
    if (g.on("wheel.zoom", xe, { passive: !1 }), !M) {
      const Ie = j0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      d.on("start", Ie);
      const G = J0({
        zoomPanValues: c,
        panOnDrag: P,
        onPaneContextMenu: !!S,
        onPanZoom: s,
        onTransformChange: ue
      });
      d.on("zoom", G);
      const se = Q0({
        zoomPanValues: c,
        panOnDrag: P,
        panOnScroll: k,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      d.on("end", se);
    }
    const de = ep({
      zoomActivationKeyPressed: ee,
      panOnDrag: P,
      zoomOnScroll: K,
      panOnScroll: k,
      zoomOnDoubleClick: ie,
      zoomOnPinch: W,
      userSelectionActive: M,
      noPanClassName: z,
      noWheelClassName: V,
      lib: F
    });
    d.filter(de), ie ? g.on("dblclick.zoom", x) : g.on("dblclick.zoom", null);
  }
  function m() {
    d.on("zoom", null);
  }
  async function _(V, z, S) {
    const M = as(V), k = d == null ? void 0 : d.constrain()(M, z, S);
    return k && await C(k), new Promise((P) => P(k));
  }
  async function v(V, z) {
    const S = as(V);
    return await C(S, z), new Promise((M) => M(S));
  }
  function b(V) {
    if (g) {
      const z = as(V), S = g.property("__zoom");
      (S.k !== V.zoom || S.x !== V.x || S.y !== V.y) && (d == null || d.transform(g, z, null, { sync: !0 }));
    }
  }
  function N() {
    const V = g ? Uu(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: V.x, y: V.y, zoom: V.k };
  }
  function $(V, z) {
    return g ? new Promise((S) => {
      d == null || d.scaleTo(ls(g, z == null ? void 0 : z.duration, () => S(!0)), V);
    }) : Promise.resolve(!1);
  }
  function T(V, z) {
    return g ? new Promise((S) => {
      d == null || d.scaleBy(ls(g, z == null ? void 0 : z.duration, () => S(!0)), V);
    }) : Promise.resolve(!1);
  }
  function O(V) {
    d == null || d.scaleExtent(V);
  }
  function D(V) {
    d == null || d.translateExtent(V);
  }
  function A(V) {
    const z = !Pn(V) || V < 0 ? 0 : V;
    d == null || d.clickDistance(z);
  }
  return {
    update: E,
    destroy: m,
    setViewport: v,
    setViewportConstrained: _,
    getViewport: N,
    scaleTo: $,
    scaleBy: T,
    setScaleExtent: O,
    setTranslateExtent: D,
    syncViewport: b,
    setClickDistance: A
  };
}
var bl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(bl || (bl = {}));
var np = /* @__PURE__ */ re('<div role="button" tabindex="-1"><!></div>');
function jn(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(ie, "$connectable", n), i = () => Q(xe, "$connectionRadius", n), s = () => Q(ue, "$domNode", n), a = () => Q(me, "$nodeLookup", n), l = () => Q(F, "$connectionMode", n), u = () => Q(G, "$lib", n), c = () => Q(We, "$autoPanOnConnect", n), f = () => Q(Le, "$flowId", n), d = () => Q(Ie, "$isValidConnectionStore", n), g = () => Q(Me, "$onedgecreate", n), p = () => Q(oe, "$onConnectAction", n), x = () => Q(ve, "$onConnectStartAction", n), C = () => Q(_e, "$onConnectEndAction", n), E = () => Q(de, "$viewport", n), m = () => Q(ut, "$connection", n), _ = () => Q(Oe, "$edges", n), v = () => Q(Qe, "$connectionLookup", n), b = ne(), N = ne(), $ = ne(), T = ne(), O = ne(), D = ne(), A = ne(), V = ne();
  let z = w(t, "id", 12, void 0), S = w(t, "type", 12, "source"), M = w(t, "position", 28, () => Ee.Top), k = w(t, "style", 12, void 0), P = w(t, "isValidConnection", 12, void 0), H = w(t, "onconnect", 12, void 0), I = w(t, "ondisconnect", 12, void 0), B = w(t, "isConnectable", 12, void 0), W = w(t, "class", 12, void 0);
  const K = ar("svelteflow__node_id"), ie = ar("svelteflow__node_connectable"), ee = qe(), {
    connectionMode: F,
    domNode: ue,
    nodeLookup: me,
    connectionRadius: xe,
    viewport: de,
    isValidConnection: Ie,
    lib: G,
    addEdge: se,
    onedgecreate: Me,
    panBy: Ve,
    cancelConnection: Xe,
    updateConnection: te,
    autoPanOnConnect: We,
    edges: Oe,
    connectionLookup: Qe,
    onconnect: oe,
    onconnectstart: ve,
    onconnectend: _e,
    flowId: Le,
    connection: ut
  } = ee;
  function lt(Pe) {
    const rt = ic(Pe);
    (rt && Pe.button === 0 || !rt) && F0.onPointerDown(Pe, {
      handleId: h($),
      nodeId: K,
      isTarget: h(b),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: f(),
      isValidConnection: P() ?? d(),
      updateConnection: te,
      cancelConnection: Xe,
      panBy: Ve,
      onConnect: (ye) => {
        var at;
        const ot = g() ? g()(ye) : ye;
        ot && (se(ot), (at = p()) == null || at(ye));
      },
      onConnectStart: (ye, ot) => {
        var at;
        (at = x()) == null || at(ye, {
          nodeId: ot.nodeId,
          handleId: ot.handleId,
          handleType: ot.handleType
        });
      },
      onConnectEnd: (ye, ot) => {
        var at;
        (at = C()) == null || at(ye, ot);
      },
      getTransform: () => [
        E().x,
        E().y,
        E().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let J = ne(null), ze = ne();
  fe(() => j(S()), () => {
    U(b, S() === "target");
  }), fe(
    () => (j(B()), o()),
    () => {
      U(N, B() !== void 0 ? B() : o());
    }
  ), fe(() => j(z()), () => {
    U($, z() || null);
  }), fe(
    () => (j(H()), j(I()), _(), v(), j(S()), j(z())),
    () => {
      (H() || I()) && (_(), U(ze, v().get(`${K}-${S()}${z() ? `-${z()}` : ""}`)));
    }
  ), fe(
    () => (h(J), h(ze), j(I()), j(H())),
    () => {
      if (h(J) && !l0(h(ze), h(J))) {
        const Pe = h(ze) ?? /* @__PURE__ */ new Map();
        ll(h(J), Pe, I()), ll(Pe, h(J), H());
      }
      U(J, h(ze) ?? /* @__PURE__ */ new Map());
    }
  ), fe(() => m(), () => {
    U(T, !!m().fromHandle);
  }), fe(
    () => (m(), j(S()), h($)),
    () => {
      var Pe, rt, ye;
      U(O, ((Pe = m().fromHandle) == null ? void 0 : Pe.nodeId) === K && ((rt = m().fromHandle) == null ? void 0 : rt.type) === S() && ((ye = m().fromHandle) == null ? void 0 : ye.id) === h($));
    }
  ), fe(
    () => (m(), j(S()), h($)),
    () => {
      var Pe, rt, ye;
      U(D, ((Pe = m().toHandle) == null ? void 0 : Pe.nodeId) === K && ((rt = m().toHandle) == null ? void 0 : rt.type) === S() && ((ye = m().toHandle) == null ? void 0 : ye.id) === h($));
    }
  ), fe(
    () => (l(), m(), j(S()), h($)),
    () => {
      var Pe, rt, ye;
      U(A, l() === cr.Strict ? ((Pe = m().fromHandle) == null ? void 0 : Pe.type) !== S() : K !== ((rt = m().fromHandle) == null ? void 0 : rt.nodeId) || h($) !== ((ye = m().fromHandle) == null ? void 0 : ye.id));
    }
  ), fe(() => (h(D), m()), () => {
    U(V, h(D) && m().isValid);
  }), gt(), He();
  var le = np();
  ce(le, "data-nodeid", K);
  let cn;
  var jt = X(le);
  vt(jt, t, "default", {}), Z(le), $e(
    (Pe) => {
      ce(le, "data-handleid", h($)), ce(le, "data-handlepos", M()), ce(le, "data-id", `${f() ?? ""}-${K ?? ""}-${z() || ""}-${S() ?? ""}`), cn = Ct(le, 1, xn(Pe), null, cn, {
        valid: h(V),
        connectingto: h(D),
        connectingfrom: h(O),
        source: !h(b),
        target: h(b),
        connectablestart: h(N),
        connectableend: h(N),
        connectable: h(N),
        connectionindicator: h(N) && (!h(T) || h(A))
      }), ce(le, "style", k());
    },
    [
      () => $t([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        W()
      ])
    ],
    pe
  ), Ye("mousedown", le, lt), Ye("touchstart", le, lt), L(e, le);
  var dn = he({
    get id() {
      return z();
    },
    set id(Pe) {
      z(Pe), y();
    },
    get type() {
      return S();
    },
    set type(Pe) {
      S(Pe), y();
    },
    get position() {
      return M();
    },
    set position(Pe) {
      M(Pe), y();
    },
    get style() {
      return k();
    },
    set style(Pe) {
      k(Pe), y();
    },
    get isValidConnection() {
      return P();
    },
    set isValidConnection(Pe) {
      P(Pe), y();
    },
    get onconnect() {
      return H();
    },
    set onconnect(Pe) {
      H(Pe), y();
    },
    get ondisconnect() {
      return I();
    },
    set ondisconnect(Pe) {
      I(Pe), y();
    },
    get isConnectable() {
      return B();
    },
    set isConnectable(Pe) {
      B(Pe), y();
    },
    get class() {
      return W();
    },
    set class(Pe) {
      W(Pe), y();
    }
  });
  return r(), dn;
}
ae(
  jn,
  {
    id: {},
    type: {},
    position: {},
    style: {},
    isValidConnection: {},
    onconnect: {},
    ondisconnect: {},
    isConnectable: {},
    class: {}
  },
  ["default"],
  [],
  !0
);
var rp = /* @__PURE__ */ re("<!> <!>", 1);
function wi(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition", "sourcePosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  He();
  var s = rp(), a = be(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Top);
  jn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = R(a), c = R(u);
  const f = /* @__PURE__ */ pe(() => i() ?? Ee.Bottom);
  return jn(c, {
    type: "source",
    get position() {
      return h(f);
    }
  }), $e(() => {
    var d;
    return It(u, ` ${((d = r()) == null ? void 0 : d.label) ?? ""} `);
  }), L(e, s), he({
    get data() {
      return r();
    },
    set data(d) {
      r(d), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(d) {
      o(d), y();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(d) {
      i(d), y();
    }
  });
}
ae(
  wi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var op = /* @__PURE__ */ re(" <!>", 1);
function yc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "sourcePosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  He(), Te();
  var i = op(), s = be(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Bottom);
  return jn(a, {
    type: "source",
    get position() {
      return h(l);
    }
  }), $e(() => {
    var u;
    return It(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), he({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), y();
    }
  });
}
ae(yc, { data: {}, sourcePosition: {} }, [], [], !0);
var ip = /* @__PURE__ */ re(" <!>", 1);
function wc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, ["data", "targetPosition"]), ge(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  He(), Te();
  var i = ip(), s = be(i), a = R(s);
  const l = /* @__PURE__ */ pe(() => o() ?? Ee.Top);
  return jn(a, {
    type: "target",
    get position() {
      return h(l);
    }
  }), $e(() => {
    var u;
    return It(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), he({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), y();
    }
  });
}
ae(wc, { data: {}, targetPosition: {} }, [], [], !0);
function _c(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, []);
}
ae(_c, {}, [], [], !0);
function Cl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function kr(e, { target: t, domNode: n }) {
  return Cl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Cl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var sp = /* @__PURE__ */ re("<div><!></div>");
function xc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(i, "$domNode", n), { domNode: i } = qe();
  He();
  var s = sp(), a = X(s);
  vt(a, t, "default", {}), Z(s), ht(s, (l, u) => kr == null ? void 0 : kr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, s), he(), r();
}
ae(xc, {}, ["default"], [], !0);
function bc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = qe();
  return (a) => {
    const l = q(e).get(a);
    if (!l) {
      console.warn("012", Ar.error012(a));
      return;
    }
    (l.selectable || q(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var ap = /* @__PURE__ */ re('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Cc(e, t) {
  ge(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = bc(), s = ar("svelteflow__edge_id");
  return He(), xc(e, {
    children: (a, l) => {
      var u = ap(), c = X(u);
      vt(c, t, "default", {}), Z(u), $e(() => {
        ce(u, "style", "pointer-events: all;" + n()), st(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Ye("keyup", u, () => {
      }), Ye("click", u, () => {
        s && i(s);
      }), L(a, u);
    },
    $$slots: { default: !0 }
  }), he({
    get style() {
      return n();
    },
    set style(a) {
      n(a), y();
    },
    get x() {
      return r();
    },
    set x(a) {
      r(a), y();
    },
    get y() {
      return o();
    },
    set y(a) {
      o(a), y();
    }
  });
}
ae(Cc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var lp = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__edge-interaction"></path>'), up = /* @__PURE__ */ Ce('<path fill="none"></path><!><!>', 1);
function Mo(e, t) {
  ge(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), f = w(t, "interactionWidth", 12, 20), d = w(t, "class", 12, void 0), g = f() === void 0 ? 20 : f();
  He();
  var p = up(), x = be(p), C = R(x);
  {
    var E = (v) => {
      var b = lp();
      ce(b, "stroke-opacity", 0), ce(b, "stroke-width", g), $e(() => ce(b, "d", r())), L(v, b);
    };
    ke(C, (v) => {
      g && v(E);
    });
  }
  var m = R(C);
  {
    var _ = (v) => {
      Cc(v, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (b, N) => {
          Te();
          var $ = Be();
          $e(() => It($, o())), L(b, $);
        },
        $$slots: { default: !0 }
      });
    };
    ke(m, (v) => {
      o() && v(_);
    });
  }
  return $e(
    (v) => {
      ce(x, "id", n()), ce(x, "d", r()), Ct(x, 0, xn(v)), ce(x, "marker-start", l()), ce(x, "marker-end", u()), ce(x, "style", c());
    },
    [
      () => $t(["svelte-flow__edge-path", d()])
    ],
    pe
  ), L(e, p), he({
    get id() {
      return n();
    },
    set id(v) {
      n(v), y();
    },
    get path() {
      return r();
    },
    set path(v) {
      r(v), y();
    },
    get label() {
      return o();
    },
    set label(v) {
      o(v), y();
    },
    get labelX() {
      return i();
    },
    set labelX(v) {
      i(v), y();
    },
    get labelY() {
      return s();
    },
    set labelY(v) {
      s(v), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(v) {
      a(v), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(v) {
      l(v), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(v) {
      u(v), y();
    },
    get style() {
      return c();
    },
    set style(v) {
      c(v), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(v) {
      f(v), y();
    },
    get class() {
      return d();
    },
    set class(v) {
      d(v), y();
    }
  });
}
ae(
  Mo,
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
function _i(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), ge(t, !1);
  const r = ne(), o = ne(), i = ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), C = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return fe(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(C()), j(p()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(sc({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: C(),
        sourcePosition: p(),
        targetPosition: E()
      }));
    }
  ), gt(), He(), Mo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return l();
    }
  }), he({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(m) {
      f(m), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(m) {
      d(m), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(m) {
      g(m), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(m) {
      p(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return C();
    },
    set targetY(m) {
      C(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
ae(
  _i,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function kc(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), ge(t, !1);
  const r = ne(), o = ne(), i = ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), C = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return fe(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(C()), j(p()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(yi({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: C(),
        sourcePosition: p(),
        targetPosition: E()
      }));
    }
  ), gt(), He(), Mo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return l();
    }
  }), he({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(m) {
      f(m), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(m) {
      d(m), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(m) {
      g(m), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(m) {
      p(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return C();
    },
    set targetY(m) {
      C(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
ae(
  kc,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function Ec(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "targetX",
    "targetY"
  ]), ge(t, !1);
  const r = ne(), o = ne(), i = ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "targetX", 12), x = w(t, "targetY", 12);
  return fe(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(p()), j(x())),
    () => {
      ((C) => (U(r, C[0]), U(o, C[1]), U(i, C[2])))(Hs({
        sourceX: d(),
        sourceY: g(),
        targetX: p(),
        targetY: x()
      }));
    }
  ), gt(), He(), Mo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return l();
    }
  }), he({
    get label() {
      return s();
    },
    set label(C) {
      s(C), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), y();
    },
    get style() {
      return l();
    },
    set style(C) {
      l(C), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(C) {
      u(C), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(C) {
      c(C), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(C) {
      f(C), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(C) {
      d(C), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(C) {
      g(C), y();
    },
    get targetX() {
      return p();
    },
    set targetX(C) {
      p(C), y();
    },
    get targetY() {
      return x();
    },
    set targetY(C) {
      x(C), y();
    }
  });
}
ae(
  Ec,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function $c(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  nt(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), ge(t, !1);
  const r = ne(), o = ne(), i = ne();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), f = w(t, "interactionWidth", 12, void 0), d = w(t, "sourceX", 12), g = w(t, "sourceY", 12), p = w(t, "sourcePosition", 12), x = w(t, "targetX", 12), C = w(t, "targetY", 12), E = w(t, "targetPosition", 12);
  return fe(
    () => (h(r), h(o), h(i), j(d()), j(g()), j(x()), j(C()), j(p()), j(E())),
    () => {
      ((m) => (U(r, m[0]), U(o, m[1]), U(i, m[2])))(yi({
        sourceX: d(),
        sourceY: g(),
        targetX: x(),
        targetY: C(),
        sourcePosition: p(),
        targetPosition: E(),
        borderRadius: 0
      }));
    }
  ), gt(), He(), Mo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return l();
    }
  }), he({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(m) {
      f(m), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(m) {
      d(m), y();
    },
    get sourceY() {
      return g();
    },
    set sourceY(m) {
      g(m), y();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(m) {
      p(m), y();
    },
    get targetX() {
      return x();
    },
    set targetX(m) {
      x(m), y();
    },
    get targetY() {
      return C();
    },
    set targetY(m) {
      C(m), y();
    },
    get targetPosition() {
      return E();
    },
    set targetPosition(m) {
      E(m), y();
    }
  });
}
ae(
  $c,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function cp(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function dp(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const fp = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let s = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, gp = (e, t, n, r = [0, 0], o = hi) => {
  const { subscribe: i, set: s, update: a } = we([]);
  let l = e, u = {}, c = !0;
  const f = (x) => (lc(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, s(l), l), d = (x) => f(x(l)), g = (x) => {
    u = x;
  }, p = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return f(l), {
    subscribe: i,
    set: f,
    update: d,
    setDefaultOptions: g,
    setOptions: p
  };
}, hp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = we([]);
  let a = e, l = {};
  const u = (d) => {
    const g = l ? d.map((p) => ({ ...l, ...p })) : d;
    cc(t, n, g), a = g, i(a);
  }, c = (d) => u(d(a)), f = (d) => {
    l = d;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: f
  };
}, Sc = {
  input: yc,
  output: wc,
  default: wi,
  group: _c
}, Pc = {
  straight: Ec,
  smoothstep: kc,
  default: _i,
  step: $c
}, vp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = i ?? [0, 0], d = s ?? hi;
  lc(e, a, l, {
    nodeExtent: d,
    nodeOrigin: f,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), cc(u, c, t);
  let g = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = No(a, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    g = ua(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: gp(e, a, l, f, d),
    nodeLookup: Wt(a),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: hp(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    height: we(500),
    width: we(500),
    minZoom: we(0.5),
    maxZoom: we(2),
    nodeOrigin: we(f),
    nodeDragThreshold: we(1),
    nodeExtent: we(d),
    translateExtent: we(hi),
    autoPanOnNodeDrag: we(!0),
    autoPanOnConnect: we(!0),
    fitViewOnInit: we(!1),
    fitViewOnInitDone: we(!1),
    fitViewOptions: we(void 0),
    panZoom: we(null),
    snapGrid: we(null),
    dragging: we(!1),
    selectionRect: we(null),
    selectionKeyPressed: we(!1),
    multiselectionKeyPressed: we(!1),
    deleteKeyPressed: we(!1),
    panActivationKeyPressed: we(!1),
    zoomActivationKeyPressed: we(!1),
    selectionRectMode: we(null),
    selectionMode: we(vi.Partial),
    nodeTypes: we(Sc),
    edgeTypes: we(Pc),
    viewport: we(g),
    connectionMode: we(cr.Strict),
    domNode: we(null),
    connection: Wt(Ns),
    connectionLineType: we(Cr.Bezier),
    connectionRadius: we(20),
    isValidConnection: we(() => !0),
    nodesDraggable: we(!0),
    nodesConnectable: we(!0),
    elementsSelectable: we(!0),
    selectNodesOnDrag: we(!0),
    markers: Wt([]),
    defaultMarkerColor: we("#b1b1b7"),
    lib: Wt("svelte"),
    onlyRenderVisibleElements: we(!1),
    onerror: we(h0),
    ondelete: we(void 0),
    onedgecreate: we(void 0),
    onconnect: we(void 0),
    onconnectstart: we(void 0),
    onconnectend: we(void 0),
    onbeforedelete: we(void 0),
    nodesInitialized: we(!1),
    edgesInitialized: we(!1),
    viewportInitialized: we(!1),
    initialized: Wt(!1)
  };
};
function pp(e) {
  const t = Fn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), f = r.get(u.target);
    return c && f && x0({
      sourceNode: c,
      targetNode: f,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Fn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const f = P0({
      id: l.id,
      sourceNode: u,
      targetNode: c,
      sourceHandle: l.sourceHandle || null,
      targetHandle: l.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return f && a.push({
      ...l,
      zIndex: _0({
        selected: l.selected,
        zIndex: l.zIndex,
        sourceNode: u,
        targetNode: c,
        elevateOnSelect: !1
      }),
      ...f
    }), a;
  }, []));
}
function mp(e) {
  return Fn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? Ju(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Wi = Symbol();
function Nc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = vp({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l(k) {
    a.nodeTypes.set({
      ...Sc,
      ...k
    });
  }
  function u(k) {
    a.edgeTypes.set({
      ...Pc,
      ...k
    });
  }
  function c(k) {
    const P = q(a.edges);
    a.edges.set(k0(k, P));
  }
  const f = (k, P = !1) => {
    var I;
    const H = q(a.nodeLookup);
    for (const [B, W] of k) {
      const K = (I = H.get(B)) == null ? void 0 : I.internals.userNode;
      K && (K.position = W.position, K.dragging = P);
    }
    a.nodes.update((B) => B);
  };
  function d(k) {
    var W, K, ie;
    const P = q(a.nodeLookup), H = q(a.parentLookup), { changes: I, updatedInternals: B } = O0(k, P, q(a.parentLookup), q(a.domNode), q(a.nodeOrigin));
    if (B) {
      if (H0(P, H, { nodeOrigin: i, nodeExtent: s }), !q(a.fitViewOnInitDone) && q(a.fitViewOnInit)) {
        const ee = q(a.fitViewOptions), F = p({
          ...ee,
          nodes: ee == null ? void 0 : ee.nodes
        });
        a.fitViewOnInitDone.set(F);
      }
      for (const ee of I) {
        const F = (W = P.get(ee.id)) == null ? void 0 : W.internals.userNode;
        if (F)
          switch (ee.type) {
            case "dimensions": {
              const ue = { ...F.measured, ...ee.dimensions };
              ee.setAttributes && (F.width = ((K = ee.dimensions) == null ? void 0 : K.width) ?? F.width, F.height = ((ie = ee.dimensions) == null ? void 0 : ie.height) ?? F.height), F.measured = ue;
              break;
            }
            case "position":
              F.position = ee.position ?? F.position;
              break;
          }
      }
      a.nodes.update((ee) => ee), q(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function g(k) {
    const P = q(a.panZoom), H = q(a.domNode);
    if (!P || !H)
      return Promise.resolve(!1);
    const { width: I, height: B } = ca(H), W = ul(q(a.nodeLookup), k);
    return cl({
      nodes: W,
      width: I,
      height: B,
      minZoom: q(a.minZoom),
      maxZoom: q(a.maxZoom),
      panZoom: P
    }, k);
  }
  function p(k) {
    const P = q(a.panZoom);
    if (!P)
      return !1;
    const H = ul(q(a.nodeLookup), k);
    return cl({
      nodes: H,
      width: q(a.width),
      height: q(a.height),
      minZoom: q(a.minZoom),
      maxZoom: q(a.maxZoom),
      panZoom: P
    }, k), H.size > 0;
  }
  function x(k, P) {
    const H = q(a.panZoom);
    return H ? H.scaleBy(k, P) : Promise.resolve(!1);
  }
  function C(k) {
    return x(1.2, k);
  }
  function E(k) {
    return x(1 / 1.2, k);
  }
  function m(k) {
    const P = q(a.panZoom);
    P && (P.setScaleExtent([k, q(a.maxZoom)]), a.minZoom.set(k));
  }
  function _(k) {
    const P = q(a.panZoom);
    P && (P.setScaleExtent([q(a.minZoom), k]), a.maxZoom.set(k));
  }
  function v(k) {
    const P = q(a.panZoom);
    P && (P.setTranslateExtent(k), a.translateExtent.set(k));
  }
  function b(k) {
    let P = !1;
    return k.forEach((H) => {
      H.selected && (H.selected = !1, P = !0);
    }), P;
  }
  function N(k) {
    var P;
    (P = q(a.panZoom)) == null || P.setClickDistance(k);
  }
  function $(k) {
    b((k == null ? void 0 : k.nodes) || q(a.nodes)) && a.nodes.set(q(a.nodes)), b((k == null ? void 0 : k.edges) || q(a.edges)) && a.edges.set(q(a.edges));
  }
  a.deleteKeyPressed.subscribe(async (k) => {
    var P;
    if (k) {
      const H = q(a.nodes), I = q(a.edges), B = H.filter((ee) => ee.selected), W = I.filter((ee) => ee.selected), { nodes: K, edges: ie } = await Qu({
        nodesToRemove: B,
        edgesToRemove: W,
        nodes: H,
        edges: I,
        onBeforeDelete: q(a.onbeforedelete)
      });
      (K.length || ie.length) && (a.nodes.update((ee) => ee.filter((F) => !K.some((ue) => ue.id === F.id))), a.edges.update((ee) => ee.filter((F) => !ie.some((ue) => ue.id === F.id))), (P = q(a.ondelete)) == null || P({
        nodes: K,
        edges: ie
      }));
    }
  });
  function T(k) {
    const P = q(a.multiselectionKeyPressed);
    a.nodes.update((H) => H.map((I) => {
      const B = k.includes(I.id), W = P && I.selected || B;
      return I.selected = W, I;
    })), P || a.edges.update((H) => H.map((I) => (I.selected = !1, I)));
  }
  function O(k) {
    const P = q(a.multiselectionKeyPressed);
    a.edges.update((H) => H.map((I) => {
      const B = k.includes(I.id), W = P && I.selected || B;
      return I.selected = W, I;
    })), P || a.nodes.update((H) => H.map((I) => (I.selected = !1, I)));
  }
  function D(k) {
    var H;
    const P = (H = q(a.nodes)) == null ? void 0 : H.find((I) => I.id === k);
    if (!P) {
      console.warn("012", Ar.error012(k));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), P.selected ? P.selected && q(a.multiselectionKeyPressed) && $({ nodes: [P], edges: [] }) : T([k]);
  }
  function A(k) {
    const P = q(a.viewport);
    return L0({
      delta: k,
      panZoom: q(a.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: q(a.translateExtent),
      width: q(a.width),
      height: q(a.height)
    });
  }
  const V = we(Ns), z = (k) => {
    V.set({ ...k });
  };
  function S() {
    V.set(Ns);
  }
  function M() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), $(), S();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: pp(a),
    visibleNodes: mp(a),
    connection: Fn([V, a.viewport], ([k, P]) => k.inProgress ? {
      ...k,
      to: To(k.to, [P.x, P.y, P.zoom])
    } : { ...k }),
    markers: Fn([a.edges, a.defaultMarkerColor, a.flowId], ([k, P, H]) => N0(k, { defaultColor: P, id: H })),
    initialized: (() => {
      let k = !1;
      const P = q(a.nodes).length, H = q(a.edges).length;
      return Fn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([I, B, W]) => k || (P === 0 ? k = W : H === 0 ? k = W && I : k = W && I && B, k));
    })(),
    // actions
    syncNodeStores: (k) => cp(a.nodes, k),
    syncEdgeStores: (k) => dp(a.edges, k),
    syncViewport: (k) => fp(a.panZoom, a.viewport, k),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: f,
    updateNodeInternals: d,
    zoomIn: C,
    zoomOut: E,
    fitView: (k) => g(k),
    setMinZoom: m,
    setMaxZoom: _,
    setTranslateExtent: v,
    setPaneClickDistance: N,
    unselectNodesAndEdges: $,
    addSelectedNodes: T,
    addSelectedEdges: O,
    handleNodeSelection: D,
    panBy: A,
    updateConnection: z,
    cancelConnection: S,
    reset: M
  };
}
function qe() {
  const e = ar(Wi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function yp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Nc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Mr(Wi, {
    getStore: () => a
  }), a;
}
function us(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = tp({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: a.set
  }), f = c.getViewport();
  return s.set(f), n.set(c), c.update(t), {
    update(d) {
      c.update(d);
    }
  };
}
var wp = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const _p = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Tc(e, t) {
  ge(t, !1), je(e, _p);
  const [n, r] = tt(), o = () => Q(H, "$panActivationKeyPressed", n), i = () => Q(z, "$minZoom", n), s = () => Q(S, "$maxZoom", n), a = () => Q(I, "$zoomActivationKeyPressed", n), l = () => Q(V, "$selectionRect", n), u = () => Q(k, "$translateExtent", n), c = () => Q(P, "$lib", n), f = ne(), d = ne(), g = ne();
  let p = w(t, "initialViewport", 12, void 0), x = w(t, "onMoveStart", 12, void 0), C = w(t, "onMove", 12, void 0), E = w(t, "onMoveEnd", 12, void 0), m = w(t, "panOnScrollMode", 12), _ = w(t, "preventScrolling", 12), v = w(t, "zoomOnScroll", 12), b = w(t, "zoomOnDoubleClick", 12), N = w(t, "zoomOnPinch", 12), $ = w(t, "panOnDrag", 12), T = w(t, "panOnScroll", 12), O = w(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: A,
    selectionRect: V,
    minZoom: z,
    maxZoom: S,
    dragging: M,
    translateExtent: k,
    lib: P,
    panActivationKeyPressed: H,
    zoomActivationKeyPressed: I,
    viewportInitialized: B
  } = qe(), W = (F) => D.set({
    x: F[0],
    y: F[1],
    zoom: F[2]
  });
  Yt(() => {
    ai(B, !0);
  }), fe(() => j(p()), () => {
    U(f, p() || { x: 0, y: 0, zoom: 1 });
  }), fe(
    () => (o(), j($())),
    () => {
      U(d, o() || $());
    }
  ), fe(
    () => (o(), j(T())),
    () => {
      U(g, o() || T());
    }
  ), gt(), He();
  var K = wp(), ie = X(K);
  vt(ie, t, "default", {}), Z(K), ht(K, (F, ue) => us == null ? void 0 : us(F, ue), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: h(f),
    dragging: M,
    panZoom: A,
    onPanZoomStart: x(),
    onPanZoom: C(),
    onPanZoomEnd: E(),
    zoomOnScroll: v(),
    zoomOnDoubleClick: b(),
    zoomOnPinch: N(),
    panOnScroll: h(g),
    panOnDrag: h(d),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || Kn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: O(),
    onTransformChange: W
  })), L(e, K);
  var ee = he({
    get initialViewport() {
      return p();
    },
    set initialViewport(F) {
      p(F), y();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(F) {
      x(F), y();
    },
    get onMove() {
      return C();
    },
    set onMove(F) {
      C(F), y();
    },
    get onMoveEnd() {
      return E();
    },
    set onMoveEnd(F) {
      E(F), y();
    },
    get panOnScrollMode() {
      return m();
    },
    set panOnScrollMode(F) {
      m(F), y();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(F) {
      _(F), y();
    },
    get zoomOnScroll() {
      return v();
    },
    set zoomOnScroll(F) {
      v(F), y();
    },
    get zoomOnDoubleClick() {
      return b();
    },
    set zoomOnDoubleClick(F) {
      b(F), y();
    },
    get zoomOnPinch() {
      return N();
    },
    set zoomOnPinch(F) {
      N(F), y();
    },
    get panOnDrag() {
      return $();
    },
    set panOnDrag(F) {
      $(F), y();
    },
    get panOnScroll() {
      return T();
    },
    set panOnScroll(F) {
      T(F), y();
    },
    get paneClickDistance() {
      return O();
    },
    set paneClickDistance(F) {
      O(F), y();
    }
  });
  return r(), ee;
}
ae(
  Tc,
  {
    initialViewport: {},
    onMoveStart: {},
    onMove: {},
    onMoveEnd: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
    paneClickDistance: {}
  },
  ["default"],
  [],
  !0
);
function kl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function El(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var xp = /* @__PURE__ */ re("<div><!></div>");
const bp = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Mc(e, t) {
  ge(t, !1), je(e, bp);
  const [n, r] = tt(), o = () => Q(S, "$panActivationKeyPressed", n), i = () => Q(V, "$selectionKeyPressed", n), s = () => Q(D, "$selectionRect", n), a = () => Q(O, "$elementsSelectable", n), l = () => Q(A, "$selectionRectMode", n), u = () => Q(N, "$edges", n), c = () => Q(b, "$nodeLookup", n), f = () => Q($, "$viewport", n), d = () => Q(z, "$selectionMode", n), g = () => Q(T, "$dragging", n), p = ne(), x = ne(), C = ne();
  let E = w(t, "panOnDrag", 12, void 0), m = w(t, "selectionOnDrag", 12, void 0);
  const _ = Oi(), {
    nodes: v,
    nodeLookup: b,
    edges: N,
    viewport: $,
    dragging: T,
    elementsSelectable: O,
    selectionRect: D,
    selectionRectMode: A,
    selectionKeyPressed: V,
    selectionMode: z,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: M
  } = qe();
  let k = ne(), P = null, H = [], I = !1;
  function B(G) {
    if (I) {
      I = !1;
      return;
    }
    _("paneclick", { event: G }), M(), A.set(null);
  }
  function W(G) {
    var Ve, Xe;
    if (P = h(k).getBoundingClientRect(), !O || !h(x) || G.button !== 0 || G.target !== h(k) || !P)
      return;
    (Xe = (Ve = G.target) == null ? void 0 : Ve.setPointerCapture) == null || Xe.call(Ve, G.pointerId);
    const { x: se, y: Me } = Mn(G, P);
    M(), D.set({
      width: 0,
      height: 0,
      startX: se,
      startY: Me,
      x: se,
      y: Me
    });
  }
  function K(G) {
    if (!h(x) || !P || !s())
      return;
    I = !0;
    const se = Mn(G, P), Me = s().startX ?? 0, Ve = s().startY ?? 0, Xe = {
      ...s(),
      x: se.x < Me ? se.x : Me,
      y: se.y < Ve ? se.y : Ve,
      width: Math.abs(se.x - Me),
      height: Math.abs(se.y - Ve)
    }, te = H.map((oe) => oe.id), We = Ts(H, u()).map((oe) => oe.id);
    H = Ju(
      c(),
      Xe,
      [
        f().x,
        f().y,
        f().zoom
      ],
      d() === vi.Partial,
      !0
    );
    const Oe = Ts(H, u()).map((oe) => oe.id), Qe = H.map((oe) => oe.id);
    (te.length !== Qe.length || Qe.some((oe) => !te.includes(oe))) && v.update((oe) => oe.map(El(Qe))), (We.length !== Oe.length || Oe.some((oe) => !We.includes(oe))) && N.update((oe) => oe.map(El(Oe))), A.set("user"), D.set(Xe);
  }
  function ie(G) {
    var se, Me;
    G.button === 0 && ((Me = (se = G.target) == null ? void 0 : se.releasePointerCapture) == null || Me.call(se, G.pointerId), !h(x) && l() === "user" && G.target === h(k) && (B == null || B(G)), D.set(null), H.length > 0 && ai(A, "nodes"), i() && (I = !1));
  }
  const ee = (G) => {
    var se;
    if (Array.isArray(h(p)) && ((se = h(p)) != null && se.includes(2))) {
      G.preventDefault();
      return;
    }
    _("panecontextmenu", { event: G });
  };
  fe(
    () => (o(), j(E())),
    () => {
      U(p, o() || E());
    }
  ), fe(
    () => (i(), s(), j(m()), h(p)),
    () => {
      U(x, i() || s() || m() && h(p) !== !0);
    }
  ), fe(
    () => (a(), h(x), l()),
    () => {
      U(C, a() && (h(x) || l() === "user"));
    }
  ), gt(), He();
  var F = xp(), ue = /* @__PURE__ */ Ne(() => h(C) ? void 0 : kl(B, h(k))), me = /* @__PURE__ */ Ne(() => kl(ee, h(k)));
  let xe;
  var de = X(F);
  vt(de, t, "default", {}), Z(F), An(F, (G) => U(k, G), () => h(k)), $e(
    (G) => xe = Ct(F, 1, "svelte-flow__pane svelte-1esy7hx", null, xe, {
      draggable: G,
      dragging: g(),
      selection: h(x)
    }),
    [
      () => E() === !0 || Array.isArray(E()) && E().includes(0)
    ],
    pe
  ), Ye("click", F, function(...G) {
    var se;
    (se = h(ue)) == null || se.apply(this, G);
  }), Ye("pointerdown", F, function(...G) {
    var se;
    (se = h(C) ? W : void 0) == null || se.apply(this, G);
  }), Ye("pointermove", F, function(...G) {
    var se;
    (se = h(C) ? K : void 0) == null || se.apply(this, G);
  }), Ye("pointerup", F, function(...G) {
    var se;
    (se = h(C) ? ie : void 0) == null || se.apply(this, G);
  }), Ye("contextmenu", F, function(...G) {
    var se;
    (se = h(me)) == null || se.apply(this, G);
  }), L(e, F);
  var Ie = he({
    get panOnDrag() {
      return E();
    },
    set panOnDrag(G) {
      E(G), y();
    },
    get selectionOnDrag() {
      return m();
    },
    set selectionOnDrag(G) {
      m(G), y();
    }
  });
  return r(), Ie;
}
ae(Mc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Cp = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const kp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Hc(e, t) {
  ge(t, !1), je(e, kp);
  const [n, r] = tt(), o = () => Q(i, "$viewport", n), { viewport: i } = qe();
  He();
  var s = Cp(), a = X(s);
  vt(a, t, "default", {}), Z(s), $e(() => ce(s, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, s), he(), r();
}
ae(Hc, {}, ["default"], [], !0);
function Er(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = R0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = q(n.snapGrid), c = q(n.viewport);
      return {
        nodes: q(n.nodes),
        nodeLookup: q(n.nodeLookup),
        edges: q(n.edges),
        nodeExtent: q(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: q(n.nodeOrigin),
        multiSelectionActive: q(n.multiselectionKeyPressed),
        domNode: q(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: q(n.autoPanOnNodeDrag),
        nodesDraggable: q(n.nodesDraggable),
        selectNodesOnDrag: q(n.selectNodesOnDrag),
        nodeDragThreshold: q(n.nodeDragThreshold),
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        panBy: n.panBy
      };
    }
  });
  function l(u, c) {
    if (c.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: u,
      noDragClassName: c.noDragClass,
      handleSelector: c.handleSelector,
      nodeId: c.nodeId,
      isSelectable: c.isSelectable,
      nodeClickDistance: c.nodeClickDistance
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
function Ep({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const s = e ?? n, a = t ?? r;
    return {
      width: s ? `width:${s}px;` : "",
      height: a ? `height:${a}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var $p = /* @__PURE__ */ re("<div><!></div>");
function Dc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(me, "$nodeTypes", n), i = () => Q(se, "$elementsSelectable", n), s = () => Q(Me, "$nodesDraggable", n), a = () => Q(We, "$connectableStore", n), l = ne(void 0, !0), u = ne(void 0, !0), c = ne(void 0, !0), f = ne(void 0, !0);
  let d = w(t, "node", 13), g = w(t, "id", 13), p = w(t, "data", 29, () => ({})), x = w(t, "selected", 13, !1), C = w(t, "draggable", 13, void 0), E = w(t, "selectable", 13, void 0), m = w(t, "connectable", 13, !0), _ = w(t, "deletable", 13, !0), v = w(t, "hidden", 13, !1), b = w(t, "dragging", 13, !1), N = w(t, "resizeObserver", 13, null), $ = w(t, "style", 13, void 0), T = w(t, "type", 13, "default"), O = w(t, "isParent", 13, !1), D = w(t, "positionX", 13), A = w(t, "positionY", 13), V = w(t, "sourcePosition", 13, void 0), z = w(t, "targetPosition", 13, void 0), S = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), k = w(t, "measuredHeight", 13, void 0), P = w(t, "initialWidth", 13, void 0), H = w(t, "initialHeight", 13, void 0), I = w(t, "width", 13, void 0), B = w(t, "height", 13, void 0), W = w(t, "dragHandle", 13, void 0), K = w(t, "initialized", 13, !1), ie = w(t, "parentId", 13, void 0), ee = w(t, "nodeClickDistance", 13, void 0), F = w(t, "class", 13, "");
  const ue = qe(), {
    nodeTypes: me,
    nodeDragThreshold: xe,
    selectNodesOnDrag: de,
    handleNodeSelection: Ie,
    updateNodeInternals: G,
    elementsSelectable: se,
    nodesDraggable: Me
  } = ue;
  let Ve = ne(void 0, !0), Xe = ne(null, !0);
  const te = Oi(), We = we(m());
  let Oe = ne(void 0, !0), Qe = ne(void 0, !0), oe = ne(void 0, !0);
  Mr("svelteflow__node_id", g()), Mr("svelteflow__node_connectable", We), Qs(() => {
    var J;
    h(Xe) && ((J = N()) == null || J.unobserve(h(Xe)));
  });
  function ve(J) {
    E() && (!q(de) || !C() || q(xe) > 0) && Ie(g()), te("nodeclick", { node: d().internals.userNode, event: J });
  }
  fe(() => j(T()), () => {
    U(l, T() || "default");
  }), fe(() => (o(), h(l)), () => {
    U(u, !!o()[h(l)]);
  }), fe(
    () => (o(), h(l), wi),
    () => {
      U(c, o()[h(l)] || wi);
    }
  ), fe(
    () => (h(u), j(T())),
    () => {
      h(u) || console.warn("003", Ar.error003(T()));
    }
  ), fe(
    () => (j(I()), j(B()), j(P()), j(H()), j(M()), j(k())),
    () => {
      U(f, Ep({
        width: I(),
        height: B(),
        initialWidth: P(),
        initialHeight: H(),
        measuredWidth: M(),
        measuredHeight: k()
      }));
    }
  ), fe(() => j(m()), () => {
    We.set(!!m());
  }), fe(
    () => (h(Oe), h(l), h(Qe), j(V()), h(oe), j(z()), j(g()), h(Ve)),
    () => {
      (h(Oe) && h(l) !== h(Oe) || h(Qe) && V() !== h(Qe) || h(oe) && z() !== h(oe)) && requestAnimationFrame(() => G(/* @__PURE__ */ new Map([
        [
          g(),
          {
            id: g(),
            nodeElement: h(Ve),
            force: !0
          }
        ]
      ]))), U(Oe, h(l)), U(Qe, V()), U(oe, z());
    }
  ), fe(
    () => (j(N()), h(Ve), h(Xe), j(K())),
    () => {
      N() && (h(Ve) !== h(Xe) || !K()) && (h(Xe) && N().unobserve(h(Xe)), h(Ve) && N().observe(h(Ve)), U(Xe, h(Ve)));
    }
  ), gt(), He(!0);
  var _e = et(), Le = be(_e);
  {
    var ut = (J) => {
      var ze = $p();
      let le;
      var cn = X(ze);
      const jt = /* @__PURE__ */ pe(() => x() ?? !1), dn = /* @__PURE__ */ pe(() => E() ?? i() ?? !0), Pe = /* @__PURE__ */ pe(() => _() ?? !0), rt = /* @__PURE__ */ pe(() => C() ?? s() ?? !0);
      yu(cn, () => h(c), (ye, ot) => {
        ot(ye, {
          get data() {
            return p();
          },
          get id() {
            return g();
          },
          get selected() {
            return h(jt);
          },
          get selectable() {
            return h(dn);
          },
          get deletable() {
            return h(Pe);
          },
          get sourcePosition() {
            return V();
          },
          get targetPosition() {
            return z();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return b();
          },
          get draggable() {
            return h(rt);
          },
          get dragHandle() {
            return W();
          },
          get parentId() {
            return ie();
          },
          get type() {
            return h(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return D();
          },
          get positionAbsoluteY() {
            return A();
          },
          get width() {
            return I();
          },
          get height() {
            return B();
          }
        });
      }), Z(ze), ht(ze, (ye, ot) => Er == null ? void 0 : Er(ye, ot), () => ({
        nodeId: g(),
        isSelectable: E(),
        disabled: !1,
        handleSelector: W(),
        noDragClass: "nodrag",
        nodeClickDistance: ee(),
        onNodeMouseDown: Ie,
        onDrag: (ye, ot, at, Xt) => {
          te("nodedrag", { event: ye, targetNode: at, nodes: Xt });
        },
        onDragStart: (ye, ot, at, Xt) => {
          te("nodedragstart", { event: ye, targetNode: at, nodes: Xt });
        },
        onDragStop: (ye, ot, at, Xt) => {
          te("nodedragstop", { event: ye, targetNode: at, nodes: Xt });
        },
        store: ue
      })), An(ze, (ye) => U(Ve, ye), () => h(Ve)), Ot(() => Ye("click", ze, ve)), Ot(() => Ye("mouseenter", ze, (ye) => te("nodemouseenter", { node: d(), event: ye }))), Ot(() => Ye("mouseleave", ze, (ye) => te("nodemouseleave", { node: d(), event: ye }))), Ot(() => Ye("mousemove", ze, (ye) => te("nodemousemove", { node: d(), event: ye }))), Ot(() => Ye("contextmenu", ze, (ye) => te("nodecontextmenu", { node: d(), event: ye }))), $e(
        (ye) => {
          ce(ze, "data-id", g()), le = Ct(ze, 1, xn(ye), null, le, {
            dragging: b(),
            selected: x(),
            draggable: C(),
            connectable: m(),
            selectable: E(),
            nopan: C(),
            parent: O()
          }), ce(ze, "style", `${$() ?? ""};${h(f).width ?? ""}${h(f).height ?? ""}`), st(ze, "z-index", S()), st(ze, "transform", `translate(${D() ?? ""}px, ${A() ?? ""}px)`), st(ze, "visibility", K() ? "visible" : "hidden");
        },
        [
          () => $t([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            F()
          ])
        ],
        pe
      ), L(J, ze);
    };
    ke(Le, (J) => {
      v() || J(ut);
    });
  }
  L(e, _e);
  var lt = he({
    get node() {
      return d();
    },
    set node(J) {
      d(J), y();
    },
    get id() {
      return g();
    },
    set id(J) {
      g(J), y();
    },
    get data() {
      return p();
    },
    set data(J) {
      p(J), y();
    },
    get selected() {
      return x();
    },
    set selected(J) {
      x(J), y();
    },
    get draggable() {
      return C();
    },
    set draggable(J) {
      C(J), y();
    },
    get selectable() {
      return E();
    },
    set selectable(J) {
      E(J), y();
    },
    get connectable() {
      return m();
    },
    set connectable(J) {
      m(J), y();
    },
    get deletable() {
      return _();
    },
    set deletable(J) {
      _(J), y();
    },
    get hidden() {
      return v();
    },
    set hidden(J) {
      v(J), y();
    },
    get dragging() {
      return b();
    },
    set dragging(J) {
      b(J), y();
    },
    get resizeObserver() {
      return N();
    },
    set resizeObserver(J) {
      N(J), y();
    },
    get style() {
      return $();
    },
    set style(J) {
      $(J), y();
    },
    get type() {
      return T();
    },
    set type(J) {
      T(J), y();
    },
    get isParent() {
      return O();
    },
    set isParent(J) {
      O(J), y();
    },
    get positionX() {
      return D();
    },
    set positionX(J) {
      D(J), y();
    },
    get positionY() {
      return A();
    },
    set positionY(J) {
      A(J), y();
    },
    get sourcePosition() {
      return V();
    },
    set sourcePosition(J) {
      V(J), y();
    },
    get targetPosition() {
      return z();
    },
    set targetPosition(J) {
      z(J), y();
    },
    get zIndex() {
      return S();
    },
    set zIndex(J) {
      S(J), y();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(J) {
      M(J), y();
    },
    get measuredHeight() {
      return k();
    },
    set measuredHeight(J) {
      k(J), y();
    },
    get initialWidth() {
      return P();
    },
    set initialWidth(J) {
      P(J), y();
    },
    get initialHeight() {
      return H();
    },
    set initialHeight(J) {
      H(J), y();
    },
    get width() {
      return I();
    },
    set width(J) {
      I(J), y();
    },
    get height() {
      return B();
    },
    set height(J) {
      B(J), y();
    },
    get dragHandle() {
      return W();
    },
    set dragHandle(J) {
      W(J), y();
    },
    get initialized() {
      return K();
    },
    set initialized(J) {
      K(J), y();
    },
    get parentId() {
      return ie();
    },
    set parentId(J) {
      ie(J), y();
    },
    get nodeClickDistance() {
      return ee();
    },
    set nodeClickDistance(J) {
      ee(J), y();
    },
    get class() {
      return F();
    },
    set class(J) {
      F(J), y();
    }
  });
  return r(), lt;
}
ae(
  Dc,
  {
    node: {},
    id: {},
    data: {},
    selected: {},
    draggable: {},
    selectable: {},
    connectable: {},
    deletable: {},
    hidden: {},
    dragging: {},
    resizeObserver: {},
    style: {},
    type: {},
    isParent: {},
    positionX: {},
    positionY: {},
    sourcePosition: {},
    targetPosition: {},
    zIndex: {},
    measuredWidth: {},
    measuredHeight: {},
    initialWidth: {},
    initialHeight: {},
    width: {},
    height: {},
    dragHandle: {},
    initialized: {},
    parentId: {},
    nodeClickDistance: {},
    class: {}
  },
  [],
  [],
  !0
);
var Sp = /* @__PURE__ */ re('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Pp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Ac(e, t) {
  ge(t, !1), je(e, Pp);
  const [n, r] = tt(), o = () => Q(c, "$visibleNodes", n), i = () => Q(f, "$nodesDraggable", n), s = () => Q(g, "$elementsSelectable", n), a = () => Q(d, "$nodesConnectable", n), l = () => Q(x, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: f,
    nodesConnectable: d,
    elementsSelectable: g,
    updateNodeInternals: p,
    parentLookup: x
  } = qe(), C = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const v = /* @__PURE__ */ new Map();
    _.forEach((b) => {
      const N = b.target.getAttribute("data-id");
      v.set(N, { id: N, nodeElement: b.target, force: !0 });
    }), p(v);
  });
  Qs(() => {
    C == null || C.disconnect();
  }), He();
  var E = Sp();
  Rt(E, 5, o, (_) => _.id, (_, v) => {
    const b = /* @__PURE__ */ pe(() => !!h(v).selected), N = /* @__PURE__ */ pe(() => !!h(v).hidden), $ = /* @__PURE__ */ pe(() => !!(h(v).draggable || i() && typeof h(v).draggable > "u")), T = /* @__PURE__ */ pe(() => !!(h(v).selectable || s() && typeof h(v).selectable > "u")), O = /* @__PURE__ */ pe(() => !!(h(v).connectable || a() && typeof h(v).connectable > "u")), D = /* @__PURE__ */ pe(() => h(v).deletable ?? !0), A = /* @__PURE__ */ pe(() => l().has(h(v).id)), V = /* @__PURE__ */ pe(() => h(v).type ?? "default"), z = /* @__PURE__ */ pe(() => h(v).internals.z ?? 0), S = /* @__PURE__ */ pe(() => oc(h(v)));
    Dc(_, {
      get node() {
        return h(v);
      },
      get id() {
        return h(v).id;
      },
      get data() {
        return h(v).data;
      },
      get selected() {
        return h(b);
      },
      get hidden() {
        return h(N);
      },
      get draggable() {
        return h($);
      },
      get selectable() {
        return h(T);
      },
      get connectable() {
        return h(O);
      },
      get deletable() {
        return h(D);
      },
      get positionX() {
        return h(v).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(v).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(A);
      },
      get style() {
        return h(v).style;
      },
      get class() {
        return h(v).class;
      },
      get type() {
        return h(V);
      },
      get sourcePosition() {
        return h(v).sourcePosition;
      },
      get targetPosition() {
        return h(v).targetPosition;
      },
      get dragging() {
        return h(v).dragging;
      },
      get zIndex() {
        return h(z);
      },
      get dragHandle() {
        return h(v).dragHandle;
      },
      get initialized() {
        return h(S);
      },
      get width() {
        return h(v).width;
      },
      get height() {
        return h(v).height;
      },
      get initialWidth() {
        return h(v).initialWidth;
      },
      get initialHeight() {
        return h(v).initialHeight;
      },
      get measuredWidth() {
        return h(v).measured.width;
      },
      get measuredHeight() {
        return h(v).measured.height;
      },
      get parentId() {
        return h(v).parentId;
      },
      resizeObserver: C,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(M) {
          De.call(this, t, M);
        },
        nodemouseenter(M) {
          De.call(this, t, M);
        },
        nodemousemove(M) {
          De.call(this, t, M);
        },
        nodemouseleave(M) {
          De.call(this, t, M);
        },
        nodedrag(M) {
          De.call(this, t, M);
        },
        nodedragstart(M) {
          De.call(this, t, M);
        },
        nodedragstop(M) {
          De.call(this, t, M);
        },
        nodecontextmenu(M) {
          De.call(this, t, M);
        }
      }
    });
  }), Z(E), L(e, E);
  var m = he({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(_) {
      u(_), y();
    }
  });
  return r(), m;
}
ae(Ac, { nodeClickDistance: {} }, [], [], !0);
var Np = /* @__PURE__ */ Ce('<svg><g role="img"><!></g></svg>');
function Vc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(F, "$edgeTypes", n), i = () => Q(ue, "$flowId", n), s = () => Q(me, "$elementsSelectable", n), a = () => Q(ee, "$edgeLookup", n), l = ne(void 0, !0), u = ne(void 0, !0), c = ne(void 0, !0), f = ne(void 0, !0), d = ne(void 0, !0);
  let g = w(t, "id", 13), p = w(t, "type", 13, "default"), x = w(t, "source", 13, ""), C = w(t, "target", 13, ""), E = w(t, "data", 29, () => ({})), m = w(t, "style", 13, void 0), _ = w(t, "zIndex", 13, void 0), v = w(t, "animated", 13, !1), b = w(t, "selected", 13, !1), N = w(t, "selectable", 13, void 0), $ = w(t, "deletable", 13, void 0), T = w(t, "hidden", 13, !1), O = w(t, "label", 13, void 0), D = w(t, "labelStyle", 13, void 0), A = w(t, "markerStart", 13, void 0), V = w(t, "markerEnd", 13, void 0), z = w(t, "sourceHandle", 13, void 0), S = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), k = w(t, "sourceY", 13), P = w(t, "targetX", 13), H = w(t, "targetY", 13), I = w(t, "sourcePosition", 13), B = w(t, "targetPosition", 13), W = w(t, "ariaLabel", 13, void 0), K = w(t, "interactionWidth", 13, void 0), ie = w(t, "class", 13, "");
  Mr("svelteflow__edge_id", g());
  const {
    edgeLookup: ee,
    edgeTypes: F,
    flowId: ue,
    elementsSelectable: me
  } = qe(), xe = Oi(), de = bc();
  function Ie(te) {
    const We = a().get(g());
    We && (de(g()), xe("edgeclick", { event: te, edge: We }));
  }
  function G(te, We) {
    const Oe = a().get(g());
    Oe && xe(We, { event: te, edge: Oe });
  }
  fe(() => j(p()), () => {
    U(l, p() || "default");
  }), fe(
    () => (o(), h(l), _i),
    () => {
      U(u, o()[h(l)] || _i);
    }
  ), fe(
    () => (j(A()), i()),
    () => {
      U(c, A() ? `url('#${Ds(A(), i())}')` : void 0);
    }
  ), fe(
    () => (j(V()), i()),
    () => {
      U(f, V() ? `url('#${Ds(V(), i())}')` : void 0);
    }
  ), fe(
    () => (j(N()), s()),
    () => {
      U(d, N() ?? s());
    }
  ), gt(), He(!0);
  var se = et(), Me = be(se);
  {
    var Ve = (te) => {
      var We = Np(), Oe = X(We);
      let Qe;
      var oe = X(Oe);
      const ve = /* @__PURE__ */ pe(() => $() ?? !0);
      yu(oe, () => h(u), (_e, Le) => {
        Le(_e, {
          get id() {
            return g();
          },
          get source() {
            return x();
          },
          get target() {
            return C();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return k();
          },
          get targetX() {
            return P();
          },
          get targetY() {
            return H();
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return B();
          },
          get animated() {
            return v();
          },
          get selected() {
            return b();
          },
          get label() {
            return O();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return E();
          },
          get style() {
            return m();
          },
          get interactionWidth() {
            return K();
          },
          get selectable() {
            return h(d);
          },
          get deletable() {
            return h(ve);
          },
          get type() {
            return h(l);
          },
          get sourceHandleId() {
            return z();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return h(c);
          },
          get markerEnd() {
            return h(f);
          }
        });
      }), Z(Oe), Z(We), $e(
        (_e) => {
          st(We, "z-index", _()), Qe = Ct(Oe, 0, xn(_e), null, Qe, {
            animated: v(),
            selected: b(),
            selectable: h(d)
          }), ce(Oe, "data-id", g()), ce(Oe, "aria-label", W() === null ? void 0 : W() ? W() : `Edge from ${x()} to ${C()}`);
        },
        [
          () => $t(["svelte-flow__edge", ie()])
        ],
        pe
      ), Ye("click", Oe, Ie), Ye("contextmenu", Oe, (_e) => {
        G(_e, "edgecontextmenu");
      }), Ye("mouseenter", Oe, (_e) => {
        G(_e, "edgemouseenter");
      }), Ye("mouseleave", Oe, (_e) => {
        G(_e, "edgemouseleave");
      }), L(te, We);
    };
    ke(Me, (te) => {
      T() || te(Ve);
    });
  }
  L(e, se);
  var Xe = he({
    get id() {
      return g();
    },
    set id(te) {
      g(te), y();
    },
    get type() {
      return p();
    },
    set type(te) {
      p(te), y();
    },
    get source() {
      return x();
    },
    set source(te) {
      x(te), y();
    },
    get target() {
      return C();
    },
    set target(te) {
      C(te), y();
    },
    get data() {
      return E();
    },
    set data(te) {
      E(te), y();
    },
    get style() {
      return m();
    },
    set style(te) {
      m(te), y();
    },
    get zIndex() {
      return _();
    },
    set zIndex(te) {
      _(te), y();
    },
    get animated() {
      return v();
    },
    set animated(te) {
      v(te), y();
    },
    get selected() {
      return b();
    },
    set selected(te) {
      b(te), y();
    },
    get selectable() {
      return N();
    },
    set selectable(te) {
      N(te), y();
    },
    get deletable() {
      return $();
    },
    set deletable(te) {
      $(te), y();
    },
    get hidden() {
      return T();
    },
    set hidden(te) {
      T(te), y();
    },
    get label() {
      return O();
    },
    set label(te) {
      O(te), y();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(te) {
      D(te), y();
    },
    get markerStart() {
      return A();
    },
    set markerStart(te) {
      A(te), y();
    },
    get markerEnd() {
      return V();
    },
    set markerEnd(te) {
      V(te), y();
    },
    get sourceHandle() {
      return z();
    },
    set sourceHandle(te) {
      z(te), y();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(te) {
      S(te), y();
    },
    get sourceX() {
      return M();
    },
    set sourceX(te) {
      M(te), y();
    },
    get sourceY() {
      return k();
    },
    set sourceY(te) {
      k(te), y();
    },
    get targetX() {
      return P();
    },
    set targetX(te) {
      P(te), y();
    },
    get targetY() {
      return H();
    },
    set targetY(te) {
      H(te), y();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(te) {
      I(te), y();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(te) {
      B(te), y();
    },
    get ariaLabel() {
      return W();
    },
    set ariaLabel(te) {
      W(te), y();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(te) {
      K(te), y();
    },
    get class() {
      return ie();
    },
    set class(te) {
      ie(te), y();
    }
  });
  return r(), Xe;
}
ae(
  Vc,
  {
    id: {},
    type: {},
    source: {},
    target: {},
    data: {},
    style: {},
    zIndex: {},
    animated: {},
    selected: {},
    selectable: {},
    deletable: {},
    hidden: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    sourceHandle: {},
    targetHandle: {},
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {},
    sourcePosition: {},
    targetPosition: {},
    ariaLabel: {},
    interactionWidth: {},
    class: {}
  },
  [],
  [],
  !0
);
function Oc(e, t) {
  ge(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return Yt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), He(), he({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), y();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), y();
    }
  });
}
ae(Oc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Tp = /* @__PURE__ */ Ce("<defs></defs>");
function Lc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(i, "$markers", n), { markers: i } = qe();
  He();
  var s = Tp();
  Rt(s, 5, o, (a) => a.id, (a, l) => {
    Ic(a, ct(() => h(l)));
  }), Z(s), L(e, s), he(), r();
}
ae(Lc, {}, [], [], !0);
var Mp = /* @__PURE__ */ Ce('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Hp = /* @__PURE__ */ Ce('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Dp = /* @__PURE__ */ Ce('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Ic(e, t) {
  ge(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  He();
  var c = Dp(), f = X(c);
  {
    var d = (p) => {
      var x = Mp();
      $e(() => {
        ce(x, "stroke", l()), ce(x, "stroke-width", u());
      }), L(p, x);
    }, g = (p, x) => {
      {
        var C = (E) => {
          var m = Hp();
          $e(() => {
            ce(m, "stroke", l()), ce(m, "stroke-width", u()), ce(m, "fill", l());
          }), L(E, m);
        };
        ke(
          p,
          (E) => {
            r() === mo.ArrowClosed && E(C);
          },
          x
        );
      }
    };
    ke(f, (p) => {
      r() === mo.Arrow ? p(d) : p(g, !1);
    });
  }
  return Z(c), $e(() => {
    ce(c, "id", n()), ce(c, "markerWidth", `${o()}`), ce(c, "markerHeight", `${i()}`), ce(c, "markerUnits", s()), ce(c, "orient", a());
  }), L(e, c), he({
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
    set width(p) {
      o(p), y();
    },
    get height() {
      return i();
    },
    set height(p) {
      i(p), y();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(p) {
      s(p), y();
    },
    get orient() {
      return a();
    },
    set orient(p) {
      a(p), y();
    },
    get color() {
      return l();
    },
    set color(p) {
      l(p), y();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(p) {
      u(p), y();
    }
  });
}
ae(
  Ic,
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
var Ap = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function zc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(a, "$visibleEdges", n), i = () => Q(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = qe();
  Yt(() => {
    s() && u(s());
  }), He();
  var f = Ap(), d = X(f), g = X(d);
  Lc(g, {}), Z(d);
  var p = R(d, 2);
  Rt(p, 1, o, (m) => m.id, (m, _) => {
    const v = /* @__PURE__ */ pe(() => h(_).selectable ?? i()), b = /* @__PURE__ */ pe(() => h(_).type || "default");
    Vc(m, {
      get id() {
        return h(_).id;
      },
      get source() {
        return h(_).source;
      },
      get target() {
        return h(_).target;
      },
      get data() {
        return h(_).data;
      },
      get style() {
        return h(_).style;
      },
      get animated() {
        return h(_).animated;
      },
      get selected() {
        return h(_).selected;
      },
      get selectable() {
        return h(v);
      },
      get deletable() {
        return h(_).deletable;
      },
      get hidden() {
        return h(_).hidden;
      },
      get label() {
        return h(_).label;
      },
      get labelStyle() {
        return h(_).labelStyle;
      },
      get markerStart() {
        return h(_).markerStart;
      },
      get markerEnd() {
        return h(_).markerEnd;
      },
      get sourceHandle() {
        return h(_).sourceHandle;
      },
      get targetHandle() {
        return h(_).targetHandle;
      },
      get sourceX() {
        return h(_).sourceX;
      },
      get sourceY() {
        return h(_).sourceY;
      },
      get targetX() {
        return h(_).targetX;
      },
      get targetY() {
        return h(_).targetY;
      },
      get sourcePosition() {
        return h(_).sourcePosition;
      },
      get targetPosition() {
        return h(_).targetPosition;
      },
      get ariaLabel() {
        return h(_).ariaLabel;
      },
      get interactionWidth() {
        return h(_).interactionWidth;
      },
      get class() {
        return h(_).class;
      },
      get type() {
        return h(b);
      },
      get zIndex() {
        return h(_).zIndex;
      },
      $$events: {
        edgeclick(N) {
          De.call(this, t, N);
        },
        edgecontextmenu(N) {
          De.call(this, t, N);
        },
        edgemouseenter(N) {
          De.call(this, t, N);
        },
        edgemouseleave(N) {
          De.call(this, t, N);
        }
      }
    });
  });
  var x = R(p, 2);
  {
    var C = (m) => {
      Oc(m, {
        onMount: () => {
          ai(l, !0);
        },
        onDestroy: () => {
          ai(l, !1);
        }
      });
    };
    ke(x, (m) => {
      o().length > 0 && m(C);
    });
  }
  Z(f), L(e, f);
  var E = he({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(m) {
      s(m), y();
    }
  });
  return r(), E;
}
ae(zc, { defaultEdgeOptions: {} }, [], [], !0);
var Vp = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Op = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ha(e, t) {
  ge(t, !1), je(e, Op);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = et(), l = be(a);
  {
    var u = (c) => {
      var f = Vp();
      $e(() => {
        st(f, "width", typeof o() == "string" ? o() : `${o()}px`), st(f, "height", typeof i() == "string" ? i() : `${i()}px`), st(f, "transform", `translate(${n()}px, ${r()}px)`);
      }), L(c, f);
    };
    ke(l, (c) => {
      s() && c(u);
    });
  }
  return L(e, a), he({
    get x() {
      return n();
    },
    set x(c) {
      n(c), y();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), y();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), y();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), y();
    },
    get isVisible() {
      return s();
    },
    set isVisible(c) {
      s(c), y();
    }
  });
}
ae(
  ha,
  {
    x: {},
    y: {},
    width: {},
    height: {},
    isVisible: {}
  },
  [],
  [],
  !0
);
function Rc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(s, "$selectionRect", n), i = () => Q(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = qe();
  He();
  const l = /* @__PURE__ */ pe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ pe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.width;
  }), c = /* @__PURE__ */ pe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.height;
  }), f = /* @__PURE__ */ pe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.x;
  }), d = /* @__PURE__ */ pe(() => {
    var g;
    return (g = o()) == null ? void 0 : g.y;
  });
  ha(e, {
    get isVisible() {
      return h(l);
    },
    get width() {
      return h(u);
    },
    get height() {
      return h(c);
    },
    get x() {
      return h(f);
    },
    get y() {
      return h(d);
    }
  }), he(), r();
}
ae(Rc, {}, [], [], !0);
var Lp = /* @__PURE__ */ re('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Ip = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Bc(e, t) {
  ge(t, !1), je(e, Ip);
  const [n, r] = tt(), o = () => Q(l, "$selectionRectMode", n), i = () => Q(c, "$nodeLookup", n), s = () => Q(u, "$nodes", n), a = qe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, f = Oi();
  let d = ne(null);
  function g(m) {
    const _ = s().filter((v) => v.selected);
    f("selectioncontextmenu", { nodes: _, event: m });
  }
  function p(m) {
    const _ = s().filter((v) => v.selected);
    f("selectionclick", { nodes: _, event: m });
  }
  fe(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (U(d, No(i(), { filter: (m) => !!m.selected })), s());
    }
  ), gt(), He();
  var x = et(), C = be(x);
  {
    var E = (m) => {
      var _ = Lp(), v = X(_);
      ha(v, { width: "100%", height: "100%", x: 0, y: 0 }), Z(_), ht(_, (b, N) => Er == null ? void 0 : Er(b, N), () => ({
        disabled: !1,
        store: a,
        onDrag: (b, N, $, T) => {
          f("nodedrag", { event: b, targetNode: null, nodes: T });
        },
        onDragStart: (b, N, $, T) => {
          f("nodedragstart", { event: b, targetNode: null, nodes: T });
        },
        onDragStop: (b, N, $, T) => {
          f("nodedragstop", { event: b, targetNode: null, nodes: T });
        }
      })), Ot(() => Ye("contextmenu", _, g)), Ot(() => Ye("click", _, p)), Ot(() => Ye("keyup", _, () => {
      })), $e(() => ce(_, "style", `width: ${h(d).width ?? ""}px; height: ${h(d).height ?? ""}px; transform: translate(${h(d).x ?? ""}px, ${h(d).y ?? ""}px)`)), L(m, _);
    };
    ke(C, (m) => {
      o() === "nodes" && h(d) && Pn(h(d).x) && Pn(h(d).y) && m(E);
    });
  }
  L(e, x), he(), r();
}
ae(Bc, {}, [], [], !0);
function Fe(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(s) {
    const a = Array.isArray(r) ? r : [r], l = {
      alt: s.altKey,
      ctrl: s.ctrlKey,
      shift: s.shiftKey,
      meta: s.metaKey
    };
    for (const u of a) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: f, key: d, callback: g, preventDefault: p, enabled: x } = c;
      if (x) {
        if (f.length && !(Array.isArray(f) ? f : [f]).map(
          (m) => typeof m == "string" ? [m] : m
        ).some(
          (m) => m.every((_) => l[_])
        ))
          continue;
        if (s.key === d) {
          p && s.preventDefault();
          const C = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: C })), g == null || g(C);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (s) => {
      const { enabled: a = !0, type: l = "keydown" } = s;
      n && (!a || o !== l) ? e.removeEventListener(o, i) : !n && a && e.addEventListener(l, i), n = a, o = l, r = s.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function Yc(e, t) {
  ge(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => mi() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => mi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: f,
    selectionRect: d
  } = qe();
  function g(m) {
    return m !== null && typeof m == "object";
  }
  function p(m) {
    return g(m) ? m.modifier || [] : [];
  }
  function x(m) {
    return m == null ? "" : g(m) ? m.key : m;
  }
  function C(m, _) {
    return (Array.isArray(m) ? m : [m]).map((b) => {
      const N = x(b);
      return {
        key: N,
        modifier: p(b),
        enabled: N !== null,
        callback: _
      };
    });
  }
  function E() {
    d.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), f.set(!1);
  }
  return He(), Ye("blur", Nt, E), Ye("contextmenu", Nt, E), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(n(), () => a.set(!0)),
    type: "keydown"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(n(), () => a.set(!1)),
    type: "keyup"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !y0(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(i(), () => c.set(!0)),
    type: "keydown"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(i(), () => c.set(!1)),
    type: "keyup"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(s(), () => f.set(!0)),
    type: "keydown"
  })), ht(Nt, (m, _) => Fe == null ? void 0 : Fe(m, _), () => ({
    trigger: C(s(), () => f.set(!1)),
    type: "keyup"
  })), he({
    get selectionKey() {
      return n();
    },
    set selectionKey(m) {
      n(m), y();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(m) {
      r(m), y();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(m) {
      o(m), y();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(m) {
      i(m), y();
    },
    get zoomActivationKey() {
      return s();
    },
    set zoomActivationKey(m) {
      s(m), y();
    }
  });
}
ae(
  Yc,
  {
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
var zp = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__connection-path"></path>'), Rp = /* @__PURE__ */ Ce('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Zc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(g, "$connection", n), i = () => Q(p, "$connectionLineType", n), s = () => Q(f, "$width", n), a = () => Q(d, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: f,
    height: d,
    connection: g,
    connectionLineType: p
  } = qe();
  let x = ne(null);
  fe(
    () => (o(), j(c()), i(), h(x), Hs),
    () => {
      if (o().inProgress && !c()) {
        const { from: v, to: b, fromPosition: N, toPosition: $ } = o(), T = {
          sourceX: v.x,
          sourceY: v.y,
          sourcePosition: N,
          targetX: b.x,
          targetY: b.y,
          targetPosition: $
        };
        switch (i()) {
          case Cr.Bezier:
            ((O) => U(x, O[0]))(sc(T));
            break;
          case Cr.Step:
            ((O) => U(x, O[0]))(yi({ ...T, borderRadius: 0 }));
            break;
          case Cr.SmoothStep:
            ((O) => U(x, O[0]))(yi(T));
            break;
          default:
            ((O) => U(x, O[0]))(Hs(T));
        }
      }
    }
  ), gt(), He();
  var C = et(), E = be(C);
  {
    var m = (v) => {
      var b = Rp(), N = X(b), $ = X(N);
      vt($, t, "connectionLine", {});
      var T = R($);
      {
        var O = (D) => {
          var A = zp();
          $e(() => {
            ce(A, "d", h(x)), ce(A, "style", u());
          }), L(D, A);
        };
        ke(T, (D) => {
          c() || D(O);
        });
      }
      Z(N), Z(b), $e(
        (D) => {
          ce(b, "width", s()), ce(b, "height", a()), ce(b, "style", l()), Ct(N, 0, xn(D));
        },
        [
          () => $t([
            "svelte-flow__connection",
            u0(o().isValid)
          ])
        ],
        pe
      ), L(v, b);
    };
    ke(E, (v) => {
      o().inProgress && v(m);
    });
  }
  L(e, C);
  var _ = he({
    get containerStyle() {
      return l();
    },
    set containerStyle(v) {
      l(v), y();
    },
    get style() {
      return u();
    },
    set style(v) {
      u(v), y();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(v) {
      c(v), y();
    }
  });
  return r(), _;
}
ae(
  Zc,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var Bp = /* @__PURE__ */ re("<div><!></div>");
function Ho(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["position", "style", "class"]);
  ge(t, !1);
  const [o, i] = tt(), s = () => Q(f, "$selectionRectMode", o), a = ne();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: f } = qe();
  fe(() => j(l()), () => {
    U(a, `${l()}`.split("-"));
  }), gt(), He();
  var d = Bp();
  let g;
  var p = X(d);
  vt(p, t, "default", {}), Z(d), $e(
    (C) => {
      g = sn(d, g, {
        class: C,
        style: u(),
        ...r
      }), st(d, "pointer-events", s() ? "none" : "");
    },
    [
      () => $t([
        "svelte-flow__panel",
        c(),
        ...h(a)
      ])
    ],
    pe
  ), L(e, d);
  var x = he({
    get position() {
      return l();
    },
    set position(C) {
      l(C), y();
    },
    get style() {
      return u();
    },
    set style(C) {
      u(C), y();
    },
    get class() {
      return c();
    },
    set class(C) {
      c(C), y();
    }
  });
  return i(), x;
}
ae(Ho, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var Yp = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Xc(e, t) {
  ge(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  He();
  var o = et(), i = be(o);
  {
    var s = (a) => {
      Ho(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Yp();
          L(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    ke(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return L(e, o), he({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), y();
    },
    get position() {
      return r();
    },
    set position(a) {
      r(a), y();
    }
  });
}
ae(Xc, { proOptions: {}, position: {} }, [], [], !0);
function $l(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const Zp = (e) => Object.keys(e);
function Sl(e, t) {
  Zp(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Xp() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Wp(e = "light") {
  return Wt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = Xp(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var Fp = /* @__PURE__ */ re('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Kp = /* @__PURE__ */ re("<!> <!>", 1), qp = /* @__PURE__ */ re("<div><!> <!> <!> <!></div>");
const Gp = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Wc(e, t) {
  const n = v1(t), r = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = nt(r, [
    "id",
    "nodes",
    "edges",
    "fitView",
    "fitViewOptions",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "viewport",
    "nodeTypes",
    "edgeTypes",
    "selectionKey",
    "selectionMode",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "nodesDraggable",
    "nodesConnectable",
    "nodeDragThreshold",
    "elementsSelectable",
    "snapGrid",
    "deleteKey",
    "connectionRadius",
    "connectionLineType",
    "connectionMode",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "isValidConnection",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnDrag",
    "selectionOnDrag",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onerror",
    "ondelete",
    "onedgecreate",
    "attributionPosition",
    "proOptions",
    "defaultEdgeOptions",
    "width",
    "height",
    "colorMode",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforedelete",
    "oninit",
    "nodeOrigin",
    "paneClickDistance",
    "nodeClickDistance",
    "defaultMarkerColor",
    "style",
    "class"
  ]);
  ge(t, !1), je(e, Gp);
  const [i, s] = tt(), a = () => Q(_(), "$viewport", i), l = () => Q(ji, "$initialized", i), u = () => Q(h(c), "$colorModeClass", i), c = ne();
  let f = w(t, "id", 12, "1"), d = w(t, "nodes", 12), g = w(t, "edges", 12), p = w(t, "fitView", 12, void 0), x = w(t, "fitViewOptions", 12, void 0), C = w(t, "minZoom", 12, void 0), E = w(t, "maxZoom", 12, void 0), m = w(t, "initialViewport", 12, void 0), _ = w(t, "viewport", 12, void 0), v = w(t, "nodeTypes", 12, void 0), b = w(t, "edgeTypes", 12, void 0), N = w(t, "selectionKey", 12, void 0), $ = w(t, "selectionMode", 12, void 0), T = w(t, "panActivationKey", 12, void 0), O = w(t, "multiSelectionKey", 12, void 0), D = w(t, "zoomActivationKey", 12, void 0), A = w(t, "nodesDraggable", 12, void 0), V = w(t, "nodesConnectable", 12, void 0), z = w(t, "nodeDragThreshold", 12, void 0), S = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), k = w(t, "deleteKey", 12, void 0), P = w(t, "connectionRadius", 12, void 0), H = w(t, "connectionLineType", 12, void 0), I = w(t, "connectionMode", 28, () => cr.Strict), B = w(t, "connectionLineStyle", 12, ""), W = w(t, "connectionLineContainerStyle", 12, ""), K = w(t, "onMoveStart", 12, void 0), ie = w(t, "onMove", 12, void 0), ee = w(t, "onMoveEnd", 12, void 0), F = w(t, "isValidConnection", 12, void 0), ue = w(t, "translateExtent", 12, void 0), me = w(t, "nodeExtent", 12, void 0), xe = w(t, "onlyRenderVisibleElements", 12, void 0), de = w(t, "panOnScrollMode", 28, () => Kn.Free), Ie = w(t, "preventScrolling", 12, !0), G = w(t, "zoomOnScroll", 12, !0), se = w(t, "zoomOnDoubleClick", 12, !0), Me = w(t, "zoomOnPinch", 12, !0), Ve = w(t, "panOnScroll", 12, !1), Xe = w(t, "panOnDrag", 12, !0), te = w(t, "selectionOnDrag", 12, void 0), We = w(t, "autoPanOnConnect", 12, !0), Oe = w(t, "autoPanOnNodeDrag", 12, !0), Qe = w(t, "onerror", 12, void 0), oe = w(t, "ondelete", 12, void 0), ve = w(t, "onedgecreate", 12, void 0), _e = w(t, "attributionPosition", 12, void 0), Le = w(t, "proOptions", 12, void 0), ut = w(t, "defaultEdgeOptions", 12, void 0), lt = w(t, "width", 12, void 0), J = w(t, "height", 12, void 0), ze = w(t, "colorMode", 12, "light"), le = w(t, "onconnect", 12, void 0), cn = w(t, "onconnectstart", 12, void 0), jt = w(t, "onconnectend", 12, void 0), dn = w(t, "onbeforedelete", 12, void 0), Pe = w(t, "oninit", 12, void 0), rt = w(t, "nodeOrigin", 12, void 0), ye = w(t, "paneClickDistance", 12, 0), ot = w(t, "nodeClickDistance", 12, 0), at = w(t, "defaultMarkerColor", 12, "#b1b1b7"), Xt = w(t, "style", 12, void 0), Kr = w(t, "class", 12, void 0), Dt = ne(), St = ne(), fn = ne();
  const Jt = a() || m(), ft = Gf(Wi) ? qe() : yp({
    nodes: q(d()),
    edges: q(g()),
    width: lt(),
    height: J(),
    fitView: p(),
    nodeOrigin: rt(),
    nodeExtent: me()
  });
  Yt(() => (ft.width.set(h(St)), ft.height.set(h(fn)), ft.domNode.set(h(Dt)), ft.syncNodeStores(d()), ft.syncEdgeStores(g()), ft.syncViewport(_()), p() !== void 0 && ft.fitViewOnInit.set(p()), x() && ft.fitViewOptions.set(x()), $l(ft, {
    nodeTypes: v(),
    edgeTypes: b(),
    minZoom: C(),
    maxZoom: E(),
    translateExtent: ue(),
    paneClickDistance: ye()
  }), () => {
    ft.reset();
  }));
  const { initialized: ji } = ft;
  let tr = ne(!1);
  fe(
    () => (h(St), h(fn)),
    () => {
      h(St) !== void 0 && h(fn) !== void 0 && (ft.width.set(h(St)), ft.height.set(h(fn)));
    }
  ), fe(
    () => (h(tr), l(), j(Pe())),
    () => {
      var Y;
      !h(tr) && l() && ((Y = Pe()) == null || Y(), U(tr, !0));
    }
  ), fe(
    () => (j(f()), j(H()), j(P()), j($()), j(M()), j(at()), j(A()), j(V()), j(S()), j(xe()), j(F()), j(We()), j(Oe()), j(Qe()), j(oe()), j(ve()), j(I()), j(z()), j(le()), j(cn()), j(jt()), j(dn()), j(rt()), Sl),
    () => {
      const Y = {
        flowId: f(),
        connectionLineType: H(),
        connectionRadius: P(),
        selectionMode: $(),
        snapGrid: M(),
        defaultMarkerColor: at(),
        nodesDraggable: A(),
        nodesConnectable: V(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: xe(),
        isValidConnection: F(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: Oe(),
        onerror: Qe(),
        ondelete: oe(),
        onedgecreate: ve(),
        connectionMode: I(),
        nodeDragThreshold: z(),
        onconnect: le(),
        onconnectstart: cn(),
        onconnectend: jt(),
        onbeforedelete: dn(),
        nodeOrigin: rt()
      };
      Sl(ft, Y);
    }
  ), fe(
    () => (j(v()), j(b()), j(C()), j(E()), j(ue()), j(ye())),
    () => {
      $l(ft, {
        nodeTypes: v(),
        edgeTypes: b(),
        minZoom: C(),
        maxZoom: E(),
        translateExtent: ue(),
        paneClickDistance: ye()
      });
    }
  ), fe(
    () => j(ze()),
    () => {
      C1(U(c, Wp(ze())), "$colorModeClass", i);
    }
  ), gt(), He();
  var Qt = qp();
  let Lo;
  var Io = X(Qt);
  Yc(Io, {
    get selectionKey() {
      return N();
    },
    get deleteKey() {
      return k();
    },
    get panActivationKey() {
      return T();
    },
    get multiSelectionKey() {
      return O();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var zo = R(Io, 2);
  const zd = /* @__PURE__ */ pe(() => de() === void 0 ? Kn.Free : de()), Rd = /* @__PURE__ */ pe(() => Ie() === void 0 ? !0 : Ie()), Bd = /* @__PURE__ */ pe(() => G() === void 0 ? !0 : G()), Yd = /* @__PURE__ */ pe(() => se() === void 0 ? !0 : se()), Zd = /* @__PURE__ */ pe(() => Me() === void 0 ? !0 : Me()), Xd = /* @__PURE__ */ pe(() => Ve() === void 0 ? !1 : Ve()), Wd = /* @__PURE__ */ pe(() => Xe() === void 0 ? !0 : Xe()), Fd = /* @__PURE__ */ pe(() => ye() === void 0 ? 0 : ye());
  Tc(zo, {
    initialViewport: Jt,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return ie();
    },
    get onMoveEnd() {
      return ee();
    },
    get panOnScrollMode() {
      return h(zd);
    },
    get preventScrolling() {
      return h(Rd);
    },
    get zoomOnScroll() {
      return h(Bd);
    },
    get zoomOnDoubleClick() {
      return h(Yd);
    },
    get zoomOnPinch() {
      return h(Zd);
    },
    get panOnScroll() {
      return h(Xd);
    },
    get panOnDrag() {
      return h(Wd);
    },
    get paneClickDistance() {
      return h(Fd);
    },
    children: (Y, aw) => {
      const Gd = /* @__PURE__ */ pe(() => Xe() === void 0 ? !0 : Xe());
      Mc(Y, {
        get panOnDrag() {
          return h(Gd);
        },
        get selectionOnDrag() {
          return te();
        },
        $$events: {
          paneclick(qr) {
            De.call(this, t, qr);
          },
          panecontextmenu(qr) {
            De.call(this, t, qr);
          }
        },
        children: (qr, lw) => {
          var xa = Kp(), ba = be(xa);
          Hc(ba, {
            children: (jd, uw) => {
              var Ca = Fp(), ka = be(Ca);
              zc(ka, {
                get defaultEdgeOptions() {
                  return ut();
                },
                $$events: {
                  edgeclick(Re) {
                    De.call(this, t, Re);
                  },
                  edgecontextmenu(Re) {
                    De.call(this, t, Re);
                  },
                  edgemouseenter(Re) {
                    De.call(this, t, Re);
                  },
                  edgemouseleave(Re) {
                    De.call(this, t, Re);
                  }
                }
              });
              var Ea = R(ka, 2);
              Zc(Ea, {
                get containerStyle() {
                  return W();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Re, cw) => {
                    var Sa = et(), Qd = be(Sa);
                    vt(Qd, t, "connectionLine", {}), L(Re, Sa);
                  }
                }
              });
              var $a = R(Ea, 6);
              Ac($a, {
                get nodeClickDistance() {
                  return ot();
                },
                $$events: {
                  nodeclick(Re) {
                    De.call(this, t, Re);
                  },
                  nodemouseenter(Re) {
                    De.call(this, t, Re);
                  },
                  nodemousemove(Re) {
                    De.call(this, t, Re);
                  },
                  nodemouseleave(Re) {
                    De.call(this, t, Re);
                  },
                  nodedragstart(Re) {
                    De.call(this, t, Re);
                  },
                  nodedrag(Re) {
                    De.call(this, t, Re);
                  },
                  nodedragstop(Re) {
                    De.call(this, t, Re);
                  },
                  nodecontextmenu(Re) {
                    De.call(this, t, Re);
                  }
                }
              });
              var Jd = R($a, 2);
              Bc(Jd, {
                $$events: {
                  selectionclick(Re) {
                    De.call(this, t, Re);
                  },
                  selectioncontextmenu(Re) {
                    De.call(this, t, Re);
                  },
                  nodedragstart(Re) {
                    De.call(this, t, Re);
                  },
                  nodedrag(Re) {
                    De.call(this, t, Re);
                  },
                  nodedragstop(Re) {
                    De.call(this, t, Re);
                  }
                }
              }), L(jd, Ca);
            },
            $$slots: { default: !0 }
          });
          var Ud = R(ba, 2);
          Rc(Ud, {}), L(qr, xa);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var _a = R(zo, 2);
  Xc(_a, {
    get proOptions() {
      return Le();
    },
    get position() {
      return _e();
    }
  });
  var Kd = R(_a, 2);
  vt(Kd, t, "default", {}), Z(Qt), An(Qt, (Y) => U(Dt, Y), () => h(Dt)), $e(
    (Y) => Lo = sn(
      Qt,
      Lo,
      {
        style: Xt(),
        class: Y,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => $t([
        "svelte-flow",
        Kr(),
        u()
      ])
    ],
    pe
  ), Ra(Qt, "clientWidth", (Y) => U(St, Y)), Ra(Qt, "clientHeight", (Y) => U(fn, Y)), Ye("dragover", Qt, function(Y) {
    De.call(this, t, Y);
  }), Ye("drop", Qt, function(Y) {
    De.call(this, t, Y);
  }), L(e, Qt);
  var qd = he({
    get id() {
      return f();
    },
    set id(Y) {
      f(Y), y();
    },
    get nodes() {
      return d();
    },
    set nodes(Y) {
      d(Y), y();
    },
    get edges() {
      return g();
    },
    set edges(Y) {
      g(Y), y();
    },
    get fitView() {
      return p();
    },
    set fitView(Y) {
      p(Y), y();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(Y) {
      x(Y), y();
    },
    get minZoom() {
      return C();
    },
    set minZoom(Y) {
      C(Y), y();
    },
    get maxZoom() {
      return E();
    },
    set maxZoom(Y) {
      E(Y), y();
    },
    get initialViewport() {
      return m();
    },
    set initialViewport(Y) {
      m(Y), y();
    },
    get viewport() {
      return _();
    },
    set viewport(Y) {
      _(Y), y();
    },
    get nodeTypes() {
      return v();
    },
    set nodeTypes(Y) {
      v(Y), y();
    },
    get edgeTypes() {
      return b();
    },
    set edgeTypes(Y) {
      b(Y), y();
    },
    get selectionKey() {
      return N();
    },
    set selectionKey(Y) {
      N(Y), y();
    },
    get selectionMode() {
      return $();
    },
    set selectionMode(Y) {
      $(Y), y();
    },
    get panActivationKey() {
      return T();
    },
    set panActivationKey(Y) {
      T(Y), y();
    },
    get multiSelectionKey() {
      return O();
    },
    set multiSelectionKey(Y) {
      O(Y), y();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(Y) {
      D(Y), y();
    },
    get nodesDraggable() {
      return A();
    },
    set nodesDraggable(Y) {
      A(Y), y();
    },
    get nodesConnectable() {
      return V();
    },
    set nodesConnectable(Y) {
      V(Y), y();
    },
    get nodeDragThreshold() {
      return z();
    },
    set nodeDragThreshold(Y) {
      z(Y), y();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(Y) {
      S(Y), y();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(Y) {
      M(Y), y();
    },
    get deleteKey() {
      return k();
    },
    set deleteKey(Y) {
      k(Y), y();
    },
    get connectionRadius() {
      return P();
    },
    set connectionRadius(Y) {
      P(Y), y();
    },
    get connectionLineType() {
      return H();
    },
    set connectionLineType(Y) {
      H(Y), y();
    },
    get connectionMode() {
      return I();
    },
    set connectionMode(Y) {
      I(Y), y();
    },
    get connectionLineStyle() {
      return B();
    },
    set connectionLineStyle(Y) {
      B(Y), y();
    },
    get connectionLineContainerStyle() {
      return W();
    },
    set connectionLineContainerStyle(Y) {
      W(Y), y();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(Y) {
      K(Y), y();
    },
    get onMove() {
      return ie();
    },
    set onMove(Y) {
      ie(Y), y();
    },
    get onMoveEnd() {
      return ee();
    },
    set onMoveEnd(Y) {
      ee(Y), y();
    },
    get isValidConnection() {
      return F();
    },
    set isValidConnection(Y) {
      F(Y), y();
    },
    get translateExtent() {
      return ue();
    },
    set translateExtent(Y) {
      ue(Y), y();
    },
    get nodeExtent() {
      return me();
    },
    set nodeExtent(Y) {
      me(Y), y();
    },
    get onlyRenderVisibleElements() {
      return xe();
    },
    set onlyRenderVisibleElements(Y) {
      xe(Y), y();
    },
    get panOnScrollMode() {
      return de();
    },
    set panOnScrollMode(Y) {
      de(Y), y();
    },
    get preventScrolling() {
      return Ie();
    },
    set preventScrolling(Y) {
      Ie(Y), y();
    },
    get zoomOnScroll() {
      return G();
    },
    set zoomOnScroll(Y) {
      G(Y), y();
    },
    get zoomOnDoubleClick() {
      return se();
    },
    set zoomOnDoubleClick(Y) {
      se(Y), y();
    },
    get zoomOnPinch() {
      return Me();
    },
    set zoomOnPinch(Y) {
      Me(Y), y();
    },
    get panOnScroll() {
      return Ve();
    },
    set panOnScroll(Y) {
      Ve(Y), y();
    },
    get panOnDrag() {
      return Xe();
    },
    set panOnDrag(Y) {
      Xe(Y), y();
    },
    get selectionOnDrag() {
      return te();
    },
    set selectionOnDrag(Y) {
      te(Y), y();
    },
    get autoPanOnConnect() {
      return We();
    },
    set autoPanOnConnect(Y) {
      We(Y), y();
    },
    get autoPanOnNodeDrag() {
      return Oe();
    },
    set autoPanOnNodeDrag(Y) {
      Oe(Y), y();
    },
    get onerror() {
      return Qe();
    },
    set onerror(Y) {
      Qe(Y), y();
    },
    get ondelete() {
      return oe();
    },
    set ondelete(Y) {
      oe(Y), y();
    },
    get onedgecreate() {
      return ve();
    },
    set onedgecreate(Y) {
      ve(Y), y();
    },
    get attributionPosition() {
      return _e();
    },
    set attributionPosition(Y) {
      _e(Y), y();
    },
    get proOptions() {
      return Le();
    },
    set proOptions(Y) {
      Le(Y), y();
    },
    get defaultEdgeOptions() {
      return ut();
    },
    set defaultEdgeOptions(Y) {
      ut(Y), y();
    },
    get width() {
      return lt();
    },
    set width(Y) {
      lt(Y), y();
    },
    get height() {
      return J();
    },
    set height(Y) {
      J(Y), y();
    },
    get colorMode() {
      return ze();
    },
    set colorMode(Y) {
      ze(Y), y();
    },
    get onconnect() {
      return le();
    },
    set onconnect(Y) {
      le(Y), y();
    },
    get onconnectstart() {
      return cn();
    },
    set onconnectstart(Y) {
      cn(Y), y();
    },
    get onconnectend() {
      return jt();
    },
    set onconnectend(Y) {
      jt(Y), y();
    },
    get onbeforedelete() {
      return dn();
    },
    set onbeforedelete(Y) {
      dn(Y), y();
    },
    get oninit() {
      return Pe();
    },
    set oninit(Y) {
      Pe(Y), y();
    },
    get nodeOrigin() {
      return rt();
    },
    set nodeOrigin(Y) {
      rt(Y), y();
    },
    get paneClickDistance() {
      return ye();
    },
    set paneClickDistance(Y) {
      ye(Y), y();
    },
    get nodeClickDistance() {
      return ot();
    },
    set nodeClickDistance(Y) {
      ot(Y), y();
    },
    get defaultMarkerColor() {
      return at();
    },
    set defaultMarkerColor(Y) {
      at(Y), y();
    },
    get style() {
      return Xt();
    },
    set style(Y) {
      Xt(Y), y();
    },
    get class() {
      return Kr();
    },
    set class(Y) {
      Kr(Y), y();
    }
  });
  return s(), qd;
}
ae(
  Wc,
  {
    id: {},
    nodes: {},
    edges: {},
    fitView: {},
    fitViewOptions: {},
    minZoom: {},
    maxZoom: {},
    initialViewport: {},
    viewport: {},
    nodeTypes: {},
    edgeTypes: {},
    selectionKey: {},
    selectionMode: {},
    panActivationKey: {},
    multiSelectionKey: {},
    zoomActivationKey: {},
    nodesDraggable: {},
    nodesConnectable: {},
    nodeDragThreshold: {},
    elementsSelectable: {},
    snapGrid: {},
    deleteKey: {},
    connectionRadius: {},
    connectionLineType: {},
    connectionMode: {},
    connectionLineStyle: {},
    connectionLineContainerStyle: {},
    onMoveStart: {},
    onMove: {},
    onMoveEnd: {},
    isValidConnection: {},
    translateExtent: {},
    nodeExtent: {},
    onlyRenderVisibleElements: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnScroll: {},
    panOnDrag: {},
    selectionOnDrag: {},
    autoPanOnConnect: {},
    autoPanOnNodeDrag: {},
    onerror: {},
    ondelete: {},
    onedgecreate: {},
    attributionPosition: {},
    proOptions: {},
    defaultEdgeOptions: {},
    width: {},
    height: {},
    colorMode: {},
    onconnect: {},
    onconnectstart: {},
    onconnectend: {},
    onbeforedelete: {},
    oninit: {},
    nodeOrigin: {},
    paneClickDistance: {},
    nodeClickDistance: {},
    defaultMarkerColor: {},
    style: {},
    class: {}
  },
  ["connectionLine", "default"],
  [],
  !0
);
function Fc(e, t) {
  ge(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = Nc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Mr(Wi, { getStore: () => l }), Qs(() => {
    l.reset();
  }), He();
  var u = et(), c = be(u);
  return vt(c, t, "default", {}), L(e, u), he({
    get initialNodes() {
      return n();
    },
    set initialNodes(f) {
      n(f), y();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(f) {
      r(f), y();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(f) {
      o(f), y();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(f) {
      i(f), y();
    },
    get fitView() {
      return s();
    },
    set fitView(f) {
      s(f), y();
    },
    get nodeOrigin() {
      return a();
    },
    set nodeOrigin(f) {
      a(f), y();
    }
  });
}
ae(
  Fc,
  {
    initialNodes: {},
    initialEdges: {},
    initialWidth: {},
    initialHeight: {},
    fitView: {},
    nodeOrigin: {}
  },
  ["default"],
  [],
  !0
);
var Up = /* @__PURE__ */ re("<button><!></button>");
function ro(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  ge(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  He();
  var c = Up();
  let f;
  var d = X(c);
  return vt(d, t, "default", { class: "button-svg" }), Z(c), $e(
    (g) => {
      f = sn(c, f, { type: "button", class: g, ...r }), st(c, "--xy-controls-button-background-color-props", i()), st(c, "--xy-controls-button-background-color-hover-props", s()), st(c, "--xy-controls-button-color-props", a()), st(c, "--xy-controls-button-color-hover-props", l()), st(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => $t([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), Ye("click", c, function(g) {
    De.call(this, t, g);
  }), L(e, c), he({
    get class() {
      return o();
    },
    set class(g) {
      o(g), y();
    },
    get bgColor() {
      return i();
    },
    set bgColor(g) {
      i(g), y();
    },
    get bgColorHover() {
      return s();
    },
    set bgColorHover(g) {
      s(g), y();
    },
    get color() {
      return a();
    },
    set color(g) {
      a(g), y();
    },
    get colorHover() {
      return l();
    },
    set colorHover(g) {
      l(g), y();
    },
    get borderColor() {
      return u();
    },
    set borderColor(g) {
      u(g), y();
    }
  });
}
ae(
  ro,
  {
    class: {},
    bgColor: {},
    bgColorHover: {},
    color: {},
    colorHover: {},
    borderColor: {}
  },
  ["default"],
  [],
  !0
);
var jp = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Kc(e) {
  var t = jp();
  L(e, t);
}
ae(Kc, {}, [], [], !0);
var Jp = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function qc(e) {
  var t = Jp();
  L(e, t);
}
ae(qc, {}, [], [], !0);
var Qp = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Gc(e) {
  var t = Qp();
  L(e, t);
}
ae(Gc, {}, [], [], !0);
var e2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Uc(e) {
  var t = e2();
  L(e, t);
}
ae(Uc, {}, [], [], !0);
var t2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function jc(e) {
  var t = t2();
  L(e, t);
}
ae(jc, {}, [], [], !0);
var n2 = /* @__PURE__ */ re("<!> <!>", 1), r2 = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function Jc(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(H, "$nodesDraggable", n), i = () => Q(I, "$nodesConnectable", n), s = () => Q(B, "$elementsSelectable", n), a = () => Q(M, "$viewport", n), l = () => Q(k, "$minZoom", n), u = () => Q(P, "$maxZoom", n), c = ne(), f = ne(), d = ne(), g = ne();
  let p = w(t, "position", 12, "bottom-left"), x = w(t, "showZoom", 12, !0), C = w(t, "showFitView", 12, !0), E = w(t, "showLock", 12, !0), m = w(t, "buttonBgColor", 12, void 0), _ = w(t, "buttonBgColorHover", 12, void 0), v = w(t, "buttonColor", 12, void 0), b = w(t, "buttonColorHover", 12, void 0), N = w(t, "buttonBorderColor", 12, void 0), $ = w(t, "ariaLabel", 12, void 0), T = w(t, "style", 12, void 0), O = w(t, "orientation", 12, "vertical"), D = w(t, "fitViewOptions", 12, void 0), A = w(t, "class", 12, "");
  const {
    zoomIn: V,
    zoomOut: z,
    fitView: S,
    viewport: M,
    minZoom: k,
    maxZoom: P,
    nodesDraggable: H,
    nodesConnectable: I,
    elementsSelectable: B
  } = qe(), W = {
    bgColor: m(),
    bgColorHover: _(),
    color: v(),
    colorHover: b(),
    borderColor: N()
  }, K = () => {
    V();
  }, ie = () => {
    z();
  }, ee = () => {
    S(D());
  }, F = () => {
    U(c, !h(c)), H.set(h(c)), I.set(h(c)), B.set(h(c));
  };
  fe(
    () => (o(), i(), s()),
    () => {
      U(c, o() || i() || s());
    }
  ), fe(() => (a(), l()), () => {
    U(f, a().zoom <= l());
  }), fe(() => (a(), u()), () => {
    U(d, a().zoom >= u());
  }), fe(() => j(O()), () => {
    U(g, O() === "horizontal" ? "horizontal" : "vertical");
  }), gt(), He();
  const ue = /* @__PURE__ */ pe(() => $t([
    "svelte-flow__controls",
    h(g),
    A()
  ])), me = /* @__PURE__ */ pe(() => $() ?? "Svelte Flow controls");
  Ho(e, {
    get class() {
      return h(ue);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(me);
    },
    get style() {
      return T();
    },
    children: (de, Ie) => {
      var G = r2(), se = be(G);
      vt(se, t, "before", {});
      var Me = R(se, 2);
      {
        var Ve = (ve) => {
          var _e = n2(), Le = be(_e);
          ro(Le, ct(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return h(d);
              }
            },
            W,
            {
              $$events: { click: K },
              children: (lt, J) => {
                Kc(lt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ut = R(Le, 2);
          ro(ut, ct(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return h(f);
              }
            },
            W,
            {
              $$events: { click: ie },
              children: (lt, J) => {
                qc(lt);
              },
              $$slots: { default: !0 }
            }
          )), L(ve, _e);
        };
        ke(Me, (ve) => {
          x() && ve(Ve);
        });
      }
      var Xe = R(Me, 2);
      {
        var te = (ve) => {
          ro(ve, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            W,
            {
              $$events: { click: ee },
              children: (_e, Le) => {
                Gc(_e);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Xe, (ve) => {
          C() && ve(te);
        });
      }
      var We = R(Xe, 2);
      {
        var Oe = (ve) => {
          ro(ve, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            W,
            {
              $$events: { click: F },
              children: (_e, Le) => {
                var ut = et(), lt = be(ut);
                {
                  var J = (le) => {
                    jc(le);
                  }, ze = (le) => {
                    Uc(le);
                  };
                  ke(lt, (le) => {
                    h(c) ? le(J) : le(ze, !1);
                  });
                }
                L(_e, ut);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(We, (ve) => {
          E() && ve(Oe);
        });
      }
      var Qe = R(We, 2);
      vt(Qe, t, "default", {});
      var oe = R(Qe, 2);
      vt(oe, t, "after", {}), L(de, G);
    },
    $$slots: { default: !0 }
  });
  var xe = he({
    get position() {
      return p();
    },
    set position(de) {
      p(de), y();
    },
    get showZoom() {
      return x();
    },
    set showZoom(de) {
      x(de), y();
    },
    get showFitView() {
      return C();
    },
    set showFitView(de) {
      C(de), y();
    },
    get showLock() {
      return E();
    },
    set showLock(de) {
      E(de), y();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(de) {
      m(de), y();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(de) {
      _(de), y();
    },
    get buttonColor() {
      return v();
    },
    set buttonColor(de) {
      v(de), y();
    },
    get buttonColorHover() {
      return b();
    },
    set buttonColorHover(de) {
      b(de), y();
    },
    get buttonBorderColor() {
      return N();
    },
    set buttonBorderColor(de) {
      N(de), y();
    },
    get ariaLabel() {
      return $();
    },
    set ariaLabel(de) {
      $(de), y();
    },
    get style() {
      return T();
    },
    set style(de) {
      T(de), y();
    },
    get orientation() {
      return O();
    },
    set orientation(de) {
      O(de), y();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(de) {
      D(de), y();
    },
    get class() {
      return A();
    },
    set class(de) {
      A(de), y();
    }
  });
  return r(), xe;
}
ae(
  Jc,
  {
    position: {},
    showZoom: {},
    showFitView: {},
    showLock: {},
    buttonBgColor: {},
    buttonBgColorHover: {},
    buttonColor: {},
    buttonColorHover: {},
    buttonBorderColor: {},
    ariaLabel: {},
    style: {},
    orientation: {},
    fitViewOptions: {},
    class: {}
  },
  ["before", "default", "after"],
  [],
  !0
);
var qn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(qn || (qn = {}));
var o2 = /* @__PURE__ */ Ce("<circle></circle>");
function Qc(e, t) {
  ge(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  He();
  var o = o2();
  return $e(
    (i) => {
      ce(o, "cx", n()), ce(o, "cy", n()), ce(o, "r", n()), Ct(o, 0, xn(i));
    },
    [
      () => $t([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    pe
  ), L(e, o), he({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), y();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), y();
    }
  });
}
ae(Qc, { radius: {}, class: {} }, [], [], !0);
var i2 = /* @__PURE__ */ Ce("<path></path>");
function ed(e, t) {
  ge(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  He();
  var s = i2();
  return $e(
    (a) => {
      ce(s, "stroke-width", n()), ce(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ct(s, 0, xn(a));
    },
    [
      () => $t([
        "svelte-flow__background-pattern",
        o(),
        i()
      ])
    ],
    pe
  ), L(e, s), he({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), y();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), y();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), y();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), y();
    }
  });
}
ae(
  ed,
  {
    lineWidth: {},
    dimensions: {},
    variant: {},
    class: {}
  },
  [],
  [],
  !0
);
const s2 = {
  [qn.Dots]: 1,
  [qn.Lines]: 1,
  [qn.Cross]: 6
};
var a2 = /* @__PURE__ */ Ce('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const l2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function td(e, t) {
  ge(t, !1), je(e, l2);
  const [n, r] = tt(), o = () => Q(b, "$flowId", n), i = () => Q(v, "$viewport", n), s = ne(), a = ne(), l = ne(), u = ne(), c = ne();
  let f = w(t, "id", 12, void 0), d = w(t, "variant", 28, () => qn.Dots), g = w(t, "gap", 12, 20), p = w(t, "size", 12, 1), x = w(t, "lineWidth", 12, 1), C = w(t, "bgColor", 12, void 0), E = w(t, "patternColor", 12, void 0), m = w(t, "patternClass", 12, void 0), _ = w(t, "class", 12, "");
  const { viewport: v, flowId: b } = qe(), N = p() || s2[d()], $ = d() === qn.Dots, T = d() === qn.Cross, O = Array.isArray(g()) ? g() : [g(), g()];
  fe(
    () => (o(), j(f())),
    () => {
      U(s, `background-pattern-${o()}-${f() ? f() : ""}`);
    }
  ), fe(() => i(), () => {
    U(a, [
      O[0] * i().zoom || 1,
      O[1] * i().zoom || 1
    ]);
  }), fe(() => i(), () => {
    U(l, N * i().zoom);
  }), fe(() => (h(l), h(a)), () => {
    U(u, T ? [h(l), h(l)] : h(a));
  }), fe(
    () => (h(l), h(u)),
    () => {
      U(c, $ ? [
        h(l) / 2,
        h(l) / 2
      ] : [
        h(u)[0] / 2,
        h(u)[1] / 2
      ]);
    }
  ), gt(), He();
  var D = a2(), A = X(D), V = X(A);
  {
    var z = (P) => {
      const H = /* @__PURE__ */ pe(() => h(l) / 2);
      Qc(P, {
        get radius() {
          return h(H);
        },
        get class() {
          return m();
        }
      });
    }, S = (P) => {
      ed(P, {
        get dimensions() {
          return h(u);
        },
        get variant() {
          return d();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return m();
        }
      });
    };
    ke(V, (P) => {
      $ ? P(z) : P(S, !1);
    });
  }
  Z(A);
  var M = R(A);
  Z(D), $e(
    (P) => {
      Ct(D, 0, xn(P), "svelte-1r7pe8d"), st(D, "--xy-background-color-props", C()), st(D, "--xy-background-pattern-color-props", E()), ce(A, "id", h(s)), ce(A, "x", i().x % h(a)[0]), ce(A, "y", i().y % h(a)[1]), ce(A, "width", h(a)[0]), ce(A, "height", h(a)[1]), ce(A, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), ce(M, "fill", `url(#${h(s)})`);
    },
    [
      () => $t(["svelte-flow__background", _()])
    ],
    pe
  ), L(e, D);
  var k = he({
    get id() {
      return f();
    },
    set id(P) {
      f(P), y();
    },
    get variant() {
      return d();
    },
    set variant(P) {
      d(P), y();
    },
    get gap() {
      return g();
    },
    set gap(P) {
      g(P), y();
    },
    get size() {
      return p();
    },
    set size(P) {
      p(P), y();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(P) {
      x(P), y();
    },
    get bgColor() {
      return C();
    },
    set bgColor(P) {
      C(P), y();
    },
    get patternColor() {
      return E();
    },
    set patternColor(P) {
      E(P), y();
    },
    get patternClass() {
      return m();
    },
    set patternClass(P) {
      m(P), y();
    },
    get class() {
      return _();
    },
    set class(P) {
      _(P), y();
    }
  });
  return r(), k;
}
ae(
  td,
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
var u2 = /* @__PURE__ */ Ce("<rect></rect>");
function nd(e, t) {
  ge(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), f = w(t, "selected", 12, !1), d = w(t, "class", 12, "");
  He();
  var g = u2();
  let p;
  return $e(
    (x) => {
      p = Ct(g, 0, xn(x), null, p, { selected: f() }), ce(g, "x", n()), ce(g, "y", r()), ce(g, "rx", s()), ce(g, "ry", s()), ce(g, "width", o()), ce(g, "height", i()), ce(g, "style", `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ce(g, "shape-rendering", l());
    },
    [
      () => $t(["svelte-flow__minimap-node", d()])
    ],
    pe
  ), L(e, g), he({
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
    set borderRadius(x) {
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
      return u();
    },
    set strokeColor(x) {
      u(x), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(x) {
      c(x), y();
    },
    get selected() {
      return f();
    },
    set selected(x) {
      f(x), y();
    },
    get class() {
      return d();
    },
    set class(x) {
      d(x), y();
    }
  });
}
ae(
  nd,
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
function cs(e, t) {
  const n = K0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = q(t.viewport);
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
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
const ds = (e) => e instanceof Function ? e : () => e;
var c2 = /* @__PURE__ */ Ce("<title> </title>"), d2 = /* @__PURE__ */ Ce('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function rd(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(Xe, "$flowId", n), i = () => Q(se, "$viewport", n), s = () => Q(Me, "$containerWidth", n), a = () => Q(Ve, "$containerHeight", n), l = () => Q(G, "$nodeLookup", n), u = () => Q(Ie, "$nodes", n), c = () => Q(te, "$panZoom", n), f = () => Q(We, "$translateExtent", n), d = ne(), g = ne(), p = ne(), x = ne(), C = ne(), E = ne(), m = ne(), _ = ne(), v = ne(), b = ne(), N = ne(), $ = ne(), T = ne();
  let O = w(t, "position", 12, "bottom-right"), D = w(t, "ariaLabel", 12, "Mini map"), A = w(t, "nodeStrokeColor", 12, "transparent"), V = w(t, "nodeColor", 12, void 0), z = w(t, "nodeClass", 12, ""), S = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), k = w(t, "bgColor", 12, void 0), P = w(t, "maskColor", 12, void 0), H = w(t, "maskStrokeColor", 12, void 0), I = w(t, "maskStrokeWidth", 12, void 0), B = w(t, "width", 12, void 0), W = w(t, "height", 12, void 0), K = w(t, "pannable", 12, !0), ie = w(t, "zoomable", 12, !0), ee = w(t, "inversePan", 12, void 0), F = w(t, "zoomStep", 12, void 0), ue = w(t, "style", 12, ""), me = w(t, "class", 12, "");
  const xe = 200, de = 150, {
    nodes: Ie,
    nodeLookup: G,
    viewport: se,
    width: Me,
    height: Ve,
    flowId: Xe,
    panZoom: te,
    translateExtent: We
  } = qe(), Oe = V() === void 0 ? void 0 : ds(V()), Qe = ds(A()), oe = ds(z()), ve = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), _e = `svelte-flow__minimap-desc-${o()}`;
  let Le = ne(h(d));
  const ut = () => h(E);
  fe(
    () => (i(), s(), a()),
    () => {
      U(d, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), fe(
    () => (l(), h(d), u()),
    () => {
      U(Le, l().size > 0 ? nc(No(l()), h(d)) : h(d)), u();
    }
  ), fe(() => j(B()), () => {
    U(g, B() ?? xe);
  }), fe(() => j(W()), () => {
    U(p, W() ?? de);
  }), fe(
    () => (h(Le), h(g)),
    () => {
      U(x, h(Le).width / h(g));
    }
  ), fe(
    () => (h(Le), h(p)),
    () => {
      U(C, h(Le).height / h(p));
    }
  ), fe(
    () => (h(x), h(C)),
    () => {
      U(E, Math.max(h(x), h(C)));
    }
  ), fe(() => (h(E), h(g)), () => {
    U(m, h(E) * h(g));
  }), fe(
    () => (h(E), h(p)),
    () => {
      U(_, h(E) * h(p));
    }
  ), fe(() => h(E), () => {
    U(v, 5 * h(E));
  }), fe(
    () => (h(Le), h(m), h(v)),
    () => {
      U(b, h(Le).x - (h(m) - h(Le).width) / 2 - h(v));
    }
  ), fe(
    () => (h(Le), h(_), h(v)),
    () => {
      U(N, h(Le).y - (h(_) - h(Le).height) / 2 - h(v));
    }
  ), fe(() => (h(m), h(v)), () => {
    U($, h(m) + h(v) * 2);
  }), fe(() => (h(_), h(v)), () => {
    U(T, h(_) + h(v) * 2);
  }), gt(), He();
  const lt = /* @__PURE__ */ pe(() => ue() + (k() ? `;--xy-minimap-background-color-props:${k()}` : "")), J = /* @__PURE__ */ pe(() => $t(["svelte-flow__minimap", me()]));
  Ho(e, {
    get position() {
      return O();
    },
    get style() {
      return h(lt);
    },
    get class() {
      return h(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (le, cn) => {
      var jt = et(), dn = be(jt);
      {
        var Pe = (rt) => {
          var ye = d2();
          ce(ye, "aria-labelledby", _e);
          var ot = X(ye);
          {
            var at = (Dt) => {
              var St = c2();
              ce(St, "id", _e);
              var fn = X(St, !0);
              Z(St), $e(() => It(fn, D())), L(Dt, St);
            };
            ke(ot, (Dt) => {
              D() && Dt(at);
            });
          }
          var Xt = R(ot);
          Rt(Xt, 1, u, (Dt) => Dt.id, (Dt, St) => {
            var fn = et();
            const Jt = /* @__PURE__ */ pe(() => l().get(h(St).id));
            var ft = be(fn);
            {
              var ji = (tr) => {
                const Qt = /* @__PURE__ */ pe(() => Qn(h(Jt))), Lo = /* @__PURE__ */ pe(() => Oe == null ? void 0 : Oe(h(Jt))), Io = /* @__PURE__ */ pe(() => Qe(h(Jt))), zo = /* @__PURE__ */ pe(() => oe(h(Jt)));
                nd(tr, ct(
                  {
                    get x() {
                      return h(Jt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(Jt).internals.positionAbsolute.y;
                    }
                  },
                  () => h(Qt),
                  {
                    get selected() {
                      return h(Jt).selected;
                    },
                    get color() {
                      return h(Lo);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return h(Io);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: ve,
                    get class() {
                      return h(zo);
                    }
                  }
                ));
              };
              ke(ft, (tr) => {
                h(Jt) && oc(h(Jt)) && tr(ji);
              });
            }
            L(Dt, fn);
          });
          var Kr = R(Xt);
          Z(ye), ht(ye, (Dt, St) => cs == null ? void 0 : cs(Dt, St), () => ({
            panZoom: c(),
            viewport: se,
            getViewScale: ut,
            translateExtent: f(),
            width: s(),
            height: a(),
            inversePan: ee(),
            zoomStep: F(),
            pannable: K(),
            zoomable: ie()
          })), $e(() => {
            ce(ye, "width", h(g)), ce(ye, "height", h(p)), ce(ye, "viewBox", `${h(b) ?? ""} ${h(N) ?? ""} ${h($) ?? ""} ${h(T) ?? ""}`), st(ye, "--xy-minimap-mask-background-color-props", P()), st(ye, "--xy-minimap-mask-stroke-color-props", H()), st(ye, "--xy-minimap-mask-stroke-width-props", I() ? I() * h(E) : void 0), ce(Kr, "d", `M${h(b) - h(v)},${h(N) - h(v)}h${h($) + h(v) * 2}v${h(T) + h(v) * 2}h${-h($) - h(v) * 2}z
      M${h(d).x ?? ""},${h(d).y ?? ""}h${h(d).width ?? ""}v${h(d).height ?? ""}h${-h(d).width}z`);
          }), L(rt, ye);
        };
        ke(dn, (rt) => {
          c() && rt(Pe);
        });
      }
      L(le, jt);
    },
    $$slots: { default: !0 }
  });
  var ze = he({
    get position() {
      return O();
    },
    set position(le) {
      O(le), y();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(le) {
      D(le), y();
    },
    get nodeStrokeColor() {
      return A();
    },
    set nodeStrokeColor(le) {
      A(le), y();
    },
    get nodeColor() {
      return V();
    },
    set nodeColor(le) {
      V(le), y();
    },
    get nodeClass() {
      return z();
    },
    set nodeClass(le) {
      z(le), y();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(le) {
      S(le), y();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(le) {
      M(le), y();
    },
    get bgColor() {
      return k();
    },
    set bgColor(le) {
      k(le), y();
    },
    get maskColor() {
      return P();
    },
    set maskColor(le) {
      P(le), y();
    },
    get maskStrokeColor() {
      return H();
    },
    set maskStrokeColor(le) {
      H(le), y();
    },
    get maskStrokeWidth() {
      return I();
    },
    set maskStrokeWidth(le) {
      I(le), y();
    },
    get width() {
      return B();
    },
    set width(le) {
      B(le), y();
    },
    get height() {
      return W();
    },
    set height(le) {
      W(le), y();
    },
    get pannable() {
      return K();
    },
    set pannable(le) {
      K(le), y();
    },
    get zoomable() {
      return ie();
    },
    set zoomable(le) {
      ie(le), y();
    },
    get inversePan() {
      return ee();
    },
    set inversePan(le) {
      ee(le), y();
    },
    get zoomStep() {
      return F();
    },
    set zoomStep(le) {
      F(le), y();
    },
    get style() {
      return ue();
    },
    set style(le) {
      ue(le), y();
    },
    get class() {
      return me();
    },
    set class(le) {
      me(le), y();
    }
  });
  return r(), ze;
}
ae(
  rd,
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
    style: {},
    class: {}
  },
  [],
  [],
  !0
);
const Pl = (e) => d0(e);
function Zt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: f, edges: d, domNode: g, nodeLookup: p, nodeOrigin: x, edgeLookup: C, connectionLookup: E } = qe(), m = (b) => {
    var D, A;
    const N = q(p), $ = Pl(b) ? b : N.get(b.id), T = $.parentId ? v0($.position, $.measured, $.parentId, N, q(x)) : $.position, O = {
      ...$,
      position: T,
      width: ((D = $.measured) == null ? void 0 : D.width) ?? $.width,
      height: ((A = $.measured) == null ? void 0 : A.height) ?? $.height
    };
    return Or(O);
  }, _ = (b, N, $ = { replace: !1 }) => {
    var D;
    const T = (D = q(p).get(b)) == null ? void 0 : D.internals.userNode;
    if (!T)
      return;
    const O = typeof N == "function" ? N(T) : N;
    $.replace ? f.update((A) => A.map((V) => V.id === b ? Pl(O) ? O : { ...V, ...O } : V)) : (Object.assign(T, O), f.update((A) => A));
  }, v = (b) => q(p).get(b);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: v,
    getNode: (b) => {
      var N;
      return (N = v(b)) == null ? void 0 : N.internals.userNode;
    },
    getNodes: (b) => b === void 0 ? q(f) : Nl(q(p), b),
    getEdge: (b) => q(C).get(b),
    getEdges: (b) => b === void 0 ? q(d) : Nl(q(C), b),
    setZoom: (b, N) => {
      const $ = q(c);
      return $ ? $.scaleTo(b, { duration: N == null ? void 0 : N.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (b, N) => {
      const $ = q(i), T = q(c);
      return T ? (await T.setViewport({
        x: b.x ?? $.x,
        y: b.y ?? $.y,
        zoom: b.zoom ?? $.zoom
      }, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (b, N, $) => {
      const T = typeof ($ == null ? void 0 : $.zoom) < "u" ? $.zoom : q(u), O = q(c);
      return O ? (await O.setViewport({
        x: q(s) / 2 - b * T,
        y: q(a) / 2 - N * T,
        zoom: T
      }, { duration: $ == null ? void 0 : $.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (b, N) => {
      const $ = q(c);
      if (!$)
        return Promise.resolve(!1);
      const T = ua(b, q(s), q(a), q(l), q(u), (N == null ? void 0 : N.padding) ?? 0.1);
      return await $.setViewport(T, { duration: N == null ? void 0 : N.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (b, N = !0, $) => {
      const T = fl(b), O = T ? b : m(b);
      return O ? ($ || q(f)).filter((D) => {
        const A = q(p).get(D.id);
        if (!A || !T && D.id === b.id)
          return !1;
        const V = Or(A), z = yo(V, O);
        return N && z > 0 || z >= O.width * O.height;
      }) : [];
    },
    isNodeIntersecting: (b, N, $ = !0) => {
      const O = fl(b) ? b : m(b);
      if (!O)
        return !1;
      const D = yo(O, N);
      return $ && D > 0 || D >= O.width * O.height;
    },
    deleteElements: async ({ nodes: b = [], edges: N = [] }) => {
      const { nodes: $, edges: T } = await Qu({
        nodesToRemove: b,
        edgesToRemove: N,
        nodes: q(f),
        edges: q(d),
        onBeforeDelete: q(r)
      });
      return $ && f.update((O) => O.filter((D) => !$.some(({ id: A }) => A === D.id))), T && d.update((O) => O.filter((D) => !T.some(({ id: A }) => A === D.id))), {
        deletedNodes: $,
        deletedEdges: T
      };
    },
    screenToFlowPosition: (b, N = { snapToGrid: !0 }) => {
      const $ = q(g);
      if (!$)
        return b;
      const T = N.snapToGrid ? q(o) : !1, { x: O, y: D, zoom: A } = q(i), { x: V, y: z } = $.getBoundingClientRect(), S = {
        x: b.x - V,
        y: b.y - z
      };
      return To(S, [O, D, A], T !== null, T || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (b) => {
      const N = q(g);
      if (!N)
        return b;
      const { x: $, y: T, zoom: O } = q(i), { x: D, y: A } = N.getBoundingClientRect(), V = rc(b, [$, T, O]);
      return {
        x: V.x + D,
        y: V.y + A
      };
    },
    toObject: () => ({
      nodes: q(f).map((b) => ({
        ...b,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...b.position },
        data: { ...b.data }
      })),
      edges: q(d).map((b) => ({ ...b })),
      viewport: { ...q(i) }
    }),
    updateNode: _,
    updateNodeData: (b, N, $) => {
      var D;
      const T = (D = q(p).get(b)) == null ? void 0 : D.internals.userNode;
      if (!T)
        return;
      const O = typeof N == "function" ? N(T) : N;
      T.data = $ != null && $.replace ? O : { ...T.data, ...O }, f.update((A) => A);
    },
    getNodesBounds: (b) => {
      const N = q(p), $ = q(x);
      return f0(b, { nodeLookup: N, nodeOrigin: $ });
    },
    getHandleConnections: ({ type: b, id: N, nodeId: $ }) => {
      var T;
      return Array.from(((T = q(E).get(`${$}-${b}-${N ?? null}`)) == null ? void 0 : T.values()) ?? []);
    },
    viewport: i
  };
}
function Nl(e, t) {
  var r;
  const n = [];
  for (const o of t) {
    const i = e.get(o);
    if (i) {
      const s = "internals" in i ? (r = i.internals) == null ? void 0 : r.userNode : i;
      n.push(s);
    }
  }
  return n;
}
var f2 = /* @__PURE__ */ re('<div class="svelte-flow__node-toolbar"><!></div>');
function od(e, t) {
  ge(t, !1);
  const [n, r] = tt(), o = () => Q(_, "$nodes", n), i = () => Q(m, "$nodeLookup", n), s = () => Q(E, "$viewport", n), a = () => Q(C, "$domNode", n), l = ne(), u = ne(), c = ne();
  let f = w(t, "nodeId", 12, void 0), d = w(t, "position", 12, void 0), g = w(t, "align", 12, void 0), p = w(t, "offset", 12, void 0), x = w(t, "isVisible", 12, void 0);
  const { domNode: C, viewport: E, nodeLookup: m, nodes: _ } = qe(), { getNodesBounds: v } = Zt(), b = ar("svelteflow__node_id");
  let N = ne(), $ = ne([]), T = p() !== void 0 ? p() : 10, O = d() !== void 0 ? d() : Ee.Top, D = g() !== void 0 ? g() : "center";
  fe(
    () => (o(), j(f()), i()),
    () => {
      o();
      const M = Array.isArray(f()) ? f() : [f() || b];
      U($, M.reduce(
        (k, P) => {
          const H = i().get(P);
          return H && k.push(H), k;
        },
        []
      ));
    }
  ), fe(
    () => (h($), s()),
    () => {
      const M = v(h($));
      M && U(N, T0(M, s(), O, T, D));
    }
  ), fe(() => h($), () => {
    U(l, h($).length === 0 ? 1 : Math.max(...h($).map((M) => (M.internals.z || 5) + 1)));
  }), fe(() => o(), () => {
    U(u, o().filter((M) => M.selected).length);
  }), fe(
    () => (j(x()), h($), h(u)),
    () => {
      U(c, typeof x() == "boolean" ? x() : h($).length === 1 && h($)[0].selected && h(u) === 1);
    }
  ), gt(), He();
  var A = et(), V = be(A);
  {
    var z = (M) => {
      var k = f2(), P = X(k);
      vt(P, t, "default", {}), Z(k), ht(k, (H, I) => kr == null ? void 0 : kr(H, I), () => ({ domNode: a() })), $e(
        (H) => {
          ce(k, "data-id", H), st(k, "position", "absolute"), st(k, "transform", h(N)), st(k, "z-index", h(l));
        },
        [
          () => h($).reduce((H, I) => `${H}${I.id} `, "").trim()
        ],
        pe
      ), L(M, k);
    };
    ke(V, (M) => {
      a() && h(c) && h($) && M(z);
    });
  }
  L(e, A);
  var S = he({
    get nodeId() {
      return f();
    },
    set nodeId(M) {
      f(M), y();
    },
    get position() {
      return d();
    },
    set position(M) {
      d(M), y();
    },
    get align() {
      return g();
    },
    set align(M) {
      g(M), y();
    },
    get offset() {
      return p();
    },
    set offset(M) {
      p(M), y();
    },
    get isVisible() {
      return x();
    },
    set isVisible(M) {
      x(M), y();
    }
  });
  return r(), S;
}
ae(
  od,
  {
    nodeId: {},
    position: {},
    align: {},
    offset: {},
    isVisible: {}
  },
  ["default"],
  [],
  !0
);
function pr(e) {
  const { nodes: t, nodeLookup: n } = qe();
  let r = [], o = !0;
  return Fn([t, n], ([, i], s) => {
    var c;
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const f of u) {
      const d = (c = i.get(f)) == null ? void 0 : c.internals.userNode;
      d && a.push({
        id: d.id,
        type: d.type,
        data: d.data
      });
    }
    (!I0(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Tl = "tinyflow-component";
class fw {
  constructor(t) {
    yt(this, "options");
    yt(this, "rootEl");
    yt(this, "svelteFlowInstance");
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
    const t = document.createElement(Tl);
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
    const n = document.createElement(Tl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const g2 = () => {
  const e = we([]), t = we([]), n = we({ x: 250, y: 100, zoom: 1 });
  return {
    nodes: e,
    edges: t,
    viewport: n,
    init: (r, o) => {
      e.set(r), t.set(o);
    },
    addNode: (r) => {
      e.update((o) => [...o, r]);
    },
    removeNode: (r) => {
      e.update((o) => o.filter((i) => i.id !== r));
    },
    updateNode: (r, o) => {
      e.update((i) => i.map((s) => s.id === r ? o : s));
    },
    updateNodeData: (r, o) => {
      e.update(
        (i) => i.map((s) => s.id === r ? { ...s, data: { ...s.data, ...o } } : s)
      );
    },
    selectNodeOnly: (r) => {
      e.update(
        (o) => o.map(
          (i) => i.id === r ? { ...i, selected: !0 } : { ...i, selected: !1 }
        )
      );
    },
    addEdge: (r) => {
      t.update((o) => [...o, r]);
    },
    removeEdge: (r) => {
      t.update((o) => o.filter((i) => i.id !== r));
    },
    updateEdge: (r, o) => {
      t.update((i) => i.map((s) => s.id === r ? o : s));
    },
    updateEdgeData: (r, o) => {
      t.update((i) => i.map((s) => s.id === r ? { ...s, data: o } : s));
    }
  };
}, Qo = g2();
var h2 = /* @__PURE__ */ re("<button><!></button>");
function Ge(e, t) {
  ge(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = h2();
  let i;
  var s = X(o);
  return lr(s, () => n() ?? dt), Z(o), $e(() => i = sn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), L(e, o), he({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
ae(Ge, { children: {} }, [], [], !0);
var v2 = /* @__PURE__ */ re("<input>");
function id(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Et(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = v2();
  io(r);
  let o;
  $e(() => o = sn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), he();
}
ae(id, {}, [], [], !0);
var p2 = /* @__PURE__ */ re("<input>");
function _t(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Et(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = p2();
  io(r);
  let o;
  $e(() => o = sn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), he();
}
ae(_t, {}, [], [], !0);
var m2 = /* @__PURE__ */ re("<textarea></textarea>");
function kt(e, t) {
  ge(t, !0);
  const n = /* @__PURE__ */ Et(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = m2();
  a1(r);
  let o;
  $e(() => o = sn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), L(e, r), he();
}
ae(kt, {}, [], [], !0);
var y2 = /* @__PURE__ */ re('<div role="button"><!></div>'), w2 = /* @__PURE__ */ re("<div></div>");
function sd(e, t) {
  const n = nt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = nt(n, ["items", "onChange", "activeIndex"]);
  ge(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, f) {
    var d;
    s(f), (d = i()) == null || d(c, f);
  }
  He();
  var l = w2();
  let u;
  return Rt(l, 5, o, Vi, (c, f, d) => {
    var g = y2();
    ce(g, "tabindex", d), g.__click = () => a(h(f), d), g.__keydown = (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), a(h(f), d));
    };
    var p = X(g);
    {
      var x = (E) => {
        var m = Be();
        $e(() => It(m, h(f).label)), L(E, m);
      }, C = (E) => {
        var m = et(), _ = be(m);
        lr(_, () => h(f).label ?? dt), L(E, m);
      };
      ke(p, (E) => {
        typeof h(f).label == "string" ? E(x) : E(C, !1);
      });
    }
    Z(g), $e(() => Ct(g, 1, `tf-tabs-item ${(d === s() ? "active" : "") ?? ""}`)), L(c, g);
  }), Z(l), $e(() => u = sn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), he({
    get items() {
      return o();
    },
    set items(c) {
      o(c), y();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), y();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(c) {
      s(c), y();
    }
  });
}
Ai(["click", "keydown"]);
ae(sd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var _2 = (e, t, n) => t(h(n)), x2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, b2 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), C2 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), k2 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), E2 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), $2 = /* @__PURE__ */ re("<div></div>");
const S2 = {
  hash: "svelte-1jfktzw",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function ad(e, t) {
  ge(t, !0), je(e, S2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Vt([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = $2();
  return Rt(s, 21, n, Vi, (a, l, u) => {
    var c = E2(), f = X(c);
    ce(f, "tabindex", u), f.__click = [_2, i, l], f.__keydown = [x2, i, l];
    var d = X(f);
    {
      var g = (v) => {
        var b = b2(), N = X(b);
        Xn(N, {
          get target() {
            return h(l).icon;
          }
        }), Z(b), L(v, b);
      };
      ke(d, (v) => {
        h(l).icon && v(g);
      });
    }
    var p = R(d, 2);
    Xn(p, {
      get target() {
        return h(l).title;
      }
    });
    var x = R(p, 2);
    Z(f);
    var C = R(f, 2);
    {
      var E = (v) => {
        var b = C2(), N = X(b);
        Xn(N, {
          get target() {
            return h(l).description;
          }
        }), Z(b), L(v, b);
      };
      ke(C, (v) => {
        h(l).description && v(E);
      });
    }
    var m = R(C, 2);
    {
      var _ = (v) => {
        var b = k2(), N = X(b);
        Xn(N, {
          get target() {
            return h(l).content;
          }
        }), Z(b), L(v, b);
      };
      ke(m, (v) => {
        o().includes(h(l).key) && v(_);
      });
    }
    Z(c), $e((v) => Ct(x, 1, `tf-collapse-item-title-arrow ${v ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), L(a, c);
  }), Z(s), $e(() => {
    ce(s, "style", t.style), Ct(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, s), he({
    get items() {
      return n();
    },
    set items(a) {
      n(a), y();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), y();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), y();
    }
  });
}
Ai(["click", "keydown"]);
ae(ad, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  ge(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = be(r);
  {
    var i = (a) => {
      var l = et(), u = be(l);
      lr(u, () => n() ?? dt), L(a, l);
    }, s = (a) => {
      var l = et(), u = be(l);
      mu(u, n), L(a, l);
    };
    ke(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return L(e, r), he({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
ae(Xn, { target: {} }, [], [], !0);
var P2 = (e, t, n) => t(h(n)), N2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), T2 = /* @__PURE__ */ re('<div class="tf-select-content-children"><!></div>'), M2 = /* @__PURE__ */ re('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), H2 = /* @__PURE__ */ re('<div class="tf-select-content nopan nodrag"><!></div>'), D2 = /* @__PURE__ */ re("<!> <!>", 1), A2 = /* @__PURE__ */ re('<div class="tf-select-input-placeholder"> </div>'), V2 = /* @__PURE__ */ re('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), O2 = /* @__PURE__ */ re("<div><!></div>");
function yn(e, t) {
  ge(t, !0);
  const n = (_, v = dt) => {
    var b = et(), N = be(b);
    Rt(N, 19, v, ($, T) => `${T}_${$.value}`, ($, T) => {
      var O = M2(), D = be(O);
      D.__click = [P2, x, T];
      var A = X(D), V = X(A);
      {
        var z = (P) => {
          var H = N2();
          L(P, H);
        };
        ke(V, (P) => {
          h(T).children && h(T).children.length > 0 && P(z);
        });
      }
      Z(A);
      var S = R(A, 2);
      Xn(S, {
        get target() {
          return h(T).label;
        }
      }), Z(D);
      var M = R(D, 2);
      {
        var k = (P) => {
          var H = T2(), I = X(H);
          n(I, () => h(T).children), Z(H), L(P, H);
        };
        ke(M, (P) => {
          h(T).children && h(T).children.length > 0 && (l() || c().includes(h(T).value)) && P(k);
        });
      }
      L($, O);
    }), L(_, b);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), f = w(t, "placeholder", 7), d = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "items",
    "onExpand",
    "onSelect",
    "value",
    "defaultValue",
    "expandAll",
    "multiple",
    "expandValue",
    "placeholder"
  ]), g = /* @__PURE__ */ Ne(() => {
    const _ = [], v = (b) => {
      for (let N of b)
        s().length > 0 ? s().includes(N.value) && _.push(N) : a().includes(N.value) && _.push(N), N.children && N.children.length > 0 && v(N.children);
    };
    return v(r()), _;
  }), p;
  function x(_) {
    var v, b;
    if (_.children && _.children.length > 0) {
      (v = o()) == null || v(_);
      return;
    } else
      p == null || p.hide(), (b = i()) == null || b(_);
  }
  var C = O2();
  let E;
  var m = X(C);
  return An(
    Oo(m, {
      floating: (v) => {
        var b = H2(), N = X(b);
        n(N, r), Z(b), L(v, b);
      },
      children: (v, b) => {
        var N = V2();
        let $;
        var T = X(N);
        Rt(
          T,
          23,
          () => h(g),
          (O, D) => `${D}_${O.value}`,
          (O, D, A) => {
            var V = et(), z = be(V);
            {
              var S = (k) => {
                var P = et(), H = be(P);
                {
                  var I = (B) => {
                    Xn(B, {
                      get target() {
                        return h(D).label;
                      }
                    });
                  };
                  ke(H, (B) => {
                    h(A) === 0 && B(I);
                  });
                }
                L(k, P);
              }, M = (k) => {
                var P = D2(), H = be(P);
                Xn(H, {
                  get target() {
                    return h(D).label;
                  }
                });
                var I = R(H, 2);
                {
                  var B = (W) => {
                    var K = Be(",");
                    L(W, K);
                  };
                  ke(I, (W) => {
                    h(A) < h(g).length - 1 && W(B);
                  });
                }
                L(k, P);
              };
              ke(z, (k) => {
                u() ? k(M, !1) : k(S);
              });
            }
            L(O, V);
          },
          (O) => {
            var D = A2(), A = X(D, !0);
            Z(D), $e(() => It(A, f())), L(O, D);
          }
        ), Z(T), Te(2), Z(N), $e(() => $ = sn(N, $, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), L(v, N);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (v) => p = v,
    () => p
  ), Z(C), $e(() => E = sn(C, E, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), L(e, C), he({
    get items() {
      return r();
    },
    set items(_) {
      r(_), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(_) {
      o(_), y();
    },
    get onSelect() {
      return i();
    },
    set onSelect(_) {
      i(_), y();
    },
    get value() {
      return s();
    },
    set value(_ = []) {
      s(_), y();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(_ = []) {
      a(_), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(_ = !0) {
      l(_), y();
    },
    get multiple() {
      return u();
    },
    set multiple(_ = !1) {
      u(_), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(_ = []) {
      c(_), y();
    },
    get placeholder() {
      return f();
    },
    set placeholder(_) {
      f(_), y();
    }
  });
}
Ai(["click"]);
ae(
  yn,
  {
    items: {},
    onExpand: {},
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
const _o = Math.min, $r = Math.max, xi = Math.round, vn = (e) => ({
  x: e,
  y: e
}), L2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, I2 = {
  start: "end",
  end: "start"
};
function As(e, t, n) {
  return $r(e, _o(t, n));
}
function Do(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function Ao(e) {
  return e.split("-")[1];
}
function ld(e) {
  return e === "x" ? "y" : "x";
}
function va(e) {
  return e === "y" ? "height" : "width";
}
function Ir(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function pa(e) {
  return ld(Ir(e));
}
function z2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = pa(e), i = va(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = bi(s)), [s, bi(s)];
}
function R2(e) {
  const t = bi(e);
  return [Vs(e), t, Vs(t)];
}
function Vs(e) {
  return e.replace(/start|end/g, (t) => I2[t]);
}
function B2(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Y2(e, t, n, r) {
  const o = Ao(e);
  let i = B2(fr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Vs)))), i;
}
function bi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => L2[t]);
}
function Z2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ud(e) {
  return typeof e != "number" ? Z2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ci(e) {
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
function Ml(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ir(t), s = pa(t), a = va(s), l = fr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ao(t)) {
    case "start":
      g[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += d * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const X2 = async (e, t, n) => {
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
    x: c,
    y: f
  } = Ml(u, r, l), d = r, g = {}, p = 0;
  for (let x = 0; x < a.length; x++) {
    const {
      name: C,
      fn: E
    } = a[x], {
      x: m,
      y: _,
      data: v,
      reset: b
    } = await E({
      x: c,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = m ?? c, f = _ ?? f, g = {
      ...g,
      [C]: {
        ...g[C],
        ...v
      }
    }, b && p <= 50 && (p++, typeof b == "object" && (b.placement && (d = b.placement), b.rects && (u = b.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : b.rects), {
      x: c,
      y: f
    } = Ml(u, d, l)), x = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
  };
};
async function cd(e, t) {
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
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: g = 0
  } = Do(t, e), p = ud(g), C = a[d ? f === "floating" ? "reference" : "floating" : f], E = Ci(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(C))) == null || n ? C : C.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), m = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) ? await (i.getScale == null ? void 0 : i.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = Ci(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: _,
    strategy: l
  }) : m);
  return {
    top: (E.top - b.top + p.top) / v.y,
    bottom: (b.bottom - E.bottom + p.bottom) / v.y,
    left: (E.left - b.left + p.left) / v.x,
    right: (b.right - E.right + p.right) / v.x
  };
}
const W2 = (e) => ({
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
      padding: c = 0
    } = Do(e, t) || {};
    if (u == null)
      return {};
    const f = ud(c), d = {
      x: n,
      y: r
    }, g = pa(o), p = va(g), x = await s.getDimensions(u), C = g === "y", E = C ? "top" : "left", m = C ? "bottom" : "right", _ = C ? "clientHeight" : "clientWidth", v = i.reference[p] + i.reference[g] - d[g] - i.floating[p], b = d[g] - i.reference[g], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let $ = N ? N[_] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(N))) && ($ = a.floating[_] || i.floating[p]);
    const T = v / 2 - b / 2, O = $ / 2 - x[p] / 2 - 1, D = _o(f[E], O), A = _o(f[m], O), V = D, z = $ - x[p] - A, S = $ / 2 - x[p] / 2 + T, M = As(V, S, z), k = !l.arrow && Ao(o) != null && S !== M && i.reference[p] / 2 - (S < V ? D : A) - x[p] / 2 < 0, P = k ? S < V ? S - V : S - z : 0;
    return {
      [g]: d[g] + P,
      data: {
        [g]: M,
        centerOffset: S - M - P,
        ...k && {
          alignmentOffset: P
        }
      },
      reset: k
    };
  }
}), F2 = function(e) {
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
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: x = !0,
        ...C
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const E = fr(o), m = Ir(a), _ = fr(a) === a, v = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), b = d || (_ || !x ? [bi(a)] : R2(a)), N = p !== "none";
      !d && N && b.push(...Y2(a, x, p, v));
      const $ = [a, ...b], T = await cd(t, C), O = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && O.push(T[E]), f) {
        const S = z2(o, s, v);
        O.push(T[S[0]], T[S[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: O
      }], !O.every((S) => S <= 0)) {
        var A, V;
        const S = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, M = $[S];
        if (M)
          return {
            data: {
              index: S,
              overflows: D
            },
            reset: {
              placement: M
            }
          };
        let k = (V = D.filter((P) => P.overflows[0] <= 0).sort((P, H) => P.overflows[1] - H.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!k)
          switch (g) {
            case "bestFit": {
              var z;
              const P = (z = D.filter((H) => {
                if (N) {
                  const I = Ir(H.placement);
                  return I === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((I) => I > 0).reduce((I, B) => I + B, 0)]).sort((H, I) => H[1] - I[1])[0]) == null ? void 0 : z[0];
              P && (k = P);
              break;
            }
            case "initialPlacement":
              k = a;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
async function K2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = fr(n), a = Ao(n), l = Ir(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = Do(t, e);
  let {
    mainAxis: d,
    crossAxis: g,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof p == "number" && (g = a === "end" ? p * -1 : p), l ? {
    x: g * c,
    y: d * u
  } : {
    x: d * u,
    y: g * c
  };
}
const q2 = function(e) {
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
      } = t, l = await K2(t, e);
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
}, G2 = function(e) {
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
          fn: (C) => {
            let {
              x: E,
              y: m
            } = C;
            return {
              x: E,
              y: m
            };
          }
        },
        ...l
      } = Do(e, t), u = {
        x: n,
        y: r
      }, c = await cd(t, l), f = Ir(fr(o)), d = ld(f);
      let g = u[d], p = u[f];
      if (i) {
        const C = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", m = g + c[C], _ = g - c[E];
        g = As(m, g, _);
      }
      if (s) {
        const C = f === "y" ? "top" : "left", E = f === "y" ? "bottom" : "right", m = p + c[C], _ = p - c[E];
        p = As(m, p, _);
      }
      const x = a.fn({
        ...t,
        [d]: g,
        [f]: p
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [d]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function Fi() {
  return typeof window < "u";
}
function Fr(e) {
  return dd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function In(e) {
  var t;
  return (t = (dd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function dd(e) {
  return Fi() ? e instanceof Node || e instanceof zt(e).Node : !1;
}
function an(e) {
  return Fi() ? e instanceof Element || e instanceof zt(e).Element : !1;
}
function wn(e) {
  return Fi() ? e instanceof HTMLElement || e instanceof zt(e).HTMLElement : !1;
}
function Hl(e) {
  return !Fi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof zt(e).ShadowRoot;
}
function Vo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ln(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function U2(e) {
  return ["table", "td", "th"].includes(Fr(e));
}
function Ki(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ma(e) {
  const t = ya(), n = an(e) ? ln(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function j2(e) {
  let t = Jn(e);
  for (; wn(t) && !zr(t); ) {
    if (ma(t))
      return t;
    if (Ki(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function ya() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zr(e) {
  return ["html", "body", "#document"].includes(Fr(e));
}
function ln(e) {
  return zt(e).getComputedStyle(e);
}
function qi(e) {
  return an(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jn(e) {
  if (Fr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hl(e) && e.host || // Fallback.
    In(e)
  );
  return Hl(t) ? t.host : t;
}
function fd(e) {
  const t = Jn(e);
  return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wn(t) && Vo(t) ? t : fd(t);
}
function gd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = fd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = zt(o);
  return i ? (Os(s), t.concat(s, s.visualViewport || [], Vo(o) ? o : [], [])) : t.concat(o, gd(o, []));
}
function Os(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hd(e) {
  const t = ln(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = wn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = xi(n) !== i || xi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function vd(e) {
  return an(e) ? e : e.contextElement;
}
function Sr(e) {
  const t = vd(e);
  if (!wn(t))
    return vn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = hd(t);
  let s = (i ? xi(n.width) : n.width) / r, a = (i ? xi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const J2 = /* @__PURE__ */ vn(0);
function pd(e) {
  const t = zt(e);
  return !ya() || !t.visualViewport ? J2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Q2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== zt(e) ? !1 : t;
}
function xo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = vd(e);
  let s = vn(1);
  t && (r ? an(r) && (s = Sr(r)) : s = Sr(e));
  const a = Q2(i, n, r) ? pd(i) : vn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const d = zt(i), g = r && an(r) ? zt(r) : r;
    let p = d, x = Os(p);
    for (; x && r && g !== p; ) {
      const C = Sr(x), E = x.getBoundingClientRect(), m = ln(x), _ = E.left + (x.clientLeft + parseFloat(m.paddingLeft)) * C.x, v = E.top + (x.clientTop + parseFloat(m.paddingTop)) * C.y;
      l *= C.x, u *= C.y, c *= C.x, f *= C.y, l += _, u += v, p = zt(x), x = Os(p);
    }
  }
  return Ci({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function wa(e, t) {
  const n = qi(e).scrollLeft;
  return t ? t.left + n : xo(In(e)).left + n;
}
function md(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    wa(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function em(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = In(r), a = t ? Ki(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = vn(1);
  const c = vn(0), f = wn(r);
  if ((f || !f && !i) && ((Fr(r) !== "body" || Vo(s)) && (l = qi(r)), wn(r))) {
    const g = xo(r);
    u = Sr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const d = s && !f && !i ? md(s, l, !0) : vn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function tm(e) {
  return Array.from(e.getClientRects());
}
function nm(e) {
  const t = In(e), n = qi(e), r = e.ownerDocument.body, o = $r(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = $r(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + wa(e);
  const a = -n.scrollTop;
  return ln(r).direction === "rtl" && (s += $r(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function rm(e, t) {
  const n = zt(e), r = In(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = ya();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function om(e, t) {
  const n = xo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = wn(e) ? Sr(e) : vn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Dl(e, t, n) {
  let r;
  if (t === "viewport")
    r = rm(e, n);
  else if (t === "document")
    r = nm(In(e));
  else if (an(t))
    r = om(t, n);
  else {
    const o = pd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ci(r);
}
function yd(e, t) {
  const n = Jn(e);
  return n === t || !an(n) || zr(n) ? !1 : ln(n).position === "fixed" || yd(n, t);
}
function im(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = gd(e, []).filter((a) => an(a) && Fr(a) !== "body"), o = null;
  const i = ln(e).position === "fixed";
  let s = i ? Jn(e) : e;
  for (; an(s) && !zr(s); ) {
    const a = ln(s), l = ma(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Vo(s) && !l && yd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Jn(s);
  }
  return t.set(e, r), r;
}
function sm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ki(t) ? [] : im(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Dl(t, c, o);
    return u.top = $r(f.top, u.top), u.right = _o(f.right, u.right), u.bottom = _o(f.bottom, u.bottom), u.left = $r(f.left, u.left), u;
  }, Dl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function am(e) {
  const {
    width: t,
    height: n
  } = hd(e);
  return {
    width: t,
    height: n
  };
}
function lm(e, t, n) {
  const r = wn(t), o = In(t), i = n === "fixed", s = xo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = vn(0);
  if (r || !r && !i)
    if ((Fr(t) !== "body" || Vo(o)) && (a = qi(t)), r) {
      const d = xo(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else o && (l.x = wa(o));
  const u = o && !r && !i ? md(o, a) : vn(0), c = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function fs(e) {
  return ln(e).position === "static";
}
function Al(e, t) {
  if (!wn(e) || ln(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return In(e) === n && (n = n.ownerDocument.body), n;
}
function wd(e, t) {
  const n = zt(e);
  if (Ki(e))
    return n;
  if (!wn(e)) {
    let o = Jn(e);
    for (; o && !zr(o); ) {
      if (an(o) && !fs(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = Al(e, t);
  for (; r && U2(r) && fs(r); )
    r = Al(r, t);
  return r && zr(r) && fs(r) && !ma(r) ? n : r || j2(e) || n;
}
const um = async function(e) {
  const t = this.getOffsetParent || wd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: lm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function cm(e) {
  return ln(e).direction === "rtl";
}
const dm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: em,
  getDocumentElement: In,
  getClippingRect: sm,
  getOffsetParent: wd,
  getElementRects: um,
  getClientRects: tm,
  getDimensions: am,
  getScale: Sr,
  isElement: an,
  isRTL: cm
}, fm = q2, gm = G2, hm = F2, vm = W2, pm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: dm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return X2(e, t, {
    ...o,
    platform: i
  });
}, mm = ({
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
    const E = document.querySelector(e);
    if (E)
      e = E;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const E = document.querySelector(n);
    if (E)
      u = E;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function f() {
    pm(e, u, {
      placement: r,
      middleware: [
        fm(o),
        // 手动偏移配置
        hm(i),
        //自动翻转
        gm(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [vm({ element: c })] : []
      ]
    }).then(({ x: E, y: m, placement: _, middlewareData: v }) => {
      if (Object.assign(u.style, {
        left: `${E}px`,
        top: `${m}px`
      }), l) {
        const { x: b, y: N } = v.arrow, $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: b != null ? `${b}px` : "",
          top: N != null ? `${N}px` : "",
          right: "",
          bottom: "",
          [$]: "2px"
        });
      }
    });
  }
  let d = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), d = !0, f();
  }
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), d = !1;
  }
  function x(E) {
    E.stopPropagation(), d ? p() : g();
  }
  function C(E) {
    u.contains(E.target) || p();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((E) => {
    e.addEventListener(E, x);
  }), document.addEventListener("click", C), {
    destroy() {
      t.forEach((E) => {
        e.removeEventListener(E, x);
      }), document.removeEventListener("click", C);
    },
    hide() {
      p();
    },
    isVisible() {
      return d;
    }
  };
};
var ym = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Oo(e, t) {
  ge(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  Yt(() => (a = mm({
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
  var u = ym(), c = X(u), f = X(c);
  lr(f, n), Z(c), An(c, (p) => i = p, () => i);
  var d = R(c, 2), g = X(d);
  return lr(g, r), Z(d), An(d, (p) => s = p, () => s), Z(u), L(e, u), he({
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
  });
}
ae(Oo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Je(e, t) {
  ge(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = et(), a = be(s);
  return p1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    $e(() => c = sn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
      },
      void 0,
      l.namespaceURI === Rl,
      l.nodeName.includes("-")
    ));
    var f = et(), d = be(f);
    lr(d, () => n() ?? dt), L(u, f);
  }), L(e, s), he({
    get children() {
      return n();
    },
    set children(l) {
      n(l), y();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), y();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), y();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), y();
    }
  });
}
ae(Je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var wm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const _m = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Gi(e, t) {
  ge(t, !0), je(e, _m);
  const n = /* @__PURE__ */ Et(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ge(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = wm();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), he();
}
ae(Gi, {}, [], [], !0);
const xm = () => {
  const e = qe();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
}, Rr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, bm = () => {
  const { nodes: e, nodeLookup: t } = qe();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = q(t).get(r)) == null ? void 0 : s.internals.userNode;
      if (i) {
        const a = Rr(), l = {
          ...i,
          id: a,
          position: {
            x: i.position.x + 50,
            y: i.position.y + 50
          }
        };
        e.update((u) => [...u, l]), e.update(
          (u) => u.map(
            (c) => c.id === a ? { ...c, selected: !0 } : { ...c, selected: !1 }
          )
        );
      }
    }
  };
};
var Cm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), km = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Em = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), $m = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), Sm = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Pm = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Cn(e, t) {
  ge(t, !0), je(e, Pm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "showSourceHandle", 7, !0), f = w(t, "showTargetHandle", 7, !0);
  let d = n().expand ? ["key"] : [];
  const { updateNodeData: g } = Zt(), p = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ], { deleteNode: x } = xm(), { copyNode: C } = bm();
  var E = Sm(), m = be(E);
  {
    var _ = (V) => {
      od(V, {
        get position() {
          return Ee.Top;
        },
        align: "end",
        children: (z, S) => {
          var M = $m(), k = X(M);
          {
            var P = (K) => {
              Ge(K, {
                class: "tf-node-toolbar-item",
                children: (ie, ee) => {
                  var F = Cm();
                  L(ie, F);
                },
                $$slots: { default: !0 }
              });
            };
            ke(k, (K) => {
              a() && K(P);
            });
          }
          var H = R(k, 2);
          {
            var I = (K) => {
              Ge(K, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ie, ee) => {
                  var F = km();
                  L(ie, F);
                },
                $$slots: { default: !0 }
              });
            };
            ke(H, (K) => {
              l() && K(I);
            });
          }
          var B = R(H, 2);
          {
            var W = (K) => {
              Ge(K, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ie, ee) => {
                  var F = Em();
                  L(ie, F);
                },
                $$slots: { default: !0 }
              });
            };
            ke(B, (K) => {
              u() && K(W);
            });
          }
          Z(M), L(z, M);
        },
        $$slots: { default: !0 }
      });
    };
    ke(m, (V) => {
      (a() || l() || u()) && V(_);
    });
  }
  var v = R(m, 2), b = R(X(v), 2), N = X(b);
  ad(N, {
    items: p,
    activeKeys: d,
    onChange: (V, z) => {
      g(r(), { expand: z == null ? void 0 : z.includes("key") });
    }
  }), Z(b), Z(v);
  var $ = R(v, 2);
  {
    var T = (V) => {
      jn(V, {
        type: "target",
        get position() {
          return Ee.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ke($, (V) => {
      f() && V(T);
    });
  }
  var O = R($, 2);
  {
    var D = (V) => {
      jn(V, {
        type: "source",
        get position() {
          return Ee.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ke(O, (V) => {
      c() && V(D);
    });
  }
  var A = R(O, 2);
  return lr(A, () => i() ?? dt), L(e, E), he({
    get data() {
      return n();
    },
    set data(V) {
      n(V), y();
    },
    get id() {
      return r();
    },
    set id(V = "") {
      r(V), y();
    },
    get icon() {
      return o();
    },
    set icon(V) {
      o(V), y();
    },
    get handle() {
      return i();
    },
    set handle(V) {
      i(V), y();
    },
    get children() {
      return s();
    },
    set children(V) {
      s(V), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(V = !0) {
      a(V), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(V = !0) {
      l(V), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(V = !0) {
      u(V), y();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(V = !0) {
      c(V), y();
    },
    get showTargetHandle() {
      return f();
    },
    set showTargetHandle(V = !0) {
      f(V), y();
    }
  });
}
ae(
  Cn,
  {
    data: {},
    id: {},
    icon: {},
    handle: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {},
    showSourceHandle: {},
    showTargetHandle: {}
  },
  [],
  [],
  !0
);
function mt() {
  return ar("svelteflow__node_id");
}
const _d = [
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
], Nm = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var Tm = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Mm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Hm = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Dm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function xd(e, t) {
  ge(t, !0), je(e, Dm);
  const [n, r] = tt(), o = () => Q(h(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = mt(), l = /* @__PURE__ */ Ne(() => pr(a)), u = /* @__PURE__ */ Ne(() => {
    var T, O;
    return {
      ...i(),
      ...(O = (T = o()) == null ? void 0 : T.data) == null ? void 0 : O.parameters[s()]
    };
  });
  const { updateNodeData: c } = Zt(), f = (T) => {
    const O = T.target.value;
    c(a, (D) => {
      let A = D.data.parameters;
      return A[s()].name = O, { parameters: A };
    });
  }, d = (T) => {
    const O = T.target.checked;
    c(a, (D) => {
      let A = D.data.parameters;
      return A[s()].required = O, { parameters: A };
    });
  }, g = (T) => {
    const O = T.value;
    O && c(a, (D) => {
      let A = D.data.parameters;
      return A[s()].dataType = O, { parameters: A };
    });
  };
  let p;
  const x = () => {
    c(a, (T) => {
      let O = T.data.parameters;
      return O.splice(s(), 1), { parameters: [...O] };
    }), p == null || p.hide();
  };
  var C = Hm(), E = be(C), m = X(E);
  _t(m, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), Z(E);
  var _ = R(E, 2), v = X(_);
  id(v, {
    get checked() {
      return h(u).required;
    },
    onchange: d
  }), Z(_);
  var b = R(_, 2), N = X(b);
  An(
    Oo(N, {
      placement: "bottom",
      floating: (O) => {
        var D = Tm(), A = X(D), V = R(X(A));
        const z = /* @__PURE__ */ Ne(() => h(u).dataType ? [h(u).dataType] : ["String"]);
        yn(V, {
          items: _d,
          style: "width: 100%",
          onSelect: g,
          get value() {
            return h(z);
          }
        }), Z(A);
        var S = R(A, 2), M = R(X(S));
        kt(M, { rows: 1, style: "width: 100%;" }), Z(S);
        var k = R(S, 2), P = R(X(k));
        kt(P, { rows: 3, style: "width: 100%;" }), Z(k);
        var H = R(k, 2), I = X(H);
        Ge(I, {
          onclick: x,
          children: (B, W) => {
            Te();
            var K = Be("删除");
            L(B, K);
          },
          $$slots: { default: !0 }
        }), Z(H), Z(D), L(O, D);
      },
      children: (O, D) => {
        Ge(O, {
          class: "input-btn-more",
          children: (A, V) => {
            var z = Mm();
            L(A, z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => p = O,
    () => p
  ), Z(b), L(e, C);
  var $ = he({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), y();
    },
    get index() {
      return s();
    },
    set index(T) {
      s(T), y();
    }
  });
  return r(), $;
}
ae(xd, { parameter: {}, index: {} }, [], [], !0);
var Am = /* @__PURE__ */ re('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Vm = /* @__PURE__ */ re('<div class="none-params svelte-3n0wca">无输入参数</div>'), Om = /* @__PURE__ */ re('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Lm = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function bd(e, t) {
  ge(t, !0), je(e, Lm);
  const [n, r] = tt(), o = () => Q(h(s), "$node", n);
  let i = mt(), s = /* @__PURE__ */ Ne(() => pr(i)), a = /* @__PURE__ */ Ne(() => {
    var d, g;
    return [...((g = (d = o()) == null ? void 0 : d.data) == null ? void 0 : g.parameters) || []];
  });
  var l = Om(), u = X(l);
  {
    var c = (d) => {
      var g = Am();
      Te(4), L(d, g);
    };
    ke(u, (d) => {
      h(a).length !== 0 && d(c);
    });
  }
  var f = R(u, 2);
  Rt(
    f,
    19,
    () => h(a),
    (d) => d.id,
    (d, g, p) => {
      xd(d, {
        get parameter() {
          return h(g);
        },
        get index() {
          return h(p);
        }
      });
    },
    (d) => {
      var g = Vm();
      L(d, g);
    }
  ), Z(l), L(e, l), he(), r();
}
ae(bd, {}, [], [], !0);
const Cd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Rr()), Cd(t.children);
  });
}, zn = () => {
  const { updateNodeData: e } = Zt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Cd(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Rr()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], {
          [n]: [...s]
        };
      });
    }
  };
};
var Im = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), zm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rm = /* @__PURE__ */ re('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Bm = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function kd(e, t) {
  ge(t, !0), je(e, Bm);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn();
  return Cn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var l = Im();
      L(a, l);
    },
    children: (a, l) => {
      var u = Rm(), c = be(u), f = X(c);
      Je(f, {
        level: 3,
        children: (p, x) => {
          Te();
          var C = Be("输入参数");
          L(p, C);
        },
        $$slots: { default: !0 }
      });
      var d = R(f, 2);
      Ge(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (p, x) => {
          var C = zm();
          L(p, C);
        },
        $$slots: { default: !0 }
      }), Z(c);
      var g = R(c, 2);
      bd(g, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ae(kd, { data: {} }, [], [], !0);
const Ed = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Ed(e, r.source, n));
}, Vl = (e, t) => {
  if (e.type === "startNode") {
    const n = e.data.parameters, r = [];
    if (n)
      for (const o of n)
        r.push({
          label: o.name + (t ? ` (Array<${o.dataType || "String"}>)` : ` (${o.dataType || "String"})`),
          value: e.id + "." + o.name
        });
    return {
      label: e.data.title,
      value: e.id,
      children: r
    };
  } else {
    if (e.type === "loopNode" && t)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          {
            label: "loopItem",
            value: e.id + ".loop"
          },
          {
            label: "index (Number)",
            value: e.id + ".index"
          }
        ]
      };
    {
      const n = e.data.outputDefs;
      if (n) {
        const r = (o, i) => !o || o.length === 0 ? [] : o.map((s) => ({
          label: s.name + (t ? ` (Array<${s.dataType || "String"}>)` : ` (${s.dataType || "String"})`),
          // label: param.name ,
          value: i + "." + s.name,
          children: r(s.children, i + "." + s.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, Ym = (e = !1) => {
  const t = mt(), n = pr(t), { nodes: r, edges: o } = qe();
  return Fn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Vl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Ed(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const f = Vl(c, c.parentId === i.id);
          f && l.push(f);
        }
    }
    return l;
  });
};
var Zm = /* @__PURE__ */ re('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Xm = /* @__PURE__ */ re('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Wm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function $d(e, t) {
  ge(t, !0), je(e, Wm);
  const [n, r] = tt(), o = () => Q(h(c), "$node", n), i = () => Q(v, "$selectItems", n);
  Yt(() => {
    h(f).refType || E({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = mt(), c = /* @__PURE__ */ Ne(() => pr(u)), f = /* @__PURE__ */ Ne(() => {
    var M;
    return {
      ...s(),
      ...(M = o()) == null ? void 0 : M.data[l()][a()]
    };
  });
  const { updateNodeData: d } = Zt(), g = (M, k) => {
    d(u, (P) => {
      let H = P.data[l()];
      return H[a()] = { ...H[a()], [M]: k }, { [l()]: H };
    });
  }, p = (M) => {
    const k = M.target.value;
    g("name", k);
  }, x = (M) => {
    const k = M.target.value;
    g("value", k);
  }, C = (M) => {
    const k = M.value;
    g("ref", k);
  }, E = (M) => {
    const k = M.value;
    g("refType", k);
  };
  let m;
  const _ = () => {
    d(u, (M) => {
      let k = M.data[l()];
      return k.splice(a(), 1), { [l()]: [...k] };
    }), m == null || m.hide();
  }, v = Ym();
  var b = Xm(), N = be(b), $ = X(N);
  _t($, {
    style: "width: 100%;",
    get value() {
      return h(f).name;
    },
    placeholder: "请输入参数名称",
    oninput: p
  }), Z(N);
  var T = R(N, 2), O = X(T);
  {
    var D = (M) => {
      _t(M, {
        get value() {
          return h(f).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, A = (M) => {
      const k = /* @__PURE__ */ Ne(() => [h(f).ref]);
      yn(M, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return h(k);
        },
        expandAll: !0,
        onSelect: C
      });
    };
    ke(O, (M) => {
      h(f).refType === "input" ? M(D) : M(A, !1);
    });
  }
  Z(T);
  var V = R(T, 2), z = X(V);
  An(
    Oo(z, {
      placement: "bottom",
      floating: (k) => {
        var P = Zm(), H = X(P), I = R(X(H));
        const B = /* @__PURE__ */ Ne(() => h(f).refType ? [h(f).refType] : []);
        yn(I, {
          items: Nm,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(B);
          },
          onSelect: E
        }), Z(H);
        var W = R(H, 2), K = R(X(W));
        kt(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (me) => {
            const xe = me.target.value;
            g("defaultValue", xe);
          }
        }), Z(W);
        var ie = R(W, 2), ee = R(X(ie));
        kt(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (me) => {
            const xe = me.target.value;
            g("description", xe);
          }
        }), Z(ie);
        var F = R(ie, 2), ue = X(F);
        Ge(ue, {
          onclick: _,
          children: (me, xe) => {
            Te();
            var de = Be("删除");
            L(me, de);
          },
          $$slots: { default: !0 }
        }), Z(F), Z(P), L(k, P);
      },
      children: (k, P) => {
        Gi(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => m = k,
    () => m
  ), Z(V), L(e, b);
  var S = he({
    get parameter() {
      return s();
    },
    set parameter(M) {
      s(M), y();
    },
    get index() {
      return a();
    },
    set index(M) {
      a(M), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(M) {
      l(M), y();
    }
  });
  return r(), S;
}
ae($d, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Fm = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Km = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), qm = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Gm = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function qt(e, t) {
  ge(t, !0), je(e, Gm);
  const [n, r] = tt(), o = () => Q(h(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = mt(), l = /* @__PURE__ */ Ne(() => pr(a)), u = /* @__PURE__ */ Ne(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var c = qm(), f = X(c);
  {
    var d = (x) => {
      var C = Fm();
      Te(4), L(x, C);
    };
    ke(f, (x) => {
      h(u).length !== 0 && x(d);
    });
  }
  var g = R(f, 2);
  Rt(
    g,
    19,
    () => h(u),
    (x) => x.id,
    (x, C, E) => {
      $d(x, {
        get parameter() {
          return h(C);
        },
        get index() {
          return h(E);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (x) => {
      var C = Km(), E = X(C, !0);
      Z(C), $e(() => It(E, i())), L(x, C);
    }
  ), Z(c), L(e, c);
  var p = he({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输入参数") {
      i(x), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "parameters") {
      s(x), y();
    }
  });
  return r(), p;
}
ae(qt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Um = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), jm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jm = /* @__PURE__ */ re('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Qm = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Sd(e, t) {
  ge(t, !0), je(e, Qm);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn();
  return Cn(e, ct(
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
        var l = Um();
        L(a, l);
      },
      children: (a, l) => {
        var u = Jm(), c = be(u), f = X(c);
        Je(f, {
          level: 3,
          children: (p, x) => {
            Te();
            var C = Be("输出参数");
            L(p, C);
          },
          $$slots: { default: !0 }
        });
        var d = R(f, 2);
        Ge(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, x) => {
            var C = jm();
            L(p, C);
          },
          $$slots: { default: !0 }
        }), Z(c);
        var g = R(c, 2);
        qt(g, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ae(Sd, { data: {} }, [], [], !0);
const Ui = () => ar("tinyflow_options");
var ey = /* @__PURE__ */ Ce('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), ty = /* @__PURE__ */ re('<div class="input-more-item svelte-1cfeest"><!></div>'), ny = /* @__PURE__ */ re('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), ry = /* @__PURE__ */ re('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const oy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Pd(e, t) {
  ge(t, !0), je(e, oy);
  const [n, r] = tt(), o = () => Q(h(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = mt(), u = /* @__PURE__ */ Ne(() => pr(l)), c = /* @__PURE__ */ Ne(() => {
    var I;
    let P = (I = o()) == null ? void 0 : I.data[a()], H;
    if (P && s().length > 0) {
      let B = P;
      for (let W = 0; W < s().length; W++) {
        const K = s()[W];
        W == s().length - 1 ? H = B[K] : B = B[K].children;
      }
    }
    return { ...i(), ...H };
  });
  const { updateNodeData: f } = Zt(), d = (P, H) => {
    f(l, (I) => {
      const B = I.data[a()];
      if (B && s().length > 0) {
        let W = B;
        for (let K = 0; K < s().length; K++) {
          const ie = s()[K];
          K == s().length - 1 ? W[ie] = { ...W[ie], [P]: H } : W = B[ie].children;
        }
      }
      return { [a()]: B };
    });
  }, g = (P) => {
    const H = P.target.value;
    d("name", H);
  }, p = (P) => {
    const H = P.value;
    d("dataType", H);
  };
  let x;
  const C = () => {
    f(l, (P) => {
      let H = P.data[a()];
      if (H && s().length > 0) {
        let I = H;
        for (let B = 0; B < s().length; B++) {
          const W = s()[B];
          B == s().length - 1 ? I.splice(W, 1) : I = I[W].children;
        }
      }
      return { [a()]: [...H] };
    }), x == null || x.hide();
  }, E = () => {
    f(l, (P) => {
      let H = P.data[a()];
      if (H && s().length > 0) {
        let I = H;
        for (let B = 0; B < s().length; B++) {
          const W = s()[B];
          B == s().length - 1 ? I[W].children ? I[W].children.push({
            id: Rr(),
            name: "newParam",
            dataType: "String"
          }) : I[W].children = [
            {
              id: Rr(),
              name: "newParam",
              dataType: "String"
            }
          ] : I = I[W].children;
        }
      }
      return { [a()]: [...H] };
    });
  };
  var m = ry(), _ = be(m), v = X(_);
  {
    var b = (P) => {
      var H = et(), I = be(H);
      Rt(I, 17, s, Vi, (B, W) => {
        Te();
        var K = Be(" ");
        L(B, K);
      }), L(P, H);
    };
    ke(v, (P) => {
      s().length > 1 && P(b);
    });
  }
  var N = R(v, 2);
  const $ = /* @__PURE__ */ Ne(() => h(c).nameDisabled === !0);
  _t(N, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: g,
    get disabled() {
      return h($);
    }
  }), Z(_);
  var T = R(_, 2), O = X(T);
  const D = /* @__PURE__ */ Ne(() => h(c).dataType ? [h(c).dataType] : []), A = /* @__PURE__ */ Ne(() => h(c).dataTypeDisabled === !0);
  yn(O, {
    items: _d,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(D);
    },
    get disabled() {
      return h(A);
    },
    onSelect: p
  });
  var V = R(O, 2);
  {
    var z = (P) => {
      Ge(P, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: E,
        children: (H, I) => {
          var B = ey();
          L(H, B);
        },
        $$slots: { default: !0 }
      });
    };
    ke(V, (P) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && h(c).addChildDisabled !== !0 && P(z);
    });
  }
  Z(T);
  var S = R(T, 2), M = X(S);
  An(
    Oo(M, {
      placement: "bottom",
      floating: (H) => {
        var I = ny(), B = X(I), W = R(X(B));
        kt(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ue) => {
            const me = ue.target.value;
            d("defaultValue", me);
          }
        }), Z(B);
        var K = R(B, 2), ie = R(X(K));
        kt(ie, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ue) => {
            const me = ue.target.value;
            d("description", me);
          }
        }), Z(K);
        var ee = R(K, 2);
        {
          var F = (ue) => {
            var me = ty(), xe = X(me);
            Ge(xe, {
              onclick: C,
              children: (de, Ie) => {
                Te();
                var G = Be("删除");
                L(de, G);
              },
              $$slots: { default: !0 }
            }), Z(me), L(ue, me);
          };
          ke(ee, (ue) => {
            h(c).deleteDisabled !== !0 && ue(F);
          });
        }
        Z(I), L(H, I);
      },
      children: (H, I) => {
        Gi(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => x = H,
    () => x
  ), Z(S), L(e, m);
  var k = he({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), y();
    },
    get position() {
      return s();
    },
    set position(P) {
      s(P), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(P) {
      a(P), y();
    }
  });
  return r(), k;
}
ae(Pd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var iy = /* @__PURE__ */ re("<!> <!>", 1), sy = /* @__PURE__ */ re('<div class="none-params svelte-1sm1mgi"> </div>'), ay = /* @__PURE__ */ re('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ly = /* @__PURE__ */ re('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const uy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function er(e, t) {
  ge(t, !0), je(e, uy);
  const [n, r] = tt(), o = () => Q(h(u), "$node", n), i = (C, E = dt, m = dt) => {
    var _ = et(), v = be(_);
    Rt(
      v,
      19,
      E,
      (b) => `${b.id}_${b.children ? b.children.length : 0}`,
      (b, N, $) => {
        var T = iy(), O = be(T);
        const D = /* @__PURE__ */ Ne(() => [...m(), h($)]);
        Pd(O, {
          get parameter() {
            return h(N);
          },
          get position() {
            return h(D);
          },
          get dataKeyName() {
            return a();
          }
        });
        var A = R(O, 2);
        {
          var V = (z) => {
            var S = /* @__PURE__ */ pe(() => [...m(), h($)]);
            i(z, () => h(N).children, () => h(S));
          };
          ke(A, (z) => {
            h(N).children && z(V);
          });
        }
        L(b, T);
      },
      (b) => {
        var N = et(), $ = be(N);
        {
          var T = (O) => {
            var D = sy(), A = X(D, !0);
            Z(D), $e(() => It(A, s())), L(O, D);
          };
          ke($, (O) => {
            m().length === 0 && O(T);
          });
        }
        L(b, N);
      }
    ), L(C, _);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = mt(), u = /* @__PURE__ */ Ne(() => pr(l)), c = /* @__PURE__ */ Ne(() => {
    var C;
    return [...((C = o()) == null ? void 0 : C.data[a()]) || []];
  });
  var f = ly(), d = X(f);
  {
    var g = (C) => {
      var E = ay();
      Te(4), L(C, E);
    };
    ke(d, (C) => {
      h(c).length !== 0 && C(g);
    });
  }
  var p = R(d, 2);
  i(p, () => h(c) || [], () => []), Z(f), L(e, f);
  var x = he({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(C = "无输出参数") {
      s(C), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(C = "outputDefs") {
      a(C), y();
    }
  });
  return r(), x;
}
ae(er, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var cy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), dy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gy = /* @__PURE__ */ re('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const hy = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Nd(e, t) {
  ge(t, !0), je(e, hy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), s = Ui();
  let a = sr(Vt([]));
  Yt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.llm) == null ? void 0 : f.call(c));
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Zt();
  return Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = cy();
        L(c, f);
      },
      children: (c, f) => {
        var d = gy(), g = be(d), p = X(g);
        Je(p, {
          level: 3,
          children: (G, se) => {
            Te();
            var Me = Be("输入参数");
            L(G, Me);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (G, se) => {
            var Me = dy();
            L(G, Me);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var C = R(g, 2);
        qt(C, {});
        var E = R(C, 2);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (G, se) => {
            Te();
            var Me = Be("模型设置");
            L(G, Me);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), _ = X(m);
        const v = /* @__PURE__ */ Ne(() => n().llmId ? [n().llmId] : []);
        yn(_, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (G) => {
            const se = G.value;
            l(o, () => ({ llmId: se }));
          },
          get value() {
            return h(v);
          }
        });
        var b = R(_, 2);
        Gi(b, {}), Z(m);
        var N = R(m, 4), $ = X(N), T = X($), O = X(T);
        Z(T);
        var D = R(T, 2);
        io(D), Z($), Z(N);
        var A = R(N, 2), V = X(A), z = X(V), S = X(z);
        Z(z);
        var M = R(z, 2);
        io(M), Z(V), Z(A);
        var k = R(A, 2), P = X(k), H = X(P), I = X(H);
        Z(H);
        var B = R(H, 2);
        io(B), Z(P), Z(k);
        var W = R(k, 4), K = X(W);
        const ie = /* @__PURE__ */ Ne(() => n().systemPrompt || "");
        kt(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return h(ie);
          },
          oninput: (G) => {
            l(o, { systemPrompt: G.target.value });
          }
        }), Z(W);
        var ee = R(W, 4), F = X(ee);
        const ue = /* @__PURE__ */ Ne(() => n().userPrompt || "");
        kt(F, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return h(ue);
          },
          oninput: (G) => {
            l(o, { userPrompt: G.target.value });
          }
        }), Z(ee);
        var me = R(ee, 2), xe = X(me);
        Je(xe, {
          level: 3,
          mt: "10px",
          children: (G, se) => {
            Te();
            var Me = Be("输出参数");
            L(G, Me);
          },
          $$slots: { default: !0 }
        });
        var de = R(xe, 2);
        Ge(de, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (G, se) => {
            var Me = fy();
            L(G, Me);
          },
          $$slots: { default: !0 }
        }), Z(me);
        var Ie = R(me, 2);
        er(Ie, {}), $e(() => {
          It(O, `Temperature: ${n().temperature ?? 0.5}`), Qi(D, n().temperature ?? 0.5), It(S, `Top P: ${n().topP ?? 0.9}`), Qi(M, n().topP ?? 0.9), It(I, `Top K: ${n().topK ?? 50}`), Qi(B, n().topK ?? 50);
        }), Ye("mousedown", D, es(function(G) {
          De.call(this, t, G);
        })), Ye("input", D, (G) => l(o, { temperature: parseFloat(G.target.value) })), Ye("mousedown", M, es(function(G) {
          De.call(this, t, G);
        })), Ye("input", M, (G) => l(o, { topP: parseFloat(G.target.value) })), Ye("mousedown", B, es(function(G) {
          De.call(this, t, G);
        })), Ye("input", B, (G) => l(o, { topK: parseInt(G.target.value) })), L(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Nd, { data: {} }, [], [], !0);
var vy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), py = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), my = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Td(e, t) {
  ge(t, !0), je(e, wy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Yt(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = mt(), { addParameter: i } = zn(), { updateNodeData: s } = Zt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = vy();
        L(u, c);
      },
      children: (u, c) => {
        var f = yy(), d = be(f), g = X(d);
        Je(g, {
          level: 3,
          children: (A, V) => {
            Te();
            var z = Be("输入参数");
            L(A, z);
          },
          $$slots: { default: !0 }
        });
        var p = R(g, 2);
        Ge(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, V) => {
            var z = py();
            L(A, z);
          },
          $$slots: { default: !0 }
        }), Z(d);
        var x = R(d, 2);
        qt(x, {});
        var C = R(x, 2);
        Je(C, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            Te();
            var z = Be("代码");
            L(A, z);
          },
          $$slots: { default: !0 }
        });
        var E = R(C, 4), m = X(E);
        const _ = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : ["qlexpress"]);
        yn(m, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (A) => {
            const V = A.value;
            s(o, () => ({ engine: V }));
          },
          get value() {
            return h(_);
          }
        }), Z(E);
        var v = R(E, 4), b = X(v);
        const N = /* @__PURE__ */ Ne(() => n().code || "");
        kt(b, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (A) => {
            s(o, () => ({ code: A.target.value }));
          },
          get value() {
            return h(N);
          }
        }), Z(v);
        var $ = R(v, 2), T = X($);
        Je(T, {
          level: 3,
          mt: "10px",
          children: (A, V) => {
            Te();
            var z = Be("输出参数");
            L(A, z);
          },
          $$slots: { default: !0 }
        });
        var O = R(T, 2);
        Ge(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (A, V) => {
            var z = my();
            L(A, z);
          },
          $$slots: { default: !0 }
        }), Z($);
        var D = R($, 2);
        er(D, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(Td, { data: {} }, [], [], !0);
var _y = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), xy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), by = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Cy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Md(e, t) {
  ge(t, !0), je(e, Cy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), { updateNodeData: s } = Zt();
  return Nr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = _y();
        L(l, u);
      },
      children: (l, u) => {
        var c = by(), f = be(c), d = X(f);
        Je(d, {
          level: 3,
          children: (N, $) => {
            Te();
            var T = Be("输入参数");
            L(N, T);
          },
          $$slots: { default: !0 }
        });
        var g = R(d, 2);
        Ge(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, $) => {
            var T = xy();
            L(N, T);
          },
          $$slots: { default: !0 }
        }), Z(f);
        var p = R(f, 2);
        qt(p, {});
        var x = R(p, 2);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (N, $) => {
            Te();
            var T = Be("代码");
            L(N, T);
          },
          $$slots: { default: !0 }
        });
        var C = R(x, 4), E = X(C);
        const m = /* @__PURE__ */ Ne(() => n().template || "");
        kt(E, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (N) => {
            s(o, () => ({ template: N.target.value }));
          },
          get value() {
            return h(m);
          }
        }), Z(C);
        var _ = R(C, 2), v = X(_);
        Je(v, {
          level: 3,
          mt: "10px",
          children: (N, $) => {
            Te();
            var T = Be("输出参数");
            L(N, T);
          },
          $$slots: { default: !0 }
        }), Z(_);
        var b = R(_, 2);
        er(b, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ae(Md, { data: {} }, [], [], !0);
var ky = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Ey = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $y = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Py = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Ny = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ re('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), My = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), Hy = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), Dy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = /* @__PURE__ */ re('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Vy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Hd(e, t) {
  ge(t, !0), je(e, Vy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Yt(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = mt(), { addParameter: s } = zn(), { updateNodeData: a } = Zt();
  return Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = ky();
        L(u, c);
      },
      children: (u, c) => {
        var f = Ay(), d = be(f), g = X(d), p = X(g);
        const x = /* @__PURE__ */ Ne(() => n().method ? [n().method] : ["get"]);
        yn(p, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (oe) => {
            const ve = oe.value;
            a(i, () => ({ method: ve }));
          },
          get value() {
            return h(x);
          }
        }), Z(g);
        var C = R(g, 2), E = X(C);
        const m = /* @__PURE__ */ Ne(() => n().url || "");
        _t(E, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (oe) => {
            a(i, () => ({ url: oe.target.value }));
          },
          get value() {
            return h(m);
          }
        }), Z(C), Z(d);
        var _ = R(d, 2), v = X(_);
        Je(v, {
          level: 3,
          children: (oe, ve) => {
            Te();
            var _e = Be("Http 头信息");
            L(oe, _e);
          },
          $$slots: { default: !0 }
        });
        var b = R(v, 2);
        Ge(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (oe, ve) => {
            var _e = Ey();
            L(oe, _e);
          },
          $$slots: { default: !0 }
        }), Z(_);
        var N = R(_, 2);
        qt(N, { dataKeyName: "headers" });
        var $ = R(N, 2), T = X($);
        Je(T, {
          level: 3,
          children: (oe, ve) => {
            Te();
            var _e = Be("参数");
            L(oe, _e);
          },
          $$slots: { default: !0 }
        });
        var O = R(T, 2);
        Ge(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "urlParameters");
          },
          children: (oe, ve) => {
            var _e = $y();
            L(oe, _e);
          },
          $$slots: { default: !0 }
        }), Z($);
        var D = R($, 2);
        qt(D, { dataKeyName: "urlParameters" });
        var A = R(D, 2);
        Je(A, {
          level: 3,
          mt: "10px",
          children: (oe, ve) => {
            Te();
            var _e = Be("Body");
            L(oe, _e);
          },
          $$slots: { default: !0 }
        });
        var V = R(A, 2), z = X(V), S = X(z);
        const M = /* @__PURE__ */ Ne(() => !n().bodyType);
        _t(S, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(M);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "" });
          }
        }), Te(), Z(z);
        var k = R(z, 2), P = X(k);
        const H = /* @__PURE__ */ Ne(() => n().bodyType === "form-data");
        _t(P, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(H);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "form-data" });
          }
        }), Te(), Z(k);
        var I = R(k, 2), B = X(I);
        const W = /* @__PURE__ */ Ne(() => n().bodyType === "x-www-form-urlencoded");
        _t(B, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(W);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Te(), Z(I);
        var K = R(I, 2), ie = X(K);
        const ee = /* @__PURE__ */ Ne(() => n().bodyType === "json");
        _t(ie, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(ee);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "json" });
          }
        }), Te(), Z(K);
        var F = R(K, 2), ue = X(F);
        const me = /* @__PURE__ */ Ne(() => n().bodyType === "raw");
        _t(ue, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(me);
          },
          onchange: (oe) => {
            var ve;
            (ve = oe.target) != null && ve.checked && a(i, { bodyType: "raw" });
          }
        }), Te(), Z(F), Z(V);
        var xe = R(V, 2);
        {
          var de = (oe) => {
            var ve = Py(), _e = be(ve), Le = X(_e);
            Je(Le, {
              level: 3,
              children: (J, ze) => {
                Te();
                var le = Be("参数");
                L(J, le);
              },
              $$slots: { default: !0 }
            });
            var ut = R(Le, 2);
            Ge(ut, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromData");
              },
              children: (J, ze) => {
                var le = Sy();
                L(J, le);
              },
              $$slots: { default: !0 }
            }), Z(_e);
            var lt = R(_e, 2);
            qt(lt, { dataKeyName: "fromData" }), L(oe, ve);
          };
          ke(xe, (oe) => {
            n().bodyType === "form-data" && oe(de);
          });
        }
        var Ie = R(xe, 2);
        {
          var G = (oe) => {
            var ve = Ty(), _e = be(ve), Le = X(_e);
            Je(Le, {
              level: 3,
              children: (J, ze) => {
                Te();
                var le = Be("参数");
                L(J, le);
              },
              $$slots: { default: !0 }
            });
            var ut = R(Le, 2);
            Ge(ut, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromUrlencoded");
              },
              children: (J, ze) => {
                var le = Ny();
                L(J, le);
              },
              $$slots: { default: !0 }
            }), Z(_e);
            var lt = R(_e, 2);
            qt(lt, { dataKeyName: "fromUrlencoded" }), L(oe, ve);
          };
          ke(Ie, (oe) => {
            n().bodyType === "x-www-form-urlencoded" && oe(G);
          });
        }
        var se = R(Ie, 2);
        {
          var Me = (oe) => {
            var ve = My(), _e = X(ve);
            kt(_e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Le) => {
                a(i, { bodyJson: Le.target.value });
              }
            }), Z(ve), L(oe, ve);
          };
          ke(se, (oe) => {
            n().bodyType === "json" && oe(Me);
          });
        }
        var Ve = R(se, 2);
        {
          var Xe = (oe) => {
            var ve = Hy(), _e = X(ve);
            kt(_e, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Le) => {
                a(i, { bodyRaw: Le.target.value });
              }
            }), Z(ve), L(oe, ve);
          };
          ke(Ve, (oe) => {
            n().bodyType === "raw" && oe(Xe);
          });
        }
        var te = R(Ve, 2), We = X(te);
        Je(We, {
          level: 3,
          mt: "10px",
          children: (oe, ve) => {
            Te();
            var _e = Be("输出参数");
            L(oe, _e);
          },
          $$slots: { default: !0 }
        });
        var Oe = R(We, 2);
        Ge(Oe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (oe, ve) => {
            var _e = Dy();
            L(oe, _e);
          },
          $$slots: { default: !0 }
        }), Z(te);
        var Qe = R(te, 2);
        er(Qe, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(Hd, { data: {} }, [], [], !0);
var Oy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Ly = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const zy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Dd(e, t) {
  ge(t, !0), je(e, zy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), s = Ui();
  let a = sr(Vt([]));
  Yt(async () => {
    var c, f;
    const u = await ((f = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : f.call(c));
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Zt();
  return Nr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        }
      ]
    });
  }), Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Oy();
        L(c, f);
      },
      children: (c, f) => {
        var d = Iy(), g = be(d), p = X(g);
        Je(p, {
          level: 3,
          children: (D, A) => {
            Te();
            var V = Be("输入参数");
            L(D, V);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, A) => {
            var V = Ly();
            L(D, V);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var C = R(g, 2);
        qt(C, {});
        var E = R(C, 2);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (D, A) => {
            Te();
            var V = Be("知识库设置");
            L(D, V);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), _ = X(m);
        const v = /* @__PURE__ */ Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        yn(_, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const A = D.value;
            l(o, () => ({ knowledgeId: A }));
          },
          get value() {
            return h(v);
          }
        }), Z(m);
        var b = R(m, 4), N = X(b);
        _t(N, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(b);
        var $ = R(b, 2), T = X($);
        Je(T, {
          level: 3,
          mt: "10px",
          children: (D, A) => {
            Te();
            var V = Be("输出参数");
            L(D, V);
          },
          $$slots: { default: !0 }
        }), Z($);
        var O = R($, 2);
        er(O, {}), L(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Dd, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), By = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ re('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Zy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Ad(e, t) {
  ge(t, !0), je(e, Zy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), s = Ui();
  let a = sr(Vt([]));
  Yt(async () => {
    var c;
    const u = await ((c = s.provider) == null ? void 0 : c.knowledge());
    h(a).push(...u || []);
  });
  const { updateNodeData: l } = Zt();
  return Nr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        }
      ]
    });
  }), Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Ry();
        L(c, f);
      },
      children: (c, f) => {
        var d = Yy(), g = be(d), p = X(g);
        Je(p, {
          level: 3,
          children: (k, P) => {
            Te();
            var H = Be("输入参数");
            L(k, H);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, P) => {
            var H = By();
            L(k, H);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var C = R(g, 2);
        qt(C, {});
        var E = R(C, 2);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Te();
            var H = Be("搜索引擎设置");
            L(k, H);
          },
          $$slots: { default: !0 }
        });
        var m = R(E, 4), _ = X(m);
        const v = /* @__PURE__ */ Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        yn(_, {
          get items() {
            return h(a);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (k) => {
            const P = k.value;
            l(o, () => ({ knowledgeId: P }));
          },
          get value() {
            return h(v);
          }
        }), Z(m);
        var b = R(m, 4), N = X(b);
        _t(N, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), Z(b);
        var $ = R(b, 4), T = X($);
        _t(T, { placeholder: "请输入关键字", style: "width: 100%" }), Z($);
        var O = R($, 4), D = X(O);
        _t(D, { placeholder: "搜索的数据条数", style: "width: 100%" }), Z(O);
        var A = R(O, 4), V = X(A);
        kt(V, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), Z(A);
        var z = R(A, 2), S = X(z);
        Je(S, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Te();
            var H = Be("输出参数");
            L(k, H);
          },
          $$slots: { default: !0 }
        }), Z(z);
        var M = R(z, 2);
        er(M, {}), L(c, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ae(Ad, { data: {} }, [], [], !0);
var Xy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Wy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ re('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Ky = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Vd(e, t) {
  ge(t, !0), je(e, Ky);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Et(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = mt(), { addParameter: i } = zn(), s = Ui();
  let a = sr(Vt([]));
  return Yt(async () => {
    var u;
    const l = await ((u = s.provider) == null ? void 0 : u.knowledge());
    h(a).push(...l || []);
  }), Cn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var f = Xy();
        L(c, f);
      },
      handle: (c) => {
        jn(c, {
          type: "source",
          get position() {
            return Ee.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (c, f) => {
        var d = Fy(), g = be(d), p = X(g);
        Je(p, {
          level: 3,
          children: (v, b) => {
            Te();
            var N = Be("循环变量");
            L(v, N);
          },
          $$slots: { default: !0 }
        });
        var x = R(p, 2);
        Ge(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (v, b) => {
            var N = Wy();
            L(v, N);
          },
          $$slots: { default: !0 }
        }), Z(g);
        var C = R(g, 2);
        qt(C, {});
        var E = R(C, 2), m = X(E);
        Je(m, {
          level: 3,
          mt: "10px",
          children: (v, b) => {
            Te();
            var N = Be("输出参数");
            L(v, N);
          },
          $$slots: { default: !0 }
        }), Z(E);
        var _ = R(E, 2);
        er(_, {}), L(c, d);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ae(Vd, { data: {} }, [], [], !0);
const qy = {
  startNode: kd,
  codeNode: Td,
  llmNode: Nd,
  templateNode: Md,
  httpNode: Hd,
  knowledgeNode: Dd,
  searchEngineNode: Ad,
  loopNode: Vd,
  endNode: Sd
};
var Gy = /* @__PURE__ */ re("<!> ", 1);
function Od(e, t) {
  ge(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return Ge(e, {
    draggable: !0,
    ondragstart: (l) => {
      if (!l.dataTransfer)
        return null;
      const u = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          systemPrompt: "",
          userPrompt: "",
          ...s()
        }
      };
      l.dataTransfer.setData("application/tinyflow", JSON.stringify(u)), l.dataTransfer.effectAllowed = "move";
    },
    children: (l, u) => {
      var c = Gy(), f = be(c);
      mu(f, n);
      var d = R(f);
      $e(() => It(d, ` ${r() ?? ""}`)), L(l, c);
    },
    $$slots: { default: !0 }
  }), he({
    get icon() {
      return n();
    },
    set icon(l) {
      n(l), y();
    },
    get title() {
      return r();
    },
    set title(l) {
      r(l), y();
    },
    get type() {
      return o();
    },
    set type(l) {
      o(l), y();
    },
    get description() {
      return i();
    },
    set description(l) {
      i(l), y();
    },
    get extra() {
      return s();
    },
    set extra(l) {
      s(l), y();
    }
  });
}
ae(
  Od,
  {
    icon: {},
    title: {},
    type: {},
    description: {},
    extra: {}
  },
  [],
  [],
  !0
);
var Uy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), jy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Jy = /* @__PURE__ */ re('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function Ld(e) {
  let t = sr("base"), n = sr("show");
  const r = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      title: "开始节点",
      type: "startNode",
      description: "开始定义输入参数"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      title: "循环",
      type: "loopNode",
      description: "用于循环执行任务"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      title: "大模型",
      type: "llmNode",
      description: "使用大模型处理问题"
    },
    {
      // icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM6.33421 15.8154C6.51032 15.233 6.7072 14.6562 6.93912 14.0327C8.99484 8.50636 12.4197 5.08172 18.0129 4.21479C17.5 5.35838 17.0151 6.15301 16.5858 6.58237C16.2521 6.91603 15.9185 7.24993 15.5848 7.58407L14.1721 8.99878L15.6279 10.4535C14.4976 12.5384 12.2652 14.1979 9.75193 14.512C8.43544 14.6766 7.29345 15.1188 6.33421 15.8154ZM18 9.99658L17 8.99728C17.3331 8.66372 17.6662 8.33039 18.0027 7.99391C19.0018 6.99303 20.0009 4.99392 21 1.99658C6.31105 1.99658 4.08854 15.422 3.06361 21.6132C3.0419 21.7443 3.02074 21.8722 3 21.9966H4.99824C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.9966 18 9.99658Z"></path></svg>',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      title: "知识库",
      type: "knowledgeNode",
      description: "通过知识库获取内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "searchEngineNode",
      description: "通过搜索引擎搜索内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      title: "Http 请求",
      type: "httpNode",
      description: "通过 HTTP 请求获取数据"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      title: "动态代码",
      type: "codeNode",
      description: "动态执行代码"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      title: "内容模板",
      type: "templateNode",
      description: "通过模板引擎生成内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      description: "结束定义输出参数"
    }
  ], o = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ];
  var i = Jy(), s = X(i), a = X(s), l = X(a);
  sd(l, {
    style: "width: 100%",
    items: o,
    onChange: (p) => {
      U(t, Vt(p.value.toString()));
    }
  }), Z(a);
  var u = R(a, 2), c = X(u);
  Rt(c, 21, () => r, Vi, (p, x) => {
    Od(p, ct(() => h(x)));
  }), Z(c);
  var f = R(c, 2), d = X(f);
  Ge(d, {
    children: (p, x) => {
      Te();
      var C = Be("测试业务按钮");
      L(p, C);
    },
    $$slots: { default: !0 }
  }), Z(f), Z(u), Z(s);
  var g = R(s, 2);
  Ge(g, {
    onclick: () => {
      U(n, Vt(h(n) ? "" : "show"));
    },
    children: (p, x) => {
      var C = et(), E = be(C);
      {
        var m = (v) => {
          var b = Uy();
          L(v, b);
        }, _ = (v) => {
          var b = jy();
          L(v, b);
        };
        ke(E, (v) => {
          h(n) === "show" ? v(m) : v(_, !1);
        });
      }
      L(p, C);
    },
    $$slots: { default: !0 }
  }), Z(i), $e(() => {
    Ct(i, 1, `tf-toolbar ${h(n) ?? ""}`), ce(c, "style", `display: ${(h(t) === "base" ? "flex" : "none") ?? ""}`), ce(f, "style", `display: ${(h(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), L(e, i);
}
ae(Ld, {}, [], [], !0);
const Qy = () => {
  const { nodeLookup: e } = qe();
  return {
    getNode: (n) => {
      var o;
      return (o = q(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, ew = () => {
  const { nodes: e } = qe();
  return {
    ensureParentInNodesBefore: (n, r) => {
      e.update((o) => {
        let i = -1;
        for (let l = 0; l < o.length; l++)
          if (o[l].id === n) {
            i = l;
            break;
          }
        if (i <= 0)
          return o;
        let s = -1;
        for (let l = 0; l < i; l++)
          if (o[l].parentId === n || o[l].id === r) {
            s = l;
            break;
          }
        if (s == -1)
          return o;
        const a = o[i];
        for (let l = i; l > s; l--)
          o[l] = o[l - 1];
        return o[s] = a, o;
      });
    }
  };
}, tw = () => {
  const { edges: e } = qe();
  return {
    getEdgesByTarget: (n) => q(e).filter((o) => o.target === n)
  };
};
var nw = /* @__PURE__ */ re('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), rw = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), ow = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const iw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function Id(e, t) {
  ge(t, !0), je(e, iw);
  const n = w(t, "onInit", 7), r = Zt();
  n()(r);
  let o = sr(!1);
  const i = (_) => {
    _.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "move");
  }, s = (_) => {
    var T;
    _.preventDefault();
    const v = r.screenToFlowPosition({
      x: _.clientX - 250,
      y: _.clientY - 100
    }), b = (T = _.dataTransfer) == null ? void 0 : T.getData("application/tinyflow"), N = b ? JSON.parse(b) : {}, $ = {
      id: `node_${Rr()}`,
      position: v,
      data: {},
      ...N
    };
    Qo.addNode($), Qo.selectNodeOnly($.id);
  }, { getNode: a } = Qy(), l = (_) => {
    const v = a(_.source), b = a(_.target);
    if (_.sourceHandle === "loop_handle" || v.parentId) {
      const N = r.getEdges();
      for (let $ of N)
        if ($.target === _.target) {
          const T = a($.source);
          if (_.sourceHandle === "loop_handle" && T.parentId !== v.id || v.parentId && T.parentId !== v.parentId)
            return !1;
        }
    }
    return !(!v.parentId && b.parentId && b.parentId !== v.id);
  }, { ensureParentInNodesBefore: u } = ew(), c = (_, v) => {
    if (!v.isValid)
      return;
    const b = v.toNode;
    if (b.parentId)
      return;
    const N = v.fromNode, $ = v.fromHandle, T = { position: { ...b.position } };
    if ($.id === "loop_handle" ? T.parentId = N.id : N.parentId && (T.parentId = N.parentId), T.parentId) {
      const O = a(T.parentId);
      T.position = {
        x: b.position.x - O.position.x,
        y: b.position.y - O.position.y
      }, u(T.parentId, b.id), r.updateNode(b.id, T);
    }
  }, { getEdgesByTarget: f } = tw(), d = (_) => {
    _.edges.forEach((b) => {
      const N = a(b.target);
      if (N.parentId) {
        const $ = f(b.target), T = a(N.parentId);
        if ($.length === 0)
          r.updateNode(N.id, {
            parentId: void 0,
            position: {
              x: N.position.x + T.position.x,
              y: N.position.y + T.position.y
            }
          });
        else {
          let O = !1;
          for (let D = 0; D < $.length; D++) {
            const A = $[D], V = a(A.source);
            if (V.parentId || V.type === "loopNode") {
              O = !0;
              break;
            }
          }
          O || r.updateNode(N.id, {
            parentId: void 0,
            position: {
              x: N.position.x + T.position.x,
              y: N.position.y + T.position.y
            }
          });
        }
      }
    });
  }, g = (_, v) => {
    console.log("onconnectstart: ", _, v);
  }, p = (_) => {
    console.log("onconnect: ", _);
  };
  var x = ow(), C = X(x);
  Ld(C);
  var E = R(C, 2);
  const m = /* @__PURE__ */ Ne(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: mo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Wc(E, ct({ nodeTypes: qy }, Qo, {
    class: "tinyflow-logo",
    isValidConnection: l,
    onconnectend: c,
    onconnectstart: g,
    onconnect: p,
    connectionRadius: 50,
    ondelete: d,
    onclick: (_) => {
      const v = _.target;
      v.classList.contains("svelte-flow__edge-interaction") || v.classList.contains("panel-content") || v.closest(".panel-content") || U(o, !1);
    },
    get defaultEdgeOptions() {
      return h(m);
    },
    $$events: {
      drop: s,
      dragover: i,
      edgeclick: () => {
        U(o, !0);
      }
    },
    children: (_, v) => {
      var b = rw(), N = be(b);
      td(N, {});
      var $ = R(N, 2);
      Jc($, {});
      var T = R($, 2);
      rd(T, {});
      var O = R(T, 2);
      {
        var D = (A) => {
          Ho(A, {
            children: (V, z) => {
              var S = nw(), M = R(X(S), 4), k = X(M);
              kt(k, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                oninput: (P) => {
                }
              }), Z(M), Z(S), L(V, S);
            },
            $$slots: { default: !0 }
          });
        };
        ke(O, (A) => {
          h(o) && A(D);
        });
      }
      L(_, b);
    },
    $$slots: { default: !0 }
  })), Z(x), L(e, x), he({
    get onInit() {
      return n();
    },
    set onInit(_) {
      n(_), y();
    }
  });
}
ae(Id, { onInit: {} }, [], [], !0);
function sw(e, t) {
  ge(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return Qo.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Mr("tinyflow_options", n()), Fc(e, {
    fitView: !0,
    children: (i, s) => {
      Id(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), he({
    get options() {
      return n();
    },
    set options(i) {
      n(i), y();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), y();
    }
  });
}
customElements.define("tinyflow-component", ae(sw, { options: {}, onInit: {} }, [], [], !1));
export {
  fw as Tinyflow
};
//# sourceMappingURL=index.js.map
