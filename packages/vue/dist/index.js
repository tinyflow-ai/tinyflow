import { defineComponent as uf, ref as cf, onMounted as df, onUnmounted as ff, createElementBlock as vf, openBlock as gf, normalizeStyle as hf, normalizeClass as pf } from "vue";
var mf = Object.defineProperty, Wl = (e) => {
  throw TypeError(e);
}, yf = (e, t, n) => t in e ? mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Nt = (e, t, n) => yf(e, typeof t != "symbol" ? t + "" : t, n), Za = (e, t, n) => t.has(e) || Wl("Cannot " + n), lt = (e, t, n) => (Za(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xr = (e, t, n) => t.has(e) ? Wl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ni = (e, t, n, r) => (Za(e, t, "write to private field"), t.set(e, n), n), wf = (e, t, n) => (Za(e, t, "access private method"), n);
const xf = "5";
var Os;
typeof window < "u" && ((Os = window.__svelte ?? (window.__svelte = {})).v ?? (Os.v = /* @__PURE__ */ new Set())).add(xf);
let Br = !1, bf = !1;
function $f() {
  Br = !0;
}
$f();
const Ba = 1, Ra = 2, Kl = 4, Cf = 8, kf = 16, _f = 1, Sf = 2, ql = 4, Mf = 8, Ef = 16, jl = 1, Vf = 2, Xa = "[", Ya = "[!", Wa = "]", $r = {}, Et = Symbol(), Nf = "http://www.w3.org/1999/xhtml", zf = "http://www.w3.org/2000/svg", Pf = !1, pn = 2, Fl = 4, Vi = 8, Ka = 16, Tn = 32, dr = 64, ri = 128, Gt = 256, oi = 512, Ht = 1024, Ln = 2048, fr = 4096, Nn = 8192, Ni = 16384, Hf = 32768, Rr = 65536, Of = 1 << 17, Df = 1 << 19, Gl = 1 << 20, ga = 1 << 21, Wn = Symbol("$state"), qa = Symbol("legacy props"), Tf = Symbol("");
var ko = Array.isArray, Lf = Array.prototype.indexOf, ja = Array.from, ii = Object.keys, ao = Object.defineProperty, zn = Object.getOwnPropertyDescriptor, Ul = Object.getOwnPropertyDescriptors, Af = Object.prototype, If = Array.prototype, Fa = Object.getPrototypeOf, Ds = Object.isExtensible;
function Fr(e) {
  return typeof e == "function";
}
const dt = () => {
};
function Zf(e) {
  return e();
}
function so(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Bf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let lo = [], uo = [];
function Jl() {
  var e = lo;
  lo = [], so(e);
}
function Ql() {
  var e = uo;
  uo = [], so(e);
}
function _o(e) {
  lo.length === 0 && queueMicrotask(Jl), lo.push(e);
}
function Rf(e) {
  uo.length === 0 && Bf(Ql), uo.push(e);
}
function Ts() {
  lo.length > 0 && Jl(), uo.length > 0 && Ql();
}
function eu(e) {
  return e === this.v;
}
function Ga(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ua(e) {
  return !Ga(e, this.v);
}
function Xf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Wf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Kf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function jf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Uf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function jt(e, t) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const n = Fa(e);
  if (n !== Af && n !== If)
    return e;
  var r = /* @__PURE__ */ new Map(), o = ko(e), i = wt(0), a = qe, s = (l) => {
    var u = qe;
    yn(a);
    var c;
    return c = l(), yn(u), c;
  };
  return o && r.set("length", wt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ff();
        var d = r.get(u);
        return d === void 0 ? (d = s(() => wt(c.value)), r.set(u, d)) : F(
          d,
          s(() => jt(c.value))
        ), !0;
      },
      deleteProperty(l, u) {
        var c = r.get(u);
        if (c === void 0)
          u in l && r.set(
            u,
            s(() => wt(Et))
          );
        else {
          if (o && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && F(d, f);
          }
          F(c, Et), Ls(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === Wn)
          return e;
        var f = r.get(u), v = u in l;
        if (f === void 0 && (!v || (d = zn(l, u)) != null && d.writable) && (f = s(() => wt(jt(v ? l[u] : Et))), r.set(u, f)), f !== void 0) {
          var y = g(f);
          return y === Et ? void 0 : y;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var d = r.get(u);
          d && (c.value = g(d));
        } else if (c === void 0) {
          var f = r.get(u), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== Et)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var c;
        if (u === Wn)
          return !0;
        var d = r.get(u), f = d !== void 0 && d.v !== Et || Reflect.has(l, u);
        if (d !== void 0 || je !== null && (!f || (c = zn(l, u)) != null && c.writable)) {
          d === void 0 && (d = s(() => wt(f ? jt(l[u]) : Et)), r.set(u, d));
          var v = g(d);
          if (v === Et)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = r.get(u), y = u in l;
        if (o && u === "length")
          for (var x = c; x < /** @type {Source<number>} */
          v.v; x += 1) {
            var b = r.get(x + "");
            b !== void 0 ? F(b, Et) : x in l && (b = s(() => wt(Et)), r.set(x + "", b));
          }
        v === void 0 ? (!y || (f = zn(l, u)) != null && f.writable) && (v = s(() => wt(void 0)), F(
          v,
          s(() => jt(c))
        ), r.set(u, v)) : (y = v.v !== Et, F(
          v,
          s(() => jt(c))
        ));
        var C = Reflect.getOwnPropertyDescriptor(l, u);
        if (C != null && C.set && C.set.call(d, c), !y) {
          if (o && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              r.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= h.v && F(h, $ + 1);
          }
          Ls(i);
        }
        return !0;
      },
      ownKeys(l) {
        g(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = r.get(f);
          return v === void 0 || v.v !== Et;
        });
        for (var [c, d] of r)
          d.v !== Et && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Gf();
      }
    }
  );
}
function Ls(e, t = 1) {
  F(e, e.v + t);
}
const co = /* @__PURE__ */ new Map();
function Er(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: eu,
    rv: 0,
    wv: 0
  };
  return n;
}
function wt(e, t) {
  const n = Er(e);
  return su(n), n;
}
// @__NO_SIDE_EFFECTS__
function te(e, t = !1) {
  var n;
  const r = Er(e);
  return t || (r.equals = Ua), Br && Xe !== null && Xe.l !== null && ((n = Xe.l).s ?? (n.s = [])).push(r), r;
}
function F(e, t, n = !1) {
  qe !== null && !vn && Ti() && qe.f & (pn | Ka) && !(Ut != null && Ut.includes(e)) && Uf();
  let r = n ? jt(t) : t;
  return ha(e, r);
}
function ha(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    So ? co.set(e, t) : co.set(e, n), e.v = t, e.wv = uu(), tu(e, Ln), Ti() && je !== null && je.f & Ht && !(je.f & (Tn | dr)) && (qt === null ? tv([e]) : qt.push(e));
  }
  return t;
}
function As(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function tu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ti(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & Ln || !r && a === je || (an(a, t), s & (Ht | Gt) && (s & pn ? tu(
        /** @type {Derived} */
        a,
        fr
      ) : Oi(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  var t = pn | Ln, n = qe !== null && qe.f & pn ? (
    /** @type {Derived} */
    qe
  ) : null;
  return je === null || n !== null && n.f & Gt ? t |= Gt : je.f |= Gl, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: eu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? je
  };
}
function Ne(e) {
  const t = /* @__PURE__ */ Vr(e);
  return su(t), t;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Vr(e);
  return t.equals = Ua, t;
}
function nu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Jt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Jf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & pn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Qf(e) {
  var t, n = je;
  Fn(Jf(e));
  try {
    nu(e), t = du(e);
  } finally {
    Fn(n);
  }
  return t;
}
function ru(e) {
  var t = Qf(e), n = (Xn || e.f & Gt) && e.deps !== null ? fr : Ht;
  an(e, n), e.equals(t) || (e.v = t, e.wv = uu());
}
function zi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Se = !1;
function It(e) {
  Se = e;
}
let De;
function Ct(e) {
  if (e === null)
    throw zi(), $r;
  return De = e;
}
function mn() {
  return Ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Cn(De)
  );
}
function X(e) {
  if (Se) {
    if (/* @__PURE__ */ Cn(De) !== null)
      throw zi(), $r;
    De = e;
  }
}
function Ve(e = 1) {
  if (Se) {
    for (var t = e, n = De; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(n);
    De = n;
  }
}
function pa() {
  for (var e = 0, t = De; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Wa) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Xa || n === Ya) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(t)
    );
    t.remove(), t = r;
  }
}
var Vt, ou, iu, au;
function ma() {
  if (Vt === void 0) {
    Vt = window, ou = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    iu = zn(t, "firstChild").get, au = zn(t, "nextSibling").get, Ds(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ds(n) && (n.__t = void 0);
  }
}
function Hn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return iu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return au.call(e);
}
function W(e, t) {
  if (!Se)
    return /* @__PURE__ */ $t(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ $t(De)
  );
  if (n === null)
    n = De.appendChild(Hn());
  else if (t && n.nodeType !== 3) {
    var r = Hn();
    return n == null || n.before(r), Ct(r), r;
  }
  return Ct(n), n;
}
function we(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ $t(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Cn(n) : n;
  }
  return De;
}
function Z(e, t = 1, n = !1) {
  let r = Se ? De : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Cn(r);
  if (!Se)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Hn();
    return r === null ? o == null || o.after(a) : r.before(a), Ct(a), a;
  }
  return Ct(r), /** @type {TemplateNode} */
  r;
}
function Ja(e) {
  e.textContent = "";
}
let jo = !1, ai = !1, si = null, rr = !1, So = !1;
function Is(e) {
  So = e;
}
let ro = [], qe = null, vn = !1;
function yn(e) {
  qe = e;
}
let je = null;
function Fn(e) {
  je = e;
}
let Ut = null;
function ev(e) {
  Ut = e;
}
function su(e) {
  qe !== null && qe.f & ga && (Ut === null ? ev([e]) : Ut.push(e));
}
let xt = null, Lt = 0, qt = null;
function tv(e) {
  qt = e;
}
let lu = 1, li = 0, Xn = !1;
function uu() {
  return ++lu;
}
function Xr(e) {
  var t, n = e.f;
  if (n & Ln)
    return !0;
  if (n & fr) {
    var r = e.deps, o = (n & Gt) !== 0;
    if (r !== null) {
      var i, a, s = (n & oi) !== 0, l = o && je !== null && !Xn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= oi), l && d !== null && !(d.f & Gt) && (c.f ^= Gt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Xr(
          /** @type {Derived} */
          a
        ) && ru(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || je !== null && !Xn) && an(e, Ht);
  }
  return !1;
}
function nv(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ri)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ri;
      }
    n = n.parent;
  }
  throw jo = !1, e;
}
function rv(e) {
  return (e.f & Ni) === 0 && (e.parent === null || (e.parent.f & ri) === 0);
}
function Pi(e, t, n, r) {
  if (jo) {
    if (n === null && (jo = !1), rv(t))
      throw e;
    return;
  }
  n !== null && (jo = !0);
  {
    nv(e, t);
    return;
  }
}
function cu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Ut != null && Ut.includes(e) || (i.f & pn ? cu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? an(i, Ln) : i.f & Ht && an(i, fr), Oi(
        /** @type {Effect} */
        i
      )));
    }
}
function du(e) {
  var t, n = xt, r = Lt, o = qt, i = qe, a = Xn, s = Ut, l = Xe, u = vn, c = e.f;
  xt = /** @type {null | Value[]} */
  null, Lt = 0, qt = null, Xn = (c & Gt) !== 0 && (vn || !rr || qe === null), qe = c & (Tn | dr) ? null : e, Ut = null, Zs(e.ctx), vn = !1, li++, e.f |= ga;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (xt !== null) {
      var v;
      if (ui(e, Lt), f !== null && Lt > 0)
        for (f.length = Lt + xt.length, v = 0; v < xt.length; v++)
          f[Lt + v] = xt[v];
      else
        e.deps = f = xt;
      if (!Xn)
        for (v = Lt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Lt < f.length && (ui(e, Lt), f.length = Lt);
    if (Ti() && qt !== null && !vn && f !== null && !(e.f & (pn | fr | Ln)))
      for (v = 0; v < /** @type {Source[]} */
      qt.length; v++)
        cu(
          qt[v],
          /** @type {Effect} */
          e
        );
    return i !== null && (li++, qt !== null && (o === null ? o = qt : o.push(.../** @type {Source[]} */
    qt))), d;
  } finally {
    xt = n, Lt = r, qt = o, qe = i, Xn = a, Ut = s, Zs(l), vn = u, e.f ^= ga;
  }
}
function ov(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Lf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & pn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (an(t, fr), t.f & (Gt | oi) || (t.f ^= oi), nu(
    /** @type {Derived} **/
    t
  ), ui(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ui(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ov(e, n[r]);
}
function Hi(e) {
  var t = e.f;
  if (!(t & Ni)) {
    an(e, Ht);
    var n = je, r = Xe, o = rr;
    je = e, rr = !0;
    try {
      t & Ka ? vv(e) : hu(e), gu(e);
      var i = du(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = lu;
      var a = e.deps, s;
      Pf && bf && e.f & Ln;
    } catch (l) {
      Pi(l, e, n, r || e.ctx);
    } finally {
      rr = o, je = n;
    }
  }
}
function iv() {
  try {
    Kf();
  } catch (e) {
    if (si !== null)
      Pi(e, si, null);
    else
      throw e;
  }
}
function fu() {
  var e = rr;
  try {
    var t = 0;
    for (rr = !0; ro.length > 0; ) {
      t++ > 1e3 && iv();
      var n = ro, r = n.length;
      ro = [];
      for (var o = 0; o < r; o++) {
        var i = sv(n[o]);
        av(i);
      }
    }
  } finally {
    ai = !1, rr = e, si = null, co.clear();
  }
}
function av(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ni | Nn)))
        try {
          Xr(r) && (Hi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? pu(r) : r.fn = null));
        } catch (o) {
          Pi(o, r, null, r.ctx);
        }
    }
}
function Oi(e) {
  ai || (ai = !0, queueMicrotask(fu));
  for (var t = si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (dr | Tn)) {
      if (!(n & Ht)) return;
      t.f ^= Ht;
    }
  }
  ro.push(t);
}
function sv(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Tn | dr)) !== 0, i = o && (r & Ht) !== 0;
    if (!i && !(r & Nn)) {
      if (r & Fl)
        t.push(n);
      else if (o)
        n.f ^= Ht;
      else {
        var a = qe;
        try {
          qe = n, Xr(n) && Hi(n);
        } catch (u) {
          Pi(u, n, null, n.ctx);
        } finally {
          qe = a;
        }
      }
      var s = n.first;
      if (s !== null) {
        n = s;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
  return t;
}
function p(e) {
  var t;
  for (Ts(); ro.length > 0; )
    ai = !0, fu(), Ts();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & pn) !== 0;
  if (qe !== null && !vn) {
    if (!(Ut != null && Ut.includes(e))) {
      var r = qe.deps;
      e.rv < li && (e.rv = li, xt === null && r !== null && r[Lt] === e ? Lt++ : xt === null ? xt = [e] : (!Xn || !xt.includes(e)) && xt.push(e));
    }
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
  e, Xr(o) && ru(o)), So && co.has(e) ? co.get(e) : e.v;
}
function wn(e) {
  var t = vn;
  try {
    return vn = !0, e();
  } finally {
    vn = t;
  }
}
const lv = -7169;
function an(e, t) {
  e.f = e.f & lv | t;
}
function G(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      ya(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && ya(n);
      }
  }
}
function ya(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ya(e[r], t);
      } catch {
      }
    const n = Fa(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ul(n);
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
function vu(e) {
  je === null && qe === null && Wf(), qe !== null && qe.f & Gt && je === null && Yf(), So && Xf();
}
function uv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function vr(e, t, n, r = !0) {
  var o = je, i = {
    ctx: Xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ln,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Hi(i), i.f |= Hf;
    } catch (l) {
      throw Jt(i), l;
    }
  else t !== null && Oi(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Gl | ri)) === 0;
  if (!a && r && (o !== null && uv(i, o), qe !== null && qe.f & pn)) {
    var s = (
      /** @type {Derived} */
      qe
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Qa(e) {
  const t = vr(Vi, null, !1);
  return an(t, Ht), t.teardown = e, t;
}
function Gn(e) {
  vu();
  var t = je !== null && (je.f & Tn) !== 0 && Xe !== null && !Xe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Xe
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: je,
      reaction: qe
    });
  } else {
    var r = At(e);
    return r;
  }
}
function cv(e) {
  return vu(), Yr(e);
}
function dv(e) {
  const t = vr(dr, e, !0);
  return () => {
    Jt(t);
  };
}
function fv(e) {
  const t = vr(dr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Nr(t, () => {
      Jt(t), r(void 0);
    }) : (Jt(t), r(void 0));
  });
}
function At(e) {
  return vr(Fl, e, !1);
}
function de(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Yr(() => {
    e(), !r.ran && (r.ran = !0, F(n.l.r2, !0), wn(t));
  });
}
function vt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Xe
  );
  Yr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Ht && an(n, fr), Xr(n) && Hi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Yr(e) {
  return vr(Vi, e, !0);
}
function Me(e, t = [], n = Vr) {
  const r = t.map(n);
  return gr(() => e(...r.map(g)));
}
function gr(e, t = 0) {
  return vr(Vi | Ka | t, e, !0);
}
function On(e, t = !0) {
  return vr(Vi | Tn, e, !0, t);
}
function gu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = So, r = qe;
    Is(!0), yn(null);
    try {
      t.call(null);
    } finally {
      Is(n), yn(r);
    }
  }
}
function hu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & dr ? n.parent = null : Jt(n, t), n = r;
  }
}
function vv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Tn || Jt(t), t = n;
  }
}
function Jt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Df) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  hu(e, t && !n), ui(e, 0), an(e, Ni);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  gu(e);
  var s = e.parent;
  s !== null && s.first !== null && pu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function pu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Nr(e, t) {
  var n = [];
  es(e, n, !0), mu(n, () => {
    Jt(e), t && t();
  });
}
function mu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function es(e, t, n) {
  if (!(e.f & Nn)) {
    if (e.f ^= Nn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Rr) !== 0 || (r.f & Tn) !== 0;
      es(r, t, i ? n : !1), r = o;
    }
  }
}
function fo(e) {
  yu(e, !0);
}
function yu(e, t) {
  if (e.f & Nn) {
    e.f ^= Nn, e.f & Ht || (e.f ^= Ht), Xr(e) && (an(e, Ln), Oi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rr) !== 0 || (n.f & Tn) !== 0;
      yu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Di(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Xe = null;
function Zs(e) {
  Xe = e;
}
function ir(e) {
  return (
    /** @type {T} */
    ts().get(e)
  );
}
function zr(e, t) {
  return ts().set(e, t), t;
}
function gv(e) {
  return ts().has(e);
}
function ue(e, t = !1, n) {
  var r = Xe = {
    p: Xe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Br && !t && (Xe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Er(!1)
  }), Qa(() => {
    r.d = !0;
  });
}
function ce(e) {
  const t = Xe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = je, r = qe;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          Fn(i.effect), yn(i.reaction), At(i.fn);
        }
      } finally {
        Fn(n), yn(r);
      }
    }
    Xe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ti() {
  return !Br || Xe !== null && Xe.l === null;
}
function ts(e) {
  return Xe === null && Di(), Xe.c ?? (Xe.c = new Map(hv(Xe) || void 0));
}
function hv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function pv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const mv = [
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
function yv(e) {
  return mv.includes(e);
}
const wv = {
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
function xv(e) {
  return e = e.toLowerCase(), wv[e] ?? e;
}
const bv = ["touchstart", "touchmove"];
function $v(e) {
  return bv.includes(e);
}
const Cv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function kv(e) {
  return Cv.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function _v(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, _o(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Sv(e) {
  Se && /* @__PURE__ */ $t(e) !== null && Ja(e);
}
let Bs = !1;
function Mv() {
  Bs || (Bs = !0, document.addEventListener(
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
function Ev(e) {
  var t = qe, n = je;
  yn(null), Fn(null);
  try {
    return e();
  } finally {
    yn(t), Fn(n);
  }
}
const wu = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set();
function xu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Qr.call(t, i), !i.cancelBubble)
      return Ev(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? _o(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Re(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = xu(e, t, n, i);
  (t === document.body || t === window || t === document) && Qa(() => {
    t.removeEventListener(e, a, i);
  });
}
function Li(e) {
  for (var t = 0; t < e.length; t++)
    wu.add(e[t]);
  for (var n of wa)
    n(e);
}
function Qr(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, i = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var u = i.indexOf(l);
    if (u !== -1 && (n === document || n === /** @type {any} */
    window)) {
      e.__root = n;
      return;
    }
    var c = i.indexOf(n);
    if (c === -1)
      return;
    u <= c && (s = u);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== n) {
    ao(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = qe, f = je;
    yn(null), Fn(null);
    try {
      for (var v, y = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + o];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (ko(b)) {
              var [C, ...h] = b;
              C.apply(a, [e, ...h]);
            } else
              b.call(a, e);
        } catch ($) {
          v ? y.push($) : v = $;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        a = x;
      }
      if (v) {
        for (let $ of y)
          queueMicrotask(() => {
            throw $;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, yn(d), Fn(f);
    }
  }
}
function ns(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Pt(e, t) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & jl) !== 0, r = (t & Vf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Pt(De, null), De;
    o === void 0 && (o = ns(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ $t(o)));
    var a = (
      /** @type {TemplateNode} */
      r || ou ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Pt(s, l);
    } else
      Pt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function xe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Se)
      return Pt(De, null), De;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ns(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ $t(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ $t(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ $t(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ $t(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Pt(c, d);
    } else
      Pt(u, u);
    return u;
  };
}
function Ie(e = "") {
  if (!Se) {
    var t = Hn(e + "");
    return Pt(t, t), t;
  }
  var n = De;
  return n.nodeType !== 3 && (n.before(n = Hn()), Ct(n)), Pt(n, n), n;
}
function et() {
  if (Se)
    return Pt(De, null), De;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Hn();
  return e.append(t, n), Pt(t, n), e;
}
function D(e, t) {
  if (Se) {
    je.nodes_end = De, mn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Bt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function bu(e, t) {
  return $u(e, t);
}
function Vv(e, t) {
  ma(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = De;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $t(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Xa); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(i);
    if (!i)
      throw $r;
    It(!0), Ct(
      /** @type {Comment} */
      i
    ), mn();
    const a = $u(e, { ...t, anchor: i });
    if (De === null || De.nodeType !== 8 || /** @type {Comment} */
    De.data !== Wa)
      throw zi(), $r;
    return It(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === $r)
      return t.recover === !1 && qf(), ma(), Ja(n), It(!1), bu(e, t);
    throw a;
  } finally {
    It(r), Ct(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function $u(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  ma();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var y = $v(v);
        t.addEventListener(v, Qr, { passive: y });
        var x = yr.get(v);
        x === void 0 ? (document.addEventListener(v, Qr, { passive: y }), yr.set(v, 1)) : yr.set(v, x + 1);
      }
    }
  };
  l(ja(wu)), wa.add(l);
  var u = void 0, c = fv(() => {
    var d = n ?? t.appendChild(Hn());
    return On(() => {
      if (i) {
        ue({});
        var f = (
          /** @type {ComponentContext} */
          Xe
        );
        f.c = i;
      }
      o && (r.$$events = o), Se && Pt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Se && (je.nodes_end = De), i && ce();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Qr);
        var y = (
          /** @type {number} */
          yr.get(v)
        );
        --y === 0 ? (document.removeEventListener(v, Qr), yr.delete(v)) : yr.set(v, y);
      }
      wa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return xa.set(u, c), u;
}
let xa = /* @__PURE__ */ new WeakMap();
function Nv(e, t) {
  const n = xa.get(e);
  return n ? (xa.delete(e), n(t)) : Promise.resolve();
}
function $e(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && mn();
  var o = e, i = null, a = null, s = Et, l = n > 0 ? Rr : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let y = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === Xa ? r = 0 : b === Ya ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = pa(), Ct(o), It(!1), y = !0, r = -1);
    }
    s ? (i ? fo(i) : v && (i = On(() => v(o))), a && Nr(a, () => {
      a = null;
    })) : (a ? fo(a) : v && (a = On(() => v(o, [n + 1, r]))), i && Nr(i, () => {
      i = null;
    })), y && It(!0);
  };
  gr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Se && (o = De);
}
function vo(e, t) {
  return t;
}
function zv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    es(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ja(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  mu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), Bn(e, c.prev, c.next)), Jt(c.e, !s);
    }
  });
}
function Ot(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Kl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Se ? Ct(
      /** @type {Comment | Text} */
      /* @__PURE__ */ $t(u)
    ) : u.appendChild(Hn());
  }
  Se && mn();
  var c = null, d = !1, f = /* @__PURE__ */ pe(() => {
    var v = n();
    return ko(v) ? v : v == null ? [] : ja(v);
  });
  gr(() => {
    var v = g(f), y = v.length;
    if (d && y === 0)
      return;
    d = y === 0;
    let x = !1;
    if (Se) {
      var b = (
        /** @type {Comment} */
        a.data === Ya
      );
      b !== (y === 0) && (a = pa(), Ct(a), It(!1), x = !0);
    }
    if (Se) {
      for (var C = null, h, $ = 0; $ < y; $++) {
        if (De.nodeType === 8 && /** @type {Comment} */
        De.data === Wa) {
          a = /** @type {Comment} */
          De, x = !0, It(!1);
          break;
        }
        var w = v[$], k = r(w, $);
        h = Cu(
          De,
          s,
          C,
          null,
          w,
          k,
          $,
          o,
          t,
          n
        ), s.items.set(k, h), C = h;
      }
      y > 0 && Ct(pa());
    }
    Se || Pv(v, s, a, o, t, r, n), i !== null && (y === 0 ? c ? fo(c) : c = On(() => i(a)) : c !== null && Nr(c, () => {
      c = null;
    })), x && It(!0), g(f);
  }), Se && (a = De);
}
function Pv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & Cf) !== 0, f = (o & (Ba | Ra)) !== 0, v = e.length, y = t.items, x = t.first, b = x, C, h = null, $, w = [], k = [], S, M, V, z;
  if (d)
    for (z = 0; z < v; z += 1)
      S = e[z], M = i(S, z), V = y.get(M), V !== void 0 && ((s = V.a) == null || s.measure(), ($ ?? ($ = /* @__PURE__ */ new Set())).add(V));
  for (z = 0; z < v; z += 1) {
    if (S = e[z], M = i(S, z), V = y.get(M), V === void 0) {
      var O = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      h = Cu(
        O,
        t,
        h,
        h === null ? t.first : h.next,
        S,
        M,
        z,
        r,
        o,
        a
      ), y.set(M, h), w = [], k = [], b = h.next;
      continue;
    }
    if (f && Hv(V, S, z, o), V.e.f & Nn && (fo(V.e), d && ((l = V.a) == null || l.unfix(), ($ ?? ($ = /* @__PURE__ */ new Set())).delete(V))), V !== b) {
      if (C !== void 0 && C.has(V)) {
        if (w.length < k.length) {
          var T = k[0], A;
          h = T.prev;
          var I = w[0], E = w[w.length - 1];
          for (A = 0; A < w.length; A += 1)
            Rs(w[A], T, n);
          for (A = 0; A < k.length; A += 1)
            C.delete(k[A]);
          Bn(t, I.prev, E.next), Bn(t, h, I), Bn(t, E, T), b = T, h = E, z -= 1, w = [], k = [];
        } else
          C.delete(V), Rs(V, b, n), Bn(t, V.prev, V.next), Bn(t, V, h === null ? t.first : h.next), Bn(t, h, V), h = V;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== M; )
        b.e.f & Nn || (C ?? (C = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      V = b;
    }
    w.push(V), h = V, b = V.next;
  }
  if (b !== null || C !== void 0) {
    for (var P = C === void 0 ? [] : ja(C); b !== null; )
      b.e.f & Nn || P.push(b), b = b.next;
    var _ = P.length;
    if (_ > 0) {
      var N = o & Kl && v === 0 ? n : null;
      if (d) {
        for (z = 0; z < _; z += 1)
          (u = P[z].a) == null || u.measure();
        for (z = 0; z < _; z += 1)
          (c = P[z].a) == null || c.fix();
      }
      zv(t, P, N, y);
    }
  }
  d && _o(() => {
    var H;
    if ($ !== void 0)
      for (V of $)
        (H = V.a) == null || H.apply();
  }), je.first = t.first && t.first.e, je.last = h && h.e;
}
function Hv(e, t, n, r) {
  r & Ba && ha(e.v, t), r & Ra ? ha(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Cu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ba) !== 0, d = (l & kf) === 0, f = c ? d ? /* @__PURE__ */ te(o) : Er(o) : o, v = l & Ra ? Er(a) : a, y = {
    i: v,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return y.e = On(() => s(e, f, v, u), Se), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? t.first = y : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function Rs(e, t, n) {
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
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(i)
    );
    o.before(i), i = a;
  }
}
function Bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function rs(e, t, n, r, o) {
  var i = e, a = "", s;
  gr(() => {
    if (a === (a = t() ?? "")) {
      Se && mn();
      return;
    }
    s !== void 0 && (Jt(s), s = void 0), a !== "" && (s = On(() => {
      if (Se) {
        De.data;
        for (var l = mn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Cn(l);
        if (l === null)
          throw zi(), $r;
        Pt(De, u), i = Ct(l);
        return;
      }
      var c = a + "", d = ns(c);
      Pt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function pt(e, t, n, r, o) {
  var i;
  Se && mn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Ov(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function ar(e, t, ...n) {
  var r = e, o = dt, i;
  gr(() => {
    o !== (o = t()) && (i && (Jt(i), i = null), i = On(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Rr), Se && (r = De);
}
function ku(e, t, n) {
  Se && mn();
  var r = e, o, i;
  gr(() => {
    o !== (o = t()) && (i && (Nr(i), i = null), o && (i = On(() => n(r, o))));
  }, Rr), Se && (r = De);
}
function Dv(e, t, n, r, o, i) {
  let a = Se;
  Se && mn();
  var s, l, u = null;
  Se && De.nodeType === 1 && (u = /** @type {Element} */
  De, mn());
  var c = (
    /** @type {TemplateNode} */
    Se ? De : e
  ), d;
  gr(() => {
    const f = t() || null;
    var v = f === "svg" ? zf : null;
    f !== s && (d && (f === null ? Nr(d, () => {
      d = null, l = null;
    }) : f === l ? fo(d) : Jt(d)), f && f !== l && (d = On(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Pt(u, u), r) {
        Se && kv(f) && u.append(document.createComment(""));
        var y = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ $t(u) : u.appendChild(Hn())
        );
        Se && (y === null ? It(!1) : Ct(y)), r(u, y);
      }
      je.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Rr), a && (It(!0), Ct(c));
}
function Qe(e, t) {
  _o(() => {
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
  At(() => {
    var r = wn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Yr(() => {
        var a = n();
        G(a), o && Ga(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function _u(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = _u(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Tv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = _u(e)) && (r && (r += " "), r += t);
  return r;
}
function kn(e) {
  return typeof e == "object" ? Tv(e) : e ?? "";
}
const Xs = [...` 	
\r\f \v\uFEFF`];
function Lv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, a = 0; (a = r.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || Xs.includes(r[a - 1])) && (s === r.length || Xs.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function Ys(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ea(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Av(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(ea)), o && l.push(...Object.keys(o).map(ea));
      var u = 0, c = -1;
      const x = e.length;
      for (var d = 0; d < x; d++) {
        var f = e[d];
        if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === '"' || f === "'" ? i = f : f === "(" ? a++ : f === ")" && a--, !s && i === !1 && a === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === x - 1) {
            if (c !== -1) {
              var v = ea(e.substring(u, c).trim());
              if (!l.includes(v)) {
                f !== ";" && d++;
                var y = e.substring(u, d).trim();
                n += " " + y + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Ys(r)), o && (n += Ys(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function kt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Se || a !== n) {
    var s = Lv(n, r, i);
    (!Se || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function ta(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ft(e, t, n, r) {
  var o = e.__style;
  if (Se || o !== t) {
    var i = Av(t, r);
    (!Se || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ta(e, n == null ? void 0 : n[0], r[0]), ta(e, n == null ? void 0 : n[1], r[1], "important")) : ta(e, n, r));
  return r;
}
const Gr = Symbol("class"), er = Symbol("style"), Su = Symbol("is custom element"), Mu = Symbol("is html");
function oo(e) {
  if (Se) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          me(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          me(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Rf(n), Mv();
  }
}
function na(e, t) {
  var n = os(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Iv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function me(e, t, n, r) {
  var o = os(e);
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Tf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Eu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function sn(e, t, n, r, o = !1) {
  var i = os(e), a = i[Su], s = !i[Mu];
  let l = Se && a;
  l && It(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = kn(n.class) : (r || n[Gr]) && (n.class = null), n[er] && (n.style ?? (n.style = null));
  var f = Eu(e);
  for (const $ in n) {
    let w = n[$];
    if (c && $ === "value" && w == null) {
      e.value = e.__value = "", u[$] = w;
      continue;
    }
    if ($ === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      kt(e, v, w, r, t == null ? void 0 : t[Gr], n[Gr]), u[$] = w, u[Gr] = n[Gr];
      continue;
    }
    if ($ === "style") {
      ft(e, w, t == null ? void 0 : t[er], n[er]), u[$] = w, u[er] = n[er];
      continue;
    }
    var y = u[$];
    if (w !== y) {
      u[$] = w;
      var x = $[0] + $[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, S = "$$" + $;
          let M = $.slice(2);
          var b = yv(M);
          if (pv(M) && (M = M.slice(0, -7), k.capture = !0), !b && y) {
            if (w != null) continue;
            e.removeEventListener(M, u[S], k), u[S] = null;
          }
          if (w != null)
            if (b)
              e[`__${M}`] = w, Li([M]);
            else {
              let V = function(z) {
                u[$].call(this, z);
              };
              u[S] = xu(M, e, V, k);
            }
          else b && (e[`__${M}`] = void 0);
        } else if ($ === "style")
          me(e, $, w);
        else if ($ === "autofocus")
          _v(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && ($ === "__value" || $ === "value" && w != null))
          e.value = e.__value = w;
        else if ($ === "selected" && c)
          Iv(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var C = $;
          s || (C = xv(C));
          var h = C === "defaultValue" || C === "defaultChecked";
          if (w == null && !a && !h)
            if (i[$] = null, C === "value" || C === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (C === "value") {
                let M = k.defaultValue;
                k.removeAttribute(C), k.defaultValue = M, k.value = k.__value = S ? M : null;
              } else {
                let M = k.defaultChecked;
                k.removeAttribute(C), k.defaultChecked = M, k.checked = S ? M : !1;
              }
            } else
              e.removeAttribute($);
          else h || f.includes(C) && (a || typeof w != "string") ? e[C] = w : typeof w != "function" && me(e, C, w);
        }
    }
  }
  return l && It(!0), u;
}
function os(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Su]: e.nodeName.includes("-"),
      [Mu]: e.namespaceURI === Nf
    })
  );
}
var Ws = /* @__PURE__ */ new Map();
function Eu(e) {
  var t = Ws.get(e.nodeName);
  if (t) return t;
  Ws.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Ul(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Fa(r);
  }
  return t;
}
var tr, io, Fo, ba, Vu;
const $a = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    xr(this, ba), xr(this, tr, /* @__PURE__ */ new WeakMap()), xr(this, io), xr(this, Fo), ni(this, Fo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = lt(this, tr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), lt(this, tr).set(t, r), wf(this, ba, Vu).call(this).observe(t, lt(this, Fo)), () => {
      var o = lt(this, tr).get(t);
      o.delete(n), o.size === 0 && (lt(this, tr).delete(t), lt(this, io).unobserve(t));
    };
  }
};
tr = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakSet(), Vu = function() {
  return lt(this, io) ?? ni(this, io, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        $a.entries.set(t.target, t);
        for (var n of lt(this, tr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Nt($a, "entries", /* @__PURE__ */ new WeakMap());
let Zv = $a;
var Bv = /* @__PURE__ */ new Zv({
  box: "border-box"
});
function Ks(e, t, n) {
  var r = Bv.observe(e, () => n(e[t]));
  At(() => (wn(() => n(e[t])), r));
}
function qs(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function xn(e = {}, t, n, r) {
  return At(() => {
    var o, i;
    return Yr(() => {
      o = i, i = [], wn(() => {
        e !== n(...i) && (t(e, ...i), o && qs(n(...o), e) && t(null, ...o));
      });
    }), () => {
      _o(() => {
        i && qs(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ra(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function Pe(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), n = t.l.u;
  if (!n) return;
  let r = () => G(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Vr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(a);
  }
  n.b.length && cv(() => {
    js(t, r), so(n.b);
  }), Gn(() => {
    const o = wn(() => n.m.map(Zf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Gn(() => {
    js(t, r), so(n.a);
  });
}
function js(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Oe(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = ko(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function Yt(e) {
  Xe === null && Di(), Br && Xe.l !== null ? Xv(Xe).m.push(e) : Gn(() => {
    const t = wn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function is(e) {
  Xe === null && Di(), Yt(() => () => wn(e));
}
function Rv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ai() {
  const e = Xe;
  return e === null && Di(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = ko(i) ? i.slice() : [i], s = Rv(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of a)
        l.call(e.x, s);
      return !s.defaultPrevented;
    }
    return !0;
  };
}
function Xv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function as(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), dt;
  const r = wn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const wr = [];
function Kt(e, t) {
  return {
    subscribe: ye(e, t).subscribe
  };
}
function ye(e, t = dt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ga(e, s) && (e = s, n)) {
      const l = !wr.length;
      for (const u of r)
        u[1](), wr.push(u, e);
      if (l) {
        for (let u = 0; u < wr.length; u += 2)
          wr[u][0](wr[u + 1]);
        wr.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = dt) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || dt), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function Kn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Kt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = dt;
    const f = () => {
      if (c)
        return;
      d();
      const y = t(r ? u[0] : u, a, s);
      i ? a(y) : d = typeof y == "function" ? y : dt;
    }, v = o.map(
      (y, x) => as(
        y,
        (b) => {
          u[x] = b, c &= ~(1 << x), l && f();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, f(), function() {
      so(v), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return as(e, (n) => t = n)(), t;
}
let Bo = !1, Ca = Symbol();
function J(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ te(void 0),
    unsubscribe: dt
  });
  if (r.store !== e && !(Ca in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = dt;
    else {
      var o = !0;
      r.unsubscribe = as(e, (i) => {
        o ? r.source.v = i : F(r.source, i);
      }), o = !1;
    }
  return e && Ca in n ? q(e) : g(r.source);
}
function Yv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = dt), e;
}
function ci(e, t) {
  return e.set(t), t;
}
function ot() {
  const e = {};
  function t() {
    Qa(() => {
      for (var n in e)
        e[n].unsubscribe();
      ao(e, Ca, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Wv(e) {
  var t = Bo;
  try {
    return Bo = !1, [e(), Bo];
  } finally {
    Bo = t;
  }
}
const Kv = {
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
function mt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Kv
  );
}
const qv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = m(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      ql
    )), e.special[t](n), As(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), As(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function at(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Er(0) }, qv);
}
const jv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Fr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Fr(o) && (o = o());
      const i = zn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Fr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = zn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Wn || t === qa) return !1;
    for (let n of e.props)
      if (Fr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Fr(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function ct(...e) {
  return new Proxy({ props: e }, jv);
}
function Fs(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function m(e, t, n, r) {
  var o, i = (n & _f) !== 0, a = !Br || (n & Sf) !== 0, s = (n & Mf) !== 0, l = (n & Ef) !== 0, u = !1, c;
  s ? [c, u] = Wv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Wn in e || qa in e, f = s && (((o = zn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((M) => e[t] = M))) || void 0, v = (
    /** @type {V} */
    r
  ), y = !0, x = !1, b = () => (x = !0, y && (y = !1, l ? v = wn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && jf(), c = b(), f && f(c));
  var C;
  if (a)
    C = () => {
      var M = (
        /** @type {V} */
        e[t]
      );
      return M === void 0 ? b() : (y = !0, x = !1, M);
    };
  else {
    var h = (i ? Vr : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Of, C = () => {
      var M = g(h);
      return M !== void 0 && (v = /** @type {V} */
      void 0), M === void 0 ? v : M;
    };
  }
  if (!(n & ql))
    return C;
  if (f) {
    var $ = e.$$legacy;
    return function(M, V) {
      return arguments.length > 0 ? ((!a || !V || $ || u) && f(V ? C() : M), M) : C();
    };
  }
  var w = !1, k = /* @__PURE__ */ te(c), S = /* @__PURE__ */ Vr(() => {
    var M = C(), V = g(k);
    return w ? (w = !1, V) : k.v = M;
  });
  return s && g(S), i || (S.equals = Ua), function(M, V) {
    if (arguments.length > 0) {
      const z = V ? g(S) : a && s ? jt(M) : M;
      if (!S.equals(z)) {
        if (w = !0, F(k, z), x && v !== void 0 && (v = z), Fs(S))
          return M;
        wn(() => g(S));
      }
      return M;
    }
    return Fs(S) ? S.v : g(S);
  };
}
function Fv(e) {
  return new Gv(e);
}
var Zn, nn;
class Gv {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    xr(this, Zn), xr(this, nn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ te(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return g(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === qa ? !0 : (g(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return F(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ni(this, nn, (t.hydrate ? Vv : bu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), ni(this, Zn, i.$$events);
    for (const a of Object.keys(lt(this, nn)))
      a === "$set" || a === "$destroy" || a === "$on" || ao(this, a, {
        get() {
          return lt(this, nn)[a];
        },
        /** @param {any} value */
        set(s) {
          lt(this, nn)[a] = s;
        },
        enumerable: !0
      });
    lt(this, nn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, lt(this, nn).$destroy = () => {
      Nv(lt(this, nn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    lt(this, nn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    lt(this, Zn)[t] = lt(this, Zn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return lt(this, Zn)[t].push(r), () => {
      lt(this, Zn)[t] = lt(this, Zn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    lt(this, nn).$destroy();
  }
}
Zn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap();
let Nu;
typeof HTMLElement == "function" && (Nu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Nt(this, "$$ctor"), Nt(this, "$$s"), Nt(this, "$$c"), Nt(this, "$$cn", !1), Nt(this, "$$d", {}), Nt(this, "$$r", !1), Nt(this, "$$p_d", {}), Nt(this, "$$l", {}), Nt(this, "$$l_u", /* @__PURE__ */ new Map()), Nt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = Uv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Go(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Fv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = dv(() => {
        Yr(() => {
          var r;
          this.$$r = !0;
          for (const o of ii(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = Go(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, i);
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
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Go(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return ii(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Go(e, t, n, r) {
  var o;
  const i = (o = n[e]) == null ? void 0 : o.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function Uv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, i) {
  let a = class extends Nu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ii(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ii(t).forEach((s) => {
    ao(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Go(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = zn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    ao(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function St(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = St(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Jv = { value: () => {
} };
function Ii() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Uo(n);
}
function Uo(e) {
  this._ = e;
}
function Qv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Uo.prototype = Ii.prototype = {
  constructor: Uo,
  on: function(e, t) {
    var n = this._, r = Qv(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = e1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = Gs(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Gs(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Uo(e);
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
function e1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Gs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Jv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ka = "http://www.w3.org/1999/xhtml";
const Us = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ka,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Us.hasOwnProperty(t) ? { space: Us[t], local: e } : e;
}
function t1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ka && t.documentElement.namespaceURI === ka ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function n1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function zu(e) {
  var t = Zi(e);
  return (t.local ? n1 : t1)(t);
}
function r1() {
}
function ss(e) {
  return e == null ? r1 : function() {
    return this.querySelector(e);
  };
}
function o1(e) {
  typeof e != "function" && (e = ss(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Xt(r, this._parents);
}
function i1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function a1() {
  return [];
}
function Pu(e) {
  return e == null ? a1 : function() {
    return this.querySelectorAll(e);
  };
}
function s1(e) {
  return function() {
    return i1(e.apply(this, arguments));
  };
}
function l1(e) {
  typeof e == "function" ? e = s1(e) : e = Pu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Xt(r, o);
}
function Hu(e) {
  return function() {
    return this.matches(e);
  };
}
function Ou(e) {
  return function(t) {
    return t.matches(e);
  };
}
var u1 = Array.prototype.find;
function c1(e) {
  return function() {
    return u1.call(this.children, e);
  };
}
function d1() {
  return this.firstElementChild;
}
function f1(e) {
  return this.select(e == null ? d1 : c1(typeof e == "function" ? e : Ou(e)));
}
var v1 = Array.prototype.filter;
function g1() {
  return Array.from(this.children);
}
function h1(e) {
  return function() {
    return v1.call(this.children, e);
  };
}
function p1(e) {
  return this.selectAll(e == null ? g1 : h1(typeof e == "function" ? e : Ou(e)));
}
function m1(e) {
  typeof e != "function" && (e = Hu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Xt(r, this._parents);
}
function Du(e) {
  return new Array(e.length);
}
function y1() {
  return new Xt(this._enter || this._groups.map(Du), this._parents);
}
function di(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
di.prototype = {
  constructor: di,
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
function w1(e) {
  return function() {
    return e;
  };
}
function x1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new di(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function b1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new di(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function $1(e) {
  return e.__data__;
}
function C1(e, t) {
  if (!arguments.length) return Array.from(this, $1);
  var n = t ? b1 : x1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = w1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = k1(e.call(c, c && c.__data__, u, r)), y = v.length, x = s[u] = new Array(y), b = a[u] = new Array(y), C = l[u] = new Array(f);
    n(c, d, x, b, C, v, t);
    for (var h = 0, $ = 0, w, k; h < y; ++h)
      if (w = x[h]) {
        for (h >= $ && ($ = h + 1); !(k = b[$]) && ++$ < y; ) ;
        w._next = k || null;
      }
  }
  return a = new Xt(a, r), a._enter = s, a._exit = l, a;
}
function k1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _1() {
  return new Xt(this._exit || this._groups.map(Du), this._parents);
}
function S1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function M1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, y = 0; y < d; ++y)
      (v = u[y] || c[y]) && (f[y] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Xt(s, this._parents);
}
function E1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function V1(e) {
  e || (e = N1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Xt(o, this._parents).order();
}
function N1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function z1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function P1() {
  return Array.from(this);
}
function H1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function O1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function D1() {
  return !this.node();
}
function T1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function L1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function A1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function I1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Z1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function B1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function R1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function X1(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? A1 : L1 : typeof t == "function" ? n.local ? R1 : B1 : n.local ? Z1 : I1)(n, t));
}
function Tu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Y1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function W1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function K1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function q1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Y1 : typeof t == "function" ? K1 : W1)(e, t, n ?? "")) : Pr(this.node(), e);
}
function Pr(e, t) {
  return e.style.getPropertyValue(t) || Tu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function j1(e) {
  return function() {
    delete this[e];
  };
}
function F1(e, t) {
  return function() {
    this[e] = t;
  };
}
function G1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function U1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? j1 : typeof t == "function" ? G1 : F1)(e, t)) : this.node()[e];
}
function Lu(e) {
  return e.trim().split(/^|\s+/);
}
function ls(e) {
  return e.classList || new Au(e);
}
function Au(e) {
  this._node = e, this._names = Lu(e.getAttribute("class") || "");
}
Au.prototype = {
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
function Iu(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Zu(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function J1(e) {
  return function() {
    Iu(this, e);
  };
}
function Q1(e) {
  return function() {
    Zu(this, e);
  };
}
function eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Iu : Zu)(this, e);
  };
}
function tg(e, t) {
  var n = Lu(e + "");
  if (arguments.length < 2) {
    for (var r = ls(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? eg : t ? J1 : Q1)(n, t));
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
function ag() {
  this.innerHTML = "";
}
function sg(e) {
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
  return arguments.length ? this.each(e == null ? ag : (typeof e == "function" ? lg : sg)(e)) : this.node().innerHTML;
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
function vg() {
  return this.each(fg);
}
function gg(e) {
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function hg() {
  return null;
}
function pg(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? hg : typeof t == "function" ? t : ss(t);
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
function xg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function bg(e) {
  return this.select(e ? xg : wg);
}
function $g(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Cg(e) {
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
    var r = this.__on, o, i = Cg(t);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((o = r[a]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Mg(e, t, n) {
  var r = kg(e + ""), o, i = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (o = 0, c = s[l]; o < i; ++o)
          if ((a = r[o]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? Sg : _g, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Bu(e, t, n) {
  var r = Tu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Eg(e, t) {
  return function() {
    return Bu(this, e, t);
  };
}
function Vg(e, t) {
  return function() {
    return Bu(this, e, t.apply(this, arguments));
  };
}
function Ng(e, t) {
  return this.each((typeof t == "function" ? Vg : Eg)(e, t));
}
function* zg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Ru = [null];
function Xt(e, t) {
  this._groups = e, this._parents = t;
}
function Mo() {
  return new Xt([[document.documentElement]], Ru);
}
function Pg() {
  return this;
}
Xt.prototype = Mo.prototype = {
  constructor: Xt,
  select: o1,
  selectAll: l1,
  selectChild: f1,
  selectChildren: p1,
  filter: m1,
  data: C1,
  enter: y1,
  exit: _1,
  join: S1,
  merge: M1,
  selection: Pg,
  order: E1,
  sort: V1,
  call: z1,
  nodes: P1,
  node: H1,
  size: O1,
  empty: D1,
  each: T1,
  attr: X1,
  style: q1,
  property: U1,
  classed: tg,
  text: ig,
  html: ug,
  raise: dg,
  lower: vg,
  append: gg,
  insert: pg,
  remove: yg,
  clone: bg,
  datum: $g,
  on: Mg,
  dispatch: Ng,
  [Symbol.iterator]: zg
};
function Ft(e) {
  return typeof e == "string" ? new Xt([[document.querySelector(e)]], [document.documentElement]) : new Xt([[e]], Ru);
}
function Hg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function rn(e, t) {
  if (e = Hg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Og = { passive: !1 }, go = { capture: !0, passive: !1 };
function oa(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Xu(e) {
  var t = e.document.documentElement, n = Ft(e).on("dragstart.drag", Cr, go);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, go) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Yu(e, t) {
  var n = e.document.documentElement, r = Ft(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, go), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ro = (e) => () => e;
function _a(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: a,
  y: s,
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
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
_a.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Dg(e) {
  return !e.ctrlKey && !e.button;
}
function Tg() {
  return this.parentNode;
}
function Lg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ig() {
  var e = Dg, t = Tg, n = Lg, r = Ag, o = {}, i = Ii("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", b).on("touchmove.drag", C, Og).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var S = $(this, t.call(this, w, k), w, k, "mouse");
      S && (Ft(w.view).on("mousemove.drag", y, go).on("mouseup.drag", x, go), Xu(w.view), oa(w), u = !1, s = w.clientX, l = w.clientY, S("start", w));
    }
  }
  function y(w) {
    if (Cr(w), !u) {
      var k = w.clientX - s, S = w.clientY - l;
      u = k * k + S * S > d;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    Ft(w.view).on("mousemove.drag mouseup.drag", null), Yu(w.view, u), Cr(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var S = w.changedTouches, M = t.call(this, w, k), V = S.length, z, O;
      for (z = 0; z < V; ++z)
        (O = $(this, M, w, k, S[z].identifier, S[z])) && (oa(w), O("start", w, S[z]));
    }
  }
  function C(w) {
    var k = w.changedTouches, S = k.length, M, V;
    for (M = 0; M < S; ++M)
      (V = o[k[M].identifier]) && (Cr(w), V("drag", w, k[M]));
  }
  function h(w) {
    var k = w.changedTouches, S = k.length, M, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), M = 0; M < S; ++M)
      (V = o[k[M].identifier]) && (oa(w), V("end", w, k[M]));
  }
  function $(w, k, S, M, V, z) {
    var O = i.copy(), T = rn(z || S, k), A, I, E;
    if ((E = n.call(w, new _a("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: V,
      active: a,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), M)) != null)
      return A = E.x - T[0] || 0, I = E.y - T[1] || 0, function P(_, N, H) {
        var L = T, B;
        switch (_) {
          case "start":
            o[V] = P, B = a++;
            break;
          case "end":
            delete o[V], --a;
          // falls through
          case "drag":
            T = rn(H || N, k), B = a;
            break;
        }
        O.call(
          _,
          w,
          new _a(_, {
            sourceEvent: N,
            subject: E,
            target: f,
            identifier: V,
            active: B,
            x: T[0] + A,
            y: T[1] + I,
            dx: T[0] - L[0],
            dy: T[1] - L[1],
            dispatch: O
          }),
          M
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Ro(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Ro(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Ro(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Ro(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
  }, f;
}
function us(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Wu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Eo() {
}
var ho = 0.7, fi = 1 / ho, kr = "\\s*([+-]?\\d+)\\s*", po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", gn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zg = /^#([0-9a-f]{3,8})$/, Bg = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Rg = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`), Xg = new RegExp(`^rgba\\(${kr},${kr},${kr},${po}\\)$`), Yg = new RegExp(`^rgba\\(${gn},${gn},${gn},${po}\\)$`), Wg = new RegExp(`^hsl\\(${po},${gn},${gn}\\)$`), Kg = new RegExp(`^hsla\\(${po},${gn},${gn},${po}\\)$`), Js = {
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
us(Eo, mo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qs,
  // Deprecated! Use color.formatHex.
  formatHex: Qs,
  formatHex8: qg,
  formatHsl: jg,
  formatRgb: el,
  toString: el
});
function Qs() {
  return this.rgb().formatHex();
}
function qg() {
  return this.rgb().formatHex8();
}
function jg() {
  return Ku(this).formatHsl();
}
function el() {
  return this.rgb().formatRgb();
}
function mo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Bg.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Xg.exec(e)) ? Xo(t[1], t[2], t[3], t[4]) : (t = Yg.exec(e)) ? Xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = Kg.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Js.hasOwnProperty(e) ? tl(Js[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Fg(e) {
  return e instanceof Eo || (e = mo(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function Sa(e, t, n, r) {
  return arguments.length === 1 ? Fg(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
us(zt, Sa, Wu(Eo, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ho : Math.pow(ho, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new zt(or(this.r), or(this.g), or(this.b), vi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nl,
  // Deprecated! Use color.formatHex.
  formatHex: nl,
  formatHex8: Gg,
  formatRgb: rl,
  toString: rl
}));
function nl() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}`;
}
function Gg() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}${nr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rl() {
  const e = vi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${or(this.r)}, ${or(this.g)}, ${or(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function vi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function or(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nr(e) {
  return e = or(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ol(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new on(e, t, n, r);
}
function Ku(e) {
  if (e instanceof on) return new on(e.h, e.s, e.l, e.opacity);
  if (e instanceof Eo || (e = mo(e)), !e) return new on();
  if (e instanceof on) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new on(a, s, l, e.opacity);
}
function Ug(e, t, n, r) {
  return arguments.length === 1 ? Ku(e) : new on(e, t, n, r ?? 1);
}
function on(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
us(on, Ug, Wu(Eo, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ho : Math.pow(ho, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new zt(
      ia(e >= 240 ? e - 240 : e + 120, o, r),
      ia(e, o, r),
      ia(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new on(il(this.h), Yo(this.s), Yo(this.l), vi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = vi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${il(this.h)}, ${Yo(this.s) * 100}%, ${Yo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function il(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Yo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ia(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const qu = (e) => () => e;
function Jg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Qg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function eh(e) {
  return (e = +e) == 1 ? ju : function(t, n) {
    return n - t ? Qg(t, n, e) : qu(isNaN(t) ? n : t);
  };
}
function ju(e, t) {
  var n = t - e;
  return n ? Jg(e, n) : qu(isNaN(e) ? t : e);
}
const al = function e(t) {
  var n = eh(t);
  function r(o, i) {
    var a = n((o = Sa(o)).r, (i = Sa(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = ju(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Rn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Ma = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, aa = new RegExp(Ma.source, "g");
function th(e) {
  return function() {
    return e;
  };
}
function nh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function rh(e, t) {
  var n = Ma.lastIndex = aa.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ma.exec(e)) && (o = aa.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Rn(r, o) })), n = aa.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? nh(l[0].x) : th(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var sl = 180 / Math.PI, Fu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Gu(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * sl,
    skewX: Math.atan(l) * sl,
    scaleX: a,
    scaleY: s
  };
}
var Wo;
function oh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Fu : Gu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ih(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Fu : (e = e.matrix, Gu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Uu(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var x = v.push("translate(", null, t, null, n);
      y.push({ i: x - 4, x: Rn(u, d) }, { i: x - 2, x: Rn(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Rn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Rn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var x = v.push(o(v) + "scale(", null, ",", null, ")");
      y.push({ i: x - 4, x: Rn(u, d) }, { i: x - 2, x: Rn(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var y = -1, x = f.length, b; ++y < x; ) d[(b = f[y]).i] = b.x(v);
      return d.join("");
    };
  };
}
var ah = Uu(oh, "px, ", "px)", "deg)"), sh = Uu(ih, ", ", ")", ")"), lh = 1e-12;
function ll(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function uh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function ch(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const dh = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, y = d - l, x = v * v + y * y, b, C;
    if (x < lh)
      C = Math.log(f / u) / t, b = function(M) {
        return [
          s + M * v,
          l + M * y,
          u * Math.exp(t * M * C)
        ];
      };
    else {
      var h = Math.sqrt(x), $ = (f * f - u * u + r * x) / (2 * u * n * h), w = (f * f - u * u - r * x) / (2 * f * n * h), k = Math.log(Math.sqrt($ * $ + 1) - $), S = Math.log(Math.sqrt(w * w + 1) - w);
      C = (S - k) / t, b = function(M) {
        var V = M * C, z = ll(k), O = u / (n * h) * (z * ch(t * V + k) - uh(k));
        return [
          s + O * v,
          l + O * y,
          u * z / ll(t * V + k)
        ];
      };
    }
    return b.duration = C * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Hr = 0, eo = 0, Ur = 0, Ju = 1e3, gi, to, hi = 0, sr = 0, Bi = 0, yo = typeof performance == "object" && performance.now ? performance : Date, Qu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function cs() {
  return sr || (Qu(fh), sr = yo.now() + Bi);
}
function fh() {
  sr = 0;
}
function pi() {
  this._call = this._time = this._next = null;
}
pi.prototype = ec.prototype = {
  constructor: pi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? cs() : +n) + (t == null ? 0 : +t), !this._next && to !== this && (to ? to._next = this : gi = this, to = this), this._call = e, this._time = n, Ea();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ea());
  }
};
function ec(e, t, n) {
  var r = new pi();
  return r.restart(e, t, n), r;
}
function vh() {
  cs(), ++Hr;
  for (var e = gi, t; e; )
    (t = sr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Hr;
}
function ul() {
  sr = (hi = yo.now()) + Bi, Hr = eo = 0;
  try {
    vh();
  } finally {
    Hr = 0, hh(), sr = 0;
  }
}
function gh() {
  var e = yo.now(), t = e - hi;
  t > Ju && (Bi -= t, hi = e);
}
function hh() {
  for (var e, t = gi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : gi = n);
  to = e, Ea(r);
}
function Ea(e) {
  if (!Hr) {
    eo && (eo = clearTimeout(eo));
    var t = e - sr;
    t > 24 ? (e < 1 / 0 && (eo = setTimeout(ul, e - yo.now() - Bi)), Ur && (Ur = clearInterval(Ur))) : (Ur || (hi = yo.now(), Ur = setInterval(gh, Ju)), Hr = 1, Qu(ul));
  }
}
function cl(e, t, n) {
  var r = new pi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ph = Ii("start", "end", "cancel", "interrupt"), mh = [], tc = 0, dl = 1, Va = 2, Jo = 3, fl = 4, Na = 5, Qo = 6;
function Ri(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  yh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: ph,
    tween: mh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: tc
  });
}
function ds(e, t) {
  var n = cn(e, t);
  if (n.state > tc) throw new Error("too late; already scheduled");
  return n;
}
function _n(e, t) {
  var n = cn(e, t);
  if (n.state > Jo) throw new Error("too late; already running");
  return n;
}
function cn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function yh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ec(i, 0, n.time);
  function i(u) {
    n.state = dl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, f, v;
    if (n.state !== dl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === Jo) return cl(a);
        v.state === fl ? (v.state = Qo, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = Qo, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (cl(function() {
      n.state === Jo && (n.state = fl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Va, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Va) {
      for (n.state = Jo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Na, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Na && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Qo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ei(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Va && r.state < Na, r.state = Qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function wh(e) {
  return this.each(function() {
    ei(this, e);
  });
}
function xh(e, t) {
  var n, r;
  return function() {
    var o = _n(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function bh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = _n(this, e), a = i.tween;
    if (a !== r) {
      o = (r = a).slice();
      for (var s = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = s;
          break;
        }
      l === u && o.push(s);
    }
    i.tween = o;
  };
}
function $h(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = cn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? xh : bh)(n, e, t));
}
function fs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = _n(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return cn(o, r).value[t];
  };
}
function nc(e, t) {
  var n;
  return (typeof t == "number" ? Rn : t instanceof mo ? al : (n = mo(t)) ? (t = n, al) : rh)(e, t);
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
function _h(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Sh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Mh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Eh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Vh(e, t) {
  var n = Zi(e), r = n === "transform" ? sh : nc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Eh : Mh)(n, r, fs(this, "attr." + e, t)) : t == null ? (n.local ? kh : Ch)(n) : (n.local ? Sh : _h)(n, r, t));
}
function Nh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function zh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Ph(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && zh(e, i)), n;
  }
  return o._value = t, o;
}
function Hh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Nh(e, i)), n;
  }
  return o._value = t, o;
}
function Oh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? Ph : Hh)(r, t));
}
function Dh(e, t) {
  return function() {
    ds(this, e).delay = +t.apply(this, arguments);
  };
}
function Th(e, t) {
  return t = +t, function() {
    ds(this, e).delay = t;
  };
}
function Lh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Dh : Th)(t, e)) : cn(this.node(), t).delay;
}
function Ah(e, t) {
  return function() {
    _n(this, e).duration = +t.apply(this, arguments);
  };
}
function Ih(e, t) {
  return t = +t, function() {
    _n(this, e).duration = t;
  };
}
function Zh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ah : Ih)(t, e)) : cn(this.node(), t).duration;
}
function Bh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    _n(this, e).ease = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each(Bh(t, e)) : cn(this.node(), t).ease;
}
function Xh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    _n(this, e).ease = n;
  };
}
function Yh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Xh(this._id, e));
}
function Wh(e) {
  typeof e != "function" && (e = Hu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Dn(r, this._parents, this._name, this._id);
}
function Kh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Dn(a, this._parents, this._name, this._id);
}
function qh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jh(e, t, n) {
  var r, o, i = qh(t) ? ds : _n;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Fh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? cn(this.node(), n).on.on(e) : this.each(jh(n, e, t));
}
function Gh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Uh() {
  return this.on("end.remove", Gh(this._id));
}
function Jh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ss(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ri(u[f], t, n, f, u, cn(c, n)));
  return new Dn(i, this._parents, t, n);
}
function Qh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Pu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, y = cn(c, n), x = 0, b = f.length; x < b; ++x)
          (v = f[x]) && Ri(v, t, n, x, f, y);
        i.push(f), a.push(c);
      }
  return new Dn(i, a, t, n);
}
var ep = Mo.prototype.constructor;
function tp() {
  return new ep(this._groups, this._parents);
}
function np(e, t) {
  var n, r, o;
  return function() {
    var i = Pr(this, e), a = (this.style.removeProperty(e), Pr(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function rc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function rp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Pr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function op(e, t, n) {
  var r, o, i;
  return function() {
    var a = Pr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Pr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function ip(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = _n(this, e), u = l.on, c = l.value[i] == null ? s || (s = rc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function ap(e, t, n) {
  var r = (e += "") == "transform" ? ah : nc;
  return t == null ? this.styleTween(e, np(e, r)).on("end.style." + e, rc(e)) : typeof t == "function" ? this.styleTween(e, op(e, r, fs(this, "style." + e, t))).each(ip(this._id, e)) : this.styleTween(e, rp(e, r, t), n).on("end.style." + e, null);
}
function sp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function lp(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && sp(e, a, n)), r;
  }
  return i._value = t, i;
}
function up(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, lp(e, t, n ?? ""));
}
function cp(e) {
  return function() {
    this.textContent = e;
  };
}
function dp(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function fp(e) {
  return this.tween("text", typeof e == "function" ? dp(fs(this, "text", e)) : cp(e == null ? "" : e + ""));
}
function vp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function gp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && vp(o)), t;
  }
  return r._value = e, r;
}
function hp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, gp(e));
}
function pp() {
  for (var e = this._name, t = this._id, n = oc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = cn(l, t);
        Ri(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Dn(r, this._parents, e, n);
}
function mp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = _n(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var yp = 0;
function Dn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function oc() {
  return ++yp;
}
var Mn = Mo.prototype;
Dn.prototype = {
  constructor: Dn,
  select: Jh,
  selectAll: Qh,
  selectChild: Mn.selectChild,
  selectChildren: Mn.selectChildren,
  filter: Wh,
  merge: Kh,
  selection: tp,
  transition: pp,
  call: Mn.call,
  nodes: Mn.nodes,
  node: Mn.node,
  size: Mn.size,
  empty: Mn.empty,
  each: Mn.each,
  on: Fh,
  attr: Vh,
  attrTween: Oh,
  style: ap,
  styleTween: up,
  text: fp,
  textTween: hp,
  remove: Uh,
  tween: $h,
  delay: Lh,
  duration: Zh,
  ease: Rh,
  easeVarying: Yh,
  end: mp,
  [Symbol.iterator]: Mn[Symbol.iterator]
};
function wp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var xp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: wp
};
function bp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function $p(e) {
  var t, n;
  e instanceof Dn ? (t = e._id, e = e._name) : (t = oc(), (n = xp).time = cs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Ri(l, e, t, u, a, n || bp(l, t));
  return new Dn(r, this._parents, e, t);
}
Mo.prototype.interrupt = wh;
Mo.prototype.transition = $p;
const Ko = (e) => () => e;
function Cp(e, {
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
function En(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
En.prototype = {
  constructor: En,
  scale: function(e) {
    return e === 1 ? this : new En(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new En(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Xi = new En(1, 0, 0);
ic.prototype = En.prototype;
function ic(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Xi;
  return e.__zoom;
}
function sa(e) {
  e.stopImmediatePropagation();
}
function Jr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function _p() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function vl() {
  return this.__zoom || Xi;
}
function Sp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Mp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ep(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function ac() {
  var e = kp, t = _p, n = Ep, r = Sp, o = Mp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dh, u = Ii("start", "zoom", "end"), c, d, f, v = 500, y = 150, x = 0, b = 10;
  function C(E) {
    E.property("__zoom", vl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", O).filter(o).on("touchstart.zoom", T).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(E, P, _, N) {
    var H = E.selection ? E.selection() : E;
    H.property("__zoom", vl), E !== H ? k(E, P, _, N) : H.interrupt().each(function() {
      S(this, arguments).event(N).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, C.scaleBy = function(E, P, _, N) {
    C.scaleTo(E, function() {
      var H = this.__zoom.k, L = typeof P == "function" ? P.apply(this, arguments) : P;
      return H * L;
    }, _, N);
  }, C.scaleTo = function(E, P, _, N) {
    C.transform(E, function() {
      var H = t.apply(this, arguments), L = this.__zoom, B = _ == null ? w(H) : typeof _ == "function" ? _.apply(this, arguments) : _, K = L.invert(B), j = typeof P == "function" ? P.apply(this, arguments) : P;
      return n($(h(L, j), B, K), H, a);
    }, _, N);
  }, C.translateBy = function(E, P, _, N) {
    C.transform(E, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), a);
    }, null, N);
  }, C.translateTo = function(E, P, _, N, H) {
    C.transform(E, function() {
      var L = t.apply(this, arguments), B = this.__zoom, K = N == null ? w(L) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(Xi.translate(K[0], K[1]).scale(B.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), L, a);
    }, N, H);
  };
  function h(E, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === E.k ? E : new En(P, E.x, E.y);
  }
  function $(E, P, _) {
    var N = P[0] - _[0] * E.k, H = P[1] - _[1] * E.k;
    return N === E.x && H === E.y ? E : new En(E.k, N, H);
  }
  function w(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, P, _, N) {
    E.on("start.zoom", function() {
      S(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var H = this, L = arguments, B = S(H, L).event(N), K = t.apply(H, L), j = _ == null ? w(K) : typeof _ == "function" ? _.apply(H, L) : _, ne = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), U = H.__zoom, Y = typeof P == "function" ? P.apply(H, L) : P, ae = l(U.invert(j).concat(ne / U.k), Y.invert(j).concat(ne / Y.k));
      return function(be) {
        if (be === 1) be = Y;
        else {
          var Ce = ae(be), ge = ne / Ce[2];
          be = new En(ge, j[0] - Ce[0] * ge, j[1] - Ce[1] * ge);
        }
        B.zoom(null, be);
      };
    });
  }
  function S(E, P, _) {
    return !_ && E.__zooming || new M(E, P);
  }
  function M(E, P) {
    this.that = E, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, P), this.taps = 0;
  }
  M.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, P) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var P = Ft(this.that).datum();
      u.call(
        E,
        this.that,
        new Cp(E, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function V(E, ...P) {
    if (!e.apply(this, arguments)) return;
    var _ = S(this, P).event(E), N = this.__zoom, H = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), L = rn(E);
    if (_.wheel)
      (_.mouse[0][0] !== L[0] || _.mouse[0][1] !== L[1]) && (_.mouse[1] = N.invert(_.mouse[0] = L)), clearTimeout(_.wheel);
    else {
      if (N.k === H) return;
      _.mouse = [L, N.invert(L)], ei(this), _.start();
    }
    Jr(E), _.wheel = setTimeout(B, y), _.zoom("mouse", n($(h(N, H), _.mouse[0], _.mouse[1]), _.extent, a));
    function B() {
      _.wheel = null, _.end();
    }
  }
  function z(E, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var _ = E.currentTarget, N = S(this, P, !0).event(E), H = Ft(E.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", ne, !0), L = rn(E, _), B = E.clientX, K = E.clientY;
    Xu(E.view), sa(E), N.mouse = [L, this.__zoom.invert(L)], ei(this), N.start();
    function j(U) {
      if (Jr(U), !N.moved) {
        var Y = U.clientX - B, ae = U.clientY - K;
        N.moved = Y * Y + ae * ae > x;
      }
      N.event(U).zoom("mouse", n($(N.that.__zoom, N.mouse[0] = rn(U, _), N.mouse[1]), N.extent, a));
    }
    function ne(U) {
      H.on("mousemove.zoom mouseup.zoom", null), Yu(U.view, N.moved), Jr(U), N.event(U).end();
    }
  }
  function O(E, ...P) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, N = rn(E.changedTouches ? E.changedTouches[0] : E, this), H = _.invert(N), L = _.k * (E.shiftKey ? 0.5 : 2), B = n($(h(_, L), N, H), t.apply(this, P), a);
      Jr(E), s > 0 ? Ft(this).transition().duration(s).call(k, B, N, E) : Ft(this).call(C.transform, B, N, E);
    }
  }
  function T(E, ...P) {
    if (e.apply(this, arguments)) {
      var _ = E.touches, N = _.length, H = S(this, P, E.changedTouches.length === N).event(E), L, B, K, j;
      for (sa(E), B = 0; B < N; ++B)
        K = _[B], j = rn(K, this), j = [j, this.__zoom.invert(j), K.identifier], H.touch0 ? !H.touch1 && H.touch0[2] !== j[2] && (H.touch1 = j, H.taps = 0) : (H.touch0 = j, L = !0, H.taps = 1 + !!c);
      c && (c = clearTimeout(c)), L && (H.taps < 2 && (d = j[0], c = setTimeout(function() {
        c = null;
      }, v)), ei(this), H.start());
    }
  }
  function A(E, ...P) {
    if (this.__zooming) {
      var _ = S(this, P).event(E), N = E.changedTouches, H = N.length, L, B, K, j;
      for (Jr(E), L = 0; L < H; ++L)
        B = N[L], K = rn(B, this), _.touch0 && _.touch0[2] === B.identifier ? _.touch0[0] = K : _.touch1 && _.touch1[2] === B.identifier && (_.touch1[0] = K);
      if (B = _.that.__zoom, _.touch1) {
        var ne = _.touch0[0], U = _.touch0[1], Y = _.touch1[0], ae = _.touch1[1], be = (be = Y[0] - ne[0]) * be + (be = Y[1] - ne[1]) * be, Ce = (Ce = ae[0] - U[0]) * Ce + (Ce = ae[1] - U[1]) * Ce;
        B = h(B, Math.sqrt(be / Ce)), K = [(ne[0] + Y[0]) / 2, (ne[1] + Y[1]) / 2], j = [(U[0] + ae[0]) / 2, (U[1] + ae[1]) / 2];
      } else if (_.touch0) K = _.touch0[0], j = _.touch0[1];
      else return;
      _.zoom("touch", n($(B, K, j), _.extent, a));
    }
  }
  function I(E, ...P) {
    if (this.__zooming) {
      var _ = S(this, P).event(E), N = E.changedTouches, H = N.length, L, B;
      for (sa(E), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), L = 0; L < H; ++L)
        B = N[L], _.touch0 && _.touch0[2] === B.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === B.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (B = rn(B, this), Math.hypot(d[0] - B[0], d[1] - B[1]) < b)) {
        var K = Ft(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : Ko(+E), C) : r;
  }, C.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : Ko(!!E), C) : e;
  }, C.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : Ko(!!E), C) : o;
  }, C.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : Ko([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), C) : t;
  }, C.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], C) : [i[0], i[1]];
  }, C.translateExtent = function(E) {
    return arguments.length ? (a[0][0] = +E[0][0], a[1][0] = +E[1][0], a[0][1] = +E[0][1], a[1][1] = +E[1][1], C) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, C.constrain = function(E) {
    return arguments.length ? (n = E, C) : n;
  }, C.duration = function(E) {
    return arguments.length ? (s = +E, C) : s;
  }, C.interpolate = function(E) {
    return arguments.length ? (l = E, C) : l;
  }, C.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? C : E;
  }, C.clickDistance = function(E) {
    return arguments.length ? (x = (E = +E) * E, C) : Math.sqrt(x);
  }, C.tapDistance = function(E) {
    return arguments.length ? (b = +E, C) : b;
  }, C;
}
const Or = {
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
}, mi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var lr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(lr || (lr = {}));
var qn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(qn || (qn = {}));
var yi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(yi || (yi = {}));
const za = {
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
var _r;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(_r || (_r = {}));
var wo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(wo || (wo = {}));
var _e;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(_e || (_e = {}));
const gl = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function Vp(e, t) {
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
function hl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Np(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const zp = (e) => "id" in e && "source" in e && "target" in e, Pp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), vs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Vo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Qn(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Hp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : vs(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? wi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Yi(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Wi(n);
}, No = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = wi(r);
      n = Yi(n, o);
    }
  }), Wi(n);
}, sc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...zo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, y = c.height ?? u.height ?? u.initialHeight ?? null, x = xo(s, Tr(u)), b = (v ?? 0) * (y ?? 0), C = i && x > 0;
    (!u.internals.handleBounds || C || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, Pa = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function pl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function ml({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = No(e), l = hs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Op({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Or.error005());
    else {
      const v = s.measured.width, y = s.measured.height;
      v && y && (d = [
        [l, u],
        [l + v, u + y]
      ]);
    }
  else s && Lr(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const f = Lr(d) ? ur(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Or.error015())), {
    position: {
      x: f.x - l + (a.measured.width ?? 0) * c[0],
      y: f.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function lc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), v = !f && d.parentId && a.find((y) => y.id === d.parentId);
    (f || v) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Pa(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
  if (!o)
    return {
      edges: u,
      nodes: a
    };
  const c = await o({
    nodes: a,
    edges: u
  });
  return typeof c == "boolean" ? c ? { edges: u, nodes: a } : { edges: [], nodes: [] } : c;
}
const Dr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ur = (e = { x: 0, y: 0 }, t, n) => ({
  x: Dr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Dr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function uc(e, t, n) {
  const { width: r, height: o } = Qn(n), { x: i, y: a } = n.internals.positionAbsolute;
  return ur(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const yl = (e, t, n) => e < t ? Dr(Math.abs(e - t), 1, t) / t : e > n ? -Dr(Math.abs(e - n), 1, t) / t : 0, cc = (e, t, n = 15, r = 40) => {
  const o = yl(e.x, r, t.width - r) * n, i = yl(e.y, r, t.height - r) * n;
  return [o, i];
}, Yi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ha = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Wi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Tr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, wi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, dc = (e, t) => Wi(Yi(Ha(e), Ha(t))), xo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, wl = (e) => Vn(e.width) && Vn(e.height) && Vn(e.x) && Vn(e.y), Vn = (e) => !isNaN(e) && isFinite(e), Dp = (e, t) => {
}, gs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), zo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? gs(s, a) : s;
}, fc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), hs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = Dr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, xi = () => {
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
function vc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Tp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function la(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Pn(e), s = zo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? gs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const ps = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Lp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Ap = ["INPUT", "SELECT", "TEXTAREA"];
function Ip(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Ap.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const gc = (e) => "clientX" in e, Pn = (e, t) => {
  var n, r;
  const o = gc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, xl = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((a) => {
    const s = a.getBoundingClientRect();
    return {
      id: a.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: a.getAttribute("data-handlepos"),
      x: (s.left - n.left) / r,
      y: (s.top - n.top) / r,
      ...ps(a)
    };
  });
};
function Zp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function qo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function bl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case _e.Left:
      return [t - qo(t - r, i), n];
    case _e.Right:
      return [t + qo(r - t, i), n];
    case _e.Top:
      return [t, n - qo(n - o, i)];
    case _e.Bottom:
      return [t, n + qo(o - n, i)];
  }
}
function hc({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: a = 0.25 }) {
  const [s, l] = bl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = bl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [d, f, v, y] = Zp({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${e},${t} C${s},${l} ${u},${c} ${r},${o}`,
    d,
    f,
    v,
    y
  ];
}
function pc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Bp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Rp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Yi(wi(e), wi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return xo(a, Wi(i)) > 0;
}
const Xp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Yp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Wp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return zp(e) ? n = { ...e } : n = {
    ...e,
    id: Xp(e)
  }, Yp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Oa({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = pc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const $l = {
  [_e.Left]: { x: -1, y: 0 },
  [_e.Right]: { x: 1, y: 0 },
  [_e.Top]: { x: 0, y: -1 },
  [_e.Bottom]: { x: 0, y: 1 }
}, Kp = ({ source: e, sourcePosition: t = _e.Bottom, target: n }) => t === _e.Left || t === _e.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Cl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function qp({ source: e, sourcePosition: t = _e.Bottom, target: n, targetPosition: r = _e.Top, center: o, offset: i }) {
  const a = $l[t], s = $l[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Kp({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], y, x;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [h, $, w, k] = pc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    y = o.x ?? h, x = o.y ?? $;
    const S = [
      { x: y, y: l.y },
      { x: y, y: u.y }
    ], M = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    a[d] === f ? v = d === "x" ? S : M : v = d === "x" ? M : S;
  } else {
    const S = [{ x: l.x, y: u.y }], M = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? M : S : v = a.y === f ? S : M, t === r) {
      const A = Math.abs(e[d] - n[d]);
      if (A <= i) {
        const I = Math.min(i - 1, i - A);
        a[d] === f ? b[d] = (l[d] > e[d] ? -1 : 1) * I : C[d] = (u[d] > n[d] ? -1 : 1) * I;
      }
    }
    if (t !== r) {
      const A = d === "x" ? "y" : "x", I = a[d] === s[A], E = l[A] > u[A], P = l[A] < u[A];
      (a[d] === 1 && (!I && E || I && P) || a[d] !== 1 && (!I && P || I && E)) && (v = d === "x" ? S : M);
    }
    const V = { x: l.x + b.x, y: l.y + b.y }, z = { x: u.x + C.x, y: u.y + C.y }, O = Math.max(Math.abs(V.x - v[0].x), Math.abs(z.x - v[0].x)), T = Math.max(Math.abs(V.y - v[0].y), Math.abs(z.y - v[0].y));
    O >= T ? (y = (V.x + z.x) / 2, x = v[0].y) : (y = v[0].x, x = (V.y + z.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...v,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], y, x, w, k];
}
function jp(e, t, n, r) {
  const o = Math.min(Cl(e, t) / 2, Cl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function bi({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, y] = qp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, b, C) => {
    let h = "";
    return C > 0 && C < c.length - 1 ? h = jp(c[C - 1], b, c[C + 1], a) : h = `${C === 0 ? "M" : "L"}${b.x} ${b.y}`, x += h, x;
  }, ""), d, f, v, y];
}
function kl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Fp(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!kl(n) || !kl(r))
    return null;
  const o = n.internals.handleBounds || _l(n.handles), i = r.internals.handleBounds || _l(r.handles), a = Sl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Sl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === lr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", Or.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || _e.Bottom, u = (s == null ? void 0 : s.position) || _e.Top, c = bo(n, a, l), d = bo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function _l(e) {
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
function bo(e, t, n = _e.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? Qn(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case _e.Top:
      return { x: o + a / 2, y: i };
    case _e.Right:
      return { x: o + a, y: i + s / 2 };
    case _e.Bottom:
      return { x: o + a / 2, y: i + s };
    case _e.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Sl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Da(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Gp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Da(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function Up(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let a = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * i, -100];
  switch (n) {
    case _e.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case _e.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case _e.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const ms = {
  nodeOrigin: [0, 0],
  nodeExtent: mi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Jp = {
  ...ms,
  checkEquality: !0
};
function ys(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Qp(e, t, n) {
  const r = ys(ms, n);
  for (const o of e.values())
    if (o.parentId)
      ws(o, e, t, r);
    else {
      const i = Vo(o, r.nodeOrigin), a = Lr(o.extent) ? o.extent : r.nodeExtent, s = ur(i, a, Qn(o));
      o.internals.positionAbsolute = s;
    }
}
function mc(e, t, n, r) {
  var o, i;
  const a = ys(Jp, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Vo(u, a.nodeOrigin), f = Lr(u.extent) ? u.extent : a.nodeExtent, v = ur(d, f, Qn(u));
      c = {
        ...a.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: yc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && ws(c, t, n, r);
  }
}
function e0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ws(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = ys(ms, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  e0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = t0(e, l, i, a, u), { positionAbsolute: v } = e.internals, y = c !== v.x || d !== v.y;
  (y || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: c, y: d } : v,
      z: f
    }
  });
}
function yc(e, t) {
  return (Vn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function t0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = Qn(e), l = Vo(e, n), u = Lr(e.extent) ? ur(l, e.extent, s) : l;
  let c = ur({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = uc(c, s, t));
  const d = yc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function n0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Tr(l), c = dc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = Qn(l), v = l.origin ?? r, y = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, b = Math.max(f.width, Math.round(s.width)), C = Math.max(f.height, Math.round(s.height)), h = (b - f.width) * v[0], $ = (C - f.height) * v[1];
    (y > 0 || x > 0 || h || $) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - y + h,
        y: l.position.y - x + $
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + y,
          y: w.position.y + x
        }
      });
    })), (f.width < s.width || f.height < s.height || y || x) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: b + (y ? v[0] * y - h : 0),
        height: C + (x ? v[1] * x - $ : 0)
      }
    });
  }), i;
}
function r0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const f of e.values()) {
    const v = t.get(f.id);
    if (!v)
      continue;
    if (v.hidden) {
      t.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const y = ps(f.nodeElement), x = v.measured.width !== y.width || v.measured.height !== y.height;
    if (y.width && y.height && (x || !v.internals.handleBounds || f.force)) {
      const b = f.nodeElement.getBoundingClientRect(), C = Lr(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = uc(h, y, t.get(v.parentId)) : C && (h = ur(h, C, y));
      const $ = {
        ...v,
        measured: y,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: xl("source", f.nodeElement, b, c, v.id),
            target: xl("target", f.nodeElement, b, c, v.id)
          }
        }
      };
      t.set(v.id, $), v.parentId && ws($, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: y
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Tr($, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = n0(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function o0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const a = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), s = !!a && (a.x !== n[0] || a.y !== n[1] || a.k !== n[2]);
  return Promise.resolve(s);
}
function Ml(e, t, n, r, o, i) {
  let a = o;
  const s = r.get(a) || /* @__PURE__ */ new Map();
  r.set(a, s.set(n, t)), a = `${o}-${e}`;
  const l = r.get(a) || /* @__PURE__ */ new Map();
  if (r.set(a, l.set(n, t)), i) {
    a = `${o}-${e}-${i}`;
    const u = r.get(a) || /* @__PURE__ */ new Map();
    r.set(a, u.set(n, t));
  }
}
function wc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Ml("source", l, c, e, o, a), Ml("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function i0(e, t) {
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
function xc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : xc(n, t) : !1;
}
function El(e, t, n) {
  var r;
  let o = e;
  do {
    if ((r = o == null ? void 0 : o.matches) != null && r.call(o, t))
      return !0;
    if (o === n)
      return !1;
    o = o == null ? void 0 : o.parentElement;
  } while (o);
  return !1;
}
function a0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !xc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
      const s = e.get(i);
      s && o.set(i, {
        id: i,
        position: s.position || { x: 0, y: 0 },
        distance: {
          x: n.x - s.internals.positionAbsolute.x,
          y: n.y - s.internals.positionAbsolute.y
        },
        extent: s.extent,
        parentId: s.parentId,
        origin: s.origin,
        expandParent: s.expandParent,
        internals: {
          positionAbsolute: s.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: s.measured.width ?? 0,
          height: s.measured.height ?? 0
        }
      });
    }
  return o;
}
function ua({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, i, a;
  const s = [];
  for (const [u, c] of t) {
    const d = (o = n.get(u)) == null ? void 0 : o.internals.userNode;
    d && s.push({
      ...d,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [s[0], s];
  const l = (i = n.get(e)) == null ? void 0 : i.internals.userNode;
  return [
    l ? {
      ...l,
      position: ((a = t.get(e)) == null ? void 0 : a.position) || l.position,
      dragging: r
    } : s[0],
    s
  ];
}
function s0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function y({ noDragClassName: b, handleSelector: C, domNode: h, isSelectable: $, nodeId: w, nodeClickDistance: k = 0 }) {
    f = Ft(h);
    function S({ x: O, y: T }, A) {
      const { nodeLookup: I, nodeExtent: E, snapGrid: P, snapToGrid: _, nodeOrigin: N, onNodeDrag: H, onSelectionDrag: L, onError: B, updateNodePositions: K } = t();
      i = { x: O, y: T };
      let j = !1, ne = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && E) {
        const U = No(s);
        ne = Ha(U);
      }
      for (const [U, Y] of s) {
        if (!I.has(U))
          continue;
        let ae = { x: O - Y.distance.x, y: T - Y.distance.y };
        _ && (ae = gs(ae, P));
        let be = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (s.size > 1 && E && !Y.extent) {
          const { positionAbsolute: fe } = Y.internals, re = fe.x - ne.x + E[0][0], he = fe.x + Y.measured.width - ne.x2 + E[1][0], Ye = fe.y - ne.y + E[0][1], Ze = fe.y + Y.measured.height - ne.y2 + E[1][1];
          be = [
            [re, Ye],
            [he, Ze]
          ];
        }
        const { position: Ce, positionAbsolute: ge } = Op({
          nodeId: U,
          nextPosition: ae,
          nodeLookup: I,
          nodeExtent: be,
          nodeOrigin: N,
          onError: B
        });
        j = j || Y.position.x !== Ce.x || Y.position.y !== Ce.y, Y.position = Ce, Y.internals.positionAbsolute = ge;
      }
      if (j && (K(s, !0), A && (r || H || !w && L))) {
        const [U, Y] = ua({
          nodeId: w,
          dragItems: s,
          nodeLookup: I
        });
        r == null || r(A, s, U, Y), H == null || H(A, U, Y), w || L == null || L(A, Y);
      }
    }
    async function M() {
      if (!c)
        return;
      const { transform: O, panBy: T, autoPanSpeed: A, autoPanOnNodeDrag: I } = t();
      if (!I) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [E, P] = cc(u, c, A);
      (E !== 0 || P !== 0) && (i.x = (i.x ?? 0) - E / O[2], i.y = (i.y ?? 0) - P / O[2], await T({ x: E, y: P }) && S(i, null)), a = requestAnimationFrame(M);
    }
    function V(O) {
      var T;
      const { nodeLookup: A, multiSelectionActive: I, nodesDraggable: E, transform: P, snapGrid: _, snapToGrid: N, selectNodesOnDrag: H, onNodeDragStart: L, onSelectionDragStart: B, unselectNodesAndEdges: K } = t();
      d = !0, (!H || !$) && !I && w && ((T = A.get(w)) != null && T.selected || K()), $ && H && w && (e == null || e(w));
      const j = la(O.sourceEvent, { transform: P, snapGrid: _, snapToGrid: N, containerBounds: c });
      if (i = j, s = a0(A, E, j, w), s.size > 0 && (n || L || !w && B)) {
        const [ne, U] = ua({
          nodeId: w,
          dragItems: s,
          nodeLookup: A
        });
        n == null || n(O.sourceEvent, s, ne, U), L == null || L(O.sourceEvent, ne, U), w || B == null || B(O.sourceEvent, U);
      }
    }
    const z = Ig().clickDistance(k).on("start", (O) => {
      const { domNode: T, nodeDragThreshold: A, transform: I, snapGrid: E, snapToGrid: P } = t();
      c = (T == null ? void 0 : T.getBoundingClientRect()) || null, v = !1, A === 0 && V(O), i = la(O.sourceEvent, { transform: I, snapGrid: E, snapToGrid: P, containerBounds: c }), u = Pn(O.sourceEvent, c);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: T, transform: A, snapGrid: I, snapToGrid: E, nodeDragThreshold: P, nodeLookup: _ } = t(), N = la(O.sourceEvent, { transform: A, snapGrid: I, snapToGrid: E, containerBounds: c });
      if ((O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !_.has(w)) && (v = !0), !v) {
        if (!l && T && d && (l = !0, M()), !d) {
          const H = N.xSnapped - (i.x ?? 0), L = N.ySnapped - (i.y ?? 0);
          Math.sqrt(H * H + L * L) > P && V(O);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && s && d && (u = Pn(O.sourceEvent, c), S(N, O.sourceEvent));
      }
    }).on("end", (O) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: T, updateNodePositions: A, onNodeDragStop: I, onSelectionDragStop: E } = t();
        if (A(s, !1), o || I || !w && E) {
          const [P, _] = ua({
            nodeId: w,
            dragItems: s,
            nodeLookup: T,
            dragging: !1
          });
          o == null || o(O.sourceEvent, s, P, _), I == null || I(O.sourceEvent, P, _), w || E == null || E(O.sourceEvent, _);
        }
      }
    }).filter((O) => {
      const T = O.target;
      return !O.button && (!b || !El(T, `.${b}`, h)) && (!C || El(T, C, h));
    });
    f.call(z);
  }
  function x() {
    f == null || f.on(".drag", null);
  }
  return {
    update: y,
    destroy: x
  };
}
function l0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    xo(o, Tr(i)) > 0 && r.push(i);
  return r;
}
const u0 = 250;
function c0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = l0(e, n, t + u0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = bo(u, d, d.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      y > t || (y < s ? (a = [{ ...d, x: f, y: v }], s = y) : y === s && a.push({ ...d, x: f, y: v }));
    }
  }
  if (!a.length)
    return null;
  if (a.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return a.find((c) => c.type === u) ?? a[0];
  }
  return a[0];
}
function bc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...bo(u, d, d.position, !0) } : d;
}
function $c(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function d0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Cc = () => !0;
function f0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: y, onConnect: x, onConnectEnd: b, isValidConnection: C = Cc, onReconnectEnd: h, updateConnection: $, getTransform: w, getFromHandle: k, autoPanSpeed: S }) {
  const M = Lp(e.target);
  let V = 0, z;
  const { x: O, y: T } = Pn(e), A = M == null ? void 0 : M.elementFromPoint(O, T), I = $c(i, A), E = s == null ? void 0 : s.getBoundingClientRect();
  if (!E || !I)
    return;
  const P = bc(o, I, r, l, t);
  if (!P)
    return;
  let _ = Pn(e, E), N = !1, H = null, L = !1, B = null;
  function K() {
    if (!c || !E)
      return;
    const [Ce, ge] = cc(_, E, S);
    f({ x: Ce, y: ge }), V = requestAnimationFrame(K);
  }
  const j = {
    ...P,
    nodeId: o,
    type: I,
    position: P.position
  }, ne = l.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: bo(ne, j, _e.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: ne,
    to: _,
    toHandle: null,
    toPosition: gl[j.position],
    toNode: null
  };
  $(U);
  let Y = U;
  y == null || y(e, { nodeId: o, handleId: r, handleType: I });
  function ae(Ce) {
    if (!k() || !j) {
      be(Ce);
      return;
    }
    const ge = w();
    _ = Pn(Ce, E), z = c0(zo(_, ge, !1, [1, 1]), n, l, j), N || (K(), N = !0);
    const fe = kc(Ce, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: C,
      doc: M,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    B = fe.handleDomNode, H = fe.connection, L = d0(!!z, fe.isValid);
    const re = {
      // from stays the same
      ...Y,
      isValid: L,
      to: z && L ? fc({ x: z.x, y: z.y }, ge) : _,
      toHandle: fe.toHandle,
      toPosition: L && fe.toHandle ? fe.toHandle.position : gl[j.position],
      toNode: fe.toHandle ? l.get(fe.toHandle.nodeId) : null
    };
    L && z && Y.toHandle && re.toHandle && Y.toHandle.type === re.toHandle.type && Y.toHandle.nodeId === re.toHandle.nodeId && Y.toHandle.id === re.toHandle.id && Y.to.x === re.to.x && Y.to.y === re.to.y || ($(re), Y = re);
  }
  function be(Ce) {
    (z || B) && H && L && (x == null || x(H));
    const { inProgress: ge, ...fe } = Y, re = {
      ...fe,
      toPosition: Y.toHandle ? Y.toPosition : null
    };
    b == null || b(Ce, re), i && (h == null || h(Ce, re)), v(), cancelAnimationFrame(V), N = !1, L = !1, H = null, B = null, M.removeEventListener("mousemove", ae), M.removeEventListener("mouseup", be), M.removeEventListener("touchmove", ae), M.removeEventListener("touchend", be);
  }
  M.addEventListener("mousemove", ae), M.addEventListener("mouseup", be), M.addEventListener("touchmove", ae), M.addEventListener("touchend", be);
}
function kc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Cc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y } = Pn(e), x = a.elementFromPoint(v, y), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : f, C = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const h = $c(void 0, b), $ = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), S = b.classList.contains("connectableend");
    if (!$ || !h)
      return C;
    const M = {
      source: d ? $ : r,
      sourceHandle: d ? w : o,
      target: d ? r : $,
      targetHandle: d ? o : w
    };
    C.connection = M;
    const V = k && S && (n === lr.Strict ? d && h === "source" || !d && h === "target" : $ !== r || w !== o);
    C.isValid = V && u(M), C.toHandle = bc($, h, w, c, n, !1);
  }
  return C;
}
const v0 = {
  onPointerDown: f0,
  isValid: kc
};
function g0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ft(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const y = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = w[2] * Math.pow(2, k);
      t.scaleTo(S);
    };
    let x = [0, 0];
    const b = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (x = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, C = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], S = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const M = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), V = {
        x: w[0] - S[0] * M,
        y: w[1] - S[1] * M
      }, z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: w[2]
      }, z, s);
    }, h = ac().on("start", b).on("zoom", d ? C : null).on("zoom.wheel", f ? y : null);
    o.call(h, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: rn
  };
}
const h0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ki = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ca = ({ x: e, y: t, zoom: n }) => Xi.translate(e, t).scale(n), br = (e, t) => e.target.closest(`.${t}`), _c = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), da = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Sc = (e) => {
  const t = e.ctrlKey && xi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function p0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (br(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const b = rn(c), C = Sc(c), h = d * Math.pow(2, C);
      r.scaleTo(n, h, b, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === qn.Vertical ? 0 : c.deltaX * f, y = o === qn.Horizontal ? 0 : c.deltaY * f;
    !xi() && c.shiftKey && o !== qn.Vertical && (v = c.deltaY * f, y = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(y / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Ki(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function m0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || br(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function y0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = Ki(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function w0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && _c(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ki(i.transform)));
  };
}
function x0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && _c(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && h0(e.prevViewport, a.transform))) {
      const l = Ki(a.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(a.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function b0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (br(c, `${u}-flow__node`) || br(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || a || br(c, s) && c.type === "wheel" || br(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && y;
  };
}
function $0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = ac().clickDistance(!Vn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = Ft(e).call(f);
  $({
    x: i.x,
    y: i.y,
    zoom: Dr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const y = v.on("wheel.zoom"), x = v.on("dblclick.zoom");
  f.wheelDelta(Sc);
  function b(A, I) {
    return v ? new Promise((E) => {
      f == null || f.transform(da(v, I == null ? void 0 : I.duration, () => E(!0)), A);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: A, noPanClassName: I, onPaneContextMenu: E, userSelectionActive: P, panOnScroll: _, panOnDrag: N, panOnScrollMode: H, panOnScrollSpeed: L, preventScrolling: B, zoomOnPinch: K, zoomOnScroll: j, zoomOnDoubleClick: ne, zoomActivationKeyPressed: U, lib: Y, onTransformChange: ae }) {
    P && !c.isZoomingOrPanning && h();
    const be = _ && !U && !P ? p0({
      zoomPanValues: c,
      noWheelClassName: A,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: H,
      panOnScrollSpeed: L,
      zoomOnPinch: K,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : m0({
      noWheelClassName: A,
      preventScrolling: B,
      d3ZoomHandler: y
    });
    if (v.on("wheel.zoom", be, { passive: !1 }), !P) {
      const ge = y0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ge);
      const fe = w0({
        zoomPanValues: c,
        panOnDrag: N,
        onPaneContextMenu: !!E,
        onPanZoom: a,
        onTransformChange: ae
      });
      f.on("zoom", fe);
      const re = x0({
        zoomPanValues: c,
        panOnDrag: N,
        panOnScroll: _,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", re);
    }
    const Ce = b0({
      zoomActivationKeyPressed: U,
      panOnDrag: N,
      zoomOnScroll: j,
      panOnScroll: _,
      zoomOnDoubleClick: ne,
      zoomOnPinch: K,
      userSelectionActive: P,
      noPanClassName: I,
      noWheelClassName: A,
      lib: Y
    });
    f.filter(Ce), ne ? v.on("dblclick.zoom", x) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function $(A, I, E) {
    const P = ca(A), _ = f == null ? void 0 : f.constrain()(P, I, E);
    return _ && await b(_), new Promise((N) => N(_));
  }
  async function w(A, I) {
    const E = ca(A);
    return await b(E, I), new Promise((P) => P(E));
  }
  function k(A) {
    if (v) {
      const I = ca(A), E = v.property("__zoom");
      (E.k !== A.zoom || E.x !== A.x || E.y !== A.y) && (f == null || f.transform(v, I, null, { sync: !0 }));
    }
  }
  function S() {
    const A = v ? ic(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: A.x, y: A.y, zoom: A.k };
  }
  function M(A, I) {
    return v ? new Promise((E) => {
      f == null || f.scaleTo(da(v, I == null ? void 0 : I.duration, () => E(!0)), A);
    }) : Promise.resolve(!1);
  }
  function V(A, I) {
    return v ? new Promise((E) => {
      f == null || f.scaleBy(da(v, I == null ? void 0 : I.duration, () => E(!0)), A);
    }) : Promise.resolve(!1);
  }
  function z(A) {
    f == null || f.scaleExtent(A);
  }
  function O(A) {
    f == null || f.translateExtent(A);
  }
  function T(A) {
    const I = !Vn(A) || A < 0 ? 0 : A;
    f == null || f.clickDistance(I);
  }
  return {
    update: C,
    destroy: h,
    setViewport: w,
    setViewportConstrained: $,
    getViewport: S,
    scaleTo: M,
    scaleBy: V,
    setScaleExtent: z,
    setTranslateExtent: O,
    syncViewport: k,
    setClickDistance: T
  };
}
var Vl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Vl || (Vl = {}));
var C0 = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(ne, "$connectable", n), i = () => J(Ce, "$connectionRadius", n), a = () => J(ae, "$domNode", n), s = () => J(be, "$nodeLookup", n), l = () => J(Y, "$connectionMode", n), u = () => J(re, "$lib", n), c = () => J(We, "$autoPanOnConnect", n), d = () => J(ze, "$flowId", n), f = () => J(fe, "$isValidConnectionStore", n), v = () => J(Ye, "$onedgecreate", n), y = () => J(le, "$onConnectAction", n), x = () => J(ke, "$onConnectStartAction", n), b = () => J(Ke, "$onConnectEndAction", n), C = () => J(ge, "$viewport", n), h = () => J(st, "$connection", n), $ = () => J(Ue, "$edges", n), w = () => J(se, "$connectionLookup", n), k = /* @__PURE__ */ te(), S = /* @__PURE__ */ te(), M = /* @__PURE__ */ te(), V = /* @__PURE__ */ te(), z = /* @__PURE__ */ te(), O = /* @__PURE__ */ te(), T = /* @__PURE__ */ te(), A = /* @__PURE__ */ te();
  let I = m(t, "id", 12, void 0), E = m(t, "type", 12, "source"), P = m(t, "position", 28, () => _e.Top), _ = m(t, "style", 12, void 0), N = m(t, "isValidConnection", 12, void 0), H = m(t, "onconnect", 12, void 0), L = m(t, "ondisconnect", 12, void 0), B = m(t, "isConnectable", 12, void 0), K = m(t, "class", 12, void 0);
  const j = ir("svelteflow__node_id"), ne = ir("svelteflow__node_connectable"), U = Ge(), {
    connectionMode: Y,
    domNode: ae,
    nodeLookup: be,
    connectionRadius: Ce,
    viewport: ge,
    isValidConnection: fe,
    lib: re,
    addEdge: he,
    onedgecreate: Ye,
    panBy: Ze,
    cancelConnection: Be,
    updateConnection: ee,
    autoPanOnConnect: We,
    edges: Ue,
    connectionLookup: se,
    onconnect: le,
    onconnectstart: ke,
    onconnectend: Ke,
    flowId: ze,
    connection: st
  } = U;
  function it(Ee) {
    const tt = gc(Ee);
    (tt && Ee.button === 0 || !tt) && v0.onPointerDown(Ee, {
      handleId: g(M),
      nodeId: j,
      isTarget: g(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: N() ?? f(),
      updateConnection: ee,
      cancelConnection: Be,
      panBy: Ze,
      onConnect: (Le) => {
        var He;
        const nt = v() ? v()(Le) : Le;
        nt && (he(nt), (He = y()) == null || He(Le));
      },
      onConnectStart: (Le, He) => {
        var nt;
        (nt = x()) == null || nt(Le, {
          nodeId: He.nodeId,
          handleId: He.handleId,
          handleType: He.handleType
        });
      },
      onConnectEnd: (Le, He) => {
        var nt;
        (nt = b()) == null || nt(Le, He);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let Q = /* @__PURE__ */ te(null), Te = /* @__PURE__ */ te();
  de(() => G(E()), () => {
    F(k, E() === "target");
  }), de(
    () => (G(B()), o()),
    () => {
      F(S, B() !== void 0 ? B() : o());
    }
  ), de(() => G(I()), () => {
    F(M, I() || null);
  }), de(
    () => (G(H()), G(L()), $(), w(), G(E()), G(I())),
    () => {
      (H() || L()) && ($(), F(Te, w().get(`${j}-${E()}${I() ? `-${I()}` : ""}`)));
    }
  ), de(
    () => (g(Q), g(Te), G(L()), G(H())),
    () => {
      if (g(Q) && !Vp(g(Te), g(Q))) {
        const Ee = g(Te) ?? /* @__PURE__ */ new Map();
        hl(g(Q), Ee, L()), hl(Ee, g(Q), H());
      }
      F(Q, g(Te) ?? /* @__PURE__ */ new Map());
    }
  ), de(() => h(), () => {
    F(V, !!h().fromHandle);
  }), de(
    () => (h(), G(E()), g(M)),
    () => {
      var Ee, tt, Le;
      F(z, ((Ee = h().fromHandle) == null ? void 0 : Ee.nodeId) === j && ((tt = h().fromHandle) == null ? void 0 : tt.type) === E() && ((Le = h().fromHandle) == null ? void 0 : Le.id) === g(M));
    }
  ), de(
    () => (h(), G(E()), g(M)),
    () => {
      var Ee, tt, Le;
      F(O, ((Ee = h().toHandle) == null ? void 0 : Ee.nodeId) === j && ((tt = h().toHandle) == null ? void 0 : tt.type) === E() && ((Le = h().toHandle) == null ? void 0 : Le.id) === g(M));
    }
  ), de(
    () => (l(), h(), G(E()), g(M)),
    () => {
      var Ee, tt, Le;
      F(T, l() === lr.Strict ? ((Ee = h().fromHandle) == null ? void 0 : Ee.type) !== E() : j !== ((tt = h().fromHandle) == null ? void 0 : tt.nodeId) || g(M) !== ((Le = h().fromHandle) == null ? void 0 : Le.id));
    }
  ), de(() => (g(O), h()), () => {
    F(A, g(O) && h().isValid);
  }), vt(), Pe();
  var ve = C0();
  me(ve, "data-nodeid", j);
  let Qt;
  var en = W(ve);
  pt(en, t, "default", {}), X(ve), Me(
    (Ee, tt) => {
      me(ve, "data-handleid", g(M)), me(ve, "data-handlepos", P()), me(ve, "data-id", `${d() ?? ""}-${j ?? ""}-${I() || ""}-${E() ?? ""}`), Qt = kt(ve, 1, Ee, null, Qt, tt), ft(ve, _());
    },
    [
      () => kn(St([
        "svelte-flow__handle",
        `svelte-flow__handle-${P()}`,
        "nodrag",
        "nopan",
        P(),
        K()
      ])),
      () => ({
        valid: g(A),
        connectingto: g(O),
        connectingfrom: g(z),
        source: !g(k),
        target: g(k),
        connectablestart: g(S),
        connectableend: g(S),
        connectable: g(S),
        connectionindicator: g(S) && (!g(V) || g(T))
      })
    ],
    pe
  ), Re("mousedown", ve, it), Re("touchstart", ve, it), D(e, ve);
  var fn = ce({
    get id() {
      return I();
    },
    set id(Ee) {
      I(Ee), p();
    },
    get type() {
      return E();
    },
    set type(Ee) {
      E(Ee), p();
    },
    get position() {
      return P();
    },
    set position(Ee) {
      P(Ee), p();
    },
    get style() {
      return _();
    },
    set style(Ee) {
      _(Ee), p();
    },
    get isValidConnection() {
      return N();
    },
    set isValidConnection(Ee) {
      N(Ee), p();
    },
    get onconnect() {
      return H();
    },
    set onconnect(Ee) {
      H(Ee), p();
    },
    get ondisconnect() {
      return L();
    },
    set ondisconnect(Ee) {
      L(Ee), p();
    },
    get isConnectable() {
      return B();
    },
    set isConnectable(Ee) {
      B(Ee), p();
    },
    get class() {
      return K();
    },
    set class(Ee) {
      K(Ee), p();
    }
  });
  return r(), fn;
}
ie(
  Un,
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
var k0 = /* @__PURE__ */ oe("<!> <!>", 1);
function $i(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition", "sourcePosition"]), ue(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), i = m(t, "sourcePosition", 12, void 0);
  Pe();
  var a = k0(), s = we(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Top);
  Un(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ pe(() => i() ?? _e.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Me(() => {
    var f;
    return Bt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), D(e, a), ce({
    get data() {
      return r();
    },
    set data(f) {
      r(f), p();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), p();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), p();
    }
  });
}
ie(
  $i,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var _0 = /* @__PURE__ */ oe(" <!>", 1);
function Mc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "sourcePosition"]), ue(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Pe(), Ve();
  var i = _0(), a = we(i), s = Z(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Me(() => {
    var u;
    return Bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), ce({
    get data() {
      return r();
    },
    set data(u) {
      r(u), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), p();
    }
  });
}
ie(Mc, { data: {}, sourcePosition: {} }, [], [], !0);
var S0 = /* @__PURE__ */ oe(" <!>", 1);
function Ec(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), ue(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Pe(), Ve();
  var i = S0(), a = we(i), s = Z(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Top);
  return Un(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Me(() => {
    var u;
    return Bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), D(e, i), ce({
    get data() {
      return r();
    },
    set data(u) {
      r(u), p();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), p();
    }
  });
}
ie(Ec, { data: {}, targetPosition: {} }, [], [], !0);
function Vc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, []);
}
ie(Vc, {}, [], [], !0);
function Nl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Ci(e, { target: t, domNode: n }) {
  return Nl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Nl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var M0 = /* @__PURE__ */ oe("<div><!></div>");
function Nc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(i, "$domNode", n), { domNode: i } = Ge();
  Pe();
  var a = M0(), s = W(a);
  pt(s, t, "default", {}), X(a), ht(a, (l, u) => Ci == null ? void 0 : Ci(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), D(e, a), ce(), r();
}
ie(Nc, {}, ["default"], [], !0);
function zc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Ge();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", Or.error012(s));
      return;
    }
    (l.selectable || q(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var E0 = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Pc(e, t) {
  ue(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = zc(), a = ir("svelteflow__edge_id");
  return Pe(), Nc(e, {
    children: (s, l) => {
      var u = E0();
      let c;
      var d = W(u);
      pt(d, t, "default", {}), X(u), Me(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Re("keyup", u, () => {
      }), Re("click", u, () => {
        a && i(a);
      }), D(s, u);
    },
    $$slots: { default: !0 }
  }), ce({
    get style() {
      return n();
    },
    set style(s) {
      n(s), p();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), p();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), p();
    }
  });
}
ie(Pc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var V0 = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), N0 = /* @__PURE__ */ xe('<path fill="none"></path><!><!>', 1);
function Po(e, t) {
  ue(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Pe();
  var y = N0(), x = we(y), b = Z(x);
  {
    var C = (w) => {
      var k = V0();
      me(k, "stroke-opacity", 0), me(k, "stroke-width", v), Me(() => me(k, "d", r())), D(w, k);
    };
    $e(b, (w) => {
      v && w(C);
    });
  }
  var h = Z(b);
  {
    var $ = (w) => {
      Pc(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, S) => {
          Ve();
          var M = Ie();
          Me(() => Bt(M, o())), D(k, M);
        },
        $$slots: { default: !0 }
      });
    };
    $e(h, (w) => {
      o() && w($);
    });
  }
  return Me(
    (w) => {
      me(x, "id", n()), me(x, "d", r()), kt(x, 0, w), me(x, "marker-start", l()), me(x, "marker-end", u()), ft(x, c());
    },
    [
      () => kn(St(["svelte-flow__edge-path", f()]))
    ],
    pe
  ), D(e, y), ce({
    get id() {
      return n();
    },
    set id(w) {
      n(w), p();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), p();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), p();
    },
    get labelX() {
      return i();
    },
    set labelX(w) {
      i(w), p();
    },
    get labelY() {
      return a();
    },
    set labelY(w) {
      a(w), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(w) {
      s(w), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), p();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), p();
    },
    get class() {
      return f();
    },
    set class(w) {
      f(w), p();
    }
  });
}
ie(
  Po,
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
function ki(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, [
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
  ]), ue(t, !1);
  const r = /* @__PURE__ */ te(), o = /* @__PURE__ */ te(), i = /* @__PURE__ */ te();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), x = m(t, "targetX", 12), b = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(x()), G(b()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(hc({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: b(),
        sourcePosition: y(),
        targetPosition: C()
      }));
    }
  ), vt(), Pe(), Po(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), ce({
    get label() {
      return a();
    },
    set label(h) {
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), p();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
ie(
  ki,
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
function Hc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, [
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
  ]), ue(t, !1);
  const r = /* @__PURE__ */ te(), o = /* @__PURE__ */ te(), i = /* @__PURE__ */ te();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), x = m(t, "targetX", 12), b = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(x()), G(b()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(bi({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: b(),
        sourcePosition: y(),
        targetPosition: C()
      }));
    }
  ), vt(), Pe(), Po(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), ce({
    get label() {
      return a();
    },
    set label(h) {
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), p();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
ie(
  Hc,
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
function Oc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, [
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
  ]), ue(t, !1);
  const r = /* @__PURE__ */ te(), o = /* @__PURE__ */ te(), i = /* @__PURE__ */ te();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "targetX", 12), x = m(t, "targetY", 12);
  return de(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(y()), G(x())),
    () => {
      ((b) => (F(r, b[0]), F(o, b[1]), F(i, b[2])))(Oa({
        sourceX: f(),
        sourceY: v(),
        targetX: y(),
        targetY: x()
      }));
    }
  ), vt(), Pe(), Po(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), ce({
    get label() {
      return a();
    },
    set label(b) {
      a(b), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(b) {
      s(b), p();
    },
    get style() {
      return l();
    },
    set style(b) {
      l(b), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(b) {
      u(b), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(b) {
      c(b), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(b) {
      d(b), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(b) {
      f(b), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(b) {
      v(b), p();
    },
    get targetX() {
      return y();
    },
    set targetX(b) {
      y(b), p();
    },
    get targetY() {
      return x();
    },
    set targetY(b) {
      x(b), p();
    }
  });
}
ie(
  Oc,
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
function Dc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, [
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
  ]), ue(t, !1);
  const r = /* @__PURE__ */ te(), o = /* @__PURE__ */ te(), i = /* @__PURE__ */ te();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), x = m(t, "targetX", 12), b = m(t, "targetY", 12), C = m(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(i), G(f()), G(v()), G(x()), G(b()), G(y()), G(C())),
    () => {
      ((h) => (F(r, h[0]), F(o, h[1]), F(i, h[2])))(bi({
        sourceX: f(),
        sourceY: v(),
        targetX: x(),
        targetY: b(),
        sourcePosition: y(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), vt(), Pe(), Po(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), ce({
    get label() {
      return a();
    },
    set label(h) {
      a(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return x();
    },
    set targetX(h) {
      x(h), p();
    },
    get targetY() {
      return b();
    },
    set targetY(h) {
      b(h), p();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), p();
    }
  });
}
ie(
  Dc,
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
function z0(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function P0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const H0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let a = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, O0 = (e, t, n, r = [0, 0], o = mi) => {
  const { subscribe: i, set: a, update: s } = ye([]);
  let l = e, u = {}, c = !0;
  const d = (x) => (mc(x, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = x, a(l), l), f = (x) => d(x(l)), v = (x) => {
    u = x;
  }, y = (x) => {
    c = x.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: y
  };
}, D0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = ye([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((y) => ({ ...l, ...y })) : f;
    wc(t, n, v), s = v, i(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, Tc = {
  input: Mc,
  output: Ec,
  default: $i,
  group: Vc
}, Lc = {
  straight: Oc,
  smoothstep: Hc,
  default: ki,
  step: Dc
}, T0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? mi;
  mc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), wc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const y = No(s, {
      filter: (x) => !!((x.width || x.initialWidth) && (x.height || x.initialHeight))
    });
    v = hs(y, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: ye(null),
    nodes: O0(e, s, l, d, f),
    nodeLookup: Kt(s),
    parentLookup: Kt(l),
    edgeLookup: Kt(c),
    visibleNodes: Kt([]),
    edges: D0(t, u, c),
    visibleEdges: Kt([]),
    connectionLookup: Kt(u),
    height: ye(500),
    width: ye(500),
    minZoom: ye(0.5),
    maxZoom: ye(2),
    nodeOrigin: ye(d),
    nodeDragThreshold: ye(1),
    nodeExtent: ye(f),
    translateExtent: ye(mi),
    autoPanOnNodeDrag: ye(!0),
    autoPanOnConnect: ye(!0),
    fitViewOnInit: ye(!1),
    fitViewOnInitDone: ye(!1),
    fitViewOptions: ye(void 0),
    panZoom: ye(null),
    snapGrid: ye(null),
    dragging: ye(!1),
    selectionRect: ye(null),
    selectionKeyPressed: ye(!1),
    multiselectionKeyPressed: ye(!1),
    deleteKeyPressed: ye(!1),
    panActivationKeyPressed: ye(!1),
    zoomActivationKeyPressed: ye(!1),
    selectionRectMode: ye(null),
    selectionMode: ye(yi.Partial),
    nodeTypes: ye(Tc),
    edgeTypes: ye(Lc),
    viewport: ye(v),
    connectionMode: ye(lr.Strict),
    domNode: ye(null),
    connection: Kt(za),
    connectionLineType: ye(_r.Bezier),
    connectionRadius: ye(20),
    isValidConnection: ye(() => !0),
    nodesDraggable: ye(!0),
    nodesConnectable: ye(!0),
    elementsSelectable: ye(!0),
    selectNodesOnDrag: ye(!0),
    markers: Kt([]),
    defaultMarkerColor: ye("#b1b1b7"),
    lib: Kt("svelte"),
    onlyRenderVisibleElements: ye(!1),
    onerror: ye(Dp),
    ondelete: ye(void 0),
    onedgecreate: ye(void 0),
    onconnect: ye(void 0),
    onconnectstart: ye(void 0),
    onconnectend: ye(void 0),
    onbeforedelete: ye(void 0),
    nodesInitialized: ye(!1),
    edgesInitialized: ye(!1),
    viewportInitialized: ye(!1),
    initialized: Kt(!1)
  };
};
function L0(e) {
  const t = Kn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, a, s]) => o && a && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Rp({
      sourceNode: u,
      targetNode: c,
      width: a,
      height: s,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Kn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return a;
    const c = Fp({
      id: s.id,
      sourceNode: l,
      targetNode: u,
      sourceHandle: s.sourceHandle || null,
      targetHandle: s.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return c && a.push({
      ...s,
      zIndex: Bp({
        selected: s.selected,
        zIndex: s.zIndex,
        sourceNode: l,
        targetNode: u,
        elevateOnSelect: !1
      }),
      ...c
    }), a;
  }, []));
}
function A0(e) {
  return Kn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? sc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const qi = Symbol();
function Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = T0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l(_) {
    s.nodeTypes.set({
      ...Tc,
      ..._
    });
  }
  function u(_) {
    s.edgeTypes.set({
      ...Lc,
      ..._
    });
  }
  function c(_) {
    const N = q(s.edges);
    s.edges.set(Wp(_, N));
  }
  const d = (_, N = !1) => {
    var H;
    const L = q(s.nodeLookup);
    for (const [B, K] of _) {
      const j = (H = L.get(B)) == null ? void 0 : H.internals.userNode;
      j && (j.position = K.position, j.dragging = N);
    }
    s.nodes.update((B) => B);
  };
  function f(_) {
    var N, H, L;
    const B = q(s.nodeLookup), K = q(s.parentLookup), { changes: j, updatedInternals: ne } = r0(_, B, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (ne) {
      if (Qp(B, K, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const U = q(s.fitViewOptions), Y = y({
          ...U,
          nodes: U == null ? void 0 : U.nodes
        });
        s.fitViewOnInitDone.set(Y);
      }
      for (const U of j) {
        const Y = (N = B.get(U.id)) == null ? void 0 : N.internals.userNode;
        if (Y)
          switch (U.type) {
            case "dimensions": {
              const ae = { ...Y.measured, ...U.dimensions };
              U.setAttributes && (Y.width = ((H = U.dimensions) == null ? void 0 : H.width) ?? Y.width, Y.height = ((L = U.dimensions) == null ? void 0 : L.height) ?? Y.height), Y.measured = ae;
              break;
            }
            case "position":
              Y.position = U.position ?? Y.position;
              break;
          }
      }
      s.nodes.update((U) => U), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(_) {
    const N = q(s.panZoom), H = q(s.domNode);
    if (!N || !H)
      return Promise.resolve(!1);
    const { width: L, height: B } = ps(H), K = pl(q(s.nodeLookup), _);
    return ml({
      nodes: K,
      width: L,
      height: B,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: N
    }, _);
  }
  function y(_) {
    const N = q(s.panZoom);
    if (!N)
      return !1;
    const H = pl(q(s.nodeLookup), _);
    return ml({
      nodes: H,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: N
    }, _), H.size > 0;
  }
  function x(_, N) {
    const H = q(s.panZoom);
    return H ? H.scaleBy(_, N) : Promise.resolve(!1);
  }
  function b(_) {
    return x(1.2, _);
  }
  function C(_) {
    return x(1 / 1.2, _);
  }
  function h(_) {
    const N = q(s.panZoom);
    N && (N.setScaleExtent([_, q(s.maxZoom)]), s.minZoom.set(_));
  }
  function $(_) {
    const N = q(s.panZoom);
    N && (N.setScaleExtent([q(s.minZoom), _]), s.maxZoom.set(_));
  }
  function w(_) {
    const N = q(s.panZoom);
    N && (N.setTranslateExtent(_), s.translateExtent.set(_));
  }
  function k(_) {
    let N = !1;
    return _.forEach((H) => {
      H.selected && (H.selected = !1, N = !0);
    }), N;
  }
  function S(_) {
    var N;
    (N = q(s.panZoom)) == null || N.setClickDistance(_);
  }
  function M(_) {
    k((_ == null ? void 0 : _.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), k((_ == null ? void 0 : _.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (_) => {
    var N;
    if (_) {
      const H = q(s.nodes), L = q(s.edges), B = H.filter((U) => U.selected), K = L.filter((U) => U.selected), { nodes: j, edges: ne } = await lc({
        nodesToRemove: B,
        edgesToRemove: K,
        nodes: H,
        edges: L,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (j.length || ne.length) && (s.nodes.update((U) => U.filter((Y) => !j.some((ae) => ae.id === Y.id))), s.edges.update((U) => U.filter((Y) => !ne.some((ae) => ae.id === Y.id))), (N = q(s.ondelete)) == null || N({
        nodes: j,
        edges: ne
      }));
    }
  });
  function V(_) {
    const N = q(s.multiselectionKeyPressed);
    s.nodes.update((H) => H.map((L) => {
      const B = _.includes(L.id), K = N && L.selected || B;
      return L.selected = K, L;
    })), N || s.edges.update((H) => H.map((L) => (L.selected = !1, L)));
  }
  function z(_) {
    const N = q(s.multiselectionKeyPressed);
    s.edges.update((H) => H.map((L) => {
      const B = _.includes(L.id), K = N && L.selected || B;
      return L.selected = K, L;
    })), N || s.nodes.update((H) => H.map((L) => (L.selected = !1, L)));
  }
  function O(_) {
    var N;
    const H = (N = q(s.nodes)) == null ? void 0 : N.find((L) => L.id === _);
    if (!H) {
      console.warn("012", Or.error012(_));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), H.selected ? H.selected && q(s.multiselectionKeyPressed) && M({ nodes: [H], edges: [] }) : V([_]);
  }
  function T(_) {
    const N = q(s.viewport);
    return o0({
      delta: _,
      panZoom: q(s.panZoom),
      transform: [N.x, N.y, N.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const A = ye(za), I = (_) => {
    A.set({ ..._ });
  };
  function E() {
    A.set(za);
  }
  function P() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), M(), E();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: L0(s),
    visibleNodes: A0(s),
    connection: Kn([A, s.viewport], ([_, N]) => _.inProgress ? {
      ..._,
      to: zo(_.to, [N.x, N.y, N.zoom])
    } : { ..._ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([_, N, H]) => Gp(_, { defaultColor: N, id: H })),
    initialized: (() => {
      let _ = !1;
      const N = q(s.nodes).length, H = q(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([L, B, K]) => _ || (N === 0 ? _ = K : H === 0 ? _ = K && L : _ = K && L && B, _));
    })(),
    // actions
    syncNodeStores: (_) => z0(s.nodes, _),
    syncEdgeStores: (_) => P0(s.edges, _),
    syncViewport: (_) => H0(s.panZoom, s.viewport, _),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: b,
    zoomOut: C,
    fitView: (_) => v(_),
    setMinZoom: h,
    setMaxZoom: $,
    setTranslateExtent: w,
    setPaneClickDistance: S,
    unselectNodesAndEdges: M,
    addSelectedNodes: V,
    addSelectedEdges: z,
    handleNodeSelection: O,
    panBy: T,
    updateConnection: I,
    cancelConnection: E,
    reset: P
  };
}
function Ge() {
  const e = ir(qi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function I0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Ac({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return zr(qi, {
    getStore: () => s
  }), s;
}
function zl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = $0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return a.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var Z0 = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const B0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Ic(e, t) {
  ue(t, !1), Qe(e, B0);
  const [n, r] = ot(), o = () => J(H, "$panActivationKeyPressed", n), i = () => J(I, "$minZoom", n), a = () => J(E, "$maxZoom", n), s = () => J(L, "$zoomActivationKeyPressed", n), l = () => J(A, "$selectionRect", n), u = () => J(_, "$translateExtent", n), c = () => J(N, "$lib", n), d = /* @__PURE__ */ te(), f = /* @__PURE__ */ te(), v = /* @__PURE__ */ te();
  let y = m(t, "initialViewport", 12, void 0), x = m(t, "onMoveStart", 12, void 0), b = m(t, "onMove", 12, void 0), C = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), $ = m(t, "preventScrolling", 12), w = m(t, "zoomOnScroll", 12), k = m(t, "zoomOnDoubleClick", 12), S = m(t, "zoomOnPinch", 12), M = m(t, "panOnDrag", 12), V = m(t, "panOnScroll", 12), z = m(t, "paneClickDistance", 12);
  const {
    viewport: O,
    panZoom: T,
    selectionRect: A,
    minZoom: I,
    maxZoom: E,
    dragging: P,
    translateExtent: _,
    lib: N,
    panActivationKeyPressed: H,
    zoomActivationKeyPressed: L,
    viewportInitialized: B
  } = Ge(), K = (Y) => O.set({
    x: Y[0],
    y: Y[1],
    zoom: Y[2]
  });
  Yt(() => {
    ci(B, !0);
  }), de(() => G(y()), () => {
    F(d, y() || { x: 0, y: 0, zoom: 1 });
  }), de(
    () => (o(), G(M())),
    () => {
      F(f, o() || M());
    }
  ), de(
    () => (o(), G(V())),
    () => {
      F(v, o() || V());
    }
  ), vt(), Pe();
  var j = Z0(), ne = W(j);
  pt(ne, t, "default", {}), X(j), ht(j, (Y, ae) => zl == null ? void 0 : zl(Y, ae), () => ({
    viewport: O,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: P,
    panZoom: T,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: C(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: S(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || qn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof $() == "boolean" ? $() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: z(),
    onTransformChange: K
  })), D(e, j);
  var U = ce({
    get initialViewport() {
      return y();
    },
    set initialViewport(Y) {
      y(Y), p();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(Y) {
      x(Y), p();
    },
    get onMove() {
      return b();
    },
    set onMove(Y) {
      b(Y), p();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(Y) {
      C(Y), p();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(Y) {
      h(Y), p();
    },
    get preventScrolling() {
      return $();
    },
    set preventScrolling(Y) {
      $(Y), p();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(Y) {
      w(Y), p();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(Y) {
      k(Y), p();
    },
    get zoomOnPinch() {
      return S();
    },
    set zoomOnPinch(Y) {
      S(Y), p();
    },
    get panOnDrag() {
      return M();
    },
    set panOnDrag(Y) {
      M(Y), p();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(Y) {
      V(Y), p();
    },
    get paneClickDistance() {
      return z();
    },
    set paneClickDistance(Y) {
      z(Y), p();
    }
  });
  return r(), U;
}
ie(
  Ic,
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
function Pl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Hl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var R0 = /* @__PURE__ */ oe("<div><!></div>");
const X0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Zc(e, t) {
  ue(t, !1), Qe(e, X0);
  const [n, r] = ot(), o = () => J(E, "$panActivationKeyPressed", n), i = () => J(A, "$selectionKeyPressed", n), a = () => J(O, "$selectionRect", n), s = () => J(z, "$elementsSelectable", n), l = () => J(T, "$selectionRectMode", n), u = () => J(S, "$edges", n), c = () => J(k, "$nodeLookup", n), d = () => J(M, "$viewport", n), f = () => J(I, "$selectionMode", n), v = () => J(V, "$dragging", n), y = /* @__PURE__ */ te(), x = /* @__PURE__ */ te(), b = /* @__PURE__ */ te();
  let C = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const $ = Ai(), {
    nodes: w,
    nodeLookup: k,
    edges: S,
    viewport: M,
    dragging: V,
    elementsSelectable: z,
    selectionRect: O,
    selectionRectMode: T,
    selectionKeyPressed: A,
    selectionMode: I,
    panActivationKeyPressed: E,
    unselectNodesAndEdges: P
  } = Ge();
  let _ = /* @__PURE__ */ te(), N = null, H = [], L = !1;
  function B(re) {
    if (L) {
      L = !1;
      return;
    }
    $("paneclick", { event: re }), P(), T.set(null);
  }
  function K(re) {
    var he, Ye;
    if (N = g(_).getBoundingClientRect(), !z || !g(x) || re.button !== 0 || re.target !== g(_) || !N)
      return;
    (Ye = (he = re.target) == null ? void 0 : he.setPointerCapture) == null || Ye.call(he, re.pointerId);
    const { x: Ze, y: Be } = Pn(re, N);
    P(), O.set({
      width: 0,
      height: 0,
      startX: Ze,
      startY: Be,
      x: Ze,
      y: Be
    });
  }
  function j(re) {
    if (!g(x) || !N || !a())
      return;
    L = !0;
    const he = Pn(re, N), Ye = a().startX ?? 0, Ze = a().startY ?? 0, Be = {
      ...a(),
      x: he.x < Ye ? he.x : Ye,
      y: he.y < Ze ? he.y : Ze,
      width: Math.abs(he.x - Ye),
      height: Math.abs(he.y - Ze)
    }, ee = H.map((le) => le.id), We = Pa(H, u()).map((le) => le.id);
    H = sc(
      c(),
      Be,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === yi.Partial,
      !0
    );
    const Ue = Pa(H, u()).map((le) => le.id), se = H.map((le) => le.id);
    (ee.length !== se.length || se.some((le) => !ee.includes(le))) && w.update((le) => le.map(Hl(se))), (We.length !== Ue.length || Ue.some((le) => !We.includes(le))) && S.update((le) => le.map(Hl(Ue))), T.set("user"), O.set(Be);
  }
  function ne(re) {
    var he, Ye;
    re.button === 0 && ((Ye = (he = re.target) == null ? void 0 : he.releasePointerCapture) == null || Ye.call(he, re.pointerId), !g(x) && l() === "user" && re.target === g(_) && (B == null || B(re)), O.set(null), H.length > 0 && ci(T, "nodes"), i() && (L = !1));
  }
  const U = (re) => {
    var he;
    if (Array.isArray(g(y)) && (he = g(y)) != null && he.includes(2)) {
      re.preventDefault();
      return;
    }
    $("panecontextmenu", { event: re });
  };
  de(
    () => (o(), G(C())),
    () => {
      F(y, o() || C());
    }
  ), de(
    () => (i(), a(), G(h()), g(y)),
    () => {
      F(x, i() || a() || h() && g(y) !== !0);
    }
  ), de(
    () => (s(), g(x), l()),
    () => {
      F(b, s() && (g(x) || l() === "user"));
    }
  ), vt(), Pe();
  var Y = R0(), ae = Ne(() => g(b) ? void 0 : Pl(B, g(_))), be = Ne(() => Pl(U, g(_)));
  let Ce;
  var ge = W(Y);
  pt(ge, t, "default", {}), X(Y), xn(Y, (re) => F(_, re), () => g(_)), Me(
    (re) => Ce = kt(Y, 1, "svelte-flow__pane svelte-1esy7hx", null, Ce, re),
    [
      () => ({
        draggable: C() === !0 || Array.isArray(C()) && C().includes(0),
        dragging: v(),
        selection: g(x)
      })
    ],
    pe
  ), Re("click", Y, function(...re) {
    var he;
    (he = g(ae)) == null || he.apply(this, re);
  }), Re("pointerdown", Y, function(...re) {
    var he;
    (he = g(b) ? K : void 0) == null || he.apply(this, re);
  }), Re("pointermove", Y, function(...re) {
    var he;
    (he = g(b) ? j : void 0) == null || he.apply(this, re);
  }), Re("pointerup", Y, function(...re) {
    var he;
    (he = g(b) ? ne : void 0) == null || he.apply(this, re);
  }), Re("contextmenu", Y, function(...re) {
    var he;
    (he = g(be)) == null || he.apply(this, re);
  }), D(e, Y);
  var fe = ce({
    get panOnDrag() {
      return C();
    },
    set panOnDrag(re) {
      C(re), p();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(re) {
      h(re), p();
    }
  });
  return r(), fe;
}
ie(Zc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Y0 = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const W0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Bc(e, t) {
  ue(t, !1), Qe(e, W0);
  const [n, r] = ot(), o = () => J(i, "$viewport", n), { viewport: i } = Ge();
  Pe();
  var a = Y0(), s = W(a);
  pt(s, t, "default", {}), X(a), Me(() => ft(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), D(e, a), ce(), r();
}
ie(Bc, {}, ["default"], [], !0);
function _i(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = s0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
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
      s.destroy();
      return;
    }
    s.update({
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
      s.destroy();
    }
  };
}
function K0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const a = e ?? n, s = t ?? r;
    return {
      width: a ? `width:${a}px;` : "",
      height: s ? `height:${s}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var q0 = /* @__PURE__ */ oe("<div><!></div>");
function Rc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(be, "$nodeTypes", n), i = () => J(he, "$elementsSelectable", n), a = () => J(Ye, "$nodesDraggable", n), s = () => J(We, "$connectableStore", n), l = /* @__PURE__ */ te(void 0, !0), u = /* @__PURE__ */ te(void 0, !0), c = /* @__PURE__ */ te(void 0, !0), d = /* @__PURE__ */ te(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), y = m(t, "data", 29, () => ({})), x = m(t, "selected", 13, !1), b = m(t, "draggable", 13, void 0), C = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), $ = m(t, "deletable", 13, !0), w = m(t, "hidden", 13, !1), k = m(t, "dragging", 13, !1), S = m(t, "resizeObserver", 13, null), M = m(t, "style", 13, void 0), V = m(t, "type", 13, "default"), z = m(t, "isParent", 13, !1), O = m(t, "positionX", 13), T = m(t, "positionY", 13), A = m(t, "sourcePosition", 13, void 0), I = m(t, "targetPosition", 13, void 0), E = m(t, "zIndex", 13), P = m(t, "measuredWidth", 13, void 0), _ = m(t, "measuredHeight", 13, void 0), N = m(t, "initialWidth", 13, void 0), H = m(t, "initialHeight", 13, void 0), L = m(t, "width", 13, void 0), B = m(t, "height", 13, void 0), K = m(t, "dragHandle", 13, void 0), j = m(t, "initialized", 13, !1), ne = m(t, "parentId", 13, void 0), U = m(t, "nodeClickDistance", 13, void 0), Y = m(t, "class", 13, "");
  const ae = Ge(), {
    nodeTypes: be,
    nodeDragThreshold: Ce,
    selectNodesOnDrag: ge,
    handleNodeSelection: fe,
    updateNodeInternals: re,
    elementsSelectable: he,
    nodesDraggable: Ye
  } = ae;
  let Ze = /* @__PURE__ */ te(void 0, !0), Be = /* @__PURE__ */ te(null, !0);
  const ee = Ai(), We = ye(h());
  let Ue = /* @__PURE__ */ te(void 0, !0), se = /* @__PURE__ */ te(void 0, !0), le = /* @__PURE__ */ te(void 0, !0);
  zr("svelteflow__node_id", v()), zr("svelteflow__node_connectable", We), is(() => {
    var Q;
    g(Be) && ((Q = S()) == null || Q.unobserve(g(Be)));
  });
  function ke(Q) {
    C() && (!q(ge) || !b() || q(Ce) > 0) && fe(v()), ee("nodeclick", { node: f().internals.userNode, event: Q });
  }
  de(() => G(V()), () => {
    F(l, V() || "default");
  }), de(() => (o(), g(l)), () => {
    F(u, !!o()[g(l)]);
  }), de(
    () => (o(), g(l), $i),
    () => {
      F(c, o()[g(l)] || $i);
    }
  ), de(
    () => (g(u), G(V())),
    () => {
      g(u) || console.warn("003", Or.error003(V()));
    }
  ), de(
    () => (G(L()), G(B()), G(N()), G(H()), G(P()), G(_())),
    () => {
      F(d, K0({
        width: L(),
        height: B(),
        initialWidth: N(),
        initialHeight: H(),
        measuredWidth: P(),
        measuredHeight: _()
      }));
    }
  ), de(() => G(h()), () => {
    We.set(!!h());
  }), de(
    () => (g(Ue), g(l), g(se), G(A()), g(le), G(I()), G(v()), g(Ze)),
    () => {
      (g(Ue) && g(l) !== g(Ue) || g(se) && A() !== g(se) || g(le) && I() !== g(le)) && requestAnimationFrame(() => re(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Ze),
            force: !0
          }
        ]
      ]))), F(Ue, g(l)), F(se, A()), F(le, I());
    }
  ), de(
    () => (G(S()), g(Ze), g(Be), G(j())),
    () => {
      S() && (g(Ze) !== g(Be) || !j()) && (g(Be) && S().unobserve(g(Be)), g(Ze) && S().observe(g(Ze)), F(Be, g(Ze)));
    }
  ), vt(), Pe(!0);
  var Ke = et(), ze = we(Ke);
  {
    var st = (Q) => {
      var Te = q0();
      let ve, Qt;
      var en = W(Te);
      const fn = /* @__PURE__ */ pe(() => x() ?? !1), Ee = /* @__PURE__ */ pe(() => C() ?? i() ?? !0), tt = /* @__PURE__ */ pe(() => $() ?? !0), Le = /* @__PURE__ */ pe(() => b() ?? a() ?? !0);
      ku(en, () => g(c), (He, nt) => {
        nt(He, {
          get data() {
            return y();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(fn);
          },
          get selectable() {
            return g(Ee);
          },
          get deletable() {
            return g(tt);
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return I();
          },
          get zIndex() {
            return E();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(Le);
          },
          get dragHandle() {
            return K();
          },
          get parentId() {
            return ne();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return O();
          },
          get positionAbsoluteY() {
            return T();
          },
          get width() {
            return L();
          },
          get height() {
            return B();
          }
        });
      }), X(Te), ht(Te, (He, nt) => _i == null ? void 0 : _i(He, nt), () => ({
        nodeId: v(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: K(),
        noDragClass: "nodrag",
        nodeClickDistance: U(),
        onNodeMouseDown: fe,
        onDrag: (He, nt, tn, Wt) => {
          ee("nodedrag", { event: He, targetNode: tn, nodes: Wt });
        },
        onDragStart: (He, nt, tn, Wt) => {
          ee("nodedragstart", { event: He, targetNode: tn, nodes: Wt });
        },
        onDragStop: (He, nt, tn, Wt) => {
          ee("nodedragstop", { event: He, targetNode: tn, nodes: Wt });
        },
        store: ae
      })), xn(Te, (He) => F(Ze, He), () => g(Ze)), At(() => Re("click", Te, ke)), At(() => Re("mouseenter", Te, (He) => ee("nodemouseenter", { node: f(), event: He }))), At(() => Re("mouseleave", Te, (He) => ee("nodemouseleave", { node: f(), event: He }))), At(() => Re("mousemove", Te, (He) => ee("nodemousemove", { node: f(), event: He }))), At(() => Re("contextmenu", Te, (He) => ee("nodecontextmenu", { node: f(), event: He }))), Me(
        (He, nt) => {
          me(Te, "data-id", v()), ve = kt(Te, 1, He, null, ve, nt), Qt = ft(Te, `${M() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, Qt, {
            "z-index": E(),
            transform: `translate(${O() ?? ""}px, ${T() ?? ""}px)`,
            visibility: j() ? "visible" : "hidden"
          });
        },
        [
          () => kn(St([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            Y()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: h(),
            selectable: C(),
            nopan: b(),
            parent: z()
          })
        ],
        pe
      ), D(Q, Te);
    };
    $e(ze, (Q) => {
      w() || Q(st);
    });
  }
  D(e, Ke);
  var it = ce({
    get node() {
      return f();
    },
    set node(Q) {
      f(Q), p();
    },
    get id() {
      return v();
    },
    set id(Q) {
      v(Q), p();
    },
    get data() {
      return y();
    },
    set data(Q) {
      y(Q), p();
    },
    get selected() {
      return x();
    },
    set selected(Q) {
      x(Q), p();
    },
    get draggable() {
      return b();
    },
    set draggable(Q) {
      b(Q), p();
    },
    get selectable() {
      return C();
    },
    set selectable(Q) {
      C(Q), p();
    },
    get connectable() {
      return h();
    },
    set connectable(Q) {
      h(Q), p();
    },
    get deletable() {
      return $();
    },
    set deletable(Q) {
      $(Q), p();
    },
    get hidden() {
      return w();
    },
    set hidden(Q) {
      w(Q), p();
    },
    get dragging() {
      return k();
    },
    set dragging(Q) {
      k(Q), p();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(Q) {
      S(Q), p();
    },
    get style() {
      return M();
    },
    set style(Q) {
      M(Q), p();
    },
    get type() {
      return V();
    },
    set type(Q) {
      V(Q), p();
    },
    get isParent() {
      return z();
    },
    set isParent(Q) {
      z(Q), p();
    },
    get positionX() {
      return O();
    },
    set positionX(Q) {
      O(Q), p();
    },
    get positionY() {
      return T();
    },
    set positionY(Q) {
      T(Q), p();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(Q) {
      A(Q), p();
    },
    get targetPosition() {
      return I();
    },
    set targetPosition(Q) {
      I(Q), p();
    },
    get zIndex() {
      return E();
    },
    set zIndex(Q) {
      E(Q), p();
    },
    get measuredWidth() {
      return P();
    },
    set measuredWidth(Q) {
      P(Q), p();
    },
    get measuredHeight() {
      return _();
    },
    set measuredHeight(Q) {
      _(Q), p();
    },
    get initialWidth() {
      return N();
    },
    set initialWidth(Q) {
      N(Q), p();
    },
    get initialHeight() {
      return H();
    },
    set initialHeight(Q) {
      H(Q), p();
    },
    get width() {
      return L();
    },
    set width(Q) {
      L(Q), p();
    },
    get height() {
      return B();
    },
    set height(Q) {
      B(Q), p();
    },
    get dragHandle() {
      return K();
    },
    set dragHandle(Q) {
      K(Q), p();
    },
    get initialized() {
      return j();
    },
    set initialized(Q) {
      j(Q), p();
    },
    get parentId() {
      return ne();
    },
    set parentId(Q) {
      ne(Q), p();
    },
    get nodeClickDistance() {
      return U();
    },
    set nodeClickDistance(Q) {
      U(Q), p();
    },
    get class() {
      return Y();
    },
    set class(Q) {
      Y(Q), p();
    }
  });
  return r(), it;
}
ie(
  Rc,
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
var j0 = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const F0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Xc(e, t) {
  ue(t, !1), Qe(e, F0);
  const [n, r] = ot(), o = () => J(c, "$visibleNodes", n), i = () => J(d, "$nodesDraggable", n), a = () => J(v, "$elementsSelectable", n), s = () => J(f, "$nodesConnectable", n), l = () => J(x, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: y,
    parentLookup: x
  } = Ge(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver(($) => {
    const w = /* @__PURE__ */ new Map();
    $.forEach((k) => {
      const S = k.target.getAttribute("data-id");
      w.set(S, { id: S, nodeElement: k.target, force: !0 });
    }), y(w);
  });
  is(() => {
    b == null || b.disconnect();
  }), Pe();
  var C = j0();
  Ot(C, 5, o, ($) => $.id, ($, w) => {
    const k = /* @__PURE__ */ pe(() => !!g(w).selected), S = /* @__PURE__ */ pe(() => !!g(w).hidden), M = /* @__PURE__ */ pe(() => !!(g(w).draggable || i() && typeof g(w).draggable > "u")), V = /* @__PURE__ */ pe(() => !!(g(w).selectable || a() && typeof g(w).selectable > "u")), z = /* @__PURE__ */ pe(() => !!(g(w).connectable || s() && typeof g(w).connectable > "u")), O = /* @__PURE__ */ pe(() => g(w).deletable ?? !0), T = /* @__PURE__ */ pe(() => l().has(g(w).id)), A = /* @__PURE__ */ pe(() => g(w).type ?? "default"), I = /* @__PURE__ */ pe(() => g(w).internals.z ?? 0), E = /* @__PURE__ */ pe(() => vc(g(w)));
    Rc($, {
      get node() {
        return g(w);
      },
      get id() {
        return g(w).id;
      },
      get data() {
        return g(w).data;
      },
      get selected() {
        return g(k);
      },
      get hidden() {
        return g(S);
      },
      get draggable() {
        return g(M);
      },
      get selectable() {
        return g(V);
      },
      get connectable() {
        return g(z);
      },
      get deletable() {
        return g(O);
      },
      get positionX() {
        return g(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(T);
      },
      get style() {
        return g(w).style;
      },
      get class() {
        return g(w).class;
      },
      get type() {
        return g(A);
      },
      get sourcePosition() {
        return g(w).sourcePosition;
      },
      get targetPosition() {
        return g(w).targetPosition;
      },
      get dragging() {
        return g(w).dragging;
      },
      get zIndex() {
        return g(I);
      },
      get dragHandle() {
        return g(w).dragHandle;
      },
      get initialized() {
        return g(E);
      },
      get width() {
        return g(w).width;
      },
      get height() {
        return g(w).height;
      },
      get initialWidth() {
        return g(w).initialWidth;
      },
      get initialHeight() {
        return g(w).initialHeight;
      },
      get measuredWidth() {
        return g(w).measured.width;
      },
      get measuredHeight() {
        return g(w).measured.height;
      },
      get parentId() {
        return g(w).parentId;
      },
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(P) {
          Oe.call(this, t, P);
        },
        nodemouseenter(P) {
          Oe.call(this, t, P);
        },
        nodemousemove(P) {
          Oe.call(this, t, P);
        },
        nodemouseleave(P) {
          Oe.call(this, t, P);
        },
        nodedrag(P) {
          Oe.call(this, t, P);
        },
        nodedragstart(P) {
          Oe.call(this, t, P);
        },
        nodedragstop(P) {
          Oe.call(this, t, P);
        },
        nodecontextmenu(P) {
          Oe.call(this, t, P);
        }
      }
    });
  }), X(C), D(e, C);
  var h = ce({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance($) {
      u($), p();
    }
  });
  return r(), h;
}
ie(Xc, { nodeClickDistance: {} }, [], [], !0);
var G0 = /* @__PURE__ */ xe('<svg><g role="img"><!></g></svg>');
function Yc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(Y, "$edgeTypes", n), i = () => J(ae, "$flowId", n), a = () => J(be, "$elementsSelectable", n), s = () => J(U, "$edgeLookup", n), l = /* @__PURE__ */ te(void 0, !0), u = /* @__PURE__ */ te(void 0, !0), c = /* @__PURE__ */ te(void 0, !0), d = /* @__PURE__ */ te(void 0, !0), f = /* @__PURE__ */ te(void 0, !0);
  let v = m(t, "id", 13), y = m(t, "type", 13, "default"), x = m(t, "source", 13, ""), b = m(t, "target", 13, ""), C = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), $ = m(t, "zIndex", 13, void 0), w = m(t, "animated", 13, !1), k = m(t, "selected", 13, !1), S = m(t, "selectable", 13, void 0), M = m(t, "deletable", 13, void 0), V = m(t, "hidden", 13, !1), z = m(t, "label", 13, void 0), O = m(t, "labelStyle", 13, void 0), T = m(t, "markerStart", 13, void 0), A = m(t, "markerEnd", 13, void 0), I = m(t, "sourceHandle", 13, void 0), E = m(t, "targetHandle", 13, void 0), P = m(t, "sourceX", 13), _ = m(t, "sourceY", 13), N = m(t, "targetX", 13), H = m(t, "targetY", 13), L = m(t, "sourcePosition", 13), B = m(t, "targetPosition", 13), K = m(t, "ariaLabel", 13, void 0), j = m(t, "interactionWidth", 13, void 0), ne = m(t, "class", 13, "");
  zr("svelteflow__edge_id", v());
  const {
    edgeLookup: U,
    edgeTypes: Y,
    flowId: ae,
    elementsSelectable: be
  } = Ge(), Ce = Ai(), ge = zc();
  function fe(ee) {
    const We = s().get(v());
    We && (ge(v()), Ce("edgeclick", { event: ee, edge: We }));
  }
  function re(ee, We) {
    const Ue = s().get(v());
    Ue && Ce(We, { event: ee, edge: Ue });
  }
  de(() => G(y()), () => {
    F(l, y() || "default");
  }), de(
    () => (o(), g(l), ki),
    () => {
      F(u, o()[g(l)] || ki);
    }
  ), de(
    () => (G(T()), i()),
    () => {
      F(c, T() ? `url('#${Da(T(), i())}')` : void 0);
    }
  ), de(
    () => (G(A()), i()),
    () => {
      F(d, A() ? `url('#${Da(A(), i())}')` : void 0);
    }
  ), de(
    () => (G(S()), a()),
    () => {
      F(f, S() ?? a());
    }
  ), vt(), Pe(!0);
  var he = et(), Ye = we(he);
  {
    var Ze = (ee) => {
      var We = G0();
      let Ue;
      var se = W(We);
      let le;
      var ke = W(se);
      const Ke = /* @__PURE__ */ pe(() => M() ?? !0);
      ku(ke, () => g(u), (ze, st) => {
        st(ze, {
          get id() {
            return v();
          },
          get source() {
            return x();
          },
          get target() {
            return b();
          },
          get sourceX() {
            return P();
          },
          get sourceY() {
            return _();
          },
          get targetX() {
            return N();
          },
          get targetY() {
            return H();
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return B();
          },
          get animated() {
            return w();
          },
          get selected() {
            return k();
          },
          get label() {
            return z();
          },
          get labelStyle() {
            return O();
          },
          get data() {
            return C();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return j();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(Ke);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return I();
          },
          get targetHandleId() {
            return E();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), X(se), X(We), Me(
        (ze, st) => {
          Ue = ft(We, "", Ue, { "z-index": $() }), le = kt(se, 0, ze, null, le, st), me(se, "data-id", v()), me(se, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => kn(St(["svelte-flow__edge", ne()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: g(f)
          })
        ],
        pe
      ), Re("click", se, fe), Re("contextmenu", se, (ze) => {
        re(ze, "edgecontextmenu");
      }), Re("mouseenter", se, (ze) => {
        re(ze, "edgemouseenter");
      }), Re("mouseleave", se, (ze) => {
        re(ze, "edgemouseleave");
      }), D(ee, We);
    };
    $e(Ye, (ee) => {
      V() || ee(Ze);
    });
  }
  D(e, he);
  var Be = ce({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), p();
    },
    get type() {
      return y();
    },
    set type(ee) {
      y(ee), p();
    },
    get source() {
      return x();
    },
    set source(ee) {
      x(ee), p();
    },
    get target() {
      return b();
    },
    set target(ee) {
      b(ee), p();
    },
    get data() {
      return C();
    },
    set data(ee) {
      C(ee), p();
    },
    get style() {
      return h();
    },
    set style(ee) {
      h(ee), p();
    },
    get zIndex() {
      return $();
    },
    set zIndex(ee) {
      $(ee), p();
    },
    get animated() {
      return w();
    },
    set animated(ee) {
      w(ee), p();
    },
    get selected() {
      return k();
    },
    set selected(ee) {
      k(ee), p();
    },
    get selectable() {
      return S();
    },
    set selectable(ee) {
      S(ee), p();
    },
    get deletable() {
      return M();
    },
    set deletable(ee) {
      M(ee), p();
    },
    get hidden() {
      return V();
    },
    set hidden(ee) {
      V(ee), p();
    },
    get label() {
      return z();
    },
    set label(ee) {
      z(ee), p();
    },
    get labelStyle() {
      return O();
    },
    set labelStyle(ee) {
      O(ee), p();
    },
    get markerStart() {
      return T();
    },
    set markerStart(ee) {
      T(ee), p();
    },
    get markerEnd() {
      return A();
    },
    set markerEnd(ee) {
      A(ee), p();
    },
    get sourceHandle() {
      return I();
    },
    set sourceHandle(ee) {
      I(ee), p();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(ee) {
      E(ee), p();
    },
    get sourceX() {
      return P();
    },
    set sourceX(ee) {
      P(ee), p();
    },
    get sourceY() {
      return _();
    },
    set sourceY(ee) {
      _(ee), p();
    },
    get targetX() {
      return N();
    },
    set targetX(ee) {
      N(ee), p();
    },
    get targetY() {
      return H();
    },
    set targetY(ee) {
      H(ee), p();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(ee) {
      L(ee), p();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(ee) {
      B(ee), p();
    },
    get ariaLabel() {
      return K();
    },
    set ariaLabel(ee) {
      K(ee), p();
    },
    get interactionWidth() {
      return j();
    },
    set interactionWidth(ee) {
      j(ee), p();
    },
    get class() {
      return ne();
    },
    set class(ee) {
      ne(ee), p();
    }
  });
  return r(), Be;
}
ie(
  Yc,
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
function Wc(e, t) {
  ue(t, !1);
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return Yt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Pe(), ce({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), p();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), p();
    }
  });
}
ie(Wc, { onMount: {}, onDestroy: {} }, [], [], !0);
var U0 = /* @__PURE__ */ xe("<defs></defs>");
function Kc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(i, "$markers", n), { markers: i } = Ge();
  Pe();
  var a = U0();
  Ot(a, 5, o, (s) => s.id, (s, l) => {
    qc(s, ct(() => g(l)));
  }), X(a), D(e, a), ce(), r();
}
ie(Kc, {}, [], [], !0);
var J0 = /* @__PURE__ */ xe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Q0 = /* @__PURE__ */ xe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), em = /* @__PURE__ */ xe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function qc(e, t) {
  ue(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Pe();
  var c = em(), d = W(c);
  {
    var f = (y) => {
      var x = J0();
      Me(() => {
        me(x, "stroke", l()), me(x, "stroke-width", u());
      }), D(y, x);
    }, v = (y, x) => {
      {
        var b = (C) => {
          var h = Q0();
          Me(() => {
            me(h, "stroke", l()), me(h, "stroke-width", u()), me(h, "fill", l());
          }), D(C, h);
        };
        $e(
          y,
          (C) => {
            r() === wo.ArrowClosed && C(b);
          },
          x
        );
      }
    };
    $e(d, (y) => {
      r() === wo.Arrow ? y(f) : y(v, !1);
    });
  }
  return X(c), Me(() => {
    me(c, "id", n()), me(c, "markerWidth", `${o()}`), me(c, "markerHeight", `${i()}`), me(c, "markerUnits", a()), me(c, "orient", s());
  }), D(e, c), ce({
    get id() {
      return n();
    },
    set id(y) {
      n(y), p();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), p();
    },
    get width() {
      return o();
    },
    set width(y) {
      o(y), p();
    },
    get height() {
      return i();
    },
    set height(y) {
      i(y), p();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(y) {
      a(y), p();
    },
    get orient() {
      return s();
    },
    set orient(y) {
      s(y), p();
    },
    get color() {
      return l();
    },
    set color(y) {
      l(y), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), p();
    }
  });
}
ie(
  qc,
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
var tm = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function jc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(s, "$visibleEdges", n), i = () => J(c, "$elementsSelectable", n);
  let a = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ge();
  Yt(() => {
    a() && u(a());
  }), Pe();
  var d = tm(), f = W(d), v = W(f);
  Kc(v, {}), X(f);
  var y = Z(f, 2);
  Ot(y, 1, o, (h) => h.id, (h, $) => {
    const w = /* @__PURE__ */ pe(() => g($).selectable ?? i()), k = /* @__PURE__ */ pe(() => g($).type || "default");
    Yc(h, {
      get id() {
        return g($).id;
      },
      get source() {
        return g($).source;
      },
      get target() {
        return g($).target;
      },
      get data() {
        return g($).data;
      },
      get style() {
        return g($).style;
      },
      get animated() {
        return g($).animated;
      },
      get selected() {
        return g($).selected;
      },
      get selectable() {
        return g(w);
      },
      get deletable() {
        return g($).deletable;
      },
      get hidden() {
        return g($).hidden;
      },
      get label() {
        return g($).label;
      },
      get labelStyle() {
        return g($).labelStyle;
      },
      get markerStart() {
        return g($).markerStart;
      },
      get markerEnd() {
        return g($).markerEnd;
      },
      get sourceHandle() {
        return g($).sourceHandle;
      },
      get targetHandle() {
        return g($).targetHandle;
      },
      get sourceX() {
        return g($).sourceX;
      },
      get sourceY() {
        return g($).sourceY;
      },
      get targetX() {
        return g($).targetX;
      },
      get targetY() {
        return g($).targetY;
      },
      get sourcePosition() {
        return g($).sourcePosition;
      },
      get targetPosition() {
        return g($).targetPosition;
      },
      get ariaLabel() {
        return g($).ariaLabel;
      },
      get interactionWidth() {
        return g($).interactionWidth;
      },
      get class() {
        return g($).class;
      },
      get type() {
        return g(k);
      },
      get zIndex() {
        return g($).zIndex;
      },
      $$events: {
        edgeclick(S) {
          Oe.call(this, t, S);
        },
        edgecontextmenu(S) {
          Oe.call(this, t, S);
        },
        edgemouseenter(S) {
          Oe.call(this, t, S);
        },
        edgemouseleave(S) {
          Oe.call(this, t, S);
        }
      }
    });
  });
  var x = Z(y, 2);
  {
    var b = (h) => {
      Wc(h, {
        onMount: () => {
          ci(l, !0);
        },
        onDestroy: () => {
          ci(l, !1);
        }
      });
    };
    $e(x, (h) => {
      o().length > 0 && h(b);
    });
  }
  X(d), D(e, d);
  var C = ce({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), p();
    }
  });
  return r(), C;
}
ie(jc, { defaultEdgeOptions: {} }, [], [], !0);
var nm = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const rm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function xs(e, t) {
  ue(t, !1), Qe(e, rm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "isVisible", 12, !0);
  var s = et(), l = we(s);
  {
    var u = (c) => {
      var d = nm();
      let f;
      Me(() => f = ft(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), D(c, d);
    };
    $e(l, (c) => {
      a() && c(u);
    });
  }
  return D(e, s), ce({
    get x() {
      return n();
    },
    set x(c) {
      n(c), p();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), p();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), p();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), p();
    },
    get isVisible() {
      return a();
    },
    set isVisible(c) {
      a(c), p();
    }
  });
}
ie(
  xs,
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
function Fc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(a, "$selectionRect", n), i = () => J(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Ge();
  Pe();
  const l = /* @__PURE__ */ pe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ pe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ pe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ pe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), f = /* @__PURE__ */ pe(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
  });
  xs(e, {
    get isVisible() {
      return g(l);
    },
    get width() {
      return g(u);
    },
    get height() {
      return g(c);
    },
    get x() {
      return g(d);
    },
    get y() {
      return g(f);
    }
  }), ce(), r();
}
ie(Fc, {}, [], [], !0);
var om = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const im = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Gc(e, t) {
  ue(t, !1), Qe(e, im);
  const [n, r] = ot(), o = () => J(l, "$selectionRectMode", n), i = () => J(c, "$nodeLookup", n), a = () => J(u, "$nodes", n), s = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ai();
  let f = /* @__PURE__ */ te(null);
  function v(h) {
    const $ = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: $, event: h });
  }
  function y(h) {
    const $ = a().filter((w) => w.selected);
    d("selectionclick", { nodes: $, event: h });
  }
  de(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (F(f, No(i(), { filter: (h) => !!h.selected })), a());
    }
  ), vt(), Pe();
  var x = et(), b = we(x);
  {
    var C = (h) => {
      var $ = om(), w = W($);
      xs(w, { width: "100%", height: "100%", x: 0, y: 0 }), X($), ht($, (k, S) => _i == null ? void 0 : _i(k, S), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, S, M, V) => {
          d("nodedrag", { event: k, targetNode: null, nodes: V });
        },
        onDragStart: (k, S, M, V) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: V });
        },
        onDragStop: (k, S, M, V) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: V });
        }
      })), At(() => Re("contextmenu", $, v)), At(() => Re("click", $, y)), At(() => Re("keyup", $, () => {
      })), Me(() => ft($, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), D(h, $);
    };
    $e(b, (h) => {
      o() === "nodes" && g(f) && Vn(g(f).x) && Vn(g(f).y) && h(C);
    });
  }
  D(e, x), ce(), r();
}
ie(Gc, {}, [], [], !0);
function ut(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const s = Array.isArray(r) ? r : [r], l = {
      alt: a.altKey,
      ctrl: a.ctrlKey,
      shift: a.shiftKey,
      meta: a.metaKey
    };
    for (const u of s) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: f, callback: v, preventDefault: y, enabled: x } = c;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (b) => typeof b == "string" ? [b] : b
        ).some(
          (b) => b.every((C) => l[C])
        ))
          continue;
        if (a.key === f) {
          y && a.preventDefault();
          const b = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), v == null || v(b);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (a) => {
      const { enabled: s = !0, type: l = "keydown" } = a;
      n && (!s || o !== l) ? e.removeEventListener(o, i) : !n && s && e.addEventListener(l, i), n = s, o = l, r = a.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function Uc(e, t) {
  ue(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => xi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), i = m(t, "panActivationKey", 12, " "), a = m(t, "zoomActivationKey", 28, () => xi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Ge();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function y(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function x(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function b(h, $) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const k = x(w);
      return {
        key: k,
        modifier: y(w),
        enabled: k !== null,
        callback: $
      };
    });
  }
  function C() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Pe(), Re("blur", Vt, C), Re("contextmenu", Vt, C), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Ip(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), ht(Vt, (h, $) => ut == null ? void 0 : ut(h, $), () => ({
    trigger: b(a(), () => d.set(!1)),
    type: "keyup"
  })), ce({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), p();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), p();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), p();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(h) {
      i(h), p();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(h) {
      a(h), p();
    }
  });
}
ie(
  Uc,
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
var am = /* @__PURE__ */ xe('<path fill="none" class="svelte-flow__connection-path"></path>'), sm = /* @__PURE__ */ xe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Jc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(v, "$connection", n), i = () => J(y, "$connectionLineType", n), a = () => J(d, "$width", n), s = () => J(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: y
  } = Ge();
  let x = /* @__PURE__ */ te(null);
  de(
    () => (o(), G(c()), i(), g(x), Oa),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: S, toPosition: M } = o(), V = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: S,
          targetX: k.x,
          targetY: k.y,
          targetPosition: M
        };
        switch (i()) {
          case _r.Bezier:
            ((z) => F(x, z[0]))(hc(V));
            break;
          case _r.Step:
            ((z) => F(x, z[0]))(bi({ ...V, borderRadius: 0 }));
            break;
          case _r.SmoothStep:
            ((z) => F(x, z[0]))(bi(V));
            break;
          default:
            ((z) => F(x, z[0]))(Oa(V));
        }
      }
    }
  ), vt(), Pe();
  var b = et(), C = we(b);
  {
    var h = (w) => {
      var k = sm(), S = W(k), M = W(S);
      pt(M, t, "connectionLine", {});
      var V = Z(M);
      {
        var z = (O) => {
          var T = am();
          Me(() => {
            me(T, "d", g(x)), ft(T, u());
          }), D(O, T);
        };
        $e(V, (O) => {
          c() || O(z);
        });
      }
      X(S), X(k), Me(
        (O) => {
          me(k, "width", a()), me(k, "height", s()), ft(k, l()), kt(S, 0, O);
        },
        [
          () => kn(St([
            "svelte-flow__connection",
            Np(o().isValid)
          ]))
        ],
        pe
      ), D(w, k);
    };
    $e(C, (w) => {
      o().inProgress && w(h);
    });
  }
  D(e, b);
  var $ = ce({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), p();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), p();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), p();
    }
  });
  return r(), $;
}
ie(
  Jc,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var lm = /* @__PURE__ */ oe("<div><!></div>");
function Ho(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["position", "style", "class"]);
  ue(t, !1);
  const [o, i] = ot(), a = () => J(d, "$selectionRectMode", o), s = /* @__PURE__ */ te();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = Ge();
  de(() => G(l()), () => {
    F(s, `${l()}`.split("-"));
  }), vt(), Pe();
  var f = lm();
  let v;
  var y = W(f);
  pt(y, t, "default", {}), X(f), Me(
    (b) => v = sn(f, v, {
      class: b,
      style: u(),
      ...r,
      [er]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => St([
        "svelte-flow__panel",
        c(),
        ...g(s)
      ])
    ],
    pe
  ), D(e, f);
  var x = ce({
    get position() {
      return l();
    },
    set position(b) {
      l(b), p();
    },
    get style() {
      return u();
    },
    set style(b) {
      u(b), p();
    },
    get class() {
      return c();
    },
    set class(b) {
      c(b), p();
    }
  });
  return i(), x;
}
ie(Ho, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var um = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Qc(e, t) {
  ue(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Pe();
  var o = et(), i = we(o);
  {
    var a = (s) => {
      Ho(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = um();
          D(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    $e(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return D(e, o), ce({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), p();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), p();
    }
  });
}
ie(Qc, { proOptions: {}, position: {} }, [], [], !0);
function Ol(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const cm = (e) => Object.keys(e);
function Dl(e, t) {
  cm(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function dm() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function fm(e = "light") {
  return Kt("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = dm(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var vm = /* @__PURE__ */ oe('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), gm = /* @__PURE__ */ oe("<!> <!>", 1), hm = /* @__PURE__ */ oe("<div><!> <!> <!> <!></div>");
const pm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function ed(e, t) {
  const n = Ov(t), r = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = at(r, [
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
  ue(t, !1), Qe(e, pm);
  const [i, a] = ot(), s = () => J($(), "$viewport", i), l = () => J(Ji, "$initialized", i), u = () => J(g(c), "$colorModeClass", i), c = /* @__PURE__ */ te();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), y = m(t, "fitView", 12, void 0), x = m(t, "fitViewOptions", 12, void 0), b = m(t, "minZoom", 12, void 0), C = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), $ = m(t, "viewport", 12, void 0), w = m(t, "nodeTypes", 12, void 0), k = m(t, "edgeTypes", 12, void 0), S = m(t, "selectionKey", 12, void 0), M = m(t, "selectionMode", 12, void 0), V = m(t, "panActivationKey", 12, void 0), z = m(t, "multiSelectionKey", 12, void 0), O = m(t, "zoomActivationKey", 12, void 0), T = m(t, "nodesDraggable", 12, void 0), A = m(t, "nodesConnectable", 12, void 0), I = m(t, "nodeDragThreshold", 12, void 0), E = m(t, "elementsSelectable", 12, void 0), P = m(t, "snapGrid", 12, void 0), _ = m(t, "deleteKey", 12, void 0), N = m(t, "connectionRadius", 12, void 0), H = m(t, "connectionLineType", 12, void 0), L = m(t, "connectionMode", 28, () => lr.Strict), B = m(t, "connectionLineStyle", 12, ""), K = m(t, "connectionLineContainerStyle", 12, ""), j = m(t, "onMoveStart", 12, void 0), ne = m(t, "onMove", 12, void 0), U = m(t, "onMoveEnd", 12, void 0), Y = m(t, "isValidConnection", 12, void 0), ae = m(t, "translateExtent", 12, void 0), be = m(t, "nodeExtent", 12, void 0), Ce = m(t, "onlyRenderVisibleElements", 12, void 0), ge = m(t, "panOnScrollMode", 28, () => qn.Free), fe = m(t, "preventScrolling", 12, !0), re = m(t, "zoomOnScroll", 12, !0), he = m(t, "zoomOnDoubleClick", 12, !0), Ye = m(t, "zoomOnPinch", 12, !0), Ze = m(t, "panOnScroll", 12, !1), Be = m(t, "panOnDrag", 12, !0), ee = m(t, "selectionOnDrag", 12, void 0), We = m(t, "autoPanOnConnect", 12, !0), Ue = m(t, "autoPanOnNodeDrag", 12, !0), se = m(t, "onerror", 12, void 0), le = m(t, "ondelete", 12, void 0), ke = m(t, "onedgecreate", 12, void 0), Ke = m(t, "attributionPosition", 12, void 0), ze = m(t, "proOptions", 12, void 0), st = m(t, "defaultEdgeOptions", 12, void 0), it = m(t, "width", 12, void 0), Q = m(t, "height", 12, void 0), Te = m(t, "colorMode", 12, "light"), ve = m(t, "onconnect", 12, void 0), Qt = m(t, "onconnectstart", 12, void 0), en = m(t, "onconnectend", 12, void 0), fn = m(t, "onbeforedelete", 12, void 0), Ee = m(t, "oninit", 12, void 0), tt = m(t, "nodeOrigin", 12, void 0), Le = m(t, "paneClickDistance", 12, 0), He = m(t, "nodeClickDistance", 12, 0), nt = m(t, "defaultMarkerColor", 12, "#b1b1b7"), tn = m(t, "style", 12, void 0), Wt = m(t, "class", 12, void 0), Kr = /* @__PURE__ */ te(), yt = /* @__PURE__ */ te(), Mt = /* @__PURE__ */ te();
  const mr = s() || h(), rt = gv(qi) ? Ge() : I0({
    nodes: q(f()),
    edges: q(v()),
    width: it(),
    height: Q(),
    fitView: y(),
    nodeOrigin: tt(),
    nodeExtent: be()
  });
  Yt(() => (rt.width.set(g(yt)), rt.height.set(g(Mt)), rt.domNode.set(g(Kr)), rt.syncNodeStores(f()), rt.syncEdgeStores(v()), rt.syncViewport($()), y() !== void 0 && rt.fitViewOnInit.set(y()), x() && rt.fitViewOptions.set(x()), Ol(rt, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: C(),
    translateExtent: ae(),
    paneClickDistance: Le()
  }), () => {
    rt.reset();
  }));
  const { initialized: Ji } = rt;
  let qr = /* @__PURE__ */ te(!1);
  de(
    () => (g(yt), g(Mt)),
    () => {
      g(yt) !== void 0 && g(Mt) !== void 0 && (rt.width.set(g(yt)), rt.height.set(g(Mt)));
    }
  ), de(
    () => (g(qr), l(), G(Ee())),
    () => {
      var R;
      !g(qr) && l() && ((R = Ee()) == null || R(), F(qr, !0));
    }
  ), de(
    () => (G(d()), G(H()), G(N()), G(M()), G(P()), G(nt()), G(T()), G(A()), G(E()), G(Ce()), G(Y()), G(We()), G(Ue()), G(se()), G(le()), G(ke()), G(L()), G(I()), G(ve()), G(Qt()), G(en()), G(fn()), G(tt()), Dl),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: H(),
        connectionRadius: N(),
        selectionMode: M(),
        snapGrid: P(),
        defaultMarkerColor: nt(),
        nodesDraggable: T(),
        nodesConnectable: A(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: Ce(),
        isValidConnection: Y(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: Ue(),
        onerror: se(),
        ondelete: le(),
        onedgecreate: ke(),
        connectionMode: L(),
        nodeDragThreshold: I(),
        onconnect: ve(),
        onconnectstart: Qt(),
        onconnectend: en(),
        onbeforedelete: fn(),
        nodeOrigin: tt()
      };
      Dl(rt, R);
    }
  ), de(
    () => (G(w()), G(k()), G(b()), G(C()), G(ae()), G(Le())),
    () => {
      Ol(rt, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: C(),
        translateExtent: ae(),
        paneClickDistance: Le()
      });
    }
  ), de(
    () => G(Te()),
    () => {
      Yv(F(c, fm(Te())), "$colorModeClass", i);
    }
  ), vt(), Pe();
  var Tt = hm();
  let Ao;
  var Io = W(Tt);
  Uc(Io, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return _();
    },
    get panActivationKey() {
      return V();
    },
    get multiSelectionKey() {
      return z();
    },
    get zoomActivationKey() {
      return O();
    }
  });
  var Zo = Z(Io, 2);
  const Qi = /* @__PURE__ */ pe(() => ge() === void 0 ? qn.Free : ge()), jd = /* @__PURE__ */ pe(() => fe() === void 0 ? !0 : fe()), Fd = /* @__PURE__ */ pe(() => re() === void 0 ? !0 : re()), Gd = /* @__PURE__ */ pe(() => he() === void 0 ? !0 : he()), Ud = /* @__PURE__ */ pe(() => Ye() === void 0 ? !0 : Ye()), Jd = /* @__PURE__ */ pe(() => Ze() === void 0 ? !1 : Ze()), Qd = /* @__PURE__ */ pe(() => Be() === void 0 ? !0 : Be()), ef = /* @__PURE__ */ pe(() => Le() === void 0 ? 0 : Le());
  Ic(Zo, {
    initialViewport: mr,
    get onMoveStart() {
      return j();
    },
    get onMove() {
      return ne();
    },
    get onMoveEnd() {
      return U();
    },
    get panOnScrollMode() {
      return g(Qi);
    },
    get preventScrolling() {
      return g(jd);
    },
    get zoomOnScroll() {
      return g(Fd);
    },
    get zoomOnDoubleClick() {
      return g(Gd);
    },
    get zoomOnPinch() {
      return g(Ud);
    },
    get panOnScroll() {
      return g(Jd);
    },
    get panOnDrag() {
      return g(Qd);
    },
    get paneClickDistance() {
      return g(ef);
    },
    children: (R, Hw) => {
      const rf = /* @__PURE__ */ pe(() => Be() === void 0 ? !0 : Be());
      Zc(R, {
        get panOnDrag() {
          return g(rf);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(jr) {
            Oe.call(this, t, jr);
          },
          panecontextmenu(jr) {
            Oe.call(this, t, jr);
          }
        },
        children: (jr, Ow) => {
          var Ms = gm(), Es = we(Ms);
          Bc(Es, {
            children: (af, Dw) => {
              var Vs = vm(), Ns = we(Vs);
              jc(Ns, {
                get defaultEdgeOptions() {
                  return st();
                },
                $$events: {
                  edgeclick(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  edgecontextmenu(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  edgemouseenter(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  edgemouseleave(Ae) {
                    Oe.call(this, t, Ae);
                  }
                }
              });
              var zs = Z(Ns, 2);
              Jc(zs, {
                get containerStyle() {
                  return K();
                },
                get style() {
                  return B();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ae, Tw) => {
                    var Hs = et(), lf = we(Hs);
                    pt(lf, t, "connectionLine", {}), D(Ae, Hs);
                  }
                }
              });
              var Ps = Z(zs, 6);
              Xc(Ps, {
                get nodeClickDistance() {
                  return He();
                },
                $$events: {
                  nodeclick(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodemouseenter(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodemousemove(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodemouseleave(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodedragstart(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodedrag(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodedragstop(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodecontextmenu(Ae) {
                    Oe.call(this, t, Ae);
                  }
                }
              });
              var sf = Z(Ps, 2);
              Gc(sf, {
                $$events: {
                  selectionclick(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  selectioncontextmenu(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodedragstart(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodedrag(Ae) {
                    Oe.call(this, t, Ae);
                  },
                  nodedragstop(Ae) {
                    Oe.call(this, t, Ae);
                  }
                }
              }), D(af, Vs);
            },
            $$slots: { default: !0 }
          });
          var of = Z(Es, 2);
          Fc(of, {}), D(jr, Ms);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ss = Z(Zo, 2);
  Qc(Ss, {
    get proOptions() {
      return ze();
    },
    get position() {
      return Ke();
    }
  });
  var tf = Z(Ss, 2);
  pt(tf, t, "default", {}), X(Tt), xn(Tt, (R) => F(Kr, R), () => g(Kr)), Me(
    (R) => Ao = sn(
      Tt,
      Ao,
      {
        style: tn(),
        class: R,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => St([
        "svelte-flow",
        Wt(),
        u()
      ])
    ],
    pe
  ), Ks(Tt, "clientWidth", (R) => F(yt, R)), Ks(Tt, "clientHeight", (R) => F(Mt, R)), Re("dragover", Tt, function(R) {
    Oe.call(this, t, R);
  }), Re("drop", Tt, function(R) {
    Oe.call(this, t, R);
  }), D(e, Tt);
  var nf = ce({
    get id() {
      return d();
    },
    set id(R) {
      d(R), p();
    },
    get nodes() {
      return f();
    },
    set nodes(R) {
      f(R), p();
    },
    get edges() {
      return v();
    },
    set edges(R) {
      v(R), p();
    },
    get fitView() {
      return y();
    },
    set fitView(R) {
      y(R), p();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(R) {
      x(R), p();
    },
    get minZoom() {
      return b();
    },
    set minZoom(R) {
      b(R), p();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(R) {
      C(R), p();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(R) {
      h(R), p();
    },
    get viewport() {
      return $();
    },
    set viewport(R) {
      $(R), p();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(R) {
      w(R), p();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(R) {
      k(R), p();
    },
    get selectionKey() {
      return S();
    },
    set selectionKey(R) {
      S(R), p();
    },
    get selectionMode() {
      return M();
    },
    set selectionMode(R) {
      M(R), p();
    },
    get panActivationKey() {
      return V();
    },
    set panActivationKey(R) {
      V(R), p();
    },
    get multiSelectionKey() {
      return z();
    },
    set multiSelectionKey(R) {
      z(R), p();
    },
    get zoomActivationKey() {
      return O();
    },
    set zoomActivationKey(R) {
      O(R), p();
    },
    get nodesDraggable() {
      return T();
    },
    set nodesDraggable(R) {
      T(R), p();
    },
    get nodesConnectable() {
      return A();
    },
    set nodesConnectable(R) {
      A(R), p();
    },
    get nodeDragThreshold() {
      return I();
    },
    set nodeDragThreshold(R) {
      I(R), p();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(R) {
      E(R), p();
    },
    get snapGrid() {
      return P();
    },
    set snapGrid(R) {
      P(R), p();
    },
    get deleteKey() {
      return _();
    },
    set deleteKey(R) {
      _(R), p();
    },
    get connectionRadius() {
      return N();
    },
    set connectionRadius(R) {
      N(R), p();
    },
    get connectionLineType() {
      return H();
    },
    set connectionLineType(R) {
      H(R), p();
    },
    get connectionMode() {
      return L();
    },
    set connectionMode(R) {
      L(R), p();
    },
    get connectionLineStyle() {
      return B();
    },
    set connectionLineStyle(R) {
      B(R), p();
    },
    get connectionLineContainerStyle() {
      return K();
    },
    set connectionLineContainerStyle(R) {
      K(R), p();
    },
    get onMoveStart() {
      return j();
    },
    set onMoveStart(R) {
      j(R), p();
    },
    get onMove() {
      return ne();
    },
    set onMove(R) {
      ne(R), p();
    },
    get onMoveEnd() {
      return U();
    },
    set onMoveEnd(R) {
      U(R), p();
    },
    get isValidConnection() {
      return Y();
    },
    set isValidConnection(R) {
      Y(R), p();
    },
    get translateExtent() {
      return ae();
    },
    set translateExtent(R) {
      ae(R), p();
    },
    get nodeExtent() {
      return be();
    },
    set nodeExtent(R) {
      be(R), p();
    },
    get onlyRenderVisibleElements() {
      return Ce();
    },
    set onlyRenderVisibleElements(R) {
      Ce(R), p();
    },
    get panOnScrollMode() {
      return ge();
    },
    set panOnScrollMode(R) {
      ge(R), p();
    },
    get preventScrolling() {
      return fe();
    },
    set preventScrolling(R) {
      fe(R), p();
    },
    get zoomOnScroll() {
      return re();
    },
    set zoomOnScroll(R) {
      re(R), p();
    },
    get zoomOnDoubleClick() {
      return he();
    },
    set zoomOnDoubleClick(R) {
      he(R), p();
    },
    get zoomOnPinch() {
      return Ye();
    },
    set zoomOnPinch(R) {
      Ye(R), p();
    },
    get panOnScroll() {
      return Ze();
    },
    set panOnScroll(R) {
      Ze(R), p();
    },
    get panOnDrag() {
      return Be();
    },
    set panOnDrag(R) {
      Be(R), p();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(R) {
      ee(R), p();
    },
    get autoPanOnConnect() {
      return We();
    },
    set autoPanOnConnect(R) {
      We(R), p();
    },
    get autoPanOnNodeDrag() {
      return Ue();
    },
    set autoPanOnNodeDrag(R) {
      Ue(R), p();
    },
    get onerror() {
      return se();
    },
    set onerror(R) {
      se(R), p();
    },
    get ondelete() {
      return le();
    },
    set ondelete(R) {
      le(R), p();
    },
    get onedgecreate() {
      return ke();
    },
    set onedgecreate(R) {
      ke(R), p();
    },
    get attributionPosition() {
      return Ke();
    },
    set attributionPosition(R) {
      Ke(R), p();
    },
    get proOptions() {
      return ze();
    },
    set proOptions(R) {
      ze(R), p();
    },
    get defaultEdgeOptions() {
      return st();
    },
    set defaultEdgeOptions(R) {
      st(R), p();
    },
    get width() {
      return it();
    },
    set width(R) {
      it(R), p();
    },
    get height() {
      return Q();
    },
    set height(R) {
      Q(R), p();
    },
    get colorMode() {
      return Te();
    },
    set colorMode(R) {
      Te(R), p();
    },
    get onconnect() {
      return ve();
    },
    set onconnect(R) {
      ve(R), p();
    },
    get onconnectstart() {
      return Qt();
    },
    set onconnectstart(R) {
      Qt(R), p();
    },
    get onconnectend() {
      return en();
    },
    set onconnectend(R) {
      en(R), p();
    },
    get onbeforedelete() {
      return fn();
    },
    set onbeforedelete(R) {
      fn(R), p();
    },
    get oninit() {
      return Ee();
    },
    set oninit(R) {
      Ee(R), p();
    },
    get nodeOrigin() {
      return tt();
    },
    set nodeOrigin(R) {
      tt(R), p();
    },
    get paneClickDistance() {
      return Le();
    },
    set paneClickDistance(R) {
      Le(R), p();
    },
    get nodeClickDistance() {
      return He();
    },
    set nodeClickDistance(R) {
      He(R), p();
    },
    get defaultMarkerColor() {
      return nt();
    },
    set defaultMarkerColor(R) {
      nt(R), p();
    },
    get style() {
      return tn();
    },
    set style(R) {
      tn(R), p();
    },
    get class() {
      return Wt();
    },
    set class(R) {
      Wt(R), p();
    }
  });
  return a(), nf;
}
ie(
  ed,
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
function td(e, t) {
  ue(t, !1);
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), i = m(t, "initialHeight", 12, void 0), a = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = Ac({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  zr(qi, { getStore: () => l }), is(() => {
    l.reset();
  }), Pe();
  var u = et(), c = we(u);
  return pt(c, t, "default", {}), D(e, u), ce({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), p();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), p();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), p();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), p();
    },
    get fitView() {
      return a();
    },
    set fitView(d) {
      a(d), p();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), p();
    }
  });
}
ie(
  td,
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
var mm = /* @__PURE__ */ oe("<button><!></button>");
function no(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  ue(t, !1);
  let o = m(t, "class", 12, void 0), i = m(t, "bgColor", 12, void 0), a = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  Pe();
  var c = mm();
  let d;
  var f = W(c);
  return pt(f, t, "default", { class: "button-svg" }), X(c), Me(
    (v) => d = sn(c, d, {
      type: "button",
      class: v,
      ...r,
      [er]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": a(),
        "--xy-controls-button-color-props": s(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => St([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), Re("click", c, function(v) {
    Oe.call(this, t, v);
  }), D(e, c), ce({
    get class() {
      return o();
    },
    set class(v) {
      o(v), p();
    },
    get bgColor() {
      return i();
    },
    set bgColor(v) {
      i(v), p();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(v) {
      a(v), p();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), p();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), p();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), p();
    }
  });
}
ie(
  no,
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
var ym = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function nd(e) {
  var t = ym();
  D(e, t);
}
ie(nd, {}, [], [], !0);
var wm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function rd(e) {
  var t = wm();
  D(e, t);
}
ie(rd, {}, [], [], !0);
var xm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function od(e) {
  var t = xm();
  D(e, t);
}
ie(od, {}, [], [], !0);
var bm = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function id(e) {
  var t = bm();
  D(e, t);
}
ie(id, {}, [], [], !0);
var $m = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function ad(e) {
  var t = $m();
  D(e, t);
}
ie(ad, {}, [], [], !0);
var Cm = /* @__PURE__ */ oe("<!> <!>", 1), km = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function sd(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(H, "$nodesDraggable", n), i = () => J(L, "$nodesConnectable", n), a = () => J(B, "$elementsSelectable", n), s = () => J(P, "$viewport", n), l = () => J(_, "$minZoom", n), u = () => J(N, "$maxZoom", n), c = /* @__PURE__ */ te(), d = /* @__PURE__ */ te(), f = /* @__PURE__ */ te(), v = /* @__PURE__ */ te();
  let y = m(t, "position", 12, "bottom-left"), x = m(t, "showZoom", 12, !0), b = m(t, "showFitView", 12, !0), C = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), $ = m(t, "buttonBgColorHover", 12, void 0), w = m(t, "buttonColor", 12, void 0), k = m(t, "buttonColorHover", 12, void 0), S = m(t, "buttonBorderColor", 12, void 0), M = m(t, "ariaLabel", 12, void 0), V = m(t, "style", 12, void 0), z = m(t, "orientation", 12, "vertical"), O = m(t, "fitViewOptions", 12, void 0), T = m(t, "class", 12, "");
  const {
    zoomIn: A,
    zoomOut: I,
    fitView: E,
    viewport: P,
    minZoom: _,
    maxZoom: N,
    nodesDraggable: H,
    nodesConnectable: L,
    elementsSelectable: B
  } = Ge(), K = {
    bgColor: h(),
    bgColorHover: $(),
    color: w(),
    colorHover: k(),
    borderColor: S()
  }, j = () => {
    A();
  }, ne = () => {
    I();
  }, U = () => {
    E(O());
  }, Y = () => {
    F(c, !g(c)), H.set(g(c)), L.set(g(c)), B.set(g(c));
  };
  de(
    () => (o(), i(), a()),
    () => {
      F(c, o() || i() || a());
    }
  ), de(() => (s(), l()), () => {
    F(d, s().zoom <= l());
  }), de(() => (s(), u()), () => {
    F(f, s().zoom >= u());
  }), de(() => G(z()), () => {
    F(v, z() === "horizontal" ? "horizontal" : "vertical");
  }), vt(), Pe();
  const ae = /* @__PURE__ */ pe(() => St([
    "svelte-flow__controls",
    g(v),
    T()
  ])), be = /* @__PURE__ */ pe(() => M() ?? "Svelte Flow controls");
  Ho(e, {
    get class() {
      return g(ae);
    },
    get position() {
      return y();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(be);
    },
    get style() {
      return V();
    },
    children: (ge, fe) => {
      var re = km(), he = we(re);
      pt(he, t, "before", {});
      var Ye = Z(he, 2);
      {
        var Ze = (ke) => {
          var Ke = Cm(), ze = we(Ke);
          no(ze, ct(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            K,
            {
              $$events: { click: j },
              children: (it, Q) => {
                nd(it);
              },
              $$slots: { default: !0 }
            }
          ));
          var st = Z(ze, 2);
          no(st, ct(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            K,
            {
              $$events: { click: ne },
              children: (it, Q) => {
                rd(it);
              },
              $$slots: { default: !0 }
            }
          )), D(ke, Ke);
        };
        $e(Ye, (ke) => {
          x() && ke(Ze);
        });
      }
      var Be = Z(Ye, 2);
      {
        var ee = (ke) => {
          no(ke, ct(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            K,
            {
              $$events: { click: U },
              children: (Ke, ze) => {
                od(Ke);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(Be, (ke) => {
          b() && ke(ee);
        });
      }
      var We = Z(Be, 2);
      {
        var Ue = (ke) => {
          no(ke, ct(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            K,
            {
              $$events: { click: Y },
              children: (Ke, ze) => {
                var st = et(), it = we(st);
                {
                  var Q = (ve) => {
                    ad(ve);
                  }, Te = (ve) => {
                    id(ve);
                  };
                  $e(it, (ve) => {
                    g(c) ? ve(Q) : ve(Te, !1);
                  });
                }
                D(Ke, st);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(We, (ke) => {
          C() && ke(Ue);
        });
      }
      var se = Z(We, 2);
      pt(se, t, "default", {});
      var le = Z(se, 2);
      pt(le, t, "after", {}), D(ge, re);
    },
    $$slots: { default: !0 }
  });
  var Ce = ce({
    get position() {
      return y();
    },
    set position(ge) {
      y(ge), p();
    },
    get showZoom() {
      return x();
    },
    set showZoom(ge) {
      x(ge), p();
    },
    get showFitView() {
      return b();
    },
    set showFitView(ge) {
      b(ge), p();
    },
    get showLock() {
      return C();
    },
    set showLock(ge) {
      C(ge), p();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(ge) {
      h(ge), p();
    },
    get buttonBgColorHover() {
      return $();
    },
    set buttonBgColorHover(ge) {
      $(ge), p();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(ge) {
      w(ge), p();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ge) {
      k(ge), p();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(ge) {
      S(ge), p();
    },
    get ariaLabel() {
      return M();
    },
    set ariaLabel(ge) {
      M(ge), p();
    },
    get style() {
      return V();
    },
    set style(ge) {
      V(ge), p();
    },
    get orientation() {
      return z();
    },
    set orientation(ge) {
      z(ge), p();
    },
    get fitViewOptions() {
      return O();
    },
    set fitViewOptions(ge) {
      O(ge), p();
    },
    get class() {
      return T();
    },
    set class(ge) {
      T(ge), p();
    }
  });
  return r(), Ce;
}
ie(
  sd,
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
var jn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(jn || (jn = {}));
var _m = /* @__PURE__ */ xe("<circle></circle>");
function ld(e, t) {
  ue(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Pe();
  var o = _m();
  return Me(
    (i) => {
      me(o, "cx", n()), me(o, "cy", n()), me(o, "r", n()), kt(o, 0, i);
    },
    [
      () => kn(St([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    pe
  ), D(e, o), ce({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), p();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), p();
    }
  });
}
ie(ld, { radius: {}, class: {} }, [], [], !0);
var Sm = /* @__PURE__ */ xe("<path></path>");
function ud(e, t) {
  ue(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  Pe();
  var a = Sm();
  return Me(
    (s) => {
      me(a, "stroke-width", n()), me(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), kt(a, 0, s);
    },
    [
      () => kn(St([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    pe
  ), D(e, a), ce({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), p();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), p();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), p();
    },
    get class() {
      return i();
    },
    set class(s) {
      i(s), p();
    }
  });
}
ie(
  ud,
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
const Mm = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var Em = /* @__PURE__ */ xe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Vm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function cd(e, t) {
  ue(t, !1), Qe(e, Vm);
  const [n, r] = ot(), o = () => J(k, "$flowId", n), i = () => J(w, "$viewport", n), a = /* @__PURE__ */ te(), s = /* @__PURE__ */ te(), l = /* @__PURE__ */ te(), u = /* @__PURE__ */ te(), c = /* @__PURE__ */ te();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => jn.Dots), v = m(t, "gap", 12, 20), y = m(t, "size", 12, 1), x = m(t, "lineWidth", 12, 1), b = m(t, "bgColor", 12, void 0), C = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), $ = m(t, "class", 12, "");
  const { viewport: w, flowId: k } = Ge(), S = y() || Mm[f()], M = f() === jn.Dots, V = f() === jn.Cross, z = Array.isArray(v()) ? v() : [v(), v()];
  de(
    () => (o(), G(d())),
    () => {
      F(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), de(() => i(), () => {
    F(s, [
      z[0] * i().zoom || 1,
      z[1] * i().zoom || 1
    ]);
  }), de(() => i(), () => {
    F(l, S * i().zoom);
  }), de(() => (g(l), g(s)), () => {
    F(u, V ? [g(l), g(l)] : g(s));
  }), de(
    () => (g(l), g(u)),
    () => {
      F(c, M ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), vt(), Pe();
  var O = Em();
  let T;
  var A = W(O), I = W(A);
  {
    var E = (H) => {
      const L = /* @__PURE__ */ pe(() => g(l) / 2);
      ld(H, {
        get radius() {
          return g(L);
        },
        get class() {
          return h();
        }
      });
    }, P = (H) => {
      ud(H, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return h();
        }
      });
    };
    $e(I, (H) => {
      M ? H(E) : H(P, !1);
    });
  }
  X(A);
  var _ = Z(A);
  X(O), Me(
    (H) => {
      kt(O, 0, H, "svelte-1r7pe8d"), T = ft(O, "", T, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": C()
      }), me(A, "id", g(a)), me(A, "x", i().x % g(s)[0]), me(A, "y", i().y % g(s)[1]), me(A, "width", g(s)[0]), me(A, "height", g(s)[1]), me(A, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), me(_, "fill", `url(#${g(a)})`);
    },
    [
      () => kn(St(["svelte-flow__background", $()]))
    ],
    pe
  ), D(e, O);
  var N = ce({
    get id() {
      return d();
    },
    set id(H) {
      d(H), p();
    },
    get variant() {
      return f();
    },
    set variant(H) {
      f(H), p();
    },
    get gap() {
      return v();
    },
    set gap(H) {
      v(H), p();
    },
    get size() {
      return y();
    },
    set size(H) {
      y(H), p();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(H) {
      x(H), p();
    },
    get bgColor() {
      return b();
    },
    set bgColor(H) {
      b(H), p();
    },
    get patternColor() {
      return C();
    },
    set patternColor(H) {
      C(H), p();
    },
    get patternClass() {
      return h();
    },
    set patternClass(H) {
      h(H), p();
    },
    get class() {
      return $();
    },
    set class(H) {
      $(H), p();
    }
  });
  return r(), N;
}
ie(
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
var Nm = /* @__PURE__ */ xe("<rect></rect>");
function dd(e, t) {
  ue(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Pe();
  var v = Nm();
  let y;
  return Me(
    (x, b) => {
      y = kt(v, 0, x, null, y, b), me(v, "x", n()), me(v, "y", r()), me(v, "rx", a()), me(v, "ry", a()), me(v, "width", o()), me(v, "height", i()), ft(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), me(v, "shape-rendering", l());
    },
    [
      () => kn(St(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    pe
  ), D(e, v), ce({
    get x() {
      return n();
    },
    set x(x) {
      n(x), p();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), p();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), p();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), p();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(x) {
      a(x), p();
    },
    get color() {
      return s();
    },
    set color(x) {
      s(x), p();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), p();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), p();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(x) {
      c(x), p();
    },
    get selected() {
      return d();
    },
    set selected(x) {
      d(x), p();
    },
    get class() {
      return f();
    },
    set class(x) {
      f(x), p();
    }
  });
}
ie(
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
function Tl(e, t) {
  const n = g0({
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
const fa = (e) => e instanceof Function ? e : () => e;
var zm = /* @__PURE__ */ xe("<title> </title>"), Pm = /* @__PURE__ */ xe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function fd(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J(Be, "$flowId", n), i = () => J(he, "$viewport", n), a = () => J(Ye, "$containerWidth", n), s = () => J(Ze, "$containerHeight", n), l = () => J(re, "$nodeLookup", n), u = () => J(fe, "$nodes", n), c = () => J(ee, "$panZoom", n), d = () => J(We, "$translateExtent", n), f = /* @__PURE__ */ te(), v = /* @__PURE__ */ te(), y = /* @__PURE__ */ te(), x = /* @__PURE__ */ te(), b = /* @__PURE__ */ te(), C = /* @__PURE__ */ te(), h = /* @__PURE__ */ te(), $ = /* @__PURE__ */ te(), w = /* @__PURE__ */ te(), k = /* @__PURE__ */ te(), S = /* @__PURE__ */ te(), M = /* @__PURE__ */ te(), V = /* @__PURE__ */ te();
  let z = m(t, "position", 12, "bottom-right"), O = m(t, "ariaLabel", 12, "Mini map"), T = m(t, "nodeStrokeColor", 12, "transparent"), A = m(t, "nodeColor", 12, void 0), I = m(t, "nodeClass", 12, ""), E = m(t, "nodeBorderRadius", 12, 5), P = m(t, "nodeStrokeWidth", 12, 2), _ = m(t, "bgColor", 12, void 0), N = m(t, "maskColor", 12, void 0), H = m(t, "maskStrokeColor", 12, void 0), L = m(t, "maskStrokeWidth", 12, void 0), B = m(t, "width", 12, void 0), K = m(t, "height", 12, void 0), j = m(t, "pannable", 12, !0), ne = m(t, "zoomable", 12, !0), U = m(t, "inversePan", 12, void 0), Y = m(t, "zoomStep", 12, void 0), ae = m(t, "style", 12, ""), be = m(t, "class", 12, "");
  const Ce = 200, ge = 150, {
    nodes: fe,
    nodeLookup: re,
    viewport: he,
    width: Ye,
    height: Ze,
    flowId: Be,
    panZoom: ee,
    translateExtent: We
  } = Ge(), Ue = A() === void 0 ? void 0 : fa(A()), se = fa(T()), le = fa(I()), ke = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ke = `svelte-flow__minimap-desc-${o()}`;
  let ze = /* @__PURE__ */ te(g(f));
  const st = () => g(C);
  de(
    () => (i(), a(), s()),
    () => {
      F(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), de(
    () => (l(), g(f), u()),
    () => {
      F(ze, l().size > 0 ? dc(No(l()), g(f)) : g(f)), u();
    }
  ), de(() => G(B()), () => {
    F(v, B() ?? Ce);
  }), de(() => G(K()), () => {
    F(y, K() ?? ge);
  }), de(
    () => (g(ze), g(v)),
    () => {
      F(x, g(ze).width / g(v));
    }
  ), de(
    () => (g(ze), g(y)),
    () => {
      F(b, g(ze).height / g(y));
    }
  ), de(
    () => (g(x), g(b)),
    () => {
      F(C, Math.max(g(x), g(b)));
    }
  ), de(() => (g(C), g(v)), () => {
    F(h, g(C) * g(v));
  }), de(
    () => (g(C), g(y)),
    () => {
      F($, g(C) * g(y));
    }
  ), de(() => g(C), () => {
    F(w, 5 * g(C));
  }), de(
    () => (g(ze), g(h), g(w)),
    () => {
      F(k, g(ze).x - (g(h) - g(ze).width) / 2 - g(w));
    }
  ), de(
    () => (g(ze), g($), g(w)),
    () => {
      F(S, g(ze).y - (g($) - g(ze).height) / 2 - g(w));
    }
  ), de(() => (g(h), g(w)), () => {
    F(M, g(h) + g(w) * 2);
  }), de(() => (g($), g(w)), () => {
    F(V, g($) + g(w) * 2);
  }), vt(), Pe();
  const it = /* @__PURE__ */ pe(() => ae() + (_() ? `;--xy-minimap-background-color-props:${_()}` : "")), Q = /* @__PURE__ */ pe(() => St(["svelte-flow__minimap", be()]));
  Ho(e, {
    get position() {
      return z();
    },
    get style() {
      return g(it);
    },
    get class() {
      return g(Q);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ve, Qt) => {
      var en = et(), fn = we(en);
      {
        var Ee = (tt) => {
          var Le = Pm();
          me(Le, "aria-labelledby", Ke);
          let He;
          var nt = W(Le);
          {
            var tn = (yt) => {
              var Mt = zm();
              me(Mt, "id", Ke);
              var mr = W(Mt, !0);
              X(Mt), Me(() => Bt(mr, O())), D(yt, Mt);
            };
            $e(nt, (yt) => {
              O() && yt(tn);
            });
          }
          var Wt = Z(nt);
          Ot(Wt, 1, u, (yt) => yt.id, (yt, Mt) => {
            var mr = et();
            const rt = /* @__PURE__ */ pe(() => l().get(g(Mt).id));
            var Ji = we(mr);
            {
              var qr = (Tt) => {
                const Ao = /* @__PURE__ */ pe(() => Qn(g(rt))), Io = /* @__PURE__ */ pe(() => Ue == null ? void 0 : Ue(g(rt))), Zo = /* @__PURE__ */ pe(() => se(g(rt))), Qi = /* @__PURE__ */ pe(() => le(g(rt)));
                dd(Tt, ct(
                  {
                    get x() {
                      return g(rt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(rt).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Ao),
                  {
                    get selected() {
                      return g(rt).selected;
                    },
                    get color() {
                      return g(Io);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return g(Zo);
                    },
                    get strokeWidth() {
                      return P();
                    },
                    shapeRendering: ke,
                    get class() {
                      return g(Qi);
                    }
                  }
                ));
              };
              $e(Ji, (Tt) => {
                g(rt) && vc(g(rt)) && Tt(qr);
              });
            }
            D(yt, mr);
          });
          var Kr = Z(Wt);
          X(Le), ht(Le, (yt, Mt) => Tl == null ? void 0 : Tl(yt, Mt), () => ({
            panZoom: c(),
            viewport: he,
            getViewScale: st,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: U(),
            zoomStep: Y(),
            pannable: j(),
            zoomable: ne()
          })), Me(() => {
            me(Le, "width", g(v)), me(Le, "height", g(y)), me(Le, "viewBox", `${g(k) ?? ""} ${g(S) ?? ""} ${g(M) ?? ""} ${g(V) ?? ""}`), He = ft(Le, "", He, {
              "--xy-minimap-mask-background-color-props": N(),
              "--xy-minimap-mask-stroke-color-props": H(),
              "--xy-minimap-mask-stroke-width-props": L() ? L() * g(C) : void 0
            }), me(Kr, "d", `M${g(k) - g(w)},${g(S) - g(w)}h${g(M) + g(w) * 2}v${g(V) + g(w) * 2}h${-g(M) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), D(tt, Le);
        };
        $e(fn, (tt) => {
          c() && tt(Ee);
        });
      }
      D(ve, en);
    },
    $$slots: { default: !0 }
  });
  var Te = ce({
    get position() {
      return z();
    },
    set position(ve) {
      z(ve), p();
    },
    get ariaLabel() {
      return O();
    },
    set ariaLabel(ve) {
      O(ve), p();
    },
    get nodeStrokeColor() {
      return T();
    },
    set nodeStrokeColor(ve) {
      T(ve), p();
    },
    get nodeColor() {
      return A();
    },
    set nodeColor(ve) {
      A(ve), p();
    },
    get nodeClass() {
      return I();
    },
    set nodeClass(ve) {
      I(ve), p();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(ve) {
      E(ve), p();
    },
    get nodeStrokeWidth() {
      return P();
    },
    set nodeStrokeWidth(ve) {
      P(ve), p();
    },
    get bgColor() {
      return _();
    },
    set bgColor(ve) {
      _(ve), p();
    },
    get maskColor() {
      return N();
    },
    set maskColor(ve) {
      N(ve), p();
    },
    get maskStrokeColor() {
      return H();
    },
    set maskStrokeColor(ve) {
      H(ve), p();
    },
    get maskStrokeWidth() {
      return L();
    },
    set maskStrokeWidth(ve) {
      L(ve), p();
    },
    get width() {
      return B();
    },
    set width(ve) {
      B(ve), p();
    },
    get height() {
      return K();
    },
    set height(ve) {
      K(ve), p();
    },
    get pannable() {
      return j();
    },
    set pannable(ve) {
      j(ve), p();
    },
    get zoomable() {
      return ne();
    },
    set zoomable(ve) {
      ne(ve), p();
    },
    get inversePan() {
      return U();
    },
    set inversePan(ve) {
      U(ve), p();
    },
    get zoomStep() {
      return Y();
    },
    set zoomStep(ve) {
      Y(ve), p();
    },
    get style() {
      return ae();
    },
    set style(ve) {
      ae(ve), p();
    },
    get class() {
      return be();
    },
    set class(ve) {
      be(ve), p();
    }
  });
  return r(), Te;
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
const Ll = (e) => Pp(e);
function Dt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: y, nodeOrigin: x, edgeLookup: b, connectionLookup: C } = Ge(), h = (k) => {
    var S, M;
    const V = q(y), z = Ll(k) ? k : V.get(k.id), O = z.parentId ? Tp(z.position, z.measured, z.parentId, V, q(x)) : z.position, T = {
      ...z,
      position: O,
      width: ((S = z.measured) == null ? void 0 : S.width) ?? z.width,
      height: ((M = z.measured) == null ? void 0 : M.height) ?? z.height
    };
    return Tr(T);
  }, $ = (k, S, M = { replace: !1 }) => {
    var V;
    const z = (V = q(y).get(k)) == null ? void 0 : V.internals.userNode;
    if (!z)
      return;
    const O = typeof S == "function" ? S(z) : S;
    M.replace ? d.update((T) => T.map((A) => A.id === k ? Ll(O) ? O : { ...A, ...O } : A)) : (Object.assign(z, O), d.update((T) => T));
  }, w = (k) => q(y).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var S;
      return (S = w(k)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(d) : Al(q(y), k),
    getEdge: (k) => q(b).get(k),
    getEdges: (k) => k === void 0 ? q(f) : Al(q(b), k),
    setZoom: (k, S) => {
      const M = q(c);
      return M ? M.scaleTo(k, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (k, S) => {
      const M = q(i), V = q(c);
      return V ? (await V.setViewport({
        x: k.x ?? M.x,
        y: k.y ?? M.y,
        zoom: k.zoom ?? M.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (k, S, M) => {
      const V = typeof (M == null ? void 0 : M.zoom) < "u" ? M.zoom : q(u), z = q(c);
      return z ? (await z.setViewport({
        x: q(a) / 2 - k * V,
        y: q(s) / 2 - S * V,
        zoom: V
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, S) => {
      const M = q(c);
      if (!M)
        return Promise.resolve(!1);
      const V = hs(k, q(a), q(s), q(l), q(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await M.setViewport(V, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, S = !0, M) => {
      const V = wl(k), z = V ? k : h(k);
      return z ? (M || q(d)).filter((O) => {
        const T = q(y).get(O.id);
        if (!T || !V && O.id === k.id)
          return !1;
        const A = Tr(T), I = xo(A, z);
        return S && I > 0 || I >= z.width * z.height;
      }) : [];
    },
    isNodeIntersecting: (k, S, M = !0) => {
      const V = wl(k) ? k : h(k);
      if (!V)
        return !1;
      const z = xo(V, S);
      return M && z > 0 || z >= V.width * V.height;
    },
    deleteElements: async ({ nodes: k = [], edges: S = [] }) => {
      const { nodes: M, edges: V } = await lc({
        nodesToRemove: k,
        edgesToRemove: S,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return M && d.update((z) => z.filter((O) => !M.some(({ id: T }) => T === O.id))), V && f.update((z) => z.filter((O) => !V.some(({ id: T }) => T === O.id))), {
        deletedNodes: M,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (k, S = { snapToGrid: !0 }) => {
      const M = q(v);
      if (!M)
        return k;
      const V = S.snapToGrid ? q(o) : !1, { x: z, y: O, zoom: T } = q(i), { x: A, y: I } = M.getBoundingClientRect(), E = {
        x: k.x - A,
        y: k.y - I
      };
      return zo(E, [z, O, T], V !== null, V || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const S = q(v);
      if (!S)
        return k;
      const { x: M, y: V, zoom: z } = q(i), { x: O, y: T } = S.getBoundingClientRect(), A = fc(k, [M, V, z]);
      return {
        x: A.x + O,
        y: A.y + T
      };
    },
    toObject: () => ({
      nodes: q(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: q(f).map((k) => ({ ...k })),
      viewport: { ...q(i) }
    }),
    updateNode: $,
    updateNodeData: (k, S, M) => {
      var V;
      const z = (V = q(y).get(k)) == null ? void 0 : V.internals.userNode;
      if (!z)
        return;
      const O = typeof S == "function" ? S(z) : S;
      z.data = M != null && M.replace ? O : { ...z.data, ...O }, d.update((T) => T);
    },
    getNodesBounds: (k) => {
      const S = q(y), M = q(x);
      return Hp(k, { nodeLookup: S, nodeOrigin: M });
    },
    getHandleConnections: ({ type: k, id: S, nodeId: M }) => {
      var V;
      return Array.from(((V = q(C).get(`${M}-${k}-${S ?? null}`)) == null ? void 0 : V.values()) ?? []);
    },
    viewport: i
  };
}
function Al(e, t) {
  var n;
  const r = [];
  for (const o of t) {
    const i = e.get(o);
    if (i) {
      const a = "internals" in i ? (n = i.internals) == null ? void 0 : n.userNode : i;
      r.push(a);
    }
  }
  return r;
}
var Hm = /* @__PURE__ */ oe('<div class="svelte-flow__node-toolbar"><!></div>');
function vd(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => J($, "$nodes", n), i = () => J(h, "$nodeLookup", n), a = () => J(C, "$viewport", n), s = () => J(b, "$domNode", n), l = /* @__PURE__ */ te(), u = /* @__PURE__ */ te(), c = /* @__PURE__ */ te();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), y = m(t, "offset", 12, void 0), x = m(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: C, nodeLookup: h, nodes: $ } = Ge(), { getNodesBounds: w } = Dt(), k = ir("svelteflow__node_id");
  let S = /* @__PURE__ */ te(), M = /* @__PURE__ */ te([]), V = y() !== void 0 ? y() : 10, z = f() !== void 0 ? f() : _e.Top, O = v() !== void 0 ? v() : "center";
  de(
    () => (o(), G(d()), i()),
    () => {
      o();
      const P = Array.isArray(d()) ? d() : [d() || k];
      F(M, P.reduce(
        (_, N) => {
          const H = i().get(N);
          return H && _.push(H), _;
        },
        []
      ));
    }
  ), de(
    () => (g(M), a()),
    () => {
      const P = w(g(M));
      P && F(S, Up(P, a(), z, V, O));
    }
  ), de(() => g(M), () => {
    F(l, g(M).length === 0 ? 1 : Math.max(...g(M).map((P) => (P.internals.z || 5) + 1)));
  }), de(() => o(), () => {
    F(u, o().filter((P) => P.selected).length);
  }), de(
    () => (G(x()), g(M), g(u)),
    () => {
      F(c, typeof x() == "boolean" ? x() : g(M).length === 1 && g(M)[0].selected && g(u) === 1);
    }
  ), vt(), Pe();
  var T = et(), A = we(T);
  {
    var I = (P) => {
      var _ = Hm();
      let N;
      var H = W(_);
      pt(H, t, "default", {}), X(_), ht(_, (L, B) => Ci == null ? void 0 : Ci(L, B), () => ({ domNode: s() })), Me(
        (L) => {
          me(_, "data-id", L), N = ft(_, "", N, {
            position: "absolute",
            transform: g(S),
            "z-index": g(l)
          });
        },
        [
          () => g(M).reduce((L, B) => `${L}${B.id} `, "").trim()
        ],
        pe
      ), D(P, _);
    };
    $e(A, (P) => {
      s() && g(c) && g(M) && P(I);
    });
  }
  D(e, T);
  var E = ce({
    get nodeId() {
      return d();
    },
    set nodeId(P) {
      d(P), p();
    },
    get position() {
      return f();
    },
    set position(P) {
      f(P), p();
    },
    get align() {
      return v();
    },
    set align(P) {
      v(P), p();
    },
    get offset() {
      return y();
    },
    set offset(P) {
      y(P), p();
    },
    get isVisible() {
      return x();
    },
    set isVisible(P) {
      x(P), p();
    }
  });
  return r(), E;
}
ie(
  vd,
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
function hr(e) {
  const { nodes: t, nodeLookup: n } = Ge();
  let r = [], o = !0;
  return Kn([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!i0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const Il = "tinyflow-component";
class Om {
  constructor(t) {
    if (Nt(this, "options"), Nt(this, "rootEl"), Nt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Il);
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
    const n = document.createElement(Il);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Dm = () => {
  const e = ye([]), t = ye([]), n = ye({ x: 250, y: 100, zoom: 1 });
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
      e.update((i) => i.map((a) => a.id === r ? o : a));
    },
    updateNodeData: (r, o) => {
      e.update(
        (i) => i.map((a) => a.id === r ? { ...a, data: { ...a.data, ...o } } : a)
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
      t.update((i) => i.map((a) => a.id === r ? o : a));
    },
    updateEdgeData: (r, o) => {
      t.update((i) => i.map((a) => a.id === r ? { ...a, data: o } : a));
    }
  };
}, ti = Dm();
var Tm = /* @__PURE__ */ oe("<button><!></button>");
function Fe(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Tm();
  let i;
  var a = W(o);
  return ar(a, () => n() ?? dt), X(o), Me(() => i = sn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), D(e, o), ce({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ie(Fe, { children: {} }, [], [], !0);
var Lm = /* @__PURE__ */ oe("<input>");
function gd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ mt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Lm();
  oo(r);
  let o;
  Me(() => o = sn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ce();
}
ie(gd, {}, [], [], !0);
var Am = /* @__PURE__ */ oe("<input>");
function bt(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ mt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Am();
  oo(r);
  let o;
  Me(() => o = sn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), ce();
}
ie(bt, {}, [], [], !0);
var Im = /* @__PURE__ */ oe("<textarea></textarea>");
function _t(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ mt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Im();
  Sv(r);
  let o;
  Me(() => o = sn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), D(e, r), ce();
}
ie(_t, {}, [], [], !0);
var Zm = /* @__PURE__ */ oe('<div role="button"><!></div>'), Bm = /* @__PURE__ */ oe("<div></div>");
function hd(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), a = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    a(d), (f = i()) == null || f(c, d);
  }
  Pe();
  var l = Bm();
  let u;
  return Ot(l, 5, o, vo, (c, d, f) => {
    var v = Zm();
    me(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(g(d), f));
    };
    var y = W(v);
    {
      var x = (C) => {
        var h = Ie();
        Me(() => Bt(h, g(d).label)), D(C, h);
      }, b = (C) => {
        var h = et(), $ = we(h);
        ar($, () => g(d).label ?? dt), D(C, h);
      };
      $e(y, (C) => {
        typeof g(d).label == "string" ? C(x) : C(b, !1);
      });
    }
    X(v), Me(() => kt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), D(c, v);
  }), X(l), Me(() => u = sn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), D(e, l), ce({
    get items() {
      return o();
    },
    set items(c) {
      o(c), p();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), p();
    },
    get activeIndex() {
      return a();
    },
    set activeIndex(c) {
      a(c), p();
    }
  });
}
Li(["click", "keydown"]);
ie(hd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Rm = (e, t, n) => t(g(n)), Xm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Ym = /* @__PURE__ */ oe('<span class="tf-collapse-item-title-icon"><!></span>'), Wm = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), Km = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), qm = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), jm = /* @__PURE__ */ oe("<div></div>");
const Fm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function pd(e, t) {
  ue(t, !0), Qe(e, Fm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => jt([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = jm();
  return Ot(a, 21, n, vo, (s, l, u) => {
    var c = qm(), d = W(c);
    me(d, "tabindex", u), d.__click = [Rm, i, l], d.__keydown = [Xm, i, l];
    var f = W(d);
    {
      var v = (w) => {
        var k = Ym(), S = W(k);
        Yn(S, {
          get target() {
            return g(l).icon;
          }
        }), X(k), D(w, k);
      };
      $e(f, (w) => {
        g(l).icon && w(v);
      });
    }
    var y = Z(f, 2);
    Yn(y, {
      get target() {
        return g(l).title;
      }
    });
    var x = Z(y, 2);
    X(d);
    var b = Z(d, 2);
    {
      var C = (w) => {
        var k = Wm(), S = W(k);
        Yn(S, {
          get target() {
            return g(l).description;
          }
        }), X(k), D(w, k);
      };
      $e(b, (w) => {
        g(l).description && w(C);
      });
    }
    var h = Z(b, 2);
    {
      var $ = (w) => {
        var k = Km(), S = W(k);
        Yn(S, {
          get target() {
            return g(l).content;
          }
        }), X(k), D(w, k);
      };
      $e(h, (w) => {
        o().includes(g(l).key) && w($);
      });
    }
    X(c), Me((w) => kt(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), D(s, c);
  }), X(a), Me(() => {
    ft(a, t.style), kt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, a), ce({
    get items() {
      return n();
    },
    set items(s) {
      n(s), p();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), p();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), p();
    }
  });
}
Li(["click", "keydown"]);
ie(pd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Yn(e, t) {
  ue(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = we(r);
  {
    var i = (s) => {
      var l = et(), u = we(l);
      ar(u, () => n() ?? dt), D(s, l);
    }, a = (s) => {
      var l = et(), u = we(l);
      rs(u, n), D(s, l);
    };
    $e(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return D(e, r), ce({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
ie(Yn, { target: {} }, [], [], !0);
var Gm = (e, t, n) => t(g(n)), Um = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Jm = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), Qm = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), e2 = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), t2 = /* @__PURE__ */ oe("<!> <!>", 1), n2 = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), r2 = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), o2 = /* @__PURE__ */ oe("<div><!></div>");
function bn(e, t) {
  ue(t, !0);
  const n = ($, w = dt) => {
    var k = et(), S = we(k);
    Ot(S, 19, w, (M, V) => `${V}_${M.value}`, (M, V) => {
      var z = Qm(), O = we(z);
      O.__click = [Gm, x, V];
      var T = W(O), A = W(T);
      {
        var I = (N) => {
          var H = Um();
          D(N, H);
        };
        $e(A, (N) => {
          g(V).children && g(V).children.length > 0 && N(I);
        });
      }
      X(T);
      var E = Z(T, 2);
      Yn(E, {
        get target() {
          return g(V).label;
        }
      }), X(O);
      var P = Z(O, 2);
      {
        var _ = (N) => {
          var H = Jm(), L = W(H);
          n(L, () => g(V).children), X(H), D(N, H);
        };
        $e(P, (N) => {
          g(V).children && g(V).children.length > 0 && (l() || c().includes(g(V).value)) && N(_);
        });
      }
      D(M, z);
    }), D($, k);
  };
  let r = m(t, "items", 7), o = m(t, "onExpand", 7), i = m(t, "onSelect", 7), a = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), l = m(t, "expandAll", 7, !0), u = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ mt(t, [
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
  ]), v = Ne(() => {
    const $ = [], w = (k) => {
      for (let S of k)
        a().length > 0 ? a().includes(S.value) && $.push(S) : s().includes(S.value) && $.push(S), S.children && S.children.length > 0 && w(S.children);
    };
    return w(r()), $;
  }), y;
  function x($) {
    var w, k;
    if ($.children && $.children.length > 0) {
      (w = o()) == null || w($);
      return;
    } else
      y == null || y.hide(), (k = i()) == null || k($);
  }
  var b = o2();
  let C;
  var h = W(b);
  return xn(
    Lo(h, {
      floating: ($) => {
        var w = e2(), k = W(w);
        n(k, r), X(w), D($, w);
      },
      children: ($, w) => {
        var k = r2();
        let S;
        var M = W(k);
        Ot(
          M,
          23,
          () => g(v),
          (V, z) => `${z}_${V.value}`,
          (V, z, O) => {
            var T = et(), A = we(T);
            {
              var I = (P) => {
                var _ = et(), N = we(_);
                {
                  var H = (L) => {
                    Yn(L, {
                      get target() {
                        return g(z).label;
                      }
                    });
                  };
                  $e(N, (L) => {
                    g(O) === 0 && L(H);
                  });
                }
                D(P, _);
              }, E = (P) => {
                var _ = t2(), N = we(_);
                Yn(N, {
                  get target() {
                    return g(z).label;
                  }
                });
                var H = Z(N, 2);
                {
                  var L = (B) => {
                    var K = Ie(",");
                    D(B, K);
                  };
                  $e(H, (B) => {
                    g(O) < g(v).length - 1 && B(L);
                  });
                }
                D(P, _);
              };
              $e(A, (P) => {
                u() ? P(E, !1) : P(I);
              });
            }
            D(V, T);
          },
          (V) => {
            var z = n2(), O = W(z, !0);
            X(z), Me(() => Bt(O, d())), D(V, z);
          }
        ), X(M), Ve(2), X(k), Me(() => S = sn(k, S, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), D($, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => y = $,
    () => y
  ), X(b), Me(() => C = sn(b, C, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), D(e, b), ce({
    get items() {
      return r();
    },
    set items($) {
      r($), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand($) {
      o($), p();
    },
    get onSelect() {
      return i();
    },
    set onSelect($) {
      i($), p();
    },
    get value() {
      return a();
    },
    set value($ = []) {
      a($), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue($ = []) {
      s($), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll($ = !0) {
      l($), p();
    },
    get multiple() {
      return u();
    },
    set multiple($ = !1) {
      u($), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue($ = []) {
      c($), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), p();
    }
  });
}
Li(["click"]);
ie(
  bn,
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
const $o = Math.min, Sr = Math.max, Si = Math.round, hn = (e) => ({
  x: e,
  y: e
}), i2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, a2 = {
  start: "end",
  end: "start"
};
function Ta(e, t, n) {
  return Sr(e, $o(t, n));
}
function Oo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cr(e) {
  return e.split("-")[0];
}
function Do(e) {
  return e.split("-")[1];
}
function md(e) {
  return e === "x" ? "y" : "x";
}
function bs(e) {
  return e === "y" ? "height" : "width";
}
function Ar(e) {
  return ["top", "bottom"].includes(cr(e)) ? "y" : "x";
}
function $s(e) {
  return md(Ar(e));
}
function s2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = $s(e), i = bs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Mi(a)), [a, Mi(a)];
}
function l2(e) {
  const t = Mi(e);
  return [La(e), t, La(t)];
}
function La(e) {
  return e.replace(/start|end/g, (t) => a2[t]);
}
function u2(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function c2(e, t, n, r) {
  const o = Do(e);
  let i = u2(cr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(La)))), i;
}
function Mi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => i2[t]);
}
function d2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function yd(e) {
  return typeof e != "number" ? d2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ei(e) {
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
function Zl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ar(t), a = $s(t), s = bs(a), l = cr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (Do(t)) {
    case "start":
      v[a] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[a] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const f2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = Zl(u, r, l), f = r, v = {}, y = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: b,
      fn: C
    } = s[x], {
      x: h,
      y: $,
      data: w,
      reset: k
    } = await C({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = $ ?? d, v = {
      ...v,
      [b]: {
        ...v[b],
        ...w
      }
    }, k && y <= 50 && (y++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = Zl(u, f, l)), x = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function wd(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = Oo(t, e), y = yd(v), x = s[f ? d === "floating" ? "reference" : "floating" : d], b = Ei(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ei(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: h,
    strategy: l
  }) : C);
  return {
    top: (b.top - w.top + y.top) / $.y,
    bottom: (w.bottom - b.bottom + y.bottom) / $.y,
    left: (b.left - w.left + y.left) / $.x,
    right: (w.right - b.right + y.right) / $.x
  };
}
const v2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = Oo(e, t) || {};
    if (u == null)
      return {};
    const d = yd(c), f = {
      x: n,
      y: r
    }, v = $s(o), y = bs(v), x = await a.getDimensions(u), b = v === "y", C = b ? "top" : "left", h = b ? "bottom" : "right", $ = b ? "clientHeight" : "clientWidth", w = i.reference[y] + i.reference[v] - f[v] - i.floating[y], k = f[v] - i.reference[v], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let M = S ? S[$] : 0;
    (!M || !await (a.isElement == null ? void 0 : a.isElement(S))) && (M = s.floating[$] || i.floating[y]);
    const V = w / 2 - k / 2, z = M / 2 - x[y] / 2 - 1, O = $o(d[C], z), T = $o(d[h], z), A = O, I = M - x[y] - T, E = M / 2 - x[y] / 2 + V, P = Ta(A, E, I), _ = !l.arrow && Do(o) != null && E !== P && i.reference[y] / 2 - (E < A ? O : T) - x[y] / 2 < 0, N = _ ? E < A ? E - A : E - I : 0;
    return {
      [v]: f[v] + N,
      data: {
        [v]: P,
        centerOffset: E - P - N,
        ..._ && {
          alignmentOffset: N
        }
      },
      reset: _
    };
  }
}), g2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: x = !0,
        ...b
      } = Oo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = cr(o), h = Ar(s), $ = cr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || ($ || !x ? [Mi(s)] : l2(s)), S = y !== "none";
      !f && S && k.push(...c2(s, x, y, w));
      const M = [s, ...k], V = await wd(t, b), z = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(V[C]), d) {
        const E = s2(o, a, w);
        z.push(V[E[0]], V[E[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: z
      }], !z.every((E) => E <= 0)) {
        var T, A;
        const E = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, P = M[E];
        if (P)
          return {
            data: {
              index: E,
              overflows: O
            },
            reset: {
              placement: P
            }
          };
        let _ = (A = O.filter((N) => N.overflows[0] <= 0).sort((N, H) => N.overflows[1] - H.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!_)
          switch (v) {
            case "bestFit": {
              var I;
              const N = (I = O.filter((H) => {
                if (S) {
                  const L = Ar(H.placement);
                  return L === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((L) => L > 0).reduce((L, B) => L + B, 0)]).sort((H, L) => H[1] - L[1])[0]) == null ? void 0 : I[0];
              N && (_ = N);
              break;
            }
            case "initialPlacement":
              _ = s;
              break;
          }
        if (o !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
async function h2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = cr(n), s = Do(n), l = Ar(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Oo(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof y == "number" && (v = s === "end" ? y * -1 : y), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const p2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, l = await h2(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, m2 = function(e) {
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
        crossAxis: a = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: C,
              y: h
            } = b;
            return {
              x: C,
              y: h
            };
          }
        },
        ...l
      } = Oo(e, t), u = {
        x: n,
        y: r
      }, c = await wd(t, l), d = Ar(cr(o)), f = md(d);
      let v = u[f], y = u[d];
      if (i) {
        const b = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", h = v + c[b], $ = v - c[C];
        v = Ta(h, v, $);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", h = y + c[b], $ = y - c[C];
        y = Ta(h, y, $);
      }
      const x = s.fn({
        ...t,
        [f]: v,
        [d]: y
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [f]: i,
            [d]: a
          }
        }
      };
    }
  };
};
function ji() {
  return typeof window < "u";
}
function Wr(e) {
  return xd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Rt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (xd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function xd(e) {
  return ji() ? e instanceof Node || e instanceof Rt(e).Node : !1;
}
function ln(e) {
  return ji() ? e instanceof Element || e instanceof Rt(e).Element : !1;
}
function $n(e) {
  return ji() ? e instanceof HTMLElement || e instanceof Rt(e).HTMLElement : !1;
}
function Bl(e) {
  return !ji() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Rt(e).ShadowRoot;
}
function To(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = un(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function y2(e) {
  return ["table", "td", "th"].includes(Wr(e));
}
function Fi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Cs(e) {
  const t = ks(), n = ln(e) ? un(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function w2(e) {
  let t = Jn(e);
  for (; $n(t) && !Ir(t); ) {
    if (Cs(t))
      return t;
    if (Fi(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function ks() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ir(e) {
  return ["html", "body", "#document"].includes(Wr(e));
}
function un(e) {
  return Rt(e).getComputedStyle(e);
}
function Gi(e) {
  return ln(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jn(e) {
  if (Wr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Bl(e) && e.host || // Fallback.
    An(e)
  );
  return Bl(t) ? t.host : t;
}
function bd(e) {
  const t = Jn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $n(t) && To(t) ? t : bd(t);
}
function $d(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = bd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Rt(o);
  return i ? (Aa(a), t.concat(a, a.visualViewport || [], To(o) ? o : [], [])) : t.concat(o, $d(o, []));
}
function Aa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cd(e) {
  const t = un(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $n(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Si(n) !== i || Si(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function kd(e) {
  return ln(e) ? e : e.contextElement;
}
function Mr(e) {
  const t = kd(e);
  if (!$n(t))
    return hn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Cd(t);
  let a = (i ? Si(n.width) : n.width) / r, s = (i ? Si(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const x2 = /* @__PURE__ */ hn(0);
function _d(e) {
  const t = Rt(e);
  return !ks() || !t.visualViewport ? x2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function b2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Rt(e) ? !1 : t;
}
function Co(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = kd(e);
  let a = hn(1);
  t && (r ? ln(r) && (a = Mr(r)) : a = Mr(e));
  const s = b2(i, n, r) ? _d(i) : hn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Rt(i), v = r && ln(r) ? Rt(r) : r;
    let y = f, x = Aa(y);
    for (; x && r && v !== y; ) {
      const b = Mr(x), C = x.getBoundingClientRect(), h = un(x), $ = C.left + (x.clientLeft + parseFloat(h.paddingLeft)) * b.x, w = C.top + (x.clientTop + parseFloat(h.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += $, u += w, y = Rt(x), x = Aa(y);
    }
  }
  return Ei({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function _s(e, t) {
  const n = Gi(e).scrollLeft;
  return t ? t.left + n : Co(An(e)).left + n;
}
function Sd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    _s(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function $2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = An(r), s = t ? Fi(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = hn(1);
  const c = hn(0), d = $n(r);
  if ((d || !d && !i) && ((Wr(r) !== "body" || To(a)) && (l = Gi(r)), $n(r))) {
    const v = Co(r);
    u = Mr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Sd(a, l, !0) : hn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function C2(e) {
  return Array.from(e.getClientRects());
}
function k2(e) {
  const t = An(e), n = Gi(e), r = e.ownerDocument.body, o = Sr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Sr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + _s(e);
  const s = -n.scrollTop;
  return un(r).direction === "rtl" && (a += Sr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function _2(e, t) {
  const n = Rt(e), r = An(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = ks();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function S2(e, t) {
  const n = Co(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = $n(e) ? Mr(e) : hn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Rl(e, t, n) {
  let r;
  if (t === "viewport")
    r = _2(e, n);
  else if (t === "document")
    r = k2(An(e));
  else if (ln(t))
    r = S2(t, n);
  else {
    const o = _d(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ei(r);
}
function Md(e, t) {
  const n = Jn(e);
  return n === t || !ln(n) || Ir(n) ? !1 : un(n).position === "fixed" || Md(n, t);
}
function M2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = $d(e, []).filter((s) => ln(s) && Wr(s) !== "body"), o = null;
  const i = un(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; ln(a) && !Ir(a); ) {
    const s = un(a), l = Cs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || To(a) && !l && Md(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
  }
  return t.set(e, r), r;
}
function E2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Fi(t) ? [] : M2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Rl(t, u, o);
    return l.top = Sr(c.top, l.top), l.right = $o(c.right, l.right), l.bottom = $o(c.bottom, l.bottom), l.left = Sr(c.left, l.left), l;
  }, Rl(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function V2(e) {
  const {
    width: t,
    height: n
  } = Cd(e);
  return {
    width: t,
    height: n
  };
}
function N2(e, t, n) {
  const r = $n(t), o = An(t), i = n === "fixed", a = Co(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = hn(0);
  if (r || !r && !i)
    if ((Wr(t) !== "body" || To(o)) && (s = Gi(t)), r) {
      const f = Co(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = _s(o));
  const u = o && !r && !i ? Sd(o, s) : hn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function va(e) {
  return un(e).position === "static";
}
function Xl(e, t) {
  if (!$n(e) || un(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function Ed(e, t) {
  const n = Rt(e);
  if (Fi(e))
    return n;
  if (!$n(e)) {
    let o = Jn(e);
    for (; o && !Ir(o); ) {
      if (ln(o) && !va(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = Xl(e, t);
  for (; r && y2(r) && va(r); )
    r = Xl(r, t);
  return r && Ir(r) && va(r) && !Cs(r) ? n : r || w2(e) || n;
}
const z2 = async function(e) {
  const t = this.getOffsetParent || Ed, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: N2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function P2(e) {
  return un(e).direction === "rtl";
}
const H2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $2,
  getDocumentElement: An,
  getClippingRect: E2,
  getOffsetParent: Ed,
  getElementRects: z2,
  getClientRects: C2,
  getDimensions: V2,
  getScale: Mr,
  isElement: ln,
  isRTL: P2
}, O2 = p2, D2 = m2, T2 = g2, L2 = v2, A2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: H2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return f2(e, t, {
    ...o,
    platform: i
  });
}, I2 = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: a,
  interactive: s,
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
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    A2(e, u, {
      placement: r,
      middleware: [
        O2(o),
        // 手动偏移配置
        T2(i),
        //自动翻转
        D2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [L2({ element: c })] : []
      ]
    }).then(({ x: C, y: h, placement: $, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: S } = w.arrow, M = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: S != null ? `${S}px` : "",
          right: "",
          bottom: "",
          [M]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function y() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function x(C) {
    C.stopPropagation(), f ? y() : v();
  }
  function b(C) {
    u.contains(C.target) || y();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((C) => {
    e.addEventListener(C, x);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach((C) => {
        e.removeEventListener(C, x);
      }), document.removeEventListener("click", b);
    },
    hide() {
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var Z2 = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Lo(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, a, s;
  Yt(() => (s = I2({
    trigger: i,
    floatContent: a,
    interactive: !0,
    placement: o()
  }), () => {
    s.destroy();
  }));
  function l() {
    s.hide();
  }
  var u = Z2(), c = W(u), d = W(c);
  ar(d, n), X(c), xn(c, (y) => i = y, () => i);
  var f = Z(c, 2), v = W(f);
  return ar(v, r), X(f), xn(f, (y) => a = y, () => a), X(u), D(e, u), ce({
    hide: l,
    get children() {
      return n();
    },
    set children(y) {
      n(y), p();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), p();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), p();
    }
  });
}
ie(Lo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Je(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var a = et(), s = we(a);
  return Dv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Me(() => c = sn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = et(), f = we(d);
    ar(f, () => n() ?? dt), D(u, d);
  }), D(e, a), ce({
    get children() {
      return n();
    },
    set children(l) {
      n(l), p();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), p();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), p();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), p();
    }
  });
}
ie(Je, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var B2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const R2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ui(e, t) {
  ue(t, !0), Qe(e, R2);
  const n = /* @__PURE__ */ mt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Fe(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = B2();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
ie(Ui, {}, [], [], !0);
const X2 = () => {
  const e = Ge();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, Zr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Y2 = () => {
  const { nodes: e, nodeLookup: t } = Ge();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = q(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = Zr(), a = {
          ...o,
          id: i,
          position: {
            x: o.position.x + 50,
            y: o.position.y + 50
          }
        };
        e.update((s) => [...s, a]), e.update(
          (s) => s.map(
            (l) => l.id === i ? { ...l, selected: !0 } : { ...l, selected: !1 }
          )
        );
      }
    }
  };
};
var W2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), K2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), q2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), j2 = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), F2 = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const G2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function dn(e, t) {
  ue(t, !0), Qe(e, G2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), a = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: y } = Dt(), x = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: b } = X2(), { copyNode: C } = Y2();
  var h = F2(), $ = we(h);
  {
    var w = (I) => {
      vd(I, {
        get position() {
          return _e.Top;
        },
        align: "end",
        children: (E, P) => {
          var _ = j2(), N = W(_);
          {
            var H = (ne) => {
              Fe(ne, {
                class: "tf-node-toolbar-item",
                children: (U, Y) => {
                  var ae = W2();
                  D(U, ae);
                },
                $$slots: { default: !0 }
              });
            };
            $e(N, (ne) => {
              s() && ne(H);
            });
          }
          var L = Z(N, 2);
          {
            var B = (ne) => {
              Fe(ne, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (U, Y) => {
                  var ae = K2();
                  D(U, ae);
                },
                $$slots: { default: !0 }
              });
            };
            $e(L, (ne) => {
              l() && ne(B);
            });
          }
          var K = Z(L, 2);
          {
            var j = (ne) => {
              Fe(ne, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (U, Y) => {
                  var ae = q2();
                  D(U, ae);
                },
                $$slots: { default: !0 }
              });
            };
            $e(K, (ne) => {
              u() && ne(j);
            });
          }
          X(_), D(E, _);
        },
        $$slots: { default: !0 }
      });
    };
    $e($, (I) => {
      (s() || l() || u()) && I(w);
    });
  }
  var k = Z($, 2), S = Z(W(k), 2), M = W(S);
  pd(M, {
    items: x,
    activeKeys: v,
    onChange: (I, E) => {
      var P;
      y(r(), { expand: E == null ? void 0 : E.includes("key") }), (P = f()) == null || P(E != null && E.includes("key") ? "key" : "");
    }
  }), X(S), X(k);
  var V = Z(k, 2);
  {
    var z = (I) => {
      Un(I, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    $e(V, (I) => {
      d() && I(z);
    });
  }
  var O = Z(V, 2);
  {
    var T = (I) => {
      Un(I, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    $e(O, (I) => {
      c() && I(T);
    });
  }
  var A = Z(O, 2);
  return ar(A, () => i() ?? dt), D(e, h), ce({
    get data() {
      return n();
    },
    set data(I) {
      n(I), p();
    },
    get id() {
      return r();
    },
    set id(I = "") {
      r(I), p();
    },
    get icon() {
      return o();
    },
    set icon(I) {
      o(I), p();
    },
    get handle() {
      return i();
    },
    set handle(I) {
      i(I), p();
    },
    get children() {
      return a();
    },
    set children(I) {
      a(I), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(I = !0) {
      s(I), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(I = !0) {
      l(I), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(I = !0) {
      u(I), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(I = !0) {
      c(I), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(I = !0) {
      d(I), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse(I) {
      f(I), p();
    }
  });
}
ie(
  dn,
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
    showTargetHandle: {},
    onCollapse: {}
  },
  [],
  [],
  !0
);
function gt() {
  return ir("svelteflow__node_id");
}
const Vd = [
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
], U2 = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var J2 = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Q2 = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ey = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ty = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Nd(e, t) {
  ue(t, !0), Qe(e, ty);
  const [n, r] = ot(), o = () => J(g(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = gt(), l = Ne(() => hr(s)), u = Ne(() => {
    var V, z;
    return {
      ...i(),
      ...(z = (V = o()) == null ? void 0 : V.data) == null ? void 0 : z.parameters[a()]
    };
  });
  const { updateNodeData: c } = Dt(), d = (V) => {
    const z = V.target.value;
    c(s, (O) => {
      let T = O.data.parameters;
      return T[a()].name = z, { parameters: T };
    });
  }, f = (V) => {
    const z = V.target.checked;
    c(s, (O) => {
      let T = O.data.parameters;
      return T[a()].required = z, { parameters: T };
    });
  }, v = (V) => {
    const z = V.value;
    z && c(s, (O) => {
      let T = O.data.parameters;
      return T[a()].dataType = z, { parameters: T };
    });
  };
  let y;
  const x = () => {
    c(s, (V) => {
      let z = V.data.parameters;
      return z.splice(a(), 1), { parameters: [...z] };
    }), y == null || y.hide();
  };
  var b = ey(), C = we(b), h = W(C);
  bt(h, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), X(C);
  var $ = Z(C, 2), w = W($);
  gd(w, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), X($);
  var k = Z($, 2), S = W(k);
  xn(
    Lo(S, {
      placement: "bottom",
      floating: (V) => {
        var z = J2(), O = W(z), T = Z(W(O));
        const A = Ne(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        bn(T, {
          items: Vd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(A);
          }
        }), X(O);
        var I = Z(O, 2), E = Z(W(I));
        _t(E, { rows: 1, style: "width: 100%;" }), X(I);
        var P = Z(I, 2), _ = Z(W(P));
        _t(_, { rows: 3, style: "width: 100%;" }), X(P);
        var N = Z(P, 2), H = W(N);
        Fe(H, {
          onclick: x,
          children: (L, B) => {
            Ve();
            var K = Ie("删除");
            D(L, K);
          },
          $$slots: { default: !0 }
        }), X(N), X(z), D(V, z);
      },
      children: (V, z) => {
        Fe(V, {
          class: "input-btn-more",
          children: (O, T) => {
            var A = Q2();
            D(O, A);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => y = V,
    () => y
  ), X(k), D(e, b);
  var M = ce({
    get parameter() {
      return i();
    },
    set parameter(V) {
      i(V), p();
    },
    get index() {
      return a();
    },
    set index(V) {
      a(V), p();
    }
  });
  return r(), M;
}
ie(Nd, { parameter: {}, index: {} }, [], [], !0);
var ny = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ry = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), oy = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const iy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function zd(e, t) {
  ue(t, !0), Qe(e, iy);
  const [n, r] = ot(), o = () => J(g(a), "$node", n);
  let i = gt(), a = Ne(() => hr(i)), s = Ne(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = oy(), u = W(l);
  {
    var c = (f) => {
      var v = ny();
      Ve(4), D(f, v);
    };
    $e(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = Z(u, 2);
  Ot(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, y) => {
      Nd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(y);
        }
      });
    },
    (f) => {
      var v = ry();
      D(f, v);
    }
  ), X(l), D(e, l), ce(), r();
}
ie(zd, {}, [], [], !0);
const Pd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), Pd(t.children);
  });
}, Sn = () => {
  const { updateNodeData: e } = Dt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Pd(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Zr()
      };
      e(t, (i) => {
        let a = i.data[n];
        return a ? a.push(o) : a = [o], {
          [n]: [...a]
        };
      });
    }
  };
};
var ay = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), sy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ly = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const uy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Hd(e, t) {
  ue(t, !0), Qe(e, uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn();
  return dn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var s = ay();
      D(a, s);
    },
    children: (a, s) => {
      var l = ly(), u = we(l), c = W(u);
      Je(c, {
        level: 3,
        children: (v, y) => {
          Ve();
          var x = Ie("输入参数");
          D(v, x);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      Fe(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, y) => {
          var x = sy();
          D(v, x);
        },
        $$slots: { default: !0 }
      }), X(u);
      var f = Z(u, 2);
      zd(f, {}), D(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ie(Hd, { data: {} }, [], [], !0);
const Od = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Od(e, r.source, n));
}, Yl = (e, t) => {
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
        const r = (o, i) => !o || o.length === 0 ? [] : o.map((a) => ({
          label: a.name + (t ? ` (Array<${a.dataType || "String"}>)` : ` (${a.dataType || "String"})`),
          // label: param.name ,
          value: i + "." + a.name,
          children: r(a.children, i + "." + a.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, cy = (e = !1) => {
  const t = gt(), n = hr(t), { nodes: r, edges: o } = Ge();
  return Kn([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = Yl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Od(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = Yl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var dy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), fy = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const vy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Dd(e, t) {
  ue(t, !0), Qe(e, vy);
  const [n, r] = ot(), o = () => J(g(c), "$node", n), i = () => J(w, "$selectItems", n);
  Yt(() => {
    g(d).refType || C({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = gt(), c = Ne(() => hr(u)), d = Ne(() => {
    var P;
    return {
      ...a(),
      ...(P = o()) == null ? void 0 : P.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Dt(), v = (P, _) => {
    f(u, (N) => {
      let H = N.data[l()];
      return H[s()] = { ...H[s()], [P]: _ }, { [l()]: H };
    });
  }, y = (P) => {
    const _ = P.target.value;
    v("name", _);
  }, x = (P) => {
    const _ = P.target.value;
    v("value", _);
  }, b = (P) => {
    const _ = P.value;
    v("ref", _);
  }, C = (P) => {
    const _ = P.value;
    v("refType", _);
  };
  let h;
  const $ = () => {
    f(u, (P) => {
      let _ = P.data[l()];
      return _.splice(s(), 1), { [l()]: [..._] };
    }), h == null || h.hide();
  }, w = cy();
  var k = fy(), S = we(k), M = W(S);
  bt(M, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: y
  }), X(S);
  var V = Z(S, 2), z = W(V);
  {
    var O = (P) => {
      bt(P, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: x
      });
    }, T = (P) => {
      const _ = Ne(() => [g(d).ref]);
      bn(P, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return g(_);
        },
        expandAll: !0,
        onSelect: b
      });
    };
    $e(z, (P) => {
      g(d).refType === "input" ? P(O) : P(T, !1);
    });
  }
  X(V);
  var A = Z(V, 2), I = W(A);
  xn(
    Lo(I, {
      placement: "bottom",
      floating: (P) => {
        var _ = dy(), N = W(_), H = Z(W(N));
        const L = Ne(() => g(d).refType ? [g(d).refType] : []);
        bn(H, {
          items: U2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(L);
          },
          onSelect: C
        }), X(N);
        var B = Z(N, 2), K = Z(W(B));
        _t(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            const be = ae.target.value;
            v("defaultValue", be);
          }
        }), X(B);
        var j = Z(B, 2), ne = Z(W(j));
        _t(ne, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            const be = ae.target.value;
            v("description", be);
          }
        }), X(j);
        var U = Z(j, 2), Y = W(U);
        Fe(Y, {
          onclick: $,
          children: (ae, be) => {
            Ve();
            var Ce = Ie("删除");
            D(ae, Ce);
          },
          $$slots: { default: !0 }
        }), X(U), X(_), D(P, _);
      },
      children: (P, _) => {
        Ui(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => h = P,
    () => h
  ), X(A), D(e, k);
  var E = ce({
    get parameter() {
      return a();
    },
    set parameter(P) {
      a(P), p();
    },
    get index() {
      return s();
    },
    set index(P) {
      s(P), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(P) {
      l(P), p();
    }
  });
  return r(), E;
}
ie(Dd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var gy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), hy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), py = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const my = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  ue(t, !0), Qe(e, my);
  const [n, r] = ot(), o = () => J(g(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = gt(), l = Ne(() => hr(s)), u = Ne(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var c = py(), d = W(c);
  {
    var f = (x) => {
      var b = gy();
      Ve(4), D(x, b);
    };
    $e(d, (x) => {
      g(u).length !== 0 && x(f);
    });
  }
  var v = Z(d, 2);
  Ot(
    v,
    19,
    () => g(u),
    (x) => x.id,
    (x, b, C) => {
      Dd(x, {
        get parameter() {
          return g(b);
        },
        get index() {
          return g(C);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (x) => {
      var b = hy(), C = W(b, !0);
      X(b), Me(() => Bt(C, i())), D(x, b);
    }
  ), X(c), D(e, c);
  var y = ce({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输入参数") {
      i(x), p();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(x = "parameters") {
      a(x), p();
    }
  });
  return r(), y;
}
ie(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var yy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), wy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xy = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const by = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Td(e, t) {
  ue(t, !0), Qe(e, by);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn();
  return dn(e, ct(
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
        var s = yy();
        D(a, s);
      },
      children: (a, s) => {
        var l = xy(), u = we(l), c = W(u);
        Je(c, {
          level: 3,
          children: (v, y) => {
            Ve();
            var x = Ie("输出参数");
            D(v, x);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        Fe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, y) => {
            var x = wy();
            D(v, x);
          },
          $$slots: { default: !0 }
        }), X(u);
        var f = Z(u, 2);
        Zt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), D(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
ie(Td, { data: {} }, [], [], !0);
const pr = () => ir("tinyflow_options");
var $y = /* @__PURE__ */ xe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Cy = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), ky = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), _y = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Sy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ld(e, t) {
  ue(t, !0), Qe(e, Sy);
  const [n, r] = ot(), o = () => J(g(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = gt(), u = Ne(() => hr(l)), c = Ne(() => {
    var N;
    let H = (N = o()) == null ? void 0 : N.data[s()], L;
    if (H && a().length > 0) {
      let B = H;
      for (let K = 0; K < a().length; K++) {
        const j = a()[K];
        K == a().length - 1 ? L = B[j] : B = B[j].children;
      }
    }
    return { ...i(), ...L };
  });
  const { updateNodeData: d } = Dt(), f = (N, H) => {
    d(l, (L) => {
      const B = L.data[s()];
      if (B && a().length > 0) {
        let K = B;
        for (let j = 0; j < a().length; j++) {
          const ne = a()[j];
          j == a().length - 1 ? K[ne] = { ...K[ne], [N]: H } : K = B[ne].children;
        }
      }
      return { [s()]: B };
    });
  }, v = (N) => {
    const H = N.target.value;
    f("name", H);
  }, y = (N) => {
    const H = N.value;
    f("dataType", H);
  };
  let x;
  const b = () => {
    d(l, (N) => {
      let H = N.data[s()];
      if (H && a().length > 0) {
        let L = H;
        for (let B = 0; B < a().length; B++) {
          const K = a()[B];
          B == a().length - 1 ? L.splice(K, 1) : L = L[K].children;
        }
      }
      return { [s()]: [...H] };
    }), x == null || x.hide();
  }, C = () => {
    d(l, (N) => {
      let H = N.data[s()];
      if (H && a().length > 0) {
        let L = H;
        for (let B = 0; B < a().length; B++) {
          const K = a()[B];
          B == a().length - 1 ? L[K].children ? L[K].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : L[K].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : L = L[K].children;
        }
      }
      return { [s()]: [...H] };
    });
  };
  var h = _y(), $ = we(h), w = W($);
  {
    var k = (N) => {
      var H = et(), L = we(H);
      Ot(L, 17, a, vo, (B, K) => {
        Ve();
        var j = Ie(" ");
        D(B, j);
      }), D(N, H);
    };
    $e(w, (N) => {
      a().length > 1 && N(k);
    });
  }
  var S = Z(w, 2);
  const M = Ne(() => g(c).nameDisabled === !0);
  bt(S, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(M);
    }
  }), X($);
  var V = Z($, 2), z = W(V);
  const O = Ne(() => g(c).dataType ? [g(c).dataType] : []), T = Ne(() => g(c).dataTypeDisabled === !0);
  bn(z, {
    items: Vd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(O);
    },
    get disabled() {
      return g(T);
    },
    onSelect: y
  });
  var A = Z(z, 2);
  {
    var I = (N) => {
      Fe(N, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (H, L) => {
          var B = $y();
          D(H, B);
        },
        $$slots: { default: !0 }
      });
    };
    $e(A, (N) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && N(I);
    });
  }
  X(V);
  var E = Z(V, 2), P = W(E);
  xn(
    Lo(P, {
      placement: "bottom",
      floating: (N) => {
        var H = ky(), L = W(H), B = Z(W(L));
        _t(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Y) => {
            const ae = Y.target.value;
            f("defaultValue", ae);
          }
        }), X(L);
        var K = Z(L, 2), j = Z(W(K));
        _t(j, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Y) => {
            const ae = Y.target.value;
            f("description", ae);
          }
        }), X(K);
        var ne = Z(K, 2);
        {
          var U = (Y) => {
            var ae = Cy(), be = W(ae);
            Fe(be, {
              onclick: b,
              children: (Ce, ge) => {
                Ve();
                var fe = Ie("删除");
                D(Ce, fe);
              },
              $$slots: { default: !0 }
            }), X(ae), D(Y, ae);
          };
          $e(ne, (Y) => {
            g(c).deleteDisabled !== !0 && Y(U);
          });
        }
        X(H), D(N, H);
      },
      children: (N, H) => {
        Ui(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => x = N,
    () => x
  ), X(E), D(e, h);
  var _ = ce({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), p();
    },
    get position() {
      return a();
    },
    set position(N) {
      a(N), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(N) {
      s(N), p();
    }
  });
  return r(), _;
}
ie(Ld, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var My = /* @__PURE__ */ oe("<!> <!>", 1), Ey = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), Vy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ny = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const zy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  ue(t, !0), Qe(e, zy);
  const [n, r] = ot(), o = () => J(g(u), "$node", n), i = (b, C = dt, h = dt) => {
    var $ = et(), w = we($);
    Ot(
      w,
      19,
      C,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, S, M) => {
        var V = My(), z = we(V);
        const O = Ne(() => [...h(), g(M)]);
        Ld(z, {
          get parameter() {
            return g(S);
          },
          get position() {
            return g(O);
          },
          get dataKeyName() {
            return s();
          }
        });
        var T = Z(z, 2);
        {
          var A = (I) => {
            var E = /* @__PURE__ */ pe(() => [...h(), g(M)]);
            i(I, () => g(S).children, () => g(E));
          };
          $e(T, (I) => {
            g(S).children && I(A);
          });
        }
        D(k, V);
      },
      (k) => {
        var S = et(), M = we(S);
        {
          var V = (z) => {
            var O = Ey(), T = W(O, !0);
            X(O), Me(() => Bt(T, a())), D(z, O);
          };
          $e(M, (z) => {
            h().length === 0 && z(V);
          });
        }
        D(k, S);
      }
    ), D(b, $);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = gt(), u = Ne(() => hr(l)), c = Ne(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = Ny(), f = W(d);
  {
    var v = (b) => {
      var C = Vy();
      Ve(4), D(b, C);
    };
    $e(f, (b) => {
      g(c).length !== 0 && b(v);
    });
  }
  var y = Z(f, 2);
  i(y, () => g(c) || [], () => []), X(d), D(e, d);
  var x = ce({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(b = "无输出参数") {
      a(b), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(b = "outputDefs") {
      s(b), p();
    }
  });
  return r(), x;
}
ie(In, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Py = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Hy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ oe('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const Ty = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ad(e, t) {
  ue(t, !0), Qe(e, Ty);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn(), a = pr();
  let s = wt(jt([]));
  Yt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  return dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Py();
        D(u, c);
      },
      children: (u, c) => {
        var d = Dy(), f = we(d), v = W(f);
        Je(v, {
          level: 3,
          children: (fe, re) => {
            Ve();
            var he = Ie("输入参数");
            D(fe, he);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (fe, re) => {
            var he = Hy();
            D(fe, he);
          },
          $$slots: { default: !0 }
        }), X(f);
        var x = Z(f, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (fe, re) => {
            Ve();
            var he = Ie("模型设置");
            D(fe, he);
          },
          $$slots: { default: !0 }
        });
        var C = Z(b, 4), h = W(C);
        const $ = Ne(() => n().llmId ? [n().llmId] : []);
        bn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (fe) => {
            const re = fe.value;
            l(o, () => ({ llmId: re }));
          },
          get value() {
            return g($);
          }
        });
        var w = Z(h, 2);
        Ui(w, {}), X(C);
        var k = Z(C, 4), S = W(k), M = W(S), V = W(M);
        X(M);
        var z = Z(M, 2);
        oo(z), X(S), X(k);
        var O = Z(k, 2), T = W(O), A = W(T), I = W(A);
        X(A);
        var E = Z(A, 2);
        oo(E), X(T), X(O);
        var P = Z(O, 2), _ = W(P), N = W(_), H = W(N);
        X(N);
        var L = Z(N, 2);
        oo(L), X(_), X(P);
        var B = Z(P, 4), K = W(B);
        const j = Ne(() => n().systemPrompt || "");
        _t(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(j);
          },
          oninput: (fe) => {
            l(o, { systemPrompt: fe.target.value });
          }
        }), X(B);
        var ne = Z(B, 4), U = W(ne);
        const Y = Ne(() => n().userPrompt || "");
        _t(U, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(Y);
          },
          oninput: (fe) => {
            l(o, { userPrompt: fe.target.value });
          }
        }), X(ne);
        var ae = Z(ne, 2), be = W(ae);
        Je(be, {
          level: 3,
          mt: "10px",
          children: (fe, re) => {
            Ve();
            var he = Ie("输出参数");
            D(fe, he);
          },
          $$slots: { default: !0 }
        });
        var Ce = Z(be, 2);
        Fe(Ce, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (fe, re) => {
            var he = Oy();
            D(fe, he);
          },
          $$slots: { default: !0 }
        }), X(ae);
        var ge = Z(ae, 2);
        In(ge, {}), Me(() => {
          Bt(V, `Temperature: ${n().temperature ?? 0.5}`), na(z, n().temperature ?? 0.5), Bt(I, `Top P: ${n().topP ?? 0.9}`), na(E, n().topP ?? 0.9), Bt(H, `Top K: ${n().topK ?? 50}`), na(L, n().topK ?? 50);
        }), Re("mousedown", z, ra(function(fe) {
          Oe.call(this, t, fe);
        })), Re("input", z, (fe) => l(o, { temperature: parseFloat(fe.target.value) })), Re("mousedown", E, ra(function(fe) {
          Oe.call(this, t, fe);
        })), Re("input", E, (fe) => l(o, { topP: parseFloat(fe.target.value) })), Re("mousedown", L, ra(function(fe) {
          Oe.call(this, t, fe);
        })), Re("input", L, (fe) => l(o, { topK: parseInt(fe.target.value) })), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Ad, { data: {} }, [], [], !0);
var Ly = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ay = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const By = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Id(e, t) {
  ue(t, !0), Qe(e, By);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Yt(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = gt(), { addParameter: i } = Sn(), { updateNodeData: a } = Dt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ly();
        D(l, u);
      },
      children: (l, u) => {
        var c = Zy(), d = we(c), f = W(d);
        Je(f, {
          level: 3,
          children: (O, T) => {
            Ve();
            var A = Ie("输入参数");
            D(O, A);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        Fe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, T) => {
            var A = Ay();
            D(O, A);
          },
          $$slots: { default: !0 }
        }), X(d);
        var y = Z(d, 2);
        Zt(y, {});
        var x = Z(y, 2);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (O, T) => {
            Ve();
            var A = Ie("代码");
            D(O, A);
          },
          $$slots: { default: !0 }
        });
        var b = Z(x, 4), C = W(b);
        const h = Ne(() => n().engine ? [n().engine] : ["qlexpress"]);
        bn(C, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (O) => {
            const T = O.value;
            a(o, () => ({ engine: T }));
          },
          get value() {
            return g(h);
          }
        }), X(b);
        var $ = Z(b, 4), w = W($);
        const k = Ne(() => n().code || "");
        _t(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (O) => {
            a(o, () => ({ code: O.target.value }));
          },
          get value() {
            return g(k);
          }
        }), X($);
        var S = Z($, 2), M = W(S);
        Je(M, {
          level: 3,
          mt: "10px",
          children: (O, T) => {
            Ve();
            var A = Ie("输出参数");
            D(O, A);
          },
          $$slots: { default: !0 }
        });
        var V = Z(M, 2);
        Fe(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (O, T) => {
            var A = Iy();
            D(O, A);
          },
          $$slots: { default: !0 }
        }), X(S);
        var z = Z(S, 2);
        In(z, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Id, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Xy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ue(t, !0), Qe(e, Wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn(), { updateNodeData: a } = Dt();
  return Gn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Ry();
        D(s, l);
      },
      children: (s, l) => {
        var u = Yy(), c = we(u), d = W(c);
        Je(d, {
          level: 3,
          children: (k, S) => {
            Ve();
            var M = Ie("输入参数");
            D(k, M);
          },
          $$slots: { default: !0 }
        });
        var f = Z(d, 2);
        Fe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, S) => {
            var M = Xy();
            D(k, M);
          },
          $$slots: { default: !0 }
        }), X(c);
        var v = Z(c, 2);
        Zt(v, {});
        var y = Z(v, 2);
        Je(y, {
          level: 3,
          mt: "10px",
          children: (k, S) => {
            Ve();
            var M = Ie("代码");
            D(k, M);
          },
          $$slots: { default: !0 }
        });
        var x = Z(y, 4), b = W(x);
        const C = Ne(() => n().template || "");
        _t(b, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return g(C);
          }
        }), X(x);
        var h = Z(x, 2), $ = W(h);
        Je($, {
          level: 3,
          mt: "10px",
          children: (k, S) => {
            Ve();
            var M = Ie("输出参数");
            D(k, M);
          },
          $$slots: { default: !0 }
        }), X(h);
        var w = Z(h, 2);
        In(w, {}), D(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
ie(Zd, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), qy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Uy = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Qy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), ew = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), tw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const rw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Bd(e, t) {
  ue(t, !0), Qe(e, rw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Yt(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = gt(), { addParameter: a } = Sn(), { updateNodeData: s } = Dt();
  return dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ky();
        D(l, u);
      },
      children: (l, u) => {
        var c = nw(), d = we(c), f = W(d), v = W(f);
        const y = Ne(() => n().method ? [n().method] : ["get"]);
        bn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (se) => {
            const le = se.value;
            s(i, () => ({ method: le }));
          },
          get value() {
            return g(y);
          }
        }), X(f);
        var x = Z(f, 2), b = W(x);
        const C = Ne(() => n().url || "");
        bt(b, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (se) => {
            s(i, () => ({ url: se.target.value }));
          },
          get value() {
            return g(C);
          }
        }), X(x), X(d);
        var h = Z(d, 2), $ = W(h);
        Je($, {
          level: 3,
          children: (se, le) => {
            Ve();
            var ke = Ie("Http 头信息");
            D(se, ke);
          },
          $$slots: { default: !0 }
        });
        var w = Z($, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (se, le) => {
            var ke = qy();
            D(se, ke);
          },
          $$slots: { default: !0 }
        }), X(h);
        var k = Z(h, 2);
        Zt(k, { dataKeyName: "headers" });
        var S = Z(k, 2), M = W(S);
        Je(M, {
          level: 3,
          children: (se, le) => {
            Ve();
            var ke = Ie("参数");
            D(se, ke);
          },
          $$slots: { default: !0 }
        });
        var V = Z(M, 2);
        Fe(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (se, le) => {
            var ke = jy();
            D(se, ke);
          },
          $$slots: { default: !0 }
        }), X(S);
        var z = Z(S, 2);
        Zt(z, { dataKeyName: "urlParameters" });
        var O = Z(z, 2);
        Je(O, {
          level: 3,
          mt: "10px",
          children: (se, le) => {
            Ve();
            var ke = Ie("Body");
            D(se, ke);
          },
          $$slots: { default: !0 }
        });
        var T = Z(O, 2), A = W(T), I = W(A);
        const E = Ne(() => !n().bodyType);
        bt(I, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(E);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "" });
          }
        }), Ve(), X(A);
        var P = Z(A, 2), _ = W(P);
        const N = Ne(() => n().bodyType === "form-data");
        bt(_, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(N);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "form-data" });
          }
        }), Ve(), X(P);
        var H = Z(P, 2), L = W(H);
        const B = Ne(() => n().bodyType === "x-www-form-urlencoded");
        bt(L, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(B);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ve(), X(H);
        var K = Z(H, 2), j = W(K);
        const ne = Ne(() => n().bodyType === "json");
        bt(j, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(ne);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "json" });
          }
        }), Ve(), X(K);
        var U = Z(K, 2), Y = W(U);
        const ae = Ne(() => n().bodyType === "raw");
        bt(Y, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ae);
          },
          onchange: (se) => {
            var le;
            (le = se.target) != null && le.checked && s(i, { bodyType: "raw" });
          }
        }), Ve(), X(U), X(T);
        var be = Z(T, 2);
        {
          var Ce = (se) => {
            var le = Gy(), ke = we(le), Ke = W(ke);
            Je(Ke, {
              level: 3,
              children: (it, Q) => {
                Ve();
                var Te = Ie("参数");
                D(it, Te);
              },
              $$slots: { default: !0 }
            });
            var ze = Z(Ke, 2);
            Fe(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (it, Q) => {
                var Te = Fy();
                D(it, Te);
              },
              $$slots: { default: !0 }
            }), X(ke);
            var st = Z(ke, 2);
            Zt(st, { dataKeyName: "fromData" }), D(se, le);
          };
          $e(be, (se) => {
            n().bodyType === "form-data" && se(Ce);
          });
        }
        var ge = Z(be, 2);
        {
          var fe = (se) => {
            var le = Jy(), ke = we(le), Ke = W(ke);
            Je(Ke, {
              level: 3,
              children: (it, Q) => {
                Ve();
                var Te = Ie("参数");
                D(it, Te);
              },
              $$slots: { default: !0 }
            });
            var ze = Z(Ke, 2);
            Fe(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (it, Q) => {
                var Te = Uy();
                D(it, Te);
              },
              $$slots: { default: !0 }
            }), X(ke);
            var st = Z(ke, 2);
            Zt(st, { dataKeyName: "fromUrlencoded" }), D(se, le);
          };
          $e(ge, (se) => {
            n().bodyType === "x-www-form-urlencoded" && se(fe);
          });
        }
        var re = Z(ge, 2);
        {
          var he = (se) => {
            var le = Qy(), ke = W(le);
            _t(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ke) => {
                s(i, { bodyJson: Ke.target.value });
              }
            }), X(le), D(se, le);
          };
          $e(re, (se) => {
            n().bodyType === "json" && se(he);
          });
        }
        var Ye = Z(re, 2);
        {
          var Ze = (se) => {
            var le = ew(), ke = W(le);
            _t(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ke) => {
                s(i, { bodyRaw: Ke.target.value });
              }
            }), X(le), D(se, le);
          };
          $e(Ye, (se) => {
            n().bodyType === "raw" && se(Ze);
          });
        }
        var Be = Z(Ye, 2), ee = W(Be);
        Je(ee, {
          level: 3,
          mt: "10px",
          children: (se, le) => {
            Ve();
            var ke = Ie("输出参数");
            D(se, ke);
          },
          $$slots: { default: !0 }
        });
        var We = Z(ee, 2);
        Fe(We, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (se, le) => {
            var ke = tw();
            D(se, ke);
          },
          $$slots: { default: !0 }
        }), X(Be);
        var Ue = Z(Be, 2);
        In(Ue, {}), D(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Bd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), iw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Rd(e, t) {
  ue(t, !0), Qe(e, sw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn(), a = pr();
  let s = wt(jt([]));
  Yt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  return Gn(() => {
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
  }), dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = ow();
        D(u, c);
      },
      children: (u, c) => {
        var d = aw(), f = we(d), v = W(f);
        Je(v, {
          level: 3,
          children: (z, O) => {
            Ve();
            var T = Ie("输入参数");
            D(z, T);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, O) => {
            var T = iw();
            D(z, T);
          },
          $$slots: { default: !0 }
        }), X(f);
        var x = Z(f, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (z, O) => {
            Ve();
            var T = Ie("知识库设置");
            D(z, T);
          },
          $$slots: { default: !0 }
        });
        var C = Z(b, 4), h = W(C);
        const $ = Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        bn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (z) => {
            const O = z.value;
            l(o, () => ({ knowledgeId: O }));
          },
          get value() {
            return g($);
          }
        }), X(C);
        var w = Z(C, 4), k = W(w);
        bt(k, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(w);
        var S = Z(w, 2), M = W(S);
        Je(M, {
          level: 3,
          mt: "10px",
          children: (z, O) => {
            Ve();
            var T = Ie("输出参数");
            D(z, T);
          },
          $$slots: { default: !0 }
        }), X(S);
        var V = Z(S, 2);
        In(V, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Rd, { data: {} }, [], [], !0);
var lw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), uw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ue(t, !0), Qe(e, dw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn(), a = pr();
  let s = wt(jt([]));
  Yt(async () => {
    var u;
    const c = await ((u = a.provider) == null ? void 0 : u.knowledge());
    g(s).push(...c || []);
  });
  const { updateNodeData: l } = Dt();
  return Gn(() => {
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
  }), dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = lw();
        D(u, c);
      },
      children: (u, c) => {
        var d = cw(), f = we(d), v = W(f);
        Je(v, {
          level: 3,
          children: (P, _) => {
            Ve();
            var N = Ie("输入参数");
            D(P, N);
          },
          $$slots: { default: !0 }
        });
        var y = Z(v, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, _) => {
            var N = uw();
            D(P, N);
          },
          $$slots: { default: !0 }
        }), X(f);
        var x = Z(f, 2);
        Zt(x, {});
        var b = Z(x, 2);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (P, _) => {
            Ve();
            var N = Ie("搜索引擎设置");
            D(P, N);
          },
          $$slots: { default: !0 }
        });
        var C = Z(b, 4), h = W(C);
        const $ = Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        bn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (P) => {
            const _ = P.value;
            l(o, () => ({ knowledgeId: _ }));
          },
          get value() {
            return g($);
          }
        }), X(C);
        var w = Z(C, 4), k = W(w);
        bt(k, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), X(w);
        var S = Z(w, 4), M = W(S);
        bt(M, { placeholder: "请输入关键字", style: "width: 100%" }), X(S);
        var V = Z(S, 4), z = W(V);
        bt(z, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(V);
        var O = Z(V, 4), T = W(O);
        _t(T, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), X(O);
        var A = Z(O, 2), I = W(A);
        Je(I, {
          level: 3,
          mt: "10px",
          children: (P, _) => {
            Ve();
            var N = Ie("输出参数");
            D(P, N);
          },
          $$slots: { default: !0 }
        }), X(A);
        var E = Z(A, 2);
        In(E, {}), D(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
ie(Xd, { data: {} }, [], [], !0);
var fw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), vw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ oe('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const hw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Yd(e, t) {
  ue(t, !0), Qe(e, hw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = gt(), { addParameter: i } = Sn(), a = pr();
  let s = wt(jt([]));
  return Yt(async () => {
    var l;
    const u = await ((l = a.provider) == null ? void 0 : l.knowledge());
    g(s).push(...u || []);
  }), dn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = fw();
        D(l, u);
      },
      handle: (l) => {
        Un(l, {
          type: "source",
          get position() {
            return _e.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = gw(), d = we(c), f = W(d);
        Je(f, {
          level: 3,
          children: (h, $) => {
            Ve();
            var w = Ie("循环变量");
            D(h, w);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        Fe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (h, $) => {
            var w = vw();
            D(h, w);
          },
          $$slots: { default: !0 }
        }), X(d);
        var y = Z(d, 2);
        Zt(y, {});
        var x = Z(y, 2), b = W(x);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (h, $) => {
            Ve();
            var w = Ie("输出参数");
            D(h, w);
          },
          $$slots: { default: !0 }
        }), X(x);
        var C = Z(x, 2);
        In(C, {}), D(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
ie(Yd, { data: {} }, [], [], !0);
const pw = {
  startNode: Hd,
  codeNode: Id,
  llmNode: Ad,
  templateNode: Zd,
  httpNode: Bd,
  knowledgeNode: Rd,
  searchEngineNode: Xd,
  loopNode: Yd,
  endNode: Td
};
var mw = /* @__PURE__ */ oe("<!> ", 1);
function Ia(e, t) {
  ue(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), a = m(t, "extra", 7);
  return Fe(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          systemPrompt: "",
          userPrompt: "",
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = mw(), c = we(u);
      rs(c, n);
      var d = Z(c);
      Me(() => Bt(d, ` ${r() ?? ""}`)), D(s, u);
    },
    $$slots: { default: !0 }
  }), ce({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), p();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), p();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), p();
    },
    get description() {
      return i();
    },
    set description(s) {
      i(s), p();
    },
    get extra() {
      return a();
    },
    set extra(s) {
      a(s), p();
    }
  });
}
ie(
  Ia,
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
var yw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), ww = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), xw = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Wd(e, t) {
  ue(t, !0);
  let n = wt("base"), r = wt("show");
  const o = [
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
  ], i = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ], a = [], s = pr().customNodes;
  if (s) {
    const b = Object.keys(s).sort((C, h) => (s[C].sortNo || 0) - (s[h].sortNo || 0));
    for (let C of b)
      a.push({
        icon: s[C].icon,
        title: s[C].title,
        type: C
      });
  }
  var l = xw(), u = W(l), c = W(u), d = W(c);
  hd(d, {
    style: "width: 100%",
    items: i,
    onChange: (b) => {
      F(n, b.value.toString(), !0);
    }
  }), X(c);
  var f = Z(c, 2), v = W(f);
  Ot(v, 21, () => o, vo, (b, C) => {
    Ia(b, ct(() => g(C)));
  }), X(v);
  var y = Z(v, 2);
  Ot(y, 21, () => a, vo, (b, C) => {
    Ia(b, ct(() => g(C)));
  }), X(y), X(f), X(u);
  var x = Z(u, 2);
  Fe(x, {
    onclick: () => {
      F(r, g(r) ? "" : "show", !0);
    },
    children: (b, C) => {
      var h = et(), $ = we(h);
      {
        var w = (S) => {
          var M = yw();
          D(S, M);
        }, k = (S) => {
          var M = ww();
          D(S, M);
        };
        $e($, (S) => {
          g(r) === "show" ? S(w) : S(k, !1);
        });
      }
      D(b, h);
    },
    $$slots: { default: !0 }
  }), X(l), Me(() => {
    kt(l, 1, `tf-toolbar ${g(r) ?? ""}`), ft(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), ft(y, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), D(e, l), ce();
}
ie(Wd, {}, [], [], !0);
const bw = () => {
  const { nodeLookup: e } = Ge();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, $w = () => {
  const { nodes: e } = Ge();
  return {
    ensureParentInNodesBefore: (t, n) => {
      e.update((r) => {
        let o = -1;
        for (let s = 0; s < r.length; s++)
          if (r[s].id === t) {
            o = s;
            break;
          }
        if (o <= 0)
          return r;
        let i = -1;
        for (let s = 0; s < o; s++)
          if (r[s].parentId === t || r[s].id === n) {
            i = s;
            break;
          }
        if (i == -1)
          return r;
        const a = r[o];
        for (let s = o; s > i; s--)
          r[s] = r[s - 1];
        return r[i] = a, r;
      });
    }
  };
}, Cw = () => {
  const { edges: e } = Ge();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var kw = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ xe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ oe('<div class="heading svelte-c71dg3"><!> <!></div> <!> <div></div> <div class="heading svelte-c71dg3"><!> <!></div> <!>', 1);
const Mw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function Kd(e, t) {
  var n;
  ue(t, !0), Qe(e, Mw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = gt(), { addParameter: a } = Sn(), s = Dt(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = pr().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  Gn(() => {
    r().expand && d && d.append(u);
  }), Gn(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = Ne(() => ({
    ...r(),
    description: c.description
  }));
  return dn(e, ct(
    {
      get data() {
        return g(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var y = et(), x = we(y);
        rs(x, () => c.icon), D(v, y);
      },
      children: (v, y) => {
        var x = Sw(), b = we(x), C = W(b);
        Je(C, {
          level: 3,
          children: (z, O) => {
            Ve();
            var T = Ie("输入参数");
            D(z, T);
          },
          $$slots: { default: !0 }
        });
        var h = Z(C, 2);
        Fe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (z, O) => {
            var T = kw();
            D(z, T);
          },
          $$slots: { default: !0 }
        }), X(b);
        var $ = Z(b, 2);
        Zt($, {});
        var w = Z($, 2);
        xn(w, (z) => d = z, () => d);
        var k = Z(w, 2), S = W(k);
        Je(S, {
          level: 3,
          mt: "10px",
          children: (z, O) => {
            Ve();
            var T = Ie("输出参数");
            D(z, T);
          },
          $$slots: { default: !0 }
        });
        var M = Z(S, 2);
        Fe(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (z, O) => {
            var T = _w();
            D(z, T);
          },
          $$slots: { default: !0 }
        }), X(k);
        var V = Z(k, 2);
        In(V, {}), D(v, x);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return r();
    },
    set data(v) {
      r(v), p();
    }
  });
}
ie(Kd, { data: {} }, [], [], !0);
var Ew = /* @__PURE__ */ oe('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Vw = /* @__PURE__ */ oe("<!> <!> <!> <!>", 1), Nw = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const zw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function qd(e, t) {
  ue(t, !0), Qe(e, zw);
  const n = m(t, "onInit", 7), r = Dt();
  n()(r);
  let o = wt(!1);
  const i = (S) => {
    S.preventDefault(), S.dataTransfer && (S.dataTransfer.dropEffect = "move");
  }, a = (S) => {
    var M;
    S.preventDefault();
    const V = r.screenToFlowPosition({
      x: S.clientX - 250,
      y: S.clientY - 100
    }), z = (M = S.dataTransfer) == null ? void 0 : M.getData("application/tinyflow"), O = z ? JSON.parse(z) : {}, T = {
      id: `node_${Zr()}`,
      position: V,
      data: {},
      ...O
    };
    ti.addNode(T), ti.selectNodeOnly(T.id);
  }, { getNode: s } = bw(), l = (S) => {
    const M = s(S.source), V = s(S.target);
    if (S.sourceHandle === "loop_handle" || M.parentId) {
      const z = r.getEdges();
      for (let O of z)
        if (O.target === S.target) {
          const T = s(O.source);
          if (S.sourceHandle === "loop_handle" && T.parentId !== M.id || M.parentId && T.parentId !== M.parentId)
            return !1;
        }
    }
    return !(!M.parentId && V.parentId && V.parentId !== M.id);
  }, { ensureParentInNodesBefore: u } = $w(), c = (S, M) => {
    if (!M.isValid)
      return;
    const V = M.toNode;
    if (V.parentId)
      return;
    const z = M.fromNode, O = M.fromHandle, T = { position: { ...V.position } };
    if (O.id === "loop_handle" ? T.parentId = z.id : z.parentId && (T.parentId = z.parentId), T.parentId) {
      const A = s(T.parentId);
      T.position = {
        x: V.position.x - A.position.x,
        y: V.position.y - A.position.y
      }, u(T.parentId, V.id), r.updateNode(V.id, T);
    }
  }, { getEdgesByTarget: d } = Cw(), f = (S) => {
    S.edges.forEach((M) => {
      const V = s(M.target);
      if (V.parentId) {
        const z = d(M.target), O = s(V.parentId);
        if (z.length === 0)
          r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + O.position.x,
              y: V.position.y + O.position.y
            }
          });
        else {
          let T = !1;
          for (let A = 0; A < z.length; A++) {
            const I = z[A], E = s(I.source);
            if (E.parentId || E.type === "loopNode") {
              T = !0;
              break;
            }
          }
          T || r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + O.position.x,
              y: V.position.y + O.position.y
            }
          });
        }
      }
    });
  }, v = (S, M) => {
    console.log("onconnectstart: ", S, M);
  }, y = (S) => {
    console.log("onconnect: ", S);
  }, x = {}, b = pr().customNodes;
  if (b)
    for (let S of Object.keys(b))
      x[S] = Kd;
  var C = Nw(), h = W(C);
  Wd(h, {});
  var $ = Z(h, 2);
  const w = Ne(() => ({ ...pw, ...x })), k = Ne(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: wo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return ed($, ct(
    {
      get nodeTypes() {
        return g(w);
      }
    },
    ti,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: v,
      onconnect: y,
      connectionRadius: 50,
      ondelete: f,
      onclick: (S) => {
        const M = S.target;
        M.classList.contains("svelte-flow__edge-interaction") || M.classList.contains("panel-content") || M.closest(".panel-content") || F(o, !1);
      },
      get defaultEdgeOptions() {
        return g(k);
      },
      $$events: {
        drop: a,
        dragover: i,
        edgeclick: () => {
          F(o, !0);
        }
      },
      children: (S, M) => {
        var V = Vw(), z = we(V);
        cd(z, {});
        var O = Z(z, 2);
        sd(O, {});
        var T = Z(O, 2);
        fd(T, {});
        var A = Z(T, 2);
        {
          var I = (E) => {
            Ho(E, {
              children: (P, _) => {
                var N = Ew(), H = Z(W(N), 4), L = W(H);
                _t(L, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (B) => {
                  }
                }), X(H), X(N), D(P, N);
              },
              $$slots: { default: !0 }
            });
          };
          $e(A, (E) => {
            g(o) && E(I);
          });
        }
        D(S, V);
      },
      $$slots: { default: !0 }
    }
  )), X(C), D(e, C), ce({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), p();
    }
  });
}
ie(qd, { onInit: {} }, [], [], !0);
function Pw(e, t) {
  ue(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ti.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), zr("tinyflow_options", n()), td(e, {
    fitView: !0,
    children: (i, a) => {
      qd(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ce({
    get options() {
      return n();
    },
    set options(i) {
      n(i), p();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), p();
    }
  });
}
customElements.define("tinyflow-component", ie(Pw, { options: {}, onInit: {} }, [], [], !1));
const Iw = /* @__PURE__ */ uf({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = cf(null);
    let o = null;
    return df(() => {
      r.value && (o = new Om({
        ...n,
        element: r.value
      }));
    }), ff(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (gf(), vf("div", {
      ref_key: "divRef",
      ref: r,
      class: pf(["tinyflow", a.className]),
      style: hf(a.style)
    }, null, 6));
  }
});
export {
  Iw as Tinyflow
};
//# sourceMappingURL=index.js.map
