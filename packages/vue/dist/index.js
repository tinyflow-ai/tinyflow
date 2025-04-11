import { defineComponent as cf, ref as df, onMounted as ff, onUnmounted as vf, createElementBlock as hf, openBlock as gf, normalizeStyle as pf, normalizeClass as mf } from "vue";
var yf = Object.defineProperty, Wl = (e) => {
  throw TypeError(e);
}, wf = (e, t, n) => t in e ? yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vt = (e, t, n) => wf(e, typeof t != "symbol" ? t + "" : t, n), Za = (e, t, n) => t.has(e) || Wl("Cannot " + n), lt = (e, t, n) => (Za(e, t, "read from private field"), n ? n.call(e) : t.get(e)), br = (e, t, n) => t.has(e) ? Wl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ni = (e, t, n, r) => (Za(e, t, "write to private field"), t.set(e, n), n), bf = (e, t, n) => (Za(e, t, "access private method"), n);
const xf = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add(xf);
let Br = !1, $f = !1;
function Cf() {
  Br = !0;
}
Cf();
const Ba = 1, Ra = 2, Kl = 4, kf = 8, _f = 16, Sf = 1, Ef = 2, ql = 4, Mf = 8, Hf = 16, jl = 1, Pf = 2, Xa = "[", Ya = "[!", Wa = "]", $r = {}, Ht = Symbol(), Vf = "http://www.w3.org/1999/xhtml", zf = "http://www.w3.org/2000/svg", Nf = !1;
function Hi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var ko = Array.isArray, Df = Array.prototype.indexOf, Ka = Array.from, ri = Object.keys, ao = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, Fl = Object.getOwnPropertyDescriptors, Lf = Object.prototype, Tf = Array.prototype, qa = Object.getPrototypeOf, Ls = Object.isExtensible;
function Fr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function Of(e) {
  return e();
}
function so(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const sn = 2, Gl = 4, Pi = 8, ja = 16, On = 32, vr = 64, oi = 128, Bt = 256, ii = 512, _t = 1024, yn = 2048, Qn = 4096, zn = 8192, Vi = 16384, Af = 32768, Rr = 65536, If = 1 << 17, Zf = 1 << 19, Ul = 1 << 20, ha = 1 << 21, Wn = Symbol("$state"), Fa = Symbol("legacy props"), Bf = Symbol("");
function Rf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Kf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function qf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ee = !1;
function It(e) {
  Ee = e;
}
let Le;
function kt(e) {
  if (e === null)
    throw zi(), $r;
  return Le = e;
}
function wn() {
  return kt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _n(Le)
  );
}
function X(e) {
  if (Ee) {
    if (/* @__PURE__ */ _n(Le) !== null)
      throw zi(), $r;
    Le = e;
  }
}
function He(e = 1) {
  if (Ee) {
    for (var t = e, n = Le; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ _n(n);
    Le = n;
  }
}
function ga() {
  for (var e = 0, t = Le; ; ) {
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
      /* @__PURE__ */ _n(t)
    );
    t.remove(), t = r;
  }
}
function Ft(e) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const t = qa(e);
  if (t !== Lf && t !== Tf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ko(e), o = /* @__PURE__ */ xt(0), i = qe, a = (s) => {
    var l = qe;
    bn(i);
    var u = s();
    return bn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ xt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && jf();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ xt(u.value)), n.set(l, c)) : F(
          c,
          a(() => Ft(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && n.set(
            l,
            a(() => /* @__PURE__ */ xt(Ht))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && F(c, d);
          }
          F(u, Ht), Ts(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === Wn)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Vn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ xt(Ft(f ? s[l] : Ht))), n.set(l, d)), d !== void 0) {
          var v = h(d);
          return v === Ht ? void 0 : v;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = h(c));
        } else if (u === void 0) {
          var d = n.get(l), f = d == null ? void 0 : d.v;
          if (d !== void 0 && f !== Ht)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var u;
        if (l === Wn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Ht || Reflect.has(s, l);
        if (c !== void 0 || je !== null && (!d || (u = Vn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ xt(d ? Ft(s[l]) : Ht)), n.set(l, c));
          var f = h(c);
          if (f === Ht)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, f = n.get(l), v = l in s;
        if (r && l === "length")
          for (var w = u; w < /** @type {Source<number>} */
          f.v; w += 1) {
            var b = n.get(w + "");
            b !== void 0 ? F(b, Ht) : w in s && (b = a(() => /* @__PURE__ */ xt(Ht)), n.set(w + "", b));
          }
        f === void 0 ? (!v || (d = Vn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ xt(void 0)), F(
          f,
          a(() => Ft(u))
        ), n.set(l, f)) : (v = f.v !== Ht, F(
          f,
          a(() => Ft(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var k = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= k.v && F(k, g + 1);
          }
          Ts(o);
        }
        return !0;
      },
      ownKeys(s) {
        h(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Ht;
        });
        for (var [u, c] of n)
          c.v !== Ht && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Ff();
      }
    }
  );
}
function Ts(e, t = 1) {
  F(e, e.v + t);
}
var Pt, Jl, Ql, eu;
function pa() {
  if (Pt === void 0) {
    Pt = window, Jl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ql = Vn(t, "firstChild").get, eu = Vn(t, "nextSibling").get, Ls(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ls(n) && (n.__t = void 0);
  }
}
function Dn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return Ql.call(e);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return eu.call(e);
}
function W(e, t) {
  if (!Ee)
    return /* @__PURE__ */ Ct(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ct(Le)
  );
  if (n === null)
    n = Le.appendChild(Dn());
  else if (t && n.nodeType !== 3) {
    var r = Dn();
    return n == null || n.before(r), kt(r), r;
  }
  return kt(n), n;
}
function be(e, t) {
  if (!Ee) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ct(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ _n(n) : n;
  }
  return Le;
}
function I(e, t = 1, n = !1) {
  let r = Ee ? Le : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ _n(r);
  if (!Ee)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Dn();
    return r === null ? o == null || o.after(a) : r.before(a), kt(a), a;
  }
  return kt(r), /** @type {TemplateNode} */
  r;
}
function Ga(e) {
  e.textContent = "";
}
function tu(e) {
  return e === this.v;
}
function Ua(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ja(e) {
  return !Ua(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  var t = sn | yn, n = qe !== null && qe.f & sn ? (
    /** @type {Derived} */
    qe
  ) : null;
  return je === null || n !== null && n.f & Bt ? t |= Bt : je.f |= Ul, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: tu,
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
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = /* @__PURE__ */ Mr(e);
  return vu(t), t;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ Mr(e);
  return t.equals = Ja, t;
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
function Uf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & sn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ru(e) {
  var t, n = je;
  Gn(Uf(e));
  try {
    nu(e), t = mu(e);
  } finally {
    Gn(n);
  }
  return t;
}
function ou(e) {
  var t = ru(e), n = (Xn || e.f & Bt) && e.deps !== null ? Qn : _t;
  Qt(e, n), e.equals(t) || (e.v = t, e.wv = gu());
}
function iu(e) {
  je === null && qe === null && Yf(), qe !== null && qe.f & Bt && je === null && Xf(), So && Rf();
}
function Jf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function hr(e, t, n, r = !0) {
  var o = je, i = {
    ctx: Xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | yn,
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
      Di(i), i.f |= Af;
    } catch (l) {
      throw Jt(i), l;
    }
  else t !== null && Li(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ul | oi)) === 0;
  if (!a && r && (o !== null && Jf(i, o), qe !== null && qe.f & sn)) {
    var s = (
      /** @type {Derived} */
      qe
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Qa(e) {
  const t = hr(Pi, null, !1);
  return Qt(t, _t), t.teardown = e, t;
}
function Fn(e) {
  iu();
  var t = je !== null && (je.f & On) !== 0 && Xe !== null && !Xe.m;
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
function Qf(e) {
  return iu(), Xr(e);
}
function ev(e) {
  const t = hr(vr, e, !0);
  return () => {
    Jt(t);
  };
}
function tv(e) {
  const t = hr(vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Hr(t, () => {
      Jt(t), r(void 0);
    }) : (Jt(t), r(void 0));
  });
}
function At(e) {
  return hr(Gl, e, !1);
}
function fe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Xr(() => {
    e(), !r.ran && (r.ran = !0, F(n.l.r2, !0), xn(t));
  });
}
function vt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Xe
  );
  Xr(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & _t && Qt(n, Qn), Yr(n) && Di(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Xr(e) {
  return hr(Pi, e, !0);
}
function Se(e, t = [], n = Mr) {
  const r = t.map(n);
  return gr(() => e(...r.map(h)));
}
function gr(e, t = 0) {
  return hr(Pi | ja | t, e, !0);
}
function Ln(e, t = !0) {
  return hr(Pi | On, e, !0, t);
}
function au(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = So, r = qe;
    As(!0), bn(null);
    try {
      t.call(null);
    } finally {
      As(n), bn(r);
    }
  }
}
function su(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & vr ? n.parent = null : Jt(n, t), n = r;
  }
}
function nv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & On || Jt(t), t = n;
  }
}
function Jt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Zf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _n(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  su(e, t && !n), ui(e, 0), Qt(e, Vi);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  au(e);
  var s = e.parent;
  s !== null && s.first !== null && lu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function lu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Hr(e, t) {
  var n = [];
  es(e, n, !0), uu(n, () => {
    Jt(e), t && t();
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
function es(e, t, n) {
  if (!(e.f & zn)) {
    if (e.f ^= zn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Rr) !== 0 || (r.f & On) !== 0;
      es(r, t, i ? n : !1), r = o;
    }
  }
}
function lo(e) {
  cu(e, !0);
}
function cu(e, t) {
  if (e.f & zn) {
    e.f ^= zn, e.f & _t || (e.f ^= _t), Yr(e) && (Qt(e, yn), Li(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rr) !== 0 || (n.f & On) !== 0;
      cu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const rv = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let uo = [], co = [];
function du() {
  var e = uo;
  uo = [], so(e);
}
function fu() {
  var e = co;
  co = [], so(e);
}
function _o(e) {
  uo.length === 0 && queueMicrotask(du), uo.push(e);
}
function ov(e) {
  co.length === 0 && rv(fu), co.push(e);
}
function Os() {
  uo.length > 0 && du(), co.length > 0 && fu();
}
let jo = !1, ai = !1, si = null, ir = !1, So = !1;
function As(e) {
  So = e;
}
let ro = [], qe = null, gn = !1;
function bn(e) {
  qe = e;
}
let je = null;
function Gn(e) {
  je = e;
}
let Ut = null;
function iv(e) {
  Ut = e;
}
function vu(e) {
  qe !== null && qe.f & ha && (Ut === null ? iv([e]) : Ut.push(e));
}
let bt = null, Ot = 0, jt = null;
function av(e) {
  jt = e;
}
let hu = 1, li = 0, Xn = !1;
function gu() {
  return ++hu;
}
function Yr(e) {
  var t, n = e.f;
  if (n & yn)
    return !0;
  if (n & Qn) {
    var r = e.deps, o = (n & Bt) !== 0;
    if (r !== null) {
      var i, a, s = (n & ii) !== 0, l = o && je !== null && !Xn, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ii), l && d !== null && !(d.f & Bt) && (c.f ^= Bt);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Yr(
          /** @type {Derived} */
          a
        ) && ou(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || je !== null && !Xn) && Qt(e, _t);
  }
  return !1;
}
function sv(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & oi)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= oi;
      }
    n = n.parent;
  }
  throw jo = !1, e;
}
function lv(e) {
  return (e.f & Vi) === 0 && (e.parent === null || (e.parent.f & oi) === 0);
}
function Ni(e, t, n, r) {
  if (jo) {
    if (n === null && (jo = !1), lv(t))
      throw e;
    return;
  }
  n !== null && (jo = !0);
  {
    sv(e, t);
    return;
  }
}
function pu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Ut != null && Ut.includes(e) || (i.f & sn ? pu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Qt(i, yn) : i.f & _t && Qt(i, Qn), Li(
        /** @type {Effect} */
        i
      )));
    }
}
function mu(e) {
  var t, n = bt, r = Ot, o = jt, i = qe, a = Xn, s = Ut, l = Xe, u = gn, c = e.f;
  bt = /** @type {null | Value[]} */
  null, Ot = 0, jt = null, Xn = (c & Bt) !== 0 && (gn || !ir || qe === null), qe = c & (On | vr) ? null : e, Ut = null, Zs(e.ctx), gn = !1, li++, e.f |= ha;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (bt !== null) {
      var v;
      if (ui(e, Ot), f !== null && Ot > 0)
        for (f.length = Ot + bt.length, v = 0; v < bt.length; v++)
          f[Ot + v] = bt[v];
      else
        e.deps = f = bt;
      if (!Xn)
        for (v = Ot; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Ot < f.length && (ui(e, Ot), f.length = Ot);
    if (Ti() && jt !== null && !gn && f !== null && !(e.f & (sn | Qn | yn)))
      for (v = 0; v < /** @type {Source[]} */
      jt.length; v++)
        pu(
          jt[v],
          /** @type {Effect} */
          e
        );
    return i !== e && (li++, jt !== null && (o === null ? o = jt : o.push(.../** @type {Source[]} */
    jt))), d;
  } finally {
    bt = n, Ot = r, jt = o, qe = i, Xn = a, Ut = s, Zs(l), gn = u, e.f ^= ha;
  }
}
function uv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Df.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & sn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (bt === null || !bt.includes(t)) && (Qt(t, Qn), t.f & (Bt | ii) || (t.f ^= ii), nu(
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
      uv(e, n[r]);
}
function Di(e) {
  var t = e.f;
  if (!(t & Vi)) {
    Qt(e, _t);
    var n = je, r = Xe, o = ir;
    je = e, ir = !0;
    try {
      t & ja ? nv(e) : su(e), au(e);
      var i = mu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = hu;
      var a = e.deps, s;
      Nf && $f && e.f & yn;
    } catch (l) {
      Ni(l, e, n, r || e.ctx);
    } finally {
      ir = o, je = n;
    }
  }
}
function cv() {
  try {
    Wf();
  } catch (e) {
    if (si !== null)
      Ni(e, si, null);
    else
      throw e;
  }
}
function yu() {
  var e = ir;
  try {
    var t = 0;
    for (ir = !0; ro.length > 0; ) {
      t++ > 1e3 && cv();
      var n = ro, r = n.length;
      ro = [];
      for (var o = 0; o < r; o++) {
        var i = fv(n[o]);
        dv(i);
      }
      fo.clear();
    }
  } finally {
    ai = !1, ir = e, si = null;
  }
}
function dv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Vi | zn)))
        try {
          Yr(r) && (Di(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? lu(r) : r.fn = null));
        } catch (o) {
          Ni(o, r, null, r.ctx);
        }
    }
}
function Li(e) {
  ai || (ai = !0, queueMicrotask(yu));
  for (var t = si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (vr | On)) {
      if (!(n & _t)) return;
      t.f ^= _t;
    }
  }
  ro.push(t);
}
function fv(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (On | vr)) !== 0, i = o && (r & _t) !== 0;
    if (!i && !(r & zn)) {
      if (r & Gl)
        t.push(n);
      else if (o)
        n.f ^= _t;
      else {
        var a = qe;
        try {
          qe = n, Yr(n) && Di(n);
        } catch (u) {
          Ni(u, n, null, n.ctx);
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
  for (Os(); ro.length > 0; )
    ai = !0, yu(), Os();
  return (
    /** @type {T} */
    t
  );
}
function h(e) {
  var t = e.f, n = (t & sn) !== 0;
  if (qe !== null && !gn) {
    if (!(Ut != null && Ut.includes(e))) {
      var r = qe.deps;
      e.rv < li && (e.rv = li, bt === null && r !== null && r[Ot] === e ? Ot++ : bt === null ? bt = [e] : (!Xn || !bt.includes(e)) && bt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Bt) && (o.f ^= Bt);
  }
  return n && (o = /** @type {Derived} */
  e, Yr(o) && ou(o)), So && fo.has(e) ? fo.get(e) : e.v;
}
function xn(e) {
  var t = gn;
  try {
    return gn = !0, e();
  } finally {
    gn = t;
  }
}
const vv = -7169;
function Qt(e, t) {
  e.f = e.f & vv | t;
}
function G(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      ma(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && ma(n);
      }
  }
}
function ma(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        ma(e[r], t);
      } catch {
      }
    const n = qa(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Fl(n);
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
const fo = /* @__PURE__ */ new Map();
function Pr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: tu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function xt(e, t) {
  const n = Pr(e);
  return vu(n), n;
}
// @__NO_SIDE_EFFECTS__
function te(e, t = !1) {
  var n;
  const r = Pr(e);
  return t || (r.equals = Ja), Br && Xe !== null && Xe.l !== null && ((n = Xe.l).s ?? (n.s = [])).push(r), r;
}
function F(e, t, n = !1) {
  qe !== null && !gn && Ti() && qe.f & (sn | ja) && !(Ut != null && Ut.includes(e)) && Gf();
  let r = n ? Ft(t) : t;
  return ya(e, r);
}
function ya(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    So ? fo.set(e, t) : fo.set(e, n), e.v = t, e.f & sn && (e.f & yn && ru(
      /** @type {Derived} */
      e
    ), Qt(e, e.f & Bt ? Qn : _t)), e.wv = gu(), wu(e, yn), Ti() && je !== null && je.f & _t && !(je.f & (On | vr)) && (jt === null ? av([e]) : jt.push(e));
  }
  return t;
}
function Is(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return F(e, n), r;
}
function wu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ti(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & yn || !r && a === je || (Qt(a, t), s & (_t | Bt) && (s & sn ? wu(
        /** @type {Derived} */
        a,
        Qn
      ) : Li(
        /** @type {Effect} */
        a
      )));
    }
}
let Xe = null;
function Zs(e) {
  Xe = e;
}
function sr(e) {
  return (
    /** @type {T} */
    ts().get(e)
  );
}
function Vr(e, t) {
  return ts().set(e, t), t;
}
function hv(e) {
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
    r2: Pr(!1)
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
          Gn(i.effect), bn(i.reaction), At(i.fn);
        }
      } finally {
        Gn(n), bn(r);
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
  return Xe === null && Hi(), Xe.c ?? (Xe.c = new Map(gv(Xe) || void 0));
}
function gv(e) {
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
function bv(e) {
  return e = e.toLowerCase(), wv[e] ?? e;
}
const xv = ["touchstart", "touchmove"];
function $v(e) {
  return xv.includes(e);
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
  Ee && /* @__PURE__ */ Ct(e) !== null && Ga(e);
}
let Bs = !1;
function Ev() {
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
function Mv(e) {
  var t = qe, n = je;
  bn(null), Gn(null);
  try {
    return e();
  } finally {
    bn(t), Gn(n);
  }
}
const bu = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set();
function xu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Qr.call(t, i), !i.cancelBubble)
      return Mv(() => n == null ? void 0 : n.call(this, i));
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
function Oi(e) {
  for (var t = 0; t < e.length; t++)
    bu.add(e[t]);
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
    bn(null), Gn(null);
    try {
      for (var v, w = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (ko(x)) {
              var [k, ...g] = x;
              k.apply(a, [e, ...g]);
            } else
              x.call(a, e);
        } catch (C) {
          v ? w.push(C) : v = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let C of w)
          queueMicrotask(() => {
            throw C;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, bn(d), Gn(f);
    }
  }
}
function ns(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Nt(e, t) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  var n = (t & jl) !== 0, r = (t & Pf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ee)
      return Nt(Le, null), Le;
    o === void 0 && (o = ns(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ct(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Jl ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Nt(s, l);
    } else
      Nt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function $e(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Ee)
      return Nt(Le, null), Le;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ns(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ct(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ Ct(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ct(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ Ct(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Nt(c, d);
    } else
      Nt(u, u);
    return u;
  };
}
function Ie(e = "") {
  if (!Ee) {
    var t = Dn(e + "");
    return Nt(t, t), t;
  }
  var n = Le;
  return n.nodeType !== 3 && (n.before(n = Dn()), kt(n)), Nt(n, n), n;
}
function et() {
  if (Ee)
    return Nt(Le, null), Le;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Dn();
  return e.append(t, n), Nt(t, n), e;
}
function L(e, t) {
  if (Ee) {
    je.nodes_end = Le, wn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Rt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function $u(e, t) {
  return Cu(e, t);
}
function Hv(e, t) {
  pa(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ee, o = Le;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ct(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Xa); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ _n(i);
    if (!i)
      throw $r;
    It(!0), kt(
      /** @type {Comment} */
      i
    ), wn();
    const a = Cu(e, { ...t, anchor: i });
    if (Le === null || Le.nodeType !== 8 || /** @type {Comment} */
    Le.data !== Wa)
      throw zi(), $r;
    return It(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === $r)
      return t.recover === !1 && Kf(), pa(), Ga(n), It(!1), $u(e, t);
    throw a;
  } finally {
    It(r), kt(o);
  }
}
const yr = /* @__PURE__ */ new Map();
function Cu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  pa();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var w = $v(v);
        t.addEventListener(v, Qr, { passive: w });
        var b = yr.get(v);
        b === void 0 ? (document.addEventListener(v, Qr, { passive: w }), yr.set(v, 1)) : yr.set(v, b + 1);
      }
    }
  };
  l(Ka(bu)), wa.add(l);
  var u = void 0, c = tv(() => {
    var d = n ?? t.appendChild(Dn());
    return Ln(() => {
      if (i) {
        ue({});
        var f = (
          /** @type {ComponentContext} */
          Xe
        );
        f.c = i;
      }
      o && (r.$$events = o), Ee && Nt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ee && (je.nodes_end = Le), i && ce();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, Qr);
        var w = (
          /** @type {number} */
          yr.get(v)
        );
        --w === 0 ? (document.removeEventListener(v, Qr), yr.delete(v)) : yr.set(v, w);
      }
      wa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return ba.set(u, c), u;
}
let ba = /* @__PURE__ */ new WeakMap();
function Pv(e, t) {
  const n = ba.get(e);
  return n ? (ba.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Ee && n === 0 && wn();
  var o = e, i = null, a = null, s = Ht, l = n > 0 ? Rr : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let w = !1;
    if (Ee && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === Xa ? r = 0 : x === Ya ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = ga(), kt(o), It(!1), w = !0, r = -1);
    }
    s ? (i ? lo(i) : v && (i = Ln(() => v(o))), a && Hr(a, () => {
      a = null;
    })) : (a ? lo(a) : v && (a = Ln(() => v(o, [n + 1, r]))), i && Hr(i, () => {
      i = null;
    })), w && It(!0);
  };
  gr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Ee && (o = Le);
}
function vo(e, t) {
  return t;
}
function Vv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    es(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ga(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(e, t[0].prev, t[i - 1].next);
  }
  uu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), Bn(e, c.prev, c.next)), Jt(c.e, !s);
    }
  });
}
function Dt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Kl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Ee ? kt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ct(u)
    ) : u.appendChild(Dn());
  }
  Ee && wn();
  var c = null, d = !1, f = /* @__PURE__ */ pe(() => {
    var v = n();
    return ko(v) ? v : v == null ? [] : Ka(v);
  });
  gr(() => {
    var v = h(f), w = v.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let b = !1;
    if (Ee) {
      var x = (
        /** @type {Comment} */
        a.data === Ya
      );
      x !== (w === 0) && (a = ga(), kt(a), It(!1), b = !0);
    }
    if (Ee) {
      for (var k = null, g, C = 0; C < w; C++) {
        if (Le.nodeType === 8 && /** @type {Comment} */
        Le.data === Wa) {
          a = /** @type {Comment} */
          Le, b = !0, It(!1);
          break;
        }
        var y = v[C], _ = r(y, C);
        g = ku(
          Le,
          s,
          k,
          null,
          y,
          _,
          C,
          o,
          t,
          n
        ), s.items.set(_, g), k = g;
      }
      w > 0 && kt(ga());
    }
    Ee || zv(v, s, a, o, t, r, n), i !== null && (w === 0 ? c ? lo(c) : c = Ln(() => i(a)) : c !== null && Hr(c, () => {
      c = null;
    })), b && It(!0), h(f);
  }), Ee && (a = Le);
}
function zv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & kf) !== 0, f = (o & (Ba | Ra)) !== 0, v = e.length, w = t.items, b = t.first, x = b, k, g = null, C, y = [], _ = [], S, E, V, P;
  if (d)
    for (P = 0; P < v; P += 1)
      S = e[P], E = i(S, P), V = w.get(E), V !== void 0 && ((s = V.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(V));
  for (P = 0; P < v; P += 1) {
    if (S = e[P], E = i(S, P), V = w.get(E), V === void 0) {
      var D = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      g = ku(
        D,
        t,
        g,
        g === null ? t.first : g.next,
        S,
        E,
        P,
        r,
        o,
        a
      ), w.set(E, g), y = [], _ = [], x = g.next;
      continue;
    }
    if (f && Nv(V, S, P, o), V.e.f & zn && (lo(V.e), d && ((l = V.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(V))), V !== x) {
      if (k !== void 0 && k.has(V)) {
        if (y.length < _.length) {
          var A = _[0], T;
          g = A.prev;
          var B = y[0], M = y[y.length - 1];
          for (T = 0; T < y.length; T += 1)
            Rs(y[T], A, n);
          for (T = 0; T < _.length; T += 1)
            k.delete(_[T]);
          Bn(t, B.prev, M.next), Bn(t, g, B), Bn(t, M, A), x = A, g = M, P -= 1, y = [], _ = [];
        } else
          k.delete(V), Rs(V, x, n), Bn(t, V.prev, V.next), Bn(t, V, g === null ? t.first : g.next), Bn(t, g, V), g = V;
        continue;
      }
      for (y = [], _ = []; x !== null && x.k !== E; )
        x.e.f & zn || (k ?? (k = /* @__PURE__ */ new Set())).add(x), _.push(x), x = x.next;
      if (x === null)
        continue;
      V = x;
    }
    y.push(V), g = V, x = V.next;
  }
  if (x !== null || k !== void 0) {
    for (var z = k === void 0 ? [] : Ka(k); x !== null; )
      x.e.f & zn || z.push(x), x = x.next;
    var $ = z.length;
    if ($ > 0) {
      var H = o & Kl && v === 0 ? n : null;
      if (d) {
        for (P = 0; P < $; P += 1)
          (u = z[P].a) == null || u.measure();
        for (P = 0; P < $; P += 1)
          (c = z[P].a) == null || c.fix();
      }
      Vv(t, z, H, w);
    }
  }
  d && _o(() => {
    var N;
    if (C !== void 0)
      for (V of C)
        (N = V.a) == null || N.apply();
  }), je.first = t.first && t.first.e, je.last = g && g.e;
}
function Nv(e, t, n, r) {
  r & Ba && ya(e.v, t), r & Ra ? ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ku(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & Ba) !== 0, d = (l & _f) === 0, f = c ? d ? /* @__PURE__ */ te(o) : Pr(o) : o, v = l & Ra ? Pr(a) : a, w = {
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
    return w.e = Ln(() => s(e, f, v, u), Ee), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
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
      /* @__PURE__ */ _n(i)
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
      Ee && wn();
      return;
    }
    s !== void 0 && (Jt(s), s = void 0), a !== "" && (s = Ln(() => {
      if (Ee) {
        Le.data;
        for (var l = wn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ _n(l);
        if (l === null)
          throw zi(), $r;
        Nt(Le, u), i = kt(l);
        return;
      }
      var c = a + "", d = ns(c);
      Nt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function pt(e, t, n, r, o) {
  var i;
  Ee && wn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Dv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function lr(e, t, ...n) {
  var r = e, o = ft, i;
  gr(() => {
    o !== (o = t()) && (i && (Jt(i), i = null), i = Ln(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Rr), Ee && (r = Le);
}
function _u(e, t, n) {
  Ee && wn();
  var r = e, o, i;
  gr(() => {
    o !== (o = t()) && (i && (Hr(i), i = null), o && (i = Ln(() => n(r, o))));
  }, Rr), Ee && (r = Le);
}
function Lv(e, t, n, r, o, i) {
  let a = Ee;
  Ee && wn();
  var s, l, u = null;
  Ee && Le.nodeType === 1 && (u = /** @type {Element} */
  Le, wn());
  var c = (
    /** @type {TemplateNode} */
    Ee ? Le : e
  ), d;
  gr(() => {
    const f = t() || null;
    var v = f === "svg" ? zf : null;
    f !== s && (d && (f === null ? Hr(d, () => {
      d = null, l = null;
    }) : f === l ? lo(d) : Jt(d)), f && f !== l && (d = Ln(() => {
      if (u = Ee ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Nt(u, u), r) {
        Ee && kv(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          Ee ? /* @__PURE__ */ Ct(u) : u.appendChild(Dn())
        );
        Ee && (w === null ? It(!1) : kt(w)), r(u, w);
      }
      je.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, Rr), a && (It(!0), kt(c));
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
function gt(e, t, n) {
  At(() => {
    var r = xn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Xr(() => {
        var a = n();
        G(a), o && Ua(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
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
function Tv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Su(e)) && (r && (r += " "), r += t);
  return r;
}
function dn(e) {
  return typeof e == "object" ? Tv(e) : e ?? "";
}
const Xs = [...` 	
\r\f \v\uFEFF`];
function Ov(e, t, n) {
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
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var f = e[d];
        if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === '"' || f === "'" ? i = f : f === "(" ? a++ : f === ")" && a--, !s && i === !1 && a === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === b - 1) {
            if (c !== -1) {
              var v = ea(e.substring(u, c).trim());
              if (!l.includes(v)) {
                f !== ";" && d++;
                var w = e.substring(u, d).trim();
                n += " " + w + ";";
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
function mt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Ee || a !== n || a === void 0) {
    var s = Ov(n, r, i);
    (!Ee || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
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
function dt(e, t, n, r) {
  var o = e.__style;
  if (Ee || o !== t) {
    var i = Av(t, r);
    (!Ee || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ta(e, n == null ? void 0 : n[0], r[0]), ta(e, n == null ? void 0 : n[1], r[1], "important")) : ta(e, n, r));
  return r;
}
const Gr = Symbol("class"), nr = Symbol("style"), Eu = Symbol("is custom element"), Mu = Symbol("is html");
function oo(e) {
  if (Ee) {
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
    e.__on_r = n, ov(n), Ev();
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
function ye(e, t, n, r) {
  var o = os(e);
  Ee && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Bf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = os(e), a = i[Eu], s = !i[Mu];
  let l = Ee && a;
  l && It(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = dn(n.class) : (r || n[Gr]) && (n.class = null), n[nr] && (n.style ?? (n.style = null));
  var f = Hu(e);
  for (const C in n) {
    let y = n[C];
    if (c && C === "value" && y == null) {
      e.value = e.__value = "", u[C] = y;
      continue;
    }
    if (C === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      mt(e, v, y, r, t == null ? void 0 : t[Gr], n[Gr]), u[C] = y, u[Gr] = n[Gr];
      continue;
    }
    if (C === "style") {
      dt(e, y, t == null ? void 0 : t[nr], n[nr]), u[C] = y, u[nr] = n[nr];
      continue;
    }
    var w = u[C];
    if (y !== w) {
      u[C] = y;
      var b = C[0] + C[1];
      if (b !== "$$")
        if (b === "on") {
          const _ = {}, S = "$$" + C;
          let E = C.slice(2);
          var x = yv(E);
          if (pv(E) && (E = E.slice(0, -7), _.capture = !0), !x && w) {
            if (y != null) continue;
            e.removeEventListener(E, u[S], _), u[S] = null;
          }
          if (y != null)
            if (x)
              e[`__${E}`] = y, Oi([E]);
            else {
              let V = function(P) {
                u[C].call(this, P);
              };
              u[S] = xu(E, e, V, _);
            }
          else x && (e[`__${E}`] = void 0);
        } else if (C === "style")
          ye(e, C, y);
        else if (C === "autofocus")
          _v(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!a && (C === "__value" || C === "value" && y != null))
          e.value = e.__value = y;
        else if (C === "selected" && c)
          Iv(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var k = C;
          s || (k = bv(k));
          var g = k === "defaultValue" || k === "defaultChecked";
          if (y == null && !a && !g)
            if (i[C] = null, k === "value" || k === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (k === "value") {
                let E = _.defaultValue;
                _.removeAttribute(k), _.defaultValue = E, _.value = _.__value = S ? E : null;
              } else {
                let E = _.defaultChecked;
                _.removeAttribute(k), _.defaultChecked = E, _.checked = S ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else g || f.includes(k) && (a || typeof y != "string") ? e[k] = y : typeof y != "function" && ye(e, k, y);
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
      [Eu]: e.nodeName.includes("-"),
      [Mu]: e.namespaceURI === Vf
    })
  );
}
var Ws = /* @__PURE__ */ new Map();
function Hu(e) {
  var t = Ws.get(e.nodeName);
  if (t) return t;
  Ws.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Fl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = qa(r);
  }
  return t;
}
var rr, io, Fo, xa, Pu;
const $a = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    br(this, xa), br(this, rr, /* @__PURE__ */ new WeakMap()), br(this, io), br(this, Fo), ni(this, Fo, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = lt(this, rr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), lt(this, rr).set(t, r), bf(this, xa, Pu).call(this).observe(t, lt(this, Fo)), () => {
      var o = lt(this, rr).get(t);
      o.delete(n), o.size === 0 && (lt(this, rr).delete(t), lt(this, io).unobserve(t));
    };
  }
};
rr = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakSet(), Pu = function() {
  return lt(this, io) ?? ni(this, io, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        $a.entries.set(t.target, t);
        for (var n of lt(this, rr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Vt($a, "entries", /* @__PURE__ */ new WeakMap());
let Zv = $a;
var Bv = /* @__PURE__ */ new Zv({
  box: "border-box"
});
function Ks(e, t, n) {
  var r = Bv.observe(e, () => n(e[t]));
  At(() => (xn(() => n(e[t])), r));
}
function qs(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function $n(e = {}, t, n, r) {
  return At(() => {
    var o, i;
    return Xr(() => {
      o = i, i = [], xn(() => {
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
function ze(e = !1) {
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
    const a = /* @__PURE__ */ Mr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => h(a);
  }
  n.b.length && Qf(() => {
    js(t, r), so(n.b);
  }), Fn(() => {
    const o = xn(() => n.m.map(Of));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Fn(() => {
    js(t, r), so(n.a);
  });
}
function js(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
  t();
}
function De(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = ko(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function Wt(e) {
  Xe === null && Hi(), Br && Xe.l !== null ? Xv(Xe).m.push(e) : Fn(() => {
    const t = xn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function is(e) {
  Xe === null && Hi(), Wt(() => () => xn(e));
}
function Rv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ai() {
  const e = Xe;
  return e === null && Hi(), (t, n, r) => {
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
    return t(void 0), n && n(void 0), ft;
  const r = xn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const wr = [];
function qt(e, t) {
  return {
    subscribe: we(e, t).subscribe
  };
}
function we(e, t = ft) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ua(e, s) && (e = s, n)) {
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
  function a(s, l = ft) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || ft), s(
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
  return qt(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = ft;
    const f = () => {
      if (c)
        return;
      d();
      const w = t(r ? u[0] : u, a, s);
      i ? a(w) : d = typeof w == "function" ? w : ft;
    }, v = o.map(
      (w, b) => as(
        w,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
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
function U(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ te(void 0),
    unsubscribe: ft
  });
  if (r.store !== e && !(Ca in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ft;
    else {
      var o = !0;
      r.unsubscribe = as(e, (i) => {
        o ? r.source.v = i : F(r.source, i);
      }), o = !1;
    }
  return e && Ca in n ? q(e) : h(r.source);
}
function Yv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = ft), e;
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
function yt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Kv
  );
}
const qv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return h(e.version), t in e.special ? e.special[t]() : e.props[t];
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
    )), e.special[t](n), Is(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Is(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function at(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Pr(0) }, qv);
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
      const i = Vn(o, t);
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
        const o = Vn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Wn || t === Fa) return !1;
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
  var o, i = (n & Sf) !== 0, a = !Br || (n & Ef) !== 0, s = (n & Mf) !== 0, l = (n & Hf) !== 0, u = !1, c;
  s ? [c, u] = Wv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Wn in e || Fa in e, f = s && (((o = Vn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, v = (
    /** @type {V} */
    r
  ), w = !0, b = !1, x = () => (b = !0, w && (w = !1, l ? v = xn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && qf(), c = x(), f && f(c));
  var k;
  if (a)
    k = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? x() : (w = !0, b = !1, E);
    };
  else {
    var g = (i ? Mr : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= If, k = () => {
      var E = h(g);
      return E !== void 0 && (v = /** @type {V} */
      void 0), E === void 0 ? v : E;
    };
  }
  if (!(n & ql))
    return k;
  if (f) {
    var C = e.$$legacy;
    return function(E, V) {
      return arguments.length > 0 ? ((!a || !V || C || u) && f(V ? k() : E), E) : k();
    };
  }
  var y = !1, _ = /* @__PURE__ */ te(c), S = /* @__PURE__ */ Mr(() => {
    var E = k(), V = h(_);
    return y ? (y = !1, V) : _.v = E;
  });
  return s && h(S), i || (S.equals = Ja), function(E, V) {
    if (arguments.length > 0) {
      const P = V ? h(S) : a && s ? Ft(E) : E;
      if (!S.equals(P)) {
        if (y = !0, F(_, P), b && v !== void 0 && (v = P), Fs(S))
          return E;
        xn(() => h(S));
      }
      return E;
    }
    return Fs(S) ? S.v : h(S);
  };
}
function Fv(e) {
  return new Gv(e);
}
var Zn, rn;
class Gv {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    br(this, Zn), br(this, rn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ te(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return h(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === Fa ? !0 : (h(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return F(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ni(this, rn, (t.hydrate ? Hv : $u)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), ni(this, Zn, i.$$events);
    for (const a of Object.keys(lt(this, rn)))
      a === "$set" || a === "$destroy" || a === "$on" || ao(this, a, {
        get() {
          return lt(this, rn)[a];
        },
        /** @param {any} value */
        set(s) {
          lt(this, rn)[a] = s;
        },
        enumerable: !0
      });
    lt(this, rn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, lt(this, rn).$destroy = () => {
      Pv(lt(this, rn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    lt(this, rn).$set(t);
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
    lt(this, rn).$destroy();
  }
}
Zn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap();
let Vu;
typeof HTMLElement == "function" && (Vu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Vt(this, "$$ctor"), Vt(this, "$$s"), Vt(this, "$$c"), Vt(this, "$$cn", !1), Vt(this, "$$d", {}), Vt(this, "$$r", !1), Vt(this, "$$p_d", {}), Vt(this, "$$l", {}), Vt(this, "$$l_u", /* @__PURE__ */ new Map()), Vt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      }), this.$$me = ev(() => {
        Xr(() => {
          var r;
          this.$$r = !0;
          for (const o of ri(this.$$c)) {
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
    return ri(this.$$p_d).find(
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
  let a = class extends Vu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ri(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ri(t).forEach((s) => {
    ao(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = Go(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Vn(c, s)) == null ? void 0 : u.get;
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
function Et(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Et(e[n])) !== "" && (t += (t && " ") + r);
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
  return new Yt(r, this._parents);
}
function i1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function a1() {
  return [];
}
function Nu(e) {
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
  typeof e == "function" ? e = s1(e) : e = Nu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new Yt(r, o);
}
function Du(e) {
  return function() {
    return this.matches(e);
  };
}
function Lu(e) {
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
  return this.select(e == null ? d1 : c1(typeof e == "function" ? e : Lu(e)));
}
var v1 = Array.prototype.filter;
function h1() {
  return Array.from(this.children);
}
function g1(e) {
  return function() {
    return v1.call(this.children, e);
  };
}
function p1(e) {
  return this.selectAll(e == null ? h1 : g1(typeof e == "function" ? e : Lu(e)));
}
function m1(e) {
  typeof e != "function" && (e = Du(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Yt(r, this._parents);
}
function Tu(e) {
  return new Array(e.length);
}
function y1() {
  return new Yt(this._enter || this._groups.map(Tu), this._parents);
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
function b1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new di(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function x1(e, t, n, r, o, i, a) {
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
  var n = t ? x1 : b1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = w1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = k1(e.call(c, c && c.__data__, u, r)), w = v.length, b = s[u] = new Array(w), x = a[u] = new Array(w), k = l[u] = new Array(f);
    n(c, d, b, x, k, v, t);
    for (var g = 0, C = 0, y, _; g < w; ++g)
      if (y = b[g]) {
        for (g >= C && (C = g + 1); !(_ = x[C]) && ++C < w; ) ;
        y._next = _ || null;
      }
  }
  return a = new Yt(a, r), a._enter = s, a._exit = l, a;
}
function k1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _1() {
  return new Yt(this._exit || this._groups.map(Tu), this._parents);
}
function S1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function E1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, w = 0; w < d; ++w)
      (v = u[w] || c[w]) && (f[w] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new Yt(s, this._parents);
}
function M1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function H1(e) {
  e || (e = P1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Yt(o, this._parents).order();
}
function P1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function V1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function z1() {
  return Array.from(this);
}
function N1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function D1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function L1() {
  return !this.node();
}
function T1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function O1(e) {
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
  return this.each((t == null ? n.local ? A1 : O1 : typeof t == "function" ? n.local ? R1 : B1 : n.local ? Z1 : I1)(n, t));
}
function Ou(e) {
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
  return arguments.length > 1 ? this.each((t == null ? Y1 : typeof t == "function" ? K1 : W1)(e, t, n ?? "")) : zr(this.node(), e);
}
function zr(e, t) {
  return e.style.getPropertyValue(t) || Ou(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Au(e) {
  return e.trim().split(/^|\s+/);
}
function ls(e) {
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
function Zu(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Bu(e, t) {
  for (var n = ls(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function J1(e) {
  return function() {
    Zu(this, e);
  };
}
function Q1(e) {
  return function() {
    Bu(this, e);
  };
}
function eh(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zu : Bu)(this, e);
  };
}
function th(e, t) {
  var n = Au(e + "");
  if (arguments.length < 2) {
    for (var r = ls(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? eh : t ? J1 : Q1)(n, t));
}
function nh() {
  this.textContent = "";
}
function rh(e) {
  return function() {
    this.textContent = e;
  };
}
function oh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ih(e) {
  return arguments.length ? this.each(e == null ? nh : (typeof e == "function" ? oh : rh)(e)) : this.node().textContent;
}
function ah() {
  this.innerHTML = "";
}
function sh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function lh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function uh(e) {
  return arguments.length ? this.each(e == null ? ah : (typeof e == "function" ? lh : sh)(e)) : this.node().innerHTML;
}
function ch() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function dh() {
  return this.each(ch);
}
function fh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function vh() {
  return this.each(fh);
}
function hh(e) {
  var t = typeof e == "function" ? e : zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function gh() {
  return null;
}
function ph(e, t) {
  var n = typeof e == "function" ? e : zu(e), r = t == null ? gh : typeof t == "function" ? t : ss(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function mh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function yh() {
  return this.each(mh);
}
function wh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function bh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function xh(e) {
  return this.select(e ? bh : wh);
}
function $h(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Ch(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function kh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function _h(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Sh(e, t, n) {
  return function() {
    var r = this.__on, o, i = Ch(t);
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
function Eh(e, t, n) {
  var r = kh(e + ""), o, i = r.length, a;
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
  for (s = t ? Sh : _h, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Ru(e, t, n) {
  var r = Ou(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Mh(e, t) {
  return function() {
    return Ru(this, e, t);
  };
}
function Hh(e, t) {
  return function() {
    return Ru(this, e, t.apply(this, arguments));
  };
}
function Ph(e, t) {
  return this.each((typeof t == "function" ? Hh : Mh)(e, t));
}
function* Vh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var Xu = [null];
function Yt(e, t) {
  this._groups = e, this._parents = t;
}
function Eo() {
  return new Yt([[document.documentElement]], Xu);
}
function zh() {
  return this;
}
Yt.prototype = Eo.prototype = {
  constructor: Yt,
  select: o1,
  selectAll: l1,
  selectChild: f1,
  selectChildren: p1,
  filter: m1,
  data: C1,
  enter: y1,
  exit: _1,
  join: S1,
  merge: E1,
  selection: zh,
  order: M1,
  sort: H1,
  call: V1,
  nodes: z1,
  node: N1,
  size: D1,
  empty: L1,
  each: T1,
  attr: X1,
  style: q1,
  property: U1,
  classed: th,
  text: ih,
  html: uh,
  raise: dh,
  lower: vh,
  append: hh,
  insert: ph,
  remove: yh,
  clone: xh,
  datum: $h,
  on: Eh,
  dispatch: Ph,
  [Symbol.iterator]: Vh
};
function Gt(e) {
  return typeof e == "string" ? new Yt([[document.querySelector(e)]], [document.documentElement]) : new Yt([[e]], Xu);
}
function Nh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function on(e, t) {
  if (e = Nh(e), t === void 0 && (t = e.currentTarget), t) {
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
const Dh = { passive: !1 }, ho = { capture: !0, passive: !1 };
function oa(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Yu(e) {
  var t = e.document.documentElement, n = Gt(e).on("dragstart.drag", Cr, ho);
  "onselectstart" in t ? n.on("selectstart.drag", Cr, ho) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Wu(e, t) {
  var n = e.document.documentElement, r = Gt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Cr, ho), setTimeout(function() {
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
function Lh(e) {
  return !e.ctrlKey && !e.button;
}
function Th() {
  return this.parentNode;
}
function Oh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ah() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ih() {
  var e = Lh, t = Th, n = Oh, r = Ah, o = {}, i = Ii("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(y) {
    y.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", k, Dh).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(y, _) {
    if (!(c || !e.call(this, y, _))) {
      var S = C(this, t.call(this, y, _), y, _, "mouse");
      S && (Gt(y.view).on("mousemove.drag", w, ho).on("mouseup.drag", b, ho), Yu(y.view), oa(y), u = !1, s = y.clientX, l = y.clientY, S("start", y));
    }
  }
  function w(y) {
    if (Cr(y), !u) {
      var _ = y.clientX - s, S = y.clientY - l;
      u = _ * _ + S * S > d;
    }
    o.mouse("drag", y);
  }
  function b(y) {
    Gt(y.view).on("mousemove.drag mouseup.drag", null), Wu(y.view, u), Cr(y), o.mouse("end", y);
  }
  function x(y, _) {
    if (e.call(this, y, _)) {
      var S = y.changedTouches, E = t.call(this, y, _), V = S.length, P, D;
      for (P = 0; P < V; ++P)
        (D = C(this, E, y, _, S[P].identifier, S[P])) && (oa(y), D("start", y, S[P]));
    }
  }
  function k(y) {
    var _ = y.changedTouches, S = _.length, E, V;
    for (E = 0; E < S; ++E)
      (V = o[_[E].identifier]) && (Cr(y), V("drag", y, _[E]));
  }
  function g(y) {
    var _ = y.changedTouches, S = _.length, E, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < S; ++E)
      (V = o[_[E].identifier]) && (oa(y), V("end", y, _[E]));
  }
  function C(y, _, S, E, V, P) {
    var D = i.copy(), A = on(P || S, _), T, B, M;
    if ((M = n.call(y, new _a("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: V,
      active: a,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), E)) != null)
      return T = M.x - A[0] || 0, B = M.y - A[1] || 0, function z($, H, N) {
        var O = A, Z;
        switch ($) {
          case "start":
            o[V] = z, Z = a++;
            break;
          case "end":
            delete o[V], --a;
          // falls through
          case "drag":
            A = on(N || H, _), Z = a;
            break;
        }
        D.call(
          $,
          y,
          new _a($, {
            sourceEvent: H,
            subject: M,
            target: f,
            identifier: V,
            active: Z,
            x: A[0] + T,
            y: A[1] + B,
            dx: A[0] - O[0],
            dy: A[1] - O[1],
            dispatch: D
          }),
          E
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Ro(!!y), f) : e;
  }, f.container = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Ro(y), f) : t;
  }, f.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Ro(y), f) : n;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Ro(!!y), f) : r;
  }, f.on = function() {
    var y = i.on.apply(i, arguments);
    return y === i ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (d = (y = +y) * y, f) : Math.sqrt(d);
  }, f;
}
function us(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ku(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Mo() {
}
var go = 0.7, fi = 1 / go, kr = "\\s*([+-]?\\d+)\\s*", po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zh = /^#([0-9a-f]{3,8})$/, Bh = new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`), Rh = new RegExp(`^rgb\\(${pn},${pn},${pn}\\)$`), Xh = new RegExp(`^rgba\\(${kr},${kr},${kr},${po}\\)$`), Yh = new RegExp(`^rgba\\(${pn},${pn},${pn},${po}\\)$`), Wh = new RegExp(`^hsl\\(${po},${pn},${pn}\\)$`), Kh = new RegExp(`^hsla\\(${po},${pn},${pn},${po}\\)$`), Js = {
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
us(Mo, mo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qs,
  // Deprecated! Use color.formatHex.
  formatHex: Qs,
  formatHex8: qh,
  formatHsl: jh,
  formatRgb: el,
  toString: el
});
function Qs() {
  return this.rgb().formatHex();
}
function qh() {
  return this.rgb().formatHex8();
}
function jh() {
  return qu(this).formatHsl();
}
function el() {
  return this.rgb().formatRgb();
}
function mo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Zh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Bh.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Rh.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Xh.exec(e)) ? Xo(t[1], t[2], t[3], t[4]) : (t = Yh.exec(e)) ? Xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wh.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = Kh.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Js.hasOwnProperty(e) ? tl(Js[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Fh(e) {
  return e instanceof Mo || (e = mo(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function Sa(e, t, n, r) {
  return arguments.length === 1 ? Fh(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
us(zt, Sa, Ku(Mo, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? go : Math.pow(go, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new zt(ar(this.r), ar(this.g), ar(this.b), vi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nl,
  // Deprecated! Use color.formatHex.
  formatHex: nl,
  formatHex8: Gh,
  formatRgb: rl,
  toString: rl
}));
function nl() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}`;
}
function Gh() {
  return `#${or(this.r)}${or(this.g)}${or(this.b)}${or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rl() {
  const e = vi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ar(this.r)}, ${ar(this.g)}, ${ar(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function vi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ar(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function or(e) {
  return e = ar(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ol(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new an(e, t, n, r);
}
function qu(e) {
  if (e instanceof an) return new an(e.h, e.s, e.l, e.opacity);
  if (e instanceof Mo || (e = mo(e)), !e) return new an();
  if (e instanceof an) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new an(a, s, l, e.opacity);
}
function Uh(e, t, n, r) {
  return arguments.length === 1 ? qu(e) : new an(e, t, n, r ?? 1);
}
function an(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
us(an, Uh, Ku(Mo, {
  brighter(e) {
    return e = e == null ? fi : Math.pow(fi, e), new an(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? go : Math.pow(go, e), new an(this.h, this.s, this.l * e, this.opacity);
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
    return new an(il(this.h), Yo(this.s), Yo(this.l), vi(this.opacity));
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
const ju = (e) => () => e;
function Jh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Qh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function eg(e) {
  return (e = +e) == 1 ? Fu : function(t, n) {
    return n - t ? Qh(t, n, e) : ju(isNaN(t) ? n : t);
  };
}
function Fu(e, t) {
  var n = t - e;
  return n ? Jh(e, n) : ju(isNaN(e) ? t : e);
}
const al = function e(t) {
  var n = eg(t);
  function r(o, i) {
    var a = n((o = Sa(o)).r, (i = Sa(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = Fu(o.opacity, i.opacity);
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
var Ea = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, aa = new RegExp(Ea.source, "g");
function tg(e) {
  return function() {
    return e;
  };
}
function ng(e) {
  return function(t) {
    return e(t) + "";
  };
}
function rg(e, t) {
  var n = Ea.lastIndex = aa.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ea.exec(e)) && (o = aa.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Rn(r, o) })), n = aa.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? ng(l[0].x) : tg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var sl = 180 / Math.PI, Gu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Uu(e, t, n, r, o, i) {
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
function og(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Gu : Uu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ig(e) {
  return e == null || (Wo || (Wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wo.setAttribute("transform", e), !(e = Wo.transform.baseVal.consolidate())) ? Gu : (e = e.matrix, Uu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ju(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      w.push({ i: b - 4, x: Rn(u, d) }, { i: b - 2, x: Rn(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Rn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Rn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      w.push({ i: b - 4, x: Rn(u, d) }, { i: b - 2, x: Rn(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var w = -1, b = f.length, x; ++w < b; ) d[(x = f[w]).i] = x.x(v);
      return d.join("");
    };
  };
}
var ag = Ju(og, "px, ", "px)", "deg)"), sg = Ju(ig, ", ", ")", ")"), lg = 1e-12;
function ll(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function ug(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function cg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const dg = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, w = d - l, b = v * v + w * w, x, k;
    if (b < lg)
      k = Math.log(f / u) / t, x = function(E) {
        return [
          s + E * v,
          l + E * w,
          u * Math.exp(t * E * k)
        ];
      };
    else {
      var g = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * g), y = (f * f - u * u - r * b) / (2 * f * n * g), _ = Math.log(Math.sqrt(C * C + 1) - C), S = Math.log(Math.sqrt(y * y + 1) - y);
      k = (S - _) / t, x = function(E) {
        var V = E * k, P = ll(_), D = u / (n * g) * (P * cg(t * V + _) - ug(_));
        return [
          s + D * v,
          l + D * w,
          u * P / ll(t * V + _)
        ];
      };
    }
    return x.duration = k * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Nr = 0, eo = 0, Ur = 0, Qu = 1e3, hi, to, gi = 0, ur = 0, Bi = 0, yo = typeof performance == "object" && performance.now ? performance : Date, ec = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function cs() {
  return ur || (ec(fg), ur = yo.now() + Bi);
}
function fg() {
  ur = 0;
}
function pi() {
  this._call = this._time = this._next = null;
}
pi.prototype = tc.prototype = {
  constructor: pi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? cs() : +n) + (t == null ? 0 : +t), !this._next && to !== this && (to ? to._next = this : hi = this, to = this), this._call = e, this._time = n, Ma();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ma());
  }
};
function tc(e, t, n) {
  var r = new pi();
  return r.restart(e, t, n), r;
}
function vg() {
  cs(), ++Nr;
  for (var e = hi, t; e; )
    (t = ur - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Nr;
}
function ul() {
  ur = (gi = yo.now()) + Bi, Nr = eo = 0;
  try {
    vg();
  } finally {
    Nr = 0, gg(), ur = 0;
  }
}
function hg() {
  var e = yo.now(), t = e - gi;
  t > Qu && (Bi -= t, gi = e);
}
function gg() {
  for (var e, t = hi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : hi = n);
  to = e, Ma(r);
}
function Ma(e) {
  if (!Nr) {
    eo && (eo = clearTimeout(eo));
    var t = e - ur;
    t > 24 ? (e < 1 / 0 && (eo = setTimeout(ul, e - yo.now() - Bi)), Ur && (Ur = clearInterval(Ur))) : (Ur || (gi = yo.now(), Ur = setInterval(hg, Qu)), Nr = 1, ec(ul));
  }
}
function cl(e, t, n) {
  var r = new pi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var pg = Ii("start", "end", "cancel", "interrupt"), mg = [], nc = 0, dl = 1, Ha = 2, Jo = 3, fl = 4, Pa = 5, Qo = 6;
function Ri(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  yg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: pg,
    tween: mg,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: nc
  });
}
function ds(e, t) {
  var n = fn(e, t);
  if (n.state > nc) throw new Error("too late; already scheduled");
  return n;
}
function Sn(e, t) {
  var n = fn(e, t);
  if (n.state > Jo) throw new Error("too late; already running");
  return n;
}
function fn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function yg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = tc(i, 0, n.time);
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
    }), n.state = Ha, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ha) {
      for (n.state = Jo, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Pa, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Pa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
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
      o = r.state > Ha && r.state < Pa, r.state = Qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function wg(e) {
  return this.each(function() {
    ei(this, e);
  });
}
function bg(e, t) {
  var n, r;
  return function() {
    var o = Sn(this, e), i = o.tween;
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
function xg(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Sn(this, e), a = i.tween;
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
function $g(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = fn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? bg : xg)(n, e, t));
}
function fs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Sn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return fn(o, r).value[t];
  };
}
function rc(e, t) {
  var n;
  return (typeof t == "number" ? Rn : t instanceof mo ? al : (n = mo(t)) ? (t = n, al) : rg)(e, t);
}
function Cg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function kg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function _g(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Sg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Eg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Mg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Hg(e, t) {
  var n = Zi(e), r = n === "transform" ? sg : rc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Mg : Eg)(n, r, fs(this, "attr." + e, t)) : t == null ? (n.local ? kg : Cg)(n) : (n.local ? Sg : _g)(n, r, t));
}
function Pg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Vg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function zg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Vg(e, i)), n;
  }
  return o._value = t, o;
}
function Ng(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Pg(e, i)), n;
  }
  return o._value = t, o;
}
function Dg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? zg : Ng)(r, t));
}
function Lg(e, t) {
  return function() {
    ds(this, e).delay = +t.apply(this, arguments);
  };
}
function Tg(e, t) {
  return t = +t, function() {
    ds(this, e).delay = t;
  };
}
function Og(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Lg : Tg)(t, e)) : fn(this.node(), t).delay;
}
function Ag(e, t) {
  return function() {
    Sn(this, e).duration = +t.apply(this, arguments);
  };
}
function Ig(e, t) {
  return t = +t, function() {
    Sn(this, e).duration = t;
  };
}
function Zg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ag : Ig)(t, e)) : fn(this.node(), t).duration;
}
function Bg(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Rg(e) {
  var t = this._id;
  return arguments.length ? this.each(Bg(t, e)) : fn(this.node(), t).ease;
}
function Xg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Sn(this, e).ease = n;
  };
}
function Yg(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Xg(this._id, e));
}
function Wg(e) {
  typeof e != "function" && (e = Du(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Tn(r, this._parents, this._name, this._id);
}
function Kg(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Tn(a, this._parents, this._name, this._id);
}
function qg(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jg(e, t, n) {
  var r, o, i = qg(t) ? ds : Sn;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function Fg(e, t) {
  var n = this._id;
  return arguments.length < 2 ? fn(this.node(), n).on.on(e) : this.each(jg(n, e, t));
}
function Gg(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Ug() {
  return this.on("end.remove", Gg(this._id));
}
function Jg(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ss(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Ri(u[f], t, n, f, u, fn(c, n)));
  return new Tn(i, this._parents, t, n);
}
function Qg(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Nu(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, w = fn(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && Ri(v, t, n, b, f, w);
        i.push(f), a.push(c);
      }
  return new Tn(i, a, t, n);
}
var ep = Eo.prototype.constructor;
function tp() {
  return new ep(this._groups, this._parents);
}
function np(e, t) {
  var n, r, o;
  return function() {
    var i = zr(this, e), a = (this.style.removeProperty(e), zr(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function oc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function rp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = zr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function op(e, t, n) {
  var r, o, i;
  return function() {
    var a = zr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), zr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function ip(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = Sn(this, e), u = l.on, c = l.value[i] == null ? s || (s = oc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function ap(e, t, n) {
  var r = (e += "") == "transform" ? ag : rc;
  return t == null ? this.styleTween(e, np(e, r)).on("end.style." + e, oc(e)) : typeof t == "function" ? this.styleTween(e, op(e, r, fs(this, "style." + e, t))).each(ip(this._id, e)) : this.styleTween(e, rp(e, r, t), n).on("end.style." + e, null);
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
function hp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && vp(o)), t;
  }
  return r._value = e, r;
}
function gp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, hp(e));
}
function pp() {
  for (var e = this._name, t = this._id, n = ic(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = fn(l, t);
        Ri(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Tn(r, this._parents, e, n);
}
function mp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Sn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var yp = 0;
function Tn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ic() {
  return ++yp;
}
var Mn = Eo.prototype;
Tn.prototype = {
  constructor: Tn,
  select: Jg,
  selectAll: Qg,
  selectChild: Mn.selectChild,
  selectChildren: Mn.selectChildren,
  filter: Wg,
  merge: Kg,
  selection: tp,
  transition: pp,
  call: Mn.call,
  nodes: Mn.nodes,
  node: Mn.node,
  size: Mn.size,
  empty: Mn.empty,
  each: Mn.each,
  on: Fg,
  attr: Hg,
  attrTween: Dg,
  style: ap,
  styleTween: up,
  text: fp,
  textTween: gp,
  remove: Ug,
  tween: $g,
  delay: Og,
  duration: Zg,
  ease: Rg,
  easeVarying: Yg,
  end: mp,
  [Symbol.iterator]: Mn[Symbol.iterator]
};
function wp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var bp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: wp
};
function xp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function $p(e) {
  var t, n;
  e instanceof Tn ? (t = e._id, e = e._name) : (t = ic(), (n = bp).time = cs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Ri(l, e, t, u, a, n || xp(l, t));
  return new Tn(r, this._parents, e, t);
}
Eo.prototype.interrupt = wg;
Eo.prototype.transition = $p;
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
function Hn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Hn.prototype = {
  constructor: Hn,
  scale: function(e) {
    return e === 1 ? this : new Hn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Hn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Xi = new Hn(1, 0, 0);
ac.prototype = Hn.prototype;
function ac(e) {
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
function Ep() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Mp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function sc() {
  var e = kp, t = _p, n = Mp, r = Sp, o = Ep, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = dg, u = Ii("start", "zoom", "end"), c, d, f, v = 500, w = 150, b = 0, x = 10;
  function k(M) {
    M.property("__zoom", vl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", P).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(M, z, $, H) {
    var N = M.selection ? M.selection() : M;
    N.property("__zoom", vl), M !== N ? _(M, z, $, H) : N.interrupt().each(function() {
      S(this, arguments).event(H).start().zoom(null, typeof z == "function" ? z.apply(this, arguments) : z).end();
    });
  }, k.scaleBy = function(M, z, $, H) {
    k.scaleTo(M, function() {
      var N = this.__zoom.k, O = typeof z == "function" ? z.apply(this, arguments) : z;
      return N * O;
    }, $, H);
  }, k.scaleTo = function(M, z, $, H) {
    k.transform(M, function() {
      var N = t.apply(this, arguments), O = this.__zoom, Z = $ == null ? y(N) : typeof $ == "function" ? $.apply(this, arguments) : $, K = O.invert(Z), j = typeof z == "function" ? z.apply(this, arguments) : z;
      return n(C(g(O, j), Z, K), N, a);
    }, $, H);
  }, k.translateBy = function(M, z, $, H) {
    k.transform(M, function() {
      return n(this.__zoom.translate(
        typeof z == "function" ? z.apply(this, arguments) : z,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), a);
    }, null, H);
  }, k.translateTo = function(M, z, $, H, N) {
    k.transform(M, function() {
      var O = t.apply(this, arguments), Z = this.__zoom, K = H == null ? y(O) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(Xi.translate(K[0], K[1]).scale(Z.k).translate(
        typeof z == "function" ? -z.apply(this, arguments) : -z,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), O, a);
    }, H, N);
  };
  function g(M, z) {
    return z = Math.max(i[0], Math.min(i[1], z)), z === M.k ? M : new Hn(z, M.x, M.y);
  }
  function C(M, z, $) {
    var H = z[0] - $[0] * M.k, N = z[1] - $[1] * M.k;
    return H === M.x && N === M.y ? M : new Hn(M.k, H, N);
  }
  function y(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function _(M, z, $, H) {
    M.on("start.zoom", function() {
      S(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var N = this, O = arguments, Z = S(N, O).event(H), K = t.apply(N, O), j = $ == null ? y(K) : typeof $ == "function" ? $.apply(N, O) : $, le = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), J = N.__zoom, Y = typeof z == "function" ? z.apply(N, O) : z, re = l(J.invert(j).concat(le / J.k), Y.invert(j).concat(le / Y.k));
      return function(me) {
        if (me === 1) me = Y;
        else {
          var Ce = re(me), de = le / Ce[2];
          me = new Hn(de, j[0] - Ce[0] * de, j[1] - Ce[1] * de);
        }
        Z.zoom(null, me);
      };
    });
  }
  function S(M, z, $) {
    return !$ && M.__zooming || new E(M, z);
  }
  function E(M, z) {
    this.that = M, this.args = z, this.active = 0, this.sourceEvent = null, this.extent = t.apply(M, z), this.taps = 0;
  }
  E.prototype = {
    event: function(M) {
      return M && (this.sourceEvent = M), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(M, z) {
      return this.mouse && M !== "mouse" && (this.mouse[1] = z.invert(this.mouse[0])), this.touch0 && M !== "touch" && (this.touch0[1] = z.invert(this.touch0[0])), this.touch1 && M !== "touch" && (this.touch1[1] = z.invert(this.touch1[0])), this.that.__zoom = z, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(M) {
      var z = Gt(this.that).datum();
      u.call(
        M,
        this.that,
        new Cp(M, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        z
      );
    }
  };
  function V(M, ...z) {
    if (!e.apply(this, arguments)) return;
    var $ = S(this, z).event(M), H = this.__zoom, N = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), O = on(M);
    if ($.wheel)
      ($.mouse[0][0] !== O[0] || $.mouse[0][1] !== O[1]) && ($.mouse[1] = H.invert($.mouse[0] = O)), clearTimeout($.wheel);
    else {
      if (H.k === N) return;
      $.mouse = [O, H.invert(O)], ei(this), $.start();
    }
    Jr(M), $.wheel = setTimeout(Z, w), $.zoom("mouse", n(C(g(H, N), $.mouse[0], $.mouse[1]), $.extent, a));
    function Z() {
      $.wheel = null, $.end();
    }
  }
  function P(M, ...z) {
    if (f || !e.apply(this, arguments)) return;
    var $ = M.currentTarget, H = S(this, z, !0).event(M), N = Gt(M.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", le, !0), O = on(M, $), Z = M.clientX, K = M.clientY;
    Yu(M.view), sa(M), H.mouse = [O, this.__zoom.invert(O)], ei(this), H.start();
    function j(J) {
      if (Jr(J), !H.moved) {
        var Y = J.clientX - Z, re = J.clientY - K;
        H.moved = Y * Y + re * re > b;
      }
      H.event(J).zoom("mouse", n(C(H.that.__zoom, H.mouse[0] = on(J, $), H.mouse[1]), H.extent, a));
    }
    function le(J) {
      N.on("mousemove.zoom mouseup.zoom", null), Wu(J.view, H.moved), Jr(J), H.event(J).end();
    }
  }
  function D(M, ...z) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, H = on(M.changedTouches ? M.changedTouches[0] : M, this), N = $.invert(H), O = $.k * (M.shiftKey ? 0.5 : 2), Z = n(C(g($, O), H, N), t.apply(this, z), a);
      Jr(M), s > 0 ? Gt(this).transition().duration(s).call(_, Z, H, M) : Gt(this).call(k.transform, Z, H, M);
    }
  }
  function A(M, ...z) {
    if (e.apply(this, arguments)) {
      var $ = M.touches, H = $.length, N = S(this, z, M.changedTouches.length === H).event(M), O, Z, K, j;
      for (sa(M), Z = 0; Z < H; ++Z)
        K = $[Z], j = on(K, this), j = [j, this.__zoom.invert(j), K.identifier], N.touch0 ? !N.touch1 && N.touch0[2] !== j[2] && (N.touch1 = j, N.taps = 0) : (N.touch0 = j, O = !0, N.taps = 1 + !!c);
      c && (c = clearTimeout(c)), O && (N.taps < 2 && (d = j[0], c = setTimeout(function() {
        c = null;
      }, v)), ei(this), N.start());
    }
  }
  function T(M, ...z) {
    if (this.__zooming) {
      var $ = S(this, z).event(M), H = M.changedTouches, N = H.length, O, Z, K, j;
      for (Jr(M), O = 0; O < N; ++O)
        Z = H[O], K = on(Z, this), $.touch0 && $.touch0[2] === Z.identifier ? $.touch0[0] = K : $.touch1 && $.touch1[2] === Z.identifier && ($.touch1[0] = K);
      if (Z = $.that.__zoom, $.touch1) {
        var le = $.touch0[0], J = $.touch0[1], Y = $.touch1[0], re = $.touch1[1], me = (me = Y[0] - le[0]) * me + (me = Y[1] - le[1]) * me, Ce = (Ce = re[0] - J[0]) * Ce + (Ce = re[1] - J[1]) * Ce;
        Z = g(Z, Math.sqrt(me / Ce)), K = [(le[0] + Y[0]) / 2, (le[1] + Y[1]) / 2], j = [(J[0] + re[0]) / 2, (J[1] + re[1]) / 2];
      } else if ($.touch0) K = $.touch0[0], j = $.touch0[1];
      else return;
      $.zoom("touch", n(C(Z, K, j), $.extent, a));
    }
  }
  function B(M, ...z) {
    if (this.__zooming) {
      var $ = S(this, z).event(M), H = M.changedTouches, N = H.length, O, Z;
      for (sa(M), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), O = 0; O < N; ++O)
        Z = H[O], $.touch0 && $.touch0[2] === Z.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Z.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Z = on(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < x)) {
        var K = Gt(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(M) {
    return arguments.length ? (r = typeof M == "function" ? M : Ko(+M), k) : r;
  }, k.filter = function(M) {
    return arguments.length ? (e = typeof M == "function" ? M : Ko(!!M), k) : e;
  }, k.touchable = function(M) {
    return arguments.length ? (o = typeof M == "function" ? M : Ko(!!M), k) : o;
  }, k.extent = function(M) {
    return arguments.length ? (t = typeof M == "function" ? M : Ko([[+M[0][0], +M[0][1]], [+M[1][0], +M[1][1]]]), k) : t;
  }, k.scaleExtent = function(M) {
    return arguments.length ? (i[0] = +M[0], i[1] = +M[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(M) {
    return arguments.length ? (a[0][0] = +M[0][0], a[1][0] = +M[1][0], a[0][1] = +M[0][1], a[1][1] = +M[1][1], k) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, k.constrain = function(M) {
    return arguments.length ? (n = M, k) : n;
  }, k.duration = function(M) {
    return arguments.length ? (s = +M, k) : s;
  }, k.interpolate = function(M) {
    return arguments.length ? (l = M, k) : l;
  }, k.on = function() {
    var M = u.on.apply(u, arguments);
    return M === u ? k : M;
  }, k.clickDistance = function(M) {
    return arguments.length ? (b = (M = +M) * M, k) : Math.sqrt(b);
  }, k.tapDistance = function(M) {
    return arguments.length ? (x = +M, k) : x;
  }, k;
}
const Dr = {
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
var cr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(cr || (cr = {}));
var qn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(qn || (qn = {}));
var yi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(yi || (yi = {}));
const Va = {
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
const hl = {
  [_e.Left]: _e.Right,
  [_e.Right]: _e.Left,
  [_e.Top]: _e.Bottom,
  [_e.Bottom]: _e.Top
};
function Hp(e, t) {
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
function gl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Pp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Vp = (e) => "id" in e && "source" in e && "target" in e, zp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), vs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ho = (e, t = [0, 0]) => {
  const { width: n, height: r } = er(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Np = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
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
}, Po = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = wi(r);
      n = Yi(n, o);
    }
  }), Wi(n);
}, lc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...Vo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, w = c.height ?? u.height ?? u.initialHeight ?? null, b = bo(s, Tr(u)), x = (v ?? 0) * (w ?? 0), k = i && b > 0;
    (!u.internals.handleBounds || k || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, za = (e, t) => {
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
  const s = Po(e), l = gs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Dp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", Dr.error005());
    else {
      const v = s.measured.width, w = s.measured.height;
      v && w && (d = [
        [l, u],
        [l + v, u + w]
      ]);
    }
  else s && Or(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const f = Or(d) ? dr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", Dr.error015())), {
    position: {
      x: f.x - l + (a.measured.width ?? 0) * c[0],
      y: f.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function uc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), v = !f && d.parentId && a.find((w) => w.id === d.parentId);
    (f || v) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = za(a, l);
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
const Lr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Lr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Lr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function cc(e, t, n) {
  const { width: r, height: o } = er(n), { x: i, y: a } = n.internals.positionAbsolute;
  return dr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const yl = (e, t, n) => e < t ? Lr(Math.abs(e - t), 1, t) / t : e > n ? -Lr(Math.abs(e - n), 1, t) / t : 0, dc = (e, t, n = 15, r = 40) => {
  const o = yl(e.x, r, t.width - r) * n, i = yl(e.y, r, t.height - r) * n;
  return [o, i];
}, Yi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Na = ({ x: e, y: t, width: n, height: r }) => ({
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
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Ho(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, wi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = vs(e) ? e.internals.positionAbsolute : Ho(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, fc = (e, t) => Wi(Yi(Na(e), Na(t))), bo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, wl = (e) => Pn(e.width) && Pn(e.height) && Pn(e.x) && Pn(e.y), Pn = (e) => !isNaN(e) && isFinite(e), Lp = (e, t) => {
}, hs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Vo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? hs(s, a) : s;
}, vc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), gs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = Lr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, bi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Or(e) {
  return e !== void 0 && e !== "parent";
}
function er(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function hc(e) {
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
  const { x: i, y: a } = Nn(e), s = Vo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? hs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const ps = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Op = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Ap = ["INPUT", "SELECT", "TEXTAREA"];
function Ip(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Ap.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const gc = (e) => "clientX" in e, Nn = (e, t) => {
  var n, r;
  const o = gc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, bl = (e, t, n, r, o) => {
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
function xl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
function pc({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, curvature: a = 0.25 }) {
  const [s, l] = xl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = xl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [d, f, v, w] = Zp({
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
    w
  ];
}
function mc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  return bo(a, Wi(i)) > 0;
}
const Xp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Yp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Wp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Vp(e) ? n = { ...e } : n = {
    ...e,
    id: Xp(e)
  }, Yp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Da({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = mc({
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
  let v = [], w, b;
  const x = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [g, C, y, _] = mc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    w = o.x ?? g, b = o.y ?? C;
    const S = [
      { x: w, y: l.y },
      { x: w, y: u.y }
    ], E = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? S : E : v = d === "x" ? E : S;
  } else {
    const S = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? E : S : v = a.y === f ? S : E, t === r) {
      const T = Math.abs(e[d] - n[d]);
      if (T <= i) {
        const B = Math.min(i - 1, i - T);
        a[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * B : k[d] = (u[d] > n[d] ? -1 : 1) * B;
      }
    }
    if (t !== r) {
      const T = d === "x" ? "y" : "x", B = a[d] === s[T], M = l[T] > u[T], z = l[T] < u[T];
      (a[d] === 1 && (!B && M || B && z) || a[d] !== 1 && (!B && z || B && M)) && (v = d === "x" ? S : E);
    }
    const V = { x: l.x + x.x, y: l.y + x.y }, P = { x: u.x + k.x, y: u.y + k.y }, D = Math.max(Math.abs(V.x - v[0].x), Math.abs(P.x - v[0].x)), A = Math.max(Math.abs(V.y - v[0].y), Math.abs(P.y - v[0].y));
    D >= A ? (w = (V.x + P.x) / 2, b = v[0].y) : (w = v[0].x, b = (V.y + P.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], w, b, y, _];
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
function xi({ sourceX: e, sourceY: t, sourcePosition: n = _e.Bottom, targetX: r, targetY: o, targetPosition: i = _e.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, w] = qp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, k) => {
    let g = "";
    return k > 0 && k < c.length - 1 ? g = jp(c[k - 1], x, c[k + 1], a) : g = `${k === 0 ? "M" : "L"}${x.x} ${x.y}`, b += g, b;
  }, ""), d, f, v, w];
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
    e.connectionMode === cr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", Dr.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || _e.Bottom, u = (s == null ? void 0 : s.position) || _e.Top, c = xo(n, a, l), d = xo(r, s, u);
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
function xo(e, t, n = _e.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? er(e);
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
function La(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Gp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = La(l, t);
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
      const i = Ho(o, r.nodeOrigin), a = Or(o.extent) ? o.extent : r.nodeExtent, s = dr(i, a, er(o));
      o.internals.positionAbsolute = s;
    }
}
function yc(e, t, n, r) {
  var o, i;
  const a = ys(Jp, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Ho(u, a.nodeOrigin), f = Or(u.extent) ? u.extent : a.nodeExtent, v = dr(d, f, er(u));
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
          z: wc(u, l),
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
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = t0(e, l, i, a, u), { positionAbsolute: v } = e.internals, w = c !== v.x || d !== v.y;
  (w || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: c, y: d } : v,
      z: f
    }
  });
}
function wc(e, t) {
  return (Pn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function t0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = er(e), l = Ho(e, n), u = Or(e.extent) ? dr(l, e.extent, s) : l;
  let c = dr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = cc(c, s, t));
  const d = wc(e, o), f = t.internals.z ?? 0;
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Tr(l), c = fc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = er(l), v = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), k = Math.max(f.height, Math.round(s.height)), g = (x - f.width) * v[0], C = (k - f.height) * v[1];
    (w > 0 || b > 0 || g || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + g,
        y: l.position.y - b + C
      }
    }), (c = n.get(u)) == null || c.forEach((y) => {
      e.some((_) => _.id === y.id) || i.push({
        id: y.id,
        type: "position",
        position: {
          x: y.position.x + w,
          y: y.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || w || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (w ? v[0] * w - g : 0),
        height: k + (b ? v[1] * b - C : 0)
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
    const w = ps(f.nodeElement), b = v.measured.width !== w.width || v.measured.height !== w.height;
    if (w.width && w.height && (b || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), k = Or(v.extent) ? v.extent : i;
      let { positionAbsolute: g } = v.internals;
      v.parentId && v.extent === "parent" ? g = cc(g, w, t.get(v.parentId)) : k && (g = dr(g, k, w));
      const C = {
        ...v,
        measured: w,
        internals: {
          ...v.internals,
          positionAbsolute: g,
          handleBounds: {
            source: bl("source", f.nodeElement, x, c, v.id),
            target: bl("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, C), v.parentId && ws(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: w
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Tr(C, o)
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
function El(e, t, n, r, o, i) {
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
function bc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    El("source", l, c, e, o, a), El("target", l, u, e, i, s), t.set(r.id, r);
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
function Ml(e, t, n) {
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
  function w({ noDragClassName: x, handleSelector: k, domNode: g, isSelectable: C, nodeId: y, nodeClickDistance: _ = 0 }) {
    f = Gt(g);
    function S({ x: D, y: A }, T) {
      const { nodeLookup: B, nodeExtent: M, snapGrid: z, snapToGrid: $, nodeOrigin: H, onNodeDrag: N, onSelectionDrag: O, onError: Z, updateNodePositions: K } = t();
      i = { x: D, y: A };
      let j = !1, le = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && M) {
        const J = Po(s);
        le = Na(J);
      }
      for (const [J, Y] of s) {
        if (!B.has(J))
          continue;
        let re = { x: D - Y.distance.x, y: A - Y.distance.y };
        $ && (re = hs(re, z));
        let me = [
          [M[0][0], M[0][1]],
          [M[1][0], M[1][1]]
        ];
        if (s.size > 1 && M && !Y.extent) {
          const { positionAbsolute: ve } = Y.internals, oe = ve.x - le.x + M[0][0], ge = ve.x + Y.measured.width - le.x2 + M[1][0], Ye = ve.y - le.y + M[0][1], Ze = ve.y + Y.measured.height - le.y2 + M[1][1];
          me = [
            [oe, Ye],
            [ge, Ze]
          ];
        }
        const { position: Ce, positionAbsolute: de } = Dp({
          nodeId: J,
          nextPosition: re,
          nodeLookup: B,
          nodeExtent: me,
          nodeOrigin: H,
          onError: Z
        });
        j = j || Y.position.x !== Ce.x || Y.position.y !== Ce.y, Y.position = Ce, Y.internals.positionAbsolute = de;
      }
      if (j && (K(s, !0), T && (r || N || !y && O))) {
        const [J, Y] = ua({
          nodeId: y,
          dragItems: s,
          nodeLookup: B
        });
        r == null || r(T, s, J, Y), N == null || N(T, J, Y), y || O == null || O(T, Y);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: D, panBy: A, autoPanSpeed: T, autoPanOnNodeDrag: B } = t();
      if (!B) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [M, z] = dc(u, c, T);
      (M !== 0 || z !== 0) && (i.x = (i.x ?? 0) - M / D[2], i.y = (i.y ?? 0) - z / D[2], await A({ x: M, y: z }) && S(i, null)), a = requestAnimationFrame(E);
    }
    function V(D) {
      var A;
      const { nodeLookup: T, multiSelectionActive: B, nodesDraggable: M, transform: z, snapGrid: $, snapToGrid: H, selectNodesOnDrag: N, onNodeDragStart: O, onSelectionDragStart: Z, unselectNodesAndEdges: K } = t();
      d = !0, (!N || !C) && !B && y && ((A = T.get(y)) != null && A.selected || K()), C && N && y && (e == null || e(y));
      const j = la(D.sourceEvent, { transform: z, snapGrid: $, snapToGrid: H, containerBounds: c });
      if (i = j, s = a0(T, M, j, y), s.size > 0 && (n || O || !y && Z)) {
        const [le, J] = ua({
          nodeId: y,
          dragItems: s,
          nodeLookup: T
        });
        n == null || n(D.sourceEvent, s, le, J), O == null || O(D.sourceEvent, le, J), y || Z == null || Z(D.sourceEvent, J);
      }
    }
    const P = Ih().clickDistance(_).on("start", (D) => {
      const { domNode: A, nodeDragThreshold: T, transform: B, snapGrid: M, snapToGrid: z } = t();
      c = (A == null ? void 0 : A.getBoundingClientRect()) || null, v = !1, T === 0 && V(D), i = la(D.sourceEvent, { transform: B, snapGrid: M, snapToGrid: z, containerBounds: c }), u = Nn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: A, transform: T, snapGrid: B, snapToGrid: M, nodeDragThreshold: z, nodeLookup: $ } = t(), H = la(D.sourceEvent, { transform: T, snapGrid: B, snapToGrid: M, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !$.has(y)) && (v = !0), !v) {
        if (!l && A && d && (l = !0, E()), !d) {
          const N = H.xSnapped - (i.x ?? 0), O = H.ySnapped - (i.y ?? 0);
          Math.sqrt(N * N + O * O) > z && V(D);
        }
        (i.x !== H.xSnapped || i.y !== H.ySnapped) && s && d && (u = Nn(D.sourceEvent, c), S(H, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: A, updateNodePositions: T, onNodeDragStop: B, onSelectionDragStop: M } = t();
        if (T(s, !1), o || B || !y && M) {
          const [z, $] = ua({
            nodeId: y,
            dragItems: s,
            nodeLookup: A,
            dragging: !1
          });
          o == null || o(D.sourceEvent, s, z, $), B == null || B(D.sourceEvent, z, $), y || M == null || M(D.sourceEvent, $);
        }
      }
    }).filter((D) => {
      const A = D.target;
      return !D.button && (!x || !Ml(A, `.${x}`, g)) && (!k || Ml(A, k, g));
    });
    f.call(P);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
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
    bo(o, Tr(i)) > 0 && r.push(i);
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
      const { x: f, y: v } = xo(u, d, d.position, !0), w = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      w > t || (w < s ? (a = [{ ...d, x: f, y: v }], s = w) : w === s && a.push({ ...d, x: f, y: v }));
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
function $c(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...xo(u, d, d.position, !0) } : d;
}
function Cc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function d0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const kc = () => !0;
function f0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: w, onConnect: b, onConnectEnd: x, isValidConnection: k = kc, onReconnectEnd: g, updateConnection: C, getTransform: y, getFromHandle: _, autoPanSpeed: S }) {
  const E = Op(e.target);
  let V = 0, P;
  const { x: D, y: A } = Nn(e), T = E == null ? void 0 : E.elementFromPoint(D, A), B = Cc(i, T), M = s == null ? void 0 : s.getBoundingClientRect();
  if (!M || !B)
    return;
  const z = $c(o, B, r, l, t);
  if (!z)
    return;
  let $ = Nn(e, M), H = !1, N = null, O = !1, Z = null;
  function K() {
    if (!c || !M)
      return;
    const [Ce, de] = dc($, M, S);
    f({ x: Ce, y: de }), V = requestAnimationFrame(K);
  }
  const j = {
    ...z,
    nodeId: o,
    type: B,
    position: z.position
  }, le = l.get(o), J = {
    inProgress: !0,
    isValid: null,
    from: xo(le, j, _e.Left, !0),
    fromHandle: j,
    fromPosition: j.position,
    fromNode: le,
    to: $,
    toHandle: null,
    toPosition: hl[j.position],
    toNode: null
  };
  C(J);
  let Y = J;
  w == null || w(e, { nodeId: o, handleId: r, handleType: B });
  function re(Ce) {
    if (!_() || !j) {
      me(Ce);
      return;
    }
    const de = y();
    $ = Nn(Ce, M), P = c0(Vo($, de, !1, [1, 1]), n, l, j), H || (K(), H = !0);
    const ve = _c(Ce, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: k,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = ve.handleDomNode, N = ve.connection, O = d0(!!P, ve.isValid);
    const oe = {
      // from stays the same
      ...Y,
      isValid: O,
      to: P && O ? vc({ x: P.x, y: P.y }, de) : $,
      toHandle: ve.toHandle,
      toPosition: O && ve.toHandle ? ve.toHandle.position : hl[j.position],
      toNode: ve.toHandle ? l.get(ve.toHandle.nodeId) : null
    };
    O && P && Y.toHandle && oe.toHandle && Y.toHandle.type === oe.toHandle.type && Y.toHandle.nodeId === oe.toHandle.nodeId && Y.toHandle.id === oe.toHandle.id && Y.to.x === oe.to.x && Y.to.y === oe.to.y || (C(oe), Y = oe);
  }
  function me(Ce) {
    (P || Z) && N && O && (b == null || b(N));
    const { inProgress: de, ...ve } = Y, oe = {
      ...ve,
      toPosition: Y.toHandle ? Y.toPosition : null
    };
    x == null || x(Ce, oe), i && (g == null || g(Ce, oe)), v(), cancelAnimationFrame(V), H = !1, O = !1, N = null, Z = null, E.removeEventListener("mousemove", re), E.removeEventListener("mouseup", me), E.removeEventListener("touchmove", re), E.removeEventListener("touchend", me);
  }
  E.addEventListener("mousemove", re), E.addEventListener("mouseup", me), E.addEventListener("touchmove", re), E.addEventListener("touchend", me);
}
function _c(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = kc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: w } = Nn(e), b = a.elementFromPoint(v, w), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, k = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const g = Cc(void 0, x), C = x.getAttribute("data-nodeid"), y = x.getAttribute("data-handleid"), _ = x.classList.contains("connectable"), S = x.classList.contains("connectableend");
    if (!C || !g)
      return k;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? y : o,
      target: d ? r : C,
      targetHandle: d ? o : y
    };
    k.connection = E;
    const V = _ && S && (n === cr.Strict ? d && g === "source" || !d && g === "target" : C !== r || y !== o);
    k.isValid = V && u(E), k.toHandle = $c(C, g, y, c, n, !1);
  }
  return k;
}
const v0 = {
  onPointerDown: f0,
  isValid: _c
};
function h0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Gt(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const w = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = y[2] * Math.pow(2, _);
      t.scaleTo(S);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, k = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], S = [_[0] - b[0], _[1] - b[1]];
      b = _;
      const E = r() * Math.max(y[2], Math.log(y[2])) * (v ? -1 : 1), V = {
        x: y[0] - S[0] * E,
        y: y[1] - S[1] * E
      }, P = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: y[2]
      }, P, s);
    }, g = sc().on("start", x).on("zoom", d ? k : null).on("zoom.wheel", f ? w : null);
    o.call(g, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: on
  };
}
const g0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ki = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ca = ({ x: e, y: t, zoom: n }) => Xi.translate(e, t).scale(n), xr = (e, t) => e.target.closest(`.${t}`), Sc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), da = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Ec = (e) => {
  const t = e.ctrlKey && bi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function p0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (xr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = on(c), k = Ec(c), g = d * Math.pow(2, k);
      r.scaleTo(n, g, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === qn.Vertical ? 0 : c.deltaX * f, w = o === qn.Horizontal ? 0 : c.deltaY * f;
    !bi() && c.shiftKey && o !== qn.Vertical && (v = c.deltaY * f, w = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(w / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = Ki(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function m0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || xr(r, e))
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
    e.usedRightMouseButton = !!(n && Sc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ki(i.transform)));
  };
}
function b0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Sc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && g0(e.prevViewport, a.transform))) {
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
function x0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (xr(c, `${u}-flow__node`) || xr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || a || xr(c, s) && c.type === "wheel" || xr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && w;
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
  }, d = e.getBoundingClientRect(), f = sc().clickDistance(!Pn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = Gt(e).call(f);
  C({
    x: i.x,
    y: i.y,
    zoom: Lr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const w = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Ec);
  function x(T, B) {
    return v ? new Promise((M) => {
      f == null || f.transform(da(v, B == null ? void 0 : B.duration, () => M(!0)), T);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: T, noPanClassName: B, onPaneContextMenu: M, userSelectionActive: z, panOnScroll: $, panOnDrag: H, panOnScrollMode: N, panOnScrollSpeed: O, preventScrolling: Z, zoomOnPinch: K, zoomOnScroll: j, zoomOnDoubleClick: le, zoomActivationKeyPressed: J, lib: Y, onTransformChange: re }) {
    z && !c.isZoomingOrPanning && g();
    const me = $ && !J && !z ? p0({
      zoomPanValues: c,
      noWheelClassName: T,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: N,
      panOnScrollSpeed: O,
      zoomOnPinch: K,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : m0({
      noWheelClassName: T,
      preventScrolling: Z,
      d3ZoomHandler: w
    });
    if (v.on("wheel.zoom", me, { passive: !1 }), !z) {
      const de = y0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", de);
      const ve = w0({
        zoomPanValues: c,
        panOnDrag: H,
        onPaneContextMenu: !!M,
        onPanZoom: a,
        onTransformChange: re
      });
      f.on("zoom", ve);
      const oe = b0({
        zoomPanValues: c,
        panOnDrag: H,
        panOnScroll: $,
        onPaneContextMenu: M,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", oe);
    }
    const Ce = x0({
      zoomActivationKeyPressed: J,
      panOnDrag: H,
      zoomOnScroll: j,
      panOnScroll: $,
      zoomOnDoubleClick: le,
      zoomOnPinch: K,
      userSelectionActive: z,
      noPanClassName: B,
      noWheelClassName: T,
      lib: Y
    });
    f.filter(Ce), le ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function g() {
    f.on("zoom", null);
  }
  async function C(T, B, M) {
    const z = ca(T), $ = f == null ? void 0 : f.constrain()(z, B, M);
    return $ && await x($), new Promise((H) => H($));
  }
  async function y(T, B) {
    const M = ca(T);
    return await x(M, B), new Promise((z) => z(M));
  }
  function _(T) {
    if (v) {
      const B = ca(T), M = v.property("__zoom");
      (M.k !== T.zoom || M.x !== T.x || M.y !== T.y) && (f == null || f.transform(v, B, null, { sync: !0 }));
    }
  }
  function S() {
    const T = v ? ac(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function E(T, B) {
    return v ? new Promise((M) => {
      f == null || f.scaleTo(da(v, B == null ? void 0 : B.duration, () => M(!0)), T);
    }) : Promise.resolve(!1);
  }
  function V(T, B) {
    return v ? new Promise((M) => {
      f == null || f.scaleBy(da(v, B == null ? void 0 : B.duration, () => M(!0)), T);
    }) : Promise.resolve(!1);
  }
  function P(T) {
    f == null || f.scaleExtent(T);
  }
  function D(T) {
    f == null || f.translateExtent(T);
  }
  function A(T) {
    const B = !Pn(T) || T < 0 ? 0 : T;
    f == null || f.clickDistance(B);
  }
  return {
    update: k,
    destroy: g,
    setViewport: y,
    setViewportConstrained: C,
    getViewport: S,
    scaleTo: E,
    scaleBy: V,
    setScaleExtent: P,
    setTranslateExtent: D,
    syncViewport: _,
    setClickDistance: A
  };
}
var Hl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Hl || (Hl = {}));
var C0 = /* @__PURE__ */ ne('<div role="button" tabindex="-1"><!></div>');
function Un(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(le, "$connectable", n), i = () => U(Ce, "$connectionRadius", n), a = () => U(re, "$domNode", n), s = () => U(me, "$nodeLookup", n), l = () => U(Y, "$connectionMode", n), u = () => U(oe, "$lib", n), c = () => U(We, "$autoPanOnConnect", n), d = () => U(Ve, "$flowId", n), f = () => U(ve, "$isValidConnectionStore", n), v = () => U(Ye, "$onedgecreate", n), w = () => U(se, "$onConnectAction", n), b = () => U(ke, "$onConnectStartAction", n), x = () => U(Ke, "$onConnectEndAction", n), k = () => U(de, "$viewport", n), g = () => U(st, "$connection", n), C = () => U(Ue, "$edges", n), y = () => U(ae, "$connectionLookup", n), _ = /* @__PURE__ */ te(), S = /* @__PURE__ */ te(), E = /* @__PURE__ */ te(), V = /* @__PURE__ */ te(), P = /* @__PURE__ */ te(), D = /* @__PURE__ */ te(), A = /* @__PURE__ */ te(), T = /* @__PURE__ */ te();
  let B = m(t, "id", 12, void 0), M = m(t, "type", 12, "source"), z = m(t, "position", 28, () => _e.Top), $ = m(t, "style", 12, void 0), H = m(t, "isValidConnection", 12, void 0), N = m(t, "onconnect", 12, void 0), O = m(t, "ondisconnect", 12, void 0), Z = m(t, "isConnectable", 12, void 0), K = m(t, "class", 12, void 0);
  const j = sr("svelteflow__node_id"), le = sr("svelteflow__node_connectable"), J = Ge(), {
    connectionMode: Y,
    domNode: re,
    nodeLookup: me,
    connectionRadius: Ce,
    viewport: de,
    isValidConnection: ve,
    lib: oe,
    addEdge: ge,
    onedgecreate: Ye,
    panBy: Ze,
    cancelConnection: Be,
    updateConnection: ee,
    autoPanOnConnect: We,
    edges: Ue,
    connectionLookup: ae,
    onconnect: se,
    onconnectstart: ke,
    onconnectend: Ke,
    flowId: Ve,
    connection: st
  } = J;
  function it(Me) {
    const tt = gc(Me);
    (tt && Me.button === 0 || !tt) && v0.onPointerDown(Me, {
      handleId: h(E),
      nodeId: j,
      isTarget: h(_),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: H() ?? f(),
      updateConnection: ee,
      cancelConnection: Be,
      panBy: Ze,
      onConnect: (Oe) => {
        var Ne;
        const nt = v() ? v()(Oe) : Oe;
        nt && (ge(nt), (Ne = w()) == null || Ne(Oe));
      },
      onConnectStart: (Oe, Ne) => {
        var nt;
        (nt = b()) == null || nt(Oe, {
          nodeId: Ne.nodeId,
          handleId: Ne.handleId,
          handleType: Ne.handleType
        });
      },
      onConnectEnd: (Oe, Ne) => {
        var nt;
        (nt = x()) == null || nt(Oe, Ne);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let Q = /* @__PURE__ */ te(null), Te = /* @__PURE__ */ te();
  fe(() => G(M()), () => {
    F(_, M() === "target");
  }), fe(
    () => (G(Z()), o()),
    () => {
      F(S, Z() !== void 0 ? Z() : o());
    }
  ), fe(() => G(B()), () => {
    F(E, B() || null);
  }), fe(
    () => (G(N()), G(O()), C(), y(), G(M()), G(B())),
    () => {
      (N() || O()) && (C(), F(Te, y().get(`${j}-${M()}${B() ? `-${B()}` : ""}`)));
    }
  ), fe(
    () => (h(Q), h(Te), G(O()), G(N())),
    () => {
      if (h(Q) && !Hp(h(Te), h(Q))) {
        const Me = h(Te) ?? /* @__PURE__ */ new Map();
        gl(h(Q), Me, O()), gl(Me, h(Q), N());
      }
      F(Q, h(Te) ?? /* @__PURE__ */ new Map());
    }
  ), fe(() => g(), () => {
    F(V, !!g().fromHandle);
  }), fe(
    () => (g(), G(M()), h(E)),
    () => {
      var Me, tt, Oe;
      F(P, ((Me = g().fromHandle) == null ? void 0 : Me.nodeId) === j && ((tt = g().fromHandle) == null ? void 0 : tt.type) === M() && ((Oe = g().fromHandle) == null ? void 0 : Oe.id) === h(E));
    }
  ), fe(
    () => (g(), G(M()), h(E)),
    () => {
      var Me, tt, Oe;
      F(D, ((Me = g().toHandle) == null ? void 0 : Me.nodeId) === j && ((tt = g().toHandle) == null ? void 0 : tt.type) === M() && ((Oe = g().toHandle) == null ? void 0 : Oe.id) === h(E));
    }
  ), fe(
    () => (l(), g(), G(M()), h(E)),
    () => {
      var Me, tt, Oe;
      F(A, l() === cr.Strict ? ((Me = g().fromHandle) == null ? void 0 : Me.type) !== M() : j !== ((tt = g().fromHandle) == null ? void 0 : tt.nodeId) || h(E) !== ((Oe = g().fromHandle) == null ? void 0 : Oe.id));
    }
  ), fe(() => (h(D), g()), () => {
    F(T, h(D) && g().isValid);
  }), vt(), ze();
  var he = C0();
  ye(he, "data-nodeid", j);
  let en;
  var tn = W(he);
  pt(tn, t, "default", {}), X(he), Se(
    (Me, tt) => {
      ye(he, "data-handleid", h(E)), ye(he, "data-handlepos", z()), ye(he, "data-id", `${d() ?? ""}-${j ?? ""}-${B() || ""}-${M() ?? ""}`), en = mt(he, 1, Me, null, en, tt), dt(he, $());
    },
    [
      () => dn(Et([
        "svelte-flow__handle",
        `svelte-flow__handle-${z()}`,
        "nodrag",
        "nopan",
        z(),
        K()
      ])),
      () => ({
        valid: h(T),
        connectingto: h(D),
        connectingfrom: h(P),
        source: !h(_),
        target: h(_),
        connectablestart: h(S),
        connectableend: h(S),
        connectable: h(S),
        connectionindicator: h(S) && (!h(V) || h(A))
      })
    ],
    pe
  ), Re("mousedown", he, it), Re("touchstart", he, it), L(e, he);
  var hn = ce({
    get id() {
      return B();
    },
    set id(Me) {
      B(Me), p();
    },
    get type() {
      return M();
    },
    set type(Me) {
      M(Me), p();
    },
    get position() {
      return z();
    },
    set position(Me) {
      z(Me), p();
    },
    get style() {
      return $();
    },
    set style(Me) {
      $(Me), p();
    },
    get isValidConnection() {
      return H();
    },
    set isValidConnection(Me) {
      H(Me), p();
    },
    get onconnect() {
      return N();
    },
    set onconnect(Me) {
      N(Me), p();
    },
    get ondisconnect() {
      return O();
    },
    set ondisconnect(Me) {
      O(Me), p();
    },
    get isConnectable() {
      return Z();
    },
    set isConnectable(Me) {
      Z(Me), p();
    },
    get class() {
      return K();
    },
    set class(Me) {
      K(Me), p();
    }
  });
  return r(), hn;
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
var k0 = /* @__PURE__ */ ne("<!> <!>", 1);
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
  ze();
  var a = k0(), s = be(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Top);
  Un(s, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = I(s), c = I(u);
  const d = /* @__PURE__ */ pe(() => i() ?? _e.Bottom);
  return Un(c, {
    type: "source",
    get position() {
      return h(d);
    }
  }), Se(() => {
    var f;
    return Rt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), L(e, a), ce({
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
var _0 = /* @__PURE__ */ ne(" <!>", 1);
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
  ze(), He();
  var i = _0(), a = be(i), s = I(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Bottom);
  return Un(s, {
    type: "source",
    get position() {
      return h(l);
    }
  }), Se(() => {
    var u;
    return Rt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), ce({
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
var S0 = /* @__PURE__ */ ne(" <!>", 1);
function Hc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), ue(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  ze(), He();
  var i = S0(), a = be(i), s = I(a);
  const l = /* @__PURE__ */ pe(() => o() ?? _e.Top);
  return Un(s, {
    type: "target",
    get position() {
      return h(l);
    }
  }), Se(() => {
    var u;
    return Rt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), ce({
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
ie(Hc, { data: {}, targetPosition: {} }, [], [], !0);
function Pc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, []);
}
ie(Pc, {}, [], [], !0);
function Pl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Ci(e, { target: t, domNode: n }) {
  return Pl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Pl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var E0 = /* @__PURE__ */ ne("<div><!></div>");
function Vc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(i, "$domNode", n), { domNode: i } = Ge();
  ze();
  var a = E0(), s = W(a);
  pt(s, t, "default", {}), X(a), gt(a, (l, u) => Ci == null ? void 0 : Ci(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, a), ce(), r();
}
ie(Vc, {}, ["default"], [], !0);
function zc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = Ge();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", Dr.error012(s));
      return;
    }
    (l.selectable || q(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var M0 = /* @__PURE__ */ ne('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Nc(e, t) {
  ue(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = zc(), a = sr("svelteflow__edge_id");
  return ze(), Vc(e, {
    children: (s, l) => {
      var u = M0();
      let c;
      var d = W(u);
      pt(d, t, "default", {}), X(u), Se(() => c = dt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Re("keyup", u, () => {
      }), Re("click", u, () => {
        a && i(a);
      }), L(s, u);
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
ie(Nc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var H0 = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__edge-interaction"></path>'), P0 = /* @__PURE__ */ $e('<path fill="none"></path><!><!>', 1);
function zo(e, t) {
  ue(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  ze();
  var w = P0(), b = be(w), x = I(b);
  {
    var k = (y) => {
      var _ = H0();
      ye(_, "stroke-opacity", 0), ye(_, "stroke-width", v), Se(() => ye(_, "d", r())), L(y, _);
    };
    xe(x, (y) => {
      v && y(k);
    });
  }
  var g = I(x);
  {
    var C = (y) => {
      Nc(y, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (_, S) => {
          He();
          var E = Ie();
          Se(() => Rt(E, o())), L(_, E);
        },
        $$slots: { default: !0 }
      });
    };
    xe(g, (y) => {
      o() && y(C);
    });
  }
  return Se(
    (y) => {
      ye(b, "id", n()), ye(b, "d", r()), mt(b, 0, y), ye(b, "marker-start", l()), ye(b, "marker-end", u()), dt(b, c());
    },
    [
      () => dn(Et(["svelte-flow__edge-path", f()]))
    ],
    pe
  ), L(e, w), ce({
    get id() {
      return n();
    },
    set id(y) {
      n(y), p();
    },
    get path() {
      return r();
    },
    set path(y) {
      r(y), p();
    },
    get label() {
      return o();
    },
    set label(y) {
      o(y), p();
    },
    get labelX() {
      return i();
    },
    set labelX(y) {
      i(y), p();
    },
    get labelY() {
      return a();
    },
    set labelY(y) {
      a(y), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(y) {
      s(y), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(y) {
      l(y), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(y) {
      u(y), p();
    },
    get style() {
      return c();
    },
    set style(y) {
      c(y), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(y) {
      d(y), p();
    },
    get class() {
      return f();
    },
    set class(y) {
      f(y), p();
    }
  });
}
ie(
  zo,
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
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), k = m(t, "targetPosition", 12);
  return fe(
    () => (h(r), h(o), h(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(k())),
    () => {
      ((g) => (F(r, g[0]), F(o, g[1]), F(i, g[2])))(pc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: k()
      }));
    }
  ), vt(), ze(), zo(e, {
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
    set label(g) {
      a(g), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), p();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(g) {
      w(g), p();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), p();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), p();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(g) {
      k(g), p();
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
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), k = m(t, "targetPosition", 12);
  return fe(
    () => (h(r), h(o), h(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(k())),
    () => {
      ((g) => (F(r, g[0]), F(o, g[1]), F(i, g[2])))(xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: k()
      }));
    }
  ), vt(), ze(), zo(e, {
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
    set label(g) {
      a(g), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), p();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(g) {
      w(g), p();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), p();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), p();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(g) {
      k(g), p();
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
function Lc(e, t) {
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
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return fe(
    () => (h(r), h(o), h(i), G(f()), G(v()), G(w()), G(b())),
    () => {
      ((x) => (F(r, x[0]), F(o, x[1]), F(i, x[2])))(Da({
        sourceX: f(),
        sourceY: v(),
        targetX: w(),
        targetY: b()
      }));
    }
  ), vt(), ze(), zo(e, {
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
    set label(x) {
      a(x), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), p();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), p();
    },
    get targetX() {
      return w();
    },
    set targetX(x) {
      w(x), p();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), p();
    }
  });
}
ie(
  Lc,
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
function Tc(e, t) {
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
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), k = m(t, "targetPosition", 12);
  return fe(
    () => (h(r), h(o), h(i), G(f()), G(v()), G(b()), G(x()), G(w()), G(k())),
    () => {
      ((g) => (F(r, g[0]), F(o, g[1]), F(i, g[2])))(xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), vt(), ze(), zo(e, {
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
    set label(g) {
      a(g), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), p();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(g) {
      w(g), p();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), p();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), p();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(g) {
      k(g), p();
    }
  });
}
ie(
  Tc,
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
function V0(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function z0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const N0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let a = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, D0 = (e, t, n, r = [0, 0], o = mi) => {
  const { subscribe: i, set: a, update: s } = we([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (yc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, a(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, w = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: w
  };
}, L0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = we([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((w) => ({ ...l, ...w })) : f;
    bc(t, n, v), s = v, i(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, Oc = {
  input: Mc,
  output: Hc,
  default: $i,
  group: Pc
}, Ac = {
  straight: Lc,
  smoothstep: Dc,
  default: ki,
  step: Tc
}, T0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? mi;
  yc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), bc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const w = Po(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = gs(w, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: we(null),
    nodes: D0(e, s, l, d, f),
    nodeLookup: qt(s),
    parentLookup: qt(l),
    edgeLookup: qt(c),
    visibleNodes: qt([]),
    edges: L0(t, u, c),
    visibleEdges: qt([]),
    connectionLookup: qt(u),
    height: we(500),
    width: we(500),
    minZoom: we(0.5),
    maxZoom: we(2),
    nodeOrigin: we(d),
    nodeDragThreshold: we(1),
    nodeExtent: we(f),
    translateExtent: we(mi),
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
    selectionMode: we(yi.Partial),
    nodeTypes: we(Oc),
    edgeTypes: we(Ac),
    viewport: we(v),
    connectionMode: we(cr.Strict),
    domNode: we(null),
    connection: qt(Va),
    connectionLineType: we(_r.Bezier),
    connectionRadius: we(20),
    isValidConnection: we(() => !0),
    nodesDraggable: we(!0),
    nodesConnectable: we(!0),
    elementsSelectable: we(!0),
    selectNodesOnDrag: we(!0),
    markers: qt([]),
    defaultMarkerColor: we("#b1b1b7"),
    lib: qt("svelte"),
    onlyRenderVisibleElements: we(!1),
    onerror: we(Lp),
    ondelete: we(void 0),
    onedgecreate: we(void 0),
    onconnect: we(void 0),
    onconnectstart: we(void 0),
    onconnectend: we(void 0),
    onbeforedelete: we(void 0),
    nodesInitialized: we(!1),
    edgesInitialized: we(!1),
    viewportInitialized: we(!1),
    initialized: qt(!1)
  };
};
function O0(e) {
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
    return n ? lc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const qi = Symbol();
function Ic({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = T0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l($) {
    s.nodeTypes.set({
      ...Oc,
      ...$
    });
  }
  function u($) {
    s.edgeTypes.set({
      ...Ac,
      ...$
    });
  }
  function c($) {
    const H = q(s.edges);
    s.edges.set(Wp($, H));
  }
  const d = ($, H = !1) => {
    var N;
    const O = q(s.nodeLookup);
    for (const [Z, K] of $) {
      const j = (N = O.get(Z)) == null ? void 0 : N.internals.userNode;
      j && (j.position = K.position, j.dragging = H);
    }
    s.nodes.update((Z) => Z);
  };
  function f($) {
    var H, N, O;
    const Z = q(s.nodeLookup), K = q(s.parentLookup), { changes: j, updatedInternals: le } = r0($, Z, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (le) {
      if (Qp(Z, K, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const J = q(s.fitViewOptions), Y = w({
          ...J,
          nodes: J == null ? void 0 : J.nodes
        });
        s.fitViewOnInitDone.set(Y);
      }
      for (const J of j) {
        const Y = (H = Z.get(J.id)) == null ? void 0 : H.internals.userNode;
        if (Y)
          switch (J.type) {
            case "dimensions": {
              const re = { ...Y.measured, ...J.dimensions };
              J.setAttributes && (Y.width = ((N = J.dimensions) == null ? void 0 : N.width) ?? Y.width, Y.height = ((O = J.dimensions) == null ? void 0 : O.height) ?? Y.height), Y.measured = re;
              break;
            }
            case "position":
              Y.position = J.position ?? Y.position;
              break;
          }
      }
      s.nodes.update((J) => J), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v($) {
    const H = q(s.panZoom), N = q(s.domNode);
    if (!H || !N)
      return Promise.resolve(!1);
    const { width: O, height: Z } = ps(N), K = pl(q(s.nodeLookup), $);
    return ml({
      nodes: K,
      width: O,
      height: Z,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: H
    }, $);
  }
  function w($) {
    const H = q(s.panZoom);
    if (!H)
      return !1;
    const N = pl(q(s.nodeLookup), $);
    return ml({
      nodes: N,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: H
    }, $), N.size > 0;
  }
  function b($, H) {
    const N = q(s.panZoom);
    return N ? N.scaleBy($, H) : Promise.resolve(!1);
  }
  function x($) {
    return b(1.2, $);
  }
  function k($) {
    return b(1 / 1.2, $);
  }
  function g($) {
    const H = q(s.panZoom);
    H && (H.setScaleExtent([$, q(s.maxZoom)]), s.minZoom.set($));
  }
  function C($) {
    const H = q(s.panZoom);
    H && (H.setScaleExtent([q(s.minZoom), $]), s.maxZoom.set($));
  }
  function y($) {
    const H = q(s.panZoom);
    H && (H.setTranslateExtent($), s.translateExtent.set($));
  }
  function _($) {
    let H = !1;
    return $.forEach((N) => {
      N.selected && (N.selected = !1, H = !0);
    }), H;
  }
  function S($) {
    var H;
    (H = q(s.panZoom)) == null || H.setClickDistance($);
  }
  function E($) {
    _(($ == null ? void 0 : $.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), _(($ == null ? void 0 : $.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var H;
    if ($) {
      const N = q(s.nodes), O = q(s.edges), Z = N.filter((J) => J.selected), K = O.filter((J) => J.selected), { nodes: j, edges: le } = await uc({
        nodesToRemove: Z,
        edgesToRemove: K,
        nodes: N,
        edges: O,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (j.length || le.length) && (s.nodes.update((J) => J.filter((Y) => !j.some((re) => re.id === Y.id))), s.edges.update((J) => J.filter((Y) => !le.some((re) => re.id === Y.id))), (H = q(s.ondelete)) == null || H({
        nodes: j,
        edges: le
      }));
    }
  });
  function V($) {
    const H = q(s.multiselectionKeyPressed);
    s.nodes.update((N) => N.map((O) => {
      const Z = $.includes(O.id), K = H && O.selected || Z;
      return O.selected = K, O;
    })), H || s.edges.update((N) => N.map((O) => (O.selected = !1, O)));
  }
  function P($) {
    const H = q(s.multiselectionKeyPressed);
    s.edges.update((N) => N.map((O) => {
      const Z = $.includes(O.id), K = H && O.selected || Z;
      return O.selected = K, O;
    })), H || s.nodes.update((N) => N.map((O) => (O.selected = !1, O)));
  }
  function D($) {
    var H;
    const N = (H = q(s.nodes)) == null ? void 0 : H.find((O) => O.id === $);
    if (!N) {
      console.warn("012", Dr.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), N.selected ? N.selected && q(s.multiselectionKeyPressed) && E({ nodes: [N], edges: [] }) : V([$]);
  }
  function A($) {
    const H = q(s.viewport);
    return o0({
      delta: $,
      panZoom: q(s.panZoom),
      transform: [H.x, H.y, H.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const T = we(Va), B = ($) => {
    T.set({ ...$ });
  };
  function M() {
    T.set(Va);
  }
  function z() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), E(), M();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: O0(s),
    visibleNodes: A0(s),
    connection: Kn([T, s.viewport], ([$, H]) => $.inProgress ? {
      ...$,
      to: Vo($.to, [H.x, H.y, H.zoom])
    } : { ...$ }),
    markers: Kn([s.edges, s.defaultMarkerColor, s.flowId], ([$, H, N]) => Gp($, { defaultColor: H, id: N })),
    initialized: (() => {
      let $ = !1;
      const H = q(s.nodes).length, N = q(s.edges).length;
      return Kn([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([O, Z, K]) => $ || (H === 0 ? $ = K : N === 0 ? $ = K && O : $ = K && O && Z, $));
    })(),
    // actions
    syncNodeStores: ($) => V0(s.nodes, $),
    syncEdgeStores: ($) => z0(s.edges, $),
    syncViewport: ($) => N0(s.panZoom, s.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: k,
    fitView: ($) => v($),
    setMinZoom: g,
    setMaxZoom: C,
    setTranslateExtent: y,
    setPaneClickDistance: S,
    unselectNodesAndEdges: E,
    addSelectedNodes: V,
    addSelectedEdges: P,
    handleNodeSelection: D,
    panBy: A,
    updateConnection: B,
    cancelConnection: M,
    reset: z
  };
}
function Ge() {
  const e = sr(qi);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function I0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Ic({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Vr(qi, {
    getStore: () => s
  }), s;
}
function Vl(e, t) {
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
var Z0 = /* @__PURE__ */ ne('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const B0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Zc(e, t) {
  ue(t, !1), Qe(e, B0);
  const [n, r] = ot(), o = () => U(N, "$panActivationKeyPressed", n), i = () => U(B, "$minZoom", n), a = () => U(M, "$maxZoom", n), s = () => U(O, "$zoomActivationKeyPressed", n), l = () => U(T, "$selectionRect", n), u = () => U($, "$translateExtent", n), c = () => U(H, "$lib", n), d = /* @__PURE__ */ te(), f = /* @__PURE__ */ te(), v = /* @__PURE__ */ te();
  let w = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), x = m(t, "onMove", 12, void 0), k = m(t, "onMoveEnd", 12, void 0), g = m(t, "panOnScrollMode", 12), C = m(t, "preventScrolling", 12), y = m(t, "zoomOnScroll", 12), _ = m(t, "zoomOnDoubleClick", 12), S = m(t, "zoomOnPinch", 12), E = m(t, "panOnDrag", 12), V = m(t, "panOnScroll", 12), P = m(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: A,
    selectionRect: T,
    minZoom: B,
    maxZoom: M,
    dragging: z,
    translateExtent: $,
    lib: H,
    panActivationKeyPressed: N,
    zoomActivationKeyPressed: O,
    viewportInitialized: Z
  } = Ge(), K = (Y) => D.set({
    x: Y[0],
    y: Y[1],
    zoom: Y[2]
  });
  Wt(() => {
    ci(Z, !0);
  }), fe(() => G(w()), () => {
    F(d, w() || { x: 0, y: 0, zoom: 1 });
  }), fe(
    () => (o(), G(E())),
    () => {
      F(f, o() || E());
    }
  ), fe(
    () => (o(), G(V())),
    () => {
      F(v, o() || V());
    }
  ), vt(), ze();
  var j = Z0(), le = W(j);
  pt(le, t, "default", {}), X(j), gt(j, (Y, re) => Vl == null ? void 0 : Vl(Y, re), () => ({
    viewport: D,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: h(d),
    dragging: z,
    panZoom: A,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: k(),
    zoomOnScroll: y(),
    zoomOnDoubleClick: _(),
    zoomOnPinch: S(),
    panOnScroll: h(v),
    panOnDrag: h(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: g() || qn.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: P(),
    onTransformChange: K
  })), L(e, j);
  var J = ce({
    get initialViewport() {
      return w();
    },
    set initialViewport(Y) {
      w(Y), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(Y) {
      b(Y), p();
    },
    get onMove() {
      return x();
    },
    set onMove(Y) {
      x(Y), p();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(Y) {
      k(Y), p();
    },
    get panOnScrollMode() {
      return g();
    },
    set panOnScrollMode(Y) {
      g(Y), p();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(Y) {
      C(Y), p();
    },
    get zoomOnScroll() {
      return y();
    },
    set zoomOnScroll(Y) {
      y(Y), p();
    },
    get zoomOnDoubleClick() {
      return _();
    },
    set zoomOnDoubleClick(Y) {
      _(Y), p();
    },
    get zoomOnPinch() {
      return S();
    },
    set zoomOnPinch(Y) {
      S(Y), p();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(Y) {
      E(Y), p();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(Y) {
      V(Y), p();
    },
    get paneClickDistance() {
      return P();
    },
    set paneClickDistance(Y) {
      P(Y), p();
    }
  });
  return r(), J;
}
ie(
  Zc,
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
function zl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Nl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var R0 = /* @__PURE__ */ ne("<div><!></div>");
const X0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Bc(e, t) {
  ue(t, !1), Qe(e, X0);
  const [n, r] = ot(), o = () => U(M, "$panActivationKeyPressed", n), i = () => U(T, "$selectionKeyPressed", n), a = () => U(D, "$selectionRect", n), s = () => U(P, "$elementsSelectable", n), l = () => U(A, "$selectionRectMode", n), u = () => U(S, "$edges", n), c = () => U(_, "$nodeLookup", n), d = () => U(E, "$viewport", n), f = () => U(B, "$selectionMode", n), v = () => U(V, "$dragging", n), w = /* @__PURE__ */ te(), b = /* @__PURE__ */ te(), x = /* @__PURE__ */ te();
  let k = m(t, "panOnDrag", 12, void 0), g = m(t, "selectionOnDrag", 12, void 0);
  const C = Ai(), {
    nodes: y,
    nodeLookup: _,
    edges: S,
    viewport: E,
    dragging: V,
    elementsSelectable: P,
    selectionRect: D,
    selectionRectMode: A,
    selectionKeyPressed: T,
    selectionMode: B,
    panActivationKeyPressed: M,
    unselectNodesAndEdges: z
  } = Ge();
  let $ = /* @__PURE__ */ te(), H = null, N = [], O = !1;
  function Z(oe) {
    if (O) {
      O = !1;
      return;
    }
    C("paneclick", { event: oe }), z(), A.set(null);
  }
  function K(oe) {
    var ge, Ye;
    if (H = h($).getBoundingClientRect(), !P || !h(b) || oe.button !== 0 || oe.target !== h($) || !H)
      return;
    (Ye = (ge = oe.target) == null ? void 0 : ge.setPointerCapture) == null || Ye.call(ge, oe.pointerId);
    const { x: Ze, y: Be } = Nn(oe, H);
    z(), D.set({
      width: 0,
      height: 0,
      startX: Ze,
      startY: Be,
      x: Ze,
      y: Be
    });
  }
  function j(oe) {
    if (!h(b) || !H || !a())
      return;
    O = !0;
    const ge = Nn(oe, H), Ye = a().startX ?? 0, Ze = a().startY ?? 0, Be = {
      ...a(),
      x: ge.x < Ye ? ge.x : Ye,
      y: ge.y < Ze ? ge.y : Ze,
      width: Math.abs(ge.x - Ye),
      height: Math.abs(ge.y - Ze)
    }, ee = N.map((se) => se.id), We = za(N, u()).map((se) => se.id);
    N = lc(
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
    const Ue = za(N, u()).map((se) => se.id), ae = N.map((se) => se.id);
    (ee.length !== ae.length || ae.some((se) => !ee.includes(se))) && y.update((se) => se.map(Nl(ae))), (We.length !== Ue.length || Ue.some((se) => !We.includes(se))) && S.update((se) => se.map(Nl(Ue))), A.set("user"), D.set(Be);
  }
  function le(oe) {
    var ge, Ye;
    oe.button === 0 && ((Ye = (ge = oe.target) == null ? void 0 : ge.releasePointerCapture) == null || Ye.call(ge, oe.pointerId), !h(b) && l() === "user" && oe.target === h($) && (Z == null || Z(oe)), D.set(null), N.length > 0 && ci(A, "nodes"), i() && (O = !1));
  }
  const J = (oe) => {
    var ge;
    if (Array.isArray(h(w)) && (ge = h(w)) != null && ge.includes(2)) {
      oe.preventDefault();
      return;
    }
    C("panecontextmenu", { event: oe });
  };
  fe(
    () => (o(), G(k())),
    () => {
      F(w, o() || k());
    }
  ), fe(
    () => (i(), a(), G(g()), h(w)),
    () => {
      F(b, i() || a() || g() && h(w) !== !0);
    }
  ), fe(
    () => (s(), h(b), l()),
    () => {
      F(x, s() && (h(b) || l() === "user"));
    }
  ), vt(), ze();
  var Y = R0(), re = /* @__PURE__ */ Pe(() => h(x) ? void 0 : zl(Z, h($))), me = /* @__PURE__ */ Pe(() => zl(J, h($)));
  let Ce;
  var de = W(Y);
  pt(de, t, "default", {}), X(Y), $n(Y, (oe) => F($, oe), () => h($)), Se(
    (oe) => Ce = mt(Y, 1, "svelte-flow__pane svelte-1esy7hx", null, Ce, oe),
    [
      () => ({
        draggable: k() === !0 || Array.isArray(k()) && k().includes(0),
        dragging: v(),
        selection: h(b)
      })
    ],
    pe
  ), Re("click", Y, function(...oe) {
    var ge;
    (ge = h(re)) == null || ge.apply(this, oe);
  }), Re("pointerdown", Y, function(...oe) {
    var ge;
    (ge = h(x) ? K : void 0) == null || ge.apply(this, oe);
  }), Re("pointermove", Y, function(...oe) {
    var ge;
    (ge = h(x) ? j : void 0) == null || ge.apply(this, oe);
  }), Re("pointerup", Y, function(...oe) {
    var ge;
    (ge = h(x) ? le : void 0) == null || ge.apply(this, oe);
  }), Re("contextmenu", Y, function(...oe) {
    var ge;
    (ge = h(me)) == null || ge.apply(this, oe);
  }), L(e, Y);
  var ve = ce({
    get panOnDrag() {
      return k();
    },
    set panOnDrag(oe) {
      k(oe), p();
    },
    get selectionOnDrag() {
      return g();
    },
    set selectionOnDrag(oe) {
      g(oe), p();
    }
  });
  return r(), ve;
}
ie(Bc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Y0 = /* @__PURE__ */ ne('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const W0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Rc(e, t) {
  ue(t, !1), Qe(e, W0);
  const [n, r] = ot(), o = () => U(i, "$viewport", n), { viewport: i } = Ge();
  ze();
  var a = Y0(), s = W(a);
  pt(s, t, "default", {}), X(a), Se(() => dt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, a), ce(), r();
}
ie(Rc, {}, ["default"], [], !0);
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
var q0 = /* @__PURE__ */ ne("<div><!></div>");
function Xc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(me, "$nodeTypes", n), i = () => U(ge, "$elementsSelectable", n), a = () => U(Ye, "$nodesDraggable", n), s = () => U(We, "$connectableStore", n), l = /* @__PURE__ */ te(void 0, !0), u = /* @__PURE__ */ te(void 0, !0), c = /* @__PURE__ */ te(void 0, !0), d = /* @__PURE__ */ te(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), w = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), x = m(t, "draggable", 13, void 0), k = m(t, "selectable", 13, void 0), g = m(t, "connectable", 13, !0), C = m(t, "deletable", 13, !0), y = m(t, "hidden", 13, !1), _ = m(t, "dragging", 13, !1), S = m(t, "resizeObserver", 13, null), E = m(t, "style", 13, void 0), V = m(t, "type", 13, "default"), P = m(t, "isParent", 13, !1), D = m(t, "positionX", 13), A = m(t, "positionY", 13), T = m(t, "sourcePosition", 13, void 0), B = m(t, "targetPosition", 13, void 0), M = m(t, "zIndex", 13), z = m(t, "measuredWidth", 13, void 0), $ = m(t, "measuredHeight", 13, void 0), H = m(t, "initialWidth", 13, void 0), N = m(t, "initialHeight", 13, void 0), O = m(t, "width", 13, void 0), Z = m(t, "height", 13, void 0), K = m(t, "dragHandle", 13, void 0), j = m(t, "initialized", 13, !1), le = m(t, "parentId", 13, void 0), J = m(t, "nodeClickDistance", 13, void 0), Y = m(t, "class", 13, "");
  const re = Ge(), {
    nodeTypes: me,
    nodeDragThreshold: Ce,
    selectNodesOnDrag: de,
    handleNodeSelection: ve,
    updateNodeInternals: oe,
    elementsSelectable: ge,
    nodesDraggable: Ye
  } = re;
  let Ze = /* @__PURE__ */ te(void 0, !0), Be = /* @__PURE__ */ te(null, !0);
  const ee = Ai(), We = we(g());
  let Ue = /* @__PURE__ */ te(void 0, !0), ae = /* @__PURE__ */ te(void 0, !0), se = /* @__PURE__ */ te(void 0, !0);
  Vr("svelteflow__node_id", v()), Vr("svelteflow__node_connectable", We), is(() => {
    var Q;
    h(Be) && ((Q = S()) == null || Q.unobserve(h(Be)));
  });
  function ke(Q) {
    k() && (!q(de) || !x() || q(Ce) > 0) && ve(v()), ee("nodeclick", { node: f().internals.userNode, event: Q });
  }
  fe(() => G(V()), () => {
    F(l, V() || "default");
  }), fe(() => (o(), h(l)), () => {
    F(u, !!o()[h(l)]);
  }), fe(
    () => (o(), h(l), $i),
    () => {
      F(c, o()[h(l)] || $i);
    }
  ), fe(
    () => (h(u), G(V())),
    () => {
      h(u) || console.warn("003", Dr.error003(V()));
    }
  ), fe(
    () => (G(O()), G(Z()), G(H()), G(N()), G(z()), G($())),
    () => {
      F(d, K0({
        width: O(),
        height: Z(),
        initialWidth: H(),
        initialHeight: N(),
        measuredWidth: z(),
        measuredHeight: $()
      }));
    }
  ), fe(() => G(g()), () => {
    We.set(!!g());
  }), fe(
    () => (h(Ue), h(l), h(ae), G(T()), h(se), G(B()), G(v()), h(Ze)),
    () => {
      (h(Ue) && h(l) !== h(Ue) || h(ae) && T() !== h(ae) || h(se) && B() !== h(se)) && requestAnimationFrame(() => oe(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: h(Ze),
            force: !0
          }
        ]
      ]))), F(Ue, h(l)), F(ae, T()), F(se, B());
    }
  ), fe(
    () => (G(S()), h(Ze), h(Be), G(j())),
    () => {
      S() && (h(Ze) !== h(Be) || !j()) && (h(Be) && S().unobserve(h(Be)), h(Ze) && S().observe(h(Ze)), F(Be, h(Ze)));
    }
  ), vt(), ze(!0);
  var Ke = et(), Ve = be(Ke);
  {
    var st = (Q) => {
      var Te = q0();
      let he, en;
      var tn = W(Te);
      const hn = /* @__PURE__ */ pe(() => b() ?? !1), Me = /* @__PURE__ */ pe(() => k() ?? i() ?? !0), tt = /* @__PURE__ */ pe(() => C() ?? !0), Oe = /* @__PURE__ */ pe(() => x() ?? a() ?? !0);
      _u(tn, () => h(c), (Ne, nt) => {
        nt(Ne, {
          get data() {
            return w();
          },
          get id() {
            return v();
          },
          get selected() {
            return h(hn);
          },
          get selectable() {
            return h(Me);
          },
          get deletable() {
            return h(tt);
          },
          get sourcePosition() {
            return T();
          },
          get targetPosition() {
            return B();
          },
          get zIndex() {
            return M();
          },
          get dragging() {
            return _();
          },
          get draggable() {
            return h(Oe);
          },
          get dragHandle() {
            return K();
          },
          get parentId() {
            return le();
          },
          get type() {
            return h(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return D();
          },
          get positionAbsoluteY() {
            return A();
          },
          get width() {
            return O();
          },
          get height() {
            return Z();
          }
        });
      }), X(Te), gt(Te, (Ne, nt) => _i == null ? void 0 : _i(Ne, nt), () => ({
        nodeId: v(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: K(),
        noDragClass: "nodrag",
        nodeClickDistance: J(),
        onNodeMouseDown: ve,
        onDrag: (Ne, nt, nn, Kt) => {
          ee("nodedrag", { event: Ne, targetNode: nn, nodes: Kt });
        },
        onDragStart: (Ne, nt, nn, Kt) => {
          ee("nodedragstart", { event: Ne, targetNode: nn, nodes: Kt });
        },
        onDragStop: (Ne, nt, nn, Kt) => {
          ee("nodedragstop", { event: Ne, targetNode: nn, nodes: Kt });
        },
        store: re
      })), $n(Te, (Ne) => F(Ze, Ne), () => h(Ze)), At(() => Re("click", Te, ke)), At(() => Re("mouseenter", Te, (Ne) => ee("nodemouseenter", { node: f(), event: Ne }))), At(() => Re("mouseleave", Te, (Ne) => ee("nodemouseleave", { node: f(), event: Ne }))), At(() => Re("mousemove", Te, (Ne) => ee("nodemousemove", { node: f(), event: Ne }))), At(() => Re("contextmenu", Te, (Ne) => ee("nodecontextmenu", { node: f(), event: Ne }))), Se(
        (Ne, nt) => {
          ye(Te, "data-id", v()), he = mt(Te, 1, Ne, null, he, nt), en = dt(Te, `${E() ?? ""};${h(d).width ?? ""}${h(d).height ?? ""}`, en, {
            "z-index": M(),
            transform: `translate(${D() ?? ""}px, ${A() ?? ""}px)`,
            visibility: j() ? "visible" : "hidden"
          });
        },
        [
          () => dn(Et([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            Y()
          ])),
          () => ({
            dragging: _(),
            selected: b(),
            draggable: x(),
            connectable: g(),
            selectable: k(),
            nopan: x(),
            parent: P()
          })
        ],
        pe
      ), L(Q, Te);
    };
    xe(Ve, (Q) => {
      y() || Q(st);
    });
  }
  L(e, Ke);
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
      return w();
    },
    set data(Q) {
      w(Q), p();
    },
    get selected() {
      return b();
    },
    set selected(Q) {
      b(Q), p();
    },
    get draggable() {
      return x();
    },
    set draggable(Q) {
      x(Q), p();
    },
    get selectable() {
      return k();
    },
    set selectable(Q) {
      k(Q), p();
    },
    get connectable() {
      return g();
    },
    set connectable(Q) {
      g(Q), p();
    },
    get deletable() {
      return C();
    },
    set deletable(Q) {
      C(Q), p();
    },
    get hidden() {
      return y();
    },
    set hidden(Q) {
      y(Q), p();
    },
    get dragging() {
      return _();
    },
    set dragging(Q) {
      _(Q), p();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(Q) {
      S(Q), p();
    },
    get style() {
      return E();
    },
    set style(Q) {
      E(Q), p();
    },
    get type() {
      return V();
    },
    set type(Q) {
      V(Q), p();
    },
    get isParent() {
      return P();
    },
    set isParent(Q) {
      P(Q), p();
    },
    get positionX() {
      return D();
    },
    set positionX(Q) {
      D(Q), p();
    },
    get positionY() {
      return A();
    },
    set positionY(Q) {
      A(Q), p();
    },
    get sourcePosition() {
      return T();
    },
    set sourcePosition(Q) {
      T(Q), p();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(Q) {
      B(Q), p();
    },
    get zIndex() {
      return M();
    },
    set zIndex(Q) {
      M(Q), p();
    },
    get measuredWidth() {
      return z();
    },
    set measuredWidth(Q) {
      z(Q), p();
    },
    get measuredHeight() {
      return $();
    },
    set measuredHeight(Q) {
      $(Q), p();
    },
    get initialWidth() {
      return H();
    },
    set initialWidth(Q) {
      H(Q), p();
    },
    get initialHeight() {
      return N();
    },
    set initialHeight(Q) {
      N(Q), p();
    },
    get width() {
      return O();
    },
    set width(Q) {
      O(Q), p();
    },
    get height() {
      return Z();
    },
    set height(Q) {
      Z(Q), p();
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
      return le();
    },
    set parentId(Q) {
      le(Q), p();
    },
    get nodeClickDistance() {
      return J();
    },
    set nodeClickDistance(Q) {
      J(Q), p();
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
  Xc,
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
var j0 = /* @__PURE__ */ ne('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const F0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Yc(e, t) {
  ue(t, !1), Qe(e, F0);
  const [n, r] = ot(), o = () => U(c, "$visibleNodes", n), i = () => U(d, "$nodesDraggable", n), a = () => U(v, "$elementsSelectable", n), s = () => U(f, "$nodesConnectable", n), l = () => U(b, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: w,
    parentLookup: b
  } = Ge(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const y = /* @__PURE__ */ new Map();
    C.forEach((_) => {
      const S = _.target.getAttribute("data-id");
      y.set(S, { id: S, nodeElement: _.target, force: !0 });
    }), w(y);
  });
  is(() => {
    x == null || x.disconnect();
  }), ze();
  var k = j0();
  Dt(k, 5, o, (C) => C.id, (C, y) => {
    const _ = /* @__PURE__ */ pe(() => !!h(y).selected), S = /* @__PURE__ */ pe(() => !!h(y).hidden), E = /* @__PURE__ */ pe(() => !!(h(y).draggable || i() && typeof h(y).draggable > "u")), V = /* @__PURE__ */ pe(() => !!(h(y).selectable || a() && typeof h(y).selectable > "u")), P = /* @__PURE__ */ pe(() => !!(h(y).connectable || s() && typeof h(y).connectable > "u")), D = /* @__PURE__ */ pe(() => h(y).deletable ?? !0), A = /* @__PURE__ */ pe(() => l().has(h(y).id)), T = /* @__PURE__ */ pe(() => h(y).type ?? "default"), B = /* @__PURE__ */ pe(() => h(y).internals.z ?? 0), M = /* @__PURE__ */ pe(() => hc(h(y)));
    Xc(C, {
      get node() {
        return h(y);
      },
      get id() {
        return h(y).id;
      },
      get data() {
        return h(y).data;
      },
      get selected() {
        return h(_);
      },
      get hidden() {
        return h(S);
      },
      get draggable() {
        return h(E);
      },
      get selectable() {
        return h(V);
      },
      get connectable() {
        return h(P);
      },
      get deletable() {
        return h(D);
      },
      get positionX() {
        return h(y).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(y).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(A);
      },
      get style() {
        return h(y).style;
      },
      get class() {
        return h(y).class;
      },
      get type() {
        return h(T);
      },
      get sourcePosition() {
        return h(y).sourcePosition;
      },
      get targetPosition() {
        return h(y).targetPosition;
      },
      get dragging() {
        return h(y).dragging;
      },
      get zIndex() {
        return h(B);
      },
      get dragHandle() {
        return h(y).dragHandle;
      },
      get initialized() {
        return h(M);
      },
      get width() {
        return h(y).width;
      },
      get height() {
        return h(y).height;
      },
      get initialWidth() {
        return h(y).initialWidth;
      },
      get initialHeight() {
        return h(y).initialHeight;
      },
      get measuredWidth() {
        return h(y).measured.width;
      },
      get measuredHeight() {
        return h(y).measured.height;
      },
      get parentId() {
        return h(y).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(z) {
          De.call(this, t, z);
        },
        nodemouseenter(z) {
          De.call(this, t, z);
        },
        nodemousemove(z) {
          De.call(this, t, z);
        },
        nodemouseleave(z) {
          De.call(this, t, z);
        },
        nodedrag(z) {
          De.call(this, t, z);
        },
        nodedragstart(z) {
          De.call(this, t, z);
        },
        nodedragstop(z) {
          De.call(this, t, z);
        },
        nodecontextmenu(z) {
          De.call(this, t, z);
        }
      }
    });
  }), X(k), L(e, k);
  var g = ce({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), p();
    }
  });
  return r(), g;
}
ie(Yc, { nodeClickDistance: {} }, [], [], !0);
var G0 = /* @__PURE__ */ $e('<svg><g role="img"><!></g></svg>');
function Wc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(Y, "$edgeTypes", n), i = () => U(re, "$flowId", n), a = () => U(me, "$elementsSelectable", n), s = () => U(J, "$edgeLookup", n), l = /* @__PURE__ */ te(void 0, !0), u = /* @__PURE__ */ te(void 0, !0), c = /* @__PURE__ */ te(void 0, !0), d = /* @__PURE__ */ te(void 0, !0), f = /* @__PURE__ */ te(void 0, !0);
  let v = m(t, "id", 13), w = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), x = m(t, "target", 13, ""), k = m(t, "data", 29, () => ({})), g = m(t, "style", 13, void 0), C = m(t, "zIndex", 13, void 0), y = m(t, "animated", 13, !1), _ = m(t, "selected", 13, !1), S = m(t, "selectable", 13, void 0), E = m(t, "deletable", 13, void 0), V = m(t, "hidden", 13, !1), P = m(t, "label", 13, void 0), D = m(t, "labelStyle", 13, void 0), A = m(t, "markerStart", 13, void 0), T = m(t, "markerEnd", 13, void 0), B = m(t, "sourceHandle", 13, void 0), M = m(t, "targetHandle", 13, void 0), z = m(t, "sourceX", 13), $ = m(t, "sourceY", 13), H = m(t, "targetX", 13), N = m(t, "targetY", 13), O = m(t, "sourcePosition", 13), Z = m(t, "targetPosition", 13), K = m(t, "ariaLabel", 13, void 0), j = m(t, "interactionWidth", 13, void 0), le = m(t, "class", 13, "");
  Vr("svelteflow__edge_id", v());
  const {
    edgeLookup: J,
    edgeTypes: Y,
    flowId: re,
    elementsSelectable: me
  } = Ge(), Ce = Ai(), de = zc();
  function ve(ee) {
    const We = s().get(v());
    We && (de(v()), Ce("edgeclick", { event: ee, edge: We }));
  }
  function oe(ee, We) {
    const Ue = s().get(v());
    Ue && Ce(We, { event: ee, edge: Ue });
  }
  fe(() => G(w()), () => {
    F(l, w() || "default");
  }), fe(
    () => (o(), h(l), ki),
    () => {
      F(u, o()[h(l)] || ki);
    }
  ), fe(
    () => (G(A()), i()),
    () => {
      F(c, A() ? `url('#${La(A(), i())}')` : void 0);
    }
  ), fe(
    () => (G(T()), i()),
    () => {
      F(d, T() ? `url('#${La(T(), i())}')` : void 0);
    }
  ), fe(
    () => (G(S()), a()),
    () => {
      F(f, S() ?? a());
    }
  ), vt(), ze(!0);
  var ge = et(), Ye = be(ge);
  {
    var Ze = (ee) => {
      var We = G0();
      let Ue;
      var ae = W(We);
      let se;
      var ke = W(ae);
      const Ke = /* @__PURE__ */ pe(() => E() ?? !0);
      _u(ke, () => h(u), (Ve, st) => {
        st(Ve, {
          get id() {
            return v();
          },
          get source() {
            return b();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return z();
          },
          get sourceY() {
            return $();
          },
          get targetX() {
            return H();
          },
          get targetY() {
            return N();
          },
          get sourcePosition() {
            return O();
          },
          get targetPosition() {
            return Z();
          },
          get animated() {
            return y();
          },
          get selected() {
            return _();
          },
          get label() {
            return P();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return k();
          },
          get style() {
            return g();
          },
          get interactionWidth() {
            return j();
          },
          get selectable() {
            return h(f);
          },
          get deletable() {
            return h(Ke);
          },
          get type() {
            return h(l);
          },
          get sourceHandleId() {
            return B();
          },
          get targetHandleId() {
            return M();
          },
          get markerStart() {
            return h(c);
          },
          get markerEnd() {
            return h(d);
          }
        });
      }), X(ae), X(We), Se(
        (Ve, st) => {
          Ue = dt(We, "", Ue, { "z-index": C() }), se = mt(ae, 0, Ve, null, se, st), ye(ae, "data-id", v()), ye(ae, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => dn(Et(["svelte-flow__edge", le()])),
          () => ({
            animated: y(),
            selected: _(),
            selectable: h(f)
          })
        ],
        pe
      ), Re("click", ae, ve), Re("contextmenu", ae, (Ve) => {
        oe(Ve, "edgecontextmenu");
      }), Re("mouseenter", ae, (Ve) => {
        oe(Ve, "edgemouseenter");
      }), Re("mouseleave", ae, (Ve) => {
        oe(Ve, "edgemouseleave");
      }), L(ee, We);
    };
    xe(Ye, (ee) => {
      V() || ee(Ze);
    });
  }
  L(e, ge);
  var Be = ce({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), p();
    },
    get type() {
      return w();
    },
    set type(ee) {
      w(ee), p();
    },
    get source() {
      return b();
    },
    set source(ee) {
      b(ee), p();
    },
    get target() {
      return x();
    },
    set target(ee) {
      x(ee), p();
    },
    get data() {
      return k();
    },
    set data(ee) {
      k(ee), p();
    },
    get style() {
      return g();
    },
    set style(ee) {
      g(ee), p();
    },
    get zIndex() {
      return C();
    },
    set zIndex(ee) {
      C(ee), p();
    },
    get animated() {
      return y();
    },
    set animated(ee) {
      y(ee), p();
    },
    get selected() {
      return _();
    },
    set selected(ee) {
      _(ee), p();
    },
    get selectable() {
      return S();
    },
    set selectable(ee) {
      S(ee), p();
    },
    get deletable() {
      return E();
    },
    set deletable(ee) {
      E(ee), p();
    },
    get hidden() {
      return V();
    },
    set hidden(ee) {
      V(ee), p();
    },
    get label() {
      return P();
    },
    set label(ee) {
      P(ee), p();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(ee) {
      D(ee), p();
    },
    get markerStart() {
      return A();
    },
    set markerStart(ee) {
      A(ee), p();
    },
    get markerEnd() {
      return T();
    },
    set markerEnd(ee) {
      T(ee), p();
    },
    get sourceHandle() {
      return B();
    },
    set sourceHandle(ee) {
      B(ee), p();
    },
    get targetHandle() {
      return M();
    },
    set targetHandle(ee) {
      M(ee), p();
    },
    get sourceX() {
      return z();
    },
    set sourceX(ee) {
      z(ee), p();
    },
    get sourceY() {
      return $();
    },
    set sourceY(ee) {
      $(ee), p();
    },
    get targetX() {
      return H();
    },
    set targetX(ee) {
      H(ee), p();
    },
    get targetY() {
      return N();
    },
    set targetY(ee) {
      N(ee), p();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(ee) {
      O(ee), p();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(ee) {
      Z(ee), p();
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
      return le();
    },
    set class(ee) {
      le(ee), p();
    }
  });
  return r(), Be;
}
ie(
  Wc,
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
function Kc(e, t) {
  ue(t, !1);
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return Wt(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), ze(), ce({
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
ie(Kc, { onMount: {}, onDestroy: {} }, [], [], !0);
var U0 = /* @__PURE__ */ $e("<defs></defs>");
function qc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(i, "$markers", n), { markers: i } = Ge();
  ze();
  var a = U0();
  Dt(a, 5, o, (s) => s.id, (s, l) => {
    jc(s, ct(() => h(l)));
  }), X(a), L(e, a), ce(), r();
}
ie(qc, {}, [], [], !0);
var J0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Q0 = /* @__PURE__ */ $e('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), em = /* @__PURE__ */ $e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function jc(e, t) {
  ue(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  ze();
  var c = em(), d = W(c);
  {
    var f = (w) => {
      var b = J0();
      Se(() => {
        ye(b, "stroke", l()), ye(b, "stroke-width", u());
      }), L(w, b);
    }, v = (w, b) => {
      {
        var x = (k) => {
          var g = Q0();
          Se(() => {
            ye(g, "stroke", l()), ye(g, "stroke-width", u()), ye(g, "fill", l());
          }), L(k, g);
        };
        xe(
          w,
          (k) => {
            r() === wo.ArrowClosed && k(x);
          },
          b
        );
      }
    };
    xe(d, (w) => {
      r() === wo.Arrow ? w(f) : w(v, !1);
    });
  }
  return X(c), Se(() => {
    ye(c, "id", n()), ye(c, "markerWidth", `${o()}`), ye(c, "markerHeight", `${i()}`), ye(c, "markerUnits", a()), ye(c, "orient", s());
  }), L(e, c), ce({
    get id() {
      return n();
    },
    set id(w) {
      n(w), p();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), p();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), p();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), p();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(w) {
      a(w), p();
    },
    get orient() {
      return s();
    },
    set orient(w) {
      s(w), p();
    },
    get color() {
      return l();
    },
    set color(w) {
      l(w), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), p();
    }
  });
}
ie(
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
var tm = /* @__PURE__ */ ne('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Fc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(s, "$visibleEdges", n), i = () => U(c, "$elementsSelectable", n);
  let a = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Ge();
  Wt(() => {
    a() && u(a());
  }), ze();
  var d = tm(), f = W(d), v = W(f);
  qc(v, {}), X(f);
  var w = I(f, 2);
  Dt(w, 1, o, (g) => g.id, (g, C) => {
    const y = /* @__PURE__ */ pe(() => h(C).selectable ?? i()), _ = /* @__PURE__ */ pe(() => h(C).type || "default");
    Wc(g, {
      get id() {
        return h(C).id;
      },
      get source() {
        return h(C).source;
      },
      get target() {
        return h(C).target;
      },
      get data() {
        return h(C).data;
      },
      get style() {
        return h(C).style;
      },
      get animated() {
        return h(C).animated;
      },
      get selected() {
        return h(C).selected;
      },
      get selectable() {
        return h(y);
      },
      get deletable() {
        return h(C).deletable;
      },
      get hidden() {
        return h(C).hidden;
      },
      get label() {
        return h(C).label;
      },
      get labelStyle() {
        return h(C).labelStyle;
      },
      get markerStart() {
        return h(C).markerStart;
      },
      get markerEnd() {
        return h(C).markerEnd;
      },
      get sourceHandle() {
        return h(C).sourceHandle;
      },
      get targetHandle() {
        return h(C).targetHandle;
      },
      get sourceX() {
        return h(C).sourceX;
      },
      get sourceY() {
        return h(C).sourceY;
      },
      get targetX() {
        return h(C).targetX;
      },
      get targetY() {
        return h(C).targetY;
      },
      get sourcePosition() {
        return h(C).sourcePosition;
      },
      get targetPosition() {
        return h(C).targetPosition;
      },
      get ariaLabel() {
        return h(C).ariaLabel;
      },
      get interactionWidth() {
        return h(C).interactionWidth;
      },
      get class() {
        return h(C).class;
      },
      get type() {
        return h(_);
      },
      get zIndex() {
        return h(C).zIndex;
      },
      $$events: {
        edgeclick(S) {
          De.call(this, t, S);
        },
        edgecontextmenu(S) {
          De.call(this, t, S);
        },
        edgemouseenter(S) {
          De.call(this, t, S);
        },
        edgemouseleave(S) {
          De.call(this, t, S);
        }
      }
    });
  });
  var b = I(w, 2);
  {
    var x = (g) => {
      Kc(g, {
        onMount: () => {
          ci(l, !0);
        },
        onDestroy: () => {
          ci(l, !1);
        }
      });
    };
    xe(b, (g) => {
      o().length > 0 && g(x);
    });
  }
  X(d), L(e, d);
  var k = ce({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(g) {
      a(g), p();
    }
  });
  return r(), k;
}
ie(Fc, { defaultEdgeOptions: {} }, [], [], !0);
var nm = /* @__PURE__ */ ne('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const rm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function bs(e, t) {
  ue(t, !1), Qe(e, rm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "isVisible", 12, !0);
  var s = et(), l = be(s);
  {
    var u = (c) => {
      var d = nm();
      let f;
      Se(() => f = dt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), L(c, d);
    };
    xe(l, (c) => {
      a() && c(u);
    });
  }
  return L(e, s), ce({
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
  bs,
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
function Gc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(a, "$selectionRect", n), i = () => U(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = Ge();
  ze();
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
  bs(e, {
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
      return h(d);
    },
    get y() {
      return h(f);
    }
  }), ce(), r();
}
ie(Gc, {}, [], [], !0);
var om = /* @__PURE__ */ ne('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const im = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Uc(e, t) {
  ue(t, !1), Qe(e, im);
  const [n, r] = ot(), o = () => U(l, "$selectionRectMode", n), i = () => U(c, "$nodeLookup", n), a = () => U(u, "$nodes", n), s = Ge(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = Ai();
  let f = /* @__PURE__ */ te(null);
  function v(g) {
    const C = a().filter((y) => y.selected);
    d("selectioncontextmenu", { nodes: C, event: g });
  }
  function w(g) {
    const C = a().filter((y) => y.selected);
    d("selectionclick", { nodes: C, event: g });
  }
  fe(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (F(f, Po(i(), { filter: (g) => !!g.selected })), a());
    }
  ), vt(), ze();
  var b = et(), x = be(b);
  {
    var k = (g) => {
      var C = om(), y = W(C);
      bs(y, { width: "100%", height: "100%", x: 0, y: 0 }), X(C), gt(C, (_, S) => _i == null ? void 0 : _i(_, S), () => ({
        disabled: !1,
        store: s,
        onDrag: (_, S, E, V) => {
          d("nodedrag", { event: _, targetNode: null, nodes: V });
        },
        onDragStart: (_, S, E, V) => {
          d("nodedragstart", { event: _, targetNode: null, nodes: V });
        },
        onDragStop: (_, S, E, V) => {
          d("nodedragstop", { event: _, targetNode: null, nodes: V });
        }
      })), At(() => Re("contextmenu", C, v)), At(() => Re("click", C, w)), At(() => Re("keyup", C, () => {
      })), Se(() => dt(C, `width: ${h(f).width ?? ""}px; height: ${h(f).height ?? ""}px; transform: translate(${h(f).x ?? ""}px, ${h(f).y ?? ""}px)`)), L(g, C);
    };
    xe(x, (g) => {
      o() === "nodes" && h(f) && Pn(h(f).x) && Pn(h(f).y) && g(k);
    });
  }
  L(e, b), ce(), r();
}
ie(Uc, {}, [], [], !0);
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
      }, { modifier: d, key: f, callback: v, preventDefault: w, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((k) => l[k])
        ))
          continue;
        if (a.key === f) {
          w && a.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), v == null || v(x);
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
function Jc(e, t) {
  ue(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => bi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), i = m(t, "panActivationKey", 12, " "), a = m(t, "zoomActivationKey", 28, () => bi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Ge();
  function v(g) {
    return g !== null && typeof g == "object";
  }
  function w(g) {
    return v(g) ? g.modifier || [] : [];
  }
  function b(g) {
    return g == null ? "" : v(g) ? g.key : g;
  }
  function x(g, C) {
    return (Array.isArray(g) ? g : [g]).map((y) => {
      const _ = b(y);
      return {
        key: _,
        modifier: w(y),
        enabled: _ !== null,
        callback: C
      };
    });
  }
  function k() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return ze(), Re("blur", Pt, k), Re("contextmenu", Pt, k), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !Ip(g.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), gt(Pt, (g, C) => ut == null ? void 0 : ut(g, C), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), ce({
    get selectionKey() {
      return n();
    },
    set selectionKey(g) {
      n(g), p();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(g) {
      r(g), p();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(g) {
      o(g), p();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(g) {
      i(g), p();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(g) {
      a(g), p();
    }
  });
}
ie(
  Jc,
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
var am = /* @__PURE__ */ $e('<path fill="none" class="svelte-flow__connection-path"></path>'), sm = /* @__PURE__ */ $e('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function Qc(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(v, "$connection", n), i = () => U(w, "$connectionLineType", n), a = () => U(d, "$width", n), s = () => U(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: w
  } = Ge();
  let b = /* @__PURE__ */ te(null);
  fe(
    () => (o(), G(c()), i(), h(b), Da),
    () => {
      if (o().inProgress && !c()) {
        const { from: y, to: _, fromPosition: S, toPosition: E } = o(), V = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: S,
          targetX: _.x,
          targetY: _.y,
          targetPosition: E
        };
        switch (i()) {
          case _r.Bezier:
            ((P) => F(b, P[0]))(pc(V));
            break;
          case _r.Step:
            ((P) => F(b, P[0]))(xi({ ...V, borderRadius: 0 }));
            break;
          case _r.SmoothStep:
            ((P) => F(b, P[0]))(xi(V));
            break;
          default:
            ((P) => F(b, P[0]))(Da(V));
        }
      }
    }
  ), vt(), ze();
  var x = et(), k = be(x);
  {
    var g = (y) => {
      var _ = sm(), S = W(_), E = W(S);
      pt(E, t, "connectionLine", {});
      var V = I(E);
      {
        var P = (D) => {
          var A = am();
          Se(() => {
            ye(A, "d", h(b)), dt(A, u());
          }), L(D, A);
        };
        xe(V, (D) => {
          c() || D(P);
        });
      }
      X(S), X(_), Se(
        (D) => {
          ye(_, "width", a()), ye(_, "height", s()), dt(_, l()), mt(S, 0, D);
        },
        [
          () => dn(Et([
            "svelte-flow__connection",
            Pp(o().isValid)
          ]))
        ],
        pe
      ), L(y, _);
    };
    xe(k, (y) => {
      o().inProgress && y(g);
    });
  }
  L(e, x);
  var C = ce({
    get containerStyle() {
      return l();
    },
    set containerStyle(y) {
      l(y), p();
    },
    get style() {
      return u();
    },
    set style(y) {
      u(y), p();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(y) {
      c(y), p();
    }
  });
  return r(), C;
}
ie(
  Qc,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var lm = /* @__PURE__ */ ne("<div><!></div>");
function No(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["position", "style", "class"]);
  ue(t, !1);
  const [o, i] = ot(), a = () => U(d, "$selectionRectMode", o), s = /* @__PURE__ */ te();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = Ge();
  fe(() => G(l()), () => {
    F(s, `${l()}`.split("-"));
  }), vt(), ze();
  var f = lm();
  let v;
  var w = W(f);
  pt(w, t, "default", {}), X(f), Se(
    (x) => v = ln(f, v, {
      class: x,
      style: u(),
      ...r,
      [nr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Et([
        "svelte-flow__panel",
        c(),
        ...h(s)
      ])
    ],
    pe
  ), L(e, f);
  var b = ce({
    get position() {
      return l();
    },
    set position(x) {
      l(x), p();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), p();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), p();
    }
  });
  return i(), b;
}
ie(No, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var um = /* @__PURE__ */ ne('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ed(e, t) {
  ue(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  ze();
  var o = et(), i = be(o);
  {
    var a = (s) => {
      No(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = um();
          L(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    xe(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return L(e, o), ce({
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
ie(ed, { proOptions: {}, position: {} }, [], [], !0);
function Dl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const cm = (e) => Object.keys(e);
function Ll(e, t) {
  cm(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function dm() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function fm(e = "light") {
  return qt("light", (t) => {
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
var vm = /* @__PURE__ */ ne('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), hm = /* @__PURE__ */ ne("<!> <!>", 1), gm = /* @__PURE__ */ ne("<div><!> <!> <!> <!></div>");
const pm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function td(e, t) {
  const n = Dv(t), r = at(t, [
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
  const [i, a] = ot(), s = () => U(C(), "$viewport", i), l = () => U(Ji, "$initialized", i), u = () => U(h(c), "$colorModeClass", i), c = /* @__PURE__ */ te();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), w = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), x = m(t, "minZoom", 12, void 0), k = m(t, "maxZoom", 12, void 0), g = m(t, "initialViewport", 12, void 0), C = m(t, "viewport", 12, void 0), y = m(t, "nodeTypes", 12, void 0), _ = m(t, "edgeTypes", 12, void 0), S = m(t, "selectionKey", 12, void 0), E = m(t, "selectionMode", 12, void 0), V = m(t, "panActivationKey", 12, void 0), P = m(t, "multiSelectionKey", 12, void 0), D = m(t, "zoomActivationKey", 12, void 0), A = m(t, "nodesDraggable", 12, void 0), T = m(t, "nodesConnectable", 12, void 0), B = m(t, "nodeDragThreshold", 12, void 0), M = m(t, "elementsSelectable", 12, void 0), z = m(t, "snapGrid", 12, void 0), $ = m(t, "deleteKey", 12, void 0), H = m(t, "connectionRadius", 12, void 0), N = m(t, "connectionLineType", 12, void 0), O = m(t, "connectionMode", 28, () => cr.Strict), Z = m(t, "connectionLineStyle", 12, ""), K = m(t, "connectionLineContainerStyle", 12, ""), j = m(t, "onMoveStart", 12, void 0), le = m(t, "onMove", 12, void 0), J = m(t, "onMoveEnd", 12, void 0), Y = m(t, "isValidConnection", 12, void 0), re = m(t, "translateExtent", 12, void 0), me = m(t, "nodeExtent", 12, void 0), Ce = m(t, "onlyRenderVisibleElements", 12, void 0), de = m(t, "panOnScrollMode", 28, () => qn.Free), ve = m(t, "preventScrolling", 12, !0), oe = m(t, "zoomOnScroll", 12, !0), ge = m(t, "zoomOnDoubleClick", 12, !0), Ye = m(t, "zoomOnPinch", 12, !0), Ze = m(t, "panOnScroll", 12, !1), Be = m(t, "panOnDrag", 12, !0), ee = m(t, "selectionOnDrag", 12, void 0), We = m(t, "autoPanOnConnect", 12, !0), Ue = m(t, "autoPanOnNodeDrag", 12, !0), ae = m(t, "onerror", 12, void 0), se = m(t, "ondelete", 12, void 0), ke = m(t, "onedgecreate", 12, void 0), Ke = m(t, "attributionPosition", 12, void 0), Ve = m(t, "proOptions", 12, void 0), st = m(t, "defaultEdgeOptions", 12, void 0), it = m(t, "width", 12, void 0), Q = m(t, "height", 12, void 0), Te = m(t, "colorMode", 12, "light"), he = m(t, "onconnect", 12, void 0), en = m(t, "onconnectstart", 12, void 0), tn = m(t, "onconnectend", 12, void 0), hn = m(t, "onbeforedelete", 12, void 0), Me = m(t, "oninit", 12, void 0), tt = m(t, "nodeOrigin", 12, void 0), Oe = m(t, "paneClickDistance", 12, 0), Ne = m(t, "nodeClickDistance", 12, 0), nt = m(t, "defaultMarkerColor", 12, "#b1b1b7"), nn = m(t, "style", 12, void 0), Kt = m(t, "class", 12, void 0), Kr = /* @__PURE__ */ te(), wt = /* @__PURE__ */ te(), Mt = /* @__PURE__ */ te();
  const mr = s() || g(), rt = hv(qi) ? Ge() : I0({
    nodes: q(f()),
    edges: q(v()),
    width: it(),
    height: Q(),
    fitView: w(),
    nodeOrigin: tt(),
    nodeExtent: me()
  });
  Wt(() => (rt.width.set(h(wt)), rt.height.set(h(Mt)), rt.domNode.set(h(Kr)), rt.syncNodeStores(f()), rt.syncEdgeStores(v()), rt.syncViewport(C()), w() !== void 0 && rt.fitViewOnInit.set(w()), b() && rt.fitViewOptions.set(b()), Dl(rt, {
    nodeTypes: y(),
    edgeTypes: _(),
    minZoom: x(),
    maxZoom: k(),
    translateExtent: re(),
    paneClickDistance: Oe()
  }), () => {
    rt.reset();
  }));
  const { initialized: Ji } = rt;
  let qr = /* @__PURE__ */ te(!1);
  fe(
    () => (h(wt), h(Mt)),
    () => {
      h(wt) !== void 0 && h(Mt) !== void 0 && (rt.width.set(h(wt)), rt.height.set(h(Mt)));
    }
  ), fe(
    () => (h(qr), l(), G(Me())),
    () => {
      var R;
      !h(qr) && l() && ((R = Me()) == null || R(), F(qr, !0));
    }
  ), fe(
    () => (G(d()), G(N()), G(H()), G(E()), G(z()), G(nt()), G(A()), G(T()), G(M()), G(Ce()), G(Y()), G(We()), G(Ue()), G(ae()), G(se()), G(ke()), G(O()), G(B()), G(he()), G(en()), G(tn()), G(hn()), G(tt()), Ll),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: N(),
        connectionRadius: H(),
        selectionMode: E(),
        snapGrid: z(),
        defaultMarkerColor: nt(),
        nodesDraggable: A(),
        nodesConnectable: T(),
        elementsSelectable: M(),
        onlyRenderVisibleElements: Ce(),
        isValidConnection: Y(),
        autoPanOnConnect: We(),
        autoPanOnNodeDrag: Ue(),
        onerror: ae(),
        ondelete: se(),
        onedgecreate: ke(),
        connectionMode: O(),
        nodeDragThreshold: B(),
        onconnect: he(),
        onconnectstart: en(),
        onconnectend: tn(),
        onbeforedelete: hn(),
        nodeOrigin: tt()
      };
      Ll(rt, R);
    }
  ), fe(
    () => (G(y()), G(_()), G(x()), G(k()), G(re()), G(Oe())),
    () => {
      Dl(rt, {
        nodeTypes: y(),
        edgeTypes: _(),
        minZoom: x(),
        maxZoom: k(),
        translateExtent: re(),
        paneClickDistance: Oe()
      });
    }
  ), fe(
    () => G(Te()),
    () => {
      Yv(F(c, fm(Te())), "$colorModeClass", i);
    }
  ), vt(), ze();
  var Tt = gm();
  let Ao;
  var Io = W(Tt);
  Jc(Io, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return $();
    },
    get panActivationKey() {
      return V();
    },
    get multiSelectionKey() {
      return P();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var Zo = I(Io, 2);
  const Qi = /* @__PURE__ */ pe(() => de() === void 0 ? qn.Free : de()), Fd = /* @__PURE__ */ pe(() => ve() === void 0 ? !0 : ve()), Gd = /* @__PURE__ */ pe(() => oe() === void 0 ? !0 : oe()), Ud = /* @__PURE__ */ pe(() => ge() === void 0 ? !0 : ge()), Jd = /* @__PURE__ */ pe(() => Ye() === void 0 ? !0 : Ye()), Qd = /* @__PURE__ */ pe(() => Ze() === void 0 ? !1 : Ze()), ef = /* @__PURE__ */ pe(() => Be() === void 0 ? !0 : Be()), tf = /* @__PURE__ */ pe(() => Oe() === void 0 ? 0 : Oe());
  Zc(Zo, {
    initialViewport: mr,
    get onMoveStart() {
      return j();
    },
    get onMove() {
      return le();
    },
    get onMoveEnd() {
      return J();
    },
    get panOnScrollMode() {
      return h(Qi);
    },
    get preventScrolling() {
      return h(Fd);
    },
    get zoomOnScroll() {
      return h(Gd);
    },
    get zoomOnDoubleClick() {
      return h(Ud);
    },
    get zoomOnPinch() {
      return h(Jd);
    },
    get panOnScroll() {
      return h(Qd);
    },
    get panOnDrag() {
      return h(ef);
    },
    get paneClickDistance() {
      return h(tf);
    },
    children: (R, Lw) => {
      const of = /* @__PURE__ */ pe(() => Be() === void 0 ? !0 : Be());
      Bc(R, {
        get panOnDrag() {
          return h(of);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(jr) {
            De.call(this, t, jr);
          },
          panecontextmenu(jr) {
            De.call(this, t, jr);
          }
        },
        children: (jr, Tw) => {
          var Es = hm(), Ms = be(Es);
          Rc(Ms, {
            children: (sf, Ow) => {
              var Hs = vm(), Ps = be(Hs);
              Fc(Ps, {
                get defaultEdgeOptions() {
                  return st();
                },
                $$events: {
                  edgeclick(Ae) {
                    De.call(this, t, Ae);
                  },
                  edgecontextmenu(Ae) {
                    De.call(this, t, Ae);
                  },
                  edgemouseenter(Ae) {
                    De.call(this, t, Ae);
                  },
                  edgemouseleave(Ae) {
                    De.call(this, t, Ae);
                  }
                }
              });
              var Vs = I(Ps, 2);
              Qc(Vs, {
                get containerStyle() {
                  return K();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ae, Aw) => {
                    var Ns = et(), uf = be(Ns);
                    pt(uf, t, "connectionLine", {}), L(Ae, Ns);
                  }
                }
              });
              var zs = I(Vs, 6);
              Yc(zs, {
                get nodeClickDistance() {
                  return Ne();
                },
                $$events: {
                  nodeclick(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodemouseenter(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodemousemove(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodemouseleave(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedragstart(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedrag(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedragstop(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodecontextmenu(Ae) {
                    De.call(this, t, Ae);
                  }
                }
              });
              var lf = I(zs, 2);
              Uc(lf, {
                $$events: {
                  selectionclick(Ae) {
                    De.call(this, t, Ae);
                  },
                  selectioncontextmenu(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedragstart(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedrag(Ae) {
                    De.call(this, t, Ae);
                  },
                  nodedragstop(Ae) {
                    De.call(this, t, Ae);
                  }
                }
              }), L(sf, Hs);
            },
            $$slots: { default: !0 }
          });
          var af = I(Ms, 2);
          Gc(af, {}), L(jr, Es);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ss = I(Zo, 2);
  ed(Ss, {
    get proOptions() {
      return Ve();
    },
    get position() {
      return Ke();
    }
  });
  var nf = I(Ss, 2);
  pt(nf, t, "default", {}), X(Tt), $n(Tt, (R) => F(Kr, R), () => h(Kr)), Se(
    (R) => Ao = ln(
      Tt,
      Ao,
      {
        style: nn(),
        class: R,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Et([
        "svelte-flow",
        Kt(),
        u()
      ])
    ],
    pe
  ), Ks(Tt, "clientWidth", (R) => F(wt, R)), Ks(Tt, "clientHeight", (R) => F(Mt, R)), Re("dragover", Tt, function(R) {
    De.call(this, t, R);
  }), Re("drop", Tt, function(R) {
    De.call(this, t, R);
  }), L(e, Tt);
  var rf = ce({
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
      return w();
    },
    set fitView(R) {
      w(R), p();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(R) {
      b(R), p();
    },
    get minZoom() {
      return x();
    },
    set minZoom(R) {
      x(R), p();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(R) {
      k(R), p();
    },
    get initialViewport() {
      return g();
    },
    set initialViewport(R) {
      g(R), p();
    },
    get viewport() {
      return C();
    },
    set viewport(R) {
      C(R), p();
    },
    get nodeTypes() {
      return y();
    },
    set nodeTypes(R) {
      y(R), p();
    },
    get edgeTypes() {
      return _();
    },
    set edgeTypes(R) {
      _(R), p();
    },
    get selectionKey() {
      return S();
    },
    set selectionKey(R) {
      S(R), p();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(R) {
      E(R), p();
    },
    get panActivationKey() {
      return V();
    },
    set panActivationKey(R) {
      V(R), p();
    },
    get multiSelectionKey() {
      return P();
    },
    set multiSelectionKey(R) {
      P(R), p();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(R) {
      D(R), p();
    },
    get nodesDraggable() {
      return A();
    },
    set nodesDraggable(R) {
      A(R), p();
    },
    get nodesConnectable() {
      return T();
    },
    set nodesConnectable(R) {
      T(R), p();
    },
    get nodeDragThreshold() {
      return B();
    },
    set nodeDragThreshold(R) {
      B(R), p();
    },
    get elementsSelectable() {
      return M();
    },
    set elementsSelectable(R) {
      M(R), p();
    },
    get snapGrid() {
      return z();
    },
    set snapGrid(R) {
      z(R), p();
    },
    get deleteKey() {
      return $();
    },
    set deleteKey(R) {
      $(R), p();
    },
    get connectionRadius() {
      return H();
    },
    set connectionRadius(R) {
      H(R), p();
    },
    get connectionLineType() {
      return N();
    },
    set connectionLineType(R) {
      N(R), p();
    },
    get connectionMode() {
      return O();
    },
    set connectionMode(R) {
      O(R), p();
    },
    get connectionLineStyle() {
      return Z();
    },
    set connectionLineStyle(R) {
      Z(R), p();
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
      return le();
    },
    set onMove(R) {
      le(R), p();
    },
    get onMoveEnd() {
      return J();
    },
    set onMoveEnd(R) {
      J(R), p();
    },
    get isValidConnection() {
      return Y();
    },
    set isValidConnection(R) {
      Y(R), p();
    },
    get translateExtent() {
      return re();
    },
    set translateExtent(R) {
      re(R), p();
    },
    get nodeExtent() {
      return me();
    },
    set nodeExtent(R) {
      me(R), p();
    },
    get onlyRenderVisibleElements() {
      return Ce();
    },
    set onlyRenderVisibleElements(R) {
      Ce(R), p();
    },
    get panOnScrollMode() {
      return de();
    },
    set panOnScrollMode(R) {
      de(R), p();
    },
    get preventScrolling() {
      return ve();
    },
    set preventScrolling(R) {
      ve(R), p();
    },
    get zoomOnScroll() {
      return oe();
    },
    set zoomOnScroll(R) {
      oe(R), p();
    },
    get zoomOnDoubleClick() {
      return ge();
    },
    set zoomOnDoubleClick(R) {
      ge(R), p();
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
      return ae();
    },
    set onerror(R) {
      ae(R), p();
    },
    get ondelete() {
      return se();
    },
    set ondelete(R) {
      se(R), p();
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
      return Ve();
    },
    set proOptions(R) {
      Ve(R), p();
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
      return he();
    },
    set onconnect(R) {
      he(R), p();
    },
    get onconnectstart() {
      return en();
    },
    set onconnectstart(R) {
      en(R), p();
    },
    get onconnectend() {
      return tn();
    },
    set onconnectend(R) {
      tn(R), p();
    },
    get onbeforedelete() {
      return hn();
    },
    set onbeforedelete(R) {
      hn(R), p();
    },
    get oninit() {
      return Me();
    },
    set oninit(R) {
      Me(R), p();
    },
    get nodeOrigin() {
      return tt();
    },
    set nodeOrigin(R) {
      tt(R), p();
    },
    get paneClickDistance() {
      return Oe();
    },
    set paneClickDistance(R) {
      Oe(R), p();
    },
    get nodeClickDistance() {
      return Ne();
    },
    set nodeClickDistance(R) {
      Ne(R), p();
    },
    get defaultMarkerColor() {
      return nt();
    },
    set defaultMarkerColor(R) {
      nt(R), p();
    },
    get style() {
      return nn();
    },
    set style(R) {
      nn(R), p();
    },
    get class() {
      return Kt();
    },
    set class(R) {
      Kt(R), p();
    }
  });
  return a(), rf;
}
ie(
  td,
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
function nd(e, t) {
  ue(t, !1);
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), i = m(t, "initialHeight", 12, void 0), a = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = Ic({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Vr(qi, { getStore: () => l }), is(() => {
    l.reset();
  }), ze();
  var u = et(), c = be(u);
  return pt(c, t, "default", {}), L(e, u), ce({
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
  nd,
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
var mm = /* @__PURE__ */ ne("<button><!></button>");
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
  ze();
  var c = mm();
  let d;
  var f = W(c);
  return pt(f, t, "default", { class: "button-svg" }), X(c), Se(
    (v) => d = ln(c, d, {
      type: "button",
      class: v,
      ...r,
      [nr]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": a(),
        "--xy-controls-button-color-props": s(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => Et([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    pe
  ), Re("click", c, function(v) {
    De.call(this, t, v);
  }), L(e, c), ce({
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
var ym = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function rd(e) {
  var t = ym();
  L(e, t);
}
ie(rd, {}, [], [], !0);
var wm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function od(e) {
  var t = wm();
  L(e, t);
}
ie(od, {}, [], [], !0);
var bm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function id(e) {
  var t = bm();
  L(e, t);
}
ie(id, {}, [], [], !0);
var xm = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ad(e) {
  var t = xm();
  L(e, t);
}
ie(ad, {}, [], [], !0);
var $m = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function sd(e) {
  var t = $m();
  L(e, t);
}
ie(sd, {}, [], [], !0);
var Cm = /* @__PURE__ */ ne("<!> <!>", 1), km = /* @__PURE__ */ ne("<!> <!> <!> <!> <!> <!>", 1);
function ld(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(N, "$nodesDraggable", n), i = () => U(O, "$nodesConnectable", n), a = () => U(Z, "$elementsSelectable", n), s = () => U(z, "$viewport", n), l = () => U($, "$minZoom", n), u = () => U(H, "$maxZoom", n), c = /* @__PURE__ */ te(), d = /* @__PURE__ */ te(), f = /* @__PURE__ */ te(), v = /* @__PURE__ */ te();
  let w = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), x = m(t, "showFitView", 12, !0), k = m(t, "showLock", 12, !0), g = m(t, "buttonBgColor", 12, void 0), C = m(t, "buttonBgColorHover", 12, void 0), y = m(t, "buttonColor", 12, void 0), _ = m(t, "buttonColorHover", 12, void 0), S = m(t, "buttonBorderColor", 12, void 0), E = m(t, "ariaLabel", 12, void 0), V = m(t, "style", 12, void 0), P = m(t, "orientation", 12, "vertical"), D = m(t, "fitViewOptions", 12, void 0), A = m(t, "class", 12, "");
  const {
    zoomIn: T,
    zoomOut: B,
    fitView: M,
    viewport: z,
    minZoom: $,
    maxZoom: H,
    nodesDraggable: N,
    nodesConnectable: O,
    elementsSelectable: Z
  } = Ge(), K = {
    bgColor: g(),
    bgColorHover: C(),
    color: y(),
    colorHover: _(),
    borderColor: S()
  }, j = () => {
    T();
  }, le = () => {
    B();
  }, J = () => {
    M(D());
  }, Y = () => {
    F(c, !h(c)), N.set(h(c)), O.set(h(c)), Z.set(h(c));
  };
  fe(
    () => (o(), i(), a()),
    () => {
      F(c, o() || i() || a());
    }
  ), fe(() => (s(), l()), () => {
    F(d, s().zoom <= l());
  }), fe(() => (s(), u()), () => {
    F(f, s().zoom >= u());
  }), fe(() => G(P()), () => {
    F(v, P() === "horizontal" ? "horizontal" : "vertical");
  }), vt(), ze();
  const re = /* @__PURE__ */ pe(() => Et([
    "svelte-flow__controls",
    h(v),
    A()
  ])), me = /* @__PURE__ */ pe(() => E() ?? "Svelte Flow controls");
  No(e, {
    get class() {
      return h(re);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(me);
    },
    get style() {
      return V();
    },
    children: (de, ve) => {
      var oe = km(), ge = be(oe);
      pt(ge, t, "before", {});
      var Ye = I(ge, 2);
      {
        var Ze = (ke) => {
          var Ke = Cm(), Ve = be(Ke);
          no(Ve, ct(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return h(f);
              }
            },
            K,
            {
              $$events: { click: j },
              children: (it, Q) => {
                rd(it);
              },
              $$slots: { default: !0 }
            }
          ));
          var st = I(Ve, 2);
          no(st, ct(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return h(d);
              }
            },
            K,
            {
              $$events: { click: le },
              children: (it, Q) => {
                od(it);
              },
              $$slots: { default: !0 }
            }
          )), L(ke, Ke);
        };
        xe(Ye, (ke) => {
          b() && ke(Ze);
        });
      }
      var Be = I(Ye, 2);
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
              $$events: { click: J },
              children: (Ke, Ve) => {
                id(Ke);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Be, (ke) => {
          x() && ke(ee);
        });
      }
      var We = I(Be, 2);
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
              children: (Ke, Ve) => {
                var st = et(), it = be(st);
                {
                  var Q = (he) => {
                    sd(he);
                  }, Te = (he) => {
                    ad(he);
                  };
                  xe(it, (he) => {
                    h(c) ? he(Q) : he(Te, !1);
                  });
                }
                L(Ke, st);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(We, (ke) => {
          k() && ke(Ue);
        });
      }
      var ae = I(We, 2);
      pt(ae, t, "default", {});
      var se = I(ae, 2);
      pt(se, t, "after", {}), L(de, oe);
    },
    $$slots: { default: !0 }
  });
  var Ce = ce({
    get position() {
      return w();
    },
    set position(de) {
      w(de), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(de) {
      b(de), p();
    },
    get showFitView() {
      return x();
    },
    set showFitView(de) {
      x(de), p();
    },
    get showLock() {
      return k();
    },
    set showLock(de) {
      k(de), p();
    },
    get buttonBgColor() {
      return g();
    },
    set buttonBgColor(de) {
      g(de), p();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(de) {
      C(de), p();
    },
    get buttonColor() {
      return y();
    },
    set buttonColor(de) {
      y(de), p();
    },
    get buttonColorHover() {
      return _();
    },
    set buttonColorHover(de) {
      _(de), p();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(de) {
      S(de), p();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(de) {
      E(de), p();
    },
    get style() {
      return V();
    },
    set style(de) {
      V(de), p();
    },
    get orientation() {
      return P();
    },
    set orientation(de) {
      P(de), p();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(de) {
      D(de), p();
    },
    get class() {
      return A();
    },
    set class(de) {
      A(de), p();
    }
  });
  return r(), Ce;
}
ie(
  ld,
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
var _m = /* @__PURE__ */ $e("<circle></circle>");
function ud(e, t) {
  ue(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  ze();
  var o = _m();
  return Se(
    (i) => {
      ye(o, "cx", n()), ye(o, "cy", n()), ye(o, "r", n()), mt(o, 0, i);
    },
    [
      () => dn(Et([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    pe
  ), L(e, o), ce({
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
ie(ud, { radius: {}, class: {} }, [], [], !0);
var Sm = /* @__PURE__ */ $e("<path></path>");
function cd(e, t) {
  ue(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  ze();
  var a = Sm();
  return Se(
    (s) => {
      ye(a, "stroke-width", n()), ye(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), mt(a, 0, s);
    },
    [
      () => dn(Et([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    pe
  ), L(e, a), ce({
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
  cd,
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
const Em = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var Mm = /* @__PURE__ */ $e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Hm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function dd(e, t) {
  ue(t, !1), Qe(e, Hm);
  const [n, r] = ot(), o = () => U(_, "$flowId", n), i = () => U(y, "$viewport", n), a = /* @__PURE__ */ te(), s = /* @__PURE__ */ te(), l = /* @__PURE__ */ te(), u = /* @__PURE__ */ te(), c = /* @__PURE__ */ te();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => jn.Dots), v = m(t, "gap", 12, 20), w = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), x = m(t, "bgColor", 12, void 0), k = m(t, "patternColor", 12, void 0), g = m(t, "patternClass", 12, void 0), C = m(t, "class", 12, "");
  const { viewport: y, flowId: _ } = Ge(), S = w() || Em[f()], E = f() === jn.Dots, V = f() === jn.Cross, P = Array.isArray(v()) ? v() : [v(), v()];
  fe(
    () => (o(), G(d())),
    () => {
      F(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), fe(() => i(), () => {
    F(s, [
      P[0] * i().zoom || 1,
      P[1] * i().zoom || 1
    ]);
  }), fe(() => i(), () => {
    F(l, S * i().zoom);
  }), fe(() => (h(l), h(s)), () => {
    F(u, V ? [h(l), h(l)] : h(s));
  }), fe(
    () => (h(l), h(u)),
    () => {
      F(c, E ? [
        h(l) / 2,
        h(l) / 2
      ] : [
        h(u)[0] / 2,
        h(u)[1] / 2
      ]);
    }
  ), vt(), ze();
  var D = Mm();
  let A;
  var T = W(D), B = W(T);
  {
    var M = (N) => {
      const O = /* @__PURE__ */ pe(() => h(l) / 2);
      ud(N, {
        get radius() {
          return h(O);
        },
        get class() {
          return g();
        }
      });
    }, z = (N) => {
      cd(N, {
        get dimensions() {
          return h(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return g();
        }
      });
    };
    xe(B, (N) => {
      E ? N(M) : N(z, !1);
    });
  }
  X(T);
  var $ = I(T);
  X(D), Se(
    (N) => {
      mt(D, 0, N, "svelte-1r7pe8d"), A = dt(D, "", A, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": k()
      }), ye(T, "id", h(a)), ye(T, "x", i().x % h(s)[0]), ye(T, "y", i().y % h(s)[1]), ye(T, "width", h(s)[0]), ye(T, "height", h(s)[1]), ye(T, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), ye($, "fill", `url(#${h(a)})`);
    },
    [
      () => dn(Et(["svelte-flow__background", C()]))
    ],
    pe
  ), L(e, D);
  var H = ce({
    get id() {
      return d();
    },
    set id(N) {
      d(N), p();
    },
    get variant() {
      return f();
    },
    set variant(N) {
      f(N), p();
    },
    get gap() {
      return v();
    },
    set gap(N) {
      v(N), p();
    },
    get size() {
      return w();
    },
    set size(N) {
      w(N), p();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(N) {
      b(N), p();
    },
    get bgColor() {
      return x();
    },
    set bgColor(N) {
      x(N), p();
    },
    get patternColor() {
      return k();
    },
    set patternColor(N) {
      k(N), p();
    },
    get patternClass() {
      return g();
    },
    set patternClass(N) {
      g(N), p();
    },
    get class() {
      return C();
    },
    set class(N) {
      C(N), p();
    }
  });
  return r(), H;
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
var Pm = /* @__PURE__ */ $e("<rect></rect>");
function fd(e, t) {
  ue(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  ze();
  var v = Pm();
  let w;
  return Se(
    (b, x) => {
      w = mt(v, 0, b, null, w, x), ye(v, "x", n()), ye(v, "y", r()), ye(v, "rx", a()), ye(v, "ry", a()), ye(v, "width", o()), ye(v, "height", i()), dt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ye(v, "shape-rendering", l());
    },
    [
      () => dn(Et(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    pe
  ), L(e, v), ce({
    get x() {
      return n();
    },
    set x(b) {
      n(b), p();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), p();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), p();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), p();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(b) {
      a(b), p();
    },
    get color() {
      return s();
    },
    set color(b) {
      s(b), p();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), p();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), p();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(b) {
      c(b), p();
    },
    get selected() {
      return d();
    },
    set selected(b) {
      d(b), p();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), p();
    }
  });
}
ie(
  fd,
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
  const n = h0({
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
var Vm = /* @__PURE__ */ $e("<title> </title>"), zm = /* @__PURE__ */ $e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function vd(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(Be, "$flowId", n), i = () => U(ge, "$viewport", n), a = () => U(Ye, "$containerWidth", n), s = () => U(Ze, "$containerHeight", n), l = () => U(oe, "$nodeLookup", n), u = () => U(ve, "$nodes", n), c = () => U(ee, "$panZoom", n), d = () => U(We, "$translateExtent", n), f = /* @__PURE__ */ te(), v = /* @__PURE__ */ te(), w = /* @__PURE__ */ te(), b = /* @__PURE__ */ te(), x = /* @__PURE__ */ te(), k = /* @__PURE__ */ te(), g = /* @__PURE__ */ te(), C = /* @__PURE__ */ te(), y = /* @__PURE__ */ te(), _ = /* @__PURE__ */ te(), S = /* @__PURE__ */ te(), E = /* @__PURE__ */ te(), V = /* @__PURE__ */ te();
  let P = m(t, "position", 12, "bottom-right"), D = m(t, "ariaLabel", 12, "Mini map"), A = m(t, "nodeStrokeColor", 12, "transparent"), T = m(t, "nodeColor", 12, void 0), B = m(t, "nodeClass", 12, ""), M = m(t, "nodeBorderRadius", 12, 5), z = m(t, "nodeStrokeWidth", 12, 2), $ = m(t, "bgColor", 12, void 0), H = m(t, "maskColor", 12, void 0), N = m(t, "maskStrokeColor", 12, void 0), O = m(t, "maskStrokeWidth", 12, void 0), Z = m(t, "width", 12, void 0), K = m(t, "height", 12, void 0), j = m(t, "pannable", 12, !0), le = m(t, "zoomable", 12, !0), J = m(t, "inversePan", 12, void 0), Y = m(t, "zoomStep", 12, void 0), re = m(t, "style", 12, ""), me = m(t, "class", 12, "");
  const Ce = 200, de = 150, {
    nodes: ve,
    nodeLookup: oe,
    viewport: ge,
    width: Ye,
    height: Ze,
    flowId: Be,
    panZoom: ee,
    translateExtent: We
  } = Ge(), Ue = T() === void 0 ? void 0 : fa(T()), ae = fa(A()), se = fa(B()), ke = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ke = `svelte-flow__minimap-desc-${o()}`;
  let Ve = /* @__PURE__ */ te(h(f));
  const st = () => h(k);
  fe(
    () => (i(), a(), s()),
    () => {
      F(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), fe(
    () => (l(), h(f), u()),
    () => {
      F(Ve, l().size > 0 ? fc(Po(l()), h(f)) : h(f)), u();
    }
  ), fe(() => G(Z()), () => {
    F(v, Z() ?? Ce);
  }), fe(() => G(K()), () => {
    F(w, K() ?? de);
  }), fe(
    () => (h(Ve), h(v)),
    () => {
      F(b, h(Ve).width / h(v));
    }
  ), fe(
    () => (h(Ve), h(w)),
    () => {
      F(x, h(Ve).height / h(w));
    }
  ), fe(
    () => (h(b), h(x)),
    () => {
      F(k, Math.max(h(b), h(x)));
    }
  ), fe(() => (h(k), h(v)), () => {
    F(g, h(k) * h(v));
  }), fe(
    () => (h(k), h(w)),
    () => {
      F(C, h(k) * h(w));
    }
  ), fe(() => h(k), () => {
    F(y, 5 * h(k));
  }), fe(
    () => (h(Ve), h(g), h(y)),
    () => {
      F(_, h(Ve).x - (h(g) - h(Ve).width) / 2 - h(y));
    }
  ), fe(
    () => (h(Ve), h(C), h(y)),
    () => {
      F(S, h(Ve).y - (h(C) - h(Ve).height) / 2 - h(y));
    }
  ), fe(() => (h(g), h(y)), () => {
    F(E, h(g) + h(y) * 2);
  }), fe(() => (h(C), h(y)), () => {
    F(V, h(C) + h(y) * 2);
  }), vt(), ze();
  const it = /* @__PURE__ */ pe(() => re() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), Q = /* @__PURE__ */ pe(() => Et(["svelte-flow__minimap", me()]));
  No(e, {
    get position() {
      return P();
    },
    get style() {
      return h(it);
    },
    get class() {
      return h(Q);
    },
    "data-testid": "svelte-flow__minimap",
    children: (he, en) => {
      var tn = et(), hn = be(tn);
      {
        var Me = (tt) => {
          var Oe = zm();
          ye(Oe, "aria-labelledby", Ke);
          let Ne;
          var nt = W(Oe);
          {
            var nn = (wt) => {
              var Mt = Vm();
              ye(Mt, "id", Ke);
              var mr = W(Mt, !0);
              X(Mt), Se(() => Rt(mr, D())), L(wt, Mt);
            };
            xe(nt, (wt) => {
              D() && wt(nn);
            });
          }
          var Kt = I(nt);
          Dt(Kt, 1, u, (wt) => wt.id, (wt, Mt) => {
            var mr = et();
            const rt = /* @__PURE__ */ pe(() => l().get(h(Mt).id));
            var Ji = be(mr);
            {
              var qr = (Tt) => {
                const Ao = /* @__PURE__ */ pe(() => er(h(rt))), Io = /* @__PURE__ */ pe(() => Ue == null ? void 0 : Ue(h(rt))), Zo = /* @__PURE__ */ pe(() => ae(h(rt))), Qi = /* @__PURE__ */ pe(() => se(h(rt)));
                fd(Tt, ct(
                  {
                    get x() {
                      return h(rt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(rt).internals.positionAbsolute.y;
                    }
                  },
                  () => h(Ao),
                  {
                    get selected() {
                      return h(rt).selected;
                    },
                    get color() {
                      return h(Io);
                    },
                    get borderRadius() {
                      return M();
                    },
                    get strokeColor() {
                      return h(Zo);
                    },
                    get strokeWidth() {
                      return z();
                    },
                    shapeRendering: ke,
                    get class() {
                      return h(Qi);
                    }
                  }
                ));
              };
              xe(Ji, (Tt) => {
                h(rt) && hc(h(rt)) && Tt(qr);
              });
            }
            L(wt, mr);
          });
          var Kr = I(Kt);
          X(Oe), gt(Oe, (wt, Mt) => Tl == null ? void 0 : Tl(wt, Mt), () => ({
            panZoom: c(),
            viewport: ge,
            getViewScale: st,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: J(),
            zoomStep: Y(),
            pannable: j(),
            zoomable: le()
          })), Se(() => {
            ye(Oe, "width", h(v)), ye(Oe, "height", h(w)), ye(Oe, "viewBox", `${h(_) ?? ""} ${h(S) ?? ""} ${h(E) ?? ""} ${h(V) ?? ""}`), Ne = dt(Oe, "", Ne, {
              "--xy-minimap-mask-background-color-props": H(),
              "--xy-minimap-mask-stroke-color-props": N(),
              "--xy-minimap-mask-stroke-width-props": O() ? O() * h(k) : void 0
            }), ye(Kr, "d", `M${h(_) - h(y)},${h(S) - h(y)}h${h(E) + h(y) * 2}v${h(V) + h(y) * 2}h${-h(E) - h(y) * 2}z
      M${h(f).x ?? ""},${h(f).y ?? ""}h${h(f).width ?? ""}v${h(f).height ?? ""}h${-h(f).width}z`);
          }), L(tt, Oe);
        };
        xe(hn, (tt) => {
          c() && tt(Me);
        });
      }
      L(he, tn);
    },
    $$slots: { default: !0 }
  });
  var Te = ce({
    get position() {
      return P();
    },
    set position(he) {
      P(he), p();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(he) {
      D(he), p();
    },
    get nodeStrokeColor() {
      return A();
    },
    set nodeStrokeColor(he) {
      A(he), p();
    },
    get nodeColor() {
      return T();
    },
    set nodeColor(he) {
      T(he), p();
    },
    get nodeClass() {
      return B();
    },
    set nodeClass(he) {
      B(he), p();
    },
    get nodeBorderRadius() {
      return M();
    },
    set nodeBorderRadius(he) {
      M(he), p();
    },
    get nodeStrokeWidth() {
      return z();
    },
    set nodeStrokeWidth(he) {
      z(he), p();
    },
    get bgColor() {
      return $();
    },
    set bgColor(he) {
      $(he), p();
    },
    get maskColor() {
      return H();
    },
    set maskColor(he) {
      H(he), p();
    },
    get maskStrokeColor() {
      return N();
    },
    set maskStrokeColor(he) {
      N(he), p();
    },
    get maskStrokeWidth() {
      return O();
    },
    set maskStrokeWidth(he) {
      O(he), p();
    },
    get width() {
      return Z();
    },
    set width(he) {
      Z(he), p();
    },
    get height() {
      return K();
    },
    set height(he) {
      K(he), p();
    },
    get pannable() {
      return j();
    },
    set pannable(he) {
      j(he), p();
    },
    get zoomable() {
      return le();
    },
    set zoomable(he) {
      le(he), p();
    },
    get inversePan() {
      return J();
    },
    set inversePan(he) {
      J(he), p();
    },
    get zoomStep() {
      return Y();
    },
    set zoomStep(he) {
      Y(he), p();
    },
    get style() {
      return re();
    },
    set style(he) {
      re(he), p();
    },
    get class() {
      return me();
    },
    set class(he) {
      me(he), p();
    }
  });
  return r(), Te;
}
ie(
  vd,
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
const Ol = (e) => zp(e);
function Lt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: w, nodeOrigin: b, edgeLookup: x, connectionLookup: k } = Ge(), g = (_) => {
    var S, E;
    const V = q(w), P = Ol(_) ? _ : V.get(_.id), D = P.parentId ? Tp(P.position, P.measured, P.parentId, V, q(b)) : P.position, A = {
      ...P,
      position: D,
      width: ((S = P.measured) == null ? void 0 : S.width) ?? P.width,
      height: ((E = P.measured) == null ? void 0 : E.height) ?? P.height
    };
    return Tr(A);
  }, C = (_, S, E = { replace: !1 }) => {
    var V;
    const P = (V = q(w).get(_)) == null ? void 0 : V.internals.userNode;
    if (!P)
      return;
    const D = typeof S == "function" ? S(P) : S;
    E.replace ? d.update((A) => A.map((T) => T.id === _ ? Ol(D) ? D : { ...T, ...D } : T)) : (Object.assign(P, D), d.update((A) => A));
  }, y = (_) => q(w).get(_);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: y,
    getNode: (_) => {
      var S;
      return (S = y(_)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (_) => _ === void 0 ? q(d) : Al(q(w), _),
    getEdge: (_) => q(x).get(_),
    getEdges: (_) => _ === void 0 ? q(f) : Al(q(x), _),
    setZoom: (_, S) => {
      const E = q(c);
      return E ? E.scaleTo(_, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (_, S) => {
      const E = q(i), V = q(c);
      return V ? (await V.setViewport({
        x: _.x ?? E.x,
        y: _.y ?? E.y,
        zoom: _.zoom ?? E.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (_, S, E) => {
      const V = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : q(u), P = q(c);
      return P ? (await P.setViewport({
        x: q(a) / 2 - _ * V,
        y: q(s) / 2 - S * V,
        zoom: V
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (_, S) => {
      const E = q(c);
      if (!E)
        return Promise.resolve(!1);
      const V = gs(_, q(a), q(s), q(l), q(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await E.setViewport(V, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (_, S = !0, E) => {
      const V = wl(_), P = V ? _ : g(_);
      return P ? (E || q(d)).filter((D) => {
        const A = q(w).get(D.id);
        if (!A || !V && D.id === _.id)
          return !1;
        const T = Tr(A), B = bo(T, P);
        return S && B > 0 || B >= P.width * P.height;
      }) : [];
    },
    isNodeIntersecting: (_, S, E = !0) => {
      const V = wl(_) ? _ : g(_);
      if (!V)
        return !1;
      const P = bo(V, S);
      return E && P > 0 || P >= V.width * V.height;
    },
    deleteElements: async ({ nodes: _ = [], edges: S = [] }) => {
      const { nodes: E, edges: V } = await uc({
        nodesToRemove: _,
        edgesToRemove: S,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return E && d.update((P) => P.filter((D) => !E.some(({ id: A }) => A === D.id))), V && f.update((P) => P.filter((D) => !V.some(({ id: A }) => A === D.id))), {
        deletedNodes: E,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (_, S = { snapToGrid: !0 }) => {
      const E = q(v);
      if (!E)
        return _;
      const V = S.snapToGrid ? q(o) : !1, { x: P, y: D, zoom: A } = q(i), { x: T, y: B } = E.getBoundingClientRect(), M = {
        x: _.x - T,
        y: _.y - B
      };
      return Vo(M, [P, D, A], V !== null, V || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (_) => {
      const S = q(v);
      if (!S)
        return _;
      const { x: E, y: V, zoom: P } = q(i), { x: D, y: A } = S.getBoundingClientRect(), T = vc(_, [E, V, P]);
      return {
        x: T.x + D,
        y: T.y + A
      };
    },
    toObject: () => ({
      nodes: q(d).map((_) => ({
        ..._,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ..._.position },
        data: { ..._.data }
      })),
      edges: q(f).map((_) => ({ ..._ })),
      viewport: { ...q(i) }
    }),
    updateNode: C,
    updateNodeData: (_, S, E) => {
      var V;
      const P = (V = q(w).get(_)) == null ? void 0 : V.internals.userNode;
      if (!P)
        return;
      const D = typeof S == "function" ? S(P) : S;
      P.data = E != null && E.replace ? D : { ...P.data, ...D }, d.update((A) => A);
    },
    getNodesBounds: (_) => {
      const S = q(w), E = q(b);
      return Np(_, { nodeLookup: S, nodeOrigin: E });
    },
    getHandleConnections: ({ type: _, id: S, nodeId: E }) => {
      var V;
      return Array.from(((V = q(k).get(`${E}-${_}-${S ?? null}`)) == null ? void 0 : V.values()) ?? []);
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
var Nm = /* @__PURE__ */ ne('<div class="svelte-flow__node-toolbar"><!></div>');
function hd(e, t) {
  ue(t, !1);
  const [n, r] = ot(), o = () => U(C, "$nodes", n), i = () => U(g, "$nodeLookup", n), a = () => U(k, "$viewport", n), s = () => U(x, "$domNode", n), l = /* @__PURE__ */ te(), u = /* @__PURE__ */ te(), c = /* @__PURE__ */ te();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), w = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: k, nodeLookup: g, nodes: C } = Ge(), { getNodesBounds: y } = Lt(), _ = sr("svelteflow__node_id");
  let S = /* @__PURE__ */ te(), E = /* @__PURE__ */ te([]), V = w() !== void 0 ? w() : 10, P = f() !== void 0 ? f() : _e.Top, D = v() !== void 0 ? v() : "center";
  fe(
    () => (o(), G(d()), i()),
    () => {
      o();
      const z = Array.isArray(d()) ? d() : [d() || _];
      F(E, z.reduce(
        ($, H) => {
          const N = i().get(H);
          return N && $.push(N), $;
        },
        []
      ));
    }
  ), fe(
    () => (h(E), a()),
    () => {
      const z = y(h(E));
      z && F(S, Up(z, a(), P, V, D));
    }
  ), fe(() => h(E), () => {
    F(l, h(E).length === 0 ? 1 : Math.max(...h(E).map((z) => (z.internals.z || 5) + 1)));
  }), fe(() => o(), () => {
    F(u, o().filter((z) => z.selected).length);
  }), fe(
    () => (G(b()), h(E), h(u)),
    () => {
      F(c, typeof b() == "boolean" ? b() : h(E).length === 1 && h(E)[0].selected && h(u) === 1);
    }
  ), vt(), ze();
  var A = et(), T = be(A);
  {
    var B = (z) => {
      var $ = Nm();
      let H;
      var N = W($);
      pt(N, t, "default", {}), X($), gt($, (O, Z) => Ci == null ? void 0 : Ci(O, Z), () => ({ domNode: s() })), Se(
        (O) => {
          ye($, "data-id", O), H = dt($, "", H, {
            position: "absolute",
            transform: h(S),
            "z-index": h(l)
          });
        },
        [
          () => h(E).reduce((O, Z) => `${O}${Z.id} `, "").trim()
        ],
        pe
      ), L(z, $);
    };
    xe(T, (z) => {
      s() && h(c) && h(E) && z(B);
    });
  }
  L(e, A);
  var M = ce({
    get nodeId() {
      return d();
    },
    set nodeId(z) {
      d(z), p();
    },
    get position() {
      return f();
    },
    set position(z) {
      f(z), p();
    },
    get align() {
      return v();
    },
    set align(z) {
      v(z), p();
    },
    get offset() {
      return w();
    },
    set offset(z) {
      w(z), p();
    },
    get isVisible() {
      return b();
    },
    set isVisible(z) {
      b(z), p();
    }
  });
  return r(), M;
}
ie(
  hd,
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
class Dm {
  constructor(t) {
    if (Vt(this, "options"), Vt(this, "rootEl"), Vt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
const Lm = () => {
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
}, ti = Lm();
var Tm = /* @__PURE__ */ ne("<button><!></button>");
function Fe(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Tm();
  let i;
  var a = W(o);
  return lr(a, () => n() ?? ft), X(o), Se(() => i = ln(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), L(e, o), ce({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
ie(Fe, { children: {} }, [], [], !0);
var Om = /* @__PURE__ */ ne("<input>");
function gd(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Om();
  oo(r);
  let o;
  Se(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ce();
}
ie(gd, {}, [], [], !0);
var Am = /* @__PURE__ */ ne("<input>");
function $t(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Am();
  oo(r);
  let o;
  Se(() => o = ln(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ce();
}
ie($t, {}, [], [], !0);
var Im = /* @__PURE__ */ ne("<textarea></textarea>");
function St(e, t) {
  ue(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Im();
  Sv(o);
  let i;
  return Se(() => i = ln(o, i, {
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), L(e, o), ce({
    get value() {
      return n();
    },
    set value(a) {
      n(a), p();
    }
  });
}
ie(St, { value: {} }, [], [], !0);
var Zm = /* @__PURE__ */ ne('<div role="button"><!></div>'), Bm = /* @__PURE__ */ ne("<div></div>");
function pd(e, t) {
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
  ze();
  var l = Bm();
  let u;
  return Dt(l, 5, o, vo, (c, d, f) => {
    var v = Zm();
    ye(v, "tabindex", f), v.__click = () => s(h(d), f), v.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), s(h(d), f));
    };
    var w = W(v);
    {
      var b = (k) => {
        var g = Ie();
        Se(() => Rt(g, h(d).label)), L(k, g);
      }, x = (k) => {
        var g = et(), C = be(g);
        lr(C, () => h(d).label ?? ft), L(k, g);
      };
      xe(w, (k) => {
        typeof h(d).label == "string" ? k(b) : k(x, !1);
      });
    }
    X(v), Se(() => mt(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), L(c, v);
  }), X(l), Se(() => u = ln(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), ce({
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
Oi(["click", "keydown"]);
ie(pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Rm = (e, t, n) => t(h(n)), Xm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, Ym = /* @__PURE__ */ ne('<span class="tf-collapse-item-title-icon"><!></span>'), Wm = /* @__PURE__ */ ne('<div class="tf-collapse-item-description"><!></div>'), Km = /* @__PURE__ */ ne('<div class="tf-collapse-item-content"><!></div>'), qm = /* @__PURE__ */ ne('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), jm = /* @__PURE__ */ ne("<div></div>");
const Fm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function md(e, t) {
  ue(t, !0), Qe(e, Fm);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Ft([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = jm();
  return Dt(a, 21, n, vo, (s, l, u) => {
    var c = qm(), d = W(c);
    ye(d, "tabindex", u), d.__click = [Rm, i, l], d.__keydown = [Xm, i, l];
    var f = W(d);
    {
      var v = (y) => {
        var _ = Ym(), S = W(_);
        Yn(S, {
          get target() {
            return h(l).icon;
          }
        }), X(_), L(y, _);
      };
      xe(f, (y) => {
        h(l).icon && y(v);
      });
    }
    var w = I(f, 2);
    Yn(w, {
      get target() {
        return h(l).title;
      }
    });
    var b = I(w, 2);
    X(d);
    var x = I(d, 2);
    {
      var k = (y) => {
        var _ = Wm(), S = W(_);
        Yn(S, {
          get target() {
            return h(l).description;
          }
        }), X(_), L(y, _);
      };
      xe(x, (y) => {
        h(l).description && y(k);
      });
    }
    var g = I(x, 2);
    {
      var C = (y) => {
        var _ = Km(), S = W(_);
        Yn(S, {
          get target() {
            return h(l).content;
          }
        }), X(_), L(y, _);
      };
      xe(g, (y) => {
        o().includes(h(l).key) && y(C);
      });
    }
    X(c), Se((y) => mt(b, 1, `tf-collapse-item-title-arrow ${y ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), L(s, c);
  }), X(a), Se(() => {
    dt(a, t.style), mt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, a), ce({
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
Oi(["click", "keydown"]);
ie(md, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Yn(e, t) {
  ue(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = be(r);
  {
    var i = (s) => {
      var l = et(), u = be(l);
      lr(u, () => n() ?? ft), L(s, l);
    }, a = (s) => {
      var l = et(), u = be(l);
      rs(u, n), L(s, l);
    };
    xe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return L(e, r), ce({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
ie(Yn, { target: {} }, [], [], !0);
var Gm = (e, t, n) => t(h(n)), Um = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Jm = /* @__PURE__ */ ne('<div class="tf-select-content-children"><!></div>'), Qm = /* @__PURE__ */ ne('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), e2 = /* @__PURE__ */ ne('<div class="tf-select-content nopan nodrag"><!></div>'), t2 = /* @__PURE__ */ ne("<!> <!>", 1), n2 = /* @__PURE__ */ ne('<div class="tf-select-input-placeholder"> </div>'), r2 = /* @__PURE__ */ ne('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), o2 = /* @__PURE__ */ ne("<div><!></div>");
function Cn(e, t) {
  ue(t, !0);
  const n = (C, y = ft) => {
    var _ = et(), S = be(_);
    Dt(S, 19, y, (E, V) => `${V}_${E.value}`, (E, V) => {
      var P = Qm(), D = be(P);
      D.__click = [Gm, b, V];
      var A = W(D), T = W(A);
      {
        var B = (H) => {
          var N = Um();
          L(H, N);
        };
        xe(T, (H) => {
          h(V).children && h(V).children.length > 0 && H(B);
        });
      }
      X(A);
      var M = I(A, 2);
      Yn(M, {
        get target() {
          return h(V).label;
        }
      }), X(D);
      var z = I(D, 2);
      {
        var $ = (H) => {
          var N = Jm(), O = W(N);
          n(O, () => h(V).children), X(N), L(H, N);
        };
        xe(z, (H) => {
          h(V).children && h(V).children.length > 0 && (l() || c().includes(h(V).value)) && H($);
        });
      }
      L(E, P);
    }), L(C, _);
  };
  let r = m(t, "items", 7), o = m(t, "onExpand", 7), i = m(t, "onSelect", 7), a = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), l = m(t, "expandAll", 7, !0), u = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ yt(t, [
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
  ]), v = /* @__PURE__ */ Pe(() => {
    const C = [], y = (_) => {
      for (let S of _)
        a().length > 0 ? a().includes(S.value) && C.push(S) : s().includes(S.value) && C.push(S), S.children && S.children.length > 0 && y(S.children);
    };
    return y(r()), C;
  }), w;
  function b(C) {
    var y, _;
    if (C.children && C.children.length > 0) {
      (y = o()) == null || y(C);
      return;
    } else
      w == null || w.hide(), (_ = i()) == null || _(C);
  }
  var x = o2();
  let k;
  var g = W(x);
  return $n(
    Oo(g, {
      floating: (C) => {
        var y = e2(), _ = W(y);
        n(_, r), X(y), L(C, y);
      },
      children: (C, y) => {
        var _ = r2();
        let S;
        var E = W(_);
        Dt(
          E,
          23,
          () => h(v),
          (V, P) => `${P}_${V.value}`,
          (V, P, D) => {
            var A = et(), T = be(A);
            {
              var B = (z) => {
                var $ = et(), H = be($);
                {
                  var N = (O) => {
                    Yn(O, {
                      get target() {
                        return h(P).label;
                      }
                    });
                  };
                  xe(H, (O) => {
                    h(D) === 0 && O(N);
                  });
                }
                L(z, $);
              }, M = (z) => {
                var $ = t2(), H = be($);
                Yn(H, {
                  get target() {
                    return h(P).label;
                  }
                });
                var N = I(H, 2);
                {
                  var O = (Z) => {
                    var K = Ie(",");
                    L(Z, K);
                  };
                  xe(N, (Z) => {
                    h(D) < h(v).length - 1 && Z(O);
                  });
                }
                L(z, $);
              };
              xe(T, (z) => {
                u() ? z(M, !1) : z(B);
              });
            }
            L(V, A);
          },
          (V) => {
            var P = n2(), D = W(P, !0);
            X(P), Se(() => Rt(D, d())), L(V, P);
          }
        ), X(E), He(2), X(_), Se(() => S = ln(_, S, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), L(C, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => w = C,
    () => w
  ), X(x), Se(() => k = ln(x, k, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), L(e, x), ce({
    get items() {
      return r();
    },
    set items(C) {
      r(C), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), p();
    },
    get onSelect() {
      return i();
    },
    set onSelect(C) {
      i(C), p();
    },
    get value() {
      return a();
    },
    set value(C = []) {
      a(C), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), p();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), p();
    }
  });
}
Oi(["click"]);
ie(
  Cn,
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
const $o = Math.min, Sr = Math.max, Si = Math.round, mn = (e) => ({
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
function Do(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fr(e) {
  return e.split("-")[0];
}
function Lo(e) {
  return e.split("-")[1];
}
function yd(e) {
  return e === "x" ? "y" : "x";
}
function xs(e) {
  return e === "y" ? "height" : "width";
}
function Ar(e) {
  return ["top", "bottom"].includes(fr(e)) ? "y" : "x";
}
function $s(e) {
  return yd(Ar(e));
}
function s2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Lo(e), o = $s(e), i = xs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Ei(a)), [a, Ei(a)];
}
function l2(e) {
  const t = Ei(e);
  return [Oa(e), t, Oa(t)];
}
function Oa(e) {
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
  const o = Lo(e);
  let i = u2(fr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Oa)))), i;
}
function Ei(e) {
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
function wd(e) {
  return typeof e != "number" ? d2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Mi(e) {
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
  const i = Ar(t), a = $s(t), s = xs(a), l = fr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (Lo(t)) {
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
  } = Zl(u, r, l), f = r, v = {}, w = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: k
    } = s[b], {
      x: g,
      y: C,
      data: y,
      reset: _
    } = await k({
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
    c = g ?? c, d = C ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...y
      }
    }, _ && w <= 50 && (w++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (u = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: c,
      y: d
    } = Zl(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function bd(e, t) {
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
  } = Do(t, e), w = wd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Mi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), k = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(g)) ? await (i.getScale == null ? void 0 : i.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = Mi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: k,
    offsetParent: g,
    strategy: l
  }) : k);
  return {
    top: (x.top - y.top + w.top) / C.y,
    bottom: (y.bottom - x.bottom + w.bottom) / C.y,
    left: (x.left - y.left + w.left) / C.x,
    right: (y.right - x.right + w.right) / C.x
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
    } = Do(e, t) || {};
    if (u == null)
      return {};
    const d = wd(c), f = {
      x: n,
      y: r
    }, v = $s(o), w = xs(v), b = await a.getDimensions(u), x = v === "y", k = x ? "top" : "left", g = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", y = i.reference[w] + i.reference[v] - f[v] - i.floating[w], _ = f[v] - i.reference[v], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = S ? S[C] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(S))) && (E = s.floating[C] || i.floating[w]);
    const V = y / 2 - _ / 2, P = E / 2 - b[w] / 2 - 1, D = $o(d[k], P), A = $o(d[g], P), T = D, B = E - b[w] - A, M = E / 2 - b[w] / 2 + V, z = Ta(T, M, B), $ = !l.arrow && Lo(o) != null && M !== z && i.reference[w] / 2 - (M < T ? D : A) - b[w] / 2 < 0, H = $ ? M < T ? M - T : M - B : 0;
    return {
      [v]: f[v] + H,
      data: {
        [v]: z,
        centerOffset: M - z - H,
        ...$ && {
          alignmentOffset: H
        }
      },
      reset: $
    };
  }
}), h2 = function(e) {
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
        fallbackAxisSideDirection: w = "none",
        flipAlignment: b = !0,
        ...x
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = fr(o), g = Ar(s), C = fr(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || (C || !b ? [Ei(s)] : l2(s)), S = w !== "none";
      !f && S && _.push(...c2(s, b, w, y));
      const E = [s, ..._], V = await bd(t, x), P = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && P.push(V[k]), d) {
        const M = s2(o, a, y);
        P.push(V[M[0]], V[M[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: P
      }], !P.every((M) => M <= 0)) {
        var A, T;
        const M = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, z = E[M];
        if (z)
          return {
            data: {
              index: M,
              overflows: D
            },
            reset: {
              placement: z
            }
          };
        let $ = (T = D.filter((H) => H.overflows[0] <= 0).sort((H, N) => H.overflows[1] - N.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var B;
              const H = (B = D.filter((N) => {
                if (S) {
                  const O = Ar(N.placement);
                  return O === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((O) => O > 0).reduce((O, Z) => O + Z, 0)]).sort((N, O) => N[1] - O[1])[0]) == null ? void 0 : B[0];
              H && ($ = H);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function g2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = fr(n), s = Lo(n), l = Ar(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Do(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: w
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof w == "number" && (v = s === "end" ? w * -1 : w), l ? {
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
      } = t, l = await g2(t, e);
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
          fn: (x) => {
            let {
              x: k,
              y: g
            } = x;
            return {
              x: k,
              y: g
            };
          }
        },
        ...l
      } = Do(e, t), u = {
        x: n,
        y: r
      }, c = await bd(t, l), d = Ar(fr(o)), f = yd(d);
      let v = u[f], w = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", g = v + c[x], C = v - c[k];
        v = Ta(g, v, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", g = w + c[x], C = w - c[k];
        w = Ta(g, w, C);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: w
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
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
function Xt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (xd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function xd(e) {
  return ji() ? e instanceof Node || e instanceof Xt(e).Node : !1;
}
function un(e) {
  return ji() ? e instanceof Element || e instanceof Xt(e).Element : !1;
}
function kn(e) {
  return ji() ? e instanceof HTMLElement || e instanceof Xt(e).HTMLElement : !1;
}
function Bl(e) {
  return !ji() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot;
}
function To(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = cn(e);
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
  const t = ks(), n = un(e) ? cn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function w2(e) {
  let t = Jn(e);
  for (; kn(t) && !Ir(t); ) {
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
function cn(e) {
  return Xt(e).getComputedStyle(e);
}
function Gi(e) {
  return un(e) ? {
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
function $d(e) {
  const t = Jn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kn(t) && To(t) ? t : $d(t);
}
function Cd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xt(o);
  return i ? (Aa(a), t.concat(a, a.visualViewport || [], To(o) ? o : [], [])) : t.concat(o, Cd(o, []));
}
function Aa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function kd(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Si(n) !== i || Si(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function _d(e) {
  return un(e) ? e : e.contextElement;
}
function Er(e) {
  const t = _d(e);
  if (!kn(t))
    return mn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = kd(t);
  let a = (i ? Si(n.width) : n.width) / r, s = (i ? Si(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const b2 = /* @__PURE__ */ mn(0);
function Sd(e) {
  const t = Xt(e);
  return !ks() || !t.visualViewport ? b2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function x2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Xt(e) ? !1 : t;
}
function Co(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = _d(e);
  let a = mn(1);
  t && (r ? un(r) && (a = Er(r)) : a = Er(e));
  const s = x2(i, n, r) ? Sd(i) : mn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Xt(i), v = r && un(r) ? Xt(r) : r;
    let w = f, b = Aa(w);
    for (; b && r && v !== w; ) {
      const x = Er(b), k = b.getBoundingClientRect(), g = cn(b), C = k.left + (b.clientLeft + parseFloat(g.paddingLeft)) * x.x, y = k.top + (b.clientTop + parseFloat(g.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += y, w = Xt(b), b = Aa(w);
    }
  }
  return Mi({
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
function Ed(e, t, n) {
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
  }, u = mn(1);
  const c = mn(0), d = kn(r);
  if ((d || !d && !i) && ((Wr(r) !== "body" || To(a)) && (l = Gi(r)), kn(r))) {
    const v = Co(r);
    u = Er(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Ed(a, l, !0) : mn(0);
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
  return cn(r).direction === "rtl" && (a += Sr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function _2(e, t) {
  const n = Xt(e), r = An(e), o = n.visualViewport;
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
  const n = Co(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = kn(e) ? Er(e) : mn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
  else if (un(t))
    r = S2(t, n);
  else {
    const o = Sd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Mi(r);
}
function Md(e, t) {
  const n = Jn(e);
  return n === t || !un(n) || Ir(n) ? !1 : cn(n).position === "fixed" || Md(n, t);
}
function E2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cd(e, []).filter((s) => un(s) && Wr(s) !== "body"), o = null;
  const i = cn(e).position === "fixed";
  let a = i ? Jn(e) : e;
  for (; un(a) && !Ir(a); ) {
    const s = cn(a), l = Cs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || To(a) && !l && Md(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = Jn(a);
  }
  return t.set(e, r), r;
}
function M2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Fi(t) ? [] : E2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
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
function H2(e) {
  const {
    width: t,
    height: n
  } = kd(e);
  return {
    width: t,
    height: n
  };
}
function P2(e, t, n) {
  const r = kn(t), o = An(t), i = n === "fixed", a = Co(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = mn(0);
  if (r || !r && !i)
    if ((Wr(t) !== "body" || To(o)) && (s = Gi(t)), r) {
      const f = Co(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = _s(o));
  const u = o && !r && !i ? Ed(o, s) : mn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function va(e) {
  return cn(e).position === "static";
}
function Xl(e, t) {
  if (!kn(e) || cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function Hd(e, t) {
  const n = Xt(e);
  if (Fi(e))
    return n;
  if (!kn(e)) {
    let o = Jn(e);
    for (; o && !Ir(o); ) {
      if (un(o) && !va(o))
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
const V2 = async function(e) {
  const t = this.getOffsetParent || Hd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: P2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function z2(e) {
  return cn(e).direction === "rtl";
}
const N2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $2,
  getDocumentElement: An,
  getClippingRect: M2,
  getOffsetParent: Hd,
  getElementRects: V2,
  getClientRects: C2,
  getDimensions: H2,
  getScale: Er,
  isElement: un,
  isRTL: z2
}, D2 = p2, L2 = m2, T2 = h2, O2 = v2, A2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: N2,
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
    const k = document.querySelector(e);
    if (k)
      e = k;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const k = document.querySelector(n);
    if (k)
      u = k;
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
        D2(o),
        // 手动偏移配置
        T2(i),
        //自动翻转
        L2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [O2({ element: c })] : []
      ]
    }).then(({ x: k, y: g, placement: C, middlewareData: y }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${g}px`
      }), l) {
        const { x: _, y: S } = y.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: S != null ? `${S}px` : "",
          right: "",
          bottom: "",
          [E]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function w() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(k) {
    k.stopPropagation(), f ? w() : v();
  }
  function x(k) {
    u.contains(k.target) || w();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      w();
    },
    isVisible() {
      return f;
    }
  };
};
var Z2 = /* @__PURE__ */ ne('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Oo(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, a, s;
  Wt(() => (s = I2({
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
  lr(d, n), X(c), $n(c, (w) => i = w, () => i);
  var f = I(c, 2), v = W(f);
  return lr(v, r), X(f), $n(f, (w) => a = w, () => a), X(u), L(e, u), ce({
    hide: l,
    get children() {
      return n();
    },
    set children(w) {
      n(w), p();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), p();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), p();
    }
  });
}
ie(Oo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Je(e, t) {
  ue(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var a = et(), s = be(a);
  return Lv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = ln(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = et(), f = be(d);
    lr(f, () => n() ?? ft), L(u, d);
  }), L(e, a), ce({
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
var B2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const R2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ui(e, t) {
  ue(t, !0), Qe(e, R2);
  const n = /* @__PURE__ */ yt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Fe(e, ct(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = B2();
      L(r, i);
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
}, tr = () => sr("tinyflow_options");
var W2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), K2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), q2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), j2 = /* @__PURE__ */ ne('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), F2 = /* @__PURE__ */ ne('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const G2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function vn(e, t) {
  ue(t, !0), Qe(e, G2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), a = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Lt(), x = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: k } = X2(), { copyNode: g } = Y2(), C = tr(), y = () => {
    var $;
    ($ = C.onNodeExecute) == null || $.call(C, b(r()));
  };
  var _ = F2(), S = be(_);
  {
    var E = ($) => {
      hd($, {
        get position() {
          return _e.Top;
        },
        align: "end",
        children: (H, N) => {
          var O = j2(), Z = W(O);
          {
            var K = (re) => {
              Fe(re, {
                class: "tf-node-toolbar-item",
                onclick: y,
                children: (me, Ce) => {
                  var de = W2();
                  L(me, de);
                },
                $$slots: { default: !0 }
              });
            };
            xe(Z, (re) => {
              s() && re(K);
            });
          }
          var j = I(Z, 2);
          {
            var le = (re) => {
              Fe(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  g(r());
                },
                children: (me, Ce) => {
                  var de = K2();
                  L(me, de);
                },
                $$slots: { default: !0 }
              });
            };
            xe(j, (re) => {
              l() && re(le);
            });
          }
          var J = I(j, 2);
          {
            var Y = (re) => {
              Fe(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  k(r());
                },
                children: (me, Ce) => {
                  var de = q2();
                  L(me, de);
                },
                $$slots: { default: !0 }
              });
            };
            xe(J, (re) => {
              u() && re(Y);
            });
          }
          X(O), L(H, O);
        },
        $$slots: { default: !0 }
      });
    };
    xe(S, ($) => {
      (s() || l() || u()) && $(E);
    });
  }
  var V = I(S, 2), P = I(W(V), 2), D = W(P);
  md(D, {
    items: x,
    activeKeys: v,
    onChange: ($, H) => {
      var N;
      w(r(), { expand: H == null ? void 0 : H.includes("key") }), (N = f()) == null || N(H != null && H.includes("key") ? "key" : "");
    }
  }), X(P), X(V);
  var A = I(V, 2);
  {
    var T = ($) => {
      Un($, {
        type: "target",
        get position() {
          return _e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(A, ($) => {
      d() && $(T);
    });
  }
  var B = I(A, 2);
  {
    var M = ($) => {
      Un($, {
        type: "source",
        get position() {
          return _e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(B, ($) => {
      c() && $(M);
    });
  }
  var z = I(B, 2);
  return lr(z, () => i() ?? ft), L(e, _), ce({
    get data() {
      return n();
    },
    set data($) {
      n($), p();
    },
    get id() {
      return r();
    },
    set id($ = "") {
      r($), p();
    },
    get icon() {
      return o();
    },
    set icon($) {
      o($), p();
    },
    get handle() {
      return i();
    },
    set handle($) {
      i($), p();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute($ = !0) {
      s($), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy($ = !0) {
      l($), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete($ = !0) {
      u($), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle($ = !0) {
      c($), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle($ = !0) {
      d($), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse($) {
      f($), p();
    }
  });
}
ie(
  vn,
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
function ht() {
  return sr("svelteflow__node_id");
}
const Pd = [
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
    value: "fixed",
    label: "固定值"
  }
  // {
  //     value: 'input',
  //     label: '输入'
  // }
];
var J2 = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Q2 = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ey = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ty = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Vd(e, t) {
  ue(t, !0), Qe(e, ty);
  const [n, r] = ot(), o = () => U(h(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = ht(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var P, D;
    return {
      ...i(),
      ...(D = (P = o()) == null ? void 0 : P.data) == null ? void 0 : D.parameters[a()]
    };
  });
  const { updateNodeData: c } = Lt(), d = (P, D) => {
    c(s, (A) => {
      let T = A.data.parameters;
      return T[a()][P] = D, { parameters: T };
    });
  }, f = (P) => {
    const D = P.target.value;
    d("name", D);
  }, v = (P) => {
    const D = P.target.checked;
    d("required", D);
  }, w = (P) => {
    const D = P.value;
    D && d("dataType", D);
  };
  let b;
  const x = () => {
    c(s, (P) => {
      let D = P.data.parameters;
      return D.splice(a(), 1), { parameters: [...D] };
    }), b == null || b.hide();
  };
  var k = ey(), g = be(k), C = W(g);
  $t(C, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), X(g);
  var y = I(g, 2), _ = W(y);
  gd(_, {
    get checked() {
      return h(u).required;
    },
    onchange: v
  }), X(y);
  var S = I(y, 2), E = W(S);
  $n(
    Oo(E, {
      placement: "bottom",
      floating: (P) => {
        var D = J2(), A = W(D), T = I(W(A));
        const B = /* @__PURE__ */ Pe(() => h(u).dataType ? [h(u).dataType] : ["String"]);
        Cn(T, {
          items: Pd,
          style: "width: 100%",
          onSelect: w,
          get value() {
            return h(B);
          }
        }), X(A);
        var M = I(A, 2), z = I(W(M));
        St(z, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return h(u).defaultValue;
          },
          onchange: (Z) => {
            const K = Z.target.value;
            d("defaultValue", K);
          }
        }), X(M);
        var $ = I(M, 2), H = I(W($));
        St(H, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return h(u).description;
          },
          onchange: (Z) => {
            const K = Z.target.value;
            d("description", K);
          }
        }), X($);
        var N = I($, 2), O = W(N);
        Fe(O, {
          onclick: x,
          children: (Z, K) => {
            He();
            var j = Ie("删除");
            L(Z, j);
          },
          $$slots: { default: !0 }
        }), X(N), X(D), L(P, D);
      },
      children: (P, D) => {
        Fe(P, {
          class: "input-btn-more",
          children: (A, T) => {
            var B = Q2();
            L(A, B);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => b = P,
    () => b
  ), X(S), L(e, k);
  var V = ce({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), p();
    },
    get index() {
      return a();
    },
    set index(P) {
      a(P), p();
    }
  });
  return r(), V;
}
ie(Vd, { parameter: {}, index: {} }, [], [], !0);
var ny = /* @__PURE__ */ ne('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ry = /* @__PURE__ */ ne('<div class="none-params svelte-3n0wca">无输入参数</div>'), oy = /* @__PURE__ */ ne('<div class="input-container svelte-3n0wca"><!> <!></div>');
const iy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function zd(e, t) {
  ue(t, !0), Qe(e, iy);
  const [n, r] = ot(), o = () => U(h(a), "$node", n);
  let i = ht(), a = /* @__PURE__ */ Pe(() => pr(i)), s = /* @__PURE__ */ Pe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = oy(), u = W(l);
  {
    var c = (f) => {
      var v = ny();
      He(4), L(f, v);
    };
    xe(u, (f) => {
      h(s).length !== 0 && f(c);
    });
  }
  var d = I(u, 2);
  Dt(
    d,
    19,
    () => h(s),
    (f) => f.id,
    (f, v, w) => {
      Vd(f, {
        get parameter() {
          return h(v);
        },
        get index() {
          return h(w);
        }
      });
    },
    (f) => {
      var v = ry();
      L(f, v);
    }
  ), X(l), L(e, l), ce(), r();
}
ie(zd, {}, [], [], !0);
const Nd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = Zr()), Nd(t.children);
  });
}, En = () => {
  const { updateNodeData: e } = Lt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Nd(r == null ? void 0 : r.children);
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
var ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), sy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ly = /* @__PURE__ */ ne('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const uy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Dd(e, t) {
  ue(t, !0), Qe(e, uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return vn(e, ct(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var s = ay();
      L(a, s);
    },
    children: (a, s) => {
      var l = ly(), u = be(l), c = W(u);
      Je(c, {
        level: 3,
        children: (v, w) => {
          He();
          var b = Ie("输入参数");
          L(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = I(c, 2);
      Fe(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, w) => {
          var b = sy();
          L(v, b);
        },
        $$slots: { default: !0 }
      }), X(u);
      var f = I(u, 2);
      zd(f, {}), L(a, l);
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
ie(Dd, { data: {} }, [], [], !0);
const Ld = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Ld(e, r.source, n));
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
  const t = ht(), n = pr(t), { nodes: r, edges: o } = Ge();
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
      Ld(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = Yl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var dy = /* @__PURE__ */ ne('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), fy = /* @__PURE__ */ ne('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const vy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Td(e, t) {
  ue(t, !0), Qe(e, vy);
  const [n, r] = ot(), o = () => U(h(c), "$node", n), i = () => U(y, "$selectItems", n);
  Wt(() => {
    h(d).refType || k({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Pe(() => pr(u)), d = /* @__PURE__ */ Pe(() => {
    var z;
    return {
      ...a(),
      ...(z = o()) == null ? void 0 : z.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Lt(), v = (z, $) => {
    f(u, (H) => {
      let N = H.data[l()];
      return N[s()] = { ...N[s()], [z]: $ }, { [l()]: N };
    });
  }, w = (z) => {
    const $ = z.target.value;
    v("name", $);
  }, b = (z) => {
    const $ = z.target.value;
    v("value", $);
  }, x = (z) => {
    const $ = z.value;
    v("ref", $);
  }, k = (z) => {
    const $ = z.value;
    v("refType", $);
  };
  let g;
  const C = () => {
    f(u, (z) => {
      let $ = z.data[l()];
      return $.splice(s(), 1), { [l()]: [...$] };
    }), g == null || g.hide();
  }, y = cy();
  var _ = fy(), S = be(_), E = W(S);
  $t(E, {
    style: "width: 100%;",
    get value() {
      return h(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), X(S);
  var V = I(S, 2), P = W(V);
  {
    var D = (z) => {
      $t(z, {
        get value() {
          return h(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, A = (z, $) => {
      {
        var H = (N) => {
          const O = /* @__PURE__ */ Pe(() => [h(d).ref]);
          Cn(N, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return h(O);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        xe(
          z,
          (N) => {
            h(d).refType !== "input" && N(H);
          },
          $
        );
      }
    };
    xe(P, (z) => {
      h(d).refType === "fixed" ? z(D) : z(A, !1);
    });
  }
  X(V);
  var T = I(V, 2), B = W(T);
  $n(
    Oo(B, {
      placement: "bottom",
      floating: (z) => {
        var $ = dy(), H = W($), N = I(W(H));
        const O = /* @__PURE__ */ Pe(() => h(d).refType ? [h(d).refType] : []);
        Cn(N, {
          items: U2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(O);
          },
          onSelect: k
        }), X(H);
        var Z = I(H, 2), K = I(W(Z));
        St(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (re) => {
            const me = re.target.value;
            v("defaultValue", me);
          }
        }), X(Z);
        var j = I(Z, 2), le = I(W(j));
        St(le, {
          rows: 3,
          style: "width: 100%;",
          onchange: (re) => {
            const me = re.target.value;
            v("description", me);
          }
        }), X(j);
        var J = I(j, 2), Y = W(J);
        Fe(Y, {
          onclick: C,
          children: (re, me) => {
            He();
            var Ce = Ie("删除");
            L(re, Ce);
          },
          $$slots: { default: !0 }
        }), X(J), X($), L(z, $);
      },
      children: (z, $) => {
        Ui(z, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => g = z,
    () => g
  ), X(T), L(e, _);
  var M = ce({
    get parameter() {
      return a();
    },
    set parameter(z) {
      a(z), p();
    },
    get index() {
      return s();
    },
    set index(z) {
      s(z), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(z) {
      l(z), p();
    }
  });
  return r(), M;
}
ie(Td, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var hy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), gy = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), py = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const my = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Zt(e, t) {
  ue(t, !0), Qe(e, my);
  const [n, r] = ot(), o = () => U(h(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = ht(), l = /* @__PURE__ */ Pe(() => pr(s)), u = /* @__PURE__ */ Pe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = py(), d = W(c);
  {
    var f = (b) => {
      var x = hy();
      He(4), L(b, x);
    };
    xe(d, (b) => {
      h(u).length !== 0 && b(f);
    });
  }
  var v = I(d, 2);
  Dt(
    v,
    19,
    () => h(u),
    (b) => b.id,
    (b, x, k) => {
      Td(b, {
        get parameter() {
          return h(x);
        },
        get index() {
          return h(k);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = gy(), k = W(x, !0);
      X(x), Se(() => Rt(k, i())), L(b, x);
    }
  ), X(c), L(e, c);
  var w = ce({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), p();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(b = "parameters") {
      a(b), p();
    }
  });
  return r(), w;
}
ie(Zt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var yy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), wy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), by = /* @__PURE__ */ ne('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const xy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Od(e, t) {
  ue(t, !0), Qe(e, xy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En();
  return vn(e, ct(
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
        L(a, s);
      },
      children: (a, s) => {
        var l = by(), u = be(l), c = W(u);
        Je(c, {
          level: 3,
          children: (v, w) => {
            He();
            var b = Ie("输出参数");
            L(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = I(c, 2);
        Fe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, w) => {
            var b = wy();
            L(v, b);
          },
          $$slots: { default: !0 }
        }), X(u);
        var f = I(u, 2);
        Zt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(a, l);
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
ie(Od, { data: {} }, [], [], !0);
var $y = /* @__PURE__ */ $e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Cy = /* @__PURE__ */ ne('<div class="input-more-item svelte-1cfeest"><!></div>'), ky = /* @__PURE__ */ ne('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), _y = /* @__PURE__ */ ne('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Sy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ad(e, t) {
  ue(t, !0), Qe(e, Sy);
  const [n, r] = ot(), o = () => U(h(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var H;
    let N = (H = o()) == null ? void 0 : H.data[s()], O;
    if (N && a().length > 0) {
      let Z = N;
      for (let K = 0; K < a().length; K++) {
        const j = a()[K];
        K == a().length - 1 ? O = Z[j] : Z = Z[j].children;
      }
    }
    return { ...i(), ...O };
  });
  const { updateNodeData: d } = Lt(), f = (H, N) => {
    d(l, (O) => {
      const Z = O.data[s()];
      if (Z && a().length > 0) {
        let K = Z;
        for (let j = 0; j < a().length; j++) {
          const le = a()[j];
          j == a().length - 1 ? K[le] = { ...K[le], [H]: N } : K = Z[le].children;
        }
      }
      return { [s()]: Z };
    });
  }, v = (H) => {
    const N = H.target.value;
    f("name", N);
  }, w = (H) => {
    const N = H.value;
    f("dataType", N);
  };
  let b;
  const x = () => {
    d(l, (H) => {
      let N = H.data[s()];
      if (N && a().length > 0) {
        let O = N;
        for (let Z = 0; Z < a().length; Z++) {
          const K = a()[Z];
          Z == a().length - 1 ? O.splice(K, 1) : O = O[K].children;
        }
      }
      return { [s()]: [...N] };
    }), b == null || b.hide();
  }, k = () => {
    d(l, (H) => {
      let N = H.data[s()];
      if (N && a().length > 0) {
        let O = N;
        for (let Z = 0; Z < a().length; Z++) {
          const K = a()[Z];
          Z == a().length - 1 ? O[K].children ? O[K].children.push({
            id: Zr(),
            name: "newParam",
            dataType: "String"
          }) : O[K].children = [
            {
              id: Zr(),
              name: "newParam",
              dataType: "String"
            }
          ] : O = O[K].children;
        }
      }
      return { [s()]: [...N] };
    });
  };
  var g = _y(), C = be(g), y = W(C);
  {
    var _ = (H) => {
      var N = et(), O = be(N);
      Dt(O, 17, a, vo, (Z, K) => {
        He();
        var j = Ie(" ");
        L(Z, j);
      }), L(H, N);
    };
    xe(y, (H) => {
      a().length > 1 && H(_);
    });
  }
  var S = I(y, 2);
  const E = /* @__PURE__ */ Pe(() => h(c).nameDisabled === !0);
  $t(S, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return h(E);
    }
  }), X(C);
  var V = I(C, 2), P = W(V);
  const D = /* @__PURE__ */ Pe(() => h(c).dataType ? [h(c).dataType] : []), A = /* @__PURE__ */ Pe(() => h(c).dataTypeDisabled === !0);
  Cn(P, {
    items: Pd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(D);
    },
    get disabled() {
      return h(A);
    },
    onSelect: w
  });
  var T = I(P, 2);
  {
    var B = (H) => {
      Fe(H, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (N, O) => {
          var Z = $y();
          L(N, Z);
        },
        $$slots: { default: !0 }
      });
    };
    xe(T, (H) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && h(c).addChildDisabled !== !0 && H(B);
    });
  }
  X(V);
  var M = I(V, 2), z = W(M);
  $n(
    Oo(z, {
      placement: "bottom",
      floating: (H) => {
        var N = ky(), O = W(N), Z = I(W(O));
        St(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Y) => {
            const re = Y.target.value;
            f("defaultValue", re);
          }
        }), X(O);
        var K = I(O, 2), j = I(W(K));
        St(j, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Y) => {
            const re = Y.target.value;
            f("description", re);
          }
        }), X(K);
        var le = I(K, 2);
        {
          var J = (Y) => {
            var re = Cy(), me = W(re);
            Fe(me, {
              onclick: x,
              children: (Ce, de) => {
                He();
                var ve = Ie("删除");
                L(Ce, ve);
              },
              $$slots: { default: !0 }
            }), X(re), L(Y, re);
          };
          xe(le, (Y) => {
            h(c).deleteDisabled !== !0 && Y(J);
          });
        }
        X(N), L(H, N);
      },
      children: (H, N) => {
        Ui(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => b = H,
    () => b
  ), X(M), L(e, g);
  var $ = ce({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), p();
    },
    get position() {
      return a();
    },
    set position(H) {
      a(H), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(H) {
      s(H), p();
    }
  });
  return r(), $;
}
ie(Ad, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ey = /* @__PURE__ */ ne("<!> <!>", 1), My = /* @__PURE__ */ ne('<div class="none-params svelte-1sm1mgi"> </div>'), Hy = /* @__PURE__ */ ne('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Py = /* @__PURE__ */ ne('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Vy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  ue(t, !0), Qe(e, Vy);
  const [n, r] = ot(), o = () => U(h(u), "$node", n), i = (x, k = ft, g = ft) => {
    var C = et(), y = be(C);
    Dt(
      y,
      19,
      k,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, S, E) => {
        var V = Ey(), P = be(V);
        const D = /* @__PURE__ */ Pe(() => [...g(), h(E)]);
        Ad(P, {
          get parameter() {
            return h(S);
          },
          get position() {
            return h(D);
          },
          get dataKeyName() {
            return s();
          }
        });
        var A = I(P, 2);
        {
          var T = (B) => {
            var M = /* @__PURE__ */ pe(() => [...g(), h(E)]);
            i(B, () => h(S).children, () => h(M));
          };
          xe(A, (B) => {
            h(S).children && B(T);
          });
        }
        L(_, V);
      },
      (_) => {
        var S = et(), E = be(S);
        {
          var V = (P) => {
            var D = My(), A = W(D, !0);
            X(D), Se(() => Rt(A, a())), L(P, D);
          };
          xe(E, (P) => {
            g().length === 0 && P(V);
          });
        }
        L(_, S);
      }
    ), L(x, C);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Pe(() => pr(l)), c = /* @__PURE__ */ Pe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Py(), f = W(d);
  {
    var v = (x) => {
      var k = Hy();
      He(4), L(x, k);
    };
    xe(f, (x) => {
      h(c).length !== 0 && x(v);
    });
  }
  var w = I(f, 2);
  i(w, () => h(c) || [], () => []), X(d), L(e, d);
  var b = ce({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输出参数") {
      a(x), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), p();
    }
  });
  return r(), b;
}
ie(In, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var zy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ny = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ ne('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const Ty = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Id(e, t) {
  ue(t, !0), Qe(e, Ty);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = tr();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    h(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
  return vn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = zy();
        L(u, c);
      },
      children: (u, c) => {
        var d = Ly(), f = be(d), v = W(f);
        Je(v, {
          level: 3,
          children: (ve, oe) => {
            He();
            var ge = Ie("输入参数");
            L(ve, ge);
          },
          $$slots: { default: !0 }
        });
        var w = I(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ve, oe) => {
            var ge = Ny();
            L(ve, ge);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = I(f, 2);
        Zt(b, {});
        var x = I(b, 2);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (ve, oe) => {
            He();
            var ge = Ie("模型设置");
            L(ve, ge);
          },
          $$slots: { default: !0 }
        });
        var k = I(x, 4), g = W(k);
        const C = /* @__PURE__ */ Pe(() => n().llmId ? [n().llmId] : []);
        Cn(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ve) => {
            const oe = ve.value;
            l(o, () => ({ llmId: oe }));
          },
          get value() {
            return h(C);
          }
        });
        var y = I(g, 2);
        Ui(y, {}), X(k);
        var _ = I(k, 4), S = W(_), E = W(S), V = W(E);
        X(E);
        var P = I(E, 2);
        oo(P), X(S), X(_);
        var D = I(_, 2), A = W(D), T = W(A), B = W(T);
        X(T);
        var M = I(T, 2);
        oo(M), X(A), X(D);
        var z = I(D, 2), $ = W(z), H = W($), N = W(H);
        X(H);
        var O = I(H, 2);
        oo(O), X($), X(z);
        var Z = I(z, 4), K = W(Z);
        const j = /* @__PURE__ */ Pe(() => n().systemPrompt || "");
        St(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return h(j);
          },
          oninput: (ve) => {
            l(o, { systemPrompt: ve.target.value });
          }
        }), X(Z);
        var le = I(Z, 4), J = W(le);
        const Y = /* @__PURE__ */ Pe(() => n().userPrompt || "");
        St(J, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return h(Y);
          },
          oninput: (ve) => {
            l(o, { userPrompt: ve.target.value });
          }
        }), X(le);
        var re = I(le, 2), me = W(re);
        Je(me, {
          level: 3,
          mt: "10px",
          children: (ve, oe) => {
            He();
            var ge = Ie("输出参数");
            L(ve, ge);
          },
          $$slots: { default: !0 }
        });
        var Ce = I(me, 2);
        Fe(Ce, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (ve, oe) => {
            var ge = Dy();
            L(ve, ge);
          },
          $$slots: { default: !0 }
        }), X(re);
        var de = I(re, 2);
        In(de, {}), Se(() => {
          Rt(V, `Temperature: ${n().temperature ?? 0.5}`), na(P, n().temperature ?? 0.5), Rt(B, `Top P: ${n().topP ?? 0.9}`), na(M, n().topP ?? 0.9), Rt(N, `Top K: ${n().topK ?? 50}`), na(O, n().topK ?? 50);
        }), Re("mousedown", P, ra(function(ve) {
          De.call(this, t, ve);
        })), Re("input", P, (ve) => l(o, { temperature: parseFloat(ve.target.value) })), Re("mousedown", M, ra(function(ve) {
          De.call(this, t, ve);
        })), Re("input", M, (ve) => l(o, { topP: parseFloat(ve.target.value) })), Re("mousedown", O, ra(function(ve) {
          De.call(this, t, ve);
        })), Re("input", O, (ve) => l(o, { topK: parseInt(ve.target.value) })), L(u, d);
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
ie(Id, { data: {} }, [], [], !0);
var Oy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ay = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const By = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Zd(e, t) {
  ue(t, !0), Qe(e, By);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Wt(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Lt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return vn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Oy();
        L(l, u);
      },
      children: (l, u) => {
        var c = Zy(), d = be(c), f = W(d);
        Je(f, {
          level: 3,
          children: (D, A) => {
            He();
            var T = Ie("输入参数");
            L(D, T);
          },
          $$slots: { default: !0 }
        });
        var v = I(f, 2);
        Fe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, A) => {
            var T = Ay();
            L(D, T);
          },
          $$slots: { default: !0 }
        }), X(d);
        var w = I(d, 2);
        Zt(w, {});
        var b = I(w, 2);
        Je(b, {
          level: 3,
          mt: "10px",
          children: (D, A) => {
            He();
            var T = Ie("代码");
            L(D, T);
          },
          $$slots: { default: !0 }
        });
        var x = I(b, 4), k = W(x);
        const g = /* @__PURE__ */ Pe(() => n().engine ? [n().engine] : ["qlexpress"]);
        Cn(k, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (D) => {
            const A = D.value;
            a(o, () => ({ engine: A }));
          },
          get value() {
            return h(g);
          }
        }), X(x);
        var C = I(x, 4), y = W(C);
        const _ = /* @__PURE__ */ Pe(() => n().code || "");
        St(y, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (D) => {
            a(o, () => ({ code: D.target.value }));
          },
          get value() {
            return h(_);
          }
        }), X(C);
        var S = I(C, 2), E = W(S);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (D, A) => {
            He();
            var T = Ie("输出参数");
            L(D, T);
          },
          $$slots: { default: !0 }
        });
        var V = I(E, 2);
        Fe(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (D, A) => {
            var T = Iy();
            L(D, T);
          },
          $$slots: { default: !0 }
        }), X(S);
        var P = I(S, 2);
        In(P, {}), L(l, c);
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
ie(Zd, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Xy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Bd(e, t) {
  ue(t, !0), Qe(e, Wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), { updateNodeData: a } = Lt();
  return Fn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), vn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Ry();
        L(s, l);
      },
      children: (s, l) => {
        var u = Yy(), c = be(u), d = W(c);
        Je(d, {
          level: 3,
          children: (_, S) => {
            He();
            var E = Ie("输入参数");
            L(_, E);
          },
          $$slots: { default: !0 }
        });
        var f = I(d, 2);
        Fe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, S) => {
            var E = Xy();
            L(_, E);
          },
          $$slots: { default: !0 }
        }), X(c);
        var v = I(c, 2);
        Zt(v, {});
        var w = I(v, 2);
        Je(w, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            He();
            var E = Ie("代码");
            L(_, E);
          },
          $$slots: { default: !0 }
        });
        var b = I(w, 4), x = W(b);
        const k = /* @__PURE__ */ Pe(() => n().template || "");
        St(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (_) => {
            a(o, () => ({ template: _.target.value }));
          },
          get value() {
            return h(k);
          }
        }), X(b);
        var g = I(b, 2), C = W(g);
        Je(C, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            He();
            var E = Ie("输出参数");
            L(_, E);
          },
          $$slots: { default: !0 }
        }), X(g);
        var y = I(g, 2);
        In(y, {}), L(s, u);
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
ie(Bd, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), qy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Uy = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Jy = /* @__PURE__ */ ne('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Qy = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), ew = /* @__PURE__ */ ne('<div style="width: 100%"><!></div>'), tw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = /* @__PURE__ */ ne('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const rw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Rd(e, t) {
  ue(t, !0), Qe(e, rw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Wt(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = ht(), { addParameter: a } = En(), { updateNodeData: s } = Lt();
  return vn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ky();
        L(l, u);
      },
      children: (l, u) => {
        var c = nw(), d = be(c), f = W(d), v = W(f);
        const w = /* @__PURE__ */ Pe(() => n().method ? [n().method] : ["get"]);
        Cn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ae) => {
            const se = ae.value;
            s(i, () => ({ method: se }));
          },
          get value() {
            return h(w);
          }
        }), X(f);
        var b = I(f, 2), x = W(b);
        const k = /* @__PURE__ */ Pe(() => n().url || "");
        $t(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ae) => {
            s(i, () => ({ url: ae.target.value }));
          },
          get value() {
            return h(k);
          }
        }), X(b), X(d);
        var g = I(d, 2), C = W(g);
        Je(C, {
          level: 3,
          children: (ae, se) => {
            He();
            var ke = Ie("Http 头信息");
            L(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var y = I(C, 2);
        Fe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ae, se) => {
            var ke = qy();
            L(ae, ke);
          },
          $$slots: { default: !0 }
        }), X(g);
        var _ = I(g, 2);
        Zt(_, { dataKeyName: "headers" });
        var S = I(_, 2), E = W(S);
        Je(E, {
          level: 3,
          children: (ae, se) => {
            He();
            var ke = Ie("参数");
            L(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var V = I(E, 2);
        Fe(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (ae, se) => {
            var ke = jy();
            L(ae, ke);
          },
          $$slots: { default: !0 }
        }), X(S);
        var P = I(S, 2);
        Zt(P, { dataKeyName: "urlParameters" });
        var D = I(P, 2);
        Je(D, {
          level: 3,
          mt: "10px",
          children: (ae, se) => {
            He();
            var ke = Ie("Body");
            L(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var A = I(D, 2), T = W(A), B = W(T);
        const M = /* @__PURE__ */ Pe(() => !n().bodyType);
        $t(B, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(M);
          },
          onchange: (ae) => {
            var se;
            (se = ae.target) != null && se.checked && s(i, { bodyType: "" });
          }
        }), He(), X(T);
        var z = I(T, 2), $ = W(z);
        const H = /* @__PURE__ */ Pe(() => n().bodyType === "form-data");
        $t($, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(H);
          },
          onchange: (ae) => {
            var se;
            (se = ae.target) != null && se.checked && s(i, { bodyType: "form-data" });
          }
        }), He(), X(z);
        var N = I(z, 2), O = W(N);
        const Z = /* @__PURE__ */ Pe(() => n().bodyType === "x-www-form-urlencoded");
        $t(O, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(Z);
          },
          onchange: (ae) => {
            var se;
            (se = ae.target) != null && se.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), He(), X(N);
        var K = I(N, 2), j = W(K);
        const le = /* @__PURE__ */ Pe(() => n().bodyType === "json");
        $t(j, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(le);
          },
          onchange: (ae) => {
            var se;
            (se = ae.target) != null && se.checked && s(i, { bodyType: "json" });
          }
        }), He(), X(K);
        var J = I(K, 2), Y = W(J);
        const re = /* @__PURE__ */ Pe(() => n().bodyType === "raw");
        $t(Y, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(re);
          },
          onchange: (ae) => {
            var se;
            (se = ae.target) != null && se.checked && s(i, { bodyType: "raw" });
          }
        }), He(), X(J), X(A);
        var me = I(A, 2);
        {
          var Ce = (ae) => {
            var se = Gy(), ke = be(se), Ke = W(ke);
            Je(Ke, {
              level: 3,
              children: (it, Q) => {
                He();
                var Te = Ie("参数");
                L(it, Te);
              },
              $$slots: { default: !0 }
            });
            var Ve = I(Ke, 2);
            Fe(Ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (it, Q) => {
                var Te = Fy();
                L(it, Te);
              },
              $$slots: { default: !0 }
            }), X(ke);
            var st = I(ke, 2);
            Zt(st, { dataKeyName: "fromData" }), L(ae, se);
          };
          xe(me, (ae) => {
            n().bodyType === "form-data" && ae(Ce);
          });
        }
        var de = I(me, 2);
        {
          var ve = (ae) => {
            var se = Jy(), ke = be(se), Ke = W(ke);
            Je(Ke, {
              level: 3,
              children: (it, Q) => {
                He();
                var Te = Ie("参数");
                L(it, Te);
              },
              $$slots: { default: !0 }
            });
            var Ve = I(Ke, 2);
            Fe(Ve, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (it, Q) => {
                var Te = Uy();
                L(it, Te);
              },
              $$slots: { default: !0 }
            }), X(ke);
            var st = I(ke, 2);
            Zt(st, { dataKeyName: "fromUrlencoded" }), L(ae, se);
          };
          xe(de, (ae) => {
            n().bodyType === "x-www-form-urlencoded" && ae(ve);
          });
        }
        var oe = I(de, 2);
        {
          var ge = (ae) => {
            var se = Qy(), ke = W(se);
            St(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ke) => {
                s(i, { bodyJson: Ke.target.value });
              }
            }), X(se), L(ae, se);
          };
          xe(oe, (ae) => {
            n().bodyType === "json" && ae(ge);
          });
        }
        var Ye = I(oe, 2);
        {
          var Ze = (ae) => {
            var se = ew(), ke = W(se);
            St(ke, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ke) => {
                s(i, { bodyRaw: Ke.target.value });
              }
            }), X(se), L(ae, se);
          };
          xe(Ye, (ae) => {
            n().bodyType === "raw" && ae(Ze);
          });
        }
        var Be = I(Ye, 2), ee = W(Be);
        Je(ee, {
          level: 3,
          mt: "10px",
          children: (ae, se) => {
            He();
            var ke = Ie("输出参数");
            L(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var We = I(ee, 2);
        Fe(We, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (ae, se) => {
            var ke = tw();
            L(ae, ke);
          },
          $$slots: { default: !0 }
        }), X(Be);
        var Ue = I(Be, 2);
        In(Ue, {}), L(l, c);
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
ie(Rd, { data: {} }, [], [], !0);
var ow = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), iw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  ue(t, !0), Qe(e, sw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = tr();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    h(s).push(...d || []);
  });
  const { updateNodeData: l } = Lt();
  return Fn(() => {
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
  }), vn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = ow();
        L(u, c);
      },
      children: (u, c) => {
        var d = aw(), f = be(d), v = W(f);
        Je(v, {
          level: 3,
          children: (P, D) => {
            He();
            var A = Ie("输入参数");
            L(P, A);
          },
          $$slots: { default: !0 }
        });
        var w = I(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (P, D) => {
            var A = iw();
            L(P, A);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = I(f, 2);
        Zt(b, {});
        var x = I(b, 2);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (P, D) => {
            He();
            var A = Ie("知识库设置");
            L(P, A);
          },
          $$slots: { default: !0 }
        });
        var k = I(x, 4), g = W(k);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        Cn(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (P) => {
            const D = P.value;
            l(o, () => ({ knowledgeId: D }));
          },
          get value() {
            return h(C);
          }
        }), X(k);
        var y = I(k, 4), _ = W(y);
        $t(_, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(y);
        var S = I(y, 2), E = W(S);
        Je(E, {
          level: 3,
          mt: "10px",
          children: (P, D) => {
            He();
            var A = Ie("输出参数");
            L(P, A);
          },
          $$slots: { default: !0 }
        }), X(S);
        var V = I(S, 2);
        In(V, {}), L(u, d);
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
var lw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), uw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ ne('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  ue(t, !0), Qe(e, dw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = tr();
  let s = /* @__PURE__ */ xt(Ft([]));
  Wt(async () => {
    var u;
    const c = await ((u = a.provider) == null ? void 0 : u.knowledge());
    h(s).push(...c || []);
  });
  const { updateNodeData: l } = Lt();
  return Fn(() => {
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
  }), vn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = lw();
        L(u, c);
      },
      children: (u, c) => {
        var d = cw(), f = be(d), v = W(f);
        Je(v, {
          level: 3,
          children: (z, $) => {
            He();
            var H = Ie("输入参数");
            L(z, H);
          },
          $$slots: { default: !0 }
        });
        var w = I(v, 2);
        Fe(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, $) => {
            var H = uw();
            L(z, H);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = I(f, 2);
        Zt(b, {});
        var x = I(b, 2);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (z, $) => {
            He();
            var H = Ie("搜索引擎设置");
            L(z, H);
          },
          $$slots: { default: !0 }
        });
        var k = I(x, 4), g = W(k);
        const C = /* @__PURE__ */ Pe(() => n().knowledgeId ? [n().knowledgeId] : []);
        Cn(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (z) => {
            const $ = z.value;
            l(o, () => ({ knowledgeId: $ }));
          },
          get value() {
            return h(C);
          }
        }), X(k);
        var y = I(k, 4), _ = W(y);
        $t(_, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), X(y);
        var S = I(y, 4), E = W(S);
        $t(E, { placeholder: "请输入关键字", style: "width: 100%" }), X(S);
        var V = I(S, 4), P = W(V);
        $t(P, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(V);
        var D = I(V, 4), A = W(D);
        St(A, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), X(D);
        var T = I(D, 2), B = W(T);
        Je(B, {
          level: 3,
          mt: "10px",
          children: (z, $) => {
            He();
            var H = Ie("输出参数");
            L(z, H);
          },
          $$slots: { default: !0 }
        }), X(T);
        var M = I(T, 2);
        In(M, {}), L(u, d);
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
ie(Yd, { data: {} }, [], [], !0);
var fw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), vw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ ne('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const gw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Wd(e, t) {
  ue(t, !0), Qe(e, gw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = En(), a = tr();
  let s = /* @__PURE__ */ xt(Ft([]));
  return Wt(async () => {
    var l;
    const u = await ((l = a.provider) == null ? void 0 : l.knowledge());
    h(s).push(...u || []);
  }), vn(e, ct(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = fw();
        L(l, u);
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
        var c = hw(), d = be(c), f = W(d);
        Je(f, {
          level: 3,
          children: (g, C) => {
            He();
            var y = Ie("循环变量");
            L(g, y);
          },
          $$slots: { default: !0 }
        });
        var v = I(f, 2);
        Fe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (g, C) => {
            var y = vw();
            L(g, y);
          },
          $$slots: { default: !0 }
        }), X(d);
        var w = I(d, 2);
        Zt(w, {});
        var b = I(w, 2), x = W(b);
        Je(x, {
          level: 3,
          mt: "10px",
          children: (g, C) => {
            He();
            var y = Ie("输出参数");
            L(g, y);
          },
          $$slots: { default: !0 }
        }), X(b);
        var k = I(b, 2);
        In(k, {}), L(l, c);
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
ie(Wd, { data: {} }, [], [], !0);
const pw = {
  startNode: Dd,
  codeNode: Zd,
  llmNode: Id,
  templateNode: Bd,
  httpNode: Rd,
  knowledgeNode: Xd,
  searchEngineNode: Yd,
  loopNode: Wd,
  endNode: Od
};
var mw = /* @__PURE__ */ ne("<!> ", 1);
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
      var u = mw(), c = be(u);
      rs(c, n);
      var d = I(c);
      Se(() => Rt(d, ` ${r() ?? ""}`)), L(s, u);
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
var yw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), ww = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), bw = /* @__PURE__ */ ne('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Kd(e, t) {
  ue(t, !0);
  let n = /* @__PURE__ */ xt("base"), r = /* @__PURE__ */ xt("show");
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
  ], a = [], s = tr().customNodes;
  if (s) {
    const x = Object.keys(s).sort((k, g) => (s[k].sortNo || 0) - (s[g].sortNo || 0));
    for (let k of x)
      a.push({
        icon: s[k].icon,
        title: s[k].title,
        type: k
      });
  }
  var l = bw(), u = W(l), c = W(u), d = W(c);
  pd(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      F(n, x.value.toString(), !0);
    }
  }), X(c);
  var f = I(c, 2), v = W(f);
  Dt(v, 21, () => o, vo, (x, k) => {
    Ia(x, ct(() => h(k)));
  }), X(v);
  var w = I(v, 2);
  Dt(w, 21, () => a, vo, (x, k) => {
    Ia(x, ct(() => h(k)));
  }), X(w), X(f), X(u);
  var b = I(u, 2);
  Fe(b, {
    onclick: () => {
      F(r, h(r) ? "" : "show", !0);
    },
    children: (x, k) => {
      var g = et(), C = be(g);
      {
        var y = (S) => {
          var E = yw();
          L(S, E);
        }, _ = (S) => {
          var E = ww();
          L(S, E);
        };
        xe(C, (S) => {
          h(r) === "show" ? S(y) : S(_, !1);
        });
      }
      L(x, g);
    },
    $$slots: { default: !0 }
  }), X(l), Se(() => {
    mt(l, 1, `tf-toolbar ${h(r) ?? ""}`), dt(v, `display: ${(h(n) === "base" ? "flex" : "none") ?? ""}`), dt(w, `display: ${(h(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), L(e, l), ce();
}
ie(Kd, {}, [], [], !0);
const xw = () => {
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
var kw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ne('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Sw = /* @__PURE__ */ $e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ ne('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Mw = /* @__PURE__ */ ne("<!> <div></div> <!>", 1);
const Hw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function qd(e, t) {
  var n;
  ue(t, !0), Qe(e, Hw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ yt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = ht(), { addParameter: a } = En(), s = Lt(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = tr().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  Fn(() => {
    r().expand && d && d.append(u);
  }), Fn(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = /* @__PURE__ */ Pe(() => ({
    ...r(),
    description: c.description
  }));
  return vn(e, ct(
    {
      get data() {
        return h(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var w = et(), b = be(w);
        rs(b, () => c.icon), L(v, w);
      },
      children: (v, w) => {
        var b = Mw(), x = be(b);
        {
          var k = (_) => {
            var S = _w(), E = be(S), V = W(E);
            Je(V, {
              level: 3,
              children: (A, T) => {
                He();
                var B = Ie("输入参数");
                L(A, B);
              },
              $$slots: { default: !0 }
            });
            var P = I(V, 2);
            Fe(P, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i);
              },
              children: (A, T) => {
                var B = kw();
                L(A, B);
              },
              $$slots: { default: !0 }
            }), X(E);
            var D = I(E, 2);
            Zt(D, {}), L(_, S);
          };
          xe(x, (_) => {
            c.parametersEnable !== !1 && _(k);
          });
        }
        var g = I(x, 2);
        $n(g, (_) => d = _, () => d);
        var C = I(g, 2);
        {
          var y = (_) => {
            var S = Ew(), E = be(S), V = W(E);
            Je(V, {
              level: 3,
              mt: "10px",
              children: (A, T) => {
                He();
                var B = Ie("输出参数");
                L(A, B);
              },
              $$slots: { default: !0 }
            });
            var P = I(V, 2);
            Fe(P, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "outputDefs");
              },
              children: (A, T) => {
                var B = Sw();
                L(A, B);
              },
              $$slots: { default: !0 }
            }), X(E);
            var D = I(E, 2);
            In(D, {}), L(_, S);
          };
          xe(C, (_) => {
            c.outputDefsEnable !== !1 && _(y);
          });
        }
        Se(() => {
          dt(g, c.rootStyle || ""), mt(g, 1, dn(c.rootClass), "svelte-c71dg3");
        }), L(v, b);
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
ie(qd, { data: {} }, [], [], !0);
var Pw = /* @__PURE__ */ ne('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Vw = /* @__PURE__ */ ne("<!> <!> <!> <!>", 1), zw = /* @__PURE__ */ ne('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Nw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function jd(e, t) {
  ue(t, !0), Qe(e, Nw);
  const n = m(t, "onInit", 7), r = Lt();
  n()(r);
  let o = /* @__PURE__ */ xt(!1);
  const i = (S) => {
    S.preventDefault(), S.dataTransfer && (S.dataTransfer.dropEffect = "move");
  }, a = (S) => {
    var E;
    S.preventDefault();
    const V = r.screenToFlowPosition({
      x: S.clientX - 250,
      y: S.clientY - 100
    }), P = (E = S.dataTransfer) == null ? void 0 : E.getData("application/tinyflow"), D = P ? JSON.parse(P) : {}, A = {
      id: `node_${Zr()}`,
      position: V,
      data: {},
      ...D
    };
    ti.addNode(A), ti.selectNodeOnly(A.id);
  }, { getNode: s } = xw(), l = (S) => {
    const E = s(S.source), V = s(S.target);
    if (S.sourceHandle === "loop_handle" || E.parentId) {
      const P = r.getEdges();
      for (let D of P)
        if (D.target === S.target) {
          const A = s(D.source);
          if (S.sourceHandle === "loop_handle" && A.parentId !== E.id || E.parentId && A.parentId !== E.parentId)
            return !1;
        }
    }
    return !(!E.parentId && V.parentId && V.parentId !== E.id);
  }, { ensureParentInNodesBefore: u } = $w(), c = (S, E) => {
    if (!E.isValid)
      return;
    const V = E.toNode;
    if (V.parentId)
      return;
    const P = E.fromNode, D = E.fromHandle, A = { position: { ...V.position } };
    if (D.id === "loop_handle" ? A.parentId = P.id : P.parentId && (A.parentId = P.parentId), A.parentId) {
      const T = s(A.parentId);
      A.position = {
        x: V.position.x - T.position.x,
        y: V.position.y - T.position.y
      }, u(A.parentId, V.id), r.updateNode(V.id, A);
    }
  }, { getEdgesByTarget: d } = Cw(), f = (S) => {
    S.edges.forEach((E) => {
      const V = s(E.target);
      if (V.parentId) {
        const P = d(E.target), D = s(V.parentId);
        if (P.length === 0)
          r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + D.position.x,
              y: V.position.y + D.position.y
            }
          });
        else {
          let A = !1;
          for (let T = 0; T < P.length; T++) {
            const B = P[T], M = s(B.source);
            if (M.parentId || M.type === "loopNode") {
              A = !0;
              break;
            }
          }
          A || r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + D.position.x,
              y: V.position.y + D.position.y
            }
          });
        }
      }
    });
  }, v = (S, E) => {
  }, w = (S) => {
  }, b = {}, x = tr().customNodes;
  if (x)
    for (let S of Object.keys(x))
      b[S] = qd;
  var k = zw(), g = W(k);
  Kd(g, {});
  var C = I(g, 2);
  const y = /* @__PURE__ */ Pe(() => ({ ...pw, ...b })), _ = /* @__PURE__ */ Pe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: wo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return td(C, ct(
    {
      get nodeTypes() {
        return h(y);
      }
    },
    ti,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: v,
      onconnect: w,
      connectionRadius: 50,
      ondelete: f,
      onclick: (S) => {
        const E = S.target;
        E.classList.contains("svelte-flow__edge-interaction") || E.classList.contains("panel-content") || E.closest(".panel-content") || F(o, !1);
      },
      get defaultEdgeOptions() {
        return h(_);
      },
      $$events: {
        drop: a,
        dragover: i,
        edgeclick: () => {
          F(o, !0);
        }
      },
      children: (S, E) => {
        var V = Vw(), P = be(V);
        dd(P, {});
        var D = I(P, 2);
        ld(D, {});
        var A = I(D, 2);
        vd(A, {});
        var T = I(A, 2);
        {
          var B = (M) => {
            No(M, {
              children: (z, $) => {
                var H = Pw(), N = I(W(H), 4), O = W(N);
                St(O, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (Z) => {
                  }
                }), X(N), X(H), L(z, H);
              },
              $$slots: { default: !0 }
            });
          };
          xe(T, (M) => {
            h(o) && M(B);
          });
        }
        L(S, V);
      },
      $$slots: { default: !0 }
    }
  )), X(k), L(e, k), ce({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), p();
    }
  });
}
ie(jd, { onInit: {} }, [], [], !0);
function Dw(e, t) {
  ue(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ti.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Vr("tinyflow_options", n()), nd(e, {
    fitView: !0,
    children: (i, a) => {
      jd(i, {
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
customElements.define("tinyflow-component", ie(Dw, { options: {}, onInit: {} }, [], [], !1));
const Bw = /* @__PURE__ */ cf({
  __name: "Tinyflow",
  props: {
    className: {},
    style: {},
    data: {},
    provider: {},
    customNodes: {},
    onNodeExecute: { type: Function }
  },
  setup(e, { expose: t }) {
    const n = e, r = df(null);
    let o = null;
    return ff(() => {
      r.value && (o = new Dm({
        ...n,
        element: r.value
      }));
    }), vf(() => {
      o && (o.destroy(), o = null);
    }), t({
      getData: () => o ? o.getData() : (console.warn("Tinyflow instance is not initialized"), null)
    }), (a, s) => (gf(), hf("div", {
      ref_key: "divRef",
      ref: r,
      class: mf(["tinyflow", a.className]),
      style: pf(a.style)
    }, null, 6));
  }
});
export {
  Bw as Tinyflow
};
//# sourceMappingURL=index.js.map
